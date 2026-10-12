import type { ScienceChapterConcept } from "./types";

export const SCI_CH7_CONCEPT: ScienceChapterConcept = {
  chapterNo: 7,
  title: "How do Organisms Reproduce?",
  discipline: "Biology",
  weightage: "7–8 Marks (Core Board Biology)",
  oneLiner: "Reproduction ensures species continuity via DNA replication; asexual reproduction yields clones via fission, budding, fragmentation, regeneration, spores, or vegetative propagation; sexual reproduction recombines genetic material in plants and humans, driving variation and adaptation.",
  analogyTitle: "Photocopier vs Genetic Masterpiece 🎨",
  analogyContent: `Think of reproduction as printing copies of an extraordinary architectural blueprint:

**Asexual Reproduction (The Digital Photocopier):**
A single parent produces exact replicas (clones). It is rapid, efficient, and requires no partner. However, every single copy inherits identical vulnerabilities. If an environmental crisis arises (e.g., sudden temperature surge), all identical bacteria in a pond may perish simultaneously.

**Sexual Reproduction (The Collaborative Design Studio):**
Two parents combine half of their genetic blueprints. The result is a unique individual with novel variations. While it requires time and specialized gametes, the resulting diversity ensures that even during harsh environmental changes, some individuals will possess traits enabling survival and evolution.`,
  sections: [
    {
      id: "dna_copying_asexual",
      label: "1. DNA Replication, Variation & Asexual Reproduction",
      heading: "DNA Copying, Significance of Variation & 6 Asexual Modes",
      subheading: "DNA Fidelity + Amoeba vs Leishmania + Regeneration vs Fragmentation + Vegetative Propagation",
      explanation: `**1. DNA REPLICATION & THE SIGNIFICANCE OF VARIATION:**
- **Chromosomes** in the cell nucleus contain information for inheritance of traits from parents to offspring in the form of **DNA (Deoxyribonucleic Acid)** molecules.
- The fundamental event in reproduction is the **creation of a DNA copy**.
- Cellular biochemical copying mechanisms are not 100% accurate. Minor variations creep in during each DNA replication cycle.
- **Why is variation beneficial?** Organisms inhabit specific ecological niches. If temperature, water levels, or chemical compositions change drastically, a uniform population could be wiped out. But if variations exist (e.g., heat-resistant variants of bacteria), those individuals survive and preserve the species over time.

---

**2. MODES OF ASEXUAL REPRODUCTION (NCERT Class 10):**

| Mode | Organism | Exact Mechanism & Board Nuance |
|------|----------|--------------------------------|
| **Binary Fission** | *Amoeba*, *Leishmania* | **Amoeba:** Cell division can occur in **any plane**.<br>**Leishmania** (causes Kala-azar): Has a whip-like flagellum at one end; binary fission occurs in a **definite longitudinal orientation** relative to this structure (classic Board comparison!). |
| **Multiple Fission** | *Plasmodium* (malaria parasite) | Under adverse conditions, the parent cell forms a protective cyst. The nucleus divides repeatedly into multiple daughter nuclei inside the cyst, which release simultaneously upon bursting. |
| **Fragmentation** | *Spirogyra* (filamentous green alga) | Simple multicellular organism with simple body organisation. Upon maturation, the filament simply breaks into smaller fragments, and each fragment grows into a new individual through cell division. |
| **Regeneration** | *Planaria*, *Hydra* | If accidentally cut into pieces, specialized **regenerative cells** proliferate and differentiate into complete organisms.<br>*Examiner Note:* **Regeneration is NOT the same as reproduction!** Most organisms cannot depend on being chopped up to reproduce; it is an accidental repair mechanism. |
| **Budding** | *Hydra*, *Yeast* | **Hydra:** A bud develops as an outgrowth due to repeated cell division at one specific site. It develops tentacles, mouth, and matures before detaching.<br>**Yeast:** Unicellular fungus where small buds pinch off directly from the mother cell. |
| **Spore Formation** | *Rhizopus* (Bread mould) | Thread-like hyphae develop swollen globular structures called **sporangia** containing hundreds of spores. Spores are protected by thick outer walls that resist heat, drought, and germinate upon finding a moist, nutrient-rich surface. |

---

**3. VEGETATIVE PROPAGATION IN PLANTS:**
Vegetative parts (roots, stems, leaves) develop into new plants under suitable conditions.
- **Natural Vegetative Propagation:**
  - **By Roots:** Sweet potato, Dahlia.
  - **By Stems:** Potato (tubers with 'eyes' / axillary buds), Ginger/Turmeric (rhizomes), Onion (bulbs).
  - **By Leaves:** *Bryophyllum* (buds produced in the notches along the leaf margin fall off and sprout into new plants).
- **Artificial Methods:**
  - **Cutting:** Rose, Sugarcane (stem cuttings rooted in soil).
  - **Layering:** Jasmine (a branch is bent down and covered with moist soil until roots sprout).
  - **Grafting:** Mango, Apple (stock rooted in ground is joined with scion bearing desirable fruit traits).
- **Tissue Culture (Micropropagation):**
  - Small tissue sample harvested from growing tip of plant.
  - Grown in artificial nutrient agar medium with plant hormones to form an undifferentiated cell mass called **callus**.
  - Callus is transferred to hormone medium for differentiation into plantlets, then potted in soil.
  - **Advantages:** Disease-free / pathogen-free plants produced, rapid multiplication, year-round production of ornamental plants (e.g., orchids, carnations).`,
      formulasOrKeyPoints: [
        {
          title: "Advantages of Vegetative Propagation (NCERT 3-Marker)",
          content: `1. **Speed & Early Fruiting:** Plants raised by vegetative propagation bear flowers and fruits much earlier than those grown from seeds.
2. **Seedless Plants:** It is the only viable method to propagate plants that have lost the capacity to produce viable seeds (e.g., Banana, Orange, Rose, Jasmine).
3. **Genetic Uniformity (Clonal Purity):** All offspring are genetically identical to the parent plant, preserving superior agricultural traits (sweetness, yield, disease resistance).
4. **Economical & Reliable:** Higher survival rate than delicate seeds germinating in soil.`,
          note: "CBSE regularly asks: 'State three advantages of vegetative propagation over seed reproduction.' Memorize these 4 points!"
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Fragmentation with Regeneration.",
          correction: "Fragmentation occurs in simple organisms like Spirogyra where body organization is basic and breakage is a natural mode of multiplication. Regeneration (Planaria) is performed by specialized regenerative cells when an organism is damaged; complex organisms cannot regenerate whole bodies from pieces because specialized tissues and organ systems cannot be recreated by random body cells."
        },
        {
          trap: "Stating that Leishmania divides like Amoeba in any plane.",
          correction: "Amoeba splits in ANY plane. Leishmania divides strictly in a DEFINITE LONGITUDINAL ORIENTATION relative to its whip-like flagellum. This specific difference is an NCERT textbook question frequently tested in Section A MCQs."
        }
      ]
    },
    {
      id: "plant_sexual_reproduction",
      label: "2. Sexual Reproduction in Flowering Plants",
      heading: "Flower Structure, Pollination, Pollen Germination & Seed Development",
      subheading: "Bisexual vs Unisexual Flowers + Pollination Agents + Double Fertilisation + Seed Anatomy",
      explanation: `**1. FLOWER STRUCTURE & REPRODUCTIVE ORGANS:**
The flower is the reproductive organ of angiosperms (flowering plants).
- **Non-essential Whorls:**
  - **Sepals (Calyx):** Outermost green leaves; protect the flower during the bud stage.
  - **Petals (Corolla):** Brightly colored and scented; attract insect pollinators.
- **Essential Whorls (Reproductive Units):**
  - **Stamen (Male Reproductive Organ):** Consists of **Anther** (produces yellow pollen grains carrying male germ cells) and **Filament** (slender stalk supporting anther).
  - **Carpel / Pistil (Female Reproductive Organ):** Centrally located. Consists of:
    - **Stigma:** Sticky terminal landing pad for pollen grains.
    - **Style:** Elongated neck connecting stigma to ovary.
    - **Ovary:** Swollen basal portion containing one or more **ovules**. Each ovule contains an **egg cell (female gamete)**.

- **Types of Flowers:**
  - **Unisexual Flowers:** Contain either stamens OR carpels (e.g., Papaya, Watermelon).
  - **Bisexual Flowers:** Contain BOTH stamens AND carpels (e.g., Hibiscus, Mustard).

---

**2. POLLINATION:**
The transfer of pollen grains from the anther to the stigma of a flower.
- **Self-Pollination (Autogamy):** Transfer of pollen from anther to stigma of the same flower or another flower on the same plant.
- **Cross-Pollination (Allogamy):** Transfer of pollen from anther of one flower to stigma of another flower on a different plant of the same species. Achieved by external agents: wind, water, insects (bees, butterflies), birds.

---

**3. GERMINATION OF POLLEN GRAIN ON STIGMA & FERTILISATION:**
1. Pollen grain lands on the sticky stigma and absorbs sugary secretions.
2. A **pollen tube** germinates and grows downward through the style towards the ovary.
3. The pollen tube carries **two male germ cells (male nuclei)**.
4. The pollen tube penetrates the ovule through the micropyle.
5. **Syngamy (True Fertilisation):** One male germ cell fuses with the female egg cell to form a diploid **Zygote** ($2n$).
6. **Triple Fusion:** The second male germ cell fuses with the two polar nuclei to form the triploid **Endosperm** ($3n$) which provides nourishment to the developing embryo. (Together known as **Double Fertilisation**).

---

**4. POST-FERTILISATION TRANSFORMATIONS (Crucial Board Table):**
- **Zygote** $\\to$ Divides repeatedly to form an **Embryo** inside the ovule.
- **Ovule** $\\to$ Develops a tough protective outer coat and converts into a **Seed**.
- **Ovary** $\\to$ Grows rapidly, ripens, and transforms into the **Fruit**.
- **Petals, Sepals, Stamens, Style, and Stigma** $\\to$ Shrivel, wither, and fall off.

---

**5. STRUCTURE OF A DICOT SEED (Gram / Bean):**
- **Seed Coat:** Tough protective outer covering.
- **Cotyledons:** Fleshy seed leaves that store food reserves for the embryo.
- **Embryo Axis:**
  - **Plumule:** Future shoot (grows upwards to form stem and leaves).
  - **Radicle:** Future root (grows downwards to form root system).`,
      formulasOrKeyPoints: [
        {
          title: "Post-Fertilisation Fate Summary",
          content: `$$\\text{Zygote} \\implies \\text{Embryo}$$
$$\\text{Ovule} \\implies \\text{Seed (with tough coat)}$$
$$\\text{Ovary} \\implies \\text{Fruit (ripened)}$$
$$\\text{Plumule} \\implies \\text{Future Shoot}$$
$$\\text{Radicle} \\implies \\text{Future Root}$$
$$\\text{Cotyledons} \\implies \\text{Food Reserve}$$`,
          note: "This mapping appears in almost every CBSE Class 10 Science board paper in either Section A or Section B."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Pollination with Fertilisation.",
          correction: "Pollination is merely the physical transfer of pollen grains from anther to stigma (external event facilitated by wind/insects). Fertilisation is the biochemical fusion of male and female gametes to form a zygote inside the ovule (internal event occurring only after pollen tube growth)."
        }
      ]
    },
    {
      id: "human_reproduction",
      label: "3. Human Reproduction & Reproductive Health",
      heading: "Male & Female Systems, Menstruation, Placenta & Contraceptive Methods",
      subheading: "Puberty Changes + Anatomy + Fertilisation + Placenta + Menstrual Cycle + STDs + Contraception",
      explanation: `**1. PUBERTY & SECONDARY SEXUAL CHARACTERISTICS:**
Puberty is the period during adolescence when reproductive organs mature and gamete production begins.
- **Common changes in both sexes:** Hair growth in armpits and genital areas, skin becomes oilier with appearance of pimples/acne.
- **Changes in Boys:** Voice deepens (cracks) due to growth of larynx (Adam's apple), growth of facial hair (mustache/beard), penis occasionally begins to enlarge and erect. Controlled by **Testosterone**.
- **Changes in Girls:** Breast size increases with darkening of nipple skin, broadening of pelvis, onset of **menstruation (menarche)**. Controlled by **Estrogen** and **Progesterone**.

---

**2. MALE REPRODUCTIVE SYSTEM:**
- **Testes (Pair):** Located outside the abdominal cavity in a sac called the **Scrotum**.
  - *Why outside?* Spermatogenesis requires a temperature **2 to 2.5°C lower than normal body temperature (37°C)**.
  - *Functions:* (1) Produce male gametes (**sperms**), (2) Secrete male sex hormone **testosterone**.
- **Vas Deferens (Sperm Duct):** Muscular tube that ascends from testes and transports mature sperms toward the urethra.
- **Accessory Glands (Seminal Vesicles & Prostate Gland):** Add their secretions along the path.
  - *Function of secretions:* (1) Provide a fluid transport medium for sperms, (2) Provide nutrients (fructose) for sperm motility, (3) Neutralize acidity of urethra/vagina.
  - Fluid + Sperms = **Semen**.
- **Urethra:** Common passage for both urine and semen, passing through the penis (never simultaneously).

---

**3. FEMALE REPRODUCTIVE SYSTEM:**
- **Ovaries (Pair):** Located in lower abdominal cavity.
  - *Functions:* (1) Produce female gametes (**ova / eggs**) — releases one mature egg alternately every month from puberty onwards, (2) Secrete hormones **estrogen** and **progesterone**.
- **Fallopian Tubes (Oviducts, Pair):** Funnel-shaped tubes that receive the released egg from ovary.
  - **Site of fertilisation:** Fusion of sperm and egg occurs here!
- **Uterus (Womb):** Elastic, hollow, muscular pear-shaped organ where the embryo implants and develops for ~9 months.
- **Cervix:** Narrow neck of uterus connecting to the vagina.
- **Vagina:** Muscular canal receiving semen during copulation; also serves as the birth canal during parturition.

---

**4. WHAT HAPPENS WHEN THE EGG IS FERTILISED? (PREGNANCY & PLACENTA):**
- Fertilisation occurs in the Fallopian tube $\\to$ Zygote forms.
- Zygote divides repeatedly by mitosis into an embryo while traveling down to the uterus.
- **Implantation:** The embryo embeds itself into the thickened, highly vascularized uterine lining (endometrium).
- **The Placenta:** A specialized disc-shaped vascular tissue that develops between the uterine wall and the embryo.
  - **Structure:** Contains microscopic **villi** on the embryo's side, surrounded by mother's blood spaces.
  - **Function:** Provides a very large surface area for the diffusion of **glucose and oxygen** from mother to embryo, and removal of **waste products (carbon dioxide, urea)** from embryo to maternal blood.
  - *Note:* Maternal and foetal blood streams do NOT mix directly; exchange occurs strictly across thin membranes.
  - **Gestation Period:** ~9 months (approximately 280 days).

---

**5. WHAT HAPPENS WHEN THE EGG IS NOT FERTILISED? (MENSTRUATION):**
- The released unfertilised egg survives for about **1 day**.
- Every month, the uterus prepares for a potential pregnancy: its lining thickens, becomes spongy, and richly supplied with blood vessels.
- If fertilisation does not occur, this thickened lining is no longer needed.
- The uterine lining slowly breaks down and sheds along with dead ovum, exiting through the vagina as blood and mucus.
- This monthly cycle of bleeding is called **Menstruation** (lasts 2 to 8 days; cycle repeats every ~28 days).

---

**6. REPRODUCTIVE HEALTH & CONTRACEPTIVE METHODS (Board Guaranteed 3-Marker):**

| Method Category | Examples | Mechanism of Action | Additional Advantage / Pitfall |
|-----------------|----------|---------------------|--------------------------------|
| **1. Mechanical Barrier** | Condoms (male/female), Diaphragm, Cervical cap | Prevents sperm from physically reaching the ovum. | **Condoms prevent transmission of STDs (HIV-AIDS, Syphilis, Gonorrhoea)** along with preventing pregnancy. |
| **2. Chemical / Hormonal** | Oral contraceptive pills (contain synthetic hormones) | Alters hormonal balance so that ovaries do not release eggs (prevent ovulation). | Highly effective, but may cause hormonal imbalance side-effects (nausea, mood swings). |
| **3. Intrauterine Devices (IUDs)** | Copper-T, Lippes Loop | Placed inside the uterus by a doctor; prevents implantation of embryo. | Long-acting, but can cause uterine irritation, bleeding, or pelvic inflammation. |
| **4. Surgical Methods** | **Vasectomy** (Male): Small portion of vas deferens is cut or tied.<br>**Tubectomy** (Female): Small portion of Fallopian tubes is cut or tied. | Blocks gamete transport completely (prevents sperms reaching semen in males; prevents ovum reaching Fallopian tube in females). | **Permanent and irreversible**; highly reliable with zero hormonal side-effects. |

---

**7. SEXUALLY TRANSMITTED DISEASES (STDs):**
- **Bacterial Infections:** Gonorrhoea (*Neisseria gonorrhoeae*), Syphilis (*Treponema pallidum*). Can be treated with antibiotics.
- **Viral Infections:** Warts (Human Papillomavirus / HPV), HIV-AIDS (Human Immunodeficiency Virus). Incurable; managed with antivirals.
- **Female Foeticide & PCPNDT Act:** Misuse of prenatal ultrasound techniques to determine fetal gender led to female foeticide. The Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act legally bans prenatal sex determination to maintain a balanced sex ratio.`,
      formulasOrKeyPoints: [
        {
          title: "Contraceptive Methods Comparison Table",
          content: `$$\\begin{aligned}
\\textbf{Vasectomy:} & \\quad \\text{Vas deferens tied in MALES} \\implies \\text{No sperms in semen} \\\\
\\textbf{Tubectomy:} & \\quad \\text{Fallopian tubes tied in FEMALES} \\implies \\text{No egg meets sperm} \\\\
\\textbf{Copper-T:} & \\quad \\text{IUD placed in Uterus} \\implies \\text{Prevents implantation} \\\\
\\textbf{Condom:} & \\quad \\text{Barrier method} \\implies \\textbf{ONLY method that ALSO prevents STDs!}
\\end{aligned}$$`,
          note: "Always remember: ONLY barrier methods (condoms) prevent STDs. Hormonal pills, IUDs, and surgical methods provide ZERO protection against STDs."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Vasectomy with Tubectomy.",
          correction: "VASECTOMY: Male procedure on VAS DEFERENS. TUBECTOMY: Female procedure on FALLOPIAN TUBES. Easy memory hook: 'V' for Vasectomy = Vas deferens = Male; 'Tube' for Tubectomy = Fallopian Tube = Female."
        },
        {
          trap: "Claiming that maternal blood and foetal blood mix directly in the placenta.",
          correction: "Maternal blood and foetal blood NEVER mix directly. If they mixed, different blood groups would cause catastrophic fatal agglutination. Exchange occurs solely via diffusion across the thin placental villi membrane."
        }
      ]
    }
  ]
};
