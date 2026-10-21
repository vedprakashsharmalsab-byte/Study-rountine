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
    question: "Which of the following represents the correct sequence of the pathway in a reflex arc?",
    options: [
      "Receptor → Motor neuron → Spinal cord → Sensory neuron → Effector",
      "Receptor → Sensory neuron → Spinal cord → Motor neuron → Effector",
      "Receptor → Spinal cord → Motor neuron → Sensory neuron → Effector",
      "Receptor → Effector → Spinal cord → Sensory neuron → Motor neuron"
    ],
    correctOption: 1,
    answer: "Option (b): Receptor → Sensory neuron → Spinal cord → Motor neuron → Effector",
    steps: [
      "1. Receptor (e.g. thermoreceptor in skin) senses the external stimulus.",
      "2. Sensory (afferent) neuron conducts the electrical impulse towards the spinal cord.",
      "3. Spinal cord (interneuron/relay neuron) integrates the signal without waiting for conscious brain processing.",
      "4. Motor (efferent) neuron delivers the command signal from spinal cord to effector.",
      "5. Effector (muscle or gland) executes the immediate physical withdrawal response."
    ],
    explanation: "Reason: A reflex arc is the dedicated neural pathway that mediates a rapid, involuntary reflex action. The sensory receptor (e.g. thermoreceptor in skin) detects an external stimulus and initiates an electrical impulse. The sensory (afferent) neuron carries this nerve impulse to the spinal cord (CNS), where a relay (interneuron) neuron integrates the input and transfers it to a motor (efferent) neuron. The motor neuron conducts the impulse outward to the effector (muscle or gland), triggering an immediate protective response.\n\n• Why other options are wrong:\n- Option (a): Incorrect because motor neurons carry signals away from the CNS to the effector, not inward from receptors to the spinal cord.\n- Option (c): Incorrect because it skips the sensory neuron at the start and misplaces the motor neuron before sensory input has been processed.\n- Option (d): Incorrect because effectors act only at the very end of the pathway after receiving motor instructions from the spinal cord.",
    formula: "\\text{Receptor} \\to \\text{Sensory neuron} \\to \\text{Spinal cord (Relay)} \\to \\text{Motor neuron} \\to \\text{Effector}",
    examinerNote: "Sensory neuron carries impulse TO spinal cord (inward/afferent). Motor neuron carries FROM spinal cord to effector (outward/efferent). Never invert them.",
    source: "NCERT Section 6.1.1 / CBSE Board 2023, 2024"
  },
  {
    id: "sci_c6_q2",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "Which part of the human brain controls posture, balance, and precision of voluntary movements?",
    options: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Pons"],
    correctOption: 1,
    answer: "Option (b): Cerebellum",
    steps: [
      "1. Cerebellum: Part of the hindbrain responsible for equilibrium, dynamic posture, and muscle coordination.",
      "2. Cerebrum: Seat of voluntary thinking, reasoning, learning, and conscious sensory perception.",
      "3. Medulla oblongata: Regulates autonomic involuntary activities (heartbeat, blood pressure, vomiting, salivation).",
      "4. Pons: Relays impulses between different parts of the brain and assists in respiratory rhythm."
    ],
    explanation: "Reason: The cerebellum is a key part of the hindbrain responsible for motor coordination, maintenance of body equilibrium, dynamic balance, and posture during voluntary movements such as walking, cycling, or threading a needle.\n\n• Why other options are wrong:\n- Option (a) Cerebrum: Seat of consciousness, intelligence, memory, voluntary thought initiation, and sensory interpretation.\n- Option (c) Medulla oblongata: Regulates autonomic, involuntary visceral life-support reflexes such as heart rate, blood pressure, respiration, swallowing, vomiting, coughing, and salivation.\n- Option (d) Pons: Serves as a neural bridge connecting different brain regions and assists in respiratory rhythm control.",
    formula: "\\text{Cerebellum} \\to \\text{Posture, Dynamic Balance \\& Precision of Voluntary Actions}",
    examinerNote: "Memory trigger: CerebELLum = bALAnce and posture. Medulla = vital visceral involuntary reflexes.",
    source: "NCERT Section 6.1.2 / CBSE Board 2022, 2024"
  },
  {
    id: "sci_c6_q3",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Phototropism in plants is a directional growth response towards unilateral light.\nReason (R): Auxin synthesized at the shoot tip diffuses towards the shaded side, causing accelerated cell elongation on that side.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a): Both A and R are true and R is the correct explanation of A",
    steps: [
      "1. Check Assertion (A): Phototropism is the directional growth of plant organs in response to unidirectional light. (True)",
      "2. Check Reason (R): Auxin diffuses from illuminated side to shaded side, promoting greater cell elongation on the shaded side. (True)",
      "3. Check Link: The differential elongation caused by auxin accumulation on the shaded side is the exact biological mechanism that forces the shoot to bend towards light. Thus, R correctly explains A."
    ],
    explanation: "Reason: Assertion (A) is TRUE because phototropism is the directional growth of plant organs with respect to light. Reason (R) is TRUE because when sunlight strikes a shoot apex unilaterally, auxin diffuses away from the lighted flank to the shaded flank. The higher auxin concentration stimulates greater cell elongation on the shaded side, forcing the stem to bend towards the light. Because Reason (R) accurately details the biochemical mechanism behind Assertion (A), R is the correct explanation of A.\n\n• Why other options are wrong:\n- Option (b): Incorrect because R directly provides the physiological cause of the curvature stated in A.\n- Option (c): Incorrect because Reason (R) is scientifically accurate.\n- Option (d): Incorrect because Assertion (A) is a verified biological fact.",
    formula: "\\text{Unilateral Light} \\to \\text{Auxin to Shaded Side} \\to \\text{Differential Elongation} \\to \\text{Curvature towards Light}",
    examinerNote: "Shoots show positive phototropism (bend towards light); roots show negative phototropism (bend away from light).",
    source: "NCERT Section 6.2 / CBSE Board 2024"
  },
  {
    id: "sci_c6_q4",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "Which hormone is secreted by the adrenal glands to prepare the human body for emergency 'fight or flight' responses?",
    options: ["Thyroxine", "Growth hormone", "Adrenaline", "Insulin"],
    correctOption: 2,
    answer: "Option (c): Adrenaline",
    steps: [
      "1. Adrenal glands sit on top of each kidney (suprarenal).",
      "2. Under stressful or emergency situations, the adrenal gland releases adrenaline (epinephrine) into the bloodstream.",
      "3. Physiological changes: heart rate increases, breathing rate accelerates, blood is diverted from digestive tract and skin to skeletal muscles.",
      "4. This primes the body for immediate, intense muscular response (fight or flight)."
    ],
    explanation: "Reason: Adrenaline (epinephrine) is released directly into the blood by the adrenal glands in response to danger, stress, or excitement. It elevates heart rate, dilates bronchial passages to maximize oxygen intake, shunts blood towards skeletal muscles, and prompts hepatic glycogenolysis to surge blood glucose for immediate energy.\n\n• Why other options are wrong:\n- Option (a) Thyroxine: Secreted by the thyroid gland to govern basal metabolic rate (BMR) and cellular metabolism.\n- Option (b) Growth hormone: Secreted by the anterior pituitary to regulate overall body growth and skeletal development.\n- Option (d) Insulin: Secreted by the pancreatic beta cells to lower elevated blood sugar levels by facilitating cellular uptake and glycogen synthesis.",
    formula: "\\text{Adrenal Glands} \\to \\text{Adrenaline} \\to \\text{Elevated Heart Rate, Blood Flow to Muscles \\& Energy Mobilization}",
    examinerNote: "Adrenaline is nicknamed the 'emergency hormone' or '3F hormone' (Fight, Flight, Fright).",
    source: "NCERT Section 6.3 / CBSE Board 2022, 2024"
  },
  {
    id: "sci_c6_q5",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "Which plant hormone acts as a growth inhibitor, promoting leaf fall (abscission), bud dormancy, and stomatal closure during drought?",
    options: ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
    correctOption: 3,
    answer: "Option (d): Abscisic acid",
    steps: [
      "1. Growth promoters: Auxin (cell elongation), Gibberellin (stem elongation), Cytokinin (cell division).",
      "2. Growth inhibitor: Abscisic acid (ABA).",
      "3. Role of ABA: Promotes leaf senescence, causes leaf abscission (wilting and dropping), induces seed dormancy, and closes stomata during water stress."
    ],
    explanation: "Reason: Abscisic acid (ABA) is the chief growth inhibitor and stress hormone in plants. It arrests metabolic processes, triggers seed and winter bud dormancy, prompts rapid stomatal closure under water deficit to minimize transpiration, and induces leaf and fruit abscission (wilting and shedding).\n\n• Why other options are wrong:\n- Option (a) Auxin: A growth promoter that stimulates cell enlargement, apical dominance, and tropic curvatures.\n- Option (b) Gibberellin: A growth promoter that facilitates internodal stem elongation, breaks dormancy, and initiates germination.\n- Option (c) Cytokinin: A growth promoter that accelerates cytokinesis (cell division) and delays leaf senescence.",
    formula: "\\text{Abscisic Acid (ABA)} \\to \\text{Growth Inhibition, Dormancy, Stomatal Closure \\& Abscission}",
    examinerNote: "Mnemonic: ABA = Arrests, Blocks, Abscises. It is the only classic growth inhibitor among the choices.",
    source: "NCERT Section 6.2 / CBSE Board 2023, 2024"
  },
  {
    id: "sci_c6_q6",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "Which of the following endocrine gland-hormone pairs is correctly matched?",
    options: [
      "Thyroxine – Adrenal gland",
      "Insulin – Pancreas",
      "Adrenaline – Thyroid gland",
      "Growth hormone – Pancreas"
    ],
    correctOption: 1,
    answer: "Option (b): Insulin – Pancreas",
    steps: [
      "1. Thyroxine is synthesized by the Thyroid gland (requires dietary iodine).",
      "2. Insulin is secreted by the Pancreas (beta cells of Islets of Langerhans). (Correct Match)",
      "3. Adrenaline is secreted by the Adrenal glands located atop the kidneys.",
      "4. Growth hormone is secreted by the anterior Pituitary gland at the base of the brain."
    ],
    explanation: "Reason: Insulin is synthesized and secreted by the beta cells of the Islets of Langerhans inside the pancreas to regulate blood glucose homeostasis.\n\n• Why other options are wrong:\n- Option (a) Thyroxine – Adrenal gland: Incorrect match; thyroxine is secreted by the thyroid gland located in the neck.\n- Option (c) Adrenaline – Thyroid gland: Incorrect match; adrenaline is secreted by the adrenal glands located atop each kidney.\n- Option (d) Growth hormone – Pancreas: Incorrect match; growth hormone (somatotropin) is secreted by the anterior pituitary gland at the base of the brain.",
    formula: "\\text{Pancreas (Islets of Langerhans)} \\to \\text{Insulin} \\to \\text{Blood Glucose Regulation}",
    examinerNote: "Always check gland location and corresponding hormone carefully. Board frequently sets matching questions from Table 6.1.",
    source: "NCERT Section 6.3 / CBSE Board 2022, 2023"
  },
  {
    id: "sci_c6_q7",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "Which external stimulus is responsible for geotropism (gravitropism) in plant roots and shoots?",
    options: ["Light", "Water", "Gravity", "Touch"],
    correctOption: 2,
    answer: "Option (c): Gravity",
    steps: [
      "1. Geotropism is derived from 'Geo' (Earth/gravity) and 'tropism' (directional growth movement).",
      "2. Roots grow downward in the direction of gravity (positive geotropism).",
      "3. Shoots grow upward against gravity (negative geotropism).",
      "4. External stimulus is gravity."
    ],
    explanation: "Reason: Geotropism (or gravitropism) is the directional growth of plant organs with respect to the pull of gravity. Plant roots exhibit positive geotropism (growing downward into the earth for water and anchorage), while shoots exhibit negative geotropism (growing upward against gravity towards light).\n\n• Why other options are wrong:\n- Option (a) Light: Stimulus for phototropism (e.g. shoots bending towards light).\n- Option (b) Water: Stimulus for hydrotropism (e.g. root tips bending towards moisture).\n- Option (d) Touch: Stimulus for thigmotropism (e.g. tendrils coiling around physical supports).",
    formula: "\\text{Gravity Stimulus} \\to \\text{Positive Geotropism (Roots)} \\parallel \\text{Negative Geotropism (Shoots)}",
    examinerNote: "Root = positive geotropism + positive hydrotropism. Shoot = negative geotropism + positive phototropism.",
    source: "NCERT Section 6.2 / CBSE Board 2021, 2023"
  },
  {
    id: "sci_c6_q8",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "The microscopic gap across which nerve impulses are transmitted chemically between two successive neurons is called the:",
    options: ["Axon", "Dendrite", "Synapse", "Myelin sheath"],
    correctOption: 2,
    answer: "Option (c): Synapse",
    steps: [
      "1. Axon: Long cytoplasmic process carrying impulses away from cyton.",
      "2. Dendrite: Branched process receiving incoming stimuli.",
      "3. Synapse: The functional microscopic gap (~20 nm) between the axon terminal of one neuron and the dendrite of the next.",
      "4. Neurotransmitters diffuse across this synaptic cleft to convert chemical signals back into electrical impulses."
    ],
    explanation: "Reason: The synapse (specifically the synaptic cleft, ~20 nm across) is the junction between the axon terminal of a presynaptic neuron and the dendrite or cell body of a postsynaptic neuron. When an action potential reaches the axon terminal, it triggers the exocytosis of chemical neurotransmitters (such as acetylcholine) across this cleft to generate a new electrical impulse in the adjoining neuron.\n\n• Why other options are wrong:\n- Option (a) Axon: The elongated cytoplasmic fiber that conducts action potentials away from the neuronal cyton.\n- Option (b) Dendrite: Branched projections that receive input signals and carry them towards the cyton.\n- Option (d) Myelin sheath: An insulating lipid layer covering axons that increases the conduction speed of nerve impulses.",
    formula: "\\text{Axon Terminal (Presynaptic)} \\xrightarrow{\\text{Neurotransmitter}} \\text{Synaptic Cleft} \\to \\text{Dendritic Receptor (Postsynaptic)}",
    examinerNote: "Transmission across a synapse is strictly chemical and strictly unidirectional.",
    source: "NCERT Section 6.1 / CBSE Board 2023"
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
    question: "What is a reflex action? Give one suitable example and state the primary organ of the central nervous system controlling it.",
    answer: "A reflex action is a rapid, automatic, and involuntary response to an external sensory stimulus that is processed and coordinated at the level of the spinal cord without conscious intervention by the brain.\n\nExample: Instantaneous withdrawal of the hand upon accidentally touching a scorching hot object.\nControlling Organ: Spinal cord.",
    steps: [
      "1. Definition: Rapid, automatic, and involuntary response to a sensory stimulus.",
      "2. Controlling Center: Spinal cord acts as the immediate reflex relay center, bypassing the conscious brain.",
      "3. Biological Significance: Minimizes reaction time and protects tissues from severe traumatic damage.",
      "4. Example: Jerking hand away when touching a hot pan, or knee-jerk reflex when patellar tendon is tapped."
    ],
    explanation: "Reflex actions provide evolutionary survival protection by cutting down signal transit time through dedicated spinal reflex arcs.",
    formula: "\\text{Stimulus} \\to \\text{Sensory Receptor} \\to \\text{Spinal Cord} \\to \\text{Motor Effector} \\to \\text{Instant Action}",
    examinerNote: "Must explicitly state 'involuntary and automatic' and identify 'spinal cord' for full 2 marks.",
    source: "NCERT Section 6.1.1 / CBSE Board 2022, 2024"
  },
  {
    id: "sci_c6_q10",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 2,
    type: "VSA",
    question: "Name the three major structural divisions of the human brain and state one key physiological function for each division.",
    answer: "The three major structural divisions of the human brain and their key functions are:\n\n1. Forebrain (Cerebrum): The main thinking and cognitive center; controls voluntary actions, reasoning, speech, memory, and interpretation of sensory inputs (vision, hearing, smell).\n2. Midbrain: Serves as a relay center; coordinates visual and auditory reflex movements (e.g., tracking moving objects and pupil reflex adjustments).\n3. Hindbrain (Cerebellum, Pons, Medulla):\n   - Cerebellum: Controls posture, dynamic equilibrium, and precision of voluntary movements.\n   - Medulla oblongata: Regulates autonomic involuntary activities (blood pressure, salivation, vomiting, heartbeat).",
    steps: [
      "1. Forebrain (Cerebrum): Conscious thought, voluntary control, intelligence, memory.",
      "2. Midbrain: Audio-visual reflexes, head/neck movement in response to sound/light.",
      "3. Hindbrain: Cerebellum (posture/balance), Medulla (involuntary visceral reflexes like BP, vomiting), Pons (respiratory control)."
    ],
    explanation: "The human brain is anatomically partitioned into Forebrain (telencephalon/diencephalon), Midbrain (mesencephalon), and Hindbrain (rhombencephalon), each specialized for distinct tiers of neuro-regulation.",
    formula: "\\text{Brain} = \\text{Forebrain (Thinking)} + \\text{Midbrain (Sensory Relay)} + \\text{Hindbrain (Balance \\& Involuntary Visceral Control)}",
    examinerNote: "Be precise: do not confuse cerebellum (balance) with cerebrum (thinking).",
    source: "NCERT Section 6.1.2 / CBSE Board 2023, 2024"
  },
  {
    id: "sci_c6_q11",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 2,
    type: "VSA",
    question: "What are plant hormones (phytohormones)? Name any two plant hormones and state one major physiological function of each.",
    answer: "Plant hormones (phytohormones) are naturally occurring organic chemical compounds synthesized in minute quantities in one part of the plant (e.g. shoot or root apex) and translocated to other parts where they regulate growth, differentiation, and physiological responses.\n\nTwo Phytohormones and their Functions:\n1. Auxin: Promotes cell elongation, apical dominance, and drives phototropic/geotropic directional bending movements.\n2. Cytokinin: Promotes active cell division (cytokinesis) and is found in high concentrations in rapidly developing tissues like fruits and seeds.",
    steps: [
      "1. Definition: Chemical regulators produced in trace amounts that control plant growth and physiological responses.",
      "2. Example 1 - Auxin: Synthesized at shoot tips; drives cell elongation and phototropism.",
      "3. Example 2 - Cytokinin: Promotes cytokinesis (cell division); delays leaf aging (senescence).",
      "4. Alternative: Gibberellin (stem elongation) or Abscisic Acid (growth inhibitor, leaf abscission)."
    ],
    explanation: "Phytohormones provide chemical coordination in plants in the absence of a specialized nervous system.",
    formula: "\\text{Phytohormones} = \\text{Trace Chemical Messengers Regulating Plant Growth \\& Morphogenesis}",
    examinerNote: "Naming the hormone gives 0.5 mark; correctly stating its physiological role gives 0.5 mark each.",
    source: "NCERT Section 6.2.1 / CBSE Board 2022, 2024"
  },
  {
    id: "sci_c6_q12",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 2,
    type: "VSA",
    question: "What is iodised salt and why is its inclusion in the human diet essential? Name the clinical condition resulting from its deficiency.",
    answer: "Iodised salt is common table salt ($NaCl$) enriched with minute, regulated amounts of inorganic iodine (potassium iodate, $KIO_3$).\n\n1. Nutritional Importance: Dietary iodine is strictly required by the **thyroid gland** to synthesize the metabolic hormone **thyroxine** ($T_4$). Thyroxine regulates carbohydrate, protein, and fat metabolism, providing the optimal metabolic balance for physical and mental development.\n2. Deficiency Condition: Severe iodine deficiency causes **Goitre**, characterized by an abnormally enlarged, swollen thyroid gland in the neck.",
    steps: [
      "1. Identity: Table salt fortified with trace iodine (potassium iodate).",
      "2. Biological necessity: Iodine is an indispensable constituent for thyroxine hormone synthesis by thyroid gland.",
      "3. Function of thyroxine: Regulates Basal Metabolic Rate (BMR) and cellular metabolism for physical and mental growth.",
      "4. Deficiency manifestation: Thyroid gland enlarges compensatory to trap iodine, causing Goitre (swollen neck)."
    ],
    explanation: "Without adequate dietary iodine, the thyroid gland cannot manufacture thyroxine, leading to hypothyroidism, stunted mental growth, and visible goitre.",
    formula: "\\text{Dietary Iodine} \\xrightarrow{\\text{Thyroid Gland}} \\text{Thyroxine} \\to \\text{Metabolic Rate}; \\quad \\text{Deficiency} \\implies \\text{Goitre}",
    examinerNote: "Both the hormone 'thyroxine' and the deficiency disease 'Goitre' must be explicitly stated.",
    source: "NCERT Section 6.3 / CBSE Board 2021, 2023, 2024"
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
    question: "Define tropism. Explain any two types of tropism exhibited by plants, providing a clear example and the underlying mechanism for each.",
    answer: "Definition: Tropism is a directional growth movement of a plant part where the direction of response is strictly determined by the direction of an external stimulus.\n\nTwo Types of Tropism:\n\n1. Phototropism (Stimulus: Light):\n   - Response: Plant shoots grow and bend towards unidirectional light (positive phototropism), while roots bend away (negative phototropism).\n   - Mechanism: Auxin synthesized at the shoot apex diffuses to the shaded side. Higher auxin concentration induces greater cell elongation on the shaded side, forcing the stem to bend towards the light source.\n\n2. Geotropism / Gravitropism (Stimulus: Gravity):\n   - Response: Primary roots grow downward in the direction of gravitational pull (positive geotropism), whereas stems grow vertically upward against gravity (negative geotropism).\n   - Mechanism: Heavy starch-containing amyloplasts (statoliths) sediment inside root cap cells, redirecting auxin distribution to inhibit elongation on the lower flank of roots, curving root tips downward to secure firm soil anchorage.",
    steps: [
      "1. Definition: Directional growth movement in response to an external directional stimulus.",
      "2. Phototropism: Stimulus = light; positive in shoots, negative in roots; driven by auxin accumulation on shaded flank.",
      "3. Geotropism: Stimulus = gravity; positive in roots (downward anchorage), negative in shoots (upward to light).",
      "4. Emphasize that tropisms are growth-dependent and irreversible, unlike nastic movements."
    ],
    explanation: "Tropic movements allow sessile plants to optimize their orientation towards vital environmental resources (light, moisture, gravity).",
    formula: "\\text{Tropism} = \\text{Directional Growth Movement Coupled to Stimulus Direction}",
    examinerNote: "Award 1 mark for the precise definition, 1 mark for phototropism with mechanism, and 1 mark for geotropism with mechanism.",
    source: "NCERT Section 6.2 / CBSE Board 2022, 2024"
  },
  {
    id: "sci_c6_q14",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 3,
    type: "SA",
    question: "Describe the structural organization of a neuron. State the specific function of: (i) Dendrites, (ii) Cyton (Cell Body), and (iii) Axon.",
    answer: "Structural Organization of a Neuron:\nA neuron is the fundamental structural and functional unit of the nervous system, specialized for receiving, conducting, and transmitting electrochemical impulses.\n\nSpecific Functions of Neuron Parts:\n1. Dendrites:\n   - Structure: Highly branched, tree-like protoplasmic extensions radiating from the cell body.\n   - Function: Act as the receptive antenna; detect environmental stimuli or chemical neurotransmitters from preceding neurons and convert them into electrical action potentials.\n\n2. Cyton (Cell Body / Soma):\n   - Structure: Contains the central nucleus, granular cytoplasm (Nissl's granules), and standard metabolic organelles.\n   - Function: Acts as the metabolic engine; synthesizes proteins and neurotransmitters and integrates incoming electrical graded signals before passing them down the axon.\n\n3. Axon:\n   - Structure: A single, elongated, cylindrical cytoplasmic process (often insulated by a lipid-rich myelin sheath).\n   - Function: Conveys the generated electrical nerve impulse away from the cyton towards the axon terminals for transmission across synapses.",
    steps: [
      "1. Dendrites: Sensory input receivers -> generate electrical impulses.",
      "2. Cyton: Metabolic center + signal integration.",
      "3. Axon: Output conductor -> carries impulse away to axon terminals/synapse.",
      "4. Direction of flow: Dendrite -> Cyton -> Axon -> Axon Terminal."
    ],
    explanation: "Information flow in an individual neuron is strictly polarized: incoming at dendrites, processed at cyton, conducted away via axon.",
    formula: "\\text{Dendrite (Input)} \\to \\text{Cyton (Integration)} \\to \\text{Axon (Conduction)} \\to \\text{Synapse (Output)}",
    examinerNote: "Emphasize the direction of the electrical impulse: Dendrite -> Cyton -> Axon. Never in reverse.",
    source: "NCERT Section 6.1 / CBSE Board 2022, 2023"
  },
  {
    id: "sci_c6_q15",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 3,
    type: "SA",
    question: "What are endocrine glands? Name any three endocrine glands in the human body, the principal hormone secreted by each, and state one vital physiological role of each hormone.",
    answer: "Endocrine glands are ductless glands that synthesize and secrete chemical messengers (hormones) directly into the circulating blood to be transported to distant target organs.\n\nThree Major Endocrine Glands, Hormones, and Roles:\n\n1. Thyroid Gland:\n   - Hormone: Thyroxine ($T_4$).\n   - Role: Regulates Basal Metabolic Rate (BMR) and carbohydrate, protein, and fat metabolism, promoting balanced physical and mental growth.\n\n2. Pancreas (Endocrine Islets of Langerhans):\n   - Hormone: Insulin.\n   - Role: Lowers elevated blood glucose levels by accelerating cellular glucose uptake and stimulating conversion of excess glucose into glycogen in liver and muscle cells.\n\n3. Adrenal Glands:\n   - Hormone: Adrenaline (Epinephrine).\n   - Role: Prepares the body for acute stress/emergencies ('fight or flight') by elevating cardiac output, breathing rate, and blood pressure while diverting blood to skeletal muscles.",
    steps: [
      "1. Definition: Ductless glands that pour hormones directly into the bloodstream.",
      "2. Gland 1: Thyroid -> Thyroxine -> Metabolic rate regulation.",
      "3. Gland 2: Pancreas -> Insulin -> Blood glucose lowering.",
      "4. Gland 3: Adrenal gland -> Adrenaline -> Fight-or-flight emergency response."
    ],
    explanation: "Endocrine signaling provides broad, systemic, and sustained chemical coordination across organ systems.",
    formula: "\\text{Endocrine Gland} \\xrightarrow{\\text{Directly into Blood}} \\text{Target Organ Receptors} \\to \\text{Physiological Response}",
    examinerNote: "Award 1 mark per complete gland profile (gland name + hormone + precise physiological function).",
    source: "NCERT Section 6.3 / CBSE Board 2021, 2022, 2024"
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
    question: "(a) Describe the detailed structural components of a human neuron. [2M]\n(b) Explain step-by-step how an electrical nerve impulse is transmitted across a chemical synapse from one neuron to the next. [2M]\n(c) Why can a nerve impulse travel in only one direction across a chemical synapse? [1M]",
    answer: "(a) Structural Components of a Neuron:\n1. Dendrites: Fine, highly branched projections extending from the cyton that receive stimuli or chemical signals and convert them into electrical impulses.\n2. Cyton (Cell Body): Contains the nucleus, cytoplasm, and organelles; maintains neuronal viability and integrates input signals.\n3. Axon: Long, uniform cylindrical fiber that conducts impulses away from the cell body. It is enveloped by a protective lipid-rich myelin sheath that enables rapid conduction.\n4. Axon Terminals (Synaptic Knobs): Swollen bulbous ends of the axon containing synaptic vesicles loaded with chemical neurotransmitters.\n\n(b) Synaptic Transmission (Step-by-Step):\n1. Arrival of Impulse: The electrical action potential travels down the axon and reaches the presynaptic axon terminal.\n2. Exocytosis of Neurotransmitter: The electrical voltage triggers synaptic vesicles to fuse with the presynaptic membrane, releasing chemical neurotransmitters (e.g., acetylcholine) into the microscopic fluid gap (~20 nm) known as the synaptic cleft.\n3. Diffusion: Neurotransmitter molecules rapidly diffuse across the synaptic cleft.\n4. Receptor Binding: Neurotransmitters bind specifically to protein receptor sites located on the postsynaptic dendritic membrane of the adjoining neuron.\n5. Generation of New Impulse: Receptor binding causes ion channels to open, depolarizing the membrane and generating a brand new electrical impulse that travels down the next neuron.\n\n(c) Unidirectional Transmission:\nSynaptic transmission is strictly one-way because neurotransmitter storage vesicles are present EXCLUSIVELY in the presynaptic axon terminals, while specific neurotransmitter receptor sites are located EXCLUSIVELY on the postsynaptic dendritic membrane. An impulse cannot travel backwards because dendrites cannot release neurotransmitters and axon terminals lack receptive proteins.",
    steps: [
      "1. Neuron parts: Dendrites (receptive), Cyton (soma/metabolism), Axon (transmission cable), Axon terminal (chemical release).",
      "2. Synaptic steps: Electrical impulse -> Vesicle fusion -> Neurotransmitter exocytosis -> Diffusion across cleft -> Receptor binding on next dendrite -> New electrical impulse.",
      "3. Unidirectional nature: Vesicles exist ONLY at axon terminals; receptors exist ONLY on dendrites."
    ],
    explanation: "Intra-neuronal conduction is electrical (fast action potential), whereas inter-neuronal transmission at synapses is chemical (neurotransmitter diffusion).",
    formula: "\\text{Electrical Impulse (Axon)} \\xrightarrow{\\text{Neurotransmitter Release}} \\text{Synaptic Cleft} \\xrightarrow{\\text{Receptor Binding}} \\text{Electrical Impulse (Next Dendrite)}",
    examinerNote: "5-mark question rubric: 2 marks for neuron parts, 2 marks for 5-step synaptic transmission, 1 mark for synaptic polarization.",
    source: "NCERT Section 6.1 / CBSE Board 2021, 2023, 2024"
  },
  {
    id: "sci_c6_q17",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 5,
    type: "LA",
    question: "Define hormones. Explain the specific endocrine origin and physiological function of each of the following hormones in human homeostasis:\n(a) Insulin\n(b) Thyroxine\n(c) Adrenaline\n(d) Testosterone\n(e) Estrogen",
    answer: "Definition: Hormones are non-nutrient, informational chemical messengers synthesized in trace quantities by ductless endocrine glands, secreted directly into the bloodstream, and transported to specific distant target organs to regulate physiological activity.\n\nEndocrine Origin & Physiological Functions:\n\n(a) Insulin:\n- Endocrine Origin: Beta cells of the Islets of Langerhans in the **Pancreas**.\n- Physiological Function: Lowers blood glucose levels by promoting cellular glucose uptake and stimulating conversion of excess glucose into glycogen in liver and muscle cells (prevents diabetes mellitus).\n\n(b) Thyroxine:\n- Endocrine Origin: **Thyroid Gland** (located in the neck; requires dietary iodine).\n- Physiological Function: Regulates basal metabolic rate (BMR), protein synthesis, and carbohydrate and lipid metabolism for optimal physical growth and neurological development.\n\n(c) Adrenaline:\n- Endocrine Origin: **Adrenal Gland** medulla (located atop each kidney).\n- Physiological Function: Emergency 'fight-or-flight' hormone; increases heart rate, dilates respiratory airways, elevates blood pressure, and shunts blood to skeletal muscles for rapid emergency response.\n\n(d) Testosterone:\n- Endocrine Origin: Interstitial (Leydig) cells of **Testes** in males.\n- Physiological Function: Stimulates spermatogenesis (sperm production) and development of male secondary sexual characteristics at puberty (deepening of voice, facial/body hair growth, increased muscle mass).\n\n(e) Estrogen:\n- Endocrine Origin: Follicular cells of **Ovaries** in females.\n- Physiological Function: Regulates development of female secondary sexual characteristics (breast development, widened pelvic girdle), stimulates ovum maturation, and regulates the menstrual cycle.",
    steps: [
      "1. Definition: Informational chemical messengers secreted directly into blood by ductless glands.",
      "2. Insulin: Pancreas -> blood glucose homeostasis.",
      "3. Thyroxine: Thyroid -> metabolic rate regulation.",
      "4. Adrenaline: Adrenal -> emergency fight-or-flight.",
      "5. Testosterone: Testes -> male sexual characteristics & spermatogenesis.",
      "6. Estrogen: Ovaries -> female sexual characteristics & menstrual regulation."
    ],
    explanation: "Hormonal control provides systemic, multi-organ chemical coordination operating in parallel with the fast electrical nervous system.",
    formula: "\\text{Endocrine Gland} \\to \\text{Hormone} \\xrightarrow{\\text{Blood Circulation}} \\text{Target Organ Receptor} \\to \\text{Homeostatic Response}",
    examinerNote: "Ensure both endocrine gland origin and functional role are answered for each of the 5 hormones (1 mark per subpart).",
    source: "NCERT Section 6.3 / CBSE Board 2022, 2024"
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
    question: "Read the following scenario and answer the questions that follow:\n\nMohit was cooking in the kitchen when he accidentally touched a red-hot metal skillet. Without a moment's hesitation, his hand pulled back violently before he even felt the pain or realized what had happened. Later, he wondered how his body pulled off such a lightening-fast reaction without his brain deciding to move his arm.\n\n(i) [1M] Name the biological phenomenon demonstrated by Mohit's rapid response, and identify the principal organ of the central nervous system that coordinates it.\n(ii) [1M] Write the step-by-step pathway of impulses in this reaction from stimulus to final action.\n(iii) [2M] Why is this biological mechanism crucial for the survival of multicellular organisms? State two specific advantages.",
    answer: "(i) Biological Phenomenon: Reflex Action.\nPrincipal Coordinating Organ: Spinal Cord.\n\n(ii) Step-by-Step Pathway of Reflex Arc:\n1. Heat stimulus from hot skillet is detected by thermoreceptors in skin.\n2. Sensory (afferent) neuron carries the electrical impulse into the spinal cord.\n3. In the spinal cord, a relay (interneuron) neuron processes the impulse and immediately switches the signal to a motor neuron.\n4. Motor (efferent) neuron conveys the response signal out of the spinal cord to the effector (biceps/arm muscle).\n5. Effector muscle contracts instantly, pulling the hand safely away from the skillet.\n\n(iii) Survival Significance & Two Advantages:\n1. Millisecond Reaction Time: By processing the impulse locally in the spinal cord without routing through complex conscious thinking centers of the brain, response latency is slashed to milliseconds, preventing catastrophic burn or tissue destruction.\n2. Neural Efficiency: It frees higher cognitive brain centers from managing repetitive emergency threats, allowing conscious awareness of pain to register after physical safety has already been secured.",
    steps: [
      "1. Identify reflex action and spinal cord as controlling center (1M).",
      "2. Outline unbroken reflex arc sequence: Receptor -> Sensory -> Spinal cord (Relay) -> Motor -> Effector (1M).",
      "3. Explain 2 survival advantages: prevention of severe tissue damage via instant execution, and offloading brain processing (2M)."
    ],
    explanation: "Reflex arcs evolved as primitive, highly optimized neural shortcuts ensuring organism survival against immediate physical hazards.",
    formula: "\\text{Hot Skillet} \\to \\text{Thermoreceptor} \\to \\text{Sensory Neuron} \\to \\text{Spinal Relay} \\to \\text{Motor Neuron} \\to \\text{Biceps Muscle}",
    examinerNote: "Award 1 mark for (i), 1 mark for complete pathway in (ii), and 1 mark each for the two survival reasons in (iii).",
    source: "NCERT Section 6.1.1 / CBSE Board 2024"
  },
  {
    id: "sci_c6_q19",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 4,
    type: "Case Study",
    question: "Read the experimental observation below and answer the questions that follow:\n\nA potted seedling was placed horizontally inside a dark room near a single open window receiving unilateral morning sunlight. Over seven days, the growing shoot bent sharply upward and towards the window, whereas the roots curved downward into the moist potting soil.\n\n(i) [1M] Name the directional growth movement exhibited by: (a) the shoot towards the window, and (b) the root into the soil.\n(ii) [1M] Identify the plant growth hormone responsible for the shoot curvature, and state where it is synthesized.\n(iii) [2M] Explain the cellular mechanism by which this hormone induces the shoot to bend towards the light source.",
    answer: "(i) Directional Movements:\n(a) Shoot: Positive Phototropism (growth towards light) and Negative Geotropism (growth away from gravity).\n(b) Root: Positive Geotropism (growth towards gravity) and Positive Hydrotropism (growth towards moisture).\n\n(ii) Plant Growth Hormone & Synthesis Site:\n- Hormone: **Auxin** (Indole-3-acetic acid).\n- Synthesis Site: Synthesized primarily at the growing **shoot apex (tip of the stem)**.\n\n(iii) Cellular Mechanism of Phototropic Curvature:\n1. When unilateral light falls on one side of the shoot, auxin diffuses away from the illuminated side towards the darker (shaded) side.\n2. The concentration of auxin becomes significantly higher in the cells on the shaded flank.\n3. In shoot tissues, elevated auxin concentration stimulates active hydrogen ion secretion, cell wall loosening, and rapid cell elongation.\n4. Cells on the shaded side elongate much faster than cells on the lighted side.\n5. This unequal (differential) rate of elongation on opposite sides forces the stem to curve and bend progressively towards the light.",
    steps: [
      "1. Part (i): Shoot = Positive phototropism; Root = Positive geotropism / hydrotropism (1M).",
      "2. Part (ii): Auxin synthesized at the shoot apex (1M).",
      "3. Part (iii): Lateral diffusion to shaded side -> higher auxin on shaded side -> faster cell elongation -> unequal growth causes bending towards light (2M)."
    ],
    explanation: "Phototropism is a classic demonstration of auxin redistribution creating differential growth rates across opposite tissue flanks.",
    formula: "\\text{Unilateral Light} \\to \\text{Auxin Lateral Migration} \\to \\text{Shaded Elongation} > \\text{Lit Elongation} \\to \\text{Curvature towards Light}",
    examinerNote: "Clearly state that auxin concentration is HIGHER on the shaded side in shoots, leading to FASTER cell elongation.",
    source: "NCERT Section 6.2 / CBSE Board 2023, 2024"
  },

  // ==========================================
  // ADDITIONAL PYQs & MASTERCLASS PRACTICE
  // ==========================================
  {
    id: "sci_c6_q20",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 3,
    type: "SA",
    question: "Tabulate three fundamental differences between Nervous Coordination and Hormonal (Chemical) Coordination in animals.",
    answer: "Differences between Nervous and Hormonal Coordination:\n\n| Parameter | Nervous Coordination | Hormonal (Chemical) Coordination |\n| :--- | :--- | :--- |\n| **Nature of Signal** | Electrical action potentials supplemented by neurotransmitters at synapses. | Exclusively chemical messengers (hormones) circulating in blood. |\n| **Speed of Action** | Extremely fast and rapid (conduction occurs in milliseconds). | Comparatively slow (takes seconds, minutes, or hours to act). |\n| **Duration of Effect** | Brief, transient, and short-lived; ends immediately after stimulus stops. | Prolonged, persistent, and long-lasting metabolic alterations. |\n| **Transmission Route** | Conducted along dedicated anatomical nerve fibers to specific target cells. | Carried non-directionally throughout general bloodstream to widespread target tissues. |",
    steps: [
      "1. Parameter 1: Signal type (Electrical/synaptic vs Chemical bloodstream).",
      "2. Parameter 2: Speed (Milliseconds rapid vs Slow minutes/hours).",
      "3. Parameter 3: Duration (Short-lived/instantaneous vs Long-lasting/persistent).",
      "4. Parameter 4: Specificity (Direct neural wiring vs Broad systemic circulation)."
    ],
    explanation: "Animals utilize a dual coordination system: nervous system for rapid split-second reflexes, and endocrine system for sustained developmental and metabolic control.",
    formula: "\\text{Nervous: Electrical + Rapid + Localized} \\quad \\text{vs} \\quad \\text{Hormonal: Chemical + Slow + Systemic}",
    examinerNote: "Presenting differences in a neat markdown table with clear parameters earns maximum marks.",
    source: "NCERT Section 6.3 / CBSE Board 2022, 2024"
  },
  {
    id: "sci_c6_q21",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 2,
    type: "VSA",
    question: "How does the human body detect and regulate an abrupt rise in blood sugar levels following a carbohydrate-rich meal?",
    answer: "1. Detection: The elevated concentration of glucose in arterial blood is directly sensed by specialized receptor beta-cells located in the Islets of Langerhans of the **Pancreas**.\n2. Response & Regulation: In response, the pancreatic beta-cells secrete the hormone **Insulin** into the bloodstream. Insulin promotes cellular glucose absorption across body tissues and accelerates conversion of excess glucose into insoluble **glycogen** in liver and skeletal muscle cells (glycogenesis), restoring blood sugar to its normal physiological baseline (~80–120 mg/dL).",
    steps: [
      "1. Trigger: Meal increases blood glucose above baseline.",
      "2. Sensor & Secretion: Pancreas senses elevation and releases insulin.",
      "3. Target Action: Liver and muscle cells convert glucose into storage glycogen.",
      "4. Outcome: Blood glucose drops back to normal set-point."
    ],
    explanation: "This is a prime example of physiological negative feedback homeostasis maintaining internal equilibrium.",
    formula: "\\text{High Blood Glucose} \\to \\text{Pancreatic } \\beta\\text{-cells} \\to \\text{Insulin} \\to \\text{Glucose} \\to \\text{Glycogen} \\to \\text{Normal Glucose}",
    examinerNote: "Mention 'Pancreas', 'Insulin', and conversion of 'glucose to glycogen' in liver/muscles for full 2 marks.",
    source: "NCERT Section 6.3 / CBSE Board 2021, 2024"
  },
  {
    id: "sci_c6_q22",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "Tendrils of pea plants coil around mechanical supports when they make physical contact. This directional movement is an example of:",
    options: ["Thigmotropism", "Phototropism", "Chemotropism", "Hydrotropism"],
    correctOption: 0,
    answer: "Option (a): Thigmotropism",
    steps: [
      "1. Thigmotropism is a directional growth movement in response to mechanical contact or touch.",
      "2. When a tendril touches an object, auxin migrates to the side facing away from the support.",
      "3. Non-contacting side grows much faster, curling the tendril around the support.",
      "4. Stimulus is touch ('thigma')."
    ],
    explanation: "Reason: Thigmotropism ('thigma' = touch) is a directional growth response triggered by physical contact. When the sensitive tip of a tendril contacts a solid support, auxin moves away to the side not in contact with the support. Cells on the non-contacting side elongate significantly faster than cells touching the support, causing the tendril to wrap tightly around the host.\n\n• Why other options are wrong:\n- Option (b) Phototropism: Growth orientation in response to light.\n- Option (c) Chemotropism: Growth guided by chemical gradients, such as pollen tubes growing towards ovules.\n- Option (d) Hydrotropism: Growth directed towards water or moisture gradients.",
    formula: "\\text{Contact Stimulus} \\to \\text{Thigmotropism} \\to \\text{Differential Elongation} \\to \\text{Tendril Coiling}",
    examinerNote: "Tendrils coiling = thigmotropism. Folding of Mimosa leaves on touch = thigmonasty (non-growth). Do not confuse them.",
    source: "NCERT Section 6.2 / CBSE Board 2023, 2024"
  },
  {
    id: "sci_c6_q23",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 2,
    type: "VSA",
    question: "Why is the pituitary gland historically referred to as the 'master gland' of the human body? Name any two hormones secreted by it and state their functions.",
    answer: "The pituitary gland is called the 'master gland' because it secretes numerous trophic hormones that stimulate and regulate the secretions of several other major endocrine glands (e.g., thyroid, adrenals, and gonads), in addition to exercising direct physiological control over somatic growth.\n\nTwo Pituitary Hormones and Functions:\n1. Growth Hormone (GH / Somatotropin): Regulates somatic tissue growth, cellular protein synthesis, and bone elongation. (Hyposecretion causes Dwarfism; hypersecretion causes Gigantism).\n2. Thyroid Stimulating Hormone (TSH): Stimulates the thyroid gland to synthesize and secrete thyroxine.",
    steps: [
      "1. Rationale: It controls and commands other peripheral endocrine glands through trophic hormones.",
      "2. Hormone 1: Growth Hormone (GH) -> somatic growth, bone elongation.",
      "3. Hormone 2: Thyroid Stimulating Hormone (TSH) -> triggers thyroid to release thyroxine.",
      "4. Alternative: Adrenocorticotropic Hormone (ACTH), Follicle Stimulating Hormone (FSH), or Luteinizing Hormone (LH)."
    ],
    explanation: "Situated at the base of the brain beneath the hypothalamus, the pituitary gland orchestrates widespread endocrine functions.",
    formula: "\\text{Pituitary Gland} \\xrightarrow{\\text{Trophic Hormones (TSH, ACTH, FSH)}} \\text{Target Endocrine Glands} \\to \\text{Endocrine Response}",
    examinerNote: "Explain WHY it is called the master gland (controls other glands) and provide 2 valid hormones with functions.",
    source: "NCERT Section 6.3 / CBSE Board 2022, 2023"
  },
  {
    id: "sci_c6_q24",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 3,
    type: "SA",
    question: "Explain with a well-reasoned physiological example how the negative feedback mechanism maintains optimal hormone levels in human blood.",
    answer: "Definition: A feedback mechanism is a homeostatic regulatory loop in which the end result or output of a biological process feeds back to inhibit or stimulate the initiating control center, thereby maintaining hormonal concentrations within narrow physiological limits.\n\nExample: Regulation of Blood Glucose by Insulin (Negative Feedback Loop):\n1. Stimulus: Following food consumption, blood glucose concentration rises above the normal baseline (~80–120 mg/dL).\n2. Sensor & Secretion: Pancreatic beta-cells detect elevated glucose and ramp up insulin secretion into the bloodstream.\n3. Effector Action: Insulin directs body cells to take up glucose and stimulates liver and muscle cells to convert glucose into glycogen.\n4. Negative Feedback Inactivation: As blood glucose levels decline back toward normal, the stimulus for insulin secretion diminishes, and pancreatic beta-cells down-regulate insulin output.\n5. Outcome: This automatic shut-off prevents blood glucose from plummeting dangerously low (hypoglycemia), stabilizing blood sugar.",
    steps: [
      "1. Define negative feedback: Self-limiting control loop that counteracts deviations from a set-point.",
      "2. Trace step 1: Elevated blood sugar triggers pancreatic insulin secretion.",
      "3. Trace step 2: Insulin converts blood glucose into stored glycogen.",
      "4. Trace step 3: Falling blood glucose shuts off further insulin secretion.",
      "5. Emphasize homeostatic balance."
    ],
    explanation: "Negative feedback acts like a household thermostat: when temperature reaches the set-point, the furnace turns off automatically.",
    formula: "\\uparrow \\text{Blood Glucose} \\to \\text{Pancreas releases Insulin} \\to \\downarrow \\text{Blood Glucose} \\to \\text{Insulin secretion halted}",
    examinerNote: "Use either the insulin-glucose loop or the TSH-thyroxine loop. Explicitly illustrate the 'turn-off' step to secure all 3 marks.",
    source: "NCERT Section 6.3 / CBSE Board 2022, 2024"
  },
  {
    id: "sci_c6_q25",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): At a chemical synapse, an electrical nerve impulse is converted into chemical neurotransmitters that cross the synaptic cleft.\nReason (R): Synaptic transmission is bidirectional because chemical neurotransmitter receptors are equally distributed on both axon endings and dendrites.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 2,
    answer: "Option (c): A is true but R is false",
    steps: [
      "1. Check Assertion (A): At a chemical synapse, electrical impulses cause vesicle fusion and neurotransmitter release into the synaptic cleft. (True)",
      "2. Check Reason (R): Synaptic transmission is claimed to be bidirectional with receptors on both sides. (False - transmission is strictly unidirectional; vesicles are only in axon terminals and receptors are only on dendrites).",
      "3. Conclusion: A is true, but R is false."
    ],
    explanation: "Reason: Assertion (A) is TRUE because when an electrical impulse reaches the axon terminal, it prompts synaptic vesicles to release neurotransmitters (e.g. acetylcholine) into the synaptic cleft. Reason (R) is FALSE because synaptic transmission is strictly UNIDIRECTIONAL (one-way). Neurotransmitter vesicles exist exclusively in presynaptic axon terminals, and specific neurotransmitter receptor proteins are situated exclusively on the postsynaptic dendritic membrane. Therefore, impulses cannot travel backwards from dendrite to axon.\n\n• Why other options are wrong:\n- Option (a) & (b): Incorrect because Reason (R) makes an erroneous biological claim about bidirectional receptors.\n- Option (d): Incorrect because Assertion (A) is biologically accurate.",
    formula: "\\text{Synaptic Polarization: Axon Terminal (Vesicles only)} \\to \\text{Dendrite (Receptors only)} \\implies \\text{Unidirectional}",
    examinerNote: "Classic board trap: Nerve transmission across a synapse is strictly one-way due to the anatomical polarization of vesicle release vs receptor distribution.",
    source: "CBSE Sample Question Paper 2026 / NCERT Exemplar"
  },
  {
    id: "sci_c6_q26",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 5,
    type: "LA",
    question: "(a) Tabulate two fundamental differences between tropic movements and nastic movements in plants, citing two distinct examples for each. [2M]\n(b) Describe how auxin induces phototropic curvature in a growing shoot tip illuminated unilaterally. [2M]\n(c) Name the specific phytohormone responsible for each of the following:\n  (i) Promotion of rapid cell division in fruits and seeds\n  (ii) Wilting and shedding of leaves during environmental drought stress\n  (iii) Internodal stem elongation and overcoming genetic dwarfism. [1M]",
    answer: "(a) Tropic vs Nastic Movements:\n\n| Feature | Tropic Movements | Nastic Movements |\n| :--- | :--- | :--- |\n| **Directionality** | Directional; movement is strictly oriented relative to the direction of stimulus. | Non-directional; movement is independent of the direction of stimulus. |\n| **Mechanism** | Growth-dependent; involves permanent, irreversible differential cell growth. | Growth-independent; involves rapid, reversible changes in cell turgor pressure. |\n| **Speed** | Very slow response (takes days/weeks). | Rapid, immediate response (occurs in seconds). |\n| **Examples** | Stem phototropism bending toward light; Root geotropism growing downward. | Drooping of *Mimosa pudica* leaves on touch; Opening/closing of flower petals. |\n\n(b) Phototropic Curvature Mechanism:\n1. Auxin is synthesized at the growing shoot apex.\n2. When light shines unilaterally on one side of the shoot, auxin diffuses away from the lighted flank towards the darker, shaded flank.\n3. The accumulated auxin on the shaded side causes cells on that side to elongate much faster than cells on the illuminated side.\n4. This differential growth rate between opposite sides causes the shoot to bend towards the light source.\n\n(c) Phytohormone Identification:\n(i) Promotion of rapid cell division: **Cytokinins**\n(ii) Wilting and shedding of leaves: **Abscisic Acid (ABA)**\n(iii) Internodal stem elongation: **Gibberellins**",
    steps: [
      "1. Part (a): Table contrasting directionality, growth dependence, speed, and 2 examples each (2M).",
      "2. Part (b): Lateral migration of auxin to shaded flank -> increased elongation on shaded flank -> unequal growth causes bending towards light (2M).",
      "3. Part (c): (i) Cytokinin, (ii) Abscisic acid, (iii) Gibberellin (1M)."
    ],
    explanation: "Comprehensive 5-mark question synthesizing plant movement mechanics, auxin neuro-chemical analogue signaling, and phytohormonal roles.",
    formula: "\\text{Tropic = Directional + Growth-Driven} \\quad \\text{vs} \\quad \\text{Nastic = Non-directional + Turgor-Driven}",
    examinerNote: "Award 2 marks for tropic vs nastic contrast, 2 marks for auxin shaded diffusion, and 1 mark for hormone identification.",
    source: "CBSE Board Previous Years (5 Marks) / NCERT Chapter 6"
  },
  {
    id: "sci_c6_q27",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "Involuntary actions such as blood pressure, salivation, swallowing, peristalsis, and vomiting are regulated and controlled by which part of the human brain?",
    options: [
      "Cerebrum in forebrain",
      "Cerebellum in hindbrain",
      "Medulla in hindbrain",
      "Pons in hindbrain"
    ],
    correctOption: 2,
    answer: "Option (c): Medulla in hindbrain",
    steps: [
      "1. Cerebrum: Voluntary action, sensory perception, intelligence, thoughts.",
      "2. Cerebellum: Balance, posture, motor coordination.",
      "3. Medulla oblongata: Autonomic involuntary reflexes including BP, salivation, vomiting, swallowing.",
      "4. Pons: Pneumotaxic center assisting respiration and bridging brain regions."
    ],
    explanation: "Reason: The medulla oblongata (part of the hindbrain) houses autonomic reflex centers that govern essential involuntary visceral functions including cardiac rate, arterial blood pressure, respiratory rhythm, salivation, peristalsis, swallowing, coughing, and vomiting.\n\n• Why other options are wrong:\n- Option (a) Cerebrum: Mediates voluntary actions, conscious thinking, reasoning, sensory analysis, and memory.\n- Option (b) Cerebellum: Coordinates voluntary muscle movements, posture, and dynamic body balance.\n- Option (d) Pons: Bridges different brain regions and aids the medulla in pneumatic respiratory rhythm regulation.",
    formula: "\\text{Medulla Oblongata (Hindbrain)} \\to \\text{Involuntary Visceral Reflexes (BP, Salivation, Vomiting, Respiration)}",
    examinerNote: "Direct NCERT Section 6.1.2 question. Cerebellum controls posture/balance; Medulla controls involuntary reflexes.",
    source: "NCERT Class 10 Section 6.1.2 / CBSE Board 2024"
  },
  {
    id: "sci_c6_q28",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 1,
    type: "MCQ",
    question: "The rapid drooping and folding of leaves in the sensitive plant (Mimosa pudica) upon touching is primarily caused by:",
    options: [
      "Rapid cell elongation on the lower surface of petiole",
      "Sudden loss of water and turgor pressure changes in swollen leaf bases (pulvini)",
      "Directional secretion of auxin towards shaded tissues",
      "Irreversible cell division in stem vascular bundles"
    ],
    correctOption: 1,
    answer: "Option (b): Sudden loss of water and turgor pressure changes in swollen leaf bases (pulvini)",
    steps: [
      "1. Mimosa pudica leaves exhibit thigmonasty (touch response without growth).",
      "2. When touched, an electrical-chemical signal propagates to the swollen pulvini at leaf bases.",
      "3. Cells in the lower half of the pulvinus rapidly lose potassium ions and water to intercellular spaces.",
      "4. Loss of turgor pressure causes the cells to become flaccid, resulting in instantaneous drooping."
    ],
    explanation: "Reason: The sensitive plant (*Mimosa pudica*) displays a non-growth nastic movement (thigmonasty). Upon mechanical contact, an electrical-chemical signal propagates through the plant to the swollen leaf bases called pulvini. This causes cells in the lower half of each pulvinus to rapidly lose water to surrounding intercellular spaces (via ion efflux). The sudden collapse of turgor pressure turns the cells flaccid, causing the petiole and leaflets to collapse and fold instantly.\n\n• Why other options are wrong:\n- Option (a): Thigmonasty is growth-independent and does not involve cell elongation.\n- Option (c): Auxin redistribution drives directional, slow growth responses (tropisms), not rapid turgor collapses.\n- Option (d): The movement is fully reversible within 15–20 minutes once water returns to pulvini cells; no cell division occurs.",
    formula: "\\text{Touch} \\to \\text{Electrochemical Signal} \\to \\text{Water Efflux from Pulvini} \\to \\text{Loss of Turgor} \\to \\text{Leaf Drooping}",
    examinerNote: "NCERT Section 6.2. Emphasize that this is a non-growth, turgor-driven nastic movement.",
    source: "NCERT Section 6.2 / CBSE Board 2023, 2024"
  },
  {
    id: "sci_c6_q29",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 2,
    type: "VSA",
    question: "Differentiate between an Involuntary Action and a Reflex Action on the basis of: (i) Primary controlling organ in the central nervous system, and (ii) Speed and conscious awareness.",
    answer: "Involuntary Action vs Reflex Action:\n\n1. Controlling Organ in CNS:\n   - Involuntary Action: Controlled primarily by the brainstem in the hindbrain (**Medulla oblongata**) and midbrain (e.g. heartbeat, peristalsis, blood pressure).\n   - Reflex Action: Controlled primarily at the level of the **Spinal Cord**, completely bypassing conscious brain processing (e.g. jerking hand away from a hot object).\n\n2. Speed & Conscious Awareness:\n   - Involuntary Action: Continuous, steady physiological rhythms that operate automatically without conscious intervention or sudden awareness.\n   - Reflex Action: Extremely rapid, instantaneous emergency survival response to an acute external sensory stimulus, occurring automatically before conscious awareness of pain registers in the brain.",
    steps: [
      "1. Controlling organ: Involuntary = Medulla (Hindbrain); Reflex = Spinal Cord.",
      "2. Speed & consciousness: Involuntary = continuous automatic rhythm; Reflex = instantaneous emergency reaction executed before conscious perception.",
      "3. Give one distinct example for each."
    ],
    explanation: "Reflex arcs represent emergency spinal bypasses for immediate survival, distinct from autonomic brainstem vegetative rhythms.",
    formula: "\\text{Involuntary: Brainstem (Medulla)} \\quad \\text{vs} \\quad \\text{Reflex: Spinal Cord Emergency Loop}",
    examinerNote: "1 mark for controlling organ distinction; 1 mark for speed/conscious emergency difference.",
    source: "NCERT Section 6.1.1 / CBSE Board 2024"
  },
  {
    id: "sci_c6_q30",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 2,
    type: "VSA",
    question: "Why is the use of iodised salt strongly recommended in daily human diet? Name the endocrine gland involved, the hormone it synthesizes, and describe the clinical condition resulting from iodine deficiency.",
    answer: "Iodised Salt & Thyroid Physiology:\n\n1. Biological Rationale: Iodine is an essential trace micronutrient required by the **Thyroid Gland** to synthesize the metabolic hormone **Thyroxin**.\n2. Role of Thyroxin: Thyroxin regulates carbohydrate, protein, and fat metabolism in the body to provide the optimum balance for physical and mental development.\n3. Clinical Condition of Deficiency:\n   - Insufficient dietary iodine leads to deficiency of thyroxin, resulting in **Goitre**.\n   - Visible Clinical Symptom: The thyroid gland hypertrophies (enlarges) abnormally in an effort to trap trace iodine from blood, causing a prominently swollen neck.",
    steps: [
      "1. Endocrine Gland: Thyroid gland (located in neck).",
      "2. Hormone: Thyroxin (regulates carbohydrate/protein/fat metabolism).",
      "3. Deficiency disease: Goitre (characterized by visibly swollen neck/enlarged thyroid)."
    ],
    explanation: "Dietary iodine ensures optimal thyroxine synthesis, preventing metabolic slowing and endemic goitre.",
    formula: "\\text{Dietary Iodine} \\to \\text{Thyroid Gland} \\to \\text{Thyroxin (Metabolism)}; \\quad \\text{Deficiency} \\to \\text{Swollen Neck (Goitre)}",
    examinerNote: "1 mark for thyroid gland and thyroxin hormone; 1 mark for Goitre and swollen neck symptom.",
    source: "NCERT Section 6.3 / CBSE Board 2024"
  },
  {
    id: "sci_c6_q31",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 3,
    type: "SA",
    question: "(a) Name the endocrine gland and hormone responsible for reducing elevated blood glucose levels after a carbohydrate-rich meal.\n(b) Describe step-by-step how the negative feedback mechanism controls the timing and quantity of hormone release in a healthy human.\n(c) What disease occurs when this feedback regulation fails to produce adequate hormone, and how is it medically managed?",
    answer: "(a) Endocrine Gland & Hormone:\n- Endocrine Gland: **Pancreas** (specifically, beta cells of Islets of Langerhans).\n- Hormone: **Insulin**.\n\n(b) Step-by-Step Negative Feedback Mechanism:\n1. Trigger: Ingestion of food elevates blood glucose concentration above the normal baseline (~80–120 mg/dL).\n2. Detection & Secretion: The elevated glucose levels are detected directly by pancreatic islet beta-cells, which respond by secreting insulin into the bloodstream.\n3. Cellular Action: Insulin stimulates body cells to absorb glucose from blood and accelerates conversion of glucose into glycogen in liver and muscle cells (glycogenesis).\n4. Negative Feedback Loop: As blood glucose levels fall back toward the normal set-point, pancreatic cells sense the decrease and down-regulate insulin secretion, preventing hypoglycemia.\n\n(c) Disease & Medical Management:\n- Disease: **Diabetes Mellitus**.\n- Medical Management: Managed through strict dietary control, physical exercise, oral hypoglycemic drugs, and regular subcutaneous injections of insulin to maintain physiological glucose clearance.",
    steps: [
      "1. Part (a): Pancreas and Insulin (1M).",
      "2. Part (b): 4-step negative feedback cycle: High glucose -> Insulin secretion -> Glycogen storage -> Fall in glucose stops insulin (1.5M).",
      "3. Part (c): Diabetes mellitus managed by dietary regulation and insulin injections (0.5M)."
    ],
    explanation: "Pancreatic endocrine feedback maintains blood glucose concentration within narrow life-supporting physiological boundaries.",
    formula: "\\text{High Blood Glucose} \\to \\text{Pancreas} \\to \\text{Insulin} \\to \\text{Glucose into Glycogen} \\to \\text{Normal Blood Glucose}",
    examinerNote: "1 mark for Pancreas and Insulin; 1.5 marks for four-step feedback mechanism; 0.5 mark for Diabetes & insulin injections.",
    source: "NCERT Section 6.3 / CBSE Board 2024"
  },
  {
    id: "sci_c6_q32",
    chapter: 6,
    chapterName: "Control and Coordination",
    marks: 5,
    type: "LA",
    question: "(a) Trace the complete path of an electrical nerve impulse through a neuron from its generation at the sensory receptor to its passage across a chemical synapse to the next neuron. [2.5M]\n(b) Why can nerve impulses travel in only one direction across a chemical synapse? [1M]\n(c) How does a muscle cell execute physical movement and contraction when an electrical impulse arrives at a Neuromuscular Junction (NMJ)? [1.5M]",
    answer: "(a) Pathway of Nerve Impulse:\n1. Generation: Sensory stimulus acts on receptor ending, triggering a chemical reaction that creates an electrical impulse at the dendritic tip of the neuron.\n2. Intra-neuronal Transmission: The electrical impulse travels rapidly from Dendrite → Cyton (cell body) → along the Axon to the Axon Terminals.\n3. Synaptic Transmission: At the axon terminal, the electrical impulse stimulates synaptic vesicles to fuse with the presynaptic membrane, releasing chemical neurotransmitters (acetylcholine) into the microscopic fluid-filled gap called the Synaptic Cleft.\n4. Reception: Neurotransmitter molecules diffuse across the synapse and bind to specific receptor proteins on the dendrite of the adjacent neuron, generating a fresh electrical impulse that continues down the next neuron.\n\n(b) Unidirectional Nature of Synapse:\n- Chemical synapses are anatomically and functionally polarized.\n- Neurotransmitter storage vesicles are located exclusively inside the axon terminals of the presynaptic neuron, and specific neurotransmitter receptor sites are located exclusively on the dendritic membrane of the postsynaptic neuron.\n- Hence, transmission can strictly occur only from axon terminal to dendrite, never in reverse.\n\n(c) Muscle Cell Contraction at NMJ:\n- When an action potential reaches the neuromuscular junction (NMJ), the motor axon releases acetylcholine, which binds to muscle membrane receptors and causes cellular depolarization.\n- This electrical stimulus triggers the rapid release of calcium ions inside the muscle fiber cytoplasm.\n- The calcium ions activate specialised contractile proteins (actin and myosin filaments) to slide over one another, rearranging their cellular geometry and causing the muscle cell to shorten (contract), generating physical movement.",
    steps: [
      "1. Part (a): Dendrite -> Cyton -> Axon -> Axon terminal -> Neurotransmitter release across synaptic cleft -> Next dendrite (2.5M).",
      "2. Part (b): Anatomical polarization: Vesicles only at axon terminals; receptors only on dendrites (1M).",
      "3. Part (c): Neuromuscular junction: Acetylcholine release -> depolarization -> calcium release -> actin-myosin filament sliding causes muscle cell contraction (1.5M)."
    ],
    explanation: "Comprehensive 5-mark answer detailing action potential propagation, synaptic chemical transmission, and muscular mechanical actuation at the neuromuscular junction.",
    formula: "\\text{Dendrite} \\to \\text{Cyton} \\to \\text{Axon} \\to \\text{Axon Terminal} \\xrightarrow{\\text{Neurotransmitter}} \\text{Synapse} \\to \\text{Next Dendrite} / \\text{Muscle Effector}",
    examinerNote: "2.5 marks for complete sequence with neurotransmitter release; 1 mark for synaptic polarization; 1.5 marks for actin-myosin contraction at NMJ.",
    source: "CBSE Class 10 Board 2024 / Exemplar HOTS"
  }
];
