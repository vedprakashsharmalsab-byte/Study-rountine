import type { ScienceChapterConcept } from "./types";

export const SCI_CH6_CONCEPT: ScienceChapterConcept = {
  chapterNo: 6,
  title: "Control and Coordination",
  discipline: "Biology",
  weightage: "6–7 Marks (Board Important)",
  oneLiner: "The nervous system (rapid electrical impulses via neurons) and endocrine system (ductless hormonal chemical broadcasts) coordinate body functions and homeostasis.",
  analogyTitle: "The Dual-Speed Command & Communications Network",
  analogyContent: `Imagine an emergency response command center operating two distinct communication networks:
1. **High-Speed Fiber-Optic Grid (Nervous System):** Point-to-point electrical lines linking specific dispatchers directly to rescue squads (neurons). Transmission occurs within milliseconds, but wiring cannot reach every cellular resident and signals cannot be sustained continuously without recharge.
2. **Global Wireless Broadcast (Endocrine System):** Ductless endocrine glands release chemical hormones into circulating blood, reaching every target cell equipped with specific molecular receptors. Slower onset, but causes widespread, sustained metabolic transformations across entire organ systems.`,
  sections: [
    {
      id: "nervous_system",
      label: "1. The Nervous System, Synapse & Reflex Arc",
      heading: "Neuron Anatomy, Synaptic Neurotransmission & Human Brain Protection",
      subheading: "Neuron Structure + Synaptic Cleft + Reflex Arc Pathway + Cranial Divisions + Protective Meninges",
      explanation: `### The Neuron (Nerve Cell):
The structural and functional unit of the nervous system, specialized for receiving, conducting, and transmitting biological signals across the body.

#### Structural Architecture of a Neuron:
1. **Dendrites:** Branched, tree-like cytoplasmic extensions that receive chemical stimuli from receptors or preceding neurons and convert them into electrical impulses.
2. **Cyton (Cell Body / Soma):** Contains the prominent central nucleus, granular cytoplasm, and Nissl's granules. Processes incoming graded potentials and directs them toward the axon hillock.
3. **Axon:** A single, elongated cylindrical fiber that conducts electrical action potentials away from the cyton toward target effector tissues or downstream neurons.
4. **Myelin Sheath & Schwann Cells:** Insulating lipid layer surrounding the axon that prevents electrical dissipation and enables rapid saltatory conduction. Gaps between adjacent myelin sheaths are called **Nodes of Ranvier**.
5. **Axon Terminals (Nerve Endings / Synaptic Knobs):** Bulbous terminal ramifications containing synaptic vesicles packed with chemical neurotransmitters (e.g., acetylcholine).

---

### The Synapse (Synaptic Transmission):
A **synapse** is the microscopic functional junction between the axon terminal of one neuron and the dendrite of the next neuron.

- **How Signals Cross the Synapse (Board 3-Mark Question):**
  1. An electrical action potential travels along the axon and reaches the terminal synaptic knob.
  2. The depolarization triggers influx of calcium ions, causing synaptic vesicles to fuse with the presynaptic membrane.
  3. Neurotransmitter molecules (acetylcholine) are discharged by exocytosis into the narrow fluid-filled **synaptic cleft** (~20 nm).
  4. Neurotransmitters diffuse across the cleft and bind to specific protein receptor sites on the postsynaptic dendrite.
  5. This chemical binding triggers the opening of ion channels, generating a **fresh electrical impulse** in the receiving neuron.
  *The Unidirectional Rule:* Chemical neurotransmitters are synthesized and released **only** from axon endings, and specific receptors exist **only** on postsynaptic dendrites. Therefore, nerve impulses can travel in **only one direction**.

---

### Reflex Action and Reflex Arc (NCERT Core Concept):
- **Reflex Action:** An extremely rapid, automatic, involuntary, and stereotypic motor response to an environmental stimulus, executed without conscious brain deliberation.
- **Reflex Arc (The Exact Anatomical Pathway):**
  $$\\text{Stimulus (Heat)} \\to \\underbrace{\\text{Receptor (Skin)}}_{\\text{Thermoreceptor}} \\xrightarrow{\\text{Sensory Neuron}} \\underbrace{\\text{Spinal Cord (Relay Neuron)}}_{\\text{Central Integration}} \\xrightarrow{\\text{Motor Neuron}} \\underbrace{\\text{Effector (Biceps)}}_{\\text{Muscle Contraction}} \\to \\text{Response (Withdrawal)}$$

- **Why the Reflex Arc Evolved:**
  Thinking is a complex cognitive process requiring extensive neural circuits in the brain. If processing pain or heat required conscious deliberation in the cerebrum, tissue damage would occur before action could be taken. The spinal cord evolved as an emergency bypass to trigger immediate muscle contraction while simultaneously forwarding the sensory report to the brain for conscious awareness.

---

### The Human Brain (Central Nervous System):
The brain is the supreme coordinating center of the body, encased within three physical protective barriers:
1. **Cranium (Bony Skull / Brain Box):** Hard osseous protection against mechanical impact.
2. **Meninges:** Three protective connective tissue membranes (outer Dura mater, middle Arachnoid, inner Pia mater) that envelop the brain and spinal cord.
3. **Cerebrospinal Fluid (CSF):** Fills the subarachnoid space and cerebral ventricles, providing buoyancy and acting as a shock absorber against mechanical concussions.

#### Three Anatomical Divisions of the Human Brain:
1. **Forebrain (Prosencephalon):**
   - **Cerebrum:** Largest part of the brain; divided into left and right cerebral hemispheres connected by the corpus callosum.
     * Center for conscious thought, intelligence, memory, learning, reasoning, emotion, and will power.
     * Contains sensory receiving areas for vision, hearing, smell, taste, and touch.
     * Contains voluntary motor control areas.
     * Houses the **hunger center** that interprets satiety signals when the stomach is full.
   - **Olfactory Lobes:** Paired club-shaped structures responsible for sensing smell.
   - **Hypothalamus:** Regulates autonomic functions including body temperature (thermostat), water balance, thirst, hunger, sleep cycles, and controls the pituitary gland.
2. **Midbrain (Mesencephalon):**
   - Coordinates involuntary reflex movements of the head, neck, and trunk in response to visual and auditory stimuli.
   - Controls pupillary reflexes, including changes in pupil diameter.
3. **Hindbrain (Rhombencephalon):**
   - **Cerebellum:** Located behind the cerebrum; coordinates muscular movements and maintains posture, balance, and equilibrium during voluntary actions (e.g., walking in a straight line, riding a bicycle, picking up a pencil).
   - **Pons:** Acts as a bridge between brain regions and regulates the respiratory rhythm center.
   - **Medulla Oblongata:** Connects to the spinal cord; controls vital **involuntary actions** including heartbeat, blood pressure, peristalsis, and autonomic protective reflexes (salivation, swallowing, vomiting, coughing, sneezing).

---

### Reflex Arc Pathway Flowchart:
| Component | Location / Example | Specific Physiological Role |
| :--- | :--- | :--- |
| 1. Receptor | Thermoreceptors in skin epidermis | Detects environmental stimulus (heat, sharp pain) and initiates electrical signal |
| 2. Sensory Neuron (Afferent) | Peripheral nerve running from skin to spinal cord | Transmits electrical impulse from receptor into the dorsal horn of spinal cord |
| 3. Relay Neuron (Interneuron) | Grey matter of the spinal cord | Integrates sensory input and instantly synapses onto the appropriate motor neuron |
| 4. Motor Neuron (Efferent) | Ventral root of spinal cord leading to arm | Transmits motor command from spinal cord to the responding peripheral effector organ |
| 5. Effector | Biceps brachii muscle | Undergoes rapid muscular contraction, pulling hand away from damaging stimulus |

---

### Human Brain Functional Matrix:
| Brain Region | Major Structural Parts | Primary Functions & Board Exam Examples |
| :--- | :--- | :--- |
| Forebrain | Cerebrum, Hypothalamus, Olfactory lobes | Thinking, memory, intelligence, sensory perception, voluntary actions, hunger center |
| Midbrain | Optic lobes, Cerebral peduncles | Visual and auditory reflex movements of head, neck, and pupillary diameter adjustment |
| Hindbrain | Cerebellum | Precision of voluntary muscle coordination, maintaining posture, balance, riding bicycle |
| Hindbrain | Pons | Relay bridge between cerebrum and cerebellum; pneumotaxic regulation of respiration |
| Hindbrain | Medulla Oblongata | Involuntary vital centers: Blood pressure, heartbeat, salivation, vomiting, swallowing |`
    },
    {
      id: "plant_movements",
      label: "2. Plant Movements: Tropic, Nastic & Phytohormones",
      heading: "Growth Tropisms, Sensitive Plant Turgor Dynamics & Plant Hormones",
      subheading: "Tropic (Directional) vs Nastic (Non-directional) + Auxin, Gibberellin, Cytokinin, ABA, Ethylene",
      explanation: `### Classification of Plant Movements:
Plants lack nervous tissue and specialized muscle proteins, yet respond to environmental cues through two distinct types of movements:

#### 1. Tropic Movements (Tropisms):
Directional, slow growth movements where the direction of response depends strictly on the direction of stimulus.
- **Phototropism (Light Stimulus):**
  - Shoots exhibit **positive phototropism** (bend toward light).
  - Roots exhibit **negative phototropism** (grow away from light).
  - *Mechanism:* When unilateral light strikes a shoot, **auxin** synthesised at the stem tip diffuses toward the shaded side. Higher auxin concentration on the shaded side stimulates rapid cell elongation, causing the shoot to bend toward the light source.
- **Geotropism (Gravity Stimulus):**
  - Roots show **positive geotropism** (grow downward in direction of gravitational pull).
  - Shoots show **negative geotropism** (grow upward against gravity).
- **Hydrotropism (Water Stimulus):**
  - Roots exhibit positive hydrotropism, growing towards moist soil zones even against gravitational gradient.
- **Chemotropism (Chemical Stimulus):**
  - Growth of the pollen tube down through the style toward the ovule in response to sugary chemical secretions produced by the carpel.
- **Thigmotropism (Touch Stimulus):**
  - Directional growth of tendrils in climbing plants (pea, bitter gourd). Contact with an object reduces auxin on the contact side and shifts it to the outer side; rapid cell elongation on the outer side causes the tendril to coil tightly around the support.

---

#### 2. Nastic Movements (Non-directional):
Rapid, non-growth movements where the direction of response is independent of the stimulus direction.
- **Thigmonasty in Sensitive Plant (*Mimosa pudica* / Touch-Me-Not):**
  - Touching the leaf causes leaflets to fold up and droop within seconds.
  - *Mechanism:* Unlike tropisms, this does not involve growth. Plant cells communicate touch using electrical-chemical signals. At the base of each petiole and leaflet lies a swollen structure called the **pulvinus**, containing loosely packed parenchymatous cells.
  - The signal triggers sudden outflow of potassium ions (\\text{K}^+) and water from the lower pulvinus cells into intercellular spaces.
  - Loss of water collapses the **turgor pressure** of the lower cells, causing the leaf to droop immediately under gravity. Turgor is restored within 15–20 minutes as water re-enters.

---

### Phytohormones (Plant Growth Regulators):
Naturally occurring organic chemical substances synthesised in minute concentrations at specific plant regions that regulate growth, differentiation, and development.

1. **Auxins (e.g., Indole-3-Acetic Acid / IAA):**
   - Synthesised at growing shoot and root apices.
   - Promotes cell elongation, root initiation in cuttings, and apical dominance.
   - Mediates phototropic and thigmotropic bending.
2. **Gibberellins:**
   - Synthesised in plastids of young leaves, seeds, and shoot tips.
   - Promotes longitudinal stem elongation (internode extension), breaks seed and bud dormancy, and induces parthenocarpy.
3. **Cytokinins:**
   - Synthesised in root apices and developing seeds where active cell division occurs.
   - Promotes rapid cell division (cytokinesis), delays leaf senescence (chlorophyll breakdown), and promotes opening of stomata.
4. **Abscisic Acid (ABA - Stress Hormone / Growth Inhibitor):**
   - Synthesised in leaves, stems, and fruits experiencing environmental stress (drought).
   - Induces rapid stomatal closure during water deficit to prevent transpiration.
   - Promotes seed dormancy and triggers wilting and shedding (abscission) of senescent leaves and flowers.
5. **Ethylene (Gaseous Hormone):**
   - Promotes fruit ripening (mango, banana) and hastens organ senescence and abscission.

---

### Tropic vs Nastic Movements Comparison:
| Feature | Tropic Movement (Tropism) | Nastic Movement (Nastism) |
| :--- | :--- | :--- |
| Directionality | Directional (depends on stimulus direction) | Non-directional (independent of stimulus direction) |
| Growth Involvement | Growth-dependent (involves cell elongation) | Non-growth movement (reversible turgor change) |
| Speed of Response | Slow, requiring hours or days to observe | Immediate, occurring within fractions of a second |
| Reversibility | Irreversible (permanent structural growth) | Reversible (restored upon re-hydration) |
| NCERT Example | Shoot bending to unilateral light (Phototropism) | Leaflet folding in Mimosa pudica upon touch |

---

### Phytohormone Action Summary Reference:
| Hormone | Site of Synthesis | Primary Physiological Actions | Board Exam Focus |
| :--- | :--- | :--- | :--- |
| Auxin (IAA) | Shoot apices, young leaves | Cell elongation, apical dominance, phototropic curvature | Diffuses to shaded side causing elongation |
| Gibberellin | Stem tips, young seeds | Stem internodal elongation, breaking seed dormancy | Overcomes genetic dwarfism in plants |
| Cytokinin | Roots, developing fruits, seeds | Promotes cell division, delays senescence, opens stomata | Highest concentration in fruits and seeds |
| Abscisic Acid (ABA) | Chloroplasts of stressed leaves | Growth inhibition, stomatal closure, wilting & leaf fall | Known as the Plant Stress Hormone |
| Ethylene | Ripening fruits, aging leaves | Accelerates fruit ripening, stimulates leaf abscission | Only gaseous phytohormone |`
    },
    {
      id: "endocrine_system",
      label: "3. Hormones in Animals & The Endocrine System",
      heading: "Ductless Glands, Hormones, Target Organs & Feedback Regulation",
      subheading: "Pituitary + Thyroid + Pancreas + Adrenals + Gonads + Insulin Feedback Loop",
      explanation: `### The Endocrine System in Humans:
A network of **ductless glands** that secrete chemical messengers called **hormones** directly into the bloodstream to reach distant target organs.

#### Endocrine Glands, Hormones & Target Functions:
1. **Pituitary Gland (Master Gland):**
   - Located at the base of the brain; controlled by releasing and inhibiting hormones from the **hypothalamus**.
   - Secretes **Growth Hormone (GH)**: Regulates overall somatic growth and bone development.
     * *Hypersecretion in childhood:* Leads to **Gigantism** (excessive skeletal growth, extreme height).
     * *Hyposecretion in childhood:* Leads to **Pituitary Dwarfism** (stunted height, retaining normal body proportions).
2. **Thyroid Gland:**
   - Butterfly-shaped gland situated on either side of the trachea in the neck.
   - Secretes **Thyroxin**: Regulates carbohydrate, protein, and fat metabolism to provide the best balance for physical growth.
   - *Requirement of Dietary Iodine:* Iodine is an essential chemical component for thyroxin synthesis.
   - *Deficiency Disorder:* Lack of iodine causes **Simple Goitre**, characterised by a visibly swollen neck due to compensatory thyroid enlargement.
3. **Pancreas (Mixed / Heterocrine Gland):**
   - Possesses both exocrine acini (secreting pancreatic digestive enzymes) and endocrine **Islets of Langerhans**.
   - Secretes **Insulin** (beta-cells) and **Glucagon** (alpha-cells).
   - *Function of Insulin:* Facilitates uptake of glucose by body cells and promotes glycogen conversion in the liver, keeping blood glucose levels within the normal range (~80–120 mg/dL).
   - *Disorder:* Deficiency or under-secretion of insulin results in **Diabetes Mellitus**, characterized by dangerously elevated blood glucose levels and excretion of glucose in urine. Managed by daily insulin injections and dietary regulation.
4. **Adrenal Glands:**
   - Paired glands seated like caps atop each kidney.
   - Adrenal medulla secretes **Adrenaline** (the "Emergency / Fight or Flight Hormone").
   - *Physiological Response to Emergency (Adrenaline Surge):*
     1. Heart beats faster, pumping larger volumes of oxygen-rich blood to skeletal muscles.
     2. Breathing rate accelerates due to rapid contractions of the diaphragm and intercostal muscles.
     3. Arterioles supplying the digestive system and skin constrict, diverting maximum blood volume toward skeletal muscles.
     4. Liver breaks down glycogen into glucose, releasing emergency fuel into circulation.
5. **Testes (Male Gonads):**
   - Secrete **Testosterone**: Regulates development of male secondary sexual characteristics (deep voice, facial/body hair, muscular build) and stimulates spermatogenesis.
6. **Ovaries (Female Gonads):**
   - Secrete **Estrogen**: Regulates female secondary sexual characteristics (breast enlargement, broadened pelvis, fat distribution) and initiates the menstrual cycle.
   - Secrete **Progesterone**: Prepares and maintains the vascular uterine lining for embryo implantation and pregnancy.

---

### The Negative Feedback Mechanism of Hormone Regulation:
The timing and quantity of hormones released are precisely regulated by feedback mechanisms to avoid metabolic crisis.

- **Regulation of Blood Glucose (The Insulin Feedback Loop):**
  $$\\text{High Blood Sugar (Post Meal)} \\xrightarrow{\\text{Detected by}} \\beta\\text{-cells of Pancreas} \\xrightarrow{\\text{Secretes}} \\text{Insulin into Blood}$$
  $$\\downarrow$$
  $$\\text{Cells absorb glucose + Liver converts glucose to glycogen} \\to \\text{Blood Sugar Falls to Normal}$$
  $$\\downarrow$$
  $$\\text{Pancreatic } \\beta\\text{-cells sense normal sugar} \\xrightarrow{\\text{Inhibits}} \\text{Insulin Secretion Ceases / Drops}$$

---

### Comprehensive Endocrine Gland Reference Matrix:
| Endocrine Gland | Location | Hormone Secreted | Target Function | Deficiency / Excess Disorder |
| :--- | :--- | :--- | :--- | :--- |
| Pituitary | Base of brain | Growth Hormone (GH) | Coordinates bone and muscle growth | Dwarfism (deficiency) / Gigantism (excess) |
| Thyroid | Neck (trachea) | Thyroxin (requires Iodine) | Regulates basal metabolic rate (BMR) | Goitre (swollen neck due to iodine deficiency) |
| Pancreas | Below stomach | Insulin & Glucagon | Lowers blood glucose via cellular uptake | Diabetes Mellitus (high blood sugar, thirst) |
| Adrenal | Above kidneys | Adrenaline | Emergency fight-or-flight response | Impaired response to acute stress |
| Testes | Scrotal sac | Testosterone | Spermatogenesis & male secondary traits | Failure of puberty development |
| Ovaries | Lower abdomen | Estrogen & Progesterone | Ovulation, menstrual cycle & uterine lining | Menstrual irregularities & reproductive failure |`
    }
  ]
};
