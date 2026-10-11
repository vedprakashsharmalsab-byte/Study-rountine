"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  Target,
  BookOpen,
  Award,
  Calendar,
  Layers,
  Flame,
  Volume2,
  Compass,
  GraduationCap,
  Clock,
  Zap,
  CheckCircle2
} from "lucide-react";

export interface TutorialStep {
  id: string;
  selector: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeText: string;
  tab?: string;
  preferredPlacement?: "bottom" | "top" | "center" | "beside";
  showLiveTimer?: boolean;
}

const TUTORIAL_STEPS: TutorialStep[] = [
  {
    id: "welcome",
    tab: "chapter_dashboard",
    selector: "#tutorial-brand-header",
    title: "ARETĒ CBSE Command Engine (Class 10 2026–2027)",
    description: "Welcome Cadet! This unified cockpit powers your entire Class 10 preparation with NCERT-aligned theory, authentic CBSE board vault questions, formula sheets, and real-time progress tracking.",
    icon: GraduationCap,
    badgeText: "Command Cockpit",
    preferredPlacement: "bottom"
  },
  {
    id: "countdown",
    tab: "chapter_dashboard",
    selector: "#tutorial-countdown-banner, #tutorial-countdown-capsule",
    title: "Dual Milestone Exam Timers (15 Oct Sprint & 1 Feb Boards)",
    description: "Live real-time dual countdown tracking both your upcoming 15 Oct 2026 Mid-Term Sprint and the Official CBSE Class 10 Board Examinations (1 Feb 2027) with smart auto-termination.",
    icon: Calendar,
    badgeText: "Dual Exam Timers",
    preferredPlacement: "bottom",
    showLiveTimer: true
  },
  {
    id: "chapter-progress",
    tab: "chapter_dashboard",
    selector: "#tutorial-chapter-progress",
    title: "Dynamic Syllabus Mastery & Real-Time Progress Bar",
    description: "Right next to your greeting, this live progress bar tracks your syllabus completion across all chapters. As you tick off topics, it updates in real time with instant percentage and XP rewards.",
    icon: Sparkles,
    badgeText: "Live Progress Bar",
    preferredPlacement: "bottom"
  },
  {
    id: "chapter-checklist",
    tab: "chapter_dashboard",
    selector: "#tutorial-chapter-checklist",
    title: "NCERT Topic Checklist Runway (+25 XP per Topic)",
    description: "Mark concepts and chapter topics as completed. Each completed topic awards +25 XP directly to your Cadet rank and immediately recalculates your chapter mastery.",
    icon: Zap,
    badgeText: "Topic Runway",
    preferredPlacement: "bottom"
  },
  {
    id: "nav-tabs",
    selector: "#tutorial-nav-tabs, #tutorial-nav-dock-mobile",
    title: "Navigation Hub & Quick Launcher (⌘K)",
    description: "Switch seamlessly across the 4 core workspaces: Command Dashboard, NCERT Concept Hub, CBSE Practice Vault, and Tools & Memory. Press ⌘K or click 'All Modules' anytime to search all 16 tools.",
    icon: Layers,
    badgeText: "Navigation Hub",
    preferredPlacement: "bottom"
  },
  {
    id: "concepts",
    tab: "concepts",
    selector: "#tutorial-sst-discipline, #tutorial-concepts-tab",
    title: "NCERT Concept Hub — Theory & SST 20 Chapters",
    description: "In-depth chapter notes across Mathematics (14 Ch), Science (13 Ch), and Social Science (20 Chapters arranged by Geography, History, Civics, and Economics). Includes core theory, board trap alerts, and solved examples.",
    icon: BookOpen,
    badgeText: "Concepts & Theory",
    preferredPlacement: "bottom"
  },
  {
    id: "questions",
    tab: "questions",
    selector: "#tutorial-practice-vault, #tutorial-questions-tab",
    title: "CBSE Leveled Practice Vault & Self-Test Timer",
    description: "1,200+ authentic board questions leveled into 1-Mark MCQs, 2M/3M Short Answers, 5M Long Proofs, and 4M Case Studies. Features instant answer check, model rubrics, and mistake logging.",
    icon: Target,
    badgeText: "Practice Vault",
    preferredPlacement: "bottom"
  },
  {
    id: "tools",
    tab: "timelines",
    selector: "#tutorial-tools-vault, #tutorial-nav-tabs",
    title: "Tools, Timelines & Memory Vaults",
    description: "Access 56 dated chronological SST historical events, 25 Geometry Theorem proofs, 56 Chemistry reaction equations, science lab activities, and your personal Mistakes Notebook for laser revision.",
    icon: Compass,
    badgeText: "Tools & Memory",
    preferredPlacement: "bottom"
  },
  {
    id: "xp-capsule",
    tab: "chapter_dashboard",
    selector: "#tutorial-xp-capsule, #tutorial-theme-controls",
    title: "Gamified XP Leveling, Streaks & Eye-Comfort Modes",
    description: "Climb through 10 Cadet ranks (Novice to Grandmaster) by solving questions. Maintain your daily study streak, enable tactile audio feedback, or switch to OLED Dark Mode for night sessions.",
    icon: Flame,
    badgeText: "Progress & Themes",
    preferredPlacement: "bottom"
  },
  {
    id: "completion",
    tab: "chapter_dashboard",
    selector: "#tutorial-brand-header",
    title: "You Are Ready to Conquer Class 10!",
    description: "Your Command Center is calibrated and ready. Work through topics daily, solve board vault questions, eliminate mistakes, and achieve your 100/100 goal! Good luck Cadet!",
    icon: Award,
    badgeText: "Ready to Conquer",
    preferredPlacement: "center"
  }
];

