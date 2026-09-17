// =========================================================================
// CBSE Class 10 Official Syllabus Blueprints & Step-by-Step Marking Schemes
// Standards: CBSE Official Curriculum 2026-2027 (Maths Code 041, Science Code 086)
// Total Theory: 80 Marks | Internal Assessment: 20 Marks | Grand Total: 100 Marks
// =========================================================================

export interface ChapterBlueprint {
  chapterNo: number;
  chapterName: string;
  unitName: string;
  unitTotalMarks: number;
  expectedMarks: string;
  questionPattern: {
    mcq1M: number; // Section A: 1 Mark questions
    vsa2M: number; // Section B: 2 Marks questions
    sa3M: number;  // Section C: 3 Marks questions
    la5M: number;  // Section D: 5 Marks questions
    case4M: number; // Section E: 4 Marks Case Study
    mapSkill?: number; // Section F: Map Pointing items
  };
  markingSchemeRubric: {
    step: string;
    marks: string;
    rubricNote: string;
  }[];
  examinerPenalties: string[];
}

export const MATH_OFFICIAL_BLUEPRINTS: Record<number, ChapterBlueprint> = {
  1: {
    chapterNo: 1,
    chapterName: "Real Numbers",
    unitName: "Unit I: Number Systems (6 Marks)",
    unitTotalMarks: 6,
    expectedMarks: "6 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "Theorem statement or formula quote (HCF × LCM = a × b)", marks: "0.5 Mark", rubricNote: "Mandatory formula identification" },
      { step: "Prime factorisation trees / prime powers", marks: "1.0 Mark", rubricNote: "Expressing in prime exponents" },
      { step: "Contradiction proof steps (assume a/b co-prime)", marks: "1.0 Mark", rubricNote: "Must write 'a, b are co-prime integers, b ≠ 0'" },
      { step: "Logical deduction of common factor & final contradiction", marks: "0.5 Mark", rubricNote: "Formal concluding sentence required" }
    ],
    examinerPenalties: [
      "-0.5 Mark if student omits writing 'a and b are co-prime' in √p irrationality proof.",
      "-0.5 Mark for attempting HCF × LCM = a × b × c for three numbers (formula is invalid for 3 numbers)."
    ]
  },
  2: {
    chapterNo: 2,
    chapterName: "Polynomials",
    unitName: "Unit II: Algebra (20 Marks)",
    unitTotalMarks: 20,
    expectedMarks: "4 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "Writing relation: α + β = -b/a and αβ = c/a", marks: "1.0 Mark", rubricNote: "Direct quote of Vieta relations" },
      { step: "Algebraic manipulation (e.g. α² + β² = (α+β)² - 2αβ)", marks: "1.0 Mark", rubricNote: "Identity conversion" },
      { step: "Final substitution and boxed numerical answer", marks: "1.0 Mark", rubricNote: "Boxed final answer [ k = 4 ]" }
    ],
    examinerPenalties: [
      "-0.5 Mark for sign mistake in sum of zeroes: writing b/a instead of -b/a.",
      "-0.5 Mark for omitting the non-zero constant k when writing quadratic polynomial k[x² - (α+β)x + αβ]."
    ]
  },
  3: {
    chapterNo: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    unitName: "Unit II: Algebra (20 Marks)",
    unitTotalMarks: 20,
    expectedMarks: "4 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "Ratios comparison (a₁/a₂, b₁/b₂, c₁/c₂)", marks: "1.0 Mark", rubricNote: "Condition for consistency / parallel lines" },
      { step: "Setting up simultaneous equations from word problem", marks: "1.0 Mark", rubricNote: "Clear 'Let speed = x, time = y' declarations" },
      { step: "Substitution / Elimination algebraic solving", marks: "1.0 Mark", rubricNote: "Clear steps showing elimination of variable" },
      { step: "Final values with appropriate units (km/h, rupees)", marks: "1.0 Mark", rubricNote: "Enclose final answer in box" }
    ],
    examinerPenalties: [
      "-1.0 Mark for guessing without algebraic solution in 3M word problem.",
      "-0.5 Mark for missing physical units (e.g. writing 40 instead of 40 km/h)."
    ]
  },
  4: {
    chapterNo: 4,
    chapterName: "Quadratic Equations",
    unitName: "Unit II: Algebra (20 Marks)",
    unitTotalMarks: 20,
    expectedMarks: "6 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 0, la5M: 1, case4M: 0 },
    markingSchemeRubric: [
      { step: "Discriminant formula and substitution (D = b² - 4ac)", marks: "1.0 Mark", rubricNote: "State condition: D ≥ 0 for real roots" },
      { step: "Quadratic formula: x = (-b ± √D) / 2a", marks: "1.5 Marks", rubricNote: "Careful handling of negative signs" },
      { step: "Rejecting extraneous negative roots for physical quantities", marks: "1.0 Mark", rubricNote: "Explicit reasoning: 'Speed/Age cannot be negative'" },
      { step: "Final boxed roots with correct units", marks: "0.5 Mark", rubricNote: "Distinct roots clearly labeled" }
    ],
    examinerPenalties: [
      "-0.5 Mark for writing x = -b ± √D / 2a (missing full fraction bar over 2a).",
      "-1.0 Mark for accepting a negative root for speed, distance, or age."
    ]
  },
  5: {
    chapterNo: 5,
    chapterName: "Arithmetic Progressions",
    unitName: "Unit II: Algebra (20 Marks)",
    unitTotalMarks: 20,
    expectedMarks: "6 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 0, sa3M: 0, la5M: 0, case4M: 1 },
    markingSchemeRubric: [
      { step: "Identifying first term 'a' and common difference 'd'", marks: "0.5 Mark", rubricNote: "d = a₂ - a₁ (watch negative signs!)" },
      { step: "General term formula: aₙ = a + (n - 1)d", marks: "1.0 Mark", rubricNote: "Formula statement" },
      { step: "Sum formula: Sₙ = (n/2)[2a + (n - 1)d] or (n/2)[a + l]", marks: "1.5 Marks", rubricNote: "Correct substitution" },
      { step: "Case study sub-question calculations and reasoning", marks: "1.0 Mark", rubricNote: "Contextual explanation" }
    ],
    examinerPenalties: [
      "-0.5 Mark if n comes out to be a fraction/negative and student fails to state 'n must be a positive integer'.",
      "-0.5 Mark for calculating d as a₁ - a₂ instead of a₂ - a₁."
    ]
  },
  6: {
    chapterNo: 6,
    chapterName: "Triangles",
    unitName: "Unit IV: Geometry (15 Marks)",
    unitTotalMarks: 15,
    expectedMarks: "9 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 1, case4M: 0 },
    markingSchemeRubric: [
      { step: "Given, To Prove, and Construction labeled with diagram", marks: "1.5 Marks", rubricNote: "Ruler-drawn diagram mandatory" },
      { step: "Theorem statement and proof justification (Basic Proportionality Theorem)", marks: "2.0 Marks", rubricNote: "Ratio of areas with common altitude" },
      { step: "Applying similarity criteria (AA, SAS, SSS)", marks: "1.0 Mark", rubricNote: "Must write corresponding vertices in correct order" },
      { step: "Final ratio / length calculation and Q.E.D.", marks: "0.5 Mark", rubricNote: "Final result statement" }
    ],
    examinerPenalties: [
      "-1.0 Mark if diagram is missing or drawn freehand without a ruler in 5M proof.",
      "-0.5 Mark if order of vertices in similarity statement is wrong (e.g. △ABC ∼ △RPQ instead of △PQR)."
    ]
  },
  7: {
    chapterNo: 7,
    chapterName: "Coordinate Geometry",
    unitName: "Unit III: Coordinate Geometry (6 Marks)",
    unitTotalMarks: 6,
    expectedMarks: "6 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 0, sa3M: 0, la5M: 0, case4M: 1 },
    markingSchemeRubric: [
      { step: "Distance Formula: √[(x₂ - x₁)² + (y₂ - y₁)²]", marks: "1.0 Mark", rubricNote: "Formula statement" },
      { step: "Section Formula: ((m₁x₂ + m₂x₁)/(m₁+m₂), (m₁y₂ + m₂y₁)/(m₁+m₂))", marks: "1.5 Marks", rubricNote: "Or k : 1 ratio setup" },
      { step: "Midpoint formula: ((x₁+x₂)/2, (y₁+y₂)/2)", marks: "0.5 Mark", rubricNote: "Parallelogram diagonals property" },
      { step: "Final coordinate boxed (x, y)", marks: "0.5 Mark", rubricNote: "Write as an ordered pair" }
    ],
    examinerPenalties: [
      "-0.5 Mark for reversing m₁ and m₂ in the Section Formula.",
      "-0.5 Mark for omitting square root symbol in Distance Formula."
    ]
  },
  8: {
    chapterNo: 8,
    chapterName: "Introduction to Trigonometry",
    unitName: "Unit V: Trigonometry (12 Marks)",
    unitTotalMarks: 12,
    expectedMarks: "8 Marks",
    questionPattern: { mcq1M: 3, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "T-Ratios definition from right triangle (sin θ = P/H, cos θ = B/H)", marks: "1.0 Mark", rubricNote: "Pythagoras Theorem verification" },
      { step: "Standard values table substitution (30°, 45°, 60°)", marks: "1.0 Mark", rubricNote: "Correct table value placement" },
      { step: "Identity conversion (sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ)", marks: "1.5 Marks", rubricNote: "Explicit identity stated in margin" },
      { step: "LHS = RHS proof conclusion", marks: "0.5 Mark", rubricNote: "Mandatory 'LHS = RHS, Hence Proved'" }
    ],
    examinerPenalties: [
      "-0.5 Mark for writing sin²A + cos²A = 1 without mentioning the identity name in brackets.",
      "-1.0 Mark for canceling terms across addition in fractions: e.g. (cos A + 1)/cos A = 1."
    ]
  },
  9: {
    chapterNo: 9,
    chapterName: "Some Applications of Trigonometry",
    unitName: "Unit V: Trigonometry (12 Marks)",
    unitTotalMarks: 12,
    expectedMarks: "4 Marks",
    questionPattern: { mcq1M: 0, vsa2M: 0, sa3M: 0, la5M: 0, case4M: 1 },
    markingSchemeRubric: [
      { step: "Correct geometrical diagram with labeled angles of elevation/depression", marks: "1.5 Marks", rubricNote: "Mandatory to get any subsequent marks!" },
      { step: "First right triangle ratio setup (tan θ = height / base)", marks: "1.0 Mark", rubricNote: "Equation (1)" },
      { step: "Second right triangle ratio setup", marks: "1.0 Mark", rubricNote: "Equation (2)" },
      { step: "Solving for unknown height / distance with √3 = 1.732", marks: "0.5 Mark", rubricNote: "Final boxed numerical answer with 'meters'" }
    ],
    examinerPenalties: [
      "-1.5 Marks (Zero on question) if diagram is missing or drawn with wrong angle orientation.",
      "-0.5 Mark for assigning angle of depression inside the triangle without alternate interior angle proof."
    ]
  },
  10: {
    chapterNo: 10,
    chapterName: "Circles",
    unitName: "Unit IV: Geometry (15 Marks)",
    unitTotalMarks: 15,
    expectedMarks: "6 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "Theorem 10.1 (Radius ⊥ Tangent at point of contact: OP ⊥ AB)", marks: "1.0 Mark", rubricNote: "Mandatory geometric justification" },
      { step: "Theorem 10.2 (Lengths of tangents from external point are equal: AP = BP)", marks: "1.5 Marks", rubricNote: "RHS Congruence in △OPA and △OPB" },
      { step: "Circumscribing quadrilateral proof steps (AB + CD = AD + BC)", marks: "1.0 Mark", rubricNote: "Adding four tangent equations" },
      { step: "Final angle / length determination", marks: "0.5 Mark", rubricNote: "Clear numerical result" }
    ],
    examinerPenalties: [
      "-1.0 Mark for assuming tangents are equal by SSS before proving congruence (circular reasoning).",
      "-0.5 Mark if point of contact is not clearly marked on circle."
    ]
  },
  11: {
    chapterNo: 11,
    chapterName: "Areas Related to Circles",
    unitName: "Unit VI: Mensuration (10 Marks)",
    unitTotalMarks: 10,
    expectedMarks: "4 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 1, sa3M: 0, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "Formula for Area of Sector = (θ/360°) × πr²", marks: "1.0 Mark", rubricNote: "Write formula with π = 22/7 or 3.14" },
      { step: "Formula for Area of Corresponding Triangle (1/2 r² sin θ)", marks: "1.0 Mark", rubricNote: "Segment calculation" },
      { step: "Area of Minor Segment = Area of Sector - Area of Triangle", marks: "1.0 Mark", rubricNote: "Subtraction step" },
      { step: "Final boxed area with cm² or m² units", marks: "0.5 Mark", rubricNote: "Mandatory unit check" }
    ],
    examinerPenalties: [
      "-0.5 Mark for writing cm instead of cm² for area.",
      "-0.5 Mark for using wrong value of π when specified (e.g. 22/7 when problem asks for 3.14)."
    ]
  },
  12: {
    chapterNo: 12,
    chapterName: "Surface Areas and Volumes",
    unitName: "Unit VI: Mensuration (10 Marks)",
    unitTotalMarks: 10,
    expectedMarks: "6 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 0, la5M: 1, case4M: 0 },
    markingSchemeRubric: [
      { step: "Correct identification of combined solid surfaces", marks: "1.0 Mark", rubricNote: "e.g. TSA = CSA of Cylinder + 2 × CSA of Hemispheres" },
      { step: "Formula statement for individual solid components", marks: "1.5 Marks", rubricNote: "Do not include common circular bases!" },
      { step: "Factoring out common terms (e.g. 2πr(h + r)) before arithmetic", marks: "1.5 Marks", rubricNote: "Topper calculation shortcut" },
      { step: "Final numerical value with correct volume unit (cm³ / litres)", marks: "1.0 Mark", rubricNote: "1000 cm³ = 1 litre conversion check" }
    ],
    examinerPenalties: [
      "-1.5 Marks for adding Total Surface Areas directly (adding the flat joined bases that are hidden!).",
      "-0.5 Mark for unit discrepancy (e.g. mixing mm with cm without converting)."
    ]
  },
  13: {
    chapterNo: 13,
    chapterName: "Statistics",
    unitName: "Unit VII: Statistics & Probability (11 Marks)",
    unitTotalMarks: 11,
    expectedMarks: "7 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 0, sa3M: 0, la5M: 1, case4M: 0 },
    markingSchemeRubric: [
      { step: "Frequency distribution table with class marks xᵢ = (U+L)/2", marks: "1.5 Marks", rubricNote: "Table accuracy check" },
      { step: "Assumed Mean / Step-Deviation method calculation table", marks: "1.5 Marks", rubricNote: "uᵢ = (xᵢ - a) / h" },
      { step: "Mode formula: l + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h", marks: "1.5 Marks", rubricNote: "Identifying modal class correctly" },
      { step: "Median formula: l + [(n/2 - cf) / f] × h", marks: "1.5 Marks", rubricNote: "Cumulative frequency cf preceding median class" },
      { step: "Final statistical average boxed", marks: "0.5 Mark", rubricNote: "Final result statement" }
    ],
    examinerPenalties: [
      "-1.0 Mark for taking cf from the median class itself instead of PRECEDING class.",
      "-0.5 Mark for missing table columns."
    ]
  },
  14: {
    chapterNo: 14,
    chapterName: "Probability",
    unitName: "Unit VII: Statistics & Probability (11 Marks)",
    unitTotalMarks: 11,
    expectedMarks: "4 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 1, sa3M: 0, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "Sample space definition and count of total outcomes n(S)", marks: "1.0 Mark", rubricNote: "Cards deck (52), two dice (36), coins (2ⁿ)" },
      { step: "Listing favorable outcomes n(E)", marks: "1.0 Mark", rubricNote: "Clear set or count" },
      { step: "Formula: P(E) = Number of favorable outcomes / Total outcomes", marks: "0.5 Mark", rubricNote: "Formula statement" },
      { step: "Simplified fraction in lowest terms (0 ≤ P(E) ≤ 1)", marks: "0.5 Mark", rubricNote: "Reduce fraction (e.g. 12/52 = 3/13)" }
    ],
    examinerPenalties: [
      "-0.5 Mark for writing probability > 1 or < 0.",
      "-0.5 Mark for forgetting that Face Cards = 12 (Kings, Queens, Jacks), Aces are NOT face cards."
    ]
  }
};

