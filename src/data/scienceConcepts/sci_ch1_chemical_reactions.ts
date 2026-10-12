import type { ScienceChapterConcept } from "./types";

export const SCI_CH1_CONCEPT: ScienceChapterConcept = {
  chapterNo: 1,
  title: "Chemical Reactions and Equations",
  discipline: "Chemistry",
  weightage: "6–8 Marks (Board Mandatory)",
  oneLiner: "A chemical reaction rearranges chemical bonds to form new substances with distinct identities; balancing enforces the Law of Conservation of Mass; state symbols define physical reality.",
  analogyTitle: "The Precision Molecular Assembly Line",
  analogyContent: `Imagine an automated **automotive assembly line**. Individual raw components (chassis, engine, wheels) are your **reactants**. When mechanical and electrical connections are forged, a fully integrated **vehicle** emerges as the **product** — possessing entirely new properties that none of the separate parts had alone.

Under the universal **Law of Conservation of Mass**, no steel bolt or copper wire magically appears or vanishes during assembly: every single atom entering the factory floor on the left must be strictly accounted for in the finished vehicles driving off on the right. In chemical shorthand, we specify the exact physical state of every material: (s) for solid components, (l) for pure liquids, (g) for gases, and (aq) for aqueous solutions dissolved in water.`,
  sections: [
    {
      id: "chemical_reactions",
      label: "1. Chemical Reactions & The Balancing Algorithm",
      heading: "Bond Reorganization, Evidence of Reaction & Stoichiometry",
      subheading: "4 Observable Characteristics + Law of Conservation of Mass + Hit-and-Trial Balancing",
      explanation: `A **chemical reaction** is a process in which one or more starting substances (**reactants**) undergo bond cleavage and atom rearrangement to produce one or more entirely new substances (**products**) with **distinct chemical identities and properties**.

**How do we definitively identify a chemical reaction? (NCERT 4 Core Observations):**
1. 🟡 **Change in colour:** 
   - Iron nail in blue CuSO₄(aq) ⟶ Solution turns pale green FeSO₄(aq); nail gets reddish-brown Cu coating.
   - White AgCl turns grey in sunlight.
2. 💨 **Evolution of a gas:** 
   - Zinc granules + dilute H₂SO₄ ⟶ Colorless Hydrogen gas (H₂) bubbling out with characteristic 'pop' sound.
   - Lead nitrate thermal decomposition ⟶ Pungent reddish-brown Nitrogen dioxide (NO₂) fumes.
3. 🔥 **Change in temperature:** 
   - Quicklime (CaO) + Water ⟶ Slaked lime Ca(OH)₂ with vigorous hissing and intense heat evolution (Exothermic).
   - Barium hydroxide + Ammonium chloride ⟶ Reaction vessel turns ice-cold (Endothermic).
4. 🌫️ **Formation of a precipitate (insoluble solid):** 
   - Lead nitrate + Potassium iodide ⟶ Brilliant yellow precipitate of Lead iodide (PbI₂↓).
   - Sodium sulphate + Barium chloride ⟶ Dense white precipitate of Barium sulphate (BaSO₄↓).

**Law of Conservation of Mass (Antoine Lavoisier, 1789):**
*"Matter can neither be created nor destroyed in a chemical reaction. The total mass of reactants must equal the total mass of products, and the number of atoms of each element must remain strictly identical on both sides of a balanced equation."*`,
      formulasOrKeyPoints: [
        {
          title: "Structure of a Balanced Chemical Equation",
          content: `$$\\underbrace{\\text{Reactants}}_{\\text{Left side}} \\xrightarrow{\\text{Conditions (}\\Delta, h\\nu, \\text{Catalyst, Pressure)}} \\underbrace{\\text{Products}}_{\\text{Right side}}$$

**Standard Physical State Notation (CBSE 0.5-Mark Criterion):**
| Symbol | Meaning | Example |
|--------|---------|---------|
| (s) | Solid substance | $\\text{Fe(s)}, \\text{CaCO}_3\\text{(s)}$ |
| (l) | Pure liquid | $\\text{H}_2\\text{O(l)}, \\text{Br}_2\\text{(l)}$ |
| (g) | Gaseous state | $\\text{O}_2\\text{(g)}, \\text{CO}_2\\text{(g)}$ |
| (aq) | Aqueous solution (dissolved in water) | $\\text{NaCl(aq)}, \\text{HCl(aq)}$ |
| $\\uparrow$ | Gas evolved into atmosphere | $\\text{H}_2\\text{(g)}\\uparrow, \\text{NO}_2\\text{(g)}\\uparrow$ |
| $\\downarrow$ | Insoluble precipitate settling out | $\\text{BaSO}_4\\text{(s)}\\downarrow, \\text{PbI}_2\\text{(s)}\\downarrow$ |`,
          note: "Reaction conditions (temperature Δ, pressure e.g. 340 atm, sunlight hν, catalyst e.g. MnO₂ or chlorophyll) MUST be written above or below the arrow."
        },
        {
          title: "The Systematic 4-Step Balancing Algorithm",
          content: `**Core Rule:** NEVER alter the subscript inside a molecular formula (e.g. changing $\\text{H}_2\\text{O}$ to $\\text{H}_2\\text{O}_2$ changes water into toxic hydrogen peroxide!). You may ONLY adjust the **stoichiometric coefficients** placed in front of formulas.

**Example: Balance the reaction between red-hot iron and steam:**
$$\\text{Fe} + \\text{H}_2\\text{O} \\to \\text{Fe}_3\\text{O}_4 + \\text{H}_2$$

| Step | Operation | Equation | Fe (L/R) | H (L/R) | O (L/R) |
|---|---|---|---|---|---|
| 1 | Initial atom count | $\\text{Fe} + \\text{H}_2\\text{O} \\to \\text{Fe}_3\\text{O}_4 + \\text{H}_2$ | 1 / 3 | 2 / 2 | 1 / 4 |
| 2 | Balance O (most complex molecule $\\text{Fe}_3\\text{O}_4$) | $\\text{Fe} + 4\\text{H}_2\\text{O} \\to \\text{Fe}_3\\text{O}_4 + \\text{H}_2$ | 1 / 3 | 8 / 2 | 4 / 4 ✅ |
| 3 | Balance H | $\\text{Fe} + 4\\text{H}_2\\text{O} \\to \\text{Fe}_3\\text{O}_4 + 4\\text{H}_2$ | 1 / 3 | 8 / 8 ✅ | 4 / 4 ✅ |
| 4 | Balance Fe and insert state symbols | $3\\text{Fe(s)} + 4\\text{H}_2\\text{O(g)} \\to \\text{Fe}_3\\text{O}_4\\text{(s)} + 4\\text{H}_2\\text{(g)}$ | 3 / 3 ✅ | 8 / 8 ✅ | 4 / 4 ✅ |`,
          note: "Board Examiner Alert: Red-hot iron reacts ONLY with steam (gaseous water), NOT liquid water. Writing H₂O(l) instead of H₂O(g) loses 0.5 mark."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Construct an Element Inventory Table",
          action: "List each unique element and tally the exact number of atoms on the reactant side vs product side before writing any numbers.",
          proTip: "Keep polyatomic ions that remain intact (like SO₄²⁻ or NO₃⁻) as a single unit to save balancing time."
        },
        {
          stepNo: 2,
          title: "Target the Largest Compound First",
          action: "Select the compound containing the highest number of atoms (often a metal oxide or salt). Balance its oxygen or polyatomic groups first.",
          proTip: "Leave elemental gases (O₂, H₂, N₂) for the final step — adjusting their coefficient never disrupts other elements."
        },
        {
          stepNo: 3,
          title: "Verify Equality and Affix State Symbols",
          action: "Multiply out every coefficient across all terms to ensure absolute equality. Append (s), (l), (g), (aq).",
          proTip: "In CBSE marking schemes, 3M equation questions carry 1 mark for balancing and 0.5 mark strictly for correct state symbols."
        }
      ],
      examinerTraps: [
        {
          trap: "Altering chemical subscripts during balancing (e.g. writing Na₂Cl₂ instead of 2NaCl).",
          correction: "Subscripts define chemical identity and valency. Only alter coefficients in front of formulas."
        },
        {
          trap: "Omitting the state symbol (g) for steam in iron oxidation.",
          correction: "Always specify 4H₂O(g) because iron does not react with liquid water at room temperature."
        }
      ]
    },
    {
      id: "types_of_reactions",
      label: "2. The 5 Reaction Classes & NCERT Benchmark Activities",
      heading: "Combination, Decomposition, Displacement, Double Displacement & Redox",
      subheading: "Complete Equations, Colors, Observations & Industrial Applications",
      explanation: `Every chemical transformation falls into one of five fundamental reaction archetypes:

### 1. COMBINATION REACTION ($A + B \\to AB$)
Two or more reactants combine to yield a **single product**. Usually highly exothermic.
- **NCERT Activity 1.1 (Magnesium ribbon burning):**
  $$2\\text{Mg(s)} + \\text{O}_2\\text{(g)} \\to 2\\text{MgO(s)} + \\text{Dazzling White Flame}$$
  *Key Fact:* Ribbon must be rubbed with sandpaper before ignition to scrape off the protective basic magnesium oxide/carbonate film that prevents contact with oxygen. White ash formed (MgO) turns red litmus paper blue in aqueous suspension (basic oxide).
- **NCERT Activity 1.4 (Quicklime with water):**
  $$\\text{CaO(s)} [\\text{Quicklime}] + \\text{H}_2\\text{O(l)} \\to \\text{Ca(OH)}_2\\text{(aq)} [\\text{Slaked lime}] + \\text{Vigorous Heat}$$
  *Whitewashing Chemistry (Board Classic):*
  Slaked lime $\\text{Ca(OH)}_2$ applied to walls reacts slowly with atmospheric $\\text{CO}_2$ over 2–3 days:
  $$\\text{Ca(OH)}_2\\text{(aq)} + \\text{CO}_2\\text{(g)} \\to \\text{CaCO}_3\\text{(s)} [\\text{Limestone/Marble shiny layer}] + \\text{H}_2\\text{O(l)}$$

---

### 2. DECOMPOSITION REACTION ($AB \\to A + B$)
A single compound breaks down into two or more simpler substances. **Always endothermic** (requires energy input as heat, electricity, or light).
- **A. Thermal Decomposition (Heat Energy $\\Delta$):**
  - **NCERT Activity 1.5 (Ferrous sulphate crystals):**
    $$2\\text{FeSO}_4 \\cdot 7\\text{H}_2\\text{O(s)} [\\text{Pale green}] \\xrightarrow{\\Delta} 2\\text{FeSO}_4\\text{(s)} [\\text{Dirty white}] + 7\\text{H}_2\\text{O(g)}$$
    $$2\\text{FeSO}_4\\text{(s)} \\xrightarrow{\\Delta} \\text{Fe}_2\\text{O}_3\\text{(s)} [\\text{Reddish-brown ferric oxide}] + \\text{SO}_2\\text{(g)}\\uparrow + \\text{SO}_3\\text{(g)}\\uparrow$$
    *Observations:* Green crystals turn white, then reddish-brown. Choking, pungent smell of burning sulphur due to gaseous $\\text{SO}_2$ and $\\text{SO}_3$.
  - **NCERT Activity 1.6 (Lead nitrate crystals):**
    $$2\\text{Pb(NO}_3)_2\\text{(s)} [\\text{White}] \\xrightarrow{\\Delta} 2\\text{PbO(s)} [\\text{Yellow residue}] + 4\\text{NO}_2\\text{(g)}\\uparrow [\\text{Reddish-brown fumes}] + \\text{O}_2\\text{(g)}\\uparrow [\\text{Colorless}]$$
- **B. Electrolytic Decomposition (Electric Current):**
  - **NCERT Activity 1.7 (Electrolysis of acidified water):**
    $$2\\text{H}_2\\text{O(l)} \\xrightarrow{\\text{Electric current}} 2\\text{H}_2\\text{(g)}\\uparrow [\\text{Cathode (-)}] + \\text{O}_2\\text{(g)}\\uparrow [\\text{Anode (+)}]$$
    *Crucial 2:1 Ratio:* Volume of $\\text{H}_2$ gas collected at the cathode is exactly **double** the volume of $\\text{O}_2$ gas at the anode because each water molecule comprises two hydrogen atoms per one oxygen atom. Dilute $\\text{H}_2\\text{SO}_4$ is added to make pure water conduct electricity.
- **C. Photolytic Decomposition (Light Energy $h\\nu$):**
  - **NCERT Activity 1.8 (Silver halides):**
    $$2\\text{AgCl(s)} [\\text{White}] \\xrightarrow{\\text{Sunlight}} 2\\text{Ag(s)} [\\text{Grey metal}] + \\text{Cl}_2\\text{(g)}\\uparrow [\\text{Yellowish-green gas}]$$
    $$2\\text{AgBr(s)} [\\text{Pale yellow}] \\xrightarrow{\\text{Sunlight}} 2\\text{Ag(s)} [\\text{Grey}] + \\text{Br}_2\\text{(g)}\\uparrow$$
    *Application:* Used in black-and-white photography. Stored in dark amber bottles to block light penetration.

---

### 3. DISPLACEMENT REACTION ($A + BC \\to AC + B$)
A more reactive element displaces a less reactive element from its aqueous salt solution.
- **NCERT Activity 1.9 (Iron nail in copper sulphate):**
  $$\\text{Fe(s)} + \\text{CuSO}_4\\text{(aq)} [\\text{Blue}] \\to \\text{FeSO}_4\\text{(aq)} [\\text{Pale green}] + \\text{Cu(s)} [\\text{Reddish-brown coating on nail}]$$
  *Reactivity check:* Fe is above Cu in the activity series, so Fe displaces Cu. If Cu is placed in $\\text{FeSO}_4$, no reaction occurs!

---

### 4. DOUBLE DISPLACEMENT / PRECIPITATION ($AB + CD \\to AD + CB$)
Exchange of ions between two ionic compounds in aqueous solution. An insoluble solid (**precipitate**) forms.
- **NCERT Activity 1.10:**
  $$\\text{Na}_2\\text{SO}_4\\text{(aq)} + \\text{BaCl}_2\\text{(aq)} \\to \\text{BaSO}_4\\text{(s)}\\downarrow [\\text{White precipitate}] + 2\\text{NaCl(aq)}$$
- **NCERT Activity 1.2:**
  $$\\text{Pb(NO}_3)_2\\text{(aq)} + 2\\text{KI(aq)} \\to \\text{PbI}_2\\text{(s)}\\downarrow [\\text{Yellow precipitate}] + 2\\text{KNO}_3\\text{(aq)}$$

---

### 5. OXIDATION-REDUCTION (REDOX) REACTIONS
Oxidation and reduction ALWAYS occur simultaneously:
- **Oxidation:** Gain of Oxygen OR Loss of Hydrogen OR Loss of Electrons ($LEO$).
- **Reduction:** Loss of Oxygen OR Gain of Hydrogen OR Gain of Electrons ($GER$).
- **Oxidizing Agent:** The reactant that provides oxygen / accepts electrons (itself gets **reduced**).
- **Reducing Agent:** The reactant that removes oxygen / donates electrons (itself gets **oxidized**).

$$\\text{CuO(s)} [\\text{Black}] + \\text{H}_2\\text{(g)} \\xrightarrow{\\Delta} \\text{Cu(s)} [\\text{Brown}] + \\text{H}_2\\text{O(l)}$$
- $\\text{CuO} \\to \\text{Cu}$: Loses oxygen $\\to$ **Reduced** (acts as **Oxidizing Agent**)
- $\\text{H}_2 \\to \\text{H}_2\\text{O}$: Gains oxygen $\\to$ **Oxidized** (acts as **Reducing Agent**)

$$\\text{MnO}_2 + 4\\text{HCl} \\to \\text{MnCl}_2 + 2\\text{H}_2\\text{O} + \\text{Cl}_2$$
- $\\text{HCl} \\to \\text{Cl}_2$: Loses hydrogen $\\to$ **Oxidized** (Reducing Agent: $\\text{HCl}$)
- $\\text{MnO}_2 \\to \\text{MnCl}_2$: Loses oxygen $\\to$ **Reduced** (Oxidizing Agent: $\\text{MnO}_2$)`,
      formulasOrKeyPoints: [
        {
          title: "Corrosion & Rancidity — Everyday Oxidation Phenomena",
          content: `**1. Corrosion of Metals:**
- **Rusting of Iron:** Requires **both** oxygen and moisture:
  $$4\\text{Fe(s)} + 3\\text{O}_2\\text{(g)} + 2x\\text{H}_2\\text{O(l)} \\to 2\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O(s)} [\\text{Hydrated Ferric Oxide / Rust}]$$
- **Tarnishing of Silver:** Reacts with atmospheric hydrogen sulphide:
  $$2\\text{Ag(s)} + \\text{H}_2\\text{S(g)} \\to \\text{Ag}_2\\text{S(s)} [\\text{Black silver sulphide layer}] + \\text{H}_2\\text{(g)}$$
- **Green Patina on Copper:** Reacts with moist $\\text{CO}_2$:
  $$2\\text{Cu} + \\text{H}_2\\text{O} + \\text{CO}_2 + \\text{O}_2 \\to \\text{CuCO}_3 \\cdot \\text{Cu(OH)}_2 [\\text{Basic Copper Carbonate, Green}]$$

**2. Rancidity of Foods:**
Slow aerial oxidation of fats and oils producing foul odor, sour taste, and harmful peroxides.
**Prevention Strategies:**
1. Flushing food packages with unreactive **Nitrogen gas (N₂)**.
2. Adding synthetic antioxidants (BHA — Butylated Hydroxyanisole, BHT).
3. Vacuum packaging and airtight storage.
4. Refrigeration (slows reaction rate).`,
          note: "Antioxidants are reducing agents that get preferentially oxidized, protecting food lipids from oxidation."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify Redox Pairs",
          action: "Trace the oxygen and hydrogen atoms from reactants to products. Identify which reactant gained oxygen (oxidized) and which lost oxygen (reduced).",
          proTip: "Remember: The substance that gets oxidized is the REDUCING AGENT. The substance that gets reduced is the OXIDIZING AGENT."
        },
        {
          stepNo: 2,
          title: "Always Choose Agents from Reactants",
          action: "Never pick a product as an oxidizing or reducing agent. Agents must always be species on the left side of the equation.",
          proTip: "In CuO + H₂ → Cu + H₂O, the oxidizing agent is CuO, NEVER Cu."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing the color changes in heating Ferrous Sulphate crystals.",
          correction: "FeSO₄·7H₂O is PALE GREEN. On heating, it first loses water to form DIRTY WHITE FeSO₄, and then decomposes into REDDISH-BROWN Fe₂O₃ solid, with pungent smelling SO₂ and SO₃ gases."
        },
        {
          trap: "Stating that the 2:1 volume ratio in electrolysis of water is Oxygen : Hydrogen.",
          correction: "Hydrogen is 2 parts, collected at the cathode (-). Oxygen is 1 part, collected at the anode (+). Ratio of H₂ to O₂ is 2 : 1."
        }
      ]
    },
    {
      id: "exothermic_endothermic",
      label: "3. Energetics: Exothermic vs Endothermic Reactions",
      heading: "Energy Enthalpy, Thermochemistry & Biological Energetics",
      subheading: "Heat Released vs Heat Absorbed + Respiration & Photosynthesis Classifications",
      explanation: `Chemical transformations involve breaking bonds in reactants (requiring energy input) and forming new bonds in products (releasing energy).

### EXOTHERMIC REACTIONS ($\\Delta H < 0$)
Reactions in which energy is **liberated** into the surroundings as heat, light, or sound. Temperature of the reaction mixture **rises**.
- **Respiration:** Glucose oxidation in living cells:
  $$\\text{C}_6\\text{H}_{12}\\text{O}_6\\text{(aq)} + 6\\text{O}_2\\text{(g)} \\to 6\\text{CO}_2\\text{(g)} + 6\\text{H}_2\\text{O(l)} + \\text{Energy (38 ATP)}$$
- **Burning of Natural Gas (Methane):**
  $$\\text{CH}_4\\text{(g)} + 2\\text{O}_2\\text{(g)} \\to \\text{CO}_2\\text{(g)} + 2\\text{H}_2\\text{O(g)} + \\text{Heat + Light}$$
- **Dissolution of Quicklime:** $\\text{CaO} + \\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2 + \\text{Heat}$
- **Decomposition of Vegetable Matter into Compost** (Microbial decomposition releases thermal energy).
- **Dissolution of strong bases/acids in water** (e.g. NaOH pellets in water).

---

### ENDOTHERMIC REACTIONS ($\\Delta H > 0$)
Reactions in which energy is **absorbed** from the surroundings in the form of heat, light, or electricity. Temperature of the surroundings **drops**.
- **Photosynthesis:** 
  $$6\\text{CO}_2\\text{(g)} + 6\\text{H}_2\\text{O(l)} \\xrightarrow{\\text{Sunlight/Chlorophyll}} \\text{C}_6\\text{H}_{12}\\text{O}_6\\text{(aq)} + 6\\text{O}_2\\text{(g)}$$
- **All thermal decomposition reactions:**
  $$\\text{CaCO}_3\\text{(s)} \\xrightarrow{\\Delta (1000^\\circ\\text{C})} \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$$
- **Photolytic reactions:** $2\\text{AgCl} \\xrightarrow{h\\nu} 2\\text{Ag} + \\text{Cl}_2$
- **Reaction of Barium hydroxide with Ammonium chloride:**
  $$\\text{Ba(OH)}_2 \\cdot 8\\text{H}_2\\text{O} + 2\\text{NH}_4\\text{Cl} \\to \\text{BaCl}_2 + 2\\text{NH}_3 + 10\\text{H}_2\\text{O} \\quad (\\text{Vessel turns sub-zero!})$$`,
      formulasOrKeyPoints: [
        {
          title: "Comprehensive Master Comparison Table",
          content: `| Feature | Exothermic Reaction | Endothermic Reaction |
|---|---|---|
| Heat Exchange | Released to surroundings | Absorbed from surroundings |
| Enthalpy Change | $\\Delta H < 0$ (Negative) | $\\Delta H > 0$ (Positive) |
| System Temperature | Reaction vessel gets HOT | Reaction vessel gets COLD |
| Product Energy Level | Lower than reactants | Higher than reactants |
| Bond Energetics | Energy released forming bonds > Energy needed to break bonds | Energy needed to break bonds > Energy released forming bonds |
| NCERT Examples | Respiration, Coal combustion, CaO + H₂O, Compost decay | Photosynthesis, Electrolysis, CaCO₃ heating, AgCl photolysis |`,
          note: "CBSE Exam Question: 'Is decomposition of vegetable matter into compost exothermic or endothermic?' Answer: Exothermic, because microbes release metabolic heat during decomposition."
        }
      ],
      examinerTraps: [
        {
          trap: "Classifying respiration as endothermic because it is a metabolic process.",
          correction: "Respiration breaks down glucose to RELEASE energy in the form of ATP. It is strictly EXOTHERMIC. Photosynthesis is the reverse process that absorbs solar energy and is ENDOTHERMIC."
        }
      ]
    }
  ]
};
