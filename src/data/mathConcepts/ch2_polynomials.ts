import type { MathChapterConcept } from "./types";

export const CH2_POLYNOMIALS_CONCEPT: MathChapterConcept = {
  chapterNo: 2,
  title: "Polynomials",
  weightage: "4–5 Marks (Board Essential)",
  oneLiner: "Zeroes curve ke X-axis intersection points hote hain; Vieta ke formulas bina factorise kiye roots ko seedha coefficients se connect karte hain.",
  analogyTitle: "Cricket Shot ka Trajectory aur Ground Landing",
  analogyContent: "Imagine karo ek batsman ne ground par khade hokar ek zabardast lofted shot maara. Ball hawa mein ek smooth curve banate hue udti hai aur boundary ke paas ground par girkar bounce karti hai. Is curved path ko Mathematics mein **Parabola** ($y = ax^2 + bx + c$) kehte hain! Ball jis-jis point par ground ($y = 0$, yaani X-axis) ko chhooti ya cut karti hai, wahi us polynomial ke **Zeroes (Roots)** kehlate hain! Agar ball hawa mein hi udti rahe aur ground ko kabhi na chhue, toh $0$ real zeroes. Agar ground ko bas ek baar halka sa touch karke nikal jaaye, toh $1$ zero (repeated root). Aur agar ground ke ek point se uth kar doosre point par gire, toh $2$ distinct zeroes!",
  sections: [
    {
      id: "poly_basics",
      label: "1. What is a Polynomial? (Ground Zero se Samajho)",
      heading: "Terms, Degrees, aur Negative/Fraction Powers ka Ban",
      subheading: "Algebraic Expressions mein kaun qualify hota hai aur kaun disqualify?",
      explanation: "Polynomial do shabdon se bana hai: *Poly* (matlab Many) + *Nomial* (matlab Terms).  \nYeh ek aisa algebraic expression hota hai jisme variables (jaise $x, y$) aur real numbers (coefficients) judte, ghatte aur multiply hote hain.  \n\n### The Iron Rule of Polynomials (Board Exam Rule #1):  \n$$\\mathbf{\\text{Variable } x \\text{ ki power hamesha ek Non-Negative Whole Number } (0, 1, 2, 3, \\dots) \\text{ honi chahiye!}}$$  \n\nDekho kaun qualify karta hai aur kaun disqualify:  \n- $3x^2 + 5x - 7$: **HAAN, Polynomial hai!** (Powers hain $2, 1, 0$ — sab whole numbers hain).  \n- $\\frac{1}{x} = x^{-1}$: **NAHI! Disqualified!** (Power $-1$ negative integer hai).  \n- $\\sqrt{x} = x^{1/2}$: **NAHI! Disqualified!** (Power fraction hai, whole number nahi).  \n- $x^2 + \\frac{2}{x^2} = x^2 + 2x^{-2}$: **NAHI! Disqualified!**  \n- $\\sqrt{3}x^2 + 5x$: **HAAN, Yeh Polynomial HAI!** (Kyun? Kyunki square root constant number $3$ par laga hai, variable $x$ par nahi! Variable $x$ ki power clean $2$ aur $1$ hai).  \n\n### Degree of a Polynomial (Highest Power):  \nKisi polynomial mein variable $x$ ki jo sabse badi power (highest exponent) hoti hai, use uski **Degree** kehte hain:  \n1. **Linear Polynomial ($ax + b, \\; a \\neq 0$)**: Degree = $1$. Graph hamesha ek **Straight Line** banta hai $\\implies$ Maximum $1$ real zero.  \n2. **Quadratic Polynomial ($ax^2 + bx + c, \\; a \\neq 0$)**: Degree = $2$. Graph ek U-shaped curve (**Parabola**) banta hai $\\implies$ Maximum $2$ real zeroes.  \n3. **Cubic Polynomial ($ax^3 + bx^2 + cx + d, \\; a \\neq 0$)**: Degree = $3$. Graph ek S-shaped curve banta hai $\\implies$ Maximum $3$ real zeroes.  \n\n*Special Case*: Constant polynomial jaise $p(x) = 5$ ki degree $0$ hoti hai ($5 = 5x^0$) aur iska $0$ zero hota hai. Jabki Zero Polynomial $p(x) = 0$ ki degree undefined hoti hai aur iske infinitely many zeroes hote hain.",
      formulasOrKeyPoints: [
        {
          title: "Maximum Real Zeroes Theorem",
          content: "Kisi bhi degree $n$ ke polynomial ke **at most $n$ real zeroes** ho sakte hain (usse zyada kabhi nahi):\n$$\\text{Degree } 1 \\implies \\text{At most } 1 \\text{ zero}$$  \n$$\\text{Degree } 2 \\implies \\text{At most } 2 \\text{ zeroes}$$  \n$$\\text{Degree } 3 \\implies \\text{At most } 3 \\text{ zeroes}$$",
          note: "'At most 2' ka matlab hota hai: ya toh 2 zeroes, ya 1 zero, ya 0 real zeroes. 2 se zyada kabhi nahi ho sakte!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "MCQ Filter: Check Variable Exponents",
          action: "Expression mein har ek $x$ ko dhyan se dekho. Agar koi bhi $x$ denominator mein chhipa hai, square root $\\sqrt{\\phantom{x}}$ ke andar phasa hai, ya uski power negative/fraction hai, toh use turant eliminate kardo.",
          proTip: "Agar constant number root mein ho jaise $\\sqrt{5}x^2$, toh ghabrana mat! Coefficients real numbers ho sakte hain; bas variable $x$ root ke bahar hona chahiye."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing $\\sqrt{2}x$ with $\\sqrt{2x}$.",
          correction: "$\\sqrt{2}x = \\sqrt{2} \\cdot x^1$ (power of $x$ is 1 $\\implies$ valid polynomial). Par $\\sqrt{2x} = \\sqrt{2} \\cdot x^{1/2}$ (fraction power $\\implies$ NOT a polynomial)."
        },
        {
          trap: "Sochna ki quadratic polynomial ke hamesha 2 zeroes hi honge.",
          correction: "Hamesha 'at most 2' (zyada se zyada 2) real zeroes hote hain. Agar parabola X-axis ko touch na kare, toh 0 real zeroes bhi ho sakte hain."
        }
      ]
    },
    {
      id: "graph_zeroes",
      label: "2. Geometrical Meaning of Zeroes (The Parabola)",
      heading: "Graphs se Zeroes Pehchano Sirf 2 Seconds Mein",
      subheading: "NCERT Exercise 2.1 Master Skill: X-Axis Intersections ko Count Karna",
      explanation: "Graph par 'Zero' ka matlab kya hota hai?  \nJab hum kisi polynomial ka graph banate hain ($y = p(x)$), toh jahan-jahan graph **horizontal X-axis ($y = 0$)** ko cut karta hai ya touch karta hai, un points ke $x$-coordinates ko polynomial ke **Zeroes** kehte hain!  \n\n### Parabola ki Direction ($a$ ka sign):  \nQuadratic polynomial $y = ax^2 + bx + c$ ka graph hamesha ek Parabola banta hai:  \n- Agar $a > 0$ (Positive): Parabola **UPWARDS** open hota hai (smiling cup $\\cup$ jaisa).  \n- Agar $a < 0$ (Negative): Parabola **DOWNWARDS** open hota hai (frowning dome $\\cap$ ya inverted bowl jaisa).  \n\n### The 3 Geometric Cases for Quadratics:  \n1. **Case 1 (Two Distinct Intersections)**: Parabola X-axis ko do alag-alag points $A(\\alpha, 0)$ aur $B(\\beta, 0)$ par cut karta hai $\\implies$ **2 Distinct Real Zeroes** ($D = b^2 - 4ac > 0$).  \n2. **Case 2 (Single Touching Point)**: Parabola X-axis ko sirf ek single turning point par touch karke nikal jaata hai $\\implies$ **2 Equal Real Zeroes** yaani $1$ distinct zero ($D = 0$).  \n3. **Case 3 (No Intersection)**: Parabola X-axis ke poori tarah upar udta hai ya poori tarah neeche latakta hai $\\implies$ **0 Real Zeroes** ($D < 0$).",
      formulasOrKeyPoints: [
        {
          title: "X-Axis vs Y-Axis Golden Rule (CBSE 1-Mark MCQ)",
          content: "$$\\mathbf{\\text{Number of Zeroes of } y = p(x) = \\text{Number of times graph cuts or touches the X-axis!}}$$  \nKabhi bhi Y-axis ke intersection ko mat ginna! Y-axis wala point sirf constant term $c = p(0)$ batata hai, zeroes nahi.",
          note: "Trap Alert: Agar question mein ghoomakar $x = p(y)$ pooch liya jaaye, toh rule ulti ho jaata hai: tab Y-axis ke intersections count karne honge!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Trace with Finger Along X-Axis",
          action: "Apni ungli ko curve ke saath left se right chalao. Har baar jab curve horizontal X-axis line ko cross kare ya touch kare, ek tick mark lagao.",
          proTip: "Check question text first: $y = p(x)$ pucha hai ya $x = p(y)$? 99% time $y = p(x)$ hota hai (count X-axis)."
        }
      ],
      examinerTraps: [
        {
          trap: "Counting Y-intercept as a zero.",
          correction: "Agar curve $(3, 0)$ aur $(0, -4)$ se guzarta hai, toh zero sirf $x = 3$ hai. Point $(0, -4)$ Y-axis par hai, wo zero nahi hai!"
        }
      ]
    },
    {
      id: "vieta_relations",
      label: "3. Vieta's Formulas (Zeroes & Coefficients ka Rishta)",
      heading: "Roots aur Coefficients ke Beech ka Direct Highway",
      subheading: "Sum = -b/a, Product = c/a, aur Polynomial ka Reconstruction",
      explanation: "Agar $\\alpha$ (alpha) aur $\\beta$ (beta) kisi quadratic polynomial $p(x) = ax^2 + bx + c$ ($a \\neq 0$) ke zeroes hain, toh bina unhe factorise kiye, hum unka Sum aur Product seedha coefficients se nikal sakte hain:  \n\n### 1. Sum of Zeroes ($S$):  \n$$\\mathbf{\\alpha + \\beta = -\\frac{b}{a} = -\\frac{\\text{Coefficient of } x}{\\text{Coefficient of } x^2}}$$  \n*Minus sign yaad rakhne ki trick*: Formula mein pehle hi ek minus ($-$) laga hua hai! Agar $b$ khud negative ho (jaise $b = -6$), toh $-(-6)/a = +6/a$ ban jaata hai!  \n\n### 2. Product of Zeroes ($P$):  \n$$\\mathbf{\\alpha\\beta = \\frac{c}{a} = \\frac{\\text{Constant term}}{\\text{Coefficient of } x^2}}$$  \n\n### Reconstructing a Polynomial from Sum and Product:  \nAgar question mein tumhe zeroes ka Sum ($S$) aur Product ($P$) de rakha ho, toh poori polynomial family ka general formula hota hai:  \n$$\\mathbf{p(x) = k \\left[ x^2 - (\\alpha + \\beta)x + \\alpha\\beta \\right] = k \\left[ x^2 - Sx + P \\right]} \\quad (k \\neq 0)$$  \nJahan $k$ koi bhi non-zero real number ho sakta hai!  \n\n**$k$ ka Role (Fraction Clearer Magic)**:  \nAgar $S = \\frac{1}{4}$ aur $P = -1$ hai:  \n$$p(x) = k \\left[ x^2 - \\frac{1}{4}x - 1 \\right]$$  \nDenominator $4$ ko hatane ke liye $k = 4$ chun lo:  \n$$p(x) = 4 \\left[ x^2 - \\frac{1}{4}x - 1 \\right] = \\mathbf{4x^2 - x - 4}$$  \nKitna clean integer polynomial ban gaya!",
      formulasOrKeyPoints: [
        {
          title: "CBSE 2-Mark Standard Verification Template",
          content: "Example: Zeroes of $p(x) = x^2 - 2x - 8$ nikalo aur verify karo:  \n1. Middle term split karo: $x^2 - 4x + 2x - 8 = (x - 4)(x + 2) = 0 \\implies \\alpha = 4, \\; \\beta = -2$.  \n2. Direct calculation: Sum = $4 + (-2) = 2$, Product = $4 \\times (-2) = -8$.  \n3. Formula calculation: $-\\frac{b}{a} = -\\frac{-2}{1} = 2$, aur $\\frac{c}{a} = \\frac{-8}{1} = -8$.  \n4. Final line likho: $\\alpha + \\beta = -\\frac{b}{a}$ and $\\alpha\\beta = \\frac{c}{a}$ [Hence Verified]!",
          note: "Dono side alag-alag calculate karke barabar dikhane par hi examiner full 2 marks deta hai."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Extract Coefficients $a, b, c$ with Proper Signs",
          action: "Diye gaye polynomial ko $ax^2 + bx + c$ ke standard form mein likho. Agar terms aage-peeche hon (jaise $6x^2 - 3 - 7x$), toh pehle $6x^2 - 7x - 3$ banao!",
          proTip: "Agar $x$ wali term gayab ho (jaise $x^2 - 15$), toh $b = 0$ hota hai!"
        },
        {
          stepNo: 2,
          title: "Middle Term Factorisation Check",
          action: "Do aise numbers dhoondo jinka product $a \\times c$ ho aur sum $b$ ho. Brackets bana kar zeroes nikalo.",
          proTip: "Zeroes nikalne ke baad foran sum aur product formula se verify karlo."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing reconstructed polynomial as $x^2 + Sx + P$ instead of $x^2 - Sx + P$.",
          correction: "Middle term ke aage hamesha MINUS hota hai: $x^2 - Sx + P$."
        },
        {
          trap: "Omitting constant multiplier $k$.",
          correction: "Family of polynomials likhte waqt $k[x^2 - Sx + P], k \\neq 0$ likhna zaroori hai. CBSE marking scheme mein $k$ na likhne par 0.5 mark kat sakta hai."
        }
      ]
    },
    {
      id: "symmetric_expressions",
      label: "4. Symmetric Expressions of Roots (CBSE 3-Mark HOTS)",
      heading: "Bina Roots Nikale Complex Expressions ki Value Nikalna",
      subheading: "The 6 Must-Memorize Algebraic Transformations for Board Exams",
      explanation: "Board papers mein aksar aisa question aata hai:  \n*If $\\alpha, \\beta$ are zeroes of $2x^2 - 5x + 7$, find the value of $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$ or $\\alpha^2 + \\beta^2$.*  \n\n**SUPER WARNING**: Kabhi bhi quadratic formula laga kar individual $\\alpha$ aur $\\beta$ nikalne ki koshish MAT karna! Roots gande fractions ya imaginary roots aayenge!  \n**Smart Strategy**: Target expression ko algebraic identities ki madad se sirf aur sirf **$(\\alpha + \\beta)$** aur **$(\\alpha\\beta)$** ke terms mein convert karo, jinki values tum direct coefficients se 2 second mein likh sakte ho!",
      formulasOrKeyPoints: [
        {
          title: "The 6 Master Symmetric Identities",
          content: "**1. Sum of Squares:**  \n$$\\mathbf{\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta}$$  \n\n**2. Sum of Reciprocals:**  \n$$\\mathbf{\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta}}$$  \n\n**3. Cross-Quotient Fractions:**  \n$$\\mathbf{\\frac{\\alpha}{\\beta} + \\frac{\\beta}{\\alpha} = \\frac{\\alpha^2 + \\beta^2}{\\alpha\\beta} = \\frac{(\\alpha + \\beta)^2 - 2\\alpha\\beta}{\\alpha\\beta}}$$  \n\n**4. Difference of Zeroes:**  \n$$(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta \\implies \\mathbf{|\\alpha - \\beta| = \\sqrt{(\\alpha + \\beta)^2 - 4\\alpha\\beta}}$$  \n\n**5. Sum of Cubes:**  \n$$\\mathbf{\\alpha^3 + \\beta^3 = (\\alpha + \\beta)^3 - 3\\alpha\\beta(\\alpha + \\beta)}$$  \n\n**6. Sum of Squares of Reciprocals:**  \n$$\\mathbf{\\frac{1}{\\alpha^2} + \\frac{1}{\\beta^2} = \\frac{\\alpha^2 + \\beta^2}{(\\alpha\\beta)^2} = \\frac{(\\alpha + \\beta)^2 - 2\\alpha\\beta}{(\\alpha\\beta)^2}}$$",
          note: "Dekha? Har ek identity sirf Sum (S) aur Product (P) par depend karti hai!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Top of Page par S aur P likho",
          action: "Diye gaye polynomial se $S = -\\frac{b}{a}$ aur $P = \\frac{c}{a}$ calculate karke box bana lo.",
          proTip: "Signs ka dhyan rakhna, especially agar $b$ ya $c$ negative ho."
        },
        {
          stepNo: 2,
          title: "Identity Substitute karke Simplify karo",
          action: "Target expression ka formula likho aur $S$ tatha $P$ ki numeric values plug-in karke LCM lo.",
          proTip: "Fractions ko step-by-step simplify karo, jaldbazi mein signs mat chhodna."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing $(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta$.",
          correction: "Difference of roots mein $4\\alpha\\beta$ subtract hota hai, $2\\alpha\\beta$ nahi! $(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta$."
        }
      ]
    },
    {
      id: "special_root_conditions",
      label: "5. Special Root Conditions (Reciprocal & Opposite Sign Shortcuts)",
      heading: "1-Mark MCQ Shortcuts: Question Dekhte Hi Answer Likho",
      subheading: "Reciprocal Roots, Symmetric Zeroes, aur Signs of Roots by Inspection",
      explanation: "CBSE Section A ke MCQs mein examiners aksar 3 specific conditions par questions puchte hain:  \n\n### 1. Reciprocal Roots Condition (Ek root doosre ka ulta hai):  \nAgar ek zero $\\alpha$ hai aur doosra $\\frac{1}{\\alpha}$ hai:  \n$$\\text{Product of zeroes} = \\alpha \\times \\frac{1}{\\alpha} = 1$$  \nVieta formula se Product hota hai $\\frac{c}{a}$:  \n$$\\frac{c}{a} = 1 \\implies \\mathbf{c = a}$$  \n**Master Shortcut**: Jab bhi question bole 'roots are reciprocal to each other', **seedha Constant term ($c$) ko Coefficient of $x^2$ ($a$) ke barabar rakh do**! $1$ second mein answer aa jayega!  \n\n### 2. Equal in Magnitude but Opposite in Sign (Zeroes $\\alpha$ aur $-\\alpha$):  \nAgar ek root $3$ hai aur doosra $-3$ hai:  \n$$\\text{Sum of zeroes} = \\alpha + (-\\alpha) = 0$$  \nVieta formula se Sum hota hai $-\\frac{b}{a}$:  \n$$-\\frac{b}{a} = 0 \\implies \\mathbf{b = 0}$$  \n**Master Shortcut**: Jab roots opposite sign ke hon, **$x$ ka coefficient $b$ hamesha $0$ hoga**! Yaani polynomial mein middle term $x$ hoga hi nahi (jaise $x^2 - 9$).  \n\n### 3. Both Zeroes Strictly Negative / Positive (Inspection Rule):  \nQuadratic polynomial $ax^2 + bx + c$ mein:  \n- Agar $a, b, c$ **TEENO POSITIVE** hain:  \n  Sum $= -\\frac{b}{a} < 0$ (Negative) aur Product $= \\frac{c}{a} > 0$ (Positive).  \n  Product positive matlab dono zeroes ka sign SAME hai. Aur Sum negative matlab dono zeroes **DONO STRICTLY NEGATIVE** hain! (Repeated CBSE 2021 Term-1 MCQ!).  \n- Agar $a > 0, b < 0, c > 0$: Dono zeroes strictly **POSITIVE** honge.",
      formulasOrKeyPoints: [
        {
          title: "The 3 Golden Board Shortcuts",
          content: "$$\\mathbf{\\text{Reciprocal Roots} \\iff c = a}$$  \n$$\\mathbf{\\text{Opposite Sign Roots} \\iff b = 0}$$  \n$$\\mathbf{a, b, c > 0 \\iff \\text{Both Zeroes are Strictly Negative}}$$",
          note: "Yeh teen rules Board Exam ke Section A mein tumhare kam se kam 5 minute bachayenge!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify the Board Keyword",
          action: "Question mein 'reciprocal', 'opposite in sign', ya 'all coefficients positive' dhoondo.",
          proTip: "Agar reciprocal bole toh $c = a$ equate karo. Calculation ki koi zaroorat nahi."
        }
      ],
      examinerTraps: [
        {
          trap: "Trying to solve quadratic equation $x^2 + 99x + 127 = 0$ using quadratic formula.",
          correction: "Isme $99^2 - 4(127)$ calculate karne mat baithna! Teeno coefficients positive hain, isliye dono zeroes strictly negative honge."
        }
      ]
    },
    {
      id: "new_polynomials",
      label: "6. Constructing New Polynomials with Transformed Zeroes",
      heading: "New Sum ($S'$) aur New Product ($P'$) Master Strategy",
      subheading: "Agar nayi polynomial ke roots $2\\alpha+1, 2\\beta+1$ ya $\\frac{1}{\\alpha}, \\frac{1}{\\beta}$ hon",
      explanation: "CBSE Section C (3 Marks) ka ek bohot famous question type hai:  \n*If $\\alpha, \\beta$ are zeroes of $ax^2 + bx + c$, find a quadratic polynomial whose zeroes are $\\frac{1}{\\alpha}$ and $\\frac{1}{\\beta}$.*  \n\n### Universal 3-Step Strategy:  \n1. **Old Polynomial se $S$ aur $P$ likho**:  \n   $S = \\alpha + \\beta = -\\frac{b}{a}, \\quad P = \\alpha\\beta = \\frac{c}{a}$.  \n2. **New Zeroes ka Sum ($S'$) aur Product ($P'$) calculate karo**:  \n   $$S' = \\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\frac{-b/a}{c/a} = -\\frac{b}{c}$$  \n   $$P' = \\frac{1}{\\alpha} \\times \\frac{1}{\\beta} = \\frac{1}{\\alpha\\beta} = \\frac{1}{c/a} = \\frac{a}{c}$$  \n3. **New Polynomial form karo**:  \n   $$p'(x) = k \\left[ x^2 - S'x + P' \\right] = k \\left[ x^2 - \\left(-\\frac{b}{c}\\right)x + \\frac{a}{c} \\right] = k \\left[ x^2 + \\frac{b}{c}x + \\frac{a}{c} \\right]$$  \n   Denominator clear karne ke liye $k = c$ le lo:  \n   $$\\mathbf{p'(x) = cx^2 + bx + a}$$  \n\n**Mind-Blowing Secret**: Notice kiya? Reciprocal zeroes wali polynomial banane ke liye sirf original polynomial ke pehle ($a$) aur aakhri ($c$) coefficients ko aapas mein **SWAP (Ulta)** kar dena hota hai! Middle coefficient $b$ waisa hi rehta hai!",
      formulasOrKeyPoints: [
        {
          title: "Reciprocal Coefficients Reversal Law",
          content: "$$ax^2 + bx + c \\quad \\xrightarrow{\\text{Reciprocal Roots}} \\quad \\mathbf{cx^2 + bx + a}$$",
          note: "Exam mein derivation ke baad is rule se apna final answer 1 second mein verify karlo!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Define New Zeroes Symbolically",
          action: "Naye zeroes ko $\\alpha'$ aur $\\beta'$ maano. Phir $S' = \\alpha' + \\beta'$ aur $P' = \\alpha'\\beta'$ nikalo.",
          proTip: "Old sum aur product ki values ko fraction ke taur par carefully substitute karo."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{1}{\\alpha + \\beta}$.",
          correction: "Fractions add karte waqt common denominator lena compulsory hai: $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta}$."
        }
      ]
    },
    {
      id: "cubic_polynomials",
      label: "7. Cubic Polynomials Vieta Relations (HOTS / Standard Advance)",
      heading: "Degree 3 ke Relations aur Signs ka Alternating Pattern",
      subheading: "Sum, Pairwise Product, aur Triple Product: Minus, Plus, Minus Pattern",
      explanation: "Agar $\\alpha, \\beta, \\gamma$ (gamma) kisi cubic polynomial $p(x) = ax^3 + bx^2 + cx + d$ ($a \\neq 0$) ke 3 zeroes hain, toh unke aur coefficients ke beech 3 relations hote hain:  \n\n### 1. Sum of All Zeroes ($S_1$):  \n$$\\mathbf{\\alpha + \\beta + \\gamma = -\\frac{b}{a} = -\\frac{\\text{Coeff of } x^2}{\\text{Coeff of } x^3}}$$  \n\n### 2. Sum of Pairwise Products ($S_2$):  \n$$\\mathbf{\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = +\\frac{c}{a} = +\\frac{\\text{Coeff of } x}{\\text{Coeff of } x^3}}$$  \n\n### 3. Product of All Three Zeroes ($S_3$):  \n$$\\mathbf{\\alpha\\beta\\gamma = -\\frac{d}{a} = -\\frac{\\text{Constant term}}{\\text{Coeff of } x^3}}$$  \n\n**Sign Pattern yaad rakhne ka universal mantra**:  \nSigns hamesha alternate karte hain: **Minus ($-$), Plus ($+$), Minus ($-$)**!  \n$$\\mathbf{-\\frac{b}{a}, \\quad +\\frac{c}{a}, \\quad -\\frac{d}{a}}$$",
      formulasOrKeyPoints: [
        {
          title: "Reconstructing a Cubic Polynomial",
          content: "$$\\mathbf{p(x) = k \\left[ x^3 - (\\alpha+\\beta+\\gamma)x^2 + (\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha)x - \\alpha\\beta\\gamma \\right]}$$  \nYaani: $p(x) = k [x^3 - S_1 x^2 + S_2 x - S_3]$.",
          note: "Notice the alternating signs: minus on $x^2$, plus on $x$, minus on constant!"
        },
        {
          title: "Zeroes in AP Super Trick (3-Mark Favorite)",
          content: "Agar question kahe 'Zeroes of cubic polynomial are in Arithmetic Progression (AP)':  \nZeroes ko maano: $(a - d), \\; a, \\; (a + d)$.  \nUnka sum hoga: $(a - d) + a + (a + d) = 3a = -\\frac{b}{a}$.  \nIsse middle zero $a$ ek hi step mein bahar nikal aata hai!",
          note: "NCERT Exemplar aur RS Aggarwal ka yeh evergreen favorite question hai."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Check Order of Powers",
          action: "Cubic polynomial ko standard form $ax^3 + bx^2 + cx + d$ mein align karo. Agar koi power miss ho (jaise $x^2$ term na ho), toh uska coefficient $0$ hoga.",
          proTip: "Sign pattern $(-), (+), (-)$ hamesha rough margin mein likh lo taaki sign error na ho."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing $\\alpha\\beta\\gamma = \\frac{d}{a}$ without negative sign.",
          correction: "Constant term par teesra sign lagta hai jo MINUS hota hai: $\\alpha\\beta\\gamma = -\\frac{d}{a}$."
        }
      ]
    }
  ]
};
