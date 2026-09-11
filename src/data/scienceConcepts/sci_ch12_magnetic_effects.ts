import type { ScienceChapterConcept } from "./types";

export const SCI_CH12_CONCEPT: ScienceChapterConcept = {
  chapterNo: 12,
  title: "Magnetic Effects of Electric Current",
  discipline: "Physics",
  weightage: "6–7 Marks (Board Important)",
  oneLiner: "Current creates magnetic fields (right-hand rule); electromagnets use coils; Fleming's left-hand rule gives motor force direction; generators convert motion to electricity using electromagnetic induction.",
  analogyTitle: "The Dance Between Electricity and Magnetism 💃🕺",
  analogyContent: `Electricity and Magnetism are like best friends who are always together. Where one goes, the other follows!

**Rule 1:** Running electric current through a wire creates a **magnetic field** around it (the wire becomes a temporary magnet!). Wrap the wire into a coil, put an iron core inside → **ELECTROMAGNET** — you've built a phone speaker, a doorbell, a crane at a scrapyard!

**Rule 2:** Move a magnet near a wire → you **generate electricity** in the wire! This is called **electromagnetic induction** — and it's how ALL power stations generate electricity. The turbine spins magnets near coils → electricity flows to your home!

Nature says: *You can't have one without the other.* Electricity makes magnetism; magnetism makes electricity. Michael Faraday discovered this in 1831 — one of humanity's most world-changing discoveries.`,
  sections: [
    {
      id: "magnetic_field",
      label: "1. Magnetic Field Due to Current",
      heading: "Right-Hand Rule, Solenoid & Electromagnets",
      subheading: "Oersted's Experiment + Right-Hand Thumb Rule + Solenoid + Electromagnet + Applications",
      explanation: `**OERSTED'S DISCOVERY (1820):**
Hans Christian Ørsted discovered that a compass needle deflects when placed near a current-carrying wire! This proved that **electric current produces a magnetic field**. This was revolutionary — it showed electricity and magnetism are related.

**MAGNETIC FIELD LINES around a straight wire:**
- Concentric circles centred on the wire
- Direction: **Right-Hand Thumb Rule** — Point thumb of right hand in the direction of current flow → fingers curl in the direction of magnetic field lines (circle direction)
- Closer to wire = denser field lines = stronger field
- Increasing current = stronger magnetic field

**MAGNETIC FIELD DUE TO A CIRCULAR LOOP:**
At the centre of the loop, field lines are straight (perpendicular to the plane of loop).
- Right-hand rule: Curl fingers in the direction of current → thumb points toward the NORTH pole of the loop.

**SOLENOID (Cylindrical coil of wire):**
- A solenoid is a long coil of wire with many turns (n turns/length)
- Magnetic field INSIDE solenoid is uniform (parallel field lines) — just like a bar magnet!
- One end acts as NORTH pole (field lines emerge), other as SOUTH pole (field lines enter)
- **North pole:** Looking at one end, if current flows ANTICLOCKWISE → that's the N pole
- **South pole:** Looking at one end, if current flows CLOCKWISE → that's the S pole
- Magnetic field strength: $B = \\mu_0 n I$ (n = turns per length, I = current)

**ELECTROMAGNET:**
A solenoid with a soft iron core inside.
- The iron core gets magnetised and massively amplifies the magnetic field!
- **Temporary magnet** — loses magnetism when current switched off (that's why SOFT iron, not hard iron, is used)
- Can be turned on/off, direction reversed, strength adjusted

**Applications of Electromagnets:**
- Electric bell (attracts/releases striker repeatedly)
- Loudspeaker (coil in magnetic field vibrates with audio current → sound)
- Maglev trains (floating trains)
- MRI machines (medical imaging)
- Industrial cranes lifting scrap metal
- Relay switches in circuits`,
      formulasOrKeyPoints: [
        {
          title: "Right-Hand Thumb Rule (for current carrying wire)",
          content: `**For Straight Wire:**
If the **RIGHT THUMB** points in the direction of conventional current, then the **FINGERS CURL** in the direction of the magnetic field around the wire.

**For Solenoid/Loop (Right-Hand Grip Rule):**
If you GRIP the solenoid with the right hand such that the FINGERS point in the direction of current in the coil (through the loops), then the THUMB points toward the NORTH POLE.

**Clock Rule for Circular Loop:**
- Current flows ANTICLOCKWISE when viewed from a face → that face = NORTH pole
- Current flows CLOCKWISE when viewed from a face → that face = SOUTH pole

**MNEMONIC:** 
ANTI-Clockwise = NORTH (A=N in alphabet? Anti = North)
CLOCKwise = SOUTH (C and S = Clock = South)`,
          note: "The Right-Hand Thumb Rule is for CURRENT-carrying wires. Fleming's Left-Hand Rule is for MOTORS (force on current in magnetic field). Fleming's Right-Hand Rule is for GENERATORS. The distinction between these three rules is critical for Board MCQs."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Right-Hand Thumb Rule with Fleming's Left-Hand Rule.",
          correction: "RIGHT-HAND THUMB RULE: Used to find the direction of MAGNETIC FIELD around a current-carrying conductor. FLEMING'S LEFT-HAND RULE: Used to find the FORCE (motion) on a current-carrying conductor in a magnetic field (MOTORS). FLEMING'S RIGHT-HAND RULE: Used to find the induced current direction (GENERATORS). Three different rules for three different situations!"
        }
      ]
    },
    {
      id: "force_motor",
      label: "2. Force on Current-Carrying Conductor & Electric Motor",
      heading: "Fleming's Left-Hand Rule & How Motors Convert Electricity to Rotation",
      subheading: "Force on Current in Magnetic Field + Fleming's LHR + DC Motor Working",
      explanation: `**FORCE ON A CURRENT-CARRYING CONDUCTOR IN A MAGNETIC FIELD:**
A wire carrying current in a magnetic field experiences a force (push/pull). This is the basis of ALL electric motors!

$$\\vec{F} = I(\\vec{L} \\times \\vec{B}) \\implies F = BIL\\sin\\theta$$

Where F = force, B = magnetic field strength, I = current, L = length of wire in field, θ = angle between current direction and magnetic field.

Maximum force when current ⊥ magnetic field (θ = 90°, sin 90° = 1).
Zero force when current ∥ magnetic field (θ = 0° or 180°, sin 0° = 0).

**FLEMING'S LEFT-HAND RULE (for Motors — Force direction):**
Hold the LEFT hand with:
- **Fore/Index finger** → direction of **B** (magnetic **F**ield — **F** for Fore)
- **Middle/Second finger** → direction of **I** (conventional **C**urrent — **C** for Center)
- **Thumb** → direction of **F**orce (mo**T**ion — **T** for Thumb)

*Mnemonic: FBI — **F**ore finger = **B** field; mIddle finger = **I** current; **T**humb = **T**hrust (force)*

**ELECTRIC MOTOR — Working Principle (DC Motor):**
*Converts electrical energy → mechanical (rotational) energy*

**Components:**
1. **Armature (Coil):** Rectangular coil of wire (ABCD) that rotates — placed in the magnetic field
2. **Permanent Magnet:** Provides the external magnetic field
3. **Commutator (Split Ring):** Two halves of a split copper ring — reverses the current direction in the coil every half rotation, ensuring continuous rotation in ONE direction
4. **Brushes:** Carbon brushes maintain electrical contact with the rotating commutator
5. **DC Supply:** Battery provides the direct current

**Working:**
- Current flows through ABCD coil in magnetic field
- Side AB experiences force (say, upward); side CD experiences opposite force (downward) → TORQUE
- Coil rotates 90° → reaches vertical position → both sides AB and CD parallel to B → zero force momentarily
- Commutator switches current direction at this point → current now flows in DCBA direction
- New force direction maintains rotation in same direction!
- Coil rotates continuously → armature shaft spins → mechanical work done

**Applications of Electric Motors:**
- Electric fans, mixers, washing machines, lifts, electric vehicles, trains`,
      formulasOrKeyPoints: [
        {
          title: "Fleming's Left-Hand Rule — Memory Method",
          content: `Hold your LEFT hand flat:

$$\\underbrace{\\text{Fore (Index) Finger}}_{\\text{Points in direction of } \\vec{B} \\text{ (Field)}} \\quad \\underbrace{\\text{Middle Finger}}_{\\text{Points in direction of } I \\text{ (Current)}} \\quad \\underbrace{\\text{Thumb}}_{\\text{Points in direction of Force (Thrust/Motion)}}$$

All three fingers must be **mutually perpendicular** (90° to each other).

**Example:** 
- Magnetic field points NORTH (fore finger points north)
- Current flows UPWARD (middle finger points up)  
- Force on wire = WEST (thumb points west) → wire moves WEST

**Why LEFT hand?**
Motors use **conventional current flow** — the LOAD effect. LEFT hand = Motor (force/motion). RIGHT hand = Generator (induced current).`,
          note: "The COMMUTATOR is the genius component that makes DC motors work. Without it, the coil would oscillate back and forth instead of rotating continuously. The commutator reverses current direction every half turn to maintain unidirectional torque."
        }
      ],
      examinerTraps: [
        {
          trap: "Using the right hand for Fleming's motor rule.",
          correction: "MOTOR (current input, motion output) → FLEMING'S LEFT-HAND RULE. GENERATOR (motion input, current output) → FLEMING'S RIGHT-HAND RULE. A useful memory trick: Motor → Left; Generator → Right. Or: 'M' in Motor looks like it has two legs walking Left."
        }
      ]
    },
    {
      id: "electromagnetic_induction",
      label: "3. Electromagnetic Induction & AC Generator",
      heading: "Faraday's Greatest Discovery — Motion Creates Electricity",
      subheading: "Faraday's Law + Lenz's Law + AC Generator + DC vs AC + Domestic Wiring",
      explanation: `**ELECTROMAGNETIC INDUCTION (Faraday, 1831):**
When a conductor moves in a magnetic field (OR when the magnetic field through a coil changes), an **EMF is induced** in the conductor, which drives a current if the circuit is closed.

*The reverse of electric motor: Motor converts electricity → motion; Generator converts motion → electricity!*

**Conditions for induced EMF:**
1. Relative motion between conductor and magnetic field
2. OR changing magnetic flux through a coil (changing B, area, or angle)

**FARADAY'S LAW:** The induced EMF is proportional to the **rate of change of magnetic flux**.
$$\\varepsilon = -N\\dfrac{\\Delta\\Phi}{\\Delta t}$$

**LENZ'S LAW:** The direction of induced current is such that it **OPPOSES the change** that caused it.
- Moving a north pole toward a coil → induced current creates north pole facing the approaching magnet → REPELS it
- This is conservation of energy in action — you must do work against this opposition!

---

**AC GENERATOR (Electric Generator):**
*Converts mechanical energy → electrical energy*

**Components:**
1. **Armature coil (ABCD):** Rotates in magnetic field
2. **Permanent magnets (or field magnets)**
3. **Slip rings (2 complete rings):** Unlike commutator (split), slip rings are full rings — do NOT reverse current
4. **Brushes:** Maintain contact with slip rings
5. **External circuit/Load**

**Working:**
- Coil rotates in magnetic field (driven by turbine — steam, water, wind)
- As coil rotates, the magnetic flux through it changes → EMF induced (Faraday's law)
- The induced EMF and current alternate in direction every half rotation → **Alternating Current (AC)**!
- One full rotation = one complete cycle = one sine wave

**AC vs DC:**
| Feature | AC (Alternating Current) | DC (Direct Current) |
|---------|------------------------|-------------------|
| Direction | Reverses periodically | Always same direction |
| Source | Generator, mains power | Battery, solar cell |
| Frequency (India) | 50 Hz (50 cycles/second) | 0 Hz (no cycles) |
| Voltage (India) | 220 V (RMS) | Fixed value |
| Transmission | Can use transformers → transmitted at high voltage, low current → less power loss | Cannot use transformers |
| Use at home | Yes (fans, ACs, lights) | Yes (phone charging, LED, circuits) |

**DOMESTIC ELECTRIC CIRCUIT:**
- Live wire (Red/Brown): At HIGH potential (220 V)
- Neutral wire (Black/Blue): At approximately ZERO potential
- Earth wire (Green/Yellow): Safety — connected to ground; if live wire touches appliance body → current flows to earth → no shock!
- **Short circuit:** Live and neutral touch → zero resistance → enormous current → fires!
- **Overloading:** Too many high-power devices on one circuit → excessive current → overheating
- **Fuse/MCB:** Placed on LIVE wire — melts (fuse) or trips (MCB) to break circuit when excess current flows`,
      examinerTraps: [
        {
          trap: "Saying the generator uses a commutator like a motor.",
          correction: "A DC MOTOR uses a SPLIT-RING COMMUTATOR to reverse current every half rotation to maintain unidirectional motion. An AC GENERATOR uses SLIP RINGS (full rings, not split) — these do NOT reverse current direction. The alternating motion of the coil naturally generates AC. If you want a DC generator, you ADD a commutator to the generator."
        },
        {
          trap: "Saying the Earth wire carries current during normal operation.",
          correction: "The EARTH wire does NOT carry any current during normal operation — it is a SAFETY wire. It carries current ONLY if there is a fault (like a live wire accidentally touching the metal body of an appliance). The earth wire provides a low-resistance path to earth → current flows to earth instead of through a person."
        }
      ]
    }
  ]
};
