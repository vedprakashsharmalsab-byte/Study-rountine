import type { MathChapterConcept } from "./types";

export const CH7_COORDINATE_GEOM_CONCEPT: MathChapterConcept = {
  chapterNo: 7,
  title: "Coordinate Geometry",
  weightage: "6 Marks (CBSE Board Mandatory)",
  oneLiner: "Grid addresses geometry ko algebra mein badal dete hain; Distance formula Pythagoras ka chupa hua roop hai; Section formula seesaw ka weighted balance hai!",
  analogyTitle: "René Descartes aur Ceiling par Machhar (Fly) ka Address System",
  analogyContent: "17th century ke French ganitagya René Descartes bimaar the aur apne bistar par let kar chhat (ceiling) ko dekh rahe the. Unhone dekha ki chhat ki tiles par ek makkhi (fly) baithi hui hai. Unke dimaag mein achanak ek khayal aaya: agar main do paas wali deewaron ko reference maan loon, toh makkhi ki exact position do numbers $(x, y)$ se bata sakta hoon — pehli deewar se doori $x$, aur doosri se doori $y$! Yahi se janam hua Cartesian Coordinate System ka, jisne geometry (shapes, lines, triangles) ko algebra (numbers, formulas) ke saath jodh diya!",
  sections: [
    {
      id: "grid_basics_hinglish",
      label: "1. Coordinate Grid & Axis Addresses",
      heading: "Abscissa, Ordinate, aur Axes ke Points ka Golden Rule",
      subheading: "X-Axis aur Y-Axis ke Points mein Kabhi Galti Mat Karna!",
      explanation: "Cartesian plane par kisi bhi point ka address do coordinates se milkar banta hai: **$(x, y)$**  \n\n$\\bullet$ **$x$-coordinate (Abscissa):** Point ki **Y-axis se perpendicular doori**!  \n$\\bullet$ **$y$-coordinate (Ordinate):** Point ki **X-axis se perpendicular doori**!  \n$\\bullet$ **Origin $O$:** Jahan dono axes aapas mein milti hain: $(0, 0)$.  \n\n### The 2 Golden Axis Rules (70% Board Questions ka Foundation):  \n$$\\mathbf{\\text{X-axis par sthit kisi bhi point ka } y = 0 \\implies (x, 0)}$$  \n$$\\mathbf{\\text{Y-axis par sthit kisi bhi point ka } x = 0 \\implies (0, y)}$$  \n\n**Hinglish Meaning:**  \nAgar sawal kahe *'X-axis par ek aisa point dhundho jo...'* toh bina soche samjhe point ko **$(x, 0)$** maano! Kyunki X-axis par upar-neeche ki height zero hoti hai. Aur agar Y-axis par kahe, toh **$(0, y)$** maano!",
      formulasOrKeyPoints: [
        {
          title: "Quadrant Sign Matrix & Axis Rules",
          content: "$$\\begin{array}{|c|c|c|c|} \\hline \\textbf{Quadrant} & \\textbf{x-sign} & \\textbf{y-sign} & \\textbf{Example Point} \\\\\\\\ \\hline \\text{Quadrant I} & + & + & (3, 5) \\\\\\\\ \\hline \\text{Quadrant II} & - & + & (-4, 2) \\\\\\\\ \\hline \\text{Quadrant III} & - & - & (-3, -7) \\\\\\\\ \\hline \\text{Quadrant IV} & + & - & (6, -2) \\\\\\\\ \\hline \\end{array}$$  \n$$\\mathbf{\\text{Distance from Y-axis} = |x| \\qquad \\text{Distance from X-axis} = |y|}$$",
          note: "Distance hamesha POSITIVE hoti hai! Point (-6, 8) ki Y-axis se doori |-6| = 6 units hogi, -6 nahi."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Axis Points ko Assume Karna",
          action: "Point on X-axis $\\to P(x, 0)$. Point on Y-axis $\\to P(0, y)$.",
          proTip: "Kabhi bhi do unknowns $(x, y)$ mat maanna jab point axis par ho; single variable se equation turant solve ho jaati hai."
        }
      ],
      examinerTraps: [
        {
          trap: "Bache 'distance from X-axis' ko $x$ coordinate samajh lete hain.",
          correction: "X-axis se doori VERTICAL coordinate $y$ (Ordinate) hoti hai! Y-axis se doori HORIZONTAL coordinate $x$ (Abscissa) hoti hai."
        }
      ]
    },
    {
      id: "distance_formula_hinglish",
      label: "2. The Distance Formula (Grid par Pythagoras)",
      heading: "Do Points ke Bich ki Doori: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$",
      subheading: "Origin se Doori + Equidistant Points ka Squaring Trick",
      explanation: "Do points $A(x_1, y_1)$ aur $B(x_2, y_2)$ ke bich ki doori nikalne ke liye hum Pythagoras Theorem ka use karte hain:  \nHorizontal distance = $|x_2 - x_1|$  \nVertical distance = $|y_2 - y_1|$  \nHypotenuse $AB$ ban jaata hai:  \n$$\\mathbf{d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}}$$  \n\n**Origin $O(0, 0)$ se Doori:**  \nAgar pehla point origin $(0, 0)$ ho, toh formula behad simple ho jaata hai:  \n$$\\mathbf{OP = \\sqrt{x^2 + y^2}}$$  \n*Example:* $P(-6, 8)$ ki origin se doori = $\\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = \\mathbf{10}$ units!  \n\n### The Equidistant Super-Trick: Pehle hi Dono Sides Square Karo!  \nJab sawal bole ki point $P(x, y)$ do points $A$ aur $B$ se barabar doori (equidistant) par hai, toh $PA = PB$ likhne ke baad:  \n$$\\mathbf{PA^2 = PB^2}$$  \nIsse square root $\\sqrt{}$ ka jhanjhat shuru mein hi khatam ho jaata hai, aur $x^2$ dono sides se cancel ho jaata hai!",
      formulasOrKeyPoints: [
        {
          title: "Distance Formulas Summary",
          content: "$$\\text{Distance between } A(x_1, y_1) \\text{ and } B(x_2, y_2): \\quad \\mathbf{AB = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}}$$\n$$\\text{Distance from Origin } (0, 0): \\quad \\mathbf{OP = \\sqrt{x^2 + y^2}}$$\n$$\\text{Equidistant Condition: } \\mathbf{PA^2 = PB^2} \\implies (x - x_1)^2 + (y - y_1)^2 = (x - x_2)^2 + (y - y_2)^2$$",
          note: "Subtraction order se koi farak nahi padta: (x2 - x1)² aur (x1 - x2)² bilkul same hote hain kyunki square negative sign ko positive bana deta hai!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Double Minus ka Dhyan Rakhna",
          action: "Agar coordinates negative hain (jaise $x_1 = -5, x_2 = 2$), toh formula mein: $x_2 - x_1 = 2 - (-5) = 2 + 5 = 7$.",
          proTip: "Sign error coordinate geometry ka sabse bada dushman hai. Hamesha brackets use karo: $(2 - (-5))^2$."
        }
      ],
      examinerTraps: [
        {
          trap: "$(-6)^2$ ko galti se $-36$ likh dena.",
          correction: "Kisi bhi real number ka square hamesha positive hota hai: $(-6)^2 = +36$. Root ke andar kabhi negative sign mat chhodna!"
        }
      ]
    },
    {
      id: "section_formula_hinglish",
      label: "3. The Section Formula (Seesaw Balance Principle)",
      heading: "Line Segment ko Ratio $m_1 : m_2$ mein Divide Karna",
      subheading: "Criss-Cross Multiplication + Super-Fast $k : 1$ Ratio Hack",
      explanation: "Socho ek line segment $AB$ hai jise beech mein baitha ek point $P(x, y)$ do hisson mein baant raha hai ratio $m_1 : m_2$ mein.  \n\n### Yeh Criss-Cross Formula Kaise Kaam Karta Hai?  \nPoint $P$ dono kinaro ki taraf khinch raha hai jaise seesaw par bache baithe hon:  \n$\\bullet$ Left side ka ratio $m_1$ multiply hota hai **Right side wale point $B(x_2, y_2)$ se**!  \n$\\bullet$ Right side ka ratio $m_2$ multiply hota hai **Left side wale point $A(x_1, y_1)$ se**!  \n\n$$\\mathbf{P(x, y) = \\left( \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}, \\; \\frac{m_1 y_2 + m_2 y_1}{m_1 + m_2} \\right)}$$  \n\n### Unknown Ratio ke Liye The $k : 1$ Hack:  \nJab question puche: *'Line segment AB ko X-axis ya Y-axis kis ratio mein divide karti hai?'*, toh do variables $m_1 : m_2$ kabhi mat maanna!  \nHamesha ratio maano: **$k : 1$**  \n$$P(x, y) = \\left( \\frac{k x_2 + x_1}{k + 1}, \\; \\frac{k y_2 + y_1}{k + 1} \\right)$$  \n$\\bullet$ Agar **X-axis** divide kar rahi hai $\\implies y$-coordinate ko **$0$** rakh do aur $k$ nikal lo!  \n$\\bullet$ Agar **Y-axis** divide kar rahi hai $\\implies x$-coordinate ko **$0$** rakh do aur $k$ nikal lo!",
      formulasOrKeyPoints: [
        {
          title: "Axis Division Direct Ratio Formulas",
          content: "$$\\text{Ratio in which X-axis divides } AB: \\quad \\mathbf{k : 1 = -\\frac{y_1}{y_2}} \\qquad (\\text{since } y = 0)$$\n$$\\text{Ratio in which Y-axis divides } AB: \\quad \\mathbf{k : 1 = -\\frac{x_1}{x_2}} \\qquad (\\text{since } x = 0)$$",
          note: "MCQs mein direct -y1/y2 aur -x1/x2 lagakar 2 seconds mein ratio check kiya ja sakta hai!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Horizontal Rough Diagram Banayein",
          action: "Exam copy mein ek horizontal line banao: Left mein $A(x_1, y_1)$, Right mein $B(x_2, y_2)$, bich mein $P(x, y)$, aur upar $k$ aur $1$ likh kar cross arrows banao.",
          proTip: "Cross arrows dekh kar kabhi bhi wrong coordinate multiply nahi hoga."
        }
      ],
      examinerTraps: [
        {
          trap: "$m_1$ ko $x_1$ se multiply kar dena: $\\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2}$.",
          correction: "Yeh CRISS-CROSS formula hai! Left ka ratio right ke coordinate se multiply hota hai ($m_1 x_2$), aur right ka ratio left ke coordinate se ($m_2 x_1$)."
        }
      ]
    },
    {
      id: "midpoint_and_trisection_hinglish",
      label: "4. Midpoint Formula & Points of Trisection",
      heading: "Equal Split ($1:1$) aur Line ko 3 Barabar Hisson mein Kaatna",
      subheading: "Centroid of a Triangle + Trisection Strategy",
      explanation: "Jab dividing point $M$ bilkul beecho-beech ho, toh ratio $1 : 1$ ban jaata hai ($m_1 = m_2 = 1$). Section formula collapse ho kar simple **Average (Arithmetic Mean)** ban jaata hai:  \n$$\\mathbf{M(x, y) = \\left( \\frac{x_1 + x_2}{2}, \\; \\frac{y_1 + y_2}{2} \\right)}$$  \n\n### Points of Trisection (3 Barabar Tukde):  \nLine segment $AB$ ko 3 equal hisson mein baantne ke liye beech mein **do points** $P$ aur $Q$ lagte hain:  \n$\\bullet$ Point $P$, segment $AB$ ko **$1 : 2$** ke ratio mein divide karta hai!  \n$\\bullet$ Point $Q$, segment $AB$ ko **$2 : 1$** ke ratio mein divide karta hai (ya fir simple words mein, $Q$ point $PB$ ka **Midpoint** hota hai)!  \n\n### Triangle ka Centroid $G$ Formula:  \nTriangle ki teeno medians jis common point par milti hain, use Centroid $G$ kehte hain. Centroid har median ko $2 : 1$ ke ratio mein baanta hai:  \n$$\\mathbf{G(x, y) = \\left( \\frac{x_1 + x_2 + x_3}{3}, \\; \\frac{y_1 + y_2 + y_3}{3} \\right)}$$  \nCentroid sirf teeno vertices ka simple average hota hai!",
      formulasOrKeyPoints: [
        {
          title: "Midpoint, Trisection & Centroid Formulas",
          content: "$$\\text{Midpoint: } \\mathbf{M = \\left( \\frac{x_1 + x_2}{2}, \\; \\frac{y_1 + y_2}{2} \\right)}$$\n$$\\text{Trisection Points: } \\mathbf{P \\text{ divides in } 1:2, \\quad Q \\text{ divides in } 2:1}$$\n$$\\text{Centroid of } \\triangle ABC: \\quad \\mathbf{G = \\left( \\frac{x_1 + x_2 + x_3}{3}, \\; \\frac{y_1 + y_2 + y_3}{3} \\right)}$$",
          note: "Trisection ke sawal mein dono points P aur Q nikalna compulsory hota hai. Sirf ek nikalne par aadhe marks cut jaate hain."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Q Nikalne ke Liye Midpoint Shortcut",
          action: "Pehle $P$ ko ratio $1:2$ se nikalo. Fir $Q$ nikalne ke liye lamba section formula lagane ke bajaye seedha $P$ aur $B$ ka midpoint formula laga do!",
          proTip: "Isse time bachta hai aur calculation aadhi ho jaati hai."
        }
      ],
      examinerTraps: [
        {
          trap: "Bache sochte hain trisection ka matlab 3 points nikalna hai.",
          correction: "Rope ko 3 tukdo mein kaatne ke liye sirf 2 cuts (do points P aur Q) ki zaroorat hoti hai!"
        }
      ]
    },
    {
      id: "parallelogram_superweapon",
      label: "5. Parallelogram 4th Vertex Super-Weapon",
      heading: "Diagonals Bisect Each Other: 3 Lines mein 4th Vertex",
      subheading: "Distance Formula ki Lambi Calculation se Chhutkara!",
      explanation: "Agar question kahe: *'$A(6, 1), B(8, 2), C(9, 4)$ aur $D(p, 3)$ ek parallelogram ke vertices hain order mein, toh $p$ ki value batao?'*  \n\n**Bacho ki Aam Galti:**  \nBache opposite sides equal karne ke liye distance formula lagate hain: $AB = CD$ aur $BC = AD$. Isse do lambi quadratic equations ban jaati hain jismein square roots aur $p^2$ phas jaata hai, aur 10 minutes waste ho jaate hain!  \n\n### The Topper Super-Weapon:  \nParallelogram (rhombus, rectangle, square) ki sabse powerful property hoti hai:  \n$$\\mathbf{\\text{Diagonals ek doosre ko bisect karti hain (Midpoint of AC = Midpoint of BD)!}}$$  \n$$\\left( \\frac{x_A + x_C}{2}, \\; \\frac{y_A + y_C}{2} \\right) = \\left( \\frac{x_B + x_D}{2}, \\; \\frac{y_B + y_D}{2} \\right)$$  \nDono taraf ke $x$-coordinates ko equate karo:  \n$$\\frac{6 + 9}{2} = \\frac{8 + p}{2} \\implies 15 = 8 + p \\implies \\mathbf{p = 7}$$  \n3 lines mein answer! Zero square roots, zero quadratic equation!",
      formulasOrKeyPoints: [
        {
          title: "Parallelogram 4th Vertex Rule",
          content: "$$\\mathbf{x_A + x_C = x_B + x_D \\implies x_D = x_A + x_C - x_B}$$\n$$\\mathbf{y_A + y_C = y_B + y_D \\implies y_D = y_A + y_C - y_B}$$",
          note: "Opposite vertices ke coordinates ka sum barabar hota hai! Ye trick rhombus, rectangle, square sab par 100% kaam karti hai."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Vertex Order Check Karna",
          action: "Question mein hamesha check karo: 'taken in order'. Order hota hai $A \\to B \\to C \\to D$. Isliye diagonals hamesha $AC$ aur $BD$ hi banti hain.",
          proTip: "Galti se $AB$ aur $CD$ ko diagonal mat maan lena!"
        }
      ],
      examinerTraps: [
        {
          trap: "Distance formula laga kar $p$ solve karne ki koshish karna.",
          correction: "CBSE official marking scheme specifically awards marks for the diagonal midpoint method: 'Midpoint of AC = Midpoint of BD'."
        }
      ]
    },
    {
      id: "geometric_proofs_matrix",
      label: "6. Geometric Figure Proofs on the Grid",
      heading: "Square vs Rhombus aur Rectangle vs Parallelogram Proofs",
      subheading: "Collinearity Condition + Master Decision Matrix",
      explanation: "Jab board exam mein 4 points dekar pucha jaye ki batao yeh kaunsa quadrilateral banate hain, toh yeh Decision Matrix follow karo:  \n\n### 1. Square vs Rhombus:  \n$\\bullet$ Chaaro sides calculate karo ($AB, BC, CD, DA$). Agar chaaro sides barabar aayi ($AB = BC = CD = DA$):  \n$\\bullet$ Ab **DONO DIAGONALS ($AC, BD$) CALCULATE KARO**:  \n  - Agar **Diagonals EQUAL hain ($AC = BD$)** $\\implies$ **SQUARE**!  \n  - Agar **Diagonals UNEQUAL hain ($AC \\neq BD$)** $\\implies$ **RHOMBUS**!  \n\n### 2. Rectangle vs Parallelogram:  \n$\\bullet$ Opposite sides barabar hain ($AB = CD$ aur $BC = DA$):  \n  - Agar **Diagonals EQUAL hain ($AC = BD$)** $\\implies$ **RECTANGLE**!  \n  - Agar **Diagonals UNEQUAL hain ($AC \\neq BD$)** $\\implies$ **PARALLELOGRAM**!  \n\n### 3. Collinear Points Test:  \nTeen points $A, B, C$ ek hi seedhi line par tabhi hote hain jab do chhote distances ka sum sabse bade distance ke barabar ho:  \n$$\\mathbf{AB + BC = AC \\implies A, B, C \\text{ are Collinear}}$$  \n*(Ya triangle ka Area = 0 ho!)*",
      formulasOrKeyPoints: [
        {
          title: "Quadrilateral Master Decision Matrix",
          content: "$$\\begin{array}{|c|c|c|} \\hline \\textbf{Figure Name} & \\textbf{Sides Property} & \\textbf{Diagonals Property} \\\\\\\\ \\hline \\textbf{Parallelogram} & \\text{Opposite sides equal} & \\text{Diagonals NOT equal} \\\\\\\\ \\hline \\textbf{Rectangle} & \\text{Opposite sides equal} & \\mathbf{\\text{Diagonals EQUAL } (AC = BD)} \\\\\\\\ \\hline \\textbf{Rhombus} & \\text{All 4 sides equal} & \\text{Diagonals NOT equal} \\\\\\\\ \\hline \\textbf{Square} & \\text{All 4 sides equal} & \\mathbf{\\text{Diagonals EQUAL } (AC = BD)} \\\\\\\\ \\hline \\end{array}$$",
          note: "Bina diagonals check kiye kabhi bhi 'Square' ya 'Rectangle' mat declare karna; diagonals check karna compulsory hai!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Systematic 6-Distance Calculation",
          action: "1. Chaaro sides $AB, BC, CD, DA$ nikalo. 2. Dono diagonals $AC, BD$ nikalo. 3. Concluding line likho: 'Since all 4 sides are equal and both diagonals are equal, ABCD is a square.'",
          proTip: "Concluding line likhne ka CBSE marking scheme mein pura 1 mark hota hai."
        }
      ],
      examinerTraps: [
        {
          trap: "Bache sirf 4 sides equal dikha kar likh dete hain 'Hence ABCD is a square'.",
          correction: "Chaaro sides equal toh Rhombus mein bhi hoti hain! Square prove karne ke liye diagonals ko equal dikhana mandatory hai."
        }
      ]
    },
    {
      id: "board_case_studies_ch7",
      label: "7. High-Yield Case Studies & Circumcentre Problems",
      heading: "Sports Day Mapping, Town Coordinates, aur Circumcentre",
      subheading: "Section D & E ke 4-5 Marks ke Competency Questions",
      explanation: "Class 10 CBSE Board exam mein Coordinate Geometry se 4 marks ki Competency Case Study aana lagbhag tay hota hai:  \n\n### Case Study Archetype 1: Sports Day Flag Coordinates  \nGrid par athletes alag-alag positions par flags lagate hain ($A(2, 1), B(5, -8) \\dots$).  \nSub-questions mein aksar pucha jaata hai:  \n1. Distance formula se do athletes ke beech ki doori  \n2. Section formula se checkpoint coordinator ki position (jo segment ko $2:3$ mein divide kar raha ho)  \n3. Teeno points collinear hain ya triangle banate hain.  \n\n### Archetype 2: Circumcentre of a Circle Passing Through 3 Points  \nAgar ek circle teen points $A(6, -6), B(3, -7), C(3, 3)$ se guzar raha hai, toh uska centre $O(x, y)$ nikalo:  \nKyunki centre se boundary ke har point ki doori radius $r$ hoti hai:  \n$$OA = OB = OC = r \\implies OA^2 = OB^2 = OC^2$$  \n1. $OA^2 = OB^2$ se ek linear equation banti hai ($3x + y = 7$).  \n2. $OB^2 = OC^2$ se $y = -2$ direct nikal aata hai!  \n3. Substitute karke $x = 3$ mil jaata hai $\\implies \\text{Centre } O(3, -2)$!",
      formulasOrKeyPoints: [
        {
          title: "Circumcentre & Case Study Formulas",
          content: "$$\\text{Circumcentre } O(x, y): \\quad \\mathbf{OA^2 = OB^2 = OC^2 = r^2}$$\n$$\\text{Area of } \\triangle ABC = \\mathbf{\\frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|}$$\n$$\\text{Collinear Points } \\iff \\text{Area} = 0$$",
          note: "Square roots avoid karne ke liye hamesha OA² = OB² use karo."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Case Study Sub-parts ko Step-by-Step Solve Karna",
          action: "Part (i), (ii), (iii) ko clean sub-headings ke saath likho. Units (units, sq units, meters) har answer ke baad likhna mandatory hai.",
          proTip: "Case study questions scoring hote hain kyunki har sub-part ke independent marks hote hain."
        }
      ],
      examinerTraps: [
        {
          trap: "Area formula mein absolute value $|...|$ bhool jaana aur negative area likh dena.",
          correction: "Area kabhi negative nahi ho sakti! Agar andar value $-22$ aayi, toh mod $|-22| = +22$, aur area $\\frac{1}{2}(22) = 11$ sq units hogi."
        }
      ]
    }
  ]
};
