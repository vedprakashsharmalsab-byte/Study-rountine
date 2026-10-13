import type { ScienceChapterConcept } from "./types";

export const SCI_CH8_CONCEPT: ScienceChapterConcept = {
  chapterNo: 8,
  title: "Heredity",
  discipline: "Biology",
  weightage: "4–5 Marks (High Conceptual Weightage)",
  oneLiner: "Transmission of biological traits from parents to offspring governed by Mendel's laws of inheritance and DNA chromosome segregation.",
  analogyTitle: "The Chromosomal Recipe Book & Shuffling Cards",
  analogyContent: `Imagine an ancestral cookbook passed down through generations:
1. **The Recipe Volumes (Chromosomes):** Each cell inherits two complete sets of 23 recipe volumes (46 volumes total)—one set from the maternal library, one from the paternal library.
2. **The Recipe Entries (Genes & Alleles):** Each page dictates how to cook a specific trait (e.g. eye color, plant height). One parent may contribute the 'Sugar-Dominant' recipe while the other contributes the 'Low-Sugar' recipe.
3. **The Expression Rule (Dominance):** If the cell has even a single copy of the dominant recipe, the dish is prepared according to the dominant instructions. The recessive recipe is expressed only when both inherited volumes agree on the alternative instruction.`,
  sections: [
    {
      id: "variation_and_mendel",
      label: "1. Variation & Mendel's Monohybrid Cross",
      heading: "DNA Variation, Why Pea Plants & Law of Segregation",
      subheading: "Asexual vs Sexual Variation + 7 Contrasting Traits + Punnett Square + 3:1 vs 1:2:1 Ratio",
      explanation: `### Heredity and Accumulation of Variation:
- **Heredity:** The biological transmission of characters, traits, and morphological features from parents to offspring across successive generations.
- **Variation:** The morphological or physiological differences exhibited by individuals of the same species.
  - *In Asexual Reproduction:* Variations are minimal and arise solely due to minor chemical copying inaccuracies during DNA replication (e.g. a bacterium dividing into two yields nearly identical daughters).
  - *In Sexual Reproduction:* Variations are immense due to the fusion of two genetically distinct gametes, homologous chromosome crossing over during meiosis, and random fertilization.
  - *Evolutionary Significance:* Accumulation of favorable variations over multiple generations provides the raw material for adaptation to fluctuating environmental niches and long-term natural selection.

---

### Gregor Johann Mendel — The Father of Genetics:
Conducted landmark hybridization experiments between 1856 and 1863 using the common garden pea plant, **Pisum sativum**.

#### Why Mendel Chose the Garden Pea (*Pisum sativum*):
1. **Clear Contrasting Traits:** Exhibits distinct, sharply contrasting traits with no blending intermediates (e.g., plants are either distinctly Tall or distinctly Dwarf).
2. **Natural Self-Pollination:** Flowers are naturally self-pollinating, making it easy to establish pure-breeding (homozygous) parental lines.
3. **Easy Cross-Pollination:** Large bisexual floral anatomy permits easy manual emasculation (removal of anthers) and controlled artificial pollination.
4. **Short Life Cycle:** Annual herbaceous plant completing its life cycle in a few months, enabling observation of multiple generations in a short time.
5. **High Progeny Yield:** A single cross yields hundreds of seeds, providing statistically robust numerical data.

#### The 7 Pairs of Contrasting Characters in Garden Pea:
1. **Plant Height:** Tall (Dominant, $T$) vs Dwarf (Recessive, $t$)
2. **Seed Shape:** Round (Dominant, $R$) vs Wrinkled (Recessive, $r$)
3. **Seed Colour:** Yellow (Dominant, $Y$) vs Green (Recessive, $y$)
4. **Flower Colour:** Violet/Purple (Dominant, $W$) vs White (Recessive, $w$)
5. **Pod Shape:** Inflated (Dominant) vs Constricted (Recessive)
6. **Pod Colour:** Green (Dominant) vs Yellow (Recessive)
7. **Flower Position:** Axial (Dominant) vs Terminal (Recessive)

---

### Mendel's Monohybrid Cross (Height Inheritance):
A breeding cross that follows the inheritance of a **single pair** of contrasting characters.

#### 1. Parental Cross (P Generation):
- Pure-breeding Tall plant ($\\text{TT}$) $\\times$ Pure-breeding Dwarf plant ($\\text{tt}$).
- Gametes formed: All '$\\text{T}$' from the tall parent, all '$\\text{t}$' from the dwarf parent.

#### 2. First Filial Generation (F1 Generation):
- Every offspring inherits one allele from each parent: $\\text{Tt}$.
- **Phenotype:** 100% of the F1 plants are **Tall**.
- *Mendel's Deduction (The Law of Dominance):* Even though the dwarf factor '$\\text{t}$' was present, only the tall trait '$\\text{T}$' was expressed. The allele that expresses itself in the presence of an alternate allele is **Dominant**; the allele whose expression is suppressed is **Recessive**.

#### 3. Second Filial Generation (F2 Generation via Selfing):
- F1 plants are allowed to self-pollinate: $\\text{Tt} \\times \\text{Tt}$.
- Gametes produced: $\\text{T}$ (50%) and $\\text{t}$ (50%).
- **Punnett Square ($2 \\times 2$ Matrix):**
  - $\\text{T} \\times \\text{T} \\to \\text{TT}$ (Homozygous Tall)
  - $\\text{T} \\times \\text{t} \\to \\text{Tt}$ (Heterozygous Tall)
  - $\\text{t} \\times \\text{T} \\to \\text{Tt}$ (Heterozygous Tall)
  - $\\text{t} \\times \\text{t} \\to \\text{tt}$ (Homozygous Dwarf)
- **Monohybrid Phenotypic Ratio:** $\\mathbf{3 \\text{ Tall} : 1 \\text{ Dwarf}}$ ($75\\%$ Tall, $25\\%$ Dwarf).
- **Monohybrid Genotypic Ratio:** $\\mathbf{1 \\text{ TT} : 2 \\text{ Tt} : 1 \\text{ tt}}$ ($1 : 2 : 1$).

#### 4. The Law of Segregation (Purity of Gametes):
The two alleles of a gene remain together in a heterozygous individual without blending or modifying each other, and **segregate (separate)** from one another during gamete formation so that each gamete carries only one allele of the gene with equal probability.

---

### Monohybrid Cross Ratios & Phenotype Matrix:
| Genotype | Allele Makeup | Phenotypic Appearance | F2 Mathematical Ratio |
| :--- | :--- | :--- | :--- |
| TT | Homozygous Dominant (Pure) | Tall Plant | 1 / 4 (25%) |
| Tt | Heterozygous (Hybrid) | Tall Plant (Dominance of T) | 2 / 4 (50%) |
| tt | Homozygous Recessive (Pure) | Dwarf Plant (Recessive expressed) | 1 / 4 (25%) |
| Phenotypic Ratio | Tall : Dwarf | Physical observation: 3 Tall : 1 Dwarf | 3 : 1 |
| Genotypic Ratio | TT : Tt : tt | Genetic makeup: 1 TT : 2 Tt : 1 tt | 1 : 2 : 1 |`
    },
    {
      id: "dihybrid_cross_and_expression",
      label: "2. Dihybrid Cross & Mechanism of Trait Expression",
      heading: "Dihybrid Cross, Independent Assortment & How Genes Express Proteins",
      subheading: "Round/Yellow vs Wrinkled/Green + 16-box Punnett Grid + Cellular DNA to Protein Mechanism",
      explanation: `### Mendel's Dihybrid Cross:
A cross that tracks the simultaneous inheritance of **two pairs** of contrasting characters (Seed Shape and Seed Colour).

#### 1. Parental Cross (P Generation):
- Pure Round Yellow seeds ($\\text{RRYY}$) $\\times$ Pure Wrinkled Green seeds ($\\text{rryy}$).
- Gametes: $\\text{RY}$ from one parent, $\\text{ry}$ from the other.

#### 2. First Filial Generation (F1 Generation):
- Genotype: All offspring are $\\text{RrYy}$.
- **Phenotype:** 100% Round Yellow (since Round $R$ dominates Wrinkled $r$, and Yellow $Y$ dominates Green $y$).

#### 3. Second Filial Generation (F2 Generation via Selfing):
- F1 plants self-pollinate: $\\text{RrYy} \\times \\text{RrYy}$.
- Each parent produces **4 distinct types of gametes** in equal proportions:
  $$\\text{RY} (25\\%), \\quad \\text{Ry} (25\\%), \\quad \\text{rY} (25\\%), \\quad \\text{ry} (25\\%)$$
- **The 16-Box Punnett Grid Breakdown:**
  1. **Round Yellow ($\\text{R\\_Y\\_}$):** $\\text{RRYY}(1) + \\text{RRYy}(2) + \\text{RrYY}(2) + \\text{RrYy}(4) = \\mathbf{9}$
  2. **Round Green ($\\text{R\\_yy}$):** $\\text{RRyy}(1) + \\text{Rryy}(2) = \\mathbf{3}$ (New Recombinant)
  3. **Wrinkled Yellow ($\\text{rrY\\_}$):** $\\text{rrYY}(1) + \\text{rrYy}(2) = \\mathbf{3}$ (New Recombinant)
  4. **Wrinkled Green ($\\text{rryy}$):** $\\text{rryy}(1) = \\mathbf{1}$
- **Dihybrid Phenotypic Ratio:** $\\mathbf{9 : 3 : 3 : 1}$.

#### 4. The Law of Independent Assortment:
When two pairs of traits are combined in a hybrid, the segregation of one pair of characters is completely **independent** of the segregation of the other pair of characters. This is conclusively proven by the appearance of two completely novel recombinant phenotypic combinations (Round Green and Wrinkled Yellow) that were absent in the parental generation.

---

### Molecular Mechanism: How Genes Control Traits:
- Cellular DNA is the information reservoir for synthesizing specific proteins in the cell.
- A functional segment of DNA that provides instructions for a specific protein is called a **Gene**.
- **How Plant Height is Controlled at the Molecular Level (Board 3-Marker):**
  1. The gene for plant height encodes a specific **enzyme**.
  2. If the gene has the dominant allele ($T$), the enzyme synthesized works efficiently.
  3. This efficient enzyme synthesizes abundant quantities of the plant growth hormone **Gibberellin**.
  4. Ample gibberellin promotes rapid cell elongation, resulting in a **Tall plant**.
  5. If the gene carries the recessive mutated allele ($t$), an altered or inefficient enzyme is produced.
  6. Little gibberellin is synthesized, causing stunted internodes and producing a **Dwarf plant**.
  *Conclusion:* Genes control phenotypic characteristics by dictating the synthesis and catalytic efficiency of cellular enzymes and proteins.

---

### Dihybrid Cross Mathematical Breakdown:
| Phenotypic Category | Genetic Combinations | Count out of 16 | Status vs Parents |
| :--- | :--- | :--- | :--- |
| Round Yellow | RRYY (1), RRYy (2), RrYY (2), RrYy (4) | 9 / 16 (56.25%) | Parental combination |
| Round Green | RRyy (1), Rryy (2) | 3 / 16 (18.75%) | Novel Recombinant combination |
| Wrinkled Yellow | rrYY (1), rrYy (2) | 3 / 16 (18.75%) | Novel Recombinant combination |
| Wrinkled Green | rryy (1) | 1 / 16 (6.25%) | Parental combination |`
    },
    {
      id: "sex_determination_blood_groups",
      label: "3. Sex Determination in Humans & Blood Group Genetics",
      heading: "XY Chromosomes, Paternal Determination & ABO Blood Groups",
      subheading: "23 Pairs of Chromosomes + XX vs XY Cross + Father's Role + ABO Alleles (IA, IB, i)",
      explanation: `### Chromosomal Basis of Sex Determination in Humans:
- Every somatic cell in a human body contains **46 chromosomes**, organized into **23 homologous pairs**.
- **22 pairs are Autosomes:** Govern general somatic characteristics; identical in both males and females.
- **1 pair are Sex Chromosomes (Allosomes):** Directly determine the biological sex of the individual.
  - **Human Female:** Possesses two homomorphic, identical **XX** sex chromosomes.
  - **Human Male:** Possesses one normal-sized **X** chromosome and one shorter **Y** chromosome (**XY**).

---

### The Cross of Sex Determination:
1. **Gamete Production:**
   - The mother ($\\text{XX}$) produces only one type of gamete: All ova carry an $\\text{X}$ chromosome ($100\\% \\text{ X}$). Females are **homogametic**.
   - The father ($\\text{XY}$) produces two distinct types of gametes in equal proportions ($50\\% \\text{ X}$ and $50\\% \\text{ Y}$). Males are **heterogametic**.
2. **Fertilisation Scenarios:**
   - If an $\\text{X}$-bearing sperm fertilises the ovum $\\to \\text{X} + \\text{X} = \\mathbf{\\text{XX}}$ (Female child, $50\\%$ probability).
   - If a $\\text{Y}$-bearing sperm fertilises the ovum $\\to \\text{Y} + \\text{X} = \\mathbf{\\text{XY}}$ (Male child, $50\\%$ probability).
3. **Crucial Societal & Board Exam Deduction:**
   The biological sex of a child is determined **entirely by the male parent** whose sperm fertilises the ovum. The mother contributes an $\\text{X}$ chromosome in all cases. Therefore, holding women responsible for giving birth to female children is completely scientifically unfounded and unjust.

---

### Environmental Sex Determination (Non-Genetic Mechanisms):
Not all animals use chromosomal sex determination:
- **Temperature-Dependent Sex Determination (Reptiles):**
  - In certain turtles (e.g., *Chrysemys picta*), eggs incubated at high temperatures develop into females, while lower temperatures produce males.
  - In certain lizards (e.g., *Agama agama*), high incubation temperatures yield males.
- **Molluscs (*Helix* / Snails):**
  - Individuals are not genetically fixed as male or female; snails can change their biological sex according to environmental and population conditions.

---

### ABO Blood Group Genetics (Multiple Allelism & Codominance):
Human ABO blood groups are controlled by a single gene, Gene **I**, located on chromosome 9, which exists in three alternative allelic forms:
- $I^A$: Produces surface antigen A on red blood cells.
- $I^B$: Produces surface antigen B on red blood cells.
- $i$: Produces no surface antigen.

#### Genetic Interaction Rules:
- Both $I^A$ and $I^B$ are **completely dominant** over the recessive allele $i$.
- When both $I^A$ and $I^B$ are present together ($I^A I^B$), both alleles express their respective antigens equally and simultaneously on red blood cells (**Codominance**), producing **Blood Group AB**.
- **The 4 Phenotypes & 6 Genotypes:**
  1. **Blood Group A:** $I^A I^A$ (Homozygous) or $I^A i$ (Heterozygous).
  2. **Blood Group B:** $I^B I^B$ (Homozygous) or $I^B i$ (Heterozygous).
  3. **Blood Group AB:** $I^A I^B$ (Codominant).
  4. **Blood Group O:** $ii$ (Homozygous Recessive).

---

### Sex Determination & Blood Group Matrix:
| Concept | Genotypic Cross | Offspring Probability | NCERT Exam Key Point |
| :--- | :--- | :--- | :--- |
| Child is Female | X-sperm (father) + X-egg (mother) → XX | 50% (1 in 2) | Mother always gives X; father gave X |
| Child is Male | Y-sperm (father) + X-egg (mother) → XY | 50% (1 in 2) | Father's Y-sperm determined male sex |
| Blood Group AB | IA allele from one parent + IB from other | Variable depending on cross | Classic example of human Codominance |
| Blood Group O | i allele from mother + i allele from father | Expressed only if both parents carry i | Homozygous recessive trait (ii) |`
    }
  ]
};
