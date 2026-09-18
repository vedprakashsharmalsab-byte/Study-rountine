"use client";

import React, { useState } from "react";
import { 
  Laptop, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Award, 
  AlertCircle,
  ExternalLink,
  Sparkles,
  Zap,
  Code
} from "lucide-react";

interface ITModuleViewProps {
  isDark: boolean;
  onOpenQuestionBank?: () => void;
}

interface ITChapter {
  id: string;
  part: "Part A: Employability Skills (10M)" | "Part B: Subject Specific Skills (40M)";
  unitNo: number;
  title: string;
  topics: string[];
  summary: string;
  isReady: boolean;
}

const IT_CHAPTERS: ITChapter[] = [
  // Part A
  {
    id: "it_part_a_u1",
    part: "Part A: Employability Skills (10M)",
    unitNo: 1,
    title: "Communication Skills - II",
    topics: ["Methods of Communication (Verbal, Non-Verbal, Visual)", "Communication Cycle & Feedback", "Barriers to Effective Communication", "Principles of Effective Communication (7Cs)"],
    summary: "Clear exchange of information between sender and receiver. Feedback ensures message fidelity. 7Cs: Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous.",
    isReady: true
  },
  {
    id: "it_part_a_u2",
    part: "Part A: Employability Skills (10M)",
    unitNo: 2,
    title: "Self-Management Skills - II",
    topics: ["Stress Management Techniques", "Ability to Work Independently", "Self-Motivation & Goal Setting"],
    summary: "Managing personal time, emotions, and priorities. Stress relievers: yoga, meditation, physical exercise, and nature walks.",
    isReady: true
  },
  {
    id: "it_part_a_u3",
    part: "Part A: Employability Skills (10M)",
    unitNo: 3,
    title: "ICT Skills - II",
    topics: ["Operating Systems Basics", "File and Folder Management", "Care and Maintenance of Computer", "Computer Viruses and Antivirus"],
    summary: "Disk defragmentation, safe browsing, spam filters, firewall, and basic system diagnostics.",
    isReady: true
  },
  {
    id: "it_part_a_u4",
    part: "Part A: Employability Skills (10M)",
    unitNo: 4,
    title: "Entrepreneurial Skills - II",
    topics: ["Characteristics of an Entrepreneur", "Role of Entrepreneurship in Society", "Myths about Entrepreneurship"],
    summary: "Risk taking, innovation, problem solving, resource mobilization, and self-confidence.",
    isReady: true
  },
  {
    id: "it_part_a_u5",
    part: "Part A: Employability Skills (10M)",
    unitNo: 5,
    title: "Green Skills - II",
    topics: ["Sustainable Development Goals (SDGs)", "Importance of Green Economy", "Conservation of Natural Resources"],
    summary: "17 SDGs established by the UN. Minimizing ecological footprint and transitioning to renewable energy.",
    isReady: true
  },

  // Part B
  {
    id: "it_part_b_u1",
    part: "Part B: Subject Specific Skills (40M)",
    unitNo: 1,
    title: "Digital Documentation (Advanced) - LibreOffice Writer",
    topics: ["Styles and Formatting Window (F11)", "Inserting Images & Drawing Objects (Wrap Options)", "Creating & Using Templates (.ott)", "Table of Contents (TOC) Customization", "Mail Merge Wizard (Data Source Linking)"],
    summary: "Advanced word processing: Style categories (Paragraph, Character, Frame, Page, List). Mail merge eliminates repetitive typing for notices and certificates.",
    isReady: true
  },
  {
    id: "it_part_b_u2",
    part: "Part B: Subject Specific Skills (40M)",
    unitNo: 2,
    title: "Electronic Spreadsheet (Advanced) - LibreOffice Calc",
    topics: ["Consolidating Data from Multiple Sheets", "Creating Subtotals & Scenarios", "Goal Seek (Single Variable) & Solver", "Linking Spreadsheet Data & Hyperlinks", "Sharing & Reviewing Changes", "Recording & Running Macros"],
    summary: "What-If analysis tools: Goal Seek finds unknown input for target output. Macros automate repetitive spreadsheet tasks using recorded scripts.",
    isReady: true
  },
  {
    id: "it_part_b_u3",
    part: "Part B: Subject Specific Skills (40M)",
    unitNo: 3,
    title: "Database Management System (DBMS) - Base / SQL",
    topics: ["DBMS vs Flat File Systems", "Primary Key, Composite Key & Foreign Key", "Tables, Queries, Forms & Reports", "DDL (CREATE, ALTER, DROP) vs DML (SELECT, INSERT, UPDATE, DELETE)", "Relational Database Concepts (1:1, 1:M, M:M)"],
    summary: "Data redundancy prevention and referential integrity. Primary key uniquely identifies each record; foreign key establishes relations between tables.",
    isReady: true
  },
  {
    id: "it_part_b_u4",
    part: "Part B: Subject Specific Skills (40M)",
    unitNo: 4,
    title: "Web Applications and Security",
    topics: ["Accessibility Options (StickyKeys, FilterKeys, ToggleKeys)", "Network Fundamentals (LAN, MAN, WAN, P2P, Client-Server)", "Instant Messaging & Blogs (WordPress, Blogger)", "Online Transactions & E-Commerce Security", "Internet Security Threats (Phishing, Spyware, Trojan)", "Workplace Safety & Ergonomics"],
    summary: "Ensuring cyber safety: HTTPS protocol, SSL certificates, strong password policies, and anti-phishing hygiene.",
    isReady: true
  }
];

