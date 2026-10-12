import type { ScienceChapterConcept } from "./types";

export const SCI_CH6_CONCEPT: ScienceChapterConcept = {
  chapterNo: 6,
  title: "Control and Coordination",
  discipline: "Biology",
  weightage: "6–7 Marks (Board Important)",
  oneLiner: "The nervous system (rapid electrical impulses via neurons) and endocrine system (chemical hormones secreted into blood) coordinate all physiological actions; plants utilize phytohormones and turgor/tropic movements.",
  analogyTitle: "The Dual-Speed Command & Communications Network",
  analogyContent: `Imagine an emergency response command center operating two distinct communication channels:
1. **High-Speed Fiber-Optic Grid (Nervous System):** Point-to-point electrical lines that fire at speeds up to 100–120 m/s. When your hand touches a hot stove, the sensory line alerts the local spinal junction, and a motor command jerk-reflexes the arm muscles in a fraction of a second.
2. **Global Wireless Broadcast Broadcasts (Endocrine System):** Ductless endocrine glands release specialized molecular messengers (hormones) into the circulating bloodstream. While slower to disperse, they reach every receptive cell across the entire body simultaneously, regulating prolonged metabolic adjustments — such as Adrenaline elevating cardiac output during stress, or Insulin balancing systemic glucose.`,
  sections: [
    {
      id: "nervous_system",
      label: "1. The Nervous System, Synapse & Reflex Arc",
      heading: "Neuron Anatomy, Synaptic Neurotransmission & Human Brain Protection",
      subheading: "Neuron Structure + Synaptic Cleft + Reflex Arc Pathway + Cranial Divisions + Protective Meninges",
      explanation: `**The Neuron (Nerve Cell):**
The structural and functional unit of the nervous system, specialized for receiving, conducting, and transmitting electrical impulses.

#### Structural Architecture of a Neuron:
1. **Dendrites:** Branched, tree-like cytoplasmic extensions that receive chemical stimuli from receptors or preceding neurons, converting them into an **electrical impulse**.
2. **Cyton (Cell Body / Soma):** Contains the nucleus, cytoplasm, and Nissl's granules; integrates incoming electrical signals.
3. **Axon:** A single, elongated cylindrical fiber that conducts the electrical impulse **away from the cyton** toward the terminal arborization.
4. **Myelin Sheath & Schwann Cells:** Insulating lipid layer surrounding the axon that accelerates nerve impulse transmission via saltatory conduction.
5. **Axon Terminals (Nerve Endings / Synaptic Knobs):** Bulbous ends that synthesize and store chemical **neurotransmitters** (e.g., Acetylcholine).

---

### The Synapse (Synaptic Transmission):
A **synapse** is the microscopic functional gap between the axon terminal of one neuron and the dendrite of the adjacent neuron.
- **How Signals Cross the Synapse (Board 2-Mark Question):**
  1. An electrical impulse travels along the axon to reach the nerve ending.
  2. At the synaptic knob, the electrical signal triggers the release of tiny vesicles containing chemical messengers called **neurotransmitters**.
  3. These chemical molecules diffuse across the narrow fluid-filled synaptic cleft.
  4. They bind to specific protein receptors on the dendrite of the next neuron.
  5. This chemical binding sets off a **fresh electrical impulse** in the receiving neuron!
  *Unidirectional Rule:* Nerve impulses can travel across a synapse in **only one direction** because neurotransmitters are stored exclusively in axon terminals, and receptor proteins are located exclusively on dendrites.

---

### Reflex Action and Reflex Arc (NCERT Core Concept):
- **Reflex Action:** An extremely rapid, automatic, involuntary motor response to an environmental stimulus that protects the body from tissue injury **without requiring conscious intervention by the brain**.
- **Reflex Arc (The Exact Anatomical Pathway):**
  $$\\text{Stimulus (Heat)} \\to \\underbrace{\\text{Receptor (Skin)}}_{\\text{Thermoreceptor}} \\xrightarrow{\\text{Sensory Neuron (Afferent)}} \\underbrace{\\text{Spinal Cord (Relay Neuron)}}_{\\text{Central Processing}} \\xrightarrow{\\text{Motor Neuron (Efferent)}} \\underbrace{\\text{Effector (Biceps Muscle)}}_{\\text{Pulls hand away!}}$$
- *Why the Spinal Cord Acts Before the Brain:*
  In situations involving acute physical hazard (e.g. touching fire), signal conduction all the way to the cerebral cortex for conscious contemplation would take hundreds of milliseconds, resulting in severe burns. The spinal cord acts as an autonomous relay junction to trigger the muscle reflex immediately; sensory signals simultaneously travel up to the brain so you register the pain *after* your hand has already pulled away.

---

### The Human Brain (Central Nervous System):
Protected by three physical defense mechanisms:
1. **Cranium (Bony Skull / Brain Box):** Hard osseous protection against impact.
2. **Meninges:** Three protective membranes (Dura mater, Arachnoid, Pia mater) covering the brain and spinal cord.
3. **Cerebrospinal Fluid (CSF):** Fills the subarachnoid space and cerebral ventricles, acting as a **hydraulic shock absorber** and nutrient exchange medium.

#### Three Anatomical Divisions of the Human Brain:
1. **Forebrain (Prosencephalon):**
   - **Cerebrum:** Largest part of the brain; divided into left and right hemispheres.
     * Center for conscious thought, intelligence, memory, learning, reasoning, personality, and emotions.
     * Receives sensory inputs (vision, hearing, smell, taste, touch) in dedicated sensory areas.
     * Contains motor areas that control all voluntary muscle movements.
     * Contains the **hunger center** that signals when the stomach is full.
2. **Midbrain (Mesencephalon):**
   - Coordinates involuntary reflex movements of the head, neck, and trunk in response to sudden visual and auditory stimuli.
   - Controls eye reflexes, including changes in pupil size.
3. **Hindbrain (Rhombencephalon):**
   - **Cerebellum:** Coordinates precision of voluntary motor movements and maintains **posture and equilibrium/balance** of the body (e.g. walking in a straight line, riding a bicycle, picking up a pen).
   - **Medulla Oblongata:** Controls vital **involuntary actions and autonomic reflexes**: blood pressure, heart rate, breathing, salivation, swallowing, coughing, sneezing, and vomiting. Damage to medulla is fatal.
   - **Pons:** Acts as a bridge connecting different brain regions; regulates the respiratory rhythm with the medulla.`,
      formulasOrKeyPoints: [
        {
          title: "Reflex Arc Pathway Flowchart",
          content: `$$\\boxed{\\text{Receptor (Sense Organ)}} \\xrightarrow{\\text{Sensory Neuron}} \\boxed{\\text{Spinal Cord (Relay Neuron)}} \\xrightarrow{\\text{Motor Neuron}} \\boxed{\\text{Effector (Muscle / Gland)}} \\to \\text{Response}$$

**Sensory vs Motor Neurons:**
- **Sensory (Afferent) Neurons:** Conduct impulses from sense organs/receptors **TOWARDS** the central nervous system (CNS).
- **Motor (Efferent) Neurons:** Conduct impulses **AWAY** from the CNS towards effectors (muscles or endocrine glands).`,
          note: "Examiner Tip: Always include the Relay neuron situated inside the grey matter of the spinal cord when drawing the reflex arc."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Label a Neuron Diagram for Board Exams",
          action: "Draw Cyton/Cell body with nucleus and radiating Dendrites → Draw Axon with cylindrical Myelin sheath segments → Draw Axon terminal arborizations with synaptic knobs.",
          proTip: "Impulse direction is ALWAYS: Dendrite → Cyton → Axon → Axon terminal."
        }
      ],
      examinerTraps: [
        {
          trap: "Stating that reflex actions are controlled by the brain.",
          correction: "Reflex actions are mediated and initiated directly by the SPINAL CORD. The brain is only informed of the event after the reflex motor action has already been executed."
        },
        {
          trap: "Confusing the functions of Cerebrum and Cerebellum.",
          correction: "Cerebrum = Thinking, memory, sensory perception, voluntary intentions. Cerebellum = Balance, equilibrium, posture, and mechanical precision of movements."
        }
      ]
    },
    {
      id: "plant_movements",
      label: "2. Plant Movements: Tropic, Nastic & Phytohormones",
      heading: "Growth Tropisms, Sensitive Plant Turgor Dynamics & Plant Hormones",
      subheading: "Tropic (Directional) vs Nastic (Non-directional) + Auxin, Gibberellin, Cytokinin, ABA, Ethylene",
      explanation: `Plants lack muscles and nervous tissue, yet they respond to environmental stimuli through two distinct classes of movement:

### 1. TROPIC MOVEMENTS (Tropisms — Directional & Growth-Dependent):
Slow, directional growth responses toward (+) or away from (-) an environmental stimulus:
- **Phototropism (Light Stimulus):**
  * Shoots are **positively phototropic** (bend towards directional light).
  * Roots are **negatively phototropic** (grow away from light).
  * *Mechanism of Shoot Phototropism (Auxin action):*
    Auxin synthesized at the shoot tip diffuses toward the **shaded side** of the stem. The higher auxin concentration on the dark side stimulates cells on that side to **elongate more** than cells on the illuminated side. Consequently, the stem bends towards the light!
- **Geotropism / Gravitropism (Gravity Stimulus):**
  * Roots show **positive geotropism** (grow downwards towards gravity).
  * Shoots show **negative geotropism** (grow upwards against gravity).
- **Hydrotropism (Water Stimulus):**
  * Roots grow towards localized soil moisture (**positive hydrotropism**), overriding gravity if water is scarce.
- **Chemotropism (Chemical Stimulus):**
  * Growth of the **pollen tube towards the ovule** through the style during fertilization in response to sugary chemical attractants secreted by the ovary.
- **Thigmotropism (Touch/Contact Stimulus):**
  * Tendrils of climbing plants (peas, bitter gourd) coil around structural supports. The part of the tendril in direct contact with the support grows slower, while the opposite side grows rapidly, causing the tendril to coil tightly.

---

### 2. NASTIC MOVEMENTS (Immediate Response to Stimulus — Growth-Independent):
Rapid, non-directional movements where the direction of response is independent of the direction of the stimulus.
- **NCERT Benchmark: The Sensitive Plant (*Mimosa pudica* / Touch-me-not / Chhui-mui):**
  * When touched, the leaflets immediately fold up and the entire leaf droops downward within seconds!
  * **Mechanism (Changes in Turgor Pressure):**
    At the base of each petiole and leaflet is a swollen pad of specialized cells called the **Pulvinus**.
    1. Touch stimulus generates an electrical-chemical signal that travels from cell to cell.
    2. Cells in the lower half of the pulvinus rapidly lose potassium ions ($K^+$) and water into intercellular spaces.
    3. Loss of water causes a sudden **loss of turgor pressure** (cells become flaccid).
    4. The weight of the leaf causes it to collapse and droop.
    5. After 15–20 minutes, water is reabsorbed, turgor is restored, and the leaf re-opens.
  * *Critical Distinction:* Nastic movement involves NO growth; it is driven entirely by reversible water displacement!

---

### Master Contrast: Tropic vs Nastic Movements (3-Mark Board Favorite):
| Parameter | Tropic Movements (Tropisms) | Nastic Movements (Nasties) |
|---|---|---|
| Directionality | **Directional** (Response direction depends on stimulus direction). | **Non-directional** (Response direction is independent of stimulus direction). |
| Growth Dependence | **Growth-dependent** (Involves irreversible cell elongation/division). | **Growth-independent** (Involves reversible turgor changes). |
| Response Speed | **Slow** (Takes days or weeks to be noticeable). | **Immediate and rapid** (Occurs within seconds). |
| Examples | Stem bending toward light, roots growing downward. | Drooping of *Mimosa pudica* leaves, opening/closing of flowers. |

---

### 3. PLANT HORMONES (Phytohormones):
Chemical substances synthesized in minute quantities that regulate plant growth, development, and environmental responses:

#### Growth Promoters:
1. **Auxins (e.g. Indole-3-acetic acid):**
   - Synthesized at shoot and root tips.
   - Promotes **cell elongation**, apical dominance, root initiation in cuttings, and phototropic bending.
2. **Gibberellins:**
   - Promotes **stem elongation**, internode extension (reverses dwarfism in plants), breaks seed and bud dormancy, promotes flowering.
3. **Cytokinins:**
   - Promotes **rapid cell division (cytokinesis)**.
   - Present in highest concentrations in areas of rapid cell division (fruits and seeds).
   - Delays leaf senescence (aging), promotes stomatal opening.

#### Growth Inhibitors:
4. **Abscisic Acid (ABA — The Plant Stress Hormone):**
   - **Inhibits growth**; promotes seed and bud dormancy.
   - Triggers the **wilting and falling of leaves (abscission)** and fruits.
   - Causes **closure of stomata** during drought conditions to conserve water.
5. **Ethylene ($\text{C}_2\text{H}_4$):**
   - Only gaseous plant hormone.
   - Stimulates **fruit ripening** (converts starches into sugars in bananas, apples), causes flower fading and leaf abscission.`,
      formulasOrKeyPoints: [
        {
          title: "Phytohormone Action Summary Reference",
          content: `| Plant Hormone | Primary Site of Synthesis | Major Physiological Action |
|---|---|---|
| **Auxin** | Shoot tips (meristematic apex) | Promotes cell elongation, causes phototropism |
| **Gibberellin** | Young leaves, embryos | Promotes stem elongation, breaks seed dormancy |
| **Cytokinin** | Root tips, developing seeds | Promotes cell division, delays leaf aging |
| **Abscisic Acid (ABA)** | Chloroplasts of mature leaves | Inhibits growth, promotes leaf fall, closes stomata |
| **Ethylene** | Ripening fruits, aging leaves | Promotes fruit ripening, induces abscission |`,
          note: "Board Tip: Why do leaves fall in autumn? High levels of Abscisic Acid (ABA) and ethylene stimulate the formation of an abscission layer at the base of the petiole, causing leaf detachment."
        }
      ],
      examinerTraps: [
        {
          trap: "Stating that auxin accumulates on the illuminated side of the stem during phototropism.",
          correction: "Auxin is sensitive to light and diffuses AWAY from light to the SHADED side of the stem. The higher auxin concentration on the shaded side causes those cells to elongate faster, bending the stem toward light."
        }
      ]
    },
    {
      id: "endocrine_system",
      label: "3. Hormones in Animals & The Endocrine System",
      heading: "Ductless Glands, Hormones, Target Organs & Feedback Regulation",
      subheading: "Pituitary + Thyroid + Pancreas + Adrenals + Gonads + Insulin Feedback Loop",
      explanation: `**The Endocrine System:**
Comprises **ductless glands** that secrete chemical messengers called **hormones** directly into the circulating bloodstream, which carries them to specific **target organs** possessing complementary cellular receptors.

### Major Human Endocrine Glands, Hormones & Clinical Disorders:
1. **Hypothalamus (Brain Region — Neuro-endocrine Center):**
   - Secretes Releasing Hormones (e.g. Growth Hormone Releasing Factor) and Inhibiting Hormones.
   - Regulates the secretions of the pituitary gland.
2. **Pituitary Gland (Master Gland — Located at Base of Brain):**
   - **Growth Hormone (GH):** Regulates proper physical development and elongation of bones and muscles.
     * *Hyposecretion (Childhood deficiency):* Causes **Dwarfism** (stunted stature, normal intelligence).
     * *Hypersecretion (Childhood excess):* Causes **Gigantism** (excessive skeletal growth, extreme height).
3. **Thyroid Gland (Neck Region, Butterfly-shaped):**
   - **Thyroxine:** Regulates carbohydrate, protein, and fat metabolism for balanced body growth.
   - **Iodine Requirement:** Iodine is an indispensable raw material for thyroxine synthesis.
     * *Deficiency Disorder:* Lack of dietary iodine causes **Goitre** (enlargement of the thyroid gland, presenting as a noticeably swollen neck).
     * *Public Health Measure:* Table salt is mandatorily iodized with potassium iodate to prevent endemic goitre.
4. **Pancreas (Dual Gland: Exocrine & Endocrine):**
   - Endocrine tissue consists of the **Islets of Langerhans**:
     * **Beta ($\beta$) cells secrete Insulin:** Promotes cellular uptake of glucose and converts excess glucose into glycogen in the liver, **lowering blood sugar levels**.
     * *Deficiency Disorder:* Deficiency or under-secretion of insulin results in **Diabetes Mellitus** (characterized by persistent hyperglycemia and glucose excretion in urine).
     * *Treatment:* Patients with severe diabetes receive daily subcutaneous injections of insulin.
5. **Adrenal Glands (Located like caps above each kidney):**
   - **Adrenaline (Epinephrine — The Emergency / "Fight or Flight" Hormone):**
     * Secreted in response to acute fear, anger, shock, or physical danger.
     * *Physiological Effects:*
       1. Heart beats faster, increasing arterial blood pressure and cardiac output.
       2. Blood supply to the skin and digestive system is reduced by contraction of small arterioles; blood is diverted to skeletal muscles.
       3. Breathing rate accelerates due to rapid contractions of the diaphragm and rib muscles.
       4. Liver releases stored glucose into the bloodstream, preparing the body to either fight or flee.
6. **Gonads (Reproductive Glands):**
   - **Testes (in Males):** Secrete **Testosterone** — controls sperm development and appearance of secondary sexual characteristics at puberty (facial hair, deep voice, muscle enlargement).
   - **Ovaries (in Females):** Secrete **Estrogen** (controls egg maturation, mammary gland development, feminine secondary characteristics) and **Progesterone** (regulates the menstrual cycle and maintains the uterine lining during pregnancy).

---

### The Hormone Feedback Mechanism (NCERT Paradigm):
The timing and quantity of hormone release must be regulated with extreme precision. The body achieves this through **Negative Feedback Loops**:
- **Insulin Blood Glucose Feedback Loop (Board 3-Mark Question):**
  1. Consumption of a carbohydrate meal causes blood sugar levels to **rise**.
  2. The elevated glucose level is detected by the **beta cells of the pancreas**.
  3. Pancreatic beta cells respond by **increasing secretion of insulin** into the blood.
  4. Insulin facilitates cellular glucose absorption and conversion into liver glycogen, causing blood glucose to **fall back to normal baseline**.
  5. As blood glucose drops to normal, the stimulus is removed, and pancreatic cells **reduce insulin secretion**.
  6. Thus, balance (homeostasis) is automatically restored!`,
      formulasOrKeyPoints: [
        {
          title: "Comprehensive Endocrine Gland Reference Matrix",
          content: `| Endocrine Gland | Location | Major Hormone | Physiological Function | Deficiency / Excess Disorder |
|---|---|---|---|---|
| **Pituitary** | Base of brain | Growth Hormone (GH) | Regulates body growth and bone elongation | Dwarfism (Deficiency) / Gigantism (Excess) |
| **Thyroid** | Neck (trachea) | Thyroxine | Regulates metabolic rate of fats, proteins, carbs | Goitre (Iodine deficiency) |
| **Pancreas ($\\beta$-cells)** | Behind stomach | Insulin | Lowers blood glucose levels | Diabetes Mellitus (Insulin deficiency) |
| **Adrenal** | Top of kidneys | Adrenaline | Prepares body for fight or flight emergencies | Acute shock if deficient |
| **Testes** | Scrotum (male) | Testosterone | Promotes spermatogenesis and male secondary traits | Hypogonadism |
| **Ovaries** | Lower abdomen (female) | Estrogen & Progesterone | Regulates female secondary traits, menstrual cycle, pregnancy | Menstrual irregularities |`,
          note: "Examiner Note: Why is iodised salt recommended? Iodine is required by the thyroid gland to synthesize thyroxine. In the absence of dietary iodine, thyroxine cannot be produced, causing goitre (enlarged thyroid in neck)."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Draw Feedback Mechanism Schematic",
          action: "Blood sugar rises → Sensed by Pancreas → Produces Insulin → Blood sugar falls → Pancreas decreases insulin secretion.",
          proTip: "Draw this as a cyclical loop with positive and negative feedback arrows."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Diabetes Mellitus with Diabetes Insipidus.",
          correction: "Diabetes Mellitus is caused by deficiency of INSULIN from the pancreas, resulting in high blood sugar. Diabetes Insipidus is caused by deficiency of ADH (Vasopressin) from the pituitary, resulting in excessive dilute urination without sugar."
        }
      ]
    }
  ]
};
