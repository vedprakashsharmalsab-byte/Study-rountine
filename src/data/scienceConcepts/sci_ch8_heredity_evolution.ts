import type { ScienceChapterConcept } from "./types";

export const SCI_CH8_CONCEPT: ScienceChapterConcept = {
  chapterNo: 8,
  title: "Heredity and Evolution",
  discipline: "Biology",
  weightage: "5–7 Marks (Board Important)",
  oneLiner: "Heredity passes traits from parents to offspring via genes/DNA; Mendel's laws govern inheritance patterns; evolution explains how species change over generations through natural selection.",
  analogyTitle: "The Blueprint & the Building — DNA, Traits & Time",
  analogyContent: `Think of your DNA as a **master blueprint** 📐 for building YOU. Every cell in your body has a complete copy of this blueprint (except RBCs). 

The blueprint contains **30,000 chapters** (genes), each with instructions for one trait: eye colour, blood type, height tendency, etc. You got **half the blueprint** from your mother's egg and **half from your father's sperm** — so you're a unique combination of both!

**Evolution** is like watching blueprints get **slowly modified over millions of years** — random errors (mutations) that happen to be helpful get kept; harmful ones disappear because those organisms don't survive long enough to pass them on. Over 3.5 billion years of this "editing," you get everything from bacteria to blue whales!`,
  sections: [
    {
      id: "heredity_mendelism",
      label: "1. Heredity & Mendel's Laws",
      heading: "Gregor Mendel — The Father of Genetics with Pea Plants",
      subheading: "Mendel's Experiments + Law of Segregation + Law of Independent Assortment + Terminology",
      explanation: `**Gregor Mendel (1822-1884):** An Austrian monk who conducted cross-breeding experiments on Pisum sativum (Garden Pea) for 8 years. His work was ignored for 35 years after publication and was only rediscovered in 1900!

**Why pea plants?**
- Short life cycle (one crop/year)
- Many easily distinguishable traits (7 pairs!)
- Can be self-pollinated OR cross-pollinated
- Large number of offspring → statistically significant results

**Mendel's 7 Characters:**
| Trait | Dominant | Recessive |
|-------|---------|----------|
| Seed shape | Round (R) | Wrinkled (r) |
| Seed colour | Yellow (Y) | Green (y) |
| Pod shape | Inflated (I) | Constricted (i) |
| Pod colour | Green (G) | Yellow (g) |
| Flower colour | Violet/Purple (P) | White (p) |
| Flower position | Axial (A) | Terminal (a) |
| Plant height | Tall (T) | Dwarf (t) |

**KEY TERMINOLOGY:**
- **Gene:** A unit of heredity — a specific DNA sequence coding for a trait
- **Allele:** Alternate forms of a gene (e.g., T and t are alleles of the height gene)
- **Dominant allele:** Expressed when present (masks recessive)
- **Recessive allele:** Expressed only when two copies are present (homozygous recessive)
- **Homozygous:** Both alleles same (TT or tt)
- **Heterozygous:** Alleles different (Tt) — the organism is a "carrier" for recessive trait
- **Genotype:** Genetic makeup (TT, Tt, tt)
- **Phenotype:** Physical appearance (Tall or Dwarf)
- **F1 generation:** First filial generation (offspring from cross of pure parents)
- **F2 generation:** Second filial — offspring from self-cross of F1

**MONOHYBRID CROSS (One Trait):**
Cross: Tall (TT) × Dwarf (tt)
- F1: ALL TALL (Tt) → Only dominant trait visible!
- F2 (Tt × Tt):

|   | T | t |
|---|---|---|
| T | TT | Tt |
| t | Tt | tt |

Genotype ratio: 1 TT : 2 Tt : 1 tt
Phenotype ratio: **3 Tall : 1 Dwarf** → 3:1 ratio!

**LAW 1 — Law of Segregation (Law of Purity of Gametes):**
"Each organism has two alleles for each character. These alleles SEPARATE (segregate) during gamete formation, so each gamete carries only ONE allele."
The paired alleles "come apart" during meiosis — one goes to each gamete.

**DIHYBRID CROSS (Two Traits):**
Round Yellow (RRYY) × Wrinkled Green (rryy)
- F1: All Round Yellow (RrYy)
- F2 ratio: **9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green** → 9:3:3:1 ratio!

**LAW 2 — Law of Independent Assortment:**
"Alleles of different genes assort independently of each other during gamete formation."
(The R/r gene's distribution during meiosis is independent of where the Y/y gene goes)`,
      formulasOrKeyPoints: [
        {
          title: "Sex Determination in Humans",
          content: `Humans have **23 pairs of chromosomes:**
- 22 pairs = **Autosomes** (non-sex chromosomes — same in males and females)
- 1 pair = **Sex chromosomes:**
  - **Female = XX** (homogametic — produces only X-bearing eggs)
  - **Male = XY** (heterogametic — produces X-bearing or Y-bearing sperm)

**Cross:**
$$\\underbrace{\\text{XX}}_{\\text{Mother}} \\times \\underbrace{\\text{XY}}_{\\text{Father}}$$

Gametes: Mother gives X only. Father gives X or Y (50:50).

$$\\text{XX (Daughter) or XY (Son)} \\to \\text{50% male, 50% female!}$$

**CRITICAL CONCLUSION:** SEX OF THE CHILD IS DETERMINED BY THE FATHER (the Y chromosome), NOT the mother! Females can only contribute X. Males contribute either X (daughter) or Y (son).

This has huge social significance — blaming women for not producing sons is scientifically FALSE.`,
          note: "The Board exam ALWAYS asks: 'Who determines the sex of a child — the mother or father? Justify with a diagram.' Always include the Punnett square showing XX × XY cross. The answer is: THE FATHER (X or Y sperm)."
        }
      ],
      examinerTraps: [
        {
          trap: "Saying the 3:1 phenotype ratio in F2 means there are 3 dominant and 1 recessive genotype.",
          correction: "The 3:1 PHENOTYPE ratio corresponds to a 1:2:1 GENOTYPE ratio (1 TT : 2 Tt : 1 tt). The 3 'Tall' phenotypes include 1 TT (homozygous dominant) + 2 Tt (heterozygous) — they LOOK the same but are genetically different. Phenotype ≠ Genotype!"
        }
      ]
    },
    {
      id: "evolution",
      label: "2. Evolution — Life Changing Through Time",
      heading: "Darwin, Natural Selection & the Evidence for Evolution",
      subheading: "Darwinian Natural Selection + Variation + Speciation + Evidence for Evolution",
      explanation: `**EVOLUTION:** The gradual change in heritable characteristics of biological populations over successive generations.

**KEY CONTRIBUTORS:**

**Jean-Baptiste Lamarck (1744-1829) — "Use and Disuse Theory" (WRONG but historically important!):**
- Organisms evolve by inheriting characters ACQUIRED during their lifetime
- Example: Giraffe stretched its neck → slightly longer neck → offspring born with slightly longer neck
- This is WRONG — acquired characteristics cannot be inherited (using a muscle doesn't change DNA!)
- But it got people thinking about evolution before Darwin!

**Charles Darwin (1809-1882) — NATURAL SELECTION:**
- Observation 1: Organisms produce MORE offspring than can survive
- Observation 2: Resources are LIMITED → COMPETITION!
- Observation 3: Individuals show VARIATION in heritable traits
- Observation 4: Some variations help survival better than others (better adapted)
- Conclusion: Individuals with BETTER SUITED variations SURVIVE and REPRODUCE MORE
→ Their advantageous traits become more COMMON in the population over generations
→ This gradual change = **Evolution by Natural Selection!**

**Alfred Russel Wallace:** Independently arrived at the same theory as Darwin → they published jointly in 1858!

**THE MECHANISM — FROM VARIATION TO SPECIATION:**
1. A population has natural **VARIATION** (differences between individuals)
2. **Natural selection** favours certain variations in a given environment
3. The selected traits become more common = **microevolution**
4. Over many generations, accumulated changes → new species = **speciation**
5. **Genetic drift** also plays a role (random chance changes allele frequencies, especially in small populations)

**SPECIATION:** The process by which new species arise from existing species.
- Usually requires **GEOGRAPHIC ISOLATION** → separated populations evolve independently → eventually cannot interbreed = new species!
- Example: Squirrels separated by the Grand Canyon → evolved into two distinct species over thousands of years

**INHERITED VARIATION vs ACQUIRED VARIATION:**
- **Inherited variation:** Caused by changes in DNA (mutations, genetic recombination) → CAN be passed to offspring → drives evolution
- **Acquired variation:** Changes due to environment/use during life → NOT in DNA → CANNOT be inherited → does NOT drive evolution (Lamarck was wrong!)

**STAGES IN HUMAN EVOLUTION:**
Dryopithecus → Ramapithecus → Australopithecus (walked upright, used stone tools, ~4 mya) → Homo habilis (made tools, ~2.5 mya) → Homo erectus (migrated out of Africa, used fire, ~1.8 mya) → Homo sapiens neanderthalensis → **Homo sapiens sapiens** (modern humans, ~0.4 mya)`,
      formulasOrKeyPoints: [
        {
          title: "Evidence for Evolution",
          content: `**1. HOMOLOGOUS ORGANS (Same structure, Different function):**
Same basic bone structure (humerus, radius, ulna, carpals) in:
- Human arm (manipulating)
- Horse leg (running)
- Whale flipper (swimming)
- Bat wing (flying)
→ Proves they SHARE a COMMON ANCESTOR — divergent evolution!

**2. ANALOGOUS ORGANS (Different structure, Same function):**
- Bird wing (bone structure) vs Butterfly wing (chitinous scales)
- Both function for flying but are STRUCTURALLY DIFFERENT
→ Evolution from different ancestors converged on same solution (convergent evolution)

**3. VESTIGIAL ORGANS (Remnants of once-functional organs):**
- Human appendix (vestigial — was used to digest cellulose by ancient ancestors)
- Wisdom teeth
- Coccyx (tailbone — remnant of a tail)
→ Prove evolutionary connection to ancestors who needed these organs

**4. FOSSILS:**
Preserved remains of ancient organisms. The deeper the rock layer, the OLDER the fossil.
- Archaeopteryx: Half-reptile, half-bird fossil → transitional species!

**5. COMPARATIVE EMBRYOLOGY:**
Embryos of fish, frog, lizard, bird, and human look IDENTICAL in early stages → common ancestry

**6. MOLECULAR EVIDENCE:**
DNA sequences in different species → more similar sequences = closer evolutionary relationship`,
          note: "HOMOLOGOUS organs = Same STRUCTURE (same bones) but different function = Evidence of COMMON ANCESTOR. ANALOGOUS organs = Different STRUCTURE but same function = Evidence of CONVERGENT EVOLUTION (unrelated organisms solved the same problem independently)."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Homologous and Analogous organs.",
          correction: "HOMOLOGOUS = Same structure, different function (human arm and whale flipper have same bone arrangement). ANALOGOUS = Different structure, same function (bat wing and butterfly wing both used for flying but built completely differently). A Board favourite: 'Are wings of birds and wings of insects homologous or analogous?' ANALOGOUS — completely different structures that both evolved for flight independently."
        },
        {
          trap: "Saying evolution is a random or purposeless process with no direction.",
          correction: "Evolution is driven by NATURAL SELECTION — it's not completely random. Random MUTATIONS provide the raw material, but NATURAL SELECTION is the non-random filter: variations that HELP survival → more offspring → become more common. The 'direction' is determined by the environment at any given time."
        }
      ]
    }
  ]
};
