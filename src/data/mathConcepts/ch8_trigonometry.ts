import type { MathChapterConcept } from "./types";

export const CH8_TRIGONOMETRY_CONCEPT: MathChapterConcept = {
  chapterNo: 8,
  title: "Introduction to Trigonometry",
  weightage: "8 Marks (High Yield)",
  oneLiner: "Trig ratios link angles to side lengths; Pythagorean identities are Pythagoras divided by hypotenuse squared.",
  analogyTitle: "Measuring Pyramids Without Climbing Them",
  analogyContent: "Ancient Greek and Indian mathematicians wanted to find the height of a mountain or pyramid without climbing it. They noticed that for any given sun angle, the ratio of (Shadow Length) to (Object Height) is ALWAYS constant regardless of the size! That constant ratio was named Tangent, Sine, and Cosine. Trig is simply the universal dictionary between angles and side ratios.",
  sections: [
    {
      id: "clock_intro",
      label: "1. The Clock Hands Adventure & What is Trigonometry?",
      heading: "Angles, Rigidity, and Measuring Mountains Without Climbing Them",
      subheading: "Activity Based Method (Parijat Jain p514-515) + NCERT Foundations",
      explanation: "Imagine a 5-year-old child asking: **What is an angle?** Picture a wall clock in front of you! Its two hands dance in circles. When the minute hand points straight up at 12 and the hour hand points right at 3, they make a crisp square corner like a slice of pizza: that is a **Right Angle ($90^\\circ$)**! When one hand points at 12 and the other at 6, they form a flat line: that is a **Straight Angle ($180^\\circ$)**. A complete spin around the clock is $360^\\circ$.  \n\n**Why are triangles the kings of geometry?** If you build a square with 4 sticks and push on a corner, it wobbles and flattens into a diamond (parallelogram). But if you build a triangle with 3 sticks and push on it, it CANNOT bend without snapping! Triangles are completely rigid. That is why bridges, cranes, roof trusses, and the Eiffel Tower are made of triangles.  \n\n**What is Trigonometry?** From Greek: *tri* (three) + *gonon* (angle/side) + *metron* (measure). It is the mathematical superpower that lets you calculate the height of Mount Everest or the Qutub Minar, or the width of a roaring river, simply by measuring an angle on the ground without ever climbing up!",
      formulasOrKeyPoints: [
        {
          title: "Types of Angles (Parijat Jain Section 8.2)",
          content: "$\\bullet$ Acute Angle: $0^\\circ < \\theta < 90^\\circ$  \n$\\bullet$ Right Angle: $\\theta = 90^\\circ$ (The cornerstone of Class 10 trigonometry!)  \n$\\bullet$ Obtuse Angle: $90^\\circ < \\theta < 180^\\circ$  \n$\\bullet$ Straight Angle: $\\theta = 180^\\circ$  \n$\\bullet$ Reflex Angle: $180^\\circ < \\theta < 360^\\circ$  \n$\\bullet$ Complete Angle: $\\theta = 360^\\circ$",
          note: "In Class 10 CBSE, we strictly study acute angles ($0^\\circ \\le \\theta \\le 90^\\circ$) inside right-angled triangles."
        },
        {
          title: "Pythagoras Theorem — The Bedrock Relationship",
          content: "In any right-angled triangle:  \n$$(\\text{Hypotenuse})^2 = (\\text{Perpendicular})^2 + (\\text{Base})^2 \\quad \\implies \\quad H^2 = P^2 + B^2$$  \n$$\\text{Common Pythagorean Triples: } (3, 4, 5), \\; (5, 12, 13), \\; (7, 24, 25), \\; (8, 15, 17), \\; (9, 40, 41)$$",
          note: "Memorising these 5 triples saves up to 3 minutes of square root calculations per problem in board exams!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Spot the Right Angle First",
          action: "Always find the $90^\\circ$ square symbol box in the triangle. In $\\triangle ABC$, if it is right-angled at $B$, then $\\angle B = 90^\\circ$.",
          proTip: "The side directly opposite to this $90^\\circ$ box is ALWAYS the Hypotenuse ($H$). It is the longest side of all three."
        },
        {
          stepNo: 2,
          title: "Identify the Reference Acute Angle $\\theta$",
          action: "Notice which angle the question asks about: $\\angle A$ or $\\angle C$. Your perpendicular and base DEPEND entirely on which corner you stand at!",
          proTip: "Never label Perpendicular and Base before knowing which angle $\\theta$ the question is asking for."
        }
      ],
      examinerTraps: [
        {
          trap: "Assuming the vertical side is always 'Perpendicular' and the horizontal side is always 'Base'.",
          correction: "Perpendicular and Base are NOT fixed by orientation! They depend entirely on the angle under consideration. If the triangle is rotated or if you switch from $\\angle A$ to $\\angle C$, Perpendicular and Base swap!"
        }
      ]
    },
    {
      id: "punta_bata",
      label: "2. PuNTA & BATA — Meeting the 3 Sides",
      heading: "Perpendicular Never Touches the Angle (PuNTA) & Base Always Touches the Angle (BATA)",
      subheading: "Parijat Jain's Famous Memory Aids (p516-517) + Eliminating Board Traps",
      explanation: "The single biggest mistake Class 10 students make in Board Exams is mixing up which side is Perpendicular ($P$) and which is Base ($B$). Author **Parijat Jain** introduced two infallible memory rules:  \n\n1. **PuNTA Rule**: **P**erpendicular **u** **N**ever **T**ouches the **A**ngle!  \nLook at angle $\\theta$. The side that does NOT touch $\\theta$ at all — the side sitting directly across the room facing it — is the **Perpendicular ($P$)**!  \n\n2. **BATA Rule**: **B**ase **A**lways **T**ouches the **A**ngle!  \nLook at angle $\\theta$. The non-hypotenuse side that actually touches $\\theta$, acting as the floor it rests upon, is the **Base ($B$)**!  \n\n3. **The Hypotenuse ($H$)**:  \nThe playground slide! It is the longest side, and it ALWAYS faces the $90^\\circ$ corner box. It never changes its name no matter what angle you look from.",
      formulasOrKeyPoints: [
        {
          title: "Side Identification for $\\triangle ABC$ (Right-angled at $B$)",
          content: "$\\bullet$ When standing at Angle $\\angle A$:  \n$$\\text{Opposite side } = BC \\implies P = BC$$  \n$$\\text{Adjacent side } = AB \\implies B = AB$$  \n$$\\text{Hypotenuse } = AC \\implies H = AC$$  \n\n$\\bullet$ When standing at Angle $\\angle C$:  \n$$\\text{Opposite side } = AB \\implies P = AB$$  \n$$\\text{Adjacent side } = BC \\implies B = BC$$  \n$$\\text{Hypotenuse } = AC \\implies H = AC$$",
          note: "Notice: When you walk from corner A to corner C, P and B swap! AC remains the Hypotenuse."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Apply PuNTA: Point an Arrow Across the Triangle",
          action: "Put your pencil on angle $\\theta$. Draw an arrow shooting straight out across the triangle. The wall it hits is Perpendicular ($P$).",
          proTip: "Because Perpendicular Never Touches the Angle, this arrow trick works 100% of the time, even when the triangle is drawn upside down!"
        },
        {
          stepNo: 2,
          title: "Apply BATA: Identify the Neighboring Side",
          action: "Angle $\\theta$ is formed by two lines meeting: one is the long Hypotenuse ($H$). The other side that touches it is Base ($B$).",
          proTip: "Base Always Touches the Angle. Once $H$ and $P$ are identified, the remaining side is automatically $B$."
        }
      ],
      examinerTraps: [
        {
          trap: "Forgetting to take the square root when applying Pythagoras: writing $H = P^2 + B^2$ instead of $H = \\sqrt{P^2 + B^2}$.",
          correction: "Pythagoras gives $H^2 = P^2 + B^2$. You must take the square root $\\sqrt{P^2 + B^2}$ to find the actual length of $H$! E.g., $3^2 + 4^2 = 25 \\implies H = \\sqrt{25} = 5$."
        }
      ]
    },
    {
      id: "ratios",
      label: "3. The 6 Ratios & The Magic Mnemonics",
      heading: "Pandit Badri Prasad Har Har Bole & SOH CAH TOA",
      subheading: "Sona Chandi Tole + The 'Opposite Letter' Reciprocal Flip Rule",
      explanation: "Trigonometric ratios are simply fractions comparing pairs of sides in a right triangle. Since there are 3 sides ($P, B, H$), there are exactly $3 \\times 2 = 6$ possible fractions!  \n\n**Method #1: The Beloved Indian Board Mnemonic**  \n$$\\begin{array}{c|c|c} \\mathbf{P} & \\mathbf{B} & \\mathbf{P} \\\\ \\hline \\mathbf{H} & \\mathbf{H} & \\mathbf{B} \\end{array} \\quad \\implies \\quad \\begin{array}{c} \\textbf{Pandit Badri Prasad} \\\\ \\hline \\textbf{Har Har Bole} \\end{array} \\quad \\implies \\quad \\begin{array}{c} \\textbf{Sona (sin)} & \\textbf{Chandi (cos)} & \\textbf{Tole (tan)} \\end{array}$$  \n\n**Method #2: The Global SOH - CAH - TOA**  \n$\\bullet$ **SOH**: $\\sin\\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{P}{H}$  \n$\\bullet$ **CAH**: $\\cos\\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{B}{H}$  \n$\\bullet$ **TOA**: $\\tan\\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{P}{B}$  \n\n**The Reciprocal 'Opposite Letter' Memory Rule:**  \n$\\bullet$ Sine (starts with **S**) flips to Cosecant (starts with **C**!): $\\csc\\theta = \\frac{1}{\\sin\\theta} = \\frac{H}{P}$  \n$\\bullet$ Cosine (starts with **C**) flips to Secant (starts with **S**!): $\\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{H}{B}$  \n$\\bullet$ Tangent (starts with **T**) flips to Cotangent (starts with **C**!): $\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{B}{P}$",
      formulasOrKeyPoints: [
        {
          title: "The 6 Primary & Reciprocal Ratios",
          content: "$$\\sin\\theta = \\frac{P}{H} \\iff \\csc\\theta = \\frac{H}{P} = \\frac{1}{\\sin\\theta}$$  \n$$\\cos\\theta = \\frac{B}{H} \\iff \\sec\\theta = \\frac{H}{B} = \\frac{1}{\\cos\\theta}$$  \n$$\\tan\\theta = \\frac{P}{B} \\iff \\cot\\theta = \\frac{B}{P} = \\frac{1}{\\tan\\theta}$$",
          note: "Golden Quotient Relations: $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$ and $\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}$. Also: $\\tan\\theta \\cdot \\cot\\theta = 1$."
        },
        {
          title: "Trigonometric Ratios Are Pure Numbers (Unitless!)",
          content: "Because a trig ratio is the ratio of two lengths (e.g. $\\frac{5\\text{ cm}}{13\\text{ cm}} = \\frac{5}{13}$), the units cancel out! A trigonometric ratio has NO centimeters, meters, or degrees attached to it.",
          note: "Theorem (Parijat Jain p517): The values of trig ratios depend ONLY on angle $\\theta$, NOT on the size of the triangle! By AA similarity, doubling side lengths doubles both numerator and denominator, canceling out completely."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Express Ratios with $k$-constant in Board Exams",
          action: "If $\\sin\\theta = \\frac{3}{5}$, write $P = 3k$ and $H = 5k$ (where $k > 0$ is a positive real ratio multiplier).",
          proTip: "CBSE marking scheme awards 0.5 marks for writing the $k$ multiplier. By Pythagoras: $B = \\sqrt{(5k)^2 - (3k)^2} = 4k$. Then $k$ cancels in all ratios!"
        },
        {
          stepNo: 2,
          title: "Convert to Sine and Cosine to Solve Complex Equations",
          action: "Whenever an equation contains $\\tan, \\cot, \\sec, \\csc$, rewrite them in terms of $\\sin\\theta$ and $\\cos\\theta$.",
          proTip: "This reduces 6 different functions down to just 2, allowing easy algebraic simplification."
        }
      ],
      examinerTraps: [
        {
          trap: "Thinking $\\sin\\theta$ means $\\sin \\times \\theta$ (multiplication).",
          correction: "'sin' separated from $\\theta$ has zero mathematical meaning! $\\sin\\theta$ is a single indivisible function symbol representing 'the Sine of angle $\\theta$'. You cannot cancel $\\theta$: $\\frac{\\sin\\theta}{\\theta} \\neq \\sin$!"
        },
        {
          trap: "Confusing $(\\sin\\theta)^2$ with $\\sin\\theta^2$.",
          correction: "$(\\sin\\theta)^2$ is written as $\\sin^2\\theta$ (squaring the value of the ratio). $\\sin\\theta^2$ means taking the sine of the squared angle (e.g. $\\sin(30^2) = \\sin 900^\\circ$), which is completely wrong in Class 10!"
        }
      ]
    },
    {
      id: "complementary",
      label: "4. The Swap Secret (θ + φ = 90°) — Why Sin & Cos Swap!",
      heading: "If $\\theta + \\phi = 90^\\circ$, then sin-cos, tan-cot, and sec-csc swap!",
      subheading: "The Observer Perspective Secret + CBSE HOTS Cancellation Arsenal",
      explanation: "Why do $\\sin$ and $\\cos$ swap values when two angles add up to $90^\\circ$?  \n\nImagine a right triangle $\\triangle ABC$ with $\\angle B = 90^\\circ$. The sum of angles in any triangle is $180^\\circ$, so:  \n$$\\angle A + \\angle C = 90^\\circ \\quad \\iff \\quad \\angle C = 90^\\circ - \\angle A$$  \nThey are **Complementary Buddies**! Now watch the magic of perspective:  \n\n1. **You stand at angle $A$**:  \nOpposite is $BC$, Hypotenuse is $AC$. So:  \n$$\\sin A = \\frac{BC}{AC}$$  \n\n2. **Your friend stands at angle $C$**:  \nAdjacent is $BC$, Hypotenuse is $AC$. So:  \n$$\\cos C = \\frac{BC}{AC}$$  \n\n**LOOK AT BOTH EQUATIONS!** They are both equal to $\\frac{BC}{AC}$!  \nTherefore:  \n$$\\sin A = \\cos C \\quad \\implies \\quad \\sin(90^\\circ - C) = \\cos C \\quad \\text{and} \\quad \\cos(90^\\circ - A) = \\sin A$$  \n\nThat is literally why Cosine is called **CO-sine**: it stands for **COmplementary Sine**!  \nBy the exact same perspective swap:  \n$$\\tan(90^\\circ - \\theta) = \\cot\\theta \\quad \\text{and} \\quad \\cot(90^\\circ - \\theta) = \\tan\\theta$$  \n$$\\sec(90^\\circ - \\theta) = \\csc\\theta \\quad \\text{and} \\quad \\csc(90^\\circ - \\theta) = \\sec\\theta$$",
      formulasOrKeyPoints: [
        {
          title: "The 3 Golden Complementary Swap Pairs",
          content: "- **Sine & Cosine:**\n  $$\\mathbf{\\sin(90^\\circ - \\theta) = \\cos\\theta} \\qquad \\iff \\qquad \\mathbf{\\cos(90^\\circ - \\theta) = \\sin\\theta}$$\n\n- **Tangent & Cotangent:**\n  $$\\mathbf{\\tan(90^\\circ - \\theta) = \\cot\\theta} \\qquad \\iff \\qquad \\mathbf{\\cot(90^\\circ - \\theta) = \\tan\\theta}$$\n\n- **Secant & Cosecant:**\n  $$\\mathbf{\\sec(90^\\circ - \\theta) = \\csc\\theta} \\qquad \\iff \\qquad \\mathbf{\\csc(90^\\circ - \\theta) = \\sec\\theta}$$",
          note: "Notice that 30° and 60° add to 90°: that is why sin 30° = cos 60° = 1/2, and tan 30° = cot 60° = 1/√3!"
        },
        {
          title: "Board HOTS Cancellation Arsenal (Frequently Tested!)",
          content: "$\\bullet$ **Type 1 (Fractions sum to 90°)**:  \n$$\\frac{\\sin 47^\\circ}{\\cos 43^\\circ} = \\frac{\\sin 47^\\circ}{\\sin(90^\\circ - 43^\\circ)} = \\frac{\\sin 47^\\circ}{\\sin 47^\\circ} = 1$$  \n\n$\\bullet$ **Type 2 (Long Tan Product Chain)**:  \n$$\\tan 1^\\circ \\cdot \\tan 2^\\circ \\cdots \\tan 89^\\circ = 1$$  \nBecause $\\tan 89^\\circ = \\cot 1^\\circ$, and $\\tan 1^\\circ \\cdot \\cot 1^\\circ = 1$. Every term from outside inward pairs to 1, leaving only $\\tan 45^\\circ = 1$ in the middle!  \n\n$\\bullet$ **Type 3 (Pythagorean Complementary Sum)**:  \n$$\\sin^2 35^\\circ + \\sin^2 55^\\circ = \\sin^2 35^\\circ + \\cos^2(90^\\circ - 55^\\circ) = \\sin^2 35^\\circ + \\cos^2 35^\\circ = 1$$",
          note: "Whenever you see weird angles like 23°, 67°, 47°, 43°, 55°, 35° in an exam, DO NOT PANIC! Immediately check if they sum to 90°. They will ALWAYS cancel out to 1 or 0!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Pair Up Angles That Add to 90°",
          action: "Scan the question and pair complementary angles: $(47^\\circ + 43^\\circ = 90^\\circ)$, $(20^\\circ + 70^\\circ = 90^\\circ)$, etc.",
          proTip: "Highlight or underline the pairs in your question paper."
        },
        {
          stepNo: 2,
          title: "Convert Only ONE Angle in Each Pair",
          action: "Change the larger angle into $(90^\\circ - \\text{smaller})$. E.g., replace $\\cos 43^\\circ$ with $\\sin(90^\\circ - 43^\\circ) = \\sin 47^\\circ$. Leave $\\sin 47^\\circ$ untouched!",
          proTip: "NEVER convert both angles in a pair! If you convert both, you just swap them back and forth forever."
        },
        {
          stepNo: 3,
          title: "Simplify Through Direct Cancellation",
          action: "Identical numerators and denominators cancel to 1. Reciprocal products $\\tan\\theta \\cdot \\cot\\theta = 1$. Sums of squares become $\\sin^2\\theta + \\cos^2\\theta = 1$.",
          proTip: "If your final answer is messy or has roots left over when evaluating complementary pairs, recheck step 2."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing $\\sin(90^\\circ - \\theta) = \\sin\\theta$ (forgetting the function swaps!).",
          correction: "Subtracting from $90^\\circ$ SWAPS the function: $\\sin$ becomes $\\cos$, $\\tan$ becomes $\\cot$, $\\sec$ becomes $\\csc$! Writing $\\sin(90^\\circ - \\theta) = \\sin\\theta$ is completely incorrect."
        },
        {
          trap: "Converting BOTH terms in a pair: changing $\\sin 70^\\circ / \\cos 20^\\circ$ into $\\cos 20^\\circ / \\sin 70^\\circ$.",
          correction: "Convert ONLY ONE of the two terms! Keep $\\sin 70^\\circ$ as is, and rewrite $\\cos 20^\\circ = \\sin(90^\\circ - 20^\\circ) = \\sin 70^\\circ$. Then $\\frac{\\sin 70^\\circ}{\\sin 70^\\circ} = 1$."
        }
      ]
    },
    {
      id: "table",
      label: "5. Standard Angle Values Table (0°, 30°, 45°, 60°, 90°)",
      heading: "The 0-1-2-3-4 Construction Secret & Hand Trick",
      subheading: "Build the Entire 30-Cell Matrix in 30 Seconds Under Exam Stress",
      explanation: "You do NOT need to blindly memorise 30 separate numbers. You can construct the entire official CBSE table on your rough sheet in under 30 seconds using the legendary **0-1-2-3-4 Square Root Secret**:  \n\n1. Write the 5 angles across the top: $0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ$.  \n2. Below them, write whole numbers: **0, 1, 2, 3, 4**.  \n3. Divide all by 4: $\\frac{0}{4}, \\frac{1}{4}, \\frac{2}{4}, \\frac{3}{4}, \\frac{4}{4}$.  \n4. Take the square root of each: $\\sqrt{\\frac{0}{4}}, \\sqrt{\\frac{1}{4}}, \\sqrt{\\frac{2}{4}}, \\sqrt{\\frac{3}{4}}, \\sqrt{\\frac{4}{4}}$.  \n\nSimplifying yields the exact values of **Sine**:  \n$$0, \\quad \\frac{1}{2}, \\quad \\frac{1}{\\sqrt{2}}, \\quad \\frac{\\sqrt{3}}{2}, \\quad 1$$  \n\nNow, all other 5 rows follow automatically like clockwork:  \n$\\bullet$ **Cosine**: Write the Sine row in REVERSE order ($1, \\frac{\\sqrt{3}}{2}, \\frac{1}{\\sqrt{2}}, \\frac{1}{2}, 0$).  \n$\\bullet$ **Tangent**: Divide Sine by Cosine: $\\frac{0}{1} = 0, \\; \\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}}, \\; \\frac{1/\\sqrt{2}}{1/\\sqrt{2}} = 1, \\; \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}, \\; \\frac{1}{0} = \\text{Not Defined}$.  \n$\\bullet$ **Csc, Sec, Cot**: Flip Sine, Cosine, and Tangent upside-down!",
      formulasOrKeyPoints: [
        {
          title: "Hand / Finger Trick for Quick Instant Recall",
          content: "Hold your left hand with palm facing you. Assign fingers from pinky to thumb:  \nPinky = $0^\\circ$, Ring = $30^\\circ$, Middle = $45^\\circ$, Index = $60^\\circ$, Thumb = $90^\\circ$.  \n$$\\sin\\theta = \\frac{\\sqrt{\\text{Fingers below}}}{2} \\qquad \\cos\\theta = \\frac{\\sqrt{\\text{Fingers above}}}{2}$$  \nExample: Fold Middle finger ($45^\\circ$). Fingers below = 2 $\\implies \\sin 45^\\circ = \\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}$. Fingers above = 2 $\\implies \\cos 45^\\circ = \\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}$!",
          note: "This physical hand trick allows you to instantly check any value during the exam without writing down the whole table!"
        },
        {
          title: "The 4 'Not Defined' Values in Trigonometry",
          content: "$$\\tan 90^\\circ = \\text{Not Defined} \\quad (\\sin 90^\\circ / \\cos 90^\\circ = 1/0)$$  \n$$\\csc 0^\\circ = \\text{Not Defined} \\quad (1 / \\sin 0^\\circ = 1/0)$$  \n$$\\sec 90^\\circ = \\text{Not Defined} \\quad (1 / \\cos 90^\\circ = 1/0)$$  \n$$\\cot 0^\\circ = \\text{Not Defined} \\quad (\\cos 0^\\circ / \\sin 0^\\circ = 1/0)$$",
          note: "In CBSE board papers, always write 'Not Defined' or 'Undefined'. NEVER write $\\infty$ or '0', which loses marks!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Draw the Table in 30 Seconds During Reading Time",
          action: "On the rough workspace of your answer sheet, write $0, 1, 2, 3, 4$ and apply the root method to write out $\\sin, \\cos, \\tan$.",
          proTip: "Having the verified table ready eliminates silly arithmetic mistakes when under time pressure."
        },
        {
          stepNo: 2,
          title: "Always Rationalize Denominators in Final Answers",
          action: "If your calculation gives $\\frac{1}{\\sqrt{3}}$, write it as $\\frac{\\sqrt{3}}{3}$. If it gives $\\frac{2}{\\sqrt{3}}$, write $\\frac{2\\sqrt{3}}{3}$.",
          proTip: "CBSE examiners prefer rationalized surds in final evaluation questions."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing $\\tan 90^\\circ = 0$ instead of 'Not Defined'.",
          correction: "$\\tan 90^\\circ = \\sin 90^\\circ / \\cos 90^\\circ = 1/0 = $ Not Defined. Only $\\tan 0^\\circ = 0$."
        },
        {
          trap: "Confusing $\\sin 30^\\circ$ and $\\cos 30^\\circ$.",
          correction: "Golden anchor: $\\sin 30^\\circ = 1/2$. Sine starts at 0 and grows up to 1. Smaller angle $30^\\circ$ gets the smaller value $1/2$. Larger angle $60^\\circ$ gets the larger value $\\sqrt{3}/2$!"
        }
      ]
    },
    {
      id: "identities",
      label: "6. The 3 Golden Pythagorean Identities & The Conjugate Secret",
      heading: "From $P^2 + B^2 = H^2$ to $(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = 1$",
      subheading: "Parijat Jain Identity Proofs & The High-Yield Reciprocal Conjugate Weapon",
      explanation: "How are the 3 Pythagorean identities born? They are NOT magical formulas — they are simply the **Pythagoras Theorem dressed up in 3 different outfits**!  \n\nStart with the true geometry statement:  \n$$P^2 + B^2 = H^2$$  \n\n1. **Divide all terms by $H^2$**:  \n$$\\left(\\frac{P}{H}\\right)^2 + \\left(\\frac{B}{H}\\right)^2 = 1 \\quad \\implies \\quad \\mathbf{\\sin^2\\theta + \\cos^2\\theta = 1}$$  \n\n2. **Divide all terms by $B^2$**:  \n$$\\left(\\frac{P}{B}\\right)^2 + 1 = \\left(\\frac{H}{B}\\right)^2 \\quad \\implies \\quad \\tan^2\\theta + 1 = \\sec^2\\theta \\quad \\iff \\quad \\mathbf{\\sec^2\\theta - \\tan^2\\theta = 1}$$  \n\n3. **Divide all terms by $P^2$**:  \n$$1 + \\left(\\frac{B}{P}\\right)^2 = \\left(\\frac{H}{P}\\right)^2 \\quad \\implies \\quad 1 + \\cot^2\\theta = \\csc^2\\theta \\quad \\iff \\quad \\mathbf{\\csc^2\\theta - \\cot^2\\theta = 1}$$  \n\n**The Secret Conjugate Reciprocal Weapon (Parijat Jain p541, CBSE Favorite!)**:  \nUsing the algebra difference of squares formula $a^2 - b^2 = (a - b)(a + b)$:  \n$$\\sec^2\\theta - \\tan^2\\theta = 1 \\quad \\implies \\quad (\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = 1$$  \n$$\\csc^2\\theta - \\cot^2\\theta = 1 \\quad \\implies \\quad (\\csc\\theta - \\cot\\theta)(\\csc\\theta + \\cot\\theta) = 1$$  \n\nThis means that **$(\\sec\\theta - \\tan\\theta)$ and $(\\sec\\theta + \\tan\\theta)$ are exact reciprocals of each other**!  \nIf the exam gives: $\\sec\\theta + \\tan\\theta = 5$, you INSTANTLY know that $\\sec\\theta - \\tan\\theta = \\frac{1}{5}$!",
      formulasOrKeyPoints: [
        {
          title: "All Transposed Variations for Proofs",
          content: "$\\bullet$ Identity 1: $\\sin^2\\theta + \\cos^2\\theta = 1 \\iff \\sin^2\\theta = 1 - \\cos^2\\theta \\iff \\cos^2\\theta = 1 - \\sin^2\\theta$  \n$\\bullet$ Identity 2: $\\sec^2\\theta - \\tan^2\\theta = 1 \\iff \\sec^2\\theta = 1 + \\tan^2\\theta \\iff \\tan^2\\theta = \\sec^2\\theta - 1$  \n$\\bullet$ Identity 3: $\\csc^2\\theta - \\cot^2\\theta = 1 \\iff \\csc^2\\theta = 1 + \\cot^2\\theta \\iff \\cot^2\\theta = \\csc^2\\theta - 1$",
          note: "Notice that 1 is always on the right side for: sin²+cos²=1, sec²-tan²=1, and csc²-cot²=1."
        },
        {
          title: "The Classic 3-Mark Conjugate Solver Template",
          content: "Problem: If $\\sec\\theta + \\tan\\theta = p$, find $\\sec\\theta$ and $\\tan\\theta$.  \n1. Since $(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = 1$, we have: $\\sec\\theta - \\tan\\theta = \\frac{1}{p}$  \n2. Add the two equations: $2\\sec\\theta = p + \\frac{1}{p} = \\frac{p^2 + 1}{p} \\implies \\sec\\theta = \\frac{p^2 + 1}{2p}$  \n3. Subtract the two equations: $2\\tan\\theta = p - \\frac{1}{p} = \\frac{p^2 - 1}{p} \\implies \\tan\\theta = \\frac{p^2 - 1}{2p}$  \n4. Therefore: $\\sin\\theta = \\frac{\\tan\\theta}{\\sec\\theta} = \\frac{p^2 - 1}{p^2 + 1}$!",
          note: "This exact question has appeared in CBSE 2020, 2022, and 2024! Memorise this 4-step structure."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identity Proving Rule: Pick the More Complicated Side",
          action: "Always begin your proof from the side with more terms or fractions (usually LHS). Keep an eye on RHS as your target destination.",
          proTip: "Never manipulate both sides simultaneously in a single equation. Work strictly: 'LHS = ... = RHS (Hence Proved)'."
        },
        {
          stepNo: 2,
          title: "Convert to $\\sin$ and $\\cos$ if Stuck",
          action: "If algebraic factorization isn't obvious, rewrite every $\\tan, \\cot, \\sec, \\csc$ into $\\frac{\\sin}{\\cos}, \\frac{\\cos}{\\sin}, \\frac{1}{\\cos}, \\frac{1}{\\sin}$. Take LCM of denominators.",
          proTip: "90% of NCERT identity problems resolve within 3 lines of converting to Sine and Cosine."
        },
        {
          stepNo: 3,
          title: "Conjugate Multiplication for Radical Expressions",
          action: "When you see expressions like $\\sqrt{\\frac{1 + \\sin A}{1 - \\sin A}}$, multiply numerator and denominator inside the root by $(1 + \\sin A)$ to create $(1 - \\sin^2 A) = \\cos^2 A$ in denominator!",
          proTip: "The square root pops right off: $\\sqrt{\\frac{(1+\\sin A)^2}{\\cos^2 A}} = \\frac{1+\\sin A}{\\cos A} = \\sec A + \\tan A$!"
        }
      ],
      examinerTraps: [
        {
          trap: "Writing $\\sec^2\\theta + \\tan^2\\theta = 1$ (putting plus instead of minus).",
          correction: "Only $\\sin^2\\theta + \\cos^2\\theta = 1$ has a PLUS sign! Both sec-tan and csc-cot identities have a MINUS sign: $\\sec^2\\theta - \\tan^2\\theta = 1$ and $\\csc^2\\theta - \\cot^2\\theta = 1$."
        },
        {
          trap: "Thinking $\\sin(A + B) = \\sin A + \\sin B$.",
          correction: "Trigonometric functions do NOT distribute linearly over addition! $\\sin(30^\\circ + 60^\\circ) = \\sin 90^\\circ = 1$, but $\\sin 30^\\circ + \\sin 60^\\circ = \\frac{1}{2} + \\frac{\\sqrt{3}}{2} \\approx 1.366 \\neq 1$."
        }
      ]
    },
    {
      id: "playbook",
      label: "7. CBSE Board Problem-Solving Playbook (Type A to Type F)",
      heading: "Step-by-Step Methodologies from Parijat Jain & NCERT",
      subheading: "Mastering Every Question Typology to Secure 8/8 Full Marks",
      explanation: "Parijat Jain categorises all trigonometry questions into 6 distinct typologies. Here is your cheat code to recognize and crush each type:  \n\n$\\bullet$ **Type A (Two sides given, find all ratios)**: Apply Pythagoras $H^2 = P^2 + B^2$ to find third side. Use PuNTA/BATA to label sides. Apply Pandit Badri Prasad.  \n$\\bullet$ **Type B (One ratio given, find algebraic expression)**: Set $P = ak, H = bk$. Find third side using Pythagoras. Substitute into required expression.  \n$\\bullet$ **Type C (Trigonometric Table Evaluation)**: Substitute exact values for $30^\\circ, 45^\\circ, 60^\\circ$. Watch fraction operations carefully. Rationalize surd denominators.  \n$\\bullet$ **Type D (Two acute angle relations)**: E.g., $\\sin(A - B) = 1/2$ and $\\cos(A + B) = 1/2$. Set $A - B = 30^\\circ$ and $A + B = 60^\\circ$. Solve simultaneous linear equations for $A$ and $B$.  \n$\\bullet$ **Type E (Complementary angle simplification)**: Pair angles summing to $90^\\circ$. Convert only one of each pair using swap rules. Cancel out terms.  \n$\\bullet$ **Type F (Proving Trigonometric Identities)**: Start with LHS. Express in $\\sin, \\cos$ or use conjugate multiplication. Factorize using $a^2 - b^2$ or $a^3 \\pm b^3$. Reach RHS.",
      formulasOrKeyPoints: [
        {
          title: "Simultaneous Angle Equation Template (Type D)",
          content: "Given: $\\sin(A + B) = 1 \\implies A + B = 90^\\circ$  \nGiven: $\\cos(A - B) = \\frac{\\sqrt{3}}{2} \\implies A - B = 30^\\circ$  \nAdding both: $2A = 120^\\circ \\implies A = 60^\\circ$  \nSubtracting: $2B = 60^\\circ \\implies B = 30^\\circ$",
          note: "A guaranteed 2-mark or 3-mark question in almost every board paper!"
        },
        {
          title: "Algebraic Factorization Identities Required in Trig Proofs",
          content: "$\\bullet$ $a^2 - b^2 = (a - b)(a + b)$  \n$\\bullet$ $(a + b)^2 = a^2 + 2ab + b^2$  \n$\\bullet$ $(a - b)^2 = a^2 - 2ab + b^2$  \n$\\bullet$ $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$  \n$\\bullet$ $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$",
          note: "Notice how $(\\sin^4\\theta - \\cos^4\\theta) = (\\sin^2\\theta - \\cos^2\\theta)(\\sin^2\\theta + \\cos^2\\theta) = (\\sin^2\\theta - \\cos^2\\theta)(1) = \\sin^2\\theta - \\cos^2\\theta$!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Read & Identify the Typology Immediately",
          action: "Before touching your pen, classify the question as Type A, B, C, D, E, or F. Select the matching solution methodology from your playbook.",
          proTip: "Recognizing the problem type immediately reduces exam panic and prevents false starts."
        },
        {
          stepNo: 2,
          title: "State Theorems & Identities Clearly",
          action: "In CBSE board exams, always write the identity reason in parentheses on the right side: '$\\because \\sin^2\\theta + \\cos^2\\theta = 1$' or '$\\because 47^\\circ + 43^\\circ = 90^\\circ$'.",
          proTip: "CBSE official marking schemes allot 0.5 to 1 full mark specifically for writing out the identity reason formula!"
        }
      ],
      examinerTraps: [
        {
          trap: "Skipping intermediate algebraic steps when expanding $(\\sin\\theta + \\csc\\theta)^2$.",
          correction: "Always expand completely: $\\sin^2\\theta + \\csc^2\\theta + 2\\sin\\theta\\csc\\theta$. Note that $2\\sin\\theta\\csc\\theta = 2(1) = 2$! Skipping this cross-term causes loss of 2 full marks."
        }
      ]
    }
  ]
};
