import type { ScienceChapterConcept } from "./types";

export const SCI_CH9_CONCEPT: ScienceChapterConcept = {
  chapterNo: 9,
  title: "Light — Reflection and Refraction",
  discipline: "Physics",
  weightage: "9–10 Marks (Highest Physics Weightage)",
  oneLiner: "Geometric optics governing the reflection of light by spherical mirrors and refraction across media governed by Snell's law, lens formulas, and optical power.",
  analogyTitle: "The Light-Bending Highway & Photon Marchers",
  analogyContent: `Imagine an army of soldiers marching in parallel rows:
1. **The Mirror Bounce (Reflection):** When the marchers hit a polished barrier at an angle, they ricochet symmetrically such that the incoming angle equals the outgoing angle.
2. **The Muddy Terrain Transition (Refraction):** When marching from smooth dry asphalt into thick mud at an angle, the side of the marching column that enters the mud first slows down before the other side. This differential deceleration causes the entire marching column to pivot and bend its heading toward the normal. When exiting back into asphalt, speed is regained, and the column bends away from the normal.`,
  sections: [
    {
      id: "reflection_and_mirrors",
      label: "1. Reflection of Light & Spherical Mirrors",
      heading: "Laws of Reflection, Curved Mirrors, Ray Rules & Mirror Formula",
      subheading: "Concave vs Convex Mirrors + 6 Image Positions + Sign Conventions + Formula & Magnification",
      explanation: `### Nature of Light & Laws of Reflection:
Light is an electromagnetic radiation that travels in straight lines in a homogeneous medium (**rectilinear propagation**).
- **First Law of Reflection:** The angle of incidence ($\\angle i$) is strictly equal to the angle of reflection ($\\angle r$): $\\angle i = \\angle r$.
- **Second Law of Reflection:** The incident ray, the reflected ray, and the normal to the reflecting surface at the point of incidence all lie in the **same plane**.
- *Note:* These laws apply to **all** reflecting surfaces, including plane and spherical curved surfaces.

---

### Spherical Mirrors:
A mirror whose reflecting surface forms part of a hollow sphere of glass:
1. **Concave Mirror (Converging Mirror):** Reflecting surface curves **inwards** toward the centre of curvature.
2. **Convex Mirror (Diverging Mirror):** Reflecting surface curves **outwards** away from the centre of curvature.

#### Fundamental Geometric Terms:
- **Pole ($P$):** The geometric centre of the reflecting surface of a spherical mirror.
- **Centre of Curvature ($C$):** The centre of the hollow sphere of glass of which the mirror forms a part.
- **Radius of Curvature ($R$):** The radius of the sphere of which the mirror forms a part ($PC = R$).
- **Principal Axis:** The straight line passing through the Pole and the Centre of Curvature.
- **Principal Focus ($F$):** Point on the principal axis where all rays parallel to the principal axis converge (in a concave mirror) or appear to diverge from (in a convex mirror) after reflection.
- **Focal Length ($f$):** Distance between the Pole and the Principal Focus ($PF = f$).
- **The Focal-Radius Relation:** For spherical mirrors of small aperture, the radius of curvature is twice the focal length:
  $$R = 2f \\iff f = \\frac{R}{2}$$

---

### The 4 Standard Ray Rules for Spherical Mirrors:
1. A ray parallel to the principal axis passes through the principal focus $F$ (concave) or appears to diverge from $F$ (convex) after reflection.
2. A ray passing through the principal focus $F$ (concave) or directed toward $F$ (convex) emerges **parallel to the principal axis** after reflection.
3. A ray passing through the centre of curvature $C$ retraces its path back along the same line (because it strikes normally at $\\angle i = 0^\\circ$).
4. A ray incident obliquely to the pole $P$ reflects obliquely such that $\\angle i = \\angle r$ relative to the principal axis.

---

### Complete 6 Image Formation Cases for Concave Mirrors:
1. **Object at Infinity:** Image formed **At Focus $F$**; Real, Inverted, Extremely diminished (point-sized) ($m \\ll -1$). *Application: Solar furnaces, astronomical reflecting telescopes.*
2. **Object Beyond $C$:** Image formed **Between $F$ and $C$**; Real, Inverted, Diminished ($|m| < 1$).
3. **Object at $C$:** Image formed **At $C$**; Real, Inverted, **Same size as object** ($m = -1$).
4. **Object Between $C$ and $F$:** Image formed **Beyond $C$**; Real, Inverted, Magnified ($|m| > 1$). *Application: Projectors.*
5. **Object at Focus $F$:** Image formed **At Infinity**; Real, Inverted, Highly enlarged ($m \\to -\\infty$). *Application: Torches, searchlights, automobile headlights (bulb placed at focus produces powerful parallel beam).*
6. **Object Between Pole $P$ and Focus $F$:** Image formed **Behind the Mirror**; **Virtual, Erect, Magnified** ($m > +1$). *Application: Shaving mirrors, makeup mirrors, dentist mirrors (examining teeth enlarged).*

---

### Image Formation by Convex Mirrors:
1. **Object at Infinity:** Image formed **At Focus $F$ behind the mirror**; Virtual, Erect, Highly diminished (point-sized).
2. **Object Anywhere Between Infinity and Pole $P$:** Image formed **Between $P$ and $F$ behind the mirror**; **Virtual, Erect, Diminished** ($0 < m < +1$).
- **Why Convex Mirrors are Used as Rear-View Mirrors in Vehicles (Board 2-Mark Favorite):**
  1. They **always** produce an erect (though diminished) image of objects behind the vehicle.
  2. Because they curve outward, they have a **much wider field of view** than a plane mirror, allowing the driver to see a larger portion of traffic.

---

### Concave Mirror Master Ray Tracing Summary:
| Object Position | Image Position | Relative Size | Nature | Practical Application |
| :--- | :--- | :--- | :--- | :--- |
| At Infinity | At Focus F | Highly diminished (point) | Real & Inverted | Solar concentrating furnace |
| Beyond C | Between F and C | Diminished | Real & Inverted | Optical reduction systems |
| At C | At C | Same size (m = -1) | Real & Inverted | Terrestrial inverting lenses |
| Between C and F | Beyond C | Magnified (|m| > 1) | Real & Inverted | Cinema projection optics |
| At Focus F | At Infinity | Infinitely large | Real & Inverted | Car headlights, searchlights |
| Between P and F | Behind mirror | Magnified (m > +1) | Virtual & Erect | Dentist mirror, shaving mirror |`
    },
    {
      id: "sign_conventions_and_formula",
      label: "2. Sign Conventions, Mirror Formula & Numericals Mastery",
      heading: "New Cartesian Sign Convention, Mirror Formula & Linear Magnification",
      subheading: "Sign Rules + 1/v + 1/u = 1/f + Magnification m = -v/u + Numerical Problem Strategy",
      explanation: `### New Cartesian Sign Convention:
In all mirror and lens calculations, the Pole ($P$) or Optical Centre ($O$) is taken as the origin $(0,0)$ on the coordinate axes:
1. The object is **always** placed to the left of the mirror, meaning incident light travels from left to right.
2. All distances parallel to the principal axis are measured from the **Pole ($P$)**.
3. Distances measured in the direction of incident light (to the right of Pole) are taken as **Positive ($+$)**.
4. Distances measured against the direction of incident light (to the left of Pole) are taken as **Negative ($-$)**.
5. Distances measured perpendicular to and above the principal axis ($+y$ axis) are taken as **Positive ($+$)**.
6. Distances measured perpendicular to and below the principal axis ($-y$ axis) are taken as **Negative ($-$)**.

#### Master Sign Table for Mirrors:
- **Object Distance ($u$):** Always **Negative ($-$)** for real objects.
- **Focal Length ($f$):**
  - For **Concave Mirror:** Always **Negative ($-$)** ($F$ lies in front).
  - For **Convex Mirror:** Always **Positive ($+$)** ($F$ lies behind).
- **Image Distance ($v$):**
  - Real and Inverted image (in front of mirror): **Negative ($-$)**.
  - Virtual and Erect image (behind mirror): **Positive ($+$)**.
- **Object Height ($h$):** Always **Positive ($+$)** (placed upright).
- **Image Height ($h'$):** Positive ($+$) for Virtual/Erect, Negative ($-$) for Real/Inverted.

---

### The Mirror Formula:
The mathematical relation linking object distance ($u$), image distance ($v$), and focal length ($f$):
$$\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$$

---

### Linear Magnification ($m$):
The ratio of the height of the image ($h'$) to the height of the object ($h$):
$$m = \\frac{\\text{Height of Image } (h')}{\\text{Height of Object } (h)} = -\\frac{v}{u}$$

#### Decoding the Physical Meaning of $m$:
- **Sign of $m$:**
  - If $m < 0$ (Negative): The image is **Real and Inverted**.
  - If $m > 0$ (Positive): The image is **Virtual and Erect**.
- **Magnitude of $|m|$:**
  - If $|m| > 1$: The image is **Magnified** (larger than object).
  - If $|m| = 1$: The image is of the **Same size** as the object.
  - If $|m| < 1$: The image is **Diminished** (smaller than object).

---

### Mirror Equations & Sign Rules:
| Optical Parameter | Concave Mirror | Convex Mirror | Calculation Rule |
| :--- | :--- | :--- | :--- |
| Object Distance (u) | Always Negative (-) | Always Negative (-) | Object always to the left |
| Focal Length (f) | Always Negative (-) | Always Positive (+) | f = R / 2 |
| Radius of Curvature (R) | Negative (-) | Positive (+) | R = 2f |
| Image Distance (v) Real | Negative (-) | Not Applicable | Formed in front of mirror |
| Image Distance (v) Virtual | Positive (+) | Always Positive (+) | Formed behind mirror |
| Magnification Formula | m = h'/h = -v/u | m = h'/h = -v/u | Include negative sign in mirror m |`
    },
    {
      id: "refraction_and_snell",
      label: "3. Refraction of Light, Snell's Law & Rectangular Glass Slab",
      heading: "Snell's Law, Refractive Indices & Rectangular Glass Slab",
      subheading: "Bending Mechanics + Snell's Ratio + Absolute vs Relative Index + Lateral Displacement",
      explanation: `### Refraction of Light:
The change in direction (bending) of a ray of light when it passes obliquely from one transparent optical medium into another transparent medium of different optical density.
- **Cause of Refraction:** Light travels at different speeds in different media. In vacuum, light travels at its maximum speed $c = 3 \\times 10^8\\text{ m/s}$. In water, it slows to $2.25 \\times 10^8\\text{ m/s}$, and in crown glass, to $2.0 \\times 10^8\\text{ m/s}$.

#### Laws of Refraction:
1. **First Law:** The incident ray, the refracted ray, and the normal to the interface of two transparent media at the point of incidence all lie in the **same plane**.
2. **Second Law (Snell's Law of Refraction):** The ratio of the sine of the angle of incidence to the sine of the angle of refraction is a **constant** for a given pair of media and for light of a given wavelength:
   $$\\frac{\\sin i}{\\sin r} = \\text{constant} = ^{1}n_2 = \\frac{n_2}{n_1}$$
   Where $^{1}n_2$ is the relative refractive index of medium 2 with respect to medium 1.

#### Direction of Bending:
- When a ray travels from an **optically rarer** to an **optically denser** medium (e.g. Air $\\to$ Glass), it **bends toward the normal** ($i > r$).
- When a ray travels from an **optically denser** to an **optically rarer** medium (e.g. Glass $\\to$ Air), it **bends away from the normal** ($i < r$).
- A ray incident **normally** ($\\angle i = 0^\\circ$) passes undeviated ($\\angle r = 0^\\circ$).

---

### Refraction through a Rectangular Glass Slab:
1. At the top air-glass interface, the ray bends toward the normal.
2. At the bottom glass-air interface, the ray bends away from the normal.
3. Because the two refracting faces are parallel, the angle of incidence at the first surface equals the angle of emergence at the second surface:
   $$\\angle i = \\angle e$$
4. Therefore, the emergent ray is **parallel** to the original incident ray.
5. **Lateral Displacement:** The perpendicular distance between the original incident path (extended) and the emergent ray is called **Lateral Displacement ($d$)**.
   - *Factors affecting Lateral Displacement:*
     1. Directly proportional to the **thickness** of the glass slab.
     2. Directly proportional to the **refractive index** of the slab material.
     3. Directly proportional to the **angle of incidence** ($\\angle i$).
     4. Inversely proportional to the **wavelength** of light (violet light experiences greater lateral displacement than red light).

---

### Absolute vs Relative Refractive Index:
- **Absolute Refractive Index ($n$ or $n_m$):** The ratio of the speed of light in vacuum ($c$) to the speed of light in the medium ($v$):
  $$n = \\frac{c}{v} = \\frac{3 \\times 10^8\\text{ m/s}}{v}$$
- **Relative Refractive Index ($^{1}n_2$):**
  $$^{1}n_2 = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}$$
  $$\\text{Reciprocal Rule: } ^{2}n_1 = \\frac{1}{^{1}n_2}$$

---

### Refractive Index Master Formulas:
| Concept | Mathematical Formula | Physical Interpretation | Example Calculation |
| :--- | :--- | :--- | :--- |
| Absolute Index (n) | n = c / v | Ratio of light speed in vacuum to medium | If v = 2x10^8 m/s, n = 3x10^8 / 2x10^8 = 1.50 |
| Relative Index (1n2) | 1n2 = v1 / v2 = n2 / n1 | Speed of light in med 1 divided by med 2 | w_n_g = n_g / n_w = 1.50 / 1.33 = 1.125 |
| Snell's Law | sin i / sin r = n2 / n1 | Constant ratio for given pair of media | n1 * sin i = n2 * sin r |
| Reciprocal Law | 2n1 = 1 / (1n2) | Reversing the direction of light | If a_n_g = 3/2, then g_n_a = 2/3 |`
    },
    {
      id: "lenses_and_power",
      label: "4. Spherical Lenses, Lens Formula & Power of a Lens",
      heading: "Convex & Concave Lenses, Ray Rules, Lens Formula & Dioptres",
      subheading: "6 Convex Positions + Concave Divergence + Lens Formula + Magnification + Power Combinations",
      explanation: `### Spherical Lenses:
A transparent optical material bounded by two surfaces, of which at least one surface is spherical:
1. **Convex Lens (Converging Lens):** Thicker at the middle and thinner at the edges. Converges parallel incident light rays to a real focus.
2. **Concave Lens (Diverging Lens):** Thinner at the middle and thicker at the edges. Diverges parallel incident light rays away from a virtual focus.

#### Geometric Centers & Ray Rules for Lenses:
- **Optical Centre ($O$):** The central point of a lens. A ray of light passing through the optical centre travels straight through **without suffering any deviation**.
- **Principal Focus ($F_1, F_2$):** Lenses possess two foci equidistant from $O$ on either side.
- **3 Standard Ray Rules:**
  1. A ray parallel to the principal axis passes through focus $F_2$ on the other side (convex) or appears to diverge from focus $F_1$ on the same side (concave).
  2. A ray passing through focus $F_1$ (convex) emerges parallel to the principal axis after refraction.
  3. A ray passing through the optical centre $O$ emerges without any angular deviation.

---

### Image Formation by Convex Lenses (6 Cases):
1. **Object at Infinity:** Image formed **At $F_2$**; Real, Inverted, Highly diminished (point-sized) ($m \\ll -1$).
2. **Object Beyond $2F_1$:** Image formed **Between $F_2$ and $2F_2$**; Real, Inverted, Diminished ($|m| < 1$). *Application: Camera.*
3. **Object at $2F_1$:** Image formed **At $2F_2$**; Real, Inverted, **Same size as object** ($m = -1$). *Application: Terrestrial photocopier.*
4. **Object Between $F_1$ and $2F_1$:** Image formed **Beyond $2F_2$**; Real, Inverted, Magnified ($|m| > 1$). *Application: Projector.*
5. **Object at Focus $F_1$:** Image formed **At Infinity**; Real, Inverted, Highly enlarged ($m \\to -\\infty$). *Application: Searchlight.*
6. **Object Between Optical Centre $O$ and Focus $F_1$:** Image formed **On the same side as object**; **Virtual, Erect, Magnified** ($m > +1$). *Application: Simple microscope / Reading magnifier.*

---

### Image Formation by Concave Lenses:
A concave lens **always** forms a **Virtual, Erect, and Diminished** image between the optical centre $O$ and the focus $F_1$, irrespective of the position of the object ($0 < m < +1$).

---

### The Lens Formula & Linear Magnification:
- **The Lens Formula:**
  $$\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$$
- **Linear Magnification ($m$):**
  $$m = \\frac{\\text{Height of Image } (h')}{\\text{Height of Object } (h)} = +\\frac{v}{u}$$

---

### Power of a Lens ($P$):
The degree of convergence or divergence of light rays achieved by a lens. It is quantitatively defined as the **reciprocal of its focal length in meters**:
$$P = \\frac{1}{f \\text{ (in meters)}} = \\frac{100}{f \\text{ (in cm)}}$$
- **SI Unit of Power:** **Dioptre (D)** ($1\\text{ D} = 1\\text{ m}^{-1}$).
- For a **Convex Lens:** Power is **Positive ($+P$)**.
- For a **Concave Lens:** Power is **Negative ($-P$)**.
- **Combination of Thin Lenses in Contact:**
  $$P_{\\text{net}} = P_1 + P_2 + P_3 + \\dots$$

---

### Mirror Formula vs Lens Formula Master Contrast:
| Optical Feature | Spherical Mirror System | Spherical Lens System |
| :--- | :--- | :--- |
| Fundamental Equation | 1/v + 1/u = 1/f (Plus sign) | 1/v - 1/u = 1/f (Minus sign) |
| Magnification Formula | m = h'/h = -v/u (Minus sign) | m = h'/h = +v/u (Plus sign) |
| Focal Length of Converging Element | Concave mirror: f is Negative (-) | Convex lens: f is Positive (+) |
| Focal Length of Diverging Element | Convex mirror: f is Positive (+) | Concave lens: f is Negative (-) |
| Virtual Image Location | Formed behind the mirror (v is +) | Formed on same side as object (v is -) |
| Power Equation | Not conventionally defined in dioptres | P = 1 / f(m) in Dioptres (D) |`
    }
  ]
};
