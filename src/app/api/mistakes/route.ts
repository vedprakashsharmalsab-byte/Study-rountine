import { NextResponse } from "next/server";
import { db, pool } from "@/db";
import { mistakeLogs } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isAll = searchParams.get("all") === "true" || searchParams.get("systemId") === "all";
  const systemId = searchParams.get("systemId");

  if (!db) {
    return NextResponse.json({
      ok: false,
      mode: "offline-localstorage",
      mistakes: [],
      message: "Database in offline mode. Operating with client LocalStorage."
    });
  }

  try {
    let logs;
    if (isAll || !systemId) {
      logs = await db.select().from(mistakeLogs).orderBy(desc(mistakeLogs.createdAt)).limit(500);
    } else {
      logs = await db
        .select()
        .from(mistakeLogs)
        .where(eq(mistakeLogs.systemId, systemId))
        .orderBy(desc(mistakeLogs.createdAt));
    }
    return NextResponse.json({ ok: true, mistakes: logs });
  } catch (e: any) {
    console.error("Failed to fetch mistake logs:", e);
    return NextResponse.json({ ok: false, error: e.message || "Failed to fetch mistake logs" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const isAll = searchParams.get("all") === "true";

  if (!db) {
    return NextResponse.json({ ok: false, error: "Database offline" }, { status: 503 });
  }

  try {
    if (id) {
      await db.delete(mistakeLogs).where(eq(mistakeLogs.id, id));
      return NextResponse.json({ ok: true, message: `Mistake log ${id} deleted.` });
    } else if (isAll) {
      if (pool) {
        await pool.query("TRUNCATE TABLE mistake_logs");
      } else {
        await db.delete(mistakeLogs);
      }
      return NextResponse.json({ ok: true, message: "All mistake logs purged." });
    } else {
      return NextResponse.json({ ok: false, error: "Specify id or all=true" }, { status: 400 });
    }
  } catch (e: any) {
    console.error("Failed to delete mistake log:", e);
    return NextResponse.json({ ok: false, error: e.message || "Failed to delete mistake log" }, { status: 500 });
  }
}
