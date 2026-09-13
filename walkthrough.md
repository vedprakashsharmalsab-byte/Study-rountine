# CBSE Command Center: Science Diagrams, Master Sheets & Hindi Suite Walkthrough

All tasks requested by the user have been completed, verified with `npx tsc --noEmit` (0 errors), tested with `npm run build` (successful production build), and pushed to `origin/main`.

---

## 1. Where to Find All Diagrams (UI & Codebase Locations)

### In the Application UI
1. **Direct Navigation via Main Header**:
   - Click the **"Concepts"** workspace tab in the top navigation bar.
   - You will see **"Science Diagrams & Sheets"** (`29 Diag + 15 Sheets`) listed as the 2nd item right beside *NCERT Blueprints*.
2. **Three Exploration Modes inside the Science Diagrams Hub**:
   - **NCERT Visual Gallery (`29 Visual Diagrams`)**:
     Every cropped ray diagram (Concave Mirror cases 1–6, Convex Mirror, Convex Lens cases 1–6, Concave Lens, Glass Slab Refraction, Human Eye Defects Myopia/Hypermetropia, Triangular Glass Prism, Newton's Spectrum, Atmospheric Refraction, Ohm's Law Circuit, Resistors in Series/Parallel, Domestic Wiring Circuit).
   - **📸 15 Master Study Sheets Explorer**:
     A dedicated tab showing all 15 authentic widescreen study sheets provided by the user in `training-materials-vault/science/diagram/`. Click any sheet to open the **Fullscreen Deep-Zoom Viewer (up to 300% zoom)**.
   - **Interactive Ray Tracers & Solvers (12 Solvers)**:
     Interactive optical solvers where you can adjust object positions (Infinity, Beyond C, At C, Between C & F, At F, Between P & F) and circuit solvers that step through Ohm's Law and equivalent resistance.
3. **Cross-Link from Individual Cards to Master Sheets**:
   - On every ray diagram card in the Visual Gallery, click **"📸 View Provided Source Photo Sheet"** to instantly open the high-res master study sheet from which the diagram was drawn.