export const SCIENCE_OFFICIAL_BLUEPRINTS: Record<number, ChapterBlueprint> = {
  1: {
    chapterNo: 1,
    chapterName: "Chemical Reactions and Equations",
    unitName: "Unit I: Chemical Substances - Nature & Behaviour (25 Marks)",
    unitTotalMarks: 25,
    expectedMarks: "6 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "Balanced chemical equation with correct formulas", marks: "1.0 Mark", rubricNote: "Mass of reactants = mass of products" },
      { step: "State symbols included (s), (l), (g), (aq)", marks: "0.5 Mark", rubricNote: "Mandatory in CBSE rubric" },
      { step: "Observation of color change / precipitate / gas", marks: "1.0 Mark", rubricNote: "e.g. Green FeSO₄ turning reddish brown Fe₂O₃" },
      { step: "Identification of reaction type (Thermal Decomposition, Redox)", marks: "0.5 Mark", rubricNote: "Oxidizing / reducing agent identified" }
    ],
    examinerPenalties: [
      "-0.5 Mark for unbalancing or altering formula subscripts (e.g. writing Fe₂O₄ instead of Fe₂O₃).",
      "-0.5 Mark for omitting physical states in chemical equations."
    ]
  },
  2: {
    chapterNo: 2,
    chapterName: "Acids, Bases and Salts",
    unitName: "Unit I: Chemical Substances - Nature & Behaviour (25 Marks)",
    unitTotalMarks: 25,
    expectedMarks: "6 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 0, sa3M: 0, la5M: 0, case4M: 1 },
    markingSchemeRubric: [
      { step: "Chemical equation for salt preparation (Chlor-Alkali, POP, Bleaching Powder)", marks: "1.5 Marks", rubricNote: "Conditions such as 373K temperature" },
      { step: "Gas evolution confirmation test (H₂ pop test, CO₂ lime water milky)", marks: "1.0 Mark", rubricNote: "Test explanation" },
      { step: "pH range explanation & indicator color changes", marks: "1.0 Mark", rubricNote: "Acidic < 7, Neutral = 7, Basic > 7" }
    ],
    examinerPenalties: [
      "-0.5 Mark for writing POP formula without half water of crystallization: CaSO₄·1/2H₂O.",
      "-0.5 Mark for heating gypsum above 373K without noting that dead burnt plaster forms."
    ]
  },
  3: {
    chapterNo: 3,
    chapterName: "Metals and Non-Metals",
    unitName: "Unit I: Chemical Substances - Nature & Behaviour (25 Marks)",
    unitTotalMarks: 25,
    expectedMarks: "7 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "Electron dot diagram showing electron transfer", marks: "1.5 Marks", rubricNote: "Metal cation + Non-metal anion" },
      { step: "Metallurgy equations: Roasting (Sulfide, excess air) vs Calcination (Carbonate, limited air)", marks: "2.0 Marks", rubricNote: "Balanced equations with heat symbol" },
      { step: "Amphoteric oxide reactions with both acid and base", marks: "1.5 Marks", rubricNote: "Al₂O₃ + HCl and Al₂O₃ + NaOH" }
    ],
    examinerPenalties: [
      "-1.0 Mark for confusing Roasting (Sulfide ore) with Calcination (Carbonate ore).",
      "-0.5 Mark for omitting charges in electron transfer: [Mg]²⁺ [ :Cl: ]⁻₂."
    ]
  },
  4: {
    chapterNo: 4,
    chapterName: "Carbon and its Compounds",
    unitName: "Unit I: Chemical Substances - Nature & Behaviour (25 Marks)",
    unitTotalMarks: 25,
    expectedMarks: "6 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 0, la5M: 1, case4M: 0 },
    markingSchemeRubric: [
      { step: "Covalent bonding & Versatile nature (Catenation + Tetravalency)", marks: "1.0 Mark", rubricNote: "Cannot gain C⁴⁻ or lose C⁴⁺" },
      { step: "Homologous series general formula & -CH₂- difference", marks: "1.0 Mark", rubricNote: "14 u molecular mass difference" },
      { step: "Esterification reaction: Ethanol + Ethanoic acid with conc. H₂SO₄", marks: "1.5 Marks", rubricNote: "Sweet smelling ester CH₃COOC₂H₅" },
      { step: "Soap micelle formation diagram with hydrophobic and hydrophilic ends", marks: "1.5 Marks", rubricNote: "Emulsification of grease in water" }
    ],
    examinerPenalties: [
      "-1.0 Mark for drawing pentavalent carbon (carbon with 5 bonds). Carbon MUST have exactly 4 bonds.",
      "-0.5 Mark for omitting conc. H₂SO₄ catalyst in esterification."
    ]
  },
  5: {
    chapterNo: 5,
    chapterName: "Life Processes",
    unitName: "Unit II: World of Living (25 Marks)",
    unitTotalMarks: 25,
    expectedMarks: "9 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 1, sa3M: 0, la5M: 1, case4M: 0 },
    markingSchemeRubric: [
      { step: "Nephron / Human Heart labeled diagram", marks: "2.0 Marks", rubricNote: "Arrows showing direction of blood / filtrate flow" },
      { step: "Anaerobic vs Aerobic respiration pathways", marks: "1.5 Marks", rubricNote: "Glucose ⟶ Pyruvate ⟶ Lactic acid / Ethanol + CO₂" },
      { step: "Enzyme actions: Pepsin (acidic HCl) vs Trypsin (alkaline bile)", marks: "1.5 Marks", rubricNote: "Pancreatic juice function" }
    ],
    examinerPenalties: [
      "-1.0 Mark for drawing human heart without arrows showing double circulation.",
      "-0.5 Mark for claiming human muscles produce ethanol instead of lactic acid."
    ]
  },
  6: {
    chapterNo: 6,
    chapterName: "Control and Coordination",
    unitName: "Unit II: World of Living (25 Marks)",
    unitTotalMarks: 25,
    expectedMarks: "6 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "Neuron structure with electrical impulse flow: Dendrite ⟶ Cyton ⟶ Axon ⟶ Synapse", marks: "1.5 Marks", rubricNote: "Neurotransmitter chemical release" },
      { step: "Reflex arc pathway (Receptor ⟶ Sensory ⟶ Relay ⟶ Motor ⟶ Effector)", marks: "1.5 Marks", rubricNote: "Spinal cord central processing" },
      { step: "Plant hormones (Auxin, Gibberellin, Cytokinin, Abscisic Acid)", marks: "1.5 Marks", rubricNote: "Growth promoter vs inhibitor" }
    ],
    examinerPenalties: [
      "-0.5 Mark for confusing Auxin (phototropism) with Abscisic Acid (wilting of leaves)."
    ]
  },
  7: {
    chapterNo: 7,
    chapterName: "How do Organisms Reproduce?",
    unitName: "Unit II: World of Living (25 Marks)",
    unitTotalMarks: 25,
    expectedMarks: "6 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 0, sa3M: 0, la5M: 0, case4M: 1 },
    markingSchemeRubric: [
      { step: "Flower longitudinal section (Pistil: Stigma, Style, Ovary; Stamen: Anther, Filament)", marks: "2.0 Marks", rubricNote: "Pollination vs fertilization" },
      { step: "Double fertilization explanation (Syngamy + Triple Fusion ⟶ Endosperm)", marks: "1.5 Marks", rubricNote: "Pollen tube growth" },
      { step: "Contraceptive methods classification (Mechanical, Chemical, Surgical)", marks: "1.5 Marks", rubricNote: "STD prevention role of condoms" }
    ],
    examinerPenalties: [
      "-0.5 Mark for confusing pollination (transfer of pollen) with fertilization (fusion of gametes)."
    ]
  },
  8: {
    chapterNo: 8,
    chapterName: "Heredity and Evolution",
    unitName: "Unit II: World of Living (25 Marks)",
    unitTotalMarks: 25,
    expectedMarks: "4 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "Monohybrid cross Punnett square (TT × tt ⟶ F₁ Tt ⟶ F₂ 3:1 phenotypic, 1:2:1 genotypic)", marks: "2.0 Marks", rubricNote: "Complete Punnett grid" },
      { step: "Sex determination in human beings (XY male creates 50% X and 50% Y gametes)", marks: "1.5 Marks", rubricNote: "Father determines sex of child" },
      { step: "Dihybrid cross ratio (9:3:3:1) and Law of Independent Assortment", marks: "1.5 Marks", rubricNote: "Yellow/Round vs Green/Wrinkled" }
    ],
    examinerPenalties: [
      "-1.0 Mark for claiming mother determines sex of child. Father's sperm (X or Y) is solely responsible."
    ]
  },
  9: {
    chapterNo: 9,
    chapterName: "Light — Reflection and Refraction",
    unitName: "Unit III: Natural Phenomena (12 Marks)",
    unitTotalMarks: 12,
    expectedMarks: "8 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 0, la5M: 1, case4M: 0 },
    markingSchemeRubric: [
      { step: "Ray diagram with arrows on incoming and outgoing rays", marks: "2.0 Marks", rubricNote: "Arrows on rays are MANDATORY!" },
      { step: "Mirror formula: 1/f = 1/v + 1/u or Lens formula: 1/f = 1/v - 1/u", marks: "1.0 Mark", rubricNote: "Formula statement" },
      { step: "New Cartesian Sign Convention (u is ALWAYS negative; focal length concave -ve, convex +ve)", marks: "1.0 Mark", rubricNote: "Proper signs applied" },
      { step: "Magnification: m = -v/u (mirror) or m = +v/u (lens) with nature of image", marks: "1.0 Mark", rubricNote: "Real & Inverted or Virtual & Erect" }
    ],
    examinerPenalties: [
      "-1.0 Mark (Zero on ray diagram) if directional arrowheads are missing on light rays.",
      "-1.0 Mark for confusing mirror formula (+) with lens formula (-)."
    ]
  },
  10: {
    chapterNo: 10,
    chapterName: "The Human Eye and Colourful World",
    unitName: "Unit III: Natural Phenomena (12 Marks)",
    unitTotalMarks: 12,
    expectedMarks: "4 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "Defects of vision ray diagram (Myopia corrected by Concave lens; Hypermetropia by Convex lens)", marks: "2.0 Marks", rubricNote: "Defective eye vs corrected eye" },
      { step: "Atmospheric refraction: Twinkling of stars & Advanced sunrise / Delayed sunset (2 mins)", marks: "1.5 Marks", rubricNote: "Gradual change in refractive index" },
      { step: "Scattering of light (Tyndall Effect & Rayleigh law I ∝ 1/λ⁴; Red danger lights)", marks: "1.0 Mark", rubricNote: "Longer red wavelength scatters least" }
    ],
    examinerPenalties: [
      "-1.0 Mark for using convex lens to correct myopia (myopia requires concave diverging lens)."
    ]
  },
  11: {
    chapterNo: 11,
    chapterName: "Electricity",
    unitName: "Unit IV: Effects of Current (13 Marks)",
    unitTotalMarks: 13,
    expectedMarks: "7 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "Ohm's Law: V = IR statement and V-I graph", marks: "1.0 Mark", rubricNote: "Straight line through origin" },
      { step: "Factors affecting resistance: R = ρL/A", marks: "1.5 Marks", rubricNote: "Length doubled ⟶ R doubled; Area doubled ⟶ R halved" },
      { step: "Resistors in Series (Rₛ = R₁ + R₂ + ...) vs Parallel (1/Rₚ = 1/R₁ + 1/R₂ + ...)", marks: "1.5 Marks", rubricNote: "Circuit equivalent resistance" },
      { step: "Joule's Law of Heating: H = I²Rt and Electric Power P = VI = I²R = V²/R", marks: "1.0 Mark", rubricNote: "kWh commercial electrical unit" }
    ],
    examinerPenalties: [
      "-0.5 Mark for missing units: Amperes (A), Volts (V), Ohms (Ω), Joules (J), Watts (W).",
      "-1.0 Mark for calculating reciprocal of 1/Rₚ incorrectly."
    ]
  },
  12: {
    chapterNo: 12,
    chapterName: "Magnetic Effects of Electric Current",
    unitName: "Unit IV: Effects of Current (13 Marks)",
    unitTotalMarks: 13,
    expectedMarks: "6 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 0, sa3M: 0, la5M: 0, case4M: 1 },
    markingSchemeRubric: [
      { step: "Right-Hand Thumb Rule for circular magnetic field lines around straight conductor", marks: "1.0 Mark", rubricNote: "Thumb = Current; Fingers = Field" },
      { step: "Solenoid magnetic field pattern (uniform inside, identical to bar magnet outside)", marks: "1.5 Marks", rubricNote: "Soft iron core makes electromagnet" },
      { step: "Fleming's Left-Hand Rule: Thumb = Motion/Force, Forefinger = Magnetic Field, Center finger = Current", marks: "1.5 Marks", rubricNote: "Direction of magnetic force F = BIl" },
      { step: "Domestic electric circuits (Live 220V red, Neutral 0V black, Earth green; Role of Earth wire)", marks: "1.0 Mark", rubricNote: "Safety from leakage current" }
    ],
    examinerPenalties: [
      "-1.0 Mark for using right hand instead of Fleming's LEFT hand rule for motor force.",
      "-0.5 Mark for claiming magnetic field lines can intersect (they NEVER cross!)."
    ]
  },
  13: {
    chapterNo: 13,
    chapterName: "Our Environment",
    unitName: "Unit V: Natural Resources (5 Marks)",
    unitTotalMarks: 5,
    expectedMarks: "5 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "Trophic levels & 10% Law of energy transfer (Lindeman's Law)", marks: "1.5 Marks", rubricNote: "Only 10% energy reaches next level" },
      { step: "Biological Magnification: Progressive accumulation of non-biodegradable pesticides", marks: "1.5 Marks", rubricNote: "Maximum concentration in top carnivore (Human)" },
      { step: "Ozone layer depletion by CFCs and Montreal Protocol 1987", marks: "1.0 Mark", rubricNote: "UV radiation causes skin cancer" },
      { step: "Biodegradable vs Non-biodegradable waste management", marks: "1.0 Mark", rubricNote: "Decomposition by microbes" }
    ],
    examinerPenalties: [
      "-0.5 Mark for saying energy flows in a cycle (Energy flow in ecosystem is strictly UNIDIRECTIONAL)."
    ]
  }
};

