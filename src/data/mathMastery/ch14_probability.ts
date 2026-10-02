import { ChapterData } from './types';

export const CH14_DATA: ChapterData = {
  chapterNumber: 14,
  chapterName: 'Probability',
  weightageEstimate: '4–5 Marks (CBSE Board Standard/Basic)',
  overview: {
    about: 'Probability in Class 10 provides the mathematical measure of certainty and chance through the Theoretical (Classical) Probability framework. Every event has a probability bounded strictly between 0 (Impossible Event) and 1 (Sure Event), evaluated across standard random experiments: coin tosses, rolling dice, well-shuffled decks of 52 cards, and colored marbles.',
    prerequisites: [
      'Basic fractions and percentage conversions',
      'Knowledge of a standard 52-card deck (4 suits, 12 face cards)',
      'Understanding prime numbers (2 is the smallest and only even prime; 1 is NOT prime)'
    ],
    coreIdeas: [
      'Theoretical Probability: P(E) = (Number of outcomes favorable to E) / (Total number of possible outcomes).',
      'Universal Probability Bounds: 0 <= P(E) <= 1. Probability can NEVER be negative and can NEVER exceed 1 (or 100%).',
      'Complementary Event Rule: P(E) + P(not E) = 1 ⟹ P(not E) = 1 - P(E).',
      'Coin Tosses: 1 coin has 2 outcomes {H, T}; 2 coins have 4 outcomes {HH, HT, TH, TT}; 3 coins have 8 outcomes {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}.',
      'Dice Outcomes: 1 die has 6 outcomes {1, 2, 3, 4, 5, 6}. Primes are {2, 3, 5} (1 is neither prime nor composite!). 2 dice thrown together have 6 x 6 = 36 outcomes.',
      'Card Deck Blueprint: Total 52 cards. 26 Red (Hearts ♥, Diamonds ♦), 26 Black (Spades ♠, Clubs ♣). Exactly 12 Face Cards (4 Kings, 4 Queens, 4 Jacks). Aces are NOT face cards (they are honor cards!).',
      'Leap Year Rule: A leap year has 366 days = 52 weeks + 2 extra days. Probability of 53 Sundays in a leap year = 2/7. In a non-leap year (365 days = 52 weeks + 1 extra day), it is 1/7.'
    ],
    keyRelationships: [
      '"At least 1" means 1 or more (everything except 0).',
      '"At most 1" means 0 or 1 (cannot exceed 1).',
      'Two dice sum probabilities form a pyramid: sum 2 is 1/36, sum 7 is peak 6/36 = 1/6, sum 12 is 1/36.'
    ],
    frequentMisunderstandings: [
      'Counting Aces as face cards! (Face cards literally have a human face drawn on them: K, Q, J = 12 total cards).',
      'Counting 1 as a prime number (The primes on a die are ONLY 2, 3, 5, giving probability 3/6 = 1/2).',
      'Thinking "or" means both must happen simultaneously (e.g. "a king or a queen" = 4 + 4 = 8 favorable outcomes).'
    ],
    examImportanceEvidence: 'Guaranteed 4–5 marks! Typically includes: 1 MCQ (1 Mark on impossible probability, card suit, or P(not E)) + 1 Short Answer (3 Marks on cards, 2 dice, or marbles in a bag).'
  },
  concepts: [
    {
      id: 'ch14_c1',
      title: 'Classical Probability & Complementary Events',
      topic: 'Theoretical Probability Axioms',
      simpleExplanation: 'Probability is just a fraction: Put what you want (favorable outcomes) on top, and put all possible outcomes on the bottom!',
      exactMathIdea: 'For an experiment where all elementary outcomes are equally likely, the probability of an event E is P(E) = n(E) / n(S). For any event E: 0 <= P(E) <= 1, P(Impossible) = 0, P(Sure) = 1, and P(E) + P(Ē) = 1.',
      formulaOrTheorem: 'P(E) = \\frac{\\text{Favorable Outcomes}}{\\text{Total Outcomes}}, \\quad P(\\bar{E}) = 1 - P(E)',
      whenToUse: 'Whenever calculating chances of drawing colored balls, defectives, or calculating P(not E) given P(E).',
      recognitionClues: [
        'If P(E) = 0.05, what is the probability of "not E"?',
        'A bag contains 3 red balls and 5 black balls',
        'A box contains 90 discs numbered from 1 to 90'
      ],
      workedExamples: [
        {
          level: 'basic',
          title: 'Complementary Probability P(not E)',
          question: 'If P(E) = 0.05, what is the probability of "not E"?',
          given: 'P(E) = 0.05.',
          toFind: 'P(not E) or P(Ē).',
          methodSelectionReason: 'Complementary rule: P(E) + P(not E) = 1.',
          stepByStepSolution: [
            'We know that for any event E:',
            'P(E) + P(not E) = 1',
            'P(not E) = 1 - P(E)',
            'P(not E) = 1 - 0.05 = 0.95.'
          ],
          finalAnswer: 'P(not E) = 0.95',
          verificationCheck: '0.05 + 0.95 = 1.00. Perfect.',
          commonTrap: 'Writing 1 - 0.05 = 0.05 or 0.5.'
        },
        {
          level: 'standard',
          title: 'Two Dice 36 Outcomes',
          question: 'Two dice are thrown at the same time. What is the probability that the sum of the two numbers appearing on the top of the dice is: (i) 8, (ii) 13, (iii) less than or equal to 12?',
          given: 'Two dice thrown simultaneously ⟹ Total possible outcomes = 6 * 6 = 36.',
          toFind: 'Probabilities of sum 8, 13, and ≤ 12.',
          methodSelectionReason: 'List favorable ordered pairs (x, y) from the 36-outcome sample space.',
          stepByStepSolution: [
            'Total number of outcomes = 36.',
            '(i) Favorable outcomes for sum = 8: (2, 6), (3, 5), (4, 4), (5, 3), (6, 2) ⟹ 5 outcomes.',
            'P(Sum = 8) = 5 / 36.',
            '(ii) Maximum possible sum is 6 + 6 = 12. Sum = 13 is an IMPOSSIBLE EVENT.',
            'P(Sum = 13) = 0 / 36 = 0.',
            '(iii) All possible sums range from 2 to 12. Every outcome has sum ≤ 12. This is a SURE EVENT.',
            'P(Sum ≤ 12) = 36 / 36 = 1.'
          ],
          finalAnswer: '(i) 5/36, (ii) 0, (iii) 1',
          verificationCheck: 'All values satisfy 0 <= P <= 1. Impossible is 0, sure is 1.',
          commonTrap: 'Forgetting that (2, 6) and (6, 2) are two distinct outcomes on two distinct dice.'
        }
      ],
      commonMisconceptions: ['Thinking probability can be negative or greater than 1.'],
      priority: 'Must Master',
      cbseFrequency: 'Appears in every CBSE board paper.',
      sourceTrace: 'NCERT Ch 14 Exercise 14.1 Q5 & Q22'
    },
    {
      id: 'ch14_c2',
      title: '52-Card Deck Probability Blueprint',
      topic: 'Card Deck Probabilities',
      simpleExplanation: '52 cards split cleanly into 26 Red and 26 Black across 4 suits of 13 cards. Face cards are strictly the 12 royal royals: Kings, Queens, and Jacks!',
      exactMathIdea: 'A standard deck of 52 cards consists of 4 suits of 13 cards: Spades ♠, Clubs ♣ (Black); Hearts ♥, Diamonds ♦ (Red). Each suit has Ace, 2-10, Jack, Queen, King. Total face cards = 3 * 4 = 12. Total Aces = 4. Number cards = 36.',
      formulaOrTheorem: 'P(\\text{Card Event}) = \\frac{\\text{Favorable Cards}}{52}',
      whenToUse: 'When drawing one or more cards from a well-shuffled deck of 52 cards.',
      recognitionClues: [
        'One card is drawn from a well-shuffled deck of 52 cards',
        'Find the probability of getting: a king of red color, a face card, a red face card',
        'A spade, the queen of diamonds'
      ],
      workedExamples: [
        {
          level: 'application',
          title: 'Comprehensive Card Deck Examination',
          question: 'One card is drawn from a well-shuffled deck of 52 cards. Find the probability of getting: (i) a king of red color, (ii) a face card, (iii) a red face card, (iv) the jack of hearts, (v) a spade, (vi) the queen of diamonds.',
          given: 'Total number of cards = 52.',
          toFind: 'Probabilities of the 6 card events.',
          methodSelectionReason: 'Identify the exact count of favorable cards for each condition and divide by 52.',
          stepByStepSolution: [
            'Total possible outcomes = 52.',
            '(i) Red kings: King of Hearts, King of Diamonds = 2 cards.',
            'P(Red King) = 2 / 52 = 1 / 26.',
            '(ii) Face cards: 4 Kings, 4 Queens, 4 Jacks = 12 cards.',
            'P(Face card) = 12 / 52 = 3 / 13.',
            '(iii) Red face cards: 2 Red Kings, 2 Red Queens, 2 Red Jacks = 6 cards.',
            'P(Red face card) = 6 / 52 = 3 / 26.',
            '(iv) Jack of hearts: exactly 1 unique card.',
            'P(Jack of hearts) = 1 / 52.',
            '(v) Spades: exactly 13 cards in the spade suit.',
            'P(Spade) = 13 / 52 = 1 / 4.',
            '(vi) Queen of diamonds: exactly 1 unique card.',
            'P(Queen of diamonds) = 1 / 52.'
          ],
          finalAnswer: '(i) 1/26, (ii) 3/13, (iii) 3/26, (iv) 1/52, (v) 1/4, (vi) 1/52',
          verificationCheck: 'All probabilities are reduced fractions with denominators dividing 52. Correct.',
          commonTrap: 'Counting Aces as face cards, which would wrongly make 16 face cards instead of 12!'
        }
      ],
      commonMisconceptions: ['Calling Aces face cards.'],
      priority: 'Must Master',
      cbseFrequency: 'The most repeated 3-mark question in Class 10 probability.',
      sourceTrace: 'NCERT Ch 14 Exercise 14.1 Q14'
    }
  ],
  formulas: [
    {
      id: 'ch14_f1',
      name: 'Classical Probability Axiom & Bounds',
      formula: 'P(E) = \\frac{n(E)}{n(S)}, \\quad 0 \\le P(E) \\le 1, \\quad P(E) + P(\\bar{E}) = 1',
      symbolMeanings: [
        { symbol: 'n(E)', meaning: 'Number of outcomes favorable to event E' },
        { symbol: 'n(S)', meaning: 'Total number of equally likely elementary outcomes' },
        { symbol: 'P(Ē)', meaning: 'Probability of the complementary event (not E)' }
      ],
      whenToUse: 'Every probability problem.',
      conditions: ['All elementary outcomes in sample space S must be equally likely'],
      commonSubstitutions: ['P(not E) = 1 - P(E); P(At least 1) = 1 - P(None)'],
      miniExample: {
        question: 'Probability of getting a prime number on a single die roll.',
        substitution: 'Primes = {2, 3, 5} ⟹ 3 outcomes. Total = 6 ⟹ P = 3/6 = 1/2',
        result: '1/2'
      },
      commonMistakes: ['Counting 1 as a prime number.'],
      memoryTrick: 'Favorable over Total: Always simplify the fraction!',
      sourceTrace: 'NCERT Section 14.1'
    }
  ],
  methodGuides: [
    {
      id: 'ch14_m1',
      questionPattern: 'At Least vs At Most in Coin Tosses',
      recognitionClues: ['Find the probability of getting at least one head', 'Find the probability of getting at most two heads'],
      requiredConcept: 'Sample space of multiple coin tosses and inequality interpretations.',
      whatIsGiven: 'Number of coins tossed (e.g. 2 or 3 coins).',
      whatMustBeFound: 'Probability of "at least k" or "at most k" heads/tails.',
      chosenMethod: '1) Write out all outcomes explicitly. 2) "At least k" means >= k. 3) "At most k" means <= k.',
      executionSteps: [
        'Step 1: Write sample space for 2 coins: {HH, HT, TH, TT} (Total = 4). Or for 3 coins: {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT} (Total = 8).',
        'Step 2: If question says "at least 1 head", favorable outcomes have 1, 2, (or 3) heads. Exclude only zero heads (TT or TTT). Favorable = 3/4 (for 2 coins) or 7/8 (for 3 coins).',
        'Step 3: If question says "at most 1 head", favorable outcomes have 0 or 1 head. Exclude outcomes with 2 or more heads.',
        'Step 4: Form the fraction P = Favorable / Total and simplify.'
      ],
      verificationMethod: 'P(at least 1) + P(zero) must equal 1.',
      commonTrap: 'Confusing "at least" (>=) with "at most" (<=).',
      exemplarQuestion: 'Three coins are tossed together. Find the probability of getting: (i) at least 2 heads, (ii) at most 2 heads.',
      exemplarAnswer: 'Total outcomes = 8. (i) At least 2 heads: {HHT, HTH, THH, HHH} ⟹ 4 outcomes ⟹ P = 4/8 = 1/2. (ii) At most 2 heads: all except HHH ⟹ 7 outcomes ⟹ P = 7/8.'
    }
  ],
  gradedQuestions: [
    {
      id: 'ch14_q1',
      chapterId: 14,
      topic: 'Probability Range Check',
      level: 1,
      levelLabel: 'Level 1 — Foundation',
      question: 'Which of the following cannot be the probability of an event?',
      options: ['2/3', '-1.5', '15%', '0.7'],
      correctAnswer: '-1.5',
      marks: 1,
      hints: ['Probability can never be negative (0 ≤ P ≤ 1).'],
      solutionSteps: ['Since probability of an event is always between 0 and 1 (inclusive), a negative value like -1.5 is impossible.'],
      commonTrap: 'Thinking 15% is not a probability (15% = 0.15, which is completely valid!).',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 14 Ex 14.1 Q4',
      conceptId: 'ch14_c1'
    },
    {
      id: 'ch14_q2',
      chapterId: 14,
      topic: 'Single Die Prime Probability',
      level: 2,
      levelLabel: 'Level 2 — Standard',
      question: 'A die is thrown once. Find the probability of getting a prime number.',
      options: ['1/6', '1/3', '1/2', '2/3'],
      correctAnswer: '1/2',
      marks: 1,
      hints: ['Prime numbers on a die are 2, 3, 5.'],
      solutionSteps: [
        'Total outcomes = {1, 2, 3, 4, 5, 6} = 6.',
        'Prime numbers = {2, 3, 5} = 3 outcomes (1 is not prime!).',
        'P(Prime) = 3 / 6 = 1 / 2.'
      ],
      commonTrap: 'Including 1 as a prime number (giving 4/6 = 2/3).',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 14 Ex 14.1 Q13(i)',
      conceptId: 'ch14_c1'
    },
    {
      id: 'ch14_q3',
      chapterId: 14,
      topic: 'Numbered Discs Problem',
      level: 3,
      levelLabel: 'Level 3 — Application',
      question: 'A box contains 90 discs which are numbered from 1 to 90. If one disc is drawn at random from the box, find the probability that it bears: (i) a two-digit number, (ii) a perfect square number.',
      correctAnswer: '(i) 9/10, (ii) 1/10',
      marks: 3,
      hints: ['Total = 90. (i) Single digit numbers are 1 to 9 (9 numbers). Two-digit = 90 - 9 = 81. (ii) Squares are 1, 4, 9, 16, 25, 36, 49, 64, 81 (9 numbers).'],
      solutionSteps: [
        'Total possible outcomes = 90.',
        '(i) Two-digit numbers are from 10 to 90: total = 90 - 9 = 81 numbers.',
        'P(Two-digit number) = 81 / 90 = 9 / 10.',
        '(ii) Perfect square numbers from 1 to 90: {1, 4, 9, 16, 25, 36, 49, 64, 81} = 9 numbers.',
        'P(Perfect square) = 9 / 90 = 1 / 10.'
      ],
      commonTrap: 'Forgetting that 1 is a perfect square (1^2 = 1).',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 14 Ex 14.1 Q19',
      conceptId: 'ch14_c1'
    },
    {
      id: 'ch14_q4',
      chapterId: 14,
      topic: 'Card Deck Face Card and Black Card',
      level: 4,
      levelLabel: 'Level 4 — Advanced',
      question: 'From a deck of 52 playing cards, jacks, queens and kings of red color are removed. From the remaining cards, a card is drawn at random. Find the probability that the card drawn is: (i) a black face card, (ii) a red card.',
      correctAnswer: '(i) 3/23, (ii) 10/23',
      marks: 3,
      hints: ['Red face cards removed = 2 Kings + 2 Queens + 2 Jacks = 6 cards. Remaining total = 52 - 6 = 46 cards!'],
      solutionSteps: [
        'Red face cards removed = 2 Kings + 2 Queens + 2 Jacks = 6 cards.',
        'Remaining total cards = 52 - 6 = 46 cards.',
        '(i) Black face cards: 2 Kings + 2 Queens + 2 Jacks = 6 cards (none were removed).',
        'P(Black face card) = 6 / 46 = 3 / 23.',
        '(ii) Remaining red cards = 26 - 6 = 20 cards.',
        'P(Red card) = 20 / 46 = 10 / 23.'
      ],
      commonTrap: 'Using total cards as 52 instead of 46 after cards are removed.',
      isOriginalPractice: true,
      sourcePdfRef: 'CBSE 2020 Standard Board',
      conceptId: 'ch14_c2'
    },
    {
      id: 'ch14_q5',
      chapterId: 14,
      topic: 'Leap Year 53 Sundays Challenge',
      level: 5,
      levelLabel: 'Level 5 — Challenge',
      question: 'Find the probability that a leap year, selected at random, will contain 53 Sundays.',
      correctAnswer: '2/7',
      marks: 2,
      hints: ['Leap year = 366 days = 52 weeks + 2 days. The 2 extra days can be (Sun, Mon), (Mon, Tue), (Tue, Wed), (Wed, Thu), (Thu, Fri), (Fri, Sat), (Sat, Sun). 7 pairs, 2 have Sunday.'],
      solutionSteps: [
        'A leap year has 366 days.',
        '366 days = 52 weeks + 2 days.',
        '52 weeks guarantee 52 Sundays.',
        'The remaining 2 consecutive days can be any of the 7 equally likely pairs:',
        '{ (Sunday, Monday), (Monday, Tuesday), (Tuesday, Wednesday), (Wednesday, Thursday), (Thursday, Friday), (Friday, Saturday), (Saturday, Sunday) }.',
        'Total pairs = 7.',
        'Pairs containing a Sunday are: (Sunday, Monday) and (Saturday, Sunday) = 2 pairs.',
        'Therefore, P(53 Sundays in a leap year) = 2 / 7.'
      ],
      commonTrap: 'Writing 53/366 or 1/7 (1/7 is for non-leap years, NOT leap years!).',
      isOriginalPractice: true,
      sourcePdfRef: 'CBSE Board Classic Challenge',
      conceptId: 'ch14_c1'
    }
  ],
  pyqs: [
    {
      id: 'ch14_pyq1',
      year: 'CBSE 2024 / 2022 / 2019',
      marks: 3,
      topic: 'Defective Bulbs in Box',
      conceptTested: 'Conditional probability and reduced sample space',
      question: 'A lot of 20 bulbs contains 4 defective ones. One bulb is drawn at random from the lot. (i) What is the probability that this bulb is defective? (ii) Suppose the bulb drawn in (i) is not defective and is not replaced. Now one bulb is drawn at random from the rest. What is the probability that this bulb is not defective?',
      markingSchemeBreakdown: [
        { step: '(i) P(Defective) = 4/20 = 1/5', marks: 1 },
        { step: '(ii) Total remaining bulbs = 19, Non-defective remaining = 15', marks: 1 },
        { step: 'P(Not defective) = 15/19', marks: 1 }
      ],
      fullSolution: '(i) Total bulbs = 20, Defective bulbs = 4.\nP(Defective) = 4 / 20 = 1 / 5.\n\n(ii) A non-defective bulb was drawn and NOT replaced.\nTotal remaining bulbs = 20 - 1 = 19.\nRemaining non-defective bulbs = 16 - 1 = 15.\nP(Not defective bulb from remaining) = 15 / 19.\n\nHence, answers are 1/5 and 15/19.',
      commonMistake: 'Using total bulbs as 20 in part (ii) even though the bulb was not replaced.',
      frequencyTrend: 'Very popular CBSE 3-mark question.',
      source: 'CBSE Official Board Examination'
    }
  ],
  commonMistakes: [
    {
      id: 'ch14_err1',
      title: 'Counting 1 as a Prime Number',
      mistakeCategory: 'Incorrect Condition/Constraint',
      flawedWorking: 'When asked for prime numbers on a die, student writes {1, 2, 3, 5} and gets P = 4/6 = 2/3.',
      whyItIsWrong: 'By definition, a prime number has EXACTLY two distinct positive factors (1 and itself). Number 1 has only one factor (itself), so 1 is NEITHER prime nor composite.',
      correctWorking: 'Prime numbers on a single die are {2, 3, 5}. Favorable outcomes = 3, so P = 3/6 = 1/2.',
      howToAvoid: 'Remember: 2 is the first prime number. 1 is NEVER prime.',
      retryQuestion: {
        question: 'What is the probability of getting a composite number on rolling a die?',
        correctAnswer: '2/6 = 1/3',
        explanation: 'Composite numbers on die are 4 and 6 (2 outcomes). Note that 1 is not composite either!'
      }
    }
  ],
  revisionSheet: {
    mustRememberPoints: [
      'P(E) = Favorable / Total. 0 ≤ P(E) ≤ 1.',
      'P(E) + P(not E) = 1 ⟹ P(not E) = 1 - P(E).',
      'Deck of 52 cards: 26 Red, 26 Black, 12 Face cards (K, Q, J), 4 Aces (Aces are NOT face cards!).',
      'Die primes: {2, 3, 5} (1 is NOT prime).',
      'Two dice: 36 total outcomes. Doublets = 6/36 = 1/6.',
      'Leap year has 53 Sundays with probability 2/7. Non-leap year has 1/7.'
    ],
    speedTips: [
      'P(At least 1) = 1 - P(None).',
      'Doublets probability on two dice is always 1/6.',
      'Always simplify fractions to lowest terms: e.g. 4/52 = 1/13.'
    ],
    lastDayChecklist: [
      'Did you make sure your probability answer is between 0 and 1?',
      'Did you count 12 face cards (not 16)?',
      'Did you check if the question says "with replacement" or "without replacement"?'
    ]
  },
  tests: [
    {
      testType: 'Diagnostic',
      durationMinutes: 15,
      totalMarks: 5,
      questions: [
        {
          id: 'ch14_d1',
          chapterId: 14,
          topic: 'Sure Event',
          level: 1,
          levelLabel: 'Level 1 — Foundation',
          question: 'The probability of an event that is certain to happen is:',
          correctAnswer: '1',
          marks: 1,
          hints: ['A sure event has probability 1.'],
          solutionSteps: ['P(Sure event) = 1.'],
          commonTrap: 'Writing 0 or 100.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 14 Ex 14.1 Q1',
          conceptId: 'ch14_c1'
        },
        {
          id: 'ch14_d2',
          chapterId: 14,
          topic: 'Card Drawing',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'Find the probability of drawing an Ace from a well-shuffled deck of 52 cards.',
          correctAnswer: '1/13',
          marks: 2,
          hints: ['There are 4 Aces in a deck of 52 cards: 4/52.'],
          solutionSteps: ['P(Ace) = 4 / 52 = 1 / 13.'],
          commonTrap: 'Writing 1/52 (there are 4 Aces, not 1!).',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 14 Ex 14.1',
          conceptId: 'ch14_c2'
        },
        {
          id: 'ch14_d3',
          chapterId: 14,
          topic: 'Two Coins At Least One Head',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'Two coins are tossed simultaneously. Find the probability of getting at least one head.',
          correctAnswer: '3/4',
          marks: 2,
          hints: ['Outcomes: {HH, HT, TH, TT}. Favorable: {HH, HT, TH} = 3.'],
          solutionSteps: [
            'Sample space = {HH, HT, TH, TT} (4 outcomes).',
            'At least one head = {HH, HT, TH} (3 outcomes).',
            'P(At least 1 head) = 3 / 4.'
          ],
          commonTrap: 'Thinking "at least 1" means only 1 head (2/4 = 1/2).',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE 2021 Paper',
          conceptId: 'ch14_c1'
        }
      ]
    },
    {
      testType: 'Chapter Test',
      durationMinutes: 30,
      totalMarks: 10,
      questions: [
        {
          id: 'ch14_ct1',
          chapterId: 14,
          topic: 'Marbles in Jar',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'A jar contains 24 marbles, some are green and others are blue. If a marble is drawn at random from the jar, the probability that it is green is 2/3. Find the number of blue marbles in the jar.',
          correctAnswer: '8',
          marks: 3,
          hints: ['P(Green) = 2/3 ⟹ Green marbles = (2/3) * 24 = 16. Blue = 24 - 16 = 8.'],
          solutionSteps: [
            'Total marbles = 24.',
            'Number of green marbles = (2/3) * 24 = 16.',
            'Number of blue marbles = Total - Green = 24 - 16 = 8.'
          ],
          commonTrap: 'Reporting 16 (which is green marbles) instead of blue marbles.',
          isOriginalPractice: true,
          sourcePdfRef: 'NCERT Ch 14 Ex 14.1 Q24',
          conceptId: 'ch14_c1'
        },
        {
          id: 'ch14_ct2',
          chapterId: 14,
          topic: 'Two Dice Doublets',
          level: 3,
          levelLabel: 'Level 3 — Application',
          question: 'Two dice are thrown together. Find the probability of getting: (i) a doublet, (ii) a total of 10.',
          correctAnswer: '(i) 1/6, (ii) 1/12',
          marks: 3,
          hints: ['Total = 36. (i) Doublets: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) = 6. (ii) Sum 10: (4,6), (5,5), (6,4) = 3.'],
          solutionSteps: [
            'Total outcomes = 36.',
            '(i) Doublets = 6 outcomes ⟹ P = 6 / 36 = 1 / 6.',
            '(ii) Sum 10 = {(4, 6), (5, 5), (6, 4)} = 3 outcomes ⟹ P = 3 / 36 = 1 / 12.'
          ],
          commonTrap: 'Missing (6, 4) in sum 10.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Sample Paper',
          conceptId: 'ch14_c1'
        },
        {
          id: 'ch14_ct3',
          chapterId: 14,
          topic: 'Card Face Card Challenge',
          level: 4,
          levelLabel: 'Level 4 — Advanced',
          question: 'All the black face cards are removed from a pack of 52 playing cards. The remaining cards are well shuffled and then one card is drawn at random. Find the probability of getting: (i) a face card, (ii) a red card, (iii) a black card.',
          correctAnswer: '(i) 6/46 = 3/23, (ii) 26/46 = 13/23, (iii) 20/46 = 10/23',
          marks: 4,
          hints: ['Black face cards removed = 6 cards. Total remaining = 52 - 6 = 46 cards.'],
          solutionSteps: [
            'Black face cards removed = 2 Kings + 2 Queens + 2 Jacks = 6 cards.',
            'Remaining cards = 52 - 6 = 46.',
            '(i) Remaining face cards = 6 red face cards. P = 6 / 46 = 3 / 23.',
            '(ii) Red cards remaining = 26 (none removed). P = 26 / 46 = 13 / 23.',
            '(iii) Black cards remaining = 26 - 6 = 20. P = 20 / 46 = 10 / 23.'
          ],
          commonTrap: 'Using denominator 52 instead of 46.',
          isOriginalPractice: true,
          sourcePdfRef: 'CBSE Board Standard Paper',
          conceptId: 'ch14_c2'
        }
      ]
    }
  ]
};
