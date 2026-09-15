import type { ScienceChapterConcept } from "./types";

export const SCI_CH3_CONCEPT: ScienceChapterConcept = {
  chapterNo: 3,
  title: "Metals and Non-Metals",
  discipline: "Chemistry",
  weightage: "7–9 Marks (Board High Priority)",
  oneLiner: "Metals lose electrons to form positive ions and conduct electricity; non-metals gain electrons; the reactivity series determines which metal displaces which.",
  analogyTitle: "The 'Power Hierarchy' of the Metal Kingdom",
  analogyContent: `Imagine a school **popularity contest** among metals. At the top of the popularity chart sits **Potassium (K)** — so popular that it violently attacks water just to show off! Then comes **Sodium (Na)**, **Calcium (Ca)**, and so on down the list.

The **Activity Series** is like a school pecking order: a more popular student (more reactive metal) can always **push away** a less popular one from a group (displace it from a salt solution). Iron can kick copper out of copper sulphate solution. Copper cannot kick iron out of iron sulphate. It's all about who's MORE reactive!

Non-metals, on the other hand, are like the **introverts** 🎭 — they prefer to GAIN electrons rather than give them away.`,
  sections: [
    {
      id: "physical_properties",
      label: "1. Physical Properties: Metals vs Non-Metals",
      heading: "Shiny, Malleable & Conductive vs Dull, Brittle & Insulating",
      subheading: "9 Properties Compared with Real-World Examples, Exceptions & CBSE Exam Tips",
      explanation: `### Why Physical Properties Matter

Physical properties are the *observable characteristics* of a substance that can be detected without changing its chemical identity. For metals and non-metals, these differences arise from one root cause: **how their atoms are held together**.

- **Metals:** Atoms are held by the **metallic bond** — a "sea of free electrons" shared across all atoms. These electrons can move → conduct electricity and heat, reflect light (lustre), and allow layers to slide (malleability/ductility).
- **Non-metals:** Atoms are held by **covalent bonds** within individual molecules. Electrons are locked in bonds → cannot flow → poor conductors, no metallic lustre, and layers fracture rather than slide (brittle).

---

### Property 1: Physical State at Room Temperature (25°C)

**Metals:** Almost all metals are **solid** at room temperature. Historically, humans first discovered solid metals — copper (9000 BCE), gold (6000 BCE), iron (1200 BCE) — all hard, dense solids.

> 🔑 **Exception — Mercury (Hg):** The only metal that is **liquid** at room temperature (melting point = −39°C). Used in thermometers. The Romans called it *argentum vivum* — "living silver."

**Non-metals:** Exist in all three states —
- **Gases:** Oxygen (O₂), Nitrogen (N₂), Chlorine (Cl₂), Noble gases (He, Ne, Ar)
- **Solids:** Carbon (C), Sulphur (S), Phosphorus (P), Iodine (I₂), Silicon (Si)
- **Liquid:** Bromine (Br₂) — the only non-metal liquid at room temperature

> ⚠️ **Board Trap:** Students often write "all non-metals are gases." This is WRONG. Most non-metals are solids (carbon forms diamond and graphite!).

---

### Property 2: Lustre (Shininess)

**Metals are lustrous** — they reflect light beautifully. This is because the free electrons in the metallic bond interact with incoming light photons and re-emit them. This is why gold jewellery shines, silver mirrors work, and copper wires are reddish-bright.

**Non-metals are dull** — no free electrons to reflect light. Sulphur is yellow-dull, carbon (graphite) is grey-dull.

> 🔑 **Exception — Iodine (I₂):** A non-metal that has a **lustrous dark grey/silver appearance**. Students sometimes confuse it with a metal. Remember: iodine is non-metallic in all chemical behaviour (gains electrons, poor conductor) but *looks* shiny due to its crystalline structure.

---

### Property 3: Malleability — Can it be hammered into sheets?

**Metals are malleable** — the layers of metal atoms can **slide over each other** without breaking because the electron sea re-adjusts. 

**Examples (chronological importance):**
- **Gold (Au):** Used since 3000 BCE in Egypt. One gram of gold can be hammered into a sheet of 1 square metre (gold leaf). Used in food decoration (edible gold), electronic circuit boards, and space helmets (gold coating blocks UV).
- **Aluminium (Al):** Used since 1827. Aluminium foil (kitchen wrap) is hammered into sheets as thin as 0.006 mm.
- **Copper (Cu):** Used since 5000 BCE. Hammered into coins, vessels, and utensils.

**Non-metals are brittle** — when struck, the covalent bonds break in one direction and the crystal shatters. Sulphur crystals and iodine crystals crumble when hit with a hammer.

> ⚠️ **Board Trap:** Students write "Sodium is not malleable." Actually sodium IS malleable (and ductile) — it's soft enough to be cut with a knife! The soft metals (Na, K) are exceptions to hardness, not to malleability.

---

### Property 4: Ductility — Can it be drawn into wires?

**Metals are ductile.** This means they can be stretched into thin wires without breaking. The metallic bond allows atoms to rearrange under stress.

**Why copper wire everywhere?** Copper has been used in electrical wiring since the 1880s (during the electric revolution of Thomas Edison). It is highly ductile AND an excellent conductor. Gold is even more ductile but too expensive. Tungsten, despite being brittle at room temperature, becomes ductile at high temperatures — so it's used for bulb filaments (which operate at 2500°C).

**Non-metals are non-ductile** — if you try to stretch graphite or sulphur, they snap.

---

### Property 5: Electrical Conductivity

**Metals conduct electricity** because of free electrons. When a voltage is applied, electrons flow from the negative terminal to positive terminal — this is electric current.

**Ranking of electrical conductivity (approximate):**
Silver > Copper > Gold > Aluminium > Iron > Lead > Mercury

> 🔑 **Exception — Graphite (a form of Carbon):** A **non-metal** that **conducts electricity**! In graphite's layered structure, each carbon atom forms only 3 bonds — the 4th electron is free to move between layers. Used in: pencil electrodes in electrolysis experiments, graphite electrodes in steel-making, dry cell batteries.

> ⚠️ **Diamond (also Carbon) does NOT conduct electricity** — all 4 electrons of each carbon atom are locked in covalent bonds. No free electrons!

---

### Property 6: Thermal Conductivity (Heat Conduction)

**Metals conduct heat** through free electron movement AND through lattice vibrations (phonons). Touch an iron rod in a fire — the whole rod heats up quickly.

> 🔑 **Exception — Diamond:** The **best thermal conductor** of any known natural substance (thermal conductivity ≈ 2000 W/m·K, 5× better than copper!). Used in cutting tools and heat sinks in electronics. Despite being a non-metal, diamond conducts heat extremely well through its rigid covalent lattice vibrations.

> 🔑 **Exception — Bismuth (Bi) and Mercury (Hg):** Metals with **very low thermal conductivity** compared to other metals.

---

### Property 7: Melting and Boiling Points

**Metals generally have high melting points** because of strong metallic bonds.

| Metal | Melting Point | Key Use |
|-------|--------------|---------|
| Tungsten (W) | 3422°C (HIGHEST) | Light bulb filaments, rocket nozzles |
| Iron (Fe) | 1538°C | Construction, tools |
| Copper (Cu) | 1085°C | Electrical wiring |
| Aluminium (Al) | 660°C | Foil, aircraft bodies |
| Gallium (Ga) | 29.8°C | Melts in your palm! |
| Mercury (Hg) | −39°C | Liquid at room temp |

**Non-metals generally have low melting points** — oxygen boils at −183°C, nitrogen at −196°C. The exception is Carbon (diamond) which melts above 3500°C.

---

### Property 8: Density

**Metals are generally dense.** Most metals are denser than water (density > 1 g/cm³). Gold has density 19.3 g/cm³ — 19× denser than water!

> 🔑 **Exceptions — Light Metals:** Lithium (Li) = 0.53 g/cm³, Sodium (Na) = 0.97 g/cm³, Potassium (K) = 0.86 g/cm³ — all float on water! This is why Na and K react violently WITH water (they float and react simultaneously).

**Non-metals are generally less dense** — gases are especially low density. But diamond has density 3.5 g/cm³, which is higher than many metals.

---

### Property 9: Sonority (Sound Production)

**Metals are sonorous** — when struck, they produce a ringing, resonant sound (long-lasting vibration). The free electrons transmit sound waves very efficiently through the metal lattice.

**Examples:** Church bells (bronze = Cu + Sn), temple bells (brass = Cu + Zn), tuning forks (steel). School bells. Coins ringing when dropped.

**Non-metals are non-sonorous** — they produce a dull thud when struck. Sulphur, phosphorus, or plastic makes no ring.`,
      formulasOrKeyPoints: [
        {
          title: "📊 Complete Physical Properties Comparison Table",
          content: `| Property | Metals | Non-Metals | Real Example | Exception |
|----------|--------|------------|--------------|-----------|
| **State at 25°C** | Solid (mostly) | Gas / Solid / Liquid | Fe = solid, O₂ = gas | **Hg** = liquid metal; **Br₂** = liquid non-metal |
| **Lustre** | Shiny / Lustrous | Dull / Non-lustrous | Gold shines, Sulphur is dull | **Iodine** = lustrous non-metal |
| **Malleability** | Yes — hammered into sheets | No — shatters (brittle) | Gold leaf (1g → 1 m²) | Na, K are soft but still malleable |
| **Ductility** | Yes — drawn into wires | No — non-ductile | Copper electrical wires | Tungsten is brittle at RT but ductile at high T |
| **Electrical Conductivity** | Yes — free electrons flow | No — electrons are fixed | Copper wiring, Silver contacts | **Graphite** (C) conducts electricity! |
| **Thermal Conductivity** | Yes — good conductors | No — poor conductors | Iron pan, Copper vessel | **Diamond** (C) = best thermal conductor! |
| **Melting / Boiling Point** | High | Low | W melts at 3422°C | **Ga** melts at 29.8°C; **Hg** melts at −39°C |
| **Density** | High (generally) | Low (generally) | Gold = 19.3 g/cm³ | **Na, K, Li** are lighter than water! |
| **Sonority** | Sonorous — ringing sound | Non-sonorous — dull thud | Bell, coin ringing | — |`,
          note: "Diamond and Graphite are BOTH forms of pure Carbon (allotropes), yet they have OPPOSITE properties: Diamond is the hardest natural substance, best heat conductor, but does NOT conduct electricity. Graphite is soft, good electrical conductor, but poor heat conductor. This contrast is a favourite CBSE board question!"
        },
        {
          title: "🧠 Memory Trick — Metal vs Non-Metal Properties",
          content: `Remember metals with the word **\"MOLDS\"**:

- **M**alleable and **M**elting point is high
- **O**paque with **O**wn lustre (shiny)
- **L**uster — shines due to free electron reflection
- **D**uctile — drawn into wires
- **S**onorous — rings when struck + **S**olid at room temp (mostly)

Non-metals are the **opposite of all of the above**, with three major exceptions to always write in exams:
1. **Graphite** conducts electricity (non-metal that conducts)
2. **Iodine** has lustre (non-metal that is shiny)
3. **Bromine** is liquid (non-metal that is not a gas/solid)
4. **Diamond** is the best thermal conductor (non-metal that conducts heat)`,
          note: "In CBSE board exams, questions like 'Name a non-metal that is lustrous' or 'Which non-metal conducts electricity?' appear almost every year. Iodine and Graphite are the two answers to memorise."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing 'all non-metals are gases' or 'all metals are hard solids'.",
          correction: "Non-metals exist as solids (C, S, P, I₂, Si), liquids (Br₂), and gases (O₂, N₂, Cl₂). Metals: Mercury (Hg) is a liquid metal. Sodium (Na) and Potassium (K) are soft metals easily cut with a knife. Gallium melts at body temperature (29.8°C)."
        },
        {
          trap: "Saying 'Diamond does not conduct heat because it's a non-metal.'",
          correction: "Diamond is the BEST natural thermal conductor (better than copper or silver). It conducts heat through lattice vibrations (phonons), not through free electrons. However, diamond does NOT conduct electricity (no free electrons). Write this distinction clearly in 3-mark questions."
        },
        {
          trap: "Confusing Graphite with Diamond when asked about electrical conduction.",
          correction: "Graphite conducts electricity (has delocalized π electrons between layers). Diamond does NOT conduct electricity (all 4 electrons of each carbon are in covalent bonds, none are free). Both are allotropes of Carbon, but behave oppositely in electrical conductivity."
        }
      ]
    },
    {
      id: "chemical_properties",
      label: "2. Chemical Properties of Metals",
      heading: "How Metals React with Air, Water, Acids & Salt Solutions",
      subheading: "4 Key Reaction Types + Ionic Bond Formation + Amphoteric Metals",
      explanation: `**METALS REACT WITH:**

**1. Oxygen (Air/Combustion):**
- Very reactive metals (Na, K): Burn vigorously, react even with cold water
  $$4\\text{Na(s) + O}_2\\text{(g)} \\to 2\\text{Na}_2\\text{O(s)}$$
- Moderately reactive (Mg, Al, Zn, Fe): Form oxide layer (surface passivation)
  $$2\\text{Mg(s) + O}_2\\text{(g)} \\to 2\\text{MgO(s)}$$ (Dazzling white flame)
- Less reactive (Cu): Forms black CuO layer on heating
  $$2\\text{Cu(s) + O}_2\\text{(g)} \\to 2\\text{CuO(s)}$$ (Black coating)
- Unreactive (Ag, Au): Do NOT react with oxygen even on heating — that's why gold stays shiny!

**2. Water:**
- Sodium: $2\\text{Na(s) + 2H}_2\\text{O(l)} \\to 2\\text{NaOH(aq) + H}_2\\text{(g)}\\uparrow$ (violent, floats and catches fire!)
- Potassium: Even more violent than sodium — reacts with cold water, catches fire
- Iron: Does NOT react with cold/hot water, only with **steam**:
  $$3\\text{Fe(s) + 4H}_2\\text{O(g)} \\to \\text{Fe}_3\\text{O}_4\\text{(s) + 4H}_2\\text{(g)}\\uparrow$$ (at red heat)
- Copper, silver, gold: NO reaction with water at all

**3. Dilute Acids:**
$$\\text{Metal + Dilute Acid} \\to \\text{Salt + H}_2\\text{(g)}\\uparrow$$
$$\\text{Zn(s) + H}_2\\text{SO}_4\\text{(dil)} \\to \\text{ZnSO}_4\\text{(aq) + H}_2\\text{(g)}\\uparrow$$
⚠️ Cu, Ag, Au do NOT react with dilute acids (below hydrogen in the series).

**4. Salt Solutions (Displacement):**
$$\\text{Fe(s) + CuSO}_4\\text{(aq)} \\to \\text{FeSO}_4\\text{(aq) + Cu(s)}$$
Iron (more reactive) displaces Copper (less reactive). The blue solution fades and reddish copper deposits on iron nail.

**AMPHOTERIC OXIDES (Metal oxides reacting with BOTH acids and bases to form salt and water):**
- **Aluminium Oxide ($\\text{Al}_2\\text{O}_3$):**
  - With Acid (acting as basic oxide):
    $$\\text{Al}_2\\text{O}_3\\text{(s)} + 6\\text{HCl(aq)} \\to 2\\text{AlCl}_3\\text{(aq)} + 3\\text{H}_2\\text{O(l)}$$
  - With Base (acting as acidic oxide):
    $$\\text{Al}_2\\text{O}_3\\text{(s)} + 2\\text{NaOH(aq)} \\xrightarrow{\\Delta} 2\\text{NaAlO}_2\\text{(aq)} + \\text{H}_2\\text{O(l)}$$ *(Sodium aluminate)*
- **Zinc Oxide ($\\text{ZnO}$):**
  - With Acid:
    $$\\text{ZnO(s)} + 2\\text{HCl(aq)} \\to \\text{ZnCl}_2\\text{(aq)} + \\text{H}_2\\text{O(l)}$$
  - With Base:
    $$\\text{ZnO(s)} + 2\\text{NaOH(aq)} \\xrightarrow{\\Delta} \\text{Na}_2\\text{ZnO}_2\\text{(aq)} + \\text{H}_2\\text{O(l)}$$ *(Sodium zincate)*

**AMPHOTERIC METALS (react with BOTH acids AND bases to liberate H₂ gas):**
$$2\\text{Al(s)} + 2\\text{NaOH(aq)} + 2\\text{H}_2\\text{O(l)} \\xrightarrow{\\Delta} 2\\text{NaAlO}_2\\text{(aq)} + 3\\text{H}_2\\text{(g)}\\uparrow$$
$$\\text{Zn(s)} + 2\\text{NaOH(aq)} \\xrightarrow{\\Delta} \\text{Na}_2\\text{ZnO}_2\\text{(aq)} + \\text{H}_2\\text{(g)}\\uparrow$$`,
      formulasOrKeyPoints: [
        {
          title: "The Activity Series (Reactivity Series) — MUST MEMORISE",
          content: `From **Most Reactive** to **Least Reactive:**

| Position | Metal | Key Memory Point |
|----------|-------|-----------------|
| 1 | **K** (Potassium) | Violently reacts with cold water, self-ignites |
| 2 | **Na** (Sodium) | Reacts vigorously with cold water, floats |
| 3 | **Ca** (Calcium) | Reacts moderately with cold water |
| 4 | **Mg** (Magnesium) | Reacts slowly with cold water, fast with hot |
| 5 | **Al** (Aluminium) | Reacts with steam and dilute acids |
| 6 | **Zn** (Zinc) | Reacts with steam and dilute acids; amphoteric |
| 7 | **Fe** (Iron) | Reacts only with steam (not liquid water) |
| 8 | **Pb** (Lead) | Reacts with dilute acids |
| 9 ← | **H** (Hydrogen) | REFERENCE POINT |
| 10 | **Cu** (Copper) | No reaction with water or dilute acids |
| 11 | **Ag** (Silver) | Only reacts with concentrated acids |
| 12 | **Au** (Gold) | Practically inert — reacts with Aqua Regia only |

**MNEMONIC:** Please Stop Calling Me A Zebra For I Like Cats Sleeping Gallantly
(K, Na, Ca, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au...)`,
          note: "Metals ABOVE hydrogen displace H₂ from dilute acids. Metals BELOW hydrogen (Cu, Ag, Au) do NOT. This is the most important rule from the Activity Series for Board exams."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing Fe + H₂O(l) → reaction at room temperature.",
          correction: "Iron does NOT react with cold water or even hot liquid water. Iron reacts ONLY with STEAM (H₂O as gas) at red-hot temperatures to form Fe₃O₄. Writing liquid water state symbol (l) loses marks."
        }
      ]
    },
    {
      id: "ionic_bonding",
      label: "3. Ionic Bond Formation & Properties",
      heading: "The Electron Transfer: Creating Salt from Metal + Non-Metal",
      subheading: "Electron Dot Structures + Electrovalent Bond + Properties of Ionic Compounds",
      explanation: `**How ionic bonds form:** Metals GIVE electrons → form positive ions (cations). Non-metals TAKE electrons → form negative ions (anions). The opposite charges attract each other — creating an **ionic bond** (electrovalent bond).

**Example: Formation of NaCl (Sodium Chloride)**

*Step 1:* Sodium atom (Na): Electronic configuration 2,8,1 → **gives** 1 electron → Na⁺ (2,8) — now has noble gas configuration of Neon!

*Step 2:* Chlorine atom (Cl): Electronic configuration 2,8,7 → **receives** 1 electron → Cl⁻ (2,8,8) — now has noble gas configuration of Argon!

*Step 3:* Na⁺ and Cl⁻ attract each other → form NaCl crystal lattice

**Example: Formation of MgO (Magnesium Oxide)**

Mg: 2,8,2 → gives 2 electrons → Mg²⁺ (2,8)
O: 2,6 → receives 2 electrons → O²⁻ (2,8)
→ MgO (magnesium oxide)

**Properties of Ionic Compounds:**
1. **High melting and boiling points** — strong electrostatic forces between ions require lots of energy to break
2. **Conduct electricity in molten or aqueous state** — ions are free to move; but NOT in solid state (ions are locked in lattice)
3. **Soluble in water** (mostly), insoluble in organic solvents (petrol, kerosene)
4. **Crystalline structure** — regular geometric shapes`,
      formulasOrKeyPoints: [
        {
          title: "Electron Dot Structure of Ionic Bond Formation",
          content: `**NaCl formation:**

Na (2,8,1) donates 1e⁻ → Na⁺ (2,8) 
Cl (2,8,7) accepts 1e⁻ → Cl⁻ (2,8,8)

$$\\text{Na} \\cdot + \\cdot \\overset{\\cdot\\cdot}{\\underset{\\cdot\\cdot}{\\text{Cl}}} \\cdot \\to [\\text{Na}]^+ [\\overset{\\cdot\\cdot}{\\underset{\\cdot\\cdot}{\\text{Cl}}}:]^-$$

**MgCl₂ formation:** 

Mg (2,8,2) gives 2 electrons, one to each Cl
→ Mg²⁺ + 2Cl⁻ → MgCl₂

**Al₂O₃ formation:**

Al (2,8,3) gives 3 electrons → Al³⁺
O (2,6) takes 2 electrons → O²⁻
2Al³⁺ + 3O²⁻ → Al₂O₃ (cross-swap valency rule!)`,
          note: "Cross-multiplication rule: Mg²⁺ + O²⁻ → MgO (2÷2 simplifies to 1:1). But Al³⁺ + O²⁻ → Al₂O₃ (subscripts are 2 and 3 from the valencies 3 and 2)."
        }
      ],
      examinerTraps: [
        {
          trap: "Saying ionic compounds conduct electricity in solid state.",
          correction: "Ionic compounds DO NOT conduct electricity in solid state because the ions are fixed in the crystal lattice and cannot move. They conduct electricity only when DISSOLVED in water (aq) or when MELTED (molten) — because only then do the ions become free to move."
        }
      ]
    },
    {
      id: "extraction_metals",
      label: "4. Occurrence & Extraction of Metals",
      heading: "From Ore to Pure Metal — The Metallurgy Journey",
      subheading: "Minerals, Ores, Gangue + Concentration + Reduction + Refining",
      explanation: `**Key Terms:**
- **Mineral:** A naturally occurring substance containing metals (many exist but not all are economically viable)
- **Ore:** A mineral from which a metal can be profitably extracted
- **Gangue (Matrix):** The earthly impurities mixed with the ore (sand, clay, rocks)

**Steps in Extraction of Metals:**

**Step 1 — Concentration of Ore (Enrichment):**
Remove gangue from ore. Methods:
- **Gravity separation** (dense metal sinks, light gangue floats)
- **Froth flotation** (ore particles stick to froth, gangue sinks — used for sulphide ores)
- **Magnetic separation** (for magnetic ores like Fe₃O₄)
- **Chemical leaching** (dissolve ore in chemical reagent — Bauxite/Al ore leached with NaOH)

**Step 2 — Converting Concentrated Ore into Metal Oxide:**
It is much easier to reduce a metal oxide to metal than a sulphide or carbonate ore.
- **Roasting (for Sulphide Ores):** Strongly heating the ore in the **EXCESS** presence of air:
  $$2\\text{ZnS(s) [Zinc Blende]} + 3\\text{O}_2\\text{(g)} \\xrightarrow{\\Delta} 2\\text{ZnO(s)} + 2\\text{SO}_2\\text{(g)}\\uparrow$$
  $$2\\text{HgS(s) [Cinnabar]} + 3\\text{O}_2\\text{(g)} \\xrightarrow{\\Delta} 2\\text{HgO(s)} + 2\\text{SO}_2\\text{(g)}\\uparrow$$
  $$2\\text{HgO(s)} \\xrightarrow{\\Delta} 2\\text{Hg(l)} + \\text{O}_2\\text{(g)}$$
- **Calcination (for Carbonate Ores):** Strongly heating the ore in the **LIMITED or ABSENCE** of air:
  $$\\text{ZnCO}_3\\text{(s) [Calamine]} \\xrightarrow{\\Delta} \\text{ZnO(s)} + \\text{CO}_2\\text{(g)}\\uparrow$$

**Step 3 — Reduction of Metal Oxide to Metal:**
- **Reduction with Carbon (Coke):**
  $$\\text{ZnO(s)} + \\text{C(s)} \\xrightarrow{\\Delta} \\text{Zn(s)} + \\text{CO(g)}\\uparrow$$
- **Blast Furnace Reduction for Iron:**
  $$\\text{Fe}_2\\text{O}_3\\text{(s)} + 3\\text{CO(g)} \\xrightarrow{\\Delta} 2\\text{Fe(l)} + 3\\text{CO}_2\\text{(g)}\\uparrow$$
- **Thermite Reaction (Aluminothermy for welding railway tracks):**
  $$\\text{Fe}_2\\text{O}_3\\text{(s)} + 2\\text{Al(s)} \\xrightarrow{\\text{Ignition}} 2\\text{Fe(l)} + \\text{Al}_2\\text{O}_3\\text{(s)} + \\text{Heat (3000^\\circ\\text{C})}$$
  The enormous heat melts the iron metal, which flows into and welds the cracked rails.
- **Electrolytic Reduction (for high-reactivity metals K, Na, Ca, Mg, Al):**
  These metals have higher affinity for oxygen than carbon does, so carbon cannot reduce them!
  $$2\\text{Al}_2\\text{O}_3\\text{(l)} \\xrightarrow{\\text{Electrolysis}} 4\\text{Al(l) [Cathode]} + 3\\text{O}_2\\text{(g) [Anode]}$$
  (Molten cryolite $\\text{Na}_3\\text{AlF}_6$ is added to lower the melting point of alumina from 2045°C to ~1000°C and increase conductivity).

**Step 4 — Electrolytic Refining (Purification):**
- **Anode (+):** Impure copper rod: $\\text{Cu(s)} \\to \\text{Cu}^{2+}\\text{(aq)} + 2e^-$
- **Cathode (−):** Pure copper strip: $\\text{Cu}^{2+}\\text{(aq)} + 2e^- \\to \\text{Cu(s)}$ (pure copper deposits)
- **Electrolyte:** Acidified copper sulphate ($\\text{CuSO}_4$) solution.
- **Anode mud:** Insoluble noble impurities (Ag, Au, Pt) settle at the bottom below the anode.`,
      formulasOrKeyPoints: [
        {
          title: "Corrosion Prevention Methods",
          content: `**Corrosion** = slow destruction of metals by reaction with oxygen, moisture, acids.

Iron + O₂ + H₂O → Fe₂O₃·xH₂O (Rust, reddish-brown)

**Prevention Methods:**
| Method | How it works | Example |
|--------|-------------|---------|
| Painting | Physical barrier from air+water | Iron gates, ships |
| Galvanisation | Zinc coat reacts first (sacrificial) | Buckets, pipes |
| Tinning | Tin coating (food-safe) | Tin cans |
| Electroplating | Chromium/nickel layer | Bicycle handlebars |
| Alloying | Mix with non-corroding metals | Stainless steel (Fe+Cr+Ni) |
| Sacrificial protection | More reactive metal attached (Mg, Zn) | Ship hulls |

**Galvanisation:** Zinc coat on iron works even if scratched — Zn is more reactive and gets oxidised first (sacrificial anode), protecting the iron underneath.`,
          note: "Galvanisation protects iron even when the zinc layer is scratched. Tin plating does NOT protect if scratched — the exposed iron rusts even faster because tin is less reactive and acts as cathode, making iron the anode!"
        },
        {
          title: "CBSE Board Master Guide: Commercial Alloys",
          content: `An **alloy** is a homogeneous mixture of two or more metals, or a metal and a non-metal.

| Alloy | Constituent Elements | Key Property | Common Applications |
|-------|----------------------|--------------|---------------------|
| **Brass** | Copper + Zinc (Cu + Zn) | Malleable, corrosion resistant | Musical instruments, decorative hardware |
| **Bronze** | Copper + Tin (Cu + Sn) | Tough, low friction, resonant | Medals, statues, bells, coins |
| **Solder** | Lead + Tin (Pb + Sn) | Exceptionally low melting point | Welding and joining electrical wires |
| **Stainless Steel** | Iron + Nickel + Chromium + Carbon (Fe+Ni+Cr+C) | Extremely hard, zero rusting | Surgical instruments, cookware, cutlery |
| **Amalgam** | Liquid Mercury + Other metal (Hg + Ag/Sn) | Malleable paste that hardens | Dental fillings |
| **22-Karat Gold** | 22 parts Gold + 2 parts Copper or Silver | Rigid, hard (24K pure gold is too soft) | Making durable jewelry |`,
          note: "CBSE Board Examiner Mnemonic: 'BroNZ' contains 'Z' in sound, so it does NOT have Zinc — Bronze is Cu + Sn. 'BraSS' has two 'S's and pairs with Zinc (Cu + Zn)."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Roasting with Calcination in chemical extraction equations.",
          correction: "Mnemonic: Calcination starts with 'C' for Carbonate ores, requiring limited/no air and releasing CO₂. Roasting is for Sulphide ores, requiring excess air (O₂) and releasing SO₂ gas."
        },
        {
          trap: "Thinking gold and silver are found as ores that need chemical extraction.",
          correction: "Gold and silver are so unreactive that they occur in FREE STATE (native state) in nature. They don't need chemical reduction — just physical separation (panning, crushing). Only moderately and highly reactive metals need chemical extraction from ores."
        }
      ]
    }
  ]
};
