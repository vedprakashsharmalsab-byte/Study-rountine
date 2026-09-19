// =========================================================================
// CBSE CLASS 10 SOCIAL SCIENCE — SMART TIMELINES MASTER DATABASE
// Comprehensive NCERT History Timelines with Deep Smart Study Annotations:
// 1. Chapter 1: The Rise of Nationalism in Europe (1789 – 1871+)
// 2. Chapter 2: Nationalism in India (1915 – 1947)
// Includes Eras, Causes, Consequences, CBSE Board Recurrence, and Examiner Traps.
// =========================================================================

import { SSTTimelineEvent } from "./sstConceptsData";

export interface EnrichedTimelineEvent extends SSTTimelineEvent {
  id: string;
  chapterKey: "ch1_europe" | "ch2_india";
  chapterTitle: string;
  numericYear: number;
  era: string;
  keyPersonalities: string[];
  whyCbseAsksThis: string;
  boardTrap: string;
  examProbability: "CRITICAL (95%+)" | "HIGH (85%+)" | "MEDIUM (70%+)";
  causes?: string[];
  consequences?: string[];
  quickMnemonic?: string;
}

export interface TimelineEra {
  id: string;
  chapterKey: "ch1_europe" | "ch2_india";
  name: string;
  timeSpan: string;
  description: string;
  color: string;
  accent: string;
}

export const SST_TIMELINE_ERAS: TimelineEra[] = [
  // Europe Eras
  {
    id: "eu_revolution_napoleon",
    chapterKey: "ch1_europe",
    name: "French Revolution & Napoleonic Era",
    timeSpan: "1789 – 1815",
    description: "Birth of civic nationalism, export of revolutionary ideals via Napoleonic Code, and final defeat of Bonaparte at Waterloo (1815).",
    color: "from-blue-500/20 to-indigo-500/20 border-blue-500/40 text-blue-300",
    accent: "blue"
  },
  {
    id: "eu_restoration_romanticism",
    chapterKey: "ch1_europe",
    name: "Conservative Restoration & Romantic Awakening",
    timeSpan: "1815 – 1834",
    description: "Congress of Vienna restores Bourbon autocracy; Greek war stirs romantic nationalism; Mazzini's underground societies take root.",
    color: "from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300",
    accent: "amber"
  },
  {
    id: "eu_age_of_revolutions",
    chapterKey: "ch1_europe",
    name: "The Revolutions of 1848",
    timeSpan: "1845 – 1848",
    description: "Silesian weavers revolt, Paris citizens overthrow monarch, Frankfurt Parliament attempts constitutional unification.",
    color: "from-rose-500/20 to-red-500/20 border-rose-500/40 text-rose-300",
    accent: "rose"
  },
  {
    id: "eu_unifications",
    chapterKey: "ch1_europe",
    name: "Unification of Italy & Germany",
    timeSpan: "1859 – 1871",
    description: "Cavour & Garibaldi forge Italian state; Bismarck's 'Blood and Iron' defeats Denmark, Austria, and France to proclaim the Kaiser at Versailles.",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-300",
    accent: "emerald"
  },
  {
    id: "eu_balkans",
    chapterKey: "ch1_europe",
    name: "Imperialism & The Balkan Powder Keg",
    timeSpan: "1871 – 1914",
    description: "Disintegration of Ottoman Empire triggers Slavic national rivalries among Great Powers, leading directly into WWI.",
    color: "from-purple-500/20 to-violet-500/20 border-purple-500/40 text-purple-300",
    accent: "purple"
  },

  // India Eras
  {
    id: "in_gandhian_arrival",
    chapterKey: "ch2_india",
    name: "Gandhian Return & Early Satyagrahas",
    timeSpan: "1915 – 1918",
    description: "Gandhiji arrives with Satyagraha formula; tests soul-force in Champaran, Kheda, and Ahmedabad textile mills.",
    color: "from-amber-500/20 to-yellow-500/20 border-amber-500/40 text-amber-300",
    accent: "amber"
  },
  {
    id: "in_rowlatt_khilafat",
    chapterKey: "ch2_india",
    name: "Rowlatt Black Law & Jallianwala Flashpoint",
    timeSpan: "1919 – 1920",
    description: "Draconian detention without trial, Dyer's Amritsar butchery, Ali brothers' Khilafat committee, and the Nagpur Congress pact.",
    color: "from-rose-500/20 to-red-500/20 border-rose-500/40 text-rose-300",
    accent: "rose"
  },
  {
    id: "in_non_cooperation",
    chapterKey: "ch2_india",
    name: "Non-Cooperation Movement Across Strata",
    timeSpan: "1921 – 1922",
    description: "Mass boycott of foreign cloth and schools, peasant revolts in Awadh, tribal guerrilla war in Gudem, and the sudden halt at Chauri Chaura.",
    color: "from-teal-500/20 to-cyan-500/20 border-teal-500/40 text-teal-300",
    accent: "teal"
  },
  {
    id: "in_simon_purna_swaraj",
    chapterKey: "ch2_india",
    name: "Swaraj Party, Simon Boycott & Purna Swaraj",
    timeSpan: "1923 – 1929",
    description: "Legislative resistance by Das & Nehru, 'Go Back Simon' protests, Lala Lajpat Rai's sacrifice, and the historic midnight Lahore resolution.",
    color: "from-blue-500/20 to-indigo-500/20 border-blue-500/40 text-blue-300",
    accent: "blue"
  },
  {
    id: "in_civil_disobedience",
    chapterKey: "ch2_india",
    name: "Salt March & Civil Disobedience Movement",
    timeSpan: "1930 – 1934",
    description: "240-mile march to Dandi, breaking salt monopoly, Gandhi-Irwin pact, London Round Table impasse, and Poona Pact with Dr. Ambedkar.",
    color: "from-emerald-500/20 to-green-500/20 border-emerald-500/40 text-emerald-300",
    accent: "emerald"
  },
  {
    id: "in_quit_india_freedom",
    chapterKey: "ch2_india",
    name: "Quit India & Final Freedom Dawn",
    timeSpan: "1942 – 1947",
    description: "'Do or Die' clarion call at Gowalia Tank, underground uprisings, and the midnight tryst with destiny on 15 August 1947.",
    color: "from-orange-500/20 to-amber-500/20 border-orange-500/40 text-orange-300",
    accent: "orange"
  }
];

