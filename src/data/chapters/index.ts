import type { VaultQuestion } from "@/data/vaultQuestions";
import { CH6_QUESTIONS } from "./ch6";
import { CH8_QUESTIONS } from "./ch8";
import { CH9_QUESTIONS } from "./ch9";
import { CH10_QUESTIONS } from "./ch10";
import { CH13_QUESTIONS } from "./ch13";
import { CH14_QUESTIONS } from "./ch14";

export {
  CH6_QUESTIONS,
  CH8_QUESTIONS,
  CH9_QUESTIONS,
  CH10_QUESTIONS,
  CH13_QUESTIONS,
  CH14_QUESTIONS
};

export function getChapterQuestions(chapterId: number): VaultQuestion[] {
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
