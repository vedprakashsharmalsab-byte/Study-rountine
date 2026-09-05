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
    unitName: "Unit I: Number Systems",
    unitTotalMarks: 6,
    expectedMarks: "6 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
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
    unitName: "Unit II: Algebra (Total 20 Marks)",
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
    unitName: "Unit II: Algebra (Total 20 Marks)",
    unitTotalMarks: 20,
    expectedMarks: "6 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 0 },
    markingSchemeRubric: [
      { step: "Ratios comparison (a₁/a₂, b₁/b₂, c₁/c₂)", marks: "1.0 Mark", rubricNote: "Condition for consistency / parallel lines" },
      { step: "Setting up simultaneous equations from word problem", marks: "1.5 Marks", rubricNote: "Clear 'Let speed = x, time = y' declarations" },
      { step: "Substitution / Elimination algebraic solving", marks: "1.5 Marks", rubricNote: "Clear steps showing elimination of variable" },
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
    unitName: "Unit II: Algebra (Total 20 Marks)",
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
    unitName: "Unit II: Algebra (Total 20 Marks)",
    unitTotalMarks: 20,
    expectedMarks: "6 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 0, la5M: 0, case4M: 1 },
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
    unitName: "Unit IV: Geometry (Total 15 Marks)",
    unitTotalMarks: 15,
    expectedMarks: "9–10 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 1, la5M: 1, case4M: 0 },
    markingSchemeRubric: [
      { step: "Given, To Prove, and Construction labeled with diagram", marks: "1.5 Marks", rubricNote: "Ruler-drawn diagram mandatory" },
      { step: "Theorem statement and proof justification (e.g. Basic Proportionality Theorem)", marks: "2.0 Marks", rubricNote: "Ratio of areas with common altitude" },
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
    unitName: "Unit III: Coordinate Geometry",
    unitTotalMarks: 6,
    expectedMarks: "6 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 0 },
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
    unitName: "Unit V: Trigonometry (Total 12 Marks)",
    unitTotalMarks: 12,
    expectedMarks: "8 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 0 },
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
    unitName: "Unit V: Trigonometry (Total 12 Marks)",
    unitTotalMarks: 12,
    expectedMarks: "4–5 Marks",
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
    unitName: "Unit IV: Geometry (Total 15 Marks)",
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
    unitName: "Unit VI: Mensuration (Total 10 Marks)",
    unitTotalMarks: 10,
    expectedMarks: "4 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
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
    unitName: "Unit VI: Mensuration (Total 10 Marks)",
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
    unitName: "Unit VII: Statistics & Probability (Total 11 Marks)",
    unitTotalMarks: 11,
    expectedMarks: "7 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 0, la5M: 1, case4M: 0 },
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
    unitName: "Unit VII: Statistics & Probability (Total 11 Marks)",
    unitTotalMarks: 11,
    expectedMarks: "4 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
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
    expectedMarks: "6–8 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 0 },
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
    expectedMarks: "6–8 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 1 },
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
    expectedMarks: "7–9 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 1, sa3M: 1, la5M: 1, case4M: 0 },
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
    expectedMarks: "6–8 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 1, la5M: 1, case4M: 0 },
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
    expectedMarks: "8–10 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 1, sa3M: 1, la5M: 1, case4M: 0 },
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
    expectedMarks: "6–7 Marks",
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
    expectedMarks: "6–8 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 1 },
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
    expectedMarks: "5–7 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 0 },
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
    expectedMarks: "9–10 Marks",
    questionPattern: { mcq1M: 2, vsa2M: 0, sa3M: 1, la5M: 1, case4M: 0 },
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
    expectedMarks: "4–5 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 0 },
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
    expectedMarks: "7–8 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 0, la5M: 1, case4M: 0 },
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
    expectedMarks: "6–7 Marks",
    questionPattern: { mcq1M: 1, vsa2M: 1, sa3M: 1, la5M: 0, case4M: 1 },
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
    questionPattern: { mcq1M: 1, vsa2M: 0, sa3M: 1, la5M: 0, case4M: 0 },
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
