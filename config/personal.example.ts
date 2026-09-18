/**
 * Personal Configuration Template
 * Copy to config/personal.ts to customize school, faculty, and student metadata.
 */

export interface PersonalConfig {
  schoolName: string;
  shortSchoolName: string;
  defaultFaculty: string;
  defaultCadetName: string;
}

export const PERSONAL_CONFIG: PersonalConfig = {
  schoolName: "Lakshmipat Singhania Academy",
  shortSchoolName: "LSA",
  defaultFaculty: "Subject Expert Faculty",
  defaultCadetName: "CBSE Cadet"
};
