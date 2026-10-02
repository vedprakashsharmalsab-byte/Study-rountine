import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH7_QUESTIONS: VaultQuestion[] = [
  // ==========================================
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON
  // ==========================================
  {
    id: "sci_c7_q1",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 1,
    type: "MCQ",
    question: "Which of the following is an example of vegetative propagation?\n(a) Spore formation in bread mould\n(b) Budding in yeast\n(c) Growing a new plant from a potato tuber\n(d) Fertilization in humans",
    options: [
      "Spore formation in bread mould",
      "Budding in yeast",
      "Growing a new plant from a potato tuber",
      "Fertilization in humans"
    ],
    correctOption: 2,
    answer: "Option (c): Growing a new plant from a potato tuber",
    steps: [
      "Vegetative propagation: asexual reproduction in plants using vegetative parts (root, stem, leaf).",
      "Potato tuber = modified underground stem; eyes of potato grow into new plants.",
      "Budding in yeast = asexual reproduction in unicellular organism (not vegetative propagation of plants)."
    ],
    explanation: "Potato tuber is a classic example of vegetative reproduction in plants using a modified stem.",
    formula: "\\text{Vegetative propagation: Root/Stem/Leaf} \\to \\text{New plant}",
    examinerNote: "Vegetative propagation is ASEXUAL. Spore formation (fungi) and budding (yeast) are also asexual but not vegetative propagation.",
    source: "NCERT Section 8.2 / Board 2023"
  },
  {
    id: "sci_c7_q2",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 1,
    type: "MCQ",
    question: "The contraceptive method that prevents sperm from reaching the egg by creating a physical barrier is:\n(a) Oral contraceptive pills\n(b) Condom\n(c) Loop/IUD\n(d) Vasectomy",
    options: ["Oral contraceptive pills", "Condom", "Loop/IUD", "Vasectomy"],
    correctOption: 1,
    answer: "Option (b): Condom",
    steps: [
      "Condom = physical barrier method. Prevents sperm from entering the female reproductive tract.",
      "Pills = hormonal method (prevent ovulation).",
      "IUD = copper device in uterus (prevents implantation).",
      "Vasectomy = surgical method (cuts vas deferens in males)."
    ],
    explanation: "Condoms provide physical barrier contraception AND protection from STDs (dual function).",
    formula: "\\text{Barrier methods: Condom, Diaphragm} \\to \\text{Physical prevention}",
    examinerNote: "NCERT specifically describes three types: barrier, hormonal, surgical. Know examples of each.",
    source: "NCERT Section 8.3 / Board 2022"
  },
  {
    id: "sci_c7_q3",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Regeneration is the ability of organisms to regrow lost body parts.\nReason (R): Hydra and Planaria can regenerate entire organisms from small body fragments.\n(a) Both A and R are true and R is the correct explanation\n(b) Both A and R are true but R is NOT the correct explanation\n(c) A is true but R is false\n(d) A is false but R is true",
    options: [
      "Both A and R are true and R is correct explanation",
      "Both A and R are true but R is NOT correct explanation",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a): Both true, R is correct explanation",
    steps: [
      "A: Regeneration = ability to regrow lost body parts. ✓ TRUE",
      "R: Hydra and Planaria ARE classic examples of organisms that can regenerate entire individuals from fragments. ✓ TRUE",
      "R correctly explains/illustrates A with specific examples."
    ],
    explanation: "Regeneration involves undifferentiated cells that specialize to regrow the whole organism.",
    examinerNote: "Regeneration ≠ general healing. It is a specialized form of asexual reproduction in lower organisms.",
    source: "NCERT Section 8.2 / Board 2024"
  },
  {
    id: "sci_c7_q4",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 1,
    type: "MCQ",
    question: "During binary fission in Amoeba, the number of daughter cells produced from one parent cell is:\n(a) 1\n(b) 2\n(c) 4\n(d) 8",
    options: ["1", "2", "4", "8"],
    correctOption: 1,
    answer: "Option (b): 2",
    steps: [
      "Binary fission = splitting of parent cell into TWO daughter cells.",
      "Amoeba undergoes binary fission: parent nucleus divides → parent cell splits into 2 equal halves.",
      "Both daughter cells are genetically identical to the parent."
    ],
    explanation: "Binary = two. One parent → two daughter cells. Most common in bacteria and Amoeba.",
    formula: "1 \\text{ cell} \\xrightarrow{\\text{binary fission}} 2 \\text{ cells}",
    examinerNote: "Multiple fission (as in Plasmodium) gives many daughter cells. Binary fission always gives exactly 2.",
    source: "NCERT Section 8.2"
  },
  {
    id: "sci_c7_q5",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 1,
    type: "MCQ",
    question: "Which of the following is responsible for transmission of genetic traits from parent to offspring in sexual reproduction?\n(a) Cytoplasm\n(b) Cell membrane\n(c) DNA\n(d) Ribosome",
    options: ["Cytoplasm", "Cell membrane", "DNA", "Ribosome"],
    correctOption: 2,
    answer: "Option (c): DNA",
    steps: [
      "DNA (Deoxyribonucleic acid) contains all genetic information.",
      "During reproduction, DNA is copied and passed from parent to offspring.",
      "In sexual reproduction, gametes carry half the DNA from each parent."
    ],
    explanation: "DNA is the hereditary material that carries genes (genetic traits) from generation to generation.",
    formula: "\\text{Parent DNA} \\to \\text{Replication} \\to \\text{Offspring DNA}",
    examinerNote: "Sexual reproduction combines DNA from two parents → more variation than asexual reproduction.",
    source: "NCERT Section 8.1"
  },

  // ==========================================
  // SECTION B: 2-MARK VSA
  // ==========================================
  {
    id: "sci_c7_q6",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 2,
    type: "VSA",
    question: "Define reproduction. Why is reproduction considered essential for the continuation of life?",
    answer: "Reproduction is the biological process of producing new individuals of the same species from existing organisms.",
    steps: [
      "Definition: Reproduction is the process by which organisms produce offspring of their own kind.",
      "It is essential because:",
      "1. It maintains the continuity of a species — without reproduction, species would become extinct.",
      "2. It allows genetic variation (in sexual reproduction) for evolution and adaptation.",
      "3. It ensures the survival of life on Earth across generations."
    ],
    explanation: "Reproduction is a life process critical for species survival and evolutionary continuity.",
    examinerNote: "Two distinct reasons needed for 2 marks. Continuity + variation/adaptation are the key reasons.",
    source: "NCERT Section 8.1"
  },
  {
    id: "sci_c7_q7",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 2,
    type: "VSA",
    question: "Distinguish between sexual and asexual reproduction with one example each.",
    answer: "Sexual: involves two parents, gamete fusion, variation. Asexual: one parent, no gametes, offspring identical to parent.",
    steps: [
      "SEXUAL REPRODUCTION:",
      "- Involves two parents (male and female gametes).",
      "- Fusion of gametes (fertilization) → offspring have DNA from both parents.",
      "- Offspring show genetic variation.",
      "- Example: Reproduction in humans, flowering plants.",
      "ASEXUAL REPRODUCTION:",
      "- Single parent organism.",
      "- No fusion of gametes.",
      "- Offspring genetically identical to parent (clones).",
      "- Example: Binary fission in Amoeba, budding in Hydra."
    ],
    explanation: "Key difference: gamete fusion (sexual) vs no gamete fusion (asexual). Variation vs uniformity.",
    examinerNote: "Tabular format preferred. Include example for each type.",
    source: "NCERT Section 8.2 / Board 2022"
  },

  // ==========================================
  // SECTION C: 3-MARK SA
  // ==========================================
  {
    id: "sci_c7_q8",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 3,
    type: "SA",
    question: "What is pollination? Distinguish between self-pollination and cross-pollination.",
    answer: "Pollination is transfer of pollen from anther to stigma. Self = same flower/plant; Cross = different plants.",
    steps: [
      "Pollination: Transfer of pollen grains from the anther (male part) of a flower to the stigma (female part).",
      "Self-Pollination:",
      "- Pollen transferred from anther to stigma of the SAME flower or another flower on the SAME plant.",
      "- No genetic variation in offspring.",
      "- Disadvantage: reduces adaptability over time.",
      "Cross-Pollination:",
      "- Pollen transferred from anther of one plant to stigma of a DIFFERENT plant of the same species.",
      "- Involves agents: wind, water, insects, birds.",
      "- Produces genetic variation → better adaptability."
    ],
    explanation: "Pollination is the first step in sexual reproduction of flowering plants. Cross-pollination gives variation.",
    formula: "\\text{Anther} \\to \\text{Pollen} \\to \\text{Stigma} \\to \\text{Fertilization}",
    examinerNote: "Define pollination first, then distinguish the two types clearly.",
    source: "NCERT Section 8.3 / Board 2021"
  },
  {
    id: "sci_c7_q9",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 3,
    type: "SA",
    question: "Describe the process of double fertilization in flowering plants.",
    answer: "In double fertilization, one sperm fuses with egg (syngamy) and another fuses with polar nuclei (triple fusion).",
    steps: [
      "1. Pollen grain germinates on stigma → forms pollen tube.",
      "2. Pollen tube grows down the style into the ovary → enters ovule through micropyle.",
      "3. Pollen tube carries 2 male gametes (sperm cells).",
      "4. First fertilization (Syngamy): One male gamete + egg cell → Zygote (2n) → develops into embryo.",
      "5. Second fertilization (Triple fusion): Second male gamete + 2 polar nuclei (2n total) → Primary endosperm nucleus (3n) → develops into endosperm (food for embryo).",
      "This process where BOTH male gametes participate in fertilization is called DOUBLE FERTILIZATION."
    ],
    explanation: "Double fertilization is unique to angiosperms (flowering plants). Produces embryo + endosperm simultaneously.",
    formula: "\\text{Sperm}_1 + \\text{Egg} \\to \\text{Zygote (2n)}, \\quad \\text{Sperm}_2 + \\text{Polar nuclei} \\to \\text{Endosperm (3n)}",
    examinerNote: "Board 5-mark question sometimes. Terms: syngamy, triple fusion, endosperm, zygote. Must use correct terminology.",
    source: "NCERT Section 8.3 / Board 2023"
  },

  // ==========================================
  // SECTION D: 5-MARK LA
  // ==========================================
  {
    id: "sci_c7_q10",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 5,
    type: "LA",
    question: "Describe the human male reproductive system with a labeled diagram. Name the important organs and state the function of each.",
    answer: "Male reproductive system: testes, vas deferens, seminal vesicles, prostate, penis.",
    steps: [
      "1. Testes (pair): Primary male reproductive organs. Located in scrotal sac OUTSIDE the body (cooler temperature for sperm survival). Produce sperms (spermatogenesis) and male hormone testosterone.",
      "2. Epididymis: Coiled tube on top of testes where sperms mature and are stored.",
      "3. Vas Deferens (Sperm duct): Carries sperms from epididymis to urethra.",
      "4. Seminal Vesicles: Secretes fluid rich in fructose → nourishes and activates sperms.",
      "5. Prostate Gland: Secretes alkaline fluid → neutralizes acidic pH of urethra for sperm survival.",
      "6. Urethra: Common passage for both urine and semen (not simultaneously).",
      "7. Penis: Copulatory organ; delivers sperms into female reproductive tract."
    ],
    explanation: "Male reproductive system: sperm production (testes) → storage (epididymis) → transport (vas deferens) → delivery (penis).",
    formula: "\\text{Testes} \\to \\text{Epididymis} \\to \\text{Vas Deferens} \\to \\text{Urethra} \\to \\text{Penis}",
    examinerNote: "Draw labeled diagram: show testes in scrotum, epididymis, vas deferens, seminal vesicle, prostate, urethra, penis.",
    source: "NCERT Section 8.3 / Board 2022, 2024"
  },

  // ==========================================
  // SECTION E: CASE STUDY (4 MARKS)
  // ==========================================
  {
    id: "sci_c7_q11",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 4,
    type: "Case Study",
    question: "Bread mould (Rhizopus) reproduces by forming spores. A biologist observed that when conditions are unfavorable, Rhizopus forms a thick-walled structure.\n\n(i) [1M] Name the mode of reproduction in Rhizopus.\n(ii) [1M] Name the thick-walled structure formed during unfavorable conditions.\n(iii) [2M] Explain how spores help in the survival and reproduction of organisms like Rhizopus.",
    answer: "(i) Spore formation. (ii) Cyst. (iii) Spores are light, have thick walls, survive harsh conditions, spread by air, germinate when conditions improve.",
    steps: [
      "(i) Rhizopus reproduces by SPORE FORMATION (asexual).",
      "(ii) During unfavorable conditions, Rhizopus forms CYSTS (thick-walled dormant structures).",
      "(iii) Role of spores in survival and reproduction:",
      "- Spores are very small and light → easily dispersed by wind to new locations.",
      "- Each spore has a thick protective wall → can survive extreme temperatures, drought, and lack of nutrients.",
      "- Under favorable conditions, the spore germinates → grows into a new organism.",
      "- Millions of spores produced at once → ensures at least some survive and reproduce."
    ],
    explanation: "Spore formation combines survival (resistant thick wall) with dispersal (lightweight) for reproduction.",
    formula: "\\text{Parent Rhizopus} \\to \\text{Sporangia} \\to \\text{Spores} \\xrightarrow{\\text{wind}} \\text{New organism}",
    examinerNote: "Two key spore advantages: thick wall (survival) + lightweight (dispersal). Must mention BOTH.",
    source: "NCERT Section 8.2 / Board 2024"
  },

  // ==========================================
  // ADDITIONAL PYQs
  // ==========================================
  {
    id: "sci_c7_q12",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 3,
    type: "SA",
    question: "What are the advantages of sexual reproduction over asexual reproduction?",
    answer: "Sexual reproduction provides genetic variation, better adaptability, and evolutionary advantage.",
    steps: [
      "1. Genetic Variation: Sexual reproduction combines DNA from two parents → offspring genetically unique from parents and siblings. Asexual reproduction produces clones (identical).",
      "2. Better Adaptability: Genetic variation enables populations to adapt to changing environments. Asexual populations are all equally vulnerable to the same disease or environment change.",
      "3. Evolutionary Advantage: Variation provides raw material for natural selection → drives evolution of new species.",
      "4. Eliminates harmful mutations: In sexual reproduction, harmful recessive mutations may be masked by dominant alleles from the other parent."
    ],
    explanation: "Sexual reproduction sacrifices reproductive efficiency for genetic variation — critical for evolution.",
    examinerNote: "Board expects at least 3 advantages. Variation, adaptability, and evolution are the top 3.",
    source: "NCERT Section 8.1 / Board 2022"
  },
  {
    id: "sci_c7_q13",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 2,
    type: "VSA",
    question: "Why do testes in humans lie outside the abdominal cavity? What is the organ that contains the testes called?",
    answer: "Testes lie outside in the scrotum because sperm production requires a temperature 2-3°C lower than body temperature.",
    steps: [
      "Testes are located outside the abdominal cavity in a pouch called the SCROTUM.",
      "Sperm formation (spermatogenesis) requires a temperature 2–3°C LOWER than normal body temperature (37°C).",
      "The scrotum maintains this cooler temperature → essential for viable sperm production.",
      "If testes were inside the body, higher temperature would damage sperm."
    ],
    explanation: "Scrotum provides a thermostatic environment for sperm production at slightly lower temperature.",
    formula: "T_{spermatogenesis} = T_{body} - 2\\text{–}3°C",
    examinerNote: "This is a very common 2-mark board question. Reason must be: 'lower temperature needed for sperm production'.",
    source: "NCERT Section 8.3 / Board 2021, 2023"
  }
];
