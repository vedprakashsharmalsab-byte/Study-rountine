import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH13_QUESTIONS: VaultQuestion[] = [
  // 1-MARK MCQs & ASSERTION-REASON
  {
    id: "sci_c13_q1",
    chapter: 13,
    chapterName: "Our Environment",
    marks: 1,
    type: "MCQ",
    question: "In an ecosystem, which of the following organisms occupies the first trophic level?\n(a) Primary consumers (Herbivores)\n(b) Secondary consumers (Carnivores)\n(c) Autotrophs (Green plants / Phytoplankton)\n(d) Decomposers (Bacteria and Fungi)",
    options: [
      "Primary consumers (Herbivores)",
      "Secondary consumers (Carnivores)",
      "Autotrophs (Green plants / Phytoplankton)",
      "Decomposers (Bacteria and Fungi)"
    ],
    correctOption: 2,
    answer: "Option (c) is correct: Autotrophs (Producers).",
    explanation: "Autotrophs (green plants and photosynthetic algae/phytoplankton) trap solar energy to synthesize organic food via photosynthesis, forming the foundational first trophic level ($T_1$) in any ecosystem.",
    examinerNote: "Decomposers operate at all trophic levels to recycle nutrients, but the first trophic level is exclusively producers.",
    source: "NCERT Class 10 Page 242"
  },
  {
    id: "sci_c13_q2",
    chapter: 13,
    chapterName: "Our Environment",
    marks: 1,
    type: "MCQ",
    question: "According to Lindeman's 10% Law, what percentage of total solar energy falling on the leaves of terrestrial green plants is converted into food energy?\n(a) 10%\n(b) 1%\n(c) 0.1%\n(d) 50%",
    options: [
      "10%",
      "1%",
      "0.1%",
      "50%"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: 1%.",
    explanation: "Green plants in a terrestrial ecosystem capture only about 1% of the total incident solar energy that falls on their leaves and convert it into chemical food energy. The 10% law applies only to energy transferred from one trophic level to the NEXT higher trophic level within the food chain.",
    examinerNote: "Very frequent board trap: 1% from Sun to Plants, but 10% between trophic levels (plants to herbivores to carnivores).",
    source: "CBSE 2024 Board Question"
  },
  {
    id: "sci_c13_q3",
    chapter: 13,
    chapterName: "Our Environment",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Human beings accumulate the highest concentration of toxic pesticides in their bodies in a terrestrial food chain.\nReason (R): Non-biodegradable chemicals cannot be metabolized or excreted and progressively concentrate at each successive trophic level (Biological Magnification).\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is NOT the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct.",
    explanation: "Because humans occupy the apex (topmost) position in diverse food chains, non-biodegradable pesticides (like DDT) bioaccumulate to the highest concentration in human tissues through biological magnification.",
    examinerNote: "Classic assertion-reason question on biomagnification.",
    source: "KVS Support Material 2025-26"
  },

  // 2-MARK SHORT ANSWER QUESTIONS
  {
    id: "sci_c13_q4",
    chapter: 13,
    chapterName: "Our Environment",
    marks: 2,
    type: "SA",
    question: "What is the role of decomposers in an ecosystem? What would happen if all decomposers were eliminated?",
    answer: "(1) Role of Decomposers: Decomposers (bacteria and saprophytic fungi) break down complex organic matter from dead plants and animal excreta into simple inorganic mineral nutrients, returning them to the soil, air, and water for re-absorption by producers.\n\n(2) Consequence of Elimination: Dead bodies of plants and animals would pile up in heaps, the natural biogeochemical nutrient cycles would completely halt, soil fertility would be depleted, and life would eventually collapse due to lack of recyclable nutrients.",
    steps: [
      "Step 1: Define role: Break down dead organic matter and recycle essential soil nutrients.",
      "Step 2: Explain consequence: Piles of dead waste, nutrient cycle stoppage, soil starvation."
    ],
    explanation: "Decomposers are the natural scavengers and nutrient recyclers of the biosphere.",
    examinerNote: "Must use the term 'replenishment of soil / recycling of nutrients'.",
    source: "NCERT Class 10 In-Text Page 244"
  },
  {
    id: "sci_c13_q5",
    chapter: 13,
    chapterName: "Our Environment",
    marks: 2,
    type: "SA",
    question: "Why are food chains in nature generally limited to only 3 to 4 trophic levels?",
    answer: "According to Lindeman's 10% Law, only 10% of the energy available at a given trophic level is converted into biomass and transferred to the next higher trophic level; the remaining 90% is dissipated as metabolic heat and life processes. By the time energy reaches the 4th or 5th trophic level, the amount of available energy becomes so minuscule that it is insufficient to support and sustain another viable population of top carnivores.",
    steps: [
      "Step 1: State 10% energy transfer rule (90% lost as metabolic heat).",
      "Step 2: Conclude: After 3–4 steps, remaining energy is too negligible to sustain higher trophic organisms."
    ],
    explanation: "Starting with 10,000 J: Level 1 has 10,000 J ⟶ Level 2 has 1,000 J ⟶ Level 3 has 100 J ⟶ Level 4 has only 10 J.",
    examinerNote: "Must cite the 10% law and mention 'energy becomes too small to sustain another level'.",
    source: "CBSE 2023 Board Paper"
  },

  // 3-MARK SHORT ANSWER QUESTIONS
  {
    id: "sci_c13_q6",
    chapter: 13,
    chapterName: "Our Environment",
    marks: 3,
    type: "SA",
    question: "What is Ozone? How is it formed in the upper atmosphere? What causes damage to the ozone layer and what international action was taken to control it?",
    answer: "(a) What is Ozone: Ozone is a triatomic molecule of oxygen (O₃). At ground level, it is a deadly toxic poison, but in the stratosphere, it forms an essential shield that absorbs harmful ultraviolet (UV-B) radiation from the sun.\n\n(b) Formation of Ozone:\nHigh-energy UV rays split molecular oxygen into free oxygen atoms:\nO₂ —[UV]⟶ O + O.\nThese reactive free oxygen atoms combine with molecular oxygen to form ozone:\nO + O₂ ⟶ O₃ (Ozone).\n\n(c) Damage and Action:\n- Damage: Caused by synthetic chemicals like Chlorofluorocarbons (CFCs) used in refrigerators, fire extinguishers, and aerosol sprays.\n- International Action: In 1987, the United Nations Environment Programme (UNEP) forged the Montreal Protocol, freezing CFC production globally at 1986 levels.",
    steps: [
      "Part (a): Define ozone (O₃) and state its protective UV-shielding role.",
      "Part (b): Write two-step chemical formation equations ($O_2 \\to O + O; O + O_2 \\to O_3$).",
      "Part (c): Name CFCs as the culprit and mention UNEP's 1987 Montreal Protocol."
    ],
    explanation: "UV-B radiation causes skin cancer, cataracts, and destroys phytoplankton in oceans.",
    formula: "O₂ —[UV]⟶ O + O;  O + O₂ ⟶ O₃",
    examinerNote: "1 mark for definition/role, 1 mark for chemical equations, 1 mark for CFCs and UNEP Montreal protocol.",
    source: "NCERT Class 10 Page 246"
  },
  {
    id: "sci_c13_q7",
    chapter: 13,
    chapterName: "Our Environment",
    marks: 3,
    type: "SA",
    question: "Calculate the energy available at each trophic level in the following food chain if 50,000 J of solar energy is received by the ecosystem:\nSun ⟶ Grass ⟶ Grasshopper ⟶ Frog ⟶ Snake ⟶ Hawk.",
    answer: "Step 1 (Sun to Grass / Producers):\nPlants capture only 1% of total incident solar energy:\n$\\text{Energy captured by Grass} = 1\\% \\text{ of } 50,000\\text{ J} = \\frac{1}{100} \\times 50,000 = 500\\text{ Joules}$.\n\nStep 2 (Grass to Grasshopper / Primary Consumer):\n$10\\% \\text{ of } 500\\text{ J} = 0.10 \\times 500 = 50\\text{ Joules}$.\n\nStep 3 (Grasshopper to Frog / Secondary Consumer):\n$10\\% \\text{ of } 50\\text{ J} = 0.10 \\times 50 = 5\\text{ Joules}$.\n\nStep 4 (Frog to Snake / Tertiary Consumer):\n$10\\% \\text{ of } 5\\text{ J} = 0.10 \\times 5 = 0.5\\text{ Joules}$.\n\nStep 5 (Snake to Hawk / Quaternary Consumer / Top Carnivore):\n$10\\% \\text{ of } 0.5\\text{ J} = 0.10 \\times 0.5 = 0.05\\text{ Joules}$.\n\nFinal Summary:\n- Grass: 500 J\n- Grasshopper: 50 J\n- Frog: 5 J\n- Snake: 0.5 J\n- Hawk: 0.05 J.",
    steps: [
      "Step 1: Calculate 1% for producers = 500 J.",
      "Step 2: Apply 10% sequentially down the food chain.",
      "Step 3: State final energy at hawk = 0.05 J."
    ],
    explanation: "Demonstrates why food chains rarely sustain 5 trophic levels (hawk receives only 0.05 J).",
    examinerNote: "Sun to grass is 1%, NOT 10%! Applying 10% to the sun results in an incorrect answer of 0.5 J at the hawk.",
    source: "Educart Science Class 10 2026"
  },

  // 4-MARK CASE STUDY
  {
    id: "sci_c13_q8",
    chapter: 13,
    chapterName: "Our Environment",
    marks: 4,
    type: "Case Study",
    question: "Case Study: In an agricultural belt near a freshwater lake, farmers heavily sprayed the pesticide DDT to eradicate crop pests. After two years, environmental scientists analyzed the chemical concentration of DDT in the ecosystem organisms and recorded the following data:\n- Lake Water: 0.000003 ppm (parts per million)\n- Zooplankton: 0.04 ppm\n- Small Fish: 0.5 ppm\n- Large Fish: 2.0 ppm\n- Fish-eating Birds (Pelicans): 25.0 ppm\n\n(a) Name the biological phenomenon illustrated by this quantitative data.\n(b) Why does the concentration of DDT increase dramatically from 0.000003 ppm in water to 25.0 ppm in pelicans?\n(c) What severe ecological consequence did high DDT concentrations cause in bird populations?\n(d) Can biodegradable pesticides cause biological magnification? Explain.",
    answer: "(a) Biological Magnification (Biomagnification).\n\n(b) Reason: DDT is a synthetic, fat-soluble, and NON-BIODEGRADABLE pesticide. It cannot be digested, broken down by metabolic enzymes, or excreted by organisms. Because an organism consumes thousands of organisms from the lower trophic level over its life, the toxic chemical accumulates progressively in body fats at each successive trophic stage.\n\n(c) Ecological Consequence: High DDT levels disrupted calcium metabolism in female birds, causing them to lay eggs with abnormally thin shells. The eggshells broke prematurely during incubation, leading to catastrophic collapses in bird populations.\n\n(d) No. Biodegradable substances are broken down into simple, harmless inorganic molecules by bacterial and fungal enzymes, and therefore do NOT bioaccumulate or biomagnify in food chains.",
    steps: [
      "Part (a): Identify Biological Magnification.",
      "Part (b): State that non-biodegradable chemicals cannot be metabolized or excreted.",
      "Part (c): Cite thinning of eggshells and premature cracking in birds.",
      "Part (d): Explain why biodegradables are decomposed and cannot magnify."
    ],
    explanation: "Biomagnification is the accumulation of non-biodegradable toxins across trophic levels.",
    examinerNote: "1 mark per sub-part. Thinning of eggshells is the classic historical DDT case study fact.",
    source: "Arihant All-In-One Chapter 13 / CBSE Case Study"
  },
  {"id": "sci_c13_q9",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 1,
    "type": "MCQ",
    "question": "Which of the following constitutes a correct terrestrial food chain?\n(a) Grass ⟶ Wheat ⟶ Mango\n(b) Grass ⟶ Goat ⟶ Human\n(c) Goat ⟶ Cow ⟶ Elephant\n(d) Grass ⟶ Fish ⟶ Goat",
    "options": [
      "Grass ⟶ Wheat ⟶ Mango",
      "Grass ⟶ Goat ⟶ Human",
      "Goat ⟶ Cow ⟶ Elephant",
      "Grass ⟶ Fish ⟶ Goat"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Grass (Producer) ⟶ Goat (Primary Consumer / Herbivore) ⟶ Human (Secondary Consumer / Omnivore).",
    "explanation": "A food chain represents the unidirectional trophic transfer of energy from producers to successive consumer levels. Grass is eaten by goats, which can be eaten by humans.",
    "source": "NCERT Class 10 Exercise Question 1"
  },
  {
    "id": "sci_c13_q10",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 1,
    "type": "MCQ",
    "question": "In a food chain, the third trophic level is always occupied by:\n(a) Carnivores\n(b) Herbivores\n(c) Decomposers\n(d) Producers",
    "options": [
      "Carnivores",
      "Herbivores",
      "Decomposers",
      "Producers"
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct: Carnivores (Secondary Consumers).",
    "explanation": "Trophic levels: 1st Trophic Level = Producers (Plants); 2nd Trophic Level = Herbivores (Primary Consumers); 3rd Trophic Level = Carnivores (Secondary Consumers); 4th Trophic Level = Top Carnivores.",
    "source": "NCERT Class 10 Page 258"
  },
  {
    "id": "sci_c13_q11",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 1,
    "type": "MCQ",
    "question": "Depletion of the stratospheric ozone layer is primarily triggered by:\n(a) Methane\n(b) Carbon dioxide\n(c) Chlorofluorocarbons (CFCs)\n(d) Carbon monoxide",
    "options": [
      "Methane",
      "Carbon dioxide",
      "Chlorofluorocarbons (CFCs)",
      "Carbon monoxide"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: Chlorofluorocarbons (CFCs).",
    "explanation": "Synthetic refrigerants like CFCs release free chlorine free radicals in the stratosphere upon UV exposure, which catalytically break down ozone molecules ($O_3$) into oxygen ($O_2$).",
    "formula": "\\text{CF}_2\\text{Cl}_2 \\xrightarrow{\\text{UV}} \\text{CF}_2\\text{Cl}^\\bullet + \\text{Cl}^\\bullet;\\quad \\text{Cl}^\\bullet + \\text{O}_3 ⟶ \\text{ClO}^\\bullet + \\text{O}_2",
    "source": "NCERT Class 10 Page 262"
  },
  {
    "id": "sci_c13_q12",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 1,
    "type": "MCQ",
    "question": "Which of the following is a non-biodegradable waste substance?\n(a) Grass cuttings\n(b) Leather belt\n(c) DDT (Dichlorodiphenyltrichloroethane)\n(d) Cotton cloth",
    "options": [
      "Grass cuttings",
      "Leather belt",
      "DDT (Dichlorodiphenyltrichloroethane)",
      "Cotton cloth"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: DDT.",
    "explanation": "DDT is a persistent synthetic organochlorine pesticide that cannot be broken down by saprophytic bacterial or fungal enzymes, persisting in soil and biomagnifying.",
    "source": "NCERT Exemplar Class 10"
  },
  {
    "id": "sci_c13_q13",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 1,
    "type": "MCQ",
    "question": "According to Lindeman's 10% Law, if 10,000 J of solar energy falls on green plants, the amount of energy converted into plant biomass is approximately:\n(a) 1,000 J\n(b) 100 J\n(c) 10 J\n(d) 1 J",
    "options": [
      "1,000 J",
      "100 J",
      "10 J",
      "1 J"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: 100 J.",
    "explanation": "Green plants in a terrestrial ecosystem capture only about 1% of the total solar energy that falls on their leaves and convert it into chemical food energy ($1\\% \\text{ of } 10,000\\text{ J} = 100\\text{ J}$). From then on, 10% transfers at each successive consumer level.",
    "examinerNote": "Producers capture 1% of solar energy. Subsequent consumer transfers follow 10%.",
    "source": "NCERT Class 10 Page 258"
  },
  {
    "id": "sci_c13_q14",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 1,
    "type": "MCQ",
    "question": "Assertion (A): Food chains generally consist of only 3 to 4 trophic levels.\nReason (R): The loss of energy at each step is so great that very little usable chemical energy remains after 4 trophic levels.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is NOT the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    "options": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct.",
    "explanation": "Since only 10% of energy transfers to the next trophic level, by the 4th or 5th trophic level the residual energy is insufficient to sustain a viable population of top carnivores.",
    "source": "CBSE 2024 Board Question"
  },
  {
    "id": "sci_c13_q15",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 1,
    "type": "MCQ",
    "question": "Biological magnification is the progressive phenomenon of:\n(a) Increase in physical body size of organisms in higher trophic levels\n(b) Progressive increase in concentration of toxic non-biodegradable chemicals at successive trophic levels\n(c) Increase in total biomass from herbivores to carnivores\n(d) Proliferation of bacteria in compost pits",
    "options": [
      "Increase in physical body size of organisms in higher trophic levels",
      "Progressive increase in concentration of toxic non-biodegradable chemicals at successive trophic levels",
      "Increase in total biomass from herbivores to carnivores",
      "Proliferation of bacteria in compost pits"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Progressive increase in concentration of toxic non-biodegradable chemicals at successive trophic levels.",
    "explanation": "Non-biodegradable toxins (like heavy metals, pesticides) cannot be metabolized or excreted; hence their concentration multiplies at each consecutive consumer stage.",
    "source": "NCERT Class 10 Page 260"
  },
  {
    "id": "sci_c13_q16",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 1,
    "type": "MCQ",
    "question": "The international treaty signed in 1987 to freeze and phase out CFC production to protect the ozone layer is known as the:\n(a) Kyoto Protocol\n(b) Montreal Protocol\n(c) Paris Agreement\n(d) Ramsar Convention",
    "options": [
      "Kyoto Protocol",
      "Montreal Protocol",
      "Paris Agreement",
      "Ramsar Convention"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Montreal Protocol.",
    "explanation": "The Montreal Protocol (1987) succeeded in legally binding developed and developing nations to freeze CFC levels and phase out ozone-depleting substances under UNEP.",
    "source": "NCERT Class 10 Page 262"
  },
  {
    "id": "sci_c13_q17",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 1,
    "type": "MCQ",
    "question": "Ozone at the higher levels of the atmosphere is a product of UV radiation acting on oxygen molecules. The reaction involves:\n(a) Splitting of molecular oxygen into free oxygen atoms by high-energy UV, followed by combination with O₂\n(b) Direct combination of nitrogen dioxide with oxygen\n(c) Oxidation of carbon monoxide\n(d) Electrolytic dissociation of water vapor",
    "options": [
      "Splitting of molecular oxygen into free oxygen atoms by high-energy UV, followed by combination with O₂",
      "Direct combination of nitrogen dioxide with oxygen",
      "Oxidation of carbon monoxide",
      "Electrolytic dissociation of water vapor"
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct: Splitting of O₂ into nascent oxygen atoms by UV, followed by $O + O_2 ⟶ O_3$.",
    "explanation": "Step 1: $O_2 \\xrightarrow{\\text{UV}} O + O$. Step 2: $O + O_2 ⟶ O_3$ (Ozone).",
    "formula": "\\text{O}_2 \\xrightarrow{\\text{UV}} \\text{O} + \\text{O};\\quad \\text{O} + \\text{O}_2 ⟶ \\text{O}_3",
    "source": "NCERT Class 10 Page 261"
  },
  {
    "id": "sci_c13_q18",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 1,
    "type": "MCQ",
    "question": "In an ecosystem, the flow of energy is always:\n(a) Multidirectional\n(b) Bidirectional\n(c) Unidirectional\n(d) Circular and cyclical",
    "options": [
      "Multidirectional",
      "Bidirectional",
      "Unidirectional",
      "Circular and cyclical"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: Unidirectional.",
    "explanation": "Energy flows strictly one way: Sun ⟶ Autotrophs (Producers) ⟶ Herbivores ⟶ Carnivores. Energy captured by autotrophs does not revert back to solar input, and energy passed to herbivores cannot return to producers.",
    "source": "NCERT Class 10 Page 259"
  },
  {
    "id": "sci_c13_q19",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 1,
    "type": "MCQ",
    "question": "Organisms which synthesize their own organic food from simple inorganic substances using solar energy are classified as:\n(a) Decomposers\n(b) Consumers\n(c) Autotrophs (Producers)\n(d) Saprophytes",
    "options": [
      "Decomposers",
      "Consumers",
      "Autotrophs (Producers)",
      "Saprophytes"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: Autotrophs (Producers).",
    "explanation": "Green plants and photosynthetic cyanobacteria produce glucose from carbon dioxide and water in the presence of sunlight and chlorophyll.",
    "source": "NCERT Class 10 Page 257"
  },
  {
    "id": "sci_c13_q20",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 1,
    "type": "MCQ",
    "question": "Disposable paper cups are preferred over plastic cups for serving tea on trains because:\n(a) Paper cups are cheaper\n(b) Paper is biodegradable and non-polluting upon decomposition\n(c) Paper cups hold more volume\n(d) Plastic cups react chemically with hot water",
    "options": [
      "Paper cups are cheaper",
      "Paper is biodegradable and non-polluting upon decomposition",
      "Paper cups hold more volume",
      "Plastic cups react chemically with hot water"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Paper is biodegradable and non-polluting upon decomposition.",
    "explanation": "Disposable plastic cups persist indefinitely in the environment, clogging drains and releasing toxic microplastics. Paper cups are biodegradable cellulose broken down naturally by saprophytic bacteria.",
    "source": "NCERT Class 10 Page 263"
  },
  {
    "id": "sci_c13_q21",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 1,
    "type": "MCQ",
    "question": "Which trophic level in an aquatic ecosystem will accumulate the highest concentration of toxic mercury or DDT?\n(a) Phytoplankton (producers)\n(b) Zooplankton (primary consumers)\n(c) Small fish (secondary consumers)\n(d) Fish-eating birds / Hawks (top carnivores)",
    "options": [
      "Phytoplankton (producers)",
      "Zooplankton (primary consumers)",
      "Small fish (secondary consumers)",
      "Fish-eating birds / Hawks (top carnivores)"
    ],
    "correctOption": 3,
    "answer": "Option (d) is correct: Fish-eating birds / Hawks (top carnivores).",
    "explanation": "Because non-biodegradable chemicals biomagnify at each trophic link, the organism occupying the highest trophic level (top carnivore) accumulates the maximum concentration of poison in its fatty tissues.",
    "source": "CBSE 2023 Board Paper"
  },
  {
    "id": "sci_c13_q22",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 2,
    "type": "SA",
    "question": "What is an Ecosystem? Name its two primary structural components with two examples of each.",
    "answer": "(1) Definition: An ecosystem is a self-sustaining structural and functional unit of the biosphere comprising a community of living organisms interacting with their physical, chemical non-living environment.\n\n(2) Two Components:\n- Biotic Components (Living): Producers (green plants, algae) and Consumers (herbivores, carnivores, decomposers).\n- Abiotic Components (Non-living physical factors): Temperature, rainfall, sunlight, soil, humidity, and minerals.",
    "source": "NCERT Class 10 Page 256"
  },
  {
    "id": "sci_c13_q23",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 2,
    "type": "SA",
    "question": "What are Decomposers? State two critical ecological roles played by decomposers in maintaining equilibrium in the biosphere.",
    "answer": "(1) Definition: Microorganisms (saprophytic bacteria and fungi) that break down complex organic remains of dead plants and animal waste into simple inorganic nutrients.\n\n(2) Two Ecological Roles:\n- Natural Scavengers: Clean the earth's surface by decomposing dead carcasses and organic waste, preventing foul odors, disease outbreaks, and waste accumulation.\n- Nutrient Recycling: Replenish essential minerals (carbon, nitrogen, phosphorus) back into soil and air, making them available for autotrophic absorption by producers.",
    "source": "NCERT Class 10 Page 257"
  },
  {
    "id": "sci_c13_q24",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 2,
    "type": "SA",
    "question": "Differentiate between Biodegradable and Non-biodegradable waste substances with two examples of each.",
    "answer": "(1) Biodegradable Substances: Waste materials that can be broken down into simpler non-toxic substances by the biological enzymatic action of saprophytic bacteria and fungi over time.\nExamples: Fruit/vegetable peels, cow dung, paper, cotton.\n\n(2) Non-biodegradable Substances: Waste materials that cannot be broken down by biological microorganisms and persist unchanged in the biosphere for decades or centuries, polluting soil and water.\nExamples: Plastic bags, glass bottles, polythene, DDT.",
    "source": "NCERT Class 10 Page 256"
  },
  {
    "id": "sci_c13_q25",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 2,
    "type": "SA",
    "question": "What is the Ozone Layer? Why is it considered vital for the survival of life on Earth?",
    "answer": "(1) Ozone Layer: A protective gaseous shield of triatomic oxygen molecules ($O_3$) located in the stratosphere (15 to 30 km above Earth's surface).\n\n(2) Biological Vitality: It absorbs nearly 99% of lethal high-energy ultraviolet radiation (specifically UV-B and UV-C) emitted by the Sun. Unfiltered UV radiation causes skin cancer, cataract, suppression of the human immune system, and destroys photosynthetic phytoplankton in oceanic food chains.",
    "formula": "\\text{O}_3 + \\text{UV} ⟶ \\text{O}_2 + \\text{O}",
    "source": "NCERT Class 10 Page 261"
  },
  {
    "id": "sci_c13_q26",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 2,
    "type": "SA",
    "question": "What is a Food Web? Why is a food web more realistic and stable than an isolated food chain in nature?",
    "answer": "(1) Definition: A complex network of interconnected and cross-linked food chains operating within an ecological community.\n\n(2) Ecological Stability: In nature, an organism rarely feeds on just one single species. If a drought or disease wipes out one herbivore prey (e.g., rabbits), predators (e.g., foxes) can switch to alternative prey (mice, birds). This web-like redundancy prevents the collapse of the entire trophic community.",
    "source": "NCERT Class 10 Page 259"
  },
  {
    "id": "sci_c13_q27",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 2,
    "type": "SA",
    "question": "State Lindeman's 10 Percent Law. If 20,000 J of energy is available at the producer level in a food chain: Plants ⟶ Deer ⟶ Lion, calculate the energy transferred to the lion.",
    "answer": "(1) 10 Percent Law: In a food chain, only about 10% of the organic energy entering a trophic level is stored as biomass and transferred to the next trophic level; 90% is dissipated as metabolic heat during respiration or lost in excretion.\n\n(2) Numerical Calculation:\n- Producer (Plants) = 20,000 J\n- Primary Consumer (Deer) = $10\\% \\text{ of } 20,000\\text{ J} = 2,000\\text{ J}$\n- Secondary Consumer (Lion) = $10\\% \\text{ of } 2,000\\text{ J} = 200\\text{ J}$.\nTherefore, the lion receives 200 Joules of energy.",
    "formula": "E_{\\text{next}} = 0.10 \\times E_{\\text{current}}",
    "source": "NCERT Class 10 Page 258"
  },
  {
    "id": "sci_c13_q28",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 3,
    "type": "SA",
    "question": "Explain the formation and depletion of the stratospheric ozone layer:\n(a) Write the photochemical reactions for the formation of ozone.\n(b) Write the chemical reactions explaining how chlorofluorocarbons (CFCs) cause catalytic ozone destruction.\n(c) What was the historic mandate of the 1987 Montreal Protocol?",
    "answer": "(a) Ozone Formation in Stratosphere:\nHigh-energy solar UV radiation splits molecular oxygen ($O_2$) into free nascent oxygen atoms ($O$):\n$\\text{O}_2 \\xrightarrow{\\text{UV}} \\text{O} + \\text{O}$\nThese reactive free oxygen atoms combine with molecular oxygen to synthesize ozone:\n$\\text{O} + \\text{O}_2 ⟶ \\text{O}_3$ (Ozone)\n\n(b) Ozone Depletion by CFCs:\nCFCs (e.g. $CF_2Cl_2$) drift to the stratosphere where UV radiation photolyzes them, releasing free chlorine radicals ($Cl^\\bullet$):\n$\\text{CF}_2\\text{Cl}_2 \\xrightarrow{\\text{UV}} \\text{CF}_2\\text{Cl}^\\bullet + \\text{Cl}^\\bullet$\nThe chlorine radical catalytically destroys ozone in a self-perpetuating chain reaction:\n$\\text{Cl}^\\bullet + \\text{O}_3 ⟶ \\text{ClO}^\\bullet + \\text{O}_2$\n$\\text{ClO}^\\bullet + \\text{O} ⟶ \\text{Cl}^\\bullet + \\text{O}_2$\nA single chlorine radical can destroy over 100,000 ozone molecules before being deactivated.\n\n(c) Montreal Protocol (1987): An international environmental treaty brokered by UNEP that legally froze and phased out worldwide industrial production and consumption of ozone-depleting CFCs.",
    "source": "NCERT Class 10 Pages 261–262"
  },
  {
    "id": "sci_c13_q29",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 3,
    "type": "SA",
    "question": "Explain Biological Magnification with a concrete ecological example. Why do humans often suffer the most severe impact of this biomagnification?",
    "answer": "(1) Mechanism of Biological Magnification: When persistent, non-biodegradable pesticides (such as DDT) or toxic heavy metals (mercury, cadmium) are sprayed on crops or dumped in water, they are absorbed by producers (plants or aquatic algae). Because these toxins are lipid-soluble and cannot be excreted or metabolized by enzymes, their concentration increases geometrically at each higher trophic level.\n\n(2) Aquatic Example:\n- Water: 0.000003 ppm DDT\n- Phytoplankton: 0.04 ppm DDT\n- Small fish: 0.5 ppm DDT\n- Large fish: 2.0 ppm DDT\n- Fish-eating birds / Osprey: 25.0 ppm DDT (nearly a 10-million-fold accumulation, causing thin eggshells and chick death).\n\n(3) Human Vulnerability: Humans occupy the top apex trophic level in diverse terrestrial and aquatic food chains, consuming large volumes of animal meat, milk, and fish over a multi-decade lifespan, concentrating the highest cumulative toxic load in body fat, liver, and brain.",
    "source": "NCERT Class 10 Page 260"
  },
  {
    "id": "sci_c13_q30",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 3,
    "type": "SA",
    "question": "Why is the flow of energy in an ecosystem always unidirectional? What happens to the energy that is lost at each trophic level?",
    "answer": "(1) Unidirectional Energy Flow: Solar radiant energy captured by photosynthetic producers is converted into chemical bond energy in food. Herbivores eat producers, and carnivores eat herbivores.\n- The energy that is transferred to higher trophic levels can NEVER flow backward (carnivores cannot return energy to herbivores, and herbivores cannot return energy to plants).\n- Energy captured by autotrophs does not revert to the Sun.\n\n(2) Destination of Lost Energy: According to the Second Law of Thermodynamics, energy conversions are not 100% efficient. Approximately 90% of the energy consumed at each trophic level is expended in cellular respiration to power locomotion, maintain body temperature, and drive metabolic life functions. This energy is irreversibly dissipated into the surrounding atmosphere as low-grade heat energy, unavailable for biological work.",
    "source": "NCERT Class 10 Page 259"
  },
  {
    "id": "sci_c13_q31",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 3,
    "type": "SA",
    "question": "Discuss the solid waste disposal problem in urban metropolitan cities. Explain three modern eco-friendly waste management strategies:\n(a) Segregation at source\n(b) Composting and Biogas generation\n(c) Recycling and incineration",
    "answer": "The Problem: Rapid urbanization and plastic packaging generate millions of tons of municipal solid waste daily, overloading open landfills, polluting groundwater via toxic leachate, and generating greenhouse methane gas.\n\n(a) Segregation at Source: Separating household garbage into Green Bins (biodegradable organic food waste) and Blue Bins (non-biodegradable recyclables like plastic, metal, and glass) at the point of origin, ensuring efficient processing.\n\n(b) Composting & Biogas Plants: Biodegradable vegetable and agricultural wastes are decomposed aerobically into nutrient-rich organic compost (vermicomposting) or digested anaerobically in biogas reactors to generate clean methane fuel ($CH_4$) and slurry fertilizer.\n\n(c) Recycling & Sanitary Landfills/Incineration: Non-biodegradable plastics are shredded and recycled into pipes, polyester, or asphalt roads. Hospital bio-hazardous waste is incinerated at > 1000°C to destroy pathogens without ash contamination.",
    "source": "NCERT Class 10 Pages 262–264"
  },
  {
    "id": "sci_c13_q32",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 3,
    "type": "SA",
    "question": "In the following food chain: Plants ⟶ Grasshopper ⟶ Frog ⟶ Snake ⟶ Hawk:\n(a) Which organism has the maximum available energy?\n(b) Which organism has the minimum available energy?\n(c) If 50,000 kJ of solar energy is intercepted by plants, calculate the energy available to the frog.",
    "answer": "(a) Maximum Available Energy: Plants (Producers at the 1st trophic level), because all subsequent trophic levels lose ~90% of energy at each transfer.\n\n(b) Minimum Available Energy: Hawk (Apex consumer / Top carnivore at the 5th trophic level), receiving only the tiny fraction of energy surviving 4 consecutive 10% transfers.\n\n(c) Calculation for Frog:\n- Solar energy intercepted = 50,000 kJ.\n- Plants capture only 1% of solar energy:\n$E_{\\text{plants}} = 1\\% \\times 50,000\\text{ kJ} = 500\\text{ kJ}$.\n- Grasshopper (Primary Consumer) = $10\\% \\times 500\\text{ kJ} = 50\\text{ kJ}$.\n- Frog (Secondary Consumer) = $10\\% \\times 50\\text{ kJ} = 5\\text{ kJ}$.\nHence, the energy available to the frog is 5 kJ (or 5,000 Joules).",
    "formula": "E_{\\text{frog}} = 5\\text{ kJ}",
    "examinerNote": "Apply 1% rule from Sun to Plants, then 10% rule for animals.",
    "source": "CBSE 2023 Board Paper"
  },
  {
    "id": "sci_c13_q33",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 3,
    "type": "SA",
    "question": "What are the adverse environmental and ecological consequences of:\n(a) Burning plastic waste openly in neighborhoods.\n(b) Extensive spraying of synthetic chemical pesticides on agricultural fields.\n(c) Overuse of disposable plastic carry bags.",
    "answer": "(a) Burning Plastic Waste: Incomplete combustion of plastics (PVC, polystyrene) releases deadly carcinogenic toxic gases like dioxins, furans, and hydrogen chloride into the atmosphere, causing chronic respiratory diseases, lung damage, and acid fumes.\n\n(b) Pesticide Spraying: Synthetic organophosphates and organochlorines leach into irrigation runoff, poisoning nearby lakes and rivers. They kill beneficial earthworms and pollinating bees, enter aquatic food webs, and undergo biological magnification, accumulating in human food.\n\n(c) Plastic Bags Overuse: Plastic bags are non-biodegradable and persist for hundreds of years. They choke city sewage and drainage lines causing urban flooding, are swallowed by stray cattle causing fatal intestinal blockages, and degrade into hazardous microplastics that contaminate marine life.",
    "source": "CBSE 2024 Board Question"
  },
  {
    "id": "sci_c13_q34",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 3,
    "type": "SA",
    "question": "Explain why an aquarium is an artificial ecosystem that requires frequent human cleaning and maintenance, whereas a natural pond or lake is self-cleaning and self-sustaining.",
    "answer": "(1) Artificial Aquarium Ecosystem: An aquarium is a human-made, incomplete ecosystem. It generally lacks adequate populations of natural decomposers (saprophytic bacteria and fungi) and scavenger organisms. Fish excreta and uneaten food decay, producing toxic ammonia and nitrites which rapidly accumulate and poison the fish unless the water and filtration filters are cleaned regularly by humans.\n\n(2) Natural Pond/Lake Ecosystem: A natural pond contains a complete, balanced biotic community comprising diverse producers (phytoplankton, submerged plants), consumers (zooplankton, fish), and abundant benthic decomposers. Decomposers naturally break down dead organic matter into plant nutrients, recycling all wastes in an unbroken biogeochemical cycle without human intervention.",
    "source": "NCERT Class 10 Page 257"
  },
  {
    "id": "sci_c13_q35",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: Environmental scientists investigated heavy pesticide contamination in a freshwater lake adjacent to agricultural lands. Farmers had been heavily spraying an organochlorine pesticide on paddy fields. Laboratory analysis revealed the following pesticide concentrations:\n- Water: 0.02 ppm\n- Phytoplankton (Algae): 0.8 ppm\n- Herbivorous Fish: 5.0 ppm\n- Carnivorous Fish: 40.0 ppm\n- Fish-eating Osprey Birds: 1600.0 ppm\n\n(a) Name the biological phenomenon illustrated by these data.\n(b) Why does the concentration of pesticide increase progressively from phytoplankton to fish-eating birds?\n(c) Calculate the fold-increase in pesticide concentration from water to fish-eating birds.\n(d) How does high pesticide concentration affect the reproductive success of fish-eating birds?",
    "answer": "(a) Biological Phenomenon: Biological Magnification (Biomagnification).\n\n(b) Reason for Progressive Increase: The pesticide is a persistent, non-biodegradable chemical compound that is fat-soluble (lipophilic). It cannot be digested, metabolized, or excreted by organisms. Each predator must consume thousands of prey over its lifetime, concentrating the pesticide stored in all prey tissues into its own body fat.\n\n(c) Fold-Increase Calculation:\n$\\text{Fold Increase} = \\frac{\\text{Concentration in Osprey}}{\\text{Concentration in Water}} = \\frac{1600.0\\text{ ppm}}{0.02\\text{ ppm}} = 80,000\\text{ times}$.\nThe toxic pesticide concentration multiplies 80,000 times!\n\n(d) Reproductive Impact: Organochlorines interfere with calcium metabolism in female birds. They lay eggs with abnormally thin and brittle shells that crack prematurely under the mother's weight during incubation, causing devastating chick mortality and population collapse.",
    "formula": "\\text{Biomagnification Factor} = \\frac{1600}{0.02} = 80,000",
    "examinerNote": "Thinning of eggshells due to calcium interference is a key biological symptom of DDT biomagnification.",
    "source": "CBSE Official Sample Paper 2025"
  },
  {
    "id": "sci_c13_q36",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In the late 1980s, British Antarctic Survey scientists discovered a severe thinning of the stratospheric ozone layer over Antarctica, dubbed the 'Ozone Hole'. Satellite data confirmed that stratospheric chlorine concentrations had multiplied ten-fold due to industrial aerosol propellants and air-conditioning refrigerants.\n\n(a) What is the chemical formula of ozone and how does it protect the biosphere?\n(b) Write the chemical reactions explaining how a chlorofluorocarbon molecule acts as a catalyst in destroying stratospheric ozone.\n(c) Why was the ozone hole most pronounced over Antarctica rather than equatorial regions?\n(d) What international treaty was enacted in 1987 to halt this catastrophe?",
    "answer": "(a) Chemical Formula & Protection: Ozone is Triatomic Oxygen ($O_3$). It absorbs harmful high-frequency ultraviolet radiation (UV-B and UV-C) from the Sun, shielding living cells from DNA damage, mutations, skin cancer, and cataracts.\n\n(b) Catalytic Destruction Mechanism:\n1. UV photolysis of CFC releases free chlorine radical:\n$CF_2Cl_2 \\xrightarrow{\\text{UV}} CF_2Cl^\\bullet + Cl^\\bullet$\n2. Chlorine radical attacks ozone:\n$Cl^\\bullet + O_3 ⟶ ClO^\\bullet + O_2$\n3. Chlorine monoxide reacts with free atomic oxygen, regenerating the chlorine radical:\n$ClO^\\bullet + O ⟶ Cl^\\bullet + O_2$\nThe chlorine radical ($Cl^\\bullet$) emerges intact to attack another ozone molecule in a catalytic chain.\n\n(c) Antarctic Phenomenon: During the polar winter, extreme cold (-80°C) creates Polar Stratospheric Clouds (PSCs) and an isolated polar vortex. The ice crystals in PSCs provide unique catalytic surfaces that convert harmless chlorine reservoir compounds into active chlorine radicals, which burst out in spring sun.\n\n(d) International Treaty: The Montreal Protocol (1987), which froze and banned global production and consumption of CFCs.",
    "source": "CBSE 2023 Case-Based Question"
  },
  {
    "id": "sci_c13_q37",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In an ecological energy survey of a temperate grassland ecosystem, the solar radiation incident on the prairie was measured as 2,000,000 Joules over a test plot during a growing season.\n\n(a) How much energy will be captured by the prairie grasses through photosynthesis?\n(b) Calculate the energy transferred to the primary consumers (grasshoppers).\n(c) Calculate the energy transferred to the tertiary consumers (hawks) in the food chain: Grasses ⟶ Grasshoppers ⟶ Frogs ⟶ Hawks.\n(d) State the ecological reason why no 5th trophic level (quaternary consumers feeding on hawks) can exist in this grassland.",
    "answer": "(a) Energy Captured by Grasses (Producers):\nPlants capture only 1% of total incident solar energy:\n$E_{\\text{producers}} = 1\\% \\times 2,000,000\\text{ J} = 20,000\\text{ J}$.\n\n(b) Energy Transferred to Grasshoppers (Primary Consumers):\nBy the 10% law:\n$E_{\\text{herbivores}} = 10\\% \\times 20,000\\text{ J} = 2,000\\text{ J}$.\n\n(c) Energy Transferred along Food Chain:\n- Grasses: 20,000 J\n- Grasshoppers: 2,000 J\n- Frogs (Secondary Consumers): $10\\% \\times 2,000\\text{ J} = 200\\text{ J}$\n- Hawks (Tertiary Consumers): $10\\% \\times 200\\text{ J} = 20\\text{ J}$.\n\n(d) Why 5th Trophic Level Cannot Exist: If a 5th trophic level existed, it would receive only $10\\% \\text{ of } 20\\text{ J} = 2\\text{ Joules}$. This infinitesimal amount of energy is completely inadequate to compensate for the energy expended in hunting, searching for food, maintaining homeostasis, and reproduction.",
    "formula": "E_{\\text{hawk}} = 20\\text{ J}",
    "examinerNote": "Apply 1% rule at step 1, followed by consecutive 10% rules.",
    "source": "NCERT Class 10 Page 258"
  },
  {
    "id": "sci_c13_q38",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: Indian Railways historically used disposable plastic cups, which caused massive trackside litter. They experimented with unglazed clay cups ('kulhads') and subsequently transitioned to disposable paper cups.\n\n(a) What environmental problems were caused by disposable plastic cups?\n(b) Why was the large-scale use of clay cups (kulhads) discontinued?\n(c) Why are disposable paper cups considered the most eco-friendly alternative?\n(d) Explain what happens when biodegradable paper waste is properly composted.",
    "answer": "(a) Plastic Cups Hazard: Plastic is non-biodegradable and persists for centuries. Discarded plastic cups choked stormwater drains, formed toxic eye-sores along railway tracks, release harmful chemicals upon weathering, and kill wildlife that ingest them.\n\n(b) Disadvantage of Clay Kulhads: Making billions of clay cups daily required stripping massive amounts of fertile, nutrient-rich topsoil from agricultural lands and heating them in fuel-guzzling kilns, accelerating topsoil erosion and air pollution.\n\n(c) Superiority of Disposable Paper Cups: Paper is made from renewable plantation wood pulp. Paper cups are completely biodegradable and break down rapidly without leaving toxic microplastics or degrading fertile agricultural topsoil.\n\n(d) Composting Process: In a compost pit, saprophytic bacteria, fungi, and earthworms secrete cellulase enzymes that digest cellulose fibers of paper into carbon dioxide, water, and dark, rich organic humus that enriches agricultural soil.",
    "source": "NCERT Class 10 Page 263"
  },
  {
    "id": "sci_c13_q39",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 5,
    "type": "LA",
    "question": "Comprehensive Ecological Energetics and Food Webs:\n(a) What are Trophic Levels? Give an authentic example of a 4-step terrestrial food chain and a 4-step aquatic food chain, labeling each trophic level.\n(b) State and explain Lindeman's 10 Percent Law of Energy Transfer with an energy pyramid diagram description.\n(c) What percentage of solar energy falling on green leaves is converted into food energy by producers?\n(d) Why is the energy flow in an ecosystem always strictly unidirectional?",
    "answer": "(a) Trophic Levels & Examples:\n- Definition: Each feeding step or tier in a food chain representing the transfer of energy and nutrients is called a Trophic Level.\n- Terrestrial Food Chain:\n1. Grass (Producer, T1)\n2. Deer (Primary Consumer / Herbivore, T2)\n3. Tiger (Secondary Consumer / Carnivore, T3)\n- Aquatic Food Chain:\n1. Phytoplankton (Producers, T1)\n2. Zooplankton (Primary Consumers, T2)\n3. Small Fish (Secondary Consumers, T3)\n4. Shark / Whale / Pelican (Tertiary Consumers / Top Carnivores, T4)\n\n(b) Lindeman's 10 Percent Law:\n- Only about 10% of the energy available at a given trophic level is converted into new organic biomass and passed on to organisms at the next higher trophic level.\n- 90% of the energy is dissipated into the environment as metabolic heat (used for respiration, growth, repair, and locomotion) or lost in unconsumed material.\n- Energy Pyramid: Always upright with a broad producer base ($T_1$) that rapidly narrows through successive trophic tiers ($T_2, T_3, T_4$).\n\n(c) Solar Energy Capture by Producers: Green autotrophic plants capture ONLY about 1% of the total incident solar light energy falling on their leaves and convert it into chemical bond energy (glucose).\n\n(d) Unidirectionality of Energy: Energy flows in a one-way street: Sun ⟶ Producers ⟶ Herbivores ⟶ Carnivores. Energy captured by plants can never return to the sun; energy consumed by carnivores can never flow back to herbivores or plants. Dissipated metabolic heat is lost irreversibly to space.",
    "formula": "\\text{Sun} \\xrightarrow{1\\%} \\text{Producers} \\xrightarrow{10\\%} \\text{Herbivores} \\xrightarrow{10\\%} \\text{Carnivores}",
    "source": "CBSE Board 2024 Long Answer"
  },
  {
    "id": "sci_c13_q40",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 5,
    "type": "LA",
    "question": "Biological Magnification and Environmental Toxicology:\n(a) Define Biological Magnification. Explain with the help of a suitable aquatic food chain how the concentration of non-biodegradable pesticides accumulates at each successive trophic link.\n(b) Why do toxic chemicals achieve their highest concentration in human beings?\n(c) Can the concentration of pesticide be zero at the producer level in an agricultural ecosystem sprayed with chemicals? Justify.\n(d) Suggest two sustainable agricultural alternatives to chemical pesticides.",
    "answer": "(a) Biological Magnification Definition & Aquatic Flow:\n- Definition: The phenomenon by which non-biodegradable, lipid-soluble chemical contaminants (such as DDT, mercury, lead) increase progressively in concentration at each successive trophic level of a food chain.\n- Flow Example:\n1. Lake Water: Pesticide dissolved at 0.000003 ppm.\n2. Phytoplankton: Absorbs pesticide from water (0.04 ppm, ~1000-fold increase).\n3. Zooplankton: Feeds on millions of phytoplankton (0.2 ppm).\n4. Small Fish: Eats hundreds of zooplankton (2.0 ppm).\n5. Fish-eating Osprey: Eats numerous fish, accumulating 25.0 ppm in its body fat (nearly 10 million times the water concentration).\n\n(b) Human Vulnerability: Humans are omnivorous apex consumers at the very top of complex food webs, consuming grains, vegetables, milk, poultry, and fish. Because humans have a lifespan of 70+ years, cumulative biomagnification reaches maximum levels in human adipose tissue, liver, and mother's breast milk.\n\n(c) Pesticide Level at Producers: No, it can never be zero if pesticides are sprayed. Plants absorb pesticides from soil water via root hairs along with mineral nutrients, as well as absorbing sprayed residues through leaf stomata.\n\n(d) Two Sustainable Alternatives:\n1. Integrated Pest Management (IPM) using biological pest control (introducing natural predator insects like ladybird beetles to eat aphids).\n2. Organic farming using botanical bio-pesticides (neem oil extract, garlic spray, trichoderma) and crop rotation.",
    "source": "NCERT Class 10 Pages 260–261"
  },
  {
    "id": "sci_c13_q41",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 5,
    "type": "LA",
    "question": "Stratospheric Ozone Shield and Global Environmental Treaties:\n(a) What is Ozone? How does it differ from ordinary diatomic oxygen? Where is the ozone layer located in the atmosphere?\n(b) Describe the photochemical synthesis of ozone in the upper atmosphere with chemical equations.\n(c) Explain how synthetic Chlorofluorocarbons (CFCs) cause depletion of the ozone layer. Write the step-by-step chemical equations.\n(d) What are the harmful biological effects of ozone layer depletion on humans, terrestrial plants, and marine life?",
    "answer": "(a) Nature & Location of Ozone:\n- Ozone is a triatomic molecule composed of three oxygen atoms ($O_3$).\n- Unlike diatomic oxygen ($O_2$), which is odorless, life-sustaining, and essential for respiration, ozone is a pale blue gas with a pungent irritating odor and is a deadly poison at ground level.\n- Location: Stratosphere, situated between 15 km and 30 km above Earth's surface.\n\n(b) Photochemical Synthesis of Ozone:\nHigh-energy UV radiation from the sun photolytically cleaves oxygen molecules into free nascent oxygen atoms ($O$):\n$\\text{O}_2 \\xrightarrow{\\text{High-energy UV}} \\text{O} + \\text{O}$\nThese highly reactive atomic oxygen atoms combine with molecular oxygen to form ozone:\n$\\text{O} + \\text{O}_2 ⟶ \\text{O}_3$\n\n(c) Catalytic Ozone Depletion by CFCs:\n1. UV photolysis releases chlorine free radicals ($Cl^\\bullet$):\n$\\text{CF}_2\\text{Cl}_2 \\xrightarrow{\\text{UV}} \\text{CF}_2\\text{Cl}^\\bullet + \\text{Cl}^\\bullet$\n2. Chlorine radical reacts with ozone to form chlorine monoxide and oxygen:\n$\\text{Cl}^\\bullet + \\text{O}_3 ⟶ \\text{ClO}^\\bullet + \\text{O}_2$\n3. Chlorine monoxide reacts with free oxygen atom to regenerate the chlorine radical:\n$\\text{ClO}^\\bullet + \\text{O} ⟶ \\text{Cl}^\\bullet + \\text{O}_2$\nThis cyclic reaction allows a single chlorine radical to destroy upwards of 100,000 ozone molecules.\n\n(d) Harmful Biological Impacts:\n- Humans: Increased incidence of malignant skin melanoma, corneal cataracts, blindness, and suppression of immune response.\n- Terrestrial Plants: Retarded seedling growth, inhibition of photosynthesis, leaf chlorosis, and reduced agricultural crop yield.\n- Marine Life: Destroys microscopic phytoplankton living near the ocean surface, devastating the primary foundation of marine oceanic food chains.",
    "formula": "\\text{O}_2 \\xrightarrow{\\text{UV}} 2\\text{O};\\quad \\text{O} + \\text{O}_2 ⟶ \\text{O}_3",
    "source": "CBSE Board 2023 Long Answer"
  },
  {
    "id": "sci_c13_q42",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 5,
    "type": "LA",
    "question": "Waste Management and Ecological Sustainability:\n(a) Explain the concept of the 5 R's for sustainable environmental preservation: Refuse, Reduce, Reuse, Repurpose, and Recycle.\n(b) Describe three distinct methods of municipal solid waste management, stating the advantages and limitations of each:\n(i) Landfills\n(ii) Incineration\n(iii) Biogas and composting\n(c) How does lifestyle consumerism impact the volume and composition of waste generated in modern societies?",
    "answer": "(a) The 5 R's Hierarchy:\n1. Refuse: Say NO to non-biodegradable items like single-use plastic bags, straws, and disposable cutlery.\n2. Reduce: Minimize consumption of goods and electricity to conserve resources.\n3. Reuse: Use items repeatedly (e.g. glass jars, cloth shopping bags) rather than discarding them after one use.\n4. Repurpose: Give discarded items a new utility (e.g. cracked teacup used as plant pot).\n5. Recycle: Collect and mechanically process waste materials (paper, metals, plastic) to manufacture new products.\n\n(b) Three Waste Disposal Methods:\n(i) Sanitary Landfills:\n- Method: Waste is compacted and buried in engineered underground pits lined with impermeable plastic liners.\n- Advantage: Handles huge municipal volumes safely out of sight.\n- Limitation: Consumes valuable land, causes hazardous methane gas emissions and risk of groundwater leachate pollution.\n(ii) Incineration:\n- Method: Controlled high-temperature (> 1000°C) combustion of infectious medical/biohazard waste in closed chambers.\n- Advantage: Reduces waste volume by 90% and destroys all pathogens.\n- Limitation: High capital cost and releases toxic flue gases if not scrubbed.\n(iii) Biogas & Composting:\n- Method: Anaerobic microbial digestion of organic biodegradable waste to produce methane fuel and organic fertilizer.\n- Advantage: 100% natural, eco-friendly, and generates green energy and fertilizer.\n- Limitation: Can only process sorted organic biodegradable waste.\n\n(c) Consumerism Impact: Modern throw-away culture and excessive plastic packaging have drastically multiplied per capita waste generation. Modern waste contains high proportions of non-biodegradable synthetic polymers, electronic waste (e-waste), and toxic heavy metals that persist indefinitely in ecosystems.",
    "source": "NCERT Class 10 Pages 262–264"
  },

  {
    "id": "sci_c13_q43",
    "chapter": 13,
    "chapterName": "Our Environment",
    "marks": 5,
    "type": "LA",
    "question": "Ecosystem Stability and Global Environmental Change:\n(a) What is an ecological niche and how does biological diversity contribute to ecosystem stability and resilience?\n(b) Differentiate between natural and artificial ecosystems with two examples each.\n(c) What are microplastics? Trace their entry from cosmetic/packaging consumer products into oceanic trophic pyramids and explain their hazards to human health.\n(d) Why are food chains in nature rarely longer than four or five trophic steps?",
    "answer": "(a) Ecological Niche & Diversity:\n- Ecological Niche: The specific functional position, trophic role, and environmental habitat occupied by a species within an ecosystem.\n- Biodiversity & Stability: Diverse ecosystems possess multiple interlocking food chains within complex food webs. If one species experiences population decline due to disease or climate fluctuations, alternative predator-prey pathways compensate immediately, preventing ecosystem collapse.\n\n(b) Natural vs Artificial Ecosystems:\n- Natural Ecosystems: Naturally evolved, self-regulating biological communities that require no human inputs (e.g., Tropical rainforest, Natural lake, Coral reef).\n- Artificial Ecosystems: Human-engineered, fragile systems that require continuous human input of energy, chemical nutrients, water, and waste removal (e.g., Crop fields / Agroecosystem, Aquarium, Urban garden).\n\n(c) Microplastics in Food Webs:\n- Definition: Plastic particles smaller than 5 mm resulting from breakdown of larger plastics or manufactured microbeads in exfoliants.\n- Trophic Entry: Household drain runoff carries microbeads to rivers and oceans. Zooplankton and filter-feeding shellfish ingest microplastics mistaking them for plankton. Small fish eat shellfish, which are eaten by tuna, and ultimately consumed by humans.\n- Health Hazards: Microplastics act as sponges absorbing toxic polychlorinated biphenyls (PCBs) and heavy metals. When ingested, they disrupt endocrine hormones, induce chronic gut inflammation, and cause micro-lesions in cellular membranes.\n\n(d) Restriction to 4–5 Trophic Steps: According to the 10 Percent Law, 90% of energy is irreversibly dissipated as metabolic heat and waste at each feeding tier. Starting from 10,000 J at the producer level, only 1 J remains at the 5th level. Further trophic tiers cannot obtain enough chemical energy to sustain life.",
    "formula": "10\\% \\text{ Energy Transfer Limit}",
    "source": "CBSE 2024 Advanced Sample Paper"
  },
];
