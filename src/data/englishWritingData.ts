// =========================================================================
// CBSE CLASS 10 ENGLISH WRITING LAB MASTER DATA (2026-2027)
// Official Section B Writing Skills (10 Marks Total):
// 1. FORMAL LETTER WRITING (5 Marks) — 100 to 120 words
//    - Letter to the Editor (Civic, social, environmental causes)
//    - Letter of Complaint (Commercial goods & Public civic services)
//    - Letter of Enquiry (Courses, tours, hostel facilities, coaching)
//    - Letter Placing an Order (Sports goods, library books, lab equipment)
// 2. ANALYTICAL PARAGRAPH WRITING (5 Marks) — 100 to 120 words
//    - Data Charts, Bar Graphs, Pie Charts, Line Graphs, Comparative Surveys
// =========================================================================

export interface WritingFormatBlock {
  sectionName: string;
  expectedContent: string;
  sampleSnippet: string;
  examinerTip: string;
}

export interface WritingSampleModel {
  id: string;
  title: string;
  letterSubtype?: "editor" | "complaint" | "enquiry" | "order" | "data-analysis";
  promptQuestion: string;
  wordCount: number;
  modelAnswerText: string;
  marksBreakdown: {
    formatMarks: number;
    contentMarks: number;
    expressionMarks: number;
    accuracyMarks: number;
  };
  goldenOpeningLine?: string;
  goldenClosingLine?: string;
  tabularData?: {
    headers: string[];
    rows: string[][];
  };
  keyVocabularyUsed: string[];
  annotatedHighlights: { part: string; comment: string }[];
}

export interface WritingMistakePitfall {
  mistakeTitle: string;
  wrongUsage: string;
  correctUsage: string;
  markDeduction: string;
  whyExaminerDeducts: string;
}

export interface WritingSectionGuide {
  id: string;
  title: string;
  type: "formal-letter" | "analytical-paragraph";
  emoji: string;
  wordLimit: string;
  marksTotal: number;
  markingRubricOverview: string;
  formatSkeleton: WritingFormatBlock[];
  modelSamples: WritingSampleModel[];
  proVocabulary: { wordOrPhrase: string; meaningAndUsage: string }[];
  commonPitfalls: WritingMistakePitfall[];
}

