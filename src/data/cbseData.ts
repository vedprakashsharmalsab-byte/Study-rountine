export interface ChapterTopic {
  id: string;
  title: string;
  sectionCode: string;
  isImportantForBoards?: boolean;
}

export interface Chapter {
  id: string;
  name: string;
  ncertChapterNo?: number;
  topics: ChapterTopic[];
}

export interface Subject {
  id: string;
  name: string;
  code?: string;
  color: string;
  category: string;
  chapters: Chapter[];
}

export interface TestSeriesExam {
  id: string;
  subject: string;
  code: string;
  date: string; // YYYY-MM-DD
  displayDate: string;
  teachers: string;
  syllabusSummary: string;
  chapters: {
    category?: string;
    title: string;
    topics: string[];
  }[];
  samplePaperQuestions: {
    qNo: number;
    section: "Section A (1M / MCQ)" | "Section B (2M Short)" | "Section C (3M Short)" | "Section D (5M Long)" | "Section E (4M Case Study)";
    question: string;
    answer: string;
    marks: number;
  }[];
}

export interface FlashcardItem {
  id: string;
  subject: "Mathematics" | "Science" | "Social Science" | "Information Technology" | "English" | "Hindi";
  chapter: string;
  topic: string;
  frontQuestion: string;
  backAnswer: string;
  hintOrFormula?: string;
  difficulty: "Fundamental" | "High Yield" | "Topper Level (100%)";
  mastered?: boolean;
}

export interface BoardQuestion {
  id: string;
  type: "HOTS (RD/RS Level)" | "Competency Based" | "Case Study" | "Assertion Reasoning" | "Flashcard";
  subject: "Mathematics" | "Science" | "Social Science" | "English" | "Hindi" | "Information Technology";
  chapter: string;
  topic: string;
  question: string;
  caseContext?: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: "Medium" | "Hard" | "Topper Level (100%)";
  markingSchemeSteps: string[];
}

export interface InteractiveSimulation {
  id: string;
  title: string;
  subject: string;
  topic: string;
  provider: "PhET Interactive Lab" | "GeoGebra 3D Math" | "OLabs Ministry Lab" | "Professor Dave Science 3D";
  url: string;
  thumbnailColor: string;
  description: string;
  keyLearningObjectives: string[];
}

export interface FormulaItem {
  id: string;
  subject: "Mathematics" | "Science" | "Social Science" | "English" | "Hindi" | "Information Technology";
  topic: string;
  formula: string;
  description: string;
}