// =========================================================================
// CBSE Class 10 Social Science (Code 087) Official Blueprints & Rubrics
// Standards: CBSE Official Curriculum 2026-2027
// Theory: 80 Marks | Internal: 20 Marks | Total: 100 Marks
// 4 Disciplines: History (20M), Geography (20M), Pol Science (20M), Economics (20M)
// =========================================================================

export const SST_OFFICIAL_BLUEPRINTS: Record<number, ChapterBlueprint> = {
  1: {
    chapterNo: 1,
    chapterName: "The Rise of Nationalism in Europe",
    unitName: "Unit I: India and the Contemporary World - II (History: 20 Marks)",
    unitTotalMarks: 20,
    expectedMarks: "6–8 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 1, case4M: 0 },
    markingSchemeRubric: [
      { step: "Frederic Sorrieu's utopian vision (1848 print analysis)", marks: "1.0 Mark", rubricNote: "Democratic and Social Republics" },
      { step: "French Revolution & Napoleonic Civil Code 1804 (Equality before law, removal of guilds)", marks: "1.5 Marks", rubricNote: "Administrative reforms" },
      { step: "Unification of Germany (Bismarck, Blood and Iron policy, 1871 Versailles proclamation)", marks: "1.5 Marks", rubricNote: "Three wars over 7 years" },
      { step: "Unification of Italy (Mazzini, Cavour, Garibaldi Red Shirts, Victor Emmanuel II 1861)", marks: "1.0 Mark", rubricNote: "Key personalities role" }
    ],
    examinerPenalties: [
      "-0.5 Mark for confusing Mazzini (Young Italy) with Garibaldi (Red Shirts).",
      "-1.0 Mark in 5M question for writing without chronological headings."
    ]
  },
  2: {
    chapterNo: 2,
    chapterName: "Nationalism in India",
    unitName: "Unit I: India and the Contemporary World - II (History: 20 Marks)",
    unitTotalMarks: 20,
    expectedMarks: "7–9 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 0, la5M: 1, case4M: 0, mapSkill: 2 },
    markingSchemeRubric: [
      { step: "First World War economic impacts & Satyagraha philosophy (Champaran, Kheda, Ahmedabad)", marks: "1.5 Marks", rubricNote: "Truth and non-violence force" },
      { step: "Rowlatt Act (1919), Jallianwala Bagh Massacre (13 April 1919) & Khilafat Movement", marks: "1.5 Marks", rubricNote: "General Dyer martial law" },
      { step: "Non-Cooperation Movement (1920-1922) spread in towns, countryside (Awadh), and tribal forests (Alluri Sitaram Raju)", marks: "1.5 Marks", rubricNote: "Chauri Chaura withdrawal" },
      { step: "Civil Disobedience Movement (1930 Dandi Salt March) vs NCM distinctions & Poona Pact (Sept 1932)", marks: "1.5 Marks", rubricNote: "Breaking law vs non-cooperation" }
    ],
    examinerPenalties: [
      "-1.0 Mark for confusing dates: Dandi March began 12 March 1930 and reached Dandi 6 April 1930.",
      "-0.5 Mark for omitting Baba Ramchandra in Oudh Kisan Sabha."
    ]
  },
  3: {
    chapterNo: 3,
    chapterName: "Power Sharing",
    unitName: "Unit III: Democratic Politics - II (Political Science: 20 Marks)",
    unitTotalMarks: 20,
    expectedMarks: "4–5 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "Ethnic composition of Belgium (59% Dutch in Flemish, 40% French in Wallonia, 1% German)", marks: "1.0 Mark", rubricNote: "Capital Brussels 80% French, 20% Dutch" },
      { step: "Ethnic composition & Majoritarianism in Sri Lanka (74% Sinhala, 18% Tamil; 1956 Act making Sinhala sole language)", marks: "1.5 Marks", rubricNote: "Led to civil war and distrust" },
      { step: "Belgian Model of Accommodation (Equal Dutch/French ministers, Community government)", marks: "1.5 Marks", rubricNote: "Avoided civic strife" },
      { step: "Prudential reasons (reduces conflict) vs Moral reasons (spirit of democracy) of power sharing", marks: "1.0 Mark", rubricNote: "Mandatory conceptual distinction" }
    ],
    examinerPenalties: [
      "-0.5 Mark for confusing Prudential (outcome-based) with Moral reasons."
    ]
  },
  4: {
    chapterNo: 4,
    chapterName: "Federalism",
    unitName: "Unit III: Democratic Politics - II (Political Science: 20 Marks)",
    unitTotalMarks: 20,
    expectedMarks: "4–5 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "Key features of Federalism (Two or more tiers, distinct jurisdictions, constitutionally protected)", marks: "1.5 Marks", rubricNote: "Courts interpret constitution" },
      { step: "'Coming Together' (USA, Switzerland, Australia) vs 'Holding Together' (India, Spain, Belgium)", marks: "1.5 Marks", rubricNote: "Degree of constituent state power" },
      { step: "Three-fold distribution of legislative powers (Union List, State List, Concurrent List, Residuary Subjects)", marks: "1.5 Marks", rubricNote: "Examples for each list mandatory" },
      { step: "Decentralisation in India (73rd & 74th Amendments 1992: mandatory elections, 33% women reservation, State Finance Commission)", marks: "1.0 Mark", rubricNote: "Panchayati Raj third tier" }
    ],
    examinerPenalties: [
      "-0.5 Mark for writing Police or Agriculture under Union list (they belong strictly to State list)."
    ]
  },
  5: {
    chapterNo: 5,
    chapterName: "Resources and Development",
    unitName: "Unit II: Contemporary India - II (Geography: 20 Marks)",
    unitTotalMarks: 20,
    expectedMarks: "4–5 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0, mapSkill: 1 },
    markingSchemeRubric: [
      { step: "Classification of Resources (Origin, Exhaustibility, Ownership, Status of Development)", marks: "1.0 Mark", rubricNote: "Potential vs Stock vs Reserves" },
      { step: "Sustainable Development & Rio Earth Summit 1992 (Agenda 21)", marks: "1.0 Mark", rubricNote: "Development without damaging ecology" },
      { step: "Land use pattern in India & Land Degradation causes (Deforestation, Overgrazing, Mining, Over-irrigation)", marks: "1.5 Marks", rubricNote: "State-specific causes: Punjab over-irrigation, MP mining" },
      { step: "Soil types in India (Alluvial, Black/Regur, Red/Yellow, Laterite, Arid) & Soil Conservation measures", marks: "1.5 Marks", rubricNote: "Contour ploughing, terrace farming, shelter belts" }
    ],
    examinerPenalties: [
      "-0.5 Mark for confusing Black soil (cotton, Deccan trap) with Laterite soil (leaching, cashew nut)."
    ]
  },
  6: {
    chapterNo: 6,
    chapterName: "Forest and Wildlife Resources",
    unitName: "Unit II: Contemporary India - II (Geography: 20 Marks)",
    unitTotalMarks: 20,
    expectedMarks: "3–4 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 0, la5M: 0, case4M: 0, mapSkill: 1 },
    markingSchemeRubric: [
      { step: "IUCN species classification (Normal, Endangered, Vulnerable, Rare, Endemic, Extinct)", marks: "1.5 Marks", rubricNote: "Examples: Lion-tailed macaque, Asiatic cheetah" },
      { step: "Reserved Forests (>50% most valuable) vs Protected Forests (1/3rd) vs Unclassed Forests", marks: "1.5 Marks", rubricNote: "Government management classifications" },
      { step: "Community conservation models (Sariska Tiger Reserve against mining, Bhairodev Dakav Sonchuri, Chipko Movement, Beej Bachao Andolan, JFM - Joint Forest Management 1988)", marks: "1.5 Marks", rubricNote: "Local village involvement" }
    ],
    examinerPenalties: [
      "-0.5 Mark for omitting the role of local communities in JFM."
    ]
  },
  7: {
    chapterNo: 7,
    chapterName: "Water Resources",
    unitName: "Unit II: Contemporary India - II (Geography: 20 Marks)",
    unitTotalMarks: 20,
    expectedMarks: "4–5 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0, mapSkill: 1 },
    markingSchemeRubric: [
      { step: "Causes of water scarcity (Overexploitation, unequal access, industrial pollution, excessive irrigation)", marks: "1.0 Mark", rubricNote: "Quantitative vs qualitative scarcity" },
      { step: "Multi-purpose River Valley Projects: Benefits (Hydropower, irrigation, flood control) vs Criticisms (Submergence, displacement, seismicity, siltation)", marks: "1.5 Marks", rubricNote: "Narmada Bachao Andolan" },
      { step: "Traditional Rainwater Harvesting systems (Kuls/Guls in Western Himalayas, Johads/Khadins in Rajasthan, Tankas, Rooftop harvesting)", marks: "1.5 Marks", rubricNote: "Tamil Nadu mandatory rooftop harvesting law" },
      { step: "Bamboo drip irrigation system in Meghalaya", marks: "1.0 Mark", rubricNote: "200-year-old eco-friendly system" }
    ],
    examinerPenalties: [
      "-0.5 Mark for not naming the state (Tamil Nadu) where rooftop rainwater harvesting is legally compulsory."
    ]
  },
  8: {
    chapterNo: 8,
    chapterName: "Development",
    unitName: "Unit IV: Understanding Economic Development (Economics: 20 Marks)",
    unitTotalMarks: 20,
    expectedMarks: "5–6 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "What Development Promises: Different people, different goals; Conflicting developmental goals", marks: "1.0 Mark", rubricNote: "Industrialist dam vs tribal displacement" },
      { step: "Income vs Other Goals (Freedom, security, respect, non-discrimination)", marks: "1.0 Mark", rubricNote: "Quality of life depends on non-material things" },
      { step: "National Development & Comparing Countries: Average/Per Capita Income (World Bank Criterion)", marks: "1.5 Marks", rubricNote: "PCI hides gross disparities" },
      { step: "UNDP Human Development Index (HDI) criteria: Per Capita Income + Life Expectancy at birth + Mean years of schooling", marks: "1.5 Marks", rubricNote: "Kerala vs Haryana comparison" }
    ],
    examinerPenalties: [
      "-0.5 Mark for saying World Bank uses HDI (World Bank uses ONLY Per Capita Income; UNDP uses HDI)."
    ]
  },
  9: {
    chapterNo: 9,
    chapterName: "Sectors of the Indian Economy",
    unitName: "Unit IV: Understanding Economic Development (Economics: 20 Marks)",
    unitTotalMarks: 20,
    expectedMarks: "7–8 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 1, sa3M: 0, la5M: 1, case4M: 0 },
    markingSchemeRubric: [
      { step: "Primary, Secondary, and Tertiary sectors definition with examples", marks: "1.0 Mark", rubricNote: "Interdependence of sectors" },
      { step: "Gross Domestic Product (GDP): Value of all FINAL goods and services produced within a country in a year", marks: "1.5 Marks", rubricNote: "Avoid double counting intermediate goods" },
      { step: "Historical shift in sectors & Rising importance of Tertiary sector in India", marks: "1.5 Marks", rubricNote: "Basic services, ICT boom, higher income elastic demand" },
      { step: "Disguised Unemployment in Agriculture & MGNREGA 2005 (Right to Work, 100 days guaranteed employment)", marks: "1.5 Marks", rubricNote: "Underemployment phenomenon" },
      { step: "Organised vs Unorganised sectors; Public vs Private sectors", marks: "1.0 Mark", rubricNote: "Job security, paid leaves, social security" }
    ],
    examinerPenalties: [
      "-1.0 Mark for defining GDP using intermediate goods value instead of FINAL goods value.",
      "-0.5 Mark for writing MGNREGA provides 150 days (Standard law guarantees 100 days)."
    ]
  },
  10: {
    chapterNo: 10,
    chapterName: "Money and Credit",
    unitName: "Unit IV: Understanding Economic Development (Economics: 20 Marks)",
    unitTotalMarks: 20,
    expectedMarks: "6–7 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 1 },
    markingSchemeRubric: [
      { step: "Barter system & Double Coincidence of Wants; Money as medium of exchange", marks: "1.0 Mark", rubricNote: "Eliminates need for coincidence" },
      { step: "Modern forms of money: Currency notes & Demand Deposits in banks (Cheque mechanism)", marks: "1.5 Marks", rubricNote: "Authorized by Government of India" },
      { step: "Loan activities of banks & Terms of Credit (Interest rate, Collateral, Documentation, Mode of repayment)", marks: "1.5 Marks", rubricNote: "Collateral is asset pledged as guarantee" },
      { step: "Formal Sector Loans (Banks, Cooperatives supervised by RBI) vs Informal Sector Loans (Moneylenders, traders with high interest)", marks: "1.5 Marks", rubricNote: "Debt trap danger in informal" },
      { step: "Self-Help Groups (SHGs) for the poor (15-20 women members, small savings, collateral-free group loans)", marks: "1.5 Marks", rubricNote: "Overcomes lack of collateral" }
    ],
    examinerPenalties: [
      "-0.5 Mark for omitting the supervisory role of RBI in formal credit (RBI monitors Cash Reserve Ratio and loan targets)."
    ]
  }
};

