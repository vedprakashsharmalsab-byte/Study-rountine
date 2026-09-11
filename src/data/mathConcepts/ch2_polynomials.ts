import type { MathChapterConcept } from "./types";

export const CH2_POLYNOMIALS_CONCEPT: MathChapterConcept = {
  chapterNo: 2,
  title: "Polynomials",
  weightage: "4-5 Marks (Board Essential)",
  oneLiner: "Zeroes are X-axis intersections of curves; Vieta's formulas connect roots directly to coefficients without factorising.",
  analogyTitle: "The Signature Basketball Arc Crossing the Floor",
  analogyContent: "Imagine an archery arrow or basketball shot travelling through the air. The path forms a smooth symmetrical curve called a **Parabola** ($y = ax^2 + bx + c$). The points where the ball touches or cuts the floor ($y = 0$) are the **zeroes** of the polynomial! If the arc stays high in the air and never touches the ground, it has 0 real zeroes. If it bounces gently at one turning point, it has 1 zero. If it cuts through the floor and re-emerges, it has 2 zeroes.",
  sections: [
    {
      id: "poly_basics",
      label: "1. What is a Polynomial?",
      heading: "Terms, Degrees, and Why Negative Powers Are Disqualified",
      subheading: "The Anatomy of Algebraic Polynomial Expressions",
      explanation: "A polynomial is an algebraic expression consisting of variables and coefficients, combined using only addition, subtraction, and multiplication, where **ALL variable exponents must be whole numbers ($0, 1, 2, 3, \\dots$)**!  \n\n**The Iron Rule:**  \n$$\\text{Power of } x \\text{ must be a non-negative integer!}$$  \n$\\bullet$ $3x^2 + 5x - 7$ is a polynomial (powers are 2, 1, 0).  \n$\\bullet$ $\\frac{1}{x} = x^{-1}$ is **NOT** a polynomial (negative power!).  \n$\\bullet$ $\\sqrt{x} = x^{1/2}$ is **NOT** a polynomial (fractional power!).  \n$\\bullet$ $x^2 + \\frac{2}{x^2}$ is **NOT** a polynomial!  \n\n**Degree of a Polynomial**:  \nThe **highest exponent** of $x$ present in the polynomial:  \n$\\bullet$ Linear ($ax + b$): Degree 1 $\\implies$ at most 1 real zero (Straight line).  \n$\\bullet$ Quadratic ($ax^2 + bx + c$): Degree 2 $\\implies$ at most 2 real zeroes (Parabola).  \n$\\bullet$ Cubic ($ax^3 + bx^2 + cx + d$): Degree 3 $\\implies$ at most 3 real zeroes (S-curve).",
      formulasOrKeyPoints: [
        {
          title: "Standard Forms & Maximum Zeroes Theorem",
          content: "A polynomial $p(x)$ of degree $n$ can have **at most $n$ real zeroes**!  \n$$\\text{Linear: } ax + b = 0 \\implies x = -\\frac{b}{a} \\quad (\\text{exact 1 zero})$$  \n$$\\text{Quadratic: } ax^2 + bx + c = 0 \\quad (a \\neq 0) \\implies \\text{at most 2 zeroes}$$  \n$$\\text{Cubic: } ax^3 + bx^2 + cx + d = 0 \\quad (a \\neq 0) \\implies \\text{at most 3 zeroes}$$",
          note: "A constant non-zero polynomial like $p(x) = 5$ has degree 0 and 0 zeroes. The zero polynomial $p(x) = 0$ has undefined degree and infinitely many zeroes."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Test for Polynomial Eligibility in MCQs",
          action: "Inspect all powers of $x$. If any $x$ is inside a square root, in the denominator, or has a negative/fraction exponent, immediately eliminate it.",
          proTip: "Constant coefficients can have square roots (e.g. $\\sqrt{3}x^2 + 5x$ IS a polynomial because $\\sqrt{3}$ is a constant number; only $x$ cannot be inside the root!)."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing $\\sqrt{2}x$ with $\\sqrt{2x}$.",
          correction: "$\\sqrt{2}x = \\sqrt{2} \\cdot x^1$ (power of $x$ is 1 $\\implies$ valid polynomial). But $\\sqrt{2x} = \\sqrt{2} \\cdot x^{1/2}$ (fractional power $\\implies$ NOT a polynomial)."
        }
      ]
    },
    {
      id: "graph_zeroes",
      label: "2. Geometric Meaning of Zeroes (The Parabola)",
      heading: "Reading Zeroes from Graphs in 2 Seconds",
      subheading: "NCERT Exercise 2.1 Master Skill: Counting X-Axis Intersections",
      explanation: "What is a 'zero' geometrically?  \nA zero of a polynomial $p(x)$ is the $x$-coordinate of any point where the graph of $y = p(x)$ **crosses or touches the X-axis ($y = 0$)**!  \n\n**The Parabola Behavior for $y = ax^2 + bx + c$:**  \n$\\bullet$ If $a > 0$: The parabola opens **UPWARDS** (like a smiling cup $\\cup$).  \n$\\bullet$ If $a < 0$: The parabola opens **DOWNWARDS** (like a frowning dome $\\cap$).  \n\n**The 3 Geometric Cases for Quadratics:**  \n1. **Two Intersections**: Parabola cuts the X-axis at two distinct points $A(\\alpha, 0)$ and $B(\\beta, 0)$ $\\implies$ **2 distinct zeroes** ($D > 0$).  \n2. **One Tangent Touch**: Parabola touches the X-axis at exactly one turning point $\\implies$ **2 equal zeroes** ($D = 0$).  \n3. **No Intersection**: Parabola floats entirely above the X-axis or hangs entirely below $\\implies$ **0 real zeroes** ($D < 0$).",
      formulasOrKeyPoints: [
        {
          title: "X-Axis vs Y-Axis Rule (Board MCQ Golden Rule)",
          content: "$$\\mathbf{\\text{Number of Zeroes} = \\text{Number of times graph intersects the X-axis!}}$$  \nNever count intersections with the Y-axis! The Y-intercept only tells you the constant term $c = p(0)$, NOT the zeroes.",
          note: "If the question states $x = p(y)$ instead of $y = p(x)$, the rule inverts: count intersections with the Y-axis!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Count Only X-Axis Intersections",
          action: "Trace your finger along the curve from left to right. Put a dot each time it touches or crosses the horizontal X-axis line.",
          proTip: "Check the problem prompt: Does it ask for $y = p(x)$ (count X-axis) or $x = p(y)$ (count Y-axis)?"
        }
      ],
      examinerTraps: [
        {
          trap: "Counting the Y-axis intercept when finding the number of zeroes of $y = p(x)$.",
          correction: "Zeroes occur where $y = 0$ (on the X-axis). A graph crossing both $(3, 0)$ and $(0, -5)$ has only ONE zero at $x = 3$. The point $(0, -5)$ is the Y-intercept, not a zero."
        }
      ]
    },
    {
      id: "vieta_relations",
      label: "3. Vieta's Formulas (Zeroes & Coefficients)",
      heading: "The Golden Bridge Connecting Roots to Coefficients",
      subheading: "Sum = -b/a, Product = c/a, and Polynomial Reconstruction",
      explanation: "If $\\alpha$ and $\\beta$ are the zeroes of the quadratic polynomial $p(x) = ax^2 + bx + c$ ($a \\neq 0$), they are intimately tied to the coefficients by **Vieta's Formulas**:  \n\n1. **Sum of Zeroes ($S$)**:  \n$$\\mathbf{\\alpha + \\beta = -\\frac{b}{a} = -\\frac{\\text{Coefficient of } x}{\\text{Coefficient of } x^2}}$$  \n\n2. **Product of Zeroes ($P$)**:  \n$$\\mathbf{\\alpha \\beta = \\frac{c}{a} = \\frac{\\text{Constant term}}{\\text{Coefficient of } x^2}}$$  \n\n**Reconstructing a Quadratic Polynomial from Its Zeroes:**  \nIf you know the sum $S = \\alpha + \\beta$ and product $P = \\alpha\\beta$, the family of all matching polynomials is:  \n$$\\mathbf{p(x) = k \\left[ x^2 - (\\alpha + \\beta)x + \\alpha \\beta \\right] = k \\left[ x^2 - Sx + P \\right]} \\quad (k \\neq 0)$$  \nWhere $k$ is an arbitrary real constant multiplier!",
      formulasOrKeyPoints: [
        {
          title: "Complete Verification Template (Board 2-Mark Standard)",
          content: "Example: Find zeroes of $p(x) = x^2 - 2x - 8$ and verify relations.  \n1. Factorise: $x^2 - 4x + 2x - 8 = (x - 4)(x + 2) = 0 \\implies \\alpha = 4, \\; \\beta = -2$.  \n2. Calculated Sum: $\\alpha + \\beta = 4 + (-2) = 2$.  \n3. Coefficient Sum: $-\\frac{b}{a} = -\\frac{-2}{1} = 2$. $\\implies \\mathbf{\\alpha + \\beta = -\\frac{b}{a}}$ [Verified]  \n4. Calculated Product: $\\alpha\\beta = 4 \\times (-2) = -8$.  \n5. Coefficient Product: $\\frac{c}{a} = \\frac{-8}{1} = -8$. $\\implies \\mathbf{\\alpha\\beta = \\frac{c}{a}}$ [Verified]",
          note: "Writing both the direct calculation and the coefficient formula, followed by 'Hence Verified', guarantees full marks."
        },
        {
          title: "The Fraction Clearer Role of $k$",
          content: "If $S = \\frac{1}{4}$ and $P = -1$:  \n$$p(x) = k \\left[ x^2 - \\frac{1}{4}x - 1 \\right]$$  \nChoose $k = 4$ to clear denominators:  \n$$p(x) = 4x^2 - x - 4$$",
          note: "Never omit the $k$ multiplier in your definition; then specify $k = 4$ to write the simplest integer polynomial."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Extract Coefficients $a, b, c$ with Their Exact Signs",
          action: "Compare given polynomial to $ax^2 + bx + c$. Watch out for negative signs!",
          proTip: "If $p(x) = 3x^2 - 5$, note that $a = 3, b = 0, c = -5$."
        },
        {
          stepNo: 2,
          title: "Apply Middle-Term Splitting Carefully",
          action: "Find two numbers whose product is $a \\cdot c$ and whose sum is $b$.",
          proTip: "Always verify by re-expanding your factors before solving for $\\alpha$ and $\\beta$."
        }
      ],
      examinerTraps: [
        {
          trap: "Dropping the negative sign: writing $\\alpha + \\beta = \\frac{b}{a}$ instead of $-\\frac{b}{a}$.",
          correction: "The formula has a mandatory minus sign! If $b = -7$, then $-\\frac{b}{a} = -\\frac{-7}{a} = +\\frac{7}{a}$."
        },
        {
          trap: "Writing the reconstructed polynomial as $x^2 - Sx + P$ without the constant $k$.",
          correction: "Always include $k[x^2 - Sx + P]$ where $k \\in \\mathbb{R}, k \\neq 0$. CBSE marking guidelines penalise 0.5 marks for omitting $k$."
        }
      ]
    },
    {
      id: "symmetric_expressions",
      label: "4. Symmetric Expressions of Zeroes (HOTS Solver)",
      heading: "Evaluate Complex Expressions WITHOUT Finding the Roots",
      subheading: "The 5 Must-Memorize Algebraic Transformations for Board Exams",
      explanation: "In Board papers, you will frequently see questions like:  \n*If $\\alpha, \\beta$ are zeroes of $2x^2 - 5x + 7$, find the value of $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$ or $\\alpha^2 + \\beta^2$.*  \n\n**NEVER try to find $\\alpha$ and $\\beta$ directly!** The zeroes will usually be messy fractions or square roots!  \nInstead, use algebraic identities to convert the entire expression into terms of **$(\\alpha + \\beta)$** and **$(\\alpha\\beta)$** only, which you can read directly from coefficients in 2 seconds!",
      formulasOrKeyPoints: [
        {
          title: "The 5 Master Algebraic Transformations",
          content: "**1. Sum of Squares:**\n$$\\mathbf{\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta}$$\n\n**2. Sum of Reciprocals:**\n$$\\mathbf{\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta}}$$\n\n**3. Cross-Quotient Fractions:**\n$$\\mathbf{\\frac{\\alpha}{\\beta} + \\frac{\\beta}{\\alpha} = \\frac{\\alpha^2 + \\beta^2}{\\alpha\\beta} = \\frac{(\\alpha + \\beta)^2 - 2\\alpha\\beta}{\\alpha\\beta}}$$\n\n**4. Difference of Zeroes:**\n$$(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta \\implies \\mathbf{|\\alpha - \\beta| = \\sqrt{(\\alpha + \\beta)^2 - 4\\alpha\\beta}}$$\n\n**5. Sum of Cubes:**\n$$\\mathbf{\\alpha^3 + \\beta^3 = (\\alpha + \\beta)^3 - 3\\alpha\\beta(\\alpha + \\beta)}$$",
          note: "Every single one of these 5 identities expresses the target entirely in terms of Sum (S) and Product (P)!"
        },
        {
          title: "Worked Example: Find $(\\alpha - \\beta)$ when $p(x) = x^2 - 5x + 6$",
          content: "$\\alpha + \\beta = 5$, $\\alpha\\beta = 6$.  \n$$(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta = 5^2 - 4(6) = 25 - 24 = 1 \\implies \\alpha - \\beta = \\pm 1$$",
          note: "Notice how simple this calculation is when using identity #4."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Extract $\\alpha + \\beta$ and $\\alpha\\beta$ First",
          action: "Write down $S = -b/a$ and $P = c/a$ at the top of your workspace.",
          proTip: "Keep them as simplified fractions."
        },
        {
          stepNo: 2,
          title: "Substitute Directly into the Algebraic Identity",
          action: "Replace all instances of $(\\alpha+\\beta)$ with $S$ and $\\alpha\\beta$ with $P$.",
          proTip: "Simplify fractions carefully using common denominators."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing $(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$ (using 2 instead of 4).",
          correction: "$(\\alpha + \\beta)^2 - 2\\alpha\\beta = \\alpha^2 + \\beta^2$. To get $(\\alpha - \\beta)^2$, you must subtract $4\\alpha\\beta$!"
        }
      ]
    },
    {
      id: "new_polynomials",
      label: "5. Constructing New Polynomials with Transformed Zeroes",
      heading: "Find a Polynomial whose zeroes are $2\\alpha, 2\\beta$ or $1/\\alpha, 1/\\beta$",
      subheading: "The New Sum (S') and New Product (P') Master Strategy",
      explanation: "A frequent 3-mark CBSE question asks:  \n*If $\\alpha, \\beta$ are zeroes of $ax^2 + bx + c$, find a quadratic polynomial whose zeroes are $\\frac{1}{\\alpha}$ and $\\frac{1}{\\beta}$, or $2\\alpha$ and $2\\beta$.*  \n\n**The Universal 3-Step Strategy:**  \n1. Calculate old sum $S = \\alpha + \\beta = -b/a$ and old product $P = \\alpha\\beta = c/a$.  \n2. Compute **New Sum ($S'$)** and **New Product ($P'$)**:  \n   $$S' = \\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\frac{-b/a}{c/a} = -\\frac{b}{c}$$  \n   $$P' = \\frac{1}{\\alpha} \\cdot \\frac{1}{\\beta} = \\frac{1}{\\alpha\\beta} = \\frac{1}{c/a} = \\frac{a}{c}$$  \n3. Write the new polynomial:  \n   $$p'(x) = k [x^2 - S'x + P'] = k \\left[ x^2 - \\left(-\\frac{b}{c}\\right)x + \\frac{a}{c} \\right] = k [cx^2 + bx + a]$$",
      formulasOrKeyPoints: [
        {
          title: "Reciprocal Roots Quick Secret",
          content: "If a polynomial has zeroes $\\alpha, \\beta$, the polynomial with reciprocal zeroes $\\frac{1}{\\alpha}, \\frac{1}{\\beta}$ is simply obtained by **reversing the order of coefficients**:  \n$$ax^2 + bx + c \\quad \\longrightarrow \\quad \\mathbf{cx^2 + bx + a}$$",
          note: "Use this mental shortcut to verify your answer in 2 seconds during exams!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Always Define New Roots with Distinct Symbols",
          action: "Let the new roots be $\\alpha' = \\frac{1}{\\alpha}$ and $\\beta' = \\frac{1}{\\beta}$.",
          proTip: "Calculate $S' = \\alpha' + \\beta'$ and $P' = \\alpha' \\cdot \\beta'$ separately before building the polynomial."
        }
      ],
      examinerTraps: [
        {
          trap: "Forgetting to take common denominator when adding fractions for $S'$.",
          correction: "$\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta}$. Do not write $\\frac{1}{\\alpha + \\beta}$!"
        }
      ]
    },
    {
      id: "cubic_polynomials",
      label: "6. Cubic Polynomials Vieta Relations (CBSE HOTS)",
      heading: "The 3 Relations for $p(x) = ax^3 + bx^2 + cx + d$",
      subheading: "Sum, Sum of Pairwise Products, and Triple Product",
      explanation: "If $\\alpha, \\beta, \\gamma$ are the 3 zeroes of a cubic polynomial $p(x) = ax^3 + bx^2 + cx + d$ ($a \\neq 0$):  \n\n1. **Sum of Zeroes**:  \n$$\\mathbf{\\alpha + \\beta + \\gamma = -\\frac{b}{a} = -\\frac{\\text{Coeff of } x^2}{\\text{Coeff of } x^3}}$$  \n\n2. **Sum of Pairwise Products**:  \n$$\\mathbf{\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = \\frac{c}{a} = \\frac{\\text{Coeff of } x}{\\text{Coeff of } x^3}}$$  \n\n3. **Product of All 3 Zeroes**:  \n$$\\mathbf{\\alpha\\beta\\gamma = -\\frac{d}{a} = -\\frac{\\text{Constant term}}{\\text{Coeff of } x^3}}$$  \n\n**Sign Pattern to Remember:** The signs alternate strictly: **Minus ($-$), Plus ($+$), Minus ($-$)**!",
      formulasOrKeyPoints: [
        {
          title: "Reconstructing a Cubic Polynomial",
          content: "$$\\mathbf{p(x) = k \\left[ x^3 - (\\alpha+\\beta+\\gamma)x^2 + (\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha)x - \\alpha\\beta\\gamma \\right]}$$",
          note: "Notice the alternating signs: $x^3 - S_1 x^2 + S_2 x - S_3$."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Solve When Zeroes Are in AP",
          action: "If zeroes of cubic are in AP, assume them as $(a - d), a, (a + d)$. Their sum is $3a = -b/a$, which instantly gives the middle zero $a$!",
          proTip: "This is one of the most celebrated 3-mark questions from the 2009 NCERT and RS Aggarwal!"
        }
      ],
      examinerTraps: [
        {
          trap: "Forgetting the negative sign on the constant term: writing $\\alpha\\beta\\gamma = \\frac{d}{a}$ instead of $-\\frac{d}{a}$.",
          correction: "Cubic relations alternate: $-\\frac{b}{a}$, then $+\\frac{c}{a}$, then $-\\frac{d}{a}$. The product of 3 zeroes always carries a negative sign."
        }
      ]
    }
  ]
};
