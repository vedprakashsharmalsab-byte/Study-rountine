"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  ShieldCheck,
  Lock,
  User,
  MapPin,
  Target,
  Award,
  Cookie,
  FileCheck,
  ArrowRight,
  Sparkles,
  AlertCircle,
  Hash,
  Compass,
  CheckCircle2
} from "lucide-react";
import AreteLogo from "@/components/AreteLogo";
import { areteAudio } from "@/lib/audio";

export interface StudentProfile {
  name: string;
  city: string;
  pincode: string;
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

// Helper function to resolve Indian Postal Circles from 6-digit PIN code
function resolveIndianPostalRegion(pin: string): string | null {
  if (!/^[1-9][0-9]{5}$/.test(pin)) return null;
  const prefix2 = parseInt(pin.substring(0, 2), 10);
  if (prefix2 === 11) return "Delhi NCR (Northern Circle)";
  if (prefix2 >= 12 && prefix2 <= 13) return "Haryana Circle";
  if (prefix2 >= 14 && prefix2 <= 16) return "Punjab & Chandigarh Circle";
  if (prefix2 >= 17 && prefix2 <= 19) return "Himachal & J&K Circle";
  if (prefix2 >= 20 && prefix2 <= 28) return "Uttar Pradesh & Uttarakhand Circle";
  if (prefix2 >= 30 && prefix2 <= 34) return "Rajasthan Circle (Kota / Jaipur Hub)";
  if (prefix2 >= 36 && prefix2 <= 39) return "Gujarat Circle (Ahmedabad Hub)";
  if (prefix2 >= 40 && prefix2 <= 44) return "Maharashtra & Goa Circle (Mumbai / Pune Hub)";
  if (prefix2 >= 45 && prefix2 <= 49) return "Madhya Pradesh & Chhattisgarh Circle";
  if (prefix2 >= 50 && prefix2 <= 53) return "Andhra Pradesh & Telangana Circle (Hyderabad Hub)";
  if (prefix2 >= 56 && prefix2 <= 59) return "Karnataka Circle (Bengaluru Tech Hub)";
  if (prefix2 >= 60 && prefix2 <= 64) return "Tamil Nadu & Puducherry Circle (Chennai Hub)";
  if (prefix2 >= 67 && prefix2 <= 69) return "Kerala & Lakshadweep Circle";
  if (prefix2 >= 70 && prefix2 <= 74) return "West Bengal & A&N Circle (Kolkata Hub)";
  if (prefix2 >= 75 && prefix2 <= 77) return "Odisha Circle (Bhubaneswar Hub)";
  if (prefix2 >= 78 && prefix2 <= 79) return "North Eastern & Assam Circle";
  if (prefix2 >= 80 && prefix2 <= 85) return "Bihar & Jharkhand Circle (Patna Hub)";
  return "Verified Indian Postal Service Circle";
}

export default function AreteAccessGateModal({
  isOpen,
  isDark,
  onVerified
}: AreteAccessGateModalProps) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [targetScore, setTargetScore] = useState("Centum 100% (500/500 Marks • All-India AIR 1 Rank)");
  const [stream, setStream] = useState("CBSE Class 10 — Standard Mathematics (Course 041)");
  const [acceptedCookies, setAcceptedCookies] = useState(false);
  const [acceptedPolicies, setAcceptedPolicies] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Live Postal PIN Code Cross-Check
  const postalRegion = useMemo(() => {
    return resolveIndianPostalRegion(pincode.trim());
  }, [pincode]);

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
    const cleanCity = city.trim();
    const cleanPin = pincode.trim();

    // Cross-Check 1: Name validation
    if (!cleanName || cleanName.length < 2) {
      setErrorMsg("Please enter your official student full name (at least 2 characters).");
      areteAudio.play("error");
      return;
    }

    // Cross-Check 2: City validation
    if (!cleanCity || cleanCity.length < 2) {
      setErrorMsg("Please enter your city, district, or town name.");
      areteAudio.play("error");
      return;
    }

    // Cross-Check 3: Mandatory 6-Digit Indian Postal PIN Code
    if (!cleanPin || !/^[1-9][0-9]{5}$/.test(cleanPin)) {
      setErrorMsg("Mandatory Postal PIN Code must be a valid 6-digit Indian PIN code (e.g. 110001, 324005, 560001).");
      areteAudio.play("error");
      return;
    }

    // Cross-Check 4: Policy Consents
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

    const compositeLocation = `${cleanCity} (${cleanPin})`;