// =========================================================================
// CBSE Class 10 Hindi Course B (Code 085) Official Blueprints & Rubrics
// Standards: CBSE Official Curriculum 2026-2027
// Theory: 80 Marks | Internal: 20 Marks | Total: 100 Marks
// Khand 'A' (Objective MCQs: 40 Marks) | Khand 'B' (Descriptive Q&A + Writing: 40 Marks)
// =========================================================================

export const HINDI_OFFICIAL_BLUEPRINTS: Record<number, ChapterBlueprint> = {
  1: {
    chapterNo: 1,
    chapterName: "बड़े भाई साहब (प्रेमचंद)",
    unitName: "स्पर्श भाग-२ (गद्य खंड: 14 Marks)",
    unitTotalMarks: 14,
    expectedMarks: "4–5 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "दो भाइयों के स्वभावगत अंतर (किताबी रटन बनाम व्यावहारिक बुद्धि)", marks: "1.0 Mark", rubricNote: "स्पष्ट तुलनात्मक बिंदु" },
      { step: "रावण, शाहेरुम व चक्रवर्ती राजाओं के पतन के ऐतिहासिक उदाहरण", marks: "1.0 Mark", rubricNote: "अहंकार के दुष्परिणाम" },
      { step: "पतंगबाजी की घटना व बड़े भाई का बड़प्पन एवं कर्तव्य-बोध", marks: "1.0 Mark", rubricNote: "अंतिम मार्मिक संवाद" }
    ],
    examinerPenalties: [
      "-0.5 Mark for spelling errors in character names (e.g. शाहेरुम, रावण).",
      "-1.0 Mark if student fails to explain the core message: 'अनुभव किताबी ज्ञान से बड़ा होता है'."
    ]
  },
  2: {
    chapterNo: 2,
    chapterName: "डायरी का एक पन्ना (सीताराम सेकसरिया)",
    unitName: "स्पर्श भाग-२ (गद्य खंड: 14 Marks)",
    unitTotalMarks: 14,
    expectedMarks: "3–4 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "26 जनवरी 1931 कोलकाता का ऐतिहासिक महत्व व प्रथम स्वतंत्रता दिवस का उत्साह", marks: "1.0 Mark", rubricNote: "कोलकाता पर लगे कलंक का परिमार्जन" },
      { step: "पुलिस कमिश्नर की नोटिस बनाम राष्ट्रीय काउंसिल का खुला आह्वान", marks: "1.0 Mark", rubricNote: "अभूतपूर्व जन-आंदोलन" },
      { step: "सुभाष चंद्र बोस का नेतृत्व, पुलिसिया लाठीचार्ज व जानकी देवी/मदालसा का योगदान", marks: "1.0 Mark", rubricNote: "महिला सत्याग्रहियों का साहस" }
    ],
    examinerPenalties: [
      "-0.5 Mark for incorrect date (It is 26 January 1931, not 1930 or 1947).",
      "-0.5 Mark for omitting the role of women in the Monument march."
    ]
  },
  3: {
    chapterNo: 3,
    chapterName: "तँतारा-वामीरो कथा (लीलाधर मंडलोई)",
    unitName: "स्पर्श भाग-२ (गद्य खंड: 14 Marks)",
    unitTotalMarks: 14,
    expectedMarks: "4–5 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "तँतारा का परोपकारी चरित्र व उसकी रहस्यमयी लकड़ी की तलवार", marks: "1.0 Mark", rubricNote: "निःस्वार्थ जनसेवा" },
      { step: "पासा और लपाती गाँव की रूढ़िवादी वैवाहिक परंपरा का विरोध", marks: "1.0 Mark", rubricNote: "युवा पीढ़ी का विद्रोह" },
      { step: "क्रोध में धरती का दो टुकड़ों में फटना व रूढ़ियों के अंत हेतु आत्मबलिदान", marks: "1.0 Mark", rubricNote: "रूढ़ियाँ जब बंधन बन जाएँ तो टूटना ही श्रेयस्कर है" }
    ],
    examinerPenalties: [
      "-0.5 Mark for confusing village names (तँतारा पासा गाँव का था, वामीरो लपाती गाँव की थी).",
      "-0.5 Mark for spelling errors in 'तँतारा' (चंद्रबिंदु अनिवार्य)."
    ]
  },
  4: {
    chapterNo: 4,
    chapterName: "तीसरी कसम के शिल्पकार शैलेंद्र (प्रहलाद अग्रवाल)",
    unitName: "स्पर्श भाग-२ (गद्य खंड: 14 Marks)",
    unitTotalMarks: 14,
    expectedMarks: "3–4 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "शैलेंद्र की संवेदनशीलता व साहित्यिक निष्ठा (मारे गए गुलफाम पर फिल्म निर्माण)", marks: "1.0 Mark", rubricNote: "व्यावसायिक समझौते से इनकार" },
      { step: "राजकपूर की मित्रता व 'एक रुपया एडवांस' का प्रसंग", marks: "1.0 Mark", rubricNote: "कलाकार के प्रति आदर" },
      { step: "फिल्म के गीतों का दार्शनिक संदेश ('रातों दसों दिशाओं से कहेंगी अपनी कहानियाँ')", marks: "1.0 Mark", rubricNote: "राष्ट्रपति स्वर्ण पदक उपलब्धि" }
    ],
    examinerPenalties: [
      "-0.5 Mark for misidentifying the original author of the story (फणीश्वरनाथ 'रेणु')."
    ]
  },
  5: {
    chapterNo: 5,
    chapterName: "अब कहाँ दूसरे के दुख से दुखी होने वाले (निदा फाज़ली)",
    unitName: "स्पर्श भाग-२ (गद्य खंड: 14 Marks)",
    unitTotalMarks: 14,
    expectedMarks: "4–5 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "प्रकृति की सह-अस्तित्व की भावना व मानवीय स्वार्थ का दुष्परिणाम", marks: "1.0 Mark", rubricNote: "कंक्रीट के जंगल व बेघर होते पक्षी" },
      { step: "सुलेमान व चींटियों का संवाद एवं हज़रत नूह का जीवन भर का पश्चाताप", marks: "1.0 Mark", rubricNote: "पशु-पक्षियों के प्रति संवेदनशीलता" },
      { step: "लेखक की माँ द्वारा कबूतर के अंडे टूटने पर दिन भर का रोज़ा रखना", marks: "1.0 Mark", rubricNote: "प्रायश्चित व करुणा का अनुपम उदाहरण" }
    ],
    examinerPenalties: [
      "-0.5 Mark for confusing Sheikh Ayaz's father (चींटे को घर छोड़ने जाना) with Hazrat Nooh."
    ]
  },
  6: {
    chapterNo: 6,
    chapterName: "पतझर में टूटी पत्तियाँ (रवींद्र केलेकर)",
    unitName: "स्पर्श भाग-२ (गद्य खंड: 14 Marks)",
    unitTotalMarks: 14,
    expectedMarks: "3–4 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "गिन्नी का सोना: शुद्ध आदर्श (शुद्ध सोना) बनाम व्यावहारिकता (ताँबा मिला सोना)", marks: "1.0 Mark", rubricNote: "गाँधी जी का प्रैक्टिकल आइडियलिस्ट होना" },
      { step: "झेन की देन: जापानी टी-सेरेमनी (चा-नो-यू) की शांत वातावरण संरचना", marks: "1.0 Mark", rubricNote: "शांति व एकाग्रता का अनुभव" },
      { step: "वर्तमान क्षण में जीने का दर्शन (भूत और भविष्य मिथ्या हैं, वर्तमान ही सत्य है)", marks: "1.0 Mark", rubricNote: "मानसिक तनाव मुक्ति" }
    ],
    examinerPenalties: [
      "-0.5 Mark for defining Practical Idealism as lowering ideals for profit (Gandhiji never compromised ideals)."
    ]
  },
  7: {
    chapterNo: 7,
    chapterName: "कारतूस (हबीब तनवीर)",
    unitName: "स्पर्श भाग-२ (गद्य खंड: 14 Marks)",
    unitTotalMarks: 14,
    expectedMarks: "4–5 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "वज़ीर अली का देशप्रेम, अदम्य साहस व अंग्रेजों को भारत से बाहर खदेड़ने का संकल्प", marks: "1.0 Mark", rubricNote: "अवध के तख्त की मुक्ति" },
      { step: "कर्नल और लेफ्टिनेंट का खेमा एवं बनारस के अंग्रेज वकील की हत्या का औचित्य", marks: "1.0 Mark", rubricNote: "स्वाभिमान का परिचय" },
      { step: "सवार का अकेले खेमे में आना, कारतूस हासिल करना व कर्नल का स्तब्ध रह जाना", marks: "1.0 Mark", rubricNote: "'वह एक जाँबाज़ सिपाही है'" }
    ],
    examinerPenalties: [
      "-0.5 Mark for confusing Wazir Ali (patriot) with Saadat Ali (British stooge uncle)."
    ]
  },
  8: {
    chapterNo: 8,
    chapterName: "कबीर – साखी",
    unitName: "स्पर्श भाग-२ (काव्य खंड: 14 Marks)",
    unitTotalMarks: 14,
    expectedMarks: "4–5 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "मीठी वाणी का महत्व व 'आपा' (अहंकार) खोने का आध्यात्मिक अर्थ", marks: "1.0 Mark", rubricNote: "औषधि समान प्रभाव" },
      { step: "कस्तूरी कुंडल दृष्टांत: ईश्वर मंदिर-मस्जिद में नहीं, घट-घट में विद्यमान है", marks: "1.0 Mark", rubricNote: "अंतर्मुखी साधना" },
      { step: "सधुक्कड़ी भाषा, तत्सम-तद्भव व उपदेशात्मक दोहा छंद शिल्प", marks: "1.0 Mark", rubricNote: "काव्य-सौंदर्य एवं शिल्प" }
    ],
    examinerPenalties: [
      "-0.5 Mark for spelling errors in 'कस्तूरी', 'भुवंगम'."
    ]
  },
  9: {
    chapterNo: 9,
    chapterName: "मीरा – पद",
    unitName: "स्पर्श भाग-२ (काव्य खंड: 14 Marks)",
    unitTotalMarks: 14,
    expectedMarks: "3–4 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "भक्त-वत्सल भगवान के पौराणिक उद्धार (द्रौपदी, प्रह्लाद, ऐरावत गजराज)", marks: "1.0 Mark", rubricNote: "ईश्वर से अनन्य प्रार्थना" },
      { step: "चाकर बनने के तीन लाभ: दर्शन, नाम-स्मरण की जागीर व भाव-भक्ति संपत्ति", marks: "1.0 Mark", rubricNote: "दास्य भाव की पराकाष्ठा" },
      { step: "ब्रज-मिश्रित राजस्थानी भाषा व रूपक/अनुप्रास अलंकार सौंदर्य", marks: "1.0 Mark", rubricNote: "काव्य-शिल्प" }
    ],
    examinerPenalties: [
      "-0.5 Mark for writing Meera's bhakti was Madhurya only (In this syllabus, dasya-bhakti is highlighted)."
    ]
  },
  10: {
    chapterNo: 10,
    chapterName: "मैथिलीशरण गुप्त – मनुष्यता",
    unitName: "स्पर्श भाग-२ (काव्य खंड: 14 Marks)",
    unitTotalMarks: 14,
    expectedMarks: "4–5 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "सच्ची मनुष्यता व सुमृत्यु की परिभाषा (परहित में जीवन उत्सर्ग)", marks: "1.0 Mark", rubricNote: "अमरता का वरदान" },
      { step: "पौराणिक त्याग: दधीचि की अस्थियाँ, शिबि का मांस, कर्ण के कुंडल, रंतिदेव की थाली", marks: "1.0 Mark", rubricNote: "ऐतिहासिक प्रेरक संदर्भ" },
      { step: "'वही मनुष्य है कि जो मनुष्य के लिए मरे' का सार्वभौमिक संदेश व खड़ी बोली शिल्प", marks: "1.0 Mark", rubricNote: "ओजपूर्ण प्रवाह" }
    ],
    examinerPenalties: [
      "-0.5 Mark for attributing Dadhichi's sacrifice to flesh instead of bones (अस्थि दान)."
    ]
  },
  11: {
    chapterNo: 11,
    chapterName: "सुमित्रानंदन पंत – पर्वत प्रदेश में पावस",
    unitName: "स्पर्श भाग-२ (काव्य खंड: 14 Marks)",
    unitTotalMarks: 14,
    expectedMarks: "4–5 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "मेखलाकार पर्वत, सहस्त्र दृग-सुमन व नीचे ताल रूपी दर्पण का मानवीकरण", marks: "1.0 Mark", rubricNote: "छायावादी प्रकृति सौंदर्य" },
      { step: "झरनों का गौरव गान व साल के वृक्षों की आकाश को छूने की तीव्र आकांक्षा", marks: "1.0 Mark", rubricNote: "उच्चाकांक्षा रूपक" },
      { step: "अचानक धुंध छाना, बादलों का उड़ना व इंद्र का जादुई खेल (इंद्रजाल)", marks: "1.0 Mark", rubricNote: "नाटकीय वातावरण" }
    ],
    examinerPenalties: [
      "-0.5 Mark for missing the personification (मानवीकरण अलंकार) identification in 3M question."
    ]
  },
  12: {
    chapterNo: 12,
    chapterName: "वीरेन डंगवाल – तोप",
    unitName: "स्पर्श भाग-२ (काव्य खंड: 14 Marks)",
    unitTotalMarks: 14,
    expectedMarks: "3–4 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "1857 की ऐतिहासिक तोप का कंपनी बाग मुहाने पर धरोहर रूप में संरक्षण", marks: "1.0 Mark", rubricNote: "पुरखों की कुर्बानियों की याद" },
      { step: "वर्तमान में बच्चों की घुड़सवारी व गौरैयों की गपशप/तोप के मुँह में घुसना", marks: "1.0 Mark", rubricNote: "निर्जीव हो चुका हथियार" },
      { step: "मूल दार्शनिक संदेश: अत्याचारी क्रूर सत्ता कितनी भी शक्तिशाली हो, उसका अंत निश्चित है", marks: "1.0 Mark", rubricNote: "लोकतांत्रिक विजय" }
    ],
    examinerPenalties: [
      "-0.5 Mark for misidentifying the bird that enters the cannon (गौरैया / Sparrow)."
    ]
  },
  13: {
    chapterNo: 13,
    chapterName: "कैफ़ी आज़मी – कर चले हम फ़िदा",
    unitName: "स्पर्श भाग-२ (काव्य खंड: 14 Marks)",
    unitTotalMarks: 14,
    expectedMarks: "4–5 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "सैनिकों का देशवासियों को अंतिम भावुक आह्वान व वतन सुपुर्दगी", marks: "1.0 Mark", rubricNote: "सर्वस्व अर्पण" },
      { step: "मौत को दुल्हन मानना, सर पर कफ़न बाँधना व बलिदान के काफ़िले तैयार रखना", marks: "1.0 Mark", rubricNote: "देशप्रेम का जज्बा" },
      { step: "भारत भूमि रूपी सीता के सम्मान की रक्षा हेतु लक्ष्मण रेखा खींचना", marks: "1.0 Mark", rubricNote: "शत्रु रावण का मानमर्दन" }
    ],
    examinerPenalties: [
      "-0.5 Mark for confusing the historical context (1962 Sino-Indian War, 'Haqeeqat' film song)."
    ]
  },
  14: {
    chapterNo: 14,
    chapterName: "रवींद्रनाथ ठाकुर – आत्मत्राण",
    unitName: "स्पर्श भाग-२ (काव्य खंड: 14 Marks)",
    unitTotalMarks: 14,
    expectedMarks: "3–4 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "पारंपरिक प्रार्थनाओं से भिन्नता: दुखों से मुक्ति नहीं, संघर्ष का आत्मबल माँगना", marks: "1.0 Mark", rubricNote: "स्वावलंबन व पौरुष" },
      { step: "संसार द्वारा वंचना मिलने पर भी मन में संशय या ईश्वर पर अविश्वास न आना", marks: "1.0 Mark", rubricNote: "अडिग आस्था" },
      { step: "सुख और दुख दोनों परिस्थितियों में प्रभु के प्रति नतमस्तक रहने का पावन भाव", marks: "1.0 Mark", rubricNote: "सच्ची भक्ति का स्वरूप" }
    ],
    examinerPenalties: [
      "-0.5 Mark for writing that poet prays to remove sorrow (He explicitly prays to BEAR the sorrow, not remove it)."
    ]
  },
  15: {
    chapterNo: 15,
    chapterName: "संचयन: हरिहर काका (मिथिलेश्वर)",
    unitName: "संचयन भाग-२ (पूरक पाठ्यपुस्तक: 6 Marks)",
    unitTotalMarks: 6,
    expectedMarks: "3 Marks",
    questionPattern: { mcq1M: 0, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "पारिवारिक स्वार्थ, 15 बीघे जमीन का लालच व भाइयों की संवेदनहीनता", marks: "1.0 Mark", rubricNote: "खून के रिश्तों में लालच" },
      { step: "ठाकुरबारी के महंत की घिनौनी साजिश व धर्म की आड़ में हिंसा/अपहरण", marks: "1.0 Mark", rubricNote: "धार्मिक पाखंड का पर्दाफाश" },
      { step: "काका का मौन हो जाना व समाज में वृद्धों की उपेक्षा का यथार्थ चित्रण", marks: "1.0 Mark", rubricNote: "मार्मिक निष्कर्ष" }
    ],
    examinerPenalties: [
      "-0.5 Mark for omitting the exact land measurement (15 बीघे जमीन)."
    ]
  },
  16: {
    chapterNo: 16,
    chapterName: "संचयन: सपनों के-से दिन (गुरदयाल सिंह)",
    unitName: "संचयन भाग-२ (पूरक पाठ्यपुस्तक: 6 Marks)",
    unitTotalMarks: 6,
    expectedMarks: "3 Marks",
    questionPattern: { mcq1M: 0, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "बचपन की निश्छल यादें, स्कूल जाने का डर व पुरानी पुस्तकों की गंध", marks: "1.0 Mark", rubricNote: "बाल-मनोविज्ञान" },
      { step: "पीटी सर प्रीतम चंद का क्रूर अनुशासन, 'मुर्गा बनाना' व उनका निलंबन", marks: "1.0 Mark", rubricNote: "कठोरता का स्वरूप" },
      { step: "हेडमास्टर शर्मा जी की करुणा व प्रीतम चंद का तोतों को बादाम खिलाना", marks: "1.0 Mark", rubricNote: "व्यक्तित्व का विरोधाभास" }
    ],
    examinerPenalties: [
      "-0.5 Mark for spelling errors in Headmaster's name (मदन मोहन शर्मा जी)."
    ]
  },
  17: {
    chapterNo: 17,
    chapterName: "संचयन: टोपी शुक्ला (राही मासूम रज़ा)",
    unitName: "संचयन भाग-२ (पूरक पाठ्यपुस्तक: 6 Marks)",
    unitTotalMarks: 6,
    expectedMarks: "3 Marks",
    questionPattern: { mcq1M: 0, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "टोपी और इफ़्फ़न की सांप्रदायिक सद्भाव से परिपूर्ण निश्छल मित्रता", marks: "1.0 Mark", rubricNote: "जाति-धर्म से परे प्रेम" },
      { step: "इफ़्फ़न की दादी का मातृत्व, पूरबी बोली का माधुर्य व टोपी का भावात्मक जुड़ाव", marks: "1.0 Mark", rubricNote: "सहानुभूति की तलाश" },
      { step: "दादी के बाद टोपी का अकेलापन, घर में 'अम्मी' शब्द पर प्रताड़ना व परीक्षा में उपेक्षा", marks: "1.0 Mark", rubricNote: "बालक का मानसिक संघर्ष" }
    ],
    examinerPenalties: [
      "-0.5 Mark for confusing the real name of Iffan (सैय्यद जरगाम मुर्तज़ा)."
    ]
  },
  18: {
    chapterNo: 18,
    chapterName: "व्यावहारिक व्याकरण (16 Marks)",
    unitName: "खंड 'अ': व्याकरण (16 Marks)",
    unitTotalMarks: 16,
    expectedMarks: "16 Marks",
    questionPattern: { mcq1M: 16, vsa2M: 0, sa3M: 0, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "पदबंध: संज्ञा, सर्वनाम, विशेषण, क्रिया, क्रियाविशेषण पदबंध पहचान (4 अंक)", marks: "4.0 Marks", rubricNote: "5 में से 4 प्रश्न अनिवार्य" },
      { step: "वाक्य रूपांतरण: सरल, संयुक्त व मिश्र वाक्य का अर्थ-संरक्षित रूपांतरण (4 अंक)", marks: "4.0 Marks", rubricNote: "5 में से 4 प्रश्न अनिवार्य" },
      { step: "समास: तत्पुरुष, कर्मधारय, द्विगु, द्वंद्व, बहुव्रीहि, अव्ययीभाव विग्रह व पहचान (4 अंक)", marks: "4.0 Marks", rubricNote: "5 में से 4 प्रश्न अनिवार्य" },
      { step: "मुहावरे: पाठ्यपुस्तक आधारित अर्थ पहचान एवं सटीक वाक्य प्रयोग (4 अंक)", marks: "4.0 Marks", rubricNote: "5 में से 4 प्रश्न अनिवार्य" }
    ],
    examinerPenalties: [
      "-1.0 Mark per wrong MCQ selection in OMR/Answer Sheet."
    ]
  },
  19: {
    chapterNo: 19,
    chapterName: "रचनात्मक लेखन (22 Marks)",
    unitName: "खंड 'ब': रचनात्मक लेखन (22 Marks)",
    unitTotalMarks: 22,
    expectedMarks: "22 Marks",
    questionPattern: { mcq1M: 0, vsa2M: 0, sa3M: 1, la5M: 3, case4M: 1 },
    markingSchemeRubric: [
      { step: "अनुच्छेद लेखन (5 अंक): भूमिका 1M + विषय-विस्तार 3M + निष्कर्ष व भाषा 1M (100–120 शब्द)", marks: "5.0 Marks", rubricNote: "संकेत-बिंदुओं पर आधारित" },
      { step: "औपचारिक पत्र लेखन (5 अंक): प्रारूप 1M + विषय-सामग्री 3M + भाषा-शुद्धता 1M (100 शब्द)", marks: "5.0 Marks", rubricNote: "मानक शिकायती/संपादकीय प्रारूप" },
      { step: "सूचना लेखन (4 अंक): प्रारूप/बॉक्स 1M + विषय-वस्तु 2M + भाषा 1M (50 शब्द)", marks: "4.0 Marks", rubricNote: "चौकोर बॉक्स अनिवार्य" },
      { step: "विज्ञापन लेखन (3 अंक): बॉक्स व प्रस्तुति 1M + तुकबंदी/स्लोगन व सामग्री 1.5M + भाषा 0.5M (40 शब्द)", marks: "3.0 Marks", rubricNote: "आकर्षक दृश्य लेआउट" },
      { step: "ई-मेल / लघुकथा लेखन (5 अंक): प्रारूप/कथानक 1M + सामग्री/संवाद 3M + भाषा/सीख 1M (100 शब्द)", marks: "5.0 Marks", rubricNote: "विकल्प आधारित प्रश्न" }
    ],
    examinerPenalties: [
      "-0.5 Mark for missing square box in Notice or Advertisement.",
      "-0.5 Mark for crossing word limit by more than 20% in Paragraph.",
      "-0.5 Mark for grammatical syntax errors or illegible handwriting."
    ]
  }
};