// -------------------------------------------------------------
// 1. EXACT TEST SERIES I (2026-2027) SCHEDULE & SYLLABUS (LSA BISSAU)
// -------------------------------------------------------------
export const TEST_SERIES_I_SCHEDULE: TestSeriesExam[] = [
  {
    id: "exam_maths",
    subject: "Mathematics",
    code: "041 / 241",
    date: "2026-09-14",
    displayDate: "14 September 2026 (Monday)",
    teachers: "Mr. Vikas Saxena",
    syllabusSummary: "Triangle, Circle, Introduction to Trigonometry, Application of Trigonometry, Statistics, Probability",
    chapters: [
      {
        title: "Triangles",
        topics: [
          "Basic Proportionality Theorem (BPT / Thales Theorem) Proof",
          "Converse of Basic Proportionality Theorem",
          "Criteria for Similarity of Triangles (AAA, SAS, SSS)",
          "Similarity Riders & HOTS Numerical Proofs"
        ]
      },
      {
        title: "Circles",
        topics: [
          "Theorem 10.1: Tangent at point of contact is perpendicular to radius",
          "Theorem 10.2: Tangents from external point are equal in length",
          "Circumscribing Quadrilaterals & Tangent Triangle Riders"
        ]
      },
      {
        title: "Introduction to Trigonometry",
        topics: [
          "Trigonometric Ratios (sin, cos, tan, cot, sec, cosec)",
          "Values at 0°, 30°, 45°, 60°, 90°",
          "Pythagorean Identities: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = cosec²θ",
          "RD Sharma Level Identity Proofs"
        ]
      },
      {
        title: "Some Applications of Trigonometry",
        topics: [
          "Angles of Elevation & Angles of Depression",
          "Two-Triangle Heights and Distances Problems (Towers, Flags, Ships)"
        ]
      },
      {
        title: "Statistics",
        topics: [
          "Mean of Grouped Data (Direct & Assumed Mean Methods)",
          "Mode of Grouped Data: l + [(f₁ - f₀)/(2f₁ - f₀ - f₂)] × h",
          "Median of Grouped Data: l + [(N/2 - cf)/f] × h",
          "Missing Frequencies (x, y) & Empirical Formula: 3 Median = Mode + 2 Mean"
        ]
      },
      {
        title: "Probability",
        topics: [
          "Classical Definition P(E) = n(E)/n(S)",
          "Cards (52 Deck breakdown: Suits, Face Cards, Aces)",
          "2 Dice & 3 Coins Sample Spaces"
        ]
      }
    ],
    samplePaperQuestions: [
      {
        qNo: 1,
        section: "Section A (1M / MCQ)",
        question: "If sin θ + cos θ = √2 cos θ, then the value of (cos θ - sin θ) is equal to:",
        answer: "√2 sin θ. (Squaring and applying sin²θ + cos²θ = 1).",
        marks: 1
      },
      {
        qNo: 2,
        section: "Section C (3M Short)",
        question: "Prove that the lengths of tangents drawn from an external point to a circle are equal.",
        answer: "Construct right triangles with radii and common hypotenuse. Apply RHS Congruence criterion to prove PA = PB.",
        marks: 3
      },
      {
        qNo: 3,
        section: "Section D (5M Long)",
        question: "From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Determine the height of the tower.",
        answer: "Height of tower = 7(√3 + 1) m ≈ 19.124 m. (Using tan 45° to find base distance = 7m, then tan 60° to find upper height = 7√3m).",
        marks: 5
      }
    ]
  },
  {
    id: "exam_science",
    subject: "Science",
    code: "086",
    date: "2026-09-16",
    displayDate: "16 September 2026 (Wednesday)",
    teachers: "Mr. Amit (Bio) / Mr. Sameer (Chem) / Mr. Rajesh (Phy)",
    syllabusSummary: "Biology: Life Processes & Our Environment | Chemistry: Acids, Bases & Salts, Metals & Non-Metals | Physics: Electricity & Magnetic Effects",
    chapters: [
      {
        category: "Biology",
        title: "Life Processes",
        topics: [
          "Autotrophic Nutrition (Photosynthesis) & Stomata Opening Mechanism",
          "Human Digestive System & Digestive Enzymes",
          "Human Respiratory System & Aerobic vs Anaerobic Breakdown of Glucose",
          "Human Heart Anatomy, Double Circulation & Blood Pressure",
          "Structure & Working of Nephron (Excretion in Humans)"
        ]
      },
      {
        category: "Biology",
        title: "Our Environment",
        topics: [
          "Ecosystem Components & Food Chains/Webs",
          "10% Law of Energy Transfer & Biological Magnification",
          "Ozone Layer Depletion & Waste Disposal Management"
        ]
      },
      {
        category: "Chemistry",
        title: "Acids, Bases and Salts",
        topics: [
          "Chemical Properties: Reaction with Metals, Metal Carbonates & Oxides",
          "pH Scale & Everyday Importance (Digestive pH, Tooth Decay, Acid Rain)",
          "Chlor-Alkali Process (NaOH, Cl₂, H₂)",
          "Bleaching Powder (CaOCl₂), Baking Soda (NaHCO₃), Washing Soda (Na₂CO₃·10H₂O), Plaster of Paris (CaSO₄·½H₂O)"
        ]
      },
      {
        category: "Chemistry",
        title: "Metals and Non-metals",
        topics: [
          "Physical & Chemical Properties & Metal Reactivity Series",
          "Formation & Properties of Ionic Compounds (Electron Dot Structures)",
          "Metallurgy: Roasting, Calcination & Electrolytic Refining of Copper",
          "Corrosion Prevention & Important Alloys"
        ]
      },
      {
        category: "Physics",
        title: "Electricity",
        topics: [
          "Electric Current (I = Q/t) & Potential Difference (V = W/Q)",
          "Ohm's Law (V = IR) & Resistance Factors (R = ρ l/A)",
          "Resistors in Series (Rs = R₁+R₂+R₃) & Parallel (1/Rp = 1/R₁+1/R₂+1/R₃)",
          "Joule's Heating Effect (H = I²Rt) & Electric Power (P = VI = I²R = V²/R)"
        ]
      },
      {
        category: "Physics",
        title: "Magnetic Effects of Electric Current",
        topics: [
          "Magnetic Field Lines & Properties (No intersection, Closed curves)",
          "Field due to Straight Conductor, Circular Loop & Solenoid",
          "Fleming's Left-Hand Rule & Force on Current Conductor",
          "Domestic Electric Circuits: Live, Neutral, Earth Wire, Fuse & Overloading"
        ]
      }
    ],
    samplePaperQuestions: [
      {
        qNo: 1,
        section: "Section A (1M / MCQ)",
        question: "Which gland secretes bile juice and where is it stored?",
        answer: "Liver secretes bile juice; stored in Gallbladder.",
        marks: 1
      },
      {
        qNo: 2,
        section: "Section B (2M Short)",
        question: "Why do ionic compounds have high melting and boiling points?",
        answer: "Due to strong electrostatic forces of attraction between oppositely charged ions, requiring significant thermal energy to break.",
        marks: 2
      },
      {
        qNo: 3,
        section: "Section D (5M Long)",
        question: "State Ohm's law. Draw a schematic circuit diagram to verify it. Deduce expression for equivalent resistance of three resistors in parallel.",
        answer: "V ∝ I at constant temp. 1/Rp = 1/R₁ + 1/R₂ + 1/R₃. Show derivation using I = I₁ + I₂ + I₃ and I = V/R.",
        marks: 5
      }
    ]
  },
  {
    id: "exam_hindi",
    subject: "Hindi Course B (085)",
    code: "085",
    date: "2026-09-18",
    displayDate: "18 September 2026 (Friday)",
    teachers: "Mr. Jitendra",
    syllabusSummary: "अपठित गद्यांश, पठित गद्यांश, गद्य खंड के सभी पाठ, समास, रचना के आधार पर वाक्य, अनुच्छेद लेखन, सूचना लेखन, ईमेल लेखन / कथा लेखन",
    chapters: [
      {
        category: "अपठित एवं पठित बोध",
        title: "गद्यांश बोध",
        topics: [
          "अपठित गद्यांश (Unseen Passage Comprehension & Title Analysis)",
          "पठित गद्यांश (Textbook Comprehension Questions)"
        ]
      },
      {
        category: "व्याकरण (Grammar - 16 Marks)",
        title: "व्यावहारिक व्याकरण",
        topics: [
          "समास (तत्पुरुष, कर्मधारय, द्विगु, द्वंद्व, बहुव्रीहि, अव्ययीभाव समास पहचान एवं विग्रह)",
          "रचना के आधार पर वाक्य रूपांतरण (सरल वाक्य, संयुक्त वाक्य, मिश्र वाक्य पहचान व परिवर्तन)"
        ]
      },
      {
        category: "स्पर्श भाग २ (गद्य खंड)",
        title: "गद्य खंड के सभी पाठ",
        topics: [
          "बड़े भाई साहब (प्रेमचंद)",
          "डायरी का एक पन्ना (सीताराम सेकसरिया)",
          "तँतारा-वामीरो कथा (लीलाधर मंडलोई)",
          "तीसरी कसम के शिल्पकार शैलेंद्र (प्रहलाद अग्रवाल)",
          "अब कहाँ दूसरे के दुख से दुखी होने वाले (निदा फाज़ली)",
          "पतझर में टूटी पत्तियाँ (गिन्नी का सोना, झेन की देन)",
          "कारतूस (हबीब तनवीर)"
        ]
      },
      {
        category: "रचनात्मक लेखन (Writing Skills)",
        title: "लेखन कौशल",
        topics: [
          "अनुच्छेद लेखन (Paragraph Writing on Contemporary Issues - 100 to 120 words)",
          "सूचना लेखन (Notice Writing with proper standard format)",
          "ईमेल लेखन (Formal / Informal Email Writing)",
          "लघुकथा लेखन (Short Story Writing with moral & title)"
        ]
      }
    ],
    samplePaperQuestions: [
      {
        qNo: 1,
        section: "Section A (1M / MCQ)",
        question: "'नीलकमल' शब्द में कौन सा समास है? विग्रह सहित बताइए।",
        answer: "कर्मधारय समास (नीला है जो कमल)।",
        marks: 1
      },
      {
        qNo: 2,
        section: "Section B (2M Short)",
        question: "'सूर्योदय हुआ और पक्षी चहचहाने लगे।' इस वाक्य को सरल वाक्य में बदलिए।",
        answer: "सूर्योदय होने पर पक्षी चहचहाने लगे।",
        marks: 2
      },
      {
        qNo: 3,
        section: "Section D (5M Long)",
        question: "'डिजिटल भारत और युवा' विषय पर लगभग 100-120 शब्दों में सारगर्भित अनुच्छेद लिखिए।",
        answer: "भूमिका, तकनीक का प्रभाव, ऑनलाइन शिक्षा व रोजगार के अवसर, सावधानियां एवं निष्कर्ष।",
        marks: 5
      }
    ]
  },
  {
    id: "exam_sst",
    subject: "Social Science",
    code: "087",
    date: "2026-09-21",
    displayDate: "21 September 2026 (Monday)",
    teachers: "Mr. Himanshu / Mr. Chandan / Mr. Deepak / Mr. Ankit",
    syllabusSummary: "History: Ch 1 & 2 | Pol. Science: Power Sharing, Federalism | Geography: Ch 1, 2, 3 | Economics: Ch 1, 2, 3",
    chapters: [
      {
        category: "History",
        title: "The Rise of Nationalism in Europe (Ch 1)",
        topics: [
          "French Revolution & Idea of Nation (Civil Code 1804)",
          "Making of Nationalism & Treaty of Vienna 1815",
          "Unification of Germany (Otto von Bismarck) & Italy (Mazzini, Cavour, Garibaldi)",
          "Visualizing the Nation (Allegories: Marianne & Germania)"
        ]
      },
      {
        category: "History",
        title: "Nationalism in India (Ch 2)",
        topics: [
          "First World War, Khilafat & Non-Cooperation Movement (1920)",
          "Different Strands within Movement (Towns, Countryside, Tribal Rebellion)",
          "Salt March & Civil Disobedience Movement (1930) & Gandhi-Irwin Pact",
          "Sense of Collective Belonging & Map Items"
        ]
      },
      {
        category: "Political Science",
        title: "Power Sharing & Federalism",
        topics: [
          "Power Sharing: Belgium Model vs Sri Lanka Majoritarianism",
          "Why Power Sharing is Desirable (Prudential vs Moral reasons)",
          "Federalism: Key Features & India as a Federal Country (Union, State, Concurrent Lists)",
          "Decentralization in India (73rd & 74th Amendments 1992)"
        ]
      },
      {
        category: "Geography",
        title: "Resources, Forests & Water Resources",
        topics: [
          "Resources & Development: Resource Planning & Soil Types in India",
          "Forest & Wildlife Resources: Reserved, Protected & Unclassed Forests, Community Conservation (JFM)",
          "Water Resources: Multi-Purpose River Valley Projects & Rainwater Harvesting (Rooftop, Guls/Kuls)"
        ]
      },
      {
        category: "Economics",
        title: "Development, Sectors & Money and Credit",
        topics: [
          "Development: National Income, Per Capita Income (World Bank Criteria) & HDI",
          "Sectors of Indian Economy: Primary, Secondary, Tertiary & Disguised Unemployment",
          "Money and Credit: Double Coincidence of Wants, Formal vs Informal Credit, Role of RBI, Self Help Groups (SHGs)"
        ]
      }
    ],
    samplePaperQuestions: [
      {
        qNo: 1,
        section: "Section A (1M / MCQ)",
        question: "Which treaty recognized Greece as an independent nation in 1832?",
        answer: "Treaty of Constantinople (1832).",
        marks: 1
      },
      {
        qNo: 2,
        section: "Section C (3M Short)",
        question: "Differentiate between Prudential and Moral reasons for Power Sharing with examples.",
        answer: "Prudential reduces conflict/violence (stability). Moral is the very spirit of democracy.",
        marks: 3
      },
      {
        qNo: 3,
        section: "Section D (5M Long)",
        question: "Why is the formal sector of credit considered better than the informal sector in India? How can formal credit be expanded in rural areas?",
        answer: "Formal sector has low interest, no debt traps, supervised by RBI. Expand through rural bank branches and SHGs.",
        marks: 5
      }
    ]
  },
  {
    id: "exam_it",
    subject: "Information Technology",
    code: "402",
    date: "2026-09-23",
    displayDate: "23 September 2026 (Wednesday)",
    teachers: "Mr. Vikash Jariwal & Mr. Vikram Raghaw",
    syllabusSummary: "Part-A: Units 1, 2, 3 (Communication, Self Management, ICT) | Part-B: Units 1, 2, 3 (Digital Documentation, Spreadsheet, DBMS Base)",
    chapters: [
      {
        category: "Part-A (Employability Skills)",
        title: "Units 1, 2, 3 (Employability)",
        topics: [
          "Unit 1: Communication Skills - II (Active Listening, Verbal/Non-verbal, Overcoming Barriers)",
          "Unit 2: Self Management Skills - II (Stress Management Techniques, Self-Motivation, Goal Setting SMART)",
          "Unit 3: ICT Skills - II (Operating Systems, File Management, Cyber Safety & Virus Protection)"
        ]
      },
      {
        category: "Part-B (Subject Specific Skills)",
        title: "Digital Documentation (Advanced) - LibreOffice Writer",
        topics: [
          "Styles & Formatting Window (Paragraph, Character, Page, Frame styles)",
          "Inserting & Formatting Images (Crop, Wrap, Grouping, Positioning)",
          "Creating & Customizing Table of Contents (TOC)",
          "Using Templates & Implementing Mail Merge Feature"
        ]
      },
      {
        category: "Part-B (Subject Specific Skills)",
        title: "Electronic Spreadsheet (Advanced) - LibreOffice Calc",
        topics: [
          "Consolidating Data & Creating Subtotals across sheets",
          "What-If Scenarios & Goal Seek Analysis",
          "Linking Spreadsheet Data (Hyperlinks, External Sheets)",
          "Sharing & Reviewing Spreadsheets (Track Changes, Accept/Reject)"
        ]
      },
      {
        category: "Part-B (Subject Specific Skills)",
        title: "Database Management System (DBMS) - LibreOffice Base",
        topics: [
          "Concepts of RDBMS: Tables, Records, Fields, Primary Key, Foreign Key",
          "Creating Tables using Design View & Wizard (Data types: Text, Numeric, Date)",
          "Building Queries using Query Design Window & SQL Select Commands",
          "Designing Forms & Generating Professional Reports"
        ]
      }
    ],
    samplePaperQuestions: [
      {
        qNo: 1,
        section: "Section A (1M / MCQ)",
        question: "Which key uniquely identifies each record in a database table?",
        answer: "Primary Key.",
        marks: 1
      },
      {
        qNo: 2,
        section: "Section B (2M Short)",
        question: "What is Goal Seek in LibreOffice Calc? Give an example.",
        answer: "A What-If analysis tool that finds the required input value to achieve a specific target output.",
        marks: 2
      },
      {
        qNo: 3,
        section: "Section D (5M Long)",
        question: "Explain the complete step-by-step process of performing a Mail Merge in LibreOffice Writer.",
        answer: "1. Select document 2. Select recipient data source 3. Insert address block & fields 4. Preview 5. Merge & print/save.",
        marks: 5
      }
    ]
  },
  {
    id: "exam_english",
    subject: "English Language & Literature",
    code: "184",
    date: "2026-09-26",
    displayDate: "26 September 2026 (Saturday)",
    teachers: "Ms. Rashmi & Mr. Gaurav",
    syllabusSummary: "Reading: Unseen Passages | Writing: Formal Letters, Analytical Paragraph | Literature: First Flight + Footprints Without Feet",
    chapters: [
      {
        category: "Section A (Reading Skills)",
        title: "Unseen Passages",
        topics: [
          "Discursive Passage (400-450 words: Inference, Evaluation, Vocabulary)",
          "Case-Based Factual Passage (with visual data/charts - 200-250 words)"
        ]
      },
      {
        category: "Section B (Writing Skills & Grammar)",
        title: "Writing & Integrated Grammar",
        topics: [
          "Formal Letter Writing (Letter to Editor, Complaint, Enquiry, Order)",
          "Analytical Paragraph Writing (Based on charts, graph, cue cues - 100-120 words)",
          "Integrated Grammar: Tenses, Modals, Subject-Verb Concord, Reported Speech"
        ]
      },
      {
        category: "Section C (Literature - Footprints without Feet)",
        title: "Footprints without Feet (Supplementary)",
        topics: [
          "A Triumph of Surgery (James Herriot, Tricki, Mrs. Pumphrey)",
          "The Thief's Story (Hari Singh, Anil - Trust & Transformation)",
          "The Midnight Visitor (Ausable, Max, Fowler - Secret Agent Wit)",
          "A Question of Trust (Horace Danby, Lady in Red - Thieves Honor)",
          "Footprints without Feet (Griffin - Brilliant but Lawless Scientist)",
          "The Making of a Scientist (Richard Ebright - Monarch Butterflies)",
          "The Necklace (Matilda Loisel, Mme Forestier - Vanity & Fate)",
          "Bholi (Sulekha, Teacher - Empowerment & Self-Respect)",
          "The Book That Saved the Earth (Martians, Think-Tank, Mother Goose)"
        ]
      },
      {
        category: "Section C (Literature - First Flight)",
        title: "First Flight (Main Reader Prose & Poems)",
        topics: [
          "A Letter to God (Lencho) & Nelson Mandela: Long Walk to Freedom",
          "Two Stories about Flying (His First Flight, Black Aeroplane)",
          "From the Diary of Anne Frank & Glimpses of India",
          "Mijbil the Otter, Madam Rides the Bus, The Sermon at Benares, The Proposal",
          "All 10 Poems: Dust of Snow, Fire & Ice, Amanda!, Custard the Dragon, etc."
        ]
      }
    ],
    samplePaperQuestions: [
      {
        qNo: 1,
        section: "Section A (1M / MCQ)",
        question: "Why was Tricki hospitalized by Dr. James Herriot?",
        answer: "Tricki was dangerously bloated and lethargic due to overfeeding by Mrs. Pumphrey; needed dietary discipline and exercise.",
        marks: 1
      },
      {
        qNo: 2,
        section: "Section C (3M Short)",
        question: "How did Ausable outsmart Max without using any physical weapon in 'The Midnight Visitor'?",
        answer: "Ausable fabricated a convincing story about a non-existent balcony and police arrival, prompting Max to jump into empty space.",
        marks: 3
      },
      {
        qNo: 3,
        section: "Section D (5M Long)",
        question: "Write an Analytical Paragraph in 100-120 words analyzing the shift in adolescent career preferences based on tech adoption.",
        answer: "Introductory overview, comparative data trends, high vs low growth sectors, concluding synthesis with formal tone.",
        marks: 5
      }
    ]
  }
];

