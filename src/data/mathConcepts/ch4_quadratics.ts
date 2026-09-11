import type { MathChapterConcept } from "./types";

export const CH4_QUADRATICS_CONCEPT: MathChapterConcept = {
  chapterNo: 4,
  title: "Quadratic Equations",
  weightage: "6 Marks (Board Mandatory)",
  oneLiner: "The Discriminant D = b² - 4ac is the root detector; Sridharacharya formula guarantees solutions when factorising fails.",
  analogyTitle: "The Ground Radar for Parabolic Rockets",
  analogyContent: "When an engineer launches a projectile or model rocket, its altitude over time follows a quadratic curve $h(t) = -gt^2 + vt + h_0$. Finding when it touches the ground ($h = 0$) means solving a quadratic equation! The Discriminant $D = b^2 - 4ac$ acts like a radar detector before launch: If $D > 0$, the rocket cuts ground level twice (launch and landing). If $D = 0$, it touches ground gently at a single turning point. If $D < 0$, it hovers up in the air and never touches the real ground!",
  sections: [
    {
      id: "quadratic_basics",
      label: "1. What is a Quadratic Equation?",
      heading: "Standard Form $ax^2 + bx + c = 0$ ($a \\neq 0$)",
      subheading: "Roots vs Zeroes + Verification of Quadratic Status",
      explanation: "A quadratic equation in variable $x$ is an equation of the form:  \n$$\\mathbf{ax^2 + bx + c = 0} \\qquad (a, b, c \\in \\mathbb{R}, \\; \\mathbf{a \\neq 0})$$  \n\n**Why must $a \\neq 0$?**  \nIf $a = 0$, the $x^2$ term vanishes, leaving $bx + c = 0$, which is a **linear** equation, NOT a quadratic!  \n\n**Roots vs Zeroes:**  \n$\\bullet$ For a polynomial $p(x) = ax^2 + bx + c$, the values of $x$ where $p(x) = 0$ are called **Zeroes**.  \n$\\bullet$ For the equation $ax^2 + bx + c = 0$, those same values of $x$ are called **Roots** or **Solutions**!  \nEvery quadratic equation has **at most 2 real roots**.",
      formulasOrKeyPoints: [
        {
          title: "Standard Form Ordering Rule",
          content: "$$\\mathbf{ax^2 + bx + c = 0}$$  \nAlways arrange terms in descending powers of $x$: $x^2$ term first, $x^1$ term second, constant term third, and 0 on the RHS.",
          note: "If an equation is written as $(x - 2)^2 + 1 = 2x - 3$, expand completely before deciding if it is quadratic: $x^2 - 4x + 4 + 1 = 2x - 3 \\implies x^2 - 6x + 8 = 0$ (Yes, quadratic!)."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Expand and Simplify Completely in Section A MCQs",
          action: "Do not guess whether an equation is quadratic by looking at unexpanded brackets. Expand $(x+1)^3$ and $(x-2)^2$ to see if $x^3$ or $x^2$ terms cancel out!",
          proTip: "In $(x+2)^3 = x^3 - 4$, expanding gives $x^3 + 6x^2 + 12x + 8 = x^3 - 4$. The $x^3$ cancels on both sides, leaving $6x^2 + 12x + 12 = 0$, which IS a quadratic equation!"
        }
      ],
      examinerTraps: [
        {
          trap: "Assuming $x(x+1) + 8 = (x+2)(x-2)$ is quadratic because you see $x \\times x$.",
          correction: "Expand both sides: $x^2 + x + 8 = x^2 - 4$. The $x^2$ terms cancel out, leaving $x + 12 = 0$, which is LINEAR, not quadratic!"
        }
      ]
    },
    {
      id: "factorisation_method",
      label: "2. Solving by Factorisation (Middle Term Splitting)",
      heading: "The Product $a \\cdot c$ and Sum $b$ Strategy",
      subheading: "Splitting Terms with Signs and Square Roots",
      explanation: "To solve $ax^2 + bx + c = 0$ by factorisation:  \n1. Multiply the leading coefficient $a$ by the constant $c$: compute **$P = a \\cdot c$**.  \n2. Find two numbers $p$ and $q$ such that:  \n   $$\\mathbf{p \\cdot q = a \\cdot c} \\qquad \\text{and} \\qquad \\mathbf{p + q = b}$$  \n3. Split the middle term: $bx = px + qx$.  \n4. Factor by grouping terms in pairs: $ax^2 + px + qx + c = (x - r_1)(x - r_2) = 0$.  \n5. Apply the Zero Product Property: If $A \\cdot B = 0$, then either $A = 0$ or $B = 0$!",
      formulasOrKeyPoints: [
        {
          title: "Splitting Square Root Middle Terms (CBSE Board Favorite!)",
          content: "Example: Solve $\\sqrt{2}x^2 + 7x + 5\\sqrt{2} = 0$.  \n1. Product $a \\cdot c = \\sqrt{2} \\times 5\\sqrt{2} = 5 \\times 2 = 10$.  \n2. Sum $b = 7$. Numbers are $5$ and $2$ (since $5 \\times 2 = 10$ and $5 + 2 = 7$).  \n3. Split: $\\sqrt{2}x^2 + 2x + 5x + 5\\sqrt{2} = 0$  \n4. Group (remember $2 = \\sqrt{2} \\cdot \\sqrt{2}$):  \n   $$\\sqrt{2}x(x + \\sqrt{2}) + 5(x + \\sqrt{2}) = 0$$  \n   $$(x + \\sqrt{2})(\\sqrt{2}x + 5) = 0 \\implies \\mathbf{x = -\\sqrt{2}} \\quad \\text{or} \\quad \\mathbf{x = -\\frac{5}{\\sqrt{2}}}$$",
          note: "This exact square root factorisation question has appeared 4 times in CBSE board papers. Master the trick $2 = \\sqrt{2} \\cdot \\sqrt{2}$."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Check Signs of Product and Sum",
          action: "If $a \\cdot c > 0$, both numbers have the same sign (both positive if $b>0$, both negative if $b<0$). If $a \\cdot c < 0$, numbers have opposite signs (larger number gets the sign of $b$).",
          proTip: "This sign rule eliminates 95% of trial-and-error time."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing the roots as $p$ and $q$ instead of changing their signs.",
          correction: "If the factors are $(x - 3)(x + 5) = 0$, the roots are $x = +3$ and $x = -5$. Do not forget to equate each factor to zero!"
        }
      ]
    },
    {
      id: "quadratic_formula",
      label: "3. Sridharacharya Quadratic Formula",
      heading: "The Universal Weapon: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
      subheading: "Derivation via Completing the Square + Flawless Execution",
      explanation: "When numbers are large or middle-term splitting is difficult, the **Quadratic Formula** (discovered by ancient Indian mathematician Sridharacharya) guarantees the exact roots in 3 steps:  \n\n$$\\mathbf{x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}}$$  \n\n**Where does it come from? (Completing the Square)**:  \n$$ax^2 + bx + c = 0 \\implies x^2 + \\frac{b}{a}x = -\\frac{c}{a}$$  \nAdd $\\left(\\frac{b}{2a}\\right)^2$ to both sides:  \n$$x^2 + 2\\left(\\frac{b}{2a}\\right)x + \\left(\\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2} - \\frac{c}{a} = \\frac{b^2 - 4ac}{4a^2}$$  \nTake the square root of both sides:  \n$$x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a} \\implies \\mathbf{x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}}$$",
      formulasOrKeyPoints: [
        {
          title: "The 3-Step Quadratic Formula Execution Protocol",
          content: "**Step 1: Calculate Discriminant Separately**\n$$\\mathbf{D = b^2 - 4ac}$$\n\n**Step 2: Inspect Nature of Roots**\n- If $D < 0$, stop and write: *'No real roots exist ($D < 0$)'*.\n\n**Step 3: Calculate the Real Roots**\n- If $D \\ge 0$, substitute into:\n$$\\mathbf{x = \\frac{-b \\pm \\sqrt{D}}{2a}}$$\n$$x_1 = \\frac{-b + \\sqrt{D}}{2a}, \\qquad x_2 = \\frac{-b - \\sqrt{D}}{2a}$$",
          note: "Always calculate D separately first! If D is negative, you save 5 minutes of useless calculation."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Calculate $D$ in a Dedicated Separate Line",
          action: "Write $D = b^2 - 4ac = (-5)^2 - 4(2)(-3) = 25 + 24 = 49$.",
          proTip: "Because 49 is a perfect square ($7^2$), the roots will be clean rational numbers!"
        },
        {
          stepNo: 2,
          title: "Substitute into Formula with Parentheses",
          action: "Write $x = \\frac{-(-5) \\pm \\sqrt{49}}{2(2)} = \\frac{5 \\pm 7}{4}$.",
          proTip: "Split into two cases: $x_1 = \\frac{5+7}{4} = 3$ and $x_2 = \\frac{5-7}{4} = -\\frac{1}{2}$."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing the fraction line only under $\\sqrt{b^2-4ac}$ instead of under the whole numerator: $-b \\pm \\frac{\\sqrt{b^2-4ac}}{2a}$.",
          correction: "The denominator $2a$ divides BOTH $-b$ and the square root! The whole numerator $(-b \\pm \\sqrt{D})$ must sit on top of the fraction line."
        },
        {
          trap: "Squaring a negative $b$ and getting a negative number: writing $(-6)^2 = -36$.",
          correction: "Any real number squared is POSITIVE! $(-6)^2 = +36$. This is the #1 arithmetic error in Chapter 4."
        }
      ]
    },
    {
      id: "discriminant_nature",
      label: "4. The Discriminant Radar & Nature of Roots",
      heading: "The 3 Fates of Quadratic Roots ($D > 0, D = 0, D < 0$)",
      subheading: "Real, Distinct, Equal, Rational, and Imaginary Roots Explained",
      explanation: "The quantity under the square root, **$D = b^2 - 4ac$**, is called the **Discriminant** because it 'discriminates' between the different types of roots:  \n\n1. **Case 1: $D > 0$ (Two Distinct Real Roots)**  \n$\\sqrt{D}$ is a positive real number. There are two completely different solutions:  \n$$x_1 = \\frac{-b + \\sqrt{D}}{2a} \\qquad x_2 = \\frac{-b - \\sqrt{D}}{2a} \\qquad (x_1 \\neq x_2)$$  \n\n2. **Case 2: $D = 0$ (Two Equal Real Roots / Coincident Roots)**  \n$\\sqrt{D} = 0$, so the $\\pm$ disappears! Both roots collapse into one identical value:  \n$$x_1 = x_2 = -\\frac{b}{2a}$$  \n\n3. **Case 3: $D < 0$ (No Real Roots)**  \nYou cannot take the square root of a negative number in real numbers! The equation has **no real roots**.",
      formulasOrKeyPoints: [
        {
          title: "The Nature of Roots Master Chart",
          content: "$$\\begin{array}{|c|c|c|} \\hline \\textbf{Value of } D = b^2 - 4ac & \\textbf{Nature of Roots} & \\textbf{Graph Behavior} \\\\ \\hline D > 0 & \\text{Two distinct real roots} & \\text{Cuts X-axis at 2 points} \\\\ \\hline D = 0 & \\text{Two equal real roots} & \\text{Touches X-axis at 1 point} \\\\ \\hline D < 0 & \\text{No real roots} & \\text{Floats completely off X-axis} \\\\ \\hline \\end{array}$$",
          note: "If question states 'has real roots' (without saying distinct or equal), use condition: D ≥ 0!"
        },
        {
          title: "Rational vs Irrational Roots Rule",
          content: "If $a, b, c$ are rational:  \n$\\bullet$ If $D$ is a perfect square ($0, 1, 4, 9, 16, 25, \\dots$) $\\implies$ Roots are **Rational**.  \n$\\bullet$ If $D > 0$ is NOT a perfect square $\\implies$ Roots are **Irrational Conjugate Pairs** ($p + \\sqrt{q}$ and $p - \\sqrt{q}$).",
          note: "Irrational roots always travel in pairs! If one root is $2 + \\sqrt{3}$, the other root MUST be $2 - \\sqrt{3}$."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Solving the Guaranteed 'Equal Roots' Parameter $k$ Question",
          action: "Set $D = b^2 - 4ac = 0$. Solve the resulting equation for $k$.",
          proTip: "Check that your values of $k$ do not make the leading coefficient $a = 0$!"
        }
      ],
      examinerTraps: [
        {
          trap: "In $(k-1)x^2 + 2(k-1)x + 1 = 0$, writing $k = 1$ as a valid answer.",
          correction: "If $k = 1$, the leading coefficient $(k-1) = 0$, which destroys the quadratic equation entirely! Always check $a \\neq 0$. Here $k = 1$ must be rejected, leaving only $k = 2$."
        }
      ]
    },
    {
      id: "word_problems_quadratics",
      label: "5. Quadratic Word Problems Playbook",
      heading: "The 3 Board Favorites: Speed, Pipes, and Geometry",
      subheading: "Forming the Correct Quadratic Equation from Real-World Scenarios",
      explanation: "Board exam long-answer questions (4 or 5 marks) test your ability to convert a story into a quadratic equation:  \n\n1. **Type 1: Train / Flight Speed Problems**  \nA train travels $360\\text{ km}$ at a uniform speed. If the speed had been $5\\text{ km/h}$ more, it would have taken 48 minutes less for the journey.  \n$$\\text{Old Time} - \\text{New Time} = \\text{Time Difference} \\implies \\mathbf{\\frac{360}{x} - \\frac{360}{x + 5} = \\frac{48}{60} = \\frac{4}{5}}$$  \n\n2. **Type 2: Two Water Taps Filling a Tank**  \nTwo water taps together can fill a tank in $9\\frac{3}{8} = \\frac{75}{8}\\text{ hours}$. The larger tap takes 10 hours less than the smaller tap.  \n$$\\text{Work done by small tap in 1 hr} = \\frac{1}{x} \\qquad \\text{By large tap} = \\frac{1}{x - 10}$$  \n$$\\mathbf{\\frac{1}{x} + \\frac{1}{x - 10} = \\frac{1}{75/8} = \\frac{8}{75}}$$  \n\n3. **Type 3: Right Triangle Geometry (Pythagoras)**  \nHypotenuse is $3\\sqrt{5}\\text{ cm}$. If the smaller side is tripled and larger side doubled, the new hypotenuse is $15\\text{ cm}$. Set up $x^2 + y^2 = 45$ and solve.",
      formulasOrKeyPoints: [
        {
          title: "Speed Equation Simplification Trick",
          content: "$$\\frac{D}{x} - \\frac{D}{x + s} = T \\implies D \\left( \\frac{x + s - x}{x(x + s)} \\right) = T \\implies \\mathbf{D \\cdot s = T \\cdot x(x + s)}$$",
          note: "This shortcut immediately converts the fraction equation into a clean quadratic: $T x^2 + T s x - D s = 0$!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Always State: 'Since speed/time cannot be negative, we reject $x < 0$'",
          action: "A quadratic equation always yields two roots. In real-world problems, physical quantities (speed, time, side length) cannot be negative.",
          proTip: "CBSE marking schemes deduct 0.5 marks if you don't explicitly write the reason for rejecting the negative root."
        }
      ],
      examinerTraps: [
        {
          trap: "Forgetting to convert minutes to hours: writing $48$ instead of $\\frac{48}{60} = \\frac{4}{5}$ hours.",
          correction: "Units must match! If speeds are in km/h, all times MUST be converted into hours."
        }
      ]
    }
  ]
};
