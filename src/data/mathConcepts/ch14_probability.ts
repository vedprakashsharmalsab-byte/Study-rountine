import type { MathChapterConcept } from "./types";

export const CH14_PROBABILITY_CONCEPT: MathChapterConcept = {
  chapterNo: 14,
  title: "Probability",
  weightage: "4 Marks (Board Mandatory)",
  oneLiner: "Probability is a scale from 0 to 1; P(E) + P(not E) = 1; Master the 52-card deck and the 36-cell two-dice grid.",
  analogyTitle: "The Crystal Ball & The Fair Coin Toss",
  analogyContent: "Imagine flipping a fair coin into the air. Before it lands, nobody knows the future. But mathematics gives us a superpower called **Probability**: the exact numerical measurement of uncertainty! If an event cannot happen in this universe (like rolling an 8 on a standard 6-sided die), its probability is **0 (Impossible Event)**. If an event is 100% guaranteed to happen (like the sun rising tomorrow, or rolling a number less than 7), its probability is **1 (Sure / Certain Event)**. Every other chance in life lives between 0 and 1.",
  sections: [
    {
      id: "probability_scale",
      label: "1. The Classical Definition & The 0-to-1 Scale",
      heading: "Favorable Outcomes Divided by Total Outcomes",
      subheading: "Impossible Events (0), Sure Events (1), and Why Probabilities Cannot Be Negative",
      explanation: "The theoretical (classical) probability of an event $E$, written as $P(E)$, is defined as:  \n\n$$\\mathbf{P(E) = \\frac{\\text{Number of outcomes favorable to } E}{\\text{Total number of all possible outcomes}} = \\frac{n(E)}{n(S)}}$$  \n\n**The Universal Probability Bounds (Mandatory MCQ Rule):**  \n$$\\mathbf{0 \\le P(E) \\le 1}$$  \n$\\bullet$ If $P(E) = 0$: $E$ is an **Impossible Event** (e.g. drawing a blue ball from a bag containing only red balls).  \n$\\bullet$ If $P(E) = 1$: $E$ is a **Sure / Certain Event** (e.g. drawing a red ball from a bag containing only red balls).  \n$\\bullet$ **A probability can NEVER be negative!** ($P(E) \\ge 0$).  \n$\\bullet$ **A probability can NEVER be greater than 1!** (e.g. $\\frac{5}{3} = 1.67$ or $120\\%$ cannot be a probability!).",
      formulasOrKeyPoints: [
        {
          title: "MCQ Eliminator Test",
          content: "Which of the following CANNOT be the probability of an event?  \n(A) $\\frac{2}{3}$, \\quad (B) $-1.5$, \\quad (C) $15\\%$, \\quad (D) $0.7$  \n$$\\textbf{Answer: (B) } -1.5 \\quad (\\text{Probability can never be negative!})$$",
          note: "Any number < 0 or > 1 is immediately disqualified as a probability."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Write Sample Space $S$ and Its Size $n(S)$ First",
          action: "Always state: 'Total number of possible outcomes $n(S) = \\dots$'.",
          proTip: "CBSE marking schemes award 0.5 marks for stating the total sample space size."
        }
      ],
      examinerTraps: [
        {
          trap: "Writing probability as an improper fraction where numerator > denominator (e.g. 5/4).",
          correction: "Favorable outcomes $n(E)$ can never exceed total outcomes $n(S)$! $P(E)$ is always $\\le 1$."
        }
      ]
    },
    {
      id: "complementary_events",
      label: "2. Complementary Events: P(E) + P(not E) = 1",
      heading: "The Subtraction Shortcut for 'At Least' Problems",
      subheading: "Sum of All Elementary Probabilities Equals Exactly 1",
      explanation: "For any event $E$, the event **'not $E$'** (denoted $\\bar{E}$ or $E'$) is called its **Complementary Event**.  \nAn outcome must either be $E$ or NOT $E$ — there is no third option!  \n\nTherefore:  \n$$\\mathbf{P(E) + P(\\bar{E}) = 1} \\iff \\mathbf{P(\\bar{E}) = 1 - P(E)}$$  \n\n**Elementary Events Theorem:**  \nAn event having only one outcome of the experiment is called an **Elementary Event**.  \nThe sum of the probabilities of all the elementary events of an experiment is **always equal to 1**:  \n$$\\mathbf{P(E_1) + P(E_2) + \\dots + P(E_k) = 1}$$",
      formulasOrKeyPoints: [
        {
          title: "Instant Complementary Calculation",
          content: "If the probability of winning a game is $0.38$, the probability of losing is:  \n$$P(\\text{Losing}) = 1 - 0.38 = \\mathbf{0.62}!$$",
          note: "Subtract from 1 to find the opposite chance in 2 seconds."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Use the Complementary Trick for 'At Least One'",
          action: "To find $P(\\text{at least one head})$, compute $1 - P(\\text{no heads})$.",
          proTip: "Calculating 1 minus the zero-case is much faster than adding up all multiple positive cases."
        }
      ],
      examinerTraps: [
        {
          trap: "Decimal subtraction errors when computing $1 - 0.05$.",
          correction: "$1 - 0.05 = 0.95$ (NOT 0.05 or 0.9!). Write $1.00 - 0.05$ to avoid silly subtraction mistakes."
        }
      ]
    },
    {
      id: "deck_of_cards",
      label: "3. The 52-Card Deck Breakdown (Board Favorite)",
      heading: "Suits, Colors, Face Cards, and the 'Ace' Distinction",
      subheading: "Why Aces Are NOT Face Cards (The Most Common Board Mistake)",
      explanation: "A standard deck of playing cards contains **52 cards** (excluding jokers).  \n\n**1. The 2 Colors (26 Each):**  \n$\\bullet$ **26 Red Cards**: Hearts (♥) and Diamonds (♦).  \n$\\bullet$ **26 Black Cards**: Spades (♠) and Clubs (♣).  \n\n**2. The 4 Suits (13 Cards Each):**  \n$\\bullet$ 13 Spades (♠) — Black  \n$\\bullet$ 13 Clubs (♣) — Black  \n$\\bullet$ 13 Hearts (♥) — Red  \n$\\bullet$ 13 Diamonds (♦) — Red  \n\n**3. The 12 Face Cards (Court Cards):**  \nCards that have an actual human face drawn on them: **Kings ($K$), Queens ($Q$), and Jacks ($J$)**!  \n$$\\mathbf{4 \\text{ Kings} + 4 \\text{ Queens} + 4 \\text{ Jacks} = 12 \\text{ Face Cards}} \\quad (6 \\text{ Red}, \\; 6 \\text{ Black})$$  \n$$\\mathbf{P(\\text{Face Card}) = \\frac{12}{52} = \\frac{3}{13}} \\qquad \\mathbf{P(\\text{Red Face Card}) = \\frac{6}{52} = \\frac{3}{26}}$$  \n\n**THE GOLDEN DISTINCTION (Aces):**  \nThere are **4 Aces** (2 Red, 2 Black).  \n$$\\mathbf{\\text{ACES DO NOT HAVE FACES! ACES ARE NOT FACE CARDS!}}$$  \nIf a question asks for 'Face cards', **DO NOT include Aces**!",
      formulasOrKeyPoints: [
        {
          title: "The 52-Card Complete Inventory Matrix",
          content: "$$\\begin{array}{|c|c|c|c|c|} \\hline \\textbf{Suit} & \\textbf{Color} & \\textbf{Face Cards (K, Q, J)} & \\textbf{Ace} & \\textbf{Number Cards (2 to 10)} \\\\\\\\ \\hline \\text{Spades (♠)} & \\text{Black} & 3 & 1 & 9 \\\\\\\\ \\hline \\text{Clubs (♣)} & \\text{Black} & 3 & 1 & 9 \\\\\\\\ \\hline \\text{Hearts (♥)} & \\text{Red} & 3 & 1 & 9 \\\\\\\\ \\hline \\text{Diamonds (♦)} & \\text{Red} & 3 & 1 & 9 \\\\\\\\ \\hline \\textbf{Total (52)} & \\text{26 Red, 26 Black} & \\mathbf{12 \\text{ Face Cards}} & \\mathbf{4 \\text{ Aces}} & \\mathbf{36 \\text{ Number Cards}} \\\\\\\\ \\hline \\end{array}$$",
          note: "Print this matrix in your memory! It answers every single card question in CBSE history."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Check for Removed Cards First",
          action: "Board questions often begin: *'The king, queen, and jack of clubs are removed from a deck of 52 cards...'*  \nImmediately update total: $n(S) = 52 - 3 = \\mathbf{49}$! Then compute remaining cards.",
          proTip: "Dividing by 52 when cards were removed is the #1 reason students lose 3 marks."
        }
      ],
      examinerTraps: [
        {
          trap: "Counting Aces as Face Cards (taking 16 face cards instead of 12).",
          correction: "There are strictly 12 face cards (4 Kings, 4 Queens, 4 Jacks). Aces are honor cards, NOT face cards."
        }
      ]
    },
    {
      id: "two_dice_grid",
      label: "4. Rolling Two Dice (The 36-Cell Outcome Matrix)",
      heading: "Sample Space $6 \\times 6 = 36$ & The Sum Distribution Pyramid",
      subheading: "Doublets, Most Probable Sums, and Product of Numbers",
      explanation: "When two distinct dice (say, one Blue and one Grey) are rolled together:  \nTotal number of possible outcomes:  \n$$\\mathbf{n(S) = 6 \\times 6 = 36}$$  \n\n**The 36 Outcomes Grid:**  \n$$\\begin{matrix} (1,1) & (1,2) & (1,3) & (1,4) & (1,5) & (1,6) \\\\\\\\ (2,1) & (2,2) & (2,3) & (2,4) & (2,5) & (2,6) \\\\\\\\ (3,1) & (3,2) & (3,3) & (3,4) & (3,5) & (3,6) \\\\\\\\ (4,1) & (4,2) & (4,3) & (4,4) & (4,5) & (4,6) \\\\\\\\ (5,1) & (5,2) & (5,3) & (5,4) & (5,5) & (5,6) \\\\\\\\ (6,1) & (6,2) & (6,3) & (6,4) & (6,5) & (6,6) \\end{matrix}$$  \n\n**1. Doublets (Same number on both dice):**  \n$$\\{(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)\\} \\implies \\mathbf{6 \\text{ outcomes} \\implies P = \\frac{6}{36} = \\frac{1}{6}}$$  \n\n**2. The Sum Distribution Pyramid (Sum ranges from 2 to 12):**  \n$\\bullet$ Sum = 2: $(1,1) \\implies 1/36$  \n$\\bullet$ Sum = 3: $(1,2), (2,1) \\implies 2/36$  \n$\\bullet$ Sum = 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) \\implies \\mathbf{6/36 = 1/6} \\quad \\textbf{(Most Probable Sum!)}$  \n$\\bullet$ Sum = 12: $(6,6) \\implies 1/36$",
      formulasOrKeyPoints: [
        {
          title: "The Sum Probability Symmetry Table",
          content: "$$\\begin{array}{|c|c|c|c|c|c|c|c|c|c|c|c|} \\hline \\textbf{Sum} & 2 & 3 & 4 & 5 & 6 & \\mathbf{7} & 8 & 9 & 10 & 11 & 12 \\\\\\\\ \\hline \\textbf{Count} & 1 & 2 & 3 & 4 & 5 & \\mathbf{6} & 5 & 4 & 3 & 2 & 1 \\\\\\\\ \\hline \\textbf{Prob} & \\frac{1}{36} & \\frac{2}{36} & \\frac{3}{36} & \\frac{4}{36} & \\frac{5}{36} & \\mathbf{\\frac{6}{36}} & \\frac{5}{36} & \\frac{4}{36} & \\frac{3}{36} & \\frac{2}{36} & \\frac{1}{36} \\\\\\\\ \\hline \\end{array}$$",
          note: "Notice the perfect symmetric pyramid: counts rise from 1 to 6 (at sum 7), then descend back to 1!"
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Write Down All Ordered Pairs Systematically",
          action: "When asked for sum = 8, write: $(2,6), (3,5), (4,4), (5,3), (6,2)$. Count: exactly 5 pairs $\\implies P = 5/36$.",
          proTip: "Remember that $(2,6)$ and $(6,2)$ are two DIFFERENT outcomes!"
        }
      ],
      examinerTraps: [
        {
          trap: "Treating $(2,6)$ and $(6,2)$ as the same outcome.",
          correction: "Dice are distinct! Getting 2 on the first die and 6 on the second is completely different from getting 6 on the first and 2 on the second. Both must be counted."
        }
      ]
    },
    {
      id: "coins_and_calendar",
      label: "5. Coins (1, 2, 3) & Leap Year Problems",
      heading: "At Least vs At Most + The 53 Sundays Leap Year Secret",
      subheading: "Sample Space of 3 Coins (2^3 = 8) & The 52-Week Calendar Arithmetic",
      explanation: "1. **Tossing 3 Coins Simultaneously:**  \n$$\\mathbf{n(S) = 2^3 = 8 \\text{ outcomes:}}$$  \n$$\\mathbf{\\{ HHH, \\; HHT, \\; HTH, \\; THH, \\; HTT, \\; THT, \\; TTH, \\; TTT \\}}$$  \n$\\bullet$ **'At least 2 heads'**: 2 or more heads $\\implies \\{HHT, HTH, THH, HHH\\} = \\mathbf{4/8 = 1/2}$.  \n$\\bullet$ **'At most 2 heads'**: 2 or fewer heads (0, 1, or 2 heads) $\\implies$ all EXCEPT $HHH \\implies \\mathbf{7/8}$.  \n\n2. **The 53 Sundays Calendar Problem:**  \n$\\bullet$ **Ordinary Year (365 Days)**:  \n$$365 = 52 \\times 7 + 1 \\implies \\mathbf{52 \\text{ full weeks} + 1 \\text{ extra day}}$$  \nThe 52 weeks guarantee 52 Sundays. The 53rd Sunday depends on that 1 extra day:  \n$$\\mathbf{P(53 \\text{ Sundays in Ordinary Year}) = \\frac{1}{7}}$$  \n\n$\\bullet$ **Leap Year (366 Days)**:  \n$$366 = 52 \\times 7 + 2 \\implies \\mathbf{52 \\text{ full weeks} + 2 \\text{ extra days}}$$  \nThe 2 extra days can be: $(M, Tu), (Tu, W), (W, Th), (Th, F), (F, Sa), \\mathbf{(Sa, Su), (Su, M)}$.  \nOut of 7 pairs, 2 pairs contain Sunday:  \n$$\\mathbf{P(53 \\text{ Sundays in a Leap Year}) = \\frac{2}{7}!}$$",
      formulasOrKeyPoints: [
        {
          title: "Calendar Cheat Sheet",
          content: "$$\\mathbf{P(53 \\text{ Sundays in Leap Year}) = \\frac{2}{7}} \\qquad \\mathbf{P(53 \\text{ Sundays in Non-Leap Year}) = \\frac{1}{7}}$$  \n$$\\mathbf{P(53 \\text{ Sundays AND 53 Mondays in Leap Year}) = \\frac{1}{7} \\quad \\text{[Pair is (Su, M)]}}$$  \n$$\\mathbf{P(53 \\text{ Sundays OR 53 Mondays in Leap Year}) = \\frac{3}{7} \\quad \\text{[Pairs: (Sa, Su), (Su, M), (M, Tu)]}}$$",
          note: "This 2/7 vs 1/7 question is tested in almost every board examination cycle."
        }
      ],
      stepByStepGuide: [
        {
          stepNo: 1,
          title: "Decode 'At Least' vs 'At Most'",
          action: "\"At least $k$\" $\\implies \\ge k$ (Minimum $k$, can be more).  \n\"At most $k$\" $\\implies \\le k$ (Maximum $k$, can be less down to 0!).",
          proTip: "Zero count is included in 'at most' (e.g. 0 heads is counted in 'at most 2 heads')!"
        }
      ],
      examinerTraps: [
        {
          trap: "Leaving out 0 heads when evaluating 'at most 2 heads'.",
          correction: "'At most 2' means $\\le 2$, which includes 0 heads ($TTT$), 1 head, and 2 heads. Only 3 heads ($HHH$) is excluded: $7/8$."
        },
        {
          trap: "Writing $\\frac{53}{366}$ or $\\frac{53}{365}$ for the 53 Sundays question.",
          correction: "Every year has 52 Sundays guaranteed! The 53rd Sunday depends on the 1 or 2 extra days out of 7 days in a week. The answer is $\\frac{1}{7}$ or $\\frac{2}{7}$, NEVER 53/366!"
        }
      ]
    }
  ]
};
