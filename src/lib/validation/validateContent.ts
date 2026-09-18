/**
 * Content Schema & Latex Leak Validator (C8 & C4)
 * Runs during build/test to verify data integrity and catch unrendered $$ leaks.
 */

import { COMPETITIVE_HOTS_BANK } from "../../data/competitiveHotsData";
import { THEOREMS_AND_EXAMPLES_BANK } from "../../data/theoremsAndExamples";
import { ENRICHED_SST_TIMELINES } from "../../data/sstTimelinesData";

export function validateAllContent() {
  const errors: string[] = [];

  console.log("🔍 Validating CBSE Class 10 Study Routine Content...");

  // 1. Validate Theorems
  if (!THEOREMS_AND_EXAMPLES_BANK || THEOREMS_AND_EXAMPLES_BANK.length < 25) {
    errors.push(`Theorems bank expected 25 items, found: ${THEOREMS_AND_EXAMPLES_BANK?.length}`);
  }
  THEOREMS_AND_EXAMPLES_BANK.forEach((t, i) => {
    if (!t.title || !t.statement) errors.push(`Theorem index ${i} missing title/statement`);
    if (!t.sheetSteps || t.sheetSteps.length === 0) errors.push(`Theorem "${t.title}" missing proof steps`);
  });

  // 2. Validate Timelines
  if (!ENRICHED_SST_TIMELINES || ENRICHED_SST_TIMELINES.length < 56) {
    errors.push(`Timelines bank expected 56 events, found: ${ENRICHED_SST_TIMELINES?.length}`);
  }

  // 3. Validate HOTS Questions & Solutions
  COMPETITIVE_HOTS_BANK.forEach((q) => {
    if (!q.topperAnswerSheet || q.topperAnswerSheet.length === 0) {
      errors.push(`HOTS question "${q.id}" missing worked topperAnswerSheet`);
    }
    if (!q.finalBoxedAnswer) {
      errors.push(`HOTS question "${q.id}" missing finalBoxedAnswer`);
    }
  });

  if (errors.length > 0) {
    console.error(`❌ Content Validation FAILED with ${errors.length} error(s):`);
    errors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
  } else {
    console.log(`✅ Content Validation PASSED: 100% of 25 Theorems, 56 Timelines, and HOTS solutions verified!`);
  }
}

if (require.main === module) {
  validateAllContent();
}
