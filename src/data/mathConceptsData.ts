export interface MathChapterConcept {
  chapterNo: number;
  title: string;
  weightage: string;
  oneLiner: string;
  analogyTitle: string;
  analogyContent: string;
  sections: {
    id: string;
    label: string;
    heading: string;
    subheading?: string;
    explanation: string;
    formulasOrKeyPoints?: {
      title: string;
      content: string;
      note?: string;
    }[];
    stepByStepGuide?: {
      stepNo: number;
      title: string;
      action: string;
      proTip?: string;
    }[];
    examinerTraps?: {
      trap: string;
      correction: string;
    }[];
  }[];
}

export const MATH_CHAPTER_CONCEPTS: MathChapterConcept[] = [
  {
    chapterNo: 1,
    title: "Real Numbers",
    weightage: "6 Marks (Board Mandatory)",
    oneLiner: "Understanding the building blocks of numbers: Prime Factorization (DNA of numbers) and Irrationality Proofs.",
    analogyTitle: "The 'DNA Fingerprint' of Numbers",
    analogyContent: "Think of every composite number as a molecule made of atoms. Prime numbers are the indivisible atoms! Just like every living creature has unique DNA, every number (like 360) has a single, unique prime factorization ($2^3 \\times 3^2 \\times 5$). No other number in the universe shares this exact combination.",
    sections: [
      {
        id: "concept",
        label: "1. Core Meaning & The Prime DNA",
        heading: "Fundamental Theorem of Arithmetic",
        subheading: "Why primes determine HCF, LCM, and Decimal Terminations",
        explanation: "Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which prime factors occur.",
        formulasOrKeyPoints: [
          {
            title: "The Golden Relationship",
            content: "$\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b$",
            note: "Applies ONLY to two numbers! Never use for 3 numbers (HCF × LCM ≠ a × b × c)."
          },
          {
            title: "HCF vs LCM Mental Shortcut",
            content: "$\\text{HCF} = \\text{Product of smallest powers of common prime factors}$  \n$\\text{LCM} = \\text{Product of greatest powers of all prime factors involved}$",
            note: "HCF will always be $\\le$ the smallest number; LCM will always be $\\ge$ the largest number."
          }
        ],
        stepByStepGuide: [
          {
            stepNo: 1,
            title: "Factorise Both Numbers into Prime Powers",
            action: "Write $a = p_1^{a_1} \\cdot p_2^{a_2}$ and $b = p_1^{b_1} \\cdot p_2^{b_2}$.",
            proTip: "Always use prime trees or successive division by 2, 3, 5, 7."
          },
          {
            stepNo: 2,
            title: "Pick Common Primes for HCF",
            action: "Take each prime common to both and pick its minimum exponent.",
            proTip: "If no common prime exists, HCF = 1 (Co-prime numbers)."
          },
          {
            stepNo: 3,
            title: "Take All Primes for LCM",
            action: "Take every prime that appears anywhere, raised to its maximum exponent.",
            proTip: "Quick check: Does HCF divide LCM evenly? It always must!"
          }
        ],
        examinerTraps: [
          {
            trap: "Assuming HCF × LCM = a × b × c for three numbers.",
            correction: "For three numbers, use prime factorization directly. The product rule only holds for pairs of numbers."
          },
          {
            trap: "Leaving $\\sqrt{p}$ irrationality proof without stating 'where $a$ and $b$ are co-prime integers and $b \\neq 0$'.",
            correction: "Examiners deduct 1/2 mark if the 'co-prime' assumption is omitted in Step 1."
          }
        ]
      },
      {
        id: "irrationality",
        label: "2. Proving √2, √3, √5 are Irrational",
        heading: "Proof by Contradiction (The Master 3M Blueprint)",
        explanation: "In mathematics, when direct proof is difficult, we assume the opposite (that $\\sqrt{p}$ is rational $\\frac{a}{b}$) and show that this assumption leads to an impossible logical disaster (both $a$ and $b$ share common factor $p$, violating our co-prime definition).",
        stepByStepGuide: [
          {
            stepNo: 1,
            title: "Assume the Opposite",
            action: "Let $\\sqrt{5}$ be rational. Then $\\sqrt{5} = \\frac{a}{b}$, where $a, b$ are co-prime integers ($b \\neq 0$).",
            proTip: "Underline the word 'co-prime' in your answer sheet."
          },
          {
            stepNo: 2,
            title: "Square Both Sides",
            action: "$5 = \\frac{a^2}{b^2} \\implies a^2 = 5b^2$.",
            proTip: "This shows $5$ divides $a^2$, hence by Theorem 1.2, $5$ divides $a$."
          },
          {
            stepNo: 3,
            title: "Substitute $a = 5c$",
            action: "$(5c)^2 = 5b^2 \\implies 25c^2 = 5b^2 \\implies b^2 = 5c^2$.",
            proTip: "This proves $5$ also divides $b$!"
          },
          {
            stepNo: 4,
            title: "Highlight the Contradiction",
            action: "Both $a$ and $b$ have $5$ as a common factor, contradicting that $a, b$ are co-prime. Hence $\\sqrt{5}$ is irrational.",
            proTip: "Conclude with 'Hence, our initial assumption was false.'"
          }
        ]
      }
    ]
  },
  {
    chapterNo: 2,
    title: "Polynomials",
    weightage: "4-5 Marks",
    oneLiner: "Roots are where a graph touches the X-axis; Coefficients dictate the sum and product of zeroes.",
    analogyTitle: "The Signature Curve Crossing the Ground",
    analogyContent: "Imagine an archery arrow or basketball shot travelling through the air. The path is a parabola ($y = ax^2 + bx + c$). The points where the ball touches the floor ($y = 0$) are the zeroes of the polynomial! If it never touches the ground, it has 0 real zeroes. If it just bounces once, it has 1 zero.",
    sections: [
      {
        id: "concept",
        label: "1. Zeroes & Coefficient Relations",
        heading: "The Vieta Formulas for Quadratics",
        explanation: "If $\\alpha$ and $\\beta$ are the zeroes of $p(x) = ax^2 + bx + c$ ($a \\neq 0$), then they are intimately linked to the coefficients $a, b, c$.",
        formulasOrKeyPoints: [
          {
            title: "Sum of Zeroes",
            content: "$\\alpha + \\beta = -\\frac{b}{a} = -\\frac{\\text{Coefficient of } x}{\\text{Coefficient of } x^2}$"
          },
          {
            title: "Product of Zeroes",
            content: "$\\alpha \\beta = \\frac{c}{a} = \\frac{\\text{Constant term}}{\\text{Coefficient of } x^2}$"
          },
          {
            title: "Reconstructing Polynomial from Zeroes",
            content: "$p(x) = k [x^2 - (\\alpha + \\beta)x + \\alpha \\beta]$",
            note: "Don't forget the arbitrary constant $k$!"
          }
        ],
        stepByStepGuide: [
          {
            stepNo: 1,
            title: "Factorise or use Middle Term Splitting",
            action: "Set $p(x) = 0$ and find the individual zeroes $\\alpha$ and $\\beta$.",
            proTip: "Check signs carefully when splitting the middle term."
          },
          {
            stepNo: 2,
            title: "Calculate Direct Sum & Product",
            action: "Compute $\\alpha + \\beta$ and $\\alpha \\cdot \\beta$ using your calculated roots.",
            proTip: "Keep fractions in simplest form."
          },
          {
            stepNo: 3,
            title: "Verify Against Coefficients",
            action: "Compute $-\\frac{b}{a}$ and $\\frac{c}{a}$ from the polynomial and show they match exactly.",
            proTip: "Write 'Hence Verified' at the bottom to secure full presentation marks."
          }
        ],
        examinerTraps: [
          {
            trap: "Forgetting the negative sign in $-\\frac{b}{a}$.",
            correction: "If the polynomial is $2x^2 - 8x + 6$, $b = -8$, so $\\alpha + \\beta = -(-8)/2 = +4$."
          },
          {
            trap: "Evaluating symmetric expressions like $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$ by finding messy roots.",
            correction: "Always convert into sum and product: $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta}$ and $\\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta$."
          }
        ]
      }
    ]
  },
  {
    chapterNo: 3,
    title: "Pair of Linear Equations in Two Variables",
    weightage: "6-7 Marks",
    oneLiner: "Interrogating two lines on a grid: Will they cross once, run parallel forever, or lie on top of each other?",
    analogyTitle: "Two Railway Tracks on a Map",
    analogyContent: "Imagine two trains moving along straight tracks on a map: $a_1x + b_1y + c_1 = 0$ and $a_2x + b_2y + c_2 = 0$. If the tracks have different slopes, they will collide at exactly ONE intersection point (Unique Solution). If they have the exact same slope and equal separation, they run parallel and never touch (No Solution). If both trains are on the very same rail, every single point is shared (Infinite Solutions)!",
    sections: [
      {
        id: "consistency",
        label: "1. The 3 Consistency Conditions",
        heading: "Ratio Comparison Table",
        explanation: "Before solving any word problem, compare the coefficient ratios $\\frac{a_1}{a_2}, \\frac{b_1}{b_2}, \\frac{c_1}{c_2}$ to instantly know what will happen.",
        formulasOrKeyPoints: [
          {
            title: "Intersecting Lines (Consistent & Unique Solution)",
            content: "$\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$",
            note: "Exactly 1 common point."
          },
          {
            title: "Coincident Lines (Consistent & Infinitely Many Solutions)",
            content: "$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$",
            note: "Lines overlap completely."
          },
          {
            title: "Parallel Lines (Inconsistent & No Solution)",
            content: "$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$",
            note: "Lines never meet; system cannot be solved."
          }
        ],
        examinerTraps: [
          {
            trap: "Mixing up constants when one equation has $c$ on LHS and the other has $c$ on RHS.",
            correction: "Standardize both equations to $a_i x + b_i y + c_i = 0$ before taking ratios!"
          },
          {
            trap: "Upstream / Downstream speed confusion.",
            correction: "Downstream (with river) = $x + y$; Upstream (against river) = $x - y$. Speed of boat $x$ must ALWAYS be greater than stream speed $y$."
          }
        ]
      }
    ]
  },
  {
    chapterNo: 4,
    title: "Quadratic Equations",
    weightage: "6 Marks",
    oneLiner: "The Discriminant ($b^2 - 4ac$) is the ultimate 'Root Detector' before solving.",
    analogyTitle: "The Ground Radar for Parabolic Rockets",
    analogyContent: "When an engineer launches a projectile, its height over time follows $ax^2 + bx + c = 0$. The Discriminant $D = b^2 - 4ac$ acts like a radar detector: If $D > 0$, the projectile cuts the ground at two distinct landing/launch points. If $D = 0$, it touches the ground gently at one turning point. If $D < 0$, it stays up in the air and never touches real ground (no real roots)!",
    sections: [
      {
        id: "discriminant",
        label: "1. Nature of Roots & The Quadratic Formula",
        heading: "The Discriminant $D = b^2 - 4ac$",
        explanation: "The value of $D$ completely determines the behavior and nature of the roots.",
        formulasOrKeyPoints: [
          {
            title: "Quadratic Formula (Sridharacharya Formula)",
            content: "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$"
          },
          {
            title: "Nature of Roots Criteria",
            content: "• $D > 0$: Two distinct real roots  \n• $D = 0$: Two equal real roots (Coincident)  \n• $D < 0$: No real roots",
            note: "For equal roots, set $b^2 - 4ac = 0$ to solve for unknown parameter $k$."
          }
        ],
        stepByStepGuide: [
          {
            stepNo: 1,
            title: "Arrange in Standard Form",
            action: "Write $ax^2 + bx + c = 0$, identifying $a, b, c$ with their signs.",
            proTip: "If leading coefficient $a < 0$, multiply entire equation by $-1$."
          },
          {
            stepNo: 2,
            title: "Compute $D = b^2 - 4ac$",
            action: "Evaluate $D$. If negative, conclude 'No Real Roots' immediately.",
            proTip: "Be careful with $(-b)^2$, it is always positive!"
          },
          {
            stepNo: 3,
            title: "Substitute into Formula",
            action: "Calculate the two values $x_1 = \\frac{-b+\\sqrt{D}}{2a}$ and $x_2 = \\frac{-b-\\sqrt{D}}{2a}$.",
            proTip: "In word problems (time, speed, age), reject negative values and state reason."
          }
        ],
        examinerTraps: [
          {
            trap: "Dividing both sides by $x$ in equations like $5x^2 = 10x$.",
            correction: "Never divide by the variable! You eliminate the root $x = 0$. Factorise: $5x(x - 2) = 0 \\implies x = 0, 2$."
          }
        ]
      }
    ]
  },
  {
    chapterNo: 5,
    title: "Arithmetic Progressions",
    weightage: "5-6 Marks",
    oneLiner: "Uniform stepping: Each step increases or decreases by a fixed constant difference $d$.",
    analogyTitle: "Climbing a Uniform Staircase",
    analogyContent: "Imagine a staircase where the first step is $a$ cm off the ground, and every subsequent step raises you by a uniform height $d$. To reach step $n$, you took $(n-1)$ steps up from the first step: so height is $a_n = a + (n-1)d$. If you pile up all steps together, pairing the first with the last step gives Gauss's beautiful handshake sum $S_n = \\frac{n}{2}(a + l)$!",
    sections: [
      {
        id: "formulas",
        label: "1. Core Formulas & Shortcuts",
        heading: "Mastering the Nth Term and Sum of N Terms",
        explanation: "An Arithmetic Progression is a sequence where the difference between consecutive terms is constant ($a_{k+1} - a_k = d$).",
        formulasOrKeyPoints: [
          {
            title: "The $n^{\\text{th}}$ Term ($a_n$)",
            content: "$a_n = a + (n - 1)d$",
            note: "$a$ = first term, $d$ = common difference, $n$ = number of terms."
          },
          {
            title: "Sum of First $n$ Terms ($S_n$)",
            content: "$S_n = \\frac{n}{2} [2a + (n - 1)d] = \\frac{n}{2} [a + l]$",
            note: "Where $l = a_n$ is the last term."
          },
          {
            title: "Recovering Nth term from Sum",
            content: "$a_n = S_n - S_{n-1}$",
            note: "Crucial for questions where $S_n$ is given as a quadratic in $n$."
          }
        ],
        examinerTraps: [
          {
            trap: "Forgetting that $n$ must always be a positive integer ($n \\in \\mathbb{N}$).",
            correction: "If solving quadratic in $n$ gives $n = 12$ and $n = -5.5$, reject $-5.5$ since step numbers can never be negative or fractional."
          },
          {
            trap: "Selecting 3 consecutive AP terms as $a, a+d, a+2d$ in sum problems.",
            correction: "Always choose $(a - d), a, (a + d)$. The sum immediately cancels $d$, giving $3a = \\text{Sum}$ in 2 seconds!"
          }
        ]
      }
    ]
  },
  {
    chapterNo: 6,
    title: "Triangles",
    weightage: "8-10 Marks (High Yield)",
    oneLiner: "Similarity is photo enlargement: Shapes match identically (angles equal), sizes scale proportionally.",
    analogyTitle: "Zooming in on Your Phone Screen",
    analogyContent: "When you pinch-to-zoom a photo of a triangle on your phone, you don't distort it: every angle stays exactly the same, but every line segment grows by the exact same scale factor $k$. That is similarity! Congruence means $k = 1$ (exact twin). Similarity means any scale factor $k > 0$.",
    sections: [
      {
        id: "bpt",
        label: "1. Thales Theorem (BPT) & Proof",
        heading: "Basic Proportionality Theorem (Theorem 6.1)",
        explanation: "If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.",
        formulasOrKeyPoints: [
          {
            title: "The BPT Ratio",
            content: "$\\frac{AD}{DB} = \\frac{AE}{EC}$",
            note: "BPT Corollaries (Extended Forms): $\\frac{AD}{AB} = \\frac{AE}{AC}$ and $\\frac{DB}{AB} = \\frac{EC}{AC}$ (equivalently $\\frac{AB}{AD} = \\frac{AC}{AE}$ and $\\frac{AB}{DB} = \\frac{AC}{EC}$)."
          }
        ],
        stepByStepGuide: [
          {
            stepNo: 1,
            title: "Write Given & To Prove",
            action: "Given: In $\\Delta ABC$, $DE \\parallel BC$. To Prove: $\\frac{AD}{DB} = \\frac{AE}{EC}$.",
            proTip: "Draw the diagram clearly with neat labels using a pencil."
          },
          {
            stepNo: 2,
            title: "Construction Step",
            action: "Join $BE$ and $CD$. Draw $DM \\perp AC$ and $EN \\perp AB$.",
            proTip: "Dotted lines for construction earn 1 mark in CBSE rubric."
          },
          {
            stepNo: 3,
            title: "Area of Triangles with Base AD and DB",
            action: "$\\frac{\\text{Area}(\\Delta ADE)}{\\text{Area}(\\Delta BDE)} = \\frac{\\frac{1}{2} \\cdot AD \\cdot EN}{\\frac{1}{2} \\cdot DB \\cdot EN} = \\frac{AD}{DB} \\quad (1)$",
            proTip: "Mention that $EN$ is the altitude on extended base $DB$."
          },
          {
            stepNo: 4,
            title: "Area of Triangles with Base AE and EC",
            action: "$\\frac{\\text{Area}(\\Delta ADE)}{\\text{Area}(\\Delta DEC)} = \\frac{\\frac{1}{2} \\cdot AE \\cdot DM}{\\frac{1}{2} \\cdot EC \\cdot DM} = \\frac{AE}{EC} \\quad (2)$",
            proTip: "State altitude $DM$ clearly."
          },
          {
            stepNo: 5,
            title: "Equate Denominators & Conclude",
            action: "$\\Delta BDE$ and $\\Delta DEC$ share base $DE$ between parallels $DE \\parallel BC$, so $\\text{Area}(\\Delta BDE) = \\text{Area}(\\Delta DEC)$. Hence $\\frac{AD}{DB} = \\frac{AE}{EC}$.",
            proTip: "Box the final conclusion with Q.E.D. / Hence Proved."
          }
        ]
      },
      {
        id: "criteria",
        label: "2. The 3 Criteria (AA, SSS, SAS)",
        heading: "How to Prove Two Triangles are Similar",
        explanation: "You do not need to check all 6 parameters (3 angles + 3 sides). Any of these 3 sufficient conditions guarantees similarity.",
        formulasOrKeyPoints: [
          {
            title: "Criterion 1: AA (Angle-Angle)",
            content: "If two angles of one triangle equal two angles of another, the triangles are similar (third angle is automatically equal by angle sum property).",
            note: "Most common criterion in 90% of board questions!"
          },
          {
            title: "Criterion 2: SSS (Side-Side-Side)",
            content: "If $\\frac{AB}{PQ} = \\frac{BC}{QR} = \\frac{AC}{PR}$, then $\\Delta ABC \\sim \\Delta PQR$."
          },
          {
            title: "Criterion 3: SAS (Side-Angle-Side)",
            content: "Two pairs of sides proportional AND the INCLUDED angle between them equal.",
            note: "Warning: The angle MUST be between the two proportional sides!"
          }
        ],
        examinerTraps: [
          {
            trap: "Writing incorrect vertex order e.g. $\\Delta ABC \\sim \\Delta DEF$ when vertex $A$ corresponds to $E$.",
            correction: "Always align equal angles first: if $\\angle A = \\angle E, \\angle B = \\angle D, \\angle C = \\angle F$, the ONLY correct statement is $\\Delta ABC \\sim \\Delta EDF$."
          }
        ]
      }
    ]
  },
  {
    chapterNo: 7,
    title: "Coordinate Geometry",
    weightage: "6 Marks",
    oneLiner: "GPS for Geometry: Distances via Pythagoras, and tug-of-war balance points via Section Formula.",
    analogyTitle: "GPS Navigation on a Grid",
    analogyContent: "Imagine city blocks laid out on a grid. The distance between two points $(x_1, y_1)$ and $(x_2, y_2)$ is just the hypotenuse of the right-angled triangle formed by walking east-west ($x_2 - x_1$) and north-south ($y_2 - y_1$). That's all the Distance Formula is—Pythagoras in disguise! The Section formula is like a tug-of-war rope divided in ratio $m_1 : m_2$.",
    sections: [
      {
        id: "formulas",
        label: "1. The 2 Essential Master Formulas",
        heading: "Distance and Section Formulas",
        explanation: "Class 10 Coordinate Geometry rests on two foundational formulas.",
        formulasOrKeyPoints: [
          {
            title: "1. Distance Formula",
            content: "$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$",
            note: "Distance from origin $(0, 0)$ is simply $\\sqrt{x^2 + y^2}$."
          },
          {
            title: "2. Section Formula (Internal Division)",
            content: "$P(x, y) = \\left( \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}, \\; \\frac{m_1 y_2 + m_2 y_1}{m_1 + m_2} \\right)$",
            note: "Cross multiplication pattern: $m_1$ multiplies point 2; $m_2$ multiplies point 1."
          },
          {
            title: "3. Midpoint Formula (Special Case $1:1$)",
            content: "$M = \\left( \\frac{x_1 + x_2}{2}, \\; \\frac{y_1 + y_2}{2} \\right)$"
          },
          {
            title: "4. Centroid of a Triangle",
            content: "$G = \\left( \\frac{x_1 + x_2 + x_3}{3}, \\; \\frac{y_1 + y_2 + y_3}{3} \\right)$"
          }
        ],
        examinerTraps: [
          {
            trap: "Assuming the ratio is $m_1 : m_2$ and setting up two messy equations.",
            correction: "Pro trick: Always assume the unknown ratio is $k : 1$. Then point coordinates have only 1 unknown $k$ to solve!"
          },
          {
            trap: "Y-axis division problems: forgetting that any point on the Y-axis has $x = 0$.",
            correction: "If line cuts Y-axis, set $x$-coordinate $= 0$. If it cuts X-axis, set $y$-coordinate $= 0$."
          }
        ]
      }
    ]
  },
  {
    chapterNo: 8,
    title: "Introduction to Trigonometry",
    weightage: "8 Marks (High Yield)",
    oneLiner: "Trig ratios link angles to side lengths; Pythagorean identities are Pythagoras divided by hypotenuse squared.",
    analogyTitle: "Measuring Pyramids Without Climbing Them",
    analogyContent: "Ancient Greek and Indian mathematicians wanted to find the height of a mountain or pyramid without climbing it. They noticed that for any given sun angle, the ratio of (Shadow Length) to (Object Height) is ALWAYS constant regardless of the size! That constant ratio was named Tangent, Sine, and Cosine. Trig is simply the universal dictionary between angles and side ratios.",
    sections: [
      {
        id: "ratios",
        label: "1. The 6 Ratios & The Mnemonic",
        heading: "Pandit Badri Prasad Har Har Bole (SOH CAH TOA)",
        explanation: "In a right-angled triangle with reference angle $\\theta$:",
        formulasOrKeyPoints: [
          {
            title: "The Iconic Indian Board Mnemonic",
            content: "$\\begin{array}{c|c|c} \\mathbf{P} & \\mathbf{B} & \\mathbf{P} \\\\ \\hline \\mathbf{H} & \\mathbf{H} & \\mathbf{B} \\end{array} \\implies \\sin = \\frac{P}{H}, \\; \\cos = \\frac{B}{H}, \\; \\tan = \\frac{P}{B}$",
            note: "Reciprocals: $\\csc = \\frac{H}{P}, \\sec = \\frac{H}{B}, \\cot = \\frac{B}{P}$."
          },
          {
            title: "The 3 Pythagorean Identities",
            content: "1. $\\sin^2\\theta + \\cos^2\\theta = 1$  \n2. $1 + \\tan^2\\theta = \\sec^2\\theta \\implies \\sec^2\\theta - \\tan^2\\theta = 1$  \n3. $1 + \\cot^2\\theta = \\csc^2\\theta \\implies \\csc^2\\theta - \\cot^2\\theta = 1$",
            note: "Notice why: $P^2 + B^2 = H^2$. Divide by $H^2 \\implies \\frac{P^2}{H^2} + \\frac{B^2}{H^2} = 1 \\implies \\sin^2\\theta + \\cos^2\\theta = 1$!"
          }
        ],
        stepByStepGuide: [
          {
            stepNo: 1,
            title: "Identify Perpendicular and Base with respect to $\\theta$",
            action: "The side directly OPPOSITE to angle $\\theta$ is Perpendicular ($P$). Side ADJACENT to $\\theta$ is Base ($B$). Longest side is Hypotenuse ($H$).",
            proTip: "If you switch from $\\angle A$ to $\\angle C$, $P$ and $B$ swap immediately!"
          },
          {
            stepNo: 2,
            title: "Express Everything in Terms of $\\sin$ and $\\cos$",
            action: "When proving identities, replace $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$, $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$, $\\sec\\theta = \\frac{1}{\\cos\\theta}$, $\\csc\\theta = \\frac{1}{\\sin\\theta}$.",
            proTip: "80% of proving questions simplify in 3 steps once in terms of sin and cos."
          }
        ],
        examinerTraps: [
          {
            trap: "Thinking $\\sin(A + B) = \\sin A + \\sin B$.",
            correction: "Trigonometric functions do NOT distribute over addition! $\\sin(30^\\circ + 60^\\circ) = \\sin 90^\\circ = 1$, but $\\sin 30^\\circ + \\sin 60^\\circ = \\frac{1}{2} + \\frac{\\sqrt{3}}{2} \\neq 1$."
          }
        ]
      }
    ]
  },
  {
    chapterNo: 9,
    title: "Some Applications of Trigonometry",
    weightage: "4-5 Marks (Guaranteed Case Study)",
    oneLiner: "The Alternate Angle Z-Trick turns Depression into Elevation; 2 triangles solve every height problem.",
    analogyTitle: "Looking Up at a Plane vs Looking Down from a Balcony",
    analogyContent: "When you stand on the ground and look up at a flying kite, your line of sight angles up from the horizontal: that is the **Angle of Elevation**. When you stand on a rooftop balcony and look down at a car on the road, your eyes angle down from your horizontal line of sight: that is the **Angle of Depression**. Notice that by the Z-rule (alternate interior angles between horizontal lines), the angle of depression from the roof EQUALS the angle of elevation from the car!",
    sections: [
      {
        id: "blueprint",
        label: "1. The 2-Triangle Master Roadmap",
        heading: "How to Solve 100% of Heights & Distances Problems",
        explanation: "Every single board question features either one triangle (simple 2M) or two right triangles sharing a common side (4M/5M).",
        formulasOrKeyPoints: [
          {
            title: "The Big 3 Angles to Memorize",
            content: "$\\tan 30^\\circ = \\frac{1}{\\sqrt{3}} \\approx 0.577$  \n$\\tan 45^\\circ = 1 \\implies \\text{Height} = \\text{Base distance}!$  \n$\\tan 60^\\circ = \\sqrt{3} \\approx 1.732$",
            note: "If angle is $45^\\circ$, height and shadow are identical!"
          }
        ],
        stepByStepGuide: [
          {
            stepNo: 1,
            title: "Draw the Ground Horizontal First",
            action: "Draw a straight horizontal line representing the ground. Erect vertical perpendiculars for towers, buildings, or poles.",
            proTip: "Never draw slanted towers unless explicitly stated."
          },
          {
            stepNo: 2,
            title: "Apply $\\tan\\theta$ to the Smaller Triangle",
            action: "Express the common side (usually the tower height $h$ or common ground distance $x$) in terms of the other variable.",
            proTip: "e.g., in $\\Delta ABC$: $\\tan 30^\\circ = \\frac{h}{x} \\implies x = h\\sqrt{3}$."
          },
          {
            stepNo: 3,
            title: "Apply $\\tan\\theta$ to the Larger Triangle & Substitute",
            action: "Substitute the expression for $x$ into the second triangle equation.",
            proTip: "If $\\sqrt{3} = 1.732$ is given in question paper, substitute only in the very last step to avoid rounding errors."
          }
        ],
        examinerTraps: [
          {
            trap: "Measuring angle of depression from the vertical wall instead of horizontal eye-level.",
            correction: "Angle of depression is ALWAYS measured between the horizontal line of sight and the object. Drawing it from the vertical tower loses all marks!"
          }
        ]
      }
    ]
  },
  {
    chapterNo: 10,
    title: "Circles",
    weightage: "6 Marks",
    oneLiner: "The Radius meets the Tangent at 90°; Twin tangents from an external point are identical lengths.",
    analogyTitle: "Folding the Tangent Kite Along its Backbone",
    analogyContent: "Imagine taking a circle and drawing two tangents from an external point $P$ to contact points $A$ and $B$. If you connect the center $O$ to $P$, you create a kite shape $OAPB$. If you fold this kite along the backbone line $OP$, triangle $\\Delta OAP$ lands exactly and completely on top of $\\Delta OBP$ (RHS Congruence: hypotenuse $OP$ common, radius $OA = OB$, and $90^\\circ$ angles at $A$ and $B$). That is why $PA = PB$!",
    sections: [
      {
        id: "theorems",
        label: "1. The 2 Core Theorems Mastered",
        heading: "Theorem 10.1 and Theorem 10.2",
        explanation: "Everything in Chapter 10 revolves around two theorems.",
        formulasOrKeyPoints: [
          {
            title: "Theorem 10.1: Tangent-Radius Perpendicularity",
            content: "The tangent at any point of a circle is perpendicular to the radius through the point of contact: $OP \\perp AB$.",
            note: "Always look for the $90^\\circ$ angle at the point of contact to apply Pythagoras theorem."
          },
          {
            title: "Theorem 10.2: Lengths of Tangents from External Point",
            content: "The lengths of tangents drawn from an external point to a circle are equal: $PA = PB$.",
            note: "Guaranteed 3M proof in board exams!"
          }
        ],
        stepByStepGuide: [
          {
            stepNo: 1,
            title: "Proof of Theorem 10.2: Setup",
            action: "Given: Circle with center $O$, point $P$ outside, tangents $PA$ and $PB$. To Prove: $PA = PB$. Construction: Join $OP, OA, OB$.",
            proTip: "Draw radii $OA$ and $OB$ clearly showing right angle symbols at $A$ and $B$."
          },
          {
            stepNo: 2,
            title: "Apply RHS Congruence",
            action: "In right $\\Delta OAP$ and right $\\Delta OBP$: $\\angle OAP = \\angle OBP = 90^\\circ$ (radius $\\perp$ tangent); Hypotenuse $OP = OP$ (common); $OA = OB$ (radii).",
            proTip: "State reasons clearly for each equality."
          },
          {
            stepNo: 3,
            title: "Conclude by CPCT",
            action: "$\\Delta OAP \\cong \\Delta OBP$ (RHS). Therefore, $PA = PB$ (CPCT).",
            proTip: "Also bonus result: $\\angle APO = \\angle BPO$ (OP bisects angle between tangents) and $\\angle AOP = \\angle BOP$ (OP bisects central angle)."
          }
        ],
        examinerTraps: [
          {
            trap: "Forgetting that opposite sides of a quadrilateral circumscribing a circle subtend supplementary angles ($180^\\circ$) at the center.",
            correction: "Remember: $\\angle AOB + \\angle COD = 180^\\circ$. This frequently appears as a 1M MCQ and 3M proof."
          }
        ]
      }
    ]
  },
  {
    chapterNo: 11,
    title: "Areas Related to Circles",
    weightage: "4 Marks",
    oneLiner: "Sector is a pizza slice; Segment is the crust chip cut by a straight chord.",
    analogyTitle: "Pizza Slices (Sectors) and Crust Bits (Segments)",
    analogyContent: "Picture a round pizza. When you cut from the center to the edges, you get a triangular-curved slice: that is a **Sector** of angle $\\theta$. If someone makes a straight cut through the pizza like a chord, the slice of crust separated from the rest is a **Segment**. Area of Segment = Area of Sector minus Area of the central triangle!",
    sections: [
      {
        id: "formulas",
        label: "1. Sector, Arc, and Segment Formulas",
        heading: "Fraction of Circle Area by Angle $\\frac{\\theta}{360^\\circ}$",
        explanation: "All circular region formulas are simply multiplying the total circle value ($2\\pi r$ or $\\pi r^2$) by the angle fraction $\\frac{\\theta}{360^\\circ}$.",
        formulasOrKeyPoints: [
          {
            title: "Length of an Arc",
            content: "$l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$"
          },
          {
            title: "Area of a Sector",
            content: "\\text{Area} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{1}{2} l r"
          },
          {
            title: "Area of Minor Segment",
            content: "\\text{Area} = \\text{Area of Sector} - \\text{Area of } \\Delta OAB = \\frac{\\theta}{360^\\circ}\\pi r^2 - \\frac{1}{2} r^2 \\sin\\theta",
            note: "For $\\theta = 60^\\circ$: Area of $\\Delta = \\frac{\\sqrt{3}}{4} r^2$. For $\\theta = 90^\\circ$: Area of $\\Delta = \\frac{1}{2} r^2$."
          },
          {
            title: "Clock Minute Hand Speed Shortcut",
            content: "Minute hand rotates $360^\\circ$ in 60 minutes $\\implies 6^\\circ \\text{ per minute}$!",
            note: "In 5 minutes, angle swept $= 5 \\times 6^\\circ = 30^\\circ$."
          }
        ]
      }
    ]
  },
  {
    chapterNo: 12,
    title: "Surface Areas and Volumes",
    weightage: "6 Marks",
    oneLiner: "Wrapping paper is Surface Area; Water capacity is Volume. When melting/recasting, Volume NEVER changes!",
    analogyTitle: "Gift Wrapping Paper vs Pouring Water",
    analogyContent: "To find Surface Area, ask yourself: 'If I dipped this solid in paint, or wrapped it in gift paper, what surfaces get touched?' (Notice internal glued surfaces are covered and vanish!). To find Volume, ask: 'How much water can this hold?' When an iron sphere is melted into cylinders, the shapes change, but the water capacity (Volume) is 100% conserved.",
    sections: [
      {
        id: "combos",
        label: "1. Combination of Solids Blueprint",
        heading: "How to Calculate Combined Surface Area & Volume",
        explanation: "Most CBSE questions fuse two shapes together: e.g., a cone mounted on a hemisphere, or a cylinder with hemispherical ends (capsule).",
        formulasOrKeyPoints: [
          {
            title: "The Golden Conservation Law for Melting",
            content: "$\\text{Volume of Original Solid} = \\text{Total Volume of Recast Solids}$  \n$\\text{Number of small solids } n = \\frac{\\text{Volume of large solid}}{\\text{Volume of one small solid}}$"
          },
          {
            title: "Combined Surface Area Warning",
            content: "$\\text{Total Surface Area of Composite} = \\text{CSA of Shape 1} + \\text{CSA of Shape 2}$",
            note: "NEVER add the total surface areas of the individual shapes, because the joint base is hidden inside!"
          }
        ],
        examinerTraps: [
          {
            trap: "Adding base circle areas when two shapes are joined at their bases.",
            correction: "The joined circular faces are hidden inside the solid. Only exposed outer surfaces count toward Total Surface Area!"
          }
        ]
      }
    ]
  },
  {
    chapterNo: 13,
    title: "Statistics",
    weightage: "7 Marks",
    oneLiner: "Mean is the fair balance beam; Median is the person right in the middle; Mode is the most popular choice.",
    analogyTitle: "The Fair Balance Beam vs The Popular Choice",
    analogyContent: "Imagine 5 kids holding weights on a seesaw: the exact pivot point where the board balances flat is the **Mean** (Average). If you line up all kids from shortest to tallest, the kid standing right in the center is the **Median**. If 3 kids are wearing size 6 shoes and everyone else has different sizes, size 6 is the **Mode** (most frequently occurring).",
    sections: [
      {
        id: "formulas",
        label: "1. The 3 Master Statistical Formulas",
        heading: "Mean, Median, and Mode for Grouped Data",
        explanation: "Continuous frequency distribution tables require dedicated group formulas.",
        formulasOrKeyPoints: [
          {
            title: "Assumed Mean Method (Fast Calculation Shortcut)",
            content: "$\\bar{x} = a + \\frac{\\sum f_i d_i}{\\sum f_i}, \\quad \\text{where } d_i = x_i - a$",
            note: "Pick assumed mean $a$ from the middle of the class marks $x_i$ to keep numbers tiny."
          },
          {
            title: "Mode of Grouped Data",
            content: "$\\text{Mode} = l + \\left( \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\right) \\times h$",
            note: "$f_1$ = modal class frequency; $f_0$ = preceding frequency; $f_2$ = succeeding frequency."
          },
          {
            title: "Median of Grouped Data",
            content: "$\\text{Median} = l + \\left( \\frac{\\frac{n}{2} - cf}{f} \\right) \\times h$",
            note: "$cf$ = cumulative frequency of the class PRECEDING median class."
          },
          {
            title: "Empirical Relationship",
            content: "$\\text{Mode} = 3 \\; \\text{Median} - 2 \\; \\text{Mean}$",
            note: "Guaranteed 1M board exam question!"
          }
        ],
        examinerTraps: [
          {
            trap: "Using frequency $f$ of the median class as $cf$ in the median formula.",
            correction: "The formula requires $cf$ of the class PRECEDING the median class, and $f$ of the median class itself!"
          },
          {
            trap: "Not making discontinuous class intervals continuous (e.g., 1-5, 6-10).",
            correction: "Subtract 0.5 from lower limit and add 0.5 to upper limit: 0.5 - 5.5, 5.5 - 10.5."
          }
        ]
      }
    ]
  },
  {
    chapterNo: 14,
    title: "Probability",
    weightage: "4-5 Marks",
    oneLiner: "Probability is simply a fraction: (Number of winning outcomes) / (Total possible outcomes).",
    analogyTitle: "Picking a Lucky Ticket from a Drum",
    analogyContent: "Probability is simply calculating your odds in a fair lottery. If a drum has 100 tickets and 20 of them have prizes, your chance of winning is $\\frac{20}{100} = \\frac{1}{5} = 0.2$. It can never be negative (less than 0) and can never exceed 1 (more than 100%). If an event is impossible (like rolling an 8 on a normal die), $P = 0$. If an event is guaranteed (the sun rising), $P = 1$.",
    sections: [
      {
        id: "deckAndDice",
        label: "1. The 52-Card Deck & Two Dice Grid",
        heading: "The Universal Probability Toolkit",
        explanation: "Master the exact composition of standard sample spaces.",
        formulasOrKeyPoints: [
          {
            title: "The Classical Probability Definition",
            content: "$P(E) = \\frac{\\text{Number of outcomes favorable to } E}{\\text{Total number of possible outcomes}} = \\frac{n(E)}{n(S)}$"
          },
          {
            title: "Complementary Rule",
            content: "$P(E) + P(\\bar{E}) = 1 \\implies P(\\text{not } E) = 1 - P(E)$"
          },
          {
            title: "Complete 52-Card Deck Breakdown (High Yield)",
            content: "• Total Cards = 52  \n• 26 Red (13 Hearts ♥, 13 Diamonds ♦)  \n• 26 Black (13 Spades ♠, 13 Clubs ♣)  \n• 12 Face Cards (4 Kings, 4 Queens, 4 Jacks) — Each has picture!  \n• 4 Aces (Aces are NOT face cards!)",
            note: "Probability of drawing a face card $= \\frac{12}{52} = \\frac{3}{13}$."
          },
          {
            title: "Rolling Two Dice (36 Outcomes Grid)",
            content: "Total Outcomes $= 6 \\times 6 = 36$. Sum ranges from 2 to 12. Most frequent sum is 7 (6 ways: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) $\\implies P = \\frac{6}{36} = \\frac{1}{6}$)."
          }
        ],
        examinerTraps: [
          {
            trap: "Counting Ace as a face card.",
            correction: "Aces have letters, not faces! Only King, Queen, and Jack are Face Cards (12 in total, 6 red, 6 black)."
          },
          {
            trap: "Leap year probability: Days in leap year = 366 (52 weeks + 2 extra days).",
            correction: "Probability of 53 Sundays in a leap year $= \\frac{2}{7}$. In a non-leap year (365 days), it is $\\frac{1}{7}$."
          }
        ]
      }
    ]
  }
];
