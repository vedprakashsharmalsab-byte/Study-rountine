// =========================================================================
// CBSE Class 10 Social Science — Question Vault for All 20 Chapters
// Complete Coverage:
// History: Chapters 1, 2, 11, 12
// Geography: Chapters 5, 6, 7, 13, 14, 15, 16
// Political Science / Civics: Chapters 3, 4, 17, 18, 19
// Economics: Chapters 8, 9, 10, 20
// Standard: CBSE Board 2026-27 (Code 087) Authentic Question Bank
// =========================================================================

import type { VaultQuestion } from "@/data/vaultQuestions";

// History Chapters
import { SST_CH1_QUESTIONS } from "./sst_ch1_europe";
import { SST_CH2_QUESTIONS } from "./sst_ch2_india";
import { SST_CH11_QUESTIONS } from "./sst_ch11_global_world";
import { SST_CH12_QUESTIONS } from "./sst_ch12_print_culture";

// Political Science / Civics Chapters
import { SST_CH3_QUESTIONS } from "./sst_ch3_power_sharing";
import { SST_CH4_QUESTIONS } from "./sst_ch4_federalism";
import { SST_CH17_QUESTIONS } from "./sst_ch17_gender_religion";
import { SST_CH18_QUESTIONS } from "./sst_ch18_political_parties";
import { SST_CH19_QUESTIONS } from "./sst_ch19_outcomes_democracy";

// Geography Chapters
import { SST_CH5_QUESTIONS } from "./sst_ch5_resources_dev";
import { SST_CH6_QUESTIONS } from "./sst_ch6_forest_wildlife";
import { SST_CH7_QUESTIONS } from "./sst_ch7_water_resources";
import { SST_CH13_QUESTIONS } from "./sst_ch13_agriculture";
import { SST_CH14_QUESTIONS } from "./sst_ch14_minerals_energy";
import { SST_CH15_QUESTIONS } from "./sst_ch15_manufacturing";
import { SST_CH16_QUESTIONS } from "./sst_ch16_lifelines_map";

// Economics Chapters (Full 30 Questions per Chapter)
import { SST_CH8_QUESTIONS } from "./sst_ch8_development";
import { SST_CH9_QUESTIONS } from "./sst_ch9_sectors";
import { SST_CH10_QUESTIONS } from "./sst_ch10_money_credit";
import { SST_CH20_QUESTIONS } from "./sst_ch20_globalisation";

export {
  SST_CH1_QUESTIONS,
  SST_CH2_QUESTIONS,
  SST_CH3_QUESTIONS,
  SST_CH4_QUESTIONS,
  SST_CH5_QUESTIONS,
  SST_CH6_QUESTIONS,
  SST_CH7_QUESTIONS,
  SST_CH8_QUESTIONS,
  SST_CH9_QUESTIONS,
  SST_CH10_QUESTIONS,
  SST_CH11_QUESTIONS,
  SST_CH12_QUESTIONS,
  SST_CH13_QUESTIONS,
  SST_CH14_QUESTIONS,
  SST_CH15_QUESTIONS,
  SST_CH16_QUESTIONS,
  SST_CH17_QUESTIONS,
  SST_CH18_QUESTIONS,
  SST_CH19_QUESTIONS,
  SST_CH20_QUESTIONS
};

export function getSSTChapterQuestions(chapterId: number): VaultQuestion[] {
  switch (chapterId) {
    case 1: return SST_CH1_QUESTIONS;
    case 2: return SST_CH2_QUESTIONS;
    case 3: return SST_CH3_QUESTIONS;
    case 4: return SST_CH4_QUESTIONS;
    case 5: return SST_CH5_QUESTIONS;
    case 6: return SST_CH6_QUESTIONS;
    case 7: return SST_CH7_QUESTIONS;
    case 8: return SST_CH8_QUESTIONS;
    case 9: return SST_CH9_QUESTIONS;
    case 10: return SST_CH10_QUESTIONS;
    case 11: return SST_CH11_QUESTIONS;
    case 12: return SST_CH12_QUESTIONS;
    case 13: return SST_CH13_QUESTIONS;
    case 14: return SST_CH14_QUESTIONS;
    case 15: return SST_CH15_QUESTIONS;
    case 16: return SST_CH16_QUESTIONS;
    case 17: return SST_CH17_QUESTIONS;
    case 18: return SST_CH18_QUESTIONS;
    case 19: return SST_CH19_QUESTIONS;
    case 20: return SST_CH20_QUESTIONS;
    default: return SST_CH1_QUESTIONS;
  }
}