export const ENRICHED_SST_TIMELINES: EnrichedTimelineEvent[] = [
  // =========================================================================
  // CHAPTER 1: RISE OF NATIONALISM IN EUROPE
  // =========================================================================
  {
    id: "eu_1789_french_rev",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1789",
    numericYear: 1789,
    era: "French Revolution & Napoleonic Era",
    event: "The French Revolution Begins",
    significance: "First clear political expression of nationalism in European history. Sovereignty was transferred from an absolute Bourbon monarch to a sovereign assembly of French citizens.",
    ncertReference: "NCERT History Ch 1, p. 3-5",
    keyPersonalities: ["Louis XVI", "Third Estate Delegates"],
    whyCbseAsksThis: "CBSE frequently asks for 3 or 5 collective identity measures introduced by French revolutionaries (la patrie, le citoyen, tricolour, uniform weights & measures).",
    boardTrap: "Do NOT write that French revolutionaries abolished monarchy instantly; constitutional monarchy existed first (1791) before the Republic was declared in 1792.",
    examProbability: "CRITICAL (95%+)",
    causes: [
      "Absolute despotic monarchy and financial bankruptcy",
      "Unequal feudal social estates with nobility and clergy tax-exempt",
      "Enlightenment philosophy of Rousseau, Montesquieu, and Voltaire"
    ],
    consequences: [
      "Proclamation of sovereignty residing in the French Nation",
      "Adoption of Tricolour flag and Estates General renamed National Assembly",
      "Standardization of weights, metric measures, and French as the national language"
    ],
    quickMnemonic: "FC-TUM: Fatherland (Patrie), Citizen (Citoyen), Tricolour, Uniform laws, Metric system"
  },
  {
    id: "eu_1797_napoleon_invades",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1797",
    numericYear: 1797,
    era: "French Revolution & Napoleonic Era",
    event: "Napoleon Invades Italy; Napoleonic Wars Commence",
    significance: "French revolutionary armies crossed frontiers into Italy, Switzerland, and the Low Countries, carrying radical concepts of liberty, equality, and state reorganization abroad.",
    ncertReference: "NCERT History Ch 1, p. 5",
    keyPersonalities: ["Napoleon Bonaparte"],
    whyCbseAsksThis: "Tests how the initial enthusiasm of European populations turned into hostility due to taxation and forced conscription.",
    boardTrap: "Students forget that initial reception by Dutch, Swiss, and Milanese cities hailed French soldiers as 'harbingers of liberty' before reality hit.",
    examProbability: "HIGH (85%+)",
    causes: ["Aggressive expansionist policy of Revolutionary Directorate", "Geopolitical dominance over Austrian Habsburgs in Northern Italy"],
    consequences: ["Destruction of old aristocratic boundaries in Italy", "Birth of Italian national self-consciousness under French puppet republics"]
  },
  {
    id: "eu_1804_civil_code",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1804",
    numericYear: 1804,
    era: "French Revolution & Napoleonic Era",
    event: "The Napoleonic Code (Civil Code of 1804) Enacted",
    significance: "A landmark modern legal synthesis: abolished all birth privileges, guaranteed equality before the law, secured property rights, and abolished feudal manorial dues in conquered regions.",
    ncertReference: "NCERT History Ch 1, p. 6-7",
    keyPersonalities: ["Napoleon Bonaparte"],
    whyCbseAsksThis: "Guaranteed 3-mark or 5-mark question: 'Explain any four provisions of the Civil Code of 1804' or 'Napoleon destroyed democracy but made the administrative field rational'.",
    boardTrap: "Writing that the Napoleonic Code granted women equal rights! The Code actually stripped women of legal independence, reducing them to minors subject to fathers and husbands.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Need for uniform, rational legal architecture replacing hundreds of conflicting regional customary laws", "Consolidation of bourgeois revolutionary gains"],
    consequences: [
      "Abolished feudal dues and serfdom in Dutch Republic, Switzerland, Germany, and Italy",
      "Removed guild restrictions in towns; modernized transport and communication networks",
      "Restricted universal suffrage and subordinated women legally to male heads"
    ],
    quickMnemonic: "PEEP: Privileges abolished, Equality before law, Established property rights, Peasant dues eliminated"
  },
  {
    id: "eu_1813_leipzig",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1813",
    numericYear: 1813,
    era: "French Revolution & Napoleonic Era",
    event: "Battle of Leipzig (Battle of the Nations)",
    significance: "Coalition armies of Prussia, Russia, Austria, and Sweden decisively defeated Napoleon in Saxony, shattering French hegemony in Central Europe and forcing Napoleon's retreat.",
    ncertReference: "NCERT History Ch 1, p. 7",
    keyPersonalities: ["Napoleon Bonaparte", "Gebhard von Blücher", "Prince Schwarzenberg"],
    whyCbseAsksThis: "Featured in NCERT caricature: 'The courier of Rhineland loses all that he has in his pack on his way home from Leipzig'.",
    boardTrap: "Confusing the Battle of Leipzig (1813) with Waterloo (1815). Leipzig caused Napoleon's first abdication to Elba.",
    examProbability: "MEDIUM (70%+)",
    causes: ["Disastrous French invasion of Russia (1812) weakening the Grande Armée", "Fourth Coalition uniting major European monarchies"],
    consequences: ["Collapse of Confederation of the Rhine", "Allied march into Paris in 1814 and exile of Napoleon to Elba"]
  },
  {
    id: "eu_1815_vienna",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1815",
    numericYear: 1815,
    era: "Conservative Restoration & Romantic Awakening",
    event: "Defeat of Napoleon at Waterloo & Treaty of Vienna (1815)",
    significance: "Hosted by Austrian Chancellor Duke Metternich. Major European powers (Britain, Russia, Prussia, Austria) redrew the map of Europe to restore the conservative monarchical order and contain France.",
    ncertReference: "NCERT History Ch 1, p. 10-11",
    keyPersonalities: ["Duke Metternich", "Kaiser Francis I", "Tsar Alexander I", "King Frederick William III"],
    whyCbseAsksThis: "CBSE favorite: 'What were the major objectives of the Treaty of Vienna 1815?' (Buffer states around France, Bourbon restoration, Prussian gains on western frontier).",
    boardTrap: "Saying Napoleon's German Confederation of 39 states was dismantled! The Treaty of Vienna left the German Confederation of 39 states untouched.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Final defeat of Napoleon at Waterloo (June 1815) by Wellington and Blücher", "Urge of old dynastic elites to suppress nationalist and democratic insurrections"],
    consequences: [
      "Bourbon dynasty restored to power in France",
      "Kingdom of Netherlands including Belgium created in north; Genoa added to Piedmont in south",
      "Prussia granted important new territories on its western frontier, and Austria given control of northern Italy",
      "Censorship imposed to silence liberal criticism of autocracy"
    ],
    quickMnemonic: "METT: Monarchy restored (Bourbons), Encirclement buffer states, Thirty-nine German states untouched, Territorially compensated powers"
  },
  {
    id: "eu_1821_greek_war",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1821",
    numericYear: 1821,
    era: "Conservative Restoration & Romantic Awakening",
    event: "Greek War of Independence Begins",
    significance: "Greeks mobilized against the Muslim Ottoman Empire, sparking pan-European sympathy among romantic poets and intellectuals who revered Greece as the cradle of European civilisation.",
    ncertReference: "NCERT History Ch 1, p. 13",
    keyPersonalities: ["Lord Byron", "Alexandros Ypsilantis", "Sultan Mahmud II"],
    whyCbseAsksThis: "Highlights how romantic cultural pride sparked an armed struggle against an Islamic imperial state.",
    boardTrap: "Assuming Greece won independence immediately in 1821; the war dragged on for 11 brutal years until the Treaty of Constantinople in 1832.",
    examProbability: "HIGH (85%+)",
    causes: ["Centuries of subjugation under the Ottoman Turkish Empire since the 15th century", "Surge of Romantic nationalist revival connecting ancient Hellenic heritage with modern liberation"],
    consequences: ["Mobilization of European volunteers and financial funds", "Eventual naval intervention by Britain, France, and Russia at the Battle of Navarino (1827)"]
  },
  {
    id: "eu_1824_byron_dies",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1824",
    numericYear: 1824,
    era: "Conservative Restoration & Romantic Awakening",
    event: "English Romantic Poet Lord Byron Dies at Missolonghi",
    significance: "Lord Byron gathered private funds, bought arms, and sailed to Greece to lead volunteer troops against Ottoman armies before dying of malaria/fever at Missolonghi.",
    ncertReference: "NCERT History Ch 1, p. 13",
    keyPersonalities: ["Lord Byron"],
    whyCbseAsksThis: "Used as a classic 1-mark or 2-mark example of how European artists and poets backed the Greek cause.",
    boardTrap: "Writing that Byron died fighting in battle; he died of fever/illness while organizing the campaign at Missolonghi.",
    examProbability: "MEDIUM (70%+)",
    causes: ["Passionate romantic dedication to Greek classical democracy and liberty"],
    consequences: ["Immense wave of moral martyrdom across Britain and Europe, shaming conservative governments into supporting Greece"]
  },
  {
    id: "eu_1830_july_revolution",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "July 1830",
    numericYear: 1830.5,
    era: "Conservative Restoration & Romantic Awakening",
    event: "July Revolution in France Overthrows Bourbon Dynasty",
    significance: "Liberal revolutionaries barricaded Paris streets and overthrew the reactionary Bourbon King Charles X. Installed Louis Philippe as constitutional monarch and proved Metternich's adage: 'When France sneezes, the rest of Europe catches cold.'",
    ncertReference: "NCERT History Ch 1, p. 13",
    keyPersonalities: ["Charles X", "Louis Philippe", "Duke Metternich"],
    whyCbseAsksThis: "Metternich's famous quote: 'When France sneezes, Europe catches cold' — CBSE asks student to contextualize this quote with the July 1830 uprising.",
    boardTrap: "Thinking July 1830 proclaimed a Republic; it installed a Constitutional Monarchy under Louis Philippe.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Repressive ordinances of King Charles X dissolving parliament and muzzling the press"],
    consequences: [
      "Overthrow of Bourbon monarchy; Louis Philippe seated as constitutional king",
      "Sparked the Belgian revolution breaking Belgium away from the United Kingdom of the Netherlands",
      "Inspired the 1831 nationalist insurrection in Poland"
    ]
  },
  {
    id: "eu_1831_young_italy",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1831",
    numericYear: 1831.2,
    era: "Conservative Restoration & Romantic Awakening",
    event: "Giuseppe Mazzini Founds 'Young Italy' in Marseilles",
    significance: "Italian revolutionary Mazzini established the secret society 'Young Italy' (Giovine Italia) to unify the fractured Italian peninsula into a single, indivisible republican nation.",
    ncertReference: "NCERT History Ch 1, p. 12-13",
    keyPersonalities: ["Giuseppe Mazzini", "Duke Metternich"],
    whyCbseAsksThis: "Quote question: Who described Mazzini as 'the most dangerous enemy of our social order'? (Duke Metternich). Also asks for Mazzini's two secret societies.",
    boardTrap: "Mazzini wanted a democratic REPUBLIC, whereas Cavour and Victor Emmanuel II wanted a constitutional MONARCHY under Piedmont.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Failure of the earlier secret Carbonari uprisings in 1831", "Mazzini's conviction that 'God had intended nations to be natural units of mankind'"],
    consequences: [
      "Radicalized youth across Genoa, Lombardy, and Tuscany",
      "Metternich condemned Mazzini as Europe's premier subversive threat"
    ],
    quickMnemonic: "M-MYE: Mazzini founded Marseilles Young Italy, Berne Young Europe"
  },
  {
    id: "eu_1831_polish_rebellion",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1831",
    numericYear: 1831.8,
    era: "Conservative Restoration & Romantic Awakening",
    event: "Armed Rebellion in Poland Against Russian Tsarist Rule",
    significance: "Polish army officers and nationalists revolted against Tsarist autocracy. When Russia brutally crushed the armed uprising, Polish priests weaponized the Polish language in Catholic liturgy as silent resistance.",
    ncertReference: "NCERT History Ch 1, p. 15",
    keyPersonalities: ["Tsar Nicholas I", "Polish Catholic Clergy"],
    whyCbseAsksThis: "Classic question on 'Language as an instrument of national resistance' (Polish priests jailed or exiled to Siberia for refusing to preach in Russian).",
    boardTrap: "Writing that the Polish rebellion succeeded; it was crushed with ruthless severity by Russian armed forces.",
    examProbability: "HIGH (85%+)",
    causes: ["Suppression of Polish constitutional autonomy by Russian Tsars"],
    consequences: ["Russian imposed as official language; Polish clergy deported to Siberia for using Polish"]
  },
  {
    id: "eu_1832_constantinople",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1832",
    numericYear: 1832,
    era: "Conservative Restoration & Romantic Awakening",
    event: "Treaty of Constantinople Recognizes Independent Greece",
    significance: "Formally recognized Greece as an independent sovereign nation state, bringing the 11-year war of independence to a successful conclusion and ending Ottoman suzerainty.",
    ncertReference: "NCERT History Ch 1, p. 13",
    keyPersonalities: ["King Otto of Bavaria (first King of Greece)"],
    whyCbseAsksThis: "Frequent 1-mark objective MCQ: 'Which treaty recognized Greece as an independent nation in 1832?' (Treaty of Constantinople).",
    boardTrap: "Do NOT write Treaty of Vienna or Treaty of Versailles!",
    examProbability: "CRITICAL (95%+)",
    causes: ["Joint British, French, and Russian military and naval interventions against Ottoman-Egyptian forces"],
    consequences: ["International recognition of Greece; installation of Prince Otto of Bavaria as monarch"]
  },
  {
    id: "eu_1833_young_europe",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1833",
    numericYear: 1833,
    era: "Conservative Restoration & Romantic Awakening",
    event: "Mazzini Founds 'Young Europe' in Berne",
    significance: "Established an international federation of republican underground societies in Switzerland, uniting young radicals from Poland, Italy, Germany, and France to overthrow autocracies.",
    ncertReference: "NCERT History Ch 1, p. 12",
    keyPersonalities: ["Giuseppe Mazzini"],
    whyCbseAsksThis: "Pairing question: Young Italy in Marseilles (1831) and Young Europe in Berne (1833).",
    boardTrap: "Swapping the cities: Young Italy was in Marseilles (France); Young Europe was in Berne (Switzerland).",
    examProbability: "HIGH (85%+)",
    causes: ["Need for international revolutionary brotherhood crossing despotic national borders"],
    consequences: ["Spread of underground republican cells across Germany, Poland, and Switzerland"]
  },
  {
    id: "eu_1834_zollverein",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1834",
    numericYear: 1834,
    era: "Conservative Restoration & Romantic Awakening",
    event: "Zollverein (German Customs Union) Established",
    significance: "Initiated by Prussia and joined by most German states. Abolished internal tariff barriers and reduced currencies from over thirty to just two, harnessing economic unity to foster political nationalism.",
    ncertReference: "NCERT History Ch 1, p. 9-10",
    keyPersonalities: ["Friedrich List (Economist)", "Prussian Administrators"],
    whyCbseAsksThis: "High board probability: 'How did the Zollverein create a national economic sentiment?' or quoting Friedrich List on economic unification.",
    boardTrap: "Remember that Austria was deliberately EXCLUDED from the Zollverein; Prussia led it.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Crippling tariff barriers and 30+ separate currencies obstructing trade across 39 German confederation states"],
    consequences: [
      "Abolished internal duties; reduced currencies from over 30 to two",
      "Creation of a unified national economic territory accelerated by railway expansion",
      "Strengthened Prussian economic hegemony over Austrian Habsburgs"
    ],
    quickMnemonic: "Z-2-CT: Zollverein reduced currencies to 2, abolished Customs Tariffs"
  },
  {
    id: "eu_1845_silesian_weavers",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1845",
    numericYear: 1845,
    era: "The Revolutions of 1848",
    event: "Silesian Weavers' Revolt Against Exploitative Contractors",
    significance: "Desperate cotton weavers marched on contractors' mansions demanding fair wages for woven cloth. Mansions were plundered and porcelain smashed. Army called in; 11 weavers shot dead.",
    ncertReference: "NCERT History Ch 1, p. 16",
    keyPersonalities: ["Wilhelm Wolff (Journalist)", "Silesian Contractors"],
    whyCbseAsksThis: "CBSE often cites journalist Wilhelm Wolff's report describing the abject poverty and 18,000 suffering weavers in Silesian villages.",
    boardTrap: "The contractors fled and returned within 24 hours with army backing; it was an economic revolt against contractors, not an anti-monarchical coup.",
    examProbability: "HIGH (85%+)",
    causes: ["Contractors drastically reduced prices of finished cloth, exploiting weavers' desperation"],
    consequences: ["Army intervened with extreme violence, killing 11 weavers; highlighted severe pre-1848 socio-economic crisis"]
  },
  {
    id: "eu_1848_feb_paris",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "February 1848",
    numericYear: 1848.15,
    era: "The Revolutions of 1848",
    event: "Popular Uprising in Paris; French Republic Proclaimed",
    significance: "Severe food shortages and widespread industrial unemployment brought armed barricades to Paris. King Louis Philippe fled into exile; National Assembly declared a Republic, granted male suffrage (>21), and guaranteed the right to work.",
    ncertReference: "NCERT History Ch 1, p. 16",
    keyPersonalities: ["Louis Philippe (deposed)", "French National Assembly"],
    whyCbseAsksThis: "Comparison between 1830 (Constitutional Monarchy) and 1848 (Republic + Universal Adult Male Suffrage).",
    boardTrap: "Suffrage was granted to ALL adult MALES above 21; women were still excluded from political voting rights.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Disastrous potato blight, crop failures, and financial panic of 1846–47"],
    consequences: [
      "Flight of Louis Philippe to England",
      "Proclamation of the Second French Republic",
      "Grant of universal male suffrage (age 21+) and establishment of national workshops"
    ]
  },
  {
    id: "eu_1848_frankfurt",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "18 May 1848",
    numericYear: 1848.38,
    era: "The Revolutions of 1848",
    event: "Frankfurt Parliament Convenes at Church of St. Paul",
    significance: "831 elected German middle-class representatives met in Frankfurt to draft a constitution for a unified German nation headed by a constitutional monarch. The crown was offered to Friedrich Wilhelm IV of Prussia, who spurned it.",
    ncertReference: "NCERT History Ch 1, p. 17-18",
    keyPersonalities: ["King Friedrich Wilhelm IV of Prussia", "German Middle-Class Deputies"],
    whyCbseAsksThis: "Very common 5-mark question: 'Write a short note on the Frankfurt Parliament' — why it was convened, why it collapsed, and the role/status of women as passive spectators in the gallery.",
    boardTrap: "Women were admitted only as observers to stand in the visitors' gallery, even though they participated actively in newspapers and demonstrations.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Middle-class liberal demands for a German nation-state with a constitution, press freedom, and freedom of association"],
    consequences: [
      "Prussian King Friedrich Wilhelm IV rejected the 'crown from the gutter'",
      "Parliament lost peasant support as middle class resisted workers' demands; troops disbanded assembly"
    ],
    quickMnemonic: "831-SP-FW: 831 deputies at St. Paul, refused by Friedrich Wilhelm"
  },
  {
    id: "eu_1859_sardinia_austria",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1859",
    numericYear: 1859,
    era: "Unification of Italy & Germany",
    event: "Sardinia-Piedmont Defeats Austrian Forces",
    significance: "Engineered by Chief Minister Count Camillo de Cavour through a tactical diplomatic alliance with Napoleon III of France. Piedmont routed the Austrian army at Magenta and Solferino, liberating Lombardy.",
    ncertReference: "NCERT History Ch 1, p. 21",
    keyPersonalities: ["Count Camillo de Cavour", "Victor Emmanuel II", "Napoleon III"],
    whyCbseAsksThis: "Assesses Cavour's role: neither a revolutionary nor a democrat, spoke French better than Italian, yet secured unification through calculated diplomacy.",
    boardTrap: "Do NOT describe Cavour as a passionate Italian patriot or republican; he was a pragmatic monarchist diplomat.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Cavour's secretive diplomatic pact with Emperor Napoleon III at Plombières (1858)"],
    consequences: ["Austria ceded Lombardy to Sardinia-Piedmont; sparked central Italian duchies to join Piedmont"]
  },
  {
    id: "eu_1860_garibaldi_thousand",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1860",
    numericYear: 1860,
    era: "Unification of Italy & Germany",
    event: "Garibaldi Leads 'Expedition of the Thousand' (Red Shirts)",
    significance: "Giuseppe Garibaldi and his armed Red Shirt volunteers marched into the Kingdom of the Two Sicilies, rallying local illiterate peasants to drive out the Spanish Bourbon rulers.",
    ncertReference: "NCERT History Ch 1, p. 21",
    keyPersonalities: ["Giuseppe Garibaldi", "Bourbon Monarch of Naples"],
    whyCbseAsksThis: "Humorous NCERT anecdote: Peasant masses in southern Italy thought 'La Talia' was Victor Emmanuel's wife!",
    boardTrap: "Garibaldi handed over all conquered southern territories to King Victor Emmanuel II rather than creating a southern republic.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Popular peasant discontent against feudal Spanish Bourbon despotism in Sicily and Naples"],
    consequences: ["Liberation of Sicily and Naples; complete unification of southern Italy with northern Piedmont"]
  },
  {
    id: "eu_1861_victor_emmanuel",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1861",
    numericYear: 1861,
    era: "Unification of Italy & Germany",
    event: "Victor Emmanuel II Proclaimed King of United Italy",
    significance: "Official proclamation of the unified Kingdom of Italy under the Royal House of Savoy. Though Venetia (1866) and Rome (1870) joined later, Italy was at last an integrated national state.",
    ncertReference: "NCERT History Ch 1, p. 21",
    keyPersonalities: ["Victor Emmanuel II", "Count Cavour"],
    whyCbseAsksThis: "Culmination of 5-mark question: 'Trace the process of Italian Unification' (Mazzini's ideas + Cavour's diplomacy + Garibaldi's armed volunteers + Emmanuel II).",
    boardTrap: "Italy had 7 separate states before unification, and only ONE (Sardinia-Piedmont) was ruled by an Italian princely house!",
    examProbability: "CRITICAL (95%+)",
    causes: ["Confluence of Cavour's northern victories and Garibaldi's southern conquest"],
    consequences: ["Establishment of sovereign Kingdom of Italy with capital initially in Turin, then Florence, finally Rome"]
  },
  {
    id: "eu_1866_1871_german_wars",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1866–1871",
    numericYear: 1868,
    era: "Unification of Italy & Germany",
    event: "Three Wars of German Unification over Seven Years",
    significance: "Prussian Prime Minister Otto von Bismarck ('Blood and Iron') orchestrated three victorious wars against Denmark (1864), Austria (1866), and France (1870–71), systematically forging German unity.",
    ncertReference: "NCERT History Ch 1, p. 19-20",
    keyPersonalities: ["Otto von Bismarck", "General von Moltke", "Kaiser William I"],
    whyCbseAsksThis: "Standard 5-marker: 'Describe the process of German unification under Bismarck's leadership'.",
    boardTrap: "Bismarck did not unify Germany through parliamentary speeches or democratic votes, but through military force and Prussian royal dominance ('Iron and Blood').",
    examProbability: "CRITICAL (95%+)",
    causes: ["Prussia's ambition to dominate Central Europe and exclude the Austrian Habsburg Empire"],
    consequences: ["Defeat of Denmark, expulsion of Austria from German affairs, and crushing collapse of French Second Empire at Sedan (1870)"]
  },
  {
    id: "eu_1871_kaiser_versailles",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "18 January 1871",
    numericYear: 1871.05,
    era: "Unification of Italy & Germany",
    event: "Proclamation of the German Empire in the Hall of Mirrors",
    significance: "In the freezing Hall of Mirrors at the Palace of Versailles, King William I of Prussia was proclaimed German Emperor (Kaiser). Symbolized Prussian dominance in modernizing German banking, currency, and judicial systems.",
    ncertReference: "NCERT History Ch 1, p. 19-20",
    keyPersonalities: ["Kaiser William I", "Otto von Bismarck"],
    whyCbseAsksThis: "Date, location, and key features of new German Empire (Versailles Hall of Mirrors, Prussian dominance, modernization of legal and monetary systems).",
    boardTrap: "Students often write the ceremony took place in Berlin; it deliberately took place in Versailles, France, to humiliate defeated France!",
    examProbability: "CRITICAL (95%+)",
    causes: ["Decisive German victory in the Franco-Prussian War"],
    consequences: [
      "German Empire proclaimed; Prussian administrative, currency, and judicial models adopted nationwide",
      "France forced to cede Alsace-Lorraine and pay 5 billion francs indemnity"
    ],
    quickMnemonic: "V-1871-KW: Versailles 1871 Kaiser William I"
  },
  {
    id: "eu_1871_balkans_conflict",
    chapterKey: "ch1_europe",
    chapterTitle: "The Rise of Nationalism in Europe",
    year: "1871 onwards",
    numericYear: 1875,
    era: "Imperialism & The Balkan Powder Keg",
    event: "Balkan Nationalist Explosions & Great Power Rivalries",
    significance: "The disintegrating Ottoman Empire left the Balkan nationalities (Slavs: Romania, Serbia, Bulgaria, Greece, Bosnia) locked in territorial envy, exploited by Russia, Germany, Britain, and Austria-Hungary, directly triggering World War I in 1914.",
    ncertReference: "NCERT History Ch 1, p. 26-27",
    keyPersonalities: ["Tsar of Russia", "Kaiser Wilhelm II", "Franz Joseph"],
    whyCbseAsksThis: "High-value 3-marker or 5-marker: 'Why did nationalist tensions emerge in the Balkans after 1871?'",
    boardTrap: "The Balkans was explosive not just because of internal ethnic jealousies, but because Great European Powers directly meddled to secure naval routes and colonial influence.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Spread of romantic nationalist ideas coinciding with disintegration of Ottoman Empire"],
    consequences: ["Intense militarization, naval rivalry, arms race, and outbreak of First World War in 1914"]
  },

  // =========================================================================
  // CHAPTER 2: NATIONALISM IN INDIA
  // =========================================================================
  {
    id: "in_1915_gandhi_returns",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "January 1915",
    numericYear: 1915.05,
    era: "Gandhian Return & Early Satyagrahas",
    event: "Mahatma Gandhi Returns to India from South Africa",
    significance: "Gandhiji returned after 21 years with his tested moral technique of Satyagraha — non-violent soul-force which had defeated racist discriminatory registration laws in South Africa.",
    ncertReference: "NCERT History Ch 2, p. 30",
    keyPersonalities: ["Mahatma Gandhi", "Gopal Krishna Gokhale"],
    whyCbseAsksThis: "Definition of 'Satyagraha' according to Mahatma Gandhi (pure truth force, appeal to conscience without ill-will or physical violence).",
    boardTrap: "Satyagraha is NOT 'passive resistance'; Gandhiji explicitly stated it requires intense active moral bravery, not physical weakness.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Completion of legal-political struggle in South Africa against the racist Smuts government"],
    consequences: ["Decision to tour rural India for one year on Gokhale's advice before launching any mass movement"]
  },
  {
    id: "in_1917_champaran",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "1917",
    numericYear: 1917.2,
    era: "Gandhian Return & Early Satyagrahas",
    event: "Champaran Satyagraha in Bihar",
    significance: "Gandhiji's first mass satyagraha on Indian soil. Organized impoverished indigo peasants against European planters exploiting them under the oppressive Tinkathia system.",
    ncertReference: "NCERT History Ch 2, p. 31",
    keyPersonalities: ["Mahatma Gandhi", "Rajkumar Shukla", "Dr. Rajendra Prasad"],
    whyCbseAsksThis: "Map work item: 'A place in Bihar where Gandhiji organized the Satyagraha for Indigo Planters' (Champaran).",
    boardTrap: "Don't confuse Champaran (Indigo peasants, Bihar) with Kheda (Crop failure revenue remission, Gujarat).",
    examProbability: "CRITICAL (95%+)",
    causes: ["Tinkathia system forcing peasants to cultivate indigo on 3/20th of their best land for British landlords"],
    consequences: ["Government appointed an inquiry committee; planters agreed to refund illegal extractions; moral victory for Gandhiji"],
    quickMnemonic: "C-K-A rule: Champaran (Bihar 1917) ➔ Kheda (Peasants 1917) ➔ Ahmedabad (Mill workers 1918)"
  },
  {
    id: "in_1917_kheda",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "1917",
    numericYear: 1917.7,
    era: "Gandhian Return & Early Satyagrahas",
    event: "Kheda Satyagraha in Gujarat",
    significance: "Supported peasants hit by crop failure and bubonic plague epidemic who were unable to pay land revenue and demanded full remission from colonial collectors.",
    ncertReference: "NCERT History Ch 2, p. 31",
    keyPersonalities: ["Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
    whyCbseAsksThis: "Map item: 'Peasant Satyagraha in Gujarat' (Kheda). Also tests young Sardar Patel's emergence as a national organizer.",
    boardTrap: "Kheda was for PEASANT crop failure revenue remission; Ahmedabad was for TEXTILE MILL WORKERS wages.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Crop failure and plague causing distress; colonial government refusing statutory revenue remission"],
    consequences: ["Government issued secret instructions to collect revenue only from those who could afford to pay"]
  },
  {
    id: "in_1918_ahmedabad",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "1918",
    numericYear: 1918.2,
    era: "Gandhian Return & Early Satyagrahas",
    event: "Ahmedabad Mill Workers' Strike in Gujarat",
    significance: "Gandhiji organized cotton textile mill workers demanding a 35% wage hike to cope with wartime inflation. Undertook his first hunger strike, successfully compelling mill owners to concede.",
    ncertReference: "NCERT History Ch 2, p. 31",
    keyPersonalities: ["Mahatma Gandhi", "Anasuya Sarabhai", "Ambalal Sarabhai"],
    whyCbseAsksThis: "Map item: 'A place in Gujarat where Cotton Mill Workers Satyagraha took place' (Ahmedabad).",
    boardTrap: "Workers originally wanted a 50% plague bonus; owners offered 20%; Gandhiji mediated a compromise of exactly 35%.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Withdrawal of wartime plague bonus leading to acute inflation distress among mill laborers"],
    consequences: ["Mill owners agreed to 35% wage increase; established arbitration as a legitimate industrial weapon"]
  },
  {
    id: "in_1919_march_rowlatt",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "March 1919",
    numericYear: 1919.2,
    era: "Rowlatt Black Law & Jallianwala Flashpoint",
    event: "Imperial Legislative Council Enacts the Rowlatt Act",
    significance: "Passed hurriedly despite unanimous opposition by Indian members. Empowered the British colonial police to arrest and detain any political suspect without trial for up to two years.",
    ncertReference: "NCERT History Ch 2, p. 31",
    keyPersonalities: ["Sir Sidney Rowlatt", "Lord Chelmsford"],
    whyCbseAsksThis: "3-mark question: 'Why were Indians outraged by the Rowlatt Act?' (No appeal, no dalil, detention without trial for 2 years).",
    boardTrap: "Indians called it the 'Black Act' (Kala Kanoon), passed through the Imperial Council despite unanimous vote against it by Indian members like Jinnah and Malaviya.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Sedition Committee recommendations under Sir Sidney Rowlatt to crush revolutionary nationalist activities post-WWI"],
    consequences: ["Nationwide indignation uniting moderate, extremist, and Muslim leaders against British rule"]
  },
  {
    id: "in_1919_khilafat_committee",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "March 1919",
    numericYear: 1919.22,
    era: "Rowlatt Black Law & Jallianwala Flashpoint",
    event: "Khilafat Committee Formed in Bombay",
    significance: "Formed by brothers Muhammad Ali and Shaukat Ali (Ali brothers) to protect the temporal and spiritual status of the Ottoman Sultan (Khalifa) following Turkey's defeat in WWI.",
    ncertReference: "NCERT History Ch 2, p. 32",
    keyPersonalities: ["Muhammad Ali", "Shaukat Ali", "Abul Kalam Azad"],
    whyCbseAsksThis: "Explain why Gandhiji supported the Khilafat cause (golden opportunity to forge Hindu-Muslim unity under a united national umbrella).",
    boardTrap: "The Khilafat movement was rooted in the fate of Turkey and the Ottoman Khalifa, but integrated into India's anti-colonial Swaraj struggle.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Fears of harsh dismemberment of the Ottoman Empire by victorious Allied powers in the Treaty of Sèvres"],
    consequences: ["Ali brothers met Gandhiji; groundwork laid for the historic joint Non-Cooperation–Khilafat alliance"]
  },
  {
    id: "in_1919_6april_hartal",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "6 April 1919",
    numericYear: 1919.26,
    era: "Rowlatt Black Law & Jallianwala Flashpoint",
    event: "All-India Rowlatt Hartal Observed",
    significance: "Gandhiji called for a nationwide day of fasting, prayer, and non-violent strike. Shops shut, factories halted, and massive demonstrations erupted across Indian cities.",
    ncertReference: "NCERT History Ch 2, p. 31",
    keyPersonalities: ["Mahatma Gandhi"],
    whyCbseAsksThis: "First truly pan-Indian mass political mobilization across cities and towns.",
    boardTrap: "Gandhiji was barred from entering Delhi and Punjab by British authorities, provoking violent clashes in Delhi and Amritsar.",
    examProbability: "HIGH (85%+)",
    causes: ["Rowlatt Act passing into law"],
    consequences: ["Colonial police opened fire on demonstrators in Delhi and Amritsar; railway and telegraph lines cut"]
  },
  {
    id: "in_1919_10april_amritsar",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "10 April 1919",
    numericYear: 1919.27,
    era: "Rowlatt Black Law & Jallianwala Flashpoint",
    event: "Police Firing on Peaceful Procession in Amritsar",
    significance: "British police fired on a peaceful march demanding the release of popular leaders Dr. Saifuddin Kitchlew and Dr. Satyapal. Enraged crowds attacked banks, post offices, and railway stations; Martial Law was proclaimed under Brigadier-General Dyer.",
    ncertReference: "NCERT History Ch 2, p. 31",
    keyPersonalities: ["Dr. Saifuddin Kitchlew", "Dr. Satyapal", "General Reginald Dyer"],
    whyCbseAsksThis: "Direct prelude to the Jallianwala Bagh massacre; explains why Martial Law was declared.",
    boardTrap: "Many villagers gathered at Jallianwala Bagh three days later (13 April) had come from rural areas and were completely unaware of the Martial Law prohibition!",
    examProbability: "HIGH (85%+)",
    causes: ["Arrest and deportation of beloved Amritsar leaders Dr. Kitchlew and Dr. Satyapal"],
    consequences: ["Martial law imposed; General Dyer assumed military command of Amritsar"]
  },
  {
    id: "in_1919_13april_jallianwala",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "13 April 1919",
    numericYear: 1919.28,
    era: "Rowlatt Black Law & Jallianwala Flashpoint",
    event: "Jallianwala Bagh Massacre at Amritsar",
    significance: "Dyer blocked all narrow exit passages of the walled garden and ordered troops to open fire without warning on thousands of unarmed men, women, and children attending the annual Baisakhi fair. Hundreds slaughtered. Dyer stated his intent was to 'produce a moral effect and strike terror'.",
    ncertReference: "NCERT History Ch 2, p. 31-32",
    keyPersonalities: ["Brigadier-General Reginald Dyer", "Rabindranath Tagore"],
    whyCbseAsksThis: "Extremely high frequency (5-mark or map work): 'Explain the Jallianwala Bagh massacre and its impact on the national movement' / Rabindranath Tagore renouncing his Knighthood.",
    boardTrap: "Map Work: Amritsar is in PUNJAB, not Haryana or UP. Tagore renounced his British KNIGHTHOOD (not Nobel prize).",
    examProbability: "CRITICAL (95%+)",
    causes: ["Peaceful gathering protesting Rowlatt Act arrests combined with rural visitors celebrating Baisakhi festival"],
    consequences: [
      "Hundreds murdered and over a thousand wounded in cold blood",
      "Brutal crawl-orders, public floggings, and bombing of villages in Punjab",
      "Rabindranath Tagore renounced his British Knighthood in moral outrage",
      "Gandhiji felt a deep need for a much wider mass movement: Non-Cooperation"
    ],
    quickMnemonic: "13-A-TAG: 13 April, Amritsar, Tagore renounced Knighthood"
  },
  {
    id: "in_1920_sept_calcutta",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "September 1920",
    numericYear: 1920.7,
    era: "Rowlatt Black Law & Jallianwala Flashpoint",
    event: "Calcutta Special Session of Indian National Congress",
    significance: "Gandhiji convinced senior Congress leaders that launching a Non-Cooperation Movement was imperative in support of the Khilafat cause as well as for Swaraj.",
    ncertReference: "NCERT History Ch 2, p. 32",
    keyPersonalities: ["Mahatma Gandhi", "Lala Lajpat Rai (President)"],
    whyCbseAsksThis: "Map work item: 'The Congress session held in September 1920' (Calcutta / Kolkata, West Bengal).",
    boardTrap: "Do NOT confuse Calcutta (September 1920 - Proposal introduced) with Nagpur (December 1920 - Programme formally ratified)!",
    examProbability: "CRITICAL (95%+)",
    causes: ["Twin imperial atrocities: Jallianwala Bagh massacre and Khilafat betrayal"],
    consequences: ["Resolution passed to adopt the non-violent Non-Cooperation movement leading to Swaraj"]
  },
  {
    id: "in_1920_oct_oudh_kisan",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "October 1920",
    numericYear: 1920.78,
    era: "Non-Cooperation Movement Across Strata",
    event: "Oudh Kisan Sabha Formed in Awadh",
    significance: "Organized by Jawaharlal Nehru, Baba Ramchandra (indentured laborer returned from Fiji), and others. Within a month, over 300 village branches mushroomed across Awadh to combat talukdar exploitation.",
    ncertReference: "NCERT History Ch 2, p. 35",
    keyPersonalities: ["Baba Ramchandra", "Jawaharlal Nehru"],
    whyCbseAsksThis: "3-marker on 'How did the peasant movement in Awadh develop?' (Nai-dhobi bandhs, reduction of revenue, abolition of begar).",
    boardTrap: "Peasants in Awadh used the slogan of 'Gandhi Raj' to justify attacking talukdars' houses and looting grain hoards, which saddened Congress leaders.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Exorbitantly high rents, begar (forced labor without wage), and illegal cesses levied by talukdars"],
    consequences: ["300+ grassroots peasant committees created; Nai-Dhobi bandhs organized to deny feudal landlords basic services"]
  },
  {
    id: "in_1920_dec_nagpur",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "December 1920",
    numericYear: 1920.95,
    era: "Non-Cooperation Movement Across Strata",
    event: "Nagpur Session of Congress Ratifies Non-Cooperation",
    significance: "Intense debate between compromise factions ended in unanimous adoption. The Non-Cooperation programme was officially ratified and launched nationwide.",
    ncertReference: "NCERT History Ch 2, p. 32",
    keyPersonalities: ["Mahatma Gandhi", "C. Vijayaraghavachariar (President)", "C.R. Das"],
    whyCbseAsksThis: "Map work item: 'The place where Indian National Congress session was held in December 1920' (Nagpur, Maharashtra).",
    boardTrap: "September 1920 = Calcutta (West Bengal); December 1920 = Nagpur (Maharashtra). Both are mandatory CBSE map points!",
    examProbability: "CRITICAL (95%+)",
    causes: ["Resolution of factional differences over boycott of upcoming legislative council elections"],
    consequences: ["Formal launch of nationwide Non-Cooperation–Khilafat movement"]
  },
  {
    id: "in_1921_jan_ncm_launched",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "January 1921",
    numericYear: 1921.05,
    era: "Non-Cooperation Movement Across Strata",
    event: "Non-Cooperation–Khilafat Movement Launched Nationwide",
    significance: "Massive participation across Indian society: thousands of students left government schools, lawyers boycotted courts, titles surrendered, foreign cloth boycotted and burned. Foreign cloth imports halved from Rs 102 crore to Rs 57 crore.",
    ncertReference: "NCERT History Ch 2, p. 33-34",
    keyPersonalities: ["Mahatma Gandhi", "Motilal Nehru", "C.R. Das"],
    whyCbseAsksThis: "5-mark question: 'How did Non-Cooperation unfold in towns?' and 'Why did it gradually slow down in cities?' (Khadi was expensive, lack of alternative Indian institutions).",
    boardTrap: "Council elections were boycotted in most provinces, EXCEPT Madras, where the Justice Party (non-Brahmins) contested to gain political power.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Nagpur Congress decision to boycott all colonial institutions and foreign goods"],
    consequences: [
      "Economic boycott halved British textile imports (Rs 102 Cr to Rs 57 Cr)",
      "Picketing of liquor shops caused massive loss of excise revenue for the government",
      "Movement slowed down in cities because Khadi was costly for the poor and alternative schools/courts took too long to build"
    ],
    quickMnemonic: "BOY-COTT: Boycott titles, Outlaw foreign cloth, Yield no court attendance, Teach in national schools"
  },
  {
    id: "in_1921_alluri_gudem",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "1921",
    numericYear: 1921.4,
    era: "Non-Cooperation Movement Across Strata",
    event: "Alluri Sitaram Raju Leads Gudem Hills Tribal Guerrilla War",
    significance: "Tribal peasants in the Gudem Hills of Andhra Pradesh rose in armed guerrilla warfare against colonial forest acts that enclosed forests and barred cattle grazing. Raju claimed supernatural healing and bulletproof abilities.",
    ncertReference: "NCERT History Ch 2, p. 35-36",
    keyPersonalities: ["Alluri Sitaram Raju"],
    whyCbseAsksThis: "3-marker or 5-marker: 'Describe the role of Alluri Sitaram Raju in Andhra Pradesh' — admired Gandhi, advocated khadi and sobriety, yet insisted India could only be freed through force.",
    boardTrap: "Raju praised Gandhiji and persuaded tribals to wear Khadi and give up drinking, BUT he broke with Gandhi's non-violence by asserting that force was essential.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Colonial forest laws preventing tribals from entering reserved forests to graze cattle or collect fuelwood, plus forced begar for road building"],
    consequences: ["Guerrilla attacks on police stations, attempted killings of British officials, and Raju's capture in 1924"]
  },
  {
    id: "in_1921_assam_plantations",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "1921",
    numericYear: 1921.6,
    era: "Non-Cooperation Movement Across Strata",
    event: "Plantation Workers Revolt in Assam",
    significance: "Under the Inland Emigration Act of 1859, tea garden workers were barred from leaving without permission. Believing 'Gandhi Raj' was coming, thousands defied authorities, left plantations, but were stranded by rail/steamer strikes and brutally beaten by police.",
    ncertReference: "NCERT History Ch 2, p. 36",
    keyPersonalities: ["Assam Tea Garden Laborers"],
    whyCbseAsksThis: "Question on 'What did Swaraj mean to plantation workers in Assam?' (Right to move freely and retaining connection with village).",
    boardTrap: "Remember the specific colonial statute: 'Inland Emigration Act of 1859'. Mentioning this law guarantees full board marks!",
    examProbability: "HIGH (85%+)",
    causes: ["Inland Emigration Act of 1859 confining workers to plantations under prison-like conditions"],
    consequences: ["Mass walkouts; brutal police lathi-charge at stranded steamer stations"]
  },
  {
    id: "in_1922_chauri_chaura",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "4 February 1922",
    numericYear: 1922.09,
    era: "Non-Cooperation Movement Across Strata",
    event: "Chauri Chaura Violence in Gorakhpur, UP",
    significance: "A peaceful procession was fired upon by police. Enraged villagers attacked and torched the police station, burning 22 policemen alive. Mahatma Gandhi instantly suspended the entire Non-Cooperation Movement.",
    ncertReference: "NCERT History Ch 2, p. 38",
    keyPersonalities: ["Mahatma Gandhi"],
    whyCbseAsksThis: "Map work item: 'A place in UP where the Non-Cooperation Movement was called off due to violence' (Chauri Chaura, Gorakhpur, Uttar Pradesh).",
    boardTrap: "Do NOT write that Gandhiji called off Civil Disobedience here! It was NON-COOPERATION that was called off in 1922. Civil Disobedience was called off in 1931 by Gandhi-Irwin Pact.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Police firing on a peaceful crowd picketing alcohol and meat markets"],
    consequences: [
      "22 policemen killed in burned station",
      "Gandhiji called off Non-Cooperation on 12 February 1922 at Bardoli",
      "Younger leaders (Nehru, Subhas Bose) dismayed; Gandhiji arrested and jailed for 6 years"
    ],
    quickMnemonic: "CC-1922-OFF: Chauri Chaura 1922 turned off Non-Cooperation"
  },
  {
    id: "in_1923_swaraj_party",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "1 January 1923",
    numericYear: 1923.01,
    era: "Swaraj Party, Simon Boycott & Purna Swaraj",
    event: "Swaraj Party Formed Within Congress",
    significance: "Chitta Ranjan Das and Motilal Nehru formed the Swaraj Party to contest provincial council elections and wreck British policies from within the legislature, while young leaders (Nehru, Bose) pushed for full independence.",
    ncertReference: "NCERT History Ch 2, p. 38",
    keyPersonalities: ["C.R. Das (President)", "Motilal Nehru (Secretary)"],
    whyCbseAsksThis: "Why was the Swaraj Party formed and by whom? (C.R. Das and Motilal Nehru to oppose colonial bills inside legislative councils).",
    boardTrap: "The Swaraj Party did NOT break away to form a hostile separate party; it functioned within the Congress fold.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Lull and depression following the sudden withdrawal of Non-Cooperation"],
    consequences: ["Electoral success in 1923 elections; exposed bureaucratic sham of Montagu-Chelmsford reforms"]
  },
  {
    id: "in_1924_raju_executed",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "May 1924",
    numericYear: 1924.38,
    era: "Swaraj Party, Simon Boycott & Purna Swaraj",
    event: "Alluri Sitaram Raju Captured and Executed",
    significance: "After nearly three years of guerrilla warfare in Andhra's eastern ghats, British forces captured Raju. He was tied to a tree and shot, becoming an enduring folk hero of Indian tribal resistance.",
    ncertReference: "NCERT History Ch 2, p. 36",
    keyPersonalities: ["Alluri Sitaram Raju"],
    whyCbseAsksThis: "Final outcome of tribal movement in Gudem Hills.",
    boardTrap: "Raju was captured and executed by the British, but his legend persisted in folklore as a martyr.",
    examProbability: "MEDIUM (70%+)",
    causes: ["Colonial police deploying specialized Assam Rifles to trap Gudem hill fighters"],
    consequences: ["End of armed tribal insurrection in Gudem Hills; Raju immortalized in Andhra folklore"]
  },
  {
    id: "in_1927_simon_appointed",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "1927",
    numericYear: 1927.8,
    era: "Swaraj Party, Simon Boycott & Purna Swaraj",
    event: "Simon Commission Appointed in Britain",
    significance: "The British Tory government appointed a 7-member Statutory Commission headed by Sir John Simon to review India's constitutional progress. It did not have a single Indian member.",
    ncertReference: "NCERT History Ch 2, p. 38",
    keyPersonalities: ["Sir John Simon", "Lord Birkenhead"],
    whyCbseAsksThis: "1-mark / 3-mark question: 'Why was the Simon Commission boycotted by Indians?' (All-white commission with zero Indian members to decide India's future).",
    boardTrap: "The Commission was appointed in Britain in 1927, but ARRIVED in India in 1928!",
    examProbability: "CRITICAL (95%+)",
    causes: ["Tory fear of losing British elections to the Labour Party prompted early dispatch of constitutional commission"],
    consequences: ["Unanimous outrage uniting Congress, Muslim League, and Hindu Mahasabha in boycott"]
  },
  {
    id: "in_1927_madras_session",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "December 1927",
    numericYear: 1927.95,
    era: "Swaraj Party, Simon Boycott & Purna Swaraj",
    event: "Madras Session of Indian National Congress",
    significance: "Presided over by Dr. M.A. Ansari. Unanimously resolved to boycott the Simon Commission 'at each stage and in every form'.",
    ncertReference: "NCERT History Ch 2, p. 38",
    keyPersonalities: ["Dr. M.A. Ansari", "Jawaharlal Nehru"],
    whyCbseAsksThis: "Official Congress resolution committing to full boycott of Simon Commission.",
    boardTrap: "Do not confuse with Lahore 1929 session.",
    examProbability: "MEDIUM (70%+)",
    causes: ["All-white composition of the Simon Commission"],
    consequences: ["National boycott pledge adopted across all regional Congress branches"]
  },
  {
    id: "in_1928_simon_arrives",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "February 1928",
    numericYear: 1928.1,
    era: "Swaraj Party, Simon Boycott & Purna Swaraj",
    event: "Simon Commission Arrives in India; 'Go Back Simon'",
    significance: "Greeted across Bombay, Delhi, and Lahore with black flags and thunderous chants of 'Go Back Simon'. Lala Lajpat Rai was brutally assaulted in a police lathi charge at Lahore and later died of his head injuries.",
    ncertReference: "NCERT History Ch 2, p. 38",
    keyPersonalities: ["Sir John Simon", "Lala Lajpat Rai", "James A. Scott (Police SP)"],
    whyCbseAsksThis: "High yield: 'Explain the circumstances surrounding the Simon Commission's arrival' / Martyrdom of Lala Lajpat Rai.",
    boardTrap: "Lajpat Rai's famous dying words: 'Every blow struck on my body will prove a nail in the coffin of the British Empire'.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Arrival of Simon Commission at Bombay port in February 1928"],
    consequences: [
      "Countrywide black-flag demonstrations",
      "Lathi charge in Lahore causing death of Lala Lajpat Rai on 17 November 1928",
      "Bhagat Singh and revolutionaries retaliated by assassinating Saunders in Lahore"
    ]
  },
  {
    id: "in_1929_oct_irwin_offer",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "October 1929",
    numericYear: 1929.75,
    era: "Swaraj Party, Simon Boycott & Purna Swaraj",
    event: "Viceroy Lord Irwin Offers Vague 'Dominion Status'",
    significance: "To pacify mounting unrest, Viceroy Irwin announced a vague offer of 'dominion status' in an unspecified future and a Round Table Conference in London. Radical leaders (Nehru, Subhas Bose) rejected the trap.",
    ncertReference: "NCERT History Ch 2, p. 38",
    keyPersonalities: ["Lord Irwin", "Jawaharlal Nehru", "Subhas Chandra Bose"],
    whyCbseAsksThis: "Shows why Congress escalated from dominion status to demanding Complete Independence.",
    boardTrap: "Irwin gave no timeline or date for when 'dominion status' would be granted.",
    examProbability: "HIGH (85%+)",
    causes: ["Growing political agitation and revolutionary strikes in late 1929"],
    consequences: ["Radical young leaders gained dominance at the upcoming Lahore Congress"]
  },
  {
    id: "in_1929_dec_lahore_purna_swaraj",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "December 1929",
    numericYear: 1929.98,
    era: "Swaraj Party, Simon Boycott & Purna Swaraj",
    event: "Lahore Congress Declares 'Purna Swaraj' (Complete Independence)",
    significance: "Presided over by Jawaharlal Nehru on the banks of River Ravi. Passed the historic resolution declaring 'Purna Swaraj' (Complete Independence) as the sole national goal. Declared 26 January 1930 as Independence Day.",
    ncertReference: "NCERT History Ch 2, p. 39",
    keyPersonalities: ["Jawaharlal Nehru", "Mahatma Gandhi"],
    whyCbseAsksThis: "Super high frequency: 'Under whose presidency was the Lahore Congress session held, and what was its significance?' / Why 26 January was later chosen for Republic Day.",
    boardTrap: "Presided over by JAWAHARLAL NEHRU, not Mahatma Gandhi or Motilal Nehru! Map item: Lahore (now in Pakistan).",
    examProbability: "CRITICAL (95%+)",
    causes: ["Rejection of vague British dominion status offers and escalating youth demand for sovereign liberation"],
    consequences: [
      "Adoption of 'Purna Swaraj' as official Congress creed",
      "Pledge taken on 26 January 1930 to struggle for total independence",
      "Authorized Gandhiji to launch Civil Disobedience"
    ],
    quickMnemonic: "L-29-JN-PS: Lahore 1929 Jawaharlal Nehru Purna Swaraj"
  },
  {
    id: "in_1930_31jan_eleven_demands",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "31 January 1930",
    numericYear: 1930.08,
    era: "Salt March & Civil Disobedience Movement",
    event: "Gandhiji Sends 11 Demands Ultimatum to Viceroy Irwin",
    significance: "Included abolition of the salt tax (which affected rich and poor equally), reduction of land revenue by 50%, protective tariffs on foreign textiles, and release of political prisoners. Ultimatum expired on 11 March.",
    ncertReference: "NCERT History Ch 2, p. 39",
    keyPersonalities: ["Mahatma Gandhi", "Lord Irwin"],
    whyCbseAsksThis: "Why did Gandhiji choose SALT as the central symbol of unity? (Salt was consumed by every human, British tax and state monopoly was the most oppressive face of colonial rule).",
    boardTrap: "The letter had 11 specific demands ranging from industrial capitalists' interests to poor peasants' basic needs.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Need for a universal tangible symbol to unite all classes in a new national movement"],
    consequences: ["Lord Irwin refused to negotiate; Gandhiji launched the Dandi March on 12 March 1930"]
  },
  {
    id: "in_1930_dandi_march",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "12 March – 6 April 1930",
    numericYear: 1930.25,
    era: "Salt March & Civil Disobedience Movement",
    event: "The Historic Dandi Salt March (Civil Disobedience Begins)",
    significance: "Gandhiji marched 240 miles with 78 trusted volunteers from Sabarmati Ashram to the coastal town of Dandi in 24 days. On 6 April, he picked up a lump of natural salt, formally breaking the British salt monopoly and igniting the Civil Disobedience Movement nationwide.",
    ncertReference: "NCERT History Ch 2, p. 39-40",
    keyPersonalities: ["Mahatma Gandhi", "Sarojini Naidu"],
    whyCbseAsksThis: "Core 5-mark question and map point: Sabarmati Ashram (Start) and Dandi (Finish) in Gujarat. Difference between Non-Cooperation (refusing cooperation) and Civil Disobedience (actively breaking colonial laws).",
    boardTrap: "March length: 240 miles (about 385 km) over 24 days (10 miles per day) with 78 volunteers. Salt was broken on the morning of 6 APRIL.",
    examProbability: "CRITICAL (95%+)",
    causes: ["British refusal to concede the 11 Demands and the oppressive tax on an essential dietary necessity"],
    consequences: [
      "Inaugurated countrywide Civil Disobedience: manufacturing contraband salt, refusal to pay chowkidari tax, defying forest laws",
      "Over 60,000 to 100,000 satyagrahis arrested across India",
      "Salt satyagraha launched at Vedaranyam (C. Rajagopalachari) and Dharsana (Sarojini Naidu)"
    ],
    quickMnemonic: "240-78-24-6A: 240 miles, 78 volunteers, 24 days, 6 April"
  },
  {
    id: "in_1930_april_ghaffar_khan",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "April 1930",
    numericYear: 1930.3,
    era: "Salt March & Civil Disobedience Movement",
    event: "Khan Abdul Ghaffar Khan Arrested in Peshawar",
    significance: "Affectionately called 'Frontier Gandhi', leader of the non-violent Khudai Khidmatgars ('Red Shirts'). His arrest triggered massive demonstrations; an armored car was burned and unarmed crowds faced armored bullets.",
    ncertReference: "NCERT History Ch 2, p. 40",
    keyPersonalities: ["Khan Abdul Ghaffar Khan ('Frontier Gandhi')"],
    whyCbseAsksThis: "Highlights Muslim non-violent participation in the North-West Frontier Province (NWFP).",
    boardTrap: "Garhwal soldiers refused to fire upon unarmed crowds in Peshawar, demonstrating military sympathy with satyagrahis.",
    examProbability: "HIGH (85%+)",
    causes: ["Peshawar mobilization under Khudai Khidmatgars defying colonial prohibitory orders"],
    consequences: ["Armored car attacks and mass firings in Peshawar; demonstrated profound commitment to non-violence"]
  },
  {
    id: "in_1930_may_gandhi_arrested",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "May 1930",
    numericYear: 1930.38,
    era: "Salt March & Civil Disobedience Movement",
    event: "Mahatma Gandhi Arrested at Karadi near Dandi",
    significance: "Gandhiji was taken to Yerwada Jail in Poona. Triggered industrial textile workers in Sholapur to attack police stations, law courts, and municipal buildings. Colonial state responded with brutal crackdowns and 100,000 arrests.",
    ncertReference: "NCERT History Ch 2, p. 40",
    keyPersonalities: ["Mahatma Gandhi", "Sholapur Industrial Workers"],
    whyCbseAsksThis: "Shows the escalating popular response to Gandhiji's incarceration and the imposition of brutal emergency ordinances.",
    boardTrap: "Sholapur workers set up a virtual parallel town government for several days before martial law crushed it.",
    examProbability: "HIGH (85%+)",
    causes: ["Gandhiji planning to raid the Dharsana Salt Works"],
    consequences: ["100,000 satyagrahis arrested; women and children beaten; international condemnation of British brutality"]
  },
  {
    id: "in_1931_5march_gandhi_irwin",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "5 March 1931",
    numericYear: 1931.18,
    era: "Salt March & Civil Disobedience Movement",
    event: "Gandhi-Irwin Pact Signed; Civil Disobedience Suspended",
    significance: "Gandhiji agreed to suspend the Civil Disobedience Movement and participate in the Second Round Table Conference in London. In return, Viceroy Irwin agreed to release non-violent political prisoners and permit coastal salt gathering.",
    ncertReference: "NCERT History Ch 2, p. 41",
    keyPersonalities: ["Mahatma Gandhi", "Lord Irwin"],
    whyCbseAsksThis: "3-mark question: 'State the terms of the Gandhi-Irwin Pact of March 1931'.",
    boardTrap: "Bhagat Singh, Rajguru, and Sukhdev were NOT spared by the pact and were executed on 23 March 1931, causing deep popular resentment among Indian youth.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Deadlock between massive civil resistance and state repression"],
    consequences: [
      "Civil Disobedience Movement suspended",
      "Congress agreed to attend Second Round Table Conference in London",
      "British released peaceful political prisoners and allowed coastal salt making"
    ],
    quickMnemonic: "GI-31: Gandhi-Irwin 1931 suspended Civil Disobedience"
  },
  {
    id: "in_1931_dec_round_table_fails",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "December 1931",
    numericYear: 1931.95,
    era: "Salt March & Civil Disobedience Movement",
    event: "Second Round Table Conference in London Collapses",
    significance: "Negotiations broke down over minority separate electorates and British refusal to grant responsible federal Swaraj. Gandhiji returned to Bombay empty-handed to find Nehru and Ghaffar Khan jailed, Congress outlawed, and harsh ordinances re-imposed.",
    ncertReference: "NCERT History Ch 2, p. 41",
    keyPersonalities: ["Mahatma Gandhi", "Ramsay MacDonald", "Dr. B.R. Ambedkar"],
    whyCbseAsksThis: "Explains why Gandhiji had to relaunch the Civil Disobedience Movement in 1932.",
    boardTrap: "Congress only attended the SECOND Round Table Conference (1931); it boycotted the First (1930) and Third (1932).",
    examProbability: "CRITICAL (95%+)",
    causes: ["British imperial divide-and-rule strategy exploiting minority demands for separate electorates"],
    consequences: ["Gandhiji returned empty-handed; colonial state unleashed brutal pre-emptive repression"]
  },
  {
    id: "in_1932_cdm_relaunched",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "January 1932",
    numericYear: 1932.05,
    era: "Salt March & Civil Disobedience Movement",
    event: "Civil Disobedience Movement Relaunched",
    significance: "Gandhiji resumed the movement, but it lacked the fresh euphoria of 1930. Rich peasants (Patidars, Jats) and big merchant groups, disappointed by the 1931 suspension without tax concessions, were reluctant to rejoin.",
    ncertReference: "NCERT History Ch 2, p. 41-42",
    keyPersonalities: ["Mahatma Gandhi", "Rich Peasants (Patidars & Jats)"],
    whyCbseAsksThis: "Why did the rich peasant communities refuse to support the movement when it was restarted in 1932? (Called off in 1931 without lowering revenue rates).",
    boardTrap: "Industrialists also withdrew because they were frightened by militant workers' strikes and prolonged business disruptions.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Colonial betrayal of Gandhi-Irwin pact and renewed mass arrests"],
    consequences: ["Declining enthusiasm among propertied classes; movement gradually sputtered out by 1934"]
  },
  {
    id: "in_1932_poona_pact",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "September 1932",
    numericYear: 1932.72,
    era: "Salt March & Civil Disobedience Movement",
    event: "Poona Pact Signed Between Gandhiji and Dr. B.R. Ambedkar",
    significance: "Signed in Yerwada Central Jail after Gandhiji commenced a fast unto death against the British Communal Award granting separate electorates for Dalits. Dr. Ambedkar agreed to unified joint electorates in exchange for reserved legislative seats for the Depressed Classes.",
    ncertReference: "NCERT History Ch 2, p. 43",
    keyPersonalities: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Madan Mohan Malaviya"],
    whyCbseAsksThis: "High-value 3-mark question: 'What was the Poona Pact? State its major provisions'.",
    boardTrap: "Ambedkar agreed to abandon SEPARATE electorates, in exchange for RESERVED SEATS within the General Joint Electorate (148 seats vs 71 seats in Communal Award).",
    examProbability: "CRITICAL (95%+)",
    causes: ["British Communal Award announced by Ramsay MacDonald granting separate electorates to Depressed Classes"],
    consequences: [
      "Depressed Classes granted reserved seats in provincial and central legislatures",
      "Voting took place through joint electorates, preventing statutory separation of Dalits from Hindu society",
      "Foundation laid for modern constitutional reservations"
    ],
    quickMnemonic: "POONA: Pact Overcomes Oppressive Numerical Award (Ambedkar + Gandhi)"
  },
  {
    id: "in_1934_cdm_withdrawn",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "May 1934",
    numericYear: 1934.35,
    era: "Salt March & Civil Disobedience Movement",
    event: "Civil Disobedience Movement Officially Withdrawn",
    significance: "Facing organizational exhaustion and lack of business backing, the All-India Congress Committee officially terminated Civil Disobedience to re-enter constitutional politics under the Government of India Act 1935.",
    ncertReference: "NCERT History Ch 2, p. 42",
    keyPersonalities: ["Mahatma Gandhi", "Congress Working Committee"],
    whyCbseAsksThis: "End of the Civil Disobedience era.",
    boardTrap: "Students often write CDM ended in 1931 with the Gandhi-Irwin Pact; it was only SUSPENDED in 1931 and officially ENDED in 1934.",
    examProbability: "HIGH (85%+)",
    causes: ["General exhaustion of mass participation after 4 years of intense colonial repression"],
    consequences: ["Congress prepared for 1937 provincial legislative elections under GoI Act 1935"]
  },
  {
    id: "in_1942_quit_india",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "August 1942",
    numericYear: 1942.6,
    era: "Quit India & Final Freedom Dawn",
    event: "Quit India Movement Launched ('Do or Die')",
    significance: "All-India Congress Committee convened at Gowalia Tank, Bombay. Gandhiji delivered his historic call: 'Do or Die' (Karo ya Maro). Demanded an immediate, orderly British withdrawal from India.",
    ncertReference: "NCERT History Ch 2, p. 46",
    keyPersonalities: ["Mahatma Gandhi", "Aruna Asaf Ali", "Jayaprakash Narayan", "Ram Manohar Lohia"],
    whyCbseAsksThis: "Very common 3-mark or 5-mark question in new NCERT syllabus: 'Explain the importance of the Quit India Movement' / 'Do or Die' clarion call.",
    boardTrap: "All top leaders were arrested within hours on 9 August 1942; the movement was carried on by young underground socialists and ordinary village people!",
    examProbability: "CRITICAL (95%+)",
    causes: ["Failure of the Cripps Mission in 1942 and Japanese threat on India's eastern borders"],
    consequences: [
      "Parallel national governments (Prati Sarkar) established in Ballia, Midnapore, and Satara",
      "Massive strikes, destruction of railway tracks and government buildings",
      "Decisive signal to the British Empire that colonial rule was untenable"
    ],
    quickMnemonic: "Q-42-DOD: Quit India 1942 Do or Die"
  },
  {
    id: "in_1947_independence",
    chapterKey: "ch2_india",
    chapterTitle: "Nationalism in India",
    year: "15 August 1947",
    numericYear: 1947.62,
    era: "Quit India & Final Freedom Dawn",
    event: "India Achieves Independence",
    significance: "British colonial rule ended after nearly two centuries. Jawaharlal Nehru delivered his immortal 'Tryst with Destiny' address as the Indian tricolour was unfurled at the Red Fort.",
    ncertReference: "NCERT History Ch 2, p. 46",
    keyPersonalities: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Mahatma Gandhi", "Lord Mountbatten"],
    whyCbseAsksThis: "Culmination of India's long freedom struggle through non-violence and mass mobilization.",
    boardTrap: "Independence came with the tragic and bloody Partition of India and Pakistan; Gandhiji spent the day fasting and praying for communal peace in Calcutta.",
    examProbability: "CRITICAL (95%+)",
    causes: ["Post-WWII British economic ruin, Indian National Army trials, Royal Indian Navy mutiny, and uncontainable mass resistance"],
    consequences: ["Birth of sovereign democratic Republic of India"]
  }
];

