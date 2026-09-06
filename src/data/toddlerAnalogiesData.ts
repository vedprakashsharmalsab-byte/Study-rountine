// =========================================================================
// CBSE CLASS 10 — TODDLER ANALOGIES & VISUAL STORY ENGINE
// Unforgettable ELI5 (Explain Like I'm 5) real-world mental models,
// 4-scene storyboards (no boring paragraphs), and truth-or-trap micro-quizzes.
// =========================================================================

export interface ToddlerConceptGuide {
  id: string;
  topicTitle: string;
  discipline: string;
  chapterNo: number;
  // 1. The Toddler Story (ELI5)
  toddlerAnalogy: {
    hook: string;
    scenario: string;
    moralOrAha: string;
    characters: { name: string; role: string; emoji: string }[];
  };
  // 2. The 4-Scene Graphic Storyboard (Replaces boring paragraph)
  storyScenes: {
    sceneNo: number;
    actTitle: string;
    badge: string;
    emoji: string;
    accentColor: string;
    headline: string;
    narrative: string;
    boardKeyword: string;
  }[];
  // 3. Truth or Examiner Trap? (Interactive Micro-Quiz)
  truthOrTrap: {
    question: string;
    trapStatement: string;
    isTruth: boolean;
    revealExplanation: string;
    examinerTip: string;
  };
}

