import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH10_QUESTIONS: VaultQuestion[] = [
  // ==========================================
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON (12 Questions)
  // ==========================================
  {
    id: "sci_c10_q1",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "The ability of the human eye to focus on both nearby and distant objects by altering the focal length of the crystalline lens is called:",
    options: [
      "Binocular vision",
      "Power of accommodation",
      "Persistence of vision",
      "Visual adaptation"
    ],
    correctOption: 1,
    answer: "Option (b): Power of accommodation.",
    steps: [
      "1. Power of accommodation is the natural ability of the eye lens to adjust its curvature and focal length via the ciliary muscles.",
      "2. For distant objects: Ciliary muscles relax -> lens becomes thin -> focal length increases ($f \\approx 2.5\\text{ cm}$).",
      "3. For nearby objects: Ciliary muscles contract -> lens becomes thicker/more convex -> focal length decreases.",
      "4. This brings images of objects at varying distances to sharp focus directly on the retina."
    ],
    explanation: "Reason: Power of accommodation is the natural physiological capacity of the ciliary muscles to modify the curvature and focal length of the flexible crystalline eye lens, enabling sharp focusing of images of both distant and nearby objects on the retina.\n\n• Why other options are wrong:\n- Option (a) Binocular vision: The ability to focus on an object with both eyes simultaneously to perceive depth and 3D spatial orientation.\n- Option (c) Persistence of vision: The phenomenon where an optical image persists on the retina for approximately 1/16th of a second after the light stimulus ceases.\n- Option (d) Visual adaptation: The ability of the eye to adjust its sensitivity to varying levels of ambient darkness or illumination (e.g. pupil dilation).",
    formula: "\\text{Accommodation: Ciliary muscles alter lens curvature to focus on retina}",
    examinerNote: "Do not confuse accommodation (focus adjustment) with persistence of vision (1/16th second image retention).",
    source: "NCERT Class 10 Section 10.1 / Board 2023"
  },
  {
    id: "sci_c10_q2",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "A student sitting on the last bench cannot read the writing on the blackboard distinctly, but can read their textbook easily. The defect of vision and the type of corrective lens required are:",
    options: [
      "Hypermetropia; convex lens",
      "Myopia; concave lens",
      "Presbyopia; bifocal lens",
      "Astigmatism; cylindrical lens"
    ],
    correctOption: 1,
    answer: "Option (b): Myopia; concave lens.",
    steps: [
      "1. The student can see nearby objects (textbook) clearly, but distant objects (blackboard) are blurred.",
      "2. This condition is Myopia (near-sightedness / short-sightedness).",
      "3. In a myopic eye, the image of distant objects is focused in front of the retina due to excessive lens curvature or eyeball elongation.",
      "4. A concave (diverging) lens of suitable power diverges incoming parallel rays so they focus sharply on the retina."
    ],
    explanation: "Reason: The student can see nearby objects (textbook) comfortably but struggles to focus on distant objects (blackboard). This defect is Myopia (near-sightedness / short-sightedness). Parallel rays from distant objects converge in front of the retina due to excessive lens curvature or eyeball elongation. A diverging concave lens of suitable focal length is prescribed to diverge incoming parallel rays so they focus sharply on the retina.\n\n• Why other options are wrong:\n- Option (a) Hypermetropia; convex lens: Hypermetropia is far-sightedness (difficulty seeing nearby objects like textbooks, while distant vision is clear).\n- Option (c) Presbyopia; bifocal lens: An age-related progressive weakening of accommodation occurring in elderly individuals.\n- Option (d) Astigmatism; cylindrical lens: A defect caused by irregular corneal curvature causing blurred vision in both near and far planes simultaneously.",
    formula: "\\text{Myopia} \\implies \\text{Concave lens of power } P = -\\frac{1}{d(\\text{m})}",
    examinerNote: "Myopia = can see near, cannot see far = concave lens (negative power).",
    source: "NCERT Class 10 Section 10.2 / Board 2024"
  },
  {
    id: "sci_c10_q3",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): The clear sky appears blue during the daytime.\nReason (R): Atmospheric gas molecules and fine particles scatter shorter wavelength blue light much more strongly than longer wavelength red light.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "(A) is false but (R) is true."
    ],
    correctOption: 0,
    answer: "Option (a): Both (A) and (R) are true and (R) is the correct explanation of (A).",
    steps: [
      "1. Assertion (A) is true: The sky appears blue in clear daytime.",
      "2. Reason (R) is true: According to Rayleigh's law of scattering, intensity of scattering is inversely proportional to fourth power of wavelength ($I \\propto 1/\\lambda^4$).",
      "3. Blue light ($\\lambda \\approx 450\\text{ nm}$) scatters nearly 10 to 16 times more intensely than red light ($\\lambda \\approx 700\\text{ nm}$).",
      "4. Reason correctly explains why scattered blue light enters our eyes from all directions in the daytime sky."
    ],
    explanation: "Reason: Assertion (A) is TRUE because the sky has an azure blue hue on clear sunny days. Reason (R) is TRUE because atmospheric nitrogen and oxygen molecules have dimensions smaller than the wavelength of visible light. According to Rayleigh's law of scattering, scattering intensity is inversely proportional to the fourth power of wavelength ($I \\propto 1/\\lambda^4$). Because blue light has a much shorter wavelength than red ($\\lambda_{\\text{red}} \\approx 1.8 \\lambda_{\\text{blue}}$), blue light scatters nearly 10 to 16 times more strongly across all directions of the sky dome. Reason (R) provides the complete physical mechanism for Assertion (A).\n\n• Why other options are wrong:\n- Option (b): Incorrect because Reason (R) directly explains the color in Assertion (A).\n- Option (c): Incorrect because Reason (R) is a fundamental optical law.\n- Option (d): Incorrect because Assertion (A) is an observed reality.",
    formula: "I_{\\text{scatter}} \\propto \\frac{1}{\\lambda^4}",
    examinerNote: "Although violet has an even shorter wavelength, the sun emits less violet and human eyes are much more sensitive to blue.",
    source: "NCERT Class 10 Section 10.6 / Board 2022, 2024"
  },
  {
    id: "sci_c10_q4",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "The least distance of distinct vision (near point) for a normal young adult eye is:",
    options: ["2.5 cm", "25 mm", "25 cm", "Infinity"],
    correctOption: 2,
    answer: "Option (c): 25 cm.",
    steps: [
      "1. Near point is the minimum distance at which an object can be seen most distinctly without strain.",
      "2. For a normal young adult eye, this least distance of distinct vision is 25 cm.",
      "3. The far point of a normal eye is infinity ($\\infty$)."
    ],
    explanation: "Reason: The least distance of distinct vision (also termed the near point, $D$) is the closest distance at which an object can be viewed sharply and comfortably without inducing eye strain. For a healthy young adult eye, this distance is standardized at $25\\text{ cm}$ (or $0.25\\text{ m}$).\n\n• Why other options are wrong:\n- Option (a) 2.5 cm: Incorrect; 2.5 cm is approximately the diameter of the human eyeball ($2.3\\text{ cm}$), not the near point.\n- Option (b) 25 mm: Incorrect unit trap ($25\\text{ mm} = 2.5\\text{ cm}$, 10 times too close).\n- Option (d) Infinity: Infinity ($\\infty$) is the Far Point of a normal human eye, not the near point.",
    formula: "d = 25\\text{ cm} = 0.25\\text{ m}",
    examinerNote: "Take note of units: 25 cm, NOT 25 mm or 2.5 cm.",
    source: "NCERT Class 10 Section 10.1"
  },
  {
    id: "sci_c10_q5",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "When a narrow beam of white light passes through a glass prism, it splits into a spectrum of constituent colours. Which colour suffers the maximum deviation?",
    options: ["Red", "Yellow", "Green", "Violet"],
    correctOption: 3,
    answer: "Option (d): Violet.",
    steps: [
      "1. Refractive index of glass is highest for violet light (shortest wavelength in visible spectrum).",
      "2. Angle of deviation $\\delta \\approx (n - 1)A$.",
      "3. Since $n_{\\text{violet}} > n_{\\text{red}}$, violet light bends (deviates) the most, and red deviates the least."
    ],
    explanation: "Reason: In glass, light of different wavelengths travels at different speeds. Violet light has the shortest wavelength ($\\sim 400\\text{ nm}$) in the visible spectrum and travels slowest in glass ($v_{\\text{violet}} < v_{\\text{red}}$). By Snell's Law and Cauchy's dispersion formula, the refractive index of glass is highest for violet light ($n_{\\text{violet}} > n_{\\text{red}}$). As deviation $\\delta \\approx (n - 1)A$, violet light suffers the greatest angular deviation, emerging at the bottom of the spectrum.\n\n• Why other options are wrong:\n- Option (a) Red: Travels fastest in glass and has the lowest refractive index, therefore suffering the LEAST deviation (emerges at the top).\n- Option (b) Yellow: The mean color of the spectrum, suffering intermediate deviation.\n- Option (c) Green: Suffers intermediate deviation between yellow and blue.",
    formula: "\\delta_{\\text{violet}} > \\delta_{\\text{indigo}} > \\dots > \\delta_{\\text{red}}",
    examinerNote: "In VIBGYOR, Violet deviates most (at the base of the prism); Red deviates least.",
    source: "NCERT Class 10 Section 10.3 / Board 2022"
  },
  {
    id: "sci_c10_q6",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "A doctor prescribes a corrective lens of power -2.5 D for a patient. The focal length of the lens and the defect of vision are:",
    options: [
      "-40 cm; Myopia",
      "+40 cm; Hypermetropia",
      "-25 cm; Myopia",
      "+25 cm; Presbyopia"
    ],
    correctOption: 0,
    answer: "Option (a): -40 cm; Myopia.",
    steps: [
      "1. Power formula: $P = \\frac{1}{f(\\text{in metres})} \\implies f = \\frac{1}{P} = \\frac{1}{-2.5\\text{ D}} = -0.4\\text{ m} = -40\\text{ cm}$.",
      "2. A negative focal length indicates a concave (diverging) lens.",
      "3. Concave lenses are prescribed to correct Myopia (near-sightedness)."
    ],
    explanation: "Reason: Optical power $P = \\frac{1}{f(\\text{m})} \\implies f = \\frac{1}{P} = \\frac{1}{-2.5\\text{ D}} = -0.4\\text{ m} = -40\\text{ cm}$. A negative focal length and negative power signify a diverging (concave) lens, which is universally prescribed to correct Myopia (near-sightedness).\n\n• Why other options are wrong:\n- Option (b) +40 cm; Hypermetropia: Incorrect sign; positive power (+2.5 D) corresponds to convex lenses used for hypermetropia.\n- Option (c) -25 cm; Myopia: Calculation error ($1/2.5 = 0.4\\text{ m} = 40\\text{ cm}$, not 25 cm).\n- Option (d) +25 cm; Presbyopia: Both sign and numerical calculation are incorrect.",
    formula: "f = \\frac{1}{P} = \\frac{1}{-2.5\\text{ D}} = -0.4\\text{ m} = -40\\text{ cm}",
    examinerNote: "Negative power always corresponds to a concave lens and myopia.",
    source: "NCERT Class 10 Section 10.2 / Board 2023"
  },
  {
    id: "sci_c10_q7",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Stars twinkle at night, but planets do not twinkle.\nReason (R): Stars are point-sized sources of light far away whose light rays continuously undergo atmospheric refraction, whereas planets are closer and act as extended sources of light.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "(A) is false but (R) is true."
    ],
    correctOption: 0,
    answer: "Option (a): Both (A) and (R) are true and (R) is the correct explanation of (A).",
    steps: [
      "1. Assertion (A) is true: Stars twinkle; planets shine steadily.",
      "2. Reason (R) is true: Stars are extremely distant, effectively acting as point sources. Atmospheric turbulence shifts the apparent position and intensity of rays arriving at the eye.",
      "3. Planets are much closer, subtending a finite angle (extended source comprising millions of point sources); individual brightness fluctuations cancel out on average.",
      "4. Reason correctly explains Assertion."
    ],
    explanation: "Reason: Assertion (A) is TRUE because stars flicker waveringly while planets shine with steady brilliance. Reason (R) is TRUE: Stars are trillions of kilometers away, effectively subtending negligible angular size and behaving as point sources of light. Atmospheric turbulence and changing temperature continuously alter the refractive index of air, causing rapid fluctuations in brightness (twinkling). Planets are much closer to Earth, acting as extended sources comprising millions of individual point sources; individual brightness variations cancel out to an average net fluctuation of zero. Thus, Reason (R) correctly explains Assertion (A).\n\n• Why other options are wrong:\n- Option (b): Incorrect because Reason (R) is the exact scientific cause of the phenomenon in Assertion (A).\n- Option (c): Incorrect because Reason (R) is scientifically established.\n- Option (d): Incorrect because Assertion (A) is a verified observational fact.",
    formula: "\\text{Atmospheric fluctuations average out to zero for extended planetary discs}",
    examinerNote: "Key distinction: point source vs extended collection of point sources.",
    source: "NCERT Class 10 Section 10.5 / Board 2021"
  },
  {
    id: "sci_c10_q8",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "Due to atmospheric refraction, the sun is visible to an observer on Earth about:",
    options: [
      "2 minutes before actual sunrise and 2 minutes after actual sunset",
      "4 minutes before actual sunrise and 4 minutes after actual sunset",
      "1 minute before actual sunrise and 1 minute after actual sunset",
      "5 minutes before actual sunrise and 5 minutes after actual sunset"
    ],
    correctOption: 0,
    answer: "Option (a): 2 minutes before actual sunrise and 2 minutes after actual sunset.",
    steps: [
      "1. Atmospheric refraction bends sunlight towards the normal as it enters progressively denser atmospheric layers.",
      "2. The sun appears above the horizon about 2 minutes before it physically crosses the horizon at sunrise.",
      "3. Similarly, it remains visible for about 2 minutes after actual sunset.",
      "4. The total apparent duration of daylight is extended by approximately 4 minutes."
    ],
    explanation: "Reason: Atmospheric refraction bends sunlight downward towards the normal as it passes through progressively denser air layers near Earth's surface. When the sun is physically about $0.5^\\circ$ below the horizon, its bent rays enter the observer's eyes, projecting an apparent image above the horizon. This makes the sun visible approximately 2 minutes before actual astronomical sunrise and keeps it visible for 2 minutes after actual sunset (extending total daylight by $2 + 2 = 4\\text{ minutes}$).\n\n• Why other options are wrong:\n- Option (b): Confuses the 4-minute total day extension with the duration per event (which is 2 minutes each).\n- Option (c): Underestimates the atmospheric refraction shift.\n- Option (d): Overestimates the refraction deviation.",
    formula: "\\Delta t_{\\text{total}} = 2\\text{ min (sunrise)} + 2\\text{ min (sunset)} = 4\\text{ min}",
    examinerNote: "Per event is 2 minutes; total day elongation is 4 minutes.",
    source: "NCERT Class 10 Section 10.5 / Board 2023"
  },
  {
    id: "sci_c10_q9",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "Sir Isaac Newton demonstrated that white light consists of seven colours by placing an inverted second identical prism behind the first prism. The beam emerging from the second prism was:",
    options: [
      "A more intense spectrum",
      "A beam of pure white light",
      "Divided into 14 distinct colours",
      "Completely absorbed"
    ],
    correctOption: 1,
    answer: "Option (b): A beam of pure white light.",
    steps: [
      "1. The first upright prism dispersed white light into its seven constituent spectral colors (VIBGYOR).",
      "2. The second identical prism was placed in an inverted position relative to the first.",
      "3. The inverted prism recombined all the separated colors, and a beam of white light emerged from its opposite face.",
      "4. This proved that white light is a combination of the spectrum colors, rather than colors being created by the glass."
    ],
    explanation: "Reason: In Newton's classic recombination experiment, the first upright prism dispersed incident white light into its seven constituent colors (VIBGYOR). The second identical prism was positioned upside-down (inverted) relative to the first. The inverted prism refracted the separated colored rays in the opposite direction by identical angular deviations, recombining them back into a single emergent beam of pure white light. This definitively proved that white light is naturally composed of seven colors and that prisms do not dye or create colors.\n\n• Why other options are wrong:\n- Option (a): Placing a second upright prism would produce a wider, more spread-out spectrum, but an inverted prism cancels the dispersion.\n- Option (c): Prisms only separate existing wavelengths; placing an inverted prism recombines them rather than doubling the colors to 14.\n- Option (d): Glass prisms transmit visible light with minimal absorption.",
    formula: "\\text{White light} \\xrightarrow{\\text{Prism 1}} \\text{VIBGYOR} \\xrightarrow{\\text{Inverted Prism 2}} \\text{White light}",
    examinerNote: "Historic experiment frequently tested to explain spectrum recombination.",
    source: "NCERT Class 10 Section 10.4"
  },
  {
    id: "sci_c10_q25",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Danger signal lights installed at traffic intersections and tall communications towers are always red.\nReason (R): According to Rayleigh's law of scattering, red light has the longest wavelength in the visible spectrum and is scattered the least by smoke and fog particles.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a): Both A and R are true and R is the correct explanation of A.",
    steps: [
      "1. Assertion (A) is true: Red lights are universally used for danger and emergency beacons.",
      "2. Reason (R) is true: By Rayleigh's scattering law ($I \\propto 1/\\lambda^4$), red light with its long wavelength (~700 nm) suffers minimum scattering by fog and smoke.",
      "3. Because it suffers the least scattering, red light can travel the maximum distance through adverse weather without loss of intensity.",
      "4. Reason correctly explains Assertion."
    ],
    explanation: "Reason: Assertion (A) is TRUE because red lights are universally used for danger and emergency beacons. Reason (R) is TRUE: Red light has the longest wavelength in the visible spectrum ($\\lambda \\approx 700\\text{ nm}$). By Rayleigh's law ($I \\propto 1/\\lambda^4$), long wavelengths experience the minimum amount of scattering by microscopic fog, smoke, and moisture particles. Consequently, red light can travel the maximum distance through adverse weather conditions without attenuation, alerting observers from the farthest distance. Since Reason (R) provides the direct scientific rationale for Assertion (A), R correctly explains A.\n\n• Why other options are wrong:\n- Option (b): Incorrect because Reason (R) is the exact physical law dictating the use of red signals in Assertion (A).\n- Option (c): Incorrect because Reason (R) is a proven optical law.\n- Option (d): Incorrect because Assertion (A) is a global safety standard.",
    formula: "I_{\\text{scatter}} \\propto \\frac{1}{\\lambda^4} \\implies \\lambda_{\\text{red}} \\text{ maximum} \\implies \\text{Least scattered}",
    examinerNote: "Rayleigh scattering intensity is inversely proportional to fourth power of wavelength.",
    source: "CBSE Sample Paper 2026 / NCERT"
  },
  {
    id: "sci_c10_q27",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "The accommodation of the human eye to focus distinctly on both distant and nearby objects is accomplished by changing the focal length of the crystalline lens through the action of:",
    options: ["Pupil", "Retina", "Ciliary muscles", "Iris"],
    correctOption: 2,
    answer: "Option (c): Ciliary muscles.",
    steps: [
      "1. Ciliary muscles modify the curvature of the crystalline eye lens.",
      "2. When ciliary muscles relax, the lens becomes thin and its focal length increases, enabling distant vision.",
      "3. When ciliary muscles contract, the lens becomes thicker and its focal length decreases, enabling nearby vision.",
      "4. This process is called accommodation."
    ],
    explanation: "Reason: Ciliary muscles form a muscular ring holding the flexible crystalline eye lens in position. When viewing distant objects, ciliary muscles relax, allowing suspensory ligaments to pull the lens thin, increasing its focal length. When viewing nearby objects, ciliary muscles contract, releasing tension on the lens and allowing it to become thicker and more convex, decreasing its focal length. This mechanical adjustment is termed the Power of Accommodation.\n\n• Why other options are wrong:\n- Option (a) Pupil: The central aperture that regulates light volume entering the eye; has no effect on lens focal length.\n- Option (b) Retina: The light-sensitive sensory screen containing photoreceptors; does not adjust lens focus.\n- Option (d) Iris: The pigmented muscular diaphragm controlling pupil aperture size, not lens curvature.",
    formula: "\\text{Ciliary Muscles: Relax } \\to f \\uparrow \\text{ (Distant vision); Contract } \\to f \\downarrow \\text{ (Near vision)}",
    examinerNote: "NCERT Section 10.1. Frequently tested 1M board question.",
    source: "NCERT Class 10 Section 10.1 / CBSE Board 2024"
  },
  {
    id: "sci_c10_q28",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "Which component of the human eye acts as a variable diaphragm to regulate and control the amount of light entering the pupil?",
    options: ["Cornea", "Iris", "Crystalline lens", "Sclera"],
    correctOption: 1,
    answer: "Option (b): Iris.",
    steps: [
      "1. The iris is a dark muscular diaphragm located behind the cornea.",
      "2. It controls the aperture size of the central opening (the pupil).",
      "3. In bright light: Iris contracts the pupil to reduce light intake.",
      "4. In dim light: Iris relaxes to dilate the pupil, allowing maximum light entry."
    ],
    explanation: "Reason: The iris is a dark, circular muscular diaphragm situated behind the cornea. By contracting and relaxing its radial and circular muscle fibers, the iris adjusts the diameter of the central aperture (the pupil). In bright sunlight, the iris constricts the pupil to protect the retina from overexposure; in dim lighting, the iris dilates the pupil to maximize light collection.\n\n• Why other options are wrong:\n- Option (a) Cornea: The transparent protective front bulge responsible for the initial fixed refraction of light rays.\n- Option (c) Crystalline lens: The double convex flexible lens that performs fine focal adjustments for distance.\n- Option (d) Sclera: The tough, white, fibrous outer protective coat covering the eyeball.",
    formula: "\\text{Iris} \\to \\text{Regulates Pupil Aperture Size} \\to \\text{Controls Light Entry}",
    examinerNote: "Direct NCERT Section 10.1 definition.",
    source: "NCERT Section 10.1 / CBSE Board 2023"
  },

  // ==========================================
  // SECTION B: 2-MARK VSA (5 Questions)
  // ==========================================
  {
    id: "sci_c10_q10",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 2,
    type: "VSA",
    question: "Explain why the Sun appears reddish early in the morning at sunrise and late in the evening at sunset.",
    answer: "At sunrise and sunset, sunlight travels a much longer distance through the thickest layers of Earth's atmosphere. Shorter wavelengths (blue and violet) are mostly scattered away by atmospheric molecules, while longer wavelengths (red and orange) suffer the least scattering and reach our eyes directly.",
    steps: [
      "1. Near the horizon, sunlight traverses a substantially thicker atmospheric path compared to overhead at noon.",
      "2. By Rayleigh's law ($I \\propto 1/\\lambda^4$), short-wavelength blue and violet rays are scattered out of the line of sight in all directions.",
      "3. Red light has the longest wavelength in the visible spectrum ($\\approx 700\\text{ nm}$) and scatters least.",
      "4. Hence, the light that reaches our eyes directly from the sun is predominantly rich in red wavelengths."
    ],
    explanation: "The scattering of short wavelengths over a long path leaves only the transmitted red light to enter the observer's eye.",
    formula: "I_{\\text{scatter}} \\propto \\frac{1}{\\lambda^4} \\implies \\lambda_{\\text{red}} > \\lambda_{\\text{blue}} \\implies \\text{Red scatters least}",
    examinerNote: "Must explain the longer path through the atmosphere and the Rayleigh wavelength relationship.",
    source: "NCERT Class 10 Section 10.6 / Board 2022, 2024"
  },
  {
    id: "sci_c10_q11",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 2,
    type: "VSA",
    question: "A hypermetropic person has a near point of 1.0 m. What is the focal length and power of the corrective lens required to enable them to read comfortably at 25 cm?",
    answer: "Focal length $f = +33.33\\text{ cm} = +1/3\\text{ m}$; Power $P = +3.0\\text{ D}$ (convex lens).",
    steps: [
      "1. Near point of normal eye $u = -25\\text{ cm} = -0.25\\text{ m}$.",
      "2. Near point of defective eye $v = -1.0\\text{ m} = -100\\text{ cm}$ (virtual image).",
      "3. Lens Formula: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$.",
      "4. $\\frac{1}{f} = \\frac{1}{-100} - \\frac{1}{-25} = -\\frac{1}{100} + \\frac{4}{100} = +\\frac{3}{100}\\text{ cm}^{-1}$.",
      "5. $f = +\\frac{100}{3}\\text{ cm} \\approx +33.33\\text{ cm} = +\\frac{1}{3}\\text{ m}$.",
      "6. Power $P = \\frac{1}{f(\\text{in m})} = \\frac{1}{+1/3} = +3.0\\text{ D}$ (convex lens)."
    ],
    explanation: "A convex lens provides additional converging power to focus light from 25 cm onto the retina as if it originated from the person's actual near point of 1.0 m.",
    formula: "\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}, \\quad P = \\frac{1}{f(\\text{m})}",
    examinerNote: "Convex lens with positive focal length and positive power is required.",
    source: "NCERT Class 10 Exercise 10.2 / Board 2022"
  },
  {
    id: "sci_c10_q12",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 2,
    type: "VSA",
    question: "What is the Tyndall effect? Mention any two instances where this phenomenon is observed in our daily surroundings.",
    answer: "The Tyndall effect is the phenomenon of scattering of light by colloidal particles or fine suspended particles in a medium, rendering the path of the light beam visible.\n\nTwo Instances in Daily Surroundings:\n1. When a fine beam of sunlight enters a dusty, smoke-filled room through a small ventilator or window crack.\n2. When sunlight streams through the canopy of a dense forest where tiny mist water droplets scatter the light rays.",
    steps: [
      "1. Definition: Scattering of light by colloidal/suspended particles that illuminates the beam trajectory.",
      "2. Example 1: Sunlight streaming into a darkened room containing dust or smoke.",
      "3. Example 2: Light rays filtering through mist/fog under the canopy of trees in a forest.",
      "4. Example 3: Vehicle headlights slicing through fog/mist at night."
    ],
    explanation: "Particles with dimensions comparable to or slightly larger than the wavelength of light scatter photons in all directions, illuminating the beam path.",
    formula: "\\text{Colloidal particles} + \\text{Light} \\to \\text{Illuminated beam path (Tyndall Effect)}",
    examinerNote: "Both definition and two valid practical examples are required for 2 marks.",
    source: "NCERT Class 10 Section 10.6"
  },
  {
    id: "sci_c10_q13",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 2,
    type: "VSA",
    question: "Why does the sky appear dark and black to an astronaut orbiting Earth in space or standing on the Moon, instead of blue?",
    answer: "In outer space and on the Moon, there is no atmosphere containing gas molecules or dust particles. In the absence of atmospheric particles, no scattering of sunlight takes place. Since no scattered light enters the astronaut's eyes from the surrounding sky dome, the sky appears completely dark and black.",
    steps: [
      "1. Earth's blue sky is solely due to the scattering of sunlight by gas molecules in the atmosphere.",
      "2. Space and the Moon lack an atmosphere (vacuum).",
      "3. Without particles, sunlight travels uninterrupted without undergoing scattering.",
      "4. Because no scattered light reaches the astronaut's eyes, the sky looks black even when the sun is shining."
    ],
    explanation: "Light is visible only when it enters the observer's eye. Without atmospheric scattering, outer space appears black.",
    formula: "\\text{No atmosphere} \\implies \\text{No scattering} \\implies \\text{Dark/black sky}",
    examinerNote: "State clearly: no atmosphere means no scattering of sunlight.",
    source: "NCERT Class 10 Section 10.6 / Board 2023"
  },
  {
    id: "sci_c10_q14",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 2,
    type: "VSA",
    question: "What is Presbyopia? State its primary cause and how it can be corrected in a person who also suffers from myopia.",
    answer: "Presbyopia is the age-related gradual loss of the eye's power of accommodation, causing the near point to recede beyond 25 cm.\n\n1. Causes: (i) Gradual weakening of the ciliary muscles, and (ii) Diminishing flexibility (hardening) of the crystalline lens with advancing age.\n2. Correction: When accompanied by myopia, it is corrected using **bifocal lenses**, where the upper portion contains a **concave lens** (for distant vision) and the lower portion contains a **convex lens** (for reading and near vision).",
    steps: [
      "1. Definition: Aging defect where near point recedes, making close work difficult.",
      "2. Causes: (i) Weakening of ciliary muscles, (ii) Loss of crystalline lens elasticity.",
      "3. Correction: Bifocal lenses (upper concave for distant sight, lower convex for reading)."
    ],
    explanation: "Presbyopia is caused by aging and is corrected with bifocal or progressive lenses.",
    formula: "\\text{Bifocal lens: Upper = Concave (far), Lower = Convex (near)}",
    examinerNote: "Mentioning both causes (ciliary muscles + lens flexibility) and bifocal composition is required.",
    source: "NCERT Class 10 Section 10.2"
  },

  // ==========================================
  // SECTION C: 3-MARK SA (6 Questions)
  // ==========================================
  {
    id: "sci_c10_q15",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 3,
    type: "SA",
    question: "Explain the phenomenon of dispersion of white light through a triangular glass prism. Define angle of deviation (D) and state the relationship between angle of prism (A), angle of deviation (D), angle of incidence (i), and angle of emergence (e).",
    answer: "1. Dispersion of Light: Dispersion is the splitting of composite white light into its constituent spectrum of seven colours (VIBGYOR) when passing through a prism. It occurs because different wavelengths of light travel at different speeds in glass ($v_{\\text{red}} > v_{\\text{violet}}$), resulting in different refractive indices ($n_{\\text{violet}} > n_{\\text{red}}$) and causing each colour to bend by a distinct angle.\n2. Angle of Deviation (D): The angle formed between the original path of the incident ray (produced forward) and the emergent ray (produced backward).\n3. Prism Formula: $A + D = i + e$.",
    steps: [
      "1. Dispersion explanation:\n   - In glass, red light travels fastest and has the lowest refractive index ($n_{\\text{red}}$), bending the least.\n   - Violet light travels slowest and has the highest refractive index ($n_{\\text{violet}}$), bending the most.\n   - Hence, the colors separate upon refraction at the two prism faces.",
      "2. Angle of Deviation (D): The angle through which a ray of light turns away from its original path upon passing through the prism.",
      "3. Formula: $A + D = i + e$, where $A$ = Angle of prism, $D$ = Angle of deviation, $i$ = Angle of incidence, $e$ = Angle of emergence."
    ],
    explanation: "The triangular geometry of the prism ensures that refractions at the two inclined non-parallel surfaces compound the angular separation of different wavelengths.",
    formula: "A + D = i + e, \\quad n_{\\text{violet}} > n_{\\text{red}} \\implies D_{\\text{violet}} > D_{\\text{red}}",
    examinerNote: "Write the relation $A + D = i + e$ clearly; it is frequently tested in 3-mark questions.",
    source: "NCERT Class 10 Section 10.3 / Board 2023"
  },
  {
    id: "sci_c10_q16",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 3,
    type: "SA",
    question: "Compare Myopia and Hypermetropia across three fundamental parameters:\n(a) Causes of the defect\n(b) Position of image formation relative to retina\n(c) Corrective lens used and its optical action",
    answer: "Comparison Table:\n\n| Parameter | Myopia (Near-Sightedness) | Hypermetropia (Far-Sightedness) |\n| :--- | :--- | :--- |\n| **(a) Causes** | Excessive curvature of eye lens OR elongation of the eyeball. | Focal length of eye lens is too long OR eyeball has become too short. |\n| **(b) Image Position** | Image of distant objects is formed **in front of the retina**. | Image of nearby objects is formed **behind the retina**. |\n| **(c) Corrective Lens** | **Concave lens** (diverging); diverges parallel rays so they appear to come from the person's far point. | **Convex lens** (converging); provides extra convergence so rays from 25 cm appear to come from the person's near point. |",
    steps: [
      "1. Tabulate comparison clearly covering causes, image location, and lens function.",
      "2. Ensure optical terminology (diverging vs converging, far point vs near point) is precise."
    ],
    explanation: "Myopia involves an over-converging optical system requiring a concave lens; hypermetropia involves an under-converging system requiring a convex lens.",
    formula: "\\text{Myopia: } P < 0 \\text{ (concave)}; \\quad \\text{Hypermetropia: } P > 0 \\text{ (convex)}",
    examinerNote: "Award 1 mark each for causes, image positions, and corrective mechanisms.",
    source: "NCERT Class 10 Section 10.2 / Board 2022, 2023"
  },
  {
    id: "sci_c10_q17",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 3,
    type: "SA",
    question: "Explain the three-step optical mechanism of rainbow formation in the atmosphere. Why can a rainbow only be observed when standing with your back towards the Sun?",
    answer: "A rainbow is a natural spectrum produced by the dispersion of sunlight by tiny spherical raindrops suspended in the atmosphere.\n\nThree-Step Optical Mechanism:\n1. **Refraction and Dispersion:** Sunlight enters a raindrop obliquely at its front surface, slows down, and disperses into its constituent VIBGYOR colors (violet bends most, red least).\n2. **Internal Reflection:** The dispersed light rays hit the curved rear internal surface of the raindrop and undergo internal reflection.\n3. **Refraction on Emergence:** As the rays exit the front surface of the raindrop back into the air, they refract once more toward the observer's eyes.\n\nWhy Observer's Back Must Face the Sun:\nBecause the light undergoes internal reflection inside the raindrops and reflects backward at angles between $40^\\circ$ (violet) and $42^\\circ$ (red), the observer must stand between the Sun and the rain shower with the Sun behind them.",
    steps: [
      "1. Step 1: Raindrops act as tiny prisms. Sunlight refracts and disperses on entry.",
      "2. Step 2: Light undergoes internal reflection at the rear wall of the droplet.",
      "3. Step 3: Light refracts upon exiting into air towards the observer.",
      "4. Position of Sun: Observer must stand with back towards the Sun because rays reflect backward."
    ],
    explanation: "The combined action of dispersion, internal reflection, and refraction inside millions of raindrops creates the concentric circular arc of the rainbow.",
    formula: "\\text{Sunlight} \\to \\text{Refraction + Dispersion} \\to \\text{Internal Reflection} \\to \\text{Refraction out} \\to \\text{Observer}",
    examinerNote: "Mention all three processes: refraction, dispersion, and internal reflection.",
    source: "NCERT Class 10 Section 10.4 / Board 2021, 2023"
  },
  {
    id: "sci_c10_q18",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 3,
    type: "SA",
    question: "Describe how atmospheric refraction explains the following two natural phenomena:\n(a) Twinkling of stars\n(b) Apparent early sunrise and delayed sunset",
    answer: "(a) Twinkling of Stars:\nStars are distant point-sources of light. As starlight passes through turbulent layers of Earth's atmosphere having fluctuating temperature and density, its path continuously refracts. The apparent position of the star shifts slightly, and the intensity of light entering the eye fluctuates rapidly from bright to dim, causing twinkling.\n\n(b) Early Sunrise and Delayed Sunset:\nNear the horizon, sunlight enters progressively denser air layers and bends towards the normal. When the sun is physically about $0.5^\\circ$ below the horizon, its bent rays enter the observer's eye, making the sun appear elevated above the horizon. This makes the sun visible approximately 2 minutes before actual sunrise and 2 minutes after actual sunset, lengthening daylight by 4 minutes.",
    steps: [
      "1. Part (a): Explain point-source nature of stars, changing refractive index of turbulent atmospheric layers, and resulting rapid fluctuations in brightness.",
      "2. Part (b): Explain curvature of rays towards normal in denser low-altitude air, apparent elevation by 0.5 degrees, and 2 minutes gain each at dawn and dusk."
    ],
    explanation: "Continuously varying atmospheric density bends light rays toward the denser medium (downward), creating apparent displacement and fluctuations.",
    formula: "\\text{Daylight duration increases by } 2\\text{ min} + 2\\text{ min} = 4\\text{ min}",
    examinerNote: "Both phenomena are caused by atmospheric refraction. Distinguish from scattering.",
    source: "NCERT Class 10 Section 10.5 / Board 2022"
  },
  {
    id: "sci_c10_q19",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 3,
    type: "SA",
    question: "A person with a myopic eye cannot see objects distinctly placed beyond 80 cm. Determine:\n(a) The nature and focal length of the corrective lens required.\n(b) The power of this lens.\n(c) How the corrective lens restores clear vision for distant objects.",
    answer: "(a) Nature: **Concave Lens**; Focal length $f = -80\\text{ cm} = -0.8\\text{ m}$.\n(b) Power: $P = \\mathbf{-1.25\\text{ D}}$.\n(c) How it Restores Vision: The concave lens diverges incoming parallel rays from distant objects (infinity) so that they appear to originate from the person's defective far point (80 cm). The crystalline eye lens then converges these diverged rays precisely onto the retina, restoring sharp distant vision.",
    steps: [
      "1. Part (a): For clear vision of distant objects, the object distance $u = -\\infty$.\n   - Image distance $v = -80\\text{ cm}$ (the person's far point).\n   - Lens formula: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{-80} - \\frac{1}{-\\infty} = -\\frac{1}{80} \\implies f = -80\\text{ cm} = -0.8\\text{ m}$.\n   - Nature: Concave (diverging) lens.",
      "2. Part (b): Power $P = \\frac{1}{f(\\text{in m})} = \\frac{1}{-0.8\\text{ m}} = -1.25\\text{ D}$.",
      "3. Part (c): The concave lens diverges incoming parallel rays from infinity so they appear to originate from the far point (80 cm), allowing the eye lens to focus them on the retina."
    ],
    explanation: "For a myopic eye, the corrective focal length equals the negative of the far point ($f = -d$). Hence $P = -1/0.8 = -1.25\\text{ D}$.",
    formula: "\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} \\implies f = v = -0.8\\text{ m}, \\quad P = \\frac{1}{f} = -1.25\\text{ D}",
    examinerNote: "Standard board numerical: $u = -\\infty$, $v = -\\text{far point}$. Show full formula substitution.",
    source: "NCERT Class 10 In-text Example 10.1 / Board 2024"
  },
  {
    id: "sci_c10_q20",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 3,
    type: "SA",
    question: "Describe Sir Isaac Newton's classic experiment that proved that white light is composed of seven colours. Explain why the second prism must be placed in an inverted position.",
    answer: "Newton's Classic Recombination Experiment:\n1. Experimental Setup: Sir Isaac Newton allowed a narrow beam of white sunlight to pass through an upright glass prism ($P_1$), obtaining a dispersed spectrum of seven colours (VIBGYOR). He then placed a second identical glass prism ($P_2$) in an **inverted position** adjacent to the first prism.\n2. Observation: The second inverted prism received all seven separated colors, bent them in the opposite direction by equal amounts, and recombined them into a single beam of **pure white light**.\n3. Conclusion: This proved conclusively that white sunlight is composed of seven constituent colors, and that the prism merely separates existing colors rather than creating them.\n4. Why Second Prism Must Be Inverted: An upright second prism would disperse the colors even further. The inverted prism provides an equal and opposite angular deviation, cancelling the dispersion and recombining the rays.",
    steps: [
      "1. Setup: Two identical prisms P1 (upright) and P2 (inverted).",
      "2. Observation: White light -> VIBGYOR spectrum -> Recombined white light.",
      "3. Conclusion: White light consists of 7 colors; prism only separates them.",
      "4. Necessity of inversion: Inverted prism provides equal and opposite deviation to recombine colors."
    ],
    explanation: "Recombination proves that colors are inherent properties of white light, and dispersion is reversible.",
    formula: "\\text{Dispersion by } P_1 + \\text{Recombination by inverted } P_2 = \\text{White light}",
    examinerNote: "Mention that an upright second prism would increase dispersion, so inversion is essential.",
    source: "NCERT Class 10 Section 10.4 / Board 2022"
  },

  // ==========================================
  // SECTION D: 5-MARK LA (3 Questions)
  // ==========================================
  {
    id: "sci_c10_q21",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 5,
    type: "LA",
    question: "(a) Draw a labeled diagram of the human eye and describe the functions of: (i) Cornea, (ii) Iris, (iii) Ciliary muscles, (iv) Retina. [2.5M]\n(b) Illustrate with neat ray explanations: (i) A myopic eye viewing a distant object, (ii) Correction of myopia using a suitable concave lens. [1.5M]\n(c) What is cataract? How can vision be restored in a person suffering from cataract? [1M]",
    answer: "(a) Functions of Eye Components:\n1. Cornea: Thin, transparent outer spherical bulge that provides ~80% of total optical refraction of light entering the eye.\n2. Iris: Dark muscular diaphragm behind cornea that regulates the diameter and aperture of the pupil, controlling light intake.\n3. Ciliary Muscles: Adjust the curvature and focal length of the crystalline eye lens to focus near and far objects (accommodation).\n4. Retina: Delicate light-sensitive inner screen containing photoreceptor cells (rods for dim light, cones for color) that convert light into electrical nerve impulses.\n\n(b) Myopia & Optical Correction:\n1. Myopic Eye: Parallel light rays from a distant object converge **in front of the retina**, forming a blurred image.\n2. Corrected Eye: A **concave (diverging) lens** placed in front of the eye diverges incoming parallel rays so they appear to come from the person's far point, allowing the eye lens to focus them sharply on the retina.\n\n(c) Cataract Pathology & Restoration:\nCataract is a condition occurring in old age where the crystalline lens turns milky, hazy, and cloudy due to protein aggregation, causing partial or total loss of vision. Vision cannot be restored by spectacles; it is corrected surgically by removing the opaque natural lens and replacing it with an artificial **Intraocular Lens (IOL)**.",
    steps: [
      "1. Part (a): Describe functions of Cornea, Iris, Ciliary muscles, and Retina (2.5M).",
      "2. Part (b): Explain myopic image formation in front of retina and concave lens divergence correction (1.5M).",
      "3. Part (c): Define cataract (cloudy lens) and state surgical IOL replacement (1M)."
    ],
    explanation: "Comprehensive coverage of eye anatomy, refractive defect mechanics with ray tracing, and medical pathology (cataract).",
    formula: "\\text{Cataract: Cloudy Crystalline Lens} \\xrightarrow{\\text{Surgery}} \\text{Intraocular Lens (IOL)}",
    examinerNote: "Neat descriptions and accurate anatomical roles are required for full marks.",
    source: "CBSE Board 2024 / 2023 Sample Paper"
  },
  {
    id: "sci_c10_q22",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 5,
    type: "LA",
    question: "(a) State Rayleigh's Law of Scattering. How does the size of scattering particles determine the colour of scattered light? [2M]\n(b) Give scientific reasons for the following observations: [2M]\n    (i) Danger signal lights installed on towers and traffic poles are always red.\n    (ii) Clouds generally appear white.\n(c) Explain why the sun is visible 2 minutes before actual sunrise with the help of atmospheric refraction principles. [1M]",
    answer: "(a) Rayleigh's Law & Particle Size:\n1. Rayleigh's Law: When the size of scattering particles ($a$) is much smaller than the wavelength of incident light ($a \\ll \\lambda$), the intensity of scattered light ($I$) is inversely proportional to the fourth power of wavelength: $I \\propto \\frac{1}{\\lambda^4}$.\n2. Particle Size Effect:\n   - Very fine particles (gas molecules, $a \\ll \\lambda$): Scatter shorter wavelengths (blue and violet) much more strongly than longer wavelengths.\n   - Large particles (dust, water droplets in clouds, $a \\gg \\lambda$): Scatter all wavelengths of visible light equally, so the scattered light appears white.\n\n(b) Scientific Reasons:\n1. (i) Danger Signals are Red: Red light has the longest wavelength in the visible spectrum. According to Rayleigh's law, it is scattered the least by smoke, mist, and fog particles, allowing it to travel the greatest distance without attenuation and remain clearly visible from afar.\n2. (ii) Clouds Appear White: Clouds consist of large water droplets and ice crystals whose dimensions are much larger than the wavelength of visible light. All colors of sunlight are scattered equally (non-selective scattering), producing white scattered light.\n\n(c) Early Sunrise via Atmospheric Refraction:\nWhen the sun is physically below the horizon ($\approx 0.5^\\circ$), rays of sunlight enter progressively denser atmospheric layers and bend continuously towards the normal. The eye traces these rays along their final tangent, projecting an apparent image of the sun above the horizon approximately 2 minutes before actual astronomical sunrise.",
    steps: [
      "1. Part (a): State Rayleigh formula $I \\propto 1/\\lambda^4$; contrast fine particles ($a \\ll \\lambda$) vs large particles ($a \\gg \\lambda$) (2M).",
      "2. Part (b): Explain red danger signals (minimum scattering) and white clouds (equal scattering of all colors) (2M).",
      "3. Part (c): Atmospheric refraction bends light downward, elevating apparent sun position 2 minutes early (1M)."
    ],
    explanation: "Particle size relative to wavelength dictates whether scattering is wavelength-selective (Rayleigh) or uniform (Mie).",
    formula: "I \\propto \\frac{1}{\\lambda^4} \\quad (\\text{for } a \\ll \\lambda)",
    examinerNote: "Make sure to state that clouds have large water droplets ($a \\gg \\lambda$) that scatter all wavelengths equally.",
    source: "CBSE Board 2023 / NCERT Section 10.6"
  },
  {
    id: "sci_c10_q26",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 5,
    type: "LA",
    question: "(a) A person with a myopic eye cannot see objects beyond 1.2 m distinctly. Calculate the focal length and power of the corrective lens required to restore normal distant vision. [2M]\n(b) The near point of a hypermetropic eye is 1 m. Find the power of the lens required to read a book held at 25 cm. [2M]\n(c) With the aid of a neat explanation, state the three sequential optical phenomena responsible for the formation of a rainbow in the sky after a rain shower. [1M]",
    answer: "(a) Myopia Correction Numerical:\n- For a myopic eye to view distant objects at infinity ($u = -\\infty$), the corrective lens must form a virtual image at the person's far point ($v = -1.2\\text{ m} = -120\\text{ cm}$).\n- Lens formula: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{-1.2} - \\frac{1}{-\\infty} = -\\frac{1}{1.2} \\implies f = -1.2\\text{ m}$.\n- Power: $P = \\frac{1}{f(\\text{in m})} = \\frac{1}{-1.2} = -\\frac{10}{12} = \\mathbf{-0.83\\text{ D}}$ (or $-5/6\\text{ D}$).\n- Corrective lens required: **Concave lens** of power **-0.83 D**.\n\n(b) Hypermetropia Correction Numerical:\n- Given: Normal near point $u = -25\\text{ cm} = -0.25\\text{ m}$, Defective near point $v = -1\\text{ m} = -100\\text{ cm}$.\n- Lens formula: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{-100} - \\frac{1}{-25} = -\\frac{1}{100} + \\frac{4}{100} = +\\frac{3}{100}\\text{ cm}^{-1} \\implies f = +\\frac{100}{3}\\text{ cm} = +\\frac{1}{3}\\text{ m}$.\n- Power: $P = \\frac{1}{f(\\text{in m})} = \\frac{1}{+1/3} = \\mathbf{+3.0\\text{ D}}$.\n- Corrective lens required: **Convex lens** of power **+3.0 D**.\n\n(c) Rainbow Formation Mechanics:\nSuspended water droplets act as miniature dispersing prisms. The 3 sequential optical events are:\n1. **Refraction and Dispersion:** Sunlight enters the droplet at its front surface, slows down, and disperses into VIBGYOR colors.\n2. **Internal Reflection:** Dispersed light reflects off the inner rear surface of the water droplet.\n3. **Refraction on Exit:** Light refracts again as it emerges from the droplet into air toward the observer's eye (Red emerges at $\\approx 42^\\circ$, Violet at $\\approx 40^\\circ$).",
    steps: [
      "1. Part (a): Myopia calculation: u = -infinity, v = -1.2 m -> f = -1.2 m, P = -0.83 D (concave lens) (2M).",
      "2. Part (b): Hypermetropia calculation: u = -25 cm, v = -100 cm -> f = +1/3 m, P = +3.0 D (convex lens) (2M).",
      "3. Part (c): 3 rainbow steps: Refraction/dispersion -> Internal reflection -> Refraction out (1M)."
    ],
    explanation: "Comprehensive 5-marker integrating both major refractive vision defect calculations with atmospheric rainbow optics.",
    formula: "\\text{Myopia: } P = -\\frac{1}{d(\\text{m})}; \\quad \\text{Hypermetropia: } \\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}; \\quad P = +3.0\\text{ D}",
    examinerNote: "Convex lens power is always positive (+3.0 D) and concave lens power is always negative (-0.83 D).",
    source: "CBSE Board Examination (5 Marks) / NCERT"
  },

  // ==========================================
  // SECTION E: 4-MARK CASE STUDY (2 Questions)
  // ==========================================
  {
    id: "sci_c10_q23",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 4,
    type: "Case Study",
    question: "Case Study: In an eye clinic, two patients undergo visual examination. Patient A, a 14-year-old student, cannot read letters written on the board beyond 1.5 m, but can read books placed at 25 cm easily. Patient B, a 65-year-old retired teacher, holds the newspaper at arm's length (about 75 cm) to read comfortably, but views distant scenery without any difficulty. The optometrist prescribes corrective spectacle lenses for both patients.\n\n(a) [1M] Identify the defects of vision diagnosed in Patient A and Patient B.\n(b) [1M] Why does Patient B require glasses for reading? Name the defect and state why it occurs in elderly people.\n(c) [2M] Calculate the power of the corrective lens required by Patient A to view distant objects with normal vision.",
    answer: "(a) Diagnosed Defects: Patient A suffers from **Myopia** (near-sightedness); Patient B suffers from **Presbyopia** (old-age far-sightedness).\n(b) Why Patient B Requires Reading Glasses: Patient B has Presbyopia, which occurs due to the gradual weakening of the ciliary muscles and diminishing flexibility (hardening) of the crystalline eye lens with advancing age, causing the near point to recede from 25 cm to 75 cm.\n(c) Power Calculation for Patient A:\n- Object distance: $u = -\\infty$\n- Far point (image distance): $v = -1.5\\text{ m}$\n- Lens formula: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{-1.5} - \\frac{1}{-\\infty} = -\\frac{1}{1.5} \\implies f = -1.5\\text{ m}$.\n- Power: $P = \\frac{1}{f(\\text{in m})} = \\frac{1}{-1.5\\text{ m}} = -\\frac{2}{3}\\text{ D} \\approx \\mathbf{-0.67\\text{ D}}$ (Concave lens).",
    steps: [
      "1. Part (a): Patient A = Myopia; Patient B = Presbyopia (1M).",
      "2. Part (b): Explain Presbyopia: aging causes weakening of ciliary muscles and hardening of eye lens, moving near point to 75 cm (1M).",
      "3. Part (c) Calculation for Patient A:\n   $u = -\\infty$, $v = -1.5\\text{ m} \\implies f = -1.5\\text{ m} \\implies P = \\frac{1}{-1.5} = -0.67\\text{ D}$ (concave lens) (2M)."
    ],
    explanation: "Myopia requires a concave lens of power $-1/d$; presbyopia requires convex reading glasses to shift the near point back to 25 cm.",
    formula: "P = \\frac{1}{f(\\text{m})} = -\\frac{1}{1.5} = -0.67\\text{ D}",
    examinerNote: "Show step-by-step substitution for Part (c) calculation to secure both marks.",
    source: "CBSE Board 2024 Practice / Educart Class 10"
  },
  {
    id: "sci_c10_q24",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 4,
    type: "Case Study",
    question: "Case Study: In an optical physics practical, students investigated refraction through a triangular glass prism. A student measured the angle of the prism to be A = 60°. When a ray of monochromatic light was incident at an angle i = 48°, it emerged from the opposite face at an angle e = 48°. In a follow-up experiment, white light was passed through the prism, producing a colorful dispersion pattern on a white screen.\n\n(a) [1M] What is the angle of deviation (D) produced by the prism for the monochromatic ray?\n(b) [1M] In the white light experiment, why do different colors deviate by different angles upon passing through the prism?\n(c) [2M] How can the dispersed spectrum of seven colors be recombined to produce white light again? Describe the experimental arrangement and state who first performed it.",
    answer: "(a) Angle of Deviation: $D = 36^\\circ$.\n(b) Why Different Colors Deviate Differently: Different colours have different wavelengths and hence travel at different speeds in glass. Consequently, the glass prism has a different refractive index for each colour ($n_{\\text{violet}} > n_{\\text{red}}$), causing each colour to bend by a distinct angle.\n(c) Recombination of Spectrum: The spectrum can be recombined by placing an identical second glass prism in an **inverted position** adjacent to the first prism. The second inverted prism reverses the dispersion, merging all 7 colors back into a single beam of pure white light. This historic experiment was first performed by **Sir Isaac Newton**.",
    steps: [
      "1. Part (a) Calculation:\n   Formula: $A + D = i + e$.\n   Given: $A = 60^\\circ$, $i = 48^\\circ$, $e = 48^\\circ$.\n   $60^\\circ + D = 48^\\circ + 48^\\circ = 96^\\circ \\implies D = 96^\\circ - 60^\\circ = 36^\\circ$.",
      "2. Part (b): Explain that refractive index varies inversely with wavelength, so violet bends most and red bends least.",
      "3. Part (c): Describe Newton's inverted second prism experiment and name Sir Isaac Newton."
    ],
    explanation: "The relation $A + D = i + e$ holds for any triangular prism. The inverted prism geometry cancels the dispersion produced by the first prism.",
    formula: "A + D = i + e \\implies D = i + e - A = 48^\\circ + 48^\\circ - 60^\\circ = 36^\\circ",
    examinerNote: "Part (a) formula $A + D = i + e$ must be written explicitly.",
    source: "CBSE Board 2023 / 2024 Sample Paper"
  },

  // ==========================================
  // ADDITIONAL MASTERCLASS PRACTICE (Questions 29-32)
  // ==========================================
  {
    id: "sci_c10_q29",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 2,
    type: "VSA",
    question: "What is a Cataract? State its primary cause, why it causes partial or total vision loss, and how it is surgically corrected.",
    answer: "1. Definition & Primary Cause: Cataract is an age-related condition where the crystalline eye lens becomes hazy, cloudy, or completely opaque due to the denaturation and aggregation of lens proteins.\n2. Reason for Vision Loss: Because the cloudy lens loses transparency, light rays cannot transmit through it to reach the photoreceptors of the retina, causing blurred vision or total blindness.\n3. Surgical Correction: Cataract cannot be cured with eyeglasses or eye drops. It is corrected exclusively through cataract surgery, in which the clouded natural lens is surgically removed and replaced with an artificial plastic/silicone **Intraocular Lens (IOL)**.",
    steps: [
      "1. Definition & Cause: Protein denaturation makes crystalline lens cloudy/opaque.",
      "2. Mechanism of vision loss: Light cannot penetrate opaque lens to reach retina.",
      "3. Medical remedy: Surgical replacement with artificial Intraocular Lens (IOL)."
    ],
    explanation: "Cataract is a structural loss of crystalline lens transparency requiring surgical lens replacement.",
    formula: "\\text{Cloudy Crystalline Lens} \\to \\text{Loss of Transparency} \\to \\text{Cataract Surgery (IOL Replacement)}",
    examinerNote: "1 mark for definition and protein clouding; 1 mark for vision loss and surgical IOL replacement.",
    source: "NCERT Section 10.1.1 / CBSE Board 2024"
  },
  {
    id: "sci_c10_q30",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 2,
    type: "VSA",
    question: "Why does the air above a campfire, hearth, or hot asphalt road appear to flicker and shimmer waveringly?",
    answer: "1. Temperature-Density Gradient: The air directly above a hot fire or road expands, becomes less dense, and is optically rarer than the cooler, denser air situated higher up. Consequently, hot air has a slightly lower refractive index than cool air.\n2. Convective Turbulence: The physical conditions of the refracting air layers are not stationary because hot turbulent convection currents rise rapidly. As light rays pass through these turbulent, shifting air layers, their apparent path undergoes continuous, irregular atmospheric refraction.\n3. Visual Result: The apparent position of objects seen through the hot rising air fluctuates randomly from instant to instant, producing the wavering shimmering effect.",
    steps: [
      "1. Physical basis: Hot air is less dense and has lower refractive index than cooler air above.",
      "2. Dynamic instability: Rapidly rising turbulent convection currents cause continuous fluctuation in refractive index.",
      "3. Optical consequence: Rapidly shifting apparent position produces flickering/shimmering."
    ],
    explanation: "Dynamic fluctuations in the optical refractive index of turbulent heated air cause shimmering.",
    formula: "\\text{Hot Air (Lower } n\\text{)} + \\text{Cool Air (Higher } n\\text{)} + \\text{Convection} \\to \\text{Shimmering}",
    examinerNote: "1 mark for temperature-density gradient altering refractive index; 1 mark for convection currents causing apparent position fluctuation.",
    source: "NCERT Section 10.2 / CBSE Board 2024"
  },
  {
    id: "sci_c10_q31",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 3,
    type: "SA",
    question: "A 14-year-old student sitting in the last row of a classroom cannot read the letters written on the blackboard distinctly, though she can read her textbook comfortably at a distance of 25 cm.\n(a) Name the visual defect the student is suffering from.\n(b) State two anatomical causes that give rise to this defect.\n(c) What type of corrective lens is prescribed to restore her distant blackboard vision? Explain the optical role of this lens.",
    answer: "(a) Defect of Vision: **Myopia** (Near-sightedness / Short-sightedness).\n\n(b) Two Anatomical Causes:\n    1. **Excessive curvature of the eye lens** (lens is too thick and converging; focal length too short).\n    2. **Elongation of the eyeball** (antero-posterior diameter of the eyeball is too long, placing the retina farther behind the focal plane).\n\n(c) Corrective Lens & Optical Role:\n    - Prescribed Lens: A **Concave Lens** (Diverging lens) of appropriate focal length/power.\n    - Optical Role: Parallel rays from the distant blackboard are slightly diverged by the concave lens before entering the eye, so that they appear to diverge from the myopic student's near-situated far point. The crystalline lens then converges these diverged rays precisely onto the retina, restoring sharp distant vision.",
    steps: [
      "1. Part (a): Identify Myopia (1M).",
      "2. Part (b): List two causes: excessive lens curvature and eyeball elongation (1M).",
      "3. Part (c): Prescribe concave lens and explain virtual far-point divergence mechanism (1M)."
    ],
    explanation: "Myopic eye focuses parallel rays in front of the retina; concave lens diverges them backward onto the retina.",
    formula: "\\text{Defect: Myopia; Causes: Excessive curvature / Eyeball elongation; Correction: Concave lens}",
    examinerNote: "1 mark for Myopia; 1 mark for both anatomical causes; 1 mark for concave lens and virtual far-point mechanism.",
    source: "NCERT Section 10.1.2 / CBSE Board 2024"
  },
  {
    id: "sci_c10_q32",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 5,
    type: "LA",
    question: "(a) The near point of a hypermetropic person is 75 cm. Calculate the focal length and optical power of the corrective convex lens required to enable the person to read a book comfortably at the standard near point of 25 cm. [2.5M]\n(b) What is Presbyopia (old-age hypermetropia)? State its two physiological causes. [1.5M]\n(c) Sometimes an elderly individual suffers from both myopia and hypermetropia simultaneously. What type of corrective eyeglasses are prescribed, and how are the two lens segments arranged? [1M]",
    answer: "(a) Hypermetropia Lens Calculation:\n- Normal reading distance (object distance): $u = -25\\text{ cm} = -0.25\\text{ m}$\n- Defective near point (image distance): $v = -75\\text{ cm} = -0.75\\text{ m}$\n- Using the Lens Formula: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$\n  $$\\frac{1}{f} = \\frac{1}{-75} - \\frac{1}{-25} = -\\frac{1}{75} + \\frac{1}{25} = \\frac{-1 + 3}{75} = +\\frac{2}{75}\\text{ cm}^{-1}$$\n  $$f = +\\frac{75}{2}\\text{ cm} = +37.5\\text{ cm} = +0.375\\text{ m}$$\n- Optical Power Calculation:\n  $$P = \\frac{1}{f(\\text{in metres})} = \\frac{1}{+0.375\\text{ m}} = +\\frac{1000}{375} = +\\frac{8}{3}\\text{ D} = \\mathbf{+2.67\\text{ D}}$$\n- Corrective Lens: A **Convex lens** of focal length $+37.5\\text{ cm}$ and power **+2.67 D**.\n\n(b) Presbyopia (Old-Age Hypermetropia):\n- Definition: The gradual loss of the eye's power of accommodation with advancing age, causing difficulty in reading or seeing nearby objects distinctly without spectacles.\n- Two Physiological Causes:\n  1. Gradual weakening of the ciliary muscles.\n  2. Diminishing elasticity and hardening of the crystalline eye lens.\n\n(c) Presbyopia with Myopia (Bifocal Lenses):\n- Prescribed Eyeglasses: **Bifocal Lenses**.\n- Arrangement: The upper portion of the bifocal lens consists of a **Concave lens** to facilitate distant vision; the lower portion consists of a **Convex lens** to facilitate near reading vision.",
    steps: [
      "1. Part (a): Lens calculation: u = -25 cm, v = -75 cm -> f = +37.5 cm = +0.375 m, P = +2.67 D (2.5M).",
      "2. Part (b): Define Presbyopia and list two causes (weakening ciliary muscles, lens hardening) (1.5M).",
      "3. Part (c): Prescribe Bifocal lenses: upper concave (far) and lower convex (near) (1M)."
    ],
    explanation: "Comprehensive 5-marker integrating hypermetropia numerical derivation, presbyopia physiology, and bifocal lens optics.",
    formula: "\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} \\implies f = +37.5\\text{ cm}; \\quad P = +2.67\\text{ D}; \\quad \\text{Bifocals: Upper Concave, Lower Convex}",
    examinerNote: "2.5 marks for step-by-step numerical calculation (+2.67 D); 1.5 marks for presbyopia causes; 1 mark for bifocal lens arrangement.",
    source: "CBSE Class 10 Board 2024 / Exemplar HOTS"
  }
];
