// =========================================================================
// CBSE Class 10 Science — 100% Comprehensive Visual Diagrams & Circuits Bank
// Standard: CBSE Board Examination 2026-27 (Code 086)
// Covers EVERY single Physics & Biology diagram, Ray tracing case, and Mixed Circuit
// =========================================================================

export type DiagramCategory = "Physics Optics" | "Physics Human Eye" | "Physics Electricity & Circuits" | "Physics Magnetism" | "Biology Life Processes" | "Biology Control & Coordination" | "Biology Reproduction" | "Biology Heredity";

export interface DiagramLabel {
  id: string;
  name: string;
  description: string;
  boardSignificance: string;
  cx?: number; // Relative percentage coordinates for interactive pins
  cy?: number;
}

export interface ScienceDiagram {
  id: string;
  title: string;
  chapterNo: number;
  chapterName: string;
  category: DiagramCategory;
  boardMarks: number; // 2, 3, 4, 5
  boardFrequency: string; // e.g. "98% Recurrence"
  ncertFigureRef: string; // e.g. "NCERT Fig 9.7, Page 166"
  description: string;
  diagramType: "svg_ray_optics" | "svg_mixed_circuit" | "svg_biological_anatomy" | "svg_physical_setup";
  labels: DiagramLabel[];
  markingPoints: string[];
  examinerTraps: string[];
  solvedCircuitData?: {
    components: { name: string; value: string; type: string }[];
    totalVoltage: number;
    steps: {
      stepNo: number;
      heading: string;
      formula: string;
      calculation: string;
      result: string;
    }[];
    finalCurrent: string;
    finalResistance: string;
    powerDissipated?: string;
  };
  rayTracingCases?: {
    caseNo: number;
    objectPosition: string;
    imagePosition: string;
    imageNature: string;
    imageSize: string;
    practicalApplication: string;
    ray1: string; // First principal ray description
    ray2: string; // Second principal ray description
  }[];
}

