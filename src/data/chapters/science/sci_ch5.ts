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
  },
  {"id": "sci_c5_q12",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 1,
    "type": "MCQ",
    "question": "During cellular respiration in yeast under anaerobic conditions, pyruvate is converted into:\n(a) Lactic acid + Energy\n(b) Ethanol + Carbon dioxide + Energy\n(c) Carbon dioxide + Water + Energy\n(d) Pyruvic acid + Energy",
    "options": [
      "Lactic acid + Energy",
      "Ethanol + Carbon dioxide + Energy",
      "Carbon dioxide + Water + Energy",
      "Pyruvic acid + Energy"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Ethanol + Carbon dioxide + Energy.",
    "explanation": "In yeast during fermentation (anaerobic respiration), 3-carbon pyruvate is decarboxylated into 2-carbon ethanol (C₂H₅OH) and carbon dioxide, releasing 2 ATP molecules.",
    "formula": "\\text{Pyruvate} ⟶ \\text{Ethanol} + \\text{CO}_2 + 2\\text{ATP}",
    "source": "NCERT Class 10 Page 102"
  },
  {
    "id": "sci_c5_q13",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 1,
    "type": "MCQ",
    "question": "Which of the following events does not occur in rough endoplasmic reticulum or during light reactions of photosynthesis?\n(a) Absorption of light energy by chlorophyll\n(b) Splitting of water molecules into hydrogen and oxygen\n(c) Conversion of light energy to chemical energy\n(d) Reduction of carbon dioxide directly in thylakoid lumen",
    "options": [
      "Absorption of light energy by chlorophyll",
      "Splitting of water molecules into hydrogen and oxygen",
      "Conversion of light energy to chemical energy",
      "Reduction of carbon dioxide directly in thylakoid lumen"
    ],
    "correctOption": 3,
    "answer": "Option (d) is correct: Reduction of carbon dioxide directly in thylakoid lumen.",
    "explanation": "Reduction of carbon dioxide to carbohydrates occurs during dark reactions (Calvin cycle) in the stroma of chloroplasts, not in the thylakoid lumen.",
    "source": "NCERT Class 10 Page 96"
  },
  {
    "id": "sci_c5_q14",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 1,
    "type": "MCQ",
    "question": "Bile juice contains no digestive enzymes, yet it is essential for digestion because:\n(a) It activates pepsin in the stomach\n(b) It emulsifies large fat globules into tiny droplets and provides an alkaline medium for pancreatic enzymes\n(c) It hydrolyzes proteins into peptones\n(d) It breaks down starch into maltose",
    "options": [
      "It activates pepsin in the stomach",
      "It emulsifies large fat globules into tiny droplets and provides an alkaline medium for pancreatic enzymes",
      "It hydrolyzes proteins into peptones",
      "It breaks down starch into maltose"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: It emulsifies large fat globules into tiny droplets and provides an alkaline medium for pancreatic enzymes.",
    "explanation": "Bile salts lower the surface tension of fats, emulsifying them to increase surface area for pancreatic lipase. Bile also neutralizes acidic chyme from the stomach, creating optimal alkaline pH (~8) for pancreatic enzymes.",
    "source": "NCERT Class 10 Page 99"
  },
  {
    "id": "sci_c5_q15",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 1,
    "type": "MCQ",
    "question": "The inner lining of the small intestine possesses millions of finger-like projections called villi. Their primary function is to:\n(a) Secrete hydrochloric acid\n(b) Increase the surface area for rapid absorption of digested food\n(c) Store bile pigments\n(d) Prevent reverse peristalsis",
    "options": [
      "Secrete hydrochloric acid",
      "Increase the surface area for rapid absorption of digested food",
      "Store bile pigments",
      "Prevent reverse peristalsis"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Increase the surface area for rapid absorption of digested food.",
    "explanation": "Villi vastly expand the luminal surface area and are richly supplied with blood capillaries and lacteals to absorb amino acids, glucose, and fatty acids.",
    "source": "NCERT Class 10 Page 100"
  },
  {
    "id": "sci_c5_q16",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 1,
    "type": "MCQ",
    "question": "Assertion (A): The walls of ventricles are substantially thicker than the walls of atria in the human heart.\nReason (R): Ventricles have to pump blood into various distant organs with high pressure.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is NOT the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    "options": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct.",
    "explanation": "Atria only pump blood down into adjacent ventricles, whereas ventricles (especially the thick left ventricle) pump oxygenated blood throughout the systemic circulation under high systolic pressure.",
    "source": "CBSE 2024 Board Question"
  },
  {
    "id": "sci_c5_q17",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 1,
    "type": "MCQ",
    "question": "In the human excretory system, the basic structural and functional filtration unit of the kidney is the:\n(a) Neuron\n(b) Nephron\n(c) Ureter\n(d) Glomerulus alone",
    "options": [
      "Neuron",
      "Nephron",
      "Ureter",
      "Glomerulus alone"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Nephron.",
    "explanation": "Each kidney contains approximately 1 to 1.2 million microscopic filtering units called nephrons, consisting of Bowman's capsule, glomerulus, and renal tubules.",
    "examinerNote": "Common confusion: Neuron = nerve cell; Nephron = kidney excretory unit.",
    "source": "NCERT Class 10 Page 110"
  },
  {
    "id": "sci_c5_q18",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 1,
    "type": "MCQ",
    "question": "Normal systolic and diastolic blood pressures in a healthy adult human are respectively:\n(a) 80 mm Hg and 120 mm Hg\n(b) 120 mm Hg and 80 mm Hg\n(c) 140 mm Hg and 90 mm Hg\n(d) 100 mm Hg and 60 mm Hg",
    "options": [
      "80 mm Hg and 120 mm Hg",
      "120 mm Hg and 80 mm Hg",
      "140 mm Hg and 90 mm Hg",
      "100 mm Hg and 60 mm Hg"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: 120 mm Hg (systolic) and 80 mm Hg (diastolic).",
    "explanation": "Measured using a sphygmomanometer: systolic pressure during ventricular contraction is ~120 mm Hg, and diastolic pressure during ventricular relaxation is ~80 mm Hg.",
    "source": "NCERT Class 10 Page 107"
  },
  {
    "id": "sci_c5_q19",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 1,
    "type": "MCQ",
    "question": "Transport of soluble products of photosynthesis (sucrose, amino acids) in plants occurs through phloem and requires:\n(a) Simple passive diffusion\n(b) Energy in the form of ATP\n(c) Transpiration pull only\n(d) Osmosis without energy",
    "options": [
      "Simple passive diffusion",
      "Energy in the form of ATP",
      "Transpiration pull only",
      "Osmosis without energy"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Energy in the form of ATP.",
    "explanation": "Translocation of sucrose into sieve tubes is an active transport mechanism powered by ATP, which raises osmotic pressure and moves sap to low-pressure tissues.",
    "source": "NCERT Class 10 Page 110"
  },
  {
    "id": "sci_c5_q20",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 1,
    "type": "MCQ",
    "question": "When sudden severe muscle cramps occur during heavy athletic sprinting, it is caused by the accumulation of:\n(a) Ethanol\n(b) Carbon dioxide\n(c) Lactic acid\n(d) Pyruvate",
    "options": [
      "Ethanol",
      "Carbon dioxide",
      "Lactic acid",
      "Pyruvate"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: Lactic acid.",
    "explanation": "Under acute oxygen debt, muscle cells undergo anaerobic respiration where pyruvate is converted into 3-carbon lactic acid, causing cramps.",
    "formula": "\\text{Glucose} ⟶ \\text{Pyruvate} \\xrightarrow{\\text{Lack of } O_2} \\text{Lactic Acid} + \\text{Energy}",
    "source": "NCERT Class 10 Page 102"
  },
  {
    "id": "sci_c5_q21",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 1,
    "type": "MCQ",
    "question": "The respiratory pigment in human blood that has high affinity for oxygen is:\n(a) Chlorophyll\n(b) Haemoglobin\n(c) Melanin\n(d) Myoglobin",
    "options": [
      "Chlorophyll",
      "Haemoglobin",
      "Melanin",
      "Myoglobin"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Haemoglobin.",
    "explanation": "Haemoglobin in red blood cells binds 4 oxygen molecules reversibly to form oxyhaemoglobin, transporting oxygen from alveoli to all body tissues.",
    "source": "NCERT Class 10 Page 104"
  },
  {
    "id": "sci_c5_q22",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 2,
    "type": "SA",
    "question": "Why do aquatic animals breathe much faster than terrestrial animals?",
    "answer": "(1) Dissolved Oxygen Level: Aquatic organisms utilize oxygen dissolved in water, while terrestrial animals breathe atmospheric air. Atmospheric air contains ~21% oxygen by volume, whereas water contains a very low concentration (< 1% dissolved oxygen).\n\n(2) Consequence on Breathing: Because the availability of dissolved oxygen in water is relatively low, aquatic animals (like fishes) must pump water across their gills at a much faster rate to obtain sufficient oxygen for cellular respiration.",
    "examinerNote": "Key contrast: low concentration of dissolved oxygen in water vs rich oxygen in air.",
    "source": "NCERT Class 10 Page 103"
  },
  {
    "id": "sci_c5_q23",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 2,
    "type": "SA",
    "question": "What is the function of the mucus and hydrochloric acid secreted by gastric glands in the human stomach?",
    "answer": "(1) Hydrochloric Acid (HCl):\n- Creates an acidic medium (pH ~1.8) essential to activate inactive proenzyme pepsinogen into active enzyme pepsin.\n- Destroys ingested harmful bacteria and pathogens swallowed with food.\n\n(2) Mucus:\n- Coats the inner epithelial mucosal lining of the stomach wall, protecting it from self-digestion and excoriation by corrosive concentrated HCl and pepsin.",
    "examinerNote": "Mention gastric ulcer formation when mucus secretion fails.",
    "source": "NCERT Class 10 Page 98"
  },
  {
    "id": "sci_c5_q24",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 2,
    "type": "SA",
    "question": "Differentiate between Xylem and Phloem transport in plants with respect to direction of flow and driving energy mechanism.",
    "answer": "(1) Direction of Flow:\n- Xylem: Unidirectional transport strictly upwards from roots to leaves.\n- Phloem: Bidirectional transport (upwards and downwards) from source (leaves/storage roots) to sinks.\n\n(2) Driving Energy Mechanism:\n- Xylem: Driven by passive physical forces (transpiration suction pull and root pressure); does not require metabolic ATP.\n- Phloem: Driven by active transport requiring metabolic energy in the form of ATP to build osmotic pressure.",
    "source": "NCERT Class 10 Pages 108–110"
  },
  {
    "id": "sci_c5_q25",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 2,
    "type": "SA",
    "question": "How do guard cells regulate the opening and closing of stomatal pores in plant leaves?",
    "answer": "(1) Stomatal Opening: When water enters guard cells from surrounding epidermal cells by osmosis, guard cells swell, become turgid, and curve outward due to thicker inner walls, causing the stomatal pore to open.\n\n(2) Stomatal Closing: When guard cells lose water, they become flaccid and shrink, their straight inner walls come close together, and the stomatal aperture closes, conserving water during drought.",
    "examinerNote": "Turgid = open; Flaccid = closed.",
    "source": "NCERT Class 10 Page 97"
  },
  {
    "id": "sci_c5_q26",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 2,
    "type": "SA",
    "question": "What are the two major stages of urine formation in the human nephron? Name two substances selectively reabsorbed.",
    "answer": "(1) Two Stages:\n- Ultrafiltration: Blood flows under high pressure through glomerular capillaries into Bowman's capsule, filtering water, glucose, salts, and nitrogenous wastes into the nephric tubule.\n- Selective Reabsorption: As filtrate moves along the convoluted tubule, essential substances are reabsorbed into peritubular capillaries.\n\n(2) Selectively Reabsorbed Substances: Glucose, amino acids, salts ($Na^+, Cl^-$), and major volume of water.",
    "source": "CBSE 2023 Board Paper"
  },
  {
    "id": "sci_c5_q27",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 2,
    "type": "SA",
    "question": "Why is double circulation necessary in human beings and mammals?",
    "answer": "(1) Separation of Blood: Double circulation completely separates oxygenated blood (left side of heart) from deoxygenated blood (right side of heart) by a muscular septum, preventing any mixing.\n\n(2) Thermoregulation: Mammals and birds are endothermic (warm-blooded) animals that require a continuous, highly efficient supply of oxygen to maintain constant body temperature regardless of external weather.",
    "examinerNote": "Must link high energy/oxygen needs with maintaining warm-blooded body temperature.",
    "source": "NCERT Class 10 Page 107"
  },
  {
    "id": "sci_c5_q28",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 3,
    "type": "SA",
    "question": "Describe the three metabolic pathways of breakdown of glucose in living organisms:\n(a) In the presence of oxygen (Aerobic respiration).\n(b) In the absence of oxygen in yeast (Fermentation).\n(c) In the lack of oxygen in human muscle cells.",
    "answer": "Common Step (Glycolysis): In cytoplasm of all cells, 6-carbon Glucose breaks down into two molecules of 3-carbon Pyruvate + Energy.\n\n(a) In Presence of Oxygen (Mitochondria):\nPyruvate undergoes complete oxidation into carbon dioxide, water, and large amount of energy (~38 ATP):\nPyruvate + O₂ ⟶ CO₂ + H₂O + 38 ATP\n\n(b) In Absence of Oxygen (Yeast, Fermentation):\nPyruvate is converted anaerobically into ethanol, carbon dioxide, and small energy (2 ATP):\nPyruvate ⟶ Ethanol (C₂H₅OH) + CO₂ + 2 ATP\n\n(c) In Lack of Oxygen (Human Muscle Cells during Sprinting):\nPyruvate is converted into lactic acid and small energy (2 ATP), causing muscle fatigue and cramps:\nPyruvate ⟶ Lactic Acid (3-carbon) + 2 ATP",
    "formula": "\\text{Glucose (6C)} \\xrightarrow{\\text{Cytoplasm}} 2\\text{ Pyruvate (3C)}",
    "examinerNote": "A flow diagram or clear 3-pathway breakdown is guaranteed full 3 marks.",
    "source": "NCERT Class 10 Page 102 Diagram"
  },
  {
    "id": "sci_c5_q29",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 3,
    "type": "SA",
    "question": "Explain the digestion of carbohydrates, proteins, and fats in the human alimentary canal by specifying the enzyme, its source gland, and the final end product.",
    "answer": "(a) Carbohydrates (Starch):\n- Enzyme & Source: Salivary amylase (salivary glands in mouth) and Pancreatic amylase (pancreas in small intestine).\n- Final Product: Glucose.\n\n(b) Proteins:\n- Enzyme & Source: Pepsin (gastric glands in stomach, active at acidic pH) and Trypsin (pancreas in small intestine, active at alkaline pH).\n- Final Product: Amino acids.\n\n(c) Fats (Lipids):\n- Enzyme & Source: Pancreatic lipase (pancreas) and intestinal lipase acting on bile-emulsified fat droplets.\n- Final Product: Fatty acids and Glycerol.",
    "source": "NCERT Class 10 Pages 98–100"
  },
  {
    "id": "sci_c5_q30",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 3,
    "type": "SA",
    "question": "How are the human lungs designed to maximize the area for exchange of gases? Explain alveolar structure and the role of respiratory pigments.",
    "answer": "(1) Extensive Surface Area of Alveoli: The trachea branches into bronchi, then bronchioles, terminating in balloon-like structures called alveoli. There are ~300 million alveoli in each human lung, providing a massive surface area of nearly 80 m² (equivalent to a tennis court) for rapid gas diffusion.\n\n(2) Structural Adaptations: Alveolar walls are ultra-thin (one-cell thick squamous epithelium) and enveloped by an extensive network of blood capillaries, minimizing diffusion distance.\n\n(3) Respiratory Pigment: Oxygen has poor solubility in aqueous plasma. Haemoglobin in red blood cells binds oxygen with high affinity, rapidly transporting 98.5% of oxygen to billions of cells.",
    "source": "CBSE 2022, 2024"
  },
  {
    "id": "sci_c5_q31",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 3,
    "type": "SA",
    "question": "Differentiate between an Artery and a Vein on the basis of:\n(a) Thickness of walls.\n(b) Presence of valves.\n(c) Direction of blood flow and pressure.",
    "answer": "(a) Thickness of Walls:\n- Artery: Has thick, muscular, and highly elastic walls to withstand high systolic pumping pressure.\n- Vein: Has thin, non-elastic walls because blood flows under low pressure.\n\n(b) Presence of Internal Valves:\n- Artery: No internal valves (except semilunar valves at exits of aorta and pulmonary artery).\n- Vein: Possesses numerous pocket-like semilunar valves to prevent backward flow of blood against gravity.\n\n(c) Direction & Pressure:\n- Artery: Carries blood AWAY from the heart to tissues under high, pulsating pressure.\n- Vein: Carries blood TOWARDS the heart from tissues under steady, low pressure.",
    "examinerNote": "Pulmonary artery carries deoxygenated blood; pulmonary vein carries oxygenated blood.",
    "source": "NCERT Class 10 Page 107"
  },
  {
    "id": "sci_c5_q32",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 3,
    "type": "SA",
    "question": "What is Lymph? How is it formed? State two major physiological functions of the lymphatic system.",
    "answer": "(1) Formation of Lymph: As blood flows under pressure through capillary beds, some fluid along with dissolved small proteins and white blood cells leaks through endothelial pores into intercellular tissue spaces, forming tissue fluid. Most fluid drains into lymphatic capillaries, where it is called Lymph.\n\n(2) Composition: Lymph is similar to blood plasma but is pale yellowish, has far lower protein content, and lacks red blood cells and platelets.\n\n(3) Two Functions:\n- Absorption & Transport of Fats: Specialized lymphatic vessels (lacteals) in intestinal villi absorb and transport long-chain digested fats.\n- Immune Defense: Lymph nodes contain large populations of lymphocytes that filter and destroy bacteria, viruses, and cellular debris.",
    "source": "NCERT Class 10 Page 108"
  },
  {
    "id": "sci_c5_q33",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 3,
    "type": "SA",
    "question": "Explain the mechanism of transport of water and dissolved minerals in tall trees:\n(a) What is the Transpiration Pull?\n(b) What is Root Pressure?\n(c) Which force dominates during the day and which during the night?",
    "answer": "(a) Transpiration Pull: Evaporation of water vapor through stomata of leaves creates negative hydrostatic pressure (suction) in leaf mesophyll cells. Due to cohesive forces between water molecules and adhesive forces with xylem vessel walls, a continuous unbroken water column is pulled upward from roots to the canopy.\n\n(b) Root Pressure: Active ion uptake by root cortical cells from soil creates an osmotic gradient, drawing water into root xylem and generating positive hydrostatic pressure pushing sap upward.\n\n(c) Dominant Forces:\n- During Day: Stomata are open, transpiration rates are high, so Transpiration Pull is the major driving force.\n- During Night: Stomata are closed, transpiration is negligible, so Root Pressure is the primary force moving water.",
    "source": "NCERT Class 10 Page 109"
  },
  {
    "id": "sci_c5_q34",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 3,
    "type": "SA",
    "question": "State the role of the following organs and structures in human excretion:\n(a) Glomerulus and Bowman's capsule\n(b) Tubular reabsorption in Henle's loop and collecting duct\n(c) Urinary bladder and Urethra",
    "answer": "(a) Glomerulus & Bowman's Capsule: Perform ultrafiltration. Blood entering via afferent arteriole is filtered under high hydrostatic pressure across the glomerular membrane, producing ~180 L of protein-free initial filtrate daily.\n\n(b) Tubular Reabsorption: As filtrate traverses the renal tubules, 99% of filtered water, all glucose, and amino acids are selectively reabsorbed back into peritubular capillaries, concentrating toxic urea and uric acid into ~1.5 L of urine.\n\n(c) Urinary Bladder & Urethra: The muscular, distensible bladder temporarily stores concentrated urine under nervous control until stretch receptors trigger voluntary urination (micturition) through the urethra.",
    "source": "CBSE 2024 Board Question"
  },
  {
    "id": "sci_c5_q35",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: A cardiologist evaluated a patient complaining of persistent fatigue and breathlessness upon climbing stairs. A blood test revealed haemoglobin of 7.2 g/dL (normal: 13–16 g/dL). An echocardiogram traced the double circulation flow through the heart.\n\n(a) Why does low haemoglobin cause breathlessness and extreme fatigue?\n(b) Trace the path of deoxygenated blood from body tissues back to the lungs.\n(c) Trace the path of oxygenated blood from the lungs to the aorta.\n(d) Name the blood vessel that carries oxygenated blood from lungs to the left atrium.",
    "answer": "(a) Physiological Cause: Haemoglobin is the primary respiratory carrier of oxygen. With low haemoglobin (anaemia), blood oxygen-carrying capacity drops by more than 50%. Body cells receive inadequate oxygen, impairing aerobic ATP production in mitochondria, producing fatigue. Respiratory rate increases to compensate, producing breathlessness.\n\n(b) Path of Deoxygenated Blood:\nBody Tissues ⟶ Vena Cava (Superior & Inferior) ⟶ Right Atrium ⟶ Tricuspid Valve ⟶ Right Ventricle ⟶ Pulmonary Semilunar Valve ⟶ Pulmonary Artery ⟶ Lungs (for oxygenation).\n\n(c) Path of Oxygenated Blood:\nLungs ⟶ Pulmonary Veins ⟶ Left Atrium ⟶ Bicuspid (Mitral) Valve ⟶ Left Ventricle ⟶ Aortic Semilunar Valve ⟶ Aorta ⟶ Systemic Body Circulation.\n\n(d) Pulmonary Vein carries oxygenated blood from the lungs into the left atrium of the heart.",
    "examinerNote": "Trace the 4 heart chambers clearly with valve names.",
    "source": "CBSE Sample Paper 2025"
  },
  {
    "id": "sci_c5_q36",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In an intensive care nephrology unit, a patient suffering from acute renal failure was placed on an artificial kidney (haemodialyzer) to remove toxic nitrogenous metabolic wastes.\n\n(a) What is haemodialysis? Name the main nitrogenous waste extracted from blood.\n(b) Describe how the dialyzing fluid differs from human blood plasma.\n(c) Why is heparin added before passing blood into the dialyzer, and what is done before returning blood to the patient?\n(d) In what fundamental way does haemodialysis differ from a natural functioning kidney?",
    "answer": "(a) Haemodialysis: An artificial clinical procedure for filtering metabolic wastes (primarily toxic urea, uric acid, and excess creatinine) from the blood of patients with kidney failure.\n\n(b) Dialyzing Fluid Composition: Dialyzing fluid has the exact same osmotic pressure and mineral composition as normal blood plasma, but contains ZERO nitrogenous wastes (zero urea). Hence, urea diffuses passively down its concentration gradient across cellophane tubes into the dialyzer fluid.\n\n(c) Heparin Management:\n- Heparin (anticoagulant) is added as blood leaves the patient's radial artery to prevent blood from clotting inside dialysis tubes.\n- Anti-heparin is mixed with blood before returning it safely through a vein to restore normal clotting ability.\n\n(d) Difference from Natural Kidney: The artificial dialyzer does NOT perform selective tubular reabsorption. While a natural kidney filters 180 L of filtrate and reabsorbs 178.5 L, haemodialysis removes wastes strictly by diffusion.",
    "examinerNote": "Lack of reabsorption in dialyzer is the key conceptual difference.",
    "source": "NCERT Class 10 Page 111"
  },
  {
    "id": "sci_c5_q37",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: An athlete was running a 400 m hurdles sprint. In the first 50 meters, she felt full of energy, but by the final 100 meters, her legs suffered agonizing muscle cramps. After 30 minutes of rest and light massage, the cramps completely resolved.\n\n(a) Why did muscle cramps develop during the high-speed sprint?\n(b) Write the chemical equation for the anaerobic breakdown of glucose in muscle tissue.\n(c) Why did the cramps disappear after resting and massage?\n(d) How does anaerobic respiration in muscle cells differ from anaerobic fermentation in yeast?",
    "answer": "(a) Cause of Cramps: During intense sprinting, skeletal muscle energy demands skyrocket, outstripping the circulatory supply of oxygen (oxygen debt). Muscle fibers switch to anaerobic respiration, converting pyruvate into lactic acid. Accumulation of lactic acid in muscle tissue causes stiffness, soreness, and cramps.\n\n(b) Chemical Equation:\nGlucose ⟶ Pyruvate —[Lack of Oxygen in Muscle]⟶ Lactic Acid (3-carbon) + 2 ATP\n\n(c) Resolution by Rest: Rest and massage improve blood circulation, delivering fresh oxygen to fatigued muscles. Lactic acid is washed into the bloodstream and carried to the liver, where oxygen breaks it down aerobically into CO₂ and H₂O.\n\n(d) Muscle vs Yeast Anaerobic Breakdown:\n- Human Muscle: Yields 3-carbon Lactic Acid; no carbon dioxide ($CO_2$) is liberated.\n- Yeast Fermentation: Yields 2-carbon Ethanol ($C_2H_5OH$) and liberates Carbon Dioxide ($CO_2$) gas.",
    "formula": "\\text{Glucose} ⟶ 2\\text{ Lactic Acid} + 2\\text{ATP}",
    "source": "CBSE 2023 Case-Based Question"
  },
  {
    "id": "sci_c5_q38",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In a plant physiology experiment, a potted variegated money plant was destarched by keeping it in complete darkness for 72 hours. It was then placed in bright sunlight for 6 hours. A leaf was plucked, mapped, boiled in alcohol, and tested with iodine solution.\n\n(a) Why was the plant kept in darkness for 72 hours before the experiment?\n(b) Why is the leaf boiled in alcohol over a water bath, and why is an open flame not used?\n(c) Which parts of the variegated leaf turn blue-black with iodine, and which parts turn brown? Justify.\n(d) What fundamental conclusion about photosynthesis is proven by this activity?",
    "answer": "(a) Destarching: Keeping the plant in darkness for 3 days deprives it of light for photosynthesis. The plant consumes all preexisting starch stored in leaves for cellular respiration, ensuring baseline zero starch.\n\n(b) Boiling in Alcohol:\n- Function: Boiling in alcohol dissolves and extracts green chlorophyll pigment from leaf cells, decolourising the leaf so that the blue-black starch-iodine color change can be clearly viewed.\n- Water Bath Precaution: Alcohol is highly flammable with a low boiling point. Direct heating over an open flame would ignite alcohol vapors. A water bath ensures safe, indirect heating.\n\n(c) Iodine Test Observations:\n- Green parts (chlorophyll-bearing): Turn deep Blue-Black, proving active starch synthesis.\n- White/yellow variegated parts: Turn yellowish-Brown (iodine color), indicating no starch was produced.\n\n(d) Scientific Conclusion: Proves conclusively that Chlorophyll is strictly essential for photosynthesis.",
    "examinerNote": "NCERT Activity 6.1. Essential board practical case-study.",
    "source": "NCERT Class 10 Activity 6.1"
  },
  {
    "id": "sci_c5_q39",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 5,
    "type": "LA",
    "question": "Human Circulatory System and Cardiac Cycle:\n(a) Draw a labeled flow schematic of the human heart showing all four chambers, major blood vessels, and valves.\n(b) Explain the sequence of events during a single cardiac cycle (atrial systole, ventricular systole, and joint diastole).\n(c) Why is blood circulation in humans described as 'Double Circulation'? Differentiate between Systemic Circulation and Pulmonary Circulation.\n(d) What is the function of the septum dividing the heart into right and left halves?",
    "answer": "(a) Cardiac Flow Schematic:\n- Superior & Inferior Vena Cava ⟶ Right Atrium ⟶ Tricuspid Valve ⟶ Right Ventricle ⟶ Pulmonary Artery ⟶ Lungs.\n- Pulmonary Veins ⟶ Left Atrium ⟶ Bicuspid (Mitral) Valve ⟶ Left Ventricle ⟶ Aorta ⟶ Systemic Body Tissues.\n\n(b) Cardiac Cycle Phases:\n1. Joint Diastole: All 4 chambers are relaxed. Deoxygenated blood from vena cava fills right atrium; oxygenated blood from pulmonary veins fills left atrium. AV valves open, blood flows into ventricles.\n2. Atrial Systole: Both atria contract simultaneously, pumping remaining blood into ventricles.\n3. Ventricular Systole: Both ventricles contract forcefully. AV valves snap shut (producing 1st heart sound, 'LUBB'). Blood is ejected into pulmonary artery and systemic aorta. Semilunar valves close at end of systole (producing 2nd heart sound, 'DUPP').\n\n(c) Double Circulation:\nBlood passes through the heart twice during each complete circuit of the body:\n- Pulmonary Circulation: Deoxygenated blood flows from Right Ventricle ⟶ Pulmonary Artery ⟶ Lungs (oxygenation) ⟶ Pulmonary Veins ⟶ Left Atrium.\n- Systemic Circulation: Oxygenated blood flows from Left Ventricle ⟶ Aorta ⟶ All Body Organs ⟶ Vena Cava ⟶ Right Atrium.\n\n(d) Role of Septum: A thick muscular wall completely segregates oxygen-rich blood on the left side from oxygen-poor blood on the right side, maintaining high metabolic efficiency required for warm-blooded thermoregulation.",
    "source": "CBSE 2024 Long Answer"
  },
  {
    "id": "sci_c5_q40",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 5,
    "type": "LA",
    "question": "Nephron structure and urine formation in humans:\n(a) Describe the structure of a nephron with reference to Bowman's capsule, glomerulus, Henle's loop, and collecting duct.\n(b) Explain the three successive physiological steps involved in urine formation:\n(i) Ultrafiltration (Glomerular filtration)\n(ii) Selective Tubular Reabsorption\n(iii) Tubular Secretion\n(c) How is the volume of urine produced regulated in response to hydration levels?",
    "answer": "(a) Structural Architecture of Nephron:\n- Malpighian Body: Comprises the cup-shaped Bowman's capsule enclosing a tight capillary tuft called the Glomerulus.\n- Renal Tubule: Extends from Bowman's capsule into Proximal Convoluted Tubule (PCT), hairpin-shaped Henle's Loop, and Distal Convoluted Tubule (DCT), terminating in a Collecting Duct.\n\n(b) Three Steps of Urine Formation:\n(i) Ultrafiltration: Blood enters under high hydrostatic pressure via wide afferent arteriole. Glomerular capillary pores act as fine micro-filters, squeezing out water, urea, glucose, salts, and amino acids into Bowman's space (~180 L/day initial filtrate). Blood cells and large proteins cannot pass and remain in circulation.\n(ii) Selective Reabsorption: Along PCT and Henle's loop, 100% of glucose and amino acids, 85% of salts, and 99% of water are actively/passively reabsorbed back into peritubular capillaries.\n(iii) Tubular Secretion: Active secretion of extra $K^+$, $H^+$, and drug residues from peritubular capillaries into tubular fluid, regulating blood pH and electrolyte balance.\n\n(c) Urine Volume Regulation: Regulated by antidiuretic hormone (ADH/Vasopressin) secreted by pituitary:\n- Dehydration (water deficit): ADH levels rise, making collecting ducts highly permeable to water. Maximum water is reabsorbed into blood, producing small volume of dark concentrated urine.\n- Excess Hydration: ADH secretion is suppressed, ducts remain impermeable, and large volumes of dilute urine are voided.",
    "examinerNote": "Ultrafiltration, selective reabsorption, and tubular secretion must all 3 be described.",
    "source": "NCERT Class 10 Pages 110–111"
  },
  {
    "id": "sci_c5_q41",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 5,
    "type": "LA",
    "question": "Human Alimentary System and Chemical Digestion:\n(a) Describe the complete pathway of food through the human gastrointestinal tract from mouth to rectum.\n(b) Specify the exact chemical digestive actions that take place in:\n(i) Buccal Cavity (Mouth)\n(ii) Stomach\n(iii) Duodenum and Small Intestine\n(c) What are the dual functions of bile juice?\n(d) How does the small intestine absorb digested nutrients and transport them to body tissues?",
    "answer": "(a) Gastrointestinal Pathway:\nMouth ⟶ Pharynx ⟶ Oesophagus (Peristalsis) ⟶ Stomach ⟶ Small Intestine (Duodenum, Jejunum, Ileum) ⟶ Large Intestine (Colon) ⟶ Rectum ⟶ Anus.\n\n(b) Chemical Digestion Stages:\n(i) Mouth: Saliva contains salivary amylase (ptyalin) which converts ~30% of starch into maltose disaccharide:\n$\\text{Starch} \\xrightarrow{\\text{Amylase, pH 6.8}} \\text{Maltose}$\n(ii) Stomach: Gastric juice contains HCl (activates pepsinogen) and Pepsin, which hydrolyzes proteins into peptones and proteoses:\n$\\text{Proteins} \\xrightarrow{\\text{Pepsin, pH 1.8}} \\text{Peptones} + \\text{Proteoses}$\n(iii) Small Intestine (Duodenum):\n- Pancreatic amylase converts remaining starch to maltose.\n- Trypsin hydrolyzes peptones into peptides.\n- Pancreatic lipase breaks down emulsified triglycerides into fatty acids and glycerol.\n- Intestinal brush-border peptidases, maltase, and sucrase complete digestion into free amino acids and monosaccharides.\n\n(c) Dual Functions of Bile:\n- Emulsification: Bile salts physically break down large lipid globules into microscopic micelles, vastly multiplying surface area for lipase action.\n- Alkaline Buffer: Alkaline bile salts neutralize acidic gastric chyme, creating optimal alkaline pH (~8.0) necessary for pancreatic enzymes.\n\n(d) Absorption Mechanism: Millions of vascularized villi and microvilli absorb glucose and amino acids directly into bloodstream via hepatic portal vein, while fatty acids and glycerol are packaged into chylomicrons and absorbed into central lacteals of the lymphatic system.",
    "source": "CBSE Board 2022 Long Answer"
  },
  {
    "id": "sci_c5_q42",
    "chapter": 5,
    "chapterName": "Life Processes",
    "marks": 5,
    "type": "LA",
    "question": "Photosynthesis and Plant Translocation Mechanisms:\n(a) Write the balanced chemical equation for photosynthesis and describe the three sequential events occurring during this photochemical process.\n(b) Differentiate between Autotrophic and Heterotrophic nutrition with two examples of each.\n(c) Explain the Pressure Flow Hypothesis (Münch hypothesis) for the translocation of food in phloem sieve tubes.\n(d) Why do desert plants (xerophytes) keep stomata closed during the day, and how do they perform photosynthesis?",
    "answer": "(a) Photosynthesis Equation & Three Events:\n$6\\text{CO}_2 + 12\\text{H}_2\\text{O} \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 + 6\\text{H}_2\\text{O}$\n1. Absorption of solar light energy by chlorophyll pigments.\n2. Photolysis: Conversion of light energy into chemical energy (ATP, NADPH) and splitting of water ($H_2O$) into hydrogen and oxygen gas.\n3. Reduction of carbon dioxide ($CO_2$) to carbohydrates (glucose) by chemical energy.\n\n(b) Autotrophic vs Heterotrophic:\n- Autotrophic: Organisms synthesize organic food from inorganic raw materials ($CO_2$, $H_2O$) using sunlight (e.g., green plants, cyanobacteria).\n- Heterotrophic: Organisms cannot synthesize food and depend directly or indirectly on autotrophs (e.g., humans, amoeba, fungi).\n\n(c) Phloem Translocation (Pressure Flow Mechanism):\n1. Sucrose produced in photosynthetic source leaves is actively loaded into companion cells and sieve tube elements using ATP energy.\n2. High solute concentration draws water from adjacent xylem vessels by osmosis, generating high hydrostatic turgor pressure inside sieve tubes.\n3. High pressure forces the sap to flow bulk-wise along sieve tubes toward low-pressure sink tissues (roots, fruits, buds).\n4. At sinks, sucrose is unloaded actively, water returns to xylem, and osmotic pressure drops.\n\n(d) Desert Xerophytes Adaptation (CAM Pathway):\nDesert plants (like cacti) keep stomata closed during the day to prevent fatal transpirational water loss. At night, stomata open; they absorb $CO_2$ and store it as intermediate malic acid. During daytime, light reactions generate ATP and NADPH, which reduce the stored intermediate to glucose.",
    "formula": "6\\text{CO}_2 + 12\\text{H}_2\\text{O} ⟶ \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 + 6\\text{H}_2\\text{O}",
    "examinerNote": "CAM adaptation in desert plants is a modern high-order thinking board question.",
    "source": "NCERT Class 10 Page 96 & 110"
  },
];
