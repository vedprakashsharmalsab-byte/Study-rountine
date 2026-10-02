import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH8_QUESTIONS: VaultQuestion[] = [
  // ==========================================
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON
  // ==========================================
  {
    id: "sci_c8_q1",
    chapter: 8,
    chapterName: "Heredity and Evolution",
    marks: 1,
    type: "MCQ",
    question: "Mendel's Law of Segregation states that:\n(a) Different traits are inherited independently of each other\n(b) Each organism has two alleles for each trait, which separate during gamete formation\n(c) Dominant alleles mask recessive alleles\n(d) Genes are located on chromosomes",
    options: [
      "Different traits are inherited independently",
      "Each organism has two alleles which separate during gamete formation",
      "Dominant alleles mask recessive alleles",
      "Genes are located on chromosomes"
    ],
    correctOption: 1,
    answer: "Option (b): Each organism has two alleles for each trait, which separate during gamete formation",
    steps: [
      "Mendel's Law of Segregation (Law of Purity of Gametes): Each individual has a pair of alleles for each trait.",
      "During gamete formation (meiosis), the alleles SEPARATE — each gamete gets only ONE allele.",
      "Option (a) = Law of Independent Assortment (different law)."
    ],
    explanation: "Law of Segregation: paired alleles separate when gametes are formed. Each gamete carries one allele.",
    formula: "Tt \\xrightarrow{\\text{meiosis}} T \\text{ (gamete)} + t \\text{ (gamete)}",
    examinerNote: "Mendel's three laws: Dominance, Segregation, Independent Assortment. Know which is which.",
    source: "NCERT Section 9.1 / Board 2023"
  },
  {
    id: "sci_c8_q2",
    chapter: 8,
    chapterName: "Heredity and Evolution",
    marks: 1,
    type: "MCQ",
    question: "In a cross between a pure tall plant (TT) and a pure dwarf plant (tt), the F₁ generation will be:\n(a) All tall\n(b) All dwarf\n(c) Half tall and half dwarf\n(d) 3 tall : 1 dwarf",
    options: [
      "All tall",
      "All dwarf",
      "Half tall and half dwarf",
      "3 tall : 1 dwarf"
    ],
    correctOption: 0,
    answer: "Option (a): All tall",
    steps: [
      "Cross: TT × tt",
      "All F₁ offspring = Tt (heterozygous)",
      "Since T (tall) is dominant over t (dwarf), all Tt plants appear TALL.",
      "3:1 ratio appears in F₂, not F₁."
    ],
    explanation: "F₁ of a monohybrid cross between pure dominant and recessive parents = all heterozygous (showing dominant trait).",
    formula: "TT \\times tt \\to \\text{All } Tt \\text{ (Tall)}",
    examinerNote: "F₁ = all tall (Tt). F₂ = 3 tall : 1 dwarf (1TT + 2Tt : 1tt). Know both ratios.",
    source: "NCERT Section 9.1 / Board 2022, 2024"
  },
  {
    id: "sci_c8_q3",
    chapter: 8,
    chapterName: "Heredity and Evolution",
    marks: 1,
    type: "MCQ",
    question: "The sex of a child is determined by:\n(a) The mother's chromosomes only\n(b) The father's chromosomes\n(c) Both parents equally\n(d) Environmental conditions",
    options: [
      "The mother's chromosomes only",
      "The father's chromosomes",
      "Both parents equally",
      "Environmental conditions"
    ],
    correctOption: 1,
    answer: "Option (b): The father's chromosomes",
    steps: [
      "Mother has XX chromosomes → all eggs carry X chromosome.",
      "Father has XY chromosomes → sperm may carry X or Y.",
      "If X sperm fertilizes egg: XX → Female child.",
      "If Y sperm fertilizes egg: XY → Male child.",
      "The father's sperm determines the sex of the child."
    ],
    explanation: "Sex determination: Mother contributes X. Father contributes either X (→girl) or Y (→boy).",
    formula: "\\text{Father's Y sperm} \\to \\text{Boy (XY)}; \\quad \\text{Father's X sperm} \\to \\text{Girl (XX)}",
    examinerNote: "Very important social fact: sex is determined by FATHER's sperm, NOT mother's egg. Politically significant NCERT point.",
    source: "NCERT Section 9.2 / Board 2022, 2023, 2024"
  },
  {
    id: "sci_c8_q4",
    chapter: 8,
    chapterName: "Heredity and Evolution",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Acquired characters are not inherited by offspring.\nReason (R): Changes in somatic (body) cells do not affect the DNA in reproductive cells.\n(a) Both A and R are true and R is correct explanation\n(b) Both A and R are true but R is NOT the correct explanation\n(c) A is true but R is false\n(d) A is false but R is true",
    options: [
      "Both A and R are true and R is correct explanation",
      "Both A and R are true but R is NOT correct explanation",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a): Both true, R is correct explanation",
    steps: [
      "A: Acquired characteristics (e.g., muscles developed by exercise) are NOT inherited. ✓ TRUE",
      "R: Changes in somatic cells (body cells) do not alter germ cells (reproductive cells) DNA. ✓ TRUE",
      "R correctly explains WHY acquired traits are not inherited — because only germ-cell DNA passes to offspring."
    ],
    explanation: "Only germ-cell DNA is passed to offspring. Somatic changes (muscles, scars) are not in germ cells.",
    examinerNote: "This is a key NCERT philosophical point. Distinguishes Lamarckism (wrong) from Darwinism (correct).",
    source: "NCERT Section 9.3 / Board 2023"
  },
  {
    id: "sci_c8_q5",
    chapter: 8,
    chapterName: "Heredity and Evolution",
    marks: 1,
    type: "MCQ",
    question: "Homologous organs are those that:\n(a) Have the same function but different origin\n(b) Have different function but same basic structure and evolutionary origin\n(c) Have the same function and same origin\n(d) Have different function and different origin",
    options: [
      "Have the same function but different origin",
      "Have different function but same basic structure and evolutionary origin",
      "Have the same function and same origin",
      "Have different function and different origin"
    ],
    correctOption: 1,
    answer: "Option (b): Different function but same basic structure and evolutionary origin",
    steps: [
      "Homologous organs: same basic structural plan, same evolutionary origin, BUT DIFFERENT FUNCTIONS.",
      "Example: Human hand, bat's wing, whale's flipper — all have same bone structure (humerus, radius, ulna, carpals) but serve different functions.",
      "Analogous organs: SAME function but DIFFERENT origin (e.g., bird wing and butterfly wing)."
    ],
    explanation: "Homologous = same origin, different function (evidence of divergent evolution).",
    formula: "\\text{Homologous: same origin} \\neq \\text{same function}",
    examinerNote: "Homologous vs Analogous: most confused concept. Homologous = common ancestry. Analogous = convergent evolution.",
    source: "NCERT Section 9.4 / Board 2022, 2024"
  },
  {
    id: "sci_c8_q6",
    chapter: 8,
    chapterName: "Heredity and Evolution",
    marks: 1,
    type: "MCQ",
    question: "Evolution is best defined as:\n(a) Survival of the fittest in all environments\n(b) Change in allele frequencies in a population over generations\n(c) Formation of new species by genetic mutations\n(d) Natural selection acting on acquired traits",
    options: [
      "Survival of the fittest in all environments",
      "Change in allele frequencies in a population over generations",
      "Formation of new species by genetic mutations",
      "Natural selection acting on acquired traits"
    ],
    correctOption: 1,
    answer: "Option (b): Change in allele frequencies in a population over generations",
    steps: [
      "Evolution = gradual change in the heritable characteristics of biological populations over successive generations.",
      "Mechanism: natural selection acts on genetic variation → changes allele frequencies → new species over time.",
      "Option (a) is informal summary. Option (c) is incomplete. Option (d) is Lamarckism (incorrect)."
    ],
    explanation: "Evolution = genetic change in populations over time, driven by natural selection on heritable variation.",
    examinerNote: "NCERT: Evolution is NOT 'progress' — it is CHANGE. New species are not 'superior', just adapted to specific environments.",
    source: "NCERT Section 9.4"
  },

  // ==========================================
  // SECTION B: 2-MARK VSA
  // ==========================================
  {
    id: "sci_c8_q7",
    chapter: 8,
    chapterName: "Heredity and Evolution",
    marks: 2,
    type: "VSA",
    question: "In Mendel's cross between tall (TT) × dwarf (tt) pea plants, what is the expected ratio of genotypes and phenotypes in the F₂ generation?",
    answer: "F₂ Genotype ratio: 1 TT : 2 Tt : 1 tt. Phenotype ratio: 3 Tall : 1 Dwarf.",
    steps: [
      "F₁ from TT × tt = all Tt",
      "F₂ from Tt × Tt:",
      "Gametes from each Tt: T and t",
      "Punnett Square: TT : Tt : Tt : tt = 1:2:1",
      "Genotype ratio: 1 TT : 2 Tt : 1 tt",
      "Phenotype: TT = Tall, Tt = Tall (T dominant), tt = Dwarf",
      "Phenotype ratio: 3 Tall : 1 Dwarf"
    ],
    explanation: "Classic Mendelian monohybrid cross. F₂ genotype 1:2:1, phenotype 3:1.",
    formula: "Tt \\times Tt \\to 1TT:2Tt:1tt \\to 3\\text{ Tall}:1\\text{ Dwarf}",
    examinerNote: "MANDATORY board question. Draw Punnett square for full marks. Genotype (1:2:1) ≠ Phenotype (3:1).",
    source: "NCERT Section 9.1 / Board 2022, 2024"
  },
  {
    id: "sci_c8_q8",
    chapter: 8,
    chapterName: "Heredity and Evolution",
    marks: 2,
    type: "VSA",
    question: "What is speciation? Name two factors that could lead to the formation of a new species.",
    answer: "Speciation is the formation of new species from existing species. Factors: geographic isolation and genetic drift.",
    steps: [
      "Speciation: The evolutionary process by which new species arise from existing species due to accumulation of genetic differences.",
      "Two factors leading to speciation:",
      "1. Geographic isolation: A mountain range, river, or ocean separates a population → isolated groups accumulate different mutations → eventually unable to interbreed → new species.",
      "2. Genetic drift: In small populations, random chance changes gene frequencies dramatically → divergence from original population → new species over generations."
    ],
    explanation: "Speciation = reproductive isolation over time. Geographic isolation is the most common NCERT mechanism.",
    formula: "\\text{Population isolation} \\to \\text{Different mutations} \\to \\text{Reproductive isolation} \\to \\text{New species}",
    examinerNote: "Board frequently asks for TWO factors. Geographic isolation + natural selection OR genetic drift are best answers.",
    source: "NCERT Section 9.4 / Board 2022"
  },

  // ==========================================
  // SECTION C: 3-MARK SA
  // ==========================================
  {
    id: "sci_c8_q9",
    chapter: 8,
    chapterName: "Heredity and Evolution",
    marks: 3,
    type: "SA",
    question: "Explain Darwin's theory of natural selection with an example.",
    answer: "Natural selection: organisms better adapted to environment survive and reproduce more (survival of the fittest).",
    steps: [
      "Key assumptions of Darwinian natural selection:",
      "1. VARIATION: Members of a population show inheritable variation in traits.",
      "2. STRUGGLE FOR EXISTENCE: More organisms are born than can survive. They compete for resources.",
      "3. SURVIVAL OF THE FITTEST: Organisms with favorable variations survive and reproduce.",
      "4. INHERITANCE: Favorable traits pass to offspring → become more common over generations.",
      "5. Gradual accumulation of changes → new species over long time.",
      "Example: Antibiotic resistance in bacteria:",
      "- A population of bacteria has variation. Some bacteria by chance have mutation making them resistant to antibiotic.",
      "- When antibiotic is applied: susceptible bacteria die, resistant ones SURVIVE and reproduce.",
      "- Next generation = mostly antibiotic-resistant bacteria → natural selection in action."
    ],
    explanation: "Darwin: Environment selects the best-adapted individuals. Over generations, populations evolve.",
    formula: "\\text{Variation} \\to \\text{Selection} \\to \\text{Adaptation} \\to \\text{Evolution}",
    examinerNote: "Use bacteria/antibiotic or industrial melanism (peppered moth) as example. Explain all 4 steps.",
    source: "NCERT Section 9.4 / Board 2022"
  },
  {
    id: "sci_c8_q10",
    chapter: 8,
    chapterName: "Heredity and Evolution",
    marks: 3,
    type: "SA",
    question: "Distinguish between homologous and analogous organs with two examples each.",
    answer: "Homologous: same origin, different function. Analogous: same function, different origin.",
    steps: [
      "HOMOLOGOUS ORGANS:",
      "- Definition: Same basic structure and evolutionary origin but different functions.",
      "- Evidence of DIVERGENT evolution from a common ancestor.",
      "- Examples: (i) Human arm, whale flipper, bat wing — all have humerus-radius-ulna structure.",
      "  (ii) Thorns in Bougainvillea and tendrils in Cucurbita — both are modified stems.",
      "ANALOGOUS ORGANS:",
      "- Definition: Different origin and structure but perform the same function.",
      "- Evidence of CONVERGENT evolution (similar environment → similar adaptations).",
      "- Examples: (i) Wings of birds (bone+feather) and wings of insects (chitin) — both for flying.",
      "  (ii) Eyes of octopus and eyes of vertebrates — similar function, different evolutionary origins."
    ],
    explanation: "Homologous = common ancestry. Analogous = convergent adaptation to same function.",
    formula: "\\text{Homologous} \\to \\text{Divergent evolution}; \\quad \\text{Analogous} \\to \\text{Convergent evolution}",
    examinerNote: "Tabular format: define, example × 2 for each. Board awards 1 mark per definition + 1 per example pair.",
    source: "NCERT Section 9.4 / Board 2023"
  },

  // ==========================================
  // SECTION D: 5-MARK LA
  // ==========================================
  {
    id: "sci_c8_q11",
    chapter: 8,
    chapterName: "Heredity and Evolution",
    marks: 5,
    type: "LA",
    question: "Describe Mendel's experiment of dihybrid cross between round yellow seeds (RRYY) and wrinkled green seeds (rryy). Write the F₂ phenotype ratio and state the law derived from this experiment.",
    answer: "F₂ phenotype ratio: 9:3:3:1. Mendel's Law of Independent Assortment.",
    steps: [
      "Parents: Round Yellow (RRYY) × Wrinkled Green (rryy)",
      "F₁: All RrYy (Round Yellow — both dominant traits)",
      "F₂ cross: RrYy × RrYy",
      "Gametes from each RrYy: RY, Ry, rY, ry (4 types each)",
      "16 combinations in Punnett Square (4×4):",
      "F₂ PHENOTYPE RATIO:",
      "9 Round Yellow (R_Y_)",
      "3 Round Green (R_yy)",
      "3 Wrinkled Yellow (rrY_)",
      "1 Wrinkled Green (rryy)",
      "Phenotype ratio = 9:3:3:1",
      "LAW DERIVED: Law of Independent Assortment:",
      "'When two or more pairs of alleles are inherited simultaneously, each pair is inherited independently of the other pairs.'"
    ],
    explanation: "Dihybrid cross → 16 combinations → 9:3:3:1 phenotypic ratio. Proves independent segregation of traits.",
    formula: "RRYY \\times rryy \\to F_1: RrYy \\to F_2: 9:3:3:1",
    examinerNote: "Draw 4×4 Punnett square. The 9:3:3:1 ratio and Law of Independent Assortment are must-know facts.",
    source: "NCERT Section 9.1 / Board 2021, 2023"
  },

  // ==========================================
  // CASE STUDY & ADDITIONAL PYQs
  // ==========================================
  {
    id: "sci_c8_q12",
    chapter: 8,
    chapterName: "Heredity and Evolution",
    marks: 4,
    type: "Case Study",
    question: "A woman whose father was colour blind marries a man with normal vision.\n\n(i) [1M] What is colour blindness? Name the chromosome it is linked to.\n(ii) [1M] Write the genotype of the woman.\n(iii) [2M] Draw a cross diagram to show the expected genotypes of their children. What fraction of sons will be colour blind?",
    answer: "(i) Colour blindness = inability to distinguish red/green, X-linked recessive. (ii) X^B X^b (carrier). (iii) X^B Y × X^B X^b → 50% sons colour blind.",
    steps: [
      "(i) Colour blindness: inability to distinguish between red and green colours. Caused by recessive gene on X chromosome (X-linked).",
      "(ii) Woman's father was colour blind: XbY. Father gives Xb to daughter. Mother (assumed normal): XB. So woman = XBXb (carrier).",
      "(iii) Cross: Woman (XBXb) × Man (XBY):",
      "Gametes: XB, Xb (from woman); XB, Y (from man)",
      "Children: XBXB (normal female), XBXb (carrier female), XBY (normal male), XbY (colour blind male)",
      "50% of sons will be colour blind (XbY)."
    ],
    explanation: "X-linked traits: sons get X only from mother. Carrier mothers pass X-linked recessive to 50% sons.",
    formula: "X^BX^b \\times X^BY \\to X^BX^B, X^BX^b, X^BY, X^bY",
    examinerNote: "Sex-linked inheritance: daughters get one X from each parent. Sons get X only from mother, Y from father.",
    source: "NCERT Section 9.2 / Board 2023"
  },
  {
    id: "sci_c8_q13",
    chapter: 8,
    chapterName: "Heredity and Evolution",
    marks: 2,
    type: "VSA",
    question: "What evidence from fossils supports evolution?",
    answer: "Fossils show gradual changes in organisms over geological time and reveal extinct species that are ancestors of present life forms.",
    steps: [
      "Fossils = preserved remains or impressions of organisms from the past, found in sedimentary rocks.",
      "Evidence for evolution:",
      "1. Show changes over time: Fossils in older rocks are simpler; fossils in newer rocks are more complex.",
      "2. Connect modern species to extinct ancestors (e.g., Archaeopteryx links reptiles to birds).",
      "3. Show intermediate forms between major groups (transitional fossils).",
      "4. Allow dating using radioactive elements → confirm time scale of evolution."
    ],
    explanation: "Fossil record shows progression from simple to complex life over millions of years — direct evidence of evolution.",
    examinerNote: "Archaeopteryx = transitional fossil between reptiles and birds. Must mention this specific example.",
    source: "NCERT Section 9.4 / Board 2022"
  }
];
