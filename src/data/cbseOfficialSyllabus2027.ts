// =========================================================================
// CBSE CLASS 10 OFFICIAL SYLLABUS DIRECTORY (2026-2027 CURRICULUM)
// Deep extraction & synthesis from official CBSE Curriculum Documents:
// - Maths_SecP1X_2026-27.pdf (Code 041 Standard & 241 Basic)
// - Science_SecP1_2026-27.pdf & Science_SecP1IX_2026-27_RM.pdf (Code 086)
// - SocialScience_SecP1X_2026-27.pdf (Code 087)
// - English_LL_SecP1_2026-27.pdf (Code 184)
// - Hindi_B_SecP1_2026-27.pdf (Code 085)
// =========================================================================

export interface UnitWeightage {
  unitNo: string;
  unitName: string;
  marks: number;
  chaptersIncluded: string[];
  keyHighlights: string;
}

export interface ChapterWeightage {
  chapterId: string;
  chapterNo?: number | string;
  chapterName: string;
  unitNo: string;
  marks: string;
  marksNumeric: number;
  questionDistribution: string;
  priority: "High Yield" | "Core Yield" | "Foundational" | "Project / Periodic Only";
  keyExamFocus: string;
}

export interface TypologyWeightage {
  category: string;
  description: string;
  marks: number;
  percentage: number;
}

export interface PracticalExperiment {
  expNo: number;
  unit: string;
  title: string;
  apparatus: string;
  procedureSummary: string;
  expectedObservation: string;
  vivaTrap: string;
}

export interface MapWorkItem {
  discipline: "History" | "Geography";
  chapter: string;
  category: string;
  locations: string[];
  examTips: string;
}

export interface ExcludedTopic {
  chapter: string;
  topic: string;
  officialStatus: "Strictly Excluded / Deleted" | "Formative Assessment Only (Portfolio)" | "Periodic Test Only" | "Interdisciplinary Project Only";
  reasonAndCircular: string;
  studentAdvice: string;
}

export interface SubjectSyllabusData {
  subjectId: string;
  subjectName: string;
  code: string;
  theoryMarks: number;
  internalMarks: number;
  totalMarks: number;
  duration: string;
  aimsAndPhilosophy: string[];
  unitWeightages: UnitWeightage[];
  chapterWeightages: ChapterWeightage[];
  typologyDesign: TypologyWeightage[];
  internalAssessment: {
    component: string;
    marks: number;
    description: string;
  }[];
  prescribedBooks: string[];
  criticalExclusions: ExcludedTopic[];
  practicals?: PracticalExperiment[];
  mapWork?: MapWorkItem[];
}