export const SCIENCE_DIAGRAMS_MASTER: ScienceDiagram[] = [
  // ==========================================
  // 1. PHYSICS OPTICS: CONCAVE MIRROR (ALL 6 CASES)
  // ==========================================
  {
    id: "diag_optics_concave_mirror",
    title: "Concave Mirror: Complete 6-Case Ray Tracing Master",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    category: "Physics Optics",
    boardMarks: 5,
    boardFrequency: "99% Recurrence (CBSE 2024, 2023, 2022, 2020, 2019, 2018)",
    ncertFigureRef: "NCERT Class 10 Science, Figure 9.7 (Page 166)",
    description: "Complete ray diagrams for all 6 object positions in front of a concave mirror. Arrows indicating the direction of light rays are mandatory by CBSE board rules.",
    diagramType: "svg_ray_optics",
    labels: [
      { id: "lbl_p", name: "Pole (P)", description: "The geometric centre of the reflecting surface of the spherical mirror.", boardSignificance: "Origin for all Cartesian sign measurements." },
      { id: "lbl_c", name: "Centre of Curvature (C)", description: "The centre of the hollow sphere of glass of which the mirror forms a part.", boardSignificance: "Ray passing through C retraces its path back (incident angle = 0°)." },
      { id: "lbl_f", name: "Principal Focus (F)", description: "Point on principal axis where parallel rays converge after reflection.", boardSignificance: "f = R / 2 (Focal length is half of radius of curvature)." },
      { id: "lbl_axis", name: "Principal Axis", description: "The straight line passing through the Pole and Centre of Curvature.", boardSignificance: "Normal to the mirror at the pole." }
    ],
    markingPoints: [
      "Arrows on incident and reflected rays are MANDATORY (+1 Mark).",
      "Principal focus F must be exactly equidistant between P and C (PF = FC).",
      "Reflected rays must be drawn with a ruler; freehand drawing loses 1 mark.",
      "Virtual rays behind mirror must be represented as dashed lines."
    ],
    examinerTraps: [
      "CRITICAL: Omitting ray direction arrows costs an immediate 1-mark penalty on CBSE boards.",
      "Case 6 (Between P and F): The image is BEHIND the mirror and must be dashed, upright, and enlarged."
    ],
    rayTracingCases: [
      {
        caseNo: 1,
        objectPosition: "At Infinity",
        imagePosition: "At Principal Focus (F)",
        imageNature: "Real and Inverted",
        imageSize: "Highly diminished, point-sized",
        practicalApplication: "Solar furnace / Solar concentrator (concentrates parallel sunrays at focus).",
        ray1: "Parallel to principal axis → reflects through focus F.",
        ray2: "Parallel ray from opposite edge → reflects through focus F."
      },
      {
        caseNo: 2,
        objectPosition: "Beyond C (Centre of Curvature)",
        imagePosition: "Between Focus F and Centre of Curvature C",
        imageNature: "Real and Inverted",
        imageSize: "Diminished",
        practicalApplication: "Optical imaging setups / camera mirror.",
        ray1: "Parallel to principal axis → reflects through F.",
        ray2: "Passes through C → reflects back along the same path."
      },
      {
        caseNo: 3,
        objectPosition: "At C (Centre of Curvature)",
        imagePosition: "At C (Centre of Curvature)",
        imageNature: "Real and Inverted",
        imageSize: "Same size as the object (m = -1)",
        practicalApplication: "Inverting image without size change; benchmark test for radius of curvature.",
        ray1: "Parallel to principal axis → reflects through F.",
        ray2: "Passes through F → reflects parallel to principal axis."
      },
      {
        caseNo: 4,
        objectPosition: "Between C and F",
        imagePosition: "Beyond C",
        imageNature: "Real and Inverted",
        imageSize: "Enlarged / Magnified (m < -1)",
        practicalApplication: "Cinema projectors and optical microscopes.",
        ray1: "Parallel to principal axis → reflects through F.",
        ray2: "Passes through C → reflects back along the same path."
      },
      {
        caseNo: 5,
        objectPosition: "At Principal Focus (F)",
        imagePosition: "At Infinity",
        imageNature: "Real and Inverted",
        imageSize: "Infinitely large / Highly enlarged",
        practicalApplication: "Searchlights, torches, vehicle headlights (bulb at focus produces a powerful parallel beam).",
        ray1: "Parallel to principal axis → reflects through F.",
        ray2: "Incident at Pole P → reflects at equal angle (Law of reflection ∠i = ∠r)."
      },
      {
        caseNo: 6,
        objectPosition: "Between Pole (P) and Focus (F)",
        imagePosition: "Behind the Mirror",
        imageNature: "Virtual and Erect (Dashed lines)",
        imageSize: "Magnified / Enlarged (m > +1)",
        practicalApplication: "Dentist's examination mirror & Shaving/Makeup mirror (shows large upright view of teeth/face).",
        ray1: "Incident at Pole P with angle i → reflects at equal angle r (diverges in front).",
        ray2: "Aligned with C → reflects along C line. Both rays extended backwards intersect behind mirror."
      }
    ]
  },

  // ==========================================
  // 2. PHYSICS OPTICS: CONVEX LENS (ALL 6 CASES)
  // ==========================================
  {
    id: "diag_optics_convex_lens",
    title: "Convex (Converging) Lens: Master Ray Tracing & Refraction",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    category: "Physics Optics",
    boardMarks: 5,
    boardFrequency: "98% Recurrence (CBSE 2024, 2023, 2021, 2019)",
    ncertFigureRef: "NCERT Class 10 Science, Figure 9.16 (Page 177)",
    description: "Ray diagrams for all object positions with a thin biconvex lens. Optical centre O, principal foci F1 & F2, and 2F1 & 2F2.",
    diagramType: "svg_ray_optics",
    labels: [
      { id: "lbl_o", name: "Optical Centre (O)", description: "The central point of the lens through which a ray of light passes without suffering any deviation.", boardSignificance: "Undeviated ray benchmark." },
      { id: "lbl_f1_f2", name: "Foci (F1 and F2)", description: "First and second principal foci on either side of the lens at focal distance f.", boardSignificance: "Parallel rays converge at F2 on the right." },
      { id: "lbl_2f", name: "Centres (2F1 and 2F2)", description: "Points at twice the focal length (2f) from the optical centre.", boardSignificance: "Object at 2F1 produces image at 2F2 of identical size (m = -1)." }
    ],
    markingPoints: [
      "Arrow on incident ray and refracted ray (+1 Mark).",
      "Ray passing through Optical Centre O must be drawn dead straight with no bending.",
      "Case 6 (Object between F1 and O): Virtual image on the SAME side of lens, magnified, erect."
    ],
    examinerTraps: [
      "Lens formula: 1/f = 1/v - 1/u (notice MINUS sign, unlike mirror formula which has plus).",
      "Magnification formula for lens: m = v / u (POSITIVE, whereas mirror magnification is m = -v/u)!"
    ],
    rayTracingCases: [
      {
        caseNo: 1,
        objectPosition: "At Infinity",
        imagePosition: "At Focus F2",
        imageNature: "Real and Inverted",
        imageSize: "Highly diminished, point-sized",
        practicalApplication: "Burning glass (concentrates sunlight to ignite paper); Astronomical telescope objective.",
        ray1: "Parallel to principal axis → refracts through second focus F2.",
        ray2: "Parallel ray passing through Optical Centre O → passes undeviated."
      },
      {
        caseNo: 2,
        objectPosition: "Beyond 2F1",
        imagePosition: "Between F2 and 2F2",
        imageNature: "Real and Inverted",
        imageSize: "Diminished",
        practicalApplication: "Photographic camera lens; Human eye crystalline lens.",
        ray1: "Parallel to axis → refracts through F2.",
        ray2: "Passes through Optical Centre O → continues straight."
      },
      {
        caseNo: 3,
        objectPosition: "At 2F1",
        imagePosition: "At 2F2",
        imageNature: "Real and Inverted",
        imageSize: "Same size (m = -1)",
        practicalApplication: "Photocopier (Xerox machine) 1:1 scale reproduction.",
        ray1: "Parallel to axis → refracts through F2.",
        ray2: "Passes through O → straight line."
      },
      {
        caseNo: 4,
        objectPosition: "Between F1 and 2F1",
        imagePosition: "Beyond 2F2",
        imageNature: "Real and Inverted",
        imageSize: "Magnified / Enlarged (m < -1)",
        practicalApplication: "Cinema projector, slide projector.",
        ray1: "Parallel to axis → refracts through F2.",
        ray2: "Passes through O → undeviated."
      },
      {
        caseNo: 5,
        objectPosition: "At Focus F1",
        imagePosition: "At Infinity",
        imageNature: "Real and Inverted",
        imageSize: "Infinitely large",
        practicalApplication: "Collimator of spectroscope; Lighthouse lamp.",
        ray1: "Parallel to axis → refracts through F2.",
        ray2: "Passes through O → straight line (both refracted rays are parallel)."
      },
      {
        caseNo: 6,
        objectPosition: "Between Focus F1 and Optical Centre O",
        imagePosition: "On the SAME side of lens as object",
        imageNature: "Virtual and Erect (Dashed lines)",
        imageSize: "Magnified / Enlarged (m > +1)",
        practicalApplication: "Simple Magnifying Glass / Reading Glass / Watchmaker's loupe.",
        ray1: "Parallel to axis → refracts through F2 (diverges outwards).",
        ray2: "Passes through O → straight. Extended backwards, they intersect on the same side as object."
      }
    ]
  },

  // ==========================================
  // 3. PHYSICS HUMAN EYE: DEFECTS AND CORRECTIONS
  // ==========================================
  {
    id: "diag_eye_myopia_hypermetropia",
    title: "Human Eye Defects: Myopia & Hypermetropia (Defect & Correction)",
    chapterNo: 10,
    chapterName: "The Human Eye and the Colourful World",
    category: "Physics Human Eye",
    boardMarks: 5,
    boardFrequency: "99% Recurrence (CBSE 2024, 2023, 2022, 2020, 2019, 2017)",
    ncertFigureRef: "NCERT Class 10 Science, Figures 10.2 & 10.3 (Page 189)",
    description: "The two mandatory 3-part diagram sets required by CBSE: Far Point / Near Point, Defective Eye ray path, and Corrected Eye with corrective lens.",
    diagramType: "svg_ray_optics",
    labels: [
      { id: "lbl_cornea", name: "Cornea", description: "Transparent front membrane where most refraction of light entering the eye occurs.", boardSignificance: "Acts as primary fixed lens." },
      { id: "lbl_retina", name: "Retina", description: "Light-sensitive screen at the back of eye containing rods and cones.", boardSignificance: "Where clear images must focus." },
      { id: "lbl_ciliary", name: "Ciliary Muscles", description: "Modifies the curvature and focal length of the crystalline lens for accommodation.", boardSignificance: "Weakness causes Presbyopia." }
    ],
    markingPoints: [
      "Must draw THREE distinct sub-diagrams for full 5 marks:",
      "(a) Far/Near point of defective eye.",
      "(b) Defective eye showing image forming in FRONT of retina (Myopia) or BEHIND retina (Hypermetropia).",
      "(c) Corrected eye showing CONCAVE lens diverging rays (Myopia) or CONVEX lens converging rays (Hypermetropia) onto retina."
    ],
    examinerTraps: [
      "Myopia: Image forms IN FRONT OF RETINA. Corrected with CONCAVE lens of appropriate power.",
      "Hypermetropia: Image forms BEHIND RETINA. Corrected with CONVEX lens of appropriate power.",
      "Causes of Myopia: (1) Excessive curvature of eye lens (too thick), (2) Elongation of the eyeball.",
      "Causes of Hypermetropia: (1) Focal length of eye lens is too long (too thin), (2) Eyeball has become too small."
    ]
  },

  // ==========================================
  // 4. PHYSICS PRISM & DISPERSION
  // ==========================================
  {
    id: "diag_prism_dispersion",
    title: "Refraction through Glass Prism & White Light Dispersion (VIBGYOR)",
    chapterNo: 10,
    chapterName: "The Human Eye and the Colourful World",
    category: "Physics Human Eye",
    boardMarks: 3,
    boardFrequency: "95% Recurrence (CBSE 2024, 2023, 2020, 2018)",
    ncertFigureRef: "NCERT Class 10 Science, Figures 10.4 & 10.5 (Page 191)",
    description: "Ray diagram through triangular glass prism showing angle of prism A, incident angle i, emergence angle e, and deviation angle D. Plus Newton's inverted prism recombination.",
    diagramType: "svg_ray_optics",
    labels: [
      { id: "lbl_prism_a", name: "Angle of Prism (A)", description: "Angle between the two refracting surfaces.", boardSignificance: "i + e = A + D" },
      { id: "lbl_angle_d", name: "Angle of Deviation (D)", description: "The angle between the extended incident ray and the emergent ray.", boardSignificance: "Measures total bending." },
      { id: "lbl_vibgyor", name: "VIBGYOR Spectrum", description: "Violet bends the MOST (shortest wavelength); Red bends the LEAST (longest wavelength).", boardSignificance: "Red is used for danger signals because it scatters the least." }
    ],
    markingPoints: [
      "Formula: Angle of Incidence i + Angle of Emergence e = Angle of Prism A + Angle of Deviation D.",
      "Violet light has the highest refractive index in glass and travels slowest; Red travels fastest in glass."
    ],
    examinerTraps: [
      "Which color deviates the most? VIOLET deviates the most; RED deviates the least.",
      "Newton's Inverted Prism: Second identical inverted prism recombines all 7 colors back into a white light beam."
    ]
  },

  // ==========================================
  // 5. PHYSICS ELECTRICITY: MIXED CIRCUITS & LADDER NETWORKS
  // ==========================================
  {
    id: "diag_mixed_circuit_solver",
    title: "Mixed Resistor Circuit Solver: Series-Parallel Ladder Network",
    chapterNo: 11,
    chapterName: "Electricity",
    category: "Physics Electricity & Circuits",
    boardMarks: 5,
    boardFrequency: "99% Recurrence in Section D / Case Studies",
    ncertFigureRef: "NCERT Class 10 Science, Examples 11.8 & 11.9 (Page 214)",
    description: "Step-by-step reduction of a mixed series-parallel resistor network: R1 in series with parallel pair (R2 || R3). Calculates total equivalent resistance, total battery current, potential drop across each component, and branch currents.",
    diagramType: "svg_mixed_circuit",
    labels: [
      { id: "lbl_battery", name: "12V DC Voltage Source", description: "Provides electromotive force (potential difference) to drive current through the circuit.", boardSignificance: "Total potential V = 12 V." },
      { id: "lbl_r1", name: "Resistor R1 (4 Ω)", description: "Connected in SERIES with the parallel combination.", boardSignificance: "Full total current flows through R1." },
      { id: "lbl_r2", name: "Resistor R2 (6 Ω)", description: "Upper branch of the parallel block.", boardSignificance: "Shares voltage Vp = 4 V." },
      { id: "lbl_r3", name: "Resistor R3 (3 Ω)", description: "Lower branch of the parallel block.", boardSignificance: "Carries twice the current of R2 because R3 = R2 / 2." }
    ],
    markingPoints: [
      "Step 1: Calculate equivalent resistance of parallel branch: 1/Rp = 1/R2 + 1/R3 (+1 Mark).",
      "Step 2: Add series resistance: Req = R1 + Rp (+1 Mark).",
      "Step 3: Ohm's Law for total circuit current: I = V / Req (+1 Mark).",
      "Step 4: Voltage drops: V1 = I × R1 and Vp = I × Rp (+1 Mark).",
      "Step 5: Branch currents: I2 = Vp / R2 and I3 = Vp / R3 with I2 + I3 = I (+1 Mark)."
    ],
    examinerTraps: [
      "Parallel Reciprocal Trap: 1/Rp = 1/6 + 1/3 = 3/6 = 1/2. Remember to RECIPROCATE: Rp = 2 Ω (NOT 1/2 Ω)!",
      "Ammeter is ALWAYS connected in SERIES (very low resistance); Voltmeter is ALWAYS connected in PARALLEL (very high resistance)."
    ],
    solvedCircuitData: {
      components: [
        { name: "Resistor R1 (Series)", value: "4 Ω", type: "Series" },
        { name: "Resistor R2 (Parallel)", value: "6 Ω", type: "Parallel" },
        { name: "Resistor R3 (Parallel)", value: "3 Ω", type: "Parallel" },
        { name: "Battery V", value: "12 V", type: "DC Supply" }
      ],
      totalVoltage: 12,
      steps: [
        {
          stepNo: 1,
          heading: "Step 1: Simplify Parallel Resistors (R2 and R3)",
          formula: "\\frac{1}{R_p} = \\frac{1}{R_2} + \\frac{1}{R_3} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}\\ \\Omega^{-1}",
          calculation: "Inverting both sides: R_p = \\frac{6 \\times 3}{6 + 3} = \\frac{18}{9} = 2\\ \\Omega",
          result: "R_p = 2\\ \\Omega"
        },
        {
          stepNo: 2,
          heading: "Step 2: Add Series Resistor R1 to Equivalent Parallel Resistance",
          formula: "R_{\\text{eq}} = R_1 + R_p",
          calculation: "R_{\\text{eq}} = 4\\ \\Omega + 2\\ \\Omega = 6\\ \\Omega",
          result: "R_{\\text{eq}} = 6\\ \\Omega"
        },
        {
          stepNo: 3,
          heading: "Step 3: Calculate Total Circuit Current from Battery",
          formula: "I = \\frac{V}{R_{\\text{eq}}}",
          calculation: "I = \\frac{12\\text{ V}}{6\\ \\Omega} = 2.0\\text{ A}",
          result: "I_{\\text{total}} = 2\\text{ A}"
        },
        {
          stepNo: 4,
          heading: "Step 4: Potential Difference across Resistor R1",
          formula: "V_1 = I \\times R_1",
          calculation: "V_1 = 2\\text{ A} \\times 4\\ \\Omega = 8\\text{ V}",
          result: "V_1 = 8\\text{ V}"
        },
        {
          stepNo: 5,
          heading: "Step 5: Potential Difference across Parallel Block (R2 || R3)",
          formula: "V_p = V_{\\text{total}} - V_1 = I \\times R_p",
          calculation: "V_p = 12\\text{ V} - 8\\text{ V} = 4\\text{ V} \\quad (\\text{or } 2\\text{ A} \\times 2\\ \\Omega = 4\\text{ V})",
          result: "V_p = 4\\text{ V}"
        },
        {
          stepNo: 6,
          heading: "Step 6: Individual Branch Currents through R2 and R3",
          formula: "I_2 = \\frac{V_p}{R_2} \\quad \\text{and} \\quad I_3 = \\frac{V_p}{R_3}",
          calculation: "I_2 = \\frac{4\\text{ V}}{6\\ \\Omega} = 0.67\\text{ A}, \\quad I_3 = \\frac{4\\text{ V}}{3\\ \\Omega} = 1.33\\text{ A}. \\quad (I_2 + I_3 = 0.67 + 1.33 = 2.0\\text{ A})",
          result: "I_2 = 0.67\\text{ A}, \\quad I_3 = 1.33\\text{ A}"
        }
      ],
      finalCurrent: "2.0 A",
      finalResistance: "6.0 Ω",
      powerDissipated: "P = V × I = 12 V × 2 A = 24 W"
    }
  },

  // ==========================================
  // 6. PHYSICS MAGNETISM: SOLENOID & DOMESTIC CIRCUIT
  // ==========================================
  {
    id: "diag_magnetism_solenoid_domestic",
    title: "Magnetic Field of Solenoid & Domestic Electric Circuit",
    chapterNo: 12,
    chapterName: "Magnetic Effects of Electric Current",
    category: "Physics Magnetism",
    boardMarks: 5,
    boardFrequency: "97% Recurrence (CBSE 2024, 2023, 2022, 2020)",
    ncertFigureRef: "NCERT Class 10 Science, Figures 12.10 & 12.20 (Pages 229, 237)",
    description: "Field pattern of a current-carrying solenoid showing uniform internal parallel field lines (like a bar magnet). Plus full domestic electric circuit with Live, Neutral, Earth wires, Electricity meter, Fuse/MCB, and parallel socket connections.",
    diagramType: "svg_physical_setup",
    labels: [
      { id: "lbl_live", name: "Live Wire (Red / Brown)", description: "Maintains high positive potential of 220 V AC at 50 Hz.", boardSignificance: "Carries current to appliances; switches must always be connected on Live wire!" },
      { id: "lbl_neutral", name: "Neutral Wire (Black / Blue)", description: "Completes the circuit with near-zero potential (0 V).", boardSignificance: "Potential difference between Live and Neutral is 220 V." },
      { id: "lbl_earth", name: "Earth Wire (Green / Yellow)", description: "Safety wire connected to a deep copper plate in earth.", boardSignificance: "Protects users from severe electric shocks in case of live wire contact with metallic bodies." }
    ],
    markingPoints: [
      "Inside the solenoid: Field lines are PARALLEL STRAIGHT LINES, showing that magnetic field is UNIFORM at all points inside (+1 Mark).",
      "Domestic appliances are connected in PARALLEL so that: (1) Each appliance gets the full 220 V, (2) If one appliance fails, others continue working, (3) Each has an independent switch (+2 Marks)."
    ],
    examinerTraps: [
      "Why switches are connected to LIVE wire only? If connected to neutral, the appliance remains live at 220 V even when switch is OFF, posing fatal shock hazard!",
      "Earth wire safety: Prevents metallic bodies from acquiring high voltage by routing fault current safely into the ground."
    ]
  },

  // ==========================================
  // 7. BIOLOGY LIFE PROCESSES: HUMAN DIGESTIVE SYSTEM
  // ==========================================
  {
    id: "diag_bio_digestive_system",
    title: "Human Alimentary Canal (Digestive System)",
    chapterNo: 5,
    chapterName: "Life Processes",
    category: "Biology Life Processes",
    boardMarks: 5,
    boardFrequency: "99% Recurrence in Section D (5 Marks)",
    ncertFigureRef: "NCERT Class 10 Science, Figure 5.6 (Page 99)",
    description: "Complete anatomical view of the human digestive tract from mouth to anus, including salivary glands, stomach, liver, gall bladder, pancreas, small intestine, and large intestine.",
    diagramType: "svg_biological_anatomy",
    labels: [
      { id: "lbl_salivary", name: "Salivary Glands", description: "Secretes saliva containing Salivary Amylase (Ptyalin) which breaks starch into maltose sugars at pH 6.8.", boardSignificance: "First site of chemical digestion." },
      { id: "lbl_stomach", name: "Stomach", description: "J-shaped muscular organ. Gastric glands secrete: (1) HCl (acidic pH ~1.5-2.0, activates pepsin, kills bacteria), (2) Pepsin (digests proteins), (3) Mucus (protects inner wall from HCl).", boardSignificance: "Sphincter muscle regulates chyme exit." },
      { id: "lbl_liver", name: "Liver", description: "Largest gland of human body. Secretes Bile juice (contains bile salts for emulsification of large fat globules; contains no enzymes).", boardSignificance: "Makes medium alkaline for pancreatic enzymes." },
      { id: "lbl_gallbladder", name: "Gall Bladder", description: "Stores and concentrates bile juice until needed in the duodenum.", boardSignificance: "Reservoir for bile." },
      { id: "lbl_pancreas", name: "Pancreas", description: "Secretes pancreatic juice containing: (1) Pancreatic Amylase, (2) Trypsin (protein digestion in alkaline medium), (3) Lipase (breaks emulsified fats into fatty acids & glycerol).", boardSignificance: "Dual gland (endocrine & exocrine)." },
      { id: "lbl_small_intestine", name: "Small Intestine", description: "Site of COMPLETE digestion of carbs, proteins, and fats. Inner wall possesses millions of finger-like projections called VILLI with rich capillary network for massive absorption.", boardSignificance: "Longest part of alimentary canal (~6 metres)." }
    ],
    markingPoints: [
      "Labeling must include at least 6 core organs: Mouth, Oesophagus, Stomach, Liver, Pancreas, Small Intestine (+3 Marks).",
      "Functional roles: Emulsification of fats by bile salts, action of Pepsin vs Trypsin (+2 Marks)."
    ],
    examinerTraps: [
      "Do NOT say 'Bile contains enzymes'. Bile contains NO digestive enzymes; it works purely by physical EMULSIFICATION (breaking big fat droplets into small globules).",
      "Pepsin requires ACIDIC medium (HCl in stomach); Trypsin requires ALKALINE medium (Bile in small intestine)!"
    ]
  },

  // ==========================================
  // 8. BIOLOGY LIFE PROCESSES: HUMAN HEART & DOUBLE CIRCULATION
  // ==========================================
  {
    id: "diag_bio_heart_circulation",
    title: "Sectional View of Human Heart & Schematic Double Circulation",
    chapterNo: 5,
    chapterName: "Life Processes",
    category: "Biology Life Processes",
    boardMarks: 5,
    boardFrequency: "98% Recurrence (CBSE 2024, 2023, 2022, 2020, 2018)",
    ncertFigureRef: "NCERT Class 10 Science, Figures 5.10 & 5.11 (Pages 106, 107)",
    description: "Four chambers of human heart (Right/Left Atrium, Right/Left Ventricle), Vena Cava, Pulmonary Artery, Pulmonary Veins, Aorta, Septum, and Valves. Plus flow chart of Double Circulation.",
    diagramType: "svg_biological_anatomy",
    labels: [
      { id: "lbl_ra", name: "Right Atrium", description: "Receives deoxygenated blood from the upper and lower body via Superior & Inferior Vena Cava.", boardSignificance: "Thin-walled receiving chamber." },
      { id: "lbl_rv", name: "Right Ventricle", description: "Pumps deoxygenated blood to lungs through Pulmonary Artery for oxygenation.", boardSignificance: "Thicker muscular wall than atria." },
      { id: "lbl_la", name: "Left Atrium", description: "Receives freshly oxygenated blood from lungs through Pulmonary Veins.", boardSignificance: "Relaxes while collecting blood." },
      { id: "lbl_lv", name: "Left Ventricle", description: "Pumps oxygenated blood to the entire body through the systemic Aorta at high pressure.", boardSignificance: "Thickest muscular wall of all 4 chambers." },
      { id: "lbl_septum", name: "Interventricular Septum", description: "Thick muscular partition separating right (deoxygenated) and left (oxygenated) sides completely.", boardSignificance: "Prevents mixing of oxygenated & deoxygenated blood, ensuring high energy efficiency for warm-blooded mammals." },
      { id: "lbl_valves", name: "Valves (Tricuspid & Bicuspid/Mitral)", description: "Flaps that ensure blood flows in ONE direction only (prevents backflow when ventricles contract).", boardSignificance: "One-way flow regulator." }
    ],
    markingPoints: [
      "Left ventricle wall must be drawn noticeably THICKER than right ventricle (+1 Mark).",
      "Pulmonary Artery carries DEOXYGENATED blood; Pulmonary Vein carries OXYGENATED blood (exception to normal rule!) (+1 Mark).",
      "Why is double circulation necessary? Keeps oxygenated and deoxygenated blood strictly separate, providing highly efficient oxygen supply needed to maintain constant body temperature (+2 Marks)."
    ],
    examinerTraps: [
      "Exception trap: Arteries generally carry oxygenated blood EXCEPT Pulmonary Artery (carries deoxygenated blood to lungs). Veins carry deoxygenated blood EXCEPT Pulmonary Veins (carry oxygenated blood from lungs)."
    ]
  },

  // ==========================================
  // 9. BIOLOGY LIFE PROCESSES: EXCRETORY SYSTEM & NEPHRON
  // ==========================================
  {
    id: "diag_bio_excretion_nephron",
    title: "Human Excretory System & Structure of a Nephron",
    chapterNo: 5,
    chapterName: "Life Processes",
    category: "Biology Life Processes",
    boardMarks: 5,
    boardFrequency: "97% Recurrence (CBSE 2024, 2023, 2020, 2019)",
    ncertFigureRef: "NCERT Class 10 Science, Figures 5.13 & 5.14 (Pages 110, 111)",
    description: "Kidneys, ureters, urinary bladder, urethra. Structure of functional unit (Nephron): Bowman's capsule, Glomerulus, Proximal & Distal convoluted tubules, Loop of Henle, Collecting duct.",
    diagramType: "svg_biological_anatomy",
    labels: [
      { id: "lbl_kidneys", name: "Kidneys (Pair)", description: "Bean-shaped excretory organs located on either side of backbone in abdomen.", boardSignificance: "Filter nitrogenous waste (urea/uric acid) from blood." },
      { id: "lbl_ureters", name: "Ureters", description: "Muscular tubes carrying urine from kidneys to urinary bladder.", boardSignificance: "Conduit for urine." },
      { id: "lbl_glomerulus", name: "Glomerulus", description: "Tuft of high-pressure capillaries inside Bowman's capsule where Ultrafiltration occurs.", boardSignificance: "Filters glucose, amino acids, salts, water, and urea." },
      { id: "lbl_bowmans", name: "Bowman's Capsule", description: "Cup-shaped double-walled sac collecting the initial glomerular filtrate (~180 litres/day).", boardSignificance: "Ultrafiltration site." },
      { id: "lbl_tubule", name: "Nephron Tubule (PCT, Loop of Henle, DCT)", description: "Site of Selective Reabsorption where glucose, amino acids, essential salts, and major water volume are reabsorbed back into capillaries.", boardSignificance: "Urine volume concentrated down to 1-2 litres/day." }
    ],
    markingPoints: [
      "Three steps of urine formation: (1) Glomerular Ultrafiltration, (2) Tubular Selective Reabsorption, (3) Tubular Secretion (+3 Marks).",
      "Initial filtrate is ~180 L/day, but actual excreted urine is only 1-2 L/day because 99% of filtrate is reabsorbed (+2 Marks)."
    ],
    examinerTraps: [
      "Do NOT confuse nephron with NEURON! Nephron is in Kidney (excretion); Neuron is in Nervous system (impulses). High school misspelling tragedy!"
    ]
  },

  // ==========================================
  // 10. BIOLOGY CONTROL & COORDINATION: NEURON & REFLEX ARC
  // ==========================================
  {
    id: "diag_bio_neuron_reflex_arc",
    title: "Structure of a Neuron & Reflex Arc Pathway",
    chapterNo: 6,
    chapterName: "Control and Coordination",
    category: "Biology Control & Coordination",
    boardMarks: 5,
    boardFrequency: "98% Recurrence (CBSE 2024, 2023, 2021, 2019)",
    ncertFigureRef: "NCERT Class 10 Science, Figures 6.1 & 6.2 (Pages 115, 117)",
    description: "Nerve cell (Neuron) with Dendrite, Cyton (Cell body), Axon, Myelin sheath, Axon ending, Synapse. Reflex arc pathway showing stimulus, receptor, sensory neuron, spinal cord relay neuron, motor neuron, and effector muscle.",
    diagramType: "svg_biological_anatomy",
    labels: [
      { id: "lbl_dendrite", name: "Dendrites", description: "Branching terminals that detect chemical signals and initiate an electrical impulse.", boardSignificance: "First point of impulse reception." },
      { id: "lbl_axon", name: "Axon", description: "Long single cylindrical fibre that conducts electrical impulse away from cell body to terminal.", boardSignificance: "Electrical transmission conduit." },
      { id: "lbl_synapse", name: "Synapse", description: "Microscopic gap between terminal of one neuron and dendrite of next neuron where electrical impulse triggers release of Neurotransmitters (chemical signals).", boardSignificance: "Ensures one-way transmission of nerve signals." },
      { id: "lbl_reflex_path", name: "Reflex Arc", description: "Pathway: Stimulus → Receptor in skin → Sensory neuron → Relay neuron in Spinal Cord → Motor neuron → Effector muscle (causes rapid automatic reaction before brain registers pain).", boardSignificance: "Evolutionary survival mechanism." }
    ],
    markingPoints: [
      "Transmission sequence inside neuron: Dendrite → Cyton → Axon → Axon Ending (+1 Mark).",
      "At synapse, electrical signal is converted into CHEMICAL signal (neurotransmitter), which diffuses across gap to set off electric impulse in next neuron (+2 Marks).",
      "Reflex arc is routed through SPINAL CORD to minimize response latency (+2 Marks)."
    ],
    examinerTraps: [
      "Direction of impulse: Signals travel strictly ONE-WAY across synapse (from axon terminals containing vesicles to dendrite receptors). They CANNOT travel backwards."
    ]
  },

  // ==========================================
  // 11. BIOLOGY REPRODUCTION: FLOWER LS & POLLEN GERMINATION
  // ==========================================
  {
    id: "diag_bio_flower_pollen",
    title: "Longitudinal Section of a Flower & Germination of Pollen on Stigma",
    chapterNo: 7,
    chapterName: "How do Organisms Reproduce?",
    category: "Biology Reproduction",
    boardMarks: 5,
    boardFrequency: "99% Recurrence (CBSE 2024, 2023, 2022, 2020, 2018)",
    ncertFigureRef: "NCERT Class 10 Science, Figures 7.7 & 7.8 (Pages 134, 135)",
    description: "Four whorls of a bisexual flower: Calyx (sepals), Corolla (petals), Androecium / Stamen (Anther + Filament), Gynoecium / Carpel (Stigma + Style + Ovary containing Ovules). Plus growth of pollen tube carrying male germ cells to female germ cell (egg).",
    diagramType: "svg_biological_anatomy",
    labels: [
      { id: "lbl_stamen", name: "Stamen (Male Reproductive Organ)", description: "Consists of Anther (produces yellow pollen grains containing male gametes) and Filament (stalk).", boardSignificance: "Male reproductive organ." },
      { id: "lbl_carpel", name: "Carpel / Pistil (Female Reproductive Organ)", description: "Consists of Stigma (sticky receptive landing surface), Style (slender neck), and Ovary (swollen basal part containing ovules with female gametes).", boardSignificance: "Female reproductive organ." },
      { id: "lbl_pollen_tube", name: "Pollen Tube Growth", description: "Chemotropic growth: Pollen grain germinates on moist stigma, growing a tube down the style to deliver two male nuclei into the embryo sac inside the ovule.", boardSignificance: "Fertilization mechanism." },
      { id: "lbl_post_fert", name: "Post-Fertilization Fate", description: "Zygote → Embryo; Ovule → Seed (hard protective coat); Ovary → Fruit (ripened succulent wall). Petals, sepals, and stamens fall off.", boardSignificance: "High frequency 3-mark board question." }
    ],
    markingPoints: [
      "Flower labeling: Stigma, Style, Ovary, Anther, Filament, Petal, Sepal (+3 Marks).",
      "Pollen germination diagram: Stigma, Pollen grain, Pollen tube, Male germ cell, Ovary, Female germ cell (+2 Marks)."
    ],
    examinerTraps: [
      "Post-fertilization changes: Ovule becomes SEED; Ovary becomes FRUIT. Never mix these two up!"
    ]
  },

  // ==========================================
  // 12. BIOLOGY HEREDITY: MONOHYBRID & DIHYBRID CROSSES
  // ==========================================
  {
    id: "diag_bio_mendel_crosses",
    title: "Mendel's Laws: Monohybrid (3:1) & Dihybrid (9:3:3:1) Crosses",
    chapterNo: 8,
    chapterName: "Heredity and Evolution",
    category: "Biology Heredity",
    boardMarks: 5,
    boardFrequency: "98% Recurrence (CBSE 2024, 2023, 2022, 2020)",
    ncertFigureRef: "NCERT Class 10 Science, Figures 8.2, 8.3 & 8.5 (Pages 144, 145, 147)",
    description: "Punnett square checkerboards for Monohybrid Cross (Height: TT × tt) giving F2 Phenotypic ratio 3:1 and Genotypic ratio 1:2:1. Dihybrid Cross (Round Yellow RRYY × Wrinkled Green rryy) giving 9:3:3:1 ratio. Plus Sex Determination in human beings (XX female × XY male).",
    diagramType: "svg_biological_anatomy",
    labels: [
      { id: "lbl_mono_f1", name: "F1 Generation (Monohybrid)", description: "All progeny are heterozygous Tall (Tt) because Tall trait (T) is DOMINANT over Dwarf trait (t).", boardSignificance: "Law of Dominance." },
      { id: "lbl_mono_f2", name: "F2 Generation (Monohybrid)", description: "Phenotypic ratio = 3 Tall : 1 Dwarf. Genotypic ratio = 1 TT : 2 Tt : 1 tt.", boardSignificance: "Law of Segregation (purity of gametes)." },
      { id: "lbl_dihybrid_ratio", name: "Dihybrid F2 Ratio (9:3:3:1)", description: "9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green.", boardSignificance: "Law of Independent Assortment." },
      { id: "lbl_sex_det", name: "Sex Determination (Humans)", description: "Father produces 50% X sperm and 50% Y sperm. Mother produces only X eggs. Gender of the child is genetically determined ENTIRELY by the father (X sperm → XX Girl; Y sperm → XY Boy).", boardSignificance: "50% statistical probability." }
    ],
    markingPoints: [
      "Monohybrid F2 Punnett Square: TT (1), Tt (2), tt (1) (+2 Marks).",
      "Dihybrid 16-cell checkerboard with parental gametes RY, Ry, rY, ry (+2 Marks).",
      "Sex determination flowchart showing father (XY) and mother (XX) crossing (+1 Mark)."
    ],
    examinerTraps: [
      "Why are mothers falsely blamed for baby girls in society? Scientific fact: The father is solely responsible for the sex of the child because men produce two types of sperms (X and Y), while women produce only X eggs!"
    ]
  }
];

