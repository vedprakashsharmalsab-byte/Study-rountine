// =========================================================================
// CBSE Class 10 Science — Master Fundamental Definitions & Core Foundations
// Code 086 (2026-27 Board Standard)
// Every fundamental term defined with:
//  1) Exact NCERT Board Definition (the mandatory keywords examiners grade on)
//  2) Simplified / Layman Explanation (crystal-clear mental model)
//  3) Formulas, Equations, SI Units & Constants
//  4) Real-World Examples & Classic Examiner Traps
// =========================================================================

export interface ScienceDefinition {
  id: string;
  chapterNo: number;
  term: string;
  hindiTerm: string;
  discipline: "Chemistry" | "Biology" | "Physics" | "Natural Resources";
  category: "Law / Principle" | "Process / Phenomenon" | "Substance / Structure" | "Quantity / Unit" | "Defect / Condition";
  ncertDefinition: string;
  simplifiedExplanation: string;
  formulaOrEquation?: string;
  siUnitOrValues?: string;
  example: string;
  examinerKeywordTrap: string;
}

export const SCIENCE_DEFINITIONS_MASTER: ScienceDefinition[] = [
  // =======================================================================
  // CHAPTER 1: CHEMICAL REACTIONS AND EQUATIONS (CHEMISTRY)
  // =======================================================================
  {
    id: "def_ch1_1",
    chapterNo: 1,
    term: "Chemical Reaction",
    hindiTerm: "रासायनिक अभिक्रिया",
    discipline: "Chemistry",
    category: "Process / Phenomenon",
    ncertDefinition: "A process in which one or more substances (reactants) undergo chemical transformation involving the breaking and making of bonds to form new substances (products) with entirely different chemical properties.",
    simplifiedExplanation: "When substances rearrange their atomic bonds to create completely new materials that cannot be reversed by simple physical methods.",
    formulaOrEquation: "Reactants ⟶ Products",
    example: "Rusting of iron, burning of magnesium ribbon in air, digestion of food in our body.",
    examinerKeywordTrap: "Must mention that the products have 'different chemical properties' and bond reorganization occurs."
  },
  {
    id: "def_ch1_2",
    chapterNo: 1,
    term: "Law of Conservation of Mass",
    hindiTerm: "द्रव्यमान संरक्षण का नियम",
    discipline: "Chemistry",
    category: "Law / Principle",
    ncertDefinition: "Matter can neither be created nor destroyed in a chemical reaction; the total mass of the reactants must equal the total mass of the products, meaning the number of atoms of each element remains identical on both sides.",
    simplifiedExplanation: "The total number of atoms going into a reaction is exactly equal to the number of atoms coming out. No atoms magically appear or vanish.",
    formulaOrEquation: "Total Mass of Reactants = Total Mass of Products",
    example: "2H₂(g) [4g] + O₂(g) [32g] ⟶ 2H₂O(l) [36g]. Mass before = 36g, mass after = 36g.",
    examinerKeywordTrap: "State both: 'mass cannot be created/destroyed' AND 'number of atoms of each element remains conserved'."
  },
  {
    id: "def_ch1_3",
    chapterNo: 1,
    term: "Exothermic Reaction",
    hindiTerm: "ऊष्माक्षेपी अभिक्रिया",
    discipline: "Chemistry",
    category: "Process / Phenomenon",
    ncertDefinition: "A chemical reaction accompanied by the evolution of heat energy along with the formation of products.",
    simplifiedExplanation: "Reactions that give off heat to the surroundings, causing the container or temperature to rise.",
    formulaOrEquation: "CaO(s) + H₂O(l) ⟶ Ca(OH)₂(aq) + Heat",
    example: "Quicklime adding to water (slaking of lime), respiration, combustion of natural gas (CH₄ + 2O₂ ⟶ CO₂ + 2H₂O + Heat).",
    examinerKeywordTrap: "Respiration is an exothermic reaction because glucose oxidizes to produce ATP energy and heat."
  },
  {
    id: "def_ch1_4",
    chapterNo: 1,
    term: "Endothermic Reaction",
    hindiTerm: "ऊष्माशोषी अभिक्रिया",
    discipline: "Chemistry",
    category: "Process / Phenomenon",
    ncertDefinition: "A chemical reaction in which energy in the form of heat, light, or electricity is absorbed by the reactants to break chemical bonds and form products.",
    simplifiedExplanation: "Reactions that require heat or energy to proceed, making the surroundings feel colder.",
    formulaOrEquation: "CaCO₃(s) —[Heat (Δ)]⟶ CaO(s) + CO₂(g)↑",
    example: "Thermal decomposition of calcium carbonate, photolysis of silver chloride (2AgCl ⟶ 2Ag + Cl₂ in sunlight), photosynthesis.",
    examinerKeywordTrap: "All thermal decomposition reactions are endothermic. Mention whether energy is absorbed as heat, light, or electricity."
  },
  {
    id: "def_ch1_5",
    chapterNo: 1,
    term: "Precipitation Reaction",
    hindiTerm: "अवक्षेपण अभिक्रिया",
    discipline: "Chemistry",
    category: "Process / Phenomenon",
    ncertDefinition: "A reaction in which two soluble aqueous ionic solutions react to produce an insoluble solid residue (precipitate) that separates from the liquid solution.",
    simplifiedExplanation: "Mixing two clear liquids that suddenly form a solid cloudy powder settling at the bottom.",
    formulaOrEquation: "Pb(NO₃)₂(aq) + 2KI(aq) ⟶ PbI₂(s)↓ (Yellow ppt) + 2KNO₃(aq)",
    example: "Na₂SO₄(aq) + BaCl₂(aq) ⟶ BaSO₄(s)↓ (White ppt) + 2NaCl(aq).",
    examinerKeywordTrap: "Always specify the exact colour of the precipitate (BaSO₄ is White, PbI₂ is Bright Yellow)."
  },
  {
    id: "def_ch1_6",
    chapterNo: 1,
    term: "Redox Reaction (Oxidation & Reduction)",
    hindiTerm: "उपचयन-अपचयन (रेडॉक्स) अभिक्रिया",
    discipline: "Chemistry",
    category: "Process / Phenomenon",
    ncertDefinition: "A chemical reaction in which oxidation (gain of oxygen or loss of hydrogen/electrons) and reduction (loss of oxygen or gain of hydrogen/electrons) take place simultaneously.",
    simplifiedExplanation: "A two-way transfer where one substance gives up oxygen/electrons while another substance eagerly accepts them.",
    formulaOrEquation: "CuO(s) + H₂(g) —[Heat]⟶ Cu(s) + H₂O(l) (CuO reduced to Cu; H₂ oxidized to H₂O)",
    example: "ZnO + C ⟶ Zn + CO (ZnO reduced; C oxidized).",
    examinerKeywordTrap: "Examiners demand the word 'SIMULTANEOUSLY'. The substance that gets oxidized is the reducing agent; the substance reduced is the oxidizing agent."
  },

  // =======================================================================
  // CHAPTER 2: ACIDS, BASES AND SALTS (CHEMISTRY)
  // =======================================================================
  {
    id: "def_ch2_1",
    chapterNo: 2,
    term: "Acid (Arrhenius definition)",
    hindiTerm: "अम्ल",
    discipline: "Chemistry",
    category: "Substance / Structure",
    ncertDefinition: "A chemical substance that dissociates in aqueous solution to furnish hydrogen ions (H⁺) or hydronium ions (H₃O⁺), possesses a sour taste, and turns blue litmus paper red.",
    simplifiedExplanation: "A chemical that donates H⁺ ions when dissolved in water, reacts with metals to give hydrogen gas, and tastes sour.",
    formulaOrEquation: "HCl(g) + H₂O(l) ⟶ H₃O⁺(aq) + Cl⁻(aq)",
    siUnitOrValues: "pH < 7 at 25°C",
    example: "Hydrochloric acid (HCl), Sulphuric acid (H₂SO₄), Acetic acid (CH₃COOH).",
    examinerKeywordTrap: "Dry HCl gas does NOT show acidic properties; H⁺ ions can ONLY be generated in the presence of water."
  },
  {
    id: "def_ch2_2",
    chapterNo: 2,
    term: "Alkali (Water-Soluble Base)",
    hindiTerm: "क्षार (जल-विलेय क्षारक)",
    discipline: "Chemistry",
    category: "Substance / Structure",
    ncertDefinition: "A base that dissolves completely or appreciably in water to produce hydroxide ions (OH⁻), feels soapy to the touch, and turns red litmus paper blue.",
    simplifiedExplanation: "A base that easily dissolves in water. Remember: 'All alkalis are bases, but not all bases are alkalis.'",
    formulaOrEquation: "NaOH(s) —[H₂O]⟶ Na⁺(aq) + OH⁻(aq)",
    siUnitOrValues: "pH > 7 at 25°C",
    example: "Sodium hydroxide (NaOH), Potassium hydroxide (KOH), Calcium hydroxide [Ca(OH)₂]. Non-alkali base: Cu(OH)₂ (insoluble).",
    examinerKeywordTrap: "Never write 'all bases are alkalis'. Only water-soluble bases are alkalis."
  },
  {
    id: "def_ch2_3",
    chapterNo: 2,
    term: "Neutralization Reaction",
    hindiTerm: "उदासीनीकरण अभिक्रिया",
    discipline: "Chemistry",
    category: "Process / Phenomenon",
    ncertDefinition: "A chemical reaction between an acid and a base that react together to produce a salt and water with the liberation of heat.",
    simplifiedExplanation: "H⁺ from the acid and OH⁻ from the base combine to form neutral liquid water (H₂O) and a salt.",
    formulaOrEquation: "Acid + Base ⟶ Salt + Water (+ Heat); H⁺(aq) + OH⁻(aq) ⟶ H₂O(l)",
    example: "HCl(aq) + NaOH(aq) ⟶ NaCl(aq) + H₂O(l).",
    examinerKeywordTrap: "The ionic essence is simply H⁺(aq) + OH⁻(aq) ⟶ H₂O(l). It is an exothermic reaction."
  },
  {
    id: "def_ch2_4",
    chapterNo: 2,
    term: "pH Scale",
    hindiTerm: "pH पैमाना",
    discipline: "Chemistry",
    category: "Quantity / Unit",
    ncertDefinition: "A scale ranging from 0 to 14 used to measure the hydrogen ion concentration [H⁺] in a solution, where 'p' stands for the German word 'potenz' (meaning power).",
    simplifiedExplanation: "A 0-to-14 ruler for acidity: 7 is neutral (pure water), lower than 7 is acidic (lower = stronger acid), above 7 is basic (higher = stronger base).",
    formulaOrEquation: "pH = -log₁₀[H⁺]; pH 7 = Neutral, pH < 7 = Acidic, pH > 7 = Basic",
    example: "Gastric juice: pH ~1.2; Lemon juice: pH ~2.2; Pure water: pH 7.0; Blood: pH 7.4; Milk of magnesia: pH 10; 1M NaOH: pH 14.",
    examinerKeywordTrap: "Inversely proportional: Higher the [H⁺] concentration, LOWER is the pH value."
  },
  {
    id: "def_ch2_5",
    chapterNo: 2,
    term: "Water of Crystallization",
    hindiTerm: "क्रिस्टलन का जल",
    discipline: "Chemistry",
    category: "Substance / Structure",
    ncertDefinition: "The fixed number of water molecules chemically combined in a loose chemical bonding within one formula unit of a crystalline salt.",
    simplifiedExplanation: "Water molecules trapped neatly inside the crystal lattice of a salt that give it its crystal shape and often its colour.",
    formulaOrEquation: "CuSO₄·5H₂O (Blue Vitriol), Na₂CO₃·10H₂O (Washing Soda), CaSO₄·2H₂O (Gypsum)",
    example: "Heating blue CuSO₄·5H₂O turns it into white anhydrous CuSO₄ powder because it loses its 5 water molecules.",
    examinerKeywordTrap: "The salt is NOT wet; it is dry to the touch because water molecules are part of the crystal geometry."
  },

  // =======================================================================
  // CHAPTER 3: METALS AND NON-METALS (CHEMISTRY)
  // =======================================================================
  {
    id: "def_ch3_1",
    chapterNo: 3,
    term: "Amphoteric Oxide",
    hindiTerm: "उभयधर्मी ऑक्साइड",
    discipline: "Chemistry",
    category: "Substance / Structure",
    ncertDefinition: "Metallic oxides that react with both acids as well as bases to produce salt and water.",
    simplifiedExplanation: "Oxides that can behave as a base when facing an acid, and as an acid when facing a base.",
    formulaOrEquation: "Al₂O₃ + 6HCl ⟶ 2AlCl₃ + 3H₂O (acts as base); Al₂O₃ + 2NaOH ⟶ 2NaAlO₂ (Sodium aluminate) + H₂O (acts as acid)",
    example: "Aluminium oxide (Al₂O₃) and Zinc oxide (ZnO).",
    examinerKeywordTrap: "Must write BOTH equations (with HCl AND with NaOH) to secure full 3 marks."
  },
  {
    id: "def_ch3_2",
    chapterNo: 3,
    term: "Reactivity (Activity) Series",
    hindiTerm: "सक्रियता श्रेणी",
    discipline: "Chemistry",
    category: "Law / Principle",
    ncertDefinition: "A vertical list of metals arranged in the decreasing order of their chemical reactivity, placing the most reactive metal at the top and the least reactive at the bottom.",
    simplifiedExplanation: "A metal power hierarchy: K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au. Any metal above can kick out a metal below from its salt solution.",
    example: "Fe(s) + CuSO₄(aq) ⟶ FeSO₄(aq) + Cu(s) (Iron displaces copper because Fe is above Cu).",
    examinerKeywordTrap: "Hydrogen is a non-metal but included in the series because metals above hydrogen displace H₂ gas from dilute acids."
  },
  {
    id: "def_ch3_3",
    chapterNo: 3,
    term: "Ionic (Electrovalent) Bond",
    hindiTerm: "आयनिक (विद्युत-संयोजी) आबंध",
    discipline: "Chemistry",
    category: "Substance / Structure",
    ncertDefinition: "A chemical bond formed by the complete transfer of one or more valence electrons from an electropositive metal atom to an electronegative non-metal atom, held together by strong electrostatic forces of attraction.",
    simplifiedExplanation: "A metal gives away electrons to become a positive cation (Na⁺); a non-metal takes them to become a negative anion (Cl⁻); they snap together strongly like magnets.",
    formulaOrEquation: "Na(2,8,1) ⟶ Na⁺(2,8) + e⁻; Cl(2,8,7) + e⁻ ⟶ Cl⁻(2,8,8) ⟹ NaCl",
    example: "Sodium chloride (NaCl), Magnesium chloride (MgCl₂), Calcium oxide (CaO).",
    examinerKeywordTrap: "Ionic compounds conduct electricity ONLY in molten state or aqueous solution, NEVER in solid state because ions are locked in crystal lattice."
  },
  {
    id: "def_ch3_4",
    chapterNo: 3,
    term: "Roasting vs. Calcination",
    hindiTerm: "भर्जन बनाम निस्तापन",
    discipline: "Chemistry",
    category: "Process / Phenomenon",
    ncertDefinition: "Roasting: Heating a sulphide ore strongly in the presence of excess air to convert it into metal oxide. Calcination: Heating a carbonate or hydrated ore strongly in limited air or absence of air to expel volatile impurities and convert it into metal oxide.",
    simplifiedExplanation: "Roasting = Sulphide ore + Excess Oxygen (produces SO₂ gas). Calcination = Carbonate ore + No/Limited Oxygen (produces CO₂ gas).",
    formulaOrEquation: "Roasting: 2ZnS + 3O₂ —[Δ]⟶ 2ZnO + 2SO₂↑; Calcination: ZnCO₃ —[Δ]⟶ ZnO + CO₂↑",
    example: "Zinc blende (ZnS) undergoes roasting; Calamine (ZnCO₃) undergoes calcination.",
    examinerKeywordTrap: "Roasting applies to SULPHIDE ores in EXCESS air. Calcination applies to CARBONATE ores in LIMITED/NO air."
  },

  // =======================================================================
  // CHAPTER 4: CARBON AND ITS COMPOUNDS (CHEMISTRY)
  // =======================================================================
  {
    id: "def_ch4_1",
    chapterNo: 4,
    term: "Catenation",
    hindiTerm: "श्रृंखलन",
    discipline: "Chemistry",
    category: "Process / Phenomenon",
    ncertDefinition: "The unique ability of carbon atoms to form strong covalent bonds with other carbon atoms to yield large chains (straight, branched, or cyclic rings).",
    simplifiedExplanation: "Carbon's superpower of linking to other carbon atoms endlessly like Lego bricks, making millions of unique compounds.",
    example: "Straight chain: Hexane; Branched chain: Isobutane; Cyclic ring: Cyclohexane, Benzene.",
    examinerKeywordTrap: "Silicon also shows catenation up to 7-8 atoms, but Si-Si bonds are weak and reactive. C-C bonds are exceptionally small and strong."
  },
  {
    id: "def_ch4_2",
    chapterNo: 4,
    term: "Tetravalency of Carbon",
    hindiTerm: "कार्बन की चतुःसंयोजकता",
    discipline: "Chemistry",
    category: "Quantity / Unit",
    ncertDefinition: "The property of having a valency of four, whereby carbon shares its four valence electrons with four other atoms of carbon or monovalent elements to achieve noble gas configuration.",
    simplifiedExplanation: "Carbon has 4 electrons in its outer shell, so it always shares 4 pairs of electrons (never loses or gains 4 electrons due to energy constraints).",
    formulaOrEquation: "Atomic Number = 6, Electronic Configuration = (2, 4), Valency = 4",
    example: "Methane (CH₄), Carbon tetrachloride (CCl₄).",
    examinerKeywordTrap: "Explain WHY carbon cannot form C⁴⁺ (requires too much energy to remove 4 electrons) or C⁴⁻ (nucleus with 6 protons cannot hold 10 electrons)."
  },
  {
    id: "def_ch4_3",
    chapterNo: 4,
    term: "Homologous Series",
    hindiTerm: "समजातीय श्रेणी",
    discipline: "Chemistry",
    category: "Substance / Structure",
    ncertDefinition: "A family of organic compounds having the same functional group, similar chemical properties, and whose successive members differ by a -CH₂- unit and a molecular mass of 14 u.",
    simplifiedExplanation: "A family of molecules with the exact same functional group where each next member is just one carbon and two hydrogens longer.",
    formulaOrEquation: "Alkanes: CₙH₂ₙ₊₂; Alkenes: CₙH₂ₙ; Alkynes: CₙH₂ₙ₋₂; Difference = -CH₂- (14 u)",
    example: "Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈), Butane (C₄H₁₀).",
    examinerKeywordTrap: "Chemical properties remain similar, but physical properties (boiling point, melting point, density) show a gradual gradation."
  },
  {
    id: "def_ch4_4",
    chapterNo: 4,
    term: "Saponification",
    hindiTerm: "साबुनीकरण",
    discipline: "Chemistry",
    category: "Process / Phenomenon",
    ncertDefinition: "The alkaline hydrolysis of an ester (fat or oil) with a strong base (like NaOH or KOH) to produce sodium or potassium salt of fatty acid (soap) and glycerol/alcohol.",
    simplifiedExplanation: "Boiling fats/oils with caustic soda (NaOH) to make soap and alcohol. Reverse of esterification.",
    formulaOrEquation: "CH₃COOC₂H₅ (Ethyl ethanoate) + NaOH ⟶ CH₃COONa (Sodium ethanoate) + C₂H₅OH (Ethanol)",
    example: "Manufacturing bathing soap by boiling vegetable oil with sodium hydroxide.",
    examinerKeywordTrap: "Soap molecules have two ends: hydrophilic ionic head (-COO⁻Na⁺) and hydrophobic hydrocarbon tail. Forms micelles in water."
  },

  // =======================================================================
  // CHAPTER 5: LIFE PROCESSES (BIOLOGY)
  // =======================================================================
  {
    id: "def_ch5_1",
    chapterNo: 5,
    term: "Life Processes",
    hindiTerm: "जैव प्रक्रम",
    discipline: "Biology",
    category: "Process / Phenomenon",
    ncertDefinition: "The basic vital functions performed by living organisms to maintain their life and repair cellular structures on earth (Nutrition, Respiration, Transportation, and Excretion).",
    simplifiedExplanation: "All the non-stop maintenance jobs inside an organism that keep it alive, even when resting or sleeping.",
    example: "Nutrition (getting energy), Respiration (releasing energy), Transportation (moving fluids), Excretion (removing toxic wastes).",
    examinerKeywordTrap: "Maintenance processes continue even when an organism is fast asleep or sitting completely idle."
  },
  {
    id: "def_ch5_2",
    chapterNo: 5,
    term: "Photosynthesis",
    hindiTerm: "प्रकाश संश्लेषण",
    discipline: "Biology",
    category: "Process / Phenomenon",
    ncertDefinition: "The biochemical process by which green autotrophic plants synthesize organic food (glucose/starch) from inorganic raw materials (CO₂ and H₂O) in the presence of sunlight absorbed by chlorophyll, releasing oxygen as a byproduct.",
    simplifiedExplanation: "Plants using solar energy captured by chlorophyll to turn water and carbon dioxide into sweet food (glucose) and oxygen gas.",
    formulaOrEquation: "6CO₂ + 12H₂O —[Sunlight / Chlorophyll]⟶ C₆H₁₂O₆ + 6O₂ + 6H₂O",
    example: "Stomata open during day to take in CO₂, guard cells swell by absorbing water, photolysis of water releases O₂.",
    examinerKeywordTrap: "Three distinct events: (1) Absorption of light by chlorophyll, (2) Conversion of light to chemical energy & splitting of water, (3) Reduction of CO₂ to carbohydrates."
  },
  {
    id: "def_ch5_3",
    chapterNo: 5,
    term: "Peristalsis",
    hindiTerm: "क्रमाकुंचन गति",
    discipline: "Biology",
    category: "Process / Phenomenon",
    ncertDefinition: "The rhythmic contraction and expansion movements of the muscular walls of the alimentary canal that push the food forward along the gut.",
    simplifiedExplanation: "Wave-like muscle squeezes in your food pipe and intestines that push food down smoothly toward your stomach.",
    example: "Movement of bolus down the oesophagus even when drinking water upside down.",
    examinerKeywordTrap: "Occurs all along the alimentary canal from oesophagus to rectum, not just in the food pipe."
  },
  {
    id: "def_ch5_4",
    chapterNo: 5,
    term: "Aerobic vs. Anaerobic Respiration",
    hindiTerm: "वायवीय बनाम अवायवीय श्वसन",
    discipline: "Biology",
    category: "Process / Phenomenon",
    ncertDefinition: "Aerobic: Breakdown of glucose into CO₂, H₂O and high energy (36-38 ATP) in the presence of oxygen inside mitochondria. Anaerobic: Breakdown of glucose without oxygen yielding lower energy (2 ATP) inside cytoplasm (producing ethanol+CO₂ in yeast, or lactic acid in human muscles).",
    simplifiedExplanation: "Aerobic = with oxygen (in mitochondria, huge ATP payout). Anaerobic = without oxygen (in cytoplasm, tiny 2 ATP, gives muscle cramps or alcohol).",
    formulaOrEquation: "Aerobic: Glucose ⟶ Pyruvate ⟶ 6CO₂ + 6H₂O + 38 ATP; Muscle Anaerobic: Glucose ⟶ Pyruvate ⟶ 2 Lactic Acid + 2 ATP",
    example: "Yeast fermentation (brewing); Muscle cramps during heavy sprinting due to lactic acid accumulation.",
    examinerKeywordTrap: "Glycolysis (Glucose ⟶ Pyruvate) occurs in CYTOPLASM for BOTH pathways. Aerobic moves to mitochondria; anaerobic stays in cytoplasm."
  },
  {
    id: "def_ch5_5",
    chapterNo: 5,
    term: "Transpiration Pull",
    hindiTerm: "वाष्पोत्सर्जन खिंचाव",
    discipline: "Biology",
    category: "Process / Phenomenon",
    ncertDefinition: "The upward suction force created in xylem vessels by the evaporation of water molecules through stomata of leaves, driving the ascent of sap from roots to tree top.",
    simplifiedExplanation: "Like sucking juice through a straw: water evaporating from leaf pores creates a powerful suction pulling water up from roots.",
    example: "Tall eucalyptus or redwood trees pulling water up 100 meters without mechanical pumps.",
    examinerKeywordTrap: "Transpiration pull is the major driving force during DAYTIME; root pressure is dominant at NIGHT."
  },
  {
    id: "def_ch5_6",
    chapterNo: 5,
    term: "Nephron",
    hindiTerm: "वृक्काणु (नेफ्रॉन)",
    discipline: "Biology",
    category: "Substance / Structure",
    ncertDefinition: "The microscopic structural and functional filtration unit of the human kidney consisting of Bowman's capsule, glomerulus, and a long coiled tubule responsible for urine formation.",
    simplifiedExplanation: "Tiny high-tech filters in your kidneys (about 1 million per kidney) that scrub waste from blood and reabsorb clean water and glucose.",
    formulaOrEquation: "Glomerular Filtration ⟶ Tubular Selective Reabsorption (glucose, amino acids, salts, water) ⟶ Tubular Secretion",
    example: "Each kidney contains ~1.2 million nephrons filtering ~180 Litres of initial filtrate daily.",
    examinerKeywordTrap: "Urine contains urea, excess salts, and water; healthy urine must NEVER contain glucose or proteins (indicates damage)."
  },

  // =======================================================================
  // CHAPTER 6: CONTROL AND COORDINATION (BIOLOGY)
  // =======================================================================
  {
    id: "def_ch6_1",
    chapterNo: 6,
    term: "Reflex Arc",
    hindiTerm: "प्रतिवर्ती चाप",
    discipline: "Biology",
    category: "Substance / Structure",
    ncertDefinition: "The shortest neural anatomical pathway taken by nerve impulses in a reflex action, connecting a receptor organ to an effector muscle/gland via the spinal cord.",
    simplifiedExplanation: "An emergency detour shortcut: Receptor ⟶ Sensory Neuron ⟶ Spinal Cord (Relay Neuron) ⟶ Motor Neuron ⟶ Effector Muscle. Reacts before your brain even registers pain!",
    formulaOrEquation: "Receptor ⟶ Sensory Neuron ⟶ Spinal Cord (Relay) ⟶ Motor Neuron ⟶ Effector (Muscle)",
    example: "Instantly pulling hand away when accidentally touching a burning hot pan.",
    examinerKeywordTrap: "Reflex arcs evolved in the SPINAL CORD because the thinking tissue of the brain was not fast enough for immediate survival."
  },
  {
    id: "def_ch6_2",
    chapterNo: 6,
    term: "Synapse",
    hindiTerm: "अंतर्ग्रथन (सिनैप्स)",
    discipline: "Biology",
    category: "Substance / Structure",
    ncertDefinition: "The microscopic junctional gap between the terminal arborization of the axon of one neuron and the dendrite of the adjacent neuron across which nerve impulses cross via neurotransmitters.",
    simplifiedExplanation: "The tiny microscopic bridge gap between two nerve cells where electrical signals convert into chemical spurts to pass the message.",
    example: "Electrical impulse at axon end triggers release of chemical neurotransmitter (acetylcholine) across the gap.",
    examinerKeywordTrap: "Impulses travel in ONE DIRECTION ONLY because neurotransmitter vesicles are present only at axon terminals, and receptors are only on dendrites."
  },
  {
    id: "def_ch6_3",
    chapterNo: 6,
    term: "Phytohormones (Plant Hormones)",
    hindiTerm: "पादप हॉर्मोन",
    discipline: "Biology",
    category: "Substance / Structure",
    ncertDefinition: "Naturally occurring chemical coordination substances synthesized in minute quantities at one site in a plant and transported to other parts to regulate growth, development, and physiological responses.",
    simplifiedExplanation: "Plant growth chemicals: Auxin (stem elongation, bends to light), Gibberellin (stem growth), Cytokinin (rapid cell division in fruits/seeds), Abscisic Acid (stress hormone, wilts leaves).",
    example: "Auxin accumulates on shaded side of shoot, causing cells there to grow longer and bending shoot toward light (phototropism).",
    examinerKeywordTrap: "Abscisic Acid (ABA) is a GROWTH INHIBITOR (promotes dormancy and wilting); Auxin, Gibberellin, Cytokinin are GROWTH PROMOTERS."
  },

  // =======================================================================
  // CHAPTER 7: HOW DO ORGANISMS REPRODUCE? (BIOLOGY)
  // =======================================================================
  {
    id: "def_ch7_1",
    chapterNo: 7,
    term: "Binary Fission vs. Multiple Fission",
    hindiTerm: "द्विखंडन बनाम बहुखंडन",
    discipline: "Biology",
    category: "Process / Phenomenon",
    ncertDefinition: "Binary Fission: Asexual division of a single parent organism into two equal, identical daughter cells (e.g. Amoeba, Leishmania). Multiple Fission: Division of a single parent into many daughter cells simultaneously within a protective cyst (e.g. Plasmodium).",
    simplifiedExplanation: "Binary = splits into 2 (under normal conditions). Multiple = splits into many inside a cyst shell (e.g. malarial parasite).",
    example: "Amoeba divides across any plane; Leishmania divides longitudinally relative to its whip-like flagellum; Plasmodium divides by multiple fission.",
    examinerKeywordTrap: "Leishmania has a definite orientation (longitudinal division along flagellum); Amoeba splits in ANY plane."
  },
  {
    id: "def_ch7_2",
    chapterNo: 7,
    term: "Pollination (Self vs. Cross)",
    hindiTerm: "परागण (स्व-परागण बनाम पर-परागण)",
    discipline: "Biology",
    category: "Process / Phenomenon",
    ncertDefinition: "The transfer of pollen grains from the anther of a flower stamen to the receptive stigma of the carpel. Self-pollination occurs within the same flower/plant; cross-pollination occurs between flowers of different plants of the same species.",
    simplifiedExplanation: "Moving flower pollen from the male part (anther) to the female sticky landing pad (stigma).",
    example: "Wind-pollinated flowers have light, non-sticky pollen; insect-pollinated flowers have colorful petals, scent, and nectar.",
    examinerKeywordTrap: "Pollination is strictly the TRANSFER of pollen; FERTILIZATION is the subsequent fusion of male gamete with female ovum."
  },
  {
    id: "def_ch7_3",
    chapterNo: 7,
    term: "Placenta",
    hindiTerm: "अपरा (प्लेसेंटा)",
    discipline: "Biology",
    category: "Substance / Structure",
    ncertDefinition: "A specialized disc-like vascular tissue embedded in the uterine wall that provides a large surface area for glucose, oxygen, and nutrients to pass from mother to embryo and removes embryo waste into maternal blood.",
    simplifiedExplanation: "The lifeline disc between mother and developing fetus that swaps oxygen and food for waste products without mixing their blood directly.",
    example: "Villi on the embryo's side surrounded by blood spaces on mother's side facilitate high-speed diffusion.",
    examinerKeywordTrap: "Mother and fetus blood DO NOT mix directly; exchange occurs strictly through diffusion across placental villi membranes."
  },

  // =======================================================================
  // CHAPTER 8: HEREDITY AND EVOLUTION (BIOLOGY)
  // =======================================================================
  {
    id: "def_ch8_1",
    chapterNo: 8,
    term: "Heredity & Variation",
    hindiTerm: "आनुवंशिकता एवं विभिन्नता",
    discipline: "Biology",
    category: "Process / Phenomenon",
    ncertDefinition: "Heredity: The biological transmission of genetically based physical/physiological characteristics from parents to offspring. Variation: The structural or genetic differences shown by individuals of the same species.",
    simplifiedExplanation: "Heredity is why you look like your parents; variation is why you don't look like their identical clone.",
    example: "Free earlobes vs. attached earlobes in human populations.",
    examinerKeywordTrap: "Variations provide survival advantage during environmental shifts (e.g. heat-resistant bacteria in a heatwave)."
  },
  {
    id: "def_ch8_2",
    chapterNo: 8,
    term: "Dominant vs. Recessive Trait",
    hindiTerm: "प्रभावी बनाम अप्रभावी लक्षण",
    discipline: "Biology",
    category: "Substance / Structure",
    ncertDefinition: "Dominant Trait: An allele/trait that expresses itself phenotypically in both homozygous (TT) and heterozygous (Tt) conditions. Recessive Trait: An allele/trait that expresses itself ONLY in homozygous condition (tt) in the absence of a dominant allele.",
    simplifiedExplanation: "Dominant trait is the boss—it always shows up even if only 1 copy is present. Recessive is shy—it shows up only when both copies are recessive.",
    formulaOrEquation: "Monohybrid F2 Phenotypic Ratio = 3 Tall : 1 Dwarf; Genotypic Ratio = 1 TT : 2 Tt : 1 tt",
    example: "Tall pea plant (T) is dominant over dwarf (t); Round seed (R) is dominant over wrinkled seed (r).",
    examinerKeywordTrap: "In F1 generation, recessive trait is NOT lost; it simply remains unexpressed until segregating in F2 generation."
  },
  {
    id: "def_ch8_3",
    chapterNo: 8,
    term: "Sex Determination in Humans",
    hindiTerm: "मानव में लिंग निर्धारण",
    discipline: "Biology",
    category: "Law / Principle",
    ncertDefinition: "The genetic mechanism determining offspring sex: Females possess XX sex chromosomes (all ova carry an X), while males possess XY (50% sperm carry X, 50% carry Y). Thus, the father's fertilizing sperm determines the sex of the child.",
    simplifiedExplanation: "Mother gives X. Father gives either X (makes baby girl XX) or Y (makes baby boy XY) with exactly 50% probability each time.",
    formulaOrEquation: "Male (XY) + Female (XX) ⟶ 50% Girl (XX) + 50% Boy (XY)",
    example: "Fertilization by X-sperm gives a girl (44+XX); fertilization by Y-sperm gives a boy (44+XY).",
    examinerKeywordTrap: "It is genetically impossible for the mother to determine the child's sex because all female eggs contain identical X chromosomes."
  },

  // =======================================================================
  // CHAPTER 9: LIGHT — REFLECTION AND REFRACTION (PHYSICS)
  // =======================================================================
  {
    id: "def_ch9_1",
    chapterNo: 9,
    term: "Laws of Reflection",
    hindiTerm: "परावर्तन के नियम",
    discipline: "Physics",
    category: "Law / Principle",
    ncertDefinition: "1. The angle of incidence (∠i) is equal to the angle of reflection (∠r).\n2. The incident ray, the normal to the mirror at the point of incidence, and the reflected ray, all lie in the same plane.",
    simplifiedExplanation: "Light bounces off a shiny surface like a billiard ball: bounce-out angle equals hit-in angle, and all three rays lie flat on the same imaginary sheet.",
    formulaOrEquation: "∠i = ∠r",
    example: "Image formed by plane mirror or curved headlight mirrors.",
    examinerKeywordTrap: "The laws of reflection apply universally to ALL reflecting surfaces, including spherical, parabolic, and rough surfaces."
  },
  {
    id: "def_ch9_2",
    chapterNo: 9,
    term: "Principal Focus & Focal Length",
    hindiTerm: "मुख्य फोकस एवं फोकस दूरी",
    discipline: "Physics",
    category: "Quantity / Unit",
    ncertDefinition: "Principal Focus: The point on the principal axis where rays of light parallel to the axis converge (concave mirror/convex lens) or appear to diverge from (convex mirror/concave lens) after reflection/refraction. Focal Length (f): The distance between the pole/optical centre and the principal focus.",
    simplifiedExplanation: "The sweet spot on the center axis where parallel sunlight rays get focused into a burning point.",
    formulaOrEquation: "f = R / 2 (Focal length is exactly half the radius of curvature)",
    siUnitOrValues: "Measured in metres (m)",
    example: "Sunlight focused by a concave mirror onto a paper burns a hole at distance f.",
    examinerKeywordTrap: "Concave mirror focus is REAL (in front, f is negative); Convex mirror focus is VIRTUAL (behind, f is positive)."
  },
  {
    id: "def_ch9_3",
    chapterNo: 9,
    term: "Snell's Law of Refraction",
    hindiTerm: "स्नेल का अपवर्तन नियम",
    discipline: "Physics",
    category: "Law / Principle",
    ncertDefinition: "The ratio of the sine of the angle of incidence to the sine of the angle of refraction is a constant for light of a given colour and for a given pair of media.",
    simplifiedExplanation: "Light bends when crossing into a denser or rarer medium such that sin(i)/sin(r) equals the relative refractive index.",
    formulaOrEquation: "$$\\frac{\\sin i}{\\sin r} = n_{21} = \\frac{n_2}{n_1} = \\frac{v_1}{v_2}$$",
    example: "A straw looking bent in a glass of water; refractive index of glass w.r.t air is ~1.5.",
    examinerKeywordTrap: "When light travels into an optically denser medium, it slows down and bends TOWARDS the normal; into rarer medium, bends AWAY."
  },
  {
    id: "def_ch9_4",
    chapterNo: 9,
    term: "Power of a Lens",
    hindiTerm: "लेंस की क्षमता",
    discipline: "Physics",
    category: "Quantity / Unit",
    ncertDefinition: "The degree of convergence or divergence of light rays achieved by a lens, defined mathematically as the reciprocal of its focal length expressed in metres.",
    simplifiedExplanation: "How sharply a lens bends light. Shorter focal length = fatter lens = stronger power.",
    formulaOrEquation: "$$P = \\frac{1}{f \\text{ (in metres)}} = \\frac{100}{f \\text{ (in cm)}}$$",
    siUnitOrValues: "Dioptre (D); 1 D = 1 m⁻¹",
    example: "Convex lens with f = +50 cm (+0.5 m) has Power = +2.0 D. Concave lens with f = -25 cm has Power = -4.0 D.",
    examinerKeywordTrap: "Students forget to convert cm to metres before inverting! Convex lens power is POSITIVE (+); Concave lens power is NEGATIVE (-)."
  },

  // =======================================================================
  // CHAPTER 10: THE HUMAN EYE AND COLOURFUL WORLD (PHYSICS)
  // =======================================================================
  {
    id: "def_ch10_1",
    chapterNo: 10,
    term: "Power of Accommodation",
    hindiTerm: "समंजन क्षमता",
    discipline: "Physics",
    category: "Process / Phenomenon",
    ncertDefinition: "The ability of the human eye lens to adjust its focal length using ciliary muscles so as to focus clearly on both near and distant objects on the retina.",
    simplifiedExplanation: "Your eye's autofocus muscle: ciliary muscles relax to flatten lens for distant vision, and contract to thicken lens for reading books.",
    siUnitOrValues: "Near point = 25 cm; Far point = Infinity (∞)",
    example: "Reading a book 25 cm away and instantly looking up at a star in the sky.",
    examinerKeywordTrap: "Least distance of distinct vision is 25 cm for a normal adult eye. Below 25 cm, eye strain occurs."
  },
  {
    id: "def_ch10_2",
    chapterNo: 10,
    term: "Myopia (Near-sightedness) & Correction",
    hindiTerm: "निकट-दृष्टि दोष एवं निवारण",
    discipline: "Physics",
    category: "Defect / Condition",
    ncertDefinition: "A vision defect where a person can see nearby objects clearly but cannot see distant objects distinctly, because the image of distant objects is formed in front of the retina. Corrected using a concave (diverging) lens.",
    simplifiedExplanation: "Can see near, can't see far. Eye eyeball is too long or lens is too curved, so image lands too early in front of retina. Fixed with concave glasses.",
    formulaOrEquation: "Causes: (1) Excessive curvature of eye lens, (2) Elongation of eyeball. Correction: Concave lens of suitable focal length.",
    example: "Student unable to read blackboard text from back bench of classroom.",
    examinerKeywordTrap: "Concave lens diverges incoming rays so they appear to come from the person's defective far point."
  },
  {
    id: "def_ch10_3",
    chapterNo: 10,
    term: "Hypermetropia (Far-sightedness) & Correction",
    hindiTerm: "दीर्घ-दृष्टि दोष एवं निवारण",
    discipline: "Physics",
    category: "Defect / Condition",
    ncertDefinition: "A vision defect where a person can see distant objects clearly but cannot see nearby objects distinctly, because the near point recedes beyond 25 cm and the image of near objects forms behind the retina. Corrected using a convex (converging) lens.",
    simplifiedExplanation: "Can see far, can't read nearby books. Eyeball is too short or lens too flat, so light focuses behind retina. Fixed with convex reading glasses.",
    formulaOrEquation: "Causes: (1) Focal length of eye lens is too long, (2) Eyeball has become too short. Correction: Convex lens.",
    example: "Adult holding newspaper at arm's length (50 cm) to read comfortably.",
    examinerKeywordTrap: "Must draw all 3 diagrams in board exams: (a) Defective eye, (b) Near point of defective eye, (c) Corrected eye with convex lens."
  },
  {
    id: "def_ch10_4",
    chapterNo: 10,
    term: "Dispersion of White Light",
    hindiTerm: "श्वेत प्रकाश का विक्षेपण",
    discipline: "Physics",
    category: "Process / Phenomenon",
    ncertDefinition: "The phenomenon of splitting of white light into its constituent seven spectrum colours (VIBGYOR) when passing through a transparent refracting prism.",
    simplifiedExplanation: "White sunlight splits into a rainbow because different colours travel at different speeds through glass: Violet bends most, Red bends least.",
    formulaOrEquation: "VIBGYOR: Violet (max deviation, min wavelength) to Red (min deviation, max wavelength)",
    example: "Rainbow in sky created by tiny suspended raindrops acting as miniature prisms and internal reflectors.",
    examinerKeywordTrap: "Red bends LEAST because it has longest wavelength and fastest speed in glass; Violet bends MOST."
  },

  // =======================================================================
  // CHAPTER 11: ELECTRICITY (PHYSICS)
  // =======================================================================
  {
    id: "def_ch11_1",
    chapterNo: 11,
    term: "Electric Current",
    hindiTerm: "विद्युत धारा",
    discipline: "Physics",
    category: "Quantity / Unit",
    ncertDefinition: "The rate of flow of electric charges through a conductor's cross-sectional area per unit time, measured in Amperes.",
    simplifiedExplanation: "The traffic rate of electrons pumping through a wire: 1 Ampere = 1 Coulomb of charge flowing past each second.",
    formulaOrEquation: "$$I = \\frac{Q}{t} = \\frac{n \\cdot e}{t}$$",
    siUnitOrValues: "Ampere (A); 1 A = 1 C/s. Measured with an Ammeter (always connected in SERIES).",
    example: "1 A of current corresponds to approximately $6.25 \\times 10^{18}$ electrons flowing per second.",
    examinerKeywordTrap: "Conventional current flows from POSITIVE to NEGATIVE terminal (opposite to electron flow direction)."
  },
  {
    id: "def_ch11_2",
    chapterNo: 11,
    term: "Electric Potential Difference",
    hindiTerm: "विद्युत् विभवान्तर",
    discipline: "Physics",
    category: "Quantity / Unit",
    ncertDefinition: "The amount of work done in moving a unit positive charge from one point to another in an electrostatic or electric circuit.",
    simplifiedExplanation: "The electrical pressure pushing charges through the wire: 1 Volt = 1 Joule of energy spent to push 1 Coulomb of charge.",
    formulaOrEquation: "$$V = \\frac{W}{Q}$$",
    siUnitOrValues: "Volt (V); 1 V = 1 J/C. Measured with a Voltmeter (always connected in PARALLEL).",
    example: "A standard 1.5 V AA cell does 1.5 Joules of work for every Coulomb of charge it circulates.",
    examinerKeywordTrap: "Ammeter has very low resistance (in series); Voltmeter has extremely high resistance (in parallel)."
  },
  {
    id: "def_ch11_3",
    chapterNo: 11,
    term: "Ohm's Law",
    hindiTerm: "ओम का नियम",
    discipline: "Physics",
    category: "Law / Principle",
    ncertDefinition: "The electric current flowing through a metallic conductor is directly proportional to the potential difference applied across its ends, provided its temperature and physical conditions remain constant.",
    simplifiedExplanation: "Double the voltage push, and you double the electric current flow, as long as the wire doesn't get hotter.",
    formulaOrEquation: "$$V \\propto I \\implies V = I \\cdot R$$",
    siUnitOrValues: "Resistance (R) unit is Ohm (Ω); 1 Ω = 1 V/A",
    example: "V-I graph of a nichrome wire is a straight line passing through the origin (slope = R).",
    examinerKeywordTrap: "MUST state the condition: 'Provided temperature and physical conditions remain constant' or lose 1 mark."
  },
  {
    id: "def_ch11_4",
    chapterNo: 11,
    term: "Resistivity (Specific Resistance)",
    hindiTerm: "प्रतिरोधकता",
    discipline: "Physics",
    category: "Quantity / Unit",
    ncertDefinition: "The intrinsic resistance offered by a conductor of unit length and unit cross-sectional area, characteristic of the material independent of its dimensions at a given temperature.",
    simplifiedExplanation: "A material's internal resistance fingerprint: how stubbornly the metal atom resists electric flow. Changing wire length/thickness does NOT change resistivity!",
    formulaOrEquation: "$$R = \\rho \\frac{l}{A} \\implies \\rho = \\frac{R \\cdot A}{l}$$",
    siUnitOrValues: "Ohm-metre (Ω·m)",
    example: "Copper resistivity is low (~$1.62 \\times 10^{-8}\\ \\Omega\\cdot\\text{m}$); Nichrome alloy is high (~$100 \\times 10^{-8}\\ \\Omega\\cdot\\text{m}$).",
    examinerKeywordTrap: "Classic Board trap: If a wire is stretched to double length, its RESISTANCE increases 4x, but its RESISTIVITY (ρ) remains UNCHANGED."
  },
  {
    id: "def_ch11_5",
    chapterNo: 11,
    term: "Joule's Law of Heating",
    hindiTerm: "जूल का तापन नियम",
    discipline: "Physics",
    category: "Law / Principle",
    ncertDefinition: "The heat produced in a resistor is directly proportional to (1) the square of current for a given resistance, (2) the resistance for a given current, and (3) the time for which current flows.",
    simplifiedExplanation: "Heat generated by electricity: $H = I^2 R t$. Doubling the current creates FOUR times as much heat!",
    formulaOrEquation: "$$H = I^2 \\cdot R \\cdot t = V \\cdot I \\cdot t = \\frac{V^2}{R} \\cdot t$$",
    siUnitOrValues: "Joules (J); 1 kWh = $3.6 \\times 10^6$ J",
    example: "Electric iron, toaster, geyser, fuse wire.",
    examinerKeywordTrap: "Fuse wire must have high resistance and LOW melting point so it melts before home appliances burn."
  },

  // =======================================================================
  // CHAPTER 12: MAGNETIC EFFECTS OF ELECTRIC CURRENT (PHYSICS)
  // =======================================================================
  {
    id: "def_ch12_1",
    chapterNo: 12,
    term: "Magnetic Field & Field Lines",
    hindiTerm: "चुंबकीय क्षेत्र एवं क्षेत्र रेखाएं",
    discipline: "Physics",
    category: "Quantity / Unit",
    ncertDefinition: "Magnetic Field: The region around a magnet or current-carrying conductor where magnetic force can be experienced by a magnetic compass needle. Magnetic Field Lines: Imaginary continuous closed curves showing the direction along which a hypothetical north pole would move.",
    simplifiedExplanation: "The invisible force field around a magnet: lines emerge from North pole, enter South pole outside the magnet, and run South to North inside, forming closed loops.",
    siUnitOrValues: "Tesla (T)",
    example: "Iron filings sprinkled around a bar magnet snapping into smooth curved patterns.",
    examinerKeywordTrap: "Field lines NEVER intersect each other because that would mean two different directions of magnetic force at the same point, which is impossible."
  },
  {
    id: "def_ch12_2",
    chapterNo: 12,
    term: "Right-Hand Thumb Rule (Maxwell's Corkscrew)",
    hindiTerm: "दाएं हाथ के अंगूठे का नियम",
    discipline: "Physics",
    category: "Law / Principle",
    ncertDefinition: "Imagine holding a straight current-carrying conductor in your right hand such that the thumb points in the direction of current, then your curled fingers show the direction of concentric magnetic field lines.",
    simplifiedExplanation: "Point right thumb along electric current: your curled fingers wrap in the direction of concentric circular magnetic field rings.",
    example: "Current moving upward in a vertical wire produces anticlockwise magnetic field circles when viewed from above.",
    examinerKeywordTrap: "Use RIGHT hand, not left hand! Curl of fingers indicates clockwise or anticlockwise field direction."
  },
  {
    id: "def_ch12_3",
    chapterNo: 12,
    term: "Fleming's Left-Hand Rule",
    hindiTerm: "फ्लेमिंग का वामहस्त नियम",
    discipline: "Physics",
    category: "Law / Principle",
    ncertDefinition: "Stretch the thumb, forefinger, and middle finger of your left hand mutually perpendicular to each other: Forefinger points along Magnetic Field, Middle finger along Electric Current, and Thumb indicates the direction of Motion/Force acting on the conductor.",
    simplifiedExplanation: "FBI trick on your LEFT hand: Forefinger = Field (B), Center finger = Current (I), Thumb = Force / Motion (F).",
    formulaOrEquation: "$$F = B \\cdot I \\cdot L \\sin\\theta$$ (Max force when θ = 90°)",
    example: "Electric motor rotating a coil armature between permanent magnet poles.",
    examinerKeywordTrap: "All three fingers must be held MUTUALLY PERPENDICULAR (at 90° to each other). Used for electric motors."
  },
  {
    id: "def_ch12_4",
    chapterNo: 12,
    term: "Solenoid",
    hindiTerm: "परिनालिका (सोलेनोइड)",
    discipline: "Physics",
    category: "Substance / Structure",
    ncertDefinition: "A coil of many circular turns of insulated copper wire wrapped closely in the shape of a cylinder.",
    simplifiedExplanation: "A spring-like coil of copper wire. When electric current flows through it, it behaves exactly like a bar magnet, producing a uniform magnetic field inside.",
    formulaOrEquation: "Magnetic field inside a long solenoid is uniform and parallel to its axis.",
    example: "Inserting a soft iron core inside a solenoid makes an ultra-powerful Electromagnet.",
    examinerKeywordTrap: "The magnetic field INSIDE a solenoid is UNIFORM and straight; it resembles a bar magnet's field outside."
  },

  // =======================================================================
  // CHAPTER 13: OUR ENVIRONMENT (NATURAL RESOURCES)
  // =======================================================================
  {
    id: "def_ch13_1",
    chapterNo: 13,
    term: "Ecosystem",
    hindiTerm: "पारितंत्र (इकोसिस्टम)",
    discipline: "Natural Resources",
    category: "Substance / Structure",
    ncertDefinition: "A self-sustaining functional structural unit of biosphere comprising all the interacting living organisms (biotic community) in an area together with the non-living physical environment (abiotic factors).",
    simplifiedExplanation: "A community of plants, animals, and bacteria interacting with sunlight, soil, water, and air in harmony.",
    example: "Pond ecosystem, forest ecosystem, crop field (artificial ecosystem), aquarium (artificial ecosystem).",
    examinerKeywordTrap: "Distinguish natural ecosystems (forests, ponds, lakes) from artificial/man-made ecosystems (crop fields, gardens, aquariums)."
  },
  {
    id: "def_ch13_2",
    chapterNo: 13,
    term: "Ten Percent (10%) Law (Lindeman, 1942)",
    hindiTerm: "10% का नियम (ऊर्जा प्रवाह)",
    discipline: "Natural Resources",
    category: "Law / Principle",
    ncertDefinition: "Only 10% of the energy entering a particular trophic level of an ecosystem is transferred to the next higher trophic level; 90% is dissipated as metabolic heat into the environment during digestion and movement.",
    simplifiedExplanation: "Every step up the food chain, 90% of energy is lost as heat. Only 10% makes it to the next diner! That's why food chains rarely have more than 4-5 links.",
    formulaOrEquation: "10,000 J (Plants) ⟶ 1,000 J (Deer) ⟶ 100 J (Tiger) ⟶ 10 J (Decomposer)",
    example: "Plants capture only 1% of total sunlight energy falling on leaves, then 10% law applies between organisms.",
    examinerKeywordTrap: "Green plants capture ONLY 1% of terrestrial sunlight, NOT 10%! The 10% law applies ONLY from producers to consumers."
  },
  {
    id: "def_ch13_3",
    chapterNo: 13,
    term: "Biological Magnification (Biomagnification)",
    hindiTerm: "जैव-आवर्धन",
    discipline: "Natural Resources",
    category: "Process / Phenomenon",
    ncertDefinition: "The progressive accumulation and increasing concentration of toxic, non-biodegradable chemicals (like DDT or mercury) in the tissues of organisms at each successively higher trophic level in a food chain.",
    simplifiedExplanation: "Poisons that don't rot away get more and more concentrated at each step of the food chain, with top predators (like humans) getting the highest toxic dose.",
    example: "DDT in water (0.003 ppm) ⟶ Zooplankton (0.04 ppm) ⟶ Small fish (0.5 ppm) ⟶ Large fish (2 ppm) ⟶ Fish-eating Birds (25 ppm).",
    examinerKeywordTrap: "Non-biodegradable chemicals accumulate to the HIGHEST concentration in the organisms at the TOP of the food chain (humans)."
  },
  {
    id: "def_ch13_4",
    chapterNo: 13,
    term: "Ozone Layer Depletion",
    hindiTerm: "ओजोन परत का अपक्षय",
    discipline: "Natural Resources",
    category: "Process / Phenomenon",
    ncertDefinition: "The thinning of the stratospheric ozone layer (O₃) that shields Earth from harmful solar ultraviolet (UV) radiation, primarily caused by chlorofluorocarbons (CFCs) releasing reactive chlorine radicals.",
    simplifiedExplanation: "High-altitude O₃ acts as Earth's natural sunscreen. CFC gases from old ACs and sprays drift up and destroy ozone molecules, letting burning UV rays through.",
    formulaOrEquation: "O₂ —[UV]⟶ O + O; O + O₂ ⟶ O₃ (Ozone); Montreal Protocol 1987 froze CFC production.",
    example: "Ozone hole over Antarctica detected in 1985; increased skin cancer, cataracts, and crop damage.",
    examinerKeywordTrap: "Ozone at ground level is a deadly poison; in the stratosphere it is an essential protective shield."
  }
];

export function getDefinitionsForChapter(chapterNo: number): ScienceDefinition[] {
  return SCIENCE_DEFINITIONS_MASTER.filter((d) => d.chapterNo === chapterNo);
}
