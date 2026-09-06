import type { VaultQuestion } from "@/data/vaultQuestions";

export const ENGLISH_CH20_QUESTIONS: VaultQuestion[] = [
  {
    id: "eng_ch20_q1",
    chapter: 20,
    chapterName: "Subject-Verb Concord & Grammar Clinic",
    marks: 1,
    type: "MCQ",
    question: "Choose the grammatically correct verb:\n'The captain, along with all his team members, ______ received warmly at the airport.'",
    options: ["were", "was", "are", "have been"],
    correctOption: 1,
    answer: "Option B: was",
    explanation: "Rule of Intervening Phrases: When a singular subject ('The captain') is joined to another noun by 'along with', 'as well as', or 'together with', the verb agrees strictly with the FIRST subject ('captain' = singular → 'was').",
    examinerNote: "CBSE 2024 Board Question. Classic Intervening Prepositional Phrase trap.",
    source: "CBSE Official PYQ"
  },
  {
    id: "eng_ch20_q2",
    chapter: 20,
    chapterName: "Subject-Verb Concord & Grammar Clinic",
    marks: 1,
    type: "MCQ",
    question: "Select the option that correctly completes the sentence:\n'Neither the teacher nor the students ______ interested in postponing the examination.'",
    options: ["is", "was", "were", "has been"],
    correctOption: 2,
    answer: "Option C: were",
    explanation: "Proximity Rule: In 'neither... nor' and 'either... or' constructions, the verb agrees with the subject closest to it. Here, 'students' (plural) is closest to the blank, requiring the plural verb 'were'.",
    source: "CBSE Specimen 2026"
  },
  {
    id: "eng_ch20_q3",
    chapter: 20,
    chapterName: "Subject-Verb Concord & Grammar Clinic",
    marks: 1,
    type: "MCQ",
    question: "Identify the error in the underlined portion and select the correction:\n'Each of the suspects have denied any involvement in the bank heist.'",
    options: [
      "Error: suspects | Correction: suspect",
      "Error: have | Correction: has",
      "Error: denied | Correction: denying",
      "Error: any | Correction: some"
    ],
    correctOption: 1,
    answer: "Option B: Error: have | Correction: has",
    explanation: "Indefinite Pronouns: 'Each', 'Every', 'Either', 'Neither', 'One of the' ALWAYS take a singular verb regardless of the plural noun following 'of'. 'Each... has denied'.",
    source: "CBSE Board 2025"
  },
  {
    id: "eng_ch20_q4",
    chapter: 20,
    chapterName: "Subject-Verb Concord & Grammar Clinic",
    marks: 1,
    type: "MCQ",
    question: "Complete the sentence:\n'Bread and butter ______ his only daily nourishment during the famine.'",
    options: ["were", "are", "was", "have been"],
    correctOption: 2,
    answer: "Option C: was",
    explanation: "Compound Single Idea Rule: When two nouns joined by 'and' express a single unified concept, dish, or idea (bread and butter, slow and steady, honor and glory), they take a singular verb.",
    source: "NCERT Class 10"
  },
  {
    id: "eng_ch20_q5",
    chapter: 20,
    chapterName: "Subject-Verb Concord & Grammar Clinic",
    marks: 2,
    type: "SA",
    question: "Fill in the blanks with correct forms of the verbs given in brackets:\n(a) Ten thousand rupees ______ (is / are) a substantial scholarship for a rural student.\n(b) The jury ______ (was / were) divided in their opinions regarding the verdict.",
    answer: "(a) is\n(b) were",
    explanation: "(a) Specific sums of money, distances, or periods of time treated as a unified whole take a singular verb ('is').\n(b) Collective nouns (jury, committee) take a plural verb when members act individually or hold divided opinions ('were').",
    source: "CBSE Board Examination"
  },
  {
    id: "eng_ch20_q6",
    chapter: 20,
    chapterName: "Subject-Verb Concord & Grammar Clinic",
    marks: 3,
    type: "SA",
    question: "Correct the grammatical errors in the following three sentences:\n(i) Mathematics are a difficult subject for many beginners.\n(ii) A number of passengers was injured in the bus collision.\n(iii) My new pair of scissors are very sharp.",
    answer: "(i) Mathematics IS a difficult subject for many beginners. ('Mathematics' ends in -s but is singular)\n(ii) A number of passengers WERE injured in the bus collision. ('A number of' = plural; 'The number of' = singular)\n(iii) My new pair of scissors IS very sharp. (Preceded by 'a pair of', taking singular verb 'is')",
    explanation: "Covers branch-of-study nouns, 'A number of' vs 'The number of', and 'pair of' constructions.",
    source: "KVS Support Material"
  },
  {
    id: "eng_ch20_q7",
    chapter: 20,
    chapterName: "Subject-Verb Concord & Grammar Clinic",
    marks: 3,
    type: "SA",
    question: "Explain the SANAM rule of Subject-Verb Agreement with two distinct contrasting examples.",
    answer: "The SANAM rule applies to indefinite pronouns: Some, Any, None, All, Most. These words can take either singular or plural verbs depending on the object of the preposition 'of' that follows them:\n1. If the noun is uncountable (quantity) → Singular verb:\n   'Most of the milk was spoiled.'\n2. If the noun is countable plural (number) → Plural verb:\n   'Most of the students were present.'",
    explanation: "Fundamental CBSE rule governing variable indefinite pronouns.",
    source: "Board Model Answer"
  },
  {
    id: "eng_ch20_q8",
    chapter: 20,
    chapterName: "Subject-Verb Concord & Grammar Clinic",
    marks: 5,
    type: "LA",
    question: "Read the dialogue and report the conversation in indirect speech, paying careful attention to tense and pronoun harmony:\nDoctor: 'How long have you been experiencing this cough?'\nPatient: 'I have had it since last Monday, but it became worse yesterday.'\nDoctor: 'Do not take chilled water and take these tablets twice daily.'",
    answer: "The doctor inquired of the patient how long he had been experiencing that cough. The patient replied that he had had it since the previous Monday, but it had become worse the day before. The doctor then advised him not to take chilled water and instructed him to take those tablets twice daily.",
    explanation: "Reported speech transformation rules: Present Perfect Continuous → Past Perfect Continuous; 'last Monday' → 'the previous Monday'; 'yesterday' → 'the day before'; imperative advice → 'advised him not to...'.",
    source: "CBSE 6-Mark Grammar Transformation"
  },
  {
    id: "eng_ch20_q9",
    chapter: 20,
    chapterName: "Subject-Verb Concord & Grammar Clinic",
    marks: 5,
    type: "LA",
    question: "Edit the following passage by finding the error in each line and writing the correction:\nLine 1: Climate change are one of the most critical challenges facing our world.\nLine 2: Every country, rich or poor, have felt its devastating consequences.\nLine 3: The melting of polar ice caps lead to rising sea levels.\nLine 4: Neither governments nor the citizen are exempt from taking action.\nLine 5: A collective effort of nations are required to safeguard our planet.",
    answer: "Line 1: Error: are | Correction: is (Subject 'Climate change' is singular)\nLine 2: Error: have | Correction: has ('Every country' requires singular verb 'has')\nLine 3: Error: lead | Correction: leads (Subject is 'The melting', singular, not 'caps')\nLine 4: Error: are | Correction: is (Proximity rule: closest subject is singular 'the citizen')\nLine 5: Error: are | Correction: is (Subject is 'A collective effort', singular)",
    explanation: "Comprehensive 5-mark CBSE editing passage covering 5 distinct Subject-Verb Concord rules.",
    source: "CBSE Sample Question Paper 2026-27"
  },
  {
    id: "eng_ch20_q10",
    chapter: 20,
    chapterName: "Subject-Verb Concord & Grammar Clinic",
    marks: 4,
    type: "Case Study",
    question: "Competency Editing & Concord Analysis\nRead the extract from a student's essay:\n'One of the greatest discoveries of modern medicine are vaccines. Each dose stimulate the immune system to produce antibodies. Neither antibiotics nor vitamins replaces the preventive shield of vaccination. A number of clinical trials has confirmed this.'\nIdentify the 4 Subject-Verb Concord errors and provide the grammatically correct versions.",
    answer: "1. 'are vaccines' → 'is vaccines' (Subject is 'One of the...', singular)\n2. 'stimulate' → 'stimulates' (Subject is 'Each dose', singular third person)\n3. 'replaces' → 'replace' (Proximity rule with 'neither... nor': closest noun is plural 'vitamins')\n4. 'has confirmed' → 'have confirmed' ('A number of trials' requires plural verb 'have')",
    explanation: "Competency-based 4-mark error correction table.",
    source: "CBSE Competency 2026-27"
  }
];
