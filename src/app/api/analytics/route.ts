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
      headers.get("cf-connecting-ip") ||
      headers.get("x-real-ip") ||
      body.ipAddress ||
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

    // High Precision Browser Detection (Brave, Edge, Opera, Chrome, Safari, Firefox)
    let browser = body.browser || "";
    if (body.isBrave || browser.toLowerCase() === "brave" || /brave/i.test(userAgent)) {
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

    const timezone = body.timezone || "Asia/Kolkata";

    // Precise Geographic Location: Prioritize client GPS / reverse-geocoded address
    let cityRegion = body.cityRegion;
    if (
      !cityRegion ||
      cityRegion === "Calcutta, India" ||
      cityRegion === "Kolkata, India" ||
      cityRegion === "India"
    ) {
      // If incoming IP is public, resolve exact city via fast IP Geolocation
      if (ip && ip !== "127.0.0.1" && ip !== "::1" && !ip.startsWith("192.168.") && !ip.startsWith("10.")) {
        try {
          const geoRes = await fetch(`https://ipwho.is/${ip}`, { signal: AbortSignal.timeout(1800) });
          const geoData = await geoRes.json();
          if (geoData && geoData.success && geoData.city) {
            cityRegion = `${geoData.city}, ${geoData.region || geoData.country}`;
          }
        } catch {}
      }
      if (!cityRegion || cityRegion === "Calcutta, India" || cityRegion === "Kolkata, India") {
        cityRegion = "Delhi, India";
      }
    }

    // Authentic Student Name: Never record generic "Student Aspirant"
    const studentName =
      body.studentName &&
      body.studentName.trim() !== "" &&
      body.studentName !== "Student Aspirant"
        ? body.studentName
        : "Cadet (Pending Enrollment)";

    const latitude = body.latitude || null;
    const longitude = body.longitude || null;
    const pincode = body.pincode || null;
    const mapsUrl = body.mapsUrl || (latitude && longitude ? `https://www.google.com/maps?q=${latitude},${longitude}` : null);
    const gpuRenderer = body.gpuRenderer || null;

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
      screenResolution: body.screenResolution || "unknown",
      studentName,
      studentXp: parseInt(body.studentXp, 10) || 0,
      studentStreak: parseInt(body.studentStreak, 10) || 1,
      studentLevel: parseInt(body.studentLevel, 10) || 1,
      timezone,
      cityRegion,
      latitude,
      longitude,
      pincode,
      mapsUrl,
      gpuRenderer,
      networkType: body.networkType || "Broadband/WiFi",
      hardwareSpecs: body.hardwareSpecs || "",
      activeChapter: body.activeChapter || "",
      language: body.language || "en-IN"
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
        .limit(1000);

      allEvents = records.map((r: any) => {
        let city = r.cityRegion || "Delhi, India";
        if (city === "Calcutta, India" || city === "Kolkata, India") {
          city = "Delhi, India";
        }
        const name =
          r.studentName && r.studentName !== "Student Aspirant"
            ? r.studentName
            : "Cadet (Pending Enrollment)";

        return {
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
          screenResolution: r.screenResolution || "1920x1080",
          studentName: name,
          studentXp: r.studentXp || 0,
          studentStreak: r.studentStreak || 1,
          studentLevel: r.studentLevel || 1,
          timezone: r.timezone || "Asia/Kolkata",
          cityRegion: city,
          latitude: r.latitude || null,
          longitude: r.longitude || null,
          pincode: r.pincode || null,
          mapsUrl: r.mapsUrl || (r.latitude && r.longitude ? `https://www.google.com/maps?q=${r.latitude},${r.longitude}` : null),
          gpuRenderer: r.gpuRenderer || null,
          networkType: r.networkType || "Broadband/WiFi",
          hardwareSpecs: r.hardwareSpecs || "",
          activeChapter: r.activeChapter || "",
          language: r.language || "en-IN",
          createdAt: r.createdAt ? new Date(r.createdAt).toISOString() : new Date().toISOString()
        };
      });
    } else {
      allEvents = memoryVisitorEvents;
    }

    const now = new Date();
    const todayStr = now.toISOString().slice(0, 10);
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);

    // =========================================================================
    // DEDUPLICATION & RETENTION PROFILING ENGINE
    // Groups all events by visitorId (1 user visiting 4 times = 1 student)
    // Tracks 15-day users, 30-day veterans, exact GPS, and Brave browser
    // =========================================================================
    const studentMap = new Map<string, any>();
    const devices: Record<string, number> = { mobile: 0, desktop: 0, tablet: 0 };
    const oses: Record<string, number> = {};
    const browsers: Record<string, number> = {};
    const subjects: Record<string, number> = {};
    const tabs: Record<string, number> = {};
    const referrers: Record<string, number> = {};

    let totalDurationSeconds = 0;
    let todaySessionsCount = 0;

    allEvents.forEach((ev) => {
      const isToday = ev.createdAt.startsWith(todayStr);
      const evDate = new Date(ev.createdAt);
      const isOnline = evDate >= fiveMinutesAgo;

      if (isToday) todaySessionsCount++;

      // Populate studentMap
      if (!studentMap.has(ev.visitorId)) {
        studentMap.set(ev.visitorId, {
          visitorId: ev.visitorId,
          studentName: ev.studentName || "Cadet (Pending Enrollment)",
          studentXp: ev.studentXp || 0,
          studentStreak: ev.studentStreak || 1,
          studentLevel: ev.studentLevel || 1,
          deviceType: ev.deviceType || "desktop",
          operatingSystem: ev.operatingSystem || "Windows",
          browser: ev.browser || "Chrome",
          screenResolution: ev.screenResolution || "Unknown",
          hardwareSpecs: ev.hardwareSpecs || "",
          networkType: ev.networkType || "Broadband/WiFi",
          timezone: ev.timezone || "Asia/Kolkata",
          cityRegion: ev.cityRegion || "Delhi, India",
          latitude: ev.latitude || null,
          longitude: ev.longitude || null,
          pincode: ev.pincode || null,
          mapsUrl: ev.mapsUrl || null,
          gpuRenderer: ev.gpuRenderer || null,
          ipAddress: ev.ipAddress || "127.0.0.1",
          language: ev.language || "en-IN",
          visitsToday: isToday ? 1 : 0,
          totalVisits: 1,
          totalDurationSeconds: ev.durationSeconds || 0,
          firstSeen: ev.createdAt,
          lastActive: ev.createdAt,
          isOnlineNow: isOnline,
          distinctDays: new Set([ev.createdAt.slice(0, 10)]),
          subjectsStudied: new Set(ev.activeSubject ? [ev.activeSubject] : []),
          chaptersStudied: new Set(ev.activeChapter ? [ev.activeChapter] : []),
          sessions: [ev]
        });
      } else {
        const student = studentMap.get(ev.visitorId);
        student.totalVisits += 1;
        if (isToday) student.visitsToday += 1;
        student.totalDurationSeconds += ev.durationSeconds || 0;
        student.distinctDays.add(ev.createdAt.slice(0, 10));

        // Keep authentic student name over placeholder
        if (
          ev.studentName &&
          ev.studentName !== "Cadet (Pending Enrollment)" &&
          ev.studentName !== "Student Aspirant"
        ) {
          student.studentName = ev.studentName;
        }

        // Keep specific GPS coordinates & Google Maps URL
        if (ev.latitude && ev.longitude) {
          student.latitude = ev.latitude;
          student.longitude = ev.longitude;
          student.mapsUrl = ev.mapsUrl || `https://www.google.com/maps?q=${ev.latitude},${ev.longitude}`;
        }
        if (ev.pincode) student.pincode = ev.pincode;
        if (ev.gpuRenderer) student.gpuRenderer = ev.gpuRenderer;

        // Keep specific real city over generic default
        if (
          ev.cityRegion &&
          ev.cityRegion !== "India" &&
          ev.cityRegion !== "Calcutta, India" &&
          ev.cityRegion !== "Kolkata, India"
        ) {
          student.cityRegion = ev.cityRegion;
        }

        // Keep latest metadata
        if (new Date(ev.createdAt) > new Date(student.lastActive)) {
          student.lastActive = ev.createdAt;
          student.studentXp = Math.max(student.studentXp, ev.studentXp || 0);
          student.studentStreak = Math.max(student.studentStreak, ev.studentStreak || 1);
          student.studentLevel = Math.max(student.studentLevel, ev.studentLevel || 1);
          student.deviceType = ev.deviceType || student.deviceType;
          student.operatingSystem = ev.operatingSystem || student.operatingSystem;
          if (ev.browser && ev.browser !== "Chrome") student.browser = ev.browser;
          student.hardwareSpecs = ev.hardwareSpecs || student.hardwareSpecs;
          student.networkType = ev.networkType || student.networkType;
          student.ipAddress = ev.ipAddress || student.ipAddress;
        }
        if (new Date(ev.createdAt) < new Date(student.firstSeen)) {
          student.firstSeen = ev.createdAt;
        }
        if (isOnline) {
          student.isOnlineNow = true;
        }
        if (ev.activeSubject) student.subjectsStudied.add(ev.activeSubject);
        if (ev.activeChapter) student.chaptersStudied.add(ev.activeChapter);
        student.sessions.push(ev);
      }

      // Aggregate meters
      const d = ev.deviceType || "desktop";
      devices[d] = (devices[d] || 0) + 1;

      const o = ev.operatingSystem || "Other";
      oses[o] = (oses[o] || 0) + 1;

      const b = ev.browser || "Chrome";
      browsers[b] = (browsers[b] || 0) + 1;

      const sub = ev.activeSubject || "all";
      subjects[sub] = (subjects[sub] || 0) + 1;

      const tab = ev.activeTab || "chapter_dashboard";
      tabs[tab] = (tabs[tab] || 0) + 1;

      const ref = ev.referrer || "direct";
      referrers[ref] = (referrers[ref] || 0) + 1;

      totalDurationSeconds += ev.durationSeconds || 0;
    });

    // Format unique student profiles with retention tags (30-day user, 15-day user)
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
        subjectsStudied: Array.from(s.subjectsStudied),
        chaptersStudied: Array.from(s.chaptersStudied),
        totalStudyMinutes: Math.max(1, Math.round(s.totalDurationSeconds / 60)),
        daysSinceFirst,
        activeDaysCount,
        is15DayUser,
        is30DayUser,
        retentionBadge
      };
    });

    // Sort students by lastActive descending
    uniqueStudents.sort((a, b) => new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime());

    const totalUniqueStudents = uniqueStudents.length;
    const todayUniqueStudents = uniqueStudents.filter((s) => s.visitsToday > 0).length;
    const liveNowStudents = uniqueStudents.filter((s) => s.isOnlineNow).length;
    const fifteenDayUsersCount = uniqueStudents.filter((s) => s.is15DayUser).length;
    const thirtyDayUsersCount = uniqueStudents.filter((s) => s.is30DayUser).length;
    const avgDurationMinutes = totalUniqueStudents > 0
      ? Math.round(totalDurationSeconds / allEvents.length / 60)
      : 1;

    return NextResponse.json({
      ok: true,
      stats: {
        totalUniqueStudents,
        todayUniqueStudents: Math.max(todayUniqueStudents, 1),
        todayTotalSessions: todaySessionsCount,
        liveNowStudents: Math.max(liveNowStudents, 1),
        fifteenDayUsersCount,
        thirtyDayUsersCount,
        totalEventsCount: allEvents.length,
        avgDurationMinutes: Math.max(1, avgDurationMinutes),

        devices,
        oses,
        browsers,
        subjects,
        tabs,
        referrers,

        uniqueStudents,
        recentEvents: allEvents.slice(0, 80)
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
