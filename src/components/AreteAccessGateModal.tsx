"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Lock,
  Target,
  Compass,
  Sparkles,
  Award,
  CheckCircle2,
  AlertCircle,
  FileText,
  Cookie,
  User,
  MapPin,
  Flame,
  ArrowRight
} from "lucide-react";
import AreteLogo from "@/components/AreteLogo";
import { areteAudio } from "@/lib/audio";

export interface StudentProfile {
  name: string;
  location: string;
  targetScore: string;
  stream: string;
  verifiedAt: string;
  visitsCount: number;
  acceptedCookies: boolean;
  acceptedPolicies: boolean;
}

interface AreteAccessGateModalProps {
  isOpen: boolean;
  isDark: boolean;
  onVerified: (profile: StudentProfile) => void;
}

export const STORAGE_KEY_STUDENT = "arete_verified_student_profile";
export const STORAGE_KEY_VISITS = "arete_student_visits";

export default function AreteAccessGateModal({
  isOpen,
  isDark,
  onVerified
}: AreteAccessGateModalProps) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [targetScore, setTargetScore] = useState("95%+ (Distinction Century)");
  const [stream, setStream] = useState("CBSE Class 10 (Code 041/087/086)");
  const [acceptedCookies, setAcceptedCookies] = useState(false);
  const [acceptedPolicies, setAcceptedPolicies] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Trap all keyboard events so ESC or Tab-out cannot close or bypass the gate
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    // Prevent scrolling behind modal
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const cleanName = name.trim();
    const cleanLocation = location.trim();

    if (!cleanName || cleanName.length < 2) {
      setErrorMsg("Please enter your full name or call-sign (at least 2 characters).");
      areteAudio.play("error");
      return;
    }

    if (!cleanLocation || cleanLocation.length < 2) {
      setErrorMsg("Please enter your city / state or school location for the All-India Leaderboard.");
      areteAudio.play("error");
      return;
    }

    if (!acceptedCookies) {
      setErrorMsg("You must accept local storage and performance cookies to track your XP and study progress.");
      areteAudio.play("error");
      return;
    }

    if (!acceptedPolicies) {
      setErrorMsg("You must accept the Academic Integrity Code & CBSE Routine Policies to enter.");
      areteAudio.play("error");
      return;
    }

    setIsSubmitting(true);
    areteAudio.play("success");

    // Retrieve and increment visits
    const currentVisits = parseInt(localStorage.getItem(STORAGE_KEY_VISITS) || "0", 10) + 1;
    localStorage.setItem(STORAGE_KEY_VISITS, currentVisits.toString());

    const profile: StudentProfile = {
      name: cleanName,
      location: cleanLocation,
      targetScore,
      stream,
      verifiedAt: new Date().toISOString(),
      visitsCount: currentVisits,
      acceptedCookies: true,
      acceptedPolicies: true
    };

    localStorage.setItem(STORAGE_KEY_STUDENT, JSON.stringify(profile));

    setTimeout(() => {
      setIsSubmitting(false);
      onVerified(profile);
    }, 450);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-xl overflow-y-auto select-none"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`relative w-full max-w-xl rounded-3xl border shadow-2xl p-6 sm:p-8 space-y-6 animate-fade-in my-auto ${
          isDark
            ? "bg-gradient-to-b from-[#0e1626] via-[#090e1a] to-[#060a12] border-amber-500/30 text-white shadow-[0_0_60px_rgba(245,158,11,0.15)]"
            : "bg-gradient-to-b from-white via-amber-50/40 to-white border-amber-300 text-slate-900 shadow-2xl"
        }`}
      >
        {/* GATE HEADER & EMBLEM */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <AreteLogo size="lg" showText={false} isDark={isDark} />
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500 text-slate-950 flex items-center gap-1 shadow-sm">
                  <Lock className="w-3 h-3" /> Mandatory Student Citadel Gate
                </span>
                <span className="text-[10px] font-mono font-bold text-amber-400">
                  CBSE 2026–27
                </span>
              </div>
              <h2 className={`text-xl sm:text-2xl font-black tracking-tight mt-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                ARETĒ Student Identity Verification
              </h2>
            </div>
          </div>

          <span className={`text-[11px] font-mono font-black px-3 py-1 rounded-xl border shrink-0 ${
            isDark ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300" : "bg-emerald-100 border-emerald-300 text-emerald-950 font-bold"
          }`}>
            +100 XP Welcome Bounty
          </span>
        </div>

        {/* SECURITY & LEADERBOARD NOTICE */}
        <div className={`p-3.5 rounded-2xl border flex items-start gap-3 text-xs leading-relaxed ${
          isDark
            ? "bg-amber-500/10 border-amber-500/30 text-amber-200"
            : "bg-amber-50 border-amber-200 text-amber-900 font-medium"
        }`}>
          <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p>
            Access to the ARETĒ Command Engine, Question Vault, and All-India Live Leaderboard is strictly authenticated. Complete your details below to activate your student ledger and claim your starting XP.
          </p>
        </div>

        {errorMsg && (
          <div className={`p-3.5 rounded-2xl border flex items-center gap-2.5 text-xs font-bold animate-shake ${
            isDark ? "bg-rose-950/50 border-rose-500/60 text-rose-300" : "bg-rose-50 border-rose-300 text-rose-900"
          }`}>
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* VERIFICATION FORM */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* FULL NAME */}
            <div className="space-y-1.5">
              <label className={`font-mono font-bold flex items-center gap-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                <User className="w-3.5 h-3.5 text-amber-400" />
                <span>Student Full Name / Call-Sign *</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarthak Sharma"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  isDark ? "bg-black/40 border-white/15 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 shadow-2xs"
                }`}
              />
            </div>

            {/* LOCATION / CITY */}
            <div className="space-y-1.5">
              <label className={`font-mono font-bold flex items-center gap-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>City &amp; State / Coaching Hub *</span>
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Delhi NCR, Jaipur, Kota, Bengaluru..."
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  isDark ? "bg-black/40 border-white/15 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 shadow-2xs"
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* TARGET BOARD PERCENTAGE */}
            <div className="space-y-1.5">
              <label className={`font-mono font-bold flex items-center gap-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                <Target className="w-3.5 h-3.5 text-cyan-400" />
                <span>Target Board Ambition</span>
              </label>
              <select
                value={targetScore}
                onChange={(e) => setTargetScore(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  isDark ? "bg-[#0b0f19] border-white/15 text-white" : "bg-white border-slate-300 text-slate-900 shadow-2xs"
                }`}
              >
                <option value="100% Perfect Century">100% Perfect Century (All 100s)</option>
                <option value="98%+ (Top State Merit)">98%+ (Top State Merit)</option>
                <option value="95%+ (Distinction Century)">95%+ (Distinction Century)</option>
                <option value="90%+ (Premier Scholar)">90%+ (Premier Scholar)</option>
              </select>
            </div>

            {/* CURRICULUM STREAM */}
            <div className="space-y-1.5">
              <label className={`font-mono font-bold flex items-center gap-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>Academic Stream</span>
              </label>
              <select
                value={stream}
                onChange={(e) => setStream(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  isDark ? "bg-[#0b0f19] border-white/15 text-white" : "bg-white border-slate-300 text-slate-900 shadow-2xs"
                }`}
              >
                <option value="CBSE Class 10 (Code 041/087/086)">CBSE Class 10 (Math, Sci, SST, Eng, Hin)</option>
                <option value="CBSE Class 10 Standard Math">Class 10 Standard Mathematics (041)</option>
                <option value="CBSE Class 10 Basic Math">Class 10 Basic Mathematics (241)</option>
              </select>
            </div>
          </div>

          {/* HARDCODED MANDATORY POLICY & COOKIE CONSENTS */}
          <div className={`p-4 rounded-2xl border space-y-3 pt-3.5 ${
            isDark ? "bg-black/30 border-white/10" : "bg-slate-50 border-slate-200"
          }`}>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 block">
              🛡️ Mandatory Regulatory &amp; Cookie Policies
            </span>

            {/* CHECKBOX 1: COOKIES & STORAGE */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                required
                checked={acceptedCookies}
                onChange={(e) => {
                  setAcceptedCookies(e.target.checked);
                  areteAudio.play("pop");
                }}
                className="w-4 h-4 mt-0.5 rounded border-white/20 text-amber-500 focus:ring-amber-400 cursor-pointer shrink-0"
              />
              <div className="space-y-0.5">
                <span className={`font-bold flex items-center gap-1.5 ${isDark ? "text-white" : "text-slate-900"}`}>
                  <Cookie className="w-3.5 h-3.5 text-amber-400" />
                  <span>Accept Local Storage Ledger &amp; Performance Cookies *</span>
                </span>
                <p className={`text-[11px] leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Allows ARETĒ to save your XP, streaks, completed questions, solved mistakes, and leaderboard position locally on this device.
                </p>
              </div>
            </label>

            {/* CHECKBOX 2: CODE OF CONDUCT & CBSE POLICIES */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                required
                checked={acceptedPolicies}
                onChange={(e) => {
                  setAcceptedPolicies(e.target.checked);
                  areteAudio.play("pop");
                }}
                className="w-4 h-4 mt-0.5 rounded border-white/20 text-amber-500 focus:ring-amber-400 cursor-pointer shrink-0"
              />
              <div className="space-y-0.5">
                <span className={`font-bold flex items-center gap-1.5 ${isDark ? "text-white" : "text-slate-900"}`}>
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Accept Academic Integrity Code &amp; Routine Policies *</span>
                </span>
                <p className={`text-[11px] leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  I pledge to study with rigorous daily discipline, solve questions with honest effort, and embrace the Aristotelian standard of excellence (*Areté*).
                </p>
              </div>
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:brightness-110 text-slate-950 flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-amber-500/25 active:scale-98 transition-all disabled:opacity-50"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{isSubmitting ? "Authenticating & Registering Ledger..." : "Authenticate & Enter ARETĒ Engine (+100 XP Bounty)"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
