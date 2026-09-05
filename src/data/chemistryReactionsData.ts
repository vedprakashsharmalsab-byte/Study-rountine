// =========================================================================
// CBSE Class 10 Chemistry — 100% Comprehensive Reactions Master Repository
// Standard: CBSE Board Examination 2026-27 (Code 086)
// Covers EVERY single chemical reaction from NCERT Chapters 1, 2, 3, and 4
// =========================================================================

export type ReactionType = 
  | "Combination"
  | "Thermal Decomposition"
  | "Electrolytic Decomposition"
  | "Photolytic Decomposition"
  | "Displacement"
  | "Double Displacement (Precipitation)"
  | "Redox (Oxidation-Reduction)"
  | "Neutralization"
  | "Acid-Carbonate Gas Evolution"
  | "Chlor-Alkali Process"
  | "Salt Preparation / Hydration"
  | "Combustion"
  | "Controlled Oxidation"
  | "Addition (Hydrogenation)"
  | "Substitution"
  | "Esterification"
  | "Saponification"
  | "Thermite Reaction"
  | "Roasting & Calcination"
  | "Corrosion & Rusting";

export interface ChemicalEntity {
  formula: string;
  name: string;
  state: "(s)" | "(l)" | "(g)" | "(aq)";
  color?: string;
}

export interface ChemistryReaction {
  id: string;
  chapterNo: number;
  chapterName: string;
  topic: string;
  reactionType: ReactionType;
  title: string;
  balancedEquation: string;
  wordEquation: string;
  reactants: ChemicalEntity[];
  products: ChemicalEntity[];
  conditions?: string;
  heatTransfer: "Exothermic" | "Endothermic" | "Thermoneutral" | string;
  keyObservations: string[];
  boardExamTrap: string;
  ncertReference: string;
}

