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
1. **Change in State:** Liquid reactants forming a precipitate or gaseous product (e.g. heating solid wax, or electrolysis producing gases).
2. **Change in Colour:** Colorless lead nitrate and potassium iodide forming a bright **yellow precipitate** of lead iodide ($PbI_2$), or iron nails turning blue copper sulphate into pale green ferrous sulphate ($FeSO_4$).
3. **Evolution of a Gas:** Granulated zinc reacting with dilute sulphuric acid to evolve colorless, odorless **hydrogen gas ($H_2$)**, confirmed by the characteristic sharp 'pop' sound with a burning splint.
4. **Change in Temperature:** Quicklime reacting with water releases immense heat (exothermic), boiling water instantly; barium hydroxide reacting with ammonium chloride absorbs heat (endothermic), freezing the bottom of the beaker.

**The Law of Conservation of Mass (Antoine Lavoisier, 1789):**
"Mass can neither be created nor destroyed in a chemical reaction."
Therefore, the **total mass of elements present in the products** must equal the **total mass of elements present in the reactants**. This translates directly to atomic accounting: the number of atoms of each element remains identical before and after the chemical transformation.

**The 5-Step Hit-and-Trial Balancing Protocol:**
- **Step 1:** Write the raw skeletal chemical equation with chemical formulas enclosed in rigid mental boxes: $Fe + H_2O \\rightarrow Fe_3O_4 + H_2$. Never alter subscripts inside formulas ($Fe_3O_4$ cannot be rewritten as $FeO_2$).
- **Step 2:** Tabulate atom counts for reactants vs products across every element ($Fe$: 1 vs 3; $H$: 2 vs 2; $O$: 1 vs 4).
- **Step 3:** Balance the element having the maximum number of atoms first (oxygen here: multiply $H_2O$ by 4 $\\rightarrow 4H_2O$, giving 4 oxygens on both sides).
- **Step 4:** Balance hydrogen next ($4H_2O$ yields 8 hydrogen atoms on left; multiply product $H_2$ by 4 $\\rightarrow 4H_2$).
- **Step 5:** Balance the remaining element ($Fe$: 3 on right, multiply reactant $Fe$ by 3 $\\rightarrow 3Fe$).
- **Final Equation with State Symbols:**
$$3Fe(s) + 4H_2O(g) \\rightarrow Fe_3O_4(s) + 4H_2(g)$$
*Note:* Water is designated $(g)$ because red-hot iron reacts solely with steam, never liquid water!`,
      formulasOrKeyPoints: [
        {
          title: "Law of Conservation of Mass Equation",
          content: "$$\\sum m_{\\text{reactants}} = \\sum m_{\\text{products}} \\iff N_{\\text{atoms, initial}} = N_{\\text{atoms, final}}$$",
          note: "Every single atom on LHS must be accounted for on RHS with whole-number stoichiometric coefficients."
        },
        {
          title: "Standard Physical State Symbols",
          content: "$$(s) = \\text{solid},\\quad (l) = \\text{liquid},\\quad (g) = \\text{gas},\\quad (aq) = \\text{aqueous solution in water},\\quad \\downarrow = \\text{precipitate},\\quad \\uparrow = \\text{gas evolved}$$",
          note: "CBSE awards 0.5 mark deduction per reaction if mandatory state symbols are omitted in 3-mark and 5-mark questions."
        },
        {
          title: "Reaction Conditions Annotation",
          content: "$$CO(g) + 2H_2(g) \\xrightarrow{340\\text{ atm}} CH_3OH(l)$$",
          note: "Catalysts, temperature, pressure, or sunlight must be inscribed directly above or below the reaction arrow."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Write Skeletal Chemical Equation",
          action: "Identify reactants and products from the problem statement and write their exact chemical formulas without guessing subscripts.",
          proTip: "Check polyatomic ions ($SO_4^{2-}, NO_3^-, CO_3^{2-}$). Treat them as single intact units if they do not decompose."
        },
        {
          stepNo: 2,
          title: "Count Atoms on LHS and RHS",
          action: "Construct an atom audit table listing Element, Number of atoms in Reactants, Number of atoms in Products.",
          proTip: "Focus on the compound with maximum atoms first — usually an oxide or sulphate."
        },
        {
          stepNo: 3,
          title: "Apply Whole-Number Coefficients",
          action: "Place integer multipliers exclusively in front of formulas. Never alter sub-indices ($2H_2O$ is valid; $H_2O_2$ turns water into hydrogen peroxide).",
          proTip: "Balance elements that appear only once on each side first; balance $O$ and $H$ last."
        },
        {
          stepNo: 4,
          title: "Append Physical State Indicators",
          action: "Verify whether each participant is solid (s), liquid (l), gas (g), or aqueous (aq). Check special conditions (heat $\\Delta$, sunlight $h\\nu$, catalyst).",
          proTip: "Remember: Quicklime with water produces slaked lime solution: $CaO(s) + H_2O(l) \\rightarrow Ca(OH)_2(aq)$."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing water as $(l)$ in the iron reaction: $3Fe(s) + 4H_2O(l) \\rightarrow Fe_3O_4(s) + 4H_2(g)$.",
          correction: "Iron does NOT react with cold or hot liquid water. It reacts exclusively with steam, so water must be written as $H_2O(g)$."
        },
        {
          trap: "Balancing equations by altering molecular subscripts: writing $Mg + O_2 \\rightarrow MgO_2$.",
          correction: "Magnesium oxide is $MgO$. Subscripts are determined strictly by valence states ($Mg^{2+}$ and $O^{2-}$). Multiply by coefficient: $2Mg + O_2 \\rightarrow 2MgO$."
        }
      ]
    },
    {
      id: "types_of_reactions",
      label: "2. The 5 Core Reaction Classes & NCERT Activities",
      heading: "Combination, Decomposition, Displacement, Double Displacement & Precipitation",
      subheading: "Complete Equations, Colors, Observations & Industrial Applications",
      explanation: `NCERT Class 10 categorizes all chemical reactions into 5 primary classes based on bond cleavage and exchange mechanisms:

