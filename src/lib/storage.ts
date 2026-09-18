/**
 * Centralized Storage Module for CBSE Class 10 Study Routine
 * Encapsulates all cbse10_lsa_* keys. No component should touch localStorage directly.
 */

export interface ExportedUserData {
  version: string;
  exportedAt: string;
  data: Record<string, any>;
}

export const STORAGE_KEYS = {
  TOPICS: "cbse10_lsa_topics_v5",
  TEST_SERIES: "cbse10_lsa_test_series_v5",
  MAP: "cbse10_lsa_map_v5",
  STREAK: "cbse10_lsa_streak_v5",
  TASKS: "cbse10_lsa_tasks_v5",
  CUSTOM_FC: "cbse10_lsa_custom_fc_v5",
  MASTERED_FC: "cbse10_lsa_mastered_fc_v5",
  CUSTOM_Q: "cbse10_lsa_customq_v5",
  FOCUS: "cbse10_lsa_focus_v5",
  THEME: "cbse10_lsa_theme_v5",
  THEME_WHITE_DEFAULT: "cbse10_lsa_theme_v7_white_default",
  SOUND_MUTE: "cbse10_lsa_sound_mute_v5",
  CORRECT_MCQS: "cbse10_lsa_correct_mcqs_v1",
  SELECTED_MCQS: "cbse10_lsa_selected_mcqs_v1",
  MY_MISTAKES: "cbse10_lsa_my_mistakes_v5",
  RESOLVED_MISTAKES: "cbse10_lsa_resolved_mistakes_v5",
  STUDENT_NAME: "cbse10_lsa_student_name_v1",
  CLEARED: "cbse10_lsa_v5_cleared",
  LAST_EXPORT: "cbse10_lsa_last_export_date",
  STREAK_FREEZE: "cbse10_lsa_streak_freeze_count",
  LAST_ACTIVE_DATE: "cbse10_lsa_last_active_date",
  LAST_ACTIVITY: "cbse10_lsa_last_activity_hero",
  DAILY_QUESTS: "cbse10_lsa_daily_quests_v1",
  SRS_CARDS: "cbse10_lsa_srs_cards_v1",
  ONBOARDING_DONE: "cbse10_lsa_onboarding_v1"
} as const;

export class AppStorage {
  private isBrowser(): boolean {
    return typeof window !== "undefined" && typeof localStorage !== "undefined";
  }

  getItem<T = any>(key: string, defaultValue: T): T {
    if (!this.isBrowser()) return defaultValue;
    try {
      const raw = localStorage.getItem(key);
      if (raw === null || raw === undefined) return defaultValue;
      return JSON.parse(raw) as T;
    } catch {
      // Fallback for raw non-json strings (like streak number or theme)
      const raw = localStorage.getItem(key);
      return (raw !== null ? (raw as unknown as T) : defaultValue);
    }
  }

  getRaw(key: string): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem(key);
  }

  setItem(key: string, value: any): void {
    if (!this.isBrowser()) return;
    try {
      if (typeof value === "string") {
        localStorage.setItem(key, value);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (e) {
      console.warn(`Failed to set localStorage key "${key}":`, e);
    }
  }

  removeItem(key: string): void {
    if (!this.isBrowser()) return;
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn(`Failed to remove localStorage key "${key}":`, e);
    }
  }

  /**
   * Exports all CBSE 10 Study Routine keys into a clean JSON structure
   */
  exportData(): ExportedUserData {
    if (!this.isBrowser()) {
      return { version: "1.0", exportedAt: new Date().toISOString(), data: {} };
    }

    const payload: Record<string, any> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && (k.startsWith("cbse10_lsa_") || k.startsWith("cbse_"))) {
        const val = localStorage.getItem(k);
        if (val !== null) {
          try {
            payload[k] = JSON.parse(val);
          } catch {
            payload[k] = val;
          }
        }
      }
    }

    const now = new Date().toISOString();
    this.setItem(STORAGE_KEYS.LAST_EXPORT, now);

    return {
      version: "1.0",
      exportedAt: now,
      data: payload
    };
  }

  /**
   * Validates and imports data JSON, merging back into localStorage
   */
  importData(json: any): { success: boolean; count: number; error?: string } {
    if (!this.isBrowser()) return { success: false, count: 0, error: "Not in browser" };

    try {
      const obj = typeof json === "string" ? JSON.parse(json) : json;
      if (!obj || typeof obj !== "object") {
        return { success: false, count: 0, error: "Invalid backup file structure." };
      }

      const rawData = obj.data || obj;
      let count = 0;

      for (const [k, v] of Object.entries(rawData)) {
        if (k.startsWith("cbse10_lsa_") || k.startsWith("cbse_")) {
          if (typeof v === "string") {
            localStorage.setItem(k, v);
          } else {
            localStorage.setItem(k, JSON.stringify(v));
          }
          count++;
        }
      }

      return { success: true, count };
    } catch (err: any) {
      return { success: false, count: 0, error: err.message || "Failed to parse import data." };
    }
  }

  getLastExportDate(): string | null {
    return this.getRaw(STORAGE_KEYS.LAST_EXPORT);
  }
}

export const appStorage = new AppStorage();
