import type { ScienceChapterConcept } from "./types";

export const SCI_CH11_CONCEPT: ScienceChapterConcept = {
  chapterNo: 11,
  title: "Electricity",
  discipline: "Physics",
  weightage: "7–8 Marks (Board Highest Priority for Physics)",
  oneLiner: "Electric current = charge flow; Ohm's Law V=IR; series (same current, add resistance) vs parallel (same voltage, add reciprocal resistance); Power P=VI=I²R=V²/R.",
  analogyTitle: "Electricity = Water in a Pipe Network 🚰",
  analogyContent: `Imagine electricity as **water flowing through pipes**:

🔋 **Battery = Water Pump** — pushes water (electrons) around the circuit
💧 **Current = Flow rate** — how much water flows per second (litres/sec = Amperes)
💪 **Voltage = Water Pressure** — how hard the pump pushes (like water pressure in a pipe)
🪨 **Resistance = Narrow pipe** — a narrow section slows down the flow

**Ohm's Law: V = IR** is like: Pressure = Flow rate × Resistance of pipe!

**Series circuit** = all pipes connected end-to-end in one long line. If one pipe blocks, ALL water stops (all bulbs go out if one fuses!).

**Parallel circuit** = multiple pipes branching side by side. If one pipe blocks, water still flows through the others (like home wiring — one bulb going off doesn't affect others!).`,
  sections: [
    {
      id: "electric_current",
      label: "1. Electric Current, Potential Difference & Ohm's Law",
      heading: "The Flow of Charge, Pressure to Flow, and Their Relationship",
      subheading: "Charge, Current, Voltage, Resistance + Ohm's Law + V-I Graph",
      explanation: `**ELECTRIC CHARGE (Q):**
- Fundamental property of matter. Protons (+), Electrons (−)
- Unit: **Coulomb (C)**
- $1\\text{ electron} = 1.6 \\times 10^{-19}\\text{ C}$

**ELECTRIC CURRENT (I):**
Rate of flow of electric charge through a conductor.
$$I = \\dfrac{Q}{t}$$
Where Q = charge (Coulombs), t = time (seconds)
Unit: **Ampere (A)** → $1\\text{ A} = 1\\text{ C/s}$

**Conventional Current vs Electron Flow:**
- **Conventional current** flows from + terminal to − terminal (positive to negative) — the HISTORICAL convention
- **Electrons actually flow** from − terminal to + terminal (opposite to conventional!)
- Both are correct ways to describe the same thing. Board uses conventional current direction.

**POTENTIAL DIFFERENCE / VOLTAGE (V):**
Work done to move a unit positive charge from one point to another.
$$V = \\dfrac{W}{Q}$$
Where W = work done (Joules), Q = charge (Coulombs)
Unit: **Volt (V)** → $1\\text{ V} = 1\\text{ J/C}$

**EMF vs Terminal Voltage:**
- EMF (electromotive force) = total voltage of battery (no current flowing)
- Terminal voltage = voltage across battery when current flows (always < EMF due to internal resistance)

**RESISTANCE (R):**
Opposition offered by a conductor to the flow of current.
Unit: **Ohm (Ω)** → $1\\text{ Ω} = 1\\text{ V/A}$

**OHM'S LAW:**
At constant temperature, the current through a conductor is directly proportional to the potential difference across it.
$$V \\propto I \\implies V = IR \\implies I = \\dfrac{V}{R} \\implies R = \\dfrac{V}{I}$$

**V-I Graph:** A straight line through the origin → slope = R (resistance) = constant
- **Ohmic conductors:** Follow Ohm's law (straight line) — metal wires at constant temperature
- **Non-ohmic conductors:** Do NOT follow Ohm's law — filament bulb (resistance increases with temperature), LED, diode

**FACTORS AFFECTING RESISTANCE:**
$$R = \\dfrac{\\rho L}{A}$$
Where $\\rho$ = resistivity (material property), L = length of wire, A = cross-sectional area

| Factor | Effect on R |
|--------|-----------|
| Length (L) | R ∝ L (longer → more resistance) |
| Area (A) | R ∝ 1/A (thicker → less resistance) |
| Material (ρ) | Different materials have different resistivity |
| Temperature | For metals: ↑ temp → ↑ R; For semiconductors: ↑ temp → ↓ R |

**Resistivity values to remember:**
- Silver (best conductor): $\\rho = 1.6 \\times 10^{-8}$ Ω·m
- Copper: $\\rho = 1.7 \\times 10^{-8}$ Ω·m  
- Nichrome (used in heaters): $\\rho = 100 \\times 10^{-8}$ Ω·m
- Silicon (semiconductor): ~$10^3$ Ω·m`,
      formulasOrKeyPoints: [
        {
          title: "Ohm's Law Triangle & Quick Calculations",
          content: `**The V-I-R Triangle:**

$$\\boxed{\\dfrac{V}{I \\times R}}$$

Cover what you want to find:
- Cover V → $V = I \\times R$
- Cover I → $I = \\dfrac{V}{R}$  
- Cover R → $R = \\dfrac{V}{I}$

**Example 1:** A bulb with resistance 200 Ω is connected to 220 V. Find current.
$$I = \\dfrac{V}{R} = \\dfrac{220}{200} = 1.1 \\text{ A}$$

**Example 2:** A current of 2 A flows when voltage is 12 V. Find resistance.
$$R = \\dfrac{V}{I} = \\dfrac{12}{2} = 6 \\text{ Ω}$$

**Example 3:** A 5 Ω resistor carries 3 A. Find voltage across it.
$$V = IR = 3 \\times 5 = 15 \\text{ V}$$`,
          note: "OHM'S LAW holds only at CONSTANT TEMPERATURE. A metallic conductor heats up when current flows → resistance changes → no longer Ohm's law. That's why a light bulb filament (tungsten) is non-ohmic — its resistance changes drastically from cold to hot."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify what's given and what's required",
          action: "List V, I, R values. Check if it's Ohm's law (V=IR), Power formula (P=VI or P=I²R), or charge/current (I=Q/t).",
          proTip: "Always write the formula FIRST, then substitution. This earns method marks even if you make an arithmetic error."
        }
      ],
      examinerTraps: [
        {
          trap: "Saying conventional current flows from negative to positive terminal.",
          correction: "CONVENTIONAL CURRENT flows from POSITIVE (+) to NEGATIVE (−) terminal OUTSIDE the battery (through the external circuit). ELECTRONS flow from − to + (opposite). This is a 1M MCQ favourite. Remember: conventional current = + to − externally."
        }
      ]
    },
    {
      id: "circuits",
      label: "2. Resistors in Series & Parallel",
      heading: "Combining Resistors — and Why Homes Use Parallel Wiring",
      subheading: "Series Formula + Parallel Formula + Current & Voltage Sharing + Real-world Applications",
      explanation: `**SERIES CONNECTION:**
Resistors connected end-to-end in a single path — current has NO CHOICE but to flow through each one.

Key rules:
- **Same current** through each resistor: $I = I_1 = I_2 = I_3$
- **Voltages ADD up:** $V = V_1 + V_2 + V_3$
- **Equivalent resistance ADDS up:** $R_{\\text{eq}} = R_1 + R_2 + R_3$
  (Total resistance > any individual resistance → always LARGER!)

**PARALLEL CONNECTION:**
Resistors connected side by side, sharing the same two terminals — current can choose which path to take.

Key rules:
- **Same voltage** across each resistor: $V = V_1 = V_2 = V_3$
- **Currents ADD up:** $I = I_1 + I_2 + I_3$
- **Reciprocal of equivalent resistance = sum of reciprocals:**
  $$\\dfrac{1}{R_{\\text{eq}}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dfrac{1}{R_3}$$
  (Total resistance < any individual resistance → always SMALLER!)
  
**Special case — 2 resistors in parallel:**
$$R_{\\text{eq}} = \\dfrac{R_1 \\times R_2}{R_1 + R_2}$$

**WHY ARE HOME APPLIANCES CONNECTED IN PARALLEL?**
1. Each appliance gets the **FULL supply voltage** (220 V) — operates at rated power
2. **Independent control** — one appliance can be switched off without affecting others
3. **Overall resistance DECREASES** — more current can be drawn from supply
4. **Safer** — if one appliance fails (fuse blows), others continue working

**Why NOT series for homes?**
- Voltage divided between appliances → each gets less than required → dim bulbs
- If one device fails, entire circuit breaks — ALL devices go off!
- Different devices need different voltages and currents`,
      formulasOrKeyPoints: [
        {
          title: "Series vs Parallel Comparison Table",
          content: `| Feature | Series | Parallel |
|---------|--------|---------|
| Current | Same through all (I₁ = I₂ = I₃) | Divides (I = I₁ + I₂ + I₃) |
| Voltage | Divides (V = V₁ + V₂ + V₃) | Same across all (V₁ = V₂ = V₃) |
| Equivalent R | R_eq = R₁ + R₂ + R₃ (increases) | 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ (decreases) |
| If one fails | All fail (circuit broken) | Others continue working |
| Home use | ❌ No | ✅ Yes |
| Battery cells | To increase EMF, use series | To increase current capacity |

**Worked Example:**
3 resistors: R₁ = 3Ω, R₂ = 6Ω, R₃ = 2Ω

**In Series:** $R_{\\text{eq}} = 3 + 6 + 2 = 11\\text{ Ω}$

**In Parallel:**
$$\\dfrac{1}{R_{\\text{eq}}} = \\dfrac{1}{3} + \\dfrac{1}{6} + \\dfrac{1}{2} = \\dfrac{2+1+3}{6} = \\dfrac{6}{6} = 1$$
$$R_{\\text{eq}} = 1\\text{ Ω}$$`,
          note: "For N equal resistors R in parallel: R_eq = R/N. This shortcut saves time: three 6Ω resistors in parallel = 6/3 = 2Ω. Works ONLY when all values are EQUAL."
        }
      ],
      examinerTraps: [
        {
          trap: "Adding resistances directly when they are in parallel.",
          correction: "In PARALLEL, you add RECIPROCALS: 1/R_eq = 1/R₁ + 1/R₂. The equivalent resistance is always LESS than the smallest individual resistance. Direct addition (R_eq = R₁ + R₂) is the formula for SERIES — the most common Board mistake."
        }
      ]
    },
    {
      id: "electric_power",
      label: "3. Electric Power & Energy",
      heading: "How Much Electricity Does an Appliance Consume?",
      subheading: "Power Formula + Unit of Energy (kWh) + Heating Effect + Fuses",
      explanation: `**ELECTRIC POWER:**
Rate at which electrical energy is consumed or converted.
$$P = \\dfrac{W}{t} = VI = I^2R = \\dfrac{V^2}{R}$$

Where: P = Power (Watts, W), V = Voltage (V), I = Current (A), R = Resistance (Ω)

| Formula | When to use |
|---------|-----------|
| $P = VI$ | When V and I are given |
| $P = I^2 R$ | When I and R are given (useful for calculating HEAT in resistors) |
| $P = V^2/R$ | When V and R are given |

**Unit of Power:** Watt (W) = Joule/second
- 1 kW (kilowatt) = 1000 W

**COMMERCIAL UNIT OF ENERGY — the UNIT (kWh):**
$$1 \\text{ kWh (kilowatt-hour)} = 1000 \\text{ W} \\times 3600 \\text{ s} = 3.6 \\times 10^6 \\text{ J}$$
This is what the electricity meter in your house measures! Each "unit" on your bill = 1 kWh.

**Electricity bill calculation:**
$$\\text{Units consumed} = \\dfrac{\\text{Power (kW)} \\times \\text{Time (hours)}}{1} = P \\times t \\text{ (in kWh)}$$
$$\\text{Bill} = \\text{Units} \\times \\text{Rate per unit (₹)}$$

*Example:* A 1500W AC runs 8 hours/day for 30 days. Units = 1.5 × 8 × 30 = 360 units. At ₹6/unit, bill = ₹2160.

**HEATING EFFECT OF ELECTRIC CURRENT (Joule's Law):**
When current flows through a resistor, electrical energy is converted to heat energy.
$$H = I^2 R t$$
Where H = heat produced (Joules), I = current, R = resistance, t = time

This is called **Joule's Law of Heating.**

**Applications of Heating Effect:**
- **Electric iron, toaster, geyser:** Nichrome wire (high resistivity, high melting point, not oxidised by air)
- **Incandescent bulb:** Tungsten filament (melting point ~3380°C, becomes white-hot at 2500°C)
- **Fuse:** Thin wire of tin-lead alloy (low melting point). Melts and breaks circuit when EXCESS current flows → protects expensive appliances!
- **MCB (Miniature Circuit Breaker):** Modern safety device that trips (switches off) automatically at excess current — reusable unlike a fuse.

**Why is Tungsten used in bulb filaments?**
1. Very high melting point (3380°C) — doesn't melt at 2500°C operating temperature
2. High resistivity → high heat/light at relatively low currents
3. Can be drawn into very thin wires (ductile)
4. Surrounded by inert gas (argon/nitrogen) to prevent oxidation`,
      examinerTraps: [
        {
          trap: "Saying the commercial unit of electrical energy is the Watt.",
          correction: "The Watt (W) is the unit of POWER, not energy. The commercial unit of ENERGY is the kilowatt-hour (kWh), also called 1 UNIT (on electricity bills). Energy in SI unit is Joule (J), but 1 kWh = 3.6 × 10⁶ J is far more practical for household use."
        },
        {
          trap: "Saying a higher wattage bulb glows brighter regardless of the circuit connection.",
          correction: "In PARALLEL (same voltage): Higher wattage bulb draws more current → glows brighter. In SERIES (same current): Higher wattage bulb has LOWER resistance (P=V²/R, more P needs less R) → smaller voltage drop across it → glows DIMMER! The 40W bulb glows brighter than 100W in series."
        }
      ]
    }
  ]
};