export const CBSE_OFFICIAL_SYLLABUS_2026_27: Record<string, SubjectSyllabusData> = {
  // -------------------------------------------------------------------------
  // 1. MATHEMATICS (CODE 041 STANDARD & 241 BASIC)
  // -------------------------------------------------------------------------
  maths: {
    subjectId: "maths",
    subjectName: "Mathematics",
    code: "041 (Standard) / 241 (Basic)",
    theoryMarks: 80,
    internalMarks: 20,
    totalMarks: 100,
    duration: "3 Hours",
    aimsAndPhilosophy: [
      "Aligned with NEP 2020 & NCF-SE 2023, shifting from rote formula memorization to competency-based mathematical modeling and data analytics.",
      "Integrates Indian Knowledge System (IKS) highlighting ancient and modern Indian mathematical pioneers (Baudhayana, Aryabhata, Brahmagupta, Bhaskara, Ramanujan).",
      "Develops logical precision, spatial visualization, abstract reasoning, and everyday mathematical problem-solving."
    ],
    unitWeightages: [
      {
        unitNo: "Unit I",
        unitName: "NUMBER SYSTEMS",
        marks: 6,
        chaptersIncluded: ["Ch 1: Real Numbers"],
        keyHighlights: "Fundamental Theorem of Arithmetic (prime factor trees, HCF × LCM) and algebraic proofs of irrationality of √2, √3, √5, 3 + 2√5."
      },
      {
        unitNo: "Unit II",
        unitName: "ALGEBRA",
        marks: 20,
        chaptersIncluded: [
          "Ch 2: Polynomials",
          "Ch 3: Pair of Linear Equations in Two Variables",
          "Ch 4: Quadratic Equations",
          "Ch 5: Arithmetic Progressions"
        ],
        keyHighlights: "Zeroes-coefficients relations, elimination & substitution methods, quadratic formula x = (-b ± √D)/2a, nature of roots, AP general term aₙ & sum Sₙ."
      },
      {
        unitNo: "Unit III",
        unitName: "COORDINATE GEOMETRY",
        marks: 6,
        chaptersIncluded: ["Ch 7: Coordinate Geometry"],
        keyHighlights: "Distance formula √[(x₂-x₁)² + (y₂-y₁)²], section formula (internal division only), and midpoint calculations."
      },
      {
        unitNo: "Unit IV",
        unitName: "GEOMETRY",
        marks: 15,
        chaptersIncluded: ["Ch 6: Triangles", "Ch 10: Circles"],
        keyHighlights: "Basic Proportionality Theorem (BPT) proof & converse, similarity criteria (AA, SSS, SAS), tangent perpendicular to radius proof, and equal tangents from external point proof."
      },
      {
        unitNo: "Unit V",
        unitName: "TRIGONOMETRY",
        marks: 12,
        chaptersIncluded: ["Ch 8: Introduction to Trigonometry", "Ch 9: Some Applications of Trigonometry"],
        keyHighlights: "Trig ratios of standard angles (0°, 30°, 45°, 60°, 90°), fundamental identity sin²A + cos²A = 1, and 2-triangle heights & distances problems."
      },
      {
        unitNo: "Unit VI",
        unitName: "MENSURATION",
        marks: 10,
        chaptersIncluded: ["Ch 11: Areas Related to Circles", "Ch 12: Surface Areas and Volumes"],
        keyHighlights: "Areas of sector & segment (central angles 60°, 90°, 120° only), and surface areas & volumes of 2-solid combinations (cubes, cylinders, cones, spheres, hemispheres)."
      },
      {
        unitNo: "Unit VII",
        unitName: "STATISTICS AND PROBABILITY",
        marks: 11,
        chaptersIncluded: ["Ch 13: Statistics", "Ch 14: Probability"],
        keyHighlights: "Mean (Direct, Assumed Mean, Step-Deviation), Median, Mode of grouped data (bimodal avoided); classical definition of probability P(E) = n(E)/n(S)."
      }
    ],
    typologyDesign: [
      {
        category: "Remembering & Understanding",
        description: "Recall facts, formulas, basic concepts, definitions; illustrate and compare mathematical terms.",
        marks: 43,
        percentage: 54
      },
      {
        category: "Applying",
        description: "Solve problems in new situations by applying acquired rules, techniques, and formulas.",
        marks: 19,
        percentage: 24
      },
      {
        category: "Analysing, Evaluating & Creating",
        description: "Break information into parts, construct proofs, model real-life case studies, formulate novel problem-solving patterns.",
        marks: 18,
        percentage: 22
      }
    ],
    chapterWeightages: [
      {
        chapterId: "math_ch1",
        chapterNo: 1,
        chapterName: "Real Numbers",
        unitNo: "Unit I (6M)",
        marks: "6 Marks",
        marksNumeric: 6,
        questionDistribution: "1 MCQ (1M) + 1 VSA (2M) + 1 SA Proof (3M)",
        priority: "High Yield",
        keyExamFocus: "Fundamental Theorem of Arithmetic (HCF × LCM = a × b) & Proof of irrationality (√2, √3, √5 or 3 + 2√5) by contradiction."
      },
      {
        chapterId: "math_ch2",
        chapterNo: 2,
        chapterName: "Polynomials",
        unitNo: "Unit II (20M)",
        marks: "4 Marks",
        marksNumeric: 4,
        questionDistribution: "1-2 MCQs (1M) + 1 VSA (2M) or 1 SA (3M)",
        priority: "Core Yield",
        keyExamFocus: "Zeroes of quadratic polynomials, relation α + β = -b/a and αβ = c/a, finding polynomial given sum/product."
      },
      {
        chapterId: "math_ch3",
        chapterNo: 3,
        chapterName: "Pair of Linear Equations in Two Variables",
        unitNo: "Unit II (20M)",
        marks: "5 Marks",
        marksNumeric: 5,
        questionDistribution: "1 MCQ (1M) + 1 Case Study (4M) or 1 VSA (2M) + 1 SA (3M)",
        priority: "Core Yield",
        keyExamFocus: "Consistency conditions (unique, infinitely many, no solution), algebraic solution (substitution/elimination), speed-stream/age word problems."
      },
      {
        chapterId: "math_ch4",
        chapterNo: 4,
        chapterName: "Quadratic Equations",
        unitNo: "Unit II (20M)",
        marks: "6 Marks",
        marksNumeric: 6,
        questionDistribution: "1 MCQ (1M) + 1 LA (5M) or 1 VSA (2M) + 1 SA (3M)",
        priority: "High Yield",
        keyExamFocus: "Discriminant D = b² - 4ac, nature of roots (D > 0, D = 0, D < 0), quadratic formula x = (-b ± √D)/2a, speed/time problems."
      },
      {
        chapterId: "math_ch5",
        chapterNo: 5,
        chapterName: "Arithmetic Progressions",
        unitNo: "Unit II (20M)",
        marks: "5 Marks",
        marksNumeric: 5,
        questionDistribution: "1 MCQ (1M) + 1 Case Study (4M) or 1 SA (3M) + 1 VSA (2M)",
        priority: "High Yield",
        keyExamFocus: "General term aₙ = a + (n-1)d, sum of n terms Sₙ = n/2[2a + (n-1)d], word problems on daily life production/savings."
      },
      {
        chapterId: "math_ch6",
        chapterNo: 6,
        chapterName: "Triangles",
        unitNo: "Unit IV (15M)",
        marks: "8 Marks",
        marksNumeric: 8,
        questionDistribution: "1 MCQ (1M) + 1 VSA (2M) + 1 LA Proof (5M)",
        priority: "High Yield",
        keyExamFocus: "Mandatory formal proof of Basic Proportionality Theorem (BPT/Thales), converse of BPT, AA/SAS similarity criteria riders."
      },
      {
        chapterId: "math_ch7",
        chapterNo: 7,
        chapterName: "Coordinate Geometry",
        unitNo: "Unit III (6M)",
        marks: "6 Marks",
        marksNumeric: 6,
        questionDistribution: "1 MCQ (1M) + 1 VSA (2M) + 1 SA (3M) or 4M Case Study",
        priority: "High Yield",
        keyExamFocus: "Distance formula √[(x₂-x₁)² + (y₂-y₁)²], section formula (internal division only m₁x₂+m₂x₁)/(m₁+m₂), midpoints, collinearity."
      },
      {
        chapterId: "math_ch8",
        chapterNo: 8,
        chapterName: "Introduction to Trigonometry",
        unitNo: "Unit V (12M)",
        marks: "7 Marks",
        marksNumeric: 7,
        questionDistribution: "2 MCQs (1M) + 1 VSA (2M) + 1 SA Proof (3M)",
        priority: "High Yield",
        keyExamFocus: "Trig ratios of acute angles (0°, 30°, 45°, 60°, 90°), proving identities using sin²θ + cos²θ = 1 and 1 + tan²θ = sec²θ."
      },
      {
        chapterId: "math_ch9",
        chapterNo: 9,
        chapterName: "Some Applications of Trigonometry",
        unitNo: "Unit V (12M)",
        marks: "5 Marks",
        marksNumeric: 5,
        questionDistribution: "1 Case Study (4M) + 1 MCQ (1M) or 1 LA (5M)",
        priority: "High Yield",
        keyExamFocus: "Heights & distances with angles of elevation and depression (only 30°, 45°, 60°), two-right-triangle real-life modeling."
      },
      {
        chapterId: "math_ch10",
        chapterNo: 10,
        chapterName: "Circles",
        unitNo: "Unit IV (15M)",
        marks: "7 Marks",
        marksNumeric: 7,
        questionDistribution: "1 MCQ (1M) + 1 VSA (2M) + 1 SA / LA (4M/3M)",
        priority: "High Yield",
        keyExamFocus: "Theorem 10.1 (tangent ⊥ radius), Theorem 10.2 (equal tangents from external point formal proof), circumscribed quadrilaterals."
      },
      {
        chapterId: "math_ch11",
        chapterNo: 11,
        chapterName: "Areas Related to Circles",
        unitNo: "Unit VI (10M)",
        marks: "4 Marks",
        marksNumeric: 4,
        questionDistribution: "1 MCQ (1M) + 1 SA (3M)",
        priority: "Core Yield",
        keyExamFocus: "Area of sector (θ/360 × πr²) and segment of circle (central angles 60°, 90°, 120° only), clock hand sweep & brooches."
      },
      {
        chapterId: "math_ch12",
        chapterNo: 12,
        chapterName: "Surface Areas and Volumes",
        unitNo: "Unit VI (10M)",
        marks: "6 Marks",
        marksNumeric: 6,
        questionDistribution: "1 MCQ (1M) + 1 LA (5M) or 1 VSA (2M) + 1 SA (3M)",
        priority: "High Yield",
        keyExamFocus: "Surface areas and volumes of combinations of two solids (cubes, spheres, hemispheres, cylinders, cones), canvas & toy shapes."
      },
      {
        chapterId: "math_ch13",
        chapterNo: 13,
        chapterName: "Statistics",
        unitNo: "Unit VII (11M)",
        marks: "7 Marks",
        marksNumeric: 7,
        questionDistribution: "1 MCQ (1M) + 1 VSA (2M) + 1 LA (4M/5M)",
        priority: "High Yield",
        keyExamFocus: "Mean (Direct, Assumed Mean methods), Median formula l + [(n/2 - cf)/f] × h, Mode formula, finding missing frequencies (p, q or x, y)."
      },
      {
        chapterId: "math_ch14",
        chapterNo: 14,
        chapterName: "Probability",
        unitNo: "Unit VII (11M)",
        marks: "4 Marks",
        marksNumeric: 4,
        questionDistribution: "1-2 MCQs (1M) + 1 VSA/SA (2M or 3M)",
        priority: "Core Yield",
        keyExamFocus: "Classical definition P(E) = n(E)/n(S), 52-card deck distribution, pair of dice, coin tossing, defective vs non-defective bulbs."
      }
    ],
    internalAssessment: [
      { component: "Pen Paper Test & Multiple Assessment", marks: 10, description: "Periodic school tests (5 marks) + Multiple assessments / quizzes / oral tests (5 marks)." },
      { component: "Portfolio", marks: 5, description: "Classwork notebooks, assignments, mathematical reflections, and peer review logs." },
      { component: "Lab Practical (Lab Activities)", marks: 5, description: "Hands-on activities done from prescribed CBSE Laboratory Manual in Mathematics." }
    ],
    prescribedBooks: [
      "Mathematics - Textbook for Class X (NCERT Publication)",
      "Guidelines for Mathematics Laboratory in Schools, Class X (CBSE Publication)",
      "Laboratory Manual - Mathematics, Secondary Stage (NCERT Publication)",
      "Mathematics Exemplar Problems for Class X (NCERT Publication)"
    ],
    criticalExclusions: [
      {
        chapter: "Ch 1: Real Numbers",
        topic: "Euclid's Division Lemma & Division Algorithm (a = bq + r)",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Rationalized in NCERT & CBSE 2026-27 syllabus.",
        studentAdvice: "Do NOT study lemma steps or questions asking 'show that any positive odd integer is of the form 4q+1'. Zero marks will be awarded."
      },
      {
        chapter: "Ch 1: Real Numbers",
        topic: "Decimal Expansions of Rational Numbers (terminating/non-terminating 2ᵐ × 5ⁿ)",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Removed from Class 10 curriculum.",
        studentAdvice: "Focus only on Fundamental Theorem of Arithmetic and √p proofs."
      },
      {
        chapter: "Ch 2: Polynomials",
        topic: "Polynomial Division Algorithm & Cubic Polynomial Zeroes Relations",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Division of polynomials p(x)/g(x) removed.",
        studentAdvice: "CBSE only tests Quadratic polynomials: α + β = -b/a and αβ = c/a."
      },
      {
        chapter: "Ch 3: Linear Equations",
        topic: "Cross-Multiplication Method & Equations Reducible to Linear Form",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Syllabus specifies: 'Algebraically - by substitution, by elimination only'.",
        studentAdvice: "Never use the cross-multiplication formula. Equations like 1/x + 1/y are also deleted."
      },
      {
        chapter: "Ch 4: Quadratic Equations",
        topic: "Method of Completing the Square",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Explicitly restricted to Factorization and Quadratic Formula.",
        studentAdvice: "Use only x = (-b ± √D)/(2a) or splitting the middle term."
      },
      {
        chapter: "Ch 6: Triangles",
        topic: "Ratio of Areas of Similar Triangles & Proof of Pythagoras Theorem",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Syllabus explicitly lists ONLY BPT for formal proof.",
        studentAdvice: "Do NOT memorize the Pythagoras Theorem proof or Area₁/Area₂ = (s₁/s₂)² theorem. They are completely deleted."
      },
      {
        chapter: "Ch 7: Coordinate Geometry",
        topic: "Area of a Triangle Formula (1/2[x₁(y₂-y₃) + ...])",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Section 7.4 of old NCERT removed.",
        studentAdvice: "Only Distance formula and Section formula (internal division) are in syllabus."
      },
      {
        chapter: "Ch 8: Trigonometry",
        topic: "Trigonometric Ratios of Complementary Angles (sin(90°-A) = cos A)",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Old NCERT Exercise 8.3 deleted.",
        studentAdvice: "Only values at 0°, 30°, 45°, 60°, 90° and sin²A + cos²A = 1 are tested."
      },
      {
        chapter: "Ch 12: Surface Areas & Volumes",
        topic: "Frustum of a Cone & Conversion of Solid Shapes",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Old NCERT Exercises 13.3 and 13.4 deleted.",
        studentAdvice: "Only combinations of any two basic solids are examined."
      },
      {
        chapter: "Ch 13: Statistics",
        topic: "Graphical Representation of Cumulative Frequency Distribution (Ogives)",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Less than / More than Ogive graphs deleted from syllabus.",
        studentAdvice: "Calculate Mean, Median, Mode algebraically using standard formulas."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 2. SCIENCE (CODE 086)
  // -------------------------------------------------------------------------
  science: {
    subjectId: "science",
    subjectName: "Science",
    code: "086",
    theoryMarks: 80,
    internalMarks: 20,
    totalMarks: 100,
    duration: "3 Hours",
    aimsAndPhilosophy: [
      "Inquiry-driven science curriculum combining Biology, Chemistry, Physics, and Earth Science.",
      "Strong emphasis on experimental observation, evidence-based reasoning, and societal ethics (e.g. Marie Curie, Green Revolution, Biodiversity).",
      "CBSE 2026-27 innovation: Provides dedicated Reading Material (RM) for formative topics to reduce summative examination stress."
    ],
    unitWeightages: [
      {
        unitNo: "Unit I",
        unitName: "Chemical Substances - Nature and Behaviour",
        marks: 25,
        chaptersIncluded: [
          "Ch 1: Chemical Reactions and Equations",
          "Ch 2: Acids, Bases and Salts",
          "Ch 3: Metals and Non-metals",
          "Ch 4: Carbon and its Compounds"
        ],
        keyHighlights: "Balancing equations, redox, pH in daily life, Chlor-Alkali & salts, reactivity series & ionic bonds, covalent bonding, homologous series, ethanol & ethanoic acid, soaps & micelles."
      },
      {
        unitNo: "Unit II",
        unitName: "World of Living",
        marks: 25,
        chaptersIncluded: [
          "Ch 5: Life Processes",
          "Ch 6: Control and Coordination",
          "Ch 7: How do Organisms Reproduce?",
          "Ch 8: Heredity"
        ],
        keyHighlights: "Nutrition, double circulation, nephron filtration, reflex arc, brain, plant hormones, double fertilization in angiosperms, human reproductive health, Mendel monohybrid & dihybrid crosses."
      },
      {
        unitNo: "Unit III",
        unitName: "Natural Phenomena",
        marks: 12,
        chaptersIncluded: [
          "Ch 9: Light - Reflection and Refraction",
          "Ch 10: Human Eye and the Colourful World"
        ],
        keyHighlights: "Spherical mirror & lens ray diagrams, mirror & lens formulas, magnification, power of lens, myopia & hypermetropia corrections, prism dispersion, atmospheric refraction & scattering."
      },
      {
        unitNo: "Unit IV",
        unitName: "Effects of Current",
        marks: 13,
        chaptersIncluded: [
          "Ch 11: Electricity",
          "Ch 12: Magnetic Effects of Electric Current"
        ],
        keyHighlights: "Ohm's law, factors of resistance, series & parallel circuits, Joule's heating effect, electric power, magnetic field lines, solenoid, Fleming's Left Hand Rule, AC vs DC & domestic circuits."
      },
      {
        unitNo: "Unit V",
        unitName: "Natural Resources",
        marks: 5,
        chaptersIncluded: ["Ch 13: Our Environment"],
        keyHighlights: "Ecosystems, food chains & webs, 10% energy law, biological magnification, ozone depletion (Montreal Protocol), biodegradable vs non-biodegradable waste."
      }
    ],
    typologyDesign: [
      {
        category: "Demonstrate Knowledge and Understanding",
        description: "State, name, list, identify, define, suggest, describe, outline, summarize.",
        marks: 40,
        percentage: 50
      },
      {
        category: "Application of Knowledge / Concepts",
        description: "Calculate, illustrate, show, adapt, explain, distinguish, solve numericals.",
        marks: 24,
        percentage: 30
      },
      {
        category: "Formulate, Analyze, Evaluate and Create",
        description: "Interpret, analyze, compare, contrast, examine, evaluate, discuss, construct ray diagrams & models.",
        marks: 16,
        percentage: 20
      }
    ],
    chapterWeightages: [
      {
        chapterId: "sci_ch1",
        chapterNo: 1,
        chapterName: "Chemical Reactions and Equations",
        unitNo: "Unit I (25M)",
        marks: "5 Marks",
        marksNumeric: 5,
        questionDistribution: "1 MCQ (1M) + 1 VSA (2M) + 1 SA (2M)",
        priority: "Core Yield",
        keyExamFocus: "Balancing equations with state symbols, combination/decomposition/displacement/double displacement reactions, redox (identifying oxidising and reducing agents), corrosion and rancidity."
      },
      {
        chapterId: "sci_ch2",
        chapterNo: 2,
        chapterName: "Acids, Bases and Salts",
        unitNo: "Unit I (25M)",
        marks: "6 Marks",
        marksNumeric: 6,
        questionDistribution: "1 MCQ (1M) + 1 VSA (2M) + 1 SA (3M)",
        priority: "High Yield",
        keyExamFocus: "pH in everyday life (digestive, tooth decay, soil), Chlor-Alkali process (equations for NaOH, Cl₂, H₂), preparation & formulas of Bleaching powder, Baking soda, Washing soda, and Plaster of Paris."
      },
      {
        chapterId: "sci_ch3",
        chapterNo: 3,
        chapterName: "Metals and Non-metals",
        unitNo: "Unit I (25M)",
        marks: "7 Marks",
        marksNumeric: 7,
        questionDistribution: "1-2 MCQs (1M) + 1 SA (3M) + 1 Case Study/Short (3M)",
        priority: "High Yield",
        keyExamFocus: "Reactivity series, reaction with acids & water (amphoteric oxides), formation and electron-dot structures of ionic compounds (NaCl, MgCl₂), metallurgy (roasting, calcination, thermite)."
      },
      {
        chapterId: "sci_ch4",
        chapterNo: 4,
        chapterName: "Carbon and its Compounds",
        unitNo: "Unit I (25M)",
        marks: "7 Marks",
        marksNumeric: 7,
        questionDistribution: "1-2 MCQs (1M) + 1 LA (5M)",
        priority: "High Yield",
        keyExamFocus: "Covalent bonding & electron-dot diagrams, versatile nature of carbon (catenation, tetravalency), homologous series, functional groups, chemical properties of ethanol & ethanoic acid (esterification, saponification), micelle action."
      },
      {
        chapterId: "sci_ch5",
        chapterNo: 5,
        chapterName: "Life Processes",
        unitNo: "Unit II (25M)",
        marks: "9 Marks",
        marksNumeric: 9,
        questionDistribution: "2 MCQs (1M) + 1 VSA (2M) + 1 LA (5M)",
        priority: "High Yield",
        keyExamFocus: "Autotrophic nutrition (equations, stomata opening mechanism), human alimentary canal and enzyme actions, double circulation of blood (heart diagram), structural & functional unit of kidney (nephron diagram & urine formation)."
      },
      {
        chapterId: "sci_ch6",
        chapterNo: 6,
        chapterName: "Control and Coordination",
        unitNo: "Unit II (25M)",
        marks: "6 Marks",
        marksNumeric: 6,
        questionDistribution: "1 MCQ (1M) + 1 VSA (2M) + 1 SA (3M)",
        priority: "Core Yield",
        keyExamFocus: "Reflex arc pathway, structure of neuron & synapse, human brain parts and their precise functions (cerebrum, cerebellum, medulla), plant phytohormones (auxin, gibberellin, cytokinin, ABA), endocrine glands & hormones."
      },
      {
        chapterId: "sci_ch7",
        chapterNo: 7,
        chapterName: "How do Organisms Reproduce?",
        unitNo: "Unit II (25M)",
        marks: "6 Marks",
        marksNumeric: 6,
        questionDistribution: "1 MCQ (1M) + 1 SA (2M) + 1 SA (3M) or 4M Case Study",
        priority: "High Yield",
        keyExamFocus: "Asexual modes (fission, budding, spore formation), longitudinal section of flower diagram, double fertilization process, male & female reproductive anatomy, menstrual cycle basics, contraceptive methods."
      },
      {
        chapterId: "sci_ch8",
        chapterNo: 8,
        chapterName: "Heredity",
        unitNo: "Unit II (25M)",
        marks: "4 Marks",
        marksNumeric: 4,
        questionDistribution: "1 MCQ (1M) + 1 SA (3M)",
        priority: "Core Yield",
        keyExamFocus: "Mendel's experiments with Pisum sativum: Monohybrid cross (phenotypic ratio 3:1, genotypic ratio 1:2:1), Dihybrid cross (9:3:3:1), chromosomal basis of sex determination in humans (XX female, XY male)."
      },
      {
        chapterId: "sci_ch9",
        chapterNo: 9,
        chapterName: "Light - Reflection and Refraction",
        unitNo: "Unit III (12M)",
        marks: "8 Marks",
        marksNumeric: 8,
        questionDistribution: "1 MCQ (1M) + 1 VSA (2M) + 1 LA/Numerical (5M)",
        priority: "High Yield",
        keyExamFocus: "Concave & convex mirror ray diagrams, New Cartesian sign convention, mirror formula (1/v + 1/u = 1/f) and magnification, Snell's law & refractive index, convex & concave lens ray diagrams, lens formula & power P = 1/f (in meters)."
      },
      {
        chapterId: "sci_ch10",
        chapterNo: 10,
        chapterName: "Human Eye and the Colourful World",
        unitNo: "Unit III (12M)",
        marks: "4 Marks",
        marksNumeric: 4,
        questionDistribution: "1 MCQ (1M) + 1 SA (3M)",
        priority: "Core Yield",
        keyExamFocus: "Refraction through equilateral triangular prism, dispersion of white light & spectrum (VIBGYOR), atmospheric refraction (twinkling of stars, advance sunrise & delayed sunset), Tyndall effect & why sky is blue."
      },
      {
        chapterId: "sci_ch11",
        chapterNo: 11,
        chapterName: "Electricity",
        unitNo: "Unit IV (13M)",
        marks: "7 Marks",
        marksNumeric: 7,
        questionDistribution: "2 MCQs (1M) + 1 LA/Numerical (5M)",
        priority: "High Yield",
        keyExamFocus: "Ohm's Law verification & V-I graph, factors affecting resistance R = ρ(l/A), equivalent resistance of resistors in series and parallel, Joule's law of heating (H = I²Rt), electric power formulas (P = VI, I²R, V²/R) and commercial unit (kWh)."
      },
      {
        chapterId: "sci_ch12",
        chapterNo: 12,
        chapterName: "Magnetic Effects of Electric Current",
        unitNo: "Unit IV (13M)",
        marks: "6 Marks",
        marksNumeric: 6,
        questionDistribution: "1 MCQ (1M) + 1 VSA (2M) + 1 SA (3M)",
        priority: "Core Yield",
        keyExamFocus: "Magnetic field lines characteristics, field due to current-carrying straight conductor, circular loop, and solenoid, Right-Hand Thumb Rule, Fleming's Left-Hand Rule, domestic electric circuit (live, neutral, earth wires, fuse, overloading)."
      },
      {
        chapterId: "sci_ch13",
        chapterNo: 13,
        chapterName: "Our Environment",
        unitNo: "Unit V (5M)",
        marks: "5 Marks",
        marksNumeric: 5,
        questionDistribution: "1 MCQ (1M) + 1 Assertion-Reason (1M) + 1 SA (3M)",
        priority: "Core Yield",
        keyExamFocus: "Ecosystem structure (biotic & abiotic), trophic levels, 10 percent law of energy flow, biological magnification of pesticides (DDT), ozone layer depletion (role of CFCs & Montreal Protocol), biodegradable vs non-biodegradable waste."
      }
    ],
    internalAssessment: [
      { component: "Periodic Assessment", marks: 10, description: "Pen-Paper school tests (5 marks) + Diverse assessment methods / oral / quizzes (5 marks)." },
      { component: "Subject Enrichment (Practical Work)", marks: 5, description: "Performance and record log of the 14 mandatory hands-on practical experiments." },
      { component: "Portfolio", marks: 5, description: "Class assignments, science project reports, write-ups on formative reading topics." }
    ],
    prescribedBooks: [
      "Science - Textbook for Class X (NCERT Publication)",
      "Assessment of Practical Skills in Science - Class X (CBSE Publication)",
      "Laboratory Manual - Science - Class X (NCERT Publication)",
      "Exemplar Problems Class X (NCERT Publication)",
      "Reading Material – Science – Class X (2026-27) (CBSE Publication)"
    ],
    criticalExclusions: [
      {
        chapter: "Unit I (Chemistry)",
        topic: "Periodic Classification of Elements (Döbereiner, Newlands, Mendeleev, Modern Periodic Table)",
        officialStatus: "Formative Assessment Only (Portfolio)",
        reasonAndCircular: "CBSE Syllabus 2026-27 Note: 'Assessed only formatively to reinforce understanding without adding to summative assessments. Will NOT be assessed in year-end examination.'",
        studentAdvice: "Read for general knowledge or school portfolio, but do NOT spend time preparing for board exam theory."
      },
      {
        chapter: "Ch 8: Heredity",
        topic: "Evolution (Acquired & Inherited traits, Speciation, Fossils, Human Evolution)",
        officialStatus: "Formative Assessment Only (Portfolio)",
        reasonAndCircular: "CBSE 2026-27 syllabus explicit note: 'Evolution will not be assessed in the year-end examination.'",
        studentAdvice: "The chapter in the board examination is strictly titled 'Heredity'. Focus 100% on Mendel's crosses and human sex determination."
      },
      {
        chapter: "Ch 10: Human Eye",
        topic: "Colour of the Sun at Sunrise and Sunset",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Syllabus line 215: '(excluding colour of the sun at sunrise and sunset)'.",
        studentAdvice: "Study blue sky, white clouds, danger red lights, and twinkling of stars. Skip sun color at twilight."
      },
      {
        chapter: "Ch 12: Magnetic Effects",
        topic: "Electric Motor, Electromagnetic Induction, and Electric Generator",
        officialStatus: "Formative Assessment Only (Portfolio)",
        reasonAndCircular: "Syllabus line 231 & Teacher Note 1: Included in CBSE Reading Material for formative learning only; excluded from 80-mark Board Exam.",
        studentAdvice: "Do not memorize AC generator or DC motor construction diagrams for the board exam. Stop at Fleming's Left Hand Rule and Domestic Wiring."
      },
      {
        chapter: "Sources of Energy & Sustainable Management",
        topic: "Old Chapters 14 & 16 of Class 10 NCERT",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Permanently deleted from secondary curriculum.",
        studentAdvice: "These chapters are completely removed from textbooks."
      }
    ],
    practicals: [
      {
        expNo: 1,
        unit: "Unit I: Chemistry",
        title: "pH Measurement of Samples",
        apparatus: "Test tubes, dropper, pH paper, universal indicator.",
        procedureSummary: "Test dil. HCl, dil. NaOH, dil. Ethanoic acid, lemon juice, pure water, dil. NaHCO₃ with pH paper.",
        expectedObservation: "HCl (pH ~ 1, red), NaOH (pH ~ 13-14, deep blue/purple), Ethanoic acid (pH ~ 3, orange), Lemon juice (pH ~ 2, red-orange), Water (pH = 7, green), NaHCO₃ (pH ~ 9, blue-green).",
        vivaTrap: "Universal indicator gives approximate pH range, not exact decimal pH like a calibrated digital meter."
      },
      {
        expNo: 2,
        unit: "Unit I: Chemistry",
        title: "Properties of Acids & Bases (HCl & NaOH)",
        apparatus: "Zn granules, solid Na₂CO₃, red/blue litmus, test tubes.",
        procedureSummary: "Reaction with litmus solution, reaction with zinc metal (gas evolution), reaction with solid sodium carbonate.",
        expectedObservation: "HCl turns blue litmus red, releases H₂ with Zn (burns with pop sound), releases CO₂ with Na₂CO₃ (turns lime water milky). NaOH turns red litmus blue, releases H₂ with Zn on heating forming sodium zincate (Na₂ZnO₂).",
        vivaTrap: "NaOH does NOT react with sodium carbonate (both are basic)."
      },
      {
        expNo: 3,
        unit: "Unit I: Chemistry",
        title: "Classification of 4 Fundamental Chemical Reactions",
        apparatus: "Beaker, boiling tube, test tubes, burner.",
        procedureSummary: "(a) Water on quicklime (CaO), (b) Heat on FeSO₄·7H₂O, (c) Fe nails in CuSO₄, (d) Na₂SO₄ + BaCl₂.",
        expectedObservation: "(a) Exothermic combination ⟶ Ca(OH)₂, (b) Thermal decomposition: green turns reddish-brown Fe₂O₃ + SO₂ + SO₃ choking gases, (c) Displacement: blue solution turns pale green FeSO₄ with reddish-brown copper coating, (d) Double displacement: white ppt BaSO₄.",
        vivaTrap: "FeSO₄ decomposition produces TWO different acidic gases: sulphur dioxide and sulphur trioxide."
      },
      {
        expNo: 4,
        unit: "Unit I: Chemistry",
        title: "Reactivity Hierarchy of Metals (Zn, Fe, Cu, Al)",
        apparatus: "Test tubes, clean metal strips, salt solutions (ZnSO₄, FeSO₄, CuSO₄, Al₂(SO₄)₃).",
        procedureSummary: "Cross-immerse each metal in the 4 salt solutions and observe displacement reactions.",
        expectedObservation: "Al reacts with all three other solutions; Zn displaces Fe and Cu; Fe displaces only Cu; Cu displaces none. Reactivity: Al > Zn > Fe > Cu.",
        vivaTrap: "Aluminium requires rubbing with sandpaper to remove the inert aluminium oxide (Al₂O₃) protective layer first."
      },
      {
        expNo: 5,
        unit: "Unit IV: Physics",
        title: "Ohm's Law Verification & V-I Graph",
        apparatus: "Voltmeter, ammeter, nichrome wire resistor, battery, rheostat, plug key.",
        procedureSummary: "Vary current using rheostat, measure corresponding V and I, plot V vs I.",
        expectedObservation: "Straight line graph passing through the origin (0, 0), proving V ∝ I. Slope = Resistance R.",
        vivaTrap: "Voltmeter must always be connected in PARALLEL; Ammeter must always be connected in SERIES."
      },
      {
        expNo: 6,
        unit: "Unit IV: Physics",
        title: "Equivalent Resistance in Series and Parallel",
        apparatus: "Two resistors of known values (e.g. 2Ω, 3Ω), circuit board, meters.",
        procedureSummary: "Measure equivalent resistance when connected end-to-end (series) and across common nodes (parallel).",
        expectedObservation: "R_series = R₁ + R₂ (greater than highest individual); 1/R_parallel = 1/R₁ + 1/R₂ (smaller than smallest individual).",
        vivaTrap: "In parallel, current divides inversely with resistance while voltage remains constant."
      },
      {
        expNo: 7,
        unit: "Unit II: Biology",
        title: "Temporary Mount of Leaf Peel (Stomata)",
        apparatus: "Tradescantia/Rheo or Bryophyllum leaf, watch glass, safranin stain, glycerine, coverslip, compound microscope.",
        procedureSummary: "Peel epidermal layer from ventral leaf surface, stain with safranin, mount in glycerine, observe under 40x.",
        expectedObservation: "Kidney/bean-shaped guard cells containing chloroplasts enclosing a central stomatal pore.",
        vivaTrap: "Monocot guard cells are dumbbell-shaped, while dicot guard cells are bean/kidney-shaped."
      },
      {
        expNo: 8,
        unit: "Unit II: Biology",
        title: "CO₂ Release During Cellular Respiration",
        apparatus: "Conical flask, germinating seeds (gram/pea), small test tube with KOH solution, U-tube, delivery tube, water beaker.",
        procedureSummary: "Enclose germinating seeds in airtight flask with suspended KOH. Observe water level in delivery tube.",
        expectedObservation: "Water level rises in the delivery tube because KOH absorbs CO₂ evolved by seeds, creating a partial vacuum.",
        vivaTrap: "Why KOH? KOH pellets specifically absorb carbon dioxide gas without affecting oxygen."
      },
      {
        expNo: 9,
        unit: "Unit I: Chemistry",
        title: "Properties of Acetic Acid (Ethanoic Acid)",
        apparatus: "Ethanoic acid, water, blue/red litmus, solid NaHCO₃.",
        procedureSummary: "Test odour (pungent vinegar smell), water solubility, litmus response, and reaction with sodium bicarbonate.",
        expectedObservation: "Miscible in water in all proportions; turns blue litmus red; effervescence of colorless odorless CO₂ gas turning lime water milky.",
        vivaTrap: "Do not confuse the vinegar smell of acetic acid with the rotten egg smell of H₂S."
      },
      {
        expNo: 10,
        unit: "Unit I: Chemistry",
        title: "Comparative Cleaning Capacity of Soap in Soft vs Hard Water",
        apparatus: "Two test tubes, soap solution, distilled water (soft), calcium/magnesium salt solution (hard).",
        procedureSummary: "Add equal drops of soap to both test tubes, shake vigorously for 15 seconds, measure foam height.",
        expectedObservation: "Soft water forms thick stable lather/foam; hard water forms curdy white precipitate (scum) with little foam.",
        vivaTrap: "Scum is insoluble calcium stearate / magnesium stearate formed when soap reacts with Ca²⁺/Mg²⁺ ions."
      },
      {
        expNo: 11,
        unit: "Unit III: Physics",
        title: "Focal Length of Concave Mirror and Convex Lens",
        apparatus: "Concave mirror, convex lens, optical bench/holders, white screen, meter scale, distant tree/window.",
        procedureSummary: "Focus sharp inverted image of distant object onto white screen. Measure distance between optical center/pole and screen.",
        expectedObservation: "Sharp image formed at principal focus. Measured distance is focal length f.",
        vivaTrap: "Distant object rays are assumed parallel. If object is not at optical infinity, measured distance is slightly greater than f."
      },
      {
        expNo: 12,
        unit: "Unit III: Physics",
        title: "Refraction Through a Rectangular Glass Slab",
        apparatus: "Drawing board, glass slab, pins, protractor, white paper.",
        procedureSummary: "Fix incident pins at angle i, sight emergent pins through opposite face, draw normal and trace ray path.",
        expectedObservation: "Angle of incidence ∠i = Angle of emergence ∠e; emergent ray is parallel to incident ray but laterally displaced.",
        vivaTrap: "Lateral displacement is directly proportional to thickness of slab and refractive index, and inversely to wavelength."
      },
      {
        expNo: 13,
        unit: "Unit II: Biology",
        title: "Binary Fission in Amoeba & Budding in Yeast/Hydra",
        apparatus: "Permanent slides, compound microscope.",
        procedureSummary: "Observe prepared slides showing stages of division under high power microscope.",
        expectedObservation: "Amoeba shows karyokinesis (nucleus elongation & constriction) followed by cytokinesis. Yeast shows small daughter bud on mother cell.",
        vivaTrap: "Binary fission is symmetrical division into two equal daughters; Budding is asymmetrical outgrowth."
      },
      {
        expNo: 14,
        unit: "Unit III: Physics",
        title: "Refraction of Light Through a Glass Prism",
        apparatus: "Equilateral glass prism, pins, protractor, drawing board.",
        procedureSummary: "Trace light ray entering prism surface, measure angle of incidence i, angle of deviation D, and angle of emergence e.",
        expectedObservation: "Ray bends towards normal upon entering glass, bends away from normal upon exiting. Verified: ∠i + ∠e = ∠A + ∠D.",
        vivaTrap: "Angle of minimum deviation occurs when the refracted ray travels parallel to the base inside an equilateral prism."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 3. SOCIAL SCIENCE (CODE 087)
  // -------------------------------------------------------------------------
  sst: {
    subjectId: "sst",
    subjectName: "Social Science",
    code: "087",
    theoryMarks: 80,
    internalMarks: 20,
    totalMarks: 100,
    duration: "3 Hours",
    aimsAndPhilosophy: [
      "Four equal pillars of 20 Marks each: History, Geography, Political Science, and Economics.",
      "Emphasis on democratic citizenship, environmental sustainability, constitutional values, and spatial geographical analysis.",
      "Comprehensive map work (5 Marks in Board Exam: 2 Marks History + 3 Marks Geography)."
    ],
    unitWeightages: [
      {
        unitNo: "Part 1",
        unitName: "HISTORY (India and the Contemporary World - II)",
        marks: 20,
        chaptersIncluded: [
          "Ch 1: The Rise of Nationalism in Europe",
          "Ch 2: Nationalism in India",
          "Ch 3: The Making of a Global World (Subtopics 1 to 1.3)",
          "Ch 5: Print Culture and the Modern World"
        ],
        keyHighlights: "18 Marks Theory + 2 Marks Map Pointing. French Revolution impact, Simon Commission, Satyagraha movements, Silk routes, Gutenberg press."
      },
      {
        unitNo: "Part 2",
        unitName: "GEOGRAPHY (Contemporary India - II)",
        marks: 20,
        chaptersIncluded: [
          "Ch 1: Resources and Development",
          "Ch 2: Forest and Wildlife Resources",
          "Ch 3: Water Resources",
          "Ch 4: Agriculture",
          "Ch 5: Minerals and Energy Resources",
          "Ch 6: Manufacturing Industries",
          "Ch 7: Lifelines of National Economy (Map Pointing Only)"
        ],
        keyHighlights: "17 Marks Theory + 3 Marks Map Pointing. Sustainable development, multipurpose river valley projects, cropping seasons, mining belts, industrial pollution."
      },
      {
        unitNo: "Part 3",
        unitName: "POLITICAL SCIENCE (Democratic Politics - II)",
        marks: 20,
        chaptersIncluded: [
          "Ch 1: Power-sharing",
          "Ch 2: Federalism",
          "Ch 3: Gender, Religion and Caste",
          "Ch 4: Political Parties",
          "Ch 5: Outcomes of Democracy"
        ],
        keyHighlights: "Belgium vs Sri Lanka, Union/State/Concurrent lists, local self-government 1992, secular state constitution, multi-party system, democratic accountability & transparency."
      },
      {
        unitNo: "Part 4",
        unitName: "ECONOMICS (Understanding Economic Development)",
        marks: 20,
        chaptersIncluded: [
          "Ch 1: Development",
          "Ch 2: Sectors of the Indian Economy",
          "Ch 3: Money and Credit",
          "Ch 4: Globalisation and the Indian Economy (Subtopics: What is Globalisation? Factors that have enabled Globalisation)"
        ],
        keyHighlights: "Per capita income & HDI, primary/secondary/tertiary GDP share, disguised unemployment, formal vs informal loans, SHGs, foreign trade & MNC investments."
      }
    ],
    typologyDesign: [
      {
        category: "1-Mark Objective Questions (20 MCQs)",
        description: "Multiple choice, assertion-reason, table-based, stem differentiation questions.",
        marks: 20,
        percentage: 25
      },
      {
        category: "2-Mark Very Short Answer (VSA)",
        description: "4 questions × 2 marks, concise conceptual answers in 40 words.",
        marks: 8,
        percentage: 10
      },
      {
        category: "3-Mark Short Answer (SA)",
        description: "5 questions × 3 marks, point-wise structured answers in 60-80 words.",
        marks: 15,
        percentage: 18.75
      },
      {
        category: "5-Mark Long Answer (LA)",
        description: "4 questions × 5 marks, comprehensive essays with subheadings in 120 words.",
        marks: 20,
        percentage: 25
      },
      {
        category: "4-Mark Case-Based Questions",
        description: "3 source/case studies × 4 marks with sub-questions testing data interpretation.",
        marks: 12,
        percentage: 15
      },
      {
        category: "Map Pointing Skill",
        description: "History (2 marks) + Geography (3 marks) on outline political map of India.",
        marks: 5,
        percentage: 6.25
      }
    ],
    chapterWeightages: [
      {
        chapterId: "sst_his1",
        chapterNo: "Hist-1",
        chapterName: "The Rise of Nationalism in Europe",
        unitNo: "History (20M)",
        marks: "6 Marks",
        marksNumeric: 6,
        questionDistribution: "1 MCQ (1M) + 1 LA (5M) or 1 SA (3M) + 1 VSA (2M)",
        priority: "High Yield",
        keyExamFocus: "French Revolution & idea of nation, Napoleonic Code 1804, Liberal nationalism, Unification of Germany (Bismarck) and Italy (Mazzini, Garibaldi, Cavour), Visualising the nation (Marianne & Germania), Balkan conflict."
      },
      {
        chapterId: "sst_his2",
        chapterNo: "Hist-2",
        chapterName: "Nationalism in India",
        unitNo: "History (20M)",
        marks: "6M Theory + 2M Map",
        marksNumeric: 8,
        questionDistribution: "1 MCQ (1M) + 1 SA (3M) + 1 VSA (2M) + 2 Marks Map",
        priority: "High Yield",
        keyExamFocus: "First World War & Satyagraha (Champaran, Kheda, Ahmedabad), Rowlatt Act & Jallianwala Bagh, Non-Cooperation Movement (spread in towns, countryside, Awadh/Alluri Sitaram Raju), Simon Commission, Salt March & Civil Disobedience, Poona Pact, Sense of collective belonging."
      },
      {
        chapterId: "sst_his3",
        chapterNo: "Hist-3",
        chapterName: "The Making of a Global World (Subtopics 1 to 1.3)",
        unitNo: "History (20M)",
        marks: "3 Marks",
        marksNumeric: 3,
        questionDistribution: "1 MCQ (1M) + 1 VSA (2M) or 1 SA (3M)",
        priority: "Core Yield",
        keyExamFocus: "Pre-modern world: Silk routes, Food travels (spaghetti & potato), Conquest, disease & trade (Smallpox biological weapon). Note: Interwar economy & Great Depression deleted from board evaluation."
      },
      {
        chapterId: "sst_his_ind",
        chapterNo: "Hist-4",
        chapterName: "The Age of Industrialisation",
        unitNo: "History (20M)",
        marks: "0 Marks (Internal Only)",
        marksNumeric: 0,
        questionDistribution: "Periodic Assessment / School tests only (0 Marks in Board Exam)",
        priority: "Project / Periodic Only",
        keyExamFocus: "Proto-industrialisation, factories coming up, hand labour vs steam power, market for goods (advertisements, calendar prints). Formative evaluation only."
      },
      {
        chapterId: "sst_his4",
        chapterNo: "Hist-5",
        chapterName: "Print Culture and the Modern World",
        unitNo: "History (20M)",
        marks: "3 Marks",
        marksNumeric: 3,
        questionDistribution: "1 MCQ (1M) + 1 VSA (2M) or 1 SA (3M)",
        priority: "Core Yield",
        keyExamFocus: "First printed books (China, Japan, Korea), Gutenberg movable type printing press, Protestant Reformation (Martin Luther), Reading mania & French Revolution debate, Print in 19th-century India (women, poor, religious reforms)."
      },
      {
        chapterId: "sst_geo1",
        chapterNo: "Geo-1",
        chapterName: "Resources and Development",
        unitNo: "Geography (20M)",
        marks: "3 Marks + Map",
        marksNumeric: 3,
        questionDistribution: "1 MCQ (1M) + 1 VSA (2M) + Identification of Major Soil Types on Map",
        priority: "Core Yield",
        keyExamFocus: "Classification of resources, sustainable development & Rio Summit 1992, land utilisation & land degradation causes/conservation, soils of India (Alluvial, Black, Red & Yellow, Laterite, Arid, Forest)."
      },
      {
        chapterId: "sst_geo2",
        chapterNo: "Geo-2",
        chapterName: "Forest and Wildlife Resources",
        unitNo: "Geography (20M)",
        marks: "2 Marks",
        marksNumeric: 2,
        questionDistribution: "1 VSA (2M) or 2 MCQs (1M)",
        priority: "Foundational",
        keyExamFocus: "Flora and fauna depletion, conservation initiatives (Project Tiger), forest classification (Reserved, Protected, Unclassed), community conservation (Chipko Movement, Beej Bachao Andolan, Joint Forest Management - JFM)."
      },
      {
        chapterId: "sst_geo3",
        chapterNo: "Geo-3",
        chapterName: "Water Resources",
        unitNo: "Geography (20M)",
        marks: "3 Marks + Map",
        marksNumeric: 3,
        questionDistribution: "1 SA (3M) or 1 MCQ (1M) + 1 VSA (2M) + Locating Major Dams on Map",
        priority: "Core Yield",
        keyExamFocus: "Water scarcity & water conservation need, multipurpose river valley projects (advantages & ecological criticisms - Narmada Bachao Andolan), traditional rainwater harvesting systems (Kuls/Guls, Johads, Khadins, Rooftop systems in Rajasthan/Meghalaya)."
      },
      {
        chapterId: "sst_geo4",
        chapterNo: "Geo-4",
        chapterName: "Agriculture",
        unitNo: "Geography (20M)",
        marks: "4 Marks + Map",
        marksNumeric: 4,
        questionDistribution: "1 MCQ (1M) + 1 SA (3M) + Major Rice & Wheat areas on Map",
        priority: "High Yield",
        keyExamFocus: "Types of farming (Primitive subsistence/Slash & burn, Intensive subsistence, Commercial), cropping seasons (Rabi, Kharif, Zaid), major crops climatic requirements (Rice, Wheat, Millets, Sugarcane, Tea, Coffee, Cotton), technological & institutional reforms (Bhoodan-Gramdan)."
      },
      {
        chapterId: "sst_geo5",
        chapterNo: "Geo-5",
        chapterName: "Minerals and Energy Resources",
        unitNo: "Geography (20M)",
        marks: "2 Marks + Map",
        marksNumeric: 3,
        questionDistribution: "1 MCQ (1M) + 1 VSA (1M) + Power plants & Mining belts on Map",
        priority: "Core Yield",
        keyExamFocus: "Mode of occurrence of minerals, ferrous vs non-ferrous, conventional energy (coal types - Anthracite, Bituminous, Lignite, Peat; petroleum, natural gas) vs non-conventional energy (solar, wind, biogas, tidal), conservation of energy resources."
      },
      {
        chapterId: "sst_geo6",
        chapterNo: "Geo-6",
        chapterName: "Manufacturing Industries",
        unitNo: "Geography (20M)",
        marks: "3 Marks + Map",
        marksNumeric: 3,
        questionDistribution: "1 SA (3M) + Software Technology Parks / Cotton & Iron plants on Map",
        priority: "High Yield",
        keyExamFocus: "Importance of manufacturing & contribution to national economy, industrial location factors, classification of industries, agro-based (Textile, Sugar) vs mineral-based (Iron & Steel, Aluminium, Chemical, Fertilizer), industrial pollution & environmental degradation control."
      },
      {
        chapterId: "sst_geo7",
        chapterNo: "Geo-7",
        chapterName: "Lifelines of National Economy (Map Pointing Only)",
        unitNo: "Geography (20M)",
        marks: "0M Theory (1M Map)",
        marksNumeric: 1,
        questionDistribution: "Locating & Labelling Major Sea Ports & International Airports on Map (No theory questions)",
        priority: "Core Yield",
        keyExamFocus: "Board syllabus specifies: Evaluated ONLY in Map Pointing (1 Mark). Major Ports (Kandla, Mumbai, Marmagao, Kochi, Chennai, Visakhapatnam, Paradip, Haldia) & Airports (Delhi, Mumbai, Chennai, Kolkata, Bengaluru, Amritsar)."
      },
      {
        chapterId: "sst_civ1",
        chapterNo: "Civ-1",
        chapterName: "Power-sharing",
        unitNo: "Civics / Pol Science (20M)",
        marks: "4 Marks",
        marksNumeric: 4,
        questionDistribution: "1 MCQ (1M) + 1 SA (3M)",
        priority: "Core Yield",
        keyExamFocus: "Case study comparison: Ethnic composition of Belgium vs Majoritarianism in Sri Lanka, accommodation in Belgium, prudential vs moral reasons for power-sharing, horizontal vs vertical power sharing forms."
      },
      {
        chapterId: "sst_civ2",
        chapterNo: "Civ-2",
        chapterName: "Federalism",
        unitNo: "Civics / Pol Science (20M)",
        marks: "4 Marks",
        marksNumeric: 4,
        questionDistribution: "1 MCQ (1M) + 1 SA (3M)",
        priority: "High Yield",
        keyExamFocus: "Key features of federalism, 'Coming together' vs 'Holding together' federations, legislative powers distribution (Union, State, Concurrent Lists, Residuary powers), linguistic states & language policy, decentralisation amendment of 1992."
      },
      {
        chapterId: "sst_civ3",
        chapterNo: "Civ-3",
        chapterName: "Gender, Religion and Caste",
        unitNo: "Civics / Pol Science (20M)",
        marks: "4 Marks",
        marksNumeric: 4,
        questionDistribution: "1 MCQ (1M) + 1 SA (3M)",
        priority: "Core Yield",
        keyExamFocus: "Sexual division of labour & feminist movements, women's political representation, communalism vs secular state constitutional provisions, caste in politics vs politics in caste."
      },
      {
        chapterId: "sst_civ4",
        chapterNo: "Civ-4",
        chapterName: "Political Parties",
        unitNo: "Civics / Pol Science (20M)",
        marks: "5 Marks",
        marksNumeric: 5,
        questionDistribution: "1 LA (5M) or 1 MCQ (1M) + 1 Case Study (4M)",
        priority: "High Yield",
        keyExamFocus: "Why do we need political parties? Core functions of political parties, party systems (one-party, two-party, multi-party), national vs state recognized party criteria (ECI criteria), challenges faced by parties (dynastic succession, money & muscle power), reforms to strengthen parties."
      },
      {
        chapterId: "sst_civ5",
        chapterNo: "Civ-5",
        chapterName: "Outcomes of Democracy",
        unitNo: "Civics / Pol Science (20M)",
        marks: "3 Marks",
        marksNumeric: 3,
        questionDistribution: "1 SA (3M)",
        priority: "Core Yield",
        keyExamFocus: "How do we assess democracy's outcomes? Accountable, responsive, and legitimate government; economic growth vs reduction of inequality & poverty; accommodation of social diversity; dignity and freedom of citizens."
      },
      {
        chapterId: "sst_eco1",
        chapterNo: "Eco-1",
        chapterName: "Development",
        unitNo: "Economics (20M)",
        marks: "4 Marks",
        marksNumeric: 4,
        questionDistribution: "1 MCQ (1M) + 1 SA (3M)",
        priority: "Core Yield",
        keyExamFocus: "Different people, different goals (conflicting goals), national development, income and other criteria (Infant Mortality Rate, Literacy rate, Net Attendance Ratio), World Bank per capita criterion vs UNDP Human Development Index (HDI), sustainability of development."
      },
      {
        chapterId: "sst_eco2",
        chapterNo: "Eco-2",
        chapterName: "Sectors of the Indian Economy",
        unitNo: "Economics (20M)",
        marks: "5 Marks",
        marksNumeric: 5,
        questionDistribution: "1 MCQ (1M) + 1 Case Study (4M) or 1 LA (5M)",
        priority: "High Yield",
        keyExamFocus: "Primary, secondary, and tertiary sectors; historical shift in sectors; GDP calculation & value of final goods; rising importance of tertiary sector; disguised / underemployment in agriculture and how to create employment (MGNREGA 2005); organised vs unorganised sector; public vs private sector."
      },
      {
        chapterId: "sst_eco3",
        chapterNo: "Eco-3",
        chapterName: "Money and Credit",
        unitNo: "Economics (20M)",
        marks: "5 Marks",
        marksNumeric: 5,
        questionDistribution: "1 MCQ (1M) + 1 LA (5M) or 1 SA (3M) + 1 VSA (2M)",
        priority: "High Yield",
        keyExamFocus: "Barter system & double coincidence of wants, modern forms of money (currency, demand deposits, cheques), loan activities of banks, two credit situations (asset creation vs debt trap), terms of credit (collateral, documentation), formal sector (RBI supervision) vs informal sector loans, Self-Help Groups (SHGs) for the poor."
      },
      {
        chapterId: "sst_eco4",
        chapterNo: "Eco-4",
        chapterName: "Globalisation and the Indian Economy",
        unitNo: "Economics (20M)",
        marks: "4 Marks",
        marksNumeric: 4,
        questionDistribution: "1 MCQ (1M) + 1 SA (3M)",
        priority: "Core Yield",
        keyExamFocus: "Syllabus strictly limited to: 'What is Globalisation?' and 'Factors that have enabled Globalisation' (technology, liberalisation of foreign trade & investment policy, WTO). Remainder of old chapter is project-only."
      },
      {
        chapterId: "sst_eco5",
        chapterNo: "Eco-5",
        chapterName: "Consumer Rights",
        unitNo: "Economics (20M)",
        marks: "0 Marks (Project Only)",
        marksNumeric: 0,
        questionDistribution: "Evaluated strictly in Project Work / Portfolio (0 Marks in Board Exam)",
        priority: "Project / Periodic Only",
        keyExamFocus: "Consumer movement, Consumer Protection Act (COPRA), rights of consumers (right to safety, information, choice, heard, seek redressal, education), consumer forums (district, state, national)."
      }
    ],
    internalAssessment: [
      { component: "Pen Paper Test & Multiple Assessment", marks: 10, description: "Pen-paper tests (5 marks) + Quizzes, debate, role play, group work (5 marks)." },
      { component: "Portfolio", marks: 5, description: "Classwork, self-assessment journal, art-integrated social science presentations." },
      { component: "Project Work (Consumer Rights / Social Issues)", marks: 5, description: "Mandatory individual project on Consumer Rights OR Social Issues OR Sustainable Development." }
    ],
    prescribedBooks: [
      "India and the Contemporary World - II (History) - NCERT",
      "Contemporary India - II (Geography) - NCERT",
      "Democratic Politics - II (Political Science) - NCERT",
      "Understanding Economic Development (Economics) - NCERT"
    ],
    criticalExclusions: [
      {
        chapter: "History Ch 4",
        topic: "The Age of Industrialisation",
        officialStatus: "Periodic Test Only",
        reasonAndCircular: "CBSE Syllabus Page 1: '(To be assessed as part of Periodic Assessment only)'.",
        studentAdvice: "Zero questions will be asked in the 80-mark Board Exam. Do NOT prepare for final boards."
      },
      {
        chapter: "History Ch 3",
        topic: "The Making of a Global World (Subtopics 2 to 4.4)",
        officialStatus: "Interdisciplinary Project Only",
        reasonAndCircular: "Syllabus Page 1: Only Subtopics 1 to 1.3 (Pre-modern world to Conquest, disease & trade) evaluated in Board Exam. Subtopics 2 to 4.4 are for Interdisciplinary Project.",
        studentAdvice: "Only study up to Smallpox biological warfare and food travels for board exam."
      },
      {
        chapter: "Geography Ch 7",
        topic: "Lifelines of National Economy (Theoretical Content)",
        officialStatus: "Interdisciplinary Project Only",
        reasonAndCircular: "Syllabus Page 1: 'Only map pointing to be evaluated in the Board Examination'.",
        studentAdvice: "Learn ONLY the Major Seaports and International Airports on the map. Theory questions will NOT appear in board exam."
      },
      {
        chapter: "Economics Ch 4",
        topic: "Globalisation (Subtopics: Production across countries, WTO, Struggle for Fair Globalisation)",
        officialStatus: "Interdisciplinary Project Only",
        reasonAndCircular: "Syllabus Page 2: Only 'What is Globalisation?' and 'Factors that have enabled Globalisation' are evaluated in Board Exam.",
        studentAdvice: "Focus on IT, container transport, and MNC definitions. Skip detailed WTO dispute history for board theory."
      },
      {
        chapter: "Economics Ch 5",
        topic: "Consumer Rights",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Assessed ONLY through Project Work (5 Marks Internal Assessment).",
        studentAdvice: "Zero questions appear in the 80-mark Board Theory paper."
      }
    ],
    mapWork: [
      {
        discipline: "History",
        chapter: "Ch 2: Nationalism in India",
        category: "Indian National Congress Sessions",
        locations: ["Calcutta (Sept 1920)", "Nagpur (Dec 1920)", "Madras (1927)"],
        examTips: "Calcutta = NCM proposal; Nagpur = NCM adoption; Madras = Simon Commission boycott."
      },
      {
        discipline: "History",
        chapter: "Ch 2: Nationalism in India",
        category: "Important Centers of Indian National Movement",
        locations: [
          "Champaran (Bihar) - Indigo Peasants Satyagraha",
          "Kheda (Gujarat) - Peasant Tax-Remission Satyagraha",
          "Ahmedabad (Gujarat) - Cotton Mill Workers Satyagraha",
          "Amritsar (Punjab) - Jallianwala Bagh Massacre (13 April 1919)",
          "Chauri Chaura (UP) - Violence calling off NCM",
          "Dandi (Gujarat) - Civil Disobedience Salt March"
        ],
        examTips: "Champaran is in northern Bihar; Kheda and Ahmedabad are close in Gujarat near Gulf of Khambhat."
      },
      {
        discipline: "Geography",
        chapter: "Ch 1: Resources & Development",
        category: "Major Soil Types of India",
        locations: ["Alluvial Soil (Northern Plains)", "Black/Regur Soil (Deccan Trap/Maharashtra)", "Red and Yellow Soil (Eastern Deccan)", "Laterite Soil (Western Ghats/Karnataka)", "Arid Soil (Western Rajasthan)", "Forest/Mountain Soil (Himalayas)"],
        examTips: "Identify shaded patches; Black soil covers Maharashtra, Gujarat, Malwa plateau."
      },
      {
        discipline: "Geography",
        chapter: "Ch 3: Water Resources",
        category: "Major Multipurpose Dams (Locating & Labeling)",
        locations: [
          "Salal (Chenab River, J&K)",
          "Bhakra Nangal (Satluj River, Himachal/Punjab)",
          "Tehri (Bhagirathi River, Uttarakhand)",
          "Rana Pratap Sagar (Chambal River, Rajasthan)",
          "Sardar Sarovar (Narmada River, Gujarat)",
          "Hirakud (Mahanadi River, Odisha)",
          "Nagarjuna Sagar (Krishna River, Telangana/Andhra)",
          "Tungabhadra (Tungabhadra River, Karnataka)"
        ],
        examTips: "Hirakud is the longest earthen dam in India (Odisha); Tehri is the highest dam in India (Uttarakhand)."
      },
      {
        discipline: "Geography",
        chapter: "Ch 4: Agriculture",
        category: "Major Crop Producing States",
        locations: [
          "Rice (Major: West Bengal, UP, Punjab)",
          "Wheat (Major: UP, Punjab, Haryana)",
          "Sugarcane (UP, Maharashtra)",
          "Tea (Assam, West Bengal/Darjeeling)",
          "Coffee (Karnataka - Nilgiris)",
          "Rubber (Kerala)",
          "Cotton (Maharashtra, Gujarat)",
          "Jute (West Bengal)"
        ],
        examTips: "Assam = Tea; Karnataka = Coffee; Kerala = Rubber; West Bengal = Rice & Jute."
      },
      {
        discipline: "Geography",
        chapter: "Ch 5: Minerals & Energy",
        category: "Iron Ore Mines",
        locations: ["Mayurbhanj (Odisha)", "Durg (Chhattisgarh)", "Bailadila (Chhattisgarh)", "Bellary (Karnataka)", "Kudremukh (Karnataka)"],
        examTips: "Bailadila is famous for highest grade hematite; Kudremukh deposits are 100% export oriented."
      },
      {
        discipline: "Geography",
        chapter: "Ch 5: Minerals & Energy",
        category: "Coal Mines & Oil Fields",
        locations: [
          "Coal: Raniganj (WB), Bokaro (Jharkhand), Talcher (Odisha), Neyveli Lignite (Tamil Nadu)",
          "Oil Fields: Digboi (Assam - oldest), Naharkatia (Assam), Mumbai High (Offshore), Bassien (Offshore), Kalol (Gujarat), Ankaleshwar (Gujarat)"
        ],
        examTips: "Neyveli in Tamil Nadu is famous for brown coal (lignite); Digboi is India's oldest producing oil field."
      },
      {
        discipline: "Geography",
        chapter: "Ch 5: Minerals & Energy",
        category: "Thermal & Nuclear Power Plants",
        locations: [
          "Thermal: Namrup (Assam), Singrauli (MP/UP border), Ramagundam (Telangana)",
          "Nuclear: Narora (UP), Kakrapara (Gujarat), Tarapur (Maharashtra - oldest), Kalpakkam (Tamil Nadu)"
        ],
        examTips: "Tarapur in Maharashtra was India's first nuclear power station."
      },
      {
        discipline: "Geography",
        chapter: "Ch 6: Manufacturing Industries",
        category: "Industrial Clusters",
        locations: [
          "Cotton: Mumbai, Indore, Surat, Kanpur, Coimbatore",
          "Iron & Steel: Durgapur, Bokaro, Jamshedpur, Bhilai, Vijayanagar, Salem",
          "Software Parks: Noida, Gandhinagar, Mumbai, Pune, Hyderabad, Bengaluru, Chennai, Thiruvananthapuram"
        ],
        examTips: "Salem is in Tamil Nadu; Bhilai in Chhattisgarh; Jamshedpur (TISCO) in Jharkhand."
      },
      {
        discipline: "Geography",
        chapter: "Ch 7: Lifelines of National Economy",
        category: "Major Sea Ports & International Airports",
        locations: [
          "Ports: Kandla (Deendayal - tidal), Mumbai, Marmagao (iron ore export), New Mangalore, Kochi (lagoon), Tuticorin, Chennai (artificial), Visakhapatnam (deepest landlocked), Paradip, Haldia",
          "Airports: Amritsar (Raja Sansi / Sri Guru Ram Das ji), Delhi (Indira Gandhi), Mumbai (Chhatrapati Shivaji), Chennai (Meenambakkam), Kolkata (Netaji Subhash Chandra Bose), Hyderabad (Rajiv Gandhi)"
        ],
        examTips: "Visakhapatnam is the deepest landlocked and protected port; Kandla was the first port developed after Independence."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 4. ENGLISH LANGUAGE & LITERATURE (CODE 184)
  // -------------------------------------------------------------------------
  english: {
    subjectId: "english",
    subjectName: "English Language & Literature",
    code: "184",
    theoryMarks: 80,
    internalMarks: 20,
    totalMarks: 100,
    duration: "3 Hours",
    aimsAndPhilosophy: [
      "Develops advanced communicative competence, creative expression, analytical text decoding, and high grammatical accuracy.",
      "Integrates literature with universal human values, empathy, leadership, and emotional intelligence."
    ],
    unitWeightages: [
      {
        unitNo: "Section A",
        unitName: "Reading Skills",
        marks: 20,
        chaptersIncluded: ["Discursive Passage (10M)", "Case-Based Factual Passage (10M)"],
        keyHighlights: "Discursive passage (400-450 words) + Case-based factual passage with charts/data (200-250 words). Assesses inference, vocabulary in context, analysis."
      },
      {
        unitNo: "Section B",
        unitName: "Writing Skills and Grammar",
        marks: 20,
        chaptersIncluded: [
          "Grammar (10M: Determiners, Tenses, Modals, Subject-Verb Concord, Reported Speech)",
          "Writing: Formal Letter (5M)",
          "Writing: Analytical Paragraph (5M)"
        ],
        keyHighlights: "10 out of 12 gap-filling/editing MCQs; Formal Letter (complaint, inquiry, editor, placing order in 100-120 words); Analytical Paragraph on graph/map/chart in 100-120 words."
      },
      {
        unitNo: "Section C",
        unitName: "Language through Literature",
        marks: 40,
        chaptersIncluded: [
          "Reference to Context (5M Prose + 5M Poetry = 10M)",
          "Short Answers: First Flight (4 × 3M = 12M)",
          "Short Answers: Footprints Without Feet (2 × 3M = 6M)",
          "Long Answer: First Flight (1 × 6M)",
          "Long Answer: Footprints Without Feet (1 × 6M)"
        ],
        keyHighlights: "Total 40 marks across First Flight and Footprints Without Feet. Evaluates extrapolation beyond text, character traits, thematic resolution."
      }
    ],
    typologyDesign: [
      {
        category: "Conceptual Understanding & Decoding (Reading)",
        description: "Comprehending unseen discursive and factual data passages, vocabulary extraction.",
        marks: 20,
        percentage: 25
      },
      {
        category: "Creative Expression & Conventions (Writing & Grammar)",
        description: "Formal letter format, data analytics synthesis, syntax and tense accuracy.",
        marks: 20,
        percentage: 25
      },
      {
        category: "Literature Appreciation, Extrapolation & Analysis",
        description: "Character sketches, thematic comparison, poetic device identification.",
        marks: 40,
        percentage: 50
      }
    ],
    chapterWeightages: [
      {
        chapterId: "eng_read",
        chapterNo: "Sec-A",
        chapterName: "Reading Skills (Discursive & Factual Passages)",
        unitNo: "Section A (20M)",
        marks: "20 Marks",
        marksNumeric: 20,
        questionDistribution: "10 Qs Discursive (10M) + 10 Qs Case-based Factual (10M)",
        priority: "High Yield",
        keyExamFocus: "Inference, vocabulary in context, textual evidence evaluation, title formulation, tone identification."
      },
      {
        chapterId: "eng_write",
        chapterNo: "Sec-B",
        chapterName: "Writing Skills & Integrated Grammar",
        unitNo: "Section B (20M)",
        marks: "20 Marks",
        marksNumeric: 20,
        questionDistribution: "Grammar MCQs/Gap filling (10M) + Formal Letter (5M) + Analytical Paragraph (5M)",
        priority: "High Yield",
        keyExamFocus: "Tenses, Modals, Subject-Verb Concord, Reported Speech; Formal letter format & tone; Data interpretation paragraph writing."
      },
      {
        chapterId: "eng_ff",
        chapterNo: "Sec-C1",
        chapterName: "First Flight (Prose & Drama)",
        unitNo: "Section C (40M)",
        marks: "22 Marks",
        marksNumeric: 22,
        questionDistribution: "1 Extract RTC (5M) + 3-4 Short Answers (9-12M) + 1 Long Answer (6M)",
        priority: "High Yield",
        keyExamFocus: "A Letter to God (Lencho's faith), Nelson Mandela (Apartheid & courage), Two Stories about Flying, From the Diary of Anne Frank, Glimpses of India, Mijbil the Otter, Madam Rides the Bus, The Sermon at Benares (Kisa Gotami & impermanence), The Proposal (Chekhov drama farcical satire)."
      },
      {
        chapterId: "eng_fp",
        chapterNo: "Sec-C2",
        chapterName: "First Flight (Poetry)",
        unitNo: "Section C (40M)",
        marks: "8 Marks",
        marksNumeric: 8,
        questionDistribution: "1 Poetry RTC (5M) + 1 Short Answer (3M)",
        priority: "Core Yield",
        keyExamFocus: "Dust of Snow, Fire and Ice, A Tiger in the Zoo, How to Tell Wild Animals, The Ball Poem, Amanda!, The Trees, Fog, The Tale of Custard the Dragon, For Anne Gregory. Poetic devices (metaphor, enjambment, alliteration, irony)."
      },
      {
        chapterId: "eng_fwf",
        chapterNo: "Sec-C3",
        chapterName: "Footprints Without Feet (Supplementary)",
        unitNo: "Section C (40M)",
        marks: "10 Marks",
        marksNumeric: 10,
        questionDistribution: "2 Short Answers (6M) + 1 Long Evaluative Answer (6M)",
        priority: "High Yield",
        keyExamFocus: "A Triumph of Surgery (Tricki & Mrs. Pumphrey), The Thief's Story (Hari Singh & Anil), The Midnight Visitor (Ausable spy wits), A Question of Trust (Horace Danby & lady in red), Footprints without Feet (Griffin scientist), The Making of a Scientist (Ebright), The Necklace (Matilda Loisel vanity), Bholi (education & self-respect), The Book That Saved the Earth (Think-Tank satire)."
      }
    ],
    internalAssessment: [
      { component: "Listening Skills (ASL)", marks: 5, description: "Audio comprehension passage / dialogue listening test." },
      { component: "Speaking Skills (ASL)", marks: 5, description: "Extempore, speech presentation, picture discussion, role-play." },
      { component: "Project Work & Portfolio", marks: 10, description: "Art-integrated language assignment and continuous notebook evaluation." }
    ],
    prescribedBooks: [
      "First Flight - Textbook for Class X (NCERT)",
      "Footprints Without Feet - Supplementary Reader for Class X (NCERT)",
      "Words and Expressions - II (Workbook for Class X, Units 1-4 & 7-11)"
    ],
    criticalExclusions: [
      {
        chapter: "First Flight",
        topic: "The Hundred Dresses – I & The Hundred Dresses – II (El Bsor Ester)",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Permanently removed from Class 10 First Flight textbook.",
        studentAdvice: "Wanda Petronski stories are completely deleted. Do not prepare."
      },
      {
        chapter: "First Flight Poetry",
        topic: "Animals (Poem by Walt Whitman)",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Removed from Class 10 syllabus.",
        studentAdvice: "Prepare the 10 official poems: Dust of Snow, Fire and Ice, Tiger in Zoo, Wild Animals, Ball Poem, Amanda, Trees, Fog, Custard the Dragon, For Anne Gregory."
      },
      {
        chapter: "Footprints Without Feet",
        topic: "The Hack Driver (Sinclair Lewis)",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Removed from supplementary reader.",
        studentAdvice: "Skip Oliver Lutkins / Bill Magnuson. Footprints has exactly 9 chapters in syllabus."
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 5. HINDI COURSE B (CODE 085)
  // -------------------------------------------------------------------------
  hindi: {
    subjectId: "hindi",
    subjectName: "Hindi Course B",
    code: "085",
    theoryMarks: 80,
    internalMarks: 20,
    totalMarks: 100,
    duration: "3 Hours",
    aimsAndPhilosophy: [
      "मातृभाषा के साथ द्वितीय भाषा के रूप में हिंदी में उच्च स्तरीय अभिव्यक्ति, समीक्षात्मक दृष्टिकोण व साहित्य रसास्वादन का विकास।",
      "दक्षता आधारित शिक्षा (Competency Based Learning) एवं कला समेकित अधिगम (Art-Integrated Learning) का समन्वय।"
    ],
    unitWeightages: [
      {
        unitNo: "खंड क",
        unitName: "अपठित बोध (14 अंक)",
        marks: 14,
        chaptersIncluded: ["दो अपठित गद्यांश (प्रत्येक ~200 शब्द, 7+7 अंक)"],
        keyHighlights: "गद्यांश पर आधारित बहुविकल्पीय (1×3=3 अंक) एवं लघूत्तरात्मक (2×2=4 अंक) प्रश्न।"
      },
      {
        unitNo: "खंड ख",
        unitName: "व्यावहारिक व्याकरण (16 अंक)",
        marks: 16,
        chaptersIncluded: [
          "पदबंध (4 अंक - 5 में से 4 प्रश्न)",
          "रचना के आधार पर वाक्य रूपांतरण (4 अंक - 5 में से 4 प्रश्न)",
          "समास (4 अंक - 5 में से 4 प्रश्न)",
          "मुहावरे (4 अंक - 5 में से 4 प्रश्न)"
        ],
        keyHighlights: "कुल 20 वस्तुपरक प्रश्नों में से 16 प्रश्न करने अनिवार्य।"
      },
      {
        unitNo: "खंड ग",
        unitName: "पाठ्यपुस्तक स्पर्श भाग-२ एवं पूरक पुस्तक संचयन भाग-२ (28 अंक)",
        marks: 28,
        chaptersIncluded: [
          "स्पर्श गद्य खंड (11 अंक: 5 MCQ + 6 लघु उत्तरात्मक)",
          "स्पर्श काव्य खंड (11 अंक: 5 MCQ + 6 काव्यबोध)",
          "संचयन भाग-२ (6 अंक: 3×2 दीर्घ उत्तरात्मक)"
        ],
        keyHighlights: "बड़े भाई साहब, डायरी का एक पन्ना, तँतारा-वामीरो, कबीर साखी, मीरा पद, मनुष्यता, पर्वत प्रदेश में पावस, तोप, कर चले हम फ़िदा, आत्मत्राण, हरिहर काका, सपनों के-से दिन, टोपी शुक्ला।"
      },
      {
        unitNo: "खंड घ",
        unitName: "रचनात्मक लेखन (22 अंक)",
        marks: 22,
        chaptersIncluded: [
          "अनुच्छेद लेखन (5 अंक - 120 शब्द)",
          "औपचारिक पत्र (5 अंक - 100 शब्द)",
          "सूचना लेखन (4 अंक - 60 शब्द)",
          "विज्ञापन लेखन (3 अंक - 40 शब्द)",
          "ई-मेल अथवा लघुकथा लेखन (5 अंक - 80/100 शब्द)"
        ],
        keyHighlights: "संकेत-बिंदु आधारित रचनात्मक अभिव्यक्ति, बॉक्स व प्रारूप की पूर्ण औपचारिकता।"
      }
    ],
    typologyDesign: [
      {
        category: "अपठित गद्यांश बोध व व्याकरणिक दक्षता (खंड क व ख)",
        description: "गद्यांश का विश्लेषण, पदबंध, वाक्य, समास व मुहावरों की सटीक पहचान।",
        marks: 30,
        percentage: 37.5
      },
      {
        category: "साहित्यिक मूल्यांकन व संवेदना (खंड ग)",
        description: "स्पर्श गद्य/काव्य व संचयन के पात्र, विचार, भाव-सौंदर्य व जीवन मूल्यों का परीक्षण।",
        marks: 28,
        percentage: 35
      },
      {
        category: "रचनात्मक एवं व्यावहारिक अभिव्यक्ति (खंड घ)",
        description: "अनुच्छेद, औपचारिक पत्र, सूचना, विज्ञापन, ई-मेल व लघुकथा लेखन क्षमता।",
        marks: 22,
        percentage: 27.5
      }
    ],
    chapterWeightages: [
      {
        chapterId: "hin_reading",
        chapterNo: "खंड-क",
        chapterName: "अपठित गद्यांश (दो गद्यांश)",
        unitNo: "खंड क (14 अंक)",
        marks: "14 Marks",
        marksNumeric: 14,
        questionDistribution: "गद्यांश 1 (7 अंक) + गद्यांश 2 (7 अंक) - बहुविकल्पी व लघूत्तरात्मक",
        priority: "High Yield",
        keyExamFocus: "शीर्षक चयन, केंद्रीय भाव, शब्दावली व संदर्भगत अर्थ, तार्किक निष्कर्ष।"
      },
      {
        chapterId: "hin_grammar",
        chapterNo: "खंड-ख",
        chapterName: "व्यावहारिक व्याकरण (चार विषय)",
        unitNo: "खंड ख (16 अंक)",
        marks: "16 Marks",
        marksNumeric: 16,
        questionDistribution: "पदबंध (4 अंक) + वाक्य रूपांतरण (4 अंक) + समास (4 अंक) + मुहावरे (4 अंक)",
        priority: "High Yield",
        keyExamFocus: "पदबंध के 5 भेद, सरल/संयुक्त/मिश्र वाक्य रूपांतरण, तत्पुरुष/कर्मधारय/द्विगु/द्वंद्व/बहुव्रीहि समास विग्रह, पाठ्यपुस्तक स्पर्श पर आधारित मुहावरे व वाक्य प्रयोग।"
      },
      {
        chapterId: "hin_sparsh_gadh",
        chapterNo: "खंड-ग1",
        chapterName: "स्पर्श भाग-2: गद्य खंड",
        unitNo: "खंड ग (28 अंक)",
        marks: "11 Marks",
        marksNumeric: 11,
        questionDistribution: "पठित गद्यांश (5 अंक) + बोधात्मक प्रश्न (2 × 3 = 6 अंक)",
        priority: "High Yield",
        keyExamFocus: "बड़े भाई साहब (प्रेमचंद - बाल मनोविज्ञान व शिक्षा), डायरी का एक पन्ना (सीताराम सेकसरिया - स्वतंत्रता संग्राम), तँतारा-वामीरो कथा (लीलाधर मंडलोई - त्याग व प्रेम), तीसरी कसम के शिल्पकार शैलेंद्र (प्रहलाद अग्रवाल), अब कहाँ दूसरे के दुख से दुखी होने वाले (निदा फ़ाज़ली - प्रकृति व संवेदना), पतझर में टूटी पत्तियाँ (रवींद्र केलेकर - ज़ेन की देन व गिन्नी का सोना), कारतूस (हबीब तनवीर - वज़ीर अली का साहस)।"
      },
      {
        chapterId: "hin_sparsh_kavya",
        chapterNo: "खंड-ग2",
        chapterName: "स्पर्श भाग-2: काव्य खंड",
        unitNo: "खंड ग (28 अंक)",
        marks: "11 Marks",
        marksNumeric: 11,
        questionDistribution: "पठित पद्यांश (5 अंक) + भाव व शिल्प सौंदर्य प्रश्न (2 × 3 = 6 अंक)",
        priority: "High Yield",
        keyExamFocus: "साखी (कबीर - गुरु महिमा, अहंकार त्याग), पद (मीरा - कृष्ण भक्ति), मनुष्यता (मैथिलीशरण गुप्त - परोपकार व उदारता), पर्वत प्रदेश में पावस (सुमित्रानंदन पंत - प्रकृति का सजीव चित्रण), तोप (वीरेन डंगवाल - अतीत की चेतावनी), कर चले हम फ़िदा (कैफ़ी आज़मी - देशप्रेम व बलिदान), आत्मत्राण (रवींद्रनाथ ठाकुर - निर्भयता की प्रार्थना)। [नोट: बिहारी के दोहे व महादेवी वर्मा विलोपित हैं]"
      },
      {
        chapterId: "hin_sanchayan",
        chapterNo: "खंड-ग3",
        chapterName: "पूरक पुस्तक: संचयन भाग-2",
        unitNo: "खंड ग (28 अंक)",
        marks: "6 Marks",
        marksNumeric: 6,
        questionDistribution: "दीर्घ उत्तरात्मक प्रश्न (3 में से 2 प्रश्न × 3 अंक = 6 अंक)",
        priority: "Core Yield",
        keyExamFocus: "हरिहर काका (मिथिलेश्वर - पारिवारिक स्वार्थ व वृद्धों की उपेक्षा), सपनों के-से दिन (गुरदयाल सिंह - बचपन की स्मृतियाँ व मास्टर प्रीतम चंद), टोपी शुक्ला (राही मासूम रज़ा - बाल सुलभ मित्रता व इफ़्फ़न की दादी का स्नेह)।"
      },
      {
        chapterId: "hin_writing",
        chapterNo: "खंड-घ",
        chapterName: "रचनात्मक एवं व्यावहारिक लेखन",
        unitNo: "खंड घ (22 अंक)",
        marks: "22 Marks",
        marksNumeric: 22,
        questionDistribution: "अनुच्छेद (5 अंक) + पत्र (5 अंक) + सूचना (4 अंक) + विज्ञापन (3 अंक) + लघुकथा/ई-मेल (5 अंक)",
        priority: "High Yield",
        keyExamFocus: "संकेत बिंदुओं पर आधारित समसामयिक अनुच्छेद; औपचारिक पत्र (शिकायती, संपादकीय); बॉक्स सहित सूचना लेखन; चित्र व आकर्षक स्लोगन सहित विज्ञापन लेखन; उद्देश्यपूर्ण लघुकथा अथवा औपचारिक ई-मेल।"
      }
    ],
    internalAssessment: [
      { component: "सामयिक आकलन (Periodic Assessment)", marks: 5, description: "विद्यालय स्तरीय आवधिक परीक्षाएं।" },
      { component: "बहुविध आकलन (Multiple Assessment)", marks: 5, description: "मौखिक प्रश्नोत्तरी, वाद-विवाद, कविता पाठ, भूमिका निर्वहन (Role Play)।" },
      { component: "पोर्टफोलियो (Portfolio)", marks: 5, description: "कक्षा कार्य पुस्तिका, स्वनिर्मित परियोजनाएं व कला-समेकित कार्य।" },
      { component: "श्रवण एवं वाचन (Listening & Speaking)", marks: 5, description: "श्रवण कौशल (2.5 अंक) + वाचन कौशल (2.5 अंक) का प्रत्यक्ष परीक्षण।" }
    ],
    prescribedBooks: [
      "स्पर्श, भाग–२, एन.सी.ई.आर.टी., नई दिल्ली (नवीनतम संस्करण)",
      "संचयन, भाग–२, एन.सी.ई.आर.टी., नई दिल्ली (नवीनतम संस्करण)"
    ],
    criticalExclusions: [
      {
        chapter: "स्पर्श भाग-२ (काव्य)",
        topic: "बिहारी – दोहे (पूरा पाठ)",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "सीबीएसई आधिकारिक पाठ्यक्रम 2026-27 पृष्ठ 9 पर स्पष्ट नोट: 'निम्नलिखित पाठों से प्रश्न नहीं पूछे जाएँगे' - बिहारी-दोहे (पूरा पाठ)।",
        studentAdvice: "बिहारी के दोहों को बोर्ड परीक्षा हेतु बिल्कुल न पढ़ें। इनसे कोई प्रश्न नहीं आएगा।"
      },
      {
        chapter: "स्पर्श भाग-२ (काव्य)",
        topic: "महादेवी वर्मा – मधुर-मधुर मेरे दीपक जल (पूरा पाठ)",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "सीबीएसई आधिकारिक पाठ्यक्रम 2026-27 पृष्ठ 9 नोट: पूर्णतः विलोपित।",
        studentAdvice: "इस कविता से बोर्ड परीक्षा में कोई प्रश्न नहीं पूछा जाएगा।"
      },
      {
        chapter: "स्पर्श भाग-२ (गद्य)",
        topic: "अंतोन चेख़व – गिरगिट (पूरा पाठ)",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "सीबीएसई आधिकारिक पाठ्यक्रम 2026-27 पृष्ठ 9 नोट: पूर्णतः विलोपित।",
        studentAdvice: "ओचुमेलाव वाले इस पाठ को बोर्ड परीक्षा हेतु याद करने में समय नष्ट न करें।"
      },
      {
        chapter: "पूरक पुस्तक संचयन भाग-२",
        topic: "संचयन के समस्त पाठ",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "सीबीएसई आधिकारिक नोट: 'पुस्तक में कोई परिवर्तन नहीं। कोई भी पाठ नहीं हटाया गया है।'",
        studentAdvice: "संचयन के तीनों पाठ (हरिहर काका, सपनों के-से दिन, टोपी शुक्ला) शत-प्रतिशत पाठ्यक्रम में हैं।"
      }
    ]
  },

  // -------------------------------------------------------------------------
  // 6. INFORMATION TECHNOLOGY (CODE 402)
  // -------------------------------------------------------------------------
  it: {
    subjectId: "it",
    subjectName: "Information Technology",
    code: "402",
    theoryMarks: 50,
    internalMarks: 50,
    totalMarks: 100,
    duration: "2 Hours",
    aimsAndPhilosophy: [
      "Industry-aligned skill curriculum focusing on digital office productivity, relational database management, and web cyber safety.",
      "50 Marks Theory Examination (Part A 10M + Part B 40M) combined with 50 Marks Hands-on Practical Examination & Viva."
    ],
    unitWeightages: [
      {
        unitNo: "Part A",
        unitName: "Employability Skills",
        marks: 10,
        chaptersIncluded: [
          "Unit 1: Communication Skills-II",
          "Unit 2: Self-Management Skills-II",
          "Unit 3: ICT Skills-II",
          "Unit 4: Entrepreneurial Skills-II",
          "Unit 5: Green Skills-II"
        ],
        keyHighlights: "Verbal/non-verbal communication, stress management & self-motivation, operating systems & maintenance, entrepreneurial myths & traits, green economy & sustainable development."
      },
      {
        unitNo: "Part B",
        unitName: "Subject Specific Skills (Vocational)",
        marks: 40,
        chaptersIncluded: [
          "Unit 1: Digital Documentation (Advanced) (8M)",
          "Unit 2: Electronic Spreadsheet (Advanced) (10M)",
          "Unit 3: Database Management System (12M)",
          "Unit 4: Web Applications and Security (10M)"
        ],
        keyHighlights: "Styles, templates, images, mail merge; Subtotals, consolidate, Scenarios, Goal Seek, Solver, Macros; RDBMS concepts, primary/foreign keys, DDL/DML SQL queries, forms & reports; Computer accessibility, network types, cybersecurity threats & ergonomics."
      }
    ],
    chapterWeightages: [
      {
        chapterId: "it_parta",
        chapterNo: "Part-A",
        chapterName: "Employability Skills (Units 1 to 5)",
        unitNo: "Part A (10M)",
        marks: "10 Marks",
        marksNumeric: 10,
        questionDistribution: "4 Objective Qs (1M each) + 3 Short Answer Qs (2M each out of 5)",
        priority: "Core Yield",
        keyExamFocus: "Communication barriers & 7 Cs, stress management techniques, operating systems (file management), characteristics of successful entrepreneurs, green economy initiatives."
      },
      {
        chapterId: "it_doc",
        chapterNo: "Part-B1",
        chapterName: "Digital Documentation (Advanced)",
        unitNo: "Part B (40M)",
        marks: "8 Marks",
        marksNumeric: 8,
        questionDistribution: "Objective Qs (2M) + Short/Long Qs (6M)",
        priority: "Core Yield",
        keyExamFocus: "Create and apply Styles in document, insert and use images (wrapping, grouping), create and customize Table of Contents (TOC), implement Mail Merge (data source, main document, merge fields)."
      },
      {
        chapterId: "it_calc",
        chapterNo: "Part-B2",
        chapterName: "Electronic Spreadsheet (Advanced)",
        unitNo: "Part B (40M)",
        marks: "10 Marks",
        marksNumeric: 10,
        questionDistribution: "Objective Qs (3M) + Short/Long Qs (7M)",
        priority: "High Yield",
        keyExamFocus: "Consolidate data from multiple sheets, create Subtotals, 'What-If' analysis tools (Scenarios, Goal Seek, Solver), linking spreadsheet data & hyperlinks, create and record Macros."
      },
      {
        chapterId: "it_dbms",
        chapterNo: "Part-B3",
        chapterName: "Database Management System (DBMS / RDBMS)",
        unitNo: "Part B (40M)",
        marks: "12 Marks",
        marksNumeric: 12,
        questionDistribution: "Objective Qs (4M) + Short/Long Qs (8M)",
        priority: "High Yield",
        keyExamFocus: "RDBMS concepts (table, record, field, primary key, foreign key, composite key), create tables using Wizard and Design view, SQL commands (SELECT, INSERT, UPDATE, DELETE, WHERE, ORDER BY), create Forms and Reports."
      },
      {
        chapterId: "it_web",
        chapterNo: "Part-B4",
        chapterName: "Web Applications and Security",
        unitNo: "Part B (40M)",
        marks: "10 Marks",
        marksNumeric: 10,
        questionDistribution: "Objective Qs (3M) + Short/Long Qs (7M)",
        priority: "High Yield",
        keyExamFocus: "Computer accessibility options (FilterKeys, StickyKeys, SoundSentry), network fundamentals (LAN, WAN, client-server, P2P), instant messaging & blog creation, online transactions & security threats (phishing, malware), workplace safety, fire hazards & ergonomics."
      }
    ],
    typologyDesign: [
      {
        category: "Objective Type Questions (Part A + Part B)",
        description: "Direct MCQs, fill in blanks, one-word terminology, keyboard shortcuts.",
        marks: 24,
        percentage: 48
      },
      {
        category: "Short Answer Type Questions (Part A + Part B)",
        description: "Conceptual definitions, software navigation steps, feature comparisons (2 marks each).",
        marks: 16,
        percentage: 32
      },
      {
        category: "Long Answer / Competency Based Questions (Part B)",
        description: "Scenario-based case studies, practical problem solving, SQL query writing (4 marks each).",
        marks: 10,
        percentage: 20
      }
    ],
    internalAssessment: [
      { component: "Hands-on Practical Examination", marks: 30, description: "Advanced word processing task (10 marks) + Spreadsheet modeling (10 marks) + DBMS SQL queries (10 marks)." },
      { component: "Project File / Portfolio", marks: 10, description: "Printouts of documented activities and database schema designs." },
      { component: "Viva Voce", marks: 10, description: "Oral examination on vocational skills and hands-on lab competencies." }
    ],
    prescribedBooks: [
      "CBSE Employability Skills Class X Student Handbook",
      "CBSE Information Technology (Subject Code 402) Study Material Class X",
      "LibreOffice / OpenOffice Documentation Guidelines"
    ],
    criticalExclusions: [
      {
        chapter: "Database Management System",
        topic: "Advanced SQL Joins (OUTER JOIN, CROSS JOIN) & Complex Nested Subqueries",
        officialStatus: "Strictly Excluded / Deleted",
        reasonAndCircular: "Syllabus for Class 10 is strictly restricted to single-table queries and simple joins.",
        studentAdvice: "Focus on single-table SELECT, WHERE, ORDER BY and primary/foreign key definitions."
      }
    ]
  }
};