export const CHEMISTRY_REACTIONS_MASTER: ChemistryReaction[] = [
  {
    "id": "rx_1_1",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Combination Reactions",
    "reactionType": "Combination",
    "title": "Burning of Magnesium Ribbon in Air",
    "balancedEquation": "2\\text{Mg}(s) + \\text{O}_2(g) \\xrightarrow{\\Delta} 2\\text{MgO}(s)",
    "wordEquation": "Magnesium + Oxygen → Magnesium oxide + Heat + Light",
    "reactants": [
      {
        "formula": "Mg",
        "name": "Magnesium ribbon",
        "state": "(s)",
        "color": "Silvery white"
      },
      {
        "formula": "O2",
        "name": "Atmospheric oxygen",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "MgO",
        "name": "Magnesium oxide ash",
        "state": "(s)",
        "color": "Dazzling white powder"
      }
    ],
    "conditions": "Heat / Flame",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Burns with a dazzling, brilliant white flame that can damage unprotected eyes.",
      "Forms a brittle, white ash of magnesium oxide (MgO).",
      "MgO dissolved in water turns red litmus paper blue, confirming it is a basic oxide."
    ],
    "boardExamTrap": "Why rub with sandpaper first? To scrub off the inert, unreactive coating of basic magnesium carbonate [MgCO3·Mg(OH)2] formed by reaction with atmospheric CO2 and moisture.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Activity 1.1 (Page 2)"
  },
  {
    "id": "rx_1_2",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Combination Reactions",
    "reactionType": "Combination",
    "title": "Slaking of Quicklime (Calcium Oxide with Water)",
    "balancedEquation": "\\text{CaO}(s) + \\text{H}_2\\text{O}(l) \\to \\text{Ca(OH)}_2(aq) + \\text{Heat}",
    "wordEquation": "Quicklime (Calcium oxide) + Water → Slaked lime (Calcium hydroxide) + Heat",
    "reactants": [
      {
        "formula": "CaO",
        "name": "Quicklime / Burnt lime",
        "state": "(s)",
        "color": "White solid"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "Ca(OH)2",
        "name": "Slaked lime / Limewater",
        "state": "(aq)",
        "color": "Colorless / cloudy solution"
      }
    ],
    "conditions": "Vigorous room temperature reaction",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Vigorous boiling-like bubbling with a loud hissing sound.",
      "The beaker becomes scalding hot to the touch (massive heat release).",
      "Forms slaked lime, which is used for whitewashing walls."
    ],
    "boardExamTrap": "Do not confuse Quicklime (CaO) with Slaked lime [Ca(OH)2] or Limestone (CaCO3). Always write (aq) for slaked lime solution.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Section 1.2.1 (Page 6)"
  },
  {
    "id": "rx_1_3",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Whitewashing Wall Reaction",
    "reactionType": "Combination",
    "title": "Formation of Calcium Carbonate during Whitewashing",
    "balancedEquation": "\\text{Ca(OH)}_2(aq) + \\text{CO}_2(g) \\to \\text{CaCO}_3(s) + \\text{H}_2\\text{O}(l)",
    "wordEquation": "Calcium hydroxide + Carbon dioxide → Calcium carbonate (shiny layer) + Water",
    "reactants": [
      {
        "formula": "Ca(OH)2",
        "name": "Calcium hydroxide (Whitewash paint)",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "CO2",
        "name": "Atmospheric Carbon dioxide",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "CaCO3",
        "name": "Calcium carbonate (Limestone thin crust)",
        "state": "(s)",
        "color": "Shiny white"
      },
      {
        "formula": "H2O",
        "name": "Water vapour",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "conditions": "2 to 3 days drying in air",
    "heatTransfer": "Thermoneutral",
    "keyObservations": [
      "A thin, shiny crust of marble/calcium carbonate forms on the wall surface after 2-3 days, giving a lustrous white finish."
    ],
    "boardExamTrap": "Why does whitewash shine after 2-3 days? Because slaked lime slowly absorbs atmospheric CO2 to form a uniform crystalline layer of CaCO3.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, 'Do You Know?' Box (Page 7)"
  },
  {
    "id": "rx_1_4",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Combination & Combustion",
    "reactionType": "Combustion",
    "title": "Combustion of Coal / Carbon",
    "balancedEquation": "\\text{C}(s) + \\text{O}_2(g) \\to \\text{CO}_2(g) + \\text{Heat}",
    "wordEquation": "Carbon + Oxygen → Carbon dioxide + Heat",
    "reactants": [
      {
        "formula": "C",
        "name": "Coal / Carbon",
        "state": "(s)",
        "color": "Black"
      },
      {
        "formula": "O2",
        "name": "Oxygen",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "CO2",
        "name": "Carbon dioxide",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "Ignition",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Coal burns leaving behind little residue; heat and CO2 gas are released."
    ],
    "boardExamTrap": "This is simultaneously a Combination Reaction and an Exothermic Reaction.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Section 1.2.1"
  },
  {
    "id": "rx_1_5",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Combustion of Natural Gas",
    "reactionType": "Combustion",
    "title": "Combustion of Methane (Natural Gas)",
    "balancedEquation": "\\text{CH}_4(g) + 2\\text{O}_2(g) \\to \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(g) + \\text{Heat}",
    "wordEquation": "Methane + Oxygen → Carbon dioxide + Water vapour + Heat",
    "reactants": [
      {
        "formula": "CH4",
        "name": "Methane",
        "state": "(g)",
        "color": "Colorless"
      },
      {
        "formula": "O2",
        "name": "Oxygen",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "CO2",
        "name": "Carbon dioxide",
        "state": "(g)",
        "color": "Colorless"
      },
      {
        "formula": "H2O",
        "name": "Water vapour",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "Flame ignition",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Burns with a clean, blue non-luminous flame in excess oxygen."
    ],
    "boardExamTrap": "Notice water is in gaseous form (g) because of the intense heat of combustion.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Section 1.2.1 (Page 7)"
  },
  {
    "id": "rx_1_6",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Respiration Reaction",
    "reactionType": "Redox (Oxidation-Reduction)",
    "title": "Cellular Respiration (Exothermic Biological Combustion)",
    "balancedEquation": "\\text{C}_6\\text{H}_{12}\\text{O}_6(aq) + 6\\text{O}_2(aq) \\to 6\\text{CO}_2(aq) + 6\\text{H}_2\\text{O}(l) + \\text{Energy (ATP)}",
    "wordEquation": "Glucose + Oxygen → Carbon dioxide + Water + Energy (38 ATP)",
    "reactants": [
      {
        "formula": "C6H12O6",
        "name": "Glucose",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "O2",
        "name": "Dissolved oxygen",
        "state": "(aq)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "CO2",
        "name": "Carbon dioxide",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "conditions": "Cellular enzymes inside mitochondria",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Glucose is oxidized; energy is stored in ATP molecules.",
      "Proves why respiration is considered an exothermic reaction in CBSE exams."
    ],
    "boardExamTrap": "CBSE Question: 'Why is respiration considered an exothermic reaction?' Answer: Because food carbohydrates are broken down into glucose, which combines with oxygen in cells to release energy.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Page 7"
  },
  {
    "id": "rx_1_7",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Thermal Decomposition",
    "reactionType": "Thermal Decomposition",
    "title": "Thermal Decomposition of Ferrous Sulphate Crystals",
    "balancedEquation": "2\\text{FeSO}_4(s) \\xrightarrow{\\Delta} \\text{Fe}_2\\text{O}_3(s) + \\text{SO}_2(g) + \\text{SO}_3(g)",
    "wordEquation": "Ferrous sulphate (heated) → Ferric oxide + Sulphur dioxide + Sulphur trioxide",
    "reactants": [
      {
        "formula": "FeSO4.7H2O",
        "name": "Green vitriol crystals (Ferrous sulphate heptahydrate)",
        "state": "(s)",
        "color": "Pale green"
      }
    ],
    "products": [
      {
        "formula": "Fe2O3",
        "name": "Ferric oxide",
        "state": "(s)",
        "color": "Reddish brown"
      },
      {
        "formula": "SO2",
        "name": "Sulphur dioxide gas",
        "state": "(g)",
        "color": "Colorless, choking smell of burning sulphur"
      },
      {
        "formula": "SO3",
        "name": "Sulphur trioxide gas",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "Strong heating in boiling tube",
    "heatTransfer": "Endothermic",
    "keyObservations": [
      "Initial heating loses 7 water molecules of crystallisation: pale green crystals turn dirty white anhydrous FeSO4.",
      "On further strong heating, dirty white powder turns reddish-brown Fe2O3.",
      "Pungent, suffocating, characteristic smell of burning sulphur (due to SO2 and SO3).",
      "Moist blue litmus paper held at the boiling tube mouth turns red (acidic oxides)."
    ],
    "boardExamTrap": "Never sniff boiling tube directly! Waft gas gently towards nose. Both SO2 and SO3 are formed; both are acidic gases.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Activity 1.5 (Page 8)"
  },
  {
    "id": "rx_1_8",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Thermal Decomposition",
    "reactionType": "Thermal Decomposition",
    "title": "Thermal Decomposition of Limestone",
    "balancedEquation": "\\text{CaCO}_3(s) \\xrightarrow{\\Delta} \\text{CaO}(s) + \\text{CO}_2(g)",
    "wordEquation": "Limestone (Calcium carbonate) → Quicklime (Calcium oxide) + Carbon dioxide",
    "reactants": [
      {
        "formula": "CaCO3",
        "name": "Limestone / Chalk / Marble",
        "state": "(s)",
        "color": "White"
      }
    ],
    "products": [
      {
        "formula": "CaO",
        "name": "Quicklime",
        "state": "(s)",
        "color": "White"
      },
      {
        "formula": "CO2",
        "name": "Carbon dioxide gas",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "Strong heating (~1000 °C in lime kilns)",
    "heatTransfer": "Endothermic",
    "keyObservations": [
      "Major industrial reaction for manufacturing cement and glass from limestone."
    ],
    "boardExamTrap": "Limestone, Chalk, and Marble are all different physical forms of the same chemical compound: CaCO3.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Section 1.2.2 (Page 9)"
  },
  {
    "id": "rx_1_9",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Thermal Decomposition",
    "reactionType": "Thermal Decomposition",
    "title": "Thermal Decomposition of Lead Nitrate",
    "balancedEquation": "2\\text{Pb(NO}_3)_2(s) \\xrightarrow{\\Delta} 2\\text{PbO}(s) + 4\\text{NO}_2(g) + \\text{O}_2(g)",
    "wordEquation": "Lead nitrate (white) → Lead monoxide (yellow) + Nitrogen dioxide (brown fumes) + Oxygen",
    "reactants": [
      {
        "formula": "Pb(NO3)2",
        "name": "Lead nitrate powder",
        "state": "(s)",
        "color": "White crystalline"
      }
    ],
    "products": [
      {
        "formula": "PbO",
        "name": "Lead(II) oxide / Litharge",
        "state": "(s)",
        "color": "Yellow solid (reddish-brown when hot, yellow when cold)"
      },
      {
        "formula": "NO2",
        "name": "Nitrogen dioxide gas",
        "state": "(g)",
        "color": "Dense reddish-brown fumes"
      },
      {
        "formula": "O2",
        "name": "Oxygen gas",
        "state": "(g)",
        "color": "Colorless (relights glowing splinter)"
      }
    ],
    "conditions": "Direct dry heating in dry test tube",
    "heatTransfer": "Endothermic",
    "keyObservations": [
      "Crackling (decrepitation) sound heard during heating.",
      "Dense, reddish-brown suffocating fumes of Nitrogen dioxide (NO2) fill the tube.",
      "A glowing incense splinter held at the mouth bursts into flame (confirming O2 release).",
      "A yellow residue of Lead monoxide (PbO) adheres to the glass test tube walls."
    ],
    "boardExamTrap": "NO2 is REDDISH-BROWN, not colorless! Writing NO or N2O instead of NO2 is penalized. Coefficient of NO2 is 4, balancing is tested heavily.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Activity 1.6 (Page 9)"
  },
  {
    "id": "rx_1_10",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Electrolytic Decomposition",
    "reactionType": "Electrolytic Decomposition",
    "title": "Electrolysis of Water (Acidulated Water)",
    "balancedEquation": "2\\text{H}_2\\text{O}(l) \\xrightarrow{\\text{Electric Current}} 2\\text{H}_2(g)[\\text{Cathode}] + \\text{O}_2(g)[\\text{Anode}]",
    "wordEquation": "Water (with drops of dil. H2SO4) → Hydrogen (Cathode, 2 vols) + Oxygen (Anode, 1 vol)",
    "reactants": [
      {
        "formula": "H2O",
        "name": "Acidulated water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "H2",
        "name": "Hydrogen gas (Cathode: negative electrode)",
        "state": "(g)",
        "color": "Colorless"
      },
      {
        "formula": "O2",
        "name": "Oxygen gas (Anode: positive electrode)",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "6V DC battery + Graphite electrodes + Few drops dil. H2SO4 to increase conductivity",
    "heatTransfer": "Endothermic (Electrical energy absorbed)",
    "keyObservations": [
      "Gas collected at cathode is exactly TWICE the volume of gas collected at anode (Ratio 2 : 1).",
      "Cathode gas burns with a sharp 'POP' sound when tested with a burning splinter (Hydrogen).",
      "Anode gas makes a glowing splinter burn brightly (Oxygen)."
    ],
    "boardExamTrap": "Mnemonic: C-C-H (Cathode is Negative, attracts Cations H+, collects Hydrogen). Ratio is 2:1 because water molecule contains 2 hydrogen atoms for every 1 oxygen atom (H2O).",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Activity 1.7 (Page 9)"
  },
  {
    "id": "rx_1_11",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Photolytic Decomposition",
    "reactionType": "Photolytic Decomposition",
    "title": "Photodecomposition of Silver Chloride",
    "balancedEquation": "2\\text{AgCl}(s) \\xrightarrow{\\text{Sunlight } (h\\nu)} 2\\text{Ag}(s) + \\text{Cl}_2(g)",
    "wordEquation": "Silver chloride (white) → Silver metal (grey) + Chlorine gas (yellow-green)",
    "reactants": [
      {
        "formula": "AgCl",
        "name": "Silver chloride in watch glass",
        "state": "(s)",
        "color": "Pure white"
      }
    ],
    "products": [
      {
        "formula": "Ag",
        "name": "Metallic silver",
        "state": "(s)",
        "color": "Grey"
      },
      {
        "formula": "Cl2",
        "name": "Chlorine gas",
        "state": "(g)",
        "color": "Pungent, greenish-yellow"
      }
    ],
    "conditions": "Sunlight (Ultraviolet / Photons)",
    "heatTransfer": "Endothermic (Light energy absorbed)",
    "keyObservations": [
      "White silver chloride powder gradually turns dark grey after exposure to bright sunlight for 15-30 minutes.",
      "Used historically in black-and-white photography.",
      "Stored in dark amber/brown reagent bottles to prevent premature photodecomposition by ambient light."
    ],
    "boardExamTrap": "Why is AgCl stored in dark amber bottles? To shield it from sunlight which decomposes it into grey silver metal.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Activity 1.8 (Page 10)"
  },
  {
    "id": "rx_1_12",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Photolytic Decomposition",
    "reactionType": "Photolytic Decomposition",
    "title": "Photodecomposition of Silver Bromide",
    "balancedEquation": "2\\text{AgBr}(s) \\xrightarrow{\\text{Sunlight } (h\\nu)} 2\\text{Ag}(s) + \\text{Br}_2(g)",
    "wordEquation": "Silver bromide (pale yellow) → Silver metal (grey) + Bromine vapour (reddish brown)",
    "reactants": [
      {
        "formula": "AgBr",
        "name": "Silver bromide",
        "state": "(s)",
        "color": "Pale yellow"
      }
    ],
    "products": [
      {
        "formula": "Ag",
        "name": "Silver",
        "state": "(s)",
        "color": "Grey"
      },
      {
        "formula": "Br2",
        "name": "Bromine gas",
        "state": "(g)",
        "color": "Reddish brown"
      }
    ],
    "conditions": "Sunlight",
    "heatTransfer": "Endothermic",
    "keyObservations": [
      "Pale yellow powder turns grey. Iconic reaction used in black and white photographic film."
    ],
    "boardExamTrap": "Both AgCl and AgBr undergo photolytic decomposition; both are used in black and white photography.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Section 1.2.2 (Page 10)"
  },
  {
    "id": "rx_1_13",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Displacement Reactions",
    "reactionType": "Displacement",
    "title": "Iron Nail in Copper Sulphate Solution",
    "balancedEquation": "\\text{Fe}(s) + \\text{CuSO}_4(aq) \\to \\text{FeSO}_4(aq) + \\text{Cu}(s)",
    "wordEquation": "Iron nail + Copper sulphate (blue) → Ferrous sulphate (light green) + Copper (reddish brown)",
    "reactants": [
      {
        "formula": "Fe",
        "name": "Iron nails (cleaned with sandpaper)",
        "state": "(s)",
        "color": "Silvery grey"
      },
      {
        "formula": "CuSO4",
        "name": "Copper sulphate solution",
        "state": "(aq)",
        "color": "Deep blue"
      }
    ],
    "products": [
      {
        "formula": "FeSO4",
        "name": "Ferrous sulphate solution",
        "state": "(aq)",
        "color": "Light / pale green"
      },
      {
        "formula": "Cu",
        "name": "Copper deposit on nails",
        "state": "(s)",
        "color": "Reddish-brown coating"
      }
    ],
    "conditions": "Room temperature, 20-30 minutes immersion",
    "heatTransfer": "Exothermic (mild)",
    "keyObservations": [
      "The deep blue color of copper sulphate solution fades and gradually turns light/pale green.",
      "A shiny reddish-brown layer of pure copper metal is deposited on the surface of the iron nails.",
      "Iron is more reactive than copper and displaces it from its salt solution (Reactivity Series)."
    ],
    "boardExamTrap": "Do not write 'solution becomes brown'. The SOLUTION turns light green (FeSO4); the NAIL gets a reddish-brown coating of copper.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Activity 1.9 (Page 10)"
  },
  {
    "id": "rx_1_14",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Displacement Reactions",
    "reactionType": "Displacement",
    "title": "Zinc with Copper Sulphate Solution",
    "balancedEquation": "\\text{Zn}(s) + \\text{CuSO}_4(aq) \\to \\text{ZnSO}_4(aq) + \\text{Cu}(s)",
    "wordEquation": "Zinc granules + Copper sulphate (blue) → Zinc sulphate (colorless) + Copper (reddish brown)",
    "reactants": [
      {
        "formula": "Zn",
        "name": "Zinc metal",
        "state": "(s)",
        "color": "Silvery grey"
      },
      {
        "formula": "CuSO4",
        "name": "Copper sulphate",
        "state": "(aq)",
        "color": "Blue"
      }
    ],
    "products": [
      {
        "formula": "ZnSO4",
        "name": "Zinc sulphate",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "Cu",
        "name": "Copper",
        "state": "(s)",
        "color": "Reddish-brown"
      }
    ],
    "conditions": "Room temperature",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Blue color of CuSO4 completely disappears to yield a crystal-clear, colorless solution."
    ],
    "boardExamTrap": "Zn is more reactive than Cu. If copper metal is placed in ZnSO4 solution, NO REACTION occurs.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Section 1.2.3 (Page 11)"
  },
  {
    "id": "rx_1_15",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Displacement Reactions",
    "reactionType": "Displacement",
    "title": "Lead with Copper Chloride Solution",
    "balancedEquation": "\\text{Pb}(s) + \\text{CuCl}_2(aq) \\to \\text{PbCl}_2(aq) + \\text{Cu}(s)",
    "wordEquation": "Lead + Copper chloride (green) → Lead chloride (colorless) + Copper (reddish brown)",
    "reactants": [
      {
        "formula": "Pb",
        "name": "Lead metal",
        "state": "(s)",
        "color": "Bluish grey"
      },
      {
        "formula": "CuCl2",
        "name": "Copper(II) chloride",
        "state": "(aq)",
        "color": "Greenish blue"
      }
    ],
    "products": [
      {
        "formula": "PbCl2",
        "name": "Lead chloride",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "Cu",
        "name": "Copper metal",
        "state": "(s)",
        "color": "Reddish brown"
      }
    ],
    "conditions": "Room temperature",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Greenish-blue solution decolorizes as lead displaces copper."
    ],
    "boardExamTrap": "Lead is more reactive than copper in the reactivity series.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Section 1.2.3 (Page 11)"
  },
  {
    "id": "rx_1_16",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Double Displacement / Precipitation",
    "reactionType": "Double Displacement (Precipitation)",
    "title": "Precipitation of Barium Sulphate",
    "balancedEquation": "\\text{Na}_2\\text{SO}_4(aq) + \\text{BaCl}_2(aq) \\to \\text{BaSO}_4(s)\\downarrow + 2\\text{NaCl}(aq)",
    "wordEquation": "Sodium sulphate + Barium chloride → Barium sulphate (white ppt) + Sodium chloride",
    "reactants": [
      {
        "formula": "Na2SO4",
        "name": "Sodium sulphate solution",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "BaCl2",
        "name": "Barium chloride solution",
        "state": "(aq)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "BaSO4",
        "name": "Barium sulphate precipitate",
        "state": "(s)",
        "color": "Dense white precipitate"
      },
      {
        "formula": "NaCl",
        "name": "Sodium chloride in solution",
        "state": "(aq)",
        "color": "Colorless"
      }
    ],
    "conditions": "Instantaneous mixing at room temperature",
    "heatTransfer": "Thermoneutral",
    "keyObservations": [
      "Immediate formation of an insoluble, dense, milky-white precipitate of Barium sulphate (BaSO4).",
      "The precipitate does not dissolve even in dilute hydrochloric acid (used as confirmatory test for sulphate ion SO4²⁻)."
    ],
    "boardExamTrap": "Always include the down-arrow (↓) or state symbol (s) for BaSO4! Missing this costs 0.5 mark on CBSE papers.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Activity 1.10 (Page 11)"
  },
  {
    "id": "rx_1_17",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Double Displacement / Precipitation",
    "reactionType": "Double Displacement (Precipitation)",
    "title": "Precipitation of Lead Iodide (Golden Yellow)",
    "balancedEquation": "\\text{Pb(NO}_3)_2(aq) + 2\\text{KI}(aq) \\to \\text{PbI}_2(s)\\downarrow + 2\\text{KNO}_3(aq)",
    "wordEquation": "Lead nitrate + Potassium iodide → Lead iodide (brilliant yellow ppt) + Potassium nitrate",
    "reactants": [
      {
        "formula": "Pb(NO3)2",
        "name": "Lead nitrate solution",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "KI",
        "name": "Potassium iodide solution",
        "state": "(aq)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "PbI2",
        "name": "Lead(II) iodide precipitate",
        "state": "(s)",
        "color": "Brilliant, golden canary yellow"
      },
      {
        "formula": "KNO3",
        "name": "Potassium nitrate solution",
        "state": "(aq)",
        "color": "Colorless"
      }
    ],
    "conditions": "Instantaneous mixing",
    "heatTransfer": "Thermoneutral",
    "keyObservations": [
      "Two completely clear, colorless liquids mix to immediately generate a spectacular, opaque, golden-yellow precipitate.",
      "If the mixture is heated, PbI2 dissolves; upon slow cooling, it recrystallizes as shimmering golden spangles ('Golden Rain')."
    ],
    "boardExamTrap": "Formula of lead iodide is PbI2 (Lead has valency 2+; Iodide is 1-), NOT PbI!",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Activity 1.2 (Page 2)"
  },
  {
    "id": "rx_1_18",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Redox Reactions",
    "reactionType": "Redox (Oxidation-Reduction)",
    "title": "Oxidation of Copper to Copper(II) Oxide",
    "balancedEquation": "2\\text{Cu}(s) + \\text{O}_2(g) \\xrightarrow{\\Delta} 2\\text{CuO}(s)",
    "wordEquation": "Copper powder (brown) + Oxygen → Copper(II) oxide (black coating)",
    "reactants": [
      {
        "formula": "Cu",
        "name": "Copper powder in china dish",
        "state": "(s)",
        "color": "Reddish brown"
      },
      {
        "formula": "O2",
        "name": "Oxygen",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "CuO",
        "name": "Copper(II) oxide",
        "state": "(s)",
        "color": "Jet black"
      }
    ],
    "conditions": "Strong heating in open china dish",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "The surface of reddish-brown copper powder becomes coated with a jet-black substance (Copper(II) oxide).",
      "Copper has gained oxygen: it has been oxidized."
    ],
    "boardExamTrap": "Color of CuO is BLACK. Do not say brown or grey.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Section 1.2.5 (Page 12)"
  },
  {
    "id": "rx_1_19",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Redox Reactions",
    "reactionType": "Redox (Oxidation-Reduction)",
    "title": "Reduction of Copper(II) Oxide by Hydrogen Gas",
    "balancedEquation": "\\text{CuO}(s) + \\text{H}_2(g) \\xrightarrow{\\Delta} \\text{Cu}(s) + \\text{H}_2\\text{O}(g)",
    "wordEquation": "Copper oxide (black) + Hydrogen → Copper metal (reddish brown) + Water vapour",
    "reactants": [
      {
        "formula": "CuO",
        "name": "Copper(II) oxide",
        "state": "(s)",
        "color": "Black"
      },
      {
        "formula": "H2",
        "name": "Hydrogen gas passed over heated CuO",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "Cu",
        "name": "Regenerated copper metal",
        "state": "(s)",
        "color": "Reddish brown"
      },
      {
        "formula": "H2O",
        "name": "Steam",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "Heated tube with flowing H2 gas",
    "heatTransfer": "Endothermic",
    "keyObservations": [
      "The black surface coating turns back into reddish-brown elemental copper metal.",
      "CuO loses oxygen: it is reduced (Oxidizing Agent = CuO).",
      "H2 gains oxygen: it is oxidized (Reducing Agent = H2)."
    ],
    "boardExamTrap": "Identify Oxidizing & Reducing Agents: Oxidizing agent is ALWAYS the substance reduced (CuO); Reducing agent is the substance oxidized (H2).",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Section 1.2.5 (Page 12)"
  },
  {
    "id": "rx_1_20",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Redox Reactions",
    "reactionType": "Redox (Oxidation-Reduction)",
    "title": "Reaction of Manganese Dioxide with Hydrochloric Acid",
    "balancedEquation": "\\text{MnO}_2(s) + 4\\text{HCl}(aq) \\to \\text{MnCl}_2(aq) + 2\\text{H}_2\\text{O}(l) + \\text{Cl}_2(g)",
    "wordEquation": "Manganese dioxide + Hydrochloric acid → Manganese chloride + Water + Chlorine gas",
    "reactants": [
      {
        "formula": "MnO2",
        "name": "Manganese dioxide",
        "state": "(s)",
        "color": "Black solid"
      },
      {
        "formula": "HCl",
        "name": "Conc. hydrochloric acid",
        "state": "(aq)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "MnCl2",
        "name": "Manganese(II) chloride",
        "state": "(aq)",
        "color": "Pale pink / colorless"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      },
      {
        "formula": "Cl2",
        "name": "Chlorine gas",
        "state": "(g)",
        "color": "Greenish-yellow, choking smell"
      }
    ],
    "conditions": "Gentle warming",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "MnO2 is reduced to MnCl2 (loses oxygen, oxidation state of Mn drops from +4 to +2).",
      "HCl is oxidized to Cl2 (loses hydrogen / electrons, Cl drops from -1 to 0).",
      "Oxidizing Agent: MnO2; Reducing Agent: HCl."
    ],
    "boardExamTrap": "Super high-frequency board question! Students often erroneously write that HCl is reduced. HCl is OXIDIZED to Cl2.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Section 1.2.5 (Page 13)"
  },
  {
    "id": "rx_1_21",
    "chapterNo": 1,
    "chapterName": "Chemical Reactions and Equations",
    "topic": "Corrosion",
    "reactionType": "Corrosion & Rusting",
    "title": "Rusting of Iron (Hydrated Ferric Oxide Formation)",
    "balancedEquation": "4\\text{Fe}(s) + 3\\text{O}_2(g) + 2x\\text{H}_2\\text{O}(l) \\to 2\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}(s)",
    "wordEquation": "Iron + Oxygen + Moisture → Rust (Hydrated ferric oxide, reddish-brown flaky crust)",
    "reactants": [
      {
        "formula": "Fe",
        "name": "Iron surface",
        "state": "(s)",
        "color": "Silvery grey"
      },
      {
        "formula": "O2",
        "name": "Oxygen",
        "state": "(g)",
        "color": "Colorless"
      },
      {
        "formula": "H2O",
        "name": "Moisture / Humidity",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "Fe2O3.xH2O",
        "name": "Rust",
        "state": "(s)",
        "color": "Reddish-brown flaky powder"
      }
    ],
    "conditions": "Both Air (O2) AND Water (H2O) must be simultaneously present",
    "heatTransfer": "Exothermic (very slow)",
    "keyObservations": [
      "Reddish-brown flaky crust forms on iron, eating away the structural metal.",
      "Prevention methods: Galvanization (coating with molten zinc), painting, greasing, chrome plating, alloying into stainless steel (Fe + Ni + Cr)."
    ],
    "boardExamTrap": "Why 'x' in formula? Because the number of water molecules varies with atmospheric humidity. Write Fe2O3·xH2O, not Fe2O3.",
    "ncertReference": "NCERT Class 10 Science, Chapter 1, Section 1.3.1 (Page 13)"
  },
  {
    "id": "rx_2_1",
    "chapterNo": 2,
    "chapterName": "Acids, Bases and Salts",
    "topic": "Reaction of Acids with Metals",
    "reactionType": "Displacement",
    "title": "Reaction of Zinc with Dilute Sulphuric Acid",
    "balancedEquation": "\\text{Zn}(s) + \\text{H}_2\\text{SO}_4(aq) \\to \\text{ZnSO}_4(aq) + \\text{H}_2(g)\\uparrow",
    "wordEquation": "Zinc granules + Dilute Sulphuric acid → Zinc sulphate + Hydrogen gas (Pop sound)",
    "reactants": [
      {
        "formula": "Zn",
        "name": "Zinc granules",
        "state": "(s)",
        "color": "Silvery grey"
      },
      {
        "formula": "H2SO4",
        "name": "Dilute sulphuric acid",
        "state": "(aq)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "ZnSO4",
        "name": "Zinc sulphate",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "H2",
        "name": "Hydrogen gas",
        "state": "(g)",
        "color": "Colorless, odorless"
      }
    ],
    "conditions": "Room temperature",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Brisk effervescence of gas bubbles appearing on the surface of zinc granules.",
      "When gas is passed through soap solution, soap bubbles filled with hydrogen rise in the air.",
      "A burning candle brought near a gas bubble bursts it with a distinct 'POP' sound."
    ],
    "boardExamTrap": "Confirmatory Test for H2: Always write 'Burns with a pop sound when a burning splinter is brought near the gas'.",
    "ncertReference": "NCERT Class 10 Science, Chapter 2, Activity 2.1 (Page 19)"
  },
  {
    "id": "rx_2_2",
    "chapterNo": 2,
    "chapterName": "Acids, Bases and Salts",
    "topic": "Reaction of Bases with Metals",
    "reactionType": "Displacement",
    "title": "Reaction of Zinc with Sodium Hydroxide (Amphoteric Nature)",
    "balancedEquation": "\\text{Zn}(s) + 2\\text{NaOH}(aq) \\xrightarrow{\\Delta} \\text{Na}_2\\text{ZnO}_2(aq) + \\text{H}_2(g)\\uparrow",
    "wordEquation": "Zinc + Sodium hydroxide (warm) → Sodium zincate + Hydrogen gas",
    "reactants": [
      {
        "formula": "Zn",
        "name": "Zinc metal granules",
        "state": "(s)",
        "color": "Silvery grey"
      },
      {
        "formula": "NaOH",
        "name": "Sodium hydroxide solution",
        "state": "(aq)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "Na2ZnO2",
        "name": "Sodium zincate",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "H2",
        "name": "Hydrogen gas",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "Gentle warming of test tube",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Brisk evolution of Hydrogen gas upon warming.",
      "Confirms that Zinc is an amphoteric metal capable of reacting with both acids and strong alkalis."
    ],
    "boardExamTrap": "Super critical formula: Sodium zincate is Na2ZnO2 (Zincate radical is ZnO2²⁻), NOT NaZnO2!",
    "ncertReference": "NCERT Class 10 Science, Chapter 2, Activity 2.2 (Page 20)"
  },
  {
    "id": "rx_2_3",
    "chapterNo": 2,
    "chapterName": "Acids, Bases and Salts",
    "topic": "Acid with Metal Carbonate",
    "reactionType": "Acid-Carbonate Gas Evolution",
    "title": "Reaction of Sodium Carbonate with Hydrochloric Acid",
    "balancedEquation": "\\text{Na}_2\\text{CO}_3(s) + 2\\text{HCl}(aq) \\to 2\\text{NaCl}(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)\\uparrow",
    "wordEquation": "Sodium carbonate + Hydrochloric acid → Sodium chloride + Water + Carbon dioxide",
    "reactants": [
      {
        "formula": "Na2CO3",
        "name": "Sodium carbonate",
        "state": "(s)",
        "color": "White powder"
      },
      {
        "formula": "HCl",
        "name": "Hydrochloric acid",
        "state": "(aq)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "NaCl",
        "name": "Sodium chloride",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      },
      {
        "formula": "CO2",
        "name": "Carbon dioxide gas",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "Room temperature in Woulfe bottle / boiling tube",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Vigorous, brisk effervescence (bubbling).",
      "Gas evolved turns freshly prepared limewater milky, confirming CO2."
    ],
    "boardExamTrap": "Brisk effervescence is due to CO2, NOT H2! H2 does not show effervescence with carbonates.",
    "ncertReference": "NCERT Class 10 Science, Chapter 2, Activity 2.5 (Page 20)"
  },
  {
    "id": "rx_2_4",
    "chapterNo": 2,
    "chapterName": "Acids, Bases and Salts",
    "topic": "Acid with Metal Hydrogen Carbonate",
    "reactionType": "Acid-Carbonate Gas Evolution",
    "title": "Reaction of Sodium Hydrogen Carbonate with Hydrochloric Acid",
    "balancedEquation": "\\text{NaHCO}_3(s) + \\text{HCl}(aq) \\to \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)\\uparrow",
    "wordEquation": "Sodium hydrogen carbonate + Hydrochloric acid → Sodium chloride + Water + Carbon dioxide",
    "reactants": [
      {
        "formula": "NaHCO3",
        "name": "Baking soda (Sodium bicarbonate)",
        "state": "(s)",
        "color": "White"
      },
      {
        "formula": "HCl",
        "name": "Hydrochloric acid",
        "state": "(aq)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "NaCl",
        "name": "Sodium chloride",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      },
      {
        "formula": "CO2",
        "name": "Carbon dioxide",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "Room temperature",
    "heatTransfer": "Endothermic / mild cooling",
    "keyObservations": [
      "Brisk effervescence; gas turns limewater milky."
    ],
    "boardExamTrap": "Notice mole ratio is 1:1 for NaHCO3 with HCl, whereas it is 1:2 for Na2CO3 with HCl.",
    "ncertReference": "NCERT Class 10 Science, Chapter 2, Activity 2.5 (Page 20)"
  },
  {
    "id": "rx_2_5",
    "chapterNo": 2,
    "chapterName": "Acids, Bases and Salts",
    "topic": "Confirmatory Test for Carbon Dioxide",
    "reactionType": "Double Displacement (Precipitation)",
    "title": "Lime Water Test for Carbon Dioxide Gas",
    "balancedEquation": "\\text{Ca(OH)}_2(aq) + \\text{CO}_2(g) \\to \\text{CaCO}_3(s)\\downarrow + \\text{H}_2\\text{O}(l)",
    "wordEquation": "Lime water (Calcium hydroxide) + Carbon dioxide → Calcium carbonate (milky white ppt) + Water",
    "reactants": [
      {
        "formula": "Ca(OH)2",
        "name": "Freshly prepared limewater",
        "state": "(aq)",
        "color": "Crystal clear"
      },
      {
        "formula": "CO2",
        "name": "Carbon dioxide gas bubbled through",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "CaCO3",
        "name": "Calcium carbonate precipitate",
        "state": "(s)",
        "color": "Milky turbid white"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "conditions": "Pass CO2 gas through delivery tube for a few seconds",
    "heatTransfer": "Thermoneutral",
    "keyObservations": [
      "The completely clear limewater turns opaque, milky turbid white due to formation of insoluble CaCO3 precipitate."
    ],
    "boardExamTrap": "What happens if CO2 is passed for too long? See rx_2_6 below! Milkiness DISAPPEARS upon excess CO2.",
    "ncertReference": "NCERT Class 10 Science, Chapter 2, Section 2.1.3 (Page 21)"
  },
  {
    "id": "rx_2_6",
    "chapterNo": 2,
    "chapterName": "Acids, Bases and Salts",
    "topic": "Excess Carbon Dioxide in Lime Water",
    "reactionType": "Combination",
    "title": "Passing Excess Carbon Dioxide through Milky Lime Water",
    "balancedEquation": "\\text{CaCO}_3(s) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g) \\to \\text{Ca(HCO}_3)_2(aq)",
    "wordEquation": "Calcium carbonate (milky ppt) + Water + Excess CO2 → Calcium hydrogen carbonate (soluble, clear)",
    "reactants": [
      {
        "formula": "CaCO3",
        "name": "Calcium carbonate precipitate",
        "state": "(s)",
        "color": "Milky white"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      },
      {
        "formula": "CO2",
        "name": "Excess carbon dioxide bubbled continuously",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "Ca(HCO3)2",
        "name": "Calcium hydrogen carbonate (Calcium bicarbonate)",
        "state": "(aq)",
        "color": "Completely clear & transparent solution"
      }
    ],
    "conditions": "Continuous bubbling of CO2 for 2-3 minutes",
    "heatTransfer": "Thermoneutral",
    "keyObservations": [
      "The cloudy white milkiness completely vanishes, leaving behind a sparkling clear solution.",
      "Because Calcium hydrogen carbonate is readily soluble in water."
    ],
    "boardExamTrap": "Iconic board question: 'Why does milkiness disappear on passing excess CO2?' Answer: Due to formation of water-soluble calcium hydrogen carbonate [Ca(HCO3)2].",
    "ncertReference": "NCERT Class 10 Science, Chapter 2, Section 2.1.3 (Page 21)"
  },
  {
    "id": "rx_2_7",
    "chapterNo": 2,
    "chapterName": "Acids, Bases and Salts",
    "topic": "Neutralization",
    "reactionType": "Neutralization",
    "title": "Neutralization of Strong Acid with Strong Base",
    "balancedEquation": "\\text{HCl}(aq) + \\text{NaOH}(aq) \\to \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l) + \\text{Heat}",
    "wordEquation": "Hydrochloric acid + Sodium hydroxide → Sodium chloride + Water + Heat",
    "reactants": [
      {
        "formula": "HCl",
        "name": "Hydrochloric acid",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "NaOH",
        "name": "Sodium hydroxide with phenolphthalein (pink)",
        "state": "(aq)",
        "color": "Pink"
      }
    ],
    "products": [
      {
        "formula": "NaCl",
        "name": "Sodium chloride",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "conditions": "Titration / mixing",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Phenolphthalein is pink in NaOH; adding dilute HCl drop by drop suddenly discharges pink color to completely colorless at neutralization point.",
      "Net ionic equation is: H+(aq) + OH-(aq) → H2O(l)."
    ],
    "boardExamTrap": "Phenolphthalein color in acid: COLORLESS; in base: PINK. Methyl orange in acid: RED; in base: YELLOW.",
    "ncertReference": "NCERT Class 10 Science, Chapter 2, Activity 2.6 (Page 21)"
  },
  {
    "id": "rx_2_8",
    "chapterNo": 2,
    "chapterName": "Acids, Bases and Salts",
    "topic": "Metallic Oxide with Acid",
    "reactionType": "Neutralization",
    "title": "Reaction of Copper(II) Oxide with Hydrochloric Acid",
    "balancedEquation": "\\text{CuO}(s) + 2\\text{HCl}(aq) \\to \\text{CuCl}_2(aq) + \\text{H}_2\\text{O}(l)",
    "wordEquation": "Copper(II) oxide (black powder) + Hydrochloric acid → Copper(II) chloride (blue-green) + Water",
    "reactants": [
      {
        "formula": "CuO",
        "name": "Copper(II) oxide",
        "state": "(s)",
        "color": "Black powder"
      },
      {
        "formula": "HCl",
        "name": "Dilute hydrochloric acid",
        "state": "(aq)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "CuCl2",
        "name": "Copper(II) chloride solution",
        "state": "(aq)",
        "color": "Distinctive blue-green"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "conditions": "Gentle stirring and warming",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "The black copper oxide powder dissolves.",
      "The solution turns a vivid, beautiful blue-green color due to the formation of CuCl2.",
      "Proves that metallic oxides are BASIC in nature because they react with acids to yield salt + water."
    ],
    "boardExamTrap": "Color of CuCl2 solution is BLUE-GREEN. Why are metallic oxides called basic oxides? Because like bases, they react with acids to give salt and water.",
    "ncertReference": "NCERT Class 10 Science, Chapter 2, Activity 2.7 (Page 21)"
  },
  {
    "id": "rx_2_9",
    "chapterNo": 2,
    "chapterName": "Acids, Bases and Salts",
    "topic": "Chlor-Alkali Process",
    "reactionType": "Chlor-Alkali Process",
    "title": "Electrolysis of Brine (Chlor-Alkali Process)",
    "balancedEquation": "2\\text{NaCl}(aq) + 2\\text{H}_2\\text{O}(l) \\xrightarrow{\\text{Electricity}} 2\\text{NaOH}(aq) + \\text{Cl}_2(g)[\\text{Anode}] + \\text{H}_2(g)[\\text{Cathode}]",
    "wordEquation": "Brine (Aqueous sodium chloride) + Water → Sodium hydroxide + Chlorine (Anode) + Hydrogen (Cathode)",
    "reactants": [
      {
        "formula": "NaCl",
        "name": "Brine (Concentrated sodium chloride solution)",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "NaOH",
        "name": "Sodium hydroxide (Caustic soda formed near cathode)",
        "state": "(aq)",
        "color": "Colorless alkali"
      },
      {
        "formula": "Cl2",
        "name": "Chlorine gas evolved at ANODE (+)",
        "state": "(g)",
        "color": "Greenish yellow"
      },
      {
        "formula": "H2",
        "name": "Hydrogen gas evolved at CATHODE (-)",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "Membrane cell with continuous electric current",
    "heatTransfer": "Endothermic (Electrical energy)",
    "keyObservations": [
      "Why called 'Chlor-Alkali'? 'Chlor' for Chlorine product, and 'Alkali' for Sodium hydroxide (NaOH).",
      "Uses: Cl2 for water treatment/PVC/bleaching; H2 for fuels/ammonia for fertilizers; NaOH for de-greasing metals/soaps/paper making."
    ],
    "boardExamTrap": "Products at electrodes: Anode = Cl2; Cathode = H2; NaOH solution forms near the cathode.",
    "ncertReference": "NCERT Class 10 Science, Chapter 2, Section 2.4.2 (Page 30)"
  },
  {
    "id": "rx_2_10",
    "chapterNo": 2,
    "chapterName": "Acids, Bases and Salts",
    "topic": "Bleaching Powder Preparation",
    "reactionType": "Salt Preparation / Hydration",
    "title": "Manufacture of Bleaching Powder",
    "balancedEquation": "\\text{Ca(OH)}_2(s) + \\text{Cl}_2(g) \\to \\text{CaOCl}_2(s) + \\text{H}_2\\text{O}(l)",
    "wordEquation": "Dry slaked lime + Chlorine gas → Bleaching powder (Calcium oxychloride) + Water",
    "reactants": [
      {
        "formula": "Ca(OH)2",
        "name": "Dry slaked lime",
        "state": "(s)",
        "color": "White powder"
      },
      {
        "formula": "Cl2",
        "name": "Chlorine gas from chlor-alkali process",
        "state": "(g)",
        "color": "Greenish yellow"
      }
    ],
    "products": [
      {
        "formula": "CaOCl2",
        "name": "Bleaching powder (Calcium oxychloride)",
        "state": "(s)",
        "color": "Pale yellowish-white powder"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "conditions": "Action of chlorine gas on DRY slaked lime (not limewater)",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Bleaching powder has a strong, pungent smell of chlorine because it slowly reacts with atmospheric CO2.",
      "Used for bleaching cotton and linen in textile industry, bleaching wood pulp, and as a disinfectant for sterilizing drinking water."
    ],
    "boardExamTrap": "Must be DRY slaked lime Ca(OH)2(s), NOT limewater solution! Formula is CaOCl2.",
    "ncertReference": "NCERT Class 10 Science, Chapter 2, Section 2.4.3 (Page 31)"
  },
  {
    "id": "rx_2_11",
    "chapterNo": 2,
    "chapterName": "Acids, Bases and Salts",
    "topic": "Baking Soda Preparation (Solvay Process)",
    "reactionType": "Salt Preparation / Hydration",
    "title": "Manufacture of Baking Soda (Sodium Hydrogen Carbonate)",
    "balancedEquation": "\\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2 + \\text{NH}_3 \\to \\text{NH}_4\\text{Cl} + \\text{NaHCO}_3(s)\\downarrow",
    "wordEquation": "Sodium chloride + Water + Carbon dioxide + Ammonia → Ammonium chloride + Sodium hydrogen carbonate",
    "reactants": [
      {
        "formula": "NaCl",
        "name": "Common salt",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      },
      {
        "formula": "CO2",
        "name": "Carbon dioxide",
        "state": "(g)",
        "color": "Colorless"
      },
      {
        "formula": "NH3",
        "name": "Ammonia gas",
        "state": "(g)",
        "color": "Colorless, pungent"
      }
    ],
    "products": [
      {
        "formula": "NH4Cl",
        "name": "Ammonium chloride",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "NaHCO3",
        "name": "Baking soda precipitate",
        "state": "(s)",
        "color": "White crystalline powder"
      }
    ],
    "conditions": "Solvay process tower",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "NaHCO3 is sparingly soluble in the presence of excess NH4+ and Na+ ions, precipitating out.",
      "NaHCO3 is a mild non-corrosive basic salt with pH ~8.3, used as an antacid to neutralize stomach acidity."
    ],
    "boardExamTrap": "Raw materials for Solvay process: NaCl, H2O, CO2, and NH3. Memorize this 4-component recipe.",
    "ncertReference": "NCERT Class 10 Science, Chapter 2, Section 2.4.4 (Page 31)"
  },
  {
    "id": "rx_2_12",
    "chapterNo": 2,
    "chapterName": "Acids, Bases and Salts",
    "topic": "Cooking / Heating Baking Soda",
    "reactionType": "Thermal Decomposition",
    "title": "Thermal Decomposition of Baking Soda during Cooking",
    "balancedEquation": "2\\text{NaHCO}_3(s) \\xrightarrow{\\Delta} \\text{Na}_2\\text{CO}_3(s) + \\text{H}_2\\text{O}(g) + \\text{CO}_2(g)\\uparrow",
    "wordEquation": "Sodium hydrogen carbonate (heated) → Sodium carbonate + Water vapour + Carbon dioxide gas",
    "reactants": [
      {
        "formula": "NaHCO3",
        "name": "Baking soda",
        "state": "(s)",
        "color": "White powder"
      }
    ],
    "products": [
      {
        "formula": "Na2CO3",
        "name": "Sodium carbonate (Soda ash)",
        "state": "(s)",
        "color": "White solid"
      },
      {
        "formula": "H2O",
        "name": "Steam",
        "state": "(g)",
        "color": "Colorless"
      },
      {
        "formula": "CO2",
        "name": "Carbon dioxide gas",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "Baking heat in oven / cooking flame",
    "heatTransfer": "Endothermic",
    "keyObservations": [
      "CO2 gas bubbles trapped in dough expand on heating, causing bread, pakoras, and cakes to rise and become soft and spongy.",
      "Baking Powder contains Baking Soda + a mild edible acid like Tartaric acid (to neutralize the bitter taste of Na2CO3)."
    ],
    "boardExamTrap": "Difference between Baking Soda and Baking Powder: Baking Soda is pure NaHCO3. Baking Powder is NaHCO3 + Tartaric acid (which reacts with Na2CO3 to prevent bitter taste).",
    "ncertReference": "NCERT Class 10 Science, Chapter 2, Section 2.4.4 (Page 31)"
  },
  {
    "id": "rx_2_13",
    "chapterNo": 2,
    "chapterName": "Acids, Bases and Salts",
    "topic": "Washing Soda Preparation",
    "reactionType": "Salt Preparation / Hydration",
    "title": "Recrystallisation of Sodium Carbonate (Washing Soda)",
    "balancedEquation": "\\text{Na}_2\\text{CO}_3(s) + 10\\text{H}_2\\text{O}(l) \\to \\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}(s)",
    "wordEquation": "Sodium carbonate + 10 Water molecules → Washing soda (Sodium carbonate decahydrate)",
    "reactants": [
      {
        "formula": "Na2CO3",
        "name": "Anhydrous sodium carbonate (Soda ash)",
        "state": "(s)",
        "color": "White powder"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "Na2CO3.10H2O",
        "name": "Washing soda crystals",
        "state": "(s)",
        "color": "Transparent efflorescent crystals"
      }
    ],
    "conditions": "Dissolution in water followed by slow recrystallization",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Contains 10 molecules of water of crystallisation per formula unit.",
      "Used in glass, soap, and paper industries, for domestic cleaning, and for removing permanent hardness of water."
    ],
    "boardExamTrap": "How does washing soda remove permanent hardness of water? It precipitates dissolved Ca²⁺ and Mg²⁺ ions as insoluble carbonates: CaSO4 + Na2CO3 → CaCO3↓ + Na2SO4.",
    "ncertReference": "NCERT Class 10 Science, Chapter 2, Section 2.4.5 (Page 32)"
  },
  {
    "id": "rx_2_14",
    "chapterNo": 2,
    "chapterName": "Acids, Bases and Salts",
    "topic": "Plaster of Paris Preparation",
    "reactionType": "Thermal Decomposition",
    "title": "Heating Gypsum to make Plaster of Paris (POP)",
    "balancedEquation": "\\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}(s) \\xrightarrow{373\\text{ K } (100^\\circ\\text{C})} \\text{CaSO}_4 \\cdot \\frac{1}{2}\\text{H}_2\\text{O}(s) + 1\\frac{1}{2}\\text{H}_2\\text{O}(g)",
    "wordEquation": "Gypsum (heated at 373 K) → Plaster of Paris (Calcium sulphate hemihydrate) + 1.5 Water vapour",
    "reactants": [
      {
        "formula": "CaSO4.2H2O",
        "name": "Gypsum",
        "state": "(s)",
        "color": "White mineral"
      }
    ],
    "products": [
      {
        "formula": "CaSO4.0.5H2O",
        "name": "Plaster of Paris (POP)",
        "state": "(s)",
        "color": "Fine white powder"
      },
      {
        "formula": "H2O",
        "name": "Water vapour",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "Strict temperature control at 373 K (100 °C)",
    "heatTransfer": "Endothermic",
    "keyObservations": [
      "Why 'hemihydrate' (1/2 H2O)? Two formula units of CaSO4 share one molecule of H2O: 2CaSO4·H2O.",
      "If heated above 373 K, it loses all water to become anhydrous calcium sulphate ('dead burnt plaster'), which does not set with water!"
    ],
    "boardExamTrap": "Temperature must NOT exceed 373 K (100 °C)! Above 373 K, it forms dead burnt plaster CaSO4 with no setting property.",
    "ncertReference": "NCERT Class 10 Science, Chapter 2, Section 2.4.6 (Page 33)"
  },
  {
    "id": "rx_2_15",
    "chapterNo": 2,
    "chapterName": "Acids, Bases and Salts",
    "topic": "Setting of Plaster of Paris",
    "reactionType": "Salt Preparation / Hydration",
    "title": "Setting of Plaster of Paris with Water",
    "balancedEquation": "\\text{CaSO}_4 \\cdot \\frac{1}{2}\\text{H}_2\\text{O}(s) + 1\\frac{1}{2}\\text{H}_2\\text{O}(l) \\to \\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}(s) + \\text{Heat}",
    "wordEquation": "Plaster of Paris + Water → Gypsum (hard rigid solid mass) + Heat",
    "reactants": [
      {
        "formula": "CaSO4.0.5H2O",
        "name": "Plaster of Paris powder",
        "state": "(s)",
        "color": "White powder"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "CaSO4.2H2O",
        "name": "Reformed Gypsum",
        "state": "(s)",
        "color": "Hard, interlocking crystalline mass"
      }
    ],
    "conditions": "Mixed into a paste and left for 10-15 minutes",
    "heatTransfer": "Exothermic (slightly warms up during setting)",
    "keyObservations": [
      "Sets into a rock-hard solid within 10-15 minutes with slight expansion in volume (ideal for casts/moulds).",
      "Used by doctors for plastering fractured bones in correct position, making toys, decorative ceiling designs, and smooth surfaces."
    ],
    "boardExamTrap": "Why stored in moisture-proof containers? Because even atmospheric humidity causes POP to slowly absorb water and turn into hard useless gypsum.",
    "ncertReference": "NCERT Class 10 Science, Chapter 2, Section 2.4.6 (Page 33)"
  },
  {
    "id": "rx_3_1",
    "chapterNo": 3,
    "chapterName": "Metals and Non-Metals",
    "topic": "Reaction of Metals with Oxygen",
    "reactionType": "Combination",
    "title": "Combustion of Sodium in Air",
    "balancedEquation": "4\\text{Na}(s) + \\text{O}_2(g) \\to 2\\text{Na}_2\\text{O}(s)",
    "wordEquation": "Sodium + Oxygen → Sodium oxide",
    "reactants": [
      {
        "formula": "Na",
        "name": "Sodium metal (stored under kerosene)",
        "state": "(s)",
        "color": "Soft silvery metal"
      },
      {
        "formula": "O2",
        "name": "Oxygen",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "Na2O",
        "name": "Sodium oxide",
        "state": "(s)",
        "color": "White solid"
      }
    ],
    "conditions": "Spontaneous at room temperature (vigorous)",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Sodium and potassium react so vigorously with oxygen that they catch fire if kept in the open.",
      "Therefore, they are kept immersed under kerosene oil to prevent accidental fires."
    ],
    "boardExamTrap": "Why are Na and K kept immersed in kerosene oil? Because of their extreme reactivity with atmospheric oxygen and moisture.",
    "ncertReference": "NCERT Class 10 Science, Chapter 3, Section 3.2.1 (Page 41)"
  },
  {
    "id": "rx_3_2",
    "chapterNo": 3,
    "chapterName": "Metals and Non-Metals",
    "topic": "Amphoteric Oxides",
    "reactionType": "Neutralization",
    "title": "Amphoteric Nature of Aluminium Oxide with Acid (HCl)",
    "balancedEquation": "\\text{Al}_2\\text{O}_3(s) + 6\\text{HCl}(aq) \\to 2\\text{AlCl}_3(aq) + 3\\text{H}_2\\text{O}(l)",
    "wordEquation": "Aluminium oxide + Hydrochloric acid → Aluminium chloride + Water",
    "reactants": [
      {
        "formula": "Al2O3",
        "name": "Aluminium oxide",
        "state": "(s)",
        "color": "White solid"
      },
      {
        "formula": "HCl",
        "name": "Hydrochloric acid",
        "state": "(aq)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "AlCl3",
        "name": "Aluminium chloride",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "conditions": "Warming",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Al2O3 acts as a BASE by reacting with acid HCl to give salt and water."
    ],
    "boardExamTrap": "Definition: 'Those metal oxides which show both acidic as well as basic behaviour to produce salt and water are known as Amphoteric Oxides' (e.g. Al2O3, ZnO).",
    "ncertReference": "NCERT Class 10 Science, Chapter 3, Section 3.2.1 (Page 41)"
  },
  {
    "id": "rx_3_3",
    "chapterNo": 3,
    "chapterName": "Metals and Non-Metals",
    "topic": "Amphoteric Oxides",
    "reactionType": "Neutralization",
    "title": "Amphoteric Nature of Aluminium Oxide with Base (NaOH)",
    "balancedEquation": "\\text{Al}_2\\text{O}_3(s) + 2\\text{NaOH}(aq) \\xrightarrow{\\Delta} 2\\text{NaAlO}_2(aq) + \\text{H}_2\\text{O}(l)",
    "wordEquation": "Aluminium oxide + Sodium hydroxide → Sodium aluminate + Water",
    "reactants": [
      {
        "formula": "Al2O3",
        "name": "Aluminium oxide",
        "state": "(s)",
        "color": "White"
      },
      {
        "formula": "NaOH",
        "name": "Sodium hydroxide solution",
        "state": "(aq)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "NaAlO2",
        "name": "Sodium aluminate",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "conditions": "Heating with concentrated alkali",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Al2O3 acts as an ACID by reacting with strong base NaOH to yield salt and water."
    ],
    "boardExamTrap": "Formula: Sodium aluminate is NaAlO2 (Aluminate radical is AlO2⁻). Extremely common formula error in board exams.",
    "ncertReference": "NCERT Class 10 Science, Chapter 3, Section 3.2.1 (Page 41)"
  },
  {
    "id": "rx_3_4",
    "chapterNo": 3,
    "chapterName": "Metals and Non-Metals",
    "topic": "Amphoteric Oxides",
    "reactionType": "Neutralization",
    "title": "Amphoteric Nature of Zinc Oxide with Base (NaOH)",
    "balancedEquation": "\\text{ZnO}(s) + 2\\text{NaOH}(aq) \\xrightarrow{\\Delta} \\text{Na}_2\\text{ZnO}_2(aq) + \\text{H}_2\\text{O}(l)",
    "wordEquation": "Zinc oxide + Sodium hydroxide → Sodium zincate + Water",
    "reactants": [
      {
        "formula": "ZnO",
        "name": "Zinc oxide (white powder)",
        "state": "(s)",
        "color": "White (yellow when hot)"
      },
      {
        "formula": "NaOH",
        "name": "Sodium hydroxide",
        "state": "(aq)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "Na2ZnO2",
        "name": "Sodium zincate",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "conditions": "Heating",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Zinc oxide dissolves in hot concentrated NaOH to produce soluble sodium zincate."
    ],
    "boardExamTrap": "ZnO reacts with both HCl to give ZnCl2, and NaOH to give Na2ZnO2, confirming it is amphoteric.",
    "ncertReference": "NCERT Class 10 Science, Chapter 3, Section 3.2.1"
  },
  {
    "id": "rx_3_5",
    "chapterNo": 3,
    "chapterName": "Metals and Non-Metals",
    "topic": "Reaction of Metals with Water",
    "reactionType": "Displacement",
    "title": "Violent Reaction of Potassium with Cold Water",
    "balancedEquation": "2\\text{K}(s) + 2\\text{H}_2\\text{O}(l) \\to 2\\text{KOH}(aq) + \\text{H}_2(g)\\uparrow + \\text{Heat}",
    "wordEquation": "Potassium + Cold water → Potassium hydroxide + Hydrogen gas + Massive heat",
    "reactants": [
      {
        "formula": "K",
        "name": "Potassium metal",
        "state": "(s)",
        "color": "Silvery soft"
      },
      {
        "formula": "H2O",
        "name": "Cold water in trough",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "KOH",
        "name": "Potassium hydroxide",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "H2",
        "name": "Hydrogen gas (catches fire)",
        "state": "(g)",
        "color": "Lilac flame"
      }
    ],
    "conditions": "Cold water (immediate violent reaction)",
    "heatTransfer": "Highly Exothermic",
    "keyObservations": [
      "Potassium darts violently on water surface, melting into a silvery ball.",
      "The evolved hydrogen instantly ignites with a characteristic lilac/purple flame.",
      "Solution turns basic (red litmus turns blue)."
    ],
    "boardExamTrap": "Why does H2 catch fire? The reaction is so violently exothermic that the heat evolved exceeds the ignition temperature of hydrogen gas.",
    "ncertReference": "NCERT Class 10 Science, Chapter 3, Section 3.2.2 (Page 42)"
  },
  {
    "id": "rx_3_6",
    "chapterNo": 3,
    "chapterName": "Metals and Non-Metals",
    "topic": "Reaction of Metals with Water",
    "reactionType": "Displacement",
    "title": "Reaction of Calcium with Water (Floating Phenomenon)",
    "balancedEquation": "\\text{Ca}(s) + 2\\text{H}_2\\text{O}(l) \\to \\text{Ca(OH)}_2(aq) + \\text{H}_2(g)\\uparrow",
    "wordEquation": "Calcium + Water → Calcium hydroxide + Hydrogen gas",
    "reactants": [
      {
        "formula": "Ca",
        "name": "Calcium metal granules",
        "state": "(s)",
        "color": "Dull grey"
      },
      {
        "formula": "H2O",
        "name": "Cold water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "Ca(OH)2",
        "name": "Calcium hydroxide solution",
        "state": "(aq)",
        "color": "Milky turbid"
      },
      {
        "formula": "H2",
        "name": "Hydrogen bubbles sticking to metal",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "Room temperature",
    "heatTransfer": "Exothermic (not enough to ignite H2)",
    "keyObservations": [
      "Reaction is less violent; the heat is insufficient for hydrogen to catch fire.",
      "Calcium initially sinks, but starts FLOATING because bubbles of hydrogen gas stick to its surface like tiny lifebuoys."
    ],
    "boardExamTrap": "High-yield board question: 'Why does calcium start floating when put in water?' Answer: Because the bubbles of hydrogen gas formed stick to the surface of the metal.",
    "ncertReference": "NCERT Class 10 Science, Chapter 3, Section 3.2.2 (Page 43)"
  },
  {
    "id": "rx_3_7",
    "chapterNo": 3,
    "chapterName": "Metals and Non-Metals",
    "topic": "Reaction of Metals with Steam",
    "reactionType": "Displacement",
    "title": "Reaction of Red-Hot Iron with Steam",
    "balancedEquation": "3\\text{Fe}(s) + 4\\text{H}_2\\text{O}(g) \\xrightarrow{\\text{Red Hot}} \\text{Fe}_3\\text{O}_4(s) + 4\\text{H}_2(g)\\uparrow",
    "wordEquation": "Iron (red hot) + Steam → Magnetic iron oxide (Ferrosoferric oxide) + Hydrogen gas",
    "reactants": [
      {
        "formula": "Fe",
        "name": "Iron wool / filings",
        "state": "(s)",
        "color": "Grey"
      },
      {
        "formula": "H2O",
        "name": "Steam generated from wet glass wool",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "Fe3O4",
        "name": "Magnetic iron oxide (FeII FeIII2 O4)",
        "state": "(s)",
        "color": "Black"
      },
      {
        "formula": "H2",
        "name": "Hydrogen gas collected over water",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "Iron heated red-hot in combustion tube with passing steam",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Iron does NOT react with cold or hot water; it only reacts with STEAM.",
      "Forms black magnetic oxide of iron (Fe3O4), NOT Fe2O3!",
      "Hydrogen gas collected burns with pop sound."
    ],
    "boardExamTrap": "Product formula is Fe3O4 (Ferrosoferric oxide, mixture of FeO and Fe2O3), NOT Fe2O3 or FeO!",
    "ncertReference": "NCERT Class 10 Science, Chapter 3, Activity 3.10 (Page 43)"
  },
  {
    "id": "rx_3_8",
    "chapterNo": 3,
    "chapterName": "Metals and Non-Metals",
    "topic": "Metallurgy — Roasting",
    "reactionType": "Roasting & Calcination",
    "title": "Roasting of Zinc Blende (Sulphide Ore)",
    "balancedEquation": "2\\text{ZnS}(s) + 3\\text{O}_2(g) \\xrightarrow{\\Delta} 2\\text{ZnO}(s) + 2\\text{SO}_2(g)\\uparrow",
    "wordEquation": "Zinc sulphide (Zinc blende ore) + Oxygen (excess air, heated) → Zinc oxide + Sulphur dioxide",
    "reactants": [
      {
        "formula": "ZnS",
        "name": "Zinc blende ore",
        "state": "(s)",
        "color": "Dark crystalline solid"
      },
      {
        "formula": "O2",
        "name": "Excess atmospheric oxygen",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "ZnO",
        "name": "Zinc oxide",
        "state": "(s)",
        "color": "Yellow when hot, white when cold"
      },
      {
        "formula": "SO2",
        "name": "Sulphur dioxide gas",
        "state": "(g)",
        "color": "Pungent gas"
      }
    ],
    "conditions": "Heating strongly below melting point in EXCESS of air (Reverberatory furnace)",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Sulphide ore is converted into oxide because it is easier to extract a metal from its oxide than from its sulphide.",
      "Pungent SO2 gas is captured and used to manufacture sulphuric acid by contact process."
    ],
    "boardExamTrap": "Definition: Roasting is heating a SULPHIDE ore strongly in the presence of EXCESS AIR. Contrast with Calcination (limited air / carbonates).",
    "ncertReference": "NCERT Class 10 Science, Chapter 3, Section 3.4.4 (Page 51)"
  },
  {
    "id": "rx_3_9",
    "chapterNo": 3,
    "chapterName": "Metals and Non-Metals",
    "topic": "Metallurgy — Calcination",
    "reactionType": "Roasting & Calcination",
    "title": "Calcination of Calamine (Carbonate Ore)",
    "balancedEquation": "\\text{ZnCO}_3(s) \\xrightarrow{\\Delta} \\text{ZnO}(s) + \\text{CO}_2(g)\\uparrow",
    "wordEquation": "Zinc carbonate (Calamine ore, heated) → Zinc oxide + Carbon dioxide gas",
    "reactants": [
      {
        "formula": "ZnCO3",
        "name": "Calamine ore",
        "state": "(s)",
        "color": "White/grey mineral"
      }
    ],
    "products": [
      {
        "formula": "ZnO",
        "name": "Zinc oxide",
        "state": "(s)",
        "color": "Yellow hot / white cold"
      },
      {
        "formula": "CO2",
        "name": "Carbon dioxide",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "Heating strongly in LIMITED air or absence of air",
    "heatTransfer": "Endothermic",
    "keyObservations": [
      "Carbonate ore releases CO2 leaving behind porous metal oxide (ZnO).",
      "Porous oxide is easier to reduce with coke in blast furnace."
    ],
    "boardExamTrap": "Mnemonic: C-C (Calcination is for Carbonate ores, releases CO2). Roasting is for Sulphide ores, releases SO2.",
    "ncertReference": "NCERT Class 10 Science, Chapter 3, Section 3.4.4 (Page 51)"
  },
  {
    "id": "rx_3_10",
    "chapterNo": 3,
    "chapterName": "Metals and Non-Metals",
    "topic": "Metallurgy — Reduction",
    "reactionType": "Redox (Oxidation-Reduction)",
    "title": "Reduction of Zinc Oxide using Carbon (Coke)",
    "balancedEquation": "\\text{ZnO}(s) + \\text{C}(s) \\xrightarrow{\\Delta} \\text{Zn}(s) + \\text{CO}(g)",
    "wordEquation": "Zinc oxide + Carbon (Coke) → Zinc metal + Carbon monoxide",
    "reactants": [
      {
        "formula": "ZnO",
        "name": "Zinc oxide",
        "state": "(s)",
        "color": "White solid"
      },
      {
        "formula": "C",
        "name": "Coke / Carbon powder",
        "state": "(s)",
        "color": "Black"
      }
    ],
    "products": [
      {
        "formula": "Zn",
        "name": "Zinc metal vapour condensed",
        "state": "(s)",
        "color": "Bluish-white metal"
      },
      {
        "formula": "CO",
        "name": "Carbon monoxide gas",
        "state": "(g)",
        "color": "Colorless, toxic"
      }
    ],
    "conditions": "High temperature (~1400 °C in retorts)",
    "heatTransfer": "Endothermic",
    "keyObservations": [
      "Carbon acts as reducing agent, reducing ZnO to metallic Zn while itself getting oxidized to CO."
    ],
    "boardExamTrap": "Reducing agent is Carbon (C).",
    "ncertReference": "NCERT Class 10 Science, Chapter 3, Section 3.4.4 (Page 51)"
  },
  {
    "id": "rx_3_11",
    "chapterNo": 3,
    "chapterName": "Metals and Non-Metals",
    "topic": "Thermite Reaction",
    "reactionType": "Thermite Reaction",
    "title": "Thermite Process for Welding Railway Tracks",
    "balancedEquation": "\\text{Fe}_2\\text{O}_3(s) + 2\\text{Al}(s) \\xrightarrow{\\text{Ignition}} 2\\text{Fe}(l) + \\text{Al}_2\\text{O}_3(s) + \\text{Huge Heat}",
    "wordEquation": "Ferric oxide + Aluminium powder → Molten Iron + Aluminium oxide + Intense Heat (~3000 °C)",
    "reactants": [
      {
        "formula": "Fe2O3",
        "name": "Haematite / Ferric oxide",
        "state": "(s)",
        "color": "Reddish brown"
      },
      {
        "formula": "Al",
        "name": "Aluminium powder (Thermite mixture 3:1)",
        "state": "(s)",
        "color": "Silvery grey"
      }
    ],
    "products": [
      {
        "formula": "Fe",
        "name": "Molten liquid iron",
        "state": "(l)",
        "color": "Glowing white-hot liquid (~3000 °C)"
      },
      {
        "formula": "Al2O3",
        "name": "Aluminium oxide slag",
        "state": "(s)",
        "color": "White"
      }
    ],
    "conditions": "Ignited using a magnesium ribbon fuse with barium peroxide primer",
    "heatTransfer": "Spectacularly Exothermic (Reaches 3000 °C)",
    "keyObservations": [
      "The amount of heat evolved is so enormous that the iron produced is in the MOLTEN liquid state (l).",
      "Molten iron flows down into the gap between broken railway tracks or cracked machine parts, welding them permanently on cooling."
    ],
    "boardExamTrap": "Notice state of Fe is (l) LIQUID! Writing Fe(s) loses 0.5 mark because the whole purpose of the thermite reaction is producing molten iron for welding.",
    "ncertReference": "NCERT Class 10 Science, Chapter 3, Section 3.4.4 (Page 52)"
  },
  {
    "id": "rx_4_1",
    "chapterNo": 4,
    "chapterName": "Carbon and its Compounds",
    "topic": "Combustion",
    "reactionType": "Combustion",
    "title": "Complete Combustion of Ethanol",
    "balancedEquation": "\\text{C}_2\\text{H}_5\\text{OH}(l) + 3\\text{O}_2(g) \\to 2\\text{CO}_2(g) + 3\\text{H}_2\\text{O}(l) + \\text{Heat} + \\text{Light}",
    "wordEquation": "Ethanol + Oxygen → Carbon dioxide + Water + Heat + Light",
    "reactants": [
      {
        "formula": "C2H5OH",
        "name": "Absolute ethanol",
        "state": "(l)",
        "color": "Colorless"
      },
      {
        "formula": "O2",
        "name": "Oxygen",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "CO2",
        "name": "Carbon dioxide",
        "state": "(g)",
        "color": "Colorless"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "conditions": "Ignition with flame",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Burns with a clean, smokeless blue flame with no soot.",
      "Used as an eco-friendly biofuel blended with petrol ('gasohol')."
    ],
    "boardExamTrap": "Saturated hydrocarbons and alcohols burn with clean blue flame; unsaturated hydrocarbons (alkenes/alkynes) burn with yellow sooty flame.",
    "ncertReference": "NCERT Class 10 Science, Chapter 4, Section 4.3.1 (Page 69)"
  },
  {
    "id": "rx_4_2",
    "chapterNo": 4,
    "chapterName": "Carbon and its Compounds",
    "topic": "Oxidation",
    "reactionType": "Controlled Oxidation",
    "title": "Oxidation of Ethanol to Ethanoic Acid",
    "balancedEquation": "\\text{CH}_3\\text{CH}_2\\text{OH}(l) + 2[\\text{O}] \\xrightarrow{\\text{Alk. } \\text{KMnO}_4 + \\Delta \\text{ or Acid. } \\text{K}_2\\text{Cr}_2\\text{O}_7 + \\Delta} \\text{CH}_3\\text{COOH}(l) + \\text{H}_2\\text{O}(l)",
    "wordEquation": "Ethanol + [O] (Alkaline KMnO4 / Acidified K2Cr2O7) → Ethanoic acid (Acetic acid) + Water",
    "reactants": [
      {
        "formula": "CH3CH2OH",
        "name": "Ethanol",
        "state": "(l)",
        "color": "Colorless"
      },
      {
        "formula": "KMnO4",
        "name": "Alkaline potassium permanganate reagent",
        "state": "(aq)",
        "color": "Deep purple/pink"
      }
    ],
    "products": [
      {
        "formula": "CH3COOH",
        "name": "Ethanoic acid",
        "state": "(l)",
        "color": "Colorless (vinegar smell)"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "conditions": "Gentle warming in water bath with Alkaline KMnO4 or Acidified K2Cr2O7",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Deep purple color of KMnO4 discharges (fades) as it adds nascent oxygen to ethanol.",
      "Substances that are capable of adding oxygen to others are known as Oxidising Agents (e.g. Alk. KMnO4, Acid. K2Cr2O7)."
    ],
    "boardExamTrap": "Reagent specification: Must write ALKALINE KMnO4 or ACIDIFIED K2Cr2O7. Writing just KMnO4 without mentioning alkaline/acidified is penalized.",
    "ncertReference": "NCERT Class 10 Science, Chapter 4, Activity 4.5 (Page 70)"
  },
  {
    "id": "rx_4_3",
    "chapterNo": 4,
    "chapterName": "Carbon and its Compounds",
    "topic": "Addition Reactions",
    "reactionType": "Addition (Hydrogenation)",
    "title": "Hydrogenation of Vegetable Oils (Addition of Hydrogen)",
    "balancedEquation": "\\text{R}_2\\text{C}=\\text{CR}_2(l) + \\text{H}_2(g) \\xrightarrow{\\text{Ni Catalyst } (473\\text{ K})} \\text{R}_2\\text{CH}-\\text{CHR}_2(s)",
    "wordEquation": "Unsaturated vegetable oil (liquid) + Hydrogen (Ni catalyst) → Saturated fat (Vanaspati ghee, solid)",
    "reactants": [
      {
        "formula": "R2C=CR2",
        "name": "Vegetable oil (unsaturated fatty acid ester with C=C double bonds)",
        "state": "(l)",
        "color": "Golden yellow oil"
      },
      {
        "formula": "H2",
        "name": "Hydrogen gas",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "R2CH-CHR2",
        "name": "Vanaspati ghee (saturated fat with C-C single bonds)",
        "state": "(s)",
        "color": "Solid white fat"
      }
    ],
    "conditions": "Finely divided Nickel (Ni) or Palladium (Pd) catalyst at 473 K (~200 °C)",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Unsaturated hydrocarbons add hydrogen across double bonds in presence of catalysts to give saturated hydrocarbons.",
      "Health Note: Vegetable oils containing unsaturated fatty acids are healthy; animal fats and vanaspati ghee containing saturated fatty acids are harmful for health."
    ],
    "boardExamTrap": "Name the catalyst used: Nickel (Ni) or Palladium (Pd). Which fat is healthier? Unsaturated vegetable oils are healthier.",
    "ncertReference": "NCERT Class 10 Science, Chapter 4, Section 4.3.3 (Page 71)"
  },
  {
    "id": "rx_4_4",
    "chapterNo": 4,
    "chapterName": "Carbon and its Compounds",
    "topic": "Substitution Reactions",
    "reactionType": "Substitution",
    "title": "Chlorination of Methane in Sunlight",
    "balancedEquation": "\\text{CH}_4(g) + \\text{Cl}_2(g) \\xrightarrow{\\text{Sunlight } (h\\nu)} \\text{CH}_3\\text{Cl}(g) + \\text{HCl}(g)",
    "wordEquation": "Methane + Chlorine (in sunlight) → Chloromethane + Hydrogen chloride",
    "reactants": [
      {
        "formula": "CH4",
        "name": "Methane gas",
        "state": "(g)",
        "color": "Colorless"
      },
      {
        "formula": "Cl2",
        "name": "Chlorine gas",
        "state": "(g)",
        "color": "Greenish yellow"
      }
    ],
    "products": [
      {
        "formula": "CH3Cl",
        "name": "Chloromethane",
        "state": "(g)",
        "color": "Colorless"
      },
      {
        "formula": "HCl",
        "name": "Hydrogen chloride gas",
        "state": "(g)",
        "color": "Colorless, acid fumes"
      }
    ],
    "conditions": "Diffused sunlight (Photochemical free radical substitution)",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Chlorine can replace the hydrogen atoms one by one in succession: CH4 → CH3Cl → CH2Cl2 → CHCl3 (Chloroform) → CCl4 (Carbon tetrachloride).",
      "Reactions in which one atom or group of atoms replaces another atom are called Substitution Reactions."
    ],
    "boardExamTrap": "Reaction does NOT occur in the dark! Sunlight is mandatory to split Cl2 into free chlorine radicals.",
    "ncertReference": "NCERT Class 10 Science, Chapter 4, Section 4.3.4 (Page 71)"
  },
  {
    "id": "rx_4_5",
    "chapterNo": 4,
    "chapterName": "Carbon and its Compounds",
    "topic": "Esterification",
    "reactionType": "Esterification",
    "title": "Esterification (Formation of Ethyl Ethanoate)",
    "balancedEquation": "\\text{CH}_3\\text{COOH}(l) + \\text{C}_2\\text{H}_5\\text{OH}(l) \\xrightarrow{\\text{Conc. } \\text{H}_2\\text{SO}_4, \\Delta} \\text{CH}_3\\text{COOC}_2\\text{H}_5(l) + \\text{H}_2\\text{O}(l)",
    "wordEquation": "Ethanoic acid + Ethanol (conc. H2SO4 catalyst, warm) ⇌ Ethyl ethanoate (sweet fruity ester) + Water",
    "reactants": [
      {
        "formula": "CH3COOH",
        "name": "Glacial ethanoic acid",
        "state": "(l)",
        "color": "Colorless, pungent vinegar smell"
      },
      {
        "formula": "C2H5OH",
        "name": "Absolute ethanol",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "CH3COOC2H5",
        "name": "Ethyl ethanoate (Ester)",
        "state": "(l)",
        "color": "Colorless liquid, sweet fruity fragrance"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "conditions": "Warmed in a water bath for 5 minutes with a few drops of Concentrated H2SO4",
    "heatTransfer": "Thermoneutral / mild",
    "keyObservations": [
      "The pungent vinegar odor transforms into a pleasant, delightful, sweet fruity smell like apples or pineapples.",
      "Role of Conc. H2SO4: Acts as both an ACID CATALYST and a DEHYDRATING AGENT (removes water to push equilibrium forward).",
      "Esters are used in perfumes, artificial flavoring agents in ice creams and candies."
    ],
    "boardExamTrap": "Why heat in a water bath instead of direct flame? Because ethanol is highly flammable and catches fire easily! Role of conc H2SO4: Catalyst + Dehydrating agent.",
    "ncertReference": "NCERT Class 10 Science, Chapter 4, Activity 4.8 (Page 73)"
  },
  {
    "id": "rx_4_6",
    "chapterNo": 4,
    "chapterName": "Carbon and its Compounds",
    "topic": "Saponification",
    "reactionType": "Saponification",
    "title": "Saponification (Alkaline Hydrolysis of Ester / Soap Making)",
    "balancedEquation": "\\text{CH}_3\\text{COOC}_2\\text{H}_5(l) + \\text{NaOH}(aq) \\to \\text{CH}_3\\text{COONa}(aq) + \\text{C}_2\\text{H}_5\\text{OH}(l)",
    "wordEquation": "Ethyl ethanoate + Sodium hydroxide → Sodium ethanoate (Soap molecule) + Ethanol",
    "reactants": [
      {
        "formula": "CH3COOC2H5",
        "name": "Ester (Ethyl ethanoate)",
        "state": "(l)",
        "color": "Colorless"
      },
      {
        "formula": "NaOH",
        "name": "Sodium hydroxide solution",
        "state": "(aq)",
        "color": "Colorless"
      }
    ],
    "products": [
      {
        "formula": "CH3COONa",
        "name": "Sodium ethanoate (Sodium acetate salt)",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "C2H5OH",
        "name": "Ethanol",
        "state": "(l)",
        "color": "Colorless"
      }
    ],
    "conditions": "Gentle warming with dilute sodium hydroxide",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Ester is cleaved back into alcohol and carboxylic acid salt.",
      "This reaction is called Saponification because it is used in the preparation of soaps (hydrolysis of long-chain fatty acid esters with NaOH)."
    ],
    "boardExamTrap": "What is saponification? Alkaline hydrolysis of an ester using an alkali (NaOH/KOH) to produce soap and alcohol.",
    "ncertReference": "NCERT Class 10 Science, Chapter 4, Section 4.4.2 (Page 74)"
  },
  {
    "id": "rx_4_7",
    "chapterNo": 4,
    "chapterName": "Carbon and its Compounds",
    "topic": "Ethanoic Acid with Sodium Metal",
    "reactionType": "Displacement",
    "title": "Reaction of Ethanoic Acid with Active Sodium Metal",
    "balancedEquation": "2\\text{CH}_3\\text{COOH}(l) + 2\\text{Na}(s) \\to 2\\text{CH}_3\\text{COONa}(aq) + \\text{H}_2(g)\\uparrow",
    "wordEquation": "Ethanoic acid + Sodium metal → Sodium ethanoate + Hydrogen gas (Pop sound)",
    "reactants": [
      {
        "formula": "CH3COOH",
        "name": "Glacial ethanoic acid",
        "state": "(l)",
        "color": "Colorless"
      },
      {
        "formula": "Na",
        "name": "Sodium metal pellet",
        "state": "(s)",
        "color": "Silvery soft"
      }
    ],
    "products": [
      {
        "formula": "CH3COONa",
        "name": "Sodium ethanoate",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "H2",
        "name": "Hydrogen gas",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "Room temperature",
    "heatTransfer": "Exothermic",
    "keyObservations": [
      "Brisk bubbling of Hydrogen gas.",
      "Ethanol also reacts with sodium to give H2 (2C2H5OH + 2Na → 2C2H5ONa + H2).",
      "To distinguish ethanol from ethanoic acid, use NaHCO3 test (only ethanoic acid effervesces with NaHCO3, ethanol does not!)."
    ],
    "boardExamTrap": "How to distinguish between Ethanol and Ethanoic acid chemically? Add NaHCO3. Ethanoic acid produces brisk effervescence of CO2; Ethanol shows NO reaction!",
    "ncertReference": "NCERT Class 10 Science, Chapter 4, Section 4.4.1 (Page 72)"
  },
  {
    "id": "rx_4_8",
    "chapterNo": 4,
    "chapterName": "Carbon and its Compounds",
    "topic": "Ethanoic Acid with Carbonates",
    "reactionType": "Acid-Carbonate Gas Evolution",
    "title": "Reaction of Ethanoic Acid with Sodium Hydrogen Carbonate",
    "balancedEquation": "\\text{CH}_3\\text{COOH}(l) + \\text{NaHCO}_3(s) \\to \\text{CH}_3\\text{COONa}(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)\\uparrow",
    "wordEquation": "Ethanoic acid + Sodium bicarbonate → Sodium ethanoate + Water + Carbon dioxide (Brisk effervescence)",
    "reactants": [
      {
        "formula": "CH3COOH",
        "name": "Ethanoic acid",
        "state": "(l)",
        "color": "Colorless"
      },
      {
        "formula": "NaHCO3",
        "name": "Baking soda powder",
        "state": "(s)",
        "color": "White"
      }
    ],
    "products": [
      {
        "formula": "CH3COONa",
        "name": "Sodium ethanoate",
        "state": "(aq)",
        "color": "Colorless"
      },
      {
        "formula": "H2O",
        "name": "Water",
        "state": "(l)",
        "color": "Colorless"
      },
      {
        "formula": "CO2",
        "name": "Carbon dioxide gas",
        "state": "(g)",
        "color": "Colorless"
      }
    ],
    "conditions": "Room temperature",
    "heatTransfer": "Endothermic",
    "keyObservations": [
      "Instantaneous, energetic brisk effervescence.",
      "Gas evolved turns freshly prepared limewater milky (CO2 confirmatory test)."
    ],
    "boardExamTrap": "This is the PRIMARY chemical test in CBSE board exams to identify carboxylic acid (-COOH) functional group.",
    "ncertReference": "NCERT Class 10 Science, Chapter 4, Activity 4.9 (Page 74)"
  },
  {
    "id": "rx_4_9",
    "chapterNo": 4,
    "chapterName": "Carbon and its Compounds",
    "topic": "Soap with Hard Water",
    "reactionType": "Double Displacement (Precipitation)",
    "title": "Precipitation of Scum with Hard Water (Calcium/Magnesium Ions)",
    "balancedEquation": "2\\text{C}_{17}\\text{H}_{35}\\text{COONa}(aq) + \\text{Ca}^{2+}(aq) \\to (\\text{C}_{17}\\text{H}_{35}\\text{COO})_2\\text{Ca}(s)\\downarrow + 2\\text{Na}^+(aq)",
    "wordEquation": "Sodium stearate (Soap) + Calcium ions (Hard water) → Calcium stearate (Insoluble curdy white scum) + Sodium ions",
    "reactants": [
      {
        "formula": "C17H35COONa",
        "name": "Sodium stearate (common soap)",
        "state": "(aq)",
        "color": "Lather / soapy solution"
      },
      {
        "formula": "Ca2+ / Mg2+",
        "name": "Hard water salts (CaCl2, MgSO4)",
        "state": "(aq)",
        "color": "Clear hard water"
      }
    ],
    "products": [
      {
        "formula": "(C17H35COO)2Ca",
        "name": "Curdy white precipitate (Scum)",
        "state": "(s)",
        "color": "Sticky white insoluble scum"
      },
      {
        "formula": "Na+",
        "name": "Sodium ions in solution",
        "state": "(aq)",
        "color": "Colorless"
      }
    ],
    "conditions": "Shaking soap with hard water",
    "heatTransfer": "Thermoneutral",
    "keyObservations": [
      "Soap does not lather easily with hard water; instead, a sticky white curdy precipitate called 'scum' forms.",
      "Synthetic detergents (sodium alkyl sulphonates) do not form scum with hard water because their calcium and magnesium salts are water-soluble."
    ],
    "boardExamTrap": "Why do detergents work in hard water while soaps fail? Because calcium and magnesium salts of detergents are SOLUBLE in water, so no insoluble scum is formed.",
    "ncertReference": "NCERT Class 10 Science, Chapter 4, Section 4.5.1 (Page 76)"
  }
];
