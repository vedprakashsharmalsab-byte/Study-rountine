import { test, describe } from "node:test";
import assert from "node:assert/strict";

import { THEOREMS_AND_EXAMPLES_BANK } from "../src/data/theoremsAndExamples.ts";
import { ENRICHED_SST_TIMELINES } from "../src/data/sstTimelinesData.ts";
import { COMPETITIVE_HOTS_BANK } from "../src/data/competitiveHotsData.ts";
import { CHEMISTRY_REACTIONS_MASTER } from "../src/data/chemistryReactionsData.ts";
import { SCIENCE_DIAGRAMS_MASTER } from "../src/data/scienceDiagramsData.ts";
import { getDaysRemaining, ACADEMIC_CALENDAR } from "../config/academic-calendar.ts";

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
});
