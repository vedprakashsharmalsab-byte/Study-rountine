import type { ScienceChapterConcept } from "./types";

export const SCI_CH9_CONCEPT: ScienceChapterConcept = {
  chapterNo: 9,
  title: "Light — Reflection and Refraction",
  discipline: "Physics",
  weightage: "9–10 Marks (Highest Board Physics Weightage)",
  oneLiner: "Light travels in straight lines; reflects predictably from mirrors (1/v + 1/u = 1/f; m = -v/u); refracts at boundaries obeying Snell's Law (n = c/v; n₂₁ = v₁/v₂); forms real or virtual images through lenses (1/v - 1/u = 1/f; m = +v/u; P = 1/f).",
  analogyTitle: "The Optical Highway & Wave Speed Braking 🚗💡",
  analogyContent: `Imagine light as a **high-speed car driving on smooth asphalt**:

**Reflection (Bouncing Off the Guardrail):**
When the car strikes a mirror guardrail, it rebounds with precision: the incident angle matches the rebound angle exactly ($\\angle i = \\angle r$).

**Refraction (Hitting the Sand Patch):**
When a car drives diagonally from smooth highway (air) onto a thick sand patch (glass or water), the front wheel that hits the sand first **slows down immediately**, while the other wheel continues at high speed. This mismatch causes the car to **swivel and pivot towards the normal**! 

When exiting back onto asphalt, the first wheel out speeds up, swinging the car **away from the normal**. Refraction is simply the natural swiveling caused by a change in wave propagation speed!`,
  sections: [
    {
      id: "reflection_and_mirrors",
      label: "1. Reflection of Light & Spherical Mirrors",
      heading: "Laws of Reflection, Curved Mirrors, Ray Rules & Mirror Formula",
      subheading: "Concave vs Convex Mirrors + 6 Image Positions + Sign Conventions + Formula & Magnification",
      explanation: `**1. LAWS OF REFLECTION (Universal for all reflecting surfaces):**
1. The incident ray, the reflected ray, and the normal to the reflecting surface at the point of incidence all lie in the **same plane**.
2. **Angle of incidence ($\\angle i$) = Angle of reflection ($\\angle r$)**. (Both angles measured from the normal!).

- **Plane Mirror Characteristics:** Virtual and erect, image size = object size ($m = +1$), image distance = object distance ($v = -u$), and **laterally inverted** (left and right interchanged).

---

**2. SPHERICAL MIRRORS — TERMINOLOGY:**
A spherical mirror is a curved reflecting surface that forms part of a hollow glass sphere.
- **Pole ($P$):** The geometric centre of the reflecting surface of the spherical mirror.
- **Centre of Curvature ($C$):** The centre of the sphere of which the mirror forms a part.
- **Radius of Curvature ($R$):** The distance from the pole to the centre of curvature ($PC = R$).
- **Principal Focus ($F$):** The point on the principal axis where rays parallel to the principal axis converge (concave) or appear to diverge from (convex) after reflection.
- **Focal Length ($f$):** Distance between pole and principal focus ($PF = f$).
- **Relationship:** For mirrors of small aperture:
  $$f = \\frac{R}{2} \\iff R = 2f$$
- **Aperture:** The diameter of the reflecting surface of the spherical mirror.

---

**3. FOUR STANDARD RAYS FOR MIRROR RAY DIAGRAMS:**
To construct a ray diagram, any two of the following four rays are used:
1. **Parallel Ray:** A ray parallel to the principal axis passes through the principal focus $F$ after reflection (in concave mirror) or appears to diverge from $F$ (in convex mirror).
2. **Focal Ray:** A ray passing through $F$ (or directed towards $F$) emerges parallel to the principal axis after reflection.
3. **Radial Ray:** A ray passing through $C$ (or directed towards $C$) reflects back along the **same path** (since it strikes normally, $\\angle i = 0^\\circ \\implies \\angle r = 0^\\circ$).
4. **Oblique Ray:** A ray incident obliquely at the pole $P$ reflects obliquely such that $\\angle i = \\angle r$ with the principal axis.

---

**4. IMAGE FORMATION BY CONCAVE MIRROR (6 Positions):**

| Object Position | Image Position | Nature of Image | Relative Size | Practical Application |
|-----------------|----------------|-----------------|---------------|-----------------------|
| **At Infinity** | At Focus $F$ | Real and Inverted | Highly diminished (point-sized) | Solar furnaces, radio telescopes |
| **Beyond $C$** | Between $F$ and $C$ | Real and Inverted | Diminished | Optical test benches |
| **At $C$** | At $C$ | Real and Inverted | Same size as object ($m = -1$) | Inverting systems, photocopiers |
| **Between $C$ and $F$** | Beyond $C$ | Real and Inverted | Magnified ($|m| > 1$) | Film projectors, floodlights |
| **At $F$** | At Infinity | Real and Inverted | Infinitely large (highly magnified) | Searchlights, car headlights, torches |
| **Between $F$ and $P$** | Behind the Mirror | **Virtual and Erect** | **Magnified ($m > +1$)** | **Shaving mirror, dentist's inspection mirror, makeup mirror** |

---

**5. IMAGE FORMATION BY CONVEX MIRROR:**
Convex mirrors **always diverge light** and produce **virtual, erect, and diminished images** regardless of object distance!
1. **At Infinity:** Image formed at focus $F$ behind the mirror; virtual, erect, highly diminished (point-sized).
2. **Between Infinity and Pole:** Image formed behind mirror between $P$ and $F$; **virtual, erect, diminished ($0 < m < +1$)**.
- **Crucial Application:** Used as **rear-view (wing) mirrors in automobiles** because:
  - They always produce an erect (upright) image.
  - Because they curve outwards, they provide a **much wider field of view** than a plane mirror, enabling the driver to monitor a wide panoramic traffic zone.

---

**6. NEW CARTESIAN SIGN CONVENTION FOR MIRRORS:**
- The object is always placed to the left of the mirror (light travels left to right).
- All distances parallel to the principal axis are measured from the **Pole ($P$)**.
- Distances in the direction of incident light (+x axis) are **Positive (+)**.
- Distances opposite to incident light (-x axis) are **Negative (-)**.
- Heights above the principal axis (+y axis) are **Positive (+)**.
- Heights below the principal axis (-y axis) are **Negative (-)**.

| Parameter | Concave Mirror | Convex Mirror |
|-----------|----------------|---------------|
| Object distance ($u$) | Always **Negative (-)** | Always **Negative (-)** |
| Focal length ($f$) | Always **Negative (-)** | Always **Positive (+)** |
| Radius of curvature ($R$) | Always **Negative (-)** | Always **Positive (+)** |
| Image distance ($v$) | **Negative (-)** for Real; **Positive (+)** for Virtual | Always **Positive (+)** (always virtual) |

---

**7. MIRROR FORMULA & MAGNIFICATION:**
$$\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$$
$$\\text{Linear Magnification } m = \\frac{\\text{Height of Image }(h')}{\\text{Height of Object }(h)} = -\\frac{v}{u}$$

- **Sign of Magnification ($m$):**
  - If $m$ is **Negative (-)** $\\implies$ Real and Inverted image.
  - If $m$ is **Positive (+)** $\\implies$ Virtual and Erect image.
  - If $|m| > 1 \\implies$ Enlarged; if $|m| < 1 \\implies$ Diminished; if $|m| = 1 \\implies$ Same size.`,
      formulasOrKeyPoints: [
        {
          title: "Mirror Equations & Sign Rules",
          content: `$$\\mathbf{\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}} \\qquad \\mathbf{m = \\frac{h'}{h} = -\\frac{v}{u}}$$
$$\\text{Concave Mirror: } f < 0 \\qquad \\text{Convex Mirror: } f > 0 \\qquad \\text{Object: } u < 0$$`,
          note: "Never assign a sign to the unknown quantity you are calculating! Let the algebraic sign emerge naturally from the formula."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing the sign of magnification between mirrors and lenses.",
          correction: "For MIRRORS: m = -v/u (minus sign!). For LENSES: m = +v/u (plus sign!). Swapping this sign is the most frequent calculation blunder in board exams."
        },
        {
          trap: "Writing focal length of convex mirror as negative.",
          correction: "A convex mirror's focus lies BEHIND the reflecting surface (on the right). Hence, f is strictly POSITIVE (+). A concave mirror's focus lies in FRONT (on the left), so f is strictly NEGATIVE (-)."
        }
      ]
    },
    {
      id: "refraction_and_snell",
      label: "2. Refraction of Light & Glass Slab",
      heading: "Snell's Law, Refractive Indices & Rectangular Glass Slab",
      subheading: "Bending Mechanics + Snell's Ratio + Absolute vs Relative Index + Lateral Displacement",
      explanation: `**1. REFRACTION OF LIGHT:**
The phenomenon of bending of a ray of light when it passes obliquely from one transparent medium to another of different optical density.
- **Cause:** Light travels at different speeds in different media ($c = 3 \\times 10^8\\text{ m/s}$ in vacuum; $2.25 \\times 10^8\\text{ m/s}$ in water; $2 \\times 10^8\\text{ m/s}$ in glass).
- **Rules of Bending:**
  - **Rarer to Denser Medium:** Light slows down $\\implies$ bends **TOWARD the normal** ($i > r$).
  - **Denser to Rarer Medium:** Light speeds up $\\implies$ bends **AWAY from the normal** ($i < r$).
  - **Normal Incidence ($i = 0^\\circ$):** The ray passes straight without any angular deviation ($r = 0^\\circ$).

---

**2. LAWS OF REFRACTION (Snell's Law):**
1. The incident ray, the refracted ray, and the normal to the interface at the point of incidence all lie in the **same plane**.
2. **Snell's Law:** The ratio of the sine of angle of incidence to the sine of angle of refraction is constant for a given pair of media and given color/wavelength of light:
   $$\\frac{\\sin i}{\\sin r} = \\text{constant} = n_{21}$$
   where $n_{21}$ is the **refractive index of medium 2 with respect to medium 1**.

---

**3. ABSOLUTE & RELATIVE REFRACTIVE INDEX:**
- **Absolute Refractive Index ($n$ or $n_m$):** Refractive index of a medium with respect to vacuum (or air):
  $$n = \\frac{\\text{Speed of light in vacuum }(c)}{\\text{Speed of light in medium }(v)} = \\frac{c}{v}$$
  Since $c > v$ in all transparent media, $n > 1$ always!
  - Air: $n \\approx 1.0003$
  - Water: $n = 1.33 = \\frac{4}{3}$
  - Crown Glass: $n = 1.52 \\approx \\frac{3}{2}$
  - Diamond: $n = 2.42$ (highest optical density in NCERT table!)

- **Relative Refractive Index ($n_{21}$):**
  $$n_{21} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}$$
  $$n_{12} = \\frac{v_2}{v_1} = \\frac{n_1}{n_2} \\implies n_{12} = \\frac{1}{n_{21}} \\quad \\text{(Principle of Reversibility)}$$

- **Optical Density vs Mass Density:**
  - Optical density is the ability of a medium to refract light (related to speed of light).
  - It is **NOT** identical to mass density (mass per unit volume).
  - *NCERT Classic Example:* Kerosene has lower mass density than water (kerosene floats on water), but kerosene has a higher refractive index ($n = 1.44$) than water ($n = 1.33$). Hence, **kerosene is optically denser than water**!

---

**4. REFRACTION THROUGH A RECTANGULAR GLASS SLAB (Lateral Displacement):**
When a light ray passes through a rectangular glass slab:
1. At the first face (air $\\to$ glass): Ray bends towards normal ($i > r_1$).
2. At the second face (glass $\\to$ air): Ray bends away from normal by an identical amount ($r_2 < e$).
3. Because opposing faces are parallel:
   $$\\angle i = \\angle e \\quad (\\text{Angle of Incidence} = \\text{Angle of Emergence})$$
4. **The emergent ray is parallel to the incident ray**, but is shifted sideways.
5. **Lateral Displacement:** The perpendicular distance between the original incident path and the emergent ray.
   - **Factors affecting lateral displacement:**
     - Directly proportional to the **thickness** of the glass slab ($t$).
     - Directly proportional to the **angle of incidence** ($i$).
     - Directly proportional to the **refractive index** of the glass slab ($n$).`,
      formulasOrKeyPoints: [
        {
          title: "Refractive Index Master Formulas",
          content: `$$n = \\frac{c}{v} \\qquad n_{21} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1} \\qquad n_{12} = \\frac{1}{n_{21}}$$
$$\\text{Snell's Law: } n_1 \\sin i = n_2 \\sin r$$`,
          note: "Higher refractive index = lower speed of light = greater bending towards normal = optically denser."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing relative refractive index fraction order.",
          correction: "n₂₁ means refractive index of medium 2 with respect to medium 1 = v₁ / v₂ = n₂ / n₁. Notice that velocity v₁ is on top, but absolute index n₂ is on top! This flip trips up many students."
        }
      ]
    },
    {
      id: "lenses_and_power",
      label: "3. Spherical Lenses, Lens Formula & Power",
      heading: "Convex & Concave Lenses, Ray Rules, Lens Formula & Dioptres",
      subheading: "6 Convex Positions + Concave Divergence + Lens Formula + Magnification + Power Combinations",
      explanation: `**1. SPHERICAL LENSES:**
A transparent medium bound by two spherical refracting surfaces.
- **Convex Lens (Biconvex / Converging Lens):** Thicker at the middle than at the edges. Converges parallel rays to a real focus.
- **Concave Lens (Biconcave / Diverging Lens):** Thinner at the middle than at the edges. Diverges parallel rays as if originating from a virtual focus.
- **Optical Centre ($O$):** The central point of the lens through which a ray passes without suffering any angular deviation.
- **Principal Foci ($F_1, F_2$):** A lens has two foci, one on each side, equidistant from the optical centre.

---

**2. THREE STANDARD RAYS FOR LENSES:**
1. **Parallel Ray:** A ray parallel to the principal axis passes through principal focus $F_2$ after refraction (convex lens) or appears to diverge from focus $F_1$ (concave lens).
2. **Focal Ray:** A ray passing through $F_1$ (or directed towards $F_2$) emerges parallel to the principal axis after refraction.
3. **Central Ray:** A ray passing through the optical centre $O$ travels straight **without any deviation**.

---

**3. IMAGE FORMATION BY CONVEX LENS (6 Positions):**

| Object Position | Image Position | Nature of Image | Relative Size | Application |
|-----------------|----------------|-----------------|---------------|-------------|
| **At Infinity** | At Focus $F_2$ | Real and Inverted | Highly diminished (point-sized) | Burning glass, telescope objective |
| **Beyond $2F_1$** | Between $F_2$ and $2F_2$ | Real and Inverted | Diminished | Photographic camera lens |
| **At $2F_1$** | At $2F_2$ | Real and Inverted | Same size as object ($m = -1$) | Terrestrial inverting lens |
| **Between $F_1$ and $2F_1$** | Beyond $2F_2$ | Real and Inverted | Magnified ($|m| > 1$) | Slide projector, cinema projector |
| **At Focus $F_1$** | At Infinity | Real and Inverted | Infinitely large | Searchlights, collimators |
| **Between $F_1$ and $O$** | **Same side as object** | **Virtual and Erect** | **Magnified ($m > +1$)** | **Simple microscope, magnifying glass** |

---

**4. IMAGE FORMATION BY CONCAVE LENS:**
Concave lens **always forms virtual, erect, and diminished images** on the same side as the object:
1. **At Infinity:** Formed at focus $F_1$; virtual, erect, highly diminished (point-sized).
2. **Between Infinity and Optical Centre $O$:** Formed between focus $F_1$ and $O$; **virtual, erect, diminished ($0 < m < +1$)**.
- *Application:* Peepholes in doors, spectacle lenses for correcting myopia.

---

**5. LENS FORMULA & MAGNIFICATION:**
$$\\mathbf{\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}}$$
$$\\mathbf{m = \\frac{h'}{h} = +\\frac{v}{u}}$$

- **Sign Convention for Lenses:**
  - Object distance $u$: Always **Negative (-)**.
  - Convex lens focal length $f$: Always **Positive (+)**.
  - Concave lens focal length $f$: Always **Negative (-)**.
  - Real image distance $v$: **Positive (+)** (formed on opposite/right side).
  - Virtual image distance $v$: **Negative (-)** (formed on same/left side as object).

---

**6. POWER OF A LENS & COMBINATIONS:**
The power of a lens is the measure of its ability to converge or diverge light rays incident on it.
$$P = \\frac{1}{f(\\text{in metres})} \\iff P = \\frac{100}{f(\\text{in cm})}$$

- **SI Unit:** **Dioptre (D)** ($1\\text{ D} = 1\\text{ m}^{-1}$).
  - **Definition of 1 Dioptre:** 1 Dioptre is the power of a lens whose focal length is 1 metre.
- **Signs:**
  - Convex lens: Focal length is $+$, so **Power is Positive (+)** (e.g., $+2.0\\text{ D}$).
  - Concave lens: Focal length is $-$, so **Power is Negative (-)** (e.g., $-1.5\\text{ D}$).

- **Power of Combination of Thin Lenses in Contact:**
  When multiple thin lenses of powers $P_1, P_2, P_3, \\dots$ are placed in optical contact:
  $$P = P_1 + P_2 + P_3 + \\dots$$
  $$\\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2} + \\frac{1}{f_3} + \\dots$$
  - *Example:* A convex lens of $P_1 = +3.5\\text{ D}$ in contact with a concave lens of $P_2 = -1.5\\text{ D}$ produces net power $P = +3.5 - 1.5 = +2.0\\text{ D}$ (converging system of focal length $f = +0.5\\text{ m} = +50\\text{ cm}$).`,
      formulasOrKeyPoints: [
        {
          title: "Mirror Formula vs Lens Formula Contrast",
          content: `$$\\begin{array}{|l|c|c|}
\\hline
\\textbf{Feature} & \\textbf{Spherical Mirror} & \\textbf{Spherical Lens} \\\\
\\hline
\\text{Formula} & \\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} & \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f} \\\\
\\text{Magnification } m & -\\frac{v}{u} & +\\frac{v}{u} \\\\
\\text{Focus } f > 0 & \\text{Convex} & \\text{Convex} \\\\
\\text{Focus } f < 0 & \\text{Concave} & \\text{Concave} \\\\
\\text{Power } P & \\text{N/A (in Class 10)} & P = \\frac{1}{f(\\text{m})} \\\\
\\hline
\\end{array}$$`,
          note: "Notice the sign opposition: Mirrors have (+) in formula and (-) in magnification. Lenses have (-) in formula and (+) in magnification!"
        }
      ],
      examinerTraps: [
        {
          trap: "Substituting focal length in centimetres into the power formula.",
          correction: "If f = 20 cm, P is NOT 1/20 = 0.05 D! You must convert f to metres first: f = 0.2 m, so P = 1/0.2 = +5.0 D. Alternatively, use P = 100 / f(cm)."
        },
        {
          trap: "Mixing up real vs virtual image signs for lenses.",
          correction: "For a LENS: A real image is formed on the RIGHT side (opposite to object), so v is POSITIVE (+). A virtual image is formed on the LEFT side (same side as object), so v is NEGATIVE (-)."
        }
      ]
    }
  ]
};
