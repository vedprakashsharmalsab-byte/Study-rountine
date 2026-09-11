"use client";

import { type ReactNode, useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

interface SmoothScrollProps {
  children: ReactNode;
}

function ScrollToTopButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showScrollTop) return null;

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Scroll back to top"
      className="fixed bottom-22 right-3.5 sm:bottom-8 sm:right-8 z-30 flex items-center justify-center gap-2 p-2.5 sm:px-4 sm:py-2.5 rounded-full bg-slate-900/95 text-amber-400 border border-amber-500/40 shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(245,158,11,0.25)] backdrop-blur-md cursor-pointer hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-200 group text-xs font-bold touch-manipulation min-w-[44px] min-h-[44px]"
    >
      <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 text-amber-400" />
      <span className="hidden sm:inline text-slate-200 group-hover:text-white">Back to Top</span>
    </button>
  );
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <>
      {children}
      <ScrollToTopButton />
    </>
  );
}
