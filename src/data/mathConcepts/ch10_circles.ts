import type { MathChapterConcept } from "./types";

export const CH10_CIRCLES_CONCEPT: MathChapterConcept = {
  chapterNo: 10,
  title: "Circles",
  weightage: "6–8 Marks (High-Yield CBSE Geometry)",
  oneLiner: "Tangent circle ko sirf 1 point par touch karti hai aur radius se 90° banati hai; External point se khinche dono tangents barabar lambai ke judwaa (PA = PB) hote hain!",
  analogyTitle: "The Pizza Cutter Wheel & The Double Laser Beams",
  analogyContent: "Bhai, socho agar aap ek pizza cutter ya cycle ke pahiye ko ek flat table par roll karte ho. Har ek instant par, gol pahiya flat surface ko **sirf aur sirf EK point** par touch karta hai! Yeh flat surface pahiye ko cheer kar andar nahi jaati (it is not a secant). Yeh single-point touch wali line hi **Tangent (Sparsh Rekha)** hai! Aur agar aap center hub se us touch point tak ek spoke (radius) draw karo, toh woh table ke saath ekdum seedha **$90^\\circ$ perpendicular** khada hota hai. Aur jab aap circle ke bahar khade hokar do laser beams se circle ke kinaron ko target karte ho, toh dono laser beams ki circle tak ki doori bilkul barabar ($PA = PB$) hoti hai!",
  sections: [
    {
      id: "tangent_basics_hinglish",
      label: "1. Tangent, Secant, aur Tangent Counts (Zero to Hero)",
      heading: "Touching vs Cutting: Circle aur Line ke 3 Rishte",
      subheading: "Circle ke Andar, Upar, aur Bahar se Kitne Tangents Khinche Ja Sakte Hain?",
      explanation: "Ek plane par ek circle aur ek straight line ke beech sirf **teen geometric possibilities** ho sakti hain:  \n\n1. **Non-Intersecting Line**: Line circle se door se nikal jaati hai — inke beech **0 common points** hote hain.  \n2. **Secant (Chhedak Rekha)**: Line circle ko cheerte hue nikal jaati hai aur circle ko **2 alag-alag points** par kaat-ti hai.  \n3. **Tangent (Sparsh Rekha)**: Line circle ko pyaar se sirf **1 single point** par kiss (touch) karke guzar jaati hai! Is single common point ko **Point of Contact (Sparsh Bindu)** kehte hain.  \n\n### Ek Point $P$ se Circle par Kitne Tangents Khinche Ja Sakte Hain?  \n$\\bullet$ **Case 1: Point $P$ circle ke ANDAR hai ($d < r$)** $\\implies$ **0 Tangents**! Circle ke andar se koi bhi line khinchoge toh woh dono taraf circle ko kaat kar secant ban jaayegi.  \n$\\bullet$ **Case 2: Point $P$ circle ke UPAR (boundary par) hai ($d = r$)** $\\implies$ **Exactly 1 Tangent**! Har point of contact par sirf ek hi unique tangent ho sakti hai.  \n$\\bullet$ **Case 3: Point $P$ circle ke BAHAR hai ($d > r$)** $\\implies$ **Exactly 2 Tangents**! External point se circle par theek do tangents ($PA$ aur $PB$) khinche ja sakte hain.  \n\n### Parallel Tangents ka Golden Theorem (1-Mark MCQ Favorite):  \nEk circle par infinite tangents ho sakti hain, lekin kisi ek given direction mein **sirf aur sirf DO parallel tangents** ho sakti hain! Aur yeh dono tangents hamesha circle ke **Diameter ke opposite ends par sthit hoti hain**:  \n$$\\mathbf{\\text{Distance between two parallel tangents} = 2r = \\text{Diameter}}$$",
      formulasOrKeyPoints: [
        {
          title: "Position vs Tangent Count Cheat Sheet",
          content: "$$\\begin{array}{|c|c|c|} \\hline \\textbf{Position of Point } P & \\textbf{Distance from Center } d & \\textbf{Number of Tangents} \\\\\\\\ \\hline \\text{Inside Circle} & d < r & \\mathbf{0} \\\\\\\\ \\hline \\text{On the Circle} & d = r & \\mathbf{1} \\\\\\\\ \\hline \\text{Outside Circle} & d > r & \\mathbf{2} \\\\\\\\ \\hline \\end{array}$$  \n$$\\mathbf{\\text{Distance between Parallel Tangents} = 2r = d}$$",
          note: "Agar circle ka radius r = 4.5 cm hai, toh uske do parallel tangents ke beech ki doori 2(4.5) = 9 cm hogi!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Center se Doori Check Karo",
          action: "Point $P$ ki center se doori $OP = d$ ko radius $r$ se compare karo: $d < r \\to 0$, $d = r \\to 1$, $d > r \\to 2$.",
          proTip: "Section A MCQs mein 'number of tangents from an interior point' aate hi bina calculation ke 0 mark kar do."
        }
      ],
      examinerTraps: [
        {
          trap: "Sochna ki circle par sirf 2 tangents ban sakte hain.",
          correction: "Circle par INFINITE tangents ban sakte hain kyunki circle par infinite points hain. Lekin kisi ek external point se sirf 2, aur kisi ek direction mein sirf 2 parallel tangents ban sakte hain."
        }
      ]
    },
    {
      id: "theorem_10_1_hinglish",
      label: "2. Theorem 10.1: Radius ⟂ Tangent at Point of Contact",
      heading: "The 90° Anchor: Radius aur Tangent ka $90^\\circ$ Right Angle",
      subheading: "NCERT ka Shortest Distance Proof + Pythagoras Right Triangles",
      explanation: "**Statement (Theorem 10.1)**:  \n*The tangent at any point of a circle is perpendicular to the radius through the point of contact.*  \n(Circle ke kisi point par khinchi gayi tangent us point se jaane wale radius par perpendicular hoti hai).  \n\n### NCERT ka Shortest Distance Proof (Ekdum Saral Shabdon Mein):  \n1. Maan lo circle ka center $O$ hai, aur line $AB$ circle ko point $P$ par touch kar rahi hai ($P$ is point of contact).  \n2. Line $AB$ par $P$ ke alawa koi doosra point $Q$ lo aur $OQ$ ko jodh do.  \n3. Point $Q$ circle ke **bahar** hi hona chahiye! Kyunki agar $Q$ circle ke andar hota, toh line $AB$ circle ko do points par kaat-ti aur secant ban jaati (tangent nahi rehti).  \n4. Isliye, $OQ$ ki lambai circle ke radius $OP$ se badi hogi:  \n   $$\\mathbf{OQ > OP}$$  \n5. Yeh baat line $AB$ par moujood **har point $Q$ ke liye sach hai** (point $P$ ko chhodkar).  \n6. Iska matlab center $O$ se line $AB$ tak ki **sabse choti doori (shortest distance)** $OP$ hi hai!  \n7. Aur geometry ka niyam hai ki kisi point se kisi line tak ki shortest distance hamesha **Perpendicular Distance** hoti hai!  \n8. Isliye: **$OP \\perp AB$**! **[Hence Proved]**  \n\n### Pythagoras Theorem ka Connection:  \nKyunki $\\angle OPT = 90^\\circ$, $\\triangle OPT$ hamesha ek **Right-Angled Triangle** banta hai!  \n$\\bullet$ Yahan $90^\\circ$ ke samne wali side $OT$ (center se external point ki doori) **Hypotenuse** hoti hai!  \n$$\\mathbf{OT^2 = OP^2 + PT^2 \\implies PT = \\sqrt{OT^2 - r^2}}$$  \n\n### Concentric Circles (Ek hi Center Wale Do Circles) ka Magic:  \nAgar do concentric circles ke radii $R$ (bada) aur $r$ (chota) hon, aur bade circle ka chord $AB$ chote circle ko point $P$ par touch kare, toh $OP \\perp AB$. Center se chord par perpendicular chord ko bisect karta hai:  \n$$\\mathbf{AP = PB = \\sqrt{R^2 - r^2} \\implies AB = 2\\sqrt{R^2 - r^2}}$$",
      formulasOrKeyPoints: [
        {
          title: "Pythagoras with Tangents & Concentric Circles",
          content: "$$\\text{In right } \\triangle OPT: \\quad \\mathbf{OT^2 = r^2 + PT^2} \\implies \\mathbf{PT = \\sqrt{OT^2 - r^2}}$$\n$$\\text{Length of chord of larger circle touching smaller circle: } \\quad \\mathbf{AB = 2\\sqrt{R^2 - r^2}}$$",
          note: "Agar R = 5 cm aur r = 3 cm ho, toh chord AB = 2√(25 - 9) = 2√(16) = 2(4) = 8 cm!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Point of Contact par 90° ka Dabba Banao",
          action: "Jaise hi question mein radius aur tangent milein, point of contact par $90^\\circ$ ka sign banao aur likho: '$\\because$ Radius $\\perp$ Tangent (Theorem 10.1)'.",
          proTip: "Hamesha dhyan rakho: $OT$ (center se point tak ki line) Hypotenuse hoti hai, tangent hypotenuse nahi hoti!"
        }
      ],
      examinerTraps: [
        {
          trap: "Bache tangent $PT$ ko hypotenuse maan kar $PT = \\sqrt{OT^2 + r^2}$ likh dete hain.",
          correction: "Right angle point of contact $P$ par banta hai ($\angle OPT = 90^\circ$). $90^\circ$ ke theek samne wali side $OT$ hoti hai, isliye $OT$ hypotenuse hai! $PT = \\sqrt{OT^2 - r^2}$."
        }
      ]
    },
    {
      id: "theorem_10_2_hinglish",
      label: "3. Theorem 10.2: External Point se Equal Tangents ($PA = PB$)",
      heading: "Twin Tangents Theorem: Dono Tangents ki Lambai Barabar Hoti Hai",
      subheading: "RHS Congruence Proof + The 3 Golden Corollaries",
      explanation: "**Statement (Theorem 10.2)**:  \n*The lengths of tangents drawn from an external point to a circle are equal.*  \n(Kisi external point se circle par khinche gaye dono tangents ki lambai ek samaan hoti hai: $PA = PB$).  \n\n### Step-by-Step Board Proof (Guaranteed Scoring Steps):  \n**Given**: Ek circle jiska center $O$ hai. Point $P$ circle ke bahar sthit hai. $PA$ aur $PB$ do tangents hain jo circle ko $A$ aur $B$ par touch karte hain.  \n**To Prove**: $\\mathbf{PA = PB}$  \n**Construction**: $OA, OB$ aur $OP$ ko jodh do.  \n**Proof**:  \n1. $\\triangle OAP$ aur $\\triangle OBP$ mein:  \n   $\\bullet$ $\\angle OAP = \\angle OBP = 90^\\circ$ (Theorem 10.1: Radius is perpendicular to tangent at point of contact)  \n   $\\bullet$ $OP = OP$ (Common Hypotenuse)  \n   $\\bullet$ $OA = OB = r$ (Same circle ke radii)  \n2. By **RHS Congruence Criterion (Right angle-Hypotenuse-Side)**:  \n   $$\\mathbf{\\triangle OAP \\cong \\triangle OBP}$$  \n3. By CPCT (Corresponding Parts of Congruent Triangles):  \n   $$\\mathbf{PA = PB} \\quad \\textbf{[Hence Proved!]}$$  \n\n### The 3 Golden Corollaries (Har saal board mein aane wale properties):  \nIs congruence se 3 zabardast results nikalte hain:  \n1. **Center par barabar angles bante hain**: $\\mathbf{\\angle AOP = \\angle BOP}$ (by CPCT).  \n2. **Tangents ke beech ka angle bisect hota hai**: $\\mathbf{\\angle APO = \\angle BPO}$ (by CPCT). Yani line $OP$ angle $\\angle APB$ ki angle bisector hoti hai!  \n3. **Supplementary Angles (Total $180^\\circ$)**:  \n   Quadrilateral $OAPB$ mein $\\angle OAP = 90^\\circ$ aur $\\angle OBP = 90^\\circ$.  \n   Charo angles ka sum $360^\\circ$ hota hai, isliye bache hue do angles ka sum:  \n   $$\\mathbf{\\angle APB + \\angle AOB = 180^\\circ}$$  \n   *(Tangents ke beech ka angle aur radii ke beech ka angle aapas mein SUPPLEMENTARY hote hain!)*",
      formulasOrKeyPoints: [
        {
          title: "Theorem 10.2 Core Formula & 2-Second MCQ Hack",
          content: "$$\\mathbf{PA = PB}$$\n$$\\mathbf{\\angle APB + \\angle AOB = 180^\\circ \\implies \\angle AOB = 180^\\circ - \\angle APB}$$\n$$\\mathbf{\\angle APO = \\frac{1}{2} \\angle APB \\qquad \\angle AOP = \\frac{1}{2} \\angle AOB}$$",
          note: "Agar tangents ke beech ka angle ∠APB = 70° diya ho, toh center ka angle ∠AOB seedhe 180° - 70° = 110° hoga!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Congruence Reason mein RHS hi Likhna",
          action: "Theorem 10.2 ke proof mein hamesha RHS likhna. Hypotenuse ($OP$), Right angle ($90^\\circ$), aur Side ($OA=OB=r$).",
          proTip: "Kabhi bhi SSS ya SAS mat likhna jab tak theorem prove na ho gayi ho; kyunki $PA=PB$ toh prove hi karna hai!"
        }
      ],
      examinerTraps: [
        {
          trap: "Theorem 10.2 ke proof mein pehle hi $PA = PB$ use karke SSS laga dena.",
          correction: "Circular reasoning trap! $PA=PB$ hume prove karna hai, usko proof ke andar use nahi kar sakte. Sahi tarika sirf RHS congruence hai."
        }
      ]
    },
    {
      id: "circumscribed_polygons_hinglish",
      label: "4. Circumscribing Figures: Quadrilaterals & The Rhombus Proof",
      heading: "Circle ko Gherne wale Chhaturbhuj (Quadrilaterals) ke Rules",
      subheading: "$AB + CD = AD + BC$ aur Parallelogram ka Rhombus Banna",
      explanation: "Jab koi quadrilateral ya polygon circle ko gher leta hai (circumscribes a circle), toh uski har side circle par tangent ban jaati hai!  \n\n### Proof 1: Circumscribing Quadrilateral ($AB + CD = AD + BC$)  \nMaan lo quadrilateral $ABCD$ ki charo sides circle ko points $P, Q, R, S$ par touch karti hain.  \nChaar vertices $A, B, C, D$ char external points hain! Theorem 10.2 ke anusaar:  \n$$AP = AS \\quad \\text{--- (1)}$$  \n$$BP = BQ \\quad \\text{--- (2)}$$  \n$$CR = CQ \\quad \\text{--- (3)}$$  \n$$DR = DS \\quad \\text{--- (4)}$$  \nIn charo equations ko jod do:  \n$$(AP + BP) + (CR + DR) = (AS + DS) + (BQ + CQ)$$  \n$$\\mathbf{AB + CD = AD + BC} \\quad \\textbf{[Hence Proved!]}$$  \n*(Yani opposite sides ka sum hamesha barabar hota hai!)*  \n\n### Proof 2: Parallelogram Circumscribing a Circle is a RHOMBUS!  \nYeh board exam ka all-time favorite question hai:  \n1. Parallelogram mein opposite sides barabar hoti hain: $AB = CD$ aur $AD = BC$.  \n2. Upar wale result se: $AB + CD = AD + BC$.  \n3. $CD$ ki jagah $AB$ aur $BC$ ki jagah $AD$ rakh do:  \n   $$AB + AB = AD + AD \\implies 2AB = 2AD \\implies \\mathbf{AB = AD}$$  \n4. Jis parallelogram ki do adjacent (paas wali) sides barabar ho jayein, uski chaaro sides barabar ho jaati hain ($AB = BC = CD = DA$)!  \n5. Therefore: **Parallelogram ek RHOMBUS hai!** **[Hence Proved]**  \n\n### Property 3: Opposite Sides Subtend Supplementary Angles at Center  \nQuadrilateral ki opposite sides center par milkar $180^\\circ$ angle banati hain:  \n$$\\mathbf{\\angle AOB + \\angle COD = 180^\\circ} \\qquad \\mathbf{\\angle BOC + \\angle AOD = 180^\\circ}$$",
      formulasOrKeyPoints: [
        {
          title: "Circumscribed Quadrilateral Golden Rules",
          content: "$$\\mathbf{AB + CD = AD + BC} \\quad (\\text{Opposite sides sum is equal})$$\n$$\\text{If } ABCD \\text{ is a parallelogram} \\implies \\mathbf{ABCD \\text{ is a RHOMBUS}}$$\n$$\\mathbf{\\angle AOB + \\angle COD = 180^\\circ} \\quad \\text{and} \\quad \\mathbf{\\angle BOC + \\angle AOD = 180^\\circ}$$",
          note: "Agar AB = 6, BC = 7, CD = 4 diya ho, toh AD = (AB + CD) - BC = (6 + 4) - 7 = 3 cm!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Sides ko Ek Taraf Align Karna",
          action: "Equations likhte waqt dhyan do ki $AP$ aur $BP$ LHS par aane chahiye taaki jud kar $AB$ banein, aur $CR$ aur $DR$ bhi LHS par aane chahiye taaki $CD$ banein.",
          proTip: "Agar aapne $DR = DS$ ki jagah $DS = DR$ likh diya, toh terms cross ho jayenge aur add nahi honge!"
        }
      ],
      examinerTraps: [
        {
          trap: "Parallelogram proof mein Rhombus ki jagah Square conclude kar dena.",
          correction: "Circle ko circumscribe karne wala parallelogram Rhombus banta hai, Square nahi (angles 90° hona zaroori nahi hai)."
        }
      ]
    },
    {
      id: "angle_doubling_theorem_hinglish",
      label: "5. The Angle Doubling Theorem ($\\angle PTQ = 2\\angle OPQ$)",
      heading: "Board Exam ka 3-Mark Favorite: Tangent Angle vs Chord Angle",
      subheading: "Step-by-Step Proof Bina Kisi Ratte Ke",
      explanation: "**Problem Statement**:  \n*Two tangents $TP$ and $TQ$ are drawn to a circle with centre $O$ from an external point $T$. Prove that $\\mathbf{\\angle PTQ = 2 \\angle OPQ}$.*  \n\n### Iska Concept Samjho (Diagram & Logic):  \n1. External point $T$ se do tangents $TP$ aur $TQ$ nikle hain jo circle ko $P$ aur $Q$ par touch karte hain.  \n2. By Theorem 10.2, external point se tangents barabar hote hain: **$TP = TQ$**.  \n3. Isliye $\\triangle TPQ$ ek **Isosceles Triangle** hai! Iske base angles barabar honge:  \n   $$\\angle TPQ = \\angle TQP$$  \n4. Maan lo angle between tangents $\\mathbf{\\angle PTQ = \\theta}$.  \n5. $\\triangle TPQ$ ke teeno angles ka sum $180^\\circ$ hota hai:  \n   $$\\angle PTQ + \\angle TPQ + \\angle TQP = 180^\\circ \\implies \\theta + 2\\angle TPQ = 180^\\circ$$  \n   $$2\\angle TPQ = 180^\\circ - \\theta \\implies \\mathbf{\\angle TPQ = 90^\\circ - \\frac{\\theta}{2}} \\quad \\text{--- (1)}$$  \n6. Ab center se radius $OP$ ko dekho: By Theorem 10.1, radius tangent par perpendicular hoti hai:  \n   $$\\mathbf{\\angle OPT = 90^\\circ}$$  \n7. Clearly, diagram mein $\\angle OPQ$ aur $\\angle TPQ$ milkar poora $\\angle OPT$ banate hain:  \n   $$\\angle OPQ = \\angle OPT - \\angle TPQ$$  \n   $$\\angle OPQ = 90^\\circ - \\left(90^\\circ - \\frac{\\theta}{2}\\right) = 90^\\circ - 90^\\circ + \\frac{\\theta}{2} = \\mathbf{\\frac{\\theta}{2}}$$  \n8. Cross-multiply karo:  \n   $$\\theta = 2\\angle OPQ \\implies \\mathbf{\\angle PTQ = 2\\angle OPQ} \\quad \\textbf{[Hence Proved!]}$$",
      formulasOrKeyPoints: [
        {
          title: "Angle Doubling Relationship",
          content: "$$\\mathbf{\\angle PTQ = 2\\angle OPQ} \\qquad \\text{or} \\qquad \\mathbf{\\angle OPQ = \\frac{1}{2}\\angle PTQ}$$\n$$\\text{Also: } \\mathbf{\\angle OPQ = \\frac{1}{2}(180^\\circ - \\angle POQ)} = 90^\\circ - \\frac{1}{2}\\angle POQ$$",
          note: "Agar ∠PTQ = 80° hai, toh chota angle ∠OPQ seedhe 80° / 2 = 40° hoga!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Angle PTQ ko θ (Theta) Maan Lo",
          action: "Proof start karte waqt likho: 'Let $\\angle PTQ = \\theta$'. Isse calculation bilkul clean aur aasan ho jaati hai.",
          proTip: "Equations (1) aur (2) ko subtract karte waqt sign ka dhyan rakhna: $90 - (90 - \\theta/2) = +\\theta/2$."
        }
      ],
      examinerTraps: [
        {
          trap: "Bache $\\angle OPQ$ aur $\\angle OPT$ mein confuse ho jaate hain.",
          correction: "$\\angle OPT = 90^\\circ$ hota hai (Radius $\\perp$ Tangent). Lekin chord $PQ$ andar hoti hai, isliye $\\angle OPQ$ chota angle hota hai ($< 90^\\circ$)."
        }
      ]
    },
    {
      id: "inradius_and_area_boss_hinglish",
      label: "6. Right Triangle Incircle Formula aur 5-Mark Area Boss",
      heading: "The $r = \\frac{a + b - c}{2}$ Formula aur Triangle $ABC$ Heron's Challenge",
      subheading: "NCERT Exercise 10.2 Q12 ($r=4\\text{ cm}$, $BD=8$, $DC=6$) Complete Mastery",
      explanation: "Geometry ke do sabse high-level questions jo har standard paper mein aate hain:  \n\n### 1. Right Triangle mein Incircle Radius ($r$) ka Direct Formula:  \nEk right-angled triangle $ABC$ jisme $\\angle B = 90^\\circ$, sides $a, b$ aur hypotenuse $c$ hain. Iske andar bane circle ka radius $r$ hota hai:  \n$$\\mathbf{r = \\frac{a + b - c}{2} = \\frac{AB + BC - AC}{2}}$$  \n**Proof Logic**: Center $O$ se right angle vertex $B$ par tangents aur radii ek square banate hain jiska side $r$ hota hai. Vertices $A$ aur $C$ se tangent segments $c_1 = a - r$ aur $c_2 = b - r$ bante hain. Hypotenuse $c = c_1 + c_2 = a - r + b - r = a + b - 2r \\implies 2r = a + b - c \\implies r = \\frac{a+b-c}{2}$!  \n\n### 2. The 5-Mark Area Boss (NCERT Exercise 10.2 Q12):  \n*Ek triangle $ABC$ circle of radius $r = 4\\text{ cm}$ ko circumscribe karta hai. Point of contact $D$ side $BC$ ko do hisson $BD = 8\\text{ cm}$ aur $DC = 6\\text{ cm}$ mein baanta hai. Sides $AB$ aur $AC$ nikalo.*  \n\n**Full Step-by-Step Solution:**  \n1. Theorem 10.2 se tangents barabar hote hain:  \n   $\\bullet$ $CD = CE = 6\\text{ cm}$  \n   $\\bullet$ $BD = BF = 8\\text{ cm}$  \n   $\\bullet$ Maan lo $AF = AE = x\\text{ cm}$.  \n2. Triangle ki teeno sides ho gayi:  \n   $$a = BC = 6 + 8 = 14\\text{ cm}, \\quad b = AC = 6 + x, \\quad c = AB = 8 + x$$  \n3. Semi-perimeter $s$:  \n   $$s = \\frac{14 + (6 + x) + (8 + x)}{2} = \\frac{28 + 2x}{2} = \\mathbf{14 + x}$$  \n4. Triangle $ABC$ ka Area do alag tarikon se nikalo:  \n   $\\bullet$ **Tarika 1: 3 chote triangles mein tod kar**:  \n     $$\\text{ar}(\\triangle ABC) = \\text{ar}(\\triangle OBC) + \\text{ar}(\\triangle OCA) + \\text{ar}(\\triangle OAB) = \\frac{1}{2} r (a + b + c) = r \\cdot s = \\mathbf{4(14 + x)}$$  \n   $\\bullet$ **Tarika 2: Heron's Formula**:  \n     $$\\text{ar}(\\triangle ABC) = \\sqrt{s(s-a)(s-b)(s-c)} = \\sqrt{(14+x)(x)(8)(6)} = \\mathbf{\\sqrt{48x(14+x)}}$$  \n5. Dono areas ko barabar karke dono taraf square karo:  \n   $$[4(14 + x)]^2 = 48x(14 + x)$$  \n   $$16(14 + x)^2 = 48x(14 + x)$$  \n   Dono taraf $(14 + x)$ se divide karo:  \n   $$16(14 + x) = 48x \\implies 14 + x = 3x \\implies 2x = 14 \\implies \\mathbf{x = 7\\text{ cm}}$$  \n6. Sides ki lambai:  \n   $$\\mathbf{AB = 8 + x = 8 + 7 = 15\\text{ cm}}$$  \n   $$\\mathbf{AC = 6 + x = 6 + 7 = 13\\text{ cm}}$$  \n   *(Final Answer: $AB = 15\\text{ cm}, AC = 13\\text{ cm}$)*",
      formulasOrKeyPoints: [
        {
          title: "Right Triangle Inradius & Triangle Area Identity",
          content: "$$\\mathbf{r = \\frac{a + b - c}{2} = \\frac{\\text{Perpendicular} + \\text{Base} - \\text{Hypotenuse}}{2}}$$\n$$\\mathbf{\\text{Area}(\\triangle ABC) = r \\cdot s} \\quad (\\text{where } s \\text{ is semi-perimeter})$$",
          note: "Agar right triangle ki sides 6, 8, 10 cm hon, toh incircle radius r = (6 + 8 - 10)/2 = 4/2 = 2 cm hoga!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Area Equate Strategy",
          action: "Area = r·s aur Area = √(s(s-a)(s-b)(s-c)) ko equate karo. Square karne par (14+x) cancel ho jaata hai, quadratic equation solve karne ki zaroorat nahi padti!",
          proTip: "Ye trick aapke 5 minute bacha legi aur calculation mistake zero kar degi."
        }
      ],
      examinerTraps: [
        {
          trap: "$[4(14+x)]^2$ ko square karte waqt $4$ ka square bhool kar sirf $4(14+x)^2$ likhna.",
          correction: "$[4(14+x)]^2 = 4^2 \\cdot (14+x)^2 = 16(14+x)^2$. Constants ko bhi square karna zaroori hota hai!"
        }
      ]
    }
  ]
};
