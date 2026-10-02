import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH6_QUESTIONS: VaultQuestion[] = [
  // ==========================================
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON
  // ==========================================
  {
    id: "sci_c6_q1",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "Which of the following is the correct path of a reflex arc?\n(a) Receptor → Motor neuron → Spinal cord → Sensory neuron → Effector\n(b) Receptor → Sensory neuron → Spinal cord → Motor neuron → Effector\n(c) Receptor → Spinal cord → Motor neuron → Sensory neuron → Effector\n(d) Receptor → Effector → Spinal cord → Sensory neuron → Motor neuron",
    options: [
      "Receptor → Motor neuron → Spinal cord → Sensory neuron → Effector",
      "Receptor → Sensory neuron → Spinal cord → Motor neuron → Effector",
      "Receptor → Spinal cord → Motor neuron → Sensory neuron → Effector",
      "Receptor → Effector → Spinal cord → Sensory neuron → Motor neuron"
    ],
    correctOption: 1,
    answer: "Option (b): Receptor → Sensory neuron → Spinal cord → Motor neuron → Effector",
    steps: [
      "Reflex arc: Receptor (detects stimulus) → Afferent/Sensory neuron → Spinal cord (processing) → Motor/Efferent neuron → Effector (muscle/gland responds)."
    ],
    explanation: "The reflex arc bypasses the brain. Spinal cord acts as the relay center for fast reflex responses.",
    formula: "\\text{Receptor} \\to \\text{Sensory} \\to \\text{Spinal cord} \\to \\text{Motor} \\to \\text{Effector}",
    examinerNote: "SENSORY neuron carries impulse TO spinal cord. MOTOR neuron carries FROM spinal cord to effector.",
    source: "NCERT Section 7.3 / Board 2023"
  },
  {
    id: "sci_c6_q2",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "Which part of the brain controls posture and balance of the body?\n(a) Cerebrum\n(b) Cerebellum\n(c) Medulla oblongata\n(d) Pons",
    options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Pons"],
    correctOption: 1,
    answer: "Option (b): Cerebellum",
    steps: [
      "Cerebrum: voluntary actions, thinking, intelligence, speech.",
      "Cerebellum: posture, balance, coordination of movement.",
      "Medulla oblongata: involuntary actions (breathing, heart rate, vomiting).",
      "Pons: connects different brain regions."
    ],
    explanation: "Cerebellum is the balancing organ of the brain. Controls precision of movement and posture.",
    formula: "\\text{Cerebellum} \\to \\text{Posture and Balance}",
    examinerNote: "Memory trick: CerebELLum = bALAnce. Medulla = involuntary reflexes (breathing, heartbeat).",
    source: "NCERT Section 7.3 / Board 2022"
  },
  {
    id: "sci_c6_q3",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Phototropism in plants is a response to directional light.\nReason (R): Auxin produced at the shoot tip moves towards the darker side, causing unequal growth.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is NOT the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a): Both true, R is correct explanation",
    steps: [
      "A: Phototropism IS a directional response to light. ✓ TRUE",
      "R: Auxin migrates to the darker side of the shoot → that side grows faster → shoot bends toward light. ✓ TRUE",
      "R correctly explains the mechanism of phototropism."
    ],
    explanation: "Auxin concentration is higher on the shaded side → more elongation there → shoot bends toward light.",
    formula: "\\text{Light} \\to \\text{Auxin migration to dark side} \\to \\text{Bending toward light}",
    examinerNote: "Shoot bends TOWARD light (positive phototropism). Roots bend AWAY from light (negative phototropism).",
    source: "NCERT Section 7.2 / Board 2024"
  },
  {
    id: "sci_c6_q4",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "Which hormone is responsible for the 'fight or flight' response in stressful situations?\n(a) Thyroxine\n(b) Growth hormone\n(c) Adrenaline\n(d) Insulin",
    options: ["Thyroxine", "Growth hormone", "Adrenaline", "Insulin"],
    correctOption: 2,
    answer: "Option (c): Adrenaline",
    steps: [
      "Adrenaline (epinephrine) is secreted by the adrenal gland (above kidneys) in response to emergency situations.",
      "It prepares the body for 'fight or flight': increases heart rate, dilates pupils, increases blood flow to muscles, releases glucose from liver."
    ],
    explanation: "Adrenaline is the emergency hormone. It mobilizes body resources instantly for danger response.",
    formula: "\\text{Adrenal gland} \\to \\text{Adrenaline} \\to \\text{Fight or Flight Response}",
    examinerNote: "Adrenal gland sits 'above' the kidney. Adrenaline = epinephrine = emergency hormone.",
    source: "NCERT Section 7.4 / Board 2022, 2024"
  },
  {
    id: "sci_c6_q5",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "The plant hormone that inhibits growth and promotes leaf fall (abscission) and dormancy is:\n(a) Auxin\n(b) Gibberellin\n(c) Cytokinin\n(d) Abscisic acid",
    options: ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
    correctOption: 3,
    answer: "Option (d): Abscisic acid (ABA)",
    steps: [
      "Auxin: promotes cell elongation, phototropism.",
      "Gibberellin: promotes stem elongation, seed germination.",
      "Cytokinin: promotes cell division, delays senescence.",
      "Abscisic acid (ABA): inhibitor — promotes dormancy, leaf fall, seed dormancy."
    ],
    explanation: "Abscisic acid is the inhibitor hormone — it 'puts plants to sleep' (dormancy) and triggers leaf drop.",
    formula: "\\text{ABA} \\to \\text{Dormancy, Leaf Fall, Stress response}",
    examinerNote: "ABA = Abscisic Acid = growth inhibitor. Remember: ABA Arrests/Inhibits growth.",
    source: "NCERT Section 7.2 / Board 2023"
  },
  {
    id: "sci_c6_q6",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "Which of the following pairs is correctly matched?\n(a) Thyroxine – Adrenal gland\n(b) Insulin – Pancreas\n(c) Adrenaline – Thyroid gland\n(d) Growth hormone – Pancreas",
    options: [
      "Thyroxine – Adrenal gland",
      "Insulin – Pancreas",
      "Adrenaline – Thyroid gland",
      "Growth hormone – Pancreas"
    ],
    correctOption: 1,
    answer: "Option (b): Insulin – Pancreas",
    steps: [
      "Thyroxine → Thyroid gland (not adrenal)",
      "Insulin → Pancreas (by β cells of Islets of Langerhans) ✓",
      "Adrenaline → Adrenal gland (not thyroid)",
      "Growth hormone → Pituitary gland (not pancreas)"
    ],
    explanation: "Insulin is secreted by the pancreas (beta cells). It regulates blood glucose levels.",
    formula: "\\text{Pancreas} \\to \\text{Insulin (blood glucose regulation)}",
    examinerNote: "Gland-hormone matching is tested every year. Memorize: Thyroid→Thyroxine, Pancreas→Insulin, Adrenal→Adrenaline, Pituitary→GH.",
    source: "NCERT Section 7.4 / Board 2022, 2023"
  },
  {
    id: "sci_c6_q7",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "Which of the following stimuli is responsible for geotropism in plant roots?\n(a) Light\n(b) Water\n(c) Gravity\n(d) Touch",
    options: ["Light", "Water", "Gravity", "Touch"],
    correctOption: 2,
    answer: "Option (c): Gravity",
    steps: [
      "Geotropism = directional growth in response to GRAVITY.",
      "Roots grow downward (positive geotropism = toward gravity).",
      "Shoots grow upward (negative geotropism = away from gravity)."
    ],
    explanation: "Geo = earth = gravity. Roots show positive geotropism (toward gravity/earth).",
    formula: "\\text{Gravity} \\to \\text{Geotropism}",
    examinerNote: "Tropisms: Photo (light), Geo (gravity), Hydro (water), Thigmo (touch), Chemo (chemicals).",
    source: "NCERT Section 7.2"
  },
  {
    id: "sci_c6_q8",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "The gap between two neurons at their junction is called:\n(a) Axon\n(b) Dendrite\n(c) Synapse\n(d) Myelin sheath",
    options: ["Axon", "Dendrite", "Synapse", "Myelin sheath"],
    correctOption: 2,
    answer: "Option (c): Synapse",
    steps: [
      "Synapse = the gap/junction between two neurons where chemical transmission of nerve impulse occurs.",
      "Axon: long fiber that carries impulse away from cell body.",
      "Dendrite: receives impulse (branched extensions).",
      "Myelin sheath: insulation around axon for faster conduction."
    ],
    explanation: "At the synapse, neurotransmitters (chemicals) cross the gap to transmit impulse from one neuron to the next.",
    formula: "\\text{Neuron A} \\xrightarrow{\\text{Neurotransmitter}} \\text{Synapse} \\to \\text{Neuron B}",
    examinerNote: "Chemical transmission at synapse: neurotransmitter released from axon tip → crosses gap → received by dendrite.",
    source: "NCERT Section 7.3 / Board 2023"
  },

  // ==========================================
  // SECTION B: 2-MARK VERY SHORT ANSWER (VSA)
  // ==========================================
  {
    id: "sci_c6_q9",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 2,
    type: "VSA",
    question: "What is a reflex action? Give one example.",
    answer: "Reflex action is a rapid, automatic, involuntary response to a stimulus that is controlled by the spinal cord, not the brain.",
    steps: [
      "Reflex action = rapid, automatic, unconscious response to a stimulus.",
      "It does NOT involve the brain — the spinal cord acts as the relay center.",
      "This makes the response faster, protecting the body from harm.",
      "Example: Withdrawing the hand on touching a hot object."
    ],
    explanation: "Reflex actions protect the body from damage by bypassing the slow deliberate brain processing.",
    formula: "\\text{Stimulus} \\to \\text{Sensory neuron} \\to \\text{Spinal cord} \\to \\text{Motor neuron} \\to \\text{Response}",
    examinerNote: "ALWAYS write: 'controlled by spinal cord (not brain)' for full credit.",
    source: "NCERT Section 7.3 / Board 2022"
  },
  {
    id: "sci_c6_q10",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 2,
    type: "VSA",
    question: "Name the three main divisions of the brain and state one function of each.",
    answer: "Forebrain (Cerebrum), Midbrain, Hindbrain (Cerebellum + Medulla).",
    steps: [
      "1. Forebrain (Cerebrum): Controls voluntary actions, thinking, intelligence, sensations, speech.",
      "2. Midbrain: Controls reflex actions related to eyes and ears (visual and auditory reflexes).",
      "3. Hindbrain (Cerebellum + Medulla):",
      "   - Cerebellum: posture, balance, coordination.",
      "   - Medulla: involuntary actions (breathing, heartbeat, vomiting)."
    ],
    explanation: "Three-division brain: Forebrain (thinking), Midbrain (relay), Hindbrain (balance + involuntary).",
    formula: "\\text{Brain} = \\text{Forebrain} + \\text{Midbrain} + \\text{Hindbrain}",
    examinerNote: "Board tests: medulla controls breathing/heartbeat. Cerebellum controls balance. Cerebrum controls thinking.",
    source: "NCERT Section 7.3 / Board 2023"
  },
  {
    id: "sci_c6_q11",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 2,
    type: "VSA",
    question: "What are plant hormones? Name any two and state their function.",
    answer: "Plant hormones (phytohormones) are chemical substances produced in one part of the plant and transported to another to regulate growth and development.",
    steps: [
      "Definition: Phytohormones = chemical growth regulators in plants. Produced in tiny amounts but have large effects.",
      "1. Auxin: Promotes cell elongation; responsible for phototropism (shoot bending toward light). Produced at shoot tip.",
      "2. Gibberellin: Promotes stem elongation, seed germination, fruit development without fertilization (parthenocarpy)."
    ],
    explanation: "Plant hormones control growth without a nervous system — chemical control instead of nervous control.",
    formula: "\\text{Plant hormones = Auxin, Gibberellin, Cytokinin, ABA, Ethylene}",
    examinerNote: "Board frequently asks for hormones + functions. Know at least 4: Auxin, Gibberellin, Cytokinin, ABA.",
    source: "NCERT Section 7.2 / Board 2022"
  },
  {
    id: "sci_c6_q12",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 2,
    type: "VSA",
    question: "What is iodised salt and why is it important for human health?",
    answer: "Iodised salt contains added iodine. Iodine is needed by the thyroid gland to produce thyroxine; deficiency causes goitre.",
    steps: [
      "Iodised salt = common table salt with potassium iodate (KIO₃) added.",
      "Iodine is required by the thyroid gland to synthesize the hormone thyroxine.",
      "Thyroxine regulates: metabolic rate, carbohydrate/protein/fat metabolism, growth and development.",
      "Iodine deficiency → Goitre (enlargement of the thyroid gland, visible neck swelling).",
      "Consuming iodised salt prevents iodine-deficiency disorders."
    ],
    explanation: "Thyroxine production requires iodine. Deficiency causes goitre. Iodised salt is the simplest preventive measure.",
    formula: "\\text{Iodine} \\to \\text{Thyroid} \\to \\text{Thyroxine} \\to \\text{Metabolic rate}",
    examinerNote: "Board frequently asks: 'Why should we use iodised salt?' Answer must mention thyroxine and goitre.",
    source: "NCERT Section 7.4 / Board 2021, 2023"
  },

  // ==========================================
  // SECTION C: 3-MARK SHORT ANSWER (SA)
  // ==========================================
  {
    id: "sci_c6_q13",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 3,
    type: "SA",
    question: "What is tropism? Explain any two types of tropism in plants with examples.",
    answer: "Tropism = directional growth movement in plants in response to external stimuli.",
    steps: [
      "Tropism: directional growth response of a plant in response to a stimulus. Named based on the stimulus.",
      "1. Phototropism (Light stimulus):",
      "   - Shoots grow TOWARD light (positive phototropism).",
      "   - Roots grow AWAY from light (negative phototropism).",
      "   - Mechanism: Auxin accumulates on the darker side of the shoot → faster elongation → bending toward light.",
      "2. Geotropism (Gravity stimulus):",
      "   - Roots grow TOWARD gravity (positive geotropism).",
      "   - Shoots grow AWAY from gravity (negative geotropism).",
      "   - Ensures roots anchor in soil and shoots reach light."
    ],
    explanation: "Phototropism and geotropism are the two most tested tropisms. Controlled by auxin distribution in shoots.",
    formula: "\\text{Stimulus} \\to \\text{Auxin redistribution} \\to \\text{Differential growth} \\to \\text{Bending}",
    examinerNote: "Board tests 3-mark tropism every year. Must include: definition, direction, mechanism, and example for each.",
    source: "NCERT Section 7.2 / Board 2022, 2024"
  },
  {
    id: "sci_c6_q14",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 3,
    type: "SA",
    question: "Draw a labeled diagram of a neuron and name its parts. State the function of each part.",
    answer: "Neuron = Cell body (cyton) + Dendrites + Axon. Functions: receives, processes, and transmits impulses.",
    steps: [
      "Parts of a neuron:",
      "1. Cell Body (Cyton): Contains nucleus, cytoplasm, and organelles. Metabolic center of the neuron.",
      "2. Dendrites: Short branched extensions from cell body. RECEIVE impulses from other neurons or sense organs.",
      "3. Axon: Long fiber extending from cell body. CARRIES impulse AWAY from cell body to the next neuron or effector.",
      "4. Myelin Sheath (optional): Insulating layer of fat around axon. Speeds up impulse conduction.",
      "5. Axon terminals (synaptic knobs): Release neurotransmitters at the synapse."
    ],
    explanation: "Neuron structure: dendrites (in) → cell body (process) → axon (out). Information flows in one direction.",
    formula: "\\text{Dendrite} \\to \\text{Cell body} \\to \\text{Axon} \\to \\text{Synapse}",
    examinerNote: "Diagrams earn full marks if properly labeled. Must show: dendrites, cell body (with nucleus), axon, synaptic terminals.",
    source: "NCERT Section 7.3 / Board 2022, 2023"
  },
  {
    id: "sci_c6_q15",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 3,
    type: "SA",
    question: "What are endocrine glands? Name any three endocrine glands in the human body, the hormone they secrete, and one function of each hormone.",
    answer: "Endocrine glands are ductless glands that secrete hormones directly into the bloodstream.",
    steps: [
      "Endocrine glands = ductless glands; secrete hormones directly into blood (no duct needed).",
      "1. Thyroid Gland → Thyroxine: Regulates metabolic rate, body growth, and development. Iodine required.",
      "2. Pancreas → Insulin: Reduces blood glucose level by stimulating liver to convert glucose to glycogen.",
      "3. Adrenal Gland → Adrenaline: Prepares body for 'fight or flight' — increases heart rate, blood glucose, dilates pupils.",
      "Bonus: Pituitary Gland → Growth Hormone: Controls overall body growth."
    ],
    explanation: "Endocrine glands form the chemical communication system of the body (like neurons are the electrical system).",
    formula: "\\text{Endocrine gland} \\xrightarrow{\\text{blood}} \\text{Target organ} \\to \\text{Response}",
    examinerNote: "Name gland, hormone, AND function for each — three pieces of information per gland for full marks.",
    source: "NCERT Section 7.4 / Board 2021, 2022, 2024"
  },

  // ==========================================
  // SECTION D: 5-MARK LONG ANSWER (LA)
  // ==========================================
  {
    id: "sci_c6_q16",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 5,
    type: "LA",
    question: "Describe the structure of a neuron with a labeled diagram. Explain how the nerve impulse travels from one neuron to another through a synapse.",
    answer: "Neuron structure and synaptic transmission via neurotransmitters.",
    steps: [
      "Structure of Neuron:",
      "1. Cell body (cyton): Contains nucleus and cytoplasm. Metabolic center.",
      "2. Dendrites: Short, branching extensions. Receive incoming signals.",
      "3. Axon: Long fiber; carries impulse away from cell body. Covered by myelin sheath for insulation.",
      "4. Node of Ranvier: Gaps in myelin sheath for saltatory conduction.",
      "5. Axon terminals (Synaptic knobs): Contain vesicles with neurotransmitters.",
      "",
      "Synaptic Transmission:",
      "1. An electrical impulse travels down the axon to the axon terminal.",
      "2. The impulse triggers release of chemical neurotransmitters (e.g., acetylcholine) from vesicles.",
      "3. Neurotransmitters cross the synaptic gap (synapse) by diffusion.",
      "4. They bind to receptors on the dendrite of the NEXT neuron.",
      "5. This generates a new electrical impulse in the next neuron.",
      "6. The neurotransmitters are then inactivated/reabsorbed."
    ],
    explanation: "Information transfer at synapse is CHEMICAL (neurotransmitters). Within a neuron, it is ELECTRICAL (action potential).",
    formula: "\\text{Electrical (within neuron)} \\xrightarrow{\\text{synapse}} \\text{Chemical} \\xrightarrow{\\text{next neuron}} \\text{Electrical}",
    examinerNote: "5-mark question: Draw labeled diagram, describe synapse with neurotransmitter. All 5 points must be covered.",
    source: "NCERT Section 7.3 / Board 2021, 2023"
  },
  {
    id: "sci_c6_q17",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 5,
    type: "LA",
    question: "What are hormones? Explain the role of hormones in coordination with reference to: (a) Insulin, (b) Thyroxine, (c) Adrenaline, (d) Male sex hormone (Testosterone), (e) Female hormone (Estrogen).",
    answer: "Hormones are chemical messengers secreted by endocrine glands that coordinate body functions.",
    steps: [
      "Definition: Hormones = chemical messengers secreted in tiny amounts by endocrine glands directly into blood; target specific organs.",
      "",
      "(a) Insulin (Pancreas):",
      "Lowers blood glucose by promoting glycogen formation in liver. Deficiency → Diabetes mellitus.",
      "",
      "(b) Thyroxine (Thyroid gland; contains iodine):",
      "Regulates body's metabolic rate, protein synthesis, carbohydrate metabolism. Deficiency → Goitre.",
      "",
      "(c) Adrenaline (Adrenal gland, above kidney):",
      "Emergency hormone: increases heart rate, BP, blood glucose. Prepares body for fight-or-flight response.",
      "",
      "(d) Testosterone (Testes):",
      "Controls development of male secondary sexual characteristics at puberty: facial hair, deepening of voice, increased muscle mass.",
      "",
      "(e) Estrogen (Ovaries):",
      "Controls female secondary sexual characteristics: development of breasts, wider hips, menstrual cycle regulation."
    ],
    explanation: "Hormones provide slow but long-lasting chemical coordination in multicellular organisms.",
    formula: "\\text{Endocrine gland} \\to \\text{Hormone (blood)} \\to \\text{Target organ} \\to \\text{Response}",
    examinerNote: "5-mark question. Must cover all 5 hormones with gland + function. Partial marks awarded per hormone.",
    source: "NCERT Section 7.4 / Board 2022, 2024"
  },

  // ==========================================
  // SECTION E: CASE-BASED STUDY (4 MARKS)
  // ==========================================
  {
    id: "sci_c6_q18",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 4,
    type: "Case Study",
    question: "Mohit suddenly touched a hot vessel and immediately pulled his hand back without thinking. Later, he was puzzled how his body reacted so fast.\n\n(i) [1M] What type of action is this? Name the part of the nervous system controlling it.\n(ii) [1M] Write the complete pathway of this action.\n(iii) [2M] Why is this type of action considered advantageous for the body?",
    answer: "(i) Reflex action, controlled by spinal cord. (ii) Hot vessel → receptor → sensory neuron → spinal cord → motor neuron → hand muscles (effector). (iii) Faster response (no brain involvement); protects from injury.",
    steps: [
      "(i) This is a REFLEX ACTION. Controlled by the SPINAL CORD.",
      "(ii) Pathway: Hot vessel (stimulus) → Skin receptor → Sensory (afferent) neuron → Spinal cord → Motor (efferent) neuron → Arm muscles (effector) → Hand pulled back.",
      "(iii) Advantage 1: Extremely fast response — bypasses slow brain processing.",
      "Advantage 2: Protects the body from serious injury before conscious awareness.",
      "Advantage 3: Frees the brain for higher cognitive activities."
    ],
    explanation: "Reflex arcs protect the body using rapid spinal-cord-based responses before the brain can process the stimulus.",
    formula: "\\text{Reflex time} \\ll \\text{Voluntary response time} \\text{ (brain bypassed)}",
    examinerNote: "Draw the reflex arc pathway for (ii) — labeled diagram earns bonus marks.",
    source: "CBSE Board 2024 / NCERT"
  },
  {
    id: "sci_c6_q19",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 4,
    type: "Case Study",
    question: "A plant was kept near a window. After a few days, it was observed that its stem had bent toward the light, while its roots grew downward into the soil.\n\n(i) [1M] Name the phenomenon shown by the stem.\n(ii) [1M] Name the phenomenon shown by the roots growing downward.\n(iii) [2M] Explain the role of auxin in causing the stem to bend toward the light.",
    answer: "(i) Phototropism (positive). (ii) Geotropism (positive). (iii) Auxin migrates to shaded side → faster elongation there → bending toward light.",
    steps: [
      "(i) Stem bending toward light = Phototropism (positive phototropism).",
      "(ii) Roots growing toward gravity (downward) = Geotropism (positive geotropism).",
      "(iii) Auxin mechanism:",
      "   - Auxin is produced at the shoot tip.",
      "   - In unidirectional light, auxin migrates to the SHADED (darker) side of the stem.",
      "   - Higher auxin concentration causes FASTER cell elongation on the shaded side.",
      "   - This unequal growth makes the stem bend TOWARD the light source.",
      "   - This is positive phototropism."
    ],
    explanation: "Phototropism: auxin causes differential elongation. Shaded side elongates more → bending toward light.",
    formula: "\\text{Light} \\to \\text{Auxin to dark side} \\to \\text{Elongation dark side} > \\text{light side} \\to \\text{Bending}",
    examinerNote: "Describe the mechanism clearly in steps. Award: auxin location + differential growth + direction of bending.",
    source: "NCERT Section 7.2 / Board 2023"
  },

  // ==========================================
  // ADDITIONAL PYQs
  // ==========================================
  {
    id: "sci_c6_q20",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 3,
    type: "SA",
    question: "How does chemical coordination differ from nervous coordination? Give two differences.",
    answer: "Nervous coordination is fast and electrical. Chemical coordination is slow, uses hormones, and has long-lasting effects.",
    steps: [
      "Differences:",
      "1. SPEED: Nervous coordination is rapid (milliseconds). Hormonal coordination is slow (minutes to hours).",
      "2. DURATION: Nervous response is short-lived. Hormonal response is long-lasting.",
      "3. MEDIUM: Nervous impulse travels through neurons (electrical). Hormones travel through blood (chemical).",
      "4. SPECIFICITY: Nerve impulse reaches specific cells via nerve fibers. Hormone reaches all body cells but acts on target organ."
    ],
    explanation: "Nervous system = fast, electrical, localized. Endocrine system = slow, chemical, widespread and long-lasting.",
    formula: "\\text{Nervous: fast+electrical vs Hormonal: slow+chemical}",
    examinerNote: "Write in tabular format (S.No., Nervous Coordination, Chemical Coordination) for clarity.",
    source: "NCERT Section 7.4 / Board 2022"
  },
  {
    id: "sci_c6_q21",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 2,
    type: "VSA",
    question: "What happens when the blood sugar level becomes too high in the human body?",
    answer: "Pancreas secretes more insulin → insulin lowers blood glucose by converting it to glycogen in the liver.",
    steps: [
      "High blood glucose detected by the pancreas.",
      "Beta cells of the Islets of Langerhans in pancreas secrete more insulin.",
      "Insulin acts on liver and muscle cells to:",
      "- Convert glucose → glycogen (glycogenesis) for storage.",
      "- Stimulate uptake of glucose by body cells for respiration.",
      "Result: Blood glucose level falls back to normal.",
      "If insulin is insufficient: Diabetes mellitus (Type 1 or Type 2) occurs."
    ],
    explanation: "Insulin is the blood glucose regulator. It reduces high blood sugar by stimulating glycogen synthesis.",
    formula: "\\text{High Blood Glucose} \\to \\text{Insulin} \\to \\text{Glucose} \\to \\text{Glycogen} \\to \\text{Normal glucose}",
    examinerNote: "Feedback regulation: glucose level controls insulin secretion. This is a homeostatic mechanism.",
    source: "NCERT Section 7.4 / Board 2021, 2024"
  },
  {
    id: "sci_c6_q22",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "Tendrils in pea plants exhibit which type of movement?\n(a) Thigmotropism\n(b) Phototropism\n(c) Chemotropism\n(d) Hydrotropism",
    options: ["Thigmotropism", "Phototropism", "Chemotropism", "Hydrotropism"],
    correctOption: 0,
    answer: "Option (a): Thigmotropism",
    steps: [
      "Thigmotropism = response to touch (thigma = touch in Greek).",
      "Tendrils in pea plants coil around a support when they touch it → climbing plants.",
      "This is thigmotropism."
    ],
    explanation: "Tendrils coil around support in response to touch stimulus — thigmotropism.",
    formula: "\\text{Touch} \\to \\text{Thigmotropism} \\to \\text{Tendril coiling}",
    examinerNote: "Tendril = thigmotropism (touch). Sunflower facing sun = phototropism. Roots toward water = hydrotropism.",
    source: "NCERT Section 7.2 / Board 2023"
  },
  {
    id: "sci_c6_q23",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 2,
    type: "VSA",
    question: "What is the role of the pituitary gland in the human body? Give two functions.",
    answer: "Pituitary gland is the master gland that controls other endocrine glands by secreting various hormones.",
    steps: [
      "The pituitary gland (hypophysis) is a tiny pea-sized gland located at the base of the brain.",
      "It is called the 'master gland' because it controls other endocrine glands.",
      "Two functions:",
      "1. Growth Hormone (GH): Controls overall body growth and development. Excess → Gigantism; Deficiency → Dwarfism.",
      "2. TSH (Thyroid-Stimulating Hormone): Stimulates the thyroid gland to produce thyroxine.",
      "Other hormones: ADH (kidney water reabsorption), FSH/LH (reproductive hormones)."
    ],
    explanation: "Pituitary = master gland. Controls growth (GH) and stimulates other glands (TSH, FSH, LH).",
    formula: "\\text{Pituitary} \\xrightarrow{\\text{TSH}} \\text{Thyroid} \\to \\text{Thyroxine}",
    examinerNote: "Must call it 'master gland'. Name at least 2 hormones with their functions for full marks.",
    source: "NCERT Section 7.4 / Board 2022"
  },
  {
    id: "sci_c6_q24",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 3,
    type: "SA",
    question: "Explain with an example how feedback mechanism helps in maintaining hormone levels in the blood.",
    answer: "Feedback mechanism is a self-regulating process where the product of a hormonal process controls its own production.",
    steps: [
      "Example: Thyroid Hormone (Thyroxine) Feedback:",
      "1. Pituitary gland releases TSH (Thyroid Stimulating Hormone).",
      "2. TSH stimulates thyroid gland to produce thyroxine.",
      "3. When thyroxine level in blood rises, it sends a signal BACK to the pituitary.",
      "4. High thyroxine → Pituitary reduces TSH secretion.",
      "5. Reduced TSH → Thyroid reduces thyroxine production.",
      "6. Thyroxine level falls → Pituitary releases TSH again.",
      "This cycle maintains thyroxine at an optimal level — negative feedback loop."
    ],
    explanation: "Negative feedback: high product → inhibits its own production. Maintains hormonal homeostasis.",
    formula: "\\text{High Thyroxine} \\to \\downarrow \\text{TSH} \\to \\downarrow \\text{Thyroxine} \\to \\uparrow \\text{TSH} \\to \\cdots",
    examinerNote: "Use insulin-blood glucose OR thyroxine-TSH as examples. Explain the 'cycle' — it is negative feedback.",
    source: "NCERT Section 7.4 / Board 2022, 2024"
  }
];
