import type { MathChapterConcept } from "./types";

export const CH3_LINEAR_EQUATIONS_CONCEPT: MathChapterConcept = {
  chapterNo: 3,
  title: "Pair of Linear Equations in Two Variables",
  weightage: "6-7 Marks (High Scoring)",
  oneLiner: "Two lines on a plane must either cross once, run parallel forever, or lie on top of each other; Ratios predict the fate.",
  analogyTitle: "Two Railway Tracks on a Map",
  analogyContent: "Imagine two high-speed trains moving along straight railway tracks on a flat map: Track 1 ($a_1x + b_1y + c_1 = 0$) and Track 2 ($a_2x + b_2y + c_2 = 0$). What can happen?  \n1. If the tracks have different slopes, they will cross at exactly ONE junction (Unique Solution).  \n2. If the tracks run in the exact same direction and maintain equal separation, they run parallel and never meet (No Solution).  \n3. If both tracks are built right on top of each other, every single millimeter is shared (Infinitely Many Solutions)!",
  sections: [
    {
      id: "lines_geometry",
      label: "1. The Geometry of Linear Equations",
      heading: "Why $ax + by + c = 0$ is Always a Straight Line",
      subheading: "Understanding Variables, Solutions, and the Graphing Principle",
      explanation: "A linear equation in two variables $x$ and $y$ has the standard form:  \n$$\\mathbf{ax + by + c = 0} \\quad (a^2 + b^2 \\neq 0)$$  \nEvery point $(x, y)$ that satisfies this equation lies on a single, continuous **straight line** on the Cartesian coordinate plane.  \n\nWhen we have a **pair (system)** of two linear equations:  \n$$a_1x + b_1y + c_1 = 0 \\qquad a_2x + b_2y + c_2 = 0$$  \nA 'solution' means finding an ordered pair $(x, y)$ that satisfies **BOTH equations simultaneously**! Geometrically, this means finding the point where the two lines intersect.",
      formulasOrKeyPoints: [
        {
          title: "Standard Form Warning",
          content: "$$\\begin{aligned} L_1 &: a_1x + b_1y + c_1 = 0 \\\\\\\\ L_2 &: a_2x + b_2y + c_2 = 0 \\end{aligned}$$",
          note: "Always move both constants $c_1$ and $c_2$ to the LHS (or both to the RHS) before comparing coefficients!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Find Two Clean Points to Graph a Line",
          action: "Set $x = 0$ to find the Y-intercept $(0, -c/b)$. Set $y = 0$ to find the X-intercept $(-c/a, 0)$.",
          proTip: "Pick integer values whenever possible to keep graph plotting clean and accurate."
        }
      ],
      examinerTraps: [
        {
          trap: "Comparing ratios when one equation has $c$ on LHS and the other has $c$ on RHS (e.g. $2x + 3y = 7$ and $4x + 6y + 14 = 0$).",
          correction: "Standardize first! Rewrite $2x + 3y - 7 = 0$ and $4x + 6y + 14 = 0$. Here $c_1/c_2 = -7/14 = -1/2$, which is NOT equal to $a_1/a_2 = 1/2$. The lines are parallel, not coincident!"
        }
      ]
    },
    {
      id: "consistency_matrix",
      label: "2. The Ratio Consistency Matrix",
      heading: "Comparing $\\frac{a_1}{a_2}, \\frac{b_1}{b_2}, \\frac{c_1}{c_2}$ in 5 Seconds",
      subheading: "Intersecting vs Parallel vs Coincident Lines without Plotting",
      explanation: "Before doing any algebra, compare the three coefficient ratios:\n\n1. **Case 1: Intersecting Lines (Consistent & Unique Solution)**\n$$\\dfrac{a_1}{a_2} \\;\\neq\\; \\dfrac{b_1}{b_2}$$\nThe lines have different slopes. They meet at exactly **ONE point $(x_0, y_0)$**. The system is called **Consistent**.\n\n2. **Case 2: Coincident Lines (Dependent Consistent & Infinitely Many Solutions)**\n$$\\dfrac{a_1}{a_2} \\;=\\; \\dfrac{b_1}{b_2} \\;=\\; \\dfrac{c_1}{c_2}$$\nThe two equations are identical multiples of each other! One line lies right on top of the other. Every point on the line is a common solution. The system is called **Dependent Consistent**.\n\n3. **Case 3: Parallel Lines (Inconsistent & No Solution)**\n$$\\dfrac{a_1}{a_2} \\;=\\; \\dfrac{b_1}{b_2} \\;\\neq\\; \\dfrac{c_1}{c_2}$$\nThe lines have the same slope but different intercepts. They run alongside each other forever and never touch. There is **NO common solution**. The system is called **Inconsistent**.",
      formulasOrKeyPoints: [
        {
          title: "The Complete 3-Way Board Classification Table",
          content: "$$\\begin{array}{|c|c|c|c|} \\hline \\textbf{Ratio Condition} & \\textbf{Graphical Meaning} & \\textbf{Algebraic Solutions} & \\textbf{System Status} \\\\[6pt] \\hline \\dfrac{a_1}{a_2} \\neq \\dfrac{b_1}{b_2} & \\text{Intersecting Lines} & \\text{Exactly 1 (Unique)} & \\text{Consistent} \\\\[8pt] \\hline \\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} = \\dfrac{c_1}{c_2} & \\text{Coincident (Overlapping)} & \\text{Infinitely Many} & \\text{Dependent Consistent} \\\\[8pt] \\hline \\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} \\neq \\dfrac{c_1}{c_2} & \\text{Parallel Lines} & \\text{Zero (No Solution)} & \\text{Inconsistent} \\\\[6pt] \\hline \\end{array}$$",
          note: "Notice: The term 'Consistent' includes BOTH unique solution AND infinitely many solutions!"
        },
        {
          title: "The Master Parameter 'k' Template (Guaranteed 3-Mark Question)",
          content: "Problem: For what value of $k$ does the system have no solution?\n$$kx + 3y = k - 2 \\qquad 12x + ky = k$$\n1. For no solution: $\\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} \\neq \\dfrac{c_1}{c_2} \\implies \\dfrac{k}{12} = \\dfrac{3}{k} \\neq \\dfrac{k-2}{k}$.\n2. From $\\dfrac{k}{12} = \\dfrac{3}{k} \\implies k^2 = 36 \\implies k = \\pm 6$.\n3. Check inequality $\\dfrac{3}{k} \\neq \\dfrac{k-2}{k}$:\n   - If $k = 6$: $\\dfrac{3}{6} \\neq \\dfrac{4}{6}$ ($1/2 \\neq 2/3$ True! $\\implies k = 6$ accepted).\n   - If $k = -6$: $\\dfrac{3}{-6} = -1/2$, and $\\dfrac{-8}{-6} = 4/3$ (True! $\\implies k = -6$ accepted).",
          note: "Always verify the inequality $\\neq \\dfrac{c_1}{c_2}$! If a value of $k$ makes all 3 ratios equal, it gives infinite solutions instead of no solution."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Write Both Equations in Exact Standard Form",
          action: "Align: $a_1x + b_1y = -c_1$ and $a_2x + b_2y = -c_2$.",
          proTip: "Check for negative signs in coefficients (e.g. $b_1 = -5$)."
        },
        {
          stepNo: 2,
          title: "Compute and Simplify the Ratios",
          action: "Calculate $\\frac{a_1}{a_2}$, $\\frac{b_1}{b_2}$, and $\\frac{c_1}{c_2}$ as lowest-term fractions.",
          proTip: "If $\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}$, stop immediately! You already have a unique solution."
        }
      ],
      examinerTraps: [
        {
          trap: "Forgetting to check the inequality part when finding $k$ for 'no solution'.",
          correction: "Setting $\\frac{a_1}{a_2} = \\frac{b_1}{b_2}$ only gives candidate values for $k$. You MUST check that $\\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$. If all three are equal, the system has infinite solutions, not zero!"
        }
      ]
    },
    {
      id: "algebraic_methods",
      label: "3. Master Algebraic Methods: Elimination & Substitution",
      heading: "Step-by-Step Algorithms for Error-Free Solving",
      subheading: "Elimination Method (Recommended) vs Substitution Method",
      explanation: "While graphical methods give visual insight, algebraic methods provide 100% exact numerical answers without graph paper errors.  \n\n**The Elimination Method (Fastest & Most Reliable):**  \n1. Pick the variable with simpler numbers (say $x$).  \n2. Multiply Equation (1) by the coefficient of $x$ from Equation (2), and multiply Equation (2) by the coefficient of $x$ from Equation (1).  \n3. Now the $x$ coefficients are identical!  \n4. Subtract the two equations to completely eliminate $x$.  \n5. Solve the resulting one-variable equation for $y$.  \n6. Back-substitute $y$ into either original equation to find $x$.",
      formulasOrKeyPoints: [
        {
          title: "Worked Elimination Blueprint",
          content: "Solve: $2x + 3y = 11$ (Eq 1) and $3x + 2y = 4$ (Eq 2)  \n1. Multiply Eq 1 by 3: $6x + 9y = 33$  \n2. Multiply Eq 2 by 2: $6x + 4y = 8$  \n3. Subtract: $(6x - 6x) + (9y - 4y) = 33 - 8 \\implies 5y = 25 \\implies \\mathbf{y = 5}$  \n4. Substitute $y = 5$ into Eq 1: $2x + 3(5) = 11 \\implies 2x = 11 - 15 = -4 \\implies \\mathbf{x = -2}$  \n$\\implies \\mathbf{(x, y) = (-2, 5)}$",
          note: "Notice how cleanly the variable $x$ disappears in step 3."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Choose the Variable with Alternating Signs",
          action: "If one equation has $+y$ and the other has $-y$, eliminate $y$ by ADDING the equations (which avoids subtraction sign errors!).",
          proTip: "Addition is much less error-prone than subtraction under exam conditions."
        },
        {
          stepNo: 2,
          title: "Always Check Your Solution in BOTH Original Equations",
          action: "Plug your final $(x, y)$ back into both Eq 1 and Eq 2.",
          proTip: "If it satisfies both, you are 100% guaranteed full marks."
        }
      ],
      examinerTraps: [
        {
          trap: "Sign mistakes when subtracting negative terms (e.g. subtracting $-3y$ gives $+3y$).",
          correction: "Write brackets around the subtracted equation: $-(3x - 2y = 4) \\implies -3x + 2y = -4$."
        }
      ]
    },
    {
      id: "word_problems_playbook",
      label: "4. Word Problems Master Archetypes (Parijat Jain Taxonomy)",
      heading: "The 5 Classic CBSE Word Problem Blueprints",
      subheading: "Boats, Two-Digit Numbers, Ages, Fixed Charges, and Fractions",
      explanation: "Parijat Jain identifies 5 universal word-problem archetypes tested in CBSE Board Exams:  \n\n1. **Type A: Upstream & Downstream Boat Speeds (Highest Yield!)**  \nLet speed of boat in still water $= x\\text{ km/h}$, and speed of stream $= y\\text{ km/h}$ ($x > y$).  \n$$\\text{Downstream Speed (with current)} = \\mathbf{x + y}$$  \n$$\\text{Upstream Speed (against current)} = \\mathbf{x - y}$$  \nUsing $\\text{Time} = \\frac{\\text{Distance}}{\\text{Speed}}$:  \n$$\\frac{d_1}{x - y} + \\frac{d_2}{x + y} = t_1$$  \n\n2. **Type B: Two-Digit Number Interchange**  \nLet tens digit $= x$, units digit $= y$.  \n$$\\text{Original Number} = \\mathbf{10x + y}$$  \n$$\\text{Reversed Number} = \\mathbf{10y + x}$$  \n\n3. **Type C: Age Problems (Time Travel)**  \nLet father's present age $= x$, son's present age $= y$.  \n$\\bullet$ $n$ years ago: Father $= x - n$, Son $= y - n$.  \n$\\bullet$ $n$ years hence (later): Father $= x + n$, Son $= y + n$.  \n\n4. **Type D: Fixed Charge + Variable Running Charge**  \nLet fixed charge $= x$, per-km (or per-day) charge $= y$.  \n$$\\text{Total Cost} = x + (\\text{distance})y = \\text{Total Bill}$$  \n\n5. **Type E: Fraction Problems**  \nLet fraction be $\\frac{x}{y}$ ($y \\neq 0$). Add/subtract constants to numerator and denominator as instructed.",
      formulasOrKeyPoints: [
        {
          title: "Upstream / Downstream Golden Rules",
          content: "$$\\mathbf{x > y \\text{ ALWAYS! (Boat must be faster than the stream, or it drifts backwards)}}$$  \n$$\\text{Speed of Boat } x = \\frac{\\text{Downstream Speed} + \\text{Upstream Speed}}{2}$$  \n$$\\text{Speed of Stream } y = \\frac{\\text{Downstream Speed} - \\text{Upstream Speed}}{2}$$",
          note: "Use these two instant formulas to verify your boat and stream answers in 5 seconds!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Define Variables with Explicit Units",
          action: "Always begin: 'Let the speed of the boat in still water be $x\\text{ km/h}$ and the speed of the stream be $y\\text{ km/h}$.'",
          proTip: "CBSE marking schemes award 0.5 marks for correct variable definition with units."
        },
        {
          stepNo: 2,
          title: "Formulate Two Independent Equations",
          action: "Translate each English sentence into a mathematical equation.",
          proTip: "Look for transition words like 'In the second case' or 'After 5 years' to identify the split between Eq 1 and Eq 2."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing the two-digit number as $xy$ instead of $10x + y$.",
          correction: "In algebra, $xy$ means $x \\times y$! In our place-value decimal system, 47 is $4 \\times 10 + 7$. You must write $10x + y$!"
        },
        {
          trap: "Writing upstream speed as $y - x$ instead of $x - y$.",
          correction: "Boat speed $x$ MUST come first: $x - y$. If $y > x$, the boat gets swept downstream and cannot travel upstream at all!"
        }
      ]
    },
    {
      id: "reducible_equations",
      label: "5. Equations Reducible to Linear Form (2009 NCERT Classic)",
      heading: "The $u = \\frac{1}{x+y}$ and $v = \\frac{1}{x-y}$ Substitution Trick",
      subheading: "Solving Fractions with Variables in Denominators",
      explanation: "Classic challenge questions from the 2009 NCERT and RS Aggarwal feature variables trapped in denominators:  \n$$\\frac{10}{x + y} + \\frac{2}{x - y} = 4 \\qquad \\frac{15}{x + y} - \\frac{5}{x - y} = -2$$  \n\n**NEVER take LCM of $(x+y)$ and $(x-y)$ directly!** That creates $x^2 - y^2$ terms, turning it into an impossible non-linear system!  \n\n**The Universal 2-Stage Substitution:**  \n1. Let $u = \\frac{1}{x + y}$ and $v = \\frac{1}{x - y}$.  \n2. The system transforms into clean, standard linear equations:  \n   $$10u + 2v = 4 \\qquad 15u - 5v = -2$$  \n3. Solve for $u$ and $v$ using elimination (e.g. $u = \\frac{1}{5}, v = 1$).  \n4. Invert back to $x$ and $y$:  \n   $$x + y = \\frac{1}{u} = 5 \\qquad x - y = \\frac{1}{v} = 1$$  \n5. Add the two simple equations: $2x = 6 \\implies \\mathbf{x = 3}$, $\\mathbf{y = 2}$!",
      formulasOrKeyPoints: [
        {
          title: "The 2-Stage Reduction Blueprint",
          content: "$$\\frac{a}{x} + \\frac{b}{y} = c \\implies au + bv = c \\quad \\left(u = \\frac{1}{x}, \\; v = \\frac{1}{y}\\right)$$  \n$$\\frac{a}{x+y} + \\frac{b}{x-y} = c \\implies au + bv = c \\quad \\left(u = \\frac{1}{x+y}, \\; v = \\frac{1}{x-y}\\right)$$",
          note: "This 2-stage method is a 4-mark or 5-mark guaranteed question in Section D of the Board Exam."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Substitute $u$ and $v$ Explicitly",
          action: "Write: 'Substituting $\\frac{1}{x+y} = u$ and $\\frac{1}{x-y} = v$, the given equations become...'",
          proTip: "Do not skip writing out the substitution definitions."
        },
        {
          stepNo: 2,
          title: "Remember to Invert Back to $x$ and $y$ at the End",
          action: "Finding $u$ and $v$ is only half the job! Always solve the final $x+y$ and $x-y$ system.",
          proTip: "Many students lose 1.5 marks because they stop after finding $u$ and $v$!"
        }
      ],
      examinerTraps: [
        {
          trap: "Stopping the solution after finding $u$ and $v$ and forgetting to find $x$ and $y$.",
          correction: "The question asks for $x$ and $y$! Once $u = 1/5$, you must state $x + y = 5$, and solve for the actual values of $x$ and $y$."
        }
      ]
    }
  ]
};
