import type { ScienceChapterConcept } from "./types";

export const SCI_CH11_CONCEPT: ScienceChapterConcept = {
  chapterNo: 11,
  title: "Electricity",
  discipline: "Physics",
  weightage: "7–9 Marks (Highest Physics Weightage)",
  oneLiner: "Current is the rate of charge flow (I = Q/t); potential difference drives charge (V = W/Q); Ohm's Law relates them (V = IR); resistance depends on length, area, and material (R = ρl/A); resistors combine in series (Rs = ΣR) and parallel (1/Rp = Σ1/R); Joule's heating dissipated as power (P = VI = I²R = V²/R; 1 kWh = 3.6 × 10⁶ J).",
  analogyTitle: "The Hydrodynamic Circuit — Pressure, Flow & Friction 🚰⚡",
  analogyContent: `Imagine an electric circuit as a **closed water pumping network**:

- **Battery / Cell = Water Pump:** Creates a pressure difference (Potential Difference $V$ in Volts). Without the pump, water sits still; with the pump, water circulates.
- **Electric Current ($I$) = Flow Rate:** The number of litres (Coulombs of charge) passing a flow meter per second ($1\\text{ A} = 1\\text{ C/s}$).
- **Resistor ($R$) = Narrow, Constricted Pipe:** Friction that opposes flow. Narrower pipes ($A$) or longer pipes ($l$) restrict the flow ($R = \\rho l / A$).
- **Ohm's Law ($V = IR$):** More pressure ($V$) drives more water flow ($I$), while higher pipe friction ($R$) chokes the flow!`,
  sections: [
    {
      id: "electric_current_potential_ohm",
      label: "1. Current, Potential Difference & Ohm's Law",
      heading: "Electric Charge, Current, Voltage, Ohm's Law & V-I Graph Analysis",
      subheading: "I = Q/t + V = W/Q + Factors Affecting Resistance + Wire Stretching + V-I Slope",
      explanation: `**1. ELECTRIC CHARGE ($Q$) & ELECTRIC CURRENT ($I$):**
- **Electric Charge ($Q$):** Fundamental property of matter. SI unit: **Coulomb (C)**.
  - Charge on one electron: $e = 1.6 \\times 10^{-19}\\text{ C}$.
  - Number of electrons in $1\\text{ C}$ of charge:
    $$n = \\frac{Q}{e} = \\frac{1}{1.6 \\times 10^{-19}} = 6.25 \\times 10^{18}\\text{ electrons}$$
- **Electric Current ($I$):** The rate of flow of electric charge across a cross-section of a conductor:
  $$\\mathbf{I = \\frac{Q}{t} = \\frac{ne}{t}}$$
  - **SI Unit:** **Ampere (A)** ($1\\text{ A} = 1\\text{ C/s}$).
  - **Definition of 1 Ampere:** Current flowing through a conductor when 1 Coulomb of charge passes through any cross-section in 1 second.
  - **Measurement:** Measured by an **Ammeter** (connected strictly in **SERIES**; has low resistance).
  - **Direction:** Conventional current flows from **Positive (+) to Negative (-)** terminal externally (opposite to the actual flow of electrons, which travel from - to +).

---

**2. ELECTRIC POTENTIAL & POTENTIAL DIFFERENCE ($V$):**
- **Potential Difference ($V$):** The work done in moving a unit positive charge from one point to another in an electric circuit:
  $$\\mathbf{V = \\frac{W}{Q}}$$
  - **SI Unit:** **Volt (V)** ($1\\text{ V} = 1\\text{ J/C}$).
  - **Definition of 1 Volt:** The potential difference between two points if 1 Joule of work is done in moving 1 Coulomb of charge from one point to the other.
  - **Measurement:** Measured by a **Voltmeter** (connected strictly in **PARALLEL** across the component; has high resistance).

---

**3. OHM'S LAW:**
At constant temperature, the electric current ($I$) flowing through a metallic conductor is directly proportional to the potential difference ($V$) applied across its ends:
$$V \\propto I \\iff \\mathbf{V = IR} \\iff I = \\frac{V}{R} \\iff R = \\frac{V}{I}$$

- **V-I Graph Analysis (Board Exam Crucial):**
  - For an ohmic metallic conductor at constant temperature, the V-I graph is a **straight line passing through the origin**.
  - **Slope of V vs I Graph (V on y-axis, I on x-axis):**
    $$\\text{Slope} = \\frac{\\Delta V}{\\Delta I} = R \\quad (\\text{Resistance})$$
    *Steeper line = Higher Resistance.*
  - **Slope of I vs V Graph (I on y-axis, V on x-axis):**
    $$\\text{Slope} = \\frac{\\Delta I}{\\Delta V} = \\frac{1}{R} \\quad (\\text{Conductance})$$
    *Steeper line = Lower Resistance!*
  - **Temperature Effect on Metals:** Resistance of pure metals increases with temperature ($R \\propto T$). Therefore, on a V-I graph, the curve with a steeper slope corresponds to the **higher temperature** ($T_2 > T_1$).

---

**4. FACTORS ON WHICH RESISTANCE DEPENDS:**
The resistance of a uniform metallic conductor depends on:
1. **Length ($l$):** Directly proportional ($R \\propto l$). Doubling length doubles resistance.
2. **Area of Cross-Section ($A$):** Inversely proportional ($R \\propto 1/A$). Thicker wire has less resistance.
3. **Nature of the Material:** Represented by **Resistivity ($\\rho$)**.
4. **Temperature:** For metals, resistance increases with temperature.

$$\\mathbf{R = \\rho \\frac{l}{A}}$$

- **Electrical Resistivity ($\\rho$):**
  $$\\rho = \\frac{RA}{l}$$
  - **SI Unit:** **Ohm-metre ($\\Omega\\cdot\\text{m}$)**.
  - Resistivity is a characteristic intrinsic property of the **material**; it depends on temperature and material, but is **INDEPENDENT of the wire's length or cross-sectional area**!
  - Conductors (Silver, Copper): $\\rho \\sim 10^{-8}\\;\\Omega\\cdot\\text{m}$ (Silver is best conductor: $1.6 \\times 10^{-8}\\;\\Omega\\cdot\\text{m}$).
  - Alloys (Nichrome, Constantan): $\\rho \\sim 10^{-6}\\;\\Omega\\cdot\\text{m}$ (60× higher than copper).
  - Insulators (Glass, Rubber): $\\rho \\sim 10^{12} \\text{ to } 10^{17}\\;\\Omega\\cdot\\text{m}$.

---

**5. THE CLASSIC WIRE-STRETCHING PROBLEM (Guaranteed Numerical):**
When a wire of length $l$, area $A$, and resistance $R$ is **stretched to $n$ times its original length** ($l' = n l$):
- Its mass and volume remain constant:
  $$\\text{Volume } V = A \\cdot l = A' \\cdot l' \\implies A' \\cdot (n l) = A l \\implies A' = \\frac{A}{n}$$
- The new resistance $R'$ is:
  $$R' = \\rho \\frac{l'}{A'} = \\rho \\frac{n l}{A / n} = n^2 \\left(\\rho \\frac{l}{A}\\right) = \\mathbf{n^2 R}$$
- *Example:* If stretched to double its length ($n = 2$), its new resistance becomes $2^2 R = \\mathbf{4R}$. Its percentage increase is $300\\%$. (Note: Resistivity $\\rho$ remains unchanged!).`,
      formulasOrKeyPoints: [
        {
          title: "Current & Resistance Master Equations",
          content: `$$I = \\frac{Q}{t} = \\frac{ne}{t} \\qquad V = \\frac{W}{Q} \\qquad V = IR$$
$$R = \\rho \\frac{l}{A} \\qquad \\text{Wire stretched by factor } n: R' = n^2 R$$
$$\\text{Unit of } \\rho = \\Omega\\cdot\\text{m} \\quad (\\text{independent of length and area})$$`,
          note: "Ammeter is connected in series (low R); Voltmeter is connected in parallel (high R)."
        }
      ],
      examinerTraps: [
        {
          trap: "Saying resistivity doubles when a wire is cut in half.",
          correction: "Resistance (R) will halve, but RESISTIVITY (ρ) remains COMPLETELY UNCHANGED! Resistivity is a material constant independent of physical dimensions. Only temperature or material change can alter ρ."
        }
      ]
    },
    {
      id: "combination_of_resistors",
      label: "2. Combination of Resistors — Series & Parallel",
      heading: "Formal Board Derivations, Branch Currents & Household Wiring",
      subheading: "Series Derivation (Rs = ΣR) + Parallel Derivation (1/Rp = Σ1/R) + Domestic Advantages",
      explanation: `**1. FORMAL BOARD DERIVATION — RESISTORS IN SERIES:**
Consider three resistors $R_1$, $R_2$, and $R_3$ connected end-to-end in series across a battery of voltage $V$.
1. **Current is Identical:** In a series circuit, there is only one continuous path for charge flow, so the electric current $I$ passing through each resistor is the same:
   $$I_1 = I_2 = I_3 = I$$
2. **Potential Difference Divides:** The total potential difference $V$ across the combination equals the sum of potential differences across individual resistors:
   $$V = V_1 + V_2 + V_3$$
3. By Ohm's Law applied to each resistor:
   $$V_1 = I R_1, \\quad V_2 = I R_2, \\quad V_3 = I R_3$$
4. If $R_s$ is the equivalent resistance of the series combination:
   $$V = I R_s$$
5. Substituting into the voltage sum:
   $$I R_s = I R_1 + I R_2 + I R_3 \\implies I R_s = I (R_1 + R_2 + R_3)$$
6. Canceling the common current $I$:
   $$\\mathbf{R_s = R_1 + R_2 + R_3} \\quad \\text{[Hence Derived]}$$
- *Key Takeaway:* Equivalent resistance in series is always **greater than the largest individual resistance**.

---

**2. FORMAL BOARD DERIVATION — RESISTORS IN PARALLEL:**
Consider three resistors $R_1$, $R_2$, and $R_3$ connected in parallel between two common nodes $X$ and $Y$ across a battery of voltage $V$.
1. **Potential Difference is Identical:** Each resistor is connected directly across the same two terminal nodes, so the voltage $V$ across each resistor is identical:
   $$V_1 = V_2 = V_3 = V$$
2. **Current Divides:** The total current $I$ entering the junction splits into branch currents:
   $$I = I_1 + I_2 + I_3$$
3. By Ohm's Law applied to each branch:
   $$I_1 = \\frac{V}{R_1}, \\quad I_2 = \\frac{V}{R_2}, \\quad I_3 = \\frac{V}{R_3}$$
4. If $R_p$ is the equivalent resistance of the parallel combination:
   $$I = \\frac{V}{R_p}$$
5. Substituting into the current sum:
   $$\\frac{V}{R_p} = \\frac{V}{R_1} + \\frac{V}{R_2} + \\frac{V}{R_3} \\implies \\frac{V}{R_p} = V \\left(\\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}\\right)$$
6. Dividing by the common voltage $V$:
   $$\\mathbf{\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}} \\quad \\text{[Hence Derived]}$$
- **Special Case for Two Resistors:**
  $$R_p = \\frac{R_1 R_2}{R_1 + R_2} \\quad \\left(\\frac{\\text{Product}}{\\text{Sum}}\\right)$$
- *Key Takeaway:* Equivalent resistance in parallel is always **smaller than the smallest individual resistance**.

---

**3. WHY IS PARALLEL CONNECTION USED IN DOMESTIC WIRING? (Guaranteed 3M Board Question):**
1. **Constant Voltage:** Each household appliance receives the full rated mains voltage (**220 V**), enabling each appliance to operate at its rated power.
2. **Independent Operation:** Each appliance has its own dedicated switch. Turning one appliance on or off does not affect others.
3. **No Total Circuit Failure:** If one appliance develops a fault, blows a fuse, or is disconnected, all other appliances continue functioning uninterrupted (unlike series where a single blown bulb shuts off the entire circuit).
4. **Low Total Resistance:** Connecting appliances in parallel decreases the overall circuit resistance, allowing adequate current to be drawn from the supply to run heavy loads.
5. **Different Current Needs:** Different appliances require vastly different currents (e.g., bulb needs ~0.2 A; geyser needs ~10 A). Parallel wiring provides separate branch currents tailored to each device.`,
      formulasOrKeyPoints: [
        {
          title: "Series vs Parallel Quick Comparison",
          content: `$$\\begin{aligned}
\\textbf{Series:} & \\quad I = \\text{constant}, \\; V = V_1 + V_2 + V_3 \\implies \\mathbf{R_s = R_1 + R_2 + R_3} \\\\
\\textbf{Parallel:} & \\quad V = \\text{constant}, \\; I = I_1 + I_2 + I_3 \\implies \\mathbf{\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}} \\\\
\\text{For } N \\text{ equal resistors } R: & \\quad R_s = n R, \\quad R_p = \\frac{R}{n} \\implies \\frac{R_s}{R_p} = n^2
\\end{aligned}$$`,
          note: "Ratio of maximum to minimum resistance using n identical resistors is always n²."
        }
      ],
      examinerTraps: [
        {
          trap: "Forgetting to take the reciprocal at the end of a parallel calculation.",
          correction: "After computing 1/Rp = 1/6 + 1/3 = 3/6 = 1/2, students often forget to invert and mistakenly write Rp = 1/2 Ω! You must invert: Rp = 2 Ω."
        }
      ]
    },
    {
      id: "joule_heating_and_power",
      label: "3. Heating Effect of Current & Electric Power",
      heading: "Joule's Law of Heating, Electric Power, Commercial kWh & Safety Devices",
      subheading: "H = I²Rt + P = VI = I²R = V²/R + 1 kWh = 3.6 × 10⁶ J + Tungsten vs Nichrome + Fuse Wire",
      explanation: `**1. JOULE'S LAW OF HEATING (Derivation & Statement):**
When an electric current $I$ flows through a resistor $R$ for time $t$:
- Work done in moving charge $Q$ across potential difference $V$:
  $$W = V \\times Q$$
- Since $Q = I \\times t$:
  $$W = V \\times I \\times t$$
- By Ohm's Law, $V = I \\times R$:
  $$W = (I R) \\times I \\times t = \\mathbf{I^2 R t}$$
- Assuming all electrical work is converted into thermal energy:
  $$\\mathbf{H = I^2 R t}$$

- **Formal Statement of Joule's Law:** The heat ($H$) produced in a resistor is:
  1. Directly proportional to the **square of electric current** ($H \\propto I^2$) for a given resistance.
  2. Directly proportional to the **resistance of the conductor** ($H \\propto R$) for a given current.
  3. Directly proportional to the **time** for which current flows ($H \\propto t$).

---

**2. PRACTICAL APPLICATIONS OF THE HEATING EFFECT:**
- **Electric Heating Appliances (Geyser, Iron, Toaster, Heater):**
  - Use heating elements made of **Nichrome** (alloy of Nickel, Chromium, Manganese, and Iron).
  - *Why alloys instead of pure metals?*
    1. Alloys have significantly **higher resistivity** than pure metals, generating high heat.
    2. Alloys do **not oxidize (burn) readily at high temperatures** (even up to 1000°C).
- **Incandescent Electric Bulb:**
  - Filament is made of **Tungsten**.
  - *Why Tungsten?*
    1. Extremely high melting point (**$3380^\\circ\\text{C}$**), so it does not melt when glowing white-hot at $2500^\\circ\\text{C}$.
    2. High resistivity and high flexibility (ductility to draw into thin coiled filaments).
  - Bulbs are filled with chemically inactive gases (**Argon or Nitrogen**) to prevent oxidation of the tungsten filament and prolong bulb lifespan.
- **Electric Fuse (Safety Device):**
  - Placed strictly in **SERIES with the LIVE wire**.
  - Made of an alloy of **Lead and Tin (Solder)** with a **low melting point** and appropriate resistance.
  - When excessive current flows due to short-circuiting or overloading, Joule heating melts the fuse wire, breaking the circuit and protecting expensive appliances and house wiring from fire.

---

**3. ELECTRIC POWER ($P$):**
The rate at which electrical energy is consumed or dissipated in an electric circuit:
$$\\mathbf{P = \\frac{W}{t} = V I = I^2 R = \\frac{V^2}{R}}$$

- **SI Unit:** **Watt (W)** ($1\\text{ W} = 1\\text{ J/s} = 1\\text{ V}\\cdot\\text{A}$).
  - **Definition of 1 Watt:** Power consumed by a device that carries 1 A of current when operated at a potential difference of 1 V.
  - $1\\text{ kW} = 1000\\text{ W}$, $1\\text{ MW} = 10^6\\text{ W}$.

- **Which Bulb is Brighter? (Guaranteed Board Trap!):**
  - Two bulbs rated $40\\text{ W}$ and $100\\text{ W}$ on $220\\text{ V}$:
    - Resistance $R = V^2 / P$. Since $V$ is fixed, **$R_{40} > R_{100}$** (the 40W bulb has higher resistance!).
  - **Connected in PARALLEL:** Voltage is identical. $P = V^2 / R$. The **$100\\text{ W}$ bulb glows brighter** because it has lower resistance and draws more current.
  - **Connected in SERIES:** Current is identical. $P = I^2 R$. Because $R_{40} > R_{100}$, the **$40\\text{ W}$ bulb glows brighter**!

---

**4. COMMERCIAL UNIT OF ELECTRICAL ENERGY — THE 'UNIT' (kWh):**
The SI unit Joule (J) is too tiny for practical electricity billing. Hence, the commercial unit is the **Kilowatt-hour (kWh)**, colloquially called '1 Unit'.
- **Derivation of Joule Equivalent:**
  $$1\\text{ kWh} = 1\\text{ kW} \\times 1\\text{ hour} = 1000\\text{ W} \\times 3600\\text{ seconds} = \\mathbf{3.6 \\times 10^6\\text{ Joules}}$$
- **Electricity Bill Calculation Formula:**
  $$\\text{Energy Consumed (in kWh)} = \\frac{\\text{Power (Watts)} \\times \\text{Time (hours/day)} \\times \\text{Days}}{1000}$$
  $$\\text{Total Cost} = \\text{Total Units (kWh)} \\times \\text{Cost per unit (₹)}$$`,
      formulasOrKeyPoints: [
        {
          title: "Power & Energy Master Relations",
          content: `$$P = VI = I^2 R = \\frac{V^2}{R} \\qquad H = I^2 R t$$
$$1\\text{ kWh} = 3.6 \\times 10^6\\text{ J} = 1\\text{ Unit}$$
$$\\text{Units (kWh)} = \\frac{P(\\text{W}) \\times t(\\text{h})}{1000}$$`,
          note: "Remember: In series, P = I²R (higher R glows brighter). In parallel, P = V²/R (lower R glows brighter)."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Watt (Power) with Watt-hour / Kilowatt-hour (Energy).",
          correction: "Watt is the unit of POWER (rate of energy consumption). Kilowatt-hour (kWh) is the unit of ENERGY (total work done over time). When electricity meters record 'units', they record ENERGY in kWh, not power."
        }
      ]
    }
  ]
};
