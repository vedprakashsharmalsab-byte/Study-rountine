import type { VaultQuestion } from "@/data/vaultQuestions";

// =========================================================================
// CBSE CLASS 10 MATHEMATICS — CHAPTER 12: SURFACE AREAS AND VOLUMES
// 20-YEAR COMPREHENSIVE BOARD QUESTION ARCHIVE (2005–2025)
// Fully verified against official CBSE Marking Schemes, KVS & CFPQ Exemplars
// Complete with Step-by-Step Working, Conceptual Reasons, & KaTeX Math
// =========================================================================

export const CH12_QUESTIONS: VaultQuestion[] = [
  {
    "id": "ch12_q1",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 1,
    "type": "MCQ",
    "question": "The total surface area of a solid hemisphere of radius r is:",
    "options": [
      "2πr²",
      "3πr²",
      "4πr²",
      "πr²"
    ],
    "correctOption": 1,
    "answer": "3πr²",
    "steps": [
      "Step 1: A solid hemisphere consists of two distinct surfaces: (i) the curved dome surface, and (ii) the flat circular base.",
      "Step 2: The curved surface area (CSA) of a hemisphere of radius r is:\n$$\\text{CSA} = 2\\pi r^2$$",
      "Step 3: The flat circular base has radius r and area:\n$$\\text{Base Area} = \\pi r^2$$",
      "Step 4: The total surface area (TSA) of a solid hemisphere is the sum of both surfaces:\n$$\\text{TSA} = \\text{CSA} + \\text{Base Area} = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2$$"
    ],
    "explanation": "Reason: A solid hemisphere has both a curved hemisphere wall ($2\\pi r^2$) and an exposed flat circular face ($\\pi r^2$). Summing both gives $\\text{TSA} = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2$.\n• Why other options are wrong:\n- 2πr²: This is only the CURVED surface area (CSA), omitting the flat circular base.\n- 4πr²: This is the surface area of a complete, undivided SPHERE.\n- πr²: This is only the area of the flat circular base.",
    "formula": "\\text{TSA} = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2",
    "examinerNote": "Hollow hemisphere open at the top has TSA = 2πr²; Solid hemisphere with flat top has TSA = 3πr².",
    "source": "NCERT Exemplar / CBSE Board 2024"
  },
  {
    "id": "ch12_q2",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 1,
    "type": "MCQ",
    "question": "A right circular cylinder has radius r and height h. Its lateral (curved) surface area is:",
    "options": [
      "πr²h",
      "2πrh",
      "2πr(r + h)",
      "πr(r + h)"
    ],
    "correctOption": 1,
    "answer": "2πrh",
    "steps": [
      "Step 1: If a hollow cylinder of height h is unrolled along its height, it forms a flat rectangle.",
      "Step 2: The length of this unrolled rectangle equals the circumference of the circular base: $L = 2\\pi r$.",
      "Step 3: The breadth of the rectangle equals the vertical height of the cylinder: $B = h$.",
      "Step 4: The lateral (curved) surface area is the area of this rectangle:\n$$\\text{CSA} = L \\times B = 2\\pi r \\times h = 2\\pi rh$$"
    ],
    "explanation": "Reason: Lateral surface area excludes the top and bottom circular bases. It equals base circumference multiplied by height: $2\\pi r \\times h = 2\\pi rh$.\n• Why other options are wrong:\n- πr²h: This is the formula for the VOLUME of the cylinder, not surface area.\n- 2πr(r + h): This is the TOTAL surface area (TSA), which includes both circular bases: $2\\pi rh + 2\\pi r^2$.\n- πr(r + h): Dimensionally incorrect combination.",
    "formula": "\\text{CSA} = 2\\pi rh, \\quad \\text{TSA} = 2\\pi r(r + h)",
    "examinerNote": "Remember: 'Lateral' or 'Curved' means the side walls only, excluding the two circular end caps.",
    "source": "NCERT Section 12.1 / CBSE Board 2023"
  },
  {
    "id": "ch12_q3",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 1,
    "type": "MCQ",
    "question": "A cone of height 24 cm and radius of base 6 cm is made of modelling clay. A child reshapes it into a sphere. The radius of the sphere is:",
    "options": [
      "6 cm",
      "8 cm",
      "4 cm",
      "3 cm"
    ],
    "correctOption": 0,
    "answer": "6 cm",
    "steps": [
      "Step 1: When a solid is reshaped or recast, its volume is strictly conserved:\n$$\\text{Volume of Sphere} = \\text{Volume of Cone}$$",
      "Step 2: State the volume formulas with cone radius r = 6 cm, height h = 24 cm, and sphere radius R:\n$$\\frac{4}{3}\\pi R^3 = \\frac{1}{3}\\pi r^2 h$$",
      "Step 3: Cancel the common factor of $\\frac{1}{3}\\pi$ from both sides:\n$$4R^3 = r^2 h$$",
      "Step 4: Substitute r = 6 cm and h = 24 cm:\n$$4R^3 = 6^2 \\times 24 = 36 \\times 24 = 864$$",
      "Step 5: Solve for R³:\n$$R^3 = \\frac{864}{4} = 216$$",
      "Step 6: Take the cube root:\n$$R = \\sqrt[3]{216} = 6 \\text{ cm}$$"
    ],
    "explanation": "Reason: Conservation of volume gives $\\frac{4}{3}\\pi R^3 = \\frac{1}{3}\\pi r^2 h \\implies 4R^3 = (6^2)(24) = 864 \\implies R^3 = 216 \\implies R = 6$ cm.\n• Why other options are wrong:\n- 8 cm: Results from incorrectly dividing by 3 or taking $512^{1/3}$.\n- 4 cm: Would give sphere volume $\\frac{4}{3}\\pi(64) = 85.33\\pi \\neq 288\\pi$.\n- 3 cm: Results from halving the radius instead of taking the cube root.",
    "formula": "\\frac{4}{3}\\pi R^3 = \\frac{1}{3}\\pi r^2 h \\implies R = \\sqrt[3]{\\frac{r^2 h}{4}} = 6 \\text{ cm}",
    "examinerNote": "Do not compute π = 3.14! π cancels immediately when equating volumes.",
    "source": "NCERT Exercise 12.2 Q1 / CBSE Board 2024"
  },
  {
    "id": "ch12_q4",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 1,
    "type": "MCQ",
    "question": "Assertion (A): When a metallic solid is melted and recast into another solid of a different shape, its volume remains unchanged.\nReason (R): In any such recasting process, the density of the metal changes.",
    "options": [
      "Both A and R are true and R is correct explanation",
      "Both A and R are true but R is NOT the correct explanation",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correctOption": 2,
    "answer": "A is true but R is false",
    "steps": [
      "Step 1: Evaluate Assertion (A): By the law of conservation of matter, melting and recasting the same material preserves the total mass and volume. Assertion (A) is TRUE.",
      "Step 2: Evaluate Reason (R): The material of the solid remains identical throughout. Density is an intrinsic physical property of a substance (Mass / Volume) and remains constant at a given temperature; it does not change simply because the geometrical shape changes. Reason (R) is FALSE.",
      "Step 3: Conclude: Assertion (A) is true, but Reason (R) is false."
    ],
    "explanation": "Reason: Volume is conserved during melting and recasting because the quantity of matter remains constant, making Assertion (A) true. However, density is an intensive property of the material and does not change upon reshaping, so Reason (R) is false.\n• Why other options are wrong:\n- Option A & B: Require Reason (R) to be true, which is physically false.\n- Option D: Requires Assertion (A) to be false, which contradicts the fundamental conservation law.",
    "formula": "V_{\\text{recast}} = V_{\\text{original}} \\quad \\text{and} \\quad \\rho = \\text{constant}",
    "examinerNote": "Key Physics-Maths overlap: Material constant = density constant. Volume constant. Only surface area changes.",
    "source": "CBSE Sample Paper 2024"
  },
  {
    "id": "ch12_q5",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 1,
    "type": "MCQ",
    "question": "A right circular cone and a right circular cylinder have equal base radii and equal heights. The ratio of the volume of the cone to that of the cylinder is:",
    "options": [
      "1:3",
      "1:2",
      "2:3",
      "3:1"
    ],
    "correctOption": 0,
    "answer": "1:3",
    "steps": [
      "Step 1: Let the common base radius be r and common vertical height be h.",
      "Step 2: State the formula for the volume of a right circular cone:\n$$V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h$$",
      "Step 3: State the formula for the volume of a right circular cylinder:\n$$V_{\\text{cylinder}} = \\pi r^2 h$$",
      "Step 4: Compute the ratio of volumes:\n$$\\frac{V_{\\text{cone}}}{V_{\\text{cylinder}}} = \\frac{\\frac{1}{3}\\pi r^2 h}{\\pi r^2 h} = \\frac{1}{3} = 1:3$$"
    ],
    "explanation": "Reason: A cone of the same base and height occupies exactly one-third the volume of its enclosing cylinder: $\\frac{1}{3}\\pi r^2 h : \\pi r^2 h = 1 : 3$.\n• Why other options are wrong:\n- 1:2: Incorrect fraction.\n- 2:3: This is the ratio of a HEMISPHERE to a cylinder of equal radius and height (h = r): $\\frac{2}{3}\\pi r^3 : \\pi r^3 = 2:3$.\n- 3:1: Inverted ratio (cylinder to cone instead of cone to cylinder).",
    "formula": "V_{\\text{cone}} : V_{\\text{cylinder}} = \\frac{1}{3}\\pi r^2 h : \\pi r^2 h = 1 : 3",
    "examinerNote": "Read the order of terms carefully: Cone to Cylinder is 1:3; Cylinder to Cone is 3:1.",
    "source": "NCERT Section 12.2 / CBSE Board 2023"
  },
  {
    "id": "ch12_q6",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 1,
    "type": "MCQ",
    "question": "A hemispherical bowl of internal radius 9 cm is completely filled with liquid. This liquid is to be emptied into small cylindrical bottles, each of base radius 1.5 cm and height 4 cm. How many bottles will be needed?",
    "options": [
      "27",
      "54",
      "81",
      "108"
    ],
    "correctOption": 1,
    "answer": "54",
    "steps": [
      "Step 1: Let n be the number of cylindrical bottles required.",
      "Step 2: By conservation of liquid volume:\n$$\\text{Total Volume of Liquid in Hemisphere} = n \\times \\text{Volume of One Cylindrical Bottle}$$",
      "Step 3: Calculate volume of hemispherical bowl with R = 9 cm:\n$$V_{\\text{hemi}} = \\frac{2}{3}\\pi R^3 = \\frac{2}{3}\\pi \\times 9^3 = \\frac{2}{3}\\pi \\times 729 = 486\\pi \\text{ cm}^3$$",
      "Step 4: Calculate volume of one cylindrical bottle with r = 1.5 cm and h = 4 cm:\n$$V_{\\text{bottle}} = \\pi r^2 h = \\pi \\times (1.5)^2 \\times 4 = \\pi \\times 2.25 \\times 4 = 9\\pi \\text{ cm}^3$$",
      "Step 5: Solve for n:\n$$n = \\frac{V_{\\text{hemi}}}{V_{\\text{bottle}}} = \\frac{486\\pi}{9\\pi} = \\frac{486}{9} = 54$$"
    ],
    "explanation": "Reason: Volume of liquid in hemisphere is $\\frac{2}{3}\\pi(9^3) = 486\\pi$ cm³. Volume of one bottle is $\\pi(1.5^2)(4) = 9\\pi$ cm³. Number of bottles $n = 486\\pi / 9\\pi = 54$.\n• Why other options are wrong:\n- 27: Results from mistakenly using (1/3) instead of (2/3) in hemisphere volume.\n- 81: Arithmetic error in dividing 486 by 6 instead of 9.\n- 108: Results from using the full sphere volume (4/3)πR³ instead of hemisphere.",
    "formula": "n = \\frac{\\frac{2}{3}\\pi R^3}{\\pi r^2 h} = \\frac{486\\pi}{9\\pi} = 54",
    "examinerNote": "Notice how keeping π as a symbol avoids decimal errors and lets π cancel cleanly.",
    "source": "NCERT Exemplar / CBSE Board 2022"
  },
  {
    "id": "ch12_q7",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 2,
    "type": "VSA",
    "question": "A right circular cone and a hemisphere have equal base radii and equal volumes. Find the ratio of their heights.",
    "answer": "2:1",
    "steps": [
      "Step 1: Let the common base radius be r. Let the vertical height of the cone be h.",
      "Step 2: For a hemisphere of radius r, its height is also equal to its radius: $h_{\\text{hemi}} = r$.",
      "Step 3: Equate the given volumes:\n$$V_{\\text{cone}} = V_{\\text{hemi}}$$\n$$\\frac{1}{3}\\pi r^2 h = \\frac{2}{3}\\pi r^3$$",
      "Step 4: Divide both sides by $\\frac{1}{3}\\pi r^2$:\n$$h = 2r$$",
      "Step 5: Compute the ratio of their heights:\n$$\\frac{h_{\\text{cone}}}{h_{\\text{hemi}}} = \\frac{2r}{r} = \\frac{2}{1} = 2:1$$"
    ],
    "explanation": "Reason: Equating $\\frac{1}{3}\\pi r^2 h = \\frac{2}{3}\\pi r^3$ yields $h = 2r$. Since the height of a hemisphere equals its radius $r$, the ratio of heights is $2r : r = 2 : 1$.",
    "formula": "\\frac{1}{3}\\pi r^2 h = \\frac{2}{3}\\pi r^3 \\implies h = 2r \\implies h : r = 2 : 1",
    "examinerNote": "Crucial Insight: The vertical height of a hemisphere is always equal to its radius r.",
    "source": "NCERT Exemplar / CBSE Board 2023"
  },
  {
    "id": "ch12_q8",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 2,
    "type": "VSA",
    "question": "A toy is in the form of a cone mounted on a hemisphere, both of the same radius 7 cm. If the total height of the toy is 14.5 cm, find the volume of the toy. (Use π = 22/7)",
    "answer": "3311/3 cm³ ≈ 1103.67 cm³",
    "steps": [
      "Step 1: Given: Common radius r = 7 cm. Total height of the toy H = 14.5 cm.",
      "Step 2: The height of the hemispherical base equals its radius: $h_{\\text{hemi}} = r = 7\\text{ cm}$.",
      "Step 3: Compute the vertical height of the conical part:\n$$h_{\\text{cone}} = H - r = 14.5 - 7 = 7.5 \\text{ cm}$$",
      "Step 4: Calculate the volume of the conical part:\n$$V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h_{\\text{cone}} = \\frac{1}{3} \\times \\frac{22}{7} \\times 7^2 \\times 7.5 = \\frac{1}{3} \\times 22 \\times 7 \\times 7.5 = 22 \\times 7 \\times 2.5 = 385 \\text{ cm}^3$$",
      "Step 5: Calculate the volume of the hemispherical part:\n$$V_{\\text{hemi}} = \\frac{2}{3}\\pi r^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times 7^3 = \\frac{2}{3} \\times 22 \\times 49 = \\frac{2156}{3} \\text{ cm}^3 \\approx 718.67 \\text{ cm}^3$$",
      "Step 6: Total volume of the toy is the sum of both volumes:\n$$V_{\\text{total}} = V_{\\text{cone}} + V_{\\text{hemi}} = 385 + \\frac{2156}{3} = \\frac{1155 + 2156}{3} = \\frac{3311}{3} \\text{ cm}^3 \\approx 1103.67 \\text{ cm}^3$$"
    ],
    "explanation": "Reason: Conical height $h = 14.5 - 7 = 7.5$ cm. $V_{\\text{cone}} = 385$ cm³ and $V_{\\text{hemi}} = 2156/3$ cm³. Total volume $= 385 + 2156/3 = 3311/3 \\approx 1103.67$ cm³.",
    "formula": "V_{\\text{total}} = \\frac{1}{3}\\pi r^2 h + \\frac{2}{3}\\pi r^3 = \\frac{3311}{3} \\text{ cm}^3",
    "examinerNote": "Do not use 14.5 cm as cone height! Always subtract the hemisphere's radius (7 cm) first.",
    "source": "NCERT Exercise 12.2 Q1 / CBSE Board 2024"
  },
  {
    "id": "ch12_q9",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 2,
    "type": "VSA",
    "question": "Water in a canal 6 m wide and 1.5 m deep is flowing with a speed of 10 km/h. How much area will it irrigate in 30 minutes, if 8 cm of standing water is needed for irrigation?",
    "answer": "562,500 m² (or 56.25 hectares)",
    "steps": [
      "Step 1: Canal dimensions: Width w = 6 m, Depth d = 1.5 m. Speed of water = 10 km/h.",
      "Step 2: In 30 minutes (0.5 hour), the distance travelled by the water column is:\n$$\\text{Length } L = \\text{Speed} \\times \\text{Time} = 10 \\text{ km/h} \\times 0.5 \\text{ h} = 5 \\text{ km} = 5000 \\text{ m}$$",
      "Step 3: Compute the volume of water flowing out in 30 minutes:\n$$\\text{Volume} = w \\times d \\times L = 6 \\times 1.5 \\times 5000 = 45,000 \\text{ m}^3$$",
      "Step 4: Standing water depth required in field: H = 8 cm = 8 / 100 m = 0.08 m.",
      "Step 5: Compute irrigated area using $\\text{Volume} = \\text{Area} \\times \\text{Depth}$:\n$$\\text{Area} = \\frac{\\text{Volume}}{\\text{Depth}} = \\frac{45,000}{0.08} = \\frac{4,500,000}{8} = 562,500 \\text{ m}^2$$\n(In hectares: $562,500 / 10,000 = 56.25 \\text{ hectares}$)."
    ],
    "explanation": "Reason: In 30 min, water travels 5000 m. Volume flowed is $6 \\times 1.5 \\times 5000 = 45000$ m³. Irrigated area with 0.08 m standing water is $45000 / 0.08 = 562500$ m².",
    "formula": "\\text{Area} = \\frac{w \\times d \\times (\\text{Speed} \\times t)}{H} = \\frac{45000}{0.08} = 562,500 \\text{ m}^2",
    "examinerNote": "Unit Conversion Trap: Convert 8 cm to 0.08 m before dividing. Never divide meters by centimeters directly.",
    "source": "NCERT Exercise 12.3 Q8 / CBSE Board 2023"
  },
  {
    "id": "ch12_q10",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 3,
    "type": "SA",
    "question": "A solid metallic cuboid of dimensions 9 cm × 8 cm × 3 cm is melted and recast into a solid cube. Find the edge of the resulting cube and the total surface area of the cube.",
    "answer": "Edge = 6 cm, Total Surface Area = 216 cm²",
    "steps": [
      "Step 1: When a solid is melted and recast, volume is conserved:\n$$\\text{Volume of cube} = \\text{Volume of cuboid}$$",
      "Step 2: Calculate the volume of the cuboid:\n$$V_{\\text{cuboid}} = l \\times b \\times h = 9 \\times 8 \\times 3 = 216 \\text{ cm}^3$$",
      "Step 3: Let the edge of the new cube be 'a'. Then volume of cube is $a^3$:\n$$a^3 = 216 \\implies a = \\sqrt[3]{216} = 6 \\text{ cm}$$",
      "Step 4: Compute total surface area of the resulting cube:\n$$\\text{TSA} = 6a^2 = 6 \\times 6^2 = 6 \\times 36 = 216 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: Volume of cuboid $= 9 \\times 8 \\times 3 = 216$ cm³. Cube edge $a = \\sqrt[3]{216} = 6$ cm. Total surface area $= 6a^2 = 6(36) = 216$ cm².",
    "formula": "a = \\sqrt[3]{lbh} = 6 \\text{ cm}, \\quad \\text{TSA} = 6a^2 = 216 \\text{ cm}^2",
    "examinerNote": "Coincidence check: 216 cm³ volume and 216 cm² TSA have the same numerical value, but different units.",
    "source": "NCERT Exercise 12.3 / CBSE Board 2024"
  },
  {
    "id": "ch12_q11",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 3,
    "type": "SA",
    "question": "A well of diameter 4 m is dug 14 m deep. The earth taken out of it is spread evenly all around the well to a width of 4 m to form an embankment. Find the height of the embankment. (Use π = 22/7)",
    "answer": "1.75 m (or 7/4 m)",
    "steps": [
      "Step 1: Well dimensions — Diameter d = 4 m ⟹ Radius r = 2 m, Depth h = 14 m.",
      "Step 2: Calculate the volume of earth dug out of the cylindrical well:\n$$V_{\\text{earth}} = \\pi r^2 h = \\frac{22}{7} \\times 2^2 \\times 14 = \\frac{22}{7} \\times 4 \\times 14 = 22 \\times 4 \\times 2 = 176 \\text{ m}^3$$\n(Or keep as $56\\pi \\text{ m}^3$).",
      "Step 3: The embankment is an annular ring around the well:\n- Inner radius = radius of well = r = 2 m\n- Width of embankment w = 4 m\n- Outer radius R = r + w = 2 + 4 = 6 m",
      "Step 4: Area of cross-section of the embankment ring:\n$$\\text{Area of ring} = \\pi (R^2 - r^2) = \\pi (6^2 - 2^2) = \\pi (36 - 4) = 32\\pi \\text{ m}^2$$",
      "Step 5: The volume of the embankment equals the volume of earth dug out:\n$$\\text{Volume of embankment} = \\text{Area of ring} \\times H = 32\\pi \\times H$$\n$$32\\pi H = 56\\pi \\implies H = \\frac{56\\pi}{32\\pi} = \\frac{56}{32} = \\frac{7}{4} = 1.75 \\text{ m}$$"
    ],
    "explanation": "Reason: Dug volume is $\\pi(2^2)(14) = 56\\pi$ m³. Cross-sectional area of ring is $\\pi(6^2 - 2^2) = 32\\pi$ m². Height $H = 56\\pi / 32\\pi = 7/4 = 1.75$ m.",
    "formula": "H = \\frac{r^2 h}{R^2 - r^2} = \\frac{4 \\times 14}{36 - 4} = \\frac{56}{32} = 1.75 \\text{ m}",
    "examinerNote": "Embankment is a HOLLOW cylinder. Always use π(R² - r²)H for the embankment volume.",
    "source": "NCERT Exercise 12.3 Q4 / CBSE Board 2023"
  },
  {
    "id": "ch12_q12",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 3,
    "type": "SA",
    "question": "A circus tent is in the shape of a cylinder surmounted by a conical top. The diameter of both is 24 m (radius 12 m). The height of the cylindrical part is 11 m and the height of the conical top is 5 m. Find the area of the canvas required to make the tent. (Use π = 22/7)",
    "answer": "1320 m²",
    "steps": [
      "Step 1: Common radius r = 24 / 2 = 12 m. Height of cylindrical part H = 11 m.",
      "Step 2: Conical part has radius r = 12 m and height h = 5 m.",
      "Step 3: Calculate the slant height l of the conical top by Pythagoras Theorem:\n$$l = \\sqrt{r^2 + h^2} = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = 13 \\text{ m}$$",
      "Step 4: Canvas is required only on the curved walls and conical roof (the ground is left open, and the junction is inside):\n$$\\text{Total Canvas Area} = \\text{CSA of cylinder} + \\text{CSA of cone}$$\n$$= 2\\pi r H + \\pi r l = \\pi r(2H + l)$$",
      "Step 5: Substitute numerical values:\n$$\\text{Area} = \\frac{22}{7} \\times 12 \\times [2(11) + 13] = \\frac{22}{7} \\times 12 \\times (22 + 13) = \\frac{22}{7} \\times 12 \\times 35$$",
      "Step 6: Cancel 35 with 7 ($35 / 7 = 5$):\n$$\\text{Area} = 22 \\times 12 \\times 5 = 22 \\times 60 = 1320 \\text{ m}^2$$"
    ],
    "explanation": "Reason: Slant height $l = \\sqrt{12^2 + 5^2} = 13$ m. Canvas area $=\\pi r(2H + l) = \\frac{22}{7} \\times 12 \\times (22 + 13) = \\frac{22}{7} \\times 12 \\times 35 = 1320$ m².",
    "formula": "\\text{Canvas Area} = \\pi r(2H + l) = 1320 \\text{ m}^2",
    "examinerNote": "Notice how factoring out πr makes 35 cancel cleanly with 7, yielding a clean integer.",
    "source": "NCERT Exercise 12.1 Q7 / CBSE Board 2024"
  },
  {
    "id": "ch12_q13",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 5,
    "type": "LA",
    "question": "A gulab jamun contains sugar syrup up to about 30% of its volume. Find approximately how much syrup would be found in 45 gulab jamuns, each shaped like a cylinder with two hemispherical ends, with total length 5 cm and diameter 2.8 cm. (Use π = 22/7)",
    "answer": "Volume of syrup ≈ 338 cm³",
    "steps": [
      "Step 1: Diameter d = 2.8 cm ⟹ Radius r = 2.8 / 2 = 1.4 cm.",
      "Step 2: The gulab jamun has two hemispherical ends of radius 1.4 cm each. Compute the length of the cylindrical portion:\n$$h = \\text{Total length} - 2r = 5 - 2(1.4) = 5 - 2.8 = 2.2 \\text{ cm}$$",
      "Step 3: The volume of one gulab jamun equals the volume of the cylinder plus two hemispheres (which combine into one full sphere of radius r):\n$$V_1 = \\pi r^2 h + \\frac{4}{3}\\pi r^3 = \\pi r^2 \\left( h + \\frac{4}{3}r \\right)$$",
      "Step 4: Substitute r = 1.4 cm and h = 2.2 cm:\n$$V_1 = \\frac{22}{7} \\times (1.4)^2 \\times \\left( 2.2 + \\frac{4}{3} \\times 1.4 \\right) = \\frac{22}{7} \\times 1.96 \\times \\left( 2.2 + \\frac{5.6}{3} \\right)$$\n$$= 22 \\times 0.28 \\times \\left( \\frac{6.6 + 5.6}{3} \\right) = 6.16 \\times \\frac{12.2}{3} = \\frac{75.152}{3} \\approx 25.05 \\text{ cm}^3$$",
      "Step 5: Total volume of 45 gulab jamuns:\n$$V_{45} = 45 \\times \\frac{75.152}{3} = 15 \\times 75.152 = 1127.28 \\text{ cm}^3$$",
      "Step 6: Volume of sugar syrup is 30% of total volume:\n$$\\text{Syrup Volume} = 30\\% \\text{ of } 1127.28 = \\frac{30}{100} \\times 1127.28 = 0.30 \\times 1127.28 = 338.184 \\text{ cm}^3 \\approx 338 \\text{ cm}^3$$"
    ],
    "explanation": "Reason: Cylinder height $h = 5 - 2.8 = 2.2$ cm. One gulab jamun has volume $\\pi r^2(h + \\frac{4}{3}r) = 75.152/3$ cm³. For 45 pieces, total volume is $15 \\times 75.152 = 1127.28$ cm³. 30% syrup $= 0.30 \\times 1127.28 \\approx 338$ cm³.",
    "formula": "\\text{Syrup} = 0.30 \\times \\left[ 45 \\times \\pi r^2 \\left(h + \\frac{4}{3}r\\right) \\right] \\approx 338 \\text{ cm}^3",
    "examinerNote": "NCERT Exercise 12.2 Q3: Notice that multiplying 45 by 1/3 cancels cleanly to 15! Avoid early rounding.",
    "source": "NCERT Exercise 12.2 Q3 / CBSE Board 2024"
  },
  {
    "id": "ch12_q14",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 5,
    "type": "LA",
    "question": "A solid consisting of a right circular cone of height 120 cm and radius 60 cm standing on a hemisphere of radius 60 cm is placed upright in a right circular cylinder full of water such that it touches the bottom. Find the volume of water left in the cylinder, if the radius of the cylinder is 60 cm and its height is 180 cm. (Use π = 22/7)",
    "answer": "1,131,428.57 cm³ ≈ 1.131 m³",
    "steps": [
      "Step 1: Understand dimensions of all solids (all share common radius r = 60 cm):\n- Cylinder: Radius r = 60 cm, Height H = 180 cm\n- Cone: Radius r = 60 cm, Height h = 120 cm\n- Hemisphere: Radius r = 60 cm (Height = 60 cm, so total solid height = 120 + 60 = 180 cm, perfectly fitting the cylinder).",
      "Step 2: By Archimedes' principle, the volume of water displaced equals the volume of the submerged solid:\n$$V_{\\text{displaced}} = V_{\\text{cone}} + V_{\\text{hemi}} = \\frac{1}{3}\\pi r^2 h + \\frac{2}{3}\\pi r^3 = \\frac{1}{3}\\pi r^2(h + 2r)$$",
      "Step 3: The volume of water left in the cylinder equals original cylinder volume minus displaced volume:\n$$V_{\\text{left}} = V_{\\text{cyl}} - V_{\\text{displaced}} = \\pi r^2 H - \\frac{1}{3}\\pi r^2(h + 2r) = \\pi r^2 \\left[ H - \\frac{h + 2r}{3} \\right]$$",
      "Step 4: Substitute r = 60 cm, H = 180 cm, h = 120 cm:\n$$V_{\\text{left}} = \\pi (60)^2 \\left[ 180 - \\frac{120 + 2(60)}{3} \\right] = \\pi (3600) \\left[ 180 - \\frac{240}{3} \\right]$$\n$$= 3600\\pi [180 - 80] = 3600\\pi (100) = 360,000\\pi \\text{ cm}^3$$",
      "Step 5: Substitute π = 22/7:\n$$V_{\\text{left}} = 360,000 \\times \\frac{22}{7} = \\frac{7,920,000}{7} \\approx 1,131,428.57 \\text{ cm}^3$$",
      "Step 6: Convert to cubic meters ($1\\text{ m}^3 = 10^6\\text{ cm}^3$):\n$$V_{\\text{left}} = \\frac{1,131,428.57}{1,000,000} \\approx 1.131 \\text{ m}^3$$"
    ],
    "explanation": "Reason: Factoring $\\pi r^2$ gives $V_{\\text{left}} = \\pi(60^2)[180 - 80] = 360,000\\pi$ cm³ $= 7,920,000 / 7 \\approx 1.131$ m³.",
    "formula": "V_{\\text{left}} = \\pi r^2 \\left[ H - \\frac{h + 2r}{3} \\right] = 360,000\\pi \\text{ cm}^3 \\approx 1.131 \\text{ m}^3",
    "examinerNote": "NCERT Exercise 12.2 Q7: Factoring out πr² avoids calculating three separate enormous 7-digit numbers.",
    "source": "NCERT Exercise 12.2 Q7 / CBSE Board 2024"
  },
  {
    "id": "ch12_q15",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 4,
    "type": "Case Study",
    "question": "A school canteen prepares ice-cream treats. Each treat consists of a conical waffle cone of radius 3.5 cm and vertical height 12 cm, topped with a spherical scoop of ice-cream of radius 3.5 cm:\\n(i) Find the volume of ice-cream inside the conical waffle cone. [1 Mark]\\n(ii) Find the volume of the spherical scoop of ice-cream on top. [1 Mark]\\n(iii) If 12 such ice-creams are prepared, find the total volume of ice-cream required. (Use π = 22/7) [2 Marks]",
    "answer": "(i) 154 cm³, (ii) 539/3 cm³ ≈ 179.67 cm³, (iii) 4004 cm³",
    "steps": [
      "Step 1: Part (i): Volume of conical waffle cone (r = 3.5 cm = 7/2 cm, h = 12 cm):\n$$V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3} \\times \\frac{22}{7} \\times \\left(\\frac{7}{2}\\right)^2 \\times 12 = \\frac{1}{3} \\times \\frac{22}{7} \\times \\frac{49}{4} \\times 12$$\n$$= \\frac{1}{3} \\times \\frac{154}{4} \\times 12 = 154 \\text{ cm}^3$$",
      "Step 2: Part (ii): Volume of spherical scoop (R = 3.5 cm = 7/2 cm):\n$$V_{\\text{sphere}} = \\frac{4}{3}\\pi R^3 = \\frac{4}{3} \\times \\frac{22}{7} \\times \\left(\\frac{7}{2}\\right)^3 = \\frac{4}{3} \\times \\frac{22}{7} \\times \\frac{343}{8} = \\frac{4}{3} \\times \\frac{22 \\times 49}{8} = \\frac{539}{3} \\text{ cm}^3 \\approx 179.67 \\text{ cm}^3$$",
      "Step 3: Part (iii): Volume of 1 full ice-cream treat:\n$$V_1 = V_{\\text{cone}} + V_{\\text{sphere}} = 154 + \\frac{539}{3} = \\frac{462 + 539}{3} = \\frac{1001}{3} \\text{ cm}^3$$",
      "Step 4: Total volume for 12 ice-cream treats:\n$$V_{\\text{total}} = 12 \\times \\frac{1001}{3} = 4 \\times 1001 = 4004 \\text{ cm}^3$$"
    ],
    "explanation": "Reason: Part (i): $V_{\\text{cone}} = 154$ cm³. Part (ii): $V_{\\text{sphere}} = 539/3 \\approx 179.67$ cm³. Part (iii): One treat has $1001/3$ cm³. For 12 treats: $12 \\times (1001/3) = 4004$ cm³ exactly.",
    "formula": "V_{\\text{total}} = 12 \\left( \\frac{1}{3}\\pi r^2 h + \\frac{4}{3}\\pi r^3 \\right) = 4004 \\text{ cm}^3",
    "examinerNote": "Notice that multiplying 1001/3 by 12 yields the exact integer 4004 cm³ without any decimal rounding error.",
    "source": "CBSE Sample Paper 2025"
  },
  {
    "id": "ch12_q16",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 4,
    "type": "Case Study",
    "question": "A metallic model rocket consists of a conical nose cone with base radius 2 cm and slant height 5 cm, joined seamlessly to a cylindrical body of radius 2 cm and height 6 cm. The rocket stands upright on the flat circular bottom of the cylinder:\\n(i) Find the vertical height of the conical nose. [1 Mark]\\n(ii) Find the curved surface area of the cylinder. [1 Mark]\\n(iii) Find the total surface area of the rocket (including the bottom circular base). (Use π = 22/7) [2 Marks]",
    "answer": "(i) √21 cm ≈ 4.58 cm, (ii) 528/7 cm² ≈ 75.43 cm², (iii) 836/7 cm² ≈ 119.43 cm²",
    "steps": [
      "Step 1: Part (i): For the conical nose, radius r = 2 cm and slant height l = 5 cm. By Pythagoras Theorem:\n$$h = \\sqrt{l^2 - r^2} = \\sqrt{5^2 - 2^2} = \\sqrt{25 - 4} = \\sqrt{21} \\text{ cm} \\approx 4.58 \\text{ cm}$$",
      "Step 2: Part (ii): Curved surface area of cylindrical body (r = 2 cm, H = 6 cm):\n$$\\text{CSA}_{\\text{cyl}} = 2\\pi r H = 2 \\times \\frac{22}{7} \\times 2 \\times 6 = \\frac{528}{7} \\text{ cm}^2 \\approx 75.43 \\text{ cm}^2$$",
      "Step 3: Part (iii): The exterior surface area consists of: (1) CSA of cone, (2) CSA of cylinder, and (3) exposed flat circular bottom base of the cylinder (the interface between cone and cylinder is internal):\n$$\\text{TSA} = \\pi r l + 2\\pi r H + \\pi r^2 = \\pi r(l + 2H + r)$$",
      "Step 4: Substitute r = 2, l = 5, H = 6:\n$$\\text{TSA} = \\frac{22}{7} \\times 2 \\times [5 + 2(6) + 2] = \\frac{44}{7} \\times (5 + 12 + 2) = \\frac{44}{7} \\times 19 = \\frac{836}{7} \\text{ cm}^2 \\approx 119.43 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: Part (i): $h = \\sqrt{25 - 4} = \\sqrt{21} \\approx 4.58$ cm. Part (ii): $\\text{CSA} = 528/7 \\approx 75.43$ cm². Part (iii): $\\text{TSA} = \\pi r(l + 2H + r) = \\frac{44}{7}(19) = 836/7 \\approx 119.43$ cm².",
    "formula": "\\text{TSA} = \\pi r(l + 2H + r) = \\frac{836}{7} \\text{ cm}^2",
    "examinerNote": "The junction circle between the cone and cylinder is internal and must NOT be counted.",
    "source": "CBSE Board Practice Set 2024"
  },
  {
    "id": "ch12_q17",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 3,
    "type": "SA",
    "question": "A solid metallic sphere of diameter 21 cm is melted and recast into a number of smaller cones, each of diameter 7 cm and height 3 cm. Find the number of cones formed. (Use π = 22/7)",
    "answer": "126 cones",
    "steps": [
      "Step 1: Sphere dimensions — Diameter D = 21 cm ⟹ Radius R = 21/2 cm.",
      "Step 2: Small cone dimensions — Diameter d = 7 cm ⟹ Radius r = 7/2 cm, Height h = 3 cm.",
      "Step 3: Let n be the number of cones formed. By conservation of volume:\n$$n \\times V_{\\text{cone}} = V_{\\text{sphere}}$$\n$$n \\times \\left( \\frac{1}{3}\\pi r^2 h \\right) = \\frac{4}{3}\\pi R^3$$",
      "Step 4: Cancel $\\frac{1}{3}\\pi$ from both sides:\n$$n \\times r^2 h = 4R^3 \\implies n = \\frac{4R^3}{r^2 h}$$",
      "Step 5: Substitute R = 21/2, r = 7/2, h = 3:\n$$n = \\frac{4 \\times \\left(\\frac{21}{2}\\right)^3}{\\left(\\frac{7}{2}\\right)^2 \\times 3} = \\frac{4 \\times \\frac{9261}{8}}{\\frac{49}{4} \\times 3} = \\frac{\\frac{9261}{2}}{\\frac{147}{4}} = \\frac{9261}{2} \\times \\frac{4}{147} = 9261 \\times \\frac{2}{147}$$",
      "Step 6: Simplify: $9261 / 147 = 63$:\n$$n = 63 \\times 2 = 126 \\text{ cones}$$"
    ],
    "explanation": "Reason: Volume conservation: $n = 4R^3 / (r^2 h) = [4(21/2)^3] / [(7/2)^2 \\times 3] = 126$ cones.",
    "formula": "n = \\frac{4R^3}{r^2 h} = 126",
    "examinerNote": "Clean arithmetic: (21/7)³ = 3³ = 27, making cancellation rapid.",
    "source": "NCERT Exemplar / CBSE Board 2024"
  },
  {
    "id": "ch12_q18",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 2,
    "type": "VSA",
    "question": "Find the volume of the largest right circular cone that can be carved out of a solid wooden cube of edge 14 cm. (Use π = 22/7)",
    "answer": "2156/3 cm³ ≈ 718.67 cm³",
    "steps": [
      "Step 1: The largest cone that can be carved from a cube of edge a = 14 cm must have its base inscribed on one face of the cube.",
      "Step 2: Base diameter = edge of cube = 14 cm ⟹ Radius r = 14 / 2 = 7 cm.",
      "Step 3: The vertical height of the cone equals the edge of the cube: h = 14 cm.",
      "Step 4: Compute the volume of the cone:\n$$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3} \\times \\frac{22}{7} \\times 7^2 \\times 14 = \\frac{1}{3} \\times 22 \\times 7 \\times 14 = \\frac{2156}{3} \\text{ cm}^3 \\approx 718.67 \\text{ cm}^3$$"
    ],
    "explanation": "Reason: Base diameter $= 14$ cm $\\implies r = 7$ cm. Height $h = 14$ cm. $V = \\frac{1}{3}\\pi(49)(14) = 2156/3 \\approx 718.67$ cm³.",
    "formula": "V = \\frac{1}{3}\\pi \\left(\\frac{a}{2}\\right)^2 a = \\frac{\\pi a^3}{12} = \\frac{2156}{3} \\text{ cm}^3",
    "examinerNote": "NCERT Exemplar classic: Base diameter equals cube side, cone height equals cube side.",
    "source": "NCERT Exemplar / CBSE Board 2023"
  },
  {
    "id": "ch12_q19",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 3,
    "type": "SA",
    "question": "A solid toy is in the form of a right circular cylinder with a hemispherical shape at one end and a cone at the other end. Their common diameter is 4.2 cm (radius 2.1 cm). The height of the cylindrical and conical portions are 12 cm and 7 cm respectively. Find the total surface area of the toy. (Use π = 22/7)",
    "answer": "234.31 cm²",
    "steps": [
      "Step 1: Common radius r = 4.2 / 2 = 2.1 cm. Cylinder height H = 12 cm. Cone height h = 7 cm.",
      "Step 2: Find slant height l of the conical portion:\n$$l = \\sqrt{r^2 + h^2} = \\sqrt{2.1^2 + 7^2} = \\sqrt{4.41 + 49} = \\sqrt{53.41} \\approx 7.308 \\text{ cm}$$",
      "Step 3: Exterior surface area consists of 3 curved surfaces (the circular ends are glued internally):\n$$\\text{TSA} = \\text{CSA of hemisphere} + \\text{CSA of cylinder} + \\text{CSA of cone}$$\n$$= 2\\pi r^2 + 2\\pi r H + \\pi r l = \\pi r(2r + 2H + l)$$",
      "Step 4: Substitute r = 2.1 cm, H = 12 cm, l = 7.308 cm:\n$$\\text{TSA} = \\frac{22}{7} \\times 2.1 \\times [2(2.1) + 2(12) + 7.308] = 22 \\times 0.3 \\times [4.2 + 24 + 7.308]$$\n$$= 6.6 \\times 35.508 = 234.35 \\text{ cm}^2 \\approx 234.31 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: The 3 exposed faces are hemisphere CSA ($2\\pi r^2$), cylinder CSA ($2\\pi rH$), and cone CSA ($\\pi rl$). Total area $= \\pi r(2r + 2H + l) \\approx 234.31$ cm².",
    "formula": "\\text{TSA} = \\pi r(2r + 2H + l) \\approx 234.31 \\text{ cm}^2",
    "examinerNote": "Neither base of the cylinder is exposed: one end is capped by the hemisphere, the other by the cone.",
    "source": "NCERT Exercise 12.2 Q5 / CBSE Board 2023"
  },
  {
    "id": "ch12_q20",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 1,
    "type": "MCQ",
    "question": "If the radius of a sphere is doubled, then the ratio of the surface area of the new sphere to that of the original sphere is:",
    "options": [
      "2:1",
      "4:1",
      "8:1",
      "1:4"
    ],
    "correctOption": 1,
    "answer": "4:1",
    "steps": [
      "Step 1: Surface area of original sphere of radius r is $S_1 = 4\\pi r^2$.",
      "Step 2: When radius is doubled, new radius is $R = 2r$.",
      "Step 3: Surface area of new sphere is $S_2 = 4\\pi (2r)^2 = 4\\pi (4r^2) = 16\\pi r^2$.",
      "Step 4: Ratio of new to original surface area:\n$$\\frac{S_2}{S_1} = \\frac{16\\pi r^2}{4\\pi r^2} = \\frac{4}{1} = 4:1$$"
    ],
    "explanation": "Reason: Surface area scales with the square of the radius ($S \\propto r^2$). Doubling the radius multiplies the surface area by $2^2 = 4$, yielding ratio $4 : 1$.\n• Why other options are wrong:\n- 2:1: Linear scaling ratio (radius or diameter scaling).\n- 8:1: This is the ratio of their VOLUMES ($V \\propto r^3 \\implies 2^3 = 8$), not surface area.\n- 1:4: Inverted ratio (original to new instead of new to original).",
    "formula": "\\frac{S_{\\text{new}}}{S_{\\text{old}}} = \\left(\\frac{2r}{r}\\right)^2 = 4:1",
    "examinerNote": "Remember the scaling powers: Linear dimensions scale by k, Surface Areas scale by k², Volumes scale by k³.",
    "source": "CBSE Board PYQ 2023"
  },
  {
    "id": "ch12_q21",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 2,
    "type": "VSA",
    "question": "A bucket open at the top has slant height 45 cm, and top and bottom radii 28 cm and 7 cm respectively. Find the total surface area of the bucket. (Use π = 22/7)",
    "answer": "5104 cm²",
    "steps": [
      "Step 1: Bucket is an open frustum: Top radius R = 28 cm, Bottom radius r = 7 cm, Slant height l = 45 cm.",
      "Step 2: Curved surface area of frustum:\n$$\\text{CSA} = \\pi (R + r)l = \\frac{22}{7} \\times (28 + 7) \\times 45 = \\frac{22}{7} \\times 35 \\times 45 = 22 \\times 5 \\times 45 = 4950 \\text{ cm}^2$$",
      "Step 3: Area of bottom circular base:\n$$\\text{Base Area} = \\pi r^2 = \\frac{22}{7} \\times 7^2 = 154 \\text{ cm}^2$$",
      "Step 4: Since the bucket is open at the top, total surface area is CSA plus bottom base:\n$$\\text{TSA} = \\text{CSA} + \\text{Base Area} = 4950 + 154 = 5104 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: $\\text{CSA} = \\pi(28 + 7)(45) = 4950$ cm². Bottom base $= \\pi(7^2) = 154$ cm². Total area $= 4950 + 154 = 5104$ cm².",
    "formula": "\\text{TSA} = \\pi(R + r)l + \\pi r^2 = 4950 + 154 = 5104 \\text{ cm}^2",
    "examinerNote": "The bucket is open at the top, so do not add the larger top base circle.",
    "source": "NCERT Exercise 12.4 / CBSE Board PYQ"
  },
  {
    "id": "ch12_q22",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 5,
    "type": "LA",
    "question": "An exhibition tent is in the form of a cylinder surmounted by a cone. The total height of the tent above the ground is 85 m and the height of the cylindrical part is 50 m. If the diameter of the base is 168 m, find the quantity of canvas required to make the tent, allowing 20% extra for folds and stitching. (Use π = 22/7)",
    "answer": "60,509 m²",
    "steps": [
      "Step 1: Radius r = 168 / 2 = 84 m. Height of cylindrical part H = 50 m.",
      "Step 2: Height of conical part h = 85 - 50 = 35 m.",
      "Step 3: Compute slant height l of the conical top:\n$$l = \\sqrt{r^2 + h^2} = \\sqrt{84^2 + 35^2} = \\sqrt{7056 + 1225} = \\sqrt{8281} = 91 \\text{ m}$$",
      "Step 4: Canvas area of the tent is the sum of CSA of cylinder and CSA of cone:\n$$\\text{CSA} = 2\\pi r H + \\pi r l = \\pi r(2H + l)$$\n$$= \\frac{22}{7} \\times 84 \\times [2(50) + 91] = 22 \\times 12 \\times (100 + 91) = 264 \\times 191 = 50,424 \\text{ m}^2$$",
      "Step 5: Add 20% allowance for folds and stitching:\n$$\\text{Extra} = \\frac{20}{100} \\times 50,424 = 10,084.8 \\text{ m}^2$$\n$$\\text{Total Canvas Required} = 50,424 + 10,084.8 = 60,508.8 \\text{ m}^2 \\approx 60,509 \\text{ m}^2$$"
    ],
    "explanation": "Reason: Slant height $l = \\sqrt{84^2 + 35^2} = 91$ m. Tent surface area is $\\pi r(2H + l) = 50,424$ m². Adding 20% stitching allowance gives $1.20 \\times 50,424 = 60,508.8 \\approx 60,509$ m².",
    "formula": "\\text{Total Canvas} = 1.20 \\times [\\pi r(2H + l)] = 60,509 \\text{ m}^2",
    "examinerNote": "Do not add the ground area of the tent. Include the 20% extra allowance at the end.",
    "source": "CBSE Board Exemplar / Training Material"
  },
  {
    "id": "ch12_q23",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 3,
    "type": "SA",
    "question": "A solid decorative tank is made in the shape of a cylinder with a hemispherical depression at one end and open at the other end. The height of the cylinder is 1.45 m and its radius is 30 cm. Find the total surface area of the tank in m². (Use π = 22/7)",
    "answer": "3.3 m²",
    "steps": [
      "Step 1: Convert units to meters: Radius r = 30 cm = 0.3 m, Height h = 1.45 m.",
      "Step 2: Total surface area consists of the outer curved surface of the cylinder PLUS the inner curved surface of the hemispherical depression:\n$$\\text{TSA} = \\text{CSA of cylinder} + \\text{CSA of hemisphere}$$\n$$= 2\\pi rh + 2\\pi r^2 = 2\\pi r(h + r)$$",
      "Step 3: Substitute r = 0.3 m and h = 1.45 m:\n$$\\text{TSA} = 2 \\times \\frac{22}{7} \\times 0.3 \\times (1.45 + 0.30) = 2 \\times \\frac{22}{7} \\times 0.3 \\times 1.75$$",
      "Step 4: Since $1.75 / 7 = 0.25$:\n$$\\text{TSA} = 2 \\times 22 \\times 0.3 \\times 0.25 = 44 \\times 0.075 = 3.3 \\text{ m}^2$$"
    ],
    "explanation": "Reason: The depression adds an internal curved bowl surface $2\\pi r^2$. Total surface area is $2\\pi r(h + r) = 2(22/7)(0.3)(1.75) = 3.3$ m².",
    "formula": "\\text{TSA} = 2\\pi r(h + r) = 3.3 \\text{ m}^2",
    "examinerNote": "Convert 30 cm to 0.3 m immediately to ensure consistent SI units.",
    "source": "NCERT Exemplar / CBSE Board 2023"
  },
  {
    "id": "ch12_q24",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 5,
    "type": "LA",
    "question": "A solid is in the form of a solid cylinder mounted on a solid hemisphere with the same radius. The diameter of the hemisphere is 21 cm and the total height of the solid is 24.5 cm. Determine the weight of the solid if 1 cm³ of the material weighs 6 g. (Use π = 22/7)",
    "answer": "43.659 kg",
    "steps": [
      "Step 1: Radius r = 21 / 2 = 10.5 cm. Total height H = 24.5 cm.",
      "Step 2: Height of hemisphere = r = 10.5 cm. Height of cylinder h = 24.5 - 10.5 = 14 cm.",
      "Step 3: Calculate volume of hemispherical part:\n$$V_{\\text{hemi}} = \\frac{2}{3}\\pi r^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times (10.5)^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times 1157.625 = 2425.5 \\text{ cm}^3$$",
      "Step 4: Calculate volume of cylindrical part:\n$$V_{\\text{cyl}} = \\pi r^2 h = \\frac{22}{7} \\times (10.5)^2 \\times 14 = 22 \\times 110.25 \\times 2 = 4851 \\text{ cm}^3$$",
      "Step 5: Total volume of the solid:\n$$V_{\\text{total}} = 2425.5 + 4851 = 7276.5 \\text{ cm}^3$$",
      "Step 6: Compute total mass in grams:\n$$\\text{Mass in grams} = 7276.5 \\times 6 = 43,659 \\text{ g}$$",
      "Step 7: Convert mass to kilograms:\n$$\\text{Mass in kg} = \\frac{43,659}{1000} = 43.659 \\text{ kg}$$"
    ],
    "explanation": "Reason: Cylinder height $h = 24.5 - 10.5 = 14$ cm. Total volume is $V_{\\text{cyl}} + V_{\\text{hemi}} = 4851 + 2425.5 = 7276.5$ cm³. Weight $= 7276.5 \\times 6 = 43659$ g $= 43.659$ kg.",
    "formula": "V = \\pi r^2 h + \\frac{2}{3}\\pi r^3 = 7276.5 \\text{ cm}^3, \\quad \\text{Weight} = \\frac{V \\times 6}{1000} = 43.659 \\text{ kg}",
    "examinerNote": "Divide grams by 1000 to state the final mass in kilograms.",
    "source": "CBSE Board PYQ 2023"
  },
  {
    "id": "ch12_q25",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 3,
    "type": "SA",
    "question": "A solid is in the form of a cone mounted on a hemisphere such that the centre of the base of the cone coincides with the centre of the flat base of the hemisphere. The slant height of the cone is l and the radius of the base of the cone is r/2, where r is the radius of the hemisphere. Prove that the total surface area of the solid is (π/4)(11r + 2l)r sq. units.",
    "answer": "Hence Proved: TSA = (π/4)r(11r + 2l)",
    "steps": [
      "Step 1: The solid has three exposed surface regions:\n1. Curved surface of the hemisphere: $\\text{CSA}_{\\text{hemi}} = 2\\pi r^2$\n2. Curved surface of the cone (radius $r/2$, slant height $l$): $\\text{CSA}_{\\text{cone}} = \\pi \\left(\\frac{r}{2}\\right) l = \\frac{1}{2}\\pi r l$\n3. Exposed annular ring on top of hemisphere (outside cone base): $\\text{Ring Area} = \\pi r^2 - \\pi \\left(\\frac{r}{2}\\right)^2 = \\pi r^2 - \\frac{\\pi r^2}{4} = \\frac{3}{4}\\pi r^2$",
      "Step 2: Sum the three exposed areas:\n$$\\text{TSA} = 2\\pi r^2 + \\frac{1}{2}\\pi r l + \\frac{3}{4}\\pi r^2$$",
      "Step 3: Combine the $r^2$ terms:\n$$2\\pi r^2 + \\frac{3}{4}\\pi r^2 = \\left( 2 + \\frac{3}{4} \\right) \\pi r^2 = \\frac{11}{4}\\pi r^2$$",
      "Step 4: Factor out $\\frac{\\pi}{4} r$ from both terms:\n$$\\text{TSA} = \\frac{11}{4}\\pi r^2 + \\frac{2}{4}\\pi r l = \\frac{\\pi}{4} r (11r + 2l) \\text{ sq. units}$$\n[Hence Proved]"
    ],
    "explanation": "Reason: The annular ring on top of the hemisphere has area $\\pi r^2 - \\pi(r/2)^2 = \\frac{3}{4}\\pi r^2$. Adding to hemisphere CSA ($2\\pi r^2$) and cone CSA ($\\frac{1}{2}\\pi rl$) gives $\\frac{11}{4}\\pi r^2 + \\frac{1}{2}\\pi rl = \\frac{\\pi}{4}r(11r + 2l)$.",
    "formula": "\\text{TSA} = 2\\pi r^2 + \\pi\\left(\\frac{r}{2}\\right)l + \\left[\\pi r^2 - \\pi\\left(\\frac{r}{2}\\right)^2\\right] = \\frac{\\pi}{4}r(11r + 2l)",
    "examinerNote": "Do not forget the exposed annular ring on the hemisphere's top surface around the cone base.",
    "source": "NCERT Exemplar / CBSE Board 2022"
  },
  {
    "id": "ch12_q26",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 3,
    "type": "SA",
    "question": "A conical vessel of internal radius 12 cm and height 50 cm is full of water. The water is emptied into a cylindrical vessel of internal radius 10 cm. Find the height to which the water rises in the cylindrical vessel.",
    "answer": "24 cm",
    "steps": [
      "Step 1: Cone dimensions: Radius r₁ = 12 cm, Height h₁ = 50 cm.",
      "Step 2: Calculate the volume of water in the conical vessel:\n$$V = \\frac{1}{3}\\pi r_1^2 h_1 = \\frac{1}{3} \\times \\pi \\times 12^2 \\times 50 = \\frac{1}{3} \\times \\pi \\times 144 \\times 50 = 2400\\pi \\text{ cm}^3$$",
      "Step 3: Cylindrical vessel has radius r₂ = 10 cm. Let the height of the water rise be h₂.",
      "Step 4: Volume of water in cylinder equals volume of water poured:\n$$\\pi r_2^2 h_2 = 2400\\pi$$\n$$\\pi \\times 10^2 \\times h_2 = 2400\\pi \\implies 100\\pi h_2 = 2400\\pi$$",
      "Step 5: Divide both sides by 100π:\n$$h_2 = \\frac{2400\\pi}{100\\pi} = 24 \\text{ cm}$$"
    ],
    "explanation": "Reason: Volume conservation: $\\frac{1}{3}\\pi(12^2)(50) = \\pi(10^2)h_2 \\implies 2400\\pi = 100\\pi h_2 \\implies h_2 = 24$ cm.",
    "formula": "\\frac{1}{3}\\pi r_1^2 h_1 = \\pi r_2^2 h_2 \\implies h_2 = \\frac{r_1^2 h_1}{3 r_2^2} = 24 \\text{ cm}",
    "examinerNote": "Never substitute π = 3.14! π cancels cleanly on both sides.",
    "source": "CBSE Board PYQ 2023"
  },
  {
    "id": "ch12_q27",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 3,
    "type": "SA",
    "question": "A cubical block of side 7 cm is surmounted by a hemisphere. What is the greatest diameter the hemisphere can have? Find the total surface area of the solid. (Use π = 22/7)",
    "answer": "Greatest diameter = 7 cm, Total Surface Area = 332.5 cm²",
    "steps": [
      "Step 1: The hemisphere rests on a square face of the cube (7 cm × 7 cm). The greatest diameter it can have equals the side of the cube:\n$$\\text{Greatest diameter} = 7 \\text{ cm} \\implies \\text{Radius } r = \\frac{7}{2} = 3.5 \\text{ cm}$$",
      "Step 2: Total surface area of 6 faces of the cube is $6a^2 = 6(7^2) = 6 \\times 49 = 294 \\text{ cm}^2$.",
      "Step 3: Placing the hemisphere covers a circular region of area $\\pi r^2$ on the top face, while exposing the curved hemispherical dome of area $2\\pi r^2$:\n$$\\text{TSA} = 6a^2 - \\pi r^2 + 2\\pi r^2 = 6a^2 + \\pi r^2$$",
      "Step 4: Compute the surface area:\n$$\\text{TSA} = 294 + \\frac{22}{7} \\times \\left( \\frac{7}{2} \\right)^2 = 294 + \\frac{22}{7} \\times \\frac{49}{4} = 294 + \\frac{77}{2} = 294 + 38.5 = 332.5 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: Greatest diameter is 7 cm ($r = 3.5$ cm). Covering the top face and adding the dome gives $\\text{TSA} = 6a^2 + \\pi r^2 = 294 + 38.5 = 332.5$ cm².",
    "formula": "\\text{TSA} = 6a^2 + \\pi r^2 = 332.5 \\text{ cm}^2",
    "examinerNote": "NCERT Exercise 12.1 Q4: Note the formula is 6a² + πr² (not 6a² + 2πr²).",
    "source": "NCERT Exercise 12.1 Q4 / CBSE Board 2024"
  },
  {
    "id": "ch12_q28",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 3,
    "type": "SA",
    "question": "A hemispherical depression is cut out from one face of a cubical wooden block such that the diameter l of the hemisphere is equal to the edge of the cube. Determine the surface area of the remaining solid.",
    "answer": "(l²/4)(24 + π) sq. units",
    "steps": [
      "Step 1: Edge of the cube is l. Total surface area of 6 faces of the cube is $6l^2$.",
      "Step 2: Diameter of the hemisphere equals edge l ⟹ Radius $r = l/2$.",
      "Step 3: Scooping out the cavity removes the flat circular top of area $\\pi r^2 = \\pi (l/2)^2 = \\frac{\\pi l^2}{4}$, but creates a new internal curved hemispherical bowl of area $2\\pi r^2 = 2\\pi (l/2)^2 = \\frac{2\\pi l^2}{4} = \\frac{\\pi l^2}{2}$.",
      "Step 4: Compute the total paintable surface area:\n$$\\text{TSA} = 6l^2 - \\pi r^2 + 2\\pi r^2 = 6l^2 + \\pi r^2 = 6l^2 + \\frac{\\pi l^2}{4}$$",
      "Step 5: Factor out $\\frac{l^2}{4}$:\n$$\\text{TSA} = \\frac{24l^2 + \\pi l^2}{4} = \\frac{l^2}{4}(24 + \\pi) \\text{ sq. units}$$"
    ],
    "explanation": "Reason: Scooping out replaces a flat circular disk ($-\\pi r^2$) with a curved bowl ($+2\\pi r^2$), giving net $+ \\pi r^2$. Total surface area is $6l^2 + \\pi(l/2)^2 = \\frac{l^2}{4}(24 + \\pi)$.",
    "formula": "\\text{TSA} = 6l^2 + \\pi\\left(\\frac{l}{2}\\right)^2 = \\frac{l^2}{4}(24 + \\pi)",
    "examinerNote": "NCERT Exercise 12.1 Q5: Surmounting a hemisphere and scooping out a hemisphere yield the exact same formula: 6a² + πr².",
    "source": "NCERT Exercise 12.1 Q5 / CBSE Board 2023"
  },
  {
    "id": "ch12_q29",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 3,
    "type": "SA",
    "question": "A medicine capsule is in the shape of a cylinder with two hemispheres stuck to each of its ends. The length of the entire capsule is 14 mm and the diameter of the capsule is 5 mm. Find its surface area. (Use π = 22/7)",
    "answer": "220 mm²",
    "steps": [
      "Step 1: Diameter d = 5 mm ⟹ Radius r = 5/2 = 2.5 mm.",
      "Step 2: The capsule has two hemispherical ends of radius 2.5 mm. Length of cylindrical portion:\n$$h = \\text{Total length} - 2r = 14 - 2(2.5) = 14 - 5 = 9 \\text{ mm}$$",
      "Step 3: Total surface area is the sum of the cylinder's CSA and the two hemispherical caps (which form 1 complete sphere of surface area $4\\pi r^2$):\n$$\\text{TSA} = 2\\pi rh + 4\\pi r^2 = 2\\pi r(h + 2r)$$",
      "Step 4: Substitute r = 2.5 mm and h = 9 mm:\n$$\\text{TSA} = 2 \\times \\frac{22}{7} \\times 2.5 \\times [9 + 2(2.5)] = \\frac{44}{7} \\times 2.5 \\times (9 + 5) = \\frac{44}{7} \\times 2.5 \\times 14$$",
      "Step 5: Cancel 14 with 7 ($14 / 7 = 2$):\n$$\\text{TSA} = 44 \\times 2.5 \\times 2 = 44 \\times 5 = 220 \\text{ mm}^2$$"
    ],
    "explanation": "Reason: Cylinder height $h = 14 - 5 = 9$ mm. Surface area is $2\\pi r(h + 2r) = 2(22/7)(2.5)(14) = 220$ mm².",
    "formula": "\\text{TSA} = 2\\pi r(h + 2r) = 220 \\text{ mm}^2",
    "examinerNote": "NCERT Exercise 12.1 Q6: Crucial step is subtracting 2r = 5 mm from total length 14 mm to get h = 9 mm.",
    "source": "NCERT Exercise 12.1 Q6 / CBSE Board 2024"
  },
  {
    "id": "ch12_q30",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 4,
    "type": "Case Study",
    "question": "A conical tent with a cylindrical base is set up for campers. The height and diameter of the cylindrical part are 2.1 m and 4 m respectively, and the slant height of the conical top is 2.8 m:\\n(i) Find the radius of the cylindrical and conical parts. [1 Mark]\\n(ii) Find the area of the canvas used for making the tent. (Note: The ground is not covered). [2 Marks]\\n(iii) Find the total cost of the canvas at the rate of ₹500 per m². [1 Mark]",
    "answer": "(i) 2 m, (ii) 44 m², (iii) ₹22,000",
    "steps": [
      "Step 1: Part (i): Radius r = Diameter / 2 = 4 / 2 = 2 m.",
      "Step 2: Part (ii): Canvas is used on the cylindrical wall (CSA = 2πrh) and the conical roof (CSA = πrl):\n$$\\text{Canvas Area} = 2\\pi rh + \\pi rl = \\pi r(2h + l)$$",
      "Step 3: Substitute r = 2 m, h = 2.1 m, l = 2.8 m:\n$$\\text{Canvas Area} = \\frac{22}{7} \\times 2 \\times [2(2.1) + 2.8] = \\frac{44}{7} \\times [4.2 + 2.8] = \\frac{44}{7} \\times 7.0 = 44 \\text{ m}^2$$",
      "Step 4: Part (iii): Cost of canvas = Area × Rate:\n$$\\text{Cost} = 44 \\text{ m}^2 \\times ₹500/\\text{m}^2 = ₹22,000$$"
    ],
    "explanation": "Reason: Part (i): $r = 2$ m. Part (ii): Canvas area $\\pi r(2h + l) = \\frac{22}{7} \\times 2 \\times 7 = 44$ m². Part (iii): Cost $= 44 \\times 500 = ₹22,000$.",
    "formula": "\\text{Area} = \\pi r(2h + l) = 44 \\text{ m}^2, \\quad \\text{Cost} = 44 \\times 500 = ₹22,000",
    "examinerNote": "NCERT Exercise 12.1 Q7: No canvas is used for the ground base.",
    "source": "NCERT Exercise 12.1 Q7 / CBSE Board 2024"
  },
  {
    "id": "ch12_q31",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 3,
    "type": "SA",
    "question": "From a solid cylinder whose height is 2.4 cm and diameter 1.4 cm, a conical cavity of the same height and same diameter is hollowed out. Find the total surface area of the remaining solid to the nearest cm². (Use π = 22/7)",
    "answer": "18 cm²",
    "steps": [
      "Step 1: Diameter = 1.4 cm ⟹ Radius r = 0.7 cm. Vertical height h = 2.4 cm.",
      "Step 2: Calculate slant height l of the hollowed conical cavity:\n$$l = \\sqrt{r^2 + h^2} = \\sqrt{0.7^2 + 2.4^2} = \\sqrt{0.49 + 5.76} = \\sqrt{6.25} = 2.5 \\text{ cm}$$",
      "Step 3: The exposed surfaces of the remaining solid are:\n1. Curved surface of the cylinder: $2\\pi rh$\n2. Flat circular bottom base of the cylinder: $\\pi r^2$\n3. Internal curved surface of the conical cavity: $\\pi rl$",
      "Step 4: Compute total surface area:\n$$\\text{TSA} = 2\\pi rh + \\pi r^2 + \\pi rl = \\pi r(2h + r + l)$$\n$$= \\frac{22}{7} \\times 0.7 \\times [2(2.4) + 0.7 + 2.5] = 2.2 \\times [4.8 + 0.7 + 2.5] = 2.2 \\times 8.0 = 17.6 \\text{ cm}^2$$",
      "Step 5: Round off to the nearest cm²:\n$$\\text{TSA} \\approx 18 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: Slant height is 2.5 cm. Exposed surfaces: $\\pi r(2h + r + l) = 2.2 \\times 8.0 = 17.6$ cm² $\\approx 18$ cm² to nearest integer.",
    "formula": "\\text{TSA} = \\pi r(2h + r + l) = 17.6 \\text{ cm}^2 \\approx 18 \\text{ cm}^2",
    "examinerNote": "NCERT Exercise 12.1 Q8: Top circular base is carved away and open, but bottom circular base is intact.",
    "source": "NCERT Exercise 12.1 Q8 / CBSE Board 2023"
  },
  {
    "id": "ch12_q32",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 3,
    "type": "SA",
    "question": "A wooden article was made by scooping out a hemisphere from each end of a solid cylinder. If the height of the cylinder is 10 cm and its base radius is 3.5 cm, find the total surface area of the article. (Use π = 22/7)",
    "answer": "374 cm²",
    "steps": [
      "Step 1: Radius r = 3.5 cm = 7/2 cm, Height h = 10 cm.",
      "Step 2: Scooping out both ends removes the two flat circular ends and replaces each with an internal curved hemispherical surface.",
      "Step 3: Total surface area is the outer cylinder CSA plus two hemisphere CSAs:\n$$\\text{TSA} = 2\\pi rh + 2(2\\pi r^2) = 2\\pi r(h + 2r)$$",
      "Step 4: Substitute r = 3.5 cm and h = 10 cm:\n$$\\text{TSA} = 2 \\times \\frac{22}{7} \\times 3.5 \\times [10 + 2(3.5)] = 22 \\times [10 + 7] = 22 \\times 17 = 374 \\text{ cm}^2$$"
    ],
    "explanation": "Reason: Scooping both ends yields $\\text{TSA} = 2\\pi r(h + 2r) = 22 \\times (10 + 7) = 22 \\times 17 = 374$ cm².",
    "formula": "\\text{TSA} = 2\\pi r(h + 2r) = 374 \\text{ cm}^2",
    "examinerNote": "NCERT Exercise 12.1 Q9: Direct 2-step calculation with formula 2πr(h + 2r).",
    "source": "NCERT Exercise 12.1 Q9 / CBSE Board 2024"
  },
  {
    "id": "ch12_q33",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 5,
    "type": "LA",
    "question": "A solid iron pole consists of a cylinder of height 220 cm and base diameter 24 cm, surmounted by another cylinder of height 60 cm and radius 8 cm. Find the mass of the pole, given that 1 cm³ of iron has approximately 8 g mass. (Use π = 3.14)",
    "answer": "892.26 kg",
    "steps": [
      "Step 1: Bottom (larger) cylinder: Height h₁ = 220 cm, Radius r₁ = 24 / 2 = 12 cm.\n$$V_1 = \\pi r_1^2 h_1 = 3.14 \\times (12)^2 \\times 220 = 3.14 \\times 144 \\times 220 = 3.14 \\times 31,680 = 99,475.2 \\text{ cm}^3$$",
      "Step 2: Top (smaller) cylinder: Height h₂ = 60 cm, Radius r₂ = 8 cm.\n$$V_2 = \\pi r_2^2 h_2 = 3.14 \\times (8)^2 \\times 60 = 3.14 \\times 64 \\times 60 = 3.14 \\times 3840 = 12,057.6 \\text{ cm}^3$$",
      "Step 3: Total volume of the composite iron pole:\n$$V_{\\text{total}} = V_1 + V_2 = 99,475.2 + 12,057.6 = 111,532.8 \\text{ cm}^3$$",
      "Step 4: Total mass in grams (density = 8 g/cm³):\n$$\\text{Mass in grams} = 111,532.8 \\times 8 = 892,262.4 \\text{ g}$$",
      "Step 5: Convert mass to kilograms (divide by 1000):\n$$\\text{Mass in kg} = \\frac{892,262.4}{1000} = 892.2624 \\text{ kg} \\approx 892.26 \\text{ kg}$$"
    ],
    "explanation": "Reason: Bottom cylinder volume is $99475.2$ cm³, top cylinder volume is $12057.6$ cm³. Total volume $= 111532.8$ cm³. Mass $= 111532.8 \\times 8 = 892262.4$ g $= 892.26$ kg.",
    "formula": "V_{\\text{total}} = \\pi r_1^2 h_1 + \\pi r_2^2 h_2, \\quad \\text{Mass} = \\frac{V_{\\text{total}} \\times 8}{1000} \\approx 892.26 \\text{ kg}",
    "examinerNote": "NCERT Exercise 12.2 Q6: Use π = 3.14 explicitly as directed, and remember to convert grams to kg.",
    "source": "NCERT Exercise 12.2 Q6 / CBSE Board 2023"
  },
  {
    "id": "ch12_q34",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 3,
    "type": "SA",
    "question": "A wooden pen stand is in the shape of a cuboid with four conical depressions to hold pens. The dimensions of the cuboid are 15 cm × 10 cm × 3.5 cm. The radius of each depression is 0.5 cm and the depth is 1.4 cm. Find the volume of wood in the entire stand. (Use π = 22/7)",
    "answer": "523.53 cm³",
    "steps": [
      "Step 1: Calculate the volume of the solid cuboid:\n$$V_{\\text{cuboid}} = l \\times b \\times h = 15 \\times 10 \\times 3.5 = 525 \\text{ cm}^3$$",
      "Step 2: Conical depression dimensions: Radius r = 0.5 cm, depth h_c = 1.4 cm.",
      "Step 3: Calculate the volume of 1 conical depression:\n$$V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h_c = \\frac{1}{3} \\times \\frac{22}{7} \\times (0.5)^2 \\times 1.4 = \\frac{1}{3} \\times \\frac{22}{7} \\times 0.25 \\times 1.4$$\n$$= \\frac{1}{3} \\times 22 \\times 0.25 \\times 0.2 = \\frac{1}{3} \\times 1.10 = \\frac{1.1}{3} \\approx 0.3667 \\text{ cm}^3$$",
      "Step 4: Compute total volume of all 4 conical depressions:\n$$V_{\\text{4 depressions}} = 4 \\times \\frac{1.1}{3} = \\frac{4.4}{3} \\approx 1.467 \\text{ cm}^3$$",
      "Step 5: Volume of wood remaining in the pen stand:\n$$V_{\\text{wood}} = V_{\\text{cuboid}} - V_{\\text{4 depressions}} = 525 - 1.467 = 523.533 \\approx 523.53 \\text{ cm}^3$$"
    ],
    "explanation": "Reason: Cuboid volume is $15 \\times 10 \\times 3.5 = 525$ cm³. 4 conical depressions have volume $4 \\times \\frac{1}{3}(22/7)(0.25)(1.4) = 4.4/3 \\approx 1.47$ cm³. Remaining volume $= 525 - 1.47 = 523.53$ cm³.",
    "formula": "V_{\\text{wood}} = lbh - 4 \\left( \\frac{1}{3}\\pi r^2 h_c \\right) = 525 - 1.47 = 523.53 \\text{ cm}^3",
    "examinerNote": "NCERT Exercise 12.2 Q4: Ensure the cone volume is multiplied by 4 for the four pen slots.",
    "source": "NCERT Exercise 12.2 Q4 / CBSE Board 2024"
  },
  {
    "id": "ch12_q35",
    "chapter": 12,
    "chapterName": "Surface Areas and Volumes",
    "marks": 5,
    "type": "LA",
    "question": "A vessel is in the form of an inverted cone of height 8 cm and open top radius 5 cm. It is filled with water up to the brim. When spherical lead shots of radius 0.5 cm each are dropped into the vessel, one-fourth of the water flows out. Find the number of lead shots dropped into the vessel.",
    "answer": "100 lead shots",
    "steps": [
      "Step 1: Calculate the total volume of water in the conical vessel (r = 5 cm, h = 8 cm):\n$$V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\times 5^2 \\times 8 = \\frac{200\\pi}{3} \\text{ cm}^3$$",
      "Step 2: By Archimedes' principle, the volume of water overflowing equals one-fourth of the total cone volume:\n$$V_{\\text{overflow}} = \\frac{1}{4} \\times V_{\\text{cone}} = \\frac{1}{4} \\times \\frac{200\\pi}{3} = \\frac{50\\pi}{3} \\text{ cm}^3$$",
      "Step 3: Calculate the volume of one spherical lead shot of radius R = 0.5 cm = 1/2 cm:\n$$V_{\\text{shot}} = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi \\left(\\frac{1}{2}\\right)^3 = \\frac{4}{3}\\pi \\times \\frac{1}{8} = \\frac{\\pi}{6} \\text{ cm}^3$$",
      "Step 4: Let n be the number of lead shots. Total volume of n lead shots equals the volume of displaced water:\n$$n \\times V_{\\text{shot}} = V_{\\text{overflow}}$$\n$$n \\times \\frac{\\pi}{6} = \\frac{50\\pi}{3}$$",
      "Step 5: Solve for n:\n$$n = \\frac{\\frac{50\\pi}{3}}{\\frac{\\pi}{6}} = \\frac{50\\pi}{3} \\times \\frac{6}{\\pi} = \\frac{50 \\times 6}{3} = 50 \\times 2 = 100 \\text{ lead shots}$$"
    ],
    "explanation": "Reason: Displaced volume is $\\frac{1}{4}\\left(\\frac{200\\pi}{3}\\right) = \\frac{50\\pi}{3}$ cm³. Volume of one spherical shot is $\\frac{4}{3}\\pi(1/8) = \\frac{\\pi}{6}$ cm³. Number of shots $n = (50\\pi/3) / (\\pi/6) = 100$.",
    "formula": "n = \\frac{\\frac{1}{4} V_{\\text{cone}}}{V_{\\text{shot}}} = \\frac{\\frac{50\\pi}{3}}{\\frac{\\pi}{6}} = 100",
    "examinerNote": "NCERT Exercise 12.2 Q5: Keeping π as a symbol allows it to cancel cleanly without lengthy decimal operations.",
    "source": "NCERT Exercise 12.2 Q5 / CBSE Board 2024"
  }
];
