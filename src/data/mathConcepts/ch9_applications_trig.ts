import type { MathChapterConcept } from "./types";

export const CH9_APPLICATIONS_TRIG_CONCEPT: MathChapterConcept = {
  chapterNo: 9,
  title: "Some Applications of Trigonometry",
  weightage: "4-5 Marks (Guaranteed Case Study)",
  oneLiner: "The Alternate Angle Z-rule turns Depression into Elevation; Two right triangles solve every height and distance problem.",
  analogyTitle: "The Lighthouse Keeper & The Ship Lookout",
  analogyContent: "Imagine standing on a seashore looking up at a lighthouse beacon. Your line of sight angles upwards from the flat ground: that is the **Angle of Elevation**. Now imagine the lighthouse keeper standing on the high gallery looking down at a sailing boat on the water. Their line of sight angles downwards from the horizontal level of their eyes: that is the **Angle of Depression**. Notice that by the Z-rule (alternate interior angles between two parallel horizontal lines), the keeper's angle of depression EQUALS the sailor's angle of elevation!",
  sections: [
    {
      id: "angles_elevation_depression",
      label: "1. Elevation vs Depression & The Z-Rule",
      heading: "Line of Sight, Horizontal Line, and Alternate Angles",
      subheading: "Why Depression Always Converts Directly into Elevation",
      explanation: "To measure high structures without climbing them, we use three geometric concepts:  \n\n1. **Line of Sight**: The straight line drawn from the eye of an observer to the point being viewed on the object.  \n2. **Angle of Elevation**: The angle formed by the line of sight with the horizontal ground line when the point being viewed is **ABOVE the horizontal level** (looking UP!).  \n3. **Angle of Depression**: The angle formed by the line of sight with the horizontal line when the point being viewed is **BELOW the horizontal level** (looking DOWN!).  \n\n**The Golden Alternate Angles Secret (Z-Rule):**  \nIn any diagram with an angle of depression $\\theta$:  \n$$\\mathbf{\\text{Angle of Depression from top} = \\text{Angle of Elevation from bottom} = \\theta}$$  \nBecause the observer's horizontal eye-line and the flat ground are two parallel lines, the line of sight acts as a transversal! This means you can immediately transfer the angle inside the triangle on the ground!",
      formulasOrKeyPoints: [
        {
          title: "The 3 Primary Trig Ratios Used in Chapter 9",
          content: "$$\\mathbf{\\tan\\theta = \\frac{\\text{Opposite (Height)}}{\\text{Adjacent (Distance)}}} \\qquad (\\text{Used in 90\\% of problems!})$$  \n$$\\sin\\theta = \\frac{\\text{Opposite (Height)}}{\\text{Hypotenuse (Kite String / Ladder / Slope)}}$$  \n$$\\cos\\theta = \\frac{\\text{Adjacent (Ground Distance)}}{\\text{Hypotenuse (Ladder Length)}}$$",
          note: "Whenever ladder, kite string, or sliding ramp is involved $\\implies$ use Sine or Cosine. Whenever height and ground distance are involved $\\implies$ use Tangent."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Always Draw the Horizontal Line of Sight First for Depression",
          action: "Draw a dotted horizontal line extending from the top of the tower. Label the angle between that dotted horizontal and the line of sight as $\\theta$.",
          proTip: "CBSE marking schemes deduct 1 mark if the horizontal line of depression is missing from the diagram!"
        },
        {
          stepNo: 2,
          title: "Transfer the Angle to the Ground",
          action: "Use alternate interior angles: $\\angle ACB = \\theta$.",
          proTip: "Now you have a standard right-angled triangle ready for $\\tan\\theta$!"
        }
      ],
      examinerTraps: [
        {
          trap: "Marking the angle of depression between the VERTICAL tower and the line of sight.",
          correction: "Angle of depression is measured from the HORIZONTAL line of sight, NEVER from the vertical tower! Marking the angle next to the vertical tower makes it $(90^\\circ - \\theta)$, ruining the entire solution."
        }
      ]
    },
    {
      id: "speed_shortcuts",
      label: "2. The 30°-45°-60° Speed Calculation Shortcuts",
      heading: "Instant Ratios: 1:1 at 45°, $\\sqrt{3}$ at 60°, $1/\\sqrt{3}$ at 30°",
      subheading: "Verify Heights in 5 Seconds Before Writing Full Solutions",
      explanation: "Since almost all CBSE problems use $30^\\circ, 45^\\circ,$ or $60^\\circ$, memorising their geometric ratios lets you instantly anticipate the answer:  \n\n1. **The $45^\\circ$ Rule (The 1 : 1 Isosceles Triangle):**  \n$$\\tan 45^\\circ = 1 \\implies \\mathbf{\\text{Height} = \\text{Base}}$$  \nIf the angle of elevation is $45^\\circ$, the height of the tower is EXACTLY equal to your distance from its base!  \n\n2. **The $30^\\circ$ Rule (The Flatter Triangle):**  \n$$\\tan 30^\\circ = \\frac{1}{\\sqrt{3}} \\implies \\mathbf{\\text{Height} = \\frac{\\text{Base}}{\\sqrt{3}}} \\quad \\iff \\quad \\mathbf{\\text{Base} = \\text{Height} \\times \\sqrt{3}}$$  \n\n3. **The $60^\\circ$ Rule (The Steeper Triangle):**  \n$$\\tan 60^\\circ = \\sqrt{3} \\implies \\mathbf{\\text{Height} = \\text{Base} \\times \\sqrt{3}} \\quad \\iff \\quad \\mathbf{\\text{Base} = \\frac{\\text{Height}}{\\sqrt{3}}}$$",
      formulasOrKeyPoints: [
        {
          title: "Numerical Values for Final Evaluation",
          content: "$$\\sqrt{3} \\approx 1.732 \\qquad \\sqrt{2} \\approx 1.414$$  \nSubstitute these values ONLY if the question explicitly states: *'Take $\\sqrt{3} = 1.732$'*. If not specified, leave your final answer in exact surd form (e.g. $20(\\sqrt{3} - 1)\\text{ m}$).",
          note: "Always rationalize surd denominators before substituting $\\sqrt{3}$!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Double-Angle Ratio Check",
          action: "In two-triangle setups with $30^\\circ$ and $60^\\circ$: as you walk closer from $30^\\circ$ to $60^\\circ$, the distance to the tower reduces to $\\frac{1}{3}$ of the total base!",
          proTip: "The distance walked between $30^\\circ$ and $60^\\circ$ is always TWICE the remaining distance to the tower!"
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing $\\sqrt{3}$ with $\\frac{1}{\\sqrt{3}}$: writing $\\tan 60^\\circ = \\frac{1}{\\sqrt{3}}$.",
          correction: "Remember: $60^\\circ$ is STEEPER, so it gets the larger number $\\sqrt{3} \\approx 1.732$. $30^\\circ$ is flatter, so it gets the smaller fraction $\\frac{1}{\\sqrt{3}} \\approx 0.577$."
        }
      ]
    },
    {
      id: "two_triangles_blueprints",
      label: "3. Two-Triangle Master Blueprints (CBSE Section D)",
      heading: "The 4 Universal Setups for 4-Mark & 5-Mark Questions",
      subheading: "Two Observers, Statues on Pedestals, Complementary Angles, and Cloud Reflections",
      explanation: "Every single complex Heights & Distances board problem boils down to **TWO right-angled triangles sharing a common side**:  \n\n1. **Setup 1: Approaching Observer (Same Side)**  \nA tower $h$ viewed from two points $C$ and $D$ with angles $\\alpha$ and $\\beta$ (where $\\beta > \\alpha$):  \n$$\\text{In } \\triangle ABC: \\; \\tan\\beta = \\frac{h}{x} \\implies x = \\frac{h}{\\tan\\beta}$$  \n$$\\text{In } \\triangle ABD: \\; \\tan\\alpha = \\frac{h}{x + d} \\implies x + d = \\frac{h}{\\tan\\alpha}$$  \n$$\\mathbf{d = h \\left( \\frac{1}{\\tan\\alpha} - \\frac{1}{\\tan\\beta} \\right) = h(\\cot\\alpha - \\cot\\beta)}$$  \n\n2. **Setup 2: Statue of Height $s$ on a Pedestal of Height $h$**  \nFrom a point on the ground, angle to top of pedestal is $\\alpha$ and to top of statue is $\\beta$:  \n$$\\frac{h}{x} = \\tan\\alpha \\implies x = \\frac{h}{\\tan\\alpha} \\qquad \\frac{h + s}{x} = \\tan\\beta \\implies \\mathbf{h = \\frac{s \\tan\\alpha}{\\tan\\beta - \\tan\\alpha}}$$  \n\n3. **Setup 3: Complementary Angles Proof (The $h = \\sqrt{ab}$ Theorem)**  \nAngles of elevation of the top of a tower from two points at distances $a$ and $b$ from the base are complementary:  \n$$\\tan\\theta = \\frac{h}{a} \\qquad \\tan(90^\\circ - \\theta) = \\cot\\theta = \\frac{h}{b}$$  \nMultiply both equations: $\\tan\\theta \\cdot \\cot\\theta = \\frac{h}{a} \\cdot \\frac{h}{b} \\implies 1 = \\frac{h^2}{ab} \\implies \\mathbf{h = \\sqrt{ab}}$!  \n\n4. **Setup 4: Cloud and its Reflection in a Lake (The Board Boss Question)**  \nHeight of cloud above water is $H$. Reflection is $H$ below water surface!  \nFrom height $h$ above water, angle to cloud is $\\alpha$, to reflection is $\\beta$:  \n$$\\mathbf{H = \\frac{h(\\tan\\beta + \\tan\\alpha)}{\\tan\\beta - \\tan\\alpha}}$$",
      formulasOrKeyPoints: [
        {
          title: "The Complementary Proof $h = \\sqrt{ab}$ (Guaranteed 3-Mark Question)",
          content: "**Equation 1 (From distance $a$):**\n$$\\tan\\theta = \\frac{h}{a}$$\n\n**Equation 2 (From distance $b$, angle $90^\\circ - \\theta$):**\n$$\\tan(90^\\circ - \\theta) = \\cot\\theta = \\frac{h}{b}$$\n\n**Multiply (1) and (2):**\n$$\\tan\\theta \\times \\cot\\theta = \\frac{h}{a} \\times \\frac{h}{b}$$\n$$1 = \\frac{h^2}{ab} \\implies \\mathbf{h^2 = ab} \\implies \\mathbf{h = \\sqrt{ab}} \\quad \\textbf{[Hence Proved!]}$$",
          note: "This elegant proof has appeared in CBSE 2017, 2019, 2023, and 2024!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify the Shared Variable",
          action: "Look at the two triangles: Do they share the vertical height $h$ or the horizontal ground distance $x$?",
          proTip: "Express the shared variable in terms of trig functions from both triangles, then equate them!"
        }
      ],
      examinerTraps: [
        {
          trap: "In the cloud problem, assuming the distance to the reflection is $(H - h)$ instead of $(H + h)$.",
          correction: "The reflection is $H$ meters BELOW the water surface. The observer is $h$ meters ABOVE the water surface. Therefore, the total vertical depth to the reflection is $\\mathbf{H + h}$!"
        }
      ]
    },
    {
      id: "observer_height_trap",
      label: "4. The Observer Height Trap",
      heading: "When the Observer Has Height $1.5\\text{ m}$",
      subheading: "Never Forget to Add Observer Height to the Final Answer",
      explanation: "Most problems treat the observer as a mathematical point on the ground. BUT watch out when the problem states:  \n*‘A $1.5\\text{ m}$ tall boy is standing at some distance from a $30\\text{ m}$ tall building…’*  \n\n**The 2-Stage Height Calculation:**  \n1. The triangle sits **ABOVE the boy's eye level**!  \n   $$\\text{Vertical leg of the triangle } h = 30 - 1.5 = \\mathbf{28.5\\text{ m}}$$  \n2. Solve the triangle for distance or other lengths using $h = 28.5\\text{ m}$.  \n3. If the problem asks for total height from ground, remember:  \n   $$\\mathbf{\\text{Total Height} = \\text{Triangle Height } h + \\text{Observer Height } (1.5\\text{ m})}$$",
      formulasOrKeyPoints: [
        {
          title: "Observer Height Rule",
          content: "$$\\mathbf{\\text{Total Height} = h_{\\text{triangle}} + h_{\\text{observer}}}$$",
          note: "Always circle the observer's height in the question prompt with your pencil so you don't forget it in the final step!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Draw a Rectangle for the Observer at the Foot of the Diagram",
          action: "Draw a vertical segment of length $1.5\\text{ m}$ on the left, and extend a horizontal line to the building.",
          proTip: "This visually reminds you that the triangle starts at eye level."
        }
      ],
      examinerTraps: [
        {
          trap: "Using $30\\text{ m}$ directly in $\\tan\\theta = \\frac{30}{x}$ when the observer is $1.5\\text{ m}$ tall.",
          correction: "The triangle height is $30 - 1.5 = 28.5\\text{ m}$. Using 30 directly loses 2 marks immediately."
        }
      ]
    }
  ]
};
