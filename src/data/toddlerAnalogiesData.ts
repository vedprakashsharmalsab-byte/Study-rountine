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
,
  "sst_pol_c1_t2": {
    id: "sst_pol_c1_t2",
    topicTitle: "3.2 Majoritarianism in Sri Lanka & The Catastrophic Civil War",
    discipline: "Political Science",
    chapterNo: 3,
    toddlerAnalogy: {
      hook: "When 74% Decided to Treat 18% as Strangers: The Sri Lankan Tragedy",
      scenario: "Picture the island of Sri Lanka gaining independence in 1948. The Sinhala-speaking Buddhist community makes up 74% of the population, while Tamil speakers (18%) live primarily in the north and east. Instead of crafting an inclusive shared government, the democratically elected Sinhala leaders decided that winning an election meant complete supremacy.\n\nIn 1956, they passed an Act recognizing Sinhala as the sole official language, completely disregarding Tamil. They formulated preferential policies favouring Sinhala applicants for university admissions and government jobs. Furthermore, a new constitution mandated that the state foster and protect Buddhism, sidelining Hindu and Christian Tamils.\n\nThe result was devastating: feeling alienated and deprived of equal political rights, Sri Lankan Tamils launched parties demanding Tamil as an official language, regional autonomy, and equal opportunity. When their peaceful demands were repeatedly crushed, militant organizations like the LTTE emerged, demanding an independent state (Tamil Eelam). A catastrophic civil war erupted, killing thousands of people, tearing communities apart, and ruining Sri Lanka's booming economy.",
      moralOrAha: "Majoritarian rule is not true democracy. When a demographic majority uses state power to oppress a minority, it does not achieve stability; it destroys the very unity of the nation.",
      characters: [
        { name: "Sinhala Majority Leaders", role: "Enacted the 1956 Majoritarian Act and preferential policies", emoji: "\ud83c\udfdb\ufe0f" },
        { name: "Sri Lankan Tamils", role: "Demanded linguistic equality, regional autonomy, and dignity", emoji: "\ud83d\udc65" },
        { name: "The Fractured Nation", role: "Suffered decades of economic ruin and violent civil war", emoji: "\ud83d\udc94" },
      ],
      class9Connection: "Class 9 Democratic Rights: A democracy cannot survive without protecting fundamental rights of minority groups against majority encroachment.",
      boardHotspot: "CBSE 2024, 2023, 2020: 3 majoritarian measures taken by the Sri Lankan government in 1956 (3M/5M).",
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: Independence and Majority Rule",
        badge: "1948 Independence",
        emoji: "\ud83c\uddf1\ud83c\uddf0",
        accentColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        headline: "Democratic Majority Seeks Ethnic Supremacy",
        narrative: "Sri Lanka gained freedom in 1948. Sinhala leaders equated winning majority votes with the right to dominate all minority communities.",
        boardKeyword: "Majoritarianism"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: The Discriminatory 1956 Act",
        badge: "Official Subjugation",
        emoji: "\ud83d\udcdc",
        accentColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        headline: "Linguistic, Educational and Religious Monopoly",
        narrative: "The 1956 Act made Sinhala the sole language. Preferential university quotas and state protection for Buddhism followed.",
        boardKeyword: "1956 Sinhala Only Act"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: The Tamil Alienation",
        badge: "Broken Trust",
        emoji: "\u26a1",
        accentColor: "from-rose-500/20 to-red-500/20 border-rose-500/30",
        headline: "Peaceful Petitions Rejected",
        narrative: "Tamils launched peaceful protests for autonomy and equality. Every demand was rejected, radicalizing Tamil youth.",
        boardKeyword: "Tamil Eelam Demand"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: Catastrophic Civil War",
        badge: "Devastating Cost",
        emoji: "\ud83d\udca5",
        accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        headline: "The Ultimate Lesson on Power Sharing",
        narrative: "Decades of civil war killed thousands, created waves of refugees, and destroyed the nation's social and economic fabric.",
        boardKeyword: "Civil War & Economic Ruin"
      },
    ],
    truthOrTrap: {
      question: "Did the 1956 Sri Lankan Act grant special official status to Tamil in the northern provinces?",
      trapStatement: "The 1956 Act recognized Tamil as a regional language while keeping Sinhala for central administration.",
      isTruth: false,
      revealExplanation: "EXAMINER TRAP! \u274c The 1956 Act completely disregarded Tamil and made Sinhala the SOLE official language of the country.",
      examinerTip: "Always state that Sinhala was declared the 'sole official language', disregarding Tamil completely."
    }
  },
  "sst_pol_c1_t3": {
    id: "sst_pol_c1_t3",
    topicTitle: "3.3 Accommodation in Belgium: The Four Constitutional Amendments (1970\u20131993)",
    discipline: "Political Science",
    chapterNo: 3,
    toddlerAnalogy: {
      hook: "The Masterclass in Peace: How 4 Amendments Saved Belgium from Splitting",
      scenario: "Imagine a country where the Dutch-speaking majority (59%) lives in the north, but in the capital city Brussels, the French-speaking minority makes up 80%. In the 1950s and 60s, riots erupted and the country was on the brink of partitioning along linguistic lines.\n\nInstead of suppressing either group, Belgian political leaders recognized cultural diversity. Between 1970 and 1993, they amended their constitution four times to invent an unprecedented accommodation model:\n1. Equal Central Ministers: The central government mandates that the number of Dutch and French-speaking ministers shall be equal. No single community can make decisions unilaterally.\n2. Independent State Governments: Many powers of the central government were transferred to the state governments of the two regions. The states are not subordinate to the central government.\n3. Equal Brussels Government: In Brussels, where French speakers were 80%, they accepted equal representation because Dutch speakers had accepted equal representation in the central government.\n4. Community Government: A unique third tier elected by people belonging to one language community (Dutch, French, German), handling culture, education, and language issues.",
      moralOrAha: "Power sharing does not weaken a nation; by making every community feel respected and secure, it cements national unity so strongly that Brussels became the capital of the European Union.",
      characters: [
        { name: "Belgian Constitutional Framers", role: "Engineered four constitutional amendments between 1970 and 1993", emoji: "\ud83c\udde7\ud83c\uddea" },
        { name: "Flemish (Dutch) & Walloon (French) Citizens", role: "Agreed to mutual equality at center and capital", emoji: "\ud83e\udd1d" },
        { name: "Community Government", role: "Handles linguistic, educational, and cultural affairs independently", emoji: "\ud83c\udfeb" },
      ],
      class9Connection: "Class 9 Constitutional Design: A constitution must balance institutional checks and guarantee mutual equality to prevent ethnic hegemony.",
      boardHotspot: "CBSE 2024, 2023, 2022, 2019: 4 elements of the Belgian Model of Power Sharing (5M).",
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: Tensions in the Heart of Europe",
        badge: "Linguistic Friction",
        emoji: "\ud83c\udde7\ud83c\uddea",
        accentColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        headline: "Dutch Countryside vs French Capital",
        narrative: "Dutch were 59% in the nation but 20% in Brussels. French were rich and dominant, causing intense friction.",
        boardKeyword: "Ethnic Composition"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: Four Constitutional Amendments",
        badge: "1970\u20131993 Reforms",
        emoji: "\u2696\ufe0f",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "Equal Central Power & Regional Autonomy",
        narrative: "Ministers equalized in central cabinet. State governments made autonomous, not subordinate to the center.",
        boardKeyword: "Equal Ministers & Independent States"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: The Brussels Compromise & Community Tier",
        badge: "Cultural Safeguard",
        emoji: "\ud83c\udfdb\ufe0f",
        accentColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        headline: "Mutual Respect across Levels",
        narrative: "French accepted equal parity in Brussels. A third 'Community Government' was created for language and schools.",
        boardKeyword: "Community Government"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: Global Showcase of Democracy",
        badge: "EU Headquarters",
        emoji: "\ud83c\uddea\ud83c\uddfa",
        accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        headline: "Brussels Chosen by Europe",
        narrative: "When European nations formed the European Union, Brussels was chosen as headquarters due to its peaceful harmony.",
        boardKeyword: "European Union HQ"
      },
    ],
    truthOrTrap: {
      question: "Is the Belgian Community Government elected by all residents living in a particular geographical district?",
      trapStatement: "The Community Government is elected by everyone residing within the district borders regardless of language.",
      isTruth: false,
      revealExplanation: "EXAMINER TRAP! \u274c The Community Government is elected by people belonging to ONE language community (Dutch, French, or German) NO MATTER where they live.",
      examinerTip: "Community government is based on LANGUAGE allegiance, not geographical territory."
    }
  },
  "sst_pol_c2_t3": {
    id: "sst_pol_c2_t3",
    topicTitle: "4.3 What Makes India Federal? The Three-Fold Legislative Distribution & Residuary Powers",
    discipline: "Political Science",
    chapterNo: 4,
    toddlerAnalogy: {
      hook: "The Master Rulebook: Who Gets to Make Which Law in India?",
      scenario: "Imagine a giant joint family living in a three-story house. If there were no clear division of chores, everyone would fight over who pays the electric bill, who cooks dinner, and who locks the front gate.\n\nThe Indian Constitution did something brilliant: in the Seventh Schedule, it created a crystal-clear Three-Fold Distribution of legislative powers between the Union (Central) Government and State Governments:\n\n1. Union List (97+ subjects): Matters of national importance where uniform laws are essential across the entire country\u2014Defence, Atomic Energy, Foreign Affairs, Banking, Railways, and Currency. Only Parliament can make laws on these.\n2. State List (66 subjects): Matters of local and regional concern\u2014Police, Trade, Commerce, Agriculture, and Irrigation. Only State Legislative Assemblies can make laws on these.\n3. Concurrent List (47 subjects): Matters of common interest to both Center and States\u2014Education, Forests, Trade Unions, Marriage, Adoption, and Succession. Both Parliament and State Assemblies can make laws. But if their laws conflict, the Central Union law prevails!\n4. Residuary Subjects: What about subjects that did not exist in 1950, like Cyber Law, Artificial Intelligence, and Software? The Constitution gave all Residuary Powers exclusively to the Union Parliament.",
      moralOrAha: "Federal harmony depends on clear boundaries: the Union List protects national integrity, the State List safeguards local priorities, and the Concurrent List ensures coordinated progress.",
      characters: [
        { name: "Union Parliament", role: "Exclusive lawmaker for Union List & Residuary Powers like Cyber Law", emoji: "\ud83c\udfdb\ufe0f" },
        { name: "State Legislative Assemblies", role: "Exclusive lawmakers for State List subjects like Police & Agriculture", emoji: "\ud83c\udfe2" },
        { name: "The Supreme Court of India", role: "The impartial constitutional umpire resolving legislative disputes", emoji: "\u2696\ufe0f" },
      ],
      class9Connection: "Class 9 Working of Institutions: Parliament and State Legislatures exercise authority strictly delimited by constitutional schedules.",
      boardHotspot: "CBSE 2024, 2023, 2020, 2018: Explain the three-fold legislative distribution between Union and States (5M).",
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: Union of States",
        badge: "Article 1",
        emoji: "\ud83c\uddee\ud83c\uddf3",
        accentColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        headline: "Constitutional Federal Architecture",
        narrative: "Although the word 'federation' is not in Article 1, the Indian Union is based on deep federal power sharing.",
        boardKeyword: "Union of States"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: Union & State Lists",
        badge: "Clear Demarcation",
        emoji: "\ud83d\udcdc",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "National Defense vs Local Police",
        narrative: "Union controls Defence, Foreign Affairs, Currency. States control Police, Agriculture, and Local Trade.",
        boardKeyword: "Union & State Lists"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: The Concurrent Conflict Rule",
        badge: "Overriding Clause",
        emoji: "\u26a1",
        accentColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        headline: "Shared Subjects & Union Supremacy",
        narrative: "Education, Forests, Marriage can be legislated by both. In case of dispute, the Central Union statute prevails.",
        boardKeyword: "Concurrent Supremacy"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: The Digital Era (Residuary Powers)",
        badge: "Article 248",
        emoji: "\ud83d\udcbb",
        accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        headline: "Cyber Law & Emerging Frontiers",
        narrative: "Subjects that emerged post-independence belong automatically to the Union Parliament as Residuary Subjects.",
        boardKeyword: "Residuary Powers"
      },
    ],
    truthOrTrap: {
      question: "If a State law and a Union law conflict on a Concurrent List subject, does the State law prevail within its own territory?",
      trapStatement: "A State law on education overrides the central law inside that specific state.",
      isTruth: false,
      revealExplanation: "EXAMINER TRAP! \u274c Under Article 254, in case of any conflict on a Concurrent List subject, the Union (Central) law strictly prevails over the State law.",
      examinerTip: "Remember: Concurrent list conflict = Union law automatically prevails."
    }
  },
  "sst_pol_c2_t5": {
    id: "sst_pol_c2_t5",
    topicTitle: "4.5 Decentralisation in India: 73rd & 74th Amendments (1992)",
    discipline: "Political Science",
    chapterNo: 4,
    toddlerAnalogy: {
      hook: "Why Delhi Can't Fix a Broken Handpump in Kerala: The 1992 Revolution",
      scenario: "India is so massive that Uttar Pradesh has more people than Russia, and Maharashtra is bigger than Germany. How can ministers sitting in New Delhi or state capitals understand whether a village school roof is leaking or where a local canal should be dug?\n\nBefore 1992, local panchayats existed only on paper: elections were rarely held, and state governments gave them zero money or powers. A major constitutional breakthrough occurred in 1992 with the 73rd (Rural Panchayats) and 74th (Urban Municipalities) Constitutional Amendments.\n\nFive Mandatory Pillars of the 1992 Decentralisation Act:\n1. Mandatory Regular Elections: Constitutionally compulsory to hold elections every five years.\n2. Independent State Election Commission: Created in every state to conduct free and fair panchayat and municipal polls.\n3. Reservation for SC, ST, and OBC: Seats reserved to ensure marginalized communities have leadership representation.\n4. 33% (One-Third) Reservation for Women: At least one-third of all seats reserved exclusively for female representatives, creating over 10 lakh women leaders.\n5. State Finance Commission & Revenue Sharing: State governments must legally share powers and tax revenues with local government bodies.",
      moralOrAha: "Decentralisation brings democracy to the doorstep: problems are best solved by the local people who actually live with them.",
      characters: [
        { name: "Gram Panchayat & Sarpanch", role: "Grassroots village council directly accountable to the Gram Sabha", emoji: "\ud83c\udf3e" },
        { name: "State Election Commission", role: "Autonomous constitutional watchdog conducting local polls every 5 years", emoji: "\ud83d\uddf3\ufe0f" },
        { name: "36 Lakh Elected Representatives", role: "World's largest grassroots democratic leadership cadre (over 10L women)", emoji: "\ud83d\udc65" },
      ],
      class9Connection: "Class 9 Electoral Politics: Local elections give every citizen direct participatory voice in grassroot governance.",
      boardHotspot: "CBSE 2024, 2023, 2022, 2020: 5 provisions of the 73rd/74th Constitutional Amendment Act of 1992 (5M).",
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: The Need for Third Tier",
        badge: "Continental Scale",
        emoji: "\ud83c\uddee\ud83c\uddf3",
        accentColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        headline: "Why Two Tiers Were Not Enough",
        narrative: "States bigger than European nations required local decision-making for local issues and grievances.",
        boardKeyword: "Decentralisation Rationale"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: The Pre-1992 Failure",
        badge: "Paper Panchayats",
        emoji: "\ud83d\udcc4",
        accentColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        headline: "Irregular Polls and Zero Resources",
        narrative: "Before 1992, panchayats had no independent funds, no fixed election schedules, and no constitutional teeth.",
        boardKeyword: "Pre-1992 Stagnation"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: The 1992 Constitutional Revolution",
        badge: "73rd & 74th Amendments",
        emoji: "\ud83d\udcdc",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "Mandatory Polls, Quotas & State Election Commission",
        narrative: "Regular 5-year elections, 33% women quota, SC/ST reservations, and State Finance Commissions enacted.",
        boardKeyword: "1992 Constitutional Provisions"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: World's Largest Grassroots Cadre",
        badge: "Deepest Democracy",
        emoji: "\ud83c\udf1f",
        accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        headline: "36 Lakh Representatives in Action",
        narrative: "Today over 36 lakh leaders (including over 10 lakh women) govern local schools, water, and sanitation.",
        boardKeyword: "Grassroots Deepening"
      },
    ],
    truthOrTrap: {
      question: "Are local body elections in India conducted by the Central Election Commission of India (ECI)?",
      trapStatement: "The Election Commission of India in New Delhi conducts all Panchayat and Municipal elections.",
      isTruth: false,
      revealExplanation: "EXAMINER TRAP! \u274c Local Panchayat and Municipal elections are conducted by an independent STATE Election Commission created in each state.",
      examinerTip: "Central ECI conducts Lok Sabha, Rajya Sabha & Assembly elections; State EC conducts Panchayat & Municipal elections."
    }
  },
  "sst_pol_c17_t1": {
    id: "sst_pol_c17_t1",
    topicTitle: "3.1 Gender and Politics: Sexual Division of Labour & Feminist Movements",
    discipline: "Political Science",
    chapterNo: 17,
    toddlerAnalogy: {
      hook: "The Invisible Engine: Why Cooking at Home is 'Free' but Cooking in Hotels is 'Paid'",
      scenario: "Look around your own home: who cooks the food, washes the utensils, launders the clothes, cleans the rooms, and takes care of younger siblings? In almost every household, women do this work.\n\nIs this because men are biologically incapable of cooking or washing? Absolutely not! When these exact same tasks are attached to a paycheck\u2014such as male chefs in 5-star hotels or male tailors in fashion boutiques\u2014men happily take them up. This reveals the Sexual Division of Labour: work inside the private home is assigned to women without money or recognition, while paid work outside is captured by men.\n\nIn rural India, women work in fields, fetch water from kilometers away, and gather firewood, working an average of one hour more than men every day. Yet because their household labour doesn't generate cash, it remains invisible. Feminist movements arose to break this unfair boundary: demanding voting rights, equal education, equal wages under the Equal Remuneration Act 1976, and sharing of domestic responsibilities.",
      moralOrAha: "Gender inequality is a social construct, not a biological rule. Society assigned domestic work to women for free, and feminist movements struggle to turn women from domestic dependents into equal sovereign citizens.",
      characters: [
        { name: "The Unpaid Home Caregiver", role: "Performs invisible domestic labour working 1+ hours more daily than men", emoji: "\ud83d\udc69" },
        { name: "The Feminist Movement", role: "Advocates equal educational, economic, and political rights for all genders", emoji: "\ud83d\udce2" },
        { name: "Patriarchal Mindset", role: "Traditional cultural bias valuing male authority and devaluing female labour", emoji: "\ud83c\udfdb\ufe0f" },
      ],
      class9Connection: "Class 9 Democratic Rights: Right to Equality (Article 14-18) prohibits discrimination on grounds of sex.",
      boardHotspot: "CBSE 2024, 2023, 2020: Define sexual division of labour and give 3 indicators of women's disadvantage in India (3M/5M).",
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: The Social Division",
        badge: "Not Biology",
        emoji: "\ud83c\udfe1",
        accentColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        headline: "Home vs Public Sphere",
        narrative: "Unpaid household chores are stereotyped as women's work; paid public work is dominated by men.",
        boardKeyword: "Sexual Division of Labour"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: The Disadvantage Reality",
        badge: "Hard Data",
        emoji: "\ud83d\udcca",
        accentColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        headline: "Literacy Gap (54% vs 76%) & Unpaid Work",
        narrative: "Indian women work 1 hour more daily, face lower literacy, wage gaps, and child sex ratio deficits.",
        boardKeyword: "Literacy & Wage Gaps"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: The Feminist Awakening",
        badge: "Demanding Equality",
        emoji: "\u270a",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "Suffrage, Careers & Family Laws",
        narrative: "Feminists agitated for voting rights, higher education, career access, and equal family law rights.",
        boardKeyword: "Feminist Agitations"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: Global Transformation",
        badge: "Scandinavian Standard",
        emoji: "\ud83c\udf0d",
        accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        headline: "Women in Public Leadership",
        narrative: "Scandinavian countries lead the world in female public participation due to political mobilization.",
        boardKeyword: "Public Participation"
      },
    ],
    truthOrTrap: {
      question: "Is the sexual division of labour an unchangeable biological reality of human genetics?",
      trapStatement: "The sexual division of labour is biologically predetermined by nature.",
      isTruth: false,
      revealExplanation: "EXAMINER TRAP! \u274c NCERT explicitly defines it as a social expectation and stereotype, not a biological division.",
      examinerTip: "Always state that gender division is socio-cultural, whereas sex is biological."
    }
  },
  "sst_pol_c18_t1": {
    id: "sst_pol_c18_t1",
    topicTitle: "4.1 Meaning, Three Core Components & The Necessity of Political Parties",
    discipline: "Political Science",
    chapterNo: 18,
    toddlerAnalogy: {
      hook: "The Island of 543 Strangers: What Happens If You Ban All Political Parties?",
      scenario: "Imagine tomorrow the government bans all political parties. Now, 543 independent individuals contest elections across India with no party symbols or manifestos. What happens on day one after the election?\n\nFirst, no candidate could promise any national policy change, because each independent MP only cares about their own hometown. Second, a government might somehow be cobbled together, but its life would remain uncertain and fragile every single morning. Third, MPs would be accountable only to their village or city constituency, but absolutely nobody would be responsible for running India as a whole!\n\nThis thought experiment proves why political parties are an indispensable necessity for modern representative democracies. A political party is a collective organisation of citizens who agree on core programmes, contest elections, and govern to implement those programmes. It has three core components: the Leaders (policy thinkers), the Active Members (cadres and campaign organizers), and the Followers (voters who endorse the vision).",
      moralOrAha: "Parties are the glue that holds a continental democracy together: they bundle millions of diverse voices into clear national policies that citizens can vote for or against.",
      characters: [
        { name: "Party Leaders", role: "Formulate ideologies, steer legislative bills, and form cabinet ministries", emoji: "\ud83e\udde0" },
        { name: "Active Cadres", role: "Grassroots workers running party booths, rallies, and outreach", emoji: "\ud83c\udfc3" },
        { name: "Followers / Electors", role: "Voters who endorse the party's manifesto and vote on election day", emoji: "\ud83d\uddf3\ufe0f" },
      ],
      class9Connection: "Class 9 Electoral Politics: Elections cannot offer meaningful competition without organized political parties.",
      boardHotspot: "CBSE 2024, 2023, 2022, 2019: Three components of a political party & why parties are necessary in democracy (3M/5M).",
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: Defining the Party",
        badge: "Core Definition",
        emoji: "\ud83d\udea9",
        accentColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        headline: "Coming Together for Governance",
        narrative: "A political party contests elections and holds government power to implement collective policies.",
        boardKeyword: "Political Party Definition"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: The Three Pillars",
        badge: "Tripartite Structure",
        emoji: "\ud83c\udfdb\ufe0f",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "Leaders, Active Members & Followers",
        narrative: "Leaders decide policy; active members run campaigns; followers provide the electoral mandate.",
        boardKeyword: "Three Components"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: The Chaos of No Parties",
        badge: "Thought Experiment",
        emoji: "\ud83c\udf2a\ufe0f",
        accentColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        headline: "543 Independent Voices",
        narrative: "Without parties, no national policy can be promised, and no one is accountable for the country as a whole.",
        boardKeyword: "Party-less Election Scenario"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: The Representative Agency",
        badge: "Democracy Engine",
        emoji: "\ud83c\udfaf",
        accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        headline: "Indispensable Democratic Instrument",
        narrative: "Large societies need an agency to aggregate opinions and bring stability to governance.",
        boardKeyword: "Indispensable Condition"
      },
    ],
    truthOrTrap: {
      question: "Can a modern representative democracy with 140 crore citizens function efficiently without any political parties?",
      trapStatement: "A democracy without political parties would be cleaner, more stable, and perfectly accountable.",
      isTruth: false,
      revealExplanation: "EXAMINER TRAP! \u274c Without parties, every MP is independent; no national policy can be formed, and no one is accountable for running the country.",
      examinerTip: "Always cite the NCERT 'hypothetical party-less election' to prove parties are indispensable."
    }
  },
  "sst_pol_c19_t2": {
    id: "sst_pol_c19_t2",
    topicTitle: "5.2 Accountable, Responsive and Legitimate Government",
    discipline: "Political Science",
    chapterNo: 19,
    toddlerAnalogy: {
      hook: "Why a Slow Democratic Government Beats a Speedy Dictator Every Single Time",
      scenario: "A dictator can snap his fingers at 9:00 AM and pass a new tax by 9:05 AM. No debates, no opposition shouting, no committee hearings. It looks amazingly 'fast and efficient', doesn't it?\n\nNow look at a democracy: a bill is drafted, published for public feedback, debated in parliament for weeks, scrutinized by opposition MPs, and passed through voting. It takes months. Is democracy therefore 'inefficient'?\n\nNCERT delivers a masterclass in political philosophy: because the democratic government followed procedures and consultation, the decision is far more acceptable to the people and far more effective in practice! A dictator's hasty decision may provoke instant rebellion. Furthermore, democracy guarantees Transparency: under the Right to Information (RTI) Act, any citizen has the legal right to inspect exactly how decisions were made.\n\nMost importantly, democracy produces a Legitimate Government. It may be slow, it may be noisy, it may suffer from corruption, but it is people's own government. That is why throughout South Asia, people overwhelmingly choose democracy over military regimes.",
      moralOrAha: "Speed is not the measure of good governance; legitimacy, transparency, and accountability are. A slow decision accepted by all citizens is infinitely superior to a swift decree enforced by gunpoint.",
      characters: [
        { name: "The Democratic Citizen with RTI", role: "Exercises constitutional transparency to inspect administrative files", emoji: "\ud83d\udd0d" },
        { name: "The Deliberating Parliament", role: "Debates and amends laws through multi-party consensus and procedures", emoji: "\ud83c\udfdb\ufe0f" },
        { name: "The Authoritarian Dictator", role: "Passes swift decrees without public consent, sparking hidden revolt", emoji: "\ud83d\udc51" },
      ],
      class9Connection: "Class 9 Working of Institutions: Deliberation and procedural debate protect citizens from arbitrary executive tyranny.",
      boardHotspot: "CBSE 2024, 2023, 2020: Why is democratic government considered legitimate and transparent? (3M/5M).",
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: The Efficiency Myth",
        badge: "Haste vs Consent",
        emoji: "\u23f1\ufe0f",
        accentColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        headline: "Why Democratic Delay is Worth It",
        narrative: "Non-democratic regimes act swiftly without consultation, while democracies deliberate to ensure widespread acceptance.",
        boardKeyword: "Deliberation & Negotiation"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: The Glass House (Transparency)",
        badge: "Procedural Inspection",
        emoji: "\ud83d\udd0e",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "Right to Examine Decisions",
        narrative: "Citizens have the legal tools (like RTI) to check if correct procedures were followed. This is transparency.",
        boardKeyword: "Transparency & RTI"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: The Mixed Responsiveness",
        badge: "Room for Improvement",
        emoji: "\ud83d\udc42",
        accentColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        headline: "Corruption and Bureaucratic Delay",
        narrative: "Democracies are not free of corruption or apathy, but autocracies offer zero recourse for citizen complaints.",
        boardKeyword: "Responsiveness Record"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: Supreme Legitimacy",
        badge: "People's Choice",
        emoji: "\ud83d\udc51",
        accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        headline: "People's Own Government",
        narrative: "A democratic government is legitimate because it is elected by the people themselves, commanding voluntary loyalty.",
        boardKeyword: "Legitimate Government"
      },
    ],
    truthOrTrap: {
      question: "Is non-democratic dictatorship proven by historical records to be less corrupt than democracy?",
      trapStatement: "Military dictatorships have zero corruption compared to democratic regimes.",
      isTruth: false,
      revealExplanation: "EXAMINER TRAP! \u274c There is zero evidence that non-democracies are less corrupt; dictatorships simply censor corruption stories and jail journalists.",
      examinerTip: "Both suffer from corruption, but democracy allows exposure, investigative journalism, and electoral punishment."
    }
  }
};

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
  const p3 = paragraphs[2] || corePrinciples[1] || "Socio-economic impact and institutional mechanisms.";
  const p4 = corePrinciples[2] || commonMistakesWarning || "Official CBSE board scoring criteria.";

  // Build a rich multi-stage intuitive mental model
  const sceneP1 = `To picture ${cleanTitle} clearly, visualize the concrete real-world setting: ${p1}`;
  const sceneP2 = paragraphs.length > 1
    ? `Under these circumstances, the system operates through precise institutional mechanisms: ${p2}`
    : `Notice how each constitutional rule or economic factor interacts: when one part moves, it triggers a chain reaction across the entire nation.`;
  const sceneP3 = paragraphs.length > 2
    ? `The real-world consequence is transformative: ${p3}`
    : `Understanding this principle allows you to analyze any CBSE board problem by tracing cause, mechanism, and societal outcome.`;

  const fullScenario = `${sceneP1}\n\n${sceneP2}\n\n${sceneP3}`;

  return {
    id: topicId,
    topicTitle,
    discipline,
    chapterNo,
    toddlerAnalogy: {
      hook: `Mental Picture: ${cleanTitle}`,
      scenario: fullScenario,
      moralOrAha: corePrinciples[0]
        ? `The Core Takeaway: ${corePrinciples[0]}`
        : `Understanding ${cleanTitle} requires analyzing how institutional structures, constitutional rules, and human motivations align to shape outcomes.`,
      characters: [
        {
          name: corePrinciples[0] ? corePrinciples[0].split(":")[0] : "Primary Institutional Actor",
          role: "Governing agency or core constitutional force",
          emoji: "🏛️"
        },
        {
          name: corePrinciples[1] ? corePrinciples[1].split(":")[0] : "The Citizenry & Social Groups",
          role: "Directly affected stakeholders exercising democratic rights",
          emoji: "👥"
        },
        {
          name: "CBSE Board Evaluator",
          role: "Awards full marks for precise NCERT keywords and structured arguments",
          emoji: "🎯"
        }
      ],
      class9Connection: "Foundational concepts from Class 9 NCERT provide the structural background for understanding this topic in Class 10.",
      boardHotspot: "Frequently evaluated in CBSE Board papers across 1M, 3M, and 5M sections with strict adherence to NCERT keywords."
    },
    storyScenes: [
      {
        sceneNo: 1,
        actTitle: "Act I: Context & Genesis",
        badge: "The Problem Setting",
        emoji: "🌟",
        accentColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        headline: `Origins of ${cleanTitle}`,
        narrative: p1,
        boardKeyword: corePrinciples[0] ? corePrinciples[0].split(":")[0] : "Foundational Concept"
      },
      {
        sceneNo: 2,
        actTitle: "Act II: Operating Mechanism",
        badge: "System in Action",
        emoji: "⚙️",
        accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
        headline: "How the Structure Functions in NCERT",
        narrative: p2,
        boardKeyword: corePrinciples[1] ? corePrinciples[1].split(":")[0] : "Operating Principle"
      },
      {
        sceneNo: 3,
        actTitle: "Act III: Real-World Transformation",
        badge: "Societal Impact",
        emoji: "🌪️",
        accentColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        headline: "Impact on Society and Institutions",
        narrative: p3,
        boardKeyword: "Socio-Economic & Institutional Transformation"
      },
      {
        sceneNo: 4,
        actTitle: "Act IV: CBSE Board Examination Key",
        badge: "Topper Marking Criteria",
        emoji: "🎯",
        accentColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        headline: "Guaranteed Board Marking Scheme Point",
        narrative: p4,
        boardKeyword: "Board Technical Terminology"
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