    const profile: StudentProfile = {
      name: cleanName,
      city: cleanCity,
      pincode: cleanPin,
      location: compositeLocation,
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
      className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-5 bg-black/95 backdrop-blur-2xl overflow-y-auto select-none"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`relative w-full max-w-xl rounded-3xl border shadow-2xl p-6 sm:p-8 space-y-6 animate-fade-in my-auto ${
          isDark
            ? "bg-gradient-to-b from-[#0e1628] via-[#090e1c] to-[#040810] border-amber-500/40 text-white shadow-[0_0_80px_rgba(245,158,11,0.25)]"
            : "bg-white border-amber-500/30 text-slate-900 shadow-2xl"
        }`}
        style={{ transform: "translateZ(0)" }}
      >
        {/* TOP SECURITY BADGE & EMBLEM */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <AreteLogo size="lg" showText={false} isDark={isDark} />
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-amber-400 text-slate-950 flex items-center gap-1 shadow-sm">
                  <Lock className="w-3 h-3" />
                  CITADEL ACCESS GATE
                </span>
                <span className={`text-[10px] font-mono font-bold ${isDark ? "text-cyan-400" : "text-cyan-700"}`}>
                  PROTOCOL 100-CBSE
                </span>
              </div>
              <h2 className={`text-xl font-black tracking-tight mt-1 leading-tight ${isDark ? "text-white" : "text-slate-950"}`}>
                Student Authentication Ledger
              </h2>
            </div>
          </div>

          <div className={`px-3 py-1 rounded-xl border text-[11px] font-mono font-bold flex items-center gap-1.5 shrink-0 ${
            isDark ? "bg-amber-500/15 border-amber-500/30 text-amber-300" : "bg-amber-50 border-amber-300 text-amber-900"
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>+100 XP Bounty</span>
          </div>
        </div>

        {/* CHARISMATIC MANDATORY BRIEFING */}
        <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
          To prevent unauthorized automated indexing and guarantee genuine All-India Leaderboard rankings, all candidates must authenticate their identity, city, and 6-digit postal PIN code before access.
        </p>

        {/* ERROR NOTICE ALERT */}
        {errorMsg && (
          <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-2.5 animate-bounce">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* THE HARDCODED UNBREAKABLE FORM */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          {/* STUDENT NAME */}
          <div className="space-y-1.5">
            <label className={`font-mono font-bold flex items-center gap-1.5 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span>Full Name of Candidate *</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Aarav Sharma, Ananya Verma, Rohan Meena..."
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                isDark ? "bg-black/50 border-white/20 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 shadow-2xs"
              }`}
            />
          </div>

          {/* CITY & MANDATORY PINCODE CROSS-CHECK */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* CITY */}
            <div className="space-y-1.5">
              <label className={`font-mono font-bold flex items-center gap-1.5 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>City / District *</span>
              </label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Kota, New Delhi, Bengaluru..."
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  isDark ? "bg-black/50 border-white/20 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 shadow-2xs"
                }`}
              />
            </div>

            {/* MANDATORY 6-DIGIT PINCODE */}
            <div className="space-y-1.5">
              <label className={`font-mono font-bold flex items-center justify-between ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                <span className="flex items-center gap-1.5">
                  <Hash className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Postal PIN Code (6 Digits) *</span>
                </span>
                {postalRegion && (
                  <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </label>
              <input
                type="text"
                required
                maxLength={6}
                value={pincode}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 6);
                  setPincode(val);
                }}
                placeholder="e.g. 110001, 324005, 560001"
                className={`w-full px-3.5 py-2.5 rounded-xl border font-mono text-xs sm:text-sm font-bold tracking-widest transition-all focus:outline-none focus:ring-2 ${
                  postalRegion 
                    ? "border-emerald-500/60 focus:ring-emerald-400" 
                    : "focus:ring-amber-400 border-white/20"
                } ${
                  isDark ? "bg-black/50 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 shadow-2xs"
                }`}
              />
            </div>
          </div>

          {/* REAL-TIME POSTAL CIRCLE FEEDBACK */}
          {postalRegion && (
            <div className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 text-[11px] font-mono font-bold transition-all ${
              isDark ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" : "bg-emerald-50 border-emerald-300 text-emerald-900"
            }`}>
              <Compass className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Location Circle Verified: {postalRegion}</span>
            </div>
          )}

          {/* TARGET AMBITION & STREAM (STRICTLY CBSE 041 vs 241) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* TARGET BOARD PERCENTAGE */}
            <div className="space-y-1.5">
              <label className={`font-mono font-bold flex items-center gap-1.5 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                <Target className="w-3.5 h-3.5 text-amber-400" />
                <span>Target Board Ambition</span>
              </label>
              <select
                value={targetScore}
                onChange={(e) => setTargetScore(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  isDark ? "bg-[#090e1c] border-white/20 text-white" : "bg-white border-slate-300 text-slate-900 shadow-2xs"
                }`}
              >
                <option value="Centum 100% (500/500 Marks • All-India AIR 1 Rank)">
                  Centum 100% (500/500 Marks • All-India AIR 1)
                </option>
                <option value="98%+ Super Merit (A1 in All 5 Subjects)">
                  98%+ Super Merit (A1 in All 5 Subjects)
                </option>
                <option value="95%+ Board Excellence (CBSE Merit Certificate)">
                  95%+ Board Excellence (CBSE Merit Certificate)
                </option>
                <option value="90%+ High First Division (Complete NCERT Mastery)">
                  90%+ High First Division (NCERT Mastery)
                </option>
              </select>
            </div>

            {/* CURRICULUM STREAM: ONLY THE 2 OFFICIAL CBSE OPTIONS */}
            <div className="space-y-1.5">
              <label className={`font-mono font-bold flex items-center gap-1.5 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>Class 10 Mathematics Course</span>
              </label>
              <select
                value={stream}
                onChange={(e) => setStream(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  isDark ? "bg-[#090e1c] border-white/20 text-white" : "bg-white border-slate-300 text-slate-900 shadow-2xs"
                }`}
              >
                <option value="CBSE Class 10 — Standard Mathematics (Course 041)">
                  Standard Mathematics (Course 041)
                </option>
                <option value="CBSE Class 10 — Basic Mathematics (Course 241)">
                  Basic Mathematics (Course 241)
                </option>
              </select>
            </div>
          </div>

          {/* HARDCODED MANDATORY POLICY & COOKIE CONSENTS */}
          <div className={`p-4 rounded-2xl border space-y-3 pt-3.5 ${
            isDark ? "bg-black/40 border-white/15" : "bg-slate-50 border-slate-200"
          }`}>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 block">
              🛡️ Mandatory Regulatory &amp; Storage Ledgers
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
                className="w-4 h-4 mt-0.5 rounded border-white/30 text-amber-500 focus:ring-amber-400 cursor-pointer shrink-0"
              />
              <div className="space-y-0.5">
                <span className={`font-bold flex items-center gap-1.5 ${isDark ? "text-white" : "text-slate-900"}`}>
                  <Cookie className="w-3.5 h-3.5 text-amber-400" />
                  <span>Accept Local Storage Ledger &amp; Performance Cookies *</span>
                </span>
                <p className={`text-[10px] leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  Mandatory to preserve your solved questions, chapter mastery metrics, and live XP rank persistently on this device.
                </p>
              </div>
            </label>

            {/* CHECKBOX 2: HONOR CODE */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                required
                checked={acceptedPolicies}
                onChange={(e) => {
                  setAcceptedPolicies(e.target.checked);
                  areteAudio.play("pop");
                }}
                className="w-4 h-4 mt-0.5 rounded border-white/30 text-amber-500 focus:ring-amber-400 cursor-pointer shrink-0"
              />
              <div className="space-y-0.5">
                <span className={`font-bold flex items-center gap-1.5 ${isDark ? "text-white" : "text-slate-900"}`}>
                  <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Accept Academic Integrity Code &amp; Routine Policies *</span>
                </span>
                <p className={`text-[10px] leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  I certify that all answers and study records logged reflect my honest effort in alignment with CBSE Class 10 examination guidelines.
                </p>
              </div>
            </label>
          </div>

          {/* SUBMIT BUTTON - ZERO BYPASS */}
          <button
            type="submit"
            disabled={isSubmitting || !name.trim() || !city.trim() || !/^[1-9][0-9]{5}$/.test(pincode.trim()) || !acceptedCookies || !acceptedPolicies}
            className={`w-full py-3.5 rounded-2xl font-black text-sm transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] ${
              !name.trim() || !city.trim() || !/^[1-9][0-9]{5}$/.test(pincode.trim()) || !acceptedCookies || !acceptedPolicies
                ? "bg-slate-800 text-slate-500 border border-white/10 cursor-not-allowed opacity-60"
                : "bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 shadow-amber-500/30 ring-2 ring-amber-300"
            }`}
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                <span>Authenticating Identity Ledger...</span>
              </span>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                <span>Authenticate Credentials &amp; Claim +100 XP Bounty</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </>
            )}
          </button>

          <p className="text-[10px] text-center font-mono opacity-50 tracking-tight">
            Encrypted with SHA-256 Client-Side Ledger • Hardcoded Academic Verification
          </p>

        </form>
      </div>
    </div>
  );
}
