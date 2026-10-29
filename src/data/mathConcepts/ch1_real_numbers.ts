import type { MathChapterConcept } from "./types";

export const CH1_REAL_NUMBERS_CONCEPT: MathChapterConcept = {
  chapterNo: 1,
  title: "Real Numbers",
  weightage: "6 Marks (Board Mandatory — 1 MCQ + 1 SA/VSA + 1 Proof / Case Study)",
  oneLiner: "Real Numbers ka DNA: Prime factorisation se HCF/LCM, Contradiction se Irrationality proof, aur 2^m · 5^n se Decimal termination!",
  analogyTitle: "Lego Blocks, Finger Counting aur Number Line ka Safar",
  analogyContent: "Imagine karo ek 5 saal ka bachha jo pehli baar counting seekh raha hai. Pehle wo ungliyon pe ginta hai: 1, 2, 3... Phir usse pata chalta hai ki agar toffees khatam ho jayein toh '0' bhi hota hai! Phir bade hokar jab udhar (debt) ya barf ka minus temperature dekhta hai, toh negative numbers aate hain. Phir jab pizza ya roti ke tukde hote hain, toh fractions (Rational numbers) aate hain. Aur aakhir mein kuch aise ziddi numbers aate hain jo kabhi fraction mein bandh hi nahi sakte (Irrational numbers jaise $\\sqrt{2}, \\sqrt{3}, \\pi$). Jab hum in sabhi numbers ko ek bade bag mein bhar lete hain, toh banti hai hamari **Real Numbers Line** — jismein ek bhi chhed ya gap nahi hota! Ye chapter maths ka foundation stone hai jo tumhe Class 10 board exam mein pure 6/6 guaranteed marks dilayega.",
  sections: [
    {
      id: "number_family",
      label: "1. The Number Family Tree from Absolute Ground Zero",
      heading: "Counting Apples se lekar Infinite Real Line tak ka Safar",
      subheading: "Natural → Whole → Integers → Rational → Irrational → Real Numbers (Zero to Hero)",
      explanation: "Agar maths mein 100/100 score karna hai, toh sabse pehle numbers ka khandaan (Family Tree) crystal clear hona chahiye. Chalo step-by-step samajhte hain ekdam aasan bhasha mein:\n\n" +
        "### 1. Natural Numbers ($\\mathbb{N}$) — Counting Numbers\n" +
        "Jab bhi tum kisi cheez ko count karte ho, hamesha 1 se start karte ho: $1, 2, 3, 4, 5, \\dots$\n" +
        "- Isme **Zero (0) NAHI hota**.\n" +
        "- Isme koi negative number ya decimal nahi hota.\n" +
        "- Smallest natural number = $1$.\n\n" +
        "### 2. Whole Numbers ($\\mathbb{W}$) — Zero Added!\n" +
        "Socho tumhare paas 5 chocolates thi, aur tumne paancho kha li. Ab tumhare paas kitni bachi? Zero ($0$)!\n" +
        "- Natural numbers mein bas $0$ ko shamil kar lo: $0, 1, 2, 3, 4, \\dots$\n" +
        "- $\\mathbb{W} = \\{0\\} \\cup \\mathbb{N}$.\n" +
        "- Har natural number ek whole number hai, par har whole number natural nahi hai (kyunki $0$ natural nahi hai).\n\n" +
        "### 3. Integers ($\\mathbb{Z}$) — Negatives, Zero & Positives (Poore Numbers!)\n" +
        "Ab socho real life situations:\n" +
        "- Agar tumhare dost ne tumse ₹10 udhar (debt) liye, toh uske account mein kya likhoge? $-\\text{₹}10$.\n" +
        "- Kashmir mein sardi mein temperature 0 se bhi neeche chala gaya: $-5^\\circ\\text{C}$.\n" +
        "- Mall ki lift ground floor se basement mein gayi: Floor $-1, -2$.\n" +
        "Toh humein negative numbers ki zaroorat padi!  \n" +
        "**Integers ka matlab hai SARE POORE NUMBERS (No fractions, no decimals!):**  \n" +
        "$$\\dots, -4, -3, -2, -1, 0, 1, 2, 3, 4, \\dots$$  \n" +
        "- Positive Integers: $1, 2, 3, 4, \\dots$  \n" +
        "- Negative Integers: $-1, -2, -3, -4, \\dots$  \n" +
        "- Zero ($0$): Na positive hai na negative, ye neutral boundary hai!  \n" +
        "- *Golden Rule*: $2.5$ ya $\\frac{3}{4}$ integer **NAHI** hain! Integers hamesha poore-poore hote hain.\n\n" +
        "### 4. Rational Numbers ($\\mathbb{Q}$) — Fractions & Terminating/Repeating Decimals\n" +
        "'Rational' word ka root word hai **'RATIO'**!  \n" +
        "Jab hum kisi cheez ke tukde karte hain (jaise ek pizza ke 4 slices mein se 1 slice = $\\frac{1}{4}$), toh fractions bante hain.  \n" +
        "**Definition**: Har wo number jise hum $\\frac{p}{q}$ ki form mein likh sakte hain, jahan:\n" +
        "1. $p$ aur $q$ dono **Integers** hone chahiye.\n" +
        "2. Niche wala denominator $q \\neq 0$ hona chahiye!  \n" +
        "*(Kyunki kisi bhi number ko $0$ se divide karna mathematically impossible ya Not Defined hota hai!).*  \n\n" +
        "**Examples of Rationals:**\n" +
        "- Normal fractions: $\\frac{1}{2}, -\\frac{3}{5}, \\frac{7}{4}$\n" +
        "- Integers as rationals: $5 = \\frac{5}{1}, -8 = \\frac{-8}{1}$\n" +
        "- Zero as rational: $0 = \\frac{0}{1}$ (Board MCQ: Zero is a rational number!)\n" +
        "- Terminating decimals: $0.75 = \\frac{75}{100} = \\frac{3}{4}$\n" +
        "- Recurring repeating decimals: $0.333\\dots = 0.\\bar{3} = \\frac{1}{3}$\n\n" +
        "### 5. Irrational Numbers — Jo Kabhi Fraction Na Ban Sakein!\n" +
        "Ye wo ziddi numbers hain jinhe tum chahe jitna zor laga lo, kabhi clean fraction $\\frac{p}{q}$ mein NAHI likh sakte!  \n" +
        "Inki pehchan unke decimal expansion se hoti hai:  \n" +
        "1. **Non-terminating**: Decimal ke baad digits kabhi rukte nahi hain (infinite tak chalte hain).  \n" +
        "2. **Non-repeating (Non-recurring)**: Digits ka koi fix loop ya pattern repeat nahi hota!  \n\n" +
        "**Examples:**\n" +
        "- Non-perfect square roots: $\\sqrt{2} = 1.41421356\\dots$, $\\sqrt{3} = 1.7320508\\dots$, $\\sqrt{5}, \\sqrt{7}$\n" +
        "- Non-perfect cube roots: $\\sqrt[3]{2}, \\sqrt[3]{5}$\n" +
        "- Mathematical constant $\\pi = 3.14159265\\dots$ (Board Trap alert: $\\frac{22}{7}$ sirf ek approximate calculation value hai, $\\pi$ khud strictly irrational hai!).\n\n" +
        "### 6. Real Numbers ($\\mathbb{R}$) — The Grand Universe!\n" +
        "Duniya ke saare Rational numbers aur saare Irrational numbers ko ek giant bag mein daal do!  \n" +
        "$$\\mathbf{\\text{Real Numbers } (\\mathbb{R}) = \\text{Rational Numbers } (\\mathbb{Q}) \\cup \\text{Irrational Numbers}}$$  \n" +
        "Real Number Line ka har ek single point — chahe wo $0$ ho, $2$ ho, $-3.5$ ho, ya $\\sqrt{2} = 1.414...$ ho — ek Real Number hota hai! Number line pe koi bhi gap ya khali jagah nahi bachti.",
      formulasOrKeyPoints: [
        {
          title: "The Hierarchy Chain (Container Model)",
          content: "$$\\mathbf{\\mathbb{N} \\subset \\mathbb{W} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}}$$  \n- Har Natural number Whole number hai.  \n- Har Whole number Integer hai.  \n- Har Integer Rational number hai (denominator 1 rakh kar).  \n- Har Rational aur Irrational number ek Real number hai!",
          note: "Examiner Assertion-Reason trap: 'Every real number is a rational number' is FALSE! (Because $\\sqrt{2}$ is real but not rational)."
        },
        {
          title: "Co-Prime Numbers — The Heart of Class 10 Proofs",
          content: "Do positive integers $a$ aur $b$ ko **Co-Prime** tab bolte hain jab unka Highest Common Factor sirf aur sirf $1$ ho:  \n$$\\mathbf{\\text{HCF}(a, b) = 1}$$  \n- Matlab dono ke beech $1$ ke alawa koi dusra common dost (factor) nahi hai!  \n- **Super Important**: Co-prime hone ke liye numbers ka khud prime hona zaroori nahi hai!  \n  *Example*: $4 = 2^2$ (composite) aur $9 = 3^2$ (composite). Lekin $\\text{HCF}(4, 9) = 1$, isliye $4$ aur $9$ aapas mein **CO-PRIME** hain!",
          note: "Ye definition ratne ki zaroorat nahi hai, bas yaad rakho: Agar $a$ aur $b$ fraction $\\frac{a}{b}$ ke simplest lowest form mein hain, toh wo co-prime hain!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Spot Rational vs Irrational Instantly",
          action: "Agar root ke andar perfect square hai jaise $\\sqrt{4} = 2$, $\\sqrt{25} = 5$, $\\sqrt{0.09} = 0.3$, toh wo RATIONAL hai! Agar root ke andar non-perfect square hai jaise $\\sqrt{2}, \\sqrt{3}, \\sqrt{5}, \\sqrt{8}$, toh wo strictly IRRATIONAL hai.",
          proTip: "Dekho ki kya root cancel ho raha hai? Jaise $\\frac{\\sqrt{12}}{\\sqrt{3}} = \\sqrt{\\frac{12}{3}} = \\sqrt{4} = 2$ — ye rational ban gaya!"
        }
      ],
      examinerTraps: [
        {
          trap: "Sochna ki $\\pi$ rational hai kyunki hum $\\pi = 22/7$ use karte hain.",
          correction: "Board Exam Golden Fact: $\\pi$ strictly IRRATIONAL hai! $22/7$ sirf calculation aasan karne ke liye ek approximate fraction hai. $\\pi$ ki exact value kabhi repeat nahi hoti."
        },
        {
          trap: "Sochna ki 1 prime number hai.",
          correction: "1 na toh prime hai aur na hi composite! Prime numbers 2 se start hote hain ($2, 3, 5, 7, 11...$). Smallest prime number is 2, aur 2 hi ekmatra EVEN prime number hai!"
        }
      ]
    },
    {
      id: "fundamental_theorem",
      label: "2. Fundamental Theorem of Arithmetic & Prime Factorisation",
      heading: "Numbers ka Unique DNA & $6^n, 4^n, 12^n$ Ending with 0 ka Secret",
      subheading: "Har Composite Number = Unique Primes ka Multiplication (Lego Blocks Model)",
      explanation: "Jab hum chemistry mein molecules ko todte hain toh atoms milte hain. Theek waise hi, maths mein jab kisi composite number ko todte hain toh **Prime Numbers** milte hain!  \n\n" +
        "### The Fundamental Theorem of Arithmetic (Theorem 1.1)\n" +
        "**Kanoon kya kehta hai?**  \n" +
        "*Har composite number ko hum prime numbers ke product ke roop mein express kar sakte hain, aur ye factorisation UNIQUE (anokha) hota hai, chahe tum primes ko kisi bhi order mein likho!*\n\n" +
        "**Real Life Example:**  \n" +
        "Maan lo number hai $60$.  \n" +
        "- Rahul ne factorise kiya: $60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$.  \n" +
        "- Priya ne pehle 5 se kiya: $60 = 5 \\times 3 \\times 2 \\times 2 = 2^2 \\times 3 \\times 5$.  \n" +
        "Dono ka answer exactly same aaya! 2 hamesha do baar aayega, 3 ek baar, aur 5 ek baar. Duniya ka koi bhi mathematician $60$ ke prime factors badal nahi sakta. Ye $60$ ka **Aadhaar Card / DNA code** hai!\n\n" +
        "### Board Favorite Question 1: Check whether $6^n, 4^n, 12^n$ can end with digit 0\n" +
        "**Logic ekdam aasan bhasha mein:**  \n" +
        "Koi bhi number last mein '0' kab deta hai? Jab wo $10$ se divide ho sake!  \n" +
        "Aur $10$ kis se banta hai? $10 = 2 \\times 5$.  \n" +
        "Matlab kisi number ke aakhri mein 0 aane ke liye uske prime factors mein **2 aur 5 DONO ka hona compulsory hai**!\n\n" +
        "- $6^n = (2 \\times 3)^n = 2^n \\times 3^n$. Iske paas 2 toh hai, par **5 missing hai**!\n" +
        "- $4^n = (2^2)^n = 2^{2n}$. Iske paas sirf 2 hai, **5 missing hai**!\n" +
        "- $12^n = (2^2 \\times 3)^n = 2^{2n} \\times 3^n$. Iske paas 2 aur 3 hai, **5 missing hai**!\n" +
        "- Fundamental Theorem bolta hai prime factorisation unique hai, matlab 5 kabhi aa hi nahi sakta.\n" +
        "- Therefore, $6^n, 4^n, 12^n$ can NEVER end with the digit 0 for any natural number $n$!\n\n" +
        "### Board Favorite Question 2: Prove that $7 \\times 11 \\times 13 + 13$ is Composite\n" +
        "Kayi students pura multiply karne lag jaate hain — ye galti mat karna!  \n" +
        "Bas common factor bahar nikaalo:  \n" +
        "$$7 \\times 11 \\times 13 + 13 = 13 \\times (7 \\times 11 + 1) = 13 \\times (77 + 1) = 13 \\times 78$$  \n" +
        "Since is number ke paas 1 aur khud ke alawa bhi factors hain (jaise 13 aur 78 = $2 \\times 3 \\times 13$), by definition ye ek **Composite Number** hai! [Full Marks]",
      formulasOrKeyPoints: [
        {
          title: "Prime Power Standard Form",
          content: "$$\\mathbf{N = p_1^{a_1} \\cdot p_2^{a_2} \\cdot p_3^{a_3} \\cdots p_k^{a_k}}$$  \nJahan $p_1 < p_2 < p_3$ ascending order mein distinct primes hain aur exponents $a_i \\ge 1$ hain.",
          note: "Example: $144 = 2^4 \\times 3^2$. Exponents ka sum = $4 + 2 = 6$ (CBSE 2020 MCQ standard question)."
        },
        {
          title: "Unit Digit 0 Rule",
          content: "$$\\mathbf{N \\text{ ends with digit } 0 \\iff 10 \\mid N \\iff 2 \\text{ and } 5 \\text{ both are prime factors of } N}$$",
          note: "4^n = (2^2)^n = 2^{2n} has only prime factor 2 (no 5). Hence 4^n also never ends with 0."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Factor Tree Banana",
          action: "Hamesha sabse chhote prime number (2) se start karo. Jab tak even hai 2 se divide karo, fir 3 check karo (sum of digits rule), fir 5, fir 7, fir 11, fir 13, fir 17.",
          proTip: "Divisibility checks: Sum of digits multiple of 3 $\\implies$ divisible by 3. Last digit 0 or 5 $\\implies$ divisible by 5."
        }
      ],
      examinerTraps: [
        {
          trap: "$6^n$ wale question mein $n=1, 2, 3$ rakh kar check karna ($6^1=6, 6^2=36$) aur kehna 0 nahi aaya.",
          correction: "CBSE marking scheme mein ispar 0 marks milenge! Tumhe theorem quote karni hogi: 'By Fundamental Theorem of Arithmetic, factorisation is unique and 5 is not present'."
        }
      ]
    },
    {
      id: "hcf_lcm_mastery",
      label: "3. HCF & LCM Powers Rule & The Golden Product Relation",
      heading: "Smallest vs Highest Powers & Kab HCF Nikalein aur Kab LCM?",
      subheading: "HCF(a, b) × LCM(a, b) = a × b (Only for 2 numbers!) + Real-Life Word Problems",
      explanation: "Class 10 mein HCF aur LCM nikalne ka Prime Factorisation method sabse powerful aur fast method hai. Aao iska super simple funda samajhte hain:\n\n" +
        "### 1. HCF (Highest Common Factor) — 'Chhota Bheem Rule'\n" +
        "- HCF sirf unhi primes ko dekhta hai jo **DONO / SABHI numbers mein COMMON** hon!\n" +
        "- Aur un common primes ki **SABSE CHHOTI POWER (Minimum Exponent)** uthata hai!\n" +
        "- Formally: Product of the smallest powers of each common prime factor.\n\n" +
        "### 2. LCM (Lowest Common Multiple) — 'Lalchi Rule (Sab Kuch Chahiye!)'\n" +
        "- LCM kisi bhi prime ko nahi chhodta! Jo prime kisi ek mein bhi aaya ho, wo LCM mein aayega.\n" +
        "- Aur sabhi primes ki **SABSE BADI POWER (Maximum Exponent)** uthata hai!\n" +
        "- Formally: Product of the greatest powers of all prime factors involved.\n\n" +
        "**Concrete Example se Dekho:**  \n" +
        "Maan lo do numbers hain:  \n" +
        "$$p = a^3 \\cdot b^2 \\cdot c^1 \\quad \\text{aur} \\quad q = a^1 \\cdot b^4 \\cdot d^2$$  \n" +
        "- **HCF(p, q)**: Common kaun hain? Sirf $a$ aur $b$. Chhoti power kaunsi hai? $a^1$ aur $b^2$.  \n" +
        "  $$\\mathbf{\\text{HCF} = a^1 b^2}$$\n" +
        "- **LCM(p, q)**: Saare primes uthao ($a, b, c, d$) badi powers ke saath: $a^3, b^4, c^1, d^2$.  \n" +
        "  $$\\mathbf{\\text{LCM} = a^3 b^4 c d^2}$$\n\n" +
        "### 3. The Golden Relationship for TWO Numbers\n" +
        "Agar do positive integers $a$ aur $b$ hain, toh unke HCF aur LCM ka product hamesha un dono numbers ke product ke barabar hoga:  \n" +
        "$$\\mathbf{\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b}$$  \n" +
        "- Is relation se agar 4 cheezon mein se koi 3 pata hon, toh chauthi 5 second mein nikal aati hai!  \n" +
        "- **CAUTION (Board ka Favourite Trap)**: Ye formula sirf aur sirf **DO (2) numbers** ke liye valid hai! Teen numbers ($a, b, c$) ke liye $\\text{HCF} \\times \\text{LCM} \\neq a \\times b \\times c$.\n" +
        "  *Proof by Counter-example*: Take $6, 8, 12$. $\\text{HCF} = 2, \\text{LCM} = 24$. Product of $\\text{HCF} \\times \\text{LCM} = 48$. But product of numbers = $6 \\times 8 \\times 12 = 576 \\neq 48$!\n\n" +
        "### 4. Word Problems Decoded: HCF Kab Nikalein aur LCM Kab?\n" +
        "Questions padh kar bacche confuse ho jaate hain. Ye 2 golden rules hamesha yaad rakhna:\n\n" +
        "| Situation / Clue | Question ki Demand | Kya Nikaalna Hai? |\n" +
        "| :--- | :--- | :--- |\n" +
        "| **Chhoti quantity / Division** | Doodh ke tin containers ko barabar naapne wala **sabse bada container** (maximum capacity); Barfi ki stacks banana; Floor par square tiles lagana taaki koi space na bache; Marching contingent columns. | **HCF nikaalo!** (Kyunki container ya column size diye gaye numbers se chhota hoga jo dono ko poora divide kare). |\n" +
        "| **Badi quantity / Synchronization** | 3 Ghantiyan (Bells) alag-alag interval pe bajti hain, **agali baar ek saath kab bajengi**? Runners circular track par dobara starting point pe kab milenge? Traffic lights kab ek saath change hongi? | **LCM nikaalo!** (Kyunki agla milne ka time diye gaye intervals se bada hoga, jo sabhi ka common multiple hoga). |",
      formulasOrKeyPoints: [
        {
          title: "The Divisibility Invariant",
          content: "$$\\mathbf{\\text{HCF}(a, b) \\text{ MUST completely divide } \\text{LCM}(a, b)}$$  \nMatlab $\\frac{\\text{LCM}}{\\text{HCF}}$ hamesha ek pure Integer aana chahiye!  \n*Example Question*: Kya do numbers ka HCF 15 aur LCM 175 ho sakta hai?  \n*Answer*: Divide karke dekho: $175 / 15 = 11.66$ (remainder bacha 10). Since 15 does not divide 175, **NO, two numbers cannot have HCF 15 and LCM 175**! (Guaranteed 1-mark board question).",
          note: "Agar HCF ne LCM ko divide nahi kiya, toh aisa number pair universe mein exist hi nahi kar sakta."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Prime Exponent Table Format",
          action: "Dono numbers ko exponential form mein likho ek ke neeche ek (powers align karke).",
          proTip: "Jaise $72 = 2^3 \\times 3^2$ aur $120 = 2^3 \\times 3^1 \\times 5^1$. Ab HCF ke liye $\\min$ power: $2^3 \\times 3^1 = 24$. LCM ke liye $\\max$ power: $2^3 \\times 3^2 \\times 5^1 = 360$."
        }
      ],
      examinerTraps: [
        {
          trap: "3 numbers wale question mein $\\text{LCM} = \\frac{a \\times b \\times c}{\\text{HCF}}$ likhna.",
          correction: "3 numbers ka HCF aur LCM hamesha individual prime factor powers se nikaalo! Product formula 3 numbers ke liye fail ho jata hai."
        }
      ]
    },
    {
      id: "irrationality_proof",
      label: "4. Proving √2, √3, √5 are Irrational (Contradiction Method)",
      heading: "CBSE Board ka Guaranteed 3-Mark Proof — Step-by-Step Template",
      subheading: "Theorem 1.2 ($p \\mid a^2 \\implies p \\mid a$) + Answer Sheet Ready Presentation",
      explanation: "CBSE Board exam mein Section C mein ek question 100% har saal aata hai: **'Prove that $\\sqrt{5}$ (or $\\sqrt{3}$ or $\\sqrt{2}$) is irrational'**.  \n\nIska proof direct nahi ho sakta, isliye hum use karte hain **Proof by Contradiction** (Ulta Maankar Galat Saabit Karne Ka Tareeka!).  \n\n### Contradiction Method Ki Kahani:\n1. **Pehle Ulta Maano**: Hum maan lete hain ki $\\sqrt{5}$ ek Rational number hai. Toh isse fraction $\\frac{a}{b}$ mein likha ja sakta hai, jahan $a$ aur $b$ **Co-prime** hain (matlab dono mein 1 ke alawa koi common factor nahi hai).\n2. **Maths ke Rules Follow Karo**: Dono taraf square karo aur dekho kya hota hai.\n3. **Kahani Mein Twist (Contradiction)**: Calculation aisi mod leti hai ki prove ho jata hai ki $5$ divide karta hai $a$ ko bhi, aur $5$ divide karta hai $b$ ko bhi!  \n   *Lekin ruko!* Humne toh shuru mein bola tha ki $a$ aur $b$ co-prime hain, unka koi common factor nahi hai! Yahan toh dono ka common factor 5 nikal aaya!\n4. **Final Punchline**: Ye jhooth / contradiction kyun aayi? Kyunki humne shuru mein galat mana tha ki $\\sqrt{5}$ rational hai. Hence, $\\sqrt{5}$ is IRRATIONAL! [Proved]\n\n### The Engine Behind the Proof: Theorem 1.2\n**Theorem**: *Agar $p$ ek prime number hai aur $p$ divide karta hai $a^2$ ko, toh $p$ divide karega $a$ ko bhi (jahan $a$ ek positive integer hai).*  \n**Kyun?** Kyunki jab tum kisi number $a$ ka square karte ho, toh uske prime factors ki powers bas double hoti hain, koi naya prime factor paida nahi hota! Agar $p$ number $a^2$ mein hai, toh wo original number $a$ mein pehle se hi moojood tha!",
      formulasOrKeyPoints: [
        {
          title: "CBSE Topper Answer Sheet Blueprint: Prove that √5 is Irrational",
          content: "**Step 1: Assumption & Co-prime Condition (0.5 Marks)**  \nLet us assume, to the contrary, that $\\sqrt{5}$ is a rational number.  \nTherefore, we can find coprime integers $a$ and $b$ ($b \\neq 0$) such that:  \n$$\\sqrt{5} = \\frac{a}{b} \\quad \\text{where } \\mathbf{\\text{HCF}(a, b) = 1}$$\n\n**Step 2: Squaring & Showing 5 divides a (1.0 Mark)**  \nSquaring both sides:  \n$$5 = \\frac{a^2}{b^2} \\implies \\mathbf{a^2 = 5b^2} \\quad \\text{--- (Equation 1)}$$  \nThis shows that $5$ divides $a^2$.  \nBy Theorem 1.2, since $5$ is a prime number:  \n$$\\mathbf{5 \\text{ divides } a} \\quad \\text{--- (Statement A)}$$\n\n**Step 3: Substitution & Showing 5 divides b (1.0 Mark)**  \nSince $5$ divides $a$, we can write $\\mathbf{a = 5c}$ for some integer $c$.  \nSubstituting $a = 5c$ into Equation 1:  \n$$(5c)^2 = 5b^2 \\implies 25c^2 = 5b^2 \\implies \\mathbf{b^2 = 5c^2}$$  \nThis shows that $5$ divides $b^2$.  \nTherefore, by Theorem 1.2:  \n$$\\mathbf{5 \\text{ divides } b} \\quad \\text{--- (Statement B)}$$\n\n**Step 4: Contradiction & Conclusion (0.5 Marks)**  \nFrom Statement A and Statement B, $5$ is a common factor of both $a$ and $b$.  \nBut this contradicts the fact that $a$ and $b$ are coprime (having no common factor other than $1$).  \nThis contradiction has arisen because of our incorrect assumption that $\\sqrt{5}$ is rational.  \n$$\\mathbf{\\therefore \\sqrt{5} \\text{ is an irrational number. [Hence Proved]}}$$",
          note: "Ye exact 4 steps $\\sqrt{2}$ ke liye bhi valid hain (bas 5 ki jagah 2 likh do) aur $\\sqrt{3}$ ke liye bhi (5 ki jagah 3 likh do). Pure 3/3 marks guarantee!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "The Magic Word: 'COPRIME'",
          action: "Shuru mein 'where $a, b$ are coprime integers and $b \\neq 0$' likhna kabhi mat bhoolna. Agar 'coprime' nahi likha toh examiner 1 mark deduct kar lega!",
          proTip: "Answer sheet mein Statement A aur Statement B ko box ya underline kar do."
        }
      ],
      examinerTraps: [
        {
          trap: "Theorem ka justification na likhna.",
          correction: "Jab tum $a^2 = 5b^2$ ke baad likhte ho ki $5$ divides $a$, toh bracket mein zaroor likho: '(Since 5 is prime and divides a², it divides a by Theorem)'."
        }
      ]
    },
    {
      id: "composite_irrational",
      label: "5. Composite Forms ($3 + 2√5$, $5 - √3$, and $√2 + √3$)",
      heading: "The 2-Mark Rearrangement Weapon & 3-Mark Sum of Roots",
      subheading: "Jab Question bole: 'Given that √5 is irrational, prove that 3 + 2√5 is irrational'",
      explanation: "Board exam mein do tarah ke irrationality ke questions aate hain:  \n1. **Pure roots** ($\\sqrt{2}, \\sqrt{3}, \\sqrt{5}$) $\\to$ 3 Marks (Contradiction squaring method jo humne upar padha).  \n2. **Composite expressions** ($3 + 2\\sqrt{5}$, $5 - \\sqrt{3}$, $\\frac{3\\sqrt{2}}{5}$, $7\\sqrt{5}$) $\\to$ 2 Marks!  \n\n**DHYAAN SE SUNO (Student ki sabse badi galti):**  \nJab question bole: *'Given that $\\sqrt{5}$ is irrational, prove that $3 + 2\\sqrt{5}$ is irrational'* — tumhe $\\sqrt{5}$ ko dobara prove karne ki koi zaroorat nahi hai! Aur na hi dono taraf square karna hai!  \n\n### The Super Fast 4-Line Rearrangement Method:\n1. Maano $3 + 2\\sqrt{5} = \\frac{a}{b}$ rational hai ($a, b$ integers, $b \\neq 0$).  \n2. Saare normal numbers ko right side le jao, akele bechare root $\\sqrt{5}$ ko left mein chhod do:  \n   $$2\\sqrt{5} = \\frac{a}{b} - 3 = \\frac{a - 3b}{b} \\implies \\mathbf{\\sqrt{5} = \\frac{a - 3b}{2b}}$$  \n3. Ab right side ko gaur se dekho: $a$ aur $b$ integers hain, toh $\\frac{a - 3b}{2b}$ ek fraction of integers hai, matlab ye **RATIONAL** hai!  \n4. Lekin left side mein $\\sqrt{5}$ hai jo ki **IRRATIONAL** hai!  \n   $$\\mathbf{\\text{Irrational} \\neq \\text{Rational}}$$  \n5. Ek irrational number kabhi rational number ke barabar nahi ho sakta! Contradiction! Hence, $3 + 2\\sqrt{5}$ is irrational. [2 Marks in 2 Minutes!]\n\n### Advanced 3-Mark Archetype: Prove $\\sqrt{2} + \\sqrt{3}$ is Irrational\nJab do alag-alag roots add hote hain, toh dono taraf square kiya jata hai:\n1. Maano $x = \\sqrt{2} + \\sqrt{3}$ rational hai.\n2. Square both sides: $x^2 = (\\sqrt{2} + \\sqrt{3})^2 = 2 + 3 + 2\\sqrt{6} = 5 + 2\\sqrt{6}$.\n3. Isolate $\\sqrt{6}$: $\\sqrt{6} = \\frac{x^2 - 5}{2}$.\n4. Since $x$ is rational, $\\frac{x^2 - 5}{2}$ is rational, which forces $\\sqrt{6}$ to be rational. But 6 is not a perfect square, so $\\sqrt{6}$ is irrational. Contradiction! Hence $\\sqrt{2} + \\sqrt{3}$ is irrational.",
      formulasOrKeyPoints: [
        {
          title: "Quick Reference Templates",
          content: "- **Form $a + b\\sqrt{p}$**: $\\sqrt{p} = \\frac{r - as}{bs} \\implies \\text{RHS is Rational} \\neq \\text{LHS (Irrational)}$.  \n- **Form $\\frac{a\\sqrt{p}}{b}$**: $\\sqrt{p} = \\frac{b \\cdot x}{a} \\implies \\text{RHS is Rational} \\neq \\text{LHS (Irrational)}$.  \n- **Form $\\sqrt{a} + \\sqrt{b}$**: Squaring gives $\\sqrt{ab} = \\frac{x^2 - (a + b)}{2} \\implies \\text{Contradiction}$.",
          note: "Rational + Irrational = Irrational; Rational - Irrational = Irrational; Non-zero Rational × Irrational = Irrational."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Isolate the Root on LHS",
          action: "Root wale term ko bilkul akela karo bina square kiye. RHS ko ek single fraction banao LCM lekar.",
          proTip: "LHS par koi coefficient nahi hona chahiye (jaise $2\\sqrt{5}$ se 2 ko RHS ke denominator mein bhej do)."
        }
      ],
      examinerTraps: [
        {
          trap: "$3 + 2\\sqrt{5}$ mein square kar dena: $(3 + 2\\sqrt{5})^2 = 9 + 20 + 12\\sqrt{5}$.",
          correction: "Square karne se question 4 guna lamba aur complex ho jata hai. Simple rearrangement karo!"
        }
      ]
    },
    {
      id: "decimal_expansions",
      label: "6. Decimal Expansions & Terminating Condition ($2^m \\cdot 5^n$)",
      heading: "Bina Division Kiye Decimal Pehchano & Calculate Karo",
      subheading: "Base-10 Secret + Max(m, n) Decimal Places Shortcut",
      explanation: "Kyun kuch fractions seedhe terminate ho jaate hain (jaise $\\frac{1}{4} = 0.25$) aur kuch infinite loop mein phas jaate hain (jaise $\\frac{1}{3} = 0.333\\dots$ ya $\\frac{1}{7}$)?  \n\n### The Base-10 Magic Secret:\nHamara counting system base-10 hai ($10, 100, 1000...$).  \nAur $10$ ke prime factors sirf do hi hote hain: **2 aur 5** ($10 = 2 \\times 5$).  \n\nIsliye, agar koi fraction $\\frac{p}{q}$ apne **Simplest Form (lowest terms jahan $p, q$ coprime hain)** mein hai:  \n- Agar denominator $q$ ke prime factors mein **SIRF 2 ya SIRF 5 ya DONO ($2^m \\times 5^n$)** hain, toh wo decimal hamesha **TERMINATE (khatam)** ho jayega!  \n- Agar denominator mein 2 aur 5 ke alawa koi teesra prime number aa gaya (jaise 3, 7, 11, 13) jo numerator se cancel nahi ho raha, toh decimal **NON-TERMINATING REPEATING (Recurring)** hoga!\n\n### Super Shortcut: Kitne Decimal Places Ke Baad Khatam Hoga?\nBina actual division kiye tum bata sakte ho ki decimal kitne digits ke baad rukega:  \n$$\\mathbf{\\text{Number of decimal places} = \\max(m, n)}$$  \n- Agar denominator mein $2^4 \\times 5^1$ hai: $\\max(4, 1) = 4$ $\\implies$ **4 decimal places** ke baad terminate hoga!  \n- Agar denominator mein $2^2 \\times 5^5$ hai: $\\max(2, 5) = 5$ $\\implies$ **5 decimal places** ke baad terminate hoga!\n\n### Without Division Decimal Value Nikalne Ka Trick (Power Balancing):\nMaan lo tumhe $\\frac{7}{80}$ ko decimal mein convert karna hai bina divide kiye:  \n1. Denominator factorise karo: $80 = 2^4 \\times 5^1$.  \n2. 2 ki power 4 hai, par 5 ki power sirf 1 hai. 5 ko bhi 4 power chahiye! Toh upar-niche $5^3$ se multiply kar do:  \n   $$\\frac{7 \\times 5^3}{2^4 \\times 5^1 \\times 5^3} = \\frac{7 \\times 125}{2^4 \\times 5^4} = \\frac{875}{(2 \\times 5)^4} = \\frac{875}{10^4} = \\frac{875}{10000} = \\mathbf{0.0875}$$  \nDekha? Bina lamba division kiye answer aa gaya!",
      formulasOrKeyPoints: [
        {
          title: "Denominator Condition for Terminating Decimal",
          content: "$$\\mathbf{q = 2^m \\cdot 5^n \\quad \\text{where } m, n \\in \\mathbb{W} = \\{0, 1, 2, 3...\\}}$$  \nNote: $m=0$ ho sakta hai (sirf 5 ki powers hon) ya $n=0$ ho sakta hai (sirf 2 ki powers hon).",
          note: "IMPORTANT: Fraction MUST be in lowest terms first! Cancel common factors before checking q."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Step 1: Cancel Common Factors First!",
          action: "Sabse pehle numerator aur denominator ko cancel karo. Jaise $\\frac{6}{15} \\to$ 15 mein 3 dekh kar non-terminating mat bolna! $\\frac{6}{15} = \\frac{2}{5}$, denominator mein sirf 5 hai, toh ye TERMINATING hai ($0.4$)!",
          proTip: "Pehle simplify karo, fir denominator ka factor check karo."
        }
      ],
      examinerTraps: [
        {
          trap: "$\\frac{77}{210}$ ko bina simplify kiye check karna.",
          correction: "$210 = 2 \\times 3 \\times 5 \\times 7$. Lekin $\\frac{77}{210} = \\frac{7 \\times 11}{7 \\times 30} = \\frac{11}{30} = \\frac{11}{2 \\times 3 \\times 5}$. Abhi bhi 3 bacha hai, isliye non-terminating repeating hai."
        }
      ]
    },
    {
      id: "board_playbook",
      label: "7. CBSE Board Exam Playbook & Remainder Traps",
      heading: "Remainder Questions & Scoring Strategy (Full 6/6 Marks Blueprint)",
      subheading: "Largest number dividing (a, b) vs Smallest number divided by (a, b)",
      explanation: "Class 10 CBSE Board exam mein remainder wale questions aksar 3-marker mein aate hain. Inke do archetypes hote hain, dono ke formulas ekdum simple hain:\n\n" +
        "### Archetype 1: 'Find the largest number which divides $x$ and $y$ leaving remainder $r_1$ and $r_2$'\n" +
        "- Word 'Largest which divides' $\\implies$ **HCF** nikaalna hai!  \n" +
        "- **Funda**: Pehle remainders ko numbers mein se minus karo, fir bache hue numbers ka HCF nikaalo!  \n" +
        "  $$\\mathbf{\\text{Answer} = \\text{HCF}(x - r_1, \\; y - r_2)}$$  \n" +
        "- *Example*: Find the largest number dividing 70 and 125 leaving remainders 5 and 8.  \n" +
        "  $70 - 5 = 65$, $125 - 8 = 117$.  \n" +
        "  $65 = 5 \\times 13$, $117 = 3^2 \\times 13$.  \n" +
        "  $\\text{HCF}(65, 117) = \\mathbf{13}$! [Done!]\n\n" +
        "### Archetype 2: 'Find the smallest number which when divided by $x$ and $y$ leaves remainder $r$'\n" +
        "- Word 'Smallest divided by' $\\implies$ **LCM** nikaalna hai!  \n" +
        "- **Funda**: Pehle $x$ aur $y$ ka LCM nikaalo, aur aakhir mein remainder $r$ ko ADD kar do!  \n" +
        "  $$\\mathbf{\\text{Answer} = \\text{LCM}(x, y) + r}$$\n\n" +
        "### Archetype 3: 'Find the smallest number which when increased by $k$ is divisible by $x$ and $y$'\n" +
        "- Since $(N + k)$ is divisible by $x$ and $y$, $(N + k)$ must be their LCM:  \n" +
        "  $$\\mathbf{\\text{Answer} = \\text{LCM}(x, y) - k}$$",
      formulasOrKeyPoints: [
        {
          title: "Quick Memory Matrix",
          content: "$$\\mathbf{\\text{Largest number dividing } \\to \\text{HCF (Subtract remainder FIRST, then HCF)}}$$  \n$$\\mathbf{\\text{Smallest number divided by } \\to \\text{LCM (Find LCM FIRST, then ADD remainder)}}$$  \n$$\\mathbf{\\text{Smallest number increased by } k \\to \\text{LCM (Find LCM FIRST, then SUBTRACT } k)}$$",
          note: "Ye rule kabhi fail nahi hota. Confuse hone ka koi chance hi nahi hai!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify Keywords",
          action: "Dekho question mein 'divides' likha hai (HCF) ya 'divided by' likha hai (LCM).",
          proTip: "Units check karo: Time, distance recurrence $\\implies$ LCM. Capacity, partition $\\implies$ HCF."
        }
      ],
      examinerTraps: [
        {
          trap: "Archetype 1 mein pehle HCF nikaal kar baad mein remainder subtract karna.",
          correction: "Hamesha numbers se pehle remainders minus karo: $(x - r_1)$ aur $(y - r_2)$, fir unka HCF lo."
        }
      ]
    }
  ]
};
