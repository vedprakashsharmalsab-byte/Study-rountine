import type { ScienceChapterConcept } from "./types";

export const SCI_CH10_CONCEPT: ScienceChapterConcept = {
  chapterNo: 10,
  title: "The Human Eye and the Colourful World",
  discipline: "Physics",
  weightage: "4–6 Marks (Core Board Physics)",
  oneLiner: "The human eye focuses via accommodation; vision defects (myopia, hypermetropia, presbyopia) are corrected using concave, convex, or bifocal lenses; triangular prisms disperse white light into VIBGYOR; atmospheric refraction explains twinkling stars and early sunrises; Rayleigh scattering explains the blue sky and red sunsets.",
  analogyTitle: "Nature's Biological Camera & Atmospheric Prism 👁️🌈",
  analogyContent: `Imagine your eye as the **ultimate self-adjusting digital camera**:

- **Aperture & Shutter (Iris & Pupil):** Constricts in dazzling sunlight to protect sensor cells, dilates wide in twilight to capture faint photons.
- **Autofocus Lens (Crystalline Lens & Ciliary Muscles):** Contracts to fatten the lens for reading tiny text at 25 cm, relaxes to flatten the lens for distant mountain views.
- **Sensor Array (Retina):** Over 125 million photoreceptor rods and cones converting photons into electrical neural signals.

Meanwhile, Earth's atmosphere acts as an **infinite optical prism and scattering laboratory** — continuously bending starlight to make stars twinkle, stretching daylight by 4 minutes, and scattering blue photons across the sky while letting long red waves illuminate sunsets!`,
  sections: [
    {
      id: "human_eye_and_defects",
      label: "1. The Human Eye, Accommodation & Defects of Vision",
      heading: "Eye Anatomy, Power of Accommodation, Myopia, Hypermetropia & Presbyopia",
      subheading: "Anatomy Table + Ciliary Muscle Action + Ray Diagrams for Defects & Corrective Power Numericals",
      explanation: `**1. STRUCTURE & OPTICAL FUNCTIONS OF THE HUMAN EYE:**

| Component | Optical & Biological Function |
|-----------|--------------------------------|
| **Cornea** | Transparent, curved outer membrane. **Provides roughly 70–75% of the total optical convergence (refraction)** of incoming light rays. |
| **Iris** | Dark, muscular diaphragm situated behind the cornea. Controls the diameter and size of the pupil to regulate light intake; determines eye color. |
| **Pupil** | Central circular aperture in the iris. Regulates the amount of light entering the eye (constricts in bright illumination; dilates in dim light). |
| **Crystalline Lens** | Transparent, flexible biconvex fibrous jelly-like lens. Provides fine adjustable focusing to form sharp inverted images on the retina. |
| **Ciliary Muscles** | Attached to the lens via suspensory ligaments. **Alter the curvature and focal length of the crystalline lens** during accommodation. |
| **Retina** | Delicate inner light-sensitive membrane functioning as the eye's screen. Contains millions of photoreceptors: **Rods** (sensitive to dim light intensity) and **Cones** (sensitive to bright light and color). |
| **Yellow Spot (Fovea / Macula)** | Central region of retina directly on optical axis with highest concentration of cones; point of sharpest vision. |
| **Blind Spot** | Junction where optic nerve departs for brain. Lacks rods and cones; insensitive to light. |
| **Optic Nerve** | Bundles sensory nerve fibers to transmit electrical impulses from retina to the visual cortex of the brain. |
| **Aqueous & Vitreous Humour** | **Aqueous Humour:** Saline fluid between cornea and lens providing nutrients.<br>**Vitreous Humour:** Transparent jelly between lens and retina maintaining spherical eyeball shape and pressure. |

---

**2. POWER OF ACCOMMODATION:**
The ability of the human eye to adjust the focal length of its crystalline lens so as to focus both nearby and distant objects distinctly on the retina.
- **Viewing Distant Objects ($u \\to \\infty$):**
  - Ciliary muscles **relax** $\\implies$ Lens is pulled thin and flatter $\\implies$ Curvature decreases $\\implies$ Focal length increases ($f \\approx 2.5\\text{ cm}$).
- **Viewing Nearby Objects ($u = 25\\text{ cm}$):**
  - Ciliary muscles **contract** $\\implies$ Lens thickens and becomes more convex $\\implies$ Curvature increases $\\implies$ Focal length decreases.
- **Near Point (Least Distance of Distinct Vision, LDDV):** The minimum distance at which an object can be seen most distinctly without strain. For a normal young adult eye, **$d = 25\\text{ cm}$**.
- **Far Point:** The farthest distance up to which the eye can see objects clearly. For a normal eye, **Far Point = Infinity ($\\infty$)**.
- **Range of Normal Vision:** From **25 cm to Infinity**.

---

**3. DEFECTS OF VISION AND THEIR CORRECTION (Board Blueprint Guaranteed 3M/5M):**

### A. MYOPIA (Near-Sightedness / Short-Sightedness)
- **Symptom:** A person can see nearby objects distinctly, but cannot see distant objects clearly. The far point shifts from infinity to a finite distance $d$ (e.g., 80 cm, 1.5 m, 2 m).
- **Causes (NCERT 2 Points):**
  1. Excessive curvature of the eye lens (lens too thick/converging).
  2. Elongation of the eyeball (distance between lens and retina is too long).
- **Optical Defect:** Parallel rays from a distant object converge to form an image **IN FRONT OF THE RETINA**.
- **Correction:** A **Concave (diverging) lens** of suitable focal length is used.
  - The concave lens diverges incoming parallel rays so they appear to originate from the person's defective far point $d$.
- **Corrective Lens Formula:**
  $$u = -\\infty, \\quad v = -d \\implies \\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} = \\frac{1}{-d} - 0 \\implies \\mathbf{f = -d}$$
  $$\\mathbf{P = \\frac{1}{f(\\text{in m})} = -\\frac{1}{d(\\text{in m})}} \\quad (\\text{Negative Power})$$

---

### B. HYPERMETROPIA (Far-Sightedness / Long-Sightedness)
- **Symptom:** A person can see distant objects distinctly, but cannot see nearby objects clearly (e.g., must hold a reading book beyond 50 cm or 1 m). The near point recedes beyond 25 cm ($d' > 25\\text{ cm}$).
- **Causes (NCERT 2 Points):**
  1. Focal length of the eye lens is too long (lens too thin/flat).
  2. Eyeball has become too small (distance between lens and retina is too short).
- **Optical Defect:** Rays from a nearby object placed at 25 cm converge to an image point **BEHIND THE RETINA**.
- **Correction:** A **Convex (converging) lens** of suitable focal length is used.
  - The convex lens converges the diverging rays from 25 cm so they appear to emanate from the person's actual near point $d'$.
- **Corrective Lens Formula:**
  $$u = -25\\text{ cm} = -0.25\\text{ m}, \\quad v = -d'$$
  $$\\frac{1}{f} = \\frac{1}{-d'} - \\frac{1}{-25} = \\frac{1}{25} - \\frac{1}{d'} \\implies \\mathbf{P > 0} \\quad (\\text{Positive Power})$$

---

### C. PRESBYOPIA (Old-Age Hypermetropia)
- **Symptom:** In elderly persons, reading without glasses becomes difficult as the near point recedes.
- **Causes:** Gradual weakening of the ciliary muscles AND diminishing flexibility (hardening) of the crystalline lens with age.
- **Correction:** Convex reading lenses.
- **Bifocal Lenses:** When an elderly person suffers simultaneously from both myopia and hypermetropia, they require bifocal lenses:
  - **Upper portion:** **Concave lens** (for distant vision).
  - **Lower portion:** **Convex lens** (for reading / near vision).

---

### D. CATARACT
- **Definition:** Development of a cloudy, milky, and opaque crystalline lens due to protein clumping in old age.
- **Consequence:** Causes partial or complete loss of vision.
- **Treatment:** Cannot be corrected by spectacle lenses. Restored via **Cataract Surgery** where the opaque lens is removed and an artificial **Intraocular Lens (IOL)** is implanted.`,
      formulasOrKeyPoints: [
        {
          title: "Myopia vs Hypermetropia Formulas",
          content: `$$\\begin{aligned}
\\textbf{Myopia Correction:} & \\quad u = -\\infty, \\; v = -d \\implies f = -d \\implies P = -\\frac{1}{d(\\text{m})} \\\\
\\textbf{Hypermetropia Correction:} & \\quad u = -0.25\\text{ m}, \\; v = -d' \\implies \\frac{1}{f} = \\frac{1}{-d'} + \\frac{1}{0.25} \\\\
& \\quad P = 4 - \\frac{1}{d'(\\text{m})} \\quad (P > 0)
\\end{aligned}$$`,
          note: "Always state whether the corrective lens is concave or convex alongside numerical values."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing causes of Myopia and Hypermetropia.",
          correction: "Myopia = Eyeball TOO LONG or curvature TOO HIGH (over-converging). Hypermetropia = Eyeball TOO SHORT or focal length TOO LONG (under-converging). Remembering 'Myopia = Long eyeball' prevents errors."
        }
      ]
    },
    {
      id: "dispersion_and_rainbow",
      label: "2. Refraction through Prism, Dispersion & Rainbow Formation",
      heading: "Prism Deviation Formula, VIBGYOR Spectrum & Raindrop Mechanics",
      subheading: "A + D = i + e + Newton's Recombination Experiment + 3-Step Rainbow Formation",
      explanation: `**1. REFRACTION OF LIGHT THROUGH A TRIANGULAR GLASS PRISM:**
A triangular glass prism has two triangular bases and three rectangular lateral refracting faces inclined at an angle called the **Angle of the Prism ($A$)**.
- When a monochromatic ray passes through a prism:
  - At first face: Bends towards normal ($i > r_1$).
  - At second face: Bends away from normal ($r_2 < e$).
- **Angle of Deviation ($D$ or $\\delta$):** The angle between the direction of the incident ray and the emergent ray.
- **Fundamental Prism Relation:**
  $$\\mathbf{A + D = i + e}$$
  where:
  - $A$ = Angle of the prism (typically $60^\\circ$ for an equilateral prism)
  - $D$ = Angle of deviation
  - $i$ = Angle of incidence
  - $e$ = Angle of emergence

---

**2. DISPERSION OF WHITE LIGHT (VIBGYOR):**
The splitting of white light into its constituent band of seven colors upon passing through a prism is called **Dispersion**.
- The band of colored components is called a **Spectrum**.
- Sequence from base to apex: **V - I - B - G - Y - O - R** (Violet, Indigo, Blue, Green, Yellow, Orange, Red).
- **Cause of Dispersion:**
  - White light is a composite of different wavelengths (from $\\lambda_{\\text{violet}} \\approx 400\\text{ nm}$ to $\\lambda_{\\text{red}} \\approx 700\\text{ nm}$).
  - While all colors travel at identical speed in vacuum ($c = 3 \\times 10^8\\text{ m/s}$), **they travel at different speeds in glass**.
  - Red light has the longest wavelength $\\implies$ highest speed in glass $\\implies$ lowest refractive index ($n_{\\text{red}}$) $\\implies$ **bends the least**.
  - Violet light has the shortest wavelength $\\implies$ slowest speed in glass $\\implies$ highest refractive index ($n_{\\text{violet}}$) $\\implies$ **bends the most**.

---

**3. SIR ISAAC NEWTON'S RECOMBINATION EXPERIMENT:**
Newton showed that the prism itself does not create colors, but merely separates colors existing in white light.
- **Experimental Setup:**
  - An upright glass prism $P_1$ disperses white sunlight into a spectrum.
  - A second identical glass prism $P_2$ is placed in an **inverted position** adjacent to $P_1$.
- **Result:**
  - The second inverted prism recombines all seven colored rays.
  - A single beam of **pure white light emerges** from the opposite face of $P_2$!
- **Conclusion:** White sunlight consists of seven constituent spectral colors.

---

**4. RAINBOW FORMATION (Natural Atmospheric Dispersion):**
A rainbow is a natural spectrum produced by tiny water droplets suspended in the atmosphere after rain.
- **Three Essential Optical Steps Inside Every Raindrop:**
  1. **Refraction and Dispersion at Entry:** Sunlight enters the spherical raindrop and refracts, splitting into VIBGYOR colors.
  2. **Total Internal Reflection:** The separated colored rays strike the curved inner back surface of the water droplet and reflect internally.
  3. **Refraction upon Exiting:** As rays emerge back into air, they refract once more, fanning out into the observer's eyes.
- **Observer Condition:** A rainbow is always formed in the direction **OPPOSITE to that of the Sun**. The observer must stand with their **back towards the Sun** to view the rainbow.
- Red light emerges at an angle of **$42^\\circ$** (top of rainbow); Violet light emerges at **$40^\\circ$** (inner/bottom of rainbow).`,
      formulasOrKeyPoints: [
        {
          title: "Prism & Rainbow Key Physics",
          content: `$$A + D = i + e$$
$$n_{\\text{violet}} > n_{\\text{indigo}} > \\dots > n_{\\text{red}} \\implies D_{\\text{violet}} > D_{\\text{red}}$$
$$\\text{Rainbow Steps: } \\text{Refraction} + \\text{Dispersion} \\to \\text{Internal Reflection} \\to \\text{Refraction}$$`,
          note: "In a rainbow, red is on the outside (top) because it emerges at 42°, and violet is on the inside (bottom) because it emerges at 40°."
        }
      ],
      examinerTraps: [
        {
          trap: "Stating that total internal reflection alone forms a rainbow.",
          correction: "All THREE distinct optical phenomena occur: (1) Refraction with dispersion at entry, (2) Internal reflection at the back wall, and (3) Refraction upon exit. Missing any of these steps loses marks in 3-mark Board answers."
        }
      ]
    },
    {
      id: "atmospheric_refraction_scattering",
      label: "3. Atmospheric Refraction & Light Scattering",
      heading: "Twinkling of Stars, 4-Min Daylight Extension, Tyndall Effect & Blue Sky",
      subheading: "Atmospheric Layers + Stars vs Planets + Early Sunrise + Rayleigh Scattering Formula",
      explanation: `**1. ATMOSPHERIC REFRACTION:**
The refraction of light caused by Earth's atmosphere, where physical conditions (temperature, density, and refractive index) vary continuously with altitude.
- Low-altitude air is cold and dense $\\implies$ optically denser.
- High-altitude air is warm and rare $\\implies$ optically rarer.
- Light entering from space continuously bends **towards the normal** (downward) as it approaches Earth's surface.

---

**2. PHENOMENA CAUSED BY ATMOSPHERIC REFRACTION:**

### A. Twinkling of Stars (Scintillation)
- Stars are located at immense interstellar distances and act as **point-sized sources of light**.
- As starlight travels through turbulent, moving atmospheric layers of fluctuating temperature and density, its optical path is refracted randomly from millisecond to millisecond.
- The amount of starlight entering the pupil fluctuates rapidly in intensity and apparent position $\\implies$ **the star appears to twinkle**.

### B. Why Planets DO NOT Twinkle (Classic Board 2-Marker)
- Planets are much closer to Earth than stars and subtend a finite measurable angular diameter.
- A planet acts as an **extended source of light** (a collection of an infinite number of point-sized light sources).
- While individual point-sources fluctuate, the variations in intensity from different points of the planetary disc cancel each other out on average.
- The net variation in total light entering the eye is essentially zero $\\implies$ **planets shine with a steady, unvarying glow**.

### C. Advanced Sunrise and Delayed Sunset
- Sunlight entering the atmosphere bends downward towards the observer.
- When the sun is physically about **$0.5^\\circ$ below the horizon**, atmospheric refraction bends the rays so that the apparent position of the sun appears above the horizon.
- This creates an **apparent early sunrise by about 2 minutes**, and keeps the sun visible for **about 2 minutes after actual sunset**.
- **Net Effect:** The apparent duration of daylight on Earth is lengthened by approximately **4 minutes every day** ($2\\text{ min} + 2\\text{ min}$).
- The apparent flattening of the sun's disc at sunrise and sunset is also caused by unequal refraction across the top and bottom of the solar disc.

---

**3. SCATTERING OF LIGHT & TYNDALL EFFECT:**

- **Tyndall Effect:** The scattering of a beam of light by colloidal or fine suspended particles in a medium, illuminating the path of the beam.
  - *Daily Examples:* Sunlight streaming through smoke/dust in a dark room; beams of light cutting through a misty forest canopy.

- **Rayleigh's Law of Scattering:**
  When the diameter of scattering particles ($a$) is much smaller than the wavelength of light ($a \\ll \\lambda$):
  $$\\mathbf{I_{\\text{scattered}} \\propto \\frac{1}{\\lambda^4}}$$
  The intensity of scattered light is inversely proportional to the **fourth power of its wavelength**.
  - Blue light ($\\lambda \\approx 450\\text{ nm}$) scatters nearly **$(700/450)^4 \\approx 5.5\\text{ times more}$** than red light ($\\lambda \\approx 700\\text{ nm}$).

---

**4. BOARD PHENOMENA EXPLAINED BY LIGHT SCATTERING:**

1. **Why is the clear sky Blue?**
   - Sunlight encounters gas molecules ($N_2, O_2$) smaller than the wavelength of visible light.
   - Molecules scatter the shorter blue/violet wavelengths far more intensely than longer red wavelengths.
   - The scattered blue light enters our eyes from all directions in the atmosphere.
   - *(Why blue and not violet? Our eyes are much more sensitive to blue light, and solar radiation contains far more blue photons than violet).*

2. **Why does the Sun appear Red at Sunrise and Sunset?**
   - Near the horizon, sunlight travels a much **longer path through the thickest atmospheric layers** to reach the observer.
   - Shorter wavelengths (blue and violet) are almost completely scattered away and eliminated from the direct line of sight.
   - Only the longest wavelengths (red and orange), which scatter least, survive the long distance and reach the observer's eyes directly.

3. **Why are Danger Signal Lights strictly Red?**
   - Red light has the longest wavelength among visible colors ($\\approx 700\\text{ nm}$).
   - By Rayleigh's law, red light suffers the **least scattering** when passing through fog, dust, or smoke.
   - Consequently, red signals remain sharp and visible over the greatest distance in hazardous weather.

4. **Why does the Sky appear Black to an Astronaut in Space?**
   - Space and the Moon have no atmosphere containing gas molecules or dust.
   - In the absence of atmospheric particles, **no scattering of light occurs**.
   - No scattered light enters the astronaut's eyes, so the surrounding space appears completely dark and black even when the sun is blazing.`,
      formulasOrKeyPoints: [
        {
          title: "Scattering Summary & Formulas",
          content: `$$I_{\\text{scattered}} \\propto \\frac{1}{\\lambda^4} \\quad (\\text{for } a \\ll \\lambda)$$
$$\\Delta t_{\\text{daylight extension}} = 2\\text{ min (sunrise)} + 2\\text{ min (sunset)} = 4\\text{ minutes}$$
$$\\text{No Atmosphere} \\implies \\text{Zero Scattering} \\implies \\text{Black Sky in Space}$$`,
          note: "Atmospheric refraction causes twinkling and early sunrise. Light scattering causes the blue sky, red sunset, and visibility of danger signals."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing atmospheric refraction with scattering in exam explanations.",
          correction: "Twinkling of stars and early sunrise are caused by ATMOSPHERIC REFRACTION (bending due to varying optical density). Blue sky, red sunset, and white clouds are caused by SCATTERING OF LIGHT (redirection by particles). Mingling these two earns zero marks."
        }
      ]
    }
  ]
};
