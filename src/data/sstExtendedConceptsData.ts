import type { SSTConceptTopic } from "@/data/sstConceptsData";

export const SST_EXTENDED_CONCEPTS: SSTConceptTopic[] = [
  // =========================================================================
  // CHAPTER 11: The Making of a Global World (History Ch 3, Subtopics 1–1.3)
  // =========================================================================
  {
    id: "sst_his_c11_t1",
    chapterNo: 11,
    disciplineChapterNo: 3,
    chapterName: "The Making of a Global World",
    discipline: "History",
    unit: "Unit I: India and the Contemporary World - II",
    topicTitle: "1.1 The Pre-Modern World: Silk Routes & Food Travels",
    ncertSection: "NCERT History Chapter 3, Section 1.1–1.2 (Pages 53–56)",
    ncertSummary: "Human societies have steadily become more interlinked from pre-modern times. Travelers, traders, priests, and pilgrims journeyed vast distances for knowledge, opportunity, and spiritual fulfillment or to escape persecution. They carried goods, money, values, skills, ideas, inventions, and even germs and diseases.\n\nThe Silk Routes are a vibrant example of pre-modern trade and cultural links connecting vast regions of Asia with Europe and North Africa over land and sea. Chinese silk cargoes, Chinese pottery, and Indian/Southeast Asian spices and textiles travelled westwards, while precious metals (gold and silver) flowed from Europe to Asia. Alongside trade, cultural and religious exchange flourished: Buddhism, Christianity, and Islam all travelled along these routes.\n\nFood also traveled: traders introduced new crops to the lands they traveled. Noodles traveled west from China to become spaghetti, while Arab traders took pasta to Sicily in the fifth century. Common foods such as potatoes, maize, tomatoes, chillies, sweet potatoes, and groundnuts were completely unknown in Europe and Asia until Christopher Columbus discovered the Americas.",
    corePrinciples: [
      "Vast Interconnection: The pre-modern world was actively linked through maritime and overland commercial networks long before modern globalization.",
      "Silk Routes: Linked Asia, Europe, and North Africa; served as dual conduits for luxury commodities (silk, spices, silver) and world religions (Buddhism, Islam, Christianity).",
      "Culinary Migration: Discovery of the Americas introduced life-saving staple foods (potato, maize) that transformed nutrition in the Old World.",
      "Vulnerability of Monoculture: The Irish Potato Famine (1845–1849) proved the catastrophic danger of extreme dependence on a single introduced crop."
    ],
    keyDefinitions: [
      {
        term: "Silk Routes",
        definition: "Historic network of overland and sea trade routes connecting Asia with the Mediterranean, Europe, and North Africa from ancient times to the sixteenth century."
      },
      {
        term: "Irish Potato Famine",
        definition: "Catastrophic famine in Ireland (1845–1849) caused by a fungal blight destroying potato harvests, leading to the death of 1 million peasants and massive overseas emigration."
      }
    ],
    commonMistakesWarning: "Do not assume Columbus set out looking for America. Columbus was searching for a sea route to India and accidentally reached the American continent in 1492.",
    mnemonicImages: [
      {
        title: "Pre-Modern Trade Highway",
        src: "/mnemonics/sst/hist_ch3_global_world_1.jpeg",
        description: "Silk & Spices Westwards -> Gold & Silver Eastwards -> Food & Ideas Everywhere."
      },
      {
        title: "Global Exchanges & Biological Conquest",
        src: "/mnemonics/sst/hist_ch3_global_world_2.jpeg",
        description: "Spanish Conquistadors, Smallpox, and Atlantic Trade Matrix."
      }
    ],
    examples: [
      {
        id: "ex_gw_1",
        level: "Level 1 (1M Foundation / MCQ)",
        marks: 1,
        type: "MCQ",
        question: "Which of the following common foods was NOT known in Europe and Asia before Christopher Columbus discovered the Americas?",
        options: ["Rice", "Wheat", "Potato", "Barley"],
        correctOption: 2,
        solutionPoints: [
          "Potatoes were native to the Americas and introduced to the Old World only after 1492."
        ],
        examinerTrap: "Picking wheat or rice; both were ancient native staples of Eurasia.",
        keyTakeaway: "Potatoes, maize, tomatoes, and chillies all originated in the Americas."
      },
      {
        id: "ex_gw_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        type: "Short Answer (3M)",
        question: "Explain how the Silk Routes facilitated both commercial and cultural exchange in the pre-modern world.",
        solutionPoints: [
          "1. Commercial Cargoes: Chinese silk, ceramics, and Indian textiles/spices moved westward; gold and silver from Europe flowed eastward.",
          "2. Religious Diffusion: Buddhist monks, Christian missionaries, and Muslim scholars travelled the caravan routes, spreading faiths across continents.",
          "3. Culinary Transmission: Travellers introduced new staple foods (noodles became spaghetti; Arab traders brought pasta to Sicily)."
        ],
        examinerTrap: "Focusing solely on silk trade and omitting religious and cultural exchange.",
        keyTakeaway: "Trade routes were multi-dimensional channels of commerce, philosophy, and culinary culture."
      }
    ]
  },

  // =========================================================================
  // CHAPTER 12: Print Culture and the Modern World (History Ch 5)
  // =========================================================================
  {
    id: "sst_his_c12_t1",
    chapterNo: 12,
    disciplineChapterNo: 5,
    chapterName: "Print Culture and the Modern World",
    discipline: "History",
    unit: "Unit I: India and the Contemporary World - II",
    topicTitle: "5.1 The Print Revolution, Gutenberg Press & Religious Reformation",
    ncertSection: "NCERT History Chapter 5, Sections 1–4 (Pages 105–118)",
    ncertSummary: "The earliest print technology was developed in China, Japan, and Korea as hand-printing (woodblock printing). In 1295, Marco Polo returned to Italy after years of exploration in China and brought back the knowledge of woodblock printing.\n\nJohann Gutenberg of Mainz, Germany, developed the first mechanical movable-type printing press in the 1430s. Drawing on his expertise in olive and wine presses and lead-moulding, he created metal types. The first book he printed was the Holy Bible (about 180 copies printed over three years).\n\nThe Print Revolution was not merely a mechanical invention; it transformed lives, opening up new ways of looking at reality. It created a wide reading public. Print stimulated intense religious debates: in 1517, Martin Luther wrote the Ninety-Five Theses criticizing Roman Catholic indulgences and pasted them on the church door at Wittenberg. Luther's printed translation of the New Testament sold 5,000 copies in weeks, sparking the Protestant Reformation. Luther famously declared: 'Printing is the ultimate gift of God and the greatest one.'",
    corePrinciples: [
      "Movable Type Breakthrough: Gutenberg adapted olive-press mechanisms and lead metallurgy to invent the movable metal-type press.",
      "Protestant Reformation Catalyst: Print allowed religious reformers (Martin Luther) to communicate directly with the public, breaking the Catholic Church's monopoly over scripture.",
      "Creation of a Public Sphere: Inexpensive printed books transformed an oral hearing culture into an active reading public capable of rational debate.",
      "Church Backlash: Fear of heresy and unorthodox interpretations (e.g. Menocchio) forced the Roman Church to establish the Inquisition and the Index of Prohibited Books (1558)."
    ],
    keyDefinitions: [
      {
        term: "Ninety-Five Theses",
        definition: "A document written by Martin Luther in 1517 criticizing the corrupt practices and sale of indulgences in the Roman Catholic Church, inaugurating the Protestant Reformation."
      },
      {
        term: "Index of Prohibited Books",
        definition: "A list of forbidden publications maintained by the Roman Catholic Church from 1558 onwards to suppress heretical literature and dissent."
      }
    ],
    commonMistakesWarning: "Do not confuse Gutenberg with Martin Luther. Gutenberg invented the mechanical press; Martin Luther was the religious reformer who utilized print to launch the Protestant Reformation.",
    mnemonicImages: [
      {
        title: "Print Revolution Chain",
        src: "/mnemonics/sst/hist_ch5_print_culture_1.jpeg",
        description: "Gutenberg Press (1430s) -> 180 Bibles -> Martin Luther (1517) -> Protestant Reformation."
      },
      {
        title: "Reformation & Public Sphere",
        src: "/mnemonics/sst/hist_ch5_print_culture_2.jpeg",
        description: "Martin Luther's Ninety-Five Theses, reading mania, and the power of the printed word."
      }
    ],
    examples: [
      {
        id: "ex_pc_1",
        level: "Level 1 (1M Foundation / MCQ)",
        marks: 1,
        type: "MCQ",
        question: "Who brought the knowledge of woodblock printing from China to Europe in 1295?",
        options: ["Johann Gutenberg", "Marco Polo", "Erasmus", "Martin Luther"],
        correctOption: 1,
        solutionPoints: ["Marco Polo returned to Venice, Italy in 1295 after years in China."],
        examinerTrap: "Picking Gutenberg; Gutenberg invented movable type in the 1430s, whereas Marco Polo brought woodblock printing in 1295.",
        keyTakeaway: "Marco Polo linked Chinese woodblock printing to Renaissance Europe."
      },
      {
        id: "ex_pc_2",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 5,
        type: "Long Answer (5M)",
        question: "Examine the role of print culture in creating the intellectual conditions for the French Revolution.",
        solutionPoints: [
          "1. Popularization of Enlightenment Thought: Writings of Voltaire and Rousseau were widely disseminated, championing critical reason over blind superstition and church dogma.",
          "2. Creation of a Critical Public Sphere: Print fostered a culture of open debate where royal decrees and societal institutions were evaluated rationally.",
          "3. Satirical Literature against Monarchy: By the 1780s, underground pamphlets and cartoons mocked royal decadence and corruption while commoners faced starvation.",
          "4. Spread of Egalitarian Ideas: Print opened minds to alternate social orders based on liberty, constitutional equality, and popular sovereignty.",
          "5. Nuanced Reality: While print did not directly cause the revolution, it facilitated independent critical thinking across French society."
        ],
        examinerTrap: "Asserting that print directly caused the revolution; examiners expect students to state that print created the intellectual conditions and opened minds.",
        keyTakeaway: "Print demystified royal absolutism and legitimized rational critique."
      }
    ]
  },

  // =========================================================================
  // CHAPTER 13: Agriculture (Geography Ch 4)
  // =========================================================================
  {
    id: "sst_geo_c13_t1",
    chapterNo: 13,
    disciplineChapterNo: 4,
    chapterName: "Agriculture",
    discipline: "Geography",
    unit: "Unit II: Contemporary India - II",
    topicTitle: "4.1 Cropping Seasons, Major Crops & Institutional Reforms",
    ncertSection: "NCERT Geography Chapter 4, Sections 1–4 (Pages 34–46)",
    ncertSummary: "India has three distinct cropping seasons: Rabi, Kharif, and Zaid.\n\n1. Rabi Crops: Sown in winter from October to December and harvested in summer from April to June. Major crops: wheat, barley, peas, gram, and mustard. Availability of precipitation during winter months from western temperate cyclones helps success.\n\n2. Kharif Crops: Grown with the onset of monsoon in June–July and harvested in September–October. Major crops: paddy (rice), maize, jowar, bajra, tur (arhar), moong, urad, cotton, jute, groundnut, and soybean.\n\n3. Zaid Crops: In between the rabi and the kharif seasons, there is a short season during the summer months known as the Zaid season. Crops: watermelon, muskmelon, cucumber, vegetables, and fodder crops.\n\nMajor Crops:\n- Rice: Staple food crop of majority of Indians; Kharif crop requiring high temperature (>25°C), high humidity, and annual rainfall above 100 cm. Leading states: West Bengal, Uttar Pradesh, Punjab.\n- Wheat: Second most important cereal; Rabi crop requiring cool growing season and bright sunshine at ripening, 50–75 cm annual rainfall. Leading states: Punjab, Haryana, Uttar Pradesh.\n- Millets: Ragi (rich in iron/calcium), Bajra (sandy/shallow black soil), Jowar (third most important food crop, rainfed).\n- Cotton: Kharif crop requiring high temperature, light rainfall, 210 frost-free days, bright sunshine, black cotton soil of Deccan.\n\nInstitutional & Technological Reforms:\nGreen Revolution (HYV seeds, fertilisers), White Revolution (Operation Flood), Land Consolidation, Abolition of Zamindari, Kisan Credit Card (KCC), Personal Accident Insurance Scheme (PAIS), Minimum Support Price (MSP), and Vinoba Bhave's Bhoodan-Gramdan (Bloodless Revolution).",
    corePrinciples: [
      "Cropping Cycles: Agriculture in India synchronizes tightly with seasonal monsoon rhythms (Kharif), winter cyclonic precipitation (Rabi), and hot summer months (Zaid).",
      "Staple Crop Climatic Requirements: Rice requires tropical warmth and flooded soils (>100 cm rain), while wheat thrives in temperate cool seasons with dry sunny ripening.",
      "Technological Interventions: High-yielding variety (HYV) seeds and irrigation expanded wheat and rice productivity, but generated regional soil degradation.",
      "Socio-Economic Safeguards: Institutional reforms (KCC, crop insurance, MSP) shield farmers from predatory private moneylenders and crop failure risks."
    ],
    keyDefinitions: [
      {
        term: "Bhoodan-Gramdan",
        definition: "Voluntary land-redistribution movement led by Acharya Vinoba Bhave, where wealthy landowners donated land to landless agricultural labourers; also called the 'Bloodless Revolution'."
      },
      {
        term: "Kisan Credit Card (KCC)",
        definition: "Government-backed credit facility enabling farmers to purchase seeds, fertilisers, and modern agricultural equipment at low, subsidized interest rates."
      }
    ],
    commonMistakesWarning: "Students frequently confuse Cotton's climatic requirements. Cotton requires exactly 210 frost-free days and bright sunshine in black soil. Omission of '210 frost-free days' loses marks in the CBSE rubric.",
    mnemonicImages: [
      {
        title: "Cropping Season Rhythms",
        src: "/mnemonics/sst/geo_ch4_agriculture_1.jpeg",
        description: "Rabi: Winter sow -> Summer harvest (Wheat). Kharif: Monsoon sow -> Autumn harvest (Rice). Zaid: Summer melons."
      },
      {
        title: "Agricultural Reforms & Bhoodan",
        src: "/mnemonics/sst/geo_ch4_agriculture_2.jpeg",
        description: "Green Revolution, White Revolution, and Vinoba Bhave's Bloodless Revolution."
      }
    ],
    examples: [
      {
        id: "ex_ag_1",
        level: "Level 1 (1M Foundation / MCQ)",
        marks: 1,
        type: "MCQ",
        question: "Which of the following is an example of a leguminous crop that helps restore soil fertility by fixing atmospheric nitrogen?",
        options: ["Rice", "Pulses", "Wheat", "Millets"],
        correctOption: 1,
        solutionPoints: [
          "All pulses (except Arhar/Tur) are leguminous and restore soil fertility by fixing nitrogen from the air."
        ],
        examinerTrap: "Believing all pulses fix nitrogen; remember Arhar (Tur) does NOT fix atmospheric nitrogen.",
        keyTakeaway: "Pulses are grown in rotation to naturally restore soil nitrogen."
      },
      {
        id: "ex_ag_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        type: "Short Answer (3M)",
        question: "Describe three geographical conditions required for the successful cultivation of Rice in India.",
        solutionPoints: [
          "1. Temperature: High temperature (above 25°C) during the growing season.",
          "2. Rainfall & Moisture: High humidity and annual rainfall exceeding 100 cm (grown with canal irrigation and tubewells in low rainfall regions like Punjab and Haryana).",
          "3. Soil: Alluvial clayey soils capable of retaining standing water."
        ],
        examinerTrap: "Writing vague statements like 'needs good weather'. Specify exact figures: >25°C and >100 cm rainfall.",
        keyTakeaway: "Rice is a water-intensive, tropical Kharif staple."
      }
    ]
  },

  // =========================================================================
  // CHAPTER 14: Minerals and Energy Resources (Geography Ch 5)
  // =========================================================================
  {
    id: "sst_geo_c14_t1",
    chapterNo: 14,
    disciplineChapterNo: 5,
    chapterName: "Minerals and Energy Resources",
    discipline: "Geography",
    unit: "Unit II: Contemporary India - II",
    topicTitle: "5.1 Modes of Occurrence, Iron Ore Belts & Energy Conservation",
    ncertSection: "NCERT Geography Chapter 5, Sections 1–4 (Pages 48–63)",
    ncertSummary: "Minerals occur in various geological formations:\n1. In igneous and metamorphic rocks: Found in cracks, crevices, faults, or joints as veins (smaller) and lodes (larger). Examples: tin, copper, zinc, lead.\n2. In sedimentary rocks: Occur in beds or layers formed as a result of deposition, accumulation, and concentration in horizontal strata. Examples: coal, iron ore, gypsum, potash salt.\n3. Residual mass of weathered material: Decomposition of surface rocks leaving a residual mass of weathered material containing ores. Example: bauxite.\n4. Alluvial / Placer deposits: Found in sands of valley floors and the base of hills, containing minerals not corroded by water. Examples: gold, silver, tin, platinum.\n5. Ocean waters and ocean floor: Vast quantities of common salt, magnesium, bromine, and manganese nodules.\n\nMajor Iron Ore Belts:\n- Odisha-Jharkhand Belt: High grade haematite in Badampahar (Odisha) and Gua/Noamundi (Jharkhand).\n- Durg-Bastar-Chandrapur Belt: Super high-grade haematite in the Bailadila range (Chhattisgarh); exported to Japan & South Korea via Visakhapatnam port.\n- Ballari-Chitradurga-Chikkamagaluru-Tumakuru Belt: Kudremukh deposits (Karnataka); 100% export unit transported via underground slurry pipeline to Mangaluru port.\n- Maharashtra-Goa Belt: Efficiently mined and exported through Marmagao port.\n\nEnergy Resources:\n- Coal: Anthracite (highest quality), Bituminous (commercial/metallurgical), Lignite (brown coal, Neyveli in TN), Peat (low carbon, high moisture).\n- Petroleum: Mumbai High (63%), Gujarat (Ankaleshwar), Assam (oldest, Digboi).\n- Natural Gas: Environment friendly, low carbon emissions; HVJ pipeline (1,700 km).\n- Non-Conventional: Solar (photovoltaic), Wind (Muppandal in Tamil Nadu, Jaisalmer), Biogas (Gobar gas), Nuclear (Uranium in Jharkhand, Monazite sands in Kerala).",
    corePrinciples: [
      "Geological Genesis: Mineral occurrences correlate directly with rock types: veins/lodes in igneous/metamorphic, beds/strata in sedimentary, and placer deposits in river valleys.",
      "Metallurgical Backbone: High-grade haematite from Bailadila and Kudremukh slurry pipelines feeds domestic heavy industry and major Asian export markets.",
      "Energy Transition: Rising environmental degradation necessitates shifting from exhaustible, carbon-heavy fossil fuels to renewable, decentralized clean energy (solar, wind, biogas).",
      "Resource Conservation: Mining depletes finite geological capital; sustainable mineral utilization mandates recycling scrap metals and technological efficiency."
    ],
    keyDefinitions: [
      {
        term: "Slurry Pipeline",
        definition: "A transport system where crushed minerals (such as iron ore) are mixed with water and piped as a liquid slurry over mountainous terrain to coastal ports, eliminating transit losses and pollution."
      },
      {
        term: "HVJ Pipeline",
        definition: "The 1,700 km Hazira-Vijaipur-Jagdishpur cross-country pipeline connecting western offshore gas fields to northern fertilizer, power, and industrial complexes."
      }
    ],
    commonMistakesWarning: "Do not confuse Bituminous coal with Anthracite. Anthracite is the highest quality with >80% carbon; Bituminous is the most popular coal in commercial and blast-furnace metallurgical use.",
    mnemonicImages: [
      {
        title: "Coal Hierarchy Ladder",
        src: "/mnemonics/sst/geo_ch5_minerals_energy_1.jpeg",
        description: "Peat (Lowest) -> Lignite (Brown) -> Bituminous (Commercial) -> Anthracite (Hardest/Purest)."
      },
      {
        title: "Energy Belts & Conventional vs Non-Conventional",
        src: "/mnemonics/sst/geo_ch5_minerals_energy_2.jpeg",
        description: "Mineral occurrence in veins/lodes/beds and transition to sustainable clean energy."
      }
    ],
    examples: [
      {
        id: "ex_me_1",
        level: "Level 1 (1M Foundation / MCQ)",
        marks: 1,
        type: "MCQ",
        question: "From which port is the iron ore from Bailadila mines in Chhattisgarh exported to Japan and South Korea?",
        options: ["Kolkata Port", "Visakhapatnam Port", "Mumbai Port", "Kochi Port"],
        correctOption: 1,
        solutionPoints: [
          "Iron ore from Durg-Bastar-Chandrapur belt is exported overseas via Visakhapatnam port."
        ],
        examinerTrap: "Confusing Visakhapatnam (east coast) with Marmagao (Goa) or New Mangalore (Karnataka).",
        keyTakeaway: "Bailadila haematite ore ships exclusively through Visakhapatnam port."
      },
      {
        id: "ex_me_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        type: "Short Answer (3M)",
        question: "Explain why solar energy has a bright future in India. State two reasons.",
        solutionPoints: [
          "1. Tropical Geography: India is endowed with abundant sunshine across almost 300 clear sunny days annually, with enormous solar potential.",
          "2. Rural Decarbonisation: Photovoltaic technology enables decentralized rural power, reducing dependence on polluting firewood and dung cakes, thereby conserving soil fertility.",
          "3. Cost Competitiveness: Rapid improvements in solar panel efficiency and declining capital costs make solar an economical, clean alternative."
        ],
        examinerTrap: "Failing to connect solar energy to rural dung cake conservation.",
        keyTakeaway: "Solar power combines geographic abundance with rural ecological rejuvenation."
      }
    ]
  },

  // =========================================================================
  // CHAPTER 15: Manufacturing Industries (Geography Ch 6)
  // =========================================================================
  {
    id: "sst_geo_c15_t1",
    chapterNo: 15,
    disciplineChapterNo: 6,
    chapterName: "Manufacturing Industries",
    discipline: "Geography",
    unit: "Unit II: Contemporary India - II",
    topicTitle: "6.1 Industrial Location, Core Sectors & Environmental Management",
    ncertSection: "NCERT Geography Chapter 6, Sections 1–5 (Pages 64–79)",
    ncertSummary: "Manufacturing is the processing of raw materials into high-value finished products. It is considered the backbone of economic development because it modernizes agriculture, eradicates unemployment and poverty, expands exports, and brings in foreign exchange.\n\nIndustrial Location Factors:\nDetermined by availability of raw materials, labour, capital, power, and market. Industries tend to locate where these factors are available or can be arranged at lower cost. Cities offer markets and services (banking, transport, insurance, labour), leading to Agglomeration Economies.\n\nCore Industries:\n- Textile Industry: Unique position; self-reliant and complete in the value chain.\n- Jute Industry: Centered in Hugli basin (West Bengal) due to proximity of jute fields, abundant water, and inexpensive labor. Bio-degradable eco-friendly packaging demand has boosted prospects.\n- Sugar Industry: Shifting from north India to southern and western states (Maharashtra) because cane has higher sucrose content, cooler maritime climate extends crushing season, and cooperative societies are highly successful.\n- Iron & Steel: Basic heavy industry concentrated in the Chhotanagpur plateau due to proximity of iron ore, coking coal, limestone, and cheap labour.\n- IT & Electronics: Bengaluru is the 'Electronic Capital of India'. Major foreign exchange earner with over 30% women workforce.\n\nEnvironmental Control:\nIndustries cause Air, Water, Thermal, and Noise pollution. Remedial measures: water recycling, rainwater harvesting, three-tier effluent treatment (mechanical, biological, chemical), electrostatic precipitators on smokestacks, and green belts (NTPC ISO 14001 proactive model).",
    corePrinciples: [
      "Economic Transformation: Manufacturing drives national income by transforming low-value agrarian raw commodities into durable, high-value consumer and capital goods.",
      "Agglomeration Clustering: Industrial plants concentrate near urban hubs to exploit pooled infrastructure (transport, financial services, utilities).",
      "Regional Clustering Drivers: Heavy industries locate beside raw material deposits (weight-losing iron & steel), while sugar shifts toward favorable maritime climates with higher sucrose yield.",
      "Ecological Stewardship: Industrial growth must balance effluent discharge through mandatory 3-tier treatment, water recycling, and proactive afforestation belts."
    ],
    keyDefinitions: [
      {
        term: "Agglomeration Economies",
        definition: "The economic efficiencies and cost reductions achieved when multiple industrial enterprises cluster together in urban regions to share common municipal services, financial institutions, and transport infrastructure."
      },
      {
        term: "Three-Tier Effluent Treatment",
        definition: "A comprehensive process to cleanse industrial waste water: Primary (mechanical screening/sedimentation), Secondary (biological aeration), and Tertiary (chemical neutralization and recycling)."
      }
    ],
    commonMistakesWarning: "Students often assert that agriculture and industry are competitors. NCERT explicitly states: 'Agriculture and industry are not exclusive of each other; they move hand in hand.'",
    mnemonicImages: [
      {
        title: "Industrial Pollution Remedies",
        src: "/mnemonics/sst/geo_ch6_manufacturing_1.jpeg",
        description: "Reduce & Recycle Water -> 3-Tier Effluent Treatment -> Electrostatic Precipitators -> Green Belts."
      },
      {
        title: "Industrial Location & Agglomeration",
        src: "/mnemonics/sst/geo_ch6_manufacturing_2.jpeg",
        description: "Raw material proximity, power, labour, market and urban agglomeration economies."
      }
    ],
    examples: [
      {
        id: "ex_mf_1",
        level: "Level 1 (1M Foundation / MCQ)",
        marks: 1,
        type: "MCQ",
        question: "Which of the following cities is recognized as the 'Electronic Capital of India'?",
        options: ["Hyderabad", "Bengaluru", "Pune", "Gurugram"],
        correctOption: 1,
        solutionPoints: ["Bengaluru is India's preeminent IT and electronics manufacturing center."],
        examinerTrap: "Selecting Hyderabad or Gurugram; Bengaluru holds the official title.",
        keyTakeaway: "Bengaluru houses the highest density of electronics and software technology parks in India."
      },
      {
        id: "ex_mf_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        type: "Short Answer (3M)",
        question: "Why has the sugar industry been gradually shifting towards Maharashtra and southern states in recent decades? State three reasons.",
        solutionPoints: [
          "1. Higher Sucrose Content: The sugarcane grown in the southern and western maritime regions yields significantly higher sucrose percentage.",
          "2. Cooler Maritime Climate: The cooler coastal climate prevents rapid drying of cane stalks, ensuring a longer crushing season.",
          "3. Successful Cooperatives: Sugar mills operate primarily as cooperative societies in Maharashtra, which run far more smoothly and efficiently."
        ],
        examinerTrap: "Omitting the cooperative movement; the social cooperative structure in Maharashtra is a mandatory CBSE marking point.",
        keyTakeaway: "Climatic advantages and cooperative management triggered the southern migration of sugar production."
      }
    ]
  },

  // =========================================================================
  // CHAPTER 16: Lifelines of National Economy (Geography Ch 7 - Map & Corridors)
  // =========================================================================
  {
    id: "sst_geo_c16_t1",
    chapterNo: 16,
    disciplineChapterNo: 7,
    chapterName: "Lifelines of National Economy",
    discipline: "Geography",
    unit: "Unit II: Contemporary India - II",
    topicTitle: "7.1 Transport Corridors, Major Sea Ports & International Gateways",
    ncertSection: "NCERT Geography Chapter 7, Sections 1–4 (Pages 80–91)",
    ncertSummary: "The movement of goods and services over land, water, and air is essential for rapid economic development. Transport, communication, and trade are complementary to each other.\n\nRoadways:\n- Golden Quadrilateral Super Highways: Connects Delhi-Kolkata-Chennai-Mumbai-Delhi by 6-lane super highways, reducing distance and travel time. Maintained by NHAI.\n- North-South Corridor connects Srinagar (J&K) to Kanyakumari (Tamil Nadu).\n- East-West Corridor connects Silchar (Assam) to Porbandar (Gujarat).\n- Border Roads: Border Roads Organisation (BRO) constructs and maintains strategic roads along northern and north-eastern borders (e.g., Atal Tunnel in Rohtang).\n\nWaterways:\nCheapest means of transport for heavy and bulky goods; fuel-efficient and eco-friendly.\n- NW-1: Ganga river between Prayagraj and Haldia (1,620 km).\n- NW-2: Brahmaputra river between Sadiya and Dhubri (891 km).\n- NW-3: West Coast Canal in Kerala (205 km).\n\nMajor Sea Ports (Official Board Syllabus):\n- Kandla (Deendayal Port): Tidal port built post-independence to compensate for loss of Karachi.\n- Mumbai: Biggest natural port in India.\n- Jawaharlal Nehru Port (Nhava Sheva): Decongests Mumbai port.\n- Marmagao (Goa): Premier iron ore export port (~50% of India's iron ore exports).\n- New Mangalore: Exports Kudremukh iron ore slurry.\n- Kochi: Natural harbour at the entrance of a lagoon.\n- Tuticorin: Deep natural harbour on southeastern tip, trading with Sri Lanka.\n- Chennai: One of the oldest artificial ports in India.\n- Visakhapatnam: Deepest landlocked and well-protected port.\n- Paradip (Odisha): Specializes in iron ore export.\n- Kolkata: Inland riverine port on Hugli river; Haldia serves as subsidiary decongestion port.\n\nMajor International Airports: Amritsar (Raja Sansi), Delhi (Indira Gandhi), Mumbai (Chhatrapati Shivaji), Chennai (Meenambakkam), Kolkata (Netaji Subhash Chandra Bose), Hyderabad (Rajiv Gandhi).",
    corePrinciples: [
      "Circulatory Economic Infrastructure: Transport networks link isolated resource hinterlands with industrial clusters and international consumer markets.",
      "Logistical Cost Advantages: Inland and coastal waterways offer the most fuel-efficient, zero-congestion corridors for heavy, bulky raw materials.",
      "Strategic Border Connectivity: Border Roads Organisation (BRO) secures national defence frontiers while fostering economic inclusion in rugged Himalayan terrain.",
      "Maritime Trade Hubs: Twelve major sea ports handle 95% of India's foreign trade volume, acting as vital economic engines."
    ],
    keyDefinitions: [
      {
        term: "Inland Riverine Port",
        definition: "A port situated on a navigable river rather than an open sea coast (e.g., Kolkata Port on the river Hugli), requiring constant tidal dredging."
      },
      {
        term: "Deendayal Port (Kandla)",
        definition: "A tidal port in the Gulf of Kuchchh, Gujarat, developed immediately following Independence to replace the lost port of Karachi and relieve pressure on Mumbai."
      }
    ],
    commonMistakesWarning: "In board map questions, students often place port markers in landlocked interior districts. All sea ports must be marked accurately right on the coastal borderline.",
    mnemonicImages: [
      {
        title: "Major Sea Ports Coastline",
        src: "/mnemonics/sst/geo_ch7_lifelines_1.jpeg",
        description: "West: Kandla -> Mumbai -> JNPT -> Marmagao -> Mangalore -> Kochi. East: Tuticorin -> Chennai -> Vizag -> Paradip -> Kolkata/Haldia."
      },
      {
        title: "Transport Corridors & Roadways Hierarchy",
        src: "/mnemonics/sst/geo_ch7_lifelines_2.jpeg",
        description: "Golden Quadrilateral Super Highways, North-South/East-West Corridors and Border Roads."
      }
    ],
    examples: [
      {
        id: "ex_lf_1",
        level: "Level 1 (1M Foundation / MCQ)",
        marks: 1,
        type: "MCQ",
        question: "Which port is known as the deepest landlocked and well-protected port along the eastern coast of India?",
        options: ["Chennai Port", "Visakhapatnam Port", "Paradip Port", "Kolkata Port"],
        correctOption: 1,
        solutionPoints: ["Visakhapatnam is deeply landlocked and shielded from oceanic cyclonic storms."],
        examinerTrap: "Selecting Chennai (artificial port) or Paradip (coastal open port).",
        keyTakeaway: "Visakhapatnam is India's premier landlocked deep-draft port."
      },
      {
        id: "ex_lf_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        type: "Short Answer (3M)",
        question: "State three advantages of pipeline transport over conventional surface transport.",
        solutionPoints: [
          "1. Zero Transit Loss: Slurry, petroleum, and natural gas travel continuously without intermediate loading/unloading, virtually eliminating trans-shipment delays and pilferage.",
          "2. Inaccessible Terrains: Pipelines can be laid across rugged mountains, underwater river beds, and deserts where roads and railways are economically impossible.",
          "3. Low Operational Cost: Although initial capital investment is high, subsequent operating and maintenance costs are negligible, producing zero vehicular emissions."
        ],
        examinerTrap: "Claiming pipelines have low initial setup costs; initial installation is very expensive, but running costs are minimal.",
        keyTakeaway: "Pipelines eliminate trans-shipment delays and traffic friction."
      }
    ]
  },

  // =========================================================================
  // CHAPTER 17: Gender, Religion and Caste (Political Science Ch 3)
  // =========================================================================
  {
    id: "sst_pol_c17_t1",
    chapterNo: 17,
    disciplineChapterNo: 3,
    chapterName: "Gender, Religion and Caste",
    discipline: "Political Science",
    unit: "Unit III: Democratic Politics - II",
    topicTitle: "3.1 Gender Empowerment, Secularism & Caste Dynamics",
    ncertSection: "NCERT Civics Chapter 3, Sections 1–3 (Pages 39–54)",
    ncertSummary: "Gender and Politics:\nSexual division of labour is not based on biology but on social expectations and stereotypes. Women do all household work or unpaid domestic drudgery. Feminist movements demanded equality in personal, family, and public life. In India, women's political representation in Parliament has remained low (<15%), and in state assemblies less than 5%. Panchayati Raj instituted one-third (33%) reservation in local bodies, empowering over 10 lakh elected women. Recently, Parliament passed the historic Nari Shakti Vandan Adhiniyam (106th Constitutional Amendment Act, 2023) reserving 33% seats for women in Lok Sabha and state assemblies.\n\nReligion and Communalism:\nCommunalism begins when religion is expressed in politics in exclusive and partisan terms: when beliefs of one religion are presented as superior to others, demands of one religious group are framed in opposition to another, and state power is mobilized to establish majority dominance. Forms of communalism: everyday prejudices, quest for political dominance, religious mobilization with sacred symbols, and communal riots.\n\nSecular State:\nIndia has no official state religion (unlike Buddhism in Sri Lanka, Islam in Pakistan, Christianity in England). Article 25 guarantees freedom of conscience and religious propagation. Article 15 prohibits discrimination on grounds of religion. The state can intervene to ensure equality within religious communities (e.g., banning untouchability).\n\nCaste and Politics:\nCaste inequalities are breaking down due to economic growth, urbanization, literacy, and occupational mobility. Yet caste remains politicized. Parties choose candidates keeping caste composition of constituencies in mind. But caste alone cannot determine elections: no constituency has an exclusive caste majority, no party wins all votes of a caste, and ruling MPs/MLAs frequently lose elections. Politics also influences caste: caste groups expand by incorporating sub-castes, form inter-caste coalitions, and create new categories like 'backward' and 'forward' caste groups.",
    corePrinciples: [
      "Social Stratification in Politics: Gender, religious faith, and caste hierarchies do not operate in a vacuum; they interact dynamically with democratic electoral institutions.",
      "Constitutional Secularism: The Indian state maintains principled neutrality by refusing an official state religion while intervening to uphold fundamental rights and gender justice within religious communities.",
      "Limitations of Identity Politics: Demographics prevent single-caste hegemony; candidates must construct multi-caste alliances to secure parliamentary majorities.",
      "Institutional Affirmative Action: Constitutional reservations (Panchayati Raj 33%, Nari Shakti Vandan Adhiniyam) dismantle historical exclusion in legislative bodies."
    ],
    keyDefinitions: [
      {
        term: "Communalism",
        definition: "A political ideology based on the belief that religion is the principal basis of social community, and that followers of different religions possess divergent, hostile interests that cannot coexist equitably."
      },
      {
        term: "Nari Shakti Vandan Adhiniyam",
        definition: "The 106th Constitutional Amendment Act (2023) reserving one-third (33%) of seats in the Lok Sabha and State Legislative Assemblies for women."
      }
    ],
    commonMistakesWarning: "Students mistakenly claim that Gandhiji wanted religious orthodoxy in politics. Gandhiji stated that religion can never be separated from politics because he meant moral values drawn from all religions must guide political action.",
    mnemonicImages: [
      {
        title: "Pillars of Indian Secularism",
        src: "/mnemonics/sst/pol_ch3_gender_religion_1.jpeg",
        description: "No State Religion -> Freedom of Conscience (Art 25) -> Non-Discrimination (Art 15) -> State Intervention for Equality."
      },
      {
        title: "Gender Empowerment & Reservation",
        src: "/mnemonics/sst/pol_ch3_gender_religion_2.jpeg",
        description: "Panchayati Raj 1/3 reservation, Nari Shakti Vandan Adhiniyam, and overcoming caste biases."
      }
    ],
    examples: [
      {
        id: "ex_gr_1",
        level: "Level 1 (1M Foundation / MCQ)",
        marks: 1,
        type: "MCQ",
        question: "Which of the following countries has an official state religion recognized in its constitution?",
        options: ["India", "United States", "Sri Lanka", "France"],
        correctOption: 2,
        solutionPoints: [
          "Sri Lanka constitutionally fosters and protects Buddhism as the state religion, whereas India is a secular state."
        ],
        examinerTrap: "Picking India; the Indian Constitution explicitly rejects an official state religion.",
        keyTakeaway: "Unlike Sri Lanka or Pakistan, India gives no special constitutional status to any single religion."
      },
      {
        id: "ex_gr_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        type: "Short Answer (3M)",
        question: "Explain three reasons why caste alone cannot determine election results in India.",
        solutionPoints: [
          "1. No Exclusive Caste Majorities: No parliamentary constituency in India possesses a clear single-caste majority; winning candidates must secure votes across multiple communities.",
          "2. No Monolithic Vote Banks: No political party wins 100% of the votes of any single caste or community; votes are invariably divided among rival parties.",
          "3. High Turnover of Incumbents: Sitting MPs and MLAs regularly lose elections, proving that governance, inflation, and development override static caste affiliations."
        ],
        examinerTrap: "Arguing that caste plays no role at all; caste is an important factor, but cannot determine elections in isolation.",
        keyTakeaway: "Electoral arithmetic necessitates broad cross-caste consensus building."
      }
    ]
  },

  // =========================================================================
  // CHAPTER 18: Political Parties (Political Science Ch 4)
  // =========================================================================
  {
    id: "sst_pol_c18_t1",
    chapterNo: 18,
    disciplineChapterNo: 4,
    chapterName: "Political Parties",
    discipline: "Political Science",
    unit: "Unit III: Democratic Politics - II",
    topicTitle: "4.1 Functions, Party Systems, Challenges & Institutional Reforms",
    ncertSection: "NCERT Civics Chapter 4, Sections 1–4 (Pages 71–88)",
    ncertSummary: "A political party is a group of people who come together to contest elections and hold power in government. Three components: The Leaders, The Active Members, and The Followers.\n\nSeven Functions of Political Parties:\n1. Contest elections by nominating candidates.\n2. Put forward policies and programmes for voters to choose.\n3. Play a decisive role in making laws in the legislature.\n4. Form and run governments by recruiting and training ministers.\n5. Play the role of opposition, voicing alternate views and checking executive excesses.\n6. Shape public opinion through awareness campaigns and mass movements.\n7. Provide citizens access to government machinery and welfare schemes.\n\nParty Systems:\n- One-Party System: Only one party is permitted to control power (e.g., China - Communist Party). Not democratic.\n- Two-Party System: Power alternates primarily between two major parties (e.g., USA, UK).\n- Multi-Party System: Several parties have a reasonable chance of winning power on their own or through coalitions (e.g., India). Suited for geographically and socially diverse societies.\n\nNational vs State Party Criteria:\n- National Party: Secures >=6% votes in Lok Sabha or Assembly elections in 4 states AND wins >=4 Lok Sabha seats.\n- State Party: Secures >=6% votes in State Assembly election AND wins >=2 assembly seats.\n\nFour Challenges to Political Parties:\n1. Lack of internal democracy (power concentrated in top leaders, no organizational elections).\n2. Dynastic succession (top posts reserved for family members).\n3. Money and muscle power (wealthy donors and criminal candidates dominate).\n4. Meaningful choice absence (ideological convergence between rival parties).\n\nReforms Enacted & Proposed:\nAnti-Defection Law (52nd & 91st Amendments prevent switching parties), Supreme Court affidavit of assets and criminal records, Election Commission mandatory organizational elections, and proposed state funding of elections.",
    corePrinciples: [
      "Democratic Aggregation: Political parties structure public debate, aggregating millions of conflicting citizen desires into coherent national policy platforms.",
      "Constitutional Opposition: Losing parties are as vital to democracy as the ruling government by questioning executive abuse and defending civil liberties.",
      "Coalition Imperative: A multi-party system accommodates India's linguistic, regional, and social diversity through pre-poll alliances and power sharing.",
      "Internal Governance Crisis: Parties face deep institutional deficiencies (dynastic control, illicit campaign financing) requiring statutory electoral reforms."
    ],
    keyDefinitions: [
      {
        term: "Anti-Defection Law",
        definition: "A constitutional measure ensuring that any elected legislator (MP or MLA) who leaves the political party on whose ticket they were elected forfeits their seat in the legislature."
      },
      {
        term: "National Party",
        definition: "A political party recognized by the Election Commission of India that has secured at least 6% of total votes in 4 states and won at least 4 Lok Sabha seats."
      }
    ],
    commonMistakesWarning: "Students often forget the double criteria for National Parties: it is 6% votes in 4 states PLUS at least 4 seats in the Lok Sabha. Mentioning only votes or only seats loses half marks.",
    mnemonicImages: [
      {
        title: "4 Challenges to Political Parties",
        src: "/mnemonics/sst/pol_ch4_political_parties_1.jpeg",
        description: "1. Lack of Internal Democracy -> 2. Dynastic Succession -> 3. Money & Muscle Power -> 4. No Meaningful Choice."
      },
      {
        title: "Functions of Political Parties & Reforms",
        src: "/mnemonics/sst/pol_ch4_political_parties_2.jpeg",
        description: "Forming government, shaping public opinion, Anti-Defection Law and internal elections."
      }
    ],
    examples: [
      {
        id: "ex_pp_1",
        level: "Level 1 (1M Foundation / MCQ)",
        marks: 1,
        type: "MCQ",
        question: "What punishment does the Anti-Defection Law impose on an elected MP or MLA who changes parties after winning an election?",
        options: [
          "They must pay a financial fine of 10 lakh rupees",
          "They lose their elected seat in the legislature",
          "They are barred from voting in elections for life",
          "They are placed under temporary house arrest"
        ],
        correctOption: 1,
        solutionPoints: [
          "The law states that any MLA or MP who defects from their elected party forfeits their legislative seat."
        ],
        examinerTrap: "Believing it is only a financial fine; defection results in immediate loss of the legislative seat.",
        keyTakeaway: "Defection disqualifies the legislator from parliament or the assembly."
      },
      {
        id: "ex_pp_2",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 5,
        type: "Long Answer (5M)",
        question: "Explain the four major challenges faced by political parties in India, and suggest two measures to reform them.",
        solutionPoints: [
          "1. Lack of Internal Democracy: Decisions are monopolized by one or two top leaders; parties do not maintain member registers or conduct regular internal ballots.",
          "2. Dynastic Succession: Family connections determine leadership promotions, denying committed grassroots workers any path to senior office.",
          "3. Role of Money and Muscle Power: Parties nominate affluent candidates or individuals with criminal records to secure winnability through financial and physical intimidation.",
          "4. Absence of Meaningful Choice: Major parties often share similar economic philosophies, limiting voters to choosing between identical policies with different party symbols.",
          "5. Suggested Reforms: Statutory regulation requiring verified membership rolls and internal elections; State funding of election campaign expenditures."
        ],
        examinerTrap: "Writing vague criticisms like 'politicians are corrupt' without naming the four specific NCERT challenges.",
        keyTakeaway: "Reforming political parties requires mandatory internal democracy and transparent campaign finance."
      }
    ]
  },

  // =========================================================================
  // CHAPTER 19: Outcomes of Democracy (Political Science Ch 5)
  // =========================================================================
  {
    id: "sst_pol_c19_t1",
    chapterNo: 19,
    disciplineChapterNo: 5,
    chapterName: "Outcomes of Democracy",
    discipline: "Political Science",
    unit: "Unit III: Democratic Politics - II",
    topicTitle: "5.1 Accountable, Legitimate Governance & Social Accommodation",
    ncertSection: "NCERT Civics Chapter 5, Sections 1–4 (Pages 89–98)",
    ncertSummary: "Democracy is universally judged superior to authoritarianism because it: promotes equality, enhances individual dignity, improves decision quality through consultation, provides methods to resolve social conflicts, and allows room to correct mistakes.\n\nAccountable, Responsive, and Legitimate Government:\n- Accountable: Rulers are elected by and answerable to citizens through periodic, free, and fair elections.\n- Transparent: Decisions follow legal norms and procedures; citizens have the right and institutional means (Right to Information) to examine how decisions are made.\n- Responsive: Attentive to public needs and grievances (though actual democracies often fall short).\n- Legitimate: Democracy may be slower and less efficient than dictatorships, but it is the people's own government. That explains why overwhelming majorities in South Asia and globally prefer democracy.\n\nEconomic Outcomes:\nDictatorships historically posted marginally higher economic growth rates (1950–2000), but the difference is negligible when factoring in population, resources, and global cooperation. Democracy cannot guarantee instant economic parity, but it guarantees political equality (one person, one vote, one value).\n\nAccommodating Social Diversity:\nTwo essential conditions: (1) Democracy is not simply rule by majority opinion; the majority must always negotiate and accommodate the minority view. (2) Rule by majority must not become permanent rule by a majority community based on religion, race, or language.\n\nDignity and Freedom of Citizens:\nDemocracy provides the moral and legal bedrock for marginalized groups (women, lower castes) to wage struggles for equality. Its most distinctive feature is that its examination never ends: when citizens express dissatisfaction, it proves that democracy has transformed passive subjects into conscious, demanding citizens.",
    corePrinciples: [
      "Institutional Legitimacy: A democratic regime derives uncontested authority from the consent of the governed, making decisions durable and respected.",
      "Procedural Deliberation: Democratic decisions take longer due to debate and consultation, but avoid the violent popular backlashes caused by autocratic fiats.",
      "Non-Majoritarian Pluralism: True democracy accommodates minorities, preventing majority rule from devolving into ethnic or religious tyranny.",
      "Perpetual Democratic Evolution: Complaints and public criticism are symptoms of democratic vitality and citizen consciousness, not institutional breakdown."
    ],
    keyDefinitions: [
      {
        term: "Transparency",
        definition: "The constitutional mechanism ensuring that citizens have both the legal right and institutional means to examine and verify the process of government decision-making."
      },
      {
        term: "Legitimate Government",
        definition: "A government that operates under established constitutional laws and derives its mandate directly from periodic, free, and fair elections by the sovereign public."
      }
    ],
    commonMistakesWarning: "Students frequently assume democracies should guarantee economic equality. Political equality (one vote, one value) is guaranteed, but economic inequality persists in market democracies.",
    mnemonicImages: [
      {
        title: "Democracy's Core Virtues",
        src: "/mnemonics/sst/pol_ch5_outcomes_democracy_1.jpeg",
        description: "Accountability -> Transparency -> Legitimacy -> Social Harmony -> Dignity of All."
      },
      {
        title: "Social Accommodation & Citizen Dignity",
        src: "/mnemonics/sst/pol_ch5_outcomes_democracy_2.jpeg",
        description: "Accommodating diversity without majoritarianism and empowering marginalized citizens."
      }
    ],
    examples: [
      {
        id: "ex_od_1",
        level: "Level 1 (1M Foundation / MCQ)",
        marks: 1,
        type: "MCQ",
        question: "Which of the following is an outcome that democracy uniquely and decisively produces better than any non-democratic regime?",
        options: [
          "Instant economic equality for all classes",
          "Rapid autocratic decree without legislative delay",
          "Legitimate government accountable to the citizenry",
          "Zero corruption in public bureaucracy"
        ],
        correctOption: 2,
        solutionPoints: [
          "Democracy may be slow, but it is legitimate and accountable because it is the people's own chosen government."
        ],
        examinerTrap: "Selecting rapid decrees or zero corruption; neither is guaranteed by democracy.",
        keyTakeaway: "Legitimacy is democracy's greatest structural strength."
      },
      {
        id: "ex_od_2",
        level: "Level 2 (2M-3M Board Standard)",
        marks: 3,
        type: "Short Answer (3M)",
        question: "State the two mandatory conditions necessary for a democracy to successfully accommodate social diversity.",
        solutionPoints: [
          "1. Majority Must Work with Minority: Majority opinion must continuously consult and reflect the interests of minority communities so governance serves the common public good.",
          "2. Majority Rule Must Not Mean Majority Community: Rule by majority must never transform into rule by a majority religious, racial, or linguistic community; in every decision, different groups must be capable of forming a majority."
        ],
        examinerTrap: "Conflating majority rule with permanent religious majoritarianism (like Sinhala majoritarianism in Sri Lanka).",
        keyTakeaway: "Democracy requires fluid political majorities, not fixed ethnic or religious majorities."
      }
    ]
  },

  // =========================================================================
  // CHAPTER 20: Globalisation and the Indian Economy (Economics Ch 4)
  // =========================================================================
  {
    id: "sst_eco_c20_t1",
    chapterNo: 20,
    disciplineChapterNo: 4,
    chapterName: "Globalisation and the Indian Economy",
    discipline: "Economics",
    unit: "Unit IV: Understanding Economic Development",
    topicTitle: "4.1 MNCs, Liberalisation, WTO & Fair Globalisation",
    ncertSection: "NCERT Economics Chapter 4, Sections 1–4 (Pages 55–71)",
    ncertSummary: "Globalisation is the process of rapid integration or interconnection between countries. MNCs (Multinational Corporations) are playing a major role in the globalisation process.\n\nProduction Across Countries:\nAn MNC is a company that owns or controls production in more than one nation. MNCs set up offices and factories where cheap labour and resources are available (e.g., manufacturing in China, customer support in India, R&D in the US). MNCs interlink production by: setting up joint ventures with local firms, buying up local companies (e.g., Cargill Foods acquired Parakh Foods), or placing manufacturing contracts with small producers (footwear, garments).\n\nEnabling Factors:\n1. Technology: Rapid improvements in transport (containerisation) cut shipping costs; Information and Communication Technology (telecommunications, internet, computers) enables instantaneous global business transactions and service outsourcing.\n2. Liberalisation of Foreign Trade and Investment: Removal of government-imposed trade barriers (tariffs, import quotas). Around 1991, India adopted the New Economic Policy, opening markets to international competition to raise domestic industrial quality.\n\nWorld Trade Organisation (WTO):\nEstablished to liberalize international trade and enforce multilateral agreements. Headquartered in Geneva. Criticized by developing nations because developed countries unfairly retain agricultural subsidies while forcing developing nations to lower tariffs.\n\nImpact in India:\n- Benefits: Urban wealthy consumers enjoy wider choices and lower prices; Indian MNCs emerged (Tata Motors, Infosys, Ranbaxy, Asian Paints); boom in IT service outsourcing; FDI inflow into Special Economic Zones (SEZs).\n- Challenges: Small domestic producers of batteries, plastics, toys, and tyres suffered closures; workers face insecure, flexible employment without safety nets.\n- Fair Globalisation: Government must protect labor laws, support small producers, and negotiate equitably at the WTO.",
    corePrinciples: [
      "Transnational Production Networks: MNCs geographically slice production across nations to minimize production costs and access global consumer markets.",
      "Catalysts of Integration: Containerized intermodal shipping and high-speed telecommunications collapsed geographic transit friction and coordination costs.",
      "Policy Deregulation: Liberalisation (1991 New Economic Policy) replaced protective import substitution tariffs with open international competition.",
      "Asymmetric Global Gains: Globalisation rewards capital-rich corporations and skilled knowledge workers while exposing unprotected small enterprises and informal laborers to intense vulnerability."
    ],
    keyDefinitions: [
      {
        term: "Liberalisation",
        definition: "The economic policy of removing government-imposed restrictions, tariffs, quotas, and licensing regulations on foreign trade and private foreign investment."
      },
      {
        term: "Special Economic Zone (SEZ)",
        definition: "Designated industrial zones featuring world-class infrastructure (power, water, roads) where enterprises enjoy initial five-year tax holidays and flexible labor laws to attract Foreign Direct Investment (FDI)."
      }
    ],
    commonMistakesWarning: "Students frequently confuse Liberalisation with Privatisation. Liberalisation means removing trade and investment barriers; Privatisation means transferring public sector enterprises to private ownership.",
    mnemonicImages: [
      {
        title: "Forces of Globalisation",
        src: "/mnemonics/sst/eco_ch4_globalisation_1.jpeg",
        description: "MNC Production Networks + Container Transport + Internet/IT + 1991 Liberalisation."
      },
      {
        title: "WTO, SEZs & Fair Globalisation",
        src: "/mnemonics/sst/eco_ch4_globalisation_2.jpeg",
        description: "Trade barrier removal, Special Economic Zones, and equitable policies for domestic workers."
      }
    ],
    examples: [
      {
        id: "ex_gl_1",
        level: "Level 1 (1M Foundation / MCQ)",
        marks: 1,
        type: "MCQ",
        question: "Removing trade barriers or restrictions set by the government on foreign trade and investment is termed as:",
        options: ["Privatisation", "Liberalisation", "Nationalisation", "Globalisation"],
        correctOption: 1,
        solutionPoints: [
          "Liberalisation refers to removing quantitative quotas, tariffs, and bureaucratic barriers on trade."
        ],
        examinerTrap: "Selecting Privatisation; Privatisation involves selling state assets to private owners.",
        keyTakeaway: "Liberalisation eliminated trade barriers under the 1991 economic reforms."
      },
      {
        id: "ex_gl_2",
        level: "Level 3 (4M-5M Master / Case Study)",
        marks: 5,
        type: "Long Answer (5M)",
        question: "Explain the dual impact of Globalisation on the Indian economy, discussing benefits to consumers and large corporations alongside challenges faced by small producers and unorganised workers.",
        solutionPoints: [
          "1. Benefits to Urban Consumers: Wider choice of top-quality international goods (automobiles, electronics, smartphones) at competitive prices, elevating living standards.",
          "2. Emergence of Indian MNCs: Top domestic conglomerates modernized and expanded globally (Tata Motors, Infosys, Ranbaxy, Asian Paints).",
          "3. Service Sector Boom: Creation of millions of high-paying jobs in software development, BPOs, accounting, and engineering outsourcing.",
          "4. Crisis for Small Scale Industries: Small producers in batteries, capacitors, plastics, toys, and dairy faced closures against cheap imports, causing structural unemployment.",
          "5. Casualization of Labour: Employers hired workers on temporary, flexible contracts without benefits or job security to cut costs in global supply chains."
        ],
        examinerTrap: "Presenting a one-sided essay that ignores the harsh impact on small manufacturers and informal workers.",
        keyTakeaway: "Globalisation generated immense wealth for top corporate players but increased precarity for small manufacturers and labor."
      }
    ]
  }
];
