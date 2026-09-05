// =========================================================================
// CBSE Class 10 Mathematics — Official Board Solved Examples with Step Marking Schemes
// Standard: CBSE Official Marking Scheme (Code 041) 2026-2027
// Every question features precise step-by-step marks distribution
// =========================================================================

export interface MathBoardSolvedExample {
  id: string;
  chapterNo: number;
  level: "1 Mark (MCQ / Objective)" | "2 Marks (Very Short Answer)" | "3 Marks (Short Answer)" | "5 Marks (Long Answer / Proof)" | "4 Marks (Case Study)";
  marks: number;
  question: string;
  options?: string[];
  correctOptionIndex?: number;
  markingSchemeSteps: {
    stepNo: number;
    description: string;
    marksAwarded: string;
  }[];
  finalAnswer: string;
  examinerTrap?: string;
}

export const MATH_BOARD_SOLVED_EXAMPLES: MathBoardSolvedExample[] = [
  // CHAPTER 1: REAL NUMBERS
  {
    id: "m_ex_1_1",
    chapterNo: 1,
    level: "3 Marks (Short Answer)",
    marks: 3,
    question: "Prove that √5 is an irrational number.",
    markingSchemeSteps: [
      {
        stepNo: 1,
        description: "Let √5 be rational. Then √5 = a/b, where a and b are co-prime positive integers (b ≠ 0).",
        marksAwarded: "0.5 Mark"
      },
      {
        stepNo: 2,
        description: "Squaring both sides: 5 = a²/b² ⟹ a² = 5b². Since 5 divides a², by Theorem 1.2, 5 divides a.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 3,
        description: "Substitute a = 5c for some integer c: (5c)² = 5b² ⟹ 25c² = 5b² ⟹ b² = 5c². Thus 5 divides b² ⟹ 5 divides b.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 4,
        description: "Both a and b share a common factor 5, contradicting that a and b are co-prime. Hence, our assumption is false and √5 is irrational.",
        marksAwarded: "0.5 Mark"
      }
    ],
    finalAnswer: "Hence Proved: √5 is irrational.",
    examinerTrap: "Omitting the declaration that 'a and b are co-prime integers' loses 0.5 mark immediately in Step 1."
  },
  {
    id: "m_ex_1_2",
    chapterNo: 1,
    level: "2 Marks (Very Short Answer)",
    marks: 2,
    question: "If HCF(306, 657) = 9, find LCM(306, 657).",
    markingSchemeSteps: [
      {
        stepNo: 1,
        description: "We know that for any two positive integers a and b: HCF(a, b) × LCM(a, b) = a × b.",
        marksAwarded: "0.5 Mark"
      },
      {
        stepNo: 2,
        description: "Substitute given values: 9 × LCM(306, 657) = 306 × 657 ⟹ LCM = (306 × 657) / 9.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 3,
        description: "Calculation: LCM = 34 × 657 = 22,338.",
        marksAwarded: "0.5 Mark"
      }
    ],
    finalAnswer: "LCM(306, 657) = 22,338",
    examinerTrap: "Never use prime tree for this when HCF is already provided; doing prime factorization wastes 5 minutes."
  },

  // CHAPTER 2: POLYNOMIALS
  {
    id: "m_ex_2_1",
    chapterNo: 2,
    level: "3 Marks (Short Answer)",
    marks: 3,
    question: "Find the zeroes of the quadratic polynomial f(x) = 6x² - 3 - 7x and verify the relationship between zeroes and coefficients.",
    markingSchemeSteps: [
      {
        stepNo: 1,
        description: "Rearrange in standard form: f(x) = 6x² - 7x - 3 = 6x² - 9x + 2x - 3 = 3x(2x - 3) + 1(2x - 3) = (2x - 3)(3x + 1).",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 2,
        description: "Equate to zero: Zeroes are α = 3/2 and β = -1/3.",
        marksAwarded: "0.5 Mark"
      },
      {
        stepNo: 3,
        description: "Verification 1: Sum of zeroes = α + β = 3/2 - 1/3 = 7/6 = -(-7)/6 = -(coeff of x)/(coeff of x²).",
        marksAwarded: "0.75 Mark"
      },
      {
        stepNo: 4,
        description: "Verification 2: Product of zeroes = αβ = (3/2)(-1/3) = -3/6 = (constant term)/(coeff of x²).",
        marksAwarded: "0.75 Mark"
      }
    ],
    finalAnswer: "Zeroes: x = 3/2, -1/3. Relationship successfully verified.",
    examinerTrap: "Forgetting to rearrange 6x² - 3 - 7x into standard form ax² + bx + c leads to taking b = -3 and c = -7!"
  },

  // CHAPTER 3: LINEAR EQUATIONS
  {
    id: "m_ex_3_1",
    chapterNo: 3,
    level: "3 Marks (Short Answer)",
    marks: 3,
    question: "Solve the following pair of linear equations by elimination method: 3x + 4y = 10 and 2x - 2y = 2.",
    markingSchemeSteps: [
      {
        stepNo: 1,
        description: "Multiply second equation by 2: 4x - 4y = 4. Add to first equation: (3x + 4y) + (4x - 4y) = 10 + 4 ⟹ 7x = 14.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 2,
        description: "Solve for x: x = 14 / 7 = 2.",
        marksAwarded: "0.5 Mark"
      },
      {
        stepNo: 3,
        description: "Substitute x = 2 into second equation: 2(2) - 2y = 2 ⟹ 4 - 2y = 2 ⟹ 2y = 2 ⟹ y = 1.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 4,
        description: "Boxed final solution: [ x = 2, y = 1 ].",
        marksAwarded: "0.5 Mark"
      }
    ],
    finalAnswer: "x = 2, y = 1",
    examinerTrap: "Failure to state which method is being applied when question specifies 'by elimination method'."
  },

  // CHAPTER 4: QUADRATIC EQUATIONS
  {
    id: "m_ex_4_1",
    chapterNo: 4,
    level: "5 Marks (Long Answer / Proof)",
    marks: 5,
    question: "A motor boat whose speed is 18 km/h in still water takes 1 hour more to go 24 km upstream than to return downstream to the same spot. Find the speed of the stream.",
    markingSchemeSteps: [
      {
        stepNo: 1,
        description: "Let speed of the stream be x km/h (where x < 18). Speed upstream = (18 - x) km/h; Speed downstream = (18 + x) km/h.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 2,
        description: "Time upstream = 24/(18 - x); Time downstream = 24/(18 + x). According to problem: 24/(18 - x) - 24/(18 + x) = 1.",
        marksAwarded: "1.5 Marks"
      },
      {
        stepNo: 3,
        description: "Simplify: 24[(18 + x) - (18 - x)] / [(18 - x)(18 + x)] = 1 ⟹ 24(2x) / (324 - x²) = 1 ⟹ 48x = 324 - x² ⟹ x² + 48x - 324 = 0.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 4,
        description: "Factorise: (x + 54)(x - 6) = 0 ⟹ x = 6 or x = -54. Since speed cannot be negative, reject x = -54.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 5,
        description: "State final result clearly with units in box: Speed of stream = [ 6 km/h ].",
        marksAwarded: "0.5 Mark"
      }
    ],
    finalAnswer: "Speed of the stream = 6 km/h",
    examinerTrap: "Writing (x - 18) instead of (18 - x) for upstream speed. Boat speed must be greater than stream speed!"
  },

  // CHAPTER 5: ARITHMETIC PROGRESSIONS
  {
    id: "m_ex_5_1",
    chapterNo: 5,
    level: "4 Marks (Case Study)",
    marks: 4,
    question: "In a potato race, a bucket is placed at the starting point, which is 5 m from the first potato, and other potatoes are placed 3 m apart in a straight line. There are 10 potatoes. A competitor picks each potato and runs back to drop it in the bucket. Find the total distance the competitor has to run.",
    markingSchemeSteps: [
      {
        stepNo: 1,
        description: "Distance for 1st potato = 2 × 5 = 10 m; for 2nd potato = 2 × (5 + 3) = 16 m; for 3rd potato = 2 × (5 + 3 + 3) = 22 m.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 2,
        description: "The sequence formed is an AP: 10, 16, 22, ... with first term a = 10, common difference d = 16 - 10 = 6, and n = 10.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 3,
        description: "Total distance S₁₀ = (n/2)[2a + (n - 1)d] = (10/2)[2(10) + (10 - 1)(6)].",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 4,
        description: "Calculation: S₁₀ = 5[20 + 54] = 5[74] = 370 meters.",
        marksAwarded: "1.0 Mark"
      }
    ],
    finalAnswer: "Total distance run = 370 meters",
    examinerTrap: "Forgetting to multiply by 2 for the round-trip (running to potato and running back to bucket)."
  },

  // CHAPTER 6: TRIANGLES
  {
    id: "m_ex_6_1",
    chapterNo: 6,
    level: "5 Marks (Long Answer / Proof)",
    marks: 5,
    question: "State and prove Basic Proportionality Theorem (Thales Theorem).",
    markingSchemeSteps: [
      {
        stepNo: 1,
        description: "Statement: If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.",
        marksAwarded: "0.5 Mark"
      },
      {
        stepNo: 2,
        description: "Given: In △ABC, DE ∥ BC intersecting AB at D and AC at E. To Prove: AD/DB = AE/EC. Construction: Join BE and CD; Draw DM ⊥ AC and EN ⊥ AB.",
        marksAwarded: "1.5 Marks"
      },
      {
        stepNo: 3,
        description: "Area(△ADE) = (1/2) × AD × EN and Area(△BDE) = (1/2) × DB × EN ⟹ Area(△ADE)/Area(△BDE) = AD/DB. (Eq 1)",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 4,
        description: "Area(△ADE) = (1/2) × AE × DM and Area(△DEC) = (1/2) × EC × DM ⟹ Area(△ADE)/Area(△DEC) = AE/EC. (Eq 2)",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 5,
        description: "△BDE and △DEC are on the same base DE and between same parallels DE and BC ⟹ Area(△BDE) = Area(△DEC). Hence from (1) and (2): AD/DB = AE/EC. [Q.E.D.]",
        marksAwarded: "1.0 Mark"
      }
    ],
    finalAnswer: "Basic Proportionality Theorem Successfully Proved: AD/DB = AE/EC",
    examinerTrap: "Drawing diagram without a ruler or forgetting to state why Area(△BDE) = Area(△DEC) costs 1.0 full mark."
  },

  // CHAPTER 7: COORDINATE GEOMETRY
  {
    id: "m_ex_7_1",
    chapterNo: 7,
    level: "3 Marks (Short Answer)",
    marks: 3,
    question: "Find the ratio in which the y-axis divides the line segment joining the points (5, -6) and (-1, -4). Also find the point of intersection.",
    markingSchemeSteps: [
      {
        stepNo: 1,
        description: "Let the y-axis divide the segment in ratio k : 1. Any point on the y-axis has x-coordinate = 0, so P = (0, y).",
        marksAwarded: "0.5 Mark"
      },
      {
        stepNo: 2,
        description: "By Section Formula for x: 0 = [k(-1) + 1(5)] / (k + 1) ⟹ -k + 5 = 0 ⟹ k = 5. Ratio is 5 : 1.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 3,
        description: "Find y-coordinate using k = 5: y = [5(-4) + 1(-6)] / (5 + 1) = (-20 - 6) / 6 = -26/6 = -13/3.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 4,
        description: "Point of intersection: P(0, -13/3).",
        marksAwarded: "0.5 Mark"
      }
    ],
    finalAnswer: "Ratio = 5 : 1; Point of Intersection = (0, -13/3)",
    examinerTrap: "Setting y = 0 instead of x = 0! Remember: On y-axis, x = 0; on x-axis, y = 0."
  },

  // CHAPTER 8: TRIGONOMETRY
  {
    id: "m_ex_8_1",
    chapterNo: 8,
    level: "3 Marks (Short Answer)",
    marks: 3,
    question: "Prove that: (sin A + cosec A)² + (cos A + sec A)² = 7 + tan²A + cot²A.",
    markingSchemeSteps: [
      {
        stepNo: 1,
        description: "Expand LHS using (a + b)²: (sin²A + cosec²A + 2 sin A cosec A) + (cos²A + sec²A + 2 cos A sec A).",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 2,
        description: "Group (sin²A + cos²A) = 1. Since sin A cosec A = 1 and cos A sec A = 1, the 2ab terms become 2(1) + 2(1) = 4.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 3,
        description: "Substitute cosec²A = 1 + cot²A and sec²A = 1 + tan²A: LHS = 1 + 4 + (1 + cot²A) + (1 + tan²A) = 7 + tan²A + cot²A = RHS.",
        marksAwarded: "1.0 Mark"
      }
    ],
    finalAnswer: "LHS = RHS. Hence Proved.",
    examinerTrap: "Converting everything to sin A and cos A immediately will create massive fractions and waste 10 minutes. Use standard Pythagorean identities directly!"
  },

  // CHAPTER 9: APPLICATIONS OF TRIGONOMETRY
  {
    id: "m_ex_9_1",
    chapterNo: 9,
    level: "4 Marks (Case Study)",
    marks: 4,
    question: "From a point on a bridge across a river, the angles of depression of the banks on opposite sides of the river are 30° and 45°, respectively. If the bridge is at a height of 3 m from the banks, find the width of the river (take √3 = 1.732).",
    markingSchemeSteps: [
      {
        stepNo: 1,
        description: "Draw geometric diagram showing bridge height P = 3 m, Bank A with elevation 30°, and Bank B with elevation 45° on opposite sides.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 2,
        description: "In right △PDA: tan 30° = PD / AD ⟹ 1/√3 = 3 / AD ⟹ AD = 3√3 m.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 3,
        description: "In right △PDB: tan 45° = PD / BD ⟹ 1 = 3 / BD ⟹ BD = 3 m.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 4,
        description: "Width of river = AD + BD = 3√3 + 3 = 3(√3 + 1) = 3(1.732 + 1) = 3(2.732) = 8.196 m ≈ 8.20 m.",
        marksAwarded: "1.0 Mark"
      }
    ],
    finalAnswer: "Width of river = 8.20 meters",
    examinerTrap: "Subtracting AD - BD instead of adding AD + BD. The problem states banks are on OPPOSITE sides of the river!"
  },

  // CHAPTER 10: CIRCLES
  {
    id: "m_ex_10_1",
    chapterNo: 10,
    level: "3 Marks (Short Answer)",
    marks: 3,
    question: "Prove that the lengths of tangents drawn from an external point to a circle are equal (Theorem 10.2).",
    markingSchemeSteps: [
      {
        stepNo: 1,
        description: "Given: A circle with center O, an external point P, and tangents PQ and PR. To Prove: PQ = PR. Construction: Join OP, OQ, and OR.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 2,
        description: "In right △OQP and right △ORP: ∠OQP = ∠ORP = 90° (Theorem 10.1: radius ⊥ tangent). OP = OP (Common hypotenuse). OQ = OR (Radii of the same circle).",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 3,
        description: "By RHS congruence criterion: △OQP ≅ △ORP ⟹ PQ = PR (CPCT). [Q.E.D.]",
        marksAwarded: "1.0 Mark"
      }
    ],
    finalAnswer: "Theorem 10.2 Proved: PQ = PR",
    examinerTrap: "Claiming SSS congruence directly. You cannot assume PQ = PR in the proof — that is the very thing you are proving!"
  },

  // CHAPTER 11: AREAS RELATED TO CIRCLES
  {
    id: "m_ex_11_1",
    chapterNo: 11,
    level: "3 Marks (Short Answer)",
    marks: 3,
    question: "Find the area of the minor segment of a circle of radius 14 cm, when the angle of the corresponding sector is 60° (Use π = 22/7, √3 = 1.732).",
    markingSchemeSteps: [
      {
        stepNo: 1,
        description: "Area of sector = (θ/360°) × πr² = (60/360) × (22/7) × 14 × 14 = (1/6) × 22 × 2 × 14 = 308 / 3 = 102.67 cm².",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 2,
        description: "In △OAB, OA = OB = 14 cm and ∠AOB = 60° ⟹ △OAB is equilateral. Area of △OAB = (√3/4) × side² = (√3/4) × 14 × 14 = 49√3 = 49 × 1.732 = 84.87 cm².",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 3,
        description: "Area of minor segment = Area of sector - Area of △OAB = 102.67 - 84.87 = 17.80 cm².",
        marksAwarded: "1.0 Mark"
      }
    ],
    finalAnswer: "Area of Minor Segment = 17.80 cm²",
    examinerTrap: "Writing cm instead of cm² for area unit costs 0.5 mark."
  },

  // CHAPTER 12: SURFACE AREAS AND VOLUMES
  {
    id: "m_ex_12_1",
    chapterNo: 12,
    level: "5 Marks (Long Answer / Proof)",
    marks: 5,
    question: "A solid toy is in the form of a hemisphere surmounted by a right circular cone of the same base radius. The height of the cone is 2 cm and the diameter of the base is 4 cm. Determine the volume of the toy (take π = 3.14).",
    markingSchemeSteps: [
      {
        stepNo: 1,
        description: "Base radius r = 4/2 = 2 cm; Cone height h = 2 cm.",
        marksAwarded: "0.5 Mark"
      },
      {
        stepNo: 2,
        description: "Total Volume of toy = Volume of cone + Volume of hemisphere = (1/3)πr²h + (2/3)πr³.",
        marksAwarded: "1.5 Marks"
      },
      {
        stepNo: 3,
        description: "Factor out (1/3)πr²: Volume = (1/3)πr²(h + 2r) = (1/3) × 3.14 × (2)² × [2 + 2(2)] = (1/3) × 3.14 × 4 × 6.",
        marksAwarded: "1.5 Marks"
      },
      {
        stepNo: 4,
        description: "Calculation: (1/3) × 6 = 2 ⟹ Volume = 3.14 × 8 = 25.12 cm³.",
        marksAwarded: "1.5 Marks"
      }
    ],
    finalAnswer: "Volume of Toy = 25.12 cm³",
    examinerTrap: "Using π = 22/7 when question specifically mandates π = 3.14 causes rounding discrepancies."
  },

  // CHAPTER 13: STATISTICS
  {
    id: "m_ex_13_1",
    chapterNo: 13,
    level: "3 Marks (Short Answer)",
    marks: 3,
    question: "The following data gives the state-wise teacher-student ratio in higher secondary schools. Find the mode of the data: Class (15-20: 3), (20-25: 8), (25-30: 9), (30-35: 10), (35-40: 3), (40-45: 0), (45-50: 0), (50-55: 2).",
    markingSchemeSteps: [
      {
        stepNo: 1,
        description: "Maximum class frequency is 10, corresponding to class interval 30 - 35. Hence Modal Class = 30 - 35.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 2,
        description: "Values: Lower limit l = 30, class size h = 5, f₁ = 10, f₀ = 9, f₂ = 3.",
        marksAwarded: "0.5 Mark"
      },
      {
        stepNo: 3,
        description: "Mode = l + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h = 30 + [(10 - 9) / (2(10) - 9 - 3)] × 5 = 30 + [1 / (20 - 12)] × 5 = 30 + 5/8 = 30 + 0.625 = 30.625.",
        marksAwarded: "1.5 Marks"
      }
    ],
    finalAnswer: "Mode = 30.625 (or 30.6)",
    examinerTrap: "Confusing f₀ (preceding modal frequency) with f₂ (succeeding modal frequency)."
  },

  // CHAPTER 14: PROBABILITY
  {
    id: "m_ex_14_1",
    chapterNo: 14,
    level: "3 Marks (Short Answer)",
    marks: 3,
    question: "One card is drawn from a well-shuffled deck of 52 playing cards. Find the probability of getting: (i) a king of red color, (ii) a face card, (iii) a spade.",
    markingSchemeSteps: [
      {
        stepNo: 1,
        description: "Total number of possible outcomes = 52.",
        marksAwarded: "0.5 Mark"
      },
      {
        stepNo: 2,
        description: "(i) Kings of red color = 2 (King of Hearts, King of Diamonds). P(Red King) = 2/52 = 1/26.",
        marksAwarded: "0.75 Mark"
      },
      {
        stepNo: 3,
        description: "(ii) Face cards = 4 Kings + 4 Queens + 4 Jacks = 12 cards. P(Face Card) = 12/52 = 3/13.",
        marksAwarded: "1.0 Mark"
      },
      {
        stepNo: 4,
        description: "(iii) Spades = 13 cards. P(Spade) = 13/52 = 1/4.",
        marksAwarded: "0.75 Mark"
      }
    ],
    finalAnswer: "(i) 1/26, (ii) 3/13, (iii) 1/4",
    examinerTrap: "Counting Aces as face cards! Aces are number cards (honor cards), NOT face cards. Face cards have actual drawn faces (K, Q, J)."
  }
];
