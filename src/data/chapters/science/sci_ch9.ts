import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH9_QUESTIONS: VaultQuestion[] = [
  // ==========================================
  // SECTION A: 1-MARK MCQs & ASSERTION-REASON (12 Questions)
  // ==========================================
  {
    id: "sci_c9_q1",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "According to the laws of reflection, the angle of incidence is:",
    options: [
      "Greater than the angle of reflection",
      "Equal to the angle of reflection",
      "Less than the angle of reflection",
      "Complementary to the angle of reflection"
    ],
    correctOption: 1,
    answer: "Option (b): Equal to the angle of reflection.",
    steps: [
      "1. First Law of Reflection: Angle of incidence (∠i) is always strictly equal to the angle of reflection (∠r).",
      "2. Both angles are measured with respect to the normal drawn perpendicular to the reflecting surface at the point of incidence.",
      "3. This law applies universally to all reflecting surfaces, including plane and spherical curved mirrors."
    ],
    explanation: "Reason: By the First Law of Reflection, the angle of incidence ($\\angle i$) is strictly equal to the angle of reflection ($\\angle r$) for all reflecting surfaces (plane, concave, or convex). Both angles are measured with respect to the normal drawn perpendicular to the reflecting surface at the point of incidence: $\\angle i = \\angle r$.\n\n• Why other options are wrong:\n- Option (a): Contradicts the first law of reflection; $\\angle i$ cannot exceed $\\angle r$.\n- Option (c): Incorrect because optical reflection is perfectly symmetrical about the normal.\n- Option (d): Angle of incidence is equal to the angle of reflection ($\\angle i = \\angle r$), not complementary ($\\angle i + \\angle r \\ne 90^\\circ$ in general).",
    formula: "\\angle i = \\angle r",
    examinerNote: "Both angles must be measured from the normal, not from the mirror surface.",
    source: "NCERT Class 10 Section 9.1 / CBSE Board 2023"
  },
  {
    id: "sci_c9_q2",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "A concave mirror has a focal length of 15 cm. The radius of curvature of the mirror is:",
    options: ["15 cm", "7.5 cm", "30 cm", "45 cm"],
    correctOption: 2,
    answer: "Option (c): 30 cm.",
    steps: [
      "1. Relation between radius of curvature (R) and focal length (f) for small apertures: R = 2f.",
      "2. Given focal length f = 15 cm.",
      "3. Calculation: R = 2 × 15 cm = 30 cm."
    ],
    explanation: "Reason: For spherical mirrors of small aperture, the radius of curvature ($R$) is twice the focal length ($f$): $R = 2f$. Given $f = 15\\text{ cm}$, $R = 2 \\times 15 = 30\\text{ cm}$.\n\n• Why other options are wrong:\n- Option (a) 15 cm: Incorrect; 15 cm is the focal length $f$, not the radius of curvature $R$.\n- Option (b) 7.5 cm: Incorrect; 7.5 cm would be $f/2$, dividing by 2 instead of multiplying by 2.\n- Option (d) 45 cm: Incorrect; 45 cm is $3f$, which has no physical meaning in spherical mirror geometry.",
    formula: "R = 2f = 2 \\times 15 = 30\\text{ cm}",
    examinerNote: "Fundamental 1-mark relation tested frequently in CBSE board exams.",
    source: "NCERT Class 10 Section 9.2"
  },
  {
    id: "sci_c9_q3",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "When a ray of light travels obliquely from an optically denser medium to an optically rarer medium, it:",
    options: [
      "Bends toward the normal and speeds up",
      "Bends away from the normal and speeds up",
      "Travels along the normal without deviation",
      "Bends away from the normal and slows down"
    ],
    correctOption: 1,
    answer: "Option (b): Bends away from the normal and speeds up.",
    steps: [
      "1. In an optically rarer medium, light travels at a higher speed than in an optically denser medium ($v_2 > v_1$).",
      "2. By Snell's Law: $n_1 \\sin i = n_2 \\sin r$. When $n_1 > n_2$, $\\sin r > \\sin i$, which means $r > i$.",
      "3. Because $r > i$, the refracted ray bends away from the normal."
    ],
    explanation: "Reason: In an optically rarer medium, light encounters lower optical resistance, and its propagation speed increases ($v_2 > v_1$). By Snell's Law, $n_1 \\sin i = n_2 \\sin r$. Because $n_1 > n_2$, it follows that $\\sin r > \\sin i$, which means $r > i$. Consequently, the refracted ray bends away from the normal as it speeds up.\n\n• Why other options are wrong:\n- Option (a): Contradicts Snell's law; light only bends toward the normal when entering an optically denser medium where it slows down.\n- Option (c): Rays only travel without deviation if incident normally ($\\angle i = 0^\\circ$).\n- Option (d): Self-contradictory; light speeds up when entering an optically rarer medium, it does not slow down.",
    formula: "n_1 \\sin i = n_2 \\sin r \\implies r > i \\text{ when } n_1 > n_2 \\quad (v_2 > v_1)",
    examinerNote: "Denser to Rarer = Bends Away (speed increases); Rarer to Denser = Bends Towards (speed decreases).",
    source: "NCERT Class 10 Section 9.3"
  },
  {
    id: "sci_c9_q4",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Convex mirrors are commonly used as rear-view (wing) mirrors in automobiles.\nReason (R): A convex mirror always forms an erect, diminished virtual image and provides a wider field of view.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "(A) is false but (R) is true."
    ],
    correctOption: 0,
    answer: "Option (a): Both (A) and (R) are true and (R) is the correct explanation of (A).",
    steps: [
      "1. Assertion (A) is true: Convex mirrors are installed as rear-view mirrors in vehicles.",
      "2. Reason (R) is true: Because convex mirrors curve outwards, they provide a much wider field of view than flat mirrors, and always produce an erect, diminished virtual image of traffic behind.",
      "3. Reason correctly explains the practical reason why automobile engineers choose convex mirrors."
    ],
    explanation: "Reason: Assertion (A) is TRUE because convex mirrors are universally fitted as driver side-view and rear-view mirrors. Reason (R) is TRUE because convex mirrors curve outwards, granting them an expansive field of view compared to flat plane mirrors. Furthermore, they invariably produce an erect, diminished virtual image regardless of where the following vehicle is located. Because Reason (R) provides the exact optical reasons why automobile manufacturers select convex mirrors, (R) is the correct explanation of (A).\n\n• Why other options are wrong:\n- Option (b): Incorrect because (R) is the precise physiological and optical rationale for (A).\n- Option (c): Incorrect because (R) is scientifically verified.\n- Option (d): Incorrect because Assertion (A) is an established engineering standard.",
    formula: "m_{\\text{convex}} < 1, \\quad m > 0 \\text{ (always virtual, erect, diminished)}",
    examinerNote: "Key phrases: 'wider field of view' and 'always erect and diminished' must be noted.",
    source: "CBSE Board 2023 / NCERT Activity 9.5"
  },
  {
    id: "sci_c9_q5",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "The absolute refractive index of water is 1.33 and the speed of light in vacuum is 3 × 10⁸ m/s. The speed of light in water is approximately:",
    options: [
      "2.25 × 10⁸ m/s",
      "1.33 × 10⁸ m/s",
      "3.99 × 10⁸ m/s",
      "4.00 × 10⁸ m/s"
    ],
    correctOption: 0,
    answer: "Option (a): 2.25 × 10⁸ m/s.",
    steps: [
      "1. Absolute refractive index formula: $n = \\frac{c}{v}$.",
      "2. Rearrange to find speed in medium: $v = \\frac{c}{n}$.",
      "3. Calculation: $v = \\frac{3 \\times 10^8}{1.33} = \\frac{3 \\times 10^8}{4/3} = \\frac{9}{4} \\times 10^8 = 2.25 \\times 10^8\\text{ m/s}$."
    ],
    explanation: "Reason: The absolute refractive index ($n$) of a medium is defined as $n = \\frac{c}{v}$, where $c$ is the speed of light in vacuum and $v$ is the speed in the medium. Rearranging: $v = \\frac{c}{n} = \\frac{3 \\times 10^8\\text{ m/s}}{1.33} = \\frac{3 \\times 10^8}{4/3} = \\frac{9}{4} \\times 10^8 = 2.25 \\times 10^8\\text{ m/s}$.\n\n• Why other options are wrong:\n- Option (b): Confuses refractive index $n = 1.33$ with velocity.\n- Option (c): Incorrectly multiplies $c$ by $n$ ($3 \\times 1.33 = 3.99 \\times 10^8\\text{ m/s}$), which would violate physics (light speed in any material cannot exceed $c$!).\n- Option (d): Calculation error; speed of light in water is approximately $2.25 \\times 10^8\\text{ m/s}$.",
    formula: "v = \\frac{c}{n} = \\frac{3 \\times 10^8}{4/3} = 2.25 \\times 10^8\\text{ m/s}",
    examinerNote: "Express 1.33 as 4/3 to compute exact fractional answers without rounding errors.",
    source: "NCERT Class 10 Section 9.3 / Board 2022"
  },
  {
    id: "sci_c9_q6",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "An object is placed between the focus (F) and the pole (P) of a concave mirror. The nature and position of the image formed are:",
    options: [
      "Real, inverted, magnified in front of mirror",
      "Virtual, erect, magnified behind the mirror",
      "Real, erect, diminished behind the mirror",
      "Virtual, inverted, diminished in front of mirror"
    ],
    correctOption: 1,
    answer: "Option (b): Virtual, erect, magnified behind the mirror.",
    steps: [
      "1. When the object lies between focus F and pole P of a concave mirror ($u < f$), reflected rays diverge.",
      "2. Extending these diverging rays backwards behind the mirror reveals that they meet at a virtual point.",
      "3. The image formed is Virtual, Erect, and Magnified ($m > +1$), located behind the mirror.",
      "4. This optical principle is used in dentists' mirrors and shaving mirrors."
    ],
    explanation: "Reason: When an object is placed within the focal length of a concave mirror ($u < f$, between $P$ and $F$), the reflected rays diverge upon bouncing off the mirror surface. Extrapolating these diverging rays backwards behind the mirror reveals that they intersect to form a Virtual, Erect, and Magnified image ($m > +1$, $v > 0$). This unique case is exploited in shaving mirrors and dentists' inspection mirrors.\n\n• Why other options are wrong:\n- Option (a): A real, inverted, magnified image is formed when the object is placed between $C$ and $F$, not between $P$ and $F$.\n- Option (c): Real images can never be formed behind a mirror, and real images in concave mirrors are always inverted.\n- Option (d): Virtual images are always erect, never inverted, and for a concave mirror in Case 6 they are always magnified, never diminished.",
    formula: "u < f \\implies v > 0, \\quad m > +1 \\text{ (Virtual, Erect, Magnified)}",
    examinerNote: "Very frequent board question because this is the only position where a concave mirror produces a virtual image.",
    source: "NCERT Class 10 Table 9.1 / Board 2024"
  },
  {
    id: "sci_c9_q7",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "The magnification produced by a plane mirror is always +1. What does this signify?",
    options: [
      "Image is real and of the same size as object",
      "Image is virtual, erect, and of the same size as object",
      "Image is virtual, inverted, and diminished",
      "Image is real, inverted, and magnified"
    ],
    correctOption: 1,
    answer: "Option (b): Image is virtual, erect, and of the same size as object.",
    steps: [
      "1. Magnification formula: $m = \\frac{h'}{h}$.",
      "2. Positive sign (+) of magnification signifies a Virtual and Erect image.",
      "3. Magnitude (|m| = 1) signifies that the height of the image equals the height of the object ($h' = h$)."
    ],
    explanation: "Reason: Linear magnification $m = \\frac{h'}{h}$. The positive sign ($+1$) indicates that the image is Virtual and Erect (formed upright behind the mirror). The numerical magnitude ($|m| = 1$) indicates that the height of the image equals the height of the object ($h' = h$, same size). Thus, $m = +1$ signifies a virtual, erect image of identical dimensions.\n\n• Why other options are wrong:\n- Option (a): Real images have a negative magnification sign ($m < 0$), not positive.\n- Option (c): Virtual images are never inverted, and $|m| = 1$ means same size, not diminished.\n- Option (d): Real images are inverted ($m < 0$) and $|m| = 1$ is not magnified.",
    formula: "m = \\frac{h'}{h} = +1 \\implies h' = h \\text{ (Erect and Equal Size)}",
    examinerNote: "Sign indicates nature (real/inverted vs virtual/erect); numerical value indicates relative size.",
    source: "NCERT Class 10 Exemplar"
  },
  {
    id: "sci_c9_q8",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "If the refractive index of medium A with respect to medium B is 2/3, then the refractive index of medium B with respect to medium A is:",
    options: ["2/3", "3/2", "1/3", "1"],
    correctOption: 1,
    answer: "Option (b): 3/2.",
    steps: [
      "1. Relative refractive index reciprocity relation: $^{A}n_B = \\frac{1}{^{B}n_A}$.",
      "2. Given: $^{B}n_A = 2/3$.",
      "3. Calculation: $^{A}n_B = \\frac{1}{2/3} = \\frac{3}{2} = 1.5$."
    ],
    explanation: "Reason: According to the principle of reversibility of light, the relative refractive index of medium B with respect to medium A ($^{A}n_B$) is the reciprocal of the refractive index of medium A with respect to medium B ($^{B}n_A$): $^{A}n_B = \\frac{1}{^{B}n_A} = \\frac{1}{2/3} = \\frac{3}{2} = 1.5$.\n\n• Why other options are wrong:\n- Option (a) 2/3: Incorrect; simply repeats the forward refractive index without taking its reciprocal.\n- Option (c) 1/3: Incorrect arithmetic operation.\n- Option (d) 1: Only possible if both media have identical optical densities ($n_A = n_B$).",
    formula: "^{A}n_B = \\frac{1}{^{B}n_A} = \\frac{1}{2/3} = \\frac{3}{2}",
    examinerNote: "Direct application of the principle of reversibility of light.",
    source: "NCERT Class 10 Section 9.3"
  },
  {
    id: "sci_c9_q9",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): The power of a concave lens of focal length 20 cm is -5 D.\nReason (R): Power of a lens is defined as the reciprocal of its focal length in metres, and a concave lens has a negative focal length.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "(A) is false but (R) is true."
    ],
    correctOption: 0,
    answer: "Option (a): Both (A) and (R) are true and (R) is the correct explanation of (A).",
    steps: [
      "1. For a concave lens, focal length is negative: $f = -20\\text{ cm} = -0.2\\text{ m}$.",
      "2. Power formula: $P = \\frac{1}{f(\\text{in metres})} = \\frac{1}{-0.2\\text{ m}} = -5\\text{ D}$. Assertion (A) is true.",
      "3. Reason (R) accurately defines power as $1/f(\\text{m})$ and correctly notes that concave lenses possess negative focal length.",
      "4. Reason is the direct mathematical and theoretical explanation of Assertion."
    ],
    explanation: "Reason: Assertion (A) is TRUE: For a concave lens, focal length is negative: $f = -20\\text{ cm} = -0.2\\text{ m}$. Its power is $P = \\frac{1}{f(\\text{m})} = \\frac{1}{-0.2} = -5\\text{ D}$. Reason (R) is TRUE: By definition, $P = 1/f(\\text{m})$ and diverging (concave) lenses inherently carry a negative focal length by Cartesian sign convention. Since Reason (R) accurately defines the formula and sign convention used to calculate Assertion (A), (R) is the correct explanation of (A).\n\n• Why other options are wrong:\n- Option (b): Incorrect because Reason (R) is the exact mathematical foundation and formula justifying Assertion (A).\n- Option (c): Incorrect because Reason (R) is scientifically and mathematically true.\n- Option (d): Incorrect because Assertion (A) is calculated correctly.",
    formula: "P = \\frac{1}{f(\\text{m})} = \\frac{1}{-0.2\\text{ m}} = -5\\text{ D}",
    examinerNote: "Common mistake is substituting focal length in cm without converting to metres ($1/20 = 0.05$ which is wrong).",
    source: "CBSE Board 2024 Practice"
  },
  {
    id: "sci_c9_q25",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): A convex mirror is always installed as a driver's rear-view mirror in vehicles.\nReason (R): A convex mirror always forms an erect and diminished image and provides a much wider field of view than a plane mirror.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correctOption: 0,
    answer: "Option (a): Both A and R are true and R is the correct explanation of A.",
    steps: [
      "1. Assertion (A) is true: Convex mirrors are installed in vehicles as rear-view mirrors.",
      "2. Reason (R) is true: Convex mirrors curve outwards, granting them an expansive field of view, and always form an erect, diminished virtual image of traffic behind.",
      "3. Reason correctly explains the practical reason why automobile engineers choose convex mirrors."
    ],
    explanation: "Reason: Assertion (A) is TRUE because convex mirrors are standard equipment for rear-view wing mirrors in all motor vehicles. Reason (R) is TRUE because convex mirrors are curved outwards, allowing them to capture diverging rays from a wide angle, providing a substantially larger field of view. Furthermore, for all real object positions, they produce an erect and diminished image ($0 < m < 1$). Since Reason (R) provides the complete optical justification for Assertion (A), R correctly explains A.\n\n• Why other options are wrong:\n- Option (b): Incorrect because Reason (R) directly explains the engineering justification in Assertion (A).\n- Option (c): Incorrect because Reason (R) is a verified optical fact.\n- Option (d): Incorrect because Assertion (A) is true.",
    formula: "m_{\\text{convex}} < 1, \\quad m > 0 \\implies \\text{Erect, Diminished \\& Wide Field of View}",
    examinerNote: "Convex mirrors cannot form inverted images for real objects; m is always positive and less than 1.",
    source: "CBSE Sample Paper 2026 / NCERT"
  },
  {
    id: "sci_c9_q27",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "If the linear magnification produced by a spherical mirror is exactly -1 for a real object, the object must be positioned at:",
    options: [
      "The Principal Focus (F)",
      "Between Pole (P) and Focus (F)",
      "The Centre of Curvature (C) of a concave mirror",
      "Beyond the Centre of Curvature (C)"
    ],
    correctOption: 2,
    answer: "Option (c): The Centre of Curvature (C) of a concave mirror.",
    steps: [
      "1. Magnification formula: $m = -\\frac{v}{u}$.",
      "2. Given: $m = -1$. The negative sign indicates a Real and Inverted image.",
      "3. The magnitude $|m| = 1$ indicates that image size equals object size ($h' = h$).",
      "4. In a concave mirror, when object is at C ($u = -2f$), image is formed at C ($v = -2f$), with $m = -1$."
    ],
    explanation: "Reason: Linear magnification $m = \\frac{h'}{h} = -\\frac{v}{u}$. Here $m = -1$ gives two distinct optical deductions: (1) The negative sign ($m < 0$) indicates that the image is Real and Inverted. Only a concave mirror can produce real images. (2) The magnitude $|m| = 1$ indicates that the image size equals the object size ($h' = h$). In a concave mirror, when the object is placed at the Centre of Curvature $C$ ($u = -2f$), the image is also formed at $C$ ($v = -2f$), real, inverted, and of identical size ($m = -1$).\n\n• Why other options are wrong:\n- Option (a) Principal Focus (F): Image is formed at infinity and is infinitely large ($m \\to -\\infty$).\n- Option (b) Between P and F: Image is formed behind the mirror, virtual and erect with positive magnification ($m > +1$).\n- Option (d) Beyond C: Image is formed between $C$ and $F$, and is diminished ($|m| < 1$).",
    formula: "m = -\\frac{v}{u} = -1 \\implies v = u = -2f \\quad (\\text{At Centre of Curvature } C)",
    examinerNote: "Convex mirrors can never have negative magnification; they always produce virtual, erect images ($m > 0$).",
    source: "CBSE Sample Paper 2026 / Educart Science"
  },
  {
    id: "sci_c9_q28",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 1,
    type: "MCQ",
    question: "A student determines the focal length of an optical device 'X' by focusing the sharp image of a distant tree on a white screen placed on the same side as the tree. The optical device 'X' is a:",
    options: [
      "Concave lens",
      "Convex lens",
      "Concave mirror",
      "Convex mirror"
    ],
    correctOption: 2,
    answer: "Option (c): Concave mirror.",
    steps: [
      "1. A sharp image is captured on a physical screen $\\implies$ the image is Real.",
      "2. The screen is placed on the SAME side as the object (tree) $\\implies$ the device reflects light (mirror), rather than transmitting it (lens).",
      "3. Among spherical mirrors, convex mirrors only form virtual images behind the mirror.",
      "4. Therefore, the device must be a Concave mirror, which converges parallel light from a distant object to form a real image at its focus F on the same side."
    ],
    explanation: "Reason: Two critical experimental clues define device 'X': (1) A sharp image is captured on a screen $\\implies$ the image is Real. (2) The screen is placed on the same side as the object (tree) $\\implies$ the light undergoes reflection (not transmission through a lens). Among spherical mirrors, convex mirrors can only form virtual images behind the mirror, while a concave mirror converges incident parallel rays from distant objects to form a real, inverted image at its focus $F$ on the same side as the object.\n\n• Why other options are wrong:\n- Option (a) Concave lens: Forms only virtual images on the same side that cannot be captured on a physical screen.\n- Option (b) Convex lens: Forms a real image of a distant object, but on the opposite side of the lens (transmission), not on the same side as the tree.\n- Option (d) Convex mirror: Always forms virtual, diminished images behind the mirror; can never project an image onto a physical screen.",
    formula: "\\text{Distant Object } (u \\to -\\infty) \\implies v = -f \\text{ (In front of concave mirror)}",
    examinerNote: "Classic laboratory experiment question. Pay close attention to 'same side as the tree' (mirror) vs 'opposite side' (lens).",
    source: "CBSE Class 10 Board Practical / NCERT"
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
    answer: "The image is formed at 20 cm in front of the mirror (at the Centre of Curvature C). Nature: Real, inverted, and of the same size as the object (height = -4 cm).",
    steps: [
      "1. Identify given quantities with New Cartesian Sign Convention:\n   - Object distance $u = -20\\text{ cm}$\n   - Focal length $f = -10\\text{ cm}$\n   - Object height $h = +4\\text{ cm}$",
      "2. Apply Mirror Formula: $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u}$.",
      "3. Calculation: $\\frac{1}{v} = \\frac{1}{-10} - \\frac{1}{-20} = -\\frac{1}{10} + \\frac{1}{20} = -\\frac{1}{20} \\implies v = -20\\text{ cm}$.",
      "4. Magnification: $m = -\\frac{v}{u} = -\\frac{-20}{-20} = -1$.\n   - Image height $h' = m \\times h = -1 \\times 4 = -4\\text{ cm}$."
    ],
    explanation: "Because $u = 2f = 20\\text{ cm}$, the object is situated precisely at the Centre of Curvature C. The image also forms at C ($v = -20\\text{ cm}$), real, inverted, and with magnification $m = -1$.",
    formula: "\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}, \\quad m = -\\frac{v}{u} = \\frac{h'}{h}",
    examinerNote: "Assigning negative signs to both u and f in the concave mirror formula is mandatory.",
    source: "NCERT Class 10 Exercise 9.1 / Board 2022"
  },
  {
    id: "sci_c9_q11",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 2,
    type: "VSA",
    question: "A ray of light traveling in air enters obliquely into water. Does the light ray bend toward the normal or away from the normal? Explain why with reference to the speed of light.",
    answer: "The light ray bends **towards the normal**.\n\nExplanation:\n1. Water is an optically denser medium compared to air ($n_{\\text{water}} = 1.33 > n_{\\text{air}} = 1.00$).\n2. The speed of light decreases when entering water ($v_{\\text{water}} \\approx 2.25 \\times 10^8\\text{ m/s}$ vs $c = 3 \\times 10^8\\text{ m/s}$ in air).\n3. By Snell's Law ($n_1 \\sin i = n_2 \\sin r$), a reduction in speed causes the angle of refraction to become smaller than the angle of incidence ($r < i$), bending the ray towards the normal.",
    steps: [
      "1. State direction: Bends towards the normal.",
      "2. State optical density: Water is optically denser than air.",
      "3. State speed change: Speed of light decreases in water.",
      "4. Connect to Snell's law: $r < i$."
    ],
    explanation: "Light entering an optically denser medium suffers differential deceleration across its wavefront, causing the path to pivot towards the normal.",
    formula: "\\frac{\\sin i}{\\sin r} = \\frac{v_{\\text{air}}}{v_{\\text{water}}} > 1 \\implies i > r \\text{ (bends towards normal)}",
    examinerNote: "Must explicitly link bending towards the normal with the reduction in the speed of light.",
    source: "NCERT Class 10 In-text Question / Board 2021"
  },
  {
    id: "sci_c9_q12",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 2,
    type: "VSA",
    question: "Define 1 Dioptre of power of a lens. Two thin lenses of focal lengths +20 cm and -50 cm are placed in optical contact. Calculate the net power of the combination.",
    answer: "1. Definition of 1 Dioptre: One Dioptre (1 D) is defined as the optical power of a lens whose focal length is exactly 1 metre ($1\\text{ D} = 1\\text{ m}^{-1}$).\n2. Calculation of Net Power:\n   - Focal length of first lens: $f_1 = +20\\text{ cm} = +0.2\\text{ m} \\implies P_1 = \\frac{1}{+0.2} = +5.0\\text{ D}$.\n   - Focal length of second lens: $f_2 = -50\\text{ cm} = -0.5\\text{ m} \\implies P_2 = \\frac{1}{-0.5} = -2.0\\text{ D}$.\n   - Net Power: $P = P_1 + P_2 = +5.0\\text{ D} + (-2.0\\text{ D}) = \\mathbf{+3.0\\text{ D}}$ (Convex/converging combination).",
    steps: [
      "1. Definition: $P = 1\\text{ D}$ when $f = 1\\text{ m}$.",
      "2. Convert $f_1$ and $f_2$ to metres: $f_1 = +0.2\\text{ m}$, $f_2 = -0.5\\text{ m}$.",
      "3. Calculate individual powers: $P_1 = +5\\text{ D}$, $P_2 = -2\\text{ D}$.",
      "4. Sum algebraically: $P_{\\text{net}} = P_1 + P_2 = +3.0\\text{ D}$."
    ],
    explanation: "Net power is the algebraic sum of individual lens powers in dioptres ($P = P_1 + P_2$).",
    formula: "P = \\frac{1}{f(\\text{m})}, \\quad P_{\\text{net}} = P_1 + P_2 = +5.0 - 2.0 = +3.0\\text{ D}",
    examinerNote: "Convert cm to metres before calculating power. 1 mark for definition, 1 mark for numerical.",
    source: "NCERT Class 10 Section 9.3.8 / Board 2023"
  },
  {
    id: "sci_c9_q13",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 2,
    type: "VSA",
    question: "Why does a concave lens always produce a virtual, erect, and diminished image for all positions of an object in front of it? Justify using optical ray rules.",
    answer: "A concave lens is a diverging lens that always diverges incident rays away from the principal axis:\n1. A ray parallel to the principal axis diverges after refraction and appears to originate from the principal focus ($F_1$) on the same side as the object.\n2. A ray passing through the optical centre ($O$) emerges straight through without any deviation.\n3. These two refracted rays always diverge from each other on the transmission side; their backward projections intersect between the optical centre $O$ and focus $F_1$ on the same side as the object.\n4. Therefore, for all object positions, the image formed is invariably **Virtual, Erect, and Diminished** ($0 < m < +1$).",
    steps: [
      "1. Trace Ray 1: Parallel to axis -> diverges as if from focus F1.",
      "2. Trace Ray 2: Through optical centre O -> passes undeviated.",
      "3. Note intersection: Rays diverge on right side, so their backward extensions always intersect between O and F1 on left side.",
      "4. Deduce image nature: Virtual, erect, diminished."
    ],
    explanation: "Because the refracted rays diverge, they can never form a real image. Their backward intersection is bounded strictly between O and F1.",
    formula: "m = \\frac{v}{u} < +1, \\quad v < 0 \\text{ (Virtual, erect, diminished for all } u)",
    examinerNote: "Mention both standard rays (parallel ray diverging from F1 and optical center ray O).",
    source: "NCERT Class 10 Section 9.3.5 / Board 2022"
  },
  {
    id: "sci_c9_q14",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 2,
    type: "VSA",
    question: "What is meant by 'lateral displacement' in refraction through a rectangular glass slab? State two factors on which it depends.",
    answer: "1. Definition: Lateral displacement is the perpendicular distance between the original incident path (extended forward) and the emergent ray after passing through a refracting medium with parallel faces.\n2. Factors on which it depends (any two):\n   - **Thickness of the glass slab ($t$):** Directly proportional (thicker slab = greater lateral displacement).\n   - **Refractive index of the medium ($n$):** Directly proportional (higher optical density = greater bending and displacement).\n   - **Angle of incidence ($\\angle i$):** Directly proportional (larger incidence angle = greater lateral shift).\n   - **Wavelength of light ($\\lambda$):** Inversely proportional (violet light shifts more than red light).",
    steps: [
      "1. Define lateral displacement as the perpendicular separation between incident path and emergent ray.",
      "2. State two factors clearly: slab thickness and refractive index (or angle of incidence).",
      "3. Clarify that incident and emergent rays remain parallel ($\\angle i = \\angle e$)."
    ],
    explanation: "The parallel faces of a rectangular slab ensure that the deviation produced at the first face is exactly cancelled at the second face, resulting in parallel emergence with a lateral shift.",
    formula: "d = \\frac{t \\sin(i - r)}{\\cos r}",
    examinerNote: "The term 'perpendicular distance' is critical in the definition to secure full credit.",
    source: "NCERT Class 10 Section 9.3.1 / Board 2024"
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
    answer: "1. Image Position: $v = +16.67\\text{ cm}$ (formed 16.67 cm behind the lens on the other side).\n2. Nature: Real and Inverted.\n3. Image Size: $h' = -3.33\\text{ cm}$ (diminished).",
    steps: [
      "1. Identify given values with Cartesian signs:\n   - Object height $h = +5\\text{ cm}$\n   - Object distance $u = -25\\text{ cm}$\n   - Focal length $f = +10\\text{ cm}$ (convex lens)",
      "2. Apply Lens Formula: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u}$.",
      "3. Calculation:\n   $\\frac{1}{v} = \\frac{1}{10} + \\frac{1}{-25} = \\frac{5 - 2}{50} = \\frac{3}{50} \\implies v = +\\frac{50}{3}\\text{ cm} \\approx +16.67\\text{ cm}$.",
      "4. Magnification: $m = \\frac{v}{u} = \\frac{+50/3}{-25} = -\\frac{2}{3} \\approx -0.67$.",
      "5. Image Height: $h' = m \\times h = -\\frac{2}{3} \\times 5 = -\\frac{10}{3}\\text{ cm} \\approx -3.33\\text{ cm}$.",
      "6. Nature: Real, inverted, and diminished ($h' = -3.33\\text{ cm}$)."
    ],
    explanation: "Because the object is located beyond $2F_1$ ($u = 25\\text{ cm} > 2f = 20\\text{ cm}$), the image forms between $F_2$ and $2F_2$ on the opposite side ($10\\text{ cm} < v < 20\\text{ cm}$), real, inverted, and diminished.",
    formula: "\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}, \\quad m = \\frac{v}{u} = \\frac{h'}{h}",
    examinerNote: "Convex lens focal length must be taken as positive (+10 cm). Lens magnification has no minus sign ($m = +v/u$).",
    source: "NCERT Class 10 Exercise 9.10 / Board 2023"
  },
  {
    id: "sci_c9_q16",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 3,
    type: "SA",
    question: "A concave lens has a focal length of 15 cm. At what distance should the object from the lens be placed so that it forms an image at 10 cm from the lens? Also find the magnification produced by the lens.",
    answer: "1. Object Distance: $u = -30\\text{ cm}$ (object should be placed 30 cm in front of the concave lens).\n2. Magnification: $m = +\\frac{1}{3} \\approx +0.33$ (virtual, erect, diminished to 1/3 of object size).",
    steps: [
      "1. Identify given values with Cartesian signs for concave lens:\n   - Focal length $f = -15\\text{ cm}$\n   - Image distance $v = -10\\text{ cm}$ (concave lens forms virtual image on same side as object)",
      "2. Apply Lens Formula: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{u} = \\frac{1}{v} - \\frac{1}{f}$.",
      "3. Calculation:\n   $\\frac{1}{u} = \\frac{1}{-10} - \\frac{1}{-15} = -\\frac{1}{10} + \\frac{1}{15} = \\frac{-3 + 2}{30} = -\\frac{1}{30} \\implies u = -30\\text{ cm}$.",
      "4. Magnification: $m = \\frac{v}{u} = \\frac{-10}{-30} = +\\frac{1}{3} \\approx +0.33$.",
      "5. Conclusion: Positive magnification confirms the image is virtual and erect, diminished to 1/3rd of the object height."
    ],
    explanation: "For a concave lens, both focal length ($f$) and image distance ($v$) are negative. The object must be located at 30 cm in front of the lens.",
    formula: "\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}, \\quad m = \\frac{v}{u}",
    examinerNote: "Common error: taking v = +10 cm. Concave lenses always produce virtual images on the left side ($v = -10\\text{ cm}$).",
    source: "NCERT Solved Example 9.4 / Board 2022"
  },
  {
    id: "sci_c9_q17",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 3,
    type: "SA",
    question: "A convex mirror used for rear-view on an automobile has a radius of curvature of 3.00 m. If a bus is located at 5.00 m from this mirror, find the position, nature, and size of the image relative to the bus.",
    answer: "1. Position: $v = +1.15\\text{ m}$ (formed 1.15 m behind the convex mirror).\n2. Nature: Virtual and Erect.\n3. Relative Size: $m = +0.23$ (image is erect and diminished to 0.23 times the size of the bus).",
    steps: [
      "1. Identify given values with New Cartesian Sign Convention:\n   - Radius of curvature $R = +3.00\\text{ m} \\implies f = +\\frac{R}{2} = +1.50\\text{ m}$\n   - Object distance $u = -5.00\\text{ m}$",
      "2. Apply Mirror Formula: $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u}$.",
      "3. Calculation:\n   $\\frac{1}{v} = \\frac{1}{+1.50} - \\frac{1}{-5.00} = \\frac{1}{1.50} + \\frac{1}{5.00} = \\frac{2}{3} + \\frac{1}{5} = \\frac{10 + 3}{15} = \\frac{13}{15}$.\n   $\\implies v = +\\frac{15}{13}\\text{ m} \\approx +1.15\\text{ m}$.",
      "4. Magnification: $m = -\\frac{v}{u} = -\\frac{+1.15}{-5.00} = +\\frac{1.15}{5.00} \\approx +0.23$.",
      "5. Interpretation: Positive $v$ means behind the mirror (virtual); positive $m$ means erect; magnitude $< 1$ means diminished."
    ],
    explanation: "Convex mirrors always have positive focal length ($f = R/2 = +1.5\\text{ m}$) and always produce virtual, erect, diminished images behind the mirror.",
    formula: "\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}, \\quad m = -\\frac{v}{u}",
    examinerNote: "Convex mirror focal length is positive (+1.5 m). Mirror magnification requires the minus sign: $m = -v/u$.",
    source: "NCERT Class 10 Solved Example 9.1 / Board 2024"
  },
  {
    id: "sci_c9_q18",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 3,
    type: "SA",
    question: "The absolute refractive indices of water and glass are 4/3 and 3/2 respectively. If the speed of light in glass is 2 × 10⁸ m/s, calculate: (a) The speed of light in vacuum, (b) The speed of light in water, and (c) The refractive index of glass with respect to water.",
    answer: "(a) Speed of light in vacuum $c = 3.0 \\times 10^8\\text{ m/s}$.\n(b) Speed of light in water $v_{\\text{water}} = 2.25 \\times 10^8\\text{ m/s}$.\n(c) Refractive index of glass with respect to water $^{w}n_g = \\frac{9}{8} = 1.125$.",
    steps: [
      "1. Part (a): Absolute refractive index of glass $n_g = \\frac{c}{v_g}$.\n   $c = n_g \\times v_g = \\frac{3}{2} \\times (2.0 \\times 10^8\\text{ m/s}) = 3.0 \\times 10^8\\text{ m/s}$.",
      "2. Part (b): Absolute refractive index of water $n_w = \\frac{c}{v_w}$.\n   $v_w = \\frac{c}{n_w} = \\frac{3.0 \\times 10^8}{4/3} = \\frac{9}{4} \\times 10^8 = 2.25 \\times 10^8\\text{ m/s}$.",
      "3. Part (c): Refractive index of glass with respect to water:\n   $^{w}n_g = \\frac{n_g}{n_w} = \\frac{3/2}{4/3} = \\frac{3}{2} \\times \\frac{3}{4} = \\frac{9}{8} = 1.125$."
    ],
    explanation: "Relative refractive index is the ratio of absolute refractive indices ($^{w}n_g = n_g / n_w = v_w / v_g$).",
    formula: "c = n_g v_g, \\quad v_w = \\frac{c}{n_w}, \\quad ^{w}n_g = \\frac{n_g}{n_w} = \\frac{9}{8} = 1.125",
    examinerNote: "1 mark per subpart. Write final values with appropriate units (m/s for speeds, dimensionless for index).",
    source: "NCERT Class 10 Section 9.3.2 / Board 2023"
  },
  {
    id: "sci_c9_q19",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 3,
    type: "SA",
    question: "Describe the image formation by a concave mirror with ray explanations for two cases: (i) Object placed between Centre of Curvature (C) and Focus (F), and (ii) Object placed between Focus (F) and Pole (P). State one practical application for each case.",
    answer: "Case (i): Object Between C and F:\n- Ray Rules: Ray 1 parallel to principal axis reflects through Focus F; Ray 2 through Focus F emerges parallel to principal axis.\n- Image Characteristics: Formed **Beyond C**; Real, Inverted, and **Magnified** ($|m| > 1$).\n- Practical Application: Optical slide projectors and film projectors.\n\nCase (ii): Object Between F and P:\n- Ray Rules: Ray 1 striking the pole obliquely reflects at equal angle; Ray 2 directed from Centre of Curvature C reflects normally back along its path. The reflected rays diverge in front and intersect behind the mirror when produced backwards.\n- Image Characteristics: Formed **Behind the mirror**; **Virtual, Erect, and Magnified** ($m > +1$).\n- Practical Application: Shaving mirrors, makeup mirrors, and dentists' examination mirrors.",
    steps: [
      "1. Case (i): Object between C and F -> Image beyond C, real, inverted, magnified.",
      "2. State application for Case (i): Projectors.",
      "3. Case (ii): Object between F and P -> Image behind mirror, virtual, erect, magnified.",
      "4. State application for Case (ii): Dentists' mirrors / Shaving mirrors."
    ],
    explanation: "Case (i) produces an enlarged real image outside C, while Case (ii) is the unique concave mirror configuration yielding a virtual, magnified erect image.",
    formula: "\\text{Case (i): } f < u < 2f \\implies v > 2f, \\ |m| > 1; \\quad \\text{Case (ii): } u < f \\implies v > 0, \\ m > +1",
    examinerNote: "1.5 marks for each case (1 mark for ray description + 0.5 mark for practical application).",
    source: "NCERT Class 10 Table 9.1 / Board 2022, 2024"
  },
  {
    id: "sci_c9_q20",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 3,
    type: "SA",
    question: "Differentiate between a Real Image and a Virtual Image on three distinct optical parameters. Explain why a dentist uses a concave mirror rather than a plane mirror or convex mirror.",
    answer: "Differences between Real and Virtual Images:\n\n| Parameter | Real Image | Virtual Image |\n| :--- | :--- | :--- |\n| **Ray Intersection** | Formed by actual physical intersection of reflected/refracted rays. | Formed when diverging rays appear to intersect when produced backwards. |\n| **Screen Capture** | Can be captured and projected onto a physical screen. | Cannot be captured on a screen; can only be observed with the eye. |\n| **Orientation & Sign** | Always inverted relative to the object ($m < 0$). | Always erect relative to the object ($m > 0$). |\n\nWhy a Dentist Uses a Concave Mirror:\nWhen the dentist holds the concave mirror close to a tooth such that the tooth lies within the mirror's focal length ($u < f$, between pole and focus), it produces an **erect, highly magnified virtual image** of the tooth. A plane mirror would only show the same size ($m = +1$) and a convex mirror would show a diminished image ($m < +1$), which is useless for detecting tiny cavities.",
    steps: [
      "1. Contrast ray intersection (actual vs apparent).",
      "2. Contrast screen capture capability (possible vs not possible).",
      "3. Contrast orientation (inverted vs erect).",
      "4. Justify dentist mirror: Concave mirror produces an erect, magnified virtual image when object is within focus."
    ],
    explanation: "Only a concave mirror can form an erect AND magnified image ($m > +1$), making it indispensable for dental inspection.",
    formula: "\\text{Dentist Mirror: Concave Mirror with } u < f \\implies m > +1 \\text{ (Erect \\& Magnified)}",
    examinerNote: "2 marks for table (3 points), 1 mark for dentist explanation mentioning 'erect and magnified'.",
    source: "NCERT Class 10 Section 9.2.2 / Board 2022"
  },

  // ==========================================
  // SECTION D: 5-MARK LA (5 Questions)
  // ==========================================
  {
    id: "sci_c9_q21",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 5,
    type: "LA",
    question: "(a) State the New Cartesian Sign Convention rules for spherical mirrors. [2M]\n(b) An object is placed at a distance of 15 cm in front of a concave mirror of focal length 10 cm. Using the mirror formula, find the position, nature, and magnification of the image formed. [2M]\n(c) What is meant by the 'aperture' of a spherical mirror? How does aperture affect image brightness? [1M]",
    answer: "(a) New Cartesian Sign Convention Rules:\n1. The object is always placed to the left of the mirror, meaning incident light travels from left to right.\n2. All distances parallel to the principal axis are measured from the Pole (P) as origin (0,0).\n3. Distances measured in the direction of incident light (to the right of Pole) are taken as Positive (+).\n4. Distances measured against the direction of incident light (to the left of Pole) are taken as Negative (-).\n5. Distances measured perpendicular to and above the principal axis are taken as Positive (+); those below are taken as Negative (-).\n\n(b) Numerical Calculation:\n- Given: $u = -15\\text{ cm}$, $f = -10\\text{ cm}$ (concave mirror).\n- Mirror formula: $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u}$.\n- $\\frac{1}{v} = \\frac{1}{-10} - \\frac{1}{-15} = -\\frac{1}{10} + \\frac{1}{15} = \\frac{-3 + 2}{30} = -\\frac{1}{30} \\implies v = -30\\text{ cm}$.\n- Magnification: $m = -\\frac{v}{u} = -\\frac{-30}{-15} = -2$.\n- Nature: Real and Inverted (since $v < 0$ and $m < 0$), formed 30 cm in front of the mirror, magnified 2 times.\n\n(c) Aperture and Image Brightness:\nThe aperture is the effective diameter of the reflecting circular boundary of a spherical mirror. A larger aperture captures more light rays from each point of the object, producing a significantly brighter image.",
    steps: [
      "1. Part (a): State 5 sign convention rules (2M).",
      "2. Part (b): Substitute u = -15 cm, f = -10 cm into mirror formula -> find v = -30 cm, m = -2, state nature (2M).",
      "3. Part (c): Define aperture as reflecting diameter and link larger aperture to higher brightness (1M)."
    ],
    explanation: "New Cartesian conventions establish pole as origin. When object is between C and F ($10 < 15 < 20$), image forms beyond C ($v = -30\\text{ cm}$), real, inverted, magnified.",
    formula: "\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}, \\quad m = -\\frac{v}{u}",
    examinerNote: "Award 2 marks for conventions, 2 marks for complete numerical with signs, and 1 mark for aperture definition.",
    source: "CBSE Board 2021, 2023 / NCERT Section 9.2.3"
  },
  {
    id: "sci_c9_q22",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 5,
    type: "LA",
    question: "(a) Define the optical centre and principal focus of a convex lens. [2M]\n(b) An object of height 6 cm is placed perpendicular to the principal axis of a convex lens of focal length 20 cm. If the distance of the object from the lens is 30 cm, calculate: (i) The position of the image, (ii) The size of the image, and (iii) The linear magnification. [2M]\n(c) How will the nature and position of the image change if the object is brought closer to the lens at a distance of 10 cm? [1M]",
    answer: "(a) Definitions:\n1. Optical Centre (O): The central geometric point of a lens through which a ray of light passes straight without suffering any angular deviation.\n2. Principal Focus of Convex Lens (F₂): A point on the principal axis to which all incident rays initially parallel to the principal axis converge after refraction through the lens.\n\n(b) Numerical Calculation:\n- Given: $h = +6\\text{ cm}$, $u = -30\\text{ cm}$, $f = +20\\text{ cm}$.\n- (i) Lens formula: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u} = \\frac{1}{20} + \\frac{1}{-30} = \\frac{3 - 2}{60} = \\frac{1}{60} \\implies \\mathbf{v = +60\\text{ cm}}$.\n  Image is formed 60 cm behind the lens on the opposite side.\n- (ii) Magnification: $m = \\frac{v}{u} = \\frac{+60}{-30} = \\mathbf{-2}$.\n- (iii) Image Height: $h' = m \\times h = -2 \\times 6 = \\mathbf{-12\\text{ cm}}$ (Real, inverted, and magnified 2×).\n\n(c) Change when $u = -10\\text{ cm}$:\nSince $u = 10\\text{ cm} < f = 20\\text{ cm}$, the object now lies between the optical centre O and focus F₁. The image will change from real and inverted to **Virtual, Erect, and Magnified**, formed on the same side as the object (acting as a magnifying glass).",
    steps: [
      "1. Part (a): Define optical centre O and principal focus F2 (2M).",
      "2. Part (b): Apply 1/v - 1/u = 1/f -> v = +60 cm, m = -2, h' = -12 cm (2M).",
      "3. Part (c): Explain transition to virtual erect magnified image when u < f (1M)."
    ],
    explanation: "At u = 30 cm (between F and 2F), image forms beyond 2F (v = 60 cm). Bringing object inside focus (u = 10 cm < f = 20 cm) produces a virtual magnified image.",
    formula: "\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}, \\quad m = \\frac{v}{u} = \\frac{h'}{h}",
    examinerNote: "Lens formula has minus sign (1/v - 1/u = 1/f); magnification has plus sign (m = +v/u). Do not mix with mirror formulas.",
    source: "CBSE Board 2022, 2024 / NCERT Section 9.3.5"
  },
  {
    id: "sci_c9_q26",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 5,
    type: "LA",
    question: "(a) An object 4 cm in height is placed at a distance of 20 cm in front of a convex lens of focal length 10 cm. Find the image distance, nature, and height of the image formed. [2M]\n(b) A concave mirror produces a three times magnified real image of an object placed at 10 cm in front of it. Calculate the image distance and focal length of the mirror. [2M]\n(c) Find the focal length of a lens of power -2.0 D. What type of lens is this? [1M]",
    answer: "(a) Convex Lens Numerical:\n- Given: $h = +4\\text{ cm}$, $u = -20\\text{ cm}$, $f = +10\\text{ cm}$.\n- Lens formula: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{10} + \\frac{1}{-20} = \\frac{2 - 1}{20} = \\frac{1}{20} \\implies \\mathbf{v = +20\\text{ cm}}$.\n- Magnification: $m = \\frac{v}{u} = \\frac{+20}{-20} = -1$.\n- Height of image: $h' = m \\times h = -1 \\times 4 = \\mathbf{-4\\text{ cm}}$.\n- Nature: Real, inverted, and of the same size, formed at $2F_2$ (20 cm on the other side).\n\n(b) Concave Mirror Numerical:\n- Given: $u = -10\\text{ cm}$, Real image $\\implies m = -3$.\n- Magnification formula: $m = -\\frac{v}{u} \\implies -3 = -\\frac{v}{-10} \\implies \\mathbf{v = -30\\text{ cm}}$ (formed 30 cm in front of mirror).\n- Mirror formula: $\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u} = \\frac{1}{-30} + \\frac{1}{-10} = \\frac{-1 - 3}{30} = -\\frac{4}{30} = -\\frac{2}{15}$.\n- Focal length: $f = -\\frac{15}{2} = \\mathbf{-7.5\\text{ cm}}$.\n\n(c) Lens Power & Type:\n- Power $P = -2.0\\text{ D} \\implies f = \\frac{1}{P} = \\frac{1}{-2.0} = -0.5\\text{ m} = \\mathbf{-50\\text{ cm}}$.\n- Since focal length and power are negative, it is a **Concave (Diverging) Lens**.",
    steps: [
      "1. Part (a): Lens calculation: u = -20, f = +10 -> v = +20 cm, h' = -4 cm (2M).",
      "2. Part (b): Mirror calculation: m = -3, u = -10 -> v = -30 cm, f = -7.5 cm (2M).",
      "3. Part (c): Power calculation: f = 1/P = -0.5 m = -50 cm, concave lens (1M)."
    ],
    explanation: "Multi-concept 5-marker testing both lens and mirror formulas alongside dioptre power conversions.",
    formula: "\\text{Lens: } \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}; \\quad \\text{Mirror: } \\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}; \\quad P = \\frac{1}{f(\\text{m})}",
    examinerNote: "Assigning proper algebraic signs to m (real image m = -3) is crucial in part (b).",
    source: "CBSE Board Examination (5 Marks) / NCERT Exemplar"
  },
  {
    id: "sci_c9_q34",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 5,
    type: "LA",
    question: "(a) State Snell's law of refraction. Under what two specific conditions does a ray of light pass through an interface without undergoing any change in direction? [2M]\n(b) A convex lens forms a real and inverted image of a needle at a distance of 50 cm from it. Where is the needle placed in front of the convex lens if the image is equal in size to the needle? Calculate the optical power of this lens. [2M]\n(c) The absolute refractive index of diamond is 2.42. What is the physical meaning of this statement? [1M]",
    answer: "(a) Snell's Law & Zero-Deviation Conditions:\n1. Snell's Law: The ratio of the sine of angle of incidence to the sine of angle of refraction is a constant for a given pair of optical media: $\\frac{\\sin i}{\\sin r} = ^{1}n_2 = \\frac{n_2}{n_1}$.\n2. Conditions for Zero Deviation:\n   - Condition 1: When light strikes the boundary normally (at perpendicular incidence, $\\angle i = 0^\\circ \\implies \\angle r = 0^\\circ$).\n   - Condition 2: When the two optical media have identical refractive indices ($n_1 = n_2$).\n\n(b) Needle Numerical Calculation:\n- Given: Image is real, inverted, and of the same size $\\implies m = -1$.\n- For a convex lens: $m = \\frac{v}{u} = -1 \\implies u = -v$.\n- Real image distance $v = +50\\text{ cm} \\implies \\mathbf{u = -50\\text{ cm}}$ (placed 50 cm in front of lens at $2F_1$).\n- Focal length: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{50} - \\frac{1}{-50} = \\frac{2}{50} = \\frac{1}{25} \\implies f = +25\\text{ cm} = +0.25\\text{ m}$.\n- Optical Power: $P = \\frac{1}{f(\\text{in m})} = \\frac{1}{+0.25\\text{ m}} = \\mathbf{+4.0\\text{ D}}$.\n\n(c) Physical Meaning of Diamond Index 2.42:\nIt means that the speed of light in vacuum is $2.42$ times faster than the speed of light in diamond, or equivalently, light slows down in diamond to $\\frac{1}{2.42}$ (about $41\\%$) of its speed in vacuum ($v_{\\text{diamond}} = \\frac{3 \\times 10^8}{2.42} \\approx 1.24 \\times 10^8\\text{ m/s}$).",
    steps: [
      "1. Part (a): Snell's law formula + 2 zero-deviation conditions (normal incidence, equal indices) (2M).",
      "2. Part (b): Same size real image -> u = -50 cm, f = +25 cm, P = +4.0 D (2M).",
      "3. Part (c): State that light speed in diamond is 1/2.42 times that in vacuum (1M)."
    ],
    explanation: "Diamond has the highest optical density in standard school physics. When object is at 2F, convex lens forms equal-sized real image at 2F on the other side.",
    formula: "\\frac{\\sin i}{\\sin r} = \\frac{n_2}{n_1}, \\quad \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}, \\quad P = \\frac{1}{f(\\text{m})}, \\quad n = \\frac{c}{v}",
    examinerNote: "Convert 25 cm to 0.25 m before computing power. $1/25 = 0.04$ is a common calculation error.",
    source: "CBSE Board 2024 / NCERT Exercise Q12"
  },
  {
    id: "sci_c9_q36",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 5,
    type: "LA",
    question: "An illuminated object is placed at the 10 cm mark of an optical bench. A convex lens is mounted at the 50 cm mark, and a sharp inverted image is captured on a screen placed at the 90 cm mark.\n(a) Calculate the focal length of the convex lens. [2M]\n(b) If the object is shifted to the 30 cm mark while the lens remains fixed at 50 cm, determine the new position, nature, and magnification of the image. [1.5M]\n(c) What will happen to the image on the screen if the lower half of the convex lens is covered with opaque black paper? Explain your reasoning with optical principles. [1.5M]",
    answer: "(a) Focal Length Calculation:\n- Object position = 10 cm, Lens position = 50 cm $\\implies u = 10 - 50 = -40\\text{ cm}$.\n- Screen position = 90 cm, Lens position = 50 cm $\\implies v = 90 - 50 = +40\\text{ cm}$.\n- Lens formula: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{f} = \\frac{1}{40} - \\frac{1}{-40} = \\frac{2}{40} = \\frac{1}{20}$.\n- Focal length: $\\mathbf{f = +20\\text{ cm} = +0.20\\text{ m}}$.\n\n(b) Shifted Object:\n- New object position = 30 cm, Lens = 50 cm $\\implies u' = 30 - 50 = -20\\text{ cm}$.\n- Since $u' = -f = -20\\text{ cm}$, the object is now placed exactly at the Principal Focus ($F_1$).\n- Lens formula: $\\frac{1}{v'} = \\frac{1}{f} + \\frac{1}{u'} = \\frac{1}{20} - \\frac{1}{20} = 0 \\implies \\mathbf{v' \\to \\infty}$.\n- The image is formed at **Infinity ($\\infty$)**; Real, Inverted, and **Infinitely Large (Highly Magnified)**.\n\n(c) Covering Lower Half of Lens (Classic HOTS):\nA **complete, full image** of the object will still be formed on the screen without any truncation, but its **brightness (intensity) will be reduced to half**. Every portion of a lens receives rays from all points of the object and refracts them to form the full image. Covering the lower half merely blocks half of the total light rays, decreasing the retinal illuminance by 50%.",
    steps: [
      "1. Part (a): Subtract optical bench marks: u = -40 cm, v = +40 cm -> f = +20 cm (2M).",
      "2. Part (b): Shifted object u' = -20 cm (at F) -> v' -> infinity, highly magnified real image (1.5M).",
      "3. Part (c): HOTS: Full image remains intact, brightness reduced to 50% (1.5M)."
    ],
    explanation: "Optical bench calculations require calculating u and v by subtracting coordinate positions. Covering half the lens reduces image intensity, not image completeness.",
    formula: "\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}, \\quad \\text{Intensity } \\propto \\text{Aperture Area}",
    examinerNote: "HOTS trap in part (c): Many students incorrectly claim 'only half the image will be formed'. The complete image is formed, only dimmer!",
    source: "CBSE Board 2024 / NCERT Exemplar HOTS"
  },

  // ==========================================
  // SECTION E: 4-MARK CASE STUDY (3 Questions)
  // ==========================================
  {
    id: "sci_c9_q23",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 4,
    type: "Case Study",
    question: "Case Study: Spherical mirrors find wide applications in daily life and industrial technology. Concave mirrors are used in car headlights and searchlights because when a light bulb is placed at the principal focus, the reflected rays emerge as a powerful parallel beam. Solar furnaces employ large concave mirrors to concentrate solar rays at the focus, producing temperatures up to 3000°C. Dentists also utilize concave mirrors to examine small cavities in teeth.\n\n(a) [1M] Where should a light bulb be placed in a car headlight reflector to obtain a powerful parallel beam of light?\n(b) [1M] Why are large concave mirrors used in solar concentrating furnaces?\n(c) [2M] A dentist holds a small concave mirror of focal length 3 cm at a distance of 2 cm from a patient's tooth. Calculate the position and magnification of the image of the tooth.",
    answer: "(a) The light bulb must be positioned exactly at the **Principal Focus (F)** of the concave reflector.\n(b) Concave mirrors converge parallel incident sun rays to a single intense focal spot, concentrating solar thermal energy to generate temperatures up to 3000°C.\n(c) Position: $v = +6.0\\text{ cm}$ (formed 6 cm behind the mirror); Magnification: $m = +3.0$ (erect and magnified 3 times).",
    steps: [
      "1. Part (a): Bulb placed at Focus F -> reflected rays emerge parallel to principal axis (1M).",
      "2. Part (b): Parallel sun rays converge at Focus F, concentrating extreme heat energy (1M).",
      "3. Part (c) Calculation:\n   - Given: $f = -3\\text{ cm}$, $u = -2\\text{ cm}$ (dentist mirror).\n   - $\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = \\frac{1}{-3} - \\frac{1}{-2} = -\\frac{1}{3} + \\frac{1}{2} = \\frac{1}{6} \\implies v = +6.0\\text{ cm}$.\n   - Magnification: $m = -\\frac{v}{u} = -\\frac{+6}{-2} = +3.0$.\n   - Nature: Virtual, erect, and magnified 3× (2M)."
    ],
    explanation: "At u < f, a concave mirror forms a magnified virtual image behind the mirror, perfect for dental diagnosis.",
    formula: "\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}, \\quad m = -\\frac{v}{u}",
    examinerNote: "Award 1 mark for (a), 1 mark for (b), and 2 marks for step-by-step calculation in (c).",
    source: "CBSE Board 2024 / NCERT Section 9.2.2"
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
      "1. Part (a): Convert focal lengths to metres:\n   $f_1 = +20\\text{ cm} = +0.2\\text{ m} \\implies P_1 = \\frac{1}{+0.2} = +5.0\\text{ D}$.\n   $f_2 = -50\\text{ cm} = -0.5\\text{ m} \\implies P_2 = \\frac{1}{-0.5} = -2.0\\text{ D}$.",
      "2. Part (b): Net power $P = P_1 + P_2 = +5.0 + (-2.0) = +3.0\\text{ D}$.\n   Net focal length $F = \\frac{1}{P} = \\frac{1}{3}\\text{ m} \\approx +0.333\\text{ m} = +33.33\\text{ cm}$.\n   Since $P > 0$ and $F > 0$, the combination behaves as a CONVERGING lens.",
      "3. Part (c) Lens Formula Calculation:\n   Given: $u = -30\\text{ cm}$, $f = +20\\text{ cm}$, $h = +3\\text{ cm}$.\n   $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} + \\frac{1}{u} = \\frac{1}{20} + \\frac{1}{-30} = \\frac{3 - 2}{60} = \\frac{1}{60} \\implies v = +60\\text{ cm}$.\n   Magnification $m = \\frac{v}{u} = \\frac{60}{-30} = -2$.\n   Image height $h' = m \\times h = -2 \\times 3 = -6\\text{ cm}$.\n   Nature: Real, inverted, and magnified."
    ],
    explanation: "Combined lens power equals algebraic sum of individual powers. Real image is formed 60 cm behind the lens with height -6 cm.",
    formula: "P = P_1 + P_2, \\quad \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}, \\quad m = \\frac{v}{u} = \\frac{h'}{h}",
    examinerNote: "Converting focal length to metres before calculating dioptre power is essential.",
    source: "CBSE Board 2023 / 2024 Case Study Sample"
  },
  {
    id: "sci_c9_q35",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 4,
    type: "Case Study",
    question: "Case Study: When a narrow beam of light passes through a rectangular glass slab with parallel faces, it undergoes refraction twice—first at the air-glass boundary and then at the glass-air boundary. The ray shifts laterally without changing its original angular direction.\n\n(a) [1M] State the mathematical relation proving that the emergent ray is parallel to the incident ray.\n(b) [1M] What is meant by 'lateral displacement' of light through a glass slab?\n(c) [2M] State any three physical factors on which the magnitude of lateral displacement depends.",
    answer: "(a) At first surface: $\\frac{\\sin i}{\\sin r} = \\frac{n_g}{n_a}$. At second surface: $\\frac{\\sin r}{\\sin e} = \\frac{n_a}{n_g}$. Multiplying yields $\\frac{\\sin i}{\\sin e} = 1 \\implies \\angle i = \\angle e$. Hence incident and emergent rays are strictly parallel.\n(b) Lateral displacement is the perpendicular distance between the original path of the incident ray (extended forward) and the emergent ray.\n(c) Factors affecting lateral displacement (any three):\n1. Thickness of the glass slab (directly proportional; thicker slab = greater displacement).\n2. Angle of incidence (larger $\\angle i$ = greater lateral displacement).\n3. Refractive index of glass (higher optical density = greater refraction and displacement).\n4. Wavelength of light (inversely proportional; violet light displaces more than red light).",
    steps: [
      "1. Part (a): Derive $\\angle i = \\angle e$ using Snell's law at both parallel interfaces (1M).",
      "2. Part (b): Define lateral displacement as the perpendicular separation between incident path and emergent ray (1M).",
      "3. Part (c): List three factors: slab thickness, incident angle, refractive index of glass (2M)."
    ],
    explanation: "Because opposing faces are parallel, the bending towards the normal upon entering glass is exactly counteracted by the bending away from the normal upon exiting into air.",
    formula: "\\angle i = \\angle e, \\quad \\text{Lateral Shift } d = \\frac{t \\sin(i - r)}{\\cos r}",
    examinerNote: "Ensure 'perpendicular distance' is explicitly used when defining lateral displacement.",
    source: "CBSE Sample Paper 2026 / Arihant All In One"
  },

  // ==========================================
  // ADDITIONAL MASTERCLASS PRACTICE (Questions 29-33)
  // ==========================================
  {
    id: "sci_c9_q29",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 2,
    type: "VSA",
    question: "Under what specific condition does a convex lens form a virtual, erect, and magnified image? State the position of the object and name two optical instruments that exploit this condition.",
    answer: "1. Specific Condition: The object must be placed between the Optical Centre (O) and the Principal Focus (F₁) of the convex lens ($u < f$).\n2. Position of Object: Within the focal length ($0 < u < f$).\n3. Two Optical Instruments: (i) Simple Microscope (Magnifying Glass used by watchmakers and jewellers), (ii) Eyepiece of a compound microscope or astronomical telescope.",
    steps: [
      "1. State condition: Object distance $u < f$ (between optical centre O and focus F₁).",
      "2. Describe image: Virtual, erect, magnified, formed on the same side as the object.",
      "3. List applications: Simple magnifying glass, watchmaker's eye loupe."
    ],
    explanation: "When $u < f$, the refracted rays diverge on the transmission side. When produced backwards, they appear to intersect behind the object, forming an erect and magnified virtual image ($m > +1$).",
    formula: "u < f \\implies m > +1 \\text{ (Virtual and Magnified)}",
    examinerNote: "This is the ONLY case where a convex lens behaves as a magnifier for direct human vision.",
    source: "NCERT Class 10 Section 9.3.5 / Board 2024"
  },
  {
    id: "sci_c9_q30",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 2,
    type: "VSA",
    question: "A ray of light enters from air into a transparent liquid medium of absolute refractive index 1.50. If the speed of light in vacuum is 3 × 10⁸ m/s, calculate the speed of light in the liquid. State whether the ray bends towards or away from the normal upon entry.",
    answer: "1. Speed of light in liquid: $v = 2.0 \\times 10^8\\text{ m/s}$.\n2. Direction of Bending: The ray bends **towards the normal** because the liquid is optically denser than air ($n = 1.50 > 1.00$).",
    steps: [
      "1. Given: Absolute refractive index $n = 1.50 = 3/2$, speed in air $c = 3 \\times 10^8\\text{ m/s}$.",
      "2. Formula: $n = \\frac{c}{v} \\implies v = \\frac{c}{n} = \\frac{3 \\times 10^8}{1.50} = 2.0 \\times 10^8\\text{ m/s}$.",
      "3. Bending direction: Since the liquid medium is optically denser than air ($n > 1$), light slows down, causing the ray to bend TOWARDS the normal ($r < i$)."
    ],
    explanation: "Refractive index represents the ratio of the speed of light in vacuum to that in the medium. Moving into an optically denser medium reduces velocity and bends the path towards the normal.",
    formula: "n = \\frac{c}{v} \\implies v = \\frac{c}{n}, \\quad r < i",
    examinerNote: "Ensure the unit 'm/s' is written with the final numerical value.",
    source: "CBSE Board 2023 / NCERT In-Text Q2"
  },
  {
    id: "sci_c9_q31",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 3,
    type: "SA",
    question: "An object 5.0 cm in height is placed at a distance of 30 cm in front of a convex mirror of radius of curvature 40 cm. Find the position of the image, its nature, and its height. (Show complete step-by-step calculations with Cartesian signs).",
    answer: "1. Position: $v = +12.0\\text{ cm}$ (formed 12 cm behind the convex mirror).\n2. Nature: Virtual and Erect.\n3. Size: Image height $h' = +2.0\\text{ cm}$ (diminished).",
    steps: [
      "1. Given: Object height $h = +5.0\\text{ cm}$, Object distance $u = -30\\text{ cm}$.",
      "2. Radius of curvature $R = +40\\text{ cm} \\implies$ Focal length $f = +\\frac{R}{2} = +\\frac{40}{2} = +20\\text{ cm}$.",
      "3. Mirror formula: $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u}$.",
      "4. $\\frac{1}{v} = \\frac{1}{+20} - \\frac{1}{-30} = \\frac{1}{20} + \\frac{1}{30} = \\frac{3 + 2}{60} = \\frac{5}{60} = \\frac{1}{12} \\implies v = +12.0\\text{ cm}$.",
      "5. Magnification: $m = -\\frac{v}{u} = -\\frac{+12}{-30} = +\\frac{2}{5} = +0.4$.",
      "6. Height of image: $h' = m \\times h = (+0.4) \\times 5.0\\text{ cm} = +2.0\\text{ cm}$.",
      "7. Conclusion: The image is virtual, erect, and diminished ($h' = 2.0\\text{ cm}$)."
    ],
    explanation: "Convex mirrors always have positive focal lengths and always produce virtual, erect images behind the mirror ($v > 0$) with magnification $0 < m < 1$.",
    formula: "f = \\frac{R}{2}, \\quad \\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}, \\quad m = -\\frac{v}{u} = \\frac{h'}{h}",
    examinerNote: "Common error: Giving f a negative sign. Convex mirrors always have positive focal length (+20 cm).",
    source: "CBSE Board Examination (3 Marks) / NCERT Exercise Q14"
  },
  {
    id: "sci_c9_q32",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 3,
    type: "SA",
    question: "A concave lens has a focal length of 15 cm. At what distance should an object be placed from the lens so that it forms an image at 10 cm from the lens? Also, calculate the linear magnification produced by the lens.",
    answer: "1. Object Distance: $u = -30\\text{ cm}$ (placed 30 cm in front of the concave lens).\n2. Linear Magnification: $m = +\\frac{1}{3} \\approx +0.33$ (virtual, erect, diminished).",
    steps: [
      "1. Given: Concave lens has negative focal length: $f = -15\\text{ cm}$.",
      "2. A concave lens always forms a virtual image on the same side as the object: $v = -10\\text{ cm}$.",
      "3. Lens formula: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{u} = \\frac{1}{v} - \\frac{1}{f}$.",
      "4. $\\frac{1}{u} = \\frac{1}{-10} - \\frac{1}{-15} = -\\frac{1}{10} + \\frac{1}{15} = \\frac{-3 + 2}{30} = -\\frac{1}{30} \\implies u = -30\\text{ cm}$.",
      "5. Magnification for lens: $m = \\frac{v}{u} = \\frac{-10}{-30} = +\\frac{1}{3} \\approx +0.33$.",
      "6. The positive sign confirms the image is virtual and erect, diminished to one-third of the object's size."
    ],
    explanation: "For a concave lens, both focal length ($f$) and image distance ($v$) are always negative according to New Cartesian Sign Convention.",
    formula: "\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}, \\quad m = \\frac{v}{u}",
    examinerNote: "Students often forget that concave lenses have $v = -10\\text{ cm}$. Using $+10\\text{ cm}$ leads to incorrect calculation.",
    source: "NCERT Chapter 9 Solved Example 9.4 / CBSE Board PYQ"
  },
  {
    id: "sci_c9_q33",
    chapter: 9,
    chapterName: "Light — Reflection and Refraction",
    marks: 3,
    type: "SA",
    question: "A straight pencil partially immersed in a glass tumbler of water appears bent and displaced at the water surface when viewed obliquely. (a) Explain this phenomenon using the principles of refraction. (b) If water is replaced with a liquid of higher optical density like turpentine oil (refractive index 1.47), will the apparent bend increase or decrease? Explain.",
    answer: "(a) Principle of Refraction: Light rays from the immersed tip of the pencil travel from optically denser water into optically rarer air, bending away from the normal. To the observer's eye, the refracted rays appear to diverge from a higher virtual position, creating the optical illusion of an elevated, bent pencil at the interface.\n(b) In turpentine oil ($n = 1.47 > n_{\\text{water}} = 1.33$), the apparent bend will **INCREASE**. A higher refractive index causes a greater velocity reduction in the liquid, resulting in a larger angular deviation away from the normal upon emergence into air.",
    steps: [
      "1. Part (a): Explain refraction from denser water into rarer air bending away from the normal, elevating the virtual image of the submerged tip.",
      "2. Part (b): Compare optical densities: $n_{\\text{turpentine}} = 1.47 > n_{\\text{water}} = 1.33$.",
      "3. Greater refractive index means larger speed change, causing greater refraction and increased apparent displacement."
    ],
    explanation: "The degree of bending depends directly on the optical density difference between the two media.",
    formula: "n = \\frac{\\sin i}{\\sin r} = \\frac{c}{v}",
    examinerNote: "Make sure to state that rays bend 'away from the normal' when leaving the liquid into air.",
    source: "CBSE Board 2024 / NCERT Activity 9.7"
  }
];
