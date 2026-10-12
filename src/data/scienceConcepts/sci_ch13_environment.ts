import type { ScienceChapterConcept } from "./types";

export const SCI_CH13_CONCEPT: ScienceChapterConcept = {
  chapterNo: 13,
  title: "Our Environment",
  discipline: "Natural Resources",
  weightage: "5 Marks (High-Scoring Board Chapter)",
  oneLiner: "Ecosystems balance biotic and abiotic components; energy flow is strictly unidirectional (1% solar capture, 10% trophic transfer); non-biodegradable toxins accumulate via biomagnification; stratospheric ozone (O₃) shields UV radiation, rescued by the 1987 UNEP Montreal Protocol.",
  analogyTitle: "The Great Energy Funnel & Toxic Sieve 🌍⏳",
  analogyContent: `Imagine an ecosystem as an **energy pyramid with leaky pipes**:

1. **The 1% Solar Funnel:** The Sun radiates immense energy onto Earth, but green leaves capture only **1% of solar energy** into glucose through photosynthesis!
2. **The 10% Trophic Transfer:** When a deer eats grass, **90% of the energy is lost** as heat of metabolism, movement, and digestion. Only **10%** is stored as deer biomass. When a tiger eats the deer, only **10% of that 10% (1% of the original plant energy)** is transferred! That is why apex predators like lions and eagles are few, and food chains rarely exceed 4 steps.
3. **The Reverse Toxic Sieve (Biomagnification):** While energy thins out by 90% at each step, **non-biodegradable poisons (like DDT)** do NOT leak out! Because predators eat hundreds of prey over their lifespan, poisons accumulate in concentrated doses at the very top of the food chain — in human bodies!`,
  sections: [
    {
      id: "ecosystem_and_energy_flow",
      label: "1. Ecosystem Components, Food Chains & Energy Flow",
      heading: "Biotic & Abiotic Factors, Trophic Levels, 10% Energy Rule & Biomagnification",
      subheading: "Producers/Consumers/Decomposers + 1% Solar Rule + Lindeman's 10% Law + DDT Biomagnification",
      explanation: `**1. ECOSYSTEM & ITS COMPONENTS:**
An ecosystem is a self-sustaining structural and functional unit of the biosphere comprising all living organisms (biotic community) interacting with their physical non-living environment (abiotic components).
- **Abiotic Components:** Physical factors like temperature, sunlight, rainfall, wind, soil, minerals, water, and atmospheric gases.
- **Biotic Components:** Living organisms classified into three ecological categories:
  1. **Producers (Autotrophs):** All green plants, blue-green algae (cyanobacteria), and phytoplankton. Synthesize organic food from inorganic raw materials ($CO_2, H_2O$) using solar energy via photosynthesis.
  2. **Consumers (Heterotrophs):** Organisms that depend directly or indirectly on producers for food:
     - **Herbivores (Primary Consumers):** Feed directly on plants (e.g., deer, grasshopper, goat, cow).
     - **Small Carnivores (Secondary Consumers):** Feed on herbivores (e.g., frog, fox, small birds).
     - **Large Carnivores (Tertiary Consumers):** Feed on secondary consumers (e.g., snake, wolf).
     - **Apex Predators / Top Carnivores:** Sit at the top of the food chain (e.g., lion, tiger, eagle, hawk).
     - **Parasites:** Live on or inside host bodies without immediately killing them (e.g., tapeworm, lice, *Cuscuta* / Amarbel).
  3. **Decomposers (Saprotrophs):** Microorganisms (bacteria and fungi) that break down complex dead organic remains and animal excreta into simple inorganic substances that return to the soil and air.
     - *Crucial Ecological Role:* (1) Act as natural scavengers cleaning the biosphere, (2) Essential for **nutrient recycling** back into the soil so plants can absorb them again.

- **Types of Ecosystems:**
  - **Natural Ecosystems:** Operate under natural conditions without human intervention (e.g., Forests, Grasslands, Oceans, Lakes, Ponds).
  - **Artificial / Man-Made Ecosystems:** Created and maintained by human effort (e.g., **Crop fields / Agricultural land**, **Aquarium**, **Gardens / Parks**).
    - *Why does an aquarium need periodic cleaning unlike a natural pond?* A pond is a self-sustaining balanced natural ecosystem with diverse decomposers, aquatic plants, and natural food chains. An aquarium is an artificial, incomplete ecosystem lacking sufficient natural decomposers; uneaten food and fish waste accumulate as toxic ammonia, requiring filtration and manual water replacement.

---

**2. FOOD CHAINS & FOOD WEBS:**
- **Food Chain:** A linear sequence of living organisms in an ecosystem through which food energy is transferred as one organism eats another:
  $$\\text{Grass (Producer)} \\to \\text{Deer (Primary Consumer)} \\to \\text{Tiger (Secondary Consumer)}$$
  $$\\text{Aquatic: Phytoplankton} \\to \\text{Zooplankton} \\to \\text{Small Fish} \\to \\text{Large Fish} \\to \\text{Fish-eating Bird}$$
- **Food Web:** A network of multiple interconnected food chains in an ecological community. Provides stability; if one species declines, predators have alternative food sources.
- **Trophic Levels:** Each feeding step or level in a food chain represents a trophic level:
  - Trophic Level 1: Producers ($T_1$)
  - Trophic Level 2: Herbivores ($T_2$)
  - Trophic Level 3: Secondary Consumers / Small Carnivores ($T_3$)
  - Trophic Level 4: Tertiary Consumers / Top Carnivores ($T_4$)

---

**3. LAWS OF ENERGY FLOW IN ECOSYSTEMS (Guaranteed Board Physics-Biology Cross):**

1. **Energy Flow is Strictly UNIDIRECTIONAL:**
   - Solar energy captured by autotrophs never reverts back to the Sun.
   - Energy passed from herbivores to carnivores never flows backward to producers.
   - Energy progressively degrades as unusable heat at every successive trophic level.

2. **The 1% Solar Capture Rule (NCERT Specific):**
   - Green plants in a terrestrial ecosystem capture **only about 1% of the solar energy** that falls on their leaves and convert it into chemical food energy via photosynthesis!
   - *Example:* If $1,000,000\\text{ J}$ of sunlight falls on a forest canopy, green plants absorb and convert only **$10,000\\text{ J}$ ($1\\%$)** into plant biomass.

3. **The 10% Law of Energy Transfer (Lindeman's Rule, 1942):**
   - Only an average of **10% of the food energy** consumed at one trophic level is converted into new body biomass and made available to the next trophic level.
   - **90% of energy is lost** as heat during cellular respiration, digestion, locomotion, growth, reproduction, and unassimilated waste.

- **Calculation Example:**
  $$\\text{Sunlight: } 1,000,000\\text{ J} \\xrightarrow{1\\%} \\text{Plants: } 10,000\\text{ J} \\xrightarrow{10\\%} \\text{Deer: } 1,000\\text{ J} \\xrightarrow{10\\%} \\text{Tiger: } 100\\text{ J}$$

- **Why are Food Chains Limited to 3 or 4 Trophic Levels? (Classic 2M Question):**
  - Because 90% of energy is lost at each step, after 3 or 4 trophic levels, the remaining usable energy is so minute that it cannot sustain another population of higher organisms.

---

**4. BIOLOGICAL MAGNIFICATION (BIOMAGNIFICATION):**
- **Definition:** The phenomenon of progressive increase in the concentration of toxic, non-biodegradable chemicals (such as pesticides like DDT, mercury, lead, heavy metals) in the tissues of organisms at each successively higher trophic level of a food chain.
- **Mechanism:**
  1. Non-biodegradable chemicals sprayed on crops wash into soil and water bodies.
  2. Absorbed by aquatic plants and algae along with water.
  3. These chemicals **cannot be degraded by living organisms or excreted**, so they accumulate in body fat.
  4. Each organism at a higher trophic level consumes numerous organisms from the lower level over its lifespan, accumulating their entire chemical load.
- **Consequence:** The **highest concentration of the toxic chemical is always found at the TOP TROPHIC LEVEL** of the food chain (e.g., humans or birds of prey).
- *Board Example:* In a pond treated with DDT:
  $$\\text{Water (0.003 ppb)} \\to \\text{Phytoplankton (0.04 ppm)} \\to \\text{Fish (2 ppm)} \\to \\text{Fish-eating Birds / Humans (25–50 ppm)}$$`,
      formulasOrKeyPoints: [
        {
          title: "Energy & Biomagnification Master Rules",
          content: `$$\\text{Solar Radiation} \\xrightarrow{\\mathbf{1\\%}} \\text{Producers} \\xrightarrow{\\mathbf{10\\%}} \\text{Herbivores} \\xrightarrow{\\mathbf{10\\%}} \\text{Carnivores} \\xrightarrow{\\mathbf{10\\%}} \\text{Top Predators}$$
$$\\text{Energy Flow: Strictly UNIDIRECTIONAL}$$
$$\\text{Toxin Concentration: HIGHEST at the TOP TROPHIC LEVEL (Biomagnification)}$$`,
          note: "Sun to Plant is 1%! Trophic level to Trophic level is 10%! Do not confuse the two percentages in numerical problems."
        }
      ],
      examinerTraps: [
        {
          trap: "Applying 10% rule between sunlight and plants.",
          correction: "Plants capture ONLY 1% of the sunlight falling on leaves into food energy! The 10% rule applies strictly from one trophic level to the next (e.g., plant to herbivore, herbivore to carnivore)."
        },
        {
          trap: "Stating that biodegradable substances undergo biomagnification.",
          correction: "ONLY NON-BIODEGRADABLE substances (pesticides, heavy metals like mercury, DDT) undergo biomagnification. Biodegradable substances are metabolized and broken down by cellular enzymes and decomposers, so they never accumulate."
        }
      ]
    },
    {
      id: "ozone_and_waste_management",
      label: "2. Ozone Layer Depletion & Waste Management",
      heading: "Ozone Chemistry, UNEP Montreal Protocol & Solid Waste Solutions",
      subheading: "O₃ Formation & CFC Breakdown Equations + 1987 Montreal Accord + Biodegradable vs Non-Biodegradable",
      explanation: `**1. THE OZONE LAYER & ITS PROTECTIVE FUNCTION:**
- **Ozone ($O_3$)** is an allotrope of oxygen consisting of three oxygen atoms.
- While ozone is a **deadly poison** at ground level (troposphere), it performs an indispensable protective role in the **stratosphere** (15 to 30 km altitude).
- **Function:** Absorbs **99% of harmful Ultraviolet (UV) radiation** from the Sun, preventing it from reaching the Earth's surface.
- **Harmful Effects of UV Radiation on Living Organisms:**
  - Causes skin cancer and accelerated skin aging in humans.
  - Causes eye cataract and corneal damage.
  - Suppresses human immune system functioning.
  - Destroys microscopic marine phytoplankton, disrupting oceanic food chains.
  - Reduces agricultural crop yields by inhibiting photosynthesis.

---

**2. HOW OZONE IS FORMED IN THE STRATOSPHERE (Chemical Equations):**
Ozone is formed naturally in the upper atmosphere by the action of high-energy UV radiation on molecular oxygen ($O_2$):
1. High-energy UV radiation splits molecular oxygen into free oxygen atoms (nascent oxygen):
   $$O_2 \\xrightarrow{\\text{High energy UV}} O + O \\quad (\\text{Photodissociation})$$
2. These highly reactive free oxygen atoms immediately combine with intact molecular oxygen to form ozone:
   $$O + O_2 \\longrightarrow \\mathbf{O_3} \\quad (\\text{Ozone})$$

---

**3. DEPLETION OF THE OZONE LAYER (CFCs & UNEP Agreement):**
- In the 1980s, atmospheric scientists detected a sharp decline in stratospheric ozone levels, resulting in an "Ozone Hole" over Antarctica.
- **Cause:** Synthetic chemicals called **Chlorofluorocarbons (CFCs)**, widely used as refrigerants in refrigerators, air conditioners, aerosol propellants, and fire extinguishers.
- **Depletion Mechanism:** Stable CFC molecules rise into the stratosphere. UV radiation breaks them apart, releasing reactive **Chlorine free radicals ($Cl^\\bullet$)**. A single chlorine radical can catalytically destroy over **100,000 ozone molecules**:
  $$Cl + O_3 \\longrightarrow ClO + O_2$$
  $$ClO + O \\longrightarrow Cl + O_2 \\quad (\\text{Chlorine radical regenerated to destroy more } O_3)$$

- **The UNEP 1987 Montreal Protocol (Classic 2M Board Question):**
  - In **1987**, the United Nations Environment Programme (**UNEP**) successfully forged a landmark international treaty called the **Montreal Protocol**.
  - All participating nations agreed to **freeze CFC production at 1986 levels** and progressively replace CFCs with safer alternatives (HFCs/HCFCs).
  - It is now globally mandatory for all refrigerator and AC manufacturers to produce **CFC-free cooling appliances**.

---

**4. MANAGING THE GARBAGE WE PRODUCE:**
Human lifestyle changes have resulted in enormous quantities of non-biodegradable packaging waste.

- **Biodegradable vs Non-Biodegradable Waste:**
  - **Biodegradable Substances:** Substances that can be broken down into simple harmless substances by the biological action of saprophytic microorganisms (bacteria and fungi).
    - *Examples:* Vegetable peels, food scraps, paper, cotton, wool, wood, cow dung, human excreta.
  - **Non-Biodegradable Substances:** Substances that cannot be broken down by microorganisms and persist unchanged in the environment for decades or centuries.
    - *Examples:* Plastics, polythene bags, synthetic fibres (nylon), glass, aluminum cans, chemical pesticides (DDT).

- **Why can microorganisms NOT break down plastics? (NCERT Reasoning):**
  - Enzymes produced by bacteria and fungi are **substrate-specific**.
  - Microorganisms have evolved enzymes over millions of years to break down natural organic carbon bonds found in plants and animals.
  - Plastics are synthetic polymers with synthetic chemical linkages that decomposer enzymes cannot recognize or catalyze.

---

**5. METHODS OF SOLID WASTE DISPOSAL:**
1. **Biogas & Composting:** Biodegradable kitchen waste and animal dung are decomposed anaerobically to yield methane-rich biogas (fuel) and nutrient-rich organic manure.
2. **Recycling:** Solid non-biodegradable wastes like paper, glass, plastic bottles, and scrap metals are collected, melted, and remanufactured into new products, conserving raw materials and energy.
3. **Landfills:** Low-lying municipal areas where non-recyclable solid garbage is deposited in compact layers and covered with soil to prevent odor and disease vectors.
4. **Incineration:** Controlled high-temperature combustion of hazardous hospital and infectious biomedical wastes at >1000°C, reducing waste to sterile ash.
5. **Sewage Treatment Plants (STPs):** Municipal wastewater is treated through filtration, aeration, and biological digestion before being released safely into rivers.
6. **The Kulhads vs Plastic vs Paper Cups Debate (NCERT Real-World Case):**
   - Plastic disposable cups littered railway tracks and were non-biodegradable.
   - Clay cups (*kulhads*) were introduced as an alternative, but mass production stripped millions of tons of fertile topsoil, leading to agricultural damage.
   - Today, **disposable biodegradable paper cups** are used because paper is biodegradable, recyclable, and does not deplete fertile topsoil.`,
      formulasOrKeyPoints: [
        {
          title: "Ozone Formation & Depletion Equations",
          content: `$$\\mathbf{O_2 \\xrightarrow{UV} O + O} \\qquad \\mathbf{O + O_2 \\longrightarrow O_3}$$
$$\\text{UNEP 1987: Montreal Protocol froze CFC production at 1986 levels}$$
$$\\text{Enzymes are substrate-specific } \\implies \\text{Cannot decompose synthetic plastics}$$`,
          note: "Ozone is formed in the stratosphere by UV photodissociation of O₂. It is depleted by chlorine radicals released from CFCs."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Ozone Depletion with the Greenhouse Effect / Global Warming.",
          correction: "OZONE DEPLETION is the destruction of stratospheric O₃ by CFCs, allowing harmful UV rays to hit Earth (causes skin cancer/cataracts). GLOBAL WARMING is the trapping of infrared heat in the troposphere by greenhouse gases (CO₂, CH₄), causing climate change. They are two distinct atmospheric phenomena with different gases and consequences."
        }
      ]
    }
  ]
};
