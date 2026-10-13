import type { ScienceChapterConcept } from "./types";

export const SCI_CH2_CONCEPT: ScienceChapterConcept = {
  chapterNo: 2,
  title: "Acids, Bases and Salts",
  discipline: "Chemistry",
  weightage: "6–8 Marks (Board Mandatory)",
  oneLiner: "Acids yield hydronium ions in water, bases yield hydroxide ions; neutralization forms salts; the pH scale quantifies ion potency; commercial salts power domestic and industrial chemistry.",
  analogyTitle: "The Molecular Balance of Power",
  analogyContent: `Imagine an ecosystem governed by electrical polarity. **Acids** are proactive chemical donors, eager to release hydronium ions ($H_3O^+$), while **bases** are eager chemical acceptors, brandishing hydroxide ions ($OH^-$). 

When brought together, they neutralize each other's aggressive properties in a swift ionic handshake, forming water ($H_2O$) and a crystalline **salt**. The **pH scale** acts as the universal digital thermometer of this acidity-alkalinity continuum, running from fiery acid (pH 0) to calm neutral (pH 7) to caustic alkali (pH 14). In industry, simple brine ($NaCl$) is electrochemically split by the Chlor-Alkali process to yield the building blocks of modern sanitation, medicine, and manufacturing.`,
  sections: [
    {
      id: "acids_properties",
      label: "1. Acids: Properties, Ionization & Core Reactions",
      heading: "Arrhenius Ionization, Chemical Properties & Crucial Activities",
      subheading: "Hydronium Ion Formation + Activity 2.8 (Conduction) + Activity 2.9 (Dry HCl) + Dilution Safety Rule",
      explanation: `### Part A: Definition & The Hydronium Ion
According to Arrhenius theory, an **acid** is a chemical compound that dissociates in aqueous solution to produce **hydrogen ions ($H^+$)**. Free protons cannot exist independently in water due to their intense electrostatic charge density; they instantaneously combine with polar water molecules to form stable **hydronium ions ($H_3O^+$)**:
$$HCl(g) + H_2O(l) \\rightarrow H_3O^+(aq) + Cl^-(aq)$$

#### Classification of Indicators:
1. **Natural Indicators:**
   - **Litmus:** Purple dye extracted from lichens. Turns **red in acidic medium**, **blue in basic medium**.
   - **Turmeric:** Yellow in acidic/neutral medium; turns **reddish-brown in basic medium** (e.g. soap on curry stain), returning yellow upon rinsing with excess water or acid.
   - **Red Cabbage Extract:** Red in acid, green/yellow in base.
2. **Synthetic Indicators:**
   - **Phenolphthalein:** Colorless in acidic medium; turns bright **magenta pink in basic medium**.
   - **Methyl Orange:** Turns **red in acidic medium**, **yellow in basic medium** (neutral: orange).
3. **Olfactory Indicators:** Substances whose characteristic odour changes in acidic or basic media:
   - **Vanilla Extract, Onion, Clove Oil:** Their distinct pleasant aroma is completely destroyed / vanishes in basic solutions ($NaOH$), but remains unaffected in acidic solutions ($HCl$). Used for testing by visually impaired students.

---

### Part B: Hallmark Chemical Reactions of Acids
1. **Reaction with Active Metals ($H_2$ Pop Sound Test):**
   - Acids react with metals situated above hydrogen in the reactivity series:
$$\\text{Metal} + \\text{Dilute Acid} \\rightarrow \\text{Salt} + H_2(g) \\uparrow$$
$$Zn(s) + H_2SO_4(aq) \\rightarrow ZnSO_4(aq) + H_2(g) \\uparrow$$
   - *Diagnostic Test:* Pass the evolved gas through soap solution; bubbles rise. Bring a burning candle near the bubble: it bursts with a sharp **'pop' sound**.
   - *Storage Precaution:* Sour foodstuffs (curd, pickles, lemon juice, vinegar) contain organic acids (lactic, acetic, citric). They MUST NEVER be stored in brass or copper vessels because acids react with copper/zinc to form toxic, poisonous metallic salts.

2. **Reaction with Metal Carbonates & Hydrogen Carbonates ($CO_2$ Lime Water Test):**
$$\\text{Metal Carbonate / Bicarbonate} + \\text{Acid} \\rightarrow \\text{Salt} + H_2O(l) + CO_2(g) \\uparrow$$
$$Na_2CO_3(s) + 2HCl(aq) \\rightarrow 2NaCl(aq) + H_2O(l) + CO_2(g) \\uparrow$$
$$NaHCO_3(s) + HCl(aq) \\rightarrow NaCl(aq) + H_2O(l) + CO_2(g) \\uparrow$$
   - *Step 1 (Lime Water Milky):* Passing evolved $CO_2$ gas through freshly prepared calcium hydroxide (lime water) turns it milky due to insoluble white calcium carbonate precipitate:
$$Ca(OH)_2(aq) [\\text{Lime Water}] + CO_2(g) \\rightarrow CaCO_3(s) \\downarrow [\\text{White Precipitate - Milky}] + H_2O(l)$$
   - *Step 2 (Excess $CO_2$ Clears Milkiness):* On passing excess $CO_2$ through the milky solution, the milkiness vanishes completely because insoluble $CaCO_3$ converts into soluble calcium hydrogencarbonate:
$$CaCO_3(s) + H_2O(l) + CO_2(g) [\\text{Excess}] \\rightarrow Ca(HCO_3)_2(aq) [\\text{Soluble / Clear}]$$

3. **Reaction with Metallic Oxides (Basic Nature):**
$$\\text{Metal Oxide (Basic)} + \\text{Acid} \\rightarrow \\text{Salt} + \\text{Water}$$
$$CuO(s) [\\text{Black}] + 2HCl(aq) \\rightarrow CuCl_2(aq) [\\text{Blue-Green Solution}] + H_2O(l)$$
Since metallic oxides neutralize acids to form salt and water, **metallic oxides are basic oxides**.

---

### Part C: Key NCERT Diagnostic Activities
- **Activity 2.8 (Electrical Conductivity):** Aqueous solutions of acids ($HCl, H_2SO_4$) contain mobile $H_3O^+$ and anions ($Cl^-, SO_4^{2-}$), allowing electric current to flow (bulb glows brightly). Conversely, aqueous solutions of **glucose ($C_6H_{12}O_6$) and ethyl alcohol ($C_2H_5OH$)**, despite possessing hydrogen atoms, do not dissociate into mobile ions in water; hence the bulb does NOT glow. Conduction requires mobile ions!
- **Activity 2.9 (Dry HCl vs Moist Litmus):** Dry $HCl$ gas evolved from $NaCl + \\text{conc. } H_2SO_4$ does NOT change the color of dry blue litmus paper. It changes moist blue litmus paper to red! Hydrogen ions can dissociate ONLY in the presence of water molecules.
- **The Golden Dilution Safety Rule:** Diluting a concentrated acid is an **extremely exothermic reaction**. The concentrated acid MUST ALWAYS be added **slowly to water with constant stirring**, NEVER water to concentrated acid! If water is poured into concentrated acid, the sudden surge of heat causes violent localized boiling, splashing caustic acid onto face/clothes and potentially cracking the glass beaker.`,
      formulasOrKeyPoints: [
        {
          title: "Lime Water Milky & Excess CO2 Double Equation",
          content: "$$\\begin{aligned} Ca(OH)_2(aq) + CO_2(g) &\\rightarrow CaCO_3(s) \\downarrow [\\text{Milky}] + H_2O(l) \\\\ CaCO_3(s) + H_2O(l) + CO_2(g) &\\rightarrow Ca(HCO_3)_2(aq) [\\text{Soluble / Colourless}] \\end{aligned}$$",
          note: "Guaranteed 2-mark question: Why does milkiness disappear upon passing excess $CO_2$?"
        },
        {
          title: "Acid Dilution Golden Rule",
          content: "$$\\text{Acid} \\xrightarrow{\\text{Slowly + Constant Stirring}} \\text{Water} \quad (\\checkmark) \qquad \\text{Water} \\rightarrow \\text{Acid} \quad (\\times \\text{ DANGEROUS})$$",
          note: "Large specific heat capacity of water absorbs liberated heat gradually, preventing acid splashing."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Verify Acid-Base Gas Tests",
          action: "Hydrogen ($H_2$) is tested with a burning splinter (bursts with 'pop' sound). Carbon dioxide ($CO_2$) is tested with lime water (turns milky, clears in excess).",
          proTip: "$CO_2$ extinguishes a burning splint, but does NOT make a pop sound."
        }
      ],
      examinerTraps: [
        {
          trap: "Stating glucose solution conducts electricity because its chemical formula contains hydrogen atoms ($C_6H_{12}O_6$).",
          correction: "Glucose has covalent bonds that do not ionize in water. Without free mobile cations and anions, electric current cannot flow."
        },
        {
          trap: "Dry $HCl$ gas turns dry blue litmus red.",
          correction: "Dry $HCl$ gas cannot dissociate into $H^+$ ions in the total absence of moisture. No color change occurs until water is present."
        }
      ]
    },
    {
      id: "bases_properties",
      label: "2. Bases & Alkalis: Chemistry, Amphoterism & Reactions",
      heading: "Hydroxide Ion Generation, Alkali Distinction & Amphoteric Metals",
      subheading: "Base Definition + Alkali vs Base + Reaction with Zn/Al + Non-metallic Oxides",
      explanation: `### Part A: Definition & Alkali Distinction
A **base** is a substance that produces **hydroxide ions ($OH^-$)** when dissolved in water:
$$NaOH(s) \\xrightarrow{H_2O} Na^+(aq) + OH^-(aq)$$
$$Ca(OH)_2(s) \\xrightarrow{H_2O} Ca^{2+}(aq) + 2OH^-(aq)$$

**Alkalis (Water-Soluble Bases):**
Bases that dissolve readily in water are called **alkalis**. They are soapy to the touch, bitter in taste, and corrosive in concentrated forms.
$$\\text{"All alkalis are bases, but not all bases are alkalis."}$$
- *Alkalis:* $NaOH, KOH, Ca(OH)_2, Ba(OH)_2$.
- *Non-Alkali Bases (Insoluble):* $Cu(OH)_2, Fe(OH)_3, Al(OH)_3$.

---

### Part B: Reactions of Bases
1. **Reaction of Strong Bases with Amphoteric Metals:**
Strong alkalis react with amphoteric metals like **Zinc ($Zn$)** and **Aluminium ($Al$)** to liberate hydrogen gas ($H_2$):
$$Zn(s) + 2NaOH(aq) \\xrightarrow{\\Delta} Na_2ZnO_2(aq) [\\text{Sodium Zincate}] + H_2(g) \\uparrow$$
$$2Al(s) + 2NaOH(aq) + 2H_2O(l) \\rightarrow 2NaAlO_2(aq) [\\text{Sodium Aluminate}] + 3H_2(g) \\uparrow$$
*Note:* Such reactions do NOT take place with all metals; only amphoteric metals possessing dual acidic/basic reactivity react with alkalis.

2. **Reaction with Non-Metallic Oxides (Acidic Nature):**
$$\\text{Non-Metallic Oxide (Acidic)} + \\text{Base} \\rightarrow \\text{Salt} + \\text{Water}$$
$$CO_2(g) + Ca(OH)_2(aq) \\rightarrow CaCO_3(s) + H_2O(l)$$
$$SO_2(g) + 2NaOH(aq) \\rightarrow Na_2SO_3(aq) + H_2O(l)$$
Since non-metallic oxides react with bases to form salt and water, **non-metallic oxides are acidic oxides**.

3. **Neutralization Reaction:**
$$\\text{Acid} + \\text{Base} \\rightarrow \\text{Salt} + \\text{Water}$$
$$HCl(aq) + NaOH(aq) \\rightarrow NaCl(aq) + H_2O(l)$$
Net ionic equation representing all Arrhenius neutralizations:
$$H^+(aq) + OH^-(aq) \\rightarrow H_2O(l)$$`,
      formulasOrKeyPoints: [
        {
          title: "Sodium Zincate Reaction Formula",
          content: "$$Zn(s) + 2NaOH(aq) \\xrightarrow{\\Delta} Na_2ZnO_2(aq) + H_2(g) \\uparrow$$",
          note: "CBSE board question: 'Write the formula of sodium zincate.' Answer: $Na_2ZnO_2$, where zincate radical is $ZnO_2^{2-}$."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Classify Oxide Nature",
          action: "Check the central element: Metallic oxides ($Na_2O, CaO, MgO, CuO$) are Basic. Non-metallic oxides ($CO_2, SO_2, NO_2$) are Acidic. Amphoteric oxides ($Al_2O_3, ZnO$) react with both acids and bases.",
          proTip: "Neutral oxides include $CO, NO, N_2O, H_2O$."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing the formula of sodium zincate as $NaZnO_2$.",
          correction: "Zincate ion carries a $2-$ charge: $ZnO_2^{2-}$. Hence sodium zincate is $Na_2ZnO_2$."
        }
      ]
    },
    {
      id: "ph_scale",
      label: "3. The pH Scale & Real-World Biological Importance",
      heading: "Logarithmic Hydronium Concentration & Every Day Applications",
      subheading: "0 to 14 Scale + Acid Rain + Digestive Acidity + Tooth Enamel Decay + Soil pH",
      explanation: `### Part A: The pH Scale Architecture (Sørensen, 1909)
The term **pH** stands for *potenz* (German for power) of hydrogen ions. It is a logarithmic measure of the molar concentration of hydronium ions in solution:
$$pH = -\\log_{10}[H^+] = -\\log_{10}[H_3O^+]$$
- **Neutral Solution (Pure Water at 25°C):** $[H^+] = [OH^-] = 10^{-7}\\text{ M} \\implies pH = 7$.
- **Acidic Solution:** $[H^+] > 10^{-7}\\text{ M} \\implies pH < 7$ (Lower pH denotes stronger acid).
- **Basic Solution:** $[H^+] < 10^{-7}\\text{ M} \\implies pH > 7$ (Higher pH denotes stronger alkali).
*Universal Indicator:* A blended mixture of multiple dyes that exhibits a spectrum of distinct colors corresponding to exact pH values across 0 to 14 (Red for strongly acidic $\\rightarrow$ Green for neutral pH 7 $\\rightarrow$ Dark Purple/Violet for strongly basic pH 14).

---

### Part B: Vital Everyday & Biological Applications of pH (CBSE High Yield)
1. **pH Sensitivity of Living Organisms:**
   - The human body functions within a narrow homeostatic pH window of **7.0 to 7.8**.
   - **Acid Rain:** When rain water has a pH **below 5.6** (due to dissolved $SO_2$ and $NO_2$ forming $H_2SO_4$ and $HNO_3$), it is called acid rain. When it flows into rivers, river water pH drops, severely endangering aquatic life.

2. **pH in the Human Digestive System:**
   - The human stomach secretes gastric juice containing **dilute hydrochloric acid ($HCl$)**, maintaining an acidic pH of approximately **1.2 to 2.0**. This activates the enzyme pepsin and destroys ingested pathogens.
   - During indigestion or overeating, excess acid causes pain and irritation (hyperacidity).
   - **Remedy:** Antacids — mild basic substances that neutralize excess stomach acid:
     - **Milk of Magnesia ($Mg(OH)_2$):** Magnesium hydroxide suspension.
     - **Baking Soda ($NaHCO_3$):** Sodium hydrogencarbonate.

3. **pH Change as the Cause of Tooth Decay:**
   - Tooth enamel is composed of **calcium hydroxyapatite** (a crystalline form of calcium phosphate, $Ca_{10}(PO_4)_6(OH)_2$), the hardest substance in the human body. It is insoluble in water.
   - However, oral bacteria ferment residual food particles and sugars, producing organic acids.
   - **Critical Threshold:** Tooth enamel starts corroding when mouth pH falls **below 5.5**.
   - **Prevention:** Brushing teeth with toothpastes, which are **mildly alkaline**, neutralizes microbial acids and prevents dental decay.

4. **Soil pH & Agricultural Fertility:**
   - Plants require an optimal soil pH near neutral (6.5 to 7.5) for healthy nutrient absorption.
   - If soil is overly acidic (due to acid rain or excessive chemical fertilizers): farmers treat it with basic compounds:
     - **Quicklime:** Calcium oxide ($CaO$)
     - **Slaked lime:** Calcium hydroxide ($Ca(OH)_2$)
     - **Chalk:** Calcium carbonate ($CaCO_3$)
   - If soil is overly alkaline: farmers add decaying organic manure (which releases natural acidic compounds).

5. **Self-Defence in Animals and Plants (Chemical Warfare):**
   - **Honeybee / Wasp Sting:** A honeybee sting injects an acidic venom containing **formic acid / methanoic acid ($HCOOH$)**, causing burning pain and swelling.
     - *Treatment:* Immediate application of a mild base such as **baking soda paste ($NaHCO_3$)**.
     - *(Note: Wasp stings are alkaline and treated with mild acid like vinegar).*
   - **Nettle Plant Leaves:** Wild nettle leaves have stinging hairs that inject **methanoic acid** upon contact. Nature provides an immediate remedy alongside: leaves of the **dock plant**, which grows right beside nettle plants in the wild and contains mildly alkaline juices.`,
      formulasOrKeyPoints: [
        {
          title: "CBSE Benchmark pH Values",
          content: "$$\begin{aligned} \text{Gastric Juice:} &\quad 1.2 \\ \text{Lemon Juice:} &\quad 2.2 \\ \text{Pure Water / Blood:} &\quad 7.4 \\ \text{Milk of Magnesia:} &\quad 10.0 \\ \text{Sodium Hydroxide Solution (1M):} &\quad 14.0 \\ \text{Acid Rain Threshold:} &\quad pH < 5.6 \\ \text{Tooth Decay Threshold:} &\quad pH < 5.5 \end{aligned}$$",
          note: "Questions frequently ask to rank liquids in order of increasing hydrogen ion concentration."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Relate pH to Hydrogen Ion Concentration",
          action: "Remember the inverse logarithmic rule: lower pH means higher $[H^+]$ concentration. Solution of pH 2 has 10,000 times more $H^+$ ions than solution of pH 6.",
          proTip: "If solution A has pH 4 and solution B has pH 8, solution A is acidic, solution B is basic; A has higher $[H^+]$."
        }
      ],
      examinerTraps: [
        {
          trap: "Assuming a solution with pH 0 contains zero hydrogen ions.",
          correction: "pH 0 corresponds to $[H^+] = 10^0 = 1\\text{ M}$. It is an exceptionally strong, concentrated acid, not zero ions!"
        },
        {
          trap: "Treating a bee sting with vinegar.",
          correction: "Bee sting venom is acidic (methanoic acid). Applying acidic vinegar worsens the pain! Use mild alkaline baking soda."
        }
      ]
    },
    {
      id: "salts",
      label: "4. Chemistry of Commercial Salts & Chlor-Alkali Process",
      heading: "Parent Acids/Bases, Chlor-Alkali & The Big 5 Commercial Salts",
      subheading: "Chlor-Alkali (NaOH) + Bleaching Powder + Baking Soda + Washing Soda + Plaster of Paris",
      explanation: `### Part A: Salt Hydrolysis & pH of Salt Solutions
Salts are ionic compounds formed by neutralization. Their aqueous pH depends on the strength of their parent acid and base:
1. **Strong Acid + Strong Base $\\rightarrow$ Neutral Salt (pH = 7):** $NaCl, KNO_3, Na_2SO_4$.
2. **Strong Acid + Weak Base $\\rightarrow$ Acidic Salt (pH < 7):** $NH_4Cl, CuSO_4, AlCl_3$.
3. **Weak Acid + Strong Base $\\rightarrow$ Basic Salt (pH > 7):** $CH_3COONa, Na_2CO_3, NaHCO_3$.

---

### Part B: The Chlor-Alkali Process (Industrial Powerhouse)
When electricity is passed through an aqueous solution of sodium chloride (called **brine**), it decomposes to produce sodium hydroxide, chlorine gas, and hydrogen gas:
$$2NaCl(aq) + 2H_2O(l) \\xrightarrow{\\text{Electrolysis}} 2NaOH(aq) + Cl_2(g) \\uparrow [\\text{At Anode}] + H_2(g) \\uparrow [\\text{At Cathode}]$$

#### Products, Electrodes & Their High-Yield Uses:
1. **At Anode (Positive Electrode): Chlorine Gas ($Cl_2$):**
   - Water treatment, disinfectant for swimming pools, manufacture of PVC (polyvinyl chloride), CFCs, pesticides, and bleaching powder.
2. **At Cathode (Negative Electrode): Hydrogen Gas ($H_2$):**
   - Rocket fuel, hydrogenation of vegetable oils to make margarine, manufacture of ammonia for nitrogenous fertilizers ($N_2 + 3H_2 \\rightarrow 2NH_3$).
3. **Near Cathode (In Solution): Sodium Hydroxide ($NaOH$):**
   - Degreasing metals, manufacture of soaps and detergents, paper manufacturing, artificial textile fibers (rayon).
4. **Combined Products:**
   - $H_2 + Cl_2 \\rightarrow HCl$ (cleaning steel coils, medicines, cosmetics).
   - $NaOH + Cl_2 \\rightarrow \\text{Household Bleach } (NaOCl)$ (bleaching fabrics, household disinfectant).

---

### Part C: The Big 4 Essential Commercial Salts

#### 1. Bleaching Powder (Calcium Oxychloride, $CaOCl_2$)
- **Preparation:** Action of chlorine gas on dry slaked lime:
$$Ca(OH)_2(s) + Cl_2(g) \\rightarrow CaOCl_2(s) + H_2O(l)$$
- **Uses:**
  - Bleaching cotton and linen in textile industries; bleaching wood pulp in paper factories.
  - Oxidizing agent in numerous chemical synthesis plants.
  - Disinfectant for drinking water to make it germ-free.

#### 2. Baking Soda (Sodium Hydrogencarbonate, $NaHCO_3$)
- **Preparation (Solvay Process):**
$$NaCl + H_2O + CO_2 + NH_3 \\rightarrow NH_4Cl(aq) [\\text{Ammonium Chloride}] + NaHCO_3(s) [\\text{Sodium Hydrogencarbonate}]$$
- **Properties:** Mild, non-corrosive basic salt. On heating during cooking:
$$2NaHCO_3(s) \\xrightarrow{\\Delta} Na_2CO_3(s) + H_2O(l) + CO_2(g) \\uparrow$$
- **Baking Powder vs Baking Soda:**
  - *Baking powder* is a mixture of baking soda ($NaHCO_3$) and a mild edible organic acid such as **tartaric acid**.
  - When mixed with water and heated:
$$NaHCO_3 + H^+ [\\text{from tartaric acid}] \\rightarrow CO_2 \\uparrow + H_2O + \\text{Sodium tartrate salt}$$
  - The evolved **carbon dioxide gas ($CO_2$)** gets trapped in the dough, causing bread/cake to rise and become light, soft, and spongy.
  - *Role of Tartaric Acid:* Neutralizes the bitter sodium carbonate ($Na_2CO_3$) formed upon heating, preventing cakes from tasting bitter!
- **Other Uses:** Ingredient in antacids (neutralizes excess stomach $HCl$); used in soda-acid fire extinguishers.

#### 3. Washing Soda (Sodium Carbonate Decahydrate, $Na_2CO_3 \\cdot 10H_2O$)
- **Preparation:** Recrystallization of anhydrous sodium carbonate in water:
$$Na_2CO_3(s) + 10H_2O(l) \\rightarrow Na_2CO_3 \\cdot 10H_2O(s)$$
- **Uses:**
  - Used in glass, soap, and paper manufacturing industries.
  - Used in the manufacture of essential sodium compounds such as **Borax ($Na_2B_4O_7 \\cdot 10H_2O$)**.
  - Used as a cleaning agent for domestic laundry purposes.
  - **Crucial:** Used for **removing permanent hardness of water** (precipitates dissolved $Ca^{2+}$ and $Mg^{2+}$ ions as insoluble carbonates).

#### 4. Plaster of Paris (POP, Calcium Sulphate Hemihydrate, $CaSO_4 \\cdot \\frac{1}{2}H_2O$)
- **Preparation:** Careful heating of gypsum ($CaSO_4 \\cdot 2H_2O$) at precisely **373 K (100°C)**:
$$CaSO_4 \\cdot 2H_2O(s) \\xrightarrow{373\\text{ K}} CaSO_4 \\cdot \\frac{1}{2}H_2O(s) + 1\\frac{1}{2}H_2O(g)$$
*Precaution:* Temperature must NOT exceed 373 K! If heated above 373 K, all water of crystallisation is lost, forming anhydrous calcium sulphate ($CaSO_4$) called **dead burnt plaster**, which completely loses the property of setting with water!
- **Setting Property:** When mixed with water, POP rehydrates back into a hard, rigid mass of gypsum within 10–15 minutes:
$$CaSO_4 \\cdot \\frac{1}{2}H_2O(s) + 1\\frac{1}{2}H_2O(l) \\rightarrow CaSO_4 \\cdot 2H_2O(s) [\\text{Gypsum - Hard Solid}]$$
- **Uses:** Doctors use it as plaster for supporting fractured bones in the correct alignment; making decorative toys, statues, ceiling designs, and blackboard chalk; fireproofing material.
- **Storage Precaution:** POP MUST ALWAYS be stored in **moisture-proof airtight containers**, otherwise it slowly absorbs atmospheric moisture and sets prematurely into useless hard gypsum.

---

### Part D: Water of Crystallisation
**Water of crystallisation** is the fixed number of water molecules chemically bonded to each formula unit of a salt in its crystalline lattice.
- **Copper Sulphate ($CuSO_4 \\cdot 5H_2O$ - Blue Vitriol):** Blue crystals. On heating, loses 5 water molecules to turn into white anhydrous powder:
$$CuSO_4 \\cdot 5H_2O(s) [\\text{Blue}] \\xrightarrow{\\Delta} CuSO_4(s) [\\text{White}] + 5H_2O(g)$$
Adding a few drops of water instantly restores the bright blue color!
- **Ferrous Sulphate ($FeSO_4 \\cdot 7H_2O$ - Green Vitriol):** 7 water molecules.
- **Washing Soda ($Na_2CO_3 \\cdot 10H_2O$):** 10 water molecules.
- **Gypsum ($CaSO_4 \\cdot 2H_2O$):** 2 water molecules.`,
      formulasOrKeyPoints: [
        {
          title: "The Big 5 Chemical Formulas & Systematic Names",
          content: "$$\begin{aligned} \text{Bleaching Powder:} &\quad CaOCl_2 \quad (\text{Calcium oxychloride}) \\ \text{Baking Soda:} &\quad NaHCO_3 \quad (\text{Sodium hydrogencarbonate}) \\ \text{Washing Soda:} &\quad Na_2CO_3 \cdot 10H_2O \quad (\text{Sodium carbonate decahydrate}) \\ \text{Plaster of Paris:} &\quad CaSO_4 \cdot \frac{1}{2}H_2O \quad (\text{Calcium sulphate hemihydrate}) \\ \text{Gypsum:} &\quad CaSO_4 \cdot 2H_2O \quad (\text{Calcium sulphate dihydrate}) \end{aligned}$$",
          note: "Hemihydrate formula means 2 formula units of $CaSO_4$ share 1 molecule of water: $2CaSO_4 \cdot H_2O$."
        },
        {
          title: "Chlor-Alkali Balanced Reaction",
          content: "$$2NaCl(aq) + 2H_2O(l) \\xrightarrow{\text{Electrolysis}} 2NaOH(aq) + Cl_2(g) \\uparrow + H_2(g) \\uparrow$$",
          note: "Named Chlor-Alkali because products are chlorine ('chlor') and sodium hydroxide ('alkali')."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Explain Why POP Formula Has Half Water Molecule",
          action: "State clearly: Two formula units of calcium sulphate ($CaSO_4$) share one single molecule of water of crystallisation in their crystalline lattice, represented stoichiometrically as $CaSO_4 \cdot \frac{1}{2}H_2O$.",
          proTip: "Mention the alternative equivalent notation: $(CaSO_4)_2 \cdot H_2O$."
        },
        {
          stepNo: 2,
          title: "Differentiate Baking Soda from Baking Powder",
          action: "Baking soda is pure $NaHCO_3$. Baking powder is a mixture of $NaHCO_3$ + edible tartaric acid. Tartaric acid neutralizes alkaline $Na_2CO_3$ to prevent a bitter taste in baked food.",
          proTip: "State the release of $CO_2$ gas that makes cakes porous, soft, and spongy."
        }
      ],
      examinerTraps: [
        {
          trap: "Heating gypsum above 373 K to prepare Plaster of Paris.",
          correction: "Above 373 K (100°C), gypsum loses ALL water of crystallisation to form anhydrous $CaSO_4$ ('dead burnt plaster'), which cannot set with water."
        },
        {
          trap: "Identifying Bleaching Powder as $CaCl_2$.",
          correction: "Calcium chloride is $CaCl_2$. Bleaching powder contains oxygen: $CaOCl_2$ (calcium oxychloride)."
        }
      ]
    }
  ]
};
