// =========================================================================
// ARETĒ CBSE Class 10 — Official Mathematical & Scientific HOTS Vector Diagrams
// Standard: Vector SVGs with high-contrast, dark/light theme adaptive styling
// Formatted with zero outer-boundary collisions, standard HTML classes, and auto-scaling.
// =========================================================================

export const HOTS_DIAGRAMS: Record<string, string> = {
  // Q1: Dual-State Mixed Circuit (Electricity Ch 11)
  hots_sci_circuit_switch: `<svg viewBox="0 0 520 220" width="100%" height="auto" class="w-full h-auto block select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Main loop wires -->
  <path d="M 60 110 L 60 55 L 150 55" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 60 110 L 60 170 L 450 170 L 450 110" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- 12V Battery -->
  <g transform="translate(60, 110)">
    <line x1="-18" y1="-12" x2="18" y2="-12" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="-10" y1="-4" x2="10" y2="-4" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
    <line x1="-18" y1="4" x2="18" y2="4" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="-10" y1="12" x2="10" y2="12" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
    <text x="-26" y="-8" fill="#f59e0b" font-size="11" font-family="monospace" font-weight="bold">+</text>
    <text x="-26" y="16" fill="#94a3b8" font-size="11" font-family="monospace" font-weight="bold">-</text>
    <text x="24" y="5" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">12 V</text>
  </g>

  <!-- Resistor R1 = 6 Ω -->
  <g transform="translate(150, 55)">
    <path d="M 0 0 L 12 -8 L 24 8 L 36 -8 L 48 8 L 60 -8 L 72 8 L 84 -8 L 94 0" stroke="#f43f5e" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
    <text x="47" y="-14" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold" text-anchor="middle">R₁ = 6 Ω</text>
  </g>

  <!-- Wire to Parallel Junction -->
  <path d="M 244 55 L 290 55" stroke="#38bdf8" stroke-width="2.5"/>
  <circle cx="290" cy="55" r="4" fill="#38bdf8"/>

  <!-- Parallel Branch 1: R2 = 12 Ω -->
  <path d="M 290 55 L 290 35 L 315 35" stroke="#38bdf8" stroke-width="2"/>
  <g transform="translate(315, 35)">
    <path d="M 0 0 L 10 -7 L 20 7 L 30 -7 L 40 7 L 50 -7 L 60 7 L 70 0" stroke="#10b981" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
    <text x="35" y="-12" fill="#10b981" font-size="12" font-family="monospace" font-weight="bold" text-anchor="middle">R₂ = 12 Ω</text>
  </g>
  <path d="M 385 35 L 410 35 L 410 55" stroke="#38bdf8" stroke-width="2"/>

  <!-- Parallel Branch 2: Switch S + R3 = 4 Ω -->
  <path d="M 290 55 L 290 95 L 310 95" stroke="#38bdf8" stroke-width="2"/>
  <!-- Switch S -->
  <g transform="translate(310, 95)">
    <circle cx="4" cy="0" r="3" fill="#f59e0b"/>
    <line x1="4" y1="0" x2="20" y2="-9" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="26" cy="0" r="3" fill="#f59e0b"/>
    <text x="14" y="-14" fill="#f59e0b" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Switch S</text>
  </g>
  <path d="M 336 95 L 350 95" stroke="#38bdf8" stroke-width="2"/>
  <!-- R3 = 4 Ω -->
  <g transform="translate(350, 95)">
    <path d="M 0 0 L 7 -6 L 14 6 L 21 -6 L 28 6 L 35 -6 L 42 6 L 48 0" stroke="#a855f7" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
    <text x="24" y="18" fill="#a855f7" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">R₃ = 4 Ω</text>
  </g>
  <path d="M 398 95 L 410 95 L 410 55" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="410" cy="55" r="4" fill="#38bdf8"/>

  <!-- Wire to Ammeter -->
  <path d="M 410 55 L 450 55 L 450 90" stroke="#38bdf8" stroke-width="2.5"/>
  <!-- Ammeter A -->
  <g transform="translate(450, 105)">
    <circle cx="0" cy="0" r="14" fill="#0284c7" fill-opacity="0.25" stroke="#38bdf8" stroke-width="2"/>
    <text x="0" y="4.5" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="black" text-anchor="middle">A</text>
  </g>
  <path d="M 450 120 L 450 170" stroke="#38bdf8" stroke-width="2.5"/>

  <!-- Current Direction Arrows -->
  <polygon points="105,51 113,55 105,59" fill="#38bdf8"/>
  <text x="109" y="45" fill="#38bdf8" font-size="10" font-family="monospace">I</text>
  <polygon points="255,166 247,170 255,174" fill="#38bdf8"/>

  <!-- Formula Callout -->
  <text x="260" y="202" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Case (a) Open: Req = 18 Ω, I = 0.67 A | Case (b) Closed: Req = 9 Ω, I = 1.33 A</text>
</svg>`,

  // Q2: Chemical Decomposition Chain (Science Ch 1 / Ch 2)
  hots_sci_unknown_chemical_chain: `<svg viewBox="0 0 540 200" width="100%" height="auto" class="w-full h-auto block select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Step 1: Green Vitriol -->
  <g transform="translate(15, 25)">
    <rect width="125" height="60" rx="10" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-width="2"/>
    <text x="62" y="22" fill="#10b981" font-size="11" font-family="monospace" font-weight="black" text-anchor="middle">SUBSTANCE 'X'</text>
    <text x="62" y="38" fill="currentColor" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">FeSO₄·7H₂O</text>
    <text x="62" y="51" fill="#10b981" font-size="9" text-anchor="middle">(Pale Green Salt)</text>
  </g>
  <!-- Arrow 1 -->
  <path d="M 148 55 L 195 55" stroke="#f59e0b" stroke-width="2"/>
  <polygon points="193,51 201,55 193,59" fill="#f59e0b"/>
  <text x="173" y="46" fill="#f59e0b" font-size="9" font-family="monospace" font-weight="bold" text-anchor="middle">Δ (Gentle)</text>
  <text x="173" y="70" fill="#94a3b8" font-size="8.5" text-anchor="middle">-7H₂O</text>

  <!-- Step 2: Anhydrous FeSO4 -->
  <g transform="translate(205, 25)">
    <rect width="120" height="60" rx="10" fill="#94a3b8" fill-opacity="0.15" stroke="#cbd5e1" stroke-width="2"/>
    <text x="60" y="22" fill="#f8fafc" font-size="11" font-family="monospace" font-weight="black" text-anchor="middle">SUBSTANCE 'Y'</text>
    <text x="60" y="38" fill="currentColor" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">FeSO₄ (Anhyd.)</text>
    <text x="60" y="51" fill="#cbd5e1" font-size="9" text-anchor="middle">(Dirty White)</text>
  </g>
  <!-- Arrow 2 -->
  <path d="M 333 55 L 380 55" stroke="#f43f5e" stroke-width="2"/>
  <polygon points="378,51 386,55 378,59" fill="#f43f5e"/>
  <text x="358" y="46" fill="#f43f5e" font-size="9" font-family="monospace" font-weight="bold" text-anchor="middle">Δ (Strong)</text>

  <!-- Decomposition Products -->
  <g transform="translate(390, 10)">
    <rect width="135" height="34" rx="7" fill="#b91c1c" fill-opacity="0.25" stroke="#ef4444" stroke-width="1.5"/>
    <text x="67" y="15" fill="#f87171" font-size="9" font-family="monospace" font-weight="black" text-anchor="middle">SOLID 'Z': Fe₂O₃</text>
    <text x="67" y="28" fill="currentColor" font-size="8.5" text-anchor="middle">Reddish-Brown Residue</text>
  </g>
  <g transform="translate(390, 52)">
    <rect width="135" height="34" rx="7" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="67" y="15" fill="#fbbf24" font-size="9" font-family="monospace" font-weight="black" text-anchor="middle">GAS 'W': SO₂ ↑</text>
    <text x="67" y="28" fill="currentColor" font-size="8" text-anchor="middle">Burning sulphur suffocating</text>
  </g>
  <g transform="translate(390, 94)">
    <rect width="135" height="34" rx="7" fill="#8b5cf6" fill-opacity="0.2" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="67" y="15" fill="#c4b5fd" font-size="9" font-family="monospace" font-weight="black" text-anchor="middle">GAS 'V': SO₃ ↑</text>
    <text x="67" y="28" fill="currentColor" font-size="8" text-anchor="middle">Acidic Sulphur Trioxide</text>
  </g>
  
  <text x="270" y="172" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">2FeSO₄(s) ──Δ──&gt; Fe₂O₃(s) + SO₂(g) + SO₃(g) [Thermal Decomposition]</text>
</svg>`,

  // Q3: Convex Lens Displacement (Science Ch 9 Light)
  hots_sci_optics_lens_displacement: `<svg viewBox="0 0 540 220" width="100%" height="auto" class="w-full h-auto block select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Optical Axis -->
  <line x1="20" y1="110" x2="520" y2="110" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5" stroke-dasharray="4 4"/>
  
  <!-- Convex Lens -->
  <ellipse cx="220" cy="110" rx="7" ry="65" fill="#38bdf8" fill-opacity="0.2" stroke="#38bdf8" stroke-width="2"/>
  <line x1="220" y1="40" x2="220" y2="180" stroke="#38bdf8" stroke-width="1"/>
  <text x="220" y="32" fill="#38bdf8" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Convex Lens (f = +15 cm)</text>

  <!-- Focal Points -->
  <circle cx="120" cy="110" r="3.5" fill="#f59e0b"/>
  <text x="120" y="125" fill="#f59e0b" font-size="10" font-family="monospace" text-anchor="middle">F₁ (-15)</text>
  <circle cx="320" cy="110" r="3.5" fill="#f59e0b"/>
  <text x="320" y="125" fill="#f59e0b" font-size="10" font-family="monospace" text-anchor="middle">F₂ (+15)</text>

  <!-- Object at u1 = -20 cm -->
  <g transform="translate(87, 110)">
    <line x1="0" y1="0" x2="0" y2="-36" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>
    <polygon points="-4,-34 0,-44 4,-34" fill="#f43f5e"/>
    <text x="0" y="18" fill="#f43f5e" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Object (u₁ = -20)</text>
  </g>

  <!-- Screen at v1 = +60 cm with Inverted Image m = -3 -->
  <line x1="450" y1="20" x2="450" y2="195" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
  <text x="450" y="16" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Screen (v₁ = +60 cm)</text>
  
  <g transform="translate(450, 110)">
    <line x1="0" y1="0" x2="0" y2="78" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
    <polygon points="-4,74 0,84 4,74" fill="#10b981"/>
    <text x="-12" y="50" fill="#10b981" font-size="11" font-family="monospace" font-weight="bold" text-anchor="end">Image (m = -3)</text>
  </g>

  <!-- Ray Tracing -->
  <path d="M 87 66 L 220 66 L 450 194" stroke="#38bdf8" stroke-width="1.5" stroke-opacity="0.85"/>
  <path d="M 87 66 L 220 110 L 450 194" stroke="#f59e0b" stroke-width="1.5" stroke-opacity="0.85"/>
  
  <text x="270" y="210" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Lens Shift Rule: Shifting lens +10 cm ➔ u₂ = -10 cm (&lt; f) ➔ Forms Virtual Erect Image (m = +3)</text>
</svg>`,

  // Q4: Circle Supplementary Angles (Math Ch 10 Circles)
  hots_math_circle_supplementary: `<svg viewBox="0 0 460 260" width="100%" height="auto" class="w-full h-auto block select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Circumscribing Quadrilateral ABCD -->
  <polygon points="120,35 340,55 375,205 85,185" stroke="#f59e0b" stroke-width="2" fill="none"/>
  <text x="110" y="30" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">A</text>
  <text x="350" y="52" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">B</text>
  <text x="388" y="215" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">C</text>
  <text x="70" y="195" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">D</text>

  <!-- Inscribed Circle -->
  <circle cx="230" cy="120" r="68" stroke="#38bdf8" stroke-width="2.5" fill="#38bdf8" fill-opacity="0.06"/>
  <circle cx="230" cy="120" r="4" fill="#38bdf8"/>
  <text x="238" y="115" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="bold">O</text>

  <!-- Contact Points P, Q, R, S -->
  <circle cx="220" cy="44" r="3.5" fill="#f43f5e"/><text x="220" y="34" fill="#f43f5e" font-size="11" font-weight="bold" text-anchor="middle">P</text>
  <circle cx="355" cy="130" r="3.5" fill="#f43f5e"/><text x="368" y="134" fill="#f43f5e" font-size="11" font-weight="bold">Q</text>
  <circle cx="230" cy="188" r="3.5" fill="#f43f5e"/><text x="230" y="202" fill="#f43f5e" font-size="11" font-weight="bold" text-anchor="middle">R</text>
  <circle cx="103" cy="110" r="3.5" fill="#f43f5e"/><text x="90" y="112" fill="#f43f5e" font-size="11" font-weight="bold">S</text>

  <!-- Connect Center O to Vertices -->
  <line x1="230" y1="120" x2="120" y2="35" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="230" y1="120" x2="340" y2="55" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="230" y1="120" x2="375" y2="205" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="230" y1="120" x2="85" y2="185" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>

  <!-- Angles Result -->
  <text x="230" y="242" fill="#10b981" font-size="12" font-family="monospace" font-weight="black" text-anchor="middle">∠AOB + ∠COD = 180° (Opposite sides subtend supplementary central angles)</text>
</svg>`,

  // Q5: Inradius of Right-Angled Triangle (Math Ch 10 Circles)
  hots_math_incircle_inradius_formula: `<svg viewBox="0 0 460 240" width="100%" height="auto" class="w-full h-auto block select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Right Triangle ABC right angled at B -->
  <polygon points="75,35 75,185 365,185" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
  <!-- Right Angle Symbol at B -->
  <rect x="75" y="171" width="14" height="14" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="56" y="38" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">A</text>
  <text x="56" y="196" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">B (90°)</text>
  <text x="375" y="196" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">C</text>

  <!-- Side Labels -->
  <text x="42" y="115" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold">c</text>
  <text x="215" y="206" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold">a</text>
  <text x="230" y="100" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold">Hypotenuse b</text>

  <!-- Incircle with radius r = 38px -->
  <circle cx="113" cy="147" r="38" stroke="#38bdf8" stroke-width="2.5" fill="#38bdf8" fill-opacity="0.1"/>
  <circle cx="113" cy="147" r="3.5" fill="#38bdf8"/>
  <text x="122" y="142" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="bold">O</text>

  <!-- Tangent contacts P, Q -->
  <line x1="113" y1="147" x2="75" y2="147" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="91" y="142" fill="#38bdf8" font-size="10" font-family="monospace">r</text>
  <text x="63" y="151" fill="#38bdf8" font-size="10" font-weight="bold">P</text>

  <line x1="113" y1="147" x2="113" y2="185" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="118" y="170" fill="#38bdf8" font-size="10" font-family="monospace">r</text>
  <text x="110" y="200" fill="#38bdf8" font-size="10" font-weight="bold">Q</text>

  <!-- Formula Callout -->
  <g transform="translate(250, 45)">
    <rect width="180" height="52" rx="8" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-width="1.5"/>
    <text x="90" y="22" fill="#10b981" font-size="13" font-family="monospace" font-weight="black" text-anchor="middle">r = (a + c - b) / 2</text>
    <text x="90" y="40" fill="#cbd5e1" font-size="9" font-family="monospace" text-anchor="middle">Inradius = (Base + Perp - Hyp) / 2</text>
  </g>
</svg>`,

  // Q6: Airplane Flight Heights & Distances (Math Ch 9)
  hots_math_trig_airplane_speed: `<svg viewBox="0 0 540 240" width="100%" height="auto" class="w-full h-auto block select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Ground Line -->
  <line x1="40" y1="180" x2="500" y2="180" stroke="currentColor" stroke-opacity="0.4" stroke-width="2"/>
  <text x="40" y="198" fill="currentColor" font-size="11" font-family="monospace" font-weight="bold">A (Observer)</text>

  <!-- Flight Path -->
  <line x1="150" y1="50" x2="450" y2="50" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 5"/>
  
  <!-- Plane Position P (t=0) -->
  <circle cx="190" cy="50" r="5" fill="#38bdf8"/>
  <text x="190" y="38" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Plane P (60°)</text>
  <line x1="190" y1="50" x2="190" y2="180" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="195" y="125" fill="#38bdf8" font-size="10" font-family="monospace">h = 3600√3 m</text>
  <text x="190" y="196" fill="currentColor" font-size="11" font-family="monospace" text-anchor="middle">M</text>

  <!-- Plane Position Q (t=30s) -->
  <circle cx="410" cy="50" r="5" fill="#10b981"/>
  <text x="410" y="38" fill="#10b981" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Plane Q (30°)</text>
  <line x1="410" y1="50" x2="410" y2="180" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="410" y="196" fill="currentColor" font-size="11" font-family="monospace" text-anchor="middle">N</text>

  <!-- Line of sights -->
  <line x1="40" y1="180" x2="190" y2="50" stroke="#38bdf8" stroke-width="2"/>
  <line x1="40" y1="180" x2="410" y2="50" stroke="#10b981" stroke-width="2"/>

  <!-- Angle labels -->
  <text x="90" y="165" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="bold">60°</text>
  <text x="125" y="175" fill="#10b981" font-size="11" font-family="monospace" font-weight="bold">30°</text>

  <!-- Distance and Speed Result -->
  <text x="270" y="224" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold" text-anchor="middle">MN = 7200 m (in 30 s) ➔ Speed = 240 m/s = 864 km/h</text>
</svg>`,

  // Q16: Resistors in Series vs Parallel Bulb Glow (Science Ch 11)
  hots_sci_ch11_bulb_glow_series_parallel: `<svg viewBox="0 0 540 210" width="100%" height="auto" class="w-full h-auto block select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Left Half: Series Circuit -->
  <g transform="translate(20, 20)">
    <rect width="240" height="155" rx="10" fill="currentColor" fill-opacity="0.03" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="120" y="20" fill="#f59e0b" font-size="11" font-family="monospace" font-weight="black" text-anchor="middle">SERIES (I = Constant)</text>
    
    <!-- Bulb 1: 25W (1936 Ω) BRIGHTER -->
    <circle cx="70" cy="65" r="14" fill="#fbbf24" fill-opacity="0.35" stroke="#f59e0b" stroke-width="2"/>
    <text x="70" y="69" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">25W</text>
    <text x="70" y="44" fill="#fbbf24" font-size="9" text-anchor="middle">⚡ 16 W (Bright!)</text>

    <!-- Bulb 2: 100W (484 Ω) DIMMER -->
    <circle cx="160" cy="65" r="14" fill="#64748b" fill-opacity="0.2" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="160" y="69" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">100W</text>
    <text x="160" y="44" fill="#94a3b8" font-size="9" text-anchor="middle">4 W (Dim)</text>
    
    <text x="120" y="115" fill="#f59e0b" font-size="10" font-family="monospace" text-anchor="middle">P = I²R ➔ Higher R glows brighter</text>
    <text x="120" y="135" fill="#f59e0b" font-size="9.5" font-weight="bold" text-anchor="middle">Result: 25W Bulb is Brighter</text>
  </g>

  <!-- Right Half: Parallel Circuit -->
  <g transform="translate(280, 20)">
    <rect width="240" height="155" rx="10" fill="currentColor" fill-opacity="0.03" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="120" y="20" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="black" text-anchor="middle">PARALLEL (V = 220V Constant)</text>
    
    <!-- Bulb 1: 25W (25W) -->
    <circle cx="70" cy="65" r="12" fill="#64748b" fill-opacity="0.2" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="70" y="69" fill="#94a3b8" font-size="9" text-anchor="middle">25W</text>
    <text x="70" y="44" fill="#94a3b8" font-size="9" text-anchor="middle">25 W (Normal)</text>

    <!-- Bulb 2: 100W (100W) BRIGHTER -->
    <circle cx="160" cy="65" r="16" fill="#38bdf8" fill-opacity="0.35" stroke="#38bdf8" stroke-width="2"/>
    <text x="160" y="69" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">100W</text>
    <text x="160" y="44" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">⚡ 100 W (Bright!)</text>

    <text x="120" y="115" fill="#38bdf8" font-size="10" font-family="monospace" text-anchor="middle">P = V²/R ➔ Lower R glows brighter</text>
    <text x="120" y="135" fill="#38bdf8" font-size="9.5" font-weight="bold" text-anchor="middle">Result: 100W Bulb is Brighter</text>
  </g>
  
  <text x="270" y="198" fill="currentColor" opacity="0.8" font-size="10" font-family="monospace" text-anchor="middle">Rated R = V² / P (25W ➔ 1936 Ω | 100W ➔ 484 Ω)</text>
</svg>`,

  // Q17: Solenoid Magnetic Field & Fleming's Left Hand (Science Ch 12)
  hots_sci_ch12_solenoid_fleming_left_hand: `<svg viewBox="0 0 540 210" width="100%" height="auto" class="w-full h-auto block select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Left Side: Solenoid -->
  <g transform="translate(15, 15)">
    <rect width="245" height="175" rx="10" fill="currentColor" fill-opacity="0.03" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="122" y="20" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="black" text-anchor="middle">Current-Carrying Solenoid</text>
    
    <!-- Soft iron core -->
    <rect x="42" y="48" width="160" height="28" rx="5" fill="#64748b" fill-opacity="0.25" stroke="#94a3b8" stroke-width="1"/>
    <text x="122" y="65" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">Soft Iron Core</text>
    
    <!-- Helical Coil Turns -->
    <path d="M 55 38 Q 65 20 75 38 L 75 85 Q 65 105 55 85" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
    <path d="M 85 38 Q 95 20 105 38 L 105 85 Q 95 105 85 85" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
    <path d="M 115 38 Q 125 20 135 38 L 135 85 Q 125 105 115 85" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
    <path d="M 145 38 Q 155 20 165 38 L 165 85 Q 155 105 145 85" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
    <path d="M 175 38 Q 185 20 195 38 L 195 85 Q 185 105 175 85" stroke="#f59e0b" stroke-width="2.5" fill="none"/>

    <!-- Poles -->
    <text x="25" y="66" fill="#ef4444" font-size="13" font-family="monospace" font-weight="black">N</text>
    <text x="215" y="66" fill="#3b82f6" font-size="13" font-family="monospace" font-weight="black">S</text>
    
    <text x="122" y="130" fill="#38bdf8" font-size="9" text-anchor="middle">Uniform, parallel field inside</text>
    <text x="122" y="148" fill="#f59e0b" font-size="9" text-anchor="middle">B ∝ n · I (Turns &amp; Current)</text>
  </g>

  <!-- Right Side: Fleming's Left Hand Deflection -->
  <g transform="translate(280, 15)">
    <rect width="245" height="175" rx="10" fill="currentColor" fill-opacity="0.03" stroke="#f43f5e" stroke-width="1.5"/>
    <text x="122" y="20" fill="#f43f5e" font-size="11" font-family="monospace" font-weight="black" text-anchor="middle">Fleming's Left-Hand Rule</text>
    
    <!-- Magnetic Field into page (X symbols) -->
    <g fill="#94a3b8" font-size="11" font-family="monospace" opacity="0.6">
      <text x="50" y="55">⊗</text><text x="90" y="55">⊗</text><text x="130" y="55">⊗</text><text x="170" y="55">⊗</text>
      <text x="50" y="85">⊗</text><text x="90" y="85">⊗</text><text x="130" y="85">⊗</text><text x="170" y="85">⊗</text>
    </g>
    <text x="122" y="38" fill="#94a3b8" font-size="8.5" text-anchor="middle">B (Field into plane ⊗)</text>

    <!-- Beams -->
    <!-- Alpha Particle (Positive) -->
    <path d="M 30 65 L 100 65 Q 130 65 145 45" stroke="#10b981" stroke-width="2.5" fill="none"/>
    <polygon points="142,43 148,40 148,48" fill="#10b981"/>
    <text x="156" y="46" fill="#10b981" font-size="9" font-weight="bold">α Deflects UP ↑</text>

    <!-- Electron Beam (Negative) -->
    <path d="M 30 85 L 100 85 Q 130 85 145 105" stroke="#f43f5e" stroke-width="2.5" fill="none"/>
    <polygon points="142,107 148,110 148,102" fill="#f43f5e"/>
    <text x="156" y="108" fill="#f43f5e" font-size="9" font-weight="bold">e⁻ Deflects DOWN ↓</text>

    <text x="122" y="150" fill="currentColor" opacity="0.8" font-size="9" text-anchor="middle">Force F = I (L × B)</text>
  </g>
</svg>`,

  // Q23: Altitude Segment AD ⊥ BC (Math Ch 6 Triangles)
  hots_math_ch6_perpendicular_ad_bc: `<svg viewBox="0 0 460 220" width="100%" height="auto" class="w-full h-auto block select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Triangle ABC -->
  <polygon points="190,30 50,155 370,155" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
  <text x="190" y="22" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold" text-anchor="middle">A</text>
  <text x="35" y="162" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">B</text>
  <text x="382" y="162" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">C</text>

  <!-- Altitude AD ⊥ BC -->
  <line x1="190" y1="30" x2="190" y2="155" stroke="#38bdf8" stroke-width="2"/>
  <text x="190" y="172" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="bold" text-anchor="middle">D</text>
  <!-- Right Angle Symbol -->
  <rect x="178" y="143" width="12" height="12" fill="none" stroke="#38bdf8" stroke-width="1.5"/>

  <!-- Segments BD = 3x, CD = x -->
  <line x1="50" y1="182" x2="190" y2="182" stroke="#f43f5e" stroke-width="2"/>
  <text x="120" y="196" fill="#f43f5e" font-size="10.5" font-family="monospace" font-weight="bold" text-anchor="middle">BD = 3x = ¾ BC</text>

  <line x1="190" y1="182" x2="370" y2="182" stroke="#10b981" stroke-width="2"/>
  <text x="280" y="196" fill="#10b981" font-size="10.5" font-family="monospace" font-weight="bold" text-anchor="middle">CD = x = ¼ BC</text>

  <text x="230" y="90" fill="#38bdf8" font-size="10" font-family="monospace">AD ⊥ BC</text>
  <text x="230" y="214" fill="#10b981" font-size="11" font-family="monospace" font-weight="black" text-anchor="middle">2AB² = 2AC² + BC² [Hence Proved]</text>
</svg>`,

  // Q24: Circumcentre Coordinates & Circle (Math Ch 7 Coordinate Geometry)
  hots_math_ch7_circumcentre_equidistant: `<svg viewBox="0 0 460 220" width="100%" height="auto" class="w-full h-auto block select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(60, 10)">
    <!-- Circumcircle -->
    <circle cx="160" cy="100" r="70" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 3" fill="#38bdf8" fill-opacity="0.06"/>
    
    <!-- Triangle ABC -->
    <polygon points="230,35 230,165 90,165" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
    <!-- Right angle B -->
    <rect x="218" y="153" width="12" height="12" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="240" y="38" fill="#f59e0b" font-size="12" font-family="monospace" font-weight="bold">A(8, 6)</text>
    <text x="240" y="175" fill="#f59e0b" font-size="12" font-family="monospace" font-weight="bold">B(8, -2)</text>
    <text x="50" y="175" fill="#f59e0b" font-size="12" font-family="monospace" font-weight="bold">C(2, -2)</text>

    <!-- Circumcentre O(5, 2) on Hypotenuse AC -->
    <circle cx="160" cy="100" r="4.5" fill="#ef4444"/>
    <text x="110" y="96" fill="#ef4444" font-size="11" font-family="monospace" font-weight="black">O(5, 2)</text>
    
    <!-- Radius R = 5 -->
    <line x1="160" y1="100" x2="230" y2="35" stroke="#ef4444" stroke-width="1.5"/>
    <text x="202" y="70" fill="#ef4444" font-size="10" font-family="monospace">R = 5</text>
  </g>
  <text x="230" y="208" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Right Δ Circumcentre = Midpoint of Hypotenuse AC = ((8+2)/2, (6-2)/2) = (5, 2)</text>
</svg>`,

  // Q26: Cloud Reflection in Lake (Math Ch 9 Heights & Distances)
  hots_math_ch9_cloud_reflection_lake: `<svg viewBox="0 0 500 250" width="100%" height="auto" class="w-full h-auto block select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Water Surface Line -->
  <line x1="30" y1="125" x2="470" y2="125" stroke="#0ea5e9" stroke-width="2.5"/>
  <text x="40" y="120" fill="#0ea5e9" font-size="11" font-family="monospace" font-weight="bold">Water Surface of Lake</text>

  <!-- Observation Point P at height h -->
  <line x1="110" y1="125" x2="110" y2="80" stroke="#f59e0b" stroke-width="2.5"/>
  <circle cx="110" cy="80" r="4" fill="#f59e0b"/>
  <text x="75" y="105" fill="#f59e0b" font-size="11" font-family="monospace" font-weight="bold">h (P)</text>

  <!-- Horizontal Sight Line from P -->
  <line x1="110" y1="80" x2="370" y2="80" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="4 3"/>

  <!-- Cloud C at height H above lake -->
  <circle cx="370" cy="30" r="5" fill="#38bdf8"/>
  <text x="382" y="34" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="bold">Cloud C (Height H)</text>
  <line x1="370" y1="30" x2="370" y2="125" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>

  <!-- Reflected Cloud Image C' at depth H below lake -->
  <circle cx="370" cy="220" r="5" fill="#a855f7"/>
  <text x="382" y="224" fill="#a855f7" font-size="11" font-family="monospace" font-weight="bold">Reflection C' (Depth H)</text>
  <line x1="370" y1="125" x2="370" y2="220" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="3 3"/>

  <!-- Sight Lines -->
  <!-- Elevation α -->
  <line x1="110" y1="80" x2="370" y2="30" stroke="#38bdf8" stroke-width="2"/>
  <text x="170" y="68" fill="#38bdf8" font-size="10.5" font-family="monospace" font-weight="bold">Elevation α</text>

  <!-- Depression β -->
  <line x1="110" y1="80" x2="370" y2="220" stroke="#a855f7" stroke-width="2"/>
  <text x="170" y="105" fill="#a855f7" font-size="10.5" font-family="monospace" font-weight="bold">Depression β</text>
  
  <text x="250" y="242" fill="#10b981" font-size="11" font-family="monospace" font-weight="black" text-anchor="middle">H = h · (tan β + tan α) / (tan β - tan α) [Standard CBSE 5M Proof]</text>
</svg>`,

  // Q27: Tangents from External Point ∠PTQ = 2∠OPQ (Math Ch 10 Circles)
  hots_math_ch10_tangent_angle_ptq: `<svg viewBox="0 0 460 210" width="100%" height="auto" class="w-full h-auto block select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Circle with center O -->
  <circle cx="270" cy="100" r="58" stroke="#38bdf8" stroke-width="2.5" fill="#38bdf8" fill-opacity="0.05"/>
  <circle cx="270" cy="100" r="3.5" fill="#38bdf8"/>
  <text x="280" y="105" fill="#38bdf8" font-size="13" font-family="monospace" font-weight="bold">O</text>

  <!-- External Point T -->
  <circle cx="80" cy="100" r="4.5" fill="#f59e0b"/>
  <text x="60" y="105" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">T</text>

  <!-- Contact Points P and Q -->
  <circle cx="230" cy="58" r="3.5" fill="#f43f5e"/>
  <text x="230" y="46" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold">P</text>
  <circle cx="230" cy="142" r="3.5" fill="#f43f5e"/>
  <text x="230" y="160" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold">Q</text>

  <!-- Tangents TP and TQ -->
  <line x1="80" y1="100" x2="230" y2="58" stroke="#f59e0b" stroke-width="2"/>
  <line x1="80" y1="100" x2="230" y2="142" stroke="#f59e0b" stroke-width="2"/>

  <!-- Chord PQ -->
  <line x1="230" y1="58" x2="230" y2="142" stroke="#10b981" stroke-width="2"/>

  <!-- Radii OP and OQ -->
  <line x1="270" y1="100" x2="230" y2="58" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="270" y1="100" x2="230" y2="142" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>

  <!-- Target relation -->
  <text x="230" y="196" fill="#10b981" font-size="12" font-family="monospace" font-weight="black" text-anchor="middle">∠PTQ = 2 ∠OPQ [Hence Proved]</text>
</svg>`,

  // Q28: Conical Cavity in Cylinder (Math Ch 12 Surface Areas)
  hots_math_ch12_cylinder_cone_cavity: `<svg viewBox="0 0 440 220" width="100%" height="auto" class="w-full h-auto block select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Cylinder Body -->
  <g transform="translate(140, 20)">
    <!-- Top Ellipse -->
    <ellipse cx="80" cy="20" rx="55" ry="14" stroke="#38bdf8" stroke-width="2" fill="#38bdf8" fill-opacity="0.1"/>
    <!-- Cylinder sides -->
    <line x1="25" y1="20" x2="25" y2="140" stroke="#38bdf8" stroke-width="2"/>
    <line x1="135" y1="20" x2="135" y2="140" stroke="#38bdf8" stroke-width="2"/>
    <!-- Bottom Ellipse -->
    <ellipse cx="80" cy="140" rx="55" ry="14" stroke="#38bdf8" stroke-width="2" fill="#38bdf8" fill-opacity="0.2"/>

    <!-- Inverted Conical Cavity -->
    <line x1="25" y1="20" x2="80" y2="140" stroke="#f43f5e" stroke-width="2.5"/>
    <line x1="135" y1="20" x2="80" y2="140" stroke="#f43f5e" stroke-width="2.5"/>
    <text x="80" y="80" fill="#f43f5e" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Slant l = 2.5 cm</text>

    <!-- Dimension labels -->
    <text x="-25" y="80" fill="#f59e0b" font-size="11" font-family="monospace">h = 2.4 cm</text>
    <text x="80" y="6" fill="#f59e0b" font-size="10.5" font-family="monospace" text-anchor="middle">d = 1.4 cm (r = 0.7 cm)</text>
  </g>
  <text x="220" y="198" fill="#10b981" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Total Remaining Surface Area = CSA(cyl) + CSA(cone) + Base = 17.6 cm² ≈ 18 cm²</text>
</svg>`,

  // Q30: Atmospheric Refraction 4-min day extension (Science Ch 10 Human Eye)
  hots_sci_ch10_atmospheric_refraction_sunrise: `<svg viewBox="0 0 520 210" width="100%" height="auto" class="w-full h-auto block select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Earth Surface Arc -->
  <path d="M 40 195 A 220 220 0 0 1 260 195" stroke="#10b981" stroke-width="3" fill="#10b981" fill-opacity="0.15"/>
  <!-- Atmosphere layers -->
  <path d="M 20 175 A 260 260 0 0 1 280 175" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <path d="M 5 155 A 300 300 0 0 1 300 155" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="150" y="180" fill="#10b981" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Earth</text>

  <!-- Observer -->
  <circle cx="150" cy="130" r="4" fill="#f59e0b"/>
  <text x="150" y="122" fill="#f59e0b" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Observer</text>

  <!-- Horizon Line -->
  <line x1="70" y1="130" x2="470" y2="130" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="450" y="122" fill="currentColor" opacity="0.6" font-size="10" font-family="monospace">Horizon</text>

  <!-- Apparent Sun (Above Horizon) -->
  <circle cx="420" cy="95" r="15" fill="#f59e0b" fill-opacity="0.35" stroke="#f59e0b" stroke-width="2"/>
  <text x="420" y="72" fill="#f59e0b" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Apparent Sun</text>
  <text x="420" y="120" fill="#f59e0b" font-size="8.5" text-anchor="middle">(2 min before sunrise)</text>

  <!-- Actual Sun (Below Horizon) -->
  <circle cx="420" cy="170" r="15" fill="#ef4444" fill-opacity="0.35" stroke="#ef4444" stroke-width="2"/>
  <text x="420" y="196" fill="#ef4444" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Actual Sun (Below)</text>

  <!-- Curved Ray bending towards normal -->
  <path d="M 405 170 Q 270 160 150 130" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
  <line x1="150" y1="130" x2="420" y2="95" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
</svg>`,

  // Q33: Athletic Track Composite Geometry (Math Ch 11)
  hots_math_ch11_circular_race_track_area: `<svg viewBox="0 0 520 210" width="100%" height="auto" class="w-full h-auto block select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(40, 15)">
    <!-- Outer Track -->
    <path d="M 100 10 L 280 10 A 75 75 0 0 1 280 160 L 100 160 A 75 75 0 0 1 100 10 Z" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="2"/>

    <!-- Inner Field -->
    <path d="M 100 30 L 280 30 A 55 55 0 0 1 280 140 L 100 140 A 55 55 0 0 1 100 30 Z" fill="#10b981" fill-opacity="0.22" stroke="#10b981" stroke-width="2"/>

    <!-- Track Width Label -->
    <text x="190" y="22" fill="#f59e0b" font-size="9.5" font-family="monospace" text-anchor="middle">Track Width w = 10 m</text>
    <!-- Straight Length -->
    <text x="190" y="80" fill="#10b981" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Length = 106 m</text>
    <text x="190" y="96" fill="#10b981" font-size="9.5" font-family="monospace" text-anchor="middle">Inner width = 60 m (r = 30 m)</text>
  </g>
  <text x="260" y="196" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="black" text-anchor="middle">Track Area = 4,320 m² | Inner Perimeter = 400.57 m</text>
</svg>`,

  // Q35: Trapezium Diagonals and PO = OQ (Math Ch 6 Triangles)
  hots_math_ch6_trapezium_diagonals_po_oq: `<svg viewBox="0 0 460 210" width="100%" height="auto" class="w-full h-auto block select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Trapezium ABCD with AB || DC -->
  <polygon points="120,35 340,35 385,160 75,160" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
  <text x="110" y="30" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">A</text>
  <text x="345" y="30" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">B</text>
  <text x="395" y="170" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">C</text>
  <text x="60" y="170" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">D</text>

  <!-- Diagonals AC and BD intersecting at O -->
  <line x1="120" y1="35" x2="385" y2="160" stroke="#38bdf8" stroke-width="1.5"/>
  <line x1="340" y1="35" x2="75" y2="160" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- Intersection O -->
  <circle cx="230" cy="85" r="4" fill="#38bdf8"/>
  <text x="238" y="82" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="bold">O</text>

  <!-- Line POQ parallel to AB through O -->
  <line x1="102" y1="85" x2="358" y2="85" stroke="#f43f5e" stroke-width="2.5"/>
  <circle cx="102" cy="85" r="3.5" fill="#f43f5e"/>
  <text x="88" y="90" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold">P</text>
  <circle cx="358" cy="85" r="3.5" fill="#f43f5e"/>
  <text x="368" y="90" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold">Q</text>

  <!-- Conclusion -->
  <text x="230" y="196" fill="#10b981" font-size="11.5" font-family="monospace" font-weight="black" text-anchor="middle">PO = OQ and 1/PO = 1/AB + 1/CD [Proved by Similar Δs / BPT]</text>
</svg>`
};
