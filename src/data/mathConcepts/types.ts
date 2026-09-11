export interface MathChapterConcept {
  chapterNo: number;
  title: string;
  weightage: string;
  oneLiner: string;
  analogyTitle: string;
  analogyContent: string;
  sections: {
    id: string;
    label: string;
    heading: string;
    subheading?: string;
    explanation: string;
    formulasOrKeyPoints?: {
      title: string;
      content: string;
      note?: string;
    }[];
    stepByStepGuide?: {
      stepNo: number;
      title: string;
      action: string;
      proTip?: string;
    }[];
    examinerTraps?: {
      trap: string;
      correction: string;
    }[];
  }[];
}
