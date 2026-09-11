import type { ScienceChapterConcept } from "./types";

export const SCI_CH6_CONCEPT: ScienceChapterConcept = {
  chapterNo: 6,
  title: "Control and Coordination",
  discipline: "Biology",
  weightage: "6–7 Marks (Board Important)",
  oneLiner: "Nervous system (fast, electrical signals) and endocrine system (slow, chemical hormones) work together to coordinate all body functions; reflex arc bypasses the brain for speed.",
  analogyTitle: "Your Body's Internet + Post Office",
  analogyContent: `Your body needs to coordinate millions of activities at once. It uses TWO systems:

🌐 **The Nervous System = High-Speed Fibre Optic Internet**
Sends electrical signals at up to 120 m/s. When you touch a hot pan, the signal reaches your brain and back to your hand in ~0.1 seconds! Instant messaging between body parts.

📮 **The Endocrine System = The National Post Office**  
Sends chemical messages (hormones) through the bloodstream. Slower (minutes to hours), but reaches EVERY cell in the body. Like a circular email to all departments — "Hey everyone, we're in danger! Release energy now!" (that's Adrenaline during stress).

Together, they make sure your body responds correctly to every situation — whether it's a tiger 🐯 chasing you or a chocolate cake 🎂 in front of you!`,
  sections: [
    {
      id: "nervous_system",
      label: "1. Nervous System — The Body's Internet",
      heading: "Neurons, Nerve Impulses & Reflex Actions",
      subheading: "Neuron Structure + Synapse + Reflex Arc + Divisions of Nervous System",
      explanation: `**THE NEURON — The Basic Unit:**
A neuron is a specialised cell that carries electrical signals. Structure:
- **Cell body (Cyton):** Contains nucleus and cytoplasm
- **Dendrites:** Short branched extensions — RECEIVE signals from other neurons
- **Axon:** Long single extension — SENDS signals to next neuron or muscle
- **Myelin sheath:** Fatty insulating layer around axon — speeds up signal transmission (like insulation on electrical wire)
- **Axon terminals (Synaptic knobs):** End of axon — releases neurotransmitters

**Types of Neurons:**
1. **Sensory neuron (Afferent):** From sensory organs TO brain/spinal cord
2. **Motor neuron (Efferent):** FROM brain/spinal cord TO muscles/glands
3. **Interneuron (Relay neuron):** Within the CNS — connects sensory and motor neurons

**NERVE IMPULSE — How Signals Travel:**
Inside neuron: **Electrical signal** (change in Na⁺/K⁺ ion distribution across cell membrane)
Between neurons: **Chemical signal** (neurotransmitter, e.g. Acetylcholine, Dopamine)

**SYNAPSE — The Gap Between Neurons:**
The tiny gap between the axon terminal of one neuron and the dendrite of the next.
1. Electrical signal reaches axon terminal
2. Neurotransmitters released into synaptic cleft
3. Neurotransmitters bind to receptors on next neuron
4. New electrical signal generated in next neuron
*Signal always travels in one direction across synapse!*

**REFLEX ACTION & REFLEX ARC:**
A reflex is an involuntary, automatic response to a stimulus that bypasses the brain for speed.

Example: Touching a hot object → **REFLEX ARC:**
$$\\underbrace{\\text{Hot pan (stimulus)}}_{} \\to \\underbrace{\\text{Sensory neuron}}_{} \\to \\underbrace{\\text{Spinal cord (relay neuron)}}_{} \\to \\underbrace{\\text{Motor neuron}}_{} \\to \\underbrace{\\text{Arm muscle (response)}}_{\\text{Pull hand away!}}$$

Why bypass the brain? Response time would increase if signal had to travel all the way to the brain and back. Reflexes protect us from injury using the spinal cord as a local processing centre.

**BRAIN — The Central Command:**
Protected by skull (cranium) + meninges (membranes) + cerebrospinal fluid (CSF).

**Three main regions:**
1. **Cerebrum (Forebrain):** Largest part; Thinking, memory, intelligence, voluntary movement, speech, sensory perception; left and right hemispheres
2. **Cerebellum (Hindbrain):** Balance and coordination of voluntary movements (typing, catching a ball)
3. **Medulla Oblongata (Hindbrain):** Controls AUTOMATIC/INVOLUNTARY functions — heartbeat, breathing, blood pressure, swallowing, vomiting. VITAL for life!
4. **Pons:** Relay between cerebrum and cerebellum; also controls breathing
5. **Hypothalamus:** Thermostat of body; controls body temperature, hunger, sleep, emotions`,
      formulasOrKeyPoints: [
        {
          title: "Key Diagram — Reflex Arc",
          content: `**The complete reflex arc pathway:**

$$\\text{Receptor} \\xrightarrow{\\text{Sensory neuron}} \\text{Spinal cord} \\xrightarrow{\\text{Relay neuron}} \\xrightarrow{\\text{Motor neuron}} \\text{Effector (muscle/gland)}$$

**The brain is INFORMED** of the reflex but does NOT control it — that's why you can't stop a reflex even if you try!

**Other reflex examples:**
- Knee-jerk reflex (patella tendon tap) — used by doctors to test neural function
- Pupil dilation/constriction in different light
- Salivation at the sight of food
- Sneezing, coughing, blinking`,
          note: "The key Board question: 'Why are reflex actions faster than voluntary actions?' Answer: In a reflex arc, signals go to the spinal cord (not the brain) → shorter path → faster response time."
        }
      ],
      examinerTraps: [
        {
          trap: "Saying the brain controls all reflexes.",
          correction: "Spinal reflexes are controlled by the SPINAL CORD, NOT the brain. The brain is INFORMED of the reflex AFTER it has already happened. The brain controls VOLUNTARY actions (deciding to pick up a pen), while the spinal cord handles protective REFLEXES (pulling away from pain)."
        }
      ]
    },
    {
      id: "endocrine_system",
      label: "2. Endocrine System — The Chemical Messenger Network",
      heading: "Glands, Hormones & Their Functions",
      subheading: "Major Endocrine Glands + Hormones + Feedback Mechanisms",
      explanation: `**Endocrine glands are DUCTLESS** — they secrete hormones DIRECTLY into the bloodstream (not through tubes/ducts).

**MAJOR ENDOCRINE GLANDS AND HORMONES:**

**1. Hypothalamus (brain region):** Master of the master! Controls the pituitary gland.
- Releases releasing hormones → stimulate pituitary
- Releases inhibiting hormones → suppress pituitary

**2. Pituitary Gland (Master Gland, size of a pea):**
- **Growth Hormone (GH):** Stimulates bone and muscle growth. Excess → Gigantism; Deficiency → Dwarfism
- **TSH (Thyroid Stimulating Hormone):** Stimulates thyroid to make thyroxine
- **ADH (Anti-Diuretic Hormone):** Tells kidneys to reabsorb more water (reduces urine output)
- **Oxytocin:** Uterine contractions during childbirth; milk release

**3. Thyroid Gland (neck, butterfly-shaped):**
- **Thyroxine:** Controls metabolic rate (how fast body burns food); requires IODINE
- Deficiency → **Goitre** (swollen neck due to enlarged thyroid), hypothyroidism, cretinism (in children)

**4. Parathyroid Gland (embedded in thyroid):**
- **PTH (Parathyroid Hormone):** Regulates calcium and phosphate levels in blood

**5. Adrenal Gland (one on top of each kidney — "ad" = near, "renal" = kidney):**
- **Adrenal Medulla:** **Adrenaline (Epinephrine)** — the "Fight or Flight" hormone!
  ↑ Heart rate, ↑ breathing rate, ↑ blood glucose, dilates pupils — prepares for emergency!
- **Adrenal Cortex:** Cortisol (stress response), Aldosterone (regulates salt/water balance)

**6. Pancreas (both endocrine AND exocrine):**
- **Islets of Langerhans** — endocrine part:
  - **Insulin** (from β cells): LOWERS blood glucose → promotes glucose uptake by cells, converts glucose → glycogen (storage)
  - **Glucagon** (from α cells): RAISES blood glucose → breaks down glycogen → glucose
- Deficiency of Insulin → **Diabetes Mellitus**

**7. Gonads (Reproductive glands):**
- **Testes:** **Testosterone** → male secondary sexual characteristics (voice deepening, facial hair, muscle mass)
- **Ovaries:** **Estrogen** → female secondary characteristics; **Progesterone** → maintains pregnancy

**FEEDBACK MECHANISM — The Body's Thermostat:**
When a hormone level rises → it SIGNALS back to inhibit further production (negative feedback). Prevents overproduction.
Example: ↑ Blood sugar → Pancreas releases Insulin → Blood sugar drops → Less Insulin released → Balance maintained!`,
      formulasOrKeyPoints: [
        {
          title: "Hormone Quick Reference Table — Board Favourite",
          content: `| Gland | Hormone | Function | Disorder |
|-------|---------|----------|---------|
| Pituitary | Growth Hormone | Body growth | Gigantism (excess), Dwarfism (deficiency) |
| Pituitary | ADH | Water reabsorption in kidneys | Diabetes Insipidus (deficiency) |
| Thyroid | Thyroxine | Controls metabolic rate | Goitre (iodine deficiency) |
| Adrenal Medulla | Adrenaline | Fight-or-flight response | — |
| Pancreas (β cells) | Insulin | Lowers blood sugar | Diabetes Mellitus (deficiency) |
| Pancreas (α cells) | Glucagon | Raises blood sugar | — |
| Testes | Testosterone | Male characteristics | — |
| Ovaries | Estrogen | Female characteristics | — |
| Ovaries | Progesterone | Maintains pregnancy | — |`,
          note: "IODISED SALT is added to table salt to prevent iodine deficiency → prevents Goitre. This is a favourite 1M question: 'Why is iodine added to table salt?' Answer: To prevent thyroid gland enlargement (goitre) caused by thyroxine deficiency due to iodine deficiency."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Diabetes Mellitus (sugar diabetes) with Diabetes Insipidus.",
          correction: "DIABETES MELLITUS: Deficiency of INSULIN → high blood sugar → glucose in urine. DIABETES INSIPIDUS: Deficiency of ADH → kidneys can't reabsorb water → huge volumes of dilute urine ('insipidus' = tasteless/bland). They are completely different disorders despite the shared name 'diabetes'."
        }
      ]
    },
    {
      id: "plant_movements",
      label: "3. Plant Movements & Plant Hormones",
      heading: "Plants Don't Have Muscles — But They Still Move!",
      subheading: "Tropisms + Plant Hormones (Auxin, Gibberellin, Cytokinin, ABA, Ethylene)",
      explanation: `**Plants cannot move from place to place, but parts of plants can MOVE in response to stimuli.**

**TROPISMS — Directional Movements:**

| Tropism | Stimulus | Direction | Example |
|---------|---------|-----------|---------|
| **Phototropism** | Light | Shoot: towards light (+); Root: away from light (-) | Sunflower facing sun |
| **Geotropism (Gravitropism)** | Gravity | Root: towards gravity (+); Shoot: away from gravity (-) | Roots grow downward |
| **Hydrotropism** | Water | Root: towards water (+) | Roots grow toward moisture |
| **Thigmotropism** | Touch | Tendrils coil around support (+) | Pea plant tendrils |
| **Chemotropism** | Chemicals | Pollen tube grows toward ovule | Fertilisation in plants |

**PLANT HORMONES (Phytohormones):**

**1. Auxin (IAA — Indole Acetic Acid):**
- Produced at: Shoot tips (apical meristem)
- Function: Promotes cell elongation on the SHADED side → shoot bends TOWARD light (phototropism)
- Mechanism: In light, auxin moves away from light (to shaded side) → shaded cells elongate more → bend toward light
- Also causes: Apical dominance (suppresses lateral bud growth), fruit development, root formation

**2. Gibberellin:**
- Function: Stimulates stem elongation, seed germination (breaks seed dormancy!), promotes flowering
- Also delays senescence (aging), induces parthenocarpy (seedless fruit)

**3. Cytokinin:**
- Function: Promotes cell division (cytokinesis!), delays aging of leaves, promotes seed germination
- Works WITH auxin to stimulate growth

**4. Abscisic Acid (ABA) — "Stress Hormone":**
- Function: INHIBITS growth, promotes leaf/fruit fall (abscission), closes stomata during drought (conserves water), promotes seed dormancy
- Called the "stress hormone" because it responds to unfavourable conditions

**5. Ethylene (C₂H₄) — The Ripening Gas:**
- Function: Promotes fruit ripening, causes fruit fall, abscission of leaves
- Used commercially: Unripe fruits are treated with ethylene gas in storage rooms to ripen quickly before sale!`,
      examinerTraps: [
        {
          trap: "Saying auxin causes phototropism by moving toward the light.",
          correction: "Auxin moves AWAY from light (to the SHADED side). The shaded cells have MORE auxin → elongate MORE → shoot curves TOWARD the light source. The light side has LESS auxin → cells elongate LESS. This distinction is crucial — get the direction of auxin movement right!"
        }
      ]
    }
  ]
};
