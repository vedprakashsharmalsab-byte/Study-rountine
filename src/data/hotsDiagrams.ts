// =========================================================================
// ARETĒ CBSE Class 10 — Official Mathematical & Scientific HOTS Vector Diagrams
// Standard: Vector SVGs with high-contrast, dark/light theme adaptive styling
// =========================================================================

export const HOTS_DIAGRAMS: Record<string, string> = {
  // Q1: Dual-State Mixed Circuit (Electricity Ch 11)
  hots_sci_circuit_switch: `<svg viewBox="0 0 540 260" className="w-full max-w-[500px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="500" height="220" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <!-- Main loop wires -->
  <path d="M 60 130 L 60 70 L 160 70" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 60 130 L 60 190 L 460 190 L 460 130" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
  
  <!-- 12V Battery -->
  <g transform="translate(60, 130)">
    <line x1="-18" y1="-12" x2="18" y2="-12" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="-10" y1="-4" x2="10" y2="-4" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
    <line x1="-18" y1="4" x2="18" y2="4" stroke="#f59e0b" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="-10" y1="12" x2="10" y2="12" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
    <text x="-26" y="-8" fill="#f59e0b" font-size="11" font-family="monospace" font-weight="bold">+</text>
    <text x="-26" y="16" fill="#94a3b8" font-size="11" font-family="monospace" font-weight="bold">-</text>
    <text x="26" y="5" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">12 V</text>
  </g>

  <!-- Resistor R1 = 6 Ω -->
  <g transform="translate(160, 70)">
    <path d="M 0 0 L 15 -8 L 30 8 L 45 -8 L 60 8 L 75 -8 L 90 8 L 100 0" stroke="#f43f5e" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
    <text x="50" y="-14" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold" text-anchor="middle">R₁ = 6 Ω</text>
  </g>

  <!-- Wire to Parallel Junction -->
  <path d="M 260 70 L 310 70" stroke="#38bdf8" stroke-width="2.5"/>
  <circle cx="310" cy="70" r="4.5" fill="#38bdf8"/>

  <!-- Parallel Branch 1: R2 = 12 Ω -->
  <path d="M 310 70 L 310 50 L 330 50" stroke="#38bdf8" stroke-width="2"/>
  <g transform="translate(330, 50)">
    <path d="M 0 0 L 12 -7 L 24 7 L 36 -7 L 48 7 L 60 -7 L 72 7 L 80 0" stroke="#10b981" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
    <text x="40" y="-12" fill="#10b981" font-size="12" font-family="monospace" font-weight="bold" text-anchor="middle">R₂ = 12 Ω</text>
  </g>
  <path d="M 410 50 L 430 50 L 430 70" stroke="#38bdf8" stroke-width="2"/>

  <!-- Parallel Branch 2: Switch S + R3 = 4 Ω -->
  <path d="M 310 70 L 310 110 L 330 110" stroke="#38bdf8" stroke-width="2"/>
  <!-- Switch S -->
  <g transform="translate(330, 110)">
    <circle cx="5" cy="0" r="3.5" fill="#f59e0b"/>
    <line x1="5" y1="0" x2="22" y2="-10" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="28" cy="0" r="3.5" fill="#f59e0b"/>
    <text x="16" y="-16" fill="#f59e0b" font-size="11" font-family="monospace" font-weight="bold">Switch S</text>
  </g>
  <path d="M 358 110 L 370 110" stroke="#38bdf8" stroke-width="2"/>
  <!-- R3 = 4 Ω -->
  <g transform="translate(370, 110)">
    <path d="M 0 0 L 8 -6 L 16 6 L 24 -6 L 32 6 L 40 -6 L 48 6 L 54 0" stroke="#a855f7" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
    <text x="27" y="18" fill="#a855f7" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">R₃ = 4 Ω</text>
  </g>
  <path d="M 424 110 L 430 110 L 430 70" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="430" cy="70" r="4.5" fill="#38bdf8"/>

  <!-- Wire to Ammeter -->
  <path d="M 430 70 L 460 70 L 460 100" stroke="#38bdf8" stroke-width="2.5"/>
  <!-- Ammeter A -->
  <g transform="translate(460, 115)">
    <circle cx="0" cy="0" r="14" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="2"/>
    <text x="0" y="4.5" fill="#38bdf8" font-size="13" font-family="monospace" font-weight="black" text-anchor="middle">A</text>
  </g>
  <path d="M 460 130 L 460 190" stroke="#38bdf8" stroke-width="2.5"/>

  <!-- Current Direction Arrows -->
  <polygon points="120,66 128,70 120,74" fill="#38bdf8"/>
  <text x="124" y="60" fill="#38bdf8" font-size="10" font-family="monospace">I</text>
  <polygon points="260,186 252,190 260,194" fill="#38bdf8"/>
</svg>`,

  // Q2: Chemical Decomposition Chain (Science Ch 1 / Ch 2)
  hots_sci_unknown_chemical_chain: `<svg viewBox="0 0 560 220" className="w-full max-w-[520px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="15" width="530" height="190" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <!-- Step 1: Green Vitriol -->
  <g transform="translate(30, 45)">
    <rect width="130" height="60" rx="10" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-width="2"/>
    <text x="65" y="24" fill="#10b981" font-size="11" font-family="monospace" font-weight="black" text-anchor="middle">SUBSTANCE 'X'</text>
    <text x="65" y="40" fill="currentColor" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">FeSO₄·7H₂O</text>
    <text x="65" y="52" fill="#10b981" font-size="9" text-anchor="middle">(Pale Green)</text>
  </g>
  <!-- Arrow 1 -->
  <path d="M 165 75 L 210 75" stroke="#f59e0b" stroke-width="2" marker-end="url(#arr-amber)"/>
  <polygon points="208,71 216,75 208,79" fill="#f59e0b"/>
  <text x="188" y="66" fill="#f59e0b" font-size="9" font-family="monospace" font-weight="bold" text-anchor="middle">Δ (Gentle)</text>
  <text x="188" y="90" fill="#94a3b8" font-size="8" text-anchor="middle">-7H₂O</text>

  <!-- Step 2: Anhydrous FeSO4 -->
  <g transform="translate(220, 45)">
    <rect width="125" height="60" rx="10" fill="#94a3b8" fill-opacity="0.15" stroke="#cbd5e1" stroke-width="2"/>
    <text x="62" y="24" fill="#f8fafc" font-size="11" font-family="monospace" font-weight="black" text-anchor="middle">SUBSTANCE 'Y'</text>
    <text x="62" y="40" fill="currentColor" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">FeSO₄ (Anhyd.)</text>
    <text x="62" y="52" fill="#cbd5e1" font-size="9" text-anchor="middle">(Dirty White)</text>
  </g>
  <!-- Arrow 2 -->
  <path d="M 350 75 L 395 75" stroke="#f43f5e" stroke-width="2"/>
  <polygon points="393,71 401,75 393,79" fill="#f43f5e"/>
  <text x="373" y="66" fill="#f43f5e" font-size="9" font-family="monospace" font-weight="bold" text-anchor="middle">Δ (Strong)</text>

  <!-- Decomposition Products -->
  <g transform="translate(405, 25)">
    <rect width="125" height="38" rx="8" fill="#b91c1c" fill-opacity="0.2" stroke="#ef4444" stroke-width="1.5"/>
    <text x="62" y="16" fill="#f87171" font-size="9" font-family="monospace" font-weight="black" text-anchor="middle">SOLID 'Z': Fe₂O₃</text>
    <text x="62" y="30" fill="currentColor" font-size="9" text-anchor="middle">Reddish-Brown</text>
  </g>
  <g transform="translate(405, 75)">
    <rect width="125" height="38" rx="8" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="62" y="16" fill="#fbbf24" font-size="9" font-family="monospace" font-weight="black" text-anchor="middle">GAS 'W': SO₂ ↑</text>
    <text x="62" y="30" fill="currentColor" font-size="8.5" text-anchor="middle">Burning sulphur smell</text>
  </g>
  <g transform="translate(405, 125)">
    <rect width="125" height="38" rx="8" fill="#8b5cf6" fill-opacity="0.15" stroke="#a78bfa" stroke-width="1.5"/>
    <text x="62" y="16" fill="#c4b5fd" font-size="9" font-family="monospace" font-weight="black" text-anchor="middle">GAS 'V': SO₃ ↑</text>
    <text x="62" y="30" fill="currentColor" font-size="8.5" text-anchor="middle">Sulphur trioxide</text>
  </g>
  <text x="280" y="188" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">2FeSO₄(s) ──Δ──&gt; Fe₂O₃(s) + SO₂(g) + SO₃(g)</text>
</svg>`,

  // Q3: Convex Lens Displacement (Science Ch 9 Light)
  hots_sci_optics_lens_displacement: `<svg viewBox="0 0 540 220" className="w-full max-w-[500px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="500" height="180" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <!-- Optical Axis -->
  <line x1="40" y1="110" x2="500" y2="110" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="4 4"/>
  <!-- Convex Lens -->
  <ellipse cx="220" cy="110" rx="8" ry="70" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-width="2"/>
  <line x1="220" y1="35" x2="220" y2="185" stroke="#38bdf8" stroke-width="1"/>
  <!-- Focal Points -->
  <circle cx="120" cy="110" r="3" fill="#f59e0b"/>
  <text x="120" y="125" fill="#f59e0b" font-size="10" font-family="monospace" text-anchor="middle">F₁ (-15)</text>
  <circle cx="320" cy="110" r="3" fill="#f59e0b"/>
  <text x="320" y="125" fill="#f59e0b" font-size="10" font-family="monospace" text-anchor="middle">F₂ (+15)</text>

  <!-- Object at u1 = -20 cm -->
  <g transform="translate(87, 110)">
    <line x1="0" y1="0" x2="0" y2="-40" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>
    <polygon points="-4,-38 0,-48 4,-38" fill="#f43f5e"/>
    <text x="0" y="18" fill="#f43f5e" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">u₁ = -20</text>
  </g>

  <!-- Screen at v1 = +60 cm with Inverted Image m = -3 -->
  <line x1="460" y1="30" x2="460" y2="190" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
  <text x="460" y="24" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Screen (v₁ = +60)</text>
  <g transform="translate(460, 110)">
    <line x1="0" y1="0" x2="0" y2="120" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
    <polygon points="-5,116 0,126 5,116" fill="#10b981"/>
    <text x="-15" y="70" fill="#10b981" font-size="11" font-family="monospace" font-weight="bold" text-anchor="end">Image (m = -3)</text>
  </g>

  <!-- Rays -->
  <path d="M 87 62 L 220 62 L 460 230" stroke="#38bdf8" stroke-width="1.5" stroke-opacity="0.8"/>
  <path d="M 87 62 L 220 110 L 460 230" stroke="#f59e0b" stroke-width="1.5" stroke-opacity="0.8"/>
</svg>`,

  // Q4: Circle Supplementary Angles (Math Ch 10 Circles)
  hots_math_circle_supplementary: `<svg viewBox="0 0 440 300" className="w-full max-w-[420px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="400" height="260" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <!-- Circumscribing Quadrilateral ABCD -->
  <polygon points="120,45 350,70 380,240 70,220" stroke="#f59e0b" stroke-width="2" fill="none"/>
  <text x="110" y="42" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">A</text>
  <text x="360" y="68" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">B</text>
  <text x="390" y="252" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">C</text>
  <text x="55" y="228" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">D</text>

  <!-- Inscribed Circle -->
  <circle cx="225" cy="150" r="75" stroke="#38bdf8" stroke-width="2.5" fill="#38bdf8" fill-opacity="0.05"/>
  <circle cx="225" cy="150" r="4" fill="#38bdf8"/>
  <text x="232" y="145" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="bold">O</text>

  <!-- Contact Points P, Q, R, S -->
  <circle cx="215" cy="55" r="3.5" fill="#f43f5e"/><text x="215" y="45" fill="#f43f5e" font-size="11" font-weight="bold" text-anchor="middle">P</text>
  <circle cx="363" cy="162" r="3.5" fill="#f43f5e"/><text x="375" y="166" fill="#f43f5e" font-size="11" font-weight="bold">Q</text>
  <circle cx="220" cy="231" r="3.5" fill="#f43f5e"/><text x="220" y="247" fill="#f43f5e" font-size="11" font-weight="bold" text-anchor="middle">R</text>
  <circle cx="95" cy="132" r="3.5" fill="#f43f5e"/><text x="82" y="134" fill="#f43f5e" font-size="11" font-weight="bold">S</text>

  <!-- Connect Center O to Vertices -->
  <line x1="225" y1="150" x2="120" y2="45" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="225" y1="150" x2="350" y2="70" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="225" y1="150" x2="380" y2="240" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="225" y1="150" x2="70" y2="220" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>

  <!-- Angles Result -->
  <text x="225" y="280" fill="#10b981" font-size="12" font-family="monospace" font-weight="black" text-anchor="middle">∠AOB + ∠COD = 180° (Supplementary)</text>
</svg>`,

  // Q5: Inradius of Right-Angled Triangle (Math Ch 10 Circles)
  hots_math_incircle_inradius_formula: `<svg viewBox="0 0 460 280" className="w-full max-w-[440px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="420" height="240" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <!-- Right Triangle ABC right angled at B -->
  <polygon points="80,50 80,210 380,210" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
  <!-- Right Angle Symbol at B -->
  <rect x="80" y="196" width="14" height="14" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="62" y="52" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">A</text>
  <text x="62" y="222" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">B (90°)</text>
  <text x="390" y="222" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">C</text>

  <!-- Side Labels -->
  <text x="45" y="135" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold">c</text>
  <text x="225" y="235" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold">a</text>
  <text x="245" y="120" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold">Hypotenuse b</text>

  <!-- Incircle with radius r = 40px -->
  <circle cx="120" cy="170" r="40" stroke="#38bdf8" stroke-width="2.5" fill="#38bdf8" fill-opacity="0.1"/>
  <circle cx="120" cy="170" r="3.5" fill="#38bdf8"/>
  <text x="128" y="165" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="bold">O</text>

  <!-- Tangent contacts P, Q, R -->
  <line x1="120" y1="170" x2="80" y2="170" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="96" y="165" fill="#38bdf8" font-size="10" font-family="monospace">r</text>
  <text x="68" y="174" fill="#38bdf8" font-size="10" font-weight="bold">P</text>

  <line x1="120" y1="170" x2="120" y2="210" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="125" y="195" fill="#38bdf8" font-size="10" font-family="monospace">r</text>
  <text x="116" y="226" fill="#38bdf8" font-size="10" font-weight="bold">Q</text>

  <!-- Formula Callout -->
  <text x="280" y="75" fill="#10b981" font-size="13" font-family="monospace" font-weight="black">r = (a + c - b) / 2</text>
  <text x="280" y="95" fill="#94a3b8" font-size="10" font-family="monospace">Inradius = (Base + Perp - Hyp) / 2</text>
</svg>`,

  // Q6: Airplane Flight Heights & Distances (Math Ch 9)
  hots_math_trig_airplane_speed: `<svg viewBox="0 0 540 260" className="w-full max-w-[500px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="500" height="220" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <!-- Ground Line -->
  <line x1="50" y1="200" x2="490" y2="200" stroke="currentColor" stroke-opacity="0.5" stroke-width="2"/>
  <text x="50" y="220" fill="currentColor" font-size="12" font-family="monospace" font-weight="bold">A (Observer)</text>

  <!-- Flight Path -->
  <line x1="160" y1="60" x2="440" y2="60" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 5"/>
  <!-- Plane Position P (t=0) -->
  <circle cx="210" cy="60" r="5" fill="#38bdf8"/>
  <text x="210" y="48" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="bold" text-anchor="middle">Plane P (60°)</text>
  <line x1="210" y1="60" x2="210" y2="200" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="215" y="140" fill="#38bdf8" font-size="10" font-family="monospace">h = 3600√3 m</text>
  <text x="210" y="215" fill="currentColor" font-size="11" font-family="monospace" text-anchor="middle">M</text>

  <!-- Plane Position Q (t=30s) -->
  <circle cx="430" cy="60" r="5" fill="#10b981"/>
  <text x="430" y="48" fill="#10b981" font-size="12" font-family="monospace" font-weight="bold" text-anchor="middle">Plane Q (30°)</text>
  <line x1="430" y1="60" x2="430" y2="200" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="430" y="215" fill="currentColor" font-size="11" font-family="monospace" text-anchor="middle">N</text>

  <!-- Line of sights -->
  <line x1="50" y1="200" x2="210" y2="60" stroke="#38bdf8" stroke-width="2"/>
  <line x1="50" y1="200" x2="430" y2="60" stroke="#10b981" stroke-width="2"/>

  <!-- Angle arcs -->
  <path d="M 90 200 A 40 40 0 0 0 80 175" stroke="#38bdf8" stroke-width="1.5" fill="none"/>
  <text x="100" y="180" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="bold">60°</text>

  <path d="M 120 200 A 70 70 0 0 0 115 186" stroke="#10b981" stroke-width="1.5" fill="none"/>
  <text x="135" y="195" fill="#10b981" font-size="11" font-family="monospace" font-weight="bold">30°</text>

  <!-- Distance and Speed Result -->
  <text x="320" y="238" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold" text-anchor="middle">MN = 7200 m (in 30 s) ➔ Speed = 864 km/h</text>
</svg>`,

  // Q11: Resistors in Series vs Parallel Bulb Glow (Science Ch 11)
  hots_sci_ch11_bulb_glow_series_parallel: `<svg viewBox="0 0 540 240" className="w-full max-w-[500px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="500" height="200" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <!-- Left Half: Series Circuit -->
  <g transform="translate(30, 30)">
    <text x="110" y="15" fill="#f59e0b" font-size="12" font-family="monospace" font-weight="black" text-anchor="middle">SERIES (I = Constant)</text>
    <rect x="15" y="30" width="190" height="90" rx="8" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
    <!-- Bulb 1: 25W (1936 Ω) BRIGHTER -->
    <circle cx="70" cy="30" r="14" fill="#fbbf24" fill-opacity="0.4" stroke="#f59e0b" stroke-width="2"/>
    <text x="70" y="34" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">25W</text>
    <text x="70" y="12" fill="#fbbf24" font-size="9" text-anchor="middle">⚡ 16 W (Bright!)</text>

    <!-- Bulb 2: 100W (484 Ω) DIMMER -->
    <circle cx="150" cy="30" r="14" fill="#64748b" fill-opacity="0.2" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="150" y="34" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">100W</text>
    <text x="150" y="12" fill="#94a3b8" font-size="9" text-anchor="middle">4 W (Dim)</text>
    
    <text x="110" y="145" fill="#f59e0b" font-size="10" font-family="monospace" text-anchor="middle">P = I²R ➔ Higher R glows brighter</text>
  </g>

  <!-- Right Half: Parallel Circuit -->
  <g transform="translate(280, 30)">
    <text x="110" y="15" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="black" text-anchor="middle">PARALLEL (V = 220V Constant)</text>
    <rect x="15" y="30" width="190" height="90" rx="8" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
    <!-- Bulb 1: 25W (25W) -->
    <circle cx="110" cy="50" r="12" fill="#64748b" fill-opacity="0.2" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="110" y="54" fill="#94a3b8" font-size="9" text-anchor="middle">25W</text>

    <!-- Bulb 2: 100W (100W) BRIGHTER -->
    <circle cx="110" cy="95" r="16" fill="#38bdf8" fill-opacity="0.4" stroke="#38bdf8" stroke-width="2"/>
    <text x="110" y="99" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">100W</text>
    <text x="165" y="99" fill="#38bdf8" font-size="9" font-weight="bold">⚡ 100 W (Bright!)</text>

    <text x="110" y="145" fill="#38bdf8" font-size="10" font-family="monospace" text-anchor="middle">P = V²/R ➔ Lower R glows brighter</text>
  </g>
</svg>`,

  // Q12: Solenoid Magnetic Field & Fleming's Left Hand (Science Ch 12)
  hots_sci_ch12_solenoid_fleming_left_hand: `<svg viewBox="0 0 540 240" className="w-full max-w-[500px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="500" height="200" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <!-- Left Side: Solenoid -->
  <g transform="translate(40, 40)">
    <text x="110" y="15" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="black" text-anchor="middle">Current-Carrying Solenoid</text>
    <!-- Soft iron core -->
    <rect x="30" y="50" width="160" height="30" rx="6" fill="#64748b" fill-opacity="0.25" stroke="#94a3b8" stroke-width="1"/>
    <text x="110" y="68" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">Soft Iron Core</text>
    
    <!-- Helical Coil Turns -->
    <path d="M 40 40 Q 50 20 60 40 L 60 90 Q 50 110 40 90" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
    <path d="M 70 40 Q 80 20 90 40 L 90 90 Q 80 110 70 90" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
    <path d="M 100 40 Q 110 20 120 40 L 120 90 Q 110 110 100 90" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
    <path d="M 130 40 Q 140 20 150 40 L 150 90 Q 140 110 130 90" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
    <path d="M 160 40 Q 170 20 180 40 L 180 90 Q 170 110 160 90" stroke="#f59e0b" stroke-width="2.5" fill="none"/>

    <!-- Poles -->
    <text x="15" y="70" fill="#ef4444" font-size="14" font-family="monospace" font-weight="black">N</text>
    <text x="200" y="70" fill="#3b82f6" font-size="14" font-family="monospace" font-weight="black">S</text>
    <!-- Uniform Field Inside -->
    <line x1="35" y1="65" x2="185" y2="65" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 2"/>
    <text x="110" y="135" fill="#38bdf8" font-size="9.5" text-anchor="middle">Uniform, parallel lines inside</text>
  </g>

  <!-- Right Side: Fleming's Left Hand Deflection -->
  <g transform="translate(310, 40)">
    <text x="100" y="15" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="black" text-anchor="middle">Fleming's Left-Hand Rule</text>
    <!-- Magnetic Field into page (X symbols) -->
    <g fill="#94a3b8" font-size="12" font-family="monospace" opacity="0.6">
      <text x="40" y="55">⊗</text><text x="80" y="55">⊗</text><text x="120" y="55">⊗</text><text x="160" y="55">⊗</text>
      <text x="40" y="85">⊗</text><text x="80" y="85">⊗</text><text x="120" y="85">⊗</text><text x="160" y="85">⊗</text>
    </g>
    <text x="100" y="40" fill="#94a3b8" font-size="9" text-anchor="middle">B (Field into page ⊗)</text>

    <!-- Beams -->
    <!-- Alpha Particle (Positive) -->
    <path d="M 20 65 L 100 65 Q 140 65 150 40" stroke="#10b981" stroke-width="2.5" fill="none"/>
    <polygon points="146,38 153,35 153,44" fill="#10b981"/>
    <text x="175" y="42" fill="#10b981" font-size="9.5" font-weight="bold">α Deflects UP ↑</text>

    <!-- Electron Beam (Negative) -->
    <path d="M 20 85 L 100 85 Q 140 85 150 110" stroke="#f43f5e" stroke-width="2.5" fill="none"/>
    <polygon points="146,112 153,115 153,106" fill="#f43f5e"/>
    <text x="175" y="114" fill="#f43f5e" font-size="9.5" font-weight="bold">e⁻ Deflects DOWN ↓</text>
  </g>
</svg>`,

  // Q23: Altitude Segment AD ⊥ BC (Math Ch 6 Triangles)
  hots_math_ch6_perpendicular_ad_bc: `<svg viewBox="0 0 460 260" className="w-full max-w-[420px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="420" height="220" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <!-- Triangle ABC -->
  <polygon points="200,45 60,190 380,190" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
  <text x="200" y="38" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold" text-anchor="middle">A</text>
  <text x="45" y="200" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">B</text>
  <text x="390" y="200" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">C</text>

  <!-- Altitude AD ⊥ BC -->
  <line x1="200" y1="45" x2="200" y2="190" stroke="#38bdf8" stroke-width="2"/>
  <text x="200" y="208" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="bold" text-anchor="middle">D</text>
  <!-- Right Angle Symbol -->
  <rect x="188" y="178" width="12" height="12" fill="none" stroke="#38bdf8" stroke-width="1.5"/>

  <!-- Segments BD = 3x, CD = x -->
  <line x1="60" y1="220" x2="200" y2="220" stroke="#f43f5e" stroke-width="2"/>
  <text x="130" y="235" fill="#f43f5e" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">BD = 3 CD = ¾ BC</text>

  <line x1="200" y1="220" x2="380" y2="220" stroke="#10b981" stroke-width="2"/>
  <text x="290" y="235" fill="#10b981" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">CD = ¼ BC</text>

  <text x="230" y="115" fill="#38bdf8" font-size="10" font-family="monospace">AD ⊥ BC</text>
</svg>`,

  // Q24: Circumcentre Coordinates & Circle (Math Ch 7 Coordinate Geometry)
  hots_math_ch7_circumcentre_equidistant: `<svg viewBox="0 0 460 260" className="w-full max-w-[420px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="420" height="220" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <!-- Cartesian Triangle -->
  <g transform="translate(60, 20)">
    <!-- Circumcircle -->
    <circle cx="160" cy="110" r="75" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 3" fill="#38bdf8" fill-opacity="0.06"/>
    <!-- Triangle ABC -->
    <polygon points="240,40 240,180 80,180" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
    <!-- Right angle B -->
    <rect x="228" y="168" width="12" height="12" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="250" y="45" fill="#f59e0b" font-size="12" font-family="monospace" font-weight="bold">A(8, 6)</text>
    <text x="250" y="190" fill="#f59e0b" font-size="12" font-family="monospace" font-weight="bold">B(8, -2)</text>
    <text x="40" y="190" fill="#f59e0b" font-size="12" font-family="monospace" font-weight="bold">C(2, -2)</text>

    <!-- Circumcentre O(5, 2) on Hypotenuse AC -->
    <circle cx="160" cy="110" r="4.5" fill="#ef4444"/>
    <text x="110" y="105" fill="#ef4444" font-size="11" font-family="monospace" font-weight="black">O(5, 2)</text>
    <!-- Radius R = 5 -->
    <line x1="160" y1="110" x2="240" y2="40" stroke="#ef4444" stroke-width="1.5"/>
    <text x="205" y="80" fill="#ef4444" font-size="10" font-family="monospace">R = 5</text>
  </g>
</svg>`,

  // Q26: Cloud Reflection in Lake (Math Ch 9 Heights & Distances)
  hots_math_ch9_cloud_reflection_lake: `<svg viewBox="0 0 500 280" className="w-full max-w-[460px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="460" height="240" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <!-- Water Surface Line -->
  <line x1="40" y1="140" x2="460" y2="140" stroke="#0ea5e9" stroke-width="2.5"/>
  <text x="50" y="134" fill="#0ea5e9" font-size="11" font-family="monospace" font-weight="bold">Water Surface of Lake</text>

  <!-- Observation Point P at height h -->
  <line x1="120" y1="140" x2="120" y2="90" stroke="#f59e0b" stroke-width="2.5"/>
  <circle cx="120" cy="90" r="4" fill="#f59e0b"/>
  <text x="80" y="115" fill="#f59e0b" font-size="11" font-family="monospace" font-weight="bold">h (P)</text>

  <!-- Horizontal Sight Line from P -->
  <line x1="120" y1="90" x2="380" y2="90" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="4 3"/>

  <!-- Cloud C at height H above lake -->
  <circle cx="380" cy="35" r="5" fill="#38bdf8"/>
  <text x="390" y="38" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="bold">Cloud C (Height H)</text>
  <line x1="380" y1="35" x2="380" y2="140" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>

  <!-- Reflected Cloud Image C' at depth H below lake -->
  <circle cx="380" cy="245" r="5" fill="#a855f7"/>
  <text x="390" y="248" fill="#a855f7" font-size="12" font-family="monospace" font-weight="bold">Reflection C' (Depth H)</text>
  <line x1="380" y1="140" x2="380" y2="245" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="3 3"/>

  <!-- Sight Lines -->
  <!-- Elevation α -->
  <line x1="120" y1="90" x2="380" y2="35" stroke="#38bdf8" stroke-width="2"/>
  <text x="180" y="78" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="bold">Elevation α</text>

  <!-- Depression β -->
  <line x1="120" y1="90" x2="380" y2="245" stroke="#a855f7" stroke-width="2"/>
  <text x="180" y="115" fill="#a855f7" font-size="11" font-family="monospace" font-weight="bold">Depression β</text>
</svg>`,

  // Q27: Tangents from External Point ∠PTQ = 2∠OPQ (Math Ch 10 Circles)
  hots_math_ch10_tangent_angle_ptq: `<svg viewBox="0 0 460 240" className="w-full max-w-[420px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="420" height="200" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <!-- Circle with center O -->
  <circle cx="280" cy="120" r="65" stroke="#38bdf8" stroke-width="2.5" fill="#38bdf8" fill-opacity="0.05"/>
  <circle cx="280" cy="120" r="3.5" fill="#38bdf8"/>
  <text x="290" y="125" fill="#38bdf8" font-size="13" font-family="monospace" font-weight="bold">O</text>

  <!-- External Point T -->
  <circle cx="80" cy="120" r="4.5" fill="#f59e0b"/>
  <text x="60" y="125" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">T</text>

  <!-- Contact Points P and Q -->
  <circle cx="235" cy="74" r="3.5" fill="#f43f5e"/>
  <text x="235" y="60" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold">P</text>
  <circle cx="235" cy="166" r="3.5" fill="#f43f5e"/>
  <text x="235" y="185" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold">Q</text>

  <!-- Tangents TP and TQ -->
  <line x1="80" y1="120" x2="235" y2="74" stroke="#f59e0b" stroke-width="2"/>
  <line x1="80" y1="120" x2="235" y2="166" stroke="#f59e0b" stroke-width="2"/>

  <!-- Chord PQ -->
  <line x1="235" y1="74" x2="235" y2="166" stroke="#10b981" stroke-width="2"/>

  <!-- Radii OP and OQ -->
  <line x1="280" y1="120" x2="235" y2="74" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="280" y1="120" x2="235" y2="166" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>

  <!-- Target relation -->
  <text x="220" y="210" fill="#10b981" font-size="12" font-family="monospace" font-weight="black" text-anchor="middle">∠PTQ = 2 ∠OPQ [Hence Proved]</text>
</svg>`,

  // Q28: Conical Cavity in Cylinder (Math Ch 12 Surface Areas)
  hots_math_ch12_cylinder_cone_cavity: `<svg viewBox="0 0 440 260" className="w-full max-w-[400px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="400" height="220" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <!-- Cylinder Body -->
  <g transform="translate(140, 35)">
    <!-- Top Ellipse -->
    <ellipse cx="80" cy="20" rx="60" ry="16" stroke="#38bdf8" stroke-width="2" fill="#38bdf8" fill-opacity="0.1"/>
    <!-- Cylinder sides -->
    <line x1="20" y1="20" x2="20" y2="150" stroke="#38bdf8" stroke-width="2"/>
    <line x1="140" y1="20" x2="140" y2="150" stroke="#38bdf8" stroke-width="2"/>
    <!-- Bottom Ellipse -->
    <ellipse cx="80" cy="150" rx="60" ry="16" stroke="#38bdf8" stroke-width="2" fill="#38bdf8" fill-opacity="0.2"/>

    <!-- Inverted Conical Cavity -->
    <line x1="20" y1="20" x2="80" y2="150" stroke="#f43f5e" stroke-width="2.5"/>
    <line x1="140" y1="20" x2="80" y2="150" stroke="#f43f5e" stroke-width="2.5"/>
    <text x="80" y="90" fill="#f43f5e" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Slant l = 2.5 cm</text>

    <!-- Dimension labels -->
    <text x="-35" y="90" fill="#f59e0b" font-size="11" font-family="monospace">h = 2.4 cm</text>
    <text x="80" y="10" fill="#f59e0b" font-size="11" font-family="monospace" text-anchor="middle">d = 1.4 cm (r = 0.7)</text>
  </g>
</svg>`,

  // Q30: Atmospheric Refraction 4-min day extension (Science Ch 10 Human Eye)
  hots_sci_ch10_atmospheric_refraction_sunrise: `<svg viewBox="0 0 520 240" className="w-full max-w-[480px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="480" height="200" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <!-- Earth Surface Arc -->
  <path d="M 40 220 A 240 240 0 0 1 280 220" stroke="#10b981" stroke-width="3" fill="#10b981" fill-opacity="0.15"/>
  <!-- Atmosphere layers -->
  <path d="M 20 200 A 280 280 0 0 1 300 200" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <path d="M 0 180 A 320 320 0 0 1 320 180" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="160" y="200" fill="#10b981" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Earth</text>

  <!-- Observer -->
  <circle cx="160" cy="148" r="4" fill="#f59e0b"/>
  <text x="160" y="140" fill="#f59e0b" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Observer</text>

  <!-- Horizon Line -->
  <line x1="80" y1="148" x2="460" y2="148" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="440" y="140" fill="currentColor" opacity="0.6" font-size="10" font-family="monospace">Horizon</text>

  <!-- Apparent Sun (Above Horizon) -->
  <circle cx="430" cy="115" r="16" fill="#f59e0b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="2"/>
  <text x="430" y="90" fill="#f59e0b" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Apparent Sun</text>
  <text x="430" y="102" fill="#f59e0b" font-size="9" text-anchor="middle">(2 min before sunrise)</text>

  <!-- Actual Sun (Below Horizon) -->
  <circle cx="430" cy="190" r="16" fill="#ef4444" fill-opacity="0.3" stroke="#ef4444" stroke-width="2"/>
  <text x="430" y="218" fill="#ef4444" font-size="10" font-family="monospace" font-weight="bold" text-anchor="middle">Actual Sun</text>

  <!-- Curved Ray bending towards normal -->
  <path d="M 414 190 Q 280 180 160 148" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
  <line x1="160" y1="148" x2="430" y2="115" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
</svg>`,

  // Q33: Athletic Track Composite Geometry (Math Ch 11)
  hots_math_ch11_circular_race_track_area: `<svg viewBox="0 0 520 240" className="w-full max-w-[480px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="480" height="200" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <g transform="translate(40, 25)">
    <!-- Outer Track -->
    <rect x="100" y="10" width="180" height="160" fill="none"/>
    <path d="M 100 10 L 280 10 A 80 80 0 0 1 280 170 L 100 170 A 80 80 0 0 1 100 10 Z" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="2"/>

    <!-- Inner Field -->
    <path d="M 100 30 L 280 30 A 60 60 0 0 1 280 150 L 100 150 A 60 60 0 0 1 100 30 Z" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="2"/>

    <!-- Track Width Label -->
    <text x="190" y="22" fill="#f59e0b" font-size="10" font-family="monospace" text-anchor="middle">Track Width w = 10 m</text>
    <!-- Straight Length -->
    <text x="190" y="90" fill="#10b981" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Length = 106 m</text>
    <text x="190" y="105" fill="#10b981" font-size="10" font-family="monospace" text-anchor="middle">Inner width = 60 m (r = 30)</text>

    <!-- Total Area Result -->
    <text x="190" y="186" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="black" text-anchor="middle">Track Area = 4,320 m² | Inner Perimeter = 400.57 m</text>
  </g>
</svg>`,

  // Q35: Trapezium Diagonals and PO = OQ (Math Ch 6 Triangles)
  hots_math_ch6_trapezium_diagonals_po_oq: `<svg viewBox="0 0 460 250" className="w-full max-w-[420px] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="420" height="210" rx="16" fill="currentColor" fill-opacity="0.03" stroke="currentColor" stroke-opacity="0.2" stroke-width="1.5"/>
  <!-- Trapezium ABCD with AB || DC -->
  <polygon points="120,50 340,50 390,190 70,190" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
  <text x="110" y="44" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">A</text>
  <text x="345" y="44" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">B</text>
  <text x="395" y="202" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">C</text>
  <text x="55" y="202" fill="#f59e0b" font-size="13" font-family="monospace" font-weight="bold">D</text>

  <!-- Diagonals AC and BD intersecting at O -->
  <line x1="120" y1="50" x2="390" y2="190" stroke="#38bdf8" stroke-width="1.5"/>
  <line x1="340" y1="50" x2="70" y2="190" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- Intersection O -->
  <circle cx="230" cy="106" r="4" fill="#38bdf8"/>
  <text x="238" y="104" fill="#38bdf8" font-size="12" font-family="monospace" font-weight="bold">O</text>

  <!-- Line POQ parallel to AB through O -->
  <line x1="100" y1="106" x2="360" y2="106" stroke="#f43f5e" stroke-width="2.5"/>
  <circle cx="100" cy="106" r="3.5" fill="#f43f5e"/>
  <text x="85" y="110" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold">P</text>
  <circle cx="360" cy="106" r="3.5" fill="#f43f5e"/>
  <text x="370" y="110" fill="#f43f5e" font-size="12" font-family="monospace" font-weight="bold">Q</text>

  <!-- Parallel marks -->
  <text x="230" y="45" fill="#f59e0b" font-size="9" text-anchor="middle">&gt;&gt; AB</text>
  <text x="230" y="125" fill="#f43f5e" font-size="9" text-anchor="middle">&gt;&gt; POQ</text>
  <text x="230" y="205" fill="#f59e0b" font-size="9" text-anchor="middle">&gt;&gt; DC</text>

  <!-- Conclusion -->
  <text x="230" y="222" fill="#10b981" font-size="11" font-family="monospace" font-weight="black" text-anchor="middle">PO = OQ and 1/PO = 1/AB + 1/CD</text>
</svg>`
};
