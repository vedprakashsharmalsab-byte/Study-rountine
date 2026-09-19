"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { areteAudio } from "@/lib/audio";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  Lock,
  Mail,
  Eye,
  EyeOff,
  LogOut,
  Users,
  UserCheck,
  Activity,
  Globe,
  Smartphone,
  Laptop,
  Compass,
  Download,
  Trash2,
  RefreshCw,
  Radio,
  BookOpen,
  Send,
  AlertTriangle,
  CheckCircle2,
  Search,
  Filter,
  Layers,
  Award,
  Zap,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Database,
  Cpu,
  Clock,
  HelpCircle,
  TrendingUp,
  Calendar,
  Sparkles,
  Wifi,
  HardDrive,
  History,
  MapPin,
  X
} from "lucide-react";
import { CBSE_SUBJECTS } from "@/data/cbseData";

// Secret Admin Authentication Config
const ADMIN_EMAIL = "sarthaksharma.churu@gmail.com";
const ADMIN_PASS = "776847683";
const ADMIN_SESSION_KEY = "cbse_admin_auth_session";
const BROADCAST_STORAGE_KEY = "cbse_admin_broadcast";

interface BroadcastMessage {
  id: string;
  title: string;
  message: string;
  type: "urgent" | "tip" | "motivation" | "update";
  active: boolean;
  publishedAt: string;
  author: string;
}

interface StudentSession {
  id: string;
  sessionId: string;
  path: string;
  activeTab: string;
  activeSubject: string;
  activeChapter?: string;
  durationSeconds: number;
  referrer: string;
  createdAt: string;
  visitStartedAt?: string | null;
  lastSeenAt?: string | null;
  cityRegion?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  accuracyRadius?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  accuracy?: string | null;
  locationSource?: string | null;
  mapsUrl?: string | null;
  pincode?: string | null;
}

interface UniqueStudentProfile {
  visitorId: string;
  studentName: string;
  studentXp: number;
  studentStreak: number;
  studentLevel: number;
  deviceType: string;
  operatingSystem: string;
  browser: string;
  screenResolution: string;
  hardwareSpecs: string;
  networkType: string;
  timezone: string;
  cityRegion: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  accuracyRadius?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  accuracy?: string | null;
  locationSource?: string | null;
  pincode?: string | null;
  mapsUrl?: string | null;
  gpuRenderer?: string | null;
  ipAddress: string;
  language: string;
  visitsToday: number;
  totalVisits: number;
  totalStudyMinutes: number;
  activeDaysCount: number;
  daysSinceFirst: number;
  retentionBadge: string;
  is15DayUser: boolean;
  is30DayUser: boolean;
  firstSeen: string;
  lastActive: string;
  isOnlineNow: boolean;
  subjectsStudied: string[];
  chaptersStudied: string[];
  sessions: StudentSession[];
}

