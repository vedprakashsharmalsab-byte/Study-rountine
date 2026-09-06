"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { 
  Sparkles, 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  BookOpen, 
  CheckCircle2,
  Maximize2
} from "lucide-react";

export interface ChapterMnemonicGroup {
  chapterId: number;
  chapterName: string;
  badge: string;
  keyFormulas: string[];
  images: {
    title: string;
    src: string;
    description: string;
  }[];
}

export const MNEMONIC_CHAPTERS: ChapterMnemonicGroup[] = [
  {
    chapterId: 6,
    chapterName: "Triangles",
    badge: "High Board Weightage (9-10 Marks)",
    keyFormulas: [
      "BPT Theorem: If DE ∥ BC, then AD/DB = AE/EC",
      "Converse of BPT: If AD/DB = AE/EC, then DE ∥ BC",
      "AA Similarity: If two angles of one △ are equal to two angles of another △, the △s are similar",
      "SAS Similarity: One angle equal and including sides proportional",
      "SSS Similarity: All three pairs of corresponding sides in same ratio"
    ],
    images: [
      {
        title: "Triangles Master Cheat Sheet (Overview & Criteria)",
        src: "/mnemonics/maths/triangles.jpg",
        description: "Complete visual diagram of similarity criteria, BPT proportional division, and proof structure."
      },
      {
        title: "Triangles High-Yield Formula Breakdown",
        src: "/mnemonics/maths/triangles.jpeg",
        description: "Visual summary of parallel lines, ratio properties, and common board traps."
      },
      {
        title: "Triangles Theorem Proof Flowchart",
        src: "/mnemonics/maths/triangles.png",
        description: "Step-by-step logic map for proving BPT and converse with zero marks deduction."
      }
    ]
  },
  {
    chapterId: 8,
    chapterName: "Introduction to Trigonometry",
    badge: "Core Algebra & Proofs (8-9 Marks)",
    keyFormulas: [
      "sin²θ + cos²θ = 1 ⟹ sin²θ = 1 - cos²θ, cos²θ = 1 - sin²θ",
      "1 + tan²θ = sec²θ ⟹ sec²θ - tan²θ = 1",
      "1 + cot²θ = csc²θ ⟹ csc²θ - cot²θ = 1",
      "tan θ = sin θ / cos θ, cot θ = cos θ / sin θ",
      "Standard Angles: sin 30° = 1/2, cos 30° = √3/2, tan 45° = 1, sin 60° = √3/2"
    ],
    images: [
      {
        title: "Trigonometry Master Formula Matrix",
        src: "/mnemonics/maths/intrototrigonometry.jpg",
        description: "All standard angle values (0°, 30°, 45°, 60°, 90°) and fundamental identities."
      },
      {
        title: "Trig Ratios & Pandit Badri Prasad Trick",
        src: "/mnemonics/maths/trigonometry.jpg",
        description: "PBP / HHB mnemonic: P/H (sin), B/H (cos), P/B (tan) with reciprocal relations."
      },
      {
        title: "Trigonometric Identity Proof Navigator",
        src: "/mnemonics/maths/trigonomerty.jpg",
        description: "Algebraic transformation steps: rationalizing denominators, converting to sin/cos."
      }
    ]
  },
  {
    chapterId: 9,
    chapterName: "Some Applications of Trigonometry",
    badge: "Compulsory 4M/5M Real-World Problem",
    keyFormulas: [
      "Angle of Elevation: Looking upward from observer eye level (tan θ = height / distance)",
      "Angle of Depression: Looking downward from observer (Angle of Depression = Angle of Elevation to top)",
      "Two-Triangle Setup (Same Side): h = d · (tan α · tan β) / (tan α - tan β)",
      "Two-Triangle Setup (Opposite Sides): Total Distance = h · (cot α + cot β)",
      "Values to Remember: √3 ≈ 1.732, √2 ≈ 1.414"
    ],
    images: [
      {
        title: "Heights & Distances Visual Geometry",
        src: "/mnemonics/maths/applications-of-trigonometry.jpg",
        description: "Observer eye-level vs ground-level, single vs double angle configurations."
      },
      {
        title: "Elevation & Depression Master Blueprint",
        src: "/mnemonics/maths/applications-of-trigonometry.png",
        description: "Diagrammatic guide showing alternate interior angles and correct right triangle labeling."
      },
      {
        title: "Real-World Multi-Angle Applications",
        src: "/mnemonics/maths/Application  of trigonometry.png",
        description: "Cloud reflection in water, aeroplane speed, and lighthouse double ship problems."
      }
    ]
  },
  {
    chapterId: 10,
    chapterName: "Circles & Areas Related to Circles",
    badge: "Geometry Theorem & Calculations (9 Marks)",
    keyFormulas: [
      "Theorem 10.1: Tangent at any point is ⊥ to radius through point of contact (OP ⊥ AB)",
      "Theorem 10.2: Lengths of tangents drawn from an external point are EQUAL (AP = BP)",
      "Circumscribed Quadrilateral: AB + CD = AD + BC",
      "Area of Sector = (θ/360°) × πr²",
      "Length of Arc = (θ/360°) × 2πr",
      "Area of Segment = Area of Sector - Area of corresponding △"
    ],
    images: [
      {
        title: "Circles Theorems & Tangent Properties",
        src: "/mnemonics/maths/circle.jpg",
        description: "Core properties: external point tangents, angle subtended at center vs chord."
      },
      {
        title: "Areas Related to Circles Complete Formulae",
        src: "/mnemonics/maths/area related to circle.jpeg",
        description: "Sector, minor/major segment, shaded region calculations, rotation of wheels."
      },
      {
        title: "Circles Sector & Segment Geometry Map",
        src: "/mnemonics/maths/area related to circle.jpg",
        description: "Visual formula sheet for clock hands, car wipers, brooches, and designs."
      },
      {
        title: "Circles High-Yield Board Revision Diagram",
        src: "/mnemonics/maths/area related to circle.png",
        description: "Comprehensive diagram with solved shaded area tricks and perimeter formulas."
      }
    ]
  },
  {
    chapterId: 13,
    chapterName: "Statistics",
    badge: "100% Guaranteed Scoring (7-8 Marks)",
    keyFormulas: [
      "Direct Mean: x̄ = (Σ fᵢxᵢ) / (Σ fᵢ)",
      "Assumed Mean: x̄ = a + (Σ fᵢdᵢ / Σ fᵢ), where dᵢ = xᵢ - a",
      "Step-Deviation: x̄ = a + h × (Σ fᵢuᵢ / Σ fᵢ), where uᵢ = (xᵢ - a)/h",
      "Median: l + [(N/2 - cf) / f] × h  (cf is of preceding class!)",
      "Mode: l + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h",
      "Empirical Formula: Mode = 3 Median - 2 Mean"
    ],
    images: [
      {
        title: "Statistics Master Formula Board",
        src: "/mnemonics/maths/statistics.jpg",
        description: "Summary of Direct, Assumed Mean, Step-Deviation, Median, and Mode formulas."
      },
      {
        title: "Median & Modal Class Identification Guide",
        src: "/mnemonics/maths/stastics.jpg",
        description: "How to identify N/2 cumulative frequency and maximum frequency modal class without errors."
      },
      {
        title: "Statistics Step-by-Step Table Structure",
        src: "/mnemonics/maths/statics1.png",
        description: "Complete table setup for class intervals, class marks, frequencies, and products."
      },
      {
        title: "Empirical Relationship & Missing Frequency Tricks",
        src: "/mnemonics/maths/Stastix.jpg",
        description: "Methods for solving missing frequencies x and y when median is known."
      },
      {
        title: "Statistics Quick Revision Cheat Sheet",
        src: "/mnemonics/maths/STISRICS.png",
        description: "Examiner traps: using cf of preceding class, converting inclusive to exclusive intervals."
      }
    ]
  },
  {
    chapterId: 14,
    chapterName: "Probability",
    badge: "High Accuracy Chapter (4-5 Marks)",
    keyFormulas: [
      "P(E) = (Number of favourable outcomes) / (Total number of possible outcomes)",
      "0 ≤ P(E) ≤ 1, P(Sure Event) = 1, P(Impossible Event) = 0",
      "P(E) + P(not E) = 1 ⟹ P(Ē) = 1 - P(E)",
      "Playing Cards (52): 26 Red (13 ♥, 13 ♦), 26 Black (13 ♠, 13 ♣). 12 Face Cards (4K, 4Q, 4J). Aces are NOT face cards!",
      "Two Dice: Total outcomes = 36. Doublets = 6 (P = 1/6). Sum 7 = 6 outcomes (P = 1/6).",
      "Leap Year: 366 days = 52 weeks + 2 days. P(53 Sundays) = 2/7. Non-leap year = 1/7."
    ],
    images: [
      {
        title: "Probability Complete Universe & Card Deck",
        src: "/mnemonics/maths/probability.jpg",
        description: "Visual card deck breakdown (suits, colors, face cards) and 2-dice 36-outcome matrix."
      },
      {
        title: "Probability Events & Leap Year Guide",
        src: "/mnemonics/maths/probability.jpeg",
        description: "At least vs At most coin flips, balls in bags, and numbered disc problems."
      }
    ]
  },
  {
    chapterId: 1,
    chapterName: "Real Numbers",
    badge: "Foundational (6 Marks)",
    keyFormulas: [
      "Fundamental Theorem of Arithmetic: Every composite number can be uniquely expressed as product of primes",
      "HCF(a, b) × LCM(a, b) = a × b",
      "Proof of irrationality: √2, √3, √5 is irrational by contradiction"
    ],
    images: [
      {
        title: "Real Numbers Flowchart & Prime Factorization",
        src: "/mnemonics/maths/realnumber.jpg",
        description: "Classifying rational, irrational, HCF/LCM relations."
      },
      {
        title: "Irrationality Proof Step Guide",
        src: "/mnemonics/maths/realnumber (2).jpg",
        description: "Notebook template for proving √p is irrational using coprime assumptions."
      },
      {
        title: "Real Numbers Core Concepts",
        src: "/mnemonics/maths/realnumber.jpeg",
        description: "Summary of decimal expansions and prime factors."
      },
      {
        title: "Real Numbers Quick Reference Sheet",
        src: "/mnemonics/maths/realnuber 12.jpg",
        description: "HCF × LCM formula and high-yield board question patterns."
      }
    ]
  },
  {
    chapterId: 2,
    chapterName: "Polynomials",
    badge: "Algebra (4 Marks)",
    keyFormulas: [
      "Quadratic Polynomial: ax² + bx + c",
      "Sum of zeroes: α + β = -b/a",
      "Product of zeroes: αβ = c/a",
      "Forming polynomial: k[x² - (α + β)x + αβ]"
    ],
    images: [
      {
        title: "Polynomials Zeroes & Coefficients",
        src: "/mnemonics/maths/polynomial.jpg",
        description: "Relationship between zeroes and coefficients of quadratic polynomials."
      },
      {
        title: "Polynomials Graphical Representation",
        src: "/mnemonics/maths/polynomial (2).jpg",
        description: "Parabola shapes, number of zeroes from x-axis intersections."
      }
    ]
  },
  {
    chapterId: 3,
    chapterName: "Pair of Linear Equations in Two Variables",
    badge: "Algebra (6 Marks)",
    keyFormulas: [
      "a₁/a₂ ≠ b₁/b₂ ⟹ Intersecting lines, Unique solution, Consistent",
      "a₁/a₂ = b₁/b₂ = c₁/c₂ ⟹ Coincident lines, Infinitely many solutions, Consistent (dependent)",
      "a₁/a₂ = b₁/b₂ ≠ c₁/c₂ ⟹ Parallel lines, No solution, Inconsistent"
    ],
    images: [
      {
        title: "Consistency & Algebraic Conditions",
        src: "/mnemonics/maths/pair of linear equation.jpg",
        description: "Comparison of ratios a₁/a₂, b₁/b₂, c₁/c₂ and geometric interpretations."
      },
      {
        title: "Linear Equations Solving Methods",
        src: "/mnemonics/maths/-pair of linear equation.jpg",
        description: "Substitution and Elimination methods with word problem setups."
      }
    ]
  },
  {
    chapterId: 4,
    chapterName: "Quadratic Equations",
    badge: "Algebra (6 Marks)",
    keyFormulas: [
      "Standard form: ax² + bx + c = 0 (a ≠ 0)",
      "Discriminant: D = b² - 4ac",
      "D > 0: Two distinct real roots; D = 0: Two equal real roots; D < 0: No real roots",
      "Quadratic Formula: x = (-b ± √D) / (2a)"
    ],
    images: [
      {
        title: "Quadratic Equations Nature of Roots",
        src: "/mnemonics/maths/qudratic equatoion.jpeg",
        description: "Discriminant conditions, factorization tricks, and speed-distance setups."
      }
    ]
  },
  {
    chapterId: 5,
    chapterName: "Arithmetic Progressions",
    badge: "Algebra (6 Marks)",
    keyFormulas: [
      "General AP: a, a+d, a+2d, ...",
      "n-th term: aₙ = a + (n - 1)d",
      "Sum of first n terms: Sₙ = (n/2)[2a + (n - 1)d] = (n/2)[a + l]",
      "Three terms in AP: a - d, a, a + d"
    ],
    images: [
      {
        title: "Arithmetic Progression Master Formulas",
        src: "/mnemonics/maths/Arthmetic progressio.jpg",
        description: "n-th term, sum of terms, and finding common difference d."
      },
      {
        title: "AP Real-World Word Problem Guide",
        src: "/mnemonics/maths/artmetic progressoin.jpeg",
        description: "Installments, logs stacking, and sequence sum applications."
      }
    ]
  },
  {
    chapterId: 7,
    chapterName: "Coordinate Geometry",
    badge: "Coordinate Systems (6 Marks)",
    keyFormulas: [
      "Distance Formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²]",
      "Section Formula: P(x, y) = [(m₁x₂ + m₂x₁)/(m₁ + m₂), (m₁y₂ + m₂y₁)/(m₁ + m₂)]",
      "Midpoint Formula: M = [(x₁ + x₂)/2, (y₁ + y₂)/2]"
    ],
    images: [
      {
        title: "Coordinate Geometry Visual Summary",
        src: "/mnemonics/maths/coordinate geometry.jpeg",
        description: "Distance formula, section formula, collinearity, and quadrilateral types."
      }
    ]
  },
  {
    chapterId: 12,
    chapterName: "Surface Areas and Volumes",
    badge: "Mensuration (6 Marks)",
    keyFormulas: [
      "Cylinder: CSA = 2πrh, TSA = 2πr(r + h), Vol = πr²h",
      "Cone: CSA = πrl (where l = √(r² + h²)), TSA = πr(r + l), Vol = (1/3)πr²h",
      "Sphere: Surface Area = 4πr², Vol = (4/3)πr³",
      "Hemisphere: CSA = 2πr², TSA = 3πr², Vol = (2/3)πr³"
    ],
    images: [
      {
        title: "Solid Geometry Formula Blueprint",
        src: "/mnemonics/maths/SURFACE AREA VOLUME.JPG",
        description: "All 3D figures: cylinder, cone, sphere, hemisphere surface areas & volumes."
      },
      {
        title: "Combination of Solids & Surface Area Rules",
        src: "/mnemonics/maths/SURFACE AREA VOLUME!.jpg",
        description: "Why total surface area adds visible surfaces (NOT sum of TSAs)."
      },
      {
        title: "Mensuration Quick Reference Card",
        src: "/mnemonics/maths/surface area volume .jpg",
        description: "Conversion of solids, liquid displacement, and rate of flow calculations."
      }
    ]
  }
];

