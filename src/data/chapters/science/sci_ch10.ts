import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH10_QUESTIONS: VaultQuestion[] = [
  // ==========================================
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON (9 Questions)
  // ==========================================
  {
    id: "sci_c10_q1",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "The ability of the human eye to focus on both nearby and distant objects by altering the focal length of the crystalline lens is called:\n(a) Binocular vision\n(b) Power of accommodation\n(c) Persistence of vision\n(d) Visual adaptation",
    options: [
      "Binocular vision",
      "Power of accommodation",
      "Persistence of vision",
      "Visual adaptation"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: Power of accommodation.",
    steps: [
      "Power of accommodation is the ability of the eye lens to adjust its curvature and focal length via the ciliary muscles.",
      "For distant objects: Ciliary muscles relax → lens becomes thin → focal length increases.",
      "For nearby objects: Ciliary muscles contract → lens becomes thicker/more convex → focal length decreases."
    ],
    explanation: "Accommodation allows the human eye to bring images of objects situated at varying distances into sharp focus precisely on the retina.",
    formula: "\\text{Accommodation: Ciliary muscles alter lens curvature}",
    examinerNote: "Do not confuse accommodation (focus adjustment) with persistence of vision (1/16th second image retention).",
    source: "NCERT Class 10 Section 11.1 / Board 2023"
  },
  {
    id: "sci_c10_q2",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "A student sitting on the last bench cannot read the writing on the blackboard distinctly, but can read their textbook easily. The defect of vision and the type of corrective lens required are:\n(a) Hypermetropia; convex lens\n(b) Myopia; concave lens\n(c) Presbyopia; bifocal lens\n(d) Astigmatism; cylindrical lens",
    options: [
      "Hypermetropia; convex lens",
      "Myopia; concave lens",
      "Presbyopia; bifocal lens",
      "Astigmatism; cylindrical lens"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: Myopia; concave lens.",
    steps: [
      "The student can see nearby objects (textbook) clearly, but distant objects (blackboard) are blurred.",
      "This condition is Myopia (near-sightedness / short-sightedness).",
      "In a myopic eye, the image of distant objects is focused in front of the retina.",
      "A concave (diverging) lens of suitable power diverges incoming parallel rays so they focus sharply on the retina."
    ],
    explanation: "Myopia is corrected using a concave lens that shifts the image back onto the retina.",
    formula: "\\text{Myopia} \\implies \\text{Concave lens of power } P = -\\frac{1}{d(\\text{m})}",
    examinerNote: "Myopia = can see near, cannot see far = concave lens (negative power).",
    source: "NCERT Class 10 Section 11.2 / Board 2024"
  },
  {
    id: "sci_c10_q3",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): The clear sky appears blue during the daytime.\nReason (R): Atmospheric gas molecules and fine particles scatter shorter wavelength blue light much more strongly than longer wavelength red light.\n(a) Both (A) and (R) are true and (R) is the correct explanation of (A).\n(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).\n(c) (A) is true but (R) is false.\n(d) (A) is false but (R) is true.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "(A) is false but (R) is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct.",
    steps: [
      "Assertion (A) is true: The sky appears blue.",
      "Reason (R) is true: According to Rayleigh's law of scattering, intensity of scattering is inversely proportional to fourth power of wavelength ($I \\propto 1/\\lambda^4$).",
      "Blue light ($\\lambda \\approx 450\\text{ nm}$) scatters nearly 5.5 times more than red light ($\\lambda \\approx 700\\text{ nm}$).",
      "Reason correctly explains why scattered blue light enters our eyes from all directions in the daytime sky."
    ],
    explanation: "Rayleigh scattering causes shorter wavelengths (blue/violet) to scatter far more intensely than longer wavelengths (red).",
    formula: "I_{\\text{scatter}} \\propto \\frac{1}{\\lambda^4}",
    examinerNote: "Although violet has an even shorter wavelength, the sun emits less violet and human eyes are much more sensitive to blue.",
    source: "NCERT Class 10 Section 11.6 / Board 2022, 2024"
  },
  {
    id: "sci_c10_q4",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "The least distance of distinct vision (near point) for a normal young adult eye is:\n(a) 2.5 cm\n(b) 25 mm\n(c) 25 cm\n(d) Infinity",
    options: ["2.5 cm", "25 mm", "25 cm", "Infinity"],
    correctOption: 2,
    answer: "Option (c) is correct: 25 cm.",
    steps: [
      "The minimum distance at which an object can be seen most distinctly without strain is 25 cm.",
      "The far point of a normal eye is infinity ($\\infty$)."
    ],
    explanation: "For a normal human eye, the near point (least distance of distinct vision) is 25 cm, and the far point is infinity.",
    formula: "d = 25\\text{ cm}",
    examinerNote: "Take note of units: 25 cm, NOT 25 mm or 2.5 cm.",
    source: "NCERT Class 10 Section 11.1"
  },
  {
    id: "sci_c10_q5",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "When a narrow beam of white light passes through a glass prism, it splits into a spectrum of constituent colours. Which colour suffers the maximum deviation?\n(a) Red\n(b) Yellow\n(c) Green\n(d) Violet",
    options: ["Red", "Yellow", "Green", "Violet"],
    correctOption: 3,
    answer: "Option (d) is correct: Violet.",
    steps: [
      "Refractive index of glass is highest for violet light (shortest wavelength in visible spectrum).",
      "Angle of deviation $\\delta \\approx (n - 1)A$.",
      "Since $n_{\\text{violet}} > n_{\\text{red}}$, violet light bends (deviates) the most, and red deviates the least."
    ],
    explanation: "Violet light has the shortest wavelength and slowest speed in glass, resulting in the highest refractive index and maximum deviation.",
    formula: "\\delta_{\\text{violet}} > \\delta_{\\text{indigo}} > \\dots > \\delta_{\\text{red}}",
    examinerNote: "In VIBGYOR, Violet deviates most (at the base of the prism); Red deviates least.",
    source: "NCERT Class 10 Section 11.3 / Board 2022"
  },
  {
    id: "sci_c10_q6",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "A doctor prescribes a corrective lens of power -2.5 D for a patient. The focal length of the lens and the defect of vision are:\n(a) -40 cm; Myopia\n(b) +40 cm; Hypermetropia\n(c) -25 cm; Myopia\n(d) +25 cm; Presbyopia",
    options: [
      "-40 cm; Myopia",
      "+40 cm; Hypermetropia",
      "-25 cm; Myopia",
      "+25 cm; Presbyopia"
    ],
    correctOption: 0,
    answer: "Option (a) is correct: -40 cm; Myopia.",
    steps: [
      "Power $P = \\frac{1}{f(\\text{in metres})} \\implies f = \\frac{1}{P} = \\frac{1}{-2.5} = -0.4\\text{ m} = -40\\text{ cm}$.",
      "A negative focal length indicates a concave lens.",
      "Concave lenses are prescribed to correct Myopia."
    ],
    explanation: "Focal length $f = 1/P = 1/(-2.5) = -0.4\\text{ m} = -40\\text{ cm}$. Negative focal length signifies a diverging (concave) lens used for myopia.",
    formula: "f = \\frac{1}{P} = \\frac{1}{-2.5\\text{ D}} = -0.4\\text{ m} = -40\\text{ cm}",
    examinerNote: "Negative power always corresponds to a concave lens and myopia.",
    source: "NCERT Class 10 Section 11.2 / Board 2023"
  },
  {
    id: "sci_c10_q7",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Stars twinkle at night, but planets do not twinkle.\nReason (R): Stars are point-sized sources of light far away whose light rays continuously undergo atmospheric refraction, whereas planets are closer and act as extended sources of light.\n(a) Both (A) and (R) are true and (R) is the correct explanation of (A).\n(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).\n(c) (A) is true but (R) is false.\n(d) (A) is false but (R) is true.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "(A) is false but (R) is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct.",
    steps: [
      "Assertion (A) is true: Stars twinkle; planets shine steadily.",
      "Reason (R) is true: Stars are extremely distant, effectively acting as point sources. Atmospheric turbulence shifts the apparent position and intensity of rays arriving at the eye.",
      "Planets are much closer, subtending a finite angle (extended source comprising millions of point sources); individual brightness fluctuations cancel out on average.",
      "Reason correctly explains Assertion."
    ],
    explanation: "Atmospheric refraction causes twinkling of point-sized star light. Extended planetary discs average out fluctuations.",
    formula: "\\text{Atmospheric fluctuations average out to zero for extended planetary discs}",
    examinerNote: "Key distinction: point source vs extended collection of point sources.",
    source: "NCERT Class 10 Section 11.5 / Board 2021"
  },
  {
    id: "sci_c10_q8",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "Due to atmospheric refraction, the sun is visible to an observer on Earth about:\n(a) 2 minutes before actual sunrise and 2 minutes after actual sunset\n(b) 4 minutes before actual sunrise and 4 minutes after actual sunset\n(c) 1 minute before actual sunrise and 1 minute after actual sunset\n(d) 5 minutes before actual sunrise and 5 minutes after actual sunset",
    options: [
      "2 minutes before actual sunrise and 2 minutes after actual sunset",
      "4 minutes before actual sunrise and 4 minutes after actual sunset",
      "1 minute before actual sunrise and 1 minute after actual sunset",
      "5 minutes before actual sunrise and 5 minutes after actual sunset"
    ],
    correctOption: 0,
    answer: "Option (a) is correct: 2 minutes before actual sunrise and 2 minutes after actual sunset.",
    steps: [
      "Atmospheric refraction bends sunlight towards the normal as it enters progressively denser atmospheric layers.",
      "The sun appears above the horizon about 2 minutes before it physically crosses the horizon at sunrise.",
      "Similarly, it remains visible for about 2 minutes after actual sunset.",
      "The total apparent duration of daylight is extended by approximately 4 minutes."
    ],
    explanation: "Because of continuous atmospheric refraction near the horizon, we see the apparent position of the sun raised by about 0.5 degrees, giving 2 minutes early sunrise and 2 minutes delayed sunset.",
    formula: "\\Delta t_{\\text{total}} = 2\\text{ min (sunrise)} + 2\\text{ min (sunset)} = 4\\text{ min}",
    examinerNote: "Per event is 2 minutes; total day elongation is 4 minutes.",
    source: "NCERT Class 10 Section 11.5 / Board 2023"
  },
  {
    id: "sci_c10_q9",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "Sir Isaac Newton demonstrated that white light consists of seven colours by placing an inverted second identical prism behind the first prism. The beam emerging from the second prism was:\n(a) A more intense spectrum\n(b) A beam of pure white light\n(c) Divided into 14 distinct colours\n(d) Completely absorbed",
    options: [
      "A more intense spectrum",
      "A beam of pure white light",
      "Divided into 14 distinct colours",
      "Completely absorbed"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: A beam of pure white light.",
    steps: [
      "The first upright prism dispersed white light into its seven constituent spectral colors (VIBGYOR).",
      "The second identical prism was placed in an inverted position relative to the first.",
      "The inverted prism recombined all the separated colors, and a beam of white light emerged from its opposite face.",
      "This proved that white light is a combination of the spectrum colors, rather than colors being created by the glass."
    ],
    explanation: "Newton's double-prism recombination experiment proved that white light is composed of the seven colors of the spectrum.",
    formula: "\\text{White light} \\xrightarrow{\\text{Prism 1}} \\text{VIBGYOR} \\xrightarrow{\\text{Inverted Prism 2}} \\text{White light}",
    examinerNote: "Historic experiment frequently tested to explain spectrum recombination.",
    source: "NCERT Class 10 Section 11.4"
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
    answer: "At sunrise and sunset, sunlight travels a much longer distance through the thickest layers of Earth's atmosphere. Shorter wavelengths (blue and violet) are mostly scattered away by atmospheric molecules, while longer wavelengths (red and orange) suffer the least scattering and reach our eyes.",
    steps: [
      "1. Near the horizon, sunlight traverses a substantially thicker atmospheric path compared to overhead at noon.",
      "2. By Rayleigh's law ($I \\propto 1/\\lambda^4$), short-wavelength blue and violet rays are scattered out of the line of sight in all directions.",
      "3. Red light has the longest wavelength in the visible spectrum ($\\approx 700\\text{ nm}$) and scatters least.",
      "4. Hence, the light that reaches our eyes directly from the sun is predominantly rich in red wavelengths."
    ],
    explanation: "The scattering of short wavelengths over a long path leaves only the transmitted red light to enter the observer's eye.",
    formula: "I_{\\text{scatter}} \\propto \\frac{1}{\\lambda^4} \\implies \\lambda_{\\text{red}} > \\lambda_{\\text{blue}} \\implies \\text{Red scatters least}",
    examinerNote: "Must explain the longer path through the atmosphere and the Rayleigh wavelength relationship.",
    source: "NCERT Class 10 Section 11.6 / Board 2022, 2024"
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
      "Step 1: Near point of normal eye $u = -25\\text{ cm} = -0.25\\text{ m}$.",
      "Step 2: Near point of defective eye $v = -1.0\\text{ m} = -100\\text{ cm}$ (virtual image).",
      "Step 3: Lens Formula: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$.",
      "$\\frac{1}{f} = \\frac{1}{-100} - \\frac{1}{-25} = -\\frac{1}{100} + \\frac{4}{100} = +\\frac{3}{100}\\text{ cm}^{-1}$.",
      "$f = +\\frac{100}{3}\\text{ cm} \\approx +33.33\\text{ cm} = +\\frac{1}{3}\\text{ m}$.",
      "Step 4: Power $P = \\frac{1}{f(\\text{in m})} = \\frac{1}{+1/3} = +3.0\\text{ D}$ (convex lens)."
    ],
    explanation: "A convex lens provides additional converging power to focus light from 25 cm onto the retina as if it originated from the person's actual near point of 1.0 m.",
    formula: "\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}, \\quad P = \\frac{1}{f(\\text{m})}",
    examinerNote: "Convex lens with positive focal length and positive power is required.",
    source: "NCERT Class 10 Exercise 11.2 / Board 2022"
  },
  {
    id: "sci_c10_q12",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 2,
    type: "VSA",
    question: "What is the Tyndall effect? Mention any two instances where this phenomenon is observed in our daily surroundings.",
    answer: "The Tyndall effect is the phenomenon of scattering of light by colloidal particles or fine suspended particles in a medium, rendering the path of the light beam visible.\nInstances: (1) When a fine beam of sunlight enters a dusty, smoke-filled room through a small hole or ventilator. (2) When sunlight passes through the dense canopy of a tropical forest where tiny water droplets in mist scatter light.",
    steps: [
      "1. Definition: Scattering of light by colloidal/suspended particles that illuminates the beam trajectory.",
      "2. Example 1: Sunlight streaming into a darkened room containing dust or smoke.",
      "3. Example 2: Light rays filtering through mist/fog under the canopy of trees in a forest.",
      "4. Example 3: Vehicle headlights slicing through fog/mist at night."
    ],
    explanation: "Particles with dimensions comparable to or slightly larger than the wavelength of light scatter photons in all directions, illuminating the beam path.",
    formula: "\\text{Colloidal particles} + \\text{Light} \\to \\text{Illuminated beam path (Tyndall Effect)}",
    examinerNote: "Both definition and two valid practical examples are required for 2 marks.",
    source: "NCERT Class 10 Section 11.6"
  },
  {
    id: "sci_c10_q13",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 2,
    type: "VSA",
    question: "Why does the sky appear dark and black to an astronaut orbiting Earth in space or standing on the Moon, instead of blue?",
    answer: "In outer space and on the Moon, there is no atmosphere containing air molecules or dust particles. In the absence of atmospheric particles, no scattering of sunlight takes place. Since no scattered light enters the astronaut's eyes from the surrounding space, the sky appears completely dark and black.",
    steps: [
      "1. Earth's blue sky is solely due to the scattering of sunlight by gas molecules in the atmosphere.",
      "2. Space and the Moon lack an atmosphere (vacuum).",
      "3. Without particles, sunlight travels uninterrupted without undergoing scattering.",
      "4. Because no scattered light reaches the astronaut's eyes, the sky looks black even when the sun is shining."
    ],
    explanation: "Light is visible only when it enters the observer's eye. Without atmospheric scattering, outer space appears black.",
    formula: "\\text{No atmosphere} \\implies \\text{No scattering} \\implies \\text{Dark/black sky}",
    examinerNote: "State clearly: no atmosphere means no scattering of sunlight.",
    source: "NCERT Class 10 Section 11.6 / Board 2023"
  },
  {
    id: "sci_c10_q14",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 2,
    type: "VSA",
    question: "What is Presbyopia? State its primary cause and how it can be corrected in a person who also suffers from myopia.",
    answer: "Presbyopia is the age-related gradual loss of the eye's power of accommodation, causing the near point to recede beyond 25 cm. Cause: Gradual weakening of the ciliary muscles and diminishing flexibility (hardening) of the crystalline lens with age. Correction: When accompanied by myopia, it is corrected using bifocal lenses where the upper portion contains a concave lens (for distant vision) and the lower portion contains a convex lens (for reading/near vision).",
    steps: [
      "Definition: Aging defect where near point recedes, making close work difficult.",
      "Causes: (i) Weakening of ciliary muscles, (ii) Loss of crystalline lens elasticity.",
      "Correction: Bifocal lenses (upper concave for distant sight, lower convex for reading)."
    ],
    explanation: "Presbyopia is caused by aging and is corrected with bifocal or progressive lenses.",
    formula: "\\text{Bifocal lens: Upper = Concave (far), Lower = Convex (near)}",
    examinerNote: "Mentioning both causes (ciliary muscles + lens flexibility) and bifocal composition is required.",
    source: "NCERT Class 10 Section 11.2"
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
    answer: "Dispersion is the splitting of white light into its constituent spectrum of seven colours (VIBGYOR) when passing through a prism, caused by different wavelengths traveling at different speeds in glass. The angle of deviation (D) is the angle between the incident ray's original direction and the emergent ray. Relation: $A + D = i + e$.",
    steps: [
      "1. Dispersion explanation:\n- White light consists of seven colors with wavelengths ranging from ~400 nm (violet) to ~700 nm (red).\n- In glass, red light travels fastest and has the lowest refractive index ($n_{\\text{red}}$), bending the least.\n- Violet light travels slowest and has the highest refractive index ($n_{\\text{violet}}$), bending the most.\n- Hence, the colors separate upon refraction at the two prism faces.",
      "2. Angle of Deviation (D): The angle through which a ray of light turns away from its original path upon passing through the prism.",
      "3. Formula: $A + D = i + e$, where $A$ = Angle of prism, $D$ = Angle of deviation, $i$ = Angle of incidence, $e$ = Angle of emergence."
    ],
    explanation: "The triangular geometry of the prism ensures that refractions at the two inclined non-parallel surfaces compound the angular separation of different wavelengths.",
    formula: "A + D = i + e, \\quad n_{\\text{violet}} > n_{\\text{red}} \\implies D_{\\text{violet}} > D_{\\text{red}}",
    examinerNote: "Write the relation $A + D = i + e$ clearly; it is frequently tested in 3-mark questions.",
    source: "NCERT Class 10 Section 11.3 / Board 2023"
  },
  {
    id: "sci_c10_q16",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 3,
    type: "SA",
    question: "Compare Myopia and Hypermetropia across three fundamental parameters:\n(a) Causes of the defect\n(b) Position of image formation relative to retina\n(c) Corrective lens used and its optical action",
    answer: "Comparison Table:\n1. Causes:\n- Myopia: Excessive curvature of the eye lens (too powerful) OR elongation of the eyeball.\n- Hypermetropia: Focal length of the eye lens is too long (too flat) OR eyeball is too short.\n2. Position of Image:\n- Myopia: In front of the retina for distant objects.\n- Hypermetropia: Behind the retina for nearby objects.\n3. Corrective Lens & Action:\n- Myopia: Concave (diverging) lens; diverges parallel rays so they appear to come from the person's far point, focusing on the retina.\n- Hypermetropia: Convex (converging) lens; provides additional convergence so rays from 25 cm appear to diverge from the person's near point, focusing on the retina.",
    steps: [
      "Tabulate comparison clearly covering causes, image location, and lens function.",
      "Ensure optical terminology (diverging vs converging, far point vs near point) is precise."
    ],
    explanation: "Myopia involves an over-converging optical system requiring a concave lens; hypermetropia involves an under-converging system requiring a convex lens.",
    formula: "\\text{Myopia: } P < 0 \\text{ (concave)}; \\quad \\text{Hypermetropia: } P > 0 \\text{ (convex)}",
    examinerNote: "Award 1 mark each for causes, image positions, and corrective mechanisms.",
    source: "NCERT Class 10 Section 11.2 / Board 2022, 2023"
  },
  {
    id: "sci_c10_q17",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 3,
    type: "SA",
    question: "Explain the three-step optical mechanism of rainbow formation in the atmosphere. Why can a rainbow only be observed when standing with your back towards the Sun?",
    answer: "A rainbow is a natural spectrum produced by the dispersion of sunlight by tiny spherical raindrops suspended in the atmosphere. Mechanism: (1) Refraction and dispersion at entry into the raindrop, (2) Total internal reflection at the inner back surface of the drop, (3) Refraction upon exiting the drop. An observer must stand with their back towards the Sun because raindrops reflect sunlight backward toward the observer's eyes at angles between 40° (violet) and 42° (red).",
    steps: [
      "Step 1: Raindrops act as tiny prisms. When sunlight enters a raindrop, it refracts and disperses into its constituent colors (violet bends most, red least).",
      "Step 2: The separated light rays strike the inner curved back wall of the water droplet and undergo internal reflection.",
      "Step 3: As the light rays exit the droplet back into air, they refract again, widening the angular separation between colors.",
      "Why observer's back must face Sun: Because the light is reflected internally backward from the droplets, the observer must stand between the Sun and the rain shower with the Sun behind them."
    ],
    explanation: "The combined action of dispersion, internal reflection, and refraction inside millions of raindrops creates the concentric circular arc of the rainbow.",
    formula: "\\text{Sunlight} \\to \\text{Refraction + Dispersion} \\to \\text{Internal Reflection} \\to \\text{Refraction out} \\to \\text{Observer}",
    examinerNote: "Mention all three processes: refraction, dispersion, and internal reflection.",
    source: "NCERT Class 10 Section 11.4 / Board 2021, 2023"
  },
  {
    id: "sci_c10_q18",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 3,
    type: "SA",
    question: "Describe how atmospheric refraction explains the following two natural phenomena:\n(a) Twinkling of stars\n(b) Apparent early sunrise and delayed sunset",
    answer: "(a) Twinkling of stars: Stars are distant point-sources of light. As starlight passes through the continuously moving and fluctuating density layers of Earth's atmosphere, its path is refracted irregularly. The amount of light entering the observer's eye fluctuates rapidly, making the star appear to twinkle in brightness and position.\n(b) Early sunrise and delayed sunset: Near the horizon, sunlight enters progressively denser air layers and bends towards the normal. When the sun is just below the horizon, its rays are bent downwards, so the apparent position of the sun is raised above the horizon by ~0.5°. This makes the sun visible ~2 minutes before actual sunrise and ~2 minutes after actual sunset, lengthening daylight by ~4 minutes.",
    steps: [
      "Part (a): Explain point-source nature of stars, changing refractive index of turbulent atmospheric layers, and resulting rapid fluctuations in brightness.",
      "Part (b): Explain curvature of rays towards normal in denser low-altitude air, apparent elevation by 0.5 degrees, and 2 minutes gain each at dawn and dusk."
    ],
    explanation: "Continuously varying atmospheric density bends light rays toward the denser medium (downward), creating apparent displacement and fluctuations.",
    formula: "\\text{Daylight duration increases by } 2\\text{ min} + 2\\text{ min} = 4\\text{ min}",
    examinerNote: "Both phenomena are caused by atmospheric refraction. Distinguish from scattering.",
    source: "NCERT Class 10 Section 11.5 / Board 2022"
  },
  {
    id: "sci_c10_q19",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 3,
    type: "SA",
    question: "A person with a myopic eye cannot see objects distinctly placed beyond 80 cm. Determine:\n(a) The nature and focal length of the corrective lens required.\n(b) The power of this lens.\n(c) Draw a ray diagram showing how the corrective lens restores clear vision for distant objects.",
    answer: "(a) Nature: Concave lens; Focal length $f = -80\\text{ cm} = -0.8\\text{ m}$.\n(b) Power $P = -1.25\\text{ D}$.\n(c) The concave lens diverges incoming parallel rays from infinity so they appear to originate from the person's far point (80 cm), allowing the crystalline lens to focus them sharply on the retina.",
    steps: [
      "Part (a): For clear vision of distant objects, the object distance $u = -\\infty$.\nImage distance $v = -80\\text{ cm}$ (the person's far point).\nBy lens formula: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{-80} - \\frac{1}{-\\infty} = -\\frac{1}{80} - 0 = -\\frac{1}{80}\\text{ cm}^{-1}$.\n$\\implies f = -80\\text{ cm} = -0.8\\text{ m}$.\nNature: Concave (diverging) lens.",
      "Part (b): Power $P = \\frac{1}{f(\\text{in m})} = \\frac{1}{-0.8\\text{ m}} = -1.25\\text{ D}$.",
      "Part (c): Ray diagram explanation:\n1. Incoming parallel rays strike the concave lens in front of the eye.\n2. The concave lens diverges them slightly.\n3. The diverged rays appear to originate from the far point (80 cm).\n4. The eye lens then focuses these rays precisely onto the retina."
    ],
    explanation: "For a myopic eye, the corrective focal length equals the negative of the far point ($f = -d$). Hence $P = -1/0.8 = -1.25\\text{ D}$.",
    formula: "\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} \\implies f = v = -0.8\\text{ m}, \\quad P = \\frac{1}{f} = -1.25\\text{ D}",
    examinerNote: "Standard board numerical: $u = -\\infty$, $v = -\\text{far point}$. Show full formula substitution.",
    source: "NCERT Class 10 In-text Example 11.1 / Board 2024"
  },
  {
    id: "sci_c10_q20",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 3,
    type: "SA",
    question: "Describe Sir Isaac Newton's classic experiment that proved that white light is composed of seven colours. Explain why the second prism must be placed in an inverted position.",
    answer: "Newton allowed a narrow beam of sunlight to pass through a glass prism, obtaining a spectrum of seven colours (VIBGYOR). When he placed a second identical prism in an inverted position with respect to the first, all the dispersed colours recombined, emerging as a beam of pure white light. This proved that the prism does not create colours, but merely separates the colours already present in white sunlight.",
    steps: [
      "1. Setup: Two identical triangular glass prisms $P_1$ and $P_2$.\n- $P_1$ placed in normal upright position.\n- $P_2$ placed in an inverted orientation adjacent to $P_1$.",
      "2. Observation: White light enters $P_1$ and disperses into VIBGYOR colors. These separated rays enter $P_2$. The inverted geometry of $P_2$ bends the rays in the opposite direction, recombining them into a single beam of white light.",
      "3. Conclusion: White light is a mixture of seven constituent colors of different wavelengths; the prism acts only as a dispersing medium.",
      "4. Necessity of inversion: An upright second prism would disperse the light even further. The inverted prism provides an equal and opposite angular deviation, cancelling the dispersion."
    ],
    explanation: "Recombination proves that colors are inherent properties of white light, and dispersion is reversible.",
    formula: "\\text{Dispersion by } P_1 + \\text{Recombination by inverted } P_2 = \\text{White light}",
    examinerNote: "Mention that an upright second prism would increase dispersion, so inversion is essential.",
    source: "NCERT Class 10 Section 11.4 / Board 2022"
  },

  // ==========================================
  // SECTION D: 5-MARK LA (2 Questions)
  // ==========================================
  {
    id: "sci_c10_q21",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 5,
    type: "LA",
    question: "(a) Draw a labeled diagram of the human eye and describe the functions of: (i) Cornea, (ii) Iris, (iii) Ciliary muscles, (iv) Retina.\n(b) With the help of neat ray diagrams, illustrate: (i) A myopic eye viewing a distant object, (ii) Correction of myopia using a suitable concave lens.\n(c) What is cataract? How can vision be restored in a person suffering from cataract?",
    answer: "(a) Cornea: Transparent outer layer providing ~70% of optical refraction. Iris: Pigmented muscular diaphragm controlling pupil size and light entry. Ciliary muscles: Contract/relax to alter eye lens curvature for accommodation. Retina: Light-sensitive membrane with photoreceptor rods and cones converting light into nerve impulses.\n(b) Diagrams: (i) In myopic eye, parallel rays focus in front of the retina. (ii) Corrective concave lens diverges parallel rays so they focus sharply on the retina.\n(c) Cataract is the development of a cloudy, opaque membrane on the crystalline lens in elderly persons. Vision is restored through cataract surgery where the opaque lens is removed and replaced by an artificial intraocular lens (IOL).",
    steps: [
      "Part (a): Description of 4 eye components and their specific optical/physiological functions.",
      "Part (b) Ray Diagrams:\n- Diagram 1: Distant rays converging in front of retina (myopic eye).\n- Diagram 2: Concave lens placed in front; diverged rays focus precisely on retina.",
      "Part (c) Cataract Explanation:\n- Cause: Protein clumping makes crystalline lens cloudy and opaque, causing partial or complete vision loss.\n- Treatment: Surgical removal and replacement with an artificial Intraocular Lens (IOL)."
    ],
    explanation: "Comprehensive coverage of eye anatomy, refractive defect mechanics with ray tracing, and medical pathology (cataract).",
    formula: "\\text{Cataract: Milky crystalline lens} \\xrightarrow{\\text{Surgery}} \\text{Intraocular lens (IOL)}",
    examinerNote: "Neat ray diagrams with proper arrow directions on rays are mandatory for full marks in part (b).",
    source: "CBSE Board 2024 / 2023 Sample Paper"
  },
  {
    id: "sci_c10_q22",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 5,
    type: "LA",
    question: "(a) State Rayleigh's Law of Scattering. How does the size of scattering particles determine the colour of scattered light?\n(b) Give scientific reasons for the following observations:\n    (i) Danger signal lights installed on towers and traffic poles are always red.\n    (ii) Clouds generally appear white.\n(c) Draw a neat labeled diagram illustrating atmospheric refraction during sunrise, explaining why the sun is visible 2 minutes before actual sunrise.",
    answer: "(a) Rayleigh's Law: The intensity of scattered light is inversely proportional to the fourth power of wavelength ($I \\propto 1/\\lambda^4$), provided particle size $a \\ll \\lambda$. When particles are very fine (air molecules), short wavelengths (blue) are scattered most. When particles are large (dust, water droplets), all wavelengths are scattered equally, making scattered light appear white.\n(b) (i) Red light has the longest wavelength in the visible spectrum. According to Rayleigh's law, red light scatters the least by atmospheric particles and fog, allowing it to travel the greatest distance and remain visible from afar.\n(ii) Clouds consist of water droplets and ice crystals whose size is much larger than the wavelength of visible light. All colors of sunlight are scattered equally, so the scattered light reaching our eyes appears white.\n(c) Rays from the sun below the horizon travel through air layers of increasing optical density, bending continuously towards the normal. The eye perceives the rays along the tangent to their path at entry, projecting an apparent image of the sun ~0.5° above the horizon ~2 minutes early.",
    steps: [
      "Part (a): Rayleigh formula $I \\propto 1/\\lambda^4$; effect of particle size ($a \\ll \\lambda$ vs $a \\gg \\lambda$).",
      "Part (b): Scientific justifications for red danger signals (minimum scattering) and white clouds (equal scattering of all $\\lambda$).",
      "Part (c): Step-by-step description of atmospheric refraction diagram showing horizon, observer, true position, and apparent position of sun."
    ],
    explanation: "Particle size relative to wavelength determines whether scattering is wavelength-dependent (Rayleigh) or non-selective (Mie scattering).",
    formula: "I \\propto \\frac{1}{\\lambda^4} \\quad (\\text{for } a \\ll \\lambda)",
    examinerNote: "Make sure to state that clouds have large water droplets ($a \\gg \\lambda$) that scatter all wavelengths equally.",
    source: "CBSE Board 2023 / NCERT Section 11.6"
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
    answer: "(a) Patient A suffers from Myopia (near-sightedness); Patient B suffers from Presbyopia / Hypermetropia.\n(b) Patient B has Presbyopia (old-age far-sightedness), caused by weakening of the ciliary muscles and diminishing elasticity of the crystalline lens, shifting the near point away from 25 cm to 75 cm.\n(c) For Patient A: Far point $d = 1.5\\text{ m}$. Lens focal length $f = -1.5\\text{ m}$. Power $P = \\frac{1}{f} = \\frac{1}{-1.5} = -0.67\\text{ D}$ (concave lens).",
    steps: [
      "Part (a): Patient A cannot see beyond 1.5 m → Myopia. Patient B cannot see near objects at 25 cm → Presbyopia / Hypermetropia.",
      "Part (b): Explain Presbyopia: aging causes weakening of ciliary muscles and hardening of eye lens, moving near point to 75 cm.",
      "Part (c) Calculation for Patient A:\nObject distance $u = -\\infty$, Image distance $v = -1.5\\text{ m}$.\n$\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{-1.5} - 0 \\implies f = -1.5\\text{ m}$.\nPower $P = \\frac{1}{f} = \\frac{1}{-1.5\\text{ m}} = -\\frac{2}{3}\\text{ D} \\approx -0.67\\text{ D}$ (concave lens)."
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
    answer: "(a) Angle of deviation $D = 36^\\circ$.\n(b) Different colours have different wavelengths and hence travel at different speeds in glass. Consequently, the glass prism has a different refractive index for each colour ($n_{\\text{violet}} > n_{\\text{red}}$), causing each colour to bend by a different angle.\n(c) The spectrum can be recombined by placing an identical second glass prism in an inverted position adjacent to the first prism. The second prism reverses the dispersion, merging all colors back into a single beam of white light. This was first performed by Sir Isaac Newton.",
    steps: [
      "Part (a) Calculation:\nFormula: $A + D = i + e$.\nGiven: $A = 60^\\circ$, $i = 48^\\circ$, $e = 48^\\circ$.\n$60^\\circ + D = 48^\\circ + 48^\\circ = 96^\\circ$.\n$D = 96^\\circ - 60^\\circ = 36^\\circ$.",
      "Part (b): Explain that refractive index varies inversely with wavelength, so violet bends most and red bends least.",
      "Part (c): Describe Newton's inverted second prism experiment and name Sir Isaac Newton."
    ],
    explanation: "The relation $A + D = i + e$ holds for any triangular prism. The inverted prism geometry cancels the dispersion produced by the first prism.",
    formula: "A + D = i + e \\implies D = i + e - A = 48^\\circ + 48^\\circ - 60^\\circ = 36^\\circ",
    examinerNote: "Part (a) formula $A + D = i + e$ must be written explicitly.",
    source: "CBSE Board 2023 / 2024 Sample Paper"
  },
  {
    id: "sci_c10_q25",
    chapter: 10,
    chapterName: "The Human Eye and the Colourful World",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Danger signal lights installed at traffic intersections and tall communications towers are always red.\nReason (R): According to Rayleigh's law of scattering, red light has the longest wavelength in the visible spectrum and is scattered the least by smoke and fog particles.\n(a) Both A and R are true and R is the correct explanation of A\n(b) Both A and R are true but R is not the correct explanation of A\n(c) A is true but R is false\n(d) A is false but R is true",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a) is correct: Both A and R are true and R is the correct explanation of A.",
    explanation: "Both Assertion and Reason are true, and R correctly explains A. By Rayleigh's scattering law (I proportional to 1/lambda^4), red light with its long wavelength (~700 nm) suffers minimum scattering and can penetrate through dense fog and smoke over maximum distance without loss.",
    examinerNote: "Rayleigh scattering intensity is inversely proportional to fourth power of wavelength.",
    source: "CBSE Sample Paper 2026 / NCERT"
  },
  {
    id: "sci_c10_q26",
    chapter: 10,
    chapterName: "The Human Eye and the Colourful World",
    marks: 5,
    type: "LA",
    question: "(a) A person with a myopic eye cannot see objects beyond 1.2 m distinctly. Calculate the focal length and power of the corrective lens required to restore normal distant vision.\n(b) The near point of a hypermetropic eye is 1 m. Find the power of the lens required to read a book held at 25 cm.\n(c) With the aid of a neat labeled ray diagram, explain the three sequential optical phenomena responsible for the formation of a rainbow in the sky after a rain shower.",
    answer: "(a) Myopia Correction Numerical:\nFor a myopic eye to view distant objects at infinity (u = -infinity), the corrective concave lens must form a virtual image at the person's far point (v = -1.2 m = -120 cm).\nLens formula: 1/f = 1/v - 1/u = 1/(-1.2) - 1/(-infinity) = -1/1.2 ⇒ f = -1.2 m.\nPower: P = 1 / f(m) = 1 / (-1.2) = -10/12 = -0.83 D (or -5/6 D).\nCorrective lens required is a Concave lens of power -0.83 D.\n\n(b) Hypermetropia Correction Numerical:\nGiven: Normal near point u = -25 cm = -0.25 m, defective near point v = -1 m = -100 cm.\nLens formula: 1/f = 1/v - 1/u = 1/(-100) - 1/(-25) = -1/100 + 4/100 = +3/100 cm^-1 ⇒ f = +100/3 cm = +1/3 m.\nPower: P = 1 / f(m) = 1 / (+1/3) = +3.0 D.\nCorrective lens required is a Convex lens of power +3.0 D.\n\n(c) Rainbow Formation Mechanics:\nWater droplets act as small prisms. The 3 sequential optical events are:\n1. Refraction and Dispersion: Sunlight enters the droplet at its front surface, slows down, and disperses into VIBGYOR colors.\n2. Internal Reflection: Dispersed light reflects off the inner rear surface of the water droplet.\n3. Refraction: Light refracts again as it emerges from the droplet into air toward the observer's eye (Red emerges at ~42°, Violet at ~40°).",
    explanation: "NCERT Chapter 10 core 5-marker combining vision defect numericals with atmospheric rainbow physics.",
    examinerNote: "Convex lens power is always positive (+3.0 D) and concave lens power is always negative (-0.83 D).",
    source: "CBSE Board Examination (5 Marks) / NCERT"
  },
  {
    id: "sci_c10_q27",
    chapter: 10,
    chapterName: "The Human Eye and the Colourful World",
    marks: 1,
    type: "MCQ",
    question: "The accommodation of the human eye to focus distinctly on both distant and nearby objects is accomplished by changing the focal length of the crystalline lens through the action of:\n(a) Pupil\n(b) Retina\n(c) Ciliary muscles\n(d) Iris",
    options: [
      "Pupil",
      "Retina",
      "Ciliary muscles",
      "Iris"
    ],
    correctOption: 2,
    answer: "(c) Ciliary muscles",
    explanation: "Ciliary muscles modify the curvature of the crystalline eye lens. When ciliary muscles relax, the lens becomes thin and its focal length increases, enabling distant vision. When ciliary muscles contract, the lens becomes thicker and its focal length decreases, enabling nearby vision.",
    formula: "Power of Accommodation: Ciliary Muscles Relax -> Thin Lens (Far); Ciliary Muscles Contract -> Thick Lens (Near)",
    examinerNote: "NCERT Section 10.1.1. Frequently tested 1M board question.",
    source: "NCERT Class 10 Section 10.1.1 / CBSE Board 2024"
  },
  {
    id: "sci_c10_q28",
    chapter: 10,
    chapterName: "The Human Eye and the Colourful World",
    marks: 1,
    type: "MCQ",
    question: "Which component of the human eye acts as a variable diaphragm to regulate and control the amount of light entering the pupil?\n(a) Cornea\n(b) Iris\n(c) Crystalline lens\n(d) Sclera",
    options: [
      "Cornea",
      "Iris",
      "Crystalline lens",
      "Sclera"
    ],
    correctOption: 1,
    answer: "(b) Iris",
    explanation: "The iris is a dark muscular diaphragm behind the cornea that controls the size of the pupil. In bright light, the iris contracts the pupil to reduce light entry; in dim light, the iris relaxes and dilates the pupil to allow maximum light entry onto the retina.",
    formula: "Iris -> Regulates Pupil Aperture Size -> Controls Retinal Illuminance",
    examinerNote: "Direct NCERT Section 10.1 definition.",
    source: "NCERT Section 10.1 / CBSE Board 2023"
  },
  {
    id: "sci_c10_q29",
    chapter: 10,
    chapterName: "The Human Eye and the Colourful World",
    marks: 2,
    type: "VSA",
    question: "What is a Cataract? State its primary cause, why it causes partial or total vision loss, and how it is surgically corrected.",
    answer: "Cataract Pathology and Treatment:\n1. Definition & Cause: A condition commonly occurring in old age where the crystalline eye lens becomes hazy, cloudy, or completely opaque due to the denaturation and aggregation of lens proteins.\n2. Vision Loss: Because the lens is milky and opaque, light rays cannot transmit through it to reach the photoreceptors of the retina, resulting in blurred, milky vision or complete blindness.\n3. Surgical Correction: Cataract cannot be cured with glasses or eye drops. It is corrected by cataract surgery, in which the clouded natural lens is surgically removed (via phacoemulsification) and replaced with an artificial plastic/silicone Intraocular Lens (IOL).",
    explanation: "NCERT Section 10.1.1 Box item on cataract pathology and intraocular replacement.",
    formula: "Cloudy Crystalline Lens -> Loss of Transparency -> Cataract Surgery (IOL Replacement)",
    examinerNote: "1 mark for definition and protein clouding; 1 mark for vision loss and surgical IOL replacement.",
    source: "NCERT Section 10.1.1 / CBSE Board 2024"
  },
  {
    id: "sci_c10_q30",
    chapter: 10,
    chapterName: "The Human Eye and the Colourful World",
    marks: 2,
    type: "VSA",
    question: "Why does the air above a campfire, hearth, or hot asphalt road appear to flicker and shimmer waveringly?",
    answer: "Atmospheric Refraction & Convective Turbulence:\n1. The air directly above a hot fire or radiator becomes intensely heated, expands, and becomes less dense (optically rarer) than the cooler, denser air situated higher up.\n2. Since the refractive index of hot air is slightly lower than that of cool air, light rays passing through this boundary undergo continuous refraction.\n3. The physical conditions of the refracting medium (air density and temperature) are not stationary due to convective turbulent air currents rising rapidly. As a result, the apparent position of objects seen through the hot turbulent air fluctuates randomly from instant to instant, producing the wavering shimmering effect.",
    explanation: "NCERT Section 10.2. Dynamic fluctuations in the optical refractive index of turbulent heated air cause shimmering.",
    formula: "Hot Air (Lower Density, Lower n) + Cool Air (Higher Density, Higher n) + Convection -> Shimmering",
    examinerNote: "1 mark for temperature-density gradient altering refractive index; 1 mark for convection currents causing apparent position fluctuation.",
    source: "NCERT Section 10.2 / CBSE Board 2024"
  },
  {
    id: "sci_c10_q31",
    chapter: 10,
    chapterName: "The Human Eye and the Colourful World",
    marks: 3,
    type: "SA",
    question: "A 14-year-old student sitting in the last row of a classroom cannot read the letters written on the blackboard distinctly, though she can read her textbook comfortably at a distance of 25 cm.\n(a) Name the visual defect the student is suffering from.\n(b) State two anatomical causes that give rise to this defect.\n(c) What type of corrective lens is prescribed to restore her distant blackboard vision? Explain the optical role of this lens.",
    answer: "(a) Defect of Vision: **Myopia** (Near-sightedness / Short-sightedness).\n\n(b) Two Anatomical Causes:\n    1. Excessive curvature of the crystalline eye lens (lens is excessively thick and powerful, focal length too short).\n    2. Elongation of the eyeball (antero-posterior diameter of the eyeball is too long, placing the retina farther behind the focal plane).\n\n(c) Corrective Lens & Optical Role:\n    - Prescribed Lens: A **Concave Lens** (Diverging lens) of appropriate focal length/power.\n    - Optical Role: Parallel rays from the distant blackboard are slightly diverged by the concave lens before entering the eye, so that they appear to diverge from the myopic student's near-situated far point. The crystalline lens then converges these diverged rays precisely onto the retina, restoring sharp distant vision.",
    explanation: "NCERT Section 10.1.2. Myopic eye focuses parallel rays in front of the retina; concave lens diverges them backward onto the retina.",
    formula: "Defect: Myopia; Causes: Excessive curvature / Eyeball elongation; Correction: Concave lens",
    examinerNote: "1 mark for Myopia; 1 mark for both anatomical causes; 1 mark for concave lens and virtual far-point mechanism.",
    source: "NCERT Section 10.1.2 / CBSE Board 2024"
  },
  {
    id: "sci_c10_q32",
    chapter: 10,
    chapterName: "The Human Eye and the Colourful World",
    marks: 5,
    type: "LA",
    question: "(a) The near point of a hypermetropic person is 75 cm. Calculate the focal length and optical power of the corrective convex lens required to enable the person to read a book comfortably at the standard near point of 25 cm. [2.5M]\n(b) What is Presbyopia (old-age hypermetropia)? State its two physiological causes. [1.5M]\n(c) Sometimes an elderly individual suffers from both myopia and hypermetropia simultaneously. What type of corrective eyeglasses are prescribed, and how are the two lens segments arranged? [1M]",
    answer: "(a) Hypermetropia Lens Calculation:\n    - Normal reading distance (object distance): u = -25 cm = -0.25 m\n    - Defective near point (image distance): v = -75 cm = -0.75 m\n    - Using the Lens Formula: 1/f = 1/v - 1/u\n      1/f = 1/(-75) - 1/(-25) = -1/75 + 1/25 = (-1 + 3) / 75 = +2 / 75 cm^(-1)\n      f = +75 / 2 cm = +37.5 cm = +0.375 m\n    - Optical Power Calculation:\n      P = 1 / f(in metres) = 1 / (+0.375) = +1000 / 375 = +8 / 3 D = **+2.67 D**\n    - Corrective Lens: A Convex lens of focal length +37.5 cm and power **+2.67 D**.\n\n(b) Presbyopia (Old-Age Hypermetropia):\n    - Definition: The gradual loss of the eye's power of accommodation with advancing age, causing difficulty in reading or seeing nearby objects distinctly without spectacles.\n    - Two Causes:\n      1. Gradual weakening of the ciliary muscles.\n      2. Diminishing elasticity and hardening of the crystalline eye lens.\n\n(c) Presbyopia with Myopia (Bifocal Lenses):\n    - Prescribed Eyeglasses: **Bifocal Lenses**.\n    - Arrangement: The upper portion of the bifocal lens consists of a Concave lens to facilitate distant vision; the lower portion consists of a Convex lens to facilitate near reading vision.",
    explanation: "NCERT Section 10.1.2 & 10.1.3. Comprehensive 5-marker integrating hypermetropia numerical derivation, presbyopia physiology, and bifocal lens optics.",
    formula: "1/f = 1/v - 1/u -> f = +37.5 cm; P = +2.67 D; Bifocals: Upper Concave (Distant), Lower Convex (Near)",
    examinerNote: "2.5 marks for step-by-step numerical calculation (+2.67 D); 1.5 marks for presbyopia causes; 1 mark for bifocal lens arrangement.",
    source: "CBSE Class 10 Board 2024 / Exemplar HOTS"
  }
];

