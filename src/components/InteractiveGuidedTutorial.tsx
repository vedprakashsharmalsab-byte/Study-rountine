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
  GraduationCap
} from "lucide-react";

export interface TutorialStep {
  id: string;
  selector: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeText: string;
  preferredPlacement?: "bottom" | "top" | "center";
}

const TUTORIAL_STEPS: TutorialStep[] = [
  {
    id: "welcome",
    selector: "#tutorial-brand-header",
    title: "Welcome to ARETĒ CBSE Class 10 Command Engine",
    description: "Your unified board examination command center for Class 10 (2026–2027). Fully aligned with official NCERT syllabi, step-by-step marking schemes, and leveled practice vaults across all subjects.",
    icon: GraduationCap,
    badgeText: "System Overview",
    preferredPlacement: "bottom"
  },
  {
    id: "countdown",
    selector: "#tutorial-countdown-banner, #tutorial-countdown-capsule",
    title: "Class 10 Exam Countdown — 26 October 2026",
    description: "Real-time, live countdown ticking down to your upcoming examinations on 26 October 2026 in Asia/Kolkata timezone (+05:30). Keeps you focused on your target date every second.",
    icon: Calendar,
    badgeText: "Target Milestone",
    preferredPlacement: "bottom"
  },
  {
    id: "nav-tabs",
    selector: "#tutorial-nav-tabs, #tutorial-nav-dock-mobile",
    title: "All Modules Navigation Hub",
    description: "Switch seamlessly between the Chapter Dashboard, NCERT Concept Hub, CBSE Practice Vault, Historical Timelines, and Competitive HOTS without losing your study progress.",
    icon: Layers,
    badgeText: "Navigation",
    preferredPlacement: "bottom"
  },
  {
    id: "all-modules",
    selector: "#tutorial-all-modules-btn, #tutorial-all-modules-btn-mobile",
    title: "Full Module Directory & Quick Launcher (⌘K)",
    description: "Click 'All Modules' or press ⌘K anytime to access all 16 specialized modules including Geometry Proofs, Chemistry Reactions, and Formula Vaults.",
    icon: Compass,
    badgeText: "Module Directory",
    preferredPlacement: "bottom"
  },
  {
    id: "concepts",
    selector: "#tutorial-concepts-tab, #tutorial-concepts-tab-mobile",
    title: "NCERT Concept Hub — Deep Theory & Board Traps",
    description: "Comprehensive NCERT syllabus notes for Mathematics (14 Chs), Science (13 Chs), and Social Science (20 Chapters). Features core principles, key definitions, common board traps, and leveled solved examples.",
    icon: BookOpen,
    badgeText: "Theory & Concepts",
    preferredPlacement: "bottom"
  },
  {
    id: "questions",
    selector: "#tutorial-questions-tab, #tutorial-questions-tab-mobile",
    title: "CBSE Practice Vault & Interactive Self-Test",
    description: "Practice authentic CBSE board questions categorized into 1M MCQs, 2M/3M Short Answers, 5M Proofs, and 4M Case Studies with instant answer check and mistake logging.",
    icon: Target,
    badgeText: "Practice Vault",
    preferredPlacement: "bottom"
  },
  {
    id: "sst-module",
    selector: "#tutorial-sst-discipline, #tutorial-concepts-tab, #tutorial-concepts-tab-mobile",
    title: "Social Science (SST) Complete Discipline Coverage",
    description: "Structured strictly by discipline: Geography (7 chapters first!), History (4 chapters), Political Science (5 chapters), and Economics (4 chapters). Includes visual mnemonic sheets and map pointers.",
    icon: Sparkles,
    badgeText: "SST 20 Chapters",
    preferredPlacement: "bottom"
  },
  {
    id: "xp-capsule",
    selector: "#tutorial-xp-capsule",
    title: "Gamified XP Leveling & Mistake Elimination",
    description: "Earn XP for every answered question and topic mastered. Log tricky questions to your personal Mistakes Notebook for focused revision before exam day.",
    icon: Flame,
    badgeText: "Gamified Progress",
    preferredPlacement: "bottom"
  },
  {
    id: "theme-controls",
    selector: "#tutorial-theme-controls",
    title: "Haptic Audio Feedback & Eye-Comfort Themes",
    description: "Toggle tactile audio cues and switch between ultra-deep OLED Dark Mode and crisp High-Contrast Light Mode designed for late-night and morning study sessions.",
    icon: Volume2,
    badgeText: "Audio & Themes",
    preferredPlacement: "bottom"
  },
  {
    id: "completion",
    selector: "#tutorial-brand-header",
    title: "You Are Ready to Excel in Class 10!",
    description: "Your study system is now fully configured. Work through each chapter methodically, practice board questions daily, and achieve your 100/100 goal!",
    icon: Award,
    badgeText: "Ready to Conquer",
    preferredPlacement: "center"
  }
];

