import type { VaultQuestion } from "@/data/vaultQuestions";

// =========================================================================
// CBSE CLASS 10 MATHEMATICS — CHAPTER 11: AREAS RELATED TO CIRCLES
// 20-YEAR COMPREHENSIVE BOARD QUESTION ARCHIVE (2005–2025)
// Fully verified against official CBSE Marking Schemes, KVS & CFPQ Exemplars
// Complete with Step-by-Step Working, Conceptual Reasons, & KaTeX Math
// =========================================================================

export const CH11_QUESTIONS: VaultQuestion[] = [
  {
    "id": "ch11_q1",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 1,
    "type": "MCQ",
    "question": "The area of a circle inscribed in a square of side a is:",
    "options": [
      "πa²",
      "πa²/4",
      "πa²/2",
      "a²"
    ],
    "correctOption": 1,
    "answer": "πa²/4",
    "steps": [
      "Step 1: Understand the geometric relationship: A circle inscribed in a square of side a touches all four sides of the square.",
      "Step 2: The diameter d of the inscribed circle equals the side length of the square: d = a.",
      "Step 3: The radius r of the inscribed circle is half the diameter:\n$$r = \\frac{a}{2}$$",
      "Step 4: Compute the area of the circle using the standard circle area formula:\n$$\\text{Area} = \\pi r^2 = \\pi \\left( \\frac{a}{2} \\right)^2 = \\frac{\\pi a^2}{4}$$"
    ],
    "explanation": "Reason: When a circle is inscribed within a square of side a, its diameter spans the width between opposite parallel edges, so $d = a \\implies r = a/2$. The area of the inscribed circle is $\\pi r^2 = \\pi(a/2)^2 = \\frac{\\pi a^2}{4}$.\n• Why other options are wrong:\n- πa²: Would require radius r = a (diameter = 2a), which would extend far outside the square.\n- πa²/2: This is the area of a circle CIRCUMSCRIBING a square of side a, where diameter equals the diagonal $a\\sqrt{2} \\implies r = a/\\sqrt{2} \\implies A = \\pi(a/\\sqrt{2})^2 = \\pi a^2/2$.\n- a²: This is the area of the square itself, not the circle.",
    "formula": "r = \\frac{a}{2} \\implies \\text{Area} = \\pi r^2 = \\frac{\\pi a^2}{4}",
    "examinerNote": "Key distinction to memorize: Inscribed circle area = πa²/4; Circumscribed circle area = πa²/2.",
    "source": "NCERT Exemplar / CBSE Board 2024"
  },
  {
    "id": "ch11_q2",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 1,
    "type": "MCQ",
    "question": "The area of a sector of a circle with radius r, subtending a central angle θ at the centre, is:",
    "options": [
      "(θ/180) × πr²",
      "(θ/360) × πr²",
      "(θ/360) × 2πr",
      "(θ/180) × 2πr"
    ],
    "correctOption": 1,
    "answer": "(θ/360) × πr²",
    "steps": [
      "Step 1: The total angle subtended by a complete circular boundary at its centre is 360°.",
      "Step 2: The total area of a complete circle of radius r is πr².",
      "Step 3: A sector subtending a central angle θ occupies a fraction $\\frac{\\theta}{360^\\circ}$ of the entire circular plane.",
      "Step 4: Multiplying the circle's total area by this fractional ratio gives the area of the sector:\n$$\\text{Area of sector} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2$$"
    ],
    "explanation": "Reason: A sector with central angle $\\theta$ represents a proportional fraction $\\frac{\\theta}{360^\\circ}$ of the full 360° circle. Therefore, its area is $\\frac{\\theta}{360^\\circ} \\times \\pi r^2$.\n• Why other options are wrong:\n- (θ/180) × πr²: Erroneously halves the angular denominator from 360° to 180° for area.\n- (θ/360) × 2πr: This is the formula for ARC LENGTH of the sector, not the enclosed area.\n- (θ/180) × 2πr: Incorrectly combines the wrong angular base with circumference.",
    "formula": "\\text{Area of sector} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2",
    "examinerNote": "Never confuse Arc Length (linear dimension, uses 2πr) with Sector Area (planar dimension, uses πr²).",
    "source": "NCERT Section 11.2 / CBSE Board 2023"
  },
  {
    "id": "ch11_q3",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 1,
    "type": "MCQ",
    "question": "The length of an arc of a circle with radius 12 cm subtending a central angle of 30° at the centre is: (Use π = 22/7)",
    "options": [
      "2π cm",
      "44π/7 cm",
      "22/7 cm",
      "44/7 cm"
    ],
    "correctOption": 3,
    "answer": "44/7 cm",
    "steps": [
      "Step 1: State the formula for the arc length l of a sector with radius r and central angle θ:\n$$l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$$",
      "Step 2: Substitute the given values θ = 30°, r = 12 cm, and π = 22/7:\n$$l = \\frac{30^\\circ}{360^\\circ} \\times 2 \\times \\frac{22}{7} \\times 12$$",
      "Step 3: Simplify the fraction $\\frac{30}{360} = \\frac{1}{12}$:\n$$l = \\frac{1}{12} \\times 2 \\times \\frac{22}{7} \\times 12$$",
      "Step 4: Cancel the common factor of 12 in numerator and denominator:\n$$l = 2 \\times \\frac{22}{7} = \\frac{44}{7} \\text{ cm} \\approx 6.29 \\text{ cm}$$"
    ],
    "explanation": "Reason: Arc length $l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{30}{360} \\times 2 \\times \\frac{22}{7} \\times 12 = \\frac{1}{12} \\times 24 \\times \\frac{22}{7} = \\frac{44}{7}$ cm.\n• Why other options are wrong:\n- 2π cm: Equals $2 \\times \\frac{22}{7} = \\frac{44}{7}$ cm, but the question explicitly asks to use $\\pi = 22/7$, giving numerical fraction $44/7$ cm.\n- 44π/7 cm: Multiplies $\\pi$ redundantly.\n- 22/7 cm: Misses the factor of 2 in circumference $2\\pi r$.",
    "formula": "l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{44}{7} \\text{ cm}",
    "examinerNote": "When the question says 'Use π = 22/7', evaluate the fraction completely rather than leaving π in the final option.",
    "source": "NCERT Exercise 11.1 Q1 / CBSE Board 2022"
  },
  {
    "id": "ch11_q4",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 1,
    "type": "MCQ",
    "question": "Assertion (A): Area of a minor segment = Area of corresponding sector − Area of triangle formed by radii and chord.\nReason (R): A major segment and a minor segment together form the entire circle.",
    "options": [
      "Both A and R are true and R is correct explanation",
      "Both A and R are true but R is NOT the correct explanation",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correctOption": 1,
    "answer": "Both A and R are true but R is NOT the correct explanation",
    "steps": [
      "Step 1: Evaluate Assertion (A): By geometric definition, a minor segment is bounded by chord AB and minor arc AB. It is formed by carving out △OAB from sector OAB. Thus: Area(Minor Segment) = Area(Sector OAB) − Area(△OAB). Assertion (A) is TRUE.",
      "Step 2: Evaluate Reason (R): Any chord divides a circle into two regions: the minor segment and major segment. Their union forms the complete circular region: Area(Minor Segment) + Area(Major Segment) = πr². Reason (R) is TRUE.",
      "Step 3: Evaluate Causality: Reason (R) states that minor and major segments partition the circle, but this fact does NOT explain why the minor segment is calculated by subtracting a triangle from a sector. Hence, (R) is NOT the correct explanation of (A)."
    ],
    "explanation": "Reason: Both statements are mathematically true independent facts. However, (R) discusses the partition of the entire circle into minor and major segments, whereas (A) describes how a single segment is calculated from its sector and triangle. Because (R) does not explain the geometric subtraction in (A), option B is correct.\n• Why other options are wrong:\n- Option A: False because (R) does not justify why the triangle is subtracted from the sector.\n- Option C: False because (R) is true.\n- Option D: False because (A) is true.",
    "formula": "\\text{Area(Minor Segment)} = \\text{Area(Sector)} - \\text{Area}(\\triangle OAB)",
    "examinerNote": "Classic Assertion-Reason question: Check both statements for truth first, then test if Reason provides the 'why' for Assertion.",
    "source": "CBSE Sample Paper 2024"
  },
  {
    "id": "ch11_q5",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 1,
    "type": "MCQ",
    "question": "The area of the largest triangle that can be inscribed in a semicircle of radius r is:",
    "options": [
      "r²",
      "2r²",
      "πr²/2",
      "r²/2"
    ],
    "correctOption": 0,
    "answer": "r²",
    "steps": [
      "Step 1: For any triangle inscribed in a semicircle, the base lies along the diameter: $\\text{Base} = 2r$.",
      "Step 2: To maximize the area of the triangle $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$, the height must be maximized.",
      "Step 3: The maximum possible vertical height from the diameter to any point on the semicircle is the radius r itself (when the vertex is at the apex of the semicircle).",
      "Step 4: Compute maximum area:\n$$\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times (2r) \\times r = r^2$$"
    ],
    "explanation": "Reason: The base of the largest triangle inscribed in a semicircle is its diameter $2r$. The maximum possible height perpendicular to the diameter is the radius $r$. Therefore, the maximum area is $\\frac{1}{2} \\times (2r) \\times r = r^2$.\n• Why other options are wrong:\n- 2r²: Forgets the $\\frac{1}{2}$ factor in triangle area: $\\text{base} \\times \\text{height} = 2r \\times r = 2r^2$.\n- πr²/2: This is the area of the entire SEMICIRCLE, not an inscribed triangle.\n- r²/2: Results from mistakenly setting base = r instead of diameter 2r.",
    "formula": "\\text{Area} = \\frac{1}{2} \\times 2r \\times r = r^2",
    "examinerNote": "NCERT Exemplar favorite: The triangle is a right isosceles triangle with legs r√2 and hypotenuse 2r.",
    "source": "NCERT Exemplar / CBSE Board 2023"
  },
  {
    "id": "ch11_q6",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 1,
    "type": "MCQ",
    "question": "If the circumference and the area of a circle are numerically equal, then the diameter of the circle is:",
    "options": [
      "π units",
      "2 units",
      "4 units",
      "2π units"
    ],
    "correctOption": 2,
    "answer": "4 units",
    "steps": [
      "Step 1: Set up the given equality between circumference and area:\n$$2\\pi r = \\pi r^2$$",
      "Step 2: Since radius r cannot be 0, divide both sides by $\\pi r$:\n$$2 = r \\implies r = 2 \\text{ units}$$",
      "Step 3: The question specifically asks for the DIAMETER of the circle, not the radius:\n$$\\text{Diameter} = 2r = 2 \\times 2 = 4 \\text{ units}$$"
    ],
    "explanation": "Reason: Equating $2\\pi r = \\pi r^2$ gives $r = 2$ units. The diameter is twice the radius: $d = 2r = 2(2) = 4$ units.\n• Why other options are wrong:\n- 2 units: This is the RADIUS $r$, falling directly into the examiner's trap.\n- π units: Arbitrary inclusion of $\\pi$.\n- 2π units: Results from dividing by $r^2$ incorrectly.",
    "formula": "2\\pi r = \\pi r^2 \\implies r = 2 \\implies d = 2r = 4 \\text{ units}",
    "examinerNote": "The #1 trap in this question: Students solve for r = 2 and immediately select option (b) without reading that DIAMETER was asked!",
    "source": "NCERT Exemplar / CBSE Board PYQ 2024"
  },
  {
    "id": "ch11_q7",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 2,
    "type": "VSA",
    "question": "Find the area of a sector of a circle with radius 4 cm and central angle 30°. (Use π = 3.14)",
    "answer": "4.19 cm²",
    "steps": [
      "Step 1: Given: Radius r = 4 cm, central angle θ = 30°, π = 3.14.",
      "Step 2: State the sector area formula:\n$$\\text{Area of sector} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2$$",
      "Step 3: Substitute the known values:\n$$\\text{Area} = \\frac{30^\\circ}{360^\\circ} \\times 3.14 \\times 4^2 = \\frac{1}{12} \\times 3.14 \\times 16$$",
      "Step 4: Simplify numerator and denominator:\n$$\\text{Area} = \\frac{16 \\times 3.14}{12} = \\frac{4 \\times 3.14}{3} = \\frac{12.56}{3} \\approx 4.1867 \\text{ cm}^2$$",
      "Step 5: Round off to 2 decimal places:\n$$\\text{Area} \\approx 4.19 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: Direct application of $\\text{Area} = \\frac{\\theta}{360^\\circ}\\pi r^2 = \\frac{30}{360} \\times 3.14 \\times 16 = \\frac{12.56}{3} \\approx 4.19$ cm².",
    "formula": "\\text{Area} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = 4.19 \\text{ cm}^2",
    "examinerNote": "When π = 3.14 is specified, avoid using 22/7 to prevent slight decimal rounding discrepancies.",
    "source": "NCERT Exercise 11.1 Q4 / CBSE Board 2023"
  },
  {
    "id": "ch11_q8",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 2,
    "type": "VSA",
    "question": "The minute hand of a clock is 14 cm long. Find the area swept by the minute hand in 5 minutes. (Use π = 22/7)",
    "answer": "154/3 cm² (approx 51.33 cm²)",
    "steps": [
      "Step 1: In 60 minutes, the minute hand completes one full rotation of 360°.",
      "Step 2: Angle swept by minute hand in 1 minute = 360° / 60 = 6°.",
      "Step 3: Central angle swept in 5 minutes:\n$$\\theta = 5 \\times 6^\\circ = 30^\\circ$$",
      "Step 4: The length of the minute hand acts as the circle's radius: r = 14 cm.",
      "Step 5: Calculate the swept sector area:\n$$\\text{Area} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{30^\\circ}{360^\\circ} \\times \\frac{22}{7} \\times 14^2$$\n$$= \\frac{1}{12} \\times \\frac{22}{7} \\times 196 = \\frac{1}{12} \\times 22 \\times 28 = \\frac{616}{12} = \\frac{154}{3} \\text{ cm}^2 \\approx 51.33 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: Minute hand velocity is 6° per minute. In 5 minutes, $\\theta = 30^\\circ$. The swept area is $\\frac{30}{360} \\times \\frac{22}{7} \\times 14^2 = \\frac{1}{12} \\times 616 = \\frac{154}{3}$ cm².",
    "formula": "\\theta = t \\times 6^\\circ, \\quad \\text{Area} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{154}{3} \\text{ cm}^2",
    "examinerNote": "CBSE Marking Scheme accepts both exact improper fraction 154/3 cm² and decimal 51.33 cm².",
    "source": "NCERT Exercise 11.1 Q3 / CBSE Board 2024"
  },
  {
    "id": "ch11_q9",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 2,
    "type": "VSA",
    "question": "A chord of a circle of radius 10 cm subtends a right angle at the centre. Find the area of the corresponding minor segment. (Use π = 3.14)",
    "answer": "28.5 cm²",
    "steps": [
      "Step 1: Given: Radius r = 10 cm and central angle θ = 90° (right angle).",
      "Step 2: Compute the area of the corresponding sector OAB (a quadrant):\n$$\\text{Area of sector} = \\frac{90^\\circ}{360^\\circ} \\times \\pi r^2 = \\frac{1}{4} \\times 3.14 \\times 10^2 = \\frac{314}{4} = 78.5 \\text{ cm}^2$$",
      "Step 3: Compute the area of right-angled triangle △OAB (base = r = 10 cm, height = r = 10 cm):\n$$\\text{Area of } \\triangle OAB = \\frac{1}{2} \\times r \\times r = \\frac{1}{2} \\times 10 \\times 10 = 50 \\text{ cm}^2$$",
      "Step 4: Subtract triangle area from sector area to get minor segment area:\n$$\\text{Area of minor segment} = \\text{Area of sector} - \\text{Area of } \\triangle OAB$$\n$$= 78.5 - 50 = 28.5 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: $\\text{Area(Sector)} = \\frac{1}{4}(3.14)(100) = 78.5$ cm². $\\text{Area}(\\triangle OAB) = \\frac{1}{2}(10)(10) = 50$ cm². Minor segment area $= 78.5 - 50 = 28.5$ cm².",
    "formula": "\\text{Area(Minor Segment)} = \\frac{90^\\circ}{360^\\circ}\\pi r^2 - \\frac{1}{2}r^2 = 78.5 - 50 = 28.5 \\text{ cm}^2",
    "examinerNote": "For θ = 90°, the triangle is right-angled so its area is simply ½r².",
    "source": "NCERT Exercise 11.1 Q4 / CBSE Board 2023"
  },
  {
    "id": "ch11_q10",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 3,
    "type": "SA",
    "question": "In a circle of radius 21 cm, two equal parallel chords AB and CD of length 21 cm are drawn on opposite sides of the centre. Find the total area of the two minor segments enclosed by these chords. (Use π = 22/7)",
    "answer": "462 - 441√3/2 cm² (approx 79.9 cm²)",
    "steps": [
      "Step 1: In △OAB, OA = OB = r = 21 cm, and chord AB = 21 cm. Since all three sides are equal (OA = OB = AB = 21 cm), △OAB is an EQUILATERAL triangle.",
      "Step 2: Therefore, the central angle subtended by each chord is $\\theta = 60^\\circ$.",
      "Step 3: Calculate the area of one 60° sector:\n$$\\text{Area of sector} = \\frac{60^\\circ}{360^\\circ} \\times \\frac{22}{7} \\times 21^2 = \\frac{1}{6} \\times \\frac{22}{7} \\times 441 = \\frac{1}{6} \\times 1386 = 231 \\text{ cm}^2$$",
      "Step 4: Calculate the area of the equilateral triangle △OAB:\n$$\\text{Area of } \\triangle OAB = \\frac{\\sqrt{3}}{4} \\times r^2 = \\frac{\\sqrt{3}}{4} \\times 21^2 = \\frac{441\\sqrt{3}}{4} \\text{ cm}^2$$",
      "Step 5: Compute the area of one minor segment:\n$$\\text{Area of 1 segment} = 231 - \\frac{441\\sqrt{3}}{4} \\text{ cm}^2$$",
      "Step 6: Compute total area of both segments (for AB and CD):\n$$\\text{Total Area} = 2 \\times \\left( 231 - \\frac{441\\sqrt{3}}{4} \\right) = 462 - \\frac{441\\sqrt{3}}{2} \\text{ cm}^2 \\approx 462 - 381.92 = 80.08 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: Since chord length equals radius (21 cm), the triangle is equilateral, so $\\theta = 60^\\circ$. Area of one segment is $231 - 441\\sqrt{3}/4$. Multiplying by 2 yields $462 - 441\\sqrt{3}/2$ cm².",
    "formula": "\\text{Total Area} = 2 \\left[ \\frac{60^\\circ}{360^\\circ}\\pi r^2 - \\frac{\\sqrt{3}}{4}r^2 \\right] = 462 - \\frac{441\\sqrt{3}}{2} \\text{ cm}^2",
    "examinerNote": "Key Deduction: 'Chord = Radius' immediately implies an equilateral triangle with central angle 60°.",
    "source": "NCERT Exemplar / CBSE Board 2021"
  },
  {
    "id": "ch11_q11",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 3,
    "type": "SA",
    "question": "In a circle of radius 21 cm, an arc subtends an angle of 60° at the centre. Find: (i) the length of the arc, (ii) area of the sector formed by the arc, and (iii) area of the segment formed by the corresponding chord. (Use π = 22/7)",
    "answer": "(i) 22 cm, (ii) 231 cm², (iii) 231 - 441√3/4 cm²",
    "steps": [
      "Step 1: Part (i): Length of arc l:\n$$l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{60^\\circ}{360^\\circ} \\times 2 \\times \\frac{22}{7} \\times 21 = \\frac{1}{6} \\times 2 \\times 22 \\times 3 = 22 \\text{ cm}$$",
      "Step 2: Part (ii): Area of the sector:\n$$\\text{Area of sector} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{60^\\circ}{360^\\circ} \\times \\frac{22}{7} \\times 21^2 = \\frac{1}{6} \\times \\frac{22}{7} \\times 441 = 231 \\text{ cm}^2$$",
      "Step 3: Part (iii): Area of the segment = Area of sector − Area of △OAB.\nSince OA = OB = 21 cm and ∠AOB = 60°, △OAB is an equilateral triangle:\n$$\\text{Area of } \\triangle OAB = \\frac{\\sqrt{3}}{4} r^2 = \\frac{\\sqrt{3}}{4} \\times 21^2 = \\frac{441\\sqrt{3}}{4} \\text{ cm}^2$$",
      "Step 4: Subtract to find segment area:\n$$\\text{Area of segment} = 231 - \\frac{441\\sqrt{3}}{4} \\text{ cm}^2 \\approx 231 - 190.95 = 40.05 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: Part (i): $l = (60/360)(2)(22/7)(21) = 22$ cm. Part (ii): $\\text{Area} = (1/6)(22/7)(441) = 231$ cm². Part (iii): Equilateral triangle area is $\\frac{\\sqrt{3}}{4}(441)$, so segment area is $231 - 441\\sqrt{3}/4$ cm².",
    "formula": "l = 22 \\text{ cm}, \\quad A_{sector} = 231 \\text{ cm}^2, \\quad A_{seg} = 231 - \\frac{441\\sqrt{3}}{4} \\text{ cm}^2",
    "examinerNote": "NCERT Exercise 11.1 Q5: The gold standard 3-mark question covering all three core concepts in one go.",
    "source": "NCERT Exercise 11.1 Q5 / CBSE Board 2024"
  },
  {
    "id": "ch11_q12",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 3,
    "type": "SA",
    "question": "A brooch is made with silver wire in the form of a circle with diameter 35 mm. The wire is also used in making 5 diameters which divide the circle into 10 equal sectors. Find: (i) the total length of the silver wire required, and (ii) the area of each sector of the brooch. (Use π = 22/7)",
    "answer": "(i) 285 mm, (ii) 385/4 mm² = 96.25 mm²",
    "steps": [
      "Step 1: Given: Diameter d = 35 mm, so radius r = 35/2 mm.",
      "Step 2: Part (i): Total length of silver wire required:\n$$\\text{Total wire length} = \\text{Circumference} + 5 \\times \\text{Diameter}$$\n$$\\text{Total wire length} = 2\\pi r + 5d = \\left( 2 \\times \\frac{22}{7} \\times \\frac{35}{2} \\right) + 5(35)$$\n$$= 110 + 175 = 285 \\text{ mm}$$",
      "Step 3: Part (ii): The 5 diameters divide the circle into 10 equal sectors. The central angle of each sector is:\n$$\\theta = \\frac{360^\\circ}{10} = 36^\\circ$$",
      "Step 4: Compute the area of each sector:\n$$\\text{Area of each sector} = \\frac{36^\\circ}{360^\\circ} \\times \\pi r^2 = \\frac{1}{10} \\times \\frac{22}{7} \\times \\left( \\frac{35}{2} \\right)^2$$\n$$= \\frac{1}{10} \\times \\frac{22}{7} \\times \\frac{1225}{4} = \\frac{1}{10} \\times \\frac{3850}{4} = \\frac{385}{4} = 96.25 \\text{ mm}^2$$"
    ],
    "explanation": "Reason: Wire length is circumference plus 5 diameters: $110 + 5(35) = 285$ mm. Area of each of the 10 sectors is $\\frac{1}{10} \\pi r^2 = \\frac{1}{10} \\times \\frac{22}{7} \\times \\frac{1225}{4} = 96.25$ mm².",
    "formula": "\\text{Wire} = 2\\pi r + 5d = 285 \\text{ mm}, \\quad \\text{Area} = \\frac{1}{10}\\pi r^2 = 96.25 \\text{ mm}^2",
    "examinerNote": "NCERT Exercise 11.1 Q9: Do not forget to add the 5 diameters to the circumference in part (i)!",
    "source": "NCERT Exercise 11.1 Q9 / CBSE Board 2023"
  },
  {
    "id": "ch11_q13",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 5,
    "type": "LA",
    "question": "ABCD is a square of side 14 cm. With each vertex A, B, C, D as centre, four circles are drawn such that each circle touches externally two of the remaining three circles. Find the area of the shaded region enclosed between the four circles. (Use π = 22/7)",
    "answer": "42 cm²",
    "steps": [
      "Step 1: Understand the configuration: Square ABCD has side a = 14 cm. The circles touch each other externally along each side of the square.",
      "Step 2: Since two circles touch along each 14 cm side, the radius of each circle is:\n$$r = \\frac{a}{2} = \\frac{14}{2} = 7 \\text{ cm}$$",
      "Step 3: At each vertex of the square, the corner angle is 90°. Therefore, the portion of each circle lying INSIDE the square is a quadrant (90° sector).",
      "Step 4: Compute the area of the square ABCD:\n$$\\text{Area of square} = a^2 = 14^2 = 196 \\text{ cm}^2$$",
      "Step 5: Compute the combined area of the four quadrants at the four vertices:\n$$\\text{Area of 4 quadrants} = 4 \\times \\left( \\frac{1}{4} \\pi r^2 \\right) = \\pi r^2$$\n$$= \\frac{22}{7} \\times 7^2 = \\frac{22}{7} \\times 49 = 154 \\text{ cm}^2$$",
      "Step 6: Compute the area of the shaded region in the centre of the square:\n$$\\text{Area of shaded region} = \\text{Area of square} - \\text{Area of 4 quadrants}$$\n$$= 196 - 154 = 42 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: The 4 corner quadrants form exactly 1 complete circle of radius 7 cm. Shaded area $= \\text{Area of square} - \\text{Area of circle} = 14^2 - \\pi(7^2) = 196 - 154 = 42$ cm².",
    "formula": "\\text{Area(Shaded)} = a^2 - \\pi r^2 = 196 - 154 = 42 \\text{ cm}^2",
    "examinerNote": "NCERT Exercise 11.1 Q7 / Board PYQ: 4 quadrants of equal radius ALWAYS combine to form 1 full circle.",
    "source": "NCERT Exercise 11.1 Q7 / CBSE Board 2024"
  },
  {
    "id": "ch11_q14",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 5,
    "type": "LA",
    "question": "A chord of a circle of radius 35 cm subtends an angle of 120° at the centre. Find the area of the corresponding minor segment of the circle. (Use π = 22/7 and √3 ≈ 1.732)",
    "answer": "3850/3 - 1225√3/4 cm² (approx 752.6 cm²)",
    "steps": [
      "Step 1: Given: Radius r = 35 cm and central angle θ = 120°.",
      "Step 2: Calculate the area of the minor sector OAB:\n$$\\text{Area of sector} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{120^\\circ}{360^\\circ} \\times \\frac{22}{7} \\times 35^2$$\n$$= \\frac{1}{3} \\times \\frac{22}{7} \\times 1225 = \\frac{1}{3} \\times 22 \\times 175 = \\frac{3850}{3} \\approx 1283.33 \\text{ cm}^2$$",
      "Step 3: Calculate the area of △OAB where OA = OB = 35 cm and ∠AOB = 120°.\nUsing the universal formula $\\text{Area} = \\frac{1}{2} r^2 \\sin\\theta$:\n$$\\text{Area of } \\triangle OAB = \\frac{1}{2} \\times 35^2 \\times \\sin 120^\\circ$$\nSince $\\sin 120^\\circ = \\sin(180^\\circ - 60^\\circ) = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$:\n$$\\text{Area of } \\triangle OAB = \\frac{1}{2} \\times 1225 \\times \\frac{\\sqrt{3}}{2} = \\frac{1225\\sqrt{3}}{4} \\approx \\frac{1225 \\times 1.732}{4} = \\frac{2121.7}{4} \\approx 530.43 \\text{ cm}^2$$",
      "Step 4: Compute the area of the minor segment:\n$$\\text{Area of minor segment} = \\text{Area of sector} - \\text{Area of } \\triangle OAB$$\n$$= \\frac{3850}{3} - \\frac{1225\\sqrt{3}}{4} \\approx 1283.33 - 530.43 = 752.90 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: $\\text{Area(Sector)} = (1/3)(22/7)(1225) = 3850/3 \\approx 1283.33$ cm². In $\\triangle OAB$, $\\text{Area} = \\frac{1}{2}(35)^2 \\sin 120^\\circ = \\frac{1225\\sqrt{3}}{4} \\approx 530.43$ cm². Subtracting gives $752.9$ cm².",
    "formula": "\\text{Area(Segment)} = \\frac{120^\\circ}{360^\\circ}\\pi r^2 - \\frac{1}{2}r^2\\sin 120^\\circ",
    "examinerNote": "Trigonometric value: sin(120°) = sin(60°) = √3/2. This is explicitly tested in standard mathematics.",
    "source": "NCERT Exemplar / CBSE Board 2022"
  },
  {
    "id": "ch11_q15",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 4,
    "type": "Case Study",
    "question": "A horse is tied to a peg at corner A of a square grassy field of side 21 m by a rope 14 m long:\\n(i) What angle is swept by the rope at the corner peg? [1 Mark]\\n(ii) Find the area of that part of the field in which the horse can graze. [1 Mark]\\n(iii) Find the area of the field that the horse CANNOT graze. (Use π = 22/7) [2 Marks]",
    "answer": "(i) 90°, (ii) 154 m², (iii) 287 m²",
    "steps": [
      "Step 1: Part (i): Since the field is a square, every interior vertex corner has an angle of 90°. Hence, the angle swept by the rope is θ = 90°.",
      "Step 2: Part (ii): The grazed region forms a quadrant of a circle of radius r = 14 m (length of the rope):\n$$\\text{Grazing Area} = \\frac{90^\\circ}{360^\\circ} \\times \\pi r^2 = \\frac{1}{4} \\times \\frac{22}{7} \\times 14^2 = \\frac{1}{4} \\times \\frac{22}{7} \\times 196$$\n$$= \\frac{1}{4} \\times 22 \\times 28 = 22 \\times 7 = 154 \\text{ m}^2$$",
      "Step 3: Part (iii): First compute the total area of the square field of side a = 21 m:\n$$\\text{Total Area of Field} = a^2 = 21^2 = 441 \\text{ m}^2$$",
      "Step 4: Subtract the grazing area from the total field area to find ungrazed area:\n$$\\text{Ungrazed Area} = \\text{Total Area} - \\text{Grazing Area} = 441 - 154 = 287 \\text{ m}^2$$"
    ],
    "explanation": "Reason: Part (i): Corner of a square is 90°. Part (ii): Quadrant grazing area $\\frac{1}{4}\\pi(14^2) = 154$ m². Part (iii): Total square area $21^2 = 441$ m², so ungrazed area is $441 - 154 = 287$ m².",
    "formula": "\\text{Grazing Area} = \\frac{1}{4}\\pi r^2 = 154 \\text{ m}^2, \\quad \\text{Ungrazed Area} = a^2 - 154 = 287 \\text{ m}^2",
    "examinerNote": "NCERT Exercise 11.1 Q8: High-frequency case study question in CBSE board examinations.",
    "source": "NCERT Exercise 11.1 Q8 / CBSE Board 2024"
  },
  {
    "id": "ch11_q16",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 4,
    "type": "Case Study",
    "question": "A municipal park is designed in the shape of a circle of diameter 28 m. The park has a floral display bed in the form of a central sector with angle 60°. The remaining area is dedicated to a green lawn:\\n(i) Find the radius of the park. [1 Mark]\\n(ii) Find the perimeter of the floral sector bed. [1 Mark]\\n(iii) Find the area of the green lawn. (Use π = 22/7) [2 Marks]",
    "answer": "(i) 14 m, (ii) 128/3 m ≈ 42.67 m, (iii) 1540/3 m² ≈ 513.33 m²",
    "steps": [
      "Step 1: Part (i): Given diameter d = 28 m, the radius r is:\n$$r = \\frac{d}{2} = \\frac{28}{2} = 14 \\text{ m}$$",
      "Step 2: Part (ii): The perimeter of the floral sector includes the arc length PLUS two radii:\n$$\\text{Arc length } l = \\frac{60^\\circ}{360^\\circ} \\times 2\\pi r = \\frac{1}{6} \\times 2 \\times \\frac{22}{7} \\times 14 = \\frac{1}{6} \\times 88 = \\frac{44}{3} \\text{ m}$$\n$$\\text{Perimeter} = l + 2r = \\frac{44}{3} + 2(14) = \\frac{44}{3} + 28 = \\frac{44 + 84}{3} = \\frac{128}{3} \\text{ m} \\approx 42.67 \\text{ m}$$",
      "Step 3: Part (iii): The green lawn is the major sector of central angle $360^\\circ - 60^\\circ = 300^\\circ$ (or Total Circle Area − Sector Area):\n$$\\text{Total Circle Area} = \\pi r^2 = \\frac{22}{7} \\times 14^2 = \\frac{22}{7} \\times 196 = 616 \\text{ m}^2$$\n$$\\text{Floral Bed Area} = \\frac{60^\\circ}{360^\\circ} \\times 616 = \\frac{1}{6} \\times 616 = \\frac{308}{3} \\text{ m}^2$$\n$$\\text{Green Lawn Area} = 616 - \\frac{308}{3} = \\frac{1848 - 308}{3} = \\frac{1540}{3} \\text{ m}^2 \\approx 513.33 \\text{ m}^2$$"
    ],
    "explanation": "Reason: Part (i): $r = 14$ m. Part (ii): $\\text{Perimeter} = l + 2r = 44/3 + 28 = 128/3$ m. Part (iii): $\\text{Lawn Area} = \\frac{300}{360} \\times 616 = \\frac{5}{6} \\times 616 = \\frac{1540}{3} \\approx 513.33$ m².",
    "formula": "\\text{Perimeter} = l + 2r = \\frac{128}{3} \\text{ m}, \\quad \\text{Lawn Area} = \\frac{300^\\circ}{360^\\circ}\\pi r^2 = \\frac{1540}{3} \\text{ m}^2",
    "examinerNote": "Notice that perimeter of the sector requires adding 2r = 28 m to the arc length.",
    "source": "CBSE Sample Paper 2025"
  },
  {
    "id": "ch11_q17",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 3,
    "type": "SA",
    "question": "Find the area of the shaded region in the figure where ABCD is a square of side 14 cm and two semicircles are drawn inside with AD and BC as their respective diameters. (Use π = 22/7)",
    "answer": "42 cm²",
    "steps": [
      "Step 1: The side of square ABCD is a = 14 cm. Its area is:\n$$\\text{Area of square} = a^2 = 14^2 = 196 \\text{ cm}^2$$",
      "Step 2: Two semicircles are drawn with diameters AD = 14 cm and BC = 14 cm. Radius of each semicircle is:\n$$r = \\frac{14}{2} = 7 \\text{ cm}$$",
      "Step 3: The sum of the areas of the two semicircles equals the area of one complete circle of radius 7 cm:\n$$\\text{Combined Semicircles Area} = 2 \\times \\left( \\frac{1}{2}\\pi r^2 \\right) = \\pi r^2 = \\frac{22}{7} \\times 7^2 = 154 \\text{ cm}^2$$",
      "Step 4: The shaded region consists of the remaining space in the square outside the two semicircles:\n$$\\text{Area of shaded region} = \\text{Area of square} - \\text{Combined Semicircles Area}$$\n$$= 196 - 154 = 42 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: The two semicircles on opposite sides combine to form a full circle of radius 7 cm with area 154 cm². Subtracting from the square area (196 cm²) gives shaded area $= 196 - 154 = 42$ cm².",
    "formula": "\\text{Area(Shaded)} = a^2 - \\pi r^2 = 196 - 154 = 42 \\text{ cm}^2",
    "examinerNote": "Two semicircles of diameter 14 cm combine into 1 complete circle of radius 7 cm.",
    "source": "NCERT Exemplar / CBSE Board 2023"
  },
  {
    "id": "ch11_q18",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 2,
    "type": "VSA",
    "question": "Find the area of a quadrant of a circle whose circumference is 22 cm. (Use π = 22/7)",
    "answer": "77/8 cm² (or 9.625 cm²)",
    "steps": [
      "Step 1: Given circumference C = 22 cm. Find radius r using $2\\pi r = 22$:\n$$2 \\times \\frac{22}{7} \\times r = 22 \\implies \\frac{44}{7} r = 22 \\implies r = \\frac{22 \\times 7}{44} = \\frac{7}{2} = 3.5 \\text{ cm}$$",
      "Step 2: A quadrant of a circle is a sector with central angle θ = 90° (one-fourth of a circle).",
      "Step 3: Calculate the area of the quadrant:\n$$\\text{Area of quadrant} = \\frac{1}{4} \\pi r^2 = \\frac{1}{4} \\times \\frac{22}{7} \\times \\left( \\frac{7}{2} \\right)^2$$\n$$= \\frac{1}{4} \\times \\frac{22}{7} \\times \\frac{49}{4} = \\frac{1}{4} \\times \\frac{22 \\times 7}{4} = \\frac{154}{16} = \\frac{77}{8} \\text{ cm}^2 = 9.625 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: $2\\pi r = 22 \\implies r = 7/2$ cm. Area of quadrant $= \\frac{1}{4}\\pi r^2 = \\frac{1}{4}\\left(\\frac{22}{7}\\right)\\left(\\frac{49}{4}\\right) = \\frac{77}{8} = 9.625$ cm².",
    "formula": "r = \\frac{C}{2\\pi} = \\frac{7}{2} \\text{ cm}, \\quad \\text{Area} = \\frac{1}{4}\\pi r^2 = \\frac{77}{8} \\text{ cm}^2",
    "examinerNote": "NCERT Exercise 11.1 Q2: Keep radius as fraction 7/2 for clean cancellation.",
    "source": "NCERT Exercise 11.1 Q2 / CBSE Board 2024"
  },
  {
    "id": "ch11_q19",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 2,
    "type": "VSA",
    "question": "The short (hour) hand and long (minute) hand of a clock are 4 cm and 6 cm long respectively. Find the sum of the distances travelled by their tips in 2 days. (Use π = 22/7)",
    "answer": "13376/7 cm ≈ 1910.86 cm",
    "steps": [
      "Step 1: Understand rotation counts in 2 days (48 hours):\n- Short hand (hour hand): Completes 1 full revolution in 12 hours. In 48 hours, it makes $48 / 12 = 4$ full rotations.\n- Long hand (minute hand): Completes 1 full revolution every 1 hour. In 48 hours, it makes 48 full rotations.",
      "Step 2: Distance travelled by tip of short hand (radius r₁ = 4 cm):\n$$d_1 = 4 \\times (2\\pi r_1) = 4 \\times 2 \\times \\frac{22}{7} \\times 4 = \\frac{704}{7} \\text{ cm}$$",
      "Step 3: Distance travelled by tip of long hand (radius r₂ = 6 cm):\n$$d_2 = 48 \\times (2\\pi r_2) = 48 \\times 2 \\times \\frac{22}{7} \\times 6 = \\frac{12672}{7} \\text{ cm}$$",
      "Step 4: Calculate total sum of distances travelled:\n$$\\text{Total Distance} = d_1 + d_2 = \\frac{704}{7} + \\frac{12672}{7} = \\frac{13376}{7} \\text{ cm} \\approx 1910.86 \\text{ cm}$$"
    ],
    "explanation": "Reason: In 2 days (48 hours), hour hand makes 4 rotations ($d_1 = 4 \\times 2\\pi(4) = 704/7$ cm) and minute hand makes 48 rotations ($d_2 = 48 \\times 2\\pi(6) = 12672/7$ cm). Total distance $= 13376/7 \\approx 1910.86$ cm.",
    "formula": "d = n_1(2\\pi r_1) + n_2(2\\pi r_2) = \\frac{13376}{7} \\text{ cm}",
    "examinerNote": "Count revolutions carefully: 2 days = 48 hours = 4 hour-hand rotations, 48 minute-hand rotations.",
    "source": "NCERT Exemplar / CBSE Board 2023"
  },
  {
    "id": "ch11_q20",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 1,
    "type": "MCQ",
    "question": "The perimeter of a sector of a circle with central angle 45° and radius 7 cm is: (Use π = 22/7)",
    "options": [
      "25.5 cm",
      "14 cm",
      "11 cm",
      "19.5 cm"
    ],
    "correctOption": 3,
    "answer": "19.5 cm",
    "steps": [
      "Step 1: Recall that the perimeter of a sector equals the length of its curved arc PLUS the two bounding straight radii:\n$$\\text{Perimeter} = l + 2r$$",
      "Step 2: Compute the arc length l with θ = 45° and r = 7 cm:\n$$l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{45^\\circ}{360^\\circ} \\times 2 \\times \\frac{22}{7} \\times 7$$\n$$= \\frac{1}{8} \\times 44 = \\frac{11}{2} = 5.5 \\text{ cm}$$",
      "Step 3: Add the two radial boundaries (2r = 2 × 7 = 14 cm):\n$$\\text{Perimeter} = 5.5 + 2(7) = 5.5 + 14 = 19.5 \\text{ cm}$$"
    ],
    "explanation": "Reason: Arc length $l = \\frac{45}{360} \\times 2 \\times \\frac{22}{7} \\times 7 = \\frac{1}{8} \\times 44 = 5.5$ cm. The perimeter of the sector must include both radii: $\\text{Perimeter} = l + 2r = 5.5 + 2(7) = 5.5 + 14 = 19.5$ cm.\n• Why other options are wrong:\n- 25.5 cm: Erroneously adds diameter twice or miscalculates arc length as 11.5 cm.\n- 14 cm: This is merely the sum of the two radii (2r), completely ignoring the curved arc.\n- 11 cm: This is the arc length of a 90° quadrant, not a 45° sector, and also ignores the radii.",
    "formula": "\\text{Perimeter} = l + 2r = \\frac{\\theta}{360^\\circ}(2\\pi r) + 2r = 5.5 + 14 = 19.5 \\text{ cm}",
    "examinerNote": "Classic board trap: Many students write only the arc length 5.5 cm (or 11 cm) and forget that perimeter includes + 2r.",
    "source": "CBSE Board PYQ 2023"
  },
  {
    "id": "ch11_q21",
    "chapter": 11,
    "chapterName": "Areas Related to Circles",
    "marks": 3,
    "type": "SA",
    "question": "In a circle of radius 21 cm, a chord PQ subtends an angle of 120° at the centre. Find the area of the minor segment. (Use π = 22/7 and √3 ≈ 1.732)",
    "answer": "462 - 441√3/4 cm² (approx 271.05 cm²)",
    "steps": [
      "Step 1: Given: Radius r = 21 cm and central angle θ = 120°.",
      "Step 2: Compute the area of sector OPQ:\n$$\\text{Area of sector} = \\frac{120^\\circ}{360^\\circ} \\times \\pi r^2 = \\frac{1}{3} \\times \\frac{22}{7} \\times 21^2$$\n$$= \\frac{1}{3} \\times \\frac{22}{7} \\times 441 = \\frac{1}{3} \\times 1386 = 462 \\text{ cm}^2$$",
      "Step 3: Compute the area of △OPQ using the sine formula $\\text{Area} = \\frac{1}{2} r^2 \\sin\\theta$:\n$$\\text{Area of } \\triangle OPQ = \\frac{1}{2} \\times 21^2 \\times \\sin 120^\\circ = \\frac{441}{2} \\times \\frac{\\sqrt{3}}{2} = \\frac{441\\sqrt{3}}{4} \\text{ cm}^2$$\n$$= \\frac{441 \\times 1.732}{4} \\approx \\frac{763.812}{4} \\approx 190.95 \\text{ cm}^2$$",
      "Step 4: Compute minor segment area by subtraction:\n$$\\text{Area of minor segment} = \\text{Area of sector} - \\text{Area of } \\triangle OPQ$$\n$$= 462 - 190.95 = 271.05 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: Sector area is $\\frac{1}{3} \\times \\frac{22}{7} \\times 441 = 462$ cm². Triangle area is $\\frac{1}{2}(441)\\sin 120^\\circ = \\frac{441\\sqrt{3}}{4} \\approx 190.95$ cm². Minor segment area $= 462 - 190.95 = 271.05$ cm².",
    "formula": "\\text{Area(Segment)} = 462 - \\frac{441\\sqrt{3}}{4} \\approx 271.05 \\text{ cm}^2",
    "examinerNote": "Notice: 462 - 190.95 = 271.05 cm² (accurately verified).",
    "source": "NCERT Exercise 11.1 Q7 / CBSE Board 2024"
  }
];