### In the Codebase Filesystem
| Content | Codebase Location |
| :--- | :--- |
| **15 Authentic Master Study Sheets** | [`public/study_material/science/master_sheets/`](file:///c:/Users/Lenovo/Downloads/ai-cbse-command-center/public/study_material/science/master_sheets) |
| **29 Individual Cropped Diagrams** | [`public/study_material/science/diagrams/`](file:///c:/Users/Lenovo/Downloads/ai-cbse-command-center/public/study_material/science/diagrams) |
| **Master Diagrams Data & Metadata** | [`src/data/scienceDiagramsData.ts`](file:///c:/Users/Lenovo/Downloads/ai-cbse-command-center/src/data/scienceDiagramsData.ts) |
| **Diagrams UI Component** | [`src/components/ScienceDiagramsView.tsx`](file:///c:/Users/Lenovo/Downloads/ai-cbse-command-center/src/components/ScienceDiagramsView.tsx) |

---

## 2. Authentic Mirror & Lens Diagram Fixes

### What was wrong previously:
- The concave mirror at C (`concave_mirror_at_c.png`) and convex mirror (`convex_mirror_between_inf_and_pole.png`) had been replaced by low-color synthetic SVG/PNG placeholders rather than crops from the user's authentic study sheets.
- Master sheets were not accessible as full-size revision materials.

### What was done to fix it:
1. **Extracted Authentic High-Res Crops**:
   - `convex_mirror_between_inf_and_pole.png` (and `.jpeg`): Cropped directly from `Convex_mirror_ray_diagrams_202609051442.jpeg` (688x768).
   - `concave_mirror_at_c.png` (and `.jpeg`): Cropped directly from `Drawing_concave_mirror_ray_diagrams_202609051442.jpeg` (688x768).
   - `convex_lens_between_o_and_f1.png`: Cropped from `Creating_convex_lens_ray_diagrams_202609051445.jpeg`.
   - `prism_dispersion.png`: Cropped from `Creating_physics_diagram_sheet_202609051451.jpeg`.
2. **Cataloged All 15 Master Sheets**:
   All 15 master study sheets are saved in `public/study_material/science/master_sheets/` and mapped in `SCIENCE_MASTER_PHOTO_SHEETS`.
3. **Deep-Zoom Modal**:
   Users can zoom up to 300% on any study sheet to inspect rays, normal lines, focal points, and annotations with full clarity.

---

## 3. Visual Mnemonics Audit & Fix
- Scanned all 150 image references in `src/`.
- Fixed 19 incorrect paths in [`src/data/sstConceptsData.ts`](file:///c:/Users/Lenovo/Downloads/ai-cbse-command-center/src/data/sstConceptsData.ts) (e.g. `pol_ch1_powersharing` -> `pol_ch1_power_sharing`, `geo_ch2_forest` -> `geo_ch2_forest_wildlife`, `geo_ch3_water` -> `geo_ch3_water_resources`, `eco_ch3_money` -> `eco_ch3_money_credit`).
- Audited with `check_all_images.py`: **0 missing images, 0 case mismatches**.

---

## 4. Hindi Master Hub (Code 085) Reorientation

1. **Bilingual Navigation Tabs (English Headers + Devanagari Subtitles)**:
   - **Sparsh Prose** (`स्पर्श - गद्य खंड • 7 Ch`)
   - **Sparsh Poetry** (`स्पर्श - काव्य खंड • 7 Poems`)
   - **Sanchayan** (`संचयन - पूरक • 3 Ch`)
   - **Grammar Hub** (`व्याकरण मास्टर • 16 Marks`)
   - **Writing Studio** (`रचनात्मक लेखन • 22 Marks`)
   - **Spelling Traps** (`वर्तनी व अशुद्धि निवारक`)
2. **Bilingual Sub-Tabs**:
   - `Summary (पाठ-सार)`
   - `Stanzas & Meaning (काव्यांश व भावार्थ)`
   - `Vocabulary (शब्दार्थ)`
   - `Board Q&A (परीक्षा प्रश्नोत्तर)`
   - `RTC Practice (पठित गद्यांश MCQs)`
3. **Typography & Layout**:
   - Applied `leading-relaxed font-sans` so Devanagari vowel matras (`ि`, `ी`, `ु`, `ू`, `ृ`, `े`, `ै`, `ो`, `ौ`, `ं`, `्`) are never clipped.
   - Added direct **"Practice in Question Bank (अध्याय अभ्यास)"** button on every chapter card.

---

## 5. 21-Chapter Hindi Question Bank Integration

Created [`src/data/chapters/hindi/`](file:///c:/Users/Lenovo/Downloads/ai-cbse-command-center/src/data/chapters/hindi) with 21 dedicated chapter question modules:
- **Sparsh Prose**: Ch 1–7 (बड़े भाई साहब, डायरी का एक पन्ना, तताँरा-वामीरो, तीसरी कसम, अब कहाँ दूसरे, पतझड़ में टूटी पत्तियाँ, कारतूस)
- **Sparsh Poetry**: Ch 8–14 (साखी, पद, मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण)
- **Sanchayan**: Ch 15–17 (हरिहर काका, सपनों के-से दिन, टोपी शुक्ला)
- **Grammar**: Ch 18–21 (पदबंध, वाक्य रूपांतरण, समास, मुहावरे)

Wired into:
- [`src/data/chapters/index.ts`](file:///c:/Users/Lenovo/Downloads/ai-cbse-command-center/src/data/chapters/index.ts) (`getChapterQuestions(chapterId, "hindi")`)
- [`src/app/page.tsx`](file:///c:/Users/Lenovo/Downloads/ai-cbse-command-center/src/app/page.tsx) (`activeVaultSubject: "hindi"`, `🇮🇳 Hindi (085)` tab button, and 21-chapter optgroup dropdown).

---

## 6. Verification Results
- `npx tsc --noEmit`: Passed with **0 errors**.
- `npm run build`: Production build succeeded in **13.0s** with 5/5 static routes prerendered.
- `git push origin main`: Pushed commit `1d4be0b` to GitHub.
