// =========================================================================
// CBSE CLASS 10 ENGLISH PRACTICE VAULT: CH 23 — REPORTED SPEECH (15 Qs)
// Covers: Statements, Interrogatives, Imperatives, Exclamations, Universal Truths
// Sourced from CBSE Board Question Papers (2020-2025) & Dialogue Tasks
// =========================================================================

import type { VaultQuestion } from "@/data/vaultQuestions";

export const ENGLISH_CH23_QUESTIONS: VaultQuestion[] = [
  {
    id: "eng-g-sp-1",
    chapter: 23,
    chapterName: "Grammar: Reported Speech & Dialogue Transformations",
    marks: 2,
    type: "SA",
    question: "Change into Indirect Speech: Rohan said to Priya, 'I will return your biology notes tomorrow.'",
    answer: "Rohan told Priya that he would return her biology notes the next day.",
    explanation: "'said to' becomes 'told'; pronoun 'I' changes to 'he'; tense 'will' backshifts to 'would'; possessive 'your' becomes 'her'; time expression 'tomorrow' becomes 'the next day'.",
    examinerNote: "Remember: 'told' does not take 'to' (never write 'told to Priya').",
    source: "CBSE 2024 Standard"
  },
  {
    id: "eng-g-sp-2",
    chapter: 23,
    chapterName: "Grammar: Reported Speech & Dialogue Transformations",
    marks: 2,
    type: "SA",
    question: "Change into Indirect Speech: The science teacher said, 'Water boils at 100 degrees Celsius.'",
    answer: "The science teacher said that water boils at 100 degrees Celsius.",
    explanation: "Universal scientific facts and laws of nature NEVER change their tense in indirect speech.",
    examinerNote: "Universal scientific facts remain in Simple Present.",
    source: "CBSE 2023 Set-1"
  },
  {
    id: "eng-g-sp-3",
    chapter: 23,
    chapterName: "Grammar: Reported Speech & Dialogue Transformations",
    marks: 2,
    type: "SA",
    question: "Change into Indirect Speech: The doctor said to the patient, 'Do not take this tablet on an empty stomach.'",
    answer: "The doctor advised the patient not to take that tablet on an empty stomach.",
    explanation: "Imperative advice converts to 'advised + object + not to + V1', and demonstrative 'this' changes to 'that'.",
    examinerNote: "Negative commands convert to 'not to + V1'.",
    source: "CBSE 2024 Set-2"
  },
  {
    id: "eng-g-sp-4",
    chapter: 23,
    chapterName: "Grammar: Reported Speech & Dialogue Transformations",
    marks: 1,
    type: "MCQ",
    question: "Choose the correct reported version: He said to me, 'Are you participating in the debate competition?' (a) He asked me that if I was participating in the debate competition. (b) He asked me if I was participating in the debate competition. (c) He asked me if was I participating in the debate competition. (d) He told me whether I am participating in the debate competition.",
    options: [
      "He asked me that if I was participating in the debate competition.",
      "He asked me if I was participating in the debate competition.",
      "He asked me if was I participating in the debate competition.",
      "He told me whether I am participating in the debate competition."
    ],
    correctOption: 1,
    answer: "Option (b): He asked me if I was participating in the debate competition.",
    explanation: "In reported Yes/No questions: 1. No 'that' before 'if'. 2. Normal statement word order (Subject 'I' precedes auxiliary 'was'). 3. Delete question mark.",
    examinerNote: "Never use 'that' before 'if/whether'.",
    source: "CBSE 2023 Set-2"
  },
  {
    id: "eng-g-sp-5",
    chapter: 23,
    chapterName: "Grammar: Reported Speech & Dialogue Transformations",
    marks: 2,
    type: "SA",
    question: "Change into Indirect Speech: Anjali asked her friend, 'Where have you purchased this vintage camera from?'",
    answer: "Anjali asked her friend where she had purchased that vintage camera from.",
    explanation: "WH-questions retain the WH-word ('where') as the connector without 'that'. 'have you purchased' inverts to statement order 'she had purchased'.",
    examinerNote: "No question mark in indirect questions.",
    source: "CBSE 2024 Set-3"
  },
  {
    id: "eng-g-sp-6",
    chapter: 23,
    chapterName: "Grammar: Reported Speech & Dialogue Transformations",
    marks: 2,
    type: "SA",
    question: "Error Correction: 'The tourist asked the guide that when the monument would open.' Identify error and correction.",
    answer: "Error: that when | Correction: when",
    explanation: "A WH-question word (when, where, why, who) acts as the conjunction itself; placing 'that' before it is a double conjunction grammatical error.",
    examinerNote: "Never use 'that' before WH-words.",
    source: "CBSE 2024 Compartment"
  },
  {
    id: "eng-g-sp-7",
    chapter: 23,
    chapterName: "Grammar: Reported Speech & Dialogue Transformations",
    marks: 2,
    type: "SA",
    question: "Change into Indirect Speech: The librarian said, 'Please maintain absolute silence in the reading hall.'",
    answer: "The librarian requested the students to maintain absolute silence in the reading hall.",
    explanation: "Polite request with 'Please' converts to 'requested + to + V1'.",
    examinerNote: "Replace 'please' with the reporting verb 'requested'.",
    source: "CBSE 2022 Set-1"
  },
  {
    id: "eng-g-sp-8",
    chapter: 23,
    chapterName: "Grammar: Reported Speech & Dialogue Transformations",
    marks: 1,
    type: "MCQ",
    question: "Choose the correct reported form: She said, 'Alas! I have lost my grandmother's emerald ring.' (a) She exclaimed with sorrow that she had lost her grandmother's emerald ring. (b) She said that she lost her grandmother's emerald ring. (c) She exclaimed that she has lost her grandmother's emerald ring. (d) She cried alas she had lost her grandmother's ring.",
    options: [
      "She exclaimed with sorrow that she had lost her grandmother's emerald ring.",
      "She said that she lost her grandmother's emerald ring.",
      "She exclaimed that she has lost her grandmother's emerald ring.",
      "She cried alas she had lost her grandmother's ring."
    ],
    correctOption: 0,
    answer: "Option (a): She exclaimed with sorrow that she had lost her grandmother's emerald ring.",
    explanation: "Exclamations with 'Alas!' convert to 'exclaimed with sorrow/grief that...', and 'have lost' backshifts to 'had lost'.",
    examinerNote: "Exclamation of sorrow takes 'exclaimed with sorrow'.",
    source: "CBSE 2023 Set-3"
  },
  {
    id: "eng-g-sp-9",
    chapter: 23,
    chapterName: "Grammar: Reported Speech & Dialogue Transformations",
    marks: 2,
    type: "SA",
    question: "Change into Indirect Speech: Anil said to Hari, 'Can you cook meal for both of us?'",
    answer: "Anil asked Hari if he could cook meal for both of them.",
    explanation: "'Can' backshifts to 'could'; pronoun 'us' changes to 'them'; question form changes to assertive statement order introduced by 'if'.",
    examinerNote: "Literature-integrated grammar question.",
    source: "NCERT Class 10 Exemplar"
  },
  {
    id: "eng-g-sp-10",
    chapter: 23,
    chapterName: "Grammar: Reported Speech & Dialogue Transformations",
    marks: 2,
    type: "SA",
    question: "Dialogue Completion: Customer: 'How much does this handcrafted leather bag cost?' Shopkeeper: 'It costs two thousand rupees.' Report the dialogue: The customer asked the shopkeeper how much ______ . The shopkeeper replied that ______ .",
    answer: "The customer asked the shopkeeper how much that handcrafted leather bag cost. The shopkeeper replied that it cost two thousand rupees.",
    explanation: "Present simple ('does cost') backshifts to past simple ('cost'). Demonstrative 'this' becomes 'that'.",
    examinerNote: "Standard CBSE Section B dialogue completion format.",
    source: "CBSE 2024 Standard"
  },
  {
    id: "eng-g-sp-11",
    chapter: 23,
    chapterName: "Grammar: Reported Speech & Dialogue Transformations",
    marks: 1,
    type: "MCQ",
    question: "Choose the correct indirect version: Father said to me, 'Honesty is always rewarded.' (a) Father told me that honesty was always rewarded. (b) Father told me that honesty is always rewarded. (c) Father asked me whether honesty is rewarded. (d) Father advised me that honesty had been rewarded.",
    options: [
      "Father told me that honesty was always rewarded.",
      "Father told me that honesty is always rewarded.",
      "Father asked me whether honesty is rewarded.",
      "Father advised me that honesty had been rewarded."
    ],
    correctOption: 1,
    answer: "Option (b): Father told me that honesty is always rewarded.",
    explanation: "Proverbs and universal moral truths never backshift their tense in indirect speech.",
    examinerNote: "Proverbs do not backshift into past tense.",
    source: "CBSE Specimen 2025"
  },
  {
    id: "eng-g-sp-12",
    chapter: 23,
    chapterName: "Grammar: Reported Speech & Dialogue Transformations",
    marks: 2,
    type: "SA",
    question: "Change into Indirect Speech: The teacher said to the noisy students, 'Sit down quietly and open your English books.'",
    answer: "The teacher ordered the noisy students to sit down quietly and open their English books.",
    explanation: "Classroom commands convert to 'ordered + object + to + V1', and pronoun 'your' changes to 'their'.",
    examinerNote: "Commands convert to infinitive 'to + V1'.",
    source: "CBSE 2024 Set-1"
  },
  {
    id: "eng-g-sp-13",
    chapter: 23,
    chapterName: "Grammar: Reported Speech & Dialogue Transformations",
    marks: 2,
    type: "SA",
    question: "Error Correction: 'He told to me that he had completed the project.' Identify error and correction.",
    answer: "Error: told to me | Correction: told me (or said to me)",
    explanation: "The reporting verb 'told' is transitive and takes a direct object without the preposition 'to'.",
    examinerNote: "'Told to' is an instant board error deduction.",
    source: "CBSE 2023 Set-1"
  },
  {
    id: "eng-g-sp-14",
    chapter: 23,
    chapterName: "Grammar: Reported Speech & Dialogue Transformations",
    marks: 1,
    type: "MCQ",
    question: "Choose the correct reported form: The passenger asked the ticket collector, 'When does the Rajdhani Express leave?' (a) The passenger asked when did the Rajdhani Express leave. (b) The passenger asked when the Rajdhani Express left. (c) The passenger asked that when the Rajdhani Express left. (d) The passenger enquired when would the Rajdhani Express leave.",
    options: [
      "The passenger asked when did the Rajdhani Express leave.",
      "The passenger asked when the Rajdhani Express left.",
      "The passenger asked that when the Rajdhani Express left.",
      "The passenger enquired when would the Rajdhani Express leave."
    ],
    correctOption: 1,
    answer: "Option (b): The passenger asked when the Rajdhani Express left.",
    explanation: "In indirect questions, the auxiliary 'does' is eliminated and the verb backshifts directly to V2 ('left') following the subject.",
    examinerNote: "Do/does is dropped in indirect questions.",
    source: "CBSE 2024 Set-2"
  },
  {
    id: "eng-g-sp-15",
    chapter: 23,
    chapterName: "Grammar: Reported Speech & Dialogue Transformations",
    marks: 2,
    type: "SA",
    question: "Change into Indirect Speech: Maya said, 'I bought this dress yesterday.'",
    answer: "Maya said that she had bought that dress the previous day.",
    explanation: "Simple past ('bought') backshifts to past perfect ('had bought'); 'this' becomes 'that'; 'yesterday' becomes 'the previous day' (or 'the day before').",
    examinerNote: "Simple Past shifts to Past Perfect; yesterday becomes the previous day.",
    source: "CBSE 2024 Set-3"
  }
];