// -------------------------------------------------------------
// 2. COMPLETE 2026-2027 NCERT FULL CURRICULUM (ALL 6 SUBJECTS)
// -------------------------------------------------------------
export const CBSE_SUBJECTS: Subject[] = [
  {
    id: "maths",
    name: "Mathematics (041 / 241)",
    color: "from-blue-500 to-indigo-600",
    category: "Core",
    chapters: [
      {
        id: "math_ch1",
        name: "Real Numbers",
        ncertChapterNo: 1,
        topics: [
          { id: "m_1_1", sectionCode: "1.1", title: "Fundamental Theorem of Arithmetic (Prime Factorization & HCF/LCM)", isImportantForBoards: true },
          { id: "m_1_2", sectionCode: "1.2", title: "Proofs of Irrationality (√2, √3, √5, 3+2√5)", isImportantForBoards: true }
        ]
      },
      {
        id: "math_ch2",
        name: "Polynomials",
        ncertChapterNo: 2,
        topics: [
          { id: "m_2_1", sectionCode: "2.1", title: "Geometrical Meaning of Zeroes of Polynomials", isImportantForBoards: false },
          { id: "m_2_2", sectionCode: "2.2", title: "Relationship between Zeroes & Coefficients: α+β = -b/a, αβ = c/a", isImportantForBoards: true }
        ]
      },
      {
        id: "math_ch3",
        name: "Pair of Linear Equations in Two Variables",
        ncertChapterNo: 3,
        topics: [
          { id: "m_3_1", sectionCode: "3.1", title: "Graphical Method & Consistency Conditions (a1/a2 ≠ b1/b2, unique/infinite/none)", isImportantForBoards: true },
          { id: "m_3_2", sectionCode: "3.2", title: "Algebraic Methods: Substitution & Elimination Methods", isImportantForBoards: true },
          { id: "m_3_3", sectionCode: "3.3", title: "Real-Life Word Problems (Upstream/Downstream, Age, Fractions)", isImportantForBoards: true }
        ]
      },
      {
        id: "math_ch4",
        name: "Quadratic Equations",
        ncertChapterNo: 4,
        topics: [
          { id: "m_4_1", sectionCode: "4.1", title: "Solution by Factorization & Quadratic Formula: x = (-b ± √D)/2a", isImportantForBoards: true },
          { id: "m_4_2", sectionCode: "4.2", title: "Nature of Roots: Discriminant D = b² - 4ac (> 0, = 0, < 0)", isImportantForBoards: true },
          { id: "m_4_3", sectionCode: "4.3", title: "Speed-Distance, Pipes & Time-Work Word Problems (RD Sharma HOTS)", isImportantForBoards: true }
        ]
      },
      {
        id: "math_ch5",
        name: "Arithmetic Progressions",
        ncertChapterNo: 5,
        topics: [
          { id: "m_5_1", sectionCode: "5.1", title: "nth Term of an AP: an = a + (n - 1)d", isImportantForBoards: true },
          { id: "m_5_2", sectionCode: "5.2", title: "Sum of First n Terms: Sn = n/2 [2a + (n - 1)d] or n/2 [a + l]", isImportantForBoards: true },
          { id: "m_5_3", sectionCode: "5.3", title: "HOTS Applications & Real-World Case-Study Problems", isImportantForBoards: true }
        ]
      },
      {
        id: "math_ch6",
        name: "Triangles",
        ncertChapterNo: 6,
        topics: [
          { id: "m_6_1", sectionCode: "6.1", title: "Basic Proportionality Theorem (BPT / Thales Theorem) Proof", isImportantForBoards: true },
          { id: "m_6_2", sectionCode: "6.2", title: "Converse of Basic Proportionality Theorem", isImportantForBoards: true },
          { id: "m_6_3", sectionCode: "6.3", title: "Similarity Criteria (AAA, SAS, SSS) & Proof Riders", isImportantForBoards: true }
        ]
      },
      {
        id: "math_ch7",
        name: "Coordinate Geometry",
        ncertChapterNo: 7,
        topics: [
          { id: "m_7_1", sectionCode: "7.1", title: "Distance Formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²]", isImportantForBoards: true },
          { id: "m_7_2", sectionCode: "7.2", title: "Section Formula (Internal Division): P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))", isImportantForBoards: true },
          { id: "m_7_3", sectionCode: "7.3", title: "Midpoint Formula & Centroid of Triangle", isImportantForBoards: true }
        ]
      },
      {
        id: "math_ch8",
        name: "Introduction to Trigonometry",
        ncertChapterNo: 8,
        topics: [
          { id: "m_8_1", sectionCode: "8.1", title: "Trigonometric Ratios (sin, cos, tan, cosec, sec, cot)", isImportantForBoards: true },
          { id: "m_8_2", sectionCode: "8.2", title: "Values at 0°, 30°, 45°, 60°, 90° Table Mastery", isImportantForBoards: true },
          { id: "m_8_3", sectionCode: "8.3", title: "Pythagorean Identities: sin²θ+cos²θ=1, 1+tan²θ=sec²θ, 1+cot²θ=cosec²θ", isImportantForBoards: true },
          { id: "m_8_4", sectionCode: "8.4", title: "RD Sharma / RS Aggarwal Level HOTS Identity Proofs", isImportantForBoards: true }
        ]
      },
      {
        id: "math_ch9",
        name: "Some Applications of Trigonometry",
        ncertChapterNo: 9,
        topics: [
          { id: "m_9_1", sectionCode: "9.1", title: "Angles of Elevation and Depression Definitions", isImportantForBoards: true },
          { id: "m_9_2", sectionCode: "9.2", title: "Two-Triangle Heights & Distances Problems (Towers, Flags, Drones)", isImportantForBoards: true }
        ]
      },
      {
        id: "math_ch10",
        name: "Circles",
        ncertChapterNo: 10,
        topics: [
          { id: "m_10_1", sectionCode: "10.1", title: "Theorem 10.1: Tangent perpendicular to radius at point of contact", isImportantForBoards: true },
          { id: "m_10_2", sectionCode: "10.2", title: "Theorem 10.2: Tangents from external point are equal in length", isImportantForBoards: true },
          { id: "m_10_3", sectionCode: "10.3", title: "Circumscribing Quadrilaterals & Tangent Triangle Proofs", isImportantForBoards: true }
        ]
      },
      {
        id: "math_ch11",
        name: "Areas Related to Circles",
        ncertChapterNo: 11,
        topics: [
          { id: "m_11_1", sectionCode: "11.1", title: "Area of Sector: (θ/360) × πr² & Length of Arc: (θ/360) × 2πr", isImportantForBoards: true },
          { id: "m_11_2", sectionCode: "11.2", title: "Area of Major/Minor Segment = Area of Sector - Area of Triangle", isImportantForBoards: true }
        ]
      },
      {
        id: "math_ch12",
        name: "Surface Areas and Volumes",
        ncertChapterNo: 12,
        topics: [
          { id: "m_12_1", sectionCode: "12.1", title: "Surface Area of Combinations of Solids (Cylinder + Cone + Hemisphere)", isImportantForBoards: true },
          { id: "m_12_2", sectionCode: "12.2", title: "Volume of Combinations of Solids & Melting/Recasting Problems", isImportantForBoards: true }
        ]
      },
      {
        id: "math_ch13",
        name: "Statistics",
        ncertChapterNo: 13,
        topics: [
          { id: "m_13_1", sectionCode: "13.1", title: "Mean of Grouped Data (Direct & Assumed Mean Methods)", isImportantForBoards: true },
          { id: "m_13_2", sectionCode: "13.2", title: "Mode: l + [(f₁ - f₀)/(2f₁ - f₀ - f₂)] × h", isImportantForBoards: true },
          { id: "m_13_3", sectionCode: "13.3", title: "Median: l + [(N/2 - cf)/f] × h & Missing Frequencies (x, y)", isImportantForBoards: true },
          { id: "m_13_4", sectionCode: "13.4", title: "Empirical Relationship: 3 Median = Mode + 2 Mean", isImportantForBoards: true }
        ]
      },
      {
        id: "math_ch14",
        name: "Probability",
        ncertChapterNo: 14,
        topics: [
          { id: "m_14_1", sectionCode: "14.1", title: "Classical Probability: P(E) = n(E) / n(S)", isImportantForBoards: true },
          { id: "m_14_2", sectionCode: "14.2", title: "Playing Cards Breakdown (52 Cards: Red/Black, Face Cards, Aces)", isImportantForBoards: true },
          { id: "m_14_3", sectionCode: "14.3", title: "2 Dice (36 outcomes) & 3 Coins (8 outcomes) Sample Spaces", isImportantForBoards: true }
        ]
      }
    ]
  },
  {
    id: "science",
    name: "Science (086)",
    color: "from-emerald-500 to-teal-600",
    category: "Core",
    chapters: [
      {
        id: "sci_ch1",
        name: "Chemical Reactions and Equations",
        ncertChapterNo: 1,
        topics: [
          { id: "s_1_1", sectionCode: "1.1", title: "Writing & Balancing Chemical Equations (Mass Conservation)", isImportantForBoards: true },
          { id: "s_1_2", sectionCode: "1.2", title: "Combination & Decomposition Reactions (Thermal, Electrolytic, Photolytic)", isImportantForBoards: true },
          { id: "s_1_3", sectionCode: "1.3", title: "Displacement & Double Displacement (Precipitation Reactions)", isImportantForBoards: true },
          { id: "s_1_4", sectionCode: "1.4", title: "Redox Reactions (Oxidation/Reduction), Corrosion & Rancidity", isImportantForBoards: true }
        ]
      },
      {
        id: "sci_ch2",
        name: "Acids, Bases and Salts",
        ncertChapterNo: 2,
        topics: [
          { id: "s_2_1", sectionCode: "2.1", title: "Chemical Properties: Reaction with Metals, Metal Carbonates & Oxides", isImportantForBoards: true },
          { id: "s_2_2", sectionCode: "2.2", title: "pH Scale & Everyday Importance (Digestive pH, Tooth Decay, Acid Rain)", isImportantForBoards: true },
          { id: "s_2_3", sectionCode: "2.3", title: "Chlor-Alkali Process (NaOH, Cl₂, H₂)", isImportantForBoards: true },
          { id: "s_2_4", sectionCode: "2.4", title: "Bleaching Powder, Baking Soda, Washing Soda & Plaster of Paris (POP)", isImportantForBoards: true }
        ]
      },
      {
        id: "sci_ch3",
        name: "Metals and Non-metals",
        ncertChapterNo: 3,
        topics: [
          { id: "s_3_1", sectionCode: "3.1", title: "Physical & Chemical Properties & Metal Reactivity Series", isImportantForBoards: true },
          { id: "s_3_2", sectionCode: "3.2", title: "Formation & Properties of Ionic Compounds (Electron Dot Structures)", isImportantForBoards: true },
          { id: "s_3_3", sectionCode: "3.3", title: "Metallurgy: Roasting, Calcination & Electrolytic Refining of Copper", isImportantForBoards: true },
          { id: "s_3_4", sectionCode: "3.4", title: "Corrosion Prevention & Important Alloys (Brass, Bronze, Solder, Amalgam)", isImportantForBoards: true }
        ]
      },
      {
        id: "sci_ch4",
        name: "Carbon and its Compounds",
        ncertChapterNo: 4,
        topics: [
          { id: "s_4_1", sectionCode: "4.1", title: "Covalent Bonding & Versatile Nature of Carbon (Catenation, Tetravalency)", isImportantForBoards: true },
          { id: "s_4_2", sectionCode: "4.2", title: "Homologous Series & IUPAC Functional Groups Nomenclature", isImportantForBoards: true },
          { id: "s_4_3", sectionCode: "4.3", title: "Esterification, Saponification & Cleansing Action of Soaps (Micelles)", isImportantForBoards: true }
        ]
      },
      {
        id: "sci_ch5",
        name: "Life Processes",
        ncertChapterNo: 5,
        topics: [
          { id: "s_5_1", sectionCode: "5.1", title: "Autotrophic Nutrition (Photosynthesis) & Stomata Opening Mechanism", isImportantForBoards: true },
          { id: "s_5_2", sectionCode: "5.2", title: "Human Digestive System & Digestive Enzymes (Pepsin, Trypsin, Lipase)", isImportantForBoards: true },
          { id: "s_5_3", sectionCode: "5.3", title: "Human Respiration (Aerobic vs Anaerobic Breakdown of Glucose)", isImportantForBoards: true },
          { id: "s_5_4", sectionCode: "5.4", title: "Double Circulation in Human Heart & Plant Xylem/Phloem Transport", isImportantForBoards: true },
          { id: "s_5_5", sectionCode: "5.5", title: "Human Excretory System: Nephron Structure & Working", isImportantForBoards: true }
        ]
      },
      {
        id: "sci_ch6",
        name: "Control and Coordination",
        ncertChapterNo: 6,
        topics: [
          { id: "s_6_1", sectionCode: "6.1", title: "Neuron Structure, Synapse Transmission & Reflex Arc Mechanism", isImportantForBoards: true },
          { id: "s_6_2", sectionCode: "6.2", title: "Human Brain Anatomy: Forebrain, Midbrain & Hindbrain", isImportantForBoards: true },
          { id: "s_6_3", sectionCode: "6.3", title: "Plant Hormones (Auxin, Gibberellin, Cytokinin, ABA) & Tropic Movements", isImportantForBoards: true },
          { id: "s_6_4", sectionCode: "6.4", title: "Human Endocrine Glands: Thyroxine, Insulin, Adrenaline & Pituitary", isImportantForBoards: true }
        ]
      },
      {
        id: "sci_ch7",
        name: "How do Organisms Reproduce?",
        ncertChapterNo: 7,
        topics: [
          { id: "s_7_1", sectionCode: "7.1", title: "Asexual Reproduction: Binary Fission, Budding, Spore, Regeneration", isImportantForBoards: true },
          { id: "s_7_2", sectionCode: "7.2", title: "Sexual Reproduction in Flowering Plants (Double Fertilization)", isImportantForBoards: true },
          { id: "s_7_3", sectionCode: "7.3", title: "Human Male & Female Reproductive Systems", isImportantForBoards: true },
          { id: "s_7_4", sectionCode: "7.4", title: "Reproductive Health & Barrier/Chemical Contraceptive Methods", isImportantForBoards: true }
        ]
      },
      {
        id: "sci_ch8",
        name: "Heredity and Evolution",
        ncertChapterNo: 8,
        topics: [
          { id: "s_8_1", sectionCode: "8.1", title: "Mendel's Monohybrid Cross (3:1 / 1:2:1) & Dihybrid Cross (9:3:3:1)", isImportantForBoards: true },
          { id: "s_8_2", sectionCode: "8.2", title: "Sex Determination in Human Beings (XX vs XY)", isImportantForBoards: true }
        ]
      },
      {
        id: "sci_ch9",
        name: "Light – Reflection and Refraction",
        ncertChapterNo: 9,
        topics: [
          { id: "s_9_1", sectionCode: "9.1", title: "Mirror Formula (1/f = 1/v + 1/u) & Ray Diagrams (Concave/Convex)", isImportantForBoards: true },
          { id: "s_9_2", sectionCode: "9.2", title: "Refraction, Snell's Law & Refractive Index (n21 = c/v)", isImportantForBoards: true },
          { id: "s_9_3", sectionCode: "9.3", title: "Lens Formula (1/f = 1/v - 1/u) & Power of Lens (P = 1/f in meters)", isImportantForBoards: true }
        ]
      },
      {
        id: "sci_ch10",
        name: "The Human Eye and the Colorful World",
        ncertChapterNo: 10,
        topics: [
          { id: "s_10_1", sectionCode: "10.1", title: "Defects of Vision: Myopia, Hypermetropia & Presbyopia Corrections", isImportantForBoards: true },
          { id: "s_10_2", sectionCode: "10.2", title: "Dispersion through Prism, Atmospheric Refraction & Rainbow Formation", isImportantForBoards: true },
          { id: "s_10_3", sectionCode: "10.3", title: "Scattering of Light & Tyndall Effect (Why Sky is Blue / Red Sun)", isImportantForBoards: true }
        ]
      },
      {
        id: "sci_ch11",
        name: "Electricity",
        ncertChapterNo: 11,
        topics: [
          { id: "s_11_1", sectionCode: "11.1", title: "Electric Current (I = Q/t) & Potential Difference (V = W/Q)", isImportantForBoards: true },
          { id: "s_11_2", sectionCode: "11.2", title: "Ohm's Law (V = IR) & Resistivity Factors (R = ρ l/A)", isImportantForBoards: true },
          { id: "s_11_3", sectionCode: "11.3", title: "Series (Rs) and Parallel (Rp) Equivalent Resistance Derivations", isImportantForBoards: true },
          { id: "s_11_4", sectionCode: "11.4", title: "Joule's Heating Effect (H = I²Rt) & Commercial Electric Energy Units (kWh)", isImportantForBoards: true }
        ]
      },
      {
        id: "sci_ch12",
        name: "Magnetic Effects of Electric Current",
        ncertChapterNo: 12,
        topics: [
          { id: "s_12_1", sectionCode: "12.1", title: "Magnetic Field Lines & Properties of Solenoids", isImportantForBoards: true },
          { id: "s_12_2", sectionCode: "12.2", title: "Fleming's Left-Hand Rule & Force on Current Conductor", isImportantForBoards: true },
          { id: "s_12_3", sectionCode: "12.3", title: "Domestic Electric Circuits: Live, Neutral, Earth Wire & Safety Fuses", isImportantForBoards: true }
        ]
      },
      {
        id: "sci_ch13",
        name: "Our Environment",
        ncertChapterNo: 13,
        topics: [
          { id: "s_13_1", sectionCode: "13.1", title: "Trophic Levels, 10% Law of Energy Transfer & Biological Magnification", isImportantForBoards: true },
          { id: "s_13_2", sectionCode: "13.2", title: "Ozone Layer Depletion (CFCs) & Solid Waste Disposal Solutions", isImportantForBoards: true }
        ]
      }
    ]
  },
  {
    id: "sst",
    name: "Social Science (087)",
    color: "from-amber-500 to-orange-600",
    category: "Core",
    chapters: [
      {
        id: "sst_his1",
        name: "History: The Rise of Nationalism in Europe",
        ncertChapterNo: 1,
        topics: [
          { id: "h_1_1", sectionCode: "1.1", title: "French Revolution & Napoleonic Civil Code 1804", isImportantForBoards: true },
          { id: "h_1_2", sectionCode: "1.2", title: "Treaty of Vienna 1815 & Age of Revolutions 1830-1848", isImportantForBoards: true },
          { id: "h_1_3", sectionCode: "1.3", title: "Unification of Germany (Bismarck) & Italy (Cavour, Garibaldi)", isImportantForBoards: true },
          { id: "h_1_4", sectionCode: "1.4", title: "Visualizing the Nation (Marianne & Germania) & Balkan Nationalism", isImportantForBoards: true }
        ]
      },
      {
        id: "sst_his2",
        name: "History: Nationalism in India",
        ncertChapterNo: 2,
        topics: [
          { id: "h_2_1", sectionCode: "2.1", title: "Rowlatt Act, Jallianwala Bagh & Khilafat Non-Cooperation Movement (1920)", isImportantForBoards: true },
          { id: "h_2_2", sectionCode: "2.2", title: "Different Strands in Towns, Countryside & Tribal Rebellions", isImportantForBoards: true },
          { id: "h_2_3", sectionCode: "2.3", title: "Salt March, Civil Disobedience (1930) & Gandhi-Irwin Pact", isImportantForBoards: true },
          { id: "h_2_4", sectionCode: "2.4", title: "Sense of Collective Belonging & Mandatory Map Items", isImportantForBoards: true }
        ]
      },
      {
        id: "sst_civ1",
        name: "Civics: Power Sharing & Federalism",
        ncertChapterNo: 1,
        topics: [
          { id: "c_1_1", sectionCode: "1.1", title: "Belgium Accommodation vs Sri Lanka Majoritarianism", isImportantForBoards: true },
          { id: "c_1_2", sectionCode: "1.2", title: "Prudential vs Moral Reasons for Power Sharing", isImportantForBoards: true },
          { id: "c_2_1", sectionCode: "2.1", title: "Federalism Key Features & Union, State, Concurrent Lists", isImportantForBoards: true },
          { id: "c_2_2", sectionCode: "2.2", title: "Decentralization & 73rd/74th Constitutional Amendments (1992)", isImportantForBoards: true }
        ]
      },
      {
        id: "sst_civ2",
        name: "Civics: Gender, Religion, Caste & Political Parties",
        ncertChapterNo: 3,
        topics: [
          { id: "c_3_1", sectionCode: "3.1", title: "Gender Division, Women's Political Representation & Secularism", isImportantForBoards: true },
          { id: "c_4_1", sectionCode: "4.1", title: "Functions of Political Parties & Criteria for National/State Parties", isImportantForBoards: true },
          { id: "c_5_1", sectionCode: "5.1", title: "Outcomes of Democracy: Accountable, Responsive & Legitimate Govt", isImportantForBoards: true }
        ]
      },
      {
        id: "sst_geo1",
        name: "Geography: Resources, Forests, Water & Agriculture",
        ncertChapterNo: 1,
        topics: [
          { id: "g_1_1", sectionCode: "1.1", title: "Resource Planning, Land Degradation & 6 Major Soil Types", isImportantForBoards: true },
          { id: "g_2_1", sectionCode: "2.1", title: "Reserved, Protected Forests & Community Conservation (JFM)", isImportantForBoards: true },
          { id: "g_3_1", sectionCode: "3.1", title: "Multi-Purpose River Valley Projects & Rainwater Harvesting", isImportantForBoards: true },
          { id: "g_4_1", sectionCode: "4.1", title: "Cropping Seasons (Rabi, Kharif, Zaid) & Major Food/Cash Crops", isImportantForBoards: true }
        ]
      },
      {
        id: "sst_geo2",
        name: "Geography: Minerals, Manufacturing & Lifelines",
        ncertChapterNo: 5,
        topics: [
          { id: "g_5_1", sectionCode: "5.1", title: "Metallic/Non-Metallic Minerals & Conventional/Non-Conventional Energy", isImportantForBoards: true },
          { id: "g_6_1", sectionCode: "6.1", title: "Manufacturing Industries & Industrial Pollution Prevention", isImportantForBoards: true },
          { id: "g_7_1", sectionCode: "7.1", title: "Lifelines: Roadways, Railways, Major Sea Ports & International Airports", isImportantForBoards: true }
        ]
      },
      {
        id: "sst_eco1",
        name: "Economics: Development, Sectors, Money & Globalization",
        ncertChapterNo: 1,
        topics: [
          { id: "e_1_1", sectionCode: "1.1", title: "National Income, Per Capita Income & Human Development Index (HDI)", isImportantForBoards: true },
          { id: "e_2_1", sectionCode: "2.1", title: "Primary, Secondary, Tertiary Sectors & Disguised Unemployment", isImportantForBoards: true },
          { id: "e_3_1", sectionCode: "3.1", title: "Formal vs Informal Credit, RBI Supervision & Self Help Groups (SHGs)", isImportantForBoards: true },
          { id: "e_4_1", sectionCode: "4.1", title: "Globalization, MNCs & Fair Globalization Strategies", isImportantForBoards: true }
        ]
      }
    ]
  },
  {
    id: "it",
    name: "Information Technology (402)",
    color: "from-purple-500 to-violet-600",
    category: "Vocational",
    chapters: [
      {
        id: "it_parta",
        name: "Part-A: Employability Skills",
        ncertChapterNo: 1,
        topics: [
          { id: "it_a_1", sectionCode: "A1", title: "Unit 1: Communication Skills II (Active Listening, Barriers)", isImportantForBoards: true },
          { id: "it_a_2", sectionCode: "A2", title: "Unit 2: Self Management Skills II (Stress Management & SMART Goals)", isImportantForBoards: true },
          { id: "it_a_3", sectionCode: "A3", title: "Unit 3: ICT Skills II (OS, Cyber Safety, Antivirus & File Mgmt)", isImportantForBoards: true },
          { id: "it_a_4", sectionCode: "A4", title: "Unit 4: Entrepreneurial Skills II & Unit 5: Green Skills II", isImportantForBoards: true }
        ]
      },
      {
        id: "it_doc",
        name: "Part-B: Digital Documentation (LibreOffice Writer)",
        ncertChapterNo: 2,
        topics: [
          { id: "it_b_1", sectionCode: "B1.1", title: "Styles & Formatting Window & Creating Templates", isImportantForBoards: true },
          { id: "it_b_2", sectionCode: "B1.2", title: "Inserting & Grouping Images & Table of Contents (TOC)", isImportantForBoards: true },
          { id: "it_b_3", sectionCode: "B1.3", title: "Mail Merge Step-by-Step Implementation", isImportantForBoards: true }
        ]
      },
      {
        id: "it_calc",
        name: "Part-B: Electronic Spreadsheet (LibreOffice Calc)",
        ncertChapterNo: 3,
        topics: [
          { id: "it_b_4", sectionCode: "B2.1", title: "Consolidating Data & Subtotals across Multiple Sheets", isImportantForBoards: true },
          { id: "it_b_5", sectionCode: "B2.2", title: "What-If Scenarios, Goal Seek Analysis & Solver", isImportantForBoards: true },
          { id: "it_b_6", sectionCode: "B2.3", title: "Macros & Linking External Spreadsheet Data", isImportantForBoards: true }
        ]
      },
      {
        id: "it_dbms",
        name: "Part-B: Database Management System (LibreOffice Base)",
        ncertChapterNo: 4,
        topics: [
          { id: "it_b_7", sectionCode: "B3.1", title: "RDBMS Concepts: Tables, Primary Key, Foreign Key & Data Types", isImportantForBoards: true },
          { id: "it_b_8", sectionCode: "B3.2", title: "Creating Tables, Query Design Window & SQL Select Commands", isImportantForBoards: true },
          { id: "it_b_9", sectionCode: "B3.3", title: "Designing Forms & Generating Professional Reports", isImportantForBoards: true }
        ]
      },
      {
        id: "it_web",
        name: "Part-B: Web Applications and Security",
        ncertChapterNo: 5,
        topics: [
          { id: "it_b_10", sectionCode: "B4.1", title: "Accessibility Options, Networking Fundamentals (LAN/WAN/ISP)", isImportantForBoards: true },
          { id: "it_b_11", sectionCode: "B4.2", title: "Web Security, Strong Passwords & Workplace Health Safety", isImportantForBoards: true }
        ]
      }
    ]
  },
  {
    id: "english",
    name: "English Language & Literature (184)",
    color: "from-sky-500 to-blue-600",
    category: "Language",
    chapters: [
      {
        id: "eng_read",
        name: "Section A: Reading Skills",
        ncertChapterNo: 1,
        topics: [
          { id: "eng_r_1", sectionCode: "R1", title: "Discursive Passage Analysis (Inference, Evaluation & Vocabulary)", isImportantForBoards: true },
          { id: "eng_r_2", sectionCode: "R2", title: "Case-Based Factual Passage Analysis (Visual Charts & Trends)", isImportantForBoards: true }
        ]
      },
      {
        id: "eng_write",
        name: "Section B: Writing Skills & Integrated Grammar",
        ncertChapterNo: 2,
        topics: [
          { id: "eng_w_1", sectionCode: "W1", title: "Formal Letter to Editor, Complaint, Enquiry, Order Formats", isImportantForBoards: true },
          { id: "eng_w_2", sectionCode: "W2", title: "Analytical Paragraph Writing (Charts, Tables, Trends - 100-120w)", isImportantForBoards: true },
          { id: "eng_g_1", sectionCode: "G1", title: "Reported Speech: Statements, Commands/Requests, Questions", isImportantForBoards: true },
          { id: "eng_g_2", sectionCode: "G2", title: "Tenses, Modals, Subject-Verb Concord & Determiners", isImportantForBoards: true }
        ]
      },
      {
        id: "eng_ff",
        name: "First Flight: Prose & Poetry (Main Reader)",
        ncertChapterNo: 3,
        topics: [
          { id: "eng_l_1", sectionCode: "FF1", title: "A Letter to God (Lencho) & Nelson Mandela: Long Walk to Freedom", isImportantForBoards: true },
          { id: "eng_l_2", sectionCode: "FF2", title: "Two Stories about Flying (His First Flight, Black Aeroplane)", isImportantForBoards: true },
          { id: "eng_l_3", sectionCode: "FF3", title: "From the Diary of Anne Frank & Glimpses of India (Goa, Coorg, Assam)", isImportantForBoards: true },
          { id: "eng_l_4", sectionCode: "FF4", title: "Mijbil the Otter, Madam Rides the Bus, The Sermon at Benares, The Proposal", isImportantForBoards: true },
          { id: "eng_l_5", sectionCode: "FF5", title: "All 10 Poems: Dust of Snow, Fire and Ice, A Tiger in the Zoo, Amanda, Fog, Custard", isImportantForBoards: true }
        ]
      },
      {
        id: "eng_fp",
        name: "Footprints Without Feet (Supplementary Reader)",
        ncertChapterNo: 4,
        topics: [
          { id: "eng_f_1", sectionCode: "FP1", title: "A Triumph of Surgery (James Herriot, Tricki, Mrs. Pumphrey)", isImportantForBoards: true },
          { id: "eng_f_2", sectionCode: "FP2", title: "The Thief's Story (Hari Singh & Anil - Transformation)", isImportantForBoards: true },
          { id: "eng_f_3", sectionCode: "FP3", title: "The Midnight Visitor (Ausable, Max, Fowler)", isImportantForBoards: true },
          { id: "eng_f_4", sectionCode: "FP4", title: "A Question of Trust (Horace Danby & Lady in Red)", isImportantForBoards: true },
          { id: "eng_f_5", sectionCode: "FP5", title: "Footprints without Feet (Griffin - Lawless Scientist)", isImportantForBoards: true },
          { id: "eng_f_6", sectionCode: "FP6", title: "The Making of a Scientist (Richard Ebright & Butterflies)", isImportantForBoards: true },
          { id: "eng_f_7", sectionCode: "FP7", title: "The Necklace (Matilda Loisel & Mme Forestier)", isImportantForBoards: true },
          { id: "eng_f_8", sectionCode: "FP8", title: "Bholi (Sulekha - Education & Female Empowerment)", isImportantForBoards: true },
          { id: "eng_f_9", sectionCode: "FP9", title: "The Book That Saved the Earth (Martians & Nursery Rhymes)", isImportantForBoards: true }
        ]
      }
    ]
  },
  {
    id: "hindi",
    name: "Hindi Course B (085)",
    color: "from-rose-500 to-pink-600",
    category: "Language",
    chapters: [
      {
        id: "hin_gram",
        name: "व्यावहारिक व्याकरण (Grammar - 16 Marks)",
        ncertChapterNo: 1,
        topics: [
          { id: "hin_g_1", sectionCode: "V1", title: "समास (तत्पुरुष, कर्मधारय, द्विगु, द्वंद्व, बहुव्रीहि, अव्ययीभाव समास पहचान व विग्रह)", isImportantForBoards: true },
          { id: "hin_g_2", sectionCode: "V2", title: "रचना के आधार पर वाक्य रूपांतरण (सरल, संयुक्त, मिश्र वाक्य)", isImportantForBoards: true },
          { id: "hin_g_3", sectionCode: "V3", title: "पदबंध (संज्ञा, सर्वनाम, विशेषण, क्रिया, क्रियाविशेषण पदबंध)", isImportantForBoards: true },
          { id: "hin_g_4", sectionCode: "V4", title: "मुहावरे (पाठ्यपुस्तक आधारित अर्थ एवं सटीक वाक्य प्रयोग)", isImportantForBoards: true }
        ]
      },
      {
        id: "hin_sparsh_gadya",
        name: "स्पर्श भाग २ (गद्य खंड)",
        ncertChapterNo: 2,
        topics: [
          { id: "hin_sg_1", sectionCode: "SG1", title: "बड़े भाई साहब (प्रेमचंद - पढ़ाई का महत्व व अनुभव)", isImportantForBoards: true },
          { id: "hin_sg_2", sectionCode: "SG2", title: "डायरी का एक पन्ना (सीताराम सेकसरिया - स्वतंत्रता आंदोलन कोलकाता)", isImportantForBoards: true },
          { id: "hin_sg_3", sectionCode: "SG3", title: "तँतारा-वामीरो कथा (लीलाधर मंडलोई - अंडमान निकोबार लोककथा)", isImportantForBoards: true },
          { id: "hin_sg_4", sectionCode: "SG4", title: "तीसरी कसम के शिल्पकार शैलेंद्र (प्रहलाद अग्रवाल)", isImportantForBoards: true },
          { id: "hin_sg_5", sectionCode: "SG5", title: "अब कहाँ दूसरे के दुख से दुखी होने वाले (निदा फाज़ली - संवेदनशीलता)", isImportantForBoards: true },
          { id: "hin_sg_6", sectionCode: "SG6", title: "पतझर में टूटी पत्तियाँ (गिन्नी का सोना, झेन की देन)", isImportantForBoards: true },
          { id: "hin_sg_7", sectionCode: "SG7", title: "कारतूस (हबीब तनवीर - वज़ीर अली की जाँबाज़ी)", isImportantForBoards: true }
        ]
      },
      {
        id: "hin_sparsh_padya",
        name: "स्पर्श भाग २ (पद्य खंड)",
        ncertChapterNo: 3,
        topics: [
          { id: "hin_sp_1", sectionCode: "SP1", title: "कबीर – साखी (मीठी वाणी, कस्तूरी कुंडल, बिरह भुवंगम)", isImportantForBoards: true },
          { id: "hin_sp_2", sectionCode: "SP2", title: "मीरा – पद (हरि आप हरो जन री भीर)", isImportantForBoards: true },
          { id: "hin_sp_3", sectionCode: "SP3", title: "मैथिलीशरण गुप्त – मनुष्यता (वही मनुष्य है कि जो मनुष्य के लिए मरे)", isImportantForBoards: true },
          { id: "hin_sp_4", sectionCode: "SP4", title: "सुमित्रानंदन पंत – पर्वत प्रदेश में पावस", isImportantForBoards: true },
          { id: "hin_sp_5", sectionCode: "SP5", title: "वीरेन डंगवाल – तोप (कंपनी बाग की तोप)", isImportantForBoards: true },
          { id: "hin_sp_6", sectionCode: "SP6", title: "कैफ़ी आज़मी – कर चले हम फ़िदा (शहादत का गीत)", isImportantForBoards: true },
          { id: "hin_sp_7", sectionCode: "SP7", title: "रवींद्रनाथ ठाकुर – आत्मत्राण (प्रभु से निर्भयता की प्रार्थना)", isImportantForBoards: true }
        ]
      },
      {
        id: "hin_sanchayan",
        name: "संचयन भाग २ (पूरक पाठ्यपुस्तक)",
        ncertChapterNo: 4,
        topics: [
          { id: "hin_san_1", sectionCode: "SAN1", title: "हरिहर काका (मिथलेश्वर - पारिवारिक स्वार्थ व संपत्ति का लालच)", isImportantForBoards: true },
          { id: "hin_san_2", sectionCode: "SAN2", title: "सपनों के-से दिन (गुरदयाल सिंह - बचपन की यादें व हेडमास्टर शर्मा जी)", isImportantForBoards: true },
          { id: "hin_san_3", sectionCode: "SAN3", title: "टोपी शुक्ला (राही मासूम रज़ा - बाल मनोविज्ञान व सच्ची आत्मीयता)", isImportantForBoards: true }
        ]
      },
      {
        id: "hin_write",
        name: "रचनात्मक लेखन (Writing Skills - 22 Marks)",
        ncertChapterNo: 5,
        topics: [
          { id: "hin_w_1", sectionCode: "HW1", title: "अनुच्छेद लेखन (100-120 शब्द समसामयिक व वैचारिक विषय)", isImportantForBoards: true },
          { id: "hin_w_2", sectionCode: "HW2", title: "औपचारिक पत्र लेखन (संपादक, शिकायती, प्रार्थना पत्र)", isImportantForBoards: true },
          { id: "hin_w_3", sectionCode: "HW3", title: "सूचना लेखन (मानक प्रारूप, 50 शब्द)", isImportantForBoards: true },
          { id: "hin_w_4", sectionCode: "HW4", title: "विज्ञापन लेखन (आकर्षक बॉक्स, स्लोगन, चित्र, 50 शब्द)", isImportantForBoards: true },
          { id: "hin_w_5", sectionCode: "HW5", title: "ई-मेल लेखन / लघुकथा लेखन (100 शब्द)", isImportantForBoards: true }
        ]
      }
    ]
  }
];

