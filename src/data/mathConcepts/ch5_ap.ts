import type { MathChapterConcept } from "./types";

export const CH5_AP_CONCEPT: MathChapterConcept = {
  chapterNo: 5,
  title: "Arithmetic Progressions",
  weightage: "6–8 Marks (CBSE Board Mandatory)",
  oneLiner: "Barabar kadam (constant difference) se banti hai AP; nth term mein (n-1) jumps hote hain; aur Gauss ka pairing rule sum ko aasan banata hai!",
  analogyTitle: "Seedhi ke Rungs (Steps) aur Monthly Pocket Money ka Rule",
  analogyContent: "Maan lo aap ek lakdi ki seedhi (wooden ladder) chadh rahe ho. Zameen se pehla danda (rung) height $a$ par hai. Uske baad har agla danda exact barabar doori $d$ par laga hua hai. Pehle dande par aap khade ho ($a$). Doosre dande par jaane ke liye aapne 1 jump li ($a + d$). Teesre dande ke liye 2 jumps ($a + 2d$). Agar 100th dande par jaana hai, toh kitni jumps leni padengi? 99 jumps ($a + 99d$)! Yahi simple jaadu hai Arithmetic Progression (AP) ka: ek initial value $a$ aur har baar barabar step $d$ ka addition!",
  sections: [
    {
      id: "ap_ground_zero",
      label: "1. AP Kya Hai? Ground Zero Se Samjho",
      heading: "First Term $a$, Common Difference $d$, aur Testing Sequence",
      subheading: "Kyun $d$ Positive, Negative, ya Zero bhi ho sakta hai!",
      explanation: "Ek **Arithmetic Progression (AP)** numbers ki aisi list hoti hai jismein pehle number $a$ (first term) ko chhodkar, har agla number apne pichhle number mein ek fixed number $d$ (**Common Difference**) add karne par milta hai.  \n\n$$\\mathbf{a, \\; a+d, \\; a+2d, \\; a+3d, \\; \\dots, \\; a+(n-1)d}$$  \n\n### Common Difference $d$ Kaise Nikalte Hain?  \nHamesha aage wale term mein se theek pichhla term subtract karo:  \n$$\\mathbf{d = a_{k+1} - a_k = a_2 - a_1 = a_3 - a_2}$$  \n\n**Common Difference ke 3 Roop:**  \n$\\bullet$ **Agar $d > 0$ (Positive):** AP badhti jaati hai (Increasing AP).  \n  *Jaise:* $2, 5, 8, 11 \\dots \\implies d = 5 - 2 = +3$.  \n$\\bullet$ **Agar $d < 0$ (Negative):** AP ghat-ti jaati hai (Decreasing AP).  \n  *Jaise:* $100, 70, 40, 10 \\dots \\implies d = 70 - 100 = -30$. *(Dhyan rahe: $100 - 70 = 30$ mat likhna!)*  \n$\\bullet$ **Agar $d = 0$ (Zero):** Saare numbers same rehte hain (Constant AP).  \n  *Jaise:* $7, 7, 7, 7 \\dots \\implies d = 0$. Yeh bhi ek perfectly valid AP hai!  \n\n### Sequence AP Hai Ya Nahi — Kaise Check Karein?  \nDo consecutive differences check karo: $a_2 - a_1$ aur $a_3 - a_2$.  \nAgar $a_2 - a_1 = a_3 - a_2$ hai, tabhi sequence AP kahlayegi!",
      formulasOrKeyPoints: [
        {
          title: "General Form of an AP",
          content: "$$\\mathbf{a, \\; a+d, \\; a+2d, \\; a+3d, \\; \\dots, \\; a+(n-1)d}$$  \nJahan:  \n$\\bullet$ $a$ = First Term (Pehla Pad)  \n$\\bullet$ $d$ = Common Difference (Sarv Antar)  \n$\\bullet$ $n$ = Number of Terms (Pado ki sankhya, jo hamesha $1, 2, 3 \\dots$ natural number hoti hai)",
          note: "Common difference nikalne ke liye hamesha: Later term - Earlier term. Kabhi bhi ulta mat subtract karna!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Surds / Square Root Sequences ko Simplify Karna",
          action: "Agar sequence $\\sqrt{2}, \\sqrt{8}, \\sqrt{18}, \\sqrt{32} \\dots$ di ho, toh pehle root ko simplify karo: $\\sqrt{8} = 2\\sqrt{2}$, $\\sqrt{18} = 3\\sqrt{2}$, $\\sqrt{32} = 4\\sqrt{2}$.",
          proTip: "Differences check karo: $2\\sqrt{2} - \\sqrt{2} = \\sqrt{2}$ aur $3\\sqrt{2} - 2\\sqrt{2} = \\sqrt{2}$. Difference constant hai, isliye yeh 100% AP hai jismein $a = \\sqrt{2}$ aur $d = \\sqrt{2}$!"
        }
      ],
      examinerTraps: [
        {
          trap: "Bache $\\sqrt{2}, \\sqrt{8}, \\sqrt{18}$ ko dekh kar sochte hain ki $\\sqrt{8} - \\sqrt{2} = \\sqrt{6}$, isliye yeh AP nahi hai.",
          correction: "Roots ko direct subtract nahi kar sakte! $\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$. Tab $2\\sqrt{2} - \\sqrt{2} = \\sqrt{2}$. Yeh CBSE ka bohot famous 1-mark trap question hai!"
        }
      ]
    },
    {
      id: "three_terms_condition",
      label: "2. Three Consecutive Terms Condition (2b = a + c)",
      heading: "Jab 3 Numbers AP mein Hon — Arithmetic Mean ka Formula",
      subheading: "CBSE MCQs mein Unknown Parameter $k$ Nikalne ka 10-Second Secret",
      explanation: "Agar teen numbers $p, q, r$ ek AP mein hain, toh unka common difference barabar hona chahiye:  \n$$q - p = r - q$$  \n\nAb $-q$ ko LHS mein laao aur $-p$ ko RHS mein le jaao:  \n$$q + q = p + r \\implies \\mathbf{2q = p + r} \\qquad \\iff \\qquad \\mathbf{q = \\frac{p + r}{2}}$$  \n\n**Hinglish Meaning:**  \nBich wale number ka dugna (double), pehle aur aakhri number ke jod (sum) ke barabar hota hai! Yaani bich wala number baaki dono ka **Arithmetic Mean** hota hai.  \n\n### Example Board Question:  \nAgar $(k + 2), (4k - 6), (3k - 2)$ ek AP ke 3 consecutive terms hain, toh $k$ ki value batao?  \n**Solution:**  \n$$2 \\times (\\text{Middle Term}) = (\\text{First Term}) + (\\text{Last Term})$$  \n$$2(4k - 6) = (k + 2) + (3k - 2)$$  \n$$8k - 12 = 4k$$  \n$$8k - 4k = 12 \\implies 4k = 12 \\implies \\mathbf{k = 3}$$  \n*Check:* Terms banenge: $3+2=5$, $4(3)-6=6$, $3(3)-2=7$. Sequence hai $5, 6, 7$ ($d = 1$, perfectly in AP!).",
      formulasOrKeyPoints: [
        {
          title: "Condition for Three Terms in AP",
          content: "$$\\mathbf{p, \\; q, \\; r \\text{ are in AP } \\iff 2q = p + r \\iff q = \\frac{p + r}{2}}$$",
          note: "Jab bhi exam mein 'k ki value find karo jab 3 terms AP mein hon' aaye, aankh band karke 2 × Middle = First + Last lagao!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Direct Equation Setup",
          action: "Identify karo: Middle term kaunsa hai, first term kaunsa hai, third term kaunsa hai. Formula $2b = a + c$ mein substitute karo aur linear equation solve kar lo.",
          proTip: "Brackets dhyan se kholo: $2(4k - 6) = 8k - 12$. Bache aksar $8k - 6$ likh dete hain aur number kho dete hain."
        }
      ],
      examinerTraps: [
        {
          trap: "Bache $d$ nikalne ki koshish karte hain pehle: $(4k - 6) - (k + 2) = d$ aur $(3k - 2) - (4k - 6) = d$, jisse calculation lamba aur confusing ho jaata hai.",
          correction: "Direct $2b = a + c$ use karo, 2 lines mein solution nikal aayega bina kisi $d$ ke jhanjhat ke!"
        }
      ]
    },
    {
      id: "nth_term_deep_dive",
      label: "3. The n-th Term Formula & Term from the End",
      heading: "General Term Formula: $a_n = a + (n-1)d$",
      subheading: "Kyun Formula mein (n-1) hota hai? + Aakhri se Term nikalne ka Rule",
      explanation: "Kabhi socha hai ki formula mein **$(n - 1)$** kyun aata hai, seedha $n$ kyun nahi?  \n\nKyunki term #1 ($a$) par toh aap **pehle se khade ho**!  \n$\\bullet$ Term #1 par jaane ke liye: 0 step ($a + 0d$)  \n$\\bullet$ Term #2 par jaane ke liye: 1 step ($a + 1d$)  \n$\\bullet$ Term #3 par jaane ke liye: 2 steps ($a + 2d$)  \n$\\bullet$ Term #$n$ par jaane ke liye: **$(n - 1)$ steps ($a + (n - 1)d$)**!  \n\n$$\\mathbf{a_n = a + (n - 1)d}$$  \n\n### Piche Se (From the End) n-th Term Kaise Nikalein?  \nAgar ek finite AP ka aakhri term $l$ (last term) hai aur aage badhne par $+d$ hota hai, toh piche aane par har step par **$-d$** hoga!  \nIsliye aakhri se $n$-th term ka formula hota hai:  \n$$\\mathbf{a_n' = l - (n - 1)d}$$  \n\n*Alternative Desi Method:* Pura AP hi ulta likh do! Last term ko first term bana do, aur $d$ ka sign badal do (agar $+5$ tha toh $-5$ kar do), aur standard formula laga do! Dono se bilkul same answer aayega.  \n\n### Kya Yeh Number AP ka Term Hai? (Checking Belonging)  \nSet karo: $a_n = \\text{Diya gaya number}$. Equation solve karke $n$ nikalo.  \n$$\\mathbf{n \\text{ HAMESHA ek Natural Number hona chahiye } (n \\in \\{1, 2, 3, 4, \\dots\\})!}$$  \n$\\bullet$ Agar $n = 35$ aaya $\\implies$ Haan, yeh 35th term hai!  \n$\\bullet$ Agar $n = 54.67$ ya $\\frac{164}{3}$ aaya $\\implies$ **NAHI**, kyunki term number kabhi fraction ya decimal nahi ho sakta (kya aapne kabhi 54.6th bacha dekha hai class mein? Bilkul nahi!).",
      formulasOrKeyPoints: [
        {
          title: "n-th Term Formulas at a Glance",
          content: "$$\\text{From the Beginning: } \\mathbf{a_n = a + (n - 1)d}$$  \n$$\\text{From the End (Last term } l \\text{): } \\mathbf{a_n' = l - (n - 1)d}$$  \n$$\\text{Difference between any two terms: } \\mathbf{a_m - a_n = (m - n)d}$$",
          note: "Difference formula a_m - a_n = (m - n)d se 'a' completely cancel ho jaata hai. Yeh Section A MCQs ka super-weapon hai!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "First Negative Term Kaise Dhundhein?",
          action: "Condition lagao: $a_n < 0 \\implies a + (n - 1)d < 0$.",
          proTip: "Inequality solve karte waqt agar negative number $d$ se divide kar rahe ho, toh inequality ka muh palat do ($<$ ban jaata hai $>$). Fir jo decimal number aaye, usse theek agla whole number chuno!"
        }
      ],
      examinerTraps: [
        {
          trap: "Bache $a_n$ aur $n$ mein confuse ho jaate hain. Term ki VALUE ko $n$ samajh lete hain.",
          correction: "$n$ hamesha position batata hai (1st, 2nd, 3rd, counting number). $a_n$ uss position par baithe number ki actual value batata hai."
        }
      ]
    },
    {
      id: "sum_gauss_secret",
      label: "4. Sum of First n Terms (Gauss ka Secret)",
      heading: "10 Saal ke Bacche ka Dimag aur Pairing ka Jaadu",
      subheading: "$S_n = \\frac{n}{2}[2a + (n-1)d] = \\frac{n}{2}[a + l]$",
      explanation: "Jab mahan ganitagya Carl Friedrich Gauss sirf 10 saal ke the, unke school teacher ne saare bacho ko chup karane ke liye ek mushkil sawal diya: *'1 se lekar 100 tak ke saare numbers ko jodo ($1 + 2 + 3 + \\dots + 100$)'*.  \n\nSabhi bache ghanto tak add karte rahe, lekin Gauss ne sirf 10 seconds mein slate par likh kar de diya: **5050**!  \n\n### Gauss ne Kya Socha Tha?  \nUnhone notice kiya ek adbhut symmetry:  \n$$1 + 100 = 101$$  \n$$2 + 99 = 101$$  \n$$3 + 98 = 101$$  \nHar ek pair ka jod **101** hai! Total 100 numbers hain, toh kitne pairs banenge? $100 / 2 = 50$ pairs!  \n$$\\text{Total Sum} = 50 \\times 101 = 5050!$$  \n\nIsi pairing method ko jab hum kisi bhi general AP par lagate hain:  \n$$\\mathbf{S_n = \\frac{n}{2} (a + l)}$$  \nAur kyunki last term $l = a_n = a + (n - 1)d$ hota hai, $l$ ki jagah yeh rakhne par:  \n$$\\mathbf{S_n = \\frac{n}{2} \\left[ 2a + (n - 1)d \\right]}$$",
      formulasOrKeyPoints: [
        {
          title: "Top 3 Special Sum Formulas (Direct Board MCQs)",
          content: "**1. First $n$ Natural Numbers ka Sum:**  \n$$S_n = 1 + 2 + 3 + \\dots + n = \\mathbf{\\frac{n(n + 1)}{2}}$$  \n\n**2. First $n$ Odd Positive Integers ka Sum:**  \n$$S_n = 1 + 3 + 5 + \\dots + (2n - 1) = \\mathbf{n^2}$$  \n*(Pehle 10 odd numbers ka sum = $10^2 = 100$, pehle 20 ka = $20^2 = 400$! 1 second mein answer!)*  \n\n**3. First $n$ Even Positive Integers ka Sum:**  \n$$S_n = 2 + 4 + 6 + \\dots + 2n = \\mathbf{n(n + 1)}$$",
          note: "Agar question mein first term 'a' aur last term 'l' dono pata hon, toh direct S_n = (n/2)(a + l) lagao. 2a + (n-1)d lagane ki koi zaroorat nahi hai!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Sahi Formula Select Karna",
          action: "Agar last term $l$ diya hai $\\to$ Use $S_n = \\frac{n}{2}(a + l)$. Agar last term nahi pata, sirf $a$ aur $d$ pata hain $\\to$ Use $S_n = \\frac{n}{2}[2a + (n-1)d]$.",
          proTip: "$S_n = \\frac{n}{2}(a + l)$ use karne se calculations 70% kam ho jaati hain aur calculation mistakes zero ho jaati hain!"
        }
      ],
      examinerTraps: [
        {
          trap: "Bracket ke andar $2a$ ki jagah galti se sirf $a$ likh dena: $\\frac{n}{2}[a + (n - 1)d]$.",
          correction: "Formula mein $a$ nahi, **$2a$** hota hai: $\\frac{n}{2}[\\mathbf{2a} + (n - 1)d]$. Yeh pure chapter ki sabse common formula mistake hai!"
        }
      ]
    },
    {
      id: "golden_bridge",
      label: "5. The Golden Bridge: an = Sn - Sn-1",
      heading: "Sum Formula Se Direct AP Nikalna",
      subheading: "Linear vs Quadratic Fingerprints aur 2A Shortcut",
      explanation: "Agar question mein aapko $S_n$ (sum of $n$ terms) ka formula diya ho, aur aapse $a_n$ (nth term) ya common difference $d$ pucha ho, toh use karte hain **Golden Bridge Formula**:  \n$$\\mathbf{a_n = S_n - S_{n-1}} \\qquad (\\text{for } n \\ge 2)$$  \n$$\\mathbf{a_1 = S_1}$$  \n\n### Yeh Kaam Kaise Karta Hai?  \nSocho:  \n$$S_n = a_1 + a_2 + a_3 + \\dots + a_{n-1} + a_n$$  \n$$S_{n-1} = a_1 + a_2 + a_3 + \\dots + a_{n-1}$$  \nJab aap $S_n$ mein se $S_{n-1}$ ghataoge, toh shuru ke saare terms cancel ho jayenge, sirf **aakhri term $a_n$** bachega!  \n\n### The Super-Fast Board MCQ Shortcuts:  \n$\\bullet$ **Linear Fingerprint:** Agar $a_n$ variable $n$ mein linear hai ($a_n = An + B$), toh common difference hamesha **$n$ ka coefficient ($d = A$)** hota hai!  \n  *Example:* $a_n = 7 - 4n \\implies d = -4$ (Direct 1 second answer!).  \n\n$\\bullet$ **Quadratic Fingerprint:** Agar $S_n$ variable $n$ mein quadratic hai ($S_n = An^2 + Bn$), toh common difference hamesha **$n^2$ ke coefficient ka DOUBLE ($d = 2A$)** hota hai!  \n  *Example:* $S_n = 3n^2 + 5n \\implies d = 2 \\times 3 = 6$! First term $a_1 = S_1 = 3(1)^2 + 5(1) = 8$. AP ban gayi: $8, 14, 20, 26 \\dots$ Bina kisi calculation ke!",
      formulasOrKeyPoints: [
        {
          title: "The Golden Bridge & 2A Shortcut",
          content: "$$\\mathbf{a_n = S_n - S_{n-1}}$$  \n$$\\mathbf{S_n = An^2 + Bn \\implies d = 2A, \\quad a = A + B}$$  \n$$\\mathbf{a_n = An + B \\implies d = A, \\quad a = A + B}$$",
          note: "Subjective questions (3 marks) mein pura S_n - S_{n-1} step-by-step solve karna padega, lekin MCQs mein yeh 2A shortcut aapke 3 minutes bacha lega!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Subjective Board Presentation for an = Sn - Sn-1",
          action: "1. Given $S_n$ likho. 2. $n$ ki jagah $(n - 1)$ rakh kar $S_{n-1}$ nikalo. 3. Bracket $(n - 1)^2 = n^2 - 2n + 1$ dhyan se kholo. 4. $a_n = S_n - S_{n-1}$ calculate karo.",
          proTip: "Sign mistakes se bachne ke liye $S_{n-1}$ ko pehle alag se simplify karo, fir minus sign lagao."
        }
      ],
      examinerTraps: [
        {
          trap: "$3(n - 1)^2$ ko bache galti se $3n^2 - 3$ ya $3n^2 - 1$ likh dete hain.",
          correction: "$3(n - 1)^2 = 3(n^2 - 2n + 1) = 3n^2 - 6n + 3$. Middle term $-2n$ bhoolna 100% marks kaat deta hai!"
        }
      ]
    },
    {
      id: "symmetric_terms_selection",
      label: "6. Symmetric Selection of Terms in AP",
      heading: "Terms ko Aise Chuno ki 'd' Gayab Ho Jaye!",
      subheading: "Parijat Jain S.M.A.R.T. Choice for 3, 4, and 5 Numbers",
      explanation: "Jab exam mein word problem aaye: *'Teen numbers AP mein hain jinka sum 24 hai aur product 440 hai'*, toh kabhi bhi numbers ko $a, a+d, a+2d$ mat maanna! Aisa karne par lamba aur complicated quadratic equation ban jaata hai.  \n\nIske bajaye, **Symmetric Terms** chuno:  \n\n### 1. Teen Numbers (3 Terms in AP):  \nNumbers maano:  \n$$\\mathbf{(a - d), \\quad a, \\quad (a + d)} \\qquad (\\text{Common difference is } d)$$  \nAb inka sum dekho:  \n$$(a - d) + a + (a + d) = 3a$$  \nNotice kiya? **$-d$ aur $+d$ aapas mein cancel ho gaye!**  \nSum diya hai 24 $\\implies 3a = 24 \\implies \\mathbf{a = 8}$! Ek hi jhatke mein $a$ ki value nikal aayi!  \n\n### 2. Chaar Numbers (4 Terms in AP):  \nNumbers maano:  \n$$\\mathbf{(a - 3d), \\quad (a - d), \\quad (a + d), \\quad (a + 3d)} \\qquad (\\mathbf{\\text{Common difference is } 2d!})$$  \nInka sum: $(a - 3d) + (a - d) + (a + d) + (a + 3d) = \\mathbf{4a}$!  \nSaare $d$ cancel ho gaye!  \n\n*Crucial Warning:* 4 terms ke case mein consecutive terms ke bich ka difference **$2d$** hota hai, $d$ nahi!",
      formulasOrKeyPoints: [
        {
          title: "Symmetric Terms Selection Table",
          content: "| Terms ki Sankhya | Kaunse Terms Maanein? | Common Difference | Sum |\n|---|---|---|---|\n| **3 Terms** | $(a - d), \\; a, \\; (a + d)$ | $d$ | $3a$ |\n| **4 Terms** | $(a - 3d), \\; (a - d), \\; (a + d), \\; (a + 3d)$ | $2d$ | $4a$ |\n| **5 Terms** | $(a - 2d), \\; (a - d), \\; a, \\; (a + d), \\; (a + 2d)$ | $d$ | $5a$ |",
          note: "Hamesha dhyan rahe: Jab terms odd hon (3 ya 5), toh common difference d hota hai. Jab terms even hon (4), toh common difference 2d hota hai!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Product Equation mein a ki Value Rakhna",
          action: "Sum se direct $a$ mil gaya. Ab product equation mein $a$ substitute karo. Form banegi: $(a - d)(a + d) = a^2 - d^2$.",
          proTip: "Difference of squares formula $(A - B)(A + B) = A^2 - B^2$ se $d^2$ direct nikal aayega bina kisi cube ya lambi calculation ke!"
        }
      ],
      examinerTraps: [
        {
          trap: "4 terms wale question mein $d = 2$ nikal kar common difference ko 2 bol dena.",
          correction: "4 terms wale setup mein common difference $(a - d) - (a - 3d) = 2d$ hota hai! Agar $d = 2$ nikla, toh AP ka common difference $2(2) = 4$ hoga."
        }
      ]
    },
    {
      id: "board_word_problems_and_case_studies",
      label: "7. High-Yield Word Problems & Competency Case Studies",
      heading: "Ratio of Sums, Log Stacking, aur Semicircle Spirals",
      subheading: "CBSE Standard & Basic ke 4 aur 5 Marks ke Fixed Questions",
      explanation: "Class 10 CBSE Board exam mein Section D (5 Marks) aur Section E (4 Marks Case Study) mein teen specific patterns baar-baar aate hain:  \n\n### Pattern 1: Ratio of Sums of Two APs $\\to$ Ratio of $m$-th Terms  \nAgar do alag APs ke $n$ terms ke sum ka ratio diya ho:  \n$$\\frac{S_n}{S_n'} = \\frac{7n + 1}{4n + 27}$$  \nAur aapse 9th terms ka ratio ($t_9 / t_9'$) pucha ho:  \n**Universal Board Trick:**  \n$$\\mathbf{n \\text{ ki jagah hamesha } (2m - 1) \\text{ substitute karo!}}$$  \n9th term chahiye ($m = 9$) $\\implies n = 2(9) - 1 = 17$.  \nDirect RHS mein $n = 17$ rakh do:  \n$$\\frac{t_9}{t_9'} = \\frac{7(17) + 1}{4(17) + 27} = \\frac{119 + 1}{68 + 27} = \\frac{120}{95} = \\mathbf{\\frac{24}{19}}$$  \nFull marks in 3 lines!  \n\n### Pattern 2: Log Stacking Problem (NCERT Exemplar)  \n200 logs stack kiye gaye hain: sabse neeche 20 logs, uske upar 19, uske upar 18...  \nFormula $S_n = 200$ lagane par quadratic equation banti hai:  \n$$n^2 - 41n + 400 = 0 \\implies (n - 16)(n - 25) = 0 \\implies n = 16 \\text{ ya } n = 25$$  \n*Board Trap Check:* Agar $n = 25$ rows hon, toh top row mein $a_{25} = 20 + 24(-1) = -4$ logs honge! Par physical duniya mein $-4$ lakdiyan nahi ho sakti! Isliye $n = 25$ ko **REJECT** karna compulsory hai. Correct answer: $16$ rows, aur top row mein $a_{16} = 20 + 15(-1) = 5$ logs!  \n\n### Pattern 3: Semicircular Decorative Spiral  \nSemicircle ka perimeter $l = \\pi r$ hota hai. Agar radii $0.5, 1.0, 1.5, 2.0 \\dots$ ek AP banate hain, toh perimeters bhi AP banate hain jismein $a = \\frac{11}{7}$ cm aur $d = \\frac{11}{7}$ cm. 13 semicircles ka sum $S_{13} = 143$ cm banta hai.",
      formulasOrKeyPoints: [
        {
          title: "Summary of Master Rules for Word Problems",
          content: "$$\\text{Ratio of sums to ratio of terms: } \\mathbf{n \\to (2m - 1)}$$  \n$$\\text{Physical quantities (logs, seats, steps): Reject } n \\text{ if term becomes negative!}$$  \n$$\\text{Semicircle perimeter: } \\mathbf{l = \\pi r}$$",
          note: "Competency Case studies mein hamesha units (Rs, cm, sets, rows) likhna zaroori hota hai."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Double Root Verification in Real-World Context",
          action: "Jab bhi quadratic equation do positive integer values de ($n = 16, 25$), dono ke liye $a_n$ calculate karo. Agar ek value negative items deti hai, toh usse reject karo with written reason.",
          proTip: "CBSE marking scheme mein rejection reason likhne ka pura 1 mark hota hai!"
        }
      ],
      examinerTraps: [
        {
          trap: "Bache dono values $n = 16$ aur $n = 25$ likh kar aa jaate hain bina top row calculate kiye.",
          correction: "Examiner seedha 1 mark kaat leta hai! Hamesha check karo: kya $a_n$ positive hai? Agar nahi, toh reject karo!"
        }
      ]
    }
  ]
};