export const SCIENCE_MNEMONIC_CHAPTERS: ChapterMnemonicGroup[] = [
  {
    chapterId: 1,
    chapterName: "Chemical Reactions and Equations",
    badge: "Board Weightage (6-8 Marks)",
    keyFormulas: [
      "Combination: A + B -> AB (Exothermic, e.g. Quicklime CaO + H2O -> Ca(OH)2)",
      "Thermal Decomposition: 2FeSO4 -> Fe2O3 + SO2 + SO3; 2Pb(NO3)2 -> 2PbO + 4NO2 + O2",
      "Electrolytic: 2H2O -> 2H2 (Cathode) + O2 (Anode) in 2:1 volume ratio",
      "Displacement: Fe + CuSO4 -> FeSO4 + Cu (Blue to light green)",
      "Redox: Oxidation = Gain of O / Loss of H; Reduction = Gain of H / Loss of O"
    ],
    images: [
      {
        title: "Chemical Reactions & Equations Complete Mindmap",
        src: "/mnemonics/science/ch1_chemical_reactions.jpeg",
        description: "Visual roadmap of reaction types, balancing techniques, color transformations, and redox agents."
      }
    ]
  },
  {
    chapterId: 2,
    chapterName: "Acids, Bases and Salts",
    badge: "Board Weightage (6-8 Marks)",
    keyFormulas: [
      "Acid + Metal -> Salt + H2^ (Pop sound); Acid + Carbonate -> Salt + H2O + CO2^ (Lime water milky)",
      "Neutralization: Acid + Base -> Salt + Water (Exothermic)",
      "pH Scale: pH = -log[H+]; pH < 7 Acidic, pH = 7 Neutral, pH > 7 Basic",
      "Bleaching Powder: Ca(OH)2 + Cl2 -> CaOCl2 + H2O",
      "Baking Soda: NaCl + H2O + CO2 + NH3 -> NH4Cl + NaHCO3",
      "Plaster of Paris: CaSO4·2H2O -(373K)-> CaSO4·1/2H2O + 1.5 H2O"
    ],
    images: [
      {
        title: "Acids, Bases & Salts Revision Infographic",
        src: "/mnemonics/science/ch2_acids_bases_salts.jpeg",
        description: "Visual indicator color changes, pH chart, industrial salts preparation, and chlor-alkali process."
      }
    ]
  },
  {
    chapterId: 3,
    chapterName: "Metals and Non-Metals",
    badge: "Board Weightage (7-9 Marks)",
    keyFormulas: [
      "Reactivity Series: K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au",
      "Amphoteric Oxides: Al2O3 + 6HCl -> 2AlCl3 + 3H2O; Al2O3 + 2NaOH -> 2NaAlO2 + H2O",
      "Ionic Bond: Transfer of electrons between metal cation and non-metal anion (high m.p., conducts in molten)",
      "Roasting (Sulfide, excess air): 2ZnS + 3O2 -> 2ZnO + 2SO2",
      "Calcination (Carbonate, limited air): ZnCO3 -> ZnO + CO2",
      "Thermite Reaction: Fe2O3 + 2Al -> 2Fe(l) + Al2O3 + Immense Heat"
    ],
    images: [
      {
        title: "Metals and Non-Metals Master Sheet",
        src: "/mnemonics/science/ch3_metals_non_metals.jpeg",
        description: "Metallurgy extraction flowchart, reactivity mnemonic, ionic crystal properties, and corrosion prevention."
      }
    ]
  },
  {
    chapterId: 4,
    chapterName: "Carbon and its Compounds",
    badge: "Board Weightage (6-8 Marks)",
    keyFormulas: [
      "Covalent Bond: Tetravalent carbon forms 4 shared pairs (catenation + small atomic size)",
      "Homologous Series: Alkanes (CnH2n+2), Alkenes (CnH2n), Alkynes (CnH2n-2)",
      "Combustion: CnH2n+2 + O2 -> CO2 + H2O + Heat + Light",
      "Oxidation: CH3CH2OH -(Alk. KMnO4)-> CH3COOH",
      "Esterification: CH3COOH + C2H5OH -(conc H2SO4)-> CH3COOC2H5 + H2O (Sweet fruity odor)",
      "Saponification: Ester + NaOH -> Soap (R-COONa) + Glycerol"
    ],
    images: [
      {
        title: "Carbon and its Compounds Infographic",
        src: "/mnemonics/science/ch4_carbon_compounds.jpeg",
        description: "Nomenclature rules, structural isomers, functional groups, and micelle cleansing mechanism."
      }
    ]
  },
  {
    chapterId: 5,
    chapterName: "Life Processes",
    badge: "Board Weightage (8-10 Marks)",
    keyFormulas: [
      "Photosynthesis: 6CO2 + 12H2O -(Light, Chlorophyll)-> C6H12O6 + 6O2 + 6H2O",
      "Aerobic Respiration: Glucose -> Pyruvate -> 6CO2 + 6H2O + 38 ATP (Mitochondria)",
      "Anaerobic: Yeast -> Ethanol + CO2 + 2 ATP; Muscle -> Lactic Acid + 2 ATP",
      "Human Circulation: Double circulation (Pulmonary + Systemic via 4-chambered heart)",
      "Excretion: Nephron (Glomerulus ultrafiltration -> Tubular reabsorption -> Collecting duct)"
    ],
    images: [
      {
        title: "Life Processes Comprehensive System Map",
        src: "/mnemonics/science/ch5_life_processes_detailed.jpeg",
        description: "Complete visual atlas of human digestive, respiratory, circulatory, and excretory pathways."
      },
      {
        title: "Life Processes Quick Revision Map",
        src: "/mnemonics/science/ch5_life_processes_map.jpeg",
        description: "Enzyme breakdown tables (pepsin, trypsin, lipase, amylase) and stomata guard cell mechanism."
      }
    ]
  },
  {
    chapterId: 6,
    chapterName: "Control and Coordination",
    badge: "Board Weightage (6-7 Marks)",
    keyFormulas: [
      "Neuron: Dendrite -> Cyton -> Axon -> Synapse (chemical neurotransmitters carry signal)",
      "Reflex Arc: Receptor -> Sensory Neuron -> Spinal Cord (Relay) -> Motor Neuron -> Effector",
      "Plant Hormones: Auxin (growth/phototropism), Gibberellin (stem elongation), Cytokinin (cell division), Abscisic Acid (inhibits growth/wilting)",
      "Endocrine: Thyroid (Thyroxine - Iodine needed), Pancreas (Insulin - Blood sugar), Adrenal (Adrenaline - Fight/Flight)"
    ],
    images: [
      {
        title: "Control and Coordination Science Infographic",
        src: "/mnemonics/science/ch6_control_coordination.jpeg",
        description: "Human brain divisions (Forebrain, Midbrain, Hindbrain), reflex arc loop, and phytohormone roles."
      }
    ]
  },
  {
    chapterId: 7,
    chapterName: "How do Organisms Reproduce?",
    badge: "Board Weightage (6-8 Marks)",
    keyFormulas: [
      "Asexual Modes: Binary Fission (Amoeba), Budding (Yeast, Hydra), Spore Formation (Rhizopus), Vegetative (Bryophyllum)",
      "Flower Structure: Stamen (Anther + Filament), Carpel/Pistil (Stigma + Style + Ovary)",
      "Double Fertilization: Syngamy (Male gamete + Egg -> Zygote 2n) + Triple Fusion (Male gamete + Polar nuclei -> Endosperm 3n)",
      "Human Male/Female: Testes (Testosterone, sperm), Ovaries (Estrogen/Progesterone, ova), Fallopian tube (fertilization site)"
    ],
    images: [
      {
        title: "How do Organisms Reproduce? Visual Sheet",
        src: "/mnemonics/science/ch7_reproduction.jpeg",
        description: "Reproductive anatomy, flower longitudinal cross-section, pollination types, and contraceptive methods."
      }
    ]
  },
  {
    chapterId: 8,
    chapterName: "Heredity and Evolution",
    badge: "Board Weightage (5-7 Marks)",
    keyFormulas: [
      "Mendel Monohybrid: Phenotypic Ratio = 3:1 (Tall:Dwarf); Genotypic Ratio = 1:2:1 (TT:Tt:tt)",
      "Mendel Dihybrid: Phenotypic Ratio = 9:3:3:1 (Round-Yellow : Round-Green : Wrinkled-Yellow : Wrinkled-Green)",
      "Sex Determination in Humans: Female = 44 + XX (homogametic); Male = 44 + XY (heterogametic - father determines sex)"
    ],
    images: [
      {
        title: "Heredity & Genetics Revision Guide",
        src: "/mnemonics/science/ch8_heredity.jpeg",
        description: "Punnett square setups, dominant vs recessive alleles, and human chromosomal karyotypes."
      }
    ]
  },
  {
    chapterId: 9,
    chapterName: "Light — Reflection and Refraction",
    badge: "Board Weightage (9-10 Marks)",
    keyFormulas: [
      "Mirror Formula: 1/f = 1/v + 1/u; Magnification: m = -v/u = h'/h",
      "Lens Formula: 1/f = 1/v - 1/u; Magnification: m = +v/u = h'/h",
      "Power of Lens: P = 1 / f(in meters) [Unit: Dioptre, D]; Convex f > 0, Concave f < 0",
      "Snell's Law: n = sin i / sin r = c / v",
      "Sign Convention: Distances measured in direction of incident ray are positive (+), opposite are negative (-)"
    ],
    images: [
      {
        title: "Light Reflection and Refraction Master Chart",
        src: "/mnemonics/science/ch9_light_optics.jpeg",
        description: "All 6 concave mirror ray diagrams, convex mirror security view, lens ray tracing, and sign convention rules."
      }
    ]
  },
  {
    chapterId: 10,
    chapterName: "The Human Eye and Colourful World",
    badge: "Board Weightage (4-5 Marks)",
    keyFormulas: [
      "Power of Accommodation: Ciliary muscles adjust crystalline lens focal length (Near point = 25 cm, Far point = infinity)",
      "Myopia (Short-sightedness): Image forms in front of retina -> Corrected by CONCAVE lens of suitable power",
      "Hypermetropia (Far-sightedness): Image forms behind retina -> Corrected by CONVEX lens",
      "Prism Deviation: Angle of Deviation D depends on prism angle A and angle of incidence i",
      "Scattering (Rayleigh's Law): Intensity I proportional to 1 / lambda^4 (Blue scatters most -> Sky is blue)"
    ],
    images: [
      {
        title: "Human Eye & Colourful World Infographic",
        src: "/mnemonics/science/ch10_human_eye.jpeg",
        description: "Eye defects correction diagrams, prism dispersion VIBGYOR rainbow formation, and atmospheric twinkling."
      }
    ]
  },
  {
    chapterId: 11,
    chapterName: "Electricity",
    badge: "Board Weightage (7-8 Marks)",
    keyFormulas: [
      "Current: I = Q / t; Potential: V = W / Q; Ohm's Law: V = I · R",
      "Resistance: R = rho · (L / A); Resistivity rho depends only on material & temperature",
      "Series: R_s = R1 + R2 + R3 (Current same, V divides)",
      "Parallel: 1/R_p = 1/R1 + 1/R2 + 1/R3 (Voltage same, I divides)",
      "Joule Heating: H = I^2 · R · t = V · I · t = (V^2 / R) · t",
      "Electric Power: P = V · I = I^2 · R = V^2 / R; 1 kWh = 3.6 x 10^6 J"
    ],
    images: [
      {
        title: "Electricity Formula Matrix & Circuit Rules",
        src: "/mnemonics/science/ch11_electricity.jpeg",
        description: "Complete electrical formula wheel, resistor combinations, commercial unit calculations, and safety fuses."
      }
    ]
  },
  {
    chapterId: 12,
    chapterName: "Magnetic Effects of Electric Current",
    badge: "Board Weightage (6-7 Marks)",
    keyFormulas: [
      "Right-Hand Thumb Rule: Thumb = Current direction, Curled fingers = Magnetic field lines direction",
      "Solenoid: Uniform straight parallel field lines inside, behaves like a bar magnet",
      "Fleming's Left-Hand Rule: Forefinger = Field (B), Center finger = Current (I), Thumb = Force/Motion (F)",
      "Domestic Electric Circuit: Live wire (Red/Brown, 220V), Neutral wire (Black/Blue, 0V), Earth wire (Green/Yellow, safety against shock)",
      "Short Circuit: Live and Neutral touch directly -> Resistance drops to near zero, current spikes dangerously"
    ],
    images: [
      {
        title: "Magnetic Effects of Electric Current Revision Sheet",
        src: "/mnemonics/science/ch12_magnetic_effects.jpeg",
        description: "Magnetic field line patterns, electromagnetic induction, Fleming's rules, and domestic circuit layout."
      }
    ]
  },
  {
    chapterId: 13,
    chapterName: "Our Environment",
    badge: "Board Weightage (5 Marks)",
    keyFormulas: [
      "10% Law of Energy Transfer (Lindeman): Only 10% of energy is transferred to next trophic level; 90% lost to metabolism/heat",
      "Biological Magnification: Progressive accumulation of non-biodegradable chemicals (DDT, pesticides) at highest trophic level",
      "Ozone Layer Depletion: O2 -(UV)-> O + O; O + O2 -> O3 (CFCs break ozone into oxygen, causing UV penetration)",
      "Waste Management: Biodegradable (enzymes can break down) vs Non-biodegradable (plastic, glass remain persistent)"
    ],
    images: [
      {
        title: "Our Environment Science Revision Sheet",
        src: "/mnemonics/science/ch13_our_environment.jpeg",
        description: "Trophic pyramids, food chains vs webs, biomagnification levels, and ozone reaction cycle."
      }
    ]
  }
];

