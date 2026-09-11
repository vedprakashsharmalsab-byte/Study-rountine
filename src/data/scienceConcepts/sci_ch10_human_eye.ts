import type { ScienceChapterConcept } from "./types";

export const SCI_CH10_CONCEPT: ScienceChapterConcept = {
  chapterNo: 10,
  title: "The Human Eye and the Colourful World",
  discipline: "Physics",
  weightage: "4–5 Marks (Board Important)",
  oneLiner: "The eye uses a flexible lens (accommodation) to focus on near/far objects; atmospheric refraction causes twinkling of stars; scattering of light explains the blue sky and red sunset.",
  analogyTitle: "Your Eye — The World's Best Camera",
  analogyContent: `Your eye is the most sophisticated **camera** 📷 ever built. It has an **auto-focus lens** (crystalline lens) that reshapes itself in milliseconds, an **automatic aperture** (pupil) that opens wide in dim rooms and narrows in bright sunlight, and a **curved film** (retina) with over 100 million sensors!

The blue sky and red sunsets? That's the atmosphere acting like a **prism and scattering machine** — scattering blue light in all directions (so we see blue sky) and letting red light pass straight through at sunset when light travels through more atmosphere.

And why do stars twinkle but planets don't? Stars are so far away they're like tiny point sources — even small atmospheric trembling shifts their light. Planets are closer, so they appear as tiny discs — turbulence averages out and they glow steadily.`,
  sections: [
    {
      id: "human_eye",
      label: "1. The Human Eye — Structure and Function",
      heading: "Accommodation, Defects of Vision & their Corrections",
      subheading: "Eye Parts + Accommodation + Myopia + Hypermetropia + Presbyopia",
      explanation: `**STRUCTURE OF THE HUMAN EYE:**

| Part | Function |
|------|---------|
| **Cornea** | Transparent front surface; provides most refraction (~70%); no blood vessels (gets O₂ from tears) |
| **Iris** | Coloured part; controls size of pupil |
| **Pupil** | Opening in iris; dilates (widens) in dim light, constricts in bright light |
| **Crystalline Lens** | Biconvex, flexible lens; fine-tunes focus |
| **Ciliary muscles** | Contract → lens becomes more convex (round) for near vision; Relax → lens flattens for far vision |
| **Aqueous humour** | Watery fluid between cornea and lens; maintains eye pressure |
| **Vitreous humour** | Jelly-like fluid behind lens; maintains eyeball shape |
| **Retina** | Light-sensitive layer; contains rods (dim light, B&W) and cones (bright light, colour) |
| **Fovea (Yellow spot)** | Region of sharpest vision; maximum cone density |
| **Blind spot** | Where optic nerve exits; no photoreceptors → no vision here! |
| **Optic nerve** | Carries electrical signals from retina to brain |

**ACCOMMODATION:**
The ability of the eye to adjust its focal length (by changing the shape of the crystalline lens) to clearly see objects at different distances.
- **Near object:** Ciliary muscles CONTRACT → lens becomes MORE curved/convex → shorter focal length
- **Far object:** Ciliary muscles RELAX → lens becomes LESS curved/flat → longer focal length

**NEAR POINT:** The closest point at which the eye can see clearly without strain.
- Normal healthy eye: **25 cm** (also called Least Distance of Distinct Vision, LDDV)

**FAR POINT:** The farthest point at which the eye can see clearly.
- Normal healthy eye: **Infinity (∞)**

**DEFECTS OF VISION:**

**1. MYOPIA (Near-sightedness / Short-sightedness):**
- Far objects appear blurry; near objects clear
- Cause: Eyeball too long OR lens too convex → image forms IN FRONT of retina
- Far point: Less than infinity (e.g., only up to 2m)
- Correction: **Concave (diverging) lens** shifts image back onto retina

**2. HYPERMETROPIA (Far-sightedness / Long-sightedness):**
- Near objects appear blurry; far objects may be clear
- Cause: Eyeball too short OR lens too flat → image forms BEHIND retina
- Near point: More than 25 cm
- Correction: **Convex (converging) lens** shifts image onto retina

**3. PRESBYOPIA (Old-age sight):**
- Both near and far vision affected
- Cause: Ciliary muscles weaken AND crystalline lens loses elasticity with age
- Near point recedes beyond 25 cm; far point also affected
- Correction: **Bifocal lenses** (upper half concave for far; lower half convex for near)

**4. ASTIGMATISM:**
- Unequal curvature of cornea → different points focused at different distances
- Correction: **Cylindrical (toric) lenses**`,
      formulasOrKeyPoints: [
        {
          title: "Calculating Corrective Lens Power",
          content: `**For Myopia:**
If far point = $d$ cm, the lens must create a virtual image at $d$ cm from a distant object.
$$P_{\\text{myopia}} = -\\dfrac{100}{d_{\\text{cm}}} \\text{ D} = -\\dfrac{1}{d_{\\text{m}}} \\text{ D}$$

*Example:* Far point = 2 m → $P = -\\dfrac{1}{2} = -0.5$ D concave lens

**For Hypermetropia:**
Near point = $d$ cm. Lens must form a virtual image at $d$ cm of an object at 25 cm.
$$\\dfrac{1}{f} = \\dfrac{1}{v} - \\dfrac{1}{u} = \\dfrac{1}{-d} - \\dfrac{1}{-25}$$

*Example:* Near point = 1 m (100 cm):
$$\\dfrac{1}{f} = \\dfrac{1}{-100} - \\dfrac{1}{-25} = \\dfrac{-1+4}{100} = \\dfrac{3}{100}$$
$$P = \\dfrac{1}{f_{\\text{m}}} = \\dfrac{100}{33.3} \\approx +3 \\text{ D (convex)}$$`,
          note: "In MYOPIA correction problems, u = infinity (object at infinity), image formed at far point (v = −far point distance). These numerical problems appear in 3M Board questions."
        }
      ],
      examinerTraps: [
        {
          trap: "Saying myopia is corrected using a convex lens.",
          correction: "MYOPIA uses CONCAVE (diverging, negative power) lens. The concave lens diverges the parallel rays from infinity so they appear to come from the far point — which the myopic eye CAN focus on. Using a convex lens would make myopia WORSE by bringing the image even further in front of the retina."
        }
      ]
    },
    {
      id: "dispersion_scattering",
      label: "2. Dispersion of Light, Atmospheric Refraction & Scattering",
      heading: "Prism Rainbow, Twinkling Stars, Blue Sky & Red Sunsets",
      subheading: "Dispersion + VIBGYOR + Atmospheric Refraction + Tyndall Effect",
      explanation: `**DISPERSION OF LIGHT:**
When white light passes through a glass prism, it splits into its component colours — **VIBGYOR**.
$$\\text{White Light} \\xrightarrow{\\text{Prism}} \\underbrace{\\text{V I B G Y O R}}_{\\text{Violet, Indigo, Blue, Green, Yellow, Orange, Red}}$$

**Why does this happen?**
Different colours have different wavelengths → travel at slightly different speeds in glass → different refractive indices → bend by different amounts!
- VIOLET: Highest refractive index, bends the MOST, shortest wavelength (~380 nm)
- RED: Lowest refractive index, bends the LEAST, longest wavelength (~700 nm)

**RAINBOW:** Natural dispersion! Sunlight is dispersed by water droplets in the atmosphere after rain. The droplet acts like a tiny prism+mirror — refracts light in, reflects at the back, refracts out → spectrum. Red at top, Violet at bottom.

---

**ATMOSPHERIC REFRACTION:**
Earth's atmosphere has layers of different densities and temperatures → continuously varying refractive index → light bends as it passes through.

**Effects:**
1. **Twinkling of stars (scintillation):** Stars are point sources (very far away). Their light bends through varying atmospheric layers → appears to come from slightly different directions every instant → twinkles (position and brightness fluctuate).

2. **Why planets DON'T twinkle:** Planets are much closer → appear as tiny discs (not points). Even if one part of the disc shifts, other parts compensate → net effect averages out → steady glow.

3. **Early sunrise / Late sunset:** Atmospheric refraction bends sunlight toward Earth BEFORE the sun actually rises above horizon and AFTER it goes below. We see the sun **~2 minutes earlier** than we would without atmosphere! The total day is thus lengthened by ~4 minutes due to refraction.

4. **Stars appear higher than actual position:** Light from stars near horizon bends downward through atmosphere → we see the star at an apparently higher position than its actual geometric position.

---

**SCATTERING OF LIGHT — TYNDALL EFFECT:**
When light passes through a medium with very small suspended particles, the particles scatter light in all directions. This is called the **Tyndall Effect**.

*Example:* Shine a torch through a glass of diluted milk — you see the beam of light scattered sideways. This is Tyndall effect!

**RAYLEIGH SCATTERING:** The intensity of scattered light $\\propto \\dfrac{1}{\\lambda^4}$ (inversely proportional to the 4th power of wavelength!)
→ **Shorter wavelength = MORE scattering!**
→ BLUE light (short wavelength ~450 nm) scatters 5.5× MORE than RED light (long wavelength ~700 nm)

**WHY IS THE SKY BLUE?**
- Sunlight enters atmosphere
- Blue light (short wavelength) is scattered 5.5× more than red/orange by air molecules
- Scattered blue light reaches our eyes from all directions → sky appears blue!
- But near the sun, all colours mix → sun appears white/yellowish

**WHY ARE SUNSETS/SUNRISES RED?**
- At sunrise/sunset, sunlight travels through a much LONGER path of atmosphere (tangentially)
- Blue and violet light are scattered AWAY many times before reaching us
- Only RED and ORANGE (long wavelengths, scatter less) survive the long journey → reach our eyes
- Sun and sky appear orange-red at sunrise/sunset!

**WHY DOES DANGER SIGNAL USE RED LIGHT?**
- Red light has the longest wavelength → scatters LEAST → travels the longest distance without being scattered
- Can be seen from far away even in fog/dust conditions
- Green for go and red for stop — red for maximum visibility in hazardous conditions!`,
      examinerTraps: [
        {
          trap: "Saying planets twinkle like stars.",
          correction: "STARS TWINKLE because they are point sources (very far away) — small atmospheric fluctuations shift their entire apparent image. PLANETS DO NOT TWINKLE (they appear as tiny discs due to being closer) — the twinkling of different parts of the disc cancels out. This is a classic 1M Board MCQ."
        },
        {
          trap: "Saying violet is the most deviated colour in a prism, so the sky should be violet.",
          correction: "Violet IS scattered more than blue, but our eyes are much MORE SENSITIVE to blue than to violet! Also, sunlight has more blue component than violet. The combination of scattering + eye sensitivity makes the sky appear BLUE, not violet."
        }
      ]
    }
  ]
};
