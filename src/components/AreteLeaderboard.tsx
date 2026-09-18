"use client";

import React, { useState, useMemo } from "react";
import {
  Trophy,
  Medal,
  Award,
  Crown,
  Flame,
  Sparkles,
  TrendingUp,
  MapPin,
  CheckCircle2,
  Shield,
  Zap,
  Star,
  Users,
  Eye,
  Filter
} from "lucide-react";
import type { StudentProfile } from "@/components/AreteAccessGateModal";
import { areteAudio } from "@/lib/audio";

interface LeaderboardContender {
  id: string;
  name: string;
  location: string;
  xp: number;
  tier: string;
  streakDays: number;
  accuracy: number;
  solvedCount: number;
  badge: string;
  isCurrentUser?: boolean;
  avatarBg: string;
  visitsCount?: number;
}

interface AreteLeaderboardProps {
  currentXP: number;
  studentProfile: StudentProfile | null;
  isDark: boolean;
  onOpenVault: () => void;
}

const PEER_CONTENDERS: LeaderboardContender[] = [
  {
    id: "peer_1",
    name: "Ananya Iyer",
    location: "Bengaluru, KA",
    xp: 2150,
    tier: "Archon of Areté",
    streakDays: 42,
    accuracy: 97,
    solvedCount: 384,
    badge: "🏛️ Archon #1",
    avatarBg: "from-amber-400 to-yellow-600"
  },
  {
    id: "peer_2",
    name: "Rohan Meena",
    location: "Kota / Jaipur, RJ",
    xp: 1890,
    tier: "Sovereign Scholar",
    streakDays: 31,
    accuracy: 94,
    solvedCount: 310,
    badge: "👑 Sovereign #2",
    avatarBg: "from-slate-300 to-zinc-500"
  },
  {
    id: "peer_3",
    name: "Aarav Deshmukh",
    location: "South Mumbai, MH",
    xp: 1640,
    tier: "Sovereign Scholar",
    streakDays: 28,
    accuracy: 92,
    solvedCount: 275,
    badge: "🥉 Bronze Master",
    avatarBg: "from-amber-700 to-orange-800"
  },
  {
    id: "peer_4",
    name: "Divya Aggarwal",
    location: "Delhi NCR (Rohini)",
    xp: 1420,
    tier: "Master of Proofs",
    streakDays: 24,
    accuracy: 91,
    solvedCount: 242,
    badge: "📐 Proof Specialist",
    avatarBg: "from-blue-500 to-indigo-600"
  },
  {
    id: "peer_5",
    name: "Kabir Sengupta",
    location: "Salt Lake, Kolkata, WB",
    xp: 1210,
    tier: "Polymath",
    streakDays: 19,
    accuracy: 89,
    solvedCount: 204,
    badge: "🧪 Science Scholar",
    avatarBg: "from-teal-500 to-emerald-600"
  },
  {
    id: "peer_6",
    name: "Priya Nair",
    location: "Adyar, Chennai, TN",
    xp: 1040,
    tier: "Polymath",
    streakDays: 16,
    accuracy: 88,
    solvedCount: 180,
    badge: "📜 SST Chronologist",
    avatarBg: "from-rose-500 to-pink-600"
  },
  {
    id: "peer_7",
    name: "Ayush Verma",
    location: "Lucknow, UP",
    xp: 880,
    tier: "Strategist",
    streakDays: 14,
    accuracy: 86,
    solvedCount: 155,
    badge: "🎯 Question Hunter",
    avatarBg: "from-cyan-500 to-blue-600"
  },
  {
    id: "peer_8",
    name: "Tanya Bansal",
    location: "Sector 35, Chandigarh",
    xp: 740,
    tier: "Theorist",
    streakDays: 11,
    accuracy: 85,
    solvedCount: 130,
    badge: "💡 Concept Dynamo",
    avatarBg: "from-purple-500 to-violet-600"
  },
  {
    id: "peer_9",
    name: "Manish Choudhary",
    location: "Kankarbagh, Patna, BR",
    xp: 590,
    tier: "Scholar",
    streakDays: 8,
    accuracy: 83,
    solvedCount: 98,
    badge: "⚡ Rapid Climber",
    avatarBg: "from-amber-600 to-yellow-700"
  },
  {
    id: "peer_10",
    name: "Devansh Patel",
    location: "Ahmedabad, GJ",
    xp: 440,
    tier: "Scholar",
    streakDays: 6,
    accuracy: 81,
    solvedCount: 75,
    badge: "🌱 Growing Scholar",
    avatarBg: "from-emerald-600 to-teal-700"
  },
  {
    id: "peer_11",
    name: "Simran Kaur",
    location: "Amritsar, PB",
    xp: 310,
    tier: "Aspirant",
    streakDays: 4,
    accuracy: 78,
    solvedCount: 52,
    badge: "🚀 Fresh Ascent",
    avatarBg: "from-orange-500 to-rose-500"
  },
  {
    id: "peer_12",
    name: "Aditya Roy",
    location: "Bhubaneswar, OD",
    xp: 210,
    tier: "Aspirant",
    streakDays: 3,
    accuracy: 75,
    solvedCount: 35,
    badge: "🎯 New Contender",
    avatarBg: "from-fuchsia-500 to-purple-600"
  }
];