### Class 1: Combination Reactions ($A + B \\rightarrow AB$)
Two or more reactants combine to yield a single integrated product.
- **Activity 1.1 (Burning of Magnesium Ribbon):** Clean magnesium ribbon with sandpaper to strip away the unreactive basic magnesium carbonate / oxide protective layer. Ignites with a **dazzling white flame**, leaving **white ash of magnesium oxide ($MgO$)**:
$$2Mg(s) + O_2(g) \\rightarrow 2MgO(s) + \\text{Heat} + \\text{Light}$$
- **Activity 1.4 (Quicklime & Water):** Calcium oxide ($CaO$, quicklime) reacts vigorously with water with a hissing sound, releasing intense heat (exothermic) to form slaked lime ($Ca(OH)_2$):
$$CaO(s) + H_2O(l) \\rightarrow Ca(OH)_2(aq) + \\text{Heat}$$
- *Whitewashing Wall Reaction:* Slaked lime applied to walls reacts slowly with atmospheric carbon dioxide ($CO_2$) over 2–3 days to form a hard, shiny layer of calcium carbonate ($CaCO_3$):
$$Ca(OH)_2(aq) + CO_2(g) \\rightarrow CaCO_3(s) + H_2O(l)$$

---

### Class 2: Decomposition Reactions ($AB \\rightarrow A + B + C$)
A single reactant breaks down under energy input into two or more simpler products. These are intrinsically **endothermic**.
1. **Thermal Decomposition (Heat Energy $\\Delta$):**
   - *Activity 1.5 (Ferrous Sulphate Crystals):* Light green crystals ($FeSO_4 \\cdot 7H_2O$) lose water of crystallisation on gentle heating to turn white anhydrous $FeSO_4$. On strong heating, it decomposes into **reddish-brown ferric oxide ($Fe_2O_3$)** and releases choking, pungent gases of **sulphur dioxide ($SO_2$) and sulphur trioxide ($SO_3$)** (characteristic burning sulphur odor):
