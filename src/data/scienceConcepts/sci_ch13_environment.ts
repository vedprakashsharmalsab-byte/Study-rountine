import type { ScienceChapterConcept } from "./types";

export const SCI_CH13_CONCEPT: ScienceChapterConcept = {
  chapterNo: 13,
  title: "Our Environment",
  discipline: "Natural Resources",
  weightage: "5 Marks (Board Important)",
  oneLiner: "Ecosystem = living (biotic) + non-living (abiotic); energy flows through food chains/webs (10% rule); human activities cause pollution, ozone depletion, and waste management crises.",
  analogyTitle: "Earth is One Giant Interconnected Restaurant 🌍🍽️",
  analogyContent: `Imagine Earth as a **giant restaurant**:

🌿 **Producers (Plants)** are the kitchen — they cook the ORIGINAL food from sunlight (photosynthesis)
🐰 **Primary consumers** are the customers who eat what the kitchen makes
🦊 **Secondary consumers** eat the primary consumers (like a customer eating the chef who ate the food... ok that's a weird analogy, but you get it!)
🦅 **Top predators** sit at the finest table

The 10% Rule says: Only **10% of the energy** on your plate actually reaches the next level — 90% is wasted as heat and metabolism. That's why the restaurant can only seat a FEW top predators (large animals like lions) but supports MILLIONS of producers at the bottom.

Every time humans pollute or destroy a link in this chain, the ENTIRE restaurant system collapses. We're not separate from this system — we're one of the customers. And we're burning down the kitchen.`,
  sections: [
    {
      id: "ecosystem",
      label: "1. Ecosystem — Components and Food Chains",
      heading: "Biotic, Abiotic, Food Chains, Food Webs & the 10% Energy Rule",
      subheading: "Ecosystem Definition + Producers/Consumers/Decomposers + Energy Flow + Ecological Pyramids",
      explanation: `**ECOSYSTEM:**
A self-sustaining unit that includes all living organisms (biotic components) and non-living factors (abiotic components) in an area, interacting with each other.

**Components:**
- **ABIOTIC (Non-living):** Sunlight, temperature, water, soil, air, minerals, pH
- **BIOTIC (Living):** Producers, consumers, decomposers

**Biotic Components Breakdown:**

**1. PRODUCERS (Autotrophs):**
- Make their own food via photosynthesis (or chemosynthesis)
- All green plants, algae, phytoplankton, cyanobacteria
- **Base of ALL food chains**

**2. CONSUMERS (Heterotrophs):**
| Level | Name | Example |
|-------|------|---------|
| First order (herbivores) | Primary consumers | Grasshopper, Rabbit, Deer, Goat |
| Second order | Secondary consumers | Frog, Fox, Snake |
| Third order | Tertiary consumers | Hawk, Eagle, Large snake |
| Apex predators | Top carnivores | Lion, Crocodile, Killer whale |

**3. DECOMPOSERS (Saprotrophic):**
- Bacteria and fungi that break down dead organisms → release nutrients back to soil
- **Nutrient recyclers** — without them, Earth would be buried in dead matter!
- Examples: Rhizopus (bread mould), Aspergillus, earthworms (detritivores)

---

**FOOD CHAIN:**
Linear sequence of organisms where each feeds on the previous:
$$\\text{Grass} \\to \\text{Grasshopper} \\to \\text{Frog} \\to \\text{Snake} \\to \\text{Eagle}$$
$$\\underbrace{\\text{Producer}}_{} \\to \\underbrace{\\text{1° Consumer}}_{} \\to \\underbrace{\\text{2° Consumer}}_{} \\to \\underbrace{\\text{3° Consumer}}_{} \\to \\underbrace{\\text{4° Consumer}}$$

**FOOD WEB:**
Multiple interconnected food chains in an ecosystem. More realistic! If one species disappears, others can compensate through alternative pathways.

**TROPHIC LEVELS:** Each step in a food chain = one trophic level (Greek: trophe = nutrition)
- **Trophic Level 1:** Producers (plants)
- **Trophic Level 2:** Primary consumers
- **Trophic Level 3:** Secondary consumers
- And so on...

---

**THE 10% ENERGY RULE (Lindemann, 1942):**
Only **10%** of the energy at one trophic level is available to the NEXT trophic level.
The remaining 90% is lost as:
- Heat (during metabolism and respiration)
- Used for organism's own life processes
- Undigested material (faeces)
- Lost to decomposers

$$\\text{Grass gets 10,000 J} \\to \\text{Grasshopper gets 1,000 J (10\\%)} \\to \\text{Frog gets 100 J (10\\%)} \\to \\text{Snake gets 10 J} \\to \\text{Eagle gets 1 J}$$

**WHY FOOD CHAINS ARE RARELY LONGER THAN 4-5 STEPS?**
At each step, only 10% survives. By the 5th step, so little energy remains that it cannot support another level!

---

**ECOLOGICAL PYRAMIDS:**
Diagrammatic representation of trophic structure of an ecosystem.

**Pyramid of Numbers:** Number of organisms at each trophic level
- Usually pyramid-shaped (many producers, few top predators)
- Exception: If producers are large trees and consumers are small insects → INVERTED pyramid!

**Pyramid of Biomass:** Total dry mass of organisms at each trophic level
- Usually pyramid-shaped
- Exception: In marine ecosystems, phytoplankton biomass < zooplankton biomass (inverted) because phytoplankton reproduce very rapidly

**Pyramid of Energy:** Always UPRIGHT — can never be inverted (energy always decreases up the chain)`,
      formulasOrKeyPoints: [
        {
          title: "Biological Magnification (Biomagnification)",
          content: `**Biological Magnification:** The increase in concentration of a non-biodegradable substance (like pesticides, heavy metals) at higher trophic levels.

**Example:** DDT in a lake ecosystem
$$\\underbrace{\\text{Water}}_{0.003 \\text{ ppb}} \\to \\underbrace{\\text{Phytoplankton}}_{0.04 \\text{ ppm}} \\to \\underbrace{\\text{Small fish}}_{0.5 \\text{ ppm}} \\to \\underbrace{\\text{Large fish}}_{2 \\text{ ppm}} \\to \\underbrace{\\text{Fish-eating bird}}_{25 \\text{ ppm}}$$

**Why does this happen?**
- Non-biodegradable chemicals are NOT broken down → accumulate in body fat
- Each animal eats MANY organisms from the level below → accumulates ALL their DDT
- The process multiplies with each trophic level!

**Effects of DDT biomagnification:**
- Eggshell thinning in birds of prey → reproductive failure
- Neurological damage in animals and humans
- Led to major bans on DDT use globally

**Other biomagnifying substances:** Mercury (Minamata disease in Japan), PCBs, lead, arsenic`,
          note: "Biomagnification happens with NON-BIODEGRADABLE substances only. Biodegradable substances (like food waste) are broken down by decomposers and do not accumulate. This distinction is a Board favourite — always specify 'non-biodegradable' when explaining biomagnification."
        }
      ],
      examinerTraps: [
        {
          trap: "Saying decomposers are consumers.",
          correction: "DECOMPOSERS (bacteria and fungi) are neither producers nor consumers — they are a SEPARATE category. They break down DEAD organic matter (not alive) into simpler inorganic substances. Consumers eat LIVING or recently killed organisms. The NCERT classification separates decomposers as a distinct group."
        }
      ]
    },
    {
      id: "human_activities",
      label: "2. Human Impact — Pollution, Ozone & Waste Management",
      heading: "How We're Breaking the Ecosystem & What We Can Do",
      subheading: "Waste Categories + Ozone Depletion + Sustainable Development + 3Rs",
      explanation: `**TYPES OF WASTE:**

**BIODEGRADABLE WASTE:**
- Can be broken down by microorganisms (decomposers) into simple, harmless substances
- Examples: Food scraps, vegetable peels, paper, cotton cloth, leaves, human/animal waste
- Does NOT cause long-term environmental damage (if managed properly)
- Can be composted → valuable organic fertiliser

**NON-BIODEGRADABLE WASTE:**
- Cannot be broken down by natural processes (or takes hundreds/thousands of years)
- Examples: Plastic bags, synthetic fibres (nylon, polyester), pesticides (DDT, BHC), glass, heavy metals (mercury, arsenic, lead), nuclear waste
- CAUSES LONG-TERM ENVIRONMENTAL DAMAGE
- Accumulates in ecosystem → biomagnification
- Challenge: How to safely dispose without harming environment

---

**OZONE LAYER DEPLETION:**

The **Ozone Layer (O₃)** is a region in the stratosphere (15-35 km altitude) that absorbs **99% of harmful UV-B and UV-C radiation** from the Sun.

Without ozone layer:
- Increased skin cancer, cataracts in humans
- DNA damage in all living organisms
- Plankton death → collapse of marine food chains
- Agricultural crop damage

**DEPLETION MECHANISM — Chlorofluorocarbons (CFCs):**
$$\\text{CFC (in stratosphere)} \\xrightarrow{\\text{UV}} \\text{Cl radicals}$$
$$\\text{Cl} + \\text{O}_3 \\to \\text{ClO} + \\text{O}_2 \\quad \\text{(ozone destroyed!)}$$
$$\\text{ClO} + \\text{O} \\to \\text{Cl} + \\text{O}_2 \\quad \\text{(Cl is recycled → destroys more ozone!)}$$

One Cl atom can destroy **100,000 ozone molecules!**

**Sources of CFCs:** Old refrigerators, air conditioners (older models), aerosol sprays, foam packaging.

**Solution:** Montreal Protocol (1987) — global agreement to phase out CFCs. Replaced by HFCs and HCFCs (less damaging but not perfect).

**OZONE HOLE:** Seasonal thinning of ozone layer over Antarctica (and Arctic) each spring. Discovered 1985. Still recovering slowly after CFC ban.

---

**3Rs OF WASTE MANAGEMENT:**
$$\\text{REDUCE} \\to \\text{REUSE} \\to \\text{RECYCLE}$$

**REDUCE:** Use less in the first place → least waste generated
- Buy less packaging, avoid single-use plastics, turn off lights when not needed

**REUSE:** Use things multiple times before disposal
- Glass bottles refilled, cloth bags instead of plastic, repairing instead of replacing

**RECYCLE:** Convert waste into reusable material
- Paper → recycled paper; Glass → new glass; Aluminium → new aluminium (saves 95% energy vs mining!)
- MOST ENERGY-INTENSIVE of the 3Rs → use only when reduce and reuse aren't possible

**COMPOSTING:**
Organic waste → compost (natural fertiliser) through decomposition by microorganisms.
Better than landfill because it returns nutrients to soil and reduces methane emissions.

**SUSTAINABLE DEVELOPMENT:**
Development that meets the needs of the present without compromising the ability of future generations to meet their own needs. (Brundtland Commission, 1987)

Key principles:
- Use renewable energy (solar, wind, hydro)
- Conserve biodiversity
- Reduce pollution and carbon emissions
- Circular economy (design for reuse and recycling)`,
      examinerTraps: [
        {
          trap: "Saying plastic is biodegradable because it breaks into small pieces.",
          correction: "Plastic breaking into MICROPLASTICS is NOT biodegradation. Microplastics are just smaller pieces of the same non-biodegradable polymer — they persist in the environment for hundreds of years, enter the food chain, and have been found even in human blood and breast milk. True biodegradation means microorganisms break the substance down to CO₂, water, and harmless minerals."
        },
        {
          trap: "Confusing the greenhouse effect with ozone depletion.",
          correction: "These are TWO DIFFERENT environmental problems! GREENHOUSE EFFECT: CO₂, CH₄, N₂O trap heat in the lower atmosphere (troposphere) → global warming. OZONE DEPLETION: CFCs destroy ozone in the UPPER atmosphere (stratosphere) → more UV radiation reaches Earth. They have different causes, different gases, and different effects. Ozone is NOT a greenhouse gas in practical terms."
        }
      ]
    }
  ]
};
