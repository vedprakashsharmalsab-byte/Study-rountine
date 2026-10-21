/**
 * Teacher Lecture Script Generator
 * 
 * Transforms textbook concepts, formulas, and examiner traps into
 * an engaging, conversational audio lecture like a top Indian educator / mentor.
 * 
 * Key Features:
 * - Conversational hooks ("Dhyaan se suniye...", "Let's pause and think...")
 * - Intuition-first explanation before formulas
 * - Step-by-step reasoning pauses
 * - Highlighted CBSE examiner traps & topper secrets
 * - Clean punctuation pacing for natural breathing pauses
 */

export interface LectureSectionInput {
  id: string;
  heading: string;
  subheading?: string;
  explanation: string;
  formulasOrKeyPoints?: {
    title: string;
    content: string;
  }[];
  stepByStepGuide?: {
    title: string;
    action?: string;
    steps?: string[];
    proTip?: string;
  }[];
  examinerTraps?: {
    trap: string;
    correction: string;
  }[];
}

export interface ChapterLectureInput {
  chapterNo: number;
  title: string;
  subject: "Science" | "Mathematics" | "Social Science";
  discipline?: string;
  oneLiner: string;
  analogyTitle?: string;
  analogyContent?: string;
  sections: LectureSectionInput[];
}

/**
 * Builds a comprehensive, human-like Master Teacher Lecture script.
 */
export function buildTeacherLectureScript(
  input: ChapterLectureInput,
  options: {
    mode?: "teacher_deep" | "concise";
    targetSectionId?: string;
  } = {}
): string {
  const { mode = "teacher_deep", targetSectionId } = options;

  // If targeting a single section:
  if (targetSectionId) {
    const sec = input.sections.find((s) => s.id === targetSectionId);
    if (sec) {
      return buildSectionLecture(sec, input, mode);
    }
  }

  // Full chapter lecture
  const parts: string[] = [];

  if (mode === "teacher_deep") {
    // 1. Warm, Engaging Greeting & Chapter Vision
    parts.push(
      `Namaste students! Welcome to our master lecture on ${input.subject}, Chapter ${input.chapterNo}: ${input.title}.`
    );
    parts.push(
      `Before we dive in, let's understand the big picture. ${input.oneLiner}.`
    );

    // 2. Intuition Story & Analogy
    if (input.analogyTitle && input.analogyContent) {
      parts.push(
        `Now, let's build your core intuition with a quick everyday picture. ${input.analogyTitle}... ${input.analogyContent}.`
      );
      parts.push(
        `Think about that for a moment... When you grasp the intuition first, you never have to blindly memorise.`
      );
    }

    parts.push(
      `Now, let's master every single concept, formula, and examiner trap step-by-step.`
    );
  } else {
    // Concise intro
    parts.push(
      `Quick revision for Chapter ${input.chapterNo}: ${input.title}. ${input.oneLiner}.`
    );
  }

  // 3. Sections
  input.sections.forEach((sec, idx) => {
    parts.push(buildSectionLecture(sec, input, mode, idx + 1));
  });

  // 4. Concluding Topper Motivation
  if (mode === "teacher_deep") {
    parts.push(
      `And that brings us to the end of Chapter ${input.chapterNo}! Take a deep breath... Review these core takeaways, practice the numericals and diagrams, and remember: with crystal-clear concepts, scoring full marks in your CBSE boards is completely within your reach. You've got this!`
    );
  } else {
    parts.push(
      `That concludes the revision for ${input.title}. All the best for your board preparation!`
    );
  }

  return parts.join("\n\n");
}

/**
 * Builds lecture narrative for a single section with teacher pauses.
 */
function buildSectionLecture(
  sec: LectureSectionInput,
  chapter: ChapterLectureInput,
  mode: "teacher_deep" | "concise",
  sectionNumber?: number
): string {
  const parts: string[] = [];

  const sectionPrefix = sectionNumber ? `Topic ${sectionNumber}: ` : "";

  if (mode === "teacher_deep") {
    parts.push(`Let's explore ${sectionPrefix}${sec.heading}.`);
    if (sec.subheading) {
      parts.push(`Key theme: ${sec.subheading}.`);
    }

    // Core explanation with conversational phrasing
    parts.push(`Dhyaan se samajhiye... ${sec.explanation}`);

    // Formulas & Key Points
    if (sec.formulasOrKeyPoints && sec.formulasOrKeyPoints.length > 0) {
      parts.push(`Now, let's look at the crucial formulas and key principles here.`);
      sec.formulasOrKeyPoints.forEach((f) => {
        parts.push(`Notice ${f.title}: ${f.content}.`);
      });
      parts.push(`Pause and think: what does this relationship really tell us? Keep the units and signs in mind.`);
    }

    // Step-by-Step Problem Solving Guide
    if (sec.stepByStepGuide && sec.stepByStepGuide.length > 0) {
      parts.push(`When this question comes in your CBSE board paper, here is the exact step-by-step method to solve it:`);
      sec.stepByStepGuide.forEach((step, sIdx) => {
        const actionText = step.action || (step.steps ? step.steps.join(". ") : "");
        parts.push(`Step ${sIdx + 1}: ${step.title}. ${actionText}`);
        if (step.proTip) {
          parts.push(`Pro tip: ${step.proTip}.`);
        }
      });
    }

    // CBSE Examiner Traps
    if (sec.examinerTraps && sec.examinerTraps.length > 0) {
      parts.push(`Wait! Let's pause right here. Where do students lose marks in board exams?`);
      sec.examinerTraps.forEach((trap) => {
        parts.push(`Common Examiner Trap: ${trap.trap}...`);
        parts.push(`Topper Shield: ${trap.correction}.`);
      });
      parts.push(`Lock this rule in your mind so you never lose this mark!`);
    }
  } else {
    // Concise Mode
    parts.push(`${sectionPrefix}${sec.heading}. ${sec.explanation}`);
    if (sec.formulasOrKeyPoints && sec.formulasOrKeyPoints.length > 0) {
      sec.formulasOrKeyPoints.forEach((f) => {
        parts.push(`${f.title}: ${f.content}.`);
      });
    }
    if (sec.examinerTraps && sec.examinerTraps.length > 0) {
      sec.examinerTraps.forEach((trap) => {
        parts.push(`Caution: ${trap.trap}. Remember: ${trap.correction}.`);
      });
    }
  }

  return parts.join(" ");
}
