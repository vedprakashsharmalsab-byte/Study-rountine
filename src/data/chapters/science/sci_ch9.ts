import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH9_QUESTIONS: VaultQuestion[] = [
  // ==========================================
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON (9 Questions)
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
    answer: "Option (b) is correct: Equal to the angle of reflection.",
    steps: [
      "First Law of Reflection: Angle of incidence (∠i) is always equal to the angle of reflection (∠r).",
      "Both angles are measured with respect to the normal drawn perpendicular to the reflecting surface at the point of incidence."
    ],
    explanation: "By the first law of reflection, $\\angle i = \\angle r$. The incident ray, the reflected ray, and the normal to the reflecting surface at the point of incidence all lie in the same plane.",
    formula: "\\angle i = \\angle r",
    examinerNote: "Both angles must be measured from the normal, not from the mirror surface.",
    source: "NCERT Class 10 Section 10.1"
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
    answer: "Option (c) is correct: 30 cm.",
    steps: [
      "Relation between radius of curvature (R) and focal length (f): R = 2f",
      "Given f = 15 cm: R = 2 × 15 = 30 cm"
    ],
    explanation: "For spherical mirrors of small apertures, the radius of curvature is twice the focal length: $R = 2f$.",
    formula: "R = 2f = 2 \\times 15 = 30\\text{ cm}",
    examinerNote: "Fundamental 1-mark relation tested frequently in CBSE board exams.",
    source: "NCERT Class 10 Section 10.2"
  },
  {
    id: "sci_c9_q3",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "When a ray of light travels from an optically denser medium to an optically rarer medium, it:\n(a) Bends toward the normal and speeds up\n(b) Bends away from the normal and speeds up\n(c) Travels along the normal without deviation\n(d) Bends away from the normal and slows down",
    options: [
      "Bends toward the normal and speeds up",
      "Bends away from the normal and speeds up",
      "Travels along the normal without deviation",
      "Bends away from the normal and slows down"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: Bends away from the normal and speeds up.",
    steps: [
      "In an optically rarer medium, the speed of light is higher than in an optically denser medium.",
      "By Snell's Law: $n_1 \\sin i = n_2 \\sin r$. When $n_1 > n_2$, $\\sin r > \\sin i$, so $r > i$ (ray bends away from normal)."
    ],
    explanation: "As light enters an optically rarer medium from a denser medium, its speed increases, causing the refracted ray to bend away from the normal.",
    formula: "n_1 \\sin i = n_2 \\sin r \\implies r > i \\text{ when } n_1 > n_2",
    examinerNote: "Denser to Rarer = Bends Away (speed increases); Rarer to Denser = Bends Towards (speed decreases).",
    source: "NCERT Class 10 Section 10.3"
  },
  {
    id: "sci_c9_q4",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Convex mirrors are commonly used as rear-view (wing) mirrors in automobiles.\nReason (R): A convex mirror always forms an erect, diminished virtual image and provides a wider field of view.\n(a) Both (A) and (R) are true and (R) is the correct explanation of (A).\n(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).\n(c) (A) is true but (R) is false.\n(d) (A) is false but (R) is true.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "(A) is false but (R) is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct.",
    steps: [
      "Assertion (A) is true: Convex mirrors are installed as rear-view mirrors.",
      "Reason (R) is true: Because convex mirrors curve outwards, they produce erect, diminished images that give drivers a much wider field of view than a plane mirror.",
      "Reason correctly explains Assertion."
    ],
    explanation: "Convex mirrors are curved outwards, which enables them to cover a significantly wider field of view and consistently form erect, diminished images of vehicles behind.",
    formula: "m_{\\text{convex}} < 1, \\quad m > 0 \\text{ (always virtual, erect, diminished)}",
    examinerNote: "Key phrase: 'wider field of view' and 'always erect and diminished' must be noted.",
    source: "CBSE Board 2023 / NCERT Activity 10.5"
  },
  {
    id: "sci_c9_q5",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "The absolute refractive index of water is 1.33 and the speed of light in vacuum is 3 × 10⁸ m/s. The speed of light in water is approximately:\n(a) 2.25 × 10⁸ m/s\n(b) 1.33 × 10⁸ m/s\n(c) 3.99 × 10⁸ m/s\n(d) 4.00 × 10⁸ m/s",
    options: [
      "2.25 × 10⁸ m/s",
      "1.33 × 10⁸ m/s",
      "3.99 × 10⁸ m/s",
      "4.00 × 10⁸ m/s"
    ],
    correctOption: 0,
    answer: "Option (a) is correct: 2.25 × 10⁸ m/s.",
    steps: [
      "Absolute refractive index: $n = \\frac{c}{v}$",
      "$v = \\frac{c}{n} = \\frac{3 \\times 10^8}{1.33} = \\frac{3 \\times 10^8}{4/3} = \\frac{9}{4} \\times 10^8 = 2.25 \\times 10^8\\text{ m/s}$"
    ],
    explanation: "Refractive index is the ratio of speed of light in vacuum to speed in the medium ($n = c/v$). Hence $v = c/n = 2.25 \\times 10^8\\text{ m/s}$.",
    formula: "v = \\frac{c}{n} = \\frac{3 \\times 10^8}{1.33} \\approx 2.25 \\times 10^8\\text{ m/s}",
    examinerNote: "Express 1.33 as 4/3 to compute exact fractional answers without rounding errors.",
    source: "NCERT Class 10 Section 10.3 / Board 2022"
  },
  {
    id: "sci_c9_q6",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "An object is placed between the focus (F) and the pole (P) of a concave mirror. The nature and position of the image formed are:\n(a) Real, inverted, magnified in front of mirror\n(b) Virtual, erect, magnified behind the mirror\n(c) Real, erect, diminished behind the mirror\n(d) Virtual, inverted, diminished in front of mirror",
    options: [
      "Real, inverted, magnified in front of mirror",
      "Virtual, erect, magnified behind the mirror",
      "Real, erect, diminished behind the mirror",
      "Virtual, inverted, diminished in front of mirror"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: Virtual, erect, magnified behind the mirror.",
    steps: [
      "When the object lies between the focus F and pole P of a concave mirror, the reflected rays diverge.",
      "Extrapolating the rays backwards behind the mirror forms a virtual, erect, and enlarged image.",
      "This is the optical principle utilized in shaving mirrors and dentists' mirrors."
    ],
    explanation: "This is the only position where a concave mirror produces a virtual, erect, and magnified image behind the reflecting surface.",
    formula: "u < f \\implies v > 0, \\quad m > +1",
    examinerNote: "Very frequent board question because all other 5 positions of a concave mirror produce real and inverted images.",
    source: "NCERT Class 10 Table 10.1 / Board 2024"
  },
  {
    id: "sci_c9_q7",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "The magnification produced by a plane mirror is always +1. What does this signify?\n(a) Image is real and of the same size as object\n(b) Image is virtual, erect, and of the same size as object\n(c) Image is virtual, inverted, and diminished\n(d) Image is real, inverted, and magnified",
    options: [
      "Image is real and of the same size as object",
      "Image is virtual, erect, and of the same size as object",
      "Image is virtual, inverted, and diminished",
      "Image is real, inverted, and magnified"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: Image is virtual, erect, and of the same size as object.",
    steps: [
      "The positive sign (+) of magnification denotes that the image is virtual and erect.",
      "The numerical magnitude (|m| = 1) denotes that the height of the image equals the height of the object ($h' = h$)."
    ],
    explanation: "Magnification $m = +1$: the positive sign means virtual and erect; the magnitude 1 means image size equals object size.",
    formula: "m = \\frac{h'}{h} = +1 \\implies h' = h \\text{ (erect and equal size)}",
    examinerNote: "Sign indicates nature (real/inverted vs virtual/erect); numerical value indicates relative size.",
    source: "NCERT Class 10 Exemplar"
  },
  {
    id: "sci_c9_q8",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "If the refractive index of medium A with respect to medium B is 2/3, then the refractive index of medium B with respect to medium A is:\n(a) 2/3\n(b) 3/2\n(c) 1/3\n(d) 1",
    options: ["2/3", "3/2", "1/3", "1"],
    correctOption: 1,
    answer: "Option (b) is correct: 3/2.",
    steps: [
      "Relative refractive index reciprocity relation: $n_{BA} = \\frac{1}{n_{AB}}$",
      "$n_{BA} = \\frac{1}{2/3} = \\frac{3}{2} = 1.5$"
    ],
    explanation: "The refractive index of medium B with respect to medium A is the reciprocal of the refractive index of medium A with respect to medium B: $n_{BA} = \\frac{1}{n_{AB}}$.",
    formula: "n_{BA} = \\frac{1}{n_{AB}} = \\frac{1}{2/3} = \\frac{3}{2}",
    examinerNote: "Direct application of the principle of reversibility of light.",
    source: "NCERT Class 10 Section 10.3"
  },
  {
    id: "sci_c9_q9",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): The power of a concave lens of focal length 20 cm is -5 D.\nReason (R): Power of a lens is defined as the reciprocal of its focal length in metres, and a concave lens has a negative focal length.\n(a) Both (A) and (R) are true and (R) is the correct explanation of (A).\n(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).\n(c) (A) is true but (R) is false.\n(d) (A) is false but (R) is true.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "(A) is false but (R) is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct.",
    steps: [
      "For a concave lens, focal length $f = -20\\text{ cm} = -0.2\\text{ m}$.",
      "Power $P = \\frac{1}{f(\\text{in metres})} = \\frac{1}{-0.2} = -5\\text{ D}$. Assertion is true.",
      "Reason correctly states the definition and sign rule for lens power.",
      "Reason is the direct explanation of Assertion."
    ],
    explanation: "Power $P = 1/f(\\text{m})$. For a concave lens, focal length is negative, hence $P = 1/(-0.2\\text{ m}) = -5\\text{ D}$.",
    formula: "P = \\frac{1}{f(\\text{m})} = \\frac{1}{-0.2\\text{ m}} = -5\\text{ D}",
    examinerNote: "Common mistake is substituting focal length in cm without converting to metres ($1/20 = 0.05$ which is wrong).",
    source: "CBSE Board 2024 Practice"
  },

  // ==========================================
  // SECTION B: 2-MARK VSA (5 Questions)
  // ==========================================
  {
    id: "sci_c9_q10",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 2,
    type: "VSA",
    question: "An object 4 cm in height is placed at a distance of 20 cm in front of a concave mirror of focal length 10 cm. Find the position and nature of the image formed.",
    answer: "Image is formed at 20 cm in front of the mirror (at the Centre of Curvature C). Nature: Real, inverted, and of the same size as the object (height = -4 cm).",
    steps: [
      "Step 1: Identify given quantities with New Cartesian Sign Convention:\nObject distance $u = -20\\text{ cm}$, Focal length $f = -10\\text{ cm}$, Object height $h = +4\\text{ cm}$.",
      "Step 2: Apply Mirror Formula: $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u}$.",
      "Step 3: $\\frac{1}{v} = \\frac{1}{-10} - \\frac{1}{-20} = -\\frac{1}{10} + \\frac{1}{20} = -\\frac{1}{20} \\implies v = -20\\text{ cm}$.",
      "Step 4: Magnification $m = -\\frac{v}{u} = -\\frac{-20}{-20} = -1$. Image height $h' = m \\times h = -1 \\times 4 = -4\\text{ cm}$."
    ],
    explanation: "Because $u = 2f = 20\\text{ cm}$, the object is situated precisely at the Centre of Curvature C. The image also forms at C ($v = -20\\text{ cm}$), real, inverted, and with magnification $m = -1$.",
    formula: "\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}, \\quad m = -\\frac{v}{u} = \\frac{h'}{h}",
    examinerNote: "Assigning negative signs to both u and f in the concave mirror formula is mandatory.",
    source: "NCERT Class 10 Exercise 10.1 / Board 2022"
  },
  {
    id: "sci_c9_q11",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 2,
    type: "VSA",
    question: "A ray of light traveling in air enters obliquely into water. Does the light ray bend toward the normal or away from the normal? Explain why with reference to the speed of light.",
    answer: "The light ray bends TOWARD the normal because water is optically denser than air, causing the speed of light to decrease upon entering water.",
    steps: [
      "1. Refractive index of air is $n_1 \\approx 1.00$ and refractive index of water is $n_2 = 1.33$.",
      "2. Speed of light in air is $c \\approx 3 \\times 10^8\\text{ m/s}$ whereas in water it decreases to $v = c/n_2 \\approx 2.25 \\times 10^8\\text{ m/s}$.",
      "3. By Snell's Law: $n_1 \\sin i = n_2 \\sin r$. Since $n_2 > n_1$, $\\sin r < \\sin i$, which implies angle of refraction $r < i$.",
      "4. Hence, the ray deviates towards the normal."
    ],
    explanation: "When traveling from an optically rarer medium (air) to an optically denser medium (water), light slows down, causing the wavefront to pivot toward the normal.",
    formula: "n_1 \\sin i = n_2 \\sin r \\implies r < i \\text{ when } n_2 > n_1",
    examinerNote: "Must mention both the change in speed and the optical density comparison for full 2 marks.",
    source: "NCERT Class 10 In-text Question / Board 2023"
  },
  {
    id: "sci_c9_q12",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 2,
    type: "VSA",
    question: "Define 1 Dioptre of power of a lens. Two thin lenses of focal lengths +20 cm and -50 cm are placed in optical contact. Calculate the net power of the combination.",
    answer: "1 Dioptre is the power of a lens whose focal length is 1 metre (1 m). The net power of the combination is +3.0 D.",
    steps: [
      "Definition: 1 Dioptre (1 D) is the power of a lens of focal length 1 metre ($1\\text{ D} = 1\\text{ m}^{-1}$).",
      "Focal lengths in metres: $f_1 = +20\\text{ cm} = +0.2\\text{ m}$, $f_2 = -50\\text{ cm} = -0.5\\text{ m}$.",
      "Individual powers: $P_1 = \\frac{1}{0.2} = +5\\text{ D}$, $P_2 = \\frac{1}{-0.5} = -2\\text{ D}$.",
      "Net Power: $P = P_1 + P_2 = +5\\text{ D} + (-2\\text{ D}) = +3.0\\text{ D}$."
    ],
    explanation: "Power is additive for lenses placed in contact: $P = P_1 + P_2$. The resulting combination behaves as a converging lens of power $+3.0\\text{ D}$.",
    formula: "P = P_1 + P_2 = \\frac{1}{f_1(\\text{m})} + \\frac{1}{f_2(\\text{m})}",
    examinerNote: "Always convert focal lengths to metres before calculating individual or combined powers.",
    source: "CBSE Board 2023 / NCERT Section 10.4"
  },
  {
    id: "sci_c9_q13",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 2,
    type: "VSA",
    question: "Why does a concave lens always produce a virtual, erect, and diminished image for all positions of an object in front of it? Justify using optical ray rules.",
    answer: "A concave lens is a diverging lens. Rays emerging from any object diverge outwards after refraction and never actually intersect. Their backward extensions always meet on the same side as the object between the optical centre (O) and principal focus (F₁), producing a virtual, erect, and diminished image.",
    steps: [
      "1. A ray parallel to principal axis diverges as if emerging from principal focus $F_1$.",
      "2. A ray passing through optical centre $O$ emerges straight without any deviation.",
      "3. Because these two refracted rays diverge away from each other on the right, they can only intersect when extended backwards on the left.",
      "4. The intersection point always lies between $O$ and $F_1$, resulting in $v < u$ and $|m| < 1$ (always virtual, erect, diminished)."
    ],
    explanation: "The diverging nature of the concave lens ensures the virtual image is formed between the optical centre and focus for all finite object distances.",
    formula: "m = \\frac{v}{u} < +1, \\quad m > 0 \\text{ (virtual and diminished)}",
    examinerNote: "Mentioning the two standard rays (parallel ray diverging from focus, central ray unbent) secures full marks.",
    source: "NCERT Class 10 Section 10.4"
  },
  {
    id: "sci_c9_q14",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 2,
    type: "VSA",
    question: "What is meant by 'lateral displacement' in refraction through a rectangular glass slab? State two factors on which it depends.",
    answer: "Lateral displacement is the perpendicular distance between the original incident ray path and the emergent ray after passing through a rectangular refracting slab. Factors: (1) Thickness of the glass slab, (2) Angle of incidence (and refractive index of the slab).",
    steps: [
      "Definition: When light passes through a rectangular glass slab, it undergoes refraction twice (air-to-glass and glass-to-air). The emergent ray is parallel to the incident ray, but shifted sideways by a perpendicular distance called lateral displacement.",
      "Factors affecting lateral displacement:\n(i) Thickness of the slab (directly proportional — thicker slab gives greater shift).\n(ii) Angle of incidence (larger angle of incidence produces greater shift).\n(iii) Refractive index of glass (higher optical density produces greater shift)."
    ],
    explanation: "Because the opposing faces of the glass slab are parallel, angle of incidence equals angle of emergence ($i = e$), meaning the emergent ray direction is unchanged, only laterally displaced.",
    formula: "d = \\frac{t \\sin(i - r)}{\\cos r}",
    examinerNote: "Highlight that incident and emergent rays are parallel ($i = e$), but shifted sideways.",
    source: "NCERT Class 10 Activity 10.10 / Board 2020"
  },

  // ==========================================
  // SECTION C: 3-MARK SA (6 Questions)
  // ==========================================
  {
    id: "sci_c9_q15",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 3,
    type: "SA",
    question: "An object 5 cm high is placed at a distance of 25 cm from a convex lens of focal length 10 cm. Find the position, size, and nature of the image formed.",
    answer: "Image distance $v = +16.67\\text{ cm}$ (formed behind the lens between F₂ and 2F₂). Nature: Real and inverted. Size: Height $h' = -3.33\\text{ cm}$ (diminished).",
    steps: [
      "Step 1: Sign convention: $u = -25\\text{ cm}$, $f = +10\\text{ cm}$ (convex lens), $h = +5\\text{ cm}$.",
      "Step 2: Lens Formula: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u}$.",
      "Step 3: $\\frac{1}{v} = \\frac{1}{10} + \\frac{1}{-25} = \\frac{5 - 2}{50} = \\frac{3}{50} \\implies v = \\frac{50}{3} \\approx +16.67\\text{ cm}$.",
      "Step 4: Magnification: $m = \\frac{v}{u} = \\frac{50/3}{-25} = -\\frac{2}{3} \\approx -0.67$.",
      "Step 5: Image height: $h' = m \\times h = -\\frac{2}{3} \\times 5 = -\\frac{10}{3} \\approx -3.33\\text{ cm}$.",
      "Conclusion: Since $v > 0$, the image is real; since $m < 0$, it is inverted; since $|m| < 1$, it is diminished."
    ],
    explanation: "Because the object is located beyond $2F_1$ ($25\\text{ cm} > 20\\text{ cm}$), the real inverted diminished image is formed between $F_2$ and $2F_2$ on the opposite side of the lens.",
    formula: "\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}, \\quad m = \\frac{v}{u} = \\frac{h'}{h}",
    examinerNote: "In lens formula, the term is $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$. Do not confuse with mirror formula.",
    source: "NCERT Class 10 Exercise 10.2 / Board 2022"
  },
  {
    id: "sci_c9_q16",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 3,
    type: "SA",
    question: "A concave lens has a focal length of 15 cm. At what distance should the object from the lens be placed so that it forms an image at 10 cm from the lens? Also find the magnification produced by the lens.",
    answer: "The object should be placed at a distance of 30 cm in front of the lens ($u = -30\\text{ cm}$). The magnification produced is +0.33 (+1/3), indicating a virtual, erect, and diminished image.",
    steps: [
      "Step 1: Sign convention for concave lens: Focal length $f = -15\\text{ cm}$, Image distance $v = -10\\text{ cm}$ (formed on the same side as object).",
      "Step 2: Lens Formula: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{u} = \\frac{1}{v} - \\frac{1}{f}$.",
      "Step 3: $\\frac{1}{u} = \\frac{1}{-10} - \\frac{1}{-15} = -\\frac{1}{10} + \\frac{1}{15} = \\frac{-3 + 2}{30} = -\\frac{1}{30} \\implies u = -30\\text{ cm}$.",
      "Step 4: Magnification: $m = \\frac{v}{u} = \\frac{-10}{-30} = +\\frac{1}{3} \\approx +0.33$.",
      "Conclusion: Object must be placed at 30 cm from the lens. The positive sign of m indicates a virtual and erect image."
    ],
    explanation: "For a concave lens, both image distance $v$ and focal length $f$ are negative. The object distance comes out to be $-30\\text{ cm}$.",
    formula: "\\frac{1}{u} = \\frac{1}{v} - \\frac{1}{f}, \\quad m = \\frac{v}{u}",
    examinerNote: "Notice that for lenses, $m = +v/u$, whereas for mirrors, $m = -v/u$.",
    source: "NCERT Class 10 In-text Example 10.3 / Board 2023"
  },
  {
    id: "sci_c9_q17",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 3,
    type: "SA",
    question: "A convex mirror used for rear-view on an automobile has a radius of curvature of 3.00 m. If a bus is located at 5.00 m from this mirror, find the position, nature, and size of the image relative to the bus.",
    answer: "Image position $v = +1.15\\text{ m}$ (formed behind the mirror). Nature: Virtual and erect. Size: Diminished with magnification $m = +0.23$ (image size is 23% of the bus size).",
    steps: [
      "Step 1: Given values: Radius of curvature $R = +3.00\\text{ m} \\implies f = R/2 = +1.50\\text{ m}$ (convex mirror).",
      "Step 2: Object distance $u = -5.00\\text{ m}$.",
      "Step 3: Mirror Formula: $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u}$.",
      "Step 4: $\\frac{1}{v} = \\frac{1}{1.50} - \\frac{1}{-5.00} = \\frac{1}{1.50} + \\frac{1}{5.00} = \\frac{5.00 + 1.50}{7.50} = \\frac{6.50}{7.50} = \\frac{13}{15}$.",
      "$v = \\frac{15}{13} \\approx +1.15\\text{ m}$.",
      "Step 5: Magnification: $m = -\\frac{v}{u} = -\\frac{+1.15}{-5.00} = +\\frac{1.15}{5.00} \\approx +0.23$.",
      "Conclusion: The image is formed 1.15 m behind the mirror; it is virtual, erect, and diminished."
    ],
    explanation: "A convex mirror always creates a virtual, erect, diminished image behind the mirror between the pole and focus, allowing the driver to see a wide panorama.",
    formula: "\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}, \\quad m = -\\frac{v}{u}",
    examinerNote: "NCERT textbook standard solved example; extremely high board appearance probability.",
    source: "NCERT Class 10 Example 10.1 / Board 2024"
  },
  {
    id: "sci_c9_q18",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 3,
    type: "SA",
    question: "The absolute refractive indices of water and glass are 4/3 and 3/2 respectively. If the speed of light in glass is 2 × 10⁸ m/s, calculate:\n(a) The speed of light in vacuum.\n(b) The speed of light in water.\n(c) The refractive index of glass with respect to water.",
    answer: "(a) Speed of light in vacuum $c = 3.0 \\times 10^8\\text{ m/s}$.\n(b) Speed of light in water $v_w = 2.25 \\times 10^8\\text{ m/s}$.\n(c) Refractive index of glass with respect to water $n_{gw} = 9/8 = 1.125$.",
    steps: [
      "Part (a): $n_g = \\frac{c}{v_g} \\implies c = n_g \\times v_g = \\frac{3}{2} \\times (2 \\times 10^8) = 3.0 \\times 10^8\\text{ m/s}$.",
      "Part (b): $n_w = \\frac{c}{v_w} \\implies v_w = \\frac{c}{n_w} = \\frac{3.0 \\times 10^8}{4/3} = \\frac{9}{4} \\times 10^8 = 2.25 \\times 10^8\\text{ m/s}$.",
      "Part (c): Refractive index of glass w.r.t water: $n_{gw} = \\frac{n_g}{n_w} = \\frac{3/2}{4/3} = \\frac{3}{2} \\times \\frac{3}{4} = \\frac{9}{8} = 1.125$."
    ],
    explanation: "Relative refractive index of medium 2 with respect to medium 1 is the ratio of their absolute refractive indices: $n_{21} = n_2 / n_1 = v_1 / v_2$.",
    formula: "c = n_g v_g, \\quad v_w = \\frac{c}{n_w}, \\quad n_{gw} = \\frac{n_g}{n_w} = \\frac{9}{8}",
    examinerNote: "All three subparts are worth 1 mark each. Clearly show fractions and final units.",
    source: "CBSE Board 2020 / NCERT Section 10.3"
  },
  {
    id: "sci_c9_q19",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 3,
    type: "SA",
    question: "Describe the image formation by a concave mirror with ray diagram explanations for two cases:\n(a) When the object is placed at the Centre of Curvature (C).\n(b) When the object is placed between the Centre of Curvature (C) and Focus (F).\nState one practical application for each case.",
    answer: "(a) At C: Image forms at C, real, inverted, same size as object ($m = -1$). Application: Used in terrestrial inverters and photocopiers.\n(b) Between C and F: Image forms beyond C, real, inverted, magnified ($|m| > 1$). Application: Used in film projectors and searchlight projection systems.",
    steps: [
      "Case (a) Object at C:\n- Ray 1 parallel to axis reflects through focus F.\n- Ray 2 through focus reflects parallel to axis.\n- Reflected rays meet at C. Image is formed at C; real, inverted, same size ($m = -1$).",
      "Case (b) Object between C and F:\n- Ray 1 parallel to axis reflects through focus F.\n- Ray 2 passing through centre of curvature reflects back along the same path.\n- Reflected rays intersect beyond C. Image is formed beyond C; real, inverted, magnified ($|m| > 1$).",
      "Practical applications clearly specified for each position."
    ],
    explanation: "For concave mirrors, as the object moves from infinity towards the focus, the real inverted image moves from focus towards infinity and increases in size.",
    formula: "\\text{At } C: v = -2f, m = -1; \\quad \\text{Between } C \\text{ and } F: v > 2f, |m| > 1",
    examinerNote: "Ray diagram descriptions must mention two distinct standard rays and specify image position, nature, and size.",
    source: "NCERT Class 10 Section 10.2 / Board 2021"
  },
  {
    id: "sci_c9_q20",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 3,
    type: "SA",
    question: "Differentiate between a Real Image and a Virtual Image on three distinct optical parameters. Explain why a dentist uses a concave mirror rather than a plane mirror or convex mirror.",
    answer: "Comparison:\n1. Formation: Real image is formed by actual intersection of reflected/refracted rays; Virtual image is formed when rays only appear to diverge from a point.\n2. Screen: Real image can be captured on a screen; Virtual image cannot be captured on a screen.\n3. Orientation & Magnification: Real image is always inverted ($m < 0$); Virtual image is always erect ($m > 0$).\nDentist's mirror: When the dentist holds a concave mirror close to a patient's tooth (within its focal length, between F and P), it forms an erect and highly magnified virtual image of the tooth, enabling clear inspection of cavities. A plane mirror gives no magnification ($m=1$) and a convex mirror diminishes the image ($m<1$).",
    steps: [
      "Step 1: Tabulate 3 technical differences (formation mechanism, screen projection, orientation/sign of m).",
      "Step 2: Explain dentist's application: tooth placed between pole P and focus F of concave mirror.",
      "Step 3: Justify why plane ($m=1$) and convex ($m<1$) cannot serve the same purpose."
    ],
    explanation: "The concave mirror is unique among spherical mirrors because it can form a magnified erect image when the object is closer than the focal length.",
    formula: "u < f \\implies m > +1 \\text{ (erect, magnified)}",
    examinerNote: "Highlight that object must be placed closer than the focal length ($u < f$) for the dentist's mirror to work.",
    source: "CBSE Board 2023 / NCERT Activity 10.2"
  },

  // ==========================================
  // SECTION D: 5-MARK LA (2 Questions)
  // ==========================================
  {
    id: "sci_c9_q21",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 5,
    type: "LA",
    question: "(a) State the New Cartesian Sign Convention rules for spherical mirrors.\n(b) An object 4 cm in height is placed perpendicular to the principal axis of a concave mirror of focal length 12 cm at a distance of 18 cm from the pole. Calculate the distance of the screen from the mirror to obtain a sharp image, and find the height and nature of the image formed.\n(c) If the mirror is replaced by a convex mirror of the same focal length (12 cm), determine the new position of the image.",
    answer: "(a) Sign convention: All distances measured from pole P; incident light direction is positive (+); opposite direction is negative (-); heights above axis are positive (+); heights below axis are negative (-).\n(b) Screen distance $v = -36\\text{ cm}$ (in front of concave mirror); image height $h' = -8\\text{ cm}$ (real, inverted, magnified by 2×).\n(c) For convex mirror: $v = +7.2\\text{ cm}$ (formed behind the mirror; virtual, erect, diminished).",
    steps: [
      "Part (a): Formal statement of 4 Cartesian sign convention rules:\n1. The object is always placed to the left of the mirror.\n2. All distances parallel to the principal axis are measured from the pole.\n3. Distances measured in the direction of incident light (+x axis) are taken as positive.\n4. Distances measured against incident light (-x axis) are taken as negative.\n5. Distances measured perpendicular to and above principal axis (+y axis) are positive, below (-y axis) are negative.",
      "Part (b) Concave Mirror Calculation:\nGiven: $h = +4\\text{ cm}$, $u = -18\\text{ cm}$, $f = -12\\text{ cm}$.\nMirror Formula: $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{-12} - \\frac{1}{-18} = -\\frac{1}{12} + \\frac{1}{18} = \\frac{-3 + 2}{36} = -\\frac{1}{36}$.\n$\\implies v = -36\\text{ cm}$. Screen must be placed 36 cm in front of the mirror.\nMagnification: $m = -\\frac{v}{u} = -\\frac{-36}{-18} = -2$.\nImage height: $h' = m \\times h = -2 \\times 4 = -8\\text{ cm}$.\nNature: Real, inverted, and magnified.",
      "Part (c) Convex Mirror Calculation:\nFor convex mirror: $f = +12\\text{ cm}$, $u = -18\\text{ cm}$.\n$\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = \\frac{1}{+12} - \\frac{1}{-18} = \\frac{1}{12} + \\frac{1}{18} = \\frac{3 + 2}{36} = \\frac{5}{36}$.\n$\\implies v = \\frac{36}{5} = +7.2\\text{ cm}$.\nImage is formed 7.2 cm behind the convex mirror (virtual, erect, diminished)."
    ],
    explanation: "Concave mirrors form real, inverted images when $u > f$. Convex mirrors always form virtual, erect images behind the mirror with $v < f$.",
    formula: "\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}, \\quad m = -\\frac{v}{u} = \\frac{h'}{h}",
    examinerNote: "Structured 5-mark question broken into 2M (conventions), 2M (concave numerical), and 1M (convex comparison).",
    source: "CBSE Board 2024 / 2023 Sample Paper"
  },
  {
    id: "sci_c9_q22",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 5,
    type: "LA",
    question: "(a) Define the optical centre and principal focus of a convex lens.\n(b) An illuminated slide of size 2 cm × 2 cm is projected onto a screen placed 5 m from a projection lens to form an image of size 80 cm × 80 cm. Calculate the focal length of the lens and the distance of the slide from the lens.\n(c) Draw a neat labeled ray diagram showing the path of a ray of light through a rectangular glass slab. Show that the emergent ray is parallel to the incident ray.",
    answer: "(a) Optical Centre: The central point of a lens through which a ray of light passes without any angular deviation. Principal Focus: The point on the principal axis where rays incident parallel to the principal axis converge after refraction.\n(b) Distance of slide $u = -12.5\\text{ cm} = -0.125\\text{ m}$; Focal length $f = +12.19\\text{ cm} \\approx +0.122\\text{ m}$.\n(c) At first face: $n_1 \\sin i = n_2 \\sin r_1$. At second face: $n_2 \\sin r_1 = n_1 \\sin e$. Hence $\\sin i = \\sin e \\implies i = e$. Incident and emergent rays are parallel.",
    steps: [
      "Part (a): Formal definitions of Optical Centre (O) and Principal Focus (F).",
      "Part (b) Projection Lens Numerical:\nGiven: Object height $h = 2\\text{ cm} = 0.02\\text{ m}$, Image height $h' = -80\\text{ cm} = -0.80\\text{ m}$ (real image on screen is inverted).\nLinear magnification $m = \\frac{h'}{h} = \\frac{-80}{2} = -40$.\nFor a lens: $m = \\frac{v}{u} \\implies -40 = \\frac{v}{u} \\implies v = -40u$.\nDistance of screen $v = +5\\text{ m} = +500\\text{ cm}$.\nTherefore: $500 = -40u \\implies u = -\\frac{500}{40} = -12.5\\text{ cm} = -0.125\\text{ m}$.\nLens Formula: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{f} = \\frac{1}{500} - \\frac{1}{-12.5} = \\frac{1}{500} + \\frac{40}{500} = \\frac{41}{500}$.\n$f = \\frac{500}{41} \\approx +12.195\\text{ cm} \\approx +0.122\\text{ m}$.",
      "Part (c) Glass Slab Refraction:\nRefraction at air-glass interface AB: $\\frac{\\sin i}{\\sin r_1} = \\frac{n_g}{n_a}$.\nAlternate interior angles: angle of incidence at glass-air interface CD is $r_2 = r_1$.\nRefraction at interface CD: $\\frac{\\sin r_1}{\\sin e} = \\frac{n_a}{n_g}$.\nMultiplying both equations: $\\frac{\\sin i}{\\sin r_1} \\times \\frac{\\sin r_1}{\\sin e} = \\frac{n_g}{n_a} \\times \\frac{n_a}{n_g} = 1$.\n$\\implies \\frac{\\sin i}{\\sin e} = 1 \\implies \\sin i = \\sin e \\implies i = e$.\nSince angle of incidence equals angle of emergence, the emergent ray is strictly parallel to the incident ray."
    ],
    explanation: "Because the opposing faces of the rectangular glass slab are parallel, the bending towards the normal at entry is exactly reversed by bending away from the normal at exit, resulting in $i = e$.",
    formula: "m = \\frac{h'}{h} = \\frac{v}{u}, \\quad \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}, \\quad i = e",
    examinerNote: "In part (b), an image projected on a screen is always REAL, so its height is negative ($h' = -80\\text{ cm}$). Missing the minus sign loses marks.",
    source: "CBSE Board 2023 / 2020 Standard Question"
  },

  // ==========================================
  // SECTION E: 4-MARK CASE STUDY (2 Questions)
  // ==========================================
  {
    id: "sci_c9_q23",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 4,
    type: "Case Study",
    question: "Case Study: Spherical mirrors find wide applications in daily life and industrial technology. Concave mirrors are used in car headlights and searchlights because when a light bulb is placed at the principal focus, the reflected rays emerge as a powerful parallel beam. Solar furnaces employ large concave mirrors to concentrate solar rays at the focus, producing temperatures up to 3000°C. Dentists also utilize concave mirrors to examine small cavities in teeth.\n\n(a) [1M] Where should an object be placed in front of a concave mirror to obtain an erect and enlarged image?\n(b) [1M] Why are concave mirrors used in solar cookers and solar furnaces instead of plane mirrors?\n(c) [2M] A dentist holds a small concave mirror of focal length 3 cm at a distance of 2 cm from a patient's tooth. Using the mirror formula, calculate the image distance and magnification. State the nature of the image formed.",
    answer: "(a) The object must be placed between the Pole (P) and Principal Focus (F) of the concave mirror ($u < f$).\n(b) Concave mirrors are converging mirrors; they concentrate all incoming parallel solar rays at a single focal point, generating immense thermal energy, whereas plane mirrors merely reflect without converging.\n(c) Image distance $v = +6\\text{ cm}$ (formed behind the mirror); magnification $m = +3$. Nature: Virtual, erect, and magnified 3 times.",
    steps: [
      "Part (a): Object must be between focus F and pole P ($u < f$).",
      "Part (b): Concave mirror converges parallel sunlight rays to its focus, concentrating thermal radiation.",
      "Part (c) Calculation:\nGiven: $f = -3\\text{ cm}$, $u = -2\\text{ cm}$.\nMirror Formula: $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u}$.\n$\\frac{1}{v} = \\frac{1}{-3} - \\frac{1}{-2} = -\\frac{1}{3} + \\frac{1}{2} = \\frac{-2 + 3}{6} = +\\frac{1}{6}$.\n$\\implies v = +6\\text{ cm}$ (formed 6 cm behind the mirror).\nMagnification: $m = -\\frac{v}{u} = -\\frac{+6}{-2} = +3$.\nNature: Virtual, erect, and magnified (3 times larger)."
    ],
    explanation: "When $u < f$, the concave mirror forms a virtual, erect, and magnified image behind the mirror, allowing the dentist to clearly view tooth cavities.",
    formula: "\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}, \\quad m = -\\frac{v}{u}",
    examinerNote: "Part (c) calculation must show $v = +6\\text{ cm}$ and $m = +3$ for the 2 marks.",
    source: "CBSE Board 2024 Practice / Educart Science"
  },
  {
    id: "sci_c9_q24",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 4,
    type: "Case Study",
    question: "Case Study: In optical laboratories and optometrists' clinics, combinations of lenses are frequently employed to design cameras, microscopes, and corrective eyeglasses. The net power of two thin lenses placed in contact is the algebraic sum of their individual powers ($P = P_1 + P_2$). An optician prepares a lens system by placing a convex lens of focal length 20 cm in close contact with a concave lens of focal length 50 cm.\n\n(a) [1M] Calculate the individual powers $P_1$ and $P_2$ of the two lenses.\n(b) [1M] What is the net power and net focal length of the combined lens system? Does the combination behave as a converging or diverging system?\n(c) [2M] An object of height 3 cm is placed 30 cm in front of a convex lens of focal length 20 cm. Using the lens formula, calculate the image distance and the height of the image formed.",
    answer: "(a) $P_1 = +5.0\\text{ D}$ (convex lens), $P_2 = -2.0\\text{ D}$ (concave lens).\n(b) Net power $P = +3.0\\text{ D}$; Net focal length $F = +33.33\\text{ cm}$ (+1/3 m). The combination behaves as a converging lens system.\n(c) Image distance $v = +60\\text{ cm}$ (formed on the other side); image height $h' = -6\\text{ cm}$ (real, inverted, magnified 2×).",
    steps: [
      "Part (a): Convert focal lengths to metres:\n$f_1 = +20\\text{ cm} = +0.2\\text{ m} \\implies P_1 = \\frac{1}{+0.2} = +5.0\\text{ D}$.\n$f_2 = -50\\text{ cm} = -0.5\\text{ m} \\implies P_2 = \\frac{1}{-0.5} = -2.0\\text{ D}$.",
      "Part (b): Net power $P = P_1 + P_2 = +5.0 + (-2.0) = +3.0\\text{ D}$.\nNet focal length $F = \\frac{1}{P} = \\frac{1}{3}\\text{ m} \\approx +0.333\\text{ m} = +33.33\\text{ cm}$.\nSince $P > 0$ and $F > 0$, the combination behaves as a CONVERGING lens.",
      "Part (c) Lens Formula Calculation:\nGiven: $u = -30\\text{ cm}$, $f = +20\\text{ cm}$, $h = +3\\text{ cm}$.\n$\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u}$.\n$\\frac{1}{v} = \\frac{1}{20} + \\frac{1}{-30} = \\frac{3 - 2}{60} = \\frac{1}{60} \\implies v = +60\\text{ cm}$.\nMagnification $m = \\frac{v}{u} = \\frac{60}{-30} = -2$.\nImage height $h' = m \\times h = -2 \\times 3 = -6\\text{ cm}$.\nNature: Real, inverted, and magnified."
    ],
    explanation: "Combined lens power equals algebraic sum of individual powers. Real image is formed 60 cm behind the lens with height -6 cm.",
    formula: "P = P_1 + P_2, \\quad \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}, \\quad m = \\frac{v}{u} = \\frac{h'}{h}",
    examinerNote: "Converting focal length to metres before calculating dioptre power is essential.",
    source: "CBSE Board 2023 / 2024 Case Study Sample"
  }
];
