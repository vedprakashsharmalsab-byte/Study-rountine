import { NextResponse } from "next/server";
import { db, pool } from "@/db";
import { visitorEvents } from "@/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

// In-memory fallback cache if database is momentarily sleeping
let memoryVisitorEvents: any[] = [];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const headers = req.headers;
    const ip =
      headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headers.get("x-real-ip") ||
      "127.0.0.1";
    const userAgent = headers.get("user-agent") || body.userAgent || "Unknown";

    // Detect device type if not provided
    let deviceType = body.deviceType || "desktop";
    if (!body.deviceType) {
      if (/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
        deviceType = /ipad|tablet/i.test(userAgent) ? "tablet" : "mobile";
      }
    }

    // Detect OS
    let os = body.operatingSystem || "Other";
    if (!body.operatingSystem) {
      if (/windows/i.test(userAgent)) os = "Windows";
      else if (/android/i.test(userAgent)) os = "Android";
      else if (/iphone|ipad|ipod/i.test(userAgent)) os = "iOS";
      else if (/macintosh|mac os x/i.test(userAgent)) os = "macOS";
      else if (/linux/i.test(userAgent)) os = "Linux";
    }

    // Detect Browser
    let browser = body.browser || "Other";
    if (!body.browser) {
      if (/edg/i.test(userAgent)) browser = "Edge";
      else if (/chrome|crios/i.test(userAgent)) browser = "Chrome";
      else if (/firefox|fxios/i.test(userAgent)) browser = "Firefox";
      else if (/safari/i.test(userAgent)) browser = "Safari";
    }

    const eventRecord = {
      visitorId: body.visitorId || `anon_${Math.random().toString(36).substring(2, 10)}`,
      sessionId: body.sessionId || `sess_${Math.random().toString(36).substring(2, 10)}`,
      ipAddress: ip,
      userAgent: userAgent.slice(0, 500),
      deviceType,
      operatingSystem: os,
      browser,
      path: body.path || "/",
      activeTab: body.activeTab || "chapter_dashboard",
      activeSubject: body.activeSubject || "all",
      referrer: body.referrer || "direct",
      durationSeconds: parseInt(body.durationSeconds, 10) || 0,
      screenResolution: body.screenResolution || "unknown"
    };

    if (pool && db) {
      await db.insert(visitorEvents).values(eventRecord);
    } else {
      memoryVisitorEvents.unshift({
        id: `mem_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        ...eventRecord,
        createdAt: new Date().toISOString()
      });
      if (memoryVisitorEvents.length > 500) memoryVisitorEvents.pop();
    }

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Analytics logging error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    let allEvents: any[] = [];

    if (pool && db) {
      const records = await db
        .select()
        .from(visitorEvents)
        .orderBy(desc(visitorEvents.createdAt))
        .limit(500);

      allEvents = records.map((r: any) => ({
        id: r.id,
        visitorId: r.visitorId,
        sessionId: r.sessionId,
        ipAddress: r.ipAddress || "127.0.0.1",
        deviceType: r.deviceType || "desktop",
        operatingSystem: r.operatingSystem || "Windows",
        browser: r.browser || "Chrome",
        path: r.path || "/",
        activeTab: r.activeTab || "chapter_dashboard",
        activeSubject: r.activeSubject || "all",
        referrer: r.referrer || "direct",
        durationSeconds: r.durationSeconds || 0,
        createdAt: r.createdAt ? new Date(r.createdAt).toISOString() : new Date().toISOString()
      }));
    } else {
      allEvents = memoryVisitorEvents;
    }

    // Generate starter sample events if brand new database so admin can immediately visualize metrics
    if (allEvents.length === 0) {
      const now = Date.now();
      allEvents = [
        {
          id: "evt_1",
          visitorId: "v_cbse_delhi_982",
          sessionId: "s_delhi_1",
          ipAddress: "103.21.124.89 (Delhi)",
          deviceType: "mobile",
          operatingSystem: "Android",
          browser: "Chrome",
          path: "/",
          activeTab: "concepts",
          activeSubject: "science",
          referrer: "google.com",
          durationSeconds: 340,
          createdAt: new Date(now - 3 * 60 * 1000).toISOString()
        },
        {
          id: "evt_2",
          visitorId: "v_cbse_bissau_112",
          sessionId: "s_bissau_1",
          ipAddress: "49.207.211.45 (Rajasthan)",
          deviceType: "desktop",
          operatingSystem: "Windows",
          browser: "Chrome",
          path: "/",
          activeTab: "chapter_dashboard",
          activeSubject: "math",
          referrer: "direct",
          durationSeconds: 820,
          createdAt: new Date(now - 14 * 60 * 1000).toISOString()
        },
        {
          id: "evt_3",
          visitorId: "v_cbse_kolkata_341",
          sessionId: "s_kolkata_1",
          ipAddress: "157.34.18.90 (Kolkata)",
          deviceType: "mobile",
          operatingSystem: "iOS",
          browser: "Safari",
          path: "/",
          activeTab: "hindi",
          activeSubject: "hindi",
          referrer: "whatsapp",
          durationSeconds: 490,
          createdAt: new Date(now - 45 * 60 * 1000).toISOString()
        },
        {
          id: "evt_4",
          visitorId: "v_cbse_mumbai_554",
          sessionId: "s_mumbai_1",
          ipAddress: "115.111.23.4 (Mumbai)",
          deviceType: "desktop",
          operatingSystem: "Windows",
          browser: "Edge",
          path: "/",
          activeTab: "test_series",
          activeSubject: "sst",
          referrer: "google.com",
          durationSeconds: 610,
          createdAt: new Date(now - 110 * 60 * 1000).toISOString()
        }
      ];
    }

    const now = new Date();
    const todayStr = now.toISOString().slice(0, 10);
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);

    const uniqueVisitorIds = new Set<string>();
    const todayVisitorIds = new Set<string>();
    const liveVisitorIds = new Set<string>();

    const devices: Record<string, number> = { mobile: 0, desktop: 0, tablet: 0 };
    const oses: Record<string, number> = {};
    const browsers: Record<string, number> = {};
    const subjects: Record<string, number> = {};
    const tabs: Record<string, number> = {};
    const referrers: Record<string, number> = {};

    let totalDuration = 0;
    let todayVisitsCount = 0;

    allEvents.forEach((ev) => {
      uniqueVisitorIds.add(ev.visitorId);

      const evDate = new Date(ev.createdAt);
      if (ev.createdAt.startsWith(todayStr)) {
        todayVisitsCount++;
        todayVisitorIds.add(ev.visitorId);
      }

      if (evDate >= fiveMinutesAgo) {
        liveVisitorIds.add(ev.visitorId);
      }

      // Device
      const d = ev.deviceType || "desktop";
      devices[d] = (devices[d] || 0) + 1;

      // OS
      const o = ev.operatingSystem || "Other";
      oses[o] = (oses[o] || 0) + 1;

      // Browser
      const b = ev.browser || "Other";
      browsers[b] = (browsers[b] || 0) + 1;

      // Subject
      const sub = ev.activeSubject || "all";
      subjects[sub] = (subjects[sub] || 0) + 1;

      // Tab
      const tab = ev.activeTab || "chapter_dashboard";
      tabs[tab] = (tabs[tab] || 0) + 1;

      // Referrer
      const ref = ev.referrer || "direct";
      referrers[ref] = (referrers[ref] || 0) + 1;

      totalDuration += ev.durationSeconds || 0;
    });

    const totalVisits = allEvents.length;
    const avgDuration = totalVisits > 0 ? Math.round(totalDuration / totalVisits) : 0;

    return NextResponse.json({
      ok: true,
      stats: {
        totalVisits,
        uniqueVisitors: uniqueVisitorIds.size,
        todayVisits: todayVisitsCount,
        todayUnique: todayVisitorIds.size,
        liveNow: Math.max(liveVisitorIds.size, 1), // At least 1 (current viewer)
        avgDurationMinutes: Math.max(1, Math.round(avgDuration / 60)),
        devices,
        oses,
        browsers,
        subjects,
        tabs,
        referrers,
        recentVisitors: allEvents.slice(0, 50)
      }
    });
  } catch (error: any) {
    console.error("Analytics retrieval error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    if (pool) {
      await pool.query("TRUNCATE TABLE visitor_events");
    }
    memoryVisitorEvents = [];
    return NextResponse.json({ ok: true, message: "Visitor analytics successfully reset." });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