// =========================================================================
// 29 COMPLETE NCERT VISUAL DIAGRAMS VAULT (CROPPED STANDALONE ASSETS)
// Standard: CBSE Board Exam 2026-27 (Code 086)
// =========================================================================

export interface VisualDiagramAsset {
  id: string;
  masterSheetUrl?: string;
  title: string;
  category: "Spherical Mirrors" | "Lenses & Refraction" | "Human Eye & Dispersion" | "Circuits & Magnetism";
  chapterNo: number;
  chapterName: string;
  ncertFigureRef: string;
  boardMarks: number;
  boardFrequency: string;
  imageUrl: string;
  imageAlt: string;
  objectPosition?: string;
  imagePosition?: string;
  natureOfImage?: string;
  keyRule: string;
  examinerAlert: string;
  markingTip: string;
}

export const NCERT_PHYSICS_DIAGRAMS_VAULT: VisualDiagramAsset[] = [
  // --- 1. SPHERICAL MIRRORS (8 DIAGRAMS) ---
  {
    id: "diag_asset_concave_mirror_inf",
    title: "Concave Mirror — Object at Infinity (Focus Image)",
    category: "Spherical Mirrors",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.7(a)",
    boardMarks: 3,
    boardFrequency: "98% Recurrence",
    imageUrl: "/study_material/science/diagrams/concave_mirror_at_infinity.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Concave_mirror_physics_diagram_s_202609051440.jpeg",
    imageAlt: "Ray diagram for concave mirror when object is at infinity",
    objectPosition: "At Infinity",
    imagePosition: "At Principal Focus (F)",
    natureOfImage: "Real, Inverted, Point-sized",
    keyRule: "Parallel incident rays converge at the principal focus F after reflection.",
    examinerAlert: "Arrows on rays are strictly mandatory. Omitting arrows results in 0 marks.",
    markingTip: "1 mark for ray arrows, 1 mark for convergence at F, 1 mark for nature/size."
  },
  {
    id: "diag_asset_concave_mirror_beyond_c",
    title: "Concave Mirror — Object Beyond C",
    category: "Spherical Mirrors",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.7(b)",
    boardMarks: 3,
    boardFrequency: "97% Recurrence",
    imageUrl: "/study_material/science/diagrams/concave_mirror_beyond_c.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Concave_mirror_physics_diagram_s_202609051440.jpeg",
    imageAlt: "Ray diagram for concave mirror when object is beyond C",
    objectPosition: "Beyond C",
    imagePosition: "Between Focus F and Centre of Curvature C",
    natureOfImage: "Real, Inverted, Diminished",
    keyRule: "Ray 1 parallel reflects through F; Ray 2 through C retraces path.",
    examinerAlert: "Principal focus F must be exactly halfway between P and C.",
    markingTip: "Image must be drawn strictly smaller than object."
  },
  {
    id: "diag_asset_concave_mirror_at_c",
    title: "Concave Mirror — Object at C (Benchmark m = -1)",
    category: "Spherical Mirrors",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.7(c)",
    boardMarks: 3,
    boardFrequency: "99% Recurrence",
    imageUrl: "/study_material/science/diagrams/concave_mirror_at_c.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Drawing_concave_mirror_ray_diagrams_202609051442.jpeg",
    imageAlt: "Ray diagram for concave mirror when object is at C",
    objectPosition: "At Centre of Curvature (C)",
    imagePosition: "At Centre of Curvature (C)",
    natureOfImage: "Real, Inverted, Same Size (m = -1)",
    keyRule: "Ray 1 parallel reflects through F; Ray 2 through F reflects parallel.",
    examinerAlert: "Image must be aligned vertically under object at C. Heights must match.",
    markingTip: "Magnification m = -1; hallmark question for radius of curvature."
  },
  {
    id: "diag_asset_concave_mirror_between_c_f",
    title: "Concave Mirror — Object Between C and F",
    category: "Spherical Mirrors",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.7(d)",
    boardMarks: 3,
    boardFrequency: "96% Recurrence",
    imageUrl: "/study_material/science/diagrams/concave_mirror_between_c_and_f.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Drawing_concave_mirror_ray_diagrams_202609051442.jpeg",
    imageAlt: "Ray diagram for concave mirror when object is between C and F",
    objectPosition: "Between C and F",
    imagePosition: "Beyond C",
    natureOfImage: "Real, Inverted, Magnified / Enlarged",
    keyRule: "Conjugate of Case 2: Object between C and F yields image beyond C.",
    examinerAlert: "Arrows must point towards mirror on incidence and away on reflection.",
    markingTip: "Image must clearly be drawn larger than object."
  },
  {
    id: "diag_asset_concave_mirror_at_f",
    title: "Concave Mirror — Object at Focus F (Parallel Searchlight Beam)",
    category: "Spherical Mirrors",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.7(e)",
    boardMarks: 3,
    boardFrequency: "98% Recurrence",
    imageUrl: "/study_material/science/diagrams/concave_mirror_at_f.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Creating_concave_mirror_physics_202609051441.jpeg",
    imageAlt: "Ray diagram for concave mirror when object is at F",
    objectPosition: "At Principal Focus (F)",
    imagePosition: "At Infinity",
    natureOfImage: "Real, Inverted, Highly Enlarged",
    keyRule: "Reflected rays emerge parallel to each other.",
    examinerAlert: "Reflected rays must not converge or diverge in drawing; keep them strictly parallel.",
    markingTip: "Application: Car headlights, searchlights, and torches."
  },
  {
    id: "diag_asset_concave_mirror_between_p_f",
    title: "Concave Mirror — Object Between Pole (P) and Focus (F) [Virtual]",
    category: "Spherical Mirrors",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.7(f)",
    boardMarks: 5,
    boardFrequency: "100% Recurrence (Most tested mirror diagram on CBSE boards)",
    imageUrl: "/study_material/science/diagrams/concave_mirror_between_p_and_f.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Creating_concave_mirror_physics_202609051441.jpeg",
    imageAlt: "Ray diagram for concave mirror when object is between P and F",
    objectPosition: "Between Pole (P) and Focus (F)",
    imagePosition: "Behind the Mirror",
    natureOfImage: "Virtual, Erect, Enlarged (m > +1)",
    keyRule: "Diverging reflected rays produced backward form virtual image behind mirror.",
    examinerAlert: "Lines behind mirror MUST be dashed lines. Solid lines lose 1 full mark.",
    markingTip: "Application: Shaving mirror, dentist examination mirror."
  },
  {
    id: "diag_asset_convex_mirror_inf",
    title: "Convex Mirror — Object at Infinity",
    category: "Spherical Mirrors",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.8(a)",
    boardMarks: 3,
    boardFrequency: "95% Recurrence",
    imageUrl: "/study_material/science/diagrams/convex_mirror_at_infinity.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Convex_mirror_ray_diagrams_202609051442.jpeg",
    imageAlt: "Ray diagram for convex mirror when object is at infinity",
    objectPosition: "At Infinity",
    imagePosition: "At Focus F behind mirror",
    natureOfImage: "Virtual, Erect, Point-sized",
    keyRule: "Parallel rays appear to diverge from focus F behind the mirror.",
    examinerAlert: "Diverging rays in front are solid with arrows; extensions behind are dashed.",
    markingTip: "F and C are strictly behind the reflecting surface."
  },
  {
    id: "diag_asset_convex_mirror_between_inf_p",
    title: "Convex Mirror — Object Anywhere Between Infinity and Pole (Rear-View)",
    category: "Spherical Mirrors",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.8(b)",
    boardMarks: 5,
    boardFrequency: "99% Recurrence",
    imageUrl: "/study_material/science/diagrams/convex_mirror_between_inf_and_pole.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Convex_mirror_ray_diagrams_202609051442.jpeg",
    imageAlt: "Ray diagram for convex mirror when object is between infinity and pole",
    objectPosition: "Between Infinity and Pole",
    imagePosition: "Between Pole P and Focus F behind mirror",
    natureOfImage: "Virtual, Erect, Diminished (0 < m < 1)",
    keyRule: "Ray towards C reflects back; ray parallel diverges as if from F.",
    examinerAlert: "Image is ALWAYS diminished and upright; wide field of view.",
    markingTip: "Reason for vehicle rear-view mirror: erect diminished image + wide field of view."
  },

  // --- 2. LENSES & REFRACTION (9 DIAGRAMS) ---
  {
    id: "diag_asset_glass_slab_refraction",
    title: "Rectangular Glass Slab: Refraction & Lateral Displacement",
    category: "Lenses & Refraction",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.10",
    boardMarks: 5,
    boardFrequency: "98% Recurrence (Board Practical & Theory)",
    imageUrl: "/study_material/science/diagrams/glass_slab_refraction.jpeg",
    imageAlt: "Refraction through a rectangular glass slab showing lateral displacement",
    keyRule: "Emergent ray is parallel to incident ray (angle i = angle e). Ray shifts laterally by distance d.",
    examinerAlert: "Lateral displacement d depends on slab thickness, refractive index, and angle of incidence.",
    markingTip: "Both normals at entrance and exit interfaces must be clearly drawn."
  },
  {
    id: "diag_asset_convex_lens_inf",
    title: "Convex Lens — Object at Infinity (Point Focus)",
    category: "Lenses & Refraction",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.16(a)",
    boardMarks: 3,
    boardFrequency: "95% Recurrence",
    imageUrl: "/study_material/science/diagrams/convex_lens_at_infinity.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Convex_lens_optics_diagram_sheet_202609051445.jpeg",
    imageAlt: "Ray diagram for convex lens with object at infinity",
    objectPosition: "At Infinity",
    imagePosition: "At Focus F2",
    natureOfImage: "Real, Inverted, Point-sized",
    keyRule: "Parallel incident rays refract and converge at focus F2.",
    examinerAlert: "Draw arrows on rays before entering lens and after exiting lens.",
    markingTip: "Objective lens of astronomical telescope."
  },
  {
    id: "diag_asset_convex_lens_beyond_2f1",
    title: "Convex Lens — Object Beyond 2F1",
    category: "Lenses & Refraction",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.16(b)",
    boardMarks: 3,
    boardFrequency: "97% Recurrence",
    imageUrl: "/study_material/science/diagrams/convex_lens_beyond_2f1.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Convex_lens_optics_diagram_sheet_202609051445.jpeg",
    imageAlt: "Ray diagram for convex lens with object beyond 2F1",
    objectPosition: "Beyond 2F1",
    imagePosition: "Between F2 and 2F2",
    natureOfImage: "Real, Inverted, Diminished",
    keyRule: "Ray parallel refracts through F2; ray through optical centre O passes undeviated.",
    examinerAlert: "Ray through O must be drawn straight without bending.",
    markingTip: "Camera lens configuration."
  },
  {
    id: "diag_asset_convex_lens_at_2f1",
    title: "Convex Lens — Object at 2F1 (Benchmark m = -1)",
    category: "Lenses & Refraction",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.16(c)",
    boardMarks: 3,
    boardFrequency: "99% Recurrence",
    imageUrl: "/study_material/science/diagrams/convex_lens_at_2f1.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Creating_convex_lens_ray_diagrams_202609051445.jpeg",
    imageAlt: "Ray diagram for convex lens with object at 2F1",
    objectPosition: "At 2F1",
    imagePosition: "At 2F2",
    natureOfImage: "Real, Inverted, Same Size (m = -1)",
    keyRule: "Object distance u = 2f, image distance v = 2f.",
    examinerAlert: "F1 and 2F1 distances on left must exactly match F2 and 2F2 distances on right.",
    markingTip: "Photocopier 1:1 reproduction setup."
  },
  {
    id: "diag_asset_convex_lens_between_f1_2f1",
    title: "Convex Lens — Object Between F1 and 2F1",
    category: "Lenses & Refraction",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.16(d)",
    boardMarks: 3,
    boardFrequency: "96% Recurrence",
    imageUrl: "/study_material/science/diagrams/convex_lens_between_f1_and_2f1.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Creating_convex_lens_ray_diagrams_202609051445.jpeg",
    imageAlt: "Ray diagram for convex lens with object between F1 and 2F1",
    objectPosition: "Between F1 and 2F1",
    imagePosition: "Beyond 2F2",
    natureOfImage: "Real, Inverted, Magnified",
    keyRule: "Ray through optical centre O and ray through F2 intersect beyond 2F2.",
    examinerAlert: "Image must clearly be drawn larger than object.",
    markingTip: "Cinema film projector lens."
  },
  {
    id: "diag_asset_convex_lens_at_f1",
    title: "Convex Lens — Object at Focus F1 (Parallel Beam)",
    category: "Lenses & Refraction",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.16(e)",
    boardMarks: 3,
    boardFrequency: "96% Recurrence",
    imageUrl: "/study_material/science/diagrams/convex_lens_at_f1.jpeg",
    imageAlt: "Ray diagram for convex lens with object at F1",
    objectPosition: "At Focus F1",
    imagePosition: "At Infinity",
    natureOfImage: "Real, Inverted, Highly Enlarged",
    keyRule: "Refracted rays emerge parallel to each other.",
    examinerAlert: "Keep refracted rays strictly parallel in your drawing.",
    markingTip: "Collimator lens in optical spectrometers."
  },
  {
    id: "diag_asset_convex_lens_between_o_f1",
    title: "Convex Lens — Object Between O and F1 (Simple Microscope / Magnifier)",
    category: "Lenses & Refraction",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.16(f)",
    boardMarks: 5,
    boardFrequency: "100% Recurrence (Most tested lens diagram on CBSE boards)",
    imageUrl: "/study_material/science/diagrams/convex_lens_between_o_and_f1.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Creating_convex_lens_ray_diagrams_202609051445.jpeg",
    imageAlt: "Ray diagram for convex lens with object between O and F1",
    objectPosition: "Between Optical Centre O and Focus F1",
    imagePosition: "On the same side as object (behind object)",
    natureOfImage: "Virtual, Erect, Magnified (m > +1)",
    keyRule: "Divergent refracted rays extended backwards intersect on same side.",
    examinerAlert: "Extended rays and virtual image MUST be dashed lines!",
    markingTip: "Magnifying glass / watchmaker lens."
  },
  {
    id: "diag_asset_concave_lens_inf",
    title: "Concave Lens — Object at Infinity (Virtual Point Focus)",
    category: "Lenses & Refraction",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.17(a)",
    boardMarks: 3,
    boardFrequency: "95% Recurrence",
    imageUrl: "/study_material/science/diagrams/concave_lens_at_infinity.jpeg",
    imageAlt: "Ray diagram for concave lens with object at infinity",
    objectPosition: "At Infinity",
    imagePosition: "At Focus F1 on same side",
    natureOfImage: "Virtual, Erect, Highly Diminished",
    keyRule: "Parallel rays diverge; backward extensions meet at F1.",
    examinerAlert: "Diverging rays in front; dashed backward convergence.",
    markingTip: "Focal length f is negative for concave lens."
  },
  {
    id: "diag_asset_concave_lens_between_inf_o",
    title: "Concave Lens — Object Between Infinity and Optical Centre",
    category: "Lenses & Refraction",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    ncertFigureRef: "NCERT Class 10 Fig 9.17(b)",
    boardMarks: 5,
    boardFrequency: "99% Recurrence (Myopia correction lens)",
    imageUrl: "/study_material/science/diagrams/concave_lens_between_inf_and_o.jpeg",
    imageAlt: "Ray diagram for concave lens with object between infinity and O",
    objectPosition: "Between Infinity and O",
    imagePosition: "Between Focus F1 and Optical Centre O",
    natureOfImage: "Virtual, Erect, Diminished (0 < m < 1)",
    keyRule: "Always produces virtual, erect, diminished image regardless of distance.",
    examinerAlert: "Image is always between F1 and O, never beyond F1.",
    markingTip: "Spectacles for short-sightedness (myopia)."
  },

  // --- 3. HUMAN EYE & DISPERSION (7 DIAGRAMS) ---
  {
    id: "diag_asset_anatomy_human_eye",
    title: "Anatomy of the Human Eye (NCERT Master Diagram)",
    category: "Human Eye & Dispersion",
    chapterNo: 10,
    chapterName: "The Human Eye and the Colourful World",
    ncertFigureRef: "NCERT Class 10 Fig 10.1",
    boardMarks: 5,
    boardFrequency: "98% Recurrence",
    imageUrl: "/study_material/science/diagrams/anatomy_of_human_eye.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Concave_lens_and_eye_anatomy_202609051450.jpeg",
    imageAlt: "Sectional diagram of human eye anatomy",
    keyRule: "Cornea, Iris, Pupil, Crystalline Lens, Ciliary Muscles, Retina, Optic Nerve.",
    examinerAlert: "Cornea provides most refraction. Ciliary muscles alter lens curvature (power of accommodation).",
    markingTip: "Retina contains light-sensitive rods (intensity) and cones (colour)."
  },
  {
    id: "diag_asset_myopia_correction",
    title: "Myopia (Near-Sightedness): Defective Eye & Concave Lens Correction",
    category: "Human Eye & Dispersion",
    chapterNo: 10,
    chapterName: "The Human Eye and the Colourful World",
    ncertFigureRef: "NCERT Class 10 Fig 10.2(a, b, c)",
    boardMarks: 5,
    boardFrequency: "100% Recurrence (CBSE 2024, 2023, 2022, 2020)",
    imageUrl: "/study_material/science/diagrams/myopia_defects_and_correction.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/CBSE_physics_diagram_vision_defects_202609051451.jpeg",
    imageAlt: "Myopia defects and correction ray diagrams",
    keyRule: "Causes: (i) Excessive lens curvature, (ii) Eyeball elongation. Image forms in front of retina.",
    examinerAlert: "Correction requires CONCAVE lens of focal length equal to far point distance (P = -1/f).",
    markingTip: "Draw all 3 stages: far point, defective image in front of retina, and corrected image on retina."
  },
  {
    id: "diag_asset_hypermetropia_correction",
    title: "Hypermetropia (Far-Sightedness): Defective Eye & Convex Lens Correction",
    category: "Human Eye & Dispersion",
    chapterNo: 10,
    chapterName: "The Human Eye and the Colourful World",
    ncertFigureRef: "NCERT Class 10 Fig 10.3(a, b, c)",
    boardMarks: 5,
    boardFrequency: "99% Recurrence",
    imageUrl: "/study_material/science/diagrams/hypermetropia_defects_and_correction.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/CBSE_physics_diagram_vision_defects_202609051451.jpeg",
    imageAlt: "Hypermetropia defects and correction ray diagrams",
    keyRule: "Causes: (i) Focal length too long, (ii) Eyeball too small. Image forms behind retina.",
    examinerAlert: "Correction requires CONVEX lens to provide additional convergence.",
    markingTip: "Near point shifts beyond 25 cm (e.g. 1 m). Convex lens forms virtual image at near point."
  },
  {
    id: "diag_asset_prism_refraction",
    title: "Refraction of Light through Triangular Glass Prism & Angle of Deviation",
    category: "Human Eye & Dispersion",
    chapterNo: 10,
    chapterName: "The Human Eye and the Colourful World",
    ncertFigureRef: "NCERT Class 10 Fig 10.4",
    boardMarks: 5,
    boardFrequency: "99% Recurrence",
    imageUrl: "/study_material/science/diagrams/prism_refraction.jpeg",
    imageAlt: "Refraction through glass prism showing angle of deviation",
    keyRule: "i = Angle of incidence, r = Angle of refraction, e = Emergence, A = Prism angle, D = Deviation. A + D = i + e.",
    examinerAlert: "Draw normals N-N' and M-M' perpendicular to refracting faces AB and AC.",
    markingTip: "Angle of deviation D is between incident ray extended forward and emergent ray extended backward."
  },
  {
    id: "diag_asset_prism_dispersion",
    title: "Dispersion of White Light by a Glass Prism (VIBGYOR Spectrum)",
    category: "Human Eye & Dispersion",
    chapterNo: 10,
    chapterName: "The Human Eye and the Colourful World",
    ncertFigureRef: "NCERT Class 10 Fig 10.5",
    boardMarks: 3,
    boardFrequency: "98% Recurrence",
    imageUrl: "/study_material/science/diagrams/prism_dispersion.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Creating_physics_diagram_sheet_202609051451.jpeg",
    imageAlt: "Dispersion of white light by prism into VIBGYOR spectrum",
    keyRule: "White light splits into seven constituent colours. Red has longest wavelength, bends least. Violet bends most.",
    examinerAlert: "RED is strictly on TOP, VIOLET is strictly at BOTTOM. Reversing order loses full marks!",
    markingTip: "Cause: Different colours travel with different speeds in glass medium."
  },
  {
    id: "diag_asset_spectrum_recombination",
    title: "Recombination of Spectrum of White Light (Newton's Inverted Prism)",
    category: "Human Eye & Dispersion",
    chapterNo: 10,
    chapterName: "The Human Eye and the Colourful World",
    ncertFigureRef: "NCERT Class 10 Fig 10.6",
    boardMarks: 5,
    boardFrequency: "98% Recurrence",
    imageUrl: "/study_material/science/diagrams/spectrum_recombination.jpeg",
    imageAlt: "Recombination of spectrum using inverted second prism",
    keyRule: "An identical inverted prism placed next to first prism recombines 7 colours back into white light.",
    examinerAlert: "Proves that sunlight is made of seven colours, and prism merely separates them.",
    markingTip: "Base of second prism must be inverted (opposite to first prism)."
  },
  {
    id: "diag_asset_rainbow_atmospheric",
    title: "Rainbow Formation & Atmospheric Refraction Phenomena",
    category: "Human Eye & Dispersion",
    chapterNo: 10,
    chapterName: "The Human Eye and the Colourful World",
    ncertFigureRef: "NCERT Class 10 Fig 10.8 & 10.10",
    boardMarks: 5,
    boardFrequency: "99% Recurrence",
    imageUrl: "/study_material/science/diagrams/rainbow_formation.jpeg",
    imageAlt: "Rainbow formation in water droplet and atmospheric refraction",
    keyRule: "Three optical steps inside raindrop: (1) Refraction and dispersion on entry, (2) Total internal reflection at back surface, (3) Refraction on exiting droplet.",
    examinerAlert: "Sun is always behind observer; rainbow forms in opposite direction.",
    markingTip: "Water droplets act as tiny spherical prisms."
  },

  // --- 4. CIRCUITS & MAGNETISM (5 DIAGRAMS) ---
  {
    id: "diag_asset_atmospheric_refraction",
    title: "Atmospheric Refraction: Advance Sunrise & Delayed Sunset (4 Min Day Extension)",
    category: "Human Eye & Dispersion",
    chapterNo: 10,
    chapterName: "The Human Eye and the Colourful World",
    ncertFigureRef: "NCERT Class 10 Fig 10.9 & 10.10",
    boardMarks: 5,
    boardFrequency: "98% Recurrence",
    imageUrl: "/study_material/science/diagrams/atmospheric_refraction.jpeg",
    imageAlt: "Atmospheric refraction causing advance sunrise and delayed sunset",
    keyRule: "Continuous bending towards normal in atmosphere of increasing optical density extends apparent daytime by 4 minutes.",
    examinerAlert: "Advance sunrise is due to REFRACTION; red colour at sunset is due to SCATTERING.",
    markingTip: "Apparent position of Sun is above horizon while actual position is below."
  },
  {
    id: "diag_asset_ohms_law_circuit",
    title: "Ohm's Law Experimental Verification Circuit",
    category: "Circuits & Magnetism",
    chapterNo: 11,
    chapterName: "Electricity",
    ncertFigureRef: "NCERT Class 10 Fig 11.2",
    boardMarks: 5,
    boardFrequency: "100% Recurrence (Board Theory + Practical Exam)",
    imageUrl: "/study_material/science/diagrams/ohms_law_circuit.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/CBSE_Physics_diagram_sheet_202609051452.jpeg",
    imageAlt: "Circuit diagram for verifying Ohm's Law",
    keyRule: "Ammeter in SERIES with resistor (low resistance); Voltmeter in PARALLEL across resistor (high resistance); Rheostat in series.",
    examinerAlert: "Ensure positive (+) terminal of battery connects to positive (+) terminals of ammeter and voltmeter.",
    markingTip: "V vs I graph is a straight line passing through origin (slope = R)."
  },
  {
    id: "diag_asset_resistors_in_series",
    title: "Resistors in Series Circuit: Current Invariance & Potential Division",
    category: "Circuits & Magnetism",
    chapterNo: 11,
    chapterName: "Electricity",
    ncertFigureRef: "NCERT Class 10 Fig 11.6",
    boardMarks: 5,
    boardFrequency: "98% Recurrence",
    imageUrl: "/study_material/science/diagrams/resistors_in_series.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Resistors_series_parallel_circui_202609051452.jpeg",
    imageAlt: "Circuit diagram for three resistors connected in series",
    keyRule: "Current I is identical through every resistor. Total V = V1 + V2 + V3. Equivalent Resistance Rs = R1 + R2 + R3.",
    examinerAlert: "Draw separate voltmeters across each resistor and one ammeter in series.",
    markingTip: "Derivation starts from V = V1 + V2 + V3."
  },
  {
    id: "diag_asset_resistors_in_parallel",
    title: "Resistors in Parallel Circuit: Voltage Invariance & Current Division",
    category: "Circuits & Magnetism",
    chapterNo: 11,
    chapterName: "Electricity",
    ncertFigureRef: "NCERT Class 10 Fig 11.7",
    boardMarks: 5,
    boardFrequency: "98% Recurrence",
    imageUrl: "/study_material/science/diagrams/resistors_in_parallel.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Resistors_series_parallel_circui_202609051452.jpeg",
    imageAlt: "Circuit diagram for three resistors connected in parallel",
    keyRule: "Potential difference V is identical across each branch. Total I = I1 + I2 + I3. 1/Rp = 1/R1 + 1/R2 + 1/R3.",
    examinerAlert: "Rp is always LESS than the smallest individual resistance in parallel combination.",
    markingTip: "Domestic appliances are wired in parallel so each receives full 220 V."
  },
  {
    id: "diag_asset_domestic_electric_circuit",
    title: "Domestic Electric Circuit Schematic: Live, Neutral, Earth & Consumer Board",
    category: "Circuits & Magnetism",
    chapterNo: 12,
    chapterName: "Magnetic Effects of Electric Current",
    ncertFigureRef: "NCERT Class 10 Fig 12.14",
    boardMarks: 5,
    boardFrequency: "99% Recurrence",
    imageUrl: "/study_material/science/diagrams/domestic_electric_circuit.jpeg",
    masterSheetUrl: "/study_material/science/master_sheets/Create_domestic_electric_circuit_202609051452.jpeg",
    imageAlt: "Schematic diagram of one of the common domestic circuits",
    keyRule: "Live wire (Red/Brown, 220 V), Neutral wire (Black/Blue, 0 V), Earth wire (Green/Yellow). Electricity meter, main fuse, distribution box, appliances in parallel.",
    examinerAlert: "Switches and fuses MUST always be connected in the LIVE wire, never in the neutral wire.",
    markingTip: "Earth wire provides low-resistance leakage path to ground, preventing fatal electric shocks."
  }
];

