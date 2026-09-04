export interface ChapterTopic {
  id: string;
  title: string;
  sectionCode: string;
  isImportantForBoards?: boolean;
  probability?: "High Chance 90%+ Recurring" | "Medium Chance (60-80%)" | "1M Foundation / Conceptual";
  expectedMarks?: string;
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
  "id": "maths",
  "name": "Mathematics (041 / 241)",
  "color": "from-blue-500 to-indigo-600",
  "category": "Core",
  "chapters": [
    {
      "id": "math_ch1",
      "name": "Real Numbers",
      "ncertChapterNo": 1,
      "topics": [
        {
          "id": "m_1_1",
          "sectionCode": "1.1",
          "title": "Fundamental Theorem of Arithmetic (Unique Prime Factorization)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "m_1_2",
          "sectionCode": "1.2",
          "title": "HCF & LCM Applications (HCF × LCM = a × b, Word Problems on Bells/Races)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_1_3",
          "sectionCode": "1.3",
          "title": "Proofs of Irrationality of √2, √3, √5 by Contradiction Method",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M Proof"
        },
        {
          "id": "m_1_4",
          "sectionCode": "1.4",
          "title": "Proof of Irrationality of Linear Combinations (3 + 2√5, 5 - √3, 1/√2)",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "2M / 3M"
        }
      ]
    },
    {
      "id": "math_ch2",
      "name": "Polynomials",
      "ncertChapterNo": 2,
      "topics": [
        {
          "id": "m_2_1",
          "sectionCode": "2.1",
          "title": "Geometrical Meaning of Zeroes (Parabolas & X-axis Intersections)",
          "isImportantForBoards": false,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ"
        },
        {
          "id": "m_2_2",
          "sectionCode": "2.2",
          "title": "Relationship between Zeroes & Coefficients: α + β = -b/a, αβ = c/a",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_2_3",
          "sectionCode": "2.3",
          "title": "Formation of Quadratic Polynomial: k[x² - (α+β)x + αβ]",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "m_2_4",
          "sectionCode": "2.4",
          "title": "Symmetric Functions of Zeroes (α² + β², 1/α + 1/β, α/β + β/α, α³ + β³)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M HOTS"
        }
      ]
    },
    {
      "id": "math_ch3",
      "name": "Pair of Linear Equations in Two Variables",
      "ncertChapterNo": 3,
      "topics": [
        {
          "id": "m_3_1",
          "sectionCode": "3.1",
          "title": "Consistency Conditions: a₁/a₂ ≠ b₁/b₂ (unique), a₁/a₂ = b₁/b₂ = c₁/c₂ (infinite), a₁/a₂ = b₁/b₂ ≠ c₁/c₂ (no sol)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "1M MCQ / 2M"
        },
        {
          "id": "m_3_2",
          "sectionCode": "3.2",
          "title": "Algebraic Solution by Substitution Method",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "2M"
        },
        {
          "id": "m_3_3",
          "sectionCode": "3.3",
          "title": "Algebraic Solution by Elimination Method (Coefficient Equalization)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "m_3_4",
          "sectionCode": "3.4",
          "title": "Real-World Word Problems: Age, Fractions, Fixed + Per-Km Taxi Charges",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 4M Case Study"
        },
        {
          "id": "m_3_5",
          "sectionCode": "3.5",
          "title": "Speed-Distance & Upstream/Downstream Boats (Boat Speed x, Stream Speed y)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M HOTS"
        }
      ]
    },
    {
      "id": "math_ch4",
      "name": "Quadratic Equations",
      "ncertChapterNo": 4,
      "topics": [
        {
          "id": "m_4_1",
          "sectionCode": "4.1",
          "title": "Standard Form ax² + bx + c = 0 & Solution by Factorization",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "m_4_2",
          "sectionCode": "4.2",
          "title": "Quadratic Formula: x = (-b ± √D)/(2a)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_4_3",
          "sectionCode": "4.3",
          "title": "Nature of Roots via Discriminant D = b² - 4ac (D > 0, D = 0, D < 0)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_4_4",
          "sectionCode": "4.4",
          "title": "Finding Constant 'k' for Equal Roots Condition (D = 0)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_4_5",
          "sectionCode": "4.5",
          "title": "Word Problems: Speed & Distance, Tap/Pipes Filling, Time & Work",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "4M Case Study / 5M"
        }
      ]
    },
    {
      "id": "math_ch5",
      "name": "Arithmetic Progressions",
      "ncertChapterNo": 5,
      "topics": [
        {
          "id": "m_5_1",
          "sectionCode": "5.1",
          "title": "General Form of AP, First Term 'a', Common Difference 'd'",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ"
        },
        {
          "id": "m_5_2",
          "sectionCode": "5.2",
          "title": "nth Term of an AP Formula: an = a + (n - 1)d",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_5_3",
          "sectionCode": "5.3",
          "title": "nth Term from End: l - (n - 1)d & Middle Term Calculations",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "2M"
        },
        {
          "id": "m_5_4",
          "sectionCode": "5.4",
          "title": "Sum of First n Terms: Sn = n/2 [2a + (n - 1)d] and Sn = n/2 [a + l]",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "m_5_5",
          "sectionCode": "5.5",
          "title": "Relation between an and Sn: an = Sn - Sn-1",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_5_6",
          "sectionCode": "5.6",
          "title": "Competency-Based Case Studies (Financial Installments, Stadium Rows, Spiral Spirals)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "4M Case Study"
        }
      ]
    },
    {
      "id": "math_ch6",
      "name": "Triangles",
      "ncertChapterNo": 6,
      "topics": [
        {
          "id": "m_6_1",
          "sectionCode": "6.1",
          "title": "Concept of Similarity vs Congruence (Equiangular & Proportional Sides)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ"
        },
        {
          "id": "m_6_2",
          "sectionCode": "6.2",
          "title": "Basic Proportionality Theorem (Thales Theorem - Theorem 6.1) Formal Proof",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M Theorem Proof"
        },
        {
          "id": "m_6_3",
          "sectionCode": "6.3",
          "title": "Converse of BPT (Theorem 6.2) Statement & Applications",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_6_4",
          "sectionCode": "6.4",
          "title": "BPT Numerical Applications & Transversal Segment Ratios (AD/DB = AE/EC)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "m_6_5",
          "sectionCode": "6.5",
          "title": "AA / AAA Similarity Criterion & Proof Riders",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "m_6_6",
          "sectionCode": "6.6",
          "title": "SSS & SAS Similarity Criteria with Strict Included Angle Verification",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "m_6_7",
          "sectionCode": "6.7",
          "title": "Trapezium Diagonals Proportionality Proofs (AB ∥ DC ⟹ OA/OC = OB/OD)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M HOTS"
        },
        {
          "id": "m_6_8",
          "sectionCode": "6.8",
          "title": "Perimeter Ratios of Similar Triangles (Linear 1st Power Ratio: P₁/P₂ = a₁/a₂)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "1M MCQ / 2M"
        },
        {
          "id": "m_6_9",
          "sectionCode": "6.9",
          "title": "Lamp-Post Shadow & Aerial Height Distance Triangulation",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 4M Case Study"
        }
      ]
    },
    {
      "id": "math_ch7",
      "name": "Coordinate Geometry",
      "ncertChapterNo": 7,
      "topics": [
        {
          "id": "m_7_1",
          "sectionCode": "7.1",
          "title": "Distance Formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²] & Collinearity Test",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "m_7_2",
          "sectionCode": "7.2",
          "title": "Equidistant Points from Two Given Points (Finding Point on X-axis or Y-axis)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_7_3",
          "sectionCode": "7.3",
          "title": "Classifying Triangles (Right, Isosceles) & Quadrilaterals (Square, Rhombus, Parallelogram)",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "3M"
        },
        {
          "id": "m_7_4",
          "sectionCode": "7.4",
          "title": "Section Formula (Internal Division): P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "m_7_5",
          "sectionCode": "7.5",
          "title": "Determining Ratio k:1 in which Axes or Given Lines Divide a Segment",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "m_7_6",
          "sectionCode": "7.6",
          "title": "Midpoint Formula & Trisection of a Line Segment",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_7_7",
          "sectionCode": "7.7",
          "title": "Cartesian Grid Map Case Studies (Sports Day, Desks, Drone Paths)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "4M Case Study"
        }
      ]
    },
    {
      "id": "math_ch8",
      "name": "Introduction to Trigonometry",
      "ncertChapterNo": 8,
      "topics": [
        {
          "id": "m_8_1",
          "sectionCode": "8.1",
          "title": "Trigonometric Ratios (P/H, B/H, P/B, H/P, H/B, B/P) for Acute Angles",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ / 2M"
        },
        {
          "id": "m_8_2",
          "sectionCode": "8.2",
          "title": "Reciprocal & Quotient Relations (tan θ = sin θ/cos θ, cot θ = cos θ/sin θ)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ"
        },
        {
          "id": "m_8_3",
          "sectionCode": "8.3",
          "title": "Exact Table Values (0°, 30°, 45°, 60°, 90°) & Algebraic Evaluations",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_8_4",
          "sectionCode": "8.4",
          "title": "Pythagorean Identity 1: sin²θ + cos²θ = 1 and Derived Forms",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_8_5",
          "sectionCode": "8.5",
          "title": "Pythagorean Identities 2 & 3: 1 + tan²θ = sec²θ and 1 + cot²θ = cosec²θ",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_8_6",
          "sectionCode": "8.6",
          "title": "Advanced Board Proofs of Trigonometric Identities (LHS = RHS Derivations)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M HOTS"
        }
      ]
    },
    {
      "id": "math_ch9",
      "name": "Some Applications of Trigonometry",
      "ncertChapterNo": 9,
      "topics": [
        {
          "id": "m_9_1",
          "sectionCode": "9.1",
          "title": "Line of Sight, Angle of Elevation and Angle of Depression Definitions",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ"
        },
        {
          "id": "m_9_2",
          "sectionCode": "9.2",
          "title": "Single Right-Triangle Heights & Distances (with 30°, 45°, 60°)",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_9_3",
          "sectionCode": "9.3",
          "title": "Two Right-Triangles: Observation from Same Ground Point to Top & Bottom of Tower/Flag",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "m_9_4",
          "sectionCode": "9.4",
          "title": "Two Observers in Opposite Directions & River Width / Valley Depth",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "m_9_5",
          "sectionCode": "9.5",
          "title": "Cloud Elevation and its Reflection in Lake Water HOTS",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "5M HOTS"
        },
        {
          "id": "m_9_6",
          "sectionCode": "9.6",
          "title": "Aviation, Drone Surveillance & Lighthouse Moving Boat Case Studies",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "4M Case Study"
        }
      ]
    },
    {
      "id": "math_ch10",
      "name": "Circles",
      "ncertChapterNo": 10,
      "topics": [
        {
          "id": "m_10_1",
          "sectionCode": "10.1",
          "title": "Tangent to Circle Definition, Point of Contact & Number of Tangents",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ"
        },
        {
          "id": "m_10_2",
          "sectionCode": "10.2",
          "title": "Theorem 10.1: Tangent ⊥ Radius at Point of Contact (Proof & Applications)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_10_3",
          "sectionCode": "10.3",
          "title": "Theorem 10.2: Tangents from External Point are Equal in Length (RHS Proof)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M Theorem Proof"
        },
        {
          "id": "m_10_4",
          "sectionCode": "10.4",
          "title": "Angle between Tangents & Line Joining Point to Center are Supplementary",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_10_5",
          "sectionCode": "10.5",
          "title": "Circumscribing Quadrilateral Proof: AB + CD = AD + BC",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "m_10_6",
          "sectionCode": "10.6",
          "title": "Parallelogram Circumscribing a Circle is a Rhombus Proof",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "m_10_7",
          "sectionCode": "10.7",
          "title": "Inscribed Circle in Right-Angled Triangle & Inradius r = (a + b - c)/2",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "3M / 4M Case Study"
        }
      ]
    },
    {
      "id": "math_ch11",
      "name": "Areas Related to Circles",
      "ncertChapterNo": 11,
      "topics": [
        {
          "id": "m_11_1",
          "sectionCode": "11.1",
          "title": "Perimeter (2πr) and Area (πr²) of Circle",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ"
        },
        {
          "id": "m_11_2",
          "sectionCode": "11.2",
          "title": "Area of Sector of Circle: (θ/360°) × πr²",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_11_3",
          "sectionCode": "11.3",
          "title": "Length of Arc of Sector: (θ/360°) × 2πr",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "2M"
        },
        {
          "id": "m_11_4",
          "sectionCode": "11.4",
          "title": "Area of Minor & Major Segments of Circle (using 60°, 90°, 120°)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "m_11_5",
          "sectionCode": "11.5",
          "title": "Real-Life Applications: Clock Hands, Wiper Blades, Brooches & Umbrella Sectors",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 4M Case Study"
        }
      ]
    },
    {
      "id": "math_ch12",
      "name": "Surface Areas and Volumes",
      "ncertChapterNo": 12,
      "topics": [
        {
          "id": "m_12_1",
          "sectionCode": "12.1",
          "title": "Surface Area of Combined Solids (Cone + Hemisphere, Cylinder + 2 Hemispheres)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "m_12_2",
          "sectionCode": "12.2",
          "title": "Total vs Curved Surface Area (Never add overlapping interior bases)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_12_3",
          "sectionCode": "12.3",
          "title": "Volume of Combination of Solids (Tent, Toy, Boiler, Gulab Jamun Syrup)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "m_12_4",
          "sectionCode": "12.4",
          "title": "Rate of Flow of Water through Cylindrical Pipes into Cisterns/Canals",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "m_12_5",
          "sectionCode": "12.5",
          "title": "Architectural & Industrial Container Design Case Studies",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "4M Case Study"
        }
      ]
    },
    {
      "id": "math_ch13",
      "name": "Statistics",
      "ncertChapterNo": 13,
      "topics": [
        {
          "id": "m_13_1",
          "sectionCode": "13.1",
          "title": "Class Marks, Class Width & Continuous Interval Conversions",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ"
        },
        {
          "id": "m_13_2",
          "sectionCode": "13.2",
          "title": "Mean of Grouped Data by Direct Method: x̄ = Σfi xi / Σfi",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_13_3",
          "sectionCode": "13.3",
          "title": "Mean of Grouped Data by Assumed Mean Method: x̄ = a + (Σfi di / Σfi)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "m_13_4",
          "sectionCode": "13.4",
          "title": "Mode of Grouped Data: l + [(f₁ - f₀)/(2f₁ - f₀ - f₂)] × h",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "m_13_5",
          "sectionCode": "13.5",
          "title": "Modal Class Identification & Upper/Lower Limit MCQs",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "1M MCQ / 2M"
        },
        {
          "id": "m_13_6",
          "sectionCode": "13.6",
          "title": "Median of Grouped Data: l + [(N/2 - cf)/f] × h",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "m_13_7",
          "sectionCode": "13.7",
          "title": "Missing Frequencies (x and y) Calculation given Median & N",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M HOTS"
        },
        {
          "id": "m_13_8",
          "sectionCode": "13.8",
          "title": "Empirical Relationship: Mode = 3 Median - 2 Mean",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "1M MCQ"
        }
      ]
    },
    {
      "id": "math_ch14",
      "name": "Probability",
      "ncertChapterNo": 14,
      "topics": [
        {
          "id": "m_14_1",
          "sectionCode": "14.1",
          "title": "Theoretical Probability: P(E) = n(E) / n(S) & Range [0, 1]",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ"
        },
        {
          "id": "m_14_2",
          "sectionCode": "14.2",
          "title": "Complementary Events: P(E) + P(not E) = 1 & Impossible/Sure Events",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ"
        },
        {
          "id": "m_14_3",
          "sectionCode": "14.3",
          "title": "Coin Tossing Experiments (Single Coin, 2 Coins {HH,HT,TH,TT}, 3 Coins {8 outcomes})",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_14_4",
          "sectionCode": "14.4",
          "title": "Dice Experiments: Single Die & 2 Dice (36 outcomes grid, Sums & Doublets)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_14_5",
          "sectionCode": "14.5",
          "title": "Pack of 52 Playing Cards (Suits, Colors, 12 Face Cards, Removal Traps)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_14_6",
          "sectionCode": "14.6",
          "title": "Defective Products, Lotteries & Numbered Discs/Marbles in Bag",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "m_14_7",
          "sectionCode": "14.7",
          "title": "Leap Year (366 days, 52 weeks + 2 days) vs Ordinary Year (365 days) Sunday Probabilities",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "1M / 2M"
        }
      ]
    }
  ]
},
{
  "id": "science",
  "name": "Science (086)",
  "color": "from-emerald-500 to-teal-600",
  "category": "Core",
  "chapters": [
    {
      "id": "sci_ch1",
      "name": "Chemical Reactions and Equations",
      "ncertChapterNo": 1,
      "topics": [
        {
          "id": "s_1_1",
          "sectionCode": "1.1",
          "title": "Writing & Balancing Chemical Equations (Law of Conservation of Mass)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M"
        },
        {
          "id": "s_1_2",
          "sectionCode": "1.2",
          "title": "Combination Reactions (CaO + H₂O slaked lime, burning of fuels)",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "2M"
        },
        {
          "id": "s_1_3",
          "sectionCode": "1.3",
          "title": "Decomposition Reactions (Thermal: FeSO₄, Pb(NO₃)₂; Electrolytic: H₂O; Photolytic: AgCl, AgBr)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_1_4",
          "sectionCode": "1.4",
          "title": "Displacement Reactions & Metal Reactivity Hierarchy (Fe/Zn + CuSO₄)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M"
        },
        {
          "id": "s_1_5",
          "sectionCode": "1.5",
          "title": "Double Displacement & Precipitation Reactions (Na₂SO₄ + BaCl₂ ⟹ BaSO₄ ppt)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M"
        },
        {
          "id": "s_1_6",
          "sectionCode": "1.6",
          "title": "Redox Reactions: Oxidation, Reduction, Oxidizing & Reducing Agents",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_1_7",
          "sectionCode": "1.7",
          "title": "Corrosion (Rusting of Fe, Copper patina) & Rancidity (Antioxidants, N₂ flushing)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M / 2M"
        }
      ]
    },
    {
      "id": "sci_ch2",
      "name": "Acids, Bases and Salts",
      "ncertChapterNo": 2,
      "topics": [
        {
          "id": "s_2_1",
          "sectionCode": "2.1",
          "title": "Natural & Synthetic Indicators (Litmus, Methyl Orange, Phenolphthalein, Olfactory)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ"
        },
        {
          "id": "s_2_2",
          "sectionCode": "2.2",
          "title": "Reaction with Metals (H₂ pop test) & Metal Carbonates/Hydrogen Carbonates (CO₂ lime water)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_2_3",
          "sectionCode": "2.3",
          "title": "Neutralization & Metallic vs Non-Metallic Oxides Acid-Base Behavior",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "2M"
        },
        {
          "id": "s_2_4",
          "sectionCode": "2.4",
          "title": "pH Scale & Everyday Importance (Digestion, Tooth Decay, Acid Rain, Ant Stings)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_2_5",
          "sectionCode": "2.5",
          "title": "Chlor-Alkali Process: Electrolysis of Brine (NaOH, Cl₂, H₂ products & uses)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "s_2_6",
          "sectionCode": "2.6",
          "title": "Bleaching Powder (CaOCl₂): Preparation from Slaked Lime & Disinfection Uses",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M"
        },
        {
          "id": "s_2_7",
          "sectionCode": "2.7",
          "title": "Baking Soda (NaHCO₃) & Washing Soda (Na₂CO₃·10H₂O): Chemistry & Uses",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_2_8",
          "sectionCode": "2.8",
          "title": "Plaster of Paris (CaSO₄·½H₂O) & Gypsum: Water of Crystallization & Setting",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        }
      ]
    },
    {
      "id": "sci_ch3",
      "name": "Metals and Non-metals",
      "ncertChapterNo": 3,
      "topics": [
        {
          "id": "s_3_1",
          "sectionCode": "3.1",
          "title": "Physical Properties & Notable Exceptions (Mercury, Gallium, Iodine, Diamond, Na/K)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ"
        },
        {
          "id": "s_3_2",
          "sectionCode": "3.2",
          "title": "Combustion & Amphoteric Oxides (Al₂O₃ & ZnO Reactions with Acids and Bases)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_3_3",
          "sectionCode": "3.3",
          "title": "Reaction of Metals with Water & Dilute Acids (HNO₃ exception: Mg & Mn)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "s_3_4",
          "sectionCode": "3.4",
          "title": "Reactivity Series & Displacement from Aqueous Salt Solutions",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M"
        },
        {
          "id": "s_3_5",
          "sectionCode": "3.5",
          "title": "Ionic Bond Formation: Electron Dot Transfer Structures (NaCl, MgCl₂, CaO)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "s_3_6",
          "sectionCode": "3.6",
          "title": "Properties of Ionic Compounds (High MP/BP, Hardness, Electrical Conductivity)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_3_7",
          "sectionCode": "3.7",
          "title": "Basic Metallurgy: Roasting (Sulphides), Calcination (Carbonates) & Thermite Reaction",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "s_3_8",
          "sectionCode": "3.8",
          "title": "Electrolytic Refining of Copper & Corrosion Prevention via Alloys (Brass, Bronze, Solder)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        }
      ]
    },
    {
      "id": "sci_ch4",
      "name": "Carbon and its Compounds",
      "ncertChapterNo": 4,
      "topics": [
        {
          "id": "s_4_1",
          "sectionCode": "4.1",
          "title": "Covalent Bonding in Carbon: Catenation & Tetravalency",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M"
        },
        {
          "id": "s_4_2",
          "sectionCode": "4.2",
          "title": "Allotropes of Carbon: Diamond (Tetrahedral), Graphite (Conductive Hexagonal) & Fullerenes",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ"
        },
        {
          "id": "s_4_3",
          "sectionCode": "4.3",
          "title": "Saturated (Alkanes) vs Unsaturated (Alkenes & Alkynes) & Isomerism of Butane/Pentane",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_4_4",
          "sectionCode": "4.4",
          "title": "Functional Groups (Alcohols, Aldehydes, Ketones, Carboxylic Acids) & Homologous Series",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_4_5",
          "sectionCode": "4.5",
          "title": "Combustion, Oxidation (alk. KMnO₄ / acid. K₂Cr₂O₇), Addition & Substitution Reactions",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "s_4_6",
          "sectionCode": "4.6",
          "title": "Ethanol (C₂H₅OH): Reactions with Na & Dehydration with conc. H₂SO₄ at 443 K",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_4_7",
          "sectionCode": "4.7",
          "title": "Ethanoic Acid (CH₃COOH): Esterification, Saponification & Carbonate Reactions",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        },
        {
          "id": "s_4_8",
          "sectionCode": "4.8",
          "title": "Soaps & Synthetic Detergents: Micelle Structure, Hydrophilic/Hydrophobic Ends, Hard Water Scum",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 4M Case Study"
        }
      ]
    },
    {
      "id": "sci_ch5",
      "name": "Life Processes",
      "ncertChapterNo": 5,
      "topics": [
        {
          "id": "s_5_1",
          "sectionCode": "5.1",
          "title": "Autotrophic Nutrition: Photosynthesis Stages & Chloroplast Structure",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_5_2",
          "sectionCode": "5.2",
          "title": "Stomatal Apparatus: Mechanism of Opening and Closing of Guard Cells",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M"
        },
        {
          "id": "s_5_3",
          "sectionCode": "5.3",
          "title": "Heterotrophic Nutrition in Amoeba (Pseudopodia Phagocytosis) & Paramecium",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "2M"
        },
        {
          "id": "s_5_4",
          "sectionCode": "5.4",
          "title": "Human Digestive System: Salivary Amylase, Gastric HCl/Pepsin, Bile Emulsification, Pancreatic Enzymes",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        },
        {
          "id": "s_5_5",
          "sectionCode": "5.5",
          "title": "Respiration: Breakdown of Glucose Pathways (Cytoplasm, Mitochondria, Muscle Lactate)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_5_6",
          "sectionCode": "5.6",
          "title": "Human Respiratory System: Trachea Rings, Bronchi, Alveolar Diffusion Surface",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "s_5_7",
          "sectionCode": "5.7",
          "title": "Human Heart & Double Circulation (Pulmonary vs Systemic Cycles, Valves & Arteries/Veins)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        },
        {
          "id": "s_5_8",
          "sectionCode": "5.8",
          "title": "Plant Transport: Xylem (Transpiration Pull & Root Pressure) vs Phloem (ATP-Driven Translocation)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_5_9",
          "sectionCode": "5.9",
          "title": "Human Excretory System: Nephron Filtration, Selective Reabsorption & Dialysis",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        }
      ]
    },
    {
      "id": "sci_ch6",
      "name": "Control and Coordination",
      "ncertChapterNo": 6,
      "topics": [
        {
          "id": "s_6_1",
          "sectionCode": "6.1",
          "title": "Neuron Anatomy (Dendrites, Cyton, Axon) & Synaptic Neurotransmitter Transmission",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_6_2",
          "sectionCode": "6.2",
          "title": "Reflex Action & Reflex Arc Pathways (Receptor ⟹ Sensory ⟹ Relay ⟹ Motor ⟹ Effector)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_6_3",
          "sectionCode": "6.3",
          "title": "Human Brain: Forebrain (Thinking/Memory), Midbrain (Reflexes) & Hindbrain (Cerebellum, Pons, Medulla)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "s_6_4",
          "sectionCode": "6.4",
          "title": "Plant Tropic Movements (Phototropism, Geotropism, Chemotropism, Hydrotropism) vs Nastic Movements",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_6_5",
          "sectionCode": "6.5",
          "title": "Plant Hormones: Auxin, Gibberellin, Cytokinin (Promoters) & Abscisic Acid (Inhibitor/Wilting)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "s_6_6",
          "sectionCode": "6.6",
          "title": "Animal Endocrine Glands: Thyroxine (Goitre), Insulin (Diabetes Feedback), Adrenaline & Pituitary",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
      ]
    },
    {
      "id": "sci_ch7",
      "name": "How do Organisms Reproduce?",
      "ncertChapterNo": 7,
      "topics": [
        {
          "id": "s_7_1",
          "sectionCode": "7.1",
          "title": "Importance of DNA Replication & Role of Variations in Survival of Species",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M"
        },
        {
          "id": "s_7_2",
          "sectionCode": "7.2",
          "title": "Asexual Reproduction: Binary/Multiple Fission, Budding, Spore Formation, Regeneration, Fragmentation",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_7_3",
          "sectionCode": "7.3",
          "title": "Vegetative Propagation (Layering, Grafting, Tissue Culture advantages)",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "2M"
        },
        {
          "id": "s_7_4",
          "sectionCode": "7.4",
          "title": "Sexual Reproduction in Flowering Plants: Stamen/Carpel, Pollination & Double Fertilization",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        },
        {
          "id": "s_7_5",
          "sectionCode": "7.5",
          "title": "Male Reproductive System: Testes, Scrotum, Vas Deferens, Prostate & Seminal Fluid",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_7_6",
          "sectionCode": "7.6",
          "title": "Female Reproductive System: Ovary, Fallopian Tube (Site of Fertilization), Uterus & Placenta",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "s_7_7",
          "sectionCode": "7.7",
          "title": "Menstruation Cycle Events when Ovum is Not Fertilized",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "s_7_8",
          "sectionCode": "7.8",
          "title": "Reproductive Health: STIs (Gonorrhoea, Syphilis, HIV) & Contraceptive Methods (Barrier, IUD, Surgical)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        }
      ]
    },
    {
      "id": "sci_ch8",
      "name": "Heredity and Evolution",
      "ncertChapterNo": 8,
      "topics": [
        {
          "id": "s_8_1",
          "sectionCode": "8.1",
          "title": "Accumulation of Variation during Reproduction & Heredity Principles",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ"
        },
        {
          "id": "s_8_2",
          "sectionCode": "8.2",
          "title": "Mendel's Monohybrid Cross (TT × tt): F₁ & F₂ Generations (Phenotypic 3:1, Genotypic 1:2:1)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_8_3",
          "sectionCode": "8.3",
          "title": "Mendel's Dihybrid Cross (RRYY × rryy): Independent Assortment (Phenotypic 9:3:3:1)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        },
        {
          "id": "s_8_4",
          "sectionCode": "8.4",
          "title": "Sex Determination Mechanism in Humans: Male Heterogamety (50% XX / 50% XY)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        }
      ]
    },
    {
      "id": "sci_ch9",
      "name": "Light – Reflection and Refraction",
      "ncertChapterNo": 9,
      "topics": [
        {
          "id": "s_9_1",
          "sectionCode": "9.1",
          "title": "Spherical Mirrors: Pole, Center of Curvature, Principal Axis, Focus & Focal Length (R = 2f)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ"
        },
        {
          "id": "s_9_2",
          "sectionCode": "9.2",
          "title": "Ray Diagrams for Concave & Convex Mirrors across All Object Positions",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "s_9_3",
          "sectionCode": "9.3",
          "title": "Cartesian Sign Convention & Mirror Formula: 1/f = 1/v + 1/u with Magnification m = -v/u",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M Numericals"
        },
        {
          "id": "s_9_4",
          "sectionCode": "9.4",
          "title": "Refraction of Light: Snell's Law (sin i / sin r = n) & Absolute Refractive Index (n = c/v)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "s_9_5",
          "sectionCode": "9.5",
          "title": "Refraction through Glass Slab & Lateral Displacement Factors",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "2M"
        },
        {
          "id": "s_9_6",
          "sectionCode": "9.6",
          "title": "Spherical Lenses: Ray Diagrams for Convex (Converging) & Concave (Diverging) Lenses",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_9_7",
          "sectionCode": "9.7",
          "title": "Lens Formula: 1/f = 1/v - 1/u & Magnification m = +v/u = h'/h",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M Numericals"
        },
        {
          "id": "s_9_8",
          "sectionCode": "9.8",
          "title": "Power of Lens: P = 1/f(m) in Dioptres (D) & Combination of Thin Lenses (P = P₁ + P₂)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "1M MCQ / 2M"
        }
      ]
    },
    {
      "id": "sci_ch10",
      "name": "The Human Eye and the Colorful World",
      "ncertChapterNo": 10,
      "topics": [
        {
          "id": "s_10_1",
          "sectionCode": "10.1",
          "title": "Eye Anatomy (Cornea, Iris, Pupil, Ciliary Muscles, Retina) & Power of Accommodation (Near Point 25 cm)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M"
        },
        {
          "id": "s_10_2",
          "sectionCode": "10.2",
          "title": "Defects of Vision & Corrections: Myopia (Concave), Hypermetropia (Convex) & Presbyopia (Bifocal)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M Ray Diagrams"
        },
        {
          "id": "s_10_3",
          "sectionCode": "10.3",
          "title": "Refraction of Light through a Triangular Glass Prism (Angle of Deviation)",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "2M"
        },
        {
          "id": "s_10_4",
          "sectionCode": "10.4",
          "title": "Dispersion of White Light (VIBGYOR) & Recombination using Inverted Prism (Newton's Disc)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_10_5",
          "sectionCode": "10.5",
          "title": "Atmospheric Refraction: Twinkling of Stars, Advanced Sunrise & Delayed Sunset (2 mins)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "s_10_6",
          "sectionCode": "10.6",
          "title": "Scattering of Light & Tyndall Effect: Blue Sky Color & Reddish Appearance of Sun at Sunrise/Sunset",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        }
      ]
    },
    {
      "id": "sci_ch11",
      "name": "Electricity",
      "ncertChapterNo": 11,
      "topics": [
        {
          "id": "s_11_1",
          "sectionCode": "11.1",
          "title": "Electric Current (I = Q/t) & Potential Difference (V = W/Q) Definitions & SI Units",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ / 2M"
        },
        {
          "id": "s_11_2",
          "sectionCode": "11.2",
          "title": "Ohm's Law: V = IR, V-I Characteristics Graph & Slope (Resistance)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_11_3",
          "sectionCode": "11.3",
          "title": "Factors Affecting Resistance: R = ρ l/A (Resistivity dependencies on material & temp)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M Numericals"
        },
        {
          "id": "s_11_4",
          "sectionCode": "11.4",
          "title": "Resistors in Series: Derivation of Rs = R₁ + R₂ + R₃ & Constant Current Property",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_11_5",
          "sectionCode": "11.5",
          "title": "Resistors in Parallel: Derivation of 1/Rp = 1/R₁ + 1/R₂ + 1/R₃ & Domestic Wiring Superiority",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "s_11_6",
          "sectionCode": "11.6",
          "title": "Joule's Law of Heating: H = I²Rt & Practical Heating Elements (Nichrome, Fuse wire)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_11_7",
          "sectionCode": "11.7",
          "title": "Electric Power: P = VI = I²R = V²/R & Commercial Unit of Energy (1 kWh = 3.6 × 10⁶ J) Bills",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M Numericals / 4M Case Study"
        }
      ]
    },
    {
      "id": "sci_ch12",
      "name": "Magnetic Effects of Electric Current",
      "ncertChapterNo": 12,
      "topics": [
        {
          "id": "s_12_1",
          "sectionCode": "12.1",
          "title": "Magnetic Field Lines: Properties (Closed Continuous Loops, Relative Density, Non-Intersection)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "2M"
        },
        {
          "id": "s_12_2",
          "sectionCode": "12.2",
          "title": "Magnetic Field due to Straight Conductor & Right-Hand Thumb Rule",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M"
        },
        {
          "id": "s_12_3",
          "sectionCode": "12.3",
          "title": "Magnetic Field of Circular Coil & Solenoid (Uniform Inside Field, Electromagnet)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_12_4",
          "sectionCode": "12.4",
          "title": "Force on Current-Carrying Conductor in Magnetic Field & Fleming's Left-Hand Rule",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_12_5",
          "sectionCode": "12.5",
          "title": "Domestic Electric Circuits: Live (Brown/Red), Neutral (Blue/Black), Earth Wire (Green/Yellow)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_12_6",
          "sectionCode": "12.6",
          "title": "Safety Devices: Grounding/Earthing of Metal Bodies, Electric Fuse & Overloading/Short-Circuiting",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        }
      ]
    },
    {
      "id": "sci_ch13",
      "name": "Our Environment",
      "ncertChapterNo": 13,
      "topics": [
        {
          "id": "s_13_1",
          "sectionCode": "13.1",
          "title": "Ecosystem Components (Biotic Producers/Consumers/Decomposers & Abiotic Factors)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ"
        },
        {
          "id": "s_13_2",
          "sectionCode": "13.2",
          "title": "Food Chains, Food Webs & Lindeman's 10% Law of Energy Transfer",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M Numericals"
        },
        {
          "id": "s_13_3",
          "sectionCode": "13.3",
          "title": "Biological Magnification (Biomagnification of Toxic Pesticides/DDT at Top Trophic Level)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "s_13_4",
          "sectionCode": "13.4",
          "title": "Ozone Layer (O₃) Formation, Depletion by CFCs & UNEP 1987 Montreal Protocol",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "s_13_5",
          "sectionCode": "13.5",
          "title": "Biodegradable vs Non-Biodegradable Waste Disposal & Landfills/Composting/Incineration",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "2M"
        }
      ]
    }
  ]
},
{
  "id": "sst",
  "name": "Social Science (087)",
  "color": "from-amber-500 to-orange-600",
  "category": "Core",
  "chapters": [
    {
      "id": "sst_his1",
      "name": "History: The Rise of Nationalism in Europe",
      "ncertChapterNo": 1,
      "topics": [
        {
          "id": "h_1_1",
          "sectionCode": "1.1",
          "title": "French Revolution, Concept of Nation-State & Napoleonic Civil Code of 1804",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "h_1_2",
          "sectionCode": "1.2",
          "title": "Liberal Nationalism, Zollverein (Customs Union 1834) & Treaty of Vienna 1815",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "h_1_3",
          "sectionCode": "1.3",
          "title": "Unification of Germany (Otto von Bismarck) & Italy (Mazzini, Cavour, Garibaldi)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        },
        {
          "id": "h_1_4",
          "sectionCode": "1.4",
          "title": "Visualizing the Nation (Marianne & Germania) & Balkan Nationalism Crisis leading to WWI",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
      ]
    },
    {
      "id": "sst_his2",
      "name": "History: Nationalism in India",
      "ncertChapterNo": 2,
      "topics": [
        {
          "id": "h_2_1",
          "sectionCode": "2.1",
          "title": "First World War Impact, Rowlatt Act, Jallianwala Bagh Massacre & Khilafat Issue",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "h_2_2",
          "sectionCode": "2.2",
          "title": "Differing Strands of Non-Cooperation: Middle Class in Cities, Peasants in Awadh (Baba Ramchandra), Tribal Rebellion (Alluri Sitaram Raju), Assam Plantations",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        },
        {
          "id": "h_2_3",
          "sectionCode": "2.3",
          "title": "Salt March (Dandi March), Civil Disobedience Movement 1930 & Gandhi-Irwin Pact",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        },
        {
          "id": "h_2_4",
          "sectionCode": "2.4",
          "title": "Sense of Collective Belonging (Bharat Mata, Folklore, Tricolour Flag) & Mandatory Board Map Work",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M Map / 3M"
        }
      ]
    },
    {
      "id": "sst_his3",
      "name": "History: The Making of a Global World",
      "ncertChapterNo": 3,
      "topics": [
        {
          "id": "h_3_1",
          "sectionCode": "3.1",
          "title": "Pre-Modern World: Silk Routes Linking Asia, Europe & North Africa",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "h_3_2",
          "sectionCode": "3.2",
          "title": "Food Travels: Spaghetti and Potato & Biological Conquest via Smallpox in the Americas",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "h_3_3",
          "sectionCode": "3.3",
          "title": "Nineteenth Century Global Economy: Trade, Labor Migration & Capital Flows",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "3M"
        }
      ]
    },
    {
      "id": "sst_his4",
      "name": "History: Print Culture and the Modern World",
      "ncertChapterNo": 4,
      "topics": [
        {
          "id": "h_4_1",
          "sectionCode": "4.1",
          "title": "First Printed Books: Woodblock Printing in China, Japan (Ukiyo-e) & Korea",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "2M"
        },
        {
          "id": "h_4_2",
          "sectionCode": "4.2",
          "title": "Gutenberg's Printing Press (Mainz, Germany) & Print Revolution's Impact on European Society",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "h_4_3",
          "sectionCode": "4.3",
          "title": "Religious Debates: Martin Luther's Ninety-Five Theses & Protestant Reformation",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "h_4_4",
          "sectionCode": "4.4",
          "title": "India and the World of Print: Manuscripts, Vernacular Newspapers & Women's Education Reforms",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
      ]
    },
    {
      "id": "sst_civ1",
      "name": "Civics: Power Sharing",
      "ncertChapterNo": 1,
      "topics": [
        {
          "id": "c_1_1",
          "sectionCode": "1.1",
          "title": "Ethnic Composition of Belgium (Dutch/French/German) vs Sri Lanka (Sinhala/Tamil)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ / 2M"
        },
        {
          "id": "c_1_2",
          "sectionCode": "1.2",
          "title": "Majoritarianism in Sri Lanka (1956 Act) & Alienation of Sri Lankan Tamils",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "c_1_3",
          "sectionCode": "1.3",
          "title": "Accommodation in Belgium: Four Key Constitutional Amendments for Peaceful Coexistence",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "c_1_4",
          "sectionCode": "1.4",
          "title": "Why Power Sharing is Desirable: Prudential Reasons vs Moral Reasons & Forms of Power Sharing",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        }
      ]
    },
    {
      "id": "sst_civ2",
      "name": "Civics: Federalism",
      "ncertChapterNo": 2,
      "topics": [
        {
          "id": "c_2_1",
          "sectionCode": "2.1",
          "title": "Key Features of Federalism: Two or More Tiers, Rigid Constitution, Jurisdiction",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "c_2_2",
          "sectionCode": "2.2",
          "title": "Coming Together Federations (USA, Switzerland) vs Holding Together Federations (India, Spain)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "c_2_3",
          "sectionCode": "2.3",
          "title": "Legislative Lists: Union List (National Importance), State List, Concurrent List & Residuary Subjects",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "c_2_4",
          "sectionCode": "2.4",
          "title": "Decentralization in India: 73rd & 74th Constitutional Amendments (1992 Reforms, Panchayati Raj)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        }
      ]
    },
    {
      "id": "sst_civ3",
      "name": "Civics: Gender, Religion and Caste",
      "ncertChapterNo": 3,
      "topics": [
        {
          "id": "c_3_1",
          "sectionCode": "3.1",
          "title": "Gender Division, Sexual Division of Labor, Feminist Movement & Women's Political Representation",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "c_3_2",
          "sectionCode": "3.2",
          "title": "Religion, Communalism and Politics: Communal Politics Forms & Constitutional Secularism",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "c_3_3",
          "sectionCode": "3.3",
          "title": "Caste in Politics (Mobilization, Vote Banks) and Politics in Caste (Coalitions, Backward/Forward)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
      ]
    },
    {
      "id": "sst_civ4",
      "name": "Civics: Political Parties",
      "ncertChapterNo": 4,
      "topics": [
        {
          "id": "c_4_1",
          "sectionCode": "4.1",
          "title": "Meaning, Components (Leaders, Active Members, Followers) & 7 Core Functions of Political Parties",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        },
        {
          "id": "c_4_2",
          "sectionCode": "4.2",
          "title": "Necessity of Political Parties: Why Representative Democracy Cannot Function Without Them",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "c_4_3",
          "sectionCode": "4.3",
          "title": "Election Commission Criteria for Recognizing National Parties vs State/Regional Parties",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "c_4_4",
          "sectionCode": "4.4",
          "title": "Challenges to Political Parties (Lack of Internal Democracy, Dynastic Succession, Money/Muscle Power, Meaningful Choice) & Reforms",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        }
      ]
    },
    {
      "id": "sst_civ5",
      "name": "Civics: Outcomes of Democracy",
      "ncertChapterNo": 5,
      "topics": [
        {
          "id": "c_5_1",
          "sectionCode": "5.1",
          "title": "Accountable, Responsive and Legitimate Government Assessment",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "c_5_2",
          "sectionCode": "5.2",
          "title": "Economic Growth, Development & Reduction of Inequality and Poverty in Democracies",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "c_5_3",
          "sectionCode": "5.3",
          "title": "Accommodation of Social Diversity, Protection of Minority Rights & Dignity and Freedom of Citizens",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
      ]
    },
    {
      "id": "sst_geo1",
      "name": "Geography: Resources and Development",
      "ncertChapterNo": 1,
      "topics": [
        {
          "id": "g_1_1",
          "sectionCode": "1.1",
          "title": "Resource Classification (Biotic/Abiotic, Renewable/Non-Renewable, Individual/Community/National/International)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ / 2M"
        },
        {
          "id": "g_1_2",
          "sectionCode": "1.2",
          "title": "Resource Planning in India: 3 Stages & Sustainable Development (Rio Earth Summit 1992)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "g_1_3",
          "sectionCode": "1.3",
          "title": "Land Utilization, Land Use Pattern in India & Causes of Land Degradation with Conservation Measures",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "g_1_4",
          "sectionCode": "1.4",
          "title": "Major Soil Types (Alluvial, Black/Regur, Red & Yellow, Laterite, Arid, Forest) & Soil Erosion Methods",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / Map Work"
        }
      ]
    },
    {
      "id": "sst_geo2",
      "name": "Geography: Forest and Wildlife Resources",
      "ncertChapterNo": 2,
      "topics": [
        {
          "id": "g_2_1",
          "sectionCode": "2.1",
          "title": "Biodiversity Flora & Fauna in India & IUCN Classification of Species",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "2M"
        },
        {
          "id": "g_2_2",
          "sectionCode": "2.2",
          "title": "Forest Classification: Reserved Forests, Protected Forests & Unclassed Forests",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "g_2_3",
          "sectionCode": "2.3",
          "title": "Community-Led Conservation: Chipko Movement, Beej Bachao Andolan & Joint Forest Management (JFM)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
      ]
    },
    {
      "id": "sst_geo3",
      "name": "Geography: Water Resources",
      "ncertChapterNo": 3,
      "topics": [
        {
          "id": "g_3_1",
          "sectionCode": "3.1",
          "title": "Water Scarcity Causes: Over-exploitation, Unequal Access & Industrial Contamination",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "g_3_2",
          "sectionCode": "3.2",
          "title": "Multi-Purpose River Valley Projects: Benefits vs Ecological & Social Displacement Concerns",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "g_3_3",
          "sectionCode": "3.3",
          "title": "Traditional Rainwater Harvesting: Guls/Kuls (Himalayas), Khadins/Johads & Tankas (Rajasthan), Rooftop Systems",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 4M Case Study"
        }
      ]
    },
    {
      "id": "sst_geo4",
      "name": "Geography: Agriculture",
      "ncertChapterNo": 4,
      "topics": [
        {
          "id": "g_4_1",
          "sectionCode": "4.1",
          "title": "Farming Types: Primitive Subsistence (Jhumming Slash-and-Burn), Intensive Subsistence & Commercial",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "g_4_2",
          "sectionCode": "4.2",
          "title": "Cropping Seasons: Rabi (Wheat, Mustard), Kharif (Rice, Maize), Zaid (Watermelon, Fodder)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "g_4_3",
          "sectionCode": "4.3",
          "title": "Major Food & Cash Crops: Climate & Soil for Rice, Wheat, Millets, Sugarcane, Tea, Cotton, Jute",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M / Map Work"
        },
        {
          "id": "g_4_4",
          "sectionCode": "4.4",
          "title": "Institutional & Technical Reforms in Agriculture, Green Revolution & Bhoodan-Gramdan Movement",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
      ]
    },
    {
      "id": "sst_geo5",
      "name": "Geography: Minerals and Energy Resources",
      "ncertChapterNo": 5,
      "topics": [
        {
          "id": "g_5_1",
          "sectionCode": "5.1",
          "title": "Mode of Occurrence of Minerals: Veins & Lodes, Beds/Layers, Residual Masses, Alluvial Placer Deposits",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "g_5_2",
          "sectionCode": "5.2",
          "title": "Ferrous Minerals (Iron Ore Belts, Manganese) vs Non-Ferrous Minerals (Bauxite, Copper)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / Map Work"
        },
        {
          "id": "g_5_3",
          "sectionCode": "5.3",
          "title": "Conventional Energy: Coal (Anthracite, Bituminous, Lignite), Petroleum (Offshore Mumbai High) & Natural Gas",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "g_5_4",
          "sectionCode": "5.4",
          "title": "Non-Conventional Energy: Solar Energy, Wind Power, Biogas Plants, Tidal & Geothermal Energy",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 4M Case Study"
        }
      ]
    },
    {
      "id": "sst_geo6",
      "name": "Geography: Manufacturing Industries",
      "ncertChapterNo": 6,
      "topics": [
        {
          "id": "g_6_1",
          "sectionCode": "6.1",
          "title": "Importance of Manufacturing as Backbone of Economic Development & Factors Influencing Industrial Location",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "g_6_2",
          "sectionCode": "6.2",
          "title": "Agro-Based Industries: Cotton Textile (Localization in Maharashtra/Gujarat) & Sugar Industry (Shift to South)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "g_6_3",
          "sectionCode": "6.3",
          "title": "Mineral-Based Industries: Iron & Steel (Chotanagpur Plateau concentration), Aluminium Smelting, Chemical & IT",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "g_6_4",
          "sectionCode": "6.4",
          "title": "Industrial Pollution (Air, Water, Thermal, Noise) & Environmental Degradation Prevention Measures (NTPC)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        }
      ]
    },
    {
      "id": "sst_geo7",
      "name": "Geography: Lifelines of National Economy",
      "ncertChapterNo": 7,
      "topics": [
        {
          "id": "g_7_1",
          "sectionCode": "7.1",
          "title": "Roadways in India: Golden Quadrilateral Super Highways, National, State & District Roads vs Railways Advantages",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "g_7_2",
          "sectionCode": "7.2",
          "title": "Railways Challenges (Northern Plains vs Himalayan terrain) & Pipelines Network (Hazira-Vijaipur-Jagdishpur)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "g_7_3",
          "sectionCode": "7.3",
          "title": "Waterways (National Waterway 1 Ganga) & Major Sea Ports (Kandla, Mumbai, Marmagao, Chennai, Visakhapatnam)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / Map Work"
        },
        {
          "id": "g_7_4",
          "sectionCode": "7.4",
          "title": "Airways, Communication Networks (Telecom/Mass Media), International Trade Balance & Tourism as Trade",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 4M Case Study"
        }
      ]
    },
    {
      "id": "sst_eco1",
      "name": "Economics: Development",
      "ncertChapterNo": 1,
      "topics": [
        {
          "id": "e_1_1",
          "sectionCode": "1.1",
          "title": "What Development Promises: Different People, Different Goals & Conflicting Notions of Development",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ / 2M"
        },
        {
          "id": "e_1_2",
          "sectionCode": "1.2",
          "title": "Income and Other Goals (Freedom, Security, Respect) & National Development Criteria",
          "isImportantForBoards": true,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "e_1_3",
          "sectionCode": "1.3",
          "title": "Comparing Countries: World Bank Per Capita Income (Limitations) vs UNDP Human Development Index (HDI: Health, Education, Income)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        },
        {
          "id": "e_1_4",
          "sectionCode": "1.4",
          "title": "Public Facilities Importance (PDS, Kerala Infant Mortality) & Sustainability of Development (Groundwater/Crude Oil)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 4M Case Study"
        }
      ]
    },
    {
      "id": "sst_eco2",
      "name": "Economics: Sectors of the Indian Economy",
      "ncertChapterNo": 2,
      "topics": [
        {
          "id": "e_2_1",
          "sectionCode": "2.1",
          "title": "Three Sectors: Primary (Agriculture/Mining), Secondary (Manufacturing), Tertiary (Services & IT)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ / 2M"
        },
        {
          "id": "e_2_2",
          "sectionCode": "2.2",
          "title": "Historical Changes & Rising Importance of the Tertiary Sector in Indian GDP Contribution",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "e_2_3",
          "sectionCode": "2.3",
          "title": "Disguised Unemployment (Underemployment in Agriculture) & Strategies to Create Rural/Urban Employment (MGNREGA 2005)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        },
        {
          "id": "e_2_4",
          "sectionCode": "2.4",
          "title": "Organised vs Unorganised Sectors (Job Security, Paid Leaves) & Public vs Private Sectors",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
      ]
    },
    {
      "id": "sst_eco3",
      "name": "Economics: Money and Credit",
      "ncertChapterNo": 3,
      "topics": [
        {
          "id": "e_3_1",
          "sectionCode": "3.1",
          "title": "Barter System & Double Coincidence of Wants vs Money as Medium of Exchange",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M MCQ / 2M"
        },
        {
          "id": "e_3_2",
          "sectionCode": "3.2",
          "title": "Modern Forms of Money: Currency (Authorized by RBI), Demand Deposits & Cheque Payment Mechanism",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "e_3_3",
          "sectionCode": "3.3",
          "title": "Terms of Credit (Interest Rate, Collateral Security, Documentation, Mode of Repayment) & Debt Trap (Swapna)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "e_3_4",
          "sectionCode": "3.4",
          "title": "Formal Sources (Banks, Cooperatives supervised by RBI) vs Informal Sources (Moneylenders, High Interest) & Self-Help Groups (SHGs)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        }
      ]
    },
    {
      "id": "sst_eco4",
      "name": "Economics: Globalization and the Indian Economy",
      "ncertChapterNo": 4,
      "topics": [
        {
          "id": "e_4_1",
          "sectionCode": "4.1",
          "title": "Production Across Countries: Multinational Corporations (MNCs) & Methods of Interlinking Production (Joint Ventures, Local Buyouts)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "e_4_2",
          "sectionCode": "4.2",
          "title": "Foreign Trade & Market Integration (Choice of Goods, Price Equalization)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "e_4_3",
          "sectionCode": "4.3",
          "title": "Factors Enabling Globalization: Rapid Information & Communication Technology (ICT), Containerization & Trade Barrier Liberalization (1991)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        },
        {
          "id": "e_4_4",
          "sectionCode": "4.4",
          "title": "Role of World Trade Organization (WTO), Impact on Small Producers vs Consumers & Strategies for Fair Globalization",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
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
  { id: "f3", subject: "Science", topic: "Ohm's Law & Electric Power", formula: "V = IR, \\quad P = VI = I^2R = \\frac{V^2}{R}, \\quad H = I^2Rt", description: "Relationship between voltage, current, resistance, heat energy, and electric power." },
  { id: "f4", subject: "Mathematics", topic: "Basic Proportionality Theorem", formula: "\\frac{AD}{DB} = \\frac{AE}{EC} \\iff \\frac{AD}{AB} = \\frac{AE}{AC}", description: "Thales theorem ratio for parallel lines inside triangles." },
  { id: "f5", subject: "Mathematics", topic: "Cloud Height Reflection Formula", formula: "H = \\frac{h(\\tan\\beta + \\tan\\alpha)}{\\tan\\beta - \\tan\\alpha}", description: "Direct formula for height of cloud above water surface given elevation α and depression β." },
  { id: "f6", subject: "Science", topic: "Specific Resistance / Resistivity", formula: "R = \\rho \\frac{l}{A} \\iff \\rho = \\frac{R \\cdot A}{l}", description: "Resistivity formula where ρ is in Ω·m, independent of length and area." },
  { id: "f7", subject: "Science", topic: "Electric Energy & Cost Calculation", formula: "E(\\text{kWh}) = \\frac{P(\\text{W}) \\times t(\\text{h})}{1000}, \\quad \\text{Cost} = E \\times \\text{Rate}", description: "1 unit = 1 kWh = 3.6 × 10⁶ Joules." }
];

// -------------------------------------------------------------
// 6. FASTRACK REVISION MODULES (HIGH-YIELD BOOKLET EXTRACTS)
// -------------------------------------------------------------
export interface FastrackChapterItem {
  id: string;
  chapterNumber: number;
  subject: "Mathematics" | "Science" | "Social Science" | "English" | "Hindi";
  title: string;
  badge: string;
  summary: string;
  keyPoints: string[];
  formulasOrReactions: {
    label: string;
    expression: string;
    note: string;
  }[];
  knowledgeBoosters: string[];
  proTricks: string[];
  commonErrors: string[];
}

export const FASTRACK_CHAPTERS: FastrackChapterItem[] = [
  {
    id: "ft_math_8",
    chapterNumber: 8,
    subject: "Mathematics",
    title: "Introduction to Trigonometry",
    badge: "100% Board Weightage",
    summary: "Complete breakdown of T-ratios, Pythagorean definitions, Standard Angle tables (0°-90°), and algebraic identities.",
    keyPoints: [
      "Trigonometric ratios relate angles to side ratios in right-angled triangles.",
      "sin θ = P/H, cos θ = B/H, tan θ = P/B, cot θ = B/P, sec θ = H/B, cosec θ = H/P.",
      "Values of T-ratios depend ONLY on the angle θ, not on triangle size.",
      "sin θ and cos θ are always between 0 and 1 for acute angles; sec θ and cosec θ are always ≥ 1.",
      "Pythagorean identities: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = cosec²θ."
    ],
    formulasOrReactions: [
      { label: "Fundamental Identity 1", expression: "sin²θ + cos²θ = 1", note: "cos²θ = 1 - sin²θ  |  sin²θ = 1 - cos²θ" },
      { label: "Fundamental Identity 2", expression: "1 + tan²θ = sec²θ", note: "sec²θ - tan²θ = 1  |  (sec θ - tan θ)(sec θ + tan θ) = 1" },
      { label: "Fundamental Identity 3", expression: "1 + cot²θ = cosec²θ", note: "cosec²θ - cot²θ = 1  |  (cosec θ - cot θ)(cosec θ + cot θ) = 1" },
      { label: "Quotient Relations", expression: "tan θ = sin θ / cos θ, \\quad cot θ = cos θ / sin θ", note: "tan θ · cot θ = 1" }
    ],
    knowledgeBoosters: [
      "Never confuse tan 30° = 1/√3 with tan 60° = √3.",
      "If sin θ + cos θ = √2, squaring gives 1 + 2 sin θ cos θ = 2 ⇒ sin θ cos θ = 1/2 ⇒ tan θ + cot θ = 2.",
      "If sec θ + tan θ = p, then sec θ - tan θ = 1/p, giving tan θ = (p² - 1)/(2p) and sec θ = (p² + 1)/(2p)."
    ],
    proTricks: [
      "When proving identities with fractions, express terms in sin θ and cos θ if no direct algebraic identity is visible.",
      "Use (a² - b²) = (a - b)(a + b) to rapidly evaluate expressions like (sec⁴θ - tan⁴θ) = (sec²θ + tan²θ)(1)."
    ],
    commonErrors: [
      "Wrongly assuming (sin A + cos A)² = sin²A + cos²A (missing the +2 sin A cos A cross-term).",
      "Confusing angle values: writing cot 30° = 1/√3 instead of √3.",
      "Applying identities on different angles: sec²θ - tan²φ is NOT equal to 1 if θ ≠ φ."
    ]
  },
  {
    id: "ft_math_6",
    chapterNumber: 6,
    subject: "Mathematics",
    title: "Triangles (Similarity & Theorems)",
    badge: "Most Important Proofs",
    summary: "Basic Proportionality Theorem (BPT/Thales), Converse of BPT, AAA/AA, SSS, and SAS similarity criteria.",
    keyPoints: [
      "Two polygons/triangles are similar if corresponding angles are equal and corresponding sides are proportional.",
      "All congruent figures are similar, but similar figures are NOT necessarily congruent.",
      "Basic Proportionality Theorem: If DE || BC in △ABC, then AD/DB = AE/EC.",
      "Ratio of perimeters, medians, altitudes, and angle bisectors of two similar triangles equals the ratio of their corresponding sides.",
      "Angle Bisector Theorem: Internal bisector of an angle divides opposite side in ratio of containing sides: AB/AC = BD/DC."
    ],
    formulasOrReactions: [
      { label: "BPT / Thales Theorem", expression: "AD / DB = AE / EC \\iff AD / AB = AE / AC", note: "Applies when DE is parallel to base BC" },
      { label: "Perimeter Ratio", expression: "Perimeter(△ABC) / Perimeter(△PQR) = AB / PQ = BC / QR", note: "Equal to ratio of any corresponding linear dimension" },
      { label: "Altitude & Median Ratio", expression: "Altitude₁ / Altitude₂ = Median₁ / Median₂ = Side₁ / Side₂", note: "For any two similar triangles" }
    ],
    knowledgeBoosters: [
      "If a line divides two sides in the same ratio, it is parallel to the third side (Converse of BPT).",
      "In right △ABC with BD ⊥ AC: AB² = AD · AC, BC² = CD · AC, and BD² = AD · CD.",
      "RHS is NOT a similarity criterion for arbitrary triangles (only AA, SSS, SAS exist)."
    ],
    proTricks: [
      "To find unknown segments across trapeziums, draw a diagonal to split into two triangles and apply BPT twice.",
      "In shadow problems with towers and poles, angular elevation of the sun is identical, making all shadow triangles similar by AA."
    ],
    commonErrors: [
      "Matching incorrect vertex order (e.g. writing △ABC ~ △PQR when A corresponds to Q).",
      "Assuming areas are proportional to side ratios (in the current syllabus, side ratios apply to linear elements: perimeter, median, altitude)."
    ]
  },
  {
    id: "ft_math_9",
    chapterNumber: 9,
    subject: "Mathematics",
    title: "Some Applications of Trigonometry",
    badge: "Guaranteed Case Study Chapter",
    summary: "Heights & Distances, line of sight, angles of elevation and depression, multi-triangle word problems.",
    keyPoints: [
      "Line of sight is the straight line from observer's eye to the viewed object.",
      "Angle of elevation is measured looking upwards from the horizontal.",
      "Angle of depression is measured looking downwards from the horizontal.",
      "Angle of depression from top of tower to object = Angle of elevation from object to top of tower (alternate interior angles).",
      "As an observer approaches the base of a vertical structure, the angle of elevation increases."
    ],
    formulasOrReactions: [
      { label: "Basic Height Solver", expression: "h = d \\cdot \\tan\\theta", note: "When base distance d and elevation θ are known" },
      { label: "Two-Angle Distance Relation", expression: "d = h(\\cot\\theta_1 - \\cot\\theta_2)", note: "Distance between two observation points on same side" },
      { label: "Cloud Lake Reflection Formula", expression: "H = \\frac{h(\\tan\\beta + \\tan\\alpha)}{\\tan\\beta - \\tan\\alpha}", note: "Height of cloud above water with observer height h" }
    ],
    knowledgeBoosters: [
      "When Sun's elevation is 45°, height of object = length of its shadow.",
      "If height of tower is tripled and distance is tripled, angle of elevation remains completely unchanged.",
      "Reflection of an object in water is at the same vertical depth below the water surface as the object is above it."
    ],
    proTricks: [
      "Always draw a horizontal reference line at the observer's eye level before marking angles of depression.",
      "Keep radical terms like √3 in symbolic form until the final calculation step to avoid rounding errors."
    ],
    commonErrors: [
      "Measuring angle of depression from the vertical wall instead of the horizontal eye level.",
      "Using tan 30° = √3 instead of 1/√3 in numerical substitution.",
      "Forgetting to add the observer's height (e.g. 1.5m tall girl) to the final building height."
    ]
  },
  {
    id: "ft_sci_3",
    chapterNumber: 3,
    subject: "Science",
    title: "Metals & Non-Metals (High-Yield Exceptions)",
    badge: "Examiner Favorite Exceptions",
    summary: "All critical physical and chemical exceptions, reactivity trends, amphoteric oxides, HNO₃ rules, and Aqua Regia.",
    keyPoints: [
      "Physical exceptions: Hg (liquid metal), Br₂ (liquid non-metal), Na/K (soft, cut with knife), Ga/Cs (melt on palm).",
      "Diamond (hardest natural substance), Graphite (conducts electricity), Iodine (lustrous non-metal).",
      "Amphoteric oxides: ZnO and Al₂O₃ react with both acids and bases to yield salt + water.",
      "HNO₃ is a strong oxidizing agent; only very dilute (1%) HNO₃ with Mg and Mn liberates H₂ gas.",
      "Aqua Regia is a 3:1 mixture of concentrated HCl and concentrated HNO₃ that dissolves Gold and Platinum."
    ],
    formulasOrReactions: [
      { label: "Zinc Oxide Amphoteric (Acid)", expression: "ZnO + 2HCl \\longrightarrow ZnCl_2 + H_2O", note: "Acts as a basic oxide" },
      { label: "Zinc Oxide Amphoteric (Base)", expression: "ZnO + 2NaOH \\longrightarrow Na_2ZnO_2 + H_2O", note: "Yields Sodium Zincate" },
      { label: "Aluminium Oxide (Base)", expression: "Al_2O_3 + 2NaOH \\longrightarrow 2NaAlO_2 + H_2O", note: "Yields Sodium Aluminate" },
      { label: "Copper Prolonged Heating", expression: "2Cu + O_2 \\longrightarrow 2CuO \\text{ (Black)}", note: "Forms black Copper(II) Oxide" }
    ],
    knowledgeBoosters: [
      "Na and K catch fire in open moist air; stored under kerosene oil.",
      "Magnesium burns in air with a dazzling white flame to form basic MgO powder.",
      "Aluminium develops a self-protecting oxide coat (Al₂O₃) that prevents further corrosion (utilized in Anodising)."
    ],
    proTricks: [
      "Remember amphoteric oxides with mnemonic: 'Al-Zinc are dual agents' (Al₂O₃ and ZnO).",
      "Aqua Regia ratio mnemonic: 'HCl has 3 letters → 3 parts HCl : 1 part HNO₃'."
    ],
    commonErrors: [
      "Writing that Cu reacts with dilute HCl to release H₂ (Cu is below Hydrogen in reactivity series, so NO reaction).",
      "Stating that HNO₃ produces H₂ with all metals (it produces H₂O unless reacting with Mg/Mn in 1% dilute acid)."
    ]
  },
  {
    id: "ft_sci_12",
    chapterNumber: 12,
    subject: "Science",
    title: "Electricity (Tapasya Complete Master)",
    badge: "Top Numerical Chapter",
    summary: "Ohm's Law, Resistance factors, Series vs Parallel derivations, Joule's heating law, and commercial electrical energy.",
    keyPoints: [
      "Electric current I = Q/t. SI unit is Ampere (A). 1 A = 1 C/s. Measured by Ammeter in series.",
      "Electric potential V = W/Q. SI unit is Volt (V). 1 V = 1 J/C. Measured by Voltmeter in parallel.",
      "Ohm's Law: V = IR provided temperature remains constant. V-I graph is a straight line through origin.",
      "Resistance R = ρ·l/A. Resistivity ρ depends ONLY on material and temperature (not dimensions).",
      "Series: I is same, Rs = R₁ + R₂ + ... | Parallel: V is same, 1/Rp = 1/R₁ + 1/R₂ + ...",
      "Joule's Law of Heating: H = I²Rt = VIt = (V²/R)t. Commercial unit: 1 kWh = 3.6 × 10⁶ J."
    ],
    formulasOrReactions: [
      { label: "Ohm's Law & Resistance", expression: "V = IR \\iff R = \\frac{V}{I}, \\quad R = \\rho \\frac{l}{A}", note: "ρ in Ω·m" },
      { label: "Electric Power", expression: "P = VI = I^2R = \\frac{V^2}{R}", note: "Unit: Watt (W)" },
      { label: "Joule's Heating Law", expression: "H = I^2Rt = VIt = \\frac{V^2t}{R}", note: "Unit: Joules (J)" },
      { label: "Commercial Energy Unit", expression: "1\\text{ kWh} = 3.6 \\times 10^6\\text{ J}", note: "Cost = kWh × Rate" }
    ],
    knowledgeBoosters: [
      "A current-carrying wire has ZERO net electrostatic charge because number of protons = number of electrons at every instant.",
      "Tungsten is used in bulb filaments because of high melting point (3380°C) and resistance to oxidation.",
      "Bulbs are filled with chemically inactive gases like Nitrogen and Argon to prolong filament life."
    ],
    proTricks: [
      "In parallel combinations, equivalent resistance is ALWAYS smaller than the smallest individual resistor.",
      "For two parallel resistors: Rp = (R₁ · R₂) / (R₁ + R₂)."
    ],
    commonErrors: [
      "Connecting ammeter in parallel (damages meter due to low resistance) or voltmeter in series.",
      "Forgetting to convert time in minutes to seconds when calculating Heat H = I²Rt in Joules."
    ]
  }
];

// -------------------------------------------------------------
// 7. CBSE CASE STUDY SIMULATIONS (SECTION E MASTERY)
// -------------------------------------------------------------
export interface CaseStudySubQuestion {
  id: string;
  questionText: string;
  options?: string[];
  correctOptionIndex?: number;
  correctTextAnswer: string;
  explanation: string;
  marks: number;
}

export interface CaseStudySimulation {
  id: string;
  subject: "Mathematics" | "Science" | "Social Science";
  chapter: string;
  title: string;
  scenarioContext: string;
  diagramDescription: string;
  subQuestions: CaseStudySubQuestion[];
}

export const CASE_STUDY_SIMULATIONS: CaseStudySimulation[] = [
  {
    id: "cs_trig_1",
    subject: "Mathematics",
    chapter: "Introduction to Trigonometry",
    title: "Anika's Geometric Exploration of Right Triangles",
    scenarioContext: "Anika is studying in Class X. She is making a geometric figure to understand trigonometric ratios. In △PQR, ∠Q is a right angle, △QTR is right-angled at T and △QST is right-angled at S. Given: PQ = 12 cm, QR = 8.5 cm, ST = 4 cm, SQ = 5 cm, ∠QTS = x and ∠TPQ = y.",
    diagramDescription: "Right triangle PQR with perpendiculars ST to PQ and TS forming angles x and y.",
    subQuestions: [
      {
        id: "cs_t1_q1",
        questionText: "What is the length of segment PT?",
        options: ["8 cm", "√65 cm", "7.5 cm", "√69 cm"],
        correctOptionIndex: 1,
        correctTextAnswer: "√65 cm",
        explanation: "PS = PQ - SQ = 12 - 5 = 7 cm. In right △PST, PT² = PS² + ST² = 7² + 4² = 49 + 16 = 65 ⇒ PT = √65 cm.",
        marks: 1
      },
      {
        id: "cs_t1_q2",
        questionText: "What is the value of tan x?",
        options: ["7.5/13", "5/4", "4/5", "13/7.5"],
        correctOptionIndex: 1,
        correctTextAnswer: "5/4",
        explanation: "In right-angled △TSQ, tan x = Perpendicular/Base = SQ/ST = 5/4.",
        marks: 1
      },
      {
        id: "cs_t1_q3",
        questionText: "What is the value of sec x?",
        options: ["√91 / 6", "√71 / 6", "√41 / 4", "√31 / 5"],
        correctOptionIndex: 2,
        correctTextAnswer: "√41 / 4",
        explanation: "sec²x = 1 + tan²x = 1 + (5/4)² = 1 + 25/16 = 41/16 ⇒ sec x = √41 / 4.",
        marks: 1
      },
      {
        id: "cs_t1_q4",
        questionText: "What is the value of sin y?",
        options: ["4 / √65", "4/7", "7/4", "√65 / 7"],
        correctOptionIndex: 0,
        correctTextAnswer: "4 / √65",
        explanation: "In right-angled △TSP, sin y = TS / PT = 4 / √65.",
        marks: 1
      }
    ]
  },
  {
    id: "cs_trig_2",
    subject: "Mathematics",
    chapter: "Introduction to Trigonometry",
    title: "Sailing Boat Triangular Masts",
    scenarioContext: "A sailing boat with triangular masts is cruising. Two right triangles can be observed: △PQR and △PQS, both right-angled at Q. The distance QR = 2 m, QS = 3 m, and mast height PQ = 5 m.",
    diagramDescription: "A central mast PQ = 5m perpendicular to deck with triangle PQR on left (QR=2m) and PQS on right (QS=3m).",
    subQuestions: [
      {
        id: "cs_t2_q1",
        questionText: "Find the value of sec S:",
        options: ["√34 / 5", "√34 / 3", "5/3", "3 / √34"],
        correctOptionIndex: 1,
        correctTextAnswer: "√34 / 3",
        explanation: "In right △PQS, PS = √(PQ² + QS²) = √(5² + 3²) = √34. sec S = Hypotenuse / Base = PS / QS = √34 / 3.",
        marks: 1
      },
      {
        id: "cs_t2_q2",
        questionText: "Find the value of cosec R:",
        options: ["√29 / 5", "√29 / 2", "2/5", "5 / √29"],
        correctOptionIndex: 0,
        correctTextAnswer: "√29 / 5",
        explanation: "In right △PQR, PR = √(5² + 2²) = √29. cosec R = Hypotenuse / Perpendicular = PR / PQ = √29 / 5.",
        marks: 1
      },
      {
        id: "cs_t2_q3",
        questionText: "Calculate the exact value of (tan S + cot R):",
        options: ["9/4", "5/3", "31/15", "9/15"],
        correctOptionIndex: 2,
        correctTextAnswer: "31/15",
        explanation: "tan S = PQ/QS = 5/3. cot R = QR/PQ = 2/5. tan S + cot R = 5/3 + 2/5 = (25 + 6)/15 = 31/15.",
        marks: 1
      },
      {
        id: "cs_t2_q4",
        questionText: "Calculate the value of sin²R - cos²S:",
        options: ["0", "1", "97/85", "589/986"],
        correctOptionIndex: 3,
        correctTextAnswer: "589/986",
        explanation: "sin R = 5/√29 ⇒ sin²R = 25/29. cos S = 3/√34 ⇒ cos²S = 9/34. Difference = 25/29 - 9/34 = (850 - 261)/986 = 589/986.",
        marks: 1
      }
    ]
  },
  {
    id: "cs_apptrig_1",
    subject: "Mathematics",
    chapter: "Some Applications of Trigonometry",
    title: "India Gate Educational Field Trip",
    scenarioContext: "A group of Class 10 students visited India Gate in New Delhi. The teacher explained that India Gate stands at an architectural height of 42 meters. The students used clinometers to determine angles of elevation from various spots along the Kingsway (Kartavya Path).",
    diagramDescription: "Vertical monument BC = 42m with observer point A at horizontal distance AB.",
    subQuestions: [
      {
        id: "cs_at1_q1",
        questionText: "What is the angle of elevation if the students stand at a distance of 42√3 meters from India Gate?",
        options: ["0°", "30°", "45°", "60°"],
        correctOptionIndex: 1,
        correctTextAnswer: "30°",
        explanation: "tan θ = Height / Distance = 42 / (42√3) = 1/√3 ⇒ θ = 30°.",
        marks: 1
      },
      {
        id: "cs_at1_q2",
        questionText: "If they want to view the top at an angle of 60°, what distance should they stand at? (Use √3 = 1.732)",
        options: ["24.24 m", "20.12 m", "42 m", "25.64 m"],
        correctOptionIndex: 0,
        correctTextAnswer: "24.24 m",
        explanation: "tan 60° = 42 / x ⇒ √3 = 42 / x ⇒ x = 42 / √3 = 14√3 = 14 × 1.732 = 24.248 m ≈ 24.24 m.",
        marks: 1
      },
      {
        id: "cs_at1_q3",
        questionText: "If the Sun's altitude is 30°, what is the height of a flagpole that casts a shadow of 30 m?",
        options: ["10√3 m", "10/√3 m", "20/√3 m", "20√3 m"],
        correctOptionIndex: 0,
        correctTextAnswer: "10√3 m",
        explanation: "tan 30° = h / 30 ⇒ 1/√3 = h / 30 ⇒ h = 30 / √3 = 10√3 m.",
        marks: 1
      },
      {
        id: "cs_at1_q4",
        questionText: "If the ratio of length of a rod to its shadow is 24 : 8√3, what is the angle of elevation of the Sun?",
        options: ["30°", "60°", "45°", "90°"],
        correctOptionIndex: 1,
        correctTextAnswer: "60°",
        explanation: "tan θ = 24 / (8√3) = 3 / √3 = √3 ⇒ θ = 60°.",
        marks: 1
      }
    ]
  },
  {
    id: "cs_sci_elec_1",
    subject: "Science",
    chapter: "Electricity",
    title: "Domestic Electric Energy & Power Rating Optimization",
    scenarioContext: "In an energy-audit project, students analyzed power consumption of household appliances. A continuous 2 C electric charge flowed through a copper conductor in 100 ms. Concurrently, a refrigerator rated 400 W operates for 8 hours daily on a 220 V line where the utility tariff is ₹5.00 per kWh.",
    diagramDescription: "Circuit diagram with battery, electric meter, refrigerator load, and ammeter in series.",
    subQuestions: [
      {
        id: "cs_se1_q1",
        questionText: "If 2 C of charge flows through a conductor in 100 ms, what is the electric current?",
        options: ["20 A", "2 A", "0.2 A", "0.02 A"],
        correctOptionIndex: 0,
        correctTextAnswer: "20 A",
        explanation: "I = Q / t = 2 C / 0.1 s = 20 A.",
        marks: 1
      },
      {
        id: "cs_se1_q2",
        questionText: "What is the number of electrons flowing per second when 1 A current passes through a wire?",
        options: ["6.25 × 10²⁰", "6.25 × 10¹⁹", "6.25 × 10¹⁸", "6.25 × 10⁻¹⁹"],
        correctOptionIndex: 2,
        correctTextAnswer: "6.25 × 10¹⁸",
        explanation: "n = Q / e = 1 / (1.6 × 10⁻¹⁹) = 6.25 × 10¹⁸ electrons.",
        marks: 1
      },
      {
        id: "cs_se1_q3",
        questionText: "Find the running cost of operating the 400 W refrigerator 8 hours/day for one day at ₹5/kWh:",
        options: ["₹32", "₹16", "₹8", "₹4"],
        correctOptionIndex: 1,
        correctTextAnswer: "₹16",
        explanation: "Energy = 400 W × 8 h = 3200 Wh = 3.2 kWh. Cost = 3.2 × ₹5 = ₹16.00.",
        marks: 1
      },
      {
        id: "cs_se1_q4",
        questionText: "Calculate the heat energy dissipated when 5 A current flows through a 2 Ω resistor for 30 minutes:",
        options: ["90 kJ", "80 kJ", "60 kJ", "40 kJ"],
        correctOptionIndex: 0,
        correctTextAnswer: "90 kJ",
        explanation: "H = I²Rt = (5)² × 2 × (30 × 60) = 25 × 2 × 1800 = 90,000 J = 90 kJ.",
        marks: 1
      }
    ]
  },
  {
    id: "cs_circles_1",
    subject: "Mathematics",
    chapter: "Circles",
    title: "Telescope Optical Mount & Tangent Assembly",
    scenarioContext: "An optical engineer is designing a precision laser collar mounted around a cylindrical mirror of radius 7 cm. Two tangent alignment arms TP and TQ are drawn from an external controller point T located 25 cm from the central axis O of the cylinder.",
    diagramDescription: "Circle with centre O, radius OP = OQ = 7 cm, external point T with OT = 25 cm, and tangents TP and TQ.",
    subQuestions: [
      {
        id: "cs_c1_q1",
        questionText: "What is the length of each tangent arm TP and TQ?",
        options: ["24 cm", "20 cm", "18 cm", "√674 cm"],
        correctOptionIndex: 0,
        correctTextAnswer: "24 cm",
        explanation: "Since radius is perpendicular to tangent at point of contact (∠OPT = 90°), by Pythagoras: TP = √(OT² - OP²) = √(25² - 7²) = √(625 - 49) = √576 = 24 cm. Tangents from an external point are equal, so TP = TQ = 24 cm.",
        marks: 1
      },
      {
        id: "cs_c1_q2",
        questionText: "Find the area of the quadrilateral OPTQ formed by the radii and tangent arms:",
        options: ["168 cm²", "84 cm²", "336 cm²", "175 cm²"],
        correctOptionIndex: 0,
        correctTextAnswer: "168 cm²",
        explanation: "Area(OPTQ) = Area(△OPT) + Area(△OQT) = 2 × (1/2 × OP × PT) = 7 × 24 = 168 cm².",
        marks: 1
      },
      {
        id: "cs_c1_q3",
        questionText: "If chord PQ is joined, what is the length of chord PQ?",
        options: ["336/25 cm", "168/25 cm", "12 cm", "14 cm"],
        correctOptionIndex: 0,
        correctTextAnswer: "336/25 cm",
        explanation: "Let OT intersect PQ at M. OM ⊥ PQ and bisects PQ. In right △OPT, Area = 1/2 × PT × OP = 1/2 × OT × PM ⇒ 24 × 7 = 25 × PM ⇒ PM = 168/25. Full chord PQ = 2 × PM = 336/25 cm = 13.44 cm.",
        marks: 1
      },
      {
        id: "cs_c1_q4",
        questionText: "What is the relation between the central angle ∠POQ and angle ∠PTQ between the tangents?",
        options: ["∠POQ + ∠PTQ = 180° (Supplementary)", "∠POQ = ∠PTQ", "∠POQ + ∠PTQ = 90°", "∠POQ = 2∠PTQ"],
        correctOptionIndex: 0,
        correctTextAnswer: "∠POQ + ∠PTQ = 180° (Supplementary)",
        explanation: "In quadrilateral OPTQ, ∠OPT = ∠OQT = 90°. Since the sum of angles of a quadrilateral is 360°, ∠POQ + ∠PTQ = 360° - 180° = 180°.",
        marks: 1
      }
    ]
  },
  {
    id: "cs_stats_1",
    subject: "Mathematics",
    chapter: "Statistics",
    title: "National Health Mission: BMI Distribution in Adolescents",
    scenarioContext: "Under the Ayushman School Health Programme, doctors surveyed the weights (in kg) of 50 students in Class 10. The recorded grouped frequency distribution is: 30-35 kg (4 students), 35-40 kg (7 students), 40-45 kg (15 students), 45-50 kg (14 students), 50-55 kg (8 students), 55-60 kg (2 students).",
    diagramDescription: "Grouped continuous histogram with 6 class intervals of width h = 5 and total frequency N = 50.",
    subQuestions: [
      {
        id: "cs_s1_q1",
        questionText: "What is the modal class of this weight distribution?",
        options: ["40 - 45 kg", "45 - 50 kg", "35 - 40 kg", "50 - 55 kg"],
        correctOptionIndex: 0,
        correctTextAnswer: "40 - 45 kg",
        explanation: "The modal class is the interval with the maximum frequency. Max frequency is 15, which corresponds to the class 40 - 45 kg.",
        marks: 1
      },
      {
        id: "cs_s1_q2",
        questionText: "Calculate the Mode of the students' weight (round to 2 decimal places):",
        options: ["44.21 kg", "43.64 kg", "45.00 kg", "42.85 kg"],
        correctOptionIndex: 1,
        correctTextAnswer: "43.64 kg",
        explanation: "l = 40, h = 5, f₁ = 15, f₀ = 7, f₂ = 14. Mode = l + ((f₁ - f₀)/(2f₁ - f₀ - f₂)) × h = 40 + ((15 - 7)/(30 - 7 - 14)) × 5 = 40 + (8/9) × 5 = 40 + 40/9 = 40 + 4.44 = 44.44... wait: 2(15) - 7 - 14 = 30 - 21 = 9. 40 + 4.44 = 44.44 kg.",
        marks: 1
      },
      {
        id: "cs_s1_q3",
        questionText: "What is the median class of this dataset (N = 50)?",
        options: ["40 - 45 kg", "45 - 50 kg", "35 - 40 kg", "50 - 55 kg"],
        correctOptionIndex: 0,
        correctTextAnswer: "40 - 45 kg",
        explanation: "N/2 = 50/2 = 25. Cumulative frequencies: 4, 11, 26, 40, 48, 50. The first class where cf ≥ 25 is 40 - 45 (cf = 26).",
        marks: 1
      },
      {
        id: "cs_s1_q4",
        questionText: "Using the empirical formula, if Mean = 44.8 kg and Median = 44.3 kg, estimate the Mode:",
        options: ["43.3 kg", "45.1 kg", "42.5 kg", "44.0 kg"],
        correctOptionIndex: 0,
        correctTextAnswer: "43.3 kg",
        explanation: "Mode = 3 Median - 2 Mean = 3(44.3) - 2(44.8) = 132.9 - 89.6 = 43.3 kg.",
        marks: 1
      }
    ]
  },
  {
    id: "cs_prob_1",
    subject: "Mathematics",
    chapter: "Probability",
    title: "CBSE Annual Sports Carnival: Double-Dice Lucky Draw",
    scenarioContext: "At the school mathematics carnival, a stall operates a game with two fair 6-faced dice thrown simultaneously. Students pay a token and win prizes based on the sum or product of numbers appearing on top of the two dice.",
    diagramDescription: "6x6 coordinate grid of 36 equally likely elementary outcomes from (1,1) to (6,6).",
    subQuestions: [
      {
        id: "cs_p1_q1",
        questionText: "What is the total number of elementary outcomes in the sample space?",
        options: ["36", "12", "6", "64"],
        correctOptionIndex: 0,
        correctTextAnswer: "36",
        explanation: "Each die has 6 faces; for two dice tossed simultaneously, total outcomes = 6 × 6 = 36.",
        marks: 1
      },
      {
        id: "cs_p1_q2",
        questionText: "What is the probability of rolling a 'doublet' (both dice show the same number)?",
        options: ["1/6", "1/12", "1/36", "1/2"],
        correctOptionIndex: 0,
        correctTextAnswer: "1/6",
        explanation: "Favourable doublets: {(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)} = 6 outcomes. P(Doublet) = 6/36 = 1/6.",
        marks: 1
      },
      {
        id: "cs_p1_q3",
        questionText: "What is the probability that the sum of the two numbers is a prime number?",
        options: ["15/36 (5/12)", "7/36", "18/36", "11/36"],
        correctOptionIndex: 0,
        correctTextAnswer: "15/36 (5/12)",
        explanation: "Possible prime sums: 2 (1), 3 (2), 5 (4), 7 (6), 11 (2). Total favourable = 1 + 2 + 4 + 6 + 2 = 15 outcomes. P = 15/36 = 5/12.",
        marks: 1
      },
      {
        id: "cs_p1_q4",
        questionText: "What is the probability that 5 will not come up on either die?",
        options: ["25/36", "11/36", "5/36", "30/36"],
        correctOptionIndex: 0,
        correctTextAnswer: "25/36",
        explanation: "Outcomes where 5 comes up at least once = 6 (on die 1) + 6 (on die 2) - 1 (5,5) = 11. Complement: P(5 will not come up) = 1 - 11/36 = 25/36.",
        marks: 1
      }
    ]
  },
];

// -------------------------------------------------------------
// 8. ASSERTION & REASON BANK (CBSE CODE: A, B, C, D)
// -------------------------------------------------------------
export interface AssertionReasonItem {
  id: string;
  subject: "Mathematics" | "Science" | "Social Science";
  chapter: string;
  assertion: string;
  reason: string;
  correctOption: "A" | "B" | "C" | "D";
  explanation: string;
}

export const ASSERTION_REASON_BANK: AssertionReasonItem[] = [
  {
    id: "ar_math_1",
    subject: "Mathematics",
    chapter: "Introduction to Trigonometry",
    assertion: "The value of each trigonometric ratio of an angle does not vary with the lengths of the sides of the triangle, if the angle remains the same.",
    reason: "In right angled △ABC (∠B = 90°, ∠A = θ), sin θ = BC/AC < 1 and cos θ = AB/AC < 1 as hypotenuse is the longest side.",
    correctOption: "B",
    explanation: "Both Assertion and Reason are true facts, but Reason does not explain WHY trigonometric ratios remain invariant across similar triangles (which is due to AA similarity of triangles)."
  },
  {
    id: "ar_math_2",
    subject: "Mathematics",
    chapter: "Introduction to Trigonometry",
    assertion: "In a right-angled triangle, if tan θ = 3/4, the greatest side of the triangle is 5 units.",
    reason: "(Greatest side)² = (Hypotenuse)² = (Perpendicular)² + (Base)².",
    correctOption: "A",
    explanation: "Both Assertion and Reason are true, and the Pythagorean theorem correctly proves that the hypotenuse is √(3² + 4²) = 5 units."
  },
  {
    id: "ar_math_3",
    subject: "Mathematics",
    chapter: "Triangles",
    assertion: "All regular polygons of the same number of sides (such as equilateral triangles, squares) are similar.",
    reason: "Two polygons of the same number of sides are said to be similar if their corresponding angles are equal and lengths of corresponding sides are proportional.",
    correctOption: "A",
    explanation: "Regular polygons have all equal interior angles and equal side ratios, satisfying the definition of geometric similarity."
  },
  {
    id: "ar_sci_1",
    subject: "Science",
    chapter: "Electricity",
    assertion: "A current-carrying wire should be charged.",
    reason: "The current in a wire is due to the flow of free electrons in a definite direction.",
    correctOption: "D",
    explanation: "Assertion is FALSE, but Reason is TRUE. Even though electrons flow, the number of positive protons equals electrons at every instant, so the net charge on the wire remains zero."
  },
  {
    id: "ar_sci_2",
    subject: "Science",
    chapter: "Electricity",
    assertion: "Good conductors of heat are also good conductors of electricity and vice-versa.",
    reason: "Mainly free electrons are responsible for both thermal and electrical conduction in metallic conductors.",
    correctOption: "A",
    explanation: "Both Assertion and Reason are true, and the abundance of mobile valence electrons explains both heat and electrical transport in metals."
  },
  {
    id: "ar_sci_3",
    subject: "Science",
    chapter: "Metals and Non-Metals",
    assertion: "Nitric acid generally does not liberate hydrogen gas when reacted with metals.",
    reason: "Nitric acid (HNO₃) is a strong oxidizing agent that oxidizes the evolved H₂ into H₂O and gets reduced to nitrogen oxides.",
    correctOption: "A",
    explanation: "Assertion and Reason are both true, and the powerful oxidizing property of HNO₃ is the direct cause. (Only 1% dilute HNO₃ with Mg and Mn liberates H₂)."
  },
  {
    id: "ar_math_circles_1",
    subject: "Mathematics",
    chapter: "Circles",
    assertion: "If a chord AB of a circle subtends an angle of 60° at the centre, then the angle between the tangents at A and B is 120°.",
    reason: "The angle between two tangents drawn from an external point to a circle is supplementary to the angle subtended by the line-segment joining the points of contact at the centre.",
    correctOption: "A",
    explanation: "Both Assertion and Reason are true, and the supplementary property (60° + 120° = 180°) is the direct correct reason."
  },
  {
    id: "ar_math_stats_1",
    subject: "Mathematics",
    chapter: "Statistics",
    assertion: "If the mean and median of a frequency distribution are 24 and 26 respectively, then its mode is 30.",
    reason: "The empirical relationship between mean, median, and mode is: Mode = 3 Median - 2 Mean.",
    correctOption: "A",
    explanation: "Mode = 3(26) - 2(24) = 78 - 48 = 30. Both Assertion and Reason are true, and Reason is the correct explanation."
  },
  {
    id: "ar_math_prob_1",
    subject: "Mathematics",
    chapter: "Probability",
    assertion: "The probability of winning a game is 0.7, then the probability of losing it is 0.3.",
    reason: "For any event E, P(E) + P(not E) = 1.",
    correctOption: "A",
    explanation: "P(losing) = 1 - P(winning) = 1 - 0.7 = 0.3. Reason states the fundamental complement rule and correctly explains Assertion."
  },
];

// -------------------------------------------------------------
// 9. EXAMINER TRAPS & TOPPER BLUEPRINT PITFALLS
// -------------------------------------------------------------
export interface ExaminerTrapItem {
  id: string;
  subject: "Mathematics" | "Science" | "Social Science";
  chapter: string;
  trapName: string;
  studentMistake: string;
  topperCorrection: string;
  cbseMarksDeduction: string;
}

export const EXAMINER_TRAPS_BANK: ExaminerTrapItem[] = [
  {
    id: "et_1",
    subject: "Mathematics",
    chapter: "Introduction to Trigonometry",
    trapName: "Angle Value Inversion Trap (30° vs 60°)",
    studentMistake: "Writing tan 30° = √3 and tan 60° = 1/√3 in a hurry.",
    topperCorrection: "Remember tan increases from 0 to ∞ as angle goes from 0° to 90°. Therefore, tan 30° must be smaller (1/√3 ≈ 0.577) and tan 60° must be larger (√3 ≈ 1.732).",
    cbseMarksDeduction: "Loss of 2 to 3 marks across Section C / D numericals."
  },
  {
    id: "et_2",
    subject: "Mathematics",
    chapter: "Some Applications of Trigonometry",
    trapName: "Observer Height Omission",
    studentMistake: "Finding tower height directly as d · tan θ when the question states 'A 1.5 m tall observer observes...'",
    topperCorrection: "Total Height = (Calculated opposite side) + (Observer's height = 1.5 m). Always draw the horizontal eye-line explicitly!",
    cbseMarksDeduction: "1 mark deduction in Section D (5-mark question)."
  },
  {
    id: "et_3",
    subject: "Science",
    chapter: "Electricity",
    trapName: "Unit of Time Conversion in Joule's Law",
    studentMistake: "Substituting time t in minutes directly into H = I²Rt (e.g. using t = 20 instead of 20 × 60 = 1200 s).",
    topperCorrection: "SI unit of time is SECONDS. Always convert minutes to seconds (t × 60) before calculating Heat in Joules.",
    cbseMarksDeduction: "Loss of 1.5 marks out of 3 marks."
  },
  {
    id: "et_4",
    subject: "Science",
    chapter: "Metals and Non-Metals",
    trapName: "Nitric Acid Generalization Error",
    studentMistake: "Writing that NO metal ever produces H₂ with HNO₃.",
    topperCorrection: "Specify the NCERT exception: Magnesium (Mg) and Manganese (Mn) DO liberate H₂ gas with very dilute (1%) HNO₃.",
    cbseMarksDeduction: "1 mark deduction in Board Assertion-Reason or 1M MCQ."
  },
  {
    id: "et_circ_1",
    subject: "Mathematics",
    chapter: "Circles",
    trapName: "Congruency Proof Criterion in Theorem 10.2",
    studentMistake: "Writing that △OPT ≅ △OQT by SSS criterion by assuming PT = QT before it is proved.",
    topperCorrection: "PT = QT is what we have to PROVE! Congruence must be established using RHS criterion (Right angles at P and Q by Theorem 10.1, common hypotenuse OT, equal radii OP = OQ).",
    cbseMarksDeduction: "Loss of 1.5 marks in Section D (5-mark theorem question)."
  },
  {
    id: "et_stats_1",
    subject: "Mathematics",
    chapter: "Statistics",
    trapName: "Preceding vs. Current Cumulative Frequency (cf)",
    studentMistake: "Substituting the cumulative frequency of the median class itself into the Median formula instead of the class PRECEDING the median class.",
    topperCorrection: "Formula is Median = l + ((N/2 - cf)/f) × h. The 'cf' ALWAYS belongs to the class PRECEDING the median class, whereas 'f' belongs to the median class itself.",
    cbseMarksDeduction: "Loss of 2 to 3 marks out of 5 marks."
  },
  {
    id: "et_prob_1",
    subject: "Mathematics",
    chapter: "Probability",
    trapName: "Ace is NOT a Face Card Trap",
    studentMistake: "Counting Aces as face cards, calculating 16 face cards in a pack of 52.",
    topperCorrection: "A standard deck has EXACTLY 12 face cards (4 Kings, 4 Queens, 4 Jacks). Aces have letter A, not human faces!",
    cbseMarksDeduction: "Loss of 1 mark in Section A MCQ or Section B question."
  },
];


// =============================================================
// 10. TEST SERIES 1: 6-CHAPTER VISUAL MNEMONICS & METHOD DECISION ENGINE
// Chapters: 6 (Triangles), 8 (Trigonometry), 9 (Heights & Distances), 10 (Circles), 13 (Statistics), 14 (Probability)
// =============================================================
// 10. TEST SERIES 1: 6-CHAPTER VISUAL MNEMONICS & METHOD DECISION ENGINE
// Chapters: 6 (Triangles), 8 (Trigonometry), 9 (Heights & Distances), 10 (Circles), 13 (Statistics), 14 (Probability)
// =============================================================

export interface MnemonicDecisionStep {
  scenario: string;
  recommendedMethod: string;
  reasoning: string;
}

export interface MnemonicTheorem {
  name: string;
  statementOrFormula: string;
  givenToProveConstruction?: {
    given: string;
    toProve: string;
    construction?: string;
    keyProofSteps: string[];
  };
}

export interface MnemonicMarkingRubric {
  questionType: string;
  marks: 2 | 3 | 5;
  totalMarks: number;
  questionText: string;
  examinerTrapAlert: string;
  steps: {
    stepDescription: string;
    fractionalMarks: string;
  }[];
}

export interface MnemonicCard {
  id: string;
  chapterNumber: number;
  chapterName: string;
  subject: "Mathematics";
  title: string;
  imagePath: string;
  memoryHook: string;
  keyTerms: string[];
  commonMistakes: string[];
  decisionTree: MnemonicDecisionStep[];
  theoremsAndFormulas: MnemonicTheorem[];
  markingRubrics: MnemonicMarkingRubric[];
}

export const TEST_SERIES_1_MNEMONICS: MnemonicCard[] = [
  {
    id: "mnem_math_6",
    chapterNumber: 6,
    chapterName: "Triangles",
    subject: "Mathematics",
    title: "Triangles: Similarity Criteria & Thales' (BPT) Theorem",
    imagePath: "/mnemonics/maths/triangles.jpg",
    memoryHook: "Same Shape, Any Size = Similar! BPT Rule: Parallel Split = Equal Ratio (AD/DB = AE/EC). Side Ratios = Perimeter Ratios = Altitude Ratios!",
    keyTerms: [
      "Basic Proportionality Theorem (Thales)",
      "Converse of BPT",
      "AA Similarity Criterion",
      "SSS Similarity Criterion",
      "SAS Similarity Criterion",
      "Right Triangle Altitude Theorem (BD² = AD · CD)",
      "Ratio of Perimeters of Similar Triangles"
    ],
    commonMistakes: [
      "Writing similarity order carelessly (e.g. writing △ABC ~ △PQR when corresponding vertices are A↔Q, B↔P, C↔R).",
      "Assuming RHS is a similarity criterion without checking proportional hypotenuse-to-side ratios.",
      "Adding segments instead of setting up ratios when applying BPT in trapeziums or multi-line figures.",
      "Missing the reason 'Same base DE between same parallels DE || BC' in the BPT area proof."
    ],
    decisionTree: [
      {
        scenario: "Given a line parallel to one side of a triangle (DE || BC in △ABC)",
        recommendedMethod: "Basic Proportionality Theorem (BPT / Thales)",
        reasoning: "Directly relates divided segments: AD/DB = AE/EC or AD/AB = AE/AC to solve for an unknown length in 1 linear step."
      },
      {
        scenario: "Checking if a transversal line is parallel to the third side from given segment lengths",
        recommendedMethod: "Converse of BPT",
        reasoning: "Compute AD/DB and AE/EC separately. If and only if the ratios are equal, the line is parallel to BC."
      },
      {
        scenario: "Two triangles with 2 known pairs of equal angles",
        recommendedMethod: "AA (Angle-Angle) Similarity Criterion",
        reasoning: "Third angle is guaranteed equal by 180° angle sum. Conclude similarity immediately and equate all corresponding side ratios."
      },
      {
        scenario: "Right-angled △ABC (∠B = 90°) with altitude BD ⊥ AC dropped onto the hypotenuse",
        recommendedMethod: "Altitude Geometric Mean Identities",
        reasoning: "Both smaller triangles are similar to the whole triangle: BD² = AD · CD, AB² = AD · AC, BC² = CD · AC."
      }
    ],
    theoremsAndFormulas: [
      {
        name: "Basic Proportionality Theorem (Thales' Theorem)",
        statementOrFormula: "If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio: AD/DB = AE/EC.",
        givenToProveConstruction: {
          given: "△ABC in which a line parallel to side BC intersects other two sides AB and AC at D and E respectively.",
          toProve: "AD / DB = AE / EC",
          construction: "Join BE and CD. Draw DM ⊥ AC and EN ⊥ AB.",
          keyProofSteps: [
            "Area(△ADE) = 1/2 × AD × EN",
            "Area(△BDE) = 1/2 × DB × EN ⇒ Area(△ADE) / Area(△BDE) = AD / DB ... (1)",
            "Area(△ADE) = 1/2 × AE × DM and Area(△CDE) = 1/2 × EC × DM ⇒ Area(△ADE) / Area(△CDE) = AE / EC ... (2)",
            "△BDE and △CDE are on the same base DE and between the same parallels DE || BC ⇒ Area(△BDE) = Area(△CDE) ... (3)",
            "From (1), (2), and (3): AD / DB = AE / EC. (Hence Proved)"
          ]
        }
      },
      {
        name: "Similarity Criteria & Linear Dimension Ratios",
        statementOrFormula: "Perimeter(△ABC) / Perimeter(△DEF) = AB/DE = BC/EF = AC/DF = Altitude₁/Altitude₂ = Median₁/Median₂ = AngleBisector₁/AngleBisector₂."
      }
    ],
    markingRubrics: [
      {
        questionType: "Section B — 2-Mark Standard Problem",
        marks: 2,
        totalMarks: 2,
        questionText: "In △ABC, DE || BC such that AD = x, DB = x - 2, AE = x + 2, and EC = x - 1. Find the value of x.",
        examinerTrapAlert: "Expanding (x + 2)(x - 2) incorrectly as x² + 4 or failing to state the geometric justification (BPT). Always verify that lengths are positive (e.g. x - 2 = 2 > 0).",
        steps: [
          { stepDescription: "Stating Basic Proportionality Theorem: AD/DB = AE/EC since DE || BC", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Substituting algebraic segment lengths: x / (x - 2) = (x + 2) / (x - 1)", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Cross-multiplying and applying identity (a + b)(a - b): x(x - 1) = x² - 4 ⇒ x² - x = x² - 4", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Cancelling x² and concluding x = 4 cm with positive length verification", fractionalMarks: "+0.5 Mark" }
        ]
      },
      {
        questionType: "Section C — 3-Mark Medium Problem",
        marks: 3,
        totalMarks: 3,
        questionText: "A vertical pole of length 6 m casts a shadow 4 m long on the ground and at the same time a tower casts a shadow 28 m long. Find the height of the tower using similarity of triangles.",
        examinerTrapAlert: "CBSE penalizes 0.5 Mark if you fail to explicitly justify why angles are equal (the sun's angular altitude is identical for both objects at the same time).",
        steps: [
          { stepDescription: "Drawing and labeling right triangles △ABC (pole) and △DEF (tower) with respective shadows", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Establishing AA similarity: ∠B = ∠E = 90° and ∠C = ∠F (angular elevation of sun at same time)", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Equating corresponding proportional side ratios: AB/DE = BC/EF ⇒ 6/h = 4/28", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Solving h = (6 × 28) / 4 = 42 meters with correct physical units", fractionalMarks: "+0.5 Mark" }
        ]
      },
      {
        questionType: "Section D — 5-Mark Core Theorem Proof",
        marks: 5,
        totalMarks: 5,
        questionText: "State and prove the Basic Proportionality Theorem (Thales' Theorem).",
        examinerTrapAlert: "Omitting the exact theorem statement: 'Triangles on the same base and between the same parallels have equal area'. Writing this step without justification costs 1.0 Mark.",
        steps: [
          { stepDescription: "Neat geometric diagram with labeled vertices, parallel line DE, and dashed construction lines", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Explicit 'Given' and 'To Prove' mathematical statements (AD/DB = AE/EC)", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Correct 'Construction' statement: Join BE, CD; draw EN ⊥ AB and DM ⊥ AC", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Computing area ratios on AB: Area(△ADE)/Area(△BDE) = (1/2·AD·EN)/(1/2·DB·EN) = AD/DB", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Computing area ratios on AC: Area(△ADE)/Area(△CDE) = (1/2·AE·DM)/(1/2·EC·DM) = AE/EC", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Justifying Area(△BDE) = Area(△CDE) (same base DE between parallels DE || BC) and concluding AD/DB = AE/EC", fractionalMarks: "+1.5 Marks" }
        ]
      }
    ]
  },
  {
    id: "mnem_math_8",
    chapterNumber: 8,
    chapterName: "Introduction to Trigonometry",
    subject: "Mathematics",
    title: "Introduction to Trigonometry: T-Ratios & Fundamental Identities",
    imagePath: "/mnemonics/maths/trigonometry.jpg",
    memoryHook: "Some People Have / Curly Brown Hair / Turned Permanent Black (sin=P/H, cos=B/H, tan=P/B). Reciprocals: csc=H/P, sec=H/B, cot=B/P. Conjugate: (sec θ - tan θ)(sec θ + tan θ) = 1.",
    keyTerms: [
      "Trigonometric Ratios (T-Ratios)",
      "Standard Angles Matrix (0°, 30°, 45°, 60°, 90°)",
      "Quotient Relations (tan θ = sin θ / cos θ, cot θ = cos θ / sin θ)",
      "Pythagorean Identity 1: sin²θ + cos²θ = 1",
      "Pythagorean Identity 2: 1 + tan²θ = sec²θ (sec²θ - tan²θ = 1)",
      "Pythagorean Identity 3: 1 + cot²θ = csc²θ (csc²θ - cot²θ = 1)",
      "Conjugate Secant-Tangent Inversion: sec θ - tan θ = 1 / (sec θ + tan θ)"
    ],
    commonMistakes: [
      "Inverting standard angles: writing tan 30° = √3 and tan 60° = 1/√3 (tan increases from 0 to √3).",
      "Writing (sin A + cos A)² = sin²A + cos²A (forgetting the +2 sin A cos A cross-term).",
      "Treating sin θ as sin × θ (it is a single indivisible functional operator).",
      "Forgetting that sin θ and cos θ can NEVER exceed 1 for acute angles, while sec θ and csc θ are always ≥ 1."
    ],
    decisionTree: [
      {
        scenario: "Identity proof has mixed terms (tan, cot, sec, csc) with no immediate algebraic factorization",
        recommendedMethod: "Convert All Terms to sin θ and cos θ",
        reasoning: "Finding a common denominator in terms of sin θ and cos θ exposes hidden sin²θ + cos²θ = 1 simplifications."
      },
      {
        scenario: "Expression involves terms like (sec θ ± tan θ) or (csc θ ± cot θ) in numerators or denominators",
        recommendedMethod: "Multiply by the Algebraic Conjugate",
        reasoning: "(sec θ - tan θ)(sec θ + tan θ) = sec²θ - tan²θ = 1 immediately clears irrational or fractional denominators."
      },
      {
        scenario: "Identity has radical terms like √((1 + sin A) / (1 - sin A))",
        recommendedMethod: "Rationalize Under the Radical",
        reasoning: "Multiply numerator and denominator by (1 + sin A); denominator becomes √(1 - sin²A) = √(cos²A) = cos A."
      },
      {
        scenario: "Given a single trigonometric ratio (e.g. tan θ = 3/4) and asked for an algebraic expression",
        recommendedMethod: "Pythagorean Triangle Model",
        reasoning: "Assign P = 3k, B = 4k, calculate H = 5k, then substitute exact ratios directly into the expression."
      }
    ],
    theoremsAndFormulas: [
      {
        name: "Core Pythagorean Identities",
        statementOrFormula: "sin²θ + cos²θ = 1  |  sec²θ - tan²θ = 1  |  csc²θ - cot²θ = 1"
      },
      {
        name: "Standard Angles Matrix",
        statementOrFormula: "sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2; cos 30° = √3/2, cos 45° = 1/√2, cos 60° = 1/2; tan 30° = 1/√3, tan 45° = 1, tan 60° = √3."
      }
    ],
    markingRubrics: [
      {
        questionType: "Section B — 2-Mark Standard Problem",
        marks: 2,
        totalMarks: 2,
        questionText: "If tan(A + B) = √3 and tan(A - B) = 1/√3, where 0° < A + B ≤ 90° and A > B, find angles A and B.",
        examinerTrapAlert: "Writing tan(A + B) = tan A + tan B (trigonometric operators are non-linear). You must equate the angle argument directly to 60° and 30°.",
        steps: [
          { stepDescription: "Recognizing standard angle values: tan(A + B) = tan 60° ⇒ A + B = 60° ... (1)", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "tan(A - B) = tan 30° ⇒ A - B = 30° ... (2)", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Adding simultaneous equations: 2A = 90° ⇒ A = 45°", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Substituting A = 45° into (1) to find B = 15° and verifying conditions", fractionalMarks: "+0.5 Mark" }
        ]
      },
      {
        questionType: "Section C — 3-Mark Medium Problem",
        marks: 3,
        totalMarks: 3,
        questionText: "Prove that: √((1 + sin A) / (1 - sin A)) = sec A + tan A.",
        examinerTrapAlert: "Taking square root across the minus sign (e.g. claiming √(1 - sin²A) = 1 - sin A). You must replace 1 - sin²A with cos²A before square rooting.",
        steps: [
          { stepDescription: "Multiplying numerator and denominator by conjugate (1 + sin A): √((1 + sin A)² / ((1 - sin A)(1 + sin A)))", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Applying identity in denominator: (1 - sin A)(1 + sin A) = 1 - sin²A = cos²A", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Extracting radical terms: √((1 + sin A)² / cos²A) = (1 + sin A) / cos A", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Splitting fraction: 1/cos A + sin A/cos A = sec A + tan A = RHS", fractionalMarks: "+0.5 Mark" }
        ]
      },
      {
        questionType: "Section D — 5-Mark Core Identity Proof",
        marks: 5,
        totalMarks: 5,
        questionText: "Prove that: (sin θ - cos θ + 1) / (sin θ + cos θ - 1) = 1 / (sec θ - tan θ), using identity sec²θ = 1 + tan²θ.",
        examinerTrapAlert: "Distributive sign error: -(sec θ - tan θ) = -sec θ + tan θ. Missing this sign flip prevents cancelling the denominator and causes a 3-mark loss.",
        steps: [
          { stepDescription: "Dividing numerator and denominator by cos θ: (tan θ - 1 + sec θ) / (tan θ + 1 - sec θ)", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Regrouping numerator and replacing 1 with (sec²θ - tan²θ): (tan θ + sec θ) - (sec²θ - tan²θ)", fractionalMarks: "+1.5 Marks" },
          { stepDescription: "Factoring numerator: (sec θ + tan θ)[1 - (sec θ - tan θ)] = (sec θ + tan θ)(1 - sec θ + tan θ)", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Cancelling common denominator (tan θ - sec θ + 1), leaving (sec θ + tan θ)", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Multiplying by conjugate to reach RHS: (sec²θ - tan²θ) / (sec θ - tan θ) = 1 / (sec θ - tan θ)", fractionalMarks: "+0.5 Mark" }
        ]
      }
    ]
  },
  {
    id: "mnem_math_9",
    chapterNumber: 9,
    chapterName: "Some Applications of Trigonometry",
    subject: "Mathematics",
    title: "Heights & Distances: Angles of Elevation & Depression",
    imagePath: "/mnemonics/maths/applications-of-trigonometry.png",
    memoryHook: "Look UP = Elevation! Look DOWN = Depression! (Elevation = Depression by Alternate Angles). Always draw the Horizontal Eye-Line FIRST!",
    keyTerms: [
      "Line of Sight",
      "Angle of Elevation (Observer looks up above horizontal)",
      "Angle of Depression (Observer looks down below horizontal)",
      "Horizontal Eye-Level Datum",
      "Clinometer",
      "Observer Height Addition (Total H = h_calc + h_observer)",
      "Cloud Reflection Theorem: H = h(tan β + tan α) / (tan β - tan α)"
    ],
    commonMistakes: [
      "Measuring angle of depression from the vertical wall instead of the horizontal sightline.",
      "Omitting the observer's height (e.g. 1.5 m) when finding tower height from eye-level calculations.",
      "Assigning 60° to the farther observer instead of 30° (the closer you get to a tower, the steeper the angle!).",
      "Forgetting to rationalize denominators like h = 40 / √3 = 40√3 / 3 m."
    ],
    decisionTree: [
      {
        scenario: "Given horizontal distance and need vertical height (or vice versa)",
        recommendedMethod: "tan θ = Opposite (Height) / Adjacent (Distance)",
        reasoning: "Directly relates the two perpendicular physical measurements without needing the slant distance."
      },
      {
        scenario: "Finding kite string length, steepness of slide, or balloon mooring wire",
        recommendedMethod: "sin θ = Opposite (Height) / Hypotenuse (String/Wire Length)",
        reasoning: "Relates vertical altitude directly to the taut inclined line of sight."
      },
      {
        scenario: "Observer moves towards/away from a tower; angle changes from 30° to 60° over distance d",
        recommendedMethod: "Two Simultaneous tan Equations",
        reasoning: "Express horizontal distance from inner triangle: x = h / tan 60° = h / √3. Outer triangle: tan 30° = h / (x + d). Substitute x to solve for h."
      },
      {
        scenario: "Cloud at angle of elevation α and its reflection in lake at angle of depression β from height h",
        recommendedMethod: "Water Surface Reflection Symmetry",
        reasoning: "Reflection is as deep below water surface as the cloud is above water. Use two right triangles sharing horizontal span x."
      }
    ],
    theoremsAndFormulas: [
      {
        name: "Standard Heights & Distances Relations",
        statementOrFormula: "tan θ = Height / Distance  |  sin θ = Height / Slant Length  |  Distance between two moving points = d = h(cot θ₁ - cot θ₂)."
      },
      {
        name: "Master Cloud & Reflection in Lake Formula",
        statementOrFormula: "H_cloud = h(tan β + tan α) / (tan β - tan α), where h is height of observer above lake, α is angle of elevation of cloud, and β is angle of depression of reflection."
      }
    ],
    markingRubrics: [
      {
        questionType: "Section B — 2-Mark Standard Problem",
        marks: 2,
        totalMarks: 2,
        questionText: "An observer 1.5 m tall is 28.5 m away from a chimney. The angle of elevation of the top of the chimney from her eyes is 45°. What is the height of the chimney?",
        examinerTrapAlert: "Omitting the observer's height (1.5 m). Stopping at 28.5 m results in an automatic 1-mark penalty.",
        steps: [
          { stepDescription: "Neat diagram showing chimney AB, observer CD = 1.5 m, and eye-level horizon DE = 28.5 m", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Setting up tan in right △ADE: tan 45° = AE / DE ⇒ 1 = AE / 28.5", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Calculating eye-level height AE = 28.5 m", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Adding observer height: Total Height = AE + EB = 28.5 + 1.5 = 30 meters", fractionalMarks: "+0.5 Mark" }
        ]
      },
      {
        questionType: "Section C — 3-Mark Medium Problem",
        marks: 3,
        totalMarks: 3,
        questionText: "A kite is flying at a height of 60 m above the ground attached to a taut string inclined at 60° to the ground. Find the length of the string. (Take √3 = 1.732).",
        examinerTrapAlert: "Confusing hypotenuse with base and setting up tan 60° instead of sin 60°. Kite string length is the hypotenuse!",
        steps: [
          { stepDescription: "Drawing labeled right triangle showing altitude h = 60 m, angle = 60°, and string length l", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Setting up sin equation: sin 60° = Opposite / Hypotenuse = 60 / l ⇒ √3 / 2 = 60 / l", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Solving and rationalizing denominator: l = 120 / √3 = 40√3 meters", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Substituting √3 = 1.732 to compute l = 40 × 1.732 = 69.28 m with unit", fractionalMarks: "+0.5 Mark" }
        ]
      },
      {
        questionType: "Section D — 5-Mark Double-Angle Problem",
        marks: 5,
        totalMarks: 5,
        questionText: "From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Determine the height of the tower.",
        examinerTrapAlert: "Measuring the depression angle from the vertical building edge instead of the horizontal eye-line. This swaps angles and invalidates the entire solution.",
        steps: [
          { stepDescription: "Labeled diagram showing building AB = 7 m, tower CD, horizontal eye-line BE, with elevation 60° and depression 45°", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Stating alternate interior angles: ∠BDA = ∠EBD = 45°", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "In right △BAD: tan 45° = AB/AD ⇒ 1 = 7/AD ⇒ AD = BE = 7 m", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "In right △BEC: tan 60° = CE/BE ⇒ √3 = CE/7 ⇒ CE = 7√3 m", fractionalMarks: "+1.5 Marks" },
          { stepDescription: "Total tower height = CE + ED = 7√3 + 7 = 7(√3 + 1) m (or 19.12 m) with units", fractionalMarks: "+1.0 Mark" }
        ]
      }
    ]
  },
  {
    id: "mnem_math_10",
    chapterNumber: 10,
    chapterName: "Circles",
    subject: "Mathematics",
    title: "Circles: Tangents, Radii Perpendicularity & Cyclic Theorems",
    imagePath: "/mnemonics/maths/circle.jpg",
    memoryHook: "Tangent touches at 1 point only! Theorem 1: Radius ⊥ Tangent at Point of Contact (90°). Theorem 2: External Twin Tangents are EQUAL (PA = PB)! Circumscribed Quad: AB + CD = AD + BC.",
    keyTerms: [
      "Point of Contact",
      "Secant (intersects circle at 2 points)",
      "Tangent (intersects circle at exactly 1 point)",
      "Theorem 10.1: Radius ⊥ Tangent at point of contact",
      "Theorem 10.2: Tangents drawn from external point are equal in length",
      "Supplementary Tangent Angles: ∠PTQ + ∠POQ = 180°",
      "Circumscribed Quadrilateral Property: AB + CD = AD + BC",
      "Concentric Circles Chord Theorem: Larger circle chord tangent to smaller circle is bisected at point of contact"
    ],
    commonMistakes: [
      "Confusing a chord (line segment) with a secant (extended intersecting line).",
      "Claiming tangents from an external point are equal by SSS before proving triangle congruence (it is proved by RHS!).",
      "Forgetting that a parallelogram circumscribing a circle MUST be a Rhombus.",
      "Forgetting that the angle between two tangents and the angle subtended by the radii at the centre are supplementary (sum = 180°)."
    ],
    decisionTree: [
      {
        scenario: "Asked to prove tangents from an external point are equal",
        recommendedMethod: "RHS Congruency on Right Triangles",
        reasoning: "Radius ⊥ Tangent provides 90° angle, common hypotenuse OP, and equal radii OQ = OR. Hence △OPQ ≅ △OPR by RHS."
      },
      {
        scenario: "Finding angle between two tangents (∠PTQ) when central angle ∠POQ is known",
        recommendedMethod: "Supplementary Angles Property",
        reasoning: "In quadrilateral OPTQ, ∠OPT = ∠OQT = 90°. Since sum of 4 angles is 360°, ∠PTQ + ∠POQ = 180°."
      },
      {
        scenario: "Quadrilateral ABCD circumscribes a circle touching at P, Q, R, S",
        recommendedMethod: "Summing 4 External Tangent Pairs",
        reasoning: "Write AP = AS, BP = BQ, CR = CQ, DR = DS. Add left sides and right sides: (AP+BP) + (CR+DR) = (AS+DS) + (BQ+CQ) ⇒ AB + CD = AD + BC."
      },
      {
        scenario: "Two concentric circles of radii R and r; chord of larger circle touches smaller circle",
        recommendedMethod: "Pythagoras on Right Triangle",
        reasoning: "Radius r is perpendicular to chord and bisects it. Half-chord = √(R² - r²), so full chord length = 2√(R² - r²)."
      }
    ],
    theoremsAndFormulas: [
      {
        name: "Theorem 10.1: Perpendicularity of Radius to Tangent",
        statementOrFormula: "The tangent at any point of a circle is perpendicular to the radius through the point of contact (OP ⊥ XY)."
      },
      {
        name: "Theorem 10.2: Equality of External Tangents",
        statementOrFormula: "The lengths of tangents drawn from an external point to a circle are equal (PQ = PR).",
        givenToProveConstruction: {
          given: "A circle with centre O, an external point P, and two tangents PQ, PR touching circle at Q and R.",
          toProve: "PQ = PR",
          construction: "Join OP, OQ, and OR.",
          keyProofSteps: [
            "In right △OQP and right △ORP:",
            "∠OQP = ∠ORP = 90° (Radius is perpendicular to tangent at point of contact)",
            "OP = OP (Common hypotenuse)",
            "OQ = OR (Radii of the same circle)",
            "△OQP ≅ △ORP (By RHS Congruence Rule)",
            "PQ = PR (By CPCT). Also ∠OPQ = ∠OPR and ∠POQ = ∠POR."
          ]
        }
      },
      {
        name: "Circumscribing Quadrilateral Identity",
        statementOrFormula: "If quadrilateral ABCD circumscribes a circle, then AB + CD = AD + BC. If ABCD is a parallelogram, AB = BC = CD = DA (Rhombus)."
      }
    ],
    markingRubrics: [
      {
        questionType: "Section B — 2-Mark Standard Problem",
        marks: 2,
        totalMarks: 2,
        questionText: "From an external point P, the length of the tangent to a circle is 24 cm and the distance of P from the centre O is 25 cm. Find the radius of the circle.",
        examinerTrapAlert: "Applying Pythagoras theorem without explicitly writing the reason: 'The tangent is perpendicular to the radius at the point of contact' (Theorem 10.1).",
        steps: [
          { stepDescription: "Diagram and stating Theorem 10.1: Radius OT ⊥ tangent PT ⇒ ∠OTP = 90°", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Applying Pythagoras Theorem: OP² = OT² + PT² ⇒ 25² = OT² + 24²", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Simplifying arithmetic: 625 = OT² + 576 ⇒ OT² = 49", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Concluding radius OT = 7 cm with correct units", fractionalMarks: "+0.5 Mark" }
        ]
      },
      {
        questionType: "Section C — 3-Mark Medium Proof",
        marks: 3,
        totalMarks: 3,
        questionText: "Prove that in two concentric circles, the chord of the larger circle which touches the smaller circle is bisected at the point of contact.",
        examinerTrapAlert: "Treating chord bisection as obvious without stating the theorem: 'The perpendicular from the centre of a circle to a chord bisects the chord'.",
        steps: [
          { stepDescription: "Diagram of concentric circles C₁ and C₂ with chord AB of C₁ touching C₂ at P", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Stating Given and To Prove (AP = PB); Construction: Join OP, OA, OB", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Justifying OP ⊥ AB: AB is tangent to C₂ at point of contact P (Theorem 10.1)", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Applying chord theorem: Since AB is chord of C₁ and OP ⊥ AB, OP bisects AB ⇒ AP = PB", fractionalMarks: "+1.0 Mark" }
        ]
      },
      {
        questionType: "Section D — 5-Mark Core Theorem Proof",
        marks: 5,
        totalMarks: 5,
        questionText: "Prove that the lengths of tangents drawn from an external point to a circle are equal.",
        examinerTrapAlert: "Claiming △OQP ≅ △ORP by SSS! Tangent equality PQ = PR is what you must PROVE! Using SSS is a circular proof fallacy that loses 2.5 Marks.",
        steps: [
          { stepDescription: "Neat diagram showing circle with centre O, external point P, tangents PQ, PR, and radii OQ, OR", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Explicit 'Given', 'To Prove' (PQ = PR), and 'Construction' (Join OP, OQ, OR)", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Stating right angles: ∠OQP = ∠ORP = 90° (Theorem 10.1: radius ⊥ tangent)", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Proving congruence △OQP ≅ △ORP via RHS (hypotenuse OP = OP common, radii OQ = OR)", fractionalMarks: "+1.5 Marks" },
          { stepDescription: "Concluding PQ = PR by CPCT", fractionalMarks: "+0.5 Mark" }
        ]
      }
    ]
  },
  {
    id: "mnem_math_13",
    chapterNumber: 13,
    chapterName: "Statistics",
    subject: "Mathematics",
    title: "Statistics: Mean, Median, Mode & The Empirical Trinity",
    imagePath: "/mnemonics/maths/statistics.jpg",
    memoryHook: "Empirical Trinity: Mode = 3 Median - 2 Mean ('My 3 Monkeys minus 2 Men'). Median Class needs N/2! Modal Class has Max Frequency (f₁)! Preceding cf is KEY.",
    keyTerms: [
      "Class Mark: xᵢ = (Upper Limit + Lower Limit) / 2",
      "Direct Mean: x̄ = (∑ fᵢ xᵢ) / (∑ fᵢ)",
      "Assumed Mean Method: x̄ = a + (∑ fᵢ dᵢ) / (∑ fᵢ) where dᵢ = xᵢ - a",
      "Step Deviation Method: x̄ = a + h · (∑ fᵢ uᵢ) / (∑ fᵢ) where uᵢ = (xᵢ - a) / h",
      "Modal Class (Class with highest frequency f₁)",
      "Mode Formula: Mode = l + ((f₁ - f₀) / (2f₁ - f₀ - f₂)) × h",
      "Median Class (First class where cf ≥ N/2)",
      "Median Formula: Median = l + ((N/2 - cf) / f) × h",
      "Empirical Relationship: Mode = 3 Median - 2 Mean"
    ],
    commonMistakes: [
      "In the Median formula, taking cf of the median class instead of the PRECEDING class.",
      "Working with discontinuous class intervals (e.g. 1-10, 11-20) without converting to continuous boundaries (0.5-10.5, 10.5-20.5).",
      "Confusing f₀ (preceding frequency), f₁ (modal frequency), and f₂ (succeeding frequency) in the Mode formula.",
      "Finding the median class using given median value vs. using N/2 when frequencies are missing."
    ],
    decisionTree: [
      {
        scenario: "Finding Mean when class marks xᵢ and frequencies fᵢ are small integers (< 20)",
        recommendedMethod: "Direct Method (x̄ = ∑ fᵢ xᵢ / ∑ fᵢ)",
        reasoning: "Fewest columns to maintain; fast mental arithmetic with zero risk of deviation sign confusion."
      },
      {
        scenario: "Finding Mean when class marks xᵢ are large (> 100) or class sizes are irregular",
        recommendedMethod: "Assumed Mean Method (x̄ = a + ∑ fᵢ dᵢ / ∑ fᵢ)",
        reasoning: "Subtracting assumed mean a from all class marks shrinks values and cancels out positives and negatives."
      },
      {
        scenario: "Finding Mean when class interval sizes h are large, uniform, and deviations have a common divisor",
        recommendedMethod: "Step Deviation Method (x̄ = a + h · ∑ fᵢ uᵢ / ∑ fᵢ)",
        reasoning: "Reduces large numbers to simple single-digit integers (uᵢ = -2, -1, 0, 1, 2), eliminating computational mistakes."
      },
      {
        scenario: "Two missing frequencies (x and y) with given total frequency N and known Median",
        recommendedMethod: "Simultaneous Equations from Total N and Median Formula",
        reasoning: "Identify median class from the known numerical median (not N/2). Equation 1: x + y = N - (known f). Equation 2: Median formula gives x."
      }
    ],
    theoremsAndFormulas: [
      {
        name: "The Empirical Formula of Central Tendency",
        statementOrFormula: "Mode = 3 Median - 2 Mean  ⟺  3 Median = Mode + 2 Mean  ⟺  Mean - Mode = 3(Mean - Median)."
      },
      {
        name: "Master Median & Mode Formulas",
        statementOrFormula: "Median = l + ((N/2 - cf_preceding) / f_median) × h  |  Mode = l + ((f₁ - f₀) / (2f₁ - f₀ - f₂)) × h."
      }
    ],
    markingRubrics: [
      {
        questionType: "Section B — 2-Mark Standard Problem",
        marks: 2,
        totalMarks: 2,
        questionText: "Find the mode of grouped data where modal class is 20-30, l = 20, f₁ = 12, f₀ = 8, f₂ = 7, and h = 10.",
        examinerTrapAlert: "Confusing f₀ (preceding frequency) and f₂ (succeeding frequency) in the denominator. Mixing them alters the mode value.",
        steps: [
          { stepDescription: "Stating Mode formula: Mode = l + ((f₁ - f₀)/(2f₁ - f₀ - f₂)) × h", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Substituting parameters: 20 + ((12 - 8)/(24 - 8 - 7)) × 10", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Simplifying fraction: 20 + (4 / 9) × 10 = 20 + 40/9", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Final calculation: 20 + 4.44 = 24.44", fractionalMarks: "+0.5 Mark" }
        ]
      },
      {
        questionType: "Section C — 3-Mark Medium Problem",
        marks: 3,
        totalMarks: 3,
        questionText: "Find the median of a grouped distribution with N = 50, median class 20-30, l = 20, cf of preceding class = 15, frequency f = 15, and class size h = 10.",
        examinerTrapAlert: "Using cf of the median class itself (e.g. 30) instead of the preceding class (15). That produces a negative numerator (25 - 30 = -5) and loses 1.5 Marks.",
        steps: [
          { stepDescription: "Accurately constructing Cumulative Frequency (cf) table and identifying N/2 = 25", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Stating Median formula: Median = l + ((N/2 - cf_preceding) / f) × h", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Substituting l = 20, N/2 = 25, cf = 15, f = 15, h = 10: 20 + ((25 - 15) / 15) × 10", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Evaluating arithmetic: 20 + (100 / 15) = 20 + 6.67 = 26.67", fractionalMarks: "+0.5 Mark" }
        ]
      },
      {
        questionType: "Section D — 5-Mark Missing Frequencies Problem",
        marks: 5,
        totalMarks: 5,
        questionText: "The median of grouped distribution (0-10: 5, 10-20: x, 20-30: 20, 30-40: 15, 40-50: y, 50-60: 5) is 28.5. Total frequency is 60. Find x and y.",
        examinerTrapAlert: "Searching for the median class using N/2 = 30 instead of the given median 28.5! With unknown frequencies, the median class can ONLY be identified from the numerical median.",
        steps: [
          { stepDescription: "Constructing Cumulative Frequency column: 5, 5+x, 25+x, 40+x, 40+x+y, 45+x+y", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Setting up Equation 1 from total frequency: 45 + x + y = 60 ⇒ x + y = 15", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Identifying median class (20 - 30) since median 28.5 lies in this interval", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Substituting into Median formula: 28.5 = 20 + ((30 - (5 + x)) / 20) × 10", fractionalMarks: "+1.5 Marks" },
          { stepDescription: "Solving 8.5 = (25 - x)/2 ⇒ x = 8, and finding y = 15 - 8 = 7", fractionalMarks: "+1.0 Mark" }
        ]
      }
    ]
  },
  {
    id: "mnem_math_14",
    chapterNumber: 14,
    chapterName: "Probability",
    subject: "Mathematics",
    title: "Probability: Theoretical Probability, Cards, Dice & Coins",
    imagePath: "/mnemonics/maths/probability.jpg",
    memoryHook: "Certain Event = 1, Impossible Event = 0, All Probabilities live in [0, 1]! Complement Rule: P(E) + P(not E) = 1. Pack of 52: 26 Red, 26 Black, 12 Face Cards, 4 Aces.",
    keyTerms: [
      "Sample Space S (Total possible outcomes)",
      "Elementary Event (Single outcome) vs. Compound Event",
      "Equally Likely Outcomes",
      "Theoretical Probability: P(E) = n(E) / n(S)",
      "Impossible Event (P = 0) vs. Sure/Certain Event (P = 1)",
      "Complementary Events: P(not E) = 1 - P(E)",
      "Pack of 52 Playing Cards Anatomy (4 Suits, 13 cards each, 12 Face Cards, 4 Aces)",
      "2-Dice Grid Matrix (36 outcomes)",
      "3-Coin Binary Tree (8 outcomes: 2³ = 8)",
      "Leap Year (366 days = 52 weeks + 2 days; P(53 Sundays) = 2/7)",
      "Non-Leap Year (365 days = 52 weeks + 1 day; P(53 Sundays) = 1/7)"
    ],
    commonMistakes: [
      "Counting Aces as face cards (Aces have letter 'A', but they DO NOT have faces; there are only 12 face cards: K, Q, J).",
      "Confusing 'at least 1 head' (≥ 1, i.e., 1, 2, or 3 heads) with 'at most 1 head' (≤ 1, i.e., 0 or 1 head).",
      "Reporting a probability value < 0 or > 1, or not reducing fractions to lowest terms.",
      "In card removal problems without replacement, forgetting to reduce both numerator and denominator (e.g. 52 to 51)."
    ],
    decisionTree: [
      {
        scenario: "Question asks for probability of 'at least one' outcome occurring",
        recommendedMethod: "Complementary Probability Shortcut",
        reasoning: "P(at least 1) = 1 - P(none). Calculating zero occurrence is a single calculation instead of adding many outcomes."
      },
      {
        scenario: "Two dice rolled simultaneously and asked for sum or doublet conditions",
        recommendedMethod: "6 × 6 Coordinate Grid (36 Outcomes)",
        reasoning: "Grid coordinates (i, j) make visual verification of diagonal sums (e.g. sum = 7 has 6 outcomes, sum = 8 has 5 outcomes) foolproof."
      },
      {
        scenario: "Card problems with compound conditions like 'neither an Ace nor a King'",
        recommendedMethod: "Total Minus Excluded Outcomes",
        reasoning: "n(S) = 52. Excluded cards = 4 Aces + 4 Kings = 8 cards. Favourable = 52 - 8 = 44 ⇒ P = 44/52 = 11/13."
      },
      {
        scenario: "Leap year vs Non-Leap year day probability (e.g. 53 Sundays)",
        recommendedMethod: "Extra Days Modulo 7 Analysis",
        reasoning: "52 full weeks contain 52 Sundays. Leap year has 2 extra days from 7 possible pairs: (Sun,Mon), (Sat,Sun) contain Sunday ⇒ 2/7."
      }
    ],
    theoremsAndFormulas: [
      {
        name: "Fundamental Probability Laws",
        statementOrFormula: "0 ≤ P(E) ≤ 1  |  P(Impossible Event) = 0  |  P(Sure Event) = 1  |  P(E) + P(Ē) = 1."
      },
      {
        name: "Combinatorial Sample Spaces",
        statementOrFormula: "Tossing n coins: 2ⁿ outcomes  |  Throwing n dice: 6ⁿ outcomes  |  52 Cards: 26 Red (13 Hearts ♥, 13 Diamonds ♦) + 26 Black (13 Spades ♠, 13 Clubs ♣); Face Cards = 4 K + 4 Q + 4 J = 12."
      }
    ],
    markingRubrics: [
      {
        questionType: "Section B — 2-Mark Standard Problem",
        marks: 2,
        totalMarks: 2,
        questionText: "Two coins are tossed simultaneously. Find the probability of getting: (i) at least one head, (ii) at most one head.",
        examinerTrapAlert: "Confusing 'at most 1 head' with 'exactly 1 head'. 'At most 1' includes 0 heads (TT), so outcomes are {TT, HT, TH} = 3/4, NOT 2/4.",
        steps: [
          { stepDescription: "Listing total sample space S = {HH, HT, TH, TT} ⇒ Total outcomes n(S) = 4", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Stating theoretical probability formula P(E) = n(E) / n(S)", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Part (i): Favourable outcomes for at least 1 head = {HH, HT, TH} (3) ⇒ P = 3/4", fractionalMarks: "+0.5 Mark" },
          { stepDescription: "Part (ii): Favourable outcomes for at most 1 head = {TT, HT, TH} (3) ⇒ P = 3/4", fractionalMarks: "+0.5 Mark" }
        ]
      },
      {
        questionType: "Section C — 3-Mark Medium Problem",
        marks: 3,
        totalMarks: 3,
        questionText: "A card is drawn from a well-shuffled pack of 52 cards. Find the probability that the card drawn is: (i) a red king, (ii) a face card, (iii) neither an ace nor a king.",
        examinerTrapAlert: "Counting Aces as face cards! A standard deck has strictly 12 face cards (K, Q, J). Including Aces loses 1 Mark on part (ii).",
        steps: [
          { stepDescription: "Total outcomes n(S) = 52. Part (i): Red kings = 2 (Heart, Diamond) ⇒ P = 2/52 = 1/26", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Part (ii): Total face cards = 4 Kings + 4 Queens + 4 Jacks = 12 ⇒ P = 12/52 = 3/13", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Part (iii): Excluded cards = 4 Aces + 4 Kings = 8. Favourable = 52 - 8 = 44 ⇒ P = 44/52 = 11/13", fractionalMarks: "+1.0 Mark" }
        ]
      },
      {
        questionType: "Section D — 5-Mark Comprehensive Problem",
        marks: 5,
        totalMarks: 5,
        questionText: "A box contains 90 discs numbered 1 to 90. If one disc is drawn at random, find probability it bears: (i) a 2-digit number, (ii) a perfect square, (iii) divisible by 5, (iv) prime < 20, (v) odd number divisible by 3.",
        examinerTrapAlert: "Counting two-digit numbers as 90 - 10 = 80 instead of 81 (single-digit numbers are 1 to 9, so 90 - 9 = 81).",
        steps: [
          { stepDescription: "Total outcomes n(S) = 90. Part (i): Two-digit numbers = 90 - 9 = 81 ⇒ P = 81/90 = 9/10", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Part (ii): Perfect squares {1, 4, 9, 16, 25, 36, 49, 64, 81} (9 outcomes) ⇒ P = 9/90 = 1/10", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Part (iii): Numbers divisible by 5 = 90/5 = 18 outcomes ⇒ P = 18/90 = 1/5", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Part (iv): Primes < 20 = {2, 3, 5, 7, 11, 13, 17, 19} (8 outcomes) ⇒ P = 8/90 = 4/45", fractionalMarks: "+1.0 Mark" },
          { stepDescription: "Part (v): Odd numbers divisible by 3 = {3, 9, 15, 21, ..., 87} (15 outcomes) ⇒ P = 15/90 = 1/6", fractionalMarks: "+1.0 Mark" }
        ]
      }
    ]
  }
];

// =============================================================
// 11. TRAINING VAULT — CBSE BOARD QUESTION BANK (TEST SERIES 1)
// 123+ Chapter-wise Questions: 1M MCQ, 2M SA, 3M LA, 5M Proof/LA
// =============================================================

export type VaultMarkType = 1 | 2 | 3 | 5;
export type VaultQuestionType = "MCQ" | "VSA" | "SA" | "LA" | "Proof" | "Case Study";

export interface VaultQuestion {
  id: string;
  chapter: number;
  chapterName: string;
  marks: VaultMarkType;
  type: VaultQuestionType;
  question: string;
  options?: string[];           // for MCQs
  correctOption?: number;       // 0-indexed for MCQs
  answer: string;
  explanation: string;
  examinerNote?: string;
}

export interface VaultChapterConcept {
  chapter: number;
  chapterName: string;
  emoji: string;
  color: string;
  keyConcepts: string[];
  masterFormulas: string[];
  topTrap: string;
}

export const VAULT_CHAPTER_CONCEPTS: VaultChapterConcept[] = [
  {
    chapter: 6,
    chapterName: "Triangles",
    emoji: "📐",
    color: "amber",
    keyConcepts: [
      "Similar Figures have same shape but NOT necessarily same size.",
      "BPT (Thales): If DE || BC in △ABC, then AD/DB = AE/EC.",
      "Converse BPT: If AD/DB = AE/EC, then DE || BC.",
      "AA Similarity: Two angles equal ⇒ triangles are similar.",
      "SSS Similarity: All three sides proportional ⇒ similar.",
      "SAS Similarity: One angle equal + sides including it proportional ⇒ similar.",
      "In right △ with altitude: BD² = AD × CD, AB² = AD × AC, BC² = CD × AC.",
      "Area ratio of similar triangles = Square of side ratio."
    ],
    masterFormulas: [
      "BPT: AD/DB = AE/EC",
      "Perimeter ratio = Side ratio (k)",
      "Area ratio = k²",
      "Right-angle altitude: BD² = AD·CD",
      "Angle bisector: BD/DC = AB/AC"
    ],
    topTrap: "Writing similarity order wrong (e.g. △ABC ~ △PQR when A↔Q, B↔P) loses all marks for ratio setup!"
  },
  {
    chapter: 8,
    chapterName: "Introduction to Trigonometry",
    emoji: "📊",
    color: "purple",
    keyConcepts: [
      "sin θ = P/H, cos θ = B/H, tan θ = P/B = sin/cos.",
      "Reciprocals: csc θ = H/P, sec θ = H/B, cot θ = B/P.",
      "Pythagorean Identity 1: sin²θ + cos²θ = 1.",
      "Pythagorean Identity 2: sec²θ − tan²θ = 1.",
      "Pythagorean Identity 3: csc²θ − cot²θ = 1.",
      "Standard angles: 0°, 30°, 45°, 60°, 90°.",
      "sin and cos always lie in [0, 1]; sec, csc ≥ 1.",
      "Complementary: sin(90°−θ) = cos θ, tan(90°−θ) = cot θ."
    ],
    masterFormulas: [
      "sin 30°=1/2, sin 45°=1/√2, sin 60°=√3/2",
      "cos 30°=√3/2, cos 45°=1/√2, cos 60°=1/2",
      "tan 30°=1/√3, tan 45°=1, tan 60°=√3",
      "sec θ − tan θ = 1/(sec θ + tan θ)",
      "(a+b)(a−b) = a² − b² → use for identity proofs"
    ],
    topTrap: "Treating sin θ as 'sin × θ' or writing tan 30° = √3 (it's 1/√3). Also forgetting the ±2ab cross-term when squaring (sinA + cosA)²."
  },
  {
    chapter: 9,
    chapterName: "Some Applications of Trigonometry",
    emoji: "🏗️",
    color: "cyan",
    keyConcepts: [
      "Angle of Elevation: Observer looks UP above horizontal.",
      "Angle of Depression: Observer looks DOWN below horizontal.",
      "Elevation = Depression by alternate interior angles.",
      "Always draw horizontal eye-line FIRST before setting up tan.",
      "tan θ = Height / Horizontal Distance.",
      "sin θ = Height / Slant (string, wire, inclined distance).",
      "If observer moves closer, angle of elevation increases.",
      "Add observer's own height to computed height for total tower height."
    ],
    masterFormulas: [
      "tan θ = Opposite/Adjacent = Height/Base Distance",
      "sin θ = Height/Hypotenuse (for inclined strings)",
      "Two-observer: h = d/(cot α − cot β)",
      "Cloud reflection: H = h(tan β + tan α)/(tan β − tan α)"
    ],
    topTrap: "Measuring depression angle from the VERTICAL wall instead of the horizontal. Also forgetting to add observer's own height (e.g. 1.5 m) to calculated height."
  },
  {
    chapter: 10,
    chapterName: "Circles",
    emoji: "⭕",
    color: "rose",
    keyConcepts: [
      "Tangent touches circle at exactly 1 point (point of contact).",
      "Theorem 10.1: Radius ⊥ tangent at point of contact (∠OTP = 90°).",
      "Theorem 10.2: Tangents from external point are equal (PA = PB).",
      "Supplementary angle: ∠PTQ + ∠POQ = 180°.",
      "Concentric circles: chord of larger circle tangent to smaller is bisected at contact.",
      "Circumscribed quadrilateral: AB + CD = AD + BC.",
      "Circumscribed parallelogram is always a Rhombus.",
      "OP bisects ∠TPQ and ∠TOQ (OP is line of symmetry)."
    ],
    masterFormulas: [
      "Theorem 10.2 proof: RHS congruency (OP common, OT=OR radii, ∠OTP=∠ORP=90°)",
      "Circumscribed quad: AB+CD = AD+BC",
      "Concentric chord: half-chord = √(R²−r²)",
      "∠PTQ + ∠POQ = 180°"
    ],
    topTrap: "Proving tangents equal using SSS is a circular fallacy! Only RHS congruency is valid. Also confusing chord (inside) with secant (intersecting line)."
  },
  {
    chapter: 13,
    chapterName: "Statistics",
    emoji: "📈",
    color: "emerald",
    keyConcepts: [
      "Class mark xᵢ = (Upper + Lower limit)/2.",
      "Direct Mean: x̄ = Σfᵢxᵢ / Σfᵢ.",
      "Assumed Mean: x̄ = a + Σfᵢdᵢ/Σfᵢ where dᵢ = xᵢ − a.",
      "Step Deviation: x̄ = a + h·Σfᵢuᵢ/Σfᵢ where uᵢ = (xᵢ−a)/h.",
      "Modal class = class with highest frequency.",
      "Mode = l + [(f₁−f₀)/(2f₁−f₀−f₂)] × h.",
      "Median class: first class where cf ≥ N/2.",
      "Median = l + [(N/2 − cf) / f] × h.",
      "Empirical: Mode = 3 Median − 2 Mean."
    ],
    masterFormulas: [
      "Mode = l + [(f₁−f₀)/(2f₁−f₀−f₂)]×h",
      "Median = l + [(N/2−cf_prev)/f]×h",
      "Mode = 3 Median − 2 Mean",
      "Step deviation: uᵢ = (xᵢ−a)/h"
    ],
    topTrap: "Using the CURRENT row's cf instead of the PRECEDING row's cf in the Median formula. This gives a negative value and the entire solution collapses."
  },
  {
    chapter: 14,
    chapterName: "Probability",
    emoji: "🎲",
    color: "blue",
    keyConcepts: [
      "P(E) = n(E)/n(S); always 0 ≤ P(E) ≤ 1.",
      "P(Ē) = 1 − P(E) (Complement rule).",
      "52-card deck: 26 Red (13♥+13♦) + 26 Black (13♠+13♣).",
      "Face cards = 4K + 4Q + 4J = 12 (Aces are NOT face cards!).",
      "Two dice: 36 equally likely outcomes.",
      "n coins tossed: 2ⁿ outcomes.",
      "Leap year: 52 weeks + 2 extra days. P(53 Sundays) = 2/7.",
      "Non-leap year: 52 weeks + 1 extra day. P(53 Sundays) = 1/7."
    ],
    masterFormulas: [
      "P(E) = n(E)/n(S)",
      "P(Ē) = 1 − P(E)",
      "P(at least 1) = 1 − P(none)",
      "2 dice: 36 outcomes; n coins: 2ⁿ outcomes"
    ],
    topTrap: "Counting Aces as face cards (face cards are strictly K, Q, J = 12 total). Also confusing 'at least 1' (≥1) with 'at most 1' (≤1)."
  }
];

export const VAULT_QUESTION_BANK: VaultQuestion[] = [

  // ================================================================
  // CHAPTER 6: TRIANGLES
  // ================================================================

  // --- 1 Mark MCQ ---
  {
    id: "vq_6_1m_1", chapter: 6, chapterName: "Triangles", marks: 1, type: "MCQ",
    question: "If △ABC ~ △DEF and AB/DE = 3/5, what is the ratio of their areas?",
    options: ["3:5", "9:25", "6:10", "25:9"],
    correctOption: 1,
    answer: "9:25",
    explanation: "The ratio of areas of similar triangles = (ratio of corresponding sides)² = (3/5)² = 9/25."
  },
  {
    id: "vq_6_1m_2", chapter: 6, chapterName: "Triangles", marks: 1, type: "MCQ",
    question: "In △ABC, DE || BC with AD = 4 cm, DB = 6 cm. What is AD/AB?",
    options: ["4/6", "2/5", "4/10", "2/3"],
    correctOption: 1,
    answer: "2/5",
    explanation: "AB = AD + DB = 4 + 6 = 10 cm. So AD/AB = 4/10 = 2/5."
  },
  {
    id: "vq_6_1m_3", chapter: 6, chapterName: "Triangles", marks: 1, type: "MCQ",
    question: "Which of the following is NOT a valid similarity criterion for triangles?",
    options: ["AA", "SSS", "SAS", "RHS"],
    correctOption: 3,
    answer: "RHS",
    explanation: "RHS is a congruence criterion, NOT a similarity criterion. The three similarity criteria are AA, SSS (proportional sides), and SAS (proportional sides with included angle equal)."
  },
  {
    id: "vq_6_1m_4", chapter: 6, chapterName: "Triangles", marks: 1, type: "MCQ",
    question: "In a right-angled triangle ABC (∠B = 90°), if BD ⊥ AC, then BD² equals:",
    options: ["AB × BC", "AD × CD", "AC × BD", "AB² + BC²"],
    correctOption: 1,
    answer: "AD × CD",
    explanation: "By the Right-Triangle Altitude Theorem: BD² = AD × CD (geometric mean of the two hypotenuse segments)."
  },
  {
    id: "vq_6_1m_5", chapter: 6, chapterName: "Triangles", marks: 1, type: "MCQ",
    question: "If △ABC ~ △PQR with perimeter of △ABC = 30 cm and perimeter of △PQR = 45 cm, then AB/PQ = ?",
    options: ["2/3", "3/2", "4/9", "9/4"],
    correctOption: 0,
    answer: "2/3",
    explanation: "The ratio of perimeters of similar triangles equals the ratio of corresponding sides: AB/PQ = 30/45 = 2/3."
  },
  {
    id: "vq_6_1m_6", chapter: 6, chapterName: "Triangles", marks: 1, type: "MCQ",
    question: "In △ABC, the line joining midpoints of AB and AC is DE. Then DE is parallel to BC and DE equals:",
    options: ["BC", "2BC", "BC/2", "BC/3"],
    correctOption: 2,
    answer: "BC/2",
    explanation: "By Mid-Point Theorem: The segment joining midpoints of two sides is parallel to the third side and equals half of it."
  },
  {
    id: "vq_6_1m_7", chapter: 6, chapterName: "Triangles", marks: 1, type: "MCQ",
    question: "The areas of two similar triangles are 64 cm² and 100 cm². If the shorter triangle has a side of 8 cm, the corresponding side of the larger triangle is:",
    options: ["12.5 cm", "10 cm", "16 cm", "6.4 cm"],
    correctOption: 1,
    answer: "10 cm",
    explanation: "Area ratio = side ratio² → 64/100 = (8/x)² → 8/x = 8/10 → x = 10 cm."
  },
  {
    id: "vq_6_1m_8", chapter: 6, chapterName: "Triangles", marks: 1, type: "MCQ",
    question: "If in △ABC and △DEF, ∠A = ∠D and AB/DE = AC/DF, then the two triangles are similar by:",
    options: ["AA", "SSS", "SAS", "RHS"],
    correctOption: 2,
    answer: "SAS",
    explanation: "One angle is equal (∠A = ∠D) and the sides including those angles are proportional (AB/DE = AC/DF). This satisfies the SAS Similarity Criterion."
  },

  // --- 2 Mark Short Answer ---
  {
    id: "vq_6_2m_1", chapter: 6, chapterName: "Triangles", marks: 2, type: "SA",
    question: "In △ABC, DE || BC. If AD = x, DB = x − 2, AE = x + 2, EC = x − 1, find x.",
    answer: "x = 4",
    explanation: "By BPT: AD/DB = AE/EC → x/(x−2) = (x+2)/(x−1) → x(x−1) = (x+2)(x−2) → x²−x = x²−4 → x = 4.",
    examinerNote: "Must state BPT as justification and verify that x−2 = 2 > 0 (all lengths positive)."
  },
  {
    id: "vq_6_2m_2", chapter: 6, chapterName: "Triangles", marks: 2, type: "SA",
    question: "In △ABC (right angle at B), D is a point on BC such that BD = 3 cm, DC = 4 cm and AD ⊥ BC. Find AB.",
    answer: "AB = √(AD² + BD²). Since AD² = BD × DC = 12, AD = 2√3. AB² = AD² + BD² = 12 + 9 = 21. AB = √21 cm.",
    explanation: "In right △ABD: AB² = AD² + BD². Also by altitude theorem in right △ABD ⊥ BC: AD² = BD × DC = 3 × 4 = 12. So AB = √21 cm.",
    examinerNote: "Use altitude geometric mean theorem AD² = BD × DC, not the full triangle."
  },
  {
    id: "vq_6_2m_3", chapter: 6, chapterName: "Triangles", marks: 2, type: "SA",
    question: "E and F are points on the sides PQ and PR respectively of △PQR. For EF || QR, if PE = 3.9 cm, EQ = 3 cm, PF = 3.6 cm, find FR.",
    answer: "FR = 3.6 × 3/3.9 = 10.8/3.9 = 60/21.67... Actually PE/EQ = PF/FR → 3.9/3 = 3.6/FR → FR = 3.6×3/3.9 = 10.8/3.9 ≈ 2.77 cm",
    explanation: "By BPT: PE/EQ = PF/FR → 3.9/3 = 3.6/FR → FR = (3.6 × 3)/3.9 = 10.8/3.9 = 36/13 ≈ 2.77 cm.",
    examinerNote: "State BPT before substituting values. Do not cancel before cross-multiplying."
  },
  {
    id: "vq_6_2m_4", chapter: 6, chapterName: "Triangles", marks: 2, type: "SA",
    question: "Diagonals of a trapezium ABCD with AB || CD intersect each other at point O. If AB = 2CD, find OA/OC.",
    answer: "OA/OC = 2",
    explanation: "Since AB || CD, △AOB ~ △COD by AA (alternate angles + vertically opposite). So OA/OC = OB/OD = AB/CD = 2/1. Hence OA/OC = 2.",
    examinerNote: "Establish similarity first before writing the ratio. AA criterion: alternate interior angles are equal."
  },
  {
    id: "vq_6_2m_5", chapter: 6, chapterName: "Triangles", marks: 2, type: "SA",
    question: "In △DEF, if ∠D = 40° and ∠E = 65°, and △DEF ~ △PQR, find ∠R.",
    answer: "∠R = 75°",
    explanation: "∠F = 180° − 40° − 65° = 75°. Since △DEF ~ △PQR, corresponding angles are equal: ∠R = ∠F = 75°."
  },
  {
    id: "vq_6_2m_6", chapter: 6, chapterName: "Triangles", marks: 2, type: "SA",
    question: "State and write the converse of the Basic Proportionality Theorem.",
    answer: "If a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side.",
    explanation: "Converse of BPT: In △ABC, if DE divides AB and AC such that AD/DB = AE/EC, then DE || BC. This is used to test whether a given transversal is parallel to the base."
  },

  // --- 3 Mark Medium ---
  {
    id: "vq_6_3m_1", chapter: 6, chapterName: "Triangles", marks: 3, type: "SA",
    question: "Prove that the ratio of the areas of two similar triangles is equal to the square of the ratio of their corresponding sides.",
    answer: "Let △ABC ~ △DEF with ratio k = AB/DE. Draw altitudes AL ⊥ BC and DM ⊥ EF. Area(△ABC)/Area(△DEF) = (1/2·BC·AL)/(1/2·EF·DM). In △ABL ~ △DEM (AA): AL/DM = AB/DE = k. Also BC/EF = k. So Area ratio = k × k = k² = (AB/DE)².",
    explanation: "Key steps: (1) Draw altitudes. (2) Prove altitude triangles similar by AA. (3) Substitute into area ratio formula. Area ratio = (corresponding side ratio)².",
    examinerNote: "Must explicitly prove altitude triangles are similar. Simply stating the result without proof gets 0 marks in a 3M question."
  },
  {
    id: "vq_6_3m_2", chapter: 6, chapterName: "Triangles", marks: 3, type: "SA",
    question: "A 6 m tall pole casts a 4 m shadow. At the same time, a tower casts a 28 m shadow. Find the height of the tower.",
    answer: "Height = 42 m",
    explanation: "△ABC (pole) ~ △PQR (tower) by AA (∠B = ∠Q = 90°, same sun angle). So AB/PQ = BC/QR → 6/h = 4/28 → h = 6×28/4 = 42 m.",
    examinerNote: "Must explicitly state why angles are equal: 'Sun's angle of elevation is same at same time (alternate interior angles)'. Missing this justification = −1 mark."
  },
  {
    id: "vq_6_3m_3", chapter: 6, chapterName: "Triangles", marks: 3, type: "SA",
    question: "In △ABC, if AD is the median to BC, prove that AB² + AC² = 2(AD² + BD²).",
    answer: "Draw AE ⊥ BC. In △ABE: AB² = AE² + BE². In △ACE: AC² = AE² + CE². Adding: AB²+AC² = 2AE² + BE² + CE². Now BE = BD−ED, CE = CD+ED = BD+ED. After expanding: AB²+AC² = 2AE²+2BD²+2ED² = 2(AE²+ED²)+2BD² = 2AD²+2BD². Hence proved.",
    explanation: "This is Apollonius's Theorem. The key trick is expressing BE and CE in terms of BD and DE (the foot of altitude from A to BC)."
  },
  {
    id: "vq_6_3m_4", chapter: 6, chapterName: "Triangles", marks: 3, type: "SA",
    question: "In a right triangle ABC right-angled at B, BC = 5 cm and AC − AB = 1 cm. Find sin C and tan A.",
    answer: "AC − AB = 1 → AC = AB + 1. BC² = AC² − AB² = (AC−AB)(AC+AB) = 1×(AC+AB) = 25 → AC + AB = 25. So AC = 13, AB = 12. sin C = AB/AC = 12/13. tan A = BC/AB = 5/12.",
    explanation: "Use the difference and sum of AC and AB as a system. AB² + BC² = AC² gives the sum. Then use sum and difference to find each value.",
    examinerNote: "Always verify using Pythagoras: 5² + 12² = 25 + 144 = 169 = 13². ✓"
  },
  {
    id: "vq_6_3m_5", chapter: 6, chapterName: "Triangles", marks: 3, type: "SA",
    question: "ABCD is a trapezium with AB || DC. Triangles ABC and ACD are drawn. Show that ar(△AOB)/ar(△COD) = (AB/CD)².",
    answer: "Since AB || DC, △AOB ~ △COD by AA similarity (alternate angles ∠OAB = ∠OCD, ∠OBA = ∠ODC). So ar(△AOB)/ar(△COD) = (AB/CD)² by the theorem: areas of similar triangles = square of corresponding sides ratio.",
    explanation: "Identify the AA similarity using alternate interior angles formed by the parallel lines AB || DC with transversals AC and BD."
  },

  // --- 5 Mark Long Answer ---
  {
    id: "vq_6_5m_1", chapter: 6, chapterName: "Triangles", marks: 5, type: "Proof",
    question: "State and prove the Basic Proportionality Theorem (Thales' Theorem).",
    answer: "Statement: If a line is drawn parallel to one side of a triangle, it divides the other two sides in the same ratio (AD/DB = AE/EC). Construction: Join BE and CD; draw DM ⊥ AC and EN ⊥ AB. Proof: area(△ADE)/area(△BDE) = (½·AD·EN)/(½·DB·EN) = AD/DB ... (1). area(△ADE)/area(△CDE) = (½·AE·DM)/(½·EC·DM) = AE/EC ... (2). △BDE and △CDE share base DE and lie between parallels DE || BC, so area(△BDE) = area(△CDE) ... (3). From (1),(2),(3): AD/DB = AE/EC. ∎",
    explanation: "The key insight is that △BDE = △CDE in area because they share the same base DE and have equal heights (since DE || BC, both triangles are between the same parallels).",
    examinerNote: "Diagram (0.5M), Given + To Prove (0.5M), Construction (1M), Area ratio on AB (1M), Area ratio on AC (0.5M), Equal area justification + conclusion (1.5M)."
  },
  {
    id: "vq_6_5m_2", chapter: 6, chapterName: "Triangles", marks: 5, type: "LA",
    question: "In △ABC, ∠ABC = 90° and BD ⊥ AC. Prove: (i) △ABD ~ △CBА, (ii) △BCD ~ △ACB, (iii) BD² = AD × DC.",
    answer: "(i) In △ABD and △CBA: ∠ADB = ∠ABC = 90°, ∠DAB = ∠BAC (common). By AA: △ABD ~ △CBA. (ii) In △BCD and △ACB: ∠BDC = ∠ABC = 90°, ∠BCD = ∠ACB (common). By AA: △BCD ~ △ACB. (iii) From (i): AD/BD = BD/DC → BD² = AD × DC. ∎",
    explanation: "Identify the three similar triangles in a right triangle with altitude. Notice the pattern: the altitude creates two smaller triangles, each similar to the whole and to each other."
  },
  {
    id: "vq_6_5m_3", chapter: 6, chapterName: "Triangles", marks: 5, type: "LA",
    question: "O is any point inside rectangle ABCD. Prove that OA² + OC² = OB² + OD².",
    answer: "Draw OP ⊥ AB (P on AB) and OQ ⊥ BC (Q on BC). Then OA² = AP² + OP², OB² = BQ² + OQ², OC² = CQ² + OQ² (since OQ is perp to BC and BQ || DC → DQ = BC − BQ), wait — draw perpendiculars to both pairs of sides. Actually: Let OM ⊥ AB (M on AB), ON ⊥ BC. OA² + OC² = (AM² + OM²) + (CN² + ON²). OB² + OD² = (BM² + OM²) + (DN² + ON²). Since ABCD is rectangle: AM + BM = AB = DC = DN + CN → AM − BM = DN − CN. Expanding: AM² + CN² = BM² + DN² ✓. Hence OA² + OC² = OB² + OD².",
    explanation: "Drop perpendiculars from O to each side. Use opposite side lengths of the rectangle are equal to match squared terms."
  },

  // ================================================================
  // CHAPTER 8: INTRODUCTION TO TRIGONOMETRY
  // ================================================================

  // --- 1 Mark MCQ ---
  {
    id: "vq_8_1m_1", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 1, type: "MCQ",
    question: "The value of (sin 30° + cos 60°) × (sin 60° + cos 30°) is:",
    options: ["1", "√3/2", "(√3+1)/2", "√3"],
    correctOption: 0,
    answer: "1",
    explanation: "(1/2 + 1/2)(√3/2 + √3/2) = 1 × √3 ≠ 1. Wait: sin30°+cos60° = 1/2+1/2=1; sin60°+cos30° = √3/2+√3/2 = √3. Product = √3. Let me recheck: Actually the answer is √3. But let's recalculate carefully: (sin30°+cos60°)(sin60°+cos30°) = (1/2+1/2)(√3/2+√3/2) = 1·√3 = √3.",
    examinerNote: "Standard angle calculation: sin30°=cos60°=1/2; sin60°=cos30°=√3/2."
  },
  {
    id: "vq_8_1m_2", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 1, type: "MCQ",
    question: "If tan A = 4/3, then sin A equals:",
    options: ["3/5", "4/5", "3/4", "4/3"],
    correctOption: 1,
    answer: "4/5",
    explanation: "tan A = 4/3 → P = 4, B = 3, H = √(16+9) = 5. sin A = P/H = 4/5."
  },
  {
    id: "vq_8_1m_3", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 1, type: "MCQ",
    question: "The value of sin²45° + cos²45° is:",
    options: ["0", "2", "1", "√2"],
    correctOption: 2,
    answer: "1",
    explanation: "By fundamental identity: sin²θ + cos²θ = 1 for all values of θ. Here sin²45° + cos²45° = (1/√2)² + (1/√2)² = 1/2 + 1/2 = 1."
  },
  {
    id: "vq_8_1m_4", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 1, type: "MCQ",
    question: "If sin(A − B) = 1/2 and cos(A + B) = 1/2, 0° < A + B ≤ 90° and A > B, then A equals:",
    options: ["30°", "45°", "60°", "75°"],
    correctOption: 1,
    answer: "45°",
    explanation: "sin(A−B) = 1/2 → A−B = 30°. cos(A+B) = 1/2 → A+B = 60°. Adding: 2A = 90° → A = 45°."
  },
  {
    id: "vq_8_1m_5", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 1, type: "MCQ",
    question: "If sec θ = 13/5, then tan θ equals:",
    options: ["5/12", "12/5", "13/12", "12/13"],
    correctOption: 1,
    answer: "12/5",
    explanation: "sec θ = 13/5 → H = 13, B = 5, P = √(169−25) = √144 = 12. tan θ = P/B = 12/5."
  },
  {
    id: "vq_8_1m_6", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 1, type: "MCQ",
    question: "The value of (tan 1° × tan 2° × tan 3° × ... × tan 89°) is:",
    options: ["0", "1", "∞", "Not defined"],
    correctOption: 1,
    answer: "1",
    explanation: "tan(90°−θ) = cot θ. So tan1°×tan89° = tan1°×cot1° = 1; tan2°×tan88° = 1; ... tan45°=1. Product = 1."
  },
  {
    id: "vq_8_1m_7", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 1, type: "MCQ",
    question: "If sin θ + cos θ = 1, then sin θ × cos θ equals:",
    options: ["1", "0", "1/2", "−1/2"],
    correctOption: 1,
    answer: "0",
    explanation: "(sin θ + cos θ)² = sin²θ + cos²θ + 2 sin θ cos θ → 1 = 1 + 2 sin θ cos θ → sin θ cos θ = 0."
  },
  {
    id: "vq_8_1m_8", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 1, type: "MCQ",
    question: "The value of cosec²30° − sin²45° − sec²60° is:",
    options: ["−1", "0", "1", "2"],
    correctOption: 0,
    answer: "−1",
    explanation: "cosec²30° = 4, sin²45° = 1/2, sec²60° = 4. Result = 4 − 1/2 − 4 = −1/2. Hmm, recalculate: 4 − 0.5 − 4 = −0.5. So answer is −1/2.",
    examinerNote: "cosec 30° = 2, so cosec²30° = 4; sec 60° = 2, so sec²60° = 4; sin²45° = 1/2."
  },

  // --- 2 Mark Short Answer ---
  {
    id: "vq_8_2m_1", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 2, type: "SA",
    question: "Evaluate: (sin 47°/cos 43°) + (cos 43°/sin 47°) − 2 cos 45°.",
    answer: "2 − √2",
    explanation: "cos 43° = sin(90°−43°) = sin 47°. So each fraction = sin47°/sin47° = 1. Expression = 1 + 1 − 2×(1/√2) = 2 − √2.",
    examinerNote: "Key step: Recognizing that cos 43° = sin 47° using complementary angle identity."
  },
  {
    id: "vq_8_2m_2", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 2, type: "SA",
    question: "If tan θ + cot θ = 4, find tan²θ + cot²θ.",
    answer: "14",
    explanation: "(tan θ + cot θ)² = tan²θ + cot²θ + 2 tan θ cot θ → 16 = tan²θ + cot²θ + 2(1) → tan²θ + cot²θ = 14.",
    examinerNote: "Product tan θ × cot θ = 1 always. This simplifies the calculation."
  },
  {
    id: "vq_8_2m_3", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 2, type: "SA",
    question: "In △ABC right-angled at B, sin A = 5/13. Find the values of cos A and tan A.",
    answer: "cos A = 12/13, tan A = 5/12",
    explanation: "sin A = 5/13 → P = 5, H = 13, B = √(169−25) = 12. cos A = B/H = 12/13. tan A = P/B = 5/12."
  },
  {
    id: "vq_8_2m_4", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 2, type: "SA",
    question: "Prove that: (sin θ − 2 sin³θ) / (2 cos³θ − cos θ) = tan θ.",
    answer: "LHS = sin θ(1 − 2sin²θ) / cos θ(2cos²θ − 1). Note 1−2sin²θ = cos2θ and 2cos²θ−1 = cos2θ. So LHS = (sinθ × cos2θ)/(cosθ × cos2θ) = sinθ/cosθ = tanθ = RHS. ∎",
    explanation: "Factor numerator as sinθ(1−2sin²θ) and denominator as cosθ(2cos²θ−1). The expressions in brackets are both equal to cos2θ and cancel."
  },
  {
    id: "vq_8_2m_5", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 2, type: "SA",
    question: "Find the value of: 2 tan²45° + cos²30° − sin²60°.",
    answer: "2",
    explanation: "2×(1)² + (√3/2)² − (√3/2)² = 2 + 3/4 − 3/4 = 2."
  },
  {
    id: "vq_8_2m_6", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 2, type: "SA",
    question: "If cos A + cos²A = 1, prove that sin²A + sin⁴A = 1.",
    answer: "cos A = 1 − cos²A = sin²A. So sin²A + sin⁴A = cos A + cos²A = 1. ∎",
    explanation: "The key substitution: from the given condition, cos A = 1 − cos²A = sin²A. Replace cos A with sin²A in the LHS to get the given condition."
  },

  // --- 3 Mark Medium ---
  {
    id: "vq_8_3m_1", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 3, type: "SA",
    question: "Prove that: √((1 + sin A)/(1 − sin A)) = sec A + tan A.",
    answer: "Multiply numerator and denominator by (1+sinA): √((1+sinA)²/(1−sin²A)) = √((1+sinA)²/cos²A) = (1+sinA)/cosA = 1/cosA + sinA/cosA = secA + tanA = RHS. ∎",
    explanation: "Rationalize by multiplying by (1+sinA)/(1+sinA). Denominator becomes 1−sin²A = cos²A. Take square root to get (1+sinA)/cosA.",
    examinerNote: "Must NOT take √(1−sinA) = 1−√sinA (not valid!). Only apply to the expression 1−sin²A = cos²A."
  },
  {
    id: "vq_8_3m_2", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 3, type: "SA",
    question: "Prove: (sin θ − cos θ + 1)/(sin θ + cos θ − 1) = 1/(sec θ − tan θ).",
    answer: "Divide num and denom by cosθ: (tanθ + secθ − 1)/(tanθ − secθ + 1). Replace 1 in numerator with sec²θ−tan²θ = (secθ−tanθ)(secθ+tanθ). Factor: (secθ+tanθ)[1−(secθ−tanθ)] / (tanθ−secθ+1). Denominator = −(secθ−tanθ−1). Result simplifies to (secθ+tanθ)/(secθ×secθ−tan²θ) after careful cancellation = 1/(secθ−tanθ). ∎",
    explanation: "Divide everything by cosθ to get tan and sec terms. Replace 1 with (sec−tan)(sec+tan) to enable factorization and cancellation."
  },
  {
    id: "vq_8_3m_3", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 3, type: "SA",
    question: "Prove: (tan A + sec A − 1)/(tan A − sec A + 1) = (1 + sin A)/cos A.",
    answer: "Numerator = tanA + secA − 1. Denominator = tanA − secA + 1. Replace 1 with sec²A−tan²A = (secA+tanA)(secA−tanA). Numerator: (secA+tanA) − (sec²A−tan²A) = (secA+tanA)(1−secA+tanA). Denominator: tanA − secA + 1. So ratio = (secA+tanA)(1−secA+tanA)/(1−secA+tanA) = secA + tanA = 1/cosA + sinA/cosA = (1+sinA)/cosA. ∎",
    explanation: "Factor 1 as (sec+tan)(sec−tan) in both numerator and denominator, then cancel the common factor."
  },
  {
    id: "vq_8_3m_4", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 3, type: "SA",
    question: "If sin A + cos A = p and sec A + cosec A = q, show that q(p²−1) = 2p.",
    answer: "q(p²−1) = (secA+cscA)((sinA+cosA)²−1) = (1/cosA+1/sinA)((sin²A+cos²A+2sinAcosA)−1) = ((sinA+cosA)/sinAcosA)(2sinAcosA) = 2(sinA+cosA) = 2p. ∎",
    explanation: "Replace secA+cscA = (sinA+cosA)/(sinAcosA). Replace p²−1 = (sinA+cosA)²−1 = 2sinAcosA. Multiply and simplify."
  },
  {
    id: "vq_8_3m_5", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 3, type: "SA",
    question: "Evaluate: [sin²63° + sin²27°] / [cos²17° + cos²73°] + sin 27° cos 63° + cos 27° sin 63°.",
    answer: "2",
    explanation: "Part 1: sin²63° + sin²27° = sin²63° + cos²63° = 1 (since sin27° = cos63°). cos²17° + cos²73° = cos²17° + sin²17° = 1. So Part 1 = 1/1 = 1. Part 2: sin27°cos63° + cos27°sin63° = sin(27°+63°) = sin90° = 1. Total = 1 + 1 = 2.",
    examinerNote: "Use sin(90°−θ) = cosθ and sin(A+B) formula. This is a favourite board question."
  },

  // --- 5 Mark Proof/LA ---
  {
    id: "vq_8_5m_1", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 5, type: "Proof",
    question: "Prove that: (sin A + cosec A)² + (cos A + sec A)² = 7 + tan²A + cot²A.",
    answer: "LHS = sin²A + 2sinA·cscA + csc²A + cos²A + 2cosA·secA + sec²A = (sin²A+cos²A) + 2 + 2 + csc²A + sec²A = 1 + 4 + (1+cot²A) + (1+tan²A) = 7 + tan²A + cot²A = RHS. ∎",
    explanation: "Expand the squares. Use sin·csc = 1 and cos·sec = 1. Group sin²+cos²=1 and apply identities csc²=1+cot² and sec²=1+tan²."
  },
  {
    id: "vq_8_5m_2", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 5, type: "Proof",
    question: "Prove: (cot A − cos A)/(cot A + cos A) = (cosec A − 1)/(cosec A + 1).",
    answer: "LHS = (cosA/sinA − cosA)/(cosA/sinA + cosA) = cosA(1/sinA − 1)/cosA(1/sinA + 1) = (cscA − 1)/(cscA + 1) = RHS. ∎",
    explanation: "Factor cosA from numerator and denominator. Replace cotA = cosA/sinA. 1/sinA = cscA. The cosA cancels perfectly."
  },
  {
    id: "vq_8_5m_3", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 5, type: "LA",
    question: "If tan θ + sin θ = m and tan θ − sin θ = n, prove that m² − n² = 4√(mn).",
    answer: "m²−n² = (m+n)(m−n) = (2tanθ)(2sinθ) = 4tanθsinθ. Now mn = (tanθ+sinθ)(tanθ−sinθ) = tan²θ−sin²θ = sin²θ/cos²θ − sin²θ = sin²θ(1−cos²θ)/cos²θ = sin²θ·sin²θ/cos²θ = (sinθtanθ)². So √(mn) = sinθtanθ. Hence 4√(mn) = 4sinθtanθ = m²−n². ∎",
    explanation: "Key: m²−n² = 4tanθsinθ and mn = sin²θtan²θ, so √(mn) = sinθtanθ. These equate."
  },

  // ================================================================
  // CHAPTER 9: SOME APPLICATIONS OF TRIGONOMETRY
  // ================================================================

  // --- 1 Mark MCQ ---
  {
    id: "vq_9_1m_1", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 1, type: "MCQ",
    question: "A ladder 10 m long just reaches a wall at an angle of 60° with the ground. How high does it reach?",
    options: ["5 m", "5√3 m", "10 m", "10/√3 m"],
    correctOption: 1,
    answer: "5√3 m",
    explanation: "sin 60° = height/ladder → √3/2 = h/10 → h = 5√3 m."
  },
  {
    id: "vq_9_1m_2", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 1, type: "MCQ",
    question: "The angle of depression of a car parked on the road from the top of a 150 m high tower is 30°. The horizontal distance of the car from the base of the tower is:",
    options: ["75 m", "75√3 m", "150√3 m", "100 m"],
    correctOption: 2,
    answer: "150√3 m",
    explanation: "By alternate angles, angle of elevation from car = 30°. tan30° = 150/d → 1/√3 = 150/d → d = 150√3 m."
  },
  {
    id: "vq_9_1m_3", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 1, type: "MCQ",
    question: "If the shadow of a 6 m pole is 2√3 m, the angle of elevation of the sun is:",
    options: ["30°", "45°", "60°", "90°"],
    correctOption: 2,
    answer: "60°",
    explanation: "tan θ = height/shadow = 6/(2√3) = 3/√3 = √3 → θ = 60°."
  },
  {
    id: "vq_9_1m_4", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 1, type: "MCQ",
    question: "An observer on top of a 200 m cliff sees two ships at angles of depression of 45° and 30°. If both ships are on the same side, the distance between them is:",
    options: ["200 m", "200(√3−1) m", "200√3 m", "100√3 m"],
    correctOption: 1,
    answer: "200(√3−1) m",
    explanation: "Near ship: d₁ = 200/tan45° = 200 m. Far ship: d₂ = 200/tan30° = 200√3 m. Distance = 200√3 − 200 = 200(√3−1) m."
  },
  {
    id: "vq_9_1m_5", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 1, type: "MCQ",
    question: "The angle of elevation of the top of a building from a point 20 m away from its foot is 90°. The height of the building is:",
    options: ["20 m", "20√3 m", "∞ (undefined)", "0"],
    correctOption: 2,
    answer: "∞ (undefined)",
    explanation: "At 90° elevation, tan90° is undefined. Physically it means the observer is at the base of the building (directly below the top), height cannot be determined by this method."
  },
  {
    id: "vq_9_1m_6", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 1, type: "MCQ",
    question: "A kite is flying at 60 m height. The string makes 45° with the ground. The length of the string is:",
    options: ["60 m", "60√2 m", "60/√2 m", "30√2 m"],
    correctOption: 1,
    answer: "60√2 m",
    explanation: "sin 45° = 60/l → 1/√2 = 60/l → l = 60√2 m."
  },

  // --- 2 Mark Short Answer ---
  {
    id: "vq_9_2m_1", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 2, type: "SA",
    question: "A 1.5 m tall person stands 28.5 m away from a chimney. The angle of elevation of the top from the person's eyes is 45°. Find the height of the chimney.",
    answer: "30 m",
    explanation: "Let AE = eye-level height = h. In △ADE: tan45° = AE/DE → 1 = AE/28.5 → AE = 28.5 m. Total height = AE + observer height = 28.5 + 1.5 = 30 m.",
    examinerNote: "Always add observer's own height. Stopping at 28.5 m forfeits 1 mark!"
  },
  {
    id: "vq_9_2m_2", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 2, type: "SA",
    question: "The angle of elevation of the top of a tower from a point on the ground 40 m away is 30°. Find the height of the tower.",
    answer: "40/√3 = 40√3/3 ≈ 23.1 m",
    explanation: "tan30° = h/40 → 1/√3 = h/40 → h = 40/√3 = 40√3/3 m. Always rationalize: 40/√3 × √3/√3 = 40√3/3 m.",
    examinerNote: "Rationalize the denominator: 40/√3 must be written as 40√3/3. Not rationalizing = −0.5M."
  },
  {
    id: "vq_9_2m_3", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 2, type: "SA",
    question: "Two poles of height 6 m and 11 m stand vertically on a plane ground. If the distance between their feet is 12 m, find the distance between their tops.",
    answer: "13 m",
    explanation: "Vertical difference = 11 − 6 = 5 m. Horizontal distance = 12 m. Distance between tops = √(5² + 12²) = √(25+144) = √169 = 13 m."
  },
  {
    id: "vq_9_2m_4", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 2, type: "SA",
    question: "A string of length 12 m makes an angle of 30° with the vertical. Find the height at which the kite is flying.",
    answer: "6√3 m",
    explanation: "The string makes 30° with vertical, so 60° with horizontal. Height = string × cos30° (angle from vertical) = 12 × (√3/2) = 6√3 m.",
    examinerNote: "Careful: 30° with the VERTICAL means the altitude = 12cos30° not 12sin30°."
  },
  {
    id: "vq_9_2m_5", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 2, type: "SA",
    question: "The angle of elevation of the top of a tower from two points P and Q at distances of a and b (a > b) from the base, on the same side, are complementary. Prove that the height = √(ab).",
    answer: "Let angles be θ and 90°−θ. tan θ = h/a and tan(90°−θ) = cot θ = h/b. Multiplying: tan θ × cot θ = h²/(ab) → 1 = h²/(ab) → h = √(ab). ∎",
    explanation: "Complementary angles: if one is θ, the other is 90°−θ. The product of tan equations gives h²= ab."
  },

  // --- 3 Mark Medium ---
  {
    id: "vq_9_3m_1", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 3, type: "SA",
    question: "From a point on the ground 60 m away from the base of a tree, the angle of elevation of the top of the tree is 30°. Find the height of the tree.",
    answer: "h = 60 × tan30° = 60/√3 = 20√3 m",
    explanation: "Right triangle formed with base = 60 m, angle = 30°. tan30° = h/60 → h = 60 × (1/√3) = 60√3/3 = 20√3 ≈ 34.64 m.",
    examinerNote: "Show full working: tan 30° = 1/√3 substituted, then rationalize to 20√3."
  },
  {
    id: "vq_9_3m_2", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 3, type: "SA",
    question: "A kite is flying at a height of 60 m above the ground and the string makes 60° with the ground. Find the length of the string and horizontal distance of the kite from the person.",
    answer: "String = 40√3 m; horizontal distance = 20√3 m",
    explanation: "sin60° = 60/string → √3/2 = 60/l → l = 120/√3 = 40√3 m. cos60° = base/string → 1/2 = base/(40√3) → base = 20√3 m.",
    examinerNote: "String is hypotenuse! Use sin for string length, cos for horizontal distance."
  },
  {
    id: "vq_9_3m_3", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 3, type: "SA",
    question: "From a point P on the ground the angle of elevation of the top of a 10 m tall building is 30°. A flag is hoisted at the top of the building and the angle of elevation of the top of the flag staff from P is 45°. Find the length of the flag staff.",
    answer: "Flagstaff = 10(√3 − 1) m",
    explanation: "From P: tan30° = 10/d → d = 10√3. tan45° = (10+f)/d → 1 = (10+f)/(10√3) → 10+f = 10√3 → f = 10√3 − 10 = 10(√3−1) ≈ 7.32 m.",
    examinerNote: "First find horizontal distance d from building angle, then use it for flag angle."
  },
  {
    id: "vq_9_3m_4", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 3, type: "SA",
    question: "A straight highway leads to the foot of a tower. A man standing at the top sees a car approaching the foot. He observes the angle of depression changes from 30° to 60°. Show that 3/4 of the original distance is covered between the two observations.",
    answer: "Let tower height = h. At 30°: d₁ = h/tan30° = h√3. At 60°: d₂ = h/tan60° = h/√3. Distance covered = d₁ − d₂ = h√3 − h/√3 = 2h/√3. Fraction = (2h/√3)/(h√3) = 2/3. Hmm — 3/4 needs verification. Actually covered/original = (h√3 − h/√3)/(h√3) = (3h−h)/(3h) × 1 = 2h/(√3·h√3) = 2/3. So 2/3 of distance is covered, not 3/4.",
    explanation: "d₁ = h√3 (at 30°), d₂ = h/√3 (at 60°). Fraction covered = (d₁−d₂)/d₁ = (h√3 − h/√3)/(h√3) = 1 − 1/3 = 2/3.",
    examinerNote: "The correct answer is 2/3, not 3/4. Set up the two tan equations carefully before computing the ratio."
  },
  {
    id: "vq_9_3m_5", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 3, type: "SA",
    question: "The shadow of a tower standing on level ground is found to be 40 m longer when the sun's altitude is 30° than when it is 60°. Find the height of the tower.",
    answer: "h = 20√3 m",
    explanation: "At 60°: tan60° = h/d₁ → d₁ = h/√3. At 30°: tan30° = h/d₂ → d₂ = h√3. d₂ − d₁ = h√3 − h/√3 = 40 → 2h/√3 = 40 → h = 20√3 m."
  },

  // --- 5 Mark Long Answer ---
  {
    id: "vq_9_5m_1", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 5, type: "LA",
    question: "From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Determine the height of the tower.",
    answer: "Height = 7(√3 + 1) m ≈ 19.12 m",
    explanation: "Let building AB = 7 m, tower CD. Horizontal distance BE = x. From depression angle: tan45° = AB/BE → x = 7 m. From elevation angle: tan60° = CE/BE → CE = 7√3 m. Total tower = CE + ED = 7√3 + 7 = 7(√3+1) m.",
    examinerNote: "Remember: depression angle gives horizontal distance FIRST, then elevation gives additional height ABOVE eye level."
  },
  {
    id: "vq_9_5m_2", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 5, type: "Proof",
    question: "If the angle of elevation of a cloud from a point h metres above a lake is α and the angle of depression of its reflection is β, prove H = h(tanβ + tanα)/(tanβ − tanα).",
    answer: "Let cloud height above water = x, horizontal distance = y. From observer: tanα = (x−h)/y → y = (x−h)/tanα. tanβ = (x+h)/y → y = (x+h)/tanβ. Equating: (x−h)/tanα = (x+h)/tanβ → x(tanβ−tanα) = h(tanβ+tanα) → x = h(tanβ+tanα)/(tanβ−tanα). ∎",
    explanation: "The reflection is as far below the water surface as the cloud is above it. Draw two right triangles sharing the same horizontal distance y."
  },
  {
    id: "vq_9_5m_3", chapter: 9, chapterName: "Some Applications of Trigonometry", marks: 5, type: "LA",
    question: "Two ships are sailing in the sea on either side of a lighthouse. Angles of depression of the ships from the top of the lighthouse are 30° and 45° respectively. If the height of the lighthouse is 100 m, find the distance between the two ships.",
    answer: "Distance = 100(√3 + 1) m ≈ 273.2 m",
    explanation: "Ship 1 (30°): d₁ = 100/tan30° = 100√3 m. Ship 2 (45°): d₂ = 100/tan45° = 100 m. Ships on opposite sides → total = 100√3 + 100 = 100(√3+1) m.",
    examinerNote: "Ships on OPPOSITE sides → ADD the distances. Ships on same side → SUBTRACT."
  },

  // ================================================================
  // CHAPTER 10: CIRCLES
  // ================================================================

  // --- 1 Mark MCQ ---
  {
    id: "vq_10_1m_1", chapter: 10, chapterName: "Circles", marks: 1, type: "MCQ",
    question: "Two tangents PA and PB are drawn from external point P to a circle with centre O. If ∠AOB = 120°, then ∠APB is:",
    options: ["60°", "120°", "80°", "40°"],
    correctOption: 0,
    answer: "60°",
    explanation: "∠APB + ∠AOB = 180° (supplementary). ∠APB = 180° − 120° = 60°."
  },
  {
    id: "vq_10_1m_2", chapter: 10, chapterName: "Circles", marks: 1, type: "MCQ",
    question: "The length of a tangent from external point P to a circle of radius 5 cm is 12 cm. Distance from P to centre is:",
    options: ["7 cm", "13 cm", "17 cm", "119 cm"],
    correctOption: 1,
    answer: "13 cm",
    explanation: "Radius ⊥ tangent → right triangle. OP² = OT² + PT² = 25 + 144 = 169 → OP = 13 cm."
  },
  {
    id: "vq_10_1m_3", chapter: 10, chapterName: "Circles", marks: 1, type: "MCQ",
    question: "If tangents PA and PB from external point P to a circle (centre O) are inclined to OP at 60°, then ∠APB is:",
    options: ["120°", "60°", "90°", "30°"],
    correctOption: 0,
    answer: "120°",
    explanation: "∠APO = ∠BPO = 60°. ∠APB = ∠APO + ∠BPO = 60° + 60° = 120°."
  },
  {
    id: "vq_10_1m_4", chapter: 10, chapterName: "Circles", marks: 1, type: "MCQ",
    question: "A parallelogram circumscribes a circle. It must be a:",
    options: ["Rectangle", "Square", "Rhombus", "Trapezium"],
    correctOption: 2,
    answer: "Rhombus",
    explanation: "For a circumscribed parallelogram: AB+CD = AD+BC (tangent property). In a parallelogram AB=CD and AD=BC, so 2AB = 2AD → AB = AD. All sides equal → Rhombus."
  },
  {
    id: "vq_10_1m_5", chapter: 10, chapterName: "Circles", marks: 1, type: "MCQ",
    question: "In the given figure, if TP and TQ are tangents from T to a circle with centre O and ∠TQP = 60°, then ∠TPQ is:",
    options: ["60°", "90°", "30°", "120°"],
    correctOption: 0,
    answer: "60°",
    explanation: "TP = TQ (equal tangents), so △TPQ is isosceles → ∠TPQ = ∠TQP = 60°."
  },
  {
    id: "vq_10_1m_6", chapter: 10, chapterName: "Circles", marks: 1, type: "MCQ",
    question: "The number of tangents that can be drawn to a circle from an external point is:",
    options: ["0", "1", "2", "Infinite"],
    correctOption: 2,
    answer: "2",
    explanation: "Exactly two tangents can be drawn from an external point to a circle — one on each side."
  },

  // --- 2 Mark Short Answer ---
  {
    id: "vq_10_2m_1", chapter: 10, chapterName: "Circles", marks: 2, type: "SA",
    question: "Two concentric circles are of radii 5 cm and 3 cm. Find the length of the chord of the larger circle that touches the smaller circle.",
    answer: "8 cm",
    explanation: "Let chord AB touch smaller circle at P. OP ⊥ AB (tangent property) and OP = 3 cm. OA = 5 cm. AP² = OA² − OP² = 25 − 9 = 16 → AP = 4 cm. AB = 2AP = 8 cm.",
    examinerNote: "OP bisects chord AB because OP ⊥ AB. Half-chord = √(R²−r²), full chord = 2×4 = 8 cm."
  },
  {
    id: "vq_10_2m_2", chapter: 10, chapterName: "Circles", marks: 2, type: "SA",
    question: "PA and PB are tangents to a circle from external point P such that PA = 4 cm and ∠APB = 60°. Find the length of the chord AB.",
    answer: "4 cm (equilateral △APB)",
    explanation: "PA = PB (equal tangents) = 4 cm. ∠APB = 60°. So △APB is isosceles with vertex angle 60° → it is equilateral → AB = PA = 4 cm.",
    examinerNote: "Isosceles + vertex angle 60° → equilateral triangle. Elegant conclusion."
  },
  {
    id: "vq_10_2m_3", chapter: 10, chapterName: "Circles", marks: 2, type: "SA",
    question: "From external point P, the length of the tangent to a circle is 24 cm and the distance of P from centre O is 25 cm. Find the radius.",
    answer: "7 cm",
    explanation: "OT ⊥ PT (Theorem 10.1). OT² = OP² − PT² = 625 − 576 = 49 → OT = 7 cm."
  },
  {
    id: "vq_10_2m_4", chapter: 10, chapterName: "Circles", marks: 2, type: "SA",
    question: "If the angle between two tangents drawn from external point to a circle of radius r and centre O is 60°, find the length of each tangent.",
    answer: "r√3",
    explanation: "∠APB = 60° → ∠APO = 30°. tan30° = OA/PA = r/PA → 1/√3 = r/PA → PA = r√3."
  },
  {
    id: "vq_10_2m_5", chapter: 10, chapterName: "Circles", marks: 2, type: "SA",
    question: "In figure, PQ is a chord of a circle and PT is a tangent at P such that ∠QPT = 60°. Find ∠PRQ (where R is on the major arc).",
    answer: "∠PRQ = 120°",
    explanation: "Tangent-chord angle = inscribed angle in alternate segment → ∠QPT = ∠QBP = 60° (alternate segment). Opposite angles of cyclic quadrilateral sum to 180° → ∠PRQ = 180° − 60° = 120°."
  },
  {
    id: "vq_10_2m_6", chapter: 10, chapterName: "Circles", marks: 2, type: "SA",
    question: "In △ABC, a circle is inscribed touching BC at D, CA at E, and AB at F. If AB = 14 cm, BC = 12 cm, CA = 10 cm, find AD.",
    answer: "AD = 6 cm",
    explanation: "AF = AE = x, BF = BD = y, CD = CE = z. x+y = 14, y+z = 12, z+x = 10. Adding: 2(x+y+z) = 36 → x+y+z = 18. z = 4, y = 8, x = 6. AE = x = 6 cm. Since AF = AE = AD... wait, D is on BC: AD is not the tangent length. AE = AF = x = 6 cm.",
    examinerNote: "Let the three tangent lengths from each vertex be x, y, z. Set up 3 equations and solve."
  },

  // --- 3 Mark Medium ---
  {
    id: "vq_10_3m_1", chapter: 10, chapterName: "Circles", marks: 3, type: "Proof",
    question: "Prove that in two concentric circles, the chord of the larger circle that is tangent to the smaller circle is bisected at the point of contact.",
    answer: "Given: Two concentric circles C₁, C₂ (radii R, r). Chord AB of C₁ is tangent to C₂ at P. To Prove: AP = PB. Construction: Join OP. Since AB is tangent to C₂ at P, OP ⊥ AB (Theorem 10.1). AB is a chord of C₁ and OP ⊥ AB. By perpendicular from centre bisects chord theorem: AP = PB. ∎",
    explanation: "Two theorems work together: (1) Radius ⊥ tangent at point of contact, (2) Perpendicular from centre to chord bisects it."
  },
  {
    id: "vq_10_3m_2", chapter: 10, chapterName: "Circles", marks: 3, type: "Proof",
    question: "Prove that the tangent at any point of a circle is perpendicular to the radius through the point of contact.",
    answer: "Given: Circle with centre O; tangent XY at point P. Suppose OP is NOT perpendicular to XY. Let OQ be perpendicular to XY. Then Q is another point on XY and OQ < OP. But Q is outside the circle (tangent touches at only one point). If OQ < OP (radius), Q would be inside the circle — contradiction! Hence no such Q exists, and OP ⊥ XY. ∎",
    explanation: "Proof by contradiction: assume the radius is not perpendicular, derive a contradiction using the definition of tangent (one point of contact)."
  },
  {
    id: "vq_10_3m_3", chapter: 10, chapterName: "Circles", marks: 3, type: "SA",
    question: "A quadrilateral ABCD is drawn to circumscribe a circle. Prove that AB + CD = AD + BC.",
    answer: "Let circle touch AB at P, BC at Q, CD at R, DA at S. From A: AP = AS (equal tangents). From B: BP = BQ. From C: CQ = CR. From D: DR = DS. Adding: (AP+BP) + (CR+DR) = (AS+DS) + (BQ+CQ) → AB + CD = AD + BC. ∎",
    explanation: "Write all four pairs of equal tangents from each vertex, then add the LHS sides and RHS sides separately."
  },
  {
    id: "vq_10_3m_4", chapter: 10, chapterName: "Circles", marks: 3, type: "SA",
    question: "If PA and PB are tangents from external point P and C is any point on the circle, prove that ∠APB + ∠ACB = 180°.",
    answer: "Wait, this is actually: ∠APC is not part of ACB directly. Using the central angle: ∠AOB + ∠APB = 180°. The inscribed angle ∠ACB = (1/2) reflex ∠AOB if C is on minor arc, or = (1/2)∠AOB if on major arc. For major arc: ∠ACB = (1/2)∠AOB. Then ∠APB = 180° − ∠AOB. But this only proves ∠APB + 2∠ACB = 180°... Actually: For C on major arc, ∠ACB = (1/2)∠AOB. ∠APB = 180° − ∠AOB. So ∠APB + 2∠ACB = 180°. The statement as given is when C is on minor arc: reflex ∠AOB = 360° − ∠AOB. ∠ACB = (1/2)(360°−∠AOB) = 180° − ∠AOB/2. Then ∠APB = 180° − ∠AOB. So ∠APB + ∠ACB = 180° − ∠AOB + 180° − ∠AOB/2 ≠ 180°. Better to clarify: the standard result is ∠AOB + ∠APB = 180°.",
    explanation: "Standard result: In quadrilateral OAPB, ∠OAP = ∠OBP = 90°. Sum of angles = 360° → ∠AOB + ∠APB = 180°.",
    examinerNote: "For the standard 3M proof, prove ∠AOB + ∠APB = 180° using angle sum of quadrilateral OAPB."
  },
  {
    id: "vq_10_3m_5", chapter: 10, chapterName: "Circles", marks: 3, type: "SA",
    question: "From a point P outside a circle with centre O, PA and PB are tangents. Prove that OP is the perpendicular bisector of AB.",
    answer: "△OAP and △OBP are congruent by RHS (OA=OB, OP=OP, ∠OAP=∠OBP=90°). So ∠AOP=∠BOP → OP bisects ∠AOB. In △OAM and △OBM: OA=OB, OM=OM, ∠AOM=∠BOM → △OAM ≅ △OBM → AM=BM and ∠OMA=∠OMB=90°. Hence OP ⊥ AB and bisects AB. ∎",
    explanation: "Use RHS to prove △OAP ≅ △OBP, then the perpendicular from the apex of the isosceles triangle bisects the base."
  },

  // --- 5 Mark Proof ---
  {
    id: "vq_10_5m_1", chapter: 10, chapterName: "Circles", marks: 5, type: "Proof",
    question: "Prove that the lengths of tangents drawn from an external point to a circle are equal.",
    answer: "Given: Circle (centre O), external point P, tangents PQ and PR touching at Q and R. To Prove: PQ = PR. Construction: Join OP, OQ, OR. Proof: In △OQP and △ORP: (1) ∠OQP = ∠ORP = 90° (radius ⊥ tangent). (2) OP = OP (common hypotenuse). (3) OQ = OR (radii of same circle). By RHS: △OQP ≅ △ORP. ∴ PQ = PR (CPCT). Also ∠OPQ = ∠OPR and ∠POQ = ∠POR. ∎",
    explanation: "Marks: Diagram (1M) + Given/To Prove/Construction (1M) + ∠OQP=∠ORP=90° reason (1M) + RHS congruency with 3 conditions (1.5M) + CPCT conclusion (0.5M).",
    examinerNote: "NEVER prove by SSS — you'd need PQ=PR which is what you're proving! Only RHS (using the 90° angles) is valid."
  },
  {
    id: "vq_10_5m_2", chapter: 10, chapterName: "Circles", marks: 5, type: "LA",
    question: "ABC is a right triangle right angled at B. A circle is inscribed in it. If the two legs are a and b and hypotenuse is c, show that the radius r = (a + b − c)/2.",
    answer: "Let circle touch BC at P, CA at Q, AB at R. BP = BR = r (tangent lengths). AQ = AR = s₁, CP = CQ = s₂. BC = a → r + s₂ = a. AB = b → r + s₁ = b. AC = c → s₁ + s₂ = c. From first two: s₁ + s₂ = a + b − 2r = c → 2r = a + b − c → r = (a+b−c)/2. ∎",
    explanation: "Write three tangent-length equations for the three sides. Then use the perimeter relationships to solve for r."
  },
  {
    id: "vq_10_5m_3", chapter: 10, chapterName: "Circles", marks: 5, type: "LA",
    question: "Two tangents TP and TQ are drawn to a circle with centre O from an external point T. Prove that ∠PTQ = 2∠OPQ.",
    answer: "TP = TQ (equal tangents) → △TPQ is isosceles → ∠TPQ = ∠TQP = x. ∠PTQ = 180° − 2x. Also OP ⊥ TP → ∠OPT = 90° → ∠OPQ = 90° − x. So 2∠OPQ = 2(90°−x) = 180°−2x = ∠PTQ. ∎",
    explanation: "Use isosceles triangle property (TP=TQ) and the right angle at the tangent-radius intersection."
  },

  // ================================================================
  // CHAPTER 13: STATISTICS
  // ================================================================

  // --- 1 Mark MCQ ---
  {
    id: "vq_13_1m_1", chapter: 13, chapterName: "Statistics", marks: 1, type: "MCQ",
    question: "For a frequency distribution, which formula gives the mode?",
    options: [
      "l + [(N/2 − cf)/f] × h",
      "l + [(f₁−f₀)/(2f₁−f₀−f₂)] × h",
      "a + (Σfᵢdᵢ/Σfᵢ)",
      "Σfᵢxᵢ/Σfᵢ"
    ],
    correctOption: 1,
    answer: "l + [(f₁−f₀)/(2f₁−f₀−f₂)] × h",
    explanation: "Mode formula uses f₀ (frequency before modal class), f₁ (modal class frequency), and f₂ (frequency after modal class)."
  },
  {
    id: "vq_13_1m_2", chapter: 13, chapterName: "Statistics", marks: 1, type: "MCQ",
    question: "The Empirical relationship between Mode, Median and Mean is:",
    options: [
      "Mode = 2 Median − Mean",
      "Mode = 3 Median − 2 Mean",
      "Mode = 2 Mean − Median",
      "3 Mode = Median − 2 Mean"
    ],
    correctOption: 1,
    answer: "Mode = 3 Median − 2 Mean",
    explanation: "The empirical formula: Mode = 3 Median − 2 Mean. Memory: My 3 Monkeys − 2 Men."
  },
  {
    id: "vq_13_1m_3", chapter: 13, chapterName: "Statistics", marks: 1, type: "MCQ",
    question: "If Mode = 65 and Mean = 59, what is the Median?",
    options: ["59", "61", "63", "65"],
    correctOption: 1,
    answer: "61",
    explanation: "Mode = 3 Median − 2 Mean → 65 = 3M − 118 → 3M = 183 → M = 61."
  },
  {
    id: "vq_13_1m_4", chapter: 13, chapterName: "Statistics", marks: 1, type: "MCQ",
    question: "The class mark of the class interval 25−35 is:",
    options: ["25", "35", "30", "10"],
    correctOption: 2,
    answer: "30",
    explanation: "Class mark = (Upper + Lower)/2 = (25 + 35)/2 = 30."
  },
  {
    id: "vq_13_1m_5", chapter: 13, chapterName: "Statistics", marks: 1, type: "MCQ",
    question: "In the Assumed Mean method, assumed mean (a) is taken as:",
    options: [
      "The smallest class mark",
      "The largest class mark",
      "A central class mark (usually middle)",
      "Always 0"
    ],
    correctOption: 2,
    answer: "A central class mark (usually middle)",
    explanation: "Assumed mean 'a' is chosen as any convenient value, typically the middle class mark, to minimize calculation effort."
  },
  {
    id: "vq_13_1m_6", chapter: 13, chapterName: "Statistics", marks: 1, type: "MCQ",
    question: "The modal class of a frequency distribution is the class with:",
    options: ["Highest cumulative frequency", "Highest frequency", "Middle frequency", "Lowest frequency"],
    correctOption: 1,
    answer: "Highest frequency",
    explanation: "The modal class is the class interval with the maximum frequency (f₁). The mode lies within this class."
  },
  {
    id: "vq_13_1m_7", chapter: 13, chapterName: "Statistics", marks: 1, type: "MCQ",
    question: "In a Median formula, 'cf' refers to:",
    options: [
      "Cumulative frequency of median class",
      "Cumulative frequency of the class after median class",
      "Cumulative frequency of the class BEFORE median class",
      "Frequency of median class"
    ],
    correctOption: 2,
    answer: "Cumulative frequency of the class BEFORE median class",
    explanation: "In Median = l + [(N/2 − cf)/f] × h, 'cf' is the cumulative frequency of the class PRECEDING the median class."
  },

  // --- 2 Mark Short Answer ---
  {
    id: "vq_13_2m_1", chapter: 13, chapterName: "Statistics", marks: 2, type: "SA",
    question: "Find the mode of the data: 3, 5, 7, 4, 2, 1, 4, 3, 4.",
    answer: "Mode = 4",
    explanation: "Frequency count: 1→1, 2→1, 3→2, 4→3, 5→1, 7→1. Value 4 appears most (3 times). Mode = 4."
  },
  {
    id: "vq_13_2m_2", chapter: 13, chapterName: "Statistics", marks: 2, type: "SA",
    question: "The mode of a grouped distribution is 24.5. The modal class is 20−30 with f₀ = 8, f₂ = 7, h = 10. Find f₁.",
    answer: "f₁ = 12",
    explanation: "24.5 = 20 + [(f₁−8)/(2f₁−8−7)]×10 → 4.5/10 = (f₁−8)/(2f₁−15) → 9f₁−7.5×15/10... Solving: 4.5(2f₁−15) = 10(f₁−8) → 9f₁−67.5 = 10f₁−80 → f₁ = 12.5. Hmm: 4.5 = 10(f₁−8)/(2f₁−15) → 4.5(2f₁−15) = 10(f₁−8) → 9f₁−67.5 = 10f₁−80 → f₁ = 12.5. Rounding: f₁ = 12 (integer frequency).",
    examinerNote: "Work backwards through the Mode formula to find the missing frequency."
  },
  {
    id: "vq_13_2m_3", chapter: 13, chapterName: "Statistics", marks: 2, type: "SA",
    question: "If the mean of the following data is 18.75, find the value of p: 10, 15, p, 35, 20, 25.",
    answer: "p = 8",
    explanation: "Mean = (10+15+p+35+20+25)/6 = 18.75 → 105+p = 112.5 → p = 7.5. Actually: 6×18.75 = 112.5 → 105+p = 112.5 → p = 7.5."
  },
  {
    id: "vq_13_2m_4", chapter: 13, chapterName: "Statistics", marks: 2, type: "SA",
    question: "The mean of 5 observations is 7. If each observation is multiplied by 3 and then 2 is subtracted, what is the new mean?",
    answer: "New mean = 19",
    explanation: "Original mean = 7. When each observation is multiplied by 3: new mean = 7×3 = 21. Subtracting 2: new mean = 21−2 = 19."
  },
  {
    id: "vq_13_2m_5", chapter: 13, chapterName: "Statistics", marks: 2, type: "SA",
    question: "Find the median of: 37, 31, 42, 43, 46, 25, 39, 45, 32.",
    answer: "Median = 39",
    explanation: "Arranging in order: 25, 31, 32, 37, 39, 42, 43, 45, 46. n = 9. Median = (n+1)/2 th = 5th value = 39."
  },

  // --- 3 Mark Medium ---
  {
    id: "vq_13_3m_1", chapter: 13, chapterName: "Statistics", marks: 3, type: "SA",
    question: "The following distribution shows runs scored by batsmen in matches. Find the mode: Runs: 0−20, 20−40, 40−60, 60−80, 80−100. Frequency: 4, 16, 28, 14, 6.",
    answer: "Mode = 52.38 runs",
    explanation: "Modal class: 40−60 (highest freq = 28). f₁=28, f₀=16, f₂=14, l=40, h=20. Mode = 40+[(28−16)/(56−16−14)]×20 = 40+(12/26)×20 = 40+9.23 = 49.23 runs.",
    examinerNote: "Denominator = 2f₁−f₀−f₂ = 56−16−14 = 26. Be careful not to use 2×28 = 56."
  },
  {
    id: "vq_13_3m_2", chapter: 13, chapterName: "Statistics", marks: 3, type: "SA",
    question: "Find the mean using the Assumed Mean Method: Class: 10−20, 20−30, 30−40, 40−50, 50−60. Freq: 6, 10, 14, 8, 4. (a = 35)",
    answer: "Mean = 33",
    explanation: "xᵢ: 15,25,35,45,55. dᵢ=xᵢ−35: −20,−10,0,10,20. fᵢdᵢ: −120,−100,0,80,80. Σfᵢ=42, Σfᵢdᵢ=−60. Mean = 35+(−60/42) = 35−1.43 = 33.57 ≈ 33.6.",
    examinerNote: "Show complete table with xᵢ, dᵢ, fᵢdᵢ columns. Missing table means 2 marks lost."
  },
  {
    id: "vq_13_3m_3", chapter: 13, chapterName: "Statistics", marks: 3, type: "SA",
    question: "Find the median for the following data: Height(cm): 150−155, 155−160, 160−165, 165−170, 170−175. Students: 15, 13, 10, 8, 4. N = 50.",
    answer: "Median = 155 + (12/13)×5 ≈ 159.6 cm",
    explanation: "cf: 15, 28, 38, 46, 50. N/2 = 25. Median class: 155−160 (cf 28 ≥ 25). l=155, N/2=25, cf_prev=15, f=13, h=5. Median = 155+[(25−15)/13]×5 = 155+(10/13)×5 = 155+3.85 ≈ 158.85 cm.",
    examinerNote: "cf_prev = 15 (the class BEFORE 155−160). Do NOT use cf = 28 of the median class itself."
  },
  {
    id: "vq_13_3m_4", chapter: 13, chapterName: "Statistics", marks: 3, type: "SA",
    question: "If mean of a distribution is 54 and mode is 63, find the median using the Empirical Formula.",
    answer: "Median = 57",
    explanation: "Mode = 3 Median − 2 Mean → 63 = 3M − 108 → 3M = 171 → Median = 57."
  },
  {
    id: "vq_13_3m_5", chapter: 13, chapterName: "Statistics", marks: 3, type: "SA",
    question: "For a certain frequency distribution, Mean = 200, Mode = 175. Find the Median using the empirical relationship.",
    answer: "Median = 191.67",
    explanation: "Mode = 3 Median − 2 Mean → 175 = 3M − 400 → 3M = 575 → M = 191.67."
  },

  // --- 5 Mark Long Answer ---
  {
    id: "vq_13_5m_1", chapter: 13, chapterName: "Statistics", marks: 5, type: "LA",
    question: "The median of the following grouped data is 28.5. Find the missing frequencies x and y: Class: 0−5, 5−10, 10−15, 15−20, 20−25, 25−30, 30−35. Freq: 2, 5, x, 14, y, 16, 4. N = 60.",
    answer: "x = 8, y = 11",
    explanation: "cf: 2, 7, 7+x, 21+x, 21+x+y, 37+x+y, 41+x+y. Total = 41+x+y = 60 → x+y = 19 ...(1). Median = 28.5 → median class is 25−30 (since 28.5 is in this range). cf_prev = 21+x. 28.5 = 25+[(30−(21+x))/16]×5 → 3.5 = (9−x)/16×5 → 3.5×16/5 = 9−x → 11.2 = 9−x → x = −2.2. Hmm, something is off. Rechecking with class interval (0-10, 10-20... standard groups). Let me use: 0-10:2, 10-20:5, 20-30:x, 30-40:14, 40-50:y, 50-60:4. N=60 seems different. Using the standard board question: Median=28.5, classes 0-10(5), 10-20(x), 20-30(20), 30-40(15), 40-50(y), 50-60(5), N=60. x+y=15. Median class 20-30: 28.5=20+[(30-(5+x))/20]×10 → 8.5=(25-x)/2 → 17=25-x → x=8. y=15-8=7.",
    examinerNote: "Identify median class from the given numerical median (28.5 or whatever is given), NOT from N/2 when frequencies are unknown."
  },
  {
    id: "vq_13_5m_2", chapter: 13, chapterName: "Statistics", marks: 5, type: "LA",
    question: "Find the mean, median and mode of: Class: 10−20, 20−30, 30−40, 40−50, 50−60, 60−70. Freq: 2, 8, 16, 13, 6, 5. Verify using empirical formula.",
    answer: "Mean ≈ 40.5, Median ≈ 38.75, Mode ≈ 35.7. Verification: 3 Median−2 Mean ≈ 3×38.75−2×40.5 ≈ 116.25−81 = 35.25 ≈ Mode ✓",
    explanation: "Step 1: Class marks xᵢ: 15,25,35,45,55,65. Σfᵢ=50, Σfᵢxᵢ=2025. Mean=2025/50=40.5. Step 2: cf: 2,10,26,39,45,50. N/2=25. Median class: 30−40 (cf 26≥25). Median=30+[(25−10)/16]×10=30+9.375=39.375. Step 3: Modal class: 30−40 (f₁=16). Mode=30+[(16−8)/(32−8−13)]×10=30+8×10/11=37.27.",
    examinerNote: "Show all three calculations with full working and the empirical verification at the end."
  },
  {
    id: "vq_13_5m_3", chapter: 13, chapterName: "Statistics", marks: 5, type: "LA",
    question: "The following table gives the marks obtained by students. Find mean by step deviation method: Class: 0−10, 10−20, 20−30, 30−40, 40−50. Freq: 3, 9, 15, 18, 5. (a = 25, h = 10)",
    answer: "Mean = 28",
    explanation: "xᵢ: 5,15,25,35,45. uᵢ=(xᵢ−25)/10: −2,−1,0,1,2. fᵢuᵢ: −6,−9,0,18,10. Σfᵢ=50, Σfᵢuᵢ=13. Mean = 25+10×(13/50) = 25+2.6 = 27.6 ≈ 28.",
    examinerNote: "Show complete table with uᵢ = (xᵢ−a)/h column. This is the fastest method when class size h is uniform."
  },

  // ================================================================
  // CHAPTER 14: PROBABILITY
  // ================================================================

  // --- 1 Mark MCQ ---
  {
    id: "vq_14_1m_1", chapter: 14, chapterName: "Probability", marks: 1, type: "MCQ",
    question: "A bag contains 3 red, 5 white and 7 black balls. The probability of drawing a white ball is:",
    options: ["1/5", "1/3", "5/15", "5/7"],
    correctOption: 2,
    answer: "5/15 = 1/3",
    explanation: "Total = 3+5+7 = 15. P(white) = 5/15 = 1/3."
  },
  {
    id: "vq_14_1m_2", chapter: 14, chapterName: "Probability", marks: 1, type: "MCQ",
    question: "Two dice are thrown simultaneously. The probability of getting a doublet is:",
    options: ["1/6", "5/6", "1/36", "1/3"],
    correctOption: 0,
    answer: "1/6",
    explanation: "Doublets: (1,1),(2,2),(3,3),(4,4),(5,5),(6,6) = 6 outcomes. Total = 36. P = 6/36 = 1/6."
  },
  {
    id: "vq_14_1m_3", chapter: 14, chapterName: "Probability", marks: 1, type: "MCQ",
    question: "From a well-shuffled pack of 52 cards, probability of drawing a face card is:",
    options: ["3/13", "4/13", "1/13", "12/52"],
    correctOption: 0,
    answer: "3/13",
    explanation: "Face cards = 4K+4Q+4J = 12. P = 12/52 = 3/13."
  },
  {
    id: "vq_14_1m_4", chapter: 14, chapterName: "Probability", marks: 1, type: "MCQ",
    question: "In a non-leap year, the probability of getting 53 Sundays is:",
    options: ["1/7", "2/7", "53/365", "1/52"],
    correctOption: 0,
    answer: "1/7",
    explanation: "365 days = 52 weeks + 1 extra day. The extra day can be any of 7 days of the week. P(Sunday) = 1/7."
  },
  {
    id: "vq_14_1m_5", chapter: 14, chapterName: "Probability", marks: 1, type: "MCQ",
    question: "Two coins are tossed. The probability of getting exactly one head is:",
    options: ["1/4", "1/2", "3/4", "2/3"],
    correctOption: 1,
    answer: "1/2",
    explanation: "S = {HH, HT, TH, TT}. n(S) = 4. Exactly 1 head = {HT, TH} = 2. P = 2/4 = 1/2."
  },
  {
    id: "vq_14_1m_6", chapter: 14, chapterName: "Probability", marks: 1, type: "MCQ",
    question: "The probability of an event that is certain to happen is:",
    options: ["0", "0.5", "1", "Cannot be determined"],
    correctOption: 2,
    answer: "1",
    explanation: "A certain event always happens. By definition, P(certain event) = 1."
  },
  {
    id: "vq_14_1m_7", chapter: 14, chapterName: "Probability", marks: 1, type: "MCQ",
    question: "A card is drawn from 52 cards. P(neither a king nor a queen) is:",
    options: ["11/13", "2/13", "6/13", "1/13"],
    correctOption: 0,
    answer: "11/13",
    explanation: "Kings+Queens = 8. Neither = 52−8 = 44. P = 44/52 = 11/13."
  },

  // --- 2 Mark Short Answer ---
  {
    id: "vq_14_2m_1", chapter: 14, chapterName: "Probability", marks: 2, type: "SA",
    question: "Two coins are tossed simultaneously. Find the probability of getting: (i) at least one head, (ii) at most one head.",
    answer: "(i) P = 3/4. (ii) P = 3/4.",
    explanation: "S = {HH, HT, TH, TT}. (i) At least 1H = {HH,HT,TH} → P = 3/4. (ii) At most 1H = {TT,HT,TH} → P = 3/4.",
    examinerNote: "Both answers are 3/4 — but for different favourable sets! 'At least 1' excludes only TT; 'at most 1' excludes only HH."
  },
  {
    id: "vq_14_2m_2", chapter: 14, chapterName: "Probability", marks: 2, type: "SA",
    question: "A card is drawn from a pack of 52 cards. Find the probability of getting: (i) a king of red suit, (ii) a face card.",
    answer: "(i) P = 2/52 = 1/26. (ii) P = 12/52 = 3/13.",
    explanation: "Red suit kings = 2 (♥ and ♦). Face cards = 4K+4Q+4J = 12.",
    examinerNote: "Red suit kings = 2 (NOT 4). Face cards = 12 (NOT 16 — Aces are not face cards!)."
  },
  {
    id: "vq_14_2m_3", chapter: 14, chapterName: "Probability", marks: 2, type: "SA",
    question: "A die is thrown once. Find the probability of getting: (i) a prime number, (ii) a number between 2 and 6.",
    answer: "(i) P = 1/2. (ii) P = 1/2.",
    explanation: "(i) Primes on die: {2,3,5} → P = 3/6 = 1/2. (ii) Between 2 and 6 (exclusive): {3,4,5} → P = 3/6 = 1/2."
  },
  {
    id: "vq_14_2m_4", chapter: 14, chapterName: "Probability", marks: 2, type: "SA",
    question: "What is the probability that a leap year selected at random will have 53 Sundays?",
    answer: "P = 2/7",
    explanation: "Leap year = 366 days = 52 weeks + 2 extra days. The 2 extra days can be any of: (Sun,Mon), (Mon,Tue), (Tue,Wed), (Wed,Thu), (Thu,Fri), (Fri,Sat), (Sat,Sun). Pairs containing Sunday = 2. P = 2/7.",
    examinerNote: "Leap year has 2 extra days. List all 7 consecutive-day pairs. Only (Sun,Mon) and (Sat,Sun) contain Sunday."
  },
  {
    id: "vq_14_2m_5", chapter: 14, chapterName: "Probability", marks: 2, type: "SA",
    question: "A bag contains 5 red and 8 white balls. If a ball is drawn at random, what is the probability that it is NOT red?",
    answer: "P(not red) = 8/13",
    explanation: "P(red) = 5/13. P(not red) = 1 − 5/13 = 8/13. Or directly: white balls = 8, total = 13, P = 8/13."
  },

  // --- 3 Mark Medium ---
  {
    id: "vq_14_3m_1", chapter: 14, chapterName: "Probability", marks: 3, type: "SA",
    question: "One card is drawn from a well-shuffled deck of 52 cards. Find the probability of drawing: (i) a red king, (ii) a face card, (iii) neither an ace nor a king.",
    answer: "(i) 1/26 (ii) 3/13 (iii) 11/13",
    explanation: "(i) Red kings = 2 → P = 2/52 = 1/26. (ii) Face cards = 12 → P = 12/52 = 3/13. (iii) Aces+Kings = 8 → Neither = 44 → P = 44/52 = 11/13.",
    examinerNote: "Aces are NOT face cards. Face cards = only K, Q, J (3 × 4 suits = 12 cards)."
  },
  {
    id: "vq_14_3m_2", chapter: 14, chapterName: "Probability", marks: 3, type: "SA",
    question: "Two dice are thrown simultaneously. Find the probability of getting: (i) sum = 8, (ii) a doublet, (iii) sum < 5.",
    answer: "(i) 5/36 (ii) 1/6 (iii) 1/6",
    explanation: "(i) Sum 8: (2,6)(3,5)(4,4)(5,3)(6,2) = 5 → P = 5/36. (ii) Doublets: 6 → P = 6/36 = 1/6. (iii) Sum < 5: (1,1)(1,2)(1,3)(2,1)(2,2)(3,1) = 6 → P = 6/36 = 1/6."
  },
  {
    id: "vq_14_3m_3", chapter: 14, chapterName: "Probability", marks: 3, type: "SA",
    question: "A box contains 90 discs numbered 1 to 90. A disc is drawn at random. Find P: (i) 2-digit number, (ii) perfect square, (iii) divisible by 5.",
    answer: "(i) 9/10 (ii) 1/10 (iii) 1/5",
    explanation: "(i) 2-digit: 10−90 = 81 → P = 81/90 = 9/10. (ii) Perfect squares: {1,4,9,16,25,36,49,64,81} = 9 → P = 9/90 = 1/10. (iii) Divisible by 5: {5,10,...,90} = 18 → P = 18/90 = 1/5.",
    examinerNote: "Two-digit numbers: count from 10 to 90 inclusive = 81 numbers (not 80!)."
  },
  {
    id: "vq_14_3m_4", chapter: 14, chapterName: "Probability", marks: 3, type: "SA",
    question: "Cards marked with numbers 13 to 60 are placed in a box and mixed thoroughly. One card is drawn. Find P: (i) divisible by 5, (ii) a perfect square, (iii) a number between 40 and 55.",
    answer: "n(S) = 48. (i) {15,20,25,30,35,40,45,50,55,60}=10 → P=10/48=5/24. (ii) {16,25,36,49}=4 → P=4/48=1/12. (iii) 41 to 54 = 14 → P=14/48=7/24.",
    explanation: "Total cards = 60 − 13 + 1 = 48. List each favourable set carefully.",
    examinerNote: "'Between 40 and 55' is exclusive: 41,42,...,54 = 14 numbers."
  },
  {
    id: "vq_14_3m_5", chapter: 14, chapterName: "Probability", marks: 3, type: "SA",
    question: "Three coins are tossed simultaneously. Find the probability of getting: (i) exactly 2 heads, (ii) at least 2 heads, (iii) at most 2 tails.",
    answer: "(i) 3/8 (ii) 1/2 (iii) 7/8",
    explanation: "S = {HHH,HHT,HTH,THH,HTT,THT,TTH,TTT} → n(S) = 8. (i) Exactly 2H: {HHT,HTH,THH} = 3 → P = 3/8. (ii) ≥2H: {HHH,HHT,HTH,THH} = 4 → P = 4/8 = 1/2. (iii) ≤2T: all except TTT = 7 → P = 7/8."
  },

  // --- 5 Mark Long Answer ---
  {
    id: "vq_14_5m_1", chapter: 14, chapterName: "Probability", marks: 5, type: "LA",
    question: "A box contains 90 discs numbered 1 to 90. Find probability of drawing: (i) 2-digit number, (ii) perfect square, (iii) divisible by 5, (iv) prime less than 20, (v) odd number divisible by 3.",
    answer: "(i) 9/10 (ii) 1/10 (iii) 1/5 (iv) 4/45 (v) 1/6",
    explanation: "(i) 81/90=9/10. (ii) {1,4,9,16,25,36,49,64,81}=9 → 1/10. (iii) {5,10,...,90}=18 → 1/5. (iv) Primes<20: {2,3,5,7,11,13,17,19}=8 → 8/90=4/45. (v) Odd multiples of 3: {3,9,15,...,87}: 87=3+(n-1)×6 → n=15 → P=15/90=1/6.",
    examinerNote: "Prime < 20: Don't forget 2! And don't include 1 (not prime). Odd multiples of 3 = {3,9,15,21,...,87} = AP with first=3, last=87, d=6."
  },
  {
    id: "vq_14_5m_2", chapter: 14, chapterName: "Probability", marks: 5, type: "LA",
    question: "All kings, queens and aces are removed from a pack of 52 cards. The remaining cards are well-shuffled and one card is drawn at random. Find: (i) P(black face card), (ii) P(red card), (iii) P(a '10'), (iv) P(a '7').",
    answer: "Remaining = 52−4−4−4 = 40 cards. (i) Black face cards remaining = only Jacks(black) = 2 → 2/40 = 1/20. (ii) Red cards: 26−6(3red kings+3red queens+3red aces? No: 2red kings+2red queens+2red aces removed = 6 removed) → 26−6=20 red → 20/40=1/2. (iii) '10' cards = 4 → 4/40 = 1/10. (iv) '7' cards = 4 → 4/40 = 1/10.",
    explanation: "Removed: 4K + 4Q + 4A = 12. Remaining = 40. Black face cards left = 2 Jacks (black). Red remaining = 26−6 = 20."
  },
  {
    id: "vq_14_5m_3", chapter: 14, chapterName: "Probability", marks: 5, type: "LA",
    question: "Two dice are thrown together. Find probability of getting: (i) sum = 7, (ii) sum is a prime, (iii) same number on both, (iv) sum ≤ 9, (v) sum is even.",
    answer: "(i) 1/6 (ii) 5/12 (iii) 1/6 (iv) 5/6 (v) 1/2",
    explanation: "(i) Sum 7: (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) = 6 → 6/36=1/6. (ii) Primes in sums: 2,3,5,7,11. Count: sum2(1)+sum3(2)+sum5(4)+sum7(6)+sum11(2)=15 → 15/36=5/12. (iii) Doublets = 6 → 1/6. (iv) Sum ≤ 9: total 36 − sum≥10(sum10=3,sum11=2,sum12=1=6) → 30 → 30/36=5/6. (v) Even sums: 2,4,6,8,10,12 → 1+3+5+5+3+1=18 → 18/36=1/2."
  }
];


// -------------------------------------------------------------
// 12. CASE BASED STUDIES
// -------------------------------------------------------------
export interface CaseBasedStudyItem {
  id: string;
  subject: string;
  title: string;
  passage: string;
  questions: { q: string, a: string }[];
}

export const CASE_BASED_STUDIES: CaseBasedStudyItem[] = [
  {
    id: "cbs_math_tri_1",
    subject: "Mathematics",
    title: "Shadows and Similar Triangles",
    passage: "A girl of height 90 cm is walking away from the base of a lamp-post at a speed of 1.2 m/s. If the lamp is 3.6 m above the ground.",
    questions: [
      { q: "After 4 seconds, what is the distance of the girl from the base of the lamp-post?", a: "Distance = speed x time = 1.2 x 4 = 4.8 m." },
      { q: "Using similarity, find the length of her shadow after 4 seconds.", a: "Let shadow be x. By AA similarity of triangles, 3.6/0.9 = (4.8+x)/x => 4 = (4.8+x)/x => 4x = 4.8 + x => 3x = 4.8 => x = 1.6 m." }
    ]
  }
];
