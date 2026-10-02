import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH10_QUESTIONS: VaultQuestion[] = [
  // ==========================================
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON
  // ==========================================
  {
    id: "sci_c10_q1",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "The ability of the eye to focus on both near and distant objects by changing the curvature of the lens is called:\n(a) Binocular vision\n(b) Accommodation\n(c) Persistence of vision\n(d) Adaptation",
    options: ["Binocular vision", "Accommodation", "Persistence of vision", "Adaptation"],
    correctOption: 1,
    answer: "Option (b): Accommodation",
    steps: [
      "Accommodation: the ability of the eye lens to adjust its focal length to focus objects at different distances.",
      "Ciliary muscles control the curvature of the eye lens.",
      "Near objects: ciliary muscles contract → lens becomes thicker (more curved) → shorter focal length.",
      "Distant objects: ciliary muscles relax → lens becomes thinner (flatter) → longer focal length."
    ],
    explanation: "Accommodation = power of adjustment. Ciliary muscles change lens curvature to maintain sharp focus.",
    formula: "\\text{Near objects: ciliary contract, lens fat} \\quad \\text{Far objects: ciliary relax, lens thin}",
    examinerNote: "Accommodation ≠ persistence of vision. Accommodation is about focusing; persistence is about retention of image.",
    source: "NCERT Section 11.1 / Board 2023"
  },
  {
    id: "sci_c10_q2",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "A person cannot see objects clearly beyond 2 m. The defect of vision and the type of corrective lens needed are:\n(a) Hypermetropia; convex lens\n(b) Myopia; concave lens\n(c) Myopia; convex lens\n(d) Presbyopia; bifocal lens",
    options: [
      "Hypermetropia; convex lens",
      "Myopia; concave lens",
      "Myopia; convex lens",
      "Presbyopia; bifocal lens"
    ],
    correctOption: 1,
    answer: "Option (b): Myopia; concave lens",
    steps: [
      "Cannot see beyond 2 m = near point is normal but FAR POINT is 2 m (should be infinity).",
      "This is MYOPIA (short-sightedness).",
      "Cause: eyeball too long OR lens too thick → image forms in front of retina.",
      "Correction: CONCAVE (diverging) lens → diverges rays before they enter eye → image shifts back to retina."
    ],
    explanation: "Myopia = can't see far. Corrected by concave (diverging) lens.",
    formula: "\\text{Myopia} \\to \\text{Concave lens}, \\quad \\text{Hypermetropia} \\to \\text{Convex lens}",
    examinerNote: "Myopia = near-sighted (sees near, not far) = concave. Hypermetropia = far-sighted (sees far, not near) = convex.",
    source: "NCERT Section 11.3 / Board 2022, 2024"
  },
  {
    id: "sci_c10_q3",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): The sky appears blue because of scattering of sunlight.\nReason (R): Smaller particles scatter light of shorter wavelengths (blue) more than longer wavelengths (red).\n(a) Both A and R are true and R is correct explanation\n(b) Both A and R are true but R is NOT correct explanation\n(c) A is true but R is false\n(d) A is false but R is true",
    options: [
      "Both A and R are true and R is correct explanation",
      "Both A and R are true but R is NOT correct explanation",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a): Both true, R is correct explanation",
    steps: [
      "A: Sky appears blue = TRUE (due to atmospheric light scattering).",
      "R: Rayleigh scattering: intensity ∝ 1/λ⁴. Smaller wavelength (blue ≈ 450nm) scattered MUCH more than red (700nm). ✓ TRUE",
      "R directly explains why sky is blue (scattered blue light reaches our eyes from all directions)."
    ],
    explanation: "Tyndall effect/Rayleigh scattering: blue light (shorter λ) scattered more → sky looks blue from all directions.",
    formula: "I_{scatter} \\propto \\frac{1}{\\lambda^4} \\implies \\text{blue scattered most}",
    examinerNote: "This is the most frequently tested phenomenon in Chapter 11. Blue sky + red sunset are both Rayleigh scattering.",
    source: "NCERT Section 11.5 / Board 2022, 2024"
  },
  {
    id: "sci_c10_q4",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "The minimum distance of clear vision for a normal human eye is:\n(a) 2.5 cm\n(b) 10 cm\n(c) 25 cm\n(d) 100 cm",
    options: ["2.5 cm", "10 cm", "25 cm", "100 cm"],
    correctOption: 2,
    answer: "Option (c): 25 cm",
    steps: [
      "The near point of a normal human eye = 25 cm (minimum distance at which objects can be seen clearly).",
      "This is also called the 'least distance of distinct vision'.",
      "Objects closer than 25 cm cannot be focused clearly without strain."
    ],
    explanation: "Normal near point = 25 cm. Normal far point = infinity. Any deviation = refractive error.",
    formula: "D = 25 \\text{ cm (near point of normal eye)}",
    examinerNote: "25 cm = least distance of distinct vision. Used in magnification formula: M = 1 + D/f for simple microscope.",
    source: "NCERT Section 11.1"
  },
  {
    id: "sci_c10_q5",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "When white light passes through a prism, it splits into its constituent colours. This phenomenon is called:\n(a) Reflection\n(b) Refraction\n(c) Dispersion\n(d) Scattering",
    options: ["Reflection", "Refraction", "Dispersion", "Scattering"],
    correctOption: 2,
    answer: "Option (c): Dispersion",
    steps: [
      "Dispersion: splitting of white light into its component colours (VIBGYOR) by a prism.",
      "Cause: Different colours have slightly different refractive indices in glass → different bending → they separate.",
      "Violet light bends most (highest n), Red bends least (lowest n)."
    ],
    explanation: "Dispersion = splitting white light into spectrum. Violet deviates most, red least. Newton discovered this.",
    formula: "\\text{White light} \\to \\text{Prism} \\to \\text{VIBGYOR spectrum}",
    examinerNote: "Order: Violet, Indigo, Blue, Green, Yellow, Orange, Red (VIBGYOR). Violet = most deviation, Red = least.",
    source: "NCERT Section 11.4 / Board 2022"
  },
  {
    id: "sci_c10_q6",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 1,
    type: "MCQ",
    question: "The power of a myopic patient's corrective lens is -4 D. The far point of this person's eye is:\n(a) 4 m\n(b) 25 cm\n(c) 0.25 m\n(d) 100 cm",
    options: ["4 m", "25 cm", "0.25 m", "100 cm"],
    correctOption: 2,
    answer: "Option (c): 0.25 m (25 cm)",
    steps: [
      "P = -4 D (concave/myopic correction lens)",
      "f = 1/P = 1/(-4) = -0.25 m = -25 cm",
      "The lens must diverge rays from infinity to appear as if coming from the far point.",
      "For concave lens: virtual image at far point: v = f = -25 cm.",
      "Far point = 25 cm = 0.25 m"
    ],
    explanation: "Power of corrective lens for myopia = -1/(far point in meters). Far point = |f| = 0.25 m.",
    formula: "f = 1/P = 1/(-4) = -0.25 \\text{ m}; \\text{Far point} = 25 \\text{ cm}",
    examinerNote: "Myopic far point = |f of concave lens|. This is the maximum distance the myope can see clearly.",
    source: "NCERT Section 11.3 / Board 2023"
  },

  // ==========================================
  // SECTION B: 2-MARK VSA
  // ==========================================
  {
    id: "sci_c10_q7",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 2,
    type: "VSA",
    question: "Explain why the sun appears red at sunrise and sunset.",
    answer: "Sun appears red because blue light is scattered away by the thick atmosphere layer at horizon. Red light (longer λ) reaches the eye.",
    steps: [
      "At sunrise/sunset, sunlight travels a LONGER path through the atmosphere than at noon.",
      "This longer path means more atmospheric particles scatter light.",
      "Blue light (shorter wavelength) is scattered away in multiple directions.",
      "Red light (longer wavelength, λ ≈ 700 nm) is scattered much less.",
      "Therefore, mostly RED light (and orange) reaches the observer's eye → sun appears red/orange."
    ],
    explanation: "Sunrise/sunset red color = blue scattered away → red transmitted. Same physics as blue sky, different geometry.",
    formula: "\\text{Long path at horizon} \\to \\text{Blue scattered away} \\to \\text{Red reaches eye}",
    examinerNote: "Two processes to know: (1) Blue sky (scattered blue comes to eye), (2) Red sun (scattered blue leaves, red remains).",
    source: "NCERT Section 11.5 / Board 2022, 2024"
  },
  {
    id: "sci_c10_q8",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 2,
    type: "VSA",
    question: "A person suffering from hypermetropia has a near point of 1 m. What should be the focal length of the corrective lens?",
    answer: "f = 100/3 cm ≈ 33.33 cm (convex lens)",
    steps: [
      "Normal near point = 25 cm = 0.25 m. Hypermetropic near point = 1 m = 100 cm.",
      "The corrective lens should form a virtual image at 100 cm (far near point) when the object is at 25 cm.",
      "Object distance u = -25 cm (in front of lens).",
      "Image distance v = -100 cm (virtual image, same side as object).",
      "Lens formula: 1/f = 1/v - 1/u = 1/(-100) - 1/(-25) = -1/100 + 4/100 = 3/100",
      "f = 100/3 cm ≈ +33.33 cm (positive → convex lens)"
    ],
    explanation: "Hypermetropia: object at 25 cm must form image at 100 cm (actual near point). Convex lens used.",
    formula: "\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{-100} - \\frac{1}{-25} = \\frac{3}{100}",
    examinerNote: "Image is virtual and on same side as object → v is negative. Object is at standard 25 cm.",
    source: "NCERT Exercise 11.3 / Board 2022"
  },

  // ==========================================
  // SECTION C: 3-MARK SA
  // ==========================================
  {
    id: "sci_c10_q9",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 3,
    type: "SA",
    question: "What is dispersion of light? How does a glass prism produce a spectrum of white light? Which colour deviates the most and the least?",
    answer: "Dispersion = splitting white light into VIBGYOR. Prism refracts each colour differently. Violet most, red least.",
    steps: [
      "Dispersion: the splitting of white light into its component spectrum of colours when passing through a prism or another medium.",
      "Mechanism in a prism:",
      "1. White light enters prism and undergoes REFRACTION at the first surface.",
      "2. Different colours have different refractive indices in glass.",
      "3. Violet light (λ ≈ 400 nm): highest n in glass → bends most → deviates most.",
      "4. Red light (λ ≈ 700 nm): lowest n in glass → bends least → deviates least.",
      "5. At second surface, further refraction separates the colours more.",
      "Result: VIBGYOR spectrum (Violet, Indigo, Blue, Green, Yellow, Orange, Red).",
      "Violet deviates MOST. Red deviates LEAST."
    ],
    explanation: "Dispersion occurs because refractive index varies with wavelength (color). n is highest for violet, lowest for red.",
    formula: "n_{violet} > n_{red} \\implies \\delta_{violet} > \\delta_{red}",
    examinerNote: "VIBGYOR order from most to least deviated: V-I-B-G-Y-O-R. Red deviates least → at bottom in spectrum.",
    source: "NCERT Section 11.4 / Board 2022, 2023"
  },
  {
    id: "sci_c10_q10",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 3,
    type: "SA",
    question: "Compare myopia and hypermetropia: causes, symptoms, and correction.",
    answer: "Myopia: can't see far, image forms before retina, corrected by concave lens. Hypermetropia: can't see near, image forms behind retina, corrected by convex lens.",
    steps: [
      "MYOPIA (Short-sightedness):",
      "- Cause: Eyeball too long OR lens too convex (too curved).",
      "- Image of distant objects forms IN FRONT of retina.",
      "- Symptom: Cannot see distant objects clearly.",
      "- Correction: Concave (diverging) lens of appropriate focal length.",
      "HYPERMETROPIA (Long-sightedness):",
      "- Cause: Eyeball too short OR lens too flat.",
      "- Image of nearby objects would form BEHIND the retina.",
      "- Symptom: Cannot see close objects clearly.",
      "- Correction: Convex (converging) lens."
    ],
    explanation: "Myopia: too much convergence → image before retina → concave lens diverges rays. Hypermetropia: too little → image behind → convex helps.",
    formula: "\\text{Myopia: concave} \\quad \\text{Hypermetropia: convex}",
    examinerNote: "Draw ray diagrams for each defect showing correction. CBSE awards 1.5 marks for each part.",
    source: "NCERT Section 11.3 / Board 2021, 2023"
  },

  // ==========================================
  // SECTION D: 5-MARK LA
  // ==========================================
  {
    id: "sci_c10_q11",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 5,
    type: "LA",
    question: "Explain the structure of the human eye with a labeled diagram. Describe the function of the following parts: cornea, iris, pupil, lens, retina, and optic nerve.",
    answer: "Complete structure of human eye with six key components and their functions.",
    steps: [
      "Structure of Human Eye (Draw oval eye diagram with all parts labeled):",
      "1. Cornea: Transparent front surface. Refracts light as it enters the eye. Does most of the eye's total focusing (about 2/3 of total).",
      "2. Iris: Circular, colored disc of muscle around the pupil. Controls pupil size to regulate light intake.",
      "3. Pupil: Black circular opening in center of iris. Size varies: dilates in dim light (more light in), constricts in bright light (less light in).",
      "4. Eye Lens (Crystalline Lens): Biconvex transparent lens behind iris. Fine-focuses light onto retina. Changes shape for accommodation (ciliary muscles).",
      "5. Retina: Light-sensitive inner layer at back of eye. Contains rods (dim light, black-white) and cones (color, bright light). Converts light to electrical signals.",
      "6. Optic Nerve: Bundle of nerve fibers. Transmits electrical signals from retina to brain's visual cortex for interpretation.",
      "7. Vitreous Humor: Jelly-like fluid filling eyeball, maintains eye shape.",
      "8. Aqueous Humor: Watery fluid in front of lens, supplies nutrients to cornea and lens."
    ],
    explanation: "Eye = complex optical instrument. Cornea (rough focus) + lens (fine focus) together project image on retina.",
    formula: "\\text{Cornea} + \\text{Lens} \\to \\text{Focused image on Retina} \\to \\text{Optic Nerve} \\to \\text{Brain}",
    examinerNote: "5-mark: draw labeled diagram + 6 part functions. One point per structure. No label = loss of marks.",
    source: "NCERT Section 11.1 / Board 2021, 2022"
  },

  // ==========================================
  // CASE STUDY & ADDITIONAL PYQs
  // ==========================================
  {
    id: "sci_c10_q12",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 4,
    type: "Case Study",
    question: "Priya noticed that her grandmother could not read newspapers clearly unless she held them at arm's length, but had no difficulty seeing distant objects. The doctor prescribed glasses with +3.5 D lenses.\n\n(i) [1M] What type of visual defect does the grandmother have?\n(ii) [1M] Name the type of lens in the glasses.\n(iii) [2M] Find the focal length of the glasses and explain how they help correct the grandmother's vision.",
    answer: "(i) Hypermetropia. (ii) Convex lens. (iii) f = 1/P = 1/3.5 ≈ 28.6 cm. Convex lens converges rays to help form image on retina.",
    steps: [
      "(i) Cannot see near objects clearly (reads at arm's length) but sees distant objects fine → HYPERMETROPIA.",
      "(ii) Corrective lens for hypermetropia = CONVEX (converging) lens.",
      "(iii) Focal length: P = +3.5 D. f = 1/P = 1/3.5 ≈ 0.286 m ≈ 28.6 cm",
      "Mechanism: The hypermetropic eye is too short OR lens too flat → image of nearby object would form behind retina.",
      "Convex lens converges the diverging rays from near objects → effectively moves near point to a comfortable distance → image now falls on retina."
    ],
    explanation: "Hypermetropia: convex lens increases total converging power of eye system to compensate for short eyeball.",
    formula: "P = +3.5 \\text{ D}, \\quad f = \\frac{1}{P} \\approx 28.6 \\text{ cm (convex)}",
    examinerNote: "Positive power → convex lens → hypermetropia. Negative power → concave lens → myopia.",
    source: "CBSE Board 2024 Practice"
  },
  {
    id: "sci_c10_q13",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 2,
    type: "VSA",
    question: "What is the Tyndall effect? Give one example from daily life.",
    answer: "Tyndall effect: scattering of light by colloidal particles in a medium. Example: sunlight visible through forest trees.",
    steps: [
      "Tyndall Effect: When a beam of light passes through a colloidal solution or fine particles suspended in a medium, the particles scatter the light in all directions → beam becomes visible.",
      "Named after John Tyndall (1869).",
      "Examples:",
      "1. Beam of sunlight visible in a dark forest or dusty room (particles scatter light).",
      "2. Headlights of cars visible in foggy weather.",
      "3. Blue colour of sky (scattering by atmosphere particles).",
      "4. White-looking colloid solutions (milk looks white)."
    ],
    explanation: "Tyndall effect shows colloidal/fine particle presence by making light beam visible from the side.",
    formula: "\\text{Fine particles} + \\text{Light beam} \\to \\text{Scattering} \\to \\text{Visible beam (Tyndall)}",
    examinerNote: "Tyndall = scattering in colloids/atmosphere. Distinguish from Rayleigh scattering (atmospheric, wavelength-dependent).",
    source: "NCERT Section 11.5 / Board 2022"
  },
  {
    id: "sci_c10_q14",
    chapter: 10,
    chapterName: "The Human Eye and Colourful World",
    marks: 3,
    type: "SA",
    question: "Explain the phenomenon of rainbow formation. Why does a rainbow form only after rain?",
    answer: "Rainbow = dispersion + internal reflection of sunlight in water droplets. Forms opposite the sun when droplets are present.",
    steps: [
      "Rainbow formation involves TWO processes inside each water droplet:",
      "1. DISPERSION (Refraction): White sunlight enters a water droplet → splits into VIBGYOR spectrum.",
      "2. TOTAL INTERNAL REFLECTION: Light reflects off the inner back surface of the droplet.",
      "3. DISPERSION AGAIN (Second refraction): Light exits the droplet → colours spread out further.",
      "4. Observer sees red on outside (higher angle ~42°) and violet on inside (lower angle ~40°).",
      "Why only after rain: Water droplets in the air act as tiny prisms. Without rain droplets, no rainbow is possible.",
      "Why observer must have sun behind: The droplets must be OPPOSITE the sun to reflect light back toward the observer."
    ],
    explanation: "Rainbow = dispersion + internal reflection in spherical water droplets. A complete circle if seen from airplane.",
    formula: "\\text{Sunlight} \\to \\text{Droplet} \\xrightarrow{\\text{refraction + reflection + refraction}} \\text{VIBGYOR}",
    examinerNote: "Both processes (dispersion + total internal reflection) must be mentioned. Red is always on outside of rainbow.",
    source: "NCERT Section 11.4 / Board 2022, 2023"
  }
];
