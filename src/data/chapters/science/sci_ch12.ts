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
    answer: "(a) When current is switched on, the rod is mechanically deflected (pushed) in a direction perpendicular to both the current and the magnetic field. When current direction is reversed, the displacement of the rod is reversed in the opposite direction.\n\n(b) Fleming's Left-Hand Rule governs the direction of displacement (force).\n\n(c) The displacement will be ZERO when the rod is aligned PARALLEL (or anti-parallel, θ = 0° or 180°) to the magnetic field lines ($F = BIl \\sin 0° = 0$).\n\n(d) Everyday devices:\n\n- **(1)** Electric Motor (used in fans, washing machines, mixers).\n\n- **(2)** Loudspeakers and Galvanometers/moving-coil ammeters.",
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
  },
  {"id": "sci_c12_q10",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 1,
    "type": "MCQ",
    "question": "A compass needle is placed near a current-carrying straight wire. If the current in the wire is increased, the deflection of the compass needle will:\n(a) Decrease\n(b) Increase\n(c) Remain unchanged\n(d) First increase then decrease",
    "options": [
      "Decrease",
      "Increase",
      "Remain unchanged",
      "First increase then decrease"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Increase.",
    "explanation": "The magnetic field strength B produced at a given distance from a straight current-carrying wire is directly proportional to the magnitude of current I ($B \\propto I$). Increasing current strengthens the magnetic field, increasing compass needle deflection.",
    "formula": "B \\propto I",
    "source": "NCERT Class 10 Page 227"
  },
  {
    "id": "sci_c12_q11",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 1,
    "type": "MCQ",
    "question": "The pattern of the magnetic field lines produced by another straight current-carrying wire is:\n(a) Straight lines parallel to conductor\n(b) Concentric circles centered on the conductor\n(c) Helical spirals along the wire\n(d) Parabolic loops",
    "options": [
      "Straight lines parallel to conductor",
      "Concentric circles centered on the conductor",
      "Helical spirals along the wire",
      "Parabolic loops"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Concentric circles centered on the conductor.",
    "explanation": "Magnetic field lines around a straight current-carrying conductor form a series of concentric circles whose planes are perpendicular to the wire, determined by Maxwell's Right-Hand Thumb Rule.",
    "source": "NCERT Class 10 Page 228"
  },
  {
    "id": "sci_c12_q12",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 1,
    "type": "MCQ",
    "question": "An electron enters a magnetic field at right angles to it. The direction of force acting on the electron will be:\n(a) To the right\n(b) To the left\n(c) Out of the page\n(d) Into the page",
    "options": [
      "To the right",
      "To the left",
      "Out of the page",
      "Into the page"
    ],
    "correctOption": 3,
    "answer": "Option (d) is correct: Into the page.",
    "explanation": "Apply Fleming's Left-Hand Rule: Since an electron is negatively charged, the direction of conventional electric current is OPPOSITE to the electron's velocity. With Forefinger pointing along B and Middle finger pointing opposite to electron motion, the Thumb points into the page.",
    "examinerNote": "Crucial rule: Current direction is opposite to the motion of electrons.",
    "source": "NCERT Class 10 Exercise Question 4"
  },
  {
    "id": "sci_c12_q13",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 1,
    "type": "MCQ",
    "question": "Which of the following properties of a proton can change while it moves freely in a uniform magnetic field?\n(a) Mass only\n(b) Speed and mass\n(c) Velocity and momentum\n(d) Kinetic energy alone",
    "options": [
      "Mass only",
      "Speed and mass",
      "Velocity and momentum",
      "Kinetic energy alone"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: Velocity and momentum.",
    "explanation": "Magnetic Lorentz force is perpendicular to velocity ($F \\perp v$), doing zero work. Thus, speed and kinetic energy remain constant. However, the magnetic force continuously changes the direction of motion, changing both vector velocity and vector momentum ($p = mv$).",
    "formula": "\\mathbf{F} = q(\\mathbf{v} \\times \\mathbf{B})",
    "source": "NCERT Class 10 Page 231 Question 2"
  },
  {
    "id": "sci_c12_q14",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 1,
    "type": "MCQ",
    "question": "Assertion (A): On freely suspending a current-carrying solenoid, it always comes to rest in the North-South direction.\nReason (R): One end of a current-carrying solenoid behaves as a magnetic North pole and the other end behaves as a South pole.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is NOT the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    "options": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct.",
    "explanation": "A current-carrying solenoid generates an external magnetic field identical to a bar magnet. The Earth's magnetic field exerts a torque, aligning the solenoid along the geographic North-South axis.",
    "source": "CBSE 2024 Board Question"
  },
  {
    "id": "sci_c12_q15",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 1,
    "type": "MCQ",
    "question": "The frequency of alternating current (AC) domestic electricity supply in India is:\n(a) 0 Hz (Direct Current)\n(b) 50 Hz\n(c) 60 Hz\n(d) 100 Hz",
    "options": [
      "0 Hz (Direct Current)",
      "50 Hz",
      "60 Hz",
      "100 Hz"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: 50 Hz.",
    "explanation": "In India, household AC supply alternates direction 100 times per second, giving a frequency of 50 Hz (50 complete cycles per second). Voltage is 220 V.",
    "source": "NCERT Class 10 Page 236"
  },
  {
    "id": "sci_c12_q16",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 1,
    "type": "MCQ",
    "question": "The magnetic field lines outside a bar magnet emerge from the ________ and enter at the ________:\n(a) North pole, South pole\n(b) South pole, North pole\n(c) East pole, West pole\n(d) Center, Ends",
    "options": [
      "North pole, South pole",
      "South pole, North pole",
      "East pole, West pole",
      "Center, Ends"
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct: North pole, South pole.",
    "explanation": "Outside a magnet, magnetic field lines emerge from the North pole and merge into the South pole. Inside the magnet, field lines travel from South pole to North pole, forming continuous closed loops.",
    "examinerNote": "Field lines are continuous closed curves. Inside: S to N; Outside: N to S.",
    "source": "NCERT Class 10 Page 225"
  },
  {
    "id": "sci_c12_q17",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 1,
    "type": "MCQ",
    "question": "At the center of a current-carrying circular loop of radius R, the magnetic field strength is:\n(a) Inversely proportional to radius R and directly proportional to current I\n(b) Directly proportional to R²\n(c) Independent of current I\n(d) Zero",
    "options": [
      "Inversely proportional to radius R and directly proportional to current I",
      "Directly proportional to R²",
      "Independent of current I",
      "Zero"
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct: Inversely proportional to radius R and directly proportional to current I ($B \\propto \\frac{I}{R}$).",
    "explanation": "The magnetic field at the center of a circular coil of N turns is $B = \\frac{\\mu_0 N I}{2R}$. Thus, $B \\propto I$ and $B \\propto \\frac{1}{R}$.",
    "formula": "B = \\frac{\\mu_0 N I}{2R}",
    "source": "CBSE 2022"
  },
  {
    "id": "sci_c12_q18",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 1,
    "type": "MCQ",
    "question": "In Fleming's Left-Hand Rule, the Forefinger, Middle finger, and Thumb represent respectively:\n(a) Force, Current, Magnetic Field\n(b) Magnetic Field, Electric Current, Motion/Force\n(c) Electric Current, Magnetic Field, Force\n(d) Motion, Magnetic Field, Induced Current",
    "options": [
      "Force, Current, Magnetic Field",
      "Magnetic Field, Electric Current, Motion/Force",
      "Electric Current, Magnetic Field, Force",
      "Motion, Magnetic Field, Induced Current"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Magnetic Field (Forefinger), Electric Current (Middle finger), Motion/Force (Thumb).",
    "explanation": "Mnemonic FBI: Forefinger = Field (B), Middle finger = Current (I), Thumb = Force (F).",
    "source": "NCERT Class 10 Page 231"
  },
  {
    "id": "sci_c12_q19",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 1,
    "type": "MCQ",
    "question": "At the moment of a short circuit in a household electrical circuit, the electric current in the circuit:\n(a) Reduces substantially\n(b) Does not change\n(c) Increases enormously\n(d) Fluctuates intermittently",
    "options": [
      "Reduces substantially",
      "Does not change",
      "Increases enormously",
      "Fluctuates intermittently"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: Increases enormously.",
    "explanation": "When live wire and neutral wire come in direct contact, circuit resistance plummets to near zero ($R \\to 0$). By Ohm's law ($I = V/R$), current shoots up to hundreds of amperes, causing severe sparking and fire hazard.",
    "source": "NCERT Class 10 Exercise Question 6"
  },
  {
    "id": "sci_c12_q20",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 1,
    "type": "MCQ",
    "question": "Which of the following materials is most suitable for making the core of an electromagnet?\n(a) Steel\n(b) Alnico\n(c) Soft iron\n(d) Copper",
    "options": [
      "Steel",
      "Alnico",
      "Soft iron",
      "Copper"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: Soft iron.",
    "explanation": "Soft iron has high magnetic permeability (magnetizes easily and strongly) and low magnetic retentivity (loses its magnetism instantly when current stops), making it the ideal core for electromagnets.",
    "source": "NCERT Class 10 Page 230"
  },
  {
    "id": "sci_c12_q21",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 1,
    "type": "MCQ",
    "question": "A uniform magnetic field is represented by:\n(a) Diverging curved lines\n(b) Converging curved lines\n(c) Equidistant parallel straight lines\n(d) Concentric circles",
    "options": [
      "Diverging curved lines",
      "Converging curved lines",
      "Equidistant parallel straight lines",
      "Concentric circles"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: Equidistant parallel straight lines.",
    "explanation": "A uniform magnetic field has constant magnitude and identical direction at all coordinates, represented graphically by equally spaced, parallel straight lines (e.g. inside a solenoid).",
    "source": "CBSE 2023 Board Paper"
  },
  {
    "id": "sci_c12_q22",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 2,
    "type": "SA",
    "question": "List four key characteristics of magnetic field lines produced by a magnet.",
    "answer": "1. Direction: Field lines emerge from the North pole and merge into the South pole outside the magnet; inside the magnet, they run from South to North, forming continuous closed loops.\n\n2. Field Strength: The degree of closeness (density) of field lines indicates the strength of the magnetic field (stronger near poles where lines are crowded).\n\n3. Non-Intersection: Two magnetic field lines never cross or intersect each other.\n\n4. Tangent: The tangent drawn at any point on a field line gives the direction of resultant magnetic field at that point.",
    "source": "NCERT Class 10 Page 225"
  },
  {
    "id": "sci_c12_q23",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 2,
    "type": "SA",
    "question": "Why do two magnetic field lines never intersect each other? Explain with a diagram description.",
    "answer": "(1) Reason: The direction of the magnetic field at any point is given by the direction in which a compass needle points (tangent to the field line).\n\n(2) Consequence of Intersection: If two field lines crossed at a point P, a magnetic compass placed at that intersection coordinate would have to point in two different directions simultaneously. Since a physical compass needle can point in only one unique resultant direction in space, intersection of magnetic field lines is physically impossible.",
    "examinerNote": "State compass pointing in two directions simultaneously.",
    "source": "NCERT Class 10 Page 226"
  },
  {
    "id": "sci_c12_q24",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 2,
    "type": "SA",
    "question": "What is a solenoid? Compare the magnetic field produced by a current-carrying solenoid with that of a bar magnet.",
    "answer": "(1) Definition: A solenoid is a long cylindrical coil containing many circular turns of insulated copper wire wrapped closely in the shape of a cylinder.\n\n(2) Comparison with Bar Magnet:\n- The pattern of magnetic field lines outside a current-carrying solenoid is identical to that of a bar magnet.\n- One end of the solenoid behaves as a magnetic North pole and the opposite end behaves as a South pole.\n- Inside the core, field lines are straight and parallel, indicating a uniform magnetic field.",
    "source": "NCERT Class 10 Page 229"
  },
  {
    "id": "sci_c12_q25",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 2,
    "type": "SA",
    "question": "Differentiate between an Electromagnet and a Permanent Magnet on the basis of core material, magnetic retentivity, and polarity reversibility.",
    "answer": "(1) Core Material:\n- Electromagnet: Soft iron core wrapped with insulated wire.\n- Permanent Magnet: High retentivity alloys like Steel, Alnico, or Nipermag.\n\n(2) Retentivity & Control:\n- Electromagnet: Temporary magnet; magnetism can be switched on and off instantly by controlling electric current.\n- Permanent Magnet: Permanent; cannot be easily demagnetized by switching.\n\n(3) Polarity Control:\n- Electromagnet: North and South poles can be interchanged simply by reversing current direction.\n- Permanent Magnet: Polarity is permanently fixed and cannot be changed.",
    "source": "CBSE 2024 Board Question"
  },
  {
    "id": "sci_c12_q26",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 2,
    "type": "SA",
    "question": "What is the function of an earth wire in domestic electrical appliances having metallic bodies (e.g., refrigerator, washing machine)?",
    "answer": "(1) Electrical Safety Mechanism: Metallic-bodied appliances are connected to the earth wire (green insulation), which terminates in a copper plate buried deep in moist ground.\n\n(2) Prevention of Shocks: If live wire insulation wears out and touches the metallic casing, current flows safely through the low-resistance earth wire to the ground rather than through a human user's body. This sudden large leakage current blows the fuse or trips the MCB, cutting off supply.",
    "source": "NCERT Class 10 Page 237"
  },
  {
    "id": "sci_c12_q27",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 2,
    "type": "SA",
    "question": "What is the difference between Direct Current (DC) and Alternating Current (AC)? Name one source for each.",
    "answer": "(1) Direct Current (DC): An electric current whose magnitude and direction remain constant and unidirectional over time.\nSource: Chemical dry cell, automobile lead-acid battery, or solar cell.\n\n(2) Alternating Current (AC): An electric current that reverses its direction periodically at regular intervals of time.\nSource: AC generators in thermal/hydroelectric power stations, or household AC mains (220 V, 50 Hz).",
    "source": "NCERT Class 10 Page 236"
  },
  {
    "id": "sci_c12_q28",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 3,
    "type": "SA",
    "question": "State the rule used to determine the direction of:\n(a) Magnetic field produced around a straight conductor carrying current.\n(b) Force experienced by a current-carrying straight conductor placed in a magnetic field.\n(c) Magnetic field produced at the center of a circular coil carrying current.",
    "answer": "(a) Maxwell's Right-Hand Thumb Rule: Imagine gripping the conductor in your right hand with the outstretched thumb pointing along the electric current; then the curled fingers encircling the conductor show the direction of magnetic field lines.\n\n(b) Fleming's Left-Hand Rule: Stretch the thumb, forefinger, and middle finger of the left hand mutually perpendicular to each other. If the Forefinger points along the Magnetic Field (B) and the Middle finger along the Current (I), the Thumb points in the direction of Motion/Force (F).\n\n(c) Right-Hand Palm / Clock Face Rule: Looking at the face of the circular coil, if current flows clockwise, that face acts as a South pole. If current flows counter-clockwise, that face acts as a North pole.",
    "examinerNote": "Name each rule accurately: Maxwell's Right Hand Thumb Rule, Fleming's Left Hand Rule, and Clock Face Rule.",
    "source": "CBSE 2023 Board Paper"
  },
  {
    "id": "sci_c12_q29",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 3,
    "type": "SA",
    "question": "Describe an experiment with iron filings and a cardboard sheet to demonstrate the magnetic field pattern around a straight current-carrying copper wire.",
    "answer": "(1) Experimental Setup: A thick copper wire is passed vertically through the center of a stiff horizontal cardboard sheet clamped to a stand. The wire is connected in series with a 12 V battery, a plug key, and a rheostat.\n\n(2) Procedure: Fine iron filings are sprinkled uniformly on the cardboard. The key is inserted to pass a current of ~4–5 A, and the cardboard is gently tapped several times.\n\n(3) Observations & Conclusions:\n- The iron filings align themselves into distinct concentric circular patterns centered around the copper wire.\n- Near the wire, the circles are dense and closely spaced (strong field); as distance r increases, the circles become wider and sparse ($B \\propto 1/r$).\n- Reversing the current direction reverses the compass needle orientation around the circles, validating Maxwell's Right-Hand Thumb Rule.",
    "formula": "B \\propto \\frac{I}{r}",
    "source": "NCERT Class 10 Activity 13.5"
  },
  {
    "id": "sci_c12_q30",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 3,
    "type": "SA",
    "question": "Factors influencing magnetic field strength:\n(a) How does the magnetic field (B) of a circular coil vary with: (i) number of turns (N), (ii) current (I), (iii) radius (R)?\n(b) Why is the magnetic field produced by a coil of N turns N times as large as that produced by a single turn?",
    "answer": "(a) Variations of Magnetic Field:\n(i) Number of Turns (N): Directly proportional ($B \\propto N$).\n(ii) Current (I): Directly proportional ($B \\propto I$).\n(iii) Radius (R): Inversely proportional ($B \\propto 1/R$).\nOverall formula: $B = \\frac{\\mu_0 N I}{2R}$.\n\n(b) Why Field Multiplies N Times:\nIn a coil of N turns, electric current flows through each individual turn in the exact same circular direction. Because magnetic fields are vector quantities that follow the principle of superposition, the magnetic field contributed by each individual turn adds up constructively: $B_{\\text{total}} = B_1 + B_2 + \\dots + B_N = N \\times B_{\\text{single turn}}$.",
    "formula": "B = \\frac{\\mu_0 N I}{2R}",
    "source": "NCERT Class 10 Page 229"
  },
  {
    "id": "sci_c12_q31",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 3,
    "type": "SA",
    "question": "Differentiate clearly between Short-Circuiting and Overloading in domestic electric wiring:\n(a) Define both phenomena.\n(b) State one specific cause for each.\n(c) Name two safety devices used to protect domestic appliances from them.",
    "answer": "(a) Definitions:\n- Short-Circuiting: Occurs when the live wire and neutral wire come in direct physical contact. Resistance drops to nearly zero, triggering an instantaneous massive current surge.\n- Overloading: Occurs when the total electrical power drawn by all running appliances simultaneously exceeds the rated safe current carrying capacity of the circuit wiring.\n\n(b) Specific Causes:\n- Cause of Short-Circuit: Faulty or melted wire insulation due to aging, or an internal short in a defective appliance.\n- Cause of Overloading: Connecting too many high-wattage appliances (air conditioner, heater, microwave, iron) to a single power strip/socket.\n\n(c) Two Safety Devices: Electric Fuse and Miniature Circuit Breaker (MCB).",
    "source": "NCERT Class 10 Page 238"
  },
  {
    "id": "sci_c12_q32",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 3,
    "type": "SA",
    "question": "A uniform magnetic field B is directed horizontally into the page. A charged particle enters the field moving from left to right:\n(a) If the particle is a proton (+ve charge), determine the direction of force on it.\n(b) If the particle is an alpha particle (He²⁺), determine the direction of force.\n(c) If the particle is a neutron, what force does it experience? Justify.",
    "answer": "(a) Proton (+ve charge):\nDirection of current is along the proton's velocity (Left to Right). Using Fleming's Left-Hand Rule: Forefinger points into page (Field B), Middle finger points Left to Right (Current I). The Thumb points UPWARDS towards the top of the page.\n\n(b) Alpha Particle (He²⁺):\nLike the proton, an alpha particle is positively charged. Hence, the force acting on it is directed UPWARDS towards the top of the page (with twice the magnitude of force since $q = 2e$).\n\n(c) Neutron:\nA neutron carries ZERO net electric charge ($q = 0$). By the magnetic Lorentz force equation ($F = qvB \\sin\\theta = 0$), a neutron experiences NO magnetic deflection force and travels straight in an undeflected path.",
    "formula": "F = q(\\mathbf{v} \\times \\mathbf{B})",
    "source": "CBSE 2024 Board Question"
  },
  {
    "id": "sci_c12_q33",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 3,
    "type": "SA",
    "question": "Explain the construction and working of an electromagnet. Why is soft iron preferred over steel as the core of an electromagnet?",
    "answer": "(1) Construction: Consists of a long solenoid (coil of insulated copper wire) wound tightly around a core rod of soft iron, connected to a battery and switch.\n\n(2) Working: When current is switched on, the magnetic field of the solenoid strongly aligns magnetic domains in the soft iron core, creating an intense magnetic field hundreds of times stronger than an air-core solenoid.\n\n(3) Soft Iron vs Steel:\n- Soft Iron: Has high magnetic permeability and negligible retentivity. It magnetizes instantly when current flows and loses almost 100% of its magnetism the moment current is switched off (temporary magnet).\n- Steel: Retains residual magnetism permanently once magnetized (high retentivity) and cannot be turned off, making it useless for cranes and electric bells.",
    "source": "NCERT Class 10 Page 230"
  },
  {
    "id": "sci_c12_q34",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 3,
    "type": "SA",
    "question": "Domestic electricity supply in Indian homes:\n(a) What are the two main electric supply circuits installed in homes, and what are their current ratings?\n(b) Why is alternating current preferred over direct current for long-distance electrical power transmission?",
    "answer": "(a) Two Domestic Circuits:\n1. 15 A Power Circuit: For high-power heating appliances such as geysers, air conditioners, refrigerators, and electric irons.\n2. 5 A Lighting Circuit: For low-power appliances such as LED bulbs, tube lights, fans, and televisions.\n\n(b) Advantage of AC Transmission:\nAlternating Current can be stepped up to extremely high voltages (e.g. 132 kV to 400 kV) using step-up transformers at power generating stations. At high voltage, transmission current ($I = P/V$) is tiny. Since Joule heat transmission loss is $P_{\\text{loss}} = I^2R$, transmission losses are dramatically minimized. At city substations, step-down transformers safely reduce voltage back to 220 V for domestic consumption.",
    "formula": "P_{\\text{loss}} = I^2R",
    "source": "NCERT Class 10 Page 236"
  },
  {
    "id": "sci_c12_q35",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In an industrial recycling yard, an electric scrapyard crane equipped with a massive circular electromagnet is used to separate scrap iron from garbage heaps and load it onto cargo trucks.\n\n(a) Describe the core material and winding used in the crane's electromagnet.\n(b) Explain step-by-step how the crane operator picks up several tons of iron scrap and drops it precisely inside a truck.\n(c) What would happen if a permanent magnet was used instead of an electromagnet on the crane?\n(d) List two methods the crane engineer can use to double the lifting capacity of the crane's electromagnet.",
    "answer": "(a) Construction: The electromagnet contains a massive cylindrical core of Soft Iron wound with thousands of turns of thick insulated copper wire.\n\n(b) Operating Sequence:\n1. Picking Scrap: The crane lowers the unpowered magnet onto the metal scrap heap. The operator closes the switch; electric current flows through the coil, transforming the soft iron into a tremendously powerful magnet that attracts and locks tons of scrap iron to its base.\n2. Releasing Scrap: The crane lifts and swings the scrap load over the truck bed. The operator opens the switch; the current cuts off instantly. Soft iron has zero retentivity, so it loses all magnetism within milliseconds and drops the scrap precisely into the truck.\n\n(c) Permanent Magnet Failure: If a permanent magnet were used, it would attract the iron scrap, but the operator would have no way to release or detach the scrap without physically prying it off with crowbars.\n\n(d) Two Methods to Increase Lifting Capacity:\n- Increase the magnitude of electric current ($I$) flowing through the coil.\n- Increase the total number of turns per unit length ($n$) in the solenoid coil.",
    "source": "CBSE Official Sample Paper 2025"
  },
  {
    "id": "sci_c12_q36",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In an electrical safety audit of a newly constructed building, an engineer inspected the main distribution board and electrical grounding systems.\n\n(a) Identify the three wires entering a residential home from the street pole, their potential differences, and their modern insulation color codes.\n(b) Explain why a high-power water geyser requires a 3-pin plug while an electric clock uses a 2-pin plug.\n(c) Why is the earth pin in a 3-pin plug visibly thicker and longer than the live and neutral pins?\n(d) What electrical hazard arises if the earth wire is accidentally disconnected from an electric washing machine with damaged internal insulation?",
    "answer": "(a) Three Main Distribution Wires:\n- Live Wire (Phase): Brown (or Red), at 220 V AC potential.\n- Neutral Wire: Light Blue (or Black), at 0 V potential (Potential difference between Live and Neutral = 220 V).\n- Earth Wire: Green or Green-with-Yellow stripe, connected to buried copper grounding plate (0 V potential).\n\n(b) 3-Pin vs 2-Pin Plug: A water geyser has an exposed metallic outer tank; if insulation fails, the metal body becomes charged to 220 V, requiring the third grounding pin for safety. A plastic-cased clock is double-insulated with no exposed conductive metal, making grounding unnecessary.\n\n(c) Longer & Thicker Earth Pin Design:\n- Longer Pin: Ensures that upon insertion, the earth connection is established FIRST before live and neutral pins contact power. Upon removal, the earth connection breaks LAST.\n- Thicker Pin: Mechanically prevents accidental insertion of the earth pin into live or neutral sockets.\n\n(d) Hazard of Disconnected Earth Wire: If the live wire touches the metal casing without an earth connection, the entire exterior metal frame is energized to 220 V. Anyone touching the machine completes a circuit through their body to the floor, suffering fatal cardiac arrest from electrocution.",
    "examinerNote": "The 'first to connect, last to disconnect' principle for the longer earth pin is a top board explanation.",
    "source": "CBSE 2023 Case-Based Question"
  },
  {
    "id": "sci_c12_q37",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In an advanced physics project, students analyzed magnetic field patterns around long straight solenoids. Solenoid A has length L, radius R, and 500 turns carrying 2 A current. Solenoid B has length L, radius R, and 1000 turns carrying 1 A current. Solenoid C has length L, radius R, and 500 turns with a soft iron core inserted inside carrying 2 A current.\n\n(a) How does the internal magnetic field strength of Solenoid A compare to Solenoid B?\n(b) How does the internal magnetic field strength of Solenoid C compare to Solenoid A? Explain why.\n(c) Describe the appearance and spacing of magnetic field lines inside the core of Solenoid A.\n(d) If a current-carrying solenoid is suspended freely by a thin thread, in which geographic direction does it come to rest and why?",
    "answer": "(a) Solenoid A vs Solenoid B:\nMagnetic field inside a long solenoid is $B = \\mu_0 n I = \\mu_0 \\left(\\frac{N}{L}\\right) I$.\n- For Solenoid A: $B_A = \\mu_0 \\left(\\frac{500}{L}\\right) \\times 2 = 1000 \\frac{\\mu_0}{L}$.\n- For Solenoid B: $B_B = \\mu_0 \\left(\\frac{1000}{L}\\right) \\times 1 = 1000 \\frac{\\mu_0}{L}$.\nBoth Solenoid A and Solenoid B have IDENTICAL internal magnetic field strengths ($B_A = B_B$).\n\n(b) Solenoid C vs Solenoid A: Solenoid C produces a magnetic field hundreds of times stronger than Solenoid A ($B_C \\gg B_A$). Soft iron has high magnetic permeability ($\\mu_r \\approx 1000$), strongly concentrating magnetic flux inside the core ($B = \\mu_r \\mu_0 n I$).\n\n(c) Field Lines Inside Solenoid: They are parallel, straight, and equally spaced along the axis of the solenoid. This indicates that the magnetic field is uniform (constant in magnitude and direction) at all internal points.\n\n(d) Geographic Orientation: The freely suspended solenoid aligns itself along the geographic North-South direction. It behaves as a magnetic dipole with a North pole and a South pole; Earth's magnetic field exerts a torque until its magnetic axis aligns with Earth's magnetic meridian.",
    "formula": "B = \\mu_0 n I",
    "source": "NCERT Class 10 Page 229"
  },
  {
    "id": "sci_c12_q38",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In an electrical laboratory, a student set up an electric motor model. A rectangular copper coil ABCD was mounted between the cylindrical concave magnetic poles of a permanent magnet. The ends of the coil were connected to split-ring commutator segments P and Q, in contact with stationary carbon brushes X and Y.\n\n(a) State the fundamental working principle of an electric motor.\n(b) What is the function of the split-ring commutator in a DC motor?\n(c) What is the function of stationary carbon brushes?\n(d) Explain how continuous unidirectional rotation of the armature coil is achieved.",
    "answer": "(a) Principle of Electric Motor: Operates on the principle of Magnetic Force on a Current-Carrying Conductor (Fleming's Left-Hand Rule). When a rectangular coil carrying electric current is placed in a magnetic field, opposite perpendicular forces act on its two opposite arms, generating a mechanical couple (torque) that rotates the coil continuously.\n\n(b) Function of Split-Ring Commutator: Acts as a mechanical current-reversing switch. After every half rotation (180°), the commutator rings reverse contact between brushes, reversing the direction of current in coil arms AB and CD so that the turning torque continues in the same rotational direction.\n\n(c) Function of Carbon Brushes: Provide sliding electrical contact between the stationary DC battery circuit and the rotating split-ring commutator without tangling connecting wires.\n\n(d) Mechanism of Continuous Rotation: In the first half turn, downward force on arm AB and upward force on arm CD rotate the coil clockwise. At 180°, the commutator reverses current: current in AB flows in reverse, so it experiences an upward force while CD experiences a downward force, keeping rotation unidirectional.",
    "examinerNote": "The split-ring commutator reversing current every half-turn is the core concept of the DC motor.",
    "source": "NCERT Class 10 Page 232"
  },
  {
    "id": "sci_c12_q39",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 5,
    "type": "LA",
    "question": "Comprehensive Domestic Electrical Wiring System:\n(a) Draw a neat labeled schematic diagram of a typical domestic electric circuit from the electricity board pole to household distribution boxes.\n(b) Explain the function of: (i) Electricity Meter, (ii) Main Switch, (iii) Miniature Circuit Breaker (MCB), (iv) Earth wire.\n(c) Why are all domestic lighting and power circuits connected in parallel across the live and neutral lines?",
    "answer": "(a) Domestic Circuit Schematic:\nStreet Cable (Live, Neutral, Earth) ⟶ Electricity Board Fuse (Company Fuse) ⟶ Electricity Meter (kWh) ⟶ Main Switch & Distribution Box (MCBs for 15 A & 5 A circuits) ⟶ Parallel Connection to Household Sockets and Appliances with Earth Pin.\n\n(b) Functions:\n(i) Electricity Meter: Measures the total electrical energy consumed by the household in commercial units (kilowatt-hours, kWh).\n(ii) Main Switch: A double-pole switch that completely disconnects both the live and neutral lines from the entire house simultaneously during emergencies or electrical repairs.\n(iii) MCB (Miniature Circuit Breaker): An electromagnetic switch that automatically trips open within milliseconds during overcurrent or short-circuit, and can be manually reset after clearing the fault.\n(iv) Earth Wire: Connects metallic appliance bodies to a low-resistance ground plate, safely diverting fault leakage current and tripping circuit protection.\n\n(c) Why Parallel Connection is Essential:\n1. Equal Voltage: Every appliance receives the full rated 220 V voltage, operating at its full designated rated wattage.\n2. Independent Switching: Each appliance has its own switch; switching off one room does not affect other rooms.\n3. Decreased Total Resistance: Adding appliances in parallel decreases equivalent circuit resistance, allowing each appliance to draw its requisite operating current without starving other devices.",
    "source": "CBSE Board 2024 Long Answer"
  },
  {
    "id": "sci_c12_q40",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 5,
    "type": "LA",
    "question": "Magnetic Fields of Conductors and Fleming's Left-Hand Rule:\n(a) State Fleming's Left-Hand Rule and draw a labeled diagram illustrating the mutual perpendicular alignment of Thumb, Forefinger, and Middle finger.\n(b) A horizontal rod of mass m and length l carrying current I is placed in a horizontal magnetic field B perpendicular to it. What must be the magnitude and direction of magnetic field B so that the magnetic force completely balances the gravitational weight of the rod?\n(c) Under what physical conditions is the magnetic force experienced by a current-carrying conductor: (i) Maximum? (ii) Minimum (zero)?",
    "answer": "(a) Fleming's Left-Hand Rule:\nStretch the thumb, forefinger, and middle finger of your left hand mutually perpendicular to one another:\n- Forefinger: Points in the direction of the Magnetic Field (B).\n- Middle finger: Points in the direction of Electric Current (I).\n- Thumb: Points in the direction of Motion or mechanical Force (F) acting on the conductor.\n\n(b) Magnetic Levitation / Weight Balance:\n- Gravitational weight acts vertically downwards: $W = mg$.\n- For the magnetic force $F_{\\text{mag}}$ to balance weight, it must act vertically UPWARDS: $F_{\\text{mag}} = W$.\n- Formula: $F_{\\text{mag}} = BIl \\sin 90° = BIl$.\n- Equating forces: $BIl = mg \\implies B = \\frac{mg}{Il}$.\n- Direction: By Fleming's Left-Hand Rule, if current flows from West to East, the magnetic field B must be directed horizontally from South to North to produce an upward magnetic force.\n\n(c) Conditions for Maximum and Minimum Force:\n- Maximum Force: When the conductor is oriented PERPENDICULAR (angle $\\theta = 90°$) to the magnetic field lines ($F_{\\text{max}} = BIl$).\n- Minimum (Zero) Force: When the conductor is oriented PARALLEL or anti-parallel (angle $\\theta = 0°$ or $180°$) to the magnetic field lines ($F = BIl \\sin 0° = 0$).",
    "formula": "F = BIl \\sin\\theta;\\quad B = \\frac{mg}{Il}",
    "examinerNote": "Weight balance derivation ($B = mg / Il$) is a hallmark of CBSE HOTS questions.",
    "source": "NCERT Class 10 Page 231"
  },
  {
    "id": "sci_c12_q41",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 5,
    "type": "LA",
    "question": "The Electric Motor — Complete Analytical Study:\n(a) State the principle of an electric motor.\n(b) Name the four primary components of an electric motor and state the precise function of each:\n(i) Armature coil\n(ii) Strong field magnet\n(iii) Split-ring commutator\n(iv) Carbon brushes\n(c) What modifications are made in commercial electric motors to make them much more powerful than simple laboratory motors?",
    "answer": "(a) Principle: Operates on the principle of mechanical torque exerted by a magnetic field on a current-carrying conductor (Lorentz force). When a current-carrying coil is placed perpendicular to magnetic field lines, opposite equal forces on opposite arms form a couple that rotates the coil continuously.\n\n(b) Four Primary Components & Functions:\n(i) Armature Coil: A rectangular loop of insulated copper wire with many turns wound over a soft iron core. It carries electric current across the magnetic field to generate rotational torque.\n(ii) Field Magnet: A permanent horseshoe magnet with concave cylindrical poles (or electromagnet) that provides a strong radial magnetic field perpendicular to the coil arms.\n(iii) Split-Ring Commutator: Two half-rings (P and Q) that reverse the direction of current flowing through coil arms every half rotation (180°), ensuring torque remains unidirectional.\n(iv) Carbon Brushes: Two stationary graphite blocks (X and Y) that maintain light sliding contact with the rotating split rings, feeding electric current into the coil without wire entanglement.\n\n(c) Enhancements in Commercial Motors:\n1. An Electromagnet is used in place of a permanent magnet to create a massively stronger magnetic field.\n2. A large number of turns of insulated copper wire in the armature coil.\n3. The coil is wound on a Soft Iron Core. The soft iron core + coil assembly is called an Armature, which enhances magnetic flux density and output motor power.",
    "examinerNote": "All 3 commercial motor enhancements are directly from NCERT page 233.",
    "source": "NCERT Class 10 Pages 232–233"
  },
  {
    "id": "sci_c12_q42",
    "chapter": 12,
    "chapterName": "Magnetic Effects of Electric Current",
    "marks": 5,
    "type": "LA",
    "question": "Magnetic Fields of Circular Loops and Solenoids:\n(a) Explain with a neat diagram the pattern of magnetic field lines produced by a current-carrying circular loop. Why does the magnetic field appear as straight parallel lines at the center of the loop?\n(b) How does a solenoid behave like a bar magnet? How can you determine the North and South poles of a current-carrying solenoid using a bar magnet?\n(c) State three methods by which the magnetic field strength inside a solenoid can be increased.",
    "answer": "(a) Field Pattern of Circular Loop:\n- Near the wire of the loop: Field lines form concentric circular loops around each segment.\n- Moving toward the center: The concentric circles become larger and flatter arcs.\n- At the exact center: The arcs have such enormous radii of curvature that they appear as straight, parallel lines perpendicular to the plane of the loop, producing a uniform magnetic field.\n\n(b) Solenoid Polarity Determination:\n- A current-carrying solenoid produces an external field identical to a bar magnet: one end acts as North pole and the opposite end as South pole.\n- Determination Using Bar Magnet: Suspend the current-carrying solenoid freely. Bring the known North pole of a permanent bar magnet near one end of the solenoid. If that end is repelled, it is the North pole (like poles repel). If it is attracted, it is the South pole.\n- Clock Rule Check: Looking end-on, if current flows counter-clockwise, it is a North pole; if clockwise, it is a South pole.\n\n(c) Three Methods to Increase Solenoid Field Strength:\n1. Increase the magnitude of electric current ($I$) flowing through the coil.\n2. Increase the number of turns per unit length ($n = N/L$) in the solenoid coil.\n3. Insert a core of Soft Iron inside the hollow of the solenoid.",
    "formula": "B = \\mu_0 n I",
    "source": "CBSE Board 2023 Long Answer"
  },
];
