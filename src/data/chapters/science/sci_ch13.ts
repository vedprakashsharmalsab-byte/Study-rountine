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
  }
];