export const TODDLER_CONCEPT_CATALOG: Record<string, ToddlerConceptGuide> = {
  // -------------------------------------------------------------------------
  // HISTORY CH 1: THE RISE OF NATIONALISM IN EUROPE
  // -------------------------------------------------------------------------
  "sst_his_c1_t1": {
    id: "sst_his_c1_t1",
    topicTitle: "1.1 Frédéric Sorrieu's Utopian Vision & French Revolution Foundations",
    discipline: "History",
    chapterNo: 1,
    toddlerAnalogy: {
      hook: "The Ultimate Dream Playground Where Everyone Is Friends",
      scenario: "Imagine drawing your dream birthday party where all the kids from rival schools—who used to throw mud at each other—are now holding hands in a giant colorful parade. They march past a friendly, glowing Statue of Liberty, while broken crown hats, golden thrones, and rusty chains lie smashed on the ground like discarded old junk. In 1848, French artist Frédéric Sorrieu drew that exact dream! Real Europe was full of angry kings, but Sorrieu imagined a world where countries were democratic brothers.",
      moralOrAha: "A nation isn't just land; it's people choosing to walk together towards freedom under one flag!",
      characters: [
        { name: "Frédéric Sorrieu", role: "The Visionary Painter", emoji: "🎨" },
        { name: "Statue of Liberty", role: "Holding the Torch of Reason & Charter of Rights", emoji: "🗽" },
        { name: "The Common People", role: "Men & women of all ages & social classes in national costume", emoji: "🚶‍♂️" },
        { name: "Shattered Crowns", role: "Monarchical tyranny lying destroyed in the foreground", emoji: "👑💥" }
      ]
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: The Dream on Canvas",
        badge: "The Utopian Print",
        emoji: "🖼️",
        accentColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        headline: "Sorrieu Paints the Dream of Democratic Republics",
        narrative: "In 1848, French printmaker Frédéric Sorrieu prepared four famous prints visualizing a world made up of 'democratic and social Republics'. Peoples of Europe and America march in an endless procession offering homage to the Statue of Liberty.",
        boardKeyword: "Utopian Vision (A vision of society so ideal that it is unlikely to actually exist)"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: Leading the Parade",
        badge: "The Trailblazers",
        emoji: "🇺🇸",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "USA and Switzerland Cross the Finish Line",
        narrative: "Leading the procession past the statue are the United States and Switzerland, which were already established nation-states. France, identifiable by the revolutionary tricolour, has just reached the statue, closely followed by Germany with the black, red, and gold flag.",
        boardKeyword: "Nation-State (A state in which majority citizens develop a common identity and shared history)"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: French Revolution Formula",
        badge: "Collective Identity",
        emoji: "🇫🇷",
        accentColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        headline: "How France Invented Modern Nationalism",
        narrative: "The French Revolution (1789) transferred sovereignty from an absolute king to the citizens. To unite the people, revolutionaries introduced 'la patrie' (the fatherland), 'le citoyen' (the citizen), the tricolour flag, a National Assembly, uniform metric weights, and French as the common language.",
        boardKeyword: "La Patrie & Le Citoyen (Fatherland and Citizen under equal constitutional law)"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: Heaven's Blessing",
        badge: "Christ & Angels",
        emoji: "👼",
        accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        headline: "Fraternity Among All Nations",
        narrative: "From the heavens above, Christ, saints, and angels gaze upon the peaceful scene. Sorrieu used them as a deliberate symbol of 'fraternity' among the nations of the world, blessing their newfound equality.",
        boardKeyword: "Fraternity (Universal brotherhood replacing dynastic wars)"
      }
    ],
    truthOrTrap: {
      question: "Did Germany already exist as a unified country when Sorrieu drew its flag in 1848?",
      trapStatement: "Germany was already an established nation-state marching right behind France.",
      isTruth: false,
      revealExplanation: "TRAP! ❌ In 1848, the German nation did NOT exist yet! Germans were divided across 39 separate states. The black, red, and gold flag was an expression of liberal democratic hopes, not an existing country!",
      examinerTip: "Write: 'In 1848, the Germans did not yet exist as a united nation; the flag they carried was an expression of liberal hopes to unify numerous German-speaking principalities.'"
    }
  },

  "sst_his_c1_t2": {
    id: "sst_his_c1_t2",
    topicTitle: "1.2 Napoleonic Code (Civil Code of 1804) & Dual Reactions Across Europe",
    discipline: "History",
    chapterNo: 1,
    toddlerAnalogy: {
      hook: "The New Principal's Clean Rulebook That Turned Into a Nightmare",
      scenario: "Imagine your school has 100 messy, unfair rules. Rich kids don't study and still get 100% on report cards just because their parents donated golden chairs to the school. Napoleon bursts in like a strict new principal, rips up all the unfair passes, and makes ONE clean rulebook: 'Everyone writes the exact same test, no rich passes, and private lockers are protected!' Small shopkeepers and farmers cheered! But then... the new principal locked the front gates, banned student newspapers, doubled cafeteria lunch prices, and forced everyone's older brothers onto his wrestling team to conquer other schools. That's why people loved him on Monday and revolted on Friday!",
      moralOrAha: "People will happily welcome administrative efficiency, but they will violently revolt if you take away their freedom!",
      characters: [
        { name: "Napoleon Bonaparte", role: "Modernizer who restored monarchy but rationalized laws", emoji: "👑" },
        { name: "Peasants & Artisans", role: "Rejoiced in free trade and abolition of feudal serfdom", emoji: "🌾" },
        { name: "Conquered Europeans", role: "Welcomed French as 'Harbingers of Liberty' until taxes spiked", emoji: "⚔️" }
      ]
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: The 3 Golden Breakthroughs",
        badge: "Civil Code of 1804",
        emoji: "📜",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "Napoleon Rewrites European Law",
        narrative: "Although Napoleon destroyed democracy in France by crowning himself emperor, in administrative matters he introduced revolutionary rationality. The Civil Code of 1804 achieved 3 breakthroughs: (1) Abolished all privileges based on birth, (2) Established equality before the law, and (3) Secured property rights.",
        boardKeyword: "Civil Code of 1804 (Equality before law + Property rights + Privileges abolished)"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: Exporting the Revolution",
        badge: "Beyond France",
        emoji: "🌍",
        accentColor: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
        headline: "Dutch, Swiss, German, and Italian Territories Reformed",
        narrative: "Napoleon exported these reforms across Europe. He simplified administrative divisions, abolished the feudal system, freed peasants from serfdom and manorial dues, removed guild restrictions in towns, and unified transport and weights.",
        boardKeyword: "Abolition of Serfdom and Feudal Dues in conquered regions"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: The Honeymoon Ends",
        badge: "The Plot Twist",
        emoji: "💥",
        accentColor: "from-rose-500/20 to-amber-500/20 border-rose-500/30",
        headline: "From Harbingers of Liberty to Hated Conquerors",
        narrative: "In Brussels, Mainz, Milan, and Warsaw, people initially cheered French soldiers as 'harbingers of liberty'. But enthusiasm soon turned to bitter hostility as local people realized administrative reforms did NOT accompany political freedom.",
        boardKeyword: "Administrative Efficiency vs Political Disenfranchisement"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: The 3 Oppressive Measures",
        badge: "The Backfire",
        emoji: "🚨",
        accentColor: "from-red-500/20 to-rose-500/20 border-red-500/30",
        headline: "Taxes, Censorship, and Forced Conscription",
        narrative: "Napoleon imposed (1) severe press censorship, (2) drastic tax hikes to fund wars, and (3) forced military conscription of local youth into the French army. These oppressive burdens far outweighed any administrative benefits!",
        boardKeyword: "Forced Conscription + Steep Taxation + Censorship"
      }
    ],
    truthOrTrap: {
      question: "Did the Napoleonic Code grant women equal rights alongside men?",
      trapStatement: "Napoleon gave women full legal equality and the right to own independent property.",
      isTruth: false,
      revealExplanation: "BIG TRAP! ❌ The Civil Code of 1804 actually went backwards for women! It reduced women to the status of a 'minor', subject to the legal authority of their fathers and husbands. Women could not vote or manage property independently.",
      examinerTip: "Always mention this in 5-mark answers as a critical limitation to score the highest band!"
    }
  },

  // -------------------------------------------------------------------------
  // HISTORY CH 2: NATIONALISM IN INDIA
  // -------------------------------------------------------------------------
  "sst_his_c2_t1": {
    id: "sst_his_c2_t1",
    topicTitle: "2.1 The First World War, Khilafat, and Satyagraha Foundations",
    discipline: "History",
    chapterNo: 2,
    toddlerAnalogy: {
      hook: "The Magic Superhero Power of Non-Violence (Soul-Force)",
      scenario: "Imagine a big, angry school bully who is ten times stronger than you. If you pick up a stick to hit him, he'll beat you up twice as hard and the teacher will punish you both. Gandhiji said: 'Throw away the stick! Stand tall, look him straight in the eyes, smile with calm truth, and politely refuse to do what he commands.' When people refuse to obey without anger or fear, the bully gets completely confused because his fists can't punch truth! That was Satyagraha—soul force instead of fist force.",
      moralOrAha: "Truth doesn't need weapons to win; it only needs people brave enough not to bow down!",
      characters: [
        { name: "Mahatma Gandhi", role: "Returned from South Africa in Jan 1915 with Satyagraha", emoji: "🧘‍♂️" },
        { name: "Peasants of Champaran", role: "Struggling against oppressive indigo planters (1916/17)", emoji: "🌾" },
        { name: "Mill Workers of Ahmedabad", role: "Demanded 35% wage increase during plague crisis (1918)", emoji: "🏭" }
      ]
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: World War I Hardships",
        badge: "War Squeeze",
        emoji: "💣",
        accentColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        headline: "Customs Dues, Income Tax, and Forced Recruitment",
        narrative: "World War I (1914-1918) led to huge defense spending financed by war loans, introduction of income tax, and doubling of prices between 1913 and 1918. Rural anger erupted over 'forced recruitment' of village youth into the colonial army.",
        boardKeyword: "Economic Hardships of WWI (Price Doubling + Forced Conscription)"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: The Hero's Arrival",
        badge: "January 1915",
        emoji: "🚢",
        accentColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        headline: "Gandhiji Returns with Satyagraha",
        narrative: "Mahatma Gandhi returned to India in January 1915 after successfully fighting racist laws in South Africa with 'Satyagraha'—the principle that if the cause is true, physical force is not necessary to defeat the oppressor.",
        boardKeyword: "Satyagraha (Passive Resistance / Truth-Force without Physical Aggression)"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: The 3 Early Testing Labs",
        badge: "1917–1918",
        emoji: "🎯",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "Champaran, Kheda, and Ahmedabad Victories",
        narrative: "(1) Champaran (Bihar, 1917): Fought oppressive indigo plantation system. (2) Kheda (Gujarat, 1917): Demanded revenue remission due to crop failure and plague. (3) Ahmedabad (1918): Supported cotton mill workers for a 35% wage increase.",
        boardKeyword: "Local Satyagraha Laboratory (Champaran ➔ Kheda ➔ Ahmedabad)"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: The National Stage",
        badge: "All-India Launch",
        emoji: "🇮🇳",
        accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        headline: "Building the Foundation for Mass Struggle",
        narrative: "These three early experiments demonstrated that ordinary peasants and mill workers could peacefully stare down the British Empire. This gave Gandhiji the confidence to launch national movements against the Rowlatt Act.",
        boardKeyword: "Consolidation of Mass Grassroots Leadership"
      }
    ],
    truthOrTrap: {
      question: "Is Satyagraha the weapon of the weak because they don't have weapons?",
      trapStatement: "Satyagraha is called 'passive resistance' because Indians were too weak to fight with guns.",
      isTruth: false,
      revealExplanation: "CRITICAL TRAP! ❌ Gandhiji strongly declared that Satyagraha is NOT the weapon of the weak! Physical violence requires brute muscles, but Satyagraha requires immense spiritual courage and soul-force. It takes far more bravery to face bullets without hitting back than to shoot a gun!",
      examinerTip: "In CBSE board papers, quote Gandhiji: 'Satyagraha is pure soul-force. Truth is the very substance of the soul.'"
    }
  },

  "sst_his_c2_t2": {
    id: "sst_his_c2_t2",
    topicTitle: "2.2 The Rowlatt Act, Jallianwala Bagh Massacre, and Khilafat Unification",
    discipline: "History",
    chapterNo: 2,
    toddlerAnalogy: {
      hook: "The Trap Gate in the Garden and the Spark that Awoke a Nation",
      scenario: "Imagine a police rule so absurd that if a cop simply dislikes your hairstyle, he can lock you in a dark cell for 2 years with NO trial and NO lawyer! That was the Rowlatt Act. Then, imagine peaceful families—moms, dads, grandpas, and kids in their best clothes—gathered in a walled garden to celebrate spring Baisakhi. An army general marches in with soldiers, blocks the only tiny gate, and shoots peaceful people for ten horrifying minutes. The British thought this terror would make Indians surrender. Instead, it shocked the whole country awake and united Hindus and Muslims like brothers!",
      moralOrAha: "Cruelty and terror do not silence people forever; they unite them into an unstoppable force!",
      characters: [
        { name: "General Dyer", role: "British Commander who ordered firing to produce 'moral effect'", emoji: "💂" },
        { name: "Peaceful Crowd", role: "Families gathered on Baisakhi unaware of martial law", emoji: "👨‍👩‍👧‍👦" },
        { name: "Muhammad & Shaukat Ali", role: "Brothers who mobilized the Khilafat Movement", emoji: "🤝" }
      ]
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: The Black Act",
        badge: "March 1919",
        emoji: "📜",
        accentColor: "from-rose-500/20 to-red-500/20 border-rose-500/30",
        headline: "Rowlatt Act Passed Despite Indian Protests",
        narrative: "Passed hurriedly through the Imperial Legislative Council despite united Indian opposition. It gave the colonial government enormous powers to repress political activities and allowed detention of political prisoners without trial for two years.",
        boardKeyword: "Rowlatt Act (2 Years Detention Without Trial)"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: The Sacred Baisakhi Day",
        badge: "13 April 1919",
        emoji: "🌸",
        accentColor: "from-amber-500/20 to-yellow-500/20 border-amber-500/30",
        headline: "The Jallianwala Bagh Enclosure",
        narrative: "A large crowd gathered in the enclosed ground of Jallianwala Bagh in Amritsar. Some came to protest police firing on leaders (Dr. Saifuddin Kitchlew & Dr. Satyapal); many villagers had come simply to attend the annual Baisakhi fair, unaware martial law had been declared.",
        boardKeyword: "Jallianwala Bagh Enclosure + Baisakhi Gathering"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: The Unforgivable Butchery",
        badge: "Dyer's Order",
        emoji: "💔",
        accentColor: "from-red-500/20 to-rose-500/20 border-red-500/30",
        headline: "Firing on Unarmed Citizens",
        narrative: "General Dyer entered the area, blocked the narrow exit points, and opened fire on the trapped crowd without warning, killing hundreds. Dyer later stated his objective was 'to produce a moral effect of terror and awe'. Rabindranath Tagore renounced his British Knighthood in anguish.",
        boardKeyword: "'Moral Effect of Terror and Awe' + Tagore Renounces Knighthood"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: Hindu-Muslim Unity",
        badge: "Khilafat Alliance",
        emoji: "🤝",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "Uniting Khilafat with Swaraj at Nagpur",
        narrative: "To defend the Ottoman Caliph (Khalifa)'s temporal powers, the Ali brothers formed the Khilafat Committee in Bombay. Gandhiji recognized this as a once-in-a-century opportunity to bring Hindus and Muslims under the umbrella of a unified Non-Cooperation Movement.",
        boardKeyword: "Khilafat-Non-Cooperation Movement (Nagpur Congress 1920)"
      }
    ],
    truthOrTrap: {
      question: "Did the crowd at Jallianwala Bagh violate martial law deliberately to fight the army?",
      trapStatement: "All the people inside Jallianwala Bagh were armed militants defying General Dyer's curfew.",
      isTruth: false,
      revealExplanation: "FALSE! ❌ NCERT specifically notes: Being from outside the city, most villagers were completely UNAWARE of the martial law curfew that had been imposed. They had dressed in festive clothes to enjoy the annual Baisakhi festival fair.",
      examinerTip: "Mentioning that villagers were unaware of martial law shows deep NCERT command and earns full marks."
    }
  },

  // -------------------------------------------------------------------------
  // CIVICS CH 1: POWER SHARING
  // -------------------------------------------------------------------------
  "sst_pol_c1_t1": {
    id: "sst_pol_c1_t1",
    topicTitle: "1.1 Belgium's Accommodation vs Sri Lanka's Majoritarianism",
    discipline: "Political Science",
    chapterNo: 3,
    toddlerAnalogy: {
      hook: "Sharing the Xbox: The Smart Brothers vs The Greedy Bully",
      scenario: "Two brothers, Dutch and French, share one bedroom in Belgium. Instead of fighting over who gets the TV, their parents made a smart rule: 'Both brothers get equal hours, and neither can change the house rules without the other brother agreeing!' They even made a third room for their German cousin. Everyone was happy! But over in Sri Lanka, the bigger brother (Sinhala) pushed the smaller brother (Tamil) out into the hallway, locked the fridge, and took away all the toys. Result? A devastating fight that broke the whole house down!",
      moralOrAha: "Sharing power doesn't weaken a country—it makes it unbreakable!",
      characters: [
        { name: "Belgium Leaders", role: "Amended constitution 4 times (1970–1993) for peace", emoji: "🇧🇪" },
        { name: "Sri Lankan Majoritarians", role: "Passed 1956 Act making Sinhala the only official language", emoji: "🇱🇰" },
        { name: "Brussels Capital", role: "80% French, 20% Dutch, agreed on equal representation", emoji: "🏛️" }
      ]
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: The Ethnic Puzzle",
        badge: "Demographics",
        emoji: "🧩",
        accentColor: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
        headline: "Belgium's Delicate Balance",
        narrative: "In Belgium: 59% speak Dutch (Flemish region), 40% speak French (Wallonia), 1% speak German. In capital Brussels, the reverse: 80% French, 20% Dutch. The French minority was rich and powerful, causing severe tension in the 1950s-1960s.",
        boardKeyword: "Complex Ethnic Composition of Belgium (Flemish 59% Dutch vs Wallonia 40% French)"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: The Sri Lankan Catastrophe",
        badge: "Majoritarianism",
        emoji: "⚠️",
        accentColor: "from-rose-500/20 to-red-500/20 border-rose-500/30",
        headline: "1956 Act Alienates Sri Lankan Tamils",
        narrative: "Sri Lanka won independence in 1948. The Sinhala majority (74%) passed the 1956 Act recognizing Sinhala as the sole official language, gave preference to Sinhala applicants in universities and jobs, and made Buddhism the state religion. Sri Lankan Tamils felt alienated, leading to a brutal civil war.",
        boardKeyword: "Majoritarianism (1956 Act + Sinhala Supremacy + Tamil Alienation)"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: The Belgian Masterpiece",
        badge: "Accommodation",
        emoji: "🕊️",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "4 Constitutional Amendments (1970–1993)",
        narrative: "Belgium amended its constitution 4 times: (1) Equal number of Dutch and French ministers in central government, (2) State governments are NOT subordinate to central government, (3) Equal representation in Brussels, (4) A third 'Community Government' elected by people speaking one language.",
        boardKeyword: "Belgian Model of Accommodation (Equal Ministers + Community Government)"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: The European Verdict",
        badge: "Global Triumph",
        emoji: "🇪🇺",
        accentColor: "from-amber-500/20 to-yellow-500/20 border-amber-500/30",
        headline: "Brussels Chosen as Headquarters of the European Union",
        narrative: "Because Belgium solved its ethnic differences with such breathtaking fairness, when the countries of Europe came together to form the European Union, they proudly chose Brussels as their headquarters!",
        boardKeyword: "Prudential and Moral Reasons for Power Sharing"
      }
    ],
    truthOrTrap: {
      question: "Are state governments in Belgium subordinate to the Central Government?",
      trapStatement: "In Belgium, state governments must take permission from central government ministers.",
      isTruth: false,
      revealExplanation: "FALSE! ❌ In the Belgian model, state governments are completely INDEPENDENT and NOT subordinate to the central government. Many powers of the central government were permanently given to state governments.",
      examinerTip: "Memorize the 4 points of the Belgian model; this is a guaranteed 3-mark question in board exams!"
    }
  },

  // -------------------------------------------------------------------------
  // ECONOMICS CH 3: MONEY AND CREDIT
  // -------------------------------------------------------------------------
  "sst_eco_c3_t1": {
    id: "sst_eco_c3_t1",
    topicTitle: "3.1 Money as Medium of Exchange, Modern Currency & Two Credit Situations",
    discipline: "Economics",
    chapterNo: 10,
    toddlerAnalogy: {
      hook: "The Boy with 10 Apples Who Wanted New Shoes",
      scenario: "Long ago, if you had a basket of apples and needed new shoes, you had to find a shoemaker who had your exact shoe size AND coincidentally was craving apples right at that second! (Double Coincidence of Wants). If he wanted bananas instead, you walked barefoot! Modern currency solved that: a small paper note guaranteed by the Reserve Bank of India that EVERYONE agrees to accept. And credit? If a shoemaker takes a loan to buy leather and sells 500 shoes, he becomes rich (Salim's story). But if a farmer borrows from a greedy moneylender and locusts eat her crop, she loses her land and falls into a debt-trap (Swapna's story)!",
      moralOrAha: "Money makes trade easy; but credit without safety can turn into a trap!",
      characters: [
        { name: "Salim", role: "Shoemaker who took credit and successfully expanded profit", emoji: "👞" },
        { name: "Swapna", role: "Small farmer pushed into debt trap by moneylender after crop failure", emoji: "🌾" },
        { name: "Reserve Bank of India", role: "Supervises formal sector banks and issues currency", emoji: "🏦" }
      ]
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: The Barter Nightmare",
        badge: "Barter System",
        emoji: "🍎",
        accentColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        headline: "Double Coincidence of Wants",
        narrative: "In a barter system where goods are directly exchanged without the use of money, both parties have to agree to sell and buy each other's commodities. This requirement is known as the 'double coincidence of wants'.",
        boardKeyword: "Double Coincidence of Wants (Eliminated by Modern Money)"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: The Miracle of Paper Currency",
        badge: "Legal Tender",
        emoji: "💵",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "Why Do People Accept Paper Notes?",
        narrative: "Modern currency is not made of precious metals like gold or silver. It is accepted as a medium of exchange because it is authorized by the government of India, and no individual can legally refuse payment made in rupees.",
        boardKeyword: "Authorized Currency (Issued by RBI on behalf of Central Government)"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: Salim vs Swapna",
        badge: "Two Credit Roles",
        emoji: "⚖️",
        accentColor: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
        headline: "Credit as Growth Engine vs Debt-Trap",
        narrative: "(1) Salim: Receives order for 3,000 pairs of shoes, takes credit for leather, delivers on time, makes handsome profit. Credit plays a positive role. (2) Swapna: Borrows for groundnut seeds, crop fails due to pests, debt increases, forced to sell land. Credit pushes her into a painful debt-trap.",
        boardKeyword: "Debt-Trap (Borrower pushed into situation where recovery is extremely painful)"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: The 4 Terms of Credit",
        badge: "Loan Conditions",
        emoji: "📝",
        accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        headline: "Collateral, Interest, Documentation & Repayment Mode",
        narrative: "Every loan agreement specifies an interest rate. In addition, lenders demand 'collateral' (an asset that the borrower owns like land, house, or livestock) as a guarantee until the loan is repaid. Together with documentation and mode of repayment, these form the 'Terms of Credit'.",
        boardKeyword: "Terms of Credit (Interest Rate + Collateral + Documentation + Repayment Mode)"
      }
    ],
    truthOrTrap: {
      question: "Do moneylenders demand asset collateral like formal banks do?",
      trapStatement: "Informal moneylenders always demand land titles and registered legal documents before giving loans.",
      isTruth: false,
      revealExplanation: "FALSE! ❌ Moneylenders often know borrowers personally and give loans WITHOUT formal collateral. But they charge predatory interest rates (36% to 60% per year) and physically intimidate borrowers, pushing them into vicious debt traps!",
      examinerTip: "Contrast formal credit (supervised by RBI, low interest, needs collateral) with informal credit (unsupervised, predatory rates, debt-traps) in 3-mark answers."
    }
  }
};

