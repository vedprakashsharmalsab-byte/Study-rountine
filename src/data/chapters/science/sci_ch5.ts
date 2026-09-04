import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH5_QUESTIONS: VaultQuestion[] = [
  // 1-MARK MCQs & ASSERTION-REASON
  {
    id: "sci_c5_q1",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "Which of the following events does NOT occur during the light-dependent stage of photosynthesis in green plants?\n(a) Absorption of light energy by chlorophyll\n(b) Photolysis of water into hydrogen and oxygen\n(c) Reduction of carbon dioxide into carbohydrates\n(d) Conversion of light energy into chemical energy",
    options: [
      "Absorption of light energy by chlorophyll",
      "Photolysis of water into hydrogen and oxygen",
      "Reduction of carbon dioxide into carbohydrates",
      "Conversion of light energy into chemical energy"
    ],
    correctOption: 2,
    answer: "Option (c) is correct: Reduction of carbon dioxide into carbohydrates.",
    explanation: "Reduction of CO₂ to carbohydrates is a dark (light-independent / Calvin cycle) reaction that does not require direct light. The light-dependent reactions comprise chlorophyll absorption, energy transduction to ATP/NADPH, and photolytic splitting of water.",
    formula: "6CO₂ + 12H₂O ⟶ C₆H₁₂O₆ + 6O₂ + 6H₂O",
    examinerNote: "NCERT textbook explicitly separates the 3 steps of photosynthesis. Reduction of CO₂ does not require direct photon absorption.",
    source: "NCERT Class 10 Page 82"
  },
  {
    id: "sci_c5_q2",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "The correct sequence of anaerobic breakdown of glucose in human muscle tissue during strenuous exercise is:\n(a) Glucose —[Cytoplasm]⟶ Pyruvate —[Mitochondria]⟶ Lactic acid + Energy\n(b) Glucose —[Cytoplasm]⟶ Pyruvate —[Cytoplasm]⟶ Lactic acid + Energy\n(c) Glucose —[Cytoplasm]⟶ Pyruvate —[Mitochondria]⟶ Ethanol + CO₂ + Energy\n(d) Glucose —[Cytoplasm]⟶ Pyruvate —[Cytoplasm]⟶ Ethanol + CO₂ + Energy",
    options: [
      "Glucose —[Cytoplasm]⟶ Pyruvate —[Mitochondria]⟶ Lactic acid + Energy",
      "Glucose —[Cytoplasm]⟶ Pyruvate —[Cytoplasm]⟶ Lactic acid + Energy",
      "Glucose —[Cytoplasm]⟶ Pyruvate —[Mitochondria]⟶ Ethanol + CO₂ + Energy",
      "Glucose —[Cytoplasm]⟶ Pyruvate —[Cytoplasm]⟶ Ethanol + CO₂ + Energy"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: Glucose —[Cytoplasm]⟶ Pyruvate —[Cytoplasm]⟶ Lactic acid + Energy.",
    explanation: "Both glycolysis (glucose to pyruvate) and the subsequent anaerobic conversion of pyruvate into 3-carbon Lactic Acid take place entirely in the cytoplasm of muscle cells without involving mitochondria.",
    formula: "C₆H₁₂O₆ ⟶ 2 Pyruvate ⟶ 2 Lactic Acid + 2 ATP",
    examinerNote: "Mitochondria are strictly reserved for aerobic respiration. Anaerobic fermentation occurs entirely in the cytoplasm.",
    source: "CBSE 2024 Board Question"
  },
  {
    id: "sci_c5_q3",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "Which of the following components of blood is responsible for clotting of blood at the site of an injury?\n(a) Red Blood Corpuscles (RBCs)\n(b) White Blood Corpuscles (WBCs)\n(c) Blood Platelets\n(d) Blood Plasma",
    options: [
      "Red Blood Corpuscles (RBCs)",
      "White Blood Corpuscles (WBCs)",
      "Blood Platelets",
      "Blood Plasma"
    ],
    correctOption: 2,
    answer: "Option (c) is correct: Blood Platelets.",
    explanation: "Platelets (thrombocytes) circulate in the blood and release thromboplastin at injury sites to form a fibrin mesh plug, preventing hemorrhage and excessive blood loss.",
    examinerNote: "RBCs carry oxygen via hemoglobin; WBCs provide immune defence; Platelets clot blood.",
    source: "NCERT Class 10 Page 97"
  },
  {
    id: "sci_c5_q4",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): The inner lining of the small intestine possesses millions of finger-like projections called villi.\nReason (R): Villi dramatically increase the surface area for the rapid absorption of digested food.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is NOT the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct.",
    explanation: "The functional evolutionary purpose of villi is to maximize the absorptive surface area, and they are richly supplied with blood capillaries and lacteals to facilitate rapid nutrient diffusion into the bloodstream.",
    examinerNote: "Both statements are true and Reason provides the exact physiological purpose of the assertion.",
    source: "KVS Support Material 2025-26"
  },

  // 2-MARK SHORT ANSWER QUESTIONS
  {
    id: "sci_c5_q5",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 2,
    type: "SA",
    question: "Why do aquatic organisms exhibit a much faster rate of breathing than terrestrial organisms?",
    answer: "Aquatic organisms (like fishes) absorb oxygen dissolved in water, whereas terrestrial organisms inhale oxygen from the atmospheric air. The concentration of dissolved oxygen in water is fairly low compared to the high concentration of oxygen in atmospheric air (~21%). Consequently, aquatic organisms must pump water across their gills much more rapidly to procure sufficient oxygen for cellular respiration.",
    steps: [
      "Step 1: Compare oxygen concentration: Dissolved O₂ in water is very low; Atmospheric O₂ in air is high (~21%).",
      "Step 2: Conclude: Fish breathe much faster to extract adequate oxygen per unit time."
    ],
    explanation: "1 liter of air contains ~210 mL of oxygen, whereas 1 liter of freshwater contains only ~5–8 mL of dissolved oxygen.",
    examinerNote: "Must contrast 'low concentration of dissolved oxygen in water' with 'high concentration in air'.",
    source: "NCERT Class 10 Page 93"
  },
  {
    id: "sci_c5_q6",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 2,
    type: "SA",
    question: "What is the function of valves in the human heart? What would happen if valves were absent in veins?",
    answer: "Functions:\n(1) Heart Valves (tricuspid, bicuspid/mitral, semilunar) ensure that blood flows in only ONE direction (from atria to ventricles, and from ventricles into pulmonary artery/aorta) and prevent backflow during ventricular contraction (systole).\n(2) If veins lacked valves, blood under low pressure returning from the lower limbs would backflow and pool in the legs due to gravity, leading to circulatory failure and severe edema.",
    steps: [
      "Part 1: State function of heart valves: prevents backflow of blood.",
      "Part 2: Explain consequence in veins: backflow of low-pressure blood due to gravity."
    ],
    explanation: "Arteries do not require valves because blood flows under high pumping pressure from the ventricles.",
    examinerNote: "1 mark for heart valve function; 1 mark for consequence in veins.",
    source: "CBSE 2023 Board Paper"
  },
  {
    id: "sci_c5_q7",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 2,
    type: "SA",
    question: "Differentiate between Xylem and Phloem transport in plants based on the materials transported and the energy mechanism involved.",
    answer: "1. Material Transported:\n- Xylem transports water and dissolved mineral salts unidirectionally upwards from roots to leaves.\n- Phloem translocates soluble organic products of photosynthesis (sucrose, amino acids) bidirectionally from leaves (source) to storage and growing tissues (sink).\n\n2. Energy Mechanism:\n- Xylem transport relies on passive physical forces: Transpiration pull and root pressure, requiring zero metabolic energy (no ATP).\n- Phloem translocation is an active physiological process requiring metabolic energy in the form of ATP to create osmotic pressure.",
    steps: [
      "Step 1: Contrast substances transported (water/minerals vs sucrose/amino acids).",
      "Step 2: Contrast direction (unidirectional upward vs bidirectional).",
      "Step 3: Contrast energy involvement (passive physical suction vs active ATP expenditure)."
    ],
    explanation: "Phloem utilizes ATP to load sucrose into sieve tubes, drawing water by osmosis to build high hydrostatic pressure.",
    examinerNote: "Must highlight that phloem translocation utilizes ATP, whereas xylem does not consume ATP.",
    source: "Educart Science Class 10"
  },

  // 3-MARK SHORT ANSWER QUESTIONS
  {
    id: "sci_c5_q8",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 3,
    type: "SA",
    question: "Explain the three different pathways of breakdown of glucose in living organisms with the help of a schematic flowchart.",
    answer: "All three pathways share a common initial step: In the cell cytoplasm, 1 molecule of 6-carbon Glucose is broken down into 2 molecules of 3-carbon Pyruvate, releasing 2 ATP (Glycolysis).\n\n1. Pathway 1 (Absence of Oxygen / Anaerobic in Yeast Fermentation):\nPyruvate —[In Yeast]⟶ Ethanol (2-Carbon) + Carbon Dioxide (CO₂) + 2 ATP.\n\n2. Pathway 2 (Lack of Oxygen / Anaerobic in Human Muscle Cells):\nPyruvate —[Muscle Tissue]⟶ Lactic Acid (3-Carbon) + 2 ATP. (Causes muscle fatigue and cramps).\n\n3. Pathway 3 (Presence of Oxygen / Aerobic in Mitochondria):\nPyruvate + O₂ —[Mitochondria]⟶ 6CO₂ + 6H₂O + 38 ATP. (High energy yield for active metabolism).",
    steps: [
      "Step 1: State common cytoplasmic glycolysis (Glucose ⟶ Pyruvate).",
      "Step 2: Detail yeast fermentation pathway (Ethanol + CO₂ + 2 ATP).",
      "Step 3: Detail muscle anaerobic pathway (Lactic Acid + 2 ATP).",
      "Step 4: Detail aerobic mitochondrial pathway (CO₂ + H₂O + 38 ATP)."
    ],
    explanation: "Aerobic respiration generates 19 times more ATP per glucose molecule than anaerobic pathways.",
    examinerNote: "Full 3 marks require specifying: (1) cellular location, (2) end products, (3) relative ATP energy yield.",
    source: "NCERT Class 10 Page 91 / CBSE Benchmark Question"
  },
  {
    id: "sci_c5_q9",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 3,
    type: "SA",
    question: "What is bile juice? Where is it produced and stored? Explain two important functions of bile in the human digestive system.",
    answer: "(a) Source and Storage: Bile is a yellowish-green alkaline fluid produced continuously by the Liver and stored in a concentrated form inside the Gall bladder.\n\n(b) Functions of Bile:\n(1) Neutralization and Alkalinization: The food entering the small intestine from the stomach is highly acidic due to HCl. Bile contains sodium bicarbonate and bile salts that neutralize gastric acid, establishing an alkaline medium (pH ~8) essential for pancreatic and intestinal enzymes (trypsin, lipase) to function.\n(2) Emulsification of Fats: Fats are present in food as large, insoluble globules that offer minimal surface area for enzyme action. Bile salts break down large fat globules into microscopic droplets (micelles), dramatically increasing surface area so that pancreatic lipase can rapidly digest them into fatty acids and glycerol.",
    steps: [
      "Part 1: Liver produces bile; Gall bladder stores and concentrates it.",
      "Part 2: Function 1: Neutralizes acidic chyme to provide alkaline pH for pancreatic enzymes.",
      "Part 3: Function 2: Emulsifies large fat globules into tiny micelles for lipase action."
    ],
    explanation: "Bile contains NO digestive enzymes; its action is purely physicochemical and mechanical.",
    examinerNote: "1 mark for source/storage; 1 mark for alkaline medium; 1 mark for fat emulsification.",
    source: "Arihant All-In-One Chapter 5"
  },

  // 5-MARK LONG ANSWER & CASE STUDIES
  {
    id: "sci_c5_q10",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 5,
    type: "LA",
    question: "Explain the structure of the human heart and the flow of blood through its chambers. Why is the human circulatory system called 'Double Circulation'? What is its biological advantage?",
    answer: "1. Structure of Heart:\nThe human heart is a muscular organ divided into 4 chambers:\n- Upper receiving chambers: Right Atrium and Left Atrium.\n- Lower pumping chambers: Right Ventricle and Left Ventricle.\n- A thick muscular wall called the Septum separates the right side from the left side, completely preventing mixing of oxygenated and deoxygenated blood.\n\n2. Blood Flow Cycle:\n(a) Pulmonary Circulation: Deoxygenated blood from body tissues enters Right Atrium via Vena Cava ⟶ Right Ventricle ⟶ pumped via Pulmonary Artery to Lungs for oxygenation ⟶ returns as oxygenated blood via Pulmonary Veins into Left Atrium.\n(b) Systemic Circulation: Oxygenated blood enters Left Atrium ⟶ passes to Left Ventricle ⟶ pumped under high pressure via Aorta to all organs and body tissues.\n\n3. Why 'Double Circulation'?\nBecause blood passes through the heart TWICE during each complete circuit of the body: once through the pulmonary circuit (to lungs) and once through the systemic circuit (to body organs).\n\n4. Biological Advantage:\nDouble circulation maintains complete physical separation of oxygen-rich blood from carbon-dioxide-rich blood. This ensures maximum efficiency in oxygen delivery to tissues, which is essential for homeothermic (warm-blooded) birds and mammals that require large amounts of energy to maintain a constant internal body temperature.",
    steps: [
      "Step 1: Describe 4 chambers and the septum.",
      "Step 2: Trace pulmonary circuit (Right side ⟶ Lungs ⟶ Left side).",
      "Step 3: Trace systemic circuit (Left side ⟶ Body ⟶ Right side).",
      "Step 4: Define double circulation.",
      "Step 5: Explain physiological advantage (high oxygen delivery for constant body temperature)."
    ],
    explanation: "Ventricles have thicker muscular walls than atria because they have to pump blood across long distances against gravity.",
    examinerNote: "Ensure pulmonary artery (carries deoxygenated blood) and pulmonary veins (carry oxygenated blood) are correctly described.",
    source: "CBSE 2024 Board 5-Mark Question"
  },
  {
    id: "sci_c5_q11",
    chapter: 5,
    chapterName: "Life Processes",
    marks: 4,
    type: "Case Study",
    question: "Case Study: In an intensive care unit, a patient suffering from total renal failure was placed on an artificial kidney (Hemodialysis) machine. The machine consists of a tank filled with dialyzing fluid and coiled semi-permeable cellophane tubes.\n\n(a) Name the nitrogenous waste product removed from blood by the dialyzer.\n(b) What is the fundamental difference between the dialyzing fluid and normal blood plasma?\n(c) How does artificial hemodialysis differ from natural filtration in healthy kidneys regarding reabsorption?\n(d) Why is heparin added to blood before passing it through the dialysis machine?",
    answer: "(a) Urea (and uric acid / creatinine).\n\n(b) The dialyzing fluid has the exact same osmotic pressure and concentration of glucose, amino acids, and vital electrolytes as normal blood plasma, EXCEPT that it contains ZERO nitrogenous waste (no urea). This allows urea to passively diffuse out of blood across the cellophane membrane down its concentration gradient.\n\n(c) In a healthy kidney, the initial glomerular filtrate is approx. 180 liters per day, out of which 99% of water and all useful nutrients are selectively reabsorbed by renal tubules, leaving only 1.5–2 liters of urine. In an artificial dialysis machine, there is NO tubular selective reabsorption; waste is eliminated directly without reabsorption.\n\n(d) Heparin is an anticoagulant added to prevent blood from clotting as it flows through the synthetic foreign plastic tubes outside the patient's body.",
    steps: [
      "Part (a): Identify urea as the primary nitrogenous excretory product.",
      "Part (b): Note identical composition to plasma except absence of urea.",
      "Part (c): Contrast: Natural kidneys reabsorb 99% of filtrate; dialysis has no tubular reabsorption.",
      "Part (d): Heparin acts as an anticoagulant preventing thrombosis in tubing."
    ],
    explanation: "Hemodialysis operates strictly by passive concentration gradient diffusion across semi-permeable membranes.",
    examinerNote: "1 mark per sub-part. Part (c) tests deeper understanding of kidney vs dialysis physiology.",
    source: "PW Sample Paper 2026 / CBSE Case Study"
  }
];
