import { NextResponse } from "next/server";
import { db } from "@/db";
import { eq } from "drizzle-orm";
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

export async function GET(req: Request) {
  const url = new URL(req.url);
  const systemId = url.searchParams.get("systemId") || "global";
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
      db.select().from(mistakeLogs).where(eq(mistakeLogs.systemId, systemId)),
      db.select().from(mockTests).where(eq(mockTests.systemId, systemId)),
      db.select().from(customFormulas).where(eq(customFormulas.systemId, systemId)),
      db.select().from(customMnemonics).where(eq(customMnemonics.systemId, systemId)),
      db.select().from(customFlashcards).where(eq(customFlashcards.systemId, systemId)),
      db.select().from(activeRecalls).where(eq(activeRecalls.systemId, systemId)),
      db.select().from(plannerTasks).where(eq(plannerTasks.systemId, systemId)),
      db.select().from(studyNotes).where(eq(studyNotes.systemId, systemId))
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