// Heuristic Generator for any topic that isn't hardcoded above
export function getToddlerGuideForTopic(
  topicId: string,
  topicTitle: string,
  discipline: string,
  chapterNo: number,
  ncertSummary: string,
  corePrinciples: string[],
  commonMistakesWarning: string
): ToddlerConceptGuide {
  if (TODDLER_CONCEPT_CATALOG[topicId]) {
    return TODDLER_CONCEPT_CATALOG[topicId];
  }

  // Generate dynamic 4 scenes from ncertSummary and corePrinciples
  const paragraphs = ncertSummary.split("\n\n").filter(p => p.trim().length > 0);
  const p1 = paragraphs[0] || ncertSummary;
  const p2 = paragraphs[1] || corePrinciples[0] || "Core mechanism explained in NCERT.";
  const p3 = paragraphs[2] || corePrinciples[1] || "The historical or socio-economic impact across society.";
  const p4 = corePrinciples[2] || commonMistakesWarning || "Key board exam takeaway.";

  return {
    id: topicId,
    topicTitle,
    discipline,
    chapterNo,
    toddlerAnalogy: {
      hook: `The Simple Story of ${topicTitle.replace(/^[\d.]+\s*/, "")}`,
      scenario: `Imagine you want to understand ${topicTitle.replace(/^[\d.]+\s*/, "")} without any confusing technical jargon! In simple terms: ${p1.split(". ")[0]}. Think of it like a community agreeing on common rules so everyone thrives together without conflict.`,
      moralOrAha: "When rules are fair and people cooperate, society progresses; when someone hoards power or resources, conflict erupts!",
      characters: [
        { name: "The Innovators", role: "Introduced the reform or policy", emoji: "💡" },
        { name: "The Citizens", role: "Experienced the real-world impact", emoji: "👥" },
        { name: "The Evaluator", role: "Checks understanding in CBSE exams", emoji: "🎯" }
      ]
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: The Spark",
        badge: "The Problem",
        emoji: "🌟",
        accentColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        headline: "Why This Event or Concept Happened",
        narrative: p1,
        boardKeyword: corePrinciples[0] ? corePrinciples[0].split(":")[0] : "Foundational Concept"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: The Mechanism",
        badge: "Core Provisions",
        emoji: "⚙️",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "How It Works Under the Hood",
        narrative: p2,
        boardKeyword: corePrinciples[1] ? corePrinciples[1].split(":")[0] : "Operating Mechanism"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: The Conflict / Impact",
        badge: "The Real World",
        emoji: "🌪️",
        accentColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        headline: "Socio-Economic Impact & Reactions",
        narrative: p3,
        boardKeyword: "Real-World Socio-Economic Impact"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: The CBSE Golden Key",
        badge: "Exam Mastery",
        emoji: "🎯",
        accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        headline: "What CBSE Board Evaluators Look For",
        narrative: p4,
        boardKeyword: "Guaranteed Board Marking Point"
      }
    ],
    truthOrTrap: {
      question: `Can you spot the common misconception in ${topicTitle.replace(/^[\d.]+\s*/, "")}?`,
      trapStatement: commonMistakesWarning || "Students frequently confuse terminology or forget critical statutory exceptions.",
      isTruth: false,
      revealExplanation: `BEWARE! ❌ ${commonMistakesWarning || "Students frequently write generic answers without citing specific NCERT keywords."}`,
      examinerTip: "Write structured bullet points using official NCERT vocabulary to guarantee full marks!"
    }
  };
}
