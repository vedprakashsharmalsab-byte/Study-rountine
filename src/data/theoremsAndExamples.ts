export interface BoardTheoremOrExample {
  id: string;
  type: "Theorem Proof" | "NCERT Board Example" | "Mandatory Derivation";
  chapterNo: number;
  chapterName: string;
  title: string;
  marks: number; // 2, 3, 4, or 5
  boardFrequency: string; // e.g. "98% Recurrence (CBSE 2024, 2023, 2020, 2019, 2018)"
  ncertReference: string; // e.g. "NCERT Page 124, Theorem 6.1"
  statement: string;
  given?: string;
  toProve?: string;
  construction?: string;
  sheetSteps: {
    marginTag?: string; // e.g. "Ans.", "Step 1", "Eq (1)"
    content: string;    // Derivation / proof text with math
    reason?: string;    // Right-aligned justification e.g. "By Construction", "Alt. Int. Angles"
  }[];
  conclusion: string;   // Boxed final result
  examinerTrap: string; // Warning where students lose 0.5-1 mark
}

export const THEOREMS_AND_EXAMPLES_BANK: BoardTheoremOrExample[] = [
  // ==========================================
  // 1. CHAPTER 6: TRIANGLES THEOREMS
  // ==========================================
  {
    id: "thm_6_1",
    type: "Theorem Proof",
    chapterNo: 6,
    chapterName: "Triangles",
    title: "Theorem 6.1: Basic Proportionality Theorem (BPT / Thales Theorem)",
    marks: 5,
    boardFrequency: "99% Recurrence (CBSE 2024, 2023, 2022, 2020, 2019, 2018, 2017)",
    ncertReference: "NCERT Class 10, Chapter 6, Theorem 6.1 (Page 124)",
    statement: "If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.",
    given: "A triangle △ABC in which a line parallel to side BC intersects other two sides AB and AC at D and E respectively (DE ∥ BC).",
    toProve: "$\\frac{AD}{DB} = \\frac{AE}{EC}$",
    construction: "Join BE and CD, and draw DM ⊥ AC and EN ⊥ AB.",
    sheetSteps: [
      {
        marginTag: "Given",
        content: "In $\\Delta ABC$, $DE \\parallel BC$ intersecting $AB$ at $D$ and $AC$ at $E$."
      },
      {
        marginTag: "To Prove",
        content: "$\\frac{AD}{DB} = \\frac{AE}{EC}$"
      },
      {
        marginTag: "Constr.",
        content: "Join $BE$ and $CD$. Draw $DM \\perp AC$ and $EN \\perp AB$."
      },
      {
        marginTag: "Step 1",
        content: "$\\text{Area}(\\Delta ADE) = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times AD \\times EN$",
        reason: "Taking AD as base, EN is altitude"
      },
      {
        marginTag: "Step 2",
        content: "$\\text{Area}(\\Delta BDE) = \\frac{1}{2} \\times DB \\times EN$",
        reason: "EN is altitude on extended base DB"
      },
      {
        marginTag: "Ratio 1",
        content: "$\\frac{\\text{Area}(\\Delta ADE)}{\\text{Area}(\\Delta BDE)} = \\frac{\\frac{1}{2} \\times AD \\times EN}{\\frac{1}{2} \\times DB \\times EN} = \\frac{AD}{DB} \\quad \\dots (1)$",
        reason: "Dividing Eq (1) by Eq (2)"
      },
      {
        marginTag: "Step 3",
        content: "Similarly, $\\text{Area}(\\Delta ADE) = \\frac{1}{2} \\times AE \\times DM$ and $\\text{Area}(\\Delta DEC) = \\frac{1}{2} \\times EC \\times DM$",
        reason: "Taking AE & EC as bases with altitude DM"
      },
      {
        marginTag: "Ratio 2",
        content: "$\\frac{\\text{Area}(\\Delta ADE)}{\\text{Area}(\\Delta DEC)} = \\frac{\\frac{1}{2} \\times AE \\times DM}{\\frac{1}{2} \\times EC \\times DM} = \\frac{AE}{EC} \\quad \\dots (2)$",
        reason: "Dividing equations"
      },
      {
        marginTag: "Step 4",
        content: "Notice that $\\Delta BDE$ and $\\Delta DEC$ are on the same base $DE$ and between the same parallel lines $DE$ and $BC$.",
        reason: "Theorems on areas of triangles"
      },
      {
        marginTag: "Step 5",
        content: "$\\therefore \\text{Area}(\\Delta BDE) = \\text{Area}(\\Delta DEC) \\quad \\dots (3)$",
        reason: "Same base & between same parallels"
      },
      {
        marginTag: "Equating",
        content: "From (1), (2), and (3), the left-hand sides are equal: $\\frac{\\text{Area}(\\Delta ADE)}{\\text{Area}(\\Delta BDE)} = \\frac{\\text{Area}(\\Delta ADE)}{\\text{Area}(\\Delta DEC)}$",
        reason: "Numerators identical, denominators equal from (3)"
      }
    ],
    conclusion: "$\\frac{AD}{DB} = \\frac{AE}{EC} \\quad \\text{[Hence Proved]}$",
    examinerTrap: "Crucial Examiner Check: 1 Mark is deducted if you forget to state 'EN is perpendicular to AB and acts as altitude for the obtuse triangle △BDE'. Always write the reason for Eq (3) clearly!"
  },
  {
    id: "thm_6_2",
    type: "Theorem Proof",
    chapterNo: 6,
    chapterName: "Triangles",
    title: "Theorem 6.2: Converse of Basic Proportionality Theorem",
    marks: 3,
    boardFrequency: "85% Recurrence (CBSE 2023, 2020, 2018)",
    ncertReference: "NCERT Class 10, Chapter 6, Theorem 6.2 (Page 126)",
    statement: "If a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side.",
    given: "A triangle △ABC and a line DE intersecting AB at D and AC at E such that AD / DB = AE / EC.",
    toProve: "DE ∥ BC",
    construction: "If DE is not parallel to BC, let there be another line DE' parallel to BC.",
    sheetSteps: [
      {
        marginTag: "Given",
        content: "In $\\Delta ABC$, $\\frac{AD}{DB} = \\frac{AE}{EC} \\quad \\dots (1)$"
      },
      {
        marginTag: "Assumption",
        content: "Assume $DE$ is not parallel to $BC$. Draw a line $DE' \\parallel BC$ intersecting $AC$ at $E'$."
      },
      {
        marginTag: "Step 1",
        content: "Since $DE' \\parallel BC$, by Basic Proportionality Theorem (Theorem 6.1): $\\frac{AD}{DB} = \\frac{AE'}{E'C} \\quad \\dots (2)$",
        reason: "By Thales Theorem (BPT)"
      },
      {
        marginTag: "Step 2",
        content: "Comparing (1) and (2): $\\frac{AE}{EC} = \\frac{AE'}{E'C}$",
        reason: "LHS equal in both equations"
      },
      {
        marginTag: "Step 3",
        content: "Adding 1 to both sides: $\\frac{AE}{EC} + 1 = \\frac{AE'}{E'C} + 1 \\implies \\frac{AE + EC}{EC} = \\frac{AE' + E'C}{E'C}$",
        reason: "Adding unity to both sides"
      },
      {
        marginTag: "Step 4",
        content: "$\\frac{AC}{EC} = \\frac{AC}{E'C} \\implies EC = E'C$",
        reason: "Since AE + EC = AC and AE' + E'C = AC"
      },
      {
        marginTag: "Step 5",
        content: "This is possible only when $E$ and $E'$ coincide. Therefore, our assumption was incorrect.",
        reason: "Points E and E' are the same point"
      }
    ],
    conclusion: "$DE \\parallel BC \\quad \\text{[Hence Proved]}$",
    examinerTrap: "Method of Contradiction: You must clearly show 'Adding 1 to both sides' to get AC/EC = AC/E'C. Skipping this algebra costs 1 mark."
  },
  {
    id: "thm_10_1",
    type: "Theorem Proof",
    chapterNo: 10,
    chapterName: "Circles",
    title: "Theorem 10.1: Tangent is Perpendicular to Radius at Point of Contact",
    marks: 3,
    boardFrequency: "90% Recurrence (CBSE 2024, 2023, 2021, 2019)",
    ncertReference: "NCERT Class 10, Chapter 10, Theorem 10.1 (Page 208)",
    statement: "The tangent at any point of a circle is perpendicular to the radius through the point of contact.",
    given: "A circle with centre O and a tangent XY to the circle at a point P.",
    toProve: "$OP \\perp XY$",
    construction: "Take a point Q on XY other than P and join OQ.",
    sheetSteps: [
      {
        marginTag: "Given",
        content: "A circle $C(O, r)$ and a tangent line $XY$ touching the circle at point $P$."
      },
      {
        marginTag: "To Prove",
        content: "$OP \\perp XY$"
      },
      {
        marginTag: "Constr.",
        content: "Take any point $Q$ on $XY$ other than $P$. Join $OQ$, intersecting the circle at $R$."
      },
      {
        marginTag: "Step 1",
        content: "The point $Q$ must lie outside the circle. (If $Q$ lies inside, $XY$ would be a secant, not a tangent).",
        reason: "Definition of a tangent"
      },
      {
        marginTag: "Step 2",
        content: "$OQ = OR + RQ$. Since $OR = OP = r$ (radii of the same circle), we have: $OQ = OP + RQ$",
        reason: "R lies on segment OQ"
      },
      {
        marginTag: "Step 3",
        content: "$\\therefore OQ > OP$ for every point $Q$ on $XY$ other than $P$.",
        reason: "As RQ > 0"
      },
      {
        marginTag: "Step 4",
        content: "$OP$ is the shortest distance of all the distances of the point $O$ to the points on line $XY$.",
        reason: "OP is shorter than any other segment OQ"
      },
      {
        marginTag: "Step 5",
        content: "Since the shortest distance between a point and a line is always the perpendicular distance:",
        reason: "Geometric property of perpendiculars"
      }
    ],
    conclusion: "$OP \\perp XY \\quad \\text{[Hence Proved]}$",
    examinerTrap: "Do NOT just write 'by definition'. You must write the proof that OP is the shortest distance among all segments from O to XY."
  },
  {
    id: "thm_10_2",
    type: "Theorem Proof",
    chapterNo: 10,
    chapterName: "Circles",
    title: "Theorem 10.2: Lengths of Tangents from an External Point are Equal",
    marks: 5,
    boardFrequency: "99% Recurrence (CBSE 2024, 2023, 2022, 2020, 2019, 2017)",
    ncertReference: "NCERT Class 10, Chapter 10, Theorem 10.2 (Page 211)",
    statement: "The lengths of tangents drawn from an external point to a circle are equal.",
    given: "A circle with centre O, a point P lying outside the circle and two tangents PQ, PR on the circle from P.",
    toProve: "$PQ = PR$",
    construction: "Join OP, OQ and OR.",
    sheetSteps: [
      {
        marginTag: "Given",
        content: "A circle $C(O, r)$, external point $P$, tangents $PQ$ and $PR$ touching circle at $Q$ and $R$."
      },
      {
        marginTag: "To Prove",
        content: "$PQ = PR$"
      },
      {
        marginTag: "Constr.",
        content: "Join $OP$, $OQ$, and $OR$."
      },
      {
        marginTag: "Step 1",
        content: "$\\angle OQP = 90^\\circ$ and $\\angle ORP = 90^\\circ$",
        reason: "Theorem 10.1: Tangent ⊥ Radius at point of contact"
      },
      {
        marginTag: "Step 2",
        content: "In right-angled triangles $\\Delta OQP$ and $\\Delta ORP$:",
        reason: "Comparing triangles"
      },
      {
        marginTag: "R",
        content: "$\\angle OQP = \\angle ORP = 90^\\circ$",
        reason: "Each 90° (Right angle)"
      },
      {
        marginTag: "H",
        content: "$OP = OP$",
        reason: "Common hypotenuse"
      },
      {
        marginTag: "S",
        content: "$OQ = OR$",
        reason: "Radii of the same circle"
      },
      {
        marginTag: "Congruence",
        content: "$\\therefore \\Delta OQP \\cong \\Delta ORP$",
        reason: "By RHS Congruence Criterion"
      },
      {
        marginTag: "CPCT",
        content: "$PQ = PR$",
        reason: "Corresponding Parts of Congruent Triangles (CPCT)"
      }
    ],
    conclusion: "$PQ = PR \\quad \\text{[Hence Proved]}$",
    examinerTrap: "FATAL ERROR: Never write SSS criterion by assuming PQ = PR before it is proved (circular reasoning)! You MUST use RHS congruence using OP (hypotenuse) and OQ=OR (radii)."
  },

  // ==========================================
  // 2. CRITICAL NCERT SOLVED EXAMPLES (CH 6)
  // ==========================================
  {
    id: "ncert_ch6_ex1",
    type: "NCERT Board Example",
    chapterNo: 6,
    chapterName: "Triangles",
    title: "NCERT Ch 6 Example 1: Parallel Line Corollary AD/AB = AE/AC",
    marks: 2,
    boardFrequency: "92% Recurrence in Section B (2 Marks)",
    ncertReference: "NCERT Class 10, Chapter 6, Example 1 (Page 126)",
    statement: "If a line intersects sides AB and AC of a △ABC at D and E respectively and is parallel to BC, prove that AD / AB = AE / AC.",
    sheetSteps: [
      {
        marginTag: "Given",
        content: "In $\\Delta ABC$, $DE \\parallel BC$ with $D$ on $AB$ and $E$ on $AC$."
      },
      {
        marginTag: "Step 1",
        content: "By Basic Proportionality Theorem (Theorem 6.1): $\\frac{AD}{DB} = \\frac{AE}{EC}$",
        reason: "By BPT (since DE ∥ BC)"
      },
      {
        marginTag: "Step 2",
        content: "Inverting both sides: $\\frac{DB}{AD} = \\frac{EC}{AE}$",
        reason: "Taking reciprocals"
      },
      {
        marginTag: "Step 3",
        content: "Adding 1 to both sides: $\\frac{DB}{AD} + 1 = \\frac{EC}{AE} + 1 \\implies \\frac{DB + AD}{AD} = \\frac{EC + AE}{AE}$",
        reason: "Adding 1 to both sides"
      },
      {
        marginTag: "Step 4",
        content: "$\\frac{AB}{AD} = \\frac{AC}{AE}$",
        reason: "Since DB + AD = AB and EC + AE = AC"
      },
      {
        marginTag: "Step 5",
        content: "Taking reciprocals once again: $\\frac{AD}{AB} = \\frac{AE}{AC}$",
        reason: "Inverting back"
      }
    ],
    conclusion: "$\\frac{AD}{AB} = \\frac{AE}{AC} \\quad \\text{[Hence Proved]}$",
    examinerTrap: "Do NOT simply say 'obviously'. You must show the inversion, addition of 1, and re-inversion for full 2 marks."
  },
  {
    id: "ncert_ch6_ex2",
    type: "NCERT Board Example",
    chapterNo: 6,
    chapterName: "Triangles",
    title: "NCERT Ch 6 Example 2: Trapezium Parallel Line Ratio AE/ED = BF/FC",
    marks: 3,
    boardFrequency: "95% Recurrence in Section C (3 Marks)",
    ncertReference: "NCERT Class 10, Chapter 6, Example 2 (Page 127)",
    statement: "ABCD is a trapezium with AB ∥ DC. E and F are points on non-parallel sides AD and BC respectively such that EF is parallel to AB. Show that AE / ED = BF / FC.",
    sheetSteps: [
      {
        marginTag: "Given",
        content: "Trapezium $ABCD$ where $AB \\parallel DC$, and $EF \\parallel AB$ with $E$ on $AD$, $F$ on $BC$."
      },
      {
        marginTag: "To Prove",
        content: "$\\frac{AE}{ED} = \\frac{BF}{FC}$"
      },
      {
        marginTag: "Constr.",
        content: "Join diagonal $AC$ to intersect $EF$ at point $G$."
      },
      {
        marginTag: "Step 1",
        content: "Since $AB \\parallel DC$ and $EF \\parallel AB$, lines parallel to the same line are parallel to each other: $\\therefore EF \\parallel DC$",
        reason: "Transitivity of parallel lines"
      },
      {
        marginTag: "Step 2",
        content: "In $\\Delta ADC$, $EG \\parallel DC$ (as $G$ lies on $EF$). By BPT: $\\frac{AE}{ED} = \\frac{AG}{GC} \\quad \\dots (1)$",
        reason: "By Basic Proportionality Theorem"
      },
      {
        marginTag: "Step 3",
        content: "In $\\Delta CAB$, $GF \\parallel AB$. By BPT: $\\frac{CG}{GA} = \\frac{CF}{FB} \\implies \\frac{AG}{GC} = \\frac{BF}{FC} \\quad \\dots (2)$",
        reason: "By BPT and inverting"
      },
      {
        marginTag: "Step 4",
        content: "From equations (1) and (2), both $\\frac{AE}{ED}$ and $\\frac{BF}{FC}$ are equal to $\\frac{AG}{GC}$:",
        reason: "Equating RHS"
      }
    ],
    conclusion: "$\\frac{AE}{ED} = \\frac{BF}{FC} \\quad \\text{[Hence Proved]}$",
    examinerTrap: "Without the construction 'Join AC to intersect EF at G', you cannot apply BPT! Construction step carries 0.5 mark."
  },
  {
    id: "ncert_ch6_ex3",
    type: "NCERT Board Example",
    chapterNo: 6,
    chapterName: "Triangles",
    title: "NCERT Ch 6 Example 3: Proportional Sides to Isosceles Triangle Proof",
    marks: 3,
    boardFrequency: "88% Recurrence in CBSE Board Exams",
    ncertReference: "NCERT Class 10, Chapter 6, Example 3 (Page 127)",
    statement: "In the given figure, PS / SQ = PT / TR and ∠PST = ∠PRQ. Prove that △PQR is an isosceles triangle.",
    sheetSteps: [
      {
        marginTag: "Given",
        content: "$\\frac{PS}{SQ} = \\frac{PT}{TR}$ and $\\angle PST = \\angle PRQ$."
      },
      {
        marginTag: "To Prove",
        content: "$\\Delta PQR$ is an isosceles triangle (i.e., $PQ = PR$)."
      },
      {
        marginTag: "Step 1",
        content: "Since $\\frac{PS}{SQ} = \\frac{PT}{TR}$, by Converse of BPT (Theorem 6.2): $ST \\parallel QR$",
        reason: "Converse of Thales Theorem"
      },
      {
        marginTag: "Step 2",
        content: "Therefore, $\\angle PST = \\angle PQR \\quad \\dots (1)$",
        reason: "Corresponding angles ($ST \\parallel QR$ and transversal $PQ$)"
      },
      {
        marginTag: "Step 3",
        content: "We are given that $\\angle PST = \\angle PRQ \\quad \\dots (2)$",
        reason: "Given in question statement"
      },
      {
        marginTag: "Step 4",
        content: "From (1) and (2): $\\angle PQR = \\angle PRQ$",
        reason: "Both equal to ∠PST"
      },
      {
        marginTag: "Step 5",
        content: "In $\\Delta PQR$, sides opposite to equal angles are equal: $PR = PQ$",
        reason: "Sides opposite to equal angles are equal"
      }
    ],
    conclusion: "$\\Delta PQR \\text{ is an isosceles triangle with } PQ = PR \\quad \\text{[Hence Proved]}$",
    examinerTrap: "Do NOT confuse BPT with its Converse. Here ratio is given, so Converse of BPT proves ST ∥ QR."
  },
  {
    id: "ncert_ch6_ex7",
    type: "NCERT Board Example",
    chapterNo: 6,
    chapterName: "Triangles",
    title: "NCERT Ch 6 Example 7: The Iconic Lamp-Post Walking Shadow Problem",
    marks: 4,
    boardFrequency: "96% Recurrence (CBSE 2024, 2023, 2020, 2019, 2016)",
    ncertReference: "NCERT Class 10, Chapter 6, Example 7 (Page 135)",
    statement: "A girl of height 90 cm is walking away from the base of a lamp-post at a speed of 1.2 m/s. If the lamp is 3.6 m above the ground, find the length of her shadow after 4 seconds.",
    sheetSteps: [
      {
        marginTag: "Step 1",
        content: "Let $AB$ be the lamp-post and $CD$ be the girl. Let $DE = x$ metres be the length of shadow.",
        reason: "Defining variables"
      },
      {
        marginTag: "Step 2",
        content: "Height of lamp-post $AB = 3.6\\text{ m}$. Height of girl $CD = 90\\text{ cm} = 0.9\\text{ m}$.",
        reason: "Converting cm to m"
      },
      {
        marginTag: "Step 3",
        content: "Speed of girl $= 1.2\\text{ m/s}$. Distance walked in $4\\text{ s}$: $BD = 1.2 \\times 4 = 4.8\\text{ m}$.",
        reason: "Distance = Speed × Time"
      },
      {
        marginTag: "Step 4",
        content: "Total base distance of big triangle $BE = BD + DE = 4.8 + x$.",
        reason: "Segment addition"
      },
      {
        marginTag: "Step 5",
        content: "In $\\Delta ABE$ and $\\Delta CDE$:\n$\\angle B = \\angle D = 90^\\circ$ (both standing vertical to ground)\n$\\angle E = \\angle E$ (common angle)",
        reason: "Angle equality"
      },
      {
        marginTag: "Step 6",
        content: "$\\therefore \\Delta ABE \\sim \\Delta CDE$",
        reason: "By AA Similarity Criterion"
      },
      {
        marginTag: "Step 7",
        content: "$\\frac{BE}{DE} = \\frac{AB}{CD} \\implies \\frac{4.8 + x}{x} = \\frac{3.6}{0.9} = 4$",
        reason: "Corresponding sides of similar triangles"
      },
      {
        marginTag: "Step 8",
        content: "$4.8 + x = 4x \\implies 3x = 4.8 \\implies x = 1.6\\text{ m}$",
        reason: "Solving linear equation"
      }
    ],
    conclusion: "$\\text{Length of her shadow after 4 seconds } = 1.6\\text{ m } (160\\text{ cm})$",
    examinerTrap: "Units Trap: Height is in cm (90 cm) while post is in m (3.6 m). You MUST convert 90 cm = 0.9 m or 3.6 m = 360 cm. Also, big triangle base is (4.8 + x), NOT 4.8!"
  },

  // ==========================================
  // 3. CRITICAL NCERT SOLVED EXAMPLES (CH 8 & 10)
  // ==========================================
  {
    id: "ncert_ch8_ex15",
    type: "NCERT Board Example",
    chapterNo: 8,
    chapterName: "Introduction to Trigonometry",
    title: "NCERT Ch 8 Example 15: The Super HOTS Board Proof (sinθ - cosθ + 1)/(sinθ + cosθ - 1)",
    marks: 5,
    boardFrequency: "98% Recurrence (CBSE 2024, 2023, 2020, 2019, 2018)",
    ncertReference: "NCERT Class 10, Chapter 8, Example 15 (Page 192)",
    statement: "Prove that: $\\frac{\\sin \\theta - \\cos \\theta + 1}{\\sin \\theta + \\cos \\theta - 1} = \\frac{1}{\\sec \\theta - \\tan \\theta}$, using the identity $\\sec^2 \\theta = 1 + \\tan^2 \\theta$.",
    sheetSteps: [
      {
        marginTag: "LHS",
        content: "$\\text{LHS} = \\frac{\\sin \\theta - \\cos \\theta + 1}{\\sin \\theta + \\cos \\theta - 1}$"
      },
      {
        marginTag: "Step 1",
        content: "Dividing numerator and denominator by $\\cos \\theta$:\n$= \\frac{\\frac{\\sin \\theta}{\\cos \\theta} - 1 + \\frac{1}{\\cos \\theta}}{\\frac{\\sin \\theta}{\\cos \\theta} + 1 - \\frac{1}{\\cos \\theta}} = \\frac{\\tan \\theta - 1 + \\sec \\theta}{\\tan \\theta + 1 - \\sec \\theta} = \\frac{(\\tan \\theta + \\sec \\theta) - 1}{(\\tan \\theta - \\sec \\theta) + 1}$",
        reason: "Converting to tan and sec"
      },
      {
        marginTag: "Step 2",
        content: "Multiply numerator and denominator by $(\\tan \\theta - \\sec \\theta)$:\n$= \\frac{[(\\tan \\theta + \\sec \\theta) - 1](\\tan \\theta - \\sec \\theta)}{[(\\tan \\theta - \\sec \\theta) + 1](\\tan \\theta - \\sec \\theta)}$",
        reason: "Rationalizing technique"
      },
      {
        marginTag: "Step 3",
        content: "Numerator:\n$= (\\tan^2 \\theta - \\sec^2 \\theta) - (\\tan \\theta - \\sec \\theta)$\nSince $\\sec^2 \\theta - \\tan^2 \\theta = 1$, we have $\\tan^2 \\theta - \\sec^2 \\theta = -1$.\n$= -1 - \\tan \\theta + \\sec \\theta = - (1 + \\tan \\theta - \\sec \\theta)$",
        reason: "Using sec²θ - tan²θ = 1"
      },
      {
        marginTag: "Step 4",
        content: "Denominator: $[(\\tan \\theta - \\sec \\theta) + 1](\\tan \\theta - \\sec \\theta)$",
        reason: "Leaving denominator factored"
      },
      {
        marginTag: "Step 5",
        content: "$= \\frac{-(1 + \\tan \\theta - \\sec \\theta)}{(\\tan \\theta - \\sec \\theta + 1)(\\tan \\theta - \\sec \\theta)} = \\frac{-1}{\\tan \\theta - \\sec \\theta} = \\frac{1}{\\sec \\theta - \\tan \\theta}$",
        reason: "Canceling common term"
      }
    ],
    conclusion: "$\\frac{1}{\\sec \\theta - \\tan \\theta} = \\text{RHS} \\quad \\text{[Hence Proved]}$",
    examinerTrap: "You must divide by cos θ (NOT sin θ) because the question specifically mandates using sec²θ = 1 + tan²θ!"
  },
  {
    id: "ncert_ch10_ex2",
    type: "NCERT Board Example",
    chapterNo: 10,
    chapterName: "Circles",
    title: "NCERT Ch 10 Example 2: Prove that ∠PTQ = 2 ∠OPQ",
    marks: 3,
    boardFrequency: "97% Recurrence (CBSE 2024, 2023, 2022, 2020, 2019)",
    ncertReference: "NCERT Class 10, Chapter 10, Example 2 (Page 212)",
    statement: "Two tangents TP and TQ are drawn to a circle with centre O from an external point T. Prove that ∠PTQ = 2 ∠OPQ.",
    sheetSteps: [
      {
        marginTag: "Given",
        content: "A circle with centre $O$, external point $T$, and two tangents $TP$, $TQ$ touching circle at $P$ and $Q$."
      },
      {
        marginTag: "To Prove",
        content: "$\\angle PTQ = 2 \\angle OPQ$"
      },
      {
        marginTag: "Step 1",
        content: "Let $\\angle PTQ = \\theta$.",
        reason: "Assigning variable"
      },
      {
        marginTag: "Step 2",
        content: "By Theorem 10.2, $TP = TQ$. Therefore, $\\Delta TPQ$ is an isosceles triangle.",
        reason: "Lengths of tangents from external point are equal"
      },
      {
        marginTag: "Step 3",
        content: "In $\\Delta TPQ$, angles opposite to equal sides are equal:\n$\\angle TPQ = \\angle TQP = \\frac{180^\\circ - \\theta}{2} = 90^\\circ - \\frac{\\theta}{2}$",
        reason: "Angle sum property of triangle"
      },
      {
        marginTag: "Step 4",
        content: "By Theorem 10.1, $OP \\perp TP$, so: $\\angle OPT = 90^\\circ$",
        reason: "Radius is perpendicular to tangent at point of contact"
      },
      {
        marginTag: "Step 5",
        content: "$\\angle OPQ = \\angle OPT - \\angle TPQ = 90^\\circ - \\left(90^\\circ - \\frac{\\theta}{2}\\right) = \\frac{\\theta}{2}$",
        reason: "Angle difference"
      },
      {
        marginTag: "Step 6",
        content: "$\\angle OPQ = \\frac{1}{2} \\angle PTQ \\implies \\angle PTQ = 2 \\angle OPQ$",
        reason: "Multiplying by 2"
      }
    ],
    conclusion: "$\\angle PTQ = 2 \\angle OPQ \\quad \\text{[Hence Proved]}$",
    examinerTrap: "Do NOT assume OP bisects ∠PTQ without proving congruence! The method shown above using isosceles △TPQ is the official NCERT 100% full-mark method."
  },
  {
    id: "ncert_ch10_ex3",
    type: "NCERT Board Example",
    chapterNo: 10,
    chapterName: "Circles",
    title: "NCERT Ch 10 Example 3: Chord Length 8cm, Radius 5cm, Find Tangent TP",
    marks: 4,
    boardFrequency: "95% Recurrence (CBSE 2024, 2023, 2020, 2018)",
    ncertReference: "NCERT Class 10, Chapter 10, Example 3 (Page 213)",
    statement: "PQ is a chord of length 8 cm of a circle of radius 5 cm. The tangents at P and Q intersect at a point T. Find the length TP.",
    sheetSteps: [
      {
        marginTag: "Given",
        content: "Circle with centre $O$, radius $OP = 5\\text{ cm}$, chord $PQ = 8\\text{ cm}$. Tangents $TP, TQ$ meet at $T$."
      },
      {
        marginTag: "Step 1",
        content: "Join $OT$ intersecting $PQ$ at $R$. $\\Delta TPQ$ is isosceles and $OT$ is the angle bisector of $\\angle PTQ$.",
        reason: "Symmetry of tangents"
      },
      {
        marginTag: "Step 2",
        content: "Therefore, $OT \\perp PQ$ and $OT$ bisects chord $PQ$:\n$PR = RQ = \\frac{8}{2} = 4\\text{ cm}$",
        reason: "Perpendicular from centre bisects the chord"
      },
      {
        marginTag: "Step 3",
        content: "In right $\\Delta ORP$, by Pythagoras Theorem:\n$OR = \\sqrt{OP^2 - PR^2} = \\sqrt{5^2 - 4^2} = \\sqrt{25 - 16} = 3\\text{ cm}$",
        reason: "Pythagoras Theorem"
      },
      {
        marginTag: "Step 4",
        content: "Now in right $\\Delta TPR$ and right $\\Delta TPO$:\n$\\angle TPR + \\angle RPO = 90^\\circ$ (as $OP \\perp TP$ by Theorem 10.1)\nAlso in right $\\Delta PRO$: $\\angle POR + \\angle RPO = 90^\\circ$\n$\\implies \\angle TPR = \\angle POR$",
        reason: "Both are complementary to ∠RPO"
      },
      {
        marginTag: "Step 5",
        content: "$\\therefore \\text{Right } \\Delta TRP \\sim \\text{Right } \\Delta PRO$ (by AA similarity)\n$\\frac{TP}{PO} = \\frac{RP}{RO} \\implies \\frac{TP}{5} = \\frac{4}{3}$",
        reason: "Corresponding sides ratio"
      },
      {
        marginTag: "Step 6",
        content: "$TP = \\frac{4 \\times 5}{3} = \\frac{20}{3}\\text{ cm} = 6.67\\text{ cm}$",
        reason: "Cross multiplication"
      }
    ],
    conclusion: "$TP = \\frac{20}{3}\\text{ cm} \\approx 6.67\\text{ cm}$",
    examinerTrap: "Do NOT approximate to 6.6 cm! Leave it as 20/3 cm (standard board convention) or 6.67 cm."
  },

  // ==========================================
  // 4. CRITICAL NCERT SOLVED EXAMPLES (CH 13)
  // ==========================================
  {
    id: "ncert_ch13_ex8",
    type: "NCERT Board Example",
    chapterNo: 13,
    chapterName: "Statistics",
    title: "NCERT Ch 13 Example 8: Missing Frequencies (x and y) with Median = 525",
    marks: 5,
    boardFrequency: "98% Recurrence in Section D (5 Marks HOTS)",
    ncertReference: "NCERT Class 10, Chapter 13, Example 8 (Page 285)",
    statement: "The median of the following data is 525. Find the values of x and y, if the total frequency is 100. (Intervals: 0-100: 2, 100-200: 5, 200-300: x, 300-400: 12, 400-500: 17, 500-600: 20, 600-700: y, 700-800: 9, 800-900: 7, 900-1000: 4).",
    sheetSteps: [
      {
        marginTag: "Step 1",
        content: "Total Frequency $N = 100$. Sum of frequencies:\n$2 + 5 + x + 12 + 17 + 20 + y + 9 + 7 + 4 = 100$\n$76 + x + y = 100 \\implies x + y = 24 \\quad \\dots (1)$",
        reason: "Given N = 100"
      },
      {
        marginTag: "Step 2",
        content: "Median $= 525$. Since $525$ lies in the class interval $500 - 600$, the Median Class is $500 - 600$.",
        reason: "Locating median class"
      },
      {
        marginTag: "Step 3",
        content: "Median formula parameters for class $500 - 600$:\nLower limit $l = 500$, Class size $h = 100$, Frequency $f = 20$, $\\frac{N}{2} = 50$, Cumulative frequency of preceding class $cf = 36 + x$.",
        reason: "cf table calculation up to 400-500"
      },
      {
        marginTag: "Step 4",
        content: "$\\text{Median} = l + \\left( \\frac{\\frac{N}{2} - cf}{f} \\right) \\times h$\n$525 = 500 + \\left( \\frac{50 - (36 + x)}{20} \\right) \\times 100$",
        reason: "Substituting in Median formula"
      },
      {
        marginTag: "Step 5",
        content: "$525 - 500 = (50 - 36 - x) \\times 5$\n$25 = (14 - x) \\times 5 \\implies 5 = 14 - x \\implies x = 9$",
        reason: "Simplifying"
      },
      {
        marginTag: "Step 6",
        content: "From equation (1): $x + y = 24 \\implies 9 + y = 24 \\implies y = 15$.",
        reason: "From Eq (1)"
      }
    ],
    conclusion: "$x = 9, \\quad y = 15$",
    examinerTrap: "Bracket Sign Trap: cf is (36 + x). You MUST subtract the entire quantity: 50 - (36 + x) = 50 - 36 - x. Forgetting parentheses gives 50 - 36 + x, causing fatal calculation breakdown!"
  }
,

  {
  "id": "thm_1_root2_irrational",
  "type": "Theorem Proof",
  "chapterNo": 1,
  "chapterName": "Real Numbers",
  "title": "Theorem 1.4: Proof of Irrationality of √2",
  "marks": 3,
  "boardFrequency": "99% Recurrence (CBSE 2024, 2023, 2021, 2019, 2018)",
  "ncertReference": "NCERT Class 10, Chapter 1, Theorem 1.4 (Page 12)",
  "statement": "Prove that $\\sqrt{2}$ is irrational.",
  "given": "The number $\\sqrt{2}$.",
  "toProve": "$\\sqrt{2}$ is an irrational number.",
  "sheetSteps": [
    {
      "marginTag": "Assumption",
      "content": "Let us assume, to the contrary, that $\\sqrt{2}$ is rational.\nTherefore, we can find coprime integers $a$ and $b$ (where $b \neq 0$ and $\\gcd(a, b) = 1$) such that:\n$\\sqrt{2} = \\frac{a}{b}$",
      "reason": "Proof by contradiction; definition of rational number in lowest terms"
    },
    {
      "marginTag": "Step 1",
      "content": "Cross multiplying: $b\\sqrt{2} = a$.\nSquaring both sides:\n$(b\\sqrt{2})^2 = a^2 \\implies 2b^2 = a^2 \\quad \\dots (1)$",
      "reason": "Squaring both sides"
    },
    {
      "marginTag": "Step 2",
      "content": "From (1), $2$ divides $a^2$.\nBy Theorem 1.3: If a prime $p$ divides $a^2$, then $p$ divides $a$.\n$\\therefore 2$ divides $a$.",
      "reason": "Fundamental Theorem of Arithmetic (Theorem 1.3)"
    },
    {
      "marginTag": "Step 3",
      "content": "Since $2$ divides $a$, we can write $a = 2c$ for some integer $c$.\nSubstituting $a = 2c$ into equation (1):\n$2b^2 = (2c)^2 = 4c^2 \\implies b^2 = 2c^2 \\quad \\dots (2)$",
      "reason": "Substitution of a = 2c into (1)"
    },
    {
      "marginTag": "Step 4",
      "content": "From (2), $2$ divides $b^2$, which implies $2$ divides $b$ (again by Theorem 1.3).",
      "reason": "Theorem 1.3 applied to b"
    },
    {
      "marginTag": "Step 5",
      "content": "From Steps 2 and 4, $a$ and $b$ have at least $2$ as a common factor.\nThis contradicts the fact that $a$ and $b$ are coprime (have no common factor other than 1).",
      "reason": "Direct contradiction with initial assumption"
    },
    {
      "marginTag": "Step 6",
      "content": "This contradiction has arisen because of our incorrect assumption that $\\sqrt{2}$ is rational.\nTherefore, $\\sqrt{2}$ is irrational.",
      "reason": "Proof by Contradiction completed"
    }
  ],
  "conclusion": "$\\sqrt{2} \\text{ is an irrational number.} \\quad \\text{[Hence Proved]}$",
  "examinerTrap": "Coprime Declaration Trap: If you fail to write 'where a and b are coprime integers (gcd(a, b) = 1)', CBSE marking scheme deducts 1 full mark! Also you must explicitly cite Theorem 1.3 ('p divides a^2 implies p divides a')."
},

  {
  "id": "thm_1_root5_irrational",
  "type": "Theorem Proof",
  "chapterNo": 1,
  "chapterName": "Real Numbers",
  "title": "Theorem: Proof of Irrationality of √5",
  "marks": 3,
  "boardFrequency": "96% Recurrence (CBSE 2024, 2022, 2020, 2017)",
  "ncertReference": "NCERT Class 10, Chapter 1, Exercise 1.2 Q1",
  "statement": "Prove that $\\sqrt{5}$ is irrational.",
  "given": "The number $\\sqrt{5}$.",
  "toProve": "$\\sqrt{5}$ is irrational.",
  "sheetSteps": [
    {
      "marginTag": "Assumption",
      "content": "Assume to the contrary that $\\sqrt{5}$ is rational.\nLet $\\sqrt{5} = \\frac{a}{b}$, where $a$ and $b$ are coprime integers and $b \neq 0$.",
      "reason": "Assumption of rationality in reduced form"
    },
    {
      "marginTag": "Step 1",
      "content": "Squaring both sides:\n$5 = \\frac{a^2}{b^2} \\implies a^2 = 5b^2 \\quad \\dots (1)$",
      "reason": "Rearranging and squaring"
    },
    {
      "marginTag": "Step 2",
      "content": "Since $5$ divides $a^2$, $5$ divides $a$ (since 5 is prime, by Theorem 1.3).",
      "reason": "Theorem 1.3"
    },
    {
      "marginTag": "Step 3",
      "content": "Let $a = 5c$ for some integer $c$.\nSubstitute in (1): $(5c)^2 = 5b^2 \\implies 25c^2 = 5b^2 \\implies b^2 = 5c^2 \\quad \\dots (2)$",
      "reason": "Substituting a = 5c"
    },
    {
      "marginTag": "Step 4",
      "content": "Equation (2) shows that $5$ divides $b^2$, hence $5$ divides $b$.",
      "reason": "Theorem 1.3"
    },
    {
      "marginTag": "Step 5",
      "content": "Thus, $5$ is a common factor of both $a$ and $b$. This contradicts the fact that $a$ and $b$ are coprime.",
      "reason": "Contradiction found"
    },
    {
      "marginTag": "Step 6",
      "content": "Hence, our assumption was incorrect. $\\sqrt{5}$ is irrational.",
      "reason": "Conclusion by contradiction"
    }
  ],
  "conclusion": "$\\sqrt{5} \\text{ is irrational.} \\quad \\text{[Hence Proved]}$",
  "examinerTrap": "Never write 'a/b is a fraction'. Always explicitly write 'a and b are integers, b ≠ 0, and gcd(a, b) = 1'. CBSE answer keys penalize loose wording."
},

  {
  "id": "thm_1_composite_irrational",
  "type": "Theorem Proof",
  "chapterNo": 1,
  "chapterName": "Real Numbers",
  "title": "Theorem: Proof that 3 + 2√5 is Irrational",
  "marks": 3,
  "boardFrequency": "97% Recurrence (CBSE 2024, 2023, 2020, 2019)",
  "ncertReference": "NCERT Class 10, Chapter 1, Exercise 1.2 Q2",
  "statement": "Prove that $3 + 2\\sqrt{5}$ is irrational, given that $\\sqrt{5}$ is irrational.",
  "given": "$3 + 2\\sqrt{5}$ where $\\sqrt{5}$ is known to be irrational.",
  "toProve": "$3 + 2\\sqrt{5}$ is irrational.",
  "sheetSteps": [
    {
      "marginTag": "Assumption",
      "content": "Let us assume to the contrary that $3 + 2\\sqrt{5}$ is rational.\nThen there exist coprime integers $a$ and $b$ ($b \neq 0$) such that:\n$3 + 2\\sqrt{5} = \\frac{a}{b}$",
      "reason": "Proof by contradiction"
    },
    {
      "marginTag": "Step 1",
      "content": "Isolating the radical term $\\sqrt{5}$:\n$2\\sqrt{5} = \\frac{a}{b} - 3 = \\frac{a - 3b}{b}$",
      "reason": "Transposing 3 to RHS"
    },
    {
      "marginTag": "Step 2",
      "content": "Dividing both sides by 2:\n$\\sqrt{5} = \\frac{a - 3b}{2b}$",
      "reason": "Isolating square root"
    },
    {
      "marginTag": "Step 3",
      "content": "Since $a$ and $b$ are integers, $a - 3b$ and $2b$ are also integers with $2b \neq 0$.\nTherefore, $\\frac{a - 3b}{2b}$ is a rational number.",
      "reason": "Integers are closed under subtraction and multiplication"
    },
    {
      "marginTag": "Step 4",
      "content": "This implies that $\\sqrt{5}$ is rational.\nBut this contradicts the known fact that $\\sqrt{5}$ is irrational.",
      "reason": "RHS is rational, LHS is irrational"
    },
    {
      "marginTag": "Step 5",
      "content": "This contradiction has arisen because of our incorrect assumption that $3 + 2\\sqrt{5}$ is rational.\nHence, $3 + 2\\sqrt{5}$ is irrational.",
      "reason": "Contradiction completes proof"
    }
  ],
  "conclusion": "$3 + 2\\sqrt{5} \\text{ is irrational.} \\quad \\text{[Hence Proved]}$",
  "examinerTrap": "Do NOT attempt to reprove that √5 is irrational unless the question explicitly asks for it! Simply isolate √5 and state: 'Since a and b are integers, (a - 3b)/2b is rational, contradicting that √5 is irrational'."
},

  {
  "id": "deriv_quad_formula",
  "type": "Mandatory Derivation",
  "chapterNo": 4,
  "chapterName": "Quadratic Equations",
  "title": "Derivation of the Quadratic Formula (Completing the Square Method)",
  "marks": 4,
  "boardFrequency": "92% Recurrence (CBSE Standard Math Derivation)",
  "ncertReference": "NCERT Class 10, Chapter 4, Section 4.4 (Page 83)",
  "statement": "Derive the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ for the standard quadratic equation $ax^2 + bx + c = 0$ ($a \neq 0$).",
  "sheetSteps": [
    {
      "marginTag": "Given Eq",
      "content": "Consider the standard general quadratic equation:\n$ax^2 + bx + c = 0, \\quad \\text{where } a, b, c \\in \\mathbb{R} \\text{ and } a \neq 0$",
      "reason": "Standard quadratic form"
    },
    {
      "marginTag": "Step 1",
      "content": "Divide the entire equation by the leading coefficient $a$ ($a \neq 0$):\n$x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0$",
      "reason": "Making coefficient of x^2 equal to 1"
    },
    {
      "marginTag": "Step 2",
      "content": "Transpose the constant term to the right-hand side:\n$x^2 + \\frac{b}{a}x = -\\frac{c}{a}$",
      "reason": "Transposition of constant term"
    },
    {
      "marginTag": "Step 3",
      "content": "To complete the square on LHS, add $\\left(\\frac{1}{2} \\times \\text{coefficient of } x\\right)^2 = \\left(\\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2}$ to both sides:\n$x^2 + 2 \\cdot x \\cdot \\left(\\frac{b}{2a}\\right) + \\left(\\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2} - \\frac{c}{a}$",
      "reason": "Adding (b/2a)^2 to complete square (x + y)^2"
    },
    {
      "marginTag": "Step 4",
      "content": "The LHS is now a perfect square $\\left(x + \\frac{b}{2a}\\right)^2$.\nTake LCM on the RHS ($4a^2$):\n$\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$",
      "reason": "Algebraic identity (x + y)^2 and LCM 4a^2"
    },
    {
      "marginTag": "Step 5",
      "content": "Taking square root on both sides (assuming discriminant $b^2 - 4ac \\ge 0$):\n$x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a}$",
      "reason": "Square root property with ±"
    },
    {
      "marginTag": "Step 6",
      "content": "Transpose $\\frac{b}{2a}$ to RHS:\n$x = -\\frac{b}{2a} \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
      "reason": "Combining over common denominator 2a"
    }
  ],
  "conclusion": "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\quad \\text{[Quadratic Formula / Shridharacharya's Rule]}$",
  "examinerTrap": "Denominator Sign Trap: The denominator is strictly 2a, NOT just 2! Also remember to specify that real roots exist only when the discriminant $D = b^2 - 4ac \\ge 0$."
},

  {
  "id": "deriv_ap_nth_term",
  "type": "Mandatory Derivation",
  "chapterNo": 5,
  "chapterName": "Arithmetic Progressions",
  "title": "Derivation of the n-th Term of an AP (an = a + (n - 1)d)",
  "marks": 3,
  "boardFrequency": "88% Recurrence (Foundational Proof)",
  "ncertReference": "NCERT Class 10, Chapter 5, Section 5.3 (Page 100)",
  "statement": "Derive the formula for the general $n$-th term $a_n$ of an Arithmetic Progression whose first term is $a$ and common difference is $d$.",
  "sheetSteps": [
    {
      "marginTag": "Definition",
      "content": "Let the Arithmetic Progression be denoted by terms $a_1, a_2, a_3, \\dots, a_n$, where:\nFirst term $= a_1 = a$\nCommon difference $= d$",
      "reason": "Standard AP notation"
    },
    {
      "marginTag": "Step 1",
      "content": "By the definition of an AP, each subsequent term is obtained by adding common difference $d$ to the preceding term:\n$a_1 = a = a + (1 - 1)d$\n$a_2 = a_1 + d = a + d = a + (2 - 1)d$\n$a_3 = a_2 + d = (a + d) + d = a + 2d = a + (3 - 1)d$\n$a_4 = a_3 + d = (a + 2d) + d = a + 3d = a + (4 - 1)d$",
      "reason": "Recursive term addition and pattern recognition"
    },
    {
      "marginTag": "Step 2",
      "content": "Observing the general pattern for the $n$-th term:\nThe coefficient of $d$ in the $n$-th term is always one less than the term index $n$, which is $(n - 1)$.",
      "reason": "Mathematical induction pattern"
    },
    {
      "marginTag": "Step 3",
      "content": "Therefore, the $n$-th term $a_n$ is given by:\n$a_n = a + (n - 1)d$",
      "reason": "Generalization for arbitrary term n"
    }
  ],
  "conclusion": "$a_n = a + (n - 1)d \\quad \\text{[General Term of an AP]}$",
  "examinerTrap": "Zero vs One Index: The first term has (1 - 1)d = 0d! Do not write a_n = a + nd. The number of intervals of common difference between term 1 and term n is strictly (n - 1)."
},

  {
  "id": "deriv_ap_sum",
  "type": "Mandatory Derivation",
  "chapterNo": 5,
  "chapterName": "Arithmetic Progressions",
  "title": "Derivation of Sum of First n Terms of an AP (Sn = n/2 [2a + (n - 1)d])",
  "marks": 4,
  "boardFrequency": "94% Recurrence (CBSE Standard Exam Derivation)",
  "ncertReference": "NCERT Class 10, Chapter 5, Section 5.4 (Page 106)",
  "statement": "Derive the formula for the sum of the first $n$ terms of an AP with first term $a$ and common difference $d$.",
  "sheetSteps": [
    {
      "marginTag": "Setup",
      "content": "Let $S_n$ denote the sum of first $n$ terms of the AP with first term $a$ and common difference $d$:\n$S_n = a + (a + d) + (a + 2d) + \\dots + [a + (n - 2)d] + [a + (n - 1)d] \\quad \\dots (1)$",
      "reason": "Writing sum in ascending order"
    },
    {
      "marginTag": "Reverse",
      "content": "Rewriting the terms in reverse order (descending):\n$S_n = [a + (n - 1)d] + [a + (n - 2)d] + \\dots + (a + d) + a \\quad \\dots (2)$",
      "reason": "Gauss reverse summation technique"
    },
    {
      "marginTag": "Add",
      "content": "Adding equations (1) and (2) term-by-term vertically:\n$2S_n = \\{a + [a + (n - 1)d]\\} + \\{(a + d) + [a + (n - 2)d]\\} + \\dots + \\{[a + (n - 1)d] + a\\}$",
      "reason": "Adding (1) and (2) column by column"
    },
    {
      "marginTag": "Simplify",
      "content": "Notice that every single pair simplifies to:\n$a + a + (n - 1)d = 2a + (n - 1)d$\nSince there are exactly $n$ such pairs:\n$2S_n = n \\times [2a + (n - 1)d]$",
      "reason": "Every pair sum is constant across all n terms"
    },
    {
      "marginTag": "Result",
      "content": "Dividing both sides by 2:\n$S_n = \\frac{n}{2} [2a + (n - 1)d]$",
      "reason": "Solving for Sn"
    },
    {
      "marginTag": "Alternate",
      "content": "Alternative form using last term $l = a_n = a + (n - 1)d$:\n$S_n = \\frac{n}{2} [a + a + (n - 1)d] = \\frac{n}{2} [a + l]$",
      "reason": "Expressing in terms of first and last terms"
    }
  ],
  "conclusion": "$S_n = \\frac{n}{2} [2a + (n - 1)d] = \\frac{n}{2} [a + l] \\quad \\text{[Sum of n Terms of an AP]}$",
  "examinerTrap": "Forgetting the 2a: Students frequently write n/2 [a + (n - 1)d], dropping the coefficient 2. The formula has 2a because it sums the first term a and the n-th term [a + (n - 1)d]."
},

  {
  "id": "thm_6_angle_bisector",
  "type": "Theorem Proof",
  "chapterNo": 6,
  "chapterName": "Triangles",
  "title": "Theorem: Internal Angle Bisector Theorem (BD/DC = AB/AC)",
  "marks": 4,
  "boardFrequency": "90% Recurrence (HOTS & Competitive Board Standard)",
  "ncertReference": "NCERT Class 10, Chapter 6, Supplementary Extension",
  "statement": "The internal bisector of an angle of a triangle divides the opposite side internally in the ratio of the sides containing the angle. That is, in △ABC with AD bisecting ∠A, BD/DC = AB/AC.",
  "given": "A triangle △ABC in which AD is the internal bisector of ∠BAC meeting BC at D.",
  "toProve": "$\\frac{BD}{DC} = \\frac{AB}{AC}$",
  "construction": "Draw CE ∥ DA meeting BA produced at E.",
  "sheetSteps": [
    {
      "marginTag": "Given",
      "content": "In $\\Delta ABC$, $AD$ bisects $\\angle BAC$. Therefore, $\\angle 1 = \\angle 2$, where $\\angle 1 = \\angle BAD$ and $\\angle 2 = \\angle DAC$."
    },
    {
      "marginTag": "Constr.",
      "content": "Through vertex $C$, draw a line parallel to $DA$ intersecting $BA$ produced at point $E$ ($CE \\parallel DA$)."
    },
    {
      "marginTag": "Step 1",
      "content": "Since $DA \\parallel CE$ and $AC$ is a transversal:\n$\\angle 2 = \\angle 3$ (alternate interior angles, where $\\angle 3 = \\angle ACE$)",
      "reason": "Alternate interior angles"
    },
    {
      "marginTag": "Step 2",
      "content": "Since $DA \\parallel CE$ and line $BAE$ is a transversal:\n$\\angle 1 = \\angle 4$ (corresponding angles, where $\\angle 4 = \\angle AEC$)",
      "reason": "Corresponding angles"
    },
    {
      "marginTag": "Step 3",
      "content": "Since $\\angle 1 = \\angle 2$ (given), it follows that:\n$\\angle 3 = \\angle 4$",
      "reason": "Since ∠1 = ∠4 and ∠2 = ∠3"
    },
    {
      "marginTag": "Step 4",
      "content": "In $\\Delta ACE$, since $\\angle 3 = \\angle 4$, the sides opposite to equal angles are equal:\n$AE = AC \\quad \\dots (1)$",
      "reason": "Sides opposite to equal angles in △ACE"
    },
    {
      "marginTag": "Step 5",
      "content": "Now in $\\Delta BCE$, since $DA \\parallel CE$, applying Basic Proportionality Theorem (Theorem 6.1):\n$\\frac{BD}{DC} = \\frac{BA}{AE} \\quad \\dots (2)$",
      "reason": "BPT in △BCE with DA ∥ CE"
    },
    {
      "marginTag": "Step 6",
      "content": "Substitute $AE = AC$ from (1) into (2):\n$\\frac{BD}{DC} = \\frac{BA}{AC} = \\frac{AB}{AC}$",
      "reason": "Replacing AE with AC"
    }
  ],
  "conclusion": "$\\frac{BD}{DC} = \\frac{AB}{AC} \\quad \\text{[Hence Proved]}$",
  "examinerTrap": "Common Misconception: AD does NOT bisect side BC unless △ABC is isosceles (AB = AC)! Never assume BD = DC in the proof."
},

  {
  "id": "deriv_coord_distance",
  "type": "Mandatory Derivation",
  "chapterNo": 7,
  "chapterName": "Coordinate Geometry",
  "title": "Derivation of the Distance Formula (d = √[(x2 - x1)² + (y2 - y1)²])",
  "marks": 3,
  "boardFrequency": "85% Recurrence (Foundational Derivation)",
  "ncertReference": "NCERT Class 10, Chapter 7, Section 7.2 (Page 156)",
  "statement": "Derive the distance formula for the distance between two points $P(x_1, y_1)$ and $Q(x_2, y_2)$ in the Cartesian plane.",
  "sheetSteps": [
    {
      "marginTag": "Setup",
      "content": "Let $P(x_1, y_1)$ and $Q(x_2, y_2)$ be two arbitrary points in the Cartesian coordinate plane.",
      "reason": "Given points"
    },
    {
      "marginTag": "Constr.",
      "content": "Draw $PR$ and $QS$ perpendicular to the x-axis ($R = (x_1, 0), S = (x_2, 0)$).\nDraw $PT \\perp QS$ meeting $QS$ at $T$.",
      "reason": "Perpendicular projections"
    },
    {
      "marginTag": "Step 1",
      "content": "Calculate the base and vertical sides of right triangle $\\Delta PTQ$:\n$PT = RS = OS - OR = x_2 - x_1$\n$QT = QS - TS = QS - PR = y_2 - y_1$",
      "reason": "Lengths of segments parallel to axes"
    },
    {
      "marginTag": "Step 2",
      "content": "In right-angled triangle $\\Delta PTQ$, by Pythagoras Theorem:\n$PQ^2 = PT^2 + QT^2$",
      "reason": "Pythagoras Theorem in △PTQ"
    },
    {
      "marginTag": "Step 3",
      "content": "Substituting the values of $PT$ and $QT$:\n$PQ^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$",
      "reason": "Direct substitution"
    },
    {
      "marginTag": "Step 4",
      "content": "Taking the positive square root (since distance is non-negative):\n$PQ = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$",
      "reason": "Distance is always positive"
    }
  ],
  "conclusion": "$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\quad \\text{[Distance Formula]}$",
  "examinerTrap": "Order Independence: Since $(x_2 - x_1)^2 = (x_1 - x_2)^2$, the order does not change the result, but NEVER mix coordinates like (x2 - y1)!"
},

  {
  "id": "deriv_coord_section",
  "type": "Mandatory Derivation",
  "chapterNo": 7,
  "chapterName": "Coordinate Geometry",
  "title": "Derivation of the Section Formula for Internal Division",
  "marks": 4,
  "boardFrequency": "95% Recurrence (CBSE Standard Derivation)",
  "ncertReference": "NCERT Class 10, Chapter 7, Section 7.3 (Page 162)",
  "statement": "Derive the coordinates of the point $P(x, y)$ which divides the line segment joining $A(x_1, y_1)$ and $B(x_2, y_2)$ internally in the ratio $m_1 : m_2$.",
  "sheetSteps": [
    {
      "marginTag": "Setup",
      "content": "Let $A(x_1, y_1)$ and $B(x_2, y_2)$ be the given points, and $P(x, y)$ divide $AB$ internally in the ratio $m_1 : m_2$, so that $\\frac{AP}{PB} = \\frac{m_1}{m_2}$.",
      "reason": "Given configuration"
    },
    {
      "marginTag": "Constr.",
      "content": "Draw $AL, PM, BN$ perpendicular to the x-axis.\nDraw $AQ \\perp PM$ and $PC \\perp BN$.\nThen $AQ = x - x_1$, $PC = x_2 - x$, $PQ = y - y_1$, and $BC = y_2 - y$.",
      "reason": "Coordinate projections on axes"
    },
    {
      "marginTag": "Step 1",
      "content": "In right triangles $\\Delta PAQ$ and $\\Delta BPC$:\n$\\angle PQA = \\angle BCP = 90^\\circ$\n$\\angle PAQ = \\angle BPC$ (corresponding angles since $AQ \\parallel PC$)",
      "reason": "AA similarity condition"
    },
    {
      "marginTag": "Step 2",
      "content": "$\\therefore \\Delta PAQ \\sim \\Delta BPC$ (by AA Similarity Criterion).\nCorresponding sides are in equal ratio:\n$\\frac{AP}{PB} = \\frac{AQ}{PC} = \\frac{PQ}{BC}$",
      "reason": "Corresponding sides of similar triangles"
    },
    {
      "marginTag": "Step 3",
      "content": "Equating with ratio $\\frac{m_1}{m_2}$ for the x-coordinate:\n$\\frac{m_1}{m_2} = \\frac{x - x_1}{x_2 - x} \\implies m_1(x_2 - x) = m_2(x - x_1)$\n$m_1 x_2 - m_1 x = m_2 x - m_2 x_1 \\implies (m_1 + m_2)x = m_1 x_2 + m_2 x_1$\n$x = \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}$",
      "reason": "Solving for x"
    },
    {
      "marginTag": "Step 4",
      "content": "Equating for the y-coordinate:\n$\\frac{m_1}{m_2} = \\frac{y - y_1}{y_2 - y} \\implies m_1(y_2 - y) = m_2(y - y_1)$\n$m_1 y_2 - m_1 y = m_2 y - m_2 y_1 \\implies (m_1 + m_2)y = m_1 y_2 + m_2 y_1$\n$y = \\frac{m_1 y_2 + m_2 y_1}{m_1 + m_2}$",
      "reason": "Solving for y"
    }
  ],
  "conclusion": "$P(x, y) = \\left( \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}, \\frac{m_1 y_2 + m_2 y_1}{m_1 + m_2} \\right) \\quad \\text{[Section Formula]}$",
  "examinerTrap": "Midpoint Corollary: If P is the midpoint, m1 = m2 = 1, giving M = ((x1 + x2)/2, (y1 + y2)/2). Never reverse indices (do not write m1 x1 + m2 x2)!"
},

  {
  "id": "deriv_trig_identities",
  "type": "Mandatory Derivation",
  "chapterNo": 8,
  "chapterName": "Introduction to Trigonometry",
  "title": "Derivation of Fundamental Trigonometric Identity sin²θ + cos²θ = 1",
  "marks": 3,
  "boardFrequency": "93% Recurrence (Foundational Identity)",
  "ncertReference": "NCERT Class 10, Chapter 8, Section 8.4 (Page 190)",
  "statement": "Prove the fundamental identity $\\sin^2\\theta + \\cos^2\\theta = 1$, and derive from it $1 + \\tan^2\\theta = \\sec^2\\theta$ and $1 + \\cot^2\\theta = \\csc^2\\theta$.",
  "sheetSteps": [
    {
      "marginTag": "Setup",
      "content": "Consider a right-angled triangle $\\Delta ABC$, right-angled at $B$ with acute angle $\\angle A = \\theta$.\nBy definitions of trigonometric ratios:\n$\\sin\\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{BC}{AC}$\n$\\cos\\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{AB}{AC}$",
      "reason": "Definitions of sine and cosine"
    },
    {
      "marginTag": "Step 1",
      "content": "In right triangle $\\Delta ABC$, by Pythagoras Theorem:\n$AB^2 + BC^2 = AC^2 \\quad \\dots (1)$",
      "reason": "Pythagoras Theorem in △ABC"
    },
    {
      "marginTag": "Step 2",
      "content": "Divide equation (1) by $AC^2$ ($AC \neq 0$):\n$\\frac{AB^2}{AC^2} + \\frac{BC^2}{AC^2} = \\frac{AC^2}{AC^2}\n\\left(\\frac{AB}{AC}\\right)^2 + \\left(\\frac{BC}{AC}\\right)^2 = 1$",
      "reason": "Dividing by AC^2"
    },
    {
      "marginTag": "Step 3",
      "content": "Substituting $\\cos\\theta = \\frac{AB}{AC}$ and $\\sin\\theta = \\frac{BC}{AC}$:\n$(\\cos\\theta)^2 + (\\sin\\theta)^2 = 1 \\implies \\sin^2\\theta + \\cos^2\\theta = 1$",
      "reason": "Fundamental Identity 1"
    },
    {
      "marginTag": "Corollary 1",
      "content": "Dividing $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\cos^2\\theta$ (for $\\theta \neq 90^\\circ$):\n$\\frac{\\sin^2\\theta}{\\cos^2\\theta} + \\frac{\\cos^2\\theta}{\\cos^2\\theta} = \\frac{1}{\\cos^2\\theta} \\implies \\tan^2\\theta + 1 = \\sec^2\\theta$",
      "reason": "Identity 2"
    },
    {
      "marginTag": "Corollary 2",
      "content": "Dividing $\\sin^2\\theta + \\cos^2\\theta = 1$ by $\\sin^2\\theta$ (for $\\theta \neq 0^\\circ$):\n$\\frac{\\sin^2\\theta}{\\sin^2\\theta} + \\frac{\\cos^2\\theta}{\\sin^2\\theta} = \\frac{1}{\\sin^2\\theta} \\implies 1 + \\cot^2\\theta = \\csc^2\\theta$",
      "reason": "Identity 3"
    }
  ],
  "conclusion": "$\\sin^2\\theta + \\cos^2\\theta = 1, \\quad 1 + \\tan^2\\theta = \\sec^2\\theta, \\quad 1 + \\cot^2\\theta = \\csc^2\\theta$",
  "examinerTrap": "Domain Restrictions: Note that 1 + tan²θ = sec²θ is defined for 0° ≤ θ < 90°, and 1 + cot²θ = csc²θ is defined for 0° < θ ≤ 90°. Mentioning this earns full marks in standard boards."
},

  {
  "id": "thm_10_angle_bisector",
  "type": "Theorem Proof",
  "chapterNo": 10,
  "chapterName": "Circles",
  "title": "Theorem: Tangents Subtend Equal Angles at Centre & OP Bisects Angle",
  "marks": 3,
  "boardFrequency": "93% Recurrence (CBSE 2023, 2020, 2019)",
  "ncertReference": "NCERT Class 10, Chapter 10, Supplementary Corollaries",
  "statement": "Prove that the tangents drawn from an external point to a circle: (i) subtend equal angles at the centre, and (ii) are equally inclined to the line segment joining the centre to that point.",
  "given": "A circle with centre $O$, external point $P$, tangents $PA$ and $PB$ touching the circle at $A$ and $B$. $OP$ is joined.",
  "toProve": "(i) $\\angle AOP = \\angle BOP$, and (ii) $\\angle APO = \\angle BPO$",
  "sheetSteps": [
    {
      "marginTag": "Given",
      "content": "A circle with centre $O$, external point $P$, tangents $PA$ and $PB$ touching the circle at $A$ and $B$. $OP$ is joined.",
      "reason": "Given configuration"
    },
    {
      "marginTag": "Step 1",
      "content": "In right triangles $\\Delta OAP$ and $\\Delta OBP$:\n$OA = OB$ (radii of the same circle)\n$OP = OP$ (common hypotenuse)\n$\\angle OAP = \\angle OBP = 90^\\circ$ (Theorem 10.1: Tangent ⊥ Radius)",
      "reason": "Comparing triangles"
    },
    {
      "marginTag": "Step 2",
      "content": "$\\therefore \\Delta OAP \\cong \\Delta OBP$ by RHS Congruence Criterion.",
      "reason": "RHS Congruence"
    },
    {
      "marginTag": "Step 3",
      "content": "By CPCT (Corresponding Parts of Congruent Triangles):\n(i) $\\angle AOP = \\angle BOP$ (tangents subtend equal angles at centre)\n(ii) $\\angle APO = \\angle BPO$ ($OP$ bisects the angle $\\angle APB$ between the tangents)",
      "reason": "CPCT"
    }
  ],
  "conclusion": "$\\angle AOP = \\angle BOP \\quad \\text{and} \\quad \\angle APO = \\angle BPO \\quad \\text{[Hence Proved]}$",
  "examinerTrap": "Angle Sum Property Trap: Notice that $\\angle AOB + \\angle APB = 180^\\circ$ (supplementary angles) because $\\angle OAP + \\angle OBP = 90^\\circ + 90^\\circ = 180^\\circ$. Very frequently asked in 1-mark MCQs!"
},

  {
  "id": "thm_10_circumscribed_quad",
  "type": "Theorem Proof",
  "chapterNo": 10,
  "chapterName": "Circles",
  "title": "Theorem: Quadrilateral Circumscribing a Circle (AB + CD = AD + BC)",
  "marks": 4,
  "boardFrequency": "98% Recurrence (CBSE 2024, 2023, 2022, 2020, 2019, 2017)",
  "ncertReference": "NCERT Class 10, Chapter 10, Exercise 10.2 Q8 (Page 214)",
  "statement": "A quadrilateral ABCD is drawn to circumscribe a circle. Prove that AB + CD = AD + BC.",
  "given": "Quadrilateral $ABCD$ circumscribing a circle $C(O, r)$ touching the sides $AB, BC, CD, DA$ at points $P, Q, R, S$ respectively.",
  "toProve": "$AB + CD = AD + BC$",
  "sheetSteps": [
    {
      "marginTag": "Given",
      "content": "Quadrilateral $ABCD$ circumscribing a circle $C(O, r)$ touching the sides $AB, BC, CD, DA$ at points $P, Q, R, S$ respectively.",
      "reason": "Given figure"
    },
    {
      "marginTag": "Step 1",
      "content": "By Theorem 10.2, lengths of tangents drawn from an external point to a circle are equal:\nFrom vertex $A$: $AP = AS \\quad \\dots (1)$\nFrom vertex $B$: $BP = BQ \\quad \\dots (2)$\nFrom vertex $C$: $CR = CQ \\quad \\dots (3)$\nFrom vertex $D$: $DR = DS \\quad \\dots (4)$",
      "reason": "Theorem 10.2 applied at vertices A, B, C, D"
    },
    {
      "marginTag": "Step 2",
      "content": "Adding equations (1), (2), (3), and (4) vertically:\n$(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ)$",
      "reason": "Adding all 4 tangent equations"
    },
    {
      "marginTag": "Step 3",
      "content": "Notice that collinear segment sums give:\n$AP + BP = AB$\n$CR + DR = CD$\n$AS + DS = AD$\n$BQ + CQ = BC$",
      "reason": "Segment collinear addition"
    },
    {
      "marginTag": "Step 4",
      "content": "Substituting these sums:\n$AB + CD = AD + BC$",
      "reason": "Direct substitution"
    }
  ],
  "conclusion": "$AB + CD = AD + BC \\quad \\text{[Hence Proved]}$",
  "examinerTrap": "Grouping Trap: When writing equations, keep (AP, BP) and (CR, DR) on the SAME side! If you write DR = DS but on the next line write CQ = CR, they will not sum to CD!"
},

  {
  "id": "deriv_circle_sector_arc",
  "type": "Mandatory Derivation",
  "chapterNo": 11,
  "chapterName": "Areas Related to Circles",
  "title": "Derivation of Sector Area and Arc Length Formulas",
  "marks": 3,
  "boardFrequency": "90% Recurrence (Core conceptual basis for Mensuration)",
  "ncertReference": "NCERT Class 10, Chapter 11, Section 11.2",
  "statement": "Derive the formula for: (i) Area of a sector of angle $\\theta$, and (ii) Length of an arc of a sector of angle $\\theta$ of a circle of radius $r$.",
  "sheetSteps": [
    {
      "marginTag": "Full Circle",
      "content": "For a complete circular revolution of $360^\\circ$:\nTotal central angle $= 360^\\circ$\nTotal area of circle $= \\pi r^2$\nTotal circumference $= 2\\pi r$",
      "reason": "Standard circle properties"
    },
    {
      "marginTag": "Unitary Area",
      "content": "By unitary method, for a central angle of $1^\\circ$, area of sector is $\\frac{\\pi r^2}{360^\\circ}$.\nTherefore, for a sector of central angle $\\theta$:\n$\\text{Area of Sector} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2$",
      "reason": "Unitary proportion for area"
    },
    {
      "marginTag": "Unitary Arc",
      "content": "Similarly, for a central angle of $1^\\circ$, length of arc is $\\frac{2\\pi r}{360^\\circ}$.\nTherefore, for an arc subtending central angle $\\theta$:\n$\\text{Length of Arc } l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$",
      "reason": "Unitary proportion for arc length"
    },
    {
      "marginTag": "Relation",
      "content": "Notice the relationship between Area and Arc Length:\n$\\text{Area of Sector} = \\frac{1}{2} \\times \\left(\\frac{\\theta}{360^\\circ} \\times 2\\pi r\\right) \\times r = \\frac{1}{2} l r$",
      "reason": "Area in terms of arc length l"
    }
  ],
  "conclusion": "$\\text{Area} = \\frac{\\theta}{360^\\circ}\\pi r^2, \\quad l = \\frac{\\theta}{360^\\circ}2\\pi r, \\quad \\text{Area} = \\frac{1}{2}lr$",
  "examinerTrap": "Perimeter of Sector Trap: The perimeter of a sector is NOT just the arc length! It is Perimeter = l + 2r = (θ/360°)2πr + 2r. Forgetting to add 2r costs 1 mark in board exams!"
}
];
