import type { ScienceChapterConcept } from "./types";

export const SCI_CH2_CONCEPT: ScienceChapterConcept = {
  chapterNo: 2,
  title: "Acids, Bases and Salts",
  discipline: "Chemistry",
  weightage: "6–8 Marks (Board Mandatory)",
  oneLiner: "Acids generate H⁺ (aq) / H₃O⁺ ions in water; Bases generate OH⁻ (aq) ions; Neutralization forms salt + water; pH measures hydronium concentration on a logarithmic 0–14 scale.",
  analogyTitle: "The Proton Donors & Proton Acceptors Balance",
  analogyContent: `Imagine an electrochemical battery system where two contrasting forces govern chemical equilibria. **Acids** are aggressive **proton ($H^+$) donors**, eager to release hydronium ions into aqueous media, giving them their sour taste and corrosive power. **Bases** are **proton acceptors / hydroxide ($OH^-$) providers**, presenting a slippery alkaline texture and neutralizing acids on contact.

When an acid meets a base in equal proportions, an atomic handshake occurs: $H^+ + OH^- \\to H_2O$. The acidic and alkaline characters extinguish each other, creating a **neutral salt solution**. The **pH scale** operates as the universal diagnostic meter — registering the exact concentration of hydronium ions from 0 (ultra-acidic) to 7 (neutral) to 14 (ultra-basic).`,
  sections: [
    {
      id: "acids_properties",
      label: "1. Acids: Properties, Ionization & Core Reactions",
      heading: "Arrhenius Ionization, Chemical Properties & Crucial Activities",
      subheading: "Hydronium Ion Formation + Activity 2.8 (Conduction) + Activity 2.9 (Dry HCl) + Dilution Safety",
      explanation: `**Definition (Arrhenius Model):**
An acid is a substance that dissociates in aqueous solution to produce **hydrogen ions ($H^+$)**. Because a bare hydrogen ion ($H^+$) is a single proton with high charge density, it cannot exist independently in water. It immediately combines with a polar water molecule to form a stable **hydronium ion ($H_3O^+$)**:
$$\\text{HCl(aq)} + \\text{H}_2\\text{O(l)} \\to \\text{H}_3\\text{O}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)}$$

### Crucial NCERT Activities (Top Board Tested):
1. **NCERT Activity 2.8 — Electrical Conduction of Acids vs Glucose/Alcohol:**
   - Solutions of $\\text{HCl}$, $\\text{H}_2\\text{SO}_4$, and $\\text{HNO}_3$ conduct electric current in an electrolytic cell, causing the bulb to glow brightly. This proves that acids **ionize into free mobile ions** ($H^+$ cations and acid anions) in water.
   - In stark contrast, aqueous solutions of **glucose ($\text{C}_6\text{H}_{12}\text{O}_6$)** and **ethyl alcohol ($\text{C}_2\text{H}_5\text{OH}$)** do NOT conduct electricity; the bulb does not glow.
   - *Board Conclusion:* Even though glucose and alcohol contain hydrogen atoms in their formulas, they do NOT dissociate into $H^+$ ions in water. Therefore, they are **not classified as acids**.

2. **NCERT Activity 2.9 — Dry HCl Gas vs Moist Litmus Paper:**
   - When dry $\\text{HCl}$ gas prepared by reacting $\\text{NaCl}$ with concentrated $\\text{H}_2\\text{SO}_4$ is tested with **dry blue litmus paper**, NO color change occurs!
   - When tested with **moist blue litmus paper**, the paper immediately turns **red**.
   - *Guard Tube Role:* In humid weather, the gas is passed through a calcium chloride ($\text{CaCl}_2$) guard tube to absorb atmospheric moisture and keep the gas strictly dry.
   - *Board Conclusion:* Acids exhibit acidic behavior **only in the presence of water**. In the absence of water, $\text{HCl}$ cannot ionize into $\text{H}_3\text{O}^+$ ions.

3. **Dilution of Concentrated Acids (Safety Golden Rule):**
   - Diluting a concentrated acid ($\text{H}_2\text{SO}_4$, $\text{HNO}_3$) is an intensely **exothermic process**.
   - **MANDATORY PROCEDURE:** Always add **acid slowly to water** with constant stirring.
   - **DANGER:** If water is poured into concentrated acid, the sudden concentrated heat generated may cause the acid to boil violently, spatter onto the face and clothes, and shatter the glass container due to excessive local thermal shock.

---

### The 5 Essential Chemical Reactions of Acids:
1. **Acid + Active Metal $\\to$ Salt + $\\text{H}_2\\text{(g)}\\uparrow$:**
   $$\\text{Zn(s)} + \\text{H}_2\\text{SO}_4\\text{(aq)} \\to \\text{ZnSO}_4\\text{(aq)} + \\text{H}_2\\text{(g)}\\uparrow$$
   *Test for $H_2$:* Collect gas and bring a burning splinter near mouth of tube $\\to$ burns with a distinct **'pop' sound**.
2. **Acid + Metal Carbonate $\\to$ Salt + $\\text{H}_2\\text{O} + \\text{CO}_2\\text{(g)}\\uparrow$:**
   $$\\text{Na}_2\\text{CO}_3\\text{(s)} + 2\\text{HCl(aq)} \\to 2\\text{NaCl(aq)} + \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)}\\uparrow$$
3. **Acid + Metal Hydrogen Carbonate $\\to$ Salt + $\\text{H}_2\\text{O} + \\text{CO}_2\\text{(g)}\\uparrow$:**
   $$\\text{NaHCO}_3\\text{(s)} + \\text{HCl(aq)} \\to \\text{NaCl(aq)} + \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)}\\uparrow$$
   *Lime Water Test for $\text{CO}_2$ (NCERT Activity 2.5):*
   $$\\text{Ca(OH)}_2\\text{(aq)} [\\text{Lime water}] + \\text{CO}_2\\text{(g)} \\to \\text{CaCO}_3\\text{(s)}\\downarrow [\\text{Milky white ppt}] + \\text{H}_2\\text{O(l)}$$
   *Excess $\text{CO}_2$ Effect (Board Classic Trap):*
   When excess $\text{CO}_2$ is bubbled, the milky solution turns completely **clear and colorless** because insoluble $\text{CaCO}_3$ converts into soluble calcium hydrogen carbonate:
   $$\\text{CaCO}_3\\text{(s)} + \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)} \\to \\text{Ca(HCO}_3)_2\\text{(aq)} [\\text{Soluble in water}]$$
4. **Acid + Base $\\to$ Salt + Water (Neutralization):**
   $$\\text{HCl(aq)} + \\text{NaOH(aq)} \\to \\text{NaCl(aq)} + \\text{H}_2\\text{O(l)}$$
5. **Acid + Metallic Oxide (Basic Oxide) $\\to$ Salt + Water:**
   $$\\text{CuO(s)} [\\text{Black}] + 2\\text{HCl(aq)} \\to \\text{CuCl}_2\\text{(aq)} [\\text{Blue-green solution}] + \\text{H}_2\\text{O(l)}$$
   *Conclusion:* Metal oxides are **basic in nature** because they neutralize acids to form salt and water.`,
      formulasOrKeyPoints: [
        {
          title: "Natural Organic Acids & Their Sources (1-Mark CBSE Vault)",
          content: `| Natural Source | Organic Acid Present |
|---|---|
| Vinegar | Acetic acid / Ethanoic acid ($\text{CH}_3\text{COOH}$) |
| Orange | Citric acid |
| Lemon | Citric acid |
| Tamarind | Tartaric acid |
| Tomato | Oxalic acid |
| Sour milk / Curd | Lactic acid |
| Ant sting | Methanoic acid / Formic acid ($\text{HCOOH}$) |
| Nettle leaf sting | Methanoic acid / Formic acid ($\text{HCOOH}$) |`,
          note: "NCERT Remind: Nettle sting injects methanoic acid causing acute burning pain. Nature provides a neutralizer in the dock plant growing alongside, whose leaves contain mildly alkaline sap that soothes the sting when rubbed."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Safe Acid Dilution Procedure",
          action: "Measure required volume of distilled water in a pyrex beaker. Add concentrated acid dropwise along the inner wall of the beaker while stirring continuously with a glass rod.",
          proTip: "Water has a very high specific heat capacity; its large volume absorbs the liberated heat safely."
        }
      ],
      examinerTraps: [
        {
          trap: "Assuming glucose and alcohol are acidic because they contain hydrogen atoms.",
          correction: "Hydrogen must be released as free H⁺/H₃O⁺ ions in water to confer acidity. Covalent bonds in glucose and alcohol do not ionize in water."
        },
        {
          trap: "Writing that lime water remains milky indefinitely when CO₂ is bubbled.",
          correction: "Excess CO₂ converts insoluble CaCO₃ into soluble Ca(HCO₃)₂, causing the milkiness to completely disappear."
        }
      ]
    },
    {
      id: "bases_properties",
      label: "2. Bases & Alkalis: Chemistry, Amphoterism & Reactions",
      heading: "Hydroxide Ion Generation, Alkali Distinction & Amphoteric Metals",
      subheading: "Base Definition + Alkali vs Base + Reaction with Zn/Al + Non-metallic Oxides",
      explanation: `**Definition of Base:**
A substance that furnishes **hydroxide ions ($OH^-$)** in aqueous solution, tastes bitter, feels slippery/soapy, and turns red litmus paper **blue**.
$$\\text{NaOH(s)} \\xrightarrow{\\text{H}_2\\text{O}} \\text{Na}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$$

**Alkali vs Base Distinction (Crucial Board Definition):**
- An **alkali** is a base that is **soluble in water**.
- *Rule:* **All alkalis are bases, but all bases are NOT alkalis.**
- Examples of Alkalis: $\\text{NaOH}$ (Caustic soda), $\\text{KOH}$ (Caustic potash), $\\text{Ca(OH)}_2$ (Slaked lime).
- Insoluble bases (NOT alkalis): $\\text{Cu(OH)}_2$, $\\text{Fe(OH)}_3$, $\\text{Al(OH)}_3$.

---

### Chemical Reactions of Bases:
1. **Base + Amphoteric Metal $\\to$ Salt + Hydrogen Gas (Top Board Question):**
   Bases generally do NOT react with all metals. However, amphoteric metals like **Zinc (Zn)** and **Aluminium (Al)** react with strong bases to liberate $\text{H}_2$ gas:
   $$2\\text{NaOH(aq)} + \\text{Zn(s)} \\xrightarrow{\\Delta} \\text{Na}_2\\text{ZnO}_2\\text{(aq)} [\\text{Sodium zincate}] + \\text{H}_2\\text{(g)}\\uparrow$$
   $$2\\text{NaOH(aq)} + 2\\text{Al(s)} + 2\\text{H}_2\\text{O(l)} \\to 2\\text{NaAlO}_2\\text{(aq)} [\\text{Sodium aluminate}] + 3\\text{H}_2\\text{(g)}\\uparrow$$
2. **Base + Non-Metallic Oxide (Acidic Oxide) $\\to$ Salt + Water:**
   $$\\text{Ca(OH)}_2\\text{(aq)} + \\text{CO}_2\\text{(g)} \\to \\text{CaCO}_3\\text{(s)}\\downarrow + \\text{H}_2\\text{O(l)}$$
   *Conclusion:* Non-metal oxides ($\text{CO}_2$, $\text{SO}_2$, $\text{SO}_3$, $\text{NO}_2$) are **acidic in nature** because they react with bases to form salt and water.`,
      formulasOrKeyPoints: [
        {
          title: "Chemical Indicators Comparison Matrix",
          content: `| Indicator Type | Indicator Name | Color in Acid | Color in Neutral | Color in Base |
|---|---|---|---|---|
| Natural | Red Litmus | Red | Red | **Blue** |
| Natural | Blue Litmus | **Red** | Blue | Blue |
| Natural | Turmeric paste | Yellow | Yellow | **Reddish-brown** |
| Natural | Red Cabbage extract | **Red/Pink** | Purple | **Green/Yellow** |
| Synthetic | Methyl Orange | **Red** | Orange | **Yellow** |
| Synthetic | Phenolphthalein | **Colorless** | Colorless | **Deep Pink** |
| Olfactory | Onion juice | Pungent smell retained | Pungent smell | **Smell destroyed** |
| Olfactory | Vanilla essence | Pleasant scent retained | Pleasant scent | **Scent destroyed** |
| Olfactory | Clove oil | Characteristic odor retained | Characteristic odor | **Odor destroyed** |`,
          note: "Olfactory indicators change their smell in acidic vs basic media. They are indispensable for visually challenged students to test acidity/alkalinity."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing the formula of sodium zincate incorrectly as NaZnO or Na₂ZnO.",
          correction: "Sodium zincate is Na₂ZnO₂ (Zinc has valency 2 in the zincate ion ZnO₂²⁻)."
        }
      ]
    },
    {
      id: "ph_scale",
      label: "3. The pH Scale & Real-World Biological Importance",
      heading: "Logarithmic Hydronium Concentration & Every Day Applications",
      subheading: "0 to 14 Scale + Acid Rain + Digestive Acidity + Tooth Enamel Decay + Soil pH",
      explanation: `**Concept of pH:**
Introduced by Sørensen (1909), 'p' stands for the German *potenz* (power), and 'H' represents hydrogen ion concentration:
$$\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}[\\text{H}_3\\text{O}^+]$$
- **Neutral Solution:** $[H^+] = [OH^-] = 10^{-7} \\text{ M} \\implies \\text{pH} = 7$ (Pure distilled water at 25°C).
- **Acidic Solution:** $[H^+] > 10^{-7} \\text{ M} \\implies \\text{pH} < 7$ (Lower pH = higher acidity; pH 1 has 100× more $H^+$ ions than pH 3).
- **Basic Solution:** $[H^+] < 10^{-7} \\text{ M} \\implies \\text{pH} > 7$ (Higher pH = higher alkalinity; pH 14 = concentrated NaOH).

---

### Importance of pH in Everyday Life (CBSE 3-Mark/5-Mark Hotspot):
1. **Biological pH Range:**
   - Human physiological processes function in a narrow homeostatic pH window of **7.0 to 7.8**.
   - **Acid Rain:** When atmospheric pollutants ($\text{SO}_2, \text{NO}_2$) lower rainwater pH below **5.6**, it is called acid rain. When it flows into rivers, it drastically lowers river pH, threatening survival of aquatic life.
2. **Soil pH and Crop Agriculture:**
   - Most agricultural crops require an optimum soil pH between **6.5 and 7.5**.
   - If soil becomes excessively acidic, farmers treat it with basic materials: Quicklime ($\text{CaO}$), Slaked lime ($\text{Ca(OH)}_2$), or Chalk ($\text{CaCO}_3$).
3. **pH in Human Digestive System:**
   - Stomach parietal cells produce hydrochloric acid ($\text{HCl}$, pH ~ 1.2 to 2.0) to activate pepsin without damaging stomach tissue (shielded by gastric mucus).
   - During indigestion, excess acid causes acute pain and irritation. Patients take **Antacids** (mild basic salts):
     * **Milk of Magnesia [$\\text{Mg(OH)}_2$]**
     * **Baking Soda [$\\text{NaHCO}_3$]**
4. **pH Change as the Cause of Tooth Decay:**
   - Tooth enamel is composed of **Calcium hydroxyapatite** [$\\text{Ca}_5(\\text{PO}_4)_3(\\text{OH})$], the hardest substance in the human body. It is insoluble in water.
   - However, when mouth pH falls below **5.5**, tooth enamel begins to corrode.
   - *Mechanism:* Bacteria in dental plaque ferment trapped sugar and food residues, producing organic acids.
   - *Remedy:* Brushing teeth with **alkaline toothpastes** neutralizes acids and halts decay.`,
      formulasOrKeyPoints: [
        {
          title: "Universal Indicator Colour Progression",
          content: `| pH Range | Universal Indicator Color | Qualitative Strength |
|---|---|---|
| 0 – 2 | Dark Red / Scarlet | Very Strong Acid (Conc. HCl, Stomach acid) |
| 3 – 4 | Orange-Red | Moderate Acid (Lemon juice, Vinegar) |
| 5 – 6 | Yellow | Weak Acid (Coffee, Rainwater, Milk) |
| 7 | Pure Green | Neutral (Pure Water, Blood is ~7.4) |
| 8 – 9 | Blue / Teal | Weak Base (Baking soda, Sea water) |
| 10 – 11 | Indigo / Deep Blue | Moderate Base (Milk of magnesia) |
| 12 – 14 | Violet / Purple | Very Strong Base (NaOH, Bleach) |`,
          note: "Universal indicator is a mixture of several organic dyes that exhibits a gradual color gradient across the complete pH spectrum."
        }
      ],
      examinerTraps: [
        {
          trap: "Thinking a higher pH value represents a stronger acid.",
          correction: "Lower pH = Higher [H⁺] concentration = Stronger acid. Higher pH = Stronger base."
        }
      ]
    },
    {
      id: "salts",
      label: "4. Chemistry of Commercial Salts & Chlor-Alkali Process",
      heading: "Parent Acids/Bases, Chlor-Alkali & The Big 5 Commercial Salts",
      subheading: "Chlor-Alkali (NaOH) + Bleaching Powder + Baking Soda + Washing Soda + Plaster of Paris",
      explanation: `Salts are ionic compounds formed by neutralization. The pH of a salt solution depends on the relative dissociation strengths of its parent acid and parent base:

| Parent Acid | Parent Base | Nature of Salt | Aqueous pH | Representative Example |
|---|---|---|---|---|
| Strong ($\text{HCl}, \text{H}_2\text{SO}_4$) | Strong ($\text{NaOH}, \text{KOH}$) | Neutral | $\text{pH} = 7$ | $\text{NaCl}, \text{K}_2\text{SO}_4, \text{KNO}_3$ |
| Strong ($\text{HCl}, \text{HNO}_3$) | Weak ($\text{NH}_4\text{OH}, \text{Cu(OH)}_2$) | Acidic | $\text{pH} < 7$ | $\text{NH}_4\text{Cl}, \text{CuSO}_4, \text{FeCl}_3$ |
| Weak ($\text{CH}_3\text{COOH}, \text{H}_2\text{CO}_3$) | Strong ($\text{NaOH}, \text{KOH}$) | Basic | $\text{pH} > 7$ | $\text{CH}_3\text{COONa}, \text{Na}_2\text{CO}_3, \text{NaHCO}_3$ |

---

### The Big 5 Industrial Chemicals from Common Salt (NaCl):

#### 1. The Chlor-Alkali Process (Manufacture of NaOH):
Electrolysis of cold saturated aqueous sodium chloride solution (**brine**):
$$2\\text{NaCl(aq)} + 2\\text{H}_2\\text{O(l)} \\xrightarrow{\\text{Electricity}} 2\\text{NaOH(aq)} + \\text{Cl}_2\\text{(g)}\\uparrow [\\text{Anode}] + \\text{H}_2\\text{(g)}\\uparrow [\\text{Cathode}]$$
- **At Anode (+):** Chlorine gas ($\\text{Cl}_2$) evolved (disinfectant, PVC, CFCs, water treatment).
- **At Cathode (-):** Hydrogen gas ($\\text{H}_2$) evolved (fuels, margarine, ammonia for fertilizers).
- **Near Cathode:** Sodium hydroxide ($\\text{NaOH}$) solution forms (degreasing metals, soaps, detergents, paper).

#### 2. Bleaching Powder ($\\text{CaOCl}_2$ — Calcium Oxychloride):
Action of chlorine gas on dry slaked lime:
$$\\text{Ca(OH)}_2\\text{(s)} [\\text{Dry slaked lime}] + \\text{Cl}_2\\text{(g)} \\to \\text{CaOCl}_2\\text{(s)} [\\text{Bleaching powder}] + \\text{H}_2\\text{O(l)}$$
- *Uses:* Disinfecting drinking water (kills pathogens), bleaching cotton and linen in textile mills, wood pulp in paper factories, oxidizing agent in chemical synthesis.

#### 3. Baking Soda ($\\text{NaHCO}_3$ — Sodium Hydrogen Carbonate):
Synthesized by Solvay Process:
$$\\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2 + \\text{NH}_3 \\to \\text{NH}_4\\text{Cl(aq)} [\\text{Ammonium chloride}] + \\text{NaHCO}_3\\text{(s)}\\downarrow$$
- *Action of Heat on Baking Soda:*
  $$2\\text{NaHCO}_3\\text{(s)} \\xrightarrow{\\Delta} \\text{Na}_2\\text{CO}_3\\text{(s)} + \\text{H}_2\\text{O(g)} + \\text{CO}_2\\text{(g)}\\uparrow$$
- *Difference between Baking Soda & Baking Powder (Board Favorite):*
  * Baking soda is pure $\text{NaHCO}_3$. If used alone in cakes, thermal decomposition produces $\text{Na}_2\text{CO}_3$, which imparts a bitter taste.
  * **Baking powder** is a mixture of baking soda ($\text{NaHCO}_3$) and a mild edible organic acid such as **tartaric acid**.
  * When heated or mixed with water, tartaric acid reacts with $\text{NaHCO}_3$, releasing $\text{CO}_2$ (making cakes soft and spongy) and neutralizing $\text{Na}_2\text{CO}_3$ to sodium tartrate (pleasant taste).

#### 4. Washing Soda ($\\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}$ — Sodium Carbonate Decahydrate):
Obtained by recrystallization of sodium carbonate in water:
$$\\text{Na}_2\\text{CO}_3\\text{(s)} + 10\\text{H}_2\\text{O(l)} \\to \\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O(s)}$$
- *Uses:* Removing **permanent hardness** of water, glass, soap, and paper industries, domestic cleansing agent.

#### 5. Plaster of Paris ($\\text{CaSO}_4 \\cdot \\frac{1}{2}\\text{H}_2\\text{O}$ — Calcium Sulphate Hemihydrate):
Heating gypsum ($\text{CaSO}_4 \\cdot 2\text{H}_2\text{O}$) at carefully controlled temperature of **373 K (100°C)**:
$$\\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O(s)} \\xrightarrow{373\\text{ K}} \\text{CaSO}_4 \\cdot \\tfrac{1}{2}\\text{H}_2\\text{O(s)} + 1\\tfrac{1}{2}\\text{H}_2\\text{O(g)}$$
- *Setting Reaction:* On mixing with water, it rehydrates into a rigid crystalline solid in 15–20 minutes:
  $$\\text{CaSO}_4 \\cdot \\tfrac{1}{2}\\text{H}_2\\text{O} + 1\\tfrac{1}{2}\\text{H}_2\\text{O} \\to \\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O} [\\text{Gypsum, hard solid}]$$
- *Dead Burnt Plaster:* If gypsum is heated **above 373 K**, it loses all water of crystallization, yielding anhydrous $\text{CaSO}_4$ ('dead burnt plaster'), which completely loses the property of setting with water!`,
      formulasOrKeyPoints: [
        {
          title: "Water of Crystallisation Master Reference",
          content: `**Water of Crystallisation:** The fixed number of water molecules chemically bound in one formula unit of a salt in crystalline form.

| Hydrated Salt Name | Chemical Formula | Moles of Water | Color Change on Heating |
|---|---|---|---|
| Copper sulphate (Blue vitriol) | $\\text{CuSO}_4 \\cdot 5\\text{H}_2\\text{O}$ | 5 | Deep Blue $\\to$ Anhydrous White powder |
| Ferrous sulphate (Green vitriol) | $\\text{FeSO}_4 \\cdot 7\\text{H}_2\\text{O}$ | 7 | Pale Green $\\to$ Dirty White $\\to$ Reddish-brown |
| Washing soda | $\\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}$ | 10 | Effloresces in dry air to monohydrate |
| Gypsum | $\\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}$ | 2 | Converts to POP at 373 K |
| Plaster of Paris | $\\text{CaSO}_4 \\cdot \\frac{1}{2}\\text{H}_2\\text{O}$ | 1/2 | Two $\\text{CaSO}_4$ units share one $\\text{H}_2\\text{O}$ |`,
          note: "Reversible hydration: Adding drops of water to anhydrous white CuSO₄ restores its vivid blue color immediately."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify Salt Parentage and Hydrolysis pH",
          action: "Split the salt formula into cation and anion. Add OH⁻ to cation to get parent base; add H⁺ to anion to get parent acid. Judge relative strengths to determine whether solution is acidic, basic, or neutral.",
          proTip: "NH₄Cl → NH₄OH (weak base) + HCl (strong acid) → Acidic solution (pH < 7)."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing the formula of Plaster of Paris with 1 full molecule of water: CaSO₄·H₂O.",
          correction: "POP is Calcium sulphate HEMI-hydrate: CaSO₄·½H₂O (or 2CaSO₄·H₂O)."
        },
        {
          trap: "Heating gypsum above 373 K (100°C) during Plaster of Paris synthesis.",
          correction: "Above 373 K, all water is driven off, forming anhydrous CaSO₄ (dead burnt plaster), which will NOT set upon adding water."
        }
      ]
    }
  ]
};