$$2FeSO_4(s) \\xrightarrow{\\Delta} Fe_2O_3(s) + SO_2(g) + SO_3(g)$$
   - *Activity 1.6 (Lead Nitrate Thermal Decomposition):* White crystalline lead nitrate decomposes with crackling sound to form **yellow solid lead(II) oxide ($PbO$)**, dense **reddish-brown fumes of nitrogen dioxide ($NO_2$)**, and colorless oxygen gas ($O_2$):
$$2Pb(NO_3)_2(s) \\xrightarrow{\\Delta} 2PbO(s) + 4NO_2(g) \\uparrow + O_2(g) \\uparrow$$
   - *Limestone to Quicklime:* Industrial decomposition of calcium carbonate:
$$CaCO_3(s) \\xrightarrow{\\Delta} CaO(s) + CO_2(g)$$
2. **Electrolytic Decomposition (Electrical Energy):**
   - *Activity 1.7 (Electrolysis of Acidified Water):* Water is acidified with drops of dilute $H_2SO_4$ to enhance electrical conductivity. Direct current (DC, 6V) is passed through carbon electrodes.
     - **Cathode (Negative Electrode):** Hydrogen gas ($H_2$) collects. Burns with a sharp 'pop' sound.
     - **Anode (Positive Electrode):** Oxygen gas ($O_2$) collects. Rekindles a glowing splint.
     - **Volume Ratio:** $V_{H_2} : V_{O_2} = 2 : 1$, because water molecule formula $H_2O$ contains two hydrogen atoms per oxygen atom:
$$2H_2O(l) \\xrightarrow{\\text{Electric Current}} 2H_2(g) + O_2(g)$$
3. **Photolytic Decomposition (Light Energy $h\\nu$):**
   - *Activity 1.8 (Silver Halides in Sunlight):* White silver chloride ($AgCl$) turns **grey** when exposed to sunlight due to photodecomposition into elemental silver:
$$2AgCl(s) \\xrightarrow{\\text{Sunlight}} 2Ag(s) + Cl_2(g)$$
   - Similarly, pale yellow silver bromide ($AgBr$) decomposes to grey silver and bromine gas:
$$2AgBr(s) \\xrightarrow{\\text{Sunlight}} 2Ag(s) + Br_2(g)$$
   - *Crucial Application:* Both reactions form the chemical basis of classical **black-and-white photography**.

---

### Class 3: Displacement Reactions ($A + BC \\rightarrow AC + B$)
A more reactive element displaces a less reactive element from its aqueous salt solution. Governed strictly by the **Reactivity Series**:
$$K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au$$
- **Activity 1.9 (Iron Nails in Copper Sulphate):** Shiny grey iron nails immersed in deep blue copper sulphate ($CuSO_4$) solution. Iron displaces copper:
$$Fe(s) + CuSO_4(aq) [\\text{Blue}] \\rightarrow FeSO_4(aq) [\\text{Pale Green}] + Cu(s) [\\text{Reddish-Brown Coating}]$$
- Zinc displacing copper (faster reaction):
$$Zn(s) + CuSO_4(aq) [\\text{Blue}] \\rightarrow ZnSO_4(aq) [\\text{Colourless}] + Cu(s)$$
- Lead displacing copper from copper chloride:
$$Pb(s) + CuCl_2(aq) [\\text{Green}] \\rightarrow PbCl_2(aq) [\\text{Colourless}] + Cu(s)$$

---