// =========================================================================
// 15 AUTHENTIC MASTER STUDY SHEETS (HIGH-RES ORIGINAL VAULT MATERIALS)
// Direct photo sheets provided for Class 10 Board Revision
// =========================================================================

export interface MasterPhotoSheet {
  id: string;
  title: string;
  category: "Spherical Mirrors" | "Lenses & Refraction" | "Human Eye & Dispersion" | "Circuits & Electricity";
  chapterNo: number;
  chapterName: string;
  sheetUrl: string;
  description: string;
  containedDiagrams: string[];
}

export const SCIENCE_MASTER_PHOTO_SHEETS: MasterPhotoSheet[] = [
  {
    id: "sheet_concave_mirror_1",
    title: "Concave Mirror Master Sheet I (Infinity & Beyond C)",
    category: "Spherical Mirrors",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    sheetUrl: "/study_material/science/master_sheets/Concave_mirror_physics_diagram_s_202609051440.jpeg",
    description: "Complete dual-panel ray diagrams for Concave Mirror: Object at infinity converging at F, and Object beyond C with image between F and C.",
    containedDiagrams: ["Object at Infinity", "Object Beyond C"]
  },
  {
    id: "sheet_concave_mirror_2",
    title: "Concave Mirror Master Sheet II (At Focus F & Between P and F)",
    category: "Spherical Mirrors",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    sheetUrl: "/study_material/science/master_sheets/Creating_concave_mirror_physics_202609051441.jpeg",
    description: "Full ray construction for Object at Focus F (image at infinity) and Case 6 virtual erect magnified image behind mirror (shaving/dentist mirror).",
    containedDiagrams: ["Object at Focus F", "Object Between P and F (Dentist Mirror)"]
  },
  {
    id: "sheet_concave_mirror_3",
    title: "Concave Mirror Master Sheet III (At C & Between C and F)",
    category: "Spherical Mirrors",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    sheetUrl: "/study_material/science/master_sheets/Drawing_concave_mirror_ray_diagrams_202609051442.jpeg",
    description: "Crucial benchmark case: Object at C (m = -1, same size, inverted) and Object between C and F (real, magnified image beyond C).",
    containedDiagrams: ["Object at C (m = -1)", "Object Between C and F"]
  },
  {
    id: "sheet_convex_mirror",
    title: "Convex Mirror Ray Diagrams Master Sheet (Rear-View Optics)",
    category: "Spherical Mirrors",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    sheetUrl: "/study_material/science/master_sheets/Convex_mirror_ray_diagrams_202609051442.jpeg",
    description: "Both standard convex mirror cases: Object at infinity forming point image at focus, and Object between infinity and pole forming diminished virtual image.",
    containedDiagrams: ["Object at Infinity", "Object Between Infinity and Pole (Rear-view Mirror)"]
  },
  {
    id: "sheet_convex_lens_1",
    title: "Convex Lens Master Sheet I (Infinity & Beyond 2F1)",
    category: "Lenses & Refraction",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    sheetUrl: "/study_material/science/master_sheets/Convex_lens_optics_diagram_sheet_202609051445.jpeg",
    description: "High-resolution ray diagrams for convex lens refraction: Object at infinity focusing at 2F2, and Object beyond 2F1 forming diminished image between F2 and 2F2.",
    containedDiagrams: ["Object at Infinity", "Object Beyond 2F1"]
  },
  {
    id: "sheet_convex_lens_2",
    title: "Convex Lens Master Sheet II (At 2F1, Between F1-2F1, & Magnifier)",
    category: "Lenses & Refraction",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    sheetUrl: "/study_material/science/master_sheets/Creating_convex_lens_ray_diagrams_202609051445.jpeg",
    description: "Essential cases: Object at 2F1 (m = -1), Object between F1 and 2F1 (projector), and Case 6 Object between Optical Centre O and F1 (Magnifying Glass).",
    containedDiagrams: ["Object at 2F1", "Object Between F1 and 2F1", "Magnifying Glass (Virtual & Erect)"]
  },
  {
    id: "sheet_concave_lens_eye",
    title: "Concave Lens & Eye Anatomy Master Sheet",
    category: "Lenses & Refraction",
    chapterNo: 10,
    chapterName: "The Human Eye and Colourful World",
    sheetUrl: "/study_material/science/master_sheets/Concave_lens_and_eye_anatomy_202609051450.jpeg",
    description: "Concave diverging lens ray optics combined with detailed cross-sectional anatomy of the Human Eye (Cornea, Iris, Pupil, Ciliary muscles, Retina, Optic nerve).",
    containedDiagrams: ["Concave Lens Ray Divergence", "Anatomy of Human Eye"]
  },
  {
    id: "sheet_vision_defects",
    title: "Vision Defects & Corrections Master Sheet (Myopia & Hypermetropia)",
    category: "Human Eye & Dispersion",
    chapterNo: 10,
    chapterName: "The Human Eye and Colourful World",
    sheetUrl: "/study_material/science/master_sheets/CBSE_physics_diagram_vision_defects_202609051451.jpeg",
    description: "Compulsory 5-mark board diagram: Normal eye, Myopic eye (front of retina) + Concave correction; Hypermetropic eye (behind retina) + Convex correction.",
    containedDiagrams: ["Myopia (Defective + Corrected)", "Hypermetropia (Defective + Corrected)"]
  },
  {
    id: "sheet_prism_refraction",
    title: "Triangular Glass Prism & Spectrum Master Sheet",
    category: "Human Eye & Dispersion",
    chapterNo: 10,
    chapterName: "The Human Eye and Colourful World",
    sheetUrl: "/study_material/science/master_sheets/Create_CBSE_Physics_diagram_sheet_202609051451.jpeg",
    description: "Refraction through triangular prism showing Angle of Incidence (i), Emergence (e), and Deviation (D), alongside Newton's inverted prism recombination.",
    containedDiagrams: ["Prism Angle of Deviation (D)", "Newton's Recombination of White Light"]
  },
  {
    id: "sheet_atmospheric_refraction",
    title: "Atmospheric Optics & Dispersion Master Sheet",
    category: "Human Eye & Dispersion",
    chapterNo: 10,
    chapterName: "The Human Eye and Colourful World",
    sheetUrl: "/study_material/science/master_sheets/Creating_physics_diagram_sheet_202609051451.jpeg",
    description: "Atmospheric refraction (apparent star position, delayed sunset & early sunrise) and internal reflection inside a raindrop forming a Rainbow.",
    containedDiagrams: ["Rainbow Formation (Dispersion + TIR)", "Atmospheric Refraction & Twinkling"]
  },
  {
    id: "sheet_ohms_law",
    title: "Ohm's Law Experimental Circuit & V-I Graph Master Sheet",
    category: "Circuits & Electricity",
    chapterNo: 11,
    chapterName: "Electricity",
    sheetUrl: "/study_material/science/master_sheets/CBSE_Physics_diagram_sheet_202609051452.jpeg",
    description: "Official NCERT circuit diagram for Ohm's Law verification: Ammeter in series, Voltmeter in parallel across Nichrome wire, Rheostat, and linear V-I slope.",
    containedDiagrams: ["Ohm's Law Verification Circuit", "Linear V-I Characteristic Graph"]
  },
  {
    id: "sheet_resistors_combination",
    title: "Resistors in Series & Parallel Master Sheet",
    category: "Circuits & Electricity",
    chapterNo: 11,
    chapterName: "Electricity",
    sheetUrl: "/study_material/science/master_sheets/Resistors_series_parallel_circui_202609051452.jpeg",
    description: "Side-by-side comparative circuit layouts: Series combination (Rs = R1+R2+R3, same current I) vs Parallel combination (1/Rp = 1/R1+1/R2+1/R3, same voltage V).",
    containedDiagrams: ["Series Resistors Circuit", "Parallel Resistors Circuit"]
  },
  {
    id: "sheet_domestic_circuit",
    title: "Domestic Electric Wiring Circuit Master Sheet",
    category: "Circuits & Electricity",
    chapterNo: 12,
    chapterName: "Magnetic Effects of Electric Current",
    sheetUrl: "/study_material/science/master_sheets/Create_domestic_electric_circuit_202609051452.jpeg",
    description: "Standard domestic 220V AC wiring showing Live Wire (red), Neutral Wire (black), Earth Wire (green), Electricity Meter, Main Fuse, and parallel appliance branches.",
    containedDiagrams: ["Domestic Electric Circuit (Live, Neutral, Earth)"]
  },
  {
    id: "sheet_physics_ray_diagrams_overview",
    title: "Convex & Concave Lens Ray Tracing Overview Master Sheet",
    category: "Lenses & Refraction",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    sheetUrl: "/study_material/science/master_sheets/Create_physics_ray_diagrams_sheet_202609051445.jpeg",
    description: "Comprehensive multi-panel ray tracing study sheet detailing focal points, principal axis rules, and image formation for spherical lenses.",
    containedDiagrams: ["Convex Lens Ray Rules", "Image Formation at F and 2F", "Diverging Lens Ray Behavior"]
  },
  {
    id: "sheet_optics_educational_reference",
    title: "Optics & Sign Convention Study Sheet",
    category: "Spherical Mirrors",
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    sheetUrl: "/study_material/science/master_sheets/Physics_educational_diagram_shee_202609051445.jpeg",
    description: "Visual textbook study guide detailing the Cartesian sign convention, focal length polarity (+ for convex, - for concave), and mirror formula verification.",
    containedDiagrams: ["Cartesian Sign Convention", "Mirror Formula Visual Reference", "Magnification Rules"]
  }
];



