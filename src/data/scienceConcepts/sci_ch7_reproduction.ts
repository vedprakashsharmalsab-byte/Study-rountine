import type { ScienceChapterConcept } from "./types";

export const SCI_CH7_CONCEPT: ScienceChapterConcept = {
  chapterNo: 7,
  title: "How do Organisms Reproduce?",
  discipline: "Biology",
  weightage: "6–8 Marks (Board Important)",
  oneLiner: "Asexual = one parent, identical offspring; Sexual = two parents, variation; human reproduction involves complex male and female systems with hormonal control.",
  analogyTitle: "Copying vs Innovating — Two Ways to Make More Life",
  analogyContent: `Imagine you want to make more copies of your favourite painting 🎨.

**Option A (Asexual):** Use a **photocopier** — exact duplicate, fast, cheap, but all copies are IDENTICAL. If there's a flaw in the original, ALL copies have that flaw. No diversity!

**Option B (Sexual):** Ask two artists to **collaborate** on a new painting using elements from both their styles. The result is UNIQUE — combining traits of both artists. Slower process, more effort, but the result is genetically diverse and can better adapt to changing conditions.

Nature uses both! Bacteria photocopies itself (asexual). Humans collaborate (sexual). Each strategy has advantages depending on the environment.`,
  sections: [
    {
      id: "asexual_reproduction",
      label: "1. Asexual Reproduction — One Parent, Many Identical Offspring",
      heading: "Fission, Budding, Regeneration, Vegetative Propagation & Spores",
      subheading: "6 Types with Examples + Advantages & Disadvantages",
      explanation: `**Asexual reproduction** produces offspring from a SINGLE parent with NO involvement of gametes (sex cells). All offspring are genetically IDENTICAL to the parent (clones).

**6 Types of Asexual Reproduction:**

**1. BINARY FISSION:**
Parent cell divides into TWO equal daughter cells.
- Amoeba: Nucleus divides (mitosis) → cytoplasm divides → two Amoeba
- Bacteria: Cell elongates → DNA replicates → septum forms → two bacteria
- Leishmania (causes Kala-azar): Divides longitudinally (along long axis) — exam distinction from Amoeba!
- Plasmodium (malaria parasite): Multiple fission (sporulation)

**2. MULTIPLE FISSION / SPORULATION:**
One parent divides into MANY daughter cells simultaneously.
- Plasmodium: Nucleus divides many times → each nucleus surrounded by cytoplasm → many daughter cells released → cycle repeats in red blood cells!

**3. BUDDING:**
A small outgrowth (bud) develops from parent body → grows → separates as new individual.
- **Yeast:** Bud appears → grows → detaches (or stays as colony)
- **Hydra:** Bud grows → forms tentacles → detaches as new hydra

**4. REGENERATION (Fragmentation + Regeneration):**
Complete organism regenerates from body fragments.
- **Planaria** (flatworm): Cut into 20 pieces → each piece grows into a complete Planaria!
- Not ALL organisms can regenerate (you cannot regrow a finger!)
- Requires special cells called **Neoblasts** that are totipotent

**5. VEGETATIVE PROPAGATION (in Plants):**
New plants grow from vegetative parts (leaves, stems, roots) of the parent plant.
| Part | Plant | Example |
|------|-------|---------|
| Stem (runner) | Grass, strawberry | Stolons/runners touch soil → new plant |
| Stem (tuber) | Potato | "Eyes" (axillary buds) grow new plants |
| Leaf | Bryophyllum | Leaf margins have adventitious buds |
| Root | Sweet potato, Dahlia | Tuberous roots |
| Bulb | Onion, Garlic | Underground stem surrounded by fleshy leaves |

*Why use vegetative propagation?* Faster than seeds, maintains exact traits of parent (e.g., seedless grapes, identical apple varieties), produces fruit faster (no waiting for seed to germinate and grow for years).

**6. SPORE FORMATION (Sporulation):**
Spores = small, light, unicellular or multicellular units surrounded by protective wall.
- Fungi (Rhizopus/Mucor): Sporangia (spore boxes) form on aerial hyphae → burst → spores scatter by wind
- Mosses, ferns: Form spores in sporangium
- Advantage: Spores can survive harsh conditions (heat, drought, UV) and travel long distances`,
      formulasOrKeyPoints: [
        {
          title: "Comparison of Asexual Reproduction Types",
          content: `| Type | Parent number | Mechanism | Examples |
|------|-------------|-----------|---------|
| Binary fission | 1 | Mitosis + cytokinesis | Amoeba, Bacteria, Paramecium |
| Multiple fission | 1 | Multiple nuclear divisions | Plasmodium (malaria), Entamoeba |
| Budding | 1 | Outgrowth + separation | Yeast, Hydra |
| Regeneration | 1 (fragment) | Regrowth from parts | Planaria, Starfish, Lizard tail |
| Vegetative propagation | 1 | Vegetative organs | Potato (tuber), Bryophyllum (leaf), Strawberry (runner) |
| Sporulation | 1 | Spore dispersal | Rhizopus, Mosses, Ferns |`,
          note: "ARTIFICIAL VEGETATIVE PROPAGATION methods important for Board: (1) Cutting — Rose, Sugarcane; (2) Layering — Jasmine, Strawberry; (3) Grafting — Mango, Apple (combines disease-resistant root stock with high-yield variety). These are asked in 2M questions."
        }
      ],
      examinerTraps: [
        {
          trap: "Saying Regeneration and Vegetative Propagation are the same.",
          correction: "REGENERATION: Lost body PARTS regrow to form the complete organism (Planaria, Starfish). VEGETATIVE PROPAGATION: New plants grow from VEGETATIVE ORGANS of plants (roots, stems, leaves) — NOT from fragments of a whole organism. Regeneration is more fundamental (fixes damage); vegetative propagation is specifically for plant reproduction."
        }
      ]
    },
    {
      id: "sexual_reproduction",
      label: "2. Sexual Reproduction — Two Parents, Variation, and New Life",
      heading: "Flowers, Pollination, Fertilisation & Human Reproduction",
      subheading: "Flower Structure + Pollination + Double Fertilisation + Human Male + Female Systems",
      explanation: `**Sexual reproduction** involves the fusion of **male gamete (sperm)** and **female gamete (egg/ovum)** to form a **zygote**, which develops into a new organism.

**KEY ADVANTAGE:** Genetic variation! Offspring inherit different combinations from both parents → better adaptability to environmental changes → evolution!

---

**SEXUAL REPRODUCTION IN FLOWERING PLANTS:**

**Flower Structure:**
- **Stamen (male part):** Anther (produces pollen/male gametes) + Filament
- **Pistil/Carpel (female part):** Stigma (receives pollen) + Style + Ovary (contains ovule → female gamete)
- **Sepals:** Green leaf-like, protect flower in bud stage
- **Petals:** Colourful, attract pollinators (insects, birds)

**POLLINATION:** Transfer of pollen from anther to stigma.
- **Self-pollination:** Pollen transferred to stigma of the SAME flower or same plant
- **Cross-pollination:** Pollen transferred to a DIFFERENT plant of the same species (most common, promotes variation)
- Agents: Insects (bees, butterflies), Wind, Water, Birds, Bats

**GERMINATION OF POLLEN:**
Pollen grain lands on stigma → absorbs nutrients → grows **pollen tube** down through style → pollen tube reaches ovule in ovary

**DOUBLE FERTILISATION (unique to flowering plants!):**
$$\\text{Pollen grain} \\xrightarrow{\\text{germinates}} \\text{Pollen tube with 2 male nuclei}$$
- Male nucleus 1 + Egg cell → **Zygote** (2n) → develops into Embryo → Seed
- Male nucleus 2 + Polar nuclei (2n) → **Primary Endosperm Nucleus (PEN, 3n)** → Endosperm (food store for embryo)
This is called "double fertilisation" — TWO fusions occur simultaneously!

**After Fertilisation:**
- Zygote → Embryo (inside seed)
- Ovule → Seed
- Ovary → Fruit
- Petals, stamens, sepals wither and fall

---

**HUMAN MALE REPRODUCTIVE SYSTEM:**
- **Testes** (in scrotum, OUTSIDE body, ~2°C below body temp — optimal for sperm production!): Produce sperm AND testosterone
- **Epididymis:** Stores and matures sperm
- **Vas deferens:** Carries sperm from testes to urethra
- **Seminal vesicles + Prostate gland + Cowper's gland:** Add fluids → form SEMEN (nutrients, alkaline pH to neutralise vaginal acid)
- **Urethra:** Common passage for urine AND semen (not simultaneously — valves)
- **Penis:** Deposits semen in female vagina during copulation

**HUMAN FEMALE REPRODUCTIVE SYSTEM:**
- **Ovaries (2):** Produce eggs (oocytes) + hormones (estrogen, progesterone)
- **Fallopian tubes (2) / Oviducts:** Carry egg from ovary to uterus; SITE OF FERTILISATION
- **Uterus (Womb):** Muscular, pear-shaped; embryo implants and develops here
- **Cervix:** Narrow opening of uterus
- **Vagina:** Birth canal; receives penis during copulation

**MENSTRUAL CYCLE (28-day cycle):**
- Day 1–5: Menstruation (endometrium lining shed if no pregnancy)
- Day 6–13: Follicular phase (egg matures, estrogen rises)
- Day 14: Ovulation (egg released from ovary)
- Day 15–28: Luteal phase (progesterone maintains endometrium for potential implantation)
- If no fertilisation → progesterone drops → menstruation begins again

**IMPLANTATION:** Fertilised egg travels down fallopian tube → reaches uterus → implants in endometrium (day ~6-7 after fertilisation) → pregnancy begins!`,
      formulasOrKeyPoints: [
        {
          title: "Embryonic Development Timeline",
          content: `| Stage | Time | Development |
|-------|------|-------------|
| Fertilisation | Day 0 | Sperm + Egg → Zygote (Fallopian tube) |
| Cleavage | Days 1–3 | Zygote divides → morula (solid ball of cells) |
| Blastocyst | Day 4–5 | Hollow ball of cells |
| Implantation | Day 6–7 | Blastocyst embeds in uterine wall |
| Gastrulation | Week 2–3 | Three germ layers form (ectoderm, mesoderm, endoderm) |
| Embryo | Weeks 3–8 | All organ systems begin developing |
| Foetus | Week 9 → Birth | Growth and maturation |
| Birth (Parturition) | ~40 weeks (9 months) | Oxytocin triggers contractions |

**PLACENTA:** Connects foetus to mother's uterus; provides oxygen + nutrients; removes CO₂ + waste; produces hormones to maintain pregnancy. A remarkable organ that lasts only 9 months!`,
          note: "The placenta acts as both the foetal lung AND the foetal kidney — it exchanges gases AND removes metabolic waste. Maternal and foetal blood do NOT mix in the placenta (they remain separate, separated by a thin membrane). Only nutrients and gases diffuse across."
        }
      ],
      examinerTraps: [
        {
          trap: "Saying the testes are inside the body, like the ovaries.",
          correction: "Testes are located in the SCROTUM OUTSIDE the body because sperm production requires a temperature 2–2.5°C BELOW normal body temperature (37°C). At 37°C, sperm production would fail. This is why the testes descend from the abdomen to the scrotum before birth. Undescended testes (cryptorchidism) → infertility."
        }
      ]
    },
    {
      id: "reproductive_health",
      label: "3. Reproductive Health & Contraception",
      heading: "Family Planning, STIs & Safe Reproductive Practices",
      subheading: "Contraceptive Methods + STIs + NCERT Health Education",
      explanation: `**CONTRACEPTION — Preventing Unwanted Pregnancy:**
| Method | Type | How it works |
|--------|------|-------------|
| **Condom** | Barrier | Physical barrier prevents sperm reaching egg; also prevents STIs |
| **Diaphragm/Cervical cap** | Barrier | Blocks cervix, sperm can't enter uterus |
| **Oral contraceptive pill** | Hormonal | Estrogen/progestin prevent ovulation |
| **Intrauterine Device (IUD)** | Mechanical | Copper-T or hormone-releasing device in uterus prevents implantation |
| **Vasectomy** | Surgical (male) | Vas deferens cut/tied → no sperm in semen |
| **Tubectomy/Tubal ligation** | Surgical (female) | Fallopian tubes cut/tied → egg cannot meet sperm |
| **Abstinence** | Natural | Most effective — avoid sexual contact |

**SEXUALLY TRANSMITTED INFECTIONS (STIs):**
| Disease | Pathogen | Symptoms | Treatment |
|---------|---------|----------|-----------|
| **Gonorrhoea** | Bacteria (Neisseria gonorrhoeae) | Burning urination, discharge | Antibiotics |
| **Syphilis** | Bacteria (Treponema pallidum) | Sores, rash | Antibiotics |
| **AIDS** | HIV virus (attacks T-helper cells/CD4⁺) | Immune system collapse | Anti-retrovirals (no cure) |
| **Genital Herpes** | HSV-2 virus | Painful blisters | Anti-virals (no cure) |
| **Hepatitis B** | Hepatitis B virus | Liver damage | Vaccine available! |

**HIV/AIDS — Special Focus:**
- HIV = Human Immunodeficiency Virus
- AIDS = Acquired Immunodeficiency Syndrome
- Transmission: Unprotected sex, contaminated needles/blood transfusion, mother to child (during birth/breastfeeding)
- NOT spread by: Handshakes, mosquitoes, sharing food, hugging, coughing

**Importance of reproductive health education:**
- Reduces teen pregnancies and unsafe abortions
- Prevents spread of STIs
- Promotes gender equality and informed decision-making`,
      examinerTraps: [
        {
          trap: "Confusing Vasectomy (male) with Tubectomy (female).",
          correction: "VASECTOMY: Male — the VAS DEFERENS is cut/tied. TUBECTOMY (Tubal Ligation): Female — the FALLOPIAN TUBES are cut/tied. Both are permanent surgical methods. A simple mnemonic: Vas-ectomy → VAs deferens → mAle. TuBe-ectomy → fallopian tuBEs → female."
        }
      ]
    }
  ]
};
