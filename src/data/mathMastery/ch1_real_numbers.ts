import { ChapterData } from './types';

export const CH1_DATA: ChapterData = {
  chapterNumber: 1,
  chapterName: 'Real Numbers',
  weightageEstimate: '6 Marks (CBSE Board Standard/Basic)',
  overview: {
    about: 'Real Numbers forms the foundational algebra-arithmetic bridge of Class 10. The chapter focuses on the Fundamental Theorem of Arithmetic, applications of HCF and LCM in real-world scenarios, and formal contradiction proofs for irrational numbers.',
    prerequisites: ['Divisibility rules', 'Prime numbers vs composite numbers', 'Rational numbers concept (p/q, q != 0)', 'Basic algebraic manipulation'],
    coreIdeas: [
      'Every composite number can be uniquely factored into primes regardless of order.',
      'HCF represents the product of the smallest powers of each common prime factor.',
      'LCM represents the product of the greatest powers of each prime factor involved.',
      'For two positive integers a and b: HCF(a, b) * LCM(a, b) = a * b (Crucial: DOES NOT HOLD for 3 numbers).',
      'Proof by contradiction: If p is prime and p divides a^2, then p divides a. This is the cornerstone of proving sqrt(p) is irrational.'
    ],
    keyRelationships: [
      'HCF is always a factor of LCM for any two numbers.',
      'If HCF(a, b) does not divide LCM(a, b), such two numbers cannot exist.'
    ],
    frequentMisunderstandings: [
      'Applying HCF * LCM = a * b * c for three integers (which is algebraically false).',
      'Assuming that because sqrt(p) is irrational, 3 + 2sqrt(5) requires re-proving sqrt(5) from scratch when the question explicitly states "given that sqrt(5) is irrational".',
      'Confusing whether a word problem requires HCF (finding the largest equal partition/container) or LCM (finding the next simultaneous recurrence or smallest common multiple).'
    ],
    examImportanceEvidence: 'Appears every single year without exception. Typically features: 1 MCQ (1 Mark, usually on prime power exponents or decimal termination), 1 Short Answer (2 or 3 Marks, prime factorization or irrationality proof), and frequently combined in Section B/C.'
  },
  concepts: [
    {
      id: 'ch1_c1',
      title: 'Fundamental Theorem of Arithmetic & Prime Factorisation',
      topic: 'Arithmetic & Factorisation',
      simpleExplanation: 'Any composite number can be broken down into a unique multiplication of prime numbers, like a unique DNA fingerprint.',
      exactMathIdea: 'Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.',
      formulaOrTheorem: 'x = p_1^{a_1} \\cdot p_2^{a_2} \\cdots p_k^{a_k} \\text{ where } p_i \\text{ are distinct primes and } a_i \\ge 1',
      whenToUse: 'When asked to find prime factors, check if a number ends with digit 0, find total number of factors, or calculate HCF/LCM.',
      recognitionClues: ['Find prime factors of', 'Check whether 4^n or 6^n can end with digit 0', 'Explain why 7*11*13 + 13 is composite'],
      workedExamples: [
        {
          level: 'basic',
          title: 'Testing if 6^n ends with digit 0',
          question: 'Check whether 6^n can end with the digit 0 for any natural number n.',
          given: 'Number of the form 6^n, n \\in \\mathbb{N}',
          toFind: 'Whether the units digit can ever be 0.',
          methodSelectionReason: 'A number ends with digit 0 if and only if it is divisible by 10, meaning its prime factorisation must contain both 2 and 5.',
          stepByStepSolution: [
            'For a number to end with digit 0, its prime factorisation must contain both 2 and 5 as factors (since 10 = 2 * 5).',
            'Prime factorisation of 6 is 2 * 3.',
            'Therefore, 6^n = (2 * 3)^n = 2^n * 3^n.',
            'The only prime factors of 6^n are 2 and 3. By the Fundamental Theorem of Arithmetic, this prime factorisation is unique.',
            'Since 5 is not a prime factor of 6^n, 6^n can never end with the digit 0 for any natural number n.'
          ],
          finalAnswer: '6^n cannot end with digit 0 for any n in N.',
          verificationCheck: 'For n=1, 6; n=2, 36; n=3, 216... units digit is always 6.',
          commonTrap: 'Simply testing n=1, 2, 3 without quoting the Fundamental Theorem of Arithmetic uniqueness theorem loses 1 mark in board exams.'
        },
        {
          level: 'standard',
          title: 'Explaining Composite Nature',
          question: 'Explain why (7 * 11 * 13 + 13) and (7 * 6 * 5 * 4 * 3 * 2 * 1 + 5) are composite numbers.',
          given: 'Expressions with sums of products.',
          toFind: 'Proof that both numbers are composite.',
          methodSelectionReason: 'A composite number has at least one factor other than 1 and itself. Factor out the common term.',
          stepByStepSolution: [
            'Expression 1: 7 * 11 * 13 + 13 = 13 * (7 * 11 + 1) = 13 * (77 + 1) = 13 * 78 = 13 * 13 * 6 = 2 * 3 * 13^2.',
            'Since it has factors 2, 3, and 13 (more than two factors), it is composite.',
            'Expression 2: 7 * 6 * 5 * 4 * 3 * 2 * 1 + 5 = 5 * (7 * 6 * 4 * 3 * 2 * 1 + 1) = 5 * (1008 + 1) = 5 * 1009.',
            'Both 5 and 1009 are factors other than 1 and the number itself. Hence, it is composite.'
          ],
          finalAnswer: 'Both numbers have prime factors other than 1 and themselves, hence composite.',
          verificationCheck: 'Ensure the distributive law is correctly applied when taking out the common factor.',
          commonTrap: 'Multiplying out the giant number directly and dividing by trial instead of factoring out 13 or 5.'
        }
      ],
      commonMisconceptions: ['Thinking 1 is a prime number (1 is neither prime nor composite).', 'Assuming a number ending in 6 will eventually produce a 0 at large powers.'],
      priority: 'Must Master',
      cbseFrequency: 'Appears in 85% of CBSE papers as a 1 or 2-mark question.',
      sourceTrace: 'NCERT Chapter 1 Section 1.2, RD Sharma Chapter 1 Ex 1.2'
    },
    {
      id: 'ch1_c2',
      title: 'HCF and LCM Properties & Word Problem Applications',
      topic: 'HCF & LCM',
      simpleExplanation: 'HCF is the largest common divisor (use smallest powers of shared primes). LCM is the smallest common multiple (use highest powers of all primes).',
      exactMathIdea: 'For two positive integers a and b: HCF(a, b) = product of smallest powers of common prime factors; LCM(a, b) = product of highest powers of all prime factors. Formula: HCF(a, b) * LCM(a, b) = a * b.',
      formulaOrTheorem: '\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b',
      whenToUse: 'When given one number, HCF, and LCM to find the other number, or in word problems about tiling, packing, bells tolling, or circular race tracks.',
      recognitionClues: ['Find largest/maximum capacity/length', 'Find minimum time/distance/tolls together', 'HCF(a, b) = 12, LCM(a, b) = 360, a = 36, find b'],
      workedExamples: [
        {
          level: 'standard',
          title: 'Word Problem: Simultaneous Recurrence (LCM)',
          question: 'Three bells toll at intervals of 9, 12, 15 minutes respectively. If they start tolling together, after what time will they next toll together?',
          given: 'Intervals: 9 min, 12 min, 15 min. Starting simultaneously.',
          toFind: 'Time elapsed before the next simultaneous toll.',
          methodSelectionReason: 'Simultaneous events repeat at the lowest common multiple of their individual intervals.',
          stepByStepSolution: [
            'Find prime factorisations: 9 = 3^2, 12 = 2^2 * 3, 15 = 3 * 5.',
            'LCM is the product of the highest power of all prime factors involved: 2^2 * 3^2 * 5.',
            'LCM = 4 * 9 * 5 = 180 minutes.',
            'Convert to hours if needed: 180 minutes = 3 hours.'
          ],
          finalAnswer: 'They will toll together next after 180 minutes (3 hours).',
          verificationCheck: '180 / 9 = 20, 180 / 12 = 15, 180 / 15 = 12 (all integers).',
          commonTrap: 'Calculating HCF instead of LCM because of the word "together".'
        },
        {
          level: 'application',
          title: 'Equal Stack Partition (HCF)',
          question: 'A sweetseller has 420 kaju barfis and 130 badam barfis. She wants to stack them in such a way that each stack has the same number, and they take up the least area of the tray. What is the maximum number of barfis that can be placed in each stack?',
          given: '420 kaju barfis, 130 badam barfis.',
          toFind: 'Number of barfis in each stack for least tray area.',
          methodSelectionReason: 'To minimize tray area, the number of barfis in each stack must be maximized and must divide both 420 and 130 evenly -> HCF.',
          stepByStepSolution: [
            'Find prime factors of 420: 420 = 2^2 * 3 * 5 * 7.',
            'Find prime factors of 130: 130 = 2 * 5 * 13.',
            'Common prime factors with smallest powers: 2^1 * 5^1 = 10.',
            'Therefore, HCF(420, 130) = 10.',
            'Thus, 10 barfis can be placed in each stack.'
          ],
          finalAnswer: 'Maximum number of barfis per stack is 10.',
          verificationCheck: '420 / 10 = 42 stacks; 130 / 10 = 13 stacks (total 55 stacks).',
          commonTrap: 'Calculating total barfis (420 + 130 = 550) and dividing by an arbitrary number.'
        }
      ],
      commonMisconceptions: ['Believing HCF can be greater than any of the given numbers (HCF is always <= min(a, b)).', 'Assuming LCM can be smaller than any of the numbers (LCM is always >= max(a, b)).'],
      priority: 'Must Master',
      cbseFrequency: 'Guaranteed 2 or 3 marks in board examinations.',
      sourceTrace: 'NCERT Ex 1.2 Q7, RD Sharma Ch 1 Examples 8-12'
    },
    {
      id: 'ch1_c3',
      title: 'Irrationality Proofs (Contradiction Method)',
      topic: 'Irrational Numbers',
      simpleExplanation: 'Assume the opposite (that the number is rational), show that this assumption leads to an impossible contradiction (like a common factor in coprime numbers), and conclude the number must be irrational.',
      exactMathIdea: 'Let p be a prime number. If p divides a^2, then p divides a, where a is a positive integer. Using this theorem, if sqrt(p) = a/b (where a, b are coprime integers, b != 0), we deduce that p divides both a and b, contradicting that a and b are coprime.',
      formulaOrTheorem: 'p \\mid a^2 \\implies p \\mid a \\quad (p \\text{ is prime})',
      whenToUse: 'When asked to prove sqrt(2), sqrt(3), sqrt(5) or composite forms like 2 + 3sqrt(5) is irrational.',
      recognitionClues: ['Prove that \\sqrt{5} is irrational', 'Show that 5 - 2\\sqrt{3} is an irrational number'],
      workedExamples: [
        {
          level: 'standard',
          title: 'Formal Proof: sqrt(5) is Irrational',
          question: 'Prove that sqrt(5) is an irrational number.',
          given: 'Number sqrt(5).',
          toFind: 'Rigorous proof of irrationality.',
          methodSelectionReason: 'Proof by contradiction using Euclid / Fundamental Theorem divisibility lemma.',
          stepByStepSolution: [
            'Assume to the contrary that sqrt(5) is rational.',
            'Then sqrt(5) = a / b, where a and b are coprime integers (HCF(a, b) = 1) and b != 0.',
            'Squaring both sides: 5 = a^2 / b^2  =>  a^2 = 5b^2  --- (Equation 1).',
            'This implies 5 divides a^2. By theorem, since 5 is a prime, 5 divides a.',
            'So we can write a = 5c for some integer c.',
            'Substitute a = 5c into Equation 1: (5c)^2 = 5b^2  =>  25c^2 = 5b^2  =>  b^2 = 5c^2.',
            'This implies 5 divides b^2. Therefore, 5 divides b.',
            'Hence, 5 is a common factor of both a and b.',
            'This contradicts our initial statement that a and b are coprime (having no common factor other than 1).',
            'This contradiction arose because of our incorrect assumption that sqrt(5) is rational. Therefore, sqrt(5) is irrational.'
          ],
          finalAnswer: 'Hence proved: sqrt(5) is irrational.',
          verificationCheck: 'Ensure both steps (5 divides a, 5 divides b) are stated explicitly with justification.',
          commonTrap: 'Forgetting to specify that a and b are COPRIME (HCF = 1). Omitting this loses 1 mark in CBSE.'
        },
        {
          level: 'application',
          title: 'Linear Combination Irrationality',
          question: 'Given that sqrt(3) is irrational, prove that (5 + 2sqrt(3)) is irrational.',
          given: 'sqrt(3) is irrational.',
          toFind: 'Proof that 5 + 2sqrt(3) is irrational.',
          methodSelectionReason: 'Rearrange algebraically to isolate sqrt(3) as a fraction of integers.',
          stepByStepSolution: [
            'Assume to the contrary that 5 + 2sqrt(3) is rational.',
            'Let 5 + 2sqrt(3) = p / q, where p, q are integers and q != 0.',
            'Rearranging: 2sqrt(3) = (p / q) - 5 = (p - 5q) / q.',
            'sqrt(3) = (p - 5q) / (2q).',
            'Since p and q are integers, (p - 5q) and 2q are also integers with 2q != 0.',
            'Therefore, (p - 5q) / (2q) is a rational number.',
            'This means sqrt(3) is rational, which contradicts the given fact that sqrt(3) is irrational.',
            'Hence, our assumption was false. Thus, (5 + 2sqrt(3)) is irrational.'
          ],
          finalAnswer: 'Hence proved: 5 + 2sqrt(3) is irrational.',
          verificationCheck: 'Notice we DO NOT need to prove sqrt(3) from scratch because the question explicitly gave "Given that sqrt(3) is irrational".',
          commonTrap: 'Wasting 10 minutes re-proving sqrt(3) from scratch when the prompt states "given that sqrt(3) is irrational".'
        }
      ],
      commonMisconceptions: ['Thinking that irrational + rational can sometimes be rational (it is always irrational).'],
      priority: 'Must Master',
      cbseFrequency: 'Appears in 100% of CBSE board papers in Section C (3 Marks).',
      sourceTrace: 'NCERT Theorem 1.3, 1.4, PYQ Granth 2016-2024'
    }
  ],
  formulas: [
    {
      id: 'ch1_f1',
      name: 'Product of Two Numbers and HCF-LCM Relation',
      formula: '\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b',
      symbolMeanings: [
        { symbol: 'a, b', meaning: 'Two positive integers' },
        { symbol: 'HCF(a, b)', meaning: 'Highest common factor of a and b' },
        { symbol: 'LCM(a, b)', meaning: 'Lowest common multiple of a and b' }
      ],
      whenToUse: 'When three of the four quantities (a, b, HCF, LCM) are known and the fourth must be calculated.',
      conditions: ['Applies ONLY to exactly two numbers. NEVER use for 3 numbers.'],
      commonSubstitutions: ['b = (HCF * LCM) / a', 'LCM = (a * b) / HCF'],
      miniExample: {
        question: 'If HCF(306, 657) = 9, find LCM(306, 657).',
        substitution: 'LCM = (306 * 657) / 9 = 34 * 657',
        result: '22338'
      },
      commonMistakes: [
        'Attempting to use HCF(a,b,c) * LCM(a,b,c) = a * b * c.',
        'Arithmetic error in long multiplication instead of cancelling with HCF first.'
      ],
      memoryTrick: 'Product of Extremes = Product of Means (Numbers = HCF * LCM)',
      sourceTrace: 'NCERT Class 10 Ch 1 Eq 1.1'
    },
    {
      id: 'ch1_f2',
      name: 'Exponents of 2 and 5 for Terminating Decimals',
      formula: 'q = 2^m \\times 5^n \\quad (m, n \\in \\mathbb{W})',
      symbolMeanings: [
        { symbol: 'q', meaning: 'Denominator of rational number p/q in simplest form (coprime p, q)' },
        { symbol: 'm, n', meaning: 'Non-negative integers (0, 1, 2...)' }
      ],
      whenToUse: 'To check without actual division if a fraction terminates, and after how many decimal places it terminates.',
      conditions: ['p and q MUST be in simplest form (cancel all common factors first).'],
      commonSubstitutions: ['Number of decimal places = max(m, n)'],
      miniExample: {
        question: 'After how many decimal places does 13 / (2^3 * 5^2) terminate?',
        substitution: 'max(3, 2) = 3',
        result: 'Terminates after 3 decimal places.'
      },
      commonMistakes: [
        'Checking the denominator before cancelling factors with numerator (e.g. 6/15: 15 = 3*5, but 6/15 = 2/5 which terminates!).'
      ],
      sourceTrace: 'NCERT Ch 1 Theorem 1.5, 1.6'
    }
  ],
  methodGuides: [
    {
      id: 'ch1_m1',
      questionPattern: 'HCF vs LCM in Real-World Word Problems',
      recognitionClues: [
        'Keywords for HCF: "maximum capacity", "largest possible size", "equal lengths without remainder", "divided into equal stacks/rows"',
        'Keywords for LCM: "minimum distance", "toll/ring together", "meet again at the starting point", "simultaneous recurrence"'
      ],
      requiredConcept: 'Divisibility & Common Multiples',
      whatIsGiven: 'Two or more quantities that must be either divided equally or synchronized.',
      whatMustBeFound: 'The maximum unit size (HCF) or the next synchronized time/distance (LCM).',
      chosenMethod: 'Prime factorisation into powers -> take min powers for HCF, max powers for LCM.',
      executionSteps: [
        'Step 1: Identify if the answer must be smaller than the given numbers (HCF) or larger than the given numbers (LCM).',
        'Step 2: Express each number as a product of prime factors.',
        'Step 3: If HCF, select common primes with smallest exponent and multiply.',
        'Step 4: If LCM, select all distinct primes with largest exponent and multiply.',
        'Step 5: Write the final answer with appropriate units (minutes, cm, litres, etc.).'
      ],
      verificationMethod: 'For HCF: Check that the answer divides all original numbers evenly. For LCM: Check that all original numbers divide the answer evenly.',
      commonTrap: 'Selecting LCM when the question asks for "maximum number of stacks" (stacks = total / HCF size).',
      exemplarQuestion: 'Two runners run around a circular track. A takes 18 minutes, B takes 12 minutes. If they start at the same time and point, after how many minutes will they meet again at the starting point?',
      exemplarAnswer: 'LCM(18, 12): 18 = 2 * 3^2, 12 = 2^2 * 3. LCM = 2^2 * 3^2 = 36 minutes.'
    },
    {
      id: 'ch1_m2',
      questionPattern: 'Irrationality of a + b*sqrt(p) Given sqrt(p) is Irrational',
      recognitionClues: ['Contains words "Given that sqrt(p) is irrational", prove that...'],
      requiredConcept: 'Closure properties of rational numbers under addition and division.',
      whatIsGiven: 'A linear combination like 3 + 2sqrt(5) and the premise that sqrt(5) is irrational.',
      whatMustBeFound: 'Contradiction showing the combination cannot be rational.',
      chosenMethod: 'Algebraic isolation of the root term.',
      executionSteps: [
        'Step 1: Assume 3 + 2sqrt(5) = a/b where a, b are integers and b != 0.',
        'Step 2: Isolate sqrt(5): 2sqrt(5) = (a/b) - 3 = (a - 3b)/b.',
        'Step 3: sqrt(5) = (a - 3b) / (2b).',
        'Step 4: Argue: Since a and b are integers, (a - 3b)/(2b) is rational.',
        'Step 5: Conclude: This implies sqrt(5) is rational, contradicting the given fact that sqrt(5) is irrational. Hence original number is irrational.'
      ],
      verificationMethod: 'Ensure the right-hand side has no roots left and denominator is non-zero.',
      commonTrap: 'Squaring both sides and introducing 4-degree equations. Keep it linear and isolate the radical directly!',
      exemplarQuestion: 'Prove that 7 - 2sqrt(3) is irrational, given sqrt(3) is irrational.',
      exemplarAnswer: 'Assume 7 - 2sqrt(3) = p/q. Then sqrt(3) = (7q - p)/(2q). RHS is rational, which contradicts that sqrt(3) is irrational.'
    }
  ],
  gradedQuestions: [
    {
      id: 'ch1_q1',
      chapterId: 1,
      topic: 'Prime Factorisation',
      level: 1,
      levelLabel: 'Level 1 — Foundation',
      question: 'The exponent of 2 in the prime factorisation of 144 is:',
      options: ['2', '4', '3', '6'],
      correctAnswer: '4',
      marks: 1,
      hints: ['Divide 144 by 2 repeatedly until an odd number remains.'],
      solutionSteps: [
        '144 / 2 = 72',
        '72 / 2 = 36',
        '36 / 2 = 18',
        '18 / 2 = 9',
        '9 = 3^2',
        '144 = 2^4 * 3^2. Hence the exponent of 2 is 4.'
      ],
      commonTrap: 'Giving the prime factor (2) instead of the exponent (4).',
      isOriginalPractice: true,
      sourcePdfRef: 'Textbook Ch 1 Section 1.2',
      conceptId: 'ch1_c1'
    },
    {
      id: 'ch1_q2',
      chapterId: 1,
      topic: 'HCF and LCM Relation',
      level: 2,
      levelLabel: 'Level 2 — Standard',
      question: 'If HCF(a, b) = 12 and a * b = 1800, then find LCM(a, b).',
      options: ['150', '180', '120', '300'],
      correctAnswer: '150',
      marks: 1,
      hints: ['Use the formula HCF * LCM = a * b.'],
      solutionSteps: [
        'We know that HCF(a, b) * LCM(a, b) = a * b.',
        '12 * LCM(a, b) = 1800',
        'LCM(a, b) = 1800 / 12 = 150.'
      ],
      commonTrap: 'Multiplying 1800 by 12 instead of dividing.',
      isOriginalPractice: true,
      sourcePdfRef: 'Practice - Exercise & Solutions.pdf',
      conceptId: 'ch1_c2'
    },
    {
      id: 'ch1_q3',
      chapterId: 1,
      topic: 'HCF Word Problem',
      level: 3,
      levelLabel: 'Level 3 — Application',
      question: 'Two tankers contain 850 litres and 680 litres of petrol respectively. Find the maximum capacity of a container which can measure the petrol of either tanker in exact number of times.',
      options: ['170 litres', '85 litres', '340 litres', '17 litres'],
      correctAnswer: '170 litres',
      marks: 2,
      hints: ['Maximum measuring container capacity requires finding the HCF of 850 and 680.'],
      solutionSteps: [
        '850 = 2 * 5^2 * 17',
        '680 = 2^3 * 5 * 17',
        'HCF(850, 680) = 2^1 * 5^1 * 17^1 = 170 litres.',
        'The container of maximum capacity is 170 litres.'
      ],
      commonTrap: 'Finding the difference between 850 and 680 without prime factorisation verification.',
      isOriginalPractice: true,
      sourcePdfRef: 'NCERT Ch 1 Ex 1.2 Q6 / Support Material',
      conceptId: 'ch1_c2'
    },
    {
      id: 'ch1_q4',
      chapterId: 1,
      topic: 'Irrationality Proof',
      level: 4,
      levelLabel: 'Level 4 — Advanced',
      question: 'If p is a prime number, prove that sqrt(p) is irrational. Hence show that 3 + 2sqrt(p) is also irrational.',
      correctAnswer: 'Proof by contradiction: p divides a^2 implies p divides a. Linear combination follows.',
      marks: 3,
      hints: ['Assume sqrt(p) = a/b where HCF(a,b)=1. Square both sides to show p divides both a and b.'],
      solutionSteps: [
        'Let sqrt(p) = a/b where a, b are coprime integers and b != 0.',
        'p = a^2 / b^2 => a^2 = p * b^2 => p divides a^2 => p divides a.',
        'Let a = p*k. Then (pk)^2 = p*b^2 => p^2 * k^2 = p*b^2 => b^2 = p*k^2 => p divides b^2 => p divides b.',
        'Hence p is a common factor of both a and b, contradicting that HCF(a, b) = 1. Thus sqrt(p) is irrational.',
        'For 3 + 2sqrt(p): Let 3 + 2sqrt(p) = r (rational). Then sqrt(p) = (r - 3)/2. Since r is rational, (r - 3)/2 is rational, contradicting irrationality of sqrt(p).'
      ],
      commonTrap: 'Not showing both parts of the question (general prime p and the linear combination).',
      isOriginalPractice: true,
      sourcePdfRef: 'PYQ Granth 2020 Standard',
      conceptId: 'ch1_c3'
    },
    {
      id: 'ch1_q5',
      chapterId: 1,
      topic: 'Number Theory Challenge',
      level: 5,
      levelLabel: 'Level 5 — Challenge',
      question: 'Find the smallest positive integer n such that n! is divisible by 990.',
      options: ['11', '10', '9', '15'],
      correctAnswer: '11',
      marks: 3,
      hints: ['Prime factorise 990: 990 = 2 * 3^2 * 5 * 11. What is the largest prime factor required?'],
      solutionSteps: [
        'Prime factorise 990: 990 = 10 * 99 = (2 * 5) * (9 * 11) = 2 * 3^2 * 5 * 11.',
        'For n! to be divisible by 990, n! must contain the prime factor 11.',
        'Since 11 is prime, 11 cannot be formed as a product of smaller integers.',
        'The smallest factorial containing 11 as a factor is 11!.',
        'Check if 11! also contains 2, 3^2, and 5: In 11!, multiples of 3 are 3, 6, 9 (total powers of 3 is 1+1+2 = 4 >= 2). Factor 5 is present (5, 10). Factor 2 is abundant.',
        'Therefore, the smallest such integer is n = 11.'
      ],
      commonTrap: 'Guessing 9 or 10 without noticing the prime factor 11.',
      isOriginalPractice: true,
      sourcePdfRef: 'Oswaal QCB / RD Sharma Higher Order Thinking',
      conceptId: 'ch1_c1'
    }
  ],
  pyqs: [
    {
      id: 'ch1_pyq_2024',
      year: 'CBSE 2024 Standard',
      marks: 3,
      topic: 'Irrational Numbers',
      conceptTested: 'Contradiction Proof of Irrationality',
      question: 'Prove that sqrt(3) is an irrational number.',
      markingSchemeBreakdown: [
        { step: 'Assumption of rationality and stating a, b are coprime with b != 0', marks: 0.5 },
        { step: 'Squaring to obtain a^2 = 3b^2 and deduction that 3 divides a', marks: 1.0 },
        { step: 'Substituting a = 3c to show b^2 = 3c^2 and deduction that 3 divides b', marks: 1.0 },
        { step: 'Stating contradiction of coprimality and final conclusion', marks: 0.5 }
      ],
      fullSolution: 'Assume sqrt(3) = a/b where a, b are coprime integers, b != 0. 3 = a^2/b^2 => a^2 = 3b^2. Hence 3 divides a^2 => 3 divides a. Let a = 3c. 9c^2 = 3b^2 => b^2 = 3c^2. Hence 3 divides b^2 => 3 divides b. 3 is a common factor of a and b, contradicting that they are coprime. Hence sqrt(3) is irrational.',
      commonMistake: 'Failing to state that 3 is a prime before applying the lemma "p divides a^2 implies p divides a".',
      frequencyTrend: 'Repeated in 2017, 2019, 2020, 2023, 2024.',
      source: 'CBSE Official Board Paper 2024 Set 30/1/1'
    },
    {
      id: 'ch1_pyq_2023',
      year: 'CBSE 2023 Standard',
      marks: 2,
      topic: 'HCF and LCM',
      conceptTested: 'Finding LCM and HCF by Prime Factorisation',
      question: 'Find the HCF and LCM of 72 and 120 using prime factorisation method.',
      markingSchemeBreakdown: [
        { step: 'Correct prime factorisation of 72 and 120', marks: 1.0 },
        { step: 'Correct calculation of HCF (24) and LCM (360)', marks: 1.0 }
      ],
      fullSolution: '72 = 2^3 * 3^2. 120 = 2^3 * 3 * 5. HCF = 2^3 * 3^1 = 24. LCM = 2^3 * 3^2 * 5 = 8 * 9 * 5 = 360.',
      commonMistake: 'Taking highest power for HCF and lowest for LCM (inverting the definitions).',
      frequencyTrend: 'Standard 2-mark question occurring every year.',
      source: 'CBSE Official Board Paper 2023'
    },
    {
      id: 'ch1_pyq_2020',
      year: 'CBSE 2020 Standard',
      marks: 1,
      topic: 'Fundamental Theorem of Arithmetic',
      conceptTested: 'HCF of powers',
      question: 'If two positive integers a and b are written as a = x^3 y^2 and b = x y^3, where x, y are prime numbers, then find HCF(a, b).',
      markingSchemeBreakdown: [
        { step: 'Selecting minimum powers of x and y: x^1 * y^2', marks: 1.0 }
      ],
      fullSolution: 'HCF is the product of the smallest powers of each common prime factor. Common primes are x and y. Smallest power of x is x^1; smallest power of y is y^2. Therefore, HCF(a, b) = x y^2.',
      commonMistake: 'Calculating LCM (x^3 y^3) instead of HCF.',
      frequencyTrend: 'Appeared in 2018, 2019, 2020, 2023 sample papers.',
      source: 'CBSE 2020 Standard Set 30/2/1'
    }
  ],
  commonMistakes: [
    {
      id: 'ch1_m_err1',
      title: 'Applying HCF * LCM = a * b * c for Three Numbers',
      mistakeCategory: 'Formula & Substitution',
      flawedWorking: 'Given a=6, b=8, c=12. Student writes: LCM(6, 8, 12) = (6 * 8 * 12) / HCF(6, 8, 12).',
      whyItIsWrong: 'The product formula HCF * LCM = Product of numbers is mathematically valid ONLY for exactly two numbers.',
      correctWorking: 'Use prime factorisations: 6 = 2*3, 8 = 2^3, 12 = 2^2*3. HCF = 2^1 = 2. LCM = 2^3 * 3 = 24. Notice 2 * 24 = 48 != 6 * 8 * 12 (576)!',
      howToAvoid: 'Never use the product formula for 3 numbers. Always use individual prime factor powers.',
      retryQuestion: {
        question: 'Find HCF and LCM of 12, 15, and 21 using prime factorisation.',
        correctAnswer: 'HCF = 3, LCM = 420',
        explanation: '12 = 2^2*3, 15 = 3*5, 21 = 3*7. Common factor is 3. LCM = 2^2 * 3 * 5 * 7 = 420.'
      }
    },
    {
      id: 'ch1_m_err2',
      title: 'Forgetting "Coprime" Condition in Contradiction Proofs',
      mistakeCategory: 'Incomplete Proof/Justification',
      flawedWorking: 'Writing "Let sqrt(2) = a/b where b != 0" without mentioning HCF(a, b) = 1.',
      whyItIsWrong: 'If a and b are not assumed coprime, showing they have a common factor of 2 does not contradict anything!',
      correctWorking: 'Always explicitly state: "where a and b are coprime integers (HCF(a, b) = 1) and b != 0".',
      howToAvoid: 'Memorize the prerequisite clause: "where a and b are coprime integers and b != 0".',
      retryQuestion: {
        question: 'In the proof of irrationality of sqrt(7), what assumption creates the final contradiction?',
        correctAnswer: 'That a and b are coprime (have no common factor other than 1).',
        explanation: 'Showing that 7 divides both a and b directly contradicts the premise that HCF(a, b) = 1.'
      }
    }
  ],
  revisionSheet: {
    mustRememberPoints: [
      'Fundamental Theorem of Arithmetic: Every composite number can be uniquely factored into primes.',
      'HCF(a, b) = product of smallest powers of common primes.',
      'LCM(a, b) = product of greatest powers of all primes involved.',
      'HCF(a, b) * LCM(a, b) = a * b (Only for 2 numbers!).',
      'HCF is always a divisor of LCM.',
      'A prime p dividing a^2 implies p divides a.',
      'Rational + Irrational = Irrational; Rational * Irrational = Irrational (for non-zero rational).'
    ],
    speedTips: [
      'To find LCM fast: Take the larger number and check its multiples until all other numbers divide it.',
      'In MCQs asking for HCF of x^p y^q and x^r y^s: Pick the smaller exponent for each variable.',
      'When simplifying (a * b) / HCF, always cancel HCF with one number before multiplying.'
    ],
    lastDayChecklist: [
      'Can you write the full 10-line proof of sqrt(5) is irrational without peeking?',
      'Do you remember that 4^n cannot end with 0 because its prime factors are only 2?',
      'Do you know how to identify whether a word problem needs HCF or LCM in 5 seconds?'
    ]
  },
  tests: [
    {
      testType: 'Diagnostic',
      durationMinutes: 15,
      totalMarks: 10,
      questions: [
        {
          id: 'ch1_diag_1',
          chapterId: 1,
          topic: 'Divisibility',
          level: 1,
          levelLabel: 'Level 1 — Foundation',
          question: 'If HCF(26, 169) = 13, then LCM(26, 169) is:',
          options: ['338', '52', '26', '13'],
          correctAnswer: '338',
          marks: 1,
          hints: ['LCM = (26 * 169) / 13'],
          solutionSteps: ['LCM = (26 * 169) / 13 = 2 * 169 = 338.'],
          commonTrap: 'Calculating long product 26 * 169 first.',
          isOriginalPractice: true,
          sourcePdfRef: 'Diagnostic 1',
          conceptId: 'ch1_c2'
        },
        {
          id: 'ch1_diag_2',
          chapterId: 1,
          topic: 'Prime Factorisation',
          level: 2,
          levelLabel: 'Level 2 — Standard',
          question: 'Express 3825 as a product of prime factors.',
          options: ['3^2 * 5^2 * 17', '3 * 5^2 * 17', '3^3 * 5 * 17', '5^3 * 3 * 17'],
          correctAnswer: '3^2 * 5^2 * 17',
          marks: 1,
          hints: ['Sum of digits: 3+8+2+5 = 18 (divisible by 9 = 3^2).'],
          solutionSteps: ['3825 / 9 = 425; 425 / 25 = 17. Hence 3^2 * 5^2 * 17.'],
          commonTrap: 'Dividing by 5 first and missing one factor of 3.',
          isOriginalPractice: true,
          sourcePdfRef: 'Diagnostic 2',
          conceptId: 'ch1_c1'
        }
      ]
    },
    {
      testType: 'Chapter Test',
      durationMinutes: 45,
      totalMarks: 25,
      questions: [
        {
          id: 'ch1_ct_1',
          chapterId: 1,
          topic: 'Irrational Numbers',
          level: 3,
          levelLabel: 'Level 3 — Application',
          question: 'Prove that 2 + 5sqrt(3) is an irrational number, given that sqrt(3) is irrational.',
          correctAnswer: 'Contradiction proof showing sqrt(3) = (p - 2q)/(5q) which is rational.',
          marks: 3,
          hints: ['Isolate sqrt(3) on one side of the equation.'],
          solutionSteps: [
            'Let 2 + 5sqrt(3) = p/q where p, q are integers, q != 0.',
            '5sqrt(3) = (p - 2q)/q => sqrt(3) = (p - 2q)/(5q).',
            'Since p, q are integers, RHS is rational, which contradicts that sqrt(3) is irrational.',
            'Hence 2 + 5sqrt(3) is irrational.'
          ],
          commonTrap: 'Squaring the equation instead of simple rearrangement.',
          isOriginalPractice: true,
          sourcePdfRef: 'Chapter Test 1',
          conceptId: 'ch1_c3'
        }
      ]
    },
    {
      testType: 'Advanced Test',
      durationMinutes: 45,
      totalMarks: 25,
      questions: [
        {
          id: 'ch1_adv_1',
          chapterId: 1,
          topic: 'Number Theory',
          level: 4,
          levelLabel: 'Level 4 — Advanced',
          question: 'Can two numbers have 16 as their HCF and 380 as their LCM? Give reason.',
          options: ['No, because HCF must completely divide LCM', 'Yes, because both are even numbers', 'Yes, because 380 is a multiple of 10', 'Cannot be determined'],
          correctAnswer: 'No, because HCF must completely divide LCM',
          marks: 2,
          hints: ['Divide 380 by 16 and check for remainder.'],
          solutionSteps: [
            'For any two numbers, HCF is always a factor of LCM.',
            'Dividing 380 by 16: 380 / 16 = 23.75 (remainder 12 != 0).',
            'Since 16 does not divide 380 completely, two numbers cannot have HCF 16 and LCM 380.'
          ],
          commonTrap: 'Assuming yes because both numbers end in even digits.',
          isOriginalPractice: true,
          sourcePdfRef: 'Advanced Test 1',
          conceptId: 'ch1_c2'
        }
      ]
    },
    {
      testType: 'Mastery Test',
      durationMinutes: 60,
      totalMarks: 35,
      questions: [
        {
          id: 'ch1_mst_1',
          chapterId: 1,
          topic: 'Mixed Real Numbers Mastery',
          level: 5,
          levelLabel: 'Level 5 — Challenge',
          question: 'Find the largest number which divides 70 and 125, leaving remainders 5 and 8 respectively.',
          options: ['13', '65', '9', '15'],
          correctAnswer: '13',
          marks: 3,
          hints: ['Subtract the remainders first: (70 - 5) and (125 - 8), then find their HCF.'],
          solutionSteps: [
            'Required number divides (70 - 5) = 65 and (125 - 8) = 117 exactly.',
            '65 = 5 * 13',
            '117 = 3^2 * 13',
            'HCF(65, 117) = 13.',
            'Therefore, the largest number is 13.'
          ],
          commonTrap: 'Finding HCF of 70 and 125 first and then subtracting remainders.',
          isOriginalPractice: true,
          sourcePdfRef: 'Mastery Test 1',
          conceptId: 'ch1_c2'
        }
      ]
    }
  ]
};
