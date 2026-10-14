import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH5_QUESTIONS: VaultQuestion[] = [
  // =========================================================================
  // 1-MARK MCQs & ASSERTION-REASON
  // =========================================================================
  {
    id: "sci_c5_q1",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "Which of the following events does NOT occur during the light reactions of photosynthesis?\n(a) Absorption of light energy by chlorophyll\n(b) Splitting of water molecules into hydrogen and oxygen\n(c) Reduction of carbon dioxide to carbohydrates\n(d) Conversion of light energy into chemical energy",
    options: [
      "Absorption of light energy by chlorophyll",
      "Splitting of water molecules into hydrogen and oxygen",
      "Reduction of carbon dioxide to carbohydrates",
      "Conversion of light energy into chemical energy"
    ],
    correctOption: 2,
    answer: "Option (c) is correct: Reduction of carbon dioxide to carbohydrates.",
    explanation: "NCERT lists 3 events during photosynthesis: 1. Absorption of light energy by chlorophyll, 2. Conversion of light energy to chemical energy and splitting of water into hydrogen and oxygen (photolysis), and 3. Reduction of CO2 to carbohydrates. The reduction of carbon dioxide is a dark reaction (light-independent phase), which does not strictly require light and can occur in desert plants at night.",
    formula: "Photosynthesis: 6CO2 + 12H2O -> C6H12O6 + 6O2 + 6H2O",
    examinerNote: "NCERT Section 5.2.1. In desert plants, stomata open at night to take up CO2 and store it as an intermediate, which is reduced during the day.",
    source: "CBSE 2024 / NCERT Exemplar Q1"
  },
  {
    id: "sci_c5_q2",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "The opening and closing of the stomatal pore depends upon:\n(a) Atmospheric temperature\n(b) Atmospheric oxygen concentration\n(c) Water content in guard cells\n(d) Concentration of carbon dioxide in stomata",
    options: [
      "Atmospheric temperature",
      "Atmospheric oxygen concentration",
      "Water content in guard cells",
      "Concentration of carbon dioxide in stomata"
    ],
    correctOption: 2,
    answer: "Option (c) is correct: Water content in guard cells.",
    explanation: "Guard cells swell when water flows into them from adjacent epidermal cells, causing the curved outer walls to bulge and opening the stomatal pore. Conversely, when guard cells lose water, they become flaccid and shrink, causing the stomatal pore to close.",
    formula: "Turgid Guard Cells -> Stoma Opens; Flaccid Guard Cells -> Stoma Closes",
    examinerNote: "NCERT Section 5.2.1 benchmark conceptual question.",
    source: "NCERT Exemplar Q2 / CBSE 2023"
  },
  {
    id: "sci_c5_q3",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "During deficiency of oxygen in human skeletal muscle cells, pyruvate is converted into lactic acid in the:\n(a) Mitochondria\n(b) Cytoplasm\n(c) Chloroplast\n(d) Nucleus",
    options: ["Mitochondria", "Cytoplasm", "Chloroplast", "Nucleus"],
    correctOption: 1,
    answer: "Option (b) is correct: Cytoplasm.",
    explanation: "Both glycolysis (glucose -> pyruvate) and anaerobic conversion of pyruvate into lactic acid during strenuous exercise occur strictly in the CYTOPLASM of human skeletal muscle cells. Mitochondria are involved exclusively in aerobic respiration in the presence of oxygen.",
    formula: "Pyruvate (3-Carbon) -> Lactic Acid (3-Carbon) + 2 ATP (In Cytoplasm)",
    examinerNote: "Common trap: Students pick mitochondria because it is the 'powerhouse'. Anaerobic fermentation happens in the cytoplasm!",
    source: "CBSE 2024 / NCERT Figure 5.8"
  },
  {
    id: "sci_c5_q4",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "Which of the following statement(s) is/are true about the human heart?\n(i) Left atrium receives oxygenated blood from lungs through pulmonary veins.\n(ii) Left ventricle pumps oxygenated blood to different body parts through aorta.\n(iii) Right atrium receives oxygenated blood from body organs through vena cava.\n(iv) Right ventricle pumps deoxygenated blood to lungs through pulmonary artery.\n(a) (i) and (ii)\n(b) (ii) and (iii)\n(c) (i), (ii) and (iv)\n(d) (ii) and (iv)",
    options: [
      "(i) and (ii)",
      "(ii) and (iii)",
      "(i), (ii) and (iv)",
      "(ii) and (iv)"
    ],
    correctOption: 2,
    answer: "Option (c) is correct: (i), (ii) and (iv).",
    explanation: "Left atrium receives oxygenated blood from lungs (pulmonary veins). Left ventricle pumps oxygenated blood to the body (aorta). Right ventricle pumps deoxygenated blood to lungs (pulmonary artery). Statement (iii) is FALSE because right atrium receives DEOXYGENATED blood from body tissues through vena cava.",
    formula: "Left Side = Oxygenated; Right Side = Deoxygenated",
    examinerNote: "NCERT Exemplar Q11. Memorize that Pulmonary Veins carry oxygenated blood and Pulmonary Arteries carry deoxygenated blood.",
    source: "NCERT Exemplar / CBSE 2023"
  },
  {
    id: "sci_c5_q5",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "The filtration units of kidneys are called:\n(a) Ureter\n(b) Urethra\n(c) Neurons\n(d) Nephrons",
    options: ["Ureter", "Urethra", "Neurons", "Nephrons"],
    correctOption: 3,
    answer: "Option (d) is correct: Nephrons.",
    explanation: "Each kidney contains approximately 1 to 1.2 million microscopic functional filtration units called nephrons. Neurons are the functional units of the nervous system.",
    formula: "Nephron = Bowman's Capsule + Glomerulus + Renal Tubule + Collecting Duct",
    examinerNote: "Examiners trap students with the visual similarity between 'Nephron' and 'Neuron'.",
    source: "NCERT Section 5.5.1 / CBSE 2024"
  },
  {
    id: "sci_c5_q6",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "Oxygen liberated during photosynthesis comes from:\n(a) Water\n(b) Chlorophyll\n(c) Carbon dioxide\n(d) Glucose",
    options: ["Water", "Chlorophyll", "Carbon dioxide", "Glucose"],
    correctOption: 0,
    answer: "Option (a) is correct: Water (H2O).",
    explanation: "Ruben and Kamen proved using oxygen isotope O-18 that the oxygen gas released during photosynthesis originates entirely from the photolytic splitting of water (H2O -> 2H+ + 2e- + 1/2 O2), NOT from carbon dioxide.",
    formula: "Photolysis: 2H2O -> 4H+ + 4e- + O2",
    examinerNote: "Very frequent CBSE question: CO2 is reduced to glucose; H2O is oxidised to O2.",
    source: "NCERT Exemplar Q13 / CBSE 2023"
  },
  {
    id: "sci_c5_q7",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "Which of the following is the correct sequence of air passage during human inhalation?\n(a) Nostrils -> Larynx -> Pharynx -> Trachea -> Lungs\n(b) Nasal passage -> Trachea -> Pharynx -> Larynx -> Alveoli\n(c) Larynx -> Nostrils -> Pharynx -> Lungs\n(d) Nostrils -> Pharynx -> Larynx -> Trachea -> Alveoli",
    options: [
      "Nostrils -> Larynx -> Pharynx -> Trachea -> Lungs",
      "Nasal passage -> Trachea -> Pharynx -> Larynx -> Alveoli",
      "Larynx -> Nostrils -> Pharynx -> Lungs",
      "Nostrils -> Pharynx -> Larynx -> Trachea -> Alveoli"
    ],
    correctOption: 3,
    answer: "Option (d) is correct: Nostrils -> Pharynx -> Larynx -> Trachea -> Alveoli.",
    explanation: "Inhaled air passes from external nostrils into the nasal cavity, then into the pharynx (throat), through the larynx (voice box), down the trachea (windpipe), which divides into bronchi, bronchioles, and terminates in the alveoli.",
    formula: "Nostrils -> Pharynx -> Larynx -> Trachea -> Bronchi -> Bronchioles -> Alveoli",
    examinerNote: "Pharynx comes before Larynx (P comes before L in alphabet).",
    source: "NCERT Exemplar Q9 / CBSE 2024"
  },
  {
    id: "sci_c5_q8",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "Which component of blood is responsible for clotting of blood at the site of an injury?\n(a) RBCs\n(b) WBCs\n(c) Blood Platelets\n(d) Blood Plasma",
    options: ["RBCs", "WBCs", "Blood Platelets", "Blood Plasma"],
    correctOption: 2,
    answer: "Option (c) is correct: Blood Platelets (Thrombocytes).",
    explanation: "Blood platelets circulate in blood and release thromboplastin at injury sites, initiating the enzyme cascade that converts soluble fibrinogen into insoluble fibrin mesh threads, plugging leaks and forming a blood clot to prevent hemorrhage.",
    formula: "Platelets -> Thromboplastin -> Prothrombin to Thrombin -> Fibrinogen to Fibrin Clot",
    examinerNote: "NCERT Section 5.4.1 'Maintenance by Platelets'.",
    source: "CBSE 2023"
  },
  {
    id: "sci_c5_q9",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Rings of cartilage are present in the human trachea (windpipe).\nReason (R): Rings of cartilage prevent the air passage from collapsing when there is less air in it.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is not the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
    explanation: "The trachea is reinforced with 16 to 20 C-shaped rings of hyaline cartilage. These structural rings provide rigidity and prevent the trachea from collapsing under negative pressure during rapid inhalation or when the air pressure inside the trachea drops.",
    formula: "Tracheal Cartilage = Structural support against collapsing",
    examinerNote: "NCERT Section 5.3.1. Full 1 mark for linking cartilage rings to prevention of collapse.",
    source: "CBSE Official Sample Paper 2025"
  },
  {
    id: "sci_c5_q10",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): The small intestine is the site of the complete digestion of carbohydrates, proteins, and fats.\nReason (R): The small intestine receives bile juice from the liver and pancreatic juice from the pancreas, and secretes intestinal enzymes.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is not the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
    explanation: "The small intestine (ileum) contains bile salts to emulsify fats, pancreatic enzymes (amylase, trypsin, lipase) to hydrolyse macromolecular chyme, and succus entericus (intestinal juice) containing terminal peptidases, maltase, and lipases to break food into monomeric glucose, amino acids, and fatty acids.",
    formula: "Small Intestine = Complete Digestion (Carbs -> Glucose, Proteins -> Amino Acids, Fats -> Fatty Acids)",
    examinerNote: "NCERT Section 5.2.3. Emphasize that digestion terminates in the small intestine; large intestine only absorbs water.",
    source: "CBSE Board 2024"
  },
  {
    id: "sci_c5_q11",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Transpiration creates a powerful suction force that pulls water upwards from roots in tall trees.\nReason (R): Continuous evaporation of water molecules from stomatal pore cells creates a continuous tension/transpiration pull in the xylem vessels.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is not the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is not the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
    explanation: "Loss of water in the form of vapour from the aerial parts of a plant (transpiration) reduces water potential in mesophyll cells. Water is pulled from adjacent xylem vessels, establishing a continuous negative pressure gradient (transpiration pull) from roots through stems to leaves that lifts water up to heights of over 100 meters.",
    formula: "Transpiration Pull = Primary driving force for xylem sap ascent during daytime",
    examinerNote: "At night, root pressure is primary; during daytime, transpiration pull dominates.",
    source: "CBSE Board 2023"
  },

  // =========================================================================
  // 2-MARK VERY SHORT ANSWER (VSA)
  // =========================================================================
  {
    id: "sci_c5_q12",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 2,
    type: "VSA",
    question: "State the role of hydrochloric acid (HCl) and mucus secreted by the gastric glands of the human stomach.",
    answer: "1. Hydrochloric Acid (HCl):\n   - Creates an acidic medium (pH ~1.5 to 2.0) that activates the inactive pro-enzyme pepsinogen into active pepsin for protein digestion.\n   - Destroys ingested food-borne bacteria and microorganisms.\n\n2. Mucus:\n   - Forms a thick protective barrier lining the inner wall of the stomach, shielding it from the corrosive action of concentrated hydrochloric acid and preventing the formation of peptic ulcers.",
    explanation: "Gastric glands secrete HCl, pepsinogen, and mucus in gastric juice.",
    formula: "HCl: Activates Pepsinogen + Kills Microbes; Mucus: Protects Stomach Wall",
    examinerNote: "1 mark for HCl functions; 1 mark for mucus protective function.",
    source: "NCERT Section 5.2.3 / CBSE 2024"
  },
  {
    id: "sci_c5_q13",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 2,
    type: "VSA",
    question: "Why do aquatic organisms have a much faster breathing rate than terrestrial organisms?",
    answer: "Aquatic organisms (such as fishes) obtain oxygen dissolved in water, whereas terrestrial organisms breathe atmospheric oxygen.\nThe concentration of dissolved oxygen in water is extremely low (less than 1% by volume) compared to the abundant concentration of oxygen in atmospheric air (~21%). Therefore, to intake sufficient oxygen to meet their metabolic demands, aquatic organisms must breathe much faster than terrestrial organisms.",
    explanation: "NCERT Section 5.3. Aquatic animals pump large volumes of water across gills per minute.",
    formula: "Dissolved O2 in Water (~0.7%) << O2 in Atmospheric Air (21%)",
    examinerNote: "Key phrase required: 'amount of dissolved oxygen in water is fairly low compared to amount of oxygen in the air'.",
    source: "NCERT Intext Question / CBSE 2023"
  },
  {
    id: "sci_c5_q14",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 2,
    type: "VSA",
    question: "Why are the muscular walls of the ventricles of the human heart much thicker than the walls of the atria?",
    answer: "Atria only pump blood into the adjacent ventricles situated right below them, which requires minimal muscular pressure.\nIn contrast, ventricles must generate tremendous pressure to pump blood out of the heart across long distances: the right ventricle pumps blood to the lungs, while the left ventricle must pump blood throughout the entire systemic body to reach distant tissues against high peripheral resistance. Hence, ventricles possess much thicker muscular walls.",
    explanation: "Left ventricle myocardium is approximately 3 times thicker than right ventricle myocardium.",
    formula: "Ventricular Wall Thickness > Atrial Wall Thickness (High Pressure Generation)",
    examinerNote: "Award 1 mark for stating distance/pressure requirements; 1 mark for comparing atria vs ventricles.",
    source: "NCERT Section 5.4 / CBSE 2024"
  },
  {
    id: "sci_c5_q15",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 2,
    type: "VSA",
    question: "What is bile juice? Why is it considered biologically essential in digestion even though it contains no digestive enzymes?",
    answer: "Bile juice is a greenish-yellow alkaline fluid secreted by the liver and stored in the gall bladder.\nIt is biologically essential because of two vital functions:\n1. Emulsification of Fats: Bile salts break large, insoluble fat globules into microscopic droplets, greatly increasing their surface area for pancreatic lipase to act upon.\n2. Neutralisation: It neutralises the acidic gastric chyme entering from the stomach, converting the medium into an alkaline state (pH ~7.8 to 8.0) necessary for pancreatic and intestinal enzymes to function.",
    explanation: "Bile contains bile pigments (bilirubin, biliverdin) and bile salts (sodium glycocholate/taurocholate).",
    formula: "Bile Functions: (1) Physical Emulsification of Fats + (2) Alkaline Medium for Lipase",
    examinerNote: "Crucial clarification: Bile performs PHYSICAL emulsification, not chemical enzymatic breakdown.",
    source: "CBSE Board 2023"
  },
  {
    id: "sci_c5_q16",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 2,
    type: "VSA",
    question: "How do plants excrete their metabolic waste products? List any four methods.",
    answer: "Plants eliminate metabolic wastes through the following methods:\n1. Gaseous wastes: Oxygen (produced during photosynthesis) and carbon dioxide (produced during respiration) are eliminated through stomata in leaves and lenticels in stems.\n2. Excess water: Removed via transpiration through stomata.\n3. Waste storage in cellular vacuoles: Stored in older leaves that subsequently turn yellow and fall off (leaf abscission).\n4. Resins and Gums: Insoluble metabolic wastes are stored in non-functional old xylem vessels.\n5. Root excretion: Some waste substances are excreted directly into the surrounding soil.",
    explanation: "Plants lack specialized excretory organs and rely on passive accumulation and shedding.",
    formula: "Plant Excretion: Stomata Transpiration + Old Leaves Falling + Resins/Gums in Old Xylem",
    examinerNote: "0.5 marks for each of four valid points.",
    source: "NCERT Section 5.5.2 / CBSE 2024"
  },

  // =========================================================================
  // 3-MARK SHORT ANSWER (SA)
  // =========================================================================
  {
    id: "sci_c5_q17",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 3,
    type: "SA",
    question: "Explain the three different metabolic pathways of breakdown of glucose in living organisms with the help of a schematic chart.",
    answer: "All three respiratory pathways initiate with the conversion of Glucose (a 6-carbon molecule) into Pyruvate (a 3-carbon molecule) + energy in the CYTOPLASM (Glycolysis).\n\n1. Pathway 1 - Absence of Oxygen (Yeast / Anaerobic Fermentation):\n   Pyruvate -> Ethanol (2-carbon) + CO2 + Energy (2 ATP)\n   (Used in brewing and baking).\n\n2. Pathway 2 - Lack of Oxygen (Human Muscle Cells during strenuous exercise):\n   Pyruvate -> Lactic acid (3-carbon) + Energy (2 ATP)\n   (Accumulation of lactic acid causes painful muscle cramps).\n\n3. Pathway 3 - Presence of Oxygen (Mitochondria / Aerobic Respiration):\n   Pyruvate + O2 -> 6CO2 + 6H2O + Energy (36-38 ATP)\n   (Produces immense energy for cellular metabolic activities).",
    explanation: "Complete oxidation in mitochondria yields ~18-19 times more ATP than anaerobic pathways.",
    formula: "Glucose (6C) -> Pyruvate (3C) -> (1) Ethanol+CO2 / (2) Lactic Acid / (3) CO2+H2O+38 ATP",
    examinerNote: "NCERT Figure 5.8. 1 mark per pathway with location (cytoplasm vs mitochondria) and carbon counts.",
    source: "CBSE 2024 / NCERT Figure 5.8"
  },
  {
    id: "sci_c5_q18",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 3,
    type: "SA",
    question: "(a) What is meant by 'double circulation'?\n(b) Differentiate between pulmonary circulation and systemic circulation.\n(c) Why is double circulation necessary in birds and mammals?",
    answer: "(a) Double circulation is a circulatory mechanism in which blood travels through the heart twice during one complete cycle through the body.\n\n(b) Components of Double Circulation:\n  1. Pulmonary Circulation: Deoxygenated blood is pumped from the right ventricle to the lungs via the pulmonary artery, where it is oxygenated, and returned to the left atrium via pulmonary veins.\n  2. Systemic Circulation: Oxygenated blood is pumped from the left ventricle through the aorta to all body tissues, and deoxygenated blood is collected via vena cava and returned to the right atrium.\n\n(c) Significance: Double circulation completely separates oxygenated and deoxygenated blood. This ensures highly efficient oxygen supply to body tissues, which is essential for birds and mammals because they are warm-blooded (homeothermic) animals with high metabolic energy requirements to constantly maintain a stable body temperature.",
    explanation: "Complete 4-chambered heart prevents mixing of high-O2 and low-O2 blood streams.",
    formula: "Double Circulation = Pulmonary (Heart-Lungs-Heart) + Systemic (Heart-Body-Heart)",
    examinerNote: "1 mark for definition; 1 mark for pulmonary vs systemic; 1 mark for homeothermic energy justification.",
    source: "CBSE Board 2024 (Set 31/1/2)"
  },
  {
    id: "sci_c5_q19",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 3,
    type: "SA",
    question: "Tabulate three structural and functional differences between Arteries, Veins, and Capillaries.",
    answer: "| Feature | Arteries | Veins | Capillaries |\n| :--- | :--- | :--- | :--- |\n| Direction of Blood Flow | Carry blood AWAY from heart to body organs | Carry blood TOWARDS heart from body organs | Connect arterioles to venules in tissues |\n| Wall Thickness & Elasticity | Thick, highly muscular, and elastic walls | Thin, less muscular, less elastic walls | Ultra-thin walls made of a single endothelial cell layer |\n| Internal Valves | Valves absent (blood flows under high pressure) | Internal semilunar valves present (prevent backflow) | Valves absent |\n| Internal Pressure | Blood flows under high, pulsatile pressure | Blood flows under low, steady pressure | Extremely low pressure facilitating diffusion |\n| Blood Carried | Oxygenated blood (except Pulmonary Artery) | Deoxygenated blood (except Pulmonary Vein) | Site of nutrient, gas, and metabolic waste exchange |",
    explanation: "Capillaries provide the intimate cellular interface where oxygen and glucose diffuse into tissues.",
    formula: "Arteries: Thick, High Pressure, No Valves; Veins: Thin, Low Pressure, Valves Present",
    examinerNote: "Award 1 mark per well-differentiated parameter across all three vessel types.",
    source: "NCERT Section 5.4.1 / CBSE 2023"
  },
  {
    id: "sci_c5_q20",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 3,
    type: "SA",
    question: "Differentiate between the transport of water and minerals in Xylem and the transport of food in Phloem.",
    answer: "| Parameter | Transport in Xylem | Transport in Phloem (Translocation) |\n| :--- | :--- | :--- |\n| Substance Transported | Water and dissolved mineral salts | Soluble photosynthetic products (sucrose, amino acids, hormones) |\n| Direction of Transport | Strictly Unidirectional (upwards from roots to leaves) | Multidirectional / Bidirectional (from source leaves to storage sinks) |\n| Conducting Elements | Tracheids and xylem vessels (non-living / dead cells) | Sieve tubes and companion cells (living cells) |\n| Driving Mechanism | Driven by physical forces: Transpiration pull (day) & Root pressure (night) | Active transport: Sucrose loaded into phloem using metabolic energy (ATP), creating osmotic pressure |\n| Expenditure of ATP | Passive process; does not require ATP | Active process; consumes ATP energy |",
    explanation: "Translocation in phloem moves nutrients based on plant seasonal needs (e.g. from roots to buds in spring).",
    formula: "Xylem: Physical Transpiration Pull (Passive); Phloem: Sucrose + ATP Osmotic Flow (Active)",
    examinerNote: "1 mark each for substance/direction, tissue living status, and ATP expenditure.",
    source: "CBSE 2024 / NCERT Section 5.4.2"
  },
  {
    id: "sci_c5_q21",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 3,
    type: "SA",
    question: "Explain the three-step mechanism of urine formation in the human nephron:\n(a) Glomerular Ultrafiltration\n(b) Selective Reabsorption\n(c) Tubular Secretion",
    answer: "(a) Glomerular Ultrafiltration:\n    Blood enters the glomerulus under high hydrostatic pressure via the wide afferent arteriole. Water, glucose, amino acids, mineral salts, and nitrogenous wastes (urea, uric acid) are forced through the filtration slits of the glomerulus into Bowman's capsule as the initial nephric filtrate (approx. 180 L/day in an adult). Blood cells and large plasma proteins are retained in the blood.\n\n(b) Selective Reabsorption:\n    As the initial filtrate flows through the proximal convoluted tubule (PCT) and Loop of Henle, essential nutrients required by the body (100% of glucose, amino acids, major electrolytes like Na+, and a regulated volume of water) are selectively reabsorbed back into the surrounding peritubular capillaries.\n\n(c) Tubular Secretion:\n    Cells of the renal tubule actively secrete surplus ions (H+, K+, and ammonia) and drug residues from peritubular capillary blood into the tubular lumen. The resulting concentrated fluid (approx. 1 to 2 L/day) is urine, which passes into the collecting duct.",
    explanation: "Selective reabsorption reduces ~180 L of initial filtrate into only ~1-2 L of excreted urine per day.",
    formula: "Urine = Ultrafiltration - Selective Reabsorption + Tubular Secretion",
    examinerNote: "1 mark per step with accurate physiological details.",
    source: "CBSE 2024 / NCERT Section 5.5.1"
  },

  // =========================================================================
  // 5-MARK LONG ANSWER (LA)
  // =========================================================================
  {
    id: "sci_c5_q22",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 5,
    type: "LA",
    question: "Describe the complete digestive cascade of food in the human alimentary canal from mouth to small intestine:\n(a) Digestion in the Mouth\n(b) Movement through the Oesophagus\n(c) Digestion in the Stomach\n(d) Role of Liver and Pancreas secretions in the Small Intestine\n(e) Final digestion and absorption in the Small Intestine",
    answer: "(a) Mouth (Oral Cavity):\n    - Teeth masticate and grind food mechanically; tongue mixes it with saliva.\n    - Saliva secreted by salivary glands contains the enzyme Salivary Amylase, which hydrolyses complex starch into maltose at pH ~6.8:\n      Starch + Salivary Amylase -> Maltose\n\n(b) Oesophagus (Food Pipe):\n    - No digestion takes place. Food (bolus) is propelled smoothly downwards by rhythmic, coordinated contractions and relaxations of gut muscular walls called Peristalsis.\n\n(c) Stomach:\n    - Gastric glands in the stomach wall secrete gastric juice containing:\n      1. Hydrochloric Acid (HCl): Creates acidic medium (pH 1.5-2.0), activates pepsinogen into pepsin, kills bacteria.\n      2. Pepsin: Breaks down proteins into soluble peptones and proteoses.\n      3. Mucus: Protects stomach lining from corrosive HCl.\n\n(d) Role of Liver and Pancreas:\n    - Liver secretes Bile Juice: Bile salts emulsify large fat globules into microscopic droplets, and create an alkaline medium (pH ~7.8).\n    - Pancreas secretes Pancreatic Juice containing:\n      1. Pancreatic Amylase: Digests remaining starch into maltose.\n      2. Trypsin: Cleaves peptones into peptides.\n      3. Pancreatic Lipase: Hydrolyses emulsified fats into fatty acids and glycerol.\n\n(e) Terminal Digestion & Absorption (Small Intestine):\n    - Intestinal glands secrete Succus Entericus, containing enzymes that completely convert:\n      Carbohydrates -> Glucose; Proteins -> Amino acids; Fats -> Fatty acids + Glycerol.\n    - Millions of microscopic finger-like projections called Villi lining the ileum increase internal surface area. Villi are richly supplied with blood capillaries (absorb glucose and amino acids) and central lymphatic vessels called lacteals (absorb digested fats).",
    explanation: "Master digestive cascade covering all 4 glandular secretions and nutrient transformations.",
    formula: "Starch -> Maltose -> Glucose; Protein -> Peptone -> Amino Acids; Fat -> Emulsified Fat -> Fatty Acids + Glycerol",
    examinerNote: "1 mark each for parts (a), (b), (c), (d), and (e). Mentioning villi and lacteals earns full credit.",
    source: "CBSE Board 2024 / NCERT Section 5.2.3"
  },
  {
    id: "sci_c5_q23",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 5,
    type: "LA",
    question: "(a) Trace the complete pathway of blood flow through the human heart with the help of a schematic flow chart.\n(b) What prevents the backflow of blood inside the heart during ventricular contraction?\n(c) What is blood pressure? Name the medical instrument used to measure blood pressure and give normal human systolic and diastolic pressure values.\n(d) What is lymph (tissue fluid)? How does it differ from blood plasma and what are its two main functions?",
    answer: "(a) Pathway of Blood Flow through Human Heart:\n    1. Deoxygenated blood from body tissues -> Superior & Inferior Vena Cava -> Right Atrium.\n    2. Right Atrium contracts -> passes blood through Tricuspid Valve -> Right Ventricle.\n    3. Right Ventricle contracts -> pumps blood through Pulmonary Artery -> Lungs (oxygenated).\n    4. Oxygenated blood from lungs -> Pulmonary Veins -> Left Atrium.\n    5. Left Atrium contracts -> passes blood through Bicuspid/Mitral Valve -> Left Ventricle.\n    6. Left Ventricle contracts -> pumps oxygenated blood under high pressure through Aorta -> Body Tissues.\n\n(b) Prevention of Backflow: Atrioventricular valves (Tricuspid and Bicuspid/Mitral valves) and Semilunar valves (Aortic and Pulmonary valves) ensure that blood flows strictly unidirectionally, closing tightly during contraction to prevent regurgitation.\n\n(c) Blood Pressure:\n    - Blood pressure is the force that circulating blood exerts against the wall of a blood vessel.\n    - Measured using an instrument called a Sphygmomanometer.\n    - Normal systolic pressure (during ventricular contraction): ~120 mm Hg.\n    - Normal diastolic pressure (during ventricular relaxation): ~80 mm Hg.\n\n(d) Lymph (Tissue Fluid):\n    - Fluid that leaks out through capillary pores into intercellular spaces of tissues.\n    - Difference: Contains much less protein than blood plasma and completely lacks RBCs (pale yellow fluid).\n    - Functions: 1. Carries absorbed and digested fats from small intestine via lacteals; 2. Drains excess intercellular fluid back into the blood circulatory system and contains lymphocytes that fight infection.",
    explanation: "Complete cardiovascular integration: double circulation, valve mechanics, pressure hemodynamics, and lymphatic physiology.",
    formula: "Normal BP: 120/80 mm Hg; Systolic = 120, Diastolic = 80",
    examinerNote: "Award 1.5 marks for flow path; 1 mark for valves; 1.5 marks for blood pressure; 1 mark for lymph.",
    source: "CBSE Board 2024 / NCERT Section 5.4.1"
  },
  {
    id: "sci_c5_q24",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 5,
    type: "LA",
    question: "(a) Draw a neat diagrammatic description of a nephron and label:\n  (i) Glomerulus, (ii) Bowman's capsule, (iii) Renal tubule, (iv) Collecting duct.\n(b) Explain why the volume of initial filtrate produced in kidneys is 180 L per day, but the volume of urine excreted is only 1 to 2 L per day.\n(c) What is hemodialysis (artificial kidney)? How does hemodialysis differ from the natural functioning of healthy human kidneys?",
    answer: "(a) Structural Description of Nephron:\n  (i) Glomerulus: A tuft of high-pressure capillaries branching from afferent renal arteriole, enclosed inside Bowman's capsule.\n  (ii) Bowman's capsule: A cup-shaped double-walled epithelial sac that receives the initial filtrate.\n  (iii) Renal tubule: Long coiled tubular structure (PCT, Loop of Henle, DCT) lined with microvilli for extensive reabsorption.\n  (iv) Collecting duct: Terminal straight tube collecting concentrated urine from multiple nephrons, leading into the ureter.\n\n(b) Difference between Filtrate Volume (180 L) and Urine (1-2 L):\n  Healthy human kidneys filter approximately 180 litres of initial filtrate every day through glomeruli. However, nearly 99% of this filtrate is selectively reabsorbed as it travels through the renal tubules. Water, all glucose, amino acids, and essential salts are reabsorbed back into peritubular capillaries, leaving only 1 to 2 litres of concentrated metabolic waste (urine) to be excreted daily.\n\n(c) Hemodialysis (Artificial Kidney):\n  - A medical procedure used for patients experiencing severe renal failure to remove toxic nitrogenous wastes (urea) from blood.\n  - Patient's blood is passed through cellophane dialysing tubes with semi-permeable membranes suspended in a dialysing fluid that has the same osmotic pressure as blood plasma, but lacks nitrogenous waste. Urea diffuses across into the dialysing fluid by simple diffusion.\n  - Key Difference from Natural Kidney: Hemodialysis involves NO selective reabsorption! In healthy kidneys, selective reabsorption actively reclaims nutrients and water; in hemodialysis, only waste diffusion occurs.",
    explanation: "Hemodialysis saves lives by clearing urea without restoring endocrine or reabsorptive functions.",
    formula: "Filtrate (180 L) - 99% Reabsorption = Excreted Urine (1.5 L)",
    examinerNote: "Award 1.5 marks for nephron parts; 1.5 marks for 180 L vs 1.5 L reabsorption; 2 marks for hemodialysis mechanism and contrast.",
    source: "CBSE Board 2024 / NCERT Section 5.5.1"
  },

  // =========================================================================
  // 4-MARK CASE-BASED / COMPETENCY QUESTIONS
  // =========================================================================
  {
    id: "sci_c5_q25",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 4,
    type: "Case Study",
    question: "Read the experimental passage and answer the questions that follow:\n\nIn an activity to test whether chlorophyll is essential for photosynthesis, a potted plant with variegated leaves (such as money plant or croton) was kept in a completely dark room for three days so that all starch in its leaves was completely consumed. The plant was then placed in bright sunlight for six hours. A variegated leaf was plucked, and its green and non-green patches were traced accurately onto a sheet of paper. The leaf was first immersed in boiling water for a few minutes, then transferred into a beaker containing ethanol, which was heated in a water bath until the leaf was completely decolourised. The pale white leaf was washed with warm water and dipped into a dilute iodine solution for two minutes.\n\n(a) Why was the leaf boiled in ethanol in a water bath rather than over an open flame? [1M]\n(b) What was the observation when iodine solution was poured onto the leaf? Correlate this with the traced green and white patches. [2M]\n(c) What scientific conclusion is established by this experiment? [1M]",
    answer: "(a) Boiling in ethanol dissolves and extracts the green pigment chlorophyll, decolourising the leaf into a pale white color so that subsequent color changes with iodine can be seen clearly. Ethanol is heated in a water bath because ethanol is highly volatile and flammable; direct heating over a naked flame would cause it to catch fire.\n(b) Observation:\n    - Only the patches of the leaf that were originally green turned blue-black upon adding iodine solution, confirming the presence of starch.\n    - The originally white / pale yellow non-green patches did not turn blue-black and remained brown/colourless, indicating the absence of starch.\n(c) Scientific Conclusion: Chlorophyll is strictly essential for photosynthesis; starch synthesis occurs exclusively in green chloroplast-containing regions where light is captured.",
    explanation: "NCERT Activity 5.1. Iodine reacts with starch to produce a characteristic deep blue-black complex.",
    formula: "Starch + Iodine -> Blue-Black Complex (Present only in green chlorophyll zones)",
    examinerNote: "1 mark for ethanol flammability; 2 marks for patch correlation; 1 mark for conclusion.",
    source: "NCERT Activity 5.1 / CBSE 2024"
  },
  {
    id: "sci_c5_q26",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 4,
    type: "Case Study",
    question: "Read the case text regarding human gas exchange and answer the following questions:\n\nIn humans, the respiratory system is adapted to maximize the efficiency of oxygen uptake and carbon dioxide release. The trachea branches into bronchi, which repeatedly subdivide into microscopic bronchioles, terminating in millions of balloon-like structures called alveoli. If all alveoli from both human lungs were spread out flat, their combined surface area would cover approximately 80 square meters — roughly the size of a tennis court! The alveolar walls are lined with a dense network of blood capillaries separated from air by an ultra-thin barrier just one cell thick. Blood arriving at alveoli contains red blood cells filled with hemoglobin, a specialized respiratory pigment.\n\n(a) What are the structural adaptations of alveoli that make them ideal for rapid gaseous exchange? [1.5M]\n(b) Why is diffusion alone insufficient to deliver oxygen to all body cells in large multicellular animals like humans? [1.5M]\n(c) Why is carbon monoxide (CO) gas extremely hazardous to human respiration? [1M]",
    answer: "(a) Alveolar Adaptations:\n    1. Enormous Surface Area: Combined area of ~80 m2 provides vast interface for gas exchange.\n    2. Ultra-Thin Walls: Alveolar epithelium and capillary endothelium are each only one cell thick, minimising diffusion distance.\n    3. Rich Capillary Vascularisation: Surrounded by an extensive network of blood capillaries, maintaining steep partial pressure gradients for continuous O2 and CO2 diffusion.\n\n(b) Multicellular Scale Limitations: In large animals, body size is vast and diffusion distance between skin/lungs and internal tissues is immense. Calculations show that if oxygen were to move by simple diffusion alone, it would take estimated 3 years for an oxygen molecule to travel from lungs to the human toes! Therefore, respiratory pigments (hemoglobin in RBCs) and a high-pressure pumping heart are indispensable for rapid systemic oxygen delivery.\n\n(c) Carbon Monoxide Hazard: Hemoglobin has an affinity for carbon monoxide that is over 200 times higher than its affinity for oxygen. Inhaled CO binds irreversibly with hemoglobin to form carboxyhemoglobin, preventing hemoglobin from binding oxygen and causing cellular asphyxiation and death.",
    explanation: "Alveolar histology and hemoglobin biochemistry maximize oxygenation in warm-blooded organisms.",
    formula: "Alveoli Surface Area ~80 m2; Hemoglobin-CO affinity ~200x greater than Hemoglobin-O2",
    examinerNote: "1.5 marks for alveolar adaptations; 1.5 marks for diffusion calculation/limits; 1 mark for CO affinity.",
    source: "CBSE Competency-Based Sample Paper 2025"
  },
  {
    id: "sci_c5_q27",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "Dental caries (tooth decay) is characterized by the gradual softening of enamel and dentine. It begins when:\n(a) Saliva becomes excessively alkaline\n(b) Bacterial plaque ferments sugary food particles producing acids that demineralise enamel\n(c) Salivary amylase hydrolyses tooth proteins into amino acids\n(d) Calcium carbonate crystals dissolve in neutral water",
    options: [
      "Saliva becomes excessively alkaline",
      "Bacterial plaque ferments sugary food particles producing acids that demineralise enamel",
      "Salivary amylase hydrolyses tooth proteins into amino acids",
      "Calcium carbonate crystals dissolve in neutral water"
    ],
    correctOption: 1,
    answer: "(b) Bacterial plaque ferments sugary food particles producing acids that demineralise enamel.",
    explanation: "Oral bacteria act on dietary sugars to produce organic acids (mainly lactic acid). These acids demineralise the enamel and dentine. Plaque covers the teeth, preventing neutralizing saliva from reaching the tooth surface.",
    formula: "Dental Plaque + Sugar -> Acid -> Demineralisation of Enamel (pH < 5.5)",
    examinerNote: "NCERT Box item. Saliva cannot neutralize acid if dental plaque forms a physical barrier over teeth.",
    source: "NCERT Class 10 / CBSE Board 2023"
  },
  {
    id: "sci_c5_q28",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "Which of the following correctly accounts for the difference in the length of the small intestine between herbivores and carnivores?\n(a) Herbivores have a shorter small intestine because plant starch digests rapidly\n(b) Herbivores have a longer small intestine to allow complete digestion of cellulose by symbiotic bacteria\n(c) Carnivores have a longer small intestine because animal proteins require extended acid breakdown\n(d) Both herbivores and carnivores have identical small intestine lengths proportional to body weight",
    options: [
      "Herbivores have a shorter small intestine because plant starch digests rapidly",
      "Herbivores have a longer small intestine to allow complete digestion of cellulose by symbiotic bacteria",
      "Carnivores have a longer small intestine because animal proteins require extended acid breakdown",
      "Both herbivores and carnivores have identical small intestine lengths proportional to body weight"
    ],
    correctOption: 1,
    answer: "(b) Herbivores have a longer small intestine to allow complete digestion of cellulose by symbiotic bacteria.",
    explanation: "Cellulose is a complex, structural polysaccharide that takes a much longer time to break down. Hence, herbivores like cows have a significantly longer small intestine. Meat is easier to digest, so carnivores like tigers have a shorter intestine.",
    formula: "Length: Herbivore Small Intestine > Carnivore Small Intestine (Cellulose vs Meat)",
    examinerNote: "Very frequent 1M board question. Focus strictly on cellulose digestion efficiency.",
    source: "CBSE Board 2024"
  },
  {
    id: "sci_c5_q29",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 2,
    type: "VSA",
    question: "How do desert plants (xerophytes) perform photosynthesis despite keeping their stomata closed during the daytime to prevent excessive water loss?",
    answer: "Desert plants adopt CAM (Crassulacean Acid Metabolism) pathway:\n1. They open their stomata at night to absorb carbon dioxide (CO2) when ambient temperatures and transpiration rates are low.\n2. The absorbed CO2 is stored as an intermediate organic acid (malic acid).\n3. During the daytime, stomata remain tightly closed to prevent desiccation. The stored intermediate acid is broken down to release CO2 internally, which is then acted upon by solar radiant energy trapped by chlorophyll to synthesize glucose.",
    explanation: "Stomatal temporal decoupling ensures minimum transpirational water loss in arid environments.",
    formula: "Night: Uptake of CO2 -> Intermediate Organic Acid; Day: Solar Energy + Intermediate -> Glucose",
    examinerNote: "1 mark for night CO2 uptake & intermediate formation; 1 mark for daytime solar energy utilisation.",
    source: "NCERT Class 10 Section 5.2.1 / CBSE 2024"
  },
  {
    id: "sci_c5_q30",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 2,
    type: "VSA",
    question: "What is lymph (tissue fluid)? How does its composition differ from blood plasma, and what are its two primary physiological functions?",
    answer: "Lymph (Tissue Fluid):\n- Lymph is extracellular fluid that escapes through the endothelial pores of blood capillaries into intercellular tissue spaces.\n- Composition Difference: Lymph is similar to blood plasma, but it is colourless (contains no RBCs) and contains significantly less protein than plasma.\n\nPrimary Functions:\n1. Transport of Digested Fats: Carries digested and absorbed fats from the lacteals of intestinal villi into systemic circulation.\n2. Fluid Homeostasis: Drains excess interstitial fluid from extracellular tissue spaces back into venous blood, preventing oedema (tissue swelling).",
    explanation: "The lymphatic system acts as an auxiliary drainage and immune transport highway in vertebrates.",
    formula: "Lymph = Blood Plasma - (RBCs + High Mol. Wt. Proteins)",
    examinerNote: "0.5 mark for definition; 0.5 mark for composition; 1 mark for two functions (fat transport + fluid return).",
    source: "CBSE Board 2023"
  },
  {
    id: "sci_c5_q31",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 3,
    type: "SA",
    question: "(a) Define blood pressure and distinguish between systolic and diastolic blood pressure with standard normal resting values.\n(b) Name the instrument used to measure arterial blood pressure.\n(c) What is hypertension, and what dangerous clinical complication can arise if it remains uncontrolled?",
    answer: "(a) Blood Pressure: The force that blood exerts against the vessel wall of an artery as it flows through the circulatory system.\n    - Systolic Pressure: The maximum arterial pressure during ventricular contraction (ventricular systole). Normal value = 120 mm of Hg.\n    - Diastolic Pressure: The minimum arterial pressure during ventricular relaxation (ventricular diastole). Normal value = 80 mm of Hg.\n\n(b) Instrument: Sphygmomanometer.\n\n(c) Hypertension: Persistently high blood pressure (consistently above 140/90 mm Hg) caused by the constriction of arterioles.\n    Clinical Complication: Causes increased resistance to blood flow, which may lead to rupture of delicate arteries and fatal internal bleeding (such as cerebral haemorrhage or stroke).",
    explanation: "NCERT Section 5.3.2. Sphygmomanometer readings quantify ventricular hydrostatic pressure cycles.",
    formula: "Normal BP = 120/80 mm Hg (Systolic / Diastolic)",
    examinerNote: "1 mark for definitions and normal values (120/80); 1 mark for Sphygmomanometer; 1 mark for hypertension & complications.",
    source: "CBSE Class 10 Board 2024"
  },
  {
    id: "sci_c5_q32",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 3,
    type: "SA",
    question: "(a) Why do arteries possess thick, elastic walls while veins have thin walls and internal valves?\n(b) What would occur if heart valves (atrioventricular and semilunar valves) fail to function properly?",
    answer: "(a) Structural Adaptations of Arteries vs Veins:\n    - Arteries: Blood emerges directly from the ventricles under high, pulsating hydrostatic pressure. Therefore, arteries require thick, muscular, and elastic walls to withstand this high pressure without rupturing.\n    - Veins: Blood flowing through veins is under very low pressure after traversing capillary beds. Hence, thick walls are unnecessary. Instead, veins possess one-way internal pocket valves that prevent backflow of deoxygenated blood and ensure unidirectional flow back toward the heart against gravity.\n\n(b) Valve Malfunction:\n    If cardiac valves fail to close tightly, regurgitation (backflow) of blood will occur from ventricles back into atria during ventricular contraction, or from aorta/pulmonary trunk back into ventricles. This dramatically reduces cardiac output, causing oxygen deficiency in tissues and congestive heart failure.",
    explanation: "Hydrodynamic pressure differentials necessitate differential vascular elasticity and unidirectional valves.",
    formula: "Artery: High Pressure -> Thick Elastic Wall; Vein: Low Pressure -> Thin Wall + One-Way Valves",
    examinerNote: "2 marks for artery/vein wall and valve explanation; 1 mark for backflow consequence.",
    source: "CBSE Board 2023"
  },
  {
    id: "sci_c5_q33",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 3,
    type: "SA",
    question: "Tabulate three fundamental differences between Transpiration and Translocation in vascular plants across:\n(1) Conducting tissue involved\n(2) Mechanism / Energy requirement (ATP)\n(3) Direction of transport and substances transported.",
    answer: "| Feature | Transpiration | Translocation |\n| :--- | :--- | :--- |\n| 1. Conducting Tissue | Occurs through Xylem vessels and tracheids. | Occurs through Phloem sieve tubes with companion cells. |\n| 2. Energy Requirement | A passive physical process driven by evaporation pull and transpirational suction; does NOT utilize metabolic energy (ATP). | An active physiological process that requires cellular metabolic energy in the form of ATP. |\n| 3. Direction & Substances | Strictly unidirectional (upward from roots to leaves); transports water and dissolved inorganic mineral salts. | Bidirectional or multidirectional (from photosynthetic source to storage sink or growing buds); transports sucrose, amino acids, and plant hormones. |",
    explanation: "NCERT Section 5.4. Xylem uses physical cohesion-tension; phloem uses osmotic pressure driven by active loading.",
    formula: "Transpiration: Xylem, Passive (No ATP), Unidirectional; Translocation: Phloem, Active (ATP used), Bidirectional",
    examinerNote: "1 mark per row. Must mention ATP involvement in phloem and strictly unidirectional nature of xylem.",
    source: "CBSE Board 2024 / Exemplar"
  },
  {
    id: "sci_c5_q34",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 5,
    type: "LA",
    question: "(a) Compare Aerobic and Anaerobic Respiration in tabular form on: (i) Site of occurrence, (ii) Requirement of oxygen, (iii) End products, and (iv) Total ATP energy yield per glucose molecule. [2M]\n(b) Explain why sudden intense muscular activity (such as sprinting 100 meters) often results in painful muscle cramps. Why does a hot water bath or gentle massage provide rapid relief? [2M]\n(c) Why do warm-blooded homeothermic animals like birds and mammals require complete physical separation of oxygenated and deoxygenated blood in their hearts? [1M]",
    answer: "(a) Comparison of Aerobic and Anaerobic Respiration:\n| Parameter | Aerobic Respiration | Anaerobic Respiration (Yeast / Muscle) |\n| :--- | :--- | :--- |\n| Site of Occurrence | Cytoplasm (glycolysis) followed by Mitochondria (Krebs cycle). | Cytoplasm only. |\n| Oxygen Requirement | Requires molecular oxygen (O2). | Occurs in the complete absence or deficiency of O2. |\n| End Products | Carbon dioxide (CO2), Water (H2O), and high energy. | Yeast: Ethanol + CO2; Muscle: Lactic acid. |\n| ATP Yield | 36 to 38 ATP molecules per glucose molecule. | Only 2 ATP molecules per glucose molecule. |\n\n(b) Muscle Cramps Mechanism:\n    - During sudden vigorous exercise, skeletal muscle cells consume oxygen faster than the circulatory system can deliver it. Under this hypoxic stress, pyruvate is converted via anaerobic pathway into lactic acid (a 3-carbon compound).\n    - Accumulation of lactic acid in muscle tissue leads to acute fatigue and painful muscle cramps.\n    - Relief through Hot Bath / Massage: Improves blood circulation, increasing oxygen supply to fatigued muscle cells. This allows lactic acid to be transported to the liver and fully oxidised into CO2 and H2O.\n\n(c) Separation of Blood in Homeotherms:\n    Birds and mammals are endothermic animals that constantly expend large amounts of metabolic energy to maintain a constant internal body temperature regardless of environmental fluctuations. Complete separation of oxygenated and deoxygenated blood prevents mixing, ensuring maximal oxygen delivery to somatic tissues for high-rate aerobic respiration.",
    explanation: "Thermal homeostasis in homeotherms requires high cellular ATP production supported by a 4-chambered heart.",
    formula: "Glucose -> Pyruvate (Cytoplasm); Hypoxia: Pyruvate -> Lactic Acid + 2 ATP (Cramps)",
    examinerNote: "2 marks for table; 2 marks for cramp biochemistry and relief mechanism; 1 mark for homeothermy.",
    source: "CBSE Class 10 Board 2024"
  },
  {
    id: "sci_c5_q35",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 4,
    type: "Case Study",
    question: "Read the experimental passage below regarding NCERT Activity 5.2 and answer the questions:\n\nTwo healthy potted plants of equal size (designated Plant A and Plant B) were destarched by keeping them in a dark room for three days. Each plant was placed on a separate glass plate and covered with an airtight bell jar. Beside Plant A, a watch glass containing solid potassium hydroxide (KOH) pellets was placed, while Plant B had no chemical. Vaseline was smeared around the base of both bell jars on the glass plates to make the apparatus completely airtight. Both experimental setups were placed in bright sunlight for four hours. A leaf from each plant was plucked, decolourised in boiling ethanol, and tested for the presence of starch using dilute iodine solution.\n\n(a) What is the chemical function of potassium hydroxide (KOH) placed in bell jar A? [1M]\n(b) Describe the observation when iodine solution is poured on the leaf from Plant A and the leaf from Plant B. [2M]\n(c) What fundamental biological conclusion is demonstrated by this experimental activity? [1M]",
    answer: "(a) Function of KOH: Potassium hydroxide is a chemical absorbant that quantitatively absorbs and eliminates carbon dioxide (CO2) from the air sealed inside bell jar A:\n    2KOH + CO2 -> K2CO3 + H2O\n\n(b) Observations:\n    - Leaf from Plant A: Does NOT turn blue-black; it stains yellowish-brown with iodine, proving absence of starch.\n    - Leaf from Plant B: Turns deep blue-black with iodine, proving abundant presence of starch.\n\n(c) Conclusion: Carbon dioxide (CO2) is an indispensable raw material required for photosynthesis; in its absence, green plants cannot synthesize carbohydrates (starch) even when light, water, and chlorophyll are present.",
    explanation: "Activity 5.2 proves carbon dioxide is limiting and essential for photosynthetic carbon fixation.",
    formula: "2KOH + CO2 -> K2CO3 + H2O; Photosynthesis: 6CO2 + 6H2O -> C6H12O6 + 6O2",
    examinerNote: "1 mark for KOH absorbing CO2; 2 marks for color changes in both leaves; 1 mark for conclusion.",
    source: "NCERT Activity 5.2 / CBSE Board 2023"
  },
  {
    id: "sci_c5_q36",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 5,
    type: "LA",
    question: "(a) Explain how the internal surface area of the human small intestine is maximized for efficient absorption of digested food. [2M]\n(b) Describe the pathway of digested fats into the lymphatic system and name the specialized lymphatic capillaries involved. [1.5M]\n(c) What physiological consequences would occur if the common bile duct or pancreatic duct becomes completely obstructed by a gallstone? [1.5M]",
    answer: "(a) Surface Area Maximization in Small Intestine:\n    1. Extensive Length: The small intestine is the longest organ of the alimentary canal (~6 metres), providing extended transit time.\n    2. Villi: The inner mucosal lining possesses millions of microscopic, finger-like projections called villi, which increase the absorptive surface area manifold.\n    3. Microvilli: The epithelial cells lining each villus bear dense sub-microscopic brush-border microvilli, expanding the effective surface area to over 30 m2.\n    4. High Vascularity: Each villus is supplied with a rich network of blood capillaries and a central lymphatic lacteal, maintaining rapid clearance of absorbed nutrients.\n\n(b) Pathway of Digested Fats:\n    - Fatty acids and glycerol cannot enter directly into blood capillaries due to their insoluble hydrophobic nature.\n    - Instead, they are absorbed by intestinal epithelial cells, reassembled into soluble lipoprotein droplets (chylomicrons), and absorbed into central lymphatic capillaries called lacteals within each villus.\n    - Lymph drains through lymphatic vessels and empties fat into large thoracic veins, introducing it into blood circulation.\n\n(c) Obstruction by Gallstone:\n    - If the common bile duct is blocked, bile cannot enter the duodenum. Unemulsified fats remain as large globules, drastically impairing pancreatic lipase efficiency. Lipids cannot be digested, resulting in steatorrhoea (fatty stools) and severe deficiency of fat-soluble vitamins (A, D, E, K).\n    - If the pancreatic duct is blocked, pancreatic enzymes (trypsin, amylase, lipase) cannot reach the duodenum, causing severe protein, carbohydrate, and fat malabsorption and dangerous pancreatic autodigestion (acute pancreatitis).",
    explanation: "Small intestine histology and hepatopancreatic secretions represent the physiological apex of human digestion.",
    formula: "Villi + Microvilli -> >30 m2 Absorptive Area; Lacteals absorb fat chylomicrons",
    examinerNote: "2 marks for structural surface area factors; 1.5 marks for lacteal fat absorption; 1.5 marks for duct blockage consequences.",
    source: "CBSE Board 2024 / Exemplar HOTS"
  }
];

