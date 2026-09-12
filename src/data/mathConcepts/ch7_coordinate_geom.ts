import type { MathChapterConcept } from "./types";

export const CH7_COORDINATE_GEOM_CONCEPT: MathChapterConcept = {
  chapterNo: 7,
  title: "Coordinate Geometry",
  weightage: "6 Marks (Board Mandatory)",
  oneLiner: "Grid addresses turn geometry into algebra; Distance is Pythagoras in disguise; Section formula is a weighted seesaw balance.",
  analogyTitle: "René Descartes and the Fly on the Tiled Ceiling",
  analogyContent: "French mathematician René Descartes was sick in bed, staring up at a fly buzzing on his tiled ceiling. He realised that he could pinpoint the exact position of the fly at any moment simply by stating its distance from two perpendicular walls: $(x, y)$! This brilliant breakthrough married algebra with geometry, allowing shapes, circles, and lines to be manipulated using algebraic numbers and formulas.",
  sections: [
    {
      id: "grid_basics",
      label: "1. The Coordinate Grid & Axis Addresses",
      heading: "Abscissa, Ordinate, and Points on Axes",
      subheading: "Never Confuse Points on the X-Axis with Points on the Y-Axis",
      explanation: "Every point on the two-dimensional Cartesian plane has an address **$(x, y)$**:  \n$\\bullet$ **$x$-coordinate (Abscissa)**: The perpendicular distance from the **Y-axis**!  \n$\\bullet$ **$y$-coordinate (Ordinate)**: The perpendicular distance from the **X-axis**!  \n$\\bullet$ **Origin $O$**: The crossroad point $(0, 0)$.  \n\n**The Golden Axis Rules:**  \n$$\\mathbf{\\text{Any point lying on the X-axis has } y = 0 \\implies (x, 0)}$$  \n$$\\mathbf{\\text{Any point lying on the Y-axis has } x = 0 \\implies (0, y)}$$  \n*(This fact is used to set up equations in 70% of board coordinate problems!)*",
      formulasOrKeyPoints: [
        {
          title: "Sign Rules by Quadrant",
          content: "$$\\begin{array}{|c|c|c|} \\hline \\textbf{Quadrant} & \\textbf{Signs } (x, y) & \\textbf{Location} \\\\ \\hline \\text{I} & (+, +) & \\text{Top Right} \\\\ \\hline \\text{II} & (-, +) & \\text{Top Left} \\\\ \\hline \\text{III} & (-, -) & \\text{Bottom Left} \\\\ \\hline \\text{IV} & (+, -) & \\text{Bottom Right} \\\\ \\hline \\end{array}$$",
          note: "Distance from Y-axis is |x|; Distance from X-axis is |y|. Distance is always positive!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Assume Axis Points Correctly",
          action: "If the question states: 'Find a point on the X-axis which is equidistant...', immediately let the point be $P(x, 0)$.",
          proTip: "If on the Y-axis, let the point be $P(0, y)$. Never use $(x, y)$ with two unknowns when one is on an axis!"
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing abscissa with ordinate: thinking distance from X-axis is $x$.",
          correction: "Distance from X-axis is the vertical coordinate $y$ (Ordinate)! Distance from Y-axis is the horizontal coordinate $x$ (Abscissa)."
        }
      ]
    },
    {
      id: "distance_formula",
      label: "2. The Distance Formula (Pythagoras on a Grid)",
      heading: "$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$",
      subheading: "Derivation from Right Triangles + Distance from Origin",
      explanation: "How do we find the distance between $A(x_1, y_1)$ and $B(x_2, y_2)$?  \nDraw a horizontal line through $A$ and a vertical line through $B$. They meet at $C(x_2, y_1)$, forming a right-angled triangle $\\triangle ABC$:  \n$$\\text{Base } AC = |x_2 - x_1| \\qquad \\text{Height } BC = |y_2 - y_1|$$  \nBy Pythagoras Theorem:  \n$$AB^2 = AC^2 + BC^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$$  \nTaking the square root gives the universal **Distance Formula**:  \n$$\\mathbf{d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}}$$  \n\n**Distance from the Origin $O(0, 0)$:**  \n$$\\mathbf{OP = \\sqrt{x^2 + y^2}}$$",
      formulasOrKeyPoints: [
        {
          title: "Equidistant Points Trick: Square Both Sides Immediately!",
          content: "If $P$ is equidistant from $A$ and $B$, then $PA = PB$.  \n$$\\mathbf{PA^2 = PB^2}$$  \n$$(x - x_1)^2 + (y - y_1)^2 = (x - x_2)^2 + (y - y_2)^2$$",
          note: "Squaring both sides immediately eliminates all square root signs, saving 3 minutes of messy algebra!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Order of Subtraction Does NOT Matter",
          action: "$(x_2 - x_1)^2$ is strictly identical to $(x_1 - x_2)^2$ because squaring wipes out negative signs: $(-3)^2 = (+3)^2 = 9$.",
          proTip: "Pick whichever order makes subtractions positive."
        },
        {
          stepNo: 2,
          title: "Equidistant Point on X-Axis Worked Template",
          action: "Find point $P(x, 0)$ equidistant from $A(2, -5)$ and $B(-2, 9)$:  \n1. $PA^2 = PB^2 \\implies (x - 2)^2 + (0 - (-5))^2 = (x - (-2))^2 + (0 - 9)^2$.  \n2. $(x - 2)^2 + 25 = (x + 2)^2 + 81$.  \n3. $x^2 - 4x + 4 + 25 = x^2 + 4x + 4 + 81$.  \n4. Cancel $x^2 + 4$ on both sides: $-4x + 25 = 4x + 81 \\implies -8x = 56 \\implies \\mathbf{x = -7}$.  \n5. Point is $\\mathbf{P(-7, 0)}$!",
          proTip: "Notice how $x^2$ cancels out cleanly every single time!"
        }
      ],
      examinerTraps: [
        {
          trap: "Sign error when subtracting negative coordinates: e.g. $0 - (-5) = -5$.",
          correction: "Double negative makes a positive! $0 - (-5) = 0 + 5 = +5$. Then $5^2 = 25$."
        }
      ]
    },
    {
      id: "section_formula",
      label: "3. The Section Formula (The Seesaw Balance)",
      heading: "Dividing a Line Segment in Ratio $m_1 : m_2$",
      subheading: "Internal Division Coordinates + The High-Speed $k : 1$ Method",
      explanation: "Suppose point $P(x, y)$ sits on the segment connecting $A(x_1, y_1)$ and $B(x_2, y_2)$, dividing the distance in the ratio $m_1 : m_2$ (that is, $\\dfrac{AP}{PB} = \\dfrac{m_1}{m_2}$).\n\n**The Seesaw Weighted Average Principle:**\nPoint $P$ is pulled towards both ends! The mass $m_1$ on the left multiplies the coordinate of the OPPOSITE point $B$ on the right, and vice versa (Criss-Cross Multiplication):\n$$P(x, y) \\;=\\; \\left( \\dfrac{m_1 x_2 + m_2 x_1}{m_1 + m_2}, \\; \\dfrac{m_1 y_2 + m_2 y_1}{m_1 + m_2} \\right)$$\n\n**The $k : 1$ Shortcut for Finding Unknown Ratios:**\nWhenever a problem asks: *'In what ratio does the X-axis / Y-axis divide the segment AB?'*, NEVER use two variables $m_1 : m_2$!\nAlways assume the ratio is **$k : 1$**:\n$$P(x, y) \\;=\\; \\left( \\dfrac{k x_2 + x_1}{k + 1}, \\; \\dfrac{k y_2 + y_1}{k + 1} \\right)$$\n• If divided by the **X-axis**: set the $y$-coordinate to **0** and solve for $k$!\n• If divided by the **Y-axis**: set the $x$-coordinate to **0** and solve for $k$!",
      formulasOrKeyPoints: [
        {
          title: "Axis Division Summary Formulas",
          content: "$$\\text{Ratio in which X-axis divides } AB \\;=\\; -\\dfrac{y_1}{y_2} \\qquad (\\text{since } y = 0)$$\n$$\\text{Ratio in which Y-axis divides } AB \\;=\\; -\\dfrac{x_1}{x_2} \\qquad (\\text{since } x = 0)$$",
          note: "Use this 1-second ratio formula to check your answer in MCQs!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Draw a Quick Horizontal Schematic Line",
          action: "Draw: $A(x_1, y_1)$ on left, $B(x_2, y_2)$ on right, and $P$ in between with $k$ and $1$ written above the segments.",
          proTip: "Draw cross-arrows: $k$ connects to $(x_2, y_2)$ and $1$ connects to $(x_1, y_1)$."
        },
        {
          stepNo: 2,
          title: "Interpret Fractional and Negative Ratios",
          action: "If $k = 2/3$, the ratio is $2:3$. If $k$ comes out negative, the division is external.",
          proTip: "In Class 10 CBSE, all divisions are strictly internal ($k > 0$)."
        }
      ],
      examinerTraps: [
        {
          trap: "Multiplying $m_1$ by $x_1$ instead of $x_2$: writing $\\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2}$.",
          correction: "It is a CRISS-CROSS formula! $m_1$ multiplies the FAR coordinate $x_2$, and $m_2$ multiplies $x_1$."
        }
      ]
    },
    {
      id: "midpoint_trisection",
      label: "4. Midpoint Formula & Points of Trisection",
      heading: "The Equal Split ($1:1$) & Slicing into Three Equal Parts",
      subheading: "Midpoints of Diagonals (Parallelogram 4th Vertex Weapon)",
      explanation: "When $P$ is the exact midpoint of $AB$, the ratio is $1:1$ ($m_1 = m_2 = 1$). The section formula collapses into the simple arithmetic mean:\n$$M(x, y) \\;=\\; \\left( \\dfrac{x_1 + x_2}{2}, \\; \\dfrac{y_1 + y_2}{2} \\right)$$\n\n**Points of Trisection (Dividing into 3 Equal Pieces):**\nLine segment $AB$ is divided into 3 equal parts by two points $P$ and $Q$:\n• $P$ divides $AB$ in the ratio **$1 : 2$**\n• $Q$ divides $AB$ in the ratio **$2 : 1$** (or $Q$ is simply the **midpoint of $PB$**!)\n\n**The Parallelogram 4th Vertex Weapon:**\nIn any parallelogram (or rhombus, rectangle, square), **the diagonals bisect each other**!\n$$\\text{Midpoint of diagonal } AC \\;=\\; \\text{Midpoint of diagonal } BD$$\nEquating their $x$ and $y$ coordinates finds the 4th unknown vertex $D(x, y)$ in under 3 lines!",
      formulasOrKeyPoints: [
        {
          title: "Centroid of a Triangle Formula",
          content: "The centroid $G$ is the concurrency point of the three medians of $\\triangle ABC$. It divides each median in the ratio $2:1$:\n$$G(x, y) \\;=\\; \\left( \\dfrac{x_1 + x_2 + x_3}{3}, \\; \\dfrac{y_1 + y_2 + y_3}{3} \\right)$$ ",
          note: "Centroid is simply the average of the three vertices!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Solve Parallelogram 4th Vertex in 3 Lines",
          action: "1. Write: 'Since diagonals of a parallelogram bisect each other, Midpoint of $AC$ = Midpoint of $BD$'.\n2. Set $\\dfrac{x_A + x_C}{2} = \\dfrac{x_B + x_D}{2} \\implies x_A + x_C = x_B + x_D \\implies x_D = x_A + x_C - x_B$.\n3. Repeat for $y$: $y_D = y_A + y_C - y_B$.",
          proTip: "This 4th vertex formula avoids solving complex distance equations."
        }
      ],
      examinerTraps: [
        {
          trap: "Using distance formula to find the 4th vertex of a parallelogram (creates messy simultaneous quadratic equations).",
          correction: "Always use the Midpoint Property of diagonals! It gives linear equations that solve in 10 seconds."
        }
      ]
    },
    {
      id: "geometric_classifications",
      label: "5. Geometric Proofs on the Grid",
      heading: "Proving Squares vs Rhombuses vs Rectangles",
      subheading: "Collinearity Test + The 4-Sided Shape Decision Tree",
      explanation: "When asked to prove that 4 given points form a specific quadrilateral:  \n\n1. **Square vs Rhombus:**  \n   $\\bullet$ Calculate all 4 sides ($AB, BC, CD, DA$). If all 4 sides are equal, it could be a Square OR a Rhombus!  \n   $\\bullet$ Calculate both diagonals ($AC, BD$):  \n     - If **Diagonals are EQUAL ($AC = BD$)** $\\implies$ **SQUARE**!  \n     - If **Diagonals are UNEQUAL ($AC \\neq BD$)** $\\implies$ **RHOMBUS**!  \n\n2. **Rectangle vs Parallelogram:**  \n   $\\bullet$ Calculate all 4 sides. If opposite sides are equal ($AB = CD$ and $BC = AD$):  \n   $\\bullet$ Calculate both diagonals:  \n     - If **Diagonals are EQUAL ($AC = BD$)** $\\implies$ **RECTANGLE**!  \n     - If **Diagonals are UNEQUAL ($AC \\neq BD$)** $\\implies$ **PARALLELOGRAM**!  \n\n3. **Collinearity of 3 Points $A, B, C$:**  \n   Calculate distances $AB, BC, AC$. If the sum of the two smaller distances equals the largest distance:  \n   $$\\mathbf{AB + BC = AC \\implies A, B, C \\text{ are collinear!}}$$",
      formulasOrKeyPoints: [
        {
          title: "The Quadrilateral Master Decision Matrix",
          content: "$$\\begin{array}{|c|c|c|} \\hline \\textbf{Figure} & \\textbf{Side Condition} & \\textbf{Diagonal Condition} \\\\ \\hline \\text{Parallelogram} & \\text{Opposite sides equal} & \\text{Diagonals UNEQUAL} \\\\ \\hline \\text{Rectangle} & \\text{Opposite sides equal} & \\mathbf{\\text{Diagonals EQUAL}} \\\\ \\hline \\text{Rhombus} & \\text{All 4 sides equal} & \\text{Diagonals UNEQUAL} \\\\ \\hline \\text{Square} & \\text{All 4 sides equal} & \\mathbf{\\text{Diagonals EQUAL}} \\\\ \\hline \\end{array}$$",
          note: "Always calculate the diagonals! Never conclude 'Square' or 'Rectangle' without checking diagonals."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Compute All 6 Distances Systematically",
          action: "Label points $A, B, C, D$. Compute 4 side lengths: $AB, BC, CD, DA$, and 2 diagonal lengths: $AC, BD$.",
          proTip: "Write the concluding sentence explicitly: 'Since all 4 sides are equal and diagonals are equal, $ABCD$ is a square.'"
        }
      ],
      examinerTraps: [
        {
          trap: "Proving all 4 sides are equal and concluding 'Hence it is a square' without checking diagonals.",
          correction: "All 4 sides equal proves it is a RHOMBUS! To prove it is a SQUARE, you MUST prove that the two diagonals are also equal."
        }
      ]
    }
  ]
};
