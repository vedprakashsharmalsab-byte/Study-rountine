import type { MathChapterConcept } from "./types";

export const CH3_LINEAR_EQUATIONS_CONCEPT: MathChapterConcept = {
  chapterNo: 3,
  title: "Pair of Linear Equations in Two Variables",
  weightage: "6–7 Marks (High Scoring Board Mandatory)",
  oneLiner: "Do seedhi lines plane par ya toh ek baar cross karengi, ya hamesha parallel chalengi, ya ek ke upar ek overlap hongi; Coefficients ke Ratios unka fate pehle hi bata dete hain.",
  analogyTitle: "Map par Do High-Speed Train Tracks",
  analogyContent: "Imagine karo ek flat satellite map par do high-speed bullet trains ke seedhe railway tracks bichhe hue hain: Track 1 ($a_1x + b_1y + c_1 = 0$) aur Track 2 ($a_2x + b_2y + c_2 = 0$). Ab socho in dono tracks ke saath sirf 3 hi batein ho sakti hain:  \n1. **Crossing Junction (Unique Solution)**: Agar dono tracks ki dhalan (slope) alag-alag hai, toh wo aage chalkar poore map par kisi **sirf ek single junction point** par cross karenge!  \n2. **Parallel Tracks (No Solution)**: Agar dono tracks bilkul barabar doori banaye huye ek hi direction mein daudte hain, toh wo anant tak kabhi nahi milenge — yaani dono mein koi common station nahi hoga!  \n3. **Overlapping Single Track (Infinitely Many Solutions)**: Agar doosra track pehle track ke theek upar bana diya gaya ho, toh track ka har ek centimeter common hoga — anant junctions!",
  sections: [
    {
      id: "lines_geometry",
      label: "1. The Geometry of Linear Equations (Ground Zero se)",
      heading: "Linear Equation hamesha ek Seedhi Line kyun banati hai?",
      subheading: "Variables, Solutions, aur Graph plotting ka basic funda",
      explanation: "Two variables $x$ aur $y$ mein kisi bhi linear equation ka standard form hota hai:  \n$$\\mathbf{ax + by + c = 0} \\quad (a^2 + b^2 \\neq 0)$$  \nJahan $a, b, c$ real numbers hote hain aur $a, b$ dono ek saath zero nahi ho sakte.  \nIs equation ko satisfy karne wala har ek point $(x, y)$ Cartesian plane par ek **bilkul seedhi line (Straight Line)** par baithta hai.  \n\n### Pair (System) of Linear Equations:  \nJab hum do lines ko ek saath consider karte hain:  \n$$L_1: a_1x + b_1y + c_1 = 0 \\qquad L_2: a_2x + b_2y + c_2 = 0$$  \nToh is system ke **Solution** ka matlab hota hai: Ek aisa common point $(x, y)$ jo **dono equations ko ek saath satisfy kare**! Geometrically, yeh wahi point hota hai jahan dono lines aapas mein milti (intersect karti) hain.",
      formulasOrKeyPoints: [
        {
          title: "Standard Form Alignment Rule (Rule #1)",
          content: "$$\\begin{aligned} L_1 &: a_1x + b_1y + c_1 = 0 \\\\\\\\ L_2 &: a_2x + b_2y + c_2 = 0 \\end{aligned}$$",
          note: "Ratios compare karne se pehle dono constants $c_1$ aur $c_2$ ko ya toh dono ko LHS par rakho, ya dono ko RHS par! Ek LHS aur ek RHS par hua toh sign ulti ho jayegi!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Graph Plotting ke Liye 2 Clean Points Nikalo",
          action: "Pehle $x = 0$ daal kar Y-intercept nikalo: $y = -\\frac{c}{b}$. Phir $y = 0$ daal kar X-intercept nikalo: $x = -\\frac{c}{a}$.",
          proTip: "Hamesha whole numbers choose karne ki koshish karo taaki graph sheet par fraction plot na karna pade."
        }
      ],
      examinerTraps: [
        {
          trap: "Comparing ratios when constant terms are on opposite sides (e.g. $2x + 3y = 7$ and $4x + 6y + 14 = 0$).",
          correction: "Pehle standardise karo: $2x + 3y - 7 = 0$ aur $4x + 6y + 14 = 0$. Ratios dekho: $a_1/a_2 = 2/4 = 1/2$, jabki $c_1/c_2 = -7/14 = -1/2$. Yeh barabar NAHI hain! Lines parallel hain, coincident nahi!"
        }
      ]
    },
    {
      id: "consistency_matrix",
      label: "2. The Ratio Consistency Matrix (5-Second Decider)",
      heading: "Bina Graph Banaye Ratios dekh kar Fate predict karna",
      subheading: "Intersecting vs Parallel vs Coincident Lines ka Universal Table",
      explanation: "Kisi bhi algebraic method ko shuru karne se pehle sirf 3 ratios calculate karo: $\\frac{a_1}{a_2}, \\frac{b_1}{b_2}, \\frac{c_1}{c_2}$:  \n\n### 1. Case 1: Intersecting Lines (Unique Solution & Consistent)  \n$$\\mathbf{\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}}$$  \nDono lines ki slopes alag-alag hain. Wo ek doosre ko **sirf ek point $(x, y)$** par kaatengi. Is system ko **Consistent** kehte hain.  \n\n### 2. Case 2: Coincident Lines (Infinitely Many Solutions & Dependent Consistent)  \n$$\\mathbf{\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}}$$  \nDono equations asal mein ek hi line hain (sirf kisi number se multiply ki hui hain)! Dono lines ek ke upar ek overlap ho jaati hain. Har ek point solution hai $\\implies$ **Infinitely Many Solutions**. Is system ko **Dependent Consistent** kehte hain.  \n\n### 3. Case 3: Parallel Lines (No Solution & Inconsistent)  \n$$\\mathbf{\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}}$$  \nDono lines ki slope barabar hai par unka y-intercept alag hai. Wo dono hamesha parallel chalengi aur kabhi nahi milengi $\\implies$ **No Solution (Zero Solutions)**. Is system ko **Inconsistent** kehte hain.",
      formulasOrKeyPoints: [
        {
          title: "The Master 3-Way Board Classification Table",
          content: "$$\\begin{array}{|c|c|c|c|} \\hline \\textbf{Ratio Condition} & \\textbf{Graphical Meaning} & \\textbf{Number of Solutions} & \\textbf{System Status} \\\\[6pt] \\hline \\dfrac{a_1}{a_2} \\neq \\dfrac{b_1}{b_2} & \\text{Intersecting Lines} & \\text{Exactly 1 (Unique)} & \\text{Consistent} \\\\[8pt] \\hline \\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} = \\dfrac{c_1}{c_2} & \\text{Coincident Lines} & \\text{Infinitely Many} & \\text{Dependent Consistent} \\\\[8pt] \\hline \\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} \\neq \\dfrac{c_1}{c_2} & \\text{Parallel Lines} & \\text{Zero (No Solution)} & \\text{Inconsistent} \\\\[6pt] \\hline \\end{array}$$",
          note: "Dhyan do: 'Consistent' shabd ka matlab hota hai 'kam se kam ek solution moojood hai'. Isliye Unique solution aur Infinitely many solutions dono Consistent kehlate hain!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Write Coefficients in Fractional Lowest Terms",
          action: "Signs ke saath coefficients uthao: $a_1/a_2$ aur $b_1/b_2$ likho.",
          proTip: "Agar pehle do ratios hi barabar na aayein ($a_1/a_2 \\neq b_1/b_2$), toh teesra ratio $c_1/c_2$ nikalne ki zaroorat hi nahi hai! Seedha Unique Solution likho."
        }
      ],
      examinerTraps: [
        {
          trap: "Thinking a system can have 'exactly two solutions'.",
          correction: "Do seedhi lines ya toh 0 baar milengi, ya 1 baar milengi, ya infinitely many baar milengi. 'Exactly 2 solutions' straight lines mein physically IMPOSSIBLE hai!"
        }
      ]
    },
    {
      id: "parameter_k_mastery",
      label: "3. Finding Parameter 'k' Problems (CBSE 3-Mark Favorite)",
      heading: "No Solution aur Infinite Solutions ke Parameter Problems",
      subheading: "Inequality Check ka Dangerous Trap jahan 80% students fas te hain",
      explanation: "CBSE board mein har saal Section B ya C mein ek question zaroor aata hai:  \n*Find the value of $k$ for which the system has NO SOLUTION (or Infinitely Many Solutions).*  \n\n### The Golden 3-Step Protocol for 'No Solution':  \n1. **Condition Likhna (0.5 Marks)**:  \n   $$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$$  \n2. **Pehle do ratios se $k$ nikalna (1.5 Marks)**:  \n   $$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\implies \\text{Cross-multiply and solve for } k$$  \n3. **Teesre Inequality ratio ko VERIFY karna (1.0 Mark — The Trap Zone!)**:  \n   Jo $k$ ki value aayi, use check karo: kya wo sach mein $\\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$ ko satisfy karti hai?  \n   *Agar kisi $k$ ki wajah se teesra ratio bhi barabar ho gaya, toh wo value REJECT karni padegi, kyunki wo infinite solutions bana degi, no solution nahi!*",
      formulasOrKeyPoints: [
        {
          title: "Real Worked Board Example: Find $k$ for No Solution",
          content: "System: $kx + 3y = k - 3$ aur $12x + ky = k$  \n1. Standard form: $a_1 = k, b_1 = 3, c_1 = -(k-3)$; $a_2 = 12, b_2 = k, c_2 = -k$.  \n2. For no solution: $\\frac{k}{12} = \\frac{3}{k} \\neq \\frac{-(k-3)}{-k} = \\frac{k-3}{k}$.  \n3. From first two: $k^2 = 36 \\implies k = 6 \\text{ or } k = -6$.  \n4. Check with inequality:  \n   - If $k = 6$: $\\frac{3}{6} = \\frac{1}{2}$, jabki $\\frac{6-3}{6} = \\frac{3}{6} = \\frac{1}{2}$. Yahan toh **teeno barabar ho gaye!** So $k = 6$ gives Infinite Solutions $\\implies \\mathbf{k = 6 \\text{ is REJECTED!}}$  \n   - If $k = -6$: $\\frac{3}{-6} = -\\frac{1}{2}$, jabki $\\frac{-6-3}{-6} = \\frac{-9}{-6} = \\frac{3}{2}$. Yahan $-\\frac{1}{2} \\neq \\frac{3}{2}$ True hai!  \n$$\\mathbf{\\text{Final Answer: } k = -6}$$",
          note: "Dekha? Agar student inequality check na karta toh wo k = ±6 likh deta aur uska 1 mark kat jaata!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Always check the third inequality",
          action: "Candidate values nikalne ke baad foran inequality mein plug karo.",
          proTip: "Agar question mein 'Infinite Solutions' pucha ho, toh teeno ratios ko aapas mein barabar hona chahiye."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing $k = \\pm 6$ without discarding $k = 6$.",
          correction: "k = 6 makes all three ratios equal to 1/2, giving coincident lines (infinitely many solutions). Only k = -6 gives parallel lines (no solution)."
        }
      ]
    },
    {
      id: "algebraic_methods",
      label: "4. Master Algebraic Methods: Elimination & Substitution",
      heading: "Zero-Mistake Execution: Elimination Method vs Substitution",
      subheading: "Middle signs cancel karne ka smart tareeka aur verification",
      explanation: "Graph sheet par plotting mein scale aur pencil ki motai se errors ho sakte hain, lekin Algebraic methods se exact fraction/integer answer nikalta hai:  \n\n### The Elimination Method (CBSE Examiners ka Most Recommended Method):  \n1. Dono equations ko dekho aur us variable ko chun lo jiske coefficients chhote hain (maan lo $y$).  \n2. Pehli equation ko doosri ke coefficient se, aur doosri ko pehli ke coefficient se multiply karo taaki $y$ ke aage ka number bilkul SAME ho jaye!  \n3. **Sign Check**:  \n   - Agar $y$ ke signs **ALAG-ALAG (+ aur -)** hain, toh dono equations ko **ADD (Jod)** do! Addition mein koi sign mistake nahi hoti!  \n   - Agar $y$ ke signs **SAME (+ aur + ya - aur -)** hain, toh **SUBTRACT (Ghata)** do.  \n4. Ek variable foran gayab ho jayega! Dusre variable ki value nikalo.  \n5. Use kisi bhi original equation mein daal kar pehla variable nikal lo.",
      formulasOrKeyPoints: [
        {
          title: "Elimination Blueprint Example",
          content: "Solve: $2x + 3y = 11$ aur $3x + 2y = 4$  \n1. Eq 1 ko 3 se multiply karo: $6x + 9y = 33$  \n2. Eq 2 ko 2 se multiply karo: $6x + 4y = 8$  \n3. Subtract karo: $(6x - 6x) + (9y - 4y) = 33 - 8 \\implies 5y = 25 \\implies \\mathbf{y = 5}$  \n4. $y = 5$ ko Eq 1 mein rakho: $2x + 3(5) = 11 \\implies 2x = 11 - 15 = -4 \\implies \\mathbf{x = -2}$  \n$$\\mathbf{(x, y) = (-2, 5)}$$",
          note: "Answer aane ke baad dono equations mein plug karke mann mein 5 second mein verify karlo: 2(-2) + 3(5) = -4 + 15 = 11 [Correct!]"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Pick the variable with opposite signs",
          action: "Agar ek mein $+y$ aur doosre mein $-y$ ho, toh $y$ ko hi target karo taaki equations ADD ho sakein.",
          proTip: "Addition mein students 0% mistakes karte hain, jabki subtraction mein negative bracket kholte waqt 40% students sign ulta kar dete hain."
        }
      ],
      examinerTraps: [
        {
          trap: "Subtracting equations without changing signs of ALL terms.",
          correction: "Jab equation subtract karo, toh poori lower equation ke har term ke neeche pencil se naya inverted sign likho (+ ko -, aur - ko +)."
        }
      ]
    },
    {
      id: "symmetric_cross_coefficients",
      label: "5. Symmetric Cross-Coefficients Trick (Add Once, Subtract Once)",
      heading: "Bade Gande Numbers ($152x - 378y$): Multiply Kare Bina Kaise Solve Karein?",
      subheading: "Jab $x$ aur $y$ ke coefficients aapas mein diagonal swapped hon",
      explanation: "Board exam mein kabhi-kabhi examiners bohot bade numbers dete hain jo dekhne mein daraawne lagte hain:  \n$$152x - 378y = -74 \\qquad -378x + 152y = -604$$  \nAgar tum yahan cross-multiplication ya 152 aur 378 se multiply karne baith gaye, toh tumhare 20 minute waste ho jayenge aur calculation mistake pakka hogi!  \n\n### The Magic 'Add Once, Subtract Once' Weapon:  \nNotice karo: Pehli equation mein jo $x$ ke saath hai ($152$), wo doosri equation mein $y$ ke saath hai! Aur jo pehli mein $y$ ke saath hai ($-378$), wo doosri mein $x$ ke saath hai!  \nJab bhi coefficients aise diagonally swapped hon:  \n\n1. **Step 1: Dono Equations ko ADD karo!**  \n   $$(152 - 378)x + (-378 + 152)y = -74 - 604$$  \n   $$-226x - 226y = -678$$  \n   Divide both sides by $-226$:  \n   $$\\mathbf{x + y = 3} \\quad \\text{--- (Super Simple Eq 3!)}$$  \n\n2. **Step 2: Dono Equations ko SUBTRACT karo!**  \n   $$(152 - (-378))x + (-378 - 152)y = -74 - (-604)$$  \n   $$530x - 530y = 530$$  \n   Divide both sides by $530$:  \n   $$\\mathbf{x - y = 1} \\quad \\text{--- (Super Simple Eq 4!)}$$  \n\n3. **Step 3: Eq 3 aur Eq 4 ko add kardo!**  \n   $$(x + y) + (x - y) = 3 + 1 \\implies 2x = 4 \\implies \\mathbf{x = 2}$$  \n   $$y = 3 - 2 = \\mathbf{1}$$  \n   Poora sawal sirf 1 minute mein bina kisi badi calculation ke khatam!",
      formulasOrKeyPoints: [
        {
          title: "Diagonal Swapped Coefficients Rule",
          content: "$$\\begin{aligned} ax + by &= c \\\\\\\\ bx + ay &= d \\end{aligned} \\implies \\begin{cases} \\text{Add: } (a+b)x + (a+b)y = c+d \\implies x + y = \\dfrac{c+d}{a+b} \\\\[6pt] \\text{Subtract: } (a-b)x - (a-b)y = c-d \\implies x - y = \\dfrac{c-d}{a-b} \\end{cases}$$",
          note: "Yeh CBSE Class 10 Standard Mathematics ka ek permanent favorite question type hai."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Recognize Cross Symmetry",
          action: "Check karo: kya pehli ka $a$ doosri ka $b$ hai? Agar haan, toh foran Add + Subtract method lagao.",
          proTip: "Numbers chahe 3-digit ke hon, divide karne par hamesha clean integer $1, 2, 3$ aayega!"
        }
      ],
      examinerTraps: [
        {
          trap: "Trying standard elimination by multiplying 152 and 378 directly.",
          correction: "Never multiply large swapped coefficients! Always add the equations first, then subtract them."
        }
      ]
    },
    {
      id: "word_problems_playbook",
      label: "6. Word Problems Master Archetypes (Board High-Yield)",
      heading: "The 5 Universal CBSE Word Problem Blueprints",
      subheading: "Boats, Two-Digit Numbers, Ages, Fixed Charges, and Fractions",
      explanation: "CBSE Board exam ke Section D (4/5 Marks) mein aane wale word problems 5 specific archetypes mein aate hain:  \n\n### 1. Type A: Upstream & Downstream Boat Speeds (Highest Frequency!)  \nLet speed of boat in still water $= x\\text{ km/h}$, and speed of stream $= y\\text{ km/h}$.  \n- **Downstream (Dhara ke saath)**: Paani boat ko aage dhakelta hai $\\implies$ Speed $= \\mathbf{x + y}$.  \n- **Upstream (Dhara ke khilaaf)**: Paani boat ko peeche dhakelta hai $\\implies$ Speed $= \\mathbf{x - y}$.  \nFormula: $\\text{Time} = \\frac{\\text{Distance}}{\\text{Speed}}$.  \n$$\\frac{d_1}{x - y} + \\frac{d_2}{x + y} = \\text{Total Time}$$  \n*Iron Rule*: Hamesha $x > y$ hona chahiye! Boat ki speed stream se zyada honi hi chahiye, warna boat beh jayegi!  \n\n### 2. Type B: Two-Digit Number Interchange Problems  \nLet tens digit $= x$, and units digit $= y$.  \n$$\\mathbf{\\text{Original Number} = 10x + y} \\qquad \\mathbf{\\text{Reversed Number} = 10y + x}$$  \n*Trap Alert*: Number ko kabhi $xy$ mat likhna! Algebra mein $xy = x \\times y$ hota hai. 47 ka matlab $4 \\times 10 + 7$ hota hai, isliye $10x + y$ likhte hain!  \n\n### 3. Type C: Age Problems (Time Travel)  \nLet present age of father $= x$, and son $= y$.  \n- $n$ years ago (pehle): Father $= x - n$, Son $= y - n$.  \n- $n$ years hence / later (baad mein): Father $= x + n$, Son $= y + n$.  \n\n### 4. Type D: Fixed Charge + Running Charges (Taxi / Library)  \nLet fixed charge $= x$, and per-km (or per-day) charge $= y$.  \n$$\\text{Total Bill} = x + (\\text{Distance})y$$  \n\n### 5. Type E: Fraction Problems  \nLet the required fraction be $\\frac{x}{y}$ ($y \\neq 0$). Question ke according numerator ($x$) aur denominator ($y$) mein add/subtract karo.",
      formulasOrKeyPoints: [
        {
          title: "Upstream / Downstream 5-Second Verification Shortcut",
          content: "$$\\mathbf{\\text{Speed of Boat in Still Water } x = \\frac{\\text{Downstream Speed} + \\text{Upstream Speed}}{2}}$$  \n$$\\mathbf{\\text{Speed of Stream } y = \\frac{\\text{Downstream Speed} - \\text{Upstream Speed}}{2}}$$",
          note: "Paper mein answer aane ke baad is shortcut se apna answer 5 second mein cross-check karo!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Define Variables with Explicit Units First",
          action: "Shuruat hamesha statement se karo: 'Let the speed of the boat in still water be $x\\text{ km/h}$ and speed of stream be $y\\text{ km/h}$.'",
          proTip: "CBSE marking scheme mein variables ko units ke saath define karne par 0.5 marks milte hain."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing upstream speed as $y - x$ instead of $x - y$.",
          correction: "Boat speed $x$ MUST be larger than stream speed $y$. Upstream is strictly $x - y$."
        },
        {
          trap: "Writing two-digit number as $xy$ instead of $10x + y$.",
          correction: "Place-value notation demands $10x + y$! $xy$ means multiplication."
        }
      ]
    },
    {
      id: "reducible_equations",
      label: "7. Equations Reducible to Linear Form (Variables in Denominator)",
      heading: "The $u = \\frac{1}{x+y}$ and $v = \\frac{1}{x-y}$ 2-Stage Master Trick",
      subheading: "Denominators ke fractions ko clean linear form mein convert karna",
      explanation: "Jab variables denominator mein phanse hote hain:  \n$$\\frac{10}{x + y} + \\frac{2}{x - y} = 4 \\qquad \\frac{15}{x + y} - \\frac{5}{x - y} = -2$$  \n\n**FATAL MISTAKE**: Kabhi bhi $(x+y)$ aur $(x-y)$ ka direct LCM lene ki koshish MAT karna! Wahan $x^2 - y^2$ ban jayega jo non-linear quadratic ban kar impossible ho jayega!  \n\n### The 2-Stage Substitution Algorithm:  \n1. **Stage 1 (Linear Substitution)**:  \n   Maan lo $u = \\frac{1}{x + y}$ aur $v = \\frac{1}{x - y}$.  \n   Equations simple linear ban gayi:  \n   $$10u + 2v = 4 \\qquad 15u - 5v = -2$$  \n2. Elimination se $u$ aur $v$ solve karo:  \n   Multiply Eq 1 by 5 and Eq 2 by 2:  \n   $$50u + 10v = 20 \\qquad 30u - 10v = -4$$  \n   Add karo: $80u = 16 \\implies \\mathbf{u = \\frac{1}{5}}$.  \n   Substitute karke: $10(1/5) + 2v = 4 \\implies 2 + 2v = 4 \\implies \\mathbf{v = 1}$.  \n3. **Stage 2 (Invert back to $x$ and $y$)**:  \n   $$x + y = \\frac{1}{u} = 5 \\qquad x - y = \\frac{1}{v} = 1$$  \n   Add both: $2x = 6 \\implies \\mathbf{x = 3}$.  \n   Substitute: $3 + y = 5 \\implies \\mathbf{y = 2}$!  \n$$\\mathbf{(x, y) = (3, 2)}$$",
      formulasOrKeyPoints: [
        {
          title: "The 2-Stage Substitution Rule",
          content: "$$\\frac{a}{x+y} + \\frac{b}{x-y} = c \\implies au + bv = c \\quad \\text{where } u = \\frac{1}{x+y}, \\; v = \\frac{1}{x-y}$$",
          note: "Stage 1 mein u, v milta hai; Stage 2 mein x, y milta hai. Dono stages complete karna mandatory hai."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Explicitly Define New Variables",
          action: "Sheet par saaf-saaf likho: 'Let $\\frac{1}{x+y} = u$ and $\\frac{1}{x-y} = v$'.",
          proTip: "Remember: Solution tab tak adhoora hai jab tak final $x$ aur $y$ na nikal jaye!"
        }
      ],
      examinerTraps: [
        {
          trap: "Stopping after finding $u = 1/5$ and $v = 1$.",
          correction: "Question ne $x$ aur $y$ pucha tha! $u$ aur $v$ par rukne se 5 mein se 2 marks kat jayenge. Invert karke $x$ aur $y$ nikalo!"
        }
      ]
    }
  ]
};