### Class 4: Double Displacement & Precipitation Reactions ($AB + CD \\rightarrow AD + CB$)
An exchange of ions between two aqueous compounds occurs, frequently resulting in an **insoluble solid precipitate (\\downarrow)**.
- **Activity 1.2 (Lead Nitrate + Potassium Iodide):**
$$Pb(NO_3)_2(aq) + 2KI(aq) \\rightarrow PbI_2(s) \\downarrow [\\text{Bright Yellow Precipitate}] + 2KNO_3(aq)$$
- **Activity 1.10 (Sodium Sulphate + Barium Chloride):**
$$Na_2SO_4(aq) + BaCl_2(aq) \\rightarrow BaSO_4(s) \\downarrow [\\text{White Precipitate}] + 2NaCl(aq)$$
The white precipitate is formed by the ionic combination: $Ba^{2+}(aq) + SO_4^{2-}(aq) \\rightarrow BaSO_4(s) \\downarrow$.`,
      formulasOrKeyPoints: [
        {
          title: "Color Shifts in Key Decomposition Reactions",
          content: "$$\\begin{aligned} FeSO_4 \\cdot 7H_2O \\text{ [Light Green]} &\\xrightarrow{\\Delta} FeSO_4 \\text{ [White]} \\xrightarrow{\\Delta} Fe_2O_3 \\text{ [Reddish-Brown]} + SO_2(g) + SO_3(g) \\\\ 2Pb(NO_3)_2 \\text{ [White]} &\\xrightarrow{\\Delta} 2PbO \\text{ [Yellow]} + 4NO_2 \\text{ [Brown Fumes]} + O_2(g) \\\\ 2AgCl \\text{ [White]} &\\xrightarrow{h\\nu} 2Ag \\text{ [Grey]} + Cl_2(g) \\end{aligned}$$",
          note: "Examiners test the gases: $SO_2/SO_3$ smell like burning sulphur; $NO_2$ is distinctly reddish-brown."
        },
        {
          title: "Electrolysis Volume Ratio Formula",
          content: "$$\\frac{V(H_2 \\text{ at cathode})}{V(O_2 \\text{ at anode})} = \\frac{2}{1}$$",
          note: "Hydrogen collects at the negative cathode because $H^+$ cations migrate to the negatively charged electrode."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify Reaction Archetype",
          action: "Analyze whether reactants are 2 elements forming 1 compound (Combination), 1 compound breaking down (Decomposition), element + salt solution (Displacement), or 2 ionic salts swapping partners (Double Displacement).",
          proTip: "If ions swap and a solid precipitates, it is simultaneously Double Displacement and Precipitation."
        },
        {
          stepNo: 2,
          title: "Verify Reactivity Series for Single Displacement",
          action: "Check if the free element is positioned ABOVE the bonded cation in the reactivity series. If it is below (e.g. $Cu + FeSO_4$), write 'No Reaction'.",
          proTip: "Copper cannot displace iron, zinc, or hydrogen from dilute acids."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing cathode and anode gases in electrolysis of water.",
          correction: "Remember: **C**athode attracts **C**ation ($H^+$) $\\rightarrow H_2$ gas (volume 2). **A**node attracts **A**nion ($O^{2-}$) $\\rightarrow O_2$ gas (volume 1)."
        },
        {
          trap: "Claiming copper reacts with dilute HCl to produce hydrogen gas: $Cu + 2HCl \\rightarrow CuCl_2 + H_2$.",
          correction: "Copper lies below hydrogen in the reactivity series; it cannot displace hydrogen from dilute acids. No reaction takes place."
        }
      ]
    },
    {
      id: "exothermic_endothermic",
      label: "3. Energetics: Exothermic vs Endothermic Reactions",
      heading: "Energy Enthalpy, Thermochemistry & Biological Energetics",
      subheading: "Heat Released vs Heat Absorbed + Respiration & Photosynthesis Classifications",
      explanation: `Chemical reactions involve breaking old bonds (which absorbs energy) and forming new bonds (which releases energy). The net energy exchange categorizes the reaction:

