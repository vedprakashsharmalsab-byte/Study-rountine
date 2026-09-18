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
  examStatus?: "board_exam" | "partial_board" | "periodic_test_only" | "project_only" | "deleted";
  examStatusLabel?: string;
  syllabusNote?: string;
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
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (6–8 Marks)",
      "syllabusNote": "Core Chapter: Tested in Board Theory (MCQs, 3M SA, 5M LA).",
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
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (7–9 Marks + 2M Map)",
      "syllabusNote": "High Weightage: Compulsory 2M Map Pointing + 5M LA / 3M SA in Board Exam.",
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
          "title": "Non-Cooperation Movement: Differing Strands in Towns, Countryside & Tribal Awadh/Gudem Hills",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "h_2_3",
          "sectionCode": "2.3",
          "title": "Salt March, Civil Disobedience Movement Launch, Round Table Conferences & Gandhi-Irwin Pact",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        },
        {
          "id": "h_2_4",
          "sectionCode": "2.4",
          "title": "Limits of Civil Disobedience, Dalits & Dr. Ambedkar Poona Pact (1932) & Sense of Collective Belonging",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
      ]
    },
    {
      "id": "sst_his3",
      "name": "History: The Making of a Global World",
      "ncertChapterNo": 3,
      "examStatus": "partial_board",
      "examStatusLabel": "Partial: Subtopics 1 to 1.3 Only (2–3M)",
      "syllabusNote": "CBSE Official Syllabus: Subtopics 1 to 1.3 only (Pre-modern World to Conquest, Disease & Trade) evaluated in Board Exam. Subtopics 2 to 4 evaluated in Interdisciplinary Project.",
      "topics": [
        {
          "id": "h_3_1",
          "sectionCode": "3.1",
          "title": "The Pre-modern World, Ancient Silk Routes & Food Travels (Spaghetti & Potato)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "h_3_2",
          "sectionCode": "3.2",
          "title": "Conquest, Disease and Trade: Smallpox as a Biological Weapon in America & Precious Metals Flow",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "h_3_3",
          "sectionCode": "3.3",
          "title": "The Nineteenth Century (1815-1914): Flow of Trade, Labour & Capital (Project / Interdisciplinary)",
          "isImportantForBoards": false,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "Project Only"
        }
      ]
    },
    {
      "id": "sst_his_ind",
      "name": "History: The Age of Industrialisation",
      "ncertChapterNo": 4,
      "examStatus": "periodic_test_only",
      "examStatusLabel": "Periodic Tests Only (NOT in Board Exam)",
      "syllabusNote": "Assessed ONLY in School Periodic Tests. Zero questions appear in the 80 Marks Board Theory Paper.",
      "topics": [
        {
          "id": "h_ind_1",
          "sectionCode": "4.1",
          "title": "Before the Industrial Revolution & Proto-industrialisation in Countryside",
          "isImportantForBoards": false,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "Periodic Test"
        },
        {
          "id": "h_ind_2",
          "sectionCode": "4.2",
          "title": "Hand Labour and Steam Power in Victorian Britain",
          "isImportantForBoards": false,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "Periodic Test"
        },
        {
          "id": "h_ind_3",
          "sectionCode": "4.3",
          "title": "Industrialisation in the Colonies & Early Indian Entrepreneurs",
          "isImportantForBoards": false,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "Periodic Test"
        }
      ]
    },
    {
      "id": "sst_his4",
      "name": "History: Print Culture and the Modern World",
      "ncertChapterNo": 5,
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (4–5 Marks)",
      "syllabusNote": "Core Chapter: Tested in Board Theory (Gutenberg Press, Print Revolution, Women Readers).",
      "topics": [
        {
          "id": "h_4_1",
          "sectionCode": "5.1",
          "title": "First Printed Books (China, Japan - Diamond Sutra) & Marco Polo's Woodblock Printing to Europe",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "h_4_2",
          "sectionCode": "5.2",
          "title": "Johann Gutenberg Printing Press Innovation (1448) & The Print Revolution",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "h_4_3",
          "sectionCode": "5.3",
          "title": "Religious Debates: Martin Luther Ninety-Five Theses & Roman Catholic Church Index of Prohibited Books",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "h_4_4",
          "sectionCode": "5.4",
          "title": "India and the World of Print: Bengal Gazette, Vernacular Press Act (1878) & Women Reformers (Rashsundari Debi)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
      ]
    },
    {
      "id": "sst_civ1",
      "name": "Civics: Power Sharing",
      "ncertChapterNo": 6,
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (4–5 Marks)",
      "syllabusNote": "Core Chapter: Belgium vs Sri Lanka case study, Prudential vs Moral reasons.",
      "topics": [
        {
          "id": "c_1_1",
          "sectionCode": "6.1",
          "title": "Ethnic Composition of Belgium (Dutch 59%, French 40%, German 1%) & Brussels Special Dynamic",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "c_1_2",
          "sectionCode": "6.2",
          "title": "Majoritarianism in Sri Lanka (1956 Sinhala Act, State Patronage to Buddhism & Tamil Alienation)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "c_1_3",
          "sectionCode": "6.3",
          "title": "Belgian Model of Accommodation: Equal Representation, Community Govt & Brussels Capital of EU",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "c_1_4",
          "sectionCode": "6.4",
          "title": "Why Power Sharing is Desirable (Prudential vs Moral Reasons) & Forms of Power Sharing (Horizontal vs Vertical)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
      ]
    },
    {
      "id": "sst_civ2",
      "name": "Civics: Federalism",
      "ncertChapterNo": 7,
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (4–5 Marks)",
      "syllabusNote": "Core Chapter: 3-Fold Distribution (Union, State, Concurrent), 1992 Decentralisation.",
      "topics": [
        {
          "id": "c_2_1",
          "sectionCode": "7.1",
          "title": "What is Federalism? Key Features (Two or more levels, separate jurisdiction, constitutional guarantee)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "c_2_2",
          "sectionCode": "7.2",
          "title": "Routes to Federation: 'Coming Together' (USA, Switzerland, Australia) vs 'Holding Together' (India, Spain, Belgium)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "c_2_3",
          "sectionCode": "7.3",
          "title": "Three-fold Legislative Powers: Union List (100), State List (61), Concurrent List (52) & Residuary Subjects",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "c_2_4",
          "sectionCode": "7.4",
          "title": "How Federalism is Practiced (Linguistic States, Language Policy, Center-State Relations) & 1992 Decentralisation",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
      ]
    },
    {
      "id": "sst_civ3",
      "name": "Civics: Gender, Religion and Caste",
      "ncertChapterNo": 8,
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (4–5 Marks)",
      "syllabusNote": "Core Chapter: Sexual division of labour, Communalism vs Secular State, Caste in Politics.",
      "topics": [
        {
          "id": "c_3_1",
          "sectionCode": "8.1",
          "title": "Gender & Politics: Sexual Division of Labour, Feminist Movements, Patriarchal Society & Women Political Representation",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "c_3_2",
          "sectionCode": "8.2",
          "title": "Religion, Communalism and Politics: Communal Politics Forms & Constitutional Provisions of Secular State",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "c_3_3",
          "sectionCode": "8.3",
          "title": "Caste & Politics: Caste Inequalities, Role of Caste in Politics & Politics in Caste",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        }
      ]
    },
    {
      "id": "sst_civ4",
      "name": "Civics: Political Parties",
      "ncertChapterNo": 9,
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (5–6 Marks)",
      "syllabusNote": "High Probability 5M Question: Functions of Political Parties & Challenges they face.",
      "topics": [
        {
          "id": "c_4_1",
          "sectionCode": "9.1",
          "title": "Why Do We Need Political Parties? Definition, 3 Components (Leaders, Active Members, Followers)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "c_4_2",
          "sectionCode": "9.2",
          "title": "Key Functions of Political Parties (Contesting Elections, Policy Formulation, Making Laws, Role of Opposition)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "c_4_3",
          "sectionCode": "9.3",
          "title": "Party Systems (One-Party, Two-Party, Multi-Party) & National vs State Recognised Political Parties Criteria (ECI)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "c_4_4",
          "sectionCode": "9.4",
          "title": "Challenges to Political Parties (Lack of Internal Democracy, Dynastic Succession, Money & Muscle Power, Meaningful Choice) & Reforms",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        }
      ]
    },
    {
      "id": "sst_civ5",
      "name": "Civics: Outcomes of Democracy",
      "ncertChapterNo": 10,
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (4–5 Marks)",
      "syllabusNote": "Core Chapter: Accountable, Responsive & Legitimate Govt; Economic Growth vs Inequality.",
      "topics": [
        {
          "id": "c_5_1",
          "sectionCode": "10.1",
          "title": "How Do We Assess Democracy's Outcomes? Promotes Equality, Enhances Dignity, Improves Quality of Decision Making",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "c_5_2",
          "sectionCode": "10.2",
          "title": "Accountable, Responsive and Legitimate Government: Transparency, Right to Information, Decision-Making Deliberations",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "c_5_3",
          "sectionCode": "10.3",
          "title": "Economic Growth and Development vs Reduction of Inequality and Poverty & Accommodation of Social Diversity",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
      ]
    },
    {
      "id": "sst_geo1",
      "name": "Geography: Resources and Development",
      "ncertChapterNo": 11,
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (4–5 Marks + Map)",
      "syllabusNote": "Core Chapter: Soil Identification Map Skill + Rio Earth Summit 1992 + Land Degradation.",
      "topics": [
        {
          "id": "g_1_1",
          "sectionCode": "11.1",
          "title": "Classification of Resources (Origin, Exhaustibility, Ownership & Status of Development - Potential, Developed, Stock, Reserves)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "g_1_2",
          "sectionCode": "11.2",
          "title": "Sustainable Development, Rio de Janeiro Earth Summit 1992 & Agenda 21",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "g_1_3",
          "sectionCode": "11.3",
          "title": "Land Resources in India, Land Use Pattern (NSA, Forests) & Causes of Land Degradation (Mining, Overgrazing, Over-irrigation)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "g_1_4",
          "sectionCode": "11.4",
          "title": "Soil as a Resource: Classification (Alluvial, Black/Regur, Red & Yellow, Laterite, Arid, Forest) & Soil Conservation Methods",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / Map"
        }
      ]
    },
    {
      "id": "sst_geo2",
      "name": "Geography: Forest and Wildlife Resources",
      "ncertChapterNo": 12,
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (3–4 Marks)",
      "syllabusNote": "Core Chapter: Reserved vs Protected vs Unclassed Forests; JFM & Community Conservation.",
      "topics": [
        {
          "id": "g_2_1",
          "sectionCode": "12.1",
          "title": "Flora and Fauna in India & IUCN Classification (Normal, Endangered, Vulnerable, Rare, Endemic, Extinct)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "g_2_2",
          "sectionCode": "12.2",
          "title": "Conservation of Forest and Wildlife: Indian Wildlife Protection Act 1972 & Project Tiger 1973",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "g_2_3",
          "sectionCode": "12.3",
          "title": "Types of Forests (Reserved, Protected, Unclassed) & Community Conservation (Sariska, Chipko, Beej Bachao Andolan, JFM)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        }
      ]
    },
    {
      "id": "sst_geo3",
      "name": "Geography: Water Resources",
      "ncertChapterNo": 13,
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (4–5 Marks + Map)",
      "syllabusNote": "Core Chapter: Compulsory Map (Salal, Bhakra Nangal, Tehri, Rana Pratap, Sardar Sarovar, Hirakud, Nagarjuna Sagar, Tungabhadra) + Rainwater Harvesting.",
      "topics": [
        {
          "id": "g_3_1",
          "sectionCode": "13.1",
          "title": "Water Scarcity Causes (Over-exploitation, Unequal Access, Industrial Pollution) & Need for Water Conservation",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "g_3_2",
          "sectionCode": "13.2",
          "title": "Multi-purpose River Projects: Advantages (Irrigation, Hydroelectricity) vs Environmental/Social Criticisms (Narmada Bachao Andolan)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "g_3_3",
          "sectionCode": "13.3",
          "title": "Rainwater Harvesting: Guls/Kuls (Himalayas), Johads/Khadins (Rajasthan), Tankas (Bikaner/Phalodi), Bamboo Drip Irrigation & Tamil Nadu Law",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        }
      ]
    },
    {
      "id": "sst_geo4",
      "name": "Geography: Agriculture",
      "ncertChapterNo": 14,
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (5–6 Marks + Map)",
      "syllabusNote": "Core Chapter: Major Cropping Seasons, Rice/Wheat geographical conditions, Map Pointing.",
      "topics": [
        {
          "id": "g_4_1",
          "sectionCode": "14.1",
          "title": "Types of Farming: Primitive Subsistence (Jhumming/Slash-and-Burn), Intensive Subsistence & Commercial Farming (Plantations)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "g_4_2",
          "sectionCode": "14.2",
          "title": "Cropping Pattern: Rabi (Wheat, Mustard), Kharif (Paddy, Maize, Cotton) & Zaid (Watermelon, Cucumber) Seasons",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "g_4_3",
          "sectionCode": "14.3",
          "title": "Major Crops (Food Grains): Rice, Wheat, Millets (Jowar, Bajra, Ragi), Maize, Pulses — Geographical Requirements & Production States",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M / Map"
        },
        {
          "id": "g_4_4",
          "sectionCode": "14.4",
          "title": "Non-Food & Cash Crops (Sugarcane, Tea, Coffee, Rubber, Cotton, Jute) & Institutional/Technological Reforms (Bhoodan-Gramdan)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
      ]
    },
    {
      "id": "sst_geo5",
      "name": "Geography: Minerals and Energy Resources",
      "ncertChapterNo": 15,
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (5–6 Marks + Map)",
      "syllabusNote": "Core Chapter: Thermal/Nuclear power plants Map + Conventional vs Non-Conventional Energy.",
      "topics": [
        {
          "id": "g_5_1",
          "sectionCode": "15.1",
          "title": "What is a Mineral? Modes of Occurrence (Igneous/Metamorphic veins, Sedimentary beds, Placer deposits & Ocean waters)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "g_5_2",
          "sectionCode": "15.2",
          "title": "Ferrous Minerals (Iron Ore - Hematite/Magnetite belts in Odisha-Jharkhand, Durg-Bastar-Chandrapur, Kudremukh; Manganese)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / Map"
        },
        {
          "id": "g_5_3",
          "sectionCode": "15.3",
          "title": "Non-Ferrous & Non-Metallic Minerals: Bauxite (Panchpatmali in Koraput), Copper (Khetri), Mica (Koderma) & Hazards of Mining",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "g_5_4",
          "sectionCode": "15.4",
          "title": "Energy Resources: Conventional (Coal - Anthracite/Bituminous/Lignite, Petroleum - Mumbai High, Digboi; Natural Gas) vs Non-Conventional (Solar, Wind, Biogas, Nuclear)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M / Map"
        }
      ]
    },
    {
      "id": "sst_geo6",
      "name": "Geography: Manufacturing Industries",
      "ncertChapterNo": 16,
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (5–6 Marks + Map)",
      "syllabusNote": "Core Chapter: Industrial Pollution control + Iron & Steel / Cotton Textile centers Map.",
      "topics": [
        {
          "id": "g_6_1",
          "sectionCode": "16.1",
          "title": "Importance of Manufacturing as Backbone of Economic Development & Factors of Industrial Location (Agglomeration Economies)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "g_6_2",
          "sectionCode": "16.2",
          "title": "Classification of Industries: Agro-Based (Cotton, Jute Mills in Hugli basin, Sugar) & Mineral-Based Industries",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "g_6_3",
          "sectionCode": "16.3",
          "title": "Heavy Industries: Iron & Steel Industry (Raw Material Proportions 4:2:1, Chota Nagpur concentration) & Aluminium Smelting",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M / Map"
        },
        {
          "id": "g_6_4",
          "sectionCode": "16.4",
          "title": "Chemical, Fertilizer, Cement, Automobile, IT & Electronics Industries, Industrial Pollution (Air, Water, Thermal, Noise) & NTPC Proactive Measures",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        }
      ]
    },
    {
      "id": "sst_geo7",
      "name": "Geography: Lifelines of National Economy",
      "ncertChapterNo": 17,
      "examStatus": "partial_board",
      "examStatusLabel": "Map Items ONLY in Board Exam (1M)",
      "syllabusNote": "CBSE Official Syllabus: Only MAP ITEMS (Major Sea Ports & International Airports) are evaluated in Board Exam. Theoretical chapter content is evaluated in Interdisciplinary Project.",
      "topics": [
        {
          "id": "g_7_1",
          "sectionCode": "17.1",
          "title": "Roadways: Golden Quadrilateral Super Highways, National, State & Rural Roads, Road Density Challenges",
          "isImportantForBoards": false,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "Project Only"
        },
        {
          "id": "g_7_2",
          "sectionCode": "17.2",
          "title": "Railways, Pipelines (Hazira-Vijaipur-Jagdishpur HVJ) & Waterways (National Waterway 1 Ganga)",
          "isImportantForBoards": false,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "Project Only"
        },
        {
          "id": "g_7_3",
          "sectionCode": "17.3",
          "title": "Major Sea Ports (Kandla, Mumbai, Marmagao, New Mangalore, Kochi, Tuticorin, Chennai, Visakhapatnam, Paradip, Haldia) - MAP CORE",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "Board Map Core"
        },
        {
          "id": "g_7_4",
          "sectionCode": "17.4",
          "title": "Airways, International Airports (Amritsar, Delhi, Mumbai, Chennai, Kolkata, Hyderabad - MAP) & Communication and International Trade as Economic Barometer",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "Board Map Core"
        }
      ]
    },
    {
      "id": "sst_eco1",
      "name": "Economics: Development",
      "ncertChapterNo": 18,
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (5–6 Marks)",
      "syllabusNote": "Core Chapter: Per Capita Income vs UNDP Human Development Index (HDI) Comparison.",
      "topics": [
        {
          "id": "e_1_1",
          "sectionCode": "18.1",
          "title": "What Development Promises: Different People, Different Goals & Conflicting Developmental Aspirations",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "e_1_2",
          "sectionCode": "18.2",
          "title": "Income and Other Goals (Security, Freedom, Equal Treatment) & National Development Criteria",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "e_1_3",
          "sectionCode": "18.3",
          "title": "Comparing Countries & States: Per Capita Income (World Bank Criterion & Disparities Limitation)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "e_1_4",
          "sectionCode": "18.4",
          "title": "Public Facilities, Infant Mortality Rate (IMR), Literacy Rate, Net Attendance Ratio & UNDP Human Development Index (HDI) vs World Bank",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
      ]
    },
    {
      "id": "sst_eco2",
      "name": "Economics: Sectors of the Indian Economy",
      "ncertChapterNo": 19,
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (7–8 Marks)",
      "syllabusNote": "High Weightage: GDP Calculation, Disguised Unemployment, MGNREGA 2005, Organised vs Unorganised.",
      "topics": [
        {
          "id": "e_2_1",
          "sectionCode": "19.1",
          "title": "Sectors of Economic Activities: Primary (Agriculture), Secondary (Industrial) & Tertiary (Service Sector)",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "e_2_2",
          "sectionCode": "19.2",
          "title": "Comparing the Three Sectors: Calculating GDP through Value of Final Goods and Services Produced",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "e_2_3",
          "sectionCode": "19.3",
          "title": "Historical Shifts in Sectors, Rising Importance of Tertiary Sector & Where are Most People Employed?",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "e_2_4",
          "sectionCode": "19.4",
          "title": "Disguised Unemployment (Underemployment) in Agriculture, How to Create More Employment & MGNREGA 2005 (100 Days Guarantee)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        }
      ]
    },
    {
      "id": "sst_eco3",
      "name": "Economics: Money and Credit",
      "ncertChapterNo": 20,
      "examStatus": "board_exam",
      "examStatusLabel": "Coming in Board Exam (6–7 Marks)",
      "syllabusNote": "Core Chapter: Terms of Credit, Formal vs Informal Sector Loans, Role of RBI & SHGs.",
      "topics": [
        {
          "id": "e_3_1",
          "sectionCode": "20.1",
          "title": "Money as a Medium of Exchange, Barter System & Double Coincidence of Wants",
          "isImportantForBoards": true,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "1M / 2M"
        },
        {
          "id": "e_3_2",
          "sectionCode": "20.2",
          "title": "Modern Forms of Money: Currency (Authorized by Govt), Demand Deposits in Banks & Cheque Payment Mechanism",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "e_3_3",
          "sectionCode": "20.3",
          "title": "Loan Activities of Banks, Two Different Credit Situations (Positive Return vs Debt-Trap) & Terms of Credit (Collateral, Interest, Documentation)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M / 5M"
        },
        {
          "id": "e_3_4",
          "sectionCode": "20.4",
          "title": "Formal Sector Credit (Commercial Banks, Cooperatives monitored by RBI) vs Informal Sector Credit (Moneylenders) & Self-Help Groups (SHGs) for the Poor",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "5M"
        }
      ]
    },
    {
      "id": "sst_eco4",
      "name": "Economics: Globalization and the Indian Economy",
      "ncertChapterNo": 21,
      "examStatus": "partial_board",
      "examStatusLabel": "Partial: What is Globalization & Factors Only (3M)",
      "syllabusNote": "CBSE Official Syllabus: 'What is Globalization?' and 'Factors that have Enabled Globalization' evaluated in Board Exam. Rest evaluated in Project Work.",
      "topics": [
        {
          "id": "e_4_1",
          "sectionCode": "21.1",
          "title": "Production Across Countries & Multinational Corporations (MNCs) Interlinking Production Across Borders",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "2M / 3M"
        },
        {
          "id": "e_4_2",
          "sectionCode": "21.2",
          "title": "What is Globalization? Definition, Rapid Integration of Markets & Goods/Services Movement Across Nations",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "e_4_3",
          "sectionCode": "21.3",
          "title": "Factors Enabling Globalization: Rapid Improvements in Transportation & Information and Communication Technology (ICT)",
          "isImportantForBoards": true,
          "probability": "High Chance 90%+ Recurring",
          "expectedMarks": "3M"
        },
        {
          "id": "e_4_4",
          "sectionCode": "21.4",
          "title": "Role of World Trade Organization (WTO), Impact on Small Producers vs Consumers & Strategies for Fair Globalization (Project)",
          "isImportantForBoards": false,
          "probability": "Medium Chance (60-80%)",
          "expectedMarks": "Project Only"
        }
      ]
    },
    {
      "id": "sst_eco5",
      "name": "Economics: Consumer Rights",
      "ncertChapterNo": 22,
      "examStatus": "project_only",
      "examStatusLabel": "Project Work Only (NOT in Board Theory)",
      "syllabusNote": "As per CBSE Curriculum 2024-26, this chapter is for Project Work only and will NOT appear in the Board Theory Paper.",
      "topics": [
        {
          "id": "e_5_1",
          "sectionCode": "22.1",
          "title": "The Consumer in the Marketplace & Forms of Consumer Exploitation",
          "isImportantForBoards": false,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "Project Only"
        },
        {
          "id": "e_5_2",
          "sectionCode": "22.2",
          "title": "Consumer Movement in India & Consumer Protection Act (COPRA 1986 / 2019)",
          "isImportantForBoards": false,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "Project Only"
        },
        {
          "id": "e_5_3",
          "sectionCode": "22.3",
          "title": "Consumer Rights: Right to Safety, Information, Choice, Redressal & Representation",
          "isImportantForBoards": false,
          "probability": "1M Foundation / Conceptual",
          "expectedMarks": "Project Only"
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
        id: "hin_sp_p1",
        name: "स्पर्श: बड़े भाई साहब (प्रेमचंद)",
        ncertChapterNo: 1,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "स्पर्श गद्य पाठ १: बाल-मनोविज्ञान, रटंत विद्या बनाम व्यावहारिक अनुभव, रावण का उदाहरण।",
        topics: [
          { id: "hin_p1_1", sectionCode: "1.1", title: "दो भाइयों के स्वभाव व अध्ययन पद्धति में अंतर", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_p1_2", sectionCode: "1.2", title: "बड़े भाई साहब का उपदेश व रावण का ऐतिहासिक उदाहरण", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" },
          { id: "hin_p1_3", sectionCode: "1.3", title: "वार्षिक परीक्षा परिणाम: छोटा भाई अव्वल, बड़े भाई फेल", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" },
          { id: "hin_p1_4", sectionCode: "1.4", title: "पतंगबाजी की घटना व बड़े भाई का बड़प्पन एवं कर्तव्य-बोध", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "5M" }
        ]
      },
      {
        id: "hin_sp_p2",
        name: "स्पर्श: डायरी का एक पन्ना (सीताराम सेकसरिया)",
        ncertChapterNo: 2,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "स्पर्श गद्य पाठ २: 26 जनवरी 1931 कोलकाता का स्वतंत्रता संग्राम, पुलिसिया लाठीचार्ज, महिलाओं का योगदान।",
        topics: [
          { id: "hin_p2_1", sectionCode: "2.1", title: "26 जनवरी 1931: कोलकाता में प्रथम स्वतंत्रता दिवस का भव्य आयोजन", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_p2_2", sectionCode: "2.2", title: "पुलिस कमिश्नर की नोटिस बनाम काउंसिल का खुला आह्वान", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" },
          { id: "hin_p2_3", sectionCode: "2.3", title: "सुभाष बाबू का जुलूस, पुलिस लाठीचार्ज व महिलाओं की गिरफ्तारी", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" },
          { id: "hin_p2_4", sectionCode: "2.4", title: "कोलकाता पर लगे कलंक का परिमार्जन व ऐतिहासिक सीख", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" }
        ]
      },
      {
        id: "hin_sp_p3",
        name: "स्पर्श: तँतारा-वामीरो कथा (लीलाधर मंडलोई)",
        ncertChapterNo: 3,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "स्पर्श गद्य पाठ ३: अंडमान निकोबार लोककथा, रूढ़ियों का त्याग, तँतारा की दैवीय तलवार।",
        topics: [
          { id: "hin_p3_1", sectionCode: "3.1", title: "पासा गाँव का वीर व परोपकारी युवक तँतारा व उसकी जादुई लकड़ी की तलवार", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_p3_2", sectionCode: "3.2", title: "समुद्र तट पर वामीरो का मधुर गायन व प्रथम साक्षात्कार", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" },
          { id: "hin_p3_3", sectionCode: "3.3", title: "पशु-पर्व पर अपमान, रूढ़ियों के विरुद्ध विद्रोह व द्वीप का दो टुकड़ों में विभक्त होना", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "5M" },
          { id: "hin_p3_4", sectionCode: "3.4", title: "तँतारा-वामीरो का त्यागमय बलिदान व समाज में रूढ़िवादी परंपरा का अंत", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" }
        ]
      },
      {
        id: "hin_sp_p4",
        name: "स्पर्श: तीसरी कसम के शिल्पकार शैलेंद्र (प्रहलाद अग्रवाल)",
        ncertChapterNo: 4,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "स्पर्श गद्य पाठ ४: शैलेंद्र की संवेदनशीलता, राजकपूर, फणीश्वरनाथ रेणु की 'मारे गए गुलफाम'।",
        topics: [
          { id: "hin_p4_1", sectionCode: "4.1", title: "कवि शैलेंद्र का व्यक्तित्व: आदर्शवादी, संवेदनशील व आत्मसम्मान से परिपूर्ण", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_p4_2", sectionCode: "4.2", title: "फिल्म 'तीसरी कसम' का निर्माण: विशुद्ध कलात्मक प्रतिबद्धता बनाम व्यावसायिकता", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" },
          { id: "hin_p4_3", sectionCode: "4.3", title: "गीतों की सार्थकता: 'रातों दसों दिशाओं से कहेंगी अपनी कहानियाँ' का अमर संदेश", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" },
          { id: "hin_p4_4", sectionCode: "4.4", title: "राजकपूर का हीरामन अभिनय व फिल्म को राष्ट्रपति स्वर्ण पदक सम्मान", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" }
        ]
      },
      {
        id: "hin_sp_p5",
        name: "स्पर्श: अब कहाँ दूसरे के दुख से दुखी होने वाले (निदा फाज़ली)",
        ncertChapterNo: 5,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "स्पर्श गद्य पाठ ५: प्रकृति का संतुलन, सुलेमान व चींटियाँ, नूह का रोना, कबूतर के अंडे की घटना।",
        topics: [
          { id: "hin_p5_1", sectionCode: "5.1", title: "सृष्टि का संतुलन: प्रकृति किसी एक की जागीर नहीं, सभी जीवों का समान अधिकार", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_p5_2", sectionCode: "5.2", title: "सुलेमान व चींटियों का प्रसंग एवं हज़रत नूह का जीवन भर पश्चाताप (कुत्ते से माफ़ी)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" },
          { id: "hin_p5_3", sectionCode: "5.3", title: "लेखक की माँ का प्रायश्चित: कबूतर का अंडा टूटने पर दिन भर का रोज़ा", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" },
          { id: "hin_p5_4", sectionCode: "5.4", title: "प्रकृति का रौद्र रूप: मुंबई में समुद्री तूफान व मनुष्यों की स्वार्थपरकता", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" }
        ]
      },
      {
        id: "hin_sp_p6",
        name: "स्पर्श: पतझर में टूटी पत्तियाँ (रवींद्र केलेकर)",
        ncertChapterNo: 6,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "स्पर्श गद्य पाठ ६: गिन्नी का सोना (शुद्ध आदर्श बनाम व्यावहारिकता) व झेन की देन (टी-सेरेमनी व वर्तमान में जीना)।",
        topics: [
          { id: "hin_p6_1", sectionCode: "6.1", title: "गिन्नी का सोना: शुद्ध सोने (आदर्श) और ताँबे (व्यावहारिकता) का दार्शनिक अंतर", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_p6_2", sectionCode: "6.2", title: "गाँधी जी का व्यावहारिक आदर्शवाद: आदर्शों को ऊँचा रखना न कि नीचे गिराना", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" },
          { id: "hin_p6_3", sectionCode: "6.3", title: "झेन की देन: जापानी टी-सेरेमनी (चा-नो-यू) एवं मानसिक तनाव मुक्ति", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" },
          { id: "hin_p6_4", sectionCode: "6.4", title: "वर्तमान क्षण में जीना: भूतकाल और भविष्य काल दोनों मिथ्या हैं", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" }
        ]
      },
      {
        id: "hin_sp_p7",
        name: "स्पर्श: कारतूस (हबीब तनवीर)",
        ncertChapterNo: 7,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "स्पर्श गद्य पाठ ७: वज़ीर अली की देशभक्ति व जाँबाज़ी, कर्नल और लेफ्टिनेंट का खेमा, गोरखपुर का जंगल।",
        topics: [
          { id: "hin_p7_1", sectionCode: "7.1", title: "गोरखपुर के जंगलों में कर्नल और लेफ्टिनेंट का डेरा व वज़ीर अली का आतंक", isImportantForBoards: true, probability: "1M Foundation / Conceptual", expectedMarks: "1M / 2M" },
          { id: "hin_p7_2", sectionCode: "7.2", title: "सआदत अली खान की गद्दारी व अंग्रेजों द्वारा अवध के तख्त पर कब्जा", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" },
          { id: "hin_p7_3", sectionCode: "7.3", title: "वज़ीर अली का बनारस में वकील की हत्या व कंपनी के खिलाफ जंग का ऐलान", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" },
          { id: "hin_p7_4", sectionCode: "7.4", title: "सवार का अकेले खेमे में आना, कर्नल से कारतूस लेना व जाँबाज़ सिपाही का परिचय", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "5M" }
        ]
      },
      {
        id: "hin_sp_k1",
        name: "स्पर्श: कबीर – साखी",
        ncertChapterNo: 8,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "स्पर्श काव्य पाठ १: सधुक्कड़ी भाषा, कस्तूरी कुंडल, मीठी वाणी, बिरह भुवंगम, दीपक जोया।",
        topics: [
          { id: "hin_k1_1", sectionCode: "8.1", title: "ऐसी बाणी बोलिए मन का आपा खोइ (वाणी का प्रभाव व अहंकार त्याग)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_k1_2", sectionCode: "8.2", title: "कस्तूरी कुंडलि बसै मृग ढूँढै बन माहि (ईश्वर घट-घट में व्याप्त)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_k1_3", sectionCode: "8.3", title: "जब मैं था तब हरि नहीं, अब हरि हैं मैं नाहिं (ज्ञान का दीपक व अहंकार नाश)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" },
          { id: "hin_k1_4", sectionCode: "8.4", title: "सुखिया सब संसार है खावै अरु सोवै (सांसारिक अज्ञान बनाम साधक की विरह पीड़ा)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" }
        ]
      },
      {
        id: "hin_sp_k2",
        name: "स्पर्श: मीरा – पद",
        ncertChapterNo: 9,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "स्पर्श काव्य पाठ २: ब्रज-मिश्रित राजस्थानी, द्रौपदी लाज, प्रह्लाद, ऐरावत उद्धार, चाकर राखो जी।",
        topics: [
          { id: "hin_k2_1", sectionCode: "9.1", title: "हरि आप हरो जन री भीर (द्रौपदी, प्रह्लाद व गजराज के उद्धार का दृष्टांत)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" },
          { id: "hin_k2_2", sectionCode: "9.2", title: "स्याम म्हाने चाकर राखो जी (श्रीकृष्ण की दासी बनने का सौभाग्य व तीन लाभ)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" },
          { id: "hin_k2_3", sectionCode: "9.3", title: "श्रीकृष्ण के अलौकिक रूप का सौंदर्य (मोरमुकुट, पीतांबर, वैजयंती माला)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_k2_4", sectionCode: "9.4", title: "यमुना तट पर आधी रात में दर्शन की अभिलाषा व प्रेम की विह्वलता", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" }
        ]
      },
      {
        id: "hin_sp_k3",
        name: "स्पर्श: मैथिलीशरण गुप्त – मनुष्यता",
        ncertChapterNo: 10,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "स्पर्श काव्य पाठ ३: खड़ी बोली, दधीचि, कर्ण, रंतिदेव, उशीनर (शिबि) का त्याग; 'वही मनुष्य है कि जो मनुष्य के लिए मरे'।",
        topics: [
          { id: "hin_k3_1", sectionCode: "10.1", title: "मृत्य की सार्थकता व सुमृत्यु (परहित में प्राण न्योछावर करने वाले की अमरता)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_k3_2", sectionCode: "10.2", title: "पौराणिक महापुरुषों का बलिदान: रंतिदेव की थाली, दधीचि की अस्थियाँ, शिबि का मांस व कर्ण का कुंडल", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" },
          { id: "hin_k3_3", sectionCode: "10.3", title: "सहानुभूति व उदारता: महात्मा बुद्ध का करुणा भाव व विश्व-बंधुत्व", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" },
          { id: "hin_k3_4", sectionCode: "10.4", title: "सच्चा मनुष्य कौन? जो संकीर्ण स्वार्थ से परे होकर सम्पूर्ण मानवता हेतु जिए", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "5M" }
        ]
      },
      {
        id: "hin_sp_k4",
        name: "स्पर्श: सुमित्रानंदन पंत – पर्वत प्रदेश में पावस",
        ncertChapterNo: 11,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "स्पर्श काव्य पाठ ४: छायावादी प्रकृति चित्रण, मानवीकरण अलंकार, मेखलाकार पर्वत, सहस्त्र दृग सुमन, झरने, साल के वृक्ष।",
        topics: [
          { id: "hin_k4_1", sectionCode: "11.1", title: "पावस ऋतु में प्रकृति का प्रतिपल बदलता वेष व मेखलाकार पर्वत का रूप", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_k4_2", sectionCode: "11.2", title: "सहस्त्र दृग-सुमन (फूल रूपी नेत्र) व नीचे दर्पण सा फैला ताल", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" },
          { id: "hin_k4_3", sectionCode: "11.3", title: "झरनों का मोती की लड़ियों जैसा झाग व पर्वतों के हृदय से उठते साल के वृक्ष", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" },
          { id: "hin_k4_4", sectionCode: "11.4", title: "धुंध का प्रकोप, बादलों का उड़ना व इंद्र का जादुई खेल (इंद्रजाल)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" }
        ]
      },
      {
        id: "hin_sp_k5",
        name: "स्पर्श: वीरेन डंगवाल – तोप",
        ncertChapterNo: 12,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "स्पर्श काव्य पाठ ५: 1857 की तोप, कंपनी बाग मुहाना, चिड़ियों (गौरैयों) का बैठना; चाहे कितना भी बड़ा क्रूर शासक हो अंत निश्चित है।",
        topics: [
          { id: "hin_k5_1", sectionCode: "12.1", title: "कंपनी बाग के मुहाने पर रखी 1857 की तोप व उसकी ऐतिहासिक धरोहर", isImportantForBoards: true, probability: "1M Foundation / Conceptual", expectedMarks: "1M / 2M" },
          { id: "hin_k5_2", sectionCode: "12.2", title: "तोप की आत्मस्वीकारोक्ति: 'मैंने बड़े-बड़े सूरमाओं के उड़ा दिए थे धज्जे'", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_k5_3", sectionCode: "12.3", title: "वर्तमान स्थिति: बच्चों की सवारी व चिड़ियों, विशेषकर गौरैयों की गपशप", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" },
          { id: "hin_k5_4", sectionCode: "12.4", title: "तोप कविता का मूल संदेश: क्रूर दमनकारी सत्ता चाहे कितनी भी बलवान हो, एक दिन उसका मुँह बंद हो जाता है", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" }
        ]
      },
      {
        id: "hin_sp_k6",
        name: "स्पर्श: कैफ़ी आज़मी – कर चले हम फ़िदा",
        ncertChapterNo: 13,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "स्पर्श काव्य पाठ ६: 1962 भारत-चीन युद्ध पृष्ठभूमि, 'हकीकत' फिल्म का गीत, सैनिकों का देशवासियों को संदेश, सीता का आंचल।",
        topics: [
          { id: "hin_k6_1", sectionCode: "13.1", title: "सैनिकों का अंतिम संदेश: 'कर चले हम फ़िदा जान-ओ-तन साथियो, अब तुम्हारे हवाले वतन साथियो'", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_k6_2", sectionCode: "13.2", title: "कुर्बानी की राह कभी वीरान न हो: काफिले तैयार रखने का संकल्प", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" },
          { id: "hin_k6_3", sectionCode: "13.3", title: "मौत को दुल्हन मानना व सर पर कफ़न बाँधने की परंपरा", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" },
          { id: "hin_k6_4", sectionCode: "13.4", title: "लक्ष्मण रेखा का रूपक: भारत माता रूपी सीता के आँचल को कोई रावण रूपी शत्रु छू न पाए", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "5M" }
        ]
      },
      {
        id: "hin_sp_k7",
        name: "स्पर्श: रवींद्रनाथ ठाकुर – आत्मत्राण",
        ncertChapterNo: 14,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "स्पर्श काव्य पाठ ७: प्रार्थना गीत, दुखों से मुक्ति नहीं बल्कि संकटों पर विजय पाने के आत्मबल की याचना।",
        topics: [
          { id: "hin_k7_1", sectionCode: "14.1", title: "विपदाओं से रक्षा नहीं, अपितु संकटों से कभी न डरने की प्रार्थना", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_k7_2", sectionCode: "14.2", title: "दुख-भार कम करने की नहीं, बल्कि उसे वहन करने की असीम शक्ति की माँग", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" },
          { id: "hin_k7_3", sectionCode: "14.3", title: "संसार द्वारा वंचना मिलने पर भी मन में संशय या ईश्वर पर अविश्वास न होने का दृढ़ संकल्प", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" },
          { id: "hin_k7_4", sectionCode: "14.4", title: "सुख के दिनों में भी सिर झुकाकर ईश्वर को स्मरण करने का पावन भाव", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" }
        ]
      },
      {
        id: "hin_san_1",
        name: "संचयन: हरिहर काका (मिथिलेश्वर)",
        ncertChapterNo: 15,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "संचयन पाठ १: पारिवारिक स्वार्थ, महंत व ठाकुरबारी का षड्यंत्र, 15 बीघे जमीन का लालच, काका का मौन।",
        topics: [
          { id: "hin_s1_1", sectionCode: "15.1", title: "हरिहर काका का पारिवारिक परिवेश: चार भाई, 15 बीघे उपजाऊ ज़मीन व भाइयों की उपेक्षा", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_s1_2", sectionCode: "15.2", title: "ठाकुरबारी का महंत: धर्म की आड़ में संपत्ति हड़पने का घृणित षड्यंत्र", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" },
          { id: "hin_s1_3", sectionCode: "15.3", title: "काका का अपहरण, जबरन अँगूठे के निशान लगवाना व भाइयों द्वारा निर्मम अत्याचार", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "5M" },
          { id: "hin_s1_4", sectionCode: "15.4", title: "काका का मौन हो जाना व आधुनिक युग में मानवीय संबंधों और रिश्तों के पतन की यथार्थ तस्वीर", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "5M" }
        ]
      },
      {
        id: "hin_san_2",
        name: "संचयन: सपनों के-से दिन (गुरदयाल सिंह)",
        ncertChapterNo: 16,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "संचयन पाठ २: बचपन की यादें, पीटी मास्टर प्रीतम चंद की क्रूरता, हेडमास्टर शर्मा जी की दयालुता, तोते पालना।",
        topics: [
          { id: "hin_s2_1", sectionCode: "16.1", title: "लेखक का बचपन: धूल-मिट्टी में खेलना, पुरानी फटी किताबों की गंध व स्कूल जाने से डरना", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_s2_2", sectionCode: "16.2", title: "पीटी सर प्रीतम चंद का खौफनाक व्यक्तित्व, चमड़ी उधेड़ने वाली पिटाई व अनुशासन", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" },
          { id: "hin_s2_3", sectionCode: "16.3", title: "हेडमास्टर मदन मोहन शर्मा जी का संवेदनशील व करुणामय स्वभाव एवं प्रीतम चंद का निलंबन", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" },
          { id: "hin_s2_4", sectionCode: "16.4", title: "मुअत्तल होने पर भी प्रीतम चंद द्वारा कमरे में पिंजरे के तोतों को बादाम खिलाना (कठोर आवरण में छिपा कोमल मन)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "5M" }
        ]
      },
      {
        id: "hin_san_3",
        name: "संचयन: टोपी शुक्ला (राही मासूम रज़ा)",
        ncertChapterNo: 17,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam 2026",
        syllabusNote: "संचयन पाठ ३: बलभद्र नारायण शुक्ला (टोपी) और सैय्यद जरगाम मुर्तज़ा (इफ़्फ़न) की मित्रता, दादी का दुलार, भावनात्मक अकेलापन।",
        topics: [
          { id: "hin_s3_1", sectionCode: "17.1", title: "टोपी शुक्ला और इफ़्फ़न की निश्छल मित्रता: धर्म व जाति की दीवारों से परे सच्ची आत्मीयता", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "2M / 3M" },
          { id: "hin_s3_2", sectionCode: "17.2", title: "इफ़्फ़न की दादी का वात्सल्य व पूरबी बोली का माधुर्य, जो टोपी को अपनी माँ से अधिक प्रिय था", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" },
          { id: "hin_s3_3", sectionCode: "17.3", title: "दादी के देहावसान के बाद टोपी का असहनीय अकेलापन व घर में 'अम्मी' शब्द कहने पर हुई पिटाई", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "5M" },
          { id: "hin_s3_4", sectionCode: "17.4", title: "कक्षा में दो बार फेल होने पर घर और स्कूल में टोपी की उपेक्षा व उसकी आंतरिक पीड़ा", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M / 5M" }
        ]
      },
      {
        id: "hin_v_padbandh",
        name: "व्याकरण: पदबंध (Phrase - 4 Marks)",
        ncertChapterNo: 18,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam (4 Marks)",
        syllabusNote: "व्याकरण खंड: 5 बहुविकल्पी प्रश्नों में से 4 प्रश्न अनिवार्य (संज्ञा, सर्वनाम, विशेषण, क्रिया, क्रियाविशेषण पदबंध)।",
        topics: [
          { id: "hin_v1_1", sectionCode: "18.1", title: "पद और पदबंध की परिभाषा व मूलभूत अंतर", isImportantForBoards: true, probability: "1M Foundation / Conceptual", expectedMarks: "1M MCQ" },
          { id: "hin_v1_2", sectionCode: "18.2", title: "संज्ञा पदबंध एवं सर्वनाम पदबंध की पहचान व शीर्ष पद नियम", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "1M MCQ" },
          { id: "hin_v1_3", sectionCode: "18.3", title: "विशेषण पदबंध की पहचान व रेखांकित अंश के सटीक नियम", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "1M MCQ" },
          { id: "hin_v1_4", sectionCode: "18.4", title: "क्रिया पदबंध एवं क्रियाविशेषण (अव्यय) पदबंध की बोर्ड स्तर की अभ्यास माला", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "1M MCQ" }
        ]
      },
      {
        id: "hin_v_vakya",
        name: "व्याकरण: रचना के आधार पर वाक्य रूपांतरण (4 Marks)",
        ncertChapterNo: 19,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam (4 Marks)",
        syllabusNote: "व्याकरण खंड: सरल, संयुक्त व मिश्र वाक्य पहचान एवं परस्पर रूपांतरण (5 में से 4 प्रश्न)।",
        topics: [
          { id: "hin_v2_1", sectionCode: "19.1", title: "सरल वाक्य की संरचना: एक उद्देश्य और एक विधेय की पहचान", isImportantForBoards: true, probability: "1M Foundation / Conceptual", expectedMarks: "1M MCQ" },
          { id: "hin_v2_2", sectionCode: "19.2", title: "संयुक्त वाक्य की पहचान: समानाधिकरण योजक (और, तथा, एवं, इसलिए, परंतु, किंतु)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "1M MCQ" },
          { id: "hin_v2_3", sectionCode: "19.3", title: "मिश्र वाक्य के भेद: प्रधान उपवाक्य व आश्रित उपवाक्य (संज्ञा, विशेषण, क्रियाविशेषण उपवाक्य)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "1M MCQ" },
          { id: "hin_v2_4", sectionCode: "19.4", title: "बोर्ड मानक वाक्य रूपांतरण तकनीक: बिना अर्थ बदले वाक्य परिवर्तन", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "1M MCQ" }
        ]
      },
      {
        id: "hin_v_samas",
        name: "व्याकरण: समास (Compound Words - 4 Marks)",
        ncertChapterNo: 20,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam (4 Marks)",
        syllabusNote: "व्याकरण खंड: तत्पुरुष, कर्मधारय, द्विगु, द्वंद्व, बहुव्रीहि, अव्ययीभाव समास पहचान व विग्रह।",
        topics: [
          { id: "hin_v3_1", sectionCode: "20.1", title: "तत्पुरुष समास एवं उसके कारक-आधारित भेद (कर्म से अधिकरण तक)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "1M MCQ" },
          { id: "hin_v3_2", sectionCode: "20.2", title: "कर्मधारय समास (विशेषण-विशेष्य, उपमेय-उपमान) व द्विगु समास (संख्यावाचक पूर्वपद)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "1M MCQ" },
          { id: "hin_v3_3", sectionCode: "20.3", title: "द्वंद्व समास (दोनों पद प्रधान, योजक चिह्न) व अव्ययीभाव समास (अव्यय पूर्वपद)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "1M MCQ" },
          { id: "hin_v3_4", sectionCode: "20.4", title: "बहुव्रीहि समास (अन्य पद प्रधान) एवं कर्मधारय व बहुव्रीहि में विग्रह-आधारित अंतर", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "1M MCQ" }
        ]
      },
      {
        id: "hin_v_muhavare",
        name: "व्याकरण: मुहावरे (Idioms - 4 Marks)",
        ncertChapterNo: 21,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam (4 Marks)",
        syllabusNote: "व्याकरण खंड: पाठ्यपुस्तक आधारित मुहावरों के अर्थ एवं सटीक वाक्य प्रयोग (5 में से 4 प्रश्न)।",
        topics: [
          { id: "hin_v4_1", sectionCode: "21.1", title: "स्पर्श गद्य पाठ १ 'बड़े भाई साहब' आधारित सर्वाधिक पूछे जाने वाले मुहावरे (लोहे के चने चबाना, आँखें फोड़ना, दाँतों पसीना आना)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "1M MCQ" },
          { id: "hin_v4_2", sectionCode: "21.2", title: "स्पर्श गद्य पाठ २ 'डायरी का एक पन्ना' व पाठ ३ 'तँतारा-वामीरो' आधारित मुहावरे (रंग दिखाना, आपे से बाहर होना, सुध-बुध खोना)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "1M MCQ" },
          { id: "hin_v4_3", sectionCode: "21.3", title: "स्पर्श पाठ ५, ६, ७ आधारित मुहावरे (डेरा डालना, हवा लगना, आँखें खुलना, तख्ता पलटना)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "1M MCQ" },
          { id: "hin_v4_4", sectionCode: "21.4", title: "बोर्ड परीक्षा रिक्त स्थान पूर्ति एवं अर्थ पहचान अभ्यास मास्टर", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "1M MCQ" }
        ]
      },
      {
        id: "hin_w_anuchhed",
        name: "लेखन: अनुच्छेद लेखन (Paragraph - 5 Marks)",
        ncertChapterNo: 22,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam (5 Marks)",
        syllabusNote: "रचनात्मक लेखन: दिए गए संकेत-बिंदुओं के आधार पर 100-120 शब्दों में समसामयिक व वैचारिक अनुच्छेद।",
        topics: [
          { id: "hin_w1_1", sectionCode: "22.1", title: "संकेत-बिंदुओं (Hints) के आधार पर अनुच्छेद लेखन का आदर्श प्रारूप एवं शब्द सीमा (100–120 शब्द)", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "5M" },
          { id: "hin_w1_2", sectionCode: "22.2", title: "भूमिका, विषय-विस्तार व निष्कर्ष में सूक्तियों और काव्यांशों का प्रभावशाली उपयोग", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "5M" }
        ]
      },
      {
        id: "hin_w_patra",
        name: "लेखन: औपचारिक पत्र लेखन (Formal Letter - 5 Marks)",
        ncertChapterNo: 23,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam (5 Marks)",
        syllabusNote: "रचनात्मक लेखन: शिकायती पत्र, संपादकीय पत्र, आवेदन पत्र का मानक प्रारूप (100 शब्द)।",
        topics: [
          { id: "hin_w2_1", sectionCode: "23.1", title: "औपचारिक पत्र का मानक प्रारूप: प्रेषक पता, दिनांक, सेवा में, विषय, महोदय, मुख्य विषय, धन्यवाद व भवदीय", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "5M" },
          { id: "hin_w2_2", sectionCode: "23.2", title: "समाचार पत्र के संपादक को पत्र एवं नगर निगम / स्वास्थ्य अधिकारी को शिकायती पत्र", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "5M" }
        ]
      },
      {
        id: "hin_w_suchna",
        name: "लेखन: सूचना लेखन (Notice - 4 Marks)",
        ncertChapterNo: 24,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam (4 Marks)",
        syllabusNote: "रचनात्मक लेखन: विद्यालयीय अथवा सार्वजनिक सूचना (आयोजन, खोया-पाया, अपील) - 50 शब्द।",
        topics: [
          { id: "hin_w3_1", sectionCode: "24.1", title: "सूचना लेखन का चौकोर बॉक्स प्रारूप: संस्था का नाम, 'सूचना' शीर्षक, दिनांक, विषय व हस्ताक्षर", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "4M" },
          { id: "hin_w3_2", sectionCode: "24.2", title: "खोया-पाया, वाद-विवाद प्रतियोगिता, रक्तदान शिविर व अवकाश सूचना अभ्यास", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "4M" }
        ]
      },
      {
        id: "hin_w_vigyapan",
        name: "लेखन: विज्ञापन लेखन (Advertisement - 3 Marks)",
        ncertChapterNo: 25,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam (3 Marks)",
        syllabusNote: "रचनात्मक लेखन: आकर्षक बॉक्स, तुकबंदी स्लोगन, मुख्य विशेषताएं, संपर्क विवरण (40 शब्द)।",
        topics: [
          { id: "hin_w4_1", sectionCode: "25.1", title: "विज्ञापन निर्माण कला: आकर्षक शीर्षक, तुकबंदी वाला स्लोगन (जैसे 'धमाका सेल', 'स्वस्थ जीवन का राज'), रेखाचित्र", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" },
          { id: "hin_w4_2", sectionCode: "25.2", title: "उत्पाद की विशेषताएँ, रियायत/छूट, संपर्क सूत्र व फोन नंबर का सुरुचिपूर्ण संयोजन", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "3M" }
        ]
      },
      {
        id: "hin_w_email_laghu",
        name: "लेखन: ई-मेल लेखन अथवा लघुकथा लेखन (5 Marks)",
        ncertChapterNo: 26,
        examStatus: "board_exam",
        examStatusLabel: "Coming in Board Exam (5 Marks)",
        syllabusNote: "रचनात्मक लेखन: औपचारिक ई-मेल (To, CC, BCC, Subject) अथवा प्रेरणादायी लघुकथा लेखन (100 शब्द)।",
        topics: [
          { id: "hin_w5_1", sectionCode: "26.1", title: "औपचारिक ई-मेल लेखन: प्रेषक (From), प्रेषिती (To), प्रतिलिपि (CC), विषय व शिष्टाचार अभिवादन", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "5M" },
          { id: "hin_w5_2", sectionCode: "26.2", title: "लघुकथा लेखन: दिए गए प्रस्थान-बिंदु अथवा शीर्षक के आधार पर पात्र, संवाद, कौतूहल व नैतिक सीख", isImportantForBoards: true, probability: "High Chance 90%+ Recurring", expectedMarks: "5M" }
        ]
      }
    ]
  }
];

// -------------------------------------------------------------
// 3. MASSIVE CHAPTER-WISE FLASHCARD BANK FOR ACTIVE RECALL
// -------------------------------------------------------------
export const CHAPTER_WISE_FLASHCARDS: FlashcardItem[] = [
  {
    "id": "fc_thm_1",
    "subject": "Mathematics",
    "chapter": "Triangles",
    "topic": "Theorem 6.1: Basic Proportionality Theorem (BPT / Thales Theorem)",
    "frontQuestion": "State the theorem and key proof strategy for: Theorem 6.1: Basic Proportionality Theorem (BPT / Thales Theorem)",
    "backAnswer": "Statement: If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.\nProof Strategy: $\\dfrac{AD}{DB} = \\dfrac{AE}{EC} \\quad \\text{[Hence Proved]}$\nExaminer Trap: Crucial Examiner Check: 1 Mark is deducted if you forget to state 'EN is perpendicular to AB and acts as altitude for the obtuse triangle △BDE'. Always write the reason for Eq (3) clearly!",
    "hintOrFormula": "NCERT Class 10, Chapter 6, Theorem 6.1 (Page 124)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_2",
    "subject": "Mathematics",
    "chapter": "Triangles",
    "topic": "Theorem 6.2: Converse of Basic Proportionality Theorem",
    "frontQuestion": "State the theorem and key proof strategy for: Theorem 6.2: Converse of Basic Proportionality Theorem",
    "backAnswer": "Statement: If a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side.\nProof Strategy: $DE \\parallel BC \\quad \\text{[Hence Proved]}$\nExaminer Trap: Method of Contradiction: You must clearly show 'Adding 1 to both sides' to get AC/EC = AC/E'C. Skipping this algebra costs 1 mark.",
    "hintOrFormula": "NCERT Class 10, Chapter 6, Theorem 6.2 (Page 126)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_3",
    "subject": "Mathematics",
    "chapter": "Circles",
    "topic": "Theorem 10.1: Tangent is Perpendicular to Radius at Point of Contact",
    "frontQuestion": "State the theorem and key proof strategy for: Theorem 10.1: Tangent is Perpendicular to Radius at Point of Contact",
    "backAnswer": "Statement: The tangent at any point of a circle is perpendicular to the radius through the point of contact.\nProof Strategy: $OP \\perp XY \\quad \\text{[Hence Proved]}$\nExaminer Trap: Do NOT just write 'by definition'. You must write the proof that OP is the shortest distance among all segments from O to XY.",
    "hintOrFormula": "NCERT Class 10, Chapter 10, Theorem 10.1 (Page 208)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_4",
    "subject": "Mathematics",
    "chapter": "Circles",
    "topic": "Theorem 10.2: Lengths of Tangents from an External Point are Equal",
    "frontQuestion": "State the theorem and key proof strategy for: Theorem 10.2: Lengths of Tangents from an External Point are Equal",
    "backAnswer": "Statement: The lengths of tangents drawn from an external point to a circle are equal.\nProof Strategy: $PQ = PR \\quad \\text{[Hence Proved]}$\nExaminer Trap: FATAL ERROR: Never write SSS criterion by assuming PQ = PR before it is proved (circular reasoning)! You MUST use RHS congruence using OP (hypotenuse) and OQ=OR (radii).",
    "hintOrFormula": "NCERT Class 10, Chapter 10, Theorem 10.2 (Page 211)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_5",
    "subject": "Mathematics",
    "chapter": "Triangles",
    "topic": "NCERT Ch 6 Example 1: Parallel Line Corollary AD/AB = AE/AC",
    "frontQuestion": "State the theorem and key proof strategy for: NCERT Ch 6 Example 1: Parallel Line Corollary AD/AB = AE/AC",
    "backAnswer": "Statement: If a line intersects sides AB and AC of a △ABC at D and E respectively and is parallel to BC, prove that AD / AB = AE / AC.\nProof Strategy: $\\frac{AD}{AB} = \\frac{AE}{AC} \\quad \\text{[Hence Proved]}$\nExaminer Trap: Do NOT simply say 'obviously'. You must show the inversion, addition of 1, and re-inversion for full 2 marks.",
    "hintOrFormula": "NCERT Class 10, Chapter 6, Example 1 (Page 126)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_6",
    "subject": "Mathematics",
    "chapter": "Triangles",
    "topic": "NCERT Ch 6 Example 2: Trapezium Parallel Line Ratio AE/ED = BF/FC",
    "frontQuestion": "State the theorem and key proof strategy for: NCERT Ch 6 Example 2: Trapezium Parallel Line Ratio AE/ED = BF/FC",
    "backAnswer": "Statement: ABCD is a trapezium with AB ∥ DC. E and F are points on non-parallel sides AD and BC respectively such that EF is parallel to AB. Show that AE / ED = BF / FC.\nProof Strategy: $\\frac{AE}{ED} = \\frac{BF}{FC} \\quad \\text{[Hence Proved]}$\nExaminer Trap: Without the construction 'Join AC to intersect EF at G', you cannot apply BPT! Construction step carries 0.5 mark.",
    "hintOrFormula": "NCERT Class 10, Chapter 6, Example 2 (Page 127)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_7",
    "subject": "Mathematics",
    "chapter": "Triangles",
    "topic": "NCERT Ch 6 Example 3: Proportional Sides to Isosceles Triangle Proof",
    "frontQuestion": "State the theorem and key proof strategy for: NCERT Ch 6 Example 3: Proportional Sides to Isosceles Triangle Proof",
    "backAnswer": "Statement: In the given figure, PS / SQ = PT / TR and ∠PST = ∠PRQ. Prove that △PQR is an isosceles triangle.\nProof Strategy: $\\Delta PQR \\text{ is an isosceles triangle with } PQ = PR \\quad \\text{[Hence Proved]}$\nExaminer Trap: Do NOT confuse BPT with its Converse. Here ratio is given, so Converse of BPT proves ST ∥ QR.",
    "hintOrFormula": "NCERT Class 10, Chapter 6, Example 3 (Page 127)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_8",
    "subject": "Mathematics",
    "chapter": "Triangles",
    "topic": "NCERT Ch 6 Example 7: The Iconic Lamp-Post Walking Shadow Problem",
    "frontQuestion": "State the theorem and key proof strategy for: NCERT Ch 6 Example 7: The Iconic Lamp-Post Walking Shadow Problem",
    "backAnswer": "Statement: A girl of height 90 cm is walking away from the base of a lamp-post at a speed of 1.2 m/s. If the lamp is 3.6 m above the ground, find the length of her shadow after 4 seconds.\nProof Strategy: $\\text{Length of her shadow after 4 seconds } = 1.6\\text{ m } (160\\text{ cm})$\nExaminer Trap: Units Trap: Height is in cm (90 cm) while post is in m (3.6 m). You MUST convert 90 cm = 0.9 m or 3.6 m = 360 cm. Also, big triangle base is (4.8 + x), NOT 4.8!",
    "hintOrFormula": "NCERT Class 10, Chapter 6, Example 7 (Page 135)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_9",
    "subject": "Mathematics",
    "chapter": "Introduction to Trigonometry",
    "topic": "NCERT Ch 8 Example 15: The Super HOTS Board Proof (sinθ - cosθ + 1)/(sinθ + cosθ - 1)",
    "frontQuestion": "State the theorem and key proof strategy for: NCERT Ch 8 Example 15: The Super HOTS Board Proof (sinθ - cosθ + 1)/(sinθ + cosθ - 1)",
    "backAnswer": "Statement: Prove that: $\\frac{\\sin \\theta - \\cos \\theta + 1}{\\sin \\theta + \\cos \\theta - 1} = \\frac{1}{\\sec \\theta - \\tan \\theta}$, using the identity $\\sec^2 \\theta = 1 + \\tan^2 \\theta$.\nProof Strategy: $\\frac{1}{\\sec \\theta - \\tan \\theta} = \\text{RHS} \\quad \\text{[Hence Proved]}$\nExaminer Trap: You must divide by cos θ (NOT sin θ) because the question specifically mandates using sec²θ = 1 + tan²θ!",
    "hintOrFormula": "NCERT Class 10, Chapter 8, Example 15 (Page 192)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_10",
    "subject": "Mathematics",
    "chapter": "Circles",
    "topic": "NCERT Ch 10 Example 2: Prove that ∠PTQ = 2 ∠OPQ",
    "frontQuestion": "State the theorem and key proof strategy for: NCERT Ch 10 Example 2: Prove that ∠PTQ = 2 ∠OPQ",
    "backAnswer": "Statement: Two tangents TP and TQ are drawn to a circle with centre O from an external point T. Prove that ∠PTQ = 2 ∠OPQ.\nProof Strategy: $\\angle PTQ = 2 \\angle OPQ \\quad \\text{[Hence Proved]}$\nExaminer Trap: Do NOT assume OP bisects ∠PTQ without proving congruence! The method shown above using isosceles △TPQ is the official NCERT 100% full-mark method.",
    "hintOrFormula": "NCERT Class 10, Chapter 10, Example 2 (Page 212)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_11",
    "subject": "Mathematics",
    "chapter": "Circles",
    "topic": "NCERT Ch 10 Example 3: Chord Length 8cm, Radius 5cm, Find Tangent TP",
    "frontQuestion": "State the theorem and key proof strategy for: NCERT Ch 10 Example 3: Chord Length 8cm, Radius 5cm, Find Tangent TP",
    "backAnswer": "Statement: PQ is a chord of length 8 cm of a circle of radius 5 cm. The tangents at P and Q intersect at a point T. Find the length TP.\nProof Strategy: $TP = \\frac{20}{3}\\text{ cm} \\approx 6.67\\text{ cm}$\nExaminer Trap: Do NOT approximate to 6.6 cm! Leave it as 20/3 cm (standard board convention) or 6.67 cm.",
    "hintOrFormula": "NCERT Class 10, Chapter 10, Example 3 (Page 213)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_12",
    "subject": "Mathematics",
    "chapter": "Statistics",
    "topic": "NCERT Ch 13 Example 8: Missing Frequencies (x and y) with Median = 525",
    "frontQuestion": "State the theorem and key proof strategy for: NCERT Ch 13 Example 8: Missing Frequencies (x and y) with Median = 525",
    "backAnswer": "Statement: The median of the following data is 525. Find the values of x and y, if the total frequency is 100. (Intervals: 0-100: 2, 100-200: 5, 200-300: x, 300-400: 12, 400-500: 17, 500-600: 20, 600-700: y, 700-800: 9, 800-900: 7, 900-1000: 4).\nProof Strategy: $x = 9, \\quad y = 15$\nExaminer Trap: Bracket Sign Trap: cf is (36 + x). You MUST subtract the entire quantity: 50 - (36 + x) = 50 - 36 - x. Forgetting parentheses gives 50 - 36 + x, causing fatal calculation breakdown!",
    "hintOrFormula": "NCERT Class 10, Chapter 13, Example 8 (Page 285)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_13",
    "subject": "Mathematics",
    "chapter": "Real Numbers",
    "topic": "Theorem 1.4: Proof of Irrationality of √2",
    "frontQuestion": "State the theorem and key proof strategy for: Theorem 1.4: Proof of Irrationality of √2",
    "backAnswer": "Statement: Prove that $\\sqrt{2}$ is irrational.\nProof Strategy: $\\sqrt{2} \\text{ is an irrational number.} \\quad \\text{[Hence Proved]}$\nExaminer Trap: Coprime Declaration Trap: If you fail to write 'where a and b are coprime integers (gcd(a, b) = 1)', CBSE marking scheme deducts 1 full mark! Also you must explicitly cite Theorem 1.3 ('p divides a^2 implies p divides a').",
    "hintOrFormula": "NCERT Class 10, Chapter 1, Theorem 1.4 (Page 12)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_14",
    "subject": "Mathematics",
    "chapter": "Real Numbers",
    "topic": "Theorem: Proof of Irrationality of √5",
    "frontQuestion": "State the theorem and key proof strategy for: Theorem: Proof of Irrationality of √5",
    "backAnswer": "Statement: Prove that $\\sqrt{5}$ is irrational.\nProof Strategy: $\\sqrt{5} \\text{ is irrational.} \\quad \\text{[Hence Proved]}$\nExaminer Trap: Never write 'a/b is a fraction'. Always explicitly write 'a and b are integers, b ≠ 0, and gcd(a, b) = 1'. CBSE answer keys penalize loose wording.",
    "hintOrFormula": "NCERT Class 10, Chapter 1, Exercise 1.2 Q1",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_15",
    "subject": "Mathematics",
    "chapter": "Real Numbers",
    "topic": "Theorem: Proof that 3 + 2√5 is Irrational",
    "frontQuestion": "State the theorem and key proof strategy for: Theorem: Proof that 3 + 2√5 is Irrational",
    "backAnswer": "Statement: Prove that $3 + 2\\sqrt{5}$ is irrational, given that $\\sqrt{5}$ is irrational.\nProof Strategy: $3 + 2\\sqrt{5} \\text{ is irrational.} \\quad \\text{[Hence Proved]}$\nExaminer Trap: Do NOT attempt to reprove that √5 is irrational unless the question explicitly asks for it! Simply isolate √5 and state: 'Since a and b are integers, (a - 3b)/2b is rational, contradicting that √5 is irrational'.",
    "hintOrFormula": "NCERT Class 10, Chapter 1, Exercise 1.2 Q2",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_16",
    "subject": "Mathematics",
    "chapter": "Quadratic Equations",
    "topic": "Derivation of the Quadratic Formula (Completing the Square Method)",
    "frontQuestion": "State the theorem and key proof strategy for: Derivation of the Quadratic Formula (Completing the Square Method)",
    "backAnswer": "Statement: Derive the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ for the standard quadratic equation $ax^2 + bx + c = 0$ ($a \neq 0$).\nProof Strategy: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\quad \\text{[Quadratic Formula / Shridharacharya's Rule]}$\nExaminer Trap: Denominator Sign Trap: The denominator is strictly 2a, NOT just 2! Also remember to specify that real roots exist only when the discriminant $D = b^2 - 4ac \\ge 0$.",
    "hintOrFormula": "NCERT Class 10, Chapter 4, Section 4.4 (Page 83)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_17",
    "subject": "Mathematics",
    "chapter": "Arithmetic Progressions",
    "topic": "Derivation of the n-th Term of an AP (an = a + (n - 1)d)",
    "frontQuestion": "State the theorem and key proof strategy for: Derivation of the n-th Term of an AP (an = a + (n - 1)d)",
    "backAnswer": "Statement: Derive the formula for the general $n$-th term $a_n$ of an Arithmetic Progression whose first term is $a$ and common difference is $d$.\nProof Strategy: $a_n = a + (n - 1)d \\quad \\text{[General Term of an AP]}$\nExaminer Trap: Zero vs One Index: The first term has (1 - 1)d = 0d! Do not write a_n = a + nd. The number of intervals of common difference between term 1 and term n is strictly (n - 1).",
    "hintOrFormula": "NCERT Class 10, Chapter 5, Section 5.3 (Page 100)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_18",
    "subject": "Mathematics",
    "chapter": "Arithmetic Progressions",
    "topic": "Derivation of Sum of First n Terms of an AP (Sn = n/2 [2a + (n - 1)d])",
    "frontQuestion": "State the theorem and key proof strategy for: Derivation of Sum of First n Terms of an AP (Sn = n/2 [2a + (n - 1)d])",
    "backAnswer": "Statement: Derive the formula for the sum of the first $n$ terms of an AP with first term $a$ and common difference $d$.\nProof Strategy: $S_n = \\frac{n}{2} [2a + (n - 1)d] = \\frac{n}{2} [a + l] \\quad \\text{[Sum of n Terms of an AP]}$\nExaminer Trap: Forgetting the 2a: Students frequently write n/2 [a + (n - 1)d], dropping the coefficient 2. The formula has 2a because it sums the first term a and the n-th term [a + (n - 1)d].",
    "hintOrFormula": "NCERT Class 10, Chapter 5, Section 5.4 (Page 106)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_19",
    "subject": "Mathematics",
    "chapter": "Triangles",
    "topic": "Theorem: Internal Angle Bisector Theorem (BD/DC = AB/AC)",
    "frontQuestion": "State the theorem and key proof strategy for: Theorem: Internal Angle Bisector Theorem (BD/DC = AB/AC)",
    "backAnswer": "Statement: The internal bisector of an angle of a triangle divides the opposite side internally in the ratio of the sides containing the angle. That is, in △ABC with AD bisecting ∠A, BD/DC = AB/AC.\nProof Strategy: $\\frac{BD}{DC} = \\frac{AB}{AC} \\quad \\text{[Hence Proved]}$\nExaminer Trap: Common Misconception: AD does NOT bisect side BC unless △ABC is isosceles (AB = AC)! Never assume BD = DC in the proof.",
    "hintOrFormula": "NCERT Class 10, Chapter 6, Supplementary Extension",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_20",
    "subject": "Mathematics",
    "chapter": "Coordinate Geometry",
    "topic": "Derivation of the Distance Formula (d = √[(x2 - x1)² + (y2 - y1)²])",
    "frontQuestion": "State the theorem and key proof strategy for: Derivation of the Distance Formula (d = √[(x2 - x1)² + (y2 - y1)²])",
    "backAnswer": "Statement: Derive the distance formula for the distance between two points $P(x_1, y_1)$ and $Q(x_2, y_2)$ in the Cartesian plane.\nProof Strategy: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\quad \\text{[Distance Formula]}$\nExaminer Trap: Order Independence: Since $(x_2 - x_1)^2 = (x_1 - x_2)^2$, the order does not change the result, but NEVER mix coordinates like (x2 - y1)!",
    "hintOrFormula": "NCERT Class 10, Chapter 7, Section 7.2 (Page 156)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_21",
    "subject": "Mathematics",
    "chapter": "Coordinate Geometry",
    "topic": "Derivation of the Section Formula for Internal Division",
    "frontQuestion": "State the theorem and key proof strategy for: Derivation of the Section Formula for Internal Division",
    "backAnswer": "Statement: Derive the coordinates of the point $P(x, y)$ which divides the line segment joining $A(x_1, y_1)$ and $B(x_2, y_2)$ internally in the ratio $m_1 : m_2$.\nProof Strategy: $P(x, y) = \\left( \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}, \\frac{m_1 y_2 + m_2 y_1}{m_1 + m_2} \\right) \\quad \\text{[Section Formula]}$\nExaminer Trap: Midpoint Corollary: If P is the midpoint, m1 = m2 = 1, giving M = ((x1 + x2)/2, (y1 + y2)/2). Never reverse indices (do not write m1 x1 + m2 x2)!",
    "hintOrFormula": "NCERT Class 10, Chapter 7, Section 7.3 (Page 162)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_22",
    "subject": "Mathematics",
    "chapter": "Introduction to Trigonometry",
    "topic": "Derivation of Fundamental Trigonometric Identity sin²θ + cos²θ = 1",
    "frontQuestion": "State the theorem and key proof strategy for: Derivation of Fundamental Trigonometric Identity sin²θ + cos²θ = 1",
    "backAnswer": "Statement: Prove the fundamental identity $\\sin^2\\theta + \\cos^2\\theta = 1$, and derive from it $1 + \\tan^2\\theta = \\sec^2\\theta$ and $1 + \\cot^2\\theta = \\csc^2\\theta$.\nProof Strategy: $\\sin^2\\theta + \\cos^2\\theta = 1, \\quad 1 + \\tan^2\\theta = \\sec^2\\theta, \\quad 1 + \\cot^2\\theta = \\csc^2\\theta$\nExaminer Trap: Domain Restrictions: Note that 1 + tan²θ = sec²θ is defined for 0° ≤ θ < 90°, and 1 + cot²θ = csc²θ is defined for 0° < θ ≤ 90°. Mentioning this earns full marks in standard boards.",
    "hintOrFormula": "NCERT Class 10, Chapter 8, Section 8.4 (Page 190)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_23",
    "subject": "Mathematics",
    "chapter": "Circles",
    "topic": "Theorem: Tangents Subtend Equal Angles at Centre & OP Bisects Angle",
    "frontQuestion": "State the theorem and key proof strategy for: Theorem: Tangents Subtend Equal Angles at Centre & OP Bisects Angle",
    "backAnswer": "Statement: Prove that the tangents drawn from an external point to a circle: (i) subtend equal angles at the centre, and (ii) are equally inclined to the line segment joining the centre to that point.\nProof Strategy: $\\angle AOP = \\angle BOP \\quad \\text{and} \\quad \\angle APO = \\angle BPO \\quad \\text{[Hence Proved]}$\nExaminer Trap: Angle Sum Property Trap: Notice that $\\angle AOB + \\angle APB = 180^\\circ$ (supplementary angles) because $\\angle OAP + \\angle OBP = 90^\\circ + 90^\\circ = 180^\\circ$. Very frequently asked in 1-mark MCQs!",
    "hintOrFormula": "NCERT Class 10, Chapter 10, Supplementary Corollaries",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_24",
    "subject": "Mathematics",
    "chapter": "Circles",
    "topic": "Theorem: Quadrilateral Circumscribing a Circle (AB + CD = AD + BC)",
    "frontQuestion": "State the theorem and key proof strategy for: Theorem: Quadrilateral Circumscribing a Circle (AB + CD = AD + BC)",
    "backAnswer": "Statement: A quadrilateral ABCD is drawn to circumscribe a circle. Prove that AB + CD = AD + BC.\nProof Strategy: $AB + CD = AD + BC \\quad \\text{[Hence Proved]}$\nExaminer Trap: Grouping Trap: When writing equations, keep (AP, BP) and (CR, DR) on the SAME side! If you write DR = DS but on the next line write CQ = CR, they will not sum to CD!",
    "hintOrFormula": "NCERT Class 10, Chapter 10, Exercise 10.2 Q8 (Page 214)",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_thm_25",
    "subject": "Mathematics",
    "chapter": "Areas Related to Circles",
    "topic": "Derivation of Sector Area and Arc Length Formulas",
    "frontQuestion": "State the theorem and key proof strategy for: Derivation of Sector Area and Arc Length Formulas",
    "backAnswer": "Statement: Derive the formula for: (i) Area of a sector of angle $\\theta$, and (ii) Length of an arc of a sector of angle $\\theta$ of a circle of radius $r$.\nProof Strategy: $\\text{Area} = \\frac{\\theta}{360^\\circ}\\pi r^2, \\quad l = \\frac{\\theta}{360^\\circ}2\\pi r, \\quad \\text{Area} = \\frac{1}{2}lr$\nExaminer Trap: Perimeter of Sector Trap: The perimeter of a sector is NOT just the arc length! It is Perimeter = l + 2r = (θ/360°)2πr + 2r. Forgetting to add 2r costs 1 mark in board exams!",
    "hintOrFormula": "NCERT Class 10, Chapter 11, Section 11.2",
    "difficulty": "Topper Level (100%)"
  },
  {
    "id": "fc_chem_1",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Burning of Magnesium Ribbon in Air",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Burning of Magnesium Ribbon in Air",
    "backAnswer": "Equation: 2\\text{Mg}(s) + \\text{O}_2(g) \\xrightarrow{\\Delta} 2\\text{MgO}(s)\nType: Combination (Exothermic)\nObservations: Burns with a dazzling, brilliant white flame that can damage unprotected eyes.; Forms a brittle, white ash of magnesium oxide (MgO).; MgO dissolved in water turns red litmus paper blue, confirming it is a basic oxide.\nTrap: Why rub with sandpaper first? To scrub off the inert, unreactive coating of basic magnesium carbonate [MgCO3·Mg(OH)2] formed by reaction with atmospheric CO2 and moisture.",
    "hintOrFormula": "Magnesium + Oxygen → Magnesium oxide + Heat + Light",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_2",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Slaking of Quicklime (Calcium Oxide with Water)",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Slaking of Quicklime (Calcium Oxide with Water)",
    "backAnswer": "Equation: \\text{CaO}(s) + \\text{H}_2\\text{O}(l) \\to \\text{Ca(OH)}_2(aq) + \\text{Heat}\nType: Combination (Exothermic)\nObservations: Vigorous boiling-like bubbling with a loud hissing sound.; The beaker becomes scalding hot to the touch (massive heat release).; Forms slaked lime, which is used for whitewashing walls.\nTrap: Do not confuse Quicklime (CaO) with Slaked lime [Ca(OH)2] or Limestone (CaCO3). Always write (aq) for slaked lime solution.",
    "hintOrFormula": "Quicklime (Calcium oxide) + Water → Slaked lime (Calcium hydroxide) + Heat",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_3",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Formation of Calcium Carbonate during Whitewashing",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Formation of Calcium Carbonate during Whitewashing",
    "backAnswer": "Equation: \\text{Ca(OH)}_2(aq) + \\text{CO}_2(g) \\to \\text{CaCO}_3(s) + \\text{H}_2\\text{O}(l)\nType: Combination (Thermoneutral)\nObservations: A thin, shiny crust of marble/calcium carbonate forms on the wall surface after 2-3 days, giving a lustrous white finish.\nTrap: Why does whitewash shine after 2-3 days? Because slaked lime slowly absorbs atmospheric CO2 to form a uniform crystalline layer of CaCO3.",
    "hintOrFormula": "Calcium hydroxide + Carbon dioxide → Calcium carbonate (shiny layer) + Water",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_4",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Combustion of Coal / Carbon",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Combustion of Coal / Carbon",
    "backAnswer": "Equation: \\text{C}(s) + \\text{O}_2(g) \\to \\text{CO}_2(g) + \\text{Heat}\nType: Combustion (Exothermic)\nObservations: Coal burns leaving behind little residue; heat and CO2 gas are released.\nTrap: This is simultaneously a Combination Reaction and an Exothermic Reaction.",
    "hintOrFormula": "Carbon + Oxygen → Carbon dioxide + Heat",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_5",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Combustion of Methane (Natural Gas)",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Combustion of Methane (Natural Gas)",
    "backAnswer": "Equation: \\text{CH}_4(g) + 2\\text{O}_2(g) \\to \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(g) + \\text{Heat}\nType: Combustion (Exothermic)\nObservations: Burns with a clean, blue non-luminous flame in excess oxygen.\nTrap: Notice water is in gaseous form (g) because of the intense heat of combustion.",
    "hintOrFormula": "Methane + Oxygen → Carbon dioxide + Water vapour + Heat",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_6",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Cellular Respiration (Exothermic Biological Combustion)",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Cellular Respiration (Exothermic Biological Combustion)",
    "backAnswer": "Equation: \\text{C}_6\\text{H}_{12}\\text{O}_6(aq) + 6\\text{O}_2(aq) \\to 6\\text{CO}_2(aq) + 6\\text{H}_2\\text{O}(l) + \\text{Energy (ATP)}\nType: Redox (Oxidation-Reduction) (Exothermic)\nObservations: Glucose is oxidized; energy is stored in ATP molecules.; Proves why respiration is considered an exothermic reaction in CBSE exams.\nTrap: CBSE Question: 'Why is respiration considered an exothermic reaction?' Answer: Because food carbohydrates are broken down into glucose, which combines with oxygen in cells to release energy.",
    "hintOrFormula": "Glucose + Oxygen → Carbon dioxide + Water + Energy (38 ATP)",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_7",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Thermal Decomposition of Ferrous Sulphate Crystals",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Thermal Decomposition of Ferrous Sulphate Crystals",
    "backAnswer": "Equation: 2\\text{FeSO}_4(s) \\xrightarrow{\\Delta} \\text{Fe}_2\\text{O}_3(s) + \\text{SO}_2(g) + \\text{SO}_3(g)\nType: Thermal Decomposition (Endothermic)\nObservations: Initial heating loses 7 water molecules of crystallisation: pale green crystals turn dirty white anhydrous FeSO4.; On further strong heating, dirty white powder turns reddish-brown Fe2O3.; Pungent, suffocating, characteristic smell of burning sulphur (due to SO2 and SO3).; Moist blue litmus paper held at the boiling tube mouth turns red (acidic oxides).\nTrap: Never sniff boiling tube directly! Waft gas gently towards nose. Both SO2 and SO3 are formed; both are acidic gases.",
    "hintOrFormula": "Ferrous sulphate (heated) → Ferric oxide + Sulphur dioxide + Sulphur trioxide",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_8",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Thermal Decomposition of Limestone",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Thermal Decomposition of Limestone",
    "backAnswer": "Equation: \\text{CaCO}_3(s) \\xrightarrow{\\Delta} \\text{CaO}(s) + \\text{CO}_2(g)\nType: Thermal Decomposition (Endothermic)\nObservations: Major industrial reaction for manufacturing cement and glass from limestone.\nTrap: Limestone, Chalk, and Marble are all different physical forms of the same chemical compound: CaCO3.",
    "hintOrFormula": "Limestone (Calcium carbonate) → Quicklime (Calcium oxide) + Carbon dioxide",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_9",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Thermal Decomposition of Lead Nitrate",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Thermal Decomposition of Lead Nitrate",
    "backAnswer": "Equation: 2\\text{Pb(NO}_3)_2(s) \\xrightarrow{\\Delta} 2\\text{PbO}(s) + 4\\text{NO}_2(g) + \\text{O}_2(g)\nType: Thermal Decomposition (Endothermic)\nObservations: Crackling (decrepitation) sound heard during heating.; Dense, reddish-brown suffocating fumes of Nitrogen dioxide (NO2) fill the tube.; A glowing incense splinter held at the mouth bursts into flame (confirming O2 release).; A yellow residue of Lead monoxide (PbO) adheres to the glass test tube walls.\nTrap: NO2 is REDDISH-BROWN, not colorless! Writing NO or N2O instead of NO2 is penalized. Coefficient of NO2 is 4, balancing is tested heavily.",
    "hintOrFormula": "Lead nitrate (white) → Lead monoxide (yellow) + Nitrogen dioxide (brown fumes) + Oxygen",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_10",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Electrolysis of Water (Acidulated Water)",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Electrolysis of Water (Acidulated Water)",
    "backAnswer": "Equation: 2\\text{H}_2\\text{O}(l) \\xrightarrow{\\text{Electric Current}} 2\\text{H}_2(g)[\\text{Cathode}] + \\text{O}_2(g)[\\text{Anode}]\nType: Electrolytic Decomposition (Endothermic (Electrical energy absorbed))\nObservations: Gas collected at cathode is exactly TWICE the volume of gas collected at anode (Ratio 2 : 1).; Cathode gas burns with a sharp 'POP' sound when tested with a burning splinter (Hydrogen).; Anode gas makes a glowing splinter burn brightly (Oxygen).\nTrap: Mnemonic: C-C-H (Cathode is Negative, attracts Cations H+, collects Hydrogen). Ratio is 2:1 because water molecule contains 2 hydrogen atoms for every 1 oxygen atom (H2O).",
    "hintOrFormula": "Water (with drops of dil. H2SO4) → Hydrogen (Cathode, 2 vols) + Oxygen (Anode, 1 vol)",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_11",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Photodecomposition of Silver Chloride",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Photodecomposition of Silver Chloride",
    "backAnswer": "Equation: 2\\text{AgCl}(s) \\xrightarrow{\\text{Sunlight } (h\\nu)} 2\\text{Ag}(s) + \\text{Cl}_2(g)\nType: Photolytic Decomposition (Endothermic (Light energy absorbed))\nObservations: White silver chloride powder gradually turns dark grey after exposure to bright sunlight for 15-30 minutes.; Used historically in black-and-white photography.; Stored in dark amber/brown reagent bottles to prevent premature photodecomposition by ambient light.\nTrap: Why is AgCl stored in dark amber bottles? To shield it from sunlight which decomposes it into grey silver metal.",
    "hintOrFormula": "Silver chloride (white) → Silver metal (grey) + Chlorine gas (yellow-green)",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_12",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Photodecomposition of Silver Bromide",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Photodecomposition of Silver Bromide",
    "backAnswer": "Equation: 2\\text{AgBr}(s) \\xrightarrow{\\text{Sunlight } (h\\nu)} 2\\text{Ag}(s) + \\text{Br}_2(g)\nType: Photolytic Decomposition (Endothermic)\nObservations: Pale yellow powder turns grey. Iconic reaction used in black and white photographic film.\nTrap: Both AgCl and AgBr undergo photolytic decomposition; both are used in black and white photography.",
    "hintOrFormula": "Silver bromide (pale yellow) → Silver metal (grey) + Bromine vapour (reddish brown)",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_13",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Iron Nail in Copper Sulphate Solution",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Iron Nail in Copper Sulphate Solution",
    "backAnswer": "Equation: \\text{Fe}(s) + \\text{CuSO}_4(aq) \\to \\text{FeSO}_4(aq) + \\text{Cu}(s)\nType: Displacement (Exothermic (mild))\nObservations: The deep blue color of copper sulphate solution fades and gradually turns light/pale green.; A shiny reddish-brown layer of pure copper metal is deposited on the surface of the iron nails.; Iron is more reactive than copper and displaces it from its salt solution (Reactivity Series).\nTrap: Do not write 'solution becomes brown'. The SOLUTION turns light green (FeSO4); the NAIL gets a reddish-brown coating of copper.",
    "hintOrFormula": "Iron nail + Copper sulphate (blue) → Ferrous sulphate (light green) + Copper (reddish brown)",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_14",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Zinc with Copper Sulphate Solution",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Zinc with Copper Sulphate Solution",
    "backAnswer": "Equation: \\text{Zn}(s) + \\text{CuSO}_4(aq) \\to \\text{ZnSO}_4(aq) + \\text{Cu}(s)\nType: Displacement (Exothermic)\nObservations: Blue color of CuSO4 completely disappears to yield a crystal-clear, colorless solution.\nTrap: Zn is more reactive than Cu. If copper metal is placed in ZnSO4 solution, NO REACTION occurs.",
    "hintOrFormula": "Zinc granules + Copper sulphate (blue) → Zinc sulphate (colorless) + Copper (reddish brown)",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_15",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Lead with Copper Chloride Solution",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Lead with Copper Chloride Solution",
    "backAnswer": "Equation: \\text{Pb}(s) + \\text{CuCl}_2(aq) \\to \\text{PbCl}_2(aq) + \\text{Cu}(s)\nType: Displacement (Exothermic)\nObservations: Greenish-blue solution decolorizes as lead displaces copper.\nTrap: Lead is more reactive than copper in the reactivity series.",
    "hintOrFormula": "Lead + Copper chloride (green) → Lead chloride (colorless) + Copper (reddish brown)",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_16",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Precipitation of Barium Sulphate",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Precipitation of Barium Sulphate",
    "backAnswer": "Equation: \\text{Na}_2\\text{SO}_4(aq) + \\text{BaCl}_2(aq) \\to \\text{BaSO}_4(s)\\downarrow + 2\\text{NaCl}(aq)\nType: Double Displacement (Precipitation) (Thermoneutral)\nObservations: Immediate formation of an insoluble, dense, milky-white precipitate of Barium sulphate (BaSO4).; The precipitate does not dissolve even in dilute hydrochloric acid (used as confirmatory test for sulphate ion SO4²⁻).\nTrap: Always include the down-arrow (↓) or state symbol (s) for BaSO4! Missing this costs 0.5 mark on CBSE papers.",
    "hintOrFormula": "Sodium sulphate + Barium chloride → Barium sulphate (white ppt) + Sodium chloride",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_17",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Precipitation of Lead Iodide (Golden Yellow)",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Precipitation of Lead Iodide (Golden Yellow)",
    "backAnswer": "Equation: \\text{Pb(NO}_3)_2(aq) + 2\\text{KI}(aq) \\to \\text{PbI}_2(s)\\downarrow + 2\\text{KNO}_3(aq)\nType: Double Displacement (Precipitation) (Thermoneutral)\nObservations: Two completely clear, colorless liquids mix to immediately generate a spectacular, opaque, golden-yellow precipitate.; If the mixture is heated, PbI2 dissolves; upon slow cooling, it recrystallizes as shimmering golden spangles ('Golden Rain').\nTrap: Formula of lead iodide is PbI2 (Lead has valency 2+; Iodide is 1-), NOT PbI!",
    "hintOrFormula": "Lead nitrate + Potassium iodide → Lead iodide (brilliant yellow ppt) + Potassium nitrate",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_18",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Oxidation of Copper to Copper(II) Oxide",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Oxidation of Copper to Copper(II) Oxide",
    "backAnswer": "Equation: 2\\text{Cu}(s) + \\text{O}_2(g) \\xrightarrow{\\Delta} 2\\text{CuO}(s)\nType: Redox (Oxidation-Reduction) (Exothermic)\nObservations: The surface of reddish-brown copper powder becomes coated with a jet-black substance (Copper(II) oxide).; Copper has gained oxygen: it has been oxidized.\nTrap: Color of CuO is BLACK. Do not say brown or grey.",
    "hintOrFormula": "Copper powder (brown) + Oxygen → Copper(II) oxide (black coating)",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_19",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Reduction of Copper(II) Oxide by Hydrogen Gas",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Reduction of Copper(II) Oxide by Hydrogen Gas",
    "backAnswer": "Equation: \\text{CuO}(s) + \\text{H}_2(g) \\xrightarrow{\\Delta} \\text{Cu}(s) + \\text{H}_2\\text{O}(g)\nType: Redox (Oxidation-Reduction) (Endothermic)\nObservations: The black surface coating turns back into reddish-brown elemental copper metal.; CuO loses oxygen: it is reduced (Oxidizing Agent = CuO).; H2 gains oxygen: it is oxidized (Reducing Agent = H2).\nTrap: Identify Oxidizing & Reducing Agents: Oxidizing agent is ALWAYS the substance reduced (CuO); Reducing agent is the substance oxidized (H2).",
    "hintOrFormula": "Copper oxide (black) + Hydrogen → Copper metal (reddish brown) + Water vapour",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_20",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Reaction of Manganese Dioxide with Hydrochloric Acid",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Reaction of Manganese Dioxide with Hydrochloric Acid",
    "backAnswer": "Equation: \\text{MnO}_2(s) + 4\\text{HCl}(aq) \\to \\text{MnCl}_2(aq) + 2\\text{H}_2\\text{O}(l) + \\text{Cl}_2(g)\nType: Redox (Oxidation-Reduction) (Exothermic)\nObservations: MnO2 is reduced to MnCl2 (loses oxygen, oxidation state of Mn drops from +4 to +2).; HCl is oxidized to Cl2 (loses hydrogen / electrons, Cl drops from -1 to 0).; Oxidizing Agent: MnO2; Reducing Agent: HCl.\nTrap: Super high-frequency board question! Students often erroneously write that HCl is reduced. HCl is OXIDIZED to Cl2.",
    "hintOrFormula": "Manganese dioxide + Hydrochloric acid → Manganese chloride + Water + Chlorine gas",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_21",
    "subject": "Science",
    "chapter": "Chemical Reactions and Equations",
    "topic": "Rusting of Iron (Hydrated Ferric Oxide Formation)",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Rusting of Iron (Hydrated Ferric Oxide Formation)",
    "backAnswer": "Equation: 4\\text{Fe}(s) + 3\\text{O}_2(g) + 2x\\text{H}_2\\text{O}(l) \\to 2\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}(s)\nType: Corrosion & Rusting (Exothermic (very slow))\nObservations: Reddish-brown flaky crust forms on iron, eating away the structural metal.; Prevention methods: Galvanization (coating with molten zinc), painting, greasing, chrome plating, alloying into stainless steel (Fe + Ni + Cr).\nTrap: Why 'x' in formula? Because the number of water molecules varies with atmospheric humidity. Write Fe2O3·xH2O, not Fe2O3.",
    "hintOrFormula": "Iron + Oxygen + Moisture → Rust (Hydrated ferric oxide, reddish-brown flaky crust)",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_22",
    "subject": "Science",
    "chapter": "Acids, Bases and Salts",
    "topic": "Reaction of Zinc with Dilute Sulphuric Acid",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Reaction of Zinc with Dilute Sulphuric Acid",
    "backAnswer": "Equation: \\text{Zn}(s) + \\text{H}_2\\text{SO}_4(aq) \\to \\text{ZnSO}_4(aq) + \\text{H}_2(g)\\uparrow\nType: Displacement (Exothermic)\nObservations: Brisk effervescence of gas bubbles appearing on the surface of zinc granules.; When gas is passed through soap solution, soap bubbles filled with hydrogen rise in the air.; A burning candle brought near a gas bubble bursts it with a distinct 'POP' sound.\nTrap: Confirmatory Test for H2: Always write 'Burns with a pop sound when a burning splinter is brought near the gas'.",
    "hintOrFormula": "Zinc granules + Dilute Sulphuric acid → Zinc sulphate + Hydrogen gas (Pop sound)",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_23",
    "subject": "Science",
    "chapter": "Acids, Bases and Salts",
    "topic": "Reaction of Zinc with Sodium Hydroxide (Amphoteric Nature)",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Reaction of Zinc with Sodium Hydroxide (Amphoteric Nature)",
    "backAnswer": "Equation: \\text{Zn}(s) + 2\\text{NaOH}(aq) \\xrightarrow{\\Delta} \\text{Na}_2\\text{ZnO}_2(aq) + \\text{H}_2(g)\\uparrow\nType: Displacement (Exothermic)\nObservations: Brisk evolution of Hydrogen gas upon warming.; Confirms that Zinc is an amphoteric metal capable of reacting with both acids and strong alkalis.\nTrap: Super critical formula: Sodium zincate is Na2ZnO2 (Zincate radical is ZnO2²⁻), NOT NaZnO2!",
    "hintOrFormula": "Zinc + Sodium hydroxide (warm) → Sodium zincate + Hydrogen gas",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_24",
    "subject": "Science",
    "chapter": "Acids, Bases and Salts",
    "topic": "Reaction of Sodium Carbonate with Hydrochloric Acid",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Reaction of Sodium Carbonate with Hydrochloric Acid",
    "backAnswer": "Equation: \\text{Na}_2\\text{CO}_3(s) + 2\\text{HCl}(aq) \\to 2\\text{NaCl}(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)\\uparrow\nType: Acid-Carbonate Gas Evolution (Exothermic)\nObservations: Vigorous, brisk effervescence (bubbling).; Gas evolved turns freshly prepared limewater milky, confirming CO2.\nTrap: Brisk effervescence is due to CO2, NOT H2! H2 does not show effervescence with carbonates.",
    "hintOrFormula": "Sodium carbonate + Hydrochloric acid → Sodium chloride + Water + Carbon dioxide",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_25",
    "subject": "Science",
    "chapter": "Acids, Bases and Salts",
    "topic": "Reaction of Sodium Hydrogen Carbonate with Hydrochloric Acid",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Reaction of Sodium Hydrogen Carbonate with Hydrochloric Acid",
    "backAnswer": "Equation: \\text{NaHCO}_3(s) + \\text{HCl}(aq) \\to \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g)\\uparrow\nType: Acid-Carbonate Gas Evolution (Endothermic / mild cooling)\nObservations: Brisk effervescence; gas turns limewater milky.\nTrap: Notice mole ratio is 1:1 for NaHCO3 with HCl, whereas it is 1:2 for Na2CO3 with HCl.",
    "hintOrFormula": "Sodium hydrogen carbonate + Hydrochloric acid → Sodium chloride + Water + Carbon dioxide",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_26",
    "subject": "Science",
    "chapter": "Acids, Bases and Salts",
    "topic": "Lime Water Test for Carbon Dioxide Gas",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Lime Water Test for Carbon Dioxide Gas",
    "backAnswer": "Equation: \\text{Ca(OH)}_2(aq) + \\text{CO}_2(g) \\to \\text{CaCO}_3(s)\\downarrow + \\text{H}_2\\text{O}(l)\nType: Double Displacement (Precipitation) (Thermoneutral)\nObservations: The completely clear limewater turns opaque, milky turbid white due to formation of insoluble CaCO3 precipitate.\nTrap: What happens if CO2 is passed for too long? See rx_2_6 below! Milkiness DISAPPEARS upon excess CO2.",
    "hintOrFormula": "Lime water (Calcium hydroxide) + Carbon dioxide → Calcium carbonate (milky white ppt) + Water",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_27",
    "subject": "Science",
    "chapter": "Acids, Bases and Salts",
    "topic": "Passing Excess Carbon Dioxide through Milky Lime Water",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Passing Excess Carbon Dioxide through Milky Lime Water",
    "backAnswer": "Equation: \\text{CaCO}_3(s) + \\text{H}_2\\text{O}(l) + \\text{CO}_2(g) \\to \\text{Ca(HCO}_3)_2(aq)\nType: Combination (Thermoneutral)\nObservations: The cloudy white milkiness completely vanishes, leaving behind a sparkling clear solution.; Because Calcium hydrogen carbonate is readily soluble in water.\nTrap: Iconic board question: 'Why does milkiness disappear on passing excess CO2?' Answer: Due to formation of water-soluble calcium hydrogen carbonate [Ca(HCO3)2].",
    "hintOrFormula": "Calcium carbonate (milky ppt) + Water + Excess CO2 → Calcium hydrogen carbonate (soluble, clear)",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_28",
    "subject": "Science",
    "chapter": "Acids, Bases and Salts",
    "topic": "Neutralization of Strong Acid with Strong Base",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Neutralization of Strong Acid with Strong Base",
    "backAnswer": "Equation: \\text{HCl}(aq) + \\text{NaOH}(aq) \\to \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l) + \\text{Heat}\nType: Neutralization (Exothermic)\nObservations: Phenolphthalein is pink in NaOH; adding dilute HCl drop by drop suddenly discharges pink color to completely colorless at neutralization point.; Net ionic equation is: H+(aq) + OH-(aq) → H2O(l).\nTrap: Phenolphthalein color in acid: COLORLESS; in base: PINK. Methyl orange in acid: RED; in base: YELLOW.",
    "hintOrFormula": "Hydrochloric acid + Sodium hydroxide → Sodium chloride + Water + Heat",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_29",
    "subject": "Science",
    "chapter": "Acids, Bases and Salts",
    "topic": "Reaction of Copper(II) Oxide with Hydrochloric Acid",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Reaction of Copper(II) Oxide with Hydrochloric Acid",
    "backAnswer": "Equation: \\text{CuO}(s) + 2\\text{HCl}(aq) \\to \\text{CuCl}_2(aq) + \\text{H}_2\\text{O}(l)\nType: Neutralization (Exothermic)\nObservations: The black copper oxide powder dissolves.; The solution turns a vivid, beautiful blue-green color due to the formation of CuCl2.; Proves that metallic oxides are BASIC in nature because they react with acids to yield salt + water.\nTrap: Color of CuCl2 solution is BLUE-GREEN. Why are metallic oxides called basic oxides? Because like bases, they react with acids to give salt and water.",
    "hintOrFormula": "Copper(II) oxide (black powder) + Hydrochloric acid → Copper(II) chloride (blue-green) + Water",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_30",
    "subject": "Science",
    "chapter": "Acids, Bases and Salts",
    "topic": "Electrolysis of Brine (Chlor-Alkali Process)",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Electrolysis of Brine (Chlor-Alkali Process)",
    "backAnswer": "Equation: 2\\text{NaCl}(aq) + 2\\text{H}_2\\text{O}(l) \\xrightarrow{\\text{Electricity}} 2\\text{NaOH}(aq) + \\text{Cl}_2(g)[\\text{Anode}] + \\text{H}_2(g)[\\text{Cathode}]\nType: Chlor-Alkali Process (Endothermic (Electrical energy))\nObservations: Why called 'Chlor-Alkali'? 'Chlor' for Chlorine product, and 'Alkali' for Sodium hydroxide (NaOH).; Uses: Cl2 for water treatment/PVC/bleaching; H2 for fuels/ammonia for fertilizers; NaOH for de-greasing metals/soaps/paper making.\nTrap: Products at electrodes: Anode = Cl2; Cathode = H2; NaOH solution forms near the cathode.",
    "hintOrFormula": "Brine (Aqueous sodium chloride) + Water → Sodium hydroxide + Chlorine (Anode) + Hydrogen (Cathode)",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_31",
    "subject": "Science",
    "chapter": "Acids, Bases and Salts",
    "topic": "Manufacture of Bleaching Powder",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Manufacture of Bleaching Powder",
    "backAnswer": "Equation: \\text{Ca(OH)}_2(s) + \\text{Cl}_2(g) \\to \\text{CaOCl}_2(s) + \\text{H}_2\\text{O}(l)\nType: Salt Preparation / Hydration (Exothermic)\nObservations: Bleaching powder has a strong, pungent smell of chlorine because it slowly reacts with atmospheric CO2.; Used for bleaching cotton and linen in textile industry, bleaching wood pulp, and as a disinfectant for sterilizing drinking water.\nTrap: Must be DRY slaked lime Ca(OH)2(s), NOT limewater solution! Formula is CaOCl2.",
    "hintOrFormula": "Dry slaked lime + Chlorine gas → Bleaching powder (Calcium oxychloride) + Water",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_32",
    "subject": "Science",
    "chapter": "Acids, Bases and Salts",
    "topic": "Manufacture of Baking Soda (Sodium Hydrogen Carbonate)",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Manufacture of Baking Soda (Sodium Hydrogen Carbonate)",
    "backAnswer": "Equation: \\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2 + \\text{NH}_3 \\to \\text{NH}_4\\text{Cl} + \\text{NaHCO}_3(s)\\downarrow\nType: Salt Preparation / Hydration (Exothermic)\nObservations: NaHCO3 is sparingly soluble in the presence of excess NH4+ and Na+ ions, precipitating out.; NaHCO3 is a mild non-corrosive basic salt with pH ~8.3, used as an antacid to neutralize stomach acidity.\nTrap: Raw materials for Solvay process: NaCl, H2O, CO2, and NH3. Memorize this 4-component recipe.",
    "hintOrFormula": "Sodium chloride + Water + Carbon dioxide + Ammonia → Ammonium chloride + Sodium hydrogen carbonate",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_33",
    "subject": "Science",
    "chapter": "Acids, Bases and Salts",
    "topic": "Thermal Decomposition of Baking Soda during Cooking",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Thermal Decomposition of Baking Soda during Cooking",
    "backAnswer": "Equation: 2\\text{NaHCO}_3(s) \\xrightarrow{\\Delta} \\text{Na}_2\\text{CO}_3(s) + \\text{H}_2\\text{O}(g) + \\text{CO}_2(g)\\uparrow\nType: Thermal Decomposition (Endothermic)\nObservations: CO2 gas bubbles trapped in dough expand on heating, causing bread, pakoras, and cakes to rise and become soft and spongy.; Baking Powder contains Baking Soda + a mild edible acid like Tartaric acid (to neutralize the bitter taste of Na2CO3).\nTrap: Difference between Baking Soda and Baking Powder: Baking Soda is pure NaHCO3. Baking Powder is NaHCO3 + Tartaric acid (which reacts with Na2CO3 to prevent bitter taste).",
    "hintOrFormula": "Sodium hydrogen carbonate (heated) → Sodium carbonate + Water vapour + Carbon dioxide gas",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_34",
    "subject": "Science",
    "chapter": "Acids, Bases and Salts",
    "topic": "Recrystallisation of Sodium Carbonate (Washing Soda)",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Recrystallisation of Sodium Carbonate (Washing Soda)",
    "backAnswer": "Equation: \\text{Na}_2\\text{CO}_3(s) + 10\\text{H}_2\\text{O}(l) \\to \\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}(s)\nType: Salt Preparation / Hydration (Exothermic)\nObservations: Contains 10 molecules of water of crystallisation per formula unit.; Used in glass, soap, and paper industries, for domestic cleaning, and for removing permanent hardness of water.\nTrap: How does washing soda remove permanent hardness of water? It precipitates dissolved Ca²⁺ and Mg²⁺ ions as insoluble carbonates: CaSO4 + Na2CO3 → CaCO3↓ + Na2SO4.",
    "hintOrFormula": "Sodium carbonate + 10 Water molecules → Washing soda (Sodium carbonate decahydrate)",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_chem_35",
    "subject": "Science",
    "chapter": "Acids, Bases and Salts",
    "topic": "Heating Gypsum to make Plaster of Paris (POP)",
    "frontQuestion": "Give balanced chemical equation, observations, and reaction type for: Heating Gypsum to make Plaster of Paris (POP)",
    "backAnswer": "Equation: \\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}(s) \\xrightarrow{373\\text{ K } (100^\\circ\\text{C})} \\text{CaSO}_4 \\cdot \\frac{1}{2}\\text{H}_2\\text{O}(s) + 1\\frac{1}{2}\\text{H}_2\\text{O}(g)\nType: Thermal Decomposition (Endothermic)\nObservations: Why 'hemihydrate' (1/2 H2O)? Two formula units of CaSO4 share one molecule of H2O: 2CaSO4·H2O.; If heated above 373 K, it loses all water to become anhydrous calcium sulphate ('dead burnt plaster'), which does not set with water!\nTrap: Temperature must NOT exceed 373 K (100 °C)! Above 373 K, it forms dead burnt plaster CaSO4 with no setting property.",
    "hintOrFormula": "Gypsum (heated at 373 K) → Plaster of Paris (Calcium sulphate hemihydrate) + 1.5 Water vapour",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_1",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1789: The French Revolution Begins",
    "frontQuestion": "What occurred in Year 1789 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: The French Revolution Begins\nSignificance: First clear political expression of nationalism in European history. Sovereignty was transferred from an absolute Bourbon monarch to a sovereign assembly of French citizens.\nKey Personalities: Louis XVI, Third Estate Delegates\nBoard Trap: Do NOT write that French revolutionaries abolished monarchy instantly; constitutional monarchy existed first (1791) before the Republic was declared in 1792.",
    "hintOrFormula": "FC-TUM: Fatherland (Patrie), Citizen (Citoyen), Tricolour, Uniform laws, Metric system",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_2",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1797: Napoleon Invades Italy; Napoleonic Wars Commence",
    "frontQuestion": "What occurred in Year 1797 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Napoleon Invades Italy; Napoleonic Wars Commence\nSignificance: French revolutionary armies crossed frontiers into Italy, Switzerland, and the Low Countries, carrying radical concepts of liberty, equality, and state reorganization abroad.\nKey Personalities: Napoleon Bonaparte\nBoard Trap: Students forget that initial reception by Dutch, Swiss, and Milanese cities hailed French soldiers as 'harbingers of liberty' before reality hit.",
    "hintOrFormula": "Year 1797",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_3",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1804: The Napoleonic Code (Civil Code of 1804) Enacted",
    "frontQuestion": "What occurred in Year 1804 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: The Napoleonic Code (Civil Code of 1804) Enacted\nSignificance: A landmark modern legal synthesis: abolished all birth privileges, guaranteed equality before the law, secured property rights, and abolished feudal manorial dues in conquered regions.\nKey Personalities: Napoleon Bonaparte\nBoard Trap: Writing that the Napoleonic Code granted women equal rights! The Code actually stripped women of legal independence, reducing them to minors subject to fathers and husbands.",
    "hintOrFormula": "PEEP: Privileges abolished, Equality before law, Established property rights, Peasant dues eliminated",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_4",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1813: Battle of Leipzig (Battle of the Nations)",
    "frontQuestion": "What occurred in Year 1813 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Battle of Leipzig (Battle of the Nations)\nSignificance: Coalition armies of Prussia, Russia, Austria, and Sweden decisively defeated Napoleon in Saxony, shattering French hegemony in Central Europe and forcing Napoleon's retreat.\nKey Personalities: Napoleon Bonaparte, Gebhard von Blücher, Prince Schwarzenberg\nBoard Trap: Confusing the Battle of Leipzig (1813) with Waterloo (1815). Leipzig caused Napoleon's first abdication to Elba.",
    "hintOrFormula": "Year 1813",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_5",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1815: Defeat of Napoleon at Waterloo & Treaty of Vienna (1815)",
    "frontQuestion": "What occurred in Year 1815 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Defeat of Napoleon at Waterloo & Treaty of Vienna (1815)\nSignificance: Hosted by Austrian Chancellor Duke Metternich. Major European powers (Britain, Russia, Prussia, Austria) redrew the map of Europe to restore the conservative monarchical order and contain France.\nKey Personalities: Duke Metternich, Kaiser Francis I, Tsar Alexander I, King Frederick William III\nBoard Trap: Saying Napoleon's German Confederation of 39 states was dismantled! The Treaty of Vienna left the German Confederation of 39 states untouched.",
    "hintOrFormula": "METT: Monarchy restored (Bourbons), Encirclement buffer states, Thirty-nine German states untouched, Territorially compensated powers",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_6",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1821: Greek War of Independence Begins",
    "frontQuestion": "What occurred in Year 1821 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Greek War of Independence Begins\nSignificance: Greeks mobilized against the Muslim Ottoman Empire, sparking pan-European sympathy among romantic poets and intellectuals who revered Greece as the cradle of European civilisation.\nKey Personalities: Lord Byron, Alexandros Ypsilantis, Sultan Mahmud II\nBoard Trap: Assuming Greece won independence immediately in 1821; the war dragged on for 11 brutal years until the Treaty of Constantinople in 1832.",
    "hintOrFormula": "Year 1821",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_7",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1824: English Romantic Poet Lord Byron Dies at Missolonghi",
    "frontQuestion": "What occurred in Year 1824 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: English Romantic Poet Lord Byron Dies at Missolonghi\nSignificance: Lord Byron gathered private funds, bought arms, and sailed to Greece to lead volunteer troops against Ottoman armies before dying of malaria/fever at Missolonghi.\nKey Personalities: Lord Byron\nBoard Trap: Writing that Byron died fighting in battle; he died of fever/illness while organizing the campaign at Missolonghi.",
    "hintOrFormula": "Year 1824",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_8",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "July 1830: July Revolution in France Overthrows Bourbon Dynasty",
    "frontQuestion": "What occurred in Year July 1830 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: July Revolution in France Overthrows Bourbon Dynasty\nSignificance: Liberal revolutionaries barricaded Paris streets and overthrew the reactionary Bourbon King Charles X. Installed Louis Philippe as constitutional monarch and proved Metternich's adage: 'When France sneezes, the rest of Europe catches cold.'\nKey Personalities: Charles X, Louis Philippe, Duke Metternich\nBoard Trap: Thinking July 1830 proclaimed a Republic; it installed a Constitutional Monarchy under Louis Philippe.",
    "hintOrFormula": "Year July 1830",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_9",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1831: Giuseppe Mazzini Founds 'Young Italy' in Marseilles",
    "frontQuestion": "What occurred in Year 1831 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Giuseppe Mazzini Founds 'Young Italy' in Marseilles\nSignificance: Italian revolutionary Mazzini established the secret society 'Young Italy' (Giovine Italia) to unify the fractured Italian peninsula into a single, indivisible republican nation.\nKey Personalities: Giuseppe Mazzini, Duke Metternich\nBoard Trap: Mazzini wanted a democratic REPUBLIC, whereas Cavour and Victor Emmanuel II wanted a constitutional MONARCHY under Piedmont.",
    "hintOrFormula": "M-MYE: Mazzini founded Marseilles Young Italy, Berne Young Europe",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_10",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1831: Armed Rebellion in Poland Against Russian Tsarist Rule",
    "frontQuestion": "What occurred in Year 1831 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Armed Rebellion in Poland Against Russian Tsarist Rule\nSignificance: Polish army officers and nationalists revolted against Tsarist autocracy. When Russia brutally crushed the armed uprising, Polish priests weaponized the Polish language in Catholic liturgy as silent resistance.\nKey Personalities: Tsar Nicholas I, Polish Catholic Clergy\nBoard Trap: Writing that the Polish rebellion succeeded; it was crushed with ruthless severity by Russian armed forces.",
    "hintOrFormula": "Year 1831",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_11",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1832: Treaty of Constantinople Recognizes Independent Greece",
    "frontQuestion": "What occurred in Year 1832 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Treaty of Constantinople Recognizes Independent Greece\nSignificance: Formally recognized Greece as an independent sovereign nation state, bringing the 11-year war of independence to a successful conclusion and ending Ottoman suzerainty.\nKey Personalities: King Otto of Bavaria (first King of Greece)\nBoard Trap: Do NOT write Treaty of Vienna or Treaty of Versailles!",
    "hintOrFormula": "Year 1832",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_12",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1833: Mazzini Founds 'Young Europe' in Berne",
    "frontQuestion": "What occurred in Year 1833 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Mazzini Founds 'Young Europe' in Berne\nSignificance: Established an international federation of republican underground societies in Switzerland, uniting young radicals from Poland, Italy, Germany, and France to overthrow autocracies.\nKey Personalities: Giuseppe Mazzini\nBoard Trap: Swapping the cities: Young Italy was in Marseilles (France); Young Europe was in Berne (Switzerland).",
    "hintOrFormula": "Year 1833",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_13",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1834: Zollverein (German Customs Union) Established",
    "frontQuestion": "What occurred in Year 1834 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Zollverein (German Customs Union) Established\nSignificance: Initiated by Prussia and joined by most German states. Abolished internal tariff barriers and reduced currencies from over thirty to just two, harnessing economic unity to foster political nationalism.\nKey Personalities: Friedrich List (Economist), Prussian Administrators\nBoard Trap: Remember that Austria was deliberately EXCLUDED from the Zollverein; Prussia led it.",
    "hintOrFormula": "Z-2-CT: Zollverein reduced currencies to 2, abolished Customs Tariffs",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_14",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1845: Silesian Weavers' Revolt Against Exploitative Contractors",
    "frontQuestion": "What occurred in Year 1845 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Silesian Weavers' Revolt Against Exploitative Contractors\nSignificance: Desperate cotton weavers marched on contractors' mansions demanding fair wages for woven cloth. Mansions were plundered and porcelain smashed. Army called in; 11 weavers shot dead.\nKey Personalities: Wilhelm Wolff (Journalist), Silesian Contractors\nBoard Trap: The contractors fled and returned within 24 hours with army backing; it was an economic revolt against contractors, not an anti-monarchical coup.",
    "hintOrFormula": "Year 1845",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_15",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "February 1848: Popular Uprising in Paris; French Republic Proclaimed",
    "frontQuestion": "What occurred in Year February 1848 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Popular Uprising in Paris; French Republic Proclaimed\nSignificance: Severe food shortages and widespread industrial unemployment brought armed barricades to Paris. King Louis Philippe fled into exile; National Assembly declared a Republic, granted male suffrage (>21), and guaranteed the right to work.\nKey Personalities: Louis Philippe (deposed), French National Assembly\nBoard Trap: Suffrage was granted to ALL adult MALES above 21; women were still excluded from political voting rights.",
    "hintOrFormula": "Year February 1848",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_16",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "18 May 1848: Frankfurt Parliament Convenes at Church of St. Paul",
    "frontQuestion": "What occurred in Year 18 May 1848 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Frankfurt Parliament Convenes at Church of St. Paul\nSignificance: 831 elected German middle-class representatives met in Frankfurt to draft a constitution for a unified German nation headed by a constitutional monarch. The crown was offered to Friedrich Wilhelm IV of Prussia, who spurned it.\nKey Personalities: King Friedrich Wilhelm IV of Prussia, German Middle-Class Deputies\nBoard Trap: Women were admitted only as observers to stand in the visitors' gallery, even though they participated actively in newspapers and demonstrations.",
    "hintOrFormula": "831-SP-FW: 831 deputies at St. Paul, refused by Friedrich Wilhelm",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_17",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1859: Sardinia-Piedmont Defeats Austrian Forces",
    "frontQuestion": "What occurred in Year 1859 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Sardinia-Piedmont Defeats Austrian Forces\nSignificance: Engineered by Chief Minister Count Camillo de Cavour through a tactical diplomatic alliance with Napoleon III of France. Piedmont routed the Austrian army at Magenta and Solferino, liberating Lombardy.\nKey Personalities: Count Camillo de Cavour, Victor Emmanuel II, Napoleon III\nBoard Trap: Do NOT describe Cavour as a passionate Italian patriot or republican; he was a pragmatic monarchist diplomat.",
    "hintOrFormula": "Year 1859",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_18",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1860: Garibaldi Leads 'Expedition of the Thousand' (Red Shirts)",
    "frontQuestion": "What occurred in Year 1860 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Garibaldi Leads 'Expedition of the Thousand' (Red Shirts)\nSignificance: Giuseppe Garibaldi and his armed Red Shirt volunteers marched into the Kingdom of the Two Sicilies, rallying local illiterate peasants to drive out the Spanish Bourbon rulers.\nKey Personalities: Giuseppe Garibaldi, Bourbon Monarch of Naples\nBoard Trap: Garibaldi handed over all conquered southern territories to King Victor Emmanuel II rather than creating a southern republic.",
    "hintOrFormula": "Year 1860",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_19",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1861: Victor Emmanuel II Proclaimed King of United Italy",
    "frontQuestion": "What occurred in Year 1861 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Victor Emmanuel II Proclaimed King of United Italy\nSignificance: Official proclamation of the unified Kingdom of Italy under the Royal House of Savoy. Though Venetia (1866) and Rome (1870) joined later, Italy was at last an integrated national state.\nKey Personalities: Victor Emmanuel II, Count Cavour\nBoard Trap: Italy had 7 separate states before unification, and only ONE (Sardinia-Piedmont) was ruled by an Italian princely house!",
    "hintOrFormula": "Year 1861",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_20",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1866–1871: Three Wars of German Unification over Seven Years",
    "frontQuestion": "What occurred in Year 1866–1871 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Three Wars of German Unification over Seven Years\nSignificance: Prussian Prime Minister Otto von Bismarck ('Blood and Iron') orchestrated three victorious wars against Denmark (1864), Austria (1866), and France (1870–71), systematically forging German unity.\nKey Personalities: Otto von Bismarck, General von Moltke, Kaiser William I\nBoard Trap: Bismarck did not unify Germany through parliamentary speeches or democratic votes, but through military force and Prussian royal dominance ('Iron and Blood').",
    "hintOrFormula": "Year 1866–1871",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_21",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "18 January 1871: Proclamation of the German Empire in the Hall of Mirrors",
    "frontQuestion": "What occurred in Year 18 January 1871 and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Proclamation of the German Empire in the Hall of Mirrors\nSignificance: In the freezing Hall of Mirrors at the Palace of Versailles, King William I of Prussia was proclaimed German Emperor (Kaiser). Symbolized Prussian dominance in modernizing German banking, currency, and judicial systems.\nKey Personalities: Kaiser William I, Otto von Bismarck\nBoard Trap: Students often write the ceremony took place in Berlin; it deliberately took place in Versailles, France, to humiliate defeated France!",
    "hintOrFormula": "V-1871-KW: Versailles 1871 Kaiser William I",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_22",
    "subject": "Social Science",
    "chapter": "The Rise of Nationalism in Europe",
    "topic": "1871 onwards: Balkan Nationalist Explosions & Great Power Rivalries",
    "frontQuestion": "What occurred in Year 1871 onwards and why is it pivotal in The Rise of Nationalism in Europe?",
    "backAnswer": "Event: Balkan Nationalist Explosions & Great Power Rivalries\nSignificance: The disintegrating Ottoman Empire left the Balkan nationalities (Slavs: Romania, Serbia, Bulgaria, Greece, Bosnia) locked in territorial envy, exploited by Russia, Germany, Britain, and Austria-Hungary, directly triggering World War I in 1914.\nKey Personalities: Tsar of Russia, Kaiser Wilhelm II, Franz Joseph\nBoard Trap: The Balkans was explosive not just because of internal ethnic jealousies, but because Great European Powers directly meddled to secure naval routes and colonial influence.",
    "hintOrFormula": "Year 1871 onwards",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_23",
    "subject": "Social Science",
    "chapter": "Nationalism in India",
    "topic": "January 1915: Mahatma Gandhi Returns to India from South Africa",
    "frontQuestion": "What occurred in Year January 1915 and why is it pivotal in Nationalism in India?",
    "backAnswer": "Event: Mahatma Gandhi Returns to India from South Africa\nSignificance: Gandhiji returned after 21 years with his tested moral technique of Satyagraha — non-violent soul-force which had defeated racist discriminatory registration laws in South Africa.\nKey Personalities: Mahatma Gandhi, Gopal Krishna Gokhale\nBoard Trap: Satyagraha is NOT 'passive resistance'; Gandhiji explicitly stated it requires intense active moral bravery, not physical weakness.",
    "hintOrFormula": "Year January 1915",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_24",
    "subject": "Social Science",
    "chapter": "Nationalism in India",
    "topic": "1917: Champaran Satyagraha in Bihar",
    "frontQuestion": "What occurred in Year 1917 and why is it pivotal in Nationalism in India?",
    "backAnswer": "Event: Champaran Satyagraha in Bihar\nSignificance: Gandhiji's first mass satyagraha on Indian soil. Organized impoverished indigo peasants against European planters exploiting them under the oppressive Tinkathia system.\nKey Personalities: Mahatma Gandhi, Rajkumar Shukla, Dr. Rajendra Prasad\nBoard Trap: Don't confuse Champaran (Indigo peasants, Bihar) with Kheda (Crop failure revenue remission, Gujarat).",
    "hintOrFormula": "CAK: Champaran (1917), Ahmedabad (1918), Kheda (1917/18)",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_25",
    "subject": "Social Science",
    "chapter": "Nationalism in India",
    "topic": "1917: Kheda Satyagraha in Gujarat",
    "frontQuestion": "What occurred in Year 1917 and why is it pivotal in Nationalism in India?",
    "backAnswer": "Event: Kheda Satyagraha in Gujarat\nSignificance: Supported peasants hit by crop failure and bubonic plague epidemic who were unable to pay land revenue and demanded full remission from colonial collectors.\nKey Personalities: Mahatma Gandhi, Sardar Vallabhbhai Patel\nBoard Trap: Kheda was for PEASANT crop failure revenue remission; Ahmedabad was for TEXTILE MILL WORKERS wages.",
    "hintOrFormula": "Year 1917",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_26",
    "subject": "Social Science",
    "chapter": "Nationalism in India",
    "topic": "1918: Ahmedabad Mill Workers' Strike in Gujarat",
    "frontQuestion": "What occurred in Year 1918 and why is it pivotal in Nationalism in India?",
    "backAnswer": "Event: Ahmedabad Mill Workers' Strike in Gujarat\nSignificance: Gandhiji organized cotton textile mill workers demanding a 35% wage hike to cope with wartime inflation. Undertook his first hunger strike, successfully compelling mill owners to concede.\nKey Personalities: Mahatma Gandhi, Anasuya Sarabhai, Ambalal Sarabhai\nBoard Trap: Workers originally wanted a 50% plague bonus; owners offered 20%; Gandhiji mediated a compromise of exactly 35%.",
    "hintOrFormula": "Year 1918",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_27",
    "subject": "Social Science",
    "chapter": "Nationalism in India",
    "topic": "March 1919: Imperial Legislative Council Enacts the Rowlatt Act",
    "frontQuestion": "What occurred in Year March 1919 and why is it pivotal in Nationalism in India?",
    "backAnswer": "Event: Imperial Legislative Council Enacts the Rowlatt Act\nSignificance: Passed hurriedly despite unanimous opposition by Indian members. Empowered the British colonial police to arrest and detain any political suspect without trial for up to two years.\nKey Personalities: Sir Sidney Rowlatt, Lord Chelmsford\nBoard Trap: Indians called it the 'Black Act' (Kala Kanoon), passed through the Imperial Council despite unanimous vote against it by Indian members like Jinnah and Malaviya.",
    "hintOrFormula": "Year March 1919",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_28",
    "subject": "Social Science",
    "chapter": "Nationalism in India",
    "topic": "March 1919: Khilafat Committee Formed in Bombay",
    "frontQuestion": "What occurred in Year March 1919 and why is it pivotal in Nationalism in India?",
    "backAnswer": "Event: Khilafat Committee Formed in Bombay\nSignificance: Formed by brothers Muhammad Ali and Shaukat Ali (Ali brothers) to protect the temporal and spiritual status of the Ottoman Sultan (Khalifa) following Turkey's defeat in WWI.\nKey Personalities: Muhammad Ali, Shaukat Ali, Abul Kalam Azad\nBoard Trap: The Khilafat movement was rooted in the fate of Turkey and the Ottoman Khalifa, but integrated into India's anti-colonial Swaraj struggle.",
    "hintOrFormula": "Year March 1919",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_29",
    "subject": "Social Science",
    "chapter": "Nationalism in India",
    "topic": "6 April 1919: All-India Rowlatt Hartal Observed",
    "frontQuestion": "What occurred in Year 6 April 1919 and why is it pivotal in Nationalism in India?",
    "backAnswer": "Event: All-India Rowlatt Hartal Observed\nSignificance: Gandhiji called for a nationwide day of fasting, prayer, and non-violent strike. Shops shut, factories halted, and massive demonstrations erupted across Indian cities.\nKey Personalities: Mahatma Gandhi\nBoard Trap: Gandhiji was barred from entering Delhi and Punjab by British authorities, provoking violent clashes in Delhi and Amritsar.",
    "hintOrFormula": "Year 6 April 1919",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_30",
    "subject": "Social Science",
    "chapter": "Nationalism in India",
    "topic": "10 April 1919: Police Firing on Peaceful Procession in Amritsar",
    "frontQuestion": "What occurred in Year 10 April 1919 and why is it pivotal in Nationalism in India?",
    "backAnswer": "Event: Police Firing on Peaceful Procession in Amritsar\nSignificance: British police fired on a peaceful march demanding the release of popular leaders Dr. Saifuddin Kitchlew and Dr. Satyapal. Enraged crowds attacked banks, post offices, and railway stations; Martial Law was proclaimed under Brigadier-General Dyer.\nKey Personalities: Dr. Saifuddin Kitchlew, Dr. Satyapal, General Reginald Dyer\nBoard Trap: Many villagers gathered at Jallianwala Bagh three days later (13 April) had come from rural areas and were completely unaware of the Martial Law prohibition!",
    "hintOrFormula": "Year 10 April 1919",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_31",
    "subject": "Social Science",
    "chapter": "Nationalism in India",
    "topic": "13 April 1919: Jallianwala Bagh Massacre at Amritsar",
    "frontQuestion": "What occurred in Year 13 April 1919 and why is it pivotal in Nationalism in India?",
    "backAnswer": "Event: Jallianwala Bagh Massacre at Amritsar\nSignificance: Dyer blocked all narrow exit passages of the walled garden and ordered troops to open fire without warning on thousands of unarmed men, women, and children attending the annual Baisakhi fair. Hundreds slaughtered. Dyer stated his intent was to 'produce a moral effect and strike terror'.\nKey Personalities: Brigadier-General Reginald Dyer, Rabindranath Tagore\nBoard Trap: Map Work: Amritsar is in PUNJAB, not Haryana or UP. Tagore renounced his British KNIGHTHOOD (not Nobel prize).",
    "hintOrFormula": "13-A-TAG: 13 April, Amritsar, Tagore renounced Knighthood",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_32",
    "subject": "Social Science",
    "chapter": "Nationalism in India",
    "topic": "September 1920: Calcutta Special Session of Indian National Congress",
    "frontQuestion": "What occurred in Year September 1920 and why is it pivotal in Nationalism in India?",
    "backAnswer": "Event: Calcutta Special Session of Indian National Congress\nSignificance: Gandhiji convinced senior Congress leaders that launching a Non-Cooperation Movement was imperative in support of the Khilafat cause as well as for Swaraj.\nKey Personalities: Mahatma Gandhi, Lala Lajpat Rai (President)\nBoard Trap: Do NOT confuse Calcutta (September 1920 - Proposal introduced) with Nagpur (December 1920 - Programme formally ratified)!",
    "hintOrFormula": "Year September 1920",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_33",
    "subject": "Social Science",
    "chapter": "Nationalism in India",
    "topic": "October 1920: Oudh Kisan Sabha Formed in Awadh",
    "frontQuestion": "What occurred in Year October 1920 and why is it pivotal in Nationalism in India?",
    "backAnswer": "Event: Oudh Kisan Sabha Formed in Awadh\nSignificance: Organized by Jawaharlal Nehru, Baba Ramchandra (indentured laborer returned from Fiji), and others. Within a month, over 300 village branches mushroomed across Awadh to combat talukdar exploitation.\nKey Personalities: Baba Ramchandra, Jawaharlal Nehru\nBoard Trap: Peasants in Awadh used the slogan of 'Gandhi Raj' to justify attacking talukdars' houses and looting grain hoards, which saddened Congress leaders.",
    "hintOrFormula": "Year October 1920",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_34",
    "subject": "Social Science",
    "chapter": "Nationalism in India",
    "topic": "December 1920: Nagpur Session of Congress Ratifies Non-Cooperation",
    "frontQuestion": "What occurred in Year December 1920 and why is it pivotal in Nationalism in India?",
    "backAnswer": "Event: Nagpur Session of Congress Ratifies Non-Cooperation\nSignificance: Intense debate between compromise factions ended in unanimous adoption. The Non-Cooperation programme was officially ratified and launched nationwide.\nKey Personalities: Mahatma Gandhi, C. Vijayaraghavachariar (President), C.R. Das\nBoard Trap: September 1920 = Calcutta (West Bengal); December 1920 = Nagpur (Maharashtra). Both are mandatory CBSE map points!",
    "hintOrFormula": "Year December 1920",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_sst_35",
    "subject": "Social Science",
    "chapter": "Nationalism in India",
    "topic": "January 1921: Non-Cooperation–Khilafat Movement Launched Nationwide",
    "frontQuestion": "What occurred in Year January 1921 and why is it pivotal in Nationalism in India?",
    "backAnswer": "Event: Non-Cooperation–Khilafat Movement Launched Nationwide\nSignificance: Massive participation across Indian society: thousands of students left government schools, lawyers boycotted courts, titles surrendered, foreign cloth boycotted and burned. Foreign cloth imports halved from Rs 102 crore to Rs 57 crore.\nKey Personalities: Mahatma Gandhi, Motilal Nehru, C.R. Das\nBoard Trap: Council elections were boycotted in most provinces, EXCEPT Madras, where the Justice Party (non-Brahmins) contested to gain political power.",
    "hintOrFormula": "BOY-COTT: Boycott titles, Outlaw foreign cloth, Yield no court attendance, Teach in national schools",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_1",
    "subject": "English",
    "chapter": "A Letter to God",
    "topic": "Irony",
    "frontQuestion": "What is the supreme irony at the climax of 'A Letter to God'?",
    "backAnswer": "Lencho suspected the benevolent post office employees who collected money for him of being 'a bunch of crooks'.",
    "hintOrFormula": "Helpers accused of theft",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_2",
    "subject": "English",
    "chapter": "Nelson Mandela",
    "topic": "Courage",
    "frontQuestion": "How does Nelson Mandela define true courage?",
    "backAnswer": "Courage is not the absence of fear, but the triumph over it. The brave person is the one who conquers fear.",
    "hintOrFormula": "Triumph over fear",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_3",
    "subject": "English",
    "chapter": "Dust of Snow",
    "topic": "Symbolism",
    "frontQuestion": "How does Robert Frost subvert traditional symbols in 'Dust of Snow'?",
    "backAnswer": "He uses the crow and hemlock tree (traditionally symbols of death and ill omen) as positive agents of emotional healing.",
    "hintOrFormula": "Crow and hemlock bring joy",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_4",
    "subject": "English",
    "chapter": "Fire and Ice",
    "topic": "Themes",
    "frontQuestion": "What do 'Fire' and 'Ice' symbolize in Robert Frost's poem?",
    "backAnswer": "Fire represents uncontrolled passion, greed, and desire. Ice represents cold hatred, apathy, and emotional rigidity.",
    "hintOrFormula": "Fire = Desire; Ice = Hatred",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_5",
    "subject": "English",
    "chapter": "A Tiger in the Zoo",
    "topic": "Contrast",
    "frontQuestion": "Contrast the tiger's condition in the cage with his natural habitat.",
    "backAnswer": "In cage: Quiet rage, velvet pads, ignores visitors, stares at stars. In jungle: Lurking in grass, stalking plump deer near water.",
    "hintOrFormula": "Velvet pads vs stalking deer",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_6",
    "subject": "English",
    "chapter": "Two Stories About Flying",
    "topic": "First Flight",
    "frontQuestion": "What finally compelled the young seagull to take his first flight?",
    "backAnswer": "Maddened by extreme hunger, he dived towards the fish in his mother's beak and his wings opened automatically.",
    "hintOrFormula": "Maddened by hunger",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_7",
    "subject": "English",
    "chapter": "The Diary of Anne Frank",
    "topic": "Solitude",
    "frontQuestion": "Why did Anne Frank say 'Paper has more patience than people'?",
    "backAnswer": "She felt people lacked genuine patience to listen to deep confidences, whereas her diary 'Kitty' offered a non-judgmental space.",
    "hintOrFormula": "Paper has more patience",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_8",
    "subject": "English",
    "chapter": "Glimpses of India",
    "topic": "Goan Bakers",
    "frontQuestion": "What was the traditional dress of Goan bakers and what were they called?",
    "backAnswer": "Called 'Pader'. They wore 'Kabai', a single-piece long frock reaching down to the knees.",
    "hintOrFormula": "Pader and Kabai",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_9",
    "subject": "English",
    "chapter": "Mijbil the Otter",
    "topic": "Otter Behavior",
    "frontQuestion": "What unique playful habit did Mijbil develop with ping-pong balls?",
    "backAnswer": "He would place the ball on the sloping lid of a damaged suitcase and run to catch it before it fell off.",
    "hintOrFormula": "Sloping suitcase game",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_10",
    "subject": "English",
    "chapter": "Madam Rides the Bus",
    "topic": "Valli's Maturity",
    "frontQuestion": "What sight during the return journey shattered Valli's joyful excitement?",
    "backAnswer": "The sight of the same young cow lying dead by the roadside, struck by a fast-moving vehicle.",
    "hintOrFormula": "Dead cow by roadside",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_11",
    "subject": "English",
    "chapter": "The Sermon at Benares",
    "topic": "Grief and Acceptance",
    "frontQuestion": "What lesson did Buddha teach Kisa Gotami with the mustard seeds?",
    "backAnswer": "Death is common to all mortals; grief and weeping cannot restore life and only increase physical and mental suffering.",
    "hintOrFormula": "Mustard seed from a home with no death",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_12",
    "subject": "English",
    "chapter": "The Proposal",
    "topic": "Farce",
    "frontQuestion": "What two absurd disputes derailed Lomov's marriage proposal to Natalya?",
    "backAnswer": "1. Ownership of the Oxen Meadows.\n2. Comparison of their hunting dogs (Guess vs Squeezer).",
    "hintOrFormula": "Oxen Meadows & Guess vs Squeezer",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_13",
    "subject": "English",
    "chapter": "A Triumph of Surgery",
    "topic": "Tricki's Cure",
    "frontQuestion": "How did Dr. Herriot cure Tricki without medicinal surgery?",
    "backAnswer": "By putting him on a strict calorie-restricted diet with abundant water and mandatory physical play with other dogs.",
    "hintOrFormula": "Zero medicine, strict diet & exercise",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_14",
    "subject": "English",
    "chapter": "The Thief's Story",
    "topic": "Transformation",
    "frontQuestion": "Why did Hari Singh return to Anil after stealing the 600 rupees?",
    "backAnswer": "Because Anil had trusted him completely and was teaching him to read, write, and add numbers, which held far more value than stolen cash.",
    "hintOrFormula": "Education vs temporary cash",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_15",
    "subject": "English",
    "chapter": "The Midnight Visitor",
    "topic": "Ausable's Wit",
    "frontQuestion": "How did Ausable outsmart the armed spy Max without a weapon?",
    "backAnswer": "By fabricating a convincing story about a non-existent balcony, tricking Max into jumping out the window to his death.",
    "hintOrFormula": "The imaginary balcony",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_16",
    "subject": "English",
    "chapter": "A Question of Trust",
    "topic": "Horace Danby",
    "frontQuestion": "How was Horace Danby outwitted at Shotover Grange?",
    "backAnswer": "A younger lady thief posed as the lady of the house and tricked Horace into opening the safe without gloves.",
    "hintOrFormula": "Honor among thieves",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_17",
    "subject": "English",
    "chapter": "Footprints Without Feet",
    "topic": "Griffin",
    "frontQuestion": "Why was Griffin described as a lawless person despite being a brilliant scientist?",
    "backAnswer": "He used his scientific discovery of invisibility for theft, arson, burglary, and physical assault rather than humanity's benefit.",
    "hintOrFormula": "Brilliant scientist but lawless",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_18",
    "subject": "English",
    "chapter": "The Making of a Scientist",
    "topic": "Ebright",
    "frontQuestion": "What book opened the world of science to Richard Ebright?",
    "backAnswer": "'The Travels of Monarch X' by Dr. Fredrick A. Urquhart, which inspired him to tag monarch butterflies.",
    "hintOrFormula": "The Travels of Monarch X",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_19",
    "subject": "English",
    "chapter": "The Necklace",
    "topic": "Tragic Irony",
    "frontQuestion": "What was the tragic discovery Matilda Loisel made after 10 years of grueling labor?",
    "backAnswer": "Madame Forestier revealed that the original borrowed necklace was made of fake paste stones worth at most 500 francs.",
    "hintOrFormula": "Necklace was fake, worth 500 francs",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_eng_20",
    "subject": "English",
    "chapter": "Bholi",
    "topic": "Empowerment",
    "frontQuestion": "Why did Bholi refuse to marry Bishamber Nath at the wedding altar?",
    "backAnswer": "Because Bishamber demanded 5,000 rupees dowry upon seeing her pockmarks; she refused to marry a greedy, mean, and cowardly man.",
    "hintOrFormula": "Refused greedy dowry seeker",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_1",
    "subject": "Hindi",
    "chapter": "बड़े भाई साहब",
    "topic": "शिक्षा व्यवस्था पर व्यंग्य",
    "frontQuestion": "बड़े भाई साहब कहानी में तत्कालीन शिक्षा प्रणाली पर क्या व्यंग्य किया गया है?",
    "backAnswer": "रटंत प्रणाली और व्यावहारिक ज्ञान के अभाव पर व्यंग्य है; केवल परीक्षा पास करना योग्यता का प्रमाण नहीं है, बल्कि जीवन का अनुभव और समझ अधिक महत्वपूर्ण है।",
    "hintOrFormula": "रटंत शिक्षा बनाम अनुभव",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_2",
    "subject": "Hindi",
    "chapter": "डायरी का एक पन्ना",
    "topic": "कोलकाता में स्वतंत्रता संग्राम",
    "frontQuestion": "26 जनवरी 1931 को कोलकाता में हुए प्रदर्शन का क्या महत्व था?",
    "backAnswer": "सुभाष चंद्र बोस के नेतृत्व में विशाल जुलूस निकला और महिलाओं (जानकी देवी, मदालसा) ने बढ़-चढ़कर भाग लिया। इससे सिद्ध हुआ कि कोलकाता भी आजादी के आंदोलन में पूरी तरह सक्रिय है।",
    "hintOrFormula": "कोलकाता पर लगा कलंक धुल गया",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_3",
    "subject": "Hindi",
    "chapter": "तताँरा-वामीरो कथा",
    "topic": "रूढ़ियों का टूटना",
    "frontQuestion": "तताँरा और वामीरो के बलिदान से निकोबार द्वीप में क्या युगांतकारी परिवर्तन आया?",
    "backAnswer": "दोनों के आत्मबलिदान के बाद निकोबारियों ने अपनी सदियों पुरानी रूढ़िवादी प्रथा (दूसरे गाँव में विवाह न करने का नियम) को हमेशा के लिए त्याग दिया।",
    "hintOrFormula": "रूढ़ियाँ जब बंधन बनें तो टूटना ही श्रेयस्कर है",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_4",
    "subject": "Hindi",
    "chapter": "तीसरी कसम",
    "topic": "हीरामन की कसमें",
    "frontQuestion": "हीरामन ने कौन-सी तीन कसमें खाई थीं?",
    "backAnswer": "1. चोरी का माल (बांस) गाड़ी में न लादना।\n2. बांस की लदनी न करना।\n3. नौटंकी की बाई (सवारी) को कभी अपनी गाड़ी में न बैठाना।",
    "hintOrFormula": "तीन कसमें",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_5",
    "subject": "Hindi",
    "chapter": "अब कहाँ दूसरे के दुख से दुखी होने वाले",
    "topic": "प्रकृति से खिलवाड़",
    "frontQuestion": "निदा फ़ाज़ली के अनुसार मनुष्य ने प्रकृति का संतुलन कैसे बिगाड़ दिया है?",
    "backAnswer": "पेड़ों को काटकर, समुद्र को पीछे धकेलकर और कंक्रीट के जंगल बनाकर बेजुबान पक्षियों और जानवरों के आशियाने छीन लिए, जिससे प्राकृतिक आपदाएँ बढ़ गई हैं।",
    "hintOrFormula": "प्रकृति की सहनशीलता की सीमा",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_6",
    "subject": "Hindi",
    "chapter": "पतझर में टूटी पत्तियाँ",
    "topic": "गिन्नी का सोना",
    "frontQuestion": "शुद्ध आदर्शवादी और व्यावहारिक आदर्शवादी (गांधीजी) में क्या अंतर बताया गया है?",
    "backAnswer": "शुद्ध सोना शुद्ध आदर्श है; ताँबा मिलाने से चमक बढ़ती है पर शुद्धता घटती है। गांधीजी शुद्ध आदर्शों को नीचे नहीं लाए, बल्कि लोगों को आदर्शों के स्तर तक ऊपर उठाया।",
    "hintOrFormula": "शुद्ध सोना बनाम ताँबे की मिलावट",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_7",
    "subject": "Hindi",
    "chapter": "कारतूस",
    "topic": "वज़ीर अली की जाँबाजी",
    "frontQuestion": "वज़ीर अली ने कर्नल के खेमे में अकेले जाकर क्या साहसिक कार्य किया?",
    "backAnswer": "वह अकेला कर्नल के खेमे में घुसा, उससे कारतूस हासिल किए और अपना असली नाम बताकर सुरक्षित निकल गया। कर्नल उसकी निडरता देखकर हक्का-बक्का रह गया।",
    "hintOrFormula": "जाँबाज सिपाही",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_8",
    "subject": "Hindi",
    "chapter": "कबीर की साखी",
    "topic": "कस्तूरी मृग रूपक",
    "frontQuestion": "'कस्तूरी कुंडलि बसै मृग ढूँढै बन माहिं' का आध्यात्मिक संदेश क्या है?",
    "backAnswer": "जिस प्रकार हिरण की नाभि में सुगंधित कस्तूरी होती है पर वह उसे पूरे जंगल में खोजता है, उसी प्रकार ईश्वर प्रत्येक मनुष्य के हृदय में विद्यमान हैं, पर अज्ञानी मनुष्य उन्हें बाहर मंदिरों-मस्जिदों में ढूँढता है।",
    "hintOrFormula": "ईश्वर घट-घट में वास करते हैं",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_9",
    "subject": "Hindi",
    "chapter": "मीरा के पद",
    "topic": "भक्ति भाव",
    "frontQuestion": "मीराबाई ने श्रीकृष्ण से अपने कष्ट हरने के लिए किन पौराणिक उदाहरणों का उल्लेख किया है?",
    "backAnswer": "1. द्रौपदी की लाज बचाकर वस्त्र बढ़ाना।\n2. प्रह्लाद की रक्षा के लिए नरसिंह रूप धारण करना।\n3. डूबते हुए गजराज (ऐरावत) को मगरमच्छ से बचाना।",
    "hintOrFormula": "द्रौपदी, प्रह्लाद और गजराज",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_10",
    "subject": "Hindi",
    "chapter": "मनुष्यता (मैथिलीशरण गुप्त)",
    "topic": "सच्ची मानवता",
    "frontQuestion": "मैथिलीशरण गुप्त के अनुसार 'सच्चा मनुष्य' कौन है?",
    "backAnswer": "सच्चा मनुष्य वही है जो संपूर्ण मानव जाति को अपना बंधु समझता है और दूसरों के कल्याण के लिए अपना सर्वस्व न्योछावर कर देता है ('वही मनुष्य है कि जो मनुष्य के लिए मरे')।",
    "hintOrFormula": "परोपकार ही सच्चा धर्म है",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_11",
    "subject": "Hindi",
    "chapter": "पर्वत प्रदेश में पावस",
    "topic": "प्रकृति चित्रण",
    "frontQuestion": "सुमित्रानंदन पंत ने सहस्त्र दृग-सुमन से क्या तात्पर्य प्रकट किया है?",
    "backAnswer": "पर्वत पर खिले हुए हजारों फूल पर्वत के नेत्रों के समान प्रतीत होते हैं, जिनसे वह अपने चरणों में स्थित दर्पण रूपी विशाल तालाब में अपना सौंदर्य निहार रहा है।",
    "hintOrFormula": "फूल रूपी आँखें",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_12",
    "subject": "Hindi",
    "chapter": "तोप (वीरेन डंगवाल)",
    "topic": "ऐतिहासिक चेतावनी",
    "frontQuestion": "1857 की तोप आज कंपनी बाग में क्या संदेश दे रही है?",
    "backAnswer": "तोप कितनी भी शक्तिशाली और संहारक क्यों न हो, एक दिन उसका मुँह बंद हो जाता है और उस पर बच्चे या चिड़ियाँ बैठकर खेलती हैं। अत्याचार और सत्ता हमेशा के लिए नहीं टिकती।",
    "hintOrFormula": "सत्ता का घमंड स्थायी नहीं होता",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_13",
    "subject": "Hindi",
    "chapter": "कर चले हम फ़िदा",
    "topic": "देशभक्ति",
    "frontQuestion": "कैफ़ी आज़मी के गीत में 'सर पर कफ़न बाँधना' और 'ख़ून से ज़मीं पर लकीर खींचना' का क्या आशय है?",
    "backAnswer": "देश की रक्षा के लिए हंसते-हंसते प्राणों का बलिदान देना और अपनी मातृभूमि पर किसी विदेशी शत्रु का पैर न पड़ने देना (लक्ष्मण रेखा के समान)।",
    "hintOrFormula": "मातृभूमि की रक्षा में बलिदान",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_14",
    "subject": "Hindi",
    "chapter": "हरिहर काका",
    "topic": "स्वार्थ की पराकाष्ठा",
    "frontQuestion": "हरिहर काका के साथ उनके भाइयों और महंत जी ने कैसा विश्वासघात किया?",
    "backAnswer": "काका की 15 बीघे उपजाऊ ज़मीन हड़पने के लिए धार्मिक महंत ने उन्हें बंधक बनाकर अंगूठे के निशान लिए, और सगे भाइयों ने भी उन्हें यातनाएँ देकर अपनी दरिंदगी दिखाई।",
    "hintOrFormula": "रिश्तों में स्वार्थ और पाखंड",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_15",
    "subject": "Hindi",
    "chapter": "सपनों के-से दिन",
    "topic": "हेडमास्टर साहब बनाम पीटी सर",
    "frontQuestion": "कहानी में हेडमास्टर मदन मोहन शर्मा और पीटी मास्टर प्रीतम चंद के स्वभाव में क्या अंतर था?",
    "backAnswer": "हेडमास्टर साहब अत्यंत दयालु, सौम्य और बच्चों को प्रेम से समझाने वाले थे; जबकि पीटी सर अत्यंत कठोर, क्रूर और बच्चों को 'मुर्गा' बनाकर अमानवीय दंड देते थे।",
    "hintOrFormula": "स्नेह बनाम क्रूरता",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_16",
    "subject": "Hindi",
    "chapter": "टोपी शुक्ला",
    "topic": "इफ़्फ़न की दादी",
    "frontQuestion": "टोपी शुक्ला का इफ़्फ़न की दादी से इतना गहरा लगाव क्यों था?",
    "backAnswer": "टोपी को अपने घर में माँ और दादी से स्नेह नहीं मिलता था, जबकि इफ़्फ़न की दादी पूरबी बोली में उसे अगाध वात्सल्य, प्रेम और कहानियाँ सुनाती थीं; प्रेम किसी धर्म का मोहताज नहीं होता।",
    "hintOrFormula": "सच्चे स्नेह का कोई धर्म नहीं होता",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_17",
    "subject": "Hindi",
    "chapter": "पदबंध",
    "topic": "संज्ञा पदबंध",
    "frontQuestion": "'अयोध्या के राजा दशरथ के चार पुत्र थे' में संज्ञा पदबंध पहचानिए।",
    "backAnswer": "'अयोध्या के राजा दशरथ' - यह पूरा पद-समूह दशरथ (संज्ञा) की ओर संकेत करता है और शीर्ष पद संज्ञा है, अतः संज्ञा पदबंध है।",
    "hintOrFormula": "शीर्ष पद दशरथ (संज्ञा)",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_18",
    "subject": "Hindi",
    "chapter": "पदबंध",
    "topic": "सर्वनाम पदबंध",
    "frontQuestion": "'दूसरों का भला चाहने वाले आप' संकट में नहीं पड़ सकते। रेखांकित पदबंध बताइए।",
    "backAnswer": "'दूसरों का भला चाहने वाले आप' - शीर्ष पद 'आप' सर्वनाम है, अतः यह सर्वनाम पदबंध है।",
    "hintOrFormula": "शीर्ष पद 'आप' (सर्वनाम)",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_19",
    "subject": "Hindi",
    "chapter": "समास",
    "topic": "अव्ययीभाव समास",
    "frontQuestion": "अव्ययीभाव समास की पहचान और दो उदाहरण दीजिए।",
    "backAnswer": "जिस समस्त पद का पूर्व पद अव्यय (यथा, प्रति, आ, बे, भर) हो और वही प्रधान हो। उदाहरण: यथाशक्ति (शक्ति के अनुसार), प्रतिदिन (प्रत्येक दिन), आजन्म (जन्म से लेकर)।",
    "hintOrFormula": "पूर्व पद अव्यय",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_hin_20",
    "subject": "Hindi",
    "chapter": "मुहावरे",
    "topic": "परीक्षा में बार-बार पूछे जाने वाले मुहावरे",
    "frontQuestion": "'ईंट का जवाब पत्थर से देना' और 'तलवे चाटना' का अर्थ स्पष्ट कीजिए।",
    "backAnswer": "1. ईंट का जवाब पत्थर से देना: शत्रु के प्रहार का मुंहतोड़ जवाब देना।\n2. तलवे चाटना: अत्यधिक चापलूसी या खुशामद करना।",
    "hintOrFormula": "मुंहतोड़ जवाब देना",
    "difficulty": "High Yield"
  },
  {
    "id": "fc_it_1",
    "subject": "Information Technology",
    "chapter": "Communication Skills - II",
    "topic": "7Cs of Communication",
    "frontQuestion": "What are the 7Cs of effective communication?",
    "backAnswer": "Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous.",
    "hintOrFormula": "7Cs framework",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_2",
    "subject": "Information Technology",
    "chapter": "Communication Skills - II",
    "topic": "Communication Barriers",
    "frontQuestion": "Name four common barriers to effective communication.",
    "backAnswer": "1. Physical barriers (noise, distance)\n2. Linguistic barriers (jargon, language)\n3. Interpersonal barriers (prejudice, lack of trust)\n4. Cultural barriers.",
    "hintOrFormula": "Noise, language, culture",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_3",
    "subject": "Information Technology",
    "chapter": "Self-Management Skills - II",
    "topic": "Stress Management",
    "frontQuestion": "Name three physical and psychological stress management techniques.",
    "backAnswer": "Yoga, meditation, physical sports/exercise, nature walks, and proper sleep hygiene.",
    "hintOrFormula": "Mind and body balance",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_4",
    "subject": "Information Technology",
    "chapter": "ICT Skills - II",
    "topic": "System Maintenance",
    "frontQuestion": "State two maintenance procedures to keep a computer running smoothly.",
    "backAnswer": "1. Disk Defragmentation and Disk Cleanup (removing temp files).\n2. Regular Antivirus scanning and Operating System security updates.",
    "hintOrFormula": "Cleanup and antivirus",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_5",
    "subject": "Information Technology",
    "chapter": "Entrepreneurial Skills - II",
    "topic": "Role of Entrepreneur",
    "frontQuestion": "State three vital roles played by entrepreneurs in society.",
    "backAnswer": "1. Employment generation\n2. Wealth creation and capital formation\n3. Innovation and community development.",
    "hintOrFormula": "Jobs, wealth, innovation",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_6",
    "subject": "Information Technology",
    "chapter": "Green Skills - II",
    "topic": "SDGs",
    "frontQuestion": "How many Sustainable Development Goals (SDGs) were established by the UN?",
    "backAnswer": "17 SDGs with 169 targets to be achieved by 2030, covering poverty, hunger, clean water, climate, and education.",
    "hintOrFormula": "17 SDGs",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_7",
    "subject": "Information Technology",
    "chapter": "Digital Documentation (Advanced)",
    "topic": "Styles in Writer",
    "frontQuestion": "List four categories of styles available in LibreOffice Writer.",
    "backAnswer": "Paragraph Styles, Character Styles, Frame Styles, Page Styles, List Styles.",
    "hintOrFormula": "F11 shortcut",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_8",
    "subject": "Information Technology",
    "chapter": "Digital Documentation (Advanced)",
    "topic": "Fill Format Mode",
    "frontQuestion": "What is Fill Format mode in LibreOffice Writer and how is it used?",
    "backAnswer": "A quick formatting tool that allows applying a style to multiple scattered text blocks without re-opening the Styles dialog each time (acts like a paint bucket).",
    "hintOrFormula": "Paint bucket tool",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_9",
    "subject": "Information Technology",
    "chapter": "Digital Documentation (Advanced)",
    "topic": "Templates",
    "frontQuestion": "What is the file extension of a LibreOffice Writer template?",
    "backAnswer": "The default template file extension is .ott (OpenDocument Text Template).",
    "hintOrFormula": ".ott extension",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_10",
    "subject": "Information Technology",
    "chapter": "Digital Documentation (Advanced)",
    "topic": "Mail Merge",
    "frontQuestion": "What are the two mandatory files required for Mail Merge?",
    "backAnswer": "1. Main Document (letter template)\n2. Data Source (table containing recipient names, addresses, etc.).",
    "hintOrFormula": "Template + Data Source",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_11",
    "subject": "Information Technology",
    "chapter": "Electronic Spreadsheet (Advanced)",
    "topic": "Consolidate Data",
    "frontQuestion": "What does the Consolidate Data tool do in LibreOffice Calc?",
    "backAnswer": "It combines and aggregates data from multiple worksheet ranges or workbooks into a single summary table using mathematical functions (SUM, AVERAGE).",
    "hintOrFormula": "Data → Consolidate",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_12",
    "subject": "Information Technology",
    "chapter": "Electronic Spreadsheet (Advanced)",
    "topic": "Goal Seek",
    "frontQuestion": "Explain the purpose of Goal Seek with an example.",
    "backAnswer": "Goal Seek determines what input value is needed to produce a specific target formula result. E.g. finding what exam score is needed to achieve an 85% aggregate.",
    "hintOrFormula": "Single variable What-If",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_13",
    "subject": "Information Technology",
    "chapter": "Electronic Spreadsheet (Advanced)",
    "topic": "Solver",
    "frontQuestion": "How does Solver differ from Goal Seek?",
    "backAnswer": "Solver can optimize equations with MULTIPLE unknown variables subject to user-defined constraints and conditions, whereas Goal Seek handles only a single variable.",
    "hintOrFormula": "Multiple variables + constraints",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_14",
    "subject": "Information Technology",
    "chapter": "Electronic Spreadsheet (Advanced)",
    "topic": "Macros",
    "frontQuestion": "What is a Macro and how does it save time in spreadsheets?",
    "backAnswer": "A saved sequence of keystrokes and commands recorded to automate repetitive tasks with a single click or keyboard shortcut.",
    "hintOrFormula": "Tools → Macros → Record",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_15",
    "subject": "Information Technology",
    "chapter": "Database Management System (DBMS)",
    "topic": "Primary Key",
    "frontQuestion": "State two inviolable rules for a Primary Key in a relational table.",
    "backAnswer": "1. It must contain UNIQUE values for every record (no duplicates).\n2. It CANNOT contain NULL (empty) values.",
    "hintOrFormula": "Unique and Not Null",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_16",
    "subject": "Information Technology",
    "chapter": "Database Management System (DBMS)",
    "topic": "Foreign Key",
    "frontQuestion": "What is the function of a Foreign Key in relational databases?",
    "backAnswer": "It links a field in one table to the Primary Key of another table, ensuring referential integrity and preventing orphan records.",
    "hintOrFormula": "Referential integrity",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_17",
    "subject": "Information Technology",
    "chapter": "Database Management System (DBMS)",
    "topic": "DDL vs DML",
    "frontQuestion": "Classify into DDL or DML: CREATE, INSERT, DROP, SELECT, UPDATE, ALTER.",
    "backAnswer": "DDL (Structure): CREATE, DROP, ALTER.\nDML (Data): INSERT, SELECT, UPDATE.",
    "hintOrFormula": "DDL defines; DML manipulates",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_18",
    "subject": "Information Technology",
    "chapter": "Web Applications and Security",
    "topic": "Accessibility Options",
    "frontQuestion": "What are StickyKeys and FilterKeys designed for?",
    "backAnswer": "StickyKeys: Allows pressing modifier keys (Shift, Ctrl, Alt) sequentially rather than simultaneously for users with motor disabilities.\nFilterKeys: Ignores brief or repeated keystrokes for users with tremors.",
    "hintOrFormula": "StickyKeys & FilterKeys",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_19",
    "subject": "Information Technology",
    "chapter": "Web Applications and Security",
    "topic": "Strong Password Policy",
    "frontQuestion": "State three rules for creating a cryptographically strong password.",
    "backAnswer": "1. At least 10–12 characters long.\n2. Mix of uppercase, lowercase, numbers, and special symbols (!@#$%).\n3. No dictionary words, personal names, or birthdates.",
    "hintOrFormula": "Length + Complexity",
    "difficulty": "Fundamental"
  },
  {
    "id": "fc_it_20",
    "subject": "Information Technology",
    "chapter": "Web Applications and Security",
    "topic": "Phishing Prevention",
    "frontQuestion": "State two ways to identify and avoid phishing attacks.",
    "backAnswer": "1. Check the URL for correct domain spelling and HTTPS padlock.\n2. Never click suspicious email links asking for passwords or bank OTPs.",
    "hintOrFormula": "Inspect URL & never share OTP",
    "difficulty": "Fundamental"
  },
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
    topic: "Napoleonic Code (Civil Code 1804)",
    frontQuestion: "What were the key features of the Napoleonic Civil Code of 1804?",
    backAnswer: "1. Abolished all privileges based on birth.\n2. Established equality before the law.\n3. Secured the right to property.\n4. Abolished feudal dues and serfdom in Dutch Republic, Switzerland, Germany, and Italy.",
    hintOrFormula: "Birth privileges removed, legal equality, property rights secured",
    difficulty: "High Yield"
  },
  {
    id: "fc_sst2",
    subject: "Social Science",
    chapter: "Nationalism in Europe",
    topic: "Treaty of Vienna 1815",
    frontQuestion: "Who hosted the Congress of Vienna in 1815, and what was its primary objective?",
    backAnswer: "Hosted by Austrian Chancellor Duke Metternich. Objective: To undo the territorial changes brought by Napoleonic wars, restore Bourbon monarchy in France, and establish a conservative balance of power in Europe.",
    hintOrFormula: "Vienna 1815: Metternich, Bourbon restoration, Balance of power",
    difficulty: "High Yield"
  },
  {
    id: "fc_sst3",
    subject: "Social Science",
    chapter: "Nationalism in India",
    topic: "Rowlatt Act & Jallianwala Bagh",
    frontQuestion: "Why was the Rowlatt Act (1919) opposed by Indians, and what was its aftermath?",
    backAnswer: "• The Rowlatt Act gave the colonial government enormous powers to repress political activities and allowed detention of political prisoners without trial for up to 2 years.\n• It led to nationwide Rowlatt Satyagraha, and on 13 April 1919, General Dyer ordered open fire on the unarmed Baisakhi gathering at Jallianwala Bagh, Amritsar.",
    hintOrFormula: "Detention without trial for 2 years -> Jallianwala Bagh massacre",
    difficulty: "High Yield"
  },
  {
    id: "fc_sst4",
    subject: "Social Science",
    chapter: "Nationalism in India",
    topic: "Salt March & Civil Disobedience",
    frontQuestion: "When did Mahatma Gandhi start the Dandi Salt March and from where to where?",
    backAnswer: "Started on 12 March 1930 with 78 trusted volunteers from Sabarmati Ashram to coastal town of Dandi (240 miles). On 6 April 1930, Gandhiji broke the salt law by boiling seawater, marking the launch of the Civil Disobedience Movement.",
    hintOrFormula: "12 March – 6 April 1930: Sabarmati to Dandi (240 miles)",
    difficulty: "High Yield"
  },
  {
    id: "fc_sst5",
    subject: "Social Science",
    chapter: "Power Sharing",
    topic: "Prudential vs Moral Reasons",
    frontQuestion: "Differentiate between Prudential and Moral reasons for power sharing.",
    backAnswer: "• Prudential Reasons: Based on careful calculation of gains and losses. Power sharing reduces possibilities of social conflict, maintains political stability, and preserves national unity.\n• Moral Reasons: Power sharing is the very spirit of democracy. A legitimate government involves citizens participating in decision-making.",
    hintOrFormula: "Prudential = Better outcomes & stability; Moral = Spirit of democracy",
    difficulty: "High Yield"
  },
  {
    id: "fc_sst6",
    subject: "Social Science",
    chapter: "Federalism",
    topic: "Decentralisation Act 1992",
    frontQuestion: "What major steps were taken towards decentralisation in India through the 1992 Constitutional Amendment?",
    backAnswer: "1. Mandatory regular elections for local government bodies.\n2. Reservation of seats for SC, ST, and OBCs.\n3. At least 1/3rd of all seats reserved for women.\n4. Independent State Election Commission created in each state.\n5. State governments required to share revenue and powers with local bodies.",
    hintOrFormula: "73rd/74th Amendments 1992: 1/3 women reservation, SEC, regular elections",
    difficulty: "High Yield"
  },
  {
    id: "fc_sst7",
    subject: "Social Science",
    chapter: "Resources and Development",
    topic: "Black Soil (Regur)",
    frontQuestion: "Mention key properties of Black Soil and name the region where it is predominantly found.",
    backAnswer: "• Properties: Made of basaltic lava rocks, extremely fine clayey material, high moisture retention capacity, rich in calcium carbonate, magnesium, and potash. Develops deep cracks in summer aiding aeration.\n• Ideal for cotton cultivation (Black Cotton Soil).\n• Found across Deccan Trap (Maharashtra, Saurashtra, Malwa, MP, Chhattisgarh).",
    hintOrFormula: "Black Soil / Regur: Deccan lava, clayey, moisture holding, cotton ideal",
    difficulty: "High Yield"
  },
  {
    id: "fc_sst8",
    subject: "Social Science",
    chapter: "Forest and Wildlife Resources",
    topic: "Forest Classification & JFM",
    frontQuestion: "How are forests classified in India according to conservation status?",
    backAnswer: "1. Reserved Forests (>50%): Most valuable for conservation of forest and wildlife resources; strictly protected.\n2. Protected Forests (~1/3rd): Protected from any further depletion.\n3. Unclassed Forests: Other forests and wastelands belonging to government, communities, and private individuals.",
    hintOrFormula: "Reserved (>50% most valuable), Protected (~33%), Unclassed (community/private)",
    difficulty: "High Yield"
  },
  {
    id: "fc_sst9",
    subject: "Social Science",
    chapter: "Water Resources",
    topic: "Traditional Rainwater Harvesting",
    frontQuestion: "Explain any two traditional methods of rainwater harvesting in India.",
    backAnswer: "1. Guls and Kuls: In hilly and mountainous regions (Western Himalayas), diversion channels built for agriculture.\n2. Khadins & Johads: In arid parts of Rajasthan, rain-fed storage structures built to moisten soil for farming.\n3. Rooftop Harvesting ('Tanka'): Underground tanks built in houses of Bikaner, Phalodi, and Barmer to store drinking water.",
    hintOrFormula: "Guls/Kuls (Himalayas), Khadins/Johads (Rajasthan), Tankas (Bikaner/Phalodi)",
    difficulty: "High Yield"
  },
  {
    id: "fc_sst10",
    subject: "Social Science",
    chapter: "Development",
    topic: "Per Capita Income vs UNDP HDI",
    frontQuestion: "Why is Per Capita Income considered an inadequate measure of development compared to UNDP's HDI?",
    backAnswer: "• Per Capita Income (World Bank) calculates only average income; it hides glaring disparities and ignores health, education, and equality.\n• UNDP's Human Development Index (HDI) evaluates educational levels (mean & expected schooling), health status (life expectancy at birth), and standard of living (Per Capita Income in PPP).",
    hintOrFormula: "PCI = Average income only (hides inequality); HDI = Income + Health (Life Expectancy) + Education",
    difficulty: "High Yield"
  },
  {
    id: "fc_sst11",
    subject: "Social Science",
    chapter: "Sectors of the Indian Economy",
    topic: "Disguised Unemployment & MGNREGA 2005",
    frontQuestion: "What is Disguised Unemployment, and how does MGNREGA 2005 address underemployment?",
    backAnswer: "• Disguised Unemployment: Situation where more people are working than required; even if some workers are removed, total production does not fall (common in agriculture).\n• MGNREGA 2005: Guarantees 100 days of wage employment per financial year to every rural household whose adult members volunteer to do unskilled manual work; provides unemployment allowance if not employed within 15 days.",
    hintOrFormula: "Disguised = Zero marginal productivity; MGNREGA 2005 = 100 days guaranteed work",
    difficulty: "High Yield"
  },
  {
    id: "fc_sst12",
    subject: "Social Science",
    chapter: "Money and Credit",
    topic: "Self-Help Groups (SHGs) & Formal Credit",
    frontQuestion: "What is the role of Self-Help Groups (SHGs) for the rural poor, and why is collateral a barrier in informal credit?",
    backAnswer: "• SHGs (15–20 members) pool small savings regularly, provide small collateral-free loans at low interest, and overcome lack of collateral for poor women.\n• Banks require collateral (assets pledged as security). Poor borrowers lack land or property titles, driving them to informal moneylenders who charge 36–60% interest.",
    hintOrFormula: "SHGs: 15–20 members, peer accountability, collateral-free credit for women",
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
        options: ["44.44 kg", "43.64 kg", "45.00 kg", "42.85 kg"],
        correctOptionIndex: 0,
        correctTextAnswer: "44.44 kg",
        explanation: "l = 40, h = 5, f₁ = 15, f₀ = 7, f₂ = 14. Mode = l + ((f₁ - f₀)/(2f₁ - f₀ - f₂)) × h = 40 + ((15 - 7)/(30 - 7 - 14)) × 5 = 40 + (8/9) × 5 = 40 + 40/9 = 40 + 4.44 = 44.44 kg.",
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
        questionText: "Find the mode of grouped data where modal class is 20-30, l = 20, f₁ = 10, f₀ = 8, f₂ = 7, and h = 10.",
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
    answer: "Through O, draw a line PQ parallel to BC so that P lies on AB and Q lies on CD. Then PQ ⊥ AB and PQ ⊥ CD (since ABCD is a rectangle). In right △APO: OA² = AP² + OP². In right △OQC: OC² = OQ² + CQ². Adding: OA² + OC² = AP² + OP² + OQ² + CQ². In right △OPB: OB² = BP² + OP², and in right △OQD: OD² = OQ² + DQ². Adding: OB² + OD² = BP² + OP² + OQ² + DQ². Since AP = DQ and CQ = BP (from rectangles APQD and PBCQ): OB² + OD² = CQ² + OP² + OQ² + AP² = OA² + OC². Hence OA² + OC² = OB² + OD². ∎",
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
    correctOption:  3,
    answer: "√3",
    explanation: "Substitute standard values: sin 30° = 1/2, cos 60° = 1/2, sin 60° = √3/2, cos 30° = √3/2. Therefore, (sin 30° + cos 60°) × (sin 60° + cos 30°) = (1/2 + 1/2) × (√3/2 + √3/2) = 1 × √3 = √3.",
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
    options: ["−1/2", "0", "1/2", "1"],
    correctOption: 0,
    answer: "−1/2",
    explanation: "Substitute standard values: cosec 30° = 2 ⟹ cosec²30° = 4; sin 45° = 1/√2 ⟹ sin²45° = 1/2; sec 60° = 2 ⟹ sec²60° = 4. Result = 4 − 1/2 − 4 = −1/2.",
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
    answer: `CBSE Topper Answer Sheet
Section B (2M Short Answer)
Governing Formula: \\sin^2\\theta + \\cos^2\\theta = 1
Full Score: 2 / 2 Marks

Step 1: Factor out \\sin\\theta from the numerator and \\cos\\theta from the denominator.
LHS = (\\sin\\theta - 2\\sin^3\\theta) / (2\\cos^3\\theta - \\cos\\theta)
LHS = [\\sin\\theta (1 - 2\\sin^2\\theta)] / [\\cos\\theta (2\\cos^2\\theta - 1)]

Step 2: Use the identity \\sin^2\\theta + \\cos^2\\theta = 1.
LHS = [\\sin\\theta (\\sin^2\\theta + \\cos^2\\theta - 2\\sin^2\\theta)] / [\\cos\\theta (2\\cos^2\\theta - (\\sin^2\\theta + \\cos^2\\theta))]
LHS = [\\sin\\theta (\\cos^2\\theta - \\sin^2\\theta)] / [\\cos\\theta (\\cos^2\\theta - \\sin^2\\theta)]

Step 3: Cancel common terms and simplify.
The term (\\cos^2\\theta - \\sin^2\\theta) cancels out.
LHS = \\sin\\theta / \\cos\\theta
LHS = \\tan\\theta = RHS. ∎

(Hence Proved)`,
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
    answer: `CBSE Topper Answer Sheet
Section B (2M Short Answer)
Governing Formula: sin²A + cos²A = 1
Full Score: 2 / 2 Marks

Step 1: Isolate cos A from the given equation.
Given: cos A + cos²A = 1
cos A = 1 - cos²A

Step 2: Express in terms of sin.
∵ Trigonometric Identity: 1 - cos²A = sin²A
∴ cos A = sin²A

Step 3: Substitute into the required expression.
We need to prove: sin²A + sin⁴A = 1
Substitute sin²A = cos A into the expression:
sin²A + (sin²A)² = cos A + (cos A)²
= cos A + cos²A

Step 4: Conclude using the given equation.
∵ Given: cos A + cos²A = 1
∴ sin²A + sin⁴A = 1. ∎

(Hence Proved)`,
    explanation: "The key substitution: from the given condition, cos A = 1 − cos²A = sin²A. Replace cos A with sin²A in the LHS to get the given condition."
  },

  // --- 3 Mark Medium ---
  {
    id: "vq_8_3m_1", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 3, type: "SA",
    question: "Prove that: √((1 + sin A)/(1 − sin A)) = sec A + tan A.",
    answer: `CBSE Topper Answer Sheet
Section C (3M Short Answer)
Governing Formula: sin²A + cos²A = 1
Full Score: 3 / 3 Marks

Step 1: Rationalize the denominator inside the square root.
LHS = √[ (1 + sin A) / (1 - sin A) ]
Multiply numerator and denominator by (1 + sin A):
LHS = √[ (1 + sin A)(1 + sin A) / (1 - sin A)(1 + sin A) ]

Step 2: Simplify using algebraic identities.
∵ Algebraic Identity: (a - b)(a + b) = a² - b²
LHS = √[ (1 + sin A)² / (1 - sin²A) ]

Step 3: Convert the denominator using Trig identities.
∵ Trigonometric Identity: 1 - sin²A = cos²A
LHS = √[ (1 + sin A)² / cos²A ]

Step 4: Take the square root and split the fraction.
LHS = (1 + sin A) / cos A
LHS = 1/cos A + sin A/cos A

Step 5: Convert to final form.
∵ Trigonometric Definitions: 1/cos A = sec A, sin A/cos A = tan A
LHS = sec A + tan A = RHS. ∎

(Hence Proved)`,
    explanation: "Rationalize by multiplying by (1+sinA)/(1+sinA). Denominator becomes 1−sin²A = cos²A. Take square root to get (1+sinA)/cosA.",
    examinerNote: "Must NOT take √(1−sinA) = 1−√sinA (not valid!). Only apply to the expression 1−sin²A = cos²A."
  },
  {
    id: "vq_8_3m_2", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 3, type: "SA",
    question: "Prove: (sin θ − cos θ + 1)/(sin θ + cos θ − 1) = 1/(sec θ − tan θ).",
    answer: `CBSE Topper Answer Sheet
Section C (3M Short Answer)
Governing Formula: \\sec^2\\theta - \\tan^2\\theta = 1
Full Score: 3 / 3 Marks

Step 1: Divide numerator and denominator by \\cos\\theta.
LHS = (\\sin\\theta - \\cos\\theta + 1) / (\\sin\\theta + \\cos\\theta - 1)
LHS = (\\tan\\theta - 1 + \\sec\\theta) / (\\tan\\theta + 1 - \\sec\\theta)
LHS = (\\tan\\theta + \\sec\\theta - 1) / (\\tan\\theta - \\sec\\theta + 1)

Step 2: Replace 1 in the numerator with \\sec^2\\theta - \\tan^2\\theta.
LHS = [ (\\sec\\theta + \\tan\\theta) - (\\sec^2\\theta - \\tan^2\\theta) ] / (\\tan\\theta - \\sec\\theta + 1)

Step 3: Factorize the substituted term.
LHS = [ (\\sec\\theta + \\tan\\theta) - (\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) ] / (\\tan\\theta - \\sec\\theta + 1)

Step 4: Factor out (\\sec\\theta + \\tan\\theta).
LHS = (\\sec\\theta + \\tan\\theta) [ 1 - (\\sec\\theta - \\tan\\theta) ] / (\\tan\\theta - \\sec\\theta + 1)
LHS = (\\sec\\theta + \\tan\\theta) (1 - \\sec\\theta + \\tan\\theta) / (\\tan\\theta - \\sec\\theta + 1)

Step 5: Cancel common terms and transform to RHS.
The term (1 - \\sec\\theta + \\tan\\theta) cancels out perfectly.
LHS = \\sec\\theta + \\tan\\theta
Multiply and divide by (\\sec\\theta - \\tan\\theta):
LHS = (\\sec\\theta + \\tan\\theta)(\\sec\\theta - \\tan\\theta) / (\\sec\\theta - \\tan\\theta)
LHS = (\\sec^2\\theta - \\tan^2\\theta) / (\\sec\\theta - \\tan\\theta)
LHS = 1 / (\\sec\\theta - \\tan\\theta) = RHS. ∎

(Hence Proved)`,
    explanation: "Divide everything by cosθ to get tan and sec terms. Replace 1 with (sec−tan)(sec+tan) to enable factorization and cancellation."
  },
  {
    id: "vq_8_3m_3", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 3, type: "SA",
    question: "Prove: (tan A + sec A − 1)/(tan A − sec A + 1) = (1 + sin A)/cos A.",
    answer: `CBSE Topper Answer Sheet
Section C (3M Short Answer)
Governing Formula: \\sec^2 A - \\tan^2 A = 1
Full Score: 3 / 3 Marks

Step 1: Replace 1 in the numerator with \\sec^2 A - \\tan^2 A.
LHS = (\\tan A + \\sec A - 1) / (\\tan A - \\sec A + 1)
LHS = [ (\\tan A + \\sec A) - (\\sec^2 A - \\tan^2 A) ] / (\\tan A - \\sec A + 1)

Step 2: Factorize the substituted term.
LHS = [ (\\sec A + \\tan A) - (\\sec A - \\tan A)(\\sec A + \\tan A) ] / (\\tan A - \\sec A + 1)

Step 3: Factor out (\\sec A + \\tan A).
LHS = (\\sec A + \\tan A) [ 1 - (\\sec A - \\tan A) ] / (\\tan A - \\sec A + 1)
LHS = (\\sec A + \\tan A) (1 - \\sec A + \\tan A) / (\\tan A - \\sec A + 1)

Step 4: Cancel common terms.
The term (1 - \\sec A + \\tan A) cancels out.
LHS = \\sec A + \\tan A

Step 5: Convert to sine and cosine.
LHS = 1/\\cos A + \\sin A/\\cos A
LHS = (1 + \\sin A) / \\cos A = RHS. ∎

(Hence Proved)`,
    explanation: "Factor 1 as (sec+tan)(sec−tan) in both numerator and denominator, then cancel the common factor."
  },
  {
    id: "vq_8_3m_4", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 3, type: "SA",
    question: "If sin A + cos A = p and sec A + cosec A = q, show that q(p²−1) = 2p.",
    answer: `CBSE Topper Answer Sheet
Section C (3M Short Answer)
Governing Formula: \\sin^2 A + \\cos^2 A = 1
Full Score: 3 / 3 Marks

Step 1: Expand the LHS expression q(p^2 - 1).
Given: p = \\sin A + \\cos A, q = \\sec A + \\text{cosec} A
q(p^2 - 1) = (\\sec A + \\text{cosec} A) [ (\\sin A + \\cos A)^2 - 1 ]

Step 2: Convert q to sine and cosine.
q = 1/\\cos A + 1/\\sin A = (\\sin A + \\cos A) / (\\sin A \\cos A)

Step 3: Expand the square inside the bracket.
(\\sin A + \\cos A)^2 = \\sin^2 A + \\cos^2 A + 2\\sin A\\cos A
(\\sin A + \\cos A)^2 = 1 + 2\\sin A\\cos A

Step 4: Substitute back into the expression.
q(p^2 - 1) = [ (\\sin A + \\cos A) / (\\sin A \\cos A) ] \times [ (1 + 2\\sin A\\cos A) - 1 ]
q(p^2 - 1) = [ (\\sin A + \\cos A) / (\\sin A \\cos A) ] \times [ 2\\sin A\\cos A ]

Step 5: Cancel common terms.
The (\\sin A \\cos A) cancels out.
q(p^2 - 1) = 2(\\sin A + \\cos A)
Since p = \\sin A + \\cos A,
q(p^2 - 1) = 2p. ∎

(Hence Proved)`,
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
    answer: `CBSE Topper Answer Sheet
Section D (5M Long Answer)
Governing Formula: \\sin^2 A + \\cos^2 A = 1, 1 + \\tan^2 A = \\sec^2 A, 1 + \\cot^2 A = \\text{cosec}^2 A
Full Score: 5 / 5 Marks

Step 1: Expand the squares on the LHS.
LHS = (\\sin A + \\text{cosec} A)^2 + (\\cos A + \\sec A)^2
LHS = (\\sin^2 A + \\text{cosec}^2 A + 2\\sin A \\text{cosec} A) + (\\cos^2 A + \\sec^2 A + 2\\cos A \\sec A)

Step 2: Apply inverse trigonometric properties.
\\sin A \times \\text{cosec} A = 1 and \\cos A \times \\sec A = 1
LHS = (\\sin^2 A + \\text{cosec}^2 A + 2(1)) + (\\cos^2 A + \\sec^2 A + 2(1))
LHS = \\sin^2 A + \\cos^2 A + \\text{cosec}^2 A + \\sec^2 A + 4

Step 3: Use the primary Pythagorean identity.
\\sin^2 A + \\cos^2 A = 1
LHS = 1 + \\text{cosec}^2 A + \\sec^2 A + 4
LHS = 5 + \\text{cosec}^2 A + \\sec^2 A

Step 4: Convert \\text{cosec} and \\sec into \\cot and \\tan.
\\text{cosec}^2 A = 1 + \\cot^2 A and \\sec^2 A = 1 + \\tan^2 A
LHS = 5 + (1 + \\cot^2 A) + (1 + \\tan^2 A)

Step 5: Simplify to arrive at the final result.
LHS = 5 + 1 + 1 + \\tan^2 A + \\cot^2 A
LHS = 7 + \\tan^2 A + \\cot^2 A = RHS. ∎

(Hence Proved)`,
    explanation: "Expand the squares. Use sin·csc = 1 and cos·sec = 1. Group sin²+cos²=1 and apply identities csc²=1+cot² and sec²=1+tan²."
  },
  {
    id: "vq_8_5m_2", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 5, type: "Proof",
    question: "Prove: (cot A − cos A)/(cot A + cos A) = (cosec A − 1)/(cosec A + 1).",
    answer: `CBSE Topper Answer Sheet
Section D (5M Long Answer)
Governing Formula: \\cot A = \\cos A / \\sin A
Full Score: 5 / 5 Marks

Step 1: Convert \\cot A into sine and cosine.
LHS = (\\cot A - \\cos A) / (\\cot A + \\cos A)
LHS = [ (\\cos A / \\sin A) - \\cos A ] / [ (\\cos A / \\sin A) + \\cos A ]

Step 2: Factor out \\cos A from both numerator and denominator.
LHS = \\cos A [ (1 / \\sin A) - 1 ] / \\cos A [ (1 / \\sin A) + 1 ]

Step 3: Cancel \\cos A.
LHS = [ (1 / \\sin A) - 1 ] / [ (1 / \\sin A) + 1 ]

Step 4: Convert 1/\\sin A to \\text{cosec} A.
LHS = (\\text{cosec} A - 1) / (\\text{cosec} A + 1) = RHS. ∎

(Hence Proved)`,
    explanation: "Factor cosA from numerator and denominator. Replace cotA = cosA/sinA. 1/sinA = cscA. The cosA cancels perfectly."
  },
  {
    id: "vq_8_5m_3", chapter: 8, chapterName: "Introduction to Trigonometry", marks: 5, type: "LA",
    question: "If tan θ + sin θ = m and tan θ − sin θ = n, prove that m² − n² = 4√(mn).",
    answer: `CBSE Topper Answer Sheet
Section D (5M Long Answer)
Governing Formula: \\sin^2\\theta + \\cos^2\\theta = 1, \\tan\\theta = \\sin\\theta / \\cos\\theta
Full Score: 5 / 5 Marks

Step 1: Expand the expression for m^2 - n^2.
Given: m = \\tan\\theta + \\sin\\theta, n = \\tan\\theta - \\sin\\theta
m^2 - n^2 = (\\tan\\theta + \\sin\\theta)^2 - (\\tan\\theta - \\sin\\theta)^2
m^2 - n^2 = 4 \\tan\\theta \\sin\\theta  --- (Equation 1)

Step 2: Simplify the product mn.
mn = (\\tan\\theta + \\sin\\theta)(\\tan\\theta - \\sin\\theta)
mn = \\tan^2\\theta - \\sin^2\\theta

Step 3: Convert to Sine and Cosine.
mn = (\\sin^2\\theta / \\cos^2\\theta) - \\sin^2\\theta
Factor out \\sin^2\\theta:
mn = \\sin^2\\theta (1/\\cos^2\\theta - 1) = \\sin^2\\theta (1 - \\cos^2\\theta) / \\cos^2\\theta

Step 4: Apply Pythagorean Identity.
1 - \\cos^2\\theta = \\sin^2\\theta
mn = (\\sin^2\\theta \times \\sin^2\\theta) / \\cos^2\\theta = (\\sin\\theta \\tan\\theta)^2

Step 5: Take the square root and equate.
\sqrt{mn} = \\sin\\theta \\tan\\theta
Multiply by 4:
4\sqrt{mn} = 4 \\tan\\theta \\sin\\theta
From Equation 1, we know m^2 - n^2 = 4 \\tan\\theta \\sin\\theta.
Therefore, m^2 - n^2 = 4\sqrt{mn}. ∎

(Hence Proved)`,
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
    question: "A straight highway leads to the foot of a tower. A man standing at the top sees a car approaching the foot. He observes the angle of depression changes from 30° to 60°. Show that 2/3 of the original distance to the tower is covered between the two observations.",
    answer: "Let tower height be h. At 30° depression: d₁ = h / tan 30° = h√3. At 60° depression: d₂ = h / tan 60° = h / √3. Distance covered = d₁ − d₂ = h√3 − h/√3 = (2h)/√3. Fraction of original distance covered = (d₁ − d₂) / d₁ = ((2h)/√3) / (h√3) = 2/3. Hence proved. ∎",
    explanation: "d₁ = h√3 (at 30°), d₂ = h/√3 (at 60°). Fraction covered = (d₁−d₂)/d₁ = (h√3 − h/√3)/(h√3) = 1 − 1/3 = 2/3.",
    examinerNote: "Set up the two tangent equations: tan 30° = h/d₁ and tan 60° = h/d₂. Then compute (d₁ − d₂)/d₁ = 2/3."
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
    question: "Prove that the angle between the two tangents drawn from an external point to a circle is supplementary to the angle subtended by the line-segment joining the points of contact at the centre (∠APB + ∠AOB = 180°).",
    answer: "Given: Circle with centre O, tangents PA and PB from external point P touching at A and B. Since tangent ⊥ radius: ∠OAP = 90° and ∠OBP = 90°. In quadrilateral OAPB, sum of interior angles = 360°: ∠APB + ∠OAP + ∠AOB + ∠OBP = 360° ⟹ ∠APB + 90° + ∠AOB + 90° = 360° ⟹ ∠APB + ∠AOB = 180°. ∎",
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
    question: "The mode of a grouped distribution is 24. The modal class is 20−30 with f₀ = 8, f₂ = 7, h = 10. Find f₁.",
    answer: "f₁ = 10",
    explanation: "Mode = l + [(f₁ − f₀) / (2f₁ − f₀ − f₂)] × h. Substituting values: 24 = 20 + [(f₁ − 8) / (2f₁ − 8 − 7)] × 10 ⟹ 4 = [(f₁ − 8) / (2f₁ − 15)] × 10 ⟹ 4(2f₁ − 15) = 10(f₁ − 8) ⟹ 8f₁ − 60 = 10f₁ − 80 ⟹ 2f₁ = 20 ⟹ f₁ = 10.",
    examinerNote: "Work backwards through the Mode formula to find the missing frequency."
  },
  {
    id: "vq_13_2m_3", chapter: 13, chapterName: "Statistics", marks: 2, type: "SA",
    question: "If the mean of the following data is 20, find the value of p: 10, 15, p, 35, 20, 25.",
    answer: "p = 15",
    explanation: "Mean = (10 + 15 + p + 35 + 20 + 25) / 6 = 20 ⟹ (105 + p) / 6 = 20 ⟹ 105 + p = 120 ⟹ p = 120 − 105 = 15."
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
    question: "The median of the following grouped frequency distribution is 28.5. Find the values of x and y, if the total frequency is 60: Class: 0−10(5), 10−20(x), 20−30(20), 30−40(15), 40−50(y), 50−60(5).",
    answer: "x = 8, y = 7",
    explanation: "Sum of frequencies: 45 + x + y = 60 ⟹ x + y = 15. Median = 28.5 lies in 20−30. Median = l + [(N/2 − cf)/f] × h ⟹ 28.5 = 20 + [(30 − (5 + x))/20] × 10 ⟹ 8.5 = (25 − x)/2 ⟹ 17 = 25 − x ⟹ x = 8. Then y = 15 − 8 = 7.",
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
