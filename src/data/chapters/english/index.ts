// =========================================================================
// CBSE CLASS 10 ENGLISH PRACTICE QUESTION BANK (2026-2027)
// Comprehensive Board Questions (MCQs, RTC Extracts, SAQs, LAQs, Case Studies)
// 10 Bare Minimum High-Grade Questions per chapter.
// Test Series 1 Official (Lakshmipat Singhania Academy): Chapters 1 to 8 + Grammar
// =========================================================================

import type { VaultQuestion } from "@/data/vaultQuestions";

// Footprints Without Feet
import { ENGLISH_CH1_QUESTIONS } from "./ch1_triumph";
import { ENGLISH_CH2_QUESTIONS } from "./ch2_thief";
import { ENGLISH_CH3_QUESTIONS } from "./ch3_midnight";
import { ENGLISH_CH4_QUESTIONS } from "./ch4_trust";
import { ENGLISH_CH5_QUESTIONS } from "./ch5_footprints";
import { ENGLISH_CH6_QUESTIONS } from "./ch6_scientist";
import { ENGLISH_CH7_QUESTIONS } from "./ch7_necklace";
import { ENGLISH_CH8_QUESTIONS } from "./ch8_bholi";
import { ENGLISH_CH9_QUESTIONS } from "./ch9_book_saved_earth";

// First Flight Prose
import { ENGLISH_CH10_QUESTIONS } from "./ch10_letter_to_god";
import { ENGLISH_CH11_QUESTIONS } from "./ch11_mandela";
import { ENGLISH_CH12_QUESTIONS } from "./ch12_two_stories";
import { ENGLISH_CH13_QUESTIONS } from "./ch13_anne_frank";
import { ENGLISH_CH14_QUESTIONS } from "./ch14_glimpses_india";
import { ENGLISH_CH15_QUESTIONS } from "./ch15_mijbil";
import { ENGLISH_CH16_QUESTIONS } from "./ch16_madam_rides";
import { ENGLISH_CH17_QUESTIONS } from "./ch17_sermon";
import { ENGLISH_CH18_QUESTIONS } from "./ch18_proposal";

// Separated Multi-Part Chapters
import { ENGLISH_CH12A_QUESTIONS } from "./ch12a_his_first_flight";
import { ENGLISH_CH12B_QUESTIONS } from "./ch12b_black_aeroplane";
import { ENGLISH_CH14A_QUESTIONS } from "./ch14a_baker_from_goa";
import { ENGLISH_CH14B_QUESTIONS } from "./ch14b_coorg";
import { ENGLISH_CH14C_QUESTIONS } from "./ch14c_tea_from_assam";

// First Flight Poetry & Dedicated Grammar Clinic Vault (90 Qs)
import { ENGLISH_CH19_QUESTIONS } from "./ch19_poetry";
import { ENGLISH_CH20_QUESTIONS } from "./ch20_grammar_tenses";
import { ENGLISH_CH21_QUESTIONS } from "./ch21_grammar_concord";
import { ENGLISH_CH22_QUESTIONS } from "./ch22_grammar_modals";
import { ENGLISH_CH23_QUESTIONS } from "./ch23_grammar_reported_speech";

export {
  ENGLISH_CH1_QUESTIONS,
  ENGLISH_CH2_QUESTIONS,
  ENGLISH_CH3_QUESTIONS,
  ENGLISH_CH4_QUESTIONS,
  ENGLISH_CH5_QUESTIONS,
  ENGLISH_CH6_QUESTIONS,
  ENGLISH_CH7_QUESTIONS,
  ENGLISH_CH8_QUESTIONS,
  ENGLISH_CH9_QUESTIONS,
  ENGLISH_CH10_QUESTIONS,
  ENGLISH_CH11_QUESTIONS,
  ENGLISH_CH12_QUESTIONS,
  ENGLISH_CH12A_QUESTIONS,
  ENGLISH_CH12B_QUESTIONS,
  ENGLISH_CH13_QUESTIONS,
  ENGLISH_CH14_QUESTIONS,
  ENGLISH_CH14A_QUESTIONS,
  ENGLISH_CH14B_QUESTIONS,
  ENGLISH_CH14C_QUESTIONS,
  ENGLISH_CH15_QUESTIONS,
  ENGLISH_CH16_QUESTIONS,
  ENGLISH_CH17_QUESTIONS,
  ENGLISH_CH18_QUESTIONS,
  ENGLISH_CH19_QUESTIONS,
  ENGLISH_CH20_QUESTIONS,
  ENGLISH_CH21_QUESTIONS,
  ENGLISH_CH22_QUESTIONS,
  ENGLISH_CH23_QUESTIONS
};

export function getEnglishChapterQuestions(chapterId: number): VaultQuestion[] {
  switch (chapterId) {
    case 1: return ENGLISH_CH1_QUESTIONS;
    case 2: return ENGLISH_CH2_QUESTIONS;
    case 3: return ENGLISH_CH3_QUESTIONS;
    case 4: return ENGLISH_CH4_QUESTIONS;
    case 5: return ENGLISH_CH5_QUESTIONS;
    case 6: return ENGLISH_CH6_QUESTIONS;
    case 7: return ENGLISH_CH7_QUESTIONS;
    case 8: return ENGLISH_CH8_QUESTIONS;
    case 9: return ENGLISH_CH9_QUESTIONS;
    case 10: return ENGLISH_CH10_QUESTIONS;
    case 11: return ENGLISH_CH11_QUESTIONS;
    case 12: return ENGLISH_CH12_QUESTIONS;
    case 13: return ENGLISH_CH13_QUESTIONS;
    case 14: return ENGLISH_CH14_QUESTIONS;
    case 15: return ENGLISH_CH15_QUESTIONS;
    case 16: return ENGLISH_CH16_QUESTIONS;
    case 17: return ENGLISH_CH17_QUESTIONS;
    case 18: return ENGLISH_CH18_QUESTIONS;
    case 19: return ENGLISH_CH19_QUESTIONS;
    case 20: return ENGLISH_CH20_QUESTIONS;
    case 21: return ENGLISH_CH21_QUESTIONS;
    case 22: return ENGLISH_CH22_QUESTIONS;
    case 23: return ENGLISH_CH23_QUESTIONS;
    // Dedicated Multi-Part Chapters
    case 121: return ENGLISH_CH12A_QUESTIONS;
    case 122: return ENGLISH_CH12B_QUESTIONS;
    case 141: return ENGLISH_CH14A_QUESTIONS;
    case 142: return ENGLISH_CH14B_QUESTIONS;
    case 143: return ENGLISH_CH14C_QUESTIONS;
    default: return ENGLISH_CH1_QUESTIONS;
  }
}