// =========================================================================
// 100% COMPREHENSIVE NCERT BIOLOGY DIAGRAMS VAULT (10 HIGH-YIELD MASTER DIAGRAMS)
// Strictly Aligned with CBSE Board 2026-27 Examination Specifications (Code 086)
// =========================================================================

export interface BiologyDiagramItem {
  id: string;
  title: string;
  category: "Digestive & Nutrition" | "Respiration & Circulation" | "Excretion & Nephron" | "Nervous & Control" | "Reproduction & Flowers" | "Genetics & Heredity";
  chapterNo: number;
  chapterName: string;
  ncertFigureRef: string;
  boardMarks: number;
  boardFrequency: string;
  essentialLabels: { name: string; function: string; examTrap?: string }[];
  workingMechanism: string;
  drawingSteps: string[];
  markingScheme: string[];
  commonMistakes: string[];
}

export const NCERT_BIOLOGY_DIAGRAMS_VAULT: BiologyDiagramItem[] = [
  {
    id: "bio_alimentary_canal",
    title: "Human Alimentary Canal (Human Digestive System)",
    category: "Digestive & Nutrition",
    chapterNo: 5,
    chapterName: "Life Processes",
    ncertFigureRef: "NCERT Class 10 Science, Figure 5.6 (Page 86)",
    boardMarks: 5,
    boardFrequency: "98% Board Frequency (CBSE 2024, 2023, 2020, 2019, 2018)",
    essentialLabels: [
      { name: "Mouth / Buccal Cavity", function: "Ingestion of food; teeth masticate, salivary amylase breaks starch into maltose.", examTrap: "Do not forget Salivary Glands." },
      { name: "Oesophagus (Food Pipe)", function: "Transports food bolus to stomach via rhythmic contraction waves (peristalsis).", examTrap: "No digestion occurs in oesophagus." },
      { name: "Stomach", function: "Secretes gastric juice containing HCl (acidic pH 1.8), Pepsin (digests proteins), and Mucus (protects lining).", examTrap: "Sphincter muscles regulate food exit to duodenum." },
      { name: "Liver & Gall Bladder", function: "Liver secretes bile; gall bladder stores and concentrates bile. Bile salts emulsify large fat globules into smaller droplets.", examTrap: "Bile contains NO digestive enzymes, only bile salts & pigments." },
      { name: "Pancreas", function: "Secretes pancreatic juice containing Trypsin (proteins), Lipase (emulsified fats), and Amylase (carbohydrates).", examTrap: "Pancreas operates under alkaline pH created by bile." },
      { name: "Small Intestine", function: "Site of complete digestion of carbs, fats, and proteins. Finger-like villi maximize surface area for nutrient absorption into capillaries.", examTrap: "Longest part of alimentary canal (approx. 6m), coiled in abdomen." },
      { name: "Large Intestine & Anus", function: "Absorbs water from unabsorbed food residue; rectum stores faeces; anal sphincter regulates egestion.", examTrap: "Anal sphincter failure causes uncontrolled defecation." }
    ],
    workingMechanism: "Food is chewed and mixed with saliva (ptyalin/amylase). Swallowed through peristalsis into stomach where HCl kills microbes and activates pepsinogen to pepsin. Chyme enters duodenum where bile from liver neutralizes acid and emulsifies fats. Pancreatic trypsin and lipase digest proteins and fats. Intestinal enzymes complete digestion into glucose, amino acids, and fatty acids/glycerol. Villi absorb nutrients into blood and lymph (lacteals).",
    drawingSteps: [
      "1. Draw J-shaped stomach on left side below diaphragm.",
      "2. Add triangular liver on upper right with small gall bladder sac below it.",
      "3. Sketch leaf-shaped pancreas in the C-loop of duodenum.",
      "4. Draw tightly coiled small intestine in center enclosed by frame of large intestine (colon).",
      "5. Terminate with rectum and anal opening at bottom; add clear label pointers with ruler."
    ],
    markingScheme: [
      "Correct anatomical layout & organ proportions (+2 Marks)",
      "Accurate labeling of Stomach, Liver, Pancreas, Small & Large Intestines (+2 Marks)",
      "Directional arrows or brief functional note (+1 Mark)"
    ],
    commonMistakes: [
      "Drawing liver on left side instead of right side of human body.",
      "Connecting bile duct directly to stomach instead of duodenum (small intestine).",
      "Confusing bile production (Liver) with bile storage (Gall Bladder)."
    ]
  },
  {
    id: "bio_respiratory_system",
    title: "Human Respiratory System",
    category: "Respiration & Circulation",
    chapterNo: 5,
    chapterName: "Life Processes",
    ncertFigureRef: "NCERT Class 10 Science, Figure 5.9 (Page 90)",
    boardMarks: 5,
    boardFrequency: "92% Board Frequency (CBSE 2024, 2022 Term 2, 2020, 2017)",
    essentialLabels: [
      { name: "Nostrils & Nasal Passage", function: "Air intake; fine hairs and mucus filter dust and warm the incoming air." },
      { name: "Pharynx & Larynx", function: "Common passage for air & food; larynx (voice box) houses vocal cords; epiglottis prevents food choking." },
      { name: "Trachea (Windpipe)", function: "Passes air to bronchi; supported by C-shaped cartilaginous rings.", examTrap: "Rings of cartilage prevent collapse of trachea when air is absent." },
      { name: "Bronchi & Bronchioles", function: "Trachea bifurcates into left and right primary bronchi, subdividing into tree-like network of bronchioles." },
      { name: "Alveoli (Alveolar Sacs)", function: "Balloon-like structures with monolayer thin walls and extensive capillary network for diffusion of O2 and CO2.", examTrap: "Extensive surface area (approx. 80 m²) maximizes gas exchange." },
      { name: "Diaphragm & Rib Cage", function: "Muscular floor of thoracic cavity; contracts and flattens during inhalation, relaxing dome-shaped during exhalation." }
    ],
    workingMechanism: "Inhalation: Diaphragm flattens and rib cage lifts outward, increasing chest cavity volume, reducing pressure so air rushes into lungs. Exhalation: Diaphragm relaxes upward into dome shape, ribs descend, reducing volume and forcing air out. In alveoli, O2 diffuses across thin alveolar-capillary membrane into blood binding to haemoglobin, while CO2 in blood plasma diffuses out into alveolar air.",
    drawingSteps: [
      "1. Draw trachea with parallel lines and visible C-shaped rings of cartilage.",
      "2. Fork trachea into two bronchi entering left and right lung lobes.",
      "3. Draw lung contours (left lung slightly smaller with cardiac notch).",
      "4. Branch bronchioles like trees ending in grape-like alveolar clusters.",
      "5. Draw curved diaphragm base at bottom of lungs."
    ],
    markingScheme: [
      "Trachea with rings of cartilage and branching bronchi (+1.5 Marks)",
      "Lobes of lungs with alveolar sac magnification (+1.5 Marks)",
      "Diaphragm and correct labeling of 4 key organs (+2 Marks)"
    ],
    commonMistakes: [
      "Omitting C-shaped rings of cartilage on trachea.",
      "Drawing lungs as empty balloons without internal bronchiole branching.",
      "Drawing diaphragm flat during exhalation (it must be dome-shaped)."
    ]
  },
  {
    id: "bio_heart_double_circulation",
    title: "Sectional View of Human Heart & Schematic Double Circulation",
    category: "Respiration & Circulation",
    chapterNo: 5,
    chapterName: "Life Processes",
    ncertFigureRef: "NCERT Class 10 Science, Figure 5.10 & 5.11 (Page 91-93)",
    boardMarks: 5,
    boardFrequency: "99% Board Frequency (CBSE 2024, 2023, 2022, 2020, 2019, 2018)",
    essentialLabels: [
      { name: "Right Atrium", function: "Receives deoxygenated blood from upper and lower body tissues via Vena Cava.", examTrap: "Thinner muscular wall than ventricles." },
      { name: "Right Ventricle", function: "Pumps deoxygenated blood to lungs via Pulmonary Artery.", examTrap: "Pumps to nearby lungs, so wall is thinner than left ventricle." },
      { name: "Left Atrium", function: "Receives oxygenated blood returning from lungs via Pulmonary Veins." },
      { name: "Left Ventricle", function: "Pumps oxygenated blood to the entire body at high hydrostatic pressure via the Systemic Aorta.", examTrap: "Has the thickest muscular wall in the entire heart." },
      { name: "Interventricular Septum", function: "Complete muscular dividing wall preventing mixing of oxygen-rich and carbon dioxide-rich blood.", examTrap: "Allows high energy efficiency needed for warm-blooded birds & mammals." },
      { name: "Atrioventricular Valves (Tricuspid & Bicuspid)", function: "Flaps that ensure unidirectional blood flow from atria to ventricles and prevent backflow during systole." },
      { name: "Pulmonary Artery & Aorta", function: "Pulmonary artery carries deoxygenated blood; Aorta carries oxygenated blood under highest systemic pressure." }
    ],
    workingMechanism: "Double Circulation: Blood passes through the heart TWICE during each complete cycle. 1. Pulmonary Circulation: Deoxygenated blood from Right Ventricle → Pulmonary Artery → Lungs (oxygenated) → Pulmonary Vein → Left Atrium. 2. Systemic Circulation: Oxygenated blood from Left Ventricle → Aorta → Body Organs → Vena Cava (deoxygenated) → Right Atrium. Complete separation ensures maximum oxygen delivery to meet high metabolic demands.",
    drawingSteps: [
      "1. Draw outer muscular contour with a pointed apex tilted to the left.",
      "2. Draw central dividing septum separating right and left halves.",
      "3. Divide each side into upper atrium and lower ventricle with one-way cuspid valves.",
      "4. Draw emerging vessels: Pulmonary Artery from RV crossing behind Aorta from LV.",
      "5. Show Vena Cava entering RA and 4 Pulmonary Veins entering LA; use directional blood flow arrows."
    ],
    markingScheme: [
      "Clear 4-chambered separation with interventricular septum (+2 Marks)",
      "Thick left ventricular wall correctly distinguished from right (+1 Mark)",
      "Accurate labeling of 4 chambers + Aorta + Vena Cava + Valves (+2 Marks)"
    ],
    commonMistakes: [
      "Reversing left and right: In anatomical diagrams, the viewer's LEFT is the heart's RIGHT.",
      "Drawing pulmonary artery with oxygenated blood (it carries DEOXYGENATED blood).",
      "Making ventricle walls thin like atria (ventricles must have thick muscular walls)."
    ]
  },
  {
    id: "bio_excretion_nephron",
    title: "Excretory System in Human Beings & Structure of a Nephron",
    category: "Excretion & Nephron",
    chapterNo: 5,
    chapterName: "Life Processes",
    ncertFigureRef: "NCERT Class 10 Science, Figure 5.13 & 5.14 (Page 96-97)",
    boardMarks: 5,
    boardFrequency: "97% Board Frequency (CBSE 2024, 2023, 2020, 2019, 2018)",
    essentialLabels: [
      { name: "Kidneys (Left & Right)", function: "Bean-shaped retroperitoneal organs; filter urea, uric acid, and excess salts from blood." },
      { name: "Renal Artery & Renal Vein", function: "Renal artery brings oxygenated blood containing nitrogenous wastes; Renal vein carries cleaned blood away." },
      { name: "Ureters", function: "Muscular tubes carrying urine drops from kidneys to urinary bladder via peristalsis." },
      { name: "Urinary Bladder & Urethra", function: "Muscular reservoir under nervous control for storing urine; urethra expels urine out." },
      { name: "Glomerulus & Bowman's Capsule (Nephron)", function: "Tuft of blood capillaries enclosed by cup-shaped capsule; site of high-pressure Ultrafiltration.", examTrap: "Proteins and blood cells do NOT pass into filtrate." },
      { name: "Tubular Part & Loop of Henle", function: "Selective reabsorption of useful substances: glucose, amino acids, salts, and major portion of water." },
      { name: "Collecting Duct", function: "Gathers concentrated urine from multiple nephrons and drains into renal pelvis and ureter." }
    ],
    workingMechanism: "1. Ultrafiltration: Glomerular capillary pressure forces water, glucose, urea, uric acid, and mineral ions across podocyte slits into Bowman's capsule creating primary filtrate (180 L/day). 2. Selective Reabsorption: As filtrate traverses convoluted tubules and Henle's loop, all glucose, amino acids, and water (depending on body hydration and ADH) are actively reabsorbed into peritubular capillaries. 3. Tubular Secretion: Excess K+, H+, and creatinine are secreted into filtrate forming final hypertonic urine (1-2 L/day).",
    drawingSteps: [
      "Excretory System: 1. Draw two bean-shaped kidneys (left kidney slightly higher than right). 2. Draw Renal Artery (red) and Vena Cava (blue). 3. Connect ureters from kidney hilum to pear-shaped bladder. 4. Add urethra opening.",
      "Nephron: 1. Draw cup-shaped Bowman's capsule with glomerulus knot inside. 2. Draw zigzag proximal convoluted tubule (PCT). 3. Extend hairpin Loop of Henle down and up. 4. Draw distal convoluted tubule (DCT) joining vertical Collecting Duct."
    ],
    markingScheme: [
      "Kidney pair with renal vessels and ureters to bladder (+2 Marks)",
      "Nephron structure: Bowman's capsule + Glomerulus + Convoluted tubules (+2 Marks)",
      "Urine flow arrows and correct terminology (+1 Mark)"
    ],
    commonMistakes: [
      "Drawing kidneys at same level: Left kidney is positioned slightly higher than right due to liver on right.",
      "Showing proteins in glomerular filtrate: Healthy glomerulus never filters blood cells or large plasma proteins.",
      "Labeling collecting duct as ureter."
    ]
  },
  {
    id: "bio_neuron_reflex_arc",
    title: "Structure of a Neuron & Reflex Arc Pathway",
    category: "Nervous & Control",
    chapterNo: 6,
    chapterName: "Control and Coordination",
    ncertFigureRef: "NCERT Class 10 Science, Figure 6.1 & 6.2 (Page 101-102)",
    boardMarks: 4,
    boardFrequency: "95% Board Frequency (CBSE 2024, 2023, 2022, 2019, 2018)",
    essentialLabels: [
      { name: "Dendrites", function: "Branch-like projections acquiring external chemical/electrical stimuli from receptors." },
      { name: "Cyton / Cell Body", function: "Contains nucleus and cytoplasm; converts stimulus into electrical nerve impulse." },
      { name: "Axon", function: "Long cylindrical fiber conducting electrical impulse away from cyton to nerve ending.", examTrap: "May be insulated with myelin sheath." },
      { name: "Nerve Ending / Axon Terminal", function: "Terminal buttons where electrical impulse triggers release of neurotransmitter chemicals across synapse." },
      { name: "Synapse", function: "Microscopic physical gap between axon terminal of one neuron and dendrite of next neuron.", examTrap: "Conduction across synapse is purely CHEMICAL and UNIDIRECTIONAL." },
      { name: "Reflex Arc Pathway", function: "Receptor (skin) → Sensory Neuron → Spinal Cord (Relay Neuron) → Motor Neuron → Effector (arm muscle).", examTrap: "Brain is informed afterwards; response is instantaneous at spinal cord level." }
    ],
    workingMechanism: "Stimulus detected by receptors generates chemical activity in dendrite tip, initiating electrical action potential through cyton and axon. At axon terminus, electrical pulse triggers vesicle release of neurotransmitters (e.g., acetylcholine) into synaptic cleft. Chemical diffuses across gap to bind receptors on next dendrite, generating fresh electrical impulse. In reflex arc, sensory neuron synapses directly with relay interneuron in spinal cord grey matter, activating motor neuron to cause rapid muscle contraction without brain processing delay.",
    drawingSteps: [
      "Neuron: 1. Draw star-shaped cell body with prominent central nucleus. 2. Radiate tree-like dendrites from periphery. 3. Extend single long cylindrical axon with sausage-like myelin sheaths. 4. Finish with branching nerve endings.",
      "Reflex Arc: 1. Draw cross-section of spinal cord (H-shaped butterfly grey matter). 2. Draw sensory neuron from skin receptor through dorsal root ganglion into dorsal horn. 3. Connect relay neuron. 4. Draw motor neuron exiting ventral horn to biceps muscle."
    ],
    markingScheme: [
      "Neuron structural layout with Dendrite, Cyton, Axon, Nerve Ending (+2 Marks)",
      "Reflex arc sequence arrows: Receptor → Sensory → Spinal Cord/Relay → Motor → Effector (+2 Marks)"
    ],
    commonMistakes: [
      "Reversing direction of nerve impulse: Impulse travels ONLY from dendrite to axon terminal, never reverse.",
      "Claiming reflex actions are processed by cerebrum before action: Reflex arc loops in spinal cord first.",
      "Omitting synapse gap between two neurons."
    ]
  },
  {
    id: "bio_human_brain",
    title: "Human Brain & Central Nervous System Regions",
    category: "Nervous & Control",
    chapterNo: 6,
    chapterName: "Control and Coordination",
    ncertFigureRef: "NCERT Class 10 Science, Figure 6.3 (Page 103)",
    boardMarks: 4,
    boardFrequency: "88% Board Frequency (CBSE 2024, 2020, 2017)",
    essentialLabels: [
      { name: "Forebrain (Cerebrum)", function: "Largest region; center of conscious thought, memory, reasoning, voluntary muscle control, and sensory perception (sight, hearing, smell).", examTrap: "Sensory and motor association areas reside here." },
      { name: "Cranium & Meninges", function: "Bony skull (cranium) and three protective fluid-filled membranes (meninges) cushioning brain against mechanical shocks." },
      { name: "Midbrain", function: "Coordinates involuntary visual and auditory reflex actions, such as pupil constriction and head turning." },
      { name: "Hindbrain — Cerebellum", function: "Coordinates precision of voluntary movements, motor learning, and maintains posture, body equilibrium, and balance.", examTrap: "Walking in straight line, riding bicycle, picking pencil = Cerebellum." },
      { name: "Hindbrain — Pons", function: "Relays signals between cortex and cerebellum; assists in regulation of breathing rhythm." },
      { name: "Hindbrain — Medulla Oblongata", function: "Controls critical autonomic involuntary reflexes: heartbeat, blood pressure, peristalsis, salivation, swallowing, vomiting, coughing." }
    ],
    workingMechanism: "The brain processes sensory inputs from afferent nerves and coordinates voluntary and involuntary homeostatic responses. Cerebrum integrates sensory cues with stored memories for decision making. Cerebellum fine-tunes motor commands from cerebrum to achieve smooth motor balance. Medulla controls life-sustaining visceral functions autonomously.",
    drawingSteps: [
      "1. Draw outer protective cranium dome.",
      "2. Sketch highly convoluted folds (gyri and sulci) of cerebrum occupying upper 70% of brain.",
      "3. Draw C-shaped corpus callosum arch beneath cerebrum.",
      "4. Add cauliflower-like cerebellum at rear lower skull.",
      "5. Sketch brainstem in front of cerebellum: upper swelling = Pons, lower cylinder = Medulla merging into spinal cord."
    ],
    markingScheme: [
      "Three distinct regions: Forebrain, Midbrain, Hindbrain (+1.5 Marks)",
      "Correct placement of Cerebrum, Cerebellum, Medulla, and Cranium (+2 Marks)",
      "Neat labeling and fluid protection indication (+0.5 Mark)"
    ],
    commonMistakes: [
      "Confusing Cerebrum (thinking, voluntary) with Cerebellum (balance, motor coordination).",
      "Assigning blood pressure control to cerebrum (it is regulated by Medulla).",
      "Drawing brainstem without distinct Pons and Medulla sections."
    ]
  },
  {
    id: "bio_flower_anatomy",
    title: "Longitudinal Section (LS) of a Flower",
    category: "Reproduction & Flowers",
    chapterNo: 7,
    chapterName: "How do Organisms Reproduce?",
    ncertFigureRef: "NCERT Class 10 Science, Figure 7.7 (Page 121)",
    boardMarks: 4,
    boardFrequency: "96% Board Frequency (CBSE 2024, 2023, 2020, 2019, 2018)",
    essentialLabels: [
      { name: "Sepals (Calyx)", function: "Green leaf-like outermost whorl protecting inner floral whorls during bud stage." },
      { name: "Petals (Corolla)", function: "Brightly colored, scented whorl attracting insect pollinators." },
      { name: "Stamen (Male Reproductive Organ)", function: "Comprises Filament (stalk) and Anther (bilobed sac producing yellow microspores/pollen grains).", examTrap: "Stamen = Anther + Filament." },
      { name: "Carpel / Pistil (Female Reproductive Organ)", function: "Comprises Stigma (sticky landing pad for pollen), Style (elongated neck), and Ovary (swollen basal chamber).", examTrap: "Carpel = Stigma + Style + Ovary." },
      { name: "Ovary & Ovules", function: "Ovary contains ovules housing the female germ-cell (egg). After fertilization, ovary develops into Fruit and ovules into Seeds.", examTrap: "Ovary becomes Fruit; Ovule becomes Seed." }
    ],
    workingMechanism: "Pistil/carpel is centrally positioned, surrounded by ring of stamens, then petals, and outermost sepals. Flowers can be bisexual (mustard, Hibiscus with both stamens and carpel) or unisexual (papaya, watermelon with either stamens or carpel). Pollen transferred from anther to stigma via pollination germinates a pollen tube for fertilization.",
    drawingSteps: [
      "1. Draw basal pedicel and swollen receptacle (thalamus).",
      "2. Draw central flask-shaped pistil: swollen ovary at base, slender style neck, lobed sticky stigma at top.",
      "3. Place circular ovules inside ovary cavity.",
      "4. Draw stamens arching outward on both sides: long filaments topped with bilobed anthers.",
      "5. Surround with showy curved petals and basal green sepals."
    ],
    markingScheme: [
      "Flask-shaped pistil with internal ovule chamber (+1.5 Marks)",
      "Stamens with distinct filament and anther lobes (+1 Mark)",
      "Complete labeling of 4 whorls: Sepal, Petal, Stamen, Carpel (+1.5 Marks)"
    ],
    commonMistakes: [
      "Labeling ovule as seed before fertilization: It is an OVULE until fertilization occurs.",
      "Drawing anther without bilobed morphology.",
      "Confusing male part (Stamen) with female part (Carpel/Pistil)."
    ]
  },
  {
    id: "bio_pollen_germination",
    title: "Germination of Pollen on Stigma & Double Fertilization",
    category: "Reproduction & Flowers",
    chapterNo: 7,
    chapterName: "How do Organisms Reproduce?",
    ncertFigureRef: "NCERT Class 10 Science, Figure 7.8 (Page 122)",
    boardMarks: 4,
    boardFrequency: "94% Board Frequency (CBSE 2024, 2023, 2022, 2018)",
    essentialLabels: [
      { name: "Pollen Grain", function: "Haploid microspore carrying two male gametes landed on receptive stigma surface." },
      { name: "Stigma", function: "Secretes sugary nutrient solution stimulating pollen tube growth." },
      { name: "Pollen Tube", function: "Elongated chemotropic tube burrowing through style tissues toward ovarian cavity.", examTrap: "Grows in response to chemicals in style (chemotropism)." },
      { name: "Male Germ Cells (Gametes)", function: "Two haploid male sperm nuclei moving down the pollen tube." },
      { name: "Ovary", function: "Swollen base sheltering ovule and embryo sac." },
      { name: "Female Germ Cell (Egg Cell)", function: "Haploid egg inside embryo sac fusing with first male gamete to form diploid zygote (Syngamy)." }
    ],
    workingMechanism: "Pollination deposits compatible pollen onto sticky stigma. Sugars on stigma trigger pollen grain germination, sending a single pollen tube down the style toward the ovary guided by chemotropic gradient. Pollen tube penetrates ovule through micropyle pore, discharging two male gametes into embryo sac. One male gamete fuses with egg cell (Syngamy → 2n Zygote), while the second fuses with two polar nuclei (Triple Fusion → 3n Endosperm). This is known as Double Fertilization.",
    drawingSteps: [
      "1. Draw upper flat lobed stigma with 2-3 round pollen grains resting on it.",
      "2. Draw one pollen grain protruding a continuous long tube down the center of style.",
      "3. Show two small dot-like male gamete nuclei inside the tube.",
      "4. Draw swollen ovary at base enclosing ovule with central egg cell.",
      "5. Show pollen tube tip entering ovule opening (micropyle)."
    ],
    markingScheme: [
      "Continuous pollen tube traversing style into ovule (+2 Marks)",
      "Male gametes and female germ-cell labeled (+1 Mark)",
      "Accurate labeling of Pollen, Stigma, Style, Ovary, Ovule (+1 Mark)"
    ],
    commonMistakes: [
      "Drawing pollen tube stopping inside style without reaching ovule.",
      "Drawing multiple pollen tubes entering the same ovule (only one tube enters).",
      "Forgetting to show male gametes inside the pollen tube."
    ]
  },
  {
    id: "bio_human_reproduction",
    title: "Human Male & Female Reproductive Systems",
    category: "Reproduction & Flowers",
    chapterNo: 7,
    chapterName: "How do Organisms Reproduce?",
    ncertFigureRef: "NCERT Class 10 Science, Figure 7.10 & 7.11 (Page 124-126)",
    boardMarks: 5,
    boardFrequency: "97% Board Frequency (CBSE 2024, 2023, 2020, 2019, 2018)",
    essentialLabels: [
      { name: "Testes & Scrotum (Male)", function: "Testes produce sperms and testosterone; scrotum hangs outside abdominal cavity to maintain 2-2.5°C lower temperature essential for spermatogenesis.", examTrap: "Scrotum thermoregulation is a frequent 1-mark question." },
      { name: "Vas Deferens & Urethra (Male)", function: "Vas deferens transports sperms from testes to common urethra; passes through prostate and seminal vesicles." },
      { name: "Seminal Vesicles & Prostate Gland (Male)", function: "Add alkaline lubricating fluid containing fructose to nourish sperms and aid mobility, forming semen." },
      { name: "Ovaries (Female)", function: "Produce female gamete (one egg per month alternately) and female hormones: estrogen and progesterone." },
      { name: "Oviduct / Fallopian Tube (Female)", function: "Ciliated tubes transporting egg from ovary to uterus; SITE OF FERTILIZATION.", examTrap: "Fertilization happens in Fallopian tube, NOT uterus." },
      { name: "Uterus & Cervix (Female)", function: "Pear-shaped muscular womb where fertilized blastocyst implants; placenta nourishes embryo; cervix connects to vagina." }
    ],
    workingMechanism: "Male: Sperms produced in seminiferous tubules pass via vas deferens, receive seminal/prostatic secretions, and are ejaculated through urethra. Female: Ovary releases mature ovum into Fallopian tube (ovulation). If copulation occurs, sperms travel up uterus into Fallopian tube where one sperm fertilizes ovum forming zygote. Zygote undergoes cleavages into blastocyst, implanting into vascular uterine endometrium. Placenta provides glucose, O2, and waste removal between mother and fetus.",
    drawingSteps: [
      "Female: 1. Draw central inverted pear-shaped muscular uterus with thick lining. 2. Extend two horn-like Fallopian tubes laterally with fringed fimbriae tips. 3. Draw oval ovaries near fimbriae. 4. Terminate lower uterus in narrow cervix and tubular vagina.",
      "Male: 1. Draw oval testis suspended in scrotum. 2. Loop vas deferens up around urinary bladder. 3. Add seminal vesicles and prostate at base of bladder. 4. Continue through penis as urethra."
    ],
    markingScheme: [
      "Accurate symmetry and organ layout (+2 Marks)",
      "Site of fertilization (Fallopian tube) and sperm formation (Testis) marked (+1.5 Marks)",
      "Correct labeling of 5 key components (+1.5 Marks)"
    ],
    commonMistakes: [
      "Labeling uterus as site of fertilization (Fertilization occurs in Fallopian Tube/Oviduct).",
      "Omitting scrotum and placing testes fully inside abdominal cavity.",
      "Confusing ureter (urinary system) with vas deferens (reproductive system)."
    ]
  },
  {
    id: "bio_mendel_crosses",
    title: "Mendel's Monohybrid & Dihybrid Genetic Crosses",
    category: "Genetics & Heredity",
    chapterNo: 8,
    chapterName: "Heredity",
    ncertFigureRef: "NCERT Class 10 Science, Figure 8.2, 8.3 & 8.4 (Page 130-133)",
    boardMarks: 5,
    boardFrequency: "98% Board Frequency (CBSE 2024, 2023, 2022, 2020, 2019, 2018)",
    essentialLabels: [
      { name: "Parental Generation (P)", function: "Pure-breeding homozygous parents: TT (Tall) × tt (Dwarf); or RRYY (Round Yellow) × rryy (Wrinkled Green)." },
      { name: "F1 Generation (First Filial)", function: "All heterozygous offspring exhibiting DOMINANT trait: Tt (100% Tall); or RrYy (100% Round Yellow).", examTrap: "Recessive allele remains present but masked in F1." },
      { name: "F2 Punnett Square (Monohybrid)", function: "Self-pollination of F1 (Tt × Tt) produces Genotypes: 1 TT : 2 Tt : 1 tt (1:2:1) and Phenotypes: 3 Tall : 1 Dwarf (3:1).", examTrap: "Phenotypic ratio = 3:1; Genotypic ratio = 1:2:1." },
      { name: "F2 Punnett Square (Dihybrid)", function: "Self-pollination of F1 (RrYy × RrYy) yields 16 combinations with 4 distinct phenotypes: 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green (9:3:3:1).", examTrap: "Proves Mendel's Law of Independent Assortment." }
    ],
    workingMechanism: "1. Law of Segregation: Alleles for each gene segregate during gamete formation so each gamete carries only one allele. 2. Law of Dominance: In heterozygous state (Tt), dominant allele 'T' expresses while recessive allele 't' is masked. 3. Law of Independent Assortment: In dihybrid cross, inheritance of seed shape (R/r) is completely independent of inheritance of seed color (Y/y), giving rise to new recombinant phenotypes (Round Green & Wrinkled Yellow) in F2 generation.",
    drawingSteps: [
      "Monohybrid: 1. Write Parents: TT × tt. 2. Gametes: T and t. 3. F1: Tt (Tall). 4. Selfing: Tt × Tt. 5. Draw 2×2 Punnett square showing TT, Tt, Tt, tt.",
      "Dihybrid: 1. Write Parents: RRYY × rryy. 2. F1: RrYy. 3. Selfing gametes: RY, Ry, rY, ry. 4. Construct 4×4 (16-box) Punnett checkerboard and tally 9:3:3:1 phenotypes."
    ],
    markingScheme: [
      "Correct representation of Parental and F1 alleles (+1.5 Marks)",
      "Punnett square with accurate genotypic combinations (+2 Marks)",
      "Explicit statement of Phenotypic & Genotypic ratios (+1.5 Marks)"
    ],
    commonMistakes: [
      "Mixing up Phenotypic ratio (3:1) and Genotypic ratio (1:2:1).",
      "Incorrect gamete combinations in dihybrid cross (must be RY, Ry, rY, ry).",
      "Using different letters for same character (e.g., using 'D' for dwarf instead of 't')."
    ]
  }
];