### 1. Exothermic Reactions ($\\Delta H < 0$, Heat Released)
Reactions in which energy is liberated into the surroundings, primarily as thermal energy, causing the temperature of the reaction mixture to rise.
- **Respiration as an Exothermic Process:** The food we ingest is broken down into glucose ($C_6H_{12}O_6$). During cellular respiration, glucose combines with oxygen in body cells to provide life-sustaining energy:
$$C_6H_{12}O_6(aq) + 6O_2(aq) \\rightarrow 6CO_2(aq) + 6H_2O(l) + \\text{Energy (36–38 ATP)}$$
- **Burning of Natural Gas (Methane):**
$$CH_4(g) + 2O_2(g) \\rightarrow CO_2(g) + 2H_2O(g) + \\text{Heat}$$
- **Decomposition of Vegetable Matter into Compost:** Microorganisms break down organic bonds, continuously releasing thermal energy (exothermic decomposition).
- **Reaction of Quicklime with Water:** Immense heat generation that can bring water to boiling:
$$CaO(s) + H_2O(l) \\rightarrow Ca(OH)_2(aq) + \\text{Heat}$$

### 2. Endothermic Reactions ($\\Delta H > 0$, Heat Absorbed)
Reactions in which energy is absorbed from the surroundings in the form of heat, light, or electricity, causing the reaction container to cool down.
- **Photosynthesis:** Green plants absorb radiant solar energy to synthesize glucose from carbon dioxide and water:
$$6CO_2(aq) + 12H_2O(l) \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} C_6H_{12}O_6(aq) + 6O_2(aq) + 6H_2O(l)$$
- **All Thermal Decomposition Reactions:** Breakdown of calcium carbonate, ferrous sulphate, and lead nitrate require sustained heat input.
- **Reaction of Barium Hydroxide with Ammonium Chloride:**
$$Ba(OH)_2 \\cdot 8H_2O(s) + 2NH_4Cl(s) \\rightarrow BaCl_2(aq) + 2NH_3(aq) + 10H_2O(l)$$
This reaction absorbs so much thermal energy that moisture on the outside of the beaker freezes, sticking it to a wet wooden block!`,
      formulasOrKeyPoints: [
        {
          title: "Respiration Balanced Biochemical Equation",
          content: "$$C_6H_{12}O_6(aq) + 6O_2(g) \\rightarrow 6CO_2(aq) + 6H_2O(l) + \\text{Energy}$$",
          note: "CBSE favorite: 'Why is respiration considered an exothermic reaction?' Answer: Bond energy released during formation of $CO_2$ and $H_2O$ exceeds energy absorbed to break glucose."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify Energy Direction",
          action: "Feel the container or check equation: if 'Heat' is written on product side (or temperature rises), it is Exothermic. If 'Heat/Sunlight/Electricity' is above arrow or on reactant side, it is Endothermic.",
          proTip: "Decomposition reactions are generally endothermic; combination and combustion reactions are generally exothermic."
        }
      ],
      examinerTraps: [
        {
          trap: "Classifying decomposition of vegetable matter into compost as endothermic because it is a decomposition reaction.",
          correction: "Decomposition of organic waste into compost is mediated by exothermic microbial metabolism. It releases heat and is strictly EXOTHERMIC."
        }
      ]
    },
    {
      id: "redox_corrosion_rancidity",
      label: "4. Redox Dynamics, Corrosion & Rancidity in Daily Life",
      heading: "Oxidation-Reduction Couples, Tarnishing Mechanisms & Food Preservation",
      subheading: "Oxidizing/Reducing Agents + Rusting Conditions & Prevention + Nitrogen Flushing & Antioxidants",
      explanation: `### Part A: Oxidation, Reduction and Redox Reactions
A chemical reaction where oxidation and reduction occur simultaneously is called a **Redox (Reduction-Oxidation) reaction**.

| Parameter | Oxidation | Reduction |
| :--- | :--- | :--- |
| **Oxygen Transfer** | Gain of Oxygen ($+O$) | Loss of Oxygen ($-O$) |
| **Hydrogen Transfer** | Loss of Hydrogen ($-H$) | Gain of Hydrogen ($+H$) |
| **Electron Transfer** | Loss of Electrons ($LEO$) | Gain of Electrons ($GER$) |
| **Substance Doing It** | **Reducing Agent** (gets oxidized) | **Oxidizing Agent** (gets reduced) |

