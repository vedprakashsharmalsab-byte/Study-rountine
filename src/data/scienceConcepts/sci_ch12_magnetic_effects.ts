import type { ScienceChapterConcept } from "./types";

export const SCI_CH12_CONCEPT: ScienceChapterConcept = {
  chapterNo: 12,
  title: "Magnetic Effects of Electric Current",
  discipline: "Physics",
  weightage: "5–7 Marks (Core Board Physics)",
  oneLiner: "Current produces magnetic fields (Right-Hand Thumb Rule); solenoids amplify fields into electromagnets; current-carrying wires experience mechanical force in magnetic fields governed by Fleming's Left-Hand Rule; domestic circuits run on 220 V 50 Hz AC protected by earthing and fuses.",
  analogyTitle: "The Invisible Force Grid & Electromagnetic Grip 🧲⚡",
  analogyContent: `Imagine space around every current-carrying wire filled with an **invisible swirl of magnetic whirlpools**:

- **Right-Hand Thumb Rule:** Grip a wire with your right thumb pointing in the current's direction — your curled fingers reveal the concentric whirlpools of magnetic force spinning around it!
- **The Solenoid Multiplier:** Wrap the wire into a coiled cylinder, and thousands of tiny circular fields stack together inside like parallel laser beams, creating a fierce uniform magnetic field identical to a bar magnet. Drop a soft iron rod into the core, and it becomes a massive **Electromagnet** that can lift tons of steel in a scrapyard at the flip of a switch!
- **Fleming's Left-Hand Push:** Plunge this current-carrying wire between opposing magnetic poles, and the interacting fields squeeze the wire outwards — mechanical motion born directly from electricity!`,
  sections: [
    {
      id: "magnetic_field_lines_and_current",
      label: "1. Magnetic Field Lines & Current-Carrying Conductors",
      heading: "Field Line Properties, Oersted's Discovery, Right-Hand Thumb Rule & Solenoids",
      subheading: "Properties of Field Lines + Straight Wire + Circular Loop + Solenoid + Electromagnet vs Permanent Magnet",
      explanation: `**1. OERSTED'S EXPERIMENT (1820):**
Hans Christian Oersted discovered that a magnetic compass needle placed near a metallic wire deflects whenever an electric current passes through the wire.
- **Inference:** An electric current flowing through a conductor always **produces a magnetic field around it**, establishing the fundamental link between electricity and magnetism.

---

**2. PROPERTIES OF MAGNETIC FIELD LINES (Classic 3-Mark Board Question):**
1. **Direction:** Field lines emerge from the **North pole (N)** and enter into the **South pole (S)** outside the magnet. Inside the magnet, field lines travel from the **South pole to the North pole**.
2. **Closed Continuous Loops:** Magnetic field lines form continuous closed curves (unlike electrostatic field lines).
3. **Degree of Closeness (Field Strength):** The relative closeness (density) of field lines indicates the strength of the magnetic field. Lines are crowded near the poles where the field is strongest.
4. **NEVER INTERSECT (Guaranteed Board Reasoning):** Two magnetic field lines **never cross each other**.
   - *Reason:* If they intersected, a compass needle placed at the point of intersection would have to point in **two different directions simultaneously**, which is physically impossible!

---

**3. MAGNETIC FIELD PATTERNS DUE TO CURRENT-CARRYING CONDUCTORS:**

### A. Straight Current-Carrying Conductor
- **Field Pattern:** Concentric circles centered on the wire, lying in planes perpendicular to the wire.
- **Direction:** Given by the **Right-Hand Thumb Rule**.
- **Field Strength ($B$):**
  - Directly proportional to the current: $B \\propto I$.
  - Inversely proportional to the distance from wire: $B \\propto 1/r$.
- **Right-Hand Thumb Rule:** Imagine holding the straight conductor in your **right hand** such that the **thumb points in the direction of electric current**. Then the **curled fingers point in the direction of the magnetic field lines** around the wire.

### B. Circular Loop Carrying Current
- As we move towards the centre of the loop, the concentric circles become larger and larger arcs.
- At the exact centre of the loop, field lines appear as **straight, parallel lines perpendicular to the plane of the loop**.
- Every section of wire contributes to the magnetic field at the centre in the same direction.
- **For a coil of $n$ turns:** The magnetic field produced is **$n$ times larger** than that produced by a single turn, because the currents in each turn add up algebraically ($B \\propto n \\cdot I$).
- **Clock Face Rule for Polarity:**
  - If current flows **Clockwise** when viewed from a face $\\implies$ That face behaves as a **South Pole (S)**.
  - If current flows **Anticlockwise** when viewed from a face $\\implies$ That face behaves as a **North Pole (N)**.

### C. Solenoid (Coil of Many Circular Turns)
- A long helical coil consisting of many circular turns of insulated copper wire wrapped closely in the shape of a cylinder is called a **Solenoid**.
- **Magnetic Field Pattern:**
  - Outside the solenoid: Exactly resembles the field of a **bar magnet** (diverges from North pole, enters South pole).
  - Inside the solenoid: The field lines are **parallel straight lines**, indicating that the **magnetic field is completely UNIFORM at all points inside the solenoid**.
- **Factors Increasing Magnetic Field of Solenoid:**
  1. Increasing electric current ($B \\propto I$).
  2. Increasing number of turns per unit length ($B \\propto n$).
  3. Inserting a core of **soft iron** inside the coil.

---

**4. ELECTROMAGNET vs PERMANENT MAGNET (Board Comparison Table):**

| Parameter | Electromagnet | Permanent Magnet |
|-----------|---------------|------------------|
| **Core Material** | Soft iron core inside a solenoid coil. | Steel, Alnico, or hard magnetic alloys. |
| **Magnetic Nature** | **Temporary:** Magnetic field exists only while current flows; loses magnetism immediately when switched off. | **Permanent:** Retains its magnetic properties for a very long duration without any electrical supply. |
| **Strength Adjustment**| Strength can be easily varied by changing current $I$ or number of turns $n$. | Magnetic strength is fixed and cannot be easily changed. |
| **Polarity Reversal** | Polarity can be easily reversed by reversing current direction. | Polarity is permanent and fixed. |
| **Applications** | Electric bells, scrapyard cranes, MRI machines, circuit breakers. | Magnetic compasses, loudspeakers, refrigerator door gaskets. |`,
      formulasOrKeyPoints: [
        {
          title: "Right-Hand Rules & Solenoid Relations",
          content: `$$\\text{Straight Wire: } B \\propto \\frac{I}{r} \\qquad \\text{Circular Coil Centre: } B \\propto \\frac{n I}{r}$$
$$\\text{Inside Solenoid: Field is completely UNIFORM (parallel straight lines)}$$
$$\\text{Clock Rule: Clockwise } \\implies \\text{South (S)}; \\quad \\text{Anticlockwise } \\implies \\text{North (N)}$$`,
          note: "Magnetic field lines form continuous closed loops and never intersect."
        }
      ],
      examinerTraps: [
        {
          trap: "Using steel instead of soft iron for an electromagnet core.",
          correction: "Soft iron has high magnetic permeability and loses magnetism instantly when current is turned off (low retentivity). Steel retains magnetism permanently (high retentivity), converting into a permanent magnet instead of a temporary controllable electromagnet."
        }
      ]
    },
    {
      id: "force_and_fleming_left_hand_rule",
      label: "2. Force on Conductor & Fleming's Left-Hand Rule",
      heading: "Ampere's Experiment, Maximum Force Condition & Deflection of Particles",
      subheading: "Fleming's LHR (FBI) + Proton/Alpha Deflection Problems + Electric Motor Principle",
      explanation: `**1. FORCE ON A CURRENT-CARRYING CONDUCTOR IN A MAGNETIC FIELD:**
French physicist André-Marie Ampère suggested that if a current-carrying conductor exerts a magnetic force on a magnet, then the magnet must also exert an **equal and opposite mechanical force** on the current-carrying conductor!
- **Experimental Demonstration:**
  - A small aluminium rod $AB$ is suspended horizontally between the poles of a strong horseshoe magnet.
  - When current is passed through $AB$, the rod is visibly deflected sideways.
  - Reversing the current direction reverses the direction of mechanical force.
  - Reversing the magnetic poles also reverses the direction of force.
- **Conditions Governing Magnitude of Force:**
  - **Maximum Force:** Experienced when the conductor is **perpendicular to the magnetic field** ($\\theta = 90^\\circ$).
  - **Zero Force:** Experienced when the conductor is **parallel to the magnetic field** ($\\theta = 0^\\circ$ or $180^\\circ$).
  - Force is proportional to: Current ($I$), Magnetic field strength ($B$), and Length of wire in field ($l$):
    $$F = B I l \\sin\\theta$$

---

**2. FLEMING'S LEFT-HAND RULE (Guaranteed 3-Mark Rule):**
Used to determine the direction of mechanical force on a current-carrying conductor placed in a magnetic field:
- Stretch the **Thumb, Forefinger (Index finger), and Middle finger** of your **LEFT HAND** mutually perpendicular to each other:
  - **Forefinger:** Points in the direction of the **Magnetic Field ($B$)** [Field $\\to$ Forefinger].
  - **Middle Finger:** Points in the direction of the **Electric Current ($I$)** [Current $\\to$ Center/Middle finger].
  - **Thumb:** Points in the direction of the **Mechanical Force / Motion ($F$)** [Thrust/Force $\\to$ Thumb].

- *Mnemonic: **FBI** on your Left Hand:*
  - **F** = Force / Thrust (Thumb)
  - **B** = Magnetic Field (Forefinger)
  - **I** = Current (Middle finger)

---

**3. DEFLECTION OF CHARGED PARTICLES (Board Favorite HOTS):**
When a charged particle moves through a magnetic field, it constitutes an electric current:
1. **Positive Charges (Protons, Alpha Particles):**
   - Direction of conventional current is **SAME as the direction of motion** of positive charges.
   - *Example:* An alpha particle directed towards west enters a magnetic field directed towards north. Current $I$ is West, Field $B$ is North. Applying Fleming's Left-Hand Rule $\\implies$ Force is directed **UPWARD**!
2. **Negative Charges (Electrons, Beta Particles):**
   - Direction of conventional current is **OPPOSITE to the direction of motion** of electrons.
   - *Example:* A beam of electrons moves horizontally from left to right in a downward magnetic field. Current $I$ is right-to-left (opposite to motion). Applying Fleming's Left-Hand Rule $\\implies$ Force is directed **INTO THE PAGE**.
3. **Neutral Particles (Neutrons):**
   - Neutrons possess zero charge $\\implies$ No electric current $\\implies$ **Zero force / undeflected**!

---

**4. ELECTRIC MOTOR (Principle):**
- A device that converts **electrical energy into mechanical energy**.
- **Working Principle:** When a rectangular coil carrying electric current is placed in a magnetic field, it experiences equal and opposite forces on its two parallel arms according to Fleming's Left-Hand Rule. These opposing forces create a torque that rotates the coil continuously.
- *(Note: Detailed internal construction of AC generators and electromagnetic induction is excluded from CBSE exams, but the basic motor principle based on Fleming's Left-Hand Rule is examinable).*`,
      formulasOrKeyPoints: [
        {
          title: "Fleming's Left-Hand Rule Summary",
          content: `$$\\begin{aligned}
\\textbf{Thumb:} & \\quad \\text{Direction of Force / Motion (Thrust) } [F] \\\\
\\textbf{Forefinger:} & \\quad \\text{Direction of Magnetic Field } [B] \\\\
\\textbf{Middle Finger:} & \\quad \\text{Direction of Conventional Current } [I] \\\\
\\mathbf{F = B I l \\sin\\theta} & \\quad (\\text{Max at } 90^\\circ, \\text{ Zero at } 0^\\circ)
\\end{aligned}$$`,
          note: "Always use the LEFT hand for motor forces and particle deflections. Check electron directions carefully (current is opposite to electron motion!)."
        }
      ],
      examinerTraps: [
        {
          trap: "Taking the current direction in the same direction as electron velocity.",
          correction: "Electrons carry negative charge. Conventional current flows OPPOSITE to electron movement. If an electron travels north, the current vector I must be directed SOUTH when applying Fleming's Left-Hand Rule."
        }
      ]
    },
    {
      id: "domestic_electric_circuits",
      label: "3. Domestic Electric Circuits & Electrical Safety",
      heading: "Mains Supply, 3-Wire System, Earthing, Short-Circuit, Overloading & Fuses",
      subheading: "220V 50Hz AC + Color Codes + Earth Wire Function + Short-Circuit vs Overloading",
      explanation: `**1. DOMESTIC ELECTRIC SUPPLY SPECIFICATIONS (India):**
- Electric power received in our homes from the generating station is **Alternating Current (AC)**:
  - **Potential Difference (Voltage):** **$220\\text{ V}$**
  - **Frequency:** **$50\\text{ Hz}$** (meaning AC alternates direction **100 times per second**; cycle duration = $1/50 = 0.02\\text{ s}$).
- **Advantage of AC over DC:** AC can be stepped up or down using transformers, allowing electrical energy to be transmitted over vast distances at very high voltages and low currents with **minimal $I^2R$ heat energy loss**.

---

**2. THE THREE-WIRE DOMESTIC SUPPLY SYSTEM:**
Mains electricity is delivered into our houses via a 3-wire cable:
1. **Live Wire (Phase Wire):**
   - Insulation Color: **Red / Brown**.
   - Carries high potential at **$220\\text{ V}$**.
2. **Neutral Wire:**
   - Insulation Color: **Black / Light Blue**.
   - Carries zero potential at **$0\\text{ V}$**.
   - *Potential difference between Live and Neutral wires is $220 - 0 = 220\\text{ V}$.*
3. **Earth Wire (Ground Wire):**
   - Insulation Color: **Green / Yellow stripes**.
   - Carries zero potential at **$0\\text{ V}$**; physically connected to a thick copper plate buried deep in the moist earth near the house.

- **Two Domestic Circuits in Homes:**
  1. **$15\\text{ A}$ Power Circuit:** For heavy appliances with high power consumption (geysers, air conditioners, room heaters, refrigerators, washing machines).
  2. **$5\\text{ A}$ Lighting Circuit:** For low-power appliances (light bulbs, tube lights, ceiling fans, televisions).

---

**3. FUNCTION OF THE EARTH WIRE (Guaranteed 2M/3M Board Question):**
- The green Earth wire is connected to the metallic casing of heavy appliances (electric iron, toaster, refrigerator, oven).
- **Normal Operation:** The earth wire carries zero current.
- **Fault Condition:** If insulation inside the appliance wears off and the bare live wire accidentally touches the metallic casing:
  - The metal body rises to $220\\text{ V}$.
  - The Earth wire provides a **very low-resistance electrical path** directly to the ground.
  - A massive current surges harmlessly to Earth rather than passing through a human body touching the appliance.
  - The surge immediately **melts the safety fuse or trips the MCB**, isolating the live wire.
  - **Result:** The user is fully protected from severe, potentially fatal electric shocks!

---

**4. SHORT-CIRCUIT vs OVERLOADING (High-Yield Contrast):**

| Feature | Short-Circuiting | Overloading |
|---------|------------------|-------------|
| **Definition** | Direct contact between Live wire and Neutral wire with zero resistance. | Excessive current drawn when too many high-power devices run simultaneously on one circuit. |
| **Cause** | Damaged wire insulation or internal device fault connecting live and neutral directly. | Connecting too many appliances to a single socket or accidental surge in supply voltage. |
| **Circuit Resistance**| Drops abruptly to **almost ZERO** ($R \\approx 0$). | Decreases moderately as more parallel loads are connected ($1/R_p = \\sum 1/R$). |
| **Resulting Current** | **Extremely massive instantaneous current spike** ($I = V/R \\to \\infty$). | Current steadily exceeds the safe rated capacity of the circuit cable (e.g., drawing $25\\text{ A}$ on a $15\\text{ A}$ line). |
| **Danger** | Severe violent sparking, explosions, immediate electrical fires. | Progressive overheating of wiring, insulation melting, potential electrical fires. |
| **Protection** | Electric Fuse / MCB instantly cuts off the circuit. | Proper circuit rating, distributing loads across multiple sockets, and using correctly rated fuses/MCBs. |

---

**5. ELECTRIC FUSE IN DOMESTIC CIRCUITS:**
- A safety device consisting of a thin wire made of an alloy of **Lead and Tin** with a **low melting point** and suitable resistance.
- **Rule of Connection:** The fuse MUST be connected strictly in **SERIES with the LIVE wire**, located before the appliance or distribution board.
- *Why strictly in the Live wire?* If the fuse were placed in the neutral wire and melted during a fault, the live wire would still remain connected at $220\\text{ V}$ to the appliance casing, delivering a lethal shock to anyone touching it!`,
      formulasOrKeyPoints: [
        {
          title: "Domestic Circuits Key Specs",
          content: `$$\\text{India Supply: } 220\\text{ V}, \\; 50\\text{ Hz AC} \\quad (\\text{changes direction 100 times/sec})$$
$$\\text{Live (Red/Brown) } [220\\text{ V}] \\qquad \\text{Neutral (Black/Blue) } [0\\text{ V}] \\qquad \\text{Earth (Green/Yellow) } [0\\text{ V}]$$
$$\\text{Fuse is placed strictly in SERIES on the LIVE WIRE!}$$`,
          note: "Earth wire provides a low-resistance path to protect users from electric shock when live wire touches metal casing."
        }
      ],
      examinerTraps: [
        {
          trap: "Saying the fuse can be placed in either the live or neutral wire.",
          correction: "A fuse MUST ALWAYS be installed in the LIVE WIRE. If placed in the neutral wire, melting of the fuse leaves the appliance body energized at 220 V relative to earth, posing a severe electrocution hazard."
        }
      ]
    }
  ]
};
