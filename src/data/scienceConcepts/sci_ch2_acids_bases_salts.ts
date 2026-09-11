import type { ScienceChapterConcept } from "./types";

export const SCI_CH2_CONCEPT: ScienceChapterConcept = {
  chapterNo: 2,
  title: "Acids, Bases and Salts",
  discipline: "Chemistry",
  weightage: "6–8 Marks (Board Mandatory)",
  oneLiner: "Acids donate H⁺ ions; Bases donate OH⁻; they neutralise each other forming salt + water; pH 0–6 = acid, 7 = neutral, 8–14 = base.",
  analogyTitle: "The 'Sour Lemon vs Soapy Feeling' Story",
  analogyContent: `Imagine licking a **lemon** 🍋 — it tastes sour and makes your mouth pucker. That sourness is due to **citric acid**. Now rub **soap** on your hands — it feels slippery and slightly bitter. That slippery feel is due to a **base** (sodium hydroxide or potassium hydroxide).

When you mix the acid (lemon juice) and base (soap) together, they fight each other and **cancel out** — forming something neutral, like salt water. This "neutralisation" is like two opponents shaking hands and making peace! 🤝

In chemistry, **pH** is the number that tells us who's winning — a small number (0–6) means the acid is winning, 7 means perfect tie (neutral), and a big number (8–14) means the base is winning.`,
  sections: [
    {
      id: "acids_properties",
      label: "1. Acids — Properties & Chemical Reactions",
      heading: "What Makes an Acid an Acid?",
      subheading: "Arrhenius Definition + 5 Key Chemical Reactions of Acids",
      explanation: `**Definition (Arrhenius):** An acid is a substance that produces **hydrogen ions (H⁺)** when dissolved in water.
$$\\text{HCl (aq)} \\to \\text{H}^+ \\text{(aq)} + \\text{Cl}^- \\text{(aq)}$$

But H⁺ is just a bare proton — it doesn't exist alone in water! It immediately bonds with a water molecule to form a **hydronium ion (H₃O⁺)**:
$$\\text{H}^+ + \\text{H}_2\\text{O} \\to \\text{H}_3\\text{O}^+$$

**Properties of Acids:**
- Sour taste (🚫 NEVER taste in lab — it's dangerous!)
- Turn blue litmus **red**
- Conduct electricity (ions in solution)
- pH < 7
- Corrosive to metals and organic tissue

**5 Important Chemical Reactions of Acids:**

1. **Acid + Metal** → Salt + Hydrogen gas ↑
   $$\\text{Zn(s) + H}_2\\text{SO}_4\\text{(dil)} \\to \\text{ZnSO}_4\\text{(aq) + H}_2\\text{(g)}\\uparrow$$
   *Test for H₂: burning splint produces a 'pop' sound!*

2. **Acid + Metal Carbonate** → Salt + Water + CO₂ ↑
   $$\\text{CaCO}_3\\text{(s) + 2HCl(aq)} \\to \\text{CaCl}_2\\text{(aq) + H}_2\\text{O(l) + CO}_2\\text{(g)}\\uparrow$$
   *CO₂ turns lime water milky!*

3. **Acid + Metal Hydrogen Carbonate** → Salt + Water + CO₂ ↑
   $$\\text{NaHCO}_3\\text{(s) + HCl(aq)} \\to \\text{NaCl(aq) + H}_2\\text{O(l) + CO}_2\\text{(g)}\\uparrow$$
   *Baking soda (NaHCO₃) neutralises excess acid in stomach antacids!*

4. **Acid + Base** → Salt + Water (NEUTRALISATION)
   $$\\text{NaOH(aq) + HCl(aq)} \\to \\text{NaCl(aq) + H}_2\\text{O(l)}$$

5. **Acid + Metal Oxide** → Salt + Water
   $$\\text{CuO(s) + H}_2\\text{SO}_4\\text{(dil)} \\to \\text{CuSO}_4\\text{(aq) + H}_2\\text{O(l)}$$
   *Blue copper sulphate solution forms — colour change is a key observation!*`,
      formulasOrKeyPoints: [
        {
          title: "Diluting Acid — The 'Acid into Water' Rule",
          content: `**ALWAYS add acid to water, never water to acid!**
$$\\text{Acid} + \\text{Water} \\to \\text{Dilute Acid (Safe)}$$
$$\\underbrace{\\text{Water} + \\text{Acid}}_{\\text{DANGER!}} \\to \\text{Violent boiling, spattering (Unsafe)}$$

Adding water to concentrated acid causes a sudden violent exothermic reaction — the solution can spatter and cause severe burns.

**Mnemonic: "Do As You Oughta — Add Acid to Water"**`,
          note: "This safety rule is asked in almost every Board exam. Remember: ADD ACID TO WATER (A→W). The dilution is safe because the large volume of water absorbs the heat gradually."
        }
      ],
      examinerTraps: [
        {
          trap: "Saying marble chips (CaCO₃) react with HCl to form CO gas.",
          correction: "The gas produced is CO₂ (carbon dioxide), NOT CO (carbon monoxide). CO₂ turns lime water milky — this is the confirmation test. CO is toxic and produced in incomplete combustion, not in this reaction."
        },
        {
          trap: "Thinking all metals react with dilute HCl.",
          correction: "Only metals more reactive than hydrogen in the activity series react with dilute acids to produce H₂ gas. Copper (Cu), Silver (Ag), Gold (Au) do NOT react with dilute acids. This is a frequent 1M MCQ."
        }
      ]
    },
    {
      id: "bases_properties",
      label: "2. Bases & Alkalis — Properties & Reactions",
      heading: "The Slippery Opposites of Acids",
      subheading: "OH⁻ Ions + 4 Key Reactions + Alkali vs Base Distinction",
      explanation: `**Definition (Arrhenius):** A base is a substance that produces **hydroxide ions (OH⁻)** when dissolved in water.
$$\\text{NaOH(s)} \\xrightarrow{\\text{H}_2\\text{O}} \\text{Na}^+\\text{(aq) + OH}^-\\text{(aq)}$$

**Alkali:** A base that is **soluble in water** is called an alkali. All alkalis are bases, but NOT all bases are alkalis!
- NaOH: base AND alkali ✅ (soluble)
- Cu(OH)₂: base but NOT alkali ❌ (insoluble in water)

**Properties of Bases (Alkalis):**
- Bitter taste, soapy/slippery feel
- Turn red litmus **blue**
- pH > 7
- React with fats to form soap (Saponification)

**4 Important Reactions of Bases:**

1. **Base + Acid** → Salt + Water (Neutralisation)
   $$\\text{KOH(aq) + HNO}_3\\text{(aq)} \\to \\text{KNO}_3\\text{(aq) + H}_2\\text{O(l)}$$

2. **Base + Metal** → Salt + Hydrogen gas (only reactive bases like NaOH, KOH)
   $$\\text{2NaOH(aq) + Zn(s)} \\to \\text{Na}_2\\text{ZnO}_2\\text{(aq) + H}_2\\text{(g)}\\uparrow$$
   *(Sodium zincate formed — Zinc is amphoteric, reacts with both acids AND bases!)*

3. **Base + Non-Metal Oxide** → Salt + Water
   $$\\text{Ca(OH)}_2\\text{(aq) + CO}_2\\text{(g)} \\to \\text{CaCO}_3\\text{(s)↓ + H}_2\\text{O(l)}$$
   *(Lime water turns milky — the standard CO₂ test!)*

4. **Strong Base + Ammonium Salt** → Salt + Water + Ammonia gas
   $$\\text{Ca(OH)}_2\\text{(aq) + 2NH}_4\\text{Cl(aq)} \\to \\text{CaCl}_2\\text{(aq) + 2H}_2\\text{O(l) + 2NH}_3\\text{(g)}\\uparrow$$`,
      formulasOrKeyPoints: [
        {
          title: "Important Bases and Their Uses",
          content: `| Base | Common Name | Important Use |
|------|------------|---------------|
| NaOH | Caustic soda / Lye | Soap making, paper industry, drain cleaners |
| Ca(OH)₂ | Slaked lime / Lime water | Whitewashing, water treatment, CO₂ test |
| Mg(OH)₂ | Milk of magnesia | Antacid for acidity/heartburn |
| NH₄OH | Ammonium hydroxide | Fertilisers, cleaning agent |
| KOH | Caustic potash | Soft soap, batteries |`,
          note: "Milk of magnesia [Mg(OH)₂] is a classic Board question — it is used as an antacid because it neutralises excess HCl in the stomach without side effects."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Alkali and Base — treating them as identical.",
          correction: "All alkalis are bases, but not all bases are alkalis. An alkali must be SOLUBLE in water. NaOH is a base and alkali. Cu(OH)₂ is only a base (insoluble). Examiners test this distinction in 1M MCQs."
        }
      ]
    },
    {
      id: "ph_scale",
      label: "3. The pH Scale — Measuring Acidity & Basicity",
      heading: "The Universal 0–14 Dial of Chemistry",
      subheading: "pH Definition + Indicators + Universal Indicator Colours",
      explanation: `**pH** stands for **'potential of Hydrogen'** (or 'power of Hydrogen'). It is a scale from **0 to 14** that measures how acidic or basic a solution is.

$$\\text{pH} = -\\log[\\text{H}^+]$$
*(You don't need the logarithm formula for Class 10 — just know the scale!)*

**The Golden Rules of pH:**
- pH < 7 → **Acidic** (more H⁺ ions than OH⁻)
- pH = 7 → **Neutral** (equal H⁺ and OH⁻, like pure water)
- pH > 7 → **Basic/Alkaline** (more OH⁻ ions than H⁺)
- Lower pH = **stronger** acid (pH 1 is 10× more acidic than pH 2!)
- Higher pH = **stronger** base

**Indicators and Their Colour Changes:**

| Indicator | In Acid | In Neutral | In Base |
|-----------|---------|-----------|---------|
| Litmus (Red) | Red (stays) | — | Turns Blue |
| Litmus (Blue) | Turns Red | — | Blue (stays) |
| Methyl Orange | Red/Orange | Orange | Yellow |
| Phenolphthalein | Colourless | Colourless | Pink/Magenta |
| Universal Indicator | Red (1–3) → Orange (4–5) | Green (7) | Blue (8–10) → Violet (11–14) |

**Natural Indicators:**
- **Turmeric:** Yellow in acid, Red-brown in base
- **Red cabbage juice:** Red in acid, Green in base
- **Olfactory indicators:** Onion (smell disappears in base), Clove oil (smell disappears in base)

**pH in Daily Life:**
- Human blood: pH 7.35–7.45 (slightly alkaline — any deviation = health crisis!)
- Stomach acid (HCl): pH 1–2
- Tooth decay starts below pH 5.5 (acids from bacteria attack enamel)
- Soil pH: Optimal for crops is 6.5–7.5; acidic soil is treated with **lime (CaO)** or slaked lime`,
      formulasOrKeyPoints: [
        {
          title: "Universal Indicator Colour Chart — Board Favourite",
          content: `| pH Range | Colour | Nature |
|---------|--------|--------|
| 0–1 | Deep Red | Very Strong Acid |
| 2–3 | Red/Orange | Strong Acid |
| 4–5 | Orange | Weak Acid |
| 6 | Yellow | Very Weak Acid |
| 7 | Green | Neutral |
| 8–9 | Blue | Weak Base |
| 10–11 | Indigo/Blue | Strong Base |
| 12–14 | Violet/Purple | Very Strong Base |`,
          note: "MNEMONIC for Universal Indicator: 'Roy G. BIV reversed then forward' — Red (acid) → Orange → Yellow → Green (neutral) → Blue → Indigo → Violet (strong base)."
        }
      ],
      examinerTraps: [
        {
          trap: "Saying lower pH means less acidic.",
          correction: "LOWER pH = MORE acidic! Battery acid (pH ~1) is far more acidic than lemon juice (pH ~3). The scale is inverse — pH 1 has 100x more H⁺ ions than pH 3."
        }
      ]
    },
    {
      id: "salts",
      label: "4. Salts — Formation, Family & Important Compounds",
      heading: "The Neutral Children of Acid-Base Marriages",
      subheading: "Salt Families + Common Salt + Washing Soda + Baking Soda + Bleaching Powder + Plaster of Paris",
      explanation: `A **salt** is formed when an acid reacts with a base (neutralisation). Salts are **ionic compounds** — they can be acidic, basic, or neutral depending on the parent acid and base.

**Salt Families:**
| Parent Acid | Parent Base | Salt Family | Example |
|------------|-------------|-------------|---------|
| HCl (strong) | NaOH (strong) | Neutral (pH 7) | NaCl |
| H₂SO₄ (strong) | Na₂CO₃ (weak) | Basic (pH > 7) | Na₂SO₄ |
| HCl (strong) | NH₄OH (weak) | Acidic (pH < 7) | NH₄Cl |
| CH₃COOH (weak) | NaOH (strong) | Basic (pH > 7) | CH₃COONa |

**THE BIG 5 IMPORTANT COMPOUNDS FROM SODIUM CHLORIDE (NaCl):**

**1. Common Salt (NaCl):** Mined from sea water or rock salt mines. Used in food preservation, making soap, glass, paper.

**2. Sodium Hydroxide / Caustic Soda (NaOH):**
$$2\\text{NaCl(aq)} + 2\\text{H}_2\\text{O(l)} \\xrightarrow{\\text{Electricity}} 2\\text{NaOH(aq)} + \\text{Cl}_2\\text{(g)}\\uparrow + \\text{H}_2\\text{(g)}\\uparrow$$
This is the **Chlor-alkali process** — co-products are Cl₂ (bleaching agent, PVC) and H₂ (fuel, margarine).

**3. Baking Soda / Sodium Hydrogen Carbonate (NaHCO₃):**
$$\\text{NaCl + H}_2\\text{O + CO}_2 + \\text{NH}_3 \\to \\text{NaHCO}_3\\downarrow + \\text{NH}_4\\text{Cl}$$
Uses: Baking (releases CO₂ to leaven dough), antacid, fire extinguishers (dry powder type), soda-acid extinguishers.

**4. Washing Soda / Sodium Carbonate (Na₂CO₃ · 10H₂O):**
$$2\\text{NaHCO}_3 \\xrightarrow{\\Delta} \\text{Na}_2\\text{CO}_3 + \\text{H}_2\\text{O + CO}_2\\uparrow$$
Uses: Glass and soap manufacturing, water softening (removes Ca²⁺ and Mg²⁺ ions), paper industry.

**5. Bleaching Powder (CaOCl₂):** 
$$\\text{Ca(OH)}_2 + \\text{Cl}_2 \\to \\text{CaOCl}_2 + \\text{H}_2\\text{O}$$
Uses: Disinfection of drinking water and swimming pools, bleaching cotton/linen, oxidising agent.

**6. Plaster of Paris (CaSO₄ · ½H₂O):**
$$\\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O} \\xrightarrow{373\\text{K}} \\text{CaSO}_4 \\cdot \\tfrac{1}{2}\\text{H}_2\\text{O} + \\tfrac{3}{2}\\text{H}_2\\text{O}$$
$$\\underbrace{\\text{(Gypsum)}}_\\text{} \\xrightarrow{\\text{Heat}} \\underbrace{\\text{Plaster of Paris}}_\\text{}$$
Uses: Making casts for fractured bones, chalk pieces, statues, fire-proof materials.
*Setting reaction:* $\\text{CaSO}_4 \\cdot \\tfrac{1}{2}\\text{H}_2\\text{O} + \\tfrac{3}{2}\\text{H}_2\\text{O} \\to \\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}$ (hardens in 15–30 min!)`,
      formulasOrKeyPoints: [
        {
          title: "Water of Crystallisation",
          content: `Some salts have water molecules trapped inside their crystal structure. These are called **hydrated salts** and the water is called **water of crystallisation**.

| Salt | Formula | Water Molecules | Common Name |
|------|---------|-----------------|-------------|
| Blue vitriol | CuSO₄ · 5H₂O | 5 | Copper sulphate |
| Green vitriol | FeSO₄ · 7H₂O | 7 | Ferrous sulphate |
| White vitriol | ZnSO₄ · 7H₂O | 7 | Zinc sulphate |
| Washing soda | Na₂CO₃ · 10H₂O | 10 | Sodium carbonate |
| Gypsum | CaSO₄ · 2H₂O | 2 | Calcium sulphate |
| Plaster of Paris | CaSO₄ · ½H₂O | ½ | Calcium sulphate hemihydrate |

When CuSO₄ · 5H₂O is heated, it loses water and becomes **anhydrous CuSO₄** (white powder). Add water back → it turns blue again!`,
          note: "The Plaster of Paris formula with ½ H₂O (hemihydrate) confuses students. Remember: 1 formula unit of CaSO₄ shares ONE water molecule between TWO formula units. That's why it's written as CaSO₄ · ½H₂O."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify salt name from acid + base",
          action: "Replace H in acid with the metal from the base. Name = metal name + acid root name (-ate for -ic acids, -ite for -ous acids).",
          proTip: "HCl → Chloride, H₂SO₄ → Sulphate, HNO₃ → Nitrate, H₃PO₄ → Phosphate, CH₃COOH → Acetate. Memorise these five acid radicals."
        },
        {
          stepNo: 2,
          title: "Determine salt pH without testing",
          action: "Check parent acid and base strength. Strong acid + Strong base = Neutral (pH≈7). Strong acid + Weak base = Acidic. Weak acid + Strong base = Basic.",
          proTip: "NH₄Cl is acidic (strong HCl + weak NH₄OH). Na₂CO₃ is basic (strong NaOH + weak H₂CO₃). This logic appears in 1M MCQs."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Baking Soda (NaHCO₃) with Washing Soda (Na₂CO₃·10H₂O).",
          correction: "Baking Soda = NaHCO₃ (sodium hydrogen carbonate / sodium bicarbonate) — used in cooking and as antacid. Washing Soda = Na₂CO₃·10H₂O (sodium carbonate decahydrate) — used in cleaning. They are chemically different compounds with different uses."
        },
        {
          trap: "Writing Plaster of Paris as CaSO₄ · H₂O (1 full water) instead of CaSO₄ · ½H₂O.",
          correction: "Plaster of Paris is calcium sulphate HEMI-hydrate: CaSO₄ · ½H₂O. Gypsum is the dihydrate: CaSO₄ · 2H₂O. Heating gypsum at 100°C (373 K) gives Plaster of Paris."
        }
      ]
    }
  ]
};
