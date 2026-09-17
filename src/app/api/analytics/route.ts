import { NextResponse } from "next/server";
import { db, pool } from "@/db";
import { visitorEvents } from "@/db/schema";
import { desc, eq, sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// In-memory fallback if the database is sleeping (Neon cold start)
// ---------------------------------------------------------------------------
let memoryVisitorEvents: any[] = [];

// ---------------------------------------------------------------------------
// POST — record a new visitor event / session
// ---------------------------------------------------------------------------
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const headers = req.headers;

    // Real client IP from proxy headers (never the Vercel server IP)
    const ip =
      headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headers.get("cf-connecting-ip") ||
      headers.get("x-real-ip") ||
      body.ipAddress ||
      "127.0.0.1";

    const userAgent = headers.get("user-agent") || body.userAgent || "Unknown";

    // -----------------------------------------------------------------------
    // Device type detection
    // -----------------------------------------------------------------------
    let deviceType = body.deviceType || "desktop";
    if (!body.deviceType) {
      if (/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
        deviceType = /ipad|tablet/i.test(userAgent) ? "tablet" : "mobile";
      }
    }

    // -----------------------------------------------------------------------
    // OS detection
    // -----------------------------------------------------------------------
    let os = body.operatingSystem || "Other";
    if (!body.operatingSystem) {
      if (/windows/i.test(userAgent)) os = "Windows";
      else if (/android/i.test(userAgent)) os = "Android";
      else if (/iphone|ipad|ipod/i.test(userAgent)) os = "iOS";
      else if (/macintosh|mac os x/i.test(userAgent)) os = "macOS";
      else if (/linux/i.test(userAgent)) os = "Linux";
    }

    // -----------------------------------------------------------------------
    // Browser detection — Brave can only be confirmed from the client
    // -----------------------------------------------------------------------
    let browser = body.browser || "";
    if (body.isBrave || browser.toLowerCase() === "brave") {
      browser = "Brave";
    } else if (!browser || browser === "Chrome" || browser === "Other") {
      if (/edg/i.test(userAgent)) browser = "Edge";
      else if (/opr|opera/i.test(userAgent)) browser = "Opera";
      else if (/vivaldi/i.test(userAgent)) browser = "Vivaldi";
      else if (/samsungbrowser/i.test(userAgent)) browser = "Samsung Internet";
      else if (/chrome|crios/i.test(userAgent)) browser = "Chrome";
      else if (/firefox|fxios/i.test(userAgent)) browser = "Firefox";
      else if (/safari/i.test(userAgent)) browser = "Safari";
      else browser = body.browser || "Chrome";
    }

    // -----------------------------------------------------------------------
    // LOCATION — STRICT PRIORITY CHAIN
    //
    // 1. device_gps   → client sent lat/lon from navigator.geolocation
    //                    → city comes from Nominatim reverse geocode on the CLIENT
    // 2. manual       → student typed their location manually
    // 3. none         → GPS denied or unavailable, NO IP city substitution
    //
    // RULE: The SERVER never calls ipwho.is or any IP-to-city service.
    //       "Delhi, India" is NEVER written here as a fallback.
    //       The client's cityRegion is stored as-is, or left null.
    // -----------------------------------------------------------------------
    const locationSource: string = body.locationSource || "none";
    const latitude: string | null  = body.latitude   ? String(body.latitude)  : null;
    const longitude: string | null = body.longitude  ? String(body.longitude) : null;
    const accuracy: string | null  = body.accuracy   ? String(body.accuracy)  : null;

    // Only accept cityRegion if the client says it came from GPS or manual entry
    // An empty / missing cityRegion is stored as null — not replaced with any city
    // Only accept cityRegion if from real GPS or manual entry; reject fake Delhi fallback
    let cityRegion: string | null = null;
    if (
      body.cityRegion &&
      body.cityRegion.trim() !== "" &&
      body.cityRegion !== "India" &&
      body.cityRegion !== "Unknown"
    ) {
      if (body.cityRegion === "Delhi, India" && !latitude && locationSource !== "manual" && locationSource !== "ip_approximate") {
        cityRegion = null;
      } else {
        cityRegion = body.cityRegion.trim();
      }
    }

    const pincode  = body.pincode  || null;
    const mapsUrl  = body.mapsUrl  || (latitude && longitude ? `https://www.google.com/maps?q=${latitude},${longitude}` : null);
    const gpuRenderer = body.gpuRenderer || null;

    // -----------------------------------------------------------------------
    // Student name — never record generic placeholder names as real
    // -----------------------------------------------------------------------
    const studentName =
      body.studentName &&
      body.studentName.trim() !== "" &&
      body.studentName !== "Student Aspirant" &&
      body.studentName !== "Cadet (Pending Enrollment)"
        ? body.studentName.trim()
        : "Cadet (Pending Enrollment)";

    const now = new Date();

    const eventRecord = {
      visitorId:        body.visitorId  || `anon_${Math.random().toString(36).substring(2, 10)}`,
      sessionId:        body.sessionId  || `sess_${Math.random().toString(36).substring(2, 10)}`,
      ipAddress:        ip,
      userAgent:        userAgent.slice(0, 500),
      deviceType,
      operatingSystem:  os,
      browser,
      path:             body.path        || "/",
      activeTab:        body.activeTab   || "chapter_dashboard",
      activeSubject:    body.activeSubject || "all",
      referrer:         body.referrer    || "direct",
      durationSeconds:  parseInt(body.durationSeconds, 10) || 0,
      screenResolution: body.screenResolution || "unknown",
      studentName,
      studentXp:        parseInt(body.studentXp,     10) || 0,
      studentStreak:    parseInt(body.studentStreak,  10) || 1,
      studentLevel:     parseInt(body.studentLevel,   10) || 1,
      timezone:         body.timezone    || "Asia/Kolkata",
      cityRegion,
      latitude,
      longitude,
      accuracy,
      locationSource,
      pincode,
      mapsUrl,
      gpuRenderer,
      networkType:      body.networkType || "Broadband/WiFi",
      hardwareSpecs:    body.hardwareSpecs || "",
      activeChapter:    body.activeChapter || "",
      language:         body.language    || "en-IN",
      visitStartedAt:   now,
      lastSeenAt:       now,
    };

    if (pool && db) {
      // Session Upsert: If the session already exists, update duration, lastSeenAt, and any improved GPS/name data
      const existing = await db
        .select()
        .from(visitorEvents)
        .where(eq(visitorEvents.sessionId, eventRecord.sessionId))
        .limit(1);

      if (existing.length > 0) {
        const prev = existing[0];
        const updateData: any = {
          lastSeenAt: now,
          durationSeconds: Math.max(prev.durationSeconds || 0, eventRecord.durationSeconds || 0),
          path: eventRecord.path,
          activeTab: eventRecord.activeTab,
          activeSubject: eventRecord.activeSubject,
          activeChapter: eventRecord.activeChapter || prev.activeChapter,
          studentXp: Math.max(prev.studentXp || 0, eventRecord.studentXp || 0),
          studentStreak: Math.max(prev.studentStreak || 1, eventRecord.studentStreak || 1),
          studentLevel: Math.max(prev.studentLevel || 1, eventRecord.studentLevel || 1),
        };

        if (
          eventRecord.studentName &&
          eventRecord.studentName !== "Cadet (Pending Enrollment)" &&
          eventRecord.studentName !== "Student Aspirant"
        ) {
          updateData.studentName = eventRecord.studentName;
        }

        if (eventRecord.latitude && eventRecord.longitude) {
          const prevAcc = prev.accuracy ? parseFloat(prev.accuracy) : Infinity;
          const newAcc = eventRecord.accuracy ? parseFloat(eventRecord.accuracy) : Infinity;
          if (newAcc <= prevAcc || !prev.latitude) {
            updateData.latitude = eventRecord.latitude;
            updateData.longitude = eventRecord.longitude;
            updateData.accuracy = eventRecord.accuracy;
            updateData.locationSource = eventRecord.locationSource;
            updateData.cityRegion = eventRecord.cityRegion || prev.cityRegion;
            updateData.pincode = eventRecord.pincode || prev.pincode;
            updateData.mapsUrl = eventRecord.mapsUrl || prev.mapsUrl;
          }
        } else if (
          eventRecord.cityRegion &&
          (prev.locationSource === "ip_approximate" || prev.locationSource === "none" || !prev.cityRegion || eventRecord.locationSource === "manual")
        ) {
          updateData.cityRegion = eventRecord.cityRegion;
          updateData.locationSource = eventRecord.locationSource;
        }

        if (eventRecord.gpuRenderer && !prev.gpuRenderer) {
          updateData.gpuRenderer = eventRecord.gpuRenderer;
        }

        await db
          .update(visitorEvents)
          .set(updateData)
          .where(eq(visitorEvents.id, prev.id));
      } else {
        await db.insert(visitorEvents).values(eventRecord);
      }
    } else {
      const idx = memoryVisitorEvents.findIndex((e) => e.sessionId === eventRecord.sessionId);
      if (idx !== -1) {
        memoryVisitorEvents[idx] = {
          ...memoryVisitorEvents[idx],
          ...eventRecord,
          durationSeconds: Math.max(memoryVisitorEvents[idx].durationSeconds || 0, eventRecord.durationSeconds || 0),
          lastSeenAt: now.toISOString(),
        };
      } else {
        memoryVisitorEvents.unshift({
          id: `mem_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          ...eventRecord,
          createdAt: now.toISOString()
        });
        if (memoryVisitorEvents.length > 500) memoryVisitorEvents.pop();
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Analytics POST error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}

// ---------------------------------------------------------------------------
// PATCH — heartbeat: update last_seen_at for an active session
// Body: { sessionId: string }
// ---------------------------------------------------------------------------
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const sessionId: string | undefined = body.sessionId;
    if (!sessionId) {
      return NextResponse.json({ ok: false, error: "sessionId required" }, { status: 400 });
    }
    const now = new Date();
    if (pool && db) {
      await db
        .update(visitorEvents)
        .set({ lastSeenAt: now, durationSeconds: sql`duration_seconds + 30` })
        .where(eq(visitorEvents.sessionId, sessionId));
    } else {
      // Update in-memory fallback
      const idx = memoryVisitorEvents.findIndex((e) => e.sessionId === sessionId);
      if (idx !== -1) {
        memoryVisitorEvents[idx].lastSeenAt = now.toISOString();
        memoryVisitorEvents[idx].durationSeconds = (memoryVisitorEvents[idx].durationSeconds || 0) + 30;
      }
    }
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}

// ---------------------------------------------------------------------------
// GET — fetch analytics for the admin dashboard
// Query params:
//   ?page=1&limit=50  → paginated visit history
//   (no params)       → full analytics summary
// ---------------------------------------------------------------------------
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const pageParam  = parseInt(url.searchParams.get("page")  || "1",  10);
    const limitParam = parseInt(url.searchParams.get("limit") || "50", 10);
    const offset     = (pageParam - 1) * limitParam;

    let allEvents: any[] = [];

    if (pool && db) {
      const records = await db
        .select()
        .from(visitorEvents)
        .orderBy(desc(visitorEvents.createdAt))
        .limit(2000);   // enough to build dedup profiles

      allEvents = records.map((r: any) => mapRecord(r));
    } else {
      allEvents = memoryVisitorEvents;
    }

    const now           = new Date();
    const todayStr      = now.toISOString().slice(0, 10);
    // Active = last heartbeat within 5 minutes
    const activeThreshold = new Date(now.getTime() - 5 * 60 * 1000);

    // -----------------------------------------------------------------------
    // DEDUPLICATION — group all events by visitorId
    // The "uniqueStudents" view merges every session for the same device/browser
    // -----------------------------------------------------------------------
    const studentMap = new Map<string, any>();
    const devices:   Record<string, number> = { mobile: 0, desktop: 0, tablet: 0 };
    const oses:      Record<string, number> = {};
    const browsers:  Record<string, number> = {};
    const subjects:  Record<string, number> = {};
    const tabs:      Record<string, number> = {};
    const referrers: Record<string, number> = {};

    let totalDurationSeconds = 0;
    let todaySessionsCount   = 0;

    allEvents.forEach((ev) => {
      const isToday  = ev.createdAt.startsWith(todayStr);
      const evDate   = new Date(ev.lastSeenAt || ev.createdAt);
      const isOnline = evDate >= activeThreshold;

      if (isToday) todaySessionsCount++;
      totalDurationSeconds += ev.durationSeconds || 0;

      if (!studentMap.has(ev.visitorId)) {
        studentMap.set(ev.visitorId, {
          visitorId:       ev.visitorId,
          studentName:     ev.studentName || "Cadet (Pending Enrollment)",
          studentXp:       ev.studentXp   || 0,
          studentStreak:   ev.studentStreak || 1,
          studentLevel:    ev.studentLevel  || 1,
          deviceType:      ev.deviceType   || "desktop",
          operatingSystem: ev.operatingSystem || "Windows",
          browser:         ev.browser      || "Chrome",
          screenResolution:ev.screenResolution || "Unknown",
          hardwareSpecs:   ev.hardwareSpecs || "",
          networkType:     ev.networkType  || "Broadband/WiFi",
          timezone:        ev.timezone     || "Asia/Kolkata",
          // Location — only store if actually from GPS/manual; null otherwise
          cityRegion:      ev.cityRegion   || null,
          latitude:        ev.latitude     || null,
          longitude:       ev.longitude    || null,
          accuracy:        ev.accuracy     || null,
          locationSource:  ev.locationSource || "none",
          pincode:         ev.pincode      || null,
          mapsUrl:         ev.mapsUrl      || null,
          gpuRenderer:     ev.gpuRenderer  || null,
          ipAddress:       ev.ipAddress    || "127.0.0.1",
          language:        ev.language     || "en-IN",
          visitsToday:     isToday ? 1 : 0,
          totalVisits:     1,
          totalDurationSeconds: ev.durationSeconds || 0,
          firstSeen:       ev.createdAt,
          lastActive:      ev.lastSeenAt || ev.createdAt,
          isOnlineNow:     isOnline,
          distinctDays:    new Set([ev.createdAt.slice(0, 10)]),
          subjectsStudied: new Set(ev.activeSubject ? [ev.activeSubject] : []),
          chaptersStudied: new Set(ev.activeChapter ? [ev.activeChapter] : []),
          sessions: [ev],
        });
      } else {
        const s = studentMap.get(ev.visitorId)!;
        s.totalVisits++;
        if (isToday) s.visitsToday++;
        s.totalDurationSeconds += ev.durationSeconds || 0;
        s.distinctDays.add(ev.createdAt.slice(0, 10));
        if (ev.activeSubject) s.subjectsStudied.add(ev.activeSubject);
        if (ev.activeChapter) s.chaptersStudied.add(ev.activeChapter);
        s.sessions.push(ev);

        // Always prefer a real authenticated student name
        if (
          ev.studentName &&
          ev.studentName !== "Cadet (Pending Enrollment)" &&
          ev.studentName !== "Student Aspirant"
        ) {
          s.studentName = ev.studentName;
        }

        // GPS coordinates: prefer the most accurate (lowest accuracy number = best)
        const newAcc = ev.accuracy ? parseFloat(ev.accuracy) : Infinity;
        const curAcc = s.accuracy  ? parseFloat(s.accuracy)  : Infinity;
        if (ev.latitude && ev.longitude && newAcc <= curAcc) {
          s.latitude       = ev.latitude;
          s.longitude      = ev.longitude;
          s.accuracy       = ev.accuracy;
          s.locationSource = ev.locationSource || s.locationSource;
          s.mapsUrl        = ev.mapsUrl || `https://www.google.com/maps?q=${ev.latitude},${ev.longitude}`;
        }

        // GPS-derived city always beats a manual entry or null; manual entry beats ip_approximate
        if (ev.cityRegion) {
          if (
            ev.locationSource === "device_gps" ||
            !s.cityRegion ||
            s.locationSource === "none" ||
            (ev.locationSource === "manual" && s.locationSource === "ip_approximate")
          ) {
            s.cityRegion     = ev.cityRegion;
            s.locationSource = ev.locationSource || s.locationSource;
          }
        }

        if (ev.pincode)     s.pincode     = ev.pincode;
        if (ev.gpuRenderer) s.gpuRenderer = ev.gpuRenderer;

        // Update latest metadata
        const evTime  = new Date(ev.lastSeenAt || ev.createdAt);
        const curTime = new Date(s.lastActive);
        if (evTime > curTime) {
          s.lastActive       = ev.lastSeenAt || ev.createdAt;
          s.studentXp        = Math.max(s.studentXp,     ev.studentXp     || 0);
          s.studentStreak    = Math.max(s.studentStreak, ev.studentStreak || 1);
          s.studentLevel     = Math.max(s.studentLevel,  ev.studentLevel  || 1);
          s.deviceType       = ev.deviceType       || s.deviceType;
          s.operatingSystem  = ev.operatingSystem  || s.operatingSystem;
          s.screenResolution = ev.screenResolution || s.screenResolution;
          s.hardwareSpecs    = ev.hardwareSpecs    || s.hardwareSpecs;
          s.networkType      = ev.networkType      || s.networkType;
          s.ipAddress        = ev.ipAddress        || s.ipAddress;
          // For browser: prefer Brave if ever detected
          if (ev.browser === "Brave") s.browser = "Brave";
          else if (ev.browser && s.browser === "Chrome") s.browser = ev.browser;
        }
        if (new Date(ev.createdAt) < new Date(s.firstSeen)) {
          s.firstSeen = ev.createdAt;
        }
        if (isOnline) s.isOnlineNow = true;
      }

      // Aggregate charts
      const d = ev.deviceType  || "desktop"; devices[d]   = (devices[d]   || 0) + 1;
      const o = ev.operatingSystem || "Other"; oses[o]    = (oses[o]     || 0) + 1;
      const b = ev.browser     || "Chrome";  browsers[b]  = (browsers[b]  || 0) + 1;
      const sub = ev.activeSubject || "all"; subjects[sub] = (subjects[sub] || 0) + 1;
      const tab = ev.activeTab || "chapter_dashboard"; tabs[tab] = (tabs[tab] || 0) + 1;
      const ref = ev.referrer  || "direct"; referrers[ref] = (referrers[ref] || 0) + 1;
    });

    // -----------------------------------------------------------------------
    // Build final unique student profiles with retention badges
    // -----------------------------------------------------------------------
    const uniqueStudents = Array.from(studentMap.values()).map((s) => {
      const daysSinceFirst = Math.max(
        1,
        Math.ceil((now.getTime() - new Date(s.firstSeen).getTime()) / (1000 * 60 * 60 * 24))
      );
      const activeDaysCount = s.distinctDays.size;
      const is30DayUser = daysSinceFirst >= 30 || activeDaysCount >= 10;
      const is15DayUser = daysSinceFirst >= 15 || activeDaysCount >= 5;

      let retentionBadge = "New Cadet";
      if (is30DayUser) retentionBadge = "30-Day Veteran";
      else if (is15DayUser) retentionBadge = "15-Day Active";
      else if (daysSinceFirst >= 7 || activeDaysCount >= 3) retentionBadge = "7-Day Regular";

      return {
        ...s,
        subjectsStudied:  Array.from(s.subjectsStudied),
        chaptersStudied:  Array.from(s.chaptersStudied),
        totalStudyMinutes: Math.max(0, Math.round(s.totalDurationSeconds / 60)),
        daysSinceFirst,
        activeDaysCount,
        is15DayUser,
        is30DayUser,
        retentionBadge,
      };
    });

    uniqueStudents.sort((a, b) =>
      new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime()
    );

    const totalUniqueStudents  = uniqueStudents.length;
    const todayUniqueStudents  = uniqueStudents.filter((s) => s.visitsToday > 0).length;
    const liveNowStudents      = uniqueStudents.filter((s) => s.isOnlineNow).length;
    const fifteenDayUsersCount = uniqueStudents.filter((s) => s.is15DayUser).length;
    const thirtyDayUsersCount  = uniqueStudents.filter((s) => s.is30DayUser).length;
    const avgDurationMinutes   = allEvents.length > 0
      ? Math.round(totalDurationSeconds / allEvents.length / 60)
      : 0;

    // -----------------------------------------------------------------------
    // Paginated visit history — all raw events with location details
    // -----------------------------------------------------------------------
    const totalEvents     = allEvents.length;
    const paginatedEvents = allEvents.slice(offset, offset + limitParam);

    return NextResponse.json({
      ok: true,
      stats: {
        totalUniqueStudents,
        todayUniqueStudents:  Math.max(todayUniqueStudents,  0),
        todayTotalSessions:   todaySessionsCount,
        liveNowStudents:      Math.max(liveNowStudents,      0),
        fifteenDayUsersCount,
        thirtyDayUsersCount,
        totalEventsCount:     totalEvents,
        avgDurationMinutes:   Math.max(0, avgDurationMinutes),
        devices,
        oses,
        browsers,
        subjects,
        tabs,
        referrers,
        uniqueStudents,
        recentEvents: paginatedEvents,
        // Pagination meta for visit history tab
        pagination: {
          page:       pageParam,
          limit:      limitParam,
          totalEvents,
          totalPages: Math.ceil(totalEvents / limitParam),
        },
      }
    });
  } catch (error: any) {
    console.error("Analytics GET error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}

// ---------------------------------------------------------------------------
// DELETE — wipe all visitor events (admin only, no auth here — relies on
// the admin page being password-protected)
// ---------------------------------------------------------------------------
export async function DELETE() {
  try {
    if (pool) {
      await pool.query("TRUNCATE TABLE visitor_events");
    }
    memoryVisitorEvents = [];
    return NextResponse.json({ ok: true, message: "Visitor analytics reset." });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}

// ---------------------------------------------------------------------------
// Helper — maps a raw DB row to a consistent event object
// ---------------------------------------------------------------------------
function mapRecord(r: any) {
  return {
    id:              r.id,
    visitorId:       r.visitorId       || r.visitor_id,
    sessionId:       r.sessionId       || r.session_id,
    ipAddress:       r.ipAddress       || r.ip_address        || "127.0.0.1",
    deviceType:      r.deviceType      || r.device_type       || "desktop",
    operatingSystem: r.operatingSystem || r.operating_system  || "Windows",
    browser:         r.browser         || "Chrome",
    path:            r.path            || "/",
    activeTab:       r.activeTab       || r.active_tab        || "chapter_dashboard",
    activeSubject:   r.activeSubject   || r.active_subject    || "all",
    referrer:        r.referrer        || "direct",
    durationSeconds: r.durationSeconds || r.duration_seconds  || 0,
    screenResolution:r.screenResolution|| r.screen_resolution || "unknown",
    studentName:     r.studentName     || r.student_name      || "Cadet (Pending Enrollment)",
    studentXp:       r.studentXp       || r.student_xp        || 0,
    studentStreak:   r.studentStreak   || r.student_streak    || 1,
    studentLevel:    r.studentLevel    || r.student_level     || 1,
    timezone:        r.timezone        || "Asia/Kolkata",
    // Location — returned exactly as stored, no substitution
    cityRegion:      r.cityRegion      || r.city_region       || null,
    latitude:        r.latitude        || null,
    longitude:       r.longitude       || null,
    accuracy:        r.accuracy        || null,
    locationSource:  r.locationSource  || r.location_source   || "none",
    pincode:         r.pincode         || null,
    mapsUrl:         r.mapsUrl         || r.maps_url          || (r.latitude && r.longitude ? `https://www.google.com/maps?q=${r.latitude},${r.longitude}` : null),
    gpuRenderer:     r.gpuRenderer     || r.gpu_renderer      || null,
    networkType:     r.networkType     || r.network_type      || "Broadband/WiFi",
    hardwareSpecs:   r.hardwareSpecs   || r.hardware_specs    || "",
    activeChapter:   r.activeChapter   || r.active_chapter    || "",
    language:        r.language        || "en-IN",
    visitStartedAt:  r.visitStartedAt  || r.visit_started_at  ? new Date(r.visitStartedAt || r.visit_started_at).toISOString() : null,
    lastSeenAt:      r.lastSeenAt      || r.last_seen_at       ? new Date(r.lastSeenAt || r.last_seen_at).toISOString() : null,
    createdAt:       r.createdAt       ? new Date(r.createdAt).toISOString() : new Date().toISOString(),
  };
}