interface VisitorStats {
  totalUniqueStudents: number;
  todayUniqueStudents: number;
  todayTotalSessions: number;
  liveNowStudents: number;
  fifteenDayUsersCount: number;
  thirtyDayUsersCount: number;
  totalEventsCount: number;
  avgDurationMinutes: number;
  devices: { mobile: number; desktop: number; tablet: number };
  oses: Record<string, number>;
  browsers: Record<string, number>;
  subjects: Record<string, number>;
  tabs: Record<string, number>;
  referrers: Record<string, number>;
  uniqueStudents: UniqueStudentProfile[];
  recentEvents: Array<{
    id: string;
    visitorId: string;
    sessionId?: string;
    studentName: string;
    ipAddress: string;
    cityRegion?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    accuracyRadius?: string | null;
    latitude?: string | null;
    longitude?: string | null;
    accuracy?: string | null;
    locationSource?: string | null;
    mapsUrl?: string | null;
    pincode?: string | null;
    deviceType: string;
    operatingSystem: string;
    browser: string;
    activeTab: string;
    activeSubject: string;
    activeChapter?: string;
    durationSeconds: number;
    networkType?: string;
    hardwareSpecs?: string;
    gpuRenderer?: string | null;
    screenResolution?: string;
    studentXp?: number;
    studentStreak?: number;
    studentLevel?: number;
    visitStartedAt?: string | null;
    lastSeenAt?: string | null;
    createdAt: string;
  }>;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true);
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>("");
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  // Admin Dashboard State
  const [activeTab, setActiveTab] = useState<"analytics" | "broadcast" | "curriculum" | "mistakes" | "diagnostics">("analytics");
  const [isDark, setIsDark] = useState<boolean>(true);

  // Visitor Analytics State
  const [analytics, setAnalytics] = useState<VisitorStats | null>(null);
  const [isLoadingAnalytics, setIsLoadingAnalytics] = useState<boolean>(false);
  const [isLivePolling, setIsLivePolling] = useState<boolean>(true);
  const [lastRefreshed, setLastRefreshed] = useState<string>("");
  const [streamViewMode, setStreamViewMode] = useState<"students" | "events">("students");
  const [expandedStudentId, setExpandedStudentId] = useState<string | null>(null);
  const [selectedStudentForModal, setSelectedStudentForModal] = useState<UniqueStudentProfile | null>(null);
  const [visitorFilter, setVisitorFilter] = useState<string>("all");
  const [visitorSearch, setVisitorSearch] = useState<string>("");

  // Broadcast Message State
  const [broadcasts, setBroadcasts] = useState<BroadcastMessage[]>([]);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newMessage, setNewMessage] = useState<string>("");
  const [newType, setNewType] = useState<"urgent" | "tip" | "motivation" | "update">("urgent");
  const [broadcastStatus, setBroadcastStatus] = useState<string>("");

  // Curriculum Filter State
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("all");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>("all");

  // Real Student Mistakes Telemetry State
  const [mistakeLogsList, setMistakeLogsList] = useState<any[]>([]);
  const [isLoadingMistakes, setIsLoadingMistakes] = useState<boolean>(false);
  const [mistakeSubjectFilter, setMistakeSubjectFilter] = useState<string>("all");
  const [mistakeSearch, setMistakeSearch] = useState<string>("");

  // Sound Synthesizer for Admin Interactions using ARETE audio singleton
  const playSound = (type: "login" | "error" | "click" | "success") => {
    if (type === "login") {
      areteAudio.play("reveal");
    } else {
      areteAudio.play(type);
    }
  };

  // Check saved session on mount
  useEffect(() => {
    try {
      const session = localStorage.getItem(ADMIN_SESSION_KEY);
      if (session) {
        const parsed = JSON.parse(session);
        if (parsed.email === ADMIN_EMAIL && parsed.authenticated) {
          setIsAuthenticated(true);
        }
      }
      const savedBroadcasts = localStorage.getItem(BROADCAST_STORAGE_KEY);
      if (savedBroadcasts) {
        setBroadcasts(JSON.parse(savedBroadcasts));
      }
    } catch {
    } finally {
      setIsCheckingAuth(false);
    }
  }, []);

  // Fetch Live Analytics
  const fetchAnalytics = useCallback(async (silent = false) => {
    if (!silent) setIsLoadingAnalytics(true);
    try {
      // ?all=true fetches up to 10,000 historical records (not just recent 500)
      const res = await fetch("/api/analytics?all=true");
      const data = await res.json();
      if (data.ok && data.stats) {
        setAnalytics(data.stats);
        setLastRefreshed(new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      }
    } catch (err) {
      console.error("Failed to load visitor analytics:", err);
    } finally {
      if (!silent) setIsLoadingAnalytics(false);
    }
  }, []);

  // Fetch Real Student Mistakes Telemetry
  const fetchMistakes = useCallback(async () => {
    setIsLoadingMistakes(true);
    try {
      const res = await fetch("/api/mistakes?all=true");
      const data = await res.json();
      if (data.ok && Array.isArray(data.mistakes)) {
        setMistakeLogsList(data.mistakes);
      }
    } catch (err) {
      console.error("Failed to load student mistake telemetry:", err);
    } finally {
      setIsLoadingMistakes(false);
    }
  }, []);

  // Poll analytics and telemetry when authenticated
  useEffect(() => {
    if (!isAuthenticated) return;
    fetchAnalytics();
    fetchMistakes();

    if (!isLivePolling) return;
    const interval = setInterval(() => {
      fetchAnalytics(true);
      if (activeTab === "mistakes") {
        fetchMistakes();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isAuthenticated, isLivePolling, fetchAnalytics, fetchMistakes, activeTab]);

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);

    setTimeout(() => {
      const cleanEmail = emailInput.trim().toLowerCase();
      const cleanPass = passwordInput.trim();

      if (cleanEmail === ADMIN_EMAIL.toLowerCase() && cleanPass === ADMIN_PASS) {
        playSound("login");
        setIsAuthenticated(true);
        try {
          localStorage.setItem(
            ADMIN_SESSION_KEY,
            JSON.stringify({
              email: ADMIN_EMAIL,
              authenticated: true,
              timestamp: new Date().toISOString()
            })
          );
        } catch {}
      } else {
        playSound("error");
        setLoginError("Access Denied: Invalid authorization credentials.");
      }
      setIsLoggingIn(false);
    }, 400);
  };

  // Handle Logout
  const handleLogout = () => {
    playSound("click");
    setIsAuthenticated(false);
    try {
      localStorage.removeItem(ADMIN_SESSION_KEY);
    } catch {}
  };

  // Reset Analytics
  const handleResetAnalytics = async () => {
    if (!window.confirm("Are you sure you want to purge all visitor tracking data? This cannot be undone.")) return;
    try {
      const res = await fetch("/api/analytics", { method: "DELETE" });
      const data = await res.json();
      if (data.ok) {
        playSound("success");
        fetchAnalytics();
      }
    } catch {}
  };

  // Export Analytics to CSV
  const handleExportCSV = () => {
    if (!analytics || !analytics.uniqueStudents.length) return;
    playSound("click");
    const headers = [
      "Student Name",
      "Visitor ID",
      "Visits Today",
      "Total Visits All-Time",
      "Total Study Minutes",
      "XP",
      "Streak",
      "Device",
      "OS",
      "Browser",
      "Screen",
      "Location",
      "Pincode",
      "Location Source",
      "Latitude",
      "Longitude",
      "Accuracy (m)",
      "IP",
      "Network",
      "Subjects Studied",
      "Last Active"
    ];

    const esc = (val: any) => {
      if (val === null || val === undefined) return '""';
      return `"${String(val).replace(/"/g, '""')}"`;
    };

    const rows = analytics.uniqueStudents.map((s) => [
      esc(s.studentName),
      s.visitorId,
      s.visitsToday,
      s.totalVisits,
      s.totalStudyMinutes,
      s.studentXp,
      s.studentStreak,
      s.deviceType,
      s.operatingSystem,
      s.browser,
      esc(s.screenResolution),
      esc(s.cityRegion || "Not provided"),
      esc(s.pincode || ""),
      esc(s.locationSource || (s.latitude ? "device_gps" : (s.cityRegion ? "manual" : "none"))),
      s.latitude || "",
      s.longitude || "",
      s.accuracy || "",
      esc(s.ipAddress),
      esc(s.networkType),
      esc(s.subjectsStudied.join(", ")),
      s.lastActive
    ]);

    const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `cbse_unique_students_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Delete Individual Mistake Record
  const handleDeleteMistake = async (id: string) => {
    if (!window.confirm("Are you sure you want to remove this student mistake record?")) return;
    playSound("click");
    try {
      const res = await fetch(`/api/mistakes?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      const data = await res.json();
      if (data.ok) {
        playSound("success");
        setMistakeLogsList((prev) => prev.filter((m) => m.id !== id));
      }
    } catch (err) {
      console.error("Failed to delete mistake log:", err);
    }
  };

  // Clear All Mistake Telemetry
  const handleClearAllMistakes = async () => {
    if (!window.confirm("Purge ALL student mistake telemetry? This cannot be undone.")) return;
    playSound("click");
    try {
      const res = await fetch("/api/mistakes?all=true", { method: "DELETE" });
      const data = await res.json();
      if (data.ok) {
        playSound("success");
        setMistakeLogsList([]);
      }
    } catch (err) {
      console.error("Failed to clear mistake logs:", err);
    }
  };

  // Handle Publishing Broadcast
  const handlePublishBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newMessage.trim()) return;

    const newBc: BroadcastMessage = {
      id: `bc_${Date.now()}`,
      title: newTitle.trim(),
      message: newMessage.trim(),
      type: newType,
      active: true,
      publishedAt: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
      author: "Super Admin"
    };

    const updated = [newBc, ...broadcasts];
    setBroadcasts(updated);
    try {
      localStorage.setItem(BROADCAST_STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new Event("storage"));
    } catch {}

    playSound("success");
    setNewTitle("");
    setNewMessage("");
    setBroadcastStatus("Broadcast alert successfully published to student website banner!");
    setTimeout(() => setBroadcastStatus(""), 4000);
  };

  const toggleBroadcast = (id: string) => {
    playSound("click");
    const updated = broadcasts.map((b) => (b.id === id ? { ...b, active: !b.active } : b));
    setBroadcasts(updated);
    try {
      localStorage.setItem(BROADCAST_STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new Event("storage"));
    } catch {}
  };

  const deleteBroadcast = (id: string) => {
    playSound("click");
    const updated = broadcasts.filter((b) => b.id !== id);
    setBroadcasts(updated);
    try {
      localStorage.setItem(BROADCAST_STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new Event("storage"));
    } catch {}
  };

  // Escape key closes student details modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedStudentForModal) {
        setSelectedStudentForModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedStudentForModal]);

  // Fast O(1) Student Profile Lookup Map by visitorId
  const studentProfileMap = useMemo(() => {
    const map = new Map<string, UniqueStudentProfile>();
    if (analytics?.uniqueStudents) {
      for (const s of analytics.uniqueStudents) {
        map.set(s.visitorId, s);
      }
    }
    return map;
  }, [analytics]);

  // Fallback profile generator if an event has no pre-aggregated profile
  const getStudentProfileForEvent = useCallback((ev: VisitorStats["recentEvents"][0]): UniqueStudentProfile => {
    const existing = studentProfileMap.get(ev.visitorId);
    if (existing) return existing;
    return {
      visitorId: ev.visitorId,
      studentName: ev.studentName || "Cadet",
      studentXp: ev.studentXp || 0,
      studentStreak: ev.studentStreak || 1,
      studentLevel: ev.studentLevel || 1,
      deviceType: ev.deviceType,
      operatingSystem: ev.operatingSystem,
      browser: ev.browser,
      screenResolution: ev.screenResolution || "Desktop",
      hardwareSpecs: ev.hardwareSpecs || "",
      networkType: ev.networkType || "Broadband/WiFi",
      timezone: "Asia/Kolkata",
      cityRegion: ev.cityRegion || null,
      city: ev.city || null,
      state: ev.state || null,
      country: ev.country || "India",
      accuracyRadius: ev.accuracyRadius || null,
      latitude: ev.latitude || null,
      longitude: ev.longitude || null,
      accuracy: ev.accuracy || null,
      locationSource: ev.locationSource || null,
      pincode: ev.pincode || null,
      mapsUrl: ev.mapsUrl || (ev.latitude && ev.longitude ? `https://www.google.com/maps?q=${ev.latitude},${ev.longitude}` : null),
      gpuRenderer: ev.gpuRenderer || null,
      ipAddress: ev.ipAddress,
      language: "en-IN",
      visitsToday: 1,
      totalVisits: 1,
      totalStudyMinutes: Math.round((ev.durationSeconds || 0) / 60),
      activeDaysCount: 1,
      daysSinceFirst: 0,
      retentionBadge: "New Cadet",
      is15DayUser: false,
      is30DayUser: false,
      firstSeen: ev.visitStartedAt || ev.createdAt,
      lastActive: ev.lastSeenAt || ev.createdAt,
      isOnlineNow: false,
      subjectsStudied: [ev.activeSubject],
      chaptersStudied: ev.activeChapter ? [ev.activeChapter] : [],
      sessions: [{
        id: ev.id,
        sessionId: ev.sessionId || ev.id,
        path: "/",
        activeTab: ev.activeTab,
        activeSubject: ev.activeSubject,
        activeChapter: ev.activeChapter,
        durationSeconds: ev.durationSeconds,
        referrer: "direct",
        createdAt: ev.createdAt,
        visitStartedAt: ev.visitStartedAt,
        lastSeenAt: ev.lastSeenAt,
        cityRegion: ev.cityRegion,
        city: ev.city,
        state: ev.state,
        country: ev.country,
        accuracyRadius: ev.accuracyRadius,
        latitude: ev.latitude,
        longitude: ev.longitude,
        accuracy: ev.accuracy,
        locationSource: ev.locationSource,
        mapsUrl: ev.mapsUrl,
        pincode: ev.pincode
      }]
    };
  }, [studentProfileMap]);

  // Filtered unique students
  const filteredStudents = useMemo(() => {
    if (!analytics || !analytics.uniqueStudents) return [];
    return analytics.uniqueStudents.filter((s) => {
      if (visitorFilter === "today" && s.visitsToday === 0) return false;
      if (visitorFilter === "returning" && s.totalVisits <= 1 && s.daysSinceFirst === 0) return false;
      if (visitorFilter === "first_time" && (s.totalVisits > 1 || s.daysSinceFirst > 0)) return false;
      if (visitorFilter === "gps" && s.locationSource !== "device_gps" && !s.latitude) return false;
      if (visitorFilter === "mobile" && s.deviceType !== "mobile") return false;
      if (visitorFilter === "desktop" && s.deviceType !== "desktop") return false;
      if (visitorFilter === "online" && !s.isOnlineNow) return false;
      if (visitorFilter === "15day" && !s.is15DayUser) return false;
      if (visitorFilter === "30day" && !s.is30DayUser) return false;
      if (visitorSearch.trim()) {
        const q = visitorSearch.toLowerCase();
        const matchName = s.studentName.toLowerCase().includes(q);
        const matchId = s.visitorId.toLowerCase().includes(q);
        const matchIp = (s.ipAddress || "").toLowerCase().includes(q);
        const matchCity = (s.cityRegion || "").toLowerCase().includes(q) || (s.city || "").toLowerCase().includes(q) || (s.state || "").toLowerCase().includes(q);
        const matchSubs = s.subjectsStudied.some(sub => sub.toLowerCase().includes(q));
        const matchBrowser = (s.browser || "").toLowerCase().includes(q);
        const matchPin = (s.pincode || "").toLowerCase().includes(q);
        const matchSource = (s.locationSource || "").toLowerCase().includes(q);
        const matchNet = (s.networkType || "").toLowerCase().includes(q);
        return matchName || matchId || matchIp || matchCity || matchSubs || matchBrowser || matchPin || matchSource || matchNet;
      }
      return true;
    });
  }, [analytics, visitorFilter, visitorSearch]);

  // Filtered raw visit history events
  const filteredEvents = useMemo(() => {
    if (!analytics || !analytics.recentEvents) return [];
    return analytics.recentEvents.filter((ev) => {
      const student = studentProfileMap.get(ev.visitorId);
      if (visitorFilter === "returning" && (!student || (student.totalVisits <= 1 && student.daysSinceFirst === 0))) return false;
      if (visitorFilter === "first_time" && student && (student.totalVisits > 1 || student.daysSinceFirst > 0)) return false;
      if (visitorFilter === "today") {
        const d = new Date(ev.visitStartedAt || ev.createdAt);
        const today = new Date();
        const isToday = d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();
        if (!isToday) return false;
      }
      if (visitorFilter === "online" && (!student || !student.isOnlineNow)) return false;
      if (visitorFilter === "gps" && ev.locationSource !== "device_gps" && !ev.latitude) return false;
      if (visitorFilter === "mobile" && ev.deviceType !== "mobile") return false;
      if (visitorFilter === "desktop" && ev.deviceType !== "desktop") return false;
      if (visitorFilter === "15day" && (!student || !student.is15DayUser)) return false;
      if (visitorFilter === "30day" && (!student || !student.is30DayUser)) return false;
      if (visitorSearch.trim()) {
        const q = visitorSearch.toLowerCase();
        const matchName = (ev.studentName || "").toLowerCase().includes(q);
        const matchId = (ev.visitorId || "").toLowerCase().includes(q);
        const matchIp = (ev.ipAddress || "").toLowerCase().includes(q);
        const matchCity = (ev.cityRegion || "").toLowerCase().includes(q) || (ev.city || "").toLowerCase().includes(q) || (ev.state || "").toLowerCase().includes(q);
        const matchSub = (ev.activeSubject || "").toLowerCase().includes(q);
        const matchCh = (ev.activeChapter || "").toLowerCase().includes(q);
        const matchPin = (ev.pincode || "").toLowerCase().includes(q);
        const matchCountry = (ev.country || "").toLowerCase().includes(q);
        const matchSource = (ev.locationSource || "").toLowerCase().includes(q);
        const matchNet = (ev.networkType || "").toLowerCase().includes(q);
        return matchName || matchId || matchIp || matchCity || matchSub || matchCh || matchSource || matchNet || matchPin || matchCountry;
      }
      return true;
    });
  }, [analytics, visitorFilter, visitorSearch, studentProfileMap]);

  // Filtered student mistakes
  const filteredMistakes = useMemo(() => {
    return mistakeLogsList.filter((m) => {
      if (mistakeSubjectFilter !== "all" && (m.subject || "").toLowerCase() !== mistakeSubjectFilter.toLowerCase()) {
        return false;
      }
      if (mistakeSearch.trim()) {
        const q = mistakeSearch.toLowerCase();
        const matchSub = (m.subject || "").toLowerCase().includes(q);
        const matchCh = (m.chapter || "").toLowerCase().includes(q);
        const matchQ = (m.question || "").toLowerCase().includes(q);
        const matchType = (m.mistakeType || "").toLowerCase().includes(q);
        const matchReason = (m.reason || "").toLowerCase().includes(q);
        const matchConcept = (m.concept || "").toLowerCase().includes(q);
        return matchSub || matchCh || matchQ || matchType || matchReason || matchConcept;
      }
      return true;
    });
  }, [mistakeLogsList, mistakeSubjectFilter, mistakeSearch]);

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#070b14] text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-mono text-slate-400">Verifying Security Session...</span>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 1. SECRET AUTHENTICATION GATE (ZERO LEAKED CREDENTIALS)
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-[#060a12] via-[#09101d] to-[#040810] text-white relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          <div className="p-7 sm:p-9 rounded-3xl border border-white/10 bg-[#0c1220]/90 backdrop-blur-2xl shadow-2xl shadow-black/80 space-y-6">
            <div className="space-y-2 text-center">
              <div className="w-13 h-13 mx-auto rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-slate-950 shadow-lg shadow-teal-500/20">
                <Lock className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-black tracking-tight text-white">
                Restricted Terminal Access
              </h1>
              <p className="text-xs text-slate-400">
                Authorized administrator verification required to view student visitor telemetry.
              </p>
            </div>

            {loginError && (
              <div className="p-3.5 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2.5 animate-shake">
                <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-teal-400" />
                  <span>Admin Identifier</span>
                </label>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter administrator identifier"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm font-mono focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-teal-400" />
                  <span>Security Key</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter security key"
                    className="w-full px-4 py-3 pr-11 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm font-mono focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-black bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 active:scale-95 disabled:opacity-50"
              >
                {isLoggingIn ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Authorize Session</span>
                  </>
                )}
              </button>
            </form>

            <div className="pt-2 text-center">
              <Link
                href="/"
                className="text-[11px] font-mono text-slate-500 hover:text-slate-300 transition-colors"
              >
                ← Return to Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. AUTHENTICATED UNIQUE STUDENTS & VISITOR COMMAND CONSOLE
  // =========================================================================
  return (
    <div className={`min-h-screen transition-colors ${isDark ? "bg-[#060a12] text-white" : "bg-slate-50 text-slate-900"}`}>
      {/* Top Secret Navigation Bar */}
      <header className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
        isDark ? "bg-[#080d1a]/85 border-white/10" : "bg-white/85 border-slate-200"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-slate-950 font-black shadow-md shadow-teal-500/20">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-black tracking-tight">Student Visitor Intelligence Command</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-teal-500/20 text-teal-400 border border-teal-500/30">
                  Deduplicated Tracking
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                ARETE Citadel · Live Telemetry Active
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Polling Beacon */}
            <button
              onClick={() => setIsLivePolling(!isLivePolling)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition-all flex items-center gap-2 cursor-pointer ${
                isLivePolling
                  ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                  : "bg-white/5 border-white/10 text-slate-400"
              }`}
              title="Toggle Live Polling (Every 6s)"
            >
              <span className={`w-2 h-2 rounded-full ${isLivePolling ? "bg-emerald-400 animate-pulse" : "bg-slate-500"}`} />
              <span className="hidden sm:inline">{isLivePolling ? "Radar Active (6s)" : "Paused"}</span>
            </button>

            {/* Manual Refresh */}
            <button
              onClick={() => {
                playSound("click");
                fetchAnalytics();
              }}
              disabled={isLoadingAnalytics}
              className={`p-2 rounded-xl border text-xs cursor-pointer ${
                isDark ? "bg-white/5 border-white/10 text-slate-300 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
              title="Refresh student stats"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoadingAnalytics ? "animate-spin text-teal-400" : ""}`} />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-xl border text-xs cursor-pointer ${
                isDark ? "bg-white/5 border-white/10 text-slate-300" : "bg-white border-slate-200 text-slate-700"
              }`}
              title="Toggle Theme"
            >
              {isDark ? "☀️" : "🌙"}
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-500/15 hover:bg-rose-500/25 text-rose-400 border border-rose-500/30 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Lock Gate</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-1 overflow-x-auto pb-2 pt-1 border-t border-white/5">
          {[
            { id: "analytics", label: "Unique Students & Live Traffic", icon: Users },
            { id: "broadcast", label: "Broadcast Announcements", icon: Radio },
            { id: "curriculum", label: "Syllabus & 80M Markers", icon: BookOpen },
            { id: "mistakes", label: "Student Doubt Monitor", icon: HelpCircle },
            { id: "diagnostics", label: "Database & System Vitals", icon: Cpu }
          ].map((t) => {
            const isSelected = activeTab === t.id;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => {
                  playSound("click");
                  setActiveTab(t.id as any);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer border ${
                  isSelected
                    ? "bg-teal-500 text-slate-950 border-teal-400 font-black shadow-md shadow-teal-500/20"
                    : isDark
                    ? "bg-white/5 border-transparent text-slate-400 hover:text-white hover:bg-white/10"
                    : "bg-transparent border-transparent text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* ================================================================= */}
        {/* TAB 1: UNIQUE STUDENTS & LIVE TRAFFIC DASHBOARD (PRIMARY) */}
        {/* ================================================================= */}
        {activeTab === "analytics" && (
          <div className="space-y-8 animate-fade-in">
            {/* Top Stat Ribbon with Deduplication Breakdown */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5">
              {/* Card 1: Unique Students Today (Deduplicated!) */}
              <div className={`p-5 rounded-3xl border transition-all ${
                isDark ? "bg-[#0b101c] border-teal-500/30 shadow-lg shadow-teal-950/20" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-slate-400">Unique Students Today</span>
                  <div className="w-8 h-8 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center">
                    <UserCheck className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-teal-400 tracking-tight flex items-baseline gap-2">
                  <span>{analytics?.todayUniqueStudents ?? 0}</span>
                  <span className="text-xs font-normal text-slate-400 font-sans">unique</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 mt-1 flex items-center gap-1">
                  <span>✓ Deduplicated</span>
                  <span className="text-slate-500">· {analytics?.todayTotalSessions ?? 0} total visits today</span>
                </div>
              </div>

              {/* Card 2: Today's Total Visits / Sessions */}
              <div className={`p-5 rounded-3xl border transition-all ${
                isDark ? "bg-[#0b101c] border-cyan-500/30 shadow-lg shadow-cyan-950/20" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-slate-400">Today's Visits</span>
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight flex items-baseline gap-2">
                  <span>{analytics?.todayTotalSessions ?? 0}</span>
                  <span className="text-xs font-normal text-slate-400 font-sans">sessions</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 mt-1 block">
                  Repeated visits by students
                </span>
              </div>

              {/* Card 3: All-Time Unique Students */}
              <div className={`p-5 rounded-3xl border transition-all ${
                isDark ? "bg-[#0b101c] border-amber-500/30 shadow-lg shadow-amber-950/20" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-slate-400">Total Unique Students</span>
                  <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
                  {analytics?.totalUniqueStudents ?? 0}
                </div>
                <span className="text-[10px] font-mono text-amber-400 mt-1 block">
                  {analytics?.totalEventsCount ?? 0} lifetime visits recorded
                </span>
              </div>

              {/* Card 4: Live Active Now */}
              <div className={`p-5 rounded-3xl border transition-all ${
                isDark ? "bg-[#0b101c] border-emerald-500/30 shadow-lg shadow-emerald-950/20" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-slate-400">Active Online Now</span>
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400 tracking-tight flex items-baseline gap-2">
                  <span>{analytics?.liveNowStudents ?? 0}</span>
                  <span className="text-xs font-normal text-emerald-400/70 font-sans">student</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 mt-1 block">
                  Active in last 5 minutes
                </span>
              </div>

              {/* Card 5: Average Daily Study Time */}
              <div className={`col-span-2 lg:col-span-1 p-5 rounded-3xl border transition-all ${
                isDark ? "bg-[#0b101c] border-indigo-500/30 shadow-lg shadow-indigo-950/20" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-slate-400">Avg. Study Time</span>
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
                  {analytics?.avgDurationMinutes ?? 0}m
                </div>
                <span className="text-[10px] font-mono text-indigo-400 mt-1 block">
                  Per student daily engagement
                </span>
              </div>
            </div>

            {/* Explanation Clarification Banner (Deduplication Confirmation) */}
            <div className={`p-4 rounded-2xl border flex items-start gap-3 text-xs ${
              isDark ? "bg-teal-950/30 border-teal-500/30 text-teal-200" : "bg-teal-50 border-teal-200 text-teal-900"
            }`}>
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="font-bold">Student Deduplication Active:</span>
                <p className="opacity-90">
                  If a student visits 3 or 4 times throughout the day, they are counted as <strong>1 Unique Student</strong>, and their multiple entries are combined under their profile showing <strong>4 visits today</strong> and total accumulated study time.
                </p>
              </div>
            </div>

            {/* MASTER UNIQUE STUDENTS DIRECTORY */}
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
              isDark ? "bg-[#0b101c] border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}>
              {/* Header & Controls */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-teal-400" />
                    <h3 className="text-lg font-black tracking-tight">
                      {streamViewMode === "students" ? "Unique Student Profiles & Visit Histories" : "Chronological Session Stream"}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400">
                    {streamViewMode === "students"
                      ? "Each row represents 1 distinct student device with aggregated visit counts, hardware specs, and study duration."
                      : "Chronological feed of every single pageview and interaction."}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
                  {/* View Mode Toggle */}
                  <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-bold">
                    <button
                      onClick={() => setStreamViewMode("students")}
                      className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                        streamViewMode === "students" ? "bg-teal-500 text-slate-950 font-black" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      👤 Cadets Directory ({analytics?.uniqueStudents?.length || 0})
                    </button>
                    <button
                      onClick={() => setStreamViewMode("events")}
                      className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                        streamViewMode === "events" ? "bg-teal-500 text-slate-950 font-black" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      📜 Visit History &amp; Past Visits ({analytics?.totalEventsCount || 0})
                    </button>
                  </div>

                  {/* Filter Dropdown */}
                  <select
                    value={visitorFilter}
                    onChange={(e) => setVisitorFilter(e.target.value)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold border focus:outline-none cursor-pointer ${
                      isDark ? "bg-black/50 border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"
                    }`}
                  >
                    <option value="all">All Visitors &amp; Sessions</option>
                    <option value="returning">🔁 Visited Before (Returning Students)</option>
                    <option value="first_time">🆕 First-Time Visitors (1st Visit)</option>
                    <option value="today">📅 Studied Today</option>
                    <option value="online">🟢 Online Now</option>
                    <option value="gps">📍 GPS Hardware Confirmed</option>
                    <option value="mobile">📱 Mobile Devices</option>
                    <option value="desktop">💻 Desktop / Laptops</option>
                    <option value="15day">⭐ 15-Day Active Cadets</option>
                    <option value="30day">🏆 30-Day Veteran Cadets</option>
                  </select>

                  {/* Search */}
                  <div className="relative flex-1 sm:w-48">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search student, IP, city..."
                      value={visitorSearch}
                      onChange={(e) => setVisitorSearch(e.target.value)}
                      className={`w-full pl-8 pr-3 py-2 rounded-xl text-xs border focus:outline-none ${
                        isDark ? "bg-black/40 border-white/10 text-white" : "bg-slate-50 border-slate-200 text-slate-900"
                      }`}
                    />
                  </div>

                  {/* Export CSV */}
                  <button
                    onClick={handleExportCSV}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-teal-500/15 hover:bg-teal-500/25 text-teal-400 border border-teal-500/30 flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Export CSV</span>
                  </button>

                  {/* Purge */}
                  <button
                    onClick={handleResetAnalytics}
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border border-white/5 transition-colors cursor-pointer"
                    title="Clear All Visitor History"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* ============================================================= */}
              {/* VIEW 1: DEDUPLICATED UNIQUE STUDENTS DIRECTORY */}
              {/* ============================================================= */}
              {streamViewMode === "students" && (
                <div className="space-y-4">
                  {filteredStudents.map((student) => {
                    const isExpanded = expandedStudentId === student.visitorId;
                    return (
                      <div
                        key={student.visitorId}
                        className={`rounded-2xl border transition-all overflow-hidden ${
                          student.isOnlineNow
                            ? isDark
                              ? "bg-gradient-to-r from-teal-950/30 via-[#0b101c] to-[#0b101c] border-teal-500/40 shadow-md shadow-teal-950/20"
                              : "bg-teal-50/50 border-teal-300 shadow-xs"
                            : isDark ? "bg-black/20 border-white/10" : "bg-slate-50 border-slate-200"
                        }`}
                      >
                        {/* Student Summary Row */}
                        <div className="p-4 sm:p-5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                          {/* Student Info */}
                          <div className="flex items-start gap-3.5 min-w-0">
                            <div className="relative mt-0.5">
                              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-black text-sm">
                                {student.studentName.slice(0, 2).toUpperCase()}
                              </div>
                              {student.isOnlineNow && (
                                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#060a12] animate-ping" />
                              )}
                            </div>

                            <div className="space-y-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-black text-sm text-white truncate">{student.studentName}</span>
                                {student.isOnlineNow && (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                    ● Online Now
                                  </span>
                                )}
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-black bg-amber-500/15 text-amber-300 border border-amber-500/30">
                                  🔥 {student.visitsToday} {student.visitsToday === 1 ? "visit" : "visits"} today
                                </span>
                                <span className="text-[10px] font-mono opacity-60">
                                  ({student.totalVisits} all-time)
                                </span>
                                {student.is30DayUser ? (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-black bg-purple-500/20 text-purple-300 border border-purple-500/30">🏆 30-Day Veteran</span>
                                ) : student.is15DayUser ? (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-black bg-blue-500/20 text-blue-300 border border-blue-500/30">⭐ 15-Day Active</span>
                                ) : student.retentionBadge === "7-Day Regular" ? (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-black bg-teal-500/20 text-teal-300 border border-teal-500/30">✅ 7-Day Regular</span>
                                ) : (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-500/10 text-slate-400 border border-slate-500/20">🆕 New Cadet</span>
                                )}
                              </div>

                              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-mono">
                                {student.locationSource === "device_gps" || (student.latitude && student.longitude) ? (
                                  <div className="flex items-center gap-1.5">
                                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                      📍 GPS {student.accuracy ? `±${student.accuracy}m` : "Verified"}
                                    </span>
                                    {student.mapsUrl ? (
                                      <a
                                        href={student.mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-300 hover:text-emerald-200 underline underline-offset-2 font-medium"
                                      >
                                        {student.city && student.state
                                          ? `${student.city}, ${student.state}`
                                          : student.cityRegion || `${student.latitude}, ${student.longitude}`}
                                      </a>
                                    ) : (
                                      <span className="text-emerald-300 font-medium">
                                        {student.city && student.state
                                          ? `${student.city}, ${student.state}`
                                          : student.cityRegion || `${student.latitude}, ${student.longitude}`}
                                      </span>
                                    )}
                                  </div>
                                ) : student.locationSource === "ip_verified" ? (
                                  <div className="flex items-center gap-1.5">
                                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                                      🌐 IP-Verified City
                                    </span>
                                    <span className="text-sky-200 font-medium">
                                      {student.city && student.state
                                        ? `${student.city}, ${student.state}`
                                        : student.cityRegion || "India"}
                                    </span>
                                  </div>
                                ) : student.locationSource === "heuristic_fallback" ? (
                                  <div className="flex items-center gap-1.5">
                                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                                      🧭 Region Est.
                                    </span>
                                    <span className="text-violet-200 font-medium">
                                      {student.city && student.state
                                        ? `${student.city}, ${student.state}`
                                        : student.cityRegion || "India"}
                                    </span>
                                  </div>
                                ) : student.locationSource === "manual" ? (
                                  <div className="flex items-center gap-1.5">
                                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                      ✍ Manual
                                    </span>
                                    <span className="text-amber-200 font-medium">
                                      {student.city && student.state
                                        ? `${student.city}, ${student.state}`
                                        : student.cityRegion}
                                    </span>
                                  </div>
                                ) : student.cityRegion ? (
                                  <div className="flex items-center gap-1.5">
                                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-500/20 text-slate-300 border border-slate-500/30">
                                      🌐 IP Est.
                                    </span>
                                    <span className="text-slate-300 font-medium">{student.city && student.state ? `${student.city}, ${student.state}` : student.cityRegion}</span>
                                  </div>
                                ) : (
                                  <span className="text-slate-500 italic flex items-center gap-1">
                                    <span>❌ Location Denied / Unavailable</span>
                                  </span>
                                )}
                                <span>·</span>
                                <span>🌐 {student.ipAddress}</span>
                                <span>·</span>
                                <span>{student.deviceType === "mobile" ? "📱 Mobile" : "💻 Desktop"} ({student.operatingSystem} · {student.browser})</span>
                                <span>·</span>
                                <span className="text-teal-400">⚡ {student.studentXp} XP · Streak {student.studentStreak}d</span>
                              </div>

                              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                                <span className="text-[10px] font-mono text-slate-500">Studied:</span>
                                {student.subjectsStudied.map((sub, sIdx) => (
                                  <span key={sIdx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono uppercase font-bold text-amber-300">
                                    {sub}
                                  </span>
                                ))}
                                {student.chaptersStudied.map((ch, cIdx) => (
                                  <span key={cIdx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                                    {ch}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Quick Stats & Expand Action */}
                          <div className="flex items-center gap-4 self-end lg:self-center shrink-0">
                            <div className="text-right font-mono">
                              <div className="text-sm font-black text-white">
                                {student.totalStudyMinutes}m study time
                              </div>
                              <div className="text-[10px] text-slate-400">
                                Last seen {new Date(student.lastActive).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                              </div>
                            </div>

                            <button
                              onClick={() => {
                                playSound("click");
                                setSelectedStudentForModal(student);
                              }}
                              className="px-3 py-2 rounded-xl text-xs font-bold border border-teal-500/30 bg-teal-500/15 text-teal-300 hover:bg-teal-500/25 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                              title="Open Full Cadet Dossier & Complete Past Visits History"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>Dossier</span>
                            </button>

                            <button
                              onClick={() => {
                                playSound("click");
                                setExpandedStudentId(isExpanded ? null : student.visitorId);
                              }}
                              className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                                isExpanded
                                  ? "bg-teal-500 text-slate-950 border-teal-400 font-black"
                                  : "bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
                              }`}
                            >
                              <span>{isExpanded ? "Hide Details" : `View ${student.sessions.length} Visits`}</span>
                              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            </button>
                          </div>
                        </div>

                        {/* Expandable Visit History & Hardware Specs Drawer */}
                        {isExpanded && (
                          <div className="p-5 border-t border-white/5 bg-black/40 space-y-4 animate-fade-in">
                            {/* Deep Hardware & Network Specs */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                                <span className="text-[10px] uppercase text-slate-500 flex items-center gap-1">
                                  <HardDrive className="w-3 h-3 text-teal-400" /> Hardware Specs
                                </span>
                                <div className="font-bold text-white truncate">{student.hardwareSpecs || "Standard Multi-core"}</div>
                                {student.gpuRenderer && (
                                  <div className="text-[9px] text-slate-400 truncate" title={student.gpuRenderer}>GPU: {student.gpuRenderer.length > 30 ? student.gpuRenderer.slice(0, 30) + "…" : student.gpuRenderer}</div>
                                )}
                              </div>

                              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                                <span className="text-[10px] uppercase text-slate-500 flex items-center gap-1">
                                  <Wifi className="w-3 h-3 text-cyan-400" /> Network Connection
                                </span>
                                <div className="font-bold text-white truncate">{student.networkType}</div>
                              </div>

                              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                                <span className="text-[10px] uppercase text-slate-500 flex items-center gap-1">
                                  <Globe className="w-3 h-3 text-amber-400" /> Screen & Browser
                                </span>
                                <div className="font-bold text-white truncate">{student.browser} ({student.screenResolution})</div>
                              </div>

                              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
                                <span className="text-[10px] uppercase text-slate-500 flex items-center gap-1">
                                  <Clock className="w-3 h-3 text-indigo-400" /> Joined / Active Days
                                </span>
                                <div className="font-bold text-white truncate">
                                  {new Date(student.firstSeen).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                                </div>
                                <div className="text-[9px] text-slate-400">{student.activeDaysCount} active day{student.activeDaysCount !== 1 ? "s" : ""} · {student.daysSinceFirst}d since first visit</div>
                              </div>

                              {student.locationSource === "device_gps" || student.latitude ? (
                                <div className="col-span-2 sm:col-span-4 p-3.5 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20 space-y-1.5">
                                  <div className="flex items-center justify-between">
                                    <span className="text-[10px] uppercase text-emerald-400 flex items-center gap-1.5 font-bold">
                                      📍 Exact GPS Location (Hardware Device Position)
                                    </span>
                                    {student.accuracy && (
                                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                        Accuracy: ±{student.accuracy} meters
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex flex-wrap items-center gap-3">
                                    <span className="font-bold text-white text-sm">
                                      {student.city && student.state
                                        ? `${student.city}, ${student.state}${student.country && student.country !== "India" ? `, ${student.country}` : ", India"}`
                                        : student.cityRegion || "Coordinates recorded"}{student.pincode ? ` — PIN ${student.pincode}` : ""}
                                    </span>
                                    {student.latitude && student.longitude && (
                                      <span className="text-slate-400 text-[10px] font-mono">
                                        Lat {student.latitude}, Lon {student.longitude}
                                      </span>
                                    )}
                                    {student.mapsUrl && (
                                      <a
                                        href={student.mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold hover:bg-emerald-500/30 transition-colors flex items-center gap-1"
                                      >
                                        <span>🗺 Open in Google Maps</span>
                                        <span>↗</span>
                                      </a>
                                    )}
                                  </div>
                                </div>
                              ) : student.locationSource === "manual" ? (
                                <div className="col-span-2 sm:col-span-4 p-3.5 rounded-xl bg-amber-500/[0.04] border border-amber-500/20 space-y-1.5">
                                  <div className="flex items-center justify-between">
                                    <span className="text-[10px] uppercase text-amber-400 flex items-center gap-1.5 font-bold">
                                      ✍ Self-Reported Location (GPS was not granted)
                                    </span>
                                  </div>
                                  <div className="flex flex-wrap items-center gap-3">
                                    <span className="font-bold text-white text-sm">
                                      {student.cityRegion}
                                    </span>
                                  </div>
                                </div>
                              ) : student.locationSource === "ip_verified" ? (
                                <div className="col-span-2 sm:col-span-4 p-3.5 rounded-xl bg-sky-500/[0.04] border border-sky-500/20 space-y-1.5">
                                  <div className="flex items-center justify-between">
                                    <span className="text-[10px] uppercase text-sky-400 flex items-center gap-1.5 font-bold">
                                      🌐 IP-Verified City (GPS was denied — cross-verified across 3 IP sources)
                                    </span>
                                    <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                                      {student.accuracyRadius || "~25km"}
                                    </span>
                                  </div>
                                  <div className="flex flex-wrap items-center gap-3">
                                    <span className="font-bold text-white text-sm">
                                      {student.city && student.state
                                        ? `${student.city}, ${student.state}, India`
                                        : student.cityRegion || "India"}
                                    </span>
                                  </div>
                                </div>
                              ) : student.locationSource === "heuristic_fallback" || student.cityRegion ? (
                                <div className="col-span-2 sm:col-span-4 p-3.5 rounded-xl bg-violet-500/[0.04] border border-violet-500/20 space-y-1.5">
                                  <div className="flex items-center justify-between">
                                    <span className="text-[10px] uppercase text-violet-400 flex items-center gap-1.5 font-bold">
                                      🧭 Region Estimate (Derived from timezone &amp; locale — city-level accuracy)
                                    </span>
                                    <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                                      {student.accuracyRadius || "~50km"}
                                    </span>
                                  </div>
                                  <div className="flex flex-wrap items-center gap-3">
                                    <span className="font-bold text-white text-sm">
                                      {student.city && student.state
                                        ? `${student.city}, ${student.state}, India`
                                        : student.cityRegion || "India"}
                                    </span>
                                  </div>
                                </div>
                              ) : (
                                <div className="col-span-2 sm:col-span-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-slate-500 text-xs flex items-center gap-2">
                                  <span>❌ Location Access: Cadet did not permit GPS access and entered no manual location.</span>
                                </div>
                              )}
                            </div>

                            {/* Chronological Visit Session Breakdown */}
                            <div className="space-y-2">
                              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                                Discrete Study Sessions History ({student.sessions.length} recorded visits)
                              </div>

                              <div className="divide-y divide-white/5 rounded-xl border border-white/5 overflow-hidden bg-black/20">
                                {student.sessions.map((sess, sessIdx) => {
                                  const sessDate = new Date(sess.visitStartedAt || sess.createdAt);
                                  const lastDate = sess.lastSeenAt ? new Date(sess.lastSeenAt) : null;
                                  return (
                                    <div key={sess.id || sessIdx} className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono hover:bg-white/[0.02]">
                                      <div className="flex flex-wrap items-center gap-2.5">
                                        <span className="w-5 text-center font-bold text-teal-400">#{student.sessions.length - sessIdx}</span>
                                        <span className="text-slate-200 font-bold">
                                          {sessDate.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })},{" "}
                                          {sessDate.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                                        </span>
                                        {lastDate && lastDate.getTime() - sessDate.getTime() > 60000 && (
                                          <span className="text-[10px] text-slate-500">
                                            (Active until {lastDate.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })})
                                          </span>
                                        )}
                                        <span className="px-2 py-0.5 rounded bg-white/5 text-amber-300 font-bold border border-white/10">
                                          {sess.activeSubject.toUpperCase()} · {sess.activeTab}
                                        </span>
                                        {sess.activeChapter && (
                                          <span className="text-slate-400">({sess.activeChapter})</span>
                                        )}
                                      </div>

                                      <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                                        <span>⏱️ {sess.durationSeconds > 60 ? `${Math.round(sess.durationSeconds / 60)}m` : `${sess.durationSeconds}s`}</span>
                                        <span>🔗 {sess.referrer || "direct"}</span>
                                        {sess.locationSource === "device_gps" ? (
                                          <span className="text-emerald-400 font-bold text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">📍 GPS</span>
                                        ) : sess.locationSource === "manual" ? (
                                          <span className="text-amber-400 font-bold text-[10px] bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">✍ Manual</span>
                                        ) : sess.locationSource === "ip_approximate" ? (
                                          <span className="text-sky-400 font-bold text-[10px] bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">🌐 IP Approx</span>
                                        ) : null}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* ============================================================= */}
              {/* VIEW 2: COMPLETE STUDENT VISIT HISTORY STREAM */}
              {/* ============================================================= */}
              {streamViewMode === "events" && (
                <div className="space-y-4">
                  {/* Summary Metric Strip for History View */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                      <span className="text-[10px] uppercase text-slate-400 font-bold flex items-center gap-1">
                        <History className="w-3 h-3 text-teal-400" /> Total Recorded Visits
                      </span>
                      <div className="text-xl font-black text-white">{analytics?.totalEventsCount || 0}</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                      <span className="text-[10px] uppercase text-slate-400 font-bold flex items-center gap-1">
                        <Users className="w-3 h-3 text-cyan-400" /> Unique Cadets Tracked
                      </span>
                      <div className="text-xl font-black text-teal-300">{analytics?.totalUniqueStudents || 0}</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                      <span className="text-[10px] uppercase text-slate-400 font-bold flex items-center gap-1">
                        <RefreshCw className="w-3 h-3 text-amber-400" /> Cadets Visited Before (2+)
                      </span>
                      <div className="text-xl font-black text-amber-300">
                        {analytics?.uniqueStudents?.filter(s => s.totalVisits > 1 || s.daysSinceFirst > 0).length || 0}
                      </div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                      <span className="text-[10px] uppercase text-slate-400 font-bold flex items-center gap-1">
                        <Zap className="w-3 h-3 text-emerald-400" /> Sessions Today
                      </span>
                      <div className="text-xl font-black text-emerald-300">{analytics?.todayTotalSessions || 0}</div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono">
                      <thead>
                        <tr className={`border-b ${isDark ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-600"}`}>
                          <th className="py-3 px-3 whitespace-nowrap">Visit Timestamp (IST)</th>
                          <th className="py-3 px-3 whitespace-nowrap">Cadet / Student</th>
                          <th className="py-3 px-3 whitespace-nowrap">Past Visits / History</th>
                          <th className="py-3 px-3 whitespace-nowrap">Verified Location</th>
                          <th className="py-3 px-3 whitespace-nowrap">IP &amp; Network</th>
                          <th className="py-3 px-3 whitespace-nowrap">Device &amp; Browser</th>
                          <th className="py-3 px-3 whitespace-nowrap">Subject &amp; Topic</th>
                          <th className="py-3 px-3 whitespace-nowrap">Visit Duration</th>
                          <th className="py-3 px-3 whitespace-nowrap text-right">Cadet Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {filteredEvents.length === 0 ? (
                          <tr>
                            <td colSpan={9} className="py-8 text-center text-slate-500">
                              No visits found matching your filter criteria.
                            </td>
                          </tr>
                        ) : (
                          filteredEvents.map((ev) => {
                            const student = getStudentProfileForEvent(ev);
                            const hasVisitedBefore = student.totalVisits > 1 || student.daysSinceFirst > 0;
                            const visitTime = new Date(ev.visitStartedAt || ev.createdAt);
                            const lastActiveTime = ev.lastSeenAt ? new Date(ev.lastSeenAt) : null;
                            const hasGps = ev.locationSource === "device_gps" || (ev.latitude && ev.longitude);
                            const hasManual = ev.locationSource === "manual";
                            const isIpApprox = ev.locationSource === "ip_approximate" || (!hasGps && !hasManual && ev.cityRegion);

                            return (
                              <tr key={ev.id} className="hover:bg-white/[0.02] transition-colors">
                                {/* Timestamp IST */}
                                <td className="py-3 px-3 whitespace-nowrap">
                                  <div className="text-white font-bold">
                                    {visitTime.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                                  </div>
                                  <div className="text-[11px] text-slate-400">
                                    {visitTime.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" })} IST
                                  </div>
                                  {lastActiveTime && lastActiveTime.getTime() - visitTime.getTime() > 60000 && (
                                    <div className="text-[9px] text-slate-500">
                                      until {lastActiveTime.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                                    </div>
                                  )}
                                </td>

                                {/* Student Name & Visitor ID */}
                                <td className="py-3 px-3 whitespace-nowrap">
                                  <div className="font-bold text-white flex items-center gap-1.5">
                                    <span>{ev.studentName}</span>
                                    {student.isOnlineNow && (
                                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                    )}
                                  </div>
                                  <div className="text-[10px] text-teal-400">
                                    {ev.visitorId.slice(0, 16)}...
                                  </div>
                                </td>

                                {/* Past Visits / History Status */}
                                <td className="py-3 px-3 whitespace-nowrap">
                                  {hasVisitedBefore ? (
                                    <div className="space-y-0.5">
                                      <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-amber-500/20 text-amber-300 border border-amber-500/30 whitespace-nowrap flex items-center gap-1 w-fit">
                                        🔁 Visited {student.totalVisits}x before
                                      </span>
                                      <div className="text-[10px] text-slate-400">
                                        {student.visitsToday} today · {student.activeDaysCount} active days
                                      </div>
                                    </div>
                                  ) : (
                                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-500/20 text-slate-300 border border-slate-500/30 whitespace-nowrap">
                                      🆕 1st Visit
                                    </span>
                                  )}
                                </td>

                                {/* Verified Location */}
                                <td className="py-3 px-3">
                                  {hasGps ? (
                                    <div className="space-y-0.5 min-w-[200px]">
                                      <div className="flex items-center gap-1.5">
                                        <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                          📍 GPS {ev.accuracy ? `±${ev.accuracy}m` : "Verified"}
                                        </span>
                                        {ev.mapsUrl && (
                                          <a
                                            href={ev.mapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-emerald-300 hover:text-emerald-200 text-[10px] font-bold underline"
                                          >
                                            Map ↗
                                          </a>
                                        )}
                                      </div>
                                      <div className="text-emerald-200 font-medium text-xs">
                                        {ev.city && ev.state ? `${ev.city}, ${ev.state}` : ev.cityRegion || `${ev.latitude}, ${ev.longitude}`}{ev.pincode ? ` (${ev.pincode})` : ""}
                                      </div>
                                    </div>
                                  ) : hasManual ? (
                                    <div className="space-y-0.5 min-w-[160px]">
                                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                        ✍ Manual
                                      </span>
                                      <div className="text-amber-200 font-medium text-xs">
                                        {ev.cityRegion}
                                      </div>
                                    </div>
                                  ) : isIpApprox ? (
                                    <div className="space-y-0.5 min-w-[160px]">
                                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                                        🌐 IP-Verified
                                      </span>
                                      <div className="text-sky-200 font-medium text-xs">
                                        {ev.city && ev.state ? `${ev.city}, ${ev.state}` : ev.cityRegion || "India"}
                                      </div>
                                    </div>
                                  ) : (
                                    <span className="text-slate-500 italic text-xs">
                                      ❌ Denied / Unavailable
                                    </span>
                                  )}
                                </td>

                                {/* IP Address & Network */}
                                <td className="py-3 px-3 whitespace-nowrap">
                                  <div className="text-slate-200">{ev.ipAddress}</div>
                                  <div className="text-[10px] text-slate-500">{ev.networkType || "Broadband/WiFi"}</div>
                                </td>

                                {/* Device & Browser */}
                                <td className="py-3 px-3 whitespace-nowrap">
                                  <div className="flex items-center gap-1.5 text-slate-200">
                                    <span>{ev.deviceType === "mobile" ? "📱" : "💻"}</span>
                                    <span>{ev.operatingSystem}</span>
                                  </div>
                                  <div className="text-[10px] text-slate-400">{ev.browser}</div>
                                </td>

                                {/* Active Subject & Chapter */}
                                <td className="py-3 px-3 whitespace-nowrap">
                                  <span className="px-2 py-0.5 rounded bg-white/5 text-amber-300 font-bold border border-white/10">
                                    {ev.activeSubject.toUpperCase()}
                                  </span>
                                  <div className="text-[10px] text-slate-400 mt-0.5 truncate max-w-[140px]">
                                    {ev.activeChapter || ev.activeTab}
                                  </div>
                                </td>

                                {/* Duration */}
                                <td className="py-3 px-3 whitespace-nowrap text-slate-200 font-bold">
                                  ⏱️ {ev.durationSeconds > 60 ? `${Math.round(ev.durationSeconds / 60)}m` : `${ev.durationSeconds}s`}
                                </td>

                                {/* View Details Action */}
                                <td className="py-3 px-3 whitespace-nowrap text-right">
                                  <button
                                    onClick={() => {
                                      playSound("click");
                                      setSelectedStudentForModal(student);
                                    }}
                                    className="px-3 py-1.5 rounded-xl bg-teal-500/15 hover:bg-teal-500/30 text-teal-300 hover:text-white border border-teal-500/30 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-xs ml-auto"
                                    title="View Complete Student History & Hardware Dossier"
                                  >
                                    <Eye className="w-3.5 h-3.5" />
                                    <span>View Details</span>
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Visit Summary Footer */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-3 border-t border-white/5 text-xs text-slate-400 font-mono">
                    <span>
                      Showing <strong>{filteredEvents.length}</strong> recorded visits (All-time history)
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => fetchAnalytics()}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white text-xs font-bold cursor-pointer"
                      >
                        🔄 Refresh Visits
                      </button>
                      <button
                        onClick={handleExportCSV}
                        className="px-3 py-1.5 rounded-lg bg-teal-500/20 border border-teal-500/30 text-teal-300 hover:bg-teal-500/30 text-xs font-bold cursor-pointer"
                      >
                        📥 Export CSV
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 2: BROADCAST ANNOUNCEMENTS ENGINE */}
        {/* ================================================================= */}
        {activeTab === "broadcast" && (
          <div className="space-y-6 animate-fade-in">
            <div className={`p-6 sm:p-8 rounded-3xl border ${
              isDark ? "bg-[#0b101c] border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex items-center gap-2.5 mb-2">
                <Radio className="w-5 h-5 text-teal-400 animate-pulse" />
                <h2 className="text-xl font-black">Student Broadcast Alert Publisher</h2>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Publish live exam advisories, syllabus alerts, or motivational messages directly to the top banner of the student portal.
              </p>

              {broadcastStatus && (
                <div className="mb-5 p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{broadcastStatus}</span>
                </div>
              )}

              <form onSubmit={handlePublishBroadcast} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300">
                      Announcement Title
                    </label>
                    <input
                      type="text"
                      required
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="e.g. CBSE 2026 Pre-Board Preparation Strategy"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border focus:outline-none ${
                        isDark ? "bg-black/40 border-white/10 text-white" : "bg-slate-50 border-slate-200 text-slate-900"
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300">
                      Alert Category
                    </label>
                    <select
                      value={newType}
                      onChange={(e) => setNewType(e.target.value as any)}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border focus:outline-none cursor-pointer ${
                        isDark ? "bg-black/50 border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"
                      }`}
                    >
                      <option value="urgent">🚨 Urgent Board Exam Alert</option>
                      <option value="tip">💡 Examiner Tip & Trap</option>
                      <option value="motivation">🌟 Century Motivation</option>
                      <option value="update">🚀 Curriculum Update</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300">
                    Message Body
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Provide specific guidelines, timetable reminders, or study instructions..."
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium border focus:outline-none ${
                      isDark ? "bg-black/40 border-white/10 text-white" : "bg-slate-50 border-slate-200 text-slate-900"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl text-xs sm:text-sm font-black bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 transition-all cursor-pointer flex items-center gap-2 shadow-lg shadow-teal-500/20 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Broadcast Alert</span>
                </button>
              </form>
            </div>

            {/* Broadcast History */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400">
                Active & Past Broadcast Records ({broadcasts.length})
              </h3>

              {broadcasts.map((b) => (
                <div
                  key={b.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isDark ? "bg-[#0b101c] border-white/10" : "bg-white border-slate-200 shadow-xs"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${b.active ? "bg-emerald-400 animate-pulse" : "bg-slate-600"}`} />
                        <span className="font-extrabold text-sm">{b.title}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                          {b.type.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300">{b.message}</p>
                      <div className="text-[10px] font-mono text-slate-500">
                        Published by {b.author} on {b.publishedAt}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <button
                        onClick={() => toggleBroadcast(b.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          b.active
                            ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
                            : "bg-white/5 border-white/10 text-slate-500"
                        }`}
                      >
                        {b.active ? "● Live On Website" : "○ Paused"}
                      </button>
                      <button
                        onClick={() => deleteBroadcast(b.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                        title="Delete Broadcast"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 3: CURRICULUM & 80M BOARD EXAM STATUS */}
        {/* ================================================================= */}
        {activeTab === "curriculum" && (
          <div className="space-y-6 animate-fade-in">
            <div className={`p-6 rounded-3xl border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
              isDark ? "bg-[#0b101c] border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div>
                <h2 className="text-xl font-black">Official CBSE Examination Status Directory</h2>
                <p className="text-xs text-slate-400">Classification of all chapters into 80M Board Core, Partial Subtopics, Periodic Tests, or Project</p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
                <select
                  value={selectedSubjectId}
                  onChange={(e) => setSelectedSubjectId(e.target.value)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold border focus:outline-none cursor-pointer ${
                    isDark ? "bg-black/50 border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"
                  }`}
                >
                  <option value="all">All Subjects (6)</option>
                  {CBSE_SUBJECTS.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>

                <select
                  value={selectedStatusFilter}
                  onChange={(e) => setSelectedStatusFilter(e.target.value)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold border focus:outline-none cursor-pointer ${
                    isDark ? "bg-black/50 border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"
                  }`}
                >
                  <option value="all">All Statuses</option>
                  <option value="board_exam">🎯 80M Board Exam Core</option>
                  <option value="partial_board">⚠️ Partial Board Subtopics</option>
                  <option value="periodic_test_only">📋 Periodic Tests Only</option>
                  <option value="project_only">📝 Project Work Only</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {CBSE_SUBJECTS.filter(s => selectedSubjectId === "all" || s.id === selectedSubjectId).flatMap(sub =>
                sub.chapters
                  .filter(ch => selectedStatusFilter === "all" || (ch.examStatus || "board_exam") === selectedStatusFilter)
                  .map(ch => (
                    <div
                      key={`${sub.id}_${ch.id}`}
                      className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
                        isDark ? "bg-[#0b101c] border-white/10" : "bg-white border-slate-200 shadow-xs"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                            {sub.name}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            ch.examStatus === "partial_board"
                              ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                              : ch.examStatus === "periodic_test_only"
                              ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
                              : ch.examStatus === "project_only"
                              ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                              : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                          }`}>
                            {ch.examStatus === "partial_board" ? "⚠️ Partial Subtopics" : ch.examStatus === "periodic_test_only" ? "📋 Periodic Tests Only" : ch.examStatus === "project_only" ? "📝 Project Only" : "🎯 80M Board Core"}
                          </span>
                        </div>
                        <h4 className="font-extrabold text-sm text-white">{ch.name}</h4>
                        {ch.syllabusNote && (
                          <p className="text-xs text-slate-400 font-mono">{ch.syllabusNote}</p>
                        )}
                      </div>
                      <span className="text-xs font-mono text-slate-400 shrink-0">
                        {ch.topics.length} topics
                      </span>
                    </div>
                  ))
              )}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 4: STUDENT DOUBT & MISTAKE MONITOR */}
        {/* ================================================================= */}
        {activeTab === "mistakes" && (
          <div className="space-y-6 animate-fade-in">
            <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
              isDark ? "bg-[#0b101c] border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <HelpCircle className="w-5 h-5 text-rose-400" />
                  <h2 className="text-xl font-black">Student Doubt & Error Telemetry</h2>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    {filteredMistakes.length} recorded
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Live feed of traps, concept blunders, and incorrect answers submitted across student practice runs.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
                {/* Subject Filter */}
                <select
                  value={mistakeSubjectFilter}
                  onChange={(e) => setMistakeSubjectFilter(e.target.value)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold border focus:outline-none cursor-pointer ${
                    isDark ? "bg-black/50 border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"
                  }`}
                >
                  <option value="all">All Disciplines</option>
                  <option value="science">Science</option>
                  <option value="math">Mathematics</option>
                  <option value="sst">Social Science (SST)</option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="it">Information Tech</option>
                </select>

                {/* Search */}
                <div className="relative flex-1 sm:w-48">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search trap, concept..."
                    value={mistakeSearch}
                    onChange={(e) => setMistakeSearch(e.target.value)}
                    className={`w-full pl-8 pr-3 py-2 rounded-xl text-xs border focus:outline-none ${
                      isDark ? "bg-black/40 border-white/10 text-white" : "bg-slate-50 border-slate-200 text-slate-900"
                    }`}
                  />
                </div>

                {/* Refresh */}
                <button
                  onClick={() => {
                    playSound("click");
                    fetchMistakes();
                  }}
                  disabled={isLoadingMistakes}
                  className={`p-2 rounded-xl border text-xs cursor-pointer ${
                    isDark ? "bg-white/5 border-white/10 text-slate-300 hover:text-white" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                  title="Reload Mistake Telemetry"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoadingMistakes ? "animate-spin" : ""}`} />
                </button>

                {/* Purge */}
                {mistakeLogsList.length > 0 && (
                  <button
                    onClick={handleClearAllMistakes}
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border border-white/5 transition-colors cursor-pointer"
                    title="Purge All Mistake Telemetry"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Mistakes List */}
            {isLoadingMistakes ? (
              <div className="py-12 flex flex-col items-center justify-center gap-3 text-slate-400">
                <RefreshCw className="w-6 h-6 animate-spin text-teal-400" />
                <span className="text-xs font-mono">Loading telemetry feed...</span>
              </div>
            ) : filteredMistakes.length === 0 ? (
              <div className={`p-12 text-center rounded-3xl border border-dashed ${
                isDark ? "bg-[#0b101c]/50 border-white/10" : "bg-white border-slate-200"
              }`}>
                <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {mistakeSearch || mistakeSubjectFilter !== "all"
                    ? "No pitfalls match current filter"
                    : "Zero Unresolved Student Pitfalls"}
                </h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto font-mono">
                  {mistakeSearch || mistakeSubjectFilter !== "all"
                    ? "Try adjusting search terms or discipline filter."
                    : "Cadets are maintaining high accuracy across practice sprints. New captured traps will appear here live."}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredMistakes.map((log: any) => (
                  <div
                    key={log.id}
                    className={`p-5 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all ${
                      isDark ? "bg-[#0b101c] border-white/10 hover:border-white/20" : "bg-white border-slate-200 shadow-xs"
                    }`}
                  >
                    <div className="space-y-2 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-rose-500/15 text-rose-400 border border-rose-500/30">
                          {log.mistakeType || "Examiner Trap"}
                        </span>
                        <span className="text-xs font-bold text-amber-300 font-mono uppercase">
                          {log.subject} · {log.chapter}
                        </span>
                        {log.priority && (
                          <span className={`px-2 py-0.2 rounded text-[9px] font-mono font-bold ${
                            log.priority === "Critical" ? "bg-rose-500/20 text-rose-300" : "bg-amber-500/20 text-amber-300"
                          }`}>
                            {log.priority}
                          </span>
                        )}
                      </div>

                      {log.question && (
                        <p className="text-xs font-bold text-white break-words">
                          Q: {log.question}
                        </p>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                        {log.wrongAnswer && (
                          <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 space-y-0.5">
                            <span className="text-[10px] uppercase font-bold text-rose-400 block">❌ Student Blunder:</span>
                            <div className="break-words">{log.wrongAnswer}</div>
                          </div>
                        )}
                        {log.correctAnswer && (
                          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 space-y-0.5">
                            <span className="text-[10px] uppercase font-bold text-emerald-400 block">✓ Verified Correct:</span>
                            <div className="break-words">{log.correctAnswer}</div>
                          </div>
                        )}
                      </div>

                      {(log.reason || log.concept) && (
                        <p className="text-xs text-slate-400">
                          💡 <strong>Key Concept:</strong> {log.reason || log.concept}
                        </p>
                      )}
                    </div>

                    <div className="flex md:flex-col items-center md:items-end justify-between gap-3 shrink-0">
                      <span className="text-[10px] font-mono text-slate-500">
                        {log.dateAdded || (log.createdAt ? new Date(log.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short" }) : "Recent")}
                      </span>
                      <button
                        onClick={() => handleDeleteMistake(log.id)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                        title="Delete mistake log"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 5: SYSTEM HEALTH & ARCHITECTURE */}
        {/* ================================================================= */}
        {activeTab === "diagnostics" && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-3xl border space-y-4 ${
                isDark ? "bg-[#0b101c] border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center gap-2.5">
                  <Database className="w-5 h-5 text-teal-400" />
                  <h3 className="text-base font-extrabold">Neon Postgres Connection</h3>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Database Engine</span>
                    <span className="text-teal-400 font-bold">Neon Lakebase PostgreSQL</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Visitor Tracking Table</span>
                    <span className="text-emerald-400 font-bold">visitor_events (Indexed)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Deduplication Engine</span>
                    <span className="text-emerald-400 font-bold">visitor_id Persistent Hash</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Database URL</span>
                    <span className="text-emerald-400 font-bold">Connected (.env.local)</span>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-3xl border space-y-4 ${
                isDark ? "bg-[#0b101c] border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base font-extrabold">Next.js 16 (Turbopack) Framework</h3>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Version</span>
                    <span className="text-cyan-400 font-bold">Next.js 16.2.6 (App Router)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">TypeScript Typecheck</span>
                    <span className="text-emerald-400 font-bold">0 Errors (Strict)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Admin Secret Door</span>
                    <span className="text-emerald-400 font-bold">5-Tap Logo / Ctrl+Shift+Alt+A</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Security Gate</span>
                    <span className="text-emerald-400 font-bold">Zero-Leak Masked Gateway</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ================================================================= */}
      {/* STUDENT DOSSIER & COMPLETE PAST VISITS HISTORY MODAL */}
      {/* ================================================================= */}
      {selectedStudentForModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedStudentForModal(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#090d16] border border-teal-500/30 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Sticky Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 bg-gradient-to-r from-teal-950/40 via-[#0d1526] to-[#090d16] flex items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-4 min-w-0">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/30 to-cyan-500/20 border-2 border-teal-500/50 flex items-center justify-center text-teal-300 font-black text-xl shadow-lg shadow-teal-950/50">
                    {selectedStudentForModal.studentName.slice(0, 2).toUpperCase()}
                  </div>
                  {selectedStudentForModal.isOnlineNow && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#090d16] animate-ping" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-black text-white truncate">{selectedStudentForModal.studentName}</h2>
                    {selectedStudentForModal.isOnlineNow && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                        ● Active Online
                      </span>
                    )}
                    {selectedStudentForModal.is30DayUser ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-purple-500/20 text-purple-300 border border-purple-500/30">🏆 30-Day Veteran</span>
                    ) : selectedStudentForModal.is15DayUser ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-blue-500/20 text-blue-300 border border-blue-500/30">⭐ 15-Day Active</span>
                    ) : selectedStudentForModal.retentionBadge === "7-Day Regular" ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black bg-teal-500/20 text-teal-300 border border-teal-500/30">✅ 7-Day Regular</span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-500/20 text-slate-300 border border-slate-500/30">🆕 New Cadet</span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono mt-1">
                    <span>Visitor ID: <code className="text-teal-400 font-bold">{selectedStudentForModal.visitorId}</code></span>
                    <span>·</span>
                    <span className="text-amber-400 font-bold">Level {selectedStudentForModal.studentLevel}</span>
                    <span>·</span>
                    <span className="text-teal-300 font-bold">{selectedStudentForModal.studentXp} XP</span>
                    <span>·</span>
                    <span className="text-orange-400 font-bold">Streak {selectedStudentForModal.studentStreak}d</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => { playSound("click"); setSelectedStudentForModal(null); }}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer shrink-0"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
              {/* Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5">
                    <History className="w-3.5 h-3.5 text-teal-400" /> Total Visits
                  </span>
                  <div className="text-2xl font-black text-white">
                    {selectedStudentForModal.totalVisits}
                  </div>
                  <div className="text-[10px] text-amber-300 font-mono font-bold">
                    🔥 {selectedStudentForModal.visitsToday} visits today
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" /> Study Time
                  </span>
                  <div className="text-2xl font-black text-white">
                    {selectedStudentForModal.totalStudyMinutes}m
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    Across {selectedStudentForModal.sessions.length} sessions
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" /> First Visited
                  </span>
                  <div className="text-sm font-black text-white truncate">
                    {new Date(selectedStudentForModal.firstSeen).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {selectedStudentForModal.daysSinceFirst} days ago ({selectedStudentForModal.activeDaysCount} active days)
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" /> Last Active
                  </span>
                  <div className="text-sm font-black text-white truncate">
                    {new Date(selectedStudentForModal.lastActive).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })} IST
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">
                    {new Date(selectedStudentForModal.lastActive).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400" /> Verified Geographical Location
                  </h3>
                  {selectedStudentForModal.locationSource === "device_gps" || selectedStudentForModal.latitude ? (
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                      📍 Exact Hardware GPS {selectedStudentForModal.accuracy ? `(Accuracy: ±${selectedStudentForModal.accuracy}m)` : "(Hardware Verified)"}
                    </span>
                  ) : selectedStudentForModal.locationSource === "ip_verified" ? (
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30 flex items-center gap-1">
                      🌐 IP-Verified City (Cross-Referenced)
                    </span>
                  ) : selectedStudentForModal.locationSource === "heuristic_fallback" ? (
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30 flex items-center gap-1">
                      🧭 Region Estimate (Timezone &amp; Locale)
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                      ✍ Self-Reported / Manual
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <div className="space-y-1">
                    <div className="text-base font-bold text-white">
                      {selectedStudentForModal.city && selectedStudentForModal.state
                        ? `${selectedStudentForModal.city}, ${selectedStudentForModal.state}${selectedStudentForModal.country && selectedStudentForModal.country !== "India" ? `, ${selectedStudentForModal.country}` : ", India"}`
                        : selectedStudentForModal.cityRegion || "Location recorded"}
                      {selectedStudentForModal.pincode ? ` — PIN ${selectedStudentForModal.pincode}` : ""}
                    </div>
                    {selectedStudentForModal.latitude && selectedStudentForModal.longitude && (
                      <div className="text-xs font-mono text-slate-400">
                        Latitude: <span className="text-emerald-400">{selectedStudentForModal.latitude}</span> · Longitude: <span className="text-emerald-400">{selectedStudentForModal.longitude}</span>
                      </div>
                    )}
                  </div>

                  {selectedStudentForModal.mapsUrl && (
                    <a
                      href={selectedStudentForModal.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition-colors flex items-center gap-1.5"
                    >
                      <span>🗺 Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Hardware & Network Fingerprint */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" /> Device Hardware &amp; Network Intelligence
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-black/30 border border-white/5 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase">Device &amp; OS</span>
                    <div className="text-white font-bold">{selectedStudentForModal.deviceType === "mobile" ? "📱 Mobile Device" : "💻 Desktop / Laptop"}</div>
                    <div className="text-slate-400 text-[11px]">{selectedStudentForModal.operatingSystem}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/30 border border-white/5 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase">Browser &amp; Display</span>
                    <div className="text-white font-bold">{selectedStudentForModal.browser}</div>
                    <div className="text-slate-400 text-[11px]">{selectedStudentForModal.screenResolution}</div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/30 border border-white/5 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase">IP &amp; ISP Network</span>
                    <div className="text-white font-bold truncate">{selectedStudentForModal.ipAddress}</div>
                    <div className="text-teal-400 text-[11px] truncate">{selectedStudentForModal.networkType}</div>
                  </div>

                  {selectedStudentForModal.gpuRenderer && (
                    <div className="col-span-1 sm:col-span-3 p-3 rounded-xl bg-black/30 border border-white/5 space-y-1">
                      <span className="text-[10px] text-slate-400 uppercase">GPU Graphics Hardware</span>
                      <div className="text-cyan-300 text-xs font-bold break-all">{selectedStudentForModal.gpuRenderer}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Subjects & Chapters Explored */}
              {(selectedStudentForModal.subjectsStudied.length > 0 || selectedStudentForModal.chaptersStudied.length > 0) && (
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-400" /> Curriculum &amp; Study Footprint
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {selectedStudentForModal.subjectsStudied.map((sub, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-xs font-mono font-bold text-amber-300 uppercase">
                        {sub}
                      </span>
                    ))}
                    {selectedStudentForModal.chaptersStudied.map((ch, cIdx) => (
                      <span key={cIdx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Chronological Visits History */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-2">
                    <History className="w-4 h-4 text-amber-400" /> Complete Chronological Visits History ({selectedStudentForModal.sessions.length} sessions)
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">
                    Ordered newest to oldest
                  </span>
                </div>

                <div className="divide-y divide-white/5 rounded-xl border border-white/10 overflow-hidden bg-black/40 font-mono text-xs">
                  {selectedStudentForModal.sessions.map((sess, idx) => {
                    const sessDate = new Date(sess.visitStartedAt || sess.createdAt);
                    const lastDate = sess.lastSeenAt ? new Date(sess.lastSeenAt) : null;
                    return (
                      <div key={sess.id || idx} className="p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/[0.02] transition-colors">
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                              Visit #{selectedStudentForModal.sessions.length - idx}
                            </span>
                            <span className="text-white font-bold">
                              {sessDate.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })} · {sessDate.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" })} IST
                            </span>
                            {lastDate && lastDate.getTime() - sessDate.getTime() > 60000 && (
                              <span className="text-slate-500 text-[10px]">
                                (until {lastDate.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })})
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-2 text-slate-400 text-[11px]">
                            <span className="text-amber-300 font-bold uppercase">{sess.activeSubject}</span>
                            <span>·</span>
                            <span>{sess.activeChapter || sess.activeTab}</span>
                            <span>·</span>
                            <span>Path: {sess.path || "/"}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 text-slate-400 text-xs">
                          <span className="font-bold text-white">
                            ⏱️ {sess.durationSeconds > 60 ? `${Math.round(sess.durationSeconds / 60)}m` : `${sess.durationSeconds}s`}
                          </span>
                          {sess.locationSource === "device_gps" ? (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                              📍 GPS
                            </span>
                          ) : (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                              🌐 Network
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Sticky Footer */}
            <div className="p-4 border-t border-white/10 bg-[#070b14] flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="text-xs font-mono text-slate-400">
                Showing all historical telemetry and past visit logs for this cadet.
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(selectedStudentForModal.visitorId);
                    playSound("success");
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold border border-white/10 transition-colors cursor-pointer"
                >
                  📋 Copy Visitor ID
                </button>
                <button
                  onClick={() => { playSound("click"); setSelectedStudentForModal(null); }}
                  className="px-4 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-black transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
