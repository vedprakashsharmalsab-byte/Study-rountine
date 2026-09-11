import type { MathChapterConcept } from "./types";
import { CH1_REAL_NUMBERS_CONCEPT } from "./ch1_real_numbers";
import { CH2_POLYNOMIALS_CONCEPT } from "./ch2_polynomials";
import { CH3_LINEAR_EQUATIONS_CONCEPT } from "./ch3_linear_equations";
import { CH4_QUADRATICS_CONCEPT } from "./ch4_quadratics";
import { CH5_AP_CONCEPT } from "./ch5_ap";
import { CH6_TRIANGLES_CONCEPT } from "./ch6_triangles";
import { CH7_COORDINATE_GEOM_CONCEPT } from "./ch7_coordinate_geom";
import { CH8_TRIGONOMETRY_CONCEPT } from "./ch8_trigonometry";
import { CH9_APPLICATIONS_TRIG_CONCEPT } from "./ch9_applications_trig";
import { CH10_CIRCLES_CONCEPT } from "./ch10_circles";
import { CH11_AREAS_CIRCLES_CONCEPT } from "./ch11_areas_circles";
import { CH12_SURFACE_AREAS_CONCEPT } from "./ch12_surface_areas";
import { CH13_STATISTICS_CONCEPT } from "./ch13_statistics";
import { CH14_PROBABILITY_CONCEPT } from "./ch14_probability";

export * from "./types";

export const MATH_CHAPTER_CONCEPTS: MathChapterConcept[] = [
  CH1_REAL_NUMBERS_CONCEPT,
  CH2_POLYNOMIALS_CONCEPT,
  CH3_LINEAR_EQUATIONS_CONCEPT,
  CH4_QUADRATICS_CONCEPT,
  CH5_AP_CONCEPT,
  CH6_TRIANGLES_CONCEPT,
  CH7_COORDINATE_GEOM_CONCEPT,
  CH8_TRIGONOMETRY_CONCEPT,
  CH9_APPLICATIONS_TRIG_CONCEPT,
  CH10_CIRCLES_CONCEPT,
  CH11_AREAS_CIRCLES_CONCEPT,
  CH12_SURFACE_AREAS_CONCEPT,
  CH13_STATISTICS_CONCEPT,
  CH14_PROBABILITY_CONCEPT,
];
