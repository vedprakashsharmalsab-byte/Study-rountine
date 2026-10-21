import type { ScienceChapterConcept } from "./types";

export const SCI_CH3_CONCEPT: ScienceChapterConcept = {
  chapterNo: 3,
  title: "Metals and Non-Metals",
  discipline: "Chemistry",
  weightage: "7–9 Marks (Board High Priority)",
  oneLiner: "Metals electron daan karke cations banate hain; non-metals electron grahan karke anions banate hain; reactivity series tay karti hai ki kaunsa metal kisse displace karega.",
  analogyTitle: "The Social Hierarchy & The Electric Exchange of the Elements",
  analogyContent: `Imagine karo elements ka ek bada school campus! 
Campus ke ek taraf hain **Metals (The Donors / Daani)** — inke outer shell mein 1, 2, ya 3 extra electrons hote hain jo ye khushi-khushi daan dekar stable noble gas ban-na chahte hain ($M \\to M^{n+} + ne^-$). 

Doosri taraf hain **Non-Metals (The Acceptors / Grahak)** — inke paas 4, 5, 6, ya 7 valence electrons hote hain aur inki sabse badi zaroorat hoti hai electrons cheenna ya accept karna taaki inka octet poora ho sake ($X + me^- \\to X^{m-}$).

Jab metal aur non-metal aamne-saamne aate hain, toh complete **Electron Transfer** hota hai — jisse banta hai rock-solid **Ionic Bond** (jaise $Na^+$ aur $Cl^-$ milkar banate hain ordinary table salt $NaCl$)!

Aur metals ke aapas mein? Wahan chalta hai **Reactivity Series ka Power Game**: Jo metal jitna aage baitha hai, wo utna aggressive hai — wo kamzor metal ko uske salt solution se laat maarkar displace kar deta hai!`,
  sections: [
    {
      id: "electronic_nature_physical_properties",
      label: "1. Metals vs Non-Metals: Electronic Nature & The 6 Famous Board Exceptions",
      heading: "Why Metals Donate & The Complete Kundli of Physical Properties & Exceptions",
      subheading: "Lustre + Malleability + Ductility + Thermal/Electrical Conductivity + Sonority",
      explanation: `### Level 1: Electronic Configuration Se Pehchano Metal vs Non-Metal

Elements ki physical aur chemical properties unke outer valence electrons se decide hoti hain:

1. **Metals (Electropositive Elements):**
   - Inke valence shell mein generally **1, 2, ya 3 electrons** hote hain.
   - *Example:* Sodium ($Na = 2,8,1$), Magnesium ($Mg = 2,8,2$), Aluminium ($Al = 2,8,3$).
   - Stable banne ke liye ye electrons **loose (daan)** karte hain aur **Positive Ions (Cations)** banate hain:
     $$Na \\to Na^+ + e^-, \\quad Mg \\to Mg^{2+} + 2e^-, \\quad Al \\to Al^{3+} + 3e^-$$
2. **Non-Metals (Electronegative Elements):**
   - Inke valence shell mein **4, 5, 6, ya 7 electrons** hote hain.
   - *Example:* Nitrogen ($N = 2,5$), Oxygen ($O = 2,6$), Chlorine ($Cl = 2,8,7$).
   - Octet (8 electrons) poora karne ke liye ye electrons **gain (grahan)** karte hain aur **Negative Ions (Anions)** banate hain:
     $$Cl + e^- \\to Cl^-, \\quad O + 2e^- \\to O^{2-}, \\quad N + 3e^- \\to N^{3-}$$

---

### Level 2: Physical Properties & The 6 Famous Board Exceptions

Normal rule sabko pata hota hai, lekin **CBSE Board Examiners hamesha EXCEPTIONS par sawaal puchte hain**! Yahan hai complete list:

1. **Physical State at Room Temperature ($25^\\circ\\text{C}$):**
   - *General Rule:* Saare metals solids hote hain. Non-metals solids, liquids ya gases ho sakte hain.
   - 🔥 **Exception 1 (Liquid Metal):** **Mercury ($Hg$)** akela aisa metal hai jo room temperature par **liquid** hota hai (Melting Point = $-39^\\circ\\text{C}$). Thermometers mein use hota hai.
   - 🔥 **Exception 2 (Liquid Non-Metal):** **Bromine ($Br_2$)** akela aisa non-metal hai jo room temperature par **reddish-brown liquid** hota hai.

2. **Lustre (Chamak / Shininess):**
   - *General Rule:* Metals lustrous hote hain (free electrons light reflect karte hain). Non-metals dull hote hain.
   - 🔥 **Exception 3 (Lustrous Non-Metal):** **Iodine ($I_2$)** ek non-metal hai, par iske paas crystal structure ki wajah se **natural shiny metallic lustre** hoti hai!

3. **Hardness & Melting Point:**
   - *General Rule:* Metals bahut hard hote hain aur inka melting point bahut high hota hai (Tungsten $W = 3422^\\circ\\text{C}$).
   - 🔥 **Exception 4 (Soft Metals Cut with Knife):** Alkali metals — **Lithium ($Li$), Sodium ($Na$), Potassium ($K$)** itne soft hote hain ki unhe ordinary **kitchen butter knife se aasani se kata ja sakta hai**! Inki density itni kam hoti hai ki ye **paani par tairte hain (float on water)**!
   - 🔥 **Exception 5 (Palm Melting Metals):** **Gallium ($Ga$) aur Caesium ($Cs$)** ka melting point itna low hota hai ($Ga = 29.8^\\circ\\text{C}$) ki agar tum inhe apni hatheli (body temp $37^\\circ\\text{C}$) par rakhoge, toh ye **ice cream ki tarah pighal jaayenge**!

4. **Electrical & Thermal Conductivity:**
   - *General Rule:* Metals good conductors hote hain (Silver best hai, fir Copper). Non-metals insulators hote hain.
   - 🔥 **Exception 6 (Carbon Allotropes Wonder):**
     - **Graphite (Conducts Electricity):** Ek non-metal hone ke bawjood electricity conduct karta hai, kyunki iske layered structure mein har carbon sirf 3 bonds banata hai aur 1 electron free hota hai! Isiliye pencils aur dry cell battery electrodes mein use hota hai.
     - **Diamond (Thermal Conductor & Hardest Substance):** Diamond non-metal hai aur electricity bilkul conduct nahi karta (zero free electrons), LEKIN ye duniya ka **best thermal conductor (heat carrier)** hai (copper se bhi 5 guna tez heat flow karta hai lattice vibrations ke through) aur Earth ka **hardest naturally occurring substance** hai (Melting Point $> 3500^\\circ\\text{C}$)!`,
      formulasOrKeyPoints: [
        {
          title: "The Ultimate 6 Exceptions Cheat-Sheet for Board Toppers",
          content: `| Property | Normal Metal Behaviour | Normal Non-Metal Behaviour | The Board-Tested Exception |
| :--- | :--- | :--- | :--- |
| **State at $25^\\circ\\text{C}$** | Solid | Solid / Gas | **Mercury ($Hg$)** is liquid metal; **Bromine ($Br_2$)** is liquid non-metal |
| **Lustre (Shine)** | Shiny / Lustrous | Dull | **Iodine ($I_2$)** has shiny metallic lustre |
| **Hardness** | Very hard | Soft / Brittle | **$Na, K, Li$** are so soft they can be cut with a knife |
| **Melting Point** | Very high | Low | **Gallium ($Ga$) & Caesium ($Cs$)** melt on your palm ($< 30^\\circ\\text{C}$) |
| **Electrical Conduction** | Excellent | Poor / Zero | **Graphite** conducts electricity smoothly |
| **Thermal Conduction** | High | Low | **Diamond** is the best natural heat conductor and hardest substance |`,
          note: "Questions like 'Name a non-metal that is lustrous' or 'Which metal melts on palm?' appear almost every year in 1-mark MCQs."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Distinguish Diamond and Graphite in 3-Mark Questions",
          action: "1. Diamond: All 4 valence electrons locked in covalent bonds $\\to$ 3D rigid tetrahedral lattice $\\to$ Hardest natural substance, zero electrical conductivity, exceptional thermal conductivity.\n2. Graphite: Only 3 valence electrons bonded, 1 delocalized electron free between hexagonal sheets $\\to$ Soft, slippery, excellent electrical conductor.",
          proTip: "Examiner traps students by asking which allotrope of carbon conducts electricity -> Answer is Graphite."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing that all non-metals are gases.",
          correction: "Non-metals exist as solids (Carbon, Sulphur, Phosphorus, Iodine), liquid (Bromine), and gases (Oxygen, Nitrogen, Hydrogen, Chlorine)."
        },
        {
          trap: "Saying Diamond does not conduct heat because it is a non-metal.",
          correction: "Diamond is the BEST thermal conductor in nature! It conducts heat via phonons (crystal lattice vibrations), even though it does NOT conduct electricity."
        }
      ]
    },
    {
      id: "chemical_combat_metals",
      label: "2. Chemical Combat of Metals: Oxygen, Water & Acids",
      heading: "Basic & Amphoteric Oxides, Cold/Hot/Steam Water Rules & The Nitric Acid Exception",
      subheading: "Amphoteric Equations ($Al_2O_3$ & $ZnO$) + Hydrogen Evolution Rules + Aqua Regia (3:1)",
      explanation: `### Level 1: Metals Ki Reaction Hawa (Oxygen) Ke Saath

Jab metals oxygen ke saath react karte hain, toh wo **Metal Oxides** banate hain:
$$\\text{Metal} + \\text{Oxygen} \\to \\text{Metal Oxide}$$

- **Nature of Metal Oxides:** Metal oxides generally **Basic** hote hain. Jo paani mein ghul jaate hain unhe **Alkalis** kehte hain:
  $$Na_2O(s) + H_2O(l) \\to 2NaOH(aq) \\quad [\\text{Turns red litmus blue}]$$
  $$K_2O(s) + H_2O(l) \\to 2KOH(aq)$$
- **Reactivity Order with Air:**
  - $Na$ aur $K$: Itne zyada reactive hote hain ki khule mein rakhte hi aag pakad lete hain! Isiliye inhe **kerosene oil mein doobokar rakha jata hai**.
  - $Mg, Al, Zn, Pb$: Room temperature par inki surface par ek patli protective oxide layer chadh jaati hai (Passivation) jo andar ke metal ko further oxidation se bachati hai.
  - $Cu$: Khule mein aag nahi pakadta, lekin prolonged heating par us par **kaali parat (black coating)** of Copper(II) Oxide ($CuO$) chadh jaati hai:
    $$2Cu(s) + O_2(g) \\xrightarrow{\\Delta} 2CuO(s) [\\text{Black Coating}]$$
  - $Ag, Au$: High temperature par bhi oxygen se react nahi karte — isiliye gold hamesha chamakta rehta hai!

---

### Level 2: The Amphoteric Oxides (Double Agents of Chemistry!)

> 🌟 **Definition:** Aise metal oxides jo **Acids aur Bases dono ke saath react karke Salt aur Water banate hain**, unhe **Amphoteric Oxides** kehte hain!

NCERT mein do star examples hain: **Aluminium Oxide ($Al_2O_3$)** aur **Zinc Oxide ($ZnO$)**.

#### 1. Aluminium Oxide ($Al_2O_3$) Reactions (Board Compulsory 3-Mark Question):
- **Acid ke saath (acting as Base):**
  $$Al_2O_3(s) + 6HCl(aq) \\to 2AlCl_3(aq) + 3H_2O(l)$$
- **Base ke saath (acting as Acid):**
  $$Al_2O_3(s) + 2NaOH(aq) \\to 2NaAlO_2(aq) [\\text{Sodium Aluminate}] + H_2O(l)$$

#### 2. Zinc Oxide ($ZnO$) Reactions:
- **Acid ke saath:**
  $$ZnO(s) + 2HCl(aq) \\to ZnCl_2(aq) + H_2O(l)$$
- **Base ke saath:**
  $$ZnO(s) + 2NaOH(aq) \\to Na_2ZnO_2(aq) [\\text{Sodium Zincate}] + H_2O(l)$$

---

### Level 3: Metals Ki Reaction Paani (Water) Ke Saath

Paani ke saath reaction metal ki reactivity par depend karti hai:
$$\\text{Metal} + \\text{Water} \\to \\text{Metal Hydroxide/Oxide} + H_2(g) \\uparrow$$

| Category of Water | Metals Involved | Observations & Reactions |
| :--- | :--- | :--- |
| **Cold Water (Thanda Paani)** | Potassium ($K$), Sodium ($Na$) | Reaction itni violent aur exothermic hoti hai ki evolved $H_2$ gas **turant aag pakad leti hai**: <br>$$2Na(s) + 2H_2O(l) \\to 2NaOH(aq) + H_2(g) + \\text{Heat}$$ |
| **Cold Water (Mild)** | Calcium ($Ca$) | Less violent; aag nahi lagti. **Calcium paani par float karne lagta hai** kyunki $H_2$ gas ke bubbles calcium ki surface par chipak jaate hain: <br>$$Ca(s) + 2H_2O(l) \\to Ca(OH)_2(aq) + H_2(g)$$ |
| **Hot Water (Garam Paani)** | Magnesium ($Mg$) | Thande paani se react nahi karta, sirf **garam paani** se react karta hai aur ye bhi $H_2$ bubbles chipakne se float karta hai: <br>$$Mg(s) + 2H_2O(l) \\xrightarrow{\\text{Hot}} Mg(OH)_2(aq) + H_2(g)$$ |
| **Steam Only (Sirf Bhaap)** | Aluminium ($Al$), Zinc ($Zn$), Iron ($Fe$) | Liquid paani (thande ya garam) se BILKUL react nahi karte! Sirf **steam (bhaap)** ke saath react karte hain aur **Oxides** banate hain: <br>$$3Fe(s) + 4H_2O(g) \\to Fe_3O_4(s) [\\text{Magnetic Oxide}] + 4H_2(g)$$ <br>$$2Al(s) + 3H_2O(g) \\to Al_2O_3(s) + 3H_2(g)$$ |
| **No Reaction At All** | Lead ($Pb$), Copper ($Cu$), Silver ($Ag$), Gold ($Au$) | Thande paani, garam paani, ya steam kisi se bhi react nahi karte! |

---

### Level 4: Metals Ki Reaction Acids Ke Saath & The $HNO_3$ Mystery

General Rule:
$$\\text{Metal} + \\text{Dilute Acid} \\to \\text{Salt} + H_2(g) \\uparrow$$
$$Zn(s) + 2HCl(aq) \\to ZnCl_2(aq) + H_2(g) \\uparrow$$

🔥 **The Famous Nitric Acid ($HNO_3$) Board Question:**
*Question: "Why is Hydrogen gas NOT evolved when metals react with dilute Nitric Acid ($HNO_3$)?"*
*Answer:* Nitric acid ek **ruthless, powerful Oxidising Agent** hai! Jaise hi reaction mein $H_2$ gas banti hai, $HNO_3$ us $H_2$ ko oxidise karke **paani ($H_2O$)** bana deta hai aur khud reduce hokar Nitrogen ke oxides (**$N_2O, NO, \\text{ ya } NO_2$**) mein convert ho jata hai!

> 🔑 **The ONLY Two Exceptions:**
> Sirf **Magnesium ($Mg$) aur Manganese ($Mn$)** do aise metals hain jo **extremely dilute (1%) Nitric acid** ke saath react karke $H_2$ gas liberate karte hain:
> $$Mg(s) + 2HNO_3(\\text{very dilute}) \\to Mg(NO_3)_2(aq) + H_2(g) \\uparrow$$
> $$Mn(s) + 2HNO_3(\\text{very dilute}) \\to Mn(NO_3)_2(aq) + H_2(g) \\uparrow$$

---

### Level 5: Aqua Regia (Royal Water / Amla-Raaj)
Gold ($Au$) aur Platinum ($Pt$) itne unreactive hain ki kisi single concentrated acid ($HCl, HNO_3, H_2SO_4$) mein nahi ghulte.
Unhe gholne ke liye chemists banate hain **Aqua Regia**:
- **Composition:** Freshly prepared mixture of **Concentrated $HCl$** and **Concentrated $HNO_3$** in the ratio **$3 : 1$ by volume**:
  $$\\text{Conc. } HCl : \\text{Conc. } HNO_3 = 3 : 1$$
- Ye fuming, highly corrosive yellow liquid nascient chlorine release karta hai jo gold aur platinum ko bhi dissolve kar leta hai!`,
      formulasOrKeyPoints: [
        {
          title: "Amphoteric Oxides Balanced Master Formulas",
          content: "$$\\begin{aligned} Al_2O_3 + 6HCl &\\to 2AlCl_3 + 3H_2O \\\\ Al_2O_3 + 2NaOH &\\to 2NaAlO_2 \\text{ [Sodium Aluminate]} + H_2O \\\\ ZnO + 2HCl &\\to ZnCl_2 + H_2O \\\\ ZnO + 2NaOH &\\to Na_2ZnO_2 \\text{ [Sodium Zincate]} + H_2O \\end{aligned}$$",
          note: "Formulas of Sodium Aluminate ($NaAlO_2$) and Sodium Zincate ($Na_2ZnO_2$) are examiner favorites."
        },
        {
          title: "Aqua Regia Ratio Formula",
          content: "$$\\frac{\\text{Volume of Conc. } HCl}{\\text{Volume of Conc. } HNO_3} = \\frac{3}{1}$$",
          note: "Do not reverse the ratio! $HCl$ has 3 parts; $HNO_3$ has 1 part."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Check Water Reaction Conditions",
          action: "1. Sodium/Potassium $\\to$ Cold water (fire catches).\n2. Calcium $\\to$ Cold water (floats).\n3. Magnesium $\\to$ Hot water only (floats).\n4. Aluminium/Zinc/Iron $\\to$ Steam only (forms oxide + $H_2$).\n5. Copper/Silver/Gold $\\to$ No reaction.",
          proTip: "Remember: Iron with steam produces $Fe_3O_4$ (magnetic iron oxide), NOT $Fe_2O_3$ or $FeO$."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing the ratio of Aqua Regia as 1 : 3 of Conc. HCl : Conc. HNO3.",
          correction: "Aqua Regia is strictly 3 parts Concentrated Hydrochloric Acid (HCl) and 1 part Concentrated Nitric Acid (HNO3). Ratio = 3 : 1."
        },
        {
          trap: "Writing $Fe + H_2O(l) \\to Fe(OH)_2 + H_2$.",
          correction: "Iron does NOT react with liquid water. It reacts exclusively with steam: $3Fe(s) + 4H_2O(g) \\to Fe_3O_4(s) + 4H_2(g)$."
        }
      ]
    },
    {
      id: "reactivity_series_displacement",
      label: "3. The Reactivity Series & Displacement Combat",
      heading: "The Power Hierarchy of Metals & The Ultimate Desi Memory Mnemonic",
      subheading: "Displacement Rules + Predicting 'No Reaction' in CBSE Board Papers",
      explanation: `### Level 1: Reactivity Series Kya Hai?

Jab metals ko unki chemical reactivity ke hisaab se **decreasing order (upar se neeche)** arrange kiya jata hai, toh us vertical column ko **Reactivity Series (Activity Series)** kehte hain.

> 👑 **The King at Top:** Potassium ($K$) — sabse violent aur aggressive.
> 🪨 **The Nobles at Bottom:** Gold ($Au$), Platinum ($Pt$) — shaant aur inert.

---

### Level 2: The Ultimate Desi Mnemonic (Zindagi Bhar Yaad Rahega!)

$$\\begin{array}{rcll}
\\mathbf{K} & \\to & \\text{Kashi} & \\text{(Potassium - Most Reactive)} \\\\
\\mathbf{Na} & \\to & \\text{Nath} & \\text{(Sodium)} \\\\
\\mathbf{Ca} & \\to & \\text{Ka} & \\text{(Calcium)} \\\\
\\mathbf{Mg} & \\to & \\text{Maali} & \\text{(Magnesium)} \\\\
\\mathbf{Al} & \\to & \\text{Aloo} & \\text{(Aluminium)} \\\\
\\mathbf{Zn} & \\to & \\text{Zara} & \\text{(Zinc)} \\\\
\\mathbf{Fe} & \\to & \\text{Feeke} & \\text{(Iron)} \\\\
\\mathbf{Pb} & \\to & \\text{Pakata} & \\text{(Lead)} \\\\
\\mathbf{[H]} & \\to & \\text{Hai} & \\text{(Hydrogen - Benchmark Non-metal)} \\\\
\\mathbf{Cu} & \\to & \\text{Con} & \\text{(Copper)} \\\\
\\mathbf{Hg} & \\to & \\text{Hai} & \\text{(Mercury)} \\\\
\\mathbf{Ag} & \\to & \\text{Aage} & \\text{(Silver)} \\\\
\\mathbf{Au} & \\to & \\text{Aao!} & \\text{(Gold - Least Reactive)}
\\end{array}$$

*Mnemonic Sentence:* **"Kashi Nath Ka Maali Aloo Zara Feeke Pakata Hai, Con Hai Aage Aao!"**

---

### Level 3: Displacement Reaction Ka Fundamental Rule

> **"A metal placed HIGHER in the reactivity series can displace a metal placed LOWER from its aqueous salt solution."**
> *(Upar wala metal neeche wale metal ko uske ghar (salt solution) se laat maarkar nikaal sakta hai, lekin neeche wala metal upar wale ko touch bhi nahi kar sakta!)*

#### Case 1: Iron in Copper Sulphate ($Fe + CuSO_4$)
- Reactivity check: Iron ($Fe$) is ABOVE Copper ($Cu$).
- Result: **Reaction hoti hai!**
  $$Fe(s) + CuSO_4(aq) [\\text{Blue}] \\to FeSO_4(aq) [\\text{Pale Green}] + Cu(s) [\\text{Reddish-Brown}]$$

#### Case 2: Copper in Ferrous Sulphate ($Cu + FeSO_4$)
- Reactivity check: Copper ($Cu$) is BELOW Iron ($Fe$).
- Result: **NO REACTION!** Copper iron ko displace nahi kar sakta.

#### Case 3: Reaction with Dilute Acids ($HCl / H_2SO_4$)
- Jo metals **Hydrogen ($H$) se UPAR** hain ($K, Na, Ca, Mg, Al, Zn, Fe, Pb$), wo dilute acids se $H_2$ gas nikaal sakte hain:
  $$Zn(s) + 2HCl(aq) \\to ZnCl_2(aq) + H_2(g) \\uparrow$$
- Jo metals **Hydrogen se NEECHE** hain ($Cu, Hg, Ag, Au$), wo dilute acids se react **NAHI** karte:
  $$Cu(s) + HCl(aq) \\to \\text{NO REACTION!}$$`,
      formulasOrKeyPoints: [
        {
          title: "Reactivity Hierarchy Rule",
          content: "$$\\mathbf{K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au}$$",
          note: "Metals above H displace H₂ from dilute acids; metals below H do NOT."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Predict Displacement Outcome in 2 Steps",
          action: "1. Locate free metal and bonded cation on the mnemonic: K-Na-Ca-Mg-Al-Zn-Fe-Pb-[H]-Cu-Hg-Ag-Au.\n2. If free metal is ABOVE, write displaced products. If free metal is BELOW, boldly write 'NO REACTION'.",
          proTip: "Board papers love asking: 'What happens when a copper wire is dipped into silver nitrate solution?' Since Cu is above Ag, Cu displaces Ag: $Cu + 2AgNO_3 \\to Cu(NO_3)_2 + 2Ag$."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing $Cu + H_2SO_4(dil) \\to CuSO_4 + H_2$.",
          correction: "Copper lies below hydrogen. It NEVER displaces hydrogen gas from dilute sulphuric acid!"
        }
      ]
    },
    {
      id: "ionic_bonding_properties",
      label: "4. Ionic Bonding: Electron Dot Structures & Crystal Lattice Properties",
      heading: "How Salts Are Born Through Electron Transfer & Why They Conduct in Molten State",
      subheading: "Lewis Dot Diagrams ($NaCl, MgCl_2, CaO$) + 4 Physical Properties of Ionic Compounds",
      explanation: `### Level 1: Ionic (Electrovalent) Bond Kaise Banta Hai?

Metals chahte hain electron loose karna (Cation banna) aur Non-metals chahte hain electron gain karna (Anion banna).
Jab ek metal atom se ek ya zyada electrons **completely transfer** hokar non-metal atom ke paas chale jaate hain, toh dono par opposite charges ($+$ aur $-$) aa jaate hain. Ye opposite charges ek-doosre ko powerful electrostatic force se attract karte hain — is bond ko **Ionic Bond (Electrovalent Bond)** kehte hain!

---

### Level 2: Top 3 Electron-Dot Structures for Board Exams

#### 1. Formation of Sodium Chloride ($NaCl$):
- Sodium atom ($Na = 11$): Electronic configuration $= 2, 8, 1$.
  $$Na \\to Na^+ (2,8) + e^-$$
- Chlorine atom ($Cl = 17$): Electronic configuration $= 2, 8, 7$.
  $$Cl + e^- \\to Cl^- (2,8,8)$$
- Electron transfer representation:
  $$Na^{\\bullet} + \\quad :\\!\\!\\ddot{Cl}\\!: \\quad \\to [Na]^+ [:!\\!\\ddot{Cl}\\!:]^- \\implies NaCl$$

#### 2. Formation of Magnesium Chloride ($MgCl_2$):
- Magnesium atom ($Mg = 12$): Electronic configuration $= 2, 8, 2$. Iske paas 2 extra electrons hain daan dene ke liye:
  $$Mg \\to Mg^{2+} (2,8) + 2e^-$$
- Chlorine atom ($Cl = 17$) sirf 1 electron le sakta hai. Isiliye $Mg$ ke 2 electrons lene ke liye **2 Chlorine atoms** aate hain:
  $$2Cl + 2e^- \\to 2Cl^- (2,8,8)$$
- Electron transfer:
  $$Mg^{\\bullet\\bullet} + 2\\ [:!\\!\\ddot{Cl}\\!:] \\to [Mg]^{2+} 2[:!\\!\\ddot{Cl}\\!:]^- \\implies MgCl_2$$

#### 3. Formation of Calcium Oxide ($CaO$):
- Calcium ($Ca = 20$): $2,8,8,2 \\to Ca^{2+} + 2e^-$
- Oxygen ($O = 8$): $2,6 + 2e^- \\to O^{2-}$
- Transfer:
  $$Ca^{\\bullet\\bullet} + \\ddot{O}: \\to [Ca]^{2+} [:!\\!\\ddot{O}\\!:]^{2-} \\implies CaO$$

---

### Level 3: Properties of Ionic Compounds (Direct 3-Mark Question)

1. **Physical Nature (Hard & Brittle):**
   - Opposite ions ($+$ aur $-$) ke beech bahut strong electrostatic forces of attraction hote hain, isiliye ionic compounds **hard crystalline solids** hote hain.
   - Ye **brittle (bhangur)** hote hain: jab hammer se hit karte hain, toh same-charge ions ek doosre ke saamne aa jaate hain aur repulsion ke karan crystal shatter ho jata hai.
2. **High Melting and Boiling Points:**
   - Giant 3D crystal lattice mein strong ionic bonds ko todne ke liye **huge amount of thermal energy** chahiye hoti hai ($NaCl$ melting point = $801^\\circ\\text{C}$ / $1074\\text{ K}$).
3. **Solubility:**
   - Generally **water soluble** hote hain (polar solvent paani ions ko alag kar deta hai).
   - Insoluble in non-polar organic solvents jaise kerosene, petrol, benzene.
4. **Electrical Conductivity (The Classic CBSE Paradox!):**
   - **Solid State Mein ZERO Conduction:** Solid crystal mein ions rigid lattice positions par locked hote hain, koi free mobile ion nahi hota $\\implies$ Solid $NaCl$ conducts NO electricity!
   - **Molten State ya Aqueous Solution Mein EXCELLENT Conduction:** Paani mein gholne par ya pighlane (molten) par electrostatic bonds toot jaate hain aur $Na^+$ aur $Cl^-$ ions **free to move (mobile charge carriers)** ban jaate hain $\\implies$ Current easily flow karta hai!`,
      formulasOrKeyPoints: [
        {
          title: "Ionic Bonding Diagnostic Checklist",
          content: "$$\\begin{aligned} \\text{Bond Type:} &\\quad \\text{Complete transfer of electrons from Metal } (e^- \\text{ donor}) \\text{ to Non-Metal } (e^- \\text{ acceptor}) \\\\ \\text{Electrical Rule:} &\\quad \\text{Solid state} = \\text{Insulator} \\quad | \\quad \\text{Molten / Aqueous} = \\text{Conductor} \\end{aligned}$$",
          note: "Examiner trap: 'Does solid dry NaCl conduct electricity?' Answer: No, due to absence of free mobile ions."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "How to Draw Electron Dot Structures in Board Exam",
          action: "1. Write electronic configurations: Na (2,8,1), Cl (2,8,7).\n2. Show ionization equations: $Na \\to Na^+ + e^-$ and $Cl + e^- \\to Cl^-$.\n3. Draw valence electrons as dots (•) or crosses (x) around symbols and show arrow transferring electron.\n4. Write final ionic brackets: $[Na]^+ [Cl]^-$.",
          proTip: "Use dots for metal electrons and crosses (x) for non-metal electrons to make the transfer obvious to the examiner."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing that ionic compounds conduct electricity in solid state because they have ions.",
          correction: "Having ions is not enough! Ions must be FREE TO MOVE. In solid state, ions are locked in fixed positions by strong electrostatic forces. They conduct electricity ONLY in molten state or aqueous solution."
        }
      ]
    },
    {
      id: "metallurgy_ores_refining",
      label: "5. Metallurgy: From Muddy Ore to 99.99% Pure Metal",
      heading: "Minerals, Ores, Gangue + Roasting vs Calcination + Thermite + Electrolytic Refining",
      subheading: "Complete Metallurgical Journey Across High, Medium & Low Reactivity Metals",
      explanation: `### Level 1: Basic Metallurgical Vocabulary

1. **Mineral (Khanij):** Earth's crust mein naturally milne wale compounds jisme metals present hote hain.
2. **Ore (Ayyask):** Aise minerals jinse metal ko **kam kharche mein aur aasaani se profitably extract** kiya ja sake.
   > *"All ores are minerals, but all minerals are not ores!"*
   - E.g. Bauxite ($Al_2O_3 \\cdot 2H_2O$) is an ore of Aluminium; Cinnabar ($HgS$) is an ore of Mercury; Calamine ($ZnCO_3$) is an ore of Zinc.
3. **Gangue (Matrix):** Ore ke saath khode gaye anchaahe kachra, sand, mitti, clay aur rocky impurities.

---

### Level 2: The Metallurgical Roadmap (3 Reactivity Tiers)

Metal extraction uski position in reactivity series par depend karta hai:

#### Tier 1: Low Reactivity Metals (Bottom: $Hg, Cu$)
Inke oxides itne unstable hote hain ki **sirf simple heat karne se reduce ho jaate hain**!
- **Extraction of Mercury from Cinnabar ($HgS$):**
  - *Step 1 (Roasting):*
    $$2HgS(s) [\\text{Cinnabar}] + 3O_2(g) \\xrightarrow{\\Delta} 2HgO(s) + 2SO_2(g) \\uparrow$$
  - *Step 2 (Thermal Reduction):*
    $$2HgO(s) \\xrightarrow{\\Delta} 2Hg(l) + O_2(g) \\uparrow$$

---

#### Tier 2: Medium Reactivity Metals (Middle: $Zn, Fe, Pb$)
Ye nature mein Sulphide ya Carbonate ores ke roop mein milte hain.
Metal oxides ko reduce karna zyada aasaan hota hai, isiliye pehle ore ko **Oxide** mein convert karte hain:

> ⚖️ **Roasting vs Calcination (The Ultimate Board Comparison Table):**

| Parameter | Roasting (Bharjan) | Calcination (Nistapan) |
| :--- | :--- | :--- |
| **Applicable Ore** | **Sulphide Ores** (e.g. Zinc Blende $ZnS$) | **Carbonate Ores** (e.g. Calamine $ZnCO_3$) |
| **Air Supply** | **EXCESS presence of air** (Lots of $O_2$) | **LIMITED or ABSENCE of air** (Bandh bhatti) |
| **Gas Evolved** | Choking **Sulphur dioxide ($SO_2$)** gas | Odorless **Carbon dioxide ($CO_2$)** gas |
| **Desi Mnemonic** | **R** for Roasting = **R**equires Air + Sulphide | **C** for Calcination = **C**arbonate + **C**losed |
| **Chemical Equation** | $$2ZnS(s) + 3O_2(g) \\xrightarrow{\\Delta} 2ZnO(s) + 2SO_2(g)$$ | $$ZnCO_3(s) \\xrightarrow{\\Delta} ZnO(s) + CO_2(g)$$ |

#### Reducing Metal Oxide to Free Metal:
1. **Using Carbon (Coke) as Reducing Agent:**
   $$ZnO(s) + C(s) \\xrightarrow{\\Delta} Zn(s) + CO(g) \\uparrow$$
2. **Thermite Reaction (Aluminothermy - Railway Track Welding):**
   Kuch metal oxides ko carbon se reduce karne ke bajaye highly reactive **Aluminium powder** se reduce karte hain. Ye reaction itni fiercely exothermic hoti hai ki banne wala **loha (Iron) molten liquid state mein nikalta hai**:
   $$Fe_2O_3(s) + 2Al(s) \\xrightarrow{\\text{Ignition}} 2Fe(l) [\\text{Molten Iron}] + Al_2O_3(s) + \\text{Immense Heat } (3000^\\circ\\text{C})$$
   Ye molten iron sidhe cracked railway tracks ke gaps mein jakar jam jata hai aur track weld ho jata hai!

---

#### Tier 3: High Reactivity Metals (Top: $K, Na, Ca, Mg, Al$)
- Ye metals oxygen aur chlorine se itna strong bond banate hain ki **Carbon inke oxygen ko cheen hi nahi sakta**!
- Isiliye inka extraction sirf **Electrolytic Reduction of Molten Salts** se hota hai:
  - *Electrolysis of Molten $NaCl$:*
    - **Cathode ($-ve$):** $Na^+ + e^- \\to Na(l)$ [Metal deposits at Cathode]
    - **Anode ($+ve$):** $2Cl^- \\to Cl_2(g) + 2e^-$ [Chlorine gas escapes at Anode]

---

### Level 3: Electrolytic Refining of Copper (100% Guaranteed 3-Mark Question)

Impure crude copper ko 99.99% pure banane ke liye electrolytic cell banaya jata hai:
- **Anode ($+ve$ Electrode):** Mota impure copper ka slab (Thick slab of Impure Copper).
- **Cathode ($-ve$ Electrode):** Patli pure copper ki strip (Thin strip of Pure Copper).
- **Electrolyte:** Acidified Copper Sulphate ($CuSO_4$) solution.

#### Cell Reactions:
1. **At Anode:** Impure copper ghul kar solution mein $Cu^{2+}$ ions banta hai:
   $$Cu(s) [\\text{Impure Anode}] \\to Cu^{2+}(aq) + 2e^-$$
2. **At Cathode:** Solution ke $Cu^{2+}$ ions cathode par jakar electrons le lete hain aur pure copper metal bankar deposit ho jaate hain:
   $$Cu^{2+}(aq) + 2e^- \\to Cu(s) [\\text{Deposited on Cathode}]$$
3. **Anode Mud (Anode Pank):** Impure copper mein maujood soluble impurities solution mein ghul jaati hain, jabki insoluble valuable noble metals (**Gold $Au$, Silver $Ag$, Platinum $Pt$**) anode ke theek neeche floor par settle ho jaate hain — jise **Anode Mud** kehte hain!`,
      formulasOrKeyPoints: [
        {
          title: "Roasting & Calcination Master Equations",
          content: "$$\\begin{aligned} \\text{Roasting (Sulphide + Air):} &\\quad 2ZnS + 3O_2 \\xrightarrow{\\Delta} 2ZnO + 2SO_2 \\uparrow \\\\ \\text{Calcination (Carbonate in no air):} &\\quad ZnCO_3 \\xrightarrow{\\Delta} ZnO + CO_2 \\uparrow \\\\ \\text{Thermite Reaction:} &\\quad Fe_2O_3 + 2Al \\to 2Fe(l) + Al_2O_3 + \\text{Heat} \\end{aligned}$$",
          note: "Remember: Roasting releases SO₂; Calcination releases CO₂."
        },
        {
          title: "Electrolytic Refining Cell Setup Checklist",
          content: "$$\\begin{aligned} \\text{Anode (+):} &\\quad \\text{Impure metal slab (gets thinner)} \\\\ \\text{Cathode (-):} &\\quad \\text{Pure metal strip (gets thicker)} \\\\ \\text{Electrolyte:} &\\quad \\text{Acidified } CuSO_4 \\text{ solution} \\\\ \\text{Anode Mud:} &\\quad \\text{Insoluble impurities } (Ag, Au, Pt) \\text{ below anode} \\end{aligned}$$",
          note: "Electrons flow from anode to cathode; pure copper mass increases on the cathode strip."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Label Electrolytic Refining Diagram Accurately",
          action: "1. Positive terminal connects to thick impure anode.\n2. Negative terminal connects to thin pure cathode.\n3. Show acidified $CuSO_4$ solution.\n4. Clearly mark 'Anode Mud' directly under the anode.",
          proTip: "CBSE gives 1 mark just for identifying the anode and cathode materials."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Roasting with Calcination in chemical extraction equations.",
          correction: "Mnemonic: Calcination starts with 'C' for Carbonate ores, requiring limited/no air and releasing CO₂. Roasting is for Sulphide ores, requiring excess air (O₂) and releasing SO₂ gas."
        },
        {
          trap: "Saying reactive metals like Sodium or Aluminium can be reduced using carbon/coke.",
          correction: "Sodium and Aluminium have far greater affinity for oxygen than carbon does. Carbon CANNOT reduce their oxides. They can only be extracted by electrolytic reduction of molten salts."
        }
      ]
    },
    {
      id: "corrosion_alloys_engineered_materials",
      label: "6. Corrosion Investigation (Activity 3.14) & Commercial Alloys",
      heading: "The 3 Test-Tubes Rusting Setup & Engineered Intermetallic Alloys",
      subheading: "Galvanisation Sacrificial Science + Brass, Bronze, Solder, Stainless Steel, Amalgam & 22K Gold",
      explanation: `### Level 1: Conditions for Rusting — NCERT Activity 3.14

Lohe par zang lagne ke liye kya chahiye? NCERT ne 3 test-tubes ka landmark experiment design kiya:

| Test Tube | Contents & Condition | Observation After 1 Week | Scientific Inference |
| :--- | :--- | :--- | :--- |
| **Test Tube A** | Clean iron nails half-submerged in tap water + hawa maujood hai | Nails par **heavy reddish-brown rust** lag gaya | **Both Air (Oxygen) and Water (Moisture) are strictly required** for rusting! |
| **Test Tube B** | **Boiled distilled water** (boiling se dissolved air nikal jaati hai) + upar se **oil ki layer** daal di | Nails bilkul shiny hain, **NO RUST** | Oil ki layer hawa ki oxygen ko paani mein dissolve nahi hone deti. **Sirf paani bina oxygen ke zang nahi laga sakta!** |
| **Test Tube C** | Sukhi hawa + **Anhydrous Calcium Chloride ($CaCl_2$)** ka tukda + tight cork | Nails bilkul shiny hain, **NO RUST** | Anhydrous $CaCl_2$ test-tube ki saari moisture sokh leta hai (drying agent). **Sirf oxygen bina moisture ke zang nahi laga sakti!** |

---

### Level 2: Prevention of Corrosion & Galvanisation Science

1. **Barrier Methods:** Painting, oiling, greasing, enamelling (surface ko hawa aur paani se alag rakhna).
2. **Galvanisation (CBSE Gold Question):**
   - Lohe aur steel ke articles par **pighle hue Zinc ($Zn$) ki patli layer** chadhana.
   - *Question: Agar galvanised surface par gehra scratch lag jaye, tab bhi loha kyun nahi rust karta?*
   - *Answer:* Zinc reactivity series mein lohe ($Fe$) se upar baitha hai (Zinc is more electropositive than iron). Scratch hone ke bawjood, **Zinc khud pehle oxidise hota hai (sacrificially corrodes)**:
     $$Zn \\to Zn^{2+} + 2e^-$$
     Ye electrons lohe ke atoms ko oxidize hone se rokte hain! Isko **Sacrificial Anodic Protection** kehte hain!
   - *Contrast with Tin plating:* Agar Tin ($Sn$) ki layer scratch ho jaye, toh loha tin se zyada reactive hone ke karan **pehle se bhi 10 guna tez speed se zang pakadta hai**!
3. **Anodising:** Aluminium articles par electrolysis ke through $Al_2O_3$ ki moti, corrosion-proof aur decorative oxide layer chadhana.

---

### Level 3: The World of Alloys (Mishradhaatu)

> **Definition:** Do ya do se zyada metals, ya metal aur non-metal ka **Homogeneous Mixture** jise unki properties (hardness, strength, corrosion resistance) improve karne ke liye banaya jata hai.

- Pure Iron bahut soft hota hai aur garam hone par aasani se khinch jata hai. Lekin jab isme sirf **0.05% Carbon** mila dete hain, toh ye rock-hard aur immensely strong ban jata hai!

#### All 6 CBSE Benchmark Commercial Alloys:

1. **Brass (Peetal):**
   - **Composition:** Copper ($Cu$, 70%) + Zinc ($Zn$, 30%)
   - **Property:** Malleable, beautiful golden shine, acoustic resonance.
   - **Uses:** Musical instruments (trumpets), decorative statues, utensils, nuts & bolts.
2. **Bronze (Kansa):**
   - **Composition:** Copper ($Cu$, 90%) + Tin ($Sn$, 10%)
   - **Property:** Extremely tough, friction-resistant, saltwater corrosion proof.
   - **Uses:** Medals, statues, temple bells, ship propellers.
   - 🧠 *Memory Trick:* **BroNZ** has 'Z' in sound, so it does NOT contain Zinc! Bronze pairs with Tin ($Sn$). **BraSS** has two 'S's, pairs with Zinc ($Zn$).
3. **Solder (Taanka):**
   - **Composition:** Lead ($Pb$, 50%) + Tin ($Sn$, 50%)
   - **Property:** **Exceptionally LOW melting point** (~$183^\\circ\\text{C}$).
   - **Uses:** Electrical circuit boards mein wires ko aapas mein **weld (jodne)** ke liye solder wire use hoti hai.
4. **Stainless Steel:**
   - **Composition:** Iron ($Fe$) + Nickel ($Ni$) + Chromium ($Cr$) + Carbon ($C \\sim 0.1\\% - 0.5\\%$)
   - **Property:** Super hard, scratches nahi padte, aur **life-time rust-proof**!
   - **Uses:** Surgical knives, kitchen utensils, cookware, industrial tanks.
5. **Amalgam:**
   - **Definition:** Koi bhi aisa alloy jisme **ek constituent metal Liquid Mercury ($Hg$)** ho.
   - **Example:** Dental amalgam ($Hg + Ag + Sn$) daanton ki cavity bharne ke liye; Sodium amalgam ($Na-Hg$) lab reducing agent.
6. **Purity of Gold (24-Carat vs 22-Carat):**
   - **Pure 24-Carat Gold:** Extremely soft and malleable hota hai. Iske gehne banayein toh thoda sa dabane par hi shape kharab ho jaayegi!
   - **22-Carat Gold:** 22 parts by mass of pure gold alloyed with **2 parts of either Copper ($Cu$) or Silver ($Ag$)**.
   - Ye copper/silver gold ke crystal lattice ko lock kar dete hain, jisse ornaments hard, durable aur long-lasting bante hain!`,
      formulasOrKeyPoints: [
        {
          title: "Master CBSE Commercial Alloy Composition Table",
          content: "$$\\begin{aligned} \\text{Brass:} &\\quad Cu (\\text{Copper}) + Zn (\\text{Zinc}) \\\\ \\text{Bronze:} &\\quad Cu (\\text{Copper}) + Sn (\\text{Tin}) \\\\ \\text{Solder:} &\\quad Pb (\\text{Lead}) + Sn (\\text{Tin}) \\quad [\\text{Low Melting Point for Electrical Welding}] \\\\ \\text{Stainless Steel:} &\\quad Fe (\\text{Iron}) + Ni (\\text{Nickel}) + Cr (\\text{Chromium}) + C \\\\ \\text{Amalgam:} &\\quad \\text{Any Metal} + Hg (\\text{Mercury}) \\\\ \\text{22-Carat Gold:} &\\quad 22/24 \\text{ Gold} + 2/24 (Cu \\text{ or } Ag) \\end{aligned}$$",
          note: "Board question: 'Which property of solder makes it suitable for welding electrical wires?' Answer: Its exceptionally low melting point."
        },
        {
          title: "Rust Chemical Formula & Conditions",
          content: "$$4Fe(s) + 3O_2(g) + 2xH_2O(l) \\to 2Fe_2O_3 \\cdot xH_2O(s) \\quad [\\text{Hydrated Ferric Oxide}]$$",
          note: "Rusting requires SIMULTANEOUS presence of both moisture (H₂O) and oxygen (O₂)."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Answer Activity 3.14 Three Test Tubes Experiment",
          action: "1. Tube A (Water + Air): Nails rust heavily (both conditions fulfilled).\n2. Tube B (Boiled water + Oil seal): No rust (oxygen excluded).\n3. Tube C (Dry air + Anhydrous CaCl2): No rust (moisture excluded).",
          proTip: "Always mention the role of anhydrous $CaCl_2$ as a drying agent and boiled water + oil layer as an oxygen barrier."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing that Brass is Copper + Tin and Bronze is Copper + Zinc.",
          correction: "Mnemonic: BroNZ has 'Z' in sound -> contains NO Zinc (Bronze = Cu + Sn). Brass = Cu + Zn."
        },
        {
          trap: "Stating that pure 24-carat gold is used for making fine jewellery.",
          correction: "24-carat gold is far too soft and deforms easily. It must be alloyed with 2 parts copper or silver (22-carat gold) to impart structural hardness."
        }
      ]
    }
  ]
};
