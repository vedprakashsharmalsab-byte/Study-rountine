import type { ScienceChapterConcept } from "./types";

export const SCI_CH1_CONCEPT: ScienceChapterConcept = {
  chapterNo: 1,
  title: "Chemical Reactions and Equations",
  discipline: "Chemistry",
  weightage: "6–8 Marks (Board Mandatory)",
  oneLiner: "A chemical reaction makes NEW substances; balancing keeps atoms perfectly counted on both sides; state symbols tell us the physical form.",
  analogyTitle: "The 'Recipe' & 'Recipe Checker' of Chemistry",
  analogyContent: `Imagine you are baking cookies 🍪. The **ingredients** (flour, sugar, butter) are the **reactants**, and the **finished cookies** are the **products**. A **balanced equation** is like a recipe where the baker guarantees: "Every gram of ingredient I add is accounted for in the cookies that come out — nothing disappears!" This is the **Law of Conservation of Mass**.

A chef's kitchen has rules: you write the state of each ingredient — is the butter solid 🧈, liquid 🫗, or melted? Similarly in chemistry: (s) solid, (l) liquid, (g) gas, (aq) dissolved in water.`,
  sections: [
    {
      id: "chemical_reactions",
      label: "1. What is a Chemical Reaction?",
      heading: "From Boring Ingredients to Brand New Substances",
      subheading: "Evidence of Chemical Change + Law of Conservation of Mass",
      explanation: `A **chemical reaction** is a process in which one or more substances (reactants) are converted into one or more entirely new substances (products) with **different chemical properties**.

**How do we know a chemical reaction has occurred?** Look for these 4 signs:
1. 🟡 **Change in colour** — Iron turns reddish-brown when it rusts (white to blue in blue litmus).
2. 💨 **Evolution of gas** — Zinc + H₂SO₄ produces bubbles of hydrogen gas.
3. 🔥 **Change in temperature** — Hand-warmer packs get hot (exothermic); melting ammonium nitrate feels cold (endothermic).
4. 🧊 **Change in state** — Candle wax (solid) burns to produce CO₂ gas and liquid water.
5. 🌫️ **Formation of precipitate** — Mixing lead nitrate + potassium iodide → yellow solid (PbI₂) settles out.

**Law of Conservation of Mass (Lavoisier, 1789):**
*"In a chemical reaction, the total mass of reactants always equals the total mass of products."*
This means atoms are **never created or destroyed** — they are simply rearranged into new combinations!

**Writing Chemical Equations:**
- **Word equation:** Magnesium + Oxygen → Magnesium oxide
- **Unbalanced equation:** Mg + O₂ → MgO ← ❌ (Oxygen count doesn't match!)
- **Balanced equation:** 2Mg(s) + O₂(g) → 2MgO(s) ✅`,
      formulasOrKeyPoints: [
        {
          title: "Structure of a Balanced Chemical Equation",
          content: `$$\\underbrace{\\text{Reactants}}_{\\text{Left side}} \\xrightarrow{\\text{Conditions}} \\underbrace{\\text{Products}}_{\\text{Right side}}$$

**State Symbols:**
| Symbol | Meaning | Example |
|--------|---------|---------|
| (s) | Solid | Fe(s) |
| (l) | Liquid | H₂O(l) |
| (g) | Gas | O₂(g) |
| (aq) | Aqueous (in water) | NaCl(aq) |
| ↑ | Gas evolved | H₂(g)↑ |
| ↓ | Precipitate formed | PbI₂(s)↓ |`,
          note: "Conditions above/below the arrow: Δ = heat, hν = light, catalyst name = e.g. MnO₂. These must be shown in 3M and 5M Board answers."
        },
        {
          title: "How to Balance ANY Equation — The Hit-and-Trial Method",
          content: `**Golden Rule:** You may ONLY change the **coefficients** (numbers in front of formulas). NEVER change the subscripts inside a formula!

**Example: Balance** $\\text{Fe} + \\text{H}_2\\text{O} \\to \\text{Fe}_3\\text{O}_4 + \\text{H}_2$

| Step | Equation | Fe | H | O |
|------|----------|----|---|---|
| Start | Fe + H₂O → Fe₃O₄ + H₂ | 1≠3 | 2=2 | 1≠4 |
| Fix O | Fe + 4H₂O → Fe₃O₄ + H₂ | 1≠3 | 8≠2 | 4=4 |
| Fix H | Fe + 4H₂O → Fe₃O₄ + 4H₂ | 1≠3 | 8=8 | 4=4 |
| Fix Fe | **3Fe(s) + 4H₂O(g) → Fe₃O₄(s) + 4H₂(g)** | 3=3 ✅ | 8=8 ✅ | 4=4 ✅ |`,
          note: "Water is in gaseous state (steam) because red-hot iron reacts only with steam, not liquid water. This is a classic Board trap!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Count atoms on both sides",
          action: "List every element present and count atoms of each element on left side and right side separately.",
          proTip: "Use a table — Examiners love structured presentation and it helps you spot imbalances instantly."
        },
        {
          stepNo: 2,
          title: "Start balancing with the most complex molecule",
          action: "Pick the compound with the most atoms first (usually a metal oxide or an organic compound). Balance it by adjusting its coefficient.",
          proTip: "Leave H₂ and O₂ (pure elemental gases) for last — they're easiest to adjust at the end."
        },
        {
          stepNo: 3,
          title: "Verify and add state symbols",
          action: "Re-count every element after adding coefficients. Once balanced, add (s), (l), (g), (aq) to each species.",
          proTip: "In Board exams, state symbols can cost 0.5 mark each in 3M+ questions. Never skip them!"
        }
      ],
      examinerTraps: [
        {
          trap: "Changing the subscript to balance — e.g. writing H₂O₂ instead of 2H₂O.",
          correction: "NEVER change subscripts! H₂O₂ is a completely different substance (hydrogen peroxide) from H₂O (water). Only change the coefficient (the big number in front)."
        },
        {
          trap: "Forgetting to write state symbols like (g) or (aq) in board answers.",
          correction: "State symbols are compulsory in 3M and 5M answers. Missing them costs 0.5 mark per species. In the Fe + steam reaction, writing H₂O(l) instead of H₂O(g) is a half-mark deduction."
        }
      ]
    },
    {
      id: "types_of_reactions",
      label: "2. Types of Chemical Reactions",
      heading: "The 5 Reaction Families — with Everyday Analogies",
      subheading: "Combination · Decomposition · Displacement · Double Displacement · Redox",
      explanation: `Think of chemical reactions as **relationship status updates** between atoms!

**1. COMBINATION (like a Marriage 💍):**
Two or more substances combine to form ONE new substance.
$$\\text{A} + \\text{B} \\to \\text{AB}$$
*Example:* $\\text{CaO(s) + H}_2\\text{O(l)} \\to \\text{Ca(OH)}_2\\text{(aq) + Heat}$ (Quicklime + Water → Slaked lime)

**2. DECOMPOSITION (like a Divorce 💔):**
ONE substance breaks down into two or more simpler substances. Requires energy input (heat, light, or electricity).
$$\\text{AB} \\to \\text{A} + \\text{B}$$
*Three types:*
- **Thermal:** $2\\text{Pb(NO}_3)_2\\text{(s)} \\xrightarrow{\\Delta} 2\\text{PbO(s) + 4NO}_2\\text{(g)}\\uparrow + \\text{O}_2\\text{(g)}\\uparrow$
- **Photolytic:** $2\\text{AgCl(s)} \\xrightarrow{h\\nu} 2\\text{Ag(s) + Cl}_2\\text{(g)}\\uparrow$ (used in black-and-white photography!)
- **Electrolytic:** $2\\text{H}_2\\text{O(l)} \\xrightarrow{\\text{electricity}} 2\\text{H}_2\\text{(g)}\\uparrow + \\text{O}_2\\text{(g)}\\uparrow$

**3. DISPLACEMENT (like a Job Replacement 🏢):**
A more reactive element pushes out (displaces) a less reactive element from its salt solution.
$$\\text{A} + \\text{BC} \\to \\text{AC} + \\text{B}$$
*Example:* $\\text{Zn(s) + CuSO}_4\\text{(aq)} \\to \\text{ZnSO}_4\\text{(aq) + Cu(s)}$ — Zinc is more reactive than copper!

**4. DOUBLE DISPLACEMENT (like an Arranged Marriage Swap 💑):**
Two compounds exchange their ions (partners). Usually forms a precipitate or water.
$$\\text{AB} + \\text{CD} \\to \\text{AD} + \\text{CB}$$
*Example:* $\\text{Na}_2\\text{SO}_4\\text{(aq) + BaCl}_2\\text{(aq)} \\to \\text{BaSO}_4\\text{(s)}\\downarrow + 2\\text{NaCl(aq)}$ (White precipitate of BaSO₄)

**5. OXIDATION-REDUCTION / REDOX (like a Trading Game ⚡):**
One substance GAINS oxygen (or LOSES hydrogen) = **Oxidised**
One substance LOSES oxygen (or GAINS hydrogen) = **Reduced**
These always happen TOGETHER — you can't have one without the other!
$$\\text{CuO(s) + H}_2\\text{(g)} \\xrightarrow{\\Delta} \\text{Cu(s) + H}_2\\text{O(l)}$$
CuO → Cu: LOSES oxygen → **Reduced** | H₂ → H₂O: GAINS oxygen → **Oxidised**`,
      formulasOrKeyPoints: [
        {
          title: "Memory Trick: OIL RIG",
          content: `**OIL RIG** (Oxidation Is Loss, Reduction Is Gain) — of electrons!

But for Class 10 (NCERT), use the **oxygen/hydrogen definition:**

| Term | Old Definition (NCERT Class 10) | What Happens |
|------|--------------------------------|--------------|
| **Oxidation** | Gain of oxygen OR loss of hydrogen | Substance loses electrons |
| **Reduction** | Loss of oxygen OR gain of hydrogen | Substance gains electrons |
| **Oxidising agent** | Provides oxygen / accepts electrons | Gets REDUCED itself |
| **Reducing agent** | Removes oxygen / donates electrons | Gets OXIDISED itself |`,
          note: "The AGENT undergoes the OPPOSITE reaction. CuO is the oxidising agent and it gets REDUCED. H₂ is the reducing agent and it gets OXIDISED."
        },
        {
          title: "Corrosion & Rancidity — Slow Oxidation in Daily Life",
          content: `**Corrosion:** Slow oxidation of metals by oxygen, moisture, and acids in the environment.
- Iron rusting: $4\\text{Fe(s)} + 3\\text{O}_2\\text{(g)} + x\\text{H}_2\\text{O(l)} \\to 2\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}$ (Rust, hydrated iron oxide, reddish-brown)
- Silver tarnishing: $4\\text{Ag + O}_2 + 2\\text{H}_2\\text{S} \\to 2\\text{Ag}_2\\text{S + 2H}_2\\text{O}$ (Black silver sulphide layer)

**Rancidity:** Oxidation of fats and oils in food, making them smell/taste bad.
- **Prevention methods:** Antioxidants (BHA), vacuum sealing, nitrogen gas flushing in crisp packets, refrigeration, airtight containers.`,
          note: "Antioxidants like Vitamin C and E are reducing agents — they get oxidised instead of the food! Adding antioxidant chips/packets to food preserves freshness."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify reaction type from the equation",
          action: "Count reactants and products. 2 reactants → 1 product = Combination. 1 reactant → 2+ products = Decomposition. Both sides have 2 compounds with ion-swapping = Double Displacement.",
          proTip: "Check for precipitate (↓) — it always signals Double Displacement. Check for colour change in solution — likely Displacement."
        },
        {
          stepNo: 2,
          title: "Identify oxidising and reducing agents in Redox",
          action: "Find what GAINS oxygen → that substance is OXIDISED; the substance that provided that oxygen is the OXIDISING AGENT (and gets reduced). The other substance is the REDUCING AGENT.",
          proTip: "Write 'Oxidised' and 'Reduced' with arrows directly on the equation in board answers for full marks. This shows the examiner you understand what's happening."
        }
      ],
      examinerTraps: [
        {
          trap: "Saying 'the oxidising agent is oxidised' — this is the #1 misconception.",
          correction: "The OXIDISING agent gets REDUCED (it takes in electrons/oxygen). The REDUCING agent gets OXIDISED. Think of it as: the agent that 'causes' something to happen is itself doing the opposite!"
        },
        {
          trap: "Confusing photolytic decomposition examples — using AgCl vs AgBr.",
          correction: "AgCl (silver chloride) is used in the NCERT example for photolytic decomposition. AgBr is used in photography (black-and-white film). Both are correct but specify which one you mean."
        }
      ]
    },
    {
      id: "exothermic_endothermic",
      label: "3. Exothermic vs Endothermic Reactions",
      heading: "Hot Chemistry vs Cold Chemistry",
      subheading: "Heat Released (Exothermic) vs Heat Absorbed (Endothermic)",
      explanation: `**EXOTHERMIC reactions** release energy (as heat, light, or sound) into the surroundings. The products have **LESS energy** than the reactants.

🔥 **Daily Examples:**
- Burning of natural gas (LPG): $\\text{CH}_4 + 2\\text{O}_2 \\to \\text{CO}_2 + 2\\text{H}_2\\text{O} + \\text{Heat}$
- Respiration: $\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\to 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{Energy (ATP)}$
- Explosion of crackers
- Formation of slaked lime: $\\text{CaO + H}_2\\text{O} \\to \\text{Ca(OH)}_2 + \\text{Heat}$

**ENDOTHERMIC reactions** absorb energy from the surroundings. The products have **MORE energy** than the reactants. The surroundings feel cold!

❄️ **Daily Examples:**
- Photosynthesis: $6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{Sunlight}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$
- Decomposition of calcium carbonate: $\\text{CaCO}_3\\text{(s)} \\xrightarrow{\\Delta} \\text{CaO(s) + CO}_2\\text{(g)}$ (needs 1000°C!)
- Dissolving ammonium chloride in water (hand coolers)
- Electrolysis of water`,
      formulasOrKeyPoints: [
        {
          title: "Quick Comparison Table",
          content: `| Feature | Exothermic | Endothermic |
|---------|-----------|-------------|
| Energy | Released into surroundings | Absorbed from surroundings |
| Temperature | Surroundings HEAT UP | Surroundings COOL DOWN |
| Energy of products | Lower than reactants | Higher than reactants |
| NCERT Examples | Burning, respiration, neutralisation, CaO + H₂O | Photosynthesis, CaCO₃ decomposition, electrolysis |`,
          note: "Dissolution of sodium hydroxide (NaOH) in water is highly exothermic — the flask becomes very hot! This is a favourite Board practical question."
        }
      ],
      examinerTraps: [
        {
          trap: "Thinking respiration is endothermic because 'it uses energy'.",
          correction: "Respiration RELEASES energy (ATP) from glucose — it is EXOTHERMIC. Plants capture this energy in photosynthesis, which is ENDOTHERMIC. The exam will ask you to classify respiration — always answer: Exothermic."
        }
      ]
    }
  ]
};
