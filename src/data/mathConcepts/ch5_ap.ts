import type { MathChapterConcept } from "./types";

export const CH5_AP_CONCEPT: MathChapterConcept = {
  chapterNo: 5,
  title: "Arithmetic Progressions",
  weightage: "6 Marks (Board Mandatory)",
  oneLiner: "Constant steps create an AP; nth term has (n-1) jumps; Gauss's sum trick pairs the ends.",
  analogyTitle: "Climbing a Wooden Ladder with Equal Rungs",
  analogyContent: "Imagine climbing a wooden ladder. The bottom rung starts at height $a$ above the ground. Every subsequent rung is placed at an exact fixed distance $d$ above the previous one. To reach the 2nd rung, you take 1 step ($a + d$). To reach the 3rd rung, you take 2 steps ($a + 2d$). To reach the 100th rung, you take 99 steps ($a + 99d$)! An Arithmetic Progression is simply a sequence of numbers advancing by equal steps.",
  sections: [
    {
      id: "ap_basics",
      label: "1. What is an Arithmetic Progression?",
      heading: "First Term $a$, Common Difference $d$, and Testing Sequences",
      subheading: "Why $d$ Can Be Positive, Zero, or Even Negative!",
      explanation: "An **Arithmetic Progression (AP)** is a sequence of numbers in which each term is obtained by adding a fixed number $d$ to the preceding term (except the first term $a$).  \n\n$$\\mathbf{a, \\; a+d, \\; a+2d, \\; a+3d, \\; \\dots, \\; a+(n-1)d}$$  \n\n**The Fixed Number $d$ (Common Difference):**  \nTo find $d$, subtract ANY term from its immediately following term:  \n$$\\mathbf{d = a_{k+1} - a_k}$$  \n$\\bullet$ If $d > 0$: The AP is **increasing** (e.g. $2, 5, 8, 11 \\dots \\implies d = +3$).  \n$\\bullet$ If $d < 0$: The AP is **decreasing** (e.g. $100, 70, 40, 10 \\dots \\implies d = -30$).  \n$\\bullet$ If $d = 0$: The AP is **constant** (e.g. $5, 5, 5, 5 \\dots \\implies d = 0$).  \n\n**How to Test if a Sequence is an AP:**  \nCompute $a_2 - a_1$ and $a_3 - a_2$. If and only if $a_2 - a_1 = a_3 - a_2$, the sequence is an AP!",
      formulasOrKeyPoints: [
        {
          title: "Three Consecutive Terms Condition (CBSE 1-Mark MCQ Favorite)",
          content: "Three numbers $p, q, r$ are in AP if and only if the middle term is the **Arithmetic Mean** of the outer terms:  \n$$\\mathbf{2q = p + r} \\qquad \\iff \\qquad q = \\frac{p + r}{2}$$  \nExample: If $k-2, 4k-1, 5k+2$ are in AP, find $k$:  \n$$2(4k - 1) = (k - 2) + (5k + 2) \\implies 8k - 2 = 6k \\implies 2k = 2 \\implies \\mathbf{k = 1}$$",
          note: "This $2q = p + r$ condition solves almost every unknown parameter MCQ in under 15 seconds."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Always Subtract in Correct Direction: Later Term Minus Earlier Term",
          action: "Compute $d = a_2 - a_1$. In decreasing sequences like $12, 7, 2, -3$, calculate $7 - 12 = -5$.",
          proTip: "Never subtract $12 - 7 = 5$; forgetting the minus sign will destroy all subsequent calculations."
        }
      ],
      examinerTraps: [
        {
          trap: "Assuming square root sequences like $\\sqrt{2}, \\sqrt{8}, \\sqrt{18}, \\sqrt{32}$ are NOT an AP.",
          correction: "Simplify the surds first! $\\sqrt{8} = 2\\sqrt{2}$, $\\sqrt{18} = 3\\sqrt{2}$, $\\sqrt{32} = 4\\sqrt{2}$. The sequence is $\\sqrt{2}, 2\\sqrt{2}, 3\\sqrt{2}, 4\\sqrt{2} \\dots$ which IS an AP with common difference $d = \\sqrt{2}$!"
        }
      ]
    },
    {
      id: "nth_term",
      label: "2. The n-th Term Formula & Term from the End",
      heading: "The Jump Formula: $a_n = a + (n-1)d$",
      subheading: "Why (n-1)? + The End-to-Beginning Reverse Formula",
      explanation: "Why does the formula have **$(n - 1)$** instead of $n$?  \nBecause you are ALREADY standing on the 1st term $a$! To travel to term #1, you take 0 steps. To travel to term #2, you take 1 step ($+d$). To reach term #$n$, you take **$(n - 1)$ steps**!  \n\n$$\\mathbf{a_n = a + (n - 1)d}$$  \n\n**Finding the $n$-th Term from the END:**  \nIf an AP has last term $l$ and common difference $d$, then walking backwards from the end means subtracting $d$ at each step!  \n$$\\mathbf{a_n' = l - (n - 1)d}$$  \n\n**Checking if a Number Belongs to an AP:**  \nSet $a_n = \\text{given number}$. Solve for $n$:  \n$$\\mathbf{n \\text{ MUST be a positive natural number } (1, 2, 3, \\dots)!}$$  \nIf $n$ comes out as a fraction (like $\\frac{53}{3}$) or negative, that number does NOT belong to the AP!",
      formulasOrKeyPoints: [
        {
          title: "n-th Term Quick Comparison",
          content: "- **From the Beginning:**\n  $$\\mathbf{a_n = a + (n - 1)d}$$\n- **From the End (Last Term $l$):**\n  $$\\mathbf{a_n' = l - (n - 1)d}$$",
          note: "Alternatively, reverse the entire AP (make last term first, and change sign of d) and apply the standard formula!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Solve for $n$ When Asked: 'Which term of the AP is zero / negative?'",
          action: "Set $a_n < 0 \\implies a + (n-1)d < 0$. Solve the inequality for $n$.",
          proTip: "Remember: When dividing an inequality by a negative number $d$, flip the inequality sign! Pick the next integer above $n$."
        }
      ],
      examinerTraps: [
        {
          trap: "Accepting a fractional value of $n$ as a valid term number.",
          correction: "Term numbers count physical objects (1st, 2nd, 3rd...). If $n = 24.5$, write: 'Since $n$ is not a natural number, the given value is not a term of this AP.'"
        }
      ]
    },
    {
      id: "sum_n_terms",
      label: "3. Sum of First n Terms (Gauss's Secret)",
      heading: "The Childhood Discovery of Young Carl Friedrich Gauss",
      subheading: "$S_n = \\frac{n}{2}[2a + (n-1)d] = \\frac{n}{2}[a + l]$",
      explanation: "When legendary mathematician Carl Friedrich Gauss was 10 years old, his teacher asked the class to add all numbers from 1 to 100 ($1 + 2 + 3 + \\dots + 100$).  \nWithin seconds, young Gauss wrote down **5050**! How?  \n\nHe noticed a magical symmetry:  \n$$1 + 100 = 101, \\quad 2 + 99 = 101, \\quad 3 + 98 = 101 \\dots$$  \nEvery pair adds to **101**! Since there are 100 numbers, there are 50 pairs:  \n$$\\text{Sum} = 50 \\times 101 = 5050!$$  \n\nBy applying this exact pairing trick to any general AP:  \n$$\\mathbf{S_n = \\frac{n}{2} \\left[ a + l \\right]} = \\mathbf{\\frac{n}{2} \\left[ 2a + (n - 1)d \\right]}$$",
      formulasOrKeyPoints: [
        {
          title: "The 3 High-Yield Special Sum Formulas",
          content: "**1. First $n$ Natural Numbers:**\n$$S_n = 1 + 2 + 3 + \\dots + n = \\mathbf{\\frac{n(n + 1)}{2}}$$\n\n**2. First $n$ Odd Positive Integers:**\n$$S_n = 1 + 3 + 5 + \\dots + (2n - 1) = \\mathbf{n^2}$$\n\n**3. First $n$ Even Positive Integers:**\n$$S_n = 2 + 4 + 6 + \\dots + 2n = \\mathbf{n(n + 1)}$$",
          note: "Notice: Sum of first 10 odd numbers is simply 10² = 100! Solves Section A MCQs in 1 second."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Choose the Right Formula Based on What is Given",
          action: "If last term $l$ is known $\\to$ use $S_n = \\frac{n}{2}(a + l)$. If $l$ is not known $\\to$ use $S_n = \\frac{n}{2}[2a + (n-1)d]$.",
          proTip: "The $a+l$ formula requires far fewer arithmetic calculations."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing $a$ instead of $2a$ inside the bracket: $\\frac{n}{2}[a + (n-1)d]$.",
          correction: "The formula is $\\frac{n}{2}[\\mathbf{2a} + (n-1)d]$. Forgetting the factor of 2 in front of $a$ is the most common formula mix-up in AP."
        }
      ]
    },
    {
      id: "sn_an_relation",
      label: "4. The Golden Bridge: an = Sn - Sn-1",
      heading: "Extracting the AP Directly from the Sum Formula",
      subheading: "The Linear vs Quadratic Fingerprint of Arithmetic Progressions",
      explanation: "If you know the sum of $n$ terms $S_n$, you can instantly find ANY individual term $a_n$ using the **Golden Bridge Relationship**:  \n$$\\mathbf{a_n = S_n - S_{n-1}} \\qquad (n \\ge 2)$$  \n$$\\mathbf{a_1 = S_1}$$  \n\nWhy? Because $S_n = (a_1 + a_2 + \\dots + a_{n-1}) + a_n = S_{n-1} + a_n$. Subtracting $S_{n-1}$ leaves only the last term $a_n$!  \n\n**The Algebraic Fingerprints:**  \n$\\bullet$ If $a_n$ is a linear expression in $n$ ($a_n = An + B$), the common difference is the **coefficient of $n$ ($d = A$)**!  \n$\\bullet$ If $S_n$ is a quadratic expression in $n$ with NO constant term ($S_n = An^2 + Bn$), the common difference is **DOUBLE the coefficient of $n^2$ ($d = 2A$)**!",
      formulasOrKeyPoints: [
        {
          title: "The 2A Shortcut for MCQs",
          content: "If $S_n = 3n^2 + 5n$:  \n$$\\text{Common difference } d = 2 \\times 3 = \\mathbf{6}$$  \n$$\\text{First term } a_1 = S_1 = 3(1)^2 + 5(1) = \\mathbf{8}$$  \n$$\\implies \\text{AP is: } 8, 14, 20, 26, \\dots$$",
          note: "This 2A shortcut lets you write the AP in 5 seconds without calculating Sn - Sn-1!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Subjective Board Presentation for Finding $a_n$ from $S_n$",
          action: "1. Write given $S_n$. 2. Compute $S_{n-1}$ by replacing $n$ with $(n-1)$. 3. Subtract $a_n = S_n - S_{n-1}$.",
          proTip: "Expand $(n-1)^2 = n^2 - 2n + 1$ carefully to avoid minus sign errors."
        }
      ],
      examinerTraps: [
        {
          trap: "Sign error when expanding $S_{n-1}$: expanding $3(n-1)^2$ as $3n^2 - 3$.",
          correction: "$3(n-1)^2 = 3(n^2 - 2n + 1) = 3n^2 - 6n + 3$. Expand brackets fully before subtracting!"
        }
      ]
    },
    {
      id: "terms_selection",
      label: "5. Symmetric Selection of Terms in AP",
      heading: "The Cancellation Secret: Choosing 3 or 4 Unknown Terms",
      subheading: "Parijat Jain S.M.A.R.T. Choice to Cancel d Upon Addition",
      explanation: "When a word problem says: *'The sum of 3 numbers in AP is 24, and their product is 440'*, NEVER choose $a, a+d, a+2d$! That gives messy simultaneous equations!  \n\nInstead, choose terms symmetrically centered at $a$:  \n\n1. **Three Terms in AP:**  \n$$\\mathbf{(a - d), \\; a, \\; (a + d)} \\qquad (\\text{Common difference is } d)$$  \nNotice their sum: $(a - d) + a + (a + d) = \\mathbf{3a}$! The $d$ completely cancels out, immediately giving $a = \\frac{\\text{Sum}}{3}$!  \n\n2. **Four Terms in AP:**  \n$$\\mathbf{(a - 3d), \\; (a - d), \\; (a + d), \\; (a + 3d)} \\qquad (\\mathbf{\\text{Common difference is } 2d!})$$  \nNotice their sum: $(a - 3d) + (a - d) + (a + d) + (a + 3d) = \\mathbf{4a}$!",
      formulasOrKeyPoints: [
        {
          title: "Worked Example: 3 Numbers in AP",
          content: "Sum = 15, Product = 80.  \n1. Let numbers be $a-d, a, a+d$.  \n2. Sum: $3a = 15 \\implies \\mathbf{a = 5}$.  \n3. Product: $(5-d)(5)(5+d) = 80 \\implies 5(25 - d^2) = 80 \\implies 25 - d^2 = 16 \\implies d^2 = 9 \\implies \\mathbf{d = \\pm 3}$.  \n4. Numbers are: $2, 5, 8$ (if $d = +3$) or $8, 5, 2$ (if $d = -3$).",
          note: "Both orders yield the exact same trio of numbers: 2, 5, 8!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Watch the Common Difference in 4-Term Selection",
          action: "Remember that in $(a-3d), (a-d), (a+d), (a+3d)$, the step between consecutive terms is $2d$, NOT $d$!",
          proTip: "If you find $d = 2$, the common difference of the AP is $2d = 4$."
        }
      ],
      examinerTraps: [
        {
          trap: "Assuming the common difference is $d$ when using 4 terms $(a-3d, a-d, a+d, a+3d)$.",
          correction: "The difference between $(a-d)$ and $(a-3d)$ is $(a-d) - (a-3d) = 2d$. The common difference of this AP is $2d$."
        }
      ]
    }
  ]
};
