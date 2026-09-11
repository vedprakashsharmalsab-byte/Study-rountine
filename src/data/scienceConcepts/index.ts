import type { ScienceChapterConcept } from "./types";
import { SCI_CH1_CONCEPT } from "./sci_ch1_chemical_reactions";
import { SCI_CH2_CONCEPT } from "./sci_ch2_acids_bases_salts";
import { SCI_CH3_CONCEPT } from "./sci_ch3_metals_nonmetals";
import { SCI_CH4_CONCEPT } from "./sci_ch4_carbon_compounds";
import { SCI_CH5_CONCEPT } from "./sci_ch5_life_processes";
import { SCI_CH6_CONCEPT } from "./sci_ch6_control_coordination";
import { SCI_CH7_CONCEPT } from "./sci_ch7_reproduction";
import { SCI_CH8_CONCEPT } from "./sci_ch8_heredity_evolution";
import { SCI_CH9_CONCEPT } from "./sci_ch9_light";
import { SCI_CH10_CONCEPT } from "./sci_ch10_human_eye";
import { SCI_CH11_CONCEPT } from "./sci_ch11_electricity";
import { SCI_CH12_CONCEPT } from "./sci_ch12_magnetic_effects";
import { SCI_CH13_CONCEPT } from "./sci_ch13_environment";

export type { ScienceChapterConcept };

export const SCIENCE_CHAPTER_CONCEPTS: ScienceChapterConcept[] = [
  SCI_CH1_CONCEPT,
  SCI_CH2_CONCEPT,
  SCI_CH3_CONCEPT,
  SCI_CH4_CONCEPT,
  SCI_CH5_CONCEPT,
  SCI_CH6_CONCEPT,
  SCI_CH7_CONCEPT,
  SCI_CH8_CONCEPT,
  SCI_CH9_CONCEPT,
  SCI_CH10_CONCEPT,
  SCI_CH11_CONCEPT,
  SCI_CH12_CONCEPT,
  SCI_CH13_CONCEPT,
];

export function getScienceChapter(chapterNo: number): ScienceChapterConcept | undefined {
  return SCIENCE_CHAPTER_CONCEPTS.find((c) => c.chapterNo === chapterNo);
}
