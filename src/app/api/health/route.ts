import { db } from "@/db";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!db) {
    return Response.json({ ok: false, mode: "offline-localstorage", message: "DATABASE_URL is not set. Operating in offline storage mode." });
  }

  try {
    await db.execute(sql`select 1`);
    return Response.json({ ok: true, mode: "connected" });
  } catch (err: any) {
    return Response.json({ ok: false, mode: "offline-localstorage", error: err?.message }, { status: 500 });
  }
}