#### Classic Benchmark Redox Equations for CBSE:
1. **Reaction of Copper with Oxygen and Subsequent Hydrogen Reduction:**
   - *Stage 1:* Reddish-brown copper powder heated in a china dish turns coated with **black copper(II) oxide ($CuO$)**:
$$2Cu(s) + O_2(g) \\xrightarrow{\\Delta} 2CuO(s) [\\text{Black Surface}]$$
     - $Cu$ gains oxygen $\\rightarrow$ $Cu$ is **oxidized**.
   - *Stage 2:* Passing hydrogen gas over heated black $CuO$ restores the shiny reddish-brown copper:
$$CuO(s) + H_2(g) \\xrightarrow{\\Delta} Cu(s) + H_2O(l)$$
     - $CuO$ loses oxygen $\\rightarrow$ **Reduced to $Cu$** ($CuO$ is the **Oxidizing Agent**).
     - $H_2$ gains oxygen $\\rightarrow$ **Oxidized to $H_2O$** ($H_2$ is the **Reducing Agent**).

2. **Reaction of Zinc Oxide with Carbon:**
$$ZnO(s) + C(s) \\rightarrow Zn(s) + CO(g)$$
   - $ZnO$ is reduced to $Zn$ (Oxidizing Agent: $ZnO$).
   - $C$ is oxidized to $CO$ (Reducing Agent: $C$).

3. **Reaction of Manganese Dioxide with Hydrochloric Acid:**
$$MnO_2(s) + 4HCl(aq) \\rightarrow MnCl_2(aq) + 2H_2O(l) + Cl_2(g)$$
   - $MnO_2$ loses oxygen to form $MnCl_2$ $\\rightarrow$ $MnO_2$ is **reduced** (Oxidizing Agent).
   - $HCl$ loses hydrogen to form $Cl_2$ gas $\\rightarrow$ $HCl$ is **oxidized** (Reducing Agent).

---

### Part B: Corrosion of Metals in Everyday Life
**Corrosion** is the slow, continuous deterioration of a refined metal into its oxide, hydroxide, carbonate, or sulphide due to chemical attack by atmospheric gases (oxygen, moisture, carbon dioxide, hydrogen sulphide, acids).

1. **Rusting of Iron:**
   - Iron when exposed to moist air for a long time acquires a reddish-brown, flaky, crumbly coating called **rust**:
$$4Fe(s) + 3O_2(g) + 2xH_2O(l) \\rightarrow 2Fe_2O_3 \\cdot xH_2O(s) [\\text{Hydrated Iron(III) Oxide}]$$
   - Unlike aluminium oxide which forms a protective passive layer, iron rust continuously flakes off, exposing fresh underlying iron to further corrosion until the entire structural metal collapses.
2. **Tarnishing of Silver:**
   - Silver articles lose their lustrous white shine and develop a **black coating** when exposed to air.
   - Reason: Silver reacts with trace atmospheric **hydrogen sulphide ($H_2S$)** gas to form **black silver sulphide ($Ag_2S$)**:
$$2Ag(s) + H_2S(g) \\rightarrow Ag_2S(s) [\\text{Black}] + H_2(g)$$
3. **Corrosion of Copper:**
   - Copper objects react slowly with atmospheric moist carbon dioxide ($CO_2 + H_2O + O_2$) over months, losing their shiny reddish-brown finish to acquire a characteristic **green coating**:
$$2Cu(s) + H_2O(l) + CO_2(g) + O_2(g) \\rightarrow CuCO_3 \\cdot Cu(OH)_2(s) [\\text{Basic Copper Carbonate - Green}]$$

#### Methods to Prevent Corrosion:
- **Barrier Protection:** Painting, oiling, greasing prevents direct contact between iron surface and air/moisture.
- **Galvanisation:** Coating iron and steel articles with a thin protective layer of **molten Zinc ($Zn$)**. Even if the zinc coating is scratched, zinc corrodes preferentially because zinc is more electropositive/reactive than iron (**Sacrificial Anodic Protection**).
- **Alloying:** Modifying atomic crystal structure by mixing iron with carbon (0.05% for strength) or chromium and nickel to form **Stainless Steel**, which does not rust.
- **Electroplating / Tinning / Anodising:** Coating with corrosion-resistant metals like chromium, tin, or forming thick oxide layers on aluminium.

