import { pgTable, text, integer, boolean, timestamp, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  username: text("username").notNull().default("Topper Aspirant"),
  targetScore: integer("target_score").notNull().default(100),
  streak: integer("streak").notNull().default(1),
  xp: integer("xp").notNull().default(0),
  coins: integer("coins").notNull().default(0),
  level: integer("level").notNull().default(1),
  focusHours: text("focus_hours").notNull().default("0"),
  questionsSolved: integer("questions_solved").notNull().default(0),
  pyqsSolved: integer("pyqs_solved").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const syllabusProgress = pgTable("syllabus_progress", {
  id: uuid("id").primaryKey().defaultRandom(),
  chapterId: text("chapter_id").notNull(),
  taskKey: text("task_key").notNull(),
  completed: boolean("completed").notNull().default(false),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const chapterMastery = pgTable("chapter_mastery", {
  id: uuid("id").primaryKey().defaultRandom(),
  systemId: text("system_id").notNull().default("global"),
  subject: text("subject").notNull().default("Mathematics"),
  chapterId: text("chapter_id").notNull(),
  masteryLevel: integer("mastery_level").notNull().default(1),
  progress: integer("progress").notNull().default(0),
  questionsAttempted: integer("questions_attempted").notNull().default(0),
  totalQuestions: integer("total_questions").notNull().default(0),
  accuracy: integer("accuracy").notNull().default(0),
  weakAreas: text("weak_areas"),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const conceptMastery = pgTable("concept_mastery", {
  id: uuid("id").primaryKey().defaultRandom(),
  systemId: text("system_id").notNull().default("global"),
  subject: text("subject").notNull().default("Mathematics"),
  chapterId: text("chapter_id").notNull(),
  concept: text("concept").notNull(),
  questionsAttempted: integer("questions_attempted").notNull().default(0),
  questionsCorrect: integer("questions_correct").notNull().default(0),
  accuracy: integer("accuracy").notNull().default(0),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const revisionSchedules = pgTable("revision_schedules", {
  id: uuid("id").primaryKey().defaultRandom(),
  chapterId: text("chapter_id").notNull(),
  lastCompleted: text("last_completed").notNull(),
  stage: integer("stage").notNull().default(1),
  priority: text("priority").notNull().default("Normal"),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const mistakeLogs = pgTable("mistake_logs", {
  id: text("id").primaryKey(),
  systemId: text("system_id").notNull().default("global"),
subject: text("subject").notNull(),
  chapter: text("chapter").notNull(),
  question: text("question").notNull(),
  wrongAnswer: text("wrong_answer").notNull(),
  correctAnswer: text("correct_answer").notNull(),
  reason: text("reason").notNull(),
  concept: text("concept").notNull(),
  mistakeType: text("mistake_type").notNull(),
  priority: text("priority").notNull().default("High"),
  dateAdded: text("date_added").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const mockTests = pgTable("mock_tests", {
  id: text("id").primaryKey(),
  systemId: text("system_id").notNull().default("global"),
subject: text("subject").notNull(),
  score: integer("score").notNull(),
  maxScore: integer("max_score").notNull(),
  date: text("date").notNull(),
  notes: text("notes").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const customFormulas = pgTable("custom_formulas", {
  id: text("id").primaryKey(),
  systemId: text("system_id").notNull().default("global"),
subject: text("subject").notNull(),
  topic: text("topic").notNull(),
  formula: text("formula").notNull(),
  description: text("description").notNull(),
  favorite: boolean("favorite").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const customMnemonics = pgTable("custom_mnemonics", {
  id: text("id").primaryKey(),
  systemId: text("system_id").notNull().default("global"),
subject: text("subject").notNull(),
  title: text("title").notNull(),
  phrase: text("phrase").notNull(),
  explanation: text("explanation").notNull(),
  category: text("category").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const customFlashcards = pgTable("custom_flashcards", {
  id: text("id").primaryKey(),
  systemId: text("system_id").notNull().default("global"),
subject: text("subject").notNull(),
  chapter: text("chapter").notNull(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  confidence: text("confidence").default("medium"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const activeRecalls = pgTable("active_recalls", {
  id: text("id").primaryKey(),
  systemId: text("system_id").notNull().default("global"),
subject: text("subject").notNull(),
  topic: text("topic").notNull(),
  question: text("question").notNull(),
  sampleAnswer: text("sample_answer").notNull(),
  difficulty: text("difficulty").notNull().default("Medium"),
  confidence: integer("confidence"),
  lastReviewed: text("last_reviewed"),
  needsReview: boolean("needs_review").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const plannerTasks = pgTable("planner_tasks", {
  id: text("id").primaryKey(),
  systemId: text("system_id").notNull().default("global"),
slot: text("slot").notNull(),
  text: text("text").notNull(),
  done: boolean("done").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const studyNotes = pgTable("study_notes", {
  id: text("id").primaryKey(),
  systemId: text("system_id").notNull().default("global"),
title: text("title").notNull(),
  content: text("content").notNull(),
  color: text("color").notNull(),
  date: text("date").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
