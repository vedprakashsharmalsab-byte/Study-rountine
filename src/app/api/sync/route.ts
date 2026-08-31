import { NextResponse } from "next/server";
import { db } from "@/db";
import {
  mistakeLogs,
  mockTests,
  customFormulas,
  customMnemonics,
  customFlashcards,
  activeRecalls,
  plannerTasks,
  studyNotes
} from "@/db/schema";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!db) {
    return NextResponse.json({
      ok: false,
      mode: "offline-localstorage",
      message: "Cloud database is in offline sandbox mode. LocalStorage persistence is active."
    });
  }

  try {
    const [
      mistakesData,
      mockTestsData,
      formulasData,
      mnemonicsData,
      flashcardsData,
      recallsData,
      tasksData,
      notesData
    ] = await Promise.all([
      db.select().from(mistakeLogs),
      db.select().from(mockTests),
      db.select().from(customFormulas),
      db.select().from(customMnemonics),
      db.select().from(customFlashcards),
      db.select().from(activeRecalls),
      db.select().from(plannerTasks),
      db.select().from(studyNotes)
    ]);

    return NextResponse.json({
      ok: true,
      data: {
        mistakes: mistakesData,
        mockTests: mockTestsData,
        formulas: formulasData,
        mnemonics: mnemonicsData,
        flashcards: flashcardsData,
        recalls: recallsData,
        planner: tasksData,
        notes: notesData
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, message: error?.message || "Database synchronization failed" },
      { status: 500 }
    );
  }
}
