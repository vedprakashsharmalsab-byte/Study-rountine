import type { MathChapterConcept } from "./types";

export const CH10_CIRCLES_CONCEPT: MathChapterConcept = {
  chapterNo: 10,
  title: "Circles",
  weightage: "6 Marks (High-Yield Geometry)",
  oneLiner: "A tangent kisses the circle at 1 point, perpendicular to radius; Tangents from an external point are equal twins.",
  analogyTitle: "The Pizza Cutter Wheel & The Balance Beam",
  analogyContent: "Imagine rolling a circular pizza cutter wheel along a flat cutting board. At any given instant, the round wheel touches the flat surface at **strictly ONE point**! The flat surface never cuts inside the wheel (it is not a secant line). That single-point touching line is a **Tangent**! And if you draw a line from the center hub of the wheel down to that exact point of contact, it forms a perfect $90^\\circ$ perpendicular right angle.",
  sections: [
    {
      id: "tangent_basics",
      label: "1. Tangent, Secant, and Tangent Counts",
      heading: "Touching vs Cutting: The 3 Line-Circle Relationships",
      subheading: "Number of Tangents from Inside, On, and Outside the Circle",
      explanation: "Given a circle and a straight line on a plane, there are exactly three geometric possibilities:  \n\n1. **Non-Intersecting Line**: The line has 0 points in common with the circle.  \n2. **Secant Line**: The line cuts through the circle, intersecting it at **2 distinct points**.  \n3. **Tangent Line**: The line touches the circle at **strictly ONE point**! That single common point is called the **Point of Contact**.  \n\n**Number of Tangents from a Point $P$:**  \n$\\bullet$ Point $P$ is **INSIDE** the circle: **0 tangents** can be drawn (any line from inside cuts through as a secant).  \n$\\bullet$ Point $P$ is **ON** the circle: **Exactly 1 tangent** can be drawn at that point.  \n$\\bullet$ Point $P$ is **OUTSIDE** the circle: **Exactly 2 tangents** can be drawn from $P$ to the circle!",
      formulasOrKeyPoints: [
        {
          title: "Parallel Tangents Theorem (1-Mark MCQ Favorite)",
          content: "A circle can have at most **TWO parallel tangents** at any given time, and they must lie at the opposite ends of a **diameter**!  \n$$\\text{Distance between two parallel tangents} = \\mathbf{2r = \\text{Diameter}}$$",
          note: "If radius r = 5 cm, distance between parallel tangents is exactly 10 cm."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Determine Tangent Count in 1 Second",
          action: "Compare distance of point $P$ from center $O$ ($d = OP$) with radius $r$:  \n$\\bullet$ $d < r \\implies 0$ tangents (inside)  \n$\\bullet$ $d = r \\implies 1$ tangent (on circle)  \n$\\bullet$ $d > r \\implies 2$ tangents (outside).",
          proTip: "This 3-way test solves Section A position MCQs instantly."
        }
      ],
      examinerTraps: [
        {
          trap: "Thinking a circle can have 4 parallel tangents.",
          correction: "A circle can have infinitely many tangents, but for any given direction/slope, there are at most TWO parallel tangents (one at each end of the diameter)."
        }
      ]
    },
    {
      id: "theorem_10_1",
      label: "2. Theorem 10.1: Radius ⟂ Tangent at Point of Contact",
      heading: "The 90° Anchor: $OP \\perp AB$",
      subheading: "Shortest Distance Proof Principle from First Principles",
      explanation: "**Statement (Theorem 10.1)**:  \n*The tangent at any point of a circle is perpendicular to the radius through the point of contact.*  \n\n**Given**: A circle with center $O$ and a tangent $AB$ touching the circle at point $P$.  \n**To Prove**:  \n$$\\mathbf{OP \\perp AB}$$  \n\n**Formal Proof**:  \n1. Take any point $Q$ on the tangent line $AB$ other than $P$. Join $OQ$.  \n2. The point $Q$ must lie **OUTSIDE the circle**! (If $Q$ were inside, the line $AB$ would become a secant, intersecting at 2 points, which contradicts that $AB$ is a tangent!).  \n3. Therefore, the distance $OQ$ is greater than the radius $OP$:  \n   $$\\mathbf{OQ > OP}$$  \n4. This inequality holds true for **EVERY point $Q$ on $AB$** (except the point of contact $P$).  \n5. Since $OP$ is the shortest distance from the center $O$ to the line $AB$:  \n6. By geometry, the shortest distance from a point to a line is the **perpendicular distance**!  \n7. Therefore: **$OP \\perp AB$**! **[Hence Proved]**",
      formulasOrKeyPoints: [
        {
          title: "Pythagoras with Tangents",
          content: "Since $\\angle OPT = 90^\\circ$, $\\triangle OPT$ is always a right-angled triangle where the hypotenuse is $OT$ (distance from center to external point):  \n$$\\mathbf{OT^2 = OP^2 + PT^2} \\implies \\mathbf{PT = \\sqrt{OT^2 - r^2}}$$",
          note: "Tangents create right-angled triangles everywhere! Always look for the 90° angle at the point of contact."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Mark the 90° Square Box Immediately",
          action: "Whenever a radius meets a tangent in any geometry diagram, draw the $90^\\circ$ square symbol box at the point of contact.",
          proTip: "State the reason: '$\\because$ Radius is perpendicular to tangent at point of contact (Theorem 10.1)'."
        }
      ],
      examinerTraps: [
        {
          trap: "Assuming the tangent $PT$ is the hypotenuse in $\\triangle OPT$.",
          correction: "The radius meets the tangent at $90^\\circ$! Therefore, $OP \\perp PT$. The line joining center to external point ($OT$) is the HYPOTENUSE, which is always the longest side: $OT > PT$ and $OT > r$."
        }
      ]
    },
    {
      id: "theorem_10_2",
      label: "3. Theorem 10.2: Equal Tangents from External Point",
      heading: "The Twin Tangents Theorem: $PA = PB$",
      subheading: "RHS Congruence Proof + The 3 Golden Corollaries",
      explanation: "**Statement (Theorem 10.2)**:  \n*The lengths of tangents drawn from an external point to a circle are equal.*  \n\n**Given**: A circle with center $O$. Point $P$ lies outside. $PA$ and $PB$ are two tangents touching the circle at $A$ and $B$.  \n**To Prove**:  \n$$\\mathbf{PA = PB}$$  \n\n**Construction**: Join $OA, OB,$ and $OP$.  \n\n**Formal Proof**:  \n1. In $\\triangle OAP$ and $\\triangle OBP$:  \n   $\\bullet$ $\\angle OAP = \\angle OBP = 90^\\circ$ (Theorem 10.1: Radius $\\perp$ Tangent)  \n   $\\bullet$ $OP = OP$ (Common hypotenuse)  \n   $\\bullet$ $OA = OB = r$ (Radii of the same circle)  \n2. By **RHS Congruence Criterion**:  \n   $$\\mathbf{\\triangle OAP \\cong \\triangle OBP}$$  \n3. By CPCT (Corresponding Parts of Congruent Triangles):  \n   $$\\mathbf{PA = PB} \\quad \\textbf{[Hence Proved!]}$$",
      formulasOrKeyPoints: [
        {
          title: "The 3 Invaluable Corollaries of Theorem 10.2",
          content: "**1. Equal Angles Subtended at Center:**\n$$\\mathbf{\\angle AOP = \\angle BOP} \\quad (\\text{by CPCT})$$\n\n**2. Tangent Angle Bisector:**\n$$\\mathbf{\\angle APO = \\angle BPO} \\quad (\\text{by CPCT})$$\n\n**3. Supplementary Center & Tangent Angles:**\n$$\\mathbf{\\angle APB + \\angle AOB = 180^\\circ}$$\n*(Because $\\angle OAP + \\angle OBP = 90^\\circ + 90^\\circ = 180^\\circ$ in cyclic quad $OAPB$)*",
          note: "Because $\\angle OAP = \\angle OBP = 90^\\circ$, quadrilateral OAPB has two right angles summing to 180°. Therefore, the other two angles must also sum to 180°!"
        },
        {
          title: "Instant 1-Mark Calculation Secret",
          content: "If angle between tangents is $\\angle APB = 70^\\circ$, then angle at center is:  \n$$\\angle AOB = 180^\\circ - 70^\\circ = \\mathbf{110^\\circ}!$$",
          note: "Never spend more than 5 seconds calculating $\\angle AOB$ in Section A MCQs."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "State All 3 Conditions of RHS Congruence",
          action: "List: 1. Right angles ($90^\\circ$), 2. Common Hypotenuse ($OP$), 3. Equal Radii ($OA = OB$).",
          proTip: "Always write RHS as the congruence reason, never SAS or SSS!"
        }
      ],
      examinerTraps: [
        {
          trap: "Writing SAS congruence instead of RHS for Theorem 10.2.",
          correction: "The right angle is NOT between the radius and the hypotenuse! The sides used are the hypotenuse and one leg. The correct criterion is strictly RHS."
        }
      ]
    },
    {
      id: "hard_ncert_circles",
      label: "4. Legendary 2009 NCERT & Parijat Jain Board HOTS",
      heading: "The 5 Master Circle Proofs of Class 10",
      subheading: "Circumscribing Quads, Rhombus Proof, Incircle Radius, and Angle Doubling",
      explanation: "Here are the 5 classic, high-weightage circle challenge proofs that appear every year in CBSE board exams:  \n\n1. **Quadrilateral Circumscribing a Circle ($AB + CD = AD + BC$)**:  \nA circle touches the four sides of quadrilateral $ABCD$ at $P, Q, R, S$.  \nBy Theorem 10.2 (tangents from an external point are equal):  \n$$AP = AS, \\quad BP = BQ, \\quad CR = CQ, \\quad DR = DS$$  \nAdd all four equations:  \n$$(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ) \\implies \\mathbf{AB + CD = AD + BC}!$$  \n\n2. **Parallelogram Circumscribing a Circle is a RHOMBUS**:  \nIn a parallelogram, opposite sides are equal ($AB = CD$ and $AD = BC$).  \nFrom Proof #1: $AB + CD = AD + BC \\implies AB + AB = AD + AD \\implies 2AB = 2AD \\implies \\mathbf{AB = AD}$.  \nSince adjacent sides are equal in a parallelogram, **it is a Rhombus**!  \n\n3. **Angle Doubling Theorem ($\\angle PTQ = 2\\angle OPQ$)**:  \nTwo tangents $TP$ and $TQ$ are drawn from external point $T$.  \nLet $\\angle PTQ = \\theta$. In isosceles $\\triangle TPQ$ ($TP = TQ$):  \n$$\\angle TPQ = \\frac{180^\\circ - \\theta}{2} = 90^\\circ - \\frac{\\theta}{2}$$  \nSince $OP \\perp TP$ (Theorem 10.1): $\\angle OPT = 90^\\circ$.  \n$$\\angle OPQ = \\angle OPT - \\angle TPQ = 90^\\circ - \\left(90^\\circ - \\frac{\\theta}{2}\\right) = \\frac{\\theta}{2} = \\frac{1}{2}\\angle PTQ$$  \n$$\\implies \\mathbf{\\angle PTQ = 2\\angle OPQ}!$$  \n\n4. **Incircle of a Right-Angled Triangle (The $r = \\frac{a + b - c}{2}$ Formula)**:  \nIn $\\triangle ABC$ with $\\angle B = 90^\\circ$, sides $a, b$ and hypotenuse $c$:  \n$$\\mathbf{r = \\frac{AB + BC - AC}{2} = \\frac{a + b - c}{2}}$$  \n\n5. **The 5-Mark Area Boss ($\\triangle ABC$ with $r=4\\text{ cm}, BD=6, DC=8$)**:  \nDivide $\\triangle ABC$ into 3 smaller triangles: $\\text{ar}(\\triangle ABC) = \\text{ar}(\\triangle OBC) + \\text{ar}(\\triangle OCA) + \\text{ar}(\\triangle OAB) = \\frac{1}{2} r (a + b + c) = r \\cdot s$.  \nEquate to Heron's Formula $\\sqrt{s(s-a)(s-b)(s-c)}$ to solve for unknown side segment $x = 7\\text{ cm}$.",
      formulasOrKeyPoints: [
        {
          title: "Inradius Quick Check Formula",
          content: "For a right-angled triangle with sides $6, 8, 10$:  \n$$r = \\frac{6 + 8 - 10}{2} = \\frac{4}{2} = \\mathbf{2\\text{ cm}}!$$",
          note: "This 2-second formula verifies your inradius in board MCQs without drawing tangents."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Quadrilateral Tangent Proof Setup",
          action: "Write down the 4 tangent equality statements from the 4 vertices: $AP=AS, BP=BQ, CR=CQ, DR=DS$.",
          proTip: "Make sure all segments forming the same side (like $AP$ and $BP$) are written on the SAME side of the equal signs so they add cleanly into $AB$!"
        }
      ],
      examinerTraps: [
        {
          trap: "Writing $CR = CQ$ and then writing $DS = DR$ (putting $DR$ on the wrong side of the equation).",
          correction: "Keep terms aligned! Write $DR = DS$ so that $(CR + DR)$ forms $CD$ on the LHS. Misaligned equations cannot be added directly."
        }
      ]
    }
  ]
};
