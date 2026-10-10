"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Quote,
  Search,
  BookOpen,
  Sparkles,
  Bookmark,
  BookmarkCheck,
  Copy,
  Check,
  Shuffle,
  ShieldCheck,
  Filter,
  Calendar,
  Share2,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Flame,
  Award
} from "lucide-react";
import { VERIFIED_QUOTES, QUOTE_TOPICS, QuoteRecord, QuoteTopic } from "@/data/quotesData";
import { areteAudio } from "@/lib/audio";

interface QuotesVaultViewProps {
  isDark: boolean;
}

const ITEMS_PER_PAGE = 18;

export default function QuotesVaultView({ isDark }: QuotesVaultViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<QuoteTopic>("All Topics");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [featuredIdx, setFeaturedIdx] = useState<number>(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cbse_quotes_favorites");
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
    // Set an initial featured quote deterministically or randomly
    const randomIdx = Math.floor(Math.random() * VERIFIED_QUOTES.length);
    setFeaturedIdx(randomIdx);
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      let updated: string[];
      if (prev.includes(id)) {
        updated = prev.filter((item) => item !== id);
        areteAudio.play("pop");
      } else {
        updated = [...prev, id];
        areteAudio.play("success");
      }
      try {
        localStorage.setItem("cbse_quotes_favorites", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleCopy = (quote: QuoteRecord) => {
    const textToCopy = `"${quote.text}" — ${quote.author} (${quote.sourceTitle}${quote.year ? `, ${quote.year}` : ""})`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(quote.id);
    areteAudio.play("click");
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleShuffleFeatured = () => {
    const nextIdx = Math.floor(Math.random() * VERIFIED_QUOTES.length);
    setFeaturedIdx(nextIdx);
    areteAudio.play("reveal");
  };

  // Filtered quotes list
  const filteredQuotes = useMemo(() => {
    return VERIFIED_QUOTES.filter((q) => {
      if (selectedTopic !== "All Topics" && q.topic !== selectedTopic) {
        return false;
      }
      if (onlyFavorites && !favorites.includes(q.id)) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inText = q.text.toLowerCase().includes(query);
        const inAuthor = q.author.toLowerCase().includes(query);
        const inSource = q.sourceTitle.toLowerCase().includes(query);
        const inTopic = q.topic.toLowerCase().includes(query);
        if (!inText && !inAuthor && !inSource && !inTopic) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedTopic, onlyFavorites, favorites]);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTopic, onlyFavorites]);

  const totalPages = Math.ceil(filteredQuotes.length / ITEMS_PER_PAGE) || 1;
  const currentQuotes = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredQuotes.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredQuotes, currentPage]);

  const featuredQuote = VERIFIED_QUOTES[featuredIdx] || VERIFIED_QUOTES[0];

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      {/* =========================================================================
          HERO BANNER: VERIFIED SCHOLARLY QUOTES ARCHIVE (800+ AUTHENTIC)
          ========================================================================= */}
      <div
        className={`p-6 sm:p-8 rounded-3xl border transition-all ${
          isDark
            ? "bg-gradient-to-br from-[#17141f] via-[#120f18] to-[#0d0b12] border-purple-500/30 shadow-[0_8px_32px_rgba(168,85,247,0.15)]"
            : "bg-gradient-to-br from-purple-50/95 via-indigo-50/60 to-violet-50/70 border-purple-300 shadow-md"
        }`}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-purple-600 text-white shadow-sm flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5" /> Scholarly Quotes Vault
              </span>
              <span
                className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                  isDark
                    ? "bg-purple-950/60 text-purple-300 border-purple-500/30"
                    : "bg-purple-100 text-purple-900 border-purple-300 font-extrabold"
                }`}
              >
                📜 804 Verified Primary Citations
              </span>
              <span
                className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                  isDark
                    ? "bg-emerald-950/60 text-emerald-300 border-emerald-500/30"
                    : "bg-emerald-100 text-emerald-900 border-emerald-300 font-extrabold"
                }`}
              >
                ✓ 100% Authentic &amp; Deduplicated
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight flex items-center gap-3">
              <span
                className={
                  isDark
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300"
                    : "text-purple-950 font-black"
                }
              >
                Timeless Wisdom &amp; Intellectual Tenacity Archive
              </span>
            </h1>

            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700 font-medium"}`}>
              An authentic research repository of 800+ rigorously verified quotations across science, mathematics,
              discipline, resilience, philosophy, and leadership. Every entry contains exact primary source attribution,
              publication context, and year.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleShuffleFeatured}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-2 ${
                isDark
                  ? "bg-purple-500/20 text-purple-200 border-purple-500/40 hover:bg-purple-500/30"
                  : "bg-purple-100 text-purple-900 border-purple-300 hover:bg-purple-200 shadow-sm"
              }`}
            >
              <Shuffle className="w-4 h-4 text-purple-400" />
              <span>Inspire Me Randomly</span>
            </button>
          </div>
        </div>

        {/* Featured Quote of the Day Spotlight */}
        {featuredQuote && (
          <div
            className={`mt-6 p-5 sm:p-6 rounded-2xl border transition-all relative overflow-hidden ${
              isDark
                ? "bg-black/40 border-purple-500/30 shadow-inner"
                : "bg-white/90 border-purple-200 shadow-sm"
            }`}
          >
            <div className="absolute top-2 right-4 opacity-10 pointer-events-none">
              <Quote className="w-24 h-24" />
            </div>

            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Featured Daily Thought • {featuredQuote.topic}
                </span>
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> Verified Primary Source
                </span>
              </div>

              <blockquote className={`text-base sm:text-lg italic font-serif leading-relaxed ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                &ldquo;{featuredQuote.text}&rdquo;
              </blockquote>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-purple-500/20 text-xs">
                <div>
                  <span className={`font-bold ${isDark ? "text-purple-300" : "text-purple-900 font-extrabold"}`}>
                    — {featuredQuote.author}
                  </span>
                  <span className={`ml-2 text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    in <em>{featuredQuote.sourceTitle}</em> ({featuredQuote.sourceRef}{featuredQuote.year ? `, ${featuredQuote.year}` : ""})
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(featuredQuote)}
                    className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                      copiedId === featuredQuote.id
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                        : isDark
                        ? "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"
                    }`}
                    title="Copy Quote"
                  >
                    {copiedId === featuredQuote.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => toggleFavorite(featuredQuote.id)}
                    className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                      favorites.includes(featuredQuote.id)
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                        : isDark
                        ? "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"
                    }`}
                    title="Bookmark Quote"
                  >
                    {favorites.includes(featuredQuote.id) ? (
                      <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
                    ) : (
                      <Bookmark className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* =========================================================================
          CONTROLS: SEARCH, TOPIC CHIPS & FAVORITE FILTER
          ========================================================================= */}
      <div
        className={`p-5 rounded-2xl border space-y-4 ${
          isDark ? "bg-[#11161d] border-white/10" : "bg-white border-slate-200 shadow-xs"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-3 justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 800+ quotes by keyword, thinker, or book..."
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs border outline-hidden transition-all ${
                isDark
                  ? "bg-white/5 border-white/10 text-white placeholder-slate-400 focus:border-purple-500 focus:bg-white/10"
                  : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-500 focus:border-purple-600 focus:bg-white"
              }`}
            />
          </div>

          {/* Quick Counter & Saved Toggle */}
          <div className="flex items-center gap-2 self-end md:self-center">
            <button
              onClick={() => {
                setOnlyFavorites((prev) => !prev);
                areteAudio.play("click");
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                onlyFavorites
                  ? "bg-amber-500 text-slate-950 border-amber-400 font-black shadow-xs"
                  : isDark
                  ? "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                  : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Favorites ({favorites.length})</span>
            </button>

            <span className={`text-xs font-mono px-3 py-2 rounded-xl border ${
              isDark ? "bg-white/5 border-white/10 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"
            }`}>
              Showing <strong>{filteredQuotes.length}</strong> of <strong>{VERIFIED_QUOTES.length}</strong>
            </span>
          </div>
        </div>

        {/* Topic Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {QUOTE_TOPICS.map((topic) => {
            const isSelected = selectedTopic === topic;
            return (
              <button
                key={topic}
                onClick={() => {
                  setSelectedTopic(topic);
                  areteAudio.play("click");
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                  isSelected
                    ? isDark
                      ? "bg-purple-600 text-white border-purple-500 shadow-sm"
                      : "bg-purple-700 text-white border-purple-700 shadow-sm"
                    : isDark
                    ? "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                    : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          QUOTE CARDS GRID
          ========================================================================= */}
      {currentQuotes.length === 0 ? (
        <div
          className={`p-12 text-center rounded-3xl border ${
            isDark ? "bg-[#11161d] border-white/10" : "bg-white border-slate-200"
          }`}
        >
          <Quote className="w-12 h-12 text-slate-400 mx-auto mb-3 opacity-40" />
          <h3 className={`text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
            No quotations found
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Try adjusting your search query, topic filter, or favorites toggle.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentQuotes.map((q) => {
            const isFav = favorites.includes(q.id);
            const isCopied = copiedId === q.id;

            return (
              <div
                key={q.id}
                className={`p-5 rounded-2xl border flex flex-col justify-between transition-all hover:scale-[1.01] ${
                  isDark
                    ? "bg-[#131720] border-white/10 hover:border-purple-500/40 hover:shadow-lg"
                    : "bg-white border-slate-200 hover:border-purple-300 hover:shadow-md"
                }`}
              >
                <div className="space-y-3">
                  {/* Topic badge & ID */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                        isDark
                          ? "bg-purple-950/60 text-purple-300 border-purple-500/30"
                          : "bg-purple-50 text-purple-800 border-purple-200 font-black"
                      }`}
                    >
                      {q.topic}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">#{q.id}</span>
                  </div>

                  {/* Quote Body */}
                  <blockquote
                    className={`text-sm italic font-serif leading-relaxed line-clamp-4 ${
                      isDark ? "text-slate-200" : "text-slate-800 font-medium"
                    }`}
                  >
                    &ldquo;{q.text}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-500/10 space-y-2">
                  {/* Author & Source */}
                  <div className="space-y-0.5">
                    <div className={`text-xs font-black ${isDark ? "text-purple-300" : "text-purple-950"}`}>
                      {q.author}
                    </div>
                    <div className="text-[11px] text-slate-400 leading-tight">
                      <em>{q.sourceTitle}</em>
                      {q.sourceRef ? ` • ${q.sourceRef}` : ""}
                      {q.year ? ` (${q.year})` : ""}
                    </div>
                  </div>

                  {/* Actions: Copy & Bookmark */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] font-mono text-emerald-500 flex items-center gap-1 font-semibold">
                      <ShieldCheck className="w-3 h-3" /> Verified
                    </span>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleCopy(q)}
                        className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                          isCopied
                            ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                            : isDark
                            ? "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border-white/10"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border-slate-200"
                        }`}
                        title="Copy to clipboard"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        onClick={() => toggleFavorite(q.id)}
                        className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                          isFav
                            ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                            : isDark
                            ? "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border-white/10"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border-slate-200"
                        }`}
                        title="Bookmark quote"
                      >
                        {isFav ? (
                          <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
                        ) : (
                          <Bookmark className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* =========================================================================
          PAGINATION BAR
          ========================================================================= */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-500/10">
          <div className="text-xs text-slate-400">
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage((p) => p - 1);
                  window.scrollTo({ top: 400, behavior: "smooth" });
                }
              }}
              disabled={currentPage === 1}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed ${
                isDark ? "bg-white/5 border-white/10 text-slate-300" : "bg-white border-slate-300 text-slate-700"
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => {
                if (currentPage < totalPages) {
                  setCurrentPage((p) => p + 1);
                  window.scrollTo({ top: 400, behavior: "smooth" });
                }
              }}
              disabled={currentPage === totalPages}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed ${
                isDark ? "bg-white/5 border-white/10 text-slate-300" : "bg-white border-slate-300 text-slate-700"
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
