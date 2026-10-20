import type { VaultQuestion } from "@/data/vaultQuestions";

// =========================================================================
// CBSE CLASS 10 MATHEMATICS — CHAPTER 10: CIRCLES
// 20-YEAR COMPREHENSIVE BOARD QUESTION ARCHIVE (2005–2025)
// Fully verified against official CBSE Marking Schemes, KVS & CFPQ Exemplars
// Complete with Step-by-Step Working, Conceptual Reasons, & KaTeX Math
// =========================================================================

export const CH10_QUESTIONS: VaultQuestion[] = [
  {
    "id": "vq_10_1m_1",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 1,
    "type": "MCQ",
    "question": "[CBSE Board 2024 / NCERT] Two tangents PA and PB are drawn from an external point P to a circle with centre O. If ∠AOB = 120°, then ∠APB is:",
    "options": [
      "60°",
      "120°",
      "80°",
      "40°"
    ],
    "correctOption": 0,
    "answer": "60°",
    "steps": [
      "Step 1: Identify given configuration: PA and PB are tangents touching the circle at A and B respectively. The central angle subtended is ∠AOB = 120°.",
      "Step 2: By Theorem 10.1, the radius through the point of contact is perpendicular to the tangent line: OA ⊥ PA and OB ⊥ PB, so ∠OAP = 90° and ∠OBP = 90°.",
      "Step 3: In quadrilateral OAPB, the sum of all four interior angles is 360°:\n$$\\angle APB + \\angle AOB + \\angle OAP + \\angle OBP = 360^\\circ$$",
      "Step 4: Substitute the right angles:\n$$\\angle APB + 120^\\circ + 90^\\circ + 90^\\circ = 360^\\circ \\implies \\angle APB + 300^\\circ = 360^\\circ$$",
      "Step 5: Solve for ∠APB:\n$$\\angle APB = 360^\\circ - 300^\\circ = 60^\\circ$$\n(Or use the direct supplementary identity: $\\angle APB = 180^\\circ - \\angle AOB = 180^\\circ - 120^\\circ = 60^\\circ$)."
    ],
    "explanation": "Reason: In quadrilateral OAPB, radii OA and OB are perpendicular to tangents PA and PB at points of contact A and B (Theorem 10.1). Since ∠OAP + ∠OBP = 90° + 90° = 180°, the remaining two opposite angles must also sum to 180°: ∠APB + ∠AOB = 180°. Therefore, ∠APB = 180° - 120° = 60°.\n• Why other options are wrong:\n- 120°: This is the central angle ∠AOB itself.\n- 80°: Violates the supplementary condition ($120^\\circ + 80^\\circ = 200^\\circ \\neq 180^\\circ$).\n- 40°: Results from mistakenly dividing the angle difference by 3 or subtracting from 100°.",
    "formula": "\\angle APB + \\angle AOB = 180^\\circ \\implies \\angle APB = 180^\\circ - \\angle AOB",
    "examinerNote": "Golden Rule for Section A: In quadrilateral OAPB formed by tangents and radii, ∠APB and ∠AOB are ALWAYS supplementary (sum = 180°).",
    "source": "CBSE Board 2024 / NCERT Ex 10.2"
  },
  {
    "id": "vq_10_1m_2",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 1,
    "type": "MCQ",
    "question": "[CBSE Board 2023 / NCERT Ex 10.1] The length of a tangent from an external point P to a circle of radius 5 cm is 12 cm. The distance of P from the centre of the circle is:",
    "options": [
      "7 cm",
      "13 cm",
      "17 cm",
      "√119 cm"
    ],
    "correctOption": 1,
    "answer": "13 cm",
    "steps": [
      "Step 1: Let the tangent from external point P touch the circle at point T. Given: radius OT = 5 cm and tangent length PT = 12 cm.",
      "Step 2: By Theorem 10.1, the radius drawn to the point of contact is perpendicular to the tangent line: OT ⊥ PT, so ∠OTP = 90°.",
      "Step 3: In right-angled triangle △OTP, the line segment OP joining the centre O to external point P is the hypotenuse (opposite the 90° angle).",
      "Step 4: Apply Pythagoras Theorem in △OTP:\n$$OP^2 = OT^2 + PT^2$$",
      "Step 5: Substitute known numerical values:\n$$OP^2 = 5^2 + 12^2 = 25 + 144 = 169$$",
      "Step 6: Take positive square root:\n$$OP = \\sqrt{169} = 13 \\text{ cm}$$"
    ],
    "explanation": "Reason: By Theorem 10.1, the radius through the point of contact is perpendicular to the tangent line ($OT \\perp PT$). In right-angled triangle △OTP, OP is the hypotenuse opposite the right angle ∠OTP = 90°. By Pythagoras Theorem: $OP = \\sqrt{OT^2 + PT^2} = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ cm.\n• Why other options are wrong:\n- 7 cm: Results from mistakenly subtracting radius from tangent: $12 - 5 = 7$ cm.\n- 17 cm: Results from directly adding tangent length and radius: $12 + 5 = 17$ cm.\n- √119 cm: Results from incorrectly assuming tangent PT is the hypotenuse: $\\sqrt{12^2 - 5^2} = \\sqrt{119}$ cm.",
    "formula": "OP = \\sqrt{r^2 + PT^2} = \\sqrt{5^2 + 12^2} = 13 \\text{ cm}",
    "examinerNote": "Common Trap: The line joining centre to external point (OP) is ALWAYS the hypotenuse, which is strictly greater than both radius and tangent length.",
    "source": "CBSE Board 2023 / NCERT Ex 10.1"
  },
  {
    "id": "vq_10_1m_3",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 1,
    "type": "MCQ",
    "question": "[CBSE Sample Paper 2024 / NCERT] If tangents PA and PB from an external point P to a circle with centre O are each inclined to the line segment OP at an angle of 60°, then ∠APB is:",
    "options": [
      "120°",
      "60°",
      "90°",
      "30°"
    ],
    "correctOption": 0,
    "answer": "120°",
    "steps": [
      "Step 1: Understand the geometric configuration: PA and PB are tangents from external point P touching the circle at A and B.",
      "Step 2: By Theorem 10.2, △OAP ≅ △OBP by RHS congruence (∠OAP = ∠OBP = 90°, OP = OP common hypotenuse, OA = OB = r).",
      "Step 3: By CPCT, the line segment OP joining the external point to the centre bisects the angle between the two tangents: ∠APO = ∠BPO.",
      "Step 4: We are given that each tangent is inclined to OP at 60°, so ∠APO = 60° and ∠BPO = 60°.",
      "Step 5: Compute the total angle between the two tangents:\n$$\\angle APB = \\angle APO + \\angle BPO = 60^\\circ + 60^\\circ = 120^\\circ$$"
    ],
    "explanation": "Reason: The line segment connecting an external point P to the circle's centre O bisects the angle between the two tangents (CPCT from △OAP ≅ △OBP). Since each tangent makes an angle of 60° with line OP, we have $\\angle APO = \\angle BPO = 60^\\circ$. The total angle between the tangents is therefore $\\angle APB = \\angle APO + \\angle BPO = 60^\\circ + 60^\\circ = 120^\\circ$.\n• Why other options are wrong:\n- 60°: This is only the semi-angle $\\angle APO$ made with line OP, not the full angle between the tangents.\n- 90°: Would require each tangent to be inclined at 45° to OP.\n- 30°: Results from incorrectly halving 60° instead of doubling it.",
    "formula": "\\angle APB = 2 \\times \\angle APO = 2 \\times 60^\\circ = 120^\\circ",
    "examinerNote": "Be vigilant with wording: 'inclined to OP' means ∠APO = 60°, whereas 'inclined to each other' means ∠APB = 60°.",
    "source": "CBSE Sample Paper 2024 / NCERT"
  },
  {
    "id": "vq_10_1m_4",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 1,
    "type": "MCQ",
    "question": "[CBSE Board 2020 / NCERT Ex 10.2 Q11] A parallelogram circumscribes a circle. It must be a:",
    "options": [
      "Rectangle",
      "Square",
      "Rhombus",
      "Trapezium"
    ],
    "correctOption": 2,
    "answer": "Rhombus",
    "steps": [
      "Step 1: Let parallelogram ABCD circumscribe a circle touching sides AB, BC, CD, DA at points P, Q, R, S respectively.",
      "Step 2: By Theorem 10.2, lengths of tangents from an external point are equal: AP = AS, BP = BQ, CR = CQ, DR = DS.",
      "Step 3: Adding all four equations yields the circumscribed quadrilateral identity:\n$$AB + CD = AD + BC$$",
      "Step 4: Since ABCD is a parallelogram, opposite sides are equal: AB = CD and AD = BC.",
      "Step 5: Substitute CD = AB and BC = AD into the identity:\n$$AB + AB = AD + AD \\implies 2AB = 2AD \\implies AB = AD$$",
      "Step 6: A parallelogram with equal adjacent sides has all four sides equal: AB = BC = CD = DA. By definition, a parallelogram with all equal sides is a Rhombus."
    ],
    "explanation": "Reason: For any quadrilateral circumscribing a circle, the sum of opposite sides is equal: $AB + CD = AD + BC$. In a parallelogram, opposite sides are equal ($AB = CD$ and $AD = BC$). Substituting gives $2AB = 2AD \\implies AB = AD$. A parallelogram having adjacent sides equal has all four sides equal, which by definition is a Rhombus.\n• Why other options are wrong:\n- Rectangle: Has equal opposite sides and 90° angles, but adjacent sides are not generally equal.\n- Square: Requires all four interior angles to be 90°, which is not necessarily true for any circumscribed parallelogram.\n- Trapezium: A parallelogram is already a specialized quadrilateral, but the circumscription forces all four sides to be equal, making it strictly a Rhombus.",
    "formula": "AB + CD = AD + BC \\quad \\text{and} \\quad AB = CD, AD = BC \\implies AB = AD \\implies \\text{Rhombus}",
    "examinerNote": "Classic NCERT theorem: A circumscribed parallelogram is ALWAYS a rhombus; it is a square only if an interior angle is explicitly 90°.",
    "source": "CBSE Board 2020 / NCERT Ex 10.2 Q11"
  },
  {
    "id": "vq_10_1m_5",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 1,
    "type": "MCQ",
    "question": "[CBSE Board 2022 / NCERT Ex 10.2 Q2] In a circle with centre O, if tangents TP and TQ are drawn from an external point T such that ∠POQ = 110°, then ∠PTQ is equal to:",
    "options": [
      "60°",
      "70°",
      "80°",
      "90°"
    ],
    "correctOption": 1,
    "answer": "70°",
    "steps": [
      "Step 1: Point T lies outside the circle with centre O. Tangents TP and TQ touch the circle at points P and Q.",
      "Step 2: By Theorem 10.1, radius is perpendicular to the tangent at the point of contact: OP ⊥ TP and OQ ⊥ TQ, so ∠OPT = 90° and ∠OQT = 90°.",
      "Step 3: Quadrilateral OPTQ has sum of interior angles equal to 360°:\n$$\\angle PTQ + \\angle POQ + \\angle OPT + \\angle OQT = 360^\\circ$$",
      "Step 4: Substitute known angle measures:\n$$\\angle PTQ + 110^\\circ + 90^\\circ + 90^\\circ = 360^\\circ \\implies \\angle PTQ + 290^\\circ = 360^\\circ$$",
      "Step 5: Solve for ∠PTQ:\n$$\\angle PTQ = 360^\\circ - 290^\\circ = 70^\\circ$$\n(Direct supplementary shortcut: $\\angle PTQ = 180^\\circ - \\angle POQ = 180^\\circ - 110^\\circ = 70^\\circ$)."
    ],
    "explanation": "Reason: In quadrilateral OPTQ, the radii drawn to the points of contact are perpendicular to the tangents ($OP \\perp TP$ and $OQ \\perp TQ$), giving two right angles of 90° each. Since the total angle sum of a quadrilateral is 360°, the angle between the tangents $\\angle PTQ$ and the angle subtended at the centre $\\angle POQ$ must be supplementary: $\\angle PTQ + \\angle POQ = 180^\\circ$. Therefore, $\\angle PTQ = 180^\\circ - 110^\\circ = 70^\\circ$.\n• Why other options are wrong:\n- 60°: Calculated as $180^\\circ - 120^\\circ$, assuming an incorrect central angle.\n- 80°: Results from an arithmetic subtraction error ($180 - 110 \\neq 80$).\n- 90°: Would require $\\angle POQ = 90^\\circ$.",
    "formula": "\\angle PTQ + \\angle POQ = 180^\\circ \\implies \\angle PTQ = 180^\\circ - \\angle POQ",
    "examinerNote": "NCERT Ex 10.2 Q2: Direct 2-second subtraction from 180° saves valuable exam time.",
    "source": "CBSE Board 2022 / NCERT Ex 10.2 Q2"
  },
  {
    "id": "vq_10_1m_6",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 1,
    "type": "MCQ",
    "question": "[CBSE Board 2023 / NCERT Theory] The number of tangents that can be drawn to a circle from a point lying inside the circle is:",
    "options": [
      "0",
      "1",
      "2",
      "Infinitely many"
    ],
    "correctOption": 0,
    "answer": "0",
    "steps": [
      "Step 1: Recall the definition of a tangent: A straight line that intersects the circle at strictly ONE point (point of contact).",
      "Step 2: Let point P lie strictly in the interior of the circle (distance from centre d < r).",
      "Step 3: Any straight line passing through point P inside the circle must enter the circle and continue outward, intersecting the boundary at exactly two distinct points.",
      "Step 4: By definition, a line intersecting a circle at two distinct points is a secant, never a tangent.",
      "Step 5: Therefore, no tangent can be drawn to a circle from an interior point. The count is exactly 0."
    ],
    "explanation": "Reason: A tangent is defined as a line that meets a circle at exactly one single point of contact. Any line drawn through an interior point P (where distance from centre $d < r$) cuts across the circle and intersects its circumference at two distinct points, making it a secant line. Thus, exactly 0 tangents can be drawn from any point inside a circle.\n• Why other options are wrong:\n- 1: Exactly 1 tangent can be drawn from a point situated ON the circumference of the circle.\n- 2: Exactly 2 tangents can be drawn from a point situated OUTSIDE the circle.\n- Infinitely many: A circle has infinitely many tangents overall, but NONE pass through an internal point.",
    "formula": "d < r \\implies \\text{Number of tangents} = 0",
    "examinerNote": "Summary of tangent counts: Point inside circle = 0 tangents; Point on circle = 1 tangent; Point outside circle = 2 tangents.",
    "source": "CBSE Board 2023 / NCERT Theory"
  },
  {
    "id": "vq_10_2m_1",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "Two concentric circles are of radii 5 cm and 3 cm. Find the length of the chord of the larger circle which touches the smaller circle.",
    "answer": "8 cm",
    "steps": [
      "Step 1: Let O be the common centre of the two concentric circles. Let chord AB of the larger circle (radius R = 5 cm) touch the smaller circle (radius r = 3 cm) at point P.",
      "Step 2: By Theorem 10.1, the radius OP through the point of contact is perpendicular to the tangent line AB:\n$$OP \\perp AB \\implies \\angle OPA = 90^\\circ$$",
      "Step 3: In right-angled triangle △OPA, applying Pythagoras Theorem:\n$$OA^2 = OP^2 + AP^2$$",
      "Step 4: Substitute OA = 5 cm and OP = 3 cm:\n$$5^2 = 3^2 + AP^2 \\implies 25 = 9 + AP^2 \\implies AP^2 = 16 \\implies AP = 4 \\text{ cm}$$",
      "Step 5: Since the perpendicular drawn from the centre of a circle to a chord bisects the chord, point P bisects AB:\n$$AB = 2 \\times AP = 2 \\times 4 \\text{ cm} = 8 \\text{ cm}$$"
    ],
    "explanation": "Reason: Chord AB acts as a tangent to the inner circle at P, so $OP \\perp AB$. By Pythagoras in $\\triangle OPA$, $AP = \\sqrt{R^2 - r^2} = \\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$ cm. Because $OP \\perp AB$, the chord is bisected at P, making $AB = 2 \\times 4 = 8$ cm.",
    "formula": "AB = 2\\sqrt{R^2 - r^2} = 2\\sqrt{5^2 - 3^2} = 8 \\text{ cm}",
    "examinerNote": "Do not forget to double AP! Writing AP = 4 cm as the final answer loses 1 full mark.",
    "source": "CBSE Board 2024 / NCERT Ex 10.2 Q7"
  },
  {
    "id": "vq_10_2m_2",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "PA and PB are tangents to a circle with centre O from an external point P such that ∠APB = 50°. Find the measure of ∠OAB.",
    "answer": "25°",
    "steps": [
      "Step 1: Given tangents PA and PB from external point P to circle with centre O, with ∠APB = 50°.",
      "Step 2: By Theorem 10.2, tangents from an external point are equal in length: PA = PB.",
      "Step 3: In △PAB, since PA = PB, the triangle is isosceles, which implies ∠PAB = ∠PBA.",
      "Step 4: In △PAB, by angle sum property:\n$$\\angle APB + \\angle PAB + \\angle PBA = 180^\\circ \\implies 50^\\circ + 2\\angle PAB = 180^\\circ$$\n$$2\\angle PAB = 130^\\circ \\implies \\angle PAB = 65^\\circ$$",
      "Step 5: By Theorem 10.1, the radius OA is perpendicular to tangent PA at point of contact A:\n$$\\angle OAP = 90^\\circ$$",
      "Step 6: Compute ∠OAB:\n$$\\angle OAB = \\angle OAP - \\angle PAB = 90^\\circ - 65^\\circ = 25^\\circ$$\n(Direct relationship: $\\angle OAB = \\frac{1}{2} \\angle APB = \\frac{50^\\circ}{2} = 25^\\circ$)."
    ],
    "explanation": "Reason: In isosceles $\\triangle PAB$, base angles $\\angle PAB = (180^\\circ - 50^\\circ)/2 = 65^\\circ$. Since radius $OA \\perp PA$, $\\angle OAP = 90^\\circ$. Therefore, $\\angle OAB = 90^\\circ - 65^\\circ = 25^\\circ$. Notice that $\\angle OAB$ is always half of $\\angle APB$.",
    "formula": "\\angle OAB = \\frac{1}{2} \\angle APB = \\frac{50^\\circ}{2} = 25^\\circ",
    "examinerNote": "Direct formula ∠OAB = ½∠APB can be used for checking, but show the step-by-step angle subtraction in 2-mark questions.",
    "source": "CBSE Board 2023 / RD Sharma"
  },
  {
    "id": "vq_10_2m_3",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "From an external point P, the length of the tangent to a circle is 24 cm and the distance of P from the centre is 25 cm. Find the radius of the circle.",
    "answer": "7 cm",
    "steps": [
      "Step 1: Let the tangent from external point P touch the circle with centre O at point T. Given: PT = 24 cm and OP = 25 cm.",
      "Step 2: By Theorem 10.1, the radius through the point of contact is perpendicular to the tangent:\n$$OT \\perp PT \\implies \\angle OTP = 90^\\circ$$",
      "Step 3: In right-angled triangle △OTP, line segment OP is the hypotenuse. By Pythagoras Theorem:\n$$OP^2 = OT^2 + PT^2$$",
      "Step 4: Substitute given lengths:\n$$25^2 = OT^2 + 24^2 \\implies 625 = OT^2 + 576$$",
      "Step 5: Solve for OT^2:\n$$OT^2 = 625 - 576 = 49 \\implies OT = \\sqrt{49} = 7 \\text{ cm}$$",
      "Step 6: Conclude: The radius of the circle is 7 cm."
    ],
    "explanation": "Reason: In right triangle △OTP with right angle at T, the radius $r = OT = \\sqrt{OP^2 - PT^2} = \\sqrt{25^2 - 24^2} = \\sqrt{625 - 576} = \\sqrt{49} = 7$ cm.",
    "formula": "r = \\sqrt{OP^2 - PT^2} = \\sqrt{25^2 - 24^2} = 7 \\text{ cm}",
    "examinerNote": "Recognize Pythagorean triplet (7, 24, 25) instantly to verify your calculation.",
    "source": "CBSE Board 2022 / NCERT Ex 10.2 Q1"
  },
  {
    "id": "vq_10_2m_4",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "If the angle between two tangents drawn from an external point P to a circle of radius 3 cm is 60°, find the length of each tangent.",
    "answer": "3√3 cm",
    "steps": [
      "Step 1: Let PA and PB be the tangents from external point P to a circle with centre O and radius r = 3 cm. Given: ∠APB = 60°.",
      "Step 2: Join OP. By Theorem 10.2, line OP bisects ∠APB:\n$$\\angle APO = \\frac{1}{2} \\angle APB = \\frac{60^\\circ}{2} = 30^\\circ$$",
      "Step 3: By Theorem 10.1, radius OA is perpendicular to tangent PA at A:\n$$\\angle OAP = 90^\\circ$$",
      "Step 4: In right-angled triangle △OAP, use trigonometric tangent ratio for angle ∠APO = 30°:\n$$\\tan 30^\\circ = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{OA}{PA}$$",
      "Step 5: Substitute OA = 3 cm and $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$:\n$$\\frac{1}{\\sqrt{3}} = \\frac{3}{PA} \\implies PA = 3\\sqrt{3} \\text{ cm}$$",
      "Step 6: Since PA = PB (Theorem 10.2), the length of each tangent is $3\\sqrt{3} \\text{ cm}$."
    ],
    "explanation": "Reason: Line OP bisects $\\angle APB$, giving $\\angle APO = 30^\\circ$. In right triangle △OAP, $\\tan 30^\\circ = OA/PA \\implies 1/\\sqrt{3} = 3/PA \\implies PA = 3\\sqrt{3}$ cm.",
    "formula": "PA = \\frac{r}{\\tan(\\angle APB / 2)} = \\frac{3}{\\tan 30^\\circ} = 3\\sqrt{3} \\text{ cm}",
    "examinerNote": "Make sure to state that △OAP is right-angled at A before applying trigonometry.",
    "source": "CBSE Board 2020 / Exemplar"
  },
  {
    "id": "vq_10_2m_5",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "In the figure, PQ is a chord of a circle with centre O and PT is a tangent at P such that ∠QPT = 60°. Find the measure of ∠PRQ, where R is a point on the major arc.",
    "answer": "60°",
    "steps": [
      "Step 1: Given: Chord PQ, tangent PT touching at P with ∠QPT = 60°, and R is a point on the major arc of the circle.",
      "Step 2: By Theorem 10.1, radius OP is perpendicular to tangent PT at point of contact P:\n$$\\angle OPT = 90^\\circ$$",
      "Step 3: Find ∠OPQ:\n$$\\angle OPQ = \\angle OPT - \\angle QPT = 90^\\circ - 60^\\circ = 30^\\circ$$",
      "Step 4: In △OPQ, radii are equal: OP = OQ = r. Therefore, △OPQ is isosceles with ∠OQP = ∠OPQ = 30°.",
      "Step 5: In △OPQ, by angle sum property, central angle ∠POQ is:\n$$\\angle POQ = 180^\\circ - (30^\\circ + 30^\\circ) = 180^\\circ - 60^\\circ = 120^\\circ$$",
      "Step 6: The angle subtended by an arc at the circumference is half the angle subtended at the centre:\n$$\\angle PRQ = \\frac{1}{2} \\angle POQ = \\frac{1}{2} \\times 120^\\circ = 60^\\circ$$\n(Alternatively, by Alternate Segment Theorem: The angle between a tangent and a chord equals the angle subtended by the chord in the alternate segment: $\\angle PRQ = \\angle QPT = 60^\\circ$)."
    ],
    "explanation": "Reason: $\\angle OPQ = 90^\\circ - 60^\\circ = 30^\\circ$. Since $OP = OQ$, $\\angle OQP = 30^\\circ$, giving central angle $\\angle POQ = 180^\\circ - 60^\\circ = 120^\\circ$. The angle at the major arc is $\\angle PRQ = \\frac{1}{2}\\angle POQ = 60^\\circ$ (or directly by Alternate Segment Theorem: $\\angle PRQ = \\angle QPT = 60^\\circ$).",
    "formula": "\\angle PRQ = \\frac{1}{2} \\angle POQ = \\angle QPT = 60^\\circ",
    "examinerNote": "Even though Alternate Segment Theorem is an elegant shortcut, in CBSE standard papers deriving via central angle ∠POQ guarantees full marks.",
    "source": "CBSE Board 2023 / NCERT Exemplar"
  },
  {
    "id": "vq_10_2m_6",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "A circle is inscribed in a △ABC touching BC at D, CA at E, and AB at F. If AB = 10 cm, BC = 8 cm, and CA = 12 cm, find the lengths of AF, BD, and CE.",
    "answer": "AF = 7 cm, BD = 3 cm, CE = 5 cm",
    "steps": [
      "Step 1: Let the lengths of the tangent segments from vertices A, B, C be x, y, z respectively:\n$$AF = AE = x, \\quad BD = BF = y, \\quad CD = CE = z$$ (by Theorem 10.2).",
      "Step 2: Express the perimeter in terms of x, y, z:\n$$AB = x + y = 10 \\text{ cm} \\quad \\text{--- (1)}$$\n$$BC = y + z = 8 \\text{ cm} \\quad \\text{--- (2)}$$\n$$CA = z + x = 12 \\text{ cm} \\quad \\text{--- (3)}$$",
      "Step 3: Add all three equations (1), (2), and (3):\n$$2(x + y + z) = 10 + 8 + 12 = 30 \\implies x + y + z = 15 \\text{ cm} \\quad \\text{--- (4)}$$",
      "Step 4: Subtract equation (2) from (4) to find x (length of AF):\n$$x = (x + y + z) - (y + z) = 15 - 8 = 7 \\text{ cm} \\implies AF = 7 \\text{ cm}$$",
      "Step 5: Subtract equation (3) from (4) to find y (length of BD):\n$$y = (x + y + z) - (z + x) = 15 - 12 = 3 \\text{ cm} \\implies BD = 3 \\text{ cm}$$",
      "Step 6: Subtract equation (1) from (4) to find z (length of CE):\n$$z = (x + y + z) - (x + y) = 15 - 10 = 5 \\text{ cm} \\implies CE = 5 \\text{ cm}$$"
    ],
    "explanation": "Reason: Tangents from vertices are equal: $AF = AE = x, BD = BF = y, CD = CE = z$. Summing gives $2(x+y+z) = 30 \\implies x+y+z = 15$ cm (semi-perimeter $s$). Thus: $AF = s - BC = 15 - 8 = 7$ cm, $BD = s - AC = 15 - 12 = 3$ cm, $CE = s - AB = 15 - 10 = 5$ cm.",
    "formula": "x = s - a = 15 - 8 = 7 \\text{ cm}, \\quad y = s - b = 15 - 12 = 3 \\text{ cm}, \\quad z = s - c = 15 - 10 = 5 \\text{ cm}",
    "examinerNote": "General rule: Tangent from any vertex equals semi-perimeter minus the opposite side (AF = s - BC).",
    "source": "CBSE Board 2024 / RD Sharma"
  },
  {
    "id": "vq_10_3m_1",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "Proof",
    "question": "Prove that in two concentric circles, the chord of the larger circle which touches the smaller circle is bisected at the point of contact.",
    "answer": "Hence Proved (AP = PB)",
    "steps": [
      "Step 1: Given: Two concentric circles C₁ and C₂ with common centre O. A chord AB of the larger circle C₁ touches the smaller circle C₂ at point P.",
      "Step 2: To Prove: Point P bisects chord AB, i.e., AP = PB.",
      "Step 3: Construction: Join OP, OA, and OB.",
      "Step 4: Proof: Since AB touches the smaller circle C₂ at point P, line AB is a tangent to circle C₂ at P.",
      "Step 5: By Theorem 10.1, the radius through the point of contact is perpendicular to the tangent line:\n$$OP \\perp AB$$",
      "Step 6: Now consider chord AB of the larger circle C₁. We know that the perpendicular drawn from the centre of a circle to any chord bisects the chord (Class 9 Theorem).\nSince $OP \\perp AB$, point P bisects chord AB:\n$$AP = PB$$\n[Hence Proved]"
    ],
    "explanation": "Reason: Chord AB is a tangent to the inner circle at P, so $OP \\perp AB$ by Theorem 10.1. In the outer circle, OP is a perpendicular from centre O to chord AB. By standard geometry, a perpendicular from centre to chord bisects it, hence $AP = PB$.",
    "formula": "OP \\perp AB \\implies AP = PB",
    "examinerNote": "State both geometric reasons: 1. Radius ⊥ Tangent (Theorem 10.1) and 2. Perpendicular from centre to chord bisects the chord.",
    "source": "CBSE Board 2023 / NCERT Ex 10.2 Q7"
  },
  {
    "id": "vq_10_3m_2",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "Proof",
    "question": "Prove that the tangent at any point of a circle is perpendicular to the radius through the point of contact (Theorem 10.1).",
    "answer": "Hence Proved (OP ⊥ AB)",
    "steps": [
      "Step 1: Given: A circle with centre O and a tangent AB touching the circle at point P.",
      "Step 2: To Prove: OP ⊥ AB.",
      "Step 3: Construction: Take any point Q on the tangent line AB other than the point of contact P. Join OQ.",
      "Step 4: Proof: The point Q must lie OUTSIDE the circle. (If Q were inside the circle, the straight line AB would cut the circle at two distinct points and become a secant line, contradicting the given fact that AB is a tangent).",
      "Step 5: Since point Q lies outside the circle, the distance OQ is strictly greater than the radius OP:\n$$OQ > OP$$",
      "Step 6: This inequality $OQ > OP$ holds true for EVERY point Q on the line AB, except the point of contact P.",
      "Step 7: Therefore, segment OP is the SHORTEST of all distances from the centre O to any point on line AB.",
      "Step 8: By geometry, the shortest distance from a given point to a given line is the perpendicular distance. Hence:\n$$OP \\perp AB$$\n[Hence Proved]"
    ],
    "explanation": "Reason: Every point Q on tangent AB except P lies outside the circle, meaning $OQ > OP$. Since OP is the shortest distance from centre O to line AB, and the shortest distance between a point and a line is always perpendicular, $OP \\perp AB$.",
    "formula": "OP = \\min_{Q \\in AB} OQ \\implies OP \\perp AB",
    "examinerNote": "Do not skip the contradiction argument: Explain clearly why point Q cannot lie inside the circle.",
    "source": "CBSE Board 2024 / NCERT Theorem 10.1"
  },
  {
    "id": "vq_10_3m_3",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "A quadrilateral ABCD is drawn to circumscribe a circle. Prove that AB + CD = AD + BC.",
    "answer": "Hence Proved (AB + CD = AD + BC)",
    "steps": [
      "Step 1: Given: Quadrilateral ABCD circumscribes a circle with centre O, touching the sides AB, BC, CD, DA at points P, Q, R, S respectively.",
      "Step 2: To Prove: AB + CD = AD + BC.",
      "Step 3: By Theorem 10.2, the lengths of tangents drawn from an external point to a circle are equal.",
      "Step 4: Apply Theorem 10.2 from each of the four vertices A, B, C, D:\n$$AP = AS \\quad \\text{--- (1)} \\quad [\\text{Tangents from vertex A}]$$\n$$BP = BQ \\quad \\text{--- (2)} \\quad [\\text{Tangents from vertex B}]$$\n$$CR = CQ \\quad \\text{--- (3)} \\quad [\\text{Tangents from vertex C}]$$\n$$DR = DS \\quad \\text{--- (4)} \\quad [\\text{Tangents from vertex D}]$$",
      "Step 5: Add equations (1), (2), (3), and (4) together:\n$$(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ)$$",
      "Step 6: Group the segments that form full sides of the quadrilateral:\n$$\\because AP + BP = AB, \\quad CR + DR = CD, \\quad AS + DS = AD, \\quad BQ + CQ = BC$$",
      "Step 7: Substituting these groupings yields:\n$$AB + CD = AD + BC$$\n[Hence Proved]"
    ],
    "explanation": "Reason: Tangents from vertices are equal: $AP = AS, BP = BQ, CR = CQ, DR = DS$. Aligning and adding them: $(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ) \\implies AB + CD = AD + BC$.",
    "formula": "AB + CD = AD + BC",
    "examinerNote": "Crucial Step: Write CR on the left and DR on the left so they combine to CD on LHS; do not invert to DS = DR.",
    "source": "CBSE Board 2024 / NCERT Ex 10.2 Q8"
  },
  {
    "id": "vq_10_3m_3b",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "Prove that the parallelogram circumscribing a circle is a rhombus.",
    "answer": "Hence Proved (ABCD is a Rhombus)",
    "steps": [
      "Step 1: Given: A parallelogram ABCD circumscribes a circle touching its sides AB, BC, CD, DA at points P, Q, R, S respectively.",
      "Step 2: To Prove: ABCD is a rhombus (i.e., AB = BC = CD = DA).",
      "Step 3: By Theorem 10.2, lengths of tangents from an external point are equal: AP = AS, BP = BQ, CR = CQ, DR = DS.",
      "Step 4: Adding these four equations gives the circumscribed quadrilateral property:\n$$(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ) \\implies AB + CD = AD + BC \\quad \\text{--- (1)}$$",
      "Step 5: Since ABCD is a parallelogram, its opposite sides are equal:\n$$AB = CD \\quad \\text{and} \\quad AD = BC \\quad \\text{--- (2)}$$",
      "Step 6: Substitute equations (2) into equation (1):\n$$AB + AB = AD + AD \\implies 2AB = 2AD \\implies AB = AD$$",
      "Step 7: Since adjacent sides AB and AD are equal, and opposite sides are equal, all four sides of ABCD are equal:\n$$AB = BC = CD = DA$$",
      "Step 8: A parallelogram with all four sides equal is a rhombus. Hence, ABCD is a rhombus.\n[Hence Proved]"
    ],
    "explanation": "Reason: For any circumscribed quadrilateral, $AB + CD = AD + BC$. In a parallelogram, $AB = CD$ and $AD = BC$, so $2AB = 2AD \\implies AB = AD$. A parallelogram with equal adjacent sides is by definition a Rhombus.",
    "formula": "AB + CD = AD + BC \\implies 2AB = 2AD \\implies AB = AD \\implies \\text{Rhombus}",
    "examinerNote": "Do not skip proving AB + CD = AD + BC first unless the question explicitly provides it as a given.",
    "source": "CBSE Board 2023 / NCERT Ex 10.2 Q11"
  },
  {
    "id": "vq_10_3m_4",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "Prove that the angle between the two tangents drawn from an external point to a circle is supplementary to the angle subtended by the line-segment joining the points of contact at the centre.",
    "answer": "Hence Proved (∠APB + ∠AOB = 180°)",
    "steps": [
      "Step 1: Given: A circle with centre O. External point P with tangents PA and PB touching the circle at A and B. Segment joining points of contact to centre subtends ∠AOB, and tangents form ∠APB.",
      "Step 2: To Prove: ∠APB + ∠AOB = 180° (i.e., they are supplementary).",
      "Step 3: By Theorem 10.1, the radius through the point of contact is perpendicular to the tangent line:\n$$OA \\perp PA \\implies \\angle OAP = 90^\\circ$$\n$$OB \\perp PB \\implies \\angle OBP = 90^\\circ$$",
      "Step 4: In quadrilateral OAPB, the sum of all four interior angles is 360°:\n$$\\angle APB + \\angle AOB + \\angle OAP + \\angle OBP = 360^\\circ$$",
      "Step 5: Substitute the two 90° angles:\n$$\\angle APB + \\angle AOB + 90^\\circ + 90^\\circ = 360^\\circ$$\n$$\\angle APB + \\angle AOB + 180^\\circ = 360^\\circ$$",
      "Step 6: Subtract 180° from both sides:\n$$\\angle APB + \\angle AOB = 180^\\circ$$\nHence, the angles are supplementary.\n[Hence Proved]"
    ],
    "explanation": "Reason: Radii to points of contact form $\\angle OAP = \\angle OBP = 90^\\circ$. In quadrilateral OAPB, angle sum is $360^\\circ$, so $\\angle APB + \\angle AOB = 360^\\circ - (90^\\circ + 90^\\circ) = 180^\\circ$.",
    "formula": "\\angle APB + \\angle AOB = 180^\\circ",
    "examinerNote": "This proves that quadrilateral OAPB is a cyclic quadrilateral since opposite angles sum to 180°.",
    "source": "CBSE Board 2024 / NCERT Ex 10.2 Q4"
  },
  {
    "id": "vq_10_3m_5",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "From an external point P, tangents PA and PB are drawn to a circle with centre O. Prove that OP is the perpendicular bisector of the chord of contact AB.",
    "answer": "Hence Proved (OP ⊥ AB and AM = MB)",
    "steps": [
      "Step 1: Given: Circle with centre O, external point P, tangents PA and PB touching at A and B. Let OP intersect chord AB at point M.",
      "Step 2: To Prove: (i) AM = MB, and (ii) OP ⊥ AB.",
      "Step 3: Proof: By Theorem 10.2, tangents from an external point are equal in length:\n$$PA = PB$$",
      "Step 4: Also, line OP bisects the angle between the tangents (CPCT from △OAP ≅ △OBP):\n$$\\angle APM = \\angle BPM$$",
      "Step 5: In △PAM and △PBM:\n- $PA = PB$ (Lengths of tangents from P)\n- $\\angle APM = \\angle BPM$ (OP bisects ∠APB)\n- $PM = PM$ (Common side)\nBy SAS Congruence Criterion:\n$$\\triangle PAM \\cong \\triangle PBM$$",
      "Step 6: By CPCT:\n$$AM = BM \\quad \\text{--- (Point M bisects chord AB)}$$\n$$\\angle PMA = \\angle PMB$$",
      "Step 7: Since ∠PMA and ∠PMB form a linear pair on straight line segment AB:\n$$\\angle PMA + \\angle PMB = 180^\\circ \\implies 2\\angle PMA = 180^\\circ \\implies \\angle PMA = 90^\\circ$$",
      "Step 8: Therefore, line segment OP is the perpendicular bisector of chord AB.\n[Hence Proved]"
    ],
    "explanation": "Reason: In triangles △PAM and △PBM, $PA = PB$, $\\angle APM = \\angle BPM$, and $PM$ is common. By SAS, $\\triangle PAM \\cong \\triangle PBM$, yielding $AM = MB$ and $\\angle PMA = \\angle PMB = 90^\\circ$.",
    "formula": "OP \\perp AB \\quad \\text{and} \\quad AM = MB",
    "examinerNote": "Be clear that SAS congruence is used on △PAM and △PBM, whereas RHS was used earlier on △OAP and △OBP.",
    "source": "CBSE Board 2023 / RD Sharma"
  },
  {
    "id": "vq_10_5m_1",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 5,
    "type": "Proof",
    "question": "Prove that the lengths of tangents drawn from an external point to a circle are equal (Theorem 10.2).",
    "answer": "Hence Proved (PA = PB)",
    "steps": [
      "Step 1: Given: A circle with centre O. An external point P. Two tangents PA and PB drawn from point P touching the circle at points A and B respectively.",
      "Step 2: To Prove: Length of tangent PA equals length of tangent PB, i.e.,\n$$PA = PB$$",
      "Step 3: Construction: Join OA, OB, and OP.",
      "Step 4: Proof: By Theorem 10.1, the radius through the point of contact is perpendicular to the tangent line:\n$$OA \\perp PA \\implies \\angle OAP = 90^\\circ$$\n$$OB \\perp PB \\implies \\angle OBP = 90^\\circ$$",
      "Step 5: Consider the two right-angled triangles △OAP and △OBP:\n1. $\\angle OAP = \\angle OBP = 90^\\circ$ [Right angles from Theorem 10.1]\n2. $OP = OP$ [Common hypotenuse]\n3. $OA = OB = r$ [Radii of the same circle]",
      "Step 6: By the RHS Congruence Criterion (Right angle - Hypotenuse - Side):\n$$\\triangle OAP \\cong \\triangle OBP$$",
      "Step 7: By CPCT (Corresponding Parts of Congruent Triangles):\n$$PA = PB$$\n[Hence Proved]"
    ],
    "explanation": "Reason: Triangles △OAP and △OBP are congruent by RHS because both have a 90° angle at points of contact, share common hypotenuse OP, and have equal radii OA = OB. By CPCT, tangent lengths $PA = PB$.",
    "formula": "\\triangle OAP \\cong \\triangle OBP \\text{ (by RHS)} \\implies PA = PB",
    "examinerNote": "Mark Distribution: Given/To Prove/Figure (1 mark), Construction (1 mark), Theorem 10.1 application & RHS congruence conditions (2 marks), Final CPCT conclusion (1 mark).",
    "source": "CBSE Board 2024 / NCERT Theorem 10.2"
  },
  {
    "id": "vq_10_5m_2",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 5,
    "type": "LA",
    "question": "ABC is a right triangle right-angled at B. A circle is inscribed in △ABC. If the sides containing the right angle are AB = c and BC = a, and the hypotenuse is AC = b, prove that the radius r of the inscribed circle is given by r = (a + c - b) / 2.",
    "answer": "Hence Proved: r = (a + c - b) / 2",
    "steps": [
      "Step 1: Given: Right triangle △ABC with ∠B = 90°, AB = c, BC = a, and hypotenuse AC = b. Inscribed circle with centre O and radius r touches AB at P, BC at Q, and AC at R.",
      "Step 2: By Theorem 10.1, radii to points of contact are perpendicular to the sides: OP ⊥ AB, OQ ⊥ BC, and OR ⊥ AC.",
      "Step 3: In quadrilateral OPBQ:\n- $\\angle OPB = 90^\\circ$ (Theorem 10.1)\n- $\\angle OQB = 90^\\circ$ (Theorem 10.1)\n- $\\angle B = 90^\\circ$ (Given right angle)\n- Sum of angles = 360° $\\implies \\angle POQ = 90^\\circ$.\nSince all angles are 90° and adjacent sides OP = OQ = r, quadrilateral OPBQ is a SQUARE of side r.",
      "Step 4: Therefore, the tangent segments from vertex B are:\n$$BP = BQ = r$$",
      "Step 5: Find the remaining tangent segments along sides AB and BC:\n$$AP = AB - BP = c - r$$\n$$CQ = BC - BQ = a - r$$",
      "Step 6: By Theorem 10.2, tangents from an external point are equal:\n$$AR = AP = c - r$$\n$$CR = CQ = a - r$$",
      "Step 7: The hypotenuse AC is the sum of AR and CR:\n$$AC = AR + CR \\implies b = (c - r) + (a - r)$$\n$$b = a + c - 2r$$",
      "Step 8: Rearrange the equation to solve for radius r:\n$$2r = a + c - b \\implies r = \\frac{a + c - b}{2}$$\n[Hence Proved]"
    ],
    "explanation": "Reason: Corner quadrilateral OPBQ is a square of side r, so $BP = BQ = r$. Tangents from A and C are $c - r$ and $a - r$. Summing along hypotenuse gives $b = (a - r) + (c - r) = a + c - 2r \\implies r = (a + c - b)/2$.",
    "formula": "r = \\frac{a + c - b}{2} = \\frac{AB + BC - AC}{2}",
    "examinerNote": "High-Yield Result: For a 6-8-10 right triangle: r = (6 + 8 - 10)/2 = 2 cm.",
    "source": "CBSE Board 2024 / RD Sharma"
  },
  {
    "id": "vq_10_5m_3",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 5,
    "type": "LA",
    "question": "Two tangents TP and TQ are drawn to a circle with centre O from an external point T. Prove that ∠PTQ = 2 ∠OPQ.",
    "answer": "Hence Proved (∠PTQ = 2 ∠OPQ)",
    "steps": [
      "Step 1: Given: A circle with centre O. An external point T from which two tangents TP and TQ are drawn touching the circle at P and Q respectively.",
      "Step 2: To Prove: $\\angle PTQ = 2 \\angle OPQ$.",
      "Step 3: Let $\\angle PTQ = \\theta$.",
      "Step 4: By Theorem 10.2, the lengths of tangents drawn from an external point are equal:\n$$TP = TQ$$",
      "Step 5: In △TPQ, since TP = TQ, △TPQ is an isosceles triangle. Therefore, its base angles are equal:\n$$\\angle TPQ = \\angle TQP$$",
      "Step 6: In △TPQ, the sum of all three interior angles is 180°:\n$$\\angle PTQ + \\angle TPQ + \\angle TQP = 180^\\circ$$\n$$\\theta + 2\\angle TPQ = 180^\\circ \\implies 2\\angle TPQ = 180^\\circ - \\theta$$\n$$\\angle TPQ = \\frac{180^\\circ - \\theta}{2} = 90^\\circ - \\frac{\\theta}{2} \\quad \\text{--- (1)}$$",
      "Step 7: By Theorem 10.1, the radius OP is perpendicular to tangent TP at point of contact P:\n$$\\angle OPT = 90^\\circ \\quad \\text{--- (2)}$$",
      "Step 8: From the figure, angle ∠OPQ is obtained by subtracting ∠TPQ from ∠OPT:\n$$\\angle OPQ = \\angle OPT - \\angle TPQ$$\n$$\\angle OPQ = 90^\\circ - \\left(90^\\circ - \\frac{\\theta}{2}\\right) = 90^\\circ - 90^\\circ + \\frac{\\theta}{2} = \\frac{\\theta}{2}$$",
      "Step 9: Substitute $\\theta = \\angle PTQ$ back into the equation:\n$$\\angle OPQ = \\frac{1}{2} \\angle PTQ \\implies \\angle PTQ = 2 \\angle OPQ$$\n[Hence Proved]"
    ],
    "explanation": "Reason: In isosceles $\\triangle TPQ$, base angle $\\angle TPQ = 90^\\circ - \\theta/2$. Since radius $OP \\perp TP$, $\\angle OPT = 90^\\circ$. Therefore, $\\angle OPQ = 90^\\circ - (90^\\circ - \\theta/2) = \\theta/2 = \\frac{1}{2}\\angle PTQ \\implies \\angle PTQ = 2\\angle OPQ$.",
    "formula": "\\angle PTQ = 2 \\angle OPQ",
    "examinerNote": "One of the most frequently repeated 3/5-mark board proofs (appeared in 2017, 2019, 2020, 2023).",
    "source": "CBSE Board 2023 / NCERT Ex 10.2 Q2"
  },
  {
    "id": "vq_10_board_21",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "A tangent PQ at a point P of a circle of radius 5 cm meets a line through the centre O at a point Q such that OQ = 13 cm. Find the length of the tangent PQ.",
    "answer": "12 cm",
    "steps": [
      "Step 1: Given: Radius OP = 5 cm, distance from centre OQ = 13 cm. PQ is tangent at P.",
      "Step 2: By Theorem 10.1, radius is perpendicular to tangent at point of contact: OP ⊥ PQ, so ∠OPQ = 90°.",
      "Step 3: In right-angled triangle △OPQ, hypotenuse is OQ. By Pythagoras Theorem:\n$$OQ^2 = OP^2 + PQ^2$$",
      "Step 4: Substitute known values:\n$$13^2 = 5^2 + PQ^2 \\implies 169 = 25 + PQ^2$$",
      "Step 5: Solve for PQ:\n$$PQ^2 = 169 - 25 = 144 \\implies PQ = \\sqrt{144} = 12 \\text{ cm}$$"
    ],
    "explanation": "Reason: By Theorem 10.1, $OP \\perp PQ$. In right triangle △OPQ, $PQ = \\sqrt{OQ^2 - OP^2} = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$ cm.",
    "formula": "PQ = \\sqrt{OQ^2 - OP^2} = 12 \\text{ cm}",
    "examinerNote": "Pythagorean triplet (5, 12, 13).",
    "source": "CBSE Board PYQ 2024"
  },
  {
    "id": "vq_10_board_22",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "A point P is 10 cm away from the centre O of a circle of radius 6 cm. Find the length of the tangent drawn from P to the circle, and find the distance of P from the nearest point on the circumference.",
    "answer": "Tangent = 8 cm, Nearest distance = 4 cm",
    "steps": [
      "Step 1: Given: Radius r = 6 cm, distance of external point OP = 10 cm. Let tangent touch at T.",
      "Step 2: By Theorem 10.1, OT ⊥ PT, so △OTP is a right-angled triangle with hypotenuse OP.",
      "Step 3: Apply Pythagoras Theorem to find tangent length PT:\n$$PT = \\sqrt{OP^2 - OT^2} = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8 \\text{ cm}$$",
      "Step 4: The line OP intersects the circumference of the circle at a nearest point N.",
      "Step 5: The distance of P from the nearest point on the circumference is:\n$$\\text{Distance} = OP - r = 10 \\text{ cm} - 6 \\text{ cm} = 4 \\text{ cm}$$"
    ],
    "explanation": "Reason: Tangent length $PT = \\sqrt{10^2 - 6^2} = 8$ cm. The nearest point N lies along the radial line OP, so distance $PN = OP - r = 10 - 6 = 4$ cm.",
    "formula": "PT = \\sqrt{OP^2 - r^2} = 8 \\text{ cm}, \\quad \\text{Nearest distance} = OP - r = 4 \\text{ cm}",
    "examinerNote": "Notice two questions are asked: tangent length AND nearest distance.",
    "source": "CBSE Board PYQ 2023"
  },
  {
    "id": "vq_10_board_23",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "The length of a tangent from a point P at a distance of 15 cm from the centre of the circle is 12 cm. Find the radius of the circle.",
    "answer": "9 cm",
    "steps": [
      "Step 1: Given: Distance from centre OP = 15 cm, tangent length PT = 12 cm.",
      "Step 2: By Theorem 10.1, radius OT is perpendicular to tangent PT at point of contact T: ∠OTP = 90°.",
      "Step 3: By Pythagoras Theorem in right-angled △OTP:\n$$OP^2 = OT^2 + PT^2 \\implies 15^2 = OT^2 + 12^2$$",
      "Step 4: Calculate:\n$$225 = OT^2 + 144 \\implies OT^2 = 225 - 144 = 81$$",
      "Step 5: Radius $r = OT = \\sqrt{81} = 9 \\text{ cm}$."
    ],
    "explanation": "Reason: $r = \\sqrt{OP^2 - PT^2} = \\sqrt{15^2 - 12^2} = \\sqrt{225 - 144} = \\sqrt{81} = 9$ cm.",
    "formula": "r = \\sqrt{OP^2 - PT^2} = 9 \\text{ cm}",
    "examinerNote": "Pythagorean triplet scaled from (3, 4, 5) by factor 3: (9, 12, 15).",
    "source": "CBSE Board PYQ 2022"
  },
  {
    "id": "vq_10_board_24",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "Two concentric circles have radii 13 cm and 5 cm. Find the length of the chord of the outer circle which touches the inner circle.",
    "answer": "24 cm",
    "steps": [
      "Step 1: Let common centre be O. Chord AB of the larger circle (R = 13 cm) touches the smaller circle (r = 5 cm) at point P.",
      "Step 2: By Theorem 10.1, radius OP is perpendicular to tangent AB: OP ⊥ AB, so ∠OPA = 90°.",
      "Step 3: In right △OPA, OA = 13 cm and OP = 5 cm. By Pythagoras Theorem:\n$$AP = \\sqrt{OA^2 - OP^2} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12 \\text{ cm}$$",
      "Step 4: Perpendicular from centre to chord bisects the chord: P bisects AB.",
      "Step 5: Full chord length $AB = 2 \\times AP = 2 \\times 12 \\text{ cm} = 24 \\text{ cm}$."
    ],
    "explanation": "Reason: Half chord $AP = \\sqrt{13^2 - 5^2} = 12$ cm. Chord $AB = 2 \\times 12 = 24$ cm.",
    "formula": "AB = 2\\sqrt{R^2 - r^2} = 2\\sqrt{169 - 25} = 24 \\text{ cm}",
    "examinerNote": "Standard concentric circles problem with triplet (5, 12, 13).",
    "source": "CBSE Board PYQ 2021"
  },
  {
    "id": "vq_10_board_25",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "Two concentric circles have radii 17 cm and 8 cm. Find the length of the chord of the larger circle that touches the smaller circle.",
    "answer": "30 cm",
    "steps": [
      "Step 1: Let O be the common centre. Chord AB of circle of radius R = 17 cm touches inner circle of radius r = 8 cm at P.",
      "Step 2: By Theorem 10.1, OP ⊥ AB, creating right triangle △OPA with hypotenuse OA = 17 cm.",
      "Step 3: By Pythagoras Theorem in △OPA:\n$$AP = \\sqrt{OA^2 - OP^2} = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15 \\text{ cm}$$",
      "Step 4: The perpendicular from centre bisects chord AB, so $AB = 2 \\times AP = 2 \\times 15 = 30 \\text{ cm}$."
    ],
    "explanation": "Reason: Triplet (8, 15, 17) gives half chord $AP = 15$ cm. Full chord $AB = 2 \\times 15 = 30$ cm.",
    "formula": "AB = 2\\sqrt{R^2 - r^2} = 2(15) = 30 \\text{ cm}",
    "examinerNote": "Recognize Pythagorean triplet (8, 15, 17).",
    "source": "CBSE Board PYQ 2020"
  },
  {
    "id": "vq_10_board_26",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "A circle touches all the four sides of a quadrilateral ABCD. If AB = 6 cm, BC = 7 cm, and CD = 4 cm, find the length of AD.",
    "answer": "3 cm",
    "steps": [
      "Step 1: Given: Quadrilateral ABCD circumscribes a circle, touching all four sides.",
      "Step 2: Recall the circumscribed quadrilateral theorem: The sum of opposite sides is equal:\n$$AB + CD = AD + BC$$",
      "Step 3: Substitute known side lengths: AB = 6 cm, BC = 7 cm, CD = 4 cm:\n$$6 + 4 = AD + 7$$",
      "Step 4: Simplify:\n$$10 = AD + 7 \\implies AD = 10 - 7 = 3 \\text{ cm}$$"
    ],
    "explanation": "Reason: By circumscription property, $AB + CD = AD + BC \\implies 6 + 4 = AD + 7 \\implies AD = 10 - 7 = 3$ cm.",
    "formula": "AD = (AB + CD) - BC = (6 + 4) - 7 = 3 \\text{ cm}",
    "examinerNote": "Direct 1-step substitution into AB + CD = AD + BC.",
    "source": "CBSE Board PYQ 2024"
  },
  {
    "id": "vq_10_board_27",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "A circle touches all four sides of a quadrilateral ABCD. If AB = 9 cm, BC = 8 cm, and CD = 7 cm, find the length of side AD.",
    "answer": "8 cm",
    "steps": [
      "Step 1: Quadrilateral ABCD circumscribes a circle.",
      "Step 2: For any circumscribing quadrilateral, the sum of pairs of opposite sides is equal:\n$$AB + CD = AD + BC$$",
      "Step 3: Substitute AB = 9 cm, CD = 7 cm, BC = 8 cm:\n$$9 + 7 = AD + 8 \\implies 16 = AD + 8$$",
      "Step 4: Solve for AD:\n$$AD = 16 - 8 = 8 \\text{ cm}$$"
    ],
    "explanation": "Reason: Opposite sides sum: $AB + CD = AD + BC \\implies 9 + 7 = AD + 8 \\implies AD = 8$ cm.",
    "formula": "AD = AB + CD - BC = 9 + 7 - 8 = 8 \\text{ cm}",
    "examinerNote": "Ensure sides paired as opposites: (AB, CD) and (AD, BC).",
    "source": "CBSE Board PYQ 2023"
  },
  {
    "id": "vq_10_board_28",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "Tangents PA and PB are drawn from external point P to a circle with centre O such that ∠APB = 60°. If PA = 6 cm, find the length of the chord AB.",
    "answer": "6 cm",
    "steps": [
      "Step 1: Given: Tangents PA and PB from point P, with PA = 6 cm and ∠APB = 60°.",
      "Step 2: By Theorem 10.2, tangents from an external point are equal: PB = PA = 6 cm.",
      "Step 3: In △PAB, since PA = PB, △PAB is an isosceles triangle with ∠PAB = ∠PBA.",
      "Step 4: By angle sum property in △PAB:\n$$\\angle APB + \\angle PAB + \\angle PBA = 180^\\circ \\implies 60^\\circ + 2\\angle PAB = 180^\\circ$$\n$$2\\angle PAB = 120^\\circ \\implies \\angle PAB = 60^\\circ$$",
      "Step 5: Since all three angles are 60° (∠APB = ∠PAB = ∠PBA = 60°), △PAB is an EQUILATERAL triangle.",
      "Step 6: In an equilateral triangle, all three sides are equal:\n$$AB = PA = PB = 6 \\text{ cm}$$"
    ],
    "explanation": "Reason: Since $PA = PB$ and angle between them is 60°, the other two angles are $(180^\\circ - 60^\\circ)/2 = 60^\\circ$. Thus $\\triangle PAB$ is equilateral, making chord $AB = PA = 6$ cm.",
    "formula": "\\angle APB = 60^\\circ \\text{ and } PA = PB \\implies \\triangle PAB \\text{ is equilateral } \\implies AB = PA",
    "examinerNote": "Very frequent 3-mark question: Whenever tangents are inclined at 60°, chord AB equals tangent length.",
    "source": "CBSE Board PYQ 2022"
  },
  {
    "id": "vq_10_board_29",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "Tangents PA and PB are drawn from external point P to a circle with centre O. If ∠APB = 70°, find the measure of ∠AOB.",
    "answer": "110°",
    "steps": [
      "Step 1: Tangents PA and PB touch the circle at A and B. Radii OA and OB are drawn.",
      "Step 2: By Theorem 10.1, OA ⊥ PA (∠OAP = 90°) and OB ⊥ PB (∠OBP = 90°).",
      "Step 3: In quadrilateral OAPB, the sum of interior angles is 360°.",
      "Step 4: ∠APB and ∠AOB are supplementary:\n$$\\angle AOB = 180^\\circ - \\angle APB$$",
      "Step 5: Substitute ∠APB = 70°:\n$$\\angle AOB = 180^\\circ - 70^\\circ = 110^\\circ$$"
    ],
    "explanation": "Reason: Tangent angle and central angle are supplementary in quadrilateral OAPB: $\\angle AOB = 180^\\circ - 70^\\circ = 110^\\circ$.",
    "formula": "\\angle AOB = 180^\\circ - \\angle APB = 110^\\circ",
    "examinerNote": "Supplementary relationship saves time in 2-mark questions.",
    "source": "CBSE Board PYQ 2021"
  },
  {
    "id": "vq_10_board_30",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "Tangents PA and PB are drawn to a circle with centre O such that the central angle ∠AOB = 130°. Find the angle between the two tangents ∠APB.",
    "answer": "50°",
    "steps": [
      "Step 1: Given: Central angle ∠AOB = 130° subtended by points of contact A and B.",
      "Step 2: By Theorem 10.1, radii OA ⊥ PA and OB ⊥ PB, making ∠OAP = ∠OBP = 90°.",
      "Step 3: Quadrilateral OAPB is cyclic because opposite angles sum to 180°:\n$$\\angle APB + \\angle AOB = 180^\\circ$$",
      "Step 4: Substitute ∠AOB = 130°:\n$$\\angle APB = 180^\\circ - 130^\\circ = 50^\\circ$$"
    ],
    "explanation": "Reason: $\\angle APB = 180^\\circ - \\angle AOB = 180^\\circ - 130^\\circ = 50^\\circ$.",
    "formula": "\\angle APB = 180^\\circ - \\angle AOB = 50^\\circ",
    "examinerNote": "Direct supplementary subtraction.",
    "source": "CBSE Board PYQ 2020"
  },
  {
    "id": "vq_10_board_31",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "If tangents PA and PB from a point P to a circle with centre O are inclined to each other at an angle of 80°, find the measure of ∠OAB.",
    "answer": "40°",
    "steps": [
      "Step 1: Given: ∠APB = 80°. PA and PB are tangents from P touching at A and B.",
      "Step 2: By Theorem 10.2, PA = PB, so △PAB is isosceles with ∠PAB = ∠PBA.",
      "Step 3: Base angle in △PAB:\n$$\\angle PAB = \\frac{180^\\circ - \\angle APB}{2} = \\frac{180^\\circ - 80^\\circ}{2} = \\frac{100^\\circ}{2} = 50^\\circ$$",
      "Step 4: By Theorem 10.1, OA ⊥ PA, so ∠OAP = 90°.",
      "Step 5: Calculate ∠OAB:\n$$\\angle OAB = \\angle OAP - \\angle PAB = 90^\\circ - 50^\\circ = 40^\\circ$$\n(Notice $\\angle OAB = \\frac{1}{2}\\angle APB = \\frac{80^\\circ}{2} = 40^\\circ$)."
    ],
    "explanation": "Reason: In isosceles △PAB, $\\angle PAB = (180^\\circ - 80^\\circ)/2 = 50^\\circ$. Since $\\angle OAP = 90^\\circ$, $\\angle OAB = 90^\\circ - 50^\\circ = 40^\\circ$.",
    "formula": "\\angle OAB = \\frac{1}{2} \\angle APB = 40^\\circ",
    "examinerNote": "Remember: ∠OAB = ½∠APB.",
    "source": "CBSE Board PYQ 2023"
  },
  {
    "id": "vq_10_board_32",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "Two tangents PA and PB are drawn to a circle with centre O from external point P. If ∠PAB = 65°, find the angle ∠APB between the two tangents.",
    "answer": "50°",
    "steps": [
      "Step 1: Given: Tangents PA and PB with ∠PAB = 65°.",
      "Step 2: By Theorem 10.2, PA = PB, so △PAB is an isosceles triangle with equal base angles: ∠PBA = ∠PAB = 65°.",
      "Step 3: In △PAB, applying the angle sum property of a triangle:\n$$\\angle APB + \\angle PAB + \\angle PBA = 180^\\circ$$",
      "Step 4: Substitute base angles:\n$$\\angle APB + 65^\\circ + 65^\\circ = 180^\\circ \\implies \\angle APB + 130^\\circ = 180^\\circ$$",
      "Step 5: Solve for ∠APB:\n$$\\angle APB = 180^\\circ - 130^\\circ = 50^\\circ$$"
    ],
    "explanation": "Reason: In isosceles △PAB, both base angles are 65°. Thus vertex angle $\\angle APB = 180^\\circ - 2(65^\\circ) = 180^\\circ - 130^\\circ = 50^\\circ$.",
    "formula": "\\angle APB = 180^\\circ - 2\\angle PAB = 50^\\circ",
    "examinerNote": "Apply isosceles property of tangents directly.",
    "source": "CBSE Board PYQ 2022"
  },
  {
    "id": "vq_10_board_33",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "In a right triangle ABC, right-angled at B, AB = 6 cm and BC = 8 cm. Find the radius of the circle inscribed in △ABC.",
    "answer": "2 cm",
    "steps": [
      "Step 1: Given: Right triangle △ABC with ∠B = 90°, AB = 6 cm, BC = 8 cm.",
      "Step 2: Find hypotenuse AC using Pythagoras Theorem:\n$$AC = \\sqrt{AB^2 + BC^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 \\text{ cm}$$",
      "Step 3: The incircle touches AB, BC, AC at P, Q, R respectively. Corner quadrilateral OPBQ is a square of side r, so BP = BQ = r.",
      "Step 4: Tangent segments from A: $AP = AR = 6 - r$. Tangent segments from C: $CQ = CR = 8 - r$.",
      "Step 5: Hypotenuse $AC = AR + CR = (6 - r) + (8 - r) = 14 - 2r$.",
      "Step 6: Equate to AC = 10 cm:\n$$14 - 2r = 10 \\implies 2r = 4 \\implies r = 2 \\text{ cm}$$"
    ],
    "explanation": "Reason: In right triangle, $r = (AB + BC - AC)/2$. Here $AC = \\sqrt{6^2 + 8^2} = 10$ cm. Thus $r = (6 + 8 - 10)/2 = 4/2 = 2$ cm.",
    "formula": "r = \\frac{AB + BC - AC}{2} = \\frac{6 + 8 - 10}{2} = 2 \\text{ cm}",
    "examinerNote": "Standard board 3-mark problem: Show calculation of hypotenuse first.",
    "source": "CBSE Board PYQ 2024"
  },
  {
    "id": "vq_10_board_34",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "In a right triangle ABC, right-angled at B, AB = 5 cm and BC = 12 cm. Find the radius of the circle inscribed in △ABC.",
    "answer": "2 cm",
    "steps": [
      "Step 1: Given: Right △ABC with ∠B = 90°, AB = 5 cm, BC = 12 cm.",
      "Step 2: Compute hypotenuse AC by Pythagoras Theorem:\n$$AC = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\text{ cm}$$",
      "Step 3: For an incircle of a right-angled triangle with legs a, c and hypotenuse b, radius is:\n$$r = \\frac{a + c - b}{2}$$",
      "Step 4: Substitute a = 12 cm, c = 5 cm, b = 13 cm:\n$$r = \\frac{12 + 5 - 13}{2} = \\frac{17 - 13}{2} = \\frac{4}{2} = 2 \\text{ cm}$$"
    ],
    "explanation": "Reason: $AC = 13$ cm. Inradius $r = (5 + 12 - 13)/2 = 4/2 = 2$ cm.",
    "formula": "r = \\frac{AB + BC - AC}{2} = 2 \\text{ cm}",
    "examinerNote": "Verify with triplet (5, 12, 13).",
    "source": "CBSE Board PYQ 2023"
  },
  {
    "id": "vq_10_board_35",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "In a right triangle ABC, right-angled at B, AB = 8 cm and BC = 15 cm. Find the radius of the inscribed circle.",
    "answer": "3 cm",
    "steps": [
      "Step 1: Given: Right △ABC with ∠B = 90°, AB = 8 cm, BC = 15 cm.",
      "Step 2: Calculate hypotenuse AC:\n$$AC = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17 \\text{ cm}$$",
      "Step 3: Apply the right-triangle inradius formula:\n$$r = \\frac{AB + BC - AC}{2}$$",
      "Step 4: Substitute values:\n$$r = \\frac{8 + 15 - 17}{2} = \\frac{23 - 17}{2} = \\frac{6}{2} = 3 \\text{ cm}$$"
    ],
    "explanation": "Reason: $AC = \\sqrt{8^2 + 15^2} = 17$ cm. $r = (8 + 15 - 17)/2 = 6/2 = 3$ cm.",
    "formula": "r = \\frac{AB + BC - AC}{2} = 3 \\text{ cm}",
    "examinerNote": "Triplet (8, 15, 17) gives inradius 3 cm.",
    "source": "CBSE Board PYQ 2022"
  },
  {
    "id": "vq_10_board_36",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "From an external point P, tangents PA and PB of length 10 cm each are drawn to a circle. A third tangent at point R on the minor arc AB intersects PA at X and PB at Y. Find the perimeter of △PXY.",
    "answer": "20 cm",
    "steps": [
      "Step 1: Given: External tangents PA = PB = 10 cm. Tangent at R touches circle and intersects PA at X and PB at Y.",
      "Step 2: By Theorem 10.2, tangents drawn from external point X are equal: XA = XR.",
      "Step 3: By Theorem 10.2, tangents drawn from external point Y are equal: YB = YR.",
      "Step 4: The side XY is divided at R: XY = XR + YR = XA + YB.",
      "Step 5: Write the expression for the perimeter of △PXY:\n$$\\text{Perimeter} = PX + XY + PY = PX + (XR + YR) + PY$$\n$$= (PX + XA) + (PY + YB)$$",
      "Step 6: Since PX + XA = PA and PY + YB = PB:\n$$\\text{Perimeter} = PA + PB = 10 \\text{ cm} + 10 \\text{ cm} = 20 \\text{ cm}$$"
    ],
    "explanation": "Reason: Perimeter of $\\triangle PXY = PX + XY + PY = (PX + XR) + (PY + YR) = (PX + XA) + (PY + YB) = PA + PB = 2 \\times PA = 2 \\times 10 = 20$ cm.",
    "formula": "\\text{Perimeter}(\\triangle PXY) = 2 \\times PA = 20 \\text{ cm}",
    "examinerNote": "Classic board theorem: Perimeter of △PXY is always twice the tangent length PA.",
    "source": "CBSE Board PYQ 2023"
  },
  {
    "id": "vq_10_board_37",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "From an external point P, tangents PA and PB of length 14 cm are drawn to a circle. A tangent at point E on the circle intersects PA at C and PB at D. Find the perimeter of △PCD.",
    "answer": "28 cm",
    "steps": [
      "Step 1: Given: Tangents PA = PB = 14 cm. Tangent at E meets PA at C and PB at D.",
      "Step 2: By Theorem 10.2, tangents from C: CA = CE; tangents from D: DB = DE.",
      "Step 3: Side CD = CE + ED = CA + DB.",
      "Step 4: Perimeter of △PCD = PC + CD + PD = PC + (CA + DB) + PD.",
      "Step 5: Grouping terms: Perimeter = (PC + CA) + (PD + DB) = PA + PB.",
      "Step 6: Perimeter = 14 cm + 14 cm = 28 cm."
    ],
    "explanation": "Reason: $\\text{Perimeter}(\\triangle PCD) = PA + PB = 14 + 14 = 28$ cm.",
    "formula": "\\text{Perimeter} = 2 \\times PA = 28 \\text{ cm}",
    "examinerNote": "Direct application of perimeter equals 2 × tangent length.",
    "source": "CBSE Board PYQ 2021"
  },
  {
    "id": "vq_10_board_38",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "In an isosceles triangle ABC with AB = AC, a circle inscribed in the triangle touches the base BC at D, CA at E, and AB at F. Prove that D bisects the base BC (i.e., BD = DC).",
    "answer": "Hence Proved (BD = DC)",
    "steps": [
      "Step 1: Given: Isosceles triangle ABC with AB = AC. Inscribed circle touches BC at D, AC at E, and AB at F.",
      "Step 2: To Prove: BD = DC (point D bisects the base BC).",
      "Step 3: By Theorem 10.2, lengths of tangents from an external point to a circle are equal:\n- Tangents from A: AF = AE ... (1)\n- Tangents from B: BF = BD ... (2)\n- Tangents from C: CE = CD ... (3)",
      "Step 4: We are given that AB = AC:\n$$AF + BF = AE + CE$$",
      "Step 5: From equation (1), AF = AE, so subtracting AF from both sides:\n$$BF = CE$$",
      "Step 6: Using equations (2) and (3), substitute BD for BF and CD for CE:\n$$BD = CD$$\nTherefore, point D bisects base BC.\n[Hence Proved]"
    ],
    "explanation": "Reason: $AB = AC \\implies AF + BF = AE + CE$. Since $AF = AE$ (tangents from A), $BF = CE$. Since $BF = BD$ and $CE = CD$ (tangents from B and C), $BD = CD$.",
    "formula": "AB = AC \\implies BD = CD",
    "examinerNote": "Neat, clean 5-step proof. Always state Theorem 10.2 as justification.",
    "source": "CBSE Board PYQ 2020"
  },
  {
    "id": "vq_10_board_39",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "PA and PB are tangents drawn to a circle of radius r from an external point P such that the distance OP = 2r. Prove that ∠APB = 60° and △PAB is an equilateral triangle.",
    "answer": "Hence Proved (∠APB = 60° and △PAB is equilateral)",
    "steps": [
      "Step 1: Given: Tangents PA and PB to circle of radius OA = r with distance OP = 2r.",
      "Step 2: By Theorem 10.1, OA ⊥ PA, so △OAP is a right-angled triangle with hypotenuse OP = 2r.",
      "Step 3: In right triangle △OAP, find $\\sin(\\angle APO)$:\n$$\\sin(\\angle APO) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{OA}{OP} = \\frac{r}{2r} = \\frac{1}{2}$$",
      "Step 4: Since $\\sin 30^\\circ = 1/2$, we have $\\angle APO = 30^\\circ$.",
      "Step 5: Line OP bisects ∠APB (Theorem 10.2), so:\n$$\\angle APB = 2 \\times \\angle APO = 2 \\times 30^\\circ = 60^\\circ$$",
      "Step 6: In △PAB, PA = PB (Theorem 10.2), so △PAB is isosceles with $\\angle PAB = \\angle PBA = (180^\\circ - 60^\\circ)/2 = 60^\\circ$.",
      "Step 7: All three angles are 60°, so △PAB is an equilateral triangle.\n[Hence Proved]"
    ],
    "explanation": "Reason: $\\sin(\\angle APO) = r/(2r) = 1/2 \\implies \\angle APO = 30^\\circ \\implies \\angle APB = 60^\\circ$. Since $PA = PB$, $\\triangle PAB$ is an equilateral triangle.",
    "formula": "\\sin(\\angle APO) = \\frac{r}{2r} = \\frac{1}{2} \\implies \\angle APB = 60^\\circ \\implies \\text{Equilateral}",
    "examinerNote": "Exemplar problem: Connects circles with trigonometry beautifully.",
    "source": "NCERT Exemplar / CBSE Board 2023"
  },
  {
    "id": "vq_10_board_40",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "If a tangent AB at a point P of a circle is parallel to a chord CD, prove that the point P bisects the minor arc CPD.",
    "answer": "Hence Proved (arc CP = arc PD)",
    "steps": [
      "Step 1: Given: Tangent AB at point P is parallel to chord CD.",
      "Step 2: To Prove: Point P bisects minor arc CPD, i.e., arc CP = arc PD (or chord CP = chord PD).",
      "Step 3: Proof: Line AB ∥ CD and transversal CP intersects them:\n$$\\angle BPD = \\angle PDC \\quad \\text{--- (Alternate interior angles)}$$",
      "Step 4: By the alternate segment theorem (or angle subtended by tangent and chord):\n$$\\angle BPD = \\angle PCD$$",
      "Step 5: From steps 3 and 4, we have:\n$$\\angle PDC = \\angle PCD$$",
      "Step 6: In △PCD, since two angles are equal, the opposite sides are equal:\n$$CP = PD$$",
      "Step 7: In a circle, equal chords subtend equal arcs:\n$$\\text{arc } CP = \\text{arc } PD$$\nHence, point P bisects arc CPD.\n[Hence Proved]"
    ],
    "explanation": "Reason: Parallel lines give alternate angles $\\angle BPD = \\angle PDC$. By alternate segment theorem, $\\angle BPD = \\angle PCD$. Thus $\\angle PDC = \\angle PCD \\implies CP = PD \\implies \\text{arc } CP = \\text{arc } PD$.",
    "formula": "\\text{Tangent } \\parallel \\text{ Chord} \\implies \\text{Point of contact bisects intercepted arc}",
    "examinerNote": "Equal chords subtend equal arcs in the same circle.",
    "source": "CBSE Board PYQ 2022"
  },
  {
    "id": "vq_10_board_41",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 5,
    "type": "LA",
    "question": "Prove that opposite sides of a quadrilateral circumscribing a circle subtend supplementary angles at the centre of the circle.",
    "answer": "Hence Proved (∠AOB + ∠COD = 180° and ∠BOC + ∠AOD = 180°)",
    "steps": [
      "Step 1: Given: Quadrilateral ABCD circumscribes a circle with centre O, touching sides AB, BC, CD, DA at points P, Q, R, S respectively.",
      "Step 2: To Prove: (i) ∠AOB + ∠COD = 180°, and (ii) ∠BOC + ∠AOD = 180°.",
      "Step 3: Construction: Join the centre O to the four vertices A, B, C, D and to the four points of contact P, Q, R, S.",
      "Step 4: In △OAP and △OAS:\n- $AP = AS$ (Theorem 10.2: Tangents from A)\n- $OA = OA$ (Common side)\n- $OP = OS = r$ (Radii of circle)\nBy SSS Congruence: $\\triangle OAP \\cong \\triangle OAS$. By CPCT: $\\angle 1 = \\angle 8$.",
      "Step 5: Similarly, by congruence of remaining pairs:\n$$\\angle 2 = \\angle 3, \\quad \\angle 4 = \\angle 5, \\quad \\angle 6 = \\angle 7$$",
      "Step 6: The sum of all angles around the point O is 360°:\n$$\\angle 1 + \\angle 2 + \\angle 3 + \\angle 4 + \\angle 5 + \\angle 6 + \\angle 7 + \\angle 8 = 360^\\circ$$",
      "Step 7: Substitute $\\angle 8 = \\angle 1, \\angle 3 = \\angle 2, \\angle 4 = \\angle 5, \\angle 7 = \\angle 6$:\n$$2(\\angle 1 + \\angle 2 + \\angle 5 + \\angle 6) = 360^\\circ \\implies (\\angle 1 + \\angle 2) + (\\angle 5 + \\angle 6) = 180^\\circ$$",
      "Step 8: Since $\\angle 1 + \\angle 2 = \\angle AOB$ and $\\angle 5 + \\angle 6 = \\angle COD$:\n$$\\angle AOB + \\angle COD = 180^\\circ$$",
      "Step 9: Similarly, subtracting from 360°:\n$$\\angle BOC + \\angle AOD = 180^\\circ$$\n[Hence Proved]"
    ],
    "explanation": "Reason: Tangents from vertices create four congruent pairs of triangles meeting at center O. Thus $2(\\angle AOB + \\angle COD) = 360^\\circ \\implies \\angle AOB + \\angle COD = 180^\\circ$.",
    "formula": "\\angle AOB + \\angle COD = 180^\\circ \\quad \\text{and} \\quad \\angle BOC + \\angle AOD = 180^\\circ",
    "examinerNote": "NCERT Ex 10.2 Q13: Appears as a 5-mark proof in board examinations.",
    "source": "NCERT Ex 10.2 Q13 / CBSE Board 2024"
  },
  {
    "id": "vq_10_board_42",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "Two concentric circles are of radii 5 cm and 3 cm. Find the length of the chord of the larger circle which touches the smaller circle.",
    "answer": "8 cm",
    "steps": [
      "Step 1: Let O be the common centre of the two concentric circles. Let AB be a chord of the larger circle touching the smaller circle at point P.",
      "Step 2: By Theorem 10.1, the radius OP is perpendicular to the tangent AB at point P: OP ⊥ AB.",
      "Step 3: In right-angled triangle △OPA, by Pythagoras Theorem:\n$$OA^2 = OP^2 + AP^2$$",
      "Step 4: Substitute OA = 5 cm (larger radius) and OP = 3 cm (smaller radius):\n$$5^2 = 3^2 + AP^2 \\implies 25 = 9 + AP^2 \\implies AP^2 = 16 \\implies AP = 4 \\text{ cm}$$",
      "Step 5: The perpendicular from the centre to a chord bisects the chord: AB = 2 × AP = 2 × 4 cm = 8 cm. Hence the length of the chord is 8 cm."
    ],
    "explanation": "Reason: $AP = \\sqrt{5^2 - 3^2} = 4$ cm. Perpendicular from centre bisects chord, so $AB = 2 \\times 4 = 8$ cm.",
    "formula": "AB = 2\\sqrt{R^2 - r^2} = 2\\sqrt{25 - 9} = 8 \\text{ cm}",
    "examinerNote": "Double AP to obtain full chord length.",
    "source": "CBSE Board PYQ 2024"
  },
  {
    "id": "vq_10_board_43",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "Prove that the tangents drawn at the ends of a diameter of a circle are parallel.",
    "answer": "Hence Proved (l ∥ m)",
    "steps": [
      "Step 1: Let AB be a diameter of a circle with centre O. Let lines l and m be tangents at ends A and B respectively.",
      "Step 2: By Theorem 10.1, the radius through the point of contact is perpendicular to the tangent line:\n$$OA \\perp l \\implies \\angle 1 = 90^\\circ$$\n$$OB \\perp m \\implies \\angle 2 = 90^\\circ$$",
      "Step 3: Since AOB is a straight line segment (diameter), line AB acts as a transversal intersecting lines l and m.",
      "Step 4: Angles ∠1 and ∠2 form alternate interior angles made by transversal AB with lines l and m.",
      "Step 5: Since alternate interior angles are equal (both equal 90°), line l ∥ line m. Hence the tangents at the ends of a diameter are parallel.\n[Hence Proved]"
    ],
    "explanation": "Reason: $OA \\perp l$ and $OB \\perp m$ yield alternate interior angles of 90° with diameter transversal AB. Since alternate angles are equal, the tangents are parallel.",
    "formula": "\\angle 1 = \\angle 2 = 90^\\circ \\implies l \\parallel m",
    "examinerNote": "NCERT Ex 10.2 Q4: Can also be justified using consecutive interior angles: 90° + 90° = 180°.",
    "source": "NCERT Ex 10.2 Q4 / CBSE Board 2023"
  },
  {
    "id": "vq_10_board_44",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "If tangents PA and PB from a point P to a circle with centre O are inclined to each other at an angle of 80°, find ∠POA.",
    "answer": "50°",
    "steps": [
      "Step 1: In quadrilateral OAPB, OA ⊥ PA and OB ⊥ PB by Theorem 10.1 (∠OAP = ∠OBP = 90°).",
      "Step 2: Angle between tangents is ∠APB = 80°. The central angle ∠AOB is supplementary:\n$$\\angle AOB = 180^\\circ - \\angle APB = 180^\\circ - 80^\\circ = 100^\\circ$$",
      "Step 3: By RHS congruence (△OAP ≅ △OBP), line OP bisects the central angle ∠AOB:\n$$\\angle POA = \\frac{1}{2} \\angle AOB$$",
      "Step 4: Calculate:\n$$\\angle POA = \\frac{100^\\circ}{2} = 50^\\circ$$"
    ],
    "explanation": "Reason: Central angle $\\angle AOB = 180^\\circ - 80^\\circ = 100^\\circ$. Since line OP bisects $\\angle AOB$, $\\angle POA = 100^\\circ / 2 = 50^\\circ$.",
    "formula": "\\angle POA = \\frac{180^\\circ - \\angle APB}{2} = 50^\\circ",
    "examinerNote": "NCERT Ex 10.2 Q3: Halve the supplementary angle.",
    "source": "NCERT Ex 10.2 Q3 / CBSE Board 2024"
  },
  {
    "id": "vq_10_board_45",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 5,
    "type": "LA",
    "question": "A triangle ABC is drawn to circumscribe a circle of radius 4 cm such that the segments BD and DC into which BC is divided by the point of contact D are of lengths 8 cm and 6 cm respectively. Find the lengths of sides AB and AC.",
    "answer": "AB = 15 cm, AC = 13 cm",
    "steps": [
      "Step 1: Let the inscribed circle with centre O and radius r = 4 cm touch sides BC, CA, AB at points D, E, F respectively.",
      "Step 2: By Theorem 10.2, lengths of tangents from external points are equal:\n$$CD = CE = 6 \\text{ cm}, \\quad BD = BF = 8 \\text{ cm}$$\nLet $AF = AE = x \\text{ cm}$.",
      "Step 3: The three sides of △ABC are:\n$$a = BC = 6 + 8 = 14 \\text{ cm}$$\n$$b = AC = 6 + x \\text{ cm}$$\n$$c = AB = 8 + x \\text{ cm}$$",
      "Step 4: Compute semi-perimeter s:\n$$s = \\frac{a + b + c}{2} = \\frac{14 + (6 + x) + (8 + x)}{2} = \\frac{28 + 2x}{2} = 14 + x$$",
      "Step 5: Calculate Area of △ABC by splitting into three sub-triangles meeting at O:\n$$\\text{ar}(\\triangle ABC) = \\text{ar}(\\triangle OBC) + \\text{ar}(\\triangle OCA) + \\text{ar}(\\triangle OAB)$$\n$$= \\frac{1}{2} r \\cdot a + \\frac{1}{2} r \\cdot b + \\frac{1}{2} r \\cdot c = r \\cdot s = 4(14 + x)$$",
      "Step 6: Calculate Area of △ABC using Heron's Formula:\n$$s - a = (14 + x) - 14 = x$$\n$$s - b = (14 + x) - (6 + x) = 8$$\n$$s - c = (14 + x) - (8 + x) = 6$$\n$$\\text{ar}(\\triangle ABC) = \\sqrt{s(s-a)(s-b)(s-c)} = \\sqrt{(14 + x)(x)(8)(6)} = \\sqrt{48x(14 + x)}$$",
      "Step 7: Equate the two area expressions and square both sides:\n$$[4(14 + x)]^2 = 48x(14 + x)$$\n$$16(14 + x)^2 = 48x(14 + x)$$\nDivide both sides by $16(14 + x)$ (since $14 + x \\neq 0$):\n$$14 + x = 3x \\implies 2x = 14 \\implies x = 7 \\text{ cm}$$",
      "Step 8: Compute side lengths AB and AC:\n$$AB = c = 8 + x = 8 + 7 = 15 \\text{ cm}$$\n$$AC = b = 6 + x = 6 + 7 = 13 \\text{ cm}$$"
    ],
    "explanation": "Reason: Equating Area $r \\cdot s = 4(14+x)$ with Heron's area $\\sqrt{48x(14+x)}$ gives $16(14+x)^2 = 48x(14+x) \\implies 14+x = 3x \\implies x = 7$ cm. Thus $AB = 8 + 7 = 15$ cm and $AC = 6 + 7 = 13$ cm.",
    "formula": "\\text{ar}(\\triangle ABC) = r \\cdot s = \\sqrt{s(s-a)(s-b)(s-c)}",
    "examinerNote": "NCERT Ex 10.2 Q12: The benchmark 5-mark question of Chapter 10. Ensure both area methods are clearly stated.",
    "source": "NCERT Ex 10.2 Q12 / CBSE Board 2024"
  },
  {
    "id": "vq_10_board_46",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "From an external point P, two tangents PA and PB are drawn to a circle with centre O. Prove that ∠APB + ∠AOB = 180°.",
    "answer": "Hence Proved (∠APB + ∠AOB = 180°)",
    "steps": [
      "Step 1: Given: Circle with centre O and tangents PA, PB touching at A and B.",
      "Step 2: By Theorem 10.1, radius is perpendicular to tangent at point of contact:\n$$OA \\perp PA \\implies \\angle OAP = 90^\\circ$$\n$$OB \\perp PB \\implies \\angle OBP = 90^\\circ$$",
      "Step 3: Quadrilateral OAPB has sum of interior angles equal to 360°:\n$$\\angle APB + \\angle AOB + \\angle OAP + \\angle OBP = 360^\\circ$$",
      "Step 4: Substitute the two 90° angles:\n$$\\angle APB + \\angle AOB + 90^\\circ + 90^\\circ = 360^\\circ$$\n$$\\angle APB + \\angle AOB = 360^\\circ - 180^\\circ = 180^\\circ$$\n[Hence Proved]"
    ],
    "explanation": "Reason: In quadrilateral OAPB, $\\angle OAP = \\angle OBP = 90^\\circ$. Angle sum of quadrilateral is 360°, so $\\angle APB + \\angle AOB = 180^\\circ$.",
    "formula": "\\angle APB + \\angle AOB = 180^\\circ",
    "examinerNote": "Proves that quadrilateral OAPB is cyclic.",
    "source": "CBSE Board PYQ 2023"
  },
  {
    "id": "vq_10_board_47",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "A circle touches all the four sides of a quadrilateral ABCD with AB = 6 cm, BC = 9 cm, and CD = 8 cm. Find the length of AD.",
    "answer": "5 cm",
    "steps": [
      "Step 1: Quadrilateral ABCD circumscribes a circle.",
      "Step 2: Opposite sides sum identity: AB + CD = AD + BC.",
      "Step 3: Substitute given lengths: 6 + 8 = AD + 9.",
      "Step 4: Solve: 14 = AD + 9 ⟹ AD = 14 - 9 = 5 cm."
    ],
    "explanation": "Reason: $AB + CD = AD + BC \\implies 6 + 8 = AD + 9 \\implies AD = 5$ cm.",
    "formula": "AD = AB + CD - BC = 5 \\text{ cm}",
    "examinerNote": "Direct circumscription formula application.",
    "source": "CBSE Board PYQ 2022"
  },
  {
    "id": "vq_10_board_48",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "In two concentric circles, prove that a chord of the larger circle which touches the smaller circle is bisected at the point of contact.",
    "answer": "Hence Proved (AP = PB)",
    "steps": [
      "Step 1: Let O be the common centre of concentric circles C₁ and C₂. Chord AB of C₁ touches C₂ at P.",
      "Step 2: AB is a tangent to C₂ at point of contact P. By Theorem 10.1: OP ⊥ AB.",
      "Step 3: In larger circle C₁, AB is a chord and OP is a perpendicular from centre O to AB.",
      "Step 4: Standard circle theorem: Perpendicular from centre to chord bisects the chord.",
      "Step 5: Hence, P bisects chord AB, so AP = PB.\n[Hence Proved]"
    ],
    "explanation": "Reason: Tangent condition gives $OP \\perp AB$. Perpendicular from centre to chord bisects it, hence $AP = PB$.",
    "formula": "OP \\perp AB \\implies AP = PB",
    "examinerNote": "Standard NCERT 3-mark proof.",
    "source": "CBSE Board PYQ 2021"
  },
  {
    "id": "vq_10_board_49",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "In a right triangle ABC, right-angled at B, BC = 6 cm and AB = 8 cm. A circle with centre O and radius r is inscribed in △ABC. Find r.",
    "answer": "2 cm",
    "steps": [
      "Step 1: In right △ABC, calculate hypotenuse AC by Pythagoras Theorem:\n$$AC = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 \\text{ cm}$$",
      "Step 2: Quadrilateral at right-angled vertex B is a square of side r, so tangent segments from B are r.",
      "Step 3: Tangents from A: $8 - r$; Tangents from C: $6 - r$.",
      "Step 4: Hypotenuse $AC = (8 - r) + (6 - r) = 14 - 2r$.",
      "Step 5: Equate: $14 - 2r = 10 \\implies 2r = 4 \\implies r = 2 \\text{ cm}$."
    ],
    "explanation": "Reason: Inradius $r = (AB + BC - AC)/2 = (8 + 6 - 10)/2 = 4/2 = 2$ cm.",
    "formula": "r = \\frac{a + b - c}{2} = 2 \\text{ cm}",
    "examinerNote": "Standard inradius calculation.",
    "source": "CBSE Board PYQ 2024"
  },
  {
    "id": "vq_10_board_50",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 5,
    "type": "LA",
    "question": "Prove that opposite sides of a quadrilateral circumscribing a circle subtend supplementary angles at the centre of the circle.",
    "answer": "Hence Proved (∠AOB + ∠COD = 180°)",
    "steps": [
      "Step 1: Given: Quadrilateral ABCD circumscribes a circle with centre O, touching sides AB, BC, CD, DA at P, Q, R, S respectively.",
      "Step 2: Join vertices A, B, C, D and contact points P, Q, R, S to centre O.",
      "Step 3: In △OAP and △OAS: AP = AS (Theorem 10.2), OA = OA (common), OP = OS = r. By SSS: △OAP ≅ △OAS, so ∠1 = ∠8.",
      "Step 4: Similarly: ∠2 = ∠3, ∠4 = ∠5, ∠6 = ∠7.",
      "Step 5: Sum of angles at point O is 360°:\n$$(\\angle 1 + \\angle 8) + (\\angle 2 + \\angle 3) + (\\angle 4 + \\angle 5) + (\\angle 6 + \\angle 7) = 360^\\circ$$\n$$2\\angle 1 + 2\\angle 2 + 2\\angle 5 + 2\\angle 6 = 360^\\circ \\implies (\\angle 1 + \\angle 2) + (\\angle 5 + \\angle 6) = 180^\\circ$$",
      "Step 6: Since ∠1 + ∠2 = ∠AOB and ∠5 + ∠6 = ∠COD:\n$$\\angle AOB + \\angle COD = 180^\\circ$$\n[Hence Proved]"
    ],
    "explanation": "Reason: SSS congruence on adjacent radial triangles gives equal angle pairs. Adding angles around centre yields $2(\\angle AOB + \\angle COD) = 360^\\circ \\implies \\angle AOB + \\angle COD = 180^\\circ$.",
    "formula": "\\angle AOB + \\angle COD = 180^\\circ",
    "examinerNote": "NCERT Ex 10.2 Q13: High-scoring 5-mark proof.",
    "source": "NCERT Ex 10.2 Q13 / CBSE Board 2023"
  },
  {
    "id": "vq_10_board_51",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 2,
    "type": "SA",
    "question": "If two tangents inclined at an angle of 60° are drawn to a circle of radius 3 cm, find the length of each tangent.",
    "answer": "3√3 cm",
    "steps": [
      "Step 1: Let tangents PA and PB be inclined at ∠APB = 60° to circle of radius r = OA = 3 cm.",
      "Step 2: Line OP bisects ∠APB: ∠APO = 60° / 2 = 30°.",
      "Step 3: By Theorem 10.1, OA ⊥ PA (∠OAP = 90°).",
      "Step 4: In right △OAP, $\\tan 30^\\circ = OA / PA = 3 / PA$.",
      "Step 5: $1/\\sqrt{3} = 3 / PA \\implies PA = 3\\sqrt{3} \\text{ cm}$. Length of each tangent is $3\\sqrt{3}$ cm."
    ],
    "explanation": "Reason: $PA = r / \\tan 30^\\circ = 3 / (1/\\sqrt{3}) = 3\\sqrt{3}$ cm.",
    "formula": "PA = \\frac{r}{\\tan(\\theta/2)} = 3\\sqrt{3} \\text{ cm}",
    "examinerNote": "State trigonometric ratio clearly.",
    "source": "CBSE Board PYQ 2022"
  },
  {
    "id": "vq_10_board_52",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "In the figure, XY and X'Y' are two parallel tangents to a circle with centre O and another tangent AB with point of contact C intersects XY at A and X'Y' at B. Prove that ∠AOB = 90°.",
    "answer": "Hence Proved (∠AOB = 90°)",
    "steps": [
      "Step 1: Given: Parallel tangents XY and X'Y' touching at P and Q (diameter PQ). Tangent AB touches circle at C and intersects XY at A and X'Y' at B.",
      "Step 2: To Prove: ∠AOB = 90°.",
      "Step 3: Join OC. In △OPA and △OCA:\n- $AP = AC$ (Theorem 10.2: Tangents from A)\n- $OA = OA$ (Common side)\n- $OP = OC = r$ (Radii)\nBy SSS: $\\triangle OPA \\cong \\triangle OCA \\implies \\angle POA = \\angle COA \\quad \\text{--- (1)}$",
      "Step 4: Similarly, in △OQB and △OCB:\n$$\\triangle OQB \\cong \\triangle OCB \\implies \\angle QOB = \\angle COB \\quad \\text{--- (2)}$$",
      "Step 5: Since POQ is a diameter, it is a straight line, so sum of angles is 180°:\n$$\\angle POA + \\angle COA + \\angle COB + \\angle QOB = 180^\\circ$$",
      "Step 6: Substitute equations (1) and (2):\n$$2\\angle COA + 2\\angle COB = 180^\\circ \\implies 2(\\angle COA + \\angle COB) = 180^\\circ$$\n$$\\angle COA + \\angle COB = 90^\\circ$$",
      "Step 7: Since ∠COA + ∠COB = ∠AOB:\n$$\\angle AOB = 90^\\circ$$\n[Hence Proved]"
    ],
    "explanation": "Reason: By SSS congruence, $OP$ and $OC$ form equal angle pair at A, and $OQ$ and $OC$ at B. Straight line POQ gives $2\\angle AOB = 180^\\circ \\implies \\angle AOB = 90^\\circ$.",
    "formula": "\\angle AOB = \\frac{1}{2}(180^\\circ) = 90^\\circ",
    "examinerNote": "NCERT Ex 10.2 Q9: High-frequency 3-mark question.",
    "source": "NCERT Ex 10.2 Q9 / CBSE Board 2024"
  },
  {
    "id": "vq_10_board_53",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "A circle is inscribed in a △ABC touching AB, BC, and CA at P, Q, and R respectively. Prove that AP + BQ + CR = (1/2) × (Perimeter of △ABC).",
    "answer": "Hence Proved (AP + BQ + CR = ½ Perimeter)",
    "steps": [
      "Step 1: Given: Inscribed circle touches AB, BC, CA at P, Q, R respectively.",
      "Step 2: By Theorem 10.2, lengths of tangents from external points are equal:\n$$AP = AR \\quad \\text{--- (1)}$$\n$$BP = BQ \\quad \\text{--- (2)}$$\n$$CQ = CR \\quad \\text{--- (3)}$$",
      "Step 3: Perimeter of △ABC = AB + BC + CA:\n$$\\text{Perimeter} = (AP + BP) + (BQ + CQ) + (CR + AR)$$",
      "Step 4: Substitute AR = AP, BP = BQ, CQ = CR:\n$$\\text{Perimeter} = (AP + BQ) + (BQ + CR) + (CR + AP) = 2(AP + BQ + CR)$$",
      "Step 5: Divide both sides by 2:\n$$AP + BQ + CR = \\frac{1}{2} (\\text{Perimeter of } \\triangle ABC)$$\n[Hence Proved]"
    ],
    "explanation": "Reason: Grouping equal tangent pairs yields $\\text{Perimeter} = 2(AP + BQ + CR) \\implies AP + BQ + CR = \\frac{1}{2}\\text{Perimeter}$.",
    "formula": "AP + BQ + CR = \\frac{1}{2}(AB + BC + CA)",
    "examinerNote": "Tangents from each vertex contribute exactly once to each half of the perimeter.",
    "source": "CBSE Board PYQ 2023"
  },
  {
    "id": "vq_10_board_54",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "Two tangents TP and TQ are drawn to a circle with centre O from an external point T. Prove that ∠PTQ = 2 ∠OPQ.",
    "answer": "Hence Proved (∠PTQ = 2 ∠OPQ)",
    "steps": [
      "Step 1: TP = TQ by Theorem 10.2, so △TPQ is an isosceles triangle with ∠TPQ = ∠TQP.",
      "Step 2: Let ∠PTQ = θ. In △TPQ: $\\angle TPQ = \\frac{180^\\circ - \\theta}{2} = 90^\\circ - \\frac{\\theta}{2}$.",
      "Step 3: By Theorem 10.1, radius OP ⊥ TP, so ∠OPT = 90°.",
      "Step 4: $\\angle OPQ = \\angle OPT - \\angle TPQ = 90^\\circ - (90^\\circ - \\theta/2) = \\theta/2$.",
      "Step 5: Hence, $\\angle PTQ = 2 \\angle OPQ$.\n[Hence Proved]"
    ],
    "explanation": "Reason: In isosceles △TPQ, $\\angle TPQ = 90^\\circ - \\theta/2$. Since $\\angle OPT = 90^\\circ$, $\\angle OPQ = 90^\\circ - (90^\\circ - \\theta/2) = \\theta/2 = \\frac{1}{2}\\angle PTQ$.",
    "formula": "\\angle PTQ = 2 \\angle OPQ",
    "examinerNote": "Standard NCERT 3-mark proof.",
    "source": "NCERT Ex 10.2 Q2 / CBSE Board 2024"
  },
  {
    "id": "vq_10_board_55",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 3,
    "type": "SA",
    "question": "XP and XQ are two tangents from an external point X to a circle with centre O. R is a point on the circle such that the tangent at R intersects XP at A and XQ at B. If XP = 16 cm, find the perimeter of △XAB.",
    "answer": "32 cm",
    "steps": [
      "Step 1: Tangents from external point X are equal: XP = XQ = 16 cm (Theorem 10.2).",
      "Step 2: Tangent at R touches between A and B. By Theorem 10.2: AP = AR and BQ = BR.",
      "Step 3: Perimeter of △XAB = XA + AB + XB = XA + (AR + RB) + XB.",
      "Step 4: Substitute AR = AP and RB = BQ:\n$$\\text{Perimeter} = (XA + AP) + (XB + BQ) = XP + XQ$$",
      "Step 5: Perimeter = 16 cm + 16 cm = 32 cm."
    ],
    "explanation": "Reason: Perimeter of $\\triangle XAB = XP + XQ = 16 + 16 = 32$ cm.",
    "formula": "\\text{Perimeter}(\\triangle XAB) = 2 \\times XP = 32 \\text{ cm}",
    "examinerNote": "Perimeter is twice the tangent length.",
    "source": "CBSE Board PYQ 2022"
  },
  {
    "id": "vq_10_4m_1",
    "chapter": 10,
    "chapterName": "Circles",
    "marks": 4,
    "type": "Case Study",
    "question": "Case Study: Circular Roundabout & Tangential Pedestrian Crossings\\n\\nA circular traffic roundabout of radius 6 m is surrounded by a quadrilateral park ABCD such that all four sides of the park touch the circular boundary at points P, Q, R, S:\\n(i) State Theorem 10.2 concerning the lengths of tangents drawn from an external point. [1 Mark]\\n(ii) Prove that AB + CD = AD + BC. [2 Marks]\\n(iii) If ABCD is a parallelogram circumscribing the roundabout, prove that it is a rhombus. [1 Mark]",
    "answer": "Part (i): Tangents from an external point are equal (PA = PB). Part (ii): AB + CD = AD + BC proved. Part (iii): Parallelogram with equal adjacent sides is a Rhombus.",
    "steps": [
      "Step 1: Part (i): Statement of Theorem 10.2: The lengths of tangents drawn from an external point to a circle are equal (i.e., if PA and PB are tangents from P, then PA = PB).",
      "Step 2: Part (ii): By Theorem 10.2, the tangent segments from vertices A, B, C, D are equal:\n$$AP = AS \\quad \\text{--- (1)}$$\n$$BP = BQ \\quad \\text{--- (2)}$$\n$$CR = CQ \\quad \\text{--- (3)}$$\n$$DR = DS \\quad \\text{--- (4)}$$",
      "Step 3: Add (1), (2), (3), and (4):\n$$(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ)$$\n$$\\implies AB + CD = AD + BC$$\n[Hence Proved Part ii]",
      "Step 4: Part (iii): If ABCD is a parallelogram, opposite sides are equal: AB = CD and AD = BC.",
      "Step 5: Substitute into Part (ii) result: $AB + AB = AD + AD \\implies 2AB = 2AD \\implies AB = AD$.",
      "Step 6: Since adjacent sides are equal in a parallelogram, all four sides are equal (AB = BC = CD = DA). Hence, ABCD is a rhombus.\n[Hence Proved Part iii]"
    ],
    "explanation": "Reason: Part (i) states Theorem 10.2. Part (ii) adds equal tangent segments from each vertex to yield $AB + CD = AD + BC$. Part (iii) applies parallelogram properties $AB = CD$ and $AD = BC$ to deduce $2AB = 2AD \\implies AB = AD$, proving the park is a rhombus.",
    "formula": "AB + CD = AD + BC \\implies 2AB = 2AD \\implies \\text{Rhombus}",
    "examinerNote": "CBSE Case Study Marking: 1 mark for statement, 2 marks for quad proof, 1 mark for rhombus deduction.",
    "source": "CBSE Sample Paper 2024 / Competency Case Study"
  }
];
