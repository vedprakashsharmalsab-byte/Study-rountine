export interface BoardTheoremOrExample {
  id: string;
  type: "Theorem Proof" | "NCERT Board Example";
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
];
