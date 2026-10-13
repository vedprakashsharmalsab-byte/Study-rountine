export const TARGET_EXAM_STORAGE_KEYS = {
  DATE: 'arete_countdown_target_date',
  TIME: 'arete_countdown_target_time',
  LABEL: 'arete_countdown_target_label',
  TITLE: 'arete_countdown_target_title',
};

export const DEFAULT_TARGET_EXAM = {
  date: '2026-10-26',
  time: '10:30',
  label: '26 Oct 2026',
  title: 'Pre-Board Phase 1 (Test Series II)',
};

export function formatExamDateLabel(dateStr: string): string {
  try {
    const d = new Date(dateStr + 'T00:00:00');
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

export function getSavedTargetExam(): {
  date: string;
  time: string;
  label: string;
  title: string;
} {
  if (typeof window === 'undefined') return DEFAULT_TARGET_EXAM;
  try {
    const date = localStorage.getItem(TARGET_EXAM_STORAGE_KEYS.DATE) || DEFAULT_TARGET_EXAM.date;
    const time = localStorage.getItem(TARGET_EXAM_STORAGE_KEYS.TIME) || DEFAULT_TARGET_EXAM.time;
    const label = localStorage.getItem(TARGET_EXAM_STORAGE_KEYS.LABEL) || formatExamDateLabel(date);
    const title = localStorage.getItem(TARGET_EXAM_STORAGE_KEYS.TITLE) || DEFAULT_TARGET_EXAM.title;
    return { date, time, label, title };
  } catch {
    return DEFAULT_TARGET_EXAM;
  }
}

export function saveTargetExam(data: {
  date: string;
  time?: string;
  label?: string;
  title?: string;
}) {
  if (typeof window === 'undefined') return;
  try {
    const formattedLabel = data.label || formatExamDateLabel(data.date);
    localStorage.setItem(TARGET_EXAM_STORAGE_KEYS.DATE, data.date);
    if (data.time) localStorage.setItem(TARGET_EXAM_STORAGE_KEYS.TIME, data.time);
    localStorage.setItem(TARGET_EXAM_STORAGE_KEYS.LABEL, formattedLabel);
    if (data.title) localStorage.setItem(TARGET_EXAM_STORAGE_KEYS.TITLE, data.title);

    window.dispatchEvent(
      new CustomEvent('arete_target_exam_updated', {
        detail: {
          date: data.date,
          time: data.time || '10:30',
          label: formattedLabel,
          title: data.title,
        },
      })
    );
  } catch (err) {
    console.error('Failed to save target exam date:', err);
  }
}
