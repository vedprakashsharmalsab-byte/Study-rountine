"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { 
  Search, 
  X, 
  BookOpen, 
  Award, 
  Calendar, 
  Flame, 
  BookMarked, 
  AlertTriangle,
  ArrowRight,
  Zap
} from "lucide-react";
import { THEOREMS_AND_EXAMPLES_BANK } from "@/data/theoremsAndExamples";
import { ENRICHED_SST_TIMELINES } from "@/data/sstTimelinesData";
import { COMPETITIVE_HOTS_BANK } from "@/data/competitiveHotsData";
import { CBSE_SUBJECTS, CHAPTER_WISE_FLASHCARDS } from "@/data/cbseData";

export interface SearchResultItem {
  id: string;
  type: "chapter" | "theorem" | "timeline" | "hots" | "flashcard" | "mistake";
  title: string;
  subtitle: string;
  badge: string;
  action: () => void;
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  onNavigateTab: (tab: string, options?: { subject?: string; chapter?: number }) => void;
}

export default function GlobalSearchModal({
  isOpen,
  onClose,
  isDark,
  onNavigateTab
}: GlobalSearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Keyboard shortcut listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open via custom event or state handled by parent
          window.dispatchEvent(new CustomEvent("cbse:open_search"));
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Compile search index
  const searchIndex: SearchResultItem[] = useMemo(() => {
    const items: SearchResultItem[] = [];

    // 1. Chapters
    CBSE_SUBJECTS.forEach((sub) => {
      sub.chapters.forEach((ch, idx) => {
        const chNo = ch.ncertChapterNo ?? (idx + 1);
        items.push({
          id: `ch_${sub.id}_${chNo}`,
          type: "chapter",
          title: `Ch ${chNo}: ${ch.name}`,
          subtitle: `${sub.name} · ${ch.topics.length} NCERT Topics`,
          badge: sub.name,
          action: () => {
            onNavigateTab("concepts", { subject: sub.id, chapter: chNo });
            onClose();
          }
        });
      });
    });

    // 2. Theorems (25 proofs)
    THEOREMS_AND_EXAMPLES_BANK.forEach((thm) => {
      items.push({
        id: `thm_${thm.id}`,
        type: "theorem",
        title: thm.title,
        subtitle: `${thm.chapterName} · ${thm.boardFrequency} · ${thm.ncertReference}`,
        badge: "Theorem Proof",
        action: () => {
          onNavigateTab("theorems");
          onClose();
        }
      });
    });

    // 3. SST Timelines (56 dated events)
    ENRICHED_SST_TIMELINES.forEach((ev) => {
      items.push({
        id: `time_${ev.id}`,
        type: "timeline",
        title: `${ev.year}: ${ev.event}`,
        subtitle: `${ev.chapterTitle} · ${ev.significance.slice(0, 75)}...`,
        badge: "SST Timeline",
        action: () => {
          onNavigateTab("timelines");
          onClose();
        }
      });
    });

    // 4. HOTS Questions (40 questions)
    COMPETITIVE_HOTS_BANK.forEach((q) => {
      items.push({
        id: `hots_${q.id}`,
        type: "hots",
        title: q.title,
        subtitle: `${q.chapterName} · ${q.questionText.slice(0, 80)}...`,
        badge: "HOTS Vault",
        action: () => {
          onNavigateTab("hots");
          onClose();
        }
      });
    });

    // 5. Flashcards
    CHAPTER_WISE_FLASHCARDS.forEach((fc) => {
      items.push({
        id: `fc_${fc.id}`,
        type: "flashcard",
        title: fc.frontQuestion,
        subtitle: `${fc.subject} · ${fc.chapter} · ${(fc.backAnswer || '').slice(0, 75)}...`,
        badge: "Flashcard",
        action: () => {
          onNavigateTab("flashcards");
          onClose();
        }
      });
    });

    return items;
  }, [onNavigateTab, onClose]);

  // Filtered results
  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      return searchIndex.slice(0, 8); // Top default suggestions
    }
    const q = query.toLowerCase();
    return searchIndex
      .filter((item) => 
        item.title.toLowerCase().includes(q) || 
        item.subtitle.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q)
      )
      .slice(0, 25);
  }, [query, searchIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div 
        className={`w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden flex flex-col max-h-[80vh] ${
          isDark ? "bg-[#0b0f19] border-white/15 text-white" : "bg-white border-slate-200 text-slate-900"
        }`}
      >
        {/* SEARCH BAR */}
        <div className="p-4 sm:p-5 border-b border-current/10 flex items-center gap-3">
          <Search className={`w-5 h-5 shrink-0 ${isDark ? "text-amber-400" : "text-amber-600"}`} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chapters, theorems, formulas, HOTS, timelines (e.g. 'quadratic', 'BPT', '1804')..."
            className={`w-full bg-transparent text-sm sm:text-base font-bold focus:outline-none ${
              isDark ? "placeholder:text-zinc-500 text-white" : "placeholder:text-slate-400 text-slate-900"
            }`}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className={`p-1 rounded-lg text-zinc-400 cursor-pointer ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <div className={`hidden sm:flex items-center gap-1 text-[10px] font-mono border px-2 py-0.5 rounded ${
            isDark ? "text-zinc-400 border-white/10" : "text-slate-500 border-slate-300"
          }`}>
            <span>ESC</span>
          </div>
        </div>

        {/* RESULTS LIST */}
        <div className="p-2 sm:p-3 overflow-y-auto space-y-1.5 flex-1">
          {filteredResults.length === 0 ? (
            <div className={`p-8 text-center text-xs ${isDark ? "text-zinc-500" : "text-slate-500 font-medium"}`}>
              No matching chapters, theorems, or questions found for "{query}".
            </div>
          ) : (
            filteredResults.map((item) => {
              const iconMap = {
                chapter: <BookOpen className={`w-4 h-4 ${isDark ? "text-blue-400" : "text-blue-600"}`} />,
                theorem: <Award className={`w-4 h-4 ${isDark ? "text-amber-400" : "text-amber-600"}`} />,
                timeline: <Calendar className={`w-4 h-4 ${isDark ? "text-orange-400" : "text-orange-600"}`} />,
                hots: <Flame className={`w-4 h-4 ${isDark ? "text-rose-400" : "text-rose-600"}`} />,
                flashcard: <BookMarked className={`w-4 h-4 ${isDark ? "text-purple-400" : "text-purple-600"}`} />,
                mistake: <AlertTriangle className={`w-4 h-4 ${isDark ? "text-red-400" : "text-red-600"}`} />
              };

              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`w-full p-3 rounded-2xl text-left flex items-start gap-3 transition-all cursor-pointer group ${
                    isDark 
                      ? "hover:bg-white/5 border border-transparent hover:border-white/10" 
                      : "hover:bg-slate-100 border border-transparent hover:border-slate-200"
                  }`}
                >
                  <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${isDark ? "bg-white/5" : "bg-slate-100"}`}>
                    {iconMap[item.type] || <Zap className={`w-4 h-4 ${isDark ? "text-amber-400" : "text-amber-600"}`} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`font-bold text-xs sm:text-sm truncate transition-colors ${
                        isDark ? "group-hover:text-amber-400" : "group-hover:text-amber-700 text-slate-900"
                      }`}>
                        {item.title}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-bold shrink-0 border ${
                        isDark ? "bg-white/10 text-zinc-300 border-white/10" : "bg-slate-100 text-slate-700 border-slate-200"
                      }`}>
                        {item.badge}
                      </span>
                    </div>
                    <p className={`text-[11px] truncate mt-0.5 ${isDark ? "text-zinc-400" : "text-slate-600"}`}>
                      {item.subtitle}
                    </p>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 self-center transition-colors ${
                    isDark ? "text-zinc-600 group-hover:text-amber-400" : "text-slate-400 group-hover:text-amber-700"
                  }`} />
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
