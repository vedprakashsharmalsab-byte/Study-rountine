"use client";

import React, { useState } from "react";
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

export default function MnemonicGallery({ isDark = true }: { isDark?: boolean }) {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(6);
  const [activeModalImage, setActiveModalImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  const activeChapter = MNEMONIC_CHAPTERS.find(c => c.chapterId === selectedChapterId) || MNEMONIC_CHAPTERS[0];

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
              Official high-resolution concept maps, geometric proofs, and formula breakdowns. Click any diagram to view in high-definition full-screen zoom.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border ${
              isDark ? "bg-amber-950/40 text-amber-300 border-amber-800/40" : "bg-amber-50 text-amber-900 border-amber-200"
            }`}>
              35 Chapter Diagrams
            </span>
          </div>
        </div>
      </div>

      {/* Chapter Selection Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {MNEMONIC_CHAPTERS.map((ch) => {
          const isSelected = ch.chapterId === selectedChapterId;
          return (
            <button
              key={ch.chapterId}
              onClick={() => setSelectedChapterId(ch.chapterId)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                isSelected
                  ? isDark
                    ? "bg-amber-500 text-slate-950 shadow-md font-extrabold"
                    : "bg-slate-900 text-white shadow-md font-extrabold"
                  : isDark
                  ? "bg-[#121212]/70 text-slate-400 hover:text-white border border-white/5 hover:border-white/10"
                  : "bg-white text-slate-700 hover:text-slate-950 border border-slate-200"
              }`}
            >
              <span>Ch {ch.chapterId}: {ch.chapterName}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                isSelected ? "bg-black/20 text-slate-950" : "bg-white/10 text-slate-400"
              }`}>
                {ch.images.length}
              </span>
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

      {/* Lightbox / Zoom Modal */}
      {activeModalImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-6 animate-fade-in">
          <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl border border-white/15 bg-[#0b0f19] overflow-hidden shadow-2xl">
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
        </div>
      )}
    </div>
  );
}