// -------------------------------------------------------------
// 3. MASSIVE CHAPTER-WISE FLASHCARD BANK FOR ACTIVE RECALL
// -------------------------------------------------------------
export const CHAPTER_WISE_FLASHCARDS: FlashcardItem[] = [
  // MATHEMATICS FLASHCARDS
  {
    id: "fc_m1",
    subject: "Mathematics",
    chapter: "Introduction to Trigonometry",
    topic: "Pythagorean Identities",
    frontQuestion: "State the three fundamental Pythagorean Trigonometric Identities.",
    backAnswer: "1. sin²θ + cos²θ = 1\n2. 1 + tan²θ = sec²θ  (or sec²θ - tan²θ = 1)\n3. 1 + cot²θ = cosec²θ  (or cosec²θ - cot²θ = 1)",
    hintOrFormula: "Derived directly from Pythagoras theorem (P² + B² = H²)",
    difficulty: "High Yield"
  },
  {
    id: "fc_m2",
    subject: "Mathematics",
    chapter: "Triangles",
    topic: "Basic Proportionality Theorem",
    frontQuestion: "State Basic Proportionality Theorem (Thales Theorem).",
    backAnswer: "If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio: AD/DB = AE/EC.",
    hintOrFormula: "BPT: In △ABC, if DE ∥ BC, then AD/DB = AE/EC",
    difficulty: "Topper Level (100%)"
  },
  {
    id: "fc_m3",
    subject: "Mathematics",
    chapter: "Circles",
    topic: "Tangents from External Point",
    frontQuestion: "What is the relation between the lengths of two tangents drawn from an external point to a circle?",
    backAnswer: "The lengths of tangents drawn from an external point to a circle are equal (Theorem 10.2: PA = PB). They also subtend equal angles at the center and are equally inclined to the line joining the center.",
    hintOrFormula: "PA = PB (Proven via RHS congruence △OAP ≅ △OBP)",
    difficulty: "High Yield"
  },
  {
    id: "fc_m4",
    subject: "Mathematics",
    chapter: "Statistics",
    topic: "Empirical Relationship",
    frontQuestion: "What is the empirical relationship between Mean, Median, and Mode?",
    backAnswer: "3 × Median = Mode + 2 × Mean  (or Mode = 3 Median - 2 Mean)",
    hintOrFormula: "3 Median = Mode + 2 Mean",
    difficulty: "Fundamental"
  },
  {
    id: "fc_m5",
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    topic: "Nature of Roots",
    frontQuestion: "State the conditions for the nature of roots of ax² + bx + c = 0 based on Discriminant D.",
    backAnswer: "• If D = b² - 4ac > 0: Two distinct real roots.\n• If D = 0: Two equal real roots (-b/2a, -b/2a).\n• If D < 0: No real roots.",
    hintOrFormula: "D = b² - 4ac",
    difficulty: "High Yield"
  },

  // SCIENCE FLASHCARDS
  {
    id: "fc_s1",
    subject: "Science",
    chapter: "Acids, Bases and Salts",
    topic: "Chlor-Alkali Process",
    frontQuestion: "In the Chlor-Alkali process (electrolysis of brine), which products are formed at the Anode, Cathode, and in solution?",
    backAnswer: "• At Anode: Chlorine gas (Cl₂)\n• At Cathode: Hydrogen gas (H₂)\n• Near Cathode in Solution: Sodium Hydroxide (NaOH)",
    hintOrFormula: "2NaCl + 2H₂O ──Electricity──> 2NaOH + Cl₂ + H₂",
    difficulty: "Topper Level (100%)"
  },
  {
    id: "fc_s2",
    subject: "Science",
    chapter: "Electricity",
    topic: "Ohm's Law & Factors affecting Resistance",
    frontQuestion: "State factors on which the resistance of a cylindrical conductor depends.",
    backAnswer: "1. Length of conductor (R ∝ l)\n2. Area of cross-section (R ∝ 1/A)\n3. Nature of material (Resistivity ρ)\n4. Temperature (increases with temp for metals)\nFormula: R = ρ (l / A)",
    hintOrFormula: "R = ρ (l / A)",
    difficulty: "High Yield"
  },
  {
    id: "fc_s3",
    subject: "Science",
    chapter: "Life Processes",
    topic: "Human Respiration",
    frontQuestion: "What is the end product of anaerobic breakdown of glucose in human muscle cells during heavy exercise?",
    backAnswer: "Lactic Acid + Energy (3-carbon molecule). The accumulation of lactic acid causes muscle cramps.",
    hintOrFormula: "Glucose ──> Pyruvate ──Lack of O₂ in muscles──> Lactic Acid + Energy",
    difficulty: "High Yield"
  },
  {
    id: "fc_s4",
    subject: "Science",
    chapter: "Chemical Reactions",
    topic: "Decomposition Color Changes",
    frontQuestion: "What color change is observed when green Ferrous Sulphate crystals are heated?",
    backAnswer: "Pale green FeSO₄·7H₂O crystals lose water, turning white, and then decompose to Reddish-Brown Ferric Oxide (Fe₂O₃) with pungent smell of burning sulphur (SO₂ + SO₃).",
    hintOrFormula: "2FeSO₄(s) ──Δ──> Fe₂O₃(s) + SO₂(g) + SO₃(g)",
    difficulty: "Topper Level (100%)"
  },
  {
    id: "fc_s5",
    subject: "Science",
    chapter: "Magnetic Effects of Electric Current",
    topic: "Fleming's Left-Hand Rule",
    frontQuestion: "State Fleming's Left-Hand Rule and what each finger represents.",
    backAnswer: "Stretch Thumb, Forefinger, and Middle finger mutually perpendicular:\n• Forefinger = Direction of Magnetic Field (B)\n• Middle finger = Direction of Current (I)\n• Thumb = Direction of Force / Motion (F) on the conductor.",
    hintOrFormula: "FBI: Force (Thumb), Field (Forefinger), Current (Middle)",
    difficulty: "High Yield"
  },

  // SOCIAL SCIENCE FLASHCARDS
  {
    id: "fc_sst1",
    subject: "Social Science",
    chapter: "Nationalism in Europe",
    topic: "Treaty of Vienna 1815",
    frontQuestion: "Who hosted the Congress of Vienna in 1815, and what was its primary objective?",
    backAnswer: "Hosted by Austrian Chancellor Duke Metternich. Objective: To undo the changes brought by Napoleonic wars, restore Bourbon monarchy in France, and establish a conservative order in Europe.",
    hintOrFormula: "Vienna 1815: Metternich, Bourbon restoration, Balance of power",
    difficulty: "High Yield"
  },
  {
    id: "fc_sst2",
    subject: "Social Science",
    chapter: "Nationalism in India",
    topic: "Salt March & Civil Disobedience",
    frontQuestion: "When did Mahatma Gandhi start the Dandi Salt March and from where to where?",
    backAnswer: "Started on 12 March 1930 with 78 trusted volunteers from Sabarmati Ashram to coastal town of Dandi (240 miles). On 6 April 1930, Gandhiji broke the salt law by boiling seawater, marking the launch of the Civil Disobedience Movement.",
    hintOrFormula: "12 March – 6 April 1930: Sabarmati to Dandi (240 miles)",
    difficulty: "High Yield"
  },
  {
    id: "fc_sst3",
    subject: "Social Science",
    chapter: "Power Sharing",
    topic: "Belgium Model",
    frontQuestion: "State two key elements of the Belgian Model of power sharing.",
    backAnswer: "1. Equal number of Dutch and French-speaking ministers in Central Government.\n2. State governments are not subordinate to the central government.\n3. Equal representation in Brussels Government.\n4. A third 'Community Government' elected by people of one language group to handle cultural and educational affairs.",
    hintOrFormula: "Equal ministers, Brussels parity, Community Govt",
    difficulty: "High Yield"
  },
  {
    id: "fc_sst4",
    subject: "Social Science",
    chapter: "Money and Credit",
    topic: "Formal vs Informal Credit",
    frontQuestion: "Why is the formal sector of credit preferred over the informal sector?",
    backAnswer: "1. Formal sector (Banks/Cooperatives) is supervised by RBI; charges reasonable interest rates.\n2. Informal sector (Moneylenders/Traders) charges exorbitant interest, uses unfair means, and leads to debt traps.",
    hintOrFormula: "Formal = RBI supervision, low interest; Informal = High interest, debt trap",
    difficulty: "High Yield"
  },

  // HINDI COURSE B FLASHCARDS
  {
    id: "fc_h1",
    subject: "Hindi",
    chapter: "व्यावहारिक व्याकरण",
    topic: "समास पहचान",
    frontQuestion: "कर्मधारय समास और बहुव्रीहि समास में क्या अंतर है? उदाहरण सहित बताइए।",
    backAnswer: "• कर्मधारय समास में पहला पद विशेषण और दूसरा विशेष्य (या उपमान-उपमेय) होता है (उदा. 'पीतांबर' = पीला है जो अंबर)।\n• बहुव्रीहि समास में दोनों पद मिलकर किसी तीसरे अन्य पद की ओर संकेत करते हैं (उदा. 'पीतांबर' = पीला है अंबर जिसका अर्थात् श्रीकृष्ण)।",
    hintOrFormula: "कर्मधारय = विशेषण-विशेष्य; बहुव्रीहि = तीसरा पद प्रधान",
    difficulty: "High Yield"
  },
  {
    id: "fc_h2",
    subject: "Hindi",
    chapter: "स्पर्श भाग २ (गद्य खंड)",
    topic: "बड़े भाई साहब",
    frontQuestion: "'बड़े भाई साहब' पाठ में बड़े भाई साहब ने छोटे भाई को परीक्षा में अव्वल आने पर भी घमंड न करने की क्या सीख दी?",
    backAnswer: "उन्होंने रावण, चक्रवर्ती राजाओं और शाहेरुम के उदाहरण दिए कि अभिमान करने से बड़े-बड़े शूरवीरों का पतन हो गया। उन्होंने समझाया कि इम्तिहान पास कर लेना अलग बात है और जीवन की वास्तविक समझ पाना अलग बात है।",
    hintOrFormula: "रावण का उदाहरण, अनुभव का महत्व",
    difficulty: "High Yield"
  },

  // ENGLISH FLASHCARDS
  {
    id: "fc_e1",
    subject: "English",
    chapter: "Footprints without Feet",
    topic: "A Triumph of Surgery",
    frontQuestion: "What actual treatment did Dr. James Herriot give to cure Tricki in 'A Triumph of Surgery'?",
    backAnswer: "Dr. Herriot gave Tricki no medical treatment or medicine. He gave him plenty of water for 2 days, cut down his rich food intake, and let him run and play with the other pack of dogs, restoring his natural vigor.",
    hintOrFormula: "Dietary discipline + exercise, zero medicine",
    difficulty: "High Yield"
  },
  {
    id: "fc_e2",
    subject: "English",
    chapter: "First Flight",
    topic: "Nelson Mandela",
    frontQuestion: "According to Nelson Mandela, what are a man's 'twin obligations' in life?",
    backAnswer: "1. Obligation to his family, parents, wife, and children.\n2. Obligation to his people, his community, and his country.",
    hintOrFormula: "Twin obligations: Family vs Community/Country",
    difficulty: "High Yield"
  }
];

