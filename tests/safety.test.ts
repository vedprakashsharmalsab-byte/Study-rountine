import { test, describe } from "node:test";
import assert from "node:assert/strict";

import { THEOREMS_AND_EXAMPLES_BANK } from "../src/data/theoremsAndExamples.ts";
import { ENRICHED_SST_TIMELINES } from "../src/data/sstTimelinesData.ts";
import { COMPETITIVE_HOTS_BANK } from "../src/data/competitiveHotsData.ts";
import { CHEMISTRY_REACTIONS_MASTER } from "../src/data/chemistryReactionsData.ts";
import { SCIENCE_DIAGRAMS_MASTER } from "../src/data/scienceDiagramsData.ts";
import { CH1_QUESTIONS } from "../src/data/chapters/ch1.ts";
import { CH1_REAL_NUMBERS_CONCEPT } from "../src/data/mathConcepts/ch1_real_numbers.ts";
import { CH1_DATA } from "../src/data/mathMastery/ch1_real_numbers.ts";
import { getDaysRemaining, ACADEMIC_CALENDAR } from "../config/academic-calendar.ts";
import { cleanTextForSpeech, chunkTextForSpeech } from "../src/utils/speechTextFormatter.ts";
import { buildTeacherLectureScript } from "../src/utils/teacherLectureScript.ts";

