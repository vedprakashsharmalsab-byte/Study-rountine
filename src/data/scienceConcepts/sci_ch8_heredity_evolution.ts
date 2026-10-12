import type { ScienceChapterConcept } from "./types";

export const SCI_CH8_CONCEPT: ScienceChapterConcept = {
  chapterNo: 8,
  title: "Heredity",
  discipline: "Biology",
  weightage: "5–7 Marks (Guaranteed Board Questions)",
  oneLiner: "Heredity transmits genetic traits via DNA; Mendel established laws of inheritance (monohybrid 3:1, dihybrid 9:3:3:1); genes code for proteins controlling traits; human sex determination is strictly governed by the father's Y-chromosome (50% probability).",
  analogyTitle: "The Master Genetic Code & Punnett Chessboard ♟️",
  analogyContent: `Imagine every living organism receives a **deck of instruction cards** (genes) at birth. 

You receive exactly **23 cards from your mother** (via the ovum) and **23 cards from your father** (via the sperm), forming 23 paired sets (46 chromosomes). 

Some cards are **dominant** (like a King in chess) — whenever present, their trait is displayed openly (e.g., Tallness 'T' or Blood group 'A'). Other cards are **recessive** (like a pawn) — their trait can only appear if both parents contribute the identical recessive card (e.g., Dwarfness 'tt' or Blood group 'O' / 'ii').

Gregor Mendel decoded these exact probability rules in 1865 using garden pea plants, formulating mathematical patterns that govern all living inheritance!`,
  sections: [
    {
      id: "variation_and_mendel",
      label: "1. Accumulation of Variation & Mendel's Monohybrid Cross",
      heading: "DNA Variation, Why Pea Plants & Law of Segregation",
      subheading: "Asexual vs Sexual Variation + 7 Contrasting Traits + Punnett Square + 3:1 vs 1:2:1 Ratio",
      explanation: `**1. ACCUMULATION OF VARIATION DURING REPRODUCTION:**
- Reproduction inherently introduces variations due to subtle inaccuracies in DNA copying.
- **In Asexual Reproduction:** Very low variation. Offspring are almost exact clones (e.g., in a field of sugarcane, individual plants look nearly indistinguishable, differing only by minor DNA replication errors).
- **In Sexual Reproduction:** Enormous diversity and unique gene combinations arise due to chromosome shuffling (meiosis) and parental fusion.
- **Evolutionary Advantage:** Variations provide raw material for environmental adaptation. If environmental niches change (e.g., global warming, drought), individuals carrying beneficial variations survive while uniform populations risk extinction.

---

**2. GREGOR JOHANN MENDEL — FATHER OF GENETICS:**
Mendel conducted hybridization experiments on the Garden Pea (*Pisum sativum*) for 7 years (1856–1863).
- **Why did Mendel choose Garden Pea (*Pisum sativum*)? (Classic 2M Board Question):**
  1. Easily observable, distinct contrasting traits (7 pairs).
  2. Short life cycle (annual plant) allowing results across multiple generations within a year.
  3. Naturally self-pollinating (ensuring pure-breeding lines), but easily cross-pollinated manually.
  4. Large number of seeds produced per cross, providing statistically reliable data.

- **Mendel's 7 Pairs of Contrasting Characters in Garden Pea:**
  - Stem height: **Tall (T)** [Dominant] vs **Dwarf (t)** [Recessive]
  - Seed shape: **Round (R)** [Dominant] vs **Wrinkled (r)** [Recessive]
  - Seed colour: **Yellow (Y)** [Dominant] vs **Green (y)** [Recessive]
  - Flower colour: **Violet (V)** [Dominant] vs **White (v)** [Recessive]
  - Pod shape: **Inflated (I)** [Dominant] vs **Constricted (i)** [Recessive]
  - Pod colour: **Green (G)** [Dominant] vs **Yellow (g)** [Recessive]
  - Flower position: **Axial (A)** [Dominant] vs **Terminal (a)** [Recessive]

---

**3. MONOHYBRID CROSS (Inheritance of a Single Trait):**
A cross between two pea plants studying the inheritance of **one pair of contrasting traits** (e.g., Height).

- **Parents (P Generation):** Pure Tall ($TT$) $\\times$ Pure Dwarf ($tt$)
- **Gametes:** Pure tall produces '$T$'; Pure dwarf produces '$t$'.
- **$F_1$ Generation (First Filial):** All plants are heterozygous **$Tt$ (100% Tall)**.
  - *Observation:* No intermediate (medium height) plants formed; only the dominant trait was expressed.
- **Self-Pollination of $F_1$ ($Tt \\times Tt$):**
  - Gametes produced: $50\\%\\; T$ and $50\\%\\; t$.

**$F_2$ Punnett Square:**

| | Gamete $T$ | Gamete $t$ |
|---|---|---|
| **Gamete $T$** | $TT$ (Tall) | $Tt$ (Tall) |
| **Gamete $t$** | $Tt$ (Tall) | $tt$ (Dwarf) |

- **$F_2$ Phenotypic Ratio:** **3 Tall : 1 Dwarf** (75% Tall, 25% Dwarf).
- **$F_2$ Genotypic Ratio:** **1 TT : 2 Tt : 1 tt** (25% homozygous tall, 50% heterozygous tall, 25% homozygous dwarf).

---

**4. MENDEL'S FIRST LAW — LAW OF SEGREGATION (Purity of Gametes):**
*"Alleles of a gene pair separate (segregate) during gamete formation so that each gamete carries only one allele for each trait. When gametes unite at fertilisation, the double allele condition is restored."*`,
      formulasOrKeyPoints: [
        {
          title: "Monohybrid Ratios Quick Summary",
          content: `$$\\begin{aligned}
\\textbf{F}_1 \\text{ Generation:} & \\quad \\text{All } Tt \\text{ (100% Tall Phenotype)} \\\\
\\textbf{F}_2 \\text{ Phenotypic Ratio:} & \\quad \\mathbf{3 \\text{ Tall} : 1 \\text{ Dwarf}} \\\\
\\textbf{F}_2 \\text{ Genotypic Ratio:} & \\quad \\mathbf{1\\,TT : 2\\,Tt : 1\\,tt} \\\\
\\text{Homozygous Dominant:} & \\quad TT \\; (25\\%) \\\\
\\text{Heterozygous Dominant:} & \\quad Tt \\; (50\\%) \\\\
\\text{Homozygous Recessive:} & \\quad tt \\; (25\\%)
\\end{aligned}$$`,
          note: "Examiners love asking: 'What percentage of F₂ plants are heterozygous tall?' The answer is 50% (2 out of 4), NOT 75%."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Phenotype with Genotype.",
          correction: "Phenotype is the observable physical appearance (Tall or Dwarf). Genotype is the underlying genetic makeup (TT, Tt, or tt). A tall plant can be homozygous (TT) or heterozygous (Tt); they share the same phenotype but have different genotypes."
        }
      ]
    },
    {
      id: "dihybrid_cross_and_expression",
      label: "2. Dihybrid Cross & Mechanism of Trait Expression",
      heading: "Dihybrid Cross, Independent Assortment & How Genes Express Proteins",
      subheading: "Round/Yellow vs Wrinkled/Green + 16-box Punnett Grid + Cellular DNA to Protein Mechanism",
      explanation: `**1. DIHYBRID CROSS (Inheritance of Two Independent Traits):**
A cross studying the simultaneous inheritance of **two pairs of contrasting traits**:
- Seed Shape: Round ($R$) vs Wrinkled ($r$)
- Seed Colour: Yellow ($Y$) vs Green ($y$)

- **Parents (P Generation):** Round Yellow ($RRYY$) $\\times$ Wrinkled Green ($rryy$)
- **Gametes:** $RY$ from first parent, $ry$ from second parent.
- **$F_1$ Generation:** All plants are **$RrYy$ (100% Round Yellow)**.

- **Self-Pollination of $F_1$ ($RrYy \\times RrYy$):**
  - Each parent produces 4 types of gametes in equal proportions (25% each): **$RY$, $Ry$, $rY$, $ry$**.

**$F_2$ Generation (16-Cell Punnett Square):**

| Gametes | $RY$ | $Ry$ | $rY$ | $ry$ |
|---------|------|------|------|------|
| **$RY$** | $RRYY$ (Round Yellow) | $RRYy$ (Round Yellow) | $RrYY$ (Round Yellow) | $RrYy$ (Round Yellow) |
| **$Ry$** | $RRYy$ (Round Yellow) | $RRyy$ (Round Green) | $RrYy$ (Round Yellow) | $Rryy$ (Round Green) |
| **$rY$** | $RrYY$ (Round Yellow) | $RrYy$ (Round Yellow) | $rrYY$ (Wrinkled Yellow) | $rrYy$ (Wrinkled Yellow) |
| **$ry$** | $RrYy$ (Round Yellow) | $Rryy$ (Round Green) | $rrYy$ (Wrinkled Yellow) | $rryy$ (Wrinkled Green) |

**Phenotypic Analysis of 16 Offspring:**
- **Round Yellow:** **9** (parental combination)
- **Round Green:** **3** (recombinant / new combination)
- **Wrinkled Yellow:** **3** (recombinant / new combination)
- **Wrinkled Green:** **1** (parental combination)

**$F_2$ Phenotypic Ratio = 9 : 3 : 3 : 1**

---

**2. MENDEL'S SECOND LAW — LAW OF INDEPENDENT ASSORTMENT:**
*"When two pairs of traits are combined in a hybrid, segregation of one pair of characters is completely independent of the other pair during gamete formation."*
- Round seeds can be Yellow or Green; Wrinkled seeds can be Yellow or Green. Traits assort independently!

---

**3. HOW DO TRAITS ACTUALLY GET EXPRESSED? (NCERT Section 9.2.4):**
- **Cellular DNA** is the master information source for making proteins in the cell.
- A specific segment of DNA providing information for one functional protein is called a **Gene**.
- **Enzyme-Hormone Linkage:**
  - For example, plant height depends on the amount of a growth hormone.
  - The amount of plant growth hormone produced depends on the efficiency of an **enzyme** (protein) synthesizing it.
  - If the gene has the normal allele, the enzyme works efficiently $\\to$ plenty of hormone is produced $\\to$ **Tall Plant**.
  - If the gene has an altered/mutant allele, the enzyme works less efficiently $\\to$ very little hormone is synthesized $\\to$ **Dwarf Plant**.
  - **Conclusion:** Genes control traits by synthesizing specific enzymes and proteins!`,
      formulasOrKeyPoints: [
        {
          title: "Dihybrid Cross Mathematical Breakdown",
          content: `$$\\begin{aligned}
\\text{Round Yellow} & = \\frac{9}{16} \\approx 56.25\\% \\\\
\\text{Round Green (New)} & = \\frac{3}{16} \\approx 18.75\\% \\\\
\\text{Wrinkled Yellow (New)} & = \\frac{3}{16} \\approx 18.75\\% \\\\
\\text{Wrinkled Green} & = \\frac{1}{16} \\approx 6.25\\% \\\\
\\mathbf{F_2 \\text{ Ratio}} & = \\mathbf{9 : 3 : 3 : 1}
\\end{aligned}$$`,
          note: "Notice that 6 out of 16 (37.5%) are novel recombinations not present in the original P generation parents."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing recombinant combinations as parental traits.",
          correction: "Parental combinations were Round Yellow and Wrinkled Green. Round Green and Wrinkled Yellow are NEW RECOMBINANT phenotypes resulting from Independent Assortment."
        }
      ]
    },
    {
      id: "sex_determination_blood_groups",
      label: "3. Sex Determination in Humans & Blood Group Genetics",
      heading: "XY Chromosomes, Paternal Determination & ABO Blood Groups",
      subheading: "23 Pairs of Chromosomes + XX vs XY Cross + Father's Role + ABO Alleles (IA, IB, i)",
      explanation: `**1. SEX DETERMINATION IN HUMAN BEINGS:**
Human beings have **23 pairs (46 total) of chromosomes** in the nucleus of each somatic cell:
- **22 pairs = Autosomes:** Control general somatic traits; identical in males and females.
- **1 pair = Sex Chromosomes:** Determine the biological sex of the individual.
  - **Females have a perfect pair:** **$XX$** (Homogametic). Every egg produced contains an **$X$ chromosome**.
  - **Males have a mismatched pair:** **$XY$** (Heterogametic). Produces two types of sperms: **50% carrying $X$** and **50% carrying $Y$**.

**The Genetic Cross:**
$$\\text{Mother } (XX) \\times \\text{Father } (XY)$$

| | Sperm $X$ (50%) | Sperm $Y$ (50%) |
|---|---|---|
| **Egg $X$ (100%)** | **$XX$ (Female Child)** | **$XY$ (Male Child)** |

**Crucial Scientific Inferences for Board Exams:**
1. **Equal Probability:** The probability of having a male or female child is always precisely **50% (1:1 ratio)** at every pregnancy.
2. **The Father Determines Sex:** Since females can only contribute an $X$ chromosome, **the sex of the child is entirely determined by the sperm contributed by the father**.
   - If an $X$-bearing sperm fertilises the ovum $\\to$ Girl child ($XX$).
   - If a $Y$-bearing sperm fertilises the ovum $\\to$ Boy child ($XY$).
   - Blaming the mother for the birth of a girl child is scientifically completely unfounded!

---

**2. INHERITANCE OF BLOOD GROUPS IN HUMANS (ABO System):**
Human blood type is governed by the gene $I$, which has three alleles: $I^A$, $I^B$, and $i$.
- $I^A$ and $I^B$ are **co-dominant** over each other.
- Both $I^A$ and $I^B$ are **completely dominant** over the recessive allele $i$.

| Blood Group (Phenotype) | Possible Genotypes | Antigens on RBC |
|-------------------------|--------------------|-----------------|
| **Group A** | $I^A I^A$ (homozygous) OR $I^A i$ (heterozygous) | Antigen A |
| **Group B** | $I^B I^B$ (homozygous) OR $I^B i$ (heterozygous) | Antigen B |
| **Group AB** | $I^A I^B$ (co-dominant) | Both Antigen A and B |
| **Group O** | $ii$ (homozygous recessive) | Neither antigen |

- **Sample Board Problem:** *A man with blood group A marries a woman with blood group O, and their daughter has blood group O. Is blood group A dominant or recessive?*
  - The daughter has blood group O, so her genotype must be $ii$.
  - She received one recessive allele $i$ from mother ($ii$) and one recessive allele $i$ from father.
  - Therefore, the father must be heterozygous ($I^A i$).
  - Since the father has blood group A despite possessing an $i$ allele, blood group A ($I^A$) is DOMINANT over O ($i$).

---

**3. NOTE ON CBSE RATIONALIZED SYLLABUS (2024–2027):**
> [!IMPORTANT]
> In the active CBSE Class 10 Syllabus, the topic of **Evolution** (Darwin's Theory, Lamarckism, Speciation, Fossils, Homologous and Analogous Organs, and Human Evolution) has been **FORMALLY EXCLUDED** from the board examination.
> Focus 100% of exam preparation on:
> 1. Accumulation of Variation during reproduction.
> 2. Mendel's Monohybrid & Dihybrid crosses.
> 3. Sex determination in human beings.
> 4. Gene expression and blood group inheritance.`,
      formulasOrKeyPoints: [
        {
          title: "Sex Determination Cross Diagram",
          content: `$$\\begin{matrix}
& & \\text{Mother } (XX) & \\times & \\text{Father } (XY) \\\\
\\text{Gametes:} & & X & & X \\quad Y \\\\
\\text{Offspring:} & & XX & & XY \\\\
& & \\mathbf{50\\% \\text{ Girl}} & & \\mathbf{50\\% \\text{ Boy}}
\\end{matrix}$$`,
          note: "Always draw this formal genetic cross when answering: 'How is the sex of a child determined in human beings?'"
        }
      ],
      examinerTraps: [
        {
          trap: "Writing that the previous children determine the sex of the next child.",
          correction: "Each fertilisation is an independent statistical event. Even if a family has three daughters, the probability of the fourth child being a boy remains exactly 50% (1 in 2)."
        }
      ]
    }
  ]
};
