// =========================================================================
// CBSE CLASS 10 — NCERT VISUAL SCENARIO & MENTAL MODEL ENGINE
// Immersive visual scene narratives (enabling 100% visualization after 2 reads),
// 4-Act NCERT deep dives, and high-stakes examiner trap challenges.
// Zero toddler/kindergarten talk: 100% NCERT depth with Class 9 foundational bridges.
// =========================================================================

export interface ToddlerConceptGuide {
  id: string;
  topicTitle: string;
  discipline: string;
  chapterNo: number;
  // 1. Cinematic Visual Scenario Narrative
  toddlerAnalogy: {
    hook: string;
    scenario: string;
    moralOrAha: string;
    characters: { name: string; role: string; emoji: string }[];
    class9Connection?: string;
    boardHotspot?: string;
  };
  // 2. The 4-Act Graphic Storyboard Breakdown
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
      hook: "The Vision of 1848: The March of Nations Past Liberty",
      scenario: "Picture Paris in the revolutionary spring of 1848: absolute monarchies are crumbling across Europe, barricades fill the boulevards, and French artist Frédéric Sorrieu creates a series of four prints entitled 'Democratic and Social Republics'. In the central print, an endless train of European and American peoples—men and women of all social classes and ages—marches in national dress past the Statue of Liberty. In her right hand she holds the Torch of Enlightenment; in her left, the Charter of the Rights of Man. Trampled on the ground before her lie the shattered symbols of absolutist rule: crowns, royal sceptres, and broken chains. Above in heaven, Christ, saints, and angels gaze down, symbolizing universal fraternity among free nations.",
      moralOrAha: "A nation-state is not created by imperial decrees; it is forged when sovereign citizens develop a shared collective identity, common history, and mutual fraternity.",
      characters: [
        { name: "Frédéric Sorrieu", role: "French printmaker who visualized utopian democratic republics", emoji: "🎨" },
        { name: "Statue of Liberty", role: "Personified with Torch of Enlightenment & Charter of Rights", emoji: "🗽" },
        { name: "Marching Citizens", role: "Peoples grouped by distinct national dress and national flags", emoji: "🚶" },
        { name: "Shattered Regalia", role: "Destroyed crowns and thrones symbolizing the demise of monarchical despotism", emoji: "👑" }
      ],
      class9Connection: "Class 9 Ch 1 (The French Revolution): The 1789 storming of the Bastille and the Declaration of the Rights of Man transferred sovereignty from absolute monarch Louis XVI to the French people. In Class 10, this revolutionary principle spreads across Europe.",
      boardHotspot: "Repeated CBSE Board Question: 2024, 2023, 2020, 2018 (3M & 5M) — Visual analysis of Sorrieu's print and measures creating collective French identity."
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: The Utopian Canvas",
        badge: "Sorrieu's Vision",
        emoji: "🖼️",
        accentColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        headline: "Sorrieu Depicts the Dream of Democratic Republics",
        narrative: "In 1848, French artist Frédéric Sorrieu prepared four prints visualizing a world of 'democratic and social Republics'. Peoples of Europe and America march in an endless procession, paying homage to the Statue of Liberty as they pass.",
        boardKeyword: "Utopian Vision (A vision of society so ideal that it is unlikely to actually exist)"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: Leading the Procession",
        badge: "Pioneering Nations",
        emoji: "🇺🇸",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "United States and Switzerland Lead the Way",
        narrative: "Leading the procession past the statue are the United States and Switzerland, which had already become established nation-states. France, identifiable by the revolutionary tricolour, has just reached the statue, followed by Germans carrying the black, red, and gold flag.",
        boardKeyword: "Nation-State (Majority of citizens develop a sense of common identity and shared history)"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: French Revolutionary Measures",
        badge: "Collective Identity",
        emoji: "🇫🇷",
        accentColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        headline: "How France Engineered Modern Nationalism",
        narrative: "The French revolutionaries introduced la patrie (the fatherland) and le citoyen (the citizen) to emphasize a community with equal rights under one constitution. They introduced a new tricolour flag, elected the National Assembly, abolished internal customs dues, and instituted uniform weights and measures.",
        boardKeyword: "La Patrie & Le Citoyen (Fatherland and Citizen under equal constitutional law)"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: Celestial Blessing",
        badge: "Fraternity Symbol",
        emoji: "🕊️",
        accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        headline: "Fraternity Among the Nations of the World",
        narrative: "From the heavens above, Christ, saints, and angels gaze upon the scene. Sorrieu used them as an intentional allegory for 'fraternity' among the nations of the world, blessing their peaceful coexistence.",
        boardKeyword: "Fraternity (Universal brotherhood replacing dynastic wars)"
      }
    ],
    truthOrTrap: {
      question: "Did Germany already exist as a unified nation-state when Sorrieu painted its flag in 1848?",
      trapStatement: "Germany was already an established nation-state marching directly behind France in Sorrieu's print.",
      isTruth: false,
      revealExplanation: "EXAMINER TRAP! ❌ In 1848, a unified German nation did NOT exist! German-speaking populations were fragmented across 39 independent principalities. The black, red, and gold flag was an expression of liberal democratic hopes to unify these territories into a nation-state under a democratic constitution.",
      examinerTip: "Write: 'In 1848, the Germans did not yet exist as a united nation; the flag they carried was an expression of liberal hopes to unify numerous German-speaking principalities.'"
    }
  },

  "sst_his_c1_t2": {
    id: "sst_his_c1_t2",
    topicTitle: "1.2 Napoleonic Code (Civil Code of 1804) & Dual Reactions Across Europe",
    discipline: "History",
    chapterNo: 1,
    toddlerAnalogy: {
      hook: "The Rational Modernizer Who Became an Imperial Conqueror",
      scenario: "Visualize Europe in 1804: centuries of feudal chaos meant every province had different weights, aristocratic nobles paid zero taxes, and poor serfs were bound to hereditary landlords. Napoleon Bonaparte overthrows the revolutionary republic, crowns himself Emperor, but in administration introduces razor-sharp rationality: the Civil Code of 1804. He abolishes birth privileges, establishes equality before the law, secures private property, frees peasants from serfdom, and standardizes trade across Switzerland, Holland, and Germany. Artisans and peasants celebrate! But then the darker reality emerges: Napoleon imposes total press censorship, steeply doubles taxes to fund foreign campaigns, and forcibly conscripts local youth into the French imperial army to conquer Russia and Britain. The initial cheers turn to fiery nationalist revolt.",
      moralOrAha: "People readily embrace administrative modernization, but no degree of economic efficiency can substitute for political liberty.",
      characters: [
        { name: "Napoleon Bonaparte", role: "Author of Civil Code 1804; administrative modernizer turned imperial autocrat", emoji: "👑" },
        { name: "Peasants & Artisans", role: "Liberated from feudal dues and urban guild restrictions", emoji: "🌾" },
        { name: "Conquered European Subjects", role: "Initially hailed French troops as 'harbingers of liberty', later rebelled against taxation and conscription", emoji: "⚔️" }
      ],
      class9Connection: "Class 9 Ch 1: Napoleon came to power in France in 1799 following the instability of the Directory, crowning himself Emperor in 1804 and seeing himself as a modernizer of Europe.",
      boardHotspot: "Repeated CBSE Board Question: 2024, 2023, 2020, 2019, 2016 (3M & 5M) — 3 merits of Napoleonic Code vs 3 reasons for local hostility."
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: The 3 Core Pillars",
        badge: "Civil Code of 1804",
        emoji: "📜",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "Napoleon Formulates the Civil Code of 1804",
        narrative: "Although Napoleon destroyed political democracy in France, in the administrative sphere he integrated revolutionary rationality. The Civil Code of 1804 achieved 3 breakthroughs: (1) Abolished all birth privileges, (2) Established equality of all citizens before the law, and (3) Secured the inviolable right to property.",
        boardKeyword: "Civil Code of 1804 (Equality before law + Property rights + Privileges abolished)"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: Exporting Administrative Reforms",
        badge: "Beyond France",
        emoji: "🌍",
        accentColor: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
        headline: "Reforms Exported to Switzerland, Italy, and Germany",
        narrative: "In the Dutch Republic, Switzerland, Germany, and Italy, Napoleon simplified administrative divisions, abolished the feudal system, emancipated peasants from serfdom and manorial dues, removed town guild restrictions, and standardized weights and measures.",
        boardKeyword: "Abolition of Serfdom and Feudal Dues in conquered satellite regions"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: The Turning Point",
        badge: "Hostility Awakens",
        emoji: "💥",
        accentColor: "from-rose-500/20 to-amber-500/20 border-rose-500/30",
        headline: "From Harbingers of Liberty to Hated Conquerors",
        narrative: "In Brussels, Mainz, Milan, and Warsaw, local populations had initially welcomed French armies as 'harbingers of liberty'. But enthusiasm quickly transformed into bitter resentment as people realized administrative modernization did not accompany political freedom.",
        boardKeyword: "Administrative Efficiency vs Political Disenfranchisement"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: The Three Oppressive Burdens",
        badge: "Colonial Squeeze",
        emoji: "🚨",
        accentColor: "from-red-500/20 to-rose-500/20 border-red-500/30",
        headline: "Taxation, Censorship, and Forced Conscription",
        narrative: "Napoleon imposed (1) severe censorship of newspapers and literature, (2) steep tax increases to finance imperial campaigns, and (3) forced conscription of conquered youth into the French armies. These burdens completely outweighed any administrative benefits.",
        boardKeyword: "Forced Conscription + Steep Taxation + Censorship"
      }
    ],
    truthOrTrap: {
      question: "Did the Napoleonic Code extend equal legal rights and property ownership to women?",
      trapStatement: "The Civil Code of 1804 granted women equal legal status, property ownership, and voting rights.",
      isTruth: false,
      revealExplanation: "EXAMINER TRAP! ❌ The Civil Code of 1804 actually rolled back legal status for women! It reduced women to the status of a legal 'minor', placing them under the complete authority of their fathers and husbands. Women were denied independent property management and political suffrage.",
      examinerTip: "Always cite the subordinate status of women under the Napoleonic Code in 5-mark evaluative answers to demonstrate comprehensive mastery."
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
      hook: "The Soul-Force That Stood Up to an Empire",
      scenario: "Imagine India between 1914 and 1918: the British Empire drags the subcontinent into the First World War. To finance imperial war debts, the colonial government introduces custom duties and income tax; prices of essential goods double between 1913 and 1918. Village youth are forcibly conscripted into foreign trenches, and an influenza epidemic wipes out 12 to 13 million lives. Into this cauldron of desperation steps Mohandas Karamchand Gandhi, arriving in January 1915 from South Africa. Gandhi introduces 'Satyagraha'—the revolutionary concept that truth and non-violence possess an inherent moral power (soul-force). He immediately puts it to the test at the grassroots: in Champaran (Bihar, 1917) against oppressive indigo planters, in Kheda (Gujarat, 1917) against revenue collection after crop failure, and in Ahmedabad (1918) supporting striking cotton mill workers.",
      moralOrAha: "Satyagraha is not passive weakness; it is militant moral courage where an unarmed populace forces an oppressor to confront the injustice of their own laws.",
      characters: [
        { name: "Mahatma Gandhi", role: "Returned from South Africa in Jan 1915; architect of Satyagraha", emoji: "🧘" },
        { name: "Champaran Indigo Farmers", role: "Exploited under the tinkathia system; first Satyagraha victory (1917)", emoji: "🌾" },
        { name: "Ahmedabad Mill Workers", role: "Secured a 35% wage increase through Gandhi's first hunger strike (1918)", emoji: "🏭" },
        { name: "Colonial State", role: "Extracted war taxes, forced military recruitment, and doubled prices", emoji: "🇬🇧" }
      ],
      class9Connection: "Class 9 Ch 4 & Ch 5: Colonial land revenue extraction and forest laws disrupted traditional rural livelihoods, creating the pent-up agrarian outrage that Gandhi mobilized into mass struggle.",
      boardHotspot: "Repeated CBSE Board Question: 2024, 2020, 2019, 2016 (3M & 5M) — Economic and political consequences of World War I in India & Champaran/Kheda/Ahmedabad movements."
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: Wartime Economic Squeeze",
        badge: "WWI Impact",
        emoji: "💣",
        accentColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        headline: "Customs Dues, Income Tax, and Price Doubling",
        narrative: "World War I (1914-1918) created an economic crisis: defense spending surged, financed by war loans and new taxes. Prices doubled between 1913 and 1918, causing severe hardship. Villages experienced forced recruitment of youth into the British army, followed by crop failure and influenza.",
        boardKeyword: "Economic Hardships of WWI (Price Doubling + Forced Conscription)"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: The Philosophy of Truth-Force",
        badge: "January 1915",
        emoji: "🚢",
        accentColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        headline: "Gandhiji Introduces Satyagraha",
        narrative: "Mahatma Gandhi returned from South Africa in January 1915. He introduced Satyagraha, emphasizing the power of truth and the need to search for truth. It held that if the cause was true and the struggle against injustice, physical force was unnecessary to defeat the oppressor.",
        boardKeyword: "Satyagraha (Soul-Force / Truth-Force without Physical Violence)"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: Three Local Laboratories",
        badge: "1917–1918",
        emoji: "🎯",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "Champaran, Kheda, and Ahmedabad Victories",
        narrative: "(1) Champaran (Bihar, 1917): Inspired peasants against oppressive indigo plantation system. (2) Kheda (Gujarat, 1917): Supported peasants demanding revenue remission due to crop failure and plague. (3) Ahmedabad (1918): Organized cotton mill workers for a 35% wage increase.",
        boardKeyword: "Grassroots Experiments (Champaran ➔ Kheda ➔ Ahmedabad)"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: Nationwide Consolidation",
        badge: "All-India Stage",
        emoji: "🇮🇳",
        accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        headline: "Building Grassroots Mass Leadership",
        narrative: "These three local victories proved that ordinary peasants and mill workers could peacefully confront the British Empire. This gave Gandhiji the political platform and mass confidence to launch national movements against the Rowlatt Act.",
        boardKeyword: "Mass Grassroots Awakening and Unified Mobilization"
      }
    ],
    truthOrTrap: {
      question: "Is Satyagraha considered passive resistance because Indians lacked modern weapons?",
      trapStatement: "Satyagraha is called 'passive resistance' because Indians were physically too weak to wage armed warfare.",
      isTruth: false,
      revealExplanation: "CRITICAL BOARD TRAP! ❌ Gandhiji vehemently rejected calling Satyagraha 'passive resistance'! Physical violence is based on hatred and brute physical force, whereas Satyagraha is pure soul-force. It requires far greater moral fortitude to stand unarmed against bullets and lathis without malice than to fire a rifle.",
      examinerTip: "Quote Gandhiji directly: 'Satyagraha is pure soul-force. Truth is the very substance of the soul. That is why this force is called satyagraha.'"
    }
  },

  "sst_his_c2_t2": {
    id: "sst_his_c2_t2",
    topicTitle: "2.2 The Rowlatt Act, Jallianwala Bagh Massacre, and Khilafat Unification",
    discipline: "History",
    chapterNo: 2,
    toddlerAnalogy: {
      hook: "The Black Act and the Bloodshed that Awoke a Subcontinent",
      scenario: "Step into Amritsar in April 1919: the British government rushes the Rowlatt Act through the Imperial Legislative Council over unanimous Indian opposition. The law permits detention of any political suspect for two years without trial or legal counsel. Gandhi calls a nationwide hartal on 6 April. On 10 April, British police fire on a peaceful procession, prompting rioting and martial law. On 13 April—the sacred festival day of Baisakhi—thousands of families from surrounding villages gather inside the high-walled garden of Jallianwala Bagh, completely unaware that public gatherings are banned. Brigadier-General Reginald Dyer marches in with 90 Gurkha and Baluchi riflemen, blocks the single narrow exit, and without warning orders continuous firing into the unarmed crowd for ten minutes. Over a thousand fall wounded or dead. The massacre shatters all illusions of British benevolence; Rabindranath Tagore renounces his Knighthood, and Gandhi unites with the Ali brothers (Khilafat) to launch the Non-Cooperation Movement.",
      moralOrAha: "State terrorism designed to crush a nation's soul inevitably shatters the moral authority of the oppressor and catalyzes unstoppable mass defiance.",
      characters: [
        { name: "General Reginald Dyer", role: "British Commander who ordered firing to produce 'a moral effect of terror and awe'", emoji: "💂" },
        { name: "Baisakhi Gathering", role: "Innocent Punjabi villagers and families gathered in the walled garden", emoji: "👨‍👩‍👧" },
        { name: "Rabindranath Tagore", role: "Renounced his British Knighthood in national grief and protest", emoji: "📜" },
        { name: "Ali Brothers (Muhammad & Shaukat)", role: "Formed the Khilafat Committee in Bombay (March 1919) to defend the Ottoman Caliph", emoji: "🤝" }
      ],
      class9Connection: "Class 9 Ch 5 (Democratic Rights): Habeas Corpus and the fundamental right to trial and legal counsel. The Rowlatt Act explicitly suspended these basic human rights in colonial India.",
      boardHotspot: "Repeated CBSE Board Question: 2024, 2023, 2020, 2019, 2016, 2014 (3M & 5M) — Provisions of Rowlatt Act, Jallianwala Bagh tragedy, and why Gandhi supported Khilafat."
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: The Black Act Enacted",
        badge: "March 1919",
        emoji: "📜",
        accentColor: "from-rose-500/20 to-red-500/20 border-rose-500/30",
        headline: "The Rowlatt Act Passed Despite United Opposition",
        narrative: "Passed hurriedly through the Imperial Legislative Council despite unanimous Indian opposition, the Rowlatt Act gave the colonial government sweeping powers to repress political activities and detain political suspects without trial for up to two years.",
        boardKeyword: "Rowlatt Act (2 Years Detention Without Trial)"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: The Sacred Baisakhi Gathering",
        badge: "13 April 1919",
        emoji: "🌸",
        accentColor: "from-amber-500/20 to-yellow-500/20 border-amber-500/30",
        headline: "Crowd Assembles in Walled Jallianwala Bagh",
        narrative: "A large crowd gathered in the enclosed ground of Jallianwala Bagh in Amritsar. Some came to protest the arrest of leaders (Dr. Saifuddin Kitchlew and Dr. Satyapal); many rural villagers had come to attend the annual Baisakhi fair, completely unaware that martial law had been declared.",
        boardKeyword: "Jallianwala Bagh Enclosure + Baisakhi Gathering"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: The Unforgivable Butchery",
        badge: "Dyer's Inhumanity",
        emoji: "💔",
        accentColor: "from-red-500/20 to-rose-500/20 border-red-500/30",
        headline: "General Dyer Orders Firing on Unarmed Crowd",
        narrative: "General Dyer entered with troops, blocked the only exit gate, and opened fire without warning, killing hundreds. Dyer later boasted that his objective was 'to produce a moral effect'—to strike terror and awe into the minds of Indians. Tagore renounced his British Knighthood in protest.",
        boardKeyword: "'Moral Effect of Terror and Awe' + Tagore Renounces Knighthood"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: The Khilafat Coalition",
        badge: "Hindu-Muslim Unity",
        emoji: "🤝",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "Uniting Khilafat and Swaraj at Nagpur 1920",
        narrative: "To defend the temporal powers of the Ottoman Caliph (Khalifa), the Ali brothers formed the Khilafat Committee. Gandhiji recognized this as a unique opportunity to unite Hindus and Muslims in a single mass struggle, formally adopting the Non-Cooperation Movement at Nagpur in December 1920.",
        boardKeyword: "Khilafat-Non-Cooperation Movement (Nagpur Congress 1920)"
      }
    ],
    truthOrTrap: {
      question: "Were the villagers gathered inside Jallianwala Bagh armed demonstrators defying martial law?",
      trapStatement: "All people present inside Jallianwala Bagh were armed political agitators intentionally defying General Dyer's curfew.",
      isTruth: false,
      revealExplanation: "EXAMINER TRAP! ❌ NCERT explicitly documents: Most of the gathering consisted of villagers from rural Punjab who had arrived in Amritsar to attend the traditional annual Baisakhi fair. Coming from outside the city, they were completely UNAWARE of the martial law proclamations issued by General Dyer.",
      examinerTip: "Emphasize that the victims were peaceful families and festive attendees unaware of martial law to score full marks in descriptive answers."
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
      hook: "Two Paths for Divided Societies: Accommodation vs Majoritarian Tyranny",
      scenario: "Compare two diverse nations in the mid-20th century: Belgium in Europe and Sri Lanka in South Asia. In Belgium, 59% speak Dutch (Flemish region) and 40% speak French (Wallonia), but in the capital Brussels, the French minority forms an 80% majority. Tensions flare in the 1950s. Instead of imposing one community over another, Belgian statesmen amend their constitution four times (1970–1993): they mandate equal Dutch and French ministers in the central cabinet, make state governments independent of the center, establish equal representation in Brussels, and create a third 'Community Government' for cultural affairs. Contrast this with Sri Lanka: the 74% Sinhala majority passes the 1956 Act making Sinhala the sole official language, gives preference to Sinhalas in universities and government jobs, and establishes Buddhism as the state religion. The 18% Tamil minority is systematically disenfranchised, triggering decades of catastrophic civil war.",
      moralOrAha: "Accommodating diversity through shared power preserves national unity; attempting to enforce majoritarian hegemony guarantees civil war.",
      characters: [
        { name: "Belgian Statesmen", role: "Engineered four constitutional amendments (1970–1993) to achieve peaceful ethnic parity", emoji: "🇧🇪" },
        { name: "Sri Lankan Leaders", role: "Passed the 1956 Majoritarian Act alienating Sri Lankan Tamils and sparking civil war", emoji: "🇱🇰" },
        { name: "Brussels Capital", role: "Showcase of equal representation; chosen as European Union headquarters", emoji: "🏛️" }
      ],
      class9Connection: "Class 9 Ch 1 (What is Democracy? Why Democracy?) & Ch 2 (Constitutional Design): Democracy is not majoritarian dictatorship. An authentic democratic constitution must safeguard minority rights and prevent the tyranny of the majority.",
      boardHotspot: "Repeated CBSE Board Question: 2024, 2023, 2022, 2020, 2017 (3M & 5M) — 4 features of Belgian Model & 3 measures of Sri Lankan 1956 Majoritarianism."
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: The Demographic Puzzle",
        badge: "Ethnic Makeup",
        emoji: "🧩",
        accentColor: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
        headline: "Belgium's Delicate Ethnic Balance",
        narrative: "In Belgium: 59% live in the Flemish region and speak Dutch; 40% live in Wallonia and speak French; 1% speak German. In capital Brussels, the reverse: 80% French and 20% Dutch. The French minority was relatively rich and powerful, causing acute ethnic tension during the 1950s-1960s.",
        boardKeyword: "Complex Ethnic Composition of Belgium (Flemish 59% Dutch vs Wallonia 40% French)"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: Majoritarian Catastrophe in Sri Lanka",
        badge: "1956 Act",
        emoji: "⚠️",
        accentColor: "from-rose-500/20 to-red-500/20 border-rose-500/30",
        headline: "Sinhala Supremacy Triggers Civil War",
        narrative: "Sri Lanka gained independence in 1948. The Sinhala majority (74%) passed the 1956 Act recognizing Sinhala as the only official language, prioritized Sinhala applicants for university admissions and state employment, and fostered Buddhism. Tamils felt alienated, leading to armed insurgency and civil war.",
        boardKeyword: "Majoritarianism (1956 Act + Sinhala Supremacy + Tamil Disenfranchisement)"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: The Belgian Model of Accommodation",
        badge: "4 Amendments",
        emoji: "🕊️",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "Constitutional Parity and Community Government",
        narrative: "Between 1970 and 1993, Belgium amended its constitution 4 times: (1) Equal number of Dutch and French ministers in central government, (2) State governments are not subordinate to the center, (3) Equal representation in Brussels, and (4) A 'Community Government' handling language and culture.",
        boardKeyword: "Belgian Model of Accommodation (Equal Ministers + Community Government)"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: Global Recognition",
        badge: "EU Headquarters",
        emoji: "🇪🇺",
        accentColor: "from-amber-500/20 to-yellow-500/20 border-amber-500/30",
        headline: "Brussels Chosen as Headquarters of the European Union",
        narrative: "Because Belgian leaders reconciled intense linguistic divisions with exemplary balance, when European nations united to form the European Union, they selected Brussels as the official headquarters of the EU.",
        boardKeyword: "Prudential and Moral Reasons for Power Sharing"
      }
    ],
    truthOrTrap: {
      question: "In Belgium, are the state governments subordinate to the Central Government?",
      trapStatement: "In the Belgian model, state governments must take prior administrative clearance from central ministers.",
      isTruth: false,
      revealExplanation: "EXAMINER TRAP! ❌ In the Belgian model, state governments are NOT subordinate to the central government! Many constitutional powers of the central government were permanently devolved to the two regional governments (Flemish and Walloon).",
      examinerTip: "Memorize the 4 distinct pillars of the Belgian model; CBSE tests this as a compulsory 3-mark or 5-mark question."
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
      hook: "The Medium of Exchange and the Two Faces of Credit",
      scenario: "Consider life before money: an agriculturalist with surplus wheat who needs shoes must locate a cobbler who happens to possess shoes in their exact size AND simultaneously desires wheat right at that moment—the 'Double Coincidence of Wants'. If the cobbler wants cloth instead, no trade occurs. Modern money eliminates this constraint: authorized currency issued by the Reserve Bank of India acts as a universally accepted medium of exchange. Now examine credit: credit acts as a powerful catalyst, but its outcome depends entirely on risk and terms. For Salim (a shoe manufacturer), taking credit to purchase raw leather allows him to fulfill an order for 3,000 pairs on time, earn handsome profits, and expand his business. But for Swapna (a small farmer), borrowing from a village moneylender at exorbitant interest to grow groundnuts leads to ruin when pests destroy the crop; she is forced to sell part of her land to repay the loan, trapped in a vicious debt-trap.",
      moralOrAha: "Credit serves as an engine of growth when invested in productive enterprise with manageable risk, but transforms into an exploitative trap when high-interest informal loans meet agricultural failure.",
      characters: [
        { name: "Salim", role: "Shoe manufacturer whose business prospered through formal credit", emoji: "👞" },
        { name: "Swapna", role: "Small groundnut farmer driven into a debt-trap by crop loss and moneylender rates", emoji: "🌾" },
        { name: "Reserve Bank of India", role: "Central bank that issues currency and supervises formal banks", emoji: "🏦" },
        { name: "Village Moneylender", role: "Informal credit source charging predatory interest (36–60%) without collateral", emoji: "💰" }
      ],
      class9Connection: "Class 9 Ch 1 (The Story of Village Palampur): Small farmers like Savita had to borrow from large farmer Tejpal Singh at 24% interest and provide bonded labor during harvest, illustrating the need for formal rural credit in Class 10.",
      boardHotspot: "Repeated CBSE Board Question: 2024, 2023, 2020, 2018, 2016 (3M & 5M) — Double coincidence of wants, Salim vs Swapna credit outcomes, and 4 Terms of Credit."
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: Barter and Double Coincidence",
        badge: "Barter Obstacle",
        emoji: "🌾",
        accentColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        headline: "The Double Coincidence of Wants",
        narrative: "In a barter economy where commodities are exchanged directly without money, both parties must desire what the other offers. Money eliminates this friction by acting as an intermediate step, functioning as a universal medium of exchange.",
        boardKeyword: "Double Coincidence of Wants (Overcome by Money as Medium of Exchange)"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: Authorized Currency",
        badge: "Legal Tender",
        emoji: "💵",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "Why Paper Currency Has Value",
        narrative: "Modern currency notes and coins are not made of precious metals like gold or silver, nor are they goods of everyday use. They are accepted because the currency is authorized by the Government of India and legally issued by the Reserve Bank of India.",
        boardKeyword: "Authorized Currency (Issued by RBI on behalf of Central Government)"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: Dual Credit Trajectories",
        badge: "Salim vs Swapna",
        emoji: "⚖️",
        accentColor: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
        headline: "Growth Engine vs Debt-Trap",
        narrative: "(1) Salim: Borrows working capital, completes export order for 3,000 pairs of shoes, repays loan, and boosts net income. (2) Swapna: Borrows for crop inputs, pests wipe out groundnut harvest, loan accumulates at compounding rates, forcing distress sale of farmland.",
        boardKeyword: "Debt-Trap (A situation where credit pushes borrower into deep distress and recovery is painful)"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: The 4 Terms of Credit",
        badge: "Loan Mandates",
        emoji: "📝",
        accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        headline: "Interest, Collateral, Documentation & Repayment Mode",
        narrative: "Every loan arrangement specifies an interest rate. In addition, lenders may demand 'collateral' (an asset owned by borrower such as land, house, or livestock) as a security deposit until repayment. Together with documentation and mode of repayment, these constitute the Terms of Credit.",
        boardKeyword: "Terms of Credit (Interest Rate + Collateral + Documentation + Repayment Mode)"
      }
    ],
    truthOrTrap: {
      question: "Do informal moneylenders demand registered collateral documents like formal commercial banks do?",
      trapStatement: "Moneylenders in rural villages always insist on legal title deeds and formal mortgage documentation.",
      isTruth: false,
      revealExplanation: "EXAMINER TRAP! ❌ Informal lenders (moneylenders, traders) frequently lend WITHOUT physical collateral because they know borrowers personally. However, they compensate by charging extortionate interest rates (36% to 60%+ per annum) and using physical intimidation, trapping poor farmers in debt.",
      examinerTip: "Contrast formal credit (supervised by RBI, lower interest rates, requires collateral) with informal credit (unsupervised, extortionate interest, risk of debt-trap)."
    }
  }
};

