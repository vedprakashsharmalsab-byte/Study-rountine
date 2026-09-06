"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { type ReactNode, useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

interface SmoothScrollProps {
  children: ReactNode;
}

function ScrollToTopButton() {
  const lenis = useLenis();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showScrollTop) return null;

  return (
    <button
      onClick={() => {
        if (lenis) {
          lenis.scrollTo(0, { duration: 0.9 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      aria-label="Scroll back to top"
      className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/90 text-amber-400 border border-amber-500/30 shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(245,158,11,0.2)] backdrop-blur-md cursor-pointer hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-200 group text-xs font-bold"
    >
      <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 text-amber-400" />
      <span className="hidden sm:inline text-slate-200 group-hover:text-white">Back to Top</span>
    </button>
  );
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        duration: 1.1,
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.15,
        infinite: false,
        autoRaf: true,
      }}
    >
      {children}
      <ScrollToTopButton />
    </ReactLenis>
  );
}
