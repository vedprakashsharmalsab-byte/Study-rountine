import type { MathChapterConcept } from "./types";

export const CH6_TRIANGLES_CONCEPT: MathChapterConcept = {
  chapterNo: 6,
  title: "Triangles",
  weightage: "8-10 Marks (Highest Weightage Geometry)",
  oneLiner: "Similarity scales size while preserving angles; BPT theorem is the cornerstone of geometry; AA is the fastest similarity test.",
  analogyTitle: "The Photocopier Machine: Congruence vs Similarity",
  analogyContent: "Imagine taking a photo of a triangle and putting it into a photocopier:\n\n• **100% Scale Copy**: The copy has the exact same shape and exact same size — they are **Congruent** $(\\cong)$.\n\n• **200% Zoom or 50% Shrink**: The copy has the exact same angles and identical geometric shape, but all side lengths are enlarged or reduced in exact proportion — they are **Similar** $(\\sim)$.\n\n📌 **Universal Rule**: All congruent figures are automatically similar, but similar figures are *not* necessarily congruent!",
  sections: [
    {
      id: "similarity_basics",
      label: "1. Congruence vs Similarity & Similar Polygons",
      heading: "Same Shape vs Same Size: The Two Non-Negotiable Rules",
      subheading: "Class 9 Congruence vs Class 10 Similarity",
      explanation: "Two polygons with the same number of sides are **similar** if and only if **BOTH** of the following conditions hold:\n\n1. **All corresponding angles are strictly EQUAL**:\n   $$\\angle A = \\angle D, \\quad \\angle B = \\angle E, \\quad \\angle C = \\angle F$$\n\n2. **All corresponding sides are in the EXACT SAME RATIO (Proportional)**:\n   $$\\dfrac{AB}{DE} \\;=\\; \\dfrac{BC}{EF} \\;=\\; \\dfrac{AC}{DF} \\;=\\; k \\qquad (\\text{Scale Factor } k)$$\n\n**Universal Facts for MCQs:**\n\n• **All circles are similar** (always round, same curvature).\n• **All squares are similar** (all angles $90^\\circ$, all sides equal).\n• **All equilateral triangles are similar** (all angles $60^\\circ$).\n• **Two rectangles are NOT necessarily similar** (angles are $90^\\circ$, but aspect ratios like $2:1$ vs $5:1$ differ).",
      formulasOrKeyPoints: [
        {
          title: "Symbolic Notation & Correspondence Order Rule",
          content: "$$\\triangle ABC \\sim \\triangle DEF \\implies \\begin{cases} \\angle A = \\angle D, \\; \\angle B = \\angle E, \\; \\angle C = \\angle F \\\\[10pt] \\dfrac{AB}{DE} = \\dfrac{BC}{EF} = \\dfrac{AC}{DF} \\end{cases}$$",
          note: "Letter order is mandatory! Writing $\\triangle ABC \\sim \\triangle DFE$ claims that $\\angle B = \\angle F$, which loses full marks if $\\angle B = \\angle E$!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Set Up Side Ratios Using Letter Positions",
          action: "From $\\triangle ABC \\sim \\triangle DEF$, take 1st–2nd letters ($\\dfrac{AB}{DE}$), 2nd–3rd letters ($\\dfrac{BC}{EF}$), and 1st–3rd letters ($\\dfrac{AC}{DF}$).",
          proTip: "This mechanical letter-matching trick guarantees zero ratio mix-ups, even without looking at the diagram."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing similarity statements with random vertex order: e.g. writing $\\triangle ABC \\sim \\triangle EDF$ when $A$ matches $D$.",
          correction: "Vertices MUST be listed in exact corresponding order: 1st matches 1st, 2nd matches 2nd, 3rd matches 3rd."
        }
      ]
    },
    {
      id: "bpt_theorem",
      label: "2. Theorem 6.1: Basic Proportionality Theorem (BPT / Thales)",
      heading: "The Legendary 5-Mark Formal Board Proof",
      subheading: "Area Ratio Method + Common Base Between Same Parallels",
      explanation: "**Statement (Theorem 6.1)**:\n*If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.*\n\n**Given**: $\\triangle ABC$ where line $DE \\parallel BC$, intersecting $AB$ at $D$ and $AC$ at $E$.\n\n**To Prove**:\n$$\\dfrac{AD}{DB} \\;=\\; \\dfrac{AE}{EC}$$\n\n**Construction**:\n1. Join $B$ to $E$ and $C$ to $D$.\n2. Draw perpendicular altitudes: $DM \\perp AC$ and $EN \\perp AB$.",
      formulasOrKeyPoints: [
        {
          title: "The Complete Formal 4-Step CBSE Proof",
          content: "**Step 1: Areas with respect to base $AB$**\n\n$$\\text{ar}(\\triangle ADE) = \\dfrac{1}{2} \\times AD \\times EN \\qquad \\text{and} \\qquad \\text{ar}(\\triangle BDE) = \\dfrac{1}{2} \\times DB \\times EN$$\n\n$$\\implies \\dfrac{\\text{ar}(\\triangle ADE)}{\\text{ar}(\\triangle BDE)} \\;=\\; \\dfrac{\\dfrac{1}{2} \\times AD \\times EN}{\\dfrac{1}{2} \\times DB \\times EN} \\;=\\; \\dfrac{AD}{DB} \\qquad \\text{--- (1)}$$\n\n**Step 2: Areas with respect to base $AC$**\n\n$$\\text{ar}(\\triangle ADE) = \\dfrac{1}{2} \\times AE \\times DM \\qquad \\text{and} \\qquad \\text{ar}(\\triangle CDE) = \\dfrac{1}{2} \\times EC \\times DM$$\n\n$$\\implies \\dfrac{\\text{ar}(\\triangle ADE)}{\\text{ar}(\\triangle CDE)} \\;=\\; \\dfrac{\\dfrac{1}{2} \\times AE \\times DM}{\\dfrac{1}{2} \\times EC \\times DM} \\;=\\; \\dfrac{AE}{EC} \\qquad \\text{--- (2)}$$\n\n**Step 3: Equal Area Property of Same Parallels**\n\n$\\triangle BDE$ and $\\triangle CDE$ lie on the same base $DE$ between the same parallel lines $DE \\parallel BC$:\n\n$$\\text{ar}(\\triangle BDE) \\;=\\; \\text{ar}(\\triangle CDE) \\qquad \\text{--- (3)}$$\n\n**Step 4: Final Conclusion**\n\nFrom equations (1), (2), and (3), the left-hand sides are equal:\n\n$$\\dfrac{AD}{DB} \\;=\\; \\dfrac{AE}{EC} \\qquad \\textbf{[Hence Proved!]}$$",
          note: "This theorem is tested as a 5-mark question in alternate board exams. Memorise all 4 steps and the construction diagram."
        },
        {
          title: "Important Corollaries of BPT",
          content: "Adding 1 to both sides yields whole-side ratios:\n\n$$\\dfrac{AD}{DB} + 1 = \\dfrac{AE}{EC} + 1 \\implies \\dfrac{AB}{DB} \\;=\\; \\dfrac{AC}{EC} \\qquad \\text{and} \\qquad \\dfrac{AD}{AB} \\;=\\; \\dfrac{AE}{AC}$$\n\n$$\\text{Segment / Segment} = \\text{Whole / Whole}$$",
          note: "Remember: Segment/Segment = Whole/Whole."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Write All 5 Headings for Theorem Proofs",
          action: "Always structure your proof with: 1. Statement, 2. Given, 3. To Prove, 4. Construction, 5. Proof.",
          proTip: "Draw a clean, ruler-drawn diagram with arrows on $DE \\parallel BC$ and right-angle squares on perpendiculars $DM$ and $EN$."
        },
        {
          stepNo: 2,
          title: "Quote the Parallel Lines Reason in Step 3",
          action: "Explicitly write: 'Two triangles on the same base and between the same parallel lines have equal area.'",
          proTip: "CBSE marking schemes dedicate 1 full mark specifically for this geometric justification."
        }
      ],
      examinerTraps: [
        {
          trap: "Forgetting to draw the perpendiculars in the diagram or omitting the construction step.",
          correction: "Perpendiculars $EN$ and $DM$ are mandatory to define heights for the triangles. Omitting them loses 1.5 marks."
        }
      ]
    },
    {
      id: "converse_bpt",
      label: "3. Theorem 6.2: Converse of BPT",
      heading: "If the Ratio Matches, the Line MUST Be Parallel",
      subheading: "Proof by Contradiction Method via Alternative Parallel Line DE'",
      explanation: "**Statement (Theorem 6.2)**:\n*If a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side.*\n\n**Given**: In $\\triangle ABC$, line $DE$ satisfies $\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$.\n\n**To Prove**: $DE \\parallel BC$.\n\n**Proof by Contradiction**:\n1. Assume $DE$ is NOT parallel to $BC$.\n2. Then there must exist some line $DE'$ that IS parallel to $BC$ (where $E'$ lies on $AC$).\n3. Since $DE' \\parallel BC$, by BPT (Theorem 6.1):\n   $$\\dfrac{AD}{DB} \\;=\\; \\dfrac{AE'}{E'C}$$\n4. But we are given that:\n   $$\\dfrac{AD}{DB} \\;=\\; \\dfrac{AE}{EC}$$\n5. Equating the two RHS expressions:\n   $$\\dfrac{AE'}{E'C} \\;=\\; \\dfrac{AE}{EC}$$\n6. Add 1 to both sides:\n   $$\\dfrac{AE' + E'C}{E'C} \\;=\\; \\dfrac{AE + EC}{EC} \\implies \\dfrac{AC}{E'C} \\;=\\; \\dfrac{AC}{EC} \\implies E'C = EC$$\n7. This is possible only if **$E'$ and $E$ coincide**!\n8. Therefore, our assumption was false: **$DE \\parallel BC$**!",
      formulasOrKeyPoints: [
        {
          title: "Testing Parallelism in Problems",
          content: "To check if $DE \\parallel BC$:\n\nCalculate $\\dfrac{AD}{DB}$ and $\\dfrac{AE}{EC}$ separately. If they are equal, then $DE \\parallel BC$ by Converse of BPT. If unequal, $DE$ is NOT parallel to $BC$.",
          note: "Common 1-mark question: given AD=2, DB=3, AE=4, EC=6. Here 2/3 = 4/6 = 2/3 $\\implies$ Yes, parallel!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Calculate Ratios Separately",
          action: "Never write $\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$ as an initial equation. Compute LHS $= \\dfrac{2}{3}$ and RHS $= \\dfrac{4}{6} = \\dfrac{2}{3}$ separately, then show they are equal.",
          proTip: "State: 'Since $\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$, by the Converse of Basic Proportionality Theorem, $DE \\parallel BC$.'"
        }
      ],
      examinerTraps: [
        {
          trap: "Quoting 'by BPT' instead of 'by Converse of BPT'.",
          correction: "BPT proves the ratio from parallel lines. Converse of BPT proves parallel lines from the ratio! Writing BPT instead of Converse loses 0.5 marks."
        }
      ]
    },
    {
      id: "similarity_criteria",
      label: "4. The 3 Criteria for Similarity: AAA, SSS, and SAS",
      heading: "The Universal Tests to Prove Two Triangles Similar",
      subheading: "AA Shortcut + The Crucial 'Included Angle' Trap in SAS",
      explanation: "You do not need to check all 3 angles and all 3 sides to prove triangles similar. You only need one of three master tests:\n\n1. **AAA (Angle-Angle-Angle) Criterion & AA Shortcut:**\n   If all three corresponding angles are equal, the triangles are similar.\n   **The AA Shortcut**: Since the angle sum of any triangle is $180^\\circ$, if **TWO angles match**, the 3rd angle MUST match automatically!\n   $$\\text{If } \\angle A = \\angle D \\quad \\text{and} \\quad \\angle B = \\angle E \\implies \\triangle ABC \\sim \\triangle DEF \\quad (\\text{AA Similarity})$$\n   *(AA is used in over 80% of all CBSE board geometry proofs!)*\n\n2. **SSS (Side-Side-Side) Criterion:**\n   If all three pairs of corresponding sides are in the exact same ratio:\n   $$\\dfrac{AB}{DE} \\;=\\; \\dfrac{BC}{EF} \\;=\\; \\dfrac{AC}{DF} \\implies \\triangle ABC \\sim \\triangle DEF$$\n\n3. **SAS (Side-Angle-Side) Criterion:**\n   If one angle of a triangle equals one angle of another triangle, and the sides **INCLUDING these angles** are proportional:\n   $$\\dfrac{AB}{DE} \\;=\\; \\dfrac{AC}{DF} \\quad \\text{and} \\quad \\angle A = \\angle D \\implies \\triangle ABC \\sim \\triangle DEF$$",
      formulasOrKeyPoints: [
        {
          title: "The 'Included Angle' Trap in SAS",
          content: "The equal angle MUST be the angle trapped directly BETWEEN the two proportional sides!\n\n$$\\dfrac{AB}{DE} = \\dfrac{AC}{DF} \\implies \\text{Equal angle MUST be } \\angle A = \\angle D!$$\n\nIf $\\angle B = \\angle E$ is given instead of $\\angle A = \\angle D$, **SAS FAILS**! They are NOT necessarily similar.",
          note: "Examiners deliberately test this trap in MCQs by giving an unincluded angle."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Look for AA First — The Fastest Proof",
          action: "Search for: 1. Vertically opposite angles (X-junctions), 2. Common shared angles, 3. Alternate interior angles (Z-rule between parallel lines), 4. Right angles ($90^\\circ$).",
          proTip: "Finding just two equal angle pairs immediately completes the proof by AA."
        }
      ],
      examinerTraps: [
        {
          trap: "Using SSA as a similarity criterion.",
          correction: "There is NO such thing as SSA or ASS similarity! The angle must strictly be INCLUDED between the two proportional sides (SAS)."
        }
      ]
    },
    {
      id: "perpendicular_hypotenuse",
      label: "5. Right Triangle Altitude Theorem (Parijat Jain p420)",
      heading: "Perpendicular from Right Angle to Hypotenuse",
      subheading: "The 3 Golden Altitude Equations: BD² = AD · DC",
      explanation: "In a right-angled triangle $\\triangle ABC$ (right-angled at $B$), let an altitude $BD$ be drawn perpendicular to hypotenuse $AC$ ($BD \\perp AC$).\n\n**The Great Triple Similarity Theorem:**\n$$\\triangle ADB \\sim \\triangle BDC \\sim \\triangle ABC$$\n\nBoth smaller triangles are similar to each other AND to the original large triangle!\n\n**The 3 Golden Altitude Formulas (Parijat Jain Core Formulas):**\n\n1. **Altitude Squared Formula**:\n   $$BD^2 = AD \\cdot DC \\qquad \\iff \\qquad BD = \\sqrt{AD \\cdot DC}$$\n   *(The altitude to the hypotenuse is the geometric mean of the two segments of the hypotenuse!)*\n\n2. **Leg Squared Formula (Left)**:\n   $$AB^2 = AD \\cdot AC$$\n\n3. **Leg Squared Formula (Right)**:\n   $$BC^2 = CD \\cdot AC$$",
      formulasOrKeyPoints: [
        {
          title: "Proof of BD² = AD · DC via AA Similarity",
          content: "1. In $\\triangle ADB$ and $\\triangle BDC$:\n   - $\\angle ADB = \\angle BDC = 90^\\circ$\n   - $\\angle DAB = 90^\\circ - \\angle ABD = \\angle DBC$\n2. By AA similarity: $\\triangle ADB \\sim \\triangle BDC$\n3. Corresponding sides ratio:\n   $$\\dfrac{AD}{BD} \\;=\\; \\dfrac{BD}{DC} \\implies BD^2 = AD \\cdot DC$$",
          note: "This 2-line proof is tested repeatedly in Section B (2 Marks) and Section C (3 Marks)."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Spot the Right Angle at the Top",
          action: "Whenever you see a right triangle with an altitude dropped onto the hypotenuse, immediately quote: 'Altitude $BD = \\sqrt{AD \\cdot DC}$'.",
          proTip: "If $AD = 4$ and $DC = 9$, then $BD = \\sqrt{4 \\times 9} = \\sqrt{36} = 6\\text{ cm}$ in 3 seconds!"
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing AD · DC with AD + DC.",
          correction: "It is the PRODUCT of the segments, not the sum! $BD^2 = AD \\times DC$."
        }
      ]
    },
    {
      id: "hard_ncert_2009",
      label: "6. Legendary 2009 NCERT & Parijat Jain Board HOTS",
      heading: "The 3 High-Difficulty Challenge Proofs",
      subheading: "The Wall Pole Equation, Diagonals of a Trapezium, and Perimeter/Altitude Ratios",
      explanation: "Here are the classic, high-difficulty challenge proofs from the 2009 NCERT and Parijat Jain that frequently appear as 4-mark and 5-mark board questions:\n\n1. **The 3 Vertical Poles on Flat Ground (The $\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{1}{z}$ Formula)**:\n   Two vertical poles of heights $x$ and $y$ stand on level ground. Lines joining the top of each pole to the foot of the opposite pole intersect at a height $z$ above the ground.\n   **Proof**: Using two pairs of similar triangles with common bases, show:\n   $$\\dfrac{1}{x} + \\dfrac{1}{y} \\;=\\; \\dfrac{1}{z}$$\n   *(Notice: The distance between the poles does NOT matter! The height $z$ depends only on $x$ and $y$.)*\n\n2. **Diagonals of a Trapezium**:\n   In a trapezium $ABCD$ with $AB \\parallel CD$, the diagonals $AC$ and $BD$ intersect at $O$.\n   $$\\triangle AOB \\sim \\triangle COD \\quad (\\text{by AA: alternate interior angles}) \\implies \\dfrac{AO}{CO} \\;=\\; \\dfrac{BO}{DO}$$\n\n3. **Ratio of Perimeters, Altitudes, and Medians**:\n   If $\\triangle ABC \\sim \\triangle DEF$ with scale factor $k$:\n   $$\\dfrac{\\text{Perimeter}(\\triangle ABC)}{\\text{Perimeter}(\\triangle DEF)} \\;=\\; \\dfrac{AB}{DE} \\;=\\; \\dfrac{\\text{Altitude}_1}{\\text{Altitude}_2} \\;=\\; \\dfrac{\\text{Median}_1}{\\text{Median}_2} \\;=\\; \\dfrac{\\text{Inradius}_1}{\\text{Inradius}_2} \\;=\\; k$$",
      formulasOrKeyPoints: [
        {
          title: "The Pole Proof Outline (2009 NCERT p144)",
          content: "Let pole heights be $AB = x, CD = y, EF = z$. Let distance $BD = d, BF = p, FD = q$.\n\n1. $\\triangle BFE \\sim \\triangle BDC \\implies \\dfrac{z}{y} = \\dfrac{p}{d}$\n2. $\\triangle DFE \\sim \\triangle DBA \\implies \\dfrac{z}{x} = \\dfrac{q}{d}$\n3. Add both equations: $\\dfrac{z}{y} + \\dfrac{z}{x} = \\dfrac{p + q}{d} = \\dfrac{d}{d} = 1$\n4. Divide by $z$: $$\\dfrac{1}{x} + \\dfrac{1}{y} \\;=\\; \\dfrac{1}{z} \\qquad \\textbf{[Hence Proved!]}$$",
          note: "This is one of the most famous geometry proofs in Indian mathematics education."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Trapezium Diagonal Ratio Shortcut",
          action: "If diagonals intersect at $O$, write $\\dfrac{AO}{OC} = \\dfrac{BO}{OD}$. Cross-multiply to solve for unknown segment $x$.",
          proTip: "If given in terms of $x$ (e.g. $AO = 3x-1, OC = 5x-3$), cross-multiplying yields a clean quadratic equation."
        }
      ],
      examinerTraps: [
        {
          trap: "Squaring the ratio when finding perimeter ratios of similar triangles.",
          correction: "Perimeter is a ONE-DIMENSIONAL length! $\\dfrac{\\text{Perimeter}_1}{\\text{Perimeter}_2} = \\dfrac{s_1}{s_2}$ (NOT squared!). Only area ratios are squared: $\\dfrac{\\text{Area}_1}{\\text{Area}_2} = \\left(\\dfrac{s_1}{s_2}\\right)^2$."
        }
      ]
    }
  ]
};