export default function ITModuleView({ isDark, onOpenQuestionBank }: ITModuleViewProps) {
  const [selectedChapterId, setSelectedChapterId] = useState<string>("it_part_b_u1");

  const activeChapter = IT_CHAPTERS.find((c) => c.id === selectedChapterId) || IT_CHAPTERS[0];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* HEADER HERO */}
      <div 
        className={`p-6 sm:p-8 rounded-3xl border transition-all ${
          isDark 
            ? "bg-gradient-to-br from-[#0c1427] via-[#0f172a] to-[#070b14] border-white/10 text-white shadow-xl" 
            : "bg-gradient-to-br from-cyan-50 via-white to-blue-50 border-slate-200 text-slate-900 shadow-md"
        }`}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-2xl ${
              isDark ? "bg-cyan-500/20 text-cyan-400" : "bg-cyan-100 text-cyan-800"
            }`}>
              <Laptop className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight">
                  Information Technology (Code 402)
                </h1>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold border ${
                  isDark ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30" : "bg-cyan-100 text-cyan-950 border-cyan-300 font-black"
                }`}>
                  50M Theory + 50M Practical
                </span>
              </div>
              <p className={`text-xs sm:text-sm mt-1 ${isDark ? "text-zinc-400" : "text-slate-600 font-medium"}`}>
                Official CBSE Class 10 Skill Subject Curriculum: LibreOffice Writer, Calc, Base DBMS, and Web Security.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className={`px-3 py-1.5 rounded-xl border ${
              isDark ? "bg-white/5 border-white/10 text-zinc-300" : "bg-slate-100 border-slate-200 text-slate-800 font-bold"
            }`}>
              {IT_CHAPTERS.length} Units Covered
            </span>
          </div>
        </div>
      </div>

      {/* CHAPTER SELECTOR & CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* SIDEBAR: CHAPTER LIST */}
        <div className="lg:col-span-4 space-y-3">
          <span className={`text-xs font-mono font-bold uppercase tracking-wider block px-1 ${
            isDark ? "text-cyan-400" : "text-cyan-800"
          }`}>
            Curriculum Units:
          </span>
          <div className="space-y-2">
            {IT_CHAPTERS.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setSelectedChapterId(ch.id)}
                className={`w-full p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                  selectedChapterId === ch.id
                    ? isDark
                      ? "bg-cyan-500/20 border-cyan-500 text-cyan-200 font-bold shadow-md"
                      : "bg-cyan-50 border-cyan-400 text-cyan-950 font-bold shadow-xs"
                    : isDark
                    ? "bg-white/[0.02] border-white/5 hover:bg-white/5 text-zinc-300"
                    : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
                }`}
              >
                <div className={`flex items-center justify-between text-[10px] font-mono mb-1 ${
                  isDark ? "text-zinc-400" : "text-slate-600 font-medium"
                }`}>
                  <span>Unit {ch.unitNo}</span>
                  <span className="truncate max-w-[150px]">{ch.part.split(":")[0]}</span>
                </div>
                <h3 className="text-xs sm:text-sm leading-snug line-clamp-2">
                  {ch.title}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN: CHAPTER STUDY NOTES & PRACTICE SLOTS */}
        <div className="lg:col-span-8 space-y-5">
          <div className={`p-6 rounded-3xl border ${
            isDark ? "bg-[#0b0f19] border-white/10" : "bg-white border-slate-200 shadow-xs"
          }`}>
            <div className="flex items-center justify-between border-b border-current/10 pb-4 mb-4">
              <div>
                <span className={`text-xs font-mono font-bold ${
                  isDark ? "text-cyan-400" : "text-cyan-800"
                }`}>
                  {activeChapter.part}
                </span>
                <h2 className="text-lg sm:text-xl font-black mt-0.5">
                  Unit {activeChapter.unitNo}: {activeChapter.title}
                </h2>
              </div>
              <span className={`text-xs font-mono px-2.5 py-1 rounded-full border font-bold ${
                isDark ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20" : "bg-emerald-50 text-emerald-800 border-emerald-300"
              }`}>
                100% Board Syllabus
              </span>
            </div>

            {/* SUMMARY PILL */}
            <div className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed mb-5 ${
              isDark ? "bg-white/5 border-white/10 text-zinc-300" : "bg-slate-50 border-slate-200 text-slate-800"
            }`}>
              <strong className={`block mb-1 font-mono uppercase text-xs ${
                isDark ? "text-cyan-400" : "text-cyan-800"
              }`}>Core Concept Summary:</strong>
              {activeChapter.summary}
            </div>

            {/* TOPICS BREAKDOWN */}
            <div className="space-y-3">
              <h3 className={`text-xs font-mono font-bold uppercase tracking-wider ${
                isDark ? "text-zinc-400" : "text-slate-600"
              }`}>
                Mandatory CBSE Learning Objectives:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeChapter.topics.map((t, idx) => (
                  <div 
                    key={idx}
                    className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                      isDark ? "bg-black/30 border-white/5 text-zinc-300" : "bg-slate-50 border-slate-200 text-slate-700"
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? "text-cyan-400" : "text-cyan-700"}`} />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BOARD QUESTIONS SLOT */}
            <div className="mt-6 pt-5 border-t border-current/10">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                  isDark ? "text-amber-400" : "text-amber-800"
                }`}>
                  <Award className="w-4 h-4" /> Board Exam Question Bank:
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                  isDark ? "bg-amber-500/10 text-amber-300 border-amber-500/20" : "bg-amber-100 text-amber-900 border-amber-300 font-bold"
                }`}>
                  Updated for 2026–27
                </span>
              </div>
              <div className={`p-4 rounded-2xl border text-xs space-y-2 text-center ${
                isDark ? "bg-amber-950/20 border-amber-500/20 text-amber-200" : "bg-amber-50 border-amber-200 text-amber-900"
              }`}>
                <p className="font-semibold">
                  Sample MCQs, 2-Mark Short Answers, and 4-Mark Scenario Questions for Unit {activeChapter.unitNo}.
                </p>
                <p className="text-[11px] opacity-80">
                  Practice questions for this unit are synced with CBSE official sample paper guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
