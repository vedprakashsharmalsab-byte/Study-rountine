import type { ScienceChapterConcept } from "./types";

export const SCI_CH9_CONCEPT: ScienceChapterConcept = {
  chapterNo: 9,
  title: "Light — Reflection and Refraction",
  discipline: "Physics",
  weightage: "9–10 Marks (Highest Physics Weightage)",
  oneLiner: "Puri geometric optics do fundamental principles par chalti hai: Spherical Mirrors se light ka bounce back hona (Reflection) aur transparent media ke interface par speed change hone se light ka bend hona (Refraction via Snell's Law & Lenses).",
  analogyTitle: "The Light-Bending Highway & Photon Marchers",
  analogyContent: `Light ke behaviour ko samajhne ke liye do simple visual analogies dimag mein baithao:

1. **The Polished Mirror Wall (Reflection):**
   Socho tum ek smooth marble floor par tennis ball fek rahe ho. Jis angle par ball floor se takrati hai ($\\angle i$), theek usi symmetrical angle par wo bounce hoke wapas uthti hai ($\\angle r$). Agar surface flat hai toh Plane Mirror, agar gufa ki tarah curved hai toh Concave Mirror, aur agar convex (bahar ubhra hua) hai toh Convex Mirror!

2. **The Muddy Highway Transition (Refraction & Snell's Law):**
   Imagine karo ek car smooth asphalt highway se achanak kachhi geeli mitti (mud) mein diagonally enter karti hai. Jo aage ka pehla pahiya (wheel) pehle mitti mein ghusega, wo turant slow down ho jayega, jabki doosra pahiya abhi bhi fast highway par hai! Is speed difference ki wajah se car automatically mud jayegi (bend towards the normal). Theek yahi light ke saath hota hai jab wo air se glass ya water mein enter karti hai!`,
  sections: [
    {
      id: "reflection_and_spherical_mirrors",
      label: "1. Reflection of Light & Spherical Mirrors",
      heading: "Laws of Reflection, Curved Mirror Anatomy & 4 Standard Ray Rules",
      subheading: "Concave (Gufa/Converging) vs Convex (Ubhar/Diverging) + Pole, Focus & Radius of Curvature (R = 2f)",
      explanation: `### Level 1: Reflection Ke 2 Universal Laws (Har Surface Par Valid!)

Jab light ray kisi polished reflecting surface se takra kar usi medium mein bounce back karti hai, use **Reflection of Light** kehte hain.

1. **First Law:** Angle of incidence ($\\angle i$) hamesha angle of reflection ($\\angle r$) ke barabar hota hai:
   $$\\angle i = \\angle r$$
2. **Second Law:** Incident ray, reflected ray, aur surface ke point of incidence par draw kiya gaya normal — teeno **ek hi plane mein** lie karte hain.

> 💡 **Important Board Note:** Ye dono laws sirf flat plane mirrors par hi nahi, balki **har spherical, curved, ya rough surface** par bhi $100\\%$ valid hote hain! Normal hamesha surface ke perpendicular hota hai (spherical mirror mein normal hamesha Centre of Curvature $C$ se pass hota hai).

---

### Level 2: Spherical Mirrors Ki Anatomy (Concave vs Convex)

Agar ek hollow glass sphere ko kaat kar uske ek side ko silver-polish kar dein, toh banta hai **Spherical Mirror**:

1. **Concave Mirror (Converging Mirror / Andar Ki Gufa):**
   - Iska reflecting surface **andar ki taraf curved** hota hai (towards the center of sphere).
   - Ye parallel light rays ko ek point par **converge (ikatha)** karta hai. Isiliye ise *Converging Mirror* kehte hain.
2. **Convex Mirror (Diverging Mirror / Bahar Ka Ubhar):**
   - Iska reflecting surface **bahar ki taraf ubhra** hota hai.
   - Ye parallel light rays ko charo taraf **diverge (faila)** deta hai, jo peechhe extend karne par focus se aati hui lagti hain. Isiliye ise *Diverging Mirror* kehte hain.

#### Fundamental Geometric Terms:
- **Pole ($P$):** Mirror ke reflecting surface ka exact geometric central point.
- **Centre of Curvature ($C$):** Us hollow glass sphere ka center jiska ye mirror ek hissa hai.
- **Radius of Curvature ($R$):** Pole aur Centre of Curvature ke beech ka distance ($PC = R$).
- **Principal Axis:** Pole ($P$) aur Centre of Curvature ($C$) ko jodne wali straight imaginary line.
- **Principal Focus ($F$):** Principal axis ke parallel aane wali rays mirror se reflect hokar jis point par asal mein milti hain (Concave) ya milti hui lagti hain (Convex).
- **Focal Length ($f$):** Pole ($P$) aur Focus ($F$) ke beech ki doori ($PF = f$).

$$\\mathbf{R = 2f \\iff f = \\frac{R}{2}}$$
*(Chhote aperture wale mirrors ke liye Radius hamesha focal length ka double hota hai!)*

---

### Level 3: Ray Diagrams Ke 4 Golden Rules (CBSE Diagrams Ka Secret)

Koi bhi image banane ke liye hume object se nikalne wali infinite rays mein se sirf **koi 2 standard rays** trace karni hoti hain:

1. **Parallel Ray Rule:** Jo ray principal axis ke parallel aati hai, wo reflection ke baad **Focus ($F$) se pass hoti hai** (Concave) ya Focus se aati hui lagti hai (Convex).
2. **Focus Ray Rule:** Jo ray Focus ($F$) se hokar mirror par aati hai, wo reflection ke baad **principal axis ke parallel** ho jati hai (Principle of Reversibility).
3. **Centre of Curvature Rule:** Jo ray Centre of Curvature ($C$) se guzarti hai, wo mirror par normal ($90^\\circ$) strike karti hai, isiliye wo **usi raste par bina kisi angle ke wapas laut aati hai** (Retraces its path).
4. **Pole Oblique Rule:** Jo ray directly Pole ($P$) par kisi angle $\\angle i$ par girti hai, wo principal axis ke doosri taraf utne hi angle $\\angle r = \\angle i$ par reflect ho jati hai.`,
      formulasOrKeyPoints: [
        {
          title: "Laws of Reflection",
          content: "\\angle i = \\angle r \\quad \\text{and Incident Ray, Reflected Ray, Normal lie in the same plane.}",
          note: "Angles are strictly measured from the Normal, never from the mirror surface!"
        },
        {
          title: "Focal Length & Radius Relation",
          content: "R = 2f \\iff f = \\frac{R}{2}",
          note: "Valid for spherical mirrors of small aperture."
        },
        {
          title: "Normal to a Spherical Mirror",
          content: "\\text{Any line passing through Centre of Curvature } C \\text{ is perpendicular to mirror surface.}",
          note: "Because radius of a sphere is always perpendicular to its tangent at every point."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Draw Principal Axis & Mirror",
          action: "Draw a straight horizontal line. Mark Pole P at the center of the mirror curve.",
          proTip: "Use a compass or protractor for smooth circular curvature."
        },
        {
          stepNo: 2,
          title: "Accurately Scale F and C",
          action: "Measure exactly equal distances: PF = f (e.g. 3 cm) and FC = f (3 cm), so that PC = 2f = 6 cm.",
          proTip: "If PF != FC, your reflected rays will never intersect at the geometrically correct position!"
        },
        {
          stepNo: 3,
          title: "Select Any Two Golden Rays",
          action: "Shoot Ray 1 parallel to axis -> bounce through F. Shoot Ray 2 through C or F. Mark arrows on both incident and reflected paths.",
          proTip: "CBSE board marks are cut if directional arrows are missing on rays."
        }
      ],
      examinerTraps: [
        {
          trap: "Glancing Angle vs Angle of Incidence: Question states 'A ray strikes a mirror at an angle of 30° with the mirror surface. Find angle of reflection.' Student writes r = 30°.",
          correction: "Angle of incidence i is measured from the NORMAL! i = 90° - 30° = 60°. Therefore, r = 60°."
        },
        {
          trap: "Drawing rays without arrows: Students draw lines without directional arrowheads.",
          correction: "Always put arrows showing light travelling towards the mirror (incident) and away from the mirror (reflected). Without arrows, it is just a line, not a light ray."
        }
      ]
    },
    {
      id: "concave_convex_image_formation",
      label: "2. Image Formation: 6 Concave & 2 Convex Cases",
      heading: "Master Ray Tracing Table, Image Characteristics & Practical Uses",
      subheading: "Infinity to Pole Journey + The Unique Case 6 (Shaving Mirror) + Convex Rear-View Superiority",
      explanation: `### Level 1: Concave Mirror Ki 6 Positions Ka Mental Map

Jaise-jaise object infinity se mirror ke paas aata jata hai, uski image mirror se door bhagti hai aur size mein badi hoti jati hai:

1. **Object at Infinity:**
   - Image Position: **At Focus $F$**
   - Nature & Size: **Real, Inverted, Point-sized (Highly Diminished)** ($m \\ll -1$)
   - *Use:* Solar cookers, dish antennae, astronomical telescopes.
2. **Object Beyond $C$:**
   - Image Position: **Between $C$ and $F$**
   - Nature & Size: **Real, Inverted, Diminished** ($|m| < 1$)
3. **Object Exactly at $C$ (The Landmark Case):**
   - Image Position: **At $C$**
   - Nature & Size: **Real, Inverted, EXACT SAME SIZE as object** ($m = -1$)
4. **Object Between $C$ and $F$:**
   - Image Position: **Beyond $C$**
   - Nature & Size: **Real, Inverted, Magnified (Enlarged)** ($|m| > 1$)
   - *Use:* Film and slide projectors.
5. **Object Exactly at Focus $F$:**
   - Image Position: **At Infinity**
   - Nature & Size: **Real, Inverted, Highly Enlarged (Infinite)** ($m \\to -\\infty$)
   - *Use:* Car headlights, searchlights, torches (bulb focus par rakha hota hai taaki powerful parallel light beam mile).
6. **Object Between Pole ($P$) and Focus ($F$) — 🔥 CBSE's #1 Favorite Case!**
   - Image Position: **Behind the Mirror**
   - Nature & Size: **VIRTUAL, ERECT, AND MAGNIFIED** ($m > +1$)
   - *Use:* Dentists' mirrors (daant ka bada seedha image dekhne ke liye), Shaving & Makeup mirrors.

---

### Level 2: Convex Mirror Ke Sirf 2 Cases (Hamesha Chhota & Seedha!)

Convex mirror ray ko failata (diverge karta) hai, isiliye ye **kabhi bhi real image nahi bana sakta**:

1. **Object at Infinity:**
   - Image Position: **At Focus $F$ behind the mirror**
   - Nature & Size: **Virtual, Erect, Point-sized**
2. **Object Anywhere Between Infinity and Pole $P$:**
   - Image Position: **Between $P$ and $F$ behind the mirror**
   - Nature & Size: **Virtual, Erect, DIMINISHED (Chhota)** ($0 < m < +1$)

> 🚗 **Why Convex Mirrors are Used as Rear-View Mirrors in Vehicles (CBSE Guaranteed 2-Marker):**
> 1. Ye hamesha **erect (seedhi)** image banate hain chahe gaadi kitni bhi door ya paas ho.
> 2. Bahar ki taraf curve hone ki wajah se inka **Field of View bohot wider (bada)** hota hai as compared to plane mirrors, jisse driver peeche ka bada traffic area aasani se dekh pata hai!`,
      formulasOrKeyPoints: [
        {
          title: "Concave vs Convex Image Nature",
          content: "\\text{Concave: Real \\& Inverted (Cases 1-5), Virtual \\& Erect (Case 6 only).} \\\\ \\text{Convex: ALWAYS Virtual, Erect, and Diminished.}",
          note: "If a mirror forms an enlarged virtual image -> it MUST be Concave. If it forms a diminished virtual image -> it MUST be Convex."
        },
        {
          title: "Magnification Sign Rules for Mirrors",
          content: "m < 0 \\implies \\text{Real \\& Inverted}; \\quad m > 0 \\implies \\text{Virtual \\& Erect}",
          note: "|m| > 1 (Enlarged), |m| = 1 (Same size), |m| < 1 (Diminished)."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify Object Region Relative to F and C",
          action: "Check given object distance u against focal length f and radius R = 2f.",
          proTip: "If u > 2f (Beyond C) -> Image between F and C. If u = 2f (At C) -> Image at C. If f < u < 2f -> Image beyond C. If u < f -> Image behind mirror (Virtual)."
        },
        {
          stepNo: 2,
          title: "Predict Image Nature Before Solving",
          action: "Never start math blindly. First write down whether image should be real/virtual and enlarged/diminished based on the case.",
          proTip: "If your calculated v has a sign conflicting with this case, you immediately catch your calculation mistake!"
        }
      ],
      examinerTraps: [
        {
          trap: "Assuming Convex mirror can form magnified image: Student writes convex mirror makes image larger.",
          correction: "A convex mirror can NEVER form an enlarged image. It ALWAYS forms a diminished (smaller) virtual image."
        },
        {
          trap: "Confusing Concave Case 6 with Plane Mirror: Shaving mirror produces virtual erect magnified image, NOT same size.",
          correction: "Plane mirror gives m = +1 (same size). Concave mirror when u < f gives m > +1 (enlarged)."
        }
      ]
    },
    {
      id: "cartesian_sign_convention_mirror_formula",
      label: "3. Sign Conventions, Mirror Formula & Numericals Mastery",
      heading: "New Cartesian Sign Convention, Mirror Formula & Linear Magnification",
      subheading: "Origin at Pole (P) + 1/v + 1/u = 1/f + m = -v/u + Guaranteed 5-Step Numerical Protocol",
      explanation: `### Level 1: New Cartesian Sign Convention (Graph Paper Ka Rule)

Optics ke numericals mein $95\\%$ bachhe calculation mein nahi, **signs ($+$ ya $-$)** mein galti karte hain! Is coordinate system ko graph paper ki tarah samjho:

1. **Pole ($P$) ko Origin $(0,0)$ maano.**
2. **Object hamesha Left side** rakha jata hai, isiliye incident light Left se Right travel karti hai.
3. **Left side ki saari distances Negative ($-$)** hongi (against incident light).
4. **Right side ki saari distances Positive ($+$)** hongi (in direction of incident light).
5. **Principal axis ke upar ki height Positive ($+$)** hogi ($+y$ axis, upright object).
6. **Principal axis ke neeche ki height Negative ($-$)** hogi ($-y$ axis, inverted image).

#### Master Sign Table For Mirrors:
- **Object Distance ($u$):** HAMESHA **Negative ($-$)** (chahe concave ho ya convex!).
- **Focal Length ($f$):**
  - Concave Mirror: HAMESHA **Negative ($-$)** (Focus mirror ke samne/left mein hota hai).
  - Convex Mirror: HAMESHA **Positive ($+$)** (Focus mirror ke peeche/right mein hota hai).
- **Image Distance ($v$):**
  - Real & Inverted Image: **Negative ($-$)** (mirror ke aage left side).
  - Virtual & Erect Image: **Positive ($+$)** (mirror ke peeche right side).
- **Object Height ($h$):** HAMESHA **Positive ($+$)**.
- **Image Height ($h'$):** Inverted image ke liye **Negative ($-$)**, Erect image ke liye **Positive ($+$)**.

---

### Level 2: Mirror Formula & Linear Magnification

#### 1. The Mirror Formula:
$$\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$$
*(Dhyan rahe: Mirror formula mein PLUS sign hota hai!)*

#### 2. Linear Magnification ($m$):
Image ki height aur object ki height ke ratio ko **Magnification** kehte hain:
$$m = \\frac{\\text{Height of Image } (h')}{\\text{Height of Object } (h)} = -\\frac{v}{u}$$
*(Note the mandatory MINUS sign in front of $v/u$ for mirrors!)*

#### Decoding The Value of $m$ (Board Secret):
- **Sign tells the Nature:**
  - $m = -$ (Negative) $\\implies$ Real & Inverted Image.
  - $m = +$ (Positive) $\\implies$ Virtual & Erect Image.
- **Magnitude tells the Size:**
  - $|m| > 1 \\implies$ Enlarged / Magnified (Image object se badi hai).
  - $|m| = 1 \\implies$ Same Size (Object Centre of Curvature $C$ par hai).
  - $|m| < 1 \\implies$ Diminished (Image object se chhoti hai).

> 🎯 **Example:** Agar $m = -2$ diya hai, iska matlab:
> - Minus sign $\\implies$ Image is Real & Inverted.
> - Magnitude $2 > 1 \\implies$ Image is 2 times magnified (enlarged).`,
      formulasOrKeyPoints: [
        {
          title: "The Mirror Formula",
          content: "\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}",
          note: "Always substitute known variables WITH their algebraic signs (+ or -)."
        },
        {
          title: "Mirror Magnification Formula",
          content: "m = \\frac{h'}{h} = -\\frac{v}{u}",
          note: "Do not forget the negative sign! If v is negative, m = -(-v)/u which becomes negative again."
        },
        {
          title: "Quick Formula for v and u",
          content: "v = \\frac{u \\cdot f}{u - f}, \\quad u = \\frac{v \\cdot f}{v - f}",
          note: "Handy for rapid checking of objective MCQs."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "List Given Data with Explicit Signs",
          action: "Write down u (always negative), f (- for concave, + for convex), h (+). Leave v and h' unassigned.",
          proTip: "Never assume the sign of the quantity you are asked to calculate!"
        },
        {
          stepNo: 2,
          title: "Apply Mirror Formula",
          action: "Substitute into 1/v = 1/f - 1/u. Take LCM of denominators carefully.",
          proTip: "Common error: calculating 1/v = 1/15 and writing v = 1/15. Remember to take reciprocal: v = 15 cm!"
        },
        {
          stepNo: 3,
          title: "Calculate Magnification and Image Height",
          action: "Calculate m = -v/u, then h' = m * h.",
          proTip: "Check that the sign of h' matches the sign of m."
        },
        {
          stepNo: 4,
          title: "State Final Answer in Words",
          action: "Write position (e.g. 30 cm in front of mirror), nature (Real & Inverted), and size (magnified/diminished).",
          proTip: "CBSE rubric awards 0.5 to 1 mark specifically for writing the qualitative nature and position statement."
        }
      ],
      examinerTraps: [
        {
          trap: "Forgetting the minus sign in m = -v/u: Students write m = v/u for mirrors.",
          correction: "Mirrors use m = -v/u. Lenses use m = +v/u. Memorize: Mirror has PLUS in formula (1/v + 1/u = 1/f) and MINUS in magnification (m = -v/u)."
        },
        {
          trap: "Missing Reciprocal: Student finds 1/v = -1/30 and forgets to invert, writing v = -1/30 cm.",
          correction: "Always invert the fraction: 1/v = -1/30 implies v = -30 cm."
        }
      ]
    },
    {
      id: "refraction_snells_law_glass_slab",
      label: "4. Refraction of Light, Snell's Law & Rectangular Glass Slab",
      heading: "Optical Density, Bending Mechanics, Snell's Law & Lateral Displacement",
      subheading: "Rarer to Denser (Towards Normal) vs Denser to Rarer (Away) + Absolute (n = c/v) & Relative Index + Glass Slab Shift",
      explanation: `### Level 1: Refraction Kyun Hota Hai? (The Speed Shift)

Jab light ray ek transparent medium se doosre transparent medium mein **obliquely (tirchhi)** enter karti hai, toh wo interface par apna rasta badal leti hai (bend ho jati hai). Is bending phenomenon ko **Refraction of Light** kehte hain.

- **Refraction Ka Asal Kaaran:** Light ki speed alag-alag transparent media mein alag-alag hoti hai!
  - Vacuum / Air: $c = 3 \\times 10^8\\text{ m/s}$ (Maximum speed)
  - Water: $v = 2.25 \\times 10^8\\text{ m/s}$
  - Glass: $v = 2.0 \\times 10^8\\text{ m/s}$

#### Bending Ka Golden Rule:
1. **Rarer to Denser (Air $\\to$ Glass/Water):**
   - Speed kam ho jati hai $\\implies$ Ray **Normal ki taraf bend hoti hai** ($i > r$).
2. **Denser to Rarer (Glass/Water $\\to$ Air):**
   - Speed badh jati hai $\\implies$ Ray **Normal se door (away) bend hoti hai** ($i < r$).
3. **Normal Incidence ($\\angle i = 0^\\circ$):**
   - Ray bina kisi deviation ke seedhi nikal jati hai ($\\angle r = 0^\\circ$).

> ⚠️ **Optical Density vs Mass Density (Tricky Concept!):**
> Optical density ka mass density (mass/volume) se koi direct relation nahi hai!
> *Example:* **Kerosene** water par float karta hai (iska mass density water se kam hai), LEKIN kerosene ka refractive index ($n = 1.44$) water ($n = 1.33$) se zyada hai, matlab kerosene **optically denser** hai!

---

### Level 2: Laws of Refraction & Snell's Law (CBSE 3-Marker)

1. **First Law:** Incident ray, refracted ray, aur point of incidence par normal — teeno **same plane** mein lie karte hain.
2. **Second Law (Snell's Law):** For a given pair of media and for light of a given colour/wavelength, the ratio of sine of angle of incidence to sine of angle of refraction is a **constant**:
   $$\\frac{\\sin i}{\\sin r} = \\text{constant} = ^{1}n_2 = \\frac{n_2}{n_1}$$
   *(Jahan $^{1}n_2$ medium 2 ka refractive index hai with respect to medium 1).*

---

### Level 3: Absolute vs Relative Refractive Index

1. **Absolute Refractive Index ($n$ ya $n_m$):**
   Vacuum (ya air) ke comparison mein kisi medium mein light kitni slow ho jati hai:
   $$n = \\frac{\\text{Speed of light in vacuum } (c)}{\\text{Speed of light in medium } (v)} = \\frac{3 \\times 10^8}{v}$$
   - Kyunki $c > v$ hamesha hota hai, kisi bhi transparent medium ka absolute refractive index hamesha **$1$ se bada ($n > 1$)** hota hai.
   - Refractive index ek pure ratio hai, iski **koi unit nahi hoti** (dimensionless).
2. **Relative Refractive Index ($^{1}n_2$):**
   $$^{1}n_2 = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}$$
   $$\\mathbf{\\text{Reciprocal Rule: }} ^{2}n_1 = \\frac{1}{^{1}n_2}$$
   *(Agar air-to-glass index $3/2$ hai, toh glass-to-air index $2/3$ hoga!)*

---

### Level 4: Refraction Through a Rectangular Glass Slab (Lateral Displacement)

Jab light ray ek parallel-sided rectangular glass slab se guzar kar bahar nikalti hai:
1. **First Interface (Air $\\to$ Glass):** Ray normal ki taraf bend hoti hai ($\\angle i > \\angle r$).
2. **Second Interface (Glass $\\to$ Air):** Ray normal se door bend hoti hai ($\\angle r' < \\angle e$).
3. Kyunki upar aur neeche ke refracting faces bilkul parallel hain, **Angle of Incidence = Angle of Emergence** ($\\angle i = \\angle e$).
4. **Result:** Emergent ray original incident ray ke **bilkul parallel** nikalti hai, par thoda side mein shift ho jati hai!
5. **Lateral Displacement ($d$):** Original incident ray ki extended line aur emergent ray ke beech ke perpendicular distance ko **Lateral Displacement** kehte hain.
   - *Factors affecting Lateral Displacement:*
     - Directly proportional to **Thickness of glass slab** ($t$).
     - Directly proportional to **Refractive index** of glass ($n$).
     - Directly proportional to **Angle of incidence** ($\\angle i$).
     - Inversely proportional to **Wavelength** of light (Violet light suffers more shift than red light).`,
      formulasOrKeyPoints: [
        {
          title: "Snell's Law Formula",
          content: "n_1 \\sin i = n_2 \\sin r \\iff \\frac{\\sin i}{\\sin r} = \\frac{n_2}{n_1} = ^{1}n_2",
          note: "Product of refractive index and sine of angle remains constant across the interface."
        },
        {
          title: "Absolute Refractive Index",
          content: "n = \\frac{c}{v} \\quad (c = 3 \\times 10^8\\text{ m/s})",
          note: "Higher refractive index means slower light speed and greater optical bending."
        },
        {
          title: "Relative Refractive Index & Speeds",
          content: "^{1}n_2 = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}; \\quad ^{2}n_1 = \\frac{1}{^{1}n_2}",
          note: "w_n_g = n_g / n_w = (3/2) / (4/3) = 9/8 = 1.125."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify Incident Medium (n1) and Refracting Medium (n2)",
          action: "Check which medium light is coming from and which medium it is entering.",
          proTip: "If entering denser medium (n2 > n1), ray bends towards normal (r < i). If entering rarer medium (n2 < n1), ray bends away (r > i)."
        },
        {
          stepNo: 2,
          title: "Calculate Speed or Refractive Index",
          action: "Use n = c / v or n2/n1 = v1/v2. Keep speeds in same units (m/s).",
          proTip: "Never calculate relative index as n1/n2 when asked 'medium 2 with respect to medium 1'. It is always n2/n1!"
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing relative index order: Student writes 1n2 = n1 / n2.",
          correction: "1n2 means refractive index of 2 with respect to 1 = n2 / n1 = v1 / v2."
        },
        {
          trap: "Assuming light deviates angularly in a glass slab: Student writes that the emergent ray changes its direction.",
          correction: "In a rectangular glass slab with parallel faces, the emergent ray is strictly PARALLEL to the incident ray (angle of deviation = 0°). It only suffers lateral displacement."
        }
      ]
    },
    {
      id: "spherical_lenses_and_image_formation",
      label: "5. Spherical Lenses: Convex vs Concave & Ray Formation",
      heading: "Convex (Converging) & Concave (Diverging) Lenses + Ray Rules & 6 Convex Cases",
      subheading: "Optical Centre (O) + Principal Foci (F1, F2) + Convex 6 Cases + Concave Always Virtual & Diminished",
      explanation: `### Level 1: Spherical Lens Kya Hota Hai?

Ek transparent refracting medium jo do spherical surfaces se bounded ho:

1. **Convex Lens (Converging Lens / Beech Mein Mota):**
   - Beech mein se thick aur kinaro (edges) par se patla hota hai.
   - Parallel rays ko ek point par ikatha (**converge**) karta hai.
   - Iska Principal Focus **Real** hota hai (Right side $F_2$).
2. **Concave Lens (Diverging Lens / Beech Mein Patla):**
   - Beech mein se thin aur kinaro par se mota hota hai.
   - Parallel rays ko faila (**diverge**) deta hai, jo focus se aati hui lagti hain.
   - Iska Principal Focus **Virtual** hota hai (Left side $F_1$).

#### Key Optical Points:
- **Optical Centre ($O$):** Lens ka exact geometric center. Is point se guzarne wali light ray **bina kisi deviation ke bilkul seedhi** nikal jati hai!
- **Principal Axis:** Dono spherical surfaces ke centres of curvature ko jodne wali line.
- **Principal Foci ($F_1$ and $F_2$):** Lenses mein do spherical surfaces hone ki wajah se do foci hote hain. Light left se enter karti hai toh right wala focus $F_2$ convex lens ka main working focus hota hai!

---

### Level 2: Lenses Ke 3 Standard Ray Rules

1. **Parallel Ray Rule:** Principal axis ke parallel aane wali ray refraction ke baad **Focus ($F_2$) se pass hoti hai** (Convex) ya Focus ($F_1$) se aati hui appear hoti hai (Concave).
2. **Focus Ray Rule:** Focus ($F_1$) se aane wali ray refraction ke baad **principal axis ke parallel** ho jati hai.
3. **Optical Centre Rule (The Cleanest Ray):** Optical Centre ($O$) se pass hone wali ray **bina kisi bending ke seedhi** nikal jati hai!

---

### Level 3: Convex Lens Ke 6 Cases (Concave Mirror Ka Twin Brother!)

Convex Lens ke image formation cases concave mirror se $100\\%$ match karte hain, bas yahan real image mirror ke aage nahi, **lens ke doosri taraf (right side)** banti hai:

1. **Object at Infinity:** Image **At $F_2$**; Real, Inverted, Point-sized ($m \\ll -1$).
2. **Object Beyond $2F_1$:** Image **Between $F_2$ and $2F_2$**; Real, Inverted, Diminished ($|m| < 1$). *(Application: Camera)*
3. **Object Exactly at $2F_1$:** Image **At $2F_2$**; Real, Inverted, **SAME SIZE** ($m = -1$). *(Application: Terrestrial photocopier)*
4. **Object Between $F_1$ and $2F_1$:** Image **Beyond $2F_2$**; Real, Inverted, Magnified ($|m| > 1$). *(Application: Cinema projector)*
5. **Object at Focus $F_1$:** Image **At Infinity**; Real, Inverted, Highly Enlarged ($m \\to -\\infty$). *(Application: Searchlights)*
6. **Object Between Optical Centre $O$ and Focus $F_1$ (🔥 CBSE Favorite):**
   - Image: **On the same side as object (Left side)**
   - Nature: **VIRTUAL, ERECT, AND MAGNIFIED** ($m > +1$)
   - *Application:* Simple Magnifying Glass / Reading Lens!

---

### Level 4: Concave Lens Ke Cases (Hamesha Chhota & Seedha!)

Convex mirror ki tarah, Concave lens bhi chahe object ko kahin bhi rakh do, hamesha:
- Image: **Between Optical Centre $O$ and Focus $F_1$ on the same side**
- Nature: **VIRTUAL, ERECT, AND DIMINISHED** ($0 < m < +1$)
- *Application:* Myopia (near-sightedness) ko correct karne ke spectacles mein!`,
      formulasOrKeyPoints: [
        {
          title: "Convex vs Concave Lens Nature",
          content: "\\text{Convex Lens: Real \\& Inverted (Cases 1-5), Virtual \\& Erect (Case 6 only).} \\\\ \\text{Concave Lens: ALWAYS Virtual, Erect, and Diminished (m < +1).}",
          note: "A virtual image formed by a convex lens is always magnified. A virtual image formed by a concave lens is always diminished."
        },
        {
          title: "Sign of Focal Length for Lenses",
          content: "f_{\\text{convex}} = +\\text{ve} \\quad (F_2 \\text{ is on the right}); \\quad f_{\\text{concave}} = -\\text{ve} \\quad (F_1 \\text{ is on the left})",
          note: "Crucial rule: Convex lens f is always Positive (+), Concave lens f is always Negative (-)."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Mark O, F1, 2F1 (Left) and F2, 2F2 (Right)",
          action: "Draw symmetric intervals on principal axis: OF1 = F1(2F1) = OF2 = F2(2F2).",
          proTip: "Keep all four intervals exactly equal (e.g. 3 cm each) to get accurate intersection points."
        },
        {
          stepNo: 2,
          title: "Trace Ray 1 and Ray 2",
          action: "Draw Ray 1 from object top parallel to axis -> bends through F2. Draw Ray 2 straight through Optical Centre O without deviation.",
          proTip: "The intersection of these two rays immediately locates the top of the image!"
        }
      ],
      examinerTraps: [
        {
          trap: "Virtual image position in lenses vs mirrors: Student thinks virtual image in a lens is formed on the other side.",
          correction: "In lenses, real image is formed on the other side (right, v is positive), while virtual image is formed on the SAME side as the object (left, v is negative)."
        },
        {
          trap: "Magnifying glass case: Student places object beyond F1 to make a magnifying glass.",
          correction: "To use a convex lens as a simple magnifier, the object MUST be placed between the optical centre O and focus F1 (u < f)."
        }
      ]
    },
    {
      id: "lens_formula_power_of_lens",
      label: "6. Lens Formula, Magnification & Power of a Lens",
      heading: "Lens Formula (Minus Sign!), Magnification & Lens Power in Dioptres (D)",
      subheading: "1/v - 1/u = 1/f + m = +v/u + P = 1/f(m) = 100/f(cm) + Combination of Lenses in Contact",
      explanation: `### Level 1: The Lens Formula (Mind the Minus Sign!)

Object distance ($u$), Image distance ($v$), aur Focal length ($f$) ke beech ka mathematical relation:
$$\\mathbf{\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}}$$

> ⚡ **Mirror vs Lens Formula Ka Maha-Contrast:**
> - Mirror Formula mein **PLUS** hota hai: $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$
> - Lens Formula mein **MINUS** hota hai: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$

---

### Level 2: Linear Magnification for Lenses ($m$)

$$m = \\frac{\\text{Height of Image } (h')}{\\text{Height of Object } (h)} = +\\frac{v}{u}$$

> ⚡ **Mirror vs Lens Magnification Ka Contrast:**
> - Mirror Magnification mein **MINUS** hota hai: $m = -\\frac{v}{u}$
> - Lens Magnification mein **PLUS** hota hai: $m = +\\frac{v}{u}$

#### Sign Rules for Lens Magnification:
- If $m < 0$ (Negative): Image is **Real and Inverted** (formed on right side, $v > 0$).
- If $m > 0$ (Positive): Image is **Virtual and Erect** (formed on left side, $v < 0$).

---

### Level 3: Power of a Lens ($P$) & The Dioptre (D) — CBSE Guaranteed Numericals

Koi lens light rays ko kitna zyada converge ya diverge kar sakta hai, uski ability ko **Power of a Lens** kehte hain.
Quantitative definition: **Focal length (in meters) ka reciprocal!**
$$P = \\frac{1}{f \\text{ (in meters)}} = \\frac{100}{f \\text{ (in cm)}}$$

#### Units & Signs of Power:
- **SI Unit of Power:** **Dioptre (D)** ($1\\text{ D} = 1\\text{ m}^{-1}$).
- **Definition of 1 Dioptre:** 1 Dioptre us lens ki power hoti hai jiski focal length **$1\\text{ meter}$** ho.
- **For Convex Lens (Converging):** Focal length $+ve$ hoti hai $\\implies$ **Power is Positive ($+P$)**. *(e.g. $+2.0\\text{ D}$)*
- **For Concave Lens (Diverging):** Focal length $-ve$ hoti hai $\\implies$ **Power is Negative ($-P$)**. *(e.g. $-2.5\\text{ D}$)*

---

### Level 4: Combination of Thin Lenses in Contact

Jab do ya do se zyada thin lenses ko aapas mein touch karke (in contact) rakha jata hai, toh net power unki individual powers ka **algebraic sum** hoti hai:
$$P_{\\text{net}} = P_1 + P_2 + P_3 + \\dots$$
$$\\frac{1}{F_{\\text{net}}} = \\frac{1}{f_1} + \\frac{1}{f_2} + \\dots$$
- **Net Magnification:** $m_{\\text{net}} = m_1 \\times m_2 \\times m_3 \\times \\dots$ *(Powers add hoti hain, magnifications multiply hoti hain!)*

> 🎯 **Master Numerical Example:**
> Ek optician $+2.5\\text{ D}$ ka convex lens aur $-1.5\\text{ D}$ ka concave lens contact mein rakhta hai:
> $$P_{\\text{net}} = (+2.5\\text{ D}) + (-1.5\\text{ D}) = +1.0\\text{ D}$$
> Net Focal length $F = \\frac{1}{P} = \\frac{1}{+1.0} = +1.0\\text{ m} = +100\\text{ cm}$ (System behaves as a converging convex lens!).`,
      formulasOrKeyPoints: [
        {
          title: "The Lens Formula",
          content: "\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}",
          note: "Notice the minus sign between 1/v and 1/u!"
        },
        {
          title: "Lens Magnification",
          content: "m = \\frac{h'}{h} = +\\frac{v}{u}",
          note: "No minus sign in front of v/u for lenses."
        },
        {
          title: "Power of a Lens Formula",
          content: "P = \\frac{1}{f(\\text{in m})} = \\frac{100}{f(\\text{in cm})} \\quad [\\text{Unit: Dioptre, D}]",
          note: "Always convert focal length from cm to meters before taking reciprocal!"
        },
        {
          title: "Combination of Lenses",
          content: "P_{\\text{net}} = P_1 + P_2 + \\dots; \\quad m_{\\text{net}} = m_1 \\times m_2 \\times \\dots",
          note: "Powers add algebraically (with their + and - signs)."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Assign Standard Lens Signs",
          action: "u is always negative (-). Convex f is (+), Concave f is (-).",
          proTip: "If a problem states 'converging lens of 20 cm', write f = +20 cm. If 'diverging lens', write f = -20 cm."
        },
        {
          stepNo: 2,
          title: "Solve for v using 1/v = 1/f + 1/u",
          action: "Substitute signs properly. Take LCM and invert the final fraction to find v.",
          proTip: "If v turns out positive, the image is real and inverted on the right side. If v is negative, it is virtual on the left side."
        },
        {
          stepNo: 3,
          title: "Calculate Power P",
          action: "Convert f to meters: f(m) = f(cm) / 100. Then P = 1 / f(m).",
          proTip: "If f = -50 cm = -0.5 m, P = 1 / (-0.5) = -2.0 D."
        }
      ],
      examinerTraps: [
        {
          trap: "Formula Sign Confusion: Mixing up Mirror and Lens formulas and magnifications.",
          correction: "Mirror: 1/v + 1/u = 1/f, m = -v/u. Lens: 1/v - 1/u = 1/f, m = +v/u. Remember: Mirror has PLUS in formula, MINUS in m. Lens has MINUS in formula, PLUS in m."
        },
        {
          trap: "Calculating Power with f in cm: Student writes P = 1 / 20 = 0.05 D when f = 20 cm.",
          correction: "P = 1/f is ONLY valid when f is in METERS! For f = 20 cm = 0.2 m, P = 1 / 0.2 = +5 D (or use P = 100 / 20 = +5 D)."
        }
      ]
    }
  ]
};
