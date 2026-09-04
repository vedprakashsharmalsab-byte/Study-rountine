import { NextResponse } from "next/server";
import { db } from "@/db";
import { mistakeLogs } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const systemId = searchParams.get("systemId") || "global";

  try {
    const logs = await db.select().from(mistakeLogs).where(eq(mistakeLogs.systemId, systemId)).orderBy(desc(mistakeLogs.createdAt));
    return NextResponse.json({ mistakes: logs });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch mistake logs" }, { status: 500 });
  }
}