// =========================================================================
// 100% COMPREHENSIVE NCERT LAB ACTIVITIES & EXPERIMENTS VAULT (16 CORE SETUPS)
// Covers all practical-based questions, apparatus setups, observations, and reactions
// =========================================================================

export interface LabActivityDiagramItem {
  id: string;
  activityNo: string;
  title: string;
  chapterNo: number;
  chapterName: string;
  subject: "Chemistry" | "Biology" | "Physics";
  apparatusSetup: string;
  procedureSummary: string;
  chemicalOrBioPrinciple: string;
  keyObservation: string;
  chemicalEquation?: string;
  inferenceAndConclusion: string;
  frequentBoardQuestions: { question: string; answer: string }[];
  examinerTraps: string[];
  marksAllotted: number;
}

export const NCERT_ACTIVITIES_DIAGRAMS_VAULT: LabActivityDiagramItem[] = [
  {
    id: "act_1_1_magnesium_ribbon",
    activityNo: "Activity 1.1",
    title: "Burning of Magnesium Ribbon in Air",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    subject: "Chemistry",
    apparatusSetup: "Pair of tongs, Bunsen burner / spirit lamp, Watch glass, Sandpaper, Magnesium ribbon (3-4 cm long).",
    procedureSummary: "Clean a piece of magnesium ribbon by rubbing with sandpaper. Hold it with tongs and ignite it using a burner. Collect the white ash on a watch glass.",
    chemicalOrBioPrinciple: "Combination reaction and Exothermic Oxidation: Magnesium metal reacts vigorously with atmospheric oxygen to form magnesium oxide.",
    keyObservation: "Magnesium ribbon burns with a dazzling, brilliant white flame and changes into a white powder (ash).",
    chemicalEquation: "2Mg(s) + O₂(g) → 2MgO(s) + Heat + Light",
    inferenceAndConclusion: "A chemical reaction occurred as indicated by change in state, emission of intense light/heat, and formation of a new basic metal oxide (MgO).",
    frequentBoardQuestions: [
      {
        question: "Why should a magnesium ribbon be cleaned with sandpaper before burning in air?",
        answer: "Magnesium reacts slowly with air to form a protective layer of basic magnesium carbonate/oxide [MgCO₃·Mg(OH)₂] on its surface. Cleaning removes this unreactive layer so pure magnesium can come into direct contact with oxygen and ignite smoothly."
      },
      {
        question: "What is the nature of the white ash formed? Test with litmus.",
        answer: "When white MgO powder is dissolved in water, it forms Magnesium Hydroxide: MgO + H₂O → Mg(OH)₂. It turns red litmus blue, proving it is a basic oxide."
      }
    ],
    examinerTraps: [
      "Do NOT look directly at the dazzling white flame without sunglasses/eye protection.",
      "Writing MgO as acidic: All electropositive metal oxides are basic in nature."
    ],
    marksAllotted: 3
  },
  {
    id: "act_1_2_lead_nitrate_ki",
    activityNo: "Activity 1.2",
    title: "Precipitation Reaction: Lead Nitrate + Potassium Iodide",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    subject: "Chemistry",
    apparatusSetup: "Two clean test tubes, Dropper, Aqueous Lead(II) Nitrate solution [Pb(NO₃)₂], Aqueous Potassium Iodide solution [KI].",
    procedureSummary: "Take about 2 mL of colorless lead nitrate solution in a test tube. Add a few drops of colorless potassium iodide solution and shake gently.",
    chemicalOrBioPrinciple: "Double Displacement and Precipitation Reaction: Mutual exchange of ions between reactants produces an insoluble solid precipitate.",
    keyObservation: "Instantaneous formation of a bright yellow precipitate of Lead(II) Iodide (PbI₂).",
    chemicalEquation: "Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s)↓ (Bright Yellow Precipitate) + 2KNO₃(aq)",
    inferenceAndConclusion: "Exchange of cations and anions leads to insoluble PbI₂ precipitating out of solution.",
    frequentBoardQuestions: [
      {
        question: "Name the compound that precipitates out and state its color.",
        answer: "Lead(II) Iodide (PbI₂); it forms an insoluble bright yellow precipitate."
      },
      {
        question: "Identify the type of reaction taking place.",
        answer: "Double Displacement Reaction and Precipitation Reaction."
      }
    ],
    examinerTraps: [
      "Writing formula as PbI instead of PbI₂ (Lead has +2 valency here).",
      "Forgetting the downward precipitate arrow (↓) in chemical equation."
    ],
    marksAllotted: 3
  },
  {
    id: "act_1_3_zinc_acid_hydrogen",
    activityNo: "Activity 1.3",
    title: "Action of Dilute Acid on Zinc Granules & Hydrogen Pop Test",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    subject: "Chemistry",
    apparatusSetup: "Conical flask / test tube, Single-bore cork, Delivery tube, Soap water trough, Candle/splinter, Zinc granules, Dilute H₂SO₄ or HCl.",
    procedureSummary: "Place granulated zinc in conical flask, pour dilute sulphuric acid. Pass the liberated gas through soap solution and bring a burning candle near the bubbles.",
    chemicalOrBioPrinciple: "Single Displacement Reaction: Highly reactive zinc displaces hydrogen from dilute acid, releasing H₂ gas exothermically.",
    keyObservation: "Brisk effervescence of gas bubbles; conical flask becomes hot to touch; soap bubbles rise and burn with a characteristic 'POP' sound.",
    chemicalEquation: "Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)↑ + Heat",
    inferenceAndConclusion: "Metals above hydrogen in reactivity series displace H⁺ ions from acids releasing flammable hydrogen gas.",
    frequentBoardQuestions: [
      {
        question: "Why does the temperature of the conical flask rise?",
        answer: "The displacement reaction of zinc with acid is exothermic, releasing thermal energy into surroundings."
      },
      {
        question: "How do you confirm the gas evolved is Hydrogen?",
        answer: "Bring a burning candle near the gas-filled soap bubble; it extinguishes the flame with a distinct 'POP' sound."
      }
    ],
    examinerTraps: [
      "Using concentrated HNO₃: Nitric acid is a strong oxidizing agent that oxidizes H₂ to water instead of liberating gas.",
      "Omitting the soap water setup in practical drawing."
    ],
    marksAllotted: 3
  },
  {
    id: "act_1_5_ferrous_sulphate_decomposition",
    activityNo: "Activity 1.5",
    title: "Thermal Decomposition of Ferrous Sulphate Crystals",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    subject: "Chemistry",
    apparatusSetup: "Dry boiling test tube, Test tube holder, Bunsen burner, Ferrous Sulphate crystals (FeSO₄·7H₂O), Moist litmus paper.",
    procedureSummary: "Place 2g of light-green ferrous sulphate crystals in a dry boiling tube. Heat over burner flame while wafting evolved gas gently towards nose.",
    chemicalOrBioPrinciple: "Thermal Decomposition Reaction: A single substance breaks down upon heating into three simpler compounds.",
    keyObservation: "Green crystals first lose water of crystallization turning white (anhydrous FeSO₄), then decompose into reddish-brown solid (Fe₂O₃) with suffocating smell of burning sulphur.",
    chemicalEquation: "1. FeSO₄·7H₂O(s) --Heat--> FeSO₄(s) + 7H₂O(g)\n2. 2FeSO₄(s) --Heat--> Fe₂O₃(s) (Reddish-brown) + SO₂(g)↑ + SO₃(g)↑",
    inferenceAndConclusion: "FeSO₄ undergoes endothermic thermal decomposition releasing acidic, suffocating SO₂ and SO₃ gases.",
    frequentBoardQuestions: [
      {
        question: "What color change is observed during heating?",
        answer: "Initial green color of crystals turns white (loss of 7H₂O), and on further strong heating turns into reddish-brown ferric oxide (Fe₂O₃)."
      },
      {
        question: "What is the characteristic smell of the emitted gas?",
        answer: "The smell of burning sulphur due to sulfur dioxide (SO₂) and sulfur trioxide (SO₃) fumes."
      }
    ],
    examinerTraps: [
      "Never point the mouth of boiling tube at yourself or classmates.",
      "Writing FeO instead of Fe₂O₃ (Iron oxidizes to Ferric state, +3)."
    ],
    marksAllotted: 3
  },
  {
    id: "act_1_6_lead_nitrate_decomposition",
    activityNo: "Activity 1.6",
    title: "Thermal Decomposition of Lead Nitrate with Brown NO₂ Fumes",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    subject: "Chemistry",
    apparatusSetup: "Hard glass boiling tube, Test tube holder, Bunsen burner, White Lead Nitrate powder [Pb(NO₃)₂], Glowing splinter.",
    procedureSummary: "Take 2g of dry white lead nitrate powder in a boiling tube. Hold with tongs and heat strongly over burner.",
    chemicalOrBioPrinciple: "Thermal Decomposition Reaction: Strong heating decomposes lead nitrate into a metal oxide and two gases.",
    keyObservation: "Crackling sound (decrepitation); evolution of pungent, suffocating reddish-brown fumes of Nitrogen Dioxide (NO₂); yellow residue of Lead Monoxide (PbO) remains in tube.",
    chemicalEquation: "2Pb(NO₃)₂(s) --Heat--> 2PbO(s) (Yellow when cold) + 4NO₂(g)↑ (Brown Fumes) + O₂(g)↑",
    inferenceAndConclusion: "Lead nitrate decomposes into solid Lead(II) oxide, brown Nitrogen dioxide gas, and Oxygen gas.",
    frequentBoardQuestions: [
      {
        question: "Identify the brown fumes evolved in this reaction.",
        answer: "Nitrogen Dioxide gas (NO₂)."
      },
      {
        question: "How do you test for the presence of the other gas evolved (Oxygen)?",
        answer: "Introduce a glowing splinter into the mouth of the test tube; it rekindles/bursts into flame, confirming Oxygen gas (O₂)."
      }
    ],
    examinerTraps: [
      "Confusing NO₂ (brown) with N₂O (colorless laughing gas) or NO.",
      "PbO is reddish-brown when hot, but turns lemon-yellow upon cooling."
    ],
    marksAllotted: 3
  },
  {
    id: "act_1_7_electrolysis_of_water",
    activityNo: "Activity 1.7",
    title: "Electrolysis of Water (2:1 Stoichiometric Volume Ratio)",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    subject: "Chemistry",
    apparatusSetup: "Plastic mug with two holes, Rubber stoppers, Carbon/graphite electrodes, 6V DC battery, Switch, Two graduated test tubes, Dilute H₂SO₄ (electrolyte).",
    procedureSummary: "Fit carbon electrodes into mug base, fill mug with water and add a few drops of dil H₂SO₄. Invert water-filled test tubes over electrodes and connect 6V battery.",
    chemicalOrBioPrinciple: "Electrolytic Decomposition Reaction: Direct electrical current decomposes liquid water into hydrogen and oxygen gases.",
    keyObservation: "Gas bubbles evolve at both electrodes. The volume of gas collected at CATHODE (-ve) is exactly DOUBLE the volume collected at ANODE (+ve).",
    chemicalEquation: "2H₂O(l) --Electric Current--> 2H₂(g)↑ (Cathode, 2 volumes) + O₂(g)↑ (Anode, 1 volume)",
    inferenceAndConclusion: "Water is composed of hydrogen and oxygen atoms in a 2:1 ratio by volume (H₂O).",
    frequentBoardQuestions: [
      {
        question: "Why is the volume of gas collected over one electrode double that of the other?",
        answer: "Water consists of 2 parts Hydrogen and 1 part Oxygen by volume (formula H₂O). During electrolysis, 2 moles of H₂ are produced at the cathode for every 1 mole of O₂ at the anode."
      },
      {
        question: "Why are a few drops of dilute sulphuric acid added to pure water?",
        answer: "Pure distilled water is a poor conductor of electricity (very low ionization). Adding dil H₂SO₄ provides free H⁺ and SO₄²⁻ ions, making water a good electrical conductor."
      }
    ],
    examinerTraps: [
      "CRITICAL BOARD TRAP: Hydrogen evolves at CATHODE (-), Oxygen evolves at ANODE (+). Mnemonic: 'PANIC' (Positive Anode, Negative Is Cathode); H⁺ cations move to negative cathode.",
      "Using AC current instead of DC: AC current would produce an explosive mixture of H₂ and O₂ at both electrodes."
    ],
    marksAllotted: 5
  },
  {
    id: "act_1_8_photolysis_silver_chloride",
    activityNo: "Activity 1.8",
    title: "Photochemical Decomposition (Photolysis) of Silver Chloride",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    subject: "Chemistry",
    apparatusSetup: "China dish / watch glass, White Silver Chloride (AgCl) powder, Direct sunlight.",
    procedureSummary: "Take 2g of white silver chloride in a china dish. Place the dish near a window exposed to direct sunlight for a few hours.",
    chemicalOrBioPrinciple: "Photochemical Decomposition (Photolysis): Sunlight photons break down Ag-Cl ionic bonds into metallic silver and chlorine gas.",
    keyObservation: "White silver chloride powder gradually turns into a dull grey solid; greenish-yellow chlorine gas escapes.",
    chemicalEquation: "2AgCl(s) (White) --Sunlight--> 2Ag(s) (Grey) + Cl₂(g)↑",
    inferenceAndConclusion: "Light energy causes decomposition of silver halides; utilized historically in black and white photography.",
    frequentBoardQuestions: [
      {
        question: "Why is silver chloride kept in dark-colored / amber bottles in laboratories?",
        answer: "Silver chloride undergoes rapid photochemical decomposition in presence of light to form grey silver metal. Amber bottles block light penetration, preventing unwanted decomposition."
      },
      {
        question: "Write an analogous reaction used in black and white photography.",
        answer: "2AgBr(s) (Pale Yellow) --Sunlight--> 2Ag(s) (Grey) + Br₂(g) (Brown fumes)."
      }
    ],
    examinerTraps: [
      "Writing 'Silver turns black': Correct observation is GREY silver metal.",
      "Forgetting to write 'Sunlight' above the reaction arrow."
    ],
    marksAllotted: 3
  },
  {
    id: "act_1_9_iron_nails_copper_sulphate",
    activityNo: "Activity 1.9",
    title: "Displacement Reaction: Iron Nails in Copper Sulphate Solution",
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    subject: "Chemistry",
    apparatusSetup: "Two test tubes, Thread, Stand, Clean iron nails (rubbed with sandpaper), Blue Copper Sulphate solution (CuSO₄·5H₂O).",
    procedureSummary: "Immerse two cleaned iron nails into 10 mL blue copper sulphate solution in test tube A for 20 minutes. Keep test tube B with CuSO₄ and one nail aside for comparison.",
    chemicalOrBioPrinciple: "Single Displacement Reaction: Iron is more reactive than copper (higher in activity series) and displaces Cu²⁺ ions from solution.",
    keyObservation: "The deep blue color of copper sulphate solution fades and turns into pale light green (formation of FeSO₄); iron nails become coated with a reddish-brown deposit of copper metal.",
    chemicalEquation: "Fe(s) + CuSO₄(aq) (Blue) → FeSO₄(aq) (Light Green) + Cu(s) (Reddish-brown deposit on nail)",
    inferenceAndConclusion: "More reactive iron displaces less reactive copper from its aqueous salt solution.",
    frequentBoardQuestions: [
      {
        question: "Why does the blue color of copper sulphate solution change to light green?",
        answer: "Iron displaces Cu²⁺ ions forming ferrous sulphate [FeSO₄] in solution, whose Fe²⁺ ions are light green in color."
      },
      {
        question: "What would happen if a copper wire is placed in a ferrous sulphate solution?",
        answer: "No reaction occurs because copper is less reactive than iron and cannot displace iron from FeSO₄."
      }
    ],
    examinerTraps: [
      "Do not describe the deposit as 'rust'. It is pure metallic COPPER (reddish-brown).",
      "Calling FeSO₄ dark green: It is PALE LIGHT GREEN."
    ],
    marksAllotted: 3
  },
  {
    id: "act_2_5_metal_carbonate_acid_limewater",
    activityNo: "Activity 2.5",
    title: "Action of Acids on Metal Carbonates & Lime Water Test",
    chapterNo: 2,
    chapterName: "Acids, Bases and Salts",
    subject: "Chemistry",
    apparatusSetup: "Two test tubes A and B, Thistle funnel, Delivery tube with cork, Sodium Carbonate (Na₂CO₃), Dilute HCl, Freshly prepared Lime water [Ca(OH)₂].",
    procedureSummary: "Take 0.5g Na₂CO₃ in tube A, add 2 mL dilute HCl via thistle funnel. Pass the liberated gas through 2 mL lime water in tube B.",
    chemicalOrBioPrinciple: "Acid-carbonate neutralization liberating carbon dioxide gas; precipitation and subsequent dissolution of calcium carbonate.",
    keyObservation: "Brisk effervescence in tube A. When gas passes into tube B, clear lime water turns milky white. On passing EXCESS CO₂, milkiness disappears and solution becomes clear again.",
    chemicalEquation: "1. Na₂CO₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g)↑\n2. Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s)↓ (Milky White) + H₂O(l)\n3. CaCO₃(s) + H₂O(l) + CO₂(g) (Excess) → Ca(HCO₃)₂(aq) (Soluble / Clear)",
    inferenceAndConclusion: "Carbonates react with acids to liberate CO₂. Lime water turning milky and then clearing on excess CO₂ is the definitive test for CO₂.",
    frequentBoardQuestions: [
      {
        question: "Why does lime water turn milky when CO₂ gas is passed through it?",
        answer: "CO₂ reacts with calcium hydroxide to form an insoluble white precipitate of Calcium Carbonate (CaCO₃)."
      },
      {
        question: "Why does the milkiness disappear on passing excess CO₂?",
        answer: "Excess CO₂ converts insoluble CaCO₃ into water-soluble Calcium Hydrogen Carbonate [Ca(HCO₃)₂], making the solution clear."
      }
    ],
    examinerTraps: [
      "Thistle funnel must dip BELOW the acid level in tube A, otherwise CO₂ escapes through funnel.",
      "Lime water must be FRESHLY prepared; stale lime water already absorbs atmospheric CO₂."
    ],
    marksAllotted: 4
  },
  {
    id: "act_2_8_acid_conductivity_glucose",
    activityNo: "Activity 2.8",
    title: "Electrical Conductivity of Acid Solutions vs Glucose / Alcohol",
    chapterNo: 2,
    chapterName: "Acids, Bases and Salts",
    subject: "Chemistry",
    apparatusSetup: "Beaker (100 mL), Cork with two iron nails, 6V battery, Bulb, Switch, Connecting wires, Solutions of Dil HCl, Dil H₂SO₄, Glucose, and Ethyl Alcohol.",
    procedureSummary: "Fix two iron nails on cork placed in beaker. Connect nails to 6V battery and bulb via switch. Pour dil HCl, switch on. Repeat separately with glucose and alcohol solutions.",
    chemicalOrBioPrinciple: "Electrolytic Conduction: Electric current is carried through solutions by mobile ions. Acids ionize into H⁺(aq) cations, whereas organic covalent compounds do not ionize.",
    keyObservation: "The bulb GLOWS brightly with Dil HCl and Dil H₂SO₄ solutions. The bulb DOES NOT GLOW with Glucose (C₆H₁₂O₆) or Alcohol (C₂H₅OH) solutions.",
    chemicalEquation: "HCl(aq) → H⁺(aq) + Cl⁻(aq)  [or H₃O⁺ + Cl⁻]\nGlucose & Alcohol: Do not dissociate into ions in water.",
    inferenceAndConclusion: "All acids contain replaceable hydrogen and ionize to form H⁺(aq) ions which conduct electricity. Compounds like glucose contain hydrogen but are not acidic because they do not furnish free ions.",
    frequentBoardQuestions: [
      {
        question: "Why do HCl and HNO₃ show acidic characters in aqueous solutions while glucose and alcohol do not?",
        answer: "HCl and HNO₃ ionize in water to produce free hydronium ions [H₃O⁺] responsible for acidic properties and conduction. Glucose and alcohol are covalent molecules that do not ionize in water."
      },
      {
        question: "Does distilled water conduct electricity? What about rainwater?",
        answer: "Pure distilled water does not conduct electricity because it contains virtually no free ions. Rainwater contains dissolved acidic gases (CO₂, SO₂) forming carbonic and sulphurous acids which furnish ions to conduct electricity."
      }
    ],
    examinerTraps: [
      "Using dry HCl gas without water: Dry HCl does NOT conduct electricity or turn dry litmus paper red.",
      "H⁺ ions cannot exist alone; they exist as hydrated Hydronium ions (H₃O⁺)."
    ],
    marksAllotted: 3
  },
  {
    id: "act_2_15_water_of_crystallization",
    activityNo: "Activity 2.15",
    title: "Water of Crystallization in Copper Sulphate Crystals",
    chapterNo: 2,
    chapterName: "Acids, Bases and Salts",
    subject: "Chemistry",
    apparatusSetup: "Dry boiling tube, Test tube holder, Bunsen burner, Blue Copper Sulphate crystals (CuSO₄·5H₂O), Dropper, Distilled water.",
    procedureSummary: "Heat a few crystals of blue hydrated copper sulphate in a dry boiling tube. Observe water droplets on tube walls and color change of salt. Add 2-3 drops of water to the white residue.",
    chemicalOrBioPrinciple: "Reversible dehydration of hydrated salt: Heating drives off chemically bound water of crystallization, altering crystal lattice geometry and color.",
    keyObservation: "Bright blue crystals turn into anhydrous white powder; tiny water droplets condense on the cooler upper inside walls of the tube. Adding 2-3 drops of water restores the bright blue color.",
    chemicalEquation: "CuSO₄·5H₂O(s) (Blue Hydrated) <===Heat / +H₂O===> CuSO₄(s) (White Anhydrous) + 5H₂O(l)",
    inferenceAndConclusion: "Water of crystallization is the fixed number of water molecules chemically bound in one formula unit of a salt, providing characteristic color and crystalline shape.",
    frequentBoardQuestions: [
      {
        question: "What is water of crystallization? Give two examples other than copper sulphate.",
        answer: "It is the fixed number of water molecules present in one formula unit of a salt. Examples: Washing Soda [Na₂CO₃·10H₂O] (10 water molecules) and Gypsum [CaSO₄·2H₂O] (2 water molecules)."
      },
      {
        question: "What happens when gypsum is heated at 373 K (100°C)?",
        answer: "It loses 1.5 water molecules to form Plaster of Paris (POP): CaSO₄·2H₂O --373K--> CaSO₄·½H₂O + 1½H₂O."
      }
    ],
    examinerTraps: [
      "Saying crystals are 'wet': Water of crystallization is chemically bonded inside the crystal lattice, not surface wetness.",
      "Overheating gypsum above 373K: Forms dead burnt plaster (anhydrous CaSO₄) which loses setting property."
    ],
    marksAllotted: 3
  },
  {
    id: "act_3_14_conditions_for_rusting",
    activityNo: "Activity 3.14",
    title: "Investigating Conditions for Rusting / Corrosion of Iron (3 Test Tubes)",
    chapterNo: 3,
    chapterName: "Metals and Non-metals",
    subject: "Chemistry",
    apparatusSetup: "Three test tubes labeled A, B, C; Clean shining iron nails; Distilled water; Boiled distilled water; Anhydrous Calcium Chloride (CaCl₂); Olive/mineral oil; Rubber stoppers.",
    procedureSummary: "Tube A: Nails half-submerged in tap water (exposed to Air + Water). Tube B: Nails in boiled water covered with oil layer (Water only, No Air). Tube C: Nails with anhydrous CaCl₂ (Dry Air only, No Water). Stopper and leave for 3 days.",
    chemicalOrBioPrinciple: "Electrochemical Corrosion: Rusting of iron is an oxidation process requiring BOTH atmospheric oxygen and moisture simultaneously.",
    keyObservation: "Tube A: Iron nails are heavily rusted with reddish-brown flaky deposit. Tube B: Nails DO NOT rust. Tube C: Nails DO NOT rust (remain shiny).",
    chemicalEquation: "4Fe(s) + 3O₂(g) + 2xH₂O(l) → 2Fe₂O₃·xH₂O(s) (Hydrated Iron(III) Oxide / Rust)",
    inferenceAndConclusion: "BOTH air (oxygen) and water (moisture) are simultaneously essential for rusting of iron.",
    frequentBoardQuestions: [
      {
        question: "Why was boiled distilled water used in Test Tube B, and why was oil layered on top?",
        answer: "Boiling expels all dissolved air/oxygen from the water. The layer of oil prevents atmospheric oxygen from redissolving into the water."
      },
      {
        question: "What is the function of anhydrous calcium chloride in Test Tube C?",
        answer: "Anhydrous CaCl₂ is a powerful desiccating (drying) agent that absorbs all atmospheric moisture, creating completely dry air."
      }
    ],
    examinerTraps: [
      "Claiming water alone or air alone causes rust: Neither causes rust independently.",
      "Rust formula: Fe₂O₃·xH₂O (must include variable 'xH₂O' for water of hydration)."
    ],
    marksAllotted: 4
  },
  {
    id: "act_6_1_chlorophyll_photosynthesis",
    activityNo: "Activity 6.1",
    title: "Chlorophyll is Essential for Photosynthesis (Variegated Leaf Test)",
    chapterNo: 5,
    chapterName: "Life Processes",
    subject: "Biology",
    apparatusSetup: "Potted variegated plant (Croton / Money plant), Beaker, Water bath, Boiling tube, Alcohol / methylated spirit, Iodine solution, White tile.",
    procedureSummary: "Destarch plant in dark for 3 days. Expose to sun for 6 hours. Pluck leaf, trace green and non-green areas on tracing paper. Boil leaf in water, then in alcohol water-bath until decolorized. Rinse in water and dip in dilute iodine.",
    chemicalOrBioPrinciple: "Starch synthesis in autotrophic nutrition: Chlorophyll pigments absorb light energy to drive photolysis and fix CO₂ into glucose stored as starch.",
    keyObservation: "ONLY the originally green areas containing chlorophyll turn BLUE-BLACK with iodine. The white / non-green portions turn pale brown/yellow.",
    chemicalEquation: "6CO₂ + 12H₂O --Chlorophyll + Sunlight--> C₆H₁₂O₆ (Stored as Starch) + 6O₂ + 6H₂O",
    inferenceAndConclusion: "Starch is formed only in regions with chlorophyll; hence chlorophyll is essential for photosynthesis.",
    frequentBoardQuestions: [
      {
        question: "Why is the plant kept in a dark room for 3 days before the experiment?",
        answer: "To destarch the plant: In darkness, photosynthesis stops and the plant consumes all previously stored starch from its leaves for respiration."
      },
      {
        question: "Why is the leaf boiled in alcohol, and why must this be done in a water bath?",
        answer: "Alcohol dissolves and extracts green chlorophyll pigment to decolorize the leaf so blue-black color with iodine can be observed clearly. Alcohol is highly flammable, so it must be heated indirectly in a water bath to prevent fire hazards."
      }
    ],
    examinerTraps: [
      "Never heat alcohol directly over flame: It catches fire instantly.",
      "Forgetting to destarch the plant invalidates the entire experiment."
    ],
    marksAllotted: 4
  },
  {
    id: "act_6_2_co2_essential_photosynthesis",
    activityNo: "Activity 6.2",
    title: "Carbon Dioxide is Essential for Photosynthesis (KOH Bell Jar Setup)",
    chapterNo: 5,
    chapterName: "Life Processes",
    subject: "Biology",
    apparatusSetup: "Two healthy destarched potted plants A and B, Two glass bell jars, Vaseline, Watch glass with Potassium Hydroxide (KOH) pellets, Iodine test apparatus.",
    procedureSummary: "Destarch both plants for 3 days. Place each on a glass plate. Place watch glass with KOH next to Plant A. Cover both with bell jars, seal bases with Vaseline to make airtight. Keep in sunlight for 2-3 hours. Test leaves for starch.",
    chemicalOrBioPrinciple: "Carbon fixation requirement: CO₂ is the raw material providing carbon atoms for glucose synthesis.",
    keyObservation: "Leaf from Plant B (without KOH) turns BLUE-BLACK with iodine (starch present). Leaf from Plant A (with KOH) DOES NOT turn blue-black (starch absent).",
    chemicalEquation: "KOH + CO₂ → K₂CO₃ + H₂O (KOH absorbs carbon dioxide from bell jar A)",
    inferenceAndConclusion: "Plant A could not synthesize starch due to absence of CO₂; hence carbon dioxide is essential for photosynthesis.",
    frequentBoardQuestions: [
      {
        question: "What is the role of Potassium Hydroxide (KOH) in this experiment?",
        answer: "KOH chemically absorbs all carbon dioxide gas inside the sealed bell jar of Plant A, creating a CO₂-free environment."
      },
      {
        question: "Why is Vaseline applied around the base of the bell jars?",
        answer: "To create an airtight seal and prevent outside atmospheric CO₂ from leaking into the bell jars."
      }
    ],
    examinerTraps: [
      "Confusing KOH role: KOH absorbs CO₂, it does NOT release oxygen.",
      "Forgetting to keep plant B as control: Scientific experiments require a comparative control setup."
    ],
    marksAllotted: 4
  },
  {
    id: "act_6_4_co2_respiration_seeds",
    activityNo: "Activity 6.4",
    title: "Carbon Dioxide Produced During Respiration (Germinating Seeds)",
    chapterNo: 5,
    chapterName: "Life Processes",
    subject: "Biology",
    apparatusSetup: "Conical flask, Airtight cork with delivery tube, Small test tube with KOH solution, Germinating gram/bean seeds, Beaker with colored water.",
    procedureSummary: "Place moist germinating seeds in conical flask. Suspend a small test tube containing KOH solution inside. Seal flask with bent delivery tube whose other end dips into colored water beaker. Mark water level and observe after 2 hours.",
    chemicalOrBioPrinciple: "Aerobic Cellular Respiration: Living cells break down glucose using oxygen, releasing carbon dioxide, water, and ATP energy.",
    keyObservation: "The level of water rises in the bent delivery tube.",
    chemicalEquation: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP\nKOH absorbs CO₂: 2KOH + CO₂ → K₂CO₃ + H₂O",
    inferenceAndConclusion: "Germinating seeds take in O₂ and release CO₂ during respiration. KOH absorbs this CO₂, creating a partial vacuum inside the flask. Atmospheric pressure then pushes water up the delivery tube.",
    frequentBoardQuestions: [
      {
        question: "Why does the water level rise in the delivery tube?",
        answer: "Respirating seeds consume O₂ and release CO₂. The released CO₂ is absorbed by KOH, creating a partial vacuum (low pressure) inside the flask. Higher external atmospheric pressure forces water up the tube."
      },
      {
        question: "Why are germinating seeds used instead of boiled / dry seeds?",
        answer: "Germinating seeds have actively dividing cells with high metabolic and respiration rates. Boiled seeds are dead and do not respire; dry dormant seeds respire too slowly to produce measurable gas changes."
      }
    ],
    examinerTraps: [
      "Claiming water level rises because seeds absorb water: Water rises due to pressure drop caused by KOH absorbing CO₂.",
      "Failing to make the flask airtight."
    ],
    marksAllotted: 4
  },
  {
    id: "act_6_5_yeast_fermentation",
    activityNo: "Activity 6.5",
    title: "Anaerobic Fermentation of Glucose by Yeast Producing CO₂ & Ethanol",
    chapterNo: 5,
    chapterName: "Life Processes",
    subject: "Biology",
    apparatusSetup: "Test tube, Single-bore cork with delivery tube, Baker's yeast, Sugar / glucose solution, Fresh lime water [Ca(OH)₂] in receiver tube, Layer of liquid paraffin/oil.",
    procedureSummary: "Dissolve yeast in warm glucose solution in test tube. Pour a layer of liquid paraffin over mixture to exclude atmospheric air. Fit cork with bent tube dipping into lime water. Keep in warm place.",
    chemicalOrBioPrinciple: "Anaerobic Respiration (Fermentation): In absence of oxygen, unicellular yeast converts glucose into ethyl alcohol, carbon dioxide, and small amount of ATP (2 ATP).",
    keyObservation: "Frothing and bubbling in yeast tube; smell of alcohol; clear lime water in receiver tube turns milky white.",
    chemicalEquation: "C₆H₁₂O₆ (Glucose) --Yeast (Zymase)--> 2C₂H₅OH (Ethanol) + 2CO₂(g)↑ + 2 ATP",
    inferenceAndConclusion: "Yeast respires anaerobically in absence of oxygen, producing ethanol and carbon dioxide gas.",
    frequentBoardQuestions: [
      {
        question: "What is the purpose of adding liquid paraffin over the glucose-yeast mixture?",
        answer: "Liquid paraffin forms an impermeable layer on top of the liquid, cutting off contact with atmospheric oxygen to ensure strictly anaerobic conditions."
      },
      {
        question: "Compare ATP yield between aerobic respiration and yeast fermentation.",
        answer: "Aerobic respiration yields approx. 38 ATP molecules per glucose molecule (complete oxidation), whereas anaerobic fermentation yields only 2 ATP molecules per glucose molecule."
      }
    ],
    examinerTraps: [
      "Using boiling water: Boiling water kills yeast enzymes (zymase denatures above 50°C).",
      "Confusing plant/yeast fermentation (produces Ethanol + CO₂) with human muscle anaerobic respiration (produces Lactic Acid only, NO CO₂)."
    ],
    marksAllotted: 3
  }
];

