import type { ScienceChapterConcept } from "./types";

export const SCI_CH1_CONCEPT: ScienceChapterConcept = {
  chapterNo: 1,
  title: "Chemical Reactions and Equations",
  discipline: "Chemistry",
  weightage: "6–8 Marks (Board Mandatory)",
  oneLiner: "Chemical reaction mein purane bonds toot-te hain aur naye bonds bante hain; Law of Conservation of Mass follow karna compulsory hai jiske liye balancing zaroori hoti hai.",
  analogyTitle: "Kitchen Cooking & The Indestructible Lego Assembly",
  analogyContent: `Imagine karo tum kitchen mein cake bake kar rahe ho — maida, cheeni, doodh aur cocoa powder ko mix karke oven mein rakha. Jab cake bake hokar bahar nikalta hai, toh kya tum wapas cheeni ya maida alag kar sakte ho? Bilkul nahi! 

Kyun? Kyunki ye ek **Chemical Reaction** hai — purane chemical bonds toot gaye aur nayi properties ke saath ek naya product ban gaya!

Aur balancing ka matlab? Imagine karo Lego blocks ka set: Agar tumne 4 laal blocks aur 2 neele blocks se building banayi, toh building tod kar car banaoge tab bhi wahi 4 laal aur 2 neele blocks rahenge — koi block hawa mein gayab nahi hota (**Law of Conservation of Mass**). Chemical equations mein LHS aur RHS par har element ke atoms hamesha equal hone chahiye!`,
  sections: [
    {
      id: "chemical_reactions_basics",
      label: "1. Chemical Change vs Physical Change & Law of Conservation of Mass",
      heading: "Basics of Chemical Reactions, Bond Cleavage & Atomic Accounting",
      subheading: "Real-Life Examples + Reversibility + Antoine Lavoisier's Golden Rule",
      explanation: `### Level 1: Chemical Reaction Asal Mein Hoti Kya Hai?

Daily life mein hum do tarah ke changes dekhte hain:
1. **Physical Change (Bhautik Parivartan):** 
   - Sirf state ya appearance badalti hai, koi naya substance nahi banta.
   - *Example:* Ice ka pighalna ($H_2O(s) \\to H_2O(l)$), kagaz ka phadna, paani mein namak ka ghulna.
   - Isko physical methods (heating, cooling, filtration) se easily reverse kiya ja sakta hai.
2. **Chemical Change / Reaction (Rasayanik Abhikriya):** 
   - Starting substances (**Reactants**) ke beech chemical bonds toot-te hain aur atoms rearrange hokar ek ya zyada naye substances (**Products**) banate hain jinki chemical identity aur properties starting materials se bilkul alag hoti hain!
   - *Example:* 
     - Garmiyon mein doodh ka phat kar dahi banna (lactic acid formation).
     - Barsaat mein lohe ke tawa/keel par laal-bhoori zang (rust) lagna.
     - Angoor ka sadna/ferment hona (grapes fermentation).
     - Hamare shareer mein khane ka pachna (digestion).
     - Saans lena (cellular respiration: glucose + oxygen release energy).

---

### Level 2: Law of Conservation of Mass (Antoine Lavoisier, 1789)

Class 9th ka golden rule yahan Chapter 1 ka sabse bada pillar banta hai:

> **"Mass can neither be created nor destroyed in a chemical reaction."**
> *(Kisi bhi rasayanik abhikriya mein dravyaman na toh banaya ja sakta hai aur na hi nasht kiya ja sakta hai.)*

Iska direct matlab kya hai board exam ke liye?
$$\\sum m_{\\text{reactants}} = \\sum m_{\\text{products}}$$
$$\\text{Total mass on LHS} = \\text{Total mass on RHS}$$

Aur atoms ke terms mein:
$$\\text{Total number of atoms of each element on LHS} = \\text{Total number of atoms on RHS}$$

Agar equation balanced nahi hai, jaise:
$$H_2 + O_2 \\to H_2O \\quad [\\text{Skeletal / Unbalanced Equation}]$$
LHS par 2 Oxygen atoms hain, par RHS par sirf 1 Oxygen atom hai! Iska matlab 1 Oxygen atom gayab ho gaya? Nature mein aisa possible nahi hai! Isiliye hum equation ko balance karke likhte hain:
$$2H_2 + O_2 \\to 2H_2O \\quad [\\text{Balanced Equation}]$$`,
      formulasOrKeyPoints: [
        {
          title: "Law of Conservation of Mass Formula",
          content: "$$\\sum m_{\\text{Reactants}} = \\sum m_{\\text{Products}} \\iff N_{\\text{atoms (Reactants)}} = N_{\\text{atoms (Products)}}$$",
          note: "Board question: 'Why do we balance a chemical equation?' Answer: To strictly satisfy the Law of Conservation of Mass."
        },
        {
          title: "Skeletal Equation vs Balanced Equation",
          content: "$$\\begin{aligned} \\text{Skeletal (Dhanchanuma):} &\\quad Mg + O_2 \\to MgO \\quad [O \\text{ atoms unequal}] \\\\ \\text{Balanced (Santulit):} &\\quad 2Mg + O_2 \\to 2MgO \\quad [\\text{All atoms strictly equal}] \\end{aligned}$$",
          note: "Skeletal equation sirf ye batati hai ki kaun react kar raha hai; balanced equation exact molar ratio batati hai."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify Reactants & Products",
          action: "Arrow ($\\to$) ke left side par Reactants (starting materials) aur right side par Products (naye bane substances) likho.",
          proTip: "Reactants aur products ke formulas kabhi change mat karo (e.g. $O_2$ ko $O$ mat banao)."
        },
        {
          stepNo: 2,
          title: "Verify Conservation of Mass",
          action: "Har element ke atoms count karo: agar LHS = RHS hai toh equation balanced hai, warna balancing algorithm apply karo.",
          proTip: "Exam mein mass verification puchein toh molecular mass nikaal kar LHS mass = RHS mass prove karo."
        }
      ],
      examinerTraps: [
        {
          trap: "Equation balance karne ke liye chemical formula ke neeche ka subscript change kar dena (jaise $H_2 + O_2 \\to H_2O_2$).",
          correction: "$H_2O$ paani hai aur $H_2O_2$ poisonous hydrogen peroxide hai! Subscript badalna chemical identity badal deta hai. Coefficients hamesha formula ke aage (multiplier) lagaye jaate hain: $2H_2O$."
        }
      ]
    },
    {
      id: "balancing_algorithm",
      label: "2. The 5-Step Hit-and-Trial Balancing Master Algorithm",
      heading: "Master Any Chemical Equation in 60 Seconds with State Symbols",
      subheading: "Lego Block Protocol + Maximum Atom Strategy + Physical States $(s), (l), (g), (aq)$",
      explanation: `### Kaise Karein Har Equation Ko 100% Correctly Balance?

Board exam mein equations balance karne ka sabse safe aur fast method hai **NCERT Hit-and-Trial Protocol with Maximum Atom Priority**:

#### Step-by-Step Walkthrough with NCERT Classic:
$$\\text{Iron + Steam} \\to \\text{Magnetic Iron Oxide + Hydrogen}$$
$$Fe + H_2O \\to Fe_3O_4 + H_2$$

- **Step 1: Formula Boxes Banalo (Mental Quarantine):**
  Chemical formulas ke charo taraf invisible boxes imagine karo. In boxes ke andar ka koi number (subscript) tum touch nahi kar sakte!
  $$[Fe] + [H_2O] \\to [Fe_3O_4] + [H_2]$$

- **Step 2: Atom Inventory Table Banao:**
  | Element | LHS (Reactants) | RHS (Products) | Balanced? |
  | :--- | :---: | :---: | :---: |
  | **Fe** | 1 | 3 | ❌ No |
  | **H** | 2 | 2 | ✅ Yes |
  | **O** | 1 | 4 | ❌ No |

- **Step 3: Sabse Zyada Atoms Wale Element Ko Pehle Pakdo (Oxygen First):**
  RHS par $Fe_3O_4$ mein 4 Oxygen atoms hain, jabki LHS par $H_2O$ mein sirf 1 Oxygen hai.
  Toh LHS par $H_2O$ ke aage coefficient **4** lagao:
  $$Fe + \\mathbf{4}H_2O \\to Fe_3O_4 + H_2$$

- **Step 4: Hydrogen Ko Balance Karo:**
  LHS par ab $4 \\times 2 = 8$ Hydrogen atoms ho gaye, jabki RHS par sirf 2 Hydrogen atoms ($H_2$) hain.
  Toh RHS par $H_2$ ke aage coefficient **4** lagao ($4 \\times 2 = 8$):
  $$Fe + 4H_2O \\to Fe_3O_4 + \\mathbf{4}H_2$$

- **Step 5: Remaining Element (Iron - $Fe$) Ko Balance Karo:**
  RHS par $Fe_3O_4$ mein 3 $Fe$ atoms hain, LHS par sirf 1 $Fe$ atom hai.
  Toh LHS par $Fe$ ke aage coefficient **3** lagao:
  $$\\mathbf{3}Fe + 4H_2O \\to Fe_3O_4 + 4H_2$$

- **Step 6: Physical State Symbols Mandatory Lagao:**
  $$3Fe(s) + 4H_2O(g) \\to Fe_3O_4(s) + 4H_2(g)$$
  > 🔥 **CBSE Board Secret:** Yahan paani ke aage **$(g)$** likhna mandatory hai kyunki loha thande ya garam liquid paani se react nahi karta — wo sirf **red-hot steam** ke saath react karta hai! Agar $(l)$ likha toh board examiner marks kaat lega!

---

### Physical State Notations Ki Complete List:
- **$(s)$ = Solid:** E.g. $Fe(s), CaCO_3(s), Zn(s)$
- **$(l)$ = Pure Liquid:** E.g. $H_2O(l), Br_2(l)$
- **$(g)$ = Gas:** E.g. $H_2(g), CO_2(g), O_2(g)$
- **$(aq)$ = Aqueous (Paani mein ghula hua solution):** E.g. $CuSO_4(aq), HCl(aq), Ca(OH)_2(aq)$
- **$\\downarrow$ = Insoluble Precipitate:** E.g. $BaSO_4 \\downarrow$ (White ppt), $PbI_2 \\downarrow$ (Yellow ppt)
- **$\\uparrow$ = Gas evolved and escaping:** E.g. $H_2 \\uparrow, CO_2 \\uparrow$
- **Reaction Conditions:** Catalyst, temperature, pressure ya sunlight ko hamesha **arrow ke upar ya neeche** likhte hain:
  $$CO(g) + 2H_2(g) \\xrightarrow{340\\text{ atm}} CH_3OH(l)$$
  $$6CO_2(aq) + 12H_2O(l) \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} C_6H_{12}O_6(aq) + 6O_2(aq) + 6H_2O(l)$$`,
      formulasOrKeyPoints: [
        {
          title: "Golden Rules for State Symbols",
          content: "$$\\begin{aligned} (s) &= \\text{Solid}, \\quad (l) = \\text{Liquid}, \\quad (g) = \\text{Gas}, \\quad (aq) = \\text{Solution in water} \\\\ \\Delta &= \\text{Heat supplied}, \\quad h\\nu = \\text{Sunlight}, \\quad \\downarrow = \\text{Precipitate} \\end{aligned}$$",
          note: "Remember: Quicklime $CaO(s)$ + Water $H_2O(l) \\to Ca(OH)_2(aq)$ [Slaked lime is dissolved in water]."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Spot the Compound with Maximum Atoms",
          action: "Sabse pehle us molecule ko chunno jisme sabse zyada atoms hain (e.g. $Fe_3O_4$ ya $Pb(NO_3)_2$). Uske elements ko pehle balance karo.",
          proTip: "Polyatomic ions jaise $SO_4^{2-}$ ya $NO_3^-$ agar dono side intact hain, toh unhe ek single unit maankar balance karo."
        },
        {
          stepNo: 2,
          title: "Balance Oxygen and Hydrogen at the End",
          action: "Metals aur non-metals ko pehle balance karo, fir Hydrogen, aur sabse aakhiri mein Oxygen.",
          proTip: "Fractional coefficient aaye (jaise $7/2 O_2$) toh puri equation ko 2 se multiply karke whole number bana lo."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing water as $(l)$ in $3Fe + 4H_2O \\to Fe_3O_4 + 4H_2$.",
          correction: "Iron reacts ONLY with steam (gaseous water), never liquid water! Always write $H_2O(g)$."
        }
      ]
    },
    {
      id: "reaction_observations",
      label: "3. The 4 Visual Signatures of a Chemical Reaction",
      heading: "How to Prove a Reaction Occurred — NCERT Activities & Lab Signs",
      subheading: "Color Changes + Gas Evolution + Temperature Spikes + Precipitate Formation",
      explanation: `### Kaise Pata Chalta Hai Ki Chemical Reaction Hui Hai?

Lab mein hume molecules dikhte nahi hain. Toh scientist kaise confirm karta hai ki chemical reaction hui hai? **NCERT 4 Core Observations** deti hai:

---

#### 1. Change in Colour (Rang Badalna):
- **Iron Nail in Copper Sulphate (Activity 1.9):**
  Neela copper sulphate ($CuSO_4$, deep blue) solution mein lohe ki keel daalne par solution **pale green (halka hara)** ho jata hai kyunki ferrous sulphate ($FeSO_4$) banta hai, aur lohe ki keel par **reddish-brown copper** deposit ho jata hai:
  $$Fe(s) [\\text{Grey}] + CuSO_4(aq) [\\text{Blue}] \\to FeSO_4(aq) [\\text{Pale Green}] + Cu(s) [\\text{Reddish-Brown}]$$
- **Lead Nitrate + Potassium Iodide (Activity 1.2):**
  Dono colorless liquids ko mix karne par magical **bright yellow precipitate** of lead iodide ($PbI_2$) banta hai:
  $$Pb(NO_3)_2(aq) + 2KI(aq) \\to PbI_2(s) \\downarrow [\\text{Bright Yellow}] + 2KNO_3(aq)$$

---

#### 2. Evolution of a Gas (Gas Ka Nikalna):
- **Granulated Zinc + Dilute Acid (Activity 1.3):**
  Zinc granules par dilute $H_2SO_4$ ya $HCl$ daalne par tez effervescence ke saath **Hydrogen gas ($H_2$)** nikalti hai:
  $$Zn(s) + H_2SO_4(aq) \\to ZnSO_4(aq) + H_2(g) \\uparrow$$
  - **Confirmation Test for $H_2$ Gas:** Burning matchstick / candle test tube ke paas laane par gas **sharp 'POP' sound** ke saath jalti hai!
  - **Confirmation Test for $CO_2$ Gas:** Lime water ($Ca(OH)_2$) ko milky kar deti hai ($CaCO_3$ banne ki wajah se). Agar excess $CO_2$ pass karein toh milkiness gayab ho jati hai soluble $Ca(HCO_3)_2$ banne ke karan!

---

#### 3. Change in Temperature (Taapmaan Badalna):
- **Exothermic (Heat Release):** Quicklime ($CaO$) mein paani daalte hi container bahut garam ho jata hai aur paani ubalne lagta hai:
  $$CaO(s) + H_2O(l) \\to Ca(OH)_2(aq) + \\text{Heat}$$
- **Endothermic (Heat Absorption):** Barium hydroxide mein ammonium chloride mix karne par beaker itna thanda ho jata hai ki beaker ke neeche ki lakdi par rakha paani jam kar baraf ban jata hai!
  $$Ba(OH)_2 \\cdot 8H_2O + 2NH_4Cl \\to BaCl_2 + 2NH_3 + 10H_2O \\quad [\\text{Endothermic}]$$

---

#### 4. Formation of a Precipitate (Avakshep Banna):
- Jab do clear liquid solutions milkar ek **insoluble solid residue** banate hain jo neeche baith jata hai, use **Precipitate ($\\downarrow$)** kehte hain.
- Sodium sulphate aur Barium chloride ka reaction:
  $$Na_2SO_4(aq) + BaCl_2(aq) \\to BaSO_4(s) \\downarrow [\\text{White Precipitate}] + 2NaCl(aq)$$`,
      formulasOrKeyPoints: [
        {
          title: "Master Color-Shift Memory Table for CBSE",
          content: `| Reactants | Products | Color Observation | Key Chemical |
| :--- | :--- | :--- | :--- |
| $Fe + CuSO_4$ | $FeSO_4 + Cu$ | Deep Blue $\\to$ Pale Green | $FeSO_4$ green, $Cu$ reddish-brown |
| $Pb(NO_3)_2 + KI$ | $PbI_2 + KNO_3$ | Colorless $\\to$ Bright Yellow ppt | $PbI_2$ yellow precipitate |
| $Na_2SO_4 + BaCl_2$ | $BaSO_4 + NaCl$ | Colorless $\\to$ White ppt | $BaSO_4$ white precipitate |
| $FeSO_4 \\cdot 7H_2O$ heated | $Fe_2O_3 + SO_2 + SO_3$ | Light Green $\\to$ Reddish-Brown | $Fe_2O_3$ reddish-brown solid |
| $Pb(NO_3)_2$ heated | $PbO + NO_2 + O_2$ | White $\\to$ Yellow solid + Brown gas | $PbO$ yellow, $NO_2$ brown fumes |
| $Cu$ heated in air | $CuO$ | Reddish-brown $\\to$ Black coating | $CuO$ copper(II) oxide black |
| $AgCl$ in sunlight | $Ag + Cl_2$ | White $\\to$ Grey | Elemental silver is grey |`,
          note: "CBSE board mein har saal 'Identify substance X, Y and write color change' par 3 to 5 marks ka question fix aata hai!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "How to Test Evolved Gases",
          action: "- $H_2$ gas: Burning candle makes a 'POP' sound.\n- $O_2$ gas: Rekindles a glowing wooden splinter into bright flame.\n- $CO_2$ gas: Turns lime water milky.\n- $SO_2$ gas: Choking, suffocating smell of burning sulphur; turns acidified $K_2Cr_2O_7$ orange to green.\n- $NO_2$ gas: Dense reddish-brown fumes.",
          proTip: "Board question: 'Which gas turns lime water milky?' Answer: $CO_2$ (forming insoluble $CaCO_3$)."
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing $NO_2$ gas fumes with $Br_2$ or $Cl_2$.",
          correction: "When heating lead nitrate crystals, the reddish-brown gas evolved is STRICTLY nitrogen dioxide ($NO_2$). Oxygen ($O_2$) is evolved simultaneously but is completely colorless and odorless."
        }
      ]
    },
    {
      id: "reaction_classes_activities",
      label: "4. The 5 Core Reaction Classes & Lab Activities Masterclass",
      heading: "Combination, Decomposition, Displacement, Double Displacement & Precipitation",
      subheading: "Every NCERT Activity from 1.1 to 1.10 Explained with Reactions & Observations",
      explanation: `### Class 1: Combination Reactions ($A + B \\to AB$)
**Def:** Jab do ya do se zyada reactants milkar sirf **ek single product** banate hain, toh use Combination Reaction kehte hain.

- **Activity 1.1 (Burning of Magnesium Ribbon):**
  - *Setup:* Magnesium ribbon ko burn karne se pehle **sandpaper se achhi tarah ragad kar saaf karte hain**.
  - *Kyun?* Kyunki magnesium air mein rakhe-rakhe apne upar basic magnesium carbonate / oxide $[MgCO_3 \\cdot Mg(OH)_2]$ ki unreactive layer bana leta hai jo aage jalne nahi deti. Sandpaper se saaf karne par fresh magnesium metal expose ho jata hai!
  - *Observation:* Magnesium ribbon **dazzling white flame (aankhein chaundhiyane wali safed roshni)** ke saath jalta hai aur **safed powder (white ash)** of Magnesium Oxide ($MgO$) banata hai:
    $$2Mg(s) + O_2(g) \\to 2MgO(s) + \\text{Heat} + \\text{Light}$$
  - Is ash ko paani mein gholne par $Mg(OH)_2$ banta hai jo **red litmus ko blue** kar deta hai (Basic oxide).

- **Activity 1.4 (Quicklime & Whitewashing Reaction):**
  - Calcium Oxide ($CaO$, Quicklime / Bina bujha chuna) mein paani milane par tez hissing sound aur heat ke saath Slaked Lime ($Ca(OH)_2$ / Bujha hua chuna) banta hai:
    $$CaO(s) + H_2O(l) \\to Ca(OH)_2(aq) + \\text{Heat}$$
  - *Deewaron par chamak kyun aati hai? (Whitewashing Phenomenon):*
    Deewaron par slaked lime ka ghol lagane ke 2–3 din baad, hawa ki carbon dioxide ($CO_2$) ke saath react karke wo marble jaisi patli, chamakdar **calcium carbonate ($CaCO_3$)** ki layer bana leta hai:
    $$Ca(OH)_2(aq) + CO_2(g) \\to CaCO_3(s) [\\text{Shiny White Layer}] + H_2O(l)$$

---

### Class 2: Decomposition Reactions ($AB \\xrightarrow{\\text{Energy}} A + B + C$)
**Def:** Jab ek single reactant energy (heat, electricity ya light) absorb karke do ya do se zyada simpler products mein toot jata hai. Ye reactions intrinsically **Endothermic** hoti hain!

1. **Thermal Decomposition (Heat Energy $\\Delta$):**
   - *Activity 1.5 (Heating Ferrous Sulphate Crystals):*
     Green crystals ($FeSO_4 \\cdot 7H_2O$) ko pehle heat karne par wo 7 water molecules loose karke white ban jaate hain. Zyada heat karne par **reddish-brown ferric oxide ($Fe_2O_3$)** banta hai aur choking, burning sulphur ki smell wali do gasein nikalti hain — **$SO_2$ (sulphur dioxide)** aur **$SO_3$ (sulphur trioxide)**:
     $$2FeSO_4(s) \\xrightarrow{\\Delta} Fe_2O_3(s) [\\text{Reddish-Brown}] + SO_2(g) + SO_3(g)$$
   - *Activity 1.6 (Heating Lead Nitrate):*
     White lead nitrate ko dry boiling tube mein heat karne par crackling sound ke saath **yellow solid residue of Lead(II) Oxide ($PbO$)**, dense **reddish-brown fumes of Nitrogen Dioxide ($NO_2$)**, aur colorless **Oxygen ($O_2$)** gas nikalti hai:
     $$2Pb(NO_3)_2(s) \\xrightarrow{\\Delta} 2PbO(s) [\\text{Yellow Solid}] + 4NO_2(g) \\uparrow [\\text{Brown Fumes}] + O_2(g) \\uparrow$$
   - *Limestone to Quicklime (Cement Industry):*
     $$CaCO_3(s) \\xrightarrow{\\Delta} CaO(s) + CO_2(g)$$

2. **Electrolytic Decomposition (Electric Current):**
   - *Activity 1.7 (Electrolysis of Acidified Water):*
     Paani mein dilute $H_2SO_4$ ki kuch boondein daal kar graphite electrodes ke through 6V current pass karte hain.
     - **Cathode (Negative Electrode):** Hydrogen gas ($H_2$) collect hoti hai (volume = 2 units).
     - **Anode (Positive Electrode):** Oxygen gas ($O_2$) collect hoti hai (volume = 1 unit).
     - **Volume Ratio:**
       $$\\frac{\\text{Volume of } H_2}{\\text{Volume of } O_2} = \\frac{2}{1}$$
       Kyunki ek water molecule ($H_2O$) mein 2 hydrogen atoms aur 1 oxygen atom hota hai!
       $$2H_2O(l) \\xrightarrow{\\text{Electricity}} 2H_2(g) + O_2(g)$$

3. **Photolytic Decomposition (Sunlight $h\\nu$):**
   - *Activity 1.8 (Silver Halides in Sunlight):*
     Safed Silver Chloride ($AgCl$) ko dhoop mein china dish mein rakhne par wo **grey** ho jata hai kyunki chlorine gas ud jaati hai aur elemental grey silver metal bachta hai:
     $$2AgCl(s) [\\text{White}] \\xrightarrow{\\text{Sunlight}} 2Ag(s) [\\text{Grey}] + Cl_2(g)$$
     $$2AgBr(s) [\\text{Pale Yellow}] \\xrightarrow{\\text{Sunlight}} 2Ag(s) [\\text{Grey}] + Br_2(g)$$
   - *Historical Application:* Ye dono reactions classical **Black and White Photography** mein use hoti thi!

---

### Class 3: Displacement Reactions ($A + BC \\to AC + B$)
**Def:** Ek zyada reactive element kisi kam reactive element ko uske aqueous salt solution se displace (hata) deta hai. Ye strictly **Reactivity Series** par depend karta hai:

$$\\mathbf{K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au}$$

- **Activity 1.9 (Iron Nails in Copper Sulphate):**
  Loha ($Fe$) copper ($Cu$) se upar hai, toh iron copper ko laat maarkar bahar nikal deta hai:
  $$Fe(s) + CuSO_4(aq) [\\text{Blue}] \\to FeSO_4(aq) [\\text{Pale Green}] + Cu(s) [\\text{Reddish-Brown Coating}]$$
- **Zinc displacing Copper:**
  $$Zn(s) + CuSO_4(aq) [\\text{Blue}] \\to ZnSO_4(aq) [\\text{Colorless}] + Cu(s)$$
- **Copper in Iron Sulphate:**
  $$Cu(s) + FeSO_4(aq) \\to \\text{NO REACTION!}$$
  Kyunki Copper reactivity series mein Iron ke neeche baitha hai, usme iron ko displace karne ki taaqat nahi hai!

---

### Class 4: Double Displacement & Precipitation Reactions ($AB + CD \\to AD + CB$)
**Def:** Aisi reaction jisme do ionic compounds apne ions ko aapas mein **exchange (swap)** karte hain. Isme aksar ek insoluble solid precipitate banta hai.

- **Activity 1.10 (Sodium Sulphate + Barium Chloride):**
  $$Na_2SO_4(aq) + BaCl_2(aq) \\to BaSO_4(s) \\downarrow [\\text{White Precipitate}] + 2NaCl(aq)$$
  White precipitate $Ba^{2+}$ aur $SO_4^{2-}$ ions ke milne se banta hai.
- **Activity 1.2 (Lead Nitrate + Potassium Iodide):**
  $$Pb(NO_3)_2(aq) + 2KI(aq) \\to PbI_2(s) \\downarrow [\\text{Bright Yellow Precipitate}] + 2KNO_3(aq)$$`,
      formulasOrKeyPoints: [
        {
          title: "All 5 Reaction Classes At a Glance",
          content: "$$\\begin{aligned} \\text{1. Combination:} &\\quad A + B \\to AB \\\\ \\text{2. Decomposition:} &\\quad AB \\xrightarrow{\\Delta / h\\nu / e^-} A + B \\\\ \\text{3. Displacement:} &\\quad A + BC \\to AC + B \\quad [A \\text{ is more reactive than } B] \\\\ \\text{4. Double Displacement:} &\\quad AB + CD \\to AD + CB \\\\ \\text{5. Redox:} &\\quad \\text{Simultaneous Oxidation and Reduction} \\end{aligned}$$",
          note: "Every precipitation reaction is a double displacement reaction, but not every double displacement reaction is a precipitation reaction (e.g. acid-base neutralisation)."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Spot the Reaction Type Instantly in Board Exam",
          action: "1. 2 reactants $\\to$ 1 single product? $\\implies$ Combination.\n2. 1 reactant $\\to$ multiple products? $\\implies$ Decomposition.\n3. Free element + Compound $\\to$ New compound + Displaced element? $\\implies$ Displacement.\n4. Two ionic compounds swapping partners with precipitate? $\\implies$ Double Displacement / Precipitation.",
          proTip: "Check for energy exchange: Decomposition is always Endothermic; Combination is mostly Exothermic."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing that copper displaces hydrogen from dilute hydrochloric acid ($Cu + 2HCl \\to CuCl_2 + H_2$).",
          correction: "Copper is positioned BELOW Hydrogen in the reactivity series. It CANNOT displace hydrogen from dilute acids. No reaction takes place!"
        },
        {
          trap: "Confusing cathode and anode gas in water electrolysis.",
          correction: "Trick: **C**athode attracts **C**ation ($H^+$) $\\to H_2$ gas (Double volume). **A**node attracts **A**nion ($O^{2-}$) $\\to O_2$ gas (Single volume)."
        }
      ]
    },
    {
      id: "energetics_exo_endo",
      label: "5. Energetics: Exothermic vs Endothermic Reactions",
      heading: "Energy Flow: Heat Releasing vs Heat Absorbing Processes",
      subheading: "Respiration + Natural Gas Combustion + Photosynthesis + Compost Mystery",
      explanation: `### Level 1: Bond Energy Ka Khel

Chemical reaction mein do kaam hote hain:
1. Reactants ke purane bonds ko todna (isme energy deni padti hai $\\implies$ absorption).
2. Products ke naye bonds ka banna (isme energy release hoti hai $\\implies$ release).

- Agar **release hone wali energy > absorb hone wali energy**, toh net heat bahar niklegi $\\implies$ **Exothermic Reaction (Ushmakkshepi)**.
- Agar **absorb hone wali energy > release hone wali energy**, toh mixture surrounding se heat khinch lega $\\implies$ **Endothermic Reaction (Ushmashoshi)**.

---

### Level 2: Exothermic Reactions ($\\Delta H < 0$, Heat Evolved)
Container garam ho jata hai ($T$ rises).

1. **Combustion of Fuels (Natural Gas / Methane):**
   $$CH_4(g) + 2O_2(g) \\to CO_2(g) + 2H_2O(g) + \\text{Heat} + \\text{Light}$$
2. **Burning of Magnesium Ribbon:**
   $$2Mg(s) + O_2(g) \\to 2MgO(s) + \\text{Heat}$$
3. **Slaking of Lime (Quicklime + Water):**
   $$CaO(s) + H_2O(l) \\to Ca(OH)_2(aq) + \\text{Heat}$$
4. **Respiration (CBSE Most Repeated 3-Mark Question):**
   *Question: "Why is respiration considered an exothermic reaction?"*
   *Answer:* Jo khana hum khate hain (rice, roti, potatoes), usme carbohydrates hote hain jo digest hokar glucose ($C_6H_{12}O_6$) banate hain. Hamare body cells mein ye glucose oxygen ke saath combine hokar toot-ta hai aur body ko constant energy provide karta hai:
   $$C_6H_{12}O_6(aq) + 6O_2(aq) \\to 6CO_2(aq) + 6H_2O(l) + \\text{Energy (38 ATP)}$$
5. **Decomposition of Vegetable Matter into Compost:**
   Microorganisms organic matter ke bonds todte hain, jisse continuous heat release hoti hai. Isiliye compost heap hamesha andar se garam hota hai!

---

### Level 3: Endothermic Reactions ($\\Delta H > 0$, Heat Absorbed)
Container thanda ho jata hai ($T$ drops). Bahar se energy supply karni padti hai.

1. **Photosynthesis:**
   Plants sunlight ki solar energy ko absorb karke food banate hain:
   $$6CO_2(aq) + 12H_2O(l) \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} C_6H_{12}O_6(aq) + 6O_2(aq) + 6H_2O(l)$$
2. **All Thermal Decompositions:**
   Limestone ($CaCO_3$), Ferrous sulphate ($FeSO_4$), aur Lead nitrate ($Pb(NO_3)_2$) ko lagatar Bunsen burner par heat karna padta hai.
3. **Barium Hydroxide + Ammonium Chloride Reaction:**
   $$Ba(OH)_2 \\cdot 8H_2O(s) + 2NH_4Cl(s) \\to BaCl_2(aq) + 2NH_3(aq) + 10H_2O(l)$$
   Ye reaction itni heat absorb karti hai ki beaker ka temperature negative chala jata hai!`,
      formulasOrKeyPoints: [
        {
          title: "Exothermic vs Endothermic Diagnostic Summary",
          content: "$$\\begin{aligned} \\text{Exothermic:} &\\quad \\text{Reactants} \\to \\text{Products} + \\text{Heat} \\quad [\\text{Container warms up}] \\\\ \\text{Endothermic:} &\\quad \\text{Reactants} + \\text{Heat/Light/Electricity} \\to \\text{Products} \\quad [\\text{Container cools down}] \\end{aligned}$$",
          note: "Remember: Respiration is Exothermic; Photosynthesis is Endothermic."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "How to Answer Respiration in CBSE Exams",
          action: "1. State that food contains carbohydrates which break down to glucose ($C_6H_{12}O_6$).\n2. In cells, glucose combines with oxygen to release carbon dioxide, water, and life energy.\n3. Write the fully balanced chemical equation: $C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O + \\text{Energy}$.",
          proTip: "Never forget to mention 'Energy' on the RHS."
        }
      ],
      examinerTraps: [
        {
          trap: "Classifying the decomposition of vegetable matter into compost as an endothermic reaction just because it has the word 'decomposition'.",
          correction: "Microbial decomposition of organic waste produces heat through biological respiration. It is strictly EXOTHERMIC."
        }
      ]
    },
    {
      id: "redox_corrosion_rancidity",
      label: "6. Redox Battlefield, Corrosion & Food Rancidity Masterclass",
      heading: "Oxidation, Reduction, Rusting Mechanisms & Chip Bag Preservation",
      subheading: "Oxygen/Hydrogen Rules + Identifying OA and RA + Rust Formula + Nitrogen Flushing",
      explanation: `### Level 1: Redox Ka Asli Matlab

Aisi reaction jisme **Oxidation aur Reduction dono ek saath (simultaneously)** hote hain, use **Redox Reaction** kehte hain.

| Parameter | Oxidation (Upchayan) | Reduction (Apchayan) |
| :--- | :--- | :--- |
| **Oxygen** | Oxygen ka judna ($+O$) | Oxygen ka hatna ($-O$) |
| **Hydrogen** | Hydrogen ka hatna ($-H$) | Hydrogen ka judna ($+H$) |
| **Electrons** | Electron loose karna ($LEO$) | Electron gain karna ($GER$) |
| **Substance Calling** | **Reducing Agent** (Khud oxidise hota hai) | **Oxidising Agent** (Khud reduce hota hai) |

> 💡 **Golden Rule (Hamesha Reactants Par Dhyaan Do):**
> Substance Oxidised, Substance Reduced, Oxidising Agent, aur Reducing Agent — ye chaaron hamesha **REACTANTS side** se chune jaate hain! Products side se kisi ko agent ya oxidised mat bolna!

---

### Level 2: Top 3 Classic CBSE Redox Equations:

#### Example 1: Copper Oxide + Hydrogen Gas
Pehle step mein reddish-brown copper powder ko hawa mein heat karte hain, toh black layer of $CuO$ banti hai:
$$2Cu(s) + O_2(g) \\xrightarrow{\\Delta} 2CuO(s) [\\text{Black Surface}]$$
Fir is black $CuO$ ke upar se $H_2$ gas pass karte hain:
$$CuO(s) + H_2(g) \\xrightarrow{\\Delta} Cu(s) + H_2O(l)$$

- $CuO \\to Cu$: Oxygen nikal gayi $\\implies$ **$CuO$ is REDUCED**.
- $H_2 \\to H_2O$: Oxygen jud gayi $\\implies$ **$H_2$ is OXIDISED**.
- Jo oxygen deta hai ($CuO$) $\\implies$ **$CuO$ is the OXIDISING AGENT**.
- Jo oxygen cheenta hai ($H_2$) $\\implies$ **$H_2$ is the REDUCING AGENT**.

#### Example 2: Zinc Oxide + Carbon (Coke)
$$ZnO(s) + C(s) \\to Zn(s) + CO(g)$$
- Substance Reduced: $ZnO$ (Oxidising Agent: $ZnO$)
- Substance Oxidised: $C$ (Reducing Agent: $C$)

#### Example 3: Manganese Dioxide + Hydrochloric Acid (CBSE Hot Spot!)
$$MnO_2(s) + 4HCl(aq) \\to MnCl_2(aq) + 2H_2O(l) + Cl_2(g)$$
- $MnO_2 \\to MnCl_2$: Oxygen loss $\\implies$ **$MnO_2$ is REDUCED** (Oxidising Agent: $MnO_2$).
- $HCl \\to Cl_2$: Hydrogen loss $\\implies$ **$HCl$ is OXIDISED** (Reducing Agent: $HCl$).

---

### Level 3: Corrosion in Daily Life (Dhaatuon Ka Ksharan)
Jab koi metal hawa ki oxygen, moisture, acids ya gases ke contact mein aakar dheere-dheere degrade hota hai, toh use **Corrosion** kehte hain.

1. **Rusting of Iron (Lohe Par Zang Lagna):**
   - Lohe ko jab moist air mein khula chhodte hain, toh us par reddish-brown flaky hydrated ferric oxide banta hai:
     $$4Fe(s) + 3O_2(g) + 2xH_2O(l) \\to 2Fe_2O_3 \\cdot xH_2O(s) [\\text{Rust}]$$
   - Zang lohe ki surface se papdi bankar jhadti rehti hai, jisse andar ka loha lagatar kharab hota rehta hai.
2. **Tarnishing of Silver (Chandi Ka Kaala Padna):**
   - Chandi ke gehne hawa mein maujood trace **Hydrogen Sulphide ($H_2S$)** gas ke saath react karke **kaali parat (black coating)** banate hain of Silver Sulphide ($Ag_2S$):
     $$2Ag(s) + H_2S(g) \\to Ag_2S(s) [\\text{Black}] + H_2(g)$$
3. **Corrosion of Copper (Taanbe Ka Hara Padna):**
   - Taanbe ke bartan moist air ($CO_2 + H_2O + O_2$) ke saath react karke **green coating** banate hain of Basic Copper Carbonate:
     $$2Cu(s) + H_2O(l) + CO_2(g) + O_2(g) \\to CuCO_3 \\cdot Cu(OH)_2(s) [\\text{Basic Copper Carbonate - Green}]$$

#### Corrosion Prevention Tactics:
- **Barrier Protection:** Painting, oiling, greasing (moisture aur oxygen ko aane se rokna).
- **Galvanisation (Board Favorite):** Lohe ya steel par **pighle hue Zinc ($Zn$) ki patli layer** chadhana. Zinc lohe se zyada reactive hota hai, isiliye surface scratch ho jaane ke baad bhi zinc khud oxidise hokar lohe ko bacha leta hai (**Sacrificial Anodic Protection**)!
- **Alloying:** Lohe mein carbon, nickel aur chromium milakar **Stainless Steel** banana jo kabhi zang nahi pakadta.

---

### Level 4: Rancidity (Vikritgandhita)
Jab oily ya fatty food materials (jaise chips, namkeen, fried items) hawa ki oxygen ke contact mein aate hain, toh unka **aerial oxidation** ho jata hai. Isse unka taste aur smell kharab ho jati hai (foul smell & sour taste), jise **Rancidity** kehte hain.

#### Rancidity Rokne Ke 4 Commercial Methods:
1. **Flushing with Nitrogen Gas ($N_2$):** Lays ya Kurkure ke packets hawa se nahi, balki unreactive **Nitrogen gas** se bhare jaate hain taaki oxygen bahar nikal jaye aur chips 6 mahine tak crunchy aur fresh rahein!
2. **Antioxidants Milana:** Food items mein synthetic antioxidants jaise **BHA (Butylated Hydroxyanisole)** aur **BHT (Butylated Hydroxytoluene)** dale jaate hain jo oxygen se pehle khud react kar lete hain.
3. **Airtight Containers:** Oxygen diffusion ko dramatically slow kar deta hai.
4. **Refrigeration:** Thande taapmaan par oxidation ki reaction rate bahut slow ho jati hai.`,
      formulasOrKeyPoints: [
        {
          title: "Master Chemical Formulas for Corrosion",
          content: "$$\\begin{aligned} \\text{Rust (Hydrated Ferric Oxide):} &\\quad Fe_2O_3 \\cdot xH_2O \\quad [\\text{Reddish-Brown}] \\\\ \\text{Silver Tarnish (Silver Sulphide):} &\\quad Ag_2S \\quad [\\text{Black}] \\\\ \\text{Copper Patina (Basic Copper Carbonate):} &\\quad CuCO_3 \\cdot Cu(OH)_2 \\quad [\\text{Green}] \\end{aligned}$$",
          note: "Questions test: 'Why do silver articles turn black?' -> Due to reaction with $H_2S$ gas in air."
        },
        {
          title: "The 4 Redox Actors Diagnostic Rule",
          content: "$$\\begin{aligned} \\text{Substance Oxidised} &\\equiv \\text{Reducing Agent} \\\\ \\text{Substance Reduced} &\\equiv \\text{Oxidising Agent} \\end{aligned}$$",
          note: "Always pick the answers strictly from LHS (Reactants)!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Identify Redox Components in 3 Seconds",
          action: "1. Kisme Oxygen add hui ya Hydrogen remove hui? $\\implies$ Substance Oxidised $\\implies$ Reducing Agent.\n2. Kisse Oxygen remove hui ya Hydrogen add hui? $\\implies$ Substance Reduced $\\implies$ Oxidising Agent.",
          proTip: "Never write product names (like $Cu$ or $H_2O$) as agents. Agents are always reactants ($CuO$, $H_2$)."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing that potato chips bags are flushed with hydrogen or oxygen.",
          correction: "Chips packets are flushed with NITROGEN ($N_2$) because nitrogen is an inert, unreactive gas that prevents oxidation. Oxygen would spoil it immediately, and hydrogen is highly inflammable!"
        },
        {
          trap: "In $CuO + H_2 \\to Cu + H_2O$, identifying $Cu$ as the substance reduced.",
          correction: "$Cu$ is the final product! The substance that was reduced is $CuO$ (Copper(II) oxide), which started with oxygen and lost it."
        }
      ]
    }
  ]
};