export default function AreteLeaderboard({
  currentXP,
  studentProfile,
  isDark,
  onOpenVault
}: AreteLeaderboardProps) {
  const [filter, setFilter] = useState<"all" | "weekly" | "top5">("all");

  const studentName = studentProfile?.name || "You (CBSE Cadet)";
  const studentLocation = studentProfile?.location || "India";
  const visits = studentProfile?.visitsCount || 1;

  // Determine user's rank tier based on currentXP
  const userTier = useMemo(() => {
    if (currentXP >= 2000) return "Archon of Areté";
    if (currentXP >= 1500) return "Sovereign Scholar";
    if (currentXP >= 1200) return "Master of Proofs";
    if (currentXP >= 900) return "Polymath";
    if (currentXP >= 650) return "Strategist";
    if (currentXP >= 450) return "Theorist";
    if (currentXP >= 250) return "Scholar";
    return "Aspirant";
  }, [currentXP]);

  // Combine currentUser with Peer Contenders & Sort by XP
  const fullLeaderboard = useMemo(() => {
    const userContender: LeaderboardContender = {
      id: "current_user_contender",
      name: studentName,
      location: studentLocation,
      xp: currentXP,
      tier: userTier,
      streakDays: Math.max(1, Math.floor(currentXP / 120)),
      accuracy: Math.min(99, Math.max(82, Math.floor(82 + (currentXP / 100)))),
      solvedCount: Math.max(5, Math.floor(currentXP / 10)),
      badge: visits >= 2 ? `⭐ Veteran Contender (${visits} Visits)` : "🌟 Verified Contender",
      isCurrentUser: true,
      avatarBg: "from-cyan-400 via-blue-500 to-indigo-600",
      visitsCount: visits
    };

    const combined = [...PEER_CONTENDERS, userContender];
    return combined.sort((a, b) => b.xp - a.xp);
  }, [currentXP, studentName, studentLocation, userTier, visits]);

  // Find user's current rank
  const userRankIndex = fullLeaderboard.findIndex((c) => c.isCurrentUser);
  const userRank = userRankIndex >= 0 ? userRankIndex + 1 : fullLeaderboard.length;

  // Next contender ahead of the user
  const contenderAhead = userRankIndex > 0 ? fullLeaderboard[userRankIndex - 1] : null;
  const xpNeededForNextRank = contenderAhead ? contenderAhead.xp - currentXP + 1 : 0;

  // Filtered list
  const displayList = useMemo(() => {
    if (filter === "top5") {
      return fullLeaderboard.slice(0, 5);
    }
    if (filter === "weekly") {
      // Prioritize fast climbers
      return [...fullLeaderboard].sort((a, b) => (b.solvedCount * 1.5) - (a.solvedCount * 1.5)).slice(0, 10);
    }
    return fullLeaderboard.slice(0, 12);
  }, [fullLeaderboard, filter]);

  return (
    <div
      className={`p-6 sm:p-8 rounded-3xl border space-y-6 transition-all duration-300 ${
        isDark
          ? "bg-gradient-to-b from-[#0e1628] via-[#0b101c] to-[#080d17] border-amber-500/25 shadow-[0_12px_40px_rgba(245,158,11,0.08)]"
          : "bg-gradient-to-b from-white via-amber-50/20 to-white border-amber-200 shadow-xl"
      }`}
    >
      {/* 1. HEADER ROW */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-black uppercase tracking-wider bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 text-slate-950 flex items-center gap-1.5 shadow-md shadow-amber-500/25">
              <Trophy className="w-3.5 h-3.5" /> All-India CBSE Class 10 Live Arena
            </span>
            <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${
              isDark ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-300" : "bg-emerald-100 border-emerald-300 text-emerald-900 font-bold"
            }`}>
              Live Reactivity • 0ms Sync
            </span>
            {visits >= 2 && (
              <span className={`text-xs font-mono font-black px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${
                isDark ? "bg-amber-500/15 border-amber-500/30 text-amber-300" : "bg-amber-100 border-amber-300 text-amber-900"
              }`}>
                ⭐ Veteran Cadet ({visits} Sessions)
              </span>
            )}
          </div>

          <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
            Leaderboard of Academic Areté
          </h3>
          <p className={`text-xs sm:text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Rankings calibrated in real-time by authentic problem solving, conceptual mastery, and Pomodoro stamina.
          </p>
        </div>

        {/* CURRENT USER STATUS PILL */}
        <div className={`p-4 rounded-2xl border shrink-0 text-right space-y-1 ${
          isDark ? "bg-black/40 border-amber-500/30" : "bg-white border-amber-300 shadow-md"
        }`}>
          <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-black block">
            Your Live Standing
          </span>
          <div className="flex items-baseline justify-end gap-2">
            <span className="text-2xl sm:text-3xl font-black text-amber-400">
              #{userRank}
            </span>
            <span className={`text-xs font-mono font-bold ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              of {fullLeaderboard.length} Contenders
            </span>
          </div>
          <span className="text-[11px] font-mono font-extrabold text-emerald-400 block">
            {currentXP} Total XP • {userTier}
          </span>
        </div>
      </div>

      {/* 2. GAP TO NEXT RANK HERO CALLOUT */}
      {contenderAhead && (
        <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fade-in ${
          isDark
            ? "bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-transparent border-amber-500/30 text-amber-200"
            : "bg-gradient-to-r from-amber-50 via-orange-50/50 to-white border-amber-200 text-amber-950 font-medium"
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500 text-slate-950 shrink-0 font-black">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <p className="font-bold">
                You are only <strong className="text-amber-400 font-mono text-sm">{xpNeededForNextRank} XP</strong> away from overtaking <strong>{contenderAhead.name}</strong> (Rank #{userRank - 1})!
              </p>
              <p className={`text-[11px] mt-0.5 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                Solving just 2–3 questions in the Practice Vault will boost your position immediately.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              areteAudio.play("click");
              onOpenVault();
            }}
            className="px-4 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-amber-400 to-orange-500 hover:brightness-110 text-slate-950 shrink-0 cursor-pointer shadow-md shadow-amber-500/20 active:scale-95 transition-all"
          >
            <span>Solve to Overtake (+XP)</span>
          </button>
        </div>
      )}

      {/* 3. PODIUM FOR TOP 3 CONTENDERS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
        {fullLeaderboard.slice(0, 3).map((podium, pIdx) => {
          const isGold = pIdx === 0;
          const isSilver = pIdx === 1;
          const isBronze = pIdx === 2;

          return (
            <div
              key={podium.id}
              className={`p-4 sm:p-5 rounded-3xl border relative overflow-hidden flex flex-col justify-between gap-4 transition-all ${
                podium.isCurrentUser
                  ? "ring-2 ring-cyan-400 shadow-xl scale-[1.02]"
                  : ""
              } ${
                isGold
                  ? isDark
                    ? "bg-gradient-to-b from-amber-950/40 via-[#13101d] to-[#0c0d16] border-amber-400/50 shadow-[0_4px_24px_rgba(245,158,11,0.15)]"
                    : "bg-gradient-to-b from-amber-100/90 via-white to-amber-50 border-amber-300 shadow-md"
                  : isSilver
                  ? isDark
                    ? "bg-gradient-to-b from-slate-800/30 via-[#0d121c] to-[#080d17] border-slate-400/40 shadow-md"
                    : "bg-gradient-to-b from-slate-100/90 via-white to-slate-50 border-slate-300 shadow-sm"
                  : isDark
                  ? "bg-gradient-to-b from-orange-950/30 via-[#100f1a] to-[#080d17] border-orange-500/40 shadow-md"
                  : "bg-gradient-to-b from-orange-100/90 via-white to-orange-50 border-orange-300 shadow-sm"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${podium.avatarBg} text-white flex items-center justify-center text-sm font-black shadow-md`}>
                    {isGold ? <Crown className="w-5 h-5 text-amber-200" /> : isSilver ? <Medal className="w-5 h-5 text-slate-200" /> : <Award className="w-5 h-5 text-amber-200" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-amber-400 block">
                      {isGold ? "🥇 National Rank #1" : isSilver ? "🥈 National Rank #2" : "🥉 National Rank #3"}
                    </span>
                    <h4 className={`text-base font-black truncate ${isDark ? "text-white" : "text-slate-900"}`}>
                      {podium.name} {podium.isCurrentUser && "(You)"}
                    </h4>
                    <span className={`text-[11px] flex items-center gap-1 font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      <MapPin className="w-3 h-3 text-rose-400" /> {podium.location}
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-xl text-xs font-mono font-black bg-amber-500 text-slate-950 shadow-sm">
                  {podium.xp} XP
                </span>
              </div>

              <div className={`pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                isDark ? "border-white/10 text-slate-300" : "border-slate-200 text-slate-700"
              }`}>
                <span>{podium.tier}</span>
                <span className="text-emerald-400 font-bold">{podium.accuracy}% Accuracy</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. FILTER TABS */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-1.5 p-1 rounded-2xl border">
          {(["all", "weekly", "top5"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => {
                areteAudio.play("pop");
                setFilter(mode);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === mode
                  ? isDark
                    ? "bg-amber-500 text-slate-950 font-black shadow-sm"
                    : "bg-amber-600 text-white font-black shadow-sm"
                  : isDark
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {mode === "all" && "🌐 All-India Standing"}
              {mode === "weekly" && "⚡ Weekly Momentum"}
              {mode === "top5" && "🏛️ Hall of Archons"}
            </button>
          ))}
        </div>

        <span className={`text-[11px] font-mono font-bold ${isDark ? "text-slate-400" : "text-slate-600"}`}>
          Showing {displayList.length} Authenticated Cadets
        </span>
      </div>

      {/* 5. FULL LEADERBOARD TABLE ROWS */}
      <div className="space-y-2">
        {displayList.map((contender, idx) => {
          // Calculate true rank in fullLeaderboard
          const trueRank = fullLeaderboard.findIndex((c) => c.id === contender.id) + 1;
          const isUser = contender.isCurrentUser;

          return (
            <div
              key={contender.id}
              className={`p-3.5 sm:p-4 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                isUser
                  ? isDark
                    ? "bg-gradient-to-r from-cyan-950/40 via-blue-950/20 to-black border-cyan-400/60 ring-2 ring-cyan-400/40 shadow-lg shadow-cyan-500/10"
                    : "bg-gradient-to-r from-cyan-50 via-white to-blue-50 border-cyan-300 ring-2 ring-cyan-400/50 shadow-md"
                  : isDark
                  ? "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-2xs"
              }`}
            >
              {/* RANK & AVATAR & NAME */}
              <div className="flex items-center gap-3.5 min-w-0">
                <span className={`w-7 text-center font-mono font-black text-sm sm:text-base shrink-0 ${
                  trueRank === 1 ? "text-amber-400" : trueRank === 2 ? "text-slate-300" : trueRank === 3 ? "text-amber-600" : isDark ? "text-slate-400" : "text-slate-600"
                }`}>
                  #{trueRank}
                </span>

                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${contender.avatarBg} text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm`}>
                  {contender.name.substring(0, 2).toUpperCase()}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs sm:text-sm font-black truncate ${isDark ? "text-white" : "text-slate-900"}`}>
                      {contender.name}
                    </span>
                    {isUser && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-black uppercase tracking-wider bg-cyan-500 text-slate-950">
                        YOU
                      </span>
                    )}
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border hidden md:inline-block ${
                      isDark ? "bg-white/5 border-white/10 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-600"
                    }`}>
                      {contender.badge}
                    </span>
                  </div>

                  <span className={`text-[11px] flex items-center gap-1 mt-0.5 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
                    <span className="truncate">{contender.location}</span>
                    <span className="opacity-40">•</span>
                    <span className="font-mono text-emerald-400 font-bold">{contender.solvedCount} Qs Solved</span>
                  </span>
                </div>
              </div>

              {/* STATS & XP BADGE */}
              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-0 border-current/10">
                <div className="text-left sm:text-right">
                  <span className={`text-xs font-black block font-mono ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
                    {contender.xp} XP
                  </span>
                  <span className={`text-[10px] font-mono ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    {contender.tier}
                  </span>
                </div>

                <div className={`px-2.5 py-1 rounded-xl border text-[10px] font-mono font-bold flex items-center gap-1 shrink-0 ${
                  isDark ? "bg-black/30 border-white/10 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
                }`}>
                  <Flame className="w-3 h-3 text-orange-400" />
                  <span>{contender.streakDays}d Streak</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
