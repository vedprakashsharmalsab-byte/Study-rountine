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
          formula: "\frac{1}{R_p} = \frac{1}{R_2} + \frac{1}{R_3} = \frac{1}{6} + \frac{1}{3} = \frac{1 + 2}{6} = \frac{3}{6} = \frac{1}{2}\ \Omega^{-1}",
          calculation: "Inverting both sides: R_p = \frac{6 \times 3}{6 + 3} = \frac{18}{9} = 2\ \Omega",
          result: "R_p = 2\ \Omega"
        },
        {
          stepNo: 2,
          heading: "Step 2: Add Series Resistor R1 to Equivalent Parallel Resistance",
          formula: "R_{\text{eq}} = R_1 + R_p",
          calculation: "R_{\text{eq}} = 4\ \Omega + 2\ \Omega = 6\ \Omega",
          result: "R_{\text{eq}} = 6\ \Omega"
        },
        {
          stepNo: 3,
          heading: "Step 3: Calculate Total Circuit Current from Battery",
          formula: "I = \frac{V}{R_{\text{eq}}}",
          calculation: "I = \frac{12\text{ V}}{6\ \Omega} = 2.0\text{ A}",
          result: "I_{\text{total}} = 2\text{ A}"
        },
        {
          stepNo: 4,
          heading: "Step 4: Potential Difference across Resistor R1",
          formula: "V_1 = I \times R_1",
          calculation: "V_1 = 2\text{ A} \times 4\ \Omega = 8\text{ V}",
          result: "V_1 = 8\text{ V}"
        },
        {
          stepNo: 5,
          heading: "Step 5: Potential Difference across Parallel Block (R2 || R3)",
          formula: "V_p = V_{\text{total}} - V_1 = I \times R_p",
          calculation: "V_p = 12\text{ V} - 8\text{ V} = 4\text{ V} \quad (\text{or } 2\text{ A} \times 2\ \Omega = 4\text{ V})",
          result: "V_p = 4\text{ V}"
        },
        {
          stepNo: 6,
          heading: "Step 6: Individual Branch Currents through R2 and R3",
          formula: "I_2 = \frac{V_p}{R_2} \quad \text{and} \quad I_3 = \frac{V_p}{R_3}",
          calculation: "I_2 = \frac{4\text{ V}}{6\ \Omega} = 0.67\text{ A}, \quad I_3 = \frac{4\text{ V}}{3\ \Omega} = 1.33\text{ A}. \quad (I_2 + I_3 = 0.67 + 1.33 = 2.0\text{ A})",
          result: "I_2 = 0.67\text{ A}, \quad I_3 = 1.33\text{ A}"
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
    imageUrl: "/study_material/science/diagrams/concave_mirror_at_c.png",
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
    imageUrl: "/study_material/science/diagrams/convex_mirror_between_inf_and_pole.png",
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
    imageUrl: "/study_material/science/diagrams/convex_lens_between_o_and_f1.png",
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
    imageUrl: "/study_material/science/diagrams/prism_dispersion.png",
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
    imageAlt: "Schematic diagram of one of the common domestic circuits",
    keyRule: "Live wire (Red/Brown, 220 V), Neutral wire (Black/Blue, 0 V), Earth wire (Green/Yellow). Electricity meter, main fuse, distribution box, appliances in parallel.",
    examinerAlert: "Switches and fuses MUST always be connected in the LIVE wire, never in the neutral wire.",
    markingTip: "Earth wire provides low-resistance leakage path to ground, preventing fatal electric shocks."
  }
];
