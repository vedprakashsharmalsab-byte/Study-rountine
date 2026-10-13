import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH8_QUESTIONS: VaultQuestion[] = [
  // ==========================================
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON
  // ==========================================
  {
    id: "sci_c8_q1",
    chapter: 8,
    chapterName: "Heredity",
    marks: 1,
    type: "MCQ",
    question: "Mendel's Law of Segregation (Purity of Gametes) states that:\n(a) Alleles of different genes sort independently into gametes\n(b) In a heterozygous individual, the two contrasting alleles separate during gamete formation so each gamete receives only one allele\n(c) Dominant traits permanently suppress and destroy recessive alleles\n(d) Acquired physical traits are passed down to germ cells",
    options: [
      "Alleles of different genes sort independently into gametes",
      "In a heterozygous individual, the two contrasting alleles separate during gamete formation so each gamete receives only one allele",
      "Dominant traits permanently suppress and destroy recessive alleles",
      "Acquired physical traits are passed down to germ cells"
    ],
    correctOption: 1,
    answer: "Option (b): In a heterozygous individual, the two contrasting alleles separate during gamete formation so each gamete receives only one allele",
    steps: [
      "Law of Segregation states that during meiosis (gametogenesis), alleles of a gene pair segregate cleanly.",
      "Each gamete receives only one allele (purity of gametes).",
      "Option (a) defines the Law of Independent Assortment."
    ],
    explanation: "During gamete formation, paired factors (alleles) segregate so each gamete carries only one factor.",
    formula: "Tt \\xrightarrow{\\text{Gametogenesis}} T \\text{ (50\\%)} + t \\text{ (50\\%)}",
    examinerNote: "Mendel's first law = Law of Segregation (applies to monohybrid crosses).",
    source: "NCERT Section 8.1 / Board 2023"
  },
  {
    id: "sci_c8_q2",
    chapter: 8,
    chapterName: "Heredity",
    marks: 1,
    type: "MCQ",
    question: "When a pure breeding tall pea plant (TT) is crossed with a pure breeding dwarf pea plant (tt), the F₁ progeny are:\n(a) All tall plants with genotype TT\n(b) All tall plants with genotype Tt\n(c) 50% tall and 50% dwarf plants\n(d) 75% tall and 25% dwarf plants",
    options: [
      "All tall plants with genotype TT",
      "All tall plants with genotype Tt",
      "50% tall and 50% dwarf plants",
      "75% tall and 25% dwarf plants"
    ],
    correctOption: 1,
    answer: "Option (b): All tall plants with genotype Tt",
    steps: [
      "Parents: TT × tt",
      "Gametes: T from tall parent, t from dwarf parent.",
      "F₁ generation: 100% Tt (heterozygous tall).",
      "Due to dominance of T over t, all F₁ plants appear phenotypically tall."
    ],
    explanation: "F₁ generation consists entirely of heterozygous individuals displaying the dominant phenotype.",
    formula: "TT \\times tt \\to 100\\% \\text{ Tt (Phenotypically Tall)}",
    examinerNote: "Do not confuse F₁ (all tall Tt) with F₂ (3 tall : 1 dwarf).",
    source: "NCERT Section 8.1 / Board 2024"
  },
  {
    id: "sci_c8_q3",
    chapter: 8,
    chapterName: "Heredity",
    marks: 1,
    type: "MCQ",
    question: "In human beings, the sex of a newly conceived child is scientifically determined by:\n(a) The chromosome constitution of the mother's egg\n(b) The sex chromosome (X or Y) contributed by the father's fertilizing sperm\n(c) The nutritional diet of the mother during gestation\n(d) The environmental temperature inside the uterus",
    options: [
      "The chromosome constitution of the mother's egg",
      "The sex chromosome (X or Y) contributed by the father's fertilizing sperm",
      "The nutritional diet of the mother during gestation",
      "The environmental temperature inside the uterus"
    ],
    correctOption: 1,
    answer: "Option (b): The sex chromosome (X or Y) contributed by the father's fertilizing sperm",
    steps: [
      "Human females are homogametic (XX) — all ova carry one X chromosome.",
      "Human males are heterogametic (XY) — 50% sperms carry X, 50% sperms carry Y.",
      "If an X-sperm fertilizes the egg: XX ⟶ Female child.",
      "If a Y-sperm fertilizes the egg: XY ⟶ Male child.",
      "The father's sperm alone dictates the genetic sex of the child."
    ],
    explanation: "Males are heterogametic (XY); the presence of the Y chromosome from the father determines maleness.",
    formula: "X_{\\text{ovum}} + X_{\\text{sperm}} = XX \\text{ (Girl)}; \\quad X_{\\text{ovum}} + Y_{\\text{sperm}} = XY \\text{ (Boy)}",
    examinerNote: "Very frequent 1-mark question with important social relevance: Mother is never responsible for fetal sex.",
    source: "NCERT Section 8.2 / Board 2022, 2024"
  },
  {
    id: "sci_c8_q4",
    chapter: 8,
    chapterName: "Heredity",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Traits acquired during the lifetime of an individual (e.g., loss of a limb or muscle building) cannot be inherited by its progeny.\nReason (R): Acquired changes occur in non-reproductive somatic tissues and do not alter the DNA sequence of germ cells.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is NOT the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a): Both A and R are true and R is the correct explanation of A",
    steps: [
      "Assertion is TRUE: Phenotypic changes gained through environmental interaction or injury are not heritable.",
      "Reason is TRUE: Only DNA modifications in germ cells (sperms and ova) are transmitted across generations.",
      "Reason directly explains why somatic adaptations cannot be passed on."
    ],
    explanation: "Inheritance operates exclusively through germ line DNA. Somatic modifications do not alter gamete genomes.",
    examinerNote: "Classic August Weismann germplasm proof (cutting mice tails did not produce tailless offspring).",
    source: "NCERT Section 8.1 / Board 2023"
  },
  {
    id: "sci_c8_q5",
    chapter: 8,
    chapterName: "Heredity",
    marks: 1,
    type: "MCQ",
    question: "In a dihybrid cross between pea plants heterozygous for two traits (RrYy × RrYy, round yellow seeds), what is the expected phenotypic ratio in the F₂ generation?\n(a) 3 : 1\n(b) 1 : 2 : 1\n(c) 9 : 3 : 3 : 1\n(d) 1 : 1 : 1 : 1",
    options: [
      "3 : 1",
      "1 : 2 : 1",
      "9 : 3 : 3 : 1",
      "1 : 1 : 1 : 1"
    ],
    correctOption: 2,
    answer: "Option (c): 9 : 3 : 3 : 1",
    steps: [
      "Dihybrid cross tracks two pairs of contrasting traits simultaneously (seed shape and seed color).",
      "In F₂, independent assortment produces 16 genetic combinations.",
      "Phenotypic breakdown: 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green."
    ],
    explanation: "Dihybrid F₂ phenotypic ratio is 9 (dominant/dominant) : 3 (dominant/recessive) : 3 (recessive/dominant) : 1 (recessive/recessive).",
    formula: "\\text{Phenotypic Ratio} = 9 : 3 : 3 : 1",
    examinerNote: "Know the specific phenotype associated with each number in the 9:3:3:1 ratio.",
    source: "NCERT Section 8.1 / Board 2022"
  },
  {
    id: "sci_c8_q6",
    chapter: 8,
    chapterName: "Heredity",
    marks: 1,
    type: "MCQ",
    question: "A cross between two tall pea plants produced a dwarf progeny. The genotypes of the parent plants must have been:\n(a) TT and TT\n(b) TT and Tt\n(c) Tt and Tt\n(d) Tt and tt",
    options: [
      "TT and TT",
      "TT and Tt",
      "Tt and Tt",
      "Tt and tt"
    ],
    correctOption: 2,
    answer: "Option (c): Tt and Tt",
    steps: [
      "Both parents were phenotypically tall, so each parent must carry at least one dominant allele 'T'.",
      "The progeny was dwarf, possessing the genotype 'tt'.",
      "To produce 'tt', the offspring must have received a recessive allele 't' from BOTH parents.",
      "Therefore, both tall parents must be heterozygous: Tt and Tt."
    ],
    explanation: "For a recessive homozygous offspring (tt) to arise from phenotypically dominant parents, both parents must be carriers (Tt).",
    formula: "Tt \\times Tt \\to 1TT, 2Tt, 1tt \\implies 25\\% \\text{ dwarf progeny}",
    examinerNote: "If one parent were TT, no dwarf progeny could ever form because all offspring would receive a T.",
    source: "NCERT Exemplar / Board 2024"
  },
  {
    id: "sci_c8_q7",
    chapter: 8,
    chapterName: "Heredity",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): A human couple with three daughters has a 50% mathematical probability of having a son in their fourth pregnancy.\nReason (R): Human males produce equal proportions (50:50) of X-bearing and Y-bearing sperms during each ejaculation.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is NOT the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a): Both A and R are true and R is the correct explanation of A",
    steps: [
      "Each conception is an independent statistical event.",
      "Father produces equal numbers of X and Y sperms.",
      "The probability of conceiving a male or female offspring remains strictly 50% (1/2) in every single pregnancy, regardless of past births."
    ],
    explanation: "Probability of male vs female conception is always 1:1 for each independent fertilization event.",
    examinerNote: "Board students often fall for the 'gambler's fallacy' thinking 3 girls increases odds of a boy. It is always 50%.",
    source: "NCERT Section 8.2 / Board 2023"
  },
  {
    id: "sci_c8_q8",
    chapter: 8,
    chapterName: "Heredity",
    marks: 1,
    type: "MCQ",
    question: "What is the genotypic ratio obtained in the F₂ generation of a Mendelian monohybrid cross?\n(a) 3 : 1\n(b) 1 : 2 : 1\n(c) 9 : 3 : 3 : 1\n(d) 2 : 1 : 1",
    options: [
      "3 : 1",
      "1 : 2 : 1",
      "9 : 3 : 3 : 1",
      "2 : 1 : 1"
    ],
    correctOption: 1,
    answer: "Option (b): 1 : 2 : 1",
    steps: [
      "Selfing F₁ plants (Tt × Tt) gives genotypes: 1 TT (homozygous tall), 2 Tt (heterozygous tall), 1 tt (homozygous dwarf).",
      "Genotypic ratio = 1 : 2 : 1.",
      "Phenotypic ratio = 3 Tall : 1 Dwarf = 3 : 1."
    ],
    explanation: "Genotypic ratio represents the exact allelic constitution: 1 TT : 2 Tt : 1 tt.",
    formula: "\\text{Genotypic Ratio} = 1TT : 2Tt : 1tt = 1 : 2 : 1",
    examinerNote: "Question asks for GENOTYPIC ratio (1:2:1), NOT phenotypic ratio (3:1). Read carefully!",
    source: "NCERT Section 8.1"
  },
  {
    id: "sci_c8_q9",
    chapter: 8,
    chapterName: "Heredity",
    marks: 1,
    type: "MCQ",
    question: "A section of cellular DNA that provides the complete informational instructions for synthesizing a specific functional protein is called a:\n(a) Ribosome\n(b) Chromosome\n(c) Gene\n(d) Nucleolus",
    options: [
      "Ribosome",
      "Chromosome",
      "Gene",
      "Nucleolus"
    ],
    correctOption: 2,
    answer: "Option (c): Gene",
    steps: [
      "DNA is the hereditary material in eukaryotic nuclei.",
      "A gene is a discrete segment of DNA coding for a polypeptide/protein.",
      "The protein (e.g. an enzyme) controls biochemical pathways that manifest physical traits."
    ],
    explanation: "A gene is the fundamental unit of heredity that provides code for protein synthesis.",
    formula: "\\text{DNA (Gene)} \\xrightarrow{\\text{Transcription/Translation}} \\text{Enzyme / Protein} \\to \\text{Phenotypic Trait}",
    examinerNote: "Direct NCERT Section 8.1 definition.",
    source: "NCERT Section 8.1"
  },

  // ==========================================
  // SECTION B: 2-MARK VSA
  // ==========================================
  {
    id: "sci_c8_q10",
    chapter: 8,
    chapterName: "Heredity",
    marks: 2,
    type: "VSA",
    question: "Differentiate between Phenotype and Genotype of an organism with suitable examples from Mendel's monohybrid cross.",
    answer: "(1) Phenotype: The observable physical appearance or external manifestation of a trait in an organism. Example: Tall plant or Dwarf plant.\n(2) Genotype: The internal genetic or allelic composition responsible for determining a specific trait. Example: TT (homozygous tall), Tt (heterozygous tall), or tt (homozygous dwarf).",
    steps: [
      "Phenotype is what you see externally (e.g. Tallness).",
      "Genotype is the allelic pair present in DNA (e.g. TT or Tt). Two plants with the same phenotype can have different genotypes."
    ],
    explanation: "Phenotype = visible trait; Genotype = genetic makeup.",
    examinerNote: "Always include the examples TT, Tt, and tt to get full 2 marks.",
    source: "NCERT Section 8.1 / Board 2022"
  },
  {
    id: "sci_c8_q11",
    chapter: 8,
    chapterName: "Heredity",
    marks: 2,
    type: "VSA",
    question: "Differentiate between Dominant and Recessive traits. Give one example of each in garden pea plants.",
    answer: "(1) Dominant Trait: A trait that expresses itself phenotypically even in the presence of an alternate contrasting allele (both in homozygous condition TT and heterozygous condition Tt). Example: Tall plant height, Purple flowers, Round seeds.\n(2) Recessive Trait: A trait that can only express itself phenotypically in the homozygous condition (tt) and remains masked in the presence of a dominant allele. Example: Dwarf plant height, White flowers, Wrinkled seeds.",
    steps: [
      "Dominant expresses in TT and Tt.",
      "Recessive expresses only in tt.",
      "Provide pea plant examples for each."
    ],
    explanation: "Dominant alleles mask the expression of recessive alleles in heterozygous individuals.",
    examinerNote: "Mention both heterozygous expression for dominant and homozygous requirement for recessive.",
    source: "NCERT Section 8.1 / Board 2023"
  },
  {
    id: "sci_c8_q12",
    chapter: 8,
    chapterName: "Heredity",
    marks: 2,
    type: "VSA",
    question: "State any two reasons why Gregor Mendel selected the Garden Pea (Pisum sativum) as his model experimental plant for genetics experiments.",
    answer: "(1) Presence of Distinct Contrasting Traits: Pea plants possess clearly distinguishable, sharply contrasting traits (e.g., tall vs dwarf, round vs wrinkled seeds, purple vs white flowers) with no intermediate blending.\n(2) Short Life Cycle & High Fecundity: Pea plants have a short annual life cycle, allowing multiple generations to be analyzed within a few years, and they produce a large number of seeds per cross for statistically reliable data.",
    steps: [
      "Reason 1: 7 pairs of easily observable contrasting traits.",
      "Reason 2: Short lifespan, self-pollinating flowers easily manipulated for cross-pollination."
    ],
    explanation: "Pea plants offered pure lines, high fertility, and clear morphological markers.",
    examinerNote: "Can also mention: naturally self-pollinating but easy to artificially cross-pollinate by emasculation.",
    source: "NCERT Section 8.1 / Board 2021, 2024"
  },
  {
    id: "sci_c8_q13",
    chapter: 8,
    chapterName: "Heredity",
    marks: 2,
    type: "VSA",
    question: "A plant with purple flowers (dominant, PP) is crossed with a plant with white flowers (recessive, pp). State the phenotype and genotype of: (a) F₁ progeny, and (b) F₂ progeny upon self-pollination.",
    answer: "(a) F₁ Progeny:\n- Genotype: 100% Pp (heterozygous).\n- Phenotype: 100% Purple flowered plants.\n\n(b) F₂ Progeny:\n- Genotypic ratio: 1 PP : 2 Pp : 1 pp.\n- Phenotypic ratio: 3 Purple flowered : 1 White flowered.",
    steps: [
      "Parents: PP × pp ⟶ F₁: Pp (Purple).",
      "F₁ selfing: Pp × Pp ⟶ F₂: 1 PP (Purple), 2 Pp (Purple), 1 pp (White)."
    ],
    explanation: "Monohybrid cross follows 3:1 phenotypic and 1:2:1 genotypic inheritance.",
    formula: "PP \\times pp \\to Pp \\implies 3\\text{ Purple} : 1\\text{ White}",
    examinerNote: "State both genotype and phenotype for full marks.",
    source: "CBSE Sample Paper 2024"
  },
  {
    id: "sci_c8_q14",
    chapter: 8,
    chapterName: "Heredity",
    marks: 2,
    type: "VSA",
    question: "Differentiate between Inherited Traits and Acquired Traits with one representative example of each.",
    answer: "(1) Inherited Traits: Characteristics passed from parents to offspring due to changes in the DNA of reproductive germ cells. They are heritable across generations. Example: Eye color, attached earlobes, height, blood group.\n(2) Acquired Traits: Characteristics developed by an individual during their lifetime in response to environment, lifestyle, injury, or learning. They affect only somatic cells and cannot be inherited. Example: Muscular physique, surgical scars, knowledge of a language.",
    steps: [
      "Inherited = in germ cell DNA, passed down.",
      "Acquired = in somatic cells, not passed down."
    ],
    explanation: "Only genetic variations present in germplasm are transmitted to subsequent generations.",
    examinerNote: "Use the term 'germ cells' vs 'somatic cells' to ensure full credit.",
    source: "NCERT Section 8.1 / Board 2022"
  },
  {
    id: "sci_c8_q15",
    chapter: 8,
    chapterName: "Heredity",
    marks: 2,
    type: "VSA",
    question: "Explain why a child inherits characteristics from both mother and father in equal proportions in sexual reproduction.",
    answer: "Human somatic cells contain 46 chromosomes (23 pairs). During gamete formation through meiosis, the chromosome number is halved so that human sperms and ova carry only 23 single chromosomes (one genome from each parent). Upon fertilization, the zygote receives 23 chromosomes from the father and 23 chromosomes from the mother, restoring the diploid complement of 46 chromosomes. Hence, both parents contribute an equal genetic share (50% DNA each).",
    steps: [
      "Meiosis halves chromosome number in gametes (n = 23).",
      "Fertilization combines sperm (23) and ovum (23) to restore 2n = 46.",
      "Result: Exactly 50% nuclear DNA inherited from each parent."
    ],
    explanation: "Meiotic reduction division ensures restoration of species chromosome number during fertilization.",
    formula: "23 \\text{ (Sperm)} + 23 \\text{ (Ovum)} = 46 \\text{ (Zygote)}",
    examinerNote: "Must explain the role of meiosis / reduction division.",
    source: "NCERT Section 8.1 / Board 2023"
  },

  // ==========================================
  // SECTION C: 3-MARK SA
  // ==========================================
  {
    id: "sci_c8_q16",
    chapter: 8,
    chapterName: "Heredity",
    marks: 3,
    type: "SA",
    question: "Explain Mendel's Monohybrid Cross between a pure tall pea plant (TT) and a pure dwarf pea plant (tt). Show the F₁ and F₂ generations using a Punnett square and state the phenotypic and genotypic ratios.",
    answer: "1. Cross & F₁ Generation:\nParents: TT (Tall) × tt (Dwarf)\nGametes: T and t\nF₁ Progeny: 100% Tt (All Tall plants)\n\n2. F₂ Generation (Selfing Tt × Tt):\nGametes: T and t from each parent\nPunnett Square:\n| | T | t |\n|---|---|---|\n| T | TT (Tall) | Tt (Tall) |\n| t | Tt (Tall) | tt (Dwarf) |\n\n3. Ratios in F₂ Generation:\n- Phenotypic Ratio: 3 Tall : 1 Dwarf (3 : 1)\n- Genotypic Ratio: 1 TT : 2 Tt : 1 tt (1 : 2 : 1)",
    steps: [
      "Show parental cross TT × tt.",
      "Show F₁ generation Tt.",
      "Construct 2×2 Punnett square for F₂.",
      "Write phenotypic ratio (3:1) and genotypic ratio (1:2:1)."
    ],
    explanation: "Monohybrid cross proves the Law of Segregation: recessive alleles remain hidden in F₁ and reappear in F₂.",
    formula: "\\text{Phenotypic: } 3:1, \\quad \\text{Genotypic: } 1:2:1",
    examinerNote: "Punnett square must be clearly drawn and labeled.",
    source: "NCERT Section 8.1 / Board 2021, 2024"
  },
  {
    id: "sci_c8_q17",
    chapter: 8,
    chapterName: "Heredity",
    marks: 3,
    type: "SA",
    question: "Explain Mendel's Dihybrid Cross involving seed shape and seed color in pea plants:\n(a) What were the phenotypes and genotypes of the pure-breeding parents?\n(b) What were the F₁ progeny?\n(c) State the four phenotypic categories in F₂ and their ratio. What fundamental biological law did Mendel derive from this cross?",
    answer: "(a) Parents:\n- Round Yellow Seeds: RRYY\n- Wrinkled Green Seeds: rryy\n\n(b) F₁ Generation:\n- All RrYy (Phenotypically Round Yellow seeds).\n\n(c) F₂ Phenotypes and Ratio:\nSelfing F₁ (RrYy × RrYy) produces 16 combinations:\n1. Round Yellow: 9\n2. Round Green: 3 (new recombinant)\n3. Wrinkled Yellow: 3 (new recombinant)\n4. Wrinkled Green: 1\nPhenotypic Ratio: **9 : 3 : 3 : 1**\n\nLaw Derived: **Law of Independent Assortment** — alleles of two different pairs of traits assort and segregate independently of one another into gametes.",
    steps: [
      "Part (a): Identify RRYY and rryy.",
      "Part (b): State F₁ is RrYy Round Yellow.",
      "Part (c): State 9:3:3:1 ratio and state Law of Independent Assortment."
    ],
    explanation: "Dihybrid inheritance shows that traits like seed shape and seed color are inherited independently.",
    examinerNote: "Mention that Round Green and Wrinkled Yellow are new recombinant combinations not present in parents.",
    source: "NCERT Section 8.1 / Board 2022, 2023"
  },
  {
    id: "sci_c8_q18",
    chapter: 8,
    chapterName: "Heredity",
    marks: 3,
    type: "SA",
    question: "How do genes control the expression of traits in living organisms? Explain with the example of plant height in pea plants.",
    answer: "1. Cellular DNA is the information source for making proteins in the cell. A section of DNA providing information for one protein is a gene.\n2. In pea plants, plant height depends on the amount of a specific plant growth hormone (e.g., auxin/gibberellin).\n3. The amount of plant hormone synthesized depends on the efficiency of an enzyme that is coded by a specific gene (T):\n   - If the gene has normal sequence (T), it produces a fully functional, efficient enzyme $\\to$ high hormone synthesis $\\to$ plant grows **Tall**.\n   - If the gene has an altered/mutant sequence (t), it produces an inefficient enzyme $\\to$ low hormone synthesis $\\to$ plant remains **Dwarf**.\n4. Hence, genes control traits by regulating specific cellular protein/enzyme synthesis.",
    steps: [
      "Gene in DNA codes for a specific enzyme/protein.",
      "Enzyme regulates synthesis of plant growth hormone.",
      "High hormone = Tall; low hormone = Dwarf.",
      "Conclusion: Genes control traits via proteins."
    ],
    explanation: "Genotype manifests as phenotype via the molecular sequence: Gene DNA → Enzyme protein → Hormone → Physical trait.",
    examinerNote: "NCERT Paragraph 8.1.3: Explain the link between gene, enzyme, and growth hormone.",
    source: "NCERT Section 8.1 / Board 2024"
  },
  {
    id: "sci_c8_q19",
    chapter: 8,
    chapterName: "Heredity",
    marks: 3,
    type: "SA",
    question: "Explain the mechanism of sex determination in human beings with the help of a genetic cross diagram. Why is the statistical probability of having a male or female child exactly 50%?",
    answer: "1. Chromosomal Basis:\n- Human cells have 23 pairs of chromosomes. Pair 23 consists of sex chromosomes.\n- Females possess two identical X chromosomes (**XX**, homogametic).\n- Males possess one X and one smaller Y chromosome (**XY**, heterogametic).\n\n2. Genetic Cross:\nMother (XX) × Father (XY)\n- Mother's gametes: All ova carry **X** (100%)\n- Father's gametes: 50% sperms carry **X**, 50% sperms carry **Y**\n\nPunnett Cross:\n| | X (Mother) | X (Mother) |\n|---|---|---|\n| X (Father) | XX (Female) | XX (Female) |\n| Y (Father) | XY (Male) | XY (Male) |\n\n3. Conclusion & Probability:\n- Out of 4 combinations, 2 are XX (female) and 2 are XY (male).\n- Ratio = 2 : 2 = 1 : 1.\n- Hence, the probability of conceiving a boy or a girl is always exactly **50% (1/2)**.",
    steps: [
      "State female XX and male XY chromosomal setup.",
      "Draw cross between XX and XY.",
      "Show 50% XX and 50% XY outcomes.",
      "Explain that equal production of X and Y sperms guarantees 50% probability."
    ],
    explanation: "Father's heterogametic nature (50% X and 50% Y sperms) mathematically dictates a 1:1 sex ratio.",
    formula: "P(\\text{Boy}) = \\frac{1}{2} = 50\\%, \\quad P(\\text{Girl}) = \\frac{1}{2} = 50\\%",
    examinerNote: "Diagram of cross is compulsory for full 3 marks.",
    source: "NCERT Section 8.2 / Board 2022, 2023, 2024"
  },
  {
    id: "sci_c8_q20",
    chapter: 8,
    chapterName: "Heredity",
    marks: 3,
    type: "SA",
    question: "Why is the accumulation of variations beneficial for a species over evolutionary time, even if it might not provide an immediate advantage to an individual organism?",
    answer: "(1) Buffering Against Environmental Catastrophes: Environmental conditions (climate, temperature, water levels, pathogens) fluctuate unpredictably. If an entire population of a species is genetically identical (as in asexual cloning), a single catastrophic environmental change (e.g., sudden heatwave or bacterial epidemic) would kill all individuals, causing total extinction.\n(2) Niche Survival & Adaptation: Variations introduce diverse traits into the population. For example, in a population of bacteria living in temperate waters, if global warming heats the water, most will die, but a few variant bacteria possessing heat-resistant enzyme mutations will survive, reproduce, and perpetuate the species.\n(3) Foundation of Evolution: Accumulation of advantageous variations over generations allows the emergence of new, better-adapted species.",
    steps: [
      "Point 1: Genetic uniformity risks total population wipeout.",
      "Point 2: Variants survive unexpected niche shocks (give bacteria heat resistance example).",
      "Point 3: Drives natural selection and evolutionary survival."
    ],
    explanation: "Variation ensures species resilience against environmental fluctuations.",
    examinerNote: "Cite the NCERT example of heat-resistant bacteria in warming water.",
    source: "NCERT Section 8.1 / Board 2023"
  },

  // ==========================================
  // SECTION D: 5-MARK LA
  // ==========================================
  {
    id: "sci_c8_q21",
    chapter: 8,
    chapterName: "Heredity",
    marks: 5,
    type: "LA",
    question: "Comprehensive Mendelian Inheritance:\n(a) State Mendel's: (i) Law of Dominance, (ii) Law of Segregation, (iii) Law of Independent Assortment.\n(b) In pea plants, round seed shape (R) is dominant over wrinkled (r), and yellow seed color (Y) is dominant over green (y). If an F₁ dihybrid plant (RrYy) is test-crossed with a double recessive plant (rryy), predict the genotypes, phenotypes, and phenotypic ratio of the offspring.\n(c) How does a monohybrid cross demonstrate that traits may be inherited but not expressed?",
    answer: "(a) Three Mendelian Laws:\n(i) Law of Dominance: When parents with contrasting traits are crossed, only one trait (dominant) appears in the F₁ generation; the other (recessive) remains hidden in heterozygous condition.\n(ii) Law of Segregation: During gametogenesis, the two alleles of a gene pair segregate cleanly, so that each gamete carries only one allele.\n(iii) Law of Independent Assortment: When two pairs of contrasting traits are combined in a hybrid, the segregation of alleles of one pair is entirely independent of the alleles of the other pair.\n\n(b) Dihybrid Test Cross (RrYy × rryy):\n- Gametes from RrYy: RY, Ry, rY, ry (equal ratio: 1/4 each)\n- Gametes from rryy: ry only (100%)\nOffspring Genotypes and Phenotypes:\n1. RrYy: Round Yellow (25%)\n2. Rryy: Round Green (25%)\n3. rrYy: Wrinkled Yellow (25%)\n4. rryy: Wrinkled Green (25%)\n- Phenotypic Ratio: **1 : 1 : 1 : 1**\n\n(c) Inheritance Without Expression:\nIn a monohybrid cross (TT × tt), the F₁ plants are all tall (Tt), but they silently carry the dwarf allele 't'. When F₁ plants self-pollinate, the dwarf trait reappears in F₂ (tt, 25%). This demonstrates that the recessive allele 't' was physically inherited and preserved in F₁ without being phenotypically expressed.",
    steps: [
      "Part (a): Clearly state all three laws.",
      "Part (b): Perform test cross RrYy × rryy and show 1:1:1:1 ratio.",
      "Part (c): Explain how dwarfness remains hidden in F₁ and reappears in F₂."
    ],
    explanation: "Complete synthesis of classical genetics: laws of inheritance, test cross verification, and dominance dynamics.",
    examinerNote: "Test cross ratio is 1:1:1:1, whereas selfing F₁ ratio is 9:3:3:1. Do not confuse them.",
    source: "NCERT Section 8.1 / CBSE Board 2024"
  },
  {
    id: "sci_c8_q22",
    chapter: 8,
    chapterName: "Heredity",
    marks: 5,
    type: "LA",
    question: "Chromosomes, Sex Determination and Variation:\n(a) Explain how sex is determined non-genetically by environmental factors in certain reptiles and mollusks, and contrast this with chromosomal sex determination in humans.\n(b) With the aid of a genetic cross diagram, explain why the probability of a human child being male or female is 50%.\n(c) In human societies, women are often wrongfully blamed for giving birth to daughters. Provide a scientific refutation of this misconception.",
    answer: "(a) Environmental vs Chromosomal Sex Determination:\n- Environmental Sex Determination: In some reptiles (e.g. alligators, turtles) and mollusks (snails), the sex of the offspring is not determined by chromosomes. Instead, it is determined by environmental temperature during egg incubation (e.g., in turtles, high incubation temperatures produce females, while low temperatures produce males; in snails, individuals can change sex based on environmental conditions).\n- Chromosomal Sex Determination: In humans, sex is determined strictly genetically at the instant of fertilization by the specific sex chromosome (X or Y) inherited from the father.\n\n(b) Human Sex Determination Cross:\nParents: Mother (44 + XX) × Father (44 + XY)\nGametes: Ova = all (22 + X); Sperms = 50% (22 + X) and 50% (22 + Y)\nCombinations:\n- (22 + X) ovum + (22 + X) sperm ⟶ 44 + XX (Female child, 50%)\n- (22 + X) ovum + (22 + Y) sperm ⟶ 44 + XY (Male child, 50%)\nProbability: Exactly 1 : 1 (50% each) because the father produces X and Y sperms in equal numbers.\n\n(c) Refutation of Blaming Mothers:\nHuman females possess only X chromosomes and produce exclusively X-bearing ova. They cannot contribute a Y chromosome. The father's sperm carries either an X or a Y chromosome with equal 50% probability. Therefore, biologically, the father's fertilizing sperm alone decides whether the zygote becomes XX (female) or XY (male). Blaming mothers for the birth of female children is completely scientifically baseless.",
    steps: [
      "Part (a): Contrast environmental incubation temperature (turtles/alligators) with genetic chromosomes.",
      "Part (b): Draw complete cross showing autosomes (44) and sex chromosomes.",
      "Part (c): Conclude with unequivocal scientific defense of mothers."
    ],
    explanation: "Comparative sex determination biology and ethical scientific refutation of social prejudices.",
    examinerNote: "Part (c) carries high social and board exam weightage; emphasize that mother is homogametic XX.",
    source: "NCERT Section 8.2 / CBSE Board 2022, 2024"
  },

  // ==========================================
  // SECTION E: CASE STUDY (4 MARKS)
  // ==========================================
  {
    id: "sci_c8_q23",
    chapter: 8,
    chapterName: "Heredity",
    marks: 4,
    type: "Case Study",
    question: "Case Study: In an agricultural research station, a geneticist crossed pure-breeding tall pea plants bearing purple flowers (TTPP) with pure-breeding dwarf pea plants bearing white flowers (ttpp). The resulting F₁ plants were all tall with purple flowers.\n\n(a) [1M] What are the dominant traits in this cross?\n(b) [1M] What is the genotype of the F₁ plants?\n(c) [2M] If the F₁ plants are allowed to self-pollinate to produce an F₂ generation of 1600 plants, calculate the expected number of plants that will be: (i) Tall with purple flowers, and (ii) Dwarf with white flowers.",
    answer: "(a) Dominant traits: Tall plant height and Purple flower color.\n(b) Genotype of F₁: Heterozygous dihybrid **TtPp**.\n(c) Calculation for F₂ generation (out of 1600 plants):\nAccording to Mendel's dihybrid ratio (9 Tall Purple : 3 Tall White : 3 Dwarf Purple : 1 Dwarf White / 16 total):\n(i) Expected Tall Purple plants = $\\frac{9}{16} \\times 1600 = 9 \\times 100 = \\mathbf{900 \\text{ plants}}$.\n(ii) Expected Dwarf White plants = $\\frac{1}{16} \\times 1600 = 1 \\times 100 = \\mathbf{100 \\text{ plants}}$.",
    steps: [
      "Part (a): State Tall and Purple.",
      "Part (b): State TtPp.",
      "Part (c): Apply 9/16 and 1/16 fractions to 1600 total plants: 9/16 × 1600 = 900; 1/16 × 1600 = 100."
    ],
    explanation: "Mathematical application of Mendelian 9:3:3:1 ratio to statistical population cohorts.",
    formula: "N = \\text{Fraction} \\times \\text{Total Progeny}",
    examinerNote: "Show mathematical steps clearly: 9/16 × 1600 = 900, 1/16 × 1600 = 100.",
    source: "CBSE Sample Paper 2024 / Board PYQ"
  },
  {
    id: "sci_c8_q24",
    chapter: 8,
    chapterName: "Heredity",
    marks: 4,
    type: "Case Study",
    question: "Case Study: A clinical genetics laboratory conducted karyotyping on prospective parents. The father was confirmed to have an XY chromosome constitution, while the mother had an XX constitution.\n\n(a) [1M] What is the total number of chromosomes in a normal human diploid somatic cell, and how many are autosomes?\n(b) [1M] What are the sex chromosomes present in human sperms and ova respectively?\n(c) [2M] What is the probability of this couple having a son in any given pregnancy? Show with a Punnett square.",
    answer: "(a) Total chromosomes = 46 (23 pairs); Autosomes = 44 chromosomes (22 pairs).\n(b) Gamete Sex Chromosomes:\n- Sperms carry either one **X** or one **Y** chromosome (50% X, 50% Y).\n- Ova carry exclusively one **X** chromosome (100% X).\n(c) Probability of having a son:\nMother (XX) × Father (XY)\nPunnett Square:\n- Ova: X and X\n- Sperms: X and Y\n- Offspring: 2 XX (Girls) : 2 XY (Boys)\nProbability of a son = $\\frac{2}{4} = \\frac{1}{2} = \\mathbf{50\\%}$.",
    steps: [
      "Part (a): 46 total chromosomes, 44 autosomes (22 pairs).",
      "Part (b): Sperms have X or Y; ova have X only.",
      "Part (c): Construct Punnett square and conclude 50% probability."
    ],
    explanation: "Chromosomal segregation in human meiosis ensures a baseline 1:1 probability for male vs female offspring.",
    examinerNote: "Specify 44 autosomes + 2 sex chromosomes = 46 total.",
    source: "NCERT Section 8.2 / CBSE Board 2023"
  },
  {
    id: "sci_c8_q25",
    chapter: 8,
    chapterName: "Heredity",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): The sex of a human child is determined genetically strictly by the father's gamete, not the mother's.\nReason (R): Human females produce only X-bearing ova (homogametic), while human males produce 50% X-bearing and 50% Y-bearing sperms (heterogametic).\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both A and R are true and R is the correct explanation of A.",
    explanation: "Both Assertion and Reason are true, and R correctly explains A. The mother always donates an X chromosome. If the father donates an X chromosome, the child is female (XX); if the father donates a Y chromosome, the child is male (XY). Hence paternal sperm determines the child's sex.",
    examinerNote: "Emphasize that the mother is homogametic (XX) and father is heterogametic (XY).",
    source: "CBSE Sample Paper 2026 / NCERT"
  },
  {
    id: "sci_c8_q26",
    chapter: 8,
    chapterName: "Heredity",
    marks: 5,
    type: "LA",
    question: "(a) A pure-breeding pea plant with round yellow seeds (RRYY) is crossed with a pure-breeding pea plant with wrinkled green seeds (rryy).\n  (i) What phenotype and genotype will appear in the F1 generation?\n  (ii) Write all four types of gametes produced by the F1 plants.\n  (iii) Using a 16-box Punnett square representation, state the phenotypic ratio of the F2 generation obtained by selfing the F1 plants.\n(b) State the fundamental biological law deduced by Mendel from this cross.\n(c) How does this cross prove that traits are inherited independently?",
    answer: "(a) Dihybrid Cross Analysis:\n(i) F1 Generation: All offspring have genotype RrYy and phenotype 100% Round Yellow seeds.\n(ii) F1 Gametes: RY, Ry, rY, ry (in equal proportions: 25% each).\n(iii) F2 Phenotypic Ratio: 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green (9:3:3:1 ratio across 16 boxes).\n\n(b) Mendel's Law of Independent Assortment:\nWhen two pairs of traits are combined in a hybrid, segregation of one pair of characters is completely independent of the segregation of the other pair of characters during gamete formation.\n\n(c) Proof of Independent Inheritance:\nThe appearance of two completely novel recombinant phenotypes (Round Green and Wrinkled Yellow) in the F2 generation, which were absent in the parental generation, proves that seed shape alleles assort completely independently from seed colour alleles.",
    explanation: "NCERT Chapter 8 classic 5-marker dihybrid cross derivation and Law of Independent Assortment.",
    examinerNote: "State both parental phenotypes (Round Yellow, Wrinkled Green) and recombinants (Round Green, Wrinkled Yellow).",
    source: "CBSE Board Examination (5 Marks) / KVS Support"
  }
];
