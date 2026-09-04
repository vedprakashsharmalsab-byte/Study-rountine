import type { VaultQuestion } from "@/data/vaultQuestions";
import { CH6_QUESTIONS } from "./ch6";
import { CH8_QUESTIONS } from "./ch8";
import { CH9_QUESTIONS } from "./ch9";
import { CH10_QUESTIONS } from "./ch10";
import { CH13_QUESTIONS } from "./ch13";
import { CH14_QUESTIONS } from "./ch14";

// Science Chapters
import { SCI_CH1_QUESTIONS } from "./science/sci_ch1";
import { SCI_CH2_QUESTIONS } from "./science/sci_ch2";
import { SCI_CH3_QUESTIONS } from "./science/sci_ch3";
import { SCI_CH5_QUESTIONS } from "./science/sci_ch5";
import { SCI_CH11_QUESTIONS } from "./science/sci_ch11";
import { SCI_CH12_QUESTIONS } from "./science/sci_ch12";
import { SCI_CH13_QUESTIONS } from "./science/sci_ch13";

export {
  CH6_QUESTIONS,
  CH8_QUESTIONS,
  CH9_QUESTIONS,
  CH10_QUESTIONS,
  CH13_QUESTIONS,
  CH14_QUESTIONS,
  SCI_CH1_QUESTIONS,
  SCI_CH2_QUESTIONS,
  SCI_CH3_QUESTIONS,
  SCI_CH5_QUESTIONS,
  SCI_CH11_QUESTIONS,
  SCI_CH12_QUESTIONS,
  SCI_CH13_QUESTIONS
};

export function getChapterQuestions(chapterId: number, subject: string = "math"): VaultQuestion[] {
  if (subject === "science") {
    switch (chapterId) {
      case 1: return SCI_CH1_QUESTIONS;
      case 2: return SCI_CH2_QUESTIONS;
      case 3: return SCI_CH3_QUESTIONS;
      case 5: return SCI_CH5_QUESTIONS;
      case 11: return SCI_CH11_QUESTIONS;
      case 12: return SCI_CH12_QUESTIONS;
      case 13: return SCI_CH13_QUESTIONS;
      default: return SCI_CH1_QUESTIONS;
    }
  }

  // Mathematics default
  switch (chapterId) {
    case 6: return CH6_QUESTIONS;
    case 8: return CH8_QUESTIONS;
    case 9: return CH9_QUESTIONS;
    case 10: return CH10_QUESTIONS;
    case 13: return CH13_QUESTIONS;
    case 14: return CH14_QUESTIONS;
    default: return CH6_QUESTIONS;
  }
}

