import type { MathChapterConcept } from "./types";

export const CH12_SURFACE_AREAS_CONCEPT: MathChapterConcept = {
  chapterNo: 12,
  title: "Surface Areas and Volumes",
  weightage: "6 Marks (High-Yield CBSE Board Mandatory)",
  oneLiner: "Melting mein Volume hamesha constant rehta hai; Solids ko jodhne par sirf EXPOSED (bahar wali) surfaces ka CSA judta hai; Pani ka flow = Cross-section × Speed × Time!",
  analogyTitle: "The Play-Doh Principle & The Paint-Spray Rule",
  analogyContent: "Bhai, socho aapke paas clay ya Play-Doh ka ek gola hai. Aap us gole ko pehle ek lamba cylinder bana dete ho, fir dabakar chota sphere bana dete ho, ya belkar cuboid bana dete ho. Kya mitti (clay) ki quantity badli? **BILKUL NAHI! Volume hamesha 100% CONSTANT rehta hai!**  \nLekin socho agar aapko us shape par spray-paint karna ho (Surface Area): jab aap do shapes ko aapas mein chipka (glue kar) dete ho, toh jo faces aapas mein jud gaye woh andar chup gaye! Un par paint lag hi nahi sakta! Isliye combined solid ka surface area nikalte waqt sirf wahi faces judti hain jo **bahar se haath lagane par touch ho sakti hain (Exposed Surfaces)**!",
  sections: [
    {
      id: "master_solids_catalog_hinglish",
      label: "1. Master 3D Solids Formula Vault (Zero to Hero)",
      heading: "Cube, Cuboid, Cylinder, Cone, Sphere, aur Hemisphere",
      subheading: "CSA, TSA, aur Volume ke Formulas Bina Kisi Confusion Ke",
      explanation: "Class 10 CBSE ke sabhi 6 standard 3D solids ka complete formula bank:  \n\n1. **Cube (Side $a$)**:  \n$$\\mathbf{\\text{Volume} = a^3} \\qquad \\mathbf{\\text{LSA (4 deewar)} = 4a^2} \\qquad \\mathbf{\\text{TSA (6 faces)} = 6a^2} \\qquad \\mathbf{\\text{Longest Rod (Diagonal)} = a\\sqrt{3}}$$  \n\n2. **Cuboid (Length $l$, Breadth $b$, Height $h$)**:  \n$$\\mathbf{\\text{Volume} = l \\times b \\times h} \\qquad \\mathbf{\\text{LSA (4 Walls)} = 2h(l + b)} \\qquad \\mathbf{\\text{TSA} = 2(lb + bh + hl)}$$  \n$$\\mathbf{\\text{Longest Rod in Room (Diagonal)} = \\sqrt{l^2 + b^2 + h^2}}$$  \n\n3. **Right Circular Cylinder (Radius $r$, Height $h$)**:  \n$$\\mathbf{\\text{Volume} = \\pi r^2 h} \\qquad \\mathbf{\\text{CSA} = 2\\pi rh} \\qquad \\mathbf{\\text{TSA} = 2\\pi rh + 2\\pi r^2 = 2\\pi r(r + h)}$$  \n\n4. **Right Circular Cone (Radius $r$, Height $h$, Slant Height $l$)**:  \nSlant height hamesha Pythagoras theorem se nikalti hai: $\\mathbf{l = \\sqrt{r^2 + h^2}}$  \n$$\\mathbf{\\text{Volume} = \\frac{1}{3}\\pi r^2 h} \\qquad \\mathbf{\\text{CSA} = \\pi rl} \\qquad \\mathbf{\\text{TSA} = \\pi rl + \\pi r^2 = \\pi r(r + l)}$$  \n\n5. **Sphere (Gola of Radius $r$)**:  \n$$\\mathbf{\\text{Volume} = \\frac{4}{3}\\pi r^3} \\qquad \\mathbf{\\text{Surface Area (Total = Curved)} = 4\\pi r^2}$$  \n\n6. **Solid Hemisphere (Ardhgola of Radius $r$)**:  \n$$\\mathbf{\\text{Volume} = \\frac{2}{3}\\pi r^3} \\qquad \\mathbf{\\text{CSA (Katori ki curved wall)} = 2\\pi r^2}$$  \n$$\\mathbf{\\text{TSA (Curved wall + Flat circular base)} = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2}$$",
      formulasOrKeyPoints: [
        {
          title: "Cone Slant Height Triplets",
          content: "$$\\mathbf{l = \\sqrt{r^2 + h^2}} \\iff h = \\sqrt{l^2 - r^2} \\iff r = \\sqrt{l^2 - h^2}$$\nCommon $(r, h, l)$ triplets: $(3, 4, 5)$, $(5, 12, 13)$, $(7, 24, 25)$, $(6, 8, 10)$, $(3.5, 12, 12.5)$.",
          note: "Always check whether question gives vertical height h or slant height l! Using h in πrl is an instant zero."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Diameter vs Radius Pehle Note Karo",
          action: "Agar question mein 'Diameter = 14 cm' likha hai, toh pehle step mein hi $r = 7\\text{ cm}$ likho.",
          proTip: "Diameter ko direct formula mein daalna sabse common student mistake hai."
        }
      ],
      examinerTraps: [
        {
          trap: "Solid hemisphere ka TSA galti se $2\\pi r^2$ likh dena.",
          correction: "$2\\pi r^2$ sirf CURVED surface area hai! Solid hemisphere ke upar ek flat circular base ($\+\\pi r^2$) bhi hota hai. Total surface area $= 2\\pi r^2 + \\pi r^2 = \\mathbf{3\\pi r^2}$."
        }
      ]
    },
    {
      id: "combined_solids_rule_hinglish",
      label: "2. Combined Solids ka Iron Rule (TSA vs Volume)",
      heading: "Never Add TSAs! Sirf Bahar wali Exposed Surfaces ko Jodo",
      subheading: "Lattu (Toy) aur Medicine Capsule ka Guaranteed Formula",
      explanation: "Chapter 12 ka sabse bada student trap:  \nJab ek hemisphere ke upar ek cone rakh kar **Toy (Lattu)** banaya jata hai, toh bache bina soche likh dete hain:  \n$$\\text{TSA of Toy} = \\text{TSA of Cone} + \\text{TSA of Hemisphere} \\quad \\mathbf{[100\\% \\text{ WRONG!}]}$$  \n\n**Yeh galat kyun hai?**  \nKyunki cone ka flat circular base aur hemisphere ka flat circular base **aapas mein chipak gaye hain (glued together)**! Woh toy ke andar bandh ho chuke hain. Aap unhe na dekh sakte ho, na touch kar sakte ho, na paint kar sakte ho!  \n\n### The Golden Law of Combined Surface Area:  \n$$\\mathbf{\\text{TSA of Combined Solid} = \\sum (\\text{Curved Surface Areas of EXPOSED Faces Only})}$$  \n\n$\\bullet$ **Case 1: Toy (Cone Mounted on Hemisphere)**:  \nBahar se sirf cone ka curved hissa aur hemisphere ka curved hissa dikhta hai:  \n$$\\mathbf{\\text{TSA of Toy} = \\text{CSA of Cone} + \\text{CSA of Hemisphere} = \\pi rl + 2\\pi r^2 = \\pi r(l + 2r)}$$  \n\n$\\bullet$ **Case 2: Medicine Capsule (Cylinder with Two Hemispherical Ends)**:  \nCapsule mein beech mein cylinder hai aur dono kinaron par do hemispheres hain:  \n$$\\mathbf{\\text{Height of Cylindrical Part } h = \\text{Total Length } L - 2r}$$  \n$$\\mathbf{\\text{Surface Area} = \\text{CSA of Cylinder} + 2 \\times (\\text{CSA of Hemisphere}) = 2\\pi rh + 2(2\\pi r^2) = 2\\pi r(h + 2r)}$$  \n\n### Volume of Combined Solid (Hamesha Direct Add Hota Hai!):  \nSurface area ke opposite, **Volume mein koi cheating nahi hoti**! Volumes hamesha directly add ho jaate hain:  \n$$\\mathbf{\\text{Total Volume} = \\text{Volume of Solid 1} + \\text{Volume of Solid 2}}$$",
      formulasOrKeyPoints: [
        {
          title: "Medicine Capsule Dimensions Hack",
          content: "Agar capsule ki total length $14\\text{ mm}$ aur diameter $5\\text{ mm}$ ($r = 2.5\\text{ mm}$) hai:  \n$$\\text{Cylinder height } h = 14 - 2(2.5) = 14 - 5 = \\mathbf{9\\text{ mm}}$$\n$$\\text{Surface Area} = 2\\pi r(h + 2r) = 2 \\times \\frac{22}{7} \\times 2.5 \\times (9 + 5) = 220\\text{ mm}^2$$",
          note: "Don't forget to subtract TWO radii (one from each end) to find cylinder height!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Common Factor πr Pehle Bahar Nikalo",
          action: "Write $\\text{TSA} = \\pi r(l + 2r)$ instead of calculating $\\pi rl$ and $2\\pi r^2$ separately.",
          proTip: "Isse calculation time 50% kam ho jaata hai aur arithmetic mistake zero ho jaati hai."
        }
      ],
      examinerTraps: [
        {
          trap: "Capsule ki height nikalte waqt total length mein se sirf EK radius subtract karna.",
          correction: "Capsule ke dono ends par hemispheres hain! Isliye total length mein se $2r$ (dono radii = diameter) subtract karna zaroori hai."
        }
      ]
    },
    {
      id: "scooping_depression_hinglish",
      label: "3. Scooping Out (Depression) Problems",
      heading: "Wood Carving: Scooping karne par Surface Area KYUN Badhta Hai?",
      subheading: "Wooden Block aur Pen Stand ke Depressions ka Logic",
      explanation: "Socho ek lakdi (wood) ka solid cylinder ya cube hai. Uske andar se ek hemisphere ya cone scoop out (kured kar nikaal) diya gaya.  \n\nBache sochte hain ki lakdi nikaal di toh surface area ghatna chahiye. **Lekin surface area BADH JAATA HAI!**  \n\n### Surface Area Kyun Badhta Hai?  \nSurface area ka matlab hai: **Kitni jagah par paint lag sakta hai!**  \n1. Pehle jahan ek flat surface thi, wahan ab ek gehra katora (curved hemispherical bowl) ban gaya hai!  \n2. Paint ab us naye bane katori ke andar bhi lagega ($+2\\pi r^2$)!  \n$$\\mathbf{\\text{TSA after scooping} = \\text{CSA of Cylinder} + \\text{Area of flat base} + \\text{Inner CSA of cavity}}$$  \n\n$\\bullet$ **Cylinder with Hemisphere Scooped from Both Ends**:  \n$$\\mathbf{\\text{TSA} = \\text{CSA of Cylinder} + 2 \\times (\\text{CSA of Hemisphere}) = 2\\pi rh + 4\\pi r^2 = 2\\pi r(h + 2r)}$$  \n\n$\\bullet$ **Cube with Hemispherical Depression of Diameter $a$**:  \nCube ki 6 faces mein se flat circle hata aur hemispherical bowl jud gaya:  \n$$\\mathbf{\\text{TSA} = 6a^2 - \\pi r^2 + 2\\pi r^2 = 6a^2 + \\pi r^2}$$  \n\n### Volume After Scooping (Volume Hamesha Subtract Hota Hai):  \nKyunki lakdi baahar fek di gayi hai, isliye volume hamesha ghat-ta hai:  \n$$\\mathbf{\\text{Remaining Volume} = \\text{Original Volume} - \\text{Volume of Cavity}}$$",
      formulasOrKeyPoints: [
        {
          title: "The Scooping Principle Summary",
          content: "$$\\mathbf{\\text{Surface Area INCREASES (New internal walls are created)}}$$\n$$\\mathbf{\\text{Volume DECREASES (Material has been carved away)}}$$",
          note: "Always remember: Cavity banne par surface area add hota hai, volume subtract hota hai!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Visualise Painting the Object",
          action: "Imagine brushing paint all over the object: Outer wall ($2\\pi rh$) + Upper bowl ($2\\pi r^2$) + Lower bowl ($2\\pi r^2$). Add them all!",
          proTip: "Flat circular ends were carved away, so they are not included."
        }
      ],
      examinerTraps: [
        {
          trap: "Cavity ke curved area ko surface area se subtract kar dena.",
          correction: "Surface area paintable area hota hai. Hollow cavity banne se naye andar ke walls create hote hain, isliye CSA add hota hai!"
        }
      ]
    },
    {
      id: "melting_recasting_hinglish",
      label: "4. Conversion of Solids (Melting & Recasting)",
      heading: "Shapes Badalna: Volume Conservation & The π-Cancel Hack",
      subheading: "Number of Spheres, Coins, ya Cones Nikalne ka Fastest Tarika",
      explanation: "Jab kisi metal solid (jaise metallic sphere) ko pighla kar (melt karke) doosri shapes (jaise chote cones, spheres ya coins) banayi jaati hain:  \n\n$$\\mathbf{\\text{Volume of Original Big Solid} = n \\times \\text{Volume of One Small Recast Solid}}$$  \n$$\\mathbf{n = \\frac{\\text{Volume of Original Big Solid}}{\\text{Volume of One Small Recast Solid}}}$$  \n\n### The Super-Fast $\\pi$-Cancellation Hack:  \nBache badi galti karte hain ki pehle bade solid ka volume $\\pi = 22/7$ daal kar decimals mein calculate karte hain, fir chote solid ka volume decimals mein nikalte hain, aur fir divide karte hain!  \n**KABHI AISA MAT KARO!**  \nDonon volumes mein $\\pi$ hota hai:  \n$$n = \\frac{\\frac{4}{3}\\pi R^3}{\\pi r^2 h} = \\frac{\\frac{4}{3} R^3}{r^2 h}$$  \n$\\pi$ hamesha pehle step mein hi **cancel** ho jaata hai! Fractions ko direct cross-multiply karo, calculation 10 second mein khatam!",
      formulasOrKeyPoints: [
        {
          title: "Clay Reshaping Direct Identity",
          content: "Agar cone of height $h$ aur radius $r$ ko sphere of radius $R$ mein convert kiya jaye:  \n$$\\frac{1}{3}\\pi r^2 h = \\frac{4}{3}\\pi R^3 \\implies r^2 h = 4R^3 \\implies \\mathbf{R = \\sqrt[3]{\\frac{r^2 h}{4}}}$$",
          note: "Example: Cone of r = 6, h = 24 => R³ = (36 × 24)/4 = 216 => R = 6 cm!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "π ki Value Kabhi Pehle Mat Daalo",
          action: "Keep π as symbol until the final step. In 90% of conversion problems, π cancels out completely.",
          proTip: "Saves 3 minutes of decimal long division."
        }
      ],
      examinerTraps: [
        {
          trap: "Conversion problems mein Surface Area equate kar dena.",
          correction: "Surface Area is NOT conserved during melting! Only VOLUME is strictly conserved."
        }
      ]
    },
    {
      id: "water_flow_embankment_hinglish",
      label: "5. Water Flow in Pipes & Embankment Wells",
      heading: "Canals, Pipes, aur Kuan (Well) with Embankment",
      subheading: "Volume of Water = Area of Cross-Section × Speed × Time",
      explanation: "Water flow problems dekhne mein tough lagte hain, lekin inka ek simple formula hota hai:  \n\n### 1. Water Flowing Through Pipe or Canal:  \nPani pipe ya canal se beh raha hai. $t$ samay mein behne wale pani ka shape ek lamba cylinder ya cuboid ban jaata hai:  \n$$\\mathbf{\\text{Length of water column } L = \\text{Speed} \\times \\text{Time}}$$  \n$$\\mathbf{\\text{Volume of Water Flowed} = \\text{Area of Cross-Section} \\times (\\text{Speed} \\times \\text{Time})}$$  \n\n$\\bullet$ **Canal (Rectangular cross-section of width $w$, depth $d$)**:  \n$$\\mathbf{\\text{Volume} = w \\times d \\times (\\text{Speed} \\times t)}$$  \n$\\bullet$ Agar yeh pani kisi field ko irrigate karta hai jisme standing water height $H$ (jaise $8\\text{ cm} = 0.08\\text{ m}$) chahiye:  \n$$\\mathbf{\\text{Area of Irrigated Field} = \\frac{\\text{Volume of Water}}{\\text{Height of Standing Water } H}}$$  \n\n### 2. Well Dug and Earth Spread as Embankment (Ring):  \nEk cylindrical kuan khoda gaya (radius $r$, depth $h$). Nikali gayi mitti ko kuen ke charo taraf ek chaudi ring (embankment) ke roop mein failaya gaya:  \n$$\\text{Inner radius of embankment} = r, \\quad \\text{Outer radius } R = r + w \\quad (w = \\text{width})$$  \n$$\\mathbf{\\text{Volume of dug earth} = \\pi r^2 h}$$  \n$$\\mathbf{\\text{Volume of embankment} = \\pi (R^2 - r^2) H}$$  \n$$\\mathbf{\\pi r^2 h = \\pi (R^2 - r^2) H \\implies H = \\frac{r^2 h}{R^2 - r^2}}$$  \n*($\\pi$ cancels out on both sides!)*",
      formulasOrKeyPoints: [
        {
          title: "Embankment & Canal Master Formulas",
          content: "$$\\mathbf{\\text{Height of Embankment } H = \\frac{r^2 h}{R^2 - r^2} = \\frac{r^2 h}{(R - r)(R + r)}}$$\n$$\\mathbf{\\text{Irrigation Area} = \\frac{\\text{Width} \\times \\text{Depth} \\times (\\text{Speed} \\times t)}{\\text{Standing Water Height}}}$$",
          note: "Units alert: Convert km/h into m/min (multiply by 1000/60) and 8 cm into 0.08 m!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Units ko Consistent MKS (Meters) mein Badlo",
          action: "Speed in km/h $\\to$ multiply by $1000/60$ to get meters/minute. Standing water in cm $\\to$ divide by 100 to get meters.",
          proTip: "Unit mismatch is the #1 reason students lose 3 marks in water flow questions."
        }
      ],
      examinerTraps: [
        {
          trap: "Embankment ke volume mein sirf $\\pi R^2 H$ likhna.",
          correction: "Embankment ek hollow ring hoti hai (beech mein kuan khula rehta hai)! Isliye area of cross-section $\\pi(R^2 - r^2)$ hota hai."
        }
      ]
    },
    {
      id: "legendary_5m_problems_hinglish",
      label: "6. Legendary 5-Mark Board Problems (Gulab Jamun & Submerged Solids)",
      heading: "The 3 Grand Finale Questions of CBSE Board Exams",
      subheading: "Gulab Jamun with 30% Syrup & Submerged Cone in Full Cylinder",
      explanation: "Har saal 5-mark section mein aane wale 3 legendary problems:  \n\n### 1. Gulab Jamun with 30% Sugar Syrup:  \nEk gulab jamun cylinder ke dono taraf hemispherical ends se milkar bana hai:  \n$\\bullet$ Total length $= 5\\text{ cm}$, diameter $= 2.8\\text{ cm} \\implies r = 1.4\\text{ cm}$.  \n$\\bullet$ Cylindrical height $h = 5 - 2(1.4) = 5 - 2.8 = 2.2\\text{ cm}$.  \n$$\\mathbf{\\text{Volume of 1 Gulab Jamun} = \\pi r^2 h + \\frac{4}{3}\\pi r^3 = \\pi r^2 \\left(h + \\frac{4}{3}r\\right)}$$  \n$$\\mathbf{\\text{Volume of 45 Gulab Jamuns} = 45 \\times \\text{Volume of 1}}$$  \n$$\\mathbf{\\text{Syrup Volume} = 30\\% \\text{ of Total Volume} = 0.30 \\times \\text{Total Volume} \\approx 338\\text{ cm}^3}$$  \n\n### 2. Solid Submerged in Cylinder Full of Water:  \nEk right circular cylinder (radius $60\\text{ cm}$, height $180\\text{ cm}$) pani se poora bhara hai. Usme ek solid (cone of height $120\\text{ cm}$ mounted on hemisphere of radius $60\\text{ cm}$) seedha khada karke duba diya jata hai:  \nBy Archimedes' principle:  \n$$\\mathbf{\\text{Water Displaced} = \\text{Volume of Submerged Solid} = \\text{Volume of Cone} + \\text{Volume of Hemisphere}}$$  \n$$\\mathbf{\\text{Water Left in Cylinder} = \\text{Volume of Cylinder} - \\text{Volume of Submerged Solid}}$$  \n$$\\text{Water Left} = \\pi(60^2)(180) - \\left[ \\frac{1}{3}\\pi(60^2)(120) + \\frac{2}{3}\\pi(60^3) \\right] = \\mathbf{1.131\\text{ m}^3} \\quad \\left(1131428\\text{ cm}^3\\right)$$  \n\n### 3. Solid Iron Pole with Mass ($8\\text{ g/cm}^3$):  \nBada cylinder ($h_1 = 220\\text{ cm}, r_1 = 12\\text{ cm}$) ke upar chota cylinder ($h_2 = 60\\text{ cm}, r_2 = 8\\text{ cm}$) rakha hai:  \n$$\\mathbf{V_{\\text{total}} = \\pi r_1^2 h_1 + \\pi r_2^2 h_2 = \\pi (144 \\times 220 + 64 \\times 60) = 111532.8\\text{ cm}^3}$$  \n$$\\mathbf{\\text{Mass} = \\frac{111532.8 \\times 8}{1000} \\approx 892.26\\text{ kg}}$$",
      formulasOrKeyPoints: [
        {
          title: "Volume of Submerged Solid Factoring Trick",
          content: "$$\\mathbf{V_{\\text{cylinder}} - (V_{\\text{cone}} + V_{\\text{hemisphere}}) = \\pi r^2 \\left[ H - \\left( \\frac{1}{3}h + \\frac{2}{3}r \\right) \\right]}$$\nSubstitute $r = 60$: $\\pi(3600)[180 - (40 + 40)] = \\pi(3600)(100) = 360000\\pi\\text{ cm}^3 = 1.131\\text{ m}^3$!",
          note: "Factoring out πr² avoids computing three enormous 6-digit numbers!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Divide by 1,000,000 for m³",
          action: "To convert cm³ to m³: $1\\text{ m} = 100\\text{ cm} \\implies 1\\text{ m}^3 = 100^3 = 1,000,000\\text{ cm}^3$. Divide by $10^6$.",
          proTip: "To convert grams to kg: Divide by 1000."
        }
      ],
      examinerTraps: [
        {
          trap: "$1\\text{ m}^3$ ko $100\\text{ cm}^3$ samajh lena.",
          correction: "$1\\text{ m}^3 = 100 \\times 100 \\times 100 = 1,000,000\\text{ cm}^3$. Decimal shifting must be 6 places to the left."
        }
      ]
    }
  ]
};
