// =========================================================================
// CBSE CLASS 10 ENGLISH GRAMMAR CLINIC DATA (2026-2027)
// Comprehensive 0-to-100% Pedagogical Suite:
// 1. TENSES: Absolute Zero-Knowledge Foundation to Class 10 Board Traps
// 2. MODALS: Expression, Obligation, Probability & Polite Social Codes
// 3. SUBJECT-VERB CONCORD: Complete 20-Rule Master Deck from Official PPT
// 4. REPORTED SPEECH: Complete Transformations, Exceptions & Dialogue Rules
// =========================================================================

export interface GrammarMistakeCard {
  id: string;
  incorrect: string;
  correct: string;
  ruleExplanation: string;
  trapType: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM";
}

export interface GrammarExercise {
  id: string;
  question: string;
  type: "fill-blank" | "editing" | "transformation" | "mcq" | "dialogue-completion";
  options?: string[];
  correctAnswer: string;
  explanation: string;
  boardYearTag?: string;
}

export interface GrammarRuleBlock {
  ruleNo?: number;
  ruleTitle: string;
  plainEnglishExplanation: string;
  officialRule: string;
  formulaOrPattern: string;
  whyItMatters?: string;
  goldenExamples: { sentence: string; note: string; isCorrect?: boolean }[];
  examTip?: string;
  howToDecide?: string;
}

export interface GrammarTopic {
  id: string;
  title: string;
  syllabusCategory: "Tenses" | "Modals" | "Subject-Verb Concord" | "Reported Speech";
  emoji: string;
  shortTagline: string;
  zeroKnowledgeIntro: {
    whatIsIt: string;
    concreteAnalogy: string;
    whyVerbsChange: string;
    coreMentalModel: string;
  };
  toddlerAnalogy: {
    hook: string;
    scenario: string;
    ahaRule: string;
  };
  ruleBlocks: GrammarRuleBlock[];
  mistakeCards: GrammarMistakeCard[];
  practiceExercises: GrammarExercise[];
  examinerSecretTips: string[];
}

