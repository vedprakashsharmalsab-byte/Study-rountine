import type { MathChapterConcept } from "./types";

export const CH1_REAL_NUMBERS_CONCEPT: MathChapterConcept = {
  chapterNo: 1,
  title: "Real Numbers",
  weightage: "6 Marks (Board Mandatory)",
  oneLiner: "Prime factorisation is the unique DNA of numbers; Contradiction proves irrationality; 2^m · 5^n governs decimal termination.",
  analogyTitle: "The 'DNA Fingerprint' & Indivisible Atoms of Numbers",
  analogyContent: "Imagine building houses with Lego blocks. Some blocks can be pulled apart into smaller pieces, but prime blocks (2, 3, 5, 7, 11) are solid indivisible atoms! Just like every living creature has a unique DNA code, every composite number (like $360 = 2^3 \\times 3^2 \\times 5$) has a single, unique prime factorization. No other number in the universe shares this exact combination.",
  sections: [
    {
      id: "number_family",
      label: "1. The Number Family Tree from Scratch",
      heading: "From Counting Apples to the Infinite Real Number Line",
      subheading: "Building Intuition: Natural → Whole → Integers → Rational → Irrational → Real",
      explanation: "Imagine a 5-year-old child learning to count:  \n\n1. **Natural Numbers ($\mathbb{N}$)**: The counting numbers when you hold up fingers: $1, 2, 3, 4, \\dots$  \n2. **Whole Numbers ($\mathbb{W}$)**: What if you have zero apples? Add $0$: $0, 1, 2, 3, \\dots$  \n3. **Integers ($\mathbb{Z}$)**: What if you owe someone an apple (debt) or the temperature drops below zero? Add negative numbers: $\\dots, -3, -2, -1, 0, 1, 2, 3, \\dots$  \n4. **Rational Numbers ($\mathbb{Q}$)**: What if you slice an apple into pieces? Any number that can be written as a fraction $\\frac{p}{q}$ (where $p$ and $q$ are integers, and $q \\neq 0$). Examples: $\\frac{1}{2}, \\frac{-3}{4}, 5 = \\frac{5}{1}, 0 = \\frac{0}{1}, 0.333\\dots = \\frac{1}{3}$.  \n5. **Irrational Numbers**: Numbers that **CANNOT** be written as a clean fraction! Their decimals go on forever without ever repeating a loop. Examples: $\\sqrt{2} = 1.41421356\\dots$, $\\sqrt{3}$, $\\pi = 3.14159265\\dots$.  \n6. **Real Numbers ($\mathbb{R}$)**: The grand universe! Put Rationals and Irrationals together into one giant bag, and they fill EVERY SINGLE POINT on the continuous number line without any gaps!",
      formulasOrKeyPoints: [
        {
          title: "The Hierarchy of Numbers",
          content: "$$\\mathbb{N} \\subset \\mathbb{W} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$$  \n$$\\text{Real Numbers (}\\mathbb{R}\\text{)} = \\text{Rational (}\\mathbb{Q}\\text{)} \\cup \\text{Irrational}$$",
          note: "Every integer is a rational number (can be written with denominator 1). Zero is rational because $0 = \\frac{0}{1}$."
        },
        {
          title: "Co-Prime Numbers — The Foundation of Proofs",
          content: "Two positive integers $a$ and $b$ are called **co-prime** if their Highest Common Factor is 1:  \n$$\\text{HCF}(a, b) = 1$$  \nExamples: $(4, 9)$, $(8, 15)$, $(14, 25)$. Neither needs to be a prime number itself!",
          note: "This definition is the absolute anchor of all Class 10 irrationality proofs. If both $a$ and $b$ share a common factor $p > 1$, the co-prime assumption is destroyed!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify Number Types on the Spot",
          action: "Ask: Can it be written as a fraction of integers? If yes $\\to$ Rational. If it contains a non-perfect square root (like $\\sqrt{2}, \\sqrt{7}$) $\\to$ Irrational.",
          proTip: "Beware of deceptive roots like $\\sqrt{9} = 3$ or $\\sqrt{\\frac{16}{25}} = \\frac{4}{5}$; these simplify into rational numbers!"
        }
      ],
      examinerTraps: [
        {
          trap: "Thinking $\\pi$ is equal to $\\frac{22}{7}$ and therefore rational.",
          correction: "$\\pi$ is strictly IRRATIONAL! The fraction $\\frac{22}{7} \\approx 3.142857$ is only an approximate engineering approximation used for calculations. In Board MCQs, $\\pi$ is always classified as irrational."
        }
      ]
    },
    {
      id: "fundamental_theorem",
      label: "2. Fundamental Theorem of Arithmetic & HCF/LCM",
      heading: "The Unique Prime DNA & The Golden Product Relationship",
      subheading: "Theorem 1.1 + HCF/LCM Power Rules + The 3-Number Board Trap",
      explanation: "The **Fundamental Theorem of Arithmetic** states:  \n*Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.*  \n\nFor example: $120 = 2^3 \\times 3^1 \\times 5^1$. No matter which method you use (factor tree, repeated division), you will ALWAYS get three 2s, one 3, and one 5.  \n\n**The Universal HCF & LCM Powers Rule:**  \n$\\bullet$ **HCF (Highest Common Factor)**: Product of the **SMALLEST powers** of **COMMON prime factors** only.  \n$\\bullet$ **LCM (Lowest Common Multiple)**: Product of the **GREATEST powers** of **ALL prime factors** involved anywhere!  \n\n**The Golden Relationship for Two Numbers:**  \n$$\\mathbf{\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b}$$",
      formulasOrKeyPoints: [
        {
          title: "Prime Exponent Master Formulas",
          content: "Let $a = 2^3 \\cdot 3^2 \\cdot 5^1$ and $b = 2^2 \\cdot 3^4 \\cdot 7^1$:  \n$$\\text{HCF}(a, b) = 2^{\\min(3, 2)} \\cdot 3^{\\min(2, 4)} = 2^2 \\cdot 3^2 = 36$$  \n$$\\text{LCM}(a, b) = 2^{\\max(3, 2)} \\cdot 3^{\\max(2, 4)} \\cdot 5^1 \\cdot 7^1 = 2^3 \\cdot 3^4 \\cdot 5 \\cdot 7 = 22,680$$",
          note: "HCF will ALWAYS divide LCM evenly without remainder! If $\\text{LCM} \\div \\text{HCF}$ has a remainder, you made an arithmetic error."
        },
        {
          title: "The 3-Number Danger Alert",
          content: "$$\\mathbf{\\text{HCF}(a, b, c) \\times \\text{LCM}(a, b, c) \\neq a \\times b \\times c}$$  \nThe product formula holds strictly for TWO numbers only! For 3 numbers, always use prime factorisation directly.",
          note: "Examiners deliberately include 3-number questions to catch students using $\\text{HCF} \\times \\text{LCM} = a \\times b \\times c$."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Construct Prime Factorization Trees",
          action: "Divide by the smallest prime repeatedly ($2 \\to 3 \\to 5 \\to 7 \\dots$) until reaching 1.",
          proTip: "Write factors in exponential index form (e.g. $2^4 \\times 3^2$) before doing any comparisons."
        },
        {
          stepNo: 2,
          title: "Calculate HCF and LCM Using Min/Max Powers",
          action: "For HCF, take only primes present in BOTH lists with lowest exponent. For LCM, take all primes present in either list with highest exponent.",
          proTip: "Check your work: $\\text{HCF} \\le \\min(a, b)$ and $\\text{LCM} \\ge \\max(a, b)$."
        },
        {
          stepNo: 3,
          title: "Verify Using the Product Formula",
          action: "Compute $\\text{HCF} \\times \\text{LCM}$ and $a \\times b$. Check that they match to the last digit.",
          proTip: "Writing 'Hence Verified: HCF × LCM = Product of Numbers' secures the final 0.5 presentation mark."
        }
      ],
      examinerTraps: [
        {
          trap: "Applying $\\text{HCF} \\times \\text{LCM} = a \\times b \\times c$ for three numbers.",
          correction: "Never use the product rule for three numbers! Find the HCF and LCM independently using prime factor powers."
        },
        {
          trap: "Confusing LCM and HCF in word problems (e.g. circular tracks, bells tolling together, maximum container capacity).",
          correction: "Rule of thumb: If the answer must be SMALLER than given numbers (e.g. max capacity dividing both containers) $\\to$ HCF. If the answer must be LARGER than given numbers (e.g. next time 3 bells ring together or runners meet) $\\to$ LCM."
        }
      ]
    },
    {
      id: "irrationality_proof",
      label: "3. Proving √2, √3, √5 are Irrational",
      heading: "The Master 3-Mark Proof by Contradiction",
      subheading: "Theorem 1.2 ($p|a^2 \\implies p|a$) + Step-by-Step Scoring Blueprint",
      explanation: "How do you prove that something CANNOT be written as a fraction? In mathematics, when a direct path is blocked, we use **Proof by Contradiction**:  \n1. We pretend the opposite is true (assume $\\sqrt{5}$ CAN be written as a fraction $\\frac{a}{b}$ in simplest co-prime form).  \n2. We follow strict logical rules.  \n3. Our logical steps force an impossible contradiction (both $a$ and $b$ turn out to share a common factor of 5, which violates our co-prime definition!).  \n4. Therefore, our initial assumption was false, and $\\sqrt{5}$ must be irrational!  \n\n**The Engine: Theorem 1.2**  \n*Let $p$ be a prime number. If $p$ divides $a^2$, then $p$ divides $a$ (where $a$ is a positive integer).*  \nWhy? Because if a prime $p$ appears in the factorization of $a^2$, it must already have been present in $a$, because squaring only doubles existing prime powers!",
      formulasOrKeyPoints: [
        {
          title: "Full 4-Step CBSE Model Answer Template: Prove √5 is Irrational",
          content: "**Step 1: Assumption & Co-prime Definition**\nLet $\\sqrt{5}$ be a rational number. Then we can write:\n$$\\sqrt{5} = \\frac{a}{b} \\quad (a, b \\in \\mathbb{Z}, \\; b \\neq 0, \\; \\mathbf{\\text{HCF}(a, b) = 1})$$\n\n**Step 2: Squaring Both Sides & Divisibility of $a$**\n$$5 = \\frac{a^2}{b^2} \\implies \\mathbf{a^2 = 5b^2}$$\nSince 5 divides $5b^2$, 5 must divide $a^2$.\nBy Theorem 1.2 (if prime $p$ divides $a^2$, then $p$ divides $a$):\n$$\\mathbf{5 \\text{ divides } a} \\quad \\text{--- (Equation 1)}$$\n\n**Step 3: Substitution & Divisibility of $b$**\nSince 5 divides $a$, we can write $a = 5c$ for some integer $c$.\nSubstituting $a = 5c$ into $a^2 = 5b^2$:\n$$(5c)^2 = 5b^2 \\implies 25c^2 = 5b^2 \\implies \\mathbf{b^2 = 5c^2}$$\nThis implies 5 divides $b^2$, so by Theorem 1.2:\n$$\\mathbf{5 \\text{ divides } b} \\quad \\text{--- (Equation 2)}$$\n\n**Step 4: Contradiction & Final Conclusion**\nFrom Equations (1) and (2), 5 is a common factor of both $a$ and $b$.\nThis directly contradicts our fact that $a$ and $b$ are co-prime (having no common factor other than 1).\n$$\\mathbf{\\therefore \\text{Our initial assumption is false; } \\sqrt{5} \\text{ is irrational. [Hence Proved]}}$$",
          note: "This template is identical for √2 (replace 5 with 2) and √3 (replace 5 with 3). Memorise this exact sequence for guaranteed 3/3 marks."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "State the Co-Prime Assumption Explicitly",
          action: "Always write: 'Let $\\sqrt{p} = \\frac{a}{b}$, where $a, b$ are co-prime integers and $b \\neq 0$.'",
          proTip: "CBSE marking schemes deduct 0.5 marks if 'co-prime' is not explicitly stated."
        },
        {
          stepNo: 2,
          title: "Show Prime Divides the First Variable",
          action: "Square both sides: $a^2 = p b^2$. State: '$p$ divides $a^2 \\implies p$ divides $a$'.",
          proTip: "Always quote 'by Theorem 1.2' or 'if prime divides $a^2$, it divides $a$'."
        },
        {
          stepNo: 3,
          title: "Substitute $a = pc$ and Show Prime Divides the Second Variable",
          action: "Substitute $(pc)^2 = pb^2 \\implies b^2 = pc^2$. Conclude: '$p$ also divides $b$'.",
          proTip: "Ensure algebra shows clean division: $25c^2 = 5b^2 \\implies b^2 = 5c^2$."
        },
        {
          stepNo: 4,
          title: "Deliver the Contradiction Punchline",
          action: "Write: 'This contradicts the fact that $a$ and $b$ are co-prime. Hence our assumption is false, and $\\sqrt{p}$ is irrational.'",
          proTip: "Underline the final conclusion line on your answer sheet."
        }
      ],
      examinerTraps: [
        {
          trap: "Leaving out 'where $a$ and $b$ are co-prime integers and $b \\neq 0$'.",
          correction: "This is the single most penalised omission in Chapter 1. The whole contradiction hinges on the fact that $a$ and $b$ cannot have a common factor!"
        }
      ]
    },
    {
      id: "composite_irrational",
      label: "4. Proving Composite Forms (3 + 2√5 and 1/√2)",
      heading: "The 2-Mark Rearrangement Method (Given √p is Irrational)",
      subheading: "Isolate the Radical on LHS → Show RHS is Rational → Contradiction",
      explanation: "In Board papers, when asked to prove that $3 + 2\\sqrt{5}$ or $5 - \\sqrt{3}$ or $\\frac{1}{\\sqrt{2}}$ is irrational, you do NOT need to re-prove that $\\sqrt{5}$ is irrational from scratch!  \n\nInstead, use the **Algebraic Rearrangement Weapon**:  \n1. Assume $3 + 2\\sqrt{5} = \\frac{a}{b}$ is rational ($a, b \\in \\mathbb{Z}, b \\neq 0$).  \n2. Shift all rational numbers to one side, isolating the naked root $\\sqrt{5}$ on the left:  \n$$2\\sqrt{5} = \\frac{a}{b} - 3 = \\frac{a - 3b}{b} \\implies \\mathbf{\\sqrt{5} = \\frac{a - 3b}{2b}}$$  \n3. Notice the right-hand side: since $a, b$ are integers, $\\frac{a - 3b}{2b}$ is a fraction of integers, hence **RATIONAL**!  \n4. But the left-hand side is $\\sqrt{5}$, which is **IRRATIONAL**!  \n5. **Rational cannot equal Irrational!** This contradiction proves our assumption was false, so $3 + 2\\sqrt{5}$ is irrational.",
      formulasOrKeyPoints: [
        {
          title: "Universal Rearrangement Templates",
          content: "$\\bullet$ **Form $a + b\\sqrt{p}$**:  \n$$x = a + b\\sqrt{p} = \\frac{r}{s} \\implies \\sqrt{p} = \\frac{r - as}{bs} \\quad (\\text{Rational}) \\implies \\text{Contradiction!}$$  \n$\\bullet$ **Form $\\frac{1}{\\sqrt{p}}$**:  \n$$\\frac{1}{\\sqrt{2}} = \\frac{a}{b} \\implies \\sqrt{2} = \\frac{b}{a} \\quad (\\text{Rational since } a, b \\in \\mathbb{Z}, a \\neq 0) \\implies \\text{Contradiction!}$$",
          note: "This type takes under 4 lines to write and earns 2 full marks in Section B of the Board exam."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Equate Expression to $a/b$",
          action: "Let the composite expression equal $\\frac{a}{b}$ where $a, b$ are integers and $b \\neq 0$.",
          proTip: "No need to state co-prime for this short 2-mark method."
        },
        {
          stepNo: 2,
          title: "Isolate the Square Root on LHS",
          action: "Perform standard algebra to get $\\sqrt{p}$ alone on LHS.",
          proTip: "Ensure the RHS is simplified into a single clean fraction like $\\frac{a - 3b}{2b}$."
        },
        {
          stepNo: 3,
          title: "State Rationality vs Irrationality Clash",
          action: "Write: 'Since $a, b$ are integers, RHS is rational. This implies $\\sqrt{p}$ is rational, which contradicts the known fact that $\\sqrt{p}$ is irrational.'",
          proTip: "Conclude with: 'Therefore, our assumption is false, and the given number is irrational.'"
        }
      ],
      examinerTraps: [
        {
          trap: "Squaring both sides for composite forms like $3 + 2\\sqrt{5}$.",
          correction: "DO NOT square both sides! Squaring produces cross-terms like $12\\sqrt{5}$ and makes the proof 3 times longer and error-prone. Simple rearrangement is the 100% correct CBSE standard method."
        }
      ]
    },
    {
      id: "decimal_expansions",
      label: "5. Terminating vs Non-Terminating Decimals",
      heading: "The $2^m \\cdot 5^n$ Denominator Prime Test",
      subheading: "Predicting Decimal Behavior Without Ever Performing Long Division",
      explanation: "Why do some fractions terminate cleanly (like $\\frac{3}{8} = 0.375$) while others go on looping forever (like $\\frac{1}{3} = 0.333\\dots$ or $\\frac{2}{7}$)?  \n\nOur base-10 number system is built on powers of 10. The only prime factors of 10 are **2 and 5** ($10 = 2 \\times 5$).  \n\nTherefore, a rational fraction $\\frac{p}{q}$ in **simplest form (co-prime $p, q$)** will terminate as a decimal if and only if the denominator $q$ contains **NO prime factors other than 2 and 5**:  \n$$\\mathbf{q = 2^m \\cdot 5^n} \\quad (m, n \\in \\mathbb{W})$$  \n\nIf the denominator contains ANY other prime factor (like 3, 7, 11, 13) that cannot be cancelled by the numerator, the decimal is **Non-Terminating Repeating (Recurring)**!  \n\n**Decimal Places Shortcut**:  \nThe decimal will terminate after exactly **$\\max(m, n)$ decimal places**!  \nExample: In $\\frac{13}{2^4 \\times 5^1}$, $\\max(4, 1) = 4$, so it terminates after exactly **4 decimal places** without doing division!",
      formulasOrKeyPoints: [
        {
          title: "The Power Balancing Trick to Find Decimal Value",
          content: "To convert $\\frac{7}{80} = \\frac{7}{2^4 \\times 5^1}$ to decimal without division:  \n1. Make powers of 2 and 5 equal: multiply top and bottom by $5^3$:  \n$$\\frac{7 \\times 5^3}{(2^4 \\times 5^1) \\times 5^3} = \\frac{7 \\times 125}{2^4 \\times 5^4} = \\frac{875}{(2 \\times 5)^4} = \\frac{875}{10^4} = \\frac{875}{10000} = \\mathbf{0.0875}$$",
          note: "This elegant method completely eliminates tedious long division and avoids arithmetic mistakes in board exams."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "ALWAYS Reduce Fraction to Lowest Terms First",
          action: "Check if numerator and denominator share common factors before checking $q$.",
          proTip: "Classic trap: In $\\frac{6}{15}$, denominator 15 has factor 3. But $\\frac{6}{15} = \\frac{2}{5}$, which terminates ($0.4$)! Always reduce first!"
        },
        {
          stepNo: 2,
          title: "Prime Factorise the Denominator $q$",
          action: "Write $q = 2^m \\cdot 5^n \\cdot p_3^k$.",
          proTip: "If any prime other than 2 or 5 remains, it is non-terminating repeating."
        }
      ],
      examinerTraps: [
        {
          trap: "Factorising denominator BEFORE cancelling common factors with numerator.",
          correction: "In $\\frac{77}{210} = \\frac{7 \\times 11}{7 \\times 30} = \\frac{11}{30} = \\frac{11}{2 \\times 3 \\times 5}$. Always cancel common factors (like 7 here) before applying the $2^m \\cdot 5^n$ test."
        }
      ]
    },
    {
      id: "board_playbook",
      label: "6. Real Numbers Board Problem-Solving Playbook",
      heading: "Master Archetypes for Section A, B, and C",
      subheading: "HCF/LCM Word Problems, Exponent Traps, and Remainder Conditions",
      explanation: "Here are the exact question typologies tested in CBSE Board Exams from Chapter 1:  \n\n$\\bullet$ **Type 1 (Exponent of prime in $n!$ or composite products)**: Write out prime factors.  \n$\\bullet$ **Type 2 (Word Problems — HCF vs LCM)**:  \n  - Circular track running / bells tolling together / traffic lights changing $\\implies$ find **LCM**.  \n  - Packaging maximum books per stack / dividing two milk containers without mixing $\\implies$ find **HCF**.  \n$\\bullet$ **Type 3 (Numbers leaving remainders)**:  \n  - Find the largest number which divides $x$ and $y$ leaving remainder $r_1, r_2$: subtract remainders first! Find $\\text{HCF}(x - r_1, y - r_2)$.  \n  - Find the smallest number which when divided by $x$ and $y$ leaves remainder $r$: find $\\text{LCM}(x, y) + r$.",
      formulasOrKeyPoints: [
        {
          title: "Remainder Rules Summary",
          content: "$$\\text{Largest number dividing } (a, b) \\text{ leaving remainders } (p, q) = \\mathbf{\\text{HCF}(a - p, b - q)}$$  \n$$\\text{Smallest number divided by } (a, b) \\text{ leaving remainder } r = \\mathbf{\\text{LCM}(a, b) + r}$$",
          note: "Notice: 'Largest dividing' = HCF (subtract first, then HCF). 'Smallest divided by' = LCM (LCM first, then add remainder)."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Classify Word Problem as HCF or LCM in 5 Seconds",
          action: "Look at the units: If the answer must be smaller than the given numbers (measuring rod, stack height) $\\to$ HCF. If the answer is a larger future event (traffic lights, laps) $\\to$ LCM.",
          proTip: "Write out the reason: 'Since the bells toll together at multiples of the intervals, the required time is the LCM of...'."
        }
      ],
      examinerTraps: [
        {
          trap: "Adding remainder before finding LCM instead of after.",
          correction: "Always find $\\text{LCM}(a, b)$ FIRST, then add the remainder $r$ at the very end: $\\text{Answer} = \\text{LCM} + r$."
        }
      ]
    }
  ]
};
