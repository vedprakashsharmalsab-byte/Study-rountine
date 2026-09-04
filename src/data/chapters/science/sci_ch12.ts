import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH12_QUESTIONS: VaultQuestion[] = [
  // 1-MARK MCQs & ASSERTION-REASON
  {
    id: "sci_c12_q1",
    chapter: 12,
    chapterName: "Magnetic Effects of Electric Current",
    marks: 1,
    type: "MCQ",
    question: "A positive charge (proton) enters a magnetic field directed vertically upwards. If the proton travels horizontally towards the East, the direction of magnetic force on it is towards:\n(a) North\n(b) South\n(c) West\n(d) Downwards",
    options: [
      "North",
      "South",
      "West",
      "Downwards"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: Towards South.",
    explanation: "Apply Fleming's Left-Hand Rule: Forefinger points Upwards (Magnetic Field B), Middle finger points East (Current I, in direction of positive proton). The outstretched Thumb naturally points towards South (Force F).",
    formula: "F = q(\\mathbf{v} \\times \\mathbf{B})",
    examinerNote: "Proton is positive, so current is in the direction of velocity (East).",
    source: "NCERT Class 10 Page 231"
  },
  {
    id: "sci_c12_q2",
    chapter: 12,
    chapterName: "Magnetic Effects of Electric Current",
    marks: 1,
    type: "MCQ",
    question: "The magnetic field inside a long straight current-carrying solenoid is:\n(a) Zero\n(b) Decreases as we move towards its ends\n(c) Increases as we move towards its ends\n(d) The same at all points",
    options: [
      "Zero",
      "Decreases as we move towards its ends",
      "Increases as we move towards its ends",
      "The same at all points"
    ],
    correctOption: 3,
    answer: "Option (d) is correct: The same at all points.",
    explanation: "Inside a long straight current-carrying solenoid, the magnetic field lines are parallel, straight, and equally spaced. This uniform density indicates that the magnetic field strength is identical (uniform) at all points inside the core.",
    examinerNote: "Straight parallel lines inside solenoid mean uniform magnetic field.",
    source: "NCERT Class 10 Exercise Question 2"
  },
  {
    id: "sci_c12_q3",
    chapter: 12,
    chapterName: "Magnetic Effects of Electric Current",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): Two magnetic field lines never cross each other.\nReason (R): At the point of intersection, a magnetic compass would point in two different directions, which is physically impossible.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is NOT the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 0,
    answer: "Option (a) is correct.",
    explanation: "The tangent to a magnetic field line gives the net magnetic field direction. Intersecting lines would imply two simultaneous resultant directions at one coordinate point, which cannot occur in nature.",
    examinerNote: "Classic board assertion-reason question.",
    source: "CBSE 2024 Board Question"
  },

  // 2-MARK SHORT ANSWER QUESTIONS
  {
    id: "sci_c12_q4",
    chapter: 12,
    chapterName: "Magnetic Effects of Electric Current",
    marks: 2,
    type: "SA",
    question: "State Maxwell's Right-Hand Thumb Rule. How is it used to determine the direction of the magnetic field around a straight current-carrying conductor?",
    answer: "Right-Hand Thumb Rule: Imagine that you are holding a current-carrying straight conductor in your right hand such that your outstretched thumb points in the direction of the electric current. Then, the fingers of your right hand wrapped around the conductor indicate the direction of the concentric magnetic field lines.",
    steps: [
      "Step 1: State right hand alignment: Thumb = Current direction.",
      "Step 2: State fingers curl = Concentric magnetic field lines direction.",
      "Step 3: If current flows upward, field lines circle counter-clockwise (seen from above)."
    ],
    explanation: "Discovered by Oersted and formalized by Maxwell to map circular magnetic flux.",
    examinerNote: "Must specify 'Right Hand'. Using left hand produces inverted direction.",
    source: "NCERT Class 10 Page 228"
  },
  {
    id: "sci_c12_q5",
    chapter: 12,
    chapterName: "Magnetic Effects of Electric Current",
    marks: 2,
    type: "SA",
    question: "What is an electromagnet? Name two factors upon which the magnetic field strength of an electromagnet depends.",
    answer: "An electromagnet is a temporary magnet consisting of a coil of insulated wire (solenoid) wrapped around a core of soft iron, which behaves as a strong magnet ONLY as long as electric current flows through the coil.\nTwo factors affecting strength:\n(1) Number of turns per unit length (n) of the coil.\n(2) Magnitude of the electric current (I) passing through the coil.",
    steps: [
      "Part 1: Define electromagnet (solenoid + soft iron core).",
      "Part 2: List factors: turns count (n), current magnitude (I)."
    ],
    explanation: "Soft iron has high magnetic permeability and loses its magnetism almost instantly when current is switched off.",
    examinerNote: "Soft iron is used (not steel) because steel becomes permanently magnetized.",
    source: "CBSE 2023 Board Paper"
  },

  // 3-MARK SHORT ANSWER QUESTIONS
  {
    id: "sci_c12_q6",
    chapter: 12,
    chapterName: "Magnetic Effects of Electric Current",
    marks: 3,
    type: "SA",
    question: "State Fleming's Left-Hand Rule. When is the magnetic force experienced by a current-carrying conductor placed in a magnetic field: (i) Maximum? (ii) Minimum?",
    answer: "Fleming's Left-Hand Rule: Stretch the thumb, forefinger, and middle finger of your left hand mutually perpendicular to one another. If the Forefinger represents the direction of the Magnetic Field (B) and the Middle finger represents the direction of Current (I), then the Thumb points in the direction of Motion or mechanical Force (F) acting on the conductor.\n\n(i) Maximum Force: When the conductor is placed PERPENDICULAR (angle θ = 90°) to the direction of the magnetic field ($F_{\\text{max}} = BIl$).\n(ii) Minimum (Zero) Force: When the conductor is placed PARALLEL or anti-parallel (angle θ = 0° or 180°) to the direction of the magnetic field ($F = 0$).",
    steps: [
      "Step 1: State Fleming's left hand rule (Thumb=Force, Forefinger=Field, Middle finger=Current).",
      "Step 2: State maximum force condition (perpendicular, θ = 90°).",
      "Step 3: State minimum force condition (parallel, θ = 0°).",
      "Formula: $F = BIl \\sin\\theta$."
    ],
    explanation: "The Lorentz magnetic force depends on $\\sin\\theta$, which is 1 at 90° and 0 at 0°.",
    formula: "F = B I l \\sin\\theta",
    examinerNote: "Mnemonic: F-B-I (Force, Field, Current) for Thumb, Forefinger, Middle finger.",
    source: "NCERT Class 10 Page 231"
  },
  {
    id: "sci_c12_q7",
    chapter: 12,
    chapterName: "Magnetic Effects of Electric Current",
    marks: 3,
    type: "SA",
    question: "What is an earth wire? Why is it essential to earth metallic appliances (like electric press, toaster, refrigerator) in domestic circuits?",
    answer: "(1) Description: An earth wire is a safety wire with green/yellow insulation connected to a metal plate buried deep inside the earth near the house.\n\n(2) Essential Function: High-power domestic appliances have metallic outer casings. If live wire insulation fails and touches the metallic body, the metal body is energized to 220 V. The earth wire provides an ultra-low-resistance drainage path directly to the ground.\n\n(3) User Protection: The heavy leakage current rushes through the earth wire to the ground rather than through the body of a human touching the appliance (since human body resistance ~1000 Ω is far higher than earth wire ~1 Ω). This sudden surge immediately blows the circuit fuse or trips the MCB, preventing fatal electric shocks.",
    steps: [
      "Step 1: Define earth wire and its green color code.",
      "Step 2: Explain fault condition: live wire touches metallic casing.",
      "Step 3: Explain safety mechanism: low resistance drainage trips fuse, preventing electrocution."
    ],
    explanation: "Earthing provides an alternate path for fault current, safely bypassing human contact.",
    examinerNote: "Key concepts required: 'low resistance path to earth' and 'prevents electric shock by tripping fuse'.",
    source: "Arihant All-In-One Chapter 12"
  },

  // 5-MARK LONG ANSWER & CASE STUDIES
  {
    id: "sci_c12_q8",
    chapter: 12,
    chapterName: "Magnetic Effects of Electric Current",
    marks: 5,
    type: "LA",
    question: "Explain domestic electric wiring circuits:\n(a) Name the three wires used in household circuits, their standard color codes, and their electric potentials.\n(b) Differentiate between Short-Circuiting and Overloading.\n(c) What is the function of an electric fuse in domestic circuits? On which effect of electric current does it operate?",
    answer: "(a) Three Wires:\n- Live Wire (Phase): Red or Brown insulation, at potential of 220 V.\n- Neutral Wire: Black or Light Blue insulation, at potential of 0 V (Potential difference = 220 V).\n- Earth Wire: Green or Yellow insulation, connected to ground plate (0 V potential).\n\n(b) Short-Circuiting vs Overloading:\n- Short-Circuiting: Occurs when the live wire and neutral wire come in direct physical contact due to worn-out insulation or faulty appliance. Resistance drops to nearly zero, causing an instantaneous massive current surge, sparking, and electrical fire.\n- Overloading: Occurs when too many high-power electrical appliances (air conditioner, geyser, heater) are switched on simultaneously on the same socket or circuit, drawing current that exceeds the safe current-carrying capacity of the household wiring.\n\n(c) Electric Fuse:\n- Function: Acts as a sacrificial safety device that protects circuits from overcurrent damage. It contains a thin lead-tin alloy wire of low melting point.\n- Principle: Operates on the Joule's Heating Effect of electric current ($H = I^2Rt$). When current exceeds the rated fuse threshold, excess heat melts the fuse wire, breaking the circuit.",
    steps: [
      "Part (a): 3 wires with color codes (Live-Red/220V, Neutral-Black/0V, Earth-Green/0V).",
      "Part (b): Contrast Short-Circuiting (live-neutral direct contact, zero resistance) with Overloading (too many appliances).",
      "Part (c): Describe fuse wire function and Joule heating principle."
    ],
    explanation: "Standard household supply in India is 220 V alternating current (AC) at a frequency of 50 Hz.",
    examinerNote: "Ensure color codes for old and new standards are noted accurately (Live = Red/Brown; Neutral = Black/Blue; Earth = Green/Yellow).",
    source: "CBSE 2024 Board 5-Mark Question"
  },
  {
    id: "sci_c12_q9",
    chapter: 12,
    chapterName: "Magnetic Effects of Electric Current",
    marks: 4,
    type: "Case Study",
    question: "Case Study: A physics teacher demonstrated electromagnetic force using a light aluminium rod AB suspended horizontally by thin wires between the two poles of a strong horseshoe magnet. The rod is connected in series with a battery, a plug key, and a rheostat.\n\n(a) What happens to the rod when electric current is switched on? What happens if current direction is reversed?\n(b) Which rule determines the direction of displacement of the rod?\n(c) Under what orientation of the rod with respect to magnetic field lines will the mechanical displacement be zero?\n(d) Name two everyday devices that operate on the principle of magnetic force on a current-carrying conductor.",
    answer: "(a) When current is switched on, the rod is mechanically deflected (pushed) in a direction perpendicular to both the current and the magnetic field. When current direction is reversed, the displacement of the rod is reversed in the opposite direction.\n\n(b) Fleming's Left-Hand Rule governs the direction of displacement (force).\n\n(c) The displacement will be ZERO when the rod is aligned PARALLEL (or anti-parallel, θ = 0° or 180°) to the magnetic field lines ($F = BIl \\sin 0° = 0$).\n\n(d) Everyday devices:\n(1) Electric Motor (used in fans, washing machines, mixers).\n(2) Loudspeakers and Galvanometers/moving-coil ammeters.",
    steps: [
      "Part (a): Rod deflects perpendicularly; reverses with current reversal.",
      "Part (b): Name Fleming's Left-Hand Rule.",
      "Part (c): State parallel orientation (θ = 0°) yields zero force.",
      "Part (d): Devices: Electric motor, loudspeakers."
    ],
    explanation: "This classic experiment proved that a magnetic field exerts mechanical force on electric charges in motion.",
    formula: "F = B I l \\sin\\theta",
    examinerNote: "1 mark per sub-part. High occurrence in CBSE practical-based case studies.",
    source: "PW Sample Paper 2026 / NCERT Page 230"
  }
];
