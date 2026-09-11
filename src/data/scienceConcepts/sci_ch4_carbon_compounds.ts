import type { ScienceChapterConcept } from "./types";

export const SCI_CH4_CONCEPT: ScienceChapterConcept = {
  chapterNo: 4,
  title: "Carbon and its Compounds",
  discipline: "Chemistry",
  weightage: "6–8 Marks (Board Mandatory)",
  oneLiner: "Carbon bonds with 4 atoms (covalent, tetravalent); forms chains/rings (catenation); 3 functional groups + homologous series + ethanol/ethanoic acid + soaps & detergents.",
  analogyTitle: "Carbon — The LEGO Master of Chemistry",
  analogyContent: `Imagine **LEGO blocks** 🧱. A normal block connects to 2 other blocks. But imagine a **SUPER LEGO block** that can connect to **FOUR other blocks simultaneously** — it can make towers, flat sheets, branching trees, and even rings! That super block is **Carbon (C)**.

Carbon has 4 bonding arms (tetravalent). It can bond with itself repeatedly — making chains as long as you want (like a LEGO chain!). This unique ability to form chains with itself is called **catenation**. This is why there are MILLIONS of carbon compounds but only a few thousand compounds of every other element!

Organic chemistry is just the science of these incredible LEGO-carbon structures.`,
  sections: [
    {
      id: "carbon_bonding",
      label: "1. Carbon's Special Properties — Covalent Bonding",
      heading: "Why Carbon is the King of Compounds",
      subheading: "Covalence + Tetravalency + Catenation + Allotropes",
      explanation: `**Why can't carbon form ionic bonds?**
- Carbon has 4 valence electrons — it would need to either LOSE 4 electrons (needs too much energy) or GAIN 4 electrons (can't hold 4 extra electrons). Both are impossible.
- So carbon SHARES electrons with other atoms → **Covalent bond** forms.
- In a covalent bond, atoms share electron pairs — like two children sharing a toy!

**Carbon's two magic powers:**
1. **Tetravalency:** Carbon has 4 valence electrons → forms exactly 4 bonds → always 4 bonds, no exceptions.
2. **Catenation:** Carbon atoms bond with OTHER CARBON ATOMS to form long chains, branched chains, or rings. No other element does this so extensively.

**Types of bonds Carbon makes:**
- **Single bond (C–C):** One shared pair of electrons — ethane (CH₃–CH₃)
- **Double bond (C=C):** Two shared pairs — ethene (CH₂=CH₂) → UNSATURATED
- **Triple bond (C≡C):** Three shared pairs — ethyne (CH≡CH) → UNSATURATED

**ALLOTROPES of Carbon — Same element, different structures:**

| Allotrope | Structure | Properties | Uses |
|-----------|-----------|-----------|------|
| **Diamond** | 3D tetrahedral — each C bonded to 4 other C | Hardest substance, poor conductor | Cutting tools, jewelry |
| **Graphite** | Layers of hexagonal rings — each C bonded to 3 C | Soft, good conductor (1 free e⁻ per C) | Pencil lead, electrodes, lubricant |
| **Fullerene (C₆₀)** | Football/soccer ball shape — 60 carbon atoms | New material, closed cage | Nano-technology research |

*Key question: How is graphite a non-metal but still conducts electricity?*
Each carbon in graphite forms 3 bonds, leaving 1 **delocalized (free) electron** per atom. These free electrons flow through the layers → electrical conductivity!`,
      formulasOrKeyPoints: [
        {
          title: "Covalent Bond Structures of Common Carbon Compounds",
          content: `**Methane (CH₄):** Carbon + 4 Hydrogen
$$\\text{H}\\underset{|}{\\overset{|}{-}}\\text{C}\\underset{|}{\\overset{|}{-}}\\text{H}$$
Bond angle: 109.5° (tetrahedral), no double bonds → Saturated

**Ethene (C₂H₄):** Contains C=C double bond
$$\\text{H}_2\\text{C=CH}_2$$ → Unsaturated (one double bond)

**Ethyne (C₂H₂):** Contains C≡C triple bond
$$\\text{HC≡CH}$$ → Unsaturated (one triple bond)

**SATURATED vs UNSATURATED:**
- Saturated = only single C–C bonds (alkanes: methane, ethane, propane...)
- Unsaturated = contains at least one double or triple bond (alkenes, alkynes)`,
          note: "Saturated compounds are MORE stable and less reactive. Unsaturated compounds react with Br₂ (bromine water) — the brown colour of Br₂ is decolourised. This is the test for unsaturation!"
        }
      ],
      examinerTraps: [
        {
          trap: "Thinking diamond and graphite are different elements because they have different properties.",
          correction: "Diamond and graphite are ALLOTROPES of the same element — Carbon. They have the same chemical composition (100% carbon) but DIFFERENT physical structures (arrangements of carbon atoms). Different structures → different properties."
        }
      ]
    },
    {
      id: "functional_groups",
      label: "2. Functional Groups & Homologous Series",
      heading: "The Chemical Personality Tags of Carbon Compounds",
      subheading: "5 Key Functional Groups + Homologous Series Rules + Naming",
      explanation: `A **functional group** is a specific atom or group of atoms in a molecule that gives it its characteristic chemical properties. Think of it as a **personality badge** — the functional group determines how the compound will react, regardless of the size of the carbon chain!

**5 Key Functional Groups for Class 10:**

| Functional Group | Name | Symbol | Example |
|-----------------|------|--------|---------|
| –OH | Hydroxyl (Alcohol) | –OH | Ethanol (C₂H₅OH) |
| –CHO | Aldehyde | –CHO | Ethanal (CH₃CHO) |
| –COOH | Carboxyl (Carboxylic Acid) | –COOH | Ethanoic acid (CH₃COOH) |
| –Cl, –Br | Halide | –X | Chloroethane (C₂H₅Cl) |
| C=O (middle) | Ketone | >C=O | Propanone (CH₃COCH₃) |

**HOMOLOGOUS SERIES:**
A group of compounds that:
1. Have the same **functional group**
2. Can be represented by the **same general formula**
3. Differ by a **–CH₂– unit** (one carbon + two hydrogens)
4. Show a **gradual change** in physical properties (boiling point, density, viscosity)
5. Have similar **chemical properties** (same functional group reactions)

**Alkane Series (General formula: CₙH₂ₙ₊₂):**
| Name | Formula | Boiling Point |
|------|---------|-------------|
| Methane | CH₄ | -162°C |
| Ethane | C₂H₆ | -89°C |
| Propane | C₃H₈ | -42°C |
| Butane | C₄H₁₀ | -1°C |
| Pentane | C₅H₁₂ | 36°C |

*Each step: add CH₂ → molecular mass increases by 14 → boiling point increases.*

**IUPAC Naming Rules:**
1. Find the longest carbon chain → this gives the root name (meth=1, eth=2, prop=3, but=4, pent=5, hex=6)
2. Identify the functional group → gives the suffix (-ol for alcohol, -al for aldehyde, -oic acid for carboxylic acid, -one for ketone, -ane/-ene/-yne for chain type)
3. Number the chain to give functional group the **lowest** possible number`,
      formulasOrKeyPoints: [
        {
          title: "IUPAC Names and Structures — Master Table",
          content: `| IUPAC Name | Common Name | Formula | Class |
|-----------|------------|---------|-------|
| Methanol | Wood spirit | CH₃OH | Alcohol |
| Ethanol | Ethyl alcohol/Alcohol | C₂H₅OH | Alcohol |
| Methanoic acid | Formic acid (ant sting!) | HCOOH | Carboxylic acid |
| Ethanoic acid | Acetic acid (vinegar) | CH₃COOH | Carboxylic acid |
| Propanone | Acetone (nail polish remover) | CH₃COCH₃ | Ketone |
| Ethanal | Acetaldehyde | CH₃CHO | Aldehyde |
| Chloroethane | Ethyl chloride | C₂H₅Cl | Halide |

**SUFFIX RULES:**
- Only single bonds: **-ane** (ethane)
- One double bond: **-ene** (ethene)
- One triple bond: **-yne** (ethyne)
- Alcohol –OH: **-ol** (ethanol)
- Carboxylic acid –COOH: **-oic acid** (ethanoic acid)`,
          note: "Formic acid (methanoic acid) gets its name from 'Formica' (Latin for ant) — ants inject formic acid during biting! Acetic acid gets its name from 'acetum' (Latin for vinegar) — vinegar is ~5–8% ethanoic acid in water."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Methanol (wood spirit) with Ethanol (drinking alcohol).",
          correction: "METHANOL (CH₃OH) is extremely poisonous — drinking even a small amount causes permanent blindness and death. ETHANOL (C₂H₅OH) is the alcohol in drinks. This is a major safety distinction. Examiners ask: 'Why is ethanol safer than methanol for consumption?' Answer: Methanol oxidises to formaldehyde (toxic) in the liver."
        }
      ]
    },
    {
      id: "reactions_carbon",
      label: "3. Chemical Reactions of Carbon Compounds",
      heading: "Burning, Adding, and Substituting — 3 Key Reactions",
      subheading: "Combustion + Addition + Substitution + Oxidation",
      explanation: `**1. COMBUSTION (Burning):**
Complete combustion (excess O₂): produces CO₂ + H₂O + heat (blue flame)
$$\\text{C}_2\\text{H}_5\\text{OH(l) + 3O}_2\\text{(g)} \\to 2\\text{CO}_2\\text{(g) + 3H}_2\\text{O(g) + Heat}$$

Incomplete combustion (limited O₂): produces CO + soot (sooty yellow flame)
- Butane or LPG burns with blue flame when O₂ is sufficient
- A candle burns with yellow/sooty flame because not enough O₂ reaches the wick

**2. ADDITION REACTIONS (Only for unsaturated compounds):**
Unsaturated compounds (containing C=C or C≡C) can ADD atoms across the double/triple bond.

- **Hydrogenation:** H₂ is added across C=C → saturated compound
  $$\\text{CH}_2\\text{=CH}_2 + \\text{H}_2 \\xrightarrow{\\text{Ni catalyst, 150°C}} \\text{CH}_3\\text{-CH}_3$$ (Ethene → Ethane)
  *(Used industrially: vegetable oils (unsaturated) + H₂ → vegetable ghee/margarine (saturated))*

- **Halogenation (Bromine water test):**
  $$\\text{CH}_2\\text{=CH}_2 + \\text{Br}_2 \\to \\text{CH}_2\\text{Br-CH}_2\\text{Br}$$ (Ethene decolourises bromine water!)
  *Brown Br₂ water becomes colourless → this is the test for unsaturation!*

**3. SUBSTITUTION REACTIONS (For saturated compounds):**
Saturated compounds (alkanes) cannot add — they must SUBSTITUTE (replace one hydrogen with another atom, usually in presence of sunlight/UV).
$$\\text{CH}_4 + \\text{Cl}_2 \\xrightarrow{\\text{UV}} \\text{CH}_3\\text{Cl + HCl}$$
(Methane + Chlorine → Chloromethane + Hydrochloric acid)

**4. OXIDATION (Using Oxidising Agents):**
Ethanol (alcohol) → Ethanoic acid (vinegar) using acidified potassium dichromate:
$$\\underbrace{\\text{CH}_3\\text{CH}_2\\text{OH}}_{\\text{Ethanol}} \\xrightarrow{[\\text{O}]} \\underbrace{\\text{CH}_3\\text{COOH}}_{\\text{Ethanoic acid}}$$
Orange K₂Cr₂O₇ turns GREEN — indicates the alcohol is oxidised.
*This is how wine turns into vinegar when exposed to air!*`,
      formulasOrKeyPoints: [
        {
          title: "Ethanol vs Ethanoic Acid — MOST IMPORTANT COMPOUNDS",
          content: `**ETHANOL (C₂H₅OH):**
- Colourless liquid, burning taste, pleasant smell
- Reacts with Na metal: $2\\text{C}_2\\text{H}_5\\text{OH + 2Na} \\to 2\\text{C}_2\\text{H}_5\\text{ONa + H}_2\\uparrow$
- Dehydration (with H₂SO₄ at 170°C): $\\text{C}_2\\text{H}_5\\text{OH} \\to \\text{CH}_2\\text{=CH}_2\\uparrow + \\text{H}_2\\text{O}$
- Oxidation → Ethanoic acid
- Uses: Solvent, antiseptic, fuel (petrol blending), manufacture of ether

**ETHANOIC ACID (CH₃COOH):**
- Melting point: 17°C (pure = "glacial" acetic acid, freezes on cold days!)
- Turns blue litmus red
- Reacts with sodium carbonate: $2\\text{CH}_3\\text{COOH + Na}_2\\text{CO}_3 \\to 2\\text{CH}_3\\text{COONa + H}_2\\text{O + CO}_2\\uparrow$
- Esterification: $\\text{CH}_3\\text{COOH + C}_2\\text{H}_5\\text{OH} \\rightleftharpoons \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$
  *(Sweet-smelling Ethyl ethanoate ester — nail polish remover + artificial fruit flavours!)*
- Uses: Vinegar (food preservation), ink, polymers`,
          note: "The esterification reaction (alcohol + carboxylic acid → ester + water) is catalysed by concentrated H₂SO₄ and is REVERSIBLE. The ester smells fruity/floral. This is how artificial flavouring is made!"
        }
      ],
      examinerTraps: [
        {
          trap: "Saying bromine water test works for alkanes (like methane or ethane).",
          correction: "Bromine water is decolourised ONLY by UNSATURATED compounds (with C=C or C≡C). Alkanes (only C–C single bonds) do NOT decolourise bromine water. The correct test to distinguish saturated vs unsaturated: add to Br₂ water — only unsaturated decolourises it."
        }
      ]
    },
    {
      id: "soaps_detergents",
      label: "4. Soaps & Detergents — How Cleaning Actually Works",
      heading: "The Science Behind Why Soap Removes Grease",
      subheading: "Saponification + Micelle Formation + Soap vs Detergent",
      explanation: `**SOAP MAKING (Saponification):**
$$\\text{Fat/Oil + NaOH (aq)} \\xrightarrow{\\Delta} \\text{Soap (RCOONa) + Glycerol}$$
Fats (esters of fatty acids + glycerol) are hydrolysed by strong alkali → sodium salt of fatty acid = soap!

**Structure of a Soap Molecule:**
A soap molecule has TWO ends:
- **Hydrophilic head** (water-loving): The ionic –COONa end — LOVES water 💧
- **Hydrophobic tail** (water-hating): The long hydrocarbon chain — LOVES oils/grease and HATES water 🔥

**How Soap Cleans — MICELLE Formation:**
1. Soap molecules surround the grease/oil droplet
2. The **hydrophobic tails** point INWARD into the grease drop (hiding from water)
3. The **hydrophilic heads** point OUTWARD toward the water
4. Result: a sphere (micelle) with grease trapped inside and ionic charges on the outside
5. These micelles are negatively charged → repel each other → stay suspended in water
6. Rinsing washes the micelles (+ trapped grease) away!

**Soap vs Hard Water Problem:**
$$\\text{2RCOONa (soap) + CaCl}_2\\text{(hard water)} \\to \\underbrace{\\text{(RCOO)}_2\\text{Ca}\\downarrow}_{\\text{Scum!}} + 2\\text{NaCl}$$
Soap reacts with Ca²⁺ and Mg²⁺ ions in hard water → forms an insoluble precipitate called **SCUM** → wastes soap and leaves grey residue on clothes.

**DETERGENTS — Soap Alternative:**
- Detergents are ammonium or sulphonate salts of long-chain carboxylic acids
- They do NOT react with Ca²⁺ or Mg²⁺ → work in HARD WATER too!
- But many detergents are non-biodegradable → cause water pollution (foam in rivers)
- Example: Sodium lauryl sulphate (shampoo), Sodium dodecyl benzene sulphonate (laundry)`,
      formulasOrKeyPoints: [
        {
          title: "Comparison: Soap vs Detergent",
          content: `| Feature | Soap | Detergent |
|---------|------|-----------|
| Chemical nature | Sodium/potassium salt of fatty acids | Ammonium/sulphonate salt |
| Works in hard water? | ❌ No (forms scum) | ✅ Yes |
| Biodegradable? | ✅ Yes (eco-friendly) | ❌ Often No (pollutes water) |
| Used for... | Bathing, washing in soft water | Shampoos, dish soaps, laundry |
| Main ingredient | Animal fat + NaOH | Petroleum-derived chemicals |`,
          note: "The NCERT Chapter strongly emphasises that soap scum forms with hard water. This is asked in 1M MCQs and 2M Board questions. Remember: scum = (RCOO)₂Ca — insoluble calcium salt of fatty acid."
        }
      ],
      examinerTraps: [
        {
          trap: "Saying detergents are always better than soaps.",
          correction: "Detergents work in hard water AND are effective in cold water — these are advantages. BUT many detergents are non-biodegradable and cause serious water pollution (rivers foam up). Soaps are biodegradable and eco-friendly, but don't work in hard water. Neither is universally 'better' — use the right one for the context."
        }
      ]
    }
  ]
};