---

### Part C: Rancidity of Foods
**Rancidity** is the aerial oxidation of fats and oils present in food materials, resulting in the production of volatile, foul-smelling aldehydes and carboxylic acids, accompanied by an unpleasant, sour taste and loss of nutritive value.

#### Practical Methods to Prevent Rancidity:
1. **Flushing with Inert Gas:** Potato chips and fried snacks packets are flushed with unreactive **nitrogen gas ($N_2$)** during packaging to purge out atmospheric oxygen, thereby preventing oxidation of oils.
2. **Addition of Antioxidants:** Food additives like **BHA (Butylated Hydroxyanisole)** and **BHT (Butylated Hydroxytoluene)** are added to commercial food preparations. They preferentially react with oxygen and free radicals before fats can oxidize.
3. **Vacuum Packaging & Airtight Containers:** Storing oily foods in airtight containers significantly slows down oxygen diffusion.
4. **Refrigeration:** Low temperatures decrease the thermal kinetic energy and rate constant of lipid oxidation reactions.
5. **Storage Away from Direct Light:** Ultraviolet and direct visible light accelerate photo-oxidation of fats; keeping oils in opaque containers retards spoilage.`,
      formulasOrKeyPoints: [
        {
          title: "Rust Chemical Formula",
          content: "$$Fe_2O_3 \\cdot xH_2O \\quad [\\text{Hydrated Ferric Oxide, Reddish-Brown}]$$",
          note: "$x$ represents variable number of water of hydration molecules depending on ambient humidity."
        },
        {
          title: "Black Silver Tarnish & Green Copper Patina Formulas",
          content: "$$\\begin{aligned} \\text{Silver Tarnish:} &\\quad Ag_2S \\quad [\\text{Silver Sulphide, Black}] \\\\ \\text{Copper Patina:} &\\quad CuCO_3 \\cdot Cu(OH)_2 \\quad [\\text{Basic Copper Carbonate, Green}] \\end{aligned}$$",
          note: "Silver tarnishes due to $H_2S$ gas in air; copper tarnishes due to moist $CO_2$ and $O_2$."
        },
        {
          title: "Diagnostic Redox Checklist",
          content: "$$\\begin{aligned} \\text{Substance Oxidized} &\\equiv \\text{Reducing Agent} \\\\ \\text{Substance Reduced} &\\equiv \\text{Oxidizing Agent} \\end{aligned}$$",
          note: "Oxidizing and reducing agents must ALWAYS be selected from the REACTANTS side, never products!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Determine What is Oxidized and Reduced",
          action: "Trace each element from reactants to products. Identify which reactant gained oxygen / lost hydrogen (oxidized) and which reactant lost oxygen / gained hydrogen (reduced).",
          proTip: "Never name a product as an oxidizing or reducing agent. The agent is always an intact reactant formula."
        },
        {
          stepNo: 2,
          title: "Answer Why Chips Packets are Flushed with Nitrogen",
          action: "State clearly: Nitrogen is an unreactive inert gas that displaces oxygen from the packet, preventing aerial oxidation of unsaturated fats and oils (rancidity), keeping them fresh and crisp.",
          proTip: "Mention the keywords: 'inert gas', 'aerial oxidation', 'unpleasant smell and taste'."
        }
      ],
      examinerTraps: [
        {
          trap: "In the reaction $CuO + H_2 \\rightarrow Cu + H_2O$, identifying $Cu$ as the substance reduced.",
          correction: "Incorrect! $Cu$ is the product. The substance reduced is $CuO$ (Copper(II) oxide), which lost oxygen."
        },
        {
          trap: "Stating that galvanised iron rusts immediately if the zinc coating is scratched.",
          correction: "Zinc is more reactive than iron. Even when scratched, zinc continues to oxidize sacrificially before iron, protecting the underlying steel."
        }
      ]
    }
  ]
};