export const ENGLISH_WRITING_DATA: WritingSectionGuide[] = [
  // =========================================================================
  // 1. FORMAL LETTER WRITING (5 MARKS)
  // =========================================================================
  {
    id: "writing-formal-letter",
    title: "Formal Letter Writing (Editor, Complaint, Enquiry, Order)",
    type: "formal-letter",
    emoji: "📜",
    wordLimit: "100 - 120 words",
    marksTotal: 5,
    markingRubricOverview: "Official CBSE Rubric: Format = 1 Mark (Sender address, Date, Receiver address, Subject, Salutation, Subscription) | Content = 2 Marks (Relevance, ideas, causes, logical development) | Expression = 2 Marks (1M Grammatical accuracy & spelling + 1M Fluency, style & coherence). Word limit penalty applies if exceeding 140 words.",
    formatSkeleton: [
      {
        sectionName: "1. Sender's Address",
        expectedContent: "2-3 lines specifying house/flat number, colony/street, and city with PIN. Do NOT write your name here. Avoid end-line punctuation in modern block format.",
        sampleSnippet: "42-B, Green Avenue\nCivil Lines, New Delhi - 110054",
        examinerTip: "If address is given in prompt, you MUST use it. If not given, write 'Examination Hall, City X'."
      },
      {
        sectionName: "2. Date",
        expectedContent: "Alphanumeric format with spelled-out month. Never write short slashes like 24/10/26.",
        sampleSnippet: "24 October 2026  (or October 24, 2026)",
        examinerTip: "Leave a one-line gap above and below the date for visual elegance."
      },
      {
        sectionName: "3. Receiver's Designation & Address",
        expectedContent: "Official title on line 1, organization/newspaper on line 2, locality and city on line 3.",
        sampleSnippet: "The Editor\nThe Times of India\nBahadur Shah Zafar Marg, New Delhi - 110002",
        examinerTip: "Always use 'The' before the designation ('The Editor', 'The Principal', 'The Sales Manager')."
      },
      {
        sectionName: "4. Subject Line",
        expectedContent: "Crisp, underlined or bold summary of the letter's purpose in 4 to 8 words. Capitalize key words.",
        sampleSnippet: "Subject: Menace of Open Garbage Dumps in Civil Lines",
        examinerTip: "Do not write complete sentences. Use noun phrases ('Inquiry regarding...', 'Complaint against...')."
      },
      {
        sectionName: "5. Salutation",
        expectedContent: "Formal and respectful. Modern CBSE block style omits the comma.",
        sampleSnippet: "Sir / Madam  (or Dear Sir / Dear Madam)",
        examinerTip: "Avoid over-familiar greetings like 'Respected Sir' or 'Hello Sir'."
      },
      {
        sectionName: "6. Body Paragraph 1: The Golden Hook",
        expectedContent: "State the purpose of writing immediately. For Editor: cite the newspaper. For Order/Complaint: cite invoice/quotation.",
        sampleSnippet: "Through the columns of your esteemed daily, I wish to draw the attention of the concerned authorities towards...",
        examinerTip: "Do not beat around the bush; establish context in the first two sentences."
      },
      {
        sectionName: "7. Body Paragraph 2: Core Details & Evidence",
        expectedContent: "Elaborate causes, impacts, specific issues, dates, model numbers, or insert a clean table for orders.",
        sampleSnippet: "Stagnant heaps of garbage have turned into breeding grounds for disease-carrying mosquitoes, causing acute respiratory and dengue risks...",
        examinerTip: "Use bullet points or tabular rows if listing items or specific queries."
      },
      {
        sectionName: "8. Body Paragraph 3: Constructive Appeal & Remedy",
        expectedContent: "State clearly what action is expected. For Editor: public awareness/appeal. For Complaint: replacement within 7 days.",
        sampleSnippet: "I hope your newspaper provides ample coverage to this grievance so that the municipal authorities take swift remedial action.",
        examinerTip: "Never ask the Editor to repair roads or clean drains—they only publish news!"
      },
      {
        sectionName: "9. Complimentary Close & Signature",
        expectedContent: "Formal subscription on left margin, followed by your name and designation in parentheses.",
        sampleSnippet: "Yours faithfully,\nArunima Sharma\n(President, Resident Welfare Association)",
        examinerTip: "CRITICAL: 'Yours' NEVER has an apostrophe! Writing 'Your's' loses 0.5 mark immediately."
      }
    ],
    modelSamples: [
      {
        id: "fl-sample-editor-1",
        title: "Letter to Editor: Menace of Open Garbage Dumps",
        letterSubtype: "editor",
        promptQuestion: "You are Ananya/Anmol, a resident of 14, Rajendra Nagar, New Delhi. Write a letter to the Editor of The Hindustan Times, drawing attention to the growing menace of open garbage heaps and stray animals in your locality.",
        wordCount: 114,
        goldenOpeningLine: "Through the columns of your esteemed daily, I wish to draw the attention of the concerned civic authorities towards the alarming menace of open garbage heaps in Rajendra Nagar.",
        goldenClosingLine: "I earnestly hope this issue will be given due prominence in your columns to awaken the authorities into taking swift sanitization measures.",
        modelAnswerText: `14, Rajendra Nagar
New Delhi - 110060

24 October 2026

The Editor
The Hindustan Times
K.G. Marg, New Delhi - 110001

Subject: Menace of open garbage dumps and stray animals in Rajendra Nagar

Sir

Through the columns of your esteemed daily, I wish to draw the urgent attention of the Municipal Corporation of Delhi towards the alarming deterioration of sanitary conditions in Rajendra Nagar.

For the past three weeks, municipal sanitation workers have failed to clear the community vats. Massive piles of rotting waste now overflow onto the main thoroughfare, emitting a foul stench and turning the neighborhood into an active breeding ground for mosquitoes. Stray cattle and dogs rummage through plastic refuse, posing grave hazards to school children and commuters. The risk of dengue and cholera outbreaks is imminent.

I earnestly hope your publication will highlight this civic crisis so that the municipal authorities execute immediate waste clearance and install covered bins.

Yours faithfully
Ananya Sen
(Resident Representative)`,
        marksBreakdown: {
          formatMarks: 1,
          contentMarks: 2,
          expressionMarks: 1,
          accuracyMarks: 1
        },
        keyVocabularyUsed: ["deterioration", "sanitation", "thoroughfare", "stench", "imminent outbreak", "remedial action"],
        annotatedHighlights: [
          { part: "Format", comment: "Perfect 9-part left-aligned block format; alphanumeric date; crisp underlined subject." },
          { part: "Content", comment: "Explicitly details duration (3 weeks), health hazards (dengue), and stray cattle menace." },
          { part: "Tone", comment: "Respectful and civic-minded; addresses the Editor as a mediator to awaken authorities." }
        ]
      },
      {
        id: "fl-sample-editor-2",
        title: "Letter to Editor: Adolescent Mental Health & Exam Stress",
        letterSubtype: "editor",
        promptQuestion: "You are Kabir/Kavya of Model Town, Jaipur. Write a letter to the Editor of The Indian Express expressing deep concern over the alarming surge in academic anxiety and burnout among secondary school students, suggesting holistic remedies.",
        wordCount: 118,
        goldenOpeningLine: "Through your esteemed columns, I wish to voice serious concern regarding the escalating psychological distress and exam-induced anxiety among adolescents.",
        goldenClosingLine: "I hope this letter sparks a constructive national dialogue on reforming competitive pressure and prioritizing youth mental wellbeing.",
        modelAnswerText: `72, Sunshine Enclave
Model Town, Jaipur - 302017

15 November 2026

The Editor
The Indian Express
Tonk Road, Jaipur - 302015

Subject: Alarming surge in academic stress and psychological burnout among adolescents

Sir

Through your esteemed columns, I wish to voice serious concern over the escalating psychological distress and anxiety afflicting students facing upcoming board examinations.

In an intensely competitive academic landscape, teenagers are subjected to unrealistic parental expectations and punishing coaching schedules. The relentless obsession with marks over holistic comprehension has triggered widespread sleep deprivation, panic attacks, and clinical depression. The tragic surge in student burnout calls for systemic intervention.

Schools must mandatorily introduce certified mental health counselors, stress-management workshops, and mindfulness sessions into the daily curriculum. Parents must also be counseled to celebrate effort rather than rank. I hope your newspaper champions this vital dialogue to humanize our education system.

Yours faithfully
Kabir Verma
(Youth Health Advocate)`,
        marksBreakdown: {
          formatMarks: 1,
          contentMarks: 2,
          expressionMarks: 1,
          accuracyMarks: 1
        },
        keyVocabularyUsed: ["psychological distress", "relentless obsession", "holistic comprehension", "systemic intervention", "mindfulness"],
        annotatedHighlights: [
          { part: "Opening", comment: "Modern 2026 relevant theme with precise vocabulary." },
          { part: "Solutions", comment: "Provides actionable remedies: school counselors, mindfulness, parental sensitization." }
        ]
      },
      {
        id: "fl-sample-complaint-1",
        title: "Letter of Complaint: Defective Laptop Purchase",
        letterSubtype: "complaint",
        promptQuestion: "You are Rohan/Rohini of 88, Sector 15, Chandigarh. You purchased an UltraBook laptop from Digital World, Sector 17, which developed motherboard and display defects within 15 days. Write a formal letter of complaint demanding immediate replacement.",
        wordCount: 112,
        goldenOpeningLine: "I am writing this letter to lodge a formal complaint regarding the defective UltraBook Pro laptop purchased from your showroom on 10 October 2026 vide Cash Memo No. DW/7821.",
        goldenClosingLine: "I request you to replace the defective laptop with a brand new unit within 7 business days, failing which I shall be constrained to approach the Consumer Redressal Forum.",
        modelAnswerText: `88, Sector 15-A
Chandigarh - 160015

25 October 2026

The Sales Manager
M/s Digital World Electronics
Sector 17-C, Chandigarh - 160017

Subject: Complaint regarding defective UltraBook Pro 14 (Cash Memo: DW/7821)

Sir

I am writing to express my extreme disappointment regarding the UltraBook Pro 14 laptop purchased from your esteemed showroom on 10 October 2026 vide Cash Memo No. DW/7821, carrying a two-year comprehensive warranty.

Within a fortnight of purchase, the machine began malfunctioning. The display flickers intermittently, and the laptop reboots unexpectedly every thirty minutes. Yesterday, the system completely failed to boot up, indicating a severe motherboard defect. My online classes and project work have been completely paralyzed.

Since the product is well within the replacement guarantee period, I request you to replace the defective laptop with a brand new unit within seven days, failing which I will be constrained to file a grievance before the Consumer Disputes Redressal Forum.

Yours sincerely
Rohan Kapoor
(Contact: 98765-XXXXX)`,
        marksBreakdown: {
          formatMarks: 1,
          contentMarks: 2,
          expressionMarks: 1,
          accuracyMarks: 1
        },
        keyVocabularyUsed: ["comprehensive warranty", "intermittently", "motherboard defect", "consumer redressal forum", "constrained"],
        annotatedHighlights: [
          { part: "Technical Precision", comment: "Cites invoice number, warranty status, and exact symptoms of failure." },
          { part: "Closing", comment: "Firm legal recourse warning (Consumer Forum) while retaining courteous professional decorum." }
        ]
      },
      {
        id: "fl-sample-complaint-2",
        title: "Letter of Complaint: Contaminated Water Supply",
        letterSubtype: "complaint",
        promptQuestion: "You are Sumit/Sumita, Secretary of RWA, Pocket-B, Mayur Vihar, Delhi. Write an official complaint letter to the Executive Engineer, Delhi Jal Board, regarding irregular and heavily contaminated municipal water supply.",
        wordCount: 115,
        goldenOpeningLine: "I am writing on behalf of the residents of Pocket-B to register a grave complaint regarding the polluted and erratic tap water supply in our locality.",
        goldenClosingLine: "We urge the department to inspect the distribution pipelines immediately and restore potable water supply to avert a health catastrophe.",
        modelAnswerText: `The Resident Welfare Association
Pocket-B, Mayur Vihar Phase-II
Delhi - 110091

18 October 2026

The Executive Engineer
Delhi Jal Board, Zonal Office
Patparganj, Delhi - 110092

Subject: Grievance regarding contaminated and erratic water supply in Pocket-B

Sir

On behalf of the residents of Pocket-B, Mayur Vihar, I wish to register a formal complaint regarding the persistent delivery of contaminated municipal tap water for the past ten days.

Water is supplied for barely twenty minutes each morning with extremely low pressure. Worse still, the water is dark, turbid, and carries a foul sewage odor, making it completely unfit for consumption. Several elderly residents and infants have already developed severe gastroenteritis and typhoid symptoms. It appears that an underground sewage line has ruptured into the potable water pipeline.

I urge you to dispatch an inspection team immediately to repair the leakage and supply clean drinking water via emergency tankers until normal supply is restored.

Yours faithfully
Sumita Mehra
(General Secretary, RWA)`,
        marksBreakdown: {
          formatMarks: 1,
          contentMarks: 2,
          expressionMarks: 1,
          accuracyMarks: 1
        },
        keyVocabularyUsed: ["persistent delivery", "turbid", "potable water", "gastroenteritis", "sanitary catastrophe", "emergency tankers"],
        annotatedHighlights: [
          { part: "Civic Authority Format", comment: "Accurate address to Executive Engineer with departmental zone." },
          { part: "Urgency", comment: "Identifies root cause (sewage infiltration) and demands concrete interim relief (tankers)." }
        ]
      },
      {
        id: "fl-sample-enquiry-1",
        title: "Letter of Enquiry: Foreign Language Certification Course",
        letterSubtype: "enquiry",
        promptQuestion: "You are Priya/Pranav of 12, Mall Road, Shimla. You wish to join a Diploma Course in German Language at the Max Mueller Linguistic Institute, Chandigarh. Write a letter of enquiry seeking necessary details regarding the program.",
        wordCount: 114,
        goldenOpeningLine: "I came across your advertisement in The Tribune dated 12 October 2026 regarding your upcoming B1/B2 German Certification courses and wish to seek further details.",
        goldenClosingLine: "Kindly dispatch the official prospectus and enrollment brochure at your earliest convenience to enable me to register in time.",
        modelAnswerText: `12, Mall Road
Shimla - 171001

20 October 2026

The Director
Max Mueller Linguistic Institute
Sector 8-C, Chandigarh - 160009

Subject: Inquiry regarding German Language Diploma Course (Batch 2026–2027)

Sir

I came across your advertisement in The Tribune dated 12 October 2026 regarding the German Language Certification courses and wish to express my keen interest in enrolling for the upcoming session.

As I am aspiring to pursue higher engineering studies in Germany, I would appreciate receiving comprehensive details regarding the curriculum:
1. Duration of the course and commencement date of the fresh batch.
2. Weekend vs weekday class schedules and batch sizes.
3. Total fee structure, installment plans, and examination fees.
4. Availability of native speakers for oral proficiency practice.
5. Provision of hostel accommodation or hybrid online attendance.

Kindly send across the prospectus and registration form to my postal address or email (priya.s@email.com) at the earliest to facilitate my timely admission.

Yours faithfully
Priya Sharma`,
        marksBreakdown: {
          formatMarks: 1,
          contentMarks: 2,
          expressionMarks: 1,
          accuracyMarks: 1
        },
        keyVocabularyUsed: ["linguistic institute", "comprehensive details", "commencement date", "oral proficiency", "prospectus", "facilitate"],
        annotatedHighlights: [
          { part: "Structure", comment: "Bulleted numbered query points make the letter readable and scoring." },
          { part: "Tone", comment: "Professional, goal-oriented inquiry with clear contact details." }
        ]
      },
      {
        id: "fl-sample-order-1",
        title: "Letter Placing an Order: School Sports Equipment",
        letterSubtype: "order",
        promptQuestion: "You are Vikram/Vineeta, Sports Secretary of St. Xavier's Senior Secondary School, Meerut. Write a letter to M/s Bharat Sports Goods, Jalandhar, placing an order for sports articles for the school sports club. Specify items, terms, and institutional discount.",
        wordCount: 116,
        goldenOpeningLine: "With reference to your quotation letter dated 5 October 2026 and subsequent telephonic discussion, we are pleased to place a formal order for sports equipment.",
        goldenClosingLine: "We trust that the equipment supplied will be of premium quality and packed securely. Payment will be released via RTGS upon physical inspection.",
        tabularData: {
          headers: ["S.No.", "Item Description", "Brand / Specifications", "Quantity"],
          rows: [
            ["1.", "Cricket Bats (English Willow)", "SG Master 5000", "12 Nos."],
            ["2.", "Leather Cricket Balls (Red)", "Kookaburra Turf", "4 Dozen"],
            ["3.", "Football Balls (Size 5)", "Nivia Shining Star", "15 Nos."],
            ["4.", "Badminton Rackets", "Yonex Carbonex 8000", "10 Pairs"]
          ]
        },
        modelAnswerText: `St. Xavier's Senior Secondary School
Civil Lines, Meerut - 250001

16 October 2026

The Sales Manager
M/s Bharat Sports Goods Ltd.
Sports Market, Jalandhar - 144001

Subject: Supply order for school sports equipment (Ref: BSG/QT/2026)

Sir

With reference to your quotation letter dated 5 October 2026 and our subsequent discussions, we are pleased to place an order for the supply of the following sports articles for our annual tournament:

[TABLE_SPECIFICATIONS]
1. Cricket Bats (English Willow) | SG Master 5000 | 12 Nos.
2. Leather Cricket Balls (Red) | Kookaburra Turf | 4 Dozen
3. Footballs (Size 5 FIFA Approved) | Nivia Shining Star | 15 Nos.
4. Badminton Rackets | Yonex Carbonex 8000 | 10 Pairs

Kindly ensure that all items are brand new, thoroughly inspected for manufacturing defects, and packed in reinforced crates. The delivery must reach our school campus by 5 November 2026. As agreed, a 15% institutional discount has been factored into the invoice. Full payment will be transferred via RTGS within three working days of safe delivery.

Yours faithfully
Vikram Malhotra
(Sports Secretary)`,
        marksBreakdown: {
          formatMarks: 1,
          contentMarks: 2,
          expressionMarks: 1,
          accuracyMarks: 1
        },
        keyVocabularyUsed: ["formal quotation", "subsequent discussions", "reinforced crates", "institutional discount", "RTGS remittance"],
        annotatedHighlights: [
          { part: "Tabular Clarity", comment: "Tabular format with S.No, Item, Brand, and Quantity is the gold standard for order letters." },
          { part: "Commercial Terms", comment: "Specifies delivery deadline, defect policy, discount percentage, and payment terms." }
        ]
      }
    ],
    proVocabulary: [
      { wordOrPhrase: "Esteemed daily", meaningAndUsage: "Respected, prestigious newspaper; used in opening sentence of Letter to Editor." },
      { wordOrPhrase: "Draw the urgent attention of", meaningAndUsage: "Compel civic officers to focus on a severe issue." },
      { wordOrPhrase: "Constrained to approach", meaningAndUsage: "Forced into legal or consumer court action if grievance is ignored." },
      { wordOrPhrase: "At your earliest convenience", meaningAndUsage: "Polite formal request for prompt reply in inquiry and complaint letters." },
      { wordOrPhrase: "Vide Cash Memo No.", meaningAndUsage: "Legal reference citing proof of purchase or invoice receipt." },
      { wordOrPhrase: "Institutional discount", meaningAndUsage: "Special price concession granted to educational or non-profit organizations." },
      { wordOrPhrase: "Remedial measures", meaningAndUsage: "Corrective steps taken to repair damage or solve a public crisis." },
      { wordOrPhrase: "Avert a catastrophe", meaningAndUsage: "Prevent a dangerous disaster or outbreak from happening." }
    ],
    commonPitfalls: [
      {
        mistakeTitle: "The Apostrophe in 'Yours' Blunder",
        wrongUsage: "Your's faithfully / Yours' sincerely",
        correctUsage: "Yours faithfully / Yours sincerely (NO apostrophe!)",
        markDeduction: "-0.5 Mark in Format",
        whyExaminerDeducts: "'Yours' is a possessive pronoun, not a contraction. Adding an apostrophe is an elementary grammatical error."
      },
      {
        mistakeTitle: "Asking the Editor to Repair Roads or Pipes",
        wrongUsage: "I request you to please send workers to clean our colony's drains.",
        correctUsage: "I hope your newspaper publishes this issue to awaken the municipal authorities to clear the drains.",
        markDeduction: "-1 Mark in Content & Coherence",
        whyExaminerDeducts: "The Editor is a journalist who reports news; only government departments (MCD, PWD, Jal Board) perform physical repairs."
      },
      {
        mistakeTitle: "Incorrect Date Notation",
        wrongUsage: "24/10/26 or 24-10-2026",
        correctUsage: "24 October 2026  OR  October 24, 2026",
        markDeduction: "-0.5 Mark in Format",
        whyExaminerDeducts: "CBSE formal writing requires formal alphanumeric notation with spelled-out month names."
      },
      {
        mistakeTitle: "Missing Subject or Paragraph Indentation Disarray",
        wrongUsage: "Mixing indented paragraphs with left-aligned headers without consistent margins.",
        correctUsage: "Strict left-aligned block style: every section and paragraph begins flush against the left margin.",
        markDeduction: "-0.5 to -1 Mark in Format & Layout",
        whyExaminerDeducts: "Modern CBSE evaluation requires uniform left-aligned block formatting."
      }
    ]
  },

  // =========================================================================
  // 2. ANALYTICAL PARAGRAPH WRITING (5 MARKS)
  // =========================================================================
  {
    id: "writing-analytical-paragraph",
    title: "Analytical Paragraph Writing (Charts, Graphs & Surveys)",
    type: "analytical-paragraph",
    emoji: "📊",
    wordLimit: "100 - 120 words",
    marksTotal: 5,
    markingRubricOverview: "Official CBSE Rubric: Content = 2 Marks (Paraphrased overview, high/low points, contrasts, trends) | Expression & Accuracy = 2 Marks (Grammatical coherence, cohesive transitions, data comparison vocabulary) | Format & Layout = 1 Mark (Single unified paragraph or structured 3-tier flow with title).",
    formatSkeleton: [
      {
        sectionName: "1. Introductory Sentence (The Paraphrase)",
        expectedContent: "Restate the prompt's data chart in your own words. Identify what the chart represents, the timeline, and the demographic group.",
        sampleSnippet: "The supplied bar chart delineates the transformative shift in reading preferences among urban adolescents between 2018 and 2024.",
        examinerTip: "Never copy the prompt word-for-word. Substitute synonyms ('illustrates', 'delineates', 'depicts')."
      },
      {
        sectionName: "2. Body Sentence: Key Trends & Dominant Data",
        expectedContent: "Highlight the highest peak, the steepest fall, or the most noticeable pattern using exact percentages or ratios.",
        sampleSnippet: "Digital e-books registered an astounding threefold surge, skyrocketing from a modest 18% in 2018 to a dominant 58% by 2024...",
        examinerTip: "Focus on trends rather than listing every single number from the chart."
      },
      {
        sectionName: "3. Body Sentence: Contrasts, Parity & Nuance",
        expectedContent: "Contrast opposing variables. Use comparative transition markers ('Conversely', 'In sharp contrast', 'Whereas').",
        sampleSnippet: "Conversely, traditional paperback readership witnessed a precipitous decline, plummeting from 65% down to a meager 22%...",
        examinerTip: "Group similar data points together to demonstrate analytical maturity."
      },
      {
        sectionName: "4. Concluding Overview: Synthesis without Bias",
        expectedContent: "Provide a balanced, objective final deduction summarizing the macro trend. Do NOT offer personal opinions ('I think').",
        sampleSnippet: "Overall, the data underscores a decisive transition toward portable digital reading formats, while physical books are increasingly relegated to niche collectors.",
        examinerTip: "Never introduce personal pronouns ('I', 'we', 'in my opinion') in analytical paragraphs."
      }
    ],
    modelSamples: [
      {
        id: "ap-sample-1",
        title: "Analytical Paragraph: Shift in Student Reading Habits (2018–2024)",
        letterSubtype: "data-analysis",
        promptQuestion: "The following comparative bar chart illustrates the shift in high school student reading preferences between 2018 and 2024 across three categories: Physical Printed Books, Digital E-Books, and Audiobooks. Write an analytical paragraph in 100-120 words summarizing the main trends.",
        wordCount: 116,
        modelAnswerText: `The given comparative bar chart delineates the transformative shift in reading preferences among secondary school students between 2018 and 2024 across printed books, digital e-books, and audiobooks.

A conspicuous pattern emerges regarding digital reading adoption. In 2018, physical printed paperbacks commanded a dominant 68% share of student reading time, while e-books and audiobooks accounted for a modest 22% and 10% respectively. Over the six-year trajectory, a dramatic reversal occurred: e-book consumption skyrocketed to 54%, and audiobooks experienced a threefold surge to 28%. Conversely, printed book readership suffered a precipitous decline, plummeting to an all-time low of 18% in 2024.

Overall, the data unequivocally demonstrates that digital and audio formats have supplanted traditional paperbacks, driven by smartphone ubiquity and portable interactive accessibility.`,
        marksBreakdown: {
          formatMarks: 1,
          contentMarks: 2,
          expressionMarks: 1,
          accuracyMarks: 1
        },
        keyVocabularyUsed: ["delineates", "conspicuous pattern", "commanded a dominant share", "threefold surge", "precipitous decline", "supplanted"],
        annotatedHighlights: [
          { part: "Opening", comment: "Accurate paraphrase of the chart without copying prompt phrasing." },
          { part: "Comparative Contrast", comment: "Contrasts 2018 baseline with 2024 outcome using sharp statistical opposites." },
          { part: "Conclusion", comment: "Objective synthesis summarizing the macro technological transition without personal bias." }
        ]
      },
      {
        id: "ap-sample-2",
        title: "Analytical Paragraph: Screen Time vs Academic Scores",
        letterSubtype: "data-analysis",
        promptQuestion: "A recent survey of 1,000 Class 10 students examined the correlation between daily non-academic smartphone screen time and board exam aggregate scores. Write an analytical paragraph analyzing the findings.",
        wordCount: 114,
        modelAnswerText: `The provided analytical survey examines the inverse relationship between daily non-academic smartphone screen time and academic aggregate percentages among secondary school candidates.

The data reveals an unmistakable downward trajectory in academic performance as recreational screen duration expands. Students restricting screen time to under 1.5 hours daily secured an exemplary mean aggregate of 88.5%, with high concentration and consistent revision cycles. Conversely, students logging between 2 to 4 hours of daily screen time registered an average score of 72.4%. The sharpest depreciation occurred in the cohort exceeding 4.5 hours daily, whose average aggregate plunged precipitously to 54.2%.

In summary, the survey conclusively establishes a direct inverse correlation between excessive screen indulgence and scholastic achievement, highlighting digital discipline as a key academic determinant.`,
        marksBreakdown: {
          formatMarks: 1,
          contentMarks: 2,
          expressionMarks: 1,
          accuracyMarks: 1
        },
        keyVocabularyUsed: ["inverse relationship", "unmistakable downward trajectory", "exemplary mean aggregate", "sharpest depreciation", "conclusively establishes"],
        annotatedHighlights: [
          { part: "Statistical Flow", comment: "Covers top (88.5%), middle (72.4%), and bottom cohorts (54.2%) systematically." },
          { part: "Deduction", comment: "Uses sophisticated academic terminology ('inverse correlation', 'scholastic achievement')." }
        ]
      },
      {
        id: "ap-sample-3",
        title: "Analytical Paragraph: Electric Vehicle Adoption in Metros (2020–2026)",
        letterSubtype: "data-analysis",
        promptQuestion: "The given line graph shows the percentage share of Electric Vehicles (EVs) in total new vehicle registrations across four major metropolitan cities (Delhi, Mumbai, Bengaluru, Chennai) between 2020 and 2026. Write an analytical paragraph summarizing the trends.",
        wordCount: 115,
        modelAnswerText: `The presented line graph illustrates the upward trajectory of Electric Vehicle (EV) registrations across four Indian metropolitan hubs from 2020 to 2026.

Throughout the recorded timeframe, all four cities witnessed a marked transition toward electric mobility. Delhi established an early and commanding lead, escalating steadily from 3.2% of total vehicle sales in 2020 to an impressive peak of 21.4% by 2026, accelerated by municipal subsidy policies. Bengaluru followed closely, rising from 2.5% to 18.6%, spurred by tech-corridor charging networks. In contrast, Mumbai and Chennai experienced sluggish initial uptake below 2% until 2022, after which both cities recorded steep incline curves to finish at 14.8% and 12.5% respectively.

Overall, metropolitan EV adoption has transitioned from an experimental niche to a mainstream commercial alternative, with Delhi maintaining decisive regional supremacy.`,
        marksBreakdown: {
          formatMarks: 1,
          contentMarks: 2,
          expressionMarks: 1,
          accuracyMarks: 1
        },
        keyVocabularyUsed: ["upward trajectory", "commanding lead", "accelerated by", "sluggish initial uptake", "steep incline curves", "mainstream commercial alternative"],
        annotatedHighlights: [
          { part: "Comparative Analysis", comment: "Compares leaders (Delhi, Bengaluru) with late-blooming hubs (Mumbai, Chennai)." },
          { part: "Trend Interpretation", comment: "Explains both the numerical progression and the contextual market maturity." }
        ]
      }
    ],
    proVocabulary: [
      { wordOrPhrase: "A conspicuous pattern emerges", meaningAndUsage: "A prominent, unmistakable trend or statistical movement is visible." },
      { wordOrPhrase: "Skyrocketed / Plunged precipitously", meaningAndUsage: "Used to describe dramatic rises vs steep, abrupt falls." },
      { wordOrPhrase: "Commanded a dominant share", meaningAndUsage: "Accounted for the vast majority or top percentage of total data." },
      { wordOrPhrase: "In stark contrast to", meaningAndUsage: "Sharp comparative transition word between two opposing variables." },
      { wordOrPhrase: "Threefold surge", meaningAndUsage: "An increase by three times (300%) over the specified baseline." },
      { wordOrPhrase: "Direct inverse correlation", meaningAndUsage: "When an increase in one variable directly leads to a decrease in the other." }
    ],
    commonPitfalls: [
      {
        mistakeTitle: "Injecting Personal Pronouns & Biases",
        wrongUsage: "In my opinion, students should read more paperbacks because computers hurt eyes.",
        correctUsage: "The data demonstrates a clear transition toward digital formats due to accessibility.",
        markDeduction: "-1 Mark in Content & Expression",
        whyExaminerDeducts: "Analytical paragraphs require objective empirical reporting; subjective personal preaching is penalized."
      },
      {
        mistakeTitle: "Regurgitating Every Single Data Point in a Boring List",
        wrongUsage: "In 2018 books were 68%. In 2019 books were 60%. In 2020 books were 50%...",
        correctUsage: "Group the baseline year (2018) with the terminal year (2024) to highlight the overarching trend.",
        markDeduction: "-1 Mark in Coherence & Analytical Depth",
        whyExaminerDeducts: "The prompt tests analytical synthesis, not mechanical copying of table numbers."
      }
    ]
  }
];