// -------------------------------------------------------------
// 4. HARD BOARD LEVEL QUESTION BANK
// -------------------------------------------------------------
export const BOARD_LEVEL_QUESTIONS: BoardQuestion[] = [
  {
    id: "bq_1",
    type: "HOTS (RD/RS Level)",
    subject: "Mathematics",
    chapter: "Introduction to Trigonometry",
    topic: "Trigonometric Identities",
    difficulty: "Topper Level (100%)",
    question: "Prove that: (sin θ - cos θ + 1) / (sin θ + cos θ - 1) = 1 / (sec θ - tan θ), using identity sec²θ = 1 + tan²θ.",
    correctAnswer: "LHS = RHS. Proved by dividing by cos θ and substituting 1 = sec²θ - tan²θ.",
    explanation: "1. Divide numerator & denominator by cos θ: gives (tan θ + sec θ - 1) / (tan θ - sec θ + 1).\n2. Replace 1 in numerator with (sec²θ - tan²θ) = (sec θ - tan θ)(sec θ + tan θ).\n3. Factor out (sec θ + tan θ) to cancel identical denominator terms.\n4. Result simplifies directly to 1 / (sec θ - tan θ).",
    markingSchemeSteps: [
      "1 Mark: Correct division by cos θ to express in tan θ and sec θ.",
      "1.5 Marks: Factorization of 1 into (sec θ - tan θ)(sec θ + tan θ).",
      "1.5 Marks: Cancelling common denominator factor to complete proof."
    ]
  },
  {
    id: "bq_2",
    type: "Case Study",
    subject: "Mathematics",
    chapter: "Some Applications of Trigonometry",
    topic: "Heights & Distances",
    difficulty: "Hard",
    caseContext: "A drone is flying above a horizontal field. A student observes the drone at 60° elevation. After flying horizontally for 30 seconds at a constant altitude of 1500√3 meters away from the student, the angle of elevation reduces to 30°.",
    question: "1. Draw the geometric diagram.\n2. Find initial horizontal distance.\n3. Find total distance covered.\n4. Calculate speed of drone in km/h.",
    correctAnswer: "Initial distance = 1500 m | Distance covered = 3000 m | Speed = 360 km/h.",
    explanation: "• In △1: tan 60° = 1500√3 / x ⇒ x = 1500 m.\n• In △2: tan 30° = 1500√3 / (x + d) ⇒ x + d = 4500 m ⇒ d = 3000 m.\n• Speed = 3000 m / 30 s = 100 m/s = 100 × (18/5) = 360 km/h.",
    markingSchemeSteps: [
      "1 Mark: Correct labeled geometric diagram.",
      "1 Mark: Calculating initial base distance x = 1500 m.",
      "1 Mark: Finding distance covered d = 3000 m.",
      "1 Mark: Converting speed to 360 km/h."
    ]
  },
  {
    id: "bq_3",
    type: "Competency Based",
    subject: "Science",
    chapter: "Electricity",
    topic: "Equivalent Resistance & Power",
    difficulty: "Topper Level (100%)",
    question: "An electric heater rated 220V, 1000W is operated for 2 hours daily in the month of September. Calculate (a) its resistance, (b) total electrical energy consumed in kWh, (c) cost at ₹6.00 per unit.",
    correctAnswer: "(a) R = 48.4 Ω | (b) Energy = 60 kWh | (c) Cost = ₹360.00",
    explanation: "• Resistance: R = V² / P = (220)² / 1000 = 48400 / 1000 = 48.4 Ω.\n• Daily energy = 1 kW × 2 h = 2 kWh.\n• September has 30 days ⇒ Total Energy = 2 × 30 = 60 kWh (units).\n• Total Cost = 60 × ₹6 = ₹360.00.",
    markingSchemeSteps: [
      "1 Mark: Calculating resistance R = 48.4 Ω using P = V²/R.",
      "1.5 Marks: Calculating monthly energy consumed = 60 kWh.",
      "0.5 Mark: Total cost calculation = ₹360.00."
    ]
  }
];