export const TUTORIAL_STORAGE_KEY = "cbse10_guided_tutorial_completed_v1";

interface InteractiveGuidedTutorialProps {
  isDark: boolean;
  onTutorialComplete?: () => void;
}

export default function InteractiveGuidedTutorial({
  isDark,
  onTutorialComplete
}: InteractiveGuidedTutorialProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const isNavigatingRef = useRef(false);

  // Check initial first-visit state or URL/custom trigger
  useEffect(() => {
    setIsMounted(true);
    const checkTutorialTrigger = () => {
      try {
        const isCompleted = localStorage.getItem(TUTORIAL_STORAGE_KEY);
        const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
        const forceOpen = urlParams?.get("tutorial") === "true";
        if (forceOpen || isCompleted !== "true") {
          // Small delay to ensure DOM elements have painted
          const timer = setTimeout(() => {
            setIsOpen(true);
          }, 400);
          return () => clearTimeout(timer);
        }
      } catch {
        // If local storage is disabled, allow showing once
        setIsOpen(true);
      }
    };

    const cleanup = checkTutorialTrigger();

    const handleCustomTrigger = () => {
      setCurrentStepIndex(0);
      setIsOpen(true);
    };

    window.addEventListener("arete:open-tutorial", handleCustomTrigger);
    return () => {
      if (cleanup) cleanup();
      window.removeEventListener("arete:open-tutorial", handleCustomTrigger);
    };
  }, []);

  const currentStep = TUTORIAL_STEPS[currentStepIndex] || TUTORIAL_STEPS[0];
  const StepIcon = currentStep.icon;
  const isLastStep = currentStepIndex === TUTORIAL_STEPS.length - 1;

  // Measure and position spotlight
  const updateTargetRect = useCallback(() => {
    if (!isOpen || currentStep.preferredPlacement === "center") {
      setTargetRect(null);
      return;
    }

    const element = document.querySelector(currentStep.selector);
    if (element) {
      const rect = element.getBoundingClientRect();
      // Ensure target is somewhat visible or scroll it into view
      if (rect.width > 0 && rect.height > 0) {
        setTargetRect(rect);
        return;
      }
    }
    // Fallback: target not found or has 0 dimensions
    setTargetRect(null);
  }, [isOpen, currentStep]);

  // Scroll target into view whenever step changes
  useEffect(() => {
    if (!isOpen) return;

    if (currentStep.preferredPlacement === "center") {
      setTargetRect(null);
      return;
    }

    const element = document.querySelector(currentStep.selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
      const timer = setTimeout(() => {
        updateTargetRect();
      }, 350);
      return () => clearTimeout(timer);
    } else {
      setTargetRect(null);
    }
  }, [currentStepIndex, isOpen, currentStep, updateTargetRect]);

  // Window resize & scroll listeners
  useEffect(() => {
    if (!isOpen) return;

    const handleResizeOrScroll = () => {
      updateTargetRect();
    };

    window.addEventListener("resize", handleResizeOrScroll, { passive: true });
    window.addEventListener("scroll", handleResizeOrScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResizeOrScroll);
      window.removeEventListener("scroll", handleResizeOrScroll);
    };
  }, [isOpen, updateTargetRect]);

  const handleNext = () => {
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;

    if (isLastStep) {
      handleFinish();
    } else {
      setCurrentStepIndex((prev) => Math.min(prev + 1, TUTORIAL_STEPS.length - 1));
      setTimeout(() => {
        isNavigatingRef.current = false;
      }, 250);
    }
  };

  const handlePrev = () => {
    if (isNavigatingRef.current || currentStepIndex === 0) return;
    isNavigatingRef.current = true;
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 250);
  };

  const handleFinish = () => {
    try {
      localStorage.setItem(TUTORIAL_STORAGE_KEY, "true");
    } catch {}
    setIsOpen(false);
    onTutorialComplete?.();
  };

  // Prevent keyboard dismiss via Escape to enforce completion rule
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // Disallow escape dismiss per strict prompt requirements
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

  // Determine popover position
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  let popoverStyle: React.CSSProperties = {};

  if (isMobile || !targetRect || currentStep.preferredPlacement === "center") {
    // Mobile or Center Fallback: Pinned to bottom on mobile, centered on laptop
    if (isMobile) {
      popoverStyle = {
        position: "fixed",
        bottom: 16,
        left: 12,
        right: 12,
        zIndex: 100005
      };
    } else {
      popoverStyle = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 440,
        maxWidth: "92vw",
        zIndex: 100005
      };
    }
  } else {
    // Laptop / Desktop: Place smartly above or below target
    const popoverWidth = 420;
    const padding = 12;
    const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
    const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800;

    // Center horizontally relative to targetRect
    let left = targetRect.left + targetRect.width / 2 - popoverWidth / 2;
    if (left < padding) left = padding;
    if (left + popoverWidth > windowWidth - padding) left = windowWidth - popoverWidth - padding;

    // Check vertical space (preferred: below target)
    const spaceBelow = windowHeight - targetRect.bottom;
    const placeBelow = spaceBelow > 260 || targetRect.top < 260;

    if (placeBelow) {
      popoverStyle = {
        position: "fixed",
        top: Math.min(targetRect.bottom + 14, windowHeight - 270),
        left: left,
        width: popoverWidth,
        maxWidth: "92vw",
        zIndex: 100005
      };
    } else {
      popoverStyle = {
        position: "fixed",
        bottom: Math.min(windowHeight - targetRect.top + 14, windowHeight - 270),
        left: left,
        width: popoverWidth,
        maxWidth: "92vw",
        zIndex: 100005
      };
    }
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Website Guided Tutorial"
      className="fixed inset-0 z-[100000] pointer-events-auto select-none overflow-hidden"
    >
      {/* 1. TRANSLUCENT DARK OVERLAY BACKDROP */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-[2px] transition-opacity duration-300 pointer-events-auto"
        onClick={(e) => {
          // Strictly prevent backdrop dismissal
          e.preventDefault();
          e.stopPropagation();
        }}
      />

      {/* 2. SPOTLIGHT HIGHLIGHT FRAME (If target element is found) */}
      {targetRect && currentStep.preferredPlacement !== "center" && (
        <div
          style={{
            position: "fixed",
            top: targetRect.top - 6,
            left: targetRect.left - 6,
            width: targetRect.width + 12,
            height: targetRect.height + 12,
            zIndex: 100002
          }}
          className="rounded-2xl ring-2 ring-amber-400 border border-amber-300 shadow-[0_0_0_9999px_rgba(0,0,0,0.72),0_0_24px_rgba(245,158,11,0.45)] pointer-events-none transition-all duration-300 ease-out"
        />
      )}

      {/* 3. FLOATING EXPLANATORY POPOVER */}
      <div
        style={popoverStyle}
        className={`rounded-3xl border shadow-2xl p-5 sm:p-6 space-y-4 transition-all duration-300 ${
          isDark
            ? "bg-[#0c101d] border-amber-500/40 text-white shadow-[0_16px_50px_rgba(0,0,0,0.85)] ring-1 ring-amber-400/20"
            : "bg-white border-amber-300 text-slate-900 shadow-2xl ring-1 ring-amber-500/20"
        }`}
      >
        {/* HEADER: STEP COUNTER & BADGE */}
        <div className="flex items-center justify-between gap-2 border-b pb-3 border-white/10">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-xl shrink-0 ${
              isDark ? "bg-amber-500/20 text-amber-300" : "bg-amber-100 text-amber-800"
            }`}>
              <StepIcon className="w-4 h-4" />
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

        {/* PROGRESS DOTS */}
        <div className="flex items-center gap-1 py-1">
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

        {/* ACTION BUTTONS (NO SKIP / NO CLOSE: PREVIOUS & NEXT ONLY) */}
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
            <span>{isLastStep ? "Finish Tutorial" : "Next Feature"}</span>
            {isLastStep ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
