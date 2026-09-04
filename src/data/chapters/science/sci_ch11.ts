import type { VaultQuestion } from "@/data/vaultQuestions";

export const SCI_CH11_QUESTIONS: VaultQuestion[] = [
  // 1-MARK MCQs & ASSERTION-REASON
  {
    id: "sci_c11_q1",
    chapter: 11,
    chapterName: "Electricity",
    marks: 1,
    type: "MCQ",
    question: "A cylindrical conductor of length 'l' and uniform area of cross-section 'A' has resistance 'R'. Another conductor of length '2.5l' and resistance '0.5R' of the same material has area of cross-section:\n(a) 5A\n(b) 2.5A\n(c) 0.5A\n(d) A/5",
    options: [
      "5A",
      "2.5A",
      "0.5A",
      "A/5"
    ],
    correctOption: 0,
    answer: "Option (a) is correct: 5A.",
    explanation: "For the first conductor: $R = \\rho \\frac{l}{A}$. For the second conductor: $R' = \\rho \\frac{l'}{A'}$. Substituting values: $0.5R = \\rho \\frac{2.5l}{A'}$. Dividing the second equation by the first: $\\frac{0.5R}{R} = \\frac{2.5l / A'}{l / A} \\implies 0.5 = \\frac{2.5 A}{A'} \\implies A' = \\frac{2.5 A}{0.5} = 5A$.",
    formula: "R = \\rho \\frac{l}{A}",
    examinerNote: "Classic algebraic manipulation question. Resistivity ρ cancels out as material is identical.",
    source: "NCERT Class 10 Exemplar"
  },
  {
    id: "sci_c11_q2",
    chapter: 11,
    chapterName: "Electricity",
    marks: 1,
    type: "MCQ",
    question: "Two electric bulbs rated 220 V–40 W and 220 V–60 W are connected in series across a 220 V power supply. Which bulb will glow brighter?\n(a) 40 W bulb\n(b) 60 W bulb\n(c) Both will glow with equal brightness\n(d) Neither bulb will glow",
    options: [
      "40 W bulb",
      "60 W bulb",
      "Both will glow with equal brightness",
      "Neither bulb will glow"
    ],
    correctOption: 0,
    answer: "Option (a) is correct: The 40 W bulb will glow brighter.",
    explanation: "Resistance $R = \\frac{V^2}{P}$. The 40 W bulb has higher resistance ($R_{40} = \\frac{220^2}{40} = 1210\\;\\Omega$) than the 60 W bulb ($R_{60} = \\frac{220^2}{60} = 806.7\\;\\Omega$). In a series connection, electric current $I$ is identical through both bulbs. Power dissipated is $P = I^2R$. Since $R_{40} > R_{60}$, the 40 W bulb dissipates more heat and light energy, glowing noticeably brighter.",
    formula: "P_{\\text{series}} = I^2R \\implies P \\propto R",
    examinerNote: "In parallel, the 60 W bulb is brighter; in series, the 40 W bulb is brighter because current is constant!",
    source: "CBSE Board 2024 Question"
  },
  {
    id: "sci_c11_q3",
    chapter: 11,
    chapterName: "Electricity",
    marks: 1,
    type: "MCQ",
    question: "Assertion (A): The commercial unit of electrical energy is kilowatt-hour (kWh), commonly known as 'unit'.\nReason (R): 1 kWh is equal to 3.6 × 10⁶ Joules.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is NOT the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    options: [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    correctOption: 1,
    answer: "Option (b) is correct.",
    explanation: "Both statements are true. 1 kWh is indeed $1000\\text{ W} \\times 3600\\text{ s} = 3.6 \\times 10^6\\text{ J}$. However, the reason kWh was adopted commercially is because the SI unit Joule is too small for practical billing, not simply because it equals $3.6 \\times 10^6\\text{ J}$.",
    formula: "1\\text{ kWh} = 3.6 \\times 10^6\\text{ J}",
    examinerNote: "Conceptual trap: R is a true mathematical conversion, but not the causal explanation for A.",
    source: "KVS Support Material 2025-26"
  },
  {
    id: "sci_c11_q4",
    chapter: 11,
    chapterName: "Electricity",
    marks: 1,
    type: "MCQ",
    question: "What is the equivalent resistance between points A and B if three resistors of 6 Ω each are connected in parallel?\n(a) 18 Ω\n(b) 2 Ω\n(c) 3 Ω\n(d) 0.5 Ω",
    options: [
      "18 Ω",
      "2 Ω",
      "3 Ω",
      "0.5 Ω"
    ],
    correctOption: 1,
    answer: "Option (b) is correct: 2 Ω.",
    explanation: "For 'n' identical resistors 'R' connected in parallel, the equivalent resistance is $R_p = R / n$. Here, $R = 6\\;\\Omega$ and $n = 3$. Therefore, $R_p = 6 / 3 = 2\\;\\Omega$.",
    formula: "\\frac{1}{R_p} = \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2} \\implies R_p = 2\\;\\Omega",
    examinerNote: "Parallel equivalent resistance is always smaller than the smallest individual branch resistor.",
    source: "NCERT Class 10 Page 214"
  },

  // 2-MARK SHORT ANSWER QUESTIONS
  {
    id: "sci_c11_q5",
    chapter: 11,
    chapterName: "Electricity",
    marks: 2,
    type: "SA",
    question: "State Ohm's Law. Draw the V-I graph for an ohmic conductor and state what the slope of this graph represents.",
    answer: "Ohm's Law: At a constant temperature, the electric current (I) flowing through a metallic conductor is directly proportional to the potential difference (V) applied across its ends ($V \\propto I \\implies V = IR$, where R is resistance).\n\nV-I Graph: A straight line passing through the origin.\nSlope of V-I graph: With V on the vertical y-axis and I on the horizontal x-axis, $\\text{Slope} = \\frac{\\Delta V}{\\Delta I} = R$ (Resistance). If I is on y-axis and V on x-axis, $\\text{Slope} = 1/R$ (Conductance).",
    steps: [
      "Step 1: State Ohm's law with the 'constant temperature' condition.",
      "Step 2: Note linear straight line passing through origin.",
      "Step 3: State slope equals resistance R."
    ],
    explanation: "Resistance remains constant as long as temperature does not increase.",
    formula: "V = IR \\implies R = \\frac{V}{I}",
    examinerNote: "Must include 'at constant temperature'. Omitting this loses 0.5 mark.",
    source: "NCERT Class 10 Page 200"
  },
  {
    id: "sci_c11_q6",
    chapter: 11,
    chapterName: "Electricity",
    marks: 2,
    type: "SA",
    question: "Why are alloys like Nichrome and Manganin commonly used in electrical heating appliances (such as electric toasters and irons) rather than pure metals?",
    answer: "Reasons:\n(1) Exceptionally High Resistivity: Alloys have much higher resistivity than pure metals, generating greater heat ($H = I^2Rt$) for the same current.\n(2) High Resistance to Oxidation: Alloys do not oxidize (burn) or melt even at very high red-hot temperatures (up to 900°C), ensuring longevity and safety.",
    steps: [
      "Point 1: State high resistivity yielding high Joule heat.",
      "Point 2: State high melting point and non-oxidizing property at red-hot temperatures."
    ],
    explanation: "Pure copper would melt or burn under red-hot conditions; nichrome maintains structural integrity.",
    examinerNote: "Both points (high resistivity + resistance to oxidation at high temp) are required for full 2 marks.",
    source: "CBSE 2023 Board Question"
  },
  {
    id: "sci_c11_q7",
    chapter: 11,
    chapterName: "Electricity",
    marks: 2,
    type: "SA",
    question: "State two distinct advantages of connecting electrical appliances in parallel rather than in series in domestic household circuits.",
    answer: "(1) Independent Operation: In parallel, each appliance has its own independent branch and switch. If one appliance fuses or is switched off, other appliances continue to function normally without disruption.\n(2) Equal Operating Voltage: Every appliance in a parallel household circuit receives the full line voltage (220 V), allowing each device to operate at its rated power specification.",
    steps: [
      "Point 1: Independent switching & fault isolation.",
      "Point 2: Constant supply voltage across all devices (220 V).",
      "Point 3: Low equivalent resistance avoids choking total current."
    ],
    explanation: "In series, if one bulb blows, the entire household blackouts and voltage divides unequally.",
    examinerNote: "Mentioning independent switching and constant 220 V voltage guarantees full 2 marks.",
    source: "NCERT Class 10 Page 216"
  },

  // 3-MARK SHORT ANSWER QUESTIONS
  {
    id: "sci_c11_q8",
    chapter: 11,
    chapterName: "Electricity",
    marks: 3,
    type: "SA",
    question: "An electric heater rated 1500 W operates for 4 hours daily. Calculate:\n(a) The electric current drawn from a 220 V line.\n(b) The resistance of the heating element.\n(c) The energy consumed in kWh in 30 days.",
    answer: "(a) Current: $P = VI \\implies I = \\frac{P}{V} = \\frac{1500}{220} = 6.82\\text{ Amperes}$.\n\n(b) Resistance: $P = \\frac{V^2}{R} \\implies R = \\frac{V^2}{P} = \\frac{(220)^2}{1500} = \\frac{48400}{1500} = 32.27\\;\\Omega$.\n\n(c) Energy consumed in 30 days:\n$E = P(\\text{kW}) \\times t(\\text{hours}) = \\frac{1500\\text{ W}}{1000} \\times (4\\text{ h/day} \\times 30\\text{ days}) = 1.5\\text{ kW} \\times 120\\text{ h} = 180\\text{ kWh (units)}$.",
    steps: [
      "Part (a): $I = P/V = 1500 / 220 = 6.82\\text{ A}$.",
      "Part (b): $R = V^2/P = 48400 / 1500 = 32.27\\;\\Omega$.",
      "Part (c): $E = 1.5\\text{ kW} \\times 120\\text{ h} = 180\\text{ kWh}$."
    ],
    explanation: "1 mark per sub-part. High-frequency 3-mark numerical format.",
    formula: "P = VI, \\quad R = \\frac{V^2}{P}, \\quad E = P \\times t",
    examinerNote: "Ensure SI units (A, Ω, kWh) are explicitly attached to every numerical answer.",
    source: "Arihant All-In-One Chapter 11"
  },
  {
    id: "sci_c11_q9",
    chapter: 11,
    chapterName: "Electricity",
    marks: 3,
    type: "SA",
    question: "Three resistors of resistances R₁ = 4 Ω, R₂ = 6 Ω, and R₃ = 12 Ω are connected together.\n(a) How should they be connected to obtain an equivalent resistance of (i) 8 Ω, (ii) 2 Ω?\n(b) Show calculations supporting both combinations.",
    answer: "(a) Combination for 8 Ω: Connect R₂ (6 Ω) and R₃ (12 Ω) in parallel, and connect this combination in series with R₁ (4 Ω).\nCalculation: Parallel part $R_p = \\frac{6 \\times 12}{6 + 12} = \\frac{72}{18} = 4\\;\\Omega$.\nTotal equivalent $R_{\\text{total}} = R_1 + R_p = 4\\;\\Omega + 4\\;\\Omega = 8\\;\\Omega$.\n\n(b) Combination for 2 Ω: Connect all three resistors R₁, R₂, and R₃ in parallel.\nCalculation: $\\frac{1}{R_{\\text{total}}} = \\frac{1}{4} + \\frac{1}{6} + \\frac{1}{12} = \\frac{3 + 2 + 1}{12} = \\frac{6}{12} = \\frac{1}{2} \\implies R_{\\text{total}} = 2\\;\\Omega$.",
    steps: [
      "Part (a): Design 4 + (6 || 12) = 4 + 4 = 8 Ω.",
      "Part (b): Design (4 || 6 || 12) = 2 Ω.",
      "Show step-by-step arithmetic verification for both."
    ],
    explanation: "Parallel combination of 6 and 12 yields 4 Ω; adding 4 Ω in series produces 8 Ω.",
    formula: "R_s = R_1 + R_2;  \\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2}",
    examinerNote: "Classic combination problem frequently appearing in CBSE board papers.",
    source: "NCERT Class 10 In-Text Page 216"
  },

  // 5-MARK LONG ANSWER & CASE STUDIES
  {
    id: "sci_c11_q10",
    chapter: 11,
    chapterName: "Electricity",
    marks: 5,
    type: "LA",
    question: "Derive an expression for the equivalent resistance of three resistors R₁, R₂, and R₃ connected in parallel. In a circuit, a 12 V battery is connected across three parallel resistors of 5 Ω, 10 Ω, and 30 Ω. Calculate:\n(a) The current through each resistor.\n(b) The total current in the circuit.\n(c) The total equivalent resistance of the circuit.",
    answer: "1. Derivation:\nIn parallel, potential difference (V) across each resistor is identical. The total current (I) divides into branch currents:\n$I = I_1 + I_2 + I_3$.\nBy Ohm's Law: $I_1 = \\frac{V}{R_1}, \\quad I_2 = \\frac{V}{R_2}, \\quad I_3 = \\frac{V}{R_3}$.\nIf $R_p$ is equivalent resistance: $I = \\frac{V}{R_p}$.\nSubstituting: $\\frac{V}{R_p} = \\frac{V}{R_1} + \\frac{V}{R_2} + \\frac{V}{R_3} \\implies \\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$. [Hence Derived]\n\n2. Circuit Calculations (V = 12 V):\n(a) Branch Currents:\n- Through 5 Ω: $I_1 = \\frac{12}{5} = 2.4\\text{ A}$.\n- Through 10 Ω: $I_2 = \\frac{12}{10} = 1.2\\text{ A}$.\n- Through 30 Ω: $I_3 = \\frac{12}{30} = 0.4\\text{ A}$.\n\n(b) Total Current:\n$I_{\\text{total}} = I_1 + I_2 + I_3 = 2.4 + 1.2 + 0.4 = 4.0\\text{ Amperes}$.\n\n(c) Total Equivalent Resistance:\n$\\frac{1}{R_p} = \\frac{1}{5} + \\frac{1}{10} + \\frac{1}{30} = \\frac{6 + 3 + 1}{30} = \\frac{10}{30} = \\frac{1}{3} \\implies R_p = 3\\;\\Omega$.\n(Check: $V = I R_p = 4.0 \\times 3 = 12\\text{ V}$, perfectly verified).",
    steps: [
      "Step 1: Write parallel current law: $I = I_1 + I_2 + I_3$.",
      "Step 2: Substitute Ohm's law to derive $1/R_p = 1/R_1 + 1/R_2 + 1/R_3$.",
      "Step 3: Calculate branch currents: 2.4 A, 1.2 A, 0.4 A.",
      "Step 4: Sum total current = 4.0 A.",
      "Step 5: Calculate equivalent resistance = 3 Ω."
    ],
    explanation: "2 marks for formal derivation; 3 marks for three numerical parts.",
    formula: "\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}",
    examinerNote: "Ensure the derivation clearly states that potential difference V is identical across all branches.",
    source: "CBSE 2024 Board 5-Mark Question"
  },
  {
    id: "sci_c11_q11",
    chapter: 11,
    chapterName: "Electricity",
    marks: 4,
    type: "Case Study",
    question: "Case Study: In electric power transmission, high voltages are utilized to transport energy over long distances from generating stations to cities. At home, appliances generate heat when current flows through them according to Joule's Law of Heating ($H = I^2Rt$). An electric fuse rated 5 A is installed in a lighting circuit to protect wiring from overheating.\n\n(a) State Joule's Law of Heating mathematically.\n(b) Why is electric energy transmitted at very high voltages over long distances?\n(c) A 2 kW electric iron operates on a 220 V line. Can it be operated in a circuit protected by a 5 A fuse? Justify with numerical calculation.\n(d) Name the material used to make electric fuse wire and state two essential properties it must possess.",
    answer: "(a) Joule's Law: $H = I^2Rt$. The heat produced in a resistor is directly proportional to: (1) square of current ($I^2$), (2) resistance ($R$), and (3) time of flow ($t$).\n\n(b) For a given power $P = VI$, transmitting at very high voltage $(V)$ reduces the current $(I)$ proportionally ($I = P/V$). Since power loss in transmission lines is $P_{\\text{loss}} = I^2R$, low current dramatically minimizes heat waste ($I^2R$ loss) over hundreds of kilometers.\n\n(c) Calculation for electric iron:\n$P = 2000\\text{ W}$, $V = 220\\text{ V}$.\nCurrent drawn $I = \\frac{P}{V} = \\frac{2000}{220} = 9.09\\text{ Amperes}$.\nJustification: Since the iron draws 9.09 A, which far exceeds the 5 A rating of the fuse, the fuse wire will instantly melt and break the circuit. Hence, it CANNOT be operated on a 5 A fuse (requires a 15 A power fuse).\n\n(d) Fuse material: An alloy of Lead and Tin (Solder, Pb-Sn alloy). Properties: (1) Low melting point, (2) High resistance relative to copper wiring.",
    steps: [
      "Part (a): State Joule's law equation and proportions.",
      "Part (b): Explain $I^2R$ reduction via high voltage.",
      "Part (c): Calculate $I = 2000/220 = 9.09\\text{ A}$ and conclude fuse will blow.",
      "Part (d): Name lead-tin alloy and state low melting point property."
    ],
    explanation: "Fuses act as thermal circuit breakers based on Joule's heating effect.",
    formula: "H = I^2Rt, \\quad I = \\frac{P}{V}",
    examinerNote: "Part (c) calculation must show $9.09\\text{ A} > 5\\text{ A}$ for full marks.",
    source: "Educart Science 2026 / CBSE Case Study"
  }
];