// -------------------------------------------------------------
// 5. INTERACTIVE SIMULATIONS (PhET & GeoGebra)
// -------------------------------------------------------------
export const INTERACTIVE_SIMULATIONS: InteractiveSimulation[] = [
  {
    id: "sim_1",
    title: "Ohm's Law & Circuit Construction Kit",
    subject: "Science",
    topic: "Electricity (Sept 16 Exam)",
    provider: "PhET Interactive Lab",
    url: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
    thumbnailColor: "from-blue-600 to-cyan-500",
    description: "Construct live series and parallel circuits with ammeters and voltmeters. Verify V = IR dynamically.",
    keyLearningObjectives: [
      "Calculate equivalent resistance of series (Rs) and parallel (Rp) circuits.",
      "Verify Ohm's law V ∝ I graphically.",
      "Observe short circuits and safety fuse triggers."
    ]
  },
  {
    id: "sim_2",
    title: "Dynamic Trigonometry & Unit Circle Lab",
    subject: "Mathematics",
    topic: "Trigonometry (Sept 14 Exam)",
    provider: "GeoGebra 3D Math",
    url: "https://www.geogebra.org/m/JMMqnjBE",
    thumbnailColor: "from-purple-600 to-indigo-500",
    description: "Drag angles from 0° to 90° to visualize sin θ, cos θ, and tan θ as geometric lengths on the coordinate plane.",
    keyLearningObjectives: [
      "Understand why sin²θ + cos²θ = 1 via Pythagorean lengths.",
      "Memorize standard angle values (30°, 45°, 60°) intuitively.",
      "Visualize angles of elevation and depression for heights & distances."
    ]
  },
  {
    id: "sim_3",
    title: "pH Scale & Acid-Base Solutions Lab",
    subject: "Science",
    topic: "Acids, Bases & Salts (Sept 16 Exam)",
    provider: "PhET Interactive Lab",
    url: "https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_en.html",
    thumbnailColor: "from-emerald-600 to-teal-500",
    description: "Test everyday substances with digital pH probes and universal indicator color scales.",
    keyLearningObjectives: [
      "Relate hydronium ion concentration [H₃O⁺] to pH values 0 to 14.",
      "Observe the effect of dilution on acid and base strengths.",
      "Understand neutralization reactions."
    ]
  },
  {
    id: "sim_4",
    title: "Faraday's Electromagnetic Induction & Solenoid Lab",
    subject: "Science",
    topic: "Magnetic Effects (Sept 16 Exam)",
    provider: "PhET Interactive Lab",
    url: "https://phet.colorado.edu/sims/html/faradays-electromagnetic-lab/latest/faradays-electromagnetic-lab_en.html",
    thumbnailColor: "from-amber-600 to-yellow-500",
    description: "Move bar magnets through copper wire coils to generate magnetic flux lines and light up galvanometer bulbs.",
    keyLearningObjectives: [
      "Visualize magnetic field line patterns around bar magnets and solenoids.",
      "Apply Fleming's Left-Hand Rule for magnetic force.",
      "Understand domestic electric grounding and safety circuits."
    ]
  }
];

export const PRE_POPULATED_FORMULAS: FormulaItem[] = [
  { id: "f1", subject: "Mathematics", topic: "Trigonometric Identity", formula: "sin²θ + cos²θ = 1, \\quad 1 + tan²θ = sec²θ, \\quad 1 + cot²θ = cosec²θ", description: "Fundamental Pythagorean identities for all identity proofs." },
  { id: "f2", subject: "Mathematics", topic: "Statistics Mode & Median", formula: "\\text{Mode} = l + \\left(\\frac{f_1-f_0}{2f_1-f_0-f_2}\\right)h, \\quad \\text{Median} = l + \\left(\\frac{N/2-cf}{f}\\right)h", description: "Standard grouped data formulas for 3-mark and 5-mark board statistics questions." },
  { id: "f3", subject: "Science", topic: "Ohm's Law & Electric Power", formula: "V = IR, \\quad P = VI = I^2R = \\frac{V^2}{R}, \\quad H = I^2Rt", description: "Relationship between voltage, current, resistance, heat energy, and electric power." }
];