export const ENGLISH_GRAMMAR_DATA: GrammarTopic[] = [
  // =========================================================================
  // TOPIC 1: TENSES (FROM 0 KNOWLEDGE TO 100% BOARD MASTERY)
  // =========================================================================
  {
    id: "grammar-tenses",
    title: "Tenses (The Time Machine: 0 to 100% Board Masterclass)",
    syllabusCategory: "Tenses",
    emoji: "⏳",
    shortTagline: "Learn from scratch: 3 Dimensions of Time, 4 Camera Lenses, 12 Formulas, and Board Traps.",
    zeroKnowledgeIntro: {
      whatIsIt: "A 'Tense' is simply the form a VERB takes to tell you WHEN an action happened (Past, Present, or Future) and HOW COMPLETE that action was at that moment (was it a quick habit, ongoing live stream, finished checklist, or running stopwatch?).",
      concreteAnalogy: "Think of your verb as an actor who wears different costumes depending on what scene of the movie is playing. In the past scene, the actor wears medieval armour ('went / ate / studied'). In the live present scene, the actor wears gym clothes with active running shoes ('goes / is eating / studies'). In the future scene, the actor holds a flight boarding pass ('will go / will eat / will study').",
      whyVerbsChange: "Verbs have 5 standard costume changes in English: V1 (Base form: eat/play), V2 (Simple Past: ate/played), V3 (Past Participle/Finished stamp: eaten/played), V4 (Active -ing: eating/playing), and V5 (Singular Present -s/-es: eats/plays). Choosing the wrong costume ruins the entire sentence!",
      coreMentalModel: "Every tense is created by combining ONE TIME (Present, Past, Future) with ONE CAMERA ANGLE (Simple, Continuous, Perfect, Perfect Continuous). 3 Times × 4 Angles = exactly 12 Tenses in English."
    },
    toddlerAnalogy: {
      hook: "The 4 Camera Lenses of Time!",
      scenario: "1. Simple Lens (Snapshot Photo 📸): Captures daily habits, general facts, or one-time completed moments.\n2. Continuous Lens (Video Camera 🎥): Captures live action moving right in front of your eyes (always has '-ing').\n3. Perfect Lens (Finished Trophy 🏆): Action is completely done, finished, and dusted, but you are proudly looking at the result right now!\n4. Perfect Continuous Lens (Running Stopwatch ⏱️): Action started in the past, has been running for minutes/hours, and is STILL clicking right now!",
      ahaRule: "Formula of the Universe: Time Anchor Words (yesterday, since 2020, tomorrow, while, usually) are your GPS coordinates. They dictate which verb costume is legally permitted."
    },
    ruleBlocks: [
      {
        ruleNo: 1,
        ruleTitle: "Present Simple (The Snapshot of Facts & Habits)",
        plainEnglishExplanation: "Use this for things that are true permanently (like the sun rising) or habits you repeat again and again (like brushing teeth). Never use it for actions happening just for a few seconds right now.",
        officialRule: "Expresses habitual actions, universal scientific truths, proverbs, permanent states, and scheduled future events.",
        formulaOrPattern: "Subject + V1 (base) / V5 (V1 + s/es) + Object | Neg: Subject + do/does + not + V1",
        whyItMatters: "Most common tense in English; carries universal truth marks in CBSE reported speech.",
        goldenExamples: [
          { sentence: "The Earth revolves around the Sun.", note: "Universal scientific fact: ALWAYS present simple." },
          { sentence: "Rohan wakes up at 6:00 AM every morning.", note: "Daily repetitive habit marked by 'every morning'." },
          { sentence: "Water boils at 100°C. (NOT: Water is boiling at 100°C)", note: "Permanent law of nature." }
        ],
        examTip: "Signal Words: always, usually, generally, frequently, daily, every week, seldom, never, once a month."
      },
      {
        ruleNo: 2,
        ruleTitle: "Present Continuous (The Live Video Stream)",
        plainEnglishExplanation: "Use this when the action is unfolding LIVE right now as you speak, or for temporary situations currently underway.",
        officialRule: "Denotes an action going on at the time of speaking, or temporary actions in progress over a period.",
        formulaOrPattern: "Subject + is / am / are + V4 (V1 + ing) + Object",
        whyItMatters: "Examiners test the 'Stative Verb Trap' here: mental state verbs cannot take '-ing'!",
        goldenExamples: [
          { sentence: "Look! The children are playing in the rain.", note: "'Look!' is a live sensory anchor signaling an ongoing event." },
          { sentence: "My brother is preparing for his board exams these days.", note: "Temporary ongoing situation." }
        ],
        examTip: "CRITICAL STATIVE VERB TRAP: Verbs of perception, emotion, and thought (love, hate, know, believe, understand, smell, seem, hear) DO NOT take continuous form in standard grammar! Say 'I understand this concept', NEVER 'I am understanding this concept'!"
      },
      {
        ruleNo: 3,
        ruleTitle: "Present Perfect (The Finished Trophy with Present Impact)",
        plainEnglishExplanation: "The action was completed in the past, but the result or trophy matters RIGHT NOW in the present. You do NOT mention an exact past time!",
        officialRule: "Indicates an action completed in the immediate past, or past actions whose result is connected to the present moment.",
        formulaOrPattern: "Subject + has (singular) / have (plural/I) + V3 (past participle) + Object",
        whyItMatters: "CBSE's #1 Most Tested Trap: Never use exact past time words (yesterday, ago, in 2022) with Present Perfect!",
        goldenExamples: [
          { sentence: "I have finished my homework; can I go out now?", note: "Finished past action with direct present impact." },
          { sentence: "She has just submitted her examination paper.", note: "'Just' indicates immediate past completion." }
        ],
        examTip: "NEVER SAY: 'I have seen him yesterday.' ❌ (Since 'yesterday' is a closed past time, you must say: 'I saw him yesterday.' ✅)"
      },
      {
        ruleNo: 4,
        ruleTitle: "Present Perfect Continuous (The Running Stopwatch)",
        plainEnglishExplanation: "The action started in the past, continued for a duration of time, and is STILL continuing right now as you speak.",
        officialRule: "Emphasizes the duration of an activity that began in the past and continues up to the present moment.",
        formulaOrPattern: "Subject + has/have + been + V4 (V1 + ing) + [since / for + Time]",
        whyItMatters: "Tests your mastery of 'SINCE' (pinpoint clock/calendar start) versus 'FOR' (duration length).",
        goldenExamples: [
          { sentence: "It has been raining since morning.", note: "'morning' is a starting point on the clock/calendar → use 'since'." },
          { sentence: "The students have been writing the test for two hours.", note: "'two hours' is a measured duration → use 'for'." }
        ],
        examTip: "Quick Test: 'Since' + When did it start? (Monday, 2021, 5 PM, childhood) | 'For' + How long did it last? (3 days, 10 years, 20 minutes)."
      },
      {
        ruleNo: 5,
        ruleTitle: "Past Simple (The Locked Historical Archive)",
        plainEnglishExplanation: "Use this for an event that happened at a definite time in the past and is now completely closed and finished. No present link.",
        officialRule: "Indicates an action completed in the past at a definite time, accompanied by or implying a past time adverb.",
        formulaOrPattern: "Subject + V2 + Object | Neg: Subject + did + not + V1 | Q: Did + Subject + V1?",
        whyItMatters: "The 'Did + V1' rule is tested in nearly every editing/omission passage.",
        goldenExamples: [
          { sentence: "India achieved independence in 1947.", note: "'in 1947' is a definite closed past time anchor." },
          { sentence: "He did not attend the meeting yesterday. (NOT: did not attended)", note: "After 'did/didn't', the verb ALWAYS resets to base V1 form!" }
        ],
        examTip: "Signal Words: yesterday, ago, last night, last week, in 1999, earlier today, the other day."
      },
      {
        ruleNo: 6,
        ruleTitle: "Past Continuous (The Interrupted Movie Scene)",
        plainEnglishExplanation: "An action was actively in progress at some point in the past when another shorter event suddenly happened or interrupted it.",
        officialRule: "Denotes an action going on at some point in the past, often forming the background for a shorter event in Simple Past.",
        formulaOrPattern: "Subject + was (singular/I) / were (plural/you) + V4 (V1 + ing) + Object",
        whyItMatters: "Frequently paired with 'when' or 'while' in complex sentence analysis.",
        goldenExamples: [
          { sentence: "I was reading a novel when the doorbell rang.", note: "Reading was ongoing (was reading); the bell ring interrupted (rang)." },
          { sentence: "While mother was cooking, the children were doing their homework.", note: "Two parallel ongoing past actions." }
        ],
        examTip: "'While' usually introduces the continuous past action; 'When' usually introduces the sudden simple past interruption."
      },
      {
        ruleNo: 7,
        ruleTitle: "Past Perfect (The 'Grandfather' Earlier Past)",
        plainEnglishExplanation: "When two different things happened in the past, the one that finished EARLIER takes 'had + V3'. The second action takes Simple Past (V2).",
        officialRule: "When two actions in the past are compared in chronological sequence, the earlier action takes Past Perfect (had + V3) and the subsequent takes Simple Past (V2).",
        formulaOrPattern: "1st Earlier Past Action: had + V3 | 2nd Later Past Action: V2 (Simple Past)",
        whyItMatters: "Board exam favorite in paragraph narration and cause-effect sentences.",
        goldenExamples: [
          { sentence: "The train had left before we reached the railway station.", note: "1st: Train left (had left); 2nd: We reached (reached)." },
          { sentence: "By the time the doctor arrived, the patient had recovered.", note: "1st: Recovery occurred (had recovered); 2nd: Doctor arrived (arrived)." }
        ],
        examTip: "Ask yourself: Which event happened first? Slap 'had + V3' onto the older event!"
      },
      {
        ruleNo: 8,
        ruleTitle: "Past Perfect Continuous (The Past Endurance Test)",
        plainEnglishExplanation: "An action started in the past, had been going on for some duration, and was still going on right before another past event happened.",
        officialRule: "Used for an action that began before a certain point in the past and continued up to that point or just before it.",
        formulaOrPattern: "Subject + had + been + V4 (V1 + ing) + [since / for + Time]",
        whyItMatters: "Explains past fatigue, state, or duration leading up to a past climax.",
        goldenExamples: [
          { sentence: "She had been studying for four hours before she finally took a break.", note: "Continuous four-hour effort before the past break." },
          { sentence: "His eyes were red because he had been crying.", note: "Ongoing past action causing a past visible condition." }
        ]
      },
      {
        ruleNo: 9,
        ruleTitle: "Future Simple (The Crystal Ball & Instant Decisions)",
        plainEnglishExplanation: "Use this for predictions about the future, promises, or decisions made on the spot at the very moment of speaking.",
        officialRule: "Refers to an action that is yet to happen in the future, often introduced by will/shall.",
        formulaOrPattern: "Subject + will / shall + V1 (base form) + Object",
        whyItMatters: "Crucial for writing formal enquiry, order, or complaint letters.",
        goldenExamples: [
          { sentence: "I will call you as soon as I reach the hotel.", note: "Instant promise regarding future time." },
          { sentence: "It will rain tomorrow according to the forecast.", note: "Prediction." }
        ],
        examTip: "Modern English uses 'will' for all persons; 'shall' is typically reserved for formal polite suggestions with 'I' and 'we' ('Shall we begin?')."
      },
      {
        ruleNo: 10,
        ruleTitle: "Future Continuous (The Future Scheduled Broadcast)",
        plainEnglishExplanation: "An action that will be actively in progress at a specific time in the future.",
        officialRule: "Represents an action as going on at some point in future time, or normal anticipated future routines.",
        formulaOrPattern: "Subject + will + be + V4 (V1 + ing) + Object",
        whyItMatters: "Used in analytical descriptions and diary entries projecting ahead.",
        goldenExamples: [
          { sentence: "At 9:00 PM tonight, we will be watching the live cricket final.", note: "Action in active progress at that future moment." },
          { sentence: "Tomorrow this time, I will be writing my board exam.", note: "Ongoing future event." }
        ]
      },
      {
        ruleNo: 11,
        ruleTitle: "Future Perfect (The Future Target Deadline)",
        plainEnglishExplanation: "By a certain future deadline or time limit, an action will be 100% completed and finished.",
        officialRule: "Indicates that an action will be completed by a certain specified point of time in the future.",
        formulaOrPattern: "Subject + will + have + V3 + [by / before + Future Time]",
        whyItMatters: "Always triggered by 'BY + Future Time' (e.g., 'by next year', 'by 2027').",
        goldenExamples: [
          { sentence: "By next month, I will have completed the entire English syllabus.", note: "Target completed before next month arrives." },
          { sentence: "By the year 2030, scientists will have discovered new energy sources.", note: "Target completion deadline." }
        ],
        examTip: "Whenever you see 'By tomorrow / By next week / By 5 PM', immediately reach for Future Perfect ('will have + V3')!"
      },
      {
        ruleNo: 12,
        ruleTitle: "Future Perfect Continuous (The Future Milestone Duration)",
        plainEnglishExplanation: "Looks forward to a date in the future and counts how long an ongoing action will have been running up to that exact milestone.",
        officialRule: "Describes an ongoing action that will continue up until a specific point in the future.",
        formulaOrPattern: "Subject + will + have + been + V4 + [for + Duration] + [by + Future Time]",
        whyItMatters: "Advanced board grammar construction.",
        goldenExamples: [
          { sentence: "By next July, Mr. Sharma will have been teaching in this school for 25 years.", note: "25-year duration milestone reached at a future date." }
        ]
      },
      {
        ruleNo: 13,
        ruleTitle: "The Conditional Clause Tense Trap (The 'Double Will' Blunder)",
        plainEnglishExplanation: "In conditional sentences containing 'IF', 'WHEN', 'AS SOON AS', or 'UNLESS', NEVER put 'will' in the condition clause! Use Simple Present in the condition clause, and 'will' in the main clause!",
        officialRule: "In Type 1 conditional sentences, the subordinate clause (if-clause) takes Simple Present, and the main clause takes Simple Future.",
        formulaOrPattern: "IF + Subject + V1/V5 (Present Simple), Subject + will + V1 (Main Clause)",
        whyItMatters: "One of the top 3 most common grammar errors corrected by CBSE board examiners.",
        goldenExamples: [
          { sentence: "If you work hard, you will succeed. (NOT: If you will work hard...)", note: "No 'will' inside the 'if' condition!" },
          { sentence: "As soon as the bell rings, the students will leave. (NOT: will ring)", note: "Subordinate time clause takes present simple." }
        ],
        examTip: "Golden Rule: 'If' and 'Will' can NEVER sit in the same room (clause) together!"
      },
      {
        ruleNo: 14,
        ruleTitle: "The Reported Speech Tense Backshift & Universal Fact Exception",
        plainEnglishExplanation: "When reporting someone's words in the past ('He said that...'), move all present tenses one step back into the past! BUT if the statement is a UNIVERSAL TRUTH or SCIENTIFIC FACT, DO NOT change the tense!",
        officialRule: "If the reporting verb is in the past, the tense of the direct speech changes to its corresponding past tense, UNLESS it expresses a universal truth, habitual fact, or historical event.",
        formulaOrPattern: "Direct: 'The sun rises in the east.' → Indirect: He said that the sun rises in the east (NO CHANGE!).",
        whyItMatters: "Guaranteed 1 to 2 marks in the CBSE Reported Speech section.",
        goldenExamples: [
          { sentence: "The teacher said, 'Light travels in a straight line.' → The teacher said that light travels in a straight line.", note: "Physical law: tense remains present." },
          { sentence: "Ravi said, 'I am unwell.' → Ravi said that he was unwell.", note: "Personal state: backshifts from 'am' to 'was'." }
        ]
      }
    ],
    mistakeCards: [
      {
        id: "ten-m1",
        incorrect: "I have received your letter yesterday.",
        correct: "I received your letter yesterday.",
        ruleExplanation: "Definite past time marker 'yesterday' strictly forbids the Present Perfect tense. Use Simple Past (V2: received).",
        trapType: "Past Time Anchor Violation",
        severity: "CRITICAL"
      },
      {
        id: "ten-m2",
        incorrect: "He is living in Delhi since five years.",
        correct: "He has been living in Delhi for five years.",
        ruleExplanation: "Action continuing from past into present requires Present Perfect Continuous ('has been living'), and duration requires 'for', not 'since'.",
        trapType: "Since/For & Continuous Tense Confusion",
        severity: "CRITICAL"
      },
      {
        id: "ten-m3",
        incorrect: "When I reached home, my mother already cooked dinner.",
        correct: "When I reached home, my mother had already cooked dinner.",
        ruleExplanation: "Mother finished cooking BEFORE the narrator arrived home. The earlier of two past actions requires Past Perfect ('had already cooked').",
        trapType: "Grandfather Tense (Past Perfect) Chronology",
        severity: "HIGH"
      },
      {
        id: "ten-m4",
        incorrect: "If it will rain tomorrow, the school will remain closed.",
        correct: "If it rains tomorrow, the school will remain closed.",
        ruleExplanation: "In conditional 'if' clauses, never use 'will'. Use Simple Present (V1/V5: rains) to refer to future conditions.",
        trapType: "Double Will Conditional Trap",
        severity: "CRITICAL"
      },
      {
        id: "ten-m5",
        incorrect: "I am knowing the answer to this question.",
        correct: "I know the answer to this question.",
        ruleExplanation: "'Know' is a stative verb of cognition. It cannot be used in continuous (-ing) tenses in standard English.",
        trapType: "Stative Verb Continuous Error",
        severity: "HIGH"
      },
      {
        id: "ten-m6",
        incorrect: "He did not went to school last Friday.",
        correct: "He did not go to school last Friday.",
        ruleExplanation: "After the auxiliary 'did' / 'didn't', the main verb ALWAYS resets to its base form (V1: go).",
        trapType: "Did + V2 Grammatical Redundancy",
        severity: "CRITICAL"
      },
      {
        id: "ten-m7",
        incorrect: "By the end of this month, I will complete my syllabus.",
        correct: "By the end of this month, I will have completed my syllabus.",
        ruleExplanation: "'By + future time limit' signals a future completion deadline, which demands Future Perfect tense ('will have completed').",
        trapType: "By + Time Future Perfect Mandate",
        severity: "HIGH"
      },
      {
        id: "ten-m8",
        incorrect: "The teacher said that honesty was the best policy.",
        correct: "The teacher said that honesty is the best policy.",
        ruleExplanation: "Universal moral truths and proverbs NEVER backshift into past tense in reported speech.",
        trapType: "Universal Fact Tense Retention",
        severity: "MEDIUM"
      }
    ],
    practiceExercises: [
      {
        id: "ten-ex1",
        question: "Fill in the blank: The train ______ (depart) before we reached the platform.",
        type: "fill-blank",
        correctAnswer: "had departed",
        explanation: "Two past events: departure occurred before arrival. Earlier past event requires Past Perfect (had departed).",
        boardYearTag: "CBSE 2024 Standard"
      },
      {
        id: "ten-ex2",
        question: "Choose the correct option: By 2027, India ______ significant milestones in renewable energy. (a) will achieve (b) will have achieved (c) has achieved (d) is achieving",
        type: "mcq",
        options: ["will achieve", "will have achieved", "has achieved", "is achieving"],
        correctAnswer: "will have achieved",
        explanation: "'By 2027' sets a future deadline, requiring Future Perfect tense ('will have achieved').",
        boardYearTag: "CBSE 2025 Specimen"
      },
      {
        id: "ten-ex3",
        question: "Error Correction: 'I am knowing him since his childhood days.' Identify the error and provide the correction.",
        type: "editing",
        correctAnswer: "Error: am knowing | Correction: have known",
        explanation: "'Know' is a stative verb (no -ing) and 'since childhood' denotes past-to-present duration, demanding Present Perfect ('have known').",
        boardYearTag: "CBSE 2023 Board Exam"
      },
      {
        id: "ten-ex4",
        question: "Fill in the blank: If she ______ (study) consistently, she will top the examination.",
        type: "fill-blank",
        correctAnswer: "studies",
        explanation: "In conditional type 1 clauses with 'if', use Simple Present (studies), not 'will study'.",
        boardYearTag: "CBSE 2024 Compartment"
      },
      {
        id: "ten-ex5",
        question: "Fill in the blank: It ______ (rain) continuously since yesterday evening.",
        type: "fill-blank",
        correctAnswer: "has been raining",
        explanation: "Action started yesterday evening and is continuing into the present; requires Present Perfect Continuous.",
        boardYearTag: "CBSE 2022 Board Exam"
      },
      {
        id: "ten-ex6",
        question: "Fill in the blank: Columbus ______ (discover) America in 1492.",
        type: "fill-blank",
        correctAnswer: "discovered",
        explanation: "'in 1492' is a specific past calendar year; requires Simple Past (V2), not Present Perfect.",
        boardYearTag: "NCERT Class 10 Exemplar"
      },
      {
        id: "ten-ex7",
        question: "Error Correction: 'He did not saw the warning sign on the bridge.' Identify error and correction.",
        type: "editing",
        correctAnswer: "Error: saw | Correction: see",
        explanation: "After auxiliary 'did / did not', the main verb strictly resets to its base form V1 ('see').",
        boardYearTag: "CBSE 2024 Set-1"
      },
      {
        id: "ten-ex8",
        question: "Fill in the blank: By 10:00 PM tonight, the emergency team ______ (reach) the remote village.",
        type: "fill-blank",
        correctAnswer: "will have reached",
        explanation: "'By + future time' signals a future completion deadline, requiring Future Perfect ('will have reached').",
        boardYearTag: "CBSE 2024 Set-2"
      },
      {
        id: "ten-ex9",
        question: "Choose the correct option: She ______ (cook) dinner when the electrical power went out suddenly. (a) cooked (b) was cooking (c) has cooked (d) had been cooking",
        type: "mcq",
        options: ["cooked", "was cooking", "has cooked", "had been cooking"],
        correctAnswer: "was cooking",
        explanation: "Interrupted action in the past: the ongoing background action takes Past Continuous ('was cooking').",
        boardYearTag: "CBSE 2023 Set-3"
      },
      {
        id: "ten-ex10",
        question: "Error Correction: 'The teacher explained that light travelled faster than sound.' Identify error and correction.",
        type: "editing",
        correctAnswer: "Error: travelled | Correction: travels",
        explanation: "Universal scientific facts and laws of physics do NOT backshift in indirect speech; they remain in Simple Present.",
        boardYearTag: "CBSE 2023 Board Exam"
      },
      {
        id: "ten-ex11",
        question: "Fill in the blank: My father ______ (work) in this bank for over twenty years now.",
        type: "fill-blank",
        correctAnswer: "has been working",
        explanation: "Action begun in the past and still actively continuing requires Present Perfect Continuous ('has been working').",
        boardYearTag: "CBSE 2024 Standard"
      },
      {
        id: "ten-ex12",
        question: "Choose the correct option: As soon as the bell rang, the students ______ (rush) out of the gate. (a) had rushed (b) rushed (c) were rushing (d) have rushed",
        type: "mcq",
        options: ["had rushed", "rushed", "were rushing", "have rushed"],
        correctAnswer: "rushed",
        explanation: "Immediate sequential actions in the past linked by 'as soon as' both take Simple Past (V2: rang ... rushed).",
        boardYearTag: "CBSE 2022 Set-1"
      },
      {
        id: "ten-ex13",
        question: "Fill in the blank: Unless Rohan ______ (hurry), he will miss the board examination.",
        type: "fill-blank",
        correctAnswer: "hurries",
        explanation: "'Unless' introduces a conditional time clause which strictly takes Simple Present (hurries), never 'will hurry'.",
        boardYearTag: "CBSE 2024 Compartment"
      },
      {
        id: "ten-ex14",
        question: "Error Correction: 'I am possessing two vintage fountain pens.' Identify error and correction.",
        type: "editing",
        correctAnswer: "Error: am possessing | Correction: possess",
        explanation: "'Possess' is a stative verb of ownership and cannot take the continuous (-ing) form.",
        boardYearTag: "CBSE 2023 Set-2"
      },
      {
        id: "ten-ex15",
        question: "Fill in the blank: The patient ______ (pass away) before the specialist physician arrived at the ICU.",
        type: "fill-blank",
        correctAnswer: "had passed away",
        explanation: "Of two completed past events, the earlier event must take Past Perfect ('had passed away').",
        boardYearTag: "CBSE 2021 Board Exam"
      },
      {
        id: "ten-ex16",
        question: "Choose the correct option: Look at those dark clouds! It ______ (pour) heavily in a few minutes. (a) is going to pour (b) poured (c) has poured (d) was pouring",
        type: "mcq",
        options: ["is going to pour", "poured", "has poured", "was pouring"],
        correctAnswer: "is going to pour",
        explanation: "'Going to' expresses an imminent future event predicted on the basis of immediate present evidence (dark clouds).",
        boardYearTag: "CBSE Specimen 2025"
      },
      {
        id: "ten-ex17",
        question: "Error Correction: 'We have purchased our ancestral farmhouse in 2010.' Identify error and correction.",
        type: "editing",
        correctAnswer: "Error: have purchased | Correction: purchased",
        explanation: "Definite past calendar year 'in 2010' strictly demands Simple Past (purchased), not Present Perfect.",
        boardYearTag: "CBSE 2024 Set-3"
      },
      {
        id: "ten-ex18",
        question: "Fill in the blank: By next September, Dr. Roy ______ (lead) this research laboratory for ten years.",
        type: "fill-blank",
        correctAnswer: "will have been leading",
        explanation: "'By next September' combined with 'for ten years' describes ongoing duration up to a future milestone: Future Perfect Continuous.",
        boardYearTag: "CBSE 2023 Set-1"
      },
      {
        id: "ten-ex19",
        question: "Choose the correct option: When you phone him tomorrow morning, he ______ in his garden. (a) works (b) will be working (c) worked (d) has worked",
        type: "mcq",
        options: ["works", "will be working", "worked", "has worked"],
        correctAnswer: "will be working",
        explanation: "Action anticipated to be actively in progress at a specific time in the future: Future Continuous ('will be working').",
        boardYearTag: "CBSE 2024 Standard"
      },
      {
        id: "ten-ex20",
        question: "Fill in the blank: The author ______ (not publish) his latest autobiographical sequel yet.",
        type: "fill-blank",
        correctAnswer: "has not published",
        explanation: "'Yet' with a negative clause indicates an expected event up to the present moment, requiring Present Perfect ('has not published').",
        boardYearTag: "CBSE 2024 Set-2"
      },
      {
        id: "ten-ex21",
        question: "Error Correction: 'When we reached the stadium, the opening ceremony already concluded.' Identify error and correction.",
        type: "editing",
        correctAnswer: "Error: already concluded | Correction: had already concluded",
        explanation: "The conclusion occurred prior to the arrival; the earlier past action requires Past Perfect ('had already concluded').",
        boardYearTag: "CBSE 2023 Set-2"
      },
      {
        id: "ten-ex22",
        question: "Fill in the blank: While Priya was solving algebra problems, her brother ______ (compose) music on his guitar.",
        type: "fill-blank",
        correctAnswer: "was composing",
        explanation: "Two parallel actions occurring simultaneously in the past both take Past Continuous ('was composing').",
        boardYearTag: "CBSE 2022 Set-3"
      },
      {
        id: "ten-ex23",
        question: "Choose the correct option: If he ______ (invite) me personally, I would definitely have attended his convocation. (a) invited (b) had invited (c) has invited (d) would invite",
        type: "mcq",
        options: ["invited", "had invited", "has invited", "would invite"],
        correctAnswer: "had invited",
        explanation: "Type 3 past unfulfilled conditional: 'had + V3' in the if-clause goes with 'would have + V3' in the main clause.",
        boardYearTag: "CBSE 2024 Compartment"
      },
      {
        id: "ten-ex24",
        question: "Error Correction: 'As soon as the principal will enter the auditorium, the choir will commence singing.' Identify error and correction.",
        type: "editing",
        correctAnswer: "Error: will enter | Correction: enters",
        explanation: "In time clauses introduced by 'as soon as', 'when', or 'before', use Simple Present (enters) instead of 'will enter'.",
        boardYearTag: "CBSE 2024 Set-1"
      },
      {
        id: "ten-ex25",
        question: "Fill in the blank: The Nile ______ (flow) northward across north-eastern Africa into the Mediterranean Sea.",
        type: "fill-blank",
        correctAnswer: "flows",
        explanation: "Permanent geographical reality; universal factual truth demands Simple Present ('flows').",
        boardYearTag: "NCERT Class 10 Exemplar"
      }
    ],
    examinerSecretTips: [
      "Look for time anchor words first: 'yesterday', 'ago', 'in 2020' → lock in Simple Past (V2).",
      "Look for 'since' or 'for': action continues up to now → lock in Present Perfect Continuous (has/have been + ing).",
      "Look for 'before' or 'after' with two past events: the older event MUST take 'had + V3'.",
      "Look for 'By tomorrow / By next week': lock in Future Perfect (will have + V3).",
      "Never write 'did' + past verb ('did went'). It is an instant automatic deduction of 1 mark.",
      "Never put 'will' inside an 'if' or 'when' clause ('If it will rain' ❌ → 'If it rains' ✅)."
    ]
  },

  // =========================================================================
  // TOPIC 2: MODALS (FROM 0 KNOWLEDGE TO 100% BOARD MASTERY)
  // =========================================================================
  {
    id: "grammar-modals",
    title: "Modals (Attitude, Obligation & Social Code: 0 to 100%)",
    syllabusCategory: "Modals",
    emoji: "🎭",
    shortTagline: "Assume zero baseline: 3 Golden Inflexible Laws, 5 Intent Categories, Board Traps & 15 Drills.",
    zeroKnowledgeIntro: {
      whatIsIt: "What is a Modal? Normal verbs (run, write, eat, sleep) describe physical actions. Modals are 'Attitude and Mood Auxiliaries'. They do not describe physical movement—they express what the speaker's MIND thinks about that action: Is it allowed? Is it strictly compulsory by law? Is it friendly advice? Is it a 50% probability? Or is it a polite social request?",
      concreteAnalogy: "Think of Modals as the colored lens filters on a camera. If you snap a photo with a RED filter ('MUST'), the scene becomes non-negotiable law with heavy penalty. If you put a YELLOW filter ('SHOULD / OUGHT TO'), it becomes friendly advice or moral duty. If you put a GREEN filter ('CAN / MAY'), the gates swing open with permission or ability. If you put a MISTY GREY filter ('MIGHT'), it's a slim 15% guess!",
      whyVerbsChange: "The 3 Inflexible Golden Laws of Modals:\n1. LAW 1: Modals NEVER wear plural or past clothes. You can NEVER add -s, -ed, or -ing! (Never say 'musts', 'canning', or 'shoulded').\n2. LAW 2: The verb immediately following a modal is ALWAYS in its pure original birthday suit: V1 Base Infinitive! (Say 'can swim', NEVER 'can to swim' or 'can swims').\n3. LAW 3: Modals NEVER use 'do / does / did' for negatives or questions. They form negatives by attaching 'not' directly ('cannot', 'must not', 'should not').",
      coreMentalModel: "Modal Master Formula: Subject + Modal Auxiliary + V1 (Pure Base Verb) + Object. (Only exceptions: 'ought to' and 'used to' inherently possess 'to')."
    },
    toddlerAnalogy: {
      hook: "The Traffic Light & School Rulebook Hierarchy!",
      scenario: "1. Red Light = MUST (Break it, and you get fined or disqualified. Zero excuse!).\n2. Yellow Light = SHOULD & OUGHT TO (Caution! Drive safely, respect elderly citizens, drink water. Moral duty from inner conscience).\n3. Green Light = CAN & MAY (You have the physical horsepower engine and the official entry pass!).\n4. Distant Cloud = MIGHT (It might rain, but keep your umbrella ready just in case).",
      ahaRule: "The Golden Board Decision Test: If breaking the sentence causes legal punishment or exam disqualification, pick MUST. If it appeals to your moral conscience and respect for elders/nation, pick OUGHT TO. If it's a helpful recommendation between friends, pick SHOULD!"
    },
    ruleBlocks: [
      {
        ruleNo: 1,
        ruleTitle: "Must vs. Have To vs. Should vs. Ought to (The Obligation Spectrum)",
        plainEnglishExplanation: "CBSE's most tested modal distinction! 'Must' comes from internal strong conviction or official legal authority with penalties. 'Have to' comes from external circumstances (train timings, school uniforms). 'Should' is friendly personal advice. 'Ought to' is moral duty toward society, elders, or country.",
        officialRule: "Must denotes urgent legal necessity, logical deduction, or strong compulsion. Have to expresses external compulsion. Should expresses subjective advice. Ought to expresses moral obligation or duty based on social conscience.",
        formulaOrPattern: "Legal Compulsion: Must + V1 | External Routine: Have/Has to + V1 | Advice: Should + V1 | Moral Conscience: Ought to + V1",
        whyItMatters: "Frequently tested in CBSE gap filling and editing passages.",
        goldenExamples: [
          { sentence: "Candidates must write their roll numbers in the specified box.", note: "Legal board exam rule; failure means cancellation." },
          { sentence: "In India, drivers must keep to the left side of the road.", note: "Statutory traffic law carrying penal consequences." },
          { sentence: "We ought to stand at attention when the national anthem is played.", note: "Moral and patriotic duty governed by conscience." },
          { sentence: "You should revise your notes before bedtime.", note: "Friendly advice for personal benefit." },
          { sentence: "I have to wake up at 5:00 AM because my school bus arrives at 6:15 AM.", note: "External timetable compulsion." }
        ],
        examTip: "If the context mentions 'fine', 'penalty', 'law', or 'official regulation', choose MUST immediately."
      },
      {
        ruleNo: 2,
        ruleTitle: "May vs. Can vs. Could (The Hierarchy of Permission & Politeness)",
        plainEnglishExplanation: "'May' is formal, respectful permission (talking to teachers, principals, elders, strangers). 'Can' is informal permission (talking to friends, siblings). 'Could' is tentative, ultra-polite permission or request.",
        officialRule: "May indicates formal permission or request. Can indicates informal permission. Could functions as a tentative, extremely courteous polite request.",
        formulaOrPattern: "Formal Permission: May I + V1? | Informal Permission: Can I + V1? | Courteous Request: Could you please + V1?",
        whyItMatters: "Core feature of polite dialogue completion questions in Section B.",
        goldenExamples: [
          { sentence: "May I come in, Sir?", note: "Formal, respectful permission to a teacher or authority." },
          { sentence: "Can I borrow your pen for five minutes, Rohan?", note: "Informal friendly permission between equals." },
          { sentence: "Could you please direct me to the station counter?", note: "Courteous, polite request to a stranger." }
        ],
        examTip: "Never use 'Can I come in, Sir?' in formal dialogue. Board examiners strictly expect 'May I come in, Sir?'."
      },
      {
        ruleNo: 3,
        ruleTitle: "Can vs. Could vs. Was/Were Able To (Inherent Capability vs Crisis Success)",
        plainEnglishExplanation: "'Can' is present general capability (I can swim). 'Could' is past general capability (I could run fast when I was 10). BUT if someone succeeded in doing something in ONE specific difficult situation in the past, use 'WAS/WERE ABLE TO', NOT 'could'!",
        officialRule: "Can denotes general present ability. Could denotes general past ability. For ability manifested in a specific past single occasion with difficulty, 'managed to' or 'was/were able to' is required.",
        formulaOrPattern: "Present Ability: Subject + can + V1 | Past General: Subject + could + V1 | Single Past Crisis: Subject + was/were able to + V1",
        whyItMatters: "One of the most insidious Class 10 HOTS traps!",
        goldenExamples: [
          { sentence: "Swati can speak four European languages fluently.", note: "Present ongoing mental ability." },
          { sentence: "My grandfather could read without spectacles until age seventy.", note: "Past general ability over years." },
          { sentence: "Although the river was in spate, the villagers were able to rescue the cattle.", note: "One specific crisis situation successfully managed." }
        ],
        examTip: "Board Trap: 'Although the fire was fierce, everyone ______ escape.' Options: (a) could (b) was able to. Correct answer: was able to!"
      },
      {
        ruleNo: 4,
        ruleTitle: "May vs. Might vs. Must (The Probability Meter: 50% vs 15% vs 95%)",
        plainEnglishExplanation: "Use 'Must' when you are 95% sure based on logical evidence ('The lights are on; someone must be home'). Use 'May' when it is a 50% realistic possibility ('It may rain; the sky is overcast'). Use 'Might' when it is a remote, slim 15% chance ('He might pass, but he hasn't studied at all').",
        officialRule: "Must denotes strong logical deduction/certainty. May expresses factual possibility. Might expresses remote or weak possibility.",
        formulaOrPattern: "Strong Certainty (95%): Must + V1 | Realistic Possibility (50%): May + V1 | Remote Chance (15%): Might + V1",
        whyItMatters: "CBSE reading comprehension and gap-filling context clues.",
        goldenExamples: [
          { sentence: "She has been working for 14 hours continuously; she must be exhausted.", note: "Logical deduction based on undeniable evidence." },
          { sentence: "Take an umbrella; the clouds look dark and it may rain.", note: "Factual, likely possibility." },
          { sentence: "The road is blocked, but if we take the narrow bypass, we might catch the train.", note: "Remote, slim possibility." }
        ]
      },
      {
        ruleNo: 5,
        ruleTitle: "Mustn't (Prohibition) vs. Needn't / Don't Have To (Absence of Compulsion)",
        plainEnglishExplanation: "'Must not' means IT IS FORBIDDEN (do not do it or there is danger/penalty!). 'Need not' or 'don't have to' means YOU DON'T NEED TO (it's optional; do it if you want, but there is no compulsion).",
        officialRule: "Must not expresses negative obligation or strict prohibition. Need not / do not have to expresses absence of obligation or necessity.",
        formulaOrPattern: "Strictly Forbidden: Subject + must not + V1 | Voluntary / Optional: Subject + need not + V1",
        whyItMatters: "Huge confusion between 'mustn't' and 'needn't' in CBSE editing passages.",
        goldenExamples: [
          { sentence: "Visitors must not feed the zoo animals.", note: "Strictly forbidden by law and park safety rules." },
          { sentence: "You needn't bring an umbrella today; the sky is completely clear.", note: "Absence of necessity; it is optional." },
          { sentence: "You don't have to attend the extra lecture if your attendance is above 90%.", note: "No compulsion." }
        ]
      },
      {
        ruleNo: 6,
        ruleTitle: "Would vs. Could vs. Shall (Requests, Invitations & Offers)",
        plainEnglishExplanation: "'Would you like...' is used for polite invitations and offers. 'Could you...' is used for courteous requests. 'Shall I / Shall we...' is used for making helpful suggestions or offering service.",
        officialRule: "Would expresses polite offers, invitations, or preferences. Could expresses courteous requests. Shall with 1st person pronouns expresses suggestions or offers of service.",
        formulaOrPattern: "Polite Invitation: Would you like + [noun / to V1]? | Helpful Suggestion: Shall I / Shall we + V1?",
        whyItMatters: "Essential for formal letter writing and speech writing.",
        goldenExamples: [
          { sentence: "Would you like a cup of hot chocolate?", note: "Polite hospitality offer." },
          { sentence: "Could you please lower the volume of the speakers?", note: "Courteous request." },
          { sentence: "Shall I carry your heavy luggage to the taxi, grandmother?", note: "Polite offer of assistance with 1st person pronoun." }
        ]
      },
      {
        ruleNo: 7,
        ruleTitle: "Used to vs. Would (Past Discontinued Habits)",
        plainEnglishExplanation: "'Used to' is for past habits or past states that are NOW DISCONTINUED (e.g. 'I used to live in Kolkata'). 'Would' is for repeated past actions, but CANNOT be used for past states (you cannot say 'I would be a child').",
        officialRule: "Used to describes discontinued past habits or states. Would describes repeated past actions but cannot describe past states.",
        formulaOrPattern: "Past State or Habit (Now Ended): Subject + used to + V1 | Repeated Past Action: Subject + would + V1",
        whyItMatters: "Distinction tested in story narration and descriptive writing.",
        goldenExamples: [
          { sentence: "There used to be a dense mango grove where that shopping mall now stands.", note: "Past state; 'would' is ungrammatical here." },
          { sentence: "Every summer vacation, grandfather would take us fishing by the canal.", note: "Repeated past action." }
        ]
      },
      {
        ruleNo: 8,
        ruleTitle: "Modal Perfects: Past Regrets & Past Deductions (Modal + Have + V3)",
        plainEnglishExplanation: "When talking about past actions that didn't happen or making deductions about past events: 'Should have + V3' = you had a duty to do it, but you failed! 'Must have + V3' = 95% certain it happened in the past. 'Could have + V3' = you had the ability, but chose not to do it.",
        officialRule: "Modal + have + past participle (V3) refers to past unfulfilled obligations, unrealized potential, or past logical deductions.",
        formulaOrPattern: "Past Regret: should have + V3 | Past Deduction: must have + V3 | Past Missed Ability: could have + V3",
        whyItMatters: "Grade A differentiator in Class 10 analytical writing and literature answers.",
        goldenExamples: [
          { sentence: "You should have informed the police immediately after the theft.", note: "Duty in the past that was not fulfilled." },
          { sentence: "The ground is soaking wet; it must have rained heavily last night.", note: "Logical deduction about a past event." },
          { sentence: "Anil could have handed Hari Singh over to the police, but he chose forgiveness.", note: "Anil possessed the power/ability, but consciously refrained." }
        ]
      }
    ],
    mistakeCards: [
      {
        id: "mod-m1",
        incorrect: "Students must to submit their assignments today.",
        correct: "Students must submit their assignments today.",
        ruleExplanation: "Modal auxiliaries (must, can, should, will) are followed directly by base verb V1 without 'to' (except 'ought to' and 'used to').",
        trapType: "Spurious 'To' Insertion",
        severity: "CRITICAL"
      },
      {
        id: "mod-m2",
        incorrect: "He can sings very melodiously.",
        correct: "He can sing very melodiously.",
        ruleExplanation: "After any modal verb, the main verb NEVER takes an '-s' or '-es'. Always use bare base form V1 (sing).",
        trapType: "Inflected Verb After Modal",
        severity: "CRITICAL"
      },
      {
        id: "mod-m3",
        incorrect: "Although the storm was catastrophic, the sailors could reach the harbour safely.",
        correct: "Although the storm was catastrophic, the sailors were able to reach the harbour safely.",
        ruleExplanation: "For success in a specific past crisis/emergency, standard English demands 'was/were able to', not 'could'.",
        trapType: "Could vs. Was Able To in Single Past Crisis",
        severity: "HIGH"
      },
      {
        id: "mod-m4",
        incorrect: "We should respect our national flag and constitution.",
        correct: "We ought to respect our national flag and constitution.",
        ruleExplanation: "Constitutional and patriotic moral obligations of citizenship are best expressed by 'ought to' rather than mere advisory 'should'.",
        trapType: "Moral Conscience vs. Advisory Should",
        severity: "MEDIUM"
      },
      {
        id: "mod-m5",
        incorrect: "You mustn't buy the textbook because the library provides free digital copies.",
        correct: "You needn't buy the textbook because the library provides free digital copies.",
        ruleExplanation: "'Mustn't' means buying it is forbidden. 'Needn't' (or 'don't have to') means it is not necessary/optional.",
        trapType: "Mustn't vs. Needn't Confusion",
        severity: "HIGH"
      },
      {
        id: "mod-m6",
        incorrect: "Can I come in, respected teacher?",
        correct: "May I come in, Madam?",
        ruleExplanation: "Formal permission addressed to a teacher or authority figure strictly requires 'May', never informal 'Can'.",
        trapType: "Informal 'Can' in Formal Authority Context",
        severity: "HIGH"
      },
      {
        id: "mod-m7",
        incorrect: "Look at the sunny blue sky; it might rain at any moment.",
        correct: "Look at the dark stormy sky; it may rain at any moment.",
        ruleExplanation: "'May' is supported by visible impending evidence; 'might' is for remote slim chances without strong immediate evidence.",
        trapType: "Probability Context Inversion",
        severity: "MEDIUM"
      },
      {
        id: "mod-m8",
        incorrect: "Would you mind to close the window?",
        correct: "Would you mind closing the window?",
        ruleExplanation: "The polite expression 'Would you mind...' is strictly followed by a gerund (V4: V1 + -ing), never an infinitive.",
        trapType: "'Would you mind' + Gerund Mandate",
        severity: "HIGH"
      }
    ],
    practiceExercises: [
      {
        id: "mod-ex1",
        question: "Fill in the blank: All visitors ______ (must / should / might) wear a visitor badge while inside the laboratory premises.",
        type: "fill-blank",
        correctAnswer: "must",
        explanation: "Institutional security regulation carrying strict compliance requires 'must'.",
        boardYearTag: "CBSE 2024 Standard"
      },
      {
        id: "mod-ex2",
        question: "Choose the correct modal: ______ you please guide me through this mathematical formula? (a) Should (b) Could (c) Must (d) Might",
        type: "mcq",
        options: ["Should", "Could", "Must", "Might"],
        correctAnswer: "Could",
        explanation: "'Could' is the standard modal auxiliary for courteous, polite requests.",
        boardYearTag: "CBSE 2023 Set-1"
      },
      {
        id: "mod-ex3",
        question: "Fill in the blank: We ______ (should / ought to / can) preserve our historical monuments from vandalism.",
        type: "fill-blank",
        correctAnswer: "ought to",
        explanation: "Civic and moral duty toward cultural heritage governed by conscience requires 'ought to'.",
        boardYearTag: "CBSE 2024 Set-2"
      },
      {
        id: "mod-ex4",
        question: "Error Correction: 'The water was freezing, but the diver could recover the lost camera.' Identify error and correction.",
        type: "editing",
        correctAnswer: "Error: could | Correction: was able to",
        explanation: "Specific past single achievement under severe hardship demands 'was able to', not 'could'.",
        boardYearTag: "CBSE 2024 Compartment"
      },
      {
        id: "mod-ex5",
        question: "Fill in the blank: You ______ (must not / need not) bring your calculator tomorrow; the exam centre provides them.",
        type: "fill-blank",
        correctAnswer: "need not",
        explanation: "Absence of necessity/obligation requires 'need not' (or 'do not have to').",
        boardYearTag: "CBSE 2023 Set-3"
      },
      {
        id: "mod-ex6",
        question: "Choose the correct modal: The roads are completely deserted and all shops are closed; it ______ be well past midnight. (a) can (b) must (c) might (d) shall",
        type: "mcq",
        options: ["can", "must", "might", "shall"],
        correctAnswer: "must",
        explanation: "Logical deduction based on overwhelming observable evidence (deserted streets, closed shops) requires 'must'.",
        boardYearTag: "CBSE 2024 Set-3"
      },
      {
        id: "mod-ex7",
        question: "Fill in the blank: ______ I carry these heavy reference books for you, Ma'am?",
        type: "fill-blank",
        correctAnswer: "Shall",
        explanation: "Polite offer of assistance with first-person pronoun 'I' takes 'Shall'.",
        boardYearTag: "CBSE 2022 Set-1"
      },
      {
        id: "mod-ex8",
        question: "Error Correction: 'He said that he can solve the riddle easily, but he failed.' Identify error and correction.",
        type: "editing",
        correctAnswer: "Error: can | Correction: could",
        explanation: "Past reporting tense ('said') requires the modal auxiliary to backshift from 'can' to 'could'.",
        boardYearTag: "CBSE 2023 Set-1"
      },
      {
        id: "mod-ex9",
        question: "Fill in the blank: ______ you like some hot tomato soup before dinner?",
        type: "fill-blank",
        correctAnswer: "Would",
        explanation: "'Would you like...' is the established polite formula for offers and hospitality.",
        boardYearTag: "CBSE 2024 Standard"
      },
      {
        id: "mod-ex10",
        question: "Choose the correct modal: She hasn't prepared thoroughly for the interview; she ______ get selected, but the chances are slim. (a) must (b) might (c) should (d) will",
        type: "mcq",
        options: ["must", "might", "should", "will"],
        correctAnswer: "might",
        explanation: "'The chances are slim' signals remote, weak probability, which demands 'might'.",
        boardYearTag: "CBSE 2023 Set-2"
      },
      {
        id: "mod-ex11",
        question: "Fill in the blank: You ______ (should have / must have) told me about the schedule change yesterday; I wasted two hours waiting!",
        type: "fill-blank",
        correctAnswer: "should have",
        explanation: "Unfulfilled past obligation or duty resulting in present regret takes 'should have + V3'.",
        boardYearTag: "CBSE Specimen 2025"
      },
      {
        id: "mod-ex12",
        question: "Error Correction: 'Motorists must to halt when the traffic signal turns amber.' Identify error and correction.",
        type: "editing",
        correctAnswer: "Error: must to halt | Correction: must halt",
        explanation: "Modals are followed directly by the bare infinitive V1 without 'to'.",
        boardYearTag: "CBSE 2024 Set-2"
      },
      {
        id: "mod-ex13",
        question: "Fill in the blank: In ancient Sparta, every youth ______ (had to / could) undergo rigorous military training.",
        type: "fill-blank",
        correctAnswer: "had to",
        explanation: "Past institutional compulsion imposed by state law requires 'had to'.",
        boardYearTag: "NCERT Class 10 Exemplar"
      },
      {
        id: "mod-ex14",
        question: "Choose the correct modal: When I was eight years old, I ______ recite long epic poems by heart. (a) can (b) could (c) might (d) should",
        type: "mcq",
        options: ["can", "could", "might", "should"],
        correctAnswer: "could",
        explanation: "General mental or physical ability in past time takes 'could'.",
        boardYearTag: "CBSE 2022 Set-2"
      },
      {
        id: "mod-ex15",
        question: "Fill in the blank: You ______ (must not / should not) disclose your banking OTP to anyone under any circumstances.",
        type: "fill-blank",
        correctAnswer: "must not",
        explanation: "Absolute safety prohibition with severe financial risk requires categorical 'must not'.",
        boardYearTag: "CBSE 2024 Set-1"
      }
    ],
    examinerSecretTips: [
      "Check the verb directly following the modal: if it has 'to' (except ought/used to) or '-s' or '-ed', it is 100% an error!",
      "If the sentence has 'fine', 'penalty', 'law', or 'official exam rule', the answer is MUST.",
      "If the sentence involves respecting parents, elders, or the nation, the answer is OUGHT TO.",
      "If the sentence involves an emergency or crisis in the past that was successfully overcome, the answer is WAS/WERE ABLE TO (not could!).",
      "Notice the difference: MUSTN'T = Forbidden (do not do it!). NEEDN'T = Optional (no need to do it)."
    ]
  },

  // =========================================================================
  // TOPIC 3: SUBJECT-VERB CONCORD (COMPLETE 20 RULES FROM OFFICIAL SCHOOL PPT)
  // =========================================================================
  {
    id: "grammar-concord",
    title: "Subject–Verb Agreement (Official 20-Rule Master Deck)",
    syllabusCategory: "Subject-Verb Concord",
    emoji: "🤝",
    shortTagline: "Complete classroom deck: All 20 PPT rules, formulas, color-coded examples, and board drills.",
    zeroKnowledgeIntro: {
      whatIsIt: "Subject–Verb Agreement (also called Concord) means that the subject and the verb of a sentence must match in number (singular vs plural) and person (1st, 2nd, 3rd).",
      concreteAnalogy: "In English, there is a weird mirror trick: Nouns add '-s' to form a plural crowd of friends (1 cat → 2 cats). But Verbs add '-s' ONLY when they dance with a single lonely partner (He runs, She sings, The dog barks)! When a crowd dances, the verb drops the 's' cape (They run, Dogs bark).",
      whyVerbsChange: "It is the TRUE SUBJECT that decides the verb form — never the word that simply sits closest to the verb. If you get this wrong, even a beautifully written sentence falls apart!",
      coreMentalModel: "Singular Subject → Singular Verb (+s/es: is, was, has, plays) | Plural Subject → Plural Verb (base form: are, were, have, play)."
    },
    toddlerAnalogy: {
      hook: "The Mirror Secret of English Grammar!",
      scenario: "Look in the mirror: Noun with 'S' = CROWD (cats, students, cars). Verb with 'S' = LONE WOLF (runs, plays, writes). A Lone Wolf noun marries a Lone Wolf verb ('The cat runs'). A Crowd noun marries a Crowd verb ('Cats run'). If you put two 'S's together, they fight!",
      ahaRule: "Rule of Gold: Singular Subject + Verb with 's' (is, was, has, writes). Plural Subject + Verb without 's' (are, were, have, write)."
    },
    ruleBlocks: [
      {
        ruleNo: 1,
        ruleTitle: "Rule 1: Compound Subjects Joined by 'And'",
        plainEnglishExplanation: "Two or more subjects joined by 'and' form a plural team and always take a PLURAL verb. Think of 'and' as a mathematical plus sign (+).",
        officialRule: "Two or more singular or plural nouns joined by 'and' make a compound plural subject and require a plural verb.",
        formulaOrPattern: "Subject 1 + AND + Subject 2 = Plural Verb (are / were / have / V1)",
        whyItMatters: "The foundational rule of compound coordination.",
        goldenExamples: [
          { sentence: "Rahul and Priya are going to Jaipur. (NOT: is going)", note: "Two separate individuals joined by 'and' → plural verb 'are'.", isCorrect: true },
          { sentence: "The Principal and the teachers were present at the meeting.", note: "Compound subject → plural verb 'were'.", isCorrect: true },
          { sentence: "My brother and I play chess every Sunday. (NOT: plays)", note: "Brother + I = 2 people → plural verb 'play'.", isCorrect: true }
        ],
        examTip: "'And' almost always adds subjects together — think of it as a plus sign creating a plural total.",
        howToDecide: "Ask: Are there two or more distinct entities connected by 'and'? If yes, choose plural."
      },
      {
        ruleNo: 2,
        ruleTitle: "Rule 2: 'And' Joining One Combined Idea (The Bread & Butter Rule)",
        plainEnglishExplanation: "Exception to Rule 1: When two nouns joined by 'and' refer to ONE single person, one combined dish, or one unified conceptual unit, use a SINGULAR verb.",
        officialRule: "When two nouns connected by 'and' represent a single collective idea, dish, or refer to the exact same person, the verb is singular.",
        formulaOrPattern: "Unified Concept / Single Dish / Same Person + AND + ... = SINGULAR VERB (is / was / wins)",
        whyItMatters: "Very common in proverbs and food combinations on CBSE papers.",
        goldenExamples: [
          { sentence: "Slow and steady wins the race. (NOT: win)", note: "One combined philosophical approach, not two separate runners.", isCorrect: true },
          { sentence: "Bread and butter is his only breakfast. (NOT: are)", note: "Treated as one single meal/dish.", isCorrect: true },
          { sentence: "The Chairman and Managing Director is arriving today.", note: "Only one article 'The' indicates ONE person holding both titles. (If it were 'The Chairman and the MD', it would be 'are arriving'!).", isCorrect: true }
        ],
        examTip: "Look at the articles: 'The poet and philosopher IS dead' (one person). 'The poet and THE philosopher ARE dead' (two people).",
        howToDecide: "Ask: Are these truly TWO separate items, or ONE combined idea/dish/person? One idea → singular verb."
      },
      {
        ruleNo: 3,
        ruleTitle: "Rule 3: 'Each' / 'Every' Before a Compound Subject",
        plainEnglishExplanation: "When 'each' or 'every' comes before two or more subjects joined by 'and', the verb stays SINGULAR — even though 'and' is present! 'Each' and 'every' forces you to look at individuals one by one.",
        officialRule: "If each or every precedes compound subjects joined by 'and', the verb is strictly singular.",
        formulaOrPattern: "Each / Every + Noun 1 + AND + [each/every] + Noun 2 = SINGULAR VERB",
        whyItMatters: "Super common trap where students see 'and' and blindly pick plural.",
        goldenExamples: [
          { sentence: "Each boy and each girl has received a certificate. (NOT: have)", note: "'each' forces a singular verb, overriding 'and'.", isCorrect: true },
          { sentence: "Every man, woman, and child was given a blanket. (NOT: were)", note: "'every' inspects each individual one at a time.", isCorrect: true },
          { sentence: "Each student and each teacher is expected to attend.", note: "Singular verb 'is'.", isCorrect: true }
        ],
        examTip: "'Each' and 'every' acts like a spotlight that illuminates only ONE person at a time."
      },
      {
        ruleNo: 4,
        ruleTitle: "Rule 4: 'Or' / 'Nor' — Verb Agrees with the Nearer Subject (Proximity Rule)",
        plainEnglishExplanation: "When two subjects are joined by 'or' or 'nor', they are not added together. The verb agrees strictly with the subject NEARER to it (its closest neighbor), not the one farther away.",
        officialRule: "When subjects are connected by 'or' or 'nor', the verb agrees in number with the subject placed closest to it.",
        formulaOrPattern: "Subject 1 + OR / NOR + [Subject 2] + Verb (Verb matches Subject 2!)",
        whyItMatters: "Rule of Proximity: The verb only has eyes for its immediate neighbor.",
        goldenExamples: [
          { sentence: "Either the pen or the pencils are on the desk. (NOT: is)", note: "Nearer subject 'pencils' is plural → plural verb 'are'.", isCorrect: true },
          { sentence: "Either the pencils or the pen is on the desk. (NOT: are)", note: "Nearer subject 'pen' is singular → singular verb 'is'.", isCorrect: true },
          { sentence: "The teacher or the students have the answer.", note: "Nearer subject 'students' is plural → 'have'.", isCorrect: true }
        ],
        examTip: "Say it as a habit: 'The verb obeys the subject closest to it.'"
      },
      {
        ruleNo: 5,
        ruleTitle: "Rule 5: 'Either…Or' / 'Neither…Nor' — Nearer Subject & Person",
        plainEnglishExplanation: "The exact same proximity rule applies to 'either…or' and 'neither…nor' — including when the nearer subject changes the grammatical PERSON of the verb (I / you / he).",
        officialRule: "In either...or and neither...nor constructions, the verb agrees with the nearer subject in both number and person.",
        formulaOrPattern: "Neither A nor [B] + Verb | If B is 'I', verb is 'am' | If B is 'he', verb is 'is'",
        whyItMatters: "The 'Neither Amit nor I am' trap is a classic board exam favorite.",
        goldenExamples: [
          { sentence: "Neither the teacher nor the students were late.", note: "Nearer subject = 'students' (plural) → 'were'.", isCorrect: true },
          { sentence: "Neither the students nor the teacher was late.", note: "Nearer subject = 'teacher' (singular) → 'was'.", isCorrect: true },
          { sentence: "Neither Amit nor I am responsible for this. (NOT: is / are)", note: "Nearer subject is 'I' → verb must be 'am'!", isCorrect: true }
        ],
        examTip: "CAREFUL: When 'I' is the nearer subject after 'nor', the verb becomes 'am' — students frequently write 'is' or 'are' by mistake."
      },
      {
        ruleNo: 6,
        ruleTitle: "Rule 6: Collective Nouns Acting as One Unit",
        plainEnglishExplanation: "A collective noun (team, family, class, jury, committee, army, government) takes a SINGULAR verb when the entire group acts together as a single unified whole.",
        officialRule: "Collective nouns take a singular verb when the collection is thought of as one undivided whole.",
        formulaOrPattern: "Collective Noun (Acting Together as 1 Unit) → SINGULAR VERB (is / was / has)",
        whyItMatters: "The standard default for collective nouns in Indian English board examinations.",
        goldenExamples: [
          { sentence: "The team is practising for the finals.", note: "All team members practising together as one squad.", isCorrect: true },
          { sentence: "Our class was the best decorated one this year.", note: "Class as a single combined entity.", isCorrect: true },
          { sentence: "The jury has announced its verdict. (NOT: have announced)", note: "One unanimous verdict delivered by the whole body.", isCorrect: true }
        ],
        examTip: "Default to singular for collective nouns unless there is an obvious indicator of internal disagreement."
      },
      {
        ruleNo: 7,
        ruleTitle: "Rule 7: Collective Nouns Acting as Separate Individuals",
        plainEnglishExplanation: "The exact same collective nouns take a PLURAL verb when the individual members of the group are arguing, divided, or acting as separate individuals.",
        officialRule: "When members of a collective noun act separately, express conflicting opinions, or disagree, the verb is plural.",
        formulaOrPattern: "Collective Noun + [divided / arguing / their opinions] → PLURAL VERB (are / were / have)",
        whyItMatters: "Contrasts with Rule 6; tested in higher-order editing questions.",
        goldenExamples: [
          { sentence: "The jury are divided in their opinions. (NOT: is divided)", note: "Jurors hold conflicting individual opinions; notice plural pronoun 'their'.", isCorrect: true },
          { sentence: "The team are arguing among themselves.", note: "Members fighting individually against each other.", isCorrect: true },
          { sentence: "The committee are signing the form separately, one by one.", note: "Individual actions performed separately.", isCorrect: true }
        ],
        examTip: "Look for clue words like 'among themselves', 'divided', 'their', 'separately' — they scream PLURAL verb!"
      },
      {
        ruleNo: 8,
        ruleTitle: "Rule 8: Indefinite Pronouns Are Always Singular",
        plainEnglishExplanation: "Words with '-one', '-body', '-thing', plus 'each', 'every', 'either', 'neither' are ALWAYS SINGULAR, even when followed by a plural prepositional phrase like 'of the boys'!",
        officialRule: "Indefinite pronouns (each, every, either, neither, one, someone, anyone, everyone, no one, nobody, somebody, anybody, everybody, something, anything, everything, nothing) always take a singular verb.",
        formulaOrPattern: "Each / Every / Neither of the [Plural Noun] + SINGULAR VERB (has / is / wants)",
        whyItMatters: "Accountable for over 30% of concord errors made by Class 10 students.",
        goldenExamples: [
          { sentence: "Each of the boys has a bicycle. (NOT: have)", note: "'each' is the singular subject; 'boys' is just inside a prepositional phrase.", isCorrect: true },
          { sentence: "Everybody wants to succeed in life. (NOT: want)", note: "'Everybody' is grammatically singular → takes -s verb 'wants'.", isCorrect: true },
          { sentence: "Neither of the answers is correct. (NOT: are)", note: "'Neither' means zero out of two → singular 'is'.", isCorrect: true }
        ],
        examTip: "Memorize the list: each, every, either, neither, one, someone, anyone, everyone, no one, nobody, somebody, anybody, everybody, nothing."
      },
      {
        ruleNo: 9,
        ruleTitle: "Rule 9: Nouns Plural in Form but Singular in Meaning (The Imposter 'S')",
        plainEnglishExplanation: "Some nouns end with an 's' and look like a plural crowd, but they actually name ONE academic subject (Mathematics, Physics, Civics, Economics), ONE disease (Measles, Mumps), or ONE news report. Treat them as SINGULAR!",
        officialRule: "Nouns plural in form but singular in signification take a singular verb.",
        formulaOrPattern: "Academic Subject / Disease / News ending in 's' → SINGULAR VERB (is / was)",
        whyItMatters: "Class 10 students frequently get fooled by the ending 's'.",
        goldenExamples: [
          { sentence: "Mathematics is my favourite subject. (NOT: Mathematics are)", note: "One academic discipline.", isCorrect: true },
          { sentence: "The news was shocking for everyone. (NOT: were)", note: "'News' is uncountable and singular.", isCorrect: true },
          { sentence: "Measles is a contagious disease. (NOT: are)", note: "One medical condition. (Also: Mumps, Rickets, Diabetes).", isCorrect: true },
          { sentence: "Athletics is his passion. Billiards is an indoor game.", note: "Names of sports ending in 's' are singular.", isCorrect: true }
        ],
        examTip: "EXCEPTION ALERT: If 'Mathematics' or 'Statistics' refers to calculation abilities ('His mathematics are weak'), it takes a plural verb. But as a subject, it is ALWAYS singular!"
      },
      {
        ruleNo: 10,
        ruleTitle: "Rule 10: True Plural (Pair) Nouns Are Always Plural",
        plainEnglishExplanation: "Nouns naming tools or clothes made of two joined symmetrical parts — scissors, trousers, spectacles, jeans, tongs, pliers, glasses — are TRUE plurals and ALWAYS take a PLURAL verb.",
        officialRule: "Nouns denoting articles of dress or tools consisting of two parts take a plural verb unless preceded by 'a pair of'.",
        formulaOrPattern: "Scissors / Trousers / Spectacles → PLURAL VERB (are / were) | BUT: 'A pair of...' → SINGULAR VERB (is / was)",
        whyItMatters: "Direct contrast with Rule 9: Rule 9 nouns LOOK plural but ARE singular. Rule 10 nouns LOOK plural and ARE plural!",
        goldenExamples: [
          { sentence: "These scissors are very sharp. (NOT: is)", note: "Pair noun → plural verb 'are'.", isCorrect: true },
          { sentence: "My trousers are torn at the knee.", note: "Pair noun → plural verb 'are'.", isCorrect: true },
          { sentence: "Her spectacles are lying on the table.", note: "Pair noun → plural verb 'are'.", isCorrect: true },
          { sentence: "A pair of scissors was bought by mother.", note: "When preceded by 'A pair of', the true subject is 'pair' (singular) → 'was'!", isCorrect: true }
        ],
        examTip: "Check for 'A pair of': 'The jeans ARE cool', BUT 'A pair of jeans IS on the shelf'."
      },
      {
        ruleNo: 11,
        ruleTitle: "Rule 11: Interrupting Phrases Don't Change the Subject (The Bodyguard Rule)",
        plainEnglishExplanation: "Phrases like 'with', 'along with', 'as well as', 'together with', 'in addition to', 'besides', and 'except' are merely bodyguards. They DO NOT change the number of the subject. The verb agrees strictly with the FIRST noun!",
        officialRule: "When a subject is accompanied by parenthetical expressions introduced by 'as well as', 'along with', 'together with', 'with', 'in addition to', the verb agrees strictly with the primary subject.",
        formulaOrPattern: "Subject 1 + [along with / as well as / together with + Noun 2] + Verb (Matches Subject 1!)",
        whyItMatters: "CBSE's #1 favorite trap in Class 10 board exams.",
        goldenExamples: [
          { sentence: "The teacher, along with her students, is visiting the museum. (NOT: are)", note: "Primary subject is 'teacher' (singular). Ignore 'students'!", isCorrect: true },
          { sentence: "The captain, as well as the players, was praised by the coach. (NOT: were)", note: "Primary subject is 'captain' (singular) → 'was'.", isCorrect: true },
          { sentence: "The players, together with their captain, were felicitated. (NOT: was)", note: "Primary subject is 'players' (plural) → 'were'.", isCorrect: true }
        ],
        examTip: "Mental Trick: Cover everything between the commas with your finger. Does the remaining sentence make sense with your verb? Yes!"
      },
      {
        ruleNo: 12,
        ruleTitle: "Rule 12: Amounts, Distances & Time as a Single Unit",
        plainEnglishExplanation: "When a subject expresses a total quantity, sum of money, distance, or period of time thought of as ONE unified lump sum or package (not individual coins or steps), use a SINGULAR verb.",
        officialRule: "A plural noun denoting a specific quantity, unit of measurement, sum of money, or duration takes a singular verb when considered as a collective unit.",
        formulaOrPattern: "Sum of Money / Distance / Time Period = SINGULAR VERB (is / was)",
        whyItMatters: "Prevents students from choosing plural because of numbers like 'five hundred' or 'ten'.",
        goldenExamples: [
          { sentence: "Five hundred rupees is not enough for this book. (NOT: are)", note: "One lump sum of money.", isCorrect: true },
          { sentence: "Ten kilometres is a long distance to walk. (NOT: are)", note: "One single continuous distance.", isCorrect: true },
          { sentence: "Fifteen minutes is enough time for the test.", note: "One time span.", isCorrect: true }
        ],
        examTip: "If you can replace the entire amount with the pronoun 'IT' ('It is a long distance'), use a singular verb!"
      },
      {
        ruleNo: 13,
        ruleTitle: "Rule 13: Fractions & Percentages ('... of the ...')",
        plainEnglishExplanation: "With fractions or percentages ('half of', 'two-thirds of', '60% of'), look at the noun AFTER 'of': if it is uncountable/singular, use a SINGULAR verb; if it is countable plural, use a PLURAL verb!",
        officialRule: "With fractional expressions, percentages, and indefinite quantifiers, the verb agrees with the noun in the prepositional phrase following 'of'.",
        formulaOrPattern: "Fraction / % of + Uncountable Noun → SINGULAR VERB | Fraction / % of + Plural Countable Noun → PLURAL VERB",
        whyItMatters: "Governs data descriptions in Analytical Paragraphs.",
        goldenExamples: [
          { sentence: "Two-thirds of the work is done. (NOT: are)", note: "'work' is uncountable → singular verb 'is'.", isCorrect: true },
          { sentence: "Two-thirds of the students are present. (NOT: is)", note: "'students' is countable plural → plural verb 'are'.", isCorrect: true },
          { sentence: "Fifty percent of the crop was ruined by the hailstorm.", note: "'crop' considered collectively → singular 'was'.", isCorrect: true },
          { sentence: "Fifty percent of the apples were rotten.", note: "'apples' countable plural → 'were'.", isCorrect: true }
        ],
        examTip: "Cover the fraction and 'of'. Whatever verb fits the remaining noun is your answer!"
      },
      {
        ruleNo: 14,
        ruleTitle: "Rule 14: 'There Is' / 'There Are' (Inverted Dummy Subject)",
        plainEnglishExplanation: "In sentences beginning with 'There', the word 'there' is an empty dummy word—NEVER the true subject. Look AFTER the verb to find the real subject, and match the verb to it!",
        officialRule: "In expletive 'there' constructions, 'there' is an adverbial dummy; the verb agrees with the following nominal subject.",
        formulaOrPattern: "There + IS/WAS + [Singular Noun] | There + ARE/WERE + [Plural Noun]",
        whyItMatters: "Students often look ahead or guess without identifying the real noun.",
        goldenExamples: [
          { sentence: "There is a book on the table.", note: "Real subject is 'a book' (singular) → 'is'.", isCorrect: true },
          { sentence: "There are many books on the table. (NOT: There is many books)", note: "Real subject is 'many books' (plural) → 'are'.", isCorrect: true },
          { sentence: "There were fifteen mangoes in the basket.", note: "Real subject is 'fifteen mangoes' → 'were'.", isCorrect: true }
        ],
        examTip: "Cross out 'There'. Read the sentence starting from the noun: 'Many books [are] on the table.' Instant clarity!"
      },
      {
        ruleNo: 15,
        ruleTitle: "Rule 15: Inverted Sentences (Subject Placed After the Verb)",
        plainEnglishExplanation: "Some sentences place the subject AFTER the verb for dramatic effect or description—often starting with a location or prepositional phrase. Find the true actor before choosing the verb!",
        officialRule: "When sentence order is inverted (predicate precedes subject), locate the true grammatical subject that follows the verb.",
        formulaOrPattern: "Prepositional Phrase / Location + VERB + [True Subject]",
        whyItMatters: "Frequently appears in poetic lines and descriptive literature extracts.",
        goldenExamples: [
          { sentence: "On the wall hang two paintings. (NOT: hangs)", note: "Real subject is 'two paintings' (plural) → 'hang'.", isCorrect: true },
          { sentence: "Down the street comes a noisy procession. (NOT: come)", note: "Real subject is 'a noisy procession' (singular) → 'comes'.", isCorrect: true },
          { sentence: "Here come the winners of the quiz. (NOT: comes)", note: "Real subject is 'the winners' (plural) → 'come'.", isCorrect: true }
        ]
      },
      {
        ruleNo: 16,
        ruleTitle: "Rule 16: 'One of the + Plural Noun' Is Still Singular",
        plainEnglishExplanation: "In the pattern 'one of the [plural noun]', the real subject is the word 'ONE'—so the verb must be SINGULAR, no matter how many plural nouns follow it!",
        officialRule: "The construction 'one of + plural noun' takes a singular verb because the head noun is the singular numeral 'one'.",
        formulaOrPattern: "ONE of the + [Plural Noun] + SINGULAR VERB (has / is / lives / was)",
        whyItMatters: "Ranked among the top 3 most common errors in CBSE Class 10 writing and editing.",
        goldenExamples: [
          { sentence: "One of the students has lost his bag. (NOT: have lost)", note: "'One' is the true subject → singular 'has'.", isCorrect: true },
          { sentence: "One of my friends lives in Jaipur. (NOT: live)", note: "'One' is the singular subject → verb takes -s ('lives').", isCorrect: true },
          { sentence: "One of the mangoes is rotten. (NOT: are)", note: "Only one mango is rotten → singular 'is'.", isCorrect: true }
        ],
        examTip: "Do not let the plural word right before the verb trick your ears! The real actor is 'One'."
      },
      {
        ruleNo: 17,
        ruleTitle: "Rule 17: Subject + Relative Clause ('Who / Which / That')",
        plainEnglishExplanation: "Inside a relative clause introduced by 'who', 'which', or 'that', the verb agrees with the ANTECEDENT (the noun the relative pronoun refers back to)—NOT with the main sentence subject!",
        officialRule: "In relative clauses, the verb agrees with the antecedent noun to which the relative pronoun refers.",
        formulaOrPattern: "One of the [Plural Nouns] WHO + Plural Verb | BUT: The ONLY ONE of the [Plural Nouns] WHO + Singular Verb",
        whyItMatters: "The legendary board exam trap that separates 95% students from 100% toppers.",
        goldenExamples: [
          { sentence: "She is one of the girls who play well. (NOT: plays)", note: "'who' refers back to 'girls' (plural) → verb is plural 'play'.", isCorrect: true },
          { sentence: "He is the only one of the boys who plays well. (NOT: play)", note: "The word 'ONLY' locks the focus onto 'the only one' (singular) → 'plays'!", isCorrect: true },
          { sentence: "This is one of the books that are kept in the library.", note: "'that' refers to 'books' (plural) → 'are'.", isCorrect: true }
        ],
        examTip: "Crucial Rule: 'One of the [plural] who...' takes a PLURAL verb. But 'The ONLY one of the [plural] who...' takes a SINGULAR verb!"
      },
      {
        ruleNo: 18,
        ruleTitle: "Rule 18: Titles of Books, Films & Country Names (Single Entities)",
        plainEnglishExplanation: "The title of a book, film, poem, or story, and the official name of a country or organization, is treated as ONE single entity—taking a SINGULAR verb even if words inside it look plural.",
        officialRule: "Proper nouns designating single collective units (book titles, movie titles, names of countries) take a singular verb.",
        formulaOrPattern: "Title / Country Name with plural words → SINGULAR VERB (is / has / was)",
        whyItMatters: "Tested with titles like 'Gulliver's Travels', 'Two States', 'The United States'.",
        goldenExamples: [
          { sentence: "'Two States' is a popular novel by Chetan Bhagat. (NOT: are)", note: "Names one book.", isCorrect: true },
          { sentence: "The United States has a massive economy. (NOT: have)", note: "Names one single country.", isCorrect: true },
          { sentence: "'The Avengers' is releasing in theatres this Friday.", note: "Names one movie title.", isCorrect: true }
        ]
      },
      {
        ruleNo: 19,
        ruleTitle: "Rule 19: 'A Number of' vs. 'The Number of'",
        plainEnglishExplanation: "'A number of' means 'many / several' and always takes a PLURAL verb. 'The number of' refers to one specific total numerical statistic and always takes a SINGULAR verb!",
        officialRule: "'A number of' is an indefinite plural quantifier taking a plural verb; 'The number of' specifies a single mathematical figure and takes a singular verb.",
        formulaOrPattern: "A number of + Plural Noun → PLURAL VERB (are / have) | The number of + Plural Noun → SINGULAR VERB (is / has)",
        whyItMatters: "Directly appears in competitive board editing and gap-filling questions.",
        goldenExamples: [
          { sentence: "A number of students are absent today. (NOT: is)", note: "'A number of' = many students → plural verb 'are'.", isCorrect: true },
          { sentence: "The number of absentees is rising every day. (NOT: are)", note: "'The number' is one single numerical figure → singular 'is'.", isCorrect: true },
          { sentence: "A number of complaints have been received.", note: "Several complaints → plural 'have'.", isCorrect: true }
        ],
        examTip: "Quick mental swap: 'A number of' ≈ 'Many' (plural) | 'The number of' ≈ 'The Total' (singular)."
      },
      {
        ruleNo: 20,
        ruleTitle: "Rule 20: Gerunds and Infinitives as the Subject",
        plainEnglishExplanation: "When an '-ing' action (gerund) or a 'to + verb' (infinitive) phrase serves as the subject of a sentence, it names ONE single activity or concept—so it is ALWAYS SINGULAR, even if it mentions plural objects!",
        officialRule: "A gerund phrase or infinitive phrase functioning as the grammatical subject of a sentence always takes a singular verb.",
        formulaOrPattern: "Gerund (-ing) / Infinitive (To + V1) Phrase + SINGULAR VERB (is / requires / was)",
        whyItMatters: "Students often look at the plural noun inside the phrase (like 'games' or 'medals') and make a mistake.",
        goldenExamples: [
          { sentence: "Playing video games is his favourite pastime. (NOT: are)", note: "The subject is 'Playing' (one activity), not 'games' → singular 'is'.", isCorrect: true },
          { sentence: "To win medals requires years of dedicated hard work. (NOT: require)", note: "The infinitive 'To win' is singular → takes -s verb 'requires'.", isCorrect: true },
          { sentence: "Collecting stamps was a popular hobby in the past.", note: "One hobby activity → 'was'.", isCorrect: true }
        ],
        examTip: "Ask: What is the subject? It's the ACTION itself ('Playing', 'Collecting'), which is always singular!"
      }
    ],
    mistakeCards: [
      {
        id: "con-m1",
        incorrect: "Either the teacher or the students has to leave.",
        correct: "Either the teacher or the students have to leave.",
        ruleExplanation: "Proximity Rule: When joined by 'either... or', the verb agrees with the nearer subject ('students' is plural → have).",
        trapType: "Proximity Rule Inversion",
        severity: "CRITICAL"
      },
      {
        id: "con-m2",
        incorrect: "The captain, along with his entire team, are celebrating.",
        correct: "The captain, along with his entire team, is celebrating.",
        ruleExplanation: "Interrupting phrases ('along with') do NOT change the subject. The subject is singular ('captain'), so the verb must be 'is'.",
        trapType: "Parenthetical Phrase Trap",
        severity: "CRITICAL"
      },
      {
        id: "con-m3",
        incorrect: "Bread and butter are his favourite breakfast.",
        correct: "Bread and butter is his favourite breakfast.",
        ruleExplanation: "When two nouns connected by 'and' represent a single combined dish, idea, or unit, the verb is singular ('is').",
        trapType: "Unified Compound Dish Exception",
        severity: "HIGH"
      },
      {
        id: "con-m4",
        incorrect: "One of the girls have won the prestigious scholarship.",
        correct: "One of the girls has won the prestigious scholarship.",
        ruleExplanation: "The real subject is 'One', which is singular. 'Girls' is inside the prepositional phrase. Use singular 'has'.",
        trapType: "One of the + Plural Noun Illusion",
        severity: "CRITICAL"
      },
      {
        id: "con-m5",
        incorrect: "The jury are unanimous in its final verdict.",
        correct: "The jury is unanimous in its final verdict.",
        ruleExplanation: "When a collective noun acts as one unified body (indicated by 'unanimous' and 'its'), it takes a singular verb ('is').",
        trapType: "Collective Noun Unity vs Division",
        severity: "HIGH"
      },
      {
        id: "con-m6",
        incorrect: "Mathematics are considered a difficult subject by many.",
        correct: "Mathematics is considered a difficult subject by many.",
        ruleExplanation: "Mathematics is one academic discipline that ends in 's'. It is grammatically singular and takes 'is'.",
        trapType: "False Plural Noun",
        severity: "MEDIUM"
      },
      {
        id: "con-m7",
        incorrect: "A number of students was present in the auditorium.",
        correct: "A number of students were present in the auditorium.",
        ruleExplanation: "'A number of' means 'many' and takes a plural verb ('were'). 'The number of' would take 'was'.",
        trapType: "A Number vs The Number Confusion",
        severity: "HIGH"
      },
      {
        id: "con-m8",
        incorrect: "These pair of scissors are very dull.",
        correct: "This pair of scissors is very dull.",
        ruleExplanation: "When preceded by 'pair of', the subject is 'pair' (singular), which requires 'is'.",
        trapType: "Pair of Noun Inversion",
        severity: "HIGH"
      },
      {
        id: "con-m9",
        incorrect: "She is one of the athletes who has qualified for the Olympics.",
        correct: "She is one of the athletes who have qualified for the Olympics.",
        ruleExplanation: "In a relative clause, 'who' refers back to 'athletes' (plural), so the verb inside the clause must be plural ('have qualified').",
        trapType: "Relative Clause Antecedent Trap",
        severity: "CRITICAL"
      },
      {
        id: "con-m10",
        incorrect: "Ten kilometres are too far to walk on foot.",
        correct: "Ten kilometres is too far to walk on foot.",
        ruleExplanation: "A distance considered as a single measurement or unit takes a singular verb ('is').",
        trapType: "Measurement Unit Plurality",
        severity: "MEDIUM"
      }
    ],
    practiceExercises: [
      {
        id: "con-ppt-1",
        question: "PPT Drill #1: Each boy and each girl ______ (receive) a certificate.",
        type: "fill-blank",
        correctAnswer: "receives",
        explanation: "Rule 3: When 'each' or 'every' precedes compound subjects, the verb is strictly singular (receives).",
        boardYearTag: "Classroom Teacher PPT"
      },
      {
        id: "con-ppt-2",
        question: "PPT Drill #2: Slow and steady ______ (win) the race.",
        type: "fill-blank",
        correctAnswer: "wins",
        explanation: "Rule 2: Represents one combined idea/idiom, taking a singular verb (wins).",
        boardYearTag: "Classroom Teacher PPT"
      },
      {
        id: "con-ppt-3",
        question: "PPT Drill #3: Either the teacher or the students ______ (know) the answer.",
        type: "fill-blank",
        correctAnswer: "know",
        explanation: "Rule 4: With 'either... or', the verb agrees with the nearer subject ('students' is plural → know).",
        boardYearTag: "Classroom Teacher PPT"
      },
      {
        id: "con-ppt-4",
        question: "PPT Drill #4: Neither Rita nor I ______ (be) at fault.",
        type: "fill-blank",
        correctAnswer: "am",
        explanation: "Rule 5: The nearer subject is 'I', so the verb takes the 1st person form 'am'.",
        boardYearTag: "Classroom Teacher PPT"
      },
      {
        id: "con-ppt-5",
        question: "PPT Drill #5: The jury ______ (be) divided over the verdict.",
        type: "fill-blank",
        correctAnswer: "are",
        explanation: "Rule 7: The jury members are acting as separate, disagreeing individuals ('divided' → plural 'are').",
        boardYearTag: "Classroom Teacher PPT"
      },
      {
        id: "con-ppt-6",
        question: "PPT Drill #6: Everybody in the class ______ (want) to go on the trip.",
        type: "fill-blank",
        correctAnswer: "wants",
        explanation: "Rule 8: 'Everybody' is an indefinite pronoun that is always grammatically singular → takes 'wants'.",
        boardYearTag: "Classroom Teacher PPT"
      },
      {
        id: "con-ppt-7",
        question: "PPT Drill #7: Mathematics ______ (be) not as hard as it looks.",
        type: "fill-blank",
        correctAnswer: "is",
        explanation: "Rule 9: Academic subjects ending in 's' are singular in meaning → takes 'is'.",
        boardYearTag: "Classroom Teacher PPT"
      },
      {
        id: "con-ppt-8",
        question: "PPT Drill #8: These scissors ______ (be) very old and blunt.",
        type: "fill-blank",
        correctAnswer: "are",
        explanation: "Rule 10: Pair nouns made of two parts are true plurals and take a plural verb ('are').",
        boardYearTag: "Classroom Teacher PPT"
      },
      {
        id: "con-ppt-9",
        question: "PPT Drill #9: The Principal, along with the teachers, ______ (attend) the seminar.",
        type: "fill-blank",
        correctAnswer: "attends",
        explanation: "Rule 11: The phrase 'along with the teachers' does not change the singular subject 'Principal' → 'attends'.",
        boardYearTag: "Classroom Teacher PPT"
      },
      {
        id: "con-ppt-10",
        question: "PPT Drill #10: Two hundred rupees ______ (be) too little for this book.",
        type: "fill-blank",
        correctAnswer: "is",
        explanation: "Rule 12: A sum of money thought of as one single amount takes a singular verb ('is').",
        boardYearTag: "Classroom Teacher PPT"
      },
      {
        id: "con-ppt-11",
        question: "PPT Drill #11: Half of the mangoes ______ (be) rotten.",
        type: "fill-blank",
        correctAnswer: "are",
        explanation: "Rule 13: With fractions, the verb agrees with the noun after 'of' ('mangoes' is plural → 'are').",
        boardYearTag: "Classroom Teacher PPT"
      },
      {
        id: "con-ppt-12",
        question: "PPT Drill #12: There ______ (be) fifteen students absent today.",
        type: "fill-blank",
        correctAnswer: "are",
        explanation: "Rule 14: In 'there' sentences, the verb agrees with the real subject that follows ('fifteen students' → 'are').",
        boardYearTag: "Classroom Teacher PPT"
      },
      {
        id: "con-ppt-13",
        question: "PPT Drill #13: Down the lane ______ (come) a group of singers.",
        type: "fill-blank",
        correctAnswer: "comes",
        explanation: "Rule 15: In inverted sentences, locate the real subject: 'a group' is singular → takes 'comes'.",
        boardYearTag: "Classroom Teacher PPT"
      },
      {
        id: "con-ppt-14",
        question: "PPT Drill #14: One of the girls ______ (have) forgotten her bag.",
        type: "fill-blank",
        correctAnswer: "has",
        explanation: "Rule 16: 'One' is the true singular subject → takes 'has'.",
        boardYearTag: "Classroom Teacher PPT"
      },
      {
        id: "con-ppt-15",
        question: "PPT Drill #15: He is the only one of the boys who ______ (play) the violin.",
        type: "fill-blank",
        correctAnswer: "plays",
        explanation: "Rule 17: 'The ONLY one' locks the focus onto a singular person → 'who plays'.",
        boardYearTag: "Classroom Teacher PPT"
      },
      {
        id: "con-ppt-16",
        question: "PPT Drill #16: A number of students ______ (be) waiting outside.",
        type: "fill-blank",
        correctAnswer: "are",
        explanation: "Rule 19: 'A number of' means 'many' and takes a plural verb ('are').",
        boardYearTag: "Classroom Teacher PPT"
      }
    ],
    examinerSecretTips: [
      "Find the true subject by asking 'Who or what is performing the action?'. Do not get fooled by prepositional phrases.",
      "Cover interrupting phrases (like 'as well as' or 'along with') with your hand to reveal the bare subject.",
      "Remember the proximity rule only applies to OR, NOR, EITHER... OR, and NEITHER... NOR.",
      "Distinguish between 'A number of' (plural) and 'The number of' (singular).",
      "Watch out for 'One of the... who': without 'only', the verb is plural; with 'the only one', the verb is singular!"
    ]
  },

  // =========================================================================
  // TOPIC 4: REPORTED SPEECH (DIRECT TO INDIRECT)
  // =========================================================================
  {
    id: "grammar-speech",
    title: "Reported Speech (0 to 100% Dialogue Transformation Masterclass)",
    syllabusCategory: "Reported Speech",
    emoji: "💬",
    shortTagline: "Direct to Indirect transformations, the 3 Inflexible Shifts, and CBSE 4-mark Dialogue Mastery.",
    zeroKnowledgeIntro: {
      whatIsIt: "Reported Speech (Indirect Speech) is how you convey what another person said to a third person without quoting their exact words inside quotation marks.",
      concreteAnalogy: "Imagine you are an investigative television reporter. If the Mayor tells you in the morning: 'I am inaugurating this bridge here today', you cannot broadcast in the evening: 'The Mayor said I am inaugurating this bridge here today' because YOU are not the Mayor, the morning has passed into evening ('today' moves forward), and the TV studio is not the bridge ('here' becomes 'there')! You report: 'The Mayor announced that he was inaugurating that bridge there that day.' You seamlessly shifted the person, the tense, and the time-space coordinates!",
      whyVerbsChange: "Because direct speech occurred in the past, when you report it later, all present tenses take one step backward into the past. Words pointing to the present physical environment ('here', 'this', 'now') convert into past narrative words ('there', 'that', 'then').",
      coreMentalModel: "The 3 Inflexible Shifts of Indirect Speech:\n1. PRONOUN SHIFT: The SON Rule (1st Person → Subject, 2nd Person → Object, 3rd Person → No Change).\n2. TENSE BACKSHIFT: V1/V5 → V2; is/am/are → was/were; has/have → had; V2 → had + V3; was/were → had been; will → would; can → could; may → might.\n3. TIME & PLACE SHIFT: today → that day; tomorrow → the next day; yesterday → the previous day; now → then; here → there; ago → before; this → that; these → those.\n*THE GOLDEN IMMUNITY: Universal truths, scientific laws, geographical facts, and habitual facts NEVER change tense! ('The Earth revolves around the Sun' remains unchanged)."
    },
    toddlerAnalogy: {
      hook: "The Gossip Storyteller Game!",
      scenario: "Whenever you tell your best friend what your teacher said yesterday, you put on a magical time-cloak: 'am' becomes 'was', 'have' becomes 'had', 'can' becomes 'could', and 'tomorrow' becomes 'the next day'!",
      ahaRule: "Rule: If the speaking happened yesterday, verbs jump one step back into the past! But if it's a permanent truth that never dies ('Fire is hot'), leave the verb alone!"
    },
    ruleBlocks: [
      {
        ruleNo: 1,
        ruleTitle: "Assertive / Declarative Statements",
        plainEnglishExplanation: "Simple statements and facts. Change 'said to' into 'told' + listener. Use the conjunction 'that' to merge the two clauses.",
        officialRule: "In declarative clauses, the reporting verb 'said to' is replaced by 'told' with an indirect object. The connective 'that' introduces the reported clause, and the verb backshifts.",
        formulaOrPattern: "Subject + said to + Object → Subject + TOLD + Object + THAT + Subject + Backshifted Verb",
        goldenExamples: [
          { sentence: "Direct: Rahul said to me, 'I have completed my homework.' → Indirect: Rahul told me that he had completed his homework.", note: "'said to me' → 'told me' (no 'to'); 'I' → 'he'; 'have completed' → 'had completed'." },
          { sentence: "Direct: She said, 'I am reading a novel now.' → Indirect: She said that she was reading a novel then.", note: "'said' remains 'said'; 'am reading' → 'was reading'; 'now' → 'then'." },
          { sentence: "Direct: The teacher said, 'The Earth rotates on its axis.' → Indirect: The teacher said that the Earth rotates on its axis.", note: "Universal scientific fact: tense remains unchanged in present simple." }
        ],
        whyItMatters: "Forms the bedrock of 50% of CBSE dialogue completions.",
        howToDecide: "If the speaker is stating a fact or opinion ending with a full stop, use 'told + object + that'.",
        examTip: "Never write 'told to me'. 'Told' takes a direct object: 'told me', 'told him', 'told the teacher'."
      },
      {
        ruleNo: 2,
        ruleTitle: "Interrogative: Yes / No Questions",
        plainEnglishExplanation: "Questions that can be answered with a simple 'Yes' or 'No' (starting with helping verbs: is, are, do, does, did, can, will, have). Connect with 'if' or 'whether'. DO NOT use 'that'! Swap the question order back to normal statement order (Subject + Verb), and remove the question mark!",
        officialRule: "Yes/No interrogatives are reported using 'asked' or 'inquired of'. Connective 'if' or 'whether' is used. Inversion is removed and question mark is replaced with a full stop.",
        formulaOrPattern: "Subject + asked + (Object) + IF / WHETHER + Subject + Verb + (full stop)",
        goldenExamples: [
          { sentence: "Direct: Mohan said to me, 'Are you coming to school today?' → Indirect: Mohan asked me if I was coming to school that day.", note: "Notice order: 'I was coming' (NOT 'was I coming'); 'today' → 'that day'; question mark deleted." },
          { sentence: "Direct: The examiner said, 'Have you brought your admit card?' → Indirect: The examiner inquired whether I had brought my admit card.", note: "'Have you brought' → 'whether I had brought'." },
          { sentence: "Direct: Father said, 'Do you know the answer?' → Indirect: Father asked if I knew the answer.", note: "'Do you know' (V1) → 'I knew' (V2)." }
        ],
        whyItMatters: "CBSE frequently tests whether students mistakenly write 'asked that if' or invert the verb.",
        howToDecide: "Does the question begin with Is, Are, Do, Did, Have, Can, or Will? If yes, use 'if/whether' + Subject + Verb.",
        examTip: "Writing 'He asked that if I was ready' loses 1 mark instantly. Never combine 'that' with 'if'!"
      },
      {
        ruleNo: 3,
        ruleTitle: "Interrogative: Wh- Questions",
        plainEnglishExplanation: "Questions beginning with question words: Who, What, Where, When, Why, Which, Whose, How. The Wh-word itself becomes the connector! DO NOT add 'that' and DO NOT add 'if'! Swap verb-subject order back to normal (Subject + Verb), and delete the question mark.",
        officialRule: "Wh-interrogatives retain the interrogative pronoun or adverb as the subordinate conjunction. No connective 'that' or 'if' is permitted. Word order changes from interrogative inversion to declarative.",
        formulaOrPattern: "Subject + asked + Object + WH-WORD + Subject + Verb + (full stop)",
        goldenExamples: [
          { sentence: "Direct: The policeman said to the driver, 'Where are you going?' → Indirect: The policeman asked the driver where he was going.", note: "'Where' connects; 'are you going' becomes 'he was going' (Subject precedes Verb)." },
          { sentence: "Direct: She said to him, 'Why did you break the vase?' → Indirect: She asked him why he had broken the vase.", note: "'Why' connects; 'did you break' (Simple Past V2) → 'he had broken' (Past Perfect)." },
          { sentence: "Direct: Teacher said to Rohan, 'How will you solve this problem?' → Indirect: Teacher asked Rohan how he would solve that problem.", note: "'How' connects; 'will you solve' → 'he would solve'; 'this' → 'that'." }
        ],
        whyItMatters: "Most common error in Class 10 Board exams: students write 'where was he going' instead of 'where he was going'.",
        howToDecide: "Spot the Wh-word. Put it immediately after the reporting verb/object, followed by the Subject, then the Verb.",
        examTip: "Always check the word order: [WH-WORD] + [SUBJECT] + [VERB]. No question mark at the end!"
      },
      {
        ruleNo: 4,
        ruleTitle: "Imperatives: Commands & Official Orders",
        plainEnglishExplanation: "Commands given by officers, teachers, masters, or parents. Change 'said to' into 'ordered' or 'commanded'. Connect the action with 'to + V1' (the infinitive).",
        officialRule: "Imperative sentences expressing commands are transformed by governing verbs like 'ordered' or 'commanded' followed by a to-infinitive clause.",
        formulaOrPattern: "Subject + ORDERED / COMMANDED + Object + TO + V1",
        goldenExamples: [
          { sentence: "Direct: The captain said to the soldiers, 'Stand at ease.' → Indirect: The captain ordered the soldiers to stand at ease.", note: "'said to' → 'ordered'; 'Stand' → 'to stand'." },
          { sentence: "Direct: The master said to his servant, 'Clean the kitchen immediately.' → Indirect: The master ordered his servant to clean the kitchen immediately.", note: "'said to' → 'ordered'; 'Clean' → 'to clean'." }
        ],
        whyItMatters: "Verbs do not backshift into past tense in imperatives; they become infinitives ('to + V1').",
        howToDecide: "Is the speaker in authority issuing an order? Use 'ordered + object + to + V1'.",
        examTip: "Do not write 'ordered that to clean'. No 'that' is used with to-infinitives."
      },
      {
        ruleNo: 5,
        ruleTitle: "Imperatives: Requests & Polite Pleas",
        plainEnglishExplanation: "Sentences with 'Please', 'Kindly', or courteous requests. Change 'said to' into 'requested', 'begged', or 'implored'. REMOVE 'please' and 'kindly', and connect with 'to + V1'.",
        officialRule: "Requests are introduced by reporting verbs such as 'requested', 'entreated', or 'begged'. Politeness markers ('please', 'kindly') are dropped and the main verb becomes a to-infinitive.",
        formulaOrPattern: "Subject + REQUESTED + Object + TO + V1 (drop 'please' / 'kindly')",
        goldenExamples: [
          { sentence: "Direct: Ananya said to Rohit, 'Please lend me your pen.' → Indirect: Ananya requested Rohit to lend her his pen.", note: "'Please' is dropped; 'said to' → 'requested'; 'to lend'; 'me' → 'her'; 'your' → 'his'." },
          { sentence: "Direct: The old man said to the boy, 'Kindly help me cross the road.' → Indirect: The old man requested the boy to help him cross the road.", note: "'Kindly' is dropped; 'to help him cross'." }
        ],
        whyItMatters: "Eliminates redundancy and conveys proper social etiquette.",
        howToDecide: "If 'please' or 'kindly' appears, automatically choose 'requested' and delete the politeness word.",
        examTip: "Writing 'requested him to please lend' is incorrect. Always drop 'please'!"
      },
      {
        ruleNo: 6,
        ruleTitle: "Imperatives: Advice, Suggestions & Warnings",
        plainEnglishExplanation: "Guidance given by doctors, elders, teachers, or friends. Change 'said to' into 'advised', 'suggested', 'urged', or 'warned' + 'to + V1'.",
        officialRule: "Imperatives offering counsel are reported with verbs of advice ('advised', 'cautioned', 'warned') followed by a to-infinitive complement.",
        formulaOrPattern: "Subject + ADVISED / WARNED + Object + TO + V1",
        goldenExamples: [
          { sentence: "Direct: The doctor said to the patient, 'Exercise daily and eat light meals.' → Indirect: The doctor advised the patient to exercise daily and eat light meals.", note: "'said to' → 'advised'; 'Exercise' → 'to exercise'." },
          { sentence: "Direct: Father said to me, 'Drive carefully on the highway.' → Indirect: Father advised me to drive carefully on the highway.", note: "'said to' → 'advised'; 'to drive carefully'." },
          { sentence: "Direct: The guard said to the tourists, 'Do not step near the edge; the cliff is slippery.' → Indirect: The guard warned the tourists not to step near the edge as the cliff was slippery.", note: "'warned' captures the peril accurately." }
        ],
        whyItMatters: "CBSE awards expression marks for choosing the precise contextual reporting verb (advised vs warned).",
        howToDecide: "Is it health or moral counsel? Use 'advised'. Is it a danger or penalty? Use 'warned'.",
        examTip: "Match the reporting verb to the profession (e.g., doctor → advised, judge → ordered, policeman → cautioned)."
      },
      {
        ruleNo: 7,
        ruleTitle: "Negative Imperatives (Prohibitions & 'Do Not')",
        plainEnglishExplanation: "Sentences beginning with 'Do not' or 'Don't'. Two valid ways to report: 1. Use 'told/ordered/advised + NOT TO + V1'; OR 2. Use 'FORBADE + Object + TO + V1'. (Never say 'forbade ... not to'—that is a double negative!)",
        officialRule: "Prohibitions are reported either using 'not to + V1' with standard reporting verbs, or using 'forbade' (which inherently contains negative polarity) with a positive to-infinitive.",
        formulaOrPattern: "Method 1: Subject + advised/ordered + Object + NOT TO + V1\nMethod 2: Subject + FORBADE + Object + TO + V1 (NO 'not'!)",
        goldenExamples: [
          { sentence: "Direct: Mother said to the child, 'Do not touch the hot kettle.' → Indirect (Method 1): Mother warned the child not to touch the hot kettle.", note: "'Do not touch' becomes 'not to touch'." },
          { sentence: "Direct: The teacher said to the students, 'Do not shout in the library.' → Indirect (Method 2): The teacher forbade the students to shout in the library.", note: "'forbade' already means prohibited; writing 'forbade not to shout' is a severe error!" }
        ],
        whyItMatters: "One of the most frequently failed Board grammar traps.",
        howToDecide: "If you use 'forbade', use positive 'to + V1'. If you use 'told/ordered/advised', use 'not to + V1'.",
        examTip: "Never use 'not' with 'forbade'. 'Forbade me not to go' loses 1 full mark."
      },
      {
        ruleNo: 8,
        ruleTitle: "Exclamatory Sentences (Sudden Emotions)",
        plainEnglishExplanation: "Sentences expressing joy, sorrow, shock, or wonder (ending with '!'). Change 'said' into 'exclaimed with joy / sorrow / surprise / wonder / disgust' + 'that' + declarative sentence. Remove interjections like 'Hurrah!', 'Alas!', 'Bravo!'. Words like 'What a...' or 'How...' convert into 'very' or 'great'.",
        officialRule: "Exclamations are introduced by 'exclaimed with [emotion]' followed by conjunction 'that'. Interjections are eliminated and the exclamatory structure converts into an intensified declarative statement.",
        formulaOrPattern: "Subject + EXCLAIMED WITH JOY/SORROW/WONDER + THAT + Subject + Backshifted Verb + (very/great)",
        goldenExamples: [
          { sentence: "Direct: The players said, 'Hurrah! We have won the championship!' → Indirect: The players exclaimed with joy that they had won the championship.", note: "'Hurrah' is dropped; 'exclaimed with joy that'; 'have won' → 'had won'." },
          { sentence: "Direct: The old woman said, 'Alas! My purse is stolen!' → Indirect: The old woman exclaimed with sorrow that her purse was stolen.", note: "'Alas' is dropped; 'exclaimed with sorrow that'." },
          { sentence: "Direct: She said, 'What a beautiful painting!' → Indirect: She exclaimed with wonder that it was a very beautiful painting.", note: "'What a...' becomes 'it was a very beautiful painting'." }
        ],
        whyItMatters: "Transforms emotional outbursts into formal standard English prose.",
        howToDecide: "Identify the emotion: Hurrah = joy, Alas = sorrow/grief, What a / How = wonder/surprise, Bravo = applause/praise.",
        examTip: "Always remove the exclamation mark and insert an intensifier ('very', 'great', 'extremely')."
      },
      {
        ruleNo: 9,
        ruleTitle: "Optative Sentences (Wishes & Prayers)",
        plainEnglishExplanation: "Sentences expressing a wish, blessing, curse, or prayer (often starting with 'May...'). Change 'said to' into 'wished', 'prayed', or 'blessed'. Connect with 'that' and convert 'May + Subject' into 'Subject + might'.",
        officialRule: "Optative sentences expressing blessings or prayers are governed by 'prayed', 'wished', or 'blessed'. Inversion 'May you' transforms to declarative 'he/she might'.",
        formulaOrPattern: "Subject + PRAYED / WISHED + THAT + Subject + MIGHT + V1",
        goldenExamples: [
          { sentence: "Direct: The priest said to the girl, 'May God bless you with good health.' → Indirect: The priest prayed that God might bless the girl with good health.", note: "'said to' → 'prayed'; 'that God might bless'." },
          { sentence: "Direct: They said to him, 'May you succeed in your mission.' → Indirect: They wished that he might succeed in his mission.", note: "'May you succeed' → 'that he might succeed'." }
        ],
        whyItMatters: "Commonly tested in formal speech transformations and literature character extracts.",
        howToDecide: "Does the sentence express a prayer or wish starting with 'May'? Use 'prayed that [subject] might + V1'.",
        examTip: "Remember: 'may' changes to 'might' and shifts behind the subject ('God might bless')."
      },
      {
        ruleNo: 10,
        ruleTitle: "Modals in Indirect Speech (Shifting vs Invariant)",
        plainEnglishExplanation: "Which modals shift and which remain unchanged? First-generation modals backshift: can → could, may → might, will/shall → would. Second-generation modals DO NOT change: could, should, would, might, ought to, used to, and 'must' (when expressing permanent moral duty or deduction) remain exactly as they are!",
        officialRule: "Primary modals change into past forms. Secondary and past-equivalent modals (could, should, would, might, ought to, must) exhibit morphological invariance in reported clauses.",
        formulaOrPattern: "can → COULD | may → MIGHT | will/shall → WOULD | could/should/would/might/ought to → UNCHANGED",
        goldenExamples: [
          { sentence: "Direct: He said, 'I can solve this puzzle.' → Indirect: He said that he could solve that puzzle.", note: "'can' → 'could'; 'this' → 'that'." },
          { sentence: "Direct: She said, 'You should consult a physician.' → Indirect: She said that I should consult a physician.", note: "'should' remains 'should' (no backshift)." },
          { sentence: "Direct: The teacher said, 'We must obey the laws of nature.' → Indirect: The teacher said that we must obey the laws of nature.", note: "'must' representing permanent universal duty remains 'must'." }
        ],
        whyItMatters: "Prevents awkward over-corrections like trying to backshift 'should' or 'ought to'.",
        howToDecide: "Is it can, will, or may? Backshift to could, would, might. Is it already could, should, would, or ought to? Keep it unchanged!",
        examTip: "'Shall' in requests transforms to 'should' ('Shall I open the window?' → 'asked if he should open the window'), but in statements it transforms to 'would'!"
      }
    ],
    mistakeCards: [
      {
        id: "rep-m1",
        incorrect: "He asked me that where was I going.",
        correct: "He asked me where I was going.",
        ruleExplanation: "Two fatal errors in one: 1. Never add 'that' before a Wh-word. 2. Never invert subject-verb in indirect speech (use 'I was going', not 'was I going').",
        trapType: "Double Conjunction & Inversion Error",
        severity: "CRITICAL"
      },
      {
        id: "rep-m2",
        incorrect: "The teacher told that the Earth revolved around the Sun.",
        correct: "The teacher said that the Earth revolves around the Sun.",
        ruleExplanation: "Universal scientific truths never backshift into past tense, even when the reporting verb is in past tense. Also, 'told' requires a listener ('told the class'); otherwise use 'said'.",
        trapType: "Universal Fact Tense Retention",
        severity: "CRITICAL"
      },
      {
        id: "rep-m3",
        incorrect: "Rohan told to me that he was feeling unwell.",
        correct: "Rohan told me that he was feeling unwell.",
        ruleExplanation: "'Told' is a transitive verb that directly takes the object without the preposition 'to'. You say 'said to me' OR 'told me'.",
        trapType: "The 'Told To' Preposition Trap",
        severity: "HIGH"
      },
      {
        id: "rep-m4",
        incorrect: "The doctor forbade the patient not to eat oily snacks.",
        correct: "The doctor forbade the patient to eat oily snacks.",
        ruleExplanation: "'Forbade' inherently means 'commanded not to do'. Adding 'not' creates an erroneous double negative meaning the doctor ordered him TO eat oily snacks!",
        trapType: "Double Negative with Forbade",
        severity: "CRITICAL"
      },
      {
        id: "rep-m5",
        incorrect: "He asked me if I was hungry?",
        correct: "He asked me if I was hungry.",
        ruleExplanation: "An indirect question is no longer a question; it is a declarative noun clause. You MUST replace the question mark with a period/full stop.",
        trapType: "Punctuation Question Mark Residue",
        severity: "MEDIUM"
      },
      {
        id: "rep-m6",
        incorrect: "She requested him that please give her some water.",
        correct: "She requested him to give her some water.",
        ruleExplanation: "In imperative requests, drop 'please' and 'that'; govern the action directly with a to-infinitive ('to give').",
        trapType: "Politeness Marker Redundancy",
        severity: "HIGH"
      },
      {
        id: "rep-m7",
        incorrect: "Aman asked Priya where did she buy that watch.",
        correct: "Aman asked Priya where she had bought that watch.",
        ruleExplanation: "In indirect speech, the auxiliary 'did' is removed, and the Simple Past verb (buy) backshifts into Past Perfect ('had bought').",
        trapType: "Auxiliary 'Did' Residue",
        severity: "CRITICAL"
      },
      {
        id: "rep-m8",
        incorrect: "He asked me whether I will join him tomorrow.",
        correct: "He asked me whether I would join him the next day.",
        ruleExplanation: "Both the modal ('will' → 'would') and the time adverbial ('tomorrow' → 'the next day') must backshift when the reporting verb is past.",
        trapType: "Incomplete Time & Modal Backshift",
        severity: "HIGH"
      }
    ],
    practiceExercises: [
      {
        id: "rep-ex1",
        question: "Change to Indirect: Anita said to me, 'I will return your notebook tomorrow.'",
        type: "transformation",
        correctAnswer: "Anita told me that she would return my notebook the next day.",
        explanation: "'said to me' → 'told me'; connector 'that'; 'I' → 'she'; 'will' → 'would'; 'your' → 'my'; 'tomorrow' → 'the next day'.",
        boardYearTag: "CBSE 2024"
      },
      {
        id: "rep-ex2",
        question: "Change to Indirect: The librarian said to the students, 'Do not write anything in the library books.'",
        type: "transformation",
        correctAnswer: "The librarian instructed the students not to write anything in the library books.",
        explanation: "Negative imperative becomes 'instructed / advised [object] not to write'. Alternatively: 'The librarian forbade the students to write anything in the library books.'",
        boardYearTag: "CBSE 2023"
      },
      {
        id: "rep-ex3",
        question: "Change to Indirect: Father said to Karan, 'Where have you parked the car?'",
        type: "transformation",
        correctAnswer: "Father asked Karan where he had parked the car.",
        explanation: "Wh-interrogative uses 'where' as connector; inversion is removed ('have you parked' → 'he had parked'); question mark deleted.",
        boardYearTag: "CBSE 2024"
      },
      {
        id: "rep-ex4",
        question: "Change to Indirect: The science teacher said, 'Light travels in a straight line.'",
        type: "transformation",
        correctAnswer: "The science teacher said that light travels in a straight line.",
        explanation: "Universal scientific law retains Simple Present tense even with past reporting verb 'said'.",
        boardYearTag: "CBSE 2022"
      },
      {
        id: "rep-ex5",
        question: "Change to Indirect: The passenger said to the conductor, 'Can you tell me the arrival time of the train?'",
        type: "transformation",
        correctAnswer: "The passenger asked the conductor if he could tell him the arrival time of the train.",
        explanation: "Yes/No question uses 'if'; 'can you tell me' → 'he could tell him'; question mark removed.",
        boardYearTag: "CBSE 2023"
      },
      {
        id: "rep-ex6",
        question: "Change to Indirect: The captain said, 'Hurrah! Our school has secured the first position!'",
        type: "transformation",
        correctAnswer: "The captain exclaimed with joy that their school had secured the first position.",
        explanation: "Exclamation of joy: 'exclaimed with joy that'; 'has secured' → 'had secured'; 'our' → 'their'.",
        boardYearTag: "CBSE 2020"
      },
      {
        id: "rep-ex7",
        question: "Change to Indirect: The doctor said to the patient, 'Take these tablets twice daily after meals.'",
        type: "transformation",
        correctAnswer: "The doctor advised the patient to take those tablets twice daily after meals.",
        explanation: "Medical instruction: 'said to' → 'advised'; 'Take' → 'to take'; 'these' → 'those'.",
        boardYearTag: "CBSE 2024"
      },
      {
        id: "rep-ex8",
        question: "Change to Indirect: Mother said to Aryan, 'Did you finish your project yesterday?'",
        type: "transformation",
        correctAnswer: "Mother asked Aryan if he had finished his project the day before.",
        explanation: "Yes/No question in Simple Past ('did finish') backshifts into Past Perfect ('had finished'); 'yesterday' → 'the day before'.",
        boardYearTag: "CBSE 2023"
      },
      {
        id: "rep-dialogue-1",
        question: "Dialogue Completion (Doctor & Patient):\nDoctor: 'How are you feeling today?'\nPatient: 'I have a terrible headache and fever.'\n\nThe doctor asked the patient (a) ________. The patient replied that (b) ________.",
        type: "dialogue-completion",
        correctAnswer: "(a) how he was feeling that day | (b) he had a terrible headache and fever",
        explanation: "In (a), Wh-question converts to 'how he was feeling that day'. In (b), Present Perfect/Simple 'have' converts to past 'he had a terrible headache and fever'.",
        boardYearTag: "CBSE 2024 Board Sample"
      },
      {
        id: "rep-dialogue-2",
        question: "Dialogue Completion (Policeman & Motorist):\nPoliceman: 'Why are you driving without a helmet?'\nMotorist: 'I forgot it at home in a rush.'\n\nThe traffic policeman asked the motorist (a) ________. The motorist apologized and explained that (b) ________.",
        type: "dialogue-completion",
        correctAnswer: "(a) why he was driving without a helmet | (b) he had forgotten it at home in a rush",
        explanation: "In (a), 'Why are you driving' becomes 'why he was driving'. In (b), Simple Past 'forgot' backshifts into Past Perfect 'he had forgotten it at home in a rush'.",
        boardYearTag: "CBSE 2023 Set 1"
      },
      {
        id: "rep-dialogue-3",
        question: "Dialogue Completion (Interviewer & Candidate):\nInterviewer: 'Can you join our organization next Monday?'\nCandidate: 'Yes, I will submit my resignation today.'\n\nThe interviewer inquired whether the candidate (a) ________. The candidate affirmed and stated that (b) ________.",
        type: "dialogue-completion",
        correctAnswer: "(a) could join their organization the following Monday | (b) he/she would submit his/her resignation that day",
        explanation: "In (a), 'Can you join' → 'could join their organization the following Monday'. In (b), 'will submit' → 'would submit... that day'.",
        boardYearTag: "CBSE 2023 Set 2"
      },
      {
        id: "rep-dialogue-4",
        question: "Dialogue Completion (Teacher & Student):\nTeacher: 'Why were you absent from the practical exam yesterday?'\nStudent: 'I was down with severe viral fever.'\n\nThe teacher inquired of the student (a) ________. The student respectfully replied that (b) ________.",
        type: "dialogue-completion",
        correctAnswer: "(a) why he had been absent from the practical exam the previous day | (b) he had been down with severe viral fever",
        explanation: "'were absent' (Past Simple of 'be') backshifts to 'had been absent'; 'yesterday' → 'the previous day'. In (b), 'was down' backshifts to 'he had been down'.",
        boardYearTag: "CBSE 2024 Compartment"
      },
      {
        id: "rep-dialogue-5",
        question: "Dialogue Completion (Father & Son):\nFather: 'Don't play video games late into the night.'\nSon: 'I promise I will turn off the computer by 10 PM.'\n\nThe father advised his son (a) ________. The son promised that (b) ________.",
        type: "dialogue-completion",
        correctAnswer: "(a) not to play video games late into the night | (b) he would turn off the computer by 10 PM",
        explanation: "In (a), negative imperative 'Don't play' → 'not to play'. In (b), 'I will turn off' → 'he would turn off'.",
        boardYearTag: "CBSE 2022 Term II"
      }
    ],
    examinerSecretTips: [
      "In indirect questions, the question mark is always deleted and the word order becomes subject + verb (e.g., 'where I was', NOT 'where was I').",
      "Always check time/place shifts: today → that day, tomorrow → the next day / following day, yesterday → the day before / previous day, here → there, now → then.",
      "Never write 'told to me'; 'told' takes a direct object without 'to' ('told me', 'told him').",
      "Universal scientific facts and habitual truths never change tense (e.g., 'water boils at 100°C', 'the sun rises in the east').",
      "In dialogue completion blanks, check if the connector ('that', 'if', 'why') is already provided in the question prompt before writing your answer to avoid double conjunctions!"
    ]
  }
];
