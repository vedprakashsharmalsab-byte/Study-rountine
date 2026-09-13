import type { VaultQuestion } from "@/data/vaultQuestions";

// Sparsh Prose (Chapters 1 to 7)
import { HINDI_CH1_QUESTIONS } from "./ch1_bade_bhai_sahab";
import { HINDI_CH2_QUESTIONS } from "./ch2_diary_ka_ek_panna";
import { HINDI_CH3_QUESTIONS } from "./ch3_tatara_vamiro";
import { HINDI_CH4_QUESTIONS } from "./ch4_teesri_kasam";
import { HINDI_CH5_QUESTIONS } from "./ch5_ab_kahan_doosre";
import { HINDI_CH6_QUESTIONS } from "./ch6_patjhar_mein_tooti";
import { HINDI_CH7_QUESTIONS } from "./ch7_kartoos";

// Sparsh Poetry (Chapters 8 to 14)
import { HINDI_CH8_QUESTIONS } from "./ch8_sakhi";
import { HINDI_CH9_QUESTIONS } from "./ch9_pad";
import { HINDI_CH10_QUESTIONS } from "./ch10_manushyata";
import { HINDI_CH11_QUESTIONS } from "./ch11_parvat_pradesh";
import { HINDI_CH12_QUESTIONS } from "./ch12_top";
import { HINDI_CH13_QUESTIONS } from "./ch13_kar_chale_hum_fida";
import { HINDI_CH14_QUESTIONS } from "./ch14_aatmatran";

// Sanchayan (Chapters 15 to 17)
import { HINDI_CH15_QUESTIONS } from "./ch15_harihar_kaka";
import { HINDI_CH16_QUESTIONS } from "./ch16_sapno_ke_se_din";
import { HINDI_CH17_QUESTIONS } from "./ch17_topi_shukla";

// Grammar (Chapters 18 to 21)
import { HINDI_CH18_QUESTIONS } from "./ch18_padbandh";
import { HINDI_CH19_QUESTIONS } from "./ch19_vakya_roopantaran";
import { HINDI_CH20_QUESTIONS } from "./ch20_samas";
import { HINDI_CH21_QUESTIONS } from "./ch21_muhavare";

export {
  HINDI_CH1_QUESTIONS,
  HINDI_CH2_QUESTIONS,
  HINDI_CH3_QUESTIONS,
  HINDI_CH4_QUESTIONS,
  HINDI_CH5_QUESTIONS,
  HINDI_CH6_QUESTIONS,
  HINDI_CH7_QUESTIONS,
  HINDI_CH8_QUESTIONS,
  HINDI_CH9_QUESTIONS,
  HINDI_CH10_QUESTIONS,
  HINDI_CH11_QUESTIONS,
  HINDI_CH12_QUESTIONS,
  HINDI_CH13_QUESTIONS,
  HINDI_CH14_QUESTIONS,
  HINDI_CH15_QUESTIONS,
  HINDI_CH16_QUESTIONS,
  HINDI_CH17_QUESTIONS,
  HINDI_CH18_QUESTIONS,
  HINDI_CH19_QUESTIONS,
  HINDI_CH20_QUESTIONS,
  HINDI_CH21_QUESTIONS
};

export function getHindiChapterQuestions(chapterId: number): VaultQuestion[] {
  switch (chapterId) {
    case 1: return HINDI_CH1_QUESTIONS;
    case 2: return HINDI_CH2_QUESTIONS;
    case 3: return HINDI_CH3_QUESTIONS;
    case 4: return HINDI_CH4_QUESTIONS;
    case 5: return HINDI_CH5_QUESTIONS;
    case 6: return HINDI_CH6_QUESTIONS;
    case 7: return HINDI_CH7_QUESTIONS;
    case 8: return HINDI_CH8_QUESTIONS;
    case 9: return HINDI_CH9_QUESTIONS;
    case 10: return HINDI_CH10_QUESTIONS;
    case 11: return HINDI_CH11_QUESTIONS;
    case 12: return HINDI_CH12_QUESTIONS;
    case 13: return HINDI_CH13_QUESTIONS;
    case 14: return HINDI_CH14_QUESTIONS;
    case 15: return HINDI_CH15_QUESTIONS;
    case 16: return HINDI_CH16_QUESTIONS;
    case 17: return HINDI_CH17_QUESTIONS;
    case 18: return HINDI_CH18_QUESTIONS;
    case 19: return HINDI_CH19_QUESTIONS;
    case 20: return HINDI_CH20_QUESTIONS;
    case 21: return HINDI_CH21_QUESTIONS;
    default: return HINDI_CH1_QUESTIONS;
  }
}