export const SST_MNEMONIC_CHAPTERS: ChapterMnemonicGroup[] = [
  // --- HISTORY (Chapters 1 to 5) ---
  {
    chapterId: 1,
    chapterName: "The Rise of Nationalism in Europe",
    badge: "History Ch 1 (6-8 Marks)",
    keyFormulas: [
      "1789 French Revolution: La Patrie & Le Citoyen, Tricolour, Uniform Laws, Abolition of internal customs",
      "1804 Napoleonic Code: Equality before law, property rights, administrative efficiency, end of feudalism",
      "1815 Congress of Vienna: Hosted by Duke Metternich; restored Bourbons, buffer states, conservative order",
      "Zollverein 1834: Prussian customs union abolished internal tariffs and slashed currencies from 30+ to 2",
      "1871 German Unification (Bismarck / Blood & Iron); 1861 Italian Unification (Cavour, Garibaldi, Victor Emmanuel II)"
    ],
    images: [
      {
        title: "Nationalism in Europe Visual Map & Timeline",
        src: "/mnemonics/sst/hist_ch1_europe_1.jpeg",
        description: "Chronological mind-map of French Revolution, Napoleonic Code, 1848 Liberal Revolutions, and German/Italian Unification."
      },
      {
        title: "Europe Allegories, Treaties & Symbols",
        src: "/mnemonics/sst/hist_ch1_europe_2.jpeg",
        description: "Marianne & Germania allegories, Zollverein customs union, Treaty of Vienna 1815, and Balkan crisis breakdown."
      }
    ]
  },
  {
    chapterId: 2,
    chapterName: "Nationalism in India",
    badge: "History Ch 2 (7-9 Marks)",
    keyFormulas: [
      "Satyagraha: Champaran 1917 (Indigo), Kheda 1917 (Revenue), Ahmedabad 1918 (Cotton Mill Workers)",
      "Rowlatt Act 1919 & Jallianwala Bagh (13 April 1919) -> Non-Cooperation Movement (Nagpur Dec 1920 to Feb 1922 Chauri Chaura)",
      "Differing Strands: Awadh (Baba Ramchandra & Oudh Kisan Sabha), Gudem Hills (Alluri Sitaram Raju), Assam tea plantations",
      "Civil Disobedience (1930): Dandi Salt March (12 March - 6 April 1930, 240 miles, 78 volunteers)",
      "Poona Pact Sept 1932: Dr. Ambedkar & Gandhi agreed on reserved seats within joint electorates"
    ],
    images: [
      {
        title: "Nationalism in India Master Flowchart & Movements",
        src: "/mnemonics/sst/hist_ch2_india_1.jpeg",
        description: "Satyagraha principles, Rowlatt Act, Khilafat, Non-Cooperation Movement stages, and Civil Disobedience Salt March."
      },
      {
        title: "Congress Sessions, Peasant Rebellions & Collective Identity",
        src: "/mnemonics/sst/hist_ch2_india_2.jpeg",
        description: "Calcutta, Nagpur & Lahore Congress sessions, Awadh Kisan Sabha, Alluri Sitaram Raju, Poona Pact, and Bharat Mata allegory."
      }
    ]
  },
  {
    chapterId: 3,
    chapterName: "The Making of a Global World",
    badge: "History Ch 3",
    keyFormulas: [
      "Pre-Modern Silk Routes: Linked Asia, Europe, and northern Africa; spread silk, pottery, spices, and religion",
      "Conquest & Disease: Spanish conquest of Americas using Smallpox as deadly biological weapon",
      "Rinderpest (Cattle Plague) 1890s: Wiped out 90% of African cattle, enabling European colonial subjugation",
      "Indentured Labour: 19th-century migration of Indian and Chinese workers to Caribbean, Fiji, and Mauritius",
      "Bretton Woods 1944: Established IMF and World Bank; pegged dollar to gold; post-war economic order"
    ],
    images: [
      {
        title: "The Making of a Global World Visual Guide (Part 1)",
        src: "/mnemonics/sst/hist_ch3_global_world_1.jpeg",
        description: "Silk routes, Colombian exchange, and colonial conquest via disease."
      },
      {
        title: "The Making of a Global World Visual Guide (Part 2)",
        src: "/mnemonics/sst/hist_ch3_global_world_2.jpeg",
        description: "19th century trade, indentured migration, Great Depression, and Bretton Woods institutions."
      }
    ]
  },
  {
    chapterId: 4,
    chapterName: "The Age of Industrialisation",
    badge: "History Ch 4",
    keyFormulas: [
      "Proto-Industrialisation: Decentralized production in countryside before factories; controlled by merchants",
      "Pace of Industrial Change: Cotton and Iron/Steel dominated; steam power adopted slowly; hand labour preferred",
      "Life of Workers: Seasonality of work, low wages, fear of unemployment (Spinning Jenny attacked by women)",
      "Industrialisation in Colonies: Decline of Indian weavers due to Manchester machine-made cotton imports",
      "Early Indian Entrepreneurs: Dwarkanath Tagore, Dinshaw Petit, Jamsetjee Tata, Seth Hukumchand"
    ],
    images: [
      {
        title: "The Age of Industrialisation Visual Guide (Part 1)",
        src: "/mnemonics/sst/hist_ch4_industrialisation_1.jpeg",
        description: "Proto-industrial phase, steam engine, Spinning Jenny, and factory system emergence."
      },
      {
        title: "The Age of Industrialisation Visual Guide (Part 2)",
        src: "/mnemonics/sst/hist_ch4_industrialisation_2.jpeg",
        description: "Colonial trade, Indian merchants, Swadeshi industrial shift, and market advertising."
      }
    ]
  },
  {
    chapterId: 5,
    chapterName: "Print Culture and the Modern World",
    badge: "History Ch 5",
    keyFormulas: [
      "Earliest Print: Woodblock printing in China, Japan (Diamond Sutra 868 AD), and Korea",
      "Gutenberg Press 1448 (Mainz, Germany): Movable metal type; first printed book was the Bible",
      "Print Revolution: Protestant Reformation (Martin Luther's 95 Theses 1517: 'Print is the ultimate gift of God')",
      "French Revolution: Print popularized Enlightenment ideas (Voltaire, Rousseau) questioning monarchy and church",
      "India & Print: Portuguese Jesuits brought press to Goa (1556); James Augustus Hickey's Bengal Gazette (1780)"
    ],
    images: [
      {
        title: "Print Culture Visual Guide (Part 1)",
        src: "/mnemonics/sst/hist_ch5_print_culture_1.jpeg",
        description: "East Asian woodblocks, Gutenberg movable type, and religious reformation."
      },
      {
        title: "Print Culture Visual Guide (Part 2)",
        src: "/mnemonics/sst/hist_ch5_print_culture_2.jpeg",
        description: "Reading mania in 19th century Europe, censorship, and India's nationalist press."
      }
    ]
  },

  // --- POLITICAL SCIENCE / CIVICS (Chapters 6 to 10) ---
  {
    chapterId: 6,
    chapterName: "Power Sharing",
    badge: "Civics Ch 1 (4-5 Marks)",
    keyFormulas: [
      "Belgium: 59% Flemish (Dutch), 40% Wallonia (French); Brussels 80% French, 20% Dutch; Accommodation 1970-1993",
      "Sri Lanka: 74% Sinhala (Buddhist), 18% Tamil (13% native, 5% Indian); 1956 Majoritarian Act -> Civil War",
      "Prudential Reason: Reduces social conflict, prevents violence, ensures political stability",
      "Moral Reason: Spirit of democracy; citizens participate and acquire a stake in governance",
      "Forms: Horizontal (Separation of Powers / Checks & Balances), Vertical (Federalism), Social Groups, Coalitions"
    ],
    images: [
      {
        title: "Power Sharing Mind Map & Case Studies",
        src: "/mnemonics/sst/pol_ch1_power_sharing_1.jpeg",
        description: "Comparative matrix of Belgium Accommodation vs Sri Lanka Majoritarianism, and Prudential vs Moral reasons."
      },
      {
        title: "Forms of Power Sharing & Institutional Checks",
        src: "/mnemonics/sst/pol_ch1_power_sharing_2.jpeg",
        description: "Horizontal (separation of powers) vs Vertical (federalism), Community government, and Coalition politics."
      }
    ]
  },
  {
    chapterId: 7,
    chapterName: "Federalism",
    badge: "Civics Ch 2 (4-5 Marks)",
    keyFormulas: [
      "7 Features: 2+ tiers, distinct jurisdiction, constitutional entrenchment, judicial umpire, financial autonomy",
      "Two Routes: Coming Together (USA, Australia, Switzerland) vs Holding Together (India, Spain, Belgium)",
      "Three Lists: Union (97+ subjects - Defense, Banking), State (66+ - Police, Agri), Concurrent (47+ - Education)",
      "Residuary Powers: Exclusive Union jurisdiction over post-constitutional subjects (Cyber law, IT, AI)",
      "1992 Decentralisation: 73rd/74th Amendments; mandatory elections, SC/ST/OBC quotas, 1/3rd women reservation, SEC"
    ],
    images: [
      {
        title: "Federalism Core Features & Indian Union Lists",
        src: "/mnemonics/sst/pol_ch2_federalism_1.jpeg",
        description: "7 Features of Federalism, Coming Together vs Holding Together, and Union / State / Concurrent lists breakdown."
      },
      {
        title: "Decentralisation & Panchayati Raj 1992 Reforms",
        src: "/mnemonics/sst/pol_ch2_federalism_2.jpeg",
        description: "73rd & 74th Amendments, 3-tier Panchayati Raj structure, Gram Sabha, Mayor, and Language Policy."
      }
    ]
  },
  {
    chapterId: 8,
    chapterName: "Gender, Religion and Caste",
    badge: "Civics Ch 3",
    keyFormulas: [
      "Sexual Division of Labour: Women do domestic work inside home; public domain dominated by men",
      "Feminist Movement: Political, educational, and professional equality; Women's Reservation Act in Parliament",
      "Secular State: No official state religion in India; freedom of religion; prohibition of religious discrimination",
      "Communalism: Belief that religion is principal basis of social community; can manifest in violence or majoritarianism",
      "Caste in Politics vs Politics in Caste: Universal adult franchise broken vote banks; backward classes mobilization"
    ],
    images: [
      {
        title: "Gender, Religion and Caste Visual Guide (Part 1)",
        src: "/mnemonics/sst/pol_ch3_gender_religion_1.jpeg",
        description: "Gender inequalities, feminist demands, and secular constitutional principles."
      },
      {
        title: "Gender, Religion and Caste Visual Guide (Part 2)",
        src: "/mnemonics/sst/pol_ch3_gender_religion_2.jpeg",
        description: "Forms of communalism, caste hierarchy erosion, and caste interactions with democratic politics."
      }
    ]
  },
  {
    chapterId: 9,
    chapterName: "Political Parties",
    badge: "Civics Ch 4",
    keyFormulas: [
      "Three Components: Leaders, Active Members, and Followers",
      "Functions: Contest elections, put forward policies, make laws, form/run government, role of opposition, shape public opinion",
      "Party Systems: One-party (China), Two-party (USA, UK), Multi-party (India with alliance coalitions)",
      "National vs State Party: National = 6% votes in Lok Sabha or 4 states + 4 LS seats; State = 6% in State Assembly + 2 seats",
      "Challenges: Lack of internal democracy, dynastic succession, money & muscle power, lack of meaningful choices"
    ],
    images: [
      {
        title: "Political Parties Visual Guide (Part 1)",
        src: "/mnemonics/sst/pol_ch4_political_parties_1.jpeg",
        description: "Party components, 7 key democratic functions, and criteria for National vs State parties."
      },
      {
        title: "Political Parties Visual Guide (Part 2)",
        src: "/mnemonics/sst/pol_ch4_political_parties_2.jpeg",
        description: "4 Major challenges of political parties and constitutional anti-defection reforms."
      }
    ]
  },
  {
    chapterId: 10,
    chapterName: "Outcomes of Democracy",
    badge: "Civics Ch 5",
    keyFormulas: [
      "Democratic Principles: Promotes equality among citizens, enhances individual dignity, improves decision quality",
      "Accountable, Responsive & Legitimate: Free and fair regular elections, open public debate, Right to Information (RTI)",
      "Economic Growth vs Democracy: Dictatorships have marginally higher growth historical rate, but democracy ensures equitable distribution",
      "Reduction of Inequality & Poverty: Democracies ensure political equality (one person one vote), but struggle with wealth gap",
      "Accommodating Diversity: Democracy must avoid becoming majoritarian; minority interests must be constitutionally protected"
    ],
    images: [
      {
        title: "Outcomes of Democracy Visual Guide (Part 1)",
        src: "/mnemonics/sst/pol_ch5_outcomes_democracy_1.jpeg",
        description: "Accountability, transparency, legitimacy, and economic performance of democracies."
      },
      {
        title: "Outcomes of Democracy Visual Guide (Part 2)",
        src: "/mnemonics/sst/pol_ch5_outcomes_democracy_2.jpeg",
        description: "Accommodation of social differences, dignity of women and marginalized castes."
      }
    ]
  },

  // --- GEOGRAPHY (Chapters 11 to 17) ---
  {
    chapterId: 11,
    chapterName: "Resources and Development",
    badge: "Geography Ch 1 (4-5 Marks)",
    keyFormulas: [
      "Resource Triangle: Nature, Technology, and Institutions interdependent via human agency",
      "Territorial Waters: 12 nautical miles (22.2 km) = National; beyond 200 nm = Exclusive Economic Zone",
      "Soils: Alluvial (Khadar/Bangar), Black (Basalt lava/cotton), Red-Yellow (Iron diffusion), Laterite (Leaching)",
      "Land Degradation Causes: Mining (Jharkhand/Odisha), Overgrazing (Gujarat/Rajasthan), Over-irrigation (Punjab/Haryana)",
      "Soil Conservation: Contour ploughing, Terrace farming, Strip cropping, Shelter belts"
    ],
    images: [
      {
        title: "Resources Classification & Soil Types of India",
        src: "/mnemonics/sst/geo_ch1_resources_1.jpeg",
        description: "Biotic/Abiotic, Potential/Stock/Reserves matrix, and 6 Indian Soils (Alluvial, Black, Red-Yellow, Laterite, Arid, Mountain)."
      },
      {
        title: "Land Degradation & Soil Conservation Techniques",
        src: "/mnemonics/sst/geo_ch1_resources_2.jpeg",
        description: "Causes of land degradation by states, Contour ploughing, Terrace farming, Strip cropping, and Shelter belts."
      }
    ]
  },
  {
    chapterId: 12,
    chapterName: "Forest and Wildlife Resources",
    badge: "Geography Ch 2 (3-4 Marks)",
    keyFormulas: [
      "India hosts 8% of world biodiversity (81,000 fauna, 47,000 flora); Asiatic Cheetah extinct since 1952",
      "IUCN Categories: Normal, Endangered (Rhino, Lion-tailed macaque), Vulnerable (Gangetic dolphin), Endemic (Nicobar pigeon)",
      "Wildlife Protection Act 1972 & Project Tiger 1973 (Corbett, Sunderbans, Bandhavgarh, Sariska, Periyar)",
      "Forest Classes: Reserved (>50%, most valuable) + Protected (~33%) = Permanent Forest Estates; Unclassed",
      "Community Conservation: Chipko (Himalayas), Sariska (mining protest), Alwar Sonchuri (1200 ha), JFM Odisha 1988"
    ],
    images: [
      {
        title: "IUCN Species Categories & Depletion Drivers",
        src: "/mnemonics/sst/geo_ch2_forest_wildlife_1.jpeg",
        description: "Normal, Endangered, Vulnerable, Rare, Endemic, and Extinct species with Indian examples."
      },
      {
        title: "Reserved Forests & Community Conservation",
        src: "/mnemonics/sst/geo_ch2_forest_wildlife_2.jpeg",
        description: "Reserved vs Protected vs Unclassed forests, Project Tiger 1973, Chipko movement, and JFM Odisha."
      }
    ]
  },
  {
    chapterId: 13,
    chapterName: "Water Resources",
    badge: "Geography Ch 3 (4-5 Marks)",
    keyFormulas: [
      "Water Scarcity: 96.5% oceans, 2.5% freshwater; caused by over-exploitation, tubewells, industry, pollution",
      "Multi-Purpose Dams: Nehru called them 'Temples of modern India'; generate 22% of electricity; criticism = sedimentation & displacement",
      "Traditional Systems: Guls/Kuls (W. Himalayas), Inundation (Bengal), Khadins/Johads (Rajasthan), Tankas / Palar Pani (Bikaner)",
      "Modern Innovations: Bamboo drip (Meghalaya), Gendathur (Karnataka 200 houses), Tamil Nadu legal compulsion",
      "Mandatory Dams: Salal (Chenab), Bhakra Nangal (Satluj), Tehri (Bhagirathi), Sardar Sarovar (Narmada), Hirakud (Mahanadi)"
    ],
    images: [
      {
        title: "Water Scarcity & Multi-Purpose River Projects",
        src: "/mnemonics/sst/geo_ch3_water_resources_1.jpeg",
        description: "Causes of water scarcity, Nehru's 'Temples of Modern India', environmental impacts of large dams, and inter-state disputes."
      },
      {
        title: "Traditional Rainwater Harvesting Systems & Dams Map",
        src: "/mnemonics/sst/geo_ch3_water_resources_2.jpeg",
        description: "Guls/Kuls, Khadins/Johads, Rooftop Tankas, Bamboo drip irrigation, and 8 Mandatory CBSE Dams."
      }
    ]
  },
  {
    chapterId: 14,
    chapterName: "Agriculture",
    badge: "Geography Ch 4",
    keyFormulas: [
      "Farming Types: Primitive subsistence (Slash and burn / Jhumming), Intensive subsistence, Commercial farming (Plantations)",
      "Cropping Seasons: Rabi (Sown Oct-Dec, Harvested Apr-Jun - Wheat), Kharif (Sown Jun-Jul, Harvested Sep-Oct - Rice), Zaid (Watermelon)",
      "Major Crops: Rice (25°C+, 100cm+ rain), Wheat (cool growing season, 50-75cm rain), Millets (Jowar, Bajra, Ragi - coarse grains)",
      "Cash & Beverage: Sugarcane, Cotton (Black soil, 210 frost-free days), Jute (Golden fiber), Tea (Well-drained acidic soil), Coffee",
      "Reforms: Green & White Revolutions, Land ceiling, KCC (Kisan Credit Card), PAIS (Personal Accident Insurance Scheme)"
    ],
    images: [
      {
        title: "Agriculture Cropping Seasons & Food Crops",
        src: "/mnemonics/sst/geo_ch4_agriculture_1.jpeg",
        description: "Rabi vs Kharif vs Zaid, Rice, Wheat, Millets, and Pulses cultivation conditions."
      },
      {
        title: "Non-Food Crops, Plantations & Institutional Reforms",
        src: "/mnemonics/sst/geo_ch4_agriculture_2.jpeg",
        description: "Sugarcane, Cotton, Jute, Tea, Coffee, Bhoodan-Gramdan, and agrarian technological reforms."
      }
    ]
  },
  {
    chapterId: 15,
    chapterName: "Minerals and Energy Resources",
    badge: "Geography Ch 5",
    keyFormulas: [
      "Occurrence of Minerals: Igneous/Metamorphic (veins and lodes), Sedimentary (beds and layers), Residual mass (Bauxite)",
      "Ferrous Minerals: Iron Ore (Magnetite 70% Fe, Hematite 50-60% Fe - Kudremukh, Bailadila, Durg-Bastar), Manganese",
      "Non-Ferrous: Copper (Khetri in Rajasthan, Balaghat in MP), Bauxite (Aluminium ore - Panchpatmali in Odisha)",
      "Conventional Energy: Coal (Anthracite, Bituminous, Lignite, Peat - Raniganj, Jharia), Petroleum (Mumbai High, Digboi)",
      "Non-Conventional: Solar (Photovoltaic), Wind (Tamil Nadu Nagarcoil-Madurai), Biogas (Gobar gas), Nuclear, Tidal, Geothermal"
    ],
    images: [
      {
        title: "Minerals Classification & Metallurgical Belts",
        src: "/mnemonics/sst/geo_ch5_minerals_energy_1.jpeg",
        description: "Ferrous vs Non-ferrous, Magnetite vs Hematite, and major mining belts of India."
      },
      {
        title: "Energy Resources: Conventional vs Renewable",
        src: "/mnemonics/sst/geo_ch5_minerals_energy_2.jpeg",
        description: "Coal fields, Petroleum refineries, Solar parks, Wind farms, and conservation strategies."
      }
    ]
  },
  {
    chapterId: 16,
    chapterName: "Manufacturing Industries",
    badge: "Geography Ch 6",
    keyFormulas: [
      "Importance of Manufacturing: Backbone of development, modernizes agriculture, reduces unemployment, earns foreign exchange",
      "Location Factors: Raw material, labor, power, capital, market, and Agglomeration Economies",
      "Classification: Agro-based (Textiles, Sugar) vs Mineral-based (Iron & Steel, Aluminium smelting, Chemical, Fertilizer)",
      "Iron & Steel Industry: Basic heavy industry; raw material ratio = Iron ore 4 : Coking coal 2 : Limestone 1; Chhota Nagpur concentration",
      "Industrial Pollution & Control: Air, Water, Thermal, Noise; 3Rs, electrostatic precipitators, STP wastewater treatment"
    ],
    images: [
      {
        title: "Manufacturing Industries Overview & Textiles",
        src: "/mnemonics/sst/geo_ch6_manufacturing_1.jpeg",
        description: "Industrial location factors, Agglomeration economies, and Cotton / Jute textile hubs."
      },
      {
        title: "Heavy Industries & Environmental Pollution Mitigation",
        src: "/mnemonics/sst/geo_ch6_manufacturing_2.jpeg",
        description: "Iron & steel production cycle, chemical fertilizers, IT parks, and wastewater effluent treatment."
      }
    ]
  },
  {
    chapterId: 17,
    chapterName: "Lifelines of National Economy",
    badge: "Geography Ch 7",
    keyFormulas: [
      "Roadways: Golden Quadrilateral (6-lane, NHAI), National Highways, State Highways; Road density highest in Kerala",
      "Railways: Principal transport mode for freight and passengers; gauge types: Broad (1.676m), Metre (1.000m), Narrow (0.762m)",
      "Pipelines: Crude oil, petroleum, gas (HVJ Pipeline - Hazira-Vijaipur-Jagdishpur 1,700 km)",
      "Waterways: Inland National Waterways (NW-1 Ganga Haldia-Allahabad 1620 km; NW-2 Brahmaputra Dhubri-Sadiya)",
      "Major Sea Ports: Kandla (Deendayal Port), Mumbai (largest natural harbor), Marmagao (iron ore export), Chennai, Kolkata",
      "International Trade: Balance of Trade = Export Value minus Import Value; Favourable (Exports > Imports)"
    ],
    images: [
      {
        title: "Transportation Networks: Roads, Rail & Pipelines",
        src: "/mnemonics/sst/geo_ch7_lifelines_1.jpeg",
        description: "Golden Quadrilateral, North-South/East-West corridors, railway gauges, and gas pipelines."
      },
      {
        title: "Waterways, Major Seaports & International Trade",
        src: "/mnemonics/sst/geo_ch7_lifelines_2.jpeg",
        description: "12 Major seaports, National waterways NW-1 to NW-5, air travel, and balance of trade."
      }
    ]
  },

  // --- ECONOMICS (Chapters 18 to 22) ---
  {
    chapterId: 18,
    chapterName: "Development",
    badge: "Economics Ch 1 (5-6 Marks)",
    keyFormulas: [
      "Different People Different Goals: Conflicting goals (Dams provide power for industrialists but displace tribals)",
      "Income + Non-Material Goals: Freedom, security, dignity, equal treatment, healthy environment",
      "World Bank Criterion: Per Capita Income alone (High income = $49,300+; Low income = $2,500 or less; India = low-middle)",
      "UNDP HDI: Multidimensional = Life Expectancy (Health) + Schooling (Education) + Per Capita Income (PPP US$)",
      "Kerala vs Haryana: Kerala has lower per capita income, but far superior IMR (~12 vs ~30), literacy (~94%), and PDS"
    ],
    images: [
      {
        title: "Development Goals, Indicators & HDI Framework",
        src: "/mnemonics/sst/eco_ch1_development_1.jpeg",
        description: "Different people different goals, World Bank Per Capita Income vs UNDP HDI, and IMR / Literacy comparisons."
      },
      {
        title: "Public Facilities & Sustainable Development",
        src: "/mnemonics/sst/eco_ch1_development_2.jpeg",
        description: "Why money cannot buy everything (PDS, healthcare), groundwater depletion in India, and crude oil exhaustion."
      }
    ]
  },
  {
    chapterId: 19,
    chapterName: "Sectors of the Indian Economy",
    badge: "Economics Ch 2 (7-8 Marks)",
    keyFormulas: [
      "Three Sectors: Primary (Nature), Secondary (Industry/Manufacturing), Tertiary (Services - Transport, IT, Banking)",
      "GDP: Market value of all FINAL goods and services produced within a country; excludes intermediate goods",
      "Tertiary Boom: Largest GDP sector (~55%), driven by basic services, agro-industrial links, income rise, and IT",
      "Disguised Unemployment: Primary sector employs ~45% of workforce for only ~15% GDP; zero marginal productivity",
      "Organised vs Unorganised: Job security, benefits, PF vs arbitrary hire-and-fire; MGNREGA guarantees 100 days work"
    ],
    images: [
      {
        title: "Three Economic Sectors & GDP Accounting",
        src: "/mnemonics/sst/eco_ch2_sectors_1.jpeg",
        description: "Primary, Secondary, Tertiary interactions, calculating GDP, avoiding double counting (intermediate vs final goods)."
      },
      {
        title: "Employment Creation, Organised vs Unorganised & MGNREGA",
        src: "/mnemonics/sst/eco_ch2_sectors_2.jpeg",
        description: "Disguised unemployment in farming, MGNREGA 2005 guarantees, Organised vs Unorganised labor rights, Public vs Private."
      }
    ]
  },
  {
    chapterId: 20,
    chapterName: "Money and Credit",
    badge: "Economics Ch 3 (6-7 Marks)",
    keyFormulas: [
      "Medium of Exchange: Eliminates double coincidence of wants; modern currency authorized by RBI and Central Government",
      "Demand Deposits & Cheques: Bank deposits withdrawable on demand; cheques settle transactions without cash",
      "Two Roles: Salim (profitable expansion) vs Swapna (crop failure pushing into debt trap)",
      "Terms of Credit: Interest Rate, Collateral (asset pledged), Documentation, Mode of Repayment",
      "Formal vs Informal: Formal (Banks/Cooperatives, supervised by RBI) vs Informal (Moneylenders, 36-60% predatory interest); SHGs"
    ],
    images: [
      {
        title: "Money Evolution, Modern Currency & Banking Operations",
        src: "/mnemonics/sst/eco_ch3_money_credit_1.jpeg",
        description: "Double coincidence of wants, Barter system, Demand deposits, Cheques mechanism, and RBI cash reserves."
      },
      {
        title: "Credit Situations, Terms of Credit & SHGs",
        src: "/mnemonics/sst/eco_ch3_money_credit_2.jpeg",
        description: "Salim vs Swapna debt-trap, Collateral documentation, Formal vs Informal loan disparities, and Self Help Groups."
      }
    ]
  },
  {
    chapterId: 21,
    chapterName: "Globalisation and the Indian Economy",
    badge: "Economics Ch 4",
    keyFormulas: [
      "MNCs (Multinational Corporations): Own or control production in more than one nation; set up production where costs are low",
      "Interlinking Production: Foreign direct investment (FDI), partnerships with local firms, buying local companies (Cargill bought Parakh Foods)",
      "Foreign Trade Integration: Connects markets across countries, expands consumer choices, levels price differentials",
      "Factors Enabling Globalisation: Rapid improvement in transportation (containers) and Information & Communication Technology (Internet, telecom)",
      "Trade Barriers & Liberalisation: New Economic Policy 1991 removed import duties and quotas; WTO promotes free international trade",
      "Fair Globalisation: Ensuring labour laws are implemented, small producers protected, and benefits shared equitably"
    ],
    images: [
      {
        title: "Globalisation & MNC Operations Visual Guide (Part 1)",
        src: "/mnemonics/sst/eco_ch4_globalisation_1.jpeg",
        description: "MNC production networks, foreign direct investment, and consumer product proliferation."
      },
      {
        title: "Liberalisation, WTO & Fair Globalisation (Part 2)",
        src: "/mnemonics/sst/eco_ch4_globalisation_2.jpeg",
        description: "Trade barriers removal, SEZs (Special Economic Zones), flexible labour laws, and fair globalisation."
      }
    ]
  },
  {
    chapterId: 22,
    chapterName: "Consumer Rights",
    badge: "Economics Ch 5",
    keyFormulas: [
      "Consumer Exploitation: Adulteration, false claims, defective goods, under-weight measures, unfair trade practices",
      "COPRA 1986 (Consumer Protection Act): Enacted 3-tier quasi-judicial machinery (District, State, National Commissions)",
      "Consumer Rights: Right to Safety, Right to be Informed, Right to Choose, Right to be Heard, Right to Seek Redressal, Right to Consumer Education",
      "Standardization Marks: ISI (industrial goods), AGMARK (agricultural food produce), Hallmark (gold jewelry), FPO (fruit products)",
      "National Consumer Day: Celebrated on 24 December in India to commemorate the enactment of COPRA 1986"
    ],
    images: [
      {
        title: "Consumer Rights & COPRA 1986 Visual Guide (Part 1)",
        src: "/mnemonics/sst/eco_ch5_consumer_rights_1.jpeg",
        description: "Historical consumer movement, 6 basic consumer rights, and statutory standardization certification logos."
      },
      {
        title: "Three-Tier Consumer Courts & Redressal (Part 2)",
        src: "/mnemonics/sst/eco_ch5_consumer_rights_2.jpeg",
        description: "District Forum, State Commission, National Commission jurisdiction, and filing consumer complaints."
      }
    ]
  }
];

