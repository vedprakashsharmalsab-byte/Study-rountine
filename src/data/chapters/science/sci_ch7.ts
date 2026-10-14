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
    question: "Which of the following is an example of vegetative propagation?\n(a) Spore formation in bread mould\n(b) Budding in yeast\n(c) Growing a new plant from a potato tuber eye\n(d) Fertilization in humans",
    options: [
      "Spore formation in bread mould",
      "Budding in yeast",
      "Growing a new plant from a potato tuber eye",
      "Fertilization in humans"
    ],
    correctOption: 2,
    answer: "Option (c): Growing a new plant from a potato tuber eye",
    steps: [
      "Vegetative propagation is an asexual mode of reproduction where new plantlets develop from vegetative structures (root, stem, or leaf).",
      "Potato tuber is a modified underground storage stem possessing axillary buds ('eyes') that sprout into independent plants.",
      "Budding in yeast and sporulation in fungi are non-vegetative asexual modes."
    ],
    explanation: "Potato eyes are vegetative nodal buds capable of developing roots and shoots under moist conditions.",
    formula: "\\text{Vegetative Organ (Stem, Root, Leaf)} \\to \\text{Independent Daughter Plant}",
    examinerNote: "Vegetative propagation yields genetically identical clones of the parent plant.",
    source: "NCERT Section 7.2.5 / Board 2023"
  },
  {
    id: "sci_c7_q2",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 1,
    type: "MCQ",
    question: "The contraceptive method that prevents sperm from reaching the ovum while simultaneously providing protection against Sexually Transmitted Infections (STIs) like Syphilis and HIV is:\n(a) Oral contraceptive pills\n(b) Condom\n(c) Copper-T (IUD)\n(d) Tubectomy",
    options: [
      "Oral contraceptive pills",
      "Condom",
      "Copper-T (IUD)",
      "Tubectomy"
    ],
    correctOption: 1,
    answer: "Option (b): Condom",
    steps: [
      "Condoms act as a mechanical barrier preventing seminal fluids from contacting vaginal mucosal membranes.",
      "Because there is no mucosal or fluid contact, condoms are the only contraceptive method that provides dual protection: contraception and STI shielding.",
      "Pills, Copper-T, and tubectomy prevent pregnancy but offer zero defense against bacterial or viral STIs."
    ],
    explanation: "Mechanical barrier methods (condoms) prevent fluid transmission, preventing STIs and fertilization.",
    formula: "\\text{Mechanical Barrier} \\implies \\text{Contraception} + \\text{STI Prevention}",
    examinerNote: "Frequently tested board concept: Only barrier methods prevent sexually transmitted infections.",
    source: "NCERT Section 7.3.3 / Board 2022"
  },
  {
    id: "sci_c7_q3",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Regeneration is not identical to genuine reproduction.\nReason (R): Most multicellular organisms cannot simply be cut into pieces to reproduce, as they possess complex organ-level cellular organization.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is NOT the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a): Both A and R are true and R is the correct explanation of A",
    steps: [
      "Assertion is TRUE: Regeneration is primarily a morphological repair mechanism using specialized totipotent neoblast cells.",
      "Reason is TRUE: Complex multicellular organisms have tissues and organs located at specific sites; they cannot regenerate a whole organism from detached parts.",
      "Reason directly explains why regeneration cannot serve as the standard reproductive strategy for complex organisms."
    ],
    explanation: "Regeneration relies on specialized cells proliferating in simple organisms like Planaria and Hydra.",
    examinerNote: "NCERT explicitly distinguishes between regeneration (accidental repair) and reproduction (autonomous propagation).",
    source: "NCERT Section 7.2.3 / Board 2024"
  },
  {
    id: "sci_c7_q4",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 1,
    type: "MCQ",
    question: "In Leishmania (the protozoan parasite causing Kala-azar), binary fission occurs:\n(a) In any arbitrary plane\n(b) In a definite longitudinal orientation in relation to the whip-like flagellum\n(c) Transversely across the cell\n(d) Only through multiple fission inside a cyst",
    options: [
      "In any arbitrary plane",
      "In a definite longitudinal orientation in relation to the whip-like flagellum",
      "Transversely across the cell",
      "Only through multiple fission inside a cyst"
    ],
    correctOption: 1,
    answer: "Option (b): In a definite longitudinal orientation in relation to the whip-like flagellum",
    steps: [
      "Amoeba lacks fixed polarity and splits across any plane during binary fission.",
      "Leishmania has a whip-like flagellum at one end, dictating binary fission strictly in a longitudinal plane relative to this structure.",
      "Multiple fission occurs in Plasmodium, not Leishmania."
    ],
    explanation: "Leishmania undergoes longitudinal binary fission due to its specialized whip-like cellular polarity.",
    formula: "\\text{Leishmania} \\to \\text{Definite Longitudinal Binary Fission}",
    examinerNote: "Contrast Amoeba (irregular plane) vs Leishmania (definite longitudinal orientation).",
    source: "NCERT Section 7.2.1 / Board 2023"
  },
  {
    id: "sci_c7_q5",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 1,
    type: "MCQ",
    question: "During sexual reproduction, which macromolecule undergoes replication and is transmitted from parents to offspring to determine hereditary characteristics?\n(a) Ribonucleic acid (RNA)\n(b) Adenosine triphosphate (ATP)\n(c) Deoxyribonucleic acid (DNA)\n(d) Phospholipid polymers",
    options: [
      "Ribonucleic acid (RNA)",
      "Adenosine triphosphate (ATP)",
      "Deoxyribonucleic acid (DNA)",
      "Phospholipid polymers"
    ],
    correctOption: 2,
    answer: "Option (c): Deoxyribonucleic acid (DNA)",
    steps: [
      "DNA in the cell nucleus is the informational storage database for protein synthesis.",
      "Before cellular division, DNA replication generates two copies, each paired with cellular apparatus.",
      "Subtle biochemical errors during DNA replication introduce the genetic variations vital for evolutionary adaptation."
    ],
    explanation: "DNA replication is the basic event of reproduction; gametes unite maternal and paternal DNA.",
    formula: "\\text{DNA Replication} \\implies \\text{Blueprint Inheritance} + \\text{Genetic Variation}",
    examinerNote: "Inaccurate DNA copying generates structural variations; accurate copying preserves species body design.",
    source: "NCERT Section 7.1"
  },
  {
    id: "sci_c7_q6",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 1,
    type: "MCQ",
    question: "In the bread mould Rhizopus, reproduction occurs through specialized aerial structures consisting of knob-like blobs containing microscopic reproductive cells. These knobs and cells are:\n(a) Conidia and buds\n(b) Sporangia and spores\n(c) Hyphae and cysts\n(d) Anthers and pollen",
    options: [
      "Conidia and buds",
      "Sporangia and spores",
      "Hyphae and cysts",
      "Anthers and pollen"
    ],
    correctOption: 1,
    answer: "Option (b): Sporangia and spores",
    steps: [
      "The thread-like vegetative structures of Rhizopus are non-reproductive hyphae.",
      "The tiny upright stems bear knob-like blobs called sporangia.",
      "Inside sporangia, thousands of thick-walled spores develop, which are released when the sporangial wall ruptures."
    ],
    explanation: "Sporangia are the spore-containing capsules in Rhizopus; spores germinate upon moist bread.",
    formula: "\\text{Sporangium} \\to \\text{Thick-walled Spores released} \\to \\text{Hyphal Mycelium}",
    examinerNote: "Remember: Hyphae are vegetative structures; sporangia are reproductive.",
    source: "NCERT Section 7.2.6 / Board 2024"
  },
  {
    id: "sci_c7_q7",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Intrauterine contraceptive devices like Copper-T prevent fertilization.\nReason (R): Copper-T is placed in the fallopian tube to block the passage of the ovum.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is NOT the correct explanation of A\n(c) A is true but R is false\n(d) Both A and R are false",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "Both A and R are false"
    ],
    correctOption: 3,
    answer: "Option (d): Both A and R are false",
    steps: [
      "Assertion is FALSE: Copper-T is placed inside the UTERUS (not fallopian tube) and its primary mechanism is suppressing sperm motility and preventing IMPLANTATION of the blastocyst.",
      "Reason is FALSE: Copper-T is never placed in the fallopian tube; surgical tubectomy is performed on fallopian tubes.",
      "Both statements are factually incorrect."
    ],
    explanation: "Copper-T is an Intra-Uterine Device placed in the uterus. It prevents implantation and impairs sperm motility.",
    examinerNote: "IUCD = Intra-UTERINE Contraceptive Device. Its location is strictly the uterus.",
    source: "NCERT Section 7.3.3"
  },
  {
    id: "sci_c7_q8",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 1,
    type: "MCQ",
    question: "Which of the following pairs of flowering plants contains unisexual flowers?\n(a) Hibiscus and Mustard\n(b) Papaya and Watermelon\n(c) Rose and Petunia\n(d) Sunflower and Lily",
    options: [
      "Hibiscus and Mustard",
      "Papaya and Watermelon",
      "Rose and Petunia",
      "Sunflower and Lily"
    ],
    correctOption: 1,
    answer: "Option (b): Papaya and Watermelon",
    steps: [
      "Unisexual flowers contain either stamens (male) or carpels (female), but never both in the same flower.",
      "NCERT standard examples: Papaya and Watermelon bear unisexual flowers.",
      "Hibiscus and Mustard are classic examples of bisexual flowers containing both stamens and carpels."
    ],
    explanation: "Papaya and Watermelon bear unisexual flowers requiring cross-pollination for fertilization.",
    formula: "\\text{Unisexual} = \\text{Stamen OR Carpel (Papaya, Watermelon)}",
    examinerNote: "Memorize both NCERT pairs: Bisexual = Mustard, Hibiscus. Unisexual = Papaya, Watermelon.",
    source: "NCERT Section 7.3.1 / Board 2022"
  },
  {
    id: "sci_c7_q9",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Testes in human males descend into the scrotum located outside the abdominal cavity.\nReason (R): Formation of viable sperms requires a local temperature 2 to 2.5°C lower than normal internal body temperature.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is NOT the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a): Both A and R are true and R is the correct explanation of A",
    steps: [
      "Assertion is TRUE: The testes reside in the extra-abdominal scrotal sac.",
      "Reason is TRUE: Spermatogenesis is thermolabile and requires a temperature of ~34.5°C to 35°C (2–2.5°C below core body temperature of 37°C).",
      "Reason directly justifies the evolutionary anatomical position of the scrotum."
    ],
    explanation: "Scrotum functions as a biological thermostat, maintaining lower temperature necessary for viable sperm production.",
    examinerNote: "Classic 1-mark board assertion. The temperature difference is precisely 2–2.5°C.",
    source: "NCERT Section 7.3.2 / Board 2024"
  },

  // ==========================================
  // SECTION B: 2-MARK VSA
  // ==========================================
  {
    id: "sci_c7_q10",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 2,
    type: "VSA",
    question: "Define reproduction. State two reasons why reproduction is essential for living organisms despite not being necessary for individual survival.",
    answer: "Reproduction is the biological process by which existing living organisms produce new individuals of their own species.",
    steps: [
      "Definition: Biological process of generating offspring of the same kind.",
      "Reason 1 (Continuity of Species): It ensures the survival and continuity of a species over generations, preventing its extinction.",
      "Reason 2 (Evolutionary Variation): In sexual reproduction, it introduces genetic variation into the gene pool, enabling populations to adapt to changing environmental conditions."
    ],
    explanation: "Reproduction ensures continuity of species across generations and fuels evolutionary adaptation.",
    examinerNote: "State continuity of species + introduction of genetic variation for 2 full marks.",
    source: "NCERT Section 7.1"
  },
  {
    id: "sci_c7_q11",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 2,
    type: "VSA",
    question: "Differentiate between Sexual and Asexual Reproduction on the basis of: (a) Number of parents involved, and (b) Extent of genetic variation in offspring.",
    answer: "(a) Number of parents: Asexual involves a single parent; Sexual involves two parents of opposite sexes.\n(b) Genetic variation: Asexual produces genetically identical clones; Sexual produces significant genetic variation due to recombination.",
    steps: [
      "Parameter 1 (Parents): Asexual = 1 parent (no gamete fusion); Sexual = 2 parents (fusion of male and female gametes).",
      "Parameter 2 (Variation): Asexual = minimal variation (only minor copying errors); Sexual = high genetic variation (maternal and paternal chromosome crossover)."
    ],
    explanation: "Sexual reproduction enhances genetic diversity; asexual reproduction prioritizes rapid reproduction of identical copies.",
    examinerNote: "Presenting differences in a clear two-column table earns full 2 marks.",
    source: "NCERT Section 7.2"
  },
  {
    id: "sci_c7_q12",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 2,
    type: "VSA",
    question: "What is the function of the following male reproductive glands in human beings?\n(a) Seminal Vesicles\n(b) Prostate Gland",
    answer: "(a) Seminal Vesicles secrete a nutrient-rich alkaline fluid containing fructose that nourishes and activates motile sperms.\n(b) Prostate Gland secretes a thin milky alkaline fluid that neutralizes acidity in the urethra and female reproductive tract, enhancing sperm motility and survival.",
    steps: [
      "Combined function: Their secretions together with sperms form semen, providing a liquid medium for easier sperm transport and protection against acidic environments."
    ],
    explanation: "Accessory reproductive glands provide nutritive medium, motility, and pH buffering for sperms.",
    formula: "\\text{Sperms} + \\text{Seminal fluid} + \\text{Prostatic fluid} = \\text{Semen}",
    examinerNote: "Must mention nourishment/fructose for seminal vesicles and neutralization of acidity/motility for prostate.",
    source: "NCERT Section 7.3.2 / Board 2023"
  },
  {
    id: "sci_c7_q13",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 2,
    type: "VSA",
    question: "What happens to the human female uterus when the released ovum is not fertilized by a sperm? What is this cyclical event termed?",
    answer: "If the released ovum is not fertilized, the thick, spongy uterine endometrium lining enriched with blood vessels breaks down. The degenerated tissue and unfertilized ovum are discharged through the vagina as blood and mucus. This monthly cycle is called Menstruation.",
    steps: [
      "1. Every month, the ovary releases one ovum and the uterus prepares for potential pregnancy by thickening its inner lining.",
      "2. When fertilization does not occur, the egg lives for about one day.",
      "3. Without hormonal support, the endometrium lining slowly breaks down and sheds.",
      "4. The discharge lasts for about 3 to 5 days, recurring approximately every 28 days."
    ],
    explanation: "Menstruation is the periodic shedding of the unfertilized ovum and vascularized uterine lining.",
    examinerNote: "Duration: 3–5 days; period: roughly 28 days. Explain both what sheds (lining + blood) and name (menstruation).",
    source: "NCERT Section 7.3.2 / Board 2021, 2024"
  },
  {
    id: "sci_c7_q14",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 2,
    type: "VSA",
    question: "What is the Placenta? State two critical physiological roles it plays in sustaining the developing human embryo inside the mother's womb.",
    answer: "The placenta is a specialized disc-like vascular tissue embedded in the uterine wall that connects the developing fetus to the mother via the umbilical cord.",
    steps: [
      "Structural feature: Contains villi on the embryo side surrounded by maternal blood spaces, providing a massive surface area for diffusion.",
      "Role 1 (Nutrient & Gas Delivery): Transports glucose, amino acids, and oxygen from the maternal blood to the growing embryo.",
      "Role 2 (Metabolic Waste Removal): Receives carbon dioxide, urea, and other nitrogenous wastes generated by the embryo and transfers them into the mother's blood for excretion."
    ],
    explanation: "Placenta functions as the fetus's respiratory lung and excretory kidney without mixing maternal and fetal blood.",
    examinerNote: "Emphasize that maternal and fetal blood streams do not mix directly; transport occurs by diffusion across villi.",
    source: "NCERT Section 7.3.2 / Board 2022, 2023"
  },
  {
    id: "sci_c7_q15",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 2,
    type: "VSA",
    question: "Differentiate between Binary Fission and Multiple Fission with one representative biological example for each.",
    answer: "(1) Binary Fission: A single parent cell divides into exactly TWO equal daughter cells under favorable conditions. Example: Amoeba / Paramecium.\n(2) Multiple Fission: A single parent cell divides into MANY daughter cells simultaneously inside a protective cyst during unfavorable conditions. Example: Plasmodium (malaria parasite).",
    steps: [
      "Binary fission involves nuclear karyokinesis followed by cytokinesis into 2 daughter cells.",
      "Multiple fission involves repeated nuclear division inside a cyst, followed by mass cytoplasmic partition into numerous daughter cells."
    ],
    explanation: "Binary = split into 2; Multiple = split into many. Examples: Amoeba vs Plasmodium.",
    examinerNote: "Make sure you cite the correct organism: Amoeba for binary, Plasmodium for multiple.",
    source: "NCERT Section 7.2.1 / Board 2023"
  },

  // ==========================================
  // SECTION C: 3-MARK SA
  // ==========================================
  {
    id: "sci_c7_q16",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 3,
    type: "SA",
    question: "What is pollination? Differentiate between Self-pollination and Cross-pollination. Name any two biotic and two abiotic agents of cross-pollination.",
    answer: "(a) Pollination is the transfer of pollen grains from the anther of a stamen to the receptive stigma of a carpel in a flower.\n(b) Differences:\n- Self-pollination: Pollen transferred to stigma of the same flower or another flower on the same plant. No genetic variation produced.\n- Cross-pollination: Pollen transferred to stigma of a flower on a different plant of the same species. Introduces significant genetic variation.\n(c) Agents:\n- Biotic agents: Insects (honeybees, butterflies), Birds, Bats.\n- Abiotic agents: Wind, Water.",
    steps: [
      "Define pollination clearly.",
      "Tabulate differences between self and cross-pollination.",
      "List 2 biotic agents and 2 abiotic agents."
    ],
    explanation: "Cross-pollination requires external vectors and generates genetic variation essential for plant survival.",
    formula: "\\text{Anther (Pollen)} \\xrightarrow{\\text{Wind, Water, Insects}} \\text{Stigma (Carpel)}",
    examinerNote: "0.5 mark for definition, 1.5 marks for difference table, 1 mark for agents.",
    source: "NCERT Section 7.3.1 / Board 2021, 2024"
  },
  {
    id: "sci_c7_q17",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 3,
    type: "SA",
    question: "Explain the phenomenon of Double Fertilization in flowering plants (Angiosperms). Mention the fate of the ovule and ovary after fertilization.",
    answer: "Double fertilization is the characteristic process in angiosperms where two separate fertilization events occur simultaneously within the embryo sac:\n1. Syngamy: One haploid male gamete fuses with the haploid egg cell to form a diploid Zygote (2n), which develops into the embryo.\n2. Triple Fusion: The second haploid male gamete fuses with the diploid secondary nucleus (two polar nuclei) to form the triploid Primary Endosperm Nucleus (3n, PEN), which develops into nutrient endosperm.\n\nPost-fertilization changes:\n- Ovule develops into a tough-coated **Seed**.\n- Ovary ripens and grows into a **Fruit**.",
    steps: [
      "Define Syngamy (Male gamete + Egg cell → Zygote 2n).",
      "Define Triple Fusion (Male gamete + 2 Polar nuclei → Endosperm 3n).",
      "State post-fertilization fate: Ovule → Seed, Ovary → Fruit."
    ],
    explanation: "Double fertilization ensures that nutrient-rich endosperm tissue develops only when fertilization succeeds.",
    formula: "\\text{Syngamy (2n Zygote)} + \\text{Triple Fusion (3n Endosperm)} = \\text{Double Fertilization}",
    examinerNote: "Crucial terms: Syngamy, Triple Fusion, Seed, Fruit. All four must appear.",
    source: "NCERT Section 7.3.1 / Board 2023"
  },
  {
    id: "sci_c7_q18",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 3,
    type: "SA",
    question: "State any three advantages of Vegetative Propagation practiced by commercial nursery horticulturists over growing plants from seeds.",
    answer: "(1) Clonal Preservation: Plants produced by vegetative propagation are genetically identical to the parent plant, preserving desirable characteristics such as fruit sweetness, disease resistance, and color uniformity.\n(2) Propagation of Seedless Varieties: It allows the propagation of commercially valuable plants that have lost the capacity to produce viable seeds (e.g., banana, seedless grapes, orange, jasmine, rose).\n(3) Faster Maturation & Early Yield: Plants raised vegetatively bear flowers and fruits much earlier in their lifecycle compared to plants grown from seeds.",
    steps: [
      "Point 1: Genetic fidelity / clonal uniformity.",
      "Point 2: Survival and commercial propagation of seedless varieties.",
      "Point 3: Quicker flowering, fruiting, and higher survival rate."
    ],
    explanation: "Vegetative propagation bypasses seed dormancy and guarantees identical commercial quality.",
    examinerNote: "Examples (banana, rose, seedless grapes) strengthen the answer.",
    source: "NCERT Section 7.2.5 / Board 2022"
  },
  {
    id: "sci_c7_q19",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 3,
    type: "SA",
    question: "Classify contraceptive methods into three distinct categories. Give one practical example and explain the mode of action for each category.",
    answer: "1. Mechanical Barrier Methods:\n- Example: Condoms (for males) or Diaphragms/Cervical caps (for females).\n- Mode of action: Prevents physical entry of sperms into the female genital tract, blocking fertilization, while preventing STIs.\n\n2. Chemical / Hormonal Methods:\n- Example: Oral Contraceptive Pills (containing synthetic estrogen/progestin).\n- Mode of action: Alter physiological hormone levels to inhibit ovulation (release of mature egg), so no fertilization can occur.\n\n3. Surgical Methods (Sterilization):\n- Example: Vasectomy in males (cutting and ligating vas deferens) or Tubectomy in females (cutting and ligating fallopian tubes).\n- Mode of action: Permanently blocks gamete transport routes, preventing sperm or ovum from reaching the site of fertilization.",
    steps: [
      "Categorize: Barrier, Chemical/Hormonal, Surgical.",
      "Provide specific example for each.",
      "State exact physiological mechanism for each."
    ],
    explanation: "Contraception targets different points: preventing contact (barrier), preventing ovulation (hormonal), or blocking transport (surgical).",
    examinerNote: "Vasectomy cuts vas deferens; Tubectomy cuts fallopian tubes. Do not mix them up.",
    source: "NCERT Section 7.3.3 / Board 2023, 2024"
  },
  {
    id: "sci_c7_q20",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 3,
    type: "SA",
    question: "What is Tissue Culture (Micropropagation)? Explain the major steps involved in this biotechnological technique and state two commercial applications.",
    answer: "(a) Tissue culture is the modern artificial vegetative technique of growing entire new plants from isolated cells or tissues excised from the growing tip of a plant in an artificial sterile nutrient medium.\n\n(b) Step-by-Step Procedure:\n1. Tissue Extraction: Small pieces of tissue (explants) are collected from the shoot apex of a plant.\n2. Callus Formation: Cells are placed in a nutrient medium containing growth hormones, where they divide rapidly to form an unorganized cellular mass called a **callus**.\n3. Differentiation: The callus is transferred to another medium containing specific ratios of auxins and cytokinins that induce shoot and root differentiation.\n4. Plantlet Hardening: Tiny plantlets are transferred to soil pots to grow into mature plants.\n\n(c) Applications:\n- Disease-free propagation: Allows production of virus-free plants from infected parent stocks (shoot apical meristem is free of viruses).\n- Rapid multiplication of ornamental plants (orchids, carnations, dahlia) in disease-free conditions all year round.",
    steps: [
      "Define tissue culture.",
      "Explain explant → Callus → Differentiation → Plantlets.",
      "State 2 commercial advantages: disease-free stock, year-round production."
    ],
    explanation: "Tissue culture exploits plant cell totipotency to produce thousands of virus-free clones rapidly.",
    examinerNote: "Must define the term 'callus' (unorganized mass of dividing cells).",
    source: "NCERT Section 7.2.5 (Box Item) / Board 2024"
  },

  // ==========================================
  // SECTION D: 5-MARK LA
  // ==========================================
  {
    id: "sci_c7_q21",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 5,
    type: "LA",
    question: "Human Male Reproductive System:\n(a) Name the primary sex organ in human males and state its two endocrine/exocrine functions.\n(b) Describe the pathway of sperms from the site of production to the exterior.\n(c) What is the function of the scrotum, seminal vesicles, and prostate gland?\n(d) Why is the urethra referred to as a urinogenital canal in males?",
    answer: "(a) Primary Sex Organ: Pair of **Testes**.\n- Exocrine function: Production of male gametes (sperms / spermatozoa).\n- Endocrine function: Secretion of the male steroid hormone **Testosterone**, which regulates spermatogenesis and develops secondary sexual characteristics at puberty.\n\n(b) Pathway of Sperms:\nSeminiferous tubules (inside testes) ⟶ Epididymis (storage & maturation) ⟶ Vas deferens (sperm duct) ⟶ Ejaculatory duct ⟶ Urethra ⟶ Exterior through Penis.\n\n(c) Specific Functions:\n- Scrotum: External pouch that maintains testes 2–2.5°C cooler than internal core body temperature, required for viable sperm formation.\n- Seminal Vesicles: Secrete viscous alkaline fluid rich in fructose, providing energy for sperm motility.\n- Prostate Gland: Secretes alkaline fluid that neutralizes urethral/vaginal acidity, activating sperms.\n\n(d) Urinogenital Canal:\nIn human males, the urethra serves as a single common conduit for both urine (from the urinary bladder) and semen (from reproductive ducts), though never simultaneously due to sphincter regulation.",
    steps: [
      "Part (a): Identify testes and state both sperm and testosterone functions.",
      "Part (b): Trace the anatomical route from testes to penis.",
      "Part (c): Detail scrotum thermostat, seminal vesicle nutrients, and prostate alkaline buffer.",
      "Part (d): Explain dual passage of urine and semen."
    ],
    explanation: "Male reproductive anatomy integrates gametogenesis, hormonal regulation, and dual-purpose transit channels.",
    examinerNote: "All 4 parts carry distinct marks. Labeling pathway clearly gets full marks.",
    source: "NCERT Section 7.3.2 / Board 2022, 2024"
  },
  {
    id: "sci_c7_q22",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 5,
    type: "LA",
    question: "Human Female Reproductive System and Gestation:\n(a) Name the organs where: (i) Ova are produced, (ii) Fertilization takes place, (iii) Implantation occurs.\n(b) Describe the sequence of events that take place from fertilization to the birth of a child.\n(c) What is the structure and function of the placenta?\n(d) Explain what happens if the released ovum is not fertilized.",
    answer: "(a) Identification:\n(i) Production of ova: **Ovaries** (pair of ovaries in lower abdomen).\n(ii) Site of fertilization: **Fallopian tube (Oviduct)**.\n(iii) Site of implantation: **Uterus (Womb endometrium)**.\n\n(b) Events from Fertilization to Birth:\n1. Fertilization: A single sperm fuses with the ovum in the ampulla of the fallopian tube to form a diploid Zygote.\n2. Cleavage: The zygote undergoes rapid mitotic division while moving down the oviduct, transforming into a hollow ball of cells called a blastocyst.\n3. Implantation: Approximately 6–7 days post-fertilization, the blastocyst embeds into the thickened, vascularized uterine lining.\n4. Embryonic Development: Over a gestation period of ~280 days (9 months / 40 weeks), organs develop supported by the placenta.\n5. Parturition: Strong rhythmic contractions of uterine muscular walls driven by oxytocin push the baby out through the cervix and vagina.\n\n(c) Placenta Structure & Function:\n- Structure: Specialized disc-shaped tissue embedded in uterine wall, connected to fetus via umbilical cord. Contains villi bathed in maternal blood pools.\n- Function: Facilitates diffusion of oxygen and glucose from mother to fetus, and transfers carbon dioxide and metabolic nitrogenous wastes (urea) from fetus to mother.\n\n(d) Fate of Unfertilized Ovum:\nIf the ovum remains unfertilized, it survives for approximately 24 hours. Without pregnancy hormones, the vascular uterine endometrium breaks down. Blood, mucus, and degenerated tissue shed as Menstruation over 3–5 days.",
    steps: [
      "Part (a): Identify Ovary, Fallopian tube, Uterus.",
      "Part (b): Step through Fertilization → Cleavage → Implantation → Gestation → Parturition.",
      "Part (c): Detail Placenta villi and diffusion roles.",
      "Part (d): Explain menstrual shedding."
    ],
    explanation: "Complete female reproductive cycle from conception through gestation, placental exchange, and menstruation.",
    examinerNote: "Emphasize that fertilization occurs in the fallopian tube, NOT in the uterus.",
    source: "NCERT Section 7.3.2 / Board 2023, 2024"
  },

  // ==========================================
  // SECTION E: CASE STUDY (4 MARKS)
  // ==========================================
  {
    id: "sci_c7_q23",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 4,
    type: "Case Study",
    question: "Case Study: In a microbiology practical, students left a moist slice of bread in a warm, dark Petri dish for four days. A white cottony mycelium rapidly spread over the bread surface, which later developed tiny black pinhead-like structures on upright stalks.\n\n(a) [1M] Name the organism growing on the bread and state its kingdom.\n(b) [1M] What are the thread-like structures and the black pinhead blobs called?\n(c) [2M] Explain how this organism reproduces through spores. Why are spores capable of surviving unfavorable environmental conditions?",
    answer: "(a) Organism: Rhizopus (commonly called Bread Mould); Kingdom: Fungi.\n(b) The thread-like vegetative filaments are called **Hyphae**; the black pinhead blobs are called **Sporangia** (singular: sporangium).\n(c) Reproduction & Survival:\n- Inside each mature sporangium, hundreds of tiny, lightweight spores are produced by asexual division. When the sporangial wall matures and bursts, spores are dispersed into the air by wind.\n- Survival mechanism: Each spore is enclosed within a thick, hard protective coat that shields it from dehydration, extreme heat, UV radiation, and nutrient deficiency. When a spore lands on a moist, nutrient-rich substrate, it germinates into a new hypha.",
    steps: [
      "Part (a): Identify Rhizopus / Bread Mould.",
      "Part (b): Distinguish vegetative hyphae from reproductive sporangia.",
      "Part (c): Detail sporogenesis, aerial dispersal, and thick-walled survival mechanism."
    ],
    explanation: "Rhizopus spore formation combines survival (thick cyst wall) with dispersal (lightweight airborne spores).",
    examinerNote: "Two marks in part (c): 1 mark for reproduction process, 1 mark for thick protective coat explanation.",
    source: "NCERT Section 7.2.6 / CBSE Sample Paper 2024"
  },
  {
    id: "sci_c7_q24",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 4,
    type: "Case Study",
    question: "Case Study: India has a population exceeding 1.4 billion. Public health campaigns actively promote family planning, reproductive health education, and maternal healthcare to balance demographic growth and safeguard women's health.\n\n(a) [1M] What is the primary difference between a Vasectomy and a Tubectomy?\n(b) [1M] Name two bacterial sexually transmitted infections and one viral STI.\n(c) [2M] Why is female foeticide a severe social crime? What statutory legislative measure has the Government of India enacted to prevent pre-natal sex determination?",
    answer: "(a) Vasectomy is the surgical contraception in males where the vas deferens is cut and tied to prevent sperm transfer into semen. Tubectomy is the surgical contraception in females where the fallopian tubes are cut and tied to prevent ovum transport.\n(b) Bacterial STIs: Gonorrhoea and Syphilis. Viral STI: AIDS (caused by HIV) / Genital Warts (caused by HPV).\n(c) Female Foeticide & Legislation:\n- Female foeticide (selective abortion of female fetuses) leads to a severely skewed, unnatural sex ratio in society, fueling gender crimes, human trafficking, and demographic imbalances.\n- Legislative measure: The Government of India enacted the **Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act**, strictly prohibiting the determination and disclosure of the fetal sex using ultrasound or amniocentesis.",
    steps: [
      "Part (a): Contrast vasectomy (vas deferens in males) with tubectomy (fallopian tubes in females).",
      "Part (b): List bacterial (Gonorrhoea, Syphilis) and viral (AIDS, Hepatitis B, HPV) STIs.",
      "Part (c): Explain demographic impact of skewed sex ratio and cite the PCPNDT Act."
    ],
    explanation: "Reproductive health encompasses physical contraception, STI defense, and legislative ethics against gender-biased sex selection.",
    examinerNote: "Mention PCPNDT Act specifically for the statutory measure in part (c).",
    source: "NCERT Section 7.3.3 / CBSE Board 2024"
  },
  {
    id: "sci_c7_q25",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): In human males, the testes are situated outside the abdominal cavity within the scrotum.\nReason (R): Scrotum provides an optimal temperature that is 2 to 2.5°C lower than normal core body temperature, which is essential for viable spermatogenesis.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both A and R are true and R is the correct explanation of A.",
    explanation: "Both Assertion and Reason are true, and R correctly explains A. The production of mature viable sperms (spermatogenesis) cannot occur at internal body temperature (37°C) as high temperatures cause germ cell degeneration. The external scrotum maintains a temperature 2–2.5°C lower.",
    examinerNote: "Scrotal thermoregulation is frequently asked in both Assertion-Reason and 2-mark VSA questions.",
    source: "CBSE Board Question Bank / NCERT Line-by-Line"
  },
  {
    id: "sci_c7_q26",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 5,
    type: "LA",
    question: "(a) Trace the events that occur after a compatible pollen grain lands on the receptive stigma of a flower until double fertilisation is accomplished.\n(b) Mention the post-fertilisation fate of the following floral parts:\n  (i) Ovary\n  (ii) Ovule\n  (iii) Zygote\n  (iv) Petals, stamens, and style\n(c) State two distinct reasons why vegetative propagation is widely preferred for growing ornamental plants like rose and jasmine.",
    answer: "(a) Pollen Germination & Double Fertilisation:\n1. Compatible pollen grain on the stigma absorbs fluid and germinates, forming a pollen tube.\n2. The pollen tube grows down through the style toward the ovary via chemotropism, carrying two male gametes.\n3. It enters the ovule through the micropyle and penetrates the embryo sac.\n4. Syngamy: One male gamete (n) fuses with the egg cell (n) to form the diploid zygote (2n).\n5. Triple Fusion: The second male gamete (n) fuses with the two polar nuclei (n+n) to form the triploid primary endosperm nucleus (3n).\n\n(b) Post-Fertilisation Fates:\n(i) Ovary → Develops into the Fruit.\n(ii) Ovule → Develops into the Seed (with seed coat and food storage).\n(iii) Zygote → Divides repeatedly to develop into the Embryo.\n(iv) Petals, stamens, and style → Wither, shrivel, and fall off.\n\n(c) Advantages of Vegetative Propagation:\n1. Enables propagation of plants that have lost the capacity to produce viable seeds (e.g. rose, jasmine, seedless banana).\n2. All offspring are genetically identical to the parent (clones), preserving desirable parental traits and yielding flowers/fruits much earlier.",
    explanation: "NCERT Chapter 7 comprehensive 5-marker on double fertilisation, seed formation, and economic benefits of vegetative propagation.",
    examinerNote: "Ensure both syngamy (n+n=2n) and triple fusion (n+2n=3n) are explicitly identified for full 5 marks.",
    source: "CBSE Board Examination (5 Marks) / NCERT"
  },
  {
    id: "sci_c7_q27",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 1,
    type: "MCQ",
    question: "In a dicot seed (such as gram or pea), which of the following combinations correctly identifies the future shoot, future root, and food store?\n(a) Plumule = Future shoot, Radicle = Future root, Cotyledons = Food store\n(b) Radicle = Future shoot, Plumule = Future root, Endosperm = Food store\n(c) Cotyledon = Future shoot, Radicle = Future root, Plumule = Food store\n(d) Plumule = Future shoot, Cotyledon = Future root, Radicle = Food store",
    options: [
      "Plumule = Future shoot, Radicle = Future root, Cotyledons = Food store",
      "Radicle = Future shoot, Plumule = Future root, Endosperm = Food store",
      "Cotyledon = Future shoot, Radicle = Future root, Plumule = Food store",
      "Plumule = Future shoot, Cotyledon = Future root, Radicle = Food store"
    ],
    correctOption: 0,
    answer: "(a) Plumule = Future shoot, Radicle = Future root, Cotyledons = Food store.",
    explanation: "During seed germination, the embryonic axis consists of the plumule which grows upward to form the shoot system, the radicle which grows downward to develop the root system, and cotyledons which store reserve nutrients for the developing seedling.",
    formula: "Plumule -> Shoot; Radicle -> Root; Cotyledons -> Stored Nutrients",
    examinerNote: "Direct NCERT Figure 7.9 seed anatomy question.",
    source: "NCERT Section 7.2.4 / CBSE Board 2024"
  },
  {
    id: "sci_c7_q28",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 1,
    type: "MCQ",
    question: "Bryophyllum plants can reproduce vegetatively through:\n(a) Aerial stem stolons\n(b) Adventitious buds produced in the notches along leaf margins\n(c) Root tubers producing adventitious tap roots\n(d) Lateral rhizome offsets underground",
    options: [
      "Aerial stem stolons",
      "Adventitious buds produced in the notches along leaf margins",
      "Root tubers producing adventitious tap roots",
      "Lateral rhizome offsets underground"
    ],
    correctOption: 1,
    answer: "(b) Adventitious buds produced in the notches along leaf margins.",
    explanation: "Bryophyllum leaves bear adventitious buds in the notches along their leaf margins. When a detached leaf falls onto moist soil, these marginal buds develop roots and shoots, growing into independent new plantlets.",
    formula: "Bryophyllum Leaf Margin Notches -> Adventitious Buds -> Independent Plantlets",
    examinerNote: "High-frequency 1M board question on leaf vegetative reproduction.",
    source: "NCERT Section 7.2.5 / CBSE Board 2023"
  },
  {
    id: "sci_c7_q29",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 2,
    type: "VSA",
    question: "Differentiate between Fragmentation in Spirogyra and Regeneration in Planaria. Why cannot complex multicellular organisms reproduce simply by fragmentation?",
    answer: "(a) Differentiation:\n  - Fragmentation (Spirogyra): A natural mode of asexual reproduction where a mature filamentous organism simply breaks into smaller fragments upon maturation, each fragment growing into a complete individual by cell division.\n  - Regeneration (Planaria): An incidental wound-healing and tissue-repair capability where specialized regenerative cells proliferate and morph into missing body parts when an organism is accidentally cut into pieces.\n\n(b) Why Complex Organisms Cannot Fragment:\n  - Complex multicellular organisms (like humans or vertebrates) do not exist as a random collection of identical cells. They possess highly organized tissue, organ, and organ-system levels of structural hierarchy, with specialized cells situated at precise anatomical positions.\n  - Simple breaking of body parts cannot recreate specialized organs like heart, brain, or lungs cell-by-cell without embryonic differentiation programs.",
    explanation: "Structural complexity and cell differentiation prevent cell-by-cell asexual regeneration in higher organisms.",
    formula: "Fragmentation: Simple body design (Spirogyra); Regeneration: Specialized stem cells (Planaria)",
    examinerNote: "1 mark for distinguishing fragmentation vs regeneration; 1 mark for multicellular organ complexity explanation.",
    source: "NCERT Section 7.2.2 & 7.2.3 / CBSE 2024"
  },
  {
    id: "sci_c7_q30",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 2,
    type: "VSA",
    question: "State the biological functions of the secretions contributed by the Seminal Vesicles and Prostate Gland to human semen.",
    answer: "Functions of Seminal Vesicles and Prostate Gland Secretions:\n1. Nutrient Supply & Energy: Secretions contain fructose, citrate, and ascorbic acid that nourish sperms and provide fuel for their vigorous flagellar motility.\n2. Fluid Medium for Transport: Contributes the majority of seminal plasma, providing a liquid medium that facilitates the swimming of sperms through the female reproductive tract.\n3. pH Neutralization: The alkaline secretion neutralizes the acidic environment of both the male urethra and the female vagina, protecting sperms from acid degradation and activating their enzymatic mobility.",
    explanation: "Seminal fluid transforms dry germ cells into a chemically buffered, nutrient-rich motile suspension.",
    formula: "Semen = Sperms (10%) + Seminal Vesicle Fluid (60%, Fructose/Energy) + Prostatic Fluid (30%, Alkaline Buffer)",
    examinerNote: "1 mark for fluid transport and energy (fructose); 1 mark for alkaline buffer protecting against vaginal acidity.",
    source: "NCERT Section 7.3.2 / CBSE Board 2024"
  },
  {
    id: "sci_c7_q31",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 3,
    type: "SA",
    question: "(a) Classify Sexually Transmitted Diseases (STDs) into bacterial and viral infections, naming two examples of each.\n(b) Which contraceptive method provides effective protection against both unintended pregnancy and transmission of STDs? Explain why.\n(c) State one reason why imparting reproductive health education to adolescents is vital.",
    answer: "(a) Classification of STDs:\n    - Bacterial STDs: (1) Gonorrhoea, (2) Syphilis.\n    - Viral STDs: (1) Genital Warts (caused by HPV), (2) AIDS (caused by HIV).\n\n(b) Protective Contraceptive Method:\n    - Barrier Method: The use of male or female condoms.\n    - Rationale: Condoms act as an impermeable physical barrier that completely prevents direct mucosal contact and the exchange of bodily fluids (semen, vaginal secretions, and blood) between partners, thereby blocking both sperm transit and microbial pathogen transmission.\n\n(c) Importance of Adolescent Education:\n    Dispels myths and taboos regarding puberty and sexual maturation, promotes hygienic practices, prevents teenage pregnancies, and encourages responsible behaviour against STD transmission.",
    explanation: "NCERT Section 7.4. Barrier contraceptives are unique in offering dual protection against conception and STDs.",
    formula: "Bacterial: Gonorrhoea, Syphilis; Viral: Warts, HIV-AIDS; Protection: Condoms (Barrier)",
    examinerNote: "1 mark for 2 bacterial + 2 viral STDs; 1 mark for condoms and physical barrier mechanism; 1 mark for education rationale.",
    source: "NCERT Section 7.4 / CBSE Board 2023"
  },
  {
    id: "sci_c7_q32",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 3,
    type: "SA",
    question: "Regarding the female reproductive organ (Carpel / Pistil) of a flowering plant:\n(a) State the specific function of: (i) Stigma, (ii) Style, (iii) Ovary, and (iv) Micropyle.\n(b) What type of biological tropism guides the directed growth of the pollen tube through the style towards the ovule?",
    answer: "(a) Functions of Floral Parts:\n    (i) Stigma: Sticky receptive terminal surface that captures pollen grains and secretes sugary fluids that stimulate pollen germination.\n    (ii) Style: Elongated hollow or tissue-filled column that elevates the stigma to catch pollen and supports the downward transit of the growing pollen tube.\n    (iii) Ovary: Swollen basal compartment containing one or more ovules; houses the female gametophyte (embryo sac) where fertilisation occurs, and later develops into the fruit.\n    (iv) Micropyle: Microscopic pore in the ovule integuments through which the pollen tube enters the embryo sac to discharge male gametes; later allows water and oxygen entry during seed germination.\n\n(b) Tropism Involved: Chemotropism (directional growth response guided by a chemical gradient of attractant signals secreted by ovule synergids).",
    explanation: "Carpel anatomy regulates pollination, pollen tube guidance, and seed coat aeration.",
    formula: "Pistil = Stigma + Style + Ovary; Guidance Mechanism = Chemotropism",
    examinerNote: "2 marks for 4 floral functions (0.5 mark each); 1 mark for Chemotropism.",
    source: "CBSE Board 2024 / NCERT Section 7.2.4"
  },
  {
    id: "sci_c7_q33",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 3,
    type: "SA",
    question: "(a) Differentiate between Vasectomy and Tubectomy on the basis of: (i) Organ operated, (ii) Duct cut and ligated (tied), and (iii) Sex of the patient.\n(b) Explain why a man who has undergone a successful vasectomy can still ejaculate semen and maintains normal male sexual characteristics and libido.",
    answer: "(a) Comparison of Surgical Contraceptive Methods:\n| Parameter | Vasectomy | Tubectomy |\n| :--- | :--- | :--- |\n| Organ / Duct Involved | Vas deferens (sperm duct) | Fallopian tube (oviduct) |\n| Surgical Procedure | A small portion of both vas deferentia is excised and ligated (tied). | A small portion of both fallopian tubes is excised and ligated (tied). |\n| Sex of Patient | Human Males | Human Females |\n\n(b) Ejaculation and Libido Preservation in Vasectomised Males:\n    - Semen Ejaculation: Sperms produced by testes account for only about 5–10% of total ejaculate volume. The remaining 90–95% of seminal fluid is contributed by seminal vesicles, prostate, and bulbourethral glands, which empty into the urethra downstream from the vasectomy site. Hence, normal semen is ejaculated, but it is completely sperm-free (azoospermic).\n    - Normal Libido & Secondary Traits: Testosterone is an endocrine hormone secreted directly into blood capillaries by interstitial Leydig cells in testes. Blood circulation is completely unaffected by vas deferens ligation; thus, hormone levels, voice pitch, muscle mass, and sexual drive remain normal.",
    explanation: "Surgical sterilisation physically blocks gamete conduits without interfering with endocrine hormone secretion.",
    formula: "Vasectomy: Cuts Vas Deferens (Blocks sperms; Semen volume & Testosterone intact)",
    examinerNote: "1.5 marks for table comparison; 1.5 marks for semen origin downstream + endocrine blood transport of testosterone.",
    source: "CBSE Board 2023 / Exemplar"
  },
  {
    id: "sci_c7_q34",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 5,
    type: "LA",
    question: "(a) Describe the physiological changes that take place in the human female uterus every month in preparation for receiving a fertilised egg. [2M]\n(b) What happens to the thickened endometrium if the released ovum is NOT fertilised? Explain the physiological mechanism and duration of menstruation. [2M]\n(c) Trace the path of the fertilised zygote from the fallopian tube to the uterus and explain what is meant by implantation. [1M]",
    answer: "(a) Uterine Preparation for Pregnancy:\n    - Every month, an ovary releases one mature ovum (ovulation). In synchrony, under the influence of estrogen and progesterone hormones, the inner lining of the uterus (endometrium) undergoes rapid cellular proliferation.\n    - The endometrium thickens significantly, becoming soft, spongy, and heavily vascularised with convoluted blood vessels and glandular tissues to nourish the anticipated embryo.\n\n(b) Mechanism of Menstruation (Unfertilised Ovum):\n    - If fertilisation does not occur, the corpus luteum degenerates, causing progesterone levels in blood to plummet sharply.\n    - Deprived of hormonal support, the thick, spongy uterine lining breaks down. The disintegrated endometrial tissues along with ruptured capillaries and the unfertilised ovum are discharged out through the vagina as a menstrual flow of blood and mucus.\n    - Duration: The menstrual bleeding phase typically lasts for 3 to 5 days, repeating approximately every 28 days.\n\n(c) Zygote Transit & Implantation:\n    - Fertilisation takes place in the ampullary region of the fallopian tube (oviduct).\n    - The single-celled zygote divides by cleavage (mitosis) into a multicellular hollow ball of cells (blastocyst) while being propelled along the fallopian tube by ciliary action over 4 to 6 days.\n    - Implantation: The embedding of the multicellular blastocyst into the thickened, vascular endometrial wall of the uterus, establishing physiological connection for embryo nourishment.",
    explanation: "NCERT Section 7.3.3. Endometrial cyclic preparation and menstrual shedding are governed by ovarian hormones.",
    formula: "No Fertilisation -> Progesterone Drop -> Endometrial Breakdown -> Menstruation (3-5 days)",
    examinerNote: "2 marks for uterine preparation; 2 marks for hormonal drop and menstrual flow; 1 mark for fallopian transit & implantation definition.",
    source: "CBSE Class 10 Board 2024"
  },
  {
    id: "sci_c7_q35",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 4,
    type: "Case Study",
    question: "Read the case text regarding mammalian embryonic nourishment and answer the questions:\n\nDuring pregnancy, the developing embryo is completely dependent upon maternal physiology for every metabolic requirement. After implantation, an intimate temporary organ called the placenta is established between the uterine wall and the developing fetus. The placenta is a disc-shaped tissue embedded in the uterine wall. It contains finger-like projections called chorionic villi on the embryo's side of the tissue. On the mother's side are large blood spaces called maternal lacunae that surround the villi, allowing maternal and fetal blood to flow in close proximity without directly mixing.\n\n(a) What structural adaptation of the placenta provides a large surface area for glucose and oxygen diffusion? [1M]\n(b) What metabolic waste products generated by the developing fetus are eliminated across the placenta into the maternal blood? [1M]\n(c) Why do maternal blood and fetal blood NOT mix directly within the placenta? What would happen if maternal and fetal blood were in direct vascular communication? [2M]",
    answer: "(a) Surface Area Adaptation: The embryonic side of the placenta possesses millions of microscopic, finger-like chorionic villi that project into maternal blood spaces, providing an expansive surface area for rapid diffusion of glucose, amino acids, and oxygen.\n\n(b) Waste Elimination: Metabolic nitrogenous wastes (urea, uric acid) and carbon dioxide (CO2) generated by embryonic cellular respiration diffuse across the placenta from fetal blood into maternal blood to be excreted by maternal kidneys and lungs.\n\n(c) Why Blood Does Not Mix & Consequences:\n    - Why No Direct Mixing: Maternal blood pressure in systemic arteries is substantially higher than the delicate, low-pressure capillary network of the fetus; direct connection would rupture fetal vessels. Furthermore, mother and fetus may have incompatible ABO and Rh blood groups.\n    - Consequences of Direct Mixing: Maternal antibodies (agglutinins) would attack and hemolyse fetal erythrocytes if blood groups are incompatible, causing lethal agglutination, hemolytic disease of the newborn (erythroblastosis fetalis), or fetal circulatory collapse.",
    explanation: "Placenta functions as the fetal lungs, intestines, and kidneys concurrently while preserving immunological barrier.",
    formula: "Placenta: Chorionic Villi -> High Surface Area Diffusion; Barrier protects against pressure and ABO incompatibility",
    examinerNote: "1 mark for chorionic villi; 1 mark for urea and CO2; 2 marks for blood pressure barrier and immunological incompatibility.",
    source: "CBSE Competency-Based Sample Paper 2025"
  },
  {
    id: "sci_c7_q36",
    chapter: 7,
    chapterName: "How do Organisms Reproduce?",
    marks: 5,
    type: "LA",
    question: "(a) Why is DNA replication an indispensable biological prerequisite for cellular reproduction? [1.5M]\n(b) Why is DNA copying never 100% accurate? What is the evolutionary significance of subtle copying inaccuracies? [1.5M]\n(c) Explain with the classic NCERT example of a population of bacteria living in temperate waters how genetic variation ensures the survival of a species during drastic environmental changes. [2M]",
    answer: "(a) Necessity of DNA Replication:\n    - DNA (deoxyribonucleic acid) located in cell chromosomes contains the complete genetic blueprint and informational instructions for synthesizing proteins and building cellular structures.\n    - For an organism to produce offspring that look and function like itself, an exact copy of this informational blueprint must be transmitted to each daughter cell. Hence, DNA replication accompanied by cellular apparatus duplication is strictly necessary before cell division.\n\n(b) Inaccuracy & Significance of Variations:\n    - No biochemical reaction is 100% reliably accurate. During DNA replication, occasional enzymatic copying errors occur in the nucleotide base sequence, producing subtle variations (mutations) in the daughter DNA molecules.\n    - Significance: These subtle variations alter the protein products slightly, creating diversity among individuals of a species. While extreme alterations may cause cell death, minor viable variations provide the raw material for adaptation and evolution under changing environmental conditions.\n\n(c) Survival Example (Bacteria in Temperate Waters):\n    - Consider a population of bacteria living in temperate waters. If the global temperature of the water increases drastically due to global warming or a thermal heat wave, the majority of temperature-sensitive bacteria will be killed.\n    - However, if a few bacterial variants in that population possess a mutation granting heat resistance, those few resistant variants will survive, multiply, and thrive in the warm water.\n    - Thus, genetic variation does not guarantee the survival of any specific individual, but it guarantees the long-term survival of the species from catastrophic extinction.",
    explanation: "NCERT Section 7.1. Subtle infidelity in biochemical DNA copying provides the essential variation required for natural selection.",
    formula: "DNA Copying -> Inevitable Biochemical Inaccuracies -> Genetic Variations -> Species Adaptability",
    examinerNote: "1.5 marks for DNA role; 1.5 marks for biochemical error & diversity; 2 marks for temperate water bacteria survival example.",
    source: "NCERT Section 7.1 / CBSE Board 2024 HOTS"
  }
];

