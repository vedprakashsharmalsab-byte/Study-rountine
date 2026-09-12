import type { MathChapterConcept } from "./types";

export const CH13_STATISTICS_CONCEPT: MathChapterConcept = {
  chapterNo: 13,
  title: "Statistics",
  weightage: "6-7 Marks (High Scoring)",
  oneLiner: "Mean balances the scale; Median finds the middle child; Mode crowns the most popular; 3 Median = Mode + 2 Mean.",
  analogyTitle: "The Census Detective: Mean, Median, and Mode",
  analogyContent: "Imagine measuring heights of 100 students:  \n\n• **Mean ($\\bar{x}$)**: The physical balance point! If the students sat on a giant seesaw, the Mean is the exact fulcrum point where the seesaw balances horizontally.  \n\n• **Median ($M$)**: The middle child! Line up all 100 students in increasing height order. The student standing exactly at spot #50 is the Median.  \n\n• **Mode ($Z$)**: The celebrity in the crowd! The single most common height that appears more times than any other.",
  sections: [
    {
      id: "central_tendencies",
      label: "1. The 3 Central Tendencies & Class Intervals",
      heading: "Class Marks, Class Size, and Continuous Adjustments",
      subheading: "Converting Inclusive Intervals (1-5, 6-10) to Exclusive (0.5-5.5, 5.5-10.5)",
      explanation: "Grouped data groups raw numbers into ranges called **Class Intervals**.  \n\n1. **Class Mark ($x_i$)**: The mid-point of a class interval:  \n$$\\mathbf{x_i = \\frac{\\text{Upper Class Limit} + \\text{Lower Class Limit}}{2}}$$  \n\n2. **Class Size ($h$)**: The width of the interval:  \n$$\\mathbf{h = \\text{Upper Limit} - \\text{Lower Limit}}$$  \n\n3. **Continuous Adjustment (Mandatory Rule)**:  \nFormulas for Median and Mode WORK ONLY ON **CONTINUOUS** (exclusive) intervals!  \nIf given discontinuous intervals (e.g. $1-5, \\; 6-10, \\; 11-15$):  \n• Gap between classes is $6 - 5 = 1$.  \n• Half the gap: $\\frac{1}{2} = \\mathbf{0.5}$.  \n• Subtract $0.5$ from lower limits, and add $0.5$ to upper limits:  \n$$\\mathbf{0.5 - 5.5, \\; 5.5 - 10.5, \\; 10.5 - 15.5}$$  \n*(Now the intervals touch smoothly without gaps!)*",
      formulasOrKeyPoints: [
        {
          title: "Continuous Check Warning",
          content: "Always check the upper limit of class 1 and lower limit of class 2:  \n$$\\text{Class 1: } [10, 20] \\qquad \\text{Class 2: } [20, 30] \\implies \\textbf{Continuous! (Proceed directly)} \\\\ \\text{Class 1: } [10, 19] \\qquad \\text{Class 2: } [20, 29] \\implies \\textbf{Discontinuous! (Apply } \\pm 0.5 \\textbf{ adjustment)}$$",
          note: "Failing to convert discontinuous intervals shifts the lower limit l, losing 2 marks in Median/Mode."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Check Interval Continuity Before Picking Formulas",
          action: "Inspect the first two rows of the table. If there is a gap of 1, adjust all limits by $\\pm 0.5$.",
          proTip: "Make a new column for adjusted continuous class limits."
        }
      ],
      examinerTraps: [
        {
          trap: "Calculating Median or Mode on discontinuous intervals like $1-5, 6-10$.",
          correction: "You must convert to $0.5 - 5.5, 5.5 - 10.5$ first! The value of $l$ must come from continuous boundaries."
        }
      ]
    },
    {
      id: "mean_methods",
      label: "2. Calculating Mean (The 3 Methods)",
      heading: "Direct Method vs Assumed Mean vs Step-Deviation",
      subheading: "When to Use Which Method for Maximum Speed and Minimum Calculation",
      explanation: "There are three officially approved CBSE methods to calculate the Mean $\\bar{x}$:  \n\n1. **Direct Method (Best when numbers are small):**  \n$$\\mathbf{\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}}$$  \n\n2. **Assumed Mean Method (Best when numbers are moderately large):**  \nPick a middle class mark as assumed mean $a$. Calculate deviations: $d_i = x_i - a$.  \n$$\\mathbf{\\bar{x} = a + \\frac{\\sum f_i d_i}{\\sum f_i}}$$  \n\n3. **Step-Deviation Method (Fastest! Cuts numbers down to tiny integers):**  \nDivide deviations by the common class size $h$: $u_i = \\frac{x_i - a}{h}$.  \n$$\\mathbf{\\bar{x} = a + \\left( \\frac{\\sum f_i u_i}{\\sum f_i} \\right) \\times h}$$",
      formulasOrKeyPoints: [
        {
          title: "Step-Deviation Coded Values Pattern",
          content: "When using step-deviation, the $u_i$ column around $a$ ALWAYS follows the simple pattern:  \n$$\\dots, -3, -2, -1, \\; \\mathbf{0} \\; (\\text{at } a), \\; +1, +2, +3, \\dots$$",
          note: "Multiplying frequencies by 0, 1, 2, 3 takes 10 seconds and completely eliminates big multiplication errors!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Choose the Assumed Mean $a$ at the Center",
          action: "Count the rows in the $x_i$ column. Pick the central row (or the upper of the two middle rows if even).",
          proTip: "Picking a central value ensures deviations have balanced positive and negative values that cancel out during summation."
        }
      ],
      examinerTraps: [
        {
          trap: "Forgetting to multiply by $h$ at the end of the Step-Deviation formula: writing $a + \\frac{\\sum f_i u_i}{\\sum f_i}$.",
          correction: "You divided by $h$ to get $u_i$; you MUST multiply by $h$ to restore the scale! $\\bar{x} = a + \\left(\\frac{\\sum f_i u_i}{\\sum f_i}\\right) \\times \\mathbf{h}$."
        }
      ]
    },
    {
      id: "mode_formula",
      label: "3. Calculating Mode of Grouped Data",
      heading: "The Modal Class Formula: $\\text{Mode} = l + \\left( \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\right) \\times h$",
      subheading: "The 0, 1, 2 Subscript Memory Trick for Flawless Substitution",
      explanation: "The **Mode** is the value inside the class with the highest frequency.  \n\n**The 2-Step Modal Algorithm:**  \n1. Scan the frequency column $f_i$. Find the **largest number** $\\implies$ That row is the **Modal Class**!  \n2. Apply the master formula:  \n$$\\mathbf{\\text{Mode} = l + \\left( \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\right) \\times h}$$  \n\n**The Natural Counting Order Subscript Trick ($0, 1, 2$):**  \n• **$f_1$**: Frequency of the **modal class** (The #1 champion!).  \n• **$f_0$**: Frequency of the class **preceding** the modal class (0 comes before 1).  \n• **$f_2$**: Frequency of the class **succeeding** the modal class (2 comes after 1).  \n• **$l$**: Lower limit of the modal class.  \n• **$h$**: Class size.",
      formulasOrKeyPoints: [
        {
          title: "Sanity Check for Mode",
          content: "$$\\mathbf{l < \\text{Mode} < \\text{Upper Limit of Modal Class}}$$  \nYour calculated Mode MUST fall inside the modal class interval! E.g. If modal class is $40-60$, the mode MUST be between $40$ and $60$. If it is $38$ or $62$, your arithmetic is wrong.",
          note: "This boundary check catches 100% of arithmetic substitution mistakes in exams."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify $f_0, f_1, f_2$ in Natural 0-1-2 Stack",
          action: "Put your finger on the highest frequency ($f_1$). The number directly above it is $f_0$. The number directly below it is $f_2$.",
          proTip: "Write $f_0, f_1, f_2$ directly beside the table rows with your pencil."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing $2f_1 - f_0 + f_2$ in the denominator.",
          correction: "Both neighboring frequencies are SUBTRACTED: $\\mathbf{2f_1 - f_0 - f_2}$."
        }
      ]
    },
    {
      id: "median_formula",
      label: "4. Calculating Median of Grouped Data",
      heading: "The Cumulative Ladder: $\\text{Median} = l + \\left( \\frac{\\frac{N}{2} - cf}{f} \\right) \\times h$",
      subheading: "The Critical 'Preceding Class cf' Trap That Costs Thousands of Marks",
      explanation: "The **Median** is the value that splits the total data set in half ($N/2$).  \n\n**The 3-Step Median Algorithm:**  \n1. Construct the **Cumulative Frequency ($cf$)** column by running progressive sums of frequencies.  \n2. Calculate **$\\frac{N}{2} = \\frac{\\sum f_i}{2}$**.  \n   Find the **first class whose $cf \\ge \\frac{N}{2}$** $\\implies$ That row is the **Median Class**!  \n3. Apply the master formula:  \n$$\\mathbf{\\text{Median} = l + \\left( \\frac{\\frac{N}{2} - cf}{f} \\right) \\times h}$$  \n\n**THE #1 PITFALL IN STATISTICS (The $cf$ Trap):**  \n• **$l$**: Lower limit of the **median class**.  \n• **$f$**: Frequency of the **median class**.  \n• **$cf$**: Cumulative frequency of the **CLASS PRECEDING the median class**!  \n*(NEVER take the $cf$ of the median class itself, or $\\frac{N}{2} - cf$ will become negative!)*",
      formulasOrKeyPoints: [
        {
          title: "Positive Numerator Rule",
          content: "$$\\mathbf{\\frac{N}{2} - cf > 0 \\text{ ALWAYS!}}$$  \nSince $cf$ comes from the preceding class, it is strictly less than $\\frac{N}{2}$. If $\\frac{N}{2} - cf$ comes out negative, you took the wrong row for $cf$!",
          note: "This positivity rule guarantees you never make the preceding-class cf mistake."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Circle the Preceding $cf$ in the Table",
          action: "Once the median class is identified, move one row UP in the $cf$ column and draw a circle around that value.",
          proTip: "This physical habit prevents accidentally reading the $cf$ from the median class row."
        }
      ],
      examinerTraps: [
        {
          trap: "Using the $cf$ of the median class instead of the preceding class.",
          correction: "$cf$ in the formula is the cumulative frequency of the PRECEDING class. Using the median class $cf$ loses 2 marks."
        }
      ]
    },
    {
      id: "empirical_relationship",
      label: "5. The Empirical Relationship Formula",
      heading: "$\\mathbf{3\\text{Median} = \\text{Mode} + 2\\text{Mean}}$",
      subheading: "Mnemonic: '3 Medals = 1 Model + 2 Men' for 1-Mark Board MCQs",
      explanation: "For any moderately skewed frequency distribution, the three measures of central tendency are connected by the **Empirical Relationship**:  \n\n$$\\mathbf{3\\text{Median} = \\text{Mode} + 2\\text{Mean}}$$  \n$$\\iff \\mathbf{\\text{Mode} = 3\\text{Median} - 2\\text{Mean}}$$  \n\n**How to Never Forget the Multipliers:**  \n• **Mnemonic #1**: *'3 Medals = 1 Model + 2 Men'* (3 Medians = Mode + 2 Means).  \n• **Mnemonic #2 (Alphabetical Length)**:  \n  - 'Median' has 6 letters $\\implies$ Multiplied by **3** ($3 \\times 6 = 18$).  \n  - 'Mode' has 4 letters $\\implies$ Multiplied by **1** ($1 \\times 4 = 4$).  \n  - 'Mean' has 4 letters $\\implies$ Multiplied by **2** ($2 \\times 4 = 8$).  \n  - $18 = 4 + 8 + 6 \\implies 3\\text{Median} = \\text{Mode} + 2\\text{Mean}$!  \n\nGiven any TWO of these values, you can instantly find the third without looking at data!",
      formulasOrKeyPoints: [
        {
          title: "Instant Board MCQ Calculations",
          content: "Example: If $\\text{Mean} = 24$ and $\\text{Median} = 26$, find $\\text{Mode}$:  \n$$\\text{Mode} = 3(26) - 2(24) = 78 - 48 = \\mathbf{30}!$$",
          note: "This 1-mark question appears in almost every CBSE board paper."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Rearrange for the Unknown Value First",
          action: "If finding Mean: $2\\text{Mean} = 3\\text{Median} - \\text{Mode} \\implies \\text{Mean} = \\frac{3\\text{Median} - \\text{Mode}}{2}$.",
          proTip: "Rearranging algebraically before plugging in numbers prevents sign mistakes."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing $\\text{Mode} = 3\\text{Mean} - 2\\text{Median}$ (swapping Mean and Median multipliers).",
          correction: "3 belongs to MEDIAN, not Mean! $\\text{Mode} = \\mathbf{3\\text{Median}} - \\mathbf{2\\text{Mean}}$."
        }
      ]
    },
    {
      id: "missing_frequencies",
      label: "6. Finding Missing Frequencies $x$ and $y$ (HOTS Boss)",
      heading: "The Legendary NCERT Exercise 13.3 Q2 Template (5 Marks)",
      subheading: "System of 2 Equations: 1 from Total Sum + 1 from Median Formula",
      explanation: "A guaranteed 5-mark board question gives the Median and Total Frequency ($N$), with two frequencies missing ($x$ and $y$).  \n\n**The Universal 4-Step Solution Blueprint:**  \n1. **Equation 1 (Total Frequency)**:  \n   Sum all frequencies: $\\sum f_i = (\\text{known sum}) + x + y = N$.  \n   $$\\implies \\mathbf{x + y = N - \\text{known sum}} \\qquad \\text{--- (Eq 1)}$$  \n\n2. **Identify Median Class from Given Median**:  \n   If given Median is $28.5$, look at the class intervals: $28.5$ lies in the interval **$20 - 30$**!  \n   Therefore, the **Median Class is strictly $20 - 30$**! (You don't need $N/2$ to find the median class!).  \n\n3. **Equation 2 (Median Formula)**:  \n   Substitute into $\\text{Median} = l + \\left(\\frac{N/2 - cf}{f}\\right) \\times h$.  \n   Since Median is known ($28.5$), this equation contains ONLY ONE unknown ($x$)! Solve for **$x$**.  \n\n4. **Solve for $y$**:  \n   Plug $x$ into Eq 1 to find **$y$**!",
      formulasOrKeyPoints: [
        {
          title: "NCERT Iconic Model Solution (Median = 28.5, N = 60)",
          content: "1. Sum of frequencies: $45 + x + y = 60 \\implies \\mathbf{x + y = 15}$.  \n2. Median $28.5$ lies in class $20 - 30 \\implies l = 20, h = 10, f = 20, cf = 5 + x$.  \n3. Substitute:  \n   $$28.5 = 20 + \\left( \\frac{30 - (5 + x)}{20} \\right) \\times 10$$  \n   $$8.5 = \\frac{25 - x}{2} \\implies 17 = 25 - x \\implies \\mathbf{x = 8}$$  \n4. From Eq 1: $8 + y = 15 \\implies \\mathbf{y = 7}$!",
          note: "Memorise this problem structure! $x=8, y=7$ is one of the most famous answers in Class 10."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Brackets Around Preceding $cf$",
          action: "Write $\\frac{N}{2} - (5 + x) = 30 - 5 - x = 25 - x$.",
          proTip: "Forgetting brackets around $(5+x)$ causes $30 - 5 + x = 25 + x$, ruining the entire solution."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing $30 - 5 + x$ instead of $30 - (5 + x) = 25 - x$.",
          correction: "The minus sign distributes over the entire expression $(5 + x)$! You must subtract both 5 and $x$."
        }
      ]
    }
  ]
};
