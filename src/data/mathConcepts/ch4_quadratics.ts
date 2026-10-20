import type { MathChapterConcept } from "./types";

export const CH4_QUADRATICS_CONCEPT: MathChapterConcept = {
  chapterNo: 4,
  title: "Quadratic Equations",
  weightage: "6 Marks (Board Mandatory)",
  oneLiner: "Discriminant D = b² - 4ac root ka x-ray radar hai; Sridharacharya formula har quadratic equation ko guaranteed solve karta hai jab middle-term splitting fail ho jaye.",
  analogyTitle: "Model Rocket ka Launch aur Ground Landing",
  analogyContent: "Jab koi aerospace engineer ek model rocket ko ground se launch karta hai, toh hawa mein uski unchai (height) samay ke saath ek parabolic curve banati hai: $h(t) = -gt^2 + vt + h_0$. Ab agar engineer ko yeh pata lagana ho ki rocket wapas ground ko kab chhuega ($h = 0$), toh use solve karni padti hai ek **Quadratic Equation**! Launch se pehle hi **Discriminant** ($D = b^2 - 4ac$) ek radar ki tarah bata deta hai ki kya hoga:  \n1. Agar $D > 0$, toh rocket ground ko do baar touch karega (ek baar launch par, ek baar landing par).  \n2. Agar $D = 0$, toh rocket ground ko bas ek touch karke turant uth jayega (repeated real root).  \n3. Agar $D < 0$, toh rocket hawa mein hi rahega aur real ground ko kabhi touch nahi karega (no real roots)!",
  sections: [
    {
      id: "quadratic_basics",
      label: "1. What is a Quadratic Equation? (Anatomy & Standard Form)",
      heading: "Standard Form $ax^2 + bx + c = 0$ ($a \\neq 0$) ka Sach",
      subheading: "Roots vs Zeroes + Quadratic Status ki Pehchan",
      explanation: "Variable $x$ mein kisi bhi quadratic equation ka universal standard form hota hai:  \n$$\\mathbf{ax^2 + bx + c = 0} \\qquad (a, b, c \\in \\mathbb{R}, \\; \\mathbf{a \\neq 0})$$  \n\n### $a \\neq 0$ hona kyun Zaroori hai?  \nAgar $a = 0$ ho gaya, toh $x^2$ wali term gayab ho jayegi! Bacha kucha equation $bx + c = 0$ ban jayega jo ki **Linear** hai, quadratic nahi! Isliye $x^2$ ka coefficient $a$ kabhi bhi zero nahi ho sakta.  \n\n### Roots vs Zeroes mein kya farq hai?  \n- Jab expression polynomial form mein likha ho: $p(x) = ax^2 + bx + c$, toh jin values par $p(x) = 0$ hota hai, unhe **Zeroes** kehte hain.  \n- Jab wahi expression equation form mein equate ho jaye: $ax^2 + bx + c = 0$, toh unhi values ko **Roots** ya **Solutions** kaha jaata hai!  \nHar quadratic equation ke **zyada se zyada 2 real roots** ho sakte hain.",
      formulasOrKeyPoints: [
        {
          title: "Standard Form Descending Order Rule",
          content: "$$\\mathbf{ax^2 + bx + c = 0}$$  \nHamesha powers ko ghadte kram (descending order) mein likho: pehle $x^2$ term, phir $x$ term, phir constant number, aur RHS par strictly $0$.",
          note: "Agar question mein brackets hon jaise $(x - 2)^2 + 1 = 2x - 3$, toh pehle brackets kholo: $x^2 - 4x + 4 + 1 = 2x - 3 \\implies x^2 - 6x + 8 = 0$ (Yes, quadratic hai!)."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "MCQ Alert: Expand Completely Before Answering",
          action: "Bina brackets khole kabhi mat bolna ki equation quadratic hai ya nahi. Cube $(x+1)^3$ aur squares ko poora expand karo.",
          proTip: "Dekho: $(x+2)^3 = x^3 - 4$ expand karne par $x^3 + 6x^2 + 12x + 8 = x^3 - 4$ banata hai. Yahan $x^3$ dono taraf se cancel ho jaata hai aur $6x^2 + 12x + 12 = 0$ bachta hai — yeh QUADRATIC HAI!"
        }
      ],
      examinerTraps: [
        {
          trap: "Assuming $x(x+1) + 8 = (x+2)(x-2)$ is quadratic because of $x \\times x$.",
          correction: "Expand karo: $x^2 + x + 8 = x^2 - 4$. Yahan $x^2$ dono taraf se cancel ho gaya! Bacha $x + 12 = 0$, jo ki LINEAR hai, quadratic nahi!"
        }
      ]
    },
    {
      id: "factorisation_method",
      label: "2. Solving by Factorisation (Middle Term Splitting)",
      heading: "Product $a \\cdot c$ aur Sum $b$ ka Infallible Rule",
      subheading: "Square Roots wale middle terms ko split karne ki technique",
      explanation: "$ax^2 + bx + c = 0$ ko factorise karne ke 5 steps:  \n1. Pehle $x^2$ ke coefficient $a$ ko constant $c$ se multiply karo: calculate **$P = a \\cdot c$**.  \n2. Do aise numbers $p$ aur $q$ dhoondo jinka:  \n   $$\\mathbf{p \\cdot q = a \\cdot c} \\qquad \\text{aur} \\qquad \\mathbf{p + q = b}$$  \n3. Middle term ko split karo: $bx = px + qx$.  \n4. Do-do terms ke jode bana kar common nikalo: $(x - r_1)(x - r_2) = 0$.  \n5. **Zero Product Rule**: Agar do cheezon ka multiplication zero hai ($A \\cdot B = 0$), toh ya toh $A = 0$ hoga ya $B = 0$!",
      formulasOrKeyPoints: [
        {
          title: "Square Root Middle Terms (Board Exam ka Super-Hit Question)",
          content: "Example: Solve $\\sqrt{2}x^2 + 7x + 5\\sqrt{2} = 0$.  \n1. Product $a \\cdot c = \\sqrt{2} \\times 5\\sqrt{2} = 5 \\times 2 = 10$.  \n2. Sum $b = 7$. Numbers mile $5$ aur $2$ (kyunki $5 \\times 2 = 10$ aur $5 + 2 = 7$).  \n3. Split karo: $\\sqrt{2}x^2 + 2x + 5x + 5\\sqrt{2} = 0$.  \n4. Common nikalo (Mantra: $2 = \\sqrt{2} \\cdot \\sqrt{2}$):  \n   $$\\sqrt{2}x(x + \\sqrt{2}) + 5(x + \\sqrt{2}) = 0$$  \n   $$(x + \\sqrt{2})(\\sqrt{2}x + 5) = 0 \\implies \\mathbf{x = -\\sqrt{2}} \\quad \\text{or} \\quad \\mathbf{x = -\\frac{5}{\\sqrt{2}}}$$",
          note: "Yeh question CBSE Board mein 4 baar aa chuka hai! Hamesha yaad rakho ki kisi bhi integer ko do baar root likha ja sakta hai: $2 = \\sqrt{2}\\sqrt{2}, 3 = \\sqrt{3}\\sqrt{3}$."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Signs ko Pehle Hi Lock Karo",
          action: "Agar $a \\cdot c > 0$ positive hai, toh dono numbers ka sign SAME hoga. Agar $a \\cdot c < 0$ negative hai, toh ek number positive aur ek negative hoga (bade number ko $b$ wala sign milega).",
          proTip: "Is sign rule se trial-and-error ka samay 90% kam ho jaata hai."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing the roots as $p$ and $q$ without changing signs.",
          correction: "Agar factors $(x - 3)(x + 5) = 0$ hain, toh roots $x = +3$ aur $x = -5$ honge. Factors ko zero se equate karke sign change karna mat bhoolna!"
        }
      ]
    },
    {
      id: "quadratic_formula",
      label: "3. Sridharacharya Quadratic Formula",
      heading: "The Universal Weapon: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
      subheading: "Completing the square se derivation aur calculation protocol",
      explanation: "Jab numbers bohot bade hon ya middle-term splitting aasaani se na soojhe, toh ancient Indian mathematician **Sridharacharya** ka Quadratic Formula bina ruke 100% exact roots deta hai:  \n\n$$\\mathbf{x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}}$$  \n\n### Where does this formula come from? (Completing the Square):  \n$$ax^2 + bx + c = 0 \\implies x^2 + \\frac{b}{a}x = -\\frac{c}{a}$$  \nDono taraf $\\left(\\frac{b}{2a}\\right)^2$ jod do:  \n$$x^2 + 2\\left(\\frac{b}{2a}\\right)x + \\left(\\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2} - \\frac{c}{a} = \\frac{b^2 - 4ac}{4a^2}$$  \n$$\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2 - 4ac}{4a^2}$$  \nDono taraf square root lo:  \n$$x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a} \\implies \\mathbf{x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}}$$",
      formulasOrKeyPoints: [
        {
          title: "The 3-Step Execution Protocol",
          content: "**Step 1: Calculate Discriminant $D$ Separately**  \n$$D = b^2 - 4ac$$  \n\n**Step 2: Inspect Nature of Roots**  \n- Agar $D < 0$, yahin ruk jao aur likho: *'No real roots exist ($D < 0$)'*. Tumhare 5 minute bach gaye!  \n\n**Step 3: Calculate the Roots**  \n- Agar $D \\ge 0$, toh formula mein plug karo:  \n$$x_1 = \\frac{-b + \\sqrt{D}}{2a}, \\qquad x_2 = \\frac{-b - \\sqrt{D}}{2a}$$",
          note: "Hamesha D ko pehle alag line mein calculate karo! Isse formula ke andar complicated roots likhne se bachte ho."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Brackets around negative b",
          action: "Agar $b = -6$ hai, toh $-b = -(-6) = +6$ banega. Formula mein $-(-6)$ zaroor likho taaki sign flip na bhoole.",
          proTip: "Denominator $2a$ poore numerator ke neeche hota hai, sirf root ke neeche nahi!"
        }
      ],
      examinerTraps: [
        {
          trap: "Writing fraction bar only under $\\sqrt{D}$: $-b \\pm \\frac{\\sqrt{D}}{2a}$.",
          correction: "Denominator $2a$ divides BOTH $-b$ and $\\sqrt{D}$! Poore numerator ke neeche horizontal line honi chahiye: $\\frac{-b \\pm \\sqrt{D}}{2a}$."
        },
        {
          trap: "Squaring a negative $b$ and writing a negative number (e.g. $(-5)^2 = -25$).",
          correction: "Kisi bhi real number ka square hamesha POSITIVE hota hai: $(-5)^2 = +25$."
        }
      ]
    },
    {
      id: "nature_of_roots",
      label: "4. Nature of Roots & The Discriminant Radar ($D = b^2 - 4ac$)",
      heading: "Roots Real hain, Equal hain, ya Gayab hain?",
      subheading: "The 3 Cases of Discriminant aur Parameter 'k' ke High-Yield Questions",
      explanation: "Quadratic equation $ax^2 + bx + c = 0$ ke roots ki nature poori tarah **Discriminant** ($D = b^2 - 4ac$) par depend karti hai:  \n\n### 1. Case 1: $D > 0$ (Positive) $\\implies$ Two Distinct Real Roots  \nSquare root $\\sqrt{D}$ ek real number hoga, isliye do alag-alag answers milenge:  \n$$x_1 = \\frac{-b + \\sqrt{D}}{2a} \\quad \\text{and} \\quad x_2 = \\frac{-b - \\sqrt{D}}{2a}$$  \nGeometrically: Parabola X-axis ko do alag-alag points par cut karta hai.  \n\n### 2. Case 2: $D = 0$ (Zero) $\\implies$ Two Real and Equal Roots  \nJab $D = 0$, toh $\\pm \\sqrt{0} = 0$ ho jaata hai, isliye dono roots barabar ho jaate hain:  \n$$\\mathbf{x = -\\frac{b}{2a}, \\quad -\\frac{b}{2a}}$$  \nGeometrically: Parabola X-axis ko sirf ek single vertex point par touch karke nikalta hai.  \n\n### 3. Case 3: $D < 0$ (Negative) $\\implies$ No Real Roots  \nNegative number ka square root real numbers mein exist nahi karta!  \nGeometrically: Parabola X-axis se upar hawa mein udta hai ya neeche latakta hai, X-axis ko kabhi touch nahi karta.",
      formulasOrKeyPoints: [
        {
          title: "Finding 'k' for Equal Roots (Guaranteed Board Question)",
          content: "Problem: For what value of $k$ does $kx(x - 2) + 6 = 0$ have equal roots?  \n1. Standard form: $kx^2 - 2kx + 6 = 0 \\implies a = k, \\; b = -2k, \\; c = 6$.  \n2. For equal roots: $D = b^2 - 4ac = 0$.  \n   $$(-2k)^2 - 4(k)(6) = 0 \\implies 4k^2 - 24k = 0$$  \n3. Factorise: $4k(k - 6) = 0 \\implies k = 0 \\text{ or } k = 6$.  \n4. **CRITICAL TRAP CHECK**:  \n   Agar $k = 0$ ho gaya, toh original equation ban jayegi: $0x^2 - 0x + 6 = 0 \\implies 6 = 0$ (which is nonsense and not quadratic!).  \n   Since $a \\neq 0$, we must have $\\mathbf{k \\neq 0}$.  \n$$\\mathbf{\\text{Therefore, } k = 6 \\text{ only!}}$$",
          note: "CBSE exams mein lagbhag 40% students 'k = 0 or 6' likh kar aate hain aur unka 1 mark kat jaata hai! Always discard k = 0."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify a, b, c from standard form",
          action: "Agar brackets hon toh pehle expand karo (jaise $kx(x-2)$ ko $kx^2 - 2kx$).",
          proTip: "Check condition $a \\neq 0$ right at the start."
        }
      ],
      examinerTraps: [
        {
          trap: "Accepting $k = 0$ when $k$ is the coefficient of $x^2$.",
          correction: "By definition of quadratic equation, leading coefficient $a$ cannot be zero. If $k = 0$ makes $a = 0$, it must be rejected."
        }
      ]
    },
    {
      id: "word_problems_modeling",
      label: "5. Quadratic Word Problems (Speed-Time, Water Taps, Areas)",
      heading: "Real-World Situations ko Quadratic Equation mein Dhalna",
      subheading: "Physical constraints se negative roots ko reject karne ka rule",
      explanation: "Quadratic word problems 3 main categories mein aate hain:  \n\n### 1. Speed, Distance, Time (Train Delay / Flight Headwind)  \nFormula: $\\text{Time} = \\frac{\\text{Distance}}{\\text{Speed}}$.  \nJab speed badhti hai, toh samay kam lagta hai!  \n$$\\frac{\\text{Distance}}{\\text{Normal Speed } (s)} - \\frac{\\text{Distance}}{\\text{Increased Speed } (s + 10)} = \\text{Time Difference}$$  \n*Golden Rule*: Hamesha chhota speed (slow) pehle aayega, kyunki slow chalne par time BADA hota hai! Bade time mein se chhota time subtract karne par hi positive time difference aayega!  \n\n### 2. Work & Time (Two Water Taps Filling a Tank)  \nLet smaller tap takes $x$ hours to fill tank alone.  \nLarger tap has larger diameter, takes $10$ hours less: $(x - 10)$ hours.  \nIn 1 hour: Smaller tap fills $\\frac{1}{x}$, Larger tap fills $\\frac{1}{x - 10}$.  \n$$\\frac{1}{x} + \\frac{1}{x - 10} = \\frac{1}{\\text{Total Time Taken Together}}$$  \n\n### 3. Geometric Dimensions & Right Triangles  \nRight triangle problems use Pythagoras theorem:  \n$$\\text{Base}^2 + \\text{Altitude}^2 = \\text{Hypotenuse}^2$$  \n\n### The Physical Discard Rule:  \nQuadratic equations solve hokar hamesha 2 roots deti hain (aksar ek positive aur ek negative).  \nReal world mein **Speed, Time, Age, aur Length kabhi negative nahi ho sakte**!  \nExaminer ke samne explicitly likho: *'Since speed cannot be negative, $x = -40$ is rejected. Therefore, $x = 50\\text{ km/h}$.'*",
      formulasOrKeyPoints: [
        {
          title: "Speed-Time Order Rule",
          content: "$$\\mathbf{\\frac{\\text{Distance}}{\\text{Slow Speed}} - \\frac{\\text{Distance}}{\\text{Fast Speed}} = \\text{Time Difference}}$$",
          note: "Kabhi bhi fast speed pehle mat likhna, warna time negative aa jayega!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "State units and discard reasons explicitly",
          action: "Har word problem ke aakhri step mein unit likho (km/h, hours, meters).",
          proTip: "CBSE marking guidelines mein negative root reject karne ka reason likhne par 0.5 marks allocated hote hain."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing $\\frac{360}{s+5} - \\frac{360}{s} = 1$.",
          correction: "$\\frac{360}{s}$ is the LARGER time (slow journey takes more time). The larger quantity must come first: $\\frac{360}{s} - \\frac{360}{s+5} = 1$."
        }
      ]
    }
  ]
};
