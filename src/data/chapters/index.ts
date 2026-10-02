import type { VaultQuestion } from "@/data/vaultQuestions";
import { CH1_QUESTIONS } from "./ch1";
import { CH2_QUESTIONS } from "./ch2";
import { CH3_QUESTIONS } from "./ch3";
import { CH4_QUESTIONS } from "./ch4";
import { CH5_QUESTIONS } from "./ch5";
import { CH6_QUESTIONS } from "./ch6";
import { CH7_QUESTIONS } from "./ch7";
import { CH8_QUESTIONS } from "./ch8";
import { CH9_QUESTIONS } from "./ch9";
import { CH10_QUESTIONS } from "./ch10";
import { CH11_QUESTIONS } from "./ch11";
import { CH12_QUESTIONS } from "./ch12";
import { CH13_QUESTIONS } from "./ch13";
import { CH14_QUESTIONS } from "./ch14";

// Science Chapters
import { SCI_CH1_QUESTIONS } from "./science/sci_ch1";
import { SCI_CH2_QUESTIONS } from "./science/sci_ch2";
import { SCI_CH3_QUESTIONS } from "./science/sci_ch3";
import { SCI_CH4_QUESTIONS } from "./science/sci_ch4";
import { SCI_CH5_QUESTIONS } from "./science/sci_ch5";
import { SCI_CH6_QUESTIONS } from "./science/sci_ch6";
import { SCI_CH7_QUESTIONS } from "./science/sci_ch7";
import { SCI_CH8_QUESTIONS } from "./science/sci_ch8";
import { SCI_CH9_QUESTIONS } from "./science/sci_ch9";
import { SCI_CH10_QUESTIONS } from "./science/sci_ch10";
import { SCI_CH11_QUESTIONS } from "./science/sci_ch11";
import { SCI_CH12_QUESTIONS } from "./science/sci_ch12";
import { SCI_CH13_QUESTIONS } from "./science/sci_ch13";

// Social Science (SST) Chapters
import {
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
  getSSTChapterQuestions
} from "./sst";

// English Chapters
import { getEnglishChapterQuestions } from "./english";

// Hindi Chapters (Course B - Code 085)
import { getHindiChapterQuestions } from "./hindi";

export {
  getEnglishChapterQuestions,
  getHindiChapterQuestions,
  CH1_QUESTIONS,
  CH2_QUESTIONS,
  CH3_QUESTIONS,
  CH4_QUESTIONS,
  CH5_QUESTIONS,
  CH6_QUESTIONS,
  CH7_QUESTIONS,
  CH8_QUESTIONS,
  CH9_QUESTIONS,
  CH10_QUESTIONS,
  CH11_QUESTIONS,
  CH12_QUESTIONS,
  CH13_QUESTIONS,
  CH14_QUESTIONS,
  SCI_CH1_QUESTIONS,
  SCI_CH2_QUESTIONS,
  SCI_CH3_QUESTIONS,
  SCI_CH4_QUESTIONS,
  SCI_CH5_QUESTIONS,
  SCI_CH6_QUESTIONS,
  SCI_CH7_QUESTIONS,
  SCI_CH8_QUESTIONS,
  SCI_CH9_QUESTIONS,
  SCI_CH10_QUESTIONS,
  SCI_CH11_QUESTIONS,
  SCI_CH12_QUESTIONS,
  SCI_CH13_QUESTIONS,
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
  getSSTChapterQuestions
};

export function getChapterQuestions(chapterId: number, subject: string = "math"): VaultQuestion[] {
  if (subject === "sst" || subject === "social_science" || subject === "social") {
    return getSSTChapterQuestions(chapterId);
  }

  if (subject === "science") {
    switch (chapterId) {
      case 1: return SCI_CH1_QUESTIONS;
      case 2: return SCI_CH2_QUESTIONS;
      case 3: return SCI_CH3_QUESTIONS;
      case 4: return SCI_CH4_QUESTIONS;
      case 5: return SCI_CH5_QUESTIONS;
      case 6: return SCI_CH6_QUESTIONS;
      case 7: return SCI_CH7_QUESTIONS;
      case 8: return SCI_CH8_QUESTIONS;
      case 9: return SCI_CH9_QUESTIONS;
      case 10: return SCI_CH10_QUESTIONS;
      case 11: return SCI_CH11_QUESTIONS;
      case 12: return SCI_CH12_QUESTIONS;
      case 13: return SCI_CH13_QUESTIONS;
      default: return SCI_CH1_QUESTIONS;
    }
  }

  if (subject === "english") {
    return getEnglishChapterQuestions(chapterId);
  }

  if (subject === "hindi") {
    return getHindiChapterQuestions(chapterId);
  }

  // Mathematics default
  switch (chapterId) {
    case 1: return CH1_QUESTIONS;
    case 2: return CH2_QUESTIONS;
    case 3: return CH3_QUESTIONS;
    case 4: return CH4_QUESTIONS;
    case 5: return CH5_QUESTIONS;
    case 6: return CH6_QUESTIONS;
    case 7: return CH7_QUESTIONS;
    case 8: return CH8_QUESTIONS;
    case 9: return CH9_QUESTIONS;
    case 10: return CH10_QUESTIONS;
    case 11: return CH11_QUESTIONS;
    case 12: return CH12_QUESTIONS;
    case 13: return CH13_QUESTIONS;
    case 14: return CH14_QUESTIONS;
    default: return CH1_QUESTIONS;
  }
}