export const TUTORIAL_STORAGE_KEY = "cbse10_guided_tutorial_completed_v1";

interface InteractiveGuidedTutorialProps {
  isDark: boolean;
  onTutorialComplete?: () => void;
  setActiveTab?: (tab: any) => void;
}

export default function InteractiveGuidedTutorial({
  isDark,
  onTutorialComplete,
  setActiveTab
}: InteractiveGuidedTutorialProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [viewportDims, setViewportDims] = useState<{ width: number; height: number }>({ width: 1200, height: 800 });

  // Live seconds tick for countdown display inside popover
  const [liveSeconds, setLiveSeconds] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setLiveSeconds(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  // Check initial first-visit state or URL/custom trigger
  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      setViewportDims({ width: window.innerWidth, height: window.innerHeight });
    }

    const checkTutorialTrigger = () => {
      try {
        const isCompleted = localStorage.getItem(TUTORIAL_STORAGE_KEY);
        const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
        const forceOpen = urlParams?.get("tutorial") === "true";
        if (forceOpen || isCompleted !== "true") {
          const timer = setTimeout(() => {
            setIsOpen(true);
          }, 400);
          return () => clearTimeout(timer);
        }
      } catch {
        setIsOpen(true);
      }
    };

    const cleanup = checkTutorialTrigger();

    const handleCustomTrigger = () => {
      setCurrentStepIndex(0);
      setIsOpen(true);
      if (setActiveTab) setActiveTab("chapter_dashboard");
    };

    window.addEventListener("arete:open-tutorial", handleCustomTrigger);
    return () => {
      if (cleanup) cleanup();
      window.removeEventListener("arete:open-tutorial", handleCustomTrigger);
    };
  }, [setActiveTab]);

  const currentStep = TUTORIAL_STEPS[currentStepIndex] || TUTORIAL_STEPS[0];
  const StepIcon = currentStep.icon;
  const isLastStep = currentStepIndex === TUTORIAL_STEPS.length - 1;

  // Measure and position spotlight
  const updateTargetRect = useCallback(() => {
    if (!isOpen || currentStep.preferredPlacement === "center") {
      setTargetRect(null);
      return;
    }

    // Attempt selectors in order
    const selectors = currentStep.selector.split(",").map(s => s.trim());
    let foundEl: Element | null = null;
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el) {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0) {
          foundEl = el;
          break;
        }
      }
    }

    if (foundEl) {
      const rect = foundEl.getBoundingClientRect();
      setTargetRect(rect);
    } else {
      setTargetRect(null);
    }
  }, [isOpen, currentStep]);

  // Route to the appropriate tab when step changes and scroll into view
  useEffect(() => {
    if (!isOpen) return;

    if (currentStep.tab && setActiveTab) {
      setActiveTab(currentStep.tab);
    }

    // Delay measurement to allow tab components to mount and paint
    const timer = setTimeout(() => {
      const selectors = currentStep.selector.split(",").map(s => s.trim());
      let element: Element | null = null;
      for (const sel of selectors) {
        const el = document.querySelector(sel);
        if (el) {
          element = el;
          break;
        }
      }

      if (element && currentStep.preferredPlacement !== "center") {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        });
      }

      // Re-measure after scroll settling
      setTimeout(updateTargetRect, 250);
    }, 180);

    return () => clearTimeout(timer);
  }, [isOpen, currentStepIndex, currentStep, setActiveTab, updateTargetRect]);

  // Window resize & scroll listeners
  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => {
      setViewportDims({ width: window.innerWidth, height: window.innerHeight });
      updateTargetRect();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", updateTargetRect, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", updateTargetRect);
    };
  }, [isOpen, updateTargetRect]);

  const handleNext = () => {
    if (isLastStep) {
      // Mark tutorial complete
      try {
        localStorage.setItem(TUTORIAL_STORAGE_KEY, "true");
      } catch {}
      setIsOpen(false);
      if (setActiveTab) setActiveTab("chapter_dashboard");
      if (onTutorialComplete) onTutorialComplete();
      // Notify other components (e.g. CadetNamePromptModal)
      window.dispatchEvent(new CustomEvent("arete:tutorial-finished"));
    } else {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  // Prevent keyboard dismiss via Escape to enforce completion rule
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
      } else if (e.key === "ArrowRight" || e.key === "Enter") {
        handleNext();
      } else if (e.key === "ArrowLeft" && currentStepIndex > 0) {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentStepIndex, isLastStep]);

  if (!isMounted || !isOpen) return null;

  // Determine popover position: ensure it NEVER covers the highlighted element or timer!
  const isMobile = viewportDims.width < 640;
  let popoverStyle: React.CSSProperties = {};

  if (isMobile || !targetRect || currentStep.preferredPlacement === "center") {
    if (isMobile) {
      // On mobile, pin neatly to bottom with comfortable spacing
      popoverStyle = {
        position: "fixed",
        bottom: 16,
        left: 12,
        right: 12,
        zIndex: 100005
      };
    } else {
      // Centered dialog
      popoverStyle = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 460,
        maxWidth: "92vw",
        zIndex: 100005
      };
    }
  } else {
    // Laptop / Desktop: Smart above or below placement that NEVER covers the target!
    const popoverWidth = 430;
    const padding = 16;
    const windowWidth = viewportDims.width;
    const windowHeight = viewportDims.height;

    // Horizontal centering relative to target
    let left = targetRect.left + targetRect.width / 2 - popoverWidth / 2;
    if (left < padding) left = padding;
    if (left + popoverWidth > windowWidth - padding) left = windowWidth - popoverWidth - padding;

    // Check space below vs above
    const spaceBelow = windowHeight - targetRect.bottom;
    const spaceAbove = targetRect.top;

    if (spaceBelow >= 280) {
      // Ample space below target
      popoverStyle = {
        position: "fixed",
        top: targetRect.bottom + 16,
        left: left,
        width: popoverWidth,
        maxWidth: "92vw",
        zIndex: 100005
      };
    } else if (spaceAbove >= 280) {
      // Place cleanly ABOVE target so target is never covered
      popoverStyle = {
        position: "fixed",
        bottom: windowHeight - targetRect.top + 16,
        left: left,
        width: popoverWidth,
        maxWidth: "92vw",
        zIndex: 100005
      };
    } else {
      // Fallback: dock at bottom
      popoverStyle = {
        position: "fixed",
        bottom: 16,
        left: left,
        width: popoverWidth,
        maxWidth: "92vw",
        zIndex: 100005
      };
    }
  }

  // Live timer calculation for popover countdown display
  const octMs = new Date("2026-10-15T10:30:00+05:30").getTime() - Date.now();
  const febMs = new Date("2027-02-01T09:00:00+05:30").getTime() - Date.now();
  const octDays = Math.max(0, Math.floor(octMs / (1000 * 60 * 60 * 24)));
  const febDays = Math.max(0, Math.floor(febMs / (1000 * 60 * 60 * 24)));

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="ARETĒ Interactive Onboarding Tutorial"
      className="fixed inset-0 select-none"
      style={{ zIndex: 100000 }}
    >
      {/* 1. CRYSTAL-CLEAR SVG CUTOUT OVERLAY: NO BLUR OVER TARGET HOLE! */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-auto transition-all duration-300"
        style={{ zIndex: 100001 }}
        onClick={(e) => {
          // Strictly prevent backdrop dismissal
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <defs>
          <mask id="tutorial-spotlight-mask">
            {/* White: overlay shows here */}
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            {/* Black Cutout Hole: Target area is 100% transparent, crisp, unblurred! */}
            {targetRect && currentStep.preferredPlacement !== "center" && (
              <rect
                x={Math.max(0, targetRect.left - 8)}
                y={Math.max(0, targetRect.top - 8)}
                width={targetRect.width + 16}
                height={targetRect.height + 16}
                rx="20"
                fill="black"
              />
            )}
          </mask>
        </defs>
        {/* Dimmed background layer punched with the crisp transparent cutout */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="rgba(0, 0, 0, 0.76)"
          mask="url(#tutorial-spotlight-mask)"
        />
      </svg>

      {/* 2. GLOWING AMBER SPOTLIGHT FOCUS RING OVER TARGET */}
      {targetRect && currentStep.preferredPlacement !== "center" && (
        <div
          style={{
            position: "fixed",
            top: targetRect.top - 8,
            left: targetRect.left - 8,
            width: targetRect.width + 16,
            height: targetRect.height + 16,
            zIndex: 100002,
            pointerEvents: "none"
          }}
          className="rounded-[20px] ring-2 ring-amber-400 border border-amber-300/80 shadow-[0_0_30px_rgba(245,158,11,0.55),inset_0_0_15px_rgba(245,158,11,0.15)] transition-all duration-300 ease-out"
        />
      )}

      {/* 3. FLOATING EXPLANATORY POPOVER CARD */}
      <div
        style={popoverStyle}
        className={`rounded-3xl border shadow-2xl p-5 sm:p-6 space-y-4 transition-all duration-300 ${
          isDark
            ? "bg-[#0c101d] border-amber-500/40 text-white shadow-[0_16px_50px_rgba(0,0,0,0.88)] ring-1 ring-amber-400/20"
            : "bg-white border-amber-300 text-slate-900 shadow-2xl ring-1 ring-amber-500/20"
        }`}
      >
        {/* HEADER: BADGE & STEP COUNTER */}
        <div className="flex items-center justify-between gap-2 border-b pb-3 border-current/10">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-xl shrink-0 ${
              isDark ? "bg-amber-500/20 text-amber-300" : "bg-amber-100 text-amber-800"
            }`}>
              <StepIcon className="w-4 h-4 text-amber-400" />
            </div>
            <span className={`text-[11px] font-mono font-black uppercase tracking-wider ${
              isDark ? "text-amber-400" : "text-amber-700 font-extrabold"
            }`}>
              {currentStep.badgeText}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${
              isDark ? "bg-white/5 border-white/10 text-zinc-300" : "bg-slate-100 border-slate-200 text-slate-700"
            }`}>
              Step {currentStepIndex + 1} of {TUTORIAL_STEPS.length}
            </span>
          </div>
        </div>

        {/* FEATURE TITLE & EXPLANATION */}
        <div className="space-y-1.5">
          <h3 className={`text-base sm:text-lg font-black tracking-tight leading-snug ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {currentStep.title}
          </h3>
          <p className={`text-xs sm:text-sm leading-relaxed ${
            isDark ? "text-zinc-300" : "text-slate-700 font-medium"
          }`}>
            {currentStep.description}
          </p>
        </div>

        {/* LIVE TIME CAPSULE (DIRECTLY IN POPOVER FOR COUNTDOWN STEP SO TIME NEVER HIDES!) */}
        {currentStep.showLiveTimer && (
          <div className={`p-3 rounded-2xl border flex items-center justify-around font-mono text-center gap-2 ${
            isDark ? "bg-black/40 border-amber-500/30 text-amber-300" : "bg-amber-50 border-amber-300 text-amber-950"
          }`}>
            <div className="flex flex-col items-center">
              <span className="text-base sm:text-lg font-black tabular-nums">{octDays}d</span>
              <span className="text-[9px] uppercase font-bold opacity-75">15 Oct Sprint</span>
            </div>
            <div className="h-6 w-px bg-current/20" />
            <div className="flex flex-col items-center">
              <span className="text-base sm:text-lg font-black tabular-nums text-cyan-400">{febDays}d</span>
              <span className="text-[9px] uppercase font-bold opacity-75 text-cyan-400">1 Feb Boards</span>
            </div>
            <div className="h-6 w-px bg-current/20" />
            <div className="flex flex-col items-center text-emerald-400">
              <span className="text-xs font-black">ACTIVE</span>
              <span className="text-[9px] uppercase font-bold">Auto-Sync</span>
            </div>
          </div>
        )}

        {/* STEP PROGRESS DOTS */}
        <div className="flex items-center gap-1.5 pt-1">
          {TUTORIAL_STEPS.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentStepIndex
                  ? isDark
                    ? "w-6 bg-amber-400"
                    : "w-6 bg-amber-600"
                  : idx < currentStepIndex
                  ? isDark
                    ? "w-2 bg-amber-400/40"
                    : "w-2 bg-amber-400"
                  : isDark
                  ? "w-2 bg-white/10"
                  : "w-2 bg-slate-200"
              }`}
            />
          ))}
        </div>

        {/* ACTION BUTTONS (NO SKIP / NO CLOSE: BACK & NEXT ONLY) */}
        <div className="flex items-center gap-2 pt-1">
          {currentStepIndex > 0 ? (
            <button
              type="button"
              onClick={handlePrev}
              className={`px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 touch-manipulation active:scale-95 ${
                isDark
                  ? "bg-white/5 border-white/10 text-zinc-300 hover:text-white hover:bg-white/10"
                  : "bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-950 hover:bg-slate-200"
              }`}
              aria-label="Previous Tutorial Step"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : null}

          <button
            type="button"
            onClick={handleNext}
            className={`flex-1 py-2.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all touch-manipulation active:scale-[0.98] ${
              isLastStep
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-emerald-500/20"
                : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-amber-500/20"
            }`}
            aria-label={isLastStep ? "Finish Tutorial" : "Next Tutorial Step"}
          >
            <span>{isLastStep ? "Finish Tutorial 🚀" : "Next Feature"}</span>
            {isLastStep ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
