import type { ScienceChapterConcept } from "./types";

export const SCI_CH5_CONCEPT: ScienceChapterConcept = {
  chapterNo: 5,
  title: "Life Processes",
  discipline: "Biology",
  weightage: "8–10 Marks (Board Highest Priority)",
  oneLiner: "All living things perform 6 processes: nutrition, respiration, transportation, excretion, reproduction, movement; each system has specific organs working together.",
  analogyTitle: "Your Body is a 24/7 Factory with 6 Departments",
  analogyContent: `Imagine your body is a **giant factory** 🏭 that runs 24 hours a day, 7 days a week, even while you sleep:

🍽️ **Nutrition Department:** Receives raw materials (food), processes it into usable energy
🌬️ **Energy Department (Respiration):** Burns the fuel to power every machine
🚚 **Transport Department:** Delivers materials everywhere (blood = delivery trucks)  
🗑️ **Waste Management (Excretion):** Removes toxic waste before it poisons the factory
🔄 **Reproduction Department:** Makes more factories (babies!)
🏃 **Movement Department:** Moves the factory when needed

The factory never stops. Even when you sleep, your heart beats, your lungs breathe, your kidneys filter blood. That's what makes you ALIVE!`,
  sections: [
    {
      id: "nutrition",
      label: "1. Nutrition — Getting & Processing Food",
      heading: "From Grass to Energy: How Plants and Animals Feed",
      subheading: "Autotrophic + Heterotrophic + Photosynthesis + Human Digestion",
      explanation: `**Types of Nutrition:**

**AUTOTROPHIC** (self-feeding): Organisms make their own food from simple inorganic substances.
- **Photosynthesis** (in Plants, Algae, Cyanobacteria): Using sunlight + CO₂ + H₂O
- **Chemosynthesis** (in some Bacteria): Using chemical energy from reactions (deep-sea bacteria)

**HETEROTROPHIC** (others-feeding): Organisms that eat other organisms for food.
- **Holozoic:** Take in solid food, digest inside body (humans, dogs, frogs)
- **Saprophytic:** Feed on dead and decaying matter (fungi, some bacteria — nature's recyclers!)
- **Parasitic:** Feed on a living host (Cuscuta plant, tapeworm, Plasmodium)

---

**PHOTOSYNTHESIS — The Plant's Kitchen:**
$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{Sunlight + Chlorophyll}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$

This happens in **TWO stages inside chloroplasts:**

**Stage 1 — Light Reactions (in Thylakoid membranes):**
- Sunlight absorbed by **chlorophyll** (green pigment in chloroplasts)
- Water is split: $2\\text{H}_2\\text{O} \\xrightarrow{\\text{Light}} 4\\text{H}^+ + 4\\text{e}^- + \\text{O}_2$
- This releases OXYGEN (the O₂ we breathe comes from water, not CO₂!)
- ATP and NADPH are produced (energy currency + hydrogen carrier)

**Stage 2 — Dark Reactions / Calvin Cycle (in Stroma):**
- CO₂ is fixed using ATP and NADPH
- Glucose (C₆H₁₂O₆) is synthesised

**Factors Affecting Photosynthesis:**
1. **Light intensity** — more light → more photosynthesis (up to a limit)
2. **CO₂ concentration** — more CO₂ → more glucose made
3. **Temperature** — enzymes have optimal temperature (~25-35°C for most plants)
4. **Water availability** — severe drought closes stomata → stops CO₂ entry → stops photosynthesis

---

**HUMAN DIGESTIVE SYSTEM:**

🍕 → **Mouth** (mechanical + chemical): Teeth crush food; **Salivary amylase** (ptyalin) digests starch → maltose

↓ **Oesophagus:** Peristaltic movement pushes food ball (bolus) down to stomach

↓ **Stomach (gastric juice):**
- **Pepsin** (protease enzyme, activated by HCl): Digests proteins → peptides
- **HCl** (pH 2): Kills bacteria, activates pepsin, acidic medium for digestion
- **Mucus:** Protects stomach wall from being digested by its own acid!
- Churning converts food into **Chyme** (semi-liquid)

↓ **Small Intestine (main digestion site):**
- **Pancreatic juice** (from Pancreas): Amylase (starch→glucose), Lipase (fats→fatty acids+glycerol), Trypsin/Chymotrypsin (proteins→amino acids)
- **Bile** (from Liver, stored in Gall Bladder): No enzymes — but EMULSIFIES fats (breaks large fat globules into small droplets for lipase to act on)
- **Intestinal juice** (succus entericus): Final digestion → glucose, amino acids, fatty acids, glycerol
- **Villi & Microvilli (brush border):** Tiny finger-like projections increase surface area 600× for absorption into blood

↓ **Large Intestine:** Absorbs water and minerals; undigested material → faeces

↓ **Anus:** Egestion (removal of undigested waste — NOT excretion! No metabolic waste)`,
      formulasOrKeyPoints: [
        {
          title: "Enzyme Location Summary Table",
          content: `| Location | Juice/Secretion | Key Enzyme | Substrate → Product |
|----------|----------------|-----------|---------------------|
| Mouth | Saliva | Salivary amylase (ptyalin) | Starch → Maltose |
| Stomach | Gastric juice | Pepsin (+ HCl) | Proteins → Peptides |
| Duodenum | Pancreatic juice | Pancreatic amylase | Starch → Glucose |
| Duodenum | Pancreatic juice | Trypsin | Proteins → Amino acids |
| Duodenum | Pancreatic juice | Lipase | Fats → Fatty acids + Glycerol |
| Duodenum | Bile (from Liver) | None (emulsifier) | Large fat globules → Droplets |
| Small intestine | Intestinal juice | Maltase, Lactase, etc. | Disaccharides → Monosaccharides |`,
          note: "FAT is the only macronutrient not digested until the small intestine (duodenum). Starch digestion starts in the mouth; protein digestion starts in the stomach; fat digestion starts only in the small intestine."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Answer 'Role of X in digestion'",
          action: "Name the organ/gland producing X → name the enzyme in X → name what substrate it acts on → name the product formed.",
          proTip: "Board format: 'Bile is produced by the liver and stored in the gall bladder. It does not contain digestive enzymes but emulsifies fats by breaking large fat globules into smaller droplets, increasing the surface area for lipase enzyme action.'"
        }
      ],
      examinerTraps: [
        {
          trap: "Saying Bile digests fats.",
          correction: "Bile does NOT contain enzymes and does NOT digest fats chemically. It EMULSIFIES fats — breaking fat globules into smaller droplets to increase surface area for lipase. The actual chemical digestion of fats is done by LIPASE enzyme from the pancreas."
        },
        {
          trap: "Confusing Egestion and Excretion.",
          correction: "EGESTION = removal of UNDIGESTED waste (faeces) through the anus. This material never entered body cells. EXCRETION = removal of METABOLIC WASTE produced by body cells (CO₂, urea, uric acid). Faeces is NOT excretion — it is egestion!"
        }
      ]
    },
    {
      id: "respiration",
      label: "2. Respiration — Burning Food for Energy",
      heading: "The Energy Factory: From Glucose to ATP",
      subheading: "Aerobic + Anaerobic Respiration + Glycolysis + Krebs Cycle + Human Respiratory System",
      explanation: `**Respiration** is the process of breaking down food (glucose) to release energy in the form of **ATP** (Adenosine Triphosphate) — the universal energy currency of all living cells.

$$\\text{Glucose} \\xrightarrow{\\text{Respiration}} \\text{ATP (energy) + CO}_2 + \\text{Water}$$

**AEROBIC RESPIRATION** (in presence of oxygen):
$$\\underbrace{\\text{C}_6\\text{H}_{12}\\text{O}_6}_{\\text{Glucose}} + 6\\text{O}_2 \\to 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\underbrace{\\text{38 ATP}}_{\\text{Energy!}}$$

Occurs in THREE stages:
1. **Glycolysis** (in Cytoplasm): Glucose (6C) → 2 Pyruvate (3C) + 2 ATP
2. **Krebs Cycle / Citric Acid Cycle** (in Mitochondria matrix): Pyruvate fully oxidised → CO₂ + H₂O + more ATP
3. **Oxidative Phosphorylation** (in Mitochondria inner membrane): Most ATP made using electron transport chain

**ANAEROBIC RESPIRATION** (WITHOUT oxygen):
$$\\text{C}_6\\text{H}_{12}\\text{O}_6 \\to 2\\text{C}_2\\text{H}_5\\text{OH + 2CO}_2 + 2\\text{ ATP}$$ **(In Yeast — Fermentation)**
$$\\text{C}_6\\text{H}_{12}\\text{O}_6 \\to 2\\text{Lactic acid + 2 ATP}$$ **(In Muscle cells — during intense exercise)**

When you sprint 100m, your muscles can't get O₂ fast enough → they switch to anaerobic → lactic acid builds up → muscle cramp and burning sensation!
After exercise, you breathe heavily to repay the "oxygen debt" and convert lactic acid back to pyruvate.

---

**HUMAN RESPIRATORY SYSTEM:**

**Path of Air:**
Nose → Nasal cavity → Pharynx → Larynx (voice box) → Trachea (windpipe) → Bronchi → Bronchioles → **Alveoli** (air sacs — actual gas exchange site!)

**Alveoli — The Superheroes of Breathing:**
- 300–500 million alveoli in 2 lungs → enormous surface area (~70 m² — size of a tennis court!)
- Very thin walls (1 cell thick) → short diffusion distance
- Surrounded by dense capillary network
- Moist surface → gases diffuse in solution

**Gas Exchange in Alveoli:**
- O₂ diffuses: Alveoli air → Blood (concentration gradient)
- CO₂ diffuses: Blood → Alveoli (concentration gradient)
- Both move by **simple diffusion** — no energy needed!

**Breathing Mechanism:**
- **Inhalation:** Diaphragm flattens + Intercostal muscles contract → rib cage expands → lung volume increases → pressure drops → air rushes IN
- **Exhalation:** Diaphragm relaxes → rib cage contracts → lung volume decreases → pressure increases → air pushed OUT

**Transport of Gases in Blood:**
- O₂: ~97% carried by **haemoglobin** in RBCs (as oxyhaemoglobin); 3% dissolved in plasma
- CO₂: ~70% as bicarbonate ions (HCO₃⁻) in plasma; 23% bound to haemoglobin; 7% dissolved`,
      formulasOrKeyPoints: [
        {
          title: "Aerobic vs Anaerobic Comparison",
          content: `| Feature | Aerobic | Anaerobic |
|---------|--------|----------|
| O₂ required? | Yes | No |
| Location | Cytoplasm + Mitochondria | Cytoplasm only |
| Products | CO₂ + H₂O + 38 ATP | Ethanol+CO₂ (yeast) or Lactic acid (muscles) + 2 ATP |
| ATP yield | 38 ATP (per glucose) | 2 ATP (per glucose) |
| Complete breakdown? | Yes | No (partial) |
| Examples | All body cells normally | Yeast (brewing/baking), exercising muscle cells |`,
          note: "The MITOCHONDRIA is called the 'Powerhouse of the Cell' because aerobic respiration (producing most of the ATP) occurs here. This phrase appears in virtually every Board exam — learn the reason, not just the phrase!"
        }
      ],
      examinerTraps: [
        {
          trap: "Confusing Breathing and Respiration.",
          correction: "BREATHING (ventilation) is the PHYSICAL process of inhaling and exhaling air — no chemical change. RESPIRATION is the CHEMICAL process of breaking down glucose inside cells to produce ATP. An organism can breathe without doing cellular respiration (briefly), but respiration is what actually provides energy to cells."
        }
      ]
    },
    {
      id: "transportation",
      label: "3. Transportation — The Body's Delivery Network",
      heading: "Heart, Blood, Vessels & Lymph — The 4-Part Delivery System",
      subheading: "Double Circulation + Heart Structure + Blood Components + Lymph",
      explanation: `**WHY DO WE NEED A TRANSPORT SYSTEM?**
Simple organisms (like Amoeba) are small enough — oxygen diffuses directly into every cell. But complex animals like humans have millions of cells deep inside the body. Oxygen can't diffuse that far → we need a dedicated delivery network (blood + heart + blood vessels).

**THE HEART — The Pumping Engine:**
The human heart has **4 chambers:**
- **Right Atrium (RA):** Receives deoxygenated blood from the body (via Superior and Inferior Vena Cava)
- **Right Ventricle (RV):** Pumps deoxygenated blood TO the lungs (via Pulmonary Artery) — the ONLY artery carrying deoxygenated blood!
- **Left Atrium (LA):** Receives oxygenated blood FROM the lungs (via Pulmonary Vein) — the ONLY vein carrying oxygenated blood!
- **Left Ventricle (LV):** Pumps oxygenated blood to the ENTIRE BODY (via Aorta) — has the THICKEST wall because it must pump blood to the farthest parts!

**VALVES prevent backflow:**
- **Tricuspid valve** (between RA and RV) — 3 flaps
- **Bicuspid/Mitral valve** (between LA and LV) — 2 flaps
- **Semilunar valves** (at the exit of each ventricle into arteries)
- "Lub-Dub" sound = Valves closing!

**DOUBLE CIRCULATION (Two separate loops):**
Loop 1 — **Pulmonary Circulation:** Right Ventricle → Lungs (oxygenation) → Left Atrium (short loop for gas exchange)
Loop 2 — **Systemic Circulation:** Left Ventricle → Body tissues (oxygen delivery) → Right Atrium (long loop)

Why double? High pressure in systemic circulation would damage delicate lung capillaries. Separating the loops allows appropriate pressures for each.

**BLOOD COMPONENTS:**
| Component | Count (per mm³) | Function |
|-----------|----------------|---------|
| **RBC (Erythrocyte)** | 5 million | Carries O₂ using haemoglobin |
| **WBC (Leukocyte)** | 7,000–8,000 | Immunity, fight infection |
| **Platelets (Thrombocyte)** | 2.5 lakh | Blood clotting |
| **Plasma** | ~55% of blood volume | Carries nutrients, hormones, CO₂, urea, fibrinogen |

**BLOOD VESSELS:**
| Vessel | Direction | Wall | Blood Pressure | Valves |
|--------|-----------|------|----------------|--------|
| Artery | Away from Heart | Thick, muscular, elastic | High | No |
| Vein | Toward Heart | Thin, less muscular | Low | Yes (prevent backflow) |
| Capillary | Tissue level | 1 cell thick | Very low | No |

**LYMPHATIC SYSTEM:**
- Lymph: Colourless fluid derived from plasma that leaks out of capillaries into tissue spaces
- Lymph nodes: Filter lymph, produce lymphocytes (WBCs for immunity)
- Returns lymph back to blood via lymphatic ducts (no pump — muscular movement and valves)
- **Functions:** Returns tissue fluid to blood, transports absorbed fat from intestine, immunity`,
      formulasOrKeyPoints: [
        {
          title: "Blood Pressure Understanding",
          content: `**Blood Pressure (BP) = Force of blood per unit area on vessel walls**

$$\\text{Normal BP} = \\underbrace{120}_{\\text{Systolic (heart contracts)}} / \\underbrace{80}_{\\text{Diastolic (heart relaxes)}} \\text{ mmHg}$$

- **Systolic pressure:** Maximum pressure when ventricles contract and push blood out
- **Diastolic pressure:** Minimum pressure when heart relaxes between beats
- **Hypertension (High BP):** > 140/90 → damages blood vessels, strokes, heart attack
- **Hypotension (Low BP):** < 90/60 → dizziness, fainting

**Heart Rate:** 72 beats/minute at rest; increases during exercise (epinephrine/adrenaline effect).`,
          note: "The NCERT book distinguishes between ARTERIES (carry blood AWAY from heart, NOT necessarily oxygenated) and VEINS (carry blood TOWARD heart, NOT necessarily deoxygenated). The Pulmonary Artery carries deoxygenated blood and the Pulmonary Vein carries oxygenated blood — total reversal of the general rule!"
        }
      ],
      examinerTraps: [
        {
          trap: "Saying arteries always carry oxygenated blood and veins always carry deoxygenated blood.",
          correction: "WRONG! The PULMONARY ARTERY carries DEOXYGENATED blood (from heart to lungs). The PULMONARY VEINS carry OXYGENATED blood (from lungs to heart). The correct rule: Arteries carry blood AWAY from the heart; Veins carry blood TOWARD the heart. This distinction appears in every Board exam!"
        }
      ]
    },
    {
      id: "excretion",
      label: "4. Excretion — Removing Metabolic Waste",
      heading: "The Body's Waste Disposal System",
      subheading: "Kidney Structure + Nephron + Urine Formation + Dialysis + Plant Excretion",
      explanation: `**EXCRETION:** Removal of harmful metabolic waste products from the body.

**Main excretory products:**
- **Urea:** From excess amino acid breakdown (liver makes urea from ammonia + CO₂)
- **CO₂:** From cellular respiration → removed by lungs
- **Excess water and salts:** Removed by kidneys and skin (sweat)
- **Bile pigments (bilirubin):** Broken-down haemoglobin → removed via bile → faeces gives colour

**HUMAN KIDNEY — Master Excretory Organ:**

The **nephron** is the functional unit of the kidney (1 million nephrons in each kidney!).

**Parts of the Nephron:**
1. **Bowman's Capsule:** Cup-shaped structure surrounding the Glomerulus
2. **Glomerulus:** Network of tiny blood capillaries inside Bowman's Capsule
3. **Proximal Convoluted Tubule (PCT):** First twisted tube — reabsorbs glucose, amino acids, ions, some water
4. **Loop of Henle:** U-shaped tube deep in medulla — creates concentration gradient for water reabsorption
5. **Distal Convoluted Tubule (DCT):** Final reabsorption, tubular secretion of waste
6. **Collecting Duct:** Collects urine from several nephrons → drains into Renal Pelvis → Ureter

**3 Steps of Urine Formation:**

**Step 1 — ULTRA-FILTRATION (in Glomerulus):**
- High blood pressure in Glomerulus forces small molecules OUT through the capillary walls into Bowman's Capsule
- Filtered: Water, glucose, urea, uric acid, amino acids, mineral salts
- NOT filtered: Blood cells, plasma proteins (too large), platelets
- Product = **Glomerular Filtrate** (~180 litres/day!)

**Step 2 — SELECTIVE REABSORPTION (in Tubules):**
- Useful substances are reabsorbed BACK into the bloodstream
- Glucose (100%) — completely reabsorbed; appears in urine only if blood sugar is too high (Diabetes!)
- Amino acids (100%) — completely reabsorbed
- Water (~99%) — mostly reabsorbed; amount controlled by ADH hormone
- Product = **Concentrated Urine** (~1.5 litres/day)

**Step 3 — TUBULAR SECRETION:**
- Some additional waste is ACTIVELY SECRETED into the tubule from blood
- Examples: Excess K⁺, H⁺, creatinine, certain drugs

**Final urine composition:** Water, Urea, Uric acid, Creatinine, Salts, Bile pigments (yellow colour)

**DIALYSIS (Artificial Kidney):**
For patients with kidney failure — blood is passed through a cellophane tube surrounded by a dialysis fluid. Waste (urea, etc.) diffuses out; blood returns cleaned. Must be done 2-3 times/week!

**PLANT EXCRETION:**
- CO₂ (from respiration) and O₂ (from photosynthesis) leave through stomata
- Excess water → transpiration through stomata
- Some wastes are stored in leaves (tannins, resins, gums) and removed when leaves fall → autumnal leaf fall = plant excretion!
- Resins and gums stored in bark`,
      examinerTraps: [
        {
          trap: "Saying glucose is present in urine normally.",
          correction: "In a healthy person, glucose is COMPLETELY reabsorbed in the proximal convoluted tubule (PCT). Glucose appears in urine only in DIABETES MELLITUS when blood sugar rises above the renal threshold (~180 mg/dL). This condition is called GLYCOSURIA. The Board often asks: 'What does glucose in urine indicate?'"
        },
        {
          trap: "Saying blood proteins are filtered in the glomerulus.",
          correction: "Large plasma proteins (albumin, globulin) and blood cells are TOO LARGE to pass through the glomerular membrane — they stay in the blood. If proteins appear in urine, it indicates kidney damage (glomerulonephritis)."
        }
      ]
    }
  ]
};
