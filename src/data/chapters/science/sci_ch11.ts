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
  },
  {"id": "sci_c11_q12",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 1,
    "type": "MCQ",
    "question": "A cylindrical conductor of length l and uniform area of cross-section A has resistance R. Another conductor of length 2l and resistance R of the same material has area of cross-section:\n(a) A / 2\n(b) 3A / 2\n(c) 2A\n(d) 3A",
    "options": [
      "A / 2",
      "3A / 2",
      "2A",
      "3A"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: 2A.",
    "explanation": "Resistance $R = \\rho \\frac{l}{A}$. For the second wire: $R_2 = \\rho \\frac{l_2}{A_2} = \\rho \\frac{2l}{A_2} = R$. Equating: $\\rho \\frac{l}{A} = \\rho \\frac{2l}{A_2} \\implies A_2 = 2A$.",
    "formula": "R = \\rho \\frac{l}{A}",
    "source": "NCERT Class 10 Exemplar"
  },
  {
    "id": "sci_c11_q13",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 1,
    "type": "MCQ",
    "question": "When three resistors of resistances 2 Ω, 3 Ω, and 6 Ω are connected in parallel, their equivalent resistance is:\n(a) 11 Ω\n(b) 1 Ω\n(c) 0.5 Ω\n(d) 6 Ω",
    "options": [
      "11 Ω",
      "1 Ω",
      "0.5 Ω",
      "6 Ω"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: 1 Ω.",
    "explanation": "$\\frac{1}{R_p} = \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = \\frac{3 + 2 + 1}{6} = \\frac{6}{6} = 1 \\implies R_p = 1\\ \\Omega$.",
    "formula": "\\frac{1}{R_p} = \\sum \\frac{1}{R_i}",
    "source": "CBSE 2021, 2023"
  },
  {
    "id": "sci_c11_q14",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 1,
    "type": "MCQ",
    "question": "The commercial unit of electrical energy is kilowatt-hour (kWh). 1 kWh is equal to:\n(a) 3.6 × 10⁵ J\n(b) 3.6 × 10⁶ J\n(c) 3.6 × 10⁷ J\n(d) 36 × 10⁶ J",
    "options": [
      "3.6 × 10⁵ J",
      "3.6 × 10⁶ J",
      "3.6 × 10⁷ J",
      "36 × 10⁶ J"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: 3.6 × 10⁶ J.",
    "explanation": "$1\\text{ kWh} = 1000\\text{ W} \\times 3600\\text{ s} = 3,600,000\\text{ J} = 3.6 \\times 10^6\\text{ J}$.",
    "formula": "1\\text{ kWh} = 3.6 \\times 10^6\\text{ J}",
    "source": "NCERT Class 10 Page 220"
  },
  {
    "id": "sci_c11_q15",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 1,
    "type": "MCQ",
    "question": "Which of the following terms does not represent electrical power in an electric circuit?\n(a) I²R\n(b) IR²\n(c) VI\n(d) V² / R",
    "options": [
      "I²R",
      "IR²",
      "VI",
      "V² / R"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: IR² does not represent electrical power.",
    "explanation": "Power equations: $P = VI = I^2R = \\frac{V^2}{R}$. $IR^2$ is mathematically incorrect dimensional nonsense.",
    "formula": "P = VI = I^2R = \\frac{V^2}{R}",
    "source": "NCERT Class 10 Exercise Question 1"
  },
  {
    "id": "sci_c11_q16",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 1,
    "type": "MCQ",
    "question": "Assertion (A): Alloys are commonly used in electrical heating devices like electric toasters and electric irons.\nReason (R): Alloys have higher resistivity than their constituent pure metals and do not oxidize (burn) easily at high temperatures.\n(a) Both A and R are true and R is the correct explanation of A.\n(b) Both A and R are true but R is NOT the correct explanation of A.\n(c) A is true but R is false.\n(d) A is false but R is true.",
    "options": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true but R is false.",
      "A is false but R is true."
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct.",
    "explanation": "Nichrome (alloy of Ni, Cr, Mn, Fe) has high resistivity, producing high Joule heat ($H = I^2Rt$), and has a high melting point without oxidizing even at red hot heat.",
    "source": "CBSE 2024 Board Question"
  },
  {
    "id": "sci_c11_q17",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 1,
    "type": "MCQ",
    "question": "An electric bulb is rated 220 V and 100 W. When it is operated on 110 V, the power consumed will be:\n(a) 100 W\n(b) 75 W\n(c) 50 W\n(d) 25 W",
    "options": [
      "100 W",
      "75 W",
      "50 W",
      "25 W"
    ],
    "correctOption": 3,
    "answer": "Option (d) is correct: 25 W.",
    "explanation": "Bulb resistance $R = \\frac{V^2}{P} = \\frac{220^2}{100} = 484\\ \\Omega$. At $V' = 110\\text{ V}$, consumed power $P' = \\frac{V'^2}{R} = \\frac{110^2}{484} = \\frac{12100}{484} = 25\\text{ W}$.",
    "formula": "P' = \\frac{V'^2}{R} = 25\\text{ W}",
    "examinerNote": "Classic board numerical trap: voltage halves, so power drops to one-fourth (not half).",
    "source": "NCERT Class 10 Exercise Question 3"
  },
  {
    "id": "sci_c11_q18",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 1,
    "type": "MCQ",
    "question": "If the current I passing through a resistor is doubled (keeping temperature and resistance constant), the rate of heat produced will:\n(a) Become half\n(b) Become double\n(c) Become four times\n(d) Remain unchanged",
    "options": [
      "Become half",
      "Become double",
      "Become four times",
      "Remain unchanged"
    ],
    "correctOption": 2,
    "answer": "Option (c) is correct: Become four times.",
    "explanation": "According to Joule's law of heating, $H \\propto I^2$. If current is doubled ($I' = 2I$), heat produced becomes $(2I)^2 = 4I^2$ (four times).",
    "formula": "H = I^2Rt",
    "source": "CBSE 2022 Board Paper"
  },
  {
    "id": "sci_c11_q19",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 1,
    "type": "MCQ",
    "question": "In an electrical circuit, an ammeter is always connected in ________ and a voltmeter is always connected in ________:\n(a) Parallel, Series\n(b) Series, Parallel\n(c) Series, Series\n(d) Parallel, Parallel",
    "options": [
      "Parallel, Series",
      "Series, Parallel",
      "Series, Series",
      "Parallel, Parallel"
    ],
    "correctOption": 1,
    "answer": "Option (b) is correct: Series, Parallel.",
    "explanation": "An ammeter has near-zero internal resistance and is connected in series to measure full current. A voltmeter has very high internal resistance and is connected in parallel across the load to measure potential difference without drawing current.",
    "source": "NCERT Class 10 Page 200 & 202"
  },
  {
    "id": "sci_c11_q20",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 1,
    "type": "MCQ",
    "question": "The electrical resistivity of a given metallic wire depends upon:\n(a) Its length\n(b) Its thickness (cross-sectional area)\n(c) Its shape\n(d) Nature of the material and temperature",
    "options": [
      "Its length",
      "Its thickness (cross-sectional area)",
      "Its shape",
      "Nature of the material and temperature"
    ],
    "correctOption": 3,
    "answer": "Option (d) is correct: Nature of the material and temperature.",
    "explanation": "Resistivity (ρ) is an intrinsic fundamental material property. It does NOT depend on wire dimensions (length or area), but varies with material composition and temperature.",
    "examinerNote": "Resistance depends on dimensions; Resistivity does not.",
    "source": "NCERT Exemplar Class 10"
  },
  {
    "id": "sci_c11_q21",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 1,
    "type": "MCQ",
    "question": "How many electrons constitute an electric current of one microampere (1 μA) flowing for one second?\n(a) 6.25 × 10¹² electrons\n(b) 6.25 × 10¹⁸ electrons\n(c) 1.6 × 10⁻¹⁹ electrons\n(d) 6.25 × 10¹⁵ electrons",
    "options": [
      "6.25 × 10¹² electrons",
      "6.25 × 10¹⁸ electrons",
      "1.6 × 10⁻¹⁹ electrons",
      "6.25 × 10¹⁵ electrons"
    ],
    "correctOption": 0,
    "answer": "Option (a) is correct: 6.25 × 10¹² electrons.",
    "explanation": "$Q = It = 10^{-6}\\text{ A} \\times 1\\text{ s} = 10^{-6}\\text{ C}$. Number of electrons $n = \\frac{Q}{e} = \\frac{10^{-6}}{1.6 \\times 10^{-19}} = 0.625 \\times 10^{13} = 6.25 \\times 10^{12}$ electrons.",
    "formula": "n = \\frac{It}{e}",
    "source": "CBSE CFPQ 2025"
  },
  {
    "id": "sci_c11_q22",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 2,
    "type": "SA",
    "question": "State Ohm's Law. Write its mathematical formula and draw the V-I characteristic graph for a metallic ohmic conductor.",
    "answer": "(1) Statement: The electric current (I) flowing through a metallic conductor is directly proportional to the potential difference (V) applied across its ends, provided its temperature and physical conditions remain strictly constant.\n\n(2) Formula: $V \\propto I \\implies V = IR$, where R is the constant of proportionality termed Resistance.\n\n(3) V-I Graph: A straight line passing through the origin (0, 0). The slope of the V-I graph represents the resistance: $\\text{Slope} = \\frac{\\Delta V}{\\Delta I} = R$.",
    "formula": "V = IR",
    "examinerNote": "Must include the condition 'temperature remaining constant'.",
    "source": "NCERT Class 10 Page 204"
  },
  {
    "id": "sci_c11_q23",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 2,
    "type": "SA",
    "question": "List four physical factors upon which the electrical resistance of a uniform conductor depends. Express their relationship in a formula.",
    "answer": "The electrical resistance (R) of a conductor depends on:\n1. Length of conductor ($l$): Resistance is directly proportional to length ($R \\propto l$).\n2. Area of cross-section ($A$): Resistance is inversely proportional to cross-sectional area ($R \\propto \\frac{1}{A}$).\n3. Nature of material: Represented by electrical resistivity ($\\rho$).\n4. Temperature: For metals, resistance increases linearly with rise in temperature.\n\nMathematical Formula:\n$R = \\rho \\frac{l}{A}$",
    "formula": "R = \\rho \\frac{l}{A}",
    "source": "NCERT Class 10 Page 207"
  },
  {
    "id": "sci_c11_q24",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 2,
    "type": "SA",
    "question": "Why are domestic electric appliances connected in parallel rather than in series? Give two compelling engineering reasons.",
    "answer": "1. Independent Operation: In parallel connection, each appliance has its own independent switch. If one appliance is switched off or fails/burns out, the other appliances continue working uninterrupted (in series, one broken filament breaks the whole circuit).\n\n2. Uniform Voltage & Optimal Power: In parallel, each appliance receives the full rated line voltage of 220 V, operating at its full designated rated power. Furthermore, equivalent resistance of the household circuit decreases, allowing each appliance to draw its requisite operating current according to its wattage rating.",
    "source": "NCERT Class 10 Page 213"
  },
  {
    "id": "sci_c11_q25",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 2,
    "type": "SA",
    "question": "A copper wire has diameter 0.5 mm and resistivity of 1.6 × 10⁻⁸ Ω·m. What will be the length of this wire to make its resistance 10 Ω?",
    "answer": "Given data:\n- Radius $r = \\frac{d}{2} = \\frac{0.5}{2}\\text{ mm} = 0.25 \\times 10^{-3}\\text{ m}$\n- Cross-sectional Area $A = \\pi r^2 = \\frac{22}{7} \\times (0.25 \\times 10^{-3})^2 = 1.964 \\times 10^{-7}\\text{ m}^2$\n- Resistivity $\\rho = 1.6 \\times 10^{-8}\\ \\Omega\\cdot\\text{m}$\n- Resistance $R = 10\\ \\Omega$\n\nFormula: $R = \\rho \\frac{l}{A} \\implies l = \\frac{RA}{\\rho}$\n$l = \\frac{10 \\times 1.964 \\times 10^{-7}}{1.6 \\times 10^{-8}} = \\frac{1.964 \\times 10^{-6}}{1.6 \\times 10^{-8}} = 122.7\\text{ m}$.",
    "formula": "l = \\frac{RA}{\\rho} = 122.7\\text{ m}",
    "source": "NCERT Class 10 In-text Example"
  },
  {
    "id": "sci_c11_q26",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 2,
    "type": "SA",
    "question": "State Joule's Law of Heating. Express it mathematically and name two appliances that utilize this heating effect.",
    "answer": "(1) Statement: The amount of heat (H) produced in a resistor is:\n- Directly proportional to the square of current ($I^2$) for a given resistance.\n- Directly proportional to resistance ($R$) for a given current.\n- Directly proportional to the time ($t$) for which current flows through the resistor.\n\n(2) Mathematical Formula: $H = I^2Rt$ Joules.\n\n(3) Two Appliances: Electric geyser (water heater), Electric iron, or Electric toaster.",
    "formula": "H = I^2Rt",
    "source": "NCERT Class 10 Page 218"
  },
  {
    "id": "sci_c11_q27",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 2,
    "type": "SA",
    "question": "Why is an electric fuse wire always connected in series with the live wire of a domestic circuit? What are the key physical characteristics of a fuse wire?",
    "answer": "(1) Connection with Live Wire: The fuse is a sacrificial protective device. When connected in series with the live wire, any overcurrent or short-circuit melts the fuse wire, instantly disconnecting the high 220 V potential from the household circuits, preventing electrocution and electrical fires.\n\n(2) Physical Characteristics:\n- Made of an alloy of lead and tin (Pb-Sn).\n- High electrical resistance.\n- Low melting point so it melts rapidly when current exceeds safe rated threshold.",
    "source": "CBSE 2023 Board Paper"
  },
  {
    "id": "sci_c11_q28",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 3,
    "type": "SA",
    "question": "Derive the mathematical expression for the equivalent resistance (R_s) of three resistors R₁, R₂, and R₃ connected in series in an electric circuit.",
    "answer": "(1) Circuit Configuration: Let three resistors $R_1$, $R_2$, and $R_3$ be connected end-to-end in series across a battery supplying potential difference $V$.\n\n(2) Current Invariance: In series combination, the same electric current $I$ flows successively through every resistor.\n\n(3) Voltage Summation: The total potential difference $V$ across the entire combination equals the sum of potential drops across individual resistors:\n$V = V_1 + V_2 + V_3$\n\n(4) Applying Ohm's Law:\n$V_1 = IR_1$, $V_2 = IR_2$, $V_3 = IR_3$\nSubstituting: $V = IR_1 + IR_2 + IR_3 = I(R_1 + R_2 + R_3)$\nIf $R_s$ is the equivalent resistance, then $V = IR_s$.\nTherefore: $IR_s = I(R_1 + R_2 + R_3) \\implies R_s = R_1 + R_2 + R_3$.",
    "formula": "R_s = R_1 + R_2 + R_3",
    "source": "NCERT Class 10 Page 211"
  },
  {
    "id": "sci_c11_q29",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 3,
    "type": "SA",
    "question": "Derive the mathematical expression for the equivalent resistance (R_p) of three resistors R₁, R₂, and R₃ connected in parallel across a voltage source V.",
    "answer": "(1) Circuit Configuration: Three resistors $R_1$, $R_2$, and $R_3$ are connected simultaneously between two common junction points X and Y across voltage source $V$.\n\n(2) Voltage Invariance: The potential difference across each parallel resistor is identical and equal to battery voltage $V$.\n\n(3) Current Division: The total main circuit current $I$ divides at junction X into three branches:\n$I = I_1 + I_2 + I_3$\n\n(4) Applying Ohm's Law:\n$I_1 = \\frac{V}{R_1}$, $I_2 = \\frac{V}{R_2}$, $I_3 = \\frac{V}{R_3}$\nSubstituting: $I = \\frac{V}{R_1} + \\frac{V}{R_2} + \\frac{V}{R_3} = V\\left(\\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}\\right)$\nIf $R_p$ is the equivalent parallel resistance, then $I = \\frac{V}{R_p}$.\nEquating: $\\frac{V}{R_p} = V\\left(\\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}\\right) \\implies \\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$.",
    "formula": "\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}",
    "source": "NCERT Class 10 Page 214"
  },
  {
    "id": "sci_c11_q30",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 3,
    "type": "SA",
    "question": "An electric heater rated 2 kW is used for 4 hours daily, and an electric refrigerator rated 400 W is used for 10 hours daily. Calculate the total cost of electricity consumed in the month of September at the rate of ₹6.50 per commercial unit (kWh).",
    "answer": "(1) Energy consumed by Electric Heater daily:\n$E_1 = P_1 \\times t_1 = 2\\text{ kW} \\times 4\\text{ h} = 8\\text{ kWh/day}$\n\n(2) Energy consumed by Refrigerator daily:\n$P_2 = 400\\text{ W} = 0.4\\text{ kW}$\n$E_2 = P_2 \\times t_2 = 0.4\\text{ kW} \\times 10\\text{ h} = 4\\text{ kWh/day}$\n\n(3) Total Daily Electrical Energy:\n$E_{\\text{daily}} = E_1 + E_2 = 8 + 4 = 12\\text{ kWh/day}$\n\n(4) Total Energy in September (30 days):\n$E_{\\text{total}} = 12\\text{ kWh} \\times 30\\text{ days} = 360\\text{ kWh (units)}$\n\n(5) Total Electricity Bill:\n$\\text{Cost} = 360\\text{ units} \\times ₹6.50/\\text{unit} = ₹2340.00$.",
    "formula": "E = P \\times t;\\quad \\text{Cost} = E \\times \\text{Rate}",
    "examinerNote": "September has 30 days. Multiplying by 31 loses 0.5 marks.",
    "source": "CBSE 2023 Board Paper"
  },
  {
    "id": "sci_c11_q31",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 3,
    "type": "SA",
    "question": "A wire of given material having length l and area of cross-section A has resistance of 4 Ω. What would be the resistance of another wire of the same material having length l/2 and area of cross-section 2A? What happens to its resistivity?",
    "answer": "(1) Initial Wire:\n$R_1 = \\rho \\frac{l}{A} = 4\\ \\Omega$\n\n(2) New Wire:\nLength $l' = \\frac{l}{2}$, Area $A' = 2A$.\nNew Resistance:\n$R_2 = \\rho \\frac{l'}{A'} = \\rho \\frac{l/2}{2A} = \\rho \\frac{l}{4A} = \\frac{1}{4}\\left(\\rho \\frac{l}{A}\\right)$\nSubstituting $R_1 = 4\\ \\Omega$:\n$R_2 = \\frac{1}{4} \\times 4\\ \\Omega = 1\\ \\Omega$.\n\n(3) Effect on Resistivity:\nThe resistivity (ρ) remains completely UNCHANGED because resistivity depends only on the nature of the material and temperature, which are identical for both wires.",
    "formula": "R_2 = \\frac{R_1}{4} = 1\\ \\Omega",
    "source": "NCERT Class 10 Page 209 Example 12.6"
  },
  {
    "id": "sci_c11_q32",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 3,
    "type": "SA",
    "question": "Three resistors of 4 Ω, 6 Ω, and 12 Ω are connected together. How should they be connected to obtain an equivalent resistance of: (a) 8 Ω? (b) 2 Ω? Show complete circuit calculations.",
    "answer": "(a) To obtain 8 Ω:\nConnect 6 Ω and 12 Ω in parallel, and put the 4 Ω resistor in series with the parallel combination:\n- Parallel combination: $\\frac{1}{R_p} = \\frac{1}{6} + \\frac{1}{12} = \\frac{2 + 1}{12} = \\frac{3}{12} = \\frac{1}{4} \\implies R_p = 4\\ \\Omega$.\n- In series with 4 Ω: $R_{\\text{eq}} = 4\\ \\Omega + R_p = 4 + 4 = 8\\ \\Omega$.\n\n(b) To obtain 2 Ω:\nConnect all three resistors (4 Ω, 6 Ω, and 12 Ω) in parallel:\n$\\frac{1}{R_p} = \\frac{1}{4} + \\frac{1}{6} + \\frac{1}{12} = \\frac{3 + 2 + 1}{12} = \\frac{6}{12} = \\frac{1}{2} \\implies R_p = 2\\ \\Omega$.",
    "formula": "R_{\\text{eq}} = 8\\ \\Omega;\\quad R_p = 2\\ \\Omega",
    "source": "NCERT Class 10 Exercise Question 11"
  },
  {
    "id": "sci_c11_q33",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 3,
    "type": "SA",
    "question": "Explain the following engineering design choices in electrical circuits:\n(a) Why is tungsten used almost exclusively for filament of incandescent lamps?\n(b) Why are the conductors of electric heating devices (like toasters) made of an alloy rather than a pure metal?\n(c) Why is series arrangement not used for domestic circuits?",
    "answer": "(a) Tungsten in Lamp Filaments: Tungsten has an exceptionally high melting point (3380°C) and high tensile strength. It can be heated to glowing white incandescence without melting or evaporating, emitting brilliant light.\n\n(b) Alloys in Heating Elements: Alloys like Nichrome have much higher electrical resistivity than pure metals, producing intense Joule heat ($H = I^2Rt$). Furthermore, alloys do not undergo thermal oxidation (burning) even when glowing red hot at 800°C.\n\n(c) Domestic Disadvantage of Series Circuits: In series, total resistance rises and all appliances share the same current. If a low-power lamp and a high-power geyser are connected in series, neither receives appropriate current. Moreover, if any single device trips, the whole home goes dark.",
    "source": "CBSE 2024 Board Question"
  },
  {
    "id": "sci_c11_q34",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 3,
    "type": "SA",
    "question": "An electric lamp of 100 Ω, a toaster of resistance 50 Ω, and a water filter of resistance 500 Ω are connected in parallel to a 220 V source:\n(a) What is the equivalent resistance of the combination?\n(b) What is the total current drawn from the source?\n(c) What is the resistance of an electric iron connected to the same source that takes as much current as all three appliances, and what is the current through it?",
    "answer": "(a) Equivalent Parallel Resistance:\n$\\frac{1}{R_p} = \\frac{1}{100} + \\frac{1}{50} + \\frac{1}{500} = \\frac{5 + 10 + 1}{500} = \\frac{16}{500} = \\frac{4}{125}$\n$R_p = \\frac{125}{4} = 31.25\\ \\Omega$.\n\n(b) Total Current Drawn:\n$I = \\frac{V}{R_p} = \\frac{220}{31.25} = 7.04\\text{ A}$.\n\n(c) Electric Iron Resistance & Current:\nSince the electric iron draws the exact same total current as all three appliances combined:\n- Current through electric iron $I = 7.04\\text{ A}$.\n- Resistance of electric iron $R = R_p = 31.25\\ \\Omega$.",
    "formula": "R = 31.25\\ \\Omega;\\quad I = 7.04\\text{ A}",
    "source": "NCERT Class 10 Page 216 Question 2"
  },
  {
    "id": "sci_c11_q35",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In a physics laboratory, a student verified Ohm's Law using a nichrome resistance wire, a variable DC voltage supply, an ammeter, and a voltmeter. She recorded the following observations:\n- Potential Difference V (Volts): 0.5, 1.0, 1.5, 2.0, 2.5\n- Current I (Amperes): 0.1, 0.2, 0.3, 0.4, 0.5\n\n(a) Plot a graph between V (y-axis) and I (x-axis) and deduce the nature of the graph.\n(b) Calculate the electrical resistance of the nichrome wire from the slope of the graph.\n(c) If the potential difference across the wire is increased to 4.0 V, predict the current flowing through it.\n(d) What precautions must be observed regarding the key/switch during this experiment to maintain accuracy?",
    "answer": "(a) Nature of Graph: The graph of V versus I is a perfectly straight line passing through the coordinate origin (0, 0), confirming that current is directly proportional to potential difference ($V \\propto I$) for an ohmic metallic conductor.\n\n(b) Resistance Calculation from Slope:\n$\\text{Slope} = R = \\frac{\\Delta V}{\\Delta I} = \\frac{2.5 - 0.5}{0.5 - 0.1} = \\frac{2.0}{0.4} = 5.0\\ \\Omega$.\n\n(c) Current at 4.0 V:\nUsing Ohm's Law: $I = \\frac{V}{R} = \\frac{4.0\\text{ V}}{5.0\\ \\Omega} = 0.8\\text{ A}$.\n\n(d) Critical Experimental Precaution: The plug key must be kept inserted ONLY while taking readings and removed immediately afterward. Continuous current flow causes Joule heating ($H = I^2Rt$) in the wire, which increases its resistance and causes the V-I line to curve.",
    "formula": "R = \\frac{\\Delta V}{\\Delta I} = 5\\ \\Omega;\\quad I = 0.8\\text{ A}",
    "examinerNote": "Stating that continuous heating changes resistance is essential for part (d).",
    "source": "CBSE Official Sample Paper 2025"
  },
  {
    "id": "sci_c11_q36",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: An electrical engineer audited the power consumption of a household. The monthly electricity bill showed 420 units consumed in a 30-day billing cycle. The house uses four 40 W LED tubes for 6 hours daily, three 75 W ceiling fans for 12 hours daily, and a 1.5 kW electric water geyser for 2 hours daily.\n\n(a) Calculate the daily electrical energy consumed by the tubes, fans, and geyser combined in kWh.\n(b) What is the total energy consumed in a 30-day month by these specific appliances?\n(c) If the electric supply company charges ₹5.00 per unit for the first 200 units and ₹7.00 per unit for consumption beyond 200 units, calculate the monthly bill for 420 units.\n(d) What is meant by '1 commercial unit of electrical energy'?",
    "answer": "(a) Daily Energy Calculations:\n- LED Tubes: $4 \\times 40\\text{ W} = 160\\text{ W} = 0.16\\text{ kW}$. Energy = $0.16 \\times 6\\text{ h} = 0.96\\text{ kWh}$.\n- Fans: $3 \\times 75\\text{ W} = 225\\text{ W} = 0.225\\text{ kW}$. Energy = $0.225 \\times 12\\text{ h} = 2.70\\text{ kWh}$.\n- Geyser: $1.5\\text{ kW} \\times 2\\text{ h} = 3.00\\text{ kWh}$.\nTotal Daily Consumption = $0.96 + 2.70 + 3.00 = 6.66\\text{ kWh/day}$.\n\n(b) Monthly Consumption for these appliances (30 days):\n$6.66\\text{ kWh} \\times 30\\text{ days} = 199.8\\text{ kWh} \\approx 200\\text{ units}$.\n\n(c) Cost for 420 Units (Tiered Tariff):\n- First 200 units @ ₹5.00 = $200 \\times 5 = ₹1000.00$\n- Remaining 220 units @ ₹7.00 = $220 \\times 7 = ₹1540.00$\nTotal Monthly Bill = $1000 + 1540 = ₹2540.00$.\n\n(d) 1 Commercial Unit: 1 Unit equals 1 kilowatt-hour (1 kWh), which is the energy consumed by an electrical appliance of power rating 1000 Watts operating continuously for 1 hour ($3.6 \\times 10^6\\text{ Joules}$).",
    "source": "CBSE 2023 Case-Based Question"
  },
  {
    "id": "sci_c11_q37",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: In an electronics design lab, a student was supplied with two identical heating coils A and B, each having resistance R = 24 Ω. The coils are connected across a constant 220 V line in three different configurations: (i) Coil A alone, (ii) Coils A and B in series, (iii) Coils A and B in parallel.\n\n(a) Calculate the current drawn when Coil A is used alone.\n(b) Calculate the current drawn when Coils A and B are used in series.\n(c) Calculate the current drawn when Coils A and B are used in parallel.\n(d) In which configuration is maximum heat energy generated per second? State the ratio of power in parallel to power in series.",
    "answer": "(a) Coil A Used Alone ($R = 24\\ \\Omega$):\n$I = \\frac{V}{R} = \\frac{220}{24} = 9.17\\text{ A}$.\nPower $P_{\\text{single}} = \\frac{V^2}{R} = \\frac{220^2}{24} = 2016.7\\text{ W}$.\n\n(b) Coils A and B in Series:\nEquivalent resistance $R_s = R + R = 24 + 24 = 48\\ \\Omega$.\nCurrent $I_s = \\frac{V}{R_s} = \\frac{220}{48} = 4.58\\text{ A}$.\nPower $P_s = \\frac{V^2}{R_s} = \\frac{220^2}{48} = 1008.3\\text{ W}$.\n\n(c) Coils A and B in Parallel:\nEquivalent resistance $R_p = \\frac{R}{2} = \\frac{24}{2} = 12\\ \\Omega$.\nCurrent $I_p = \\frac{V}{R_p} = \\frac{220}{12} = 18.33\\text{ A}$.\nPower $P_p = \\frac{V^2}{R_p} = \\frac{220^2}{12} = 4033.3\\text{ W}$.\n\n(d) Maximum Heat & Power Ratio:\n- Maximum heat per second is generated in Parallel configuration ($P_p = 4033.3\\text{ W}$).\n- Ratio: $\\frac{P_p}{P_s} = \\frac{V^2/R_p}{V^2/R_s} = \\frac{R_s}{R_p} = \\frac{48}{12} = 4 : 1$.\nParallel connection produces exactly 4 times more heat than series connection.",
    "formula": "\\frac{P_p}{P_s} = 4",
    "examinerNote": "P_p / P_s = 4 is a standard board numerical result.",
    "source": "NCERT Class 10 Exercise Question 13"
  },
  {
    "id": "sci_c11_q38",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: Consider a complex DC circuit containing four resistors: R₁ = 10 Ω, R₂ = 40 Ω, R₃ = 30 Ω, and R₄ = 20 Ω connected to a 12 V battery. R₁ and R₂ are connected in parallel to form block A. R₃ and R₄ are connected in parallel to form block B. Block A and Block B are connected in series with the battery.\n\n(a) Calculate the equivalent resistance of block A.\n(b) Calculate the equivalent resistance of block B.\n(c) Find the total resistance of the complete circuit.\n(d) Calculate the total current flowing in the circuit and the potential drop across block A.",
    "answer": "(a) Equivalent Resistance of Block A ($R_1 \\parallel R_2$):\n$\\frac{1}{R_A} = \\frac{1}{10} + \\frac{1}{40} = \\frac{4 + 1}{40} = \\frac{5}{40} = \\frac{1}{8} \\implies R_A = 8\\ \\Omega$.\n\n(b) Equivalent Resistance of Block B ($R_3 \\parallel R_4$):\n$\\frac{1}{R_B} = \\frac{1}{30} + \\frac{1}{20} = \\frac{2 + 3}{60} = \\frac{5}{60} = \\frac{1}{12} \\implies R_B = 12\\ \\Omega$.\n\n(c) Total Circuit Resistance:\nSince Block A and Block B are connected in series:\n$R_{\\text{total}} = R_A + R_B = 8\\ \\Omega + 12\\ \\Omega = 20\\ \\Omega$.\n\n(d) Total Current & Potential Drop across Block A:\n- Total Current: $I = \\frac{V}{R_{\\text{total}}} = \\frac{12\\text{ V}}{20\\ \\Omega} = 0.6\\text{ A}$.\n- Potential drop across Block A: $V_A = I \\times R_A = 0.6\\text{ A} \\times 8\\ \\Omega = 4.8\\text{ V}$.",
    "formula": "R_{\\text{total}} = 20\\ \\Omega;\\quad I = 0.6\\text{ A};\\quad V_A = 4.8\\text{ V}",
    "source": "NCERT Class 10 Page 215 Example 12.9"
  },
  {
    "id": "sci_c11_q39",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 5,
    "type": "LA",
    "question": "Comprehensive Theory of Electrical Resistance and Resistivity:\n(a) Define electric potential difference and state its SI unit. Define 1 Volt.\n(b) Distinguish between Resistance and Electrical Resistivity. Write the SI unit for both.\n(c) A metal cylinder has length L and cross-sectional area A with resistance R. It is melted and drawn into a wire of double its original length (2L). What will be its new resistance and new resistivity? Show step-by-step derivation.",
    "answer": "(a) Potential Difference & 1 Volt:\n- Definition: The amount of work done in moving a unit positive electric charge from one point to another in an electric circuit: $V = \\frac{W}{Q}$.\n- SI Unit: Volt (V) [1 V = 1 Joule / 1 Coulomb].\n- 1 Volt: The potential difference between two points in a current-carrying conductor when 1 Joule of work is done to move a charge of 1 Coulomb from one point to the other.\n\n(b) Resistance vs Resistivity:\n- Resistance (R): The opposition offered by a specific conductor to the flow of electric current. SI Unit: Ohm (Ω). Depends on length, cross-sectional area, material, and temperature.\n- Resistivity (ρ): The intrinsic characteristic property of the material of the conductor, defined as the resistance of a conductor of unit length and unit cross-sectional area ($1\\text{ m} \\times 1\\text{ m}^2$). SI Unit: Ohm-meter (Ω·m). Independent of dimensions.\n\n(c) Wire Stretching Derivation:\nWhen the wire is stretched, its volume $V = A \\times L$ remains constant.\n- Initial State: $L_1 = L$, $A_1 = A$, $R_1 = \\rho \\frac{L}{A} = R$.\n- Stretched State: Length doubles: $L_2 = 2L$.\n- Constant Volume: $A_1 L_1 = A_2 L_2 \\implies A \\times L = A_2 \\times (2L) \\implies A_2 = \\frac{A}{2}$ (cross-sectional area halves).\n- New Resistance:\n$R_2 = \\rho \\frac{L_2}{A_2} = \\rho \\frac{2L}{A/2} = \\rho \\frac{4L}{A} = 4\\left(\\rho \\frac{L}{A}\\right) = 4R$.\nResistance becomes FOUR times its initial value.\n- New Resistivity: Unchanged (ρ remains identical).",
    "formula": "R_2 = 4R;\\quad \\rho_2 = \\rho",
    "examinerNote": "Volume conservation step ($A_2 = A/2$) is mandatory for full 5 marks.",
    "source": "CBSE Board 2024 Long Answer"
  },
  {
    "id": "sci_c11_q40",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 5,
    "type": "LA",
    "question": "Series vs Parallel Electrical Combinations in Circuit Engineering:\n(a) State three major characteristics of resistors connected in series, and three major characteristics of resistors connected in parallel.\n(b) Two electric bulbs rated 60 W; 220 V and 100 W; 220 V are connected in parallel to a 220 V mains supply. Find the current drawn by each bulb and the total power consumed.\n(c) What happens if the same two bulbs are connected in series across the 220 V line? Which bulb will glow brighter in series and why?",
    "answer": "(a) Series vs Parallel Characteristics:\nSeries:\n1. Same electric current flows through every resistor.\n2. Total potential difference is the sum of individual voltage drops ($V = V_1 + V_2 + V_3$).\n3. Equivalent resistance ($R_s = R_1 + R_2 + R_3$) is always greater than the largest individual resistance.\nParallel:\n1. Potential difference across every resistor is identical ($V_1 = V_2 = V_3 = V$).\n2. Total current is the sum of branch currents ($I = I_1 + I_2 + I_3$).\n3. Equivalent resistance ($\\frac{1}{R_p} = \\sum \\frac{1}{R_i}$) is always smaller than the smallest individual resistance.\n\n(b) Two Bulbs in Parallel at 220 V:\n- Bulb 1 (60 W): $I_1 = \\frac{P_1}{V} = \\frac{60}{220} = \\frac{3}{11} = 0.273\\text{ A}$.\n- Bulb 2 (100 W): $I_2 = \\frac{P_2}{V} = \\frac{100}{220} = \\frac{5}{11} = 0.455\\text{ A}$.\n- Total Power Consumed: $P = P_1 + P_2 = 60 + 100 = 160\\text{ W}$.\n\n(c) Bulbs Connected in Series:\n- Individual Resistances: $R = \\frac{V^2}{P}$.\n$R_{60} = \\frac{220^2}{60} = 806.7\\ \\Omega$; $R_{100} = \\frac{220^2}{100} = 484\\ \\Omega$. Notice $R_{60} > R_{100}$.\n- In series, identical current $I$ flows through both bulbs. Power dissipated as light and heat is $P = I^2R$.\n- Because $R_{60} > R_{100}$, the 60 W bulb dissipates more power ($I^2 R_{60} > I^2 R_{100}$) and therefore glows MUCH BRIGHTER than the 100 W bulb!",
    "formula": "P = I^2R;\\quad R_{60} > R_{100} \\implies \\text{60 W bulb glows brighter in series}",
    "examinerNote": "The 60 W bulb glowing brighter in series is a famous conceptual HOTS board question.",
    "source": "CBSE 2020, 2023 Long Answer"
  },
  {
    "id": "sci_c11_q41",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 5,
    "type": "LA",
    "question": "Joule's Heating and Electrical Safety Devices:\n(a) Deduce Joule's law of heating mathematically starting from the definition of electric potential and work done ($W = VQ$).\n(b) Why does the cord of an electric heater not glow while its heating element glows red hot?\n(c) Explain the operating principle, construction, and rating of an electric fuse. What happens if a 15 A fuse is installed in an electric circuit rated for 5 A?",
    "answer": "(a) Mathematical Derivation of Joule's Law:\n1. Electric potential difference $V$ is work done $W$ per unit charge $Q$:\n$W = V \\times Q$\n2. Electric current is charge per unit time ($Q = I \\times t$):\n$W = V \\times (I \\times t) = VIt$\n3. According to Ohm's law, $V = IR$. Substituting into work equation:\n$W = (IR) \\times I \\times t = I^2Rt$\n4. Assuming all electrical work energy is converted into thermal energy (heat $H$):\n$H = I^2Rt$ Joules.\n\n(b) Heater Cord vs Heating Element:\n- The connecting power cord is made of thick copper wire, which has extremely low resistance ($R_{\\text{copper}} \\approx 0$). Hence, heat generated $H = I^2Rt$ is negligible and the cord stays cool.\n- The heating element is made of thin Nichrome alloy wire with very high resistance. Heat dissipated is immense, causing the element to glow red hot (~800°C).\n\n(c) Electric Fuse Engineering:\n- Construction: A small length of wire made of an alloy of low melting point and high resistance (Lead-Tin alloy), encased in a porcelain or glass cartridge.\n- Operating Principle: Operates on Joule's heating effect ($H = I^2Rt$). When current exceeds the rated threshold (e.g. 5 A), excess heat melts the fuse wire, breaking the circuit.\n- Installing 15 A Fuse in 5 A Circuit: A 15 A fuse wire is thick and will NOT melt when current reaches dangerous levels (e.g. 10 A). The high current will overheat domestic wiring, burning appliances and causing major electrical fires.",
    "formula": "H = I^2Rt",
    "source": "NCERT Class 10 Pages 216–218"
  },
  {
    "id": "sci_c11_q42",
    "chapter": 11,
    "chapterName": "Electricity",
    "marks": 5,
    "type": "LA",
    "question": "Complete Electrical Circuit Network Analysis:\nIn the circuit shown, three resistors of 5 Ω, 10 Ω, and 30 Ω are connected in parallel across a 12 V battery with a plug key and an ammeter:\n(a) Draw the complete circuit diagram.\n(b) Calculate the current flowing through each individual resistor.\n(c) Calculate the total current flowing in the main circuit.\n(d) Calculate the equivalent resistance of the entire parallel circuit.\n(e) Calculate the total electrical power consumed by the combination.",
    "answer": "(a) Circuit Diagram Description:\nThree horizontal branches containing 5 Ω, 10 Ω, and 30 Ω resistors joined at two common nodes A and B. A 12 V DC battery, main ammeter, and plug key connected in series in the main line across nodes A and B.\n\n(b) Current through each Individual Resistor:\nSince voltage across each parallel branch is $V = 12\\text{ V}$:\n- $I_1 = \\frac{V}{R_1} = \\frac{12\\text{ V}}{5\\ \\Omega} = 2.4\\text{ A}$\n- $I_2 = \\frac{V}{R_2} = \\frac{12\\text{ V}}{10\\ \\Omega} = 1.2\\text{ A}$\n- $I_3 = \\frac{V}{R_3} = \\frac{12\\text{ V}}{30\\ \\Omega} = 0.4\\text{ A}$\n\n(c) Total Main Circuit Current:\n$I_{\\text{total}} = I_1 + I_2 + I_3 = 2.4 + 1.2 + 0.4 = 4.0\\text{ A}$.\n\n(d) Equivalent Parallel Resistance:\n$\\frac{1}{R_p} = \\frac{1}{5} + \\frac{1}{10} + \\frac{1}{30} = \\frac{6 + 3 + 1}{30} = \\frac{10}{30} = \\frac{1}{3} \\implies R_p = 3.0\\ \\Omega$.\n[Verification: $R_p = \\frac{V}{I_{\\text{total}}} = \\frac{12\\text{ V}}{4.0\\text{ A}} = 3.0\\ \\Omega$. Checks out].\n\n(e) Total Electrical Power Consumed:\n$P_{\\text{total}} = V \\times I_{\\text{total}} = 12\\text{ V} \\times 4.0\\text{ A} = 48.0\\text{ W}$.\n[Alternatively: $P = \\frac{V^2}{R_p} = \\frac{12^2}{3} = \\frac{144}{3} = 48\\text{ W}$].",
    "formula": "R_p = 3\\ \\Omega;\\quad I_{\\text{total}} = 4\\text{ A};\\quad P = 48\\text{ W}",
    "source": "NCERT Class 10 Page 214 Example 12.8"
  },
];
