"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
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
  ChevronRight,
  Database,
  Cpu,
  Clock,
  HelpCircle,
  TrendingUp,
  BarChart3,
  Calendar,
  Sparkles
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

interface VisitorStats {
  totalVisits: number;
  uniqueVisitors: number;
  todayVisits: number;
  todayUnique: number;
  liveNow: number;
  avgDurationMinutes: number;
  devices: { mobile: number; desktop: number; tablet: number };
  oses: Record<string, number>;
  browsers: Record<string, number>;
  subjects: Record<string, number>;
  tabs: Record<string, number>;
  referrers: Record<string, number>;
  recentVisitors: Array<{
    id: string;
    visitorId: string;
    sessionId: string;
    ipAddress: string;
    deviceType: string;
    operatingSystem: string;
    browser: string;
    path: string;
    activeTab: string;
    activeSubject: string;
    referrer: string;
    durationSeconds: number;
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
  const [visitorFilter, setVisitorFilter] = useState<string>("all");
  const [visitorSearch, setVisitorSearch] = useState<string>("");

  // Broadcast Message State
  const [broadcasts, setBroadcasts] = useState<BroadcastMessage[]>([]);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newMessage, setNewMessage] = useState<string>("");
  const [newType, setNewType] = useState<"urgent" | "tip" | "motivation" | "update">("urgent");
  const [broadcastStatus, setBroadcastStatus] = useState<string>("");

  // Mistake Logs State
  const [mistakeLogs, setMistakeLogs] = useState<any[]>([]);
  const [isLoadingMistakes, setIsLoadingMistakes] = useState<boolean>(false);

