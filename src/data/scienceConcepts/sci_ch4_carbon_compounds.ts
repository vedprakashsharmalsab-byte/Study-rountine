import type { ScienceChapterConcept } from "./types";

export const SCI_CH4_CONCEPT: ScienceChapterConcept = {
  chapterNo: 4,
  title: "Carbon and its Compounds",
  discipline: "Chemistry",
  weightage: "6–8 Marks (Board Mandatory)",
  oneLiner: "Carbon forms 4 covalent bonds by sharing electrons (tetravalency); links into endless chains and rings (catenation); forms homologous series with functional groups; governs organic synthesis from ethanol to soaps.",
  analogyTitle: "The Molecular Architect of Life",
  analogyContent: `Imagine an architect given a versatile structural hub capable of forming exactly **four directional load-bearing connections** simultaneously. Unlike alkali metals that simply give away an electron or halogens that seize one, **Carbon (Atomic Number 6, Electronic Configuration 2, 4)** operates through mutual electron sharing — creating resilient **covalent bonds**.

Carbon's self-linking ability (**catenation**) allows it to forge straight chains, complex branching frameworks, and stable aromatic rings with thousands of carbon atoms linked together. This structural versatility explains why over 95% of all known chemical compounds on Earth are carbon-based, forming the backbone of biology, fuels, plastics, and pharmaceuticals.`,
  sections: [
    {
      id: "carbon_bonding",
      label: "1. Covalent Bonding & Versatile Nature of Carbon",
      heading: "Why Carbon Shares Electrons: Catenation, Tetravalency & Allotropes",
      subheading: "Octet Completion Limitations + Catenation + Tetravalency + Diamond, Graphite & Fullerene",
      explanation: `### Why Carbon Exclusively Forms Covalent Bonds (NCERT 2-Mark Board Question):
Carbon has atomic number 6 with electronic configuration **(2, 4)**. To attain a stable noble gas octet (like Neon 2, 8), it needs 4 electrons:
1. **Why it cannot gain 4 electrons ($C^{4-}$ anion):**
   Adding 4 electrons would require a tiny carbon nucleus containing only **6 protons** to hold on to **10 electrons**. Electrostatic repulsion among the 10 electrons would make the $C^{4-}$ anion extremely unstable and energetically impossible to form.
2. **Why it cannot lose 4 electrons ($C^{4+}$ cation):**
   Removing 4 electrons sequentially requires an **enormous amount of ionization energy**. It would leave a tiny $C^{4+}$ cation with 6 protons holding just 2 electrons, which is energetically unfeasible.

**Conclusion:** Carbon overcomes this limitation by **sharing its 4 valence electrons** with other carbon atoms or atoms of other elements (H, O, N, halogens), forming **covalent bonds**.

---

### The Versatile Nature of Carbon (Two Unique Capabilities):
1. **Catenation:** 
   The unique ability of carbon atoms to form strong, stable covalent bonds with other carbon atoms to form:
   - Long straight chains (e.g., hexane $\text{C}_6\text{H}_{14}$)
   - Branched chains (e.g., isobutane, neopentane)
   - Closed cyclic rings (e.g., cyclohexane $\text{C}_6\text{H}_{12}$, benzene $\text{C}_6\text{H}_6$)
   *Reason for high catenation:* The small atomic size of carbon enables the nucleus to hold the shared electron pairs tightly, making the **C–C bond exceptionally strong and stable** (~348 kJ/mol). Silicon also shows catenation with hydrogen, but its bonds are weaker and highly reactive.
2. **Tetravalency:**
   With 4 valence electrons, a carbon atom is capable of bonding with 4 other atoms of carbon or any monovalent, divalent, or trivalent elements.

---

### Allotropes of Carbon (NCERT Comparative Analysis):
Allotropy is the property by which an element exists in two or more different physical forms with identical chemical composition but differing physical structures.

| Allotrope | Crystal Architecture | Physical Properties | Electrical Conductivity | Practical Applications |
|---|---|---|---|---|
| **Diamond** | Rigid 3D tetrahedral network; each C bonded covalently to 4 other C atoms. | Extremely hard (hardest natural substance known); high refractive index (2.42) giving brilliant sparkle; very high MP (~3500°C). | **Non-conductor** (Zero free electrons; all 4 valence electrons locked in strong covalent bonds). | Precision glass cutters, rock drills, gemstone jewelry. |
| **Graphite** | Hexagonal planar arrays arranged in parallel layers held by weak van der Waals forces. | Soft, slippery and greasy to touch (layers slide over each other easily); blackish-grey opaque solid. | **Good Conductor** (Each C bonded to only 3 C atoms; the 4th valence electron is **delocalized/free** to migrate along layers). | Dry lubricant for high-temp machinery, pencil leads, electrolysis electrodes, dry cells. |
| **Buckminsterfullerene ($\text{C}_{60}$)** | Geodesic dome cage shaped like a soccer ball; 20 hexagons and 12 pentagons of carbon. | Dark solid at room temp; soluble in organic solvents. | Semiconductor at room temperature. | Nanotechnology, drug delivery capsules, specialized lubricants. |`,
      formulasOrKeyPoints: [
        {
          title: "Saturated vs Unsaturated Hydrocarbons & Bromine Water Test",
          content: `**1. Saturated Hydrocarbons (Alkanes, $\\text{C}_n\\text{H}_{2n+2}$):**
- Carbon atoms linked exclusively by **single covalent bonds (C–C)**.
- Relatively unreactive; undergo substitution reactions.
- Burn with a clean, non-sooty blue flame in adequate air.

**2. Unsaturated Hydrocarbons (Alkenes $\\text{C}_n\\text{H}_{2n}$, Alkynes $\\text{C}_n\\text{H}_{2n-2}$):**
- Contain at least one **double bond (C=C)** or **triple bond (C≡C)**.
- Much more reactive; undergo addition reactions across multiple bonds.
- Burn with a yellow, smoky, sooty flame due to high carbon percentage.

**The Diagnostic Unsaturation Test (Bromine Water Test):**
- Add reddish-brown **Bromine water ($\text{Br}_2\text{(aq)}$)** to the test substance:
  * **Unsaturated compound:** Decolorizes bromine water rapidly (reddish-brown turns **colorless**):
    $$\\text{CH}_2\\text{=CH}_2 + \\text{Br}_2 \\to \\text{CH}_2\\text{Br–CH}_2\\text{Br} [\\text{1,2-Dibromoethane, Colorless}]$$
  * **Saturated compound:** Does NOT decolorize bromine water in the absence of sunlight.`,
          note: "Unsaturated vegetable oils decolorize bromine water; saturated animal fats (butter, ghee) do not."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Draw Electron Dot Structures (Lewis Structures)",
          action: "Write valence electrons of each atom as dots/crosses. Pair up electrons so each Hydrogen shares 2 electrons (duplet) and each Carbon/Oxygen/Nitrogen shares 8 electrons (octet).",
          proTip: "In methane (CH₄), carbon shares 4 pairs = 4 single bonds. In ethene (C₂H₄), carbon shares 2 pairs with carbon = double bond."
        }
      ],
      examinerTraps: [
        {
          trap: "Stating that graphite conducts electricity because it is a metal.",
          correction: "Graphite is 100% NON-METAL carbon. It conducts electricity purely due to its hexagonal layered structure where each carbon bonds with only 3 others, leaving 1 free delocalized electron per carbon atom."
        }
      ]
    },
    {
      id: "functional_groups",
      label: "2. Functional Groups, Homologous Series & Isomerism",
      heading: "Chemical Personality Tags, IUPAC Rules & Structural Isomers",
      subheading: "5 Key Functional Groups + Homologous Series Characteristics + Isomers of Butane & Pentane",
      explanation: `**Functional Group:**
An atom or a group of bonded atoms that replaces hydrogen in a hydrocarbon and determines the characteristic chemical reactivity of the organic compound, irrespective of chain length.

| Functional Group Name | Heteroatom | Formula | IUPAC Suffix / Prefix | Example Molecule | Formula |
|---|---|---|---|---|---|
| Halo (Chloro / Bromo) | Halogen (Cl, Br) | $\\text{–Cl}, \\text{–Br}$ | Prefix: *chloro-*, *bromo-* | Chloroethane | $\\text{C}_2\\text{H}_5\\text{Cl}$ |
| Alcohol | Oxygen | $\\text{–OH}$ | Suffix: *-ol* | Ethanol | $\\text{CH}_3\\text{CH}_2\\text{OH}$ |
| Aldehyde | Oxygen | $\\text{–CHO}$ | Suffix: *-al* | Ethanal | $\\text{CH}_3\\text{CHO}$ |
| Ketone | Oxygen | $\\text{>C=O}$ | Suffix: *-one* | Propanone (Acetone) | $\\text{CH}_3\\text{COCH}_3$ |
| Carboxylic Acid | Oxygen | $\\text{–COOH}$ | Suffix: *-oic acid* | Ethanoic acid (Acetic) | $\\text{CH}_3\\text{COOH}$ |

---

### Homologous Series (5 Core Characteristics):
A family of organic compounds having the same functional group and similar chemical properties:
1. Successive members differ by a **$\\text{–CH}_2\\text{–}$ unit** (methylene group).
2. Successive members differ by **14 u** in molecular mass ($12 + 2 = 14$).
3. All members conform to a **single general formula** (e.g. Alkanes: $\text{C}_n\text{H}_{2n+2}$; Alcohols: $\text{C}_n\text{H}_{2n+1}\text{OH}$).
4. Physical properties (melting point, boiling point, density) show a **gradual progression** with increasing molecular mass (higher mass $\implies$ stronger intermolecular forces $\implies$ higher boiling point).
5. All members exhibit identical **chemical properties** determined by the common functional group.

---

### Structural Isomerism:
Compounds having the **same molecular formula** but **different structural arrangements** of carbon atoms.
- **Isomers of Butane ($\text{C}_4\text{H}_{10}$) — 2 Isomers:**
  1. *n-Butane (straight chain):* $\text{CH}_3\text{–CH}_2\text{–CH}_2\text{–CH}_3$
  2. *Isobutane / 2-Methylpropane (branched):* $\text{CH}_3\text{–CH(CH}_3)\text{–CH}_3$
- **Isomers of Pentane ($\text{C}_5\text{H}_{12}$) — 3 Isomers:**
  1. *n-Pentane:* $\text{CH}_3\text{–CH}_2\text{–CH}_2\text{–CH}_2\text{–CH}_3$
  2. *Isopentane / 2-Methylbutane:* $\text{CH}_3\text{–CH(CH}_3)\text{–CH}_2\text{–CH}_3$
  3. *Neopentane / 2,2-Dimethylpropane:* $\text{C(CH}_3)_4$`,
      formulasOrKeyPoints: [
        {
          title: "IUPAC Nomenclature Master Guide",
          content: `**3-Step Naming Algorithm:**
1. **Identify Word Root (Count longest continuous C-chain):**
   - 1C: Meth- | 2C: Eth- | 3C: Prop- | 4C: But- | 5C: Pent- | 6C: Hex-
2. **Identify Primary Suffix (Saturation):**
   - Single bonds only: *-ane*
   - Contains C=C: *-ene*
   - Contains C≡C: *-yne*
3. **Identify Secondary Suffix (Functional Group):**
   - Drop the terminal 'e' of *-ane* if the functional group suffix begins with a vowel:
     * Alcohol: Ethane - e + ol = **Ethanol**
     * Aldehyde: Ethane - e + al = **Ethanal**
     * Ketone: Propane - e + one = **Propanone**
     * Carboxylic acid: Ethane - e + oic acid = **Ethanoic acid**`,
          note: "Ketone group >C=O must be attached to TWO carbon atoms. Therefore, the simplest ketone has a minimum of 3 carbon atoms (Propanone). Methanone and Ethanone cannot exist!"
        }
      ],
      examinerTraps: [
        {
          trap: "Attempting to name 'Methanone' or 'Ethanone'.",
          correction: "Ketone functional group must sit between two carbons: R–CO–R'. Propanone (CH₃COCH₃, 3 carbons) is the first member of the ketone series."
        }
      ]
    },
    {
      id: "reactions_carbon",
      label: "3. Chemical Reactions of Carbon & Benchmark Compounds",
      heading: "Combustion, Oxidation, Addition, Substitution, Ethanol & Ethanoic Acid",
      subheading: "Hydrogenation + Esterification + Saponification + Sodium Reaction",
      explanation: `### 4 Key Reaction Classes of Carbon Compounds:
1. **Combustion:**
   All carbon compounds burn in oxygen to liberate carbon dioxide, water, and immense heat energy:
   $$\\text{CH}_4\\text{(g)} + 2\\text{O}_2\\text{(g)} \\to \\text{CO}_2\\text{(g)} + 2\\text{H}_2\\text{O(g)} + \\text{Heat + Light}$$
   $$\\text{C}_2\\text{H}_5\\text{OH(l)} + 3\\text{O}_2\\text{(g)} \\to 2\\text{CO}_2\\text{(g)} + 3\\text{H}_2\\text{O(g)} + \\text{Heat}$$
2. **Oxidation (Using Alkaline $\\text{KMnO}_4$ or Acidified $\\text{K}_2\\text{Cr}_2\\text{O}_7$):**
   Ethanol is oxidised to ethanoic acid by strong oxidizing agents on heating:
   $$\\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{\\text{Alkaline KMnO}_4 + \\Delta \\text{ or Acidified K}_2\\text{Cr}_2\\text{O}_7 + \\Delta} \\text{CH}_3\\text{COOH}$$
   *Observation:* Purple color of $\text{KMnO}_4$ fades; orange $\text{K}_2\text{Cr}_2\text{O}_7$ turns green.
3. **Addition Reaction (Industrial Hydrogenation):**
   Unsaturated hydrocarbons add hydrogen in the presence of nickel (Ni) or palladium (Pd) catalyst to form saturated hydrocarbons:
   $$\\text{R}_2\\text{C=CR}_2 [\\text{Liquid vegetable oil}] + \\text{H}_2 \\xrightarrow{\\text{Ni catalyst, 200°C}} \\text{R}_2\\text{CH–CHR}_2 [\\text{Solid Vanaspati ghee}]$$
   *Health Note:* Vegetable oils containing unsaturated fatty acids are healthy for cooking. Animal fats contain saturated fatty acids, which elevate blood cholesterol.
4. **Substitution Reaction:**
   In presence of sunlight, chlorine displaces hydrogen atoms of alkanes one by one:
   $$\\text{CH}_4 + \\text{Cl}_2 \\xrightarrow{\\text{Sunlight}} \\text{CH}_3\\text{Cl} [\\text{Chloromethane}] + \\text{HCl}$$

---

### In-Depth: Ethanol vs Ethanoic Acid (Most Important Board Chemistry):
- **Ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$):**
  * *Reaction with Sodium Metal:*
    $$2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{Na} \\to 2\\text{C}_2\\text{H}_5\\text{ONa} [\\text{Sodium ethoxide}] + \\text{H}_2\\text{(g)}\\uparrow$$
  * *Dehydration Reaction (Heating with Conc. $\text{H}_2\text{SO}_4$ at 443 K):*
    $$\\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{\\text{Conc. H}_2\\text{SO}_4, 443\\text{ K}} \\text{CH}_2\\text{=CH}_2 [\\text{Ethene}] + \\text{H}_2\\text{O}$$
    Conc. $\text{H}_2\text{SO}_4$ acts as a powerful dehydrating agent, removing a water molecule.
  * *Denatured Alcohol:* Industrial ethanol made poisonous and unpalatable by mixing ~5% methanol, pyridine, and copper sulphate (blue dye) to prevent misuse as a beverage.
- **Ethanoic Acid ($\\text{CH}_3\\text{COOH}$):**
  * *Vinegar:* 5% to 8% aqueous solution of ethanoic acid in water (preservative in pickles).
  * *Glacial Acetic Acid:* Pure anhydrous ethanoic acid has a freezing point of 290 K (17°C), crystallizing into ice-like flakes in winter.
  * *Esterification Reaction (Sweet-smelling Ester):*
    $$\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow{\\text{Conc. H}_2\\text{SO}_4} \\underbrace{\\text{CH}_3\\text{COOC}_2\\text{H}_5}_{\\text{Ethyl ethanoate (Sweet fruity smell)}} + \\text{H}_2\\text{O}$$
  * *Reaction with Carbonates/Bicarbonates:*
    $$2\\text{CH}_3\\text{COOH} + \\text{Na}_2\\text{CO}_3 \\to 2\\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$$
    Releases brisk effervescence of $\text{CO}_2$ gas that turns lime water milky.`,
      formulasOrKeyPoints: [
        {
          title: "Saponification: The Alkaline Hydrolysis of Esters",
          content: `When an ester is heated with an alkali ($\text{NaOH}$), it hydrolyzes back into sodium ethanoate and ethanol:
$$\\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{NaOH} \\xrightarrow{\\Delta} \\text{CH}_3\\text{COONa} [\\text{Soap component}] + \\text{C}_2\\text{H}_5\\text{OH}$$
This reaction is called **saponification** because it is used in the commercial manufacture of soaps from animal/vegetable fats (which are naturally occurring glycerol esters of long-chain fatty acids).`,
          note: "Esterification is acid-catalyzed; Saponification is base-catalyzed."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Esterification with Saponification.",
          correction: "Esterification = Carboxylic acid + Alcohol --(Acid)--> Ester + Water. Saponification = Ester + NaOH --> Soap (Sodium carboxylate) + Alcohol."
        }
      ]
    },
    {
      id: "soaps_detergents",
      label: "4. Soaps & Detergents: Cleansing Action & Micelles",
      heading: "Molecular Architecture, Micelle Formation & Hard Water Scum",
      subheading: "Hydrophilic Head + Hydrophobic Tail + Emulsification + Scum vs Synthetic Detergents",
      explanation: `### Structure of a Soap Molecule:
Soaps are **sodium or potassium salts of long-chain carboxylic acids** (fatty acids such as stearic acid $\text{C}_{17}\text{H}_{35}\text{COOH}$, palmitic acid, oleic acid):
$$\\text{C}_{17}\\text{H}_{35}\\text{COO}^- \\text{Na}^+$$
A soap molecule has two chemically distinct ends:
1. **Long Hydrocarbon Tail ($\text{C}_{17}\text{H}_{35}–$):**
   - Non-polar, **Hydrophobic** (water-hating / water-repelling).
   - Soluble in non-polar grease, oily dirt, and lipid stains.
2. **Ionic Carboxylate Head ($–\text{COO}^–\text{Na}^+$):**
   - Polar, **Hydrophilic** (water-loving).
   - Soluble in polar water molecules.

---

### Mechanism of Cleansing Action (Micelle Formation):
1. Most dirt on clothes is oily or greasy in nature, which is insoluble in pure water.
2. When soap is dissolved in water, the molecules orient themselves radially at the oil-water interface:
   - The **hydrophobic tails dissolve into the interior oily droplet**.
   - The **hydrophilic ionic heads face outward**, interacting electrostatically with the surrounding water.
3. This spherical cluster of radially arranged soap molecules is called a **Micelle**.
4. The oily dirt is trapped securely at the center of the micelle.
5. Because the exterior surfaces of all micelles are loaded with identical negative carboxylate charges ($–\text{COO}^-$), **micelles repel each other** electrostatically and do not coalesce or precipitate.
6. The oily dirt remains suspended as an emulsion in water. Agitating and rinsing with water easily flushes the suspended micelles away!

---

### Problem with Soaps in Hard Water (Scum Formation):
Hard water contains dissolved salts of **Calcium ($\text{Ca}^{2+}$)** and **Magnesium ($\text{Mg}^{2+}$)**.
When soap is added to hard water, it reacts with these divalent ions to form an insoluble, sticky white precipitate called **Scum**:
$$2\\text{C}_{17}\\text{H}_{35}\\text{COONa(aq)} + \\text{Ca}^{2+}\\text{(aq)} \\to \\underbrace{(\\text{C}_{17}\\text{H}_{35}\\text{COO})_2\\text{Ca}\\downarrow}_{\\text{Insoluble Calcium Stearate / Scum}} + 2\\text{Na}^+\\text{(aq)}$$
- *Consequences of Scum:*
  * A large amount of soap is wasted just reacting with $\text{Ca}^{2+}$ and $\text{Mg}^{2+}$ before any lather forms.
  * Sticky scum adheres stubbornly to clothes, dulling fabric brightness.

---

### Synthetic Detergents (The Hard Water Solution):
Synthetic detergents are **sodium salts of long-chain benzene sulphonic acids** (e.g. Sodium alkylbenzene sulphonate) or ammonium salts with chloride/bromide ions.
- *Why Detergents Work in Hard Water:*
  The charged sulphonate group ($–\text{SO}_3^–\text{Na}^+$) does NOT form insoluble precipitates with $\text{Ca}^{2+}$ or $\text{Mg}^{2+}$ ions.
  Therefore, detergents lather abundantly even in hard water.
- *Limitation:* Many branched detergents are non-biodegradable, causing environmental foam pollution in waterways.`,
      formulasOrKeyPoints: [
        {
          title: "Comprehensive Soap vs Synthetic Detergent Comparison",
          content: `| Parameter | Soap | Synthetic Detergent |
|---|---|---|
| Chemical Constitution | Sodium/potassium salts of long-chain fatty acids ($\text{R–COO}^-\text{Na}^+$). | Sodium salts of long-chain alkylbenzene sulphonic acids ($\text{R–SO}_3^-\text{Na}^+$) or ammonium salts. |
| Raw Material | Natural vegetable oils and animal fats. | Petroleum hydrocarbons. |
| Performance in Hard Water | Forms insoluble sticky precipitate (**scum**); ineffective. | Forms rich lather; remains **100% effective in hard water**. |
| Cleansing Action | Mild; ideal for human skin and soft fabrics. | Strong; formulated for laundry, dishwashing, shampoos. |
| Biodegradability | **100% Biodegradable**; environmentally benign. | Many branched types are **non-biodegradable**; cause waterway pollution. |`,
          note: "CBSE Board Trap: Why do soaps not form micelles in ethanol? Answer: Soap's hydrocarbon tail is soluble in ethanol (both are organic), so soap dissolves completely as individual molecules without needing to cluster into spherical micelles."
        }
      ],
      examinerTraps: [
        {
          trap: "Stating that soaps form micelles in non-polar organic solvents like ethanol.",
          correction: "Micelles form in water because the hydrophobic tail must hide from water. In ethanol, the hydrocarbon tail is readily soluble, so soap molecules dissolve homogeneously without forming micelles."
        }
      ]
    }
  ]
};