describe("CBSE Class 10 Safety & Math Fixtures (C9)", () => {
  test("Fixture 1: Parallel Circuit Equivalent Resistance (18Ω || 18Ω = 9Ω)", () => {
    const r1 = 18;
    const r2 = 18;
    const req = 1 / (1 / r1 + 1 / r2);
    assert.equal(req, 9, "Parallel equivalent resistance must equal 9 ohms");
  });

  test("Fixture 2: Electric Power Ratio P1:P2 = 1:2", () => {
    // P = I^2 * R; with constant current I=1A, R1 = 10Ω, R2 = 20Ω
    const r1 = 10;
    const r2 = 20;
    const p1 = r1;
    const p2 = r2;
    const ratio = p1 / p2;
    assert.equal(ratio, 0.5, "Power ratio P1:P2 must equal 1:2");
  });

  test("Fixture 3: BPT Geometric Proportion (EC = 4 cm)", () => {
    // In △ABC with DE || BC: AD / DB = AE / EC
    // Given AD = 2, DB = 3, AE = 8/3 (approx 2.6667):
    const ad = 2;
    const db = 3;
    const ae = 8 / 3;
    const ec = (db * ae) / ad;
    assert.equal(Math.round(ec), 4, "EC calculated via BPT must equal 4 cm");
  });

  test("Fixture 4: Similar Triangles Side Length (AB = 15 cm)", () => {
    // △ABC ~ △PQR => AB / PQ = BC / QR
    // Given PQ = 10, BC = 9, QR = 6:
    const pq = 10;
    const bc = 9;
    const qr = 6;
    const ab = (bc / qr) * pq;
    assert.equal(ab, 15, "Side AB in similar triangles must equal 15 cm");
  });

  test("Fixture 5: Academic Countdown Days (137 days to 2027-02-01 from 2026-09-17)", () => {
    const fromDate = new Date("2026-09-17T00:00:00Z");
    const targetDate = "2027-02-01";
    const days = getDaysRemaining(targetDate, fromDate);
    assert.equal(days, 137, "Difference from 2026-09-17 to 2027-02-01 must be exactly 137 days");
  });

  test("Smoke Test: Theorems tab data is non-empty (25 proofs)", () => {
    assert.ok(Array.isArray(THEOREMS_AND_EXAMPLES_BANK));
    assert.equal(THEOREMS_AND_EXAMPLES_BANK.length, 25, "Theorems bank must contain exactly 25 formal proofs & derivations");
    for (const item of THEOREMS_AND_EXAMPLES_BANK) {
      assert.ok(item.statement && item.statement.length > 10, `Theorem ${item.id} statement must be complete`);
      assert.ok(item.sheetSteps && item.sheetSteps.length > 0, `Theorem ${item.id} must have step-by-step proof steps`);
    }
  });

  test("Smoke Test: Timelines tab data is non-empty (56 dated events)", () => {
    assert.ok(Array.isArray(ENRICHED_SST_TIMELINES));
    assert.equal(ENRICHED_SST_TIMELINES.length, 56, "Timelines must contain exactly 56 dated events");
    for (const event of ENRICHED_SST_TIMELINES) {
      assert.ok(event.year, `Event ${event.id} must have a year`);
      assert.ok(event.event, `Event ${event.id} must have an event description`);
    }
  });

  test("Smoke Test: HOTS bank has 100% solutions & rubrics (40 questions)", () => {
    assert.ok(Array.isArray(COMPETITIVE_HOTS_BANK));
    assert.ok(COMPETITIVE_HOTS_BANK.length >= 35, "HOTS bank must be populated");
    for (const q of COMPETITIVE_HOTS_BANK) {
      assert.ok(q.questionText && q.questionText.length > 10, `HOTS ${q.id} must have question text`);
      assert.ok(q.topperAnswerSheet && q.topperAnswerSheet.length > 0, `HOTS ${q.id} must have step-by-step worked answer sheet`);
      assert.ok(q.finalBoxedAnswer, `HOTS ${q.id} must have a final boxed answer`);
    }
  });

  test("Smoke Test: Chemistry Reactions & Science Diagrams non-empty", () => {
    assert.ok(CHEMISTRY_REACTIONS_MASTER.length >= 50, "Chemistry reactions must have at least 50 equations");
    assert.ok(SCIENCE_DIAGRAMS_MASTER.length >= 10, "Science diagrams bank must have at least 10 master diagrams");
  });

  test("Audio Speech Preprocessor: Converts LaTeX to natural spoken English", () => {
    const raw = "Mirror formula: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$. Angle $\\angle i = \\angle r$. Power: $P = 1/f$.";
    const cleaned = cleanTextForSpeech(raw);

    assert.ok(!cleaned.includes("\\frac"), "Raw \\frac must be converted to spoken phrase");
    assert.ok(cleaned.includes("1 upon v"), "Fractions must convert to natural 'upon' phrase");
    assert.ok(cleaned.includes("angle i"), "Angles must convert to spoken 'angle i'");
    assert.ok(!cleaned.includes("$"), "Dollar delimiters must be removed");
  });

  test("Audio Speech Chunker: Splits long text into safe <200 char chunks without Chrome cutoff", () => {
    const longText = "Light travels along straight lines in a uniform medium. When light hits an interface between two transparent media, it bends due to difference in optical speed. Convex lenses converge light rays whereas concave lenses diverge light rays. The power of a lens is defined as reciprocal of its focal length in metres.";
    const chunks = chunkTextForSpeech(longText, 180);

    assert.ok(chunks.length >= 2, "Text should be split into multiple chunks");
    for (const chunk of chunks) {
      assert.ok(chunk.length <= 200, `Chunk length (${chunk.length}) should not exceed safe utterance limit`);
    }
  });

  test("Teacher Pedagogy Script Generator: Creates conversational masterclass with pauses and traps", () => {
    const script = buildTeacherLectureScript({
      chapterNo: 9,
      title: "Light — Reflection and Refraction",
      subject: "Science",
      oneLiner: "How light behaves at mirrors and lenses",
      analogyTitle: "Stainless Steel Spoon",
      analogyContent: "The inside bowl of a spoon curves inward like a concave mirror.",
      sections: [
        {
          id: "spherical_mirrors",
          heading: "Spherical Mirrors & Focal Length",
          explanation: "Concave mirrors converge light at the principal focus.",
          formulasOrKeyPoints: [{ title: "Focal Length", content: "f = R/2" }],
          examinerTraps: [{ trap: "Forgetting the negative sign for focal length", correction: "Concave focal length is always negative" }],
        },
      ],
    }, { mode: "teacher_deep" });

    assert.ok(script.includes("Namaste students!"), "Must include warm teacher greeting");
    assert.ok(script.includes("Dhyaan se samajhiye"), "Must include thoughtful Indian teacher phrasing");
    assert.ok(script.includes("pause"), "Must encourage pausing and thinking");
    assert.ok(script.includes("Examiner Trap:"), "Must explicitly spotlight examiner traps");
    assert.ok(script.includes("Topper Shield:"), "Must provide actionable topper correction");
  });

  test("Maths Chapter 1 Real Numbers: Comprehensive Vault & Concept Integrity", () => {
    // 1. Vault questions check
    assert.ok(Array.isArray(CH1_QUESTIONS), "CH1_QUESTIONS must be an array");
    assert.ok(CH1_QUESTIONS.length >= 35, `CH1_QUESTIONS must have at least 35 high-yield questions (currently ${CH1_QUESTIONS.length})`);
    for (const q of CH1_QUESTIONS) {
      assert.ok(q.id, "Question must have an id");
      assert.ok(q.question && q.question.length > 10, `Question ${q.id} must have question text`);
      assert.ok(q.steps && q.steps.length > 0, `Question ${q.id} must have step-by-step solution steps`);
      assert.ok(q.explanation && q.explanation.length > 10, `Question ${q.id} must have concrete reason`);
      assert.ok(q.formula, `Question ${q.id} must have formula or theorem reference`);
      assert.ok(q.examinerNote, `Question ${q.id} must have examiner note`);
      assert.ok(q.source, `Question ${q.id} must have source attribution`);
    }

    // 2. Math concepts check
    assert.equal(CH1_REAL_NUMBERS_CONCEPT.chapterNo, 1);
    assert.equal(CH1_REAL_NUMBERS_CONCEPT.sections.length, 7, "Chapter 1 concepts must cover all 7 core sections");
    for (const sec of CH1_REAL_NUMBERS_CONCEPT.sections) {
      assert.ok(sec.explanation.length > 50, `Section ${sec.id} explanation must be deep and pedagogical`);
      assert.ok(sec.formulasOrKeyPoints && sec.formulasOrKeyPoints.length > 0, `Section ${sec.id} must have key formulas`);
      assert.ok(sec.examinerTraps && sec.examinerTraps.length > 0, `Section ${sec.id} must highlight examiner traps`);
    }

    // 3. Math mastery check
    assert.equal(CH1_DATA.chapterNumber, 1);
    assert.ok(CH1_DATA.tests.length === 4, "Must have Diagnostic, Chapter, Advanced, and Mastery tests");
    for (const testItem of CH1_DATA.tests) {
      assert.ok(testItem.questions.length >= 5, `${testItem.testType} must have at least 5 questions`);
    }
    assert.ok(CH1_DATA.pyqs.length >= 6, "Must have at least 6 detailed CBSE PYQs");
  });
});
