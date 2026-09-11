import type { ScienceChapterConcept } from "./types";

export const SCI_CH9_CONCEPT: ScienceChapterConcept = {
  chapterNo: 9,
  title: "Light — Reflection and Refraction",
  discipline: "Physics",
  weightage: "9–10 Marks (Board Highest Priority)",
  oneLiner: "Light bounces off mirrors (reflection, curved mirrors: 1/v + 1/u = 1/f) and bends when changing medium (refraction, Snell's Law: n₁ sin θ₁ = n₂ sin θ₂; lenses: same mirror formula with sign convention).",
  analogyTitle: "The Mirror's Echo & The Straw in Water Illusion",
  analogyContent: `**Reflection** is like an ECHO for light. When you shout in a tunnel, sound bounces back — that's an echo. When light hits a mirror, it bounces back — that's reflection. The mirror law says the bounce is perfectly predictable: the angle you shine the light at equals the angle it bounces back!

**Refraction** is why a straw in a glass of water looks BENT 🥤. Light travels at different speeds in different materials — fast in air, slower in glass, even slower in water. When light enters water at an angle, it slows down and BENDS. Your eye/brain assumes light always travels straight, so it "sees" the straw in the wrong position!

Lenses use this bending to make things look bigger (magnification) or help people with poor vision see clearly.`,
  sections: [
    {
      id: "reflection",
      label: "1. Reflection of Light & Mirrors",
      heading: "Laws of Reflection + Plane Mirror + Curved Mirrors (Concave & Convex)",
      subheading: "Sign Convention + Mirror Formula + Magnification + Image Formation",
      explanation: `**LAWS OF REFLECTION (Two Laws):**
1. The incident ray, reflected ray, and normal (perpendicular to mirror surface) all lie in the **same plane**
2. **Angle of incidence (∠i) = Angle of reflection (∠r)** (measured from the normal, NOT the surface!)

**PLANE MIRROR IMAGES — 5 Properties:**
1. Virtual (cannot be formed on a screen)
2. Erect (upright)
3. Same size as the object (magnification = 1)
4. Laterally inverted (left↔right swapped)
5. Image distance = Object distance (behind mirror)

**CURVED MIRRORS — Terms:**
- **Pole (P):** Centre of mirror surface
- **Centre of Curvature (C):** Centre of the sphere the mirror is part of
- **Radius of Curvature (R):** Distance from pole to centre of curvature
- **Focus (F):** Point where parallel rays converge (concave) or appear to diverge from (convex)
- **Focal length (f):** Distance from pole to focus = **R/2** → $f = \\dfrac{R}{2}$
- **Principal axis:** Line through P, F, and C

**CONCAVE MIRROR:** Reflecting surface curves INWARD (like a spoon's inner surface 🥄)
- Converges light rays
- Can form REAL and VIRTUAL images depending on object position

**CONVEX MIRROR:** Reflecting surface curves OUTWARD (like a spoon's outer surface)
- ALWAYS diverges light rays
- ALWAYS forms virtual, erect, diminished images
- Used as: Rear-view mirrors (wide field of view), security mirrors in shops

**IMAGE FORMATION BY CONCAVE MIRROR (6 positions):**

| Object position | Image position | Image nature | Size |
|----------------|----------------|-------------|------|
| Beyond C | Between F and C | Real, inverted | Diminished |
| At C | At C | Real, inverted | Same size |
| Between C and F | Beyond C | Real, inverted | Enlarged |
| At F | At infinity | Real, inverted | Highly enlarged |
| Between F and P | Behind mirror | Virtual, erect | Enlarged |
| At infinity | At F | Real, inverted | Highly diminished (point image) |

**Uses of Concave Mirror:**
- Makeup/shaving mirror (object between F and P → virtual, magnified, erect image)
- Headlight reflectors, searchlights (bulb at F → parallel beam out)
- Solar furnaces (concentrate sunlight at F)
- Doctor's headlamp/ENT examination (parallel beam)

**SIGN CONVENTION (New Cartesian):**
- Object always placed on the LEFT side (incident light travels left to right)
- All distances measured from the **Pole (P)**
- Distances in the direction of incident light = **POSITIVE (+)**
- Distances opposite to incident light direction = **NEGATIVE (−)**
- Heights above principal axis = **POSITIVE**
- Heights below principal axis = **NEGATIVE**

For CONCAVE mirror: focal length (f) = **NEGATIVE** (F is on same side as object → in direction opposite to incident light? No — F is in front of concave mirror on the same side as the object, which is in the negative direction from incident light). Actually: f = −ve for concave, f = +ve for convex.`,
      formulasOrKeyPoints: [
        {
          title: "Mirror Formula & Magnification",
          content: `**Mirror Formula:**
$$\\dfrac{1}{v} + \\dfrac{1}{u} = \\dfrac{1}{f}$$

Where:
- $v$ = image distance (from pole)
- $u$ = object distance (from pole)
- $f$ = focal length

**Remember:** $f = \\dfrac{R}{2}$ (focal length = half of radius of curvature)

**Magnification:**
$$m = \\dfrac{\\text{Height of image}}{\\text{Height of object}} = \\dfrac{h'}{h} = -\\dfrac{v}{u}$$

| Sign of m | Image type |
|-----------|-----------|
| $m > 0$ (positive) | Virtual, erect |
| $m < 0$ (negative) | Real, inverted |
| $|m| > 1$ | Enlarged |
| $|m| < 1$ | Diminished |
| $|m| = 1$ | Same size |

**Example:** Object at u = −30 cm, concave mirror f = −15 cm
$$\\dfrac{1}{v} = \\dfrac{1}{f} - \\dfrac{1}{u} = \\dfrac{1}{-15} - \\dfrac{1}{-30} = \\dfrac{-2+1}{30} = \\dfrac{-1}{30}$$
$$v = -30 \\text{ cm (real, same side as object)}$$
$$m = -\\dfrac{v}{u} = -\\dfrac{-30}{-30} = -1 \\text{ (real, inverted, same size)}$$`,
          note: "Always write the sign convention explicitly at the start of mirror/lens numerical answers. State: 'Using sign convention: u = −30 cm (object on left), f = −15 cm (concave mirror)'. Missing this step loses presentation marks."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Apply sign convention BEFORE substituting",
          action: "Identify the type of mirror. Assign negative signs to object distance (u always negative — object always on left). Assign f: concave = negative, convex = positive.",
          proTip: "Write: u = −_ cm, f = −_ cm (concave) on your answer sheet before any calculation. This shows the examiner you know sign convention."
        },
        {
          stepNo: 2,
          title: "Use Mirror Formula",
          action: "Substitute into 1/v + 1/u = 1/f → rearrange to find 1/v → calculate v → calculate m = −v/u.",
          proTip: "After calculating v, write its physical meaning: 'v = +20 cm → image is behind the mirror → virtual' OR 'v = −20 cm → image is in front of mirror → real'."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing the mirror formula as 1/f = 1/v - 1/u (subtracting instead of adding).",
          correction: "The correct mirror formula is **1/v + 1/u = 1/f** — always ADDING. The formula 1/f = 1/v - 1/u is rearranged as 1/v = 1/f - 1/u which is equivalent, but writing 1/v + 1/u = 1/f prevents sign confusion."
        }
      ]
    },
    {
      id: "refraction",
      label: "2. Refraction of Light & Lenses",
      heading: "Snell's Law, Total Internal Reflection & Lens Formula",
      subheading: "Refractive Index + Snell's Law + TIR + Lens Formula + Power",
      explanation: `**REFRACTION:** Bending of light when it passes from one medium to another (due to change in speed).

**CAUSE:** Speed of light changes when entering a denser medium (light slows down in glass/water compared to air).

**LAWS OF REFRACTION:**
1. Incident ray, refracted ray, and normal all lie in the same plane
2. **Snell's Law:** $n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2$ 

Where $n_1, n_2$ = refractive indices of medium 1 and 2; $\\theta_1, \\theta_2$ = angles of incidence and refraction from normal.

**REFRACTIVE INDEX (n):**
$$n = \\dfrac{\\text{Speed of light in vacuum}}{\\text{Speed of light in medium}} = \\dfrac{c}{v}$$

$$n = \\dfrac{c}{v} \\approx \\dfrac{3 \\times 10^8 \\text{ m/s}}{v \\text{ in medium}}$$

| Medium | Refractive Index |
|--------|----------------|
| Vacuum/Air | 1.0 (reference) |
| Water | 1.33 |
| Glass (crown) | 1.52 |
| Diamond | 2.42 (highest!) |
| Ice | 1.31 |

*Higher n → slower light speed → more bending → optically denser*

**TOTAL INTERNAL REFLECTION (TIR):**
When light goes from denser (glass) to rarer (air) medium AND angle of incidence EXCEEDS the **critical angle (C)**, light is completely reflected back into the denser medium — NO refraction!
$$\\sin C = \\dfrac{1}{n}$$ (for glass to air; n = refractive index of glass)
For diamond: C = 24.4° → any light entering at >24.4° is totally reflected → brilliant sparkle! ✨
**Applications:** Optical fibres (TIR keeps light signal inside the fibre for kilometers!), mirage (desert), endoscopes.

---

**LENSES:**
**CONVEX LENS (Converging):** Thicker in middle, converges light. Focal length = +ve. Also called "biconvex" or "converging lens".
**CONCAVE LENS (Diverging):** Thinner in middle, diverges light. Focal length = −ve. Also called "biconcave" or "diverging lens".

**LENS FORMULA (same form as mirror formula):**
$$\\dfrac{1}{v} - \\dfrac{1}{u} = \\dfrac{1}{f}$$
(Note: For lenses it's 1/v − 1/u, but use the same sign convention!)

**Magnification by Lens:**
$$m = \\dfrac{v}{u}$$

**Power of a Lens:**
$$P = \\dfrac{1}{f \\text{ (in metres)}}$$
Unit: **Dioptre (D)** → $P = +2\\text{D}$ means $f = +0.5\\text{ m}$ (convex); $P = -3\\text{D}$ means $f = -0.33\\text{ m}$ (concave)

**Image Formation by Convex Lens (6 positions):**
| Object position | Image position | Nature |
|----------------|----------------|--------|
| Beyond 2F | Between F and 2F | Real, inverted, diminished |
| At 2F | At 2F | Real, inverted, same size |
| Between 2F and F | Beyond 2F | Real, inverted, enlarged |
| At F | At infinity | Real, inverted, highly enlarged |
| Between F and O | Same side as object | Virtual, erect, enlarged |
| At infinity | At F | Real, inverted, point image |

**Convex lens uses:** Magnifying glass, camera, eye (crystalline lens), spectacles for hypermetropia (+power)
**Concave lens uses:** Spectacles for myopia (−power), peepholes`,
      formulasOrKeyPoints: [
        {
          title: "Eye Defects and Correction",
          content: `| Defect | Common Name | Cause | Correction |
|--------|-----------|-------|------------|
| **Myopia** | Near-sightedness | Image forms in front of retina (too long eyeball or strong lens) | Concave lens (diverging, −ve power) |
| **Hypermetropia** | Far-sightedness | Image forms behind retina (too short eyeball or weak lens) | Convex lens (converging, +ve power) |
| **Presbyopia** | Old-age sight | Ciliary muscles weaken, crystalline lens loses elasticity | Bifocal lens (both concave + convex) |
| **Astigmatism** | Uneven cornea | Cylindrical (toric) lenses |  |

**The Human Eye:**
- **Cornea:** First refracting surface (contributes most refraction, ~70%)
- **Aqueous humour:** Fluid between cornea and lens
- **Iris:** Coloured part; controls pupil size (aperture of eye)
- **Pupil:** Hole in iris; dilates in dim light, constricts in bright light
- **Crystalline lens:** Changes shape (accommodation) for near/far focus via ciliary muscles
- **Vitreous humour:** Gel-like fluid in main eyeball cavity
- **Retina:** Light-sensitive layer with photoreceptors (rods for dim light/black-white; cones for colour/bright light)
- **Fovea/Macula:** Point of sharpest vision (most cones)
- **Optic nerve:** Carries signals to brain`,
          note: "POWER OF COMBINATION of lenses in contact: P = P₁ + P₂ + P₃ + ... This is why spectacle lenses have powers like −2.5D or +1.75D written on them. The total refracting power of the eye is about +60D!"
        }
      ],
      examinerTraps: [
        {
          trap: "Using the mirror formula (1/v + 1/u = 1/f) for lenses.",
          correction: "For LENSES: 1/v − 1/u = 1/f (SUBTRACTION). For MIRRORS: 1/v + 1/u = 1/f (ADDITION). This is the most common calculation error in Board exams. Remember: Lens = subtract; Mirror = add."
        },
        {
          trap: "Saying a concave lens is used to correct hypermetropia (farsightedness).",
          correction: "HYPERMETROPIA = image behind retina = lens needs to converge MORE = use CONVEX (positive power) lens. MYOPIA = image in front of retina = lens needs to diverge = use CONCAVE (negative power) lens. Memory trick: My-opia needs My-nus (−) power lens."
        }
      ]
    }
  ]
};