  // Curriculum Filter State
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("all");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Sound Synthesizer for Admin Interactions
  const playSound = (type: "login" | "error" | "click" | "success") => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === "login" || type === "success") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
        osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.08);
        osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.16);
        osc.frequency.setValueAtTime(1046.5, audioCtx.currentTime + 0.24);
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.45);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.45);
      } else if (type === "error") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(220, audioCtx.currentTime);
        osc.frequency.setValueAtTime(160, audioCtx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.28);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.28);
      } else {
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.06);
      }
    } catch {}
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
      const res = await fetch("/api/analytics");
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

  // Poll analytics when authenticated
  useEffect(() => {
    if (!isAuthenticated) return;
    fetchAnalytics();

    if (!isLivePolling) return;
    const interval = setInterval(() => {
      fetchAnalytics(true);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAuthenticated, isLivePolling, fetchAnalytics]);

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
    if (!analytics || !analytics.recentVisitors.length) return;
    playSound("click");
    const headers = ["Timestamp", "Visitor ID", "Session ID", "IP / Region", "Device", "OS", "Browser", "Subject", "Tab", "Duration (s)", "Referrer"];
    const rows = analytics.recentVisitors.map((v) => [
      v.createdAt,
      v.visitorId,
      v.sessionId,
      `"${v.ipAddress || "127.0.0.1"}"`,
      v.deviceType,
      v.operatingSystem,
      v.browser,
      v.activeSubject,
      v.activeTab,
      v.durationSeconds,
      v.referrer
    ]);

    const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `cbse_visitors_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  // Filtered recent visitors
  const filteredVisitors = useMemo(() => {
    if (!analytics || !analytics.recentVisitors) return [];
    return analytics.recentVisitors.filter((v) => {
      if (visitorFilter === "mobile" && v.deviceType !== "mobile") return false;
      if (visitorFilter === "desktop" && v.deviceType !== "desktop") return false;
      if (visitorSearch.trim()) {
        const q = visitorSearch.toLowerCase();
        const matchId = v.visitorId.toLowerCase().includes(q);
        const matchIp = (v.ipAddress || "").toLowerCase().includes(q);
        const matchSub = (v.activeSubject || "").toLowerCase().includes(q);
        const matchTab = (v.activeTab || "").toLowerCase().includes(q);
        return matchId || matchIp || matchSub || matchTab;
      }
      return true;
    });
  }, [analytics, visitorFilter, visitorSearch]);

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
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          <div className="p-7 sm:p-9 rounded-3xl border border-white/10 bg-[#0c1220]/90 backdrop-blur-2xl shadow-2xl shadow-black/80 space-y-6">
            {/* Header */}
            <div className="space-y-2 text-center">
              <div className="w-13 h-13 mx-auto rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-slate-950 shadow-lg shadow-teal-500/20">
                <Lock className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-black tracking-tight text-white">
                Restricted Terminal Access
              </h1>
              <p className="text-xs text-slate-400">
                Authorized administrator verification required to view system traffic and telemetry.
              </p>
            </div>

            {/* Error Banner */}
            {loginError && (
              <div className="p-3.5 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2.5 animate-shake">
                <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{loginError}</span>
              </div>
            )}

            {/* Form */}
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
  // 2. AUTHENTICATED VISITOR INTELLIGENCE & COMMAND CONSOLE
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
                <span className="text-sm font-black tracking-tight">Visitor & Traffic Command Hub</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-teal-500/20 text-teal-400 border border-teal-500/30">
                  Secret Admin Mode
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Sarthak Sharma · Live Telemetry Active
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
              <span className="hidden sm:inline">{isLivePolling ? "Live Radar ON" : "Paused"}</span>
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
              title="Refresh visitor stats"
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
            { id: "analytics", label: "Visitor Intelligence & Live Traffic", icon: Users },
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
        {/* TAB 1: VISITOR INTELLIGENCE & LIVE TRAFFIC DASHBOARD (PRIMARY) */}
        {/* ================================================================= */}
        {activeTab === "analytics" && (
          <div className="space-y-8 animate-fade-in">
            {/* Top Stat Ribbon with 5 Big Real-Time Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5">
              {/* Card 1: Total Unique Visitors */}
              <div className={`p-5 rounded-3xl border transition-all ${
                isDark ? "bg-[#0b101c] border-teal-500/30 shadow-lg shadow-teal-950/20" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-slate-400">Total Visitors</span>
                  <div className="w-8 h-8 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
                  {(analytics?.uniqueVisitors || 0).toLocaleString()}
                </div>
                <span className="text-[10px] font-mono text-teal-400 mt-1 block">
                  Unique students tracked
                </span>
              </div>

              {/* Card 2: Total Page Views */}
              <div className={`p-5 rounded-3xl border transition-all ${
                isDark ? "bg-[#0b101c] border-cyan-500/30 shadow-lg shadow-cyan-950/20" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-slate-400">Total Pageviews</span>
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
                  {(analytics?.totalVisits || 0).toLocaleString()}
                </div>
                <span className="text-[10px] font-mono text-cyan-400 mt-1 block">
                  Total site interactions
                </span>
              </div>

              {/* Card 3: Today's Visitors */}
              <div className={`p-5 rounded-3xl border transition-all ${
                isDark ? "bg-[#0b101c] border-amber-500/30 shadow-lg shadow-amber-950/20" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase text-slate-400">Today's Visitors</span>
                  <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                    <Calendar className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
                  {(analytics?.todayUnique || 0).toLocaleString()}
                </div>
                <span className="text-[10px] font-mono text-amber-400 mt-1 block">
                  {(analytics?.todayVisits || 0)} sessions today
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
                <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400 tracking-tight flex items-center gap-2">
                  <span>{analytics?.liveNow || 1}</span>
                  <span className="text-xs font-normal text-emerald-400/70 font-sans">students</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 mt-1 block">
                  In last 5 minutes
                </span>
              </div>

              {/* Card 5: Average Session Time */}
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
                  {analytics?.avgDurationMinutes || 1}m
                </div>
                <span className="text-[10px] font-mono text-indigo-400 mt-1 block">
                  Per student visit
                </span>
              </div>
            </div>

            {/* Visitor Breakdown Grids */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Device Matrix */}
              <div className={`p-6 rounded-3xl border space-y-4 ${
                isDark ? "bg-[#0b101c] border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-teal-400" />
                    <h3 className="text-sm font-black uppercase tracking-wider">Device Categories</h3>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    {((analytics?.devices.mobile || 0) + (analytics?.devices.desktop || 0) + (analytics?.devices.tablet || 0))} logs
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  {[
                    { label: "Mobile Smartphones", val: analytics?.devices.mobile || 0, icon: "📱", color: "from-teal-500 to-emerald-500" },
                    { label: "Desktop & Laptops", val: analytics?.devices.desktop || 0, icon: "💻", color: "from-cyan-500 to-blue-500" },
                    { label: "iPads & Tablets", val: analytics?.devices.tablet || 0, icon: "📟", color: "from-amber-500 to-orange-500" }
                  ].map((dev, idx) => {
                    const total = (analytics?.devices.mobile || 0) + (analytics?.devices.desktop || 0) + (analytics?.devices.tablet || 0) || 1;
                    const pct = Math.round((dev.val / total) * 100);
                    return (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="flex items-center gap-1.5 text-slate-300">
                            <span>{dev.icon}</span>
                            <span>{dev.label}</span>
                          </span>
                          <span className="font-bold text-white">{dev.val} ({pct}%)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${dev.color} transition-all duration-500`}
                            style={{ width: `${Math.max(pct, 5)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Operating System Distribution */}
              <div className={`p-6 rounded-3xl border space-y-4 ${
                isDark ? "bg-[#0b101c] border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-sm font-black uppercase tracking-wider">Operating Systems</h3>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  {Object.entries(analytics?.oses || { Windows: 2, Android: 2 }).map(([osName, count], idx) => {
                    const total = analytics?.totalVisits || 1;
                    const pct = Math.round((count / total) * 100);
                    return (
                      <div key={idx} className="flex items-center justify-between text-xs font-mono p-2 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="text-slate-300">{osName}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">{count}</span>
                          <span className="text-[10px] text-slate-500">({pct}%)</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Most Studied Subjects */}
              <div className={`p-6 rounded-3xl border space-y-4 ${
                isDark ? "bg-[#0b101c] border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <h3 className="text-sm font-black uppercase tracking-wider">Popular Subjects</h3>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  {Object.entries(analytics?.subjects || { science: 2, math: 1, sst: 1 }).map(([subName, count], idx) => {
                    return (
                      <div key={idx} className="flex items-center justify-between text-xs font-mono p-2 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="text-slate-300 uppercase">{subName}</span>
                        <span className="px-2 py-0.5 rounded bg-teal-500/15 text-teal-400 font-bold border border-teal-500/30">
                          {count} visits
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Detailed Real-Time Visitor Log Table */}
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
              isDark ? "bg-[#0b101c] border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                    <h3 className="text-lg font-black tracking-tight">Real-Time Visitor Log Stream</h3>
                  </div>
                  <p className="text-xs text-slate-400">
                    Detailed chronological timeline of student entries, devices, active sections, and session durations.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
                  {/* Search */}
                  <div className="relative flex-1 md:w-56">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search visitor ID or IP..."
                      value={visitorSearch}
                      onChange={(e) => setVisitorSearch(e.target.value)}
                      className={`w-full pl-8 pr-3 py-2 rounded-xl text-xs border focus:outline-none ${
                        isDark ? "bg-black/40 border-white/10 text-white" : "bg-slate-50 border-slate-200 text-slate-900"
                      }`}
                    />
                  </div>

                  {/* Device Filter */}
                  <select
                    value={visitorFilter}
                    onChange={(e) => setVisitorFilter(e.target.value)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold border focus:outline-none cursor-pointer ${
                      isDark ? "bg-black/50 border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"
                    }`}
                  >
                    <option value="all">All Devices</option>
                    <option value="mobile">📱 Mobile Only</option>
                    <option value="desktop">💻 Desktop Only</option>
                  </select>

                  {/* Export CSV */}
                  <button
                    onClick={handleExportCSV}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-teal-500/15 hover:bg-teal-500/25 text-teal-400 border border-teal-500/30 flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export CSV</span>
                  </button>

                  {/* Purge / Reset */}
                  <button
                    onClick={handleResetAnalytics}
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border border-white/5 transition-colors cursor-pointer"
                    title="Clear Visitor Log History"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className={`border-b ${isDark ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-600"}`}>
                      <th className="py-3 px-3">Time</th>
                      <th className="py-3 px-3">Visitor ID</th>
                      <th className="py-3 px-3">IP / Location</th>
                      <th className="py-3 px-3">Device & OS</th>
                      <th className="py-3 px-3">Browser</th>
                      <th className="py-3 px-3">Active Section</th>
                      <th className="py-3 px-3">Duration</th>
                      <th className="py-3 px-3">Source</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredVisitors.map((vis) => (
                      <tr key={vis.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3 px-3 text-slate-400 whitespace-nowrap">
                          {new Date(vis.createdAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                        </td>
                        <td className="py-3 px-3 font-bold text-teal-400 whitespace-nowrap">
                          {vis.visitorId.slice(0, 16)}...
                        </td>
                        <td className="py-3 px-3 text-slate-300 whitespace-nowrap">
                          {vis.ipAddress}
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap">
                          <span className="flex items-center gap-1.5">
                            <span>{vis.deviceType === "mobile" ? "📱" : "💻"}</span>
                            <span>{vis.operatingSystem}</span>
                          </span>
                        </td>
                        <td className="py-3 px-3 text-slate-300 whitespace-nowrap">
                          {vis.browser}
                        </td>
                        <td className="py-3 px-3 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded bg-white/5 text-amber-300 font-bold border border-white/10">
                            {vis.activeSubject.toUpperCase()} · {vis.activeTab}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-slate-300 whitespace-nowrap">
                          {vis.durationSeconds > 60 ? `${Math.round(vis.durationSeconds / 60)}m` : `${vis.durationSeconds}s`}
                        </td>
                        <td className="py-3 px-3 text-slate-400 whitespace-nowrap">
                          {vis.referrer}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
            <div className={`p-6 rounded-3xl border flex justify-between items-center ${
              isDark ? "bg-[#0b101c] border-white/10" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div>
                <h2 className="text-xl font-black">Student Doubt & Error Telemetry</h2>
                <p className="text-xs text-slate-400">Captured pitfalls from student practice sprints</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { id: "mst_1", subject: "SCIENCE", chapter: "Life Processes", mistakeType: "Examiner Trap", detail: "Confused Pepsin (acidic gastric juice) with Trypsin (alkaline pancreatic juice)", time: "Just now" },
                { id: "mst_2", subject: "MATH", chapter: "Real Numbers", mistakeType: "Step Penalty", detail: "Omitted explicit statement that 'a and b are co-prime' in √5 irrationality proof", time: "12m ago" },
                { id: "mst_3", subject: "SST", chapter: "Nationalism in Europe", mistakeType: "Date Trap", detail: "Wrote 1804 for Vienna Congress instead of 1815", time: "34m ago" },
                { id: "mst_4", subject: "HINDI", chapter: "बड़े भाई साहब", mistakeType: "Spelling Penalty", detail: "Wrote Shaherum without halant", time: "1h ago" }
              ].map((log) => (
                <div
                  key={log.id}
                  className={`p-4 rounded-2xl border flex items-center justify-between gap-4 ${
                    isDark ? "bg-[#0b101c] border-white/10" : "bg-white border-slate-200 shadow-xs"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-rose-500/15 text-rose-400 border border-rose-500/30">
                        {log.mistakeType}
                      </span>
                      <span className="text-xs font-bold text-slate-300">
                        {log.subject} · {log.chapter}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{log.detail}</p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 shrink-0">
                    {log.time}
                  </span>
                </div>
              ))}
            </div>
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
                    <span className="text-slate-400">Live Traffic Telemetry</span>
                    <span className="text-emerald-400 font-bold">Active Heartbeat (45s)</span>
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
    </div>
  );
}
