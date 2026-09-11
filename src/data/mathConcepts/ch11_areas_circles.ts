import type { MathChapterConcept } from "./types";

export const CH11_AREAS_CIRCLES_CONCEPT: MathChapterConcept = {
  chapterNo: 11,
  title: "Areas Related to Circles",
  weightage: "4 Marks (Board Essential)",
  oneLiner: "A sector is a pizza slice; A segment is the pizza slice minus the crust triangle; Minute hands sweep 6° every minute.",
  analogyTitle: "Slicing Pizza: Sectors vs Segments",
  analogyContent: "Imagine a circular pizza with center $O$.  \nIf you make two straight cuts from the center out to the edge along radii $OA$ and $OB$, you pull out a triangular-shaped slice: that is a **Sector**!  \nNow, if you chop off the outer bread-crust with a straight chord knife cut from $A$ to $B$, the little crescent crust piece is a **Segment**!  \nA segment is simply the sector minus the central triangle.",
  sections: [
    {
      id: "sector_arc_formulas",
      label: "1. Arc Length & Area of a Sector",
      heading: "The Fractional Multiplier $\\frac{\\theta}{360^\\circ}$",
      subheading: "Minor vs Major Sectors + The Arc-to-Area Shortcut $A = \\frac{1}{2}lr$",
      explanation: "A complete circle subtends an angle of $360^\\circ$ at its center and has circumference $2\\pi r$ and area $\\pi r^2$.  \nWhen a sector subtends an angle $\\theta$ at the center, it represents a fraction $\\mathbf{\\frac{\\theta}{360^\\circ}}$ of the entire circle!  \n\n1. **Length of an Arc of a Sector ($l$)**:  \n$$\\mathbf{l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{\\theta}{180^\\circ} \\times \\pi r}$$  \n\n2. **Area of a Sector ($A$)**:  \n$$\\mathbf{A = \\frac{\\theta}{360^\\circ} \\times \\pi r^2}$$  \n\n3. **The Arc-Length Area Shortcut**:  \nNotice that $\\frac{\\theta}{360^\\circ} \\pi r^2 = \\frac{1}{2} \\left( \\frac{\\theta}{360^\\circ} 2\\pi r \\right) r = \\mathbf{\\frac{1}{2} l r}$!  \n*(Just like the area of a triangle $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$, where the arc is the base and radius is the height!)*  \n\n4. **Minor vs Major Sector**:  \n$$\\mathbf{\\text{Area of Major Sector} = \\pi r^2 - \\text{Area of Minor Sector} = \\frac{360^\\circ - \\theta}{360^\\circ} \\times \\pi r^2}$$",
      formulasOrKeyPoints: [
        {
          title: "Perimeter of a Sector Warning",
          content: "$$\\mathbf{\\text{Perimeter of Sector} = l + 2r = \\frac{\\theta}{360^\\circ}(2\\pi r) + 2r}$$  \nDo not confuse arc length with sector perimeter! The perimeter includes the curved arc PLUS the two straight radii borders ($OA$ and $OB$).",
          note: "A common 1-mark trap: students write only the arc length l and forget to add 2r."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Find Fraction of Circle First",
          action: "Compute $\\frac{\\theta}{360^\\circ}$ as a simplified fraction:  \n$\\bullet$ $60^\\circ \\implies 1/6$ of circle  \n$\\bullet$ $90^\\circ \\implies 1/4$ of circle (Quadrant)  \n$\\bullet$ $120^\\circ \\implies 1/3$ of circle.",
          proTip: "Simplifying the fraction first eliminates big arithmetic mistakes."
        }
      ],
      examinerTraps: [
        {
          trap: "Leaving out the $+ 2r$ when asked for the PERIMETER of a sector.",
          correction: "Perimeter is the total boundary! You must add the two radial edges: $\\text{Perimeter} = \\text{Arc length} + r + r = l + 2r$."
        }
      ]
    },
    {
      id: "segment_formulas",
      label: "2. Area of a Segment (The 3 Triangle Cases)",
      heading: "Area of Segment = Area of Sector − Area of $\\triangle OAB$",
      subheading: "Mastering the 3 Triangle Angles: $60^\\circ, 90^\\circ,$ and $120^\\circ$",
      explanation: "To find the area of a **Minor Segment** bounded by chord $AB$ and arc $AB$:  \n$$\\mathbf{\\text{Area of Minor Segment} = \\text{Area of Sector } OAB - \\text{Area of } \\triangle OAB}$$  \n$$\\mathbf{\\text{Area of Major Segment} = \\text{Total Circle Area } (\\pi r^2) - \\text{Area of Minor Segment}}$$  \n\n**How to Calculate Area of $\\triangle OAB$ for the 3 Standard Angles:**  \n\n1. **Case 1: Angle at Center $\\theta = 60^\\circ$ (Equilateral Triangle)**  \nSince $OA = OB = r$, $\\triangle OAB$ is isosceles with vertex angle $60^\\circ$. This forces the other two angles to be $60^\\circ$ as well!  \nTherefore, $\\triangle OAB$ is **Equilateral**:  \n$$\\mathbf{\\text{Area of } \\triangle OAB = \\frac{\\sqrt{3}}{4} r^2}$$  \n\n2. **Case 2: Angle at Center $\\theta = 90^\\circ$ (Right-Angled Triangle)**  \nThe two radii meet at a right angle, acting as base and height:  \n$$\\mathbf{\\text{Area of } \\triangle OAB = \\frac{1}{2} \\times r \\times r = \\frac{1}{2} r^2}$$  \n\n3. **Case 3: Angle at Center $\\theta = 120^\\circ$ (Obtuse Triangle)**  \nDraw $OM \\perp AB$. $OM = r \\cos 60^\\circ = \\frac{r}{2}$, and chord $AB = 2r \\sin 60^\\circ = r\\sqrt{3}$:  \n$$\\mathbf{\\text{Area of } \\triangle OAB = \\frac{1}{2} \\times AB \\times OM = \\frac{1}{2} (r\\sqrt{3}) \\left(\\frac{r}{2}\\right) = \\frac{\\sqrt{3}}{4} r^2}$$",
      formulasOrKeyPoints: [
        {
          title: "Universal Segment Area Formula",
          content: "$$\\mathbf{\\text{Area of } \\triangle OAB = \\frac{1}{2} r^2 \\sin\\theta}$$  \n$\\bullet$ For $\\theta = 60^\\circ$: $\\frac{1}{2} r^2 \\sin 60^\\circ = \\frac{\\sqrt{3}}{4} r^2$  \n$\\bullet$ For $\\theta = 90^\\circ$: $\\frac{1}{2} r^2 \\sin 90^\\circ = \\frac{1}{2} r^2$  \n$\\bullet$ For $\\theta = 120^\\circ$: $\\frac{1}{2} r^2 \\sin 120^\\circ = \\frac{1}{2} r^2 \\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\sqrt{3}}{4} r^2$",
          note: "This single universal formula $\\frac{1}{2}r^2\\sin\\theta$ works for all three angles without memorizing separate derivations!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Check if Minor or Major Segment is Requested",
          action: "If the question asks for 'Major Segment', compute the Minor Segment first, then subtract from total circle area $\\pi r^2$.",
          proTip: "Do not attempt to compute major segment directly; subtracting minor segment is 3 times faster and avoids errors."
        }
      ],
      examinerTraps: [
        {
          trap: "Subtracting sector from triangle instead of triangle from sector.",
          correction: "The sector is the entire pizza slice (larger). The triangle is inside it (smaller). $\\text{Segment} = \\text{Sector} - \\triangle OAB$."
        }
      ]
    },
    {
      id: "clock_hands_problems",
      label: "3. Clock Hands Swept Area (CBSE Guaranteed 2M/3M)",
      heading: "The 6° Per Minute Rule for the Minute Hand",
      subheading: "Calculating Angle $\\theta$ from Minutes on a Clock Face",
      explanation: "A standard clock face is a full circle ($360^\\circ$) divided into 60 minute marks.  \n\n**The Minute Hand Velocity:**  \n$$\\text{In 60 minutes, minute hand rotates } 360^\\circ \\implies \\mathbf{1 \\text{ minute} = \\frac{360^\\circ}{60} = 6^\\circ}$$  \nEvery minute that ticks by, the minute hand sweeps an angle of **$6^\\circ$**!  \n\n**The Hour Hand Velocity:**  \n$$\\text{In 12 hours (720 mins), hour hand rotates } 360^\\circ \\implies \\mathbf{1 \\text{ minute} = \\frac{360^\\circ}{720} = 0.5^\\circ = \\left(\\frac{1}{2}\\right)^\\circ}$$  \n\n**Finding Area Swept by Minute Hand of Length $r$ in $t$ Minutes:**  \n1. Calculate central angle: $\\mathbf{\\theta = t \\times 6^\\circ}$.  \n2. Calculate area of sector: $\\mathbf{\\text{Area} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{t}{60} \\times \\pi r^2}$.",
      formulasOrKeyPoints: [
        {
          title: "Common Clock Angles Cheat Sheet",
          content: "- **$5\\text{ minutes}$:** $\\theta = 5 \\times 6^\\circ = \\mathbf{30^\\circ}$\n- **$10\\text{ minutes}$:** $\\theta = 10 \\times 6^\\circ = \\mathbf{60^\\circ}$\n- **$15\\text{ minutes}$:** $\\theta = 15 \\times 6^\\circ = \\mathbf{90^\\circ} \\quad (\\text{Quadrant: } \\frac{1}{4}\\text{ circle})$\n- **$20\\text{ minutes}$:** $\\theta = 20 \\times 6^\\circ = \\mathbf{120^\\circ}$\n- **$30\\text{ minutes}$:** $\\theta = 30 \\times 6^\\circ = \\mathbf{180^\\circ} \\quad (\\text{Semicircle})$\n- **$35\\text{ minutes}$:** $\\theta = 35 \\times 6^\\circ = \\mathbf{210^\\circ}$",
          note: "The length of the minute hand is the radius r of the circle!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify Time Interval in Minutes",
          action: "If time is from 7:05 pm to 7:40 pm, compute elapsed minutes: $40 - 5 = 35\\text{ minutes}$.",
          proTip: "Then $\\theta = 35 \\times 6^\\circ = 210^\\circ$. The swept area is $\\frac{210}{360} \\pi r^2$."
        }
      ],
      examinerTraps: [
        {
          trap: "Using $\\theta = t$ degrees instead of $6t$ degrees.",
          correction: "Minutes are NOT degrees! 1 minute = $6^\\circ$. For 5 minutes, $\\theta = 30^\\circ$, not $5^\\circ$."
        }
      ]
    },
    {
      id: "real_world_shaded",
      label: "4. Shaded Region Real-World Problems",
      heading: "Wipers, Grazing Horses, Brooches, and Umbrellas",
      subheading: "Recognising Geometric Compositions in Word Problems",
      explanation: "Classic Board problems embed circles into real-world objects:  \n\n1. **Two Car Wipers Sweeping Without Overlap**:  \nEach wiper of blade length $r$ sweeps through angle $\\theta$ (usually $115^\\circ$).  \n$$\\mathbf{\\text{Total Cleaned Area} = 2 \\times \\left( \\frac{\\theta}{360^\\circ} \\pi r^2 \\right)}$$  \n\n2. **Horse Tied to a Corner Peg in a Square Grass Field**:  \nThe corner of a square is a $90^\\circ$ right angle. The horse grazes inside a **Quadrant ($90^\\circ$ sector)** of radius equal to rope length $L$:  \n$$\\mathbf{\\text{Grazing Area} = \\frac{1}{4} \\pi L^2}$$  \nIf rope length is increased from $5\\text{ m}$ to $10\\text{ m}$, the increase in area is $\\frac{1}{4}\\pi (10^2 - 5^2) = \\frac{1}{4}\\pi(75)\\text{ m}^2$.  \n\n3. **Silver Wire Brooch with 5 Diameters**:  \n$$\\text{Total wire length} = \\text{Circumference} + 5 \\times \\text{Diameter} = \\mathbf{2\\pi r + 5(2r)}$$  \nAngle of each of the 10 sectors $= \\frac{360^\\circ}{10} = \\mathbf{36^\\circ}$.",
      formulasOrKeyPoints: [
        {
          title: "Pi Value Rule (Crucial Presentation Warning)",
          content: "Always check the question instructions:  \n$\\bullet$ If it says *'Use $\\pi = 3.14$'* $\\implies$ You **MUST use 3.14**! Using $22/7$ will result in a slightly different decimal and mark deduction.  \n$\\bullet$ If it does not specify $\\pi$ $\\implies$ Always use **$\\pi = \\frac{22}{7}$**.",
          note: "CBSE official marking schemes strictly follow the specified value of pi."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Write Units on Final Answer",
          action: "Areas are in $\\text{cm}^2$ or $\\text{m}^2$. Lengths/perimeters are in $\\text{cm}$ or $\\text{m}$.",
          proTip: "Missing units lose 0.5 marks in the final step."
        }
      ],
      examinerTraps: [
        {
          trap: "Using $\\pi = 22/7$ when the question explicitly states $\\pi = 3.14$.",
          correction: "Always follow the given instructions at the end of the problem prompt."
        }
      ]
    }
  ]
};
