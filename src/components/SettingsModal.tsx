"use client";

import React, { useState, useRef } from "react";
import { 
  X, 
  Download, 
  Upload, 
  CheckCircle2, 
  AlertTriangle, 
  Calendar, 
  RotateCcw,
  Sparkles,
  Settings as SettingsIcon,
  ShieldCheck,
  FileJson
} from "lucide-react";
import { appStorage, STORAGE_KEYS } from "@/lib/storage";
import { ACADEMIC_CALENDAR } from "../../config/academic-calendar";
import { PERSONAL_CONFIG } from "../../config/personal";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  onResetProgress: () => void;
  showToast: (amount: number, text: string) => void;
}

export default function SettingsModal({
  isOpen,
  onClose,
  isDark,
  onResetProgress,
  showToast
}: SettingsModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [lastExport, setLastExport] = useState<string | null>(() => appStorage.getLastExportDate());
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);

  if (!isOpen) return null;

  const handleExport = () => {
    try {
      const backup = appStorage.exportData();
      const jsonStr = JSON.stringify(backup, null, 2);
      const blob = new Blob([jsonStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const dateStr = new Date().toISOString().split("T")[0];
      a.href = url;
      a.download = `cbse10-study-routine-backup-${dateStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      const nowStr = new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
      setLastExport(nowStr);
      showToast(25, "Backup Exported Successfully");
    } catch (e: any) {
      alert("Failed to export backup: " + e.message);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const res = appStorage.importData(text);
        if (res.success) {
          setImportStatus(`Successfully restored ${res.count} study keys!`);
          showToast(50, `Restored ${res.count} Keys from Backup`);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          setImportStatus(`Error: ${res.error || "Failed to restore data"}`);
        }
      } catch (err: any) {
        setImportStatus(`Parse error: ${err.message}`);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div 
        className={`w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden flex flex-col max-h-[90vh] ${
          isDark ? "bg-[#0b0f19] border-white/15 text-white" : "bg-white border-slate-200 text-slate-900"
        }`}
      >
        {/* HEADER */}
        <div className="px-5 sm:px-6 py-4 border-b border-current/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-2xl bg-amber-500/20 text-amber-400">
              <SettingsIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black tracking-tight">Study Settings & Backup</h3>
              <p className="text-[11px] text-zinc-400">CBSE Class 10 Data Portability & Safety</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              isDark ? "hover:bg-white/10 text-slate-400 hover:text-white" : "hover:bg-slate-100 text-slate-500 hover:text-slate-900"
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto">
          {/* 1. DATA BACKUP & EXPORT/IMPORT (DEFECT C1) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                isDark ? "text-amber-400" : "text-amber-700"
              }`}>
                <ShieldCheck className="w-4 h-4" /> Data Portability (Backup & Restore)
              </span>
              {lastExport && (
                <span className={`text-[10px] font-mono ${isDark ? "text-zinc-400" : "text-slate-600 font-medium"}`}>
                  Last backup: {new Date(lastExport).toLocaleDateString()}
                </span>
              )}
            </div>
            
            <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700 font-medium"}`}>
              Export your completed topics, streak, mistake logs, flashcard mastery, and solved questions into an open JSON file. Transfer across devices or keep a local backup.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <button
                onClick={handleExport}
                className={`px-4 py-3 rounded-2xl border flex items-center justify-center gap-2 font-bold text-xs transition-all cursor-pointer active:scale-95 shadow-xs ${
                  isDark
                    ? "bg-gradient-to-r from-amber-500/15 to-orange-500/15 border-amber-500/40 text-amber-300 hover:bg-amber-500/25"
                    : "bg-amber-50 border-amber-300 text-amber-900 hover:bg-amber-100"
                }`}
              >
                <Download className="w-4 h-4" />
                <span>Export JSON Backup</span>
              </button>

              <button
                onClick={() => fileInputRef.current?.click()}
                className={`px-4 py-3 rounded-2xl border flex items-center justify-center gap-2 font-bold text-xs transition-all cursor-pointer active:scale-95 ${
                  isDark
                    ? "bg-white/5 hover:bg-white/10 border-white/15 text-slate-200"
                    : "bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800"
                }`}
              >
                <Upload className="w-4 h-4" />
                <span>Import JSON Backup</span>
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {importStatus && (
              <div className={`p-3 rounded-xl text-xs font-mono flex items-center gap-2 border ${
                importStatus.startsWith("Error") 
                  ? (isDark ? "bg-rose-500/10 border-rose-500/30 text-rose-300" : "bg-rose-50 border-rose-300 text-rose-800 font-semibold")
                  : (isDark ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" : "bg-emerald-50 border-emerald-300 text-emerald-800 font-semibold")
              }`}>
                <FileJson className="w-4 h-4 shrink-0" />
                <span>{importStatus}</span>
              </div>
            )}
          </div>

          {/* 2. ACADEMIC CALENDAR DATES (DEFECT C10) */}
          <div className="space-y-2 pt-2 border-t border-current/10">
            <span className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${
              isDark ? "text-cyan-400" : "text-cyan-800"
            }`}>
              <Calendar className="w-4 h-4" /> Academic Calendar Targets
            </span>
            <div className={`p-3 rounded-2xl border text-xs space-y-1.5 font-mono ${
              isDark ? "bg-black/30 border-white/5 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-700"
            }`}>
              <div className="flex justify-between">
                <span className={isDark ? "text-zinc-400" : "text-slate-600 font-medium"}>Board Exam Start:</span>
                <span className={`font-bold ${isDark ? "text-amber-400" : "text-amber-800"}`}>{ACADEMIC_CALENDAR.boardExamStartDate}</span>
              </div>
              <div className="flex justify-between">
                <span className={isDark ? "text-zinc-400" : "text-slate-600 font-medium"}>Test Series 1 Window:</span>
                <span className={`font-bold ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
                  {ACADEMIC_CALENDAR.testSeries1.startDate} – {ACADEMIC_CALENDAR.testSeries1.endDate}
                </span>
              </div>
              <div className="flex justify-between">
                <span className={isDark ? "text-zinc-400" : "text-slate-600 font-medium"}>Affiliation Standard:</span>
                <span className="font-bold">{PERSONAL_CONFIG.schoolName}</span>
              </div>
            </div>
          </div>

          {/* 3. RESET PROGRESS */}
          <div className="space-y-2 pt-2 border-t border-current/10">
            <span className={`text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 ${
              isDark ? "text-rose-400" : "text-rose-700"
            }`}>
              <AlertTriangle className="w-4 h-4" /> Danger Zone
            </span>
            {!isResetConfirmOpen ? (
              <button
                onClick={() => setIsResetConfirmOpen(true)}
                className={`w-full px-4 py-2.5 rounded-2xl border font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  isDark
                    ? "border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300"
                    : "border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-700"
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Study Progress</span>
              </button>
            ) : (
              <div className={`p-3.5 rounded-2xl border text-xs space-y-3 ${
                isDark ? "border-rose-500/50 bg-rose-950/40 text-rose-200" : "border-rose-300 bg-rose-50 text-rose-900"
              }`}>
                <p className="font-semibold">Are you sure you want to reset all XP, streaks, completed topics, and mistake logs to zero?</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      onResetProgress();
                      setIsResetConfirmOpen(false);
                      onClose();
                    }}
                    className="flex-1 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all cursor-pointer"
                  >
                    Confirm Reset
                  </button>
                  <button
                    onClick={() => setIsResetConfirmOpen(false)}
                    className={`px-4 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                      isDark ? "bg-white/10 hover:bg-white/20 text-slate-300" : "bg-slate-200 hover:bg-slate-300 text-slate-800"
                    }`}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 4. ADMINISTRATOR PORTAL */}
          <div className="space-y-2 pt-2 border-t border-current/10">
            <a
              href="/admin"
              className={`w-full px-4 py-2.5 rounded-2xl border font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                isDark
                  ? "border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300"
                  : "border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Administrator Portal</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