export default function MnemonicGallery({ isDark = true }: { isDark?: boolean }) {
  const [activeSubject, setActiveSubject] = useState<"math" | "science" | "sst">("sst");
  const [selectedChapterId, setSelectedChapterId] = useState<number>(1);
  const [activeModalImage, setActiveModalImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  const activeChapterList = activeSubject === "sst" ? SST_MNEMONIC_CHAPTERS : activeSubject === "science" ? SCIENCE_MNEMONIC_CHAPTERS : MNEMONIC_CHAPTERS;
  const activeChapter = activeChapterList.find(c => c.chapterId === selectedChapterId) || activeChapterList[0];

  const totalSheetsCount = activeChapterList.reduce((acc, c) => acc + c.images.length, 0);

  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeModalImage) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setActiveModalImage(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = orig;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [activeModalImage]);

  const handleSubjectChange = (newSubject: "math" | "science" | "sst") => {
    setActiveSubject(newSubject);
    setSelectedChapterId(newSubject === "sst" ? 1 : newSubject === "science" ? 1 : 6);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl border transition-colors ${
        isDark ? "bg-[#121212]/80 backdrop-blur-2xl border-white/10 shadow-[0_0_40px_rgba(234,179,8,0.1)]" : "bg-white border-slate-200 shadow-xl"
      }`}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Sparkles className="w-6 h-6" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Visual Mnemonics & Formula Cheat Sheets
              </h2>
            </div>
            <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"} font-medium max-w-2xl`}>
              Official high-resolution concept maps, geometric proofs, and science infographics. Click any diagram to view in high-definition full-screen zoom or download.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold border ${
              isDark ? "bg-amber-950/40 text-amber-300 border-amber-800/40" : "bg-amber-50 text-amber-900 border-amber-200"
            }`}>
              {totalSheetsCount} Sheets in {activeSubject === "science" ? "Science" : "Mathematics"}
            </span>
          </div>
        </div>

        {/* Subject Selector Tabs */}
        <div className="flex items-center gap-3 pt-5 mt-5 border-t border-white/10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Subject:
          </span>
          <button
            onClick={() => handleSubjectChange("sst")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
              activeSubject === "sst"
                ? isDark
                  ? "bg-rose-500 text-slate-950 border-rose-400 font-black shadow-md"
                  : "bg-rose-600 text-white border-rose-600 font-black shadow-md"
                : isDark
                ? "bg-black/30 border-white/5 text-slate-400 hover:text-white"
                : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <span>🌍 Social Science (44 Sheets)</span>
          </button>
          <button
            onClick={() => handleSubjectChange("science")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
              activeSubject === "science"
                ? isDark
                  ? "bg-teal-500 text-slate-950 border-teal-400 font-black shadow-md"
                  : "bg-teal-600 text-white border-teal-600 font-black shadow-md"
                : isDark
                ? "bg-black/30 border-white/5 text-slate-400 hover:text-white"
                : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <span>🧪 Science (14 Sheets)</span>
          </button>
          <button
            onClick={() => handleSubjectChange("math")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
              activeSubject === "math"
                ? isDark
                  ? "bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md"
                  : "bg-amber-600 text-white border-amber-600 font-black shadow-md"
                : isDark
                ? "bg-black/30 border-white/5 text-slate-400 hover:text-white"
                : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <span>📐 Mathematics (35 Sheets)</span>
          </button>
        </div>
      </div>

      {/* Chapter Selection Grid (No Phone Side Scrolling) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
        {activeChapterList.map((ch) => {
          const isSelected = ch.chapterId === selectedChapterId;
          return (
            <button
              key={ch.chapterId}
              onClick={() => setSelectedChapterId(ch.chapterId)}
              className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all cursor-pointer flex flex-col justify-between gap-1 border min-h-[56px] ${
                isSelected
                  ? isDark
                    ? activeSubject === "sst"
                      ? "bg-rose-500 text-slate-950 border-rose-400 font-black shadow-md scale-[1.02]"
                      : activeSubject === "science"
                      ? "bg-teal-500 text-slate-950 border-teal-400 font-black shadow-md scale-[1.02]"
                      : "bg-amber-500 text-slate-950 border-amber-400 font-black shadow-md scale-[1.02]"
                    : "bg-slate-900 text-white border-slate-900 font-black shadow-md scale-[1.02]"
                  : isDark
                  ? "bg-[#121212]/70 text-slate-300 hover:text-white border-white/5 hover:border-white/10"
                  : "bg-white text-slate-700 hover:text-slate-950 border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-mono text-[10px] opacity-75">Ch {ch.chapterId}</span>
                <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${
                  isSelected ? "bg-black/20 text-slate-950 font-bold" : "bg-white/10 text-slate-400"
                }`}>
                  {ch.images.length}
                </span>
              </div>
              <span className="text-[11px] leading-snug line-clamp-1">{ch.chapterName}</span>
            </button>
          );
        })}
      </div>

      {/* Active Chapter Details & Key Formulas */}
      <div className={`p-6 sm:p-7 rounded-3xl border space-y-5 transition-colors ${
        isDark ? "bg-[#121212]/60 border-white/10" : "bg-white border-slate-200 shadow-md"
      }`}>
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b pb-4 ${
          isDark ? "border-white/10" : "border-slate-200"
        }`}>
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className={`text-xl sm:text-2xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>
                Chapter {activeChapter.chapterId}: {activeChapter.chapterName}
              </h3>
              <span className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full uppercase border ${
                isDark ? "bg-amber-500/15 text-amber-400 border-amber-500/30" : "bg-amber-50 text-amber-900 border-amber-300 font-black"
              }`}>
                {activeChapter.badge}
              </span>
            </div>
            <p className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Showing {activeChapter.images.length} verified mnemonic sheets for this chapter.
            </p>
          </div>
        </div>

        {/* Quick Key Takeaways */}
        <div className={`p-4 rounded-2xl border ${
          isDark ? "bg-[#0b0f19] border-white/5" : "bg-slate-50 border-slate-200"
        }`}>
          <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5 ${
            isDark ? "text-amber-400" : "text-amber-800 font-black"
          }`}>
            <CheckCircle2 className="w-3.5 h-3.5" /> High-Yield Board Formulae & Memory Anchors
          </h4>
          <ul className={`grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono ${
            isDark ? "text-slate-300" : "text-slate-700 font-medium"
          }`}>
            {activeChapter.keyFormulas.map((formula, idx) => (
              <li key={idx} className={`flex items-start gap-2 p-2.5 rounded-lg border ${
                isDark ? "bg-white/5 border-white/5" : "bg-white border-slate-200 shadow-2xs text-slate-800"
              }`}>
                <span className="text-amber-500 font-bold shrink-0">•</span>
                <span>{formula}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mnemonic Images Grid - All photos of this chapter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {activeChapter.images.map((img, idx) => (
            <div
              key={idx}
              className={`group rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-amber-500/40 flex flex-col justify-between ${
                isDark ? "bg-[#090d16] border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              {/* Image Preview Container */}
              <div 
                onClick={() => setActiveModalImage(img)}
                className={`relative h-64 sm:h-72 w-full overflow-hidden cursor-pointer flex items-center justify-center group-hover:opacity-95 ${
                  isDark ? "bg-black/40" : "bg-slate-100"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 flex items-center gap-1.5 shadow-lg">
                    <ZoomIn className="w-4 h-4" /> Full View
                  </span>
                </div>
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold font-mono bg-black/70 text-amber-300 border border-white/10">
                  Sheet #{idx + 1}
                </span>
              </div>

              {/* Caption & Controls */}
              <div className={`p-4 space-y-2 border-t flex flex-col justify-between flex-1 ${
                isDark ? "border-white/10" : "border-slate-100"
              }`}>
                <div>
                  <h4 className={`text-sm font-bold transition-colors ${
                    isDark ? "text-white group-hover:text-amber-400" : "text-slate-900 group-hover:text-amber-600 font-bold"
                  }`}>
                    {img.title}
                  </h4>
                  <p className={`text-xs mt-1 leading-relaxed line-clamp-2 ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {img.description}
                  </p>
                </div>

                <div className={`pt-3 border-t flex items-center justify-between gap-2 ${
                  isDark ? "border-white/5" : "border-slate-100"
                }`}>
                  <button
                    onClick={() => setActiveModalImage(img)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                      isDark ? "bg-white/5 hover:bg-white/10 text-white border-white/10" : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200 font-bold"
                    }`}
                  >
                    <Maximize2 className="w-3.5 h-3.5" /> Expand
                  </button>
                  <a
                    href={img.src}
                    download
                    className={`p-1.5 rounded-lg border transition-colors ${
                      isDark ? "text-slate-400 hover:text-amber-400 bg-white/5 border-white/10" : "text-slate-600 hover:text-amber-600 bg-slate-100 border-slate-200"
                    }`}
                    title="Download Diagram"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Modal via Portal */}
      {mounted && activeModalImage && createPortal(
        <div
          className="fixed inset-0 bg-black/85 z-[99999] flex items-center justify-center p-3 sm:p-6 select-none"
          onClick={() => setActiveModalImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl border border-white/15 bg-[#0b0f19] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  {activeModalImage.title}
                </h3>
                <p className="text-xs text-slate-400 truncate max-w-xl">
                  {activeModalImage.description}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeModalImage.src}
                  download
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  title="Download Image"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setActiveModalImage(null)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Body */}
            <div className="flex-1 overflow-auto p-2 sm:p-4 bg-black/60 flex items-center justify-center min-h-[50vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeModalImage.src}
                alt={activeModalImage.title}
                className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