// Robust, academic heuristic generator for any topic without dedicated catalog entry
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

  const cleanTitle = topicTitle.replace(/^[\d.]+\s*/, "");
  const paragraphs = ncertSummary.split("\n\n").filter(p => p.trim().length > 0);
  const p1 = paragraphs[0] || ncertSummary;
  const p2 = paragraphs[1] || corePrinciples[0] || "Foundational NCERT conceptual framework.";
  const p3 = paragraphs[2] || corePrinciples[1] || "Socio-economic impact and real-world mechanisms.";
  const p4 = corePrinciples[2] || commonMistakesWarning || "Official CBSE board scoring criteria.";

  return {
    id: topicId,
    topicTitle,
    discipline,
    chapterNo,
    toddlerAnalogy: {
      hook: `NCERT Visual Scene: ${cleanTitle}`,
      scenario: `${p1}\n\nTo clearly visualize this: imagine the exact physical and institutional setting described in NCERT. When institutions or economic factors interact under these conditions, the chain of cause-and-effect unfolds systematically: ${p2.split(". ")[0]}.`,
      moralOrAha: `Understanding ${cleanTitle} requires analyzing how institutional structures, resource constraints, and human motivations align to shape societal outcomes.`,
      characters: [
        { name: "Key Historical/Economic Agents", role: "Initiated the policy or historical transformation", emoji: "🏛️" },
        { name: "The Citizenry / Producers", role: "Directly experienced the socio-economic impact", emoji: "👥" },
        { name: "CBSE Board Evaluator", role: "Assesses precise NCERT keywords and structured arguments", emoji: "🎯" }
      ],
      class9Connection: "Foundational concepts from Class 9 NCERT provide the structural background for understanding this topic in Class 10.",
      boardHotspot: "Frequently evaluated in CBSE Board papers across 1M, 3M, and 5M sections with strict adherence to NCERT keywords."
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: Context & Catalyst",
        badge: "The Problem",
        emoji: "🌟",
        accentColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        headline: `Historical & Economic Origins of ${cleanTitle}`,
        narrative: p1,
        boardKeyword: corePrinciples[0] ? corePrinciples[0].split(":")[0] : "Foundational Concept"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: Operating Mechanism",
        badge: "Core Mechanism",
        emoji: "⚙️",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "How the System Operates in NCERT",
        narrative: p2,
        boardKeyword: corePrinciples[1] ? corePrinciples[1].split(":")[0] : "Operating Principle"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: Socio-Economic Impact",
        badge: "Real-World Impact",
        emoji: "🌪️",
        accentColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        headline: "Real-World Conflicts and Transformations",
        narrative: p3,
        boardKeyword: "Socio-Economic & Institutional Transformation"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: CBSE Board Examination Key",
        badge: "Marking Criteria",
        emoji: "🎯",
        accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        headline: "Official NCERT Marking Point",
        narrative: p4,
        boardKeyword: "Guaranteed Board Marking Scheme Keyword"
      }
    ],
    truthOrTrap: {
      question: `Spot the common examiner trap in ${cleanTitle}:`,
      trapStatement: commonMistakesWarning || "Students frequently confuse terminology or omit mandatory NCERT analytical criteria.",
      isTruth: false,
      revealExplanation: `EXAMINER WARNING! ❌ ${commonMistakesWarning || "Examiners deduct marks for vague generalizations. Always anchor your answers with precise NCERT technical terminology."}`,
      examinerTip: "Organize your answers into clearly headed bullet points adhering strictly to the official CBSE marking rubric."
    }
  };
}
