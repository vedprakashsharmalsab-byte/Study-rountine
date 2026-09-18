/**
 * Centralized Academic Calendar Configuration for CBSE Class 10 (2026–2027)
 * Ensures all countdowns, exam dates, and test series dates update from a single source of truth.
 */

export interface ExamDateConfig {
  id: string;
  name: string;
  code: string;
  date: string; // ISO format: YYYY-MM-DD
  time: string;
  maxMarks: number;
}

export const ACADEMIC_CALENDAR = {
  academicYear: "2026–2027",
  targetGrade: "CBSE Class 10",
  
  // Official CBSE Board Examination Commencing Date
  boardExamStartDate: "2027-02-01",
  
  // Official Test Series 1 Window (Mid-Term Exam Window)
  testSeries1: {
    name: "CBSE Mid-Term / Test Series 1",
    startDate: "2026-09-14",
    endDate: "2026-09-26",
  },

  // Subject-wise Official Date Sheets
  examSchedule: [
    { id: "math", name: "Mathematics (Standard)", code: "041", date: "2027-02-18", time: "10:30 AM – 1:30 PM", maxMarks: 80 },
    { id: "science", name: "Science", code: "086", date: "2027-02-25", time: "10:30 AM – 1:30 PM", maxMarks: 80 },
    { id: "sst", name: "Social Science", code: "087", date: "2027-03-03", time: "10:30 AM – 1:30 PM", maxMarks: 80 },
    { id: "english", name: "English Language & Literature", code: "184", date: "2027-03-08", time: "10:30 AM – 1:30 PM", maxMarks: 80 },
    { id: "hindi", name: "Hindi Course B", code: "085", date: "2027-03-14", time: "10:30 AM – 1:30 PM", maxMarks: 80 },
    { id: "it", name: "Information Technology", code: "402", date: "2027-03-18", time: "10:30 AM – 12:30 PM", maxMarks: 50 },
  ] as ExamDateConfig[]
};

/**
 * Calculates remaining calendar days to a target ISO date string
 */
export function getDaysRemaining(targetDateStr: string, fromDate?: Date): number {
  const now = fromDate || new Date();
  const target = new Date(targetDateStr + "T00:00:00");
  const diffTime = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
}