// =========================================================================
// PRE-BUILT CHRONOLOGY CHALLENGE SETS FOR GAME TRAINER
// Official CBSE Board question pattern: "Arrange the following in chronological order"
// =========================================================================
export interface ChronologyChallengeSet {
  id: string;
  chapterKey: "ch1_europe" | "ch2_india";
  title: string;
  difficulty: "Foundation (Standard)" | "Intermediate (High Yield)" | "Topper Level (Tricky)";
  eventIds: string[]; // 4 to 5 event IDs in correct chronological order
  cbseTip: string;
}

export const CHRONOLOGY_CHALLENGES: ChronologyChallengeSet[] = [
  {
    id: "chal_in_1",
    chapterKey: "ch2_india",
    title: "The Gandhian Satyagraha Trio (1917–1918)",
    difficulty: "Foundation (Standard)",
    eventIds: ["in_1917_champaran", "in_1917_kheda", "in_1918_ahmedabad", "in_1919_march_rowlatt"],
    cbseTip: "Remember the CAK rule: Champaran (Bihar Indigo) ➔ Kheda (Peasant crop failure) ➔ Ahmedabad (Textile mill strike) ➔ Rowlatt Act."
  },
  {
    id: "chal_in_2",
    chapterKey: "ch2_india",
    title: "The 1919 Calamities & Congress Sessions",
    difficulty: "Intermediate (High Yield)",
    eventIds: ["in_1919_march_rowlatt", "in_1919_13april_jallianwala", "in_1920_sept_calcutta", "in_1920_dec_nagpur"],
    cbseTip: "Calcutta session (September 1920) proposed Non-Cooperation; Nagpur session (December 1920) ratified it!"
  },
  {
    id: "chal_in_3",
    chapterKey: "ch2_india",
    title: "Non-Cooperation to Swaraj Discontent",
    difficulty: "Intermediate (High Yield)",
    eventIds: ["in_1921_jan_ncm_launched", "in_1922_chauri_chaura", "in_1923_swaraj_party", "in_1928_simon_arrives"],
    cbseTip: "Chauri Chaura occurred in February 1922; C.R. Das & Motilal Nehru launched the Swaraj Party on 1 January 1923."
  },
  {
    id: "chal_in_4",
    chapterKey: "ch2_india",
    title: "The Road to Civil Disobedience (1928–1930)",
    difficulty: "Topper Level (Tricky)",
    eventIds: ["in_1928_simon_arrives", "in_1929_dec_lahore_purna_swaraj", "in_1930_31jan_eleven_demands", "in_1930_dandi_march"],
    cbseTip: "Lahore Purna Swaraj (Dec 1929) ➔ 11 Demands Letter (Jan 1930) ➔ Dandi March begins (12 March 1930)."
  },
  {
    id: "chal_in_5",
    chapterKey: "ch2_india",
    title: "Round Tables & Poona Resolution (1930–1934)",
    difficulty: "Topper Level (Tricky)",
    eventIds: ["in_1930_dandi_march", "in_1931_5march_gandhi_irwin", "in_1931_dec_round_table_fails", "in_1932_poona_pact"],
    cbseTip: "Gandhi-Irwin pact signed in March 1931; London RTC collapsed in Dec 1931; Poona Pact signed in Sept 1932 in Yerwada Jail."
  },
  {
    id: "chal_eu_1",
    chapterKey: "ch1_europe",
    title: "Napoleonic Rise & Fall (1789–1815)",
    difficulty: "Foundation (Standard)",
    eventIds: ["eu_1789_french_rev", "eu_1804_civil_code", "eu_1813_leipzig", "eu_1815_vienna"],
    cbseTip: "French Revolution (1789) ➔ Napoleonic Code (1804) ➔ Battle of Leipzig (1813) ➔ Congress of Vienna (1815)."
  },
  {
    id: "chal_eu_2",
    chapterKey: "ch1_europe",
    title: "Age of Romanticism & Underground Societies",
    difficulty: "Intermediate (High Yield)",
    eventIds: ["eu_1815_vienna", "eu_1821_greek_war", "eu_1830_july_revolution", "eu_1831_young_italy", "eu_1832_constantinople"],
    cbseTip: "Greek war broke out in 1821, July revolution in France in 1830, and Treaty of Constantinople recognized Greek freedom in 1832."
  },
  {
    id: "chal_eu_3",
    chapterKey: "ch1_europe",
    title: "Economic Union to 1848 Revolutions",
    difficulty: "Intermediate (High Yield)",
    eventIds: ["eu_1834_zollverein", "eu_1845_silesian_weavers", "eu_1848_feb_paris", "eu_1848_frankfurt"],
    cbseTip: "Zollverein customs union (1834) ➔ Silesian weavers (1845) ➔ Paris February uprising (1848) ➔ Frankfurt Parliament (May 1848)."
  },
  {
    id: "chal_eu_4",
    chapterKey: "ch1_europe",
    title: "Italian Unification Milestones",
    difficulty: "Topper Level (Tricky)",
    eventIds: ["eu_1831_young_italy", "eu_1859_sardinia_austria", "eu_1860_garibaldi_thousand", "eu_1861_victor_emmanuel"],
    cbseTip: "Mazzini's Young Italy (1831) ➔ Cavour's Austrian defeat (1859) ➔ Garibaldi's Red Shirts (1860) ➔ Victor Emmanuel proclaimed (1861)."
  },
  {
    id: "chal_eu_5",
    chapterKey: "ch1_europe",
    title: "From Frankfurt to Kaiser at Versailles",
    difficulty: "Topper Level (Tricky)",
    eventIds: ["eu_1848_frankfurt", "eu_1861_victor_emmanuel", "eu_1866_1871_german_wars", "eu_1871_kaiser_versailles"],
    cbseTip: "Italian unification was proclaimed in 1861 before Bismarck's three 7-year wars (1866-1871) forged the German Empire at Versailles!"
  }
];
