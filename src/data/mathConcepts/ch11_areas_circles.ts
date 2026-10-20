import type { MathChapterConcept } from "./types";

export const CH11_AREAS_CIRCLES_CONCEPT: MathChapterConcept = {
  chapterNo: 11,
  title: "Areas Related to Circles",
  weightage: "4–5 Marks (High-Yield CBSE Board Essential)",
  oneLiner: "Sector pizza ka slice hai (radii se kata hua), Segment pizza ka crust hai (chord se kata hua); Ghadi ki minute hand har minute 6° ghoomti hai!",
  analogyTitle: "Pizza Slicing, Bread Crust, aur Ghadi ki Sui",
  analogyContent: "Bhai, socho aapke paas ek bada gol pizza hai jiska center $O$ hai.  \nAgar aap center se do seedhe cuts boundary tak marte ho (do radii $OA$ aur $OB$ ke sath), toh jo triangular tukda hath mein aata hai, use kehte hain **Sector (Trishyakhand)**!  \nLekin agar aap pizza ke kinare ki moti bread-crust ko ek seedhe chord cut $AB$ se alag kar dete ho, toh jo crescent/dhanush jaisa tukda nikalta hai, use kehte hain **Segment (Vrittkhand)**!  \nSimple shabdon mein: **Segment = Poora Pizza Slice (Sector) − Beech ka Triangle**! Aur ghadi ki minute hand har minute 6° ghoom kar ek naya sector banati hai.",
  sections: [
    {
      id: "fractional_multiplier_hinglish",
      label: "1. Circle Basics & Fractional Multiplier (Zero to Hero)",
      heading: "Circle ke 360° ka Tukda: The $\\frac{\\theta}{360^\\circ}$ Principle",
      subheading: "Circumference $2\\pi r$ aur Area $\\pi r^2$ ko Fraction se Multiply Karna",
      explanation: "Ek poora circle center par total **$360^\\circ$** ka angle banata hai:  \n$\\bullet$ Poore circle ki boundary (Circumference) $= \\mathbf{2\\pi r}$  \n$\\bullet$ Poore circle ka area $= \\mathbf{\\pi r^2}$  \n\nJab hum circle ka ek chota hissa (angle $\\theta$) lete hain, toh woh poore circle ka ek **Fraction** ban jaata hai:  \n$$\\mathbf{\\text{Fraction of Circle} = \\frac{\\theta}{360^\\circ}}$$  \n\n### The 4 Super-Common Standard Fractions:  \n$\\bullet$ $\\theta = 60^\\circ \\implies \\frac{60^\\circ}{360^\\circ} = \\mathbf{\\frac{1}{6}}$ (Circle ka one-sixth hissa)  \n$\\bullet$ $\\theta = 90^\\circ \\implies \\frac{90^\\circ}{360^\\circ} = \\mathbf{\\frac{1}{4}}$ (**Quadrant / Chauthai**, Quarter circle)  \n$\\bullet$ $\\theta = 120^\\circ \\implies \\frac{120^\\circ}{360^\\circ} = \\mathbf{\\frac{1}{3}}$ (Circle ka one-third hissa)  \n$\\bullet$ $\\theta = 180^\\circ \\implies \\frac{180^\\circ}{360^\\circ} = \\mathbf{\\frac{1}{2}}$ (**Semicircle / Ardhvritt**, Half circle)  \n\n**Hinglish Golden Rule**:  \nKyunki angle $\\theta$ poore $360^\\circ$ ka hissa hai, isliye arc length nikalne ke liye circumference ko $\\frac{\\theta}{360^\\circ}$ se multiply karo, aur area nikalne ke liye $\\pi r^2$ ko $\\frac{\\theta}{360^\\circ}$ se multiply karo!",
      formulasOrKeyPoints: [
        {
          title: "Standard Proportions Quick Table",
          content: "$$\\begin{array}{|c|c|c|c|} \\hline \\textbf{Angle } \\theta & \\textbf{Fraction } \\frac{\\theta}{360^\\circ} & \\textbf{Arc Length } l & \\textbf{Sector Area } A \\\\\\\\ \\hline 60^\\circ & \\frac{1}{6} & \\frac{1}{6}(2\\pi r) = \\frac{\\pi r}{3} & \\frac{1}{6}\\pi r^2 \\\\\\\\ \\hline 90^\\circ & \\frac{1}{4} & \\frac{1}{4}(2\\pi r) = \\frac{\\pi r}{2} & \\frac{1}{4}\\pi r^2 \\\\\\\\ \\hline 120^\\circ & \\frac{1}{3} & \\frac{1}{3}(2\\pi r) = \\frac{2\\pi r}{3} & \\frac{1}{3}\\pi r^2 \\\\\\\\ \\hline 180^\\circ & \\frac{1}{2} & \\frac{1}{2}(2\\pi r) = \\pi r & \\frac{1}{2}\\pi r^2 \\\\\\\\ \\hline \\end{array}$$",
          note: "Agar question mein 'Quadrant' likha ho, toh bina bole angle theta = 90° maanna!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Angle ka Fraction Pehle Simplify Karo",
          action: "Calculate $\\frac{\\theta}{360^\\circ}$ first before multiplying $\\pi$ and $r$.",
          proTip: "Jaise $30^\\circ / 360^\\circ = 1/12$. Isse 22/7 ke saath lambi calculation se bach jaoge."
        }
      ],
      examinerTraps: [
        {
          trap: "Arc length ke formula mein $\\pi r^2$ use kar dena aur Area mein $2\\pi r$.",
          correction: "Length hamesha 1-dimensional hoti hai ($2\\pi r$), Area hamesha 2-dimensional ($r^2$) hota hai! Arc length $= \\frac{\\theta}{360^\\circ} 2\\pi r$, Area $= \\frac{\\theta}{360^\\circ} \\pi r^2$."
        }
      ]
    },
    {
      id: "sector_arc_hinglish",
      label: "2. Sector: Arc Length, Area & Perimeter (The +2r Trap)",
      heading: "Pizza Slice: Arc Length, Sector Area, aur Perimeter ka Farak",
      subheading: "Minor vs Major Sector + Triangle-like Shortcut $A = \\frac{1}{2} l r$",
      explanation: "Sector circle ka woh area hai jo do radii aur ek arc ke beech ghira hota hai:  \n\n1. **Arc Length of Sector ($l$)**:  \n$$\\mathbf{l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{\\theta}{180^\\circ} \\times \\pi r}$$  \n\n2. **Area of Minor Sector ($A$)**:  \n$$\\mathbf{A = \\frac{\\theta}{360^\\circ} \\times \\pi r^2}$$  \n\n3. **The Triangle-like Area Shortcut**:  \nNotice karo ki:  \n$$A = \\frac{\\theta}{360^\\circ} \\pi r^2 = \\frac{1}{2} \\left( \\frac{\\theta}{360^\\circ} 2\\pi r \\right) r = \\mathbf{\\frac{1}{2} l r}$$  \nYeh bilkul triangle ke area $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$ jaisa hai, jahan arc $l$ base hai aur radius $r$ height hai!  \n\n4. **Area of Major Sector**:  \nMajor sector bache hue circle ka hissa hota hai (angle $360^\\circ - \\theta$):  \n$$\\mathbf{\\text{Area of Major Sector} = \\pi r^2 - \\text{Area of Minor Sector} = \\frac{360^\\circ - \\theta}{360^\\circ} \\times \\pi r^2}$$  \n\n### The #1 Student Trap: Perimeter of a Sector!  \nJab question puche: *'Find the PERIMETER of a sector'*, 80% bache sirf arc length $l$ nikal kar aa jaate hain aur zero number paate hain!  \nPerimeter ka matlab hai **poori boundary**! Sector ki boundary mein curved arc $l$ ke alawa **dono seedhi radii ($OA + OB = 2r$)** bhi judti hain:  \n$$\\mathbf{\\text{Perimeter of Sector} = l + 2r = \\frac{\\theta}{360^\\circ}(2\\pi r) + 2r}$$",
      formulasOrKeyPoints: [
        {
          title: "Sector Master Formulas",
          content: "$$\\mathbf{l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r} \\qquad \\mathbf{A = \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{1}{2} l r}$$\n$$\\mathbf{\\text{Perimeter of Sector} = l + 2r = \\frac{\\theta}{360^\\circ}(2\\pi r) + 2r}$$\n$$\\mathbf{\\text{Major Sector Area} = \\pi r^2 - \\text{Minor Sector Area}}$$",
          note: "Agar r = 7 cm aur theta = 90° ho, toh arc l = (1/4)(44) = 11 cm. Lekin perimeter = 11 + 2(7) = 11 + 14 = 25 cm hoga!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Perimeter poochha hai ya Arc Length?",
          action: "Keyword check karo: Agar 'Length of arc' likha hai toh sirf $l$ nikalna hai. Agar 'Perimeter of sector' likha hai toh $l + 2r$ nikalna hai.",
          proTip: "Board exam mein 'Perimeter of sector' 1-mark aur 2-mark mein bohot aata hai; hamesha +2r add karo."
        }
      ],
      examinerTraps: [
        {
          trap: "Perimeter of sector mein $+2r$ bhool jaana.",
          correction: "Sector bandh shape hoti hai! Uski boundary mein arc ke sath dono radii judti hain: $\\text{Perimeter} = l + 2r$."
        }
      ]
    },
    {
      id: "segment_formulas_hinglish",
      label: "3. Segment: Minor & Major (The 3 Triangle Angles)",
      heading: "Area of Segment = Area of Sector − Area of $\\triangle OAB$",
      subheading: "60°, 90°, aur 120° Triangles ke Areas ka Complete Breakdown",
      explanation: "Chord $AB$ aur uski corresponding arc ke beech ke hisse ko **Segment (Vrittkhand)** kehte hain:  \n\n$$\\mathbf{\\text{Area of Minor Segment} = \\text{Area of Sector } OAB - \\text{Area of } \\triangle OAB}$$  \n$$\\mathbf{\\text{Area of Major Segment} = \\text{Total Circle Area } (\\pi r^2) - \\text{Area of Minor Segment}}$$  \n\n### The Universal Triangle Area Formula: $\\frac{1}{2} r^2 \\sin\\theta$  \nTriangle $OAB$ ka area nikalne ke liye yeh ek formula CBSE ke teeno standard angles par chalta hai:  \n$$\\mathbf{\\text{Area of } \\triangle OAB = \\frac{1}{2} r^2 \\sin\\theta}$$  \n\n1. **Case 1: Angle at Center $\\theta = 60^\\circ$ (Equilateral Triangle)**  \nKyunki $OA = OB = r$, aur vertex angle $60^\\circ$ hai, isliye base angles bhi $60^\\circ$ honge! $\\triangle OAB$ ek **Equilateral Triangle** ban jaata hai:  \n$$\\mathbf{\\text{Area of } \\triangle OAB = \\frac{\\sqrt{3}}{4} r^2} \\quad \\left( \\because \\frac{1}{2} r^2 \\sin 60^\\circ = \\frac{1}{2} r^2 \\cdot \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{4} r^2 \\right)$$  \n\n2. **Case 2: Angle at Center $\\theta = 90^\\circ$ (Right-Angled Triangle)**  \nDono radii aapas mein $90^\\circ$ par hain, toh ek radius base hai aur doosra height:  \n$$\\mathbf{\\text{Area of } \\triangle OAB = \\frac{1}{2} \\times r \\times r = \\frac{1}{2} r^2} \\quad \\left( \\because \\sin 90^\\circ = 1 \\right)$$  \n\n3. **Case 3: Angle at Center $\\theta = 120^\\circ$ (Obtuse Triangle)**  \nPerpendicular $OM \\perp AB$ drop karne par $OM = r \\cos 60^\\circ = \\frac{r}{2}$ aur $AB = 2r \\sin 60^\\circ = r\\sqrt{3}$:  \n$$\\mathbf{\\text{Area of } \\triangle OAB = \\frac{1}{2} (r\\sqrt{3}) \\left(\\frac{r}{2}\\right) = \\frac{\\sqrt{3}}{4} r^2} \\quad \\left( \\because \\sin 120^\\circ = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2} \\right)$$  \n*(Dhyan do: $60^\\circ$ aur $120^\\circ$ dono ke triangle ka area bilkul SAME formula $\\frac{\\sqrt{3}}{4}r^2$ deta hai!)*",
      formulasOrKeyPoints: [
        {
          title: "Universal Segment Formula Table",
          content: "$$\\begin{array}{|c|c|c|} \\hline \\textbf{Angle } \\theta & \\textbf{Triangle Area Formula} & \\textbf{Minor Segment Area} \\\\\\\\ \\hline 60^\\circ & \\frac{\\sqrt{3}}{4} r^2 & \\frac{60}{360}\\pi r^2 - \\frac{\\sqrt{3}}{4} r^2 = \\frac{\\pi r^2}{6} - \\frac{\\sqrt{3}}{4} r^2 \\\\\\\\ \\hline 90^\\circ & \\frac{1}{2} r^2 & \\frac{90}{360}\\pi r^2 - \\frac{1}{2} r^2 = \\frac{\\pi r^2}{4} - \\frac{1}{2} r^2 \\\\\\\\ \\hline 120^\\circ & \\frac{\\sqrt{3}}{4} r^2 & \\frac{120}{360}\\pi r^2 - \\frac{\\sqrt{3}}{4} r^2 = \\frac{\\pi r^2}{3} - \\frac{\\sqrt{3}}{4} r^2 \\\\\\\\ \\hline \\end{array}$$",
          note: "Major segment nikalne ke liye hamesha: Total Area (πr²) - Minor Segment Area karo!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Major Segment Direct Mat Nikalo",
          action: "Major segment ka direct complex formula mat lagao. Pehle minor segment nikalo, fir circle area $\\pi r^2$ se subtract kar do.",
          proTip: "Yeh method 100% calculation errors rok deta hai."
        }
      ],
      examinerTraps: [
        {
          trap: "Subtracting sector from triangle (giving a negative answer).",
          correction: "Sector bada hota hai (poora slice), triangle chota hota hai (slice ke andar ka cone). Hamesha $\\text{Segment} = \\text{Sector} - \\triangle OAB$."
        }
      ]
    },
    {
      id: "clock_hands_hinglish",
      label: "4. Clock Hands Swept Area (Guaranteed 2M/3M)",
      heading: "Ghadi ki Suiyon ka Speed Rule: 6° Per Minute",
      subheading: "Elapsed Minutes se Central Angle $\\theta$ Calculate Karna",
      explanation: "Ek standard circular clock face total **$360^\\circ$** ka hota hai aur usme **60 minutes** ke marks hote hain:  \n\n### 1. Minute Hand ki Speed (Velocity):  \nMinute hand 60 minute mein poora ek chakkar ($360^\\circ$) ghoomti hai:  \n$$\\mathbf{1 \\text{ minute mein angle} = \\frac{360^\\circ}{60} = 6^\\circ}$$  \nHar ek minute beetne par minute hand **$6^\\circ$** ka angle sweep karti hai!  \n\n### 2. Hour Hand ki Speed (Velocity):  \nHour hand 12 ghante (720 minute) mein ek chakkar ($360^\\circ$) ghoomti hai:  \n$$\\mathbf{1 \\text{ minute mein angle} = \\frac{360^\\circ}{720} = 0.5^\\circ = \\left(\\frac{1}{2}\\right)^\\circ}$$  \n\n### Area Swept by Minute Hand in $t$ Minutes:  \n1. Angle calculate karo: $\\mathbf{\\theta = t \\times 6^\\circ}$.  \n2. Minute hand ki lambai hi circle ka radius $r$ hoti hai: $\\mathbf{r = \\text{length of minute hand}}$.  \n3. Area of sector formula lagao:  \n$$\\mathbf{\\text{Area Swept} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2 = \\frac{t \\times 6^\\circ}{360^\\circ} \\times \\pi r^2 = \\frac{t}{60} \\times \\pi r^2}$$",
      formulasOrKeyPoints: [
        {
          title: "Clock Common Angles Table",
          content: "$$\\begin{array}{|c|c|c|} \\hline \\textbf{Time Elapsed } t & \\textbf{Central Angle } \\theta & \\textbf{Fraction of Circle} \\\\\\\\ \\hline 5 \\text{ minutes} & 5 \\times 6^\\circ = \\mathbf{30^\\circ} & \\frac{30}{360} = \\frac{1}{12} \\\\\\\\ \\hline 10 \\text{ minutes} & 10 \\times 6^\\circ = \\mathbf{60^\\circ} & \\frac{60}{360} = \\frac{1}{6} \\\\\\\\ \\hline 15 \\text{ minutes} & 15 \\times 6^\\circ = \\mathbf{90^\\circ} & \\frac{90}{360} = \\frac{1}{4} \\quad (\\text{Quadrant}) \\\\\\\\ \\hline 20 \\text{ minutes} & 20 \\times 6^\\circ = \\mathbf{120^\\circ} & \\frac{120}{360} = \\frac{1}{3} \\\\\\\\ \\hline 30 \\text{ minutes} & 30 \\times 6^\\circ = \\mathbf{180^\\circ} & \\frac{180}{360} = \\frac{1}{2} \\quad (\\text{Semicircle}) \\\\\\\\ \\hline 35 \\text{ minutes} & 35 \\times 6^\\circ = \\mathbf{210^\\circ} & \\frac{210}{360} = \\frac{7}{12} \\\\\\\\ \\hline \\end{array}$$",
          note: "Agar r = 14 cm aur t = 5 min ho: Area = (1/12) × (22/7) × 14 × 14 = (1/12) × 616 = 154/3 cm² ≈ 51.33 cm²."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Elapsed Time Calculate Karo",
          action: "Agar question mein time 7:05 am se 7:40 am diya hai, toh pehle minutes nikalo: $40 - 5 = 35\\text{ minutes}$.",
          proTip: "Fir angle $\\theta = 35 \\times 6^\\circ = 210^\\circ$ likho."
        }
      ],
      examinerTraps: [
        {
          trap: "Minutes ko hi angle samajh kar $\\theta = 5^\\circ$ likh dena.",
          correction: "Minutes angle nahi hote! 1 minute = $6^\\circ$. 5 minute = $30^\\circ$."
        }
      ]
    },
    {
      id: "real_world_applications_hinglish",
      label: "5. Real-World Applications (Wipers, Horse, Brooch, Umbrella)",
      heading: "Asli Zindagi ke Problems: Wipers, Grazing Fields, aur Brooches",
      subheading: "NCERT ke 4 Sabse High-Yield Word Problems",
      explanation: "Board exam mein NCERT ke yeh 4 real-world problems hamesha aate hain:  \n\n1. **Two Car Wipers Sweeping Without Overlap**:  \nCar ke aage do wipers hote hain jo ek dusre ko overlap nahi karte. Har blade ki length $r$ hoti hai aur woh angle $\\theta$ (usually $115^\\circ$) par sweep karte hain:  \n$$\\mathbf{\\text{Total Cleaned Area} = 2 \\times \\left( \\frac{\\theta}{360^\\circ} \\pi r^2 \\right)}$$  \n\n2. **Horse Tied to a Corner Peg in a Square Field**:  \nSquare field ka corner $90^\\circ$ ka hota hai. Ghoda corner ke peg se rassi $L$ se bandha hai.  \nGhoda sirf ek **Quadrant ($90^\\circ$ sector)** ke andar ghaas char sakta hai:  \n$$\\mathbf{\\text{Grazing Area} = \\frac{90^\\circ}{360^\\circ} \\pi L^2 = \\frac{1}{4} \\pi L^2}$$  \n$\\bullet$ Agar rassi $5\\text{ m}$ se badha kar $10\\text{ m}$ kar di jaye, toh increase in grazing area:  \n$$\\mathbf{\\text{Increase in Area} = \\frac{1}{4}\\pi (10^2 - 5^2) = \\frac{1}{4}\\pi (100 - 25) = \\frac{75}{4}\\pi\\text{ m}^2}$$  \n\n3. **Silver Wire Brooch with 5 Diameters**:  \nEk gol brooch silver wire se bana hai jisme outer circular boundary aur 5 diameters hain (jo brooch ko 10 equal sectors mein baant-te hain):  \n$$\\mathbf{\\text{Total Length of Wire} = \\text{Circumference} + 5 \\times \\text{Diameter} = 2\\pi r + 5(2r) = 2\\pi r + 10r}$$  \n$$\\mathbf{\\text{Angle of each sector} = \\frac{360^\\circ}{10} = 36^\\circ \\implies \\text{Area of each sector} = \\frac{1}{10} \\pi r^2}$$  \n\n4. **Umbrella with 8 Equal Ribs**:  \nUmbrella ko flat circle maan lo. 8 ribs circle ko 8 equal sectors mein baant-ti hain:  \n$$\\mathbf{\\text{Angle between two consecutive ribs} = \\frac{360^\\circ}{8} = 45^\\circ}$$  \n$$\\mathbf{\\text{Area between two ribs} = \\frac{45^\\circ}{360^\\circ} \\pi r^2 = \\frac{1}{8} \\pi r^2}$$",
      formulasOrKeyPoints: [
        {
          title: "Real-World Quick Formulas",
          content: "$$\\mathbf{\\text{Wipers (2 blades): } 2 \\times \\frac{\\theta}{360^\\circ} \\pi r^2}$$\n$$\\mathbf{\\text{Corner Grazing: } \\frac{1}{4} \\pi L^2}$$\n$$\\mathbf{\\text{Brooch Wire Length: } 2\\pi r + 5(2r) = 2\\pi r + 10r}$$\n$$\\mathbf{\\text{Umbrella Sector (8 ribs): } \\frac{1}{8} \\pi r^2}$$",
          note: "Brooch question mein wire length aur sector area do alag-alag parts hote hain."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Geometry Identify Karo",
          action: "Corner peg $\\implies$ Quadrant ($90^\\circ$). 8 ribs $\\implies 360/8 = 45^\\circ$. 10 sectors $\\implies 360/10 = 36^\\circ$.",
          proTip: "Shape samajhte hi basic sector formula lagao."
        }
      ],
      examinerTraps: [
        {
          trap: "Brooch question mein wire length mein sirf circumference likhna aur 5 diameters chhod dena.",
          correction: "Wire se diameters bhi bane hain! $\\text{Total wire} = 2\\pi r + 5 \\times 2r = 2\\pi r + 10r$."
        }
      ]
    },
    {
      id: "shaded_combinations_hinglish",
      label: "6. Shaded Region Combinations (Master 5-Mark Strategies)",
      heading: "Square, Circles, aur Shaded Regions ka subtraction",
      subheading: "Square minus 4 Quadrants & Semicircles Strategy",
      explanation: "Shaded region nikalne ka ek hi universal mantra hai:  \n$$\\mathbf{\\text{Area of Shaded Region} = \\text{Area of Outer Container} - \\text{Area of Unshaded Shapes}}$$  \n\n### The 2 Classic Board Combinations:  \n\n1. **Square of Side $a$ with 4 Corner Quadrants (Radius $r = a/2$)**:  \nSquare ke chaaro corners par 4 quadrant circles bane hain jo aapas mein touch karte hain:  \n$\\bullet$ Chaaro quadrants milkar **1 Poora Circle** banate hain: $4 \\times \\frac{1}{4}\\pi r^2 = \\pi r^2$.  \n$$\\mathbf{\\text{Shaded Area between them} = \\text{Area of Square} - \\text{Area of Full Circle} = a^2 - \\pi r^2}$$  \n*Example*: Agar square ka side $a = 14\\text{ cm}$ ho, toh $r = 7\\text{ cm}$:  \n$$\\text{Shaded Area} = 14^2 - \\frac{22}{7} \\times 7^2 = 196 - 154 = \\mathbf{42\\text{ cm}^2}!$$  \n\n2. **Circle Inscribed in a Square of Side $a$**:  \nCircle square ke andar fit hai, toh circle ka diameter square ke side ke barabar hoga: $d = a \\implies r = \\frac{a}{2}$.  \n$$\\mathbf{\\text{Area of Inscribed Circle} = \\pi r^2 = \\pi \\left(\\frac{a}{2}\\right)^2 = \\frac{\\pi a^2}{4}}$$  \n$$\\mathbf{\\text{Remaining Shaded Area (Corners)} = a^2 - \\frac{\\pi a^2}{4} = a^2\\left(1 - \\frac{\\pi}{4}\\right)}$$",
      formulasOrKeyPoints: [
        {
          title: "Golden Shaded Identities",
          content: "$$\\mathbf{\\text{Square } (14\\text{ cm}) - \\text{Circle } (r=7\\text{ cm}) = 196 - 154 = 42\\text{ cm}^2}$$\n$$\\mathbf{\\text{Circle inscribed in square of side } a: \\quad A = \\frac{\\pi a^2}{4}}$$\n$$\\mathbf{\\text{Circle circumscribing square of side } a: \\quad d = a\\sqrt{2} \\implies r = \\frac{a}{\\sqrt{2}} \\implies A = \\frac{\\pi a^2}{2}}$$",
          note: "Inscribed circle ka area πa²/4 hota hai; Circumscribed circle ka area πa²/2 hota hai!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Container vs Cutout Identify Karo",
          action: "Bada figure (Container) pehle likho, chote figures (Cutouts) subtract karo.",
          proTip: "Hamesha fractions pehle add kar lo (jaise 4 quadrants = 1 full circle) calculation asaan karne ke liye."
        }
      ],
      examinerTraps: [
        {
          trap: "Inscribed aur Circumscribed circle ke radius mein confuse hona.",
          correction: "Inscribed circle: $\\text{diameter} = \\text{side } a \\implies r = a/2$. Circumscribed circle: $\\text{diameter} = \\text{diagonal } a\\sqrt{2} \\implies r = a/\\sqrt{2}$."
        }
      ]
    }
  ]
};
