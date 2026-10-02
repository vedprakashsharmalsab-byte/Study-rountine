import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH9_QUESTIONS: VaultQuestion[] = [
  // ==========================================
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON
  // ==========================================
  {
    id: "sci_c9_q1",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "According to the laws of reflection, the angle of incidence is:\n(a) Greater than the angle of reflection\n(b) Equal to the angle of reflection\n(c) Less than the angle of reflection\n(d) Complementary to the angle of reflection",
    options: [
      "Greater than the angle of reflection",
      "Equal to the angle of reflection",
      "Less than the angle of reflection",
      "Complementary to the angle of reflection"
    ],
    correctOption: 1,
    answer: "Option (b): Equal to the angle of reflection",
    steps: [
      "Law of Reflection: ∠i = ∠r (angle of incidence = angle of reflection).",
      "Both angles measured from the NORMAL to the reflecting surface."
    ],
    explanation: "The law of reflection: angle of incidence = angle of reflection. Incident ray, reflected ray, and normal are coplanar.",
    formula: "\\angle i = \\angle r",
    examinerNote: "Both angles measured from the NORMAL, not from the surface. Surface normal is perpendicular to reflecting surface.",
    source: "NCERT Section 10.1"
  },
  {
    id: "sci_c9_q2",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "A concave mirror has a focal length of 15 cm. The radius of curvature of the mirror is:\n(a) 15 cm\n(b) 7.5 cm\n(c) 30 cm\n(d) 45 cm",
    options: ["15 cm", "7.5 cm", "30 cm", "45 cm"],
    correctOption: 2,
    answer: "Option (c): 30 cm",
    steps: [
      "Relation: R = 2f",
      "R = 2 × 15 = 30 cm"
    ],
    explanation: "Radius of curvature (R) is always twice the focal length (f): R = 2f.",
    formula: "R = 2f = 2 \\times 15 = 30 \\text{ cm}",
    examinerNote: "R = 2f is fundamental. Very frequently tested in 1-mark MCQs.",
    source: "NCERT Section 10.2"
  },
  {
    id: "sci_c9_q3",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "When a ray of light travels from a denser medium to a rarer medium, it:\n(a) Bends toward the normal\n(b) Bends away from the normal\n(c) Travels along the normal\n(d) Undergoes total internal reflection always",
    options: [
      "Bends toward the normal",
      "Bends away from the normal",
      "Travels along the normal",
      "Undergoes total internal reflection always"
    ],
    correctOption: 1,
    answer: "Option (b): Bends away from the normal",
    steps: [
      "Snell's Law: n₁ sin θ₁ = n₂ sin θ₂",
      "Denser to rarer: n₁ > n₂, so sin θ₂ > sin θ₁, meaning θ₂ > θ₁.",
      "Refracted ray bends AWAY from normal (larger angle)."
    ],
    explanation: "Going from dense to rare medium: speed increases → bends away from normal. Dense to rare: diverges away.",
    formula: "n_{dense} > n_{rare} \\implies \\theta_{refracted} > \\theta_{incident}",
    examinerNote: "Memory: Dense→Rare = bends Away. Rare→Dense = bends Toward (converges). DART rule.",
    source: "NCERT Section 10.3"
  },
  {
    id: "sci_c9_q4",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): A convex mirror is always used as a rear-view mirror in vehicles.\nReason (R): A convex mirror produces a wider field of view as its image is erect and diminished.\n(a) Both A and R are true and R is the correct explanation\n(b) Both A and R are true but R is NOT the correct explanation\n(c) A is true but R is false\n(d) A is false but R is true",
    options: [
      "Both A and R are true and R is correct explanation",
      "Both A and R are true but R is NOT correct explanation",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a): Both true, R is correct explanation",
    steps: [
      "A: Convex mirror IS used as rear-view mirror ✓ TRUE",
      "R: Convex mirror forms erect, virtual, diminished images → wider field of view ✓ TRUE",
      "R explains A: the wider field of view is exactly why convex mirrors are used."
    ],
    explanation: "Convex mirrors always give erect, virtual, diminished image → used as rear-view mirror for wider coverage.",
    examinerNote: "Three uses of convex mirror: rear-view, road bends/corners, security mirrors (shop). All use the 'wide FOV' property.",
    source: "NCERT Section 10.2 / Board 2023"
  },
  {
    id: "sci_c9_q5",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "The refractive index of water is 1.33. A ray of light goes from water to air. The speed of light in air is 3 × 10⁸ m/s. The speed of light in water is approximately:\n(a) 2.25 × 10⁸ m/s\n(b) 1.33 × 10⁸ m/s\n(c) 3.99 × 10⁸ m/s\n(d) 4 × 10⁸ m/s",
    options: [
      "2.25 × 10⁸ m/s",
      "1.33 × 10⁸ m/s",
      "3.99 × 10⁸ m/s",
      "4 × 10⁸ m/s"
    ],
    correctOption: 0,
    answer: "Option (a): 2.25 × 10⁸ m/s",
    steps: [
      "n = c/v (refractive index = speed in vacuum ÷ speed in medium)",
      "v = c/n = (3 × 10⁸)/1.33 ≈ 2.25 × 10⁸ m/s"
    ],
    explanation: "Refractive index = speed in vacuum / speed in medium. Higher n → slower light in medium.",
    formula: "v = \\frac{c}{n} = \\frac{3 \\times 10^8}{1.33} \\approx 2.25 \\times 10^8 \\text{ m/s}",
    examinerNote: "n = c/v. So v = c/n. Larger n means slower speed. Speed in water < speed in air.",
    source: "NCERT Section 10.3 / Board 2022"
  },
  {
    id: "sci_c9_q6",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "An object is placed between the focus and the pole of a concave mirror. The image formed is:\n(a) Real, inverted, magnified\n(b) Virtual, erect, magnified\n(c) Real, erect, diminished\n(d) Virtual, inverted, diminished",
    options: [
      "Real, inverted, magnified",
      "Virtual, erect, magnified",
      "Real, erect, diminished",
      "Virtual, inverted, diminished"
    ],
    correctOption: 1,
    answer: "Option (b): Virtual, erect, magnified",
    steps: [
      "When object is between F and pole of concave mirror:",
      "Image is formed BEHIND the mirror → Virtual.",
      "Image is Erect (same orientation as object).",
      "Image is Magnified (larger than object).",
      "This is how a makeup/shaving mirror is used."
    ],
    explanation: "Concave mirror as magnifying mirror: object between focus and pole → virtual, erect, enlarged image.",
    formula: "u < f \\text{ (concave)} \\to \\text{Virtual, erect, magnified image}",
    examinerNote: "Mirror image position table must be memorized. Object between F and pole = VIRTUAL, ERECT, MAGNIFIED.",
    source: "NCERT Section 10.2 / Board 2024"
  },

  // ==========================================
  // SECTION B: 2-MARK VSA
  // ==========================================
  {
    id: "sci_c9_q7",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 2,
    type: "VSA",
    question: "An object 4 cm high is placed at 20 cm in front of a concave mirror of focal length 10 cm. Find the position and size of the image.",
    answer: "Image at 20 cm in front of mirror (real, inverted, same size as object). Image height = -4 cm.",
    steps: [
      "Mirror formula: 1/v + 1/u = 1/f",
      "u = -20 cm (object in front), f = -10 cm (concave)",
      "1/v = 1/f - 1/u = 1/(-10) - 1/(-20) = -1/10 + 1/20 = -2/20 + 1/20 = -1/20",
      "v = -20 cm (negative → in front of mirror → real image)",
      "Magnification m = -v/u = -(-20)/(-20) = -1",
      "Image height = m × object height = -1 × 4 = -4 cm (inverted, same size)"
    ],
    explanation: "When object is at C (= 2f) of concave mirror, image forms at C: same size, real, inverted.",
    formula: "\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}, \\quad m = -\\frac{v}{u}",
    examinerNote: "Sign convention: ALL distances from pole. In front = negative. Behind = positive. Must use negative signs correctly.",
    source: "NCERT Exercise 10.1 / Board 2022"
  },
  {
    id: "sci_c9_q8",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 2,
    type: "VSA",
    question: "A ray of light traveling in air enters obliquely into water. Does the light ray bend toward or away from the normal? Why?",
    answer: "The light ray bends TOWARD the normal because it slows down when entering a denser medium.",
    steps: [
      "Air is rarer (n = 1), water is denser (n = 1.33).",
      "Light goes from rarer to denser medium → it slows down.",
      "By Snell's law: n₁ sin θ₁ = n₂ sin θ₂, since n₂ > n₁, sin θ₂ < sin θ₁, so θ₂ < θ₁.",
      "Smaller angle of refraction → ray bends TOWARD the normal."
    ],
    explanation: "Rarer to denser = slows down = bends toward normal. Dense to rarer = speeds up = bends away from normal.",
    formula: "n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 \\implies \\theta_2 < \\theta_1 \\text{ when } n_2 > n_1",
    examinerNote: "Towards normal when entering denser medium. Must state the REASON (slows down, Snell's law) for full marks.",
    source: "NCERT Section 10.3 / Board 2023"
  },

  // ==========================================
  // SECTION C: 3-MARK SA
  // ==========================================
  {
    id: "sci_c9_q9",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 3,
    type: "SA",
    question: "An object is placed at a distance of 30 cm from a convex lens of focal length 20 cm. Find the position, nature, and size of the image (object height = 2 cm).",
    answer: "Image at 60 cm on other side. Real, inverted, magnified (height = -4 cm, m = -2).",
    steps: [
      "Lens formula: 1/v - 1/u = 1/f",
      "u = -30 cm (left of lens), f = +20 cm (convex lens)",
      "1/v = 1/f + 1/u = 1/20 + 1/(-30) = 3/60 - 2/60 = 1/60",
      "v = +60 cm (positive → image forms on right side → real)",
      "Magnification m = v/u = 60/(-30) = -2",
      "Image height = m × object height = -2 × 2 = -4 cm",
      "Nature: Real (v positive), Inverted (m negative), Magnified (|m| > 1)"
    ],
    explanation: "Lens formula with sign convention: u negative (left), v positive (right for real image). Convex f positive.",
    formula: "\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}, \\quad m = \\frac{v}{u}",
    examinerNote: "Lens sign convention: f convex = +ve. Mirror: f concave = -ve. These differ! Double-check which to use.",
    source: "NCERT Exercise 10.2 / Board 2022, 2024"
  },
  {
    id: "sci_c9_q10",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 3,
    type: "SA",
    question: "State and explain Snell's Law of Refraction. Define refractive index.",
    answer: "Snell's Law: n₁ sin θ₁ = n₂ sin θ₂. Refractive index = ratio of speed of light in vacuum to speed in medium.",
    steps: [
      "Snell's Law: The ratio of the sine of the angle of incidence to the sine of the angle of refraction is constant for a given pair of media.",
      "Mathematical form: n₁ sin θ₁ = n₂ sin θ₂",
      "Or equivalently: sin θ₁ / sin θ₂ = n₂/n₁ = n₁₂ (relative refractive index)",
      "Refractive Index (n): n = c/v where c = speed of light in vacuum, v = speed in medium.",
      "n > 1 for all materials (since v < c always).",
      "Higher n → more optically dense → light bends more → slower speed."
    ],
    explanation: "Snell's law quantifies the bending of light at interface. Refractive index is optical density measure.",
    formula: "n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2, \\quad n = \\frac{c}{v}",
    examinerNote: "Both forms of Snell's law and the refractive index definition must be written for full marks.",
    source: "NCERT Section 10.3 / Board 2022"
  },

  // ==========================================
  // SECTION D: 5-MARK LA
  // ==========================================
  {
    id: "sci_c9_q11",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 5,
    type: "LA",
    question: "Draw a ray diagram to show the formation of image when an object is placed between the optical centre and the focus of a convex lens. State the characteristics of the image formed.",
    answer: "Virtual, erect, magnified image formed on the same side as the object (beyond the object).",
    steps: [
      "Setup: Object between O (optical center) and F (focus) of a convex lens.",
      "Ray diagram rules:",
      "1. Ray 1: Parallel to principal axis → passes through F₂ (far focus) after refraction.",
      "2. Ray 2: Passes through optical center O → continues without bending.",
      "After refraction, the two rays DIVERGE. Their backward extensions meet on the SAME side as the object.",
      "Image characteristics:",
      "- Position: Same side as object, beyond object",
      "- Nature: VIRTUAL (no real convergence — appears to come from image point)",
      "- Orientation: ERECT (upright, same direction as object)",
      "- Size: MAGNIFIED (larger than object)",
      "Application: Used as a MAGNIFYING GLASS/simple microscope."
    ],
    explanation: "Convex lens as magnifier: object inside focus → virtual, erect, magnified image. Same as concave mirror between F and pole.",
    formula: "u < f \\text{ (convex lens)} \\to \\text{Virtual, Erect, Magnified}",
    examinerNote: "Draw clear ray diagram showing both standard rays. Label object, O, F, and image position for full marks.",
    source: "NCERT Section 10.4 / Board 2021, 2023"
  },

  // ==========================================
  // CASE STUDY & ADDITIONAL PYQs
  // ==========================================
  {
    id: "sci_c9_q12",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 4,
    type: "Case Study",
    question: "Ramesh saw a pencil appearing bent when partially dipped in water in a glass. His teacher explained that this is due to refraction.\n\n(i) [1M] Define refraction of light.\n(ii) [1M] Why does the pencil appear bent?\n(iii) [2M] A light ray travels from glass (n=1.5) to air (n=1). If the angle of incidence is 30°, find the angle of refraction. (sin 30° = 0.5)",
    answer: "(i) Refraction = bending of light when passing from one medium to another. (ii) Due to change in speed at water-air boundary. (iii) θ_r = 48.6°",
    steps: [
      "(i) Refraction: the bending of light as it passes from one transparent medium to another due to change in its speed.",
      "(ii) Light from underwater part of pencil travels from water (denser) to air (rarer) → bends away from normal → appears to originate from different position → pencil looks bent.",
      "(iii) Snell's Law: n₁ sin θ₁ = n₂ sin θ₂",
      "1.5 × sin 30° = 1 × sin θ₂",
      "1.5 × 0.5 = sin θ₂",
      "sin θ₂ = 0.75",
      "θ₂ = sin⁻¹(0.75) ≈ 48.6°"
    ],
    explanation: "Pencil bending = refraction at water-air boundary. Snell's law gives the refracted angle.",
    formula: "n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 \\implies \\sin\\theta_2 = \\frac{n_1}{n_2}\\sin\\theta_1",
    examinerNote: "Express sin θ₂ as a fraction, then find angle using inverse sine. Show each step.",
    source: "CBSE Board 2025 Practice"
  },
  {
    id: "sci_c9_q13",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 2,
    type: "VSA",
    question: "What is the power of a lens? A convex lens has focal length 25 cm. Find its power.",
    answer: "Power = 1/f(m) = 1/0.25 = +4 D",
    steps: [
      "Power of a lens (P) = 1/f where f is in meters.",
      "f = 25 cm = 0.25 m",
      "P = 1/0.25 = +4 dioptre (D)",
      "Positive power for convex (converging) lens."
    ],
    explanation: "Power measures converging/diverging ability. Convex lens: positive power. Concave: negative power.",
    formula: "P = \\frac{1}{f(\\text{in metres})} = \\frac{1}{0.25} = +4 \\text{ D}",
    examinerNote: "ALWAYS convert focal length to METRES before calculating power. P is in dioptre (D).",
    source: "NCERT Section 10.4 / Board 2022"
  }
];
