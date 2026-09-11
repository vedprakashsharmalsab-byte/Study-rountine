import type { MathChapterConcept } from "./types";

export const CH12_SURFACE_AREAS_CONCEPT: MathChapterConcept = {
  chapterNo: 12,
  title: "Surface Areas and Volumes",
  weightage: "6 Marks (Board Mandatory)",
  oneLiner: "Melting conserves volume; Joining solids exposes curved surfaces only; Water flow volume is cross-section times speed times time.",
  analogyTitle: "The Play-Doh Principle: Conservation of Volume",
  analogyContent: "Imagine rolling a lump of Play-Doh into a tall cylinder. Now squish it into a round sphere, or flatten it into a pancake cuboid. Does the amount of clay change? **NO! The Volume remains strictly CONSTANT!**  \nHowever, the amount of paint needed to cover the outside (Surface Area) changes drastically! When you join two shapes together, the glued touching faces are trapped inside, so they disappear from the surface area entirely.",
  sections: [
    {
      id: "solids_catalog",
      label: "1. Master 3D Solids Formula Catalog",
      heading: "Cubes, Cylinders, Cones, Spheres, and Hemispheres",
      subheading: "Curved Surface Area (CSA), Total Surface Area (TSA), and Volume",
      explanation: "Here is your complete formula arsenal for all 6 standard Class 10 three-dimensional solids:  \n\n1. **Cube (Side $a$)**:  \n$$\\text{Volume} = \\mathbf{a^3} \\qquad \\text{LSA} = \\mathbf{4a^2} \\qquad \\text{TSA} = \\mathbf{6a^2} \\qquad \\text{Diagonal} = \\mathbf{a\\sqrt{3}}$$  \n\n2. **Cuboid (Length $l$, Breadth $b$, Height $h$)**:  \n$$\\text{Volume} = \\mathbf{lbh} \\qquad \\text{LSA (Area of 4 walls)} = \\mathbf{2h(l + b)} \\qquad \\text{TSA} = \\mathbf{2(lb + bh + hl)}$$  \n$$\\text{Longest Rod in a Room (Diagonal)} = \\mathbf{\\sqrt{l^2 + b^2 + h^2}}$$  \n\n3. **Right Circular Cylinder (Radius $r$, Height $h$)**:  \n$$\\text{Volume} = \\mathbf{\\pi r^2 h} \\qquad \\text{CSA} = \\mathbf{2\\pi rh} \\qquad \\text{TSA} = 2\\pi rh + 2\\pi r^2 = \\mathbf{2\\pi r(r + h)}$$  \n\n4. **Right Circular Cone (Radius $r$, Vertical Height $h$, Slant Height $l$)**:  \n$$\\mathbf{l = \\sqrt{r^2 + h^2}} \\qquad \\text{Volume} = \\mathbf{\\frac{1}{3}\\pi r^2 h} \\qquad \\text{CSA} = \\mathbf{\\pi rl} \\qquad \\text{TSA} = \\mathbf{\\pi r(r + l)}$$  \n\n5. **Sphere (Radius $r$)**:  \n$$\\text{Volume} = \\mathbf{\\frac{4}{3}\\pi r^3} \\qquad \\text{Surface Area} = \\mathbf{4\\pi r^2}$$  \n\n6. **Hemisphere (Radius $r$)**:  \n$$\\text{Volume} = \\mathbf{\\frac{2}{3}\\pi r^3} \\qquad \\text{CSA} = \\mathbf{2\\pi r^2} \\qquad \\mathbf{\\text{TSA} = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2}$$",
      formulasOrKeyPoints: [
        {
          title: "The Slant Height Pythagoras Relation",
          content: "$$\\mathbf{l = \\sqrt{r^2 + h^2}} \\iff h = \\sqrt{l^2 - r^2} \\iff r = \\sqrt{l^2 - h^2}$$  \nCommon Cone Triples $(r, h, l)$: $(3, 4, 5)$, $(5, 12, 13)$, $(7, 24, 25)$.",
          note: "Always verify whether the problem gives vertical height h or slant height l! Using h in πrl loses all marks."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Check Radius vs Diameter First",
          action: "Problems often state: 'A cylinder of diameter $14\\text{ cm}$'. Immediately write $r = 7\\text{ cm}$ at the top of your workspace.",
          proTip: "Forgetting to divide diameter by 2 is the most common student trap."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing TSA of hemisphere as $2\\pi r^2$ instead of $3\\pi r^2$.",
          correction: "$2\\pi r^2$ is only the CURVED surface area! A solid hemisphere has a flat circular top face ($+\\pi r^2$). Its Total Surface Area is $2\\pi r^2 + \\pi r^2 = \\mathbf{3\\pi r^2}$."
        }
      ]
    },
    {
      id: "combined_solids_rule",
      label: "2. The Combination of Solids Iron Rule",
      heading: "TSA of Combined Solid = Sum of EXPOSED Surfaces Only",
      subheading: "Why You Should NEVER Add the Total Surface Areas of Individual Solids",
      explanation: "The single biggest misconception in Chapter 12:  \nWhen a toy is formed by mounting a cone on top of a hemisphere, students blindly calculate:  \n$$\\text{TSA of Toy} = \\text{TSA of Cone} + \\text{TSA of Hemisphere} \\quad \\mathbf{[100\\% \\text{ WRONG!}]}$$  \n\n**Why is this wrong?**  \nBecause the circular base of the cone and the flat top of the hemisphere are **glued together**! They are hidden INSIDE the toy. You cannot touch them, and you cannot paint them!  \n\n**The Golden Combined Surface Area Rule:**  \n$$\\mathbf{\\text{TSA of Combined Solid} = \\sum (\\text{Curved Surface Areas of EXPOSED Faces Only})}$$  \n\n$\\bullet$ **Cone on Hemisphere (Spinning Top / Toy)**:  \n$$\\mathbf{\\text{TSA} = \\text{CSA of Cone} + \\text{CSA of Hemisphere} = \\pi rl + 2\\pi r^2 = \\pi r(l + 2r)}$$  \n\n$\\bullet$ **Cylinder with Two Hemispherical Ends (Medicine Capsule)**:  \n$$\\mathbf{\\text{TSA} = \\text{CSA of Cylinder} + 2 \\times (\\text{CSA of Hemisphere}) = 2\\pi rh + 2(2\\pi r^2) = 2\\pi r(h + 2r)}$$  \n\n$\\bullet$ **Volume of Combined Solid (Always Add Directly!)**:  \nUnlike surface area, volume is simple: volumes ALWAYS add up directly without any subtractions!  \n$$\\mathbf{\\text{Total Volume} = \\text{Volume of Solid 1} + \\text{Volume of Solid 2}}$$",
      formulasOrKeyPoints: [
        {
          title: "Medicine Capsule Dimensions Trap",
          content: "If total length of capsule is $14\\text{ mm}$ and diameter is $5\\text{ mm}$ ($r = 2.5\\text{ mm}$):  \n$$\\text{Height of cylindrical part } h = 14 - 2(r) = 14 - 2(2.5) = 14 - 5 = \\mathbf{9\\text{ mm}!}$$",
          note: "You must subtract TWO radii (one from each hemispherical end) to find the central cylinder height!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Factorise Common $\\pi r$ Terms Before Calculating",
          action: "Write $\\text{TSA} = \\pi r(l + 2r)$. Plug in numbers and simplify inside brackets BEFORE multiplying by $\\pi = 22/7$.",
          proTip: "This reduces 5 complex multiplications down to 1 simple multiplication."
        }
      ],
      examinerTraps: [
        {
          trap: "Subtracting only ONE radius from total length when finding cylinder height of a capsule.",
          correction: "There are TWO hemispherical caps (left and right). You must subtract $2r = \\text{diameter}$ from the total length!"
        }
      ]
    },
    {
      id: "scooping_out_problems",
      label: "3. Scooping Out (Depression) Problems",
      heading: "Why Scooping Out INCREASES Surface Area",
      subheading: "Wooden Block with Hemispherical or Conical Cavities",
      explanation: "Consider a solid wooden cylinder. A hemisphere is scooped out from each end to make a decorative pen stand.  \nWhat happens to the total surface area?  \nMany students think scooping out wood reduces surface area. **It does the opposite!**  \n\nScooping creates a new curved hollow interior surface that can now be painted!  \n$$\\mathbf{\\text{TSA after scooping} = \\text{Original CSA of Cylinder} + 2 \\times (\\text{Inner CSA of Hemisphere})}$$  \n$$\\mathbf{= 2\\pi rh + 2(2\\pi r^2) = 2\\pi r(h + 2r)}$$  \n\n**For Volume After Scooping:**  \n$$\\mathbf{\\text{Remaining Volume} = \\text{Original Volume} - \\text{Volume of Scooped Material}}$$",
      formulasOrKeyPoints: [
        {
          title: "The Scooping Principle Summary",
          content: "$$\\mathbf{\\text{Surface Area INCREASES (New hollow walls exposed)}}$$  \n$$\\mathbf{\\text{Volume DECREASES (Wood has been carved away)}}$$",
          note: "Remember: Surface Area = Area that can be painted! More hollows = more paintable area."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Visualise What Faces Can Be Painted",
          action: "Ask: Can I touch the outer cylinder wall? Yes ($2\\pi rh$). Can I touch the new curved bowl inside? Yes ($2\\pi r^2$). Add them together!",
          proTip: "Do not include the removed flat circular face, because it was carved away."
        }
      ],
      examinerTraps: [
        {
          trap: "Subtracting the scooped curved surface area from total surface area.",
          correction: "Surface area is additive! Carving a hollow cavity adds new internal walls, increasing the total surface area."
        }
      ]
    },
    {
      id: "melting_recasting",
      label: "4. Conversion of Solids (Melting & Recasting)",
      heading: "Finding Number of Spheres, Cones, or Coins",
      subheading: "Volume of Original = Total Volume of New Recast Objects",
      explanation: "When a metal solid (e.g. lead sphere) is melted down and recast into smaller objects (e.g. cylindrical coins or small cones):  \n$$\\mathbf{\\text{Volume of Big Solid} = n \\times \\text{Volume of One Small Solid}}$$  \n$$\\mathbf{n = \\frac{\\text{Volume of Original Big Solid}}{\\text{Volume of One Small Recast Solid}}}$$  \n\n**The $\\pi$ Cancellation Superpower:**  \nBoth the big solid and the small solid almost always contain $\\pi$ in their volume formulas!  \n**DO NOT substitute $\\pi = 22/7$ or calculate big decimal numbers!**  \nWrite the volumes as fractions and let $\\pi$ cancel out completely!",
      formulasOrKeyPoints: [
        {
          title: "Worked Cancellation Blueprint",
          content: "A metallic sphere of radius $4.2\\text{ cm}$ is melted and recast into a cylinder of radius $6\\text{ cm}$. Find height $h$ of cylinder.  \n$$\\text{Vol(Cylinder)} = \\text{Vol(Sphere)} \\implies \\pi r_c^2 h = \\frac{4}{3}\\pi r_s^3$$  \nCancel $\\pi$ on both sides immediately:  \n$$6^2 \\times h = \\frac{4}{3} \\times (4.2)^3 \\implies 36h = \\frac{4}{3} \\times 74.088 = 98.784 \\implies \\mathbf{h = 2.744\\text{ cm}}!$$",
          note: "Cancelling pi first saves 4 lines of calculations and prevents decimal rounding errors."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Equate Formulas Before Plugging In",
          action: "Write $\\pi r_1^2 h = \\frac{4}{3}\\pi r_2^3$. Cancel $\\pi$ on both sides before multiplying any numbers.",
          proTip: "Keep numbers in factored form (e.g. $4.2 \\times 4.2 \\times 4.2$) for easy division by 6 and 3."
        }
      ],
      examinerTraps: [
        {
          trap: "Multiplying out $\\frac{22}{7} \\times 4.2 \\times 4.2 \\dots$ into messy long decimals.",
          correction: "Leave $\\pi$ as a symbol until it cancels out with the other side."
        }
      ]
    },
    {
      id: "water_flow_rate",
      label: "5. Water Flow through Pipes (High-Yield Speed Problem)",
      heading: "Volume = Cross-Sectional Area × Speed × Time",
      subheading: "Unit Conversion Master Rules: m, cm, and Litres",
      explanation: "Water flows through a cylindrical pipe into a rectangular cistern or tank at a speed of $v\\text{ km/h}$. How long will it take to fill the tank?  \n\n**The Moving Water Cylinder Principle:**  \nIn time $t$, water travelling at speed $v$ forms a cylindrical column of:  \n$$\\text{Length (Height) of Water Column } H = \\text{Speed} \\times \\text{Time} = v \\cdot t$$  \n$$\\mathbf{\\text{Volume of Water Flowing in Time } t = \\pi r^2 \\times (v \\cdot t)}$$  \n\nEquate this volume to the required volume of the tank ($l \\times b \\times h$):  \n$$\\mathbf{\\pi r^2 (v \\cdot t) = l \\times b \\times h \\implies t = \\frac{l \\cdot b \\cdot h}{\\pi r^2 \\cdot v}}$$",
      formulasOrKeyPoints: [
        {
          title: "The Golden Unit Conversion Cheat Sheet",
          content: "**Volume & Metric Conversions:**\n$$1\\text{ m} = 100\\text{ cm} \\implies 1\\text{ m}^3 = 10^6\\text{ cm}^3 = \\mathbf{1,000,000\\text{ cm}^3}$$\n$$\\mathbf{1\\text{ m}^3 = 1000\\text{ litres}} \\qquad \\iff \\qquad \\mathbf{1\\text{ litre} = 1000\\text{ cm}^3}$$\n\n**Speed & Flow Rate Conversion:**\n$$1\\text{ km/h} = \\frac{1000\\text{ m}}{60\\text{ min}} = \\mathbf{\\frac{50}{3}\\text{ m/min}}$$",
          note: "Unit mismatch is responsible for 80% of lost marks in water flow problems! Convert ALL dimensions to METERS first."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Convert ALL Measurements into One Uniform Unit (Meters)",
          action: "If pipe diameter is $20\\text{ cm}$, write $r = 10\\text{ cm} = 0.1\\text{ m}$. If speed is $3\\text{ km/h}$, write $3000\\text{ m/h}$.",
          proTip: "Never calculate with mixed units (e.g. cm for pipe and meters for tank)."
        }
      ],
      examinerTraps: [
        {
          trap: "Using pipe diameter $20\\text{ cm}$ as radius.",
          correction: "Radius is half the diameter: $r = 10\\text{ cm} = 0.1\\text{ m}$."
        }
      ]
    }
  ]
};
