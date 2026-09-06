// =========================================================================
// CBSE CLASS 10 ENGLISH LITERATURE MASTER DATA (2026-2027)
// Full Coverage: Footprints Without Feet (9 Stories) + First Flight Prose & Poetry
// Includes: Fun Toddler Hooks, Deep Explanations, Exam Bullet Points,
// Character Trait Matrix, Hard Words Glossary, Key Quotes, Board Examiner Traps,
// and Board-Standard SAQs (3M) & LAQs (6M).
// =========================================================================

export interface Character {
  name: string;
  role: string;
  emoji: string;
  traits: string[];
  description: string;
  keyQuote?: string;
}

export interface HardWord {
  word: string;
  pronunciation?: string;
  partOfSpeech: string;
  meaning: string;
  contextSentence: string;
  synonyms?: string[];
}

export interface BoardQA {
  id: string;
  question: string;
  marks: number;
  type: "SAQ" | "LAQ" | "RTC" | "HOTS";
  modelAnswer: string;
  keyKeywords: string[];
  examinerRubricTip: string;
}

export interface PoeticDeviceDetail {
  device: string;
  easyDefinition?: string;
  lineExample: string;
  explanation: string;
}

export interface PoemStanza {
  stanzaNumber: number;
  originalLines: string[];
  simpleParaphrase: string;
  poeticDevices: PoeticDeviceDetail[];
}

export interface IdiomPhrase {
  phrase: string;
  meaning: string;
  contextSentence: string;
}

export interface EnglishChapter {
  id: string;
  title: string;
  book: "Footprints Without Feet" | "First Flight (Prose)" | "First Flight (Poetry)";
  type: "story" | "prose" | "poem" | "play";
  chapterNo: number;
  author: string;
  genre: string;
  theme: string;
  funToddlerHook: {
    tagline: string;
    funnyStory: string;
    ahaLesson: string;
    emoji: string;
  };
  deepExplanation: string;
  bulletSummary: string[];
  characters?: Character[];
  hardWords: HardWord[];
  keyQuotes: { quote: string; speaker: string; context: string }[];
  examinerTraps: {
    trapTitle: string;
    commonMistake: string;
    correctCbseApproach: string;
    penaltyRisk: string;
  }[];
  stanzaBreakdown?: PoemStanza[];
  centralIdeaPoem?: string;
  allPoeticDevicesGlossary?: {
    device: string;
    easyDefinition: string;
    whereUsedInPoem: string;
    explanation: string;
  }[];
  idiomsAndPhrases?: IdiomPhrase[];
  keywordsList?: string[];
  boardQAs: BoardQA[];
  isPhase1Priority: boolean;
  isTestSeries1: boolean;
}


export const ENGLISH_LITERATURE_DATA: EnglishChapter[] = [
  // =========================================================================
  // FOOTPRINTS WITHOUT FEET — CHAPTER 1: A TRIUMPH OF SURGERY
  // =========================================================================
  {
    id: "fp-ch1-triumph-of-surgery",
    title: "A Triumph of Surgery",
    book: "Footprints Without Feet",
    type: "story",
    chapterNo: 1,
    author: "James Herriot",
    genre: "Satirical Memoir / Humorous Fiction",
    theme: "The hazards of overindulgent love and pampered luxury versus natural healthy discipline.",
    funToddlerHook: {
      tagline: "The Sausage Dog who needed Running, Not Roast Beef!",
      funnyStory: "Imagine feeding your puppy cream cakes, chocolates, Horlicks, and malt until he looks like a bloated hotdog with four stubby toothpicks for legs! His rich mom thought he was starving, so she called the doctor. The doctor's secret super-expensive 'surgery'? Two days of ONLY water and running with street dogs in the mud! Boom—cured!",
      ahaLesson: "Too much pampering without exercise makes you sick. Natural living beats luxury medicine every time.",
      emoji: "🐶"
    },
    deepExplanation: "James Herriot, a pragmatic veterinary surgeon, is appalled by the grotesque physical state of Tricki, a small Pekingese dog owned by the wealthy widow Mrs. Pumphrey. Tricki has become listless, rheumy-eyed, and grossly obese due to Mrs. Pumphrey's obsessive feeding of cod-liver oil, malt, and confectionery between meals. Realizing that medication is futile and that Mrs. Pumphrey cannot resist indulging the pet, Herriot insists on hospitalizing Tricki for a fortnight.\n\nAt Herriot's surgery, Tricki receives no pharmaceutical intervention or surgical operation. For the first two days, he is given no food—only abundant fresh water. By the second day, Tricki begins sniffing around other dogs; by the third, he joins the active pack in rough-and-tumble scrimmages. Meanwhile, Mrs. Pumphrey inundates the clinic with fresh eggs, vintage wine, and brandy meant for Tricki's convalescence, which Herriot and his staff gleefully consume during lavish breakfasts and dinners.\n\nWithin two weeks, Tricki transforms into a lithe, muscular animal. When Mrs. Pumphrey arrives in her chauffeur-driven carriage, Tricki leaps joyfully into her lap. Overjoyed and tearful, she proclaims his recovery 'a triumph of surgery', entirely unaware that common sense, diet regulation, and physical play—not medical scalpel—had rescued her beloved companion.",
    bulletSummary: [
      "Mrs. Pumphrey pampers her pet dog Tricki with sweetmeats, malt, and Horlicks, rendering him grossly obese like a bloated sausage.",
      "Dr. James Herriot warns that Tricki will fall dangerously ill unless his diet is strictly curtailed.",
      "Tricki refuses food and vomits; Herriot arranges for a 14-day hospitalization as the only viable solution.",
      "At the surgery, Tricki is kept on strict water-only regime for two days, followed by balanced rations and outdoor pack play.",
      "Mrs. Pumphrey sends baskets of fresh eggs, bottles of wine, and brandy, which Herriot and his partners enjoy themselves.",
      "Tricki recovers completely without any medication or surgical cut.",
      "Mrs. Pumphrey emotionally misinterprets natural recovery as 'a triumph of surgery'."
    ],
    characters: [
      {
        name: "Dr. James Herriot",
        role: "Veterinary Surgeon & Narrator",
        emoji: "🩺",
        traits: ["Tactful", "Practical", "Observant", "Good-humoured"],
        description: "Herriot understands dog psychology and human nature equally well. He cures Tricki through dietary discipline rather than unnecessary medication.",
        keyQuote: "I really thought this would happen within very few days. The expected call came within a few days."
      },
      {
        name: "Mrs. Pumphrey",
        role: "Tricki's Wealthy Mistress",
        emoji: "💎",
        traits: ["Affluent", "Overindulgent", "Silly but loving", "Emotionally dependent"],
        description: "A kind-hearted aristocratic woman who mistakenly equates excessive luxury and pampering with genuine maternal care.",
        keyQuote: "He was so listless, Mr. Herriot. I thought he must be suffering from malnutrition."
      },
      {
        name: "Tricki",
        role: "The Pampered Pekingese Dog",
        emoji: "🐕",
        traits: ["Gluttonous", "Adaptable", "Friendly", "Robust"],
        description: "Tricki's only fault was greed. Once released from sedentary luxury, he quickly thrives among normal canine companions.",
        keyQuote: "A lithe, hard-muscled animal."
      }
    ],
    hardWords: [
      { word: "Rheumy", pronunciation: "ROO-mee", partOfSpeech: "adjective", meaning: "Watery or mucous discharge from eyes or nose", contextSentence: "Tricki looked straight ahead and his eyes, bloodshot and rheumy, stared vacantly.", synonyms: ["watery", "runny", "tearful"] },
      { word: "Lumbago", pronunciation: "lum-BAY-go", partOfSpeech: "noun", meaning: "Pain in the muscles and joints of the lower back", contextSentence: "Hodgkin the gardener had lumbago, so there was no ring-throwing game.", synonyms: ["backache", "sciatica"] },
      { word: "Convalescing", pronunciation: "kon-vuh-LES-ing", partOfSpeech: "verb (participle)", meaning: "Recovering health and strength after an illness", contextSentence: "The word 'convalescing' seemed to do something to Mrs. Pumphrey.", synonyms: ["recuperating", "mending"] },
      { word: "Scrimmage", pronunciation: "SKRIM-ij", partOfSpeech: "noun", meaning: "A rough or confused struggle or tussle", contextSentence: "Tricki joined in their friendly scrimmages on the lawn.", synonyms: ["scuffle", "tussle", "melee"] },
      { word: "Distraught", pronunciation: "dih-STRAWT", partOfSpeech: "adjective", meaning: "Extremely worried, agitated, or upset", contextSentence: "Mrs. Pumphrey was distraught; Tricki would eat nothing.", synonyms: ["frantic", "hysterical", "anguished"] },
      { word: "Lithe", pronunciation: "LYTHE", partOfSpeech: "adjective", meaning: "Thin, supple, and graceful in movement", contextSentence: "In two weeks he had been transformed into a lithe, hard-muscled animal.", synonyms: ["agile", "flexible", "nimble"] }
    ],
    keyQuotes: [
      { quote: "Tricki's only fault was greed. He had never been known to refuse food.", speaker: "Dr. Herriot", context: "Explaining the root cause of Tricki's catastrophic health decline." },
      { quote: "This is a triumph of surgery!", speaker: "Mrs. Pumphrey", context: "Final line of the story, highlighting the ironic misunderstanding of Tricki's recovery." },
      { quote: "It was a temptation to keep Tricki on as a permanent guest.", speaker: "Dr. Herriot", context: "Describing how the staff indulged in the eggs, wine, and brandy sent by Mrs. Pumphrey." },
      { quote: "He was so listless, Mr. Herriot. I thought he must be suffering from malnutrition.", speaker: "Mrs. Pumphrey", context: "Revealing her misguided maternal justification for overfeeding Tricki." }
    ],
    examinerTraps: [
      {
        trapTitle: "Did Herriot perform actual surgery?",
        commonMistake: "Writing that Herriot conducted an operation on Tricki's stomach or digestive tract.",
        correctCbseApproach: "Clarify clearly that NO medical surgery or incision was performed. The title is purely ironical; the cure was purely natural exercise and dietary restriction.",
        penaltyRisk: "Loss of 2 marks in Board 3-mark SAQ."
      },
      {
        trapTitle: "Herriot's characterization: Greedy or Pragmatic?",
        commonMistake: "Calling Herriot a thief or corrupt for drinking Mrs. Pumphrey's wine and eggs.",
        correctCbseApproach: "Characterize Herriot as practical and tactful. Returning the gifts would offend Mrs. Pumphrey, while wasting them would be foolish. He kept Tricki safe while making the best of the owner's excess.",
        penaltyRisk: "Inaccurate character sketch in 6-mark question."
      }
    ],
        keywordsList: [
      "Mrs. Pumphrey",
      "Dr. Herriot",
      "Tricki",
      "bloated sausage",
      "rheumy eyes",
      "malnutrition excuse",
      "triumph of surgery",
      "scrimmages",
      "convalescing",
      "overindulgence vs natural discipline"
],
    idiomsAndPhrases: [
      {
            "phrase": "A triumph of surgery",
            "meaning": "A victorious medical cure or miraculous clinical operation",
            "contextSentence": "Mrs. Pumphrey emotionally called Tricki's dietary cure 'a triumph of surgery'."
      },
      {
            "phrase": "Hard lines",
            "meaning": "Difficult, unfortunate circumstances or bad luck",
            "contextSentence": "Herriot recognized that it was hard lines on Tricki to be deprived of food for two days."
      },
      {
            "phrase": "Make a dash for it",
            "meaning": "To run swiftly toward food or shelter in a competition",
            "contextSentence": "At mealtime, the pack of dogs made a dash for the feeding bowls."
      }
],
boardQAs: [
      {
        id: "fp1-ws-1",
        question: "How did Mrs. Pumphrey treat Tricki? (Official Test Series 1 Worksheet)",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Mrs. Pumphrey treated Tricki with excessive pampering and foolish over-indulgence, treating him like a pampered royal child rather than a canine. Mistaking his listlessness for malnutrition, she fed him cod-liver oil, malt, Horlicks, chocolates, and cream cakes between meals, completely eliminating physical exercise. This misguided affection turned him into a bloated, critically sick sausage.",
        keyKeywords: ["excessive pampering", "cod-liver oil and Horlicks", "malnutrition misconception", "eliminated physical exercise", "bloated sausage"],
        examinerRubricTip: "Mention at least 3 specific food items (malt, cod-liver oil, cream cakes) and the lack of exercise."
      },
      {
        id: "fp1-ws-2",
        question: "The household dogs at the surgery rejected Tricki as an 'uninteresting object'. How did he later become an accepted member of the gang and what at surgery did he enjoy? (Official Test Series 1 Worksheet)",
        marks: 3,
        type: "SAQ",
        modelAnswer: "On the first day, the surgery dogs sniffed Tricki, found him motionless and dull, and walked away. However, by the third day, after fasting and hydration restored his vigor, Tricki trotted into the yard, bowled over playfully, and was befriended by Joe the greyhound and others. He relished being bowled over, tramped on, squashed, hunting rats in the old hen-house at night, and competing fiercely during feeding times.",
        keyKeywords: ["uninteresting object", "sniffed and ignored", "regained vigor", "bowled over and tramped on", "rat hunting in hen-house", "feeding time scramble"],
        examinerRubricTip: "Address both parts: the transition from rejection to acceptance, and his enjoyment of rough-and-tumble games/rat hunting."
      },
      {
        id: "fp1-ws-3",
        question: "Why is Mr. Herriot tempted to keep Tricki on as a permanent guest? (Official Test Series 1 Worksheet)",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Dr. Herriot was tempted to retain Tricki as a permanent guest because Mrs. Pumphrey sent lavish provisions for the dog's convalescence. Two dozen fresh eggs arrived daily for breakfast, bottles of fine wine enriched their lunch, and vintage brandy concluded their dinner around the hearth. Herriot and his staff thoroughly enjoyed these aristocratic delicacies, making Tricki's presence immensely pleasurable.",
        keyKeywords: ["temptation of luxury", "two dozen fresh eggs", "wine at lunch", "brandy by the fire", "lavish convalescent gifts"],
        examinerRubricTip: "Must mention eggs for breakfast, wine for lunch, and brandy at night."
      },
      {
        id: "fp1-q1",
        question: "Why was Dr. Herriot really worried about Tricki when he saw him on the street?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Dr. Herriot was shocked by Tricki's alarming physical deterioration. The dog had become hugely fat, resembling a bloated sausage with a leg at each corner. His eyes were bloodshot and rheumy, his tongue lolled out of his jaws, and he was panting with extreme difficulty, indicating impending heart or liver collapse due to morbid obesity.",
        keyKeywords: ["bloated sausage", "rheumy and bloodshot eyes", "tongue lolling", "morbid obesity", "impending collapse"],
        examinerRubricTip: "Use the NCERT imagery 'bloated sausage with a leg at each corner'."
      },
      {
        id: "fp1-q2",
        question: "Explain the situational irony in the title 'A Triumph of Surgery'.",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The title is purely ironical. The word 'surgery' refers to a medical clinic or hospital. While Mrs. Pumphrey emotionally proclaimed Tricki's miraculous recovery as 'a triumph of surgery', assuming cutting-edge medical intervention, Herriot had performed zero surgery and administered no medicine. The cure was achieved solely through fasting, copious water, natural pack socialization, and rigorous exercise.",
        keyKeywords: ["situational irony", "no surgical procedure", "no medication", "fasting and water", "pack socialization", "Pumphrey's ignorance"],
        examinerRubricTip: "Define situational irony: discrepancy between Mrs. Pumphrey's belief and Herriot's real method."
      },
      {
        id: "fp1-q3",
        question: "What kind of person is Dr. James Herriot? Would you describe him as tactful as well as practical?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Dr. Herriot is exceptionally tactful, pragmatic, and compassionate. He recognizes that lecturing Mrs. Pumphrey will fail, so he devises a harmless subterfuge—hospitalizing Tricki for a fortnight. He never offends her feelings by rejecting her eggs and wine, but redirects them to his staff. His medical acumen relies on natural healing rather than unnecessary clinical drugging.",
        keyKeywords: ["tactful and pragmatic", "compassionate", "harmless subterfuge", "understands human psychology", "relies on natural healing"],
        examinerRubricTip: "Give evidence for both 'tactful' (dealing with Mrs. Pumphrey) and 'practical' (curing Tricki without pills)."
      },
      {
        id: "fp1-q4",
        question: "Extract: 'He became an uninteresting object, an accepted member of the gang.' Explain the significance of this transformation in Tricki's life.",
        marks: 3,
        type: "RTC",
        modelAnswer: "This line marks the turning point in Tricki's physical and psychological rehabilitation. At Mrs. Pumphrey's mansion, Tricki was treated like a fragile human royalty, which led to listlessness and sickness. At the clinic, by being treated as an ordinary dog among the canine pack—enduring rough scrambles and rat hunting—he shed his lethargy, discovered his primal instincts, and regained robust health.",
        keyKeywords: ["psychological rehabilitation", "shedding lethargy", "canine pack dynamics", "primal instincts", "natural dog life"],
        examinerRubricTip: "Contrast his pampered human-like status with his natural canine identity."
      },
      {
        id: "fp1-q5",
        question: "How did the staff at Dr. Herriot's clinic react when Tricki was hospitalized?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The entire household was thrown into commotion. The maids rushed in carrying Tricki's day bed, night bed, favorite cushions, toys, rubber rings, breakfast bowl, lunch bowl, and supper bowl. Realizing his small car could never accommodate this mountain of luxury gear, Herriot hastily drove away as Mrs. Pumphrey tearfully tossed little coats through the window.",
        keyKeywords: ["commotion", "day bed and night bed", "multiple bowls", "mountain of luxury gear", "coats tossed through window"],
        examinerRubricTip: "Highlight the absurd comedy of Tricki's aristocratic luggage."
      },
      {
        id: "fp1-laq-1",
        question: "How did Dr. Herriot cure Tricki without any medicinal treatment or surgical operation? Contrast his practical wisdom with Mrs. Pumphrey's foolish pampering.",
        marks: 6,
        type: "LAQ",
        modelAnswer: "Dr. James Herriot's treatment of Tricki exemplifies how clinical common sense and understanding of natural biology surpass blind medication.\n\nMrs. Pumphrey's excessive pampering was the primary cause of Tricki's illness. Loving the dog blindly, she interpreted his listlessness as malnutrition and overfed him cream cakes, chocolates, Horlicks, and malt, while denying him exercise. This turned the animal into a bloated, wheezing invalid.\n\nHerriot diagnosed the affliction accurately as gluttony and physical stagnation. He recognized that as long as Tricki remained in that indulgent environment, no medicine could cure him. He tactfully hospitalized Tricki for two weeks. At the clinic, Tricki was subjected to a regime of zero food and abundant fresh water for forty-eight hours. Gradually, light meals were introduced, and Tricki was released into the yard with an active pack of dogs. The rough-and-tumble games, scrimmage for food, and nightly rat hunts in the hen-house revitalized his metabolism.\n\nIn fourteen days, Tricki transformed into a lithe, muscular dog. Herriot cured him completely through dietary restriction and exercise, without administering a single dose of medicine, while Mrs. Pumphrey ironically hailed it as a 'triumph of surgery'.",
        keyKeywords: ["practical common sense", "misguided affection", "fasting and hydration", "pack socialization", "revitalized metabolism", "triumph of surgery irony"],
        examinerRubricTip: "Structure into 3 paragraphs: Mrs. Pumphrey's blunder, Herriot's natural regimen, and the contrasting conclusion."
      },
      {
        id: "fp1-laq-2",
        question: "'Excess of everything is bad. Over-indulgence and pampering can cause harm rather than good.' Elaborate with reference to Mrs. Pumphrey and Tricki.",
        marks: 6,
        type: "LAQ",
        modelAnswer: "The story 'A Triumph of Surgery' serves as an enduring moral fable on the dangers of unrestrained pampering and misplaced affection.\n\nMrs. Pumphrey belonged to the affluent class and possessed boundless financial resources. However, her affection lacked rational discipline. She treated a small pet dog like a human infant, surrounding him with wardrobes of tweed coats, separate beds, and luxury confectioneries. In doing so, she robbed Tricki of his basic biological nature—running, foraging, and pack socialization. Her blindness to the veterinarian's stern warnings brought the animal to the brink of death.\n\nThis theme holds universal significance for human parenting and relationships as well. Pampering that shields children or dependants from effort, discipline, and healthy struggle breeds helplessness, physical ailments, and psychological fragility. True love requires firmness, setting healthy boundaries, and prioritizing long-term well-being over momentary pleasure. Herriot's firm intervention saved Tricki's life precisely because he replaced harmful pampering with wholesome discipline.",
        keyKeywords: ["moral fable", "unrestrained pampering", "misplaced affection", "robbing biological nature", "universal human parenting analogy", "firmness and boundaries"],
        examinerRubricTip: "Draw a broader philosophical lesson connecting Tricki's pampering to real-world overindulgence."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: true
  },

  // =========================================================================
  // FOOTPRINTS WITHOUT FEET — CHAPTER 2: THE THIEF'S STORY
  // =========================================================================
  {
    id: "fp-ch2-thief-story",
    title: "The Thief's Story",
    book: "Footprints Without Feet",
    type: "story",
    chapterNo: 2,
    author: "Ruskin Bond",
    genre: "Psychological Realism / Moral Drama",
    theme: "The transformative power of unconditional trust, literacy, and human empathy over criminal instincts.",
    funToddlerHook: {
      tagline: "The Boy Pickpocket who returned the Stolen Money for ABCD!",
      funnyStory: "A clever 15-year-old thief named Hari meets Anil at a wrestling match. Anil is so nice he leaves money under his mattress! Hari steals 600 rupees, runs to the railway station, but his heart starts beating: 'If I steal this, I'm just a thief. But if Anil teaches me to read and write sentences, I can become a big, respected gentleman!' In pouring rain, he sneaks back, slips the wet money back under the mattress, and wakes up to hot tea!",
      ahaLesson: "Education and real trust are worth millions more than stolen cash. Love can change any heart.",
      emoji: "🤝"
    },
    deepExplanation: "Ruskin Bond's 'The Thief's Story' is an intimate first-person narrative exploring moral redemption through compassion rather than penal retribution.\n\nHari Singh, a seasoned 15-year-old thief who changes his name monthly to evade police and past employers, targets Anil, an easygoing, 25-year-old freelance writer. Hari ingratiates himself through calculated flattery. Though Hari cannot cook, Anil tolerates his culinary failures, teaches him to cook, and promises to teach him to write his name, full sentences, and add numbers. Hari experiences the joy of learning, though he continues skimming a rupee daily from grocery purchases, which Anil knowingly overlooks.\n\nThe climax arrives when Anil brings home 600 rupees in crisp notes from selling a book manuscript, stashing it beneath his mattress. Driven by criminal conditioning, Hari creeps in while Anil sleeps, extracts the cash, and sprints to the railway station to catch the 10:30 Lucknow Express. As the train pulls out, an inexplicable moral hesitation paralyzes him; he lets the train depart.\n\nSitting drenched in the Maidan under torrential rain, Hari reflects on human psychology: greedy men show fear, rich men anger, but Anil will show only sadness—not for the loss of money, but for the loss of trust. Above all, Hari realizes that stolen money will only buy temporary luxury, whereas literacy could transform him into a respected, genuinely great human being. Sneaking back, he slides the damp currency back under the mattress. The next morning, Anil offers him a fifty-rupee note, still damp from rain, promising regular pay and announcing they will begin writing sentences today. Anil knows everything, but his silent magnanimity seals Hari's complete moral transformation.",
    bulletSummary: [
      "Hari Singh, a 15-year-old serial thief, approaches 25-year-old writer Anil at a wrestling match.",
      "Anil takes Hari in, discovers he cannot cook, but patient teaches him cooking, writing, and arithmetic.",
      "Hari makes a daily profit of about one rupee from grocery shopping, which Anil overlooks.",
      "Anil receives 600 rupees for a published manuscript and tucks the bundle under his mattress.",
      "Hari steals the cash and reaches the railway station, but an inner voice stops him from boarding the Lucknow Express.",
      "In heavy rain at the Maidan, Hari realizes that literacy and trust are infinitely more valuable than stolen notes.",
      "Hari returns to Anil's room and replaces the damp notes under the mattress.",
      "The next morning, Anil hands Hari a damp fifty-rupee note with a gentle smile, choosing forgiveness and education over police arrest."
    ],
    characters: [
      {
        name: "Hari Singh",
        role: "The 15-Year-Old Thief & Narrator",
        emoji: "👦",
        traits: ["Street-smart", "Opportunistic", "Introspective", "Redeemable"],
        description: "A seasoned juvenile criminal whose conscience is awakened by Anil's boundless, non-judgmental trust and the promise of education.",
        keyQuote: "I was an experienced and fairly successful hand."
      },
      {
        name: "Anil",
        role: "The Compassionate Writer",
        emoji: "✍️",
        traits: ["Generous", "Easygoing", "Trusting", "Magnanimous"],
        description: "A struggling 25-year-old writer who lives by fits and starts. His quiet forgiveness and moral generosity achieve what police could never do.",
        keyQuote: "He was the most trusting person I had ever met."
      }
    ],
    hardWords: [
      { word: "Flattery", pronunciation: "FLAT-uh-ree", partOfSpeech: "noun", meaning: "Excessive or insincere praise given especially to further one's own interests", contextSentence: "A little flattery helps in making friends.", synonyms: ["adulation", "cajolery", "blandishment"] },
      { word: "Appealing", pronunciation: "uh-PEE-ling", partOfSpeech: "adjective", meaning: "Attractive, inviting, or eliciting sympathy", contextSentence: "I gave him my most appealing smile.", synonyms: ["engaging", "charming", "winning"] },
      { word: "Fits and starts", pronunciation: "fits and starts", partOfSpeech: "idiom", meaning: "Irregularly, with spasmodic bursts of activity followed by pauses", contextSentence: "Anil made money by fits and starts.", synonyms: ["erratically", "intermittently", "sporadically"] },
      { word: "Deserted", pronunciation: "dih-ZUR-tid", partOfSpeech: "adjective", meaning: "Empty of people; abandoned", contextSentence: "The platform was deserted when the train steamed away.", synonyms: ["unoccupied", "isolated", "barren"] },
      { word: "Spirits", pronunciation: "SPEER-its", partOfSpeech: "noun (plural)", meaning: "Emotional state or mental disposition", contextSentence: "His spirits rose when he thought of learning to write full sentences.", synonyms: ["morale", "temperament", "mood"] }
    ],
    keyQuotes: [
      { quote: "He was the most trusting person I had ever met.", speaker: "Hari Singh", context: "Reflecting on why it was so difficult to rob Anil." },
      { quote: "It is easy to rob a greedy man, but it's hard to rob a careless man.", speaker: "Hari Singh", context: "Explaining the psychological discomfort of victimizing someone who doesn't care about money." },
      { quote: "Education would turn me into a really big man, a clever and respected man.", speaker: "Hari Singh", context: "The realization at the railway platform that halts his criminal escape." },
      { quote: "Today we'll start writing sentences.", speaker: "Anil", context: "The morning after the theft, signaling total forgiveness without confrontation." }
    ],
    examinerTraps: [
      {
        trapTitle: "Did Anil know about the theft?",
        commonMistake: "Assuming Anil was asleep and remained completely ignorant of the nocturnal theft.",
        correctCbseApproach: "Clarify that Anil definitely knew: the 50-rupee note he handed Hari was still damp from the night's rain. However, he deliberately chose silence and forgiveness to protect Hari's self-respect.",
        penaltyRisk: "Lose 1.5 marks in Board 3-mark analytical SAQ."
      },
      {
        trapTitle: "Hari's real motive for returning",
        commonMistake: "Writing that Hari returned because he was afraid of being tracked down by police.",
        correctCbseApproach: "State clearly that Hari had outrun police many times; he returned because of inner moral awakening, the shame of breaking Anil's trust, and his burning desire to become educated.",
        penaltyRisk: "Loss of 2 marks in Board Theme LAQ."
      }
    ],
        keywordsList: [
      "Hari Singh",
      "Anil",
      "15-year-old thief",
      "wrestling match",
      "cook",
      "by fits and starts",
      "600 rupees in fifties",
      "Lucknow Express",
      "damp notes in morning",
      "power of education",
      "silent redemption"
],
    idiomsAndPhrases: [
      {
            "phrase": "By fits and starts",
            "meaning": "Irregularly, with intermittent pauses and spurts",
            "contextSentence": "Anil earned his livelihood by fits and starts, writing for magazines."
      },
      {
            "phrase": "Take into one's confidence",
            "meaning": "To trust someone completely with private matters or money",
            "contextSentence": "Anil took Hari Singh into his confidence and gave him a key to the room."
      },
      {
            "phrase": "Live by one's wits",
            "meaning": "To survive by clever deceit or cunning tricks",
            "contextSentence": "Hari Singh had spent his youth living by his wits as an agile pickpocket."
      }
],
boardQAs: [
      {
        id: "fp2-ws-1",
        question: "Why did Hari Singh smile in his most appealing way towards the end of the story? (Official Test Series 1 Worksheet)",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Towards the end of the story, Hari Singh's appealing smile came naturally, effortlessly, and without any artificial effort. Earlier, his smiles were calculated tools of manipulation used to flatter targets and disarm suspicion. In the final scene, his smile was pure, heartfelt, and born out of profound gratitude toward Anil, who knew about the theft and damp money yet forgave him silently and offered him regular pay and education.",
        keyKeywords: ["spontaneous and natural", "without effort", "earlier calculated manipulation", "profound gratitude", "silent forgiveness and education"],
        examinerRubricTip: "Contrast his earlier calculated smile of flattery with his genuine, unforced smile of gratitude at the end."
      },
      {
        id: "fp2-ws-2",
        question: "What made Hari Singh come back to Anil? (Official Test Series 1 Worksheet)",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Hari Singh returned to Anil due to an inner moral awakening and his desperate desire for genuine education. Standing drenched at the station and Maidan, he realized that 600 rupees would buy only a few days of temporary luxury, whereas learning to read, write, and add numbers from Anil would make him a respected, truly great gentleman. Furthermore, his conscience revolted against betraying the unconditional trust of the kindest man he had ever known.",
        keyKeywords: ["moral awakening", "literacy vs temporary cash", "respected gentleman", "betrayal of unconditional trust", "remorse and conscience"],
        examinerRubricTip: "Must mention both the value of education/respectability and the moral burden of breaking Anil's trust."
      },
      {
        id: "fp2-q1",
        question: "Why did Hari Singh choose Anil as his next target? How did he flatter him?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Hari Singh chose Anil because he appeared easygoing, kind, simple, and trusting—the ideal target for a thief. Hari approached Anil during a wrestling match and flattered him by saying, 'You look a bit of a wrestler yourself.' Flattery broke the ice and allowed Hari to insinuate himself into Anil's home.",
        keyKeywords: ["easygoing and kind", "simple and trusting", "ideal mark", "flattery at wrestling match", "insinuate into home"],
        examinerRubricTip: "Mention the wrestling match setting and the flattery quote."
      },
      {
        id: "fp2-q2",
        question: "How did Anil earn a living? Why was his income described as 'fits and starts'?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Anil was a freelance writer who earned money irregularly 'by fits and starts'. He would borrow one week and lend the next, constantly waiting for his next cheque. As soon as he was paid for an article or manuscript, he would go out and celebrate lavishly with his friends. His livelihood was precarious and unpredictable.",
        keyKeywords: ["freelance writer", "fits and starts", "borrow one week, lend the next", "celebrated when paid", "precarious livelihood"],
        examinerRubricTip: "Explain the idiom 'fits and starts' as irregular, periodic earnings."
      },
      {
        id: "fp2-q3",
        question: "Did Anil know that Hari was taking a rupee from the daily grocery purchases? How did he respond?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Yes, Anil clearly knew that Hari made a modest profit of about one rupee each day when buying the day's supplies. However, Anil never commented on or objected to it. He possessed a generous and tolerant nature, preferring to overlook small petty thefts while focusing on reforming the boy through patience and care.",
        keyKeywords: ["one rupee daily profit", "Anil knew", "did not object", "generous and tolerant nature", "reformation through patience"],
        examinerRubricTip: "State that Anil knew but intentionally overlooked it."
      },
      {
        id: "fp2-q4",
        question: "What observations about human psychology does Hari Singh share regarding how different people react to being robbed?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "In his short career as a thief, Hari had studied men's faces when they lost their goods: the greedy man showed fear; the rich man showed anger; and the poor man showed resigned acceptance. But he knew that Anil's face, when he discovered the theft, would show only a touch of sadness—not for the loss of money, but for the breach of trust.",
        keyKeywords: ["study of human faces", "greedy showed fear", "rich showed anger", "poor showed acceptance", "Anil showed sadness for breach of trust"],
        examinerRubricTip: "Mention all 4 categories: greedy (fear), rich (anger), poor (acceptance), and Anil (loss of trust)."
      },
      {
        id: "fp2-q5",
        question: "Extract: 'He knew. But neither his lips nor his eyes showed anything.' Analyze the significance of Anil's silence.",
        marks: 3,
        type: "RTC",
        modelAnswer: "This extract underscores Anil's supreme emotional maturity and empathy. Anil noticed the damp fifty-rupee note, proving Hari had stolen and returned the money in the midnight downpour. By choosing silence over reprimand or police intervention, Anil safeguarded Hari's fragile dignity, gave him a second chance, and cemented the boy's moral redemption forever.",
        keyKeywords: ["emotional maturity", "silent forgiveness", "damp currency evidence", "safeguarded dignity", "cemented redemption"],
        examinerRubricTip: "Explain that silence was more powerful than confrontation or punishment."
      },
      {
        id: "fp2-q6",
        question: "Why did Hari Singh change his name every month?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Hari Singh was not his real name; he adopted a new alias every single month. He did this deliberately to evade detection by the police and to stay ahead of his former employers whom he had previously robbed, ensuring he remained an elusive phantom.",
        keyKeywords: ["adopted alias", "evade police", "escape former employers", "elusive juvenile thief"],
        examinerRubricTip: "Mention both police evasion and staying ahead of previous victims."
      },
      {
        id: "fp2-laq-1",
        question: "'Love, trust, and education can transform a hardened criminal more effectively than punishment.' Discuss this statement in the light of Hari Singh's redemption by Anil.",
        marks: 6,
        type: "LAQ",
        modelAnswer: "Ruskin Bond's 'The Thief's Story' provides profound psychological insight into the reformative power of unconditional love and education over penal punishment.\n\nHari Singh was a hardened fifteen-year-old thief who had learned to manipulate people through deceit, flattery, and alias identities. Society had treated him as a criminal, and he responded by sharpening his criminal trades. When he met Anil, he encountered a completely different human response. Anil did not lock his cupboards, did not keep tabs on daily grocery change, and even entrusted Hari with the house key.\n\nWhen Hari stole the 600 rupees, no external barrier prevented his escape. He reached the platform, and the train was departing. Yet, he could not board. It was Anil's moral generosity that haunted him. Hari realized that stealing money would keep him an uneducated, petty criminal forever, whereas Anil's promise to teach him to read, write, and add numbers offered him a path to dignity, self-respect, and genuine greatness.\n\nWhen Hari returned, Anil noticed the damp notes but did not scold him or call the police. Instead, he gave him fifty rupees and promised to begin writing full sentences. This compassionate silence transformed Hari permanently, proving that empathy and education conquer crime where prisons fail.",
        keyKeywords: ["reformative power of trust", "unconditional generosity", "unlocked house key", "temptation at railway platform", "literacy vs petty crime", "compassionate silence"],
        examinerRubricTip: "Follow a 3-part structure: Hari's criminal background, the psychological dilemma at the station, and Anil's silent triumph."
      },
      {
        id: "fp2-laq-2",
        question: "Compare and contrast the characters of Hari Singh and Anil. How did their contrasting personalities influence each other?",
        marks: 6,
        type: "LAQ",
        modelAnswer: "Hari Singh and Anil represent two contrasting facets of human nature: cunning street survival versus gentle artistic innocence.\n\nHari Singh is cynical, calculating, and opportunistic. Despite his youth, he understands human weaknesses and exploits them through flattery and deceit. He views human relationships through the prism of utility—Anil is initially just a mark to be robbed. In contrast, Anil is trusting, carefree, and utterly devoid of cynicism. He writes for magazines, earns erratically, and spends generously. He lacks suspicion to the extent that robbing him makes Hari feel uncomfortable.\n\nTheir interaction creates a profound moral dynamic. While Hari intended to exploit Anil's gullibility, Anil's genuine kindness disarmed Hari's cynicism. Anil taught him not merely how to cook, but how to read and write. By demonstrating boundless trust—leaving money under the mattress and handing over the room keys—Anil appealed to the dormant goodness within Hari. In the end, Anil's innocence proved far stronger than Hari's street-smarts, redeeming the boy and turning a thief into an honest student.",
        keyKeywords: ["cunning survival vs artistic innocence", "cynicism disarmed by kindness", "utilitarian view of people", "boundless trust and keys", "dormant goodness awakened", "innocence stronger than cunning"],
        examinerRubricTip: "Contrast their outlooks on money, relationships, and honesty, then explain how Anil's character influenced Hari's transformation."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: true
  },

  // =========================================================================
  // FOOTPRINTS WITHOUT FEET — CHAPTER 3: THE MIDNIGHT VISITOR
  // =========================================================================
  {
    id: "fp-ch3-midnight-visitor",
    title: "The Midnight Visitor",
    book: "Footprints Without Feet",
    type: "story",
    chapterNo: 3,
    author: "Robert Arthur",
    genre: "Espionage Mystery / Suspense Drama",
    theme: "Intellectual agility and presence of mind outweigh physical brawn and weaponry in espionage.",
    funToddlerHook: {
      tagline: "The Fat Secret Agent who Defeated an Armed Spy with an Invisible Balcony!",
      funnyStory: "A young writer Fowler wanted to meet a dashing James Bond spy. Instead, he meets Ausable: short, fat, slovenly, living in a dingy French hotel! Fowler feels totally cheated—until they walk into the dark room and click on the light. FREEZE! A rival spy named Max is pointing a black pistol at them! Ausable doesn't panic at all. He sighs, complains that the hotel balcony below his window lets people sneak in, and when a sudden KNOCK comes at the door, Ausable whispers: 'Shh! That's the police!' Max panics, steps backward out the window onto the 'balcony'—and falls six floors into the courtyard screaming! The door opens... it's just the waiter with drinks!",
      ahaLesson: "Brainpower beats a loaded gun every single time. Stay cool under pressure!",
      emoji: "🕵️"
    },
    deepExplanation: "Robert Arthur's 'The Midnight Visitor' subverts the glamorous Hollywood stereotypes of secret agents through the portly, quick-witted character of Ausable.\n\nFowler, a romantic young writer, spends an evening with Ausable, expecting high-stakes espionage, glamorous femme fatales, and darting shadows. Instead, he finds Ausable exceedingly fat, speaking with an American twang despite living in Paris for two decades, and residing in a gloomy room on the sixth floor of a mediocre French hotel. Fowler feels intensely disillusioned.\n\nThe atmosphere turns lethal the moment Ausable unlocks his room. Switching on the light, they discover Max, a slender, hawk-faced rival operative, brandishing an automatic pistol. Max has come to hijack an extremely sensitive government report regarding new missiles, which Ausable is due to receive that midnight.\n\nAusable exhibits extraordinary psychological composure. Without betraying an ounce of terror, he slumps into an armchair and launches into an irritated complaint about the hotel management. He convincingly concocts a fabricated story about a non-existent balcony extending beneath his window, claiming that this is the second time that month an intruder has broken into his room through that balcony. Max, who had entered with a passkey, bitterly regrets not knowing about the easy balcony route.\n\nSuddenly, a sharp knock rattles the door. Ausable calmly informs the terrified Max that he had requested the police to provide extra protection for the vital missile papers. Driven to sheer panic, Max orders Ausable to send the police away while he steps backward through the window sill onto the 'balcony' to hide, threatening to shoot if betrayed. Max leaps backward—and his prolonged, blood-curdling scream echoes as he plummets six floors to his death on the paved courtyard. The door opens to reveal Henry the waiter, bearing the drinks Ausable had ordered earlier. Fowler stammers, 'B-but what about the man out on the balcony?' Ausable coolly smiles: 'No, he will not return. There is no balcony.'",
    bulletSummary: [
      "Fowler, a romantic writer, is disappointed by Ausable's fat, unglamorous appearance in a dingy Paris hotel.",
      "They enter Ausable's 6th-floor room and find rival spy Max pointing a pistol, demanding missile blueprints.",
      "Ausable stays calm and spins a convincing yarn about an annoying 'balcony' under his window.",
      "Max regrets using a risky passkey instead of the fictitious balcony.",
      "A loud knock at the door sends Max into a panic; Ausable lies that it is the police providing extra security.",
      "Max backs out the window onto the non-existent balcony and falls six floors to his death.",
      "The door opens to reveal Henry the waiter with drinks; Ausable reveals there never was a balcony."
    ],
    characters: [
      {
        name: "Ausable",
        role: "The Shrewd Secret Agent",
        emoji: "🕵️",
        traits: ["Quick-witted", "Unflappable", "Deceptive", "Portly"],
        description: "Lacks physical fitness and glamorous appeal, but possesses extraordinary psychological genius and lightning-fast improvisation under lethal threat.",
        keyQuote: "You were told that I was a secret agent, a spy, dealing in espionage and danger. You wished to meet me because you are a writer, young and romantic."
      },
      {
        name: "Max",
        role: "The Rival Operative",
        emoji: "🔫",
        traits: ["Slender", "Nervous", "Over-reliant on weapon", "Gullible"],
        description: "A dangerous but naive operative who relies on his gun rather than wits. His lack of recon and psychological gullibility cause his doom.",
        keyQuote: "I had a passkey. I did not know about the balcony. It might have saved me some trouble."
      },
      {
        name: "Fowler",
        role: "The Romantic Writer",
        emoji: "📝",
        traits: ["Imaginative", "Impressionable", "Observant", "Easily panicked"],
        description: "A young writer seeking dramatic spy thrills who learns that true heroism is intellectual calm rather than cinematic swagger."
      }
    ],
    hardWords: [
      { word: "Espionage", pronunciation: "ES-pee-uh-nahzh", partOfSpeech: "noun", meaning: "The practice of spying or using spies to obtain secret government information", contextSentence: "Ausable dealt in espionage and dangerous secrets.", synonyms: ["intelligence gathering", "undercover work"] },
      { word: "Slovenly", pronunciation: "SLUV-uhn-lee", partOfSpeech: "adjective", meaning: "Messy, untidy, or careless in appearance", contextSentence: "Ausable's slovenly appearance shocked the young writer.", synonyms: ["disheveled", "untidy", "scruffy"] },
      { word: "Chuckle", pronunciation: "CHUK-uhl", partOfSpeech: "verb", meaning: "Laugh quietly or inwardly", contextSentence: "Ausable chuckled to himself as he unlocked the door.", synonyms: ["giggle", "snicker", "chortle"] },
      { word: "Passkey", pronunciation: "PASS-kee", partOfSpeech: "noun", meaning: "A master key that opens a number of different locks", contextSentence: "Max admitted he entered using a passkey.", synonyms: ["master key", "skeleton key"] },
      { word: "Deftly", pronunciation: "DEFT-lee", partOfSpeech: "adverb", meaning: "Quickly and neatly in movement; skillfully", contextSentence: "Henry deftly unstoppered the bottle and placed the glasses on the table.", synonyms: ["skillfully", "nimbly", "adeptly"] }
    ],
    keyQuotes: [
      { quote: "There is no balcony. You see, my friend, there is no balcony below.", speaker: "Ausable", context: "The final reveal to the stunned Fowler after Max plummets to his death." },
      { quote: "I'm going to raise the devil with the management this time, and you can bet on it.", speaker: "Ausable", context: "Feigning exasperation about the fictional balcony to trick Max." },
      { quote: "Ausable didn’t fit any description of a secret agent Fowler had ever read about.", speaker: "Narrator", context: "Highlighting the contrast between romantic spy fiction and realistic tradecraft." }
    ],
    examinerTraps: [
      {
        trapTitle: "Who was knocking at the door?",
        commonMistake: "Writing that the French police really knocked on the door.",
        correctCbseApproach: "Clarify that the knock came from Henry the room-service waiter delivering the drinks Ausable ordered earlier. Ausable's claim of police presence was pure psychological warfare.",
        penaltyRisk: "Loss of 2 marks in Board 3-mark SAQ."
      },
      {
        trapTitle: "Why did Max jump?",
        commonMistake: "Stating Max slipped or was pushed out by Ausable.",
        correctCbseApproach: "Emphasize that Max jumped voluntarily because he completely believed Ausable's fabricated balcony story and panicked when he believed police were at the door.",
        penaltyRisk: "Lose 1 mark on plot comprehension."
      }
    ],
        keywordsList: [
      "Ausable",
      "Max",
      "Fowler",
      "slushy French hotel",
      "secret missile report",
      "fictitious balcony",
      "knock at the door",
      "clever presence of mind",
      "deconstruct spy stereotype",
      "waiter Henry"
],
    idiomsAndPhrases: [
      {
            "phrase": "Keep one's head",
            "meaning": "To remain calm, cool, and logical in the face of imminent danger",
            "contextSentence": "Ausable kept his head even while facing Max's loaded automatic pistol."
      },
      {
            "phrase": "Out of the blue",
            "meaning": "Unexpectedly without any warning",
            "contextSentence": "Max stepped out of the blue, demanding the secret missile documents."
      },
      {
            "phrase": "Pass off as",
            "meaning": "To present something misleading as genuine",
            "contextSentence": "Ausable passed off the room waiter's knocking as an unannounced police inspection."
      }
],
boardQAs: [
      {
        id: "fp3-ws-1",
        question: "Max was unprepared for his mission. Discuss with reference to the chapter. (Official Test Series 1 Worksheet)",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Max proved thoroughly unprepared, amateurish, and naive despite carrying a gun. Firstly, he lacked basic architectural reconnaissance of Ausable's room, entering blindly with a passkey without verifying window layouts. Secondly, he gullibly swallowed Ausable's fabricated tale of a balcony without visually inspecting it. Finally, he panicked instantly at the waiter's knock, mistaking it for the police, and jumped out blindly to his death.",
        keyKeywords: ["amateurish and unprepared", "lacked architectural reconnaissance", "gullibly believed balcony lie", "panicked at waiter's knock", "over-reliant on gun"],
        examinerRubricTip: "Mention his failure in reconnaissance, gullibility regarding the balcony, and panic at the knock."
      },
      {
        id: "fp3-ws-2",
        question: "Diary Entry: As Ausable, write a diary entry in 100-120 words describing your encounter with Max and how your quick thinking saved the confidential report on missiles. (Official Test Series 1 Worksheet)",
        marks: 6,
        type: "LAQ",
        modelAnswer: "Paris\n10 November 2026\n11:30 PM\n\nDear Diary,\n\nTonight proved that a sharp mind is far deadlier than a loaded Luger. I returned to my room with young Fowler, expecting nothing more thrilling than a dry night, only to find Max pointing an automatic pistol at my chest. He demanded the confidential missile papers.\n\nInstead of panicking, I exploited human psychology. I feigned irritation and spun a fabricated story about a non-existent balcony beneath my window. When Henry knocked with the drinks I had ordered, I convinced Max it was the police. Terrified, the fool backed out onto the 'balcony'—and plummeted six floors to his doom.\n\nThe missile report is secure, and Fowler learned that real tradecraft isn't Hollywood glamour—it's cool nerves and psychological warfare.\n\nAusable",
        keyKeywords: ["diary format", "sharp mind over loaded gun", "missile blueprints security", "fabricated balcony story", "manipulation of waiter knock", "Fowler's real tradecraft lesson"],
        examinerRubricTip: "Must maintain first-person persona ('I', Ausable), include date/place, and stay within 100-120 words."
      },
      {
        id: "fp3-q1",
        question: "How did Ausable describe the non-existent balcony to convince Max of its reality?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Ausable built credibility through rich circumstantial detail and theatrical irritation. He explained that the room used to be part of a larger apartment, and the window led into an adjoining room's balcony that extended beneath his sill. He complained bitterly that it was the second time that month the hotel management had failed to block intruders using it, making the lie sound utterly mundane and authentic.",
        keyKeywords: ["circumstantial detail", "theatrical irritation", "adjoining apartment layout", "second time this month", "blamed management"],
        examinerRubricTip: "Mention the 'second time this month' detail and the adjoining apartment explanation."
      },
      {
        id: "fp3-q2",
        question: "How did Ausable's physical appearance contrast sharply with Fowler's romanticized image of a secret agent?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Fowler expected a tall, athletic, enigmatic spy resembling a movie protagonist surrounded by danger and glamorous women. Instead, Ausable was grossly fat, slovenly dressed, living in a gloomy, cheap hotel, and spoke with an authentic American twang. This jarring contrast made Fowler feel bored and disillusioned initially.",
        keyKeywords: ["grossly fat", "slovenly dressed", "gloomy cheap hotel", "American twang", "shattered romantic movie stereotypes"],
        examinerRubricTip: "Contrast Fowler's movie-inspired expectations with Ausable's real-life physical flaws."
      },
      {
        id: "fp3-q3",
        question: "Who knocked on the door of Ausable's room? How did Ausable manipulate this knock to trap Max?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The knock was made by Henry, the hotel waiter delivering the bottle of wine and two glasses that Ausable had ordered upon entering. Ausable exploited this ordinary event by whispering solemnly that it was the police, whom he claimed to have requested for extra security over the missile papers. This bluff drove Max into blind panic.",
        keyKeywords: ["Henry the waiter", "wine and glasses delivery", "solemn whisper", "pre-ordered drinks", "police bluff drove panic"],
        examinerRubricTip: "Clarify who actually knocked (Henry) and what Ausable claimed (police)."
      },
      {
        id: "fp3-q4",
        question: "What was the critical document that Max had come to steal at gunpoint?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Max had broken into the room to intercept a confidential military report concerning new missiles. Ausable noted that several men and women had risked their lives to compile it, and its contents were so significant that it could influence the course of future international history.",
        keyKeywords: ["confidential military report", "new missiles", "risked their lives", "influence course of history", "high-stakes intelligence"],
        examinerRubricTip: "Identify the document as the secret report on new missiles."
      },
      {
        id: "fp3-q5",
        question: "How does Fowler's impression of Ausable change by the end of the evening?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Initially, Fowler felt cheated, disappointed, and bored by Ausable's unglamorous appearance and sluggish demeanor. By the story's climax, after witnessing Ausable coolly trick an armed assassin into jumping to his death without lifting a finger, Fowler was filled with awe, realizing that true espionage relies on nerve, intellect, and psychology rather than physical swagger.",
        keyKeywords: ["initially cheated and bored", "climax filled with awe", "tricked armed assassin without violence", "intellect over swagger"],
        examinerRubricTip: "Trace the arc: boredom/disillusionment → fear during standoff → complete awe/admiration."
      },
      {
        id: "fp3-q6",
        question: "What French accent and physical traits characterized Ausable despite twenty years in Paris?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Although Ausable had lived in Paris for over twenty years, having arrived from Boston, he spoke French and German only passably. He had never completely shed the basic American accent he brought from Boston. Physically, he was exceedingly fat and heavy-footed, wheezing as he climbed the six flights of stairs.",
        keyKeywords: ["twenty years in Paris", "brought from Boston", "American accent retained", "spoke French passably", "exceedingly fat and wheezing"],
        examinerRubricTip: "Mention the Boston origin and his retention of the American accent."
      },
      {
        id: "fp3-laq-1",
        question: "Presence of mind and psychological deception are far more potent weapons than physical force and firearms. Justify this with reference to Ausable's defeat of Max.",
        marks: 6,
        type: "LAQ",
        modelAnswer: "Robert Arthur's 'The Midnight Visitor' is a masterclass in proving that mental fortitude, calmness under mortal danger, and psychological warfare surpass brute physical force.\n\nWhen Ausable entered his hotel room, the physical odds were overwhelmingly stacked against him. Max possessed every tactical advantage: he held an automatic pistol, had surprised his targets in the dark, and was physically agile. A conventional operative might have engaged in physical violence or attempted a desperate lunge, which would likely have resulted in tragedy.\n\nAusable understood that an opponent holding a gun is driven by nervous tension. Instead of showing fear, Ausable neutralized the atmosphere by acting irritated about trivial hotel mismanagement. He spun a richly detailed yarn about a fictitious balcony under his window sill. By framing the balcony as a routine nuisance rather than a weapon, he implanted a fatal mental escape route in Max's mind.\n\nWhen the waiter knocked, Ausable delivered the masterstroke by claiming it was the police. Overwhelmed by panic, Max abandoned his gun's advantage, stepped out onto the non-existent balcony, and plummeted six floors to his death. Ausable won without throwing a punch or firing a bullet, proving that composure and intellect reign supreme in crisis.",
        keyKeywords: ["mental fortitude over physical force", "tactical disadvantages overcome", "nervous tension exploited", "fictitious balcony planted in mind", "police masterstroke", "victory without violence"],
        examinerRubricTip: "Contrast Max's reliance on his gun with Ausable's psychological weaponization of the room."
      },
      {
        id: "fp3-laq-2",
        question: "Describe the atmosphere of suspense in 'The Midnight Visitor'. How does the author build and release dramatic tension?",
        marks: 6,
        type: "LAQ",
        modelAnswer: "The author Robert Arthur masterfully orchestrates suspense through anticlimax, sudden lethal shock, and a breathtaking twist ending.\n\nThe narrative begins with intentional deflation. The author leads the reader to expect thrilling spy intrigue through Fowler's eyes, only to disappoint them with Ausable's slovenly, fat appearance and dull Parisian surroundings. This lulls the reader into a false sense of security and mundane normalcy.\n\nThe suspense explodes violently the moment the room light clicks on, revealing Max standing with a drawn automatic pistol. The danger is acute and immediate. Tension tightens as Ausable calmly discusses missile blueprints while casually weaving the tale of the balcony. The suspense reaches a fever pitch with the sudden, sharp rapping at the door. The reader, like Max, believes the police have arrived, anticipating a bloody shootout.\n\nThe resolution is an ironic tour de force: Max drops into empty space with a blood-curdling scream, and the door swings open to reveal only a mild waiter with a tray of drinks. The release of tension is both humorous and exhilarating.",
        keyKeywords: ["anticlimax and sudden shock", "deflation of expectations", "lethal escalation with pistol", "fever pitch knock at door", "ironic tour de force resolution", "humorous and exhilarating release"],
        examinerRubricTip: "Analyze the 3 phases of suspense: initial anticlimax, sudden lethal danger, and ironic resolution."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: true
  },

  // =========================================================================
  // FOOTPRINTS WITHOUT FEET — CHAPTER 4: A QUESTION OF TRUST
  // =========================================================================
  {
    id: "fp-ch4-question-of-trust",
    title: "A Question of Trust",
    book: "Footprints Without Feet",
    type: "story",
    chapterNo: 4,
    author: "Victor Canning",
    genre: "Caper Story / Ironic Mystery",
    theme: "Honor among thieves is an illusion; superficial judgments and vanity lead to catastrophic deception.",
    funToddlerHook: {
      tagline: "The Locksmith Thief who got Tricked by a Girl in Red!",
      funnyStory: "Horace Danby was a 50-year-old bachelor who made locks, loved buying super-expensive collector books, and robbed ONE rich safe every year to pay for them! He studied a rich mansion called Shotover Grange for two weeks, sneaked in with his toolbag, and calmed the dog Sherry. But he had hay fever—ACHOO! Suddenly, a pretty lady in a red dress walked in, petting the dog. She said: 'Oh, you're a thief? I forgot my safe combination! If you crack it open for me, I won't call the police.' Horace smiled, took off his gloves, broke the safe, and gave her the jewels. Two days later... POLICE! The lady in red was ANOTHER thief, and Horace's fingerprints were all over the safe!",
      ahaLesson: "Never trust a stranger's smile, especially when you are doing something wrong!",
      emoji: "🔐"
    },
    deepExplanation: "Victor Canning's 'A Question of Trust' explores the ironic breakdown of the classic adage 'honor among thieves'.\n\nHorace Danby, a respected 50-year-old unmarried locksmith living with a housekeeper, has a secret criminal career. Passionate about collecting rare, expensive books, he finances his aristocratic hobby by meticulously burglarizing one wealthy mansion each year. His preparation is immaculate: he studies house plans, electric wiring, servant routines, and dog names weeks in advance.\n\nHis target is Shotover Grange, containing 15,000 pounds worth of jewels. With the family in London and the two servants at the cinema, Horace breaks in with his specialized toolkit. However, flowers on the table aggravate his chronic hay fever, causing repeated sneezing fits. While attempting to open the safe hidden behind a mediocre painting, he is startled by a calm, authoritative female voice. A poised young woman in a charming red dress enters, petting the family dog Sherry. She carries herself with such effortless domestic elegance that Horace naturally assumes she is the mistress of the house.\n\nThe lady plays a masterclass in psychological manipulation. She threatens to summon the police unless Horace opens the safe for her, claiming she promised her husband she would wear her jewels to a dinner party but had forgotten the combination. Eager to escape imprisonment, Horace gallantly agrees, removes his gloves to manipulate the delicate lock mechanism, cracks the safe within an hour, and hands her the jewels.\n\nTwo days later, the police arrest Horace at his home. His bare fingerprints covered every surface of the ransacked safe. The real mistress of Shotover Grange, a sharp-tongued, grey-haired woman of sixty, dismissed his story of opening the safe for the wife as ridiculous nonsense. The charming lady in red was herself a master thief who had effortlessly outsmarted Horace. Now serving as assistant librarian in prison, Horace bristles with fury whenever anyone mentions 'honor among thieves'.",
    bulletSummary: [
      "Horace Danby, an apparently respectable 50-year-old locksmith, steals once a year to buy rare books.",
      "He targets Shotover Grange, which holds 15,000 pounds worth of jewels in a concealed safe.",
      "Horace enters the house, calms the terrier Sherry, but sneezes repeatedly due to hay fever.",
      "A poised young lady in red appears, confidently petting the dog and pretending to be the lady of the house.",
      "She tricks Horace into opening the safe without gloves by claiming she forgot the combination.",
      "Horace hands over the jewels and departs happily, believing he escaped arrest.",
      "Two days later, police arrest Horace because his fingerprints cover the safe; the real owner is a 60-year-old woman.",
      "Horace realizes he was outsmarted by another thief and resents the phrase 'honor among thieves'."
    ],
    characters: [
      {
        name: "Horace Danby",
        role: "The Book-Loving Burglar",
        emoji: "🔓",
        traits: ["Meticulous", "Polite", "Naive", "Allergy-prone"],
        description: "A skilled craftsman who steals solely for intellectual indulgence, but whose chivalrous vanity and panic blind him to deception.",
        keyQuote: "He was good and respectable—but not completely honest."
      },
      {
        name: "The Lady in Red",
        role: "The Master Impostor",
        emoji: "💃",
        traits: ["Graceful", "Manipulative", "Cool-headed", "Resourceful"],
        description: "A fellow thief of extraordinary poise who uses acting talent and psychology to turn another burglar into her unpaid accomplice.",
        keyQuote: "You'll let me go? ... I'm always thinking of the jewels in the safe."
      },
      {
        name: "Sherry",
        role: "The Shotover Grange Dog",
        emoji: "🐕",
        traits: ["Friendly", "Easily pacified"],
        description: "A small terrier who greets burglars affectionately when addressed by his real name."
      }
    ],
    hardWords: [
      { word: "Hay fever", pronunciation: "HAY fee-ver", partOfSpeech: "noun", meaning: "An allergy caused by pollen or dust, causing sneezing and watery eyes", contextSentence: "The flowers on the table triggered Horace's hay fever.", synonyms: ["allergic rhinitis"] },
      { word: "Chaff", pronunciation: "CHAF", partOfSpeech: "noun/verb", meaning: "Teasing or bantering talk; or husks of corn", contextSentence: "He spoke without any trace of chaff or jest.", synonyms: ["banter", "badinage", "teasing"] },
      { word: "Grange", pronunciation: "GRAYNJ", partOfSpeech: "noun", meaning: "A country house with farm buildings attached", contextSentence: "Shotover Grange stood secluded in the countryside.", synonyms: ["manor", "estate", "country house"] },
      { word: "Meticulous", pronunciation: "muh-TIK-yuh-luhs", partOfSpeech: "adjective", meaning: "Showing great attention to detail; very careful and precise", contextSentence: "Horace was meticulous in mapping the electrical wiring of the house.", synonyms: ["scrupulous", "painstaking", "thorough"] },
      { word: "Impostor", pronunciation: "im-POS-ter", partOfSpeech: "noun", meaning: "A person who pretends to be someone else in order to deceive", contextSentence: "The woman in red was a brilliant impostor.", synonyms: ["charlatan", "fraud", "pretender"] }
    ],
    keyQuotes: [
      { quote: "He was good and respectable — but not completely honest.", speaker: "Narrator", context: "Opening paradox defining Horace Danby's double life." },
      { quote: "Honor among thieves.", speaker: "Horace Danby", context: "The code that Horace believed in, but which proved non-existent when he was duped by a fellow thief." },
      { quote: "I'd like to help you, but you see I've promised my husband to take my jewels to our club tonight.", speaker: "Lady in Red", context: "The calculated lie she used to convince Horace to crack the safe for her." }
    ],
    examinerTraps: [
      {
        trapTitle: "Why did Horace remove his gloves?",
        commonMistake: "Writing that Horace forgot his gloves at home.",
        correctCbseApproach: "Clarify that Horace wore gloves during the entire burglary, but removed them when lighting the lady's cigarette and cracking the delicate safe mechanism to please her and escape police.",
        penaltyRisk: "Lose 1 mark on crucial plot detail."
      },
      {
        trapTitle: "Was Horace a professional criminal?",
        commonMistake: "Describing Horace as a violent, habitual street robber.",
        correctCbseApproach: "Emphasize that Horace was a respectable locksmith who stole strictly once a year to fund his passion for rare books, carrying no weapons and abhorring violence.",
        penaltyRisk: "Lose 1.5 marks on character analysis."
      }
    ],
        keywordsList: [
      "Horace Danby",
      "rare books",
      "Shotover Grange",
      "hay fever",
      "safe robbery",
      "young lady in red",
      "Sherry the dog",
      "honour among thieves",
      "tricked by equal",
      "assistant librarian in prison"
],
    idiomsAndPhrases: [
      {
            "phrase": "Honour among thieves",
            "meaning": "The moral code that criminals do not cheat one another",
            "contextSentence": "Horace Danby gets furious whenever someone mentions 'honour among thieves'."
      },
      {
            "phrase": "Caught red-handed",
            "meaning": "Apprehended in the very act of committing a crime",
            "contextSentence": "Horace's fingerprints on the safe caused him to be caught red-handed."
      },
      {
            "phrase": "A wolf in sheep's clothing",
            "meaning": "A dangerous deceiver posing as a friendly innocent",
            "contextSentence": "The young lady in red was a wolf in sheep's clothing who tricked Horace."
      }
],
boardQAs: [
      {
        id: "fp4-ws-1",
        question: "Horace was a successful thief because he carefully planned his robberies. Should we call him a successful thief and still appreciate his work? Why or why not? (Official Test Series 1 Worksheet)",
        marks: 6,
        type: "LAQ",
        modelAnswer: "No, we cannot call Horace Danby a truly successful thief, nor can we ethically appreciate his criminal deeds.\n\nUndeniably, Horace planned with meticulous precision: he studied electric wiring, house architecture, servant routines, and dog names for weeks, stealing only once a year to buy rare collector books. However, crime remains a violation of social ethics and law regardless of intellectual motivation. Theft cannot be sanitized by calling it a hobby.\n\nFurthermore, Horace's success was an illusion. His criminal pride and naive gallantry blinded him when a younger, sharper thief in red entered. By trusting her blindly and opening the safe barehanded to escape police, he left fingerprints everywhere. He ended up imprisoned, proving that crime never delivers genuine success or honor.",
        keyKeywords: ["illusion of success", "crime cannot be appreciated", "moral and legal violation", "intellectual motive does not justify theft", "outsmarted by lady in red", "fingerprints carelessness"],
        examinerRubricTip: "Structure with clear thesis, evaluate his meticulous planning vs naive downfall, and conclude on moral grounds."
      },
      {
        id: "fp4-q1",
        question: "How did the young lady in red convince Horace Danby that she was the lady of the house?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The young woman displayed consummate poise and domestic familiarity. She walked in calmly, touched up the fireplace ornaments, commanded the dog Sherry with effortless authority, spoke in a quiet, cultured tone, and reprimanded Horace like a rightful homeowner. Her supreme confidence dispelled any suspicion in Horace's mind.",
        keyKeywords: ["poise", "domestic familiarity", "commanded the dog", "cultured tone", "supreme confidence"],
        examinerRubricTip: "Mention her interaction with the dog Sherry and the fireplace."
      },
      {
        id: "fp4-q2",
        question: "What was Horace Danby's profession, and what passionate hobby drove him to commit theft once a year?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Horace Danby was a respectable locksmith who ran a prosperous lock-making business with two assistants. His secret obsession was collecting rare and expensive books. Because collector books required substantial funds, he meticulously robbed one wealthy safe each year, calculating the proceeds to last precisely twelve months.",
        keyKeywords: ["respectable locksmith", "two assistants", "rare and expensive books", "one safe per year", "funded twelve months"],
        examinerRubricTip: "Mention both his day job (lockmaker) and his secret hobby (rare book collector)."
      },
      {
        id: "fp4-q3",
        question: "What physical allergy afflicted Horace at Shotover Grange? How did it lead to his undoing?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Horace suffered from chronic hay fever triggered by flowers. Inside the drawing room of Shotover Grange, a large bowl of flowers sat on the table. The pollen irritated his respiratory tract, causing uncontrollable sneezing fits. His loud sneezes attracted the attention of the lady in red, initiating the encounter that led to his arrest.",
        keyKeywords: ["chronic hay fever", "bowl of flowers", "pollen irritation", "uncontrollable sneezing fits", "attracted the lady in red"],
        examinerRubricTip: "Name the affliction as hay fever and link it directly to the encounter with the lady."
      },
      {
        id: "fp4-q4",
        question: "How did Horace prepare for the burglary at Shotover Grange during the two weeks preceding it?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Horace spent two weeks studying Shotover Grange thoroughly. He analyzed its rooms, electric wiring, paths, and garden. He learned that the family was in London and the two resident servants had gone to the movies that afternoon. He even learned the family terrier's name (Sherry) to pacify it upon entry.",
        keyKeywords: ["two weeks study", "electric wiring and paths", "servants at cinema", "family in London", "pacified dog Sherry by name"],
        examinerRubricTip: "Mention the wiring study, servant schedule, and dog's name."
      },
      {
        id: "fp4-q5",
        question: "Why did the young woman in red ask Horace to break open the safe for her? What excuse did she offer?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The woman claimed that she had promised her husband she would wear her jewels to a dinner party that evening, but had forgotten the safe's combination code. She flattered Horace's skill and struck a bargain: if he opened the safe for her so she could retrieve her jewels, she would let him go without calling the police.",
        keyKeywords: ["dinner party excuse", "forgot combination code", "bargain struck", "let him go without police", "manipulative excuse"],
        examinerRubricTip: "Mention the dinner party excuse and the forgotten combination."
      },
      {
        id: "fp4-q6",
        question: "Why does Horace Danby get angry whenever anyone mentions 'honor among thieves' in the prison library?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Horace believed in the romantic criminal code that thieves respect one another. However, he was thoroughly tricked and exploited by a fellow thief who used his skills to steal jewels and left him to take the blame. Remembering her deceit and his own gullibility makes him bristle with bitter anger.",
        keyKeywords: ["romantic criminal code", "betrayed by fellow thief", "left to take blame", "gullibility exploited", "bitter anger"],
        examinerRubricTip: "Explain the bitter irony of being betrayed by a member of his own criminal profession."
      },
      {
        id: "fp4-q7",
        question: "Describe the real mistress of Shotover Grange. How did she shatter Horace's story?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The real mistress of Shotover Grange was a sixty-year-old, grey-haired, sharp-tongued woman. When Horace told the police that the owner's wife had asked him to open the safe, she laughed scornfully and dismissed his statement as an absurd lie, sealing his conviction.",
        keyKeywords: ["sixty years old", "grey-haired and sharp-tongued", "scornful laughter", "dismissed story as absurd lie", "sealed conviction"],
        examinerRubricTip: "Contrast the sixty-year-old real owner with the glamorous young lady in red."
      },
      {
        id: "fp4-laq-2",
        question: "A thief was outwitted by another thief. Do you agree that the young woman was cleverer and more professional than Horace Danby? Give reasons from the text.",
        marks: 6,
        type: "LAQ",
        modelAnswer: "Victor Canning's 'A Question of Trust' presents an ironic battle of wits between two criminals, wherein the young woman emerges unquestionably superior in tradecraft and psychological cunning.\n\nHorace Danby was a mechanical expert. He understood physical security systems—locks, safes, wires, and alarm circuits. However, he was completely inept at human psychology. He was naive, easily rattled, and susceptible to chivalric vanity. The moment danger presented itself, he panicked and conceded psychological control to the intruder.\n\nIn contrast, the young woman was a psychological mastermind. She assessed Horace immediately: noting his nervousness, his gloves, and his toolbag, she realized he was a burglar. Instead of fleeing or drawing a weapon, she instantly improvised a role as the lady of the house. She touched the ornaments, ordered the dog, and spoke with calm aristocratic authority. Sensing Horace's terror of prison, she exploited his vulnerability, convincing him to take off his gloves and crack the safe for her.\n\nWhile Horace did all the physical labor and left incriminating fingerprints everywhere, she walked away with 15,000 pounds worth of jewels without leaving a single trace. She was far cleverer because she operated on a higher psychological plane.",
        keyKeywords: ["mechanical expert vs psychological mastermind", "inept at human psychology", "chivalric vanity exploited", "instant improvisation", "bare fingerprints left", "higher psychological plane"],
        examinerRubricTip: "Contrast Horace's mechanical skill with the woman's psychological mastery; conclude with why she was superior."
      },
      {
        id: "fp4-laq-3",
        question: "'Appearances are deceptive.' How does this theme resonate throughout 'A Question of Trust'?",
        marks: 6,
        type: "LAQ",
        modelAnswer: "The adage 'appearances are deceptive' forms the central structural and thematic pillar of Victor Canning's narrative.\n\nFirstly, Horace Danby's own life is built on deceptive appearances. To the outside world, he is a respectable, middle-aged locksmith running a legitimate enterprise, admired by his neighbors and attended by a loyal housekeeper. In reality, he is a secretive criminal who commits grand burglary once a year.\n\nSecondly, the young lady in red represents the apex of deceptive appearances. Clothed in an elegant gown, carrying herself with refined poise, and commanding the family terrier with effortless familiarity, she appears to be the undisputed lady of Shotover Grange. In reality, she is an audacious impostor and rival thief.\n\nFinally, the romantic notion of 'honor among thieves' proves to be a deceptive mirage. Horace naively assumed that criminal solidarity or mutual respect existed among outlaws. Instead, the woman coldly left him to bear the legal consequences of her theft. The story warns that taking people and appearances at face value can lead to ruinous disillusionment.",
        keyKeywords: ["central thematic pillar", "Horace's respectable facade", "apex of deception in lady in red", "domestic familiarity illusion", "honor among thieves mirage", "taking appearances at face value"],
        examinerRubricTip: "Examine the theme across 3 levels: Horace's public image, the woman's disguise, and the illusion of honor among thieves."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: true
  },

  // =========================================================================
  // FOOTPRINTS WITHOUT FEET — CHAPTER 5: FOOTPRINTS WITHOUT FEET
  // =========================================================================
  {
    id: "fp-ch5-footprints-without-feet",
    title: "Footprints Without Feet",
    book: "Footprints Without Feet",
    type: "story",
    chapterNo: 5,
    author: "H.G. Wells",
    genre: "Science Fiction Thriller / Moral Allegory",
    theme: "The destructive peril of scientific genius divorced from moral conscience and social responsibility.",
    funToddlerHook: {
      tagline: "The Invisible Mad Scientist who threw Chairs and fought Police with No Head!",
      funnyStory: "Imagine discovering a potion that makes your entire body see-through like a glass window! Awesome, right? But the scientist Griffin was totally crazy and mean! He burned down his landlord's house, walked around freezing London completely naked, and stole clothes from a theater shop—including a fake nose and bandages! At a village inn, he made bedroom chairs fly through the air to hit his landlady. When the police constable came to arrest him, Griffin took off his bandages, glasses, and clothes until the policeman was fighting an invisible headless man!",
      ahaLesson: "Being super smart is useless if you are mean and selfish. Science without kindness is dangerous.",
      emoji: "👣"
    },
    deepExplanation: "H.G. Wells's 'Footprints Without Feet' is a dark science fiction narrative examining how extraordinary intellect becomes an instrument of terror when stripped of ethical boundaries.\n\nGriffin, a brilliant but misanthropic research scientist, discovers a chemical formulation that alters the human body's refractive index to match air, rendering human flesh entirely transparent while retaining solid physical mass. Instead of offering this breakthrough to medicine or society, Griffin weaponizes it. When his landlord attempts to evict him, Griffin burns down the landlord's house in vengeful malice and swallows his drugs to become invisible and escape.\n\nIn mid-winter London, naked invisibility proves agonizing. Shivering violently, Griffin sneaks into a Drury Lane theatrical shop to create an artificial identity: wrapping his face in bandages, wearing dark spectacles, a false nose, large bushy whiskers, and a wide-brimmed hat. He robs the shopkeeper and flees to the remote village of Iping to escape scrutiny.\n\nAt Iping's 'Coach and Horses' inn, Griffin's eccentric temper, bandages, and refusal to socialize arouse the suspicions of the landlady, Mrs. Hall. When his stolen money runs out, Griffin burglarizes the local clergyman's study, stealing cash while remaining entirely unseen. Suspicious, Mrs. Hall investigates his open bedroom, only to be attacked by animated furniture: Griffin's hat leaps up, striking her face, and an armchair charges her out of the room.\n\nWhen Mrs. Hall demands an explanation, Griffin loses his temper, tearing off his nose, whiskers, and bandages to reveal an empty void above his collar. In the climactic confrontation, Village Constable Jaffers attempts to arrest this headless phantom. Griffin strips off his clothes one by one, becoming completely invisible, and rains savage blows on Jaffers and the terrified villagers before escaping into the winter countryside.",
    bulletSummary: [
      "Brilliant scientist Griffin discovers how to make human tissue as transparent as glass.",
      "Vindictive by nature, Griffin sets fire to his landlord's house and becomes invisible to escape.",
      "Suffering from freezing London winter, he steals warm clothes and food from a department store.",
      "He disguises himself with bandages, false nose, and dark glasses from a theatrical shop in Drury Lane.",
      "Griffin rents rooms at Mrs. Hall's inn in Iping, demanding absolute solitude.",
      "Runs out of money and invisibly burglarizes the clergyman's desk.",
      "Haunts the inn: bedroom chairs and furniture attack Mrs. Hall.",
      "Unmasks himself as a headless figure; strips off all clothes to become invisible and beats Constable Jaffers to escape."
    ],
    characters: [
      {
        name: "Griffin",
        role: "The Invisible Scientist",
        emoji: "🧪",
        traits: ["Brilliant", "Lawless", "Vindictive", "Short-tempered"],
        description: "A gifted genius who degrades into a violent sociopath because his scientific discovery lacks moral compass or social conscience.",
        keyQuote: "Griffin was rather a lawless person."
      },
      {
        name: "Mrs. Hall",
        role: "The Innkeeper's Wife",
        emoji: "🏨",
        traits: ["Inquisitive", "Superstitious", "Money-conscious", "Courageous"],
        description: "Tolerates Griffin's eccentricities as long as he pays rent, but confronts him bravely when spirits appear to haunt her furniture.",
        keyQuote: "The stranger came when the inn was deserted, wrapped up from head to foot."
      },
      {
        name: "Mr. Bobby Jaffers",
        role: "The Village Constable",
        emoji: "👮",
        traits: ["Dutiful", "Resolute", "Courageous"],
        description: "A determined police officer who attempts to execute his legal arrest warrant even when the suspect has no head.",
        keyQuote: "If a magistrate had issued a warrant for someone’s arrest, then that person had to be arrested."
      }
    ],
    hardWords: [
      { word: "Misanthropic", pronunciation: "mis-an-THROP-ik", partOfSpeech: "adjective", meaning: "Disliking humankind and avoiding human society", contextSentence: "Griffin's misanthropic temper drove him into complete isolation.", synonyms: ["antisocial", "cynical", "reclusive"] },
      { word: "Callous", pronunciation: "KAL-uhs", partOfSpeech: "adjective", meaning: "Showing or having an insensitive and cruel disregard for others", contextSentence: "He showed callous indifference when robbing the clergyman.", synonyms: ["heartless", "unfeeling", "cold"] },
      { word: "Hysterical", pronunciation: "hiss-TER-ih-kuhl", partOfSpeech: "adjective", meaning: "Affected by uncontrolled extreme emotion", contextSentence: "Mrs. Hall was almost hysterical after the chair attacked her.", synonyms: ["frantic", "panicked", "overwrought"] },
      { word: "Indisposed", pronunciation: "in-dih-SPOHZD", partOfSpeech: "adjective", meaning: "Unwilling or slightly unwell", contextSentence: "He claimed he was indisposed and desired no interruption.", synonyms: ["reluctant", "unwell", "averse"] },
      { word: "Peculiar", pronunciation: "pih-KYOO-lyer", partOfSpeech: "adjective", meaning: "Strange or odd; unusual", contextSentence: "The stranger had very peculiar habits.", synonyms: ["bizarre", "eccentric", "abnormal"] }
    ],
    keyQuotes: [
      { quote: "Griffin was rather a lawless person.", speaker: "Narrator", context: "Summing up Griffin's fundamental moral defect that corrupted his scientific genius." },
      { quote: "The furniture was possessed by spirits!", speaker: "Mrs. Hall", context: "Her superstitious reaction when Griffin weaponized the bedroom chair." },
      { quote: "A magistrate had issued a warrant for someone’s arrest, then that person had to be arrested, with or without his head!", speaker: "Constable Jaffers", context: "His resolute dedication to civic duty despite the supernatural absurdity." }
    ],
    examinerTraps: [
      {
        trapTitle: "Why did Griffin burn his landlord's house?",
        commonMistake: "Writing that it was an accidental laboratory fire.",
        correctCbseApproach: "State clearly that it was deliberate arson motivated by vindictive malice because the landlord disliked him and had tried to evict him.",
        penaltyRisk: "Lose 1.5 marks in Board Character Analysis."
      },
      {
        trapTitle: "Griffin's assessment as a scientist",
        commonMistake: "Praising Griffin as a noble scientist because of his discovery.",
        correctCbseApproach: "CBSE rubric mandates assessing him as a failed scientist: true science must serve humanity, whereas Griffin used discovery solely for arson, burglary, assault, and selfish survival.",
        penaltyRisk: "Loss of 2 marks in 6-mark Evaluation Question."
      }
    ],
        keywordsList: [
      "Griffin",
      "brilliant but lawless scientist",
      "rare drug",
      "invisibility",
      "Iping village",
      "Coach and Horses inn",
      "Mrs. Hall",
      "stolen vicarage money",
      "headless man",
      "misuse of science"
],
    idiomsAndPhrases: [
      {
            "phrase": "Vanish into thin air",
            "meaning": "To disappear completely without leaving a trace",
            "contextSentence": "Having swallowed his transparent drug, Griffin could vanish into thin air."
      },
      {
            "phrase": "Slip through one's fingers",
            "meaning": "To escape capture or control just when success seems certain",
            "contextSentence": "The invisible scientist slipped through Constable Jaffers's fingers."
      }
],
boardQAs: [
      {
        id: "fp5-ws-1",
        question: "“Griffin was rather a lawless person.” Comment. (Official Test Series 1 Worksheet)",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Griffin exhibited total contempt for legal and moral order throughout the story. When his landlord attempted to evict him, he committed vindictive arson by burning the house down. In London, he burglarized a department store and violently assaulted and robbed a shopkeeper in Drury Lane. At Iping, he stole money from the clergyman's desk and brutally beat Constable Jaffers. His brilliant discovery served crime rather than society.",
        keyKeywords: ["contempt for law", "vindictive arson of landlord's house", "robbed theatrical shopkeeper", "burglarized clergyman's study", "brutally assaulted constable"],
        examinerRubricTip: "Give at least two specific criminal actions (arson, burglary, assault) to justify 'lawless'."
      },
      {
        id: "fp5-ws-2",
        question: "How would you assess Griffin as a scientist? Misuse of scientific discovery with two examples. (Official Test Series 1 Worksheet)",
        marks: 3,
        type: "SAQ",
        modelAnswer: "While Griffin was undeniably a brilliant researcher who successfully solved the ancient riddle of human transparency, he completely failed as a true scientist. A genuine scientist works for human advancement, whereas Griffin weaponized his discovery for selfish survival and criminal terror. Two prominent examples are: (1) Burning down his landlord's house to escape undetected, and (2) Invisibly robbing the clergyman's study and physically assaulting innocent villagers.",
        keyKeywords: ["brilliant researcher", "failed as true scientist", "discovery weaponized for crime", "burned landlord's house", "robbed clergyman and assaulted villagers"],
        examinerRubricTip: "Acknowledge his intellectual genius, but condemn his ethical failure with two clear examples."
      },
      {
        id: "fp5-q1",
        question: "How did the two boys in London first discover Griffin's presence in the muddy street?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The two London boys noticed fresh, muddy footprints appearing out of nowhere on the stone steps of a house. As they watched in astonishment, fresh impressions continued descending into the street without any visible person creating them. They pursued the mysterious footprints until the mud dried and the tracks vanished.",
        keyKeywords: ["fresh muddy footprints", "appearing out of nowhere", "descending steps", "no visible body", "pursued until mud dried"],
        examinerRubricTip: "Mention the fresh mud on the stone steps and the boys following the tracks."
      },
      {
        id: "fp5-q2",
        question: "What did Griffin do inside the big London store to keep himself warm, and what forced him to escape?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Griffin broke into a large London department store after closing hours to escape the biting cold. He dressed himself in warm clothes, overcoat, and shoes from boxes, ate cold meat and sweets, drank wine, and slept on a pile of quilts. Next morning, store assistants arrived before he woke. When they chased him, he had to strip off all his clothes to become invisible again, escaping empty-handed into the freezing air.",
        keyKeywords: ["department store shelter", "stole warm clothes and food", "slept on quilts", "spotted by store assistants", "stripped naked to escape"],
        examinerRubricTip: "Mention both how he found comfort and why he had to strip naked to escape."
      },
      {
        id: "fp5-q3",
        question: "Describe Griffin's theatrical disguise in Drury Lane. Why did he need false nose, bandages, and spectacles?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Griffin needed an artificial physical face so people could interact with him without realizing he had an empty void above his shoulders. In Drury Lane, he wrapped bandages around his forehead, wore dark spectacles, a false nose, huge bushy side-whiskers, and a large-brimmed hat, concealing his invisible flesh beneath dramatic props.",
        keyKeywords: ["artificial physical face", "conceal empty void", "bandages on forehead", "dark spectacles and false nose", "bushy whiskers and broad hat"],
        examinerRubricTip: "List at least 3 components of his Drury Lane theatrical costume."
      },
      {
        id: "fp5-q4",
        question: "What bizarre events took place in Mrs. Hall's inn bedroom with the furniture and the flying hat?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "When Mr. and Mrs. Hall investigated Griffin's open bedroom, the bedclothes were cold and empty. Suddenly, a sniff sounded near Mrs. Hall's ear. Griffin's hat leapt from the bedpost and slammed into her face. Immediately after, the bedroom armchair sprang to life, charged at Mrs. Hall with legs foremost, and pushed them out of the room, slamming and locking the door.",
        keyKeywords: ["sniff near ear", "hat slammed into face", "armchair charged with legs foremost", "pushed out of room", "locked door"],
        examinerRubricTip: "Describe the motion of the hat and the aggressive charge of the armchair."
      },
      {
        id: "fp5-q5",
        question: "How did Constable Bobby Jaffers attempt to arrest Griffin at the 'Coach and Horses'?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Constable Jaffers arrived with an arrest warrant and was undaunted upon discovering the suspect was headless, maintaining that magistrate warrants must be executed regardless of physical oddities. However, as Jaffers grabbed him, Griffin stripped off his clothes piece by piece. Once completely naked, Griffin became totally invisible and rained unseen punches on Jaffers until the constable was knocked unconscious.",
        keyKeywords: ["arrest warrant execution", "undaunted by headless suspect", "Griffin stripped clothes", "invisible punches", "Jaffers knocked unconscious"],
        examinerRubricTip: "Highlight Jaffers' sense of duty and the invisible physical struggle."
      },
      {
        id: "fp5-q6",
        question: "Why was the arrival of a stranger at Iping village in mid-winter considered an unusual event?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Iping was a quiet, remote village, and mid-winter was a season when no tourists visited. A stranger arriving in freezing winter, completely wrapped in bandages with dark glasses and strange luggage of scientific apparatus, was an extraordinary anomaly that ignited intense curiosity and gossip among the locals.",
        keyKeywords: ["remote village", "no winter tourists", "wrapped in bandages", "scientific apparatus", "ignited curiosity and gossip"],
        examinerRubricTip: "Mention the winter season and the stranger's bizarre appearance."
      },
      {
        id: "fp5-laq-1",
        question: "Science is a powerful tool. In the hands of a responsible scientist it brings progress, but in the hands of a selfish person like Griffin it brings destruction and anarchy. Discuss.",
        marks: 6,
        type: "LAQ",
        modelAnswer: "H.G. Wells's 'Footprints Without Feet' is a timeless cautionary tale illustrating that scientific brilliance without ethical grounding produces monstrous consequences.\n\nGriffin possessed exceptional intellectual genius. He solved the complex biochemical puzzle of making human cellular tissue transparent to light without destroying life. This breakthrough had immense constructive potential: in medical diagnostics, military defense, or optics, it could have revolutionized human capability.\n\nHowever, Griffin's moral compass was thoroughly broken. He was vindictive, arrogant, short-tempered, and misanthropic. Rather than publishing his findings for scientific advancement, he kept his discovery secret to use as an instrument of personal revenge and criminal exploitation. When his landlord challenged him, Griffin committed arson. In London, he terrorized shopkeepers; in Iping, he burglarized holy men and assaulted law enforcement.\n\nHis invisibility did not grant him freedom; it reduced him to a shivering outcast who could only maintain invisibility by remaining freezing and naked. Science gives mankind godlike powers, but when severed from empathy, conscience, and social duty, it degrades the scientist into a hunted fugitive.",
        keyKeywords: ["scientific brilliance without ethics", "immense constructive potential", "broken moral compass", "instrument of personal revenge", "arson and burglary", "shivering outcast"],
        examinerRubricTip: "Balance praise of his intellectual discovery with condemnation of his moral bankruptcy."
      },
      {
        id: "fp5-laq-2",
        question: "Describe the escalating confrontation between Griffin and the people of Iping village. How did curiosity turn into horror?",
        marks: 6,
        type: "LAQ",
        modelAnswer: "The relationship between Griffin and the residents of Iping follows a terrifying progression from eccentric curiosity to superstitious dread and open violence.\n\nInitially, Mrs. Hall welcomed Griffin, viewing his bandages as injuries from a tragic accident and tolerating his rude, solitary habits because he paid his rent in advance. The villagers speculated about him, whispering that he was an escaped criminal or an eccentric doctor experimenting with chemicals.\n\nThe mood darkened when Griffin ran out of funds. The mysterious burglary at the clergyman's vicarage—where coins clinked and were pocketed by an invisible phantom—sent shockwaves through the community. Suspicions exploded when Mrs. Hall entered his bedroom and was attacked by animated furniture, leading her to believe her inn was possessed by malevolent spirits.\n\nThe climax occurred when Mrs. Hall demanded to know how Griffin entered a locked room and who was paying the bills. Losing all control, Griffin unmasked himself, revealing an empty neck. The arrival of Constable Jaffers transformed the scene into a desperate struggle, where an invisible monster rained violent blows upon helpless villagers before fleeing. Curiosity thus culminated in sheer terror.",
        keyKeywords: ["progression from curiosity to terror", "initial tolerance for money", "mysterious vicarage burglary", "animated furniture attack", "unmasking of empty neck", "headless struggle with constable"],
        examinerRubricTip: "Trace the 4 stages: eccentric guest, suspicious burglary, supernatural furniture, and violent unmasking."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: true
  },

  // =========================================================================
  // FOOTPRINTS WITHOUT FEET — CHAPTER 6: THE MAKING OF A SCIENTIST
  // =========================================================================
  {
    id: "fp-ch6-making-of-scientist",
    title: "The Making of a Scientist",
    book: "Footprints Without Feet",
    type: "story",
    chapterNo: 6,
    author: "Robert W. Peterson",
    genre: "Biographical Profile / Inspiring Non-Fiction",
    theme: "Curiosity, rigorous scientific method, maternal encouragement, and intrinsic drive cultivate scientific greatness.",
    funToddlerHook: {
      tagline: "The Boy Butterfly Hunter who Discovered how Cells Read DNA!",
      funnyStory: "When Richard was in kindergarten, he had no friends to play baseball with in Pennsylvania. So what did he do? He collected rocks, coins, and 25 species of butterflies! His superhero mom bought him telescopes, microscopes, and a book called 'The Travels of Monarch X'. At his first science fair, he showed simple frog tissues on slides and won ZERO prizes. Did he cry? No! He realized: 'Real science isn't pretty displays; it's real experiments!' He went on to discover why monarch pupas have gold spots and eventually cracked the chemical secret of DNA!",
      ahaLesson: "Failure is the greatest teacher. Never stop asking 'Why?' and always do real experiments.",
      emoji: "🦋"
    },
    deepExplanation: "Robert W. Peterson's biographical account details the intellectual maturation of Richard H. Ebright, a world-renowned molecular biologist.\n\nGrowing up as an only child in Reading, Pennsylvania, after his father's early death, Ebright was nurtured by his devoted mother. She channeled his restless curiosity by providing him with telescopes, cameras, microscopes, and educational trips. By second grade, Ebright had collected all twenty-five species of butterflies found around his hometown. When his interest threatened to plateau, his mother gifted him 'The Travels of Monarch X' by Dr. Fredrick A. Urquhart of the University of Toronto. This seminal book invited readers to tag monarch butterflies for migration research, igniting Ebright's lifelong passion for scientific inquiry.\n\nA crucial turning point occurred in seventh grade when Ebright entered the County Science Fair. His entry—neatly mounted frog tissue slides under a microscope—won nothing, while students who performed genuine experiments won prizes. This failure taught him a fundamental lesson: science is not about decorative display, but about conducting real empirical experiments.\n\nIn subsequent years, guided by Dr. Urquhart's suggestions, Ebright launched rigorous research projects: investigating viral diseases in caterpillars, proving that viceroy butterflies copy unpalatable monarchs to evade bird predators, and discovering that the twelve tiny gold spots on a monarch pupa were not ornamental, but secreted an indispensable hormone necessary for full butterfly development. At Harvard, Ebright and his roommate James R. Wong took this further, discovering how a cell can 'read' the blueprint of its DNA. Peterson concludes by outlining the formula for a true scientist: a first-rate mind, boundless curiosity, and the will to win for the right reasons.",
    bulletSummary: [
      "Richard Ebright grew up in Reading, Pennsylvania, collecting butterflies, rocks, and coins.",
      "His mother was his companion and mentor, buying him scientific equipment and 'The Travels of Monarch X'.",
      "Ebright tagged monarch butterflies for Canadian researcher Dr. Fredrick Urquhart.",
      "Seventh-grade failure at County Science Fair taught him that real science requires empirical experiments, not neat displays.",
      "Ebright showed that viceroy butterflies mimic monarchs to avoid being eaten by birds.",
      "Discovered that gold spots on monarch pupas produce a crucial insect growth hormone.",
      "At Harvard, Ebright unlocked the secret of how cells read DNA blueprints.",
      "Peterson identifies three traits of a scientist: first-rate mind, curiosity, and competitive drive for the right reasons."
    ],
    characters: [
      {
        name: "Richard H. Ebright",
        role: "The Renowned Scientist",
        emoji: "🔬",
        traits: ["Inquisitive", "Persevering", "Competitive", "Multi-talented"],
        description: "An inquisitive mind whose childhood passion for butterfly collecting blossomed into pioneering discoveries in cell biology and DNA.",
        keyQuote: "I learned that real science wasn't just making a neat display."
      },
      {
        name: "Mrs. Ebright",
        role: "Ebright's Devoted Mother",
        emoji: "👩‍👦",
        traits: ["Nurturing", "Resourceful", "Encouraging", "Visionary"],
        description: "Richard's primary intellectual companion after his father's death. She provided scientific tools and books that guided his scientific career.",
        keyQuote: "I was his only companion until he started school."
      },
      {
        name: "Dr. Fredrick A. Urquhart",
        role: "The University Mentor",
        emoji: "👨‍🏫",
        traits: ["Inspiring", "Supportive", "Empirical"],
        description: "Scientist at University of Toronto whose monarch migration research gave young Ebright a roadmap for genuine scientific methodology."
      }
    ],
    hardWords: [
      { word: "Monarch", pronunciation: "MON-erk", partOfSpeech: "noun", meaning: "A large orange and black migratory butterfly of North America", contextSentence: "Ebright tagged monarchs for Dr. Urquhart's research project.", synonyms: ["Danaus plexippus"] },
      { word: "Pupa", pronunciation: "PYOO-puh", partOfSpeech: "noun", meaning: "An insect in its inactive immature form between larva and adult", contextSentence: "The monarch pupa featured twelve tiny gold spots.", synonyms: ["chrysalis", "cocoon"] },
      { word: "Physiology", pronunciation: "fiz-ee-OL-uh-jee", partOfSpeech: "noun", meaning: "The branch of biology dealing with the normal functions of living organisms", contextSentence: "He studied insect physiology to understand hormonal triggers.", synonyms: ["biological function"] },
      { word: "Entomology", pronunciation: "en-tuh-MOL-uh-jee", partOfSpeech: "noun", meaning: "The scientific study of insects", contextSentence: "His passion for entomology led him to molecular genetics.", synonyms: ["insect science"] },
      { word: "Blueprint", pronunciation: "BLOO-print", partOfSpeech: "noun", meaning: "A design plan or technical drawing; here, genetic code", contextSentence: "DNA is the blueprint for life.", synonyms: ["template", "master plan", "code"] }
    ],
    keyQuotes: [
      { quote: "Real science wasn't just making a neat display.", speaker: "Richard Ebright", context: "His epiphany after losing at his first County Science Fair in grade seven." },
      { quote: "He had an open mind, a first-rate mind, and the will to win for the right reasons.", speaker: "Richard A. Weiherer", context: "His Social Studies teacher summarizing Ebright's scientific character." },
      { quote: "That book, The Travels of Monarch X, opened the world of science to him.", speaker: "Narrator", context: "Highlighting the turning point when Ebright's hobby became a lifelong research quest." }
    ],
    examinerTraps: [
      {
        trapTitle: "What were the gold spots on monarch pupas for?",
        commonMistake: "Stating that the gold spots were merely decorative or ornamental.",
        correctCbseApproach: "Clarify that while many scientists assumed they were ornamental, Ebright proved they secrete an essential hormone necessary for the pupa's development into a full butterfly.",
        penaltyRisk: "Lose 1.5 marks in Board 3-mark Science Question."
      },
      {
        trapTitle: "Why did Ebright want to win?",
        commonMistake: "Portraying Ebright as arrogant or selfishly greedy for trophies.",
        correctCbseApproach: "Emphasize Mr. Weiherer's quote: Ebright was competitive, but he didn't want to win just to win; he wanted to win because he wanted to do the best job possible.",
        penaltyRisk: "Inaccurate character evaluation in 6-mark question."
      }
    ],
        keywordsList: [
      "Richard Ebright",
      "Monarch butterflies",
      "Viceroy butterflies",
      "Dr. Urquhart",
      "gold spots on pupa",
      "hormones for wing scales",
      "cell DNA blueprint",
      "curiosity, keen mind, will to win",
      "Mrs. Ebright's mentorship"
],
    idiomsAndPhrases: [
      {
            "phrase": "A driving curiosity",
            "meaning": "An intense, unstoppable desire to learn and investigate",
            "contextSentence": "Ebright's driving curiosity led him to unravel the secret of insect hormone cells."
      },
      {
            "phrase": "Will to win for the right reasons",
            "meaning": "Striving for excellence and truth rather than shallow trophies",
            "contextSentence": "His mentor noted that Ebright possessed the will to win for the right reasons."
      }
],
boardQAs: [
      {
        id: "fp6-ws-1",
        question: "How did Ebright’s mother help him? (Official Test Series 1 Worksheet)",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Ebright's mother played a pivotal role in his intellectual growth. After his father died, she became his constant companion, dining with him and inventing learning games. She purchased telescopes, microscopes, cameras, and mounting materials, took him on field trips, invited his friends over, and critically gifted him the book 'The Travels of Monarch X', which steered him directly into empirical scientific research.",
        keyKeywords: ["constant companion", "purchased scientific equipment", "took on trips", "invented learning games", "gifted Travels of Monarch X"],
        examinerRubricTip: "Mention at least 3 specific ways she supported him, emphasizing the book 'The Travels of Monarch X'."
      },
      {
        id: "fp6-ws-2",
        question: "What did Ebright learn from his failure at the Science Fair? (Official Test Series 1 Worksheet)",
        marks: 3,
        type: "SAQ",
        modelAnswer: "In seventh grade, Ebright entered the County Science Fair with slides of frog tissues, but failed to win any prize while others won. This defeat became his greatest turning point. He recognized that real science was not about creating neat, pretty microscopic displays, but about designing hypotheses and conducting genuine empirical experiments. From that day, he resolved to do real scientific research.",
        keyKeywords: ["seventh-grade frog slides", "won zero prizes", "real science vs neat displays", "genuine empirical experiments", "designed real hypotheses"],
        examinerRubricTip: "Contrast his 'neat display' with the 'real experiments' he realized were required."
      },
      {
        id: "fp6-q1",
        question: "What role did the book 'The Travels of Monarch X' by Dr. Urquhart play in Richard Ebright's life?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "'The Travels of Monarch X' was the transformative catalyst in Ebright's life. It detailed the migration of monarch butterflies to Central America. At the end of the book, Dr. Urquhart invited readers to tag butterflies for research. This connected young Ebright directly with frontier entomology, transforming an isolated butterfly collecting hobby into serious scientific experimentation.",
        keyKeywords: ["transformative catalyst", "monarch migration to Central America", "Urquhart's tagging invitation", "connected with frontier research", "hobby turned into science"],
        examinerRubricTip: "Mention monarch migration and Dr. Urquhart's butterfly tagging project."
      },
      {
        id: "fp6-q2",
        question: "What was Ebright's discovery regarding the tiny gold spots on a monarch pupa?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "While most entomologists assumed the twelve tiny gold spots on a monarch pupa were purely decorative or ornamental, Ebright proved through rigorous laboratory experiments that the spots produced a vital hormone indispensable for the butterfly's full physical maturation. Without this hormone, the pupa failed to develop into a normal adult butterfly.",
        keyKeywords: ["twelve tiny gold spots", "not purely decorative", "produced vital hormone", "essential for full maturation", "developed into normal butterfly"],
        examinerRubricTip: "Contrast the common belief (ornamental) with Ebright's finding (vital insect growth hormone)."
      },
      {
        id: "fp6-q3",
        question: "How did Ebright demonstrate that viceroy butterflies copy monarch butterflies?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Ebright tested the hypothesis that viceroy butterflies mimic monarch butterflies because monarchs taste foul to birds, whereas viceroys taste palatable. By copying monarchs' wing patterns, viceroys protect themselves from avian predators. He proved this by feeding monarchs and viceroys to a starling bird, demonstrating that the starling avoided monarchs while gorging on viceroys.",
        keyKeywords: ["mimicry hypothesis", "monarchs taste foul to birds", "viceroys taste palatable", "starling feeding experiment", "survival adaptation"],
        examinerRubricTip: "Mention the starling bird feeding test and the unpalatable taste of monarchs."
      },
      {
        id: "fp6-q4",
        question: "Explain Ebright's groundbreaking theory on the life of cells and DNA structure.",
        marks: 3,
        type: "SAQ",
        modelAnswer: "While studying insect hormones at Harvard, Ebright examined X-ray photos of the chemical structure of a hormone. He realized that the form and chemistry of the hormone explained how a cell can 'read' the blueprint of its DNA. He proved that DNA is the substance in the nucleus that controls heredity and passes genetic information, establishing the core blueprint for life.",
        keyKeywords: ["X-ray chemical photos", "cells read DNA blueprint", "nucleus controls heredity", "transfers genetic information", "blueprint for life"],
        examinerRubricTip: "Link the hormone X-ray photos to cell nucleus, heredity, and reading DNA blueprints."
      },
      {
        id: "fp6-q5",
        question: "Besides science, what other extracurricular talents and hobbies did Richard Ebright cultivate?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Ebright was an all-rounder with diverse talents. He was a champion school debater, an active member of Model United Nations, an accomplished public speaker, a skilled outdoorsman, an avid canoeist, and an expert nature and scientific photographer. He maintained academic excellence while excelling in leadership activities.",
        keyKeywords: ["champion debater", "Model United Nations", "public speaker", "avid canoeist and outdoorsman", "expert photographer"],
        examinerRubricTip: "List at least 3 non-science hobbies (debating, canoeing, photography)."
      },
      {
        id: "fp6-q6",
        question: "What tribute did his Social Studies teacher, Mr. Richard A. Weiherer, pay to Richard Ebright?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Mr. Weiherer praised Ebright's tireless work ethic and intrinsic motivation. He noted that Richard would spend three to four hours at night doing debate research while still managing his butterfly experiments. Crucially, he observed that Ebright was competitive for the right reasons: not to beat others, but to do the best job possible.",
        keyKeywords: ["tireless work ethic", "intrinsic motivation", "debate research and science", "competitive for right reasons", "best job possible"],
        examinerRubricTip: "Quote or paraphrase 'competitive for the right reasons'."
      },
      {
        id: "fp6-laq-1",
        question: "According to the author, what are the three essential ingredients required in the making of a true scientist? How did Ebright exemplify these qualities?",
        marks: 6,
        type: "LAQ",
        modelAnswer: "Robert W. Peterson concludes 'The Making of a Scientist' by identifying three foundational qualities necessary for creating a genuine scientist: a first-rate mind, boundless curiosity, and the will to win for the right reasons. Richard Ebright exemplified all three throughout his life.\n\nFirst, Ebright possessed a first-rate intellect. From early childhood, he was an exceptional student, easily earning straight A's. His capacity to observe minute biological phenomena—such as the gold spots on pupas or the chemical structure of hormones—and connect them to macro-theories of cell life showcased his superior intellectual caliber.\n\nSecond, his curiosity was voracious and self-sustaining. He did not merely collect twenty-five species of butterflies; he asked why viceroys copy monarchs, why pupas have gold spots, and how cells function. When gifted 'The Travels of Monarch X', he spent years tracking butterflies and corresponding with researchers.\n\nFinally, he demonstrated the will to win for the right reasons. When he failed at the seventh-grade science fair, he did not abandon research in bitterness. Instead, he treated failure as a challenge to understand empirical science. He was competitive not for vanity or trophies, but to do the finest job possible, unlocking the secrets of DNA.",
        keyKeywords: ["first-rate mind", "boundless curiosity", "will to win for right reasons", "straight A student", "empirical research mindset", "unlocked DNA secrets"],
        examinerRubricTip: "Structure around the 3 criteria explicitly stated in the chapter's conclusion."
      },
      {
        id: "fp6-laq-2",
        question: "How does Richard Ebright's journey prove that maternal encouragement, early mentorship, and self-discipline are vital for achieving greatness?",
        marks: 6,
        type: "LAQ",
        modelAnswer: "Richard Ebright's biography illustrates that great achievements are rarely solo endeavors; they require an ecosystem of maternal devotion, visionary mentorship, and individual perseverance.\n\nEbright's mother was the architect of his early intellectual environment. Following her husband's death, she dedicated herself to Richard's growth, keeping him mentally engaged with puzzles, buying him essential instruments (microscopes, cameras, telescopes), and introducing him to Dr. Urquhart's book. Her encouragement ensured his childhood curiosity was never snuffed out by loneliness.\n\nSimilarly, external mentorship provided guidance at crucial junctures. Dr. Urquhart replied to Ebright's letters, supplying ideas for experiments that kept him busy throughout high school. His teacher, Mr. Weiherer, broadened his horizons by encouraging him to join the debating club and Model UN, instilling leadership and communication skills.\n\nFinally, Ebright's own self-discipline transformed this support into world-class breakthroughs. He spent hours tagging butterflies, raising thousands of caterpillars in his basement, and working late in university labs. Together, support, mentorship, and unrelenting effort shaped a boy collector into a revolutionary scientist.",
        keyKeywords: ["ecosystem of support", "architect of intellectual environment", "maternal devotion after father's death", "Urquhart's mentorship letters", "Weiherer's broader horizons", "unrelenting personal discipline"],
        examinerRubricTip: "Divide answer into 3 distinct pillars: mother's role, mentors' role (Urquhart & Weiherer), and Ebright's own dedication."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: true
  },

  // =========================================================================
  // FOOTPRINTS WITHOUT FEET — CHAPTER 7: THE NECKLACE
  // =========================================================================
  {
    id: "fp-ch7-necklace",
    title: "The Necklace",
    book: "Footprints Without Feet",
    type: "story",
    chapterNo: 7,
    author: "Guy de Maupassant",
    genre: "Realistic Drama / Tragic Irony",
    theme: "False pride, vanities of social prestige, and lack of honest communication lead to lifelong ruin.",
    funToddlerHook: {
      tagline: "The 10-Year Nightmare for a Fake Diamond Necklace!",
      funnyStory: "Matilda was a pretty clerk's wife who cried every day because she wasn't super-rich with diamond palaces and gold spoons! When invited to a grand minister's ball, her poor husband sacrificed his rifle savings (400 francs) to buy her a pretty gown, and she borrowed a glittering diamond necklace from a rich friend. She danced, felt like a queen, and was the prettiest girl at the party! But when she got home... the necklace was GONE! Instead of telling her friend the truth, they secretly borrowed massive loans, spent 36,000 francs to replace it, and worked like slaves for 10 agonizing years scrub-cleaning floors! Ten years later, her old friend doesn't recognize her worn-out face and reveals: 'Oh Matilda, my necklace was fake costume glass, worth only 500 francs!'",
      ahaLesson: "Always be honest. False pride will destroy your happiness and waste your entire life.",
      emoji: "💎"
    },
    deepExplanation: "Guy de Maupassant's 'The Necklace' (La Parure) is an iconic masterpiece of tragic situational irony and social critique.\n\nMathilde Loisel is born into a family of clerks and married to M. Loisel, a petty official in the Ministry of Public Instruction. Despite her beauty, Mathilde is chronically tormented by an insatiable yearning for aristocratic luxury, viewing her modest apartment, worn walls, and plain stew with bitter resentment. Her husband, an unselfish and devoted man, secures an exclusive invitation to the Minister's evening ball, hoping to bring her joy. Instead of gratitude, Mathilde throws a tantrum because she lacks an opulent gown. M. Loisel sacrifices 400 francs—money he had saved to purchase a hunting rifle to shoot larks with friends—to buy her an elegant dress.\n\nStill dissatisfied with the absence of jewelry, Mathilde borrows a magnificent diamond necklace from her wealthy friend Madame Jeanne Forestier. At the ball, Mathilde scores a triumph: she is intoxicated with pleasure, hailed as the loveliest woman in the room, and courted by cabinet ministers.\n\nThe tragedy strikes upon returning home at 4:00 AM: the necklace has vanished from her neck. The couple conducts a desperate, frantic search across the streets and cab routes, reporting to police and newspapers, but find nothing. Paralyzed by false pride and fear of social disgrace, they conceal the loss from Madame Forestier, stalling for time with a fabricated excuse about a broken clasp being repaired.\n\nTo replace the necklace, M. Loisel uses 18,000 francs inherited from his father and borrows another 18,000 francs at ruinous usurious rates from moneylenders, purchasing a replica for 36,000 francs. For ten grueling years, the Loisels endure catastrophic poverty to pay off the debt. Mathilde dismisses their servant, cleans greasy pots, scrubs greasy floors, washes soiled laundry, and haggles viciously at markets, aging into a coarse, withered working-class drudge. Ten years later, meeting Madame Forestier in the Champs-Élysées, Mathilde proudly confesses the truth. A horrified Madame Forestier grasps her worn hands and delivers the devastating revelation: the original necklace was made of cheap paste glass, worth at most 500 francs.",
    bulletSummary: [
      "Mathilde Loisel is born charming and beautiful but constantly grieves over her lack of wealth and status.",
      "Her clerk husband secures an invitation to the Minister of Public Instruction's grand ball.",
      "Husband sacrifices 400 francs meant for a hunting rifle to buy Mathilde an evening gown.",
      "Mathilde borrows a dazzling diamond necklace from rich friend Madame Forestier.",
      "At the ball, Mathilde is intoxicated with vanity and admiration; her beauty triumphs.",
      "Returning home at 4:00 AM, she discovers the necklace is lost; exhaustive searches yield nothing.",
      "Refusing to confess, the Loisels buy a replacement diamond necklace for 36,000 francs using inheritance and usurious loans.",
      "Endure 10 years of crushing manual labor and squalor, turning Mathilde into an old, coarse woman.",
      "Mathilde encounters Forestier, who reveals the original necklace was cheap costume jewelry worth only 500 francs."
    ],
    characters: [
      {
        name: "Mathilde Loisel",
        role: "The Vain, Tragic Protagonist",
        emoji: "👗",
        traits: ["Beautiful", "Discontented", "Vain", "Enduring"],
        description: "Yearns for high society but is destroyed by false pride. However, she displays heroic resilience during ten years of manual labor to clear debt.",
        keyQuote: "She suffered endlessly, feeling herself born for every delicacy and luxury."
      },
      {
        name: "M. Loisel",
        role: "The Self-Sacrificing Husband",
        emoji: "👨‍💼",
        traits: ["Contented", "Devoted", "Selfless", "Hardworking"],
        description: "A humble clerk who sacrifices his personal happiness, savings, and health to fulfill his wife's vanity and protect their honor.",
        keyQuote: "Ah, the good pot-pie! There's nothing I like better than that."
      },
      {
        name: "Madame Jeanne Forestier",
        role: "The Wealthy Friend",
        emoji: "💎",
        traits: ["Affluent", "Generous", "Unpretentious"],
        description: "Mathilde's schoolfriend who freely lends her jewelry without pretense, unaware of the tragedy her paste necklace triggered."
      }
    ],
    hardWords: [
      { word: "Disconsolate", pronunciation: "dis-KON-suh-lit", partOfSpeech: "adjective", meaning: "Without consolation or comfort; deeply unhappy", contextSentence: "Loisel returned disconsolate after searching the streets.", synonyms: ["inconsolable", "despairing", "dejected"] },
      { word: "Usurious", pronunciation: "yoo-ZHOOR-ee-uhs", partOfSpeech: "adjective", meaning: "Lending money at unreasonably high interest rates", contextSentence: "They borrowed from usurious moneylenders to raise 18,000 francs.", synonyms: ["extortionate", "rapacious"] },
      { word: "Ruinous", pronunciation: "ROO-ih-nuhs", partOfSpeech: "adjective", meaning: "Disastrous or causing ruin", contextSentence: "Loisel signed ruinous loan contracts that compromised his future.", synonyms: ["devastating", "catastrophic"] },
      { word: "Privation", pronunciation: "pry-VAY-shun", partOfSpeech: "noun", meaning: "A state in which essential things for human well-being are lacking", contextSentence: "They endured a life of harsh privation to pay off the debt.", synonyms: ["destitution", "hardship", "scarcity"] },
      { word: "Chagrin", pronunciation: "shuh-GRIN", partOfSpeech: "noun", meaning: "Distress or embarrassment at having failed or been humiliated", contextSentence: "She wept with chagrin at her lack of fine jewels.", synonyms: ["mortification", "vexation", "annoyance"] }
    ],
    keyQuotes: [
      { quote: "She was one of those pretty, charming girls, born as if through an error of destiny into a family of clerks.", speaker: "Narrator", context: "Opening sentence establishing Mathilde's deep dissatisfaction with her social reality." },
      { quote: "Oh, my poor Mathilde! But mine was imitation! It was worth at the very most five hundred francs!", speaker: "Madame Forestier", context: "The climactic, devastating ironic reveal concluding the story." },
      { quote: "What would have happened if she had never lost those jewels? Who knows? How strange life is, how fickle!", speaker: "Narrator", context: "Reflecting on how a small trinket shattered ten years of human life." }
    ],
    examinerTraps: [
      {
        trapTitle: "How much did the replacement necklace cost?",
        commonMistake: "Writing 40,000 francs or 500 francs.",
        correctCbseApproach: "The shopkeeper priced it at 40,000 francs, but bargained down to 36,000 francs. The original paste necklace was worth only 500 francs.",
        penaltyRisk: "Lose 1 mark on exact financial figures."
      },
      {
        trapTitle: "Who is to blame for the tragedy?",
        commonMistake: "Blaming only Madame Forestier for lending cheap jewelry.",
        correctCbseApproach: "Mathilde's insatiable vanity, coupled with false pride that prevented an honest confession, was the sole cause. Madame Forestier lent the necklace in good faith.",
        penaltyRisk: "Inaccurate thematic evaluation in 6-mark question."
      }
    ],
        keywordsList: [
      "Mathilde Loisel",
      "M. Loisel",
      "Ministry ball",
      "diamond necklace",
      "Madame Forestier",
      "lost necklace",
      "36000 francs",
      "10 years of grueling misery",
      "500 francs paste jewelry",
      "vanity and discontent"
],
    idiomsAndPhrases: [
      {
            "phrase": "Pay through the nose",
            "meaning": "To pay an exorbitant, ruinous price for an error or indulgence",
            "contextSentence": "The Loisels paid through the nose for ten years to replace an imitation necklace."
      },
      {
            "phrase": "Castles in the air",
            "meaning": "Impractical daydreams and grandiose romantic fantasies",
            "contextSentence": "Mathilde spent her days building castles in the air about aristocratic feasts."
      }
],
boardQAs: [
      {
        id: "fp7-ws-1",
        question: "Mention the instances from the lesson that show that Mr. Loisel loved his wife deeply. (Official Test Series 1 Worksheet)",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Mr. Loisel proved his profound devotion through multiple selfless sacrifices: (1) He painstakingly pulled strings to secure an exclusive invitation to the Minister's ball solely to please her; (2) He surrendered 400 francs—saved for a hunting rifle—to buy her a ball gown; (3) When the necklace was lost, he searched the cold night streets on foot for hours; and (4) He sacrificed his entire 18,000 franc paternal inheritance and took ruinous loans, working evenings copying documents to pay off her debt.",
        keyKeywords: ["secured exclusive invitation", "surrendered 400 rifle savings", "searched cold streets on foot", "sacrificed 18,000 paternal inheritance", "ruinous loans and evening copying"],
        examinerRubricTip: "Mention at least 3 concrete sacrifices (the ball invitation, 400 francs rifle money, and the 10-year debt labor)."
      },
      {
        id: "fp7-ws-2",
        question: "What did Mme Loisel and Mr. Loisel do to find the lost necklace? (Official Test Series 1 Worksheet)",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Upon discovering the necklace was lost, the Loisels searched the folds of her dress, cloak, and pockets. M. Loisel retraced their entire route on foot in the freezing cold until 7:00 AM. He went to police headquarters, visited newspaper offices to advertise a reward, and contacted all cab companies. When all searches failed, they followed the jeweler's trail to purchase an exact replica for 36,000 francs.",
        keyKeywords: ["searched dress folds and pockets", "retraced route on foot", "went to police headquarters", "advertised reward in newspapers", "visited cab offices"],
        examinerRubricTip: "List all steps taken: physical search, retracing steps, police report, newspaper reward, cab companies."
      },
      {
        id: "fp7-q1",
        question: "Why was Matilda constantly unhappy despite living a comfortable middle-class life?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Mathilde was cursed with an insatiable hunger for aristocratic opulence that far exceeded her middle-class reality. She felt entitled to every luxury, fine tapestry, delicacy, and high-society admiration. The sight of her modest flat, peeling walls, frayed chairs, and plain stew filled her with bitter resentment and humiliation.",
        keyKeywords: ["insatiable hunger for opulence", "entitled to delicacy and luxury", "bitter resentment of modest flat", "peeling walls and frayed chairs", "vanity and discontent"],
        examinerRubricTip: "Contrast her actual middle-class reality with her romantic fantasies of aristocratic luxury."
      },
      {
        id: "fp7-q2",
        question: "How did Mr. Loisel procure the 400 francs that Matilda spent on her ball gown? What personal dream did he sacrifice?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Mr. Loisel had patiently saved precisely 400 francs to purchase a hunting rifle so he could join his friends next summer shooting larks on the plains of Nanterre. Hearing his wife's sorrow, he sacrificed his personal recreation and handed the entire sum to her without hesitation.",
        keyKeywords: ["saved 400 francs", "hunting rifle purchase", "shoot larks with friends", "plains of Nanterre", "selfless sacrifice"],
        examinerRubricTip: "Mention the hunting rifle and shooting larks at Nanterre."
      },
      {
        id: "fp7-q3",
        question: "Describe Matilda's triumph and intoxication at the Minister's ball.",
        marks: 3,
        type: "SAQ",
        modelAnswer: "At the ball, Mathilde was an overwhelming sensation. She was the prettiest, most elegant, smiling, and graceful woman in attendance. All the men stared at her, cabinet ministers asked to be introduced, and she danced with wild abandon, intoxicated with vanity, triumph, and universal admiration.",
        keyKeywords: ["overwhelming sensation", "prettiest and most elegant", "ministers asked introduction", "danced with wild abandon", "intoxicated with vanity and triumph"],
        examinerRubricTip: "Use words like 'intoxicated', 'triumph', 'universal admiration'."
      },
      {
        id: "fp7-q4",
        question: "How much did the replacement diamond necklace cost, and how did the Loisels raise this astronomical sum?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The replacement necklace at the Palais-Royal cost 36,000 francs. M. Loisel possessed 18,000 francs inherited from his father; he borrowed the remaining 18,000 francs by entering into ruinous contracts with usurers, moneylenders, and signing promissory notes that compromised the rest of his life.",
        keyKeywords: ["36,000 francs replacement", "18,000 father's inheritance", "borrowed 18,000 from usurers", "ruinous contracts", "promissory notes"],
        examinerRubricTip: "Give the exact figures: 36,000 total, 18,000 inheritance, 18,000 borrowed."
      },
      {
        id: "fp7-q5",
        question: "How did ten years of brutal physical labor transform Matilda Loisel's physical appearance and character?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Ten years of relentless drudgery aged Mathilde prematurely into a coarse, robust working-class woman. Her hair was untidy, her skirts askew, her hands red from scrubbing greasy pots, and she spoke in a loud, harsh voice. However, she heroically bore her financial burden without whining, facing her debt with grim determination.",
        keyKeywords: ["aged prematurely", "coarse working-class woman", "red hands from scrubbing", "loud harsh voice", "heroically bore debt without whining"],
        examinerRubricTip: "Mention both the physical deterioration (red hands, untidy hair) and her gritty resilience in paying the debt."
      },
      {
        id: "fp7-q6",
        question: "What shocking revelation did Madame Forestier make when Matilda met her in the Champs-Élysées a decade later?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "When Mathilde proudly revealed that they had worked ten years to replace the lost necklace, Madame Forestier was deeply moved and horrified. She clasped Mathilde's hands and confessed that her original necklace was purely imitation paste glass, worth at most 500 francs, exposing the utter futility of their ten-year nightmare.",
        keyKeywords: ["deeply moved and horrified", "clasped hands", "imitation paste glass", "worth at most 500 francs", "futility of ten-year nightmare"],
        examinerRubricTip: "State the climax clearly: the necklace was imitation/paste, worth only 500 francs."
      },
      {
        id: "fp7-laq-1",
        question: "How did Matilda's desire to look affluent lead to her downfall and ten years of ruin? What moral lesson does Guy de Maupassant impart?",
        marks: 6,
        type: "LAQ",
        modelAnswer: "Guy de Maupassant's 'The Necklace' illustrates how shallow vanity, consumerist obsession, and false pride can destroy a lifetime of contentment.\n\nMathilde Loisel possessed youth, striking beauty, and a loving, devoted husband. Yet, she allowed herself to be consumed by resentment toward her middle-class reality. She viewed happiness purely through material possessions—fine gowns, tapestries, and glittering diamonds. To satisfy her ego for a single evening at a high-society ball, she demanded an expensive dress and borrowed a diamond necklace.\n\nWhen the necklace vanished, her false pride proved far more destructive than the loss itself. An honest confession to Madame Forestier would have instantly revealed that the necklace was inexpensive costume jewelry. Instead, petrified of being branded a thief or social inferior, the Loisels hid the truth. They bought a genuine diamond replica for 36,000 francs, committing themselves to a decade of crushing poverty and physical degradation.\n\nThe author delivers a profound moral lesson: contentment with one's reality brings peace, whereas vanity and deceptive appearances demand an unbearable price. Most importantly, honesty in times of crisis preserves human dignity and avoids needless tragedy.",
        keyKeywords: ["shallow vanity and false pride", "consumed by resentment", "single evening of ego", "refusal to confess", "36,000 francs debt", "contentment brings peace", "honesty preserves dignity"],
        examinerRubricTip: "Analyze the root cause (vanity), the compounding mistake (refusal to confess), and the moral conclusion."
      },
      {
        id: "fp7-laq-2",
        question: "'Honesty and timely confession could have saved the Loisels from ten years of misery.' Comment on how pride and lack of communication ruined their youth.",
        marks: 6,
        type: "LAQ",
        modelAnswer: "The catastrophe that befell the Loisels was not an act of cruel fate; it was the direct consequence of misplaced pride and tragic lack of communication.\n\nWhen Mathilde discovered the necklace was missing, the logical, moral, and practical course of action was immediate, transparent communication. Madame Forestier was a longtime schoolfriend who had lent the jewel generously and without hesitation. Had Mathilde approached her with candid honesty, explaining the misfortune, Madame Forestier would have immediately reassured her that the necklace was made of cheap paste, worth barely 500 francs. A simple replacement could have been purchased within an afternoon.\n\nInstead, Mathilde's pathological dread of losing social status blinded her. She assumed the necklace was worth a fortune because it looked expensive. Pride silenced her. She chose a lie—telling Forestier that the clasp was broken—while secretly bankrupting her household. M. Loisel, in his blind devotion, enabled this deception by signing ruinous loans.\n\nFor ten years, they sacrificed their health, beauty, and peace of mind to replace genuine diamonds with genuine diamonds for a woman who owned costume glass. The story stands as an unforgettable warning against allowing ego and deceit to dictate crisis management.",
        keyKeywords: ["misplaced pride and lack of communication", "candid honesty would reveal truth", "500 francs paste necklace", "pathological dread of social loss", "bankrupted household", "unforgettable warning against ego"],
        examinerRubricTip: "Argue clearly that honesty would have solved the problem instantly and contrast it with their choice of deception."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: true
  },

  // =========================================================================
  // FOOTPRINTS WITHOUT FEET — CHAPTER 8: BHOLI
  // =========================================================================
  {
    id: "fp-ch8-bholi",
    title: "Bholi",
    book: "Footprints Without Feet",
    type: "story",
    chapterNo: 8,
    author: "K.A. Abbas",
    genre: "Social Realism / Feminist Bildungsroman",
    theme: "The transformative power of compassionate education to dismantle patriarchal oppression and awaken self-worth.",
    funToddlerHook: {
      tagline: "The 'Dumb Cow' who spoke like a Lion and kicked out a Greedy Groom!",
      funnyStory: "Poor little Sulekha fell off her cot as a baby and hurt her brain. At two, smallpox left her covered in black pockmarks, and she stammered when she spoke! Everyone called her 'Bholi' (the simpleton) and treated her like an old dumb cow. Her parents didn't even wash her clothes! But one day, a magical, gentle teacher at the village school smiled at her and said: 'Speak, Sulekha. You can do it!' Boom! Fast forward: a mean, limping, greedy old shopkeeper asks for 5,000 rupees dowry to marry her. Bholi stands up tall, throws the wedding garland into the sacred fire, and shouts in a clear voice: 'I will NOT marry this greedy coward! I will teach in this school and take care of my parents!'",
      ahaLesson: "Education gives you a voice. When you respect yourself, nobody can treat you like an object.",
      emoji: "🌸"
    },
    deepExplanation: "K.A. Abbas's 'Bholi' is a stirring feminist narrative depicting the transformation of a neglected, marginalized girl into an articulate, empowered woman of substance through the catalyst of education.\n\nSulekha, the fourth daughter of Numberdar Ramlal, suffers from mental and physical handicaps due to early childhood trauma: falling off a cot damaged part of her brain, smallpox at age two left her body permanently disfigured with deep black pockmarks, and she developed a pronounced stammer at age five. Slighting her as 'Bholi' (the simpleton), her family treats her as a domestic burden. While her sisters are dressed in bridal finery, Bholi wears faded cast-off clothes and is never washed or oiled.\n\nHer destiny shifts when the Tehsildar inaugurates a village primary school for girls and instructs Ramlal, as a government official, to set an example by enrolling his daughters. Ramlal's wife refuses to send their marriageable daughters, arguing no one would marry educated girls, but cynically suggests sending Bholi since she has poor marriage prospects anyway. Terrified, Bholi is bathed, dressed in clean clothes, and sent to school, fearing she will be sold like their old cow Lakshmi.\n\nAt school, Bholi encounters a miracle: a teacher whose voice is soft, encouraging, and devoid of mockery. Patiently coaxing Bholi through her stammers, the teacher instills belief in her intellect, promising that education will make her the most respected person in the village. Over the years, education nurtures Bholi's self-worth, literacy, and moral agency.\n\nThe climax arrives when Ramlal arranges Bholi's marriage to Bishambar Nath, a prosperous, limping grocer of her father's age with grown children. At the wedding altar, Bishambar glimpses Bholi's pockmarked face and extorts 5,000 rupees dowry from Ramlal, humiliating the weeping father who places his turban at the grocer's feet. Witnessing her father's humiliation, Bholi's dormant lioness awakens. In a clear, confident voice devoid of any stammer, she flings the wedding garland into the sacred fire, publicly rejecting the greedy coward. She proclaims she will remain unmarried, serve her parents in their old age, and teach in the very school where her teacher enlightened her—a triumphant masterpiece of human empowerment.",
    bulletSummary: [
      "Sulekha is brain-damaged in infancy, disfigured by smallpox at age two, and stammers from age five, earning the nickname 'Bholi'.",
      "Neglected by parents who view her as an unmarriageable burden, she is given cast-off clothes and never oiled.",
      "Tehsildar orders village revenue collector Ramlal to set an example by sending daughters to the new girls' primary school.",
      "Mother sends Bholi as a disposable sacrifice, believing school won't harm her already dim marriage prospects.",
      "At school, a gentle, nurturing teacher replaces ridicule with patience, instilling self-confidence and literacy in Bholi.",
      "Years later, parents arrange Bholi's wedding to Bishambar Nath, a wealthy, limping widower her father's age.",
      "Bishambar spots her pockmarks and extorts 5,000 rupees dowry, humiliating Ramlal who puts his turban at his feet.",
      "Bholi speaks with clear articulation without a stammer, flings the garland into the sacrificial fire, and rejects the greedy groom.",
      "Declares she will teach in her village school and care for her elderly parents, vindicating her teacher's faith."
    ],
    characters: [
      {
        name: "Sulekha (Bholi)",
        role: "The Empowered Heroine",
        emoji: "🌺",
        traits: ["Resilient", "Courageous", "Articulate", "Dignified"],
        description: "Overcomes childhood trauma, physical disfigurement, and stammering through education, evolving from a neglected 'dumb cow' into an emblem of female dignity.",
        keyQuote: "I will not have such a mean, greedy and contemptible coward as my husband."
      },
      {
        name: "The Village Teacher",
        role: "The Transformative Mentor",
        emoji: "👩‍🏫",
        traits: ["Gentle", "Patient", "Visionary", "Affectionate"],
        description: "The artist whose loving guidance creates the masterpiece of Bholi's self-realization. She replaces family mockery with dignity.",
        keyQuote: "In time you will be more learned than anyone else in the village. Then no one will ever be able to laugh at you."
      },
      {
        name: "Numberdar Ramlal",
        role: "Bholi's Father",
        emoji: "👳",
        traits: ["Weak-willed", "Tradition-bound", "Status-conscious"],
        description: "A village revenue collector torn between patriarchal social prestige (izzat) and parental duty, groveling before a greedy groom.",
        keyQuote: "Do not humiliate me so. Take two thousand rupees."
      },
      {
        name: "Bishambar Nath",
        role: "The Mercenary Groom",
        emoji: "💰",
        traits: ["Greedy", "Callous", "Cowardly", "Mercenary"],
        description: "A wealthy, limping grocer who attempts to exploit Bholi's physical pockmarks to extort 5,000 rupees in dowry.",
        keyQuote: "If you give me five thousand rupees, I will marry your daughter."
      }
    ],
    hardWords: [
      { word: "Stammer", pronunciation: "STAM-er", partOfSpeech: "verb/noun", meaning: "Speak with sudden involuntary pauses and a tendency to repeat syllables", contextSentence: "Bholi stammered whenever she tried to speak in front of strangers.", synonyms: ["stutter", "falter"] },
      { word: "Pockmarks", pronunciation: "POK-marks", partOfSpeech: "noun (plural)", meaning: "Pitted scars left on the skin by smallpox", contextSentence: "Her face was permanently disfigured by deep black pockmarks.", synonyms: ["scars", "pits"] },
      { word: "Contemptible", pronunciation: "kuhn-TEMP-tuh-buhl", partOfSpeech: "adjective", meaning: "Deserving contempt; despicable or dishonorable", contextSentence: "She refused to marry such a contemptible coward.", synonyms: ["despicable", "disgraceful", "shameful"] },
      { word: "Masterpiece", pronunciation: "MASS-ter-pees", partOfSpeech: "noun", meaning: "A work of outstanding artistry, skill, or workmanship", contextSentence: "The teacher smiled as if contemplating her finished masterpiece.", synonyms: ["magnum opus", "crowning achievement"] },
      { word: "Dumb cow", pronunciation: "DUM KOW", partOfSpeech: "idiom", meaning: "An insult referring to a helpless, voiceless, submissive creature", contextSentence: "They treated Bholi as nothing more than a harmless, dumb cow.", synonyms: ["submissive creature"] }
    ],
    keyQuotes: [
      { quote: "Put your fear out of your heart and you will be able to speak like anyone else.", speaker: "The Teacher", context: "The initial encouragement that began Bholi's psychological rebirth." },
      { quote: "Take it back, Pitaji. I am not going to marry this man.", speaker: "Bholi", context: "Her courageous declaration flinging the wedding garland into the sacred fire." },
      { quote: "Yes, Bholi, of course, she said, and in her smiling eyes was the light of a deep satisfaction that an artist feels when contemplating the completion of her masterpiece.", speaker: "Narrator", context: "The teacher observing Bholi's courageous defiance of patriarchy and greed." }
    ],
    examinerTraps: [
      {
        trapTitle: "Why did Bholi initially agree to marry Bishambar?",
        commonMistake: "Writing that Bholi liked Bishambar's money or had romantic feelings.",
        correctCbseApproach: "Clarify that Bholi agreed solely out of filial obedience and sacrifice to preserve her father's social prestige (izzat), knowing she was regarded as an unwanted burden.",
        penaltyRisk: "Lose 1.5 marks on character motivation."
      },
      {
        trapTitle: "The meaning of the 'Masterpiece' metaphor",
        commonMistake: "Assuming the teacher literally painted a picture of Bholi.",
        correctCbseApproach: "Explain the metaphor: The teacher was the artist, and Bholi's articulate, confident, empowered persona was her living masterpiece.",
        penaltyRisk: "Lose 2 marks in Board 6-mark Literary Device Question."
      }
    ],
        keywordsList: [
      "Sulekha (Bholi)",
      "Ramlal",
      "smallpox marks and stammer",
      "tehsildar's order",
      "kind village teacher",
      "Bishamber Nath",
      "greedy dowry demand 5000 rupees",
      "refusal to marry a coward",
      "light of teacher's masterpiece"
],
    idiomsAndPhrases: [
      {
            "phrase": "Turn over a new leaf",
            "meaning": "To transform one's character and start a dignified new life",
            "contextSentence": "Education gave Bholi the courage to turn over a new leaf and reject the greedy bridegroom."
      },
      {
            "phrase": "Stand on one's own feet",
            "meaning": "To become self-reliant, confident, and independent",
            "contextSentence": "Bholi declared she would teach in the village school and stand on her own feet."
      }
],
boardQAs: [
      {
        id: "fp8-ws-1",
        question: "Bholi’s parents accepted Bishambar’s marriage proposal for their own selfish needs. Why? (Official Test Series 1 Worksheet)",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Ramlal and his wife accepted Bishambar's proposal out of callous self-interest and indifference to Bholi's welfare. Bishambar was a wealthy grocer from another village with his own house and thousands in the bank. He was unaware of Bholi's smallpox pockmarks and stammer, and asked for no dowry initially. Her mother argued that if rejected, Bholi would remain an unmarried domestic burden all her life, disregarding the groom's age, limp, and grown children.",
        keyKeywords: ["callous self-interest", "wealthy grocer with bank balance", "unaware of pockmarks", "limping widower with grown children", "fear of unmarried burden"],
        examinerRubricTip: "Mention Bishambar's wealth, absence of initial dowry, his physical shortcomings, and parents' fear of lifelong burden."
      },
      {
        id: "fp8-ws-2",
        question: "The Tehsildar was an agent of change in Bholi’s life. Justify. (Official Test Series 1 Worksheet)",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The Tehsildar unwittingly served as the catalyst for Bholi's emancipation. While inaugurating the village primary school for girls, he ordered Ramlal, as a government revenue official, to set an example by sending his daughters to school. Ramlal's wife refused to send their marriageable daughters, but sent Bholi since she had poor marriage prospects anyway. This administrative order opened the doors of education and introduced Bholi to her life-changing teacher.",
        keyKeywords: ["inaugurated primary school", "government representative example", "wife sent Bholi as disposable child", "doorway to education", "teacher's transformative guidance"],
        examinerRubricTip: "Explain the link: Tehsildar's decree → mother sending Bholi as a compromise → exposure to the caring teacher."
      },
      {
        id: "fp8-ws-3",
        question: "‘Education is considered the most important tool for empowering women in society. It plays an important role in social and cultural development’. Prove the above statement in the light of the story ‘Bholi’. (Official Test Series 1 Worksheet)",
        marks: 6,
        type: "LAQ",
        modelAnswer: "K.A. Abbas's 'Bholi' is a stirring testament to the power of female education in dismantling patriarchal oppression.\n\nInitially, Sulekha is neglected as 'Bholi'—a stammering, pockmarked girl considered a familial burden. However, the classroom becomes her sanctuary. Under her teacher's gentle, patient, and encouraging mentorship, education awakens her dormant intellect, dignity, and moral agency.\n\nWhen the greedy, limping grocer Bishambar demands 5,000 rupees as dowry after spotting her pockmarks, Bholi does not weep helplessly. She speaks in a clear, confident voice without a single stammer, flings the wedding garland into the sacred fire, and refuses to marry a contemptible coward. She declares she will teach in the village school and serve her elderly parents. Education thus transforms a victim of social prejudice into a self-reliant, empowered woman of substance.",
        keyKeywords: ["female empowerment", "simpleton to woman of substance", "nurturing mentorship", "rejection of dowry and greedy groom", "voice without stammer", "self-reliance and dignity"],
        examinerRubricTip: "Contrast the timid, stammering child with the resolute, articulate woman who rejects dowry; emphasize teacher's role."
      },
      {
        id: "fp8-q1",
        question: "Why was Sulekha nicknamed 'Bholi' (the simpleton) since her childhood? What two tragedies caused her disabilities?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Sulekha was nicknamed 'Bholi' because she was backward compared to other children. Two distinct childhood tragedies caused her condition: (1) When ten months old, she fell off her cot onto her head, damaging part of her brain; and (2) At age two, she suffered a severe smallpox attack that permanently disfigured her face and entire body with deep black pockmarks. Later, she stammered when she began speaking at age five.",
        keyKeywords: ["backward compared to others", "fell off cot at ten months", "damaged brain", "smallpox at age two", "deep black pockmarks", "stammered at age five"],
        examinerRubricTip: "Detail both accidents: the head injury from falling off the cot and the smallpox attack."
      },
      {
        id: "fp8-q2",
        question: "How did Bholi react on her first day of school? What made the classroom feel different from her home?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Bholi was initially terrified, fearing she was being cast out like their cow Lakshmi who had been led away and sold. However, clean clothes and oiled hair made her feel respected. In class, the brightly colored pictures of horses, goats, and parrots fascinated her. Above all, the teacher spoke to her with soothing warmth and affection—a stark contrast to the shouting and neglect at home.",
        keyKeywords: ["feared being sold like cow Lakshmi", "brightly colored wall pictures", "fascinated by animals", "teacher's soothing warmth", "contrast with home neglect"],
        examinerRubricTip: "Mention her fear of Lakshmi's fate, the colored classroom pictures, and the teacher's gentle tone."
      },
      {
        id: "fp8-q3",
        question: "How did Bholi's teacher encourage her to overcome her stammer on the very first day?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "When Bholi stammered helplessly while trying to say her name, the other girls giggled, making her weep. Instead of scolding her, the teacher patted her affectionately, praised her effort, and gently urged her: 'Put your fear out of your heart and you will be able to speak like anyone else.' She promised Bholi that books would make her respected and loved in the village.",
        keyKeywords: ["patted affectionately", "praised initial effort", "put fear out of heart", "books give respect", "unconditional encouragement"],
        examinerRubricTip: "Quote or paraphrase the teacher's advice: 'Put fear out of your heart'."
      },
      {
        id: "fp8-q4",
        question: "Why did Ramlal place his turban at Bishambar's feet during the wedding ceremony?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "In traditional Indian rural society, a man's turban represents his personal honor, family dignity, and social standing (izzat). When Bishambar extorted 5,000 rupees upon seeing Bholi's pockmarks, Ramlal placed his turban at Bishambar's feet, humbling his entire social self-respect to plead with the groom not to break the marriage and ruin his family's reputation.",
        keyKeywords: ["turban symbolizes honor and izzat", "family dignity", "extorted 5,000 rupees", "humbling social self-respect", "pleaded to avoid social disgrace"],
        examinerRubricTip: "Explain the cultural significance of placing the turban at someone's feet (submitting honor/dignity)."
      },
      {
        id: "fp8-q5",
        question: "What made Bholi's eyes blaze with cold contempt instead of fear when she looked at Bishambar?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "When Bishambar demanded money, Bholi saw him not as a future partner, but as a cowardly, predatory blackmailer who was humiliating her weeping father. Education had given her clarity of moral vision. Her fear vanished, replaced by justifiable outrage and cold contempt for a man who treated marriage as a mercantile auction.",
        keyKeywords: ["cowardly predatory blackmailer", "humiliating weeping father", "clarity of moral vision", "fear replaced by outrage", "marriage as mercantile auction"],
        examinerRubricTip: "Contrast her past submissiveness with her cold contempt for his mercenary greed."
      },
      {
        id: "fp8-laq-1",
        question: "How did education transform Bholi from a 'dumb cow' into a bold, independent woman of dignity?",
        marks: 6,
        type: "LAQ",
        modelAnswer: "K.A. Abbas's 'Bholi' portrays a profound psychological metamorphosis engineered by the humanizing power of education.\n\nIn her childhood, Bholi was considered sub-human—a brain-damaged, disfigured, stammering burden labeled a 'dumb cow' by her own parents. Denied clean clothing, affection, and basic human dignity, she was sent to school merely because her mother considered her worthless for marriage. Her spirit was crushed by institutionalized neglect.\n\nIn the village classroom, the teacher functioned as an agent of resurrection. By refusing to mock her stammer and showering her with patience and encouragement, the teacher instilled a revolutionary sense of self-belief in Bholi. Through books, Bholi discovered language, intellect, and the understanding of her fundamental rights as a human being.\n\nThe culmination of this education manifested on her wedding day. When Bishambar extorted 5,000 rupees from her weeping father, Bholi cast off passive female servitude. Speaking with crystal-clear diction and unwavering courage, she rejected the greedy groom, cast the garland into the sacrificial fire, and proclaimed her decision to teach and care for her parents. Education elevated a helpless victim into a self-reliant beacon of female empowerment.",
        keyKeywords: ["psychological metamorphosis", "humanizing power of education", "dumb cow label discarded", "agent of resurrection", "unwavering courage and diction", "rejection of greedy groom", "beacon of female empowerment"],
        examinerRubricTip: "Follow the 3-part trajectory: the degraded childhood, the teacher's nurturing classroom, and the heroic wedding defiance."
      },
      {
id: "fp8-laq-2",
        question: "'The teacher was an artist and Bholi was her masterpiece.' Explain this metaphor with reference to the climactic transformation in the story.",
        marks: 6,
        type: "LAQ",
        modelAnswer: "The climactic image of K.A. Abbas's story—the teacher standing aside, smiling with deep creative satisfaction—elevates education into the highest form of fine art.\n\nAn artist takes raw, unrefined stone, clay, or canvas and sculpts it into a work of enduring beauty, purpose, and balance. When Bholi first entered the classroom, she was unformed human clay, marred by physical scars, cognitive delays, and the psychological trauma of domestic neglect. The village community had written her off as useless.\n\nThe teacher approached Bholi with the vision and patience of a master sculptor. She did not use harsh chisels or rebuke; she used warmth, gentle affirmation, and inspiring books to mold Bholi's dormant intellect and moral backbone. Step by step, she taught her to articulate sounds, read words, and cultivate self-worth.\n\nAt the wedding mandap, when Bholi stood up fearlessly, rejected the mercenary Bishambar, and articulated a noble life plan to teach in the school and serve her aging parents, the masterpiece was complete. The teacher looked on with the quiet, profound joy of an artist contemplating her magnum opus, proving that true teaching breathes life, dignity, and sovereignty into the human soul.",
        keyKeywords: ["artist and masterpiece metaphor", "raw unrefined human clay", "master sculptor's vision", "warmth and gentle affirmation", "dormant intellect molded", "wedding mandap culmination", "quiet profound joy of the artist"],
        examinerRubricTip: "Explicitly connect the artist-canvas/clay metaphor to the teacher's sculpting of Bholi's character."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: true
  },

  // =========================================================================
  // FOOTPRINTS WITHOUT FEET — CHAPTER 9: THE BOOK THAT SAVED THE EARTH
  // =========================================================================
  {
    id: "fp-ch9-book-that-saved-earth",
    title: "The Book That Saved the Earth",
    book: "Footprints Without Feet",
    type: "play",
    chapterNo: 9,
    author: "Claire Boiko",
    genre: "Science Fiction Comedy / Farce",
    theme: "Arrogance based on shallow intellect collapses before nursery rhyme wisdom; humor triumphs over martial conquest.",
    funToddlerHook: {
      tagline: "How 'Mother Goose' Rhymes scared away an Alien Space Fleet!",
      funnyStory: "In the 25th century, a historian reveals that Earth was once saved from Martian invasion NOT by missiles or superheroes, but by a dusty nursery rhyme book called 'Mother Goose'! The Martian ruler, Great Think-Tank (a giant egg-headed alien with supreme ego), orders his crew to invade. They find a library, think books are sandwiches, eat them, and listen to codes. When they read 'Humpty Dumpty sat on a wall', Think-Tank sees Humpty's egg-shaped face and screams: 'THAT IS ME! Earthlings are planning to scramble my brain!' He cancels the invasion and flees to Alpha Centauri!",
      ahaLesson: "A little knowledge misunderstood is more terrifying than any army.",
      emoji: "🚀"
    },
    deepExplanation: "Set in the Museum of Ancient History in the twenty-fifth century, the Historian enlightens the audience on how an attempted Martian invasion in the year 2040 was thwarted by an ordinary book of nursery rhymes: 'Mother Goose'.\n\nThe play shifts to Mars Space Control in 2040. Great Think-Tank, the balloon-headed, arrogant commander-in-chief of Mars, views Earthlings as primitive creatures with tiny heads. He commands Captain Omega, Lieutenant Iota, and Sergeant Oop to land on Earth and prepare for its conquest. The probe crew lands in a public library in Centerville, entirely confounded by thousands of books.\n\nThink-Tank initially speculates that books are Earthling sandwiches. He commands Sergeant Oop to eat one; Oop finds it dry and tasteless. Think-Tank then reclassifies them as communication devices, ordering the crew to hold them to their ears. Hearing nothing, he orders them to ingest vitamin supplements to decode the books visually.\n\nOmega reads verses from 'Mother Goose'. Think-Tank misinterprets every poem catastrophically: 'Mistress Mary' makes him believe Earthlings cultivate silver bells and explosive cockle shells in gardens. 'Hey Diddle Diddle' convinces him Earth animals are space-trained. Finally, upon seeing Humpty Dumpty's illustration, Think-Tank panics—identifying his own egg-shaped head. Convinced Earthlings are plotting to capture Mars and scramble his brain, Think-Tank orders a panicked retreat to Alpha Centauri, inadvertently saving Earth.",
    bulletSummary: [
      "In the 25th century, a Historian reveals that Earth was saved in 2040 by a nursery rhyme book.",
      "Martian ruler Think-Tank, immensely proud of his balloon-shaped head, orders Earth's invasion.",
      "His landing crew infiltrates a public library, mistaking books for sandwiches and communication radios.",
      "Taking vitamins, the crew decodes 'Mother Goose' nursery rhymes.",
      "Think-Tank misinterprets 'Mistress Mary' as Earthlings bio-engineering explosive metal gardens.",
      "He misconstrues Humpty Dumpty as himself, believing Earth forces are planning his assassination.",
      "Terrified, Think-Tank cancels the invasion and flees 100 million miles away to Alpha Centauri."
    ],
    characters: [
      {
        name: "Think-Tank",
        role: "Commander-in-Chief of Mars",
        emoji: "👽",
        traits: ["Pompous", "Ignorant", "Egotistical", "Cowardly"],
        description: "Possesses a colossal egg-shaped head and an even larger ego, but lacks basic logic and cowers at nursery rhymes.",
        keyQuote: "Mirror, mirror, in my hand, who is the most fantastically intellectually gifted being in the land?"
      },
      {
        name: "Noodle",
        role: "Apprentice to Think-Tank",
        emoji: "🧠",
        traits: ["Diplomatic", "Shrewd", "Polite", "Genuinely clever"],
        description: "Tactfully corrects Think-Tank's blunders without bruising his fragile alien vanity."
      }
    ],
    hardWords: [
      { word: "Pantheon", pronunciation: "PAN-thee-on", partOfSpeech: "noun", meaning: "A collection of all gods or illustrious persons", contextSentence: "Think-Tank considered himself first in the Martian pantheon.", synonyms: ["hall of fame"] },
      { word: "Decipher", pronunciation: "dih-SY-fer", partOfSpeech: "verb", meaning: "Convert code or cryptic text into normal language", contextSentence: "The Martian crew ingested vitamins to decipher Earth codes.", synonyms: ["decode", "interpret", "unravel"] }
    ],
    keyQuotes: [
      { quote: "It was a book that saved the Earth. Not a ray gun, nor a bomb, but a book of nursery rhymes.", speaker: "The Historian", context: "Opening prologue highlighting the satire." }
    ],
    examinerTraps: [
      {
        trapTitle: "Why did Think-Tank flee to Alpha Centauri?",
        commonMistake: "Thinking Earthlings actually attacked Mars.",
        correctCbseApproach: "Emphasize that his fear was entirely self-generated from the Humpty Dumpty illustration, which he mistook for a planned assassination of his egg-shaped self.",
        penaltyRisk: "Loss of 2 marks on causation."
      }
    ],
        keywordsList: [
      "Think-Tank",
      "Noodle",
      "Martian invasion",
      "Mother Goose nursery rhymes",
      "sandwich misconception",
      "Humpty Dumpty illustration",
      "fall of Mars",
      "satirical space drama",
      "arrogance vs genuine wisdom"
],
    idiomsAndPhrases: [
      {
            "phrase": "Make a mountain out of a molehill",
            "meaning": "To exaggerate a tiny matter into a catastrophic crisis",
            "contextSentence": "Think-Tank made a mountain out of a molehill by misinterpreting children's nursery rhymes."
      },
      {
            "phrase": "Save one's skin",
            "meaning": "To flee in panic to protect oneself from perceived peril",
            "contextSentence": "Think-Tank ordered his spaceship to flee to Alpha Centauri to save his skin."
      }
],
boardQAs: [
      {
        id: "fp9-q1",
        question: "How did the book 'Mother Goose' save Earth from a Martian invasion?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Martian leader Think-Tank completely misinterpreted the nursery rhymes in 'Mother Goose'. He thought Earthlings grew explosive minerals ('silver bells'), trained cows for aviation, and recognized his own egg-shaped portrait in Humpty Dumpty, deducing an imminent Earth assault on Mars. Panicking, he aborted the invasion and fled to Alpha Centauri.",
        keyKeywords: ["misinterpreted", "Mother Goose", "Humpty Dumpty", "egg-shaped head", "aborted invasion"],
        examinerRubricTip: "Mention the Humpty Dumpty portrait as the decisive trigger for Think-Tank's retreat."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT — PROSE CHAPTER 1: A LETTER TO GOD
  // =========================================================================
  {
    id: "ff-ch1-letter-to-god",
    title: "A Letter to God",
    book: "First Flight (Prose)",
    type: "prose",
    chapterNo: 1,
    author: "G.L. Fuentes",
    genre: "Parable / Irony of Faith",
    theme: "Unshakable, childlike faith in the Divine contrasted with human distrust and unintentional irony.",
    funToddlerHook: {
      tagline: "The Farmer who wrote to God and accused Postmen of Stealing his Money!",
      funnyStory: "Lencho's beautiful cornfield gets smashed by giant hailstones that look like frozen silver coins. Does he cry? No, he writes a letter addressed simply to: 'God, Sky'. He asks for 100 pesos. The kind postmaster laughs, but is so touched by his faith that he collects 70 pesos from all postal workers. When Lencho counts 70 pesos, he gets furious! He writes back to God: 'Please send the rest directly, and don't send it through the post office—those postmen are a bunch of crooks!'",
      ahaLesson: "Sometimes the people helping you behind the scenes get blamed for what's missing. Never assume malice!",
      emoji: "✉️"
    },
    deepExplanation: "G.L. Fuentes portrays the rustic simplicity and monumental faith of Lencho, a hardworking peasant farmer dwelling on the crest of a low hill in a solitary Latin American valley. When an auspicious rainstorm transforms into a devastating hailstorm, Lencho's blooming cornfield is utterly destroyed, leaving his family facing imminent starvation.\n\nGoverned by absolute faith that God sees everything, Lencho composes a letter addressed straightforwardly to 'God', requesting one hundred pesos to sow his field anew and survive until the next harvest. When the local postmaster discovers the letter, he initially chuckles, but is quickly humbled by the peasant's immense faith. Determined not to let Lencho's faith waver, the generous, plump postmaster donates part of his salary and collects contributions from his colleagues, raising seventy pesos.\n\nThe following Sunday, Lencho arrives to collect his reply. Upon counting the money and finding only seventy pesos, Lencho exhibits no surprise—for his faith in God's infallibility is absolute. Instead, he becomes indignant, believing God could never make an arithmetic mistake or deny his petition. He promptly pens a second letter asking God to dispatch the remaining thirty pesos, cautioning Him not to send it through the postal system, because 'the post office employees are a bunch of crooks'.",
    bulletSummary: [
      "Hardworking farmer Lencho anticipates a rich harvest, needing only a gentle shower of rain.",
      "A fierce hailstorm devastates his cornfields entirely, leaving his family facing starvation.",
      "Driven by childlike faith, Lencho writes a letter to God requesting 100 pesos for seeds and sustenance.",
      "The sympathetic postmaster collects 70 pesos through charitable contributions to preserve Lencho's faith.",
      "Lencho finds 70 pesos and gets angry, convinced God could neither err nor deny his plea.",
      "He writes a second letter demanding the remaining 30 pesos directly, branding postal staff 'a bunch of crooks'.",
      "The story concludes on poignant situational irony: benefactors are condemned as thieves."
    ],
    characters: [
      {
        name: "Lencho",
        role: "Devout Peasant Farmer",
        emoji: "🌾",
        traits: ["Hardworking", "Innocent", "Unshakable faith", "Distrustful of humans"],
        description: "An ox of a man working the fields, his faith in God is pure and unquestioning, yet blind to human benevolence.",
        keyQuote: "God, if you don't help me, my family and I will go hungry this year."
      },
      {
        name: "The Postmaster",
        role: "Benevolent Public Servant",
        emoji: "📮",
        traits: ["Amiable", "Compassionate", "Generous", "Sensitive"],
        description: "A large, fat, friendly man who embodies practical Christian charity, giving his own money to uphold a stranger's faith.",
        keyQuote: "What faith! I wish I had the faith of the man who wrote this letter."
      }
    ],
    hardWords: [
      { word: "Downpour", pronunciation: "DOWN-por", partOfSpeech: "noun", meaning: "A heavy, sudden fall of rain", contextSentence: "The earth needed a downpour or at least a shower.", synonyms: ["torrent", "cloudburst"] },
      { word: "Pestilence / Plague", pronunciation: "PLAYG", partOfSpeech: "noun", meaning: "A disastrous infestation or epidemic", contextSentence: "A plague of locusts would have left more than this.", synonyms: ["swarm", "infestation"] },
      { word: "Conscience", pronunciation: "KON-shuns", partOfSpeech: "noun", meaning: "An inner feeling or voice viewed as acting as a guide to the rightness of one's behavior", contextSentence: "His conscience told him that God sees into the deepest secrets.", synonyms: ["inner voice", "moral sense"] }
    ],
    keyQuotes: [
      { quote: "The post office employees are a bunch of crooks. Lencho.", speaker: "Lencho", context: "Closing sentence of the second letter, highlighting ironic misunderstanding." }
    ],
    examinerTraps: [
      {
        trapTitle: "Identify the Situational Irony",
        commonMistake: "Calling Lencho ungrateful or rude.",
        correctCbseApproach: "Frame it strictly as Situational Irony: the post office staff who sacrificed their own money to preserve his faith were condemned by him as dishonest embezzlers.",
        penaltyRisk: "Loss of 2 marks on board irony question."
      }
    ],
        keywordsList: [
      "Lencho",
      "locust-like hailstorm",
      "single hope God",
      "letter asking 100 pesos",
      "postmaster compassion",
      "70 pesos collected",
      "bunch of crooks",
      "ironic faith",
      "peasant simplicity"
],
    idiomsAndPhrases: [
      {
            "phrase": "A ray of hope",
            "meaning": "A tiny single possibility of salvation amidst despair",
            "contextSentence": "In the hearts of all who lived in that solitary house, there was a single ray of hope: help from God."
      },
      {
            "phrase": "Bunch of crooks",
            "meaning": "A group of dishonest, untrustworthy thieves",
            "contextSentence": "Lencho mistakenly suspected the benevolent postal staff of being a bunch of crooks."
      }
],
boardQAs: [
      {
        id: "ff1-q1",
        question: "Why did Lencho call the post office employees 'a bunch of crooks'? What is the irony in this situation?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Lencho had absolute, unquestioning faith that God could neither make a mistake nor deny him the 100 pesos he requested. Finding only 70 pesos in the envelope, he deduced that the postal workers had pocketed the missing 30 pesos. The tragic irony lies in the fact that those very postal workers had charitably gathered the 70 pesos from their own wages to help him.",
        keyKeywords: ["absolute faith", "no doubt in God", "deduced embezzlement", "situational irony", "charitable workers"],
        examinerRubricTip: "Must define the irony: benefactors mistrusted as thieves."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT — PROSE CHAPTER 2: NELSON MANDELA: LONG WALK TO FREEDOM
  // =========================================================================
  {
    id: "ff-ch2-nelson-mandela",
    title: "Nelson Mandela: Long Walk to Freedom",
    book: "First Flight (Prose)",
    type: "prose",
    chapterNo: 2,
    author: "Nelson Rolihlahla Mandela",
    genre: "Autobiography / Political Memoir",
    theme: "Courage is the triumph over fear; freedom is indivisible, liberating both oppressor and oppressed.",
    funToddlerHook: {
      tagline: "The Prisoner who taught the World what True Freedom means!",
      funnyStory: "Nelson Mandela spent 27 years locked in a tiny concrete prison cell just because he wanted black and white people to be treated equally. When he finally walked out as President of South Africa, he didn't seek revenge against his jailers! Instead, he invited them to his inauguration and sang both national anthems! He said: 'A man who takes away another man's freedom is just as much a prisoner of hatred.'",
      ahaLesson: "Courage isn't the absence of fear—it's conquering it. Hate hurts the hater most.",
      emoji: "🕊️"
    },
    deepExplanation: "In this extract from his autobiography, Nelson Mandela reflects on the historic inauguration on 10 May 1994 at the Union Buildings amphitheatre in Pretoria, where he was sworn in as South Africa's first democratically elected Black President before world dignitaries, marking the death of apartheid.\n\nMandela reflects on the profound meaning of courage, declaring that brave men are not those who feel no fear, but those who conquer it. He recalls extraordinary anti-apartheid stalwarts like Oliver Tambo, Walter Sisulu, and Chief Luthuli, noting that South Africa's greatest wealth is not its gold and diamonds, but its people—finer and truer than the purest gems.\n\nMandela outlines man's 'twin obligations': obligations to his family (parents, wife, children) and obligations to his people, community, and country. Under apartheid, fulfilling both was impossible for a Black South African. He meditates on the evolution of his concept of freedom: as a boy, freedom meant running in the fields; as a youth, it meant staying out at night; as an adult, it meant earning a livelihood. Ultimately, he realized freedom is indivisible. Both the oppressed and the oppressor must be liberated, because an oppressor who locks another behind bars of prejudice is himself a prisoner of hatred.",
    bulletSummary: [
      "10 May 1994: South Africa's first democratic, non-racial government inaugurated in Pretoria.",
      "Mandela takes the presidential oath, pledging to liberate his people from poverty, deprivation, and discrimination.",
      "South African jets demonstrate military precision and loyalty to democracy, flying the new rainbow flag.",
      "Mandela honors countless freedom fighters (Sisulu, Tambo, Dadoo) whose sacrifices forged the nation.",
      "Defines courage: not the absence of fear, but the triumph over it.",
      "Explains 'twin obligations': duty towards family and duty towards the community and nation.",
      "Emphasizes that both oppressor and oppressed are prisoners—one of injustice, the other of hatred."
    ],
    characters: [
      {
        name: "Nelson Mandela",
        role: "First Black President of South Africa",
        emoji: "🇿🇦",
        traits: ["Magnanimous", "Visionary", "Resilient", "Philosophical"],
        description: "Spent 27 years in prison, emerging without bitterness to unify a racially fractured nation.",
        keyQuote: "No one is born hating another person because of the color of his skin..."
      },
      {
        name: "Zenani",
        role: "Mandela's Daughter",
        emoji: "👩",
        traits: ["Supportive", "Poised"],
        description: "Accompanied her father on the podium during the inauguration ceremony."
      }
    ],
    hardWords: [
      { word: "Apartheid", pronunciation: "uh-PAHRT-hayt", partOfSpeech: "noun", meaning: "A political system of racial segregation and discrimination in South Africa", contextSentence: "Apartheid created a deep and lasting wound in my country.", synonyms: ["racial segregation"] },
      { word: "Emancipation", pronunciation: "ih-man-suh-PAY-shun", partOfSpeech: "noun", meaning: "The fact or process of being set free from legal, social, or political restrictions", contextSentence: "We have achieved our political emancipation.", synonyms: ["liberation", "freedom"] },
      { word: "Obligation", pronunciation: "ob-lih-GAY-shun", partOfSpeech: "noun", meaning: "An act or course of action to which a person is morally or legally bound", contextSentence: "Every man has twin obligations in life.", synonyms: ["duty", "responsibility"] }
    ],
    keyQuotes: [
      { quote: "The brave man is not he who does not feel afraid, but he who conquers that fear.", speaker: "Nelson Mandela", context: "Core philosophical definition of courage." },
      { quote: "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.", speaker: "Nelson Mandela", context: "Mandela's definition of true freedom." }
    ],
    examinerTraps: [
      {
        trapTitle: "Why does Mandela say the oppressor must be liberated?",
        commonMistake: "Writing that oppressors were innocent victims.",
        correctCbseApproach: "Mandela argues that the oppressor is locked behind bars of prejudice, hatred, and narrow-mindedness. Both rob humanity.",
        penaltyRisk: "Lose 2 marks on board LAQ."
      }
    ],
        keywordsList: [
      "Nelson Mandela",
      "10 May 1994 inauguration",
      "Union Buildings Pretoria",
      "rainbow nation",
      "apartheid",
      "triumph over fear",
      "twin obligations",
      "depths of oppression create heights of character",
      "unquenchable flame of freedom"
],
    idiomsAndPhrases: [
      {
            "phrase": "Twin obligations",
            "meaning": "Dual duties: to one's family and to one's community/country",
            "contextSentence": "Mandela observed that every man in civil society has twin obligations."
      },
      {
            "phrase": "Depths of oppression",
            "meaning": "Cruel, prolonged tyranny and persecution",
            "contextSentence": "Decades of suffering produced the depths of oppression that created heights of character."
      }
],
boardQAs: [
      {
        id: "ff2-q1",
        question: "What are the 'twin obligations' referred to by Nelson Mandela? Why could a Black man not fulfill them in South Africa?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Mandela identifies twin obligations: first, obligation to one's family, parents, wife, and children; second, obligation to one's community, people, and country. In South Africa, a Black person attempting to fulfill these dual duties was branded a rebel, torn from his family, and forced into a solitary existence of rebellion.",
        keyKeywords: ["family obligation", "community/country obligation", "apartheid repression", "branded a rebel", "twin obligations"],
        examinerRubricTip: "State both obligations explicitly before explaining apartheid's barrier."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT — PROSE CHAPTER 3: FROM THE DIARY OF ANNE FRANK
  // =========================================================================
  {
    id: "ff-ch3-anne-frank",
    title: "From the Diary of Anne Frank",
    book: "First Flight (Prose)",
    type: "prose",
    chapterNo: 4,
    author: "Anne Frank",
    genre: "Diary / Historical Non-fiction",
    theme: "The search for authentic emotional connection; wit, resilience, and humor in the face of stifling oppression.",
    funToddlerHook: {
      tagline: "The Chatterbox Schoolgirl who wrote funny poems to outsmart her Math Teacher!",
      funnyStory: "Anne Frank loves talking in class so much that her strict math teacher, Mr. Keesing, punishes her with essays: 'A Chatterbox', then 'An Incorrigible Chatterbox', and finally 'Quack, Quack, Quack, Said Mistress Chatterback'! Instead of crying, Anne writes a hilarious poem about a mother duck and father swan who bit their baby ducklings to death because they quacked too much! The teacher laughed so hard that he never punished her for talking again!",
      ahaLesson: "Humor, intelligence, and self-expression can disarm the strictest critics.",
      emoji: "📓"
    },
    deepExplanation: "Thirteen-year-old Jewish schoolgirl Anne Frank begins keeping a diary—which she names 'Kitty'—in Amsterdam in 1942. Anne reflects that 'paper has more patience than people', explaining that despite having a loving family and thirty casual friends, she lacks a true confidante with whom she can share her innermost thoughts.\n\nShe briefly sketches her family history: emigrating from Frankfurt to Holland in 1933 following Hitler's rise, the enactment of anti-Semitic Nuremberg decrees (wearing yellow stars, surrendering bicycles, curfew), and her deep love for her grandmother, who passed away in 1942.\n\nThe core of the excerpt recounts her school life at the Montessori school. Anne describes the pervasive anxiety among classmates awaiting term exam promotions. She shares an amusing conflict with her elderly mathematics master, Mr. Keesing, who is exasperated by her incorrigible chatter in class. As punitive measures, he assigns her three consecutive essays on chatterboxes. Anne fulfills each assignment with sparkling intellectual wit—arguing chatter is an inherited female trait from her mother. For the final essay, with help from her friend Sanne, Anne writes a satirical poem about a father swan who bit his three ducklings to death because they quacked too incessantly. Amused and disarmed by her clever allegory, Mr. Keesing reads the poem to the class and allows Anne to talk unpunished thereafter.",
    bulletSummary: [
      "13-year-old Anne Frank views paper as having 'more patience than people', naming her diary 'Kitty'.",
      "Despite having loving parents and friends, she lacks an intimate confidante for honest emotional expression.",
      "Summarizes Jewish persecution under Nazi occupation: yellow stars, discriminatory decrees, strict curfews.",
      "Describes student nervousness surrounding end-of-term academic promotions.",
      "Her math teacher Mr. Keesing punishes her excessive talking with essays on 'Chatterbox'.",
      "Anne argues humorously that talking is a genetic trait inherited from her mother.",
      "For her final punishment, she crafts a witty verse about a duck family; Mr. Keesing is delighted and permits her to talk."
    ],
    characters: [
      {
        name: "Anne Frank",
        role: "Diarist & Student",
        emoji: "✍️",
        traits: ["Articulate", "Observant", "Witty", "Introspective"],
        description: "A bright adolescent who uses literature, humor, and diary writing to navigate emotional isolation.",
        keyQuote: "Paper has more patience than people."
      },
      {
        name: "Mr. Keesing",
        role: "Mathematics Teacher",
        emoji: "📐",
        traits: ["Old-fashioned", "Strict", "Good-humoured", "Appreciative of wit"],
        description: "Initially exasperated by Anne's loquacity, but broad-minded enough to appreciate her literary humor."
      }
    ],
    hardWords: [
      { word: "Incorrigible", pronunciation: "in-KOR-ih-juh-buhl", partOfSpeech: "adjective", meaning: "Not able to be corrected, improved, or reformed", contextSentence: "He assigned me an essay on 'An Incorrigible Chatterbox'.", synonyms: ["inveterate", "unreformable"] },
      { word: "Quack", pronunciation: "KWAK", partOfSpeech: "noun/verb", meaning: "The harsh sound made by a duck; also dishonest pretender", contextSentence: "The poem was entitled 'Quack, Quack, Quack, Said Mistress Chatterback'.", synonyms: ["cackle"] }
    ],
    keyQuotes: [
      { quote: "Paper has more patience than people.", speaker: "Anne Frank", context: "Opening rationale for recording her private thoughts in Kitty." }
    ],
    examinerTraps: [
      {
        trapTitle: "Why did Anne start a diary?",
        commonMistake: "Stating she wanted to record the war or had no friends at all.",
        correctCbseApproach: "Clarify she had loving parents and 30 friends, but had no REAL confidante to share deep personal thoughts with.",
        penaltyRisk: "Lose 1 mark on factual accuracy."
      }
    ],
        keywordsList: [
      "Anne Frank",
      "Kitty the diary",
      "paper has more patience than people",
      "Mr. Keesing",
      "chatterbox essays",
      "quack quack quack said Mistress Chatterbox",
      "Secret Annex",
      "insightful adolescent voice"
],
    idiomsAndPhrases: [
      {
            "phrase": "Paper has more patience than people",
            "meaning": "Writing in a journal allows one to pour out feelings without judgment or interruption",
            "contextSentence": "Feeling lonely despite having friends, Anne reflected that paper has more patience than people."
      },
      {
            "phrase": "Have a good laugh",
            "meaning": "To find something genuinely amusing and hearty",
            "contextSentence": "Mr. Keesing had a good laugh at Anne's witty poem about the father swan."
      }
],
boardQAs: [
      {
        id: "ff3-q1",
        question: "Why does Anne Frank say that 'paper has more patience than people'?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Anne felt that humans easily grow weary, judgmental, or indifferent when listening to others' vulnerabilities and emotional outpourings. In contrast, paper is a silent, non-judgmental confidante that absorbs every candid thought without interrupting, gossiping, or losing patience.",
        keyKeywords: ["non-judgmental", "silent confidante", "no interruption", "human indifference", "patience"],
        examinerRubricTip: "Must explain the metaphorical contrast between human impatience and paper's receptiveness."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT — PROSE CHAPTER 4: MADAM RIDES THE BUS
  // =========================================================================
  {
    id: "ff-ch4-madam-rides-bus",
    title: "Madam Rides the Bus",
    book: "First Flight (Prose)",
    type: "prose",
    chapterNo: 7,
    author: "Vallikkannan",
    genre: "Coming-of-Age Realism",
    theme: "Innocent childhood curiosity maturing through first-hand encounters with life, independence, and mortality.",
    funToddlerHook: {
      tagline: "The 8-Year-Old Boss Girl who rode the City Bus all by herself!",
      funnyStory: "Valli is an eight-year-old girl who stands at her front doorway observing everything. Her biggest dream? Riding the hourly village bus to the town! She secretly saves 60 paise by refusing peppermints, merry-go-rounds, and toys. She boards the bus like a tiny queen, demanding the conductor call her 'Madam'! On the way, she laughs hysterically at a silly young cow galloping in front of the bus. But on the return ride, seeing that same sweet cow lying dead on the roadside changes her forever.",
      ahaLesson: "Growing up means realizing that life is joyful, but also fragile and precious.",
      emoji: "🚌"
    },
    deepExplanation: "Eight-year-old Valliammai (Valli) lives in a rural Tamil village. Lacking playmates, her favorite pastime is standing in the front doorway of her house watching the street. The sight of the bus traveling hourly between her village and the nearest town awakens an irresistible yearning to experience a bus journey.\n\nDisplaying mature enterprise and planning, Valli gathers logistical intelligence by eavesdropping on regular passengers and quizzing neighbors: the town is six miles away, the fare is thirty paise one way, and the round trip takes forty-five minutes. She exercises heroic self-discipline, hoarding every coin given to her and resisting village fair temptations—peppermints, balloons, and the merry-go-round—until she saves sixty paise.\n\nOne afternoon while her mother naps, Valli boards the bus. When the jovial conductor offers her a hand, she proudly declines, asserting she can board herself. Amused, the conductor dubs her 'Madam'. Valli is enchanted by the landscape—the canal, palm trees, mountains, green fields, and a young cow running hysterically with tail high in the middle of the road, sending Valli into fits of laughter.\n\nUpon reaching the town, Valli stays aboard, rejecting the conductor's offer of a cold drink because she has only thirty paise for the return ticket. On the homeward journey, she is horrified to see the same playful cow dead by the roadside, struck by a fast-moving vehicle. The stark brutality of death sobers her completely, replacing her buoyant laughter with quiet contemplation. She returns home just as her mother awakens, keeping her profound secret safe.",
    bulletSummary: [
      "8-year-old Valli spends hours observing street life from her front doorway.",
      "Her supreme desire is to ride the bus operating between her village and the town.",
      "She meticulously calculates timings (45 mins each way) and fare (30 paise each way).",
      "Saves 60 paise through extraordinary self-denial at the village fair.",
      "Boards the bus alone during her mother's afternoon nap, behaving with regal dignity as 'Madam'.",
      "Delights in the panoramic scenery and laughs at a playful cow galloping before the bus.",
      "On return, sees the cow dead on the highway; the experience matures her understanding of life and death.",
      "Returns home discreetly with her profound personal milestone intact."
    ],
    characters: [
      {
        name: "Valli (Valliammai)",
        role: "8-Year-Old Protagonist",
        emoji: "👧",
        traits: ["Self-respecting", "Observant", "Determined", "Mature"],
        description: "An extraordinarily resourceful and disciplined child who plans and executes her dream voyage independently.",
        keyQuote: "I am not a child, I tell you. I'm eight years old and I've paid my thirty paise like everyone else."
      },
      {
        name: "The Bus Conductor",
        role: "Jovial Bus Worker",
        emoji: "🎫",
        traits: ["Good-natured", "Teasing", "Caring", "Warm"],
        description: "Playfully addresses Valli as 'Madam' and looks after her safety throughout the trip."
      }
    ],
    hardWords: [
      { word: "Discreet", pronunciation: "dih-SKREET", partOfSpeech: "adjective", meaning: "Careful and prudent in one's speech or actions to avoid causing offense or revealing secrets", contextSentence: "Valli asked discreet questions to gather information.", synonyms: ["cautious", "circumspect", "prudent"] },
      { word: "Resolute", pronunciation: "REZ-uh-loot", partOfSpeech: "adjective", meaning: "Admirably purposeful, determined, and unwavering", contextSentence: "She showed resolute self-control to save her coins.", synonyms: ["determined", "unwavering", "steadfast"] }
    ],
    keyQuotes: [
      { quote: "What a playful, beautiful creature it was! And now, in an instant, it had lost its life.", speaker: "Valli", context: "Reflecting on the dead cow on the road back home." }
    ],
    examinerTraps: [
      {
        trapTitle: "Why did Valli refuse the conductor's treat?",
        commonMistake: "Saying she didn't like cold drinks.",
        correctCbseApproach: "Highlight her fierce self-respect and pride. She accepted no favors or handouts from strangers, staying within her earned means.",
        penaltyRisk: "Lose 1 mark on character interpretation."
      }
    ],
        keywordsList: [
      "Valli (Valliammai)",
      "8-year-old girl",
      "bus journey to town",
      "30 paise fare each way",
      "saving every stray coin",
      "commanding demeanor",
      "dead cow by roadside",
      "mystery of life and death",
      "independent spirit"
],
    idiomsAndPhrases: [
      {
            "phrase": "Stand on ceremony",
            "meaning": "To act stiffly, formally, or demand royal treatment",
            "contextSentence": "Valli told the conductor she was not a child and stood on her dignity."
      },
      {
            "phrase": "A matter of life and death",
            "meaning": "A profound, shocking confrontation with mortality",
            "contextSentence": "Seeing the dead cow by the roadside made Valli understand the mystery of life and death."
      }
],
boardQAs: [
      {
        id: "ff4-q1",
        question: "How did Valli's encounter with the dead cow alter her mood and worldview during her bus journey?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "On the outward journey, Valli had laughed jubilantly at the young cow sprinting in front of the bus with its tail aloft. Seeing the same animal mangled, bloody, and lifeless on the road back home shocked her into silent grief. The incident abruptly stripped away her childhood innocence, introducing her to the harsh, unpredictable reality of death.",
        keyKeywords: ["jubilant laughter", "mangled and lifeless", "shocked into grief", "stripped innocence", "reality of death"],
        examinerRubricTip: "Contrast the cow's living vibrancy with its lifeless state to show Valli's psychological shift."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT — PROSE CHAPTER 5: THE SERMON AT BENARES
  // =========================================================================
  {
    id: "ff-ch5-sermon-at-benares",
    title: "The Sermon at Benares",
    book: "First Flight (Prose)",
    type: "prose",
    chapterNo: 8,
    author: "Betty Renshaw / Canonical Lore",
    genre: "Philosophical Sermon / Spiritual Legend",
    theme: "Death is universal and inevitable; peace of mind comes only through accepting impermanence and shedding grief.",
    funToddlerHook: {
      tagline: "The Mustard Seed Quest that cured a Mother's Broken Heart!",
      funnyStory: "Kisa Gotami's only little son dies. In wild grief, she carries the dead baby from house to house asking for medicine. People say she has gone mad. Finally, she meets Gautama Buddha. Buddha smiles and says: 'I will cure your child! Bring me a handful of mustard seeds from a house where NO ONE has ever died.' Kisa knocks on every door in the city: 'Here are seeds, but my father died last year... my sister died... our grandfather died.' By evening, sitting in the dark watching city lights flicker and die, she realizes: Death comes to every single family!",
      ahaLesson: "Grief is natural, but death touches everyone. True peace comes from accepting that all life ends.",
      emoji: "🪔"
    },
    deepExplanation: "This narrative captures the spiritual awakening of Prince Siddhartha Gautama, who renounced royal luxury at age twenty-five after witnessing four sights: a sick man, an aged man, a funeral procession, and an ascetic monk. After seven years of wandering and meditating under a bodhi tree, he achieved enlightenment and delivered his first sermon at the holy city of Benares on the Ganges.\n\nThe core sermon centers on Kisa Gotami, whose only son had died. Crazed with grief, she carried the dead child to her neighbors seeking medicine to revive him. A compassionate man directed her to the Buddha. The Buddha agreed to cure the boy on one condition: she must bring a handful of mustard seeds procured from a house where no father, mother, child, or friend had ever died.\n\nKisa Gotami journeyed from door to door. Householders offered mustard seeds willingly, but whenever she asked if death had touched their household, they mourned that the living are few, but the dead are many. Despairing and exhausted at twilight, she sat by the wayside watching city lamps flicker and extinguish into total darkness. In that illumination, she realized the selfishness of her grief: human lives flicker like city lights, and death is universal. Returning to the Buddha, she accepted that just as ripe fruits inevitably fall and earthen vessels shattered by potters cannot be mended, all mortals are subject to death. Lamentation cannot resurrect the dead; it only torments the living.",
    bulletSummary: [
      "Prince Siddhartha renounces royal opulence after confronting disease, old age, death, and asceticism.",
      "Achieves enlightenment under the Bodhi tree and preaches his first sermon at Benares.",
      "Bereaved mother Kisa Gotami seeks medicine to revive her deceased only son.",
      "Buddha sends her on a quest for mustard seeds from a home untouched by death.",
      "Every household she visits reports lost loved ones ('the living are few, the dead are many').",
      "Watching city lamps flicker and extinguish, Kisa recognizes the universal inevitability of death.",
      "Buddha teaches that weeping and grieving cause physical and mental anguish, but cannot overcome mortality."
    ],
    characters: [
      {
        name: "Gautama Buddha",
        role: "Enlightened Spiritual Master",
        emoji: "🧘",
        traits: ["Compassionate", "Wise", "Pedagogical", "Serene"],
        description: "Does not preach abstract dogma; guides Kisa Gotami to experiential realization through a practical quest.",
        keyQuote: "The life of mortals in this world is troubled and brief and combined with pain."
      },
      {
        name: "Kisa Gotami",
        role: "Grief-stricken Mother",
        emoji: "🥀",
        traits: ["Maternal", "Despairing", "Enlightened", "Humbled"],
        description: "Blinded by maternal grief until Buddha's parable awakens her to the universal human condition."
      }
    ],
    hardWords: [
      { word: "Mortal", pronunciation: "MOR-tuhl", partOfSpeech: "noun/adjective", meaning: "A living human subject to death; fatal", contextSentence: "All mortals are destined to die, like ripe fruits.", synonyms: ["perishable", "earthly", "human"] },
      { word: "Lamentation", pronunciation: "lam-en-TAY-shun", partOfSpeech: "noun", meaning: "The passionate expression of grief or sorrow; weeping", contextSentence: "He who seeks peace should draw out the arrow of lamentation.", synonyms: ["mourning", "weeping", "keening"] }
    ],
    keyQuotes: [
      { quote: "The living are few, but the dead are many.", speaker: "The Householders", context: "The recurring truth heard by Kisa Gotami at every home." },
      { quote: "He who seeks peace should draw out the arrow of lamentation, and complaint, and grief.", speaker: "Gautama Buddha", context: "Core philosophical prescription for liberation." }
    ],
    examinerTraps: [
      {
        trapTitle: "Why did Buddha ask for mustard seeds specifically?",
        commonMistake: "Claiming mustard seeds held medicinal or magical properties.",
        correctCbseApproach: "Mustard seed was a common household staple in every home. The ingredient was trivial; the condition (a home free of death) was the educational device.",
        penaltyRisk: "Lose 2 marks on Buddha's pedagogical technique."
      }
    ],
        keywordsList: [
      "Gautama Buddha",
      "Prince Siddhartha",
      "Benares holy city",
      "Kisa Gotami",
      "mustard seeds from house with no death",
      "universal grief",
      "flickering city lights",
      "mortality and detachment",
      "peace of mind"
],
    idiomsAndPhrases: [
      {
            "phrase": "Flickering lights",
            "meaning": "A metaphor for the fleeting, fragile, and temporary nature of human life",
            "contextSentence": "The Buddha showed Kisa Gotami the flickering city lights that extinguished into darkness."
      },
      {
            "phrase": "Valley of desolation",
            "meaning": "A state of deep, inconsolable grief and emotional wasteland",
            "contextSentence": "Surrendering sorrow is the only way to climb out of the valley of desolation."
      }
],
boardQAs: [
      {
        id: "ff5-q1",
        question: "How did the Buddha make Kisa Gotami realize that death is common to all?",
        marks: 6,
        type: "LAQ",
        modelAnswer: "Instead of offering theological sermons, Gautama Buddha utilized a brilliant pedagogical exercise to awaken Kisa Gotami from her self-absorbed grief.\n\nHe promised to revive her dead child if she procured a handful of mustard seeds from a house where no loved one had ever died. Eager with hope, Kisa visited household after household. While everyone sympathized and offered seeds, each home recounted tragedies: 'The living are few, but the dead are many.'\n\nAt twilight, weary and empty-handed, she observed the city lights flickering and being extinguished into darkness. She recognized that mortal lives are just like those lights. The Buddha explained that just as ripe fruits are in danger of falling and earthen pots made by a potter are destined to break, so too is death the inescapable fate of all living beings. Her sorrow dissolved into universal acceptance.",
        keyKeywords: ["pedagogical exercise", "mustard seeds", "flickering city lights", "ripe fruits analogy", "inevitable mortality"],
        examinerRubricTip: "Must explain both the mustard seed search and the flickering lights metaphor."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT — PLAY: THE PROPOSAL
  // =========================================================================
  {
    id: "ff-ch6-the-proposal",
    title: "The Proposal",
    book: "First Flight (Prose)",
    type: "play",
    chapterNo: 9,
    author: "Anton Chekhov",
    genre: "Farce / One-Act Satirical Comedy",
    theme: "Petty bourgeois materialism, fragile pride, and absurd ego overshadowing romantic marriage.",
    funToddlerHook: {
      tagline: "The Hilarious Marriage Proposal where Everyone Argued about Grass and Dogs!",
      funnyStory: "Ivan Lomov puts on his fanciest tuxedo to propose marriage to his neighbor Natalya. Does he say 'I love you'? No! Within two minutes, they scream at each other over who owns a useless patch of swamp called Oxen Meadows! Lomov has heart palpitations and faints. Natalya's dad throws him out. Then dad mentions Lomov came to propose! Natalya panics: 'Bring him back!' Lomov limps back in. Do they kiss? NO! They start a NEW screaming fight over whose hunting dog is better: Squeezer or Guess! The dad forces them to kiss while screaming: 'Champagne! Champagne!'",
      ahaLesson: "Stubborn pride makes people fight over trivial nonsense, even when they want the same thing.",
      emoji: "💍"
    },
    deepExplanation: "Anton Chekhov's one-act farce satirizes the mercenary nature of aristocratic Russian country marriage. Ivan Vassilevitch Lomov, a hypochondriac 35-year-old landowner prone to palpitations, twitches, and sleep paralysis, arrives in formal evening attire at the manor of his neighbor, Stepan Stepanovitch Chubukov. Lomov intends to propose to Chubukov's 25-year-old daughter, Natalya Stepanovna, viewing marriage as a sensible socio-economic settlement rather than a romantic union.\n\nWhen Natalya enters, Lomov nervously prefaces his proposal with a rambling speech mentioning his family's hereditary land, including the 'Oxen Meadows'. Natalya instantly interrupts, furiously claiming the Oxen Meadows belong to the Chubukovs. A vehement squabble erupts: Lomov claims his aunt's grandmother gave temporary use of the meadows to Chubukov's peasants; Natalya insists their land extends to the Burnt Marsh. Chubukov enters and joins his daughter in insulting Lomov, calling his family drunkards and embezzlers. Overcome by palpitations, Lomov collapses and flees the house.\n\nChubukov then casually reveals that Lomov had come to propose marriage. Horrified, Natalya becomes hysterical, demanding her father bring Lomov back immediately. Lomov returns, physically trembling. Attempting to steer clear of land disputes, they begin discussing hunting dogs. Within moments, another thunderous argument explodes: Lomov asserts his dog 'Guess' is superior, while Natalya fiercely champions her dog 'Squeezer'. Lomov faints dead away on an armchair. Terrified that Lomov has died and the advantageous marriage is lost, Chubukov splashes water on his face, thrusts Natalya's hand into his, commands them to kiss, and shouts for champagne while father and daughter immediately resume screaming at Lomov.",
    bulletSummary: [
      "Hypochondriac landowner Ivan Lomov arrives in formal dress to propose to neighbor Natalya.",
      "Marriage is planned as a practical property alliance rather than love match.",
      "First argument: Heated clash over rightful ownership of a wedge of land called Oxen Meadows.",
      "Chubukov joins his daughter, exchanging vicious insults with Lomov, who flees in physical distress.",
      "Natalya learns Lomov came to propose and demands her father fetch him back immediately.",
      "Second argument: Violent quarrel over whose hunting dog is superior—Guess or Squeezer.",
      "Lomov collapses; Chubukov forcibly joins their hands in marriage while screaming for champagne."
    ],
    characters: [
      {
        name: "Ivan Vassilevitch Lomov",
        role: "Nervous Suitor",
        emoji: "🤵",
        traits: ["Hypochondriac", "Argumentative", "Pompous", "Anxious"],
        description: "Plagued by constant ailments, twitching eyebrows, and palpitations, yet stubbornly refuses to yield an inch on property.",
        keyQuote: "My heart is palpitating awfully... My foot is going to sleep!"
      },
      {
        name: "Natalya Stepanovna",
        role: "Chubukov's Daughter",
        emoji: "👰",
        traits: ["Obstinate", "Shrill", "House-proud", "Desperate to wed"],
        description: "An educated, excellent housekeeper who argues savagely, yet panics hysterically when she risks losing her suitor.",
        keyQuote: "Oxen Meadows are ours, and I shan't give them up, shan't give them up!"
      },
      {
        name: "Stepan Stepanovitch Chubukov",
        role: "Natalya's Father",
        emoji: "👴",
        traits: ["Opportunistic", "Volatile", "Dramatic", "Meddling"],
        description: "Welcomes the wealthy suitor eagerly, insults him brutally, and desperately forces the wedding through.",
        keyQuote: "What a burden, Lord, to be the father of a grown-up daughter!"
      }
    ],
    hardWords: [
      { word: "Hypochondriac", pronunciation: "hy-poh-KON-dree-ak", partOfSpeech: "noun", meaning: "A person who is abnormally anxious about their health", contextSentence: "Lomov was a chronic hypochondriac complaining of palpitations.", synonyms: ["health-anxious person"] },
      { word: "Farce", pronunciation: "FAHRS", partOfSpeech: "noun", meaning: "A comic dramatic work using buffoonery, horseplay, and absurd situations", contextSentence: "The play is a brilliant Russian farce exposing marital hypocrisy.", synonyms: ["slapstick", "burlesque", "satire"] }
    ],
    keyQuotes: [
      { quote: "What a burden, Lord, to be the father of a grown-up daughter!", speaker: "Chubukov", context: "Chubukov's exasperated exclamation amid domestic madness." }
    ],
    examinerTraps: [
      {
        trapTitle: "Why did Lomov want to marry Natalya?",
        commonMistake: "Saying he was madly in love with her.",
        correctCbseApproach: "Clarify it was a purely sensible marriage of convenience: he was 35 (critical age), needed a quiet regular life, and Natalya was a good housekeeper and not bad-looking.",
        penaltyRisk: "Lose 1.5 marks on character motive."
      }
    ],
        keywordsList: [
      "Anton Chekhov",
      "Ivan Vassilevitch Lomov",
      "Stepan Stepanovitch Chubukov",
      "Natalya Stepanovna",
      "Oxen Meadows dispute",
      "hunting dogs Guess vs Squeezer",
      "hypochondriac palpitations",
      "farce and matrimonial comedy",
      "materialistic marriage"
],
    idiomsAndPhrases: [
      {
            "phrase": "Make a mountain out of a molehill",
            "meaning": "To escalate a petty disagreement into an explosive feud",
            "contextSentence": "Lomov and Natalya made a mountain out of a molehill over the barren Oxen Meadows."
      },
      {
            "phrase": "Lose one's temper",
            "meaning": "To become furiously angry and shout insults",
            "contextSentence": "Both Chubukov and Lomov lost their tempers during the ridiculous dog argument."
      }
],
boardQAs: [
      {
        id: "ff6-q1",
        question: "How does Chekhov use the arguments over Oxen Meadows and the hunting dogs to satirize upper-class Russian society in 'The Proposal'?",
        marks: 6,
        type: "LAQ",
        modelAnswer: "Anton Chekhov's 'The Proposal' exposes the superficiality, materialistic greed, and fragile vanity of 19th-century Russian landed gentry.\n\nMarriage was regarded as an economic contract designed to consolidate wealth rather than a spiritual union. Both Lomov and Natalya recognize the mutual socio-economic advantage of marrying. Yet, their hyper-sensitive pride and petty possessiveness override all rationality.\n\nInstead of concluding the proposal, they explode into furious tantrums over 'Oxen Meadows'—a barren marshland of negligible worth. Even after the near-fatal shock of Lomov's collapse and Natalya's hysterical plea for his return, they instantly ignite another vitriolic clash over their hunting dogs, Guess and Squeezer.\n\nChubukov's desperate effort to marry them off while they continue screaming insults illustrates that wealth and social status had hollowed out genuine human decency, leaving behind ludicrous pettiness.",
        keyKeywords: ["economic contract", "materialistic greed", "fragile vanity", "landed gentry", "Oxen Meadows", "petty possessiveness"],
        examinerRubricTip: "Must connect the comic disputes to the underlying satire on bourgeois marriage."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT — POETRY: DUST OF SNOW
  // =========================================================================
  {
    id: "poem-dust-of-snow",
    title: "Dust of Snow",
    book: "First Flight (Poetry)",
    type: "poem",
    chapterNo: 1,
    author: "Robert Frost",
    genre: "Nature Lyric / Philosophical Epiphany",
    theme: "Nature's humble, unheralded moments possess profound healing power to uplift human sorrow.",
    funToddlerHook: {
      tagline: "A Crow, a Poisonous Tree, and a Magical Snow Shake!",
      funnyStory: "Imagine having the worst, grumpiest day ever. You sit under a dark hemlock tree (which is poisonous!). A black crow (which everyone thinks brings bad luck!) shakes a branch, and cold white snowflakes shower down on your head. Instead of getting mad, you laugh! The dark gloom in your heart melts away, and the rest of your day is saved!",
      ahaLesson: "Even things seen as 'unlucky' or small can bring joy and turn a bad day around.",
      emoji: "❄️"
    },
    deepExplanation: "Robert Frost challenges conventional poetic stereotypes in this eight-line masterpiece. While poets traditionally employ melodious songbirds (nightingales, skylarks) and glorious trees (pines, oaks) to evoke serenity, Frost deliberately chooses a crow (associated with omen and death) and a hemlock tree (associated with poison and mortality).\n\nThe poet walks beneath the tree in a despondent, depressive stupor, feeling his day has been utterly ruined ('held in rue'). Suddenly, a crow's movement shakes a delicate shower of fine snow particles onto him. This unexpected physical touch of nature shocks him out of his depressive introspection. His mood is instantaneously transformed; he experiences renewed vitality and gratitude, realizing that the remaining portion of his day has been rescued from self-indulgent despair.",
    bulletSummary: [
      "The poet is submerged in a sorrowful, despondent frame of mind.",
      "A crow sitting on a poisonous hemlock tree shakes fine snow down upon him.",
      "The gentle, unexpected dusting triggers an instantaneous shift in the poet's mood.",
      "Unconventional negative symbols (crow, hemlock) become instruments of healing and joy.",
      "Saves the remaining part of a day the poet had regretted ('rued')."
    ],
    centralIdeaPoem: "Nature possesses an instinctive, restorative alchemy. Minor, seemingly insignificant natural occurrences can dissolve deep psychological despondency and restore joy.",
    stanzaBreakdown: [
      {
        stanzaNumber: 1,
        originalLines: [
          "The way a crow",
          "Shook down on me",
          "The dust of snow",
          "From a hemlock tree"
        ],
        simpleParaphrase: "A crow perched on a poisonous hemlock tree shook a gentle dusting of cold snow particles down onto the poet walking underneath.",
        poeticDevices: [
          { device: "Rhyme Scheme", lineExample: "crow (a) / me (b) / snow (a) / tree (b)", explanation: "abab rhyme scheme unifying the quatrain." },
          { device: "Symbolism", lineExample: "crow & hemlock tree", explanation: "Traditionally represent sorrow, ill-omen, and death, yet here initiate joy." }
        ]
      },
      {
        stanzaNumber: 2,
        originalLines: [
          "Has given my heart",
          "A change of mood",
          "And saved some part",
          "Of a day I had rued."
        ],
        simpleParaphrase: "That unexpected cold touch transformed my gloomy mood, rescuing the remainder of a day I had spent mourning in regret.",
        poeticDevices: [
          { device: "Alliteration", lineExample: "Has given my heart / And saved some part", explanation: "Repetition of 'h' sound in 'Has/heart' and 's' sound in 'saved/some'." },
          { device: "Synecdoche", lineExample: "Has given my heart", explanation: "The 'heart' represents the poet's entire mental and emotional state." },
          { device: "Enjambment", lineExample: "Entire poem runs without end-line punctuation", explanation: "Creates continuous fluid movement mimicking snow falling." }
        ]
      }
    ],
    hardWords: [
      { word: "Hemlock", pronunciation: "HEM-lok", partOfSpeech: "noun", meaning: "A poisonous plant/tree with small white flowers", contextSentence: "The crow was perched on a hemlock tree.", synonyms: ["poisonous tree"] },
      { word: "Rued", pronunciation: "ROOD", partOfSpeech: "verb", meaning: "Bitterly regretted; wished undone", contextSentence: "He saved a part of the day he had rued.", synonyms: ["regretted", "deplored", "lamented"] }
    ],
    keyQuotes: [
      { quote: "Has given my heart a change of mood", speaker: "Poet", context: "The exact moment of emotional transformation." }
    ],
    examinerTraps: [
      {
        trapTitle: "Why did Frost choose a crow and hemlock tree?",
        commonMistake: "Saying they were the only birds available in winter.",
        correctCbseApproach: "Frost deliberately subverted traditional romantic nature poetry (which used beautiful birds like cuckoos) to demonstrate that even dark, inauspicious elements of nature carry healing grace.",
        penaltyRisk: "Lose 1.5 marks on literary analysis."
      }
    ],
        allPoeticDevicesGlossary: [
      {
            "device": "Alliteration",
            "easyDefinition": "Starting two or more nearby words with the exact same consonant sound.",
            "whereUsedInPoem": "Line 5 ('Has given my heart') and Line 7 ('And saved some part')",
            "explanation": "Repetition of /h/ sound in 'Has/heart' and /s/ sound in 'saved/some' adds melodic rhythm to the emotional turnaround."
      },
      {
            "device": "Symbolism",
            "easyDefinition": "Using an object, animal, or color to represent a much deeper abstract meaning.",
            "whereUsedInPoem": "Line 1 ('crow') and Line 4 ('hemlock tree')",
            "explanation": "The crow and poisonous hemlock typically symbolize death and gloom, but Frost inverts them into symbols of joy."
      },
      {
            "device": "Synecdoche",
            "easyDefinition": "Using a part of something to represent the entire whole.",
            "whereUsedInPoem": "Line 5 ('Has given my heart')",
            "explanation": "The 'heart' is a part of the body that represents Frost's entire mental and emotional state."
      },
      {
            "device": "Enjambment",
            "easyDefinition": "When a sentence runs into the next line without punctuation.",
            "whereUsedInPoem": "Lines 1 through 8 form one unbroken sentence",
            "explanation": "Maintains uninterrupted momentum mimicking falling snowflakes."
      },
      {
            "device": "Rhyme Scheme",
            "easyDefinition": "Pattern of rhymes created at the end of each poetic line.",
            "whereUsedInPoem": "Stanza 1 (abab) and Stanza 2 (cdcd)",
            "explanation": "crow/me/snow/tree and heart/mood/part/rued create a harmonious cadence."
      }
],
    keywordsList: [
      "hemlock tree",
      "crow",
      "dust of snow",
      "change of mood",
      "rued",
      "nature's healing alchemy",
      "subversion of stereotypes",
      "epiphany",
      "emotional rejuvenation",
      "symbol of renewal"
],
    idiomsAndPhrases: [
      {
            "phrase": "A change of mood",
            "meaning": "A sudden positive shift in emotional state or perspective",
            "contextSentence": "The unexpected dusting of snow caused a complete change of mood in Frost."
      },
      {
            "phrase": "Day I had rued",
            "meaning": "A day spent in sorrow, bitter regret, or mourning",
            "contextSentence": "The poet had spent his morning wallowing in depression, ruing his fate."
      }
],
boardQAs: [
      {
        id: "p1-q1",
        question: "What does the 'dust of snow' symbolize, and how did it change the poet's day?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The 'dust of snow' symbolizes nature's subtle, rejuvenating touch. The poet was experiencing a gloomy, sorrowful day that he bitterly regretted ('rued'). The sudden dusting of crisp snow shaken by a crow broke his melancholic trance, rejuvenating his spirit and saving the rest of his day from despair.",
        keyKeywords: ["rejuvenating touch", "subtle nature", "melancholic trance", "saved from rue", "symbol of renewal"],
        examinerRubricTip: "Mention the emotional transition from regret ('rued') to rejuvenation."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT — POETRY: FIRE AND ICE
  // =========================================================================
  {
    id: "poem-fire-and-ice",
    title: "Fire and Ice",
    book: "First Flight (Poetry)",
    type: "poem",
    chapterNo: 2,
    author: "Robert Frost",
    genre: "Philosophical Epigram / Apocalyptic Lyric",
    theme: "Unchecked human passions (desire/lust) and icy intellectual malice (hatred/coldness) are equally capable of destroying civilization.",
    funToddlerHook: {
      tagline: "Will the World end in a Volcano of Greed or an Iceberg of Hate?",
      funnyStory: "Scientists argue: will Earth burn up in global fire or freeze into an ice age? The poet says: humans don't need asteroids to destroy the world! Our burning greed and uncontrollable desires (Fire) can burn everything down. And if that doesn't finish the job, our freezing cold hatred and uncaring cruelty (Ice) can freeze our hearts to death! Both are super-deadly.",
      ahaLesson: "Control your fiery greed and thaw your cold hatred, or they will destroy everything you love.",
      emoji: "🔥"
    },
    deepExplanation: "In this nine-line philosophical meditation, Robert Frost addresses the cosmological debate over the end of the world. He equates scientific apocalyptic theories with destructive human emotional vices.\n\nFrost identifies 'Fire' with uncontrolled human desire, lust, greed, and unbridled ambition. Drawing from his own life experience, he agrees with those who believe fiery passion will consume human civilization. However, should the world 'perish twice', Frost equates 'Ice' with hatred, cold indifference, rigidity, and lack of empathy. Hatred is silent, detached, and insidious—yet just as potent and lethal as violent fire. Frost warns that both vices, left unchecked, suffice to annihilate mankind.",
    bulletSummary: [
      "The poet considers two theories on the apocalypse: destruction by fire or by ice.",
      "Equates 'Fire' with desire, passion, greed, and burning ambition.",
      "Favors fire based on his personal experience of passionate human desires.",
      "Equates 'Ice' with hatred, cold indifference, insensitivity, and cruelty.",
      "Concludes that ice is equally powerful and sufficient to destroy the world a second time."
    ],
    centralIdeaPoem: "Extreme human vices are apocalyptically self-destructive. Fiery uncontrolled desires and icy cold hatred are equally catastrophic forces capable of extinguishing mankind.",
    stanzaBreakdown: [
      {
        stanzaNumber: 1,
        originalLines: [
          "Some say the world will end in fire,",
          "Some say in ice.",
          "From what I’ve tasted of desire",
          "I hold with those who favor fire."
        ],
        simpleParaphrase: "Some believe the world will be consumed by fire, while others say ice. Experiencing human desires, I align with those who believe fire will bring the end.",
        poeticDevices: [
          { device: "Anaphora", lineExample: "Some say the world... / Some say in ice.", explanation: "Repetition of 'Some say' at the start of consecutive lines." },
          { device: "Metaphor", lineExample: "Fire = burning desire / greed", explanation: "Equating physical fire with psychological lust and ambition." },
          { device: "Alliteration", lineExample: "favor fire / Some say", explanation: "Repetition of 'f' and 's' sounds." }
        ]
      },
      {
        stanzaNumber: 2,
        originalLines: [
          "But if it had to perish twice,",
          "I think I know enough of hate",
          "To say that for destruction ice",
          "Is also great",
          "And would suffice."
        ],
        simpleParaphrase: "However, if the earth were to die twice, I know enough about cold hatred to state that ice is equally powerful and quite sufficient for total ruin.",
        poeticDevices: [
          { device: "Metaphor", lineExample: "Ice = cold hatred / indifference", explanation: "Comparing physical freezing ice to emotional numbness and callousness." },
          { device: "Understatement", lineExample: "Is also great / And would suffice", explanation: "A dry, ironic phrasing stating that hate is quiet but completely lethal." }
        ]
      }
    ],
    hardWords: [
      { word: "Perish", pronunciation: "PAIR-ish", partOfSpeech: "verb", meaning: "Die, especially in a violent or sudden manner; be destroyed", contextSentence: "If the earth had to perish twice, ice would suffice.", synonyms: ["expire", "vanish", "decay"] },
      { word: "Suffice", pronunciation: "suh-FYS", partOfSpeech: "verb", meaning: "Be enough or adequate", contextSentence: "Cold hatred would easily suffice to end life.", synonyms: ["be adequate", "serve", "satisfy"] }
    ],
    keyQuotes: [
      { quote: "To say that for destruction ice is also great and would suffice.", speaker: "Poet", context: "Chilling conclusion on the potency of hatred." }
    ],
    examinerTraps: [
      {
        trapTitle: "What do 'Fire' and 'Ice' symbolize?",
        commonMistake: "Writing literal explanations about sun heat and glaciers.",
        correctCbseApproach: "Fire symbolizes desire, greed, lust, and uncontrolled passion. Ice symbolizes cold hatred, indifference, malice, and cruelty.",
        penaltyRisk: "Loss of 2 marks on board symbol identification."
      }
    ],
        allPoeticDevicesGlossary: [
      {
            "device": "Extended Metaphor",
            "easyDefinition": "A comparison continuing throughout the whole poem.",
            "whereUsedInPoem": "Lines 1-9 ('Fire' = desire/greed; 'Ice' = hatred/coldness)",
            "explanation": "Frost treats fire as uncontrolled passion and ice as cold, detached hatred."
      },
      {
            "device": "Anaphora",
            "easyDefinition": "Repeating the same word or phrase at the start of consecutive lines.",
            "whereUsedInPoem": "Lines 1 & 2 ('Some say the world will end in fire / Some say in ice')",
            "explanation": "Contrasts the two prevailing scientific and philosophical viewpoints."
      },
      {
            "device": "Alliteration",
            "easyDefinition": "Repeating starting consonant sounds in words close together.",
            "whereUsedInPoem": "Line 1 ('Some say') and Line 4 ('favor fire')",
            "explanation": "Crisp epigrammatic sound."
      },
      {
            "device": "Personification",
            "easyDefinition": "Endowing natural forces with human willpower.",
            "whereUsedInPoem": "Lines 6-9 ('fire' and 'ice' as destroyers)",
            "explanation": "Fire and ice are personified as capable of ending civilization."
      }
],
    keywordsList: [
      "fire",
      "ice",
      "desire",
      "hatred",
      "destruction",
      "apocalyptic",
      "insensitivity",
      "rigidity",
      "coldness",
      "human passions"
],
    idiomsAndPhrases: [
      {
            "phrase": "Hold with someone",
            "meaning": "To agree with or support an opinion",
            "contextSentence": "Frost states that from what he has tasted of desire, he holds with those who favor fire."
      },
      {
            "phrase": "Taste of desire",
            "meaning": "To have personal experience of burning human passion",
            "contextSentence": "Having tasted of desire, the poet understands its violently destructive power."
      }
],
boardQAs: [
      {
        id: "p2-q1",
        question: "How does Robert Frost highlight the destructive power of human emotions in 'Fire and Ice'?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Frost uses Fire and Ice as metaphors for catastrophic human vices. 'Fire' embodies uncontrolled desires, burning greed, and violent ambition that incinerate relationships and societies. 'Ice' represents cold hatred, emotional numbness, and callous indifference. Frost warns that both fiery passions and frozen malice possess equal capacity to annihilate civilization.",
        keyKeywords: ["metaphor", "fire = desire/greed", "ice = hatred/indifference", "annihilate civilization", "destructive capacity"],
        examinerRubricTip: "Must match each symbol to its specific psychological vice."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT — POETRY: A TIGER IN THE ZOO
  // =========================================================================
  {
    id: "poem-tiger-in-zoo",
    title: "A Tiger in the Zoo",
    book: "First Flight (Poetry)",
    type: "poem",
    chapterNo: 3,
    author: "Leslie Norris",
    genre: "Animal Lyric / Ecological Protest",
    theme: "The cruelty of animal captivity versus the majestic glory of wildlife in its natural habitat.",
    funToddlerHook: {
      tagline: "The King of the Jungle trapped in a Concrete Box!",
      funnyStory: "Imagine being a majestic, striped tiger born to run free in tall green grass, hunt plump deer near waterholes, and roar at the edge of the jungle. Instead, humans lock you in a cement cage with steel bars! Visitors gawk and yell, but you ignore them. At night, you stare at the brilliant stars with your brilliant eyes, dreaming of the wild.",
      ahaLesson: "Every wild creature deserves freedom in its natural home. Cages break noble spirits.",
      emoji: "🐅"
    },
    deepExplanation: "Leslie Norris contrasts the claustrophobic agony of a majestic tiger locked in a concrete zoo cage with its natural grandeur in the wild jungle.\n\nIn the cage, the tiger stalks with quiet velvet pads, imprisoned by concrete walls and iron bars. His fury is suppressed into 'quiet rage'. Norris contrasts this with what the tiger *should* be doing: lurking silently in shadow, sliding through tall savannah grass near water bodies to ambush plump deer, or prowling around jungle hamlets, terrorizing villagers by baring white fangs and claws.\n\nInstead, in captivity, his immense strength is imprisoned behind bars. He ignores insensitive zoo visitors, pacing the limited length of his cage. At night, hearing the sirens of patrolling cars, he stares into the heavens with his brilliant, sorrowful eyes at the brilliant, untamed stars.",
    bulletSummary: [
      "Contrasts the tiger's confined existence in a zoo cage with his natural life in the wild.",
      "In the cage: walks with quiet, velvety steps, harboring suppressed 'quiet rage'.",
      "In the wild: lurks in shadows near water pools to hunt plump deer.",
      "Terrorizes jungle border villages by snarling and flashing white fangs.",
      "In the zoo: power locked behind concrete and bars, ignoring uncaring tourists.",
      "At night, listens to patrolling cars and gazes wistfully at brilliant stars."
    ],
    centralIdeaPoem: "Wild creatures belong in their natural habitats. Caging animals for human amusement is cruel, unnatural, and crushes their noble dignity.",
    stanzaBreakdown: [
      {
        stanzaNumber: 1,
        originalLines: [
          "He stalks in his vivid stripes",
          "The few steps of his cage,",
          "On pads of velvet quiet,",
          "In his quiet rage."
        ],
        simpleParaphrase: "The vividly striped tiger paces the few confined steps of his cage on soft velvet paws, burning with helpless suppressed anger.",
        poeticDevices: [
          { device: "Oxymoron", lineExample: "quiet rage", explanation: "Contradictory pairing: rage is violent, yet here it is silently suppressed." },
          { device: "Metaphor", lineExample: "pads of velvet quiet", explanation: "Comparing the soft underside of paws to velvet fabric." }
        ]
      },
      {
        stanzaNumber: 2,
        originalLines: [
          "He should be lurking in shadow,",
          "Sliding through long grass",
          "Near the water hole",
          "Where plump deer pass."
        ],
        simpleParaphrase: "He ought to be hiding in the wild jungle shadows, creeping silently through tall grasses near a waterhole to hunt healthy deer.",
        poeticDevices: [
          { device: "Alliteration", lineExample: "plump deer pass", explanation: "Repetition of 'p' sound." },
          { device: "Imagery", lineExample: "lurking in shadow, long grass", explanation: "Evokes the predatory instinct of wild hunting." }
        ]
      }
    ],
    hardWords: [
      { word: "Lurking", pronunciation: "LURK-ing", partOfSpeech: "verb", meaning: "Remaining hidden so as to wait in ambush for someone or something", contextSentence: "He should be lurking in the shadow of tall grass.", synonyms: ["skulking", "prowling", "hiding"] },
      { word: "Snarling", pronunciation: "SNARL-ing", partOfSpeech: "verb", meaning: "Making an aggressive growl with bared teeth", contextSentence: "He should be snarling around houses at the jungle's edge.", synonyms: ["growling", "snapping"] }
    ],
    keyQuotes: [
      { quote: "On pads of velvet quiet, In his quiet rage.", speaker: "Leslie Norris", context: "Capturing the tiger's trapped dignity." }
    ],
    examinerTraps: [
      {
        trapTitle: "Explain the oxymoron 'quiet rage'.",
        commonMistake: "Simply writing that the tiger was angry.",
        correctCbseApproach: "Explain the oxymoron: rage is naturally loud and ferocious, but behind bars the tiger is powerless, so his fury is constrained into silent, helpless resentment.",
        penaltyRisk: "Lose 1 mark on poetic device questions."
      }
    ],
        allPoeticDevicesGlossary: [
      {
            "device": "Oxymoron",
            "easyDefinition": "Placing two contradictory, opposite words side-by-side.",
            "whereUsedInPoem": "Stanza 1, Line 4 ('quiet rage')",
            "explanation": "'Rage' is normally loud and violent, but here it is 'quiet' because the imprisoned tiger is powerless to act."
      },
      {
            "device": "Metaphor",
            "easyDefinition": "Directly comparing two different things without 'like' or 'as'.",
            "whereUsedInPoem": "Stanza 1, Line 3 ('pads of velvet quiet')",
            "explanation": "The soft padded soles of the paws are compared directly to silent velvet."
      },
      {
            "device": "Personification",
            "easyDefinition": "Referring to an animal as a human being.",
            "whereUsedInPoem": "Stanza 1, Line 1 ('He stalks in his vivid stripes') and throughout",
            "explanation": "The poet repeatedly refers to the tiger as 'He' and 'his' rather than 'it'."
      },
      {
            "device": "Alliteration",
            "easyDefinition": "Repeating starting consonant sounds.",
            "whereUsedInPoem": "Stanza 2 ('plump pass') and Stanza 4 ('behind bars')",
            "explanation": "Emphasizes food in the wild versus iron bars in captivity."
      },
      {
            "device": "Onomatopoeia",
            "easyDefinition": "Words that imitate natural sounds.",
            "whereUsedInPoem": "Stanza 3, Line 1 ('snarling')",
            "explanation": "Mimics the menacing guttural growl of the wild beast."
      }
],
    keywordsList: [
      "vivid stripes",
      "pads of velvet quiet",
      "quiet rage",
      "snarling",
      "concrete cell",
      "lurking in shadow",
      "plump deer",
      "brilliant eyes",
      "captivity vs freedom",
      "loss of natural habitat"
],
    idiomsAndPhrases: [
      {
            "phrase": "Quiet rage",
            "meaning": "Suppressed, helpless anger that cannot be openly expressed due to confinement",
            "contextSentence": "Unable to break the iron bars of his cage, the majestic tiger burns in quiet rage."
      },
      {
            "phrase": "Lurking in shadow",
            "meaning": "Waiting stealthily and invisibly in darkness to ambush prey",
            "contextSentence": "In the wild, the tiger would be lurking in shadow near the water hole."
      }
],
boardQAs: [
      {
        id: "p3-q1",
        question: "How does the poet contrast the tiger's life in a cage with that in the forest?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "In the cage, the tiger is confined to a few paces on velvet pads, his strength locked behind concrete bars while he suppresses his 'quiet rage' and ignores tourists. In the forest, he is free and fearsome, lurking in tall grass near waterholes to hunt plump deer and baring fangs to assert his wild sovereignty.",
        keyKeywords: ["confinement vs freedom", "quiet rage", "locked strength", "hunting plump deer", "wild sovereignty"],
        examinerRubricTip: "Must provide direct contrast points between cage and forest."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT — POETRY: THE BALL POEM
  // =========================================================================
  {
    id: "poem-ball-poem",
    title: "The Ball Poem",
    book: "First Flight (Poetry)",
    type: "poem",
    chapterNo: 5,
    author: "John Berryman",
    genre: "Philosophical Elegy / Coming-of-Age Lyric",
    theme: "Loss is an inevitable part of human existence; growing up requires mastering the epistemology of grief.",
    funToddlerHook: {
      tagline: "The Little Boy who lost his Ball and learned How Life Works!",
      funnyStory: "A little boy bounces his favorite rubber ball near the harbor. Bounce, bounce... SPLASH! The ball rolls into the deep water and sinks away forever. Could we buy him a new ten-cent ball? Yes! But the boy stands frozen, trembling in tears. Why? Because that ball held all his childhood memories! For the first time in his life, he learns that in this world, things will be lost, and money can't buy back memories.",
      ahaLesson: "Everyone loses things they love. True strength is learning to stand up and carry on.",
      emoji: "⚽"
    },
    deepExplanation: "John Berryman observes a young boy playing with a rubber ball near a harbor. The ball accidentally slips, bounces happily down the street, and plunges into the dark water. The boy freezes in traumatic shock, staring rigidly down into the harbor where his childhood days seem to have vanished along with the ball.\n\nBerryman deliberately chooses not to intervene, nor will he offer a dime to purchase a replacement ball, noting that another ball is 'worthless'. For the first time in his existence, the child is experiencing 'first responsibility' in a materialistic world of possession. He is learning the 'epistemology of loss'—the profound truth that possessions and cherished moments will constantly be lost, and that money is external; it cannot purchase back emotional attachments or time. To mature into an adult, one must learn to endure grief, stand resilient, and face life.",
    bulletSummary: [
      "A young boy loses his bouncing ball into the deep harbor water.",
      "He stands rigid, trembling, staring into the water as childhood memories sink.",
      "The poet refuses to console him or buy another ball because money is external.",
      "The boy senses his first lesson in personal responsibility.",
      "Learns the 'epistemology of loss': how to stand up and survive after enduring deep loss."
    ],
    centralIdeaPoem: "Loss is an inescapable human reality. Maturing requires recognizing that material wealth cannot replace sentimental connections, and that surviving grief builds character.",
    stanzaBreakdown: [
      {
        stanzaNumber: 1,
        originalLines: [
          "What is the boy now, who has lost his ball,",
          "What, what is he to do? I saw it go",
          "Merrily bouncing, down the street, and then",
          "Merrily over — there it is in the water!"
        ],
        simpleParaphrase: "What will the boy do now that he has lost his ball? I watched it bounce cheerfully down the street and plunge into the harbor water.",
        poeticDevices: [
          { device: "Anaphora", lineExample: "What is the boy... / What, what is he to do?", explanation: "Repetition of 'What' emphasizing confusion and shock." },
          { device: "Personification", lineExample: "Merrily bouncing", explanation: "Attributing cheerful human emotion to the inanimate ball." }
        ]
      },
      {
        stanzaNumber: 2,
        originalLines: [
          "He is learning, well behind his desperate eyes,",
          "The epistemology of loss, how to stand up",
          "Knowing what every man must one day know",
          "And most know many days, how to stand up."
        ],
        simpleParaphrase: "Behind his sorrowful eyes, he is learning the philosophy and nature of loss—understanding how to endure grief and carry on, as every adult must.",
        poeticDevices: [
          { device: "Repetition", lineExample: "how to stand up", explanation: "Emphasizes the universal resilience needed to survive loss." }
        ]
      }
    ],
    hardWords: [
      { word: "Epistemology", pronunciation: "ih-pis-tuh-MOL-uh-jee", partOfSpeech: "noun", meaning: "The philosophical theory of knowledge, its nature and validation", contextSentence: "The boy learns the epistemology of loss.", synonyms: ["philosophy of understanding"] },
      { word: "Intrude", pronunciation: "in-TROOD", partOfSpeech: "verb", meaning: "Put oneself into a place or situation where one is unwelcome or uninvited", contextSentence: "I would not intrude on his grief.", synonyms: ["interfere", "encroach"] }
    ],
    keyQuotes: [
      { quote: "Money is external. He is learning, well behind his desperate eyes, The epistemology of loss...", speaker: "John Berryman", context: "The central philosophical realization of the poem." }
    ],
    examinerTraps: [
      {
        trapTitle: "Why does the poet say 'Money is external'?",
        commonMistake: "Saying the poet didn't have money to buy a ball.",
        correctCbseApproach: "Explain that money can buy physical objects, but it cannot purchase back the emotional attachment, memories, or innocence connected to the lost object.",
        penaltyRisk: "Lose 1.5 marks on theme interpretation."
      }
    ],
        allPoeticDevicesGlossary: [
      {
            "device": "Symbolism",
            "easyDefinition": "Using a physical object to represent an abstract emotional concept.",
            "whereUsedInPoem": "The 'ball' lost in the harbor",
            "explanation": "The ball symbolizes the boy's innocent, carefree childhood days."
      },
      {
            "device": "Anaphora",
            "easyDefinition": "Repeating the same word at the beginning of successive lines.",
            "whereUsedInPoem": "Lines 1-2 ('What is the boy... / What, what...') and Lines 3-4 ('Merrily bouncing... / Merrily over...')",
            "explanation": "Contrasts the boy's grief with the cheerful bounce of the toy."
      },
      {
            "device": "Alliteration",
            "easyDefinition": "Repeating starting consonant sounds.",
            "whereUsedInPoem": "Line 8 ('buys a ball back')",
            "explanation": "Chimes the impossibility of buying back lost memories."
      },
      {
            "device": "Asyndeton",
            "easyDefinition": "Omitting conjunctions between words for dramatic effect.",
            "whereUsedInPoem": "Line 9 ('A dime, another ball, is worthless')",
            "explanation": "Stresses the absolute irrelevance of monetary compensation."
      }
],
    keywordsList: [
      "loss",
      "epistemology of loss",
      "grief",
      "dime",
      "merrily bouncing",
      "harbour",
      "first responsibility",
      "world of possessions",
      "money is external",
      "resilience"
],
    idiomsAndPhrases: [
      {
            "phrase": "Epistemology of loss",
            "meaning": "Understanding the true philosophical nature and acceptance of losing things in life",
            "contextSentence": "Through the loss of his toy ball, the boy learns the epistemology of loss."
      },
      {
            "phrase": "Money is external",
            "meaning": "Currency can purchase physical objects but cannot replace memories or emotional attachments",
            "contextSentence": "John Berryman stresses that money is external; it cannot buy back childhood innocence."
      }
],
boardQAs: [
      {
        id: "p4-q1",
        question: "Why does the poet choose not to offer the boy money for a new ball?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The poet refrains from offering money because purchasing a new ball would be futile. The loss is not merely material; the ball represents the boy's innocent childhood memories. Giving him money would disrupt his vital psychological transition: learning his first responsibility and the epistemology of loss—how to stand resilient when cherished things are lost.",
        keyKeywords: ["futile substitution", "sentimental attachment", "first responsibility", "epistemology of loss", "resilience"],
        examinerRubricTip: "Must mention both the sentimental nature of the loss and the boy's psychological growth."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT — POETRY: AMANDA!
  // =========================================================================
  {
    id: "poem-amanda",
    title: "Amanda!",
    book: "First Flight (Poetry)",
    type: "poem",
    chapterNo: 6,
    author: "Robin Klein",
    genre: "Adolescent Monologue / Fantasy Lyric",
    theme: "The friction between stifling parental nagging/socialization and a young girl's yearning for romantic freedom and autonomy.",
    funToddlerHook: {
      tagline: "The Girl who daydreamed of being a Mermaid, an Orphan, and Rapunzel!",
      funnyStory: "Mom: 'Amanda, don't bite your nails! Amanda, sit up straight! Amanda, clean your shoes!' Amanda's brain: 'I am a beautiful green mermaid swimming in the calm emerald sea... blissful and alone!' Mom: 'Amanda, did you finish your homework? Amanda, don't eat that chocolate!' Amanda's brain: 'I wish I were a lonely orphan roaming the dusty streets in bare feet! Silence is golden, freedom is sweet!'",
      ahaLesson: "Constant nagging doesn't create good habits; it drives children into quiet escapism.",
      emoji: "🧜‍♀️"
    },
    deepExplanation: "Robin Klein depicts the emotional tug-of-war between an over-controlling mother and her imaginative adolescent daughter, Amanda. Each instructional stanza of nagging parental commands is alternated with Amanda's silent, bracketed daydreams.\n\nThe parent relentlessly scolds Amanda for mundane social behaviors: biting nails, hunching shoulders, slouching, neglecting homework, leaving rooms untidy, and eating acne-triggering chocolate. In reaction to this perpetual surveillance, Amanda retreats into vivid solitary fantasies:\n1. She imagines herself as a solitary mermaid drifting blissfully in a tranquil, emerald-green ocean.\n2. She imagines herself as an orphan roaming quiet streets, creating patterns in the soft dust with her bare, silent feet—cherishing silence and sweet freedom.\n3. She imagines herself as Rapunzel residing in a high, peaceful tower, vowing never to let down her bright hair to allow intrusive visitors.\n\nThe poem concludes with the parent accusing Amanda of constant sulking and moodiness, oblivious to the fact that her own nagging suffocates the child's spirit.",
    bulletSummary: [
      "Alternates between adult nagging stanzas and Amanda's silent, bracketed daydream stanzas.",
      "The mother scolds Amanda for biting nails, slouching posture, untidy shoes, and acne.",
      "Amanda escapes into three solitary fantasies: Mermaid in an emerald sea, Orphan on quiet dusty streets, and Rapunzel in a tranquil tower.",
      "Amanda values silence ('silence is golden') and autonomous solitude ('freedom is sweet').",
      "The parent misinterprets Amanda's silent detachment as sulking and bad temper."
    ],
    centralIdeaPoem: "Excessive parental regimentation and constant scolding stifle a child's natural individuality, compelling them to seek solace in imaginary worlds of total solitude.",
    stanzaBreakdown: [
      {
        stanzaNumber: 1,
        originalLines: [
          "Don’t bite your nails, Amanda!",
          "Don’t hunch your shoulders, Amanda!",
          "Stop that slouching and sit up straight,",
          "Amanda!"
        ],
        simpleParaphrase: "The mother commands Amanda to stop biting her fingernails, avoid hunching her shoulders, and sit up with proper posture.",
        poeticDevices: [
          { device: "Alliteration", lineExample: "Stop that slouching and sit up straight", explanation: "Repetition of 's' sound." },
          { device: "Anaphora", lineExample: "Don't bite... / Don't hunch...", explanation: "Repetition of 'Don't' establishing authoritative nagging tone." }
        ]
      },
      {
        stanzaNumber: 2,
        originalLines: [
          "(There is a languid, emerald sea,",
          "where the sole inhabitant is me—",
          "a mermaid, drifting blissfully.)"
        ],
        simpleParaphrase: "Amanda retreats into her mind, imagining a calm, green ocean where she lives completely alone as a happy, drifting mermaid.",
        poeticDevices: [
          { device: "Metaphor / Allusion", lineExample: "a mermaid, drifting blissfully", explanation: "Allusion to mythological mermaid symbolizing freedom from human constraints." },
          { device: "Parenthesis", lineExample: "Entire stanza in brackets", explanation: "Denotes private interior consciousness versus external parental voice." }
        ]
      }
    ],
    hardWords: [
      { word: "Languid", pronunciation: "LANG-gwid", partOfSpeech: "adjective", meaning: "Relaxed, peaceful, moving slowly without energy", contextSentence: "There is a languid, emerald sea.", synonyms: ["tranquil", "leisurely", "unhurried"] },
      { word: "Acne", pronunciation: "AK-nee", partOfSpeech: "noun", meaning: "A skin condition characterized by red pimples", contextSentence: "Remember your acne, Amanda!", synonyms: ["pimples", "blemishes"] }
    ],
    keyQuotes: [
      { quote: "Silence is golden, the freedom is sweet.", speaker: "Amanda", context: "Amanda's celebration of inner peace away from nagging." }
    ],
    examinerTraps: [
      {
        trapTitle: "Why are Amanda's stanzas enclosed in brackets?",
        commonMistake: "Thinking they are stage directions or narrator comments.",
        correctCbseApproach: "Explain that brackets signify Amanda's private, internal daydream world—a psychological refuge from her mother's loud, external nagging.",
        penaltyRisk: "Lose 1 mark on structural technique."
      }
    ],
        allPoeticDevicesGlossary: [
      {
            "device": "Allusion",
            "easyDefinition": "A reference to a well-known mythical or literary character.",
            "whereUsedInPoem": "Stanza 2 ('Mermaid') and Stanza 6 ('Rapunzel')",
            "explanation": "Amanda imagines herself as a mermaid drifting in the sea and Rapunzel in a tranquil tower."
      },
      {
            "device": "Anaphora",
            "easyDefinition": "Repeating the same word at the beginning of commands.",
            "whereUsedInPoem": "Lines 1, 2 ('Don't bite... / Don't hunch...') and Lines 5, 6 ('Did you finish... / Did you tidy...')",
            "explanation": "Reflects the relentless barrage of parental nagging."
      },
      {
            "device": "Metaphor",
            "easyDefinition": "Comparing two unlike things directly.",
            "whereUsedInPoem": "Line 14 ('silence is golden, the freedom is sweet')",
            "explanation": "Compares silence to gold and freedom to sweet food."
      },
      {
            "device": "Repetition",
            "easyDefinition": "Repeating a word for emphasis.",
            "whereUsedInPoem": "The name 'Amanda!' at the end of stanzas",
            "explanation": "Highlights the persistent, scolding voice of the mother."
      }
],
    keywordsList: [
      "nagging",
      "freedom",
      "mermaid",
      "orphan",
      "Rapunzel",
      "sulking",
      "escapism",
      "imagination",
      "parental control",
      "tranquility"
],
    idiomsAndPhrases: [
      {
            "phrase": "Hunch your shoulders",
            "meaning": "To curve the back forward in poor posture",
            "contextSentence": "Amanda's mother constantly scolds her: 'Don't hunch your shoulders, Amanda!'"
      },
      {
            "phrase": "Sole inhabitant",
            "meaning": "The only living being residing in a space",
            "contextSentence": "In her fantasy, Amanda longs to be the sole inhabitant of a peaceful emerald sea."
      }
],
boardQAs: [
      {
        id: "p5-q1",
        question: "Why does Amanda wish to be an orphan or a mermaid? What does this reveal about her state of mind?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Amanda yearns to be a mermaid or an orphan because she craves uninterrupted freedom and silence. Tormented by her mother's relentless micro-management and scolding, she views an orphan's lonely roaming on dusty streets as preferable to her home. This reveals that she feels suffocated, alienated, and desperate for psychological autonomy.",
        keyKeywords: ["craves freedom and silence", "relentless micro-management", "suffocated", "psychological autonomy", "escape from nagging"],
        examinerRubricTip: "Must explain that her bizarre wish to be an orphan stems from craving silence, not hating her parents."
      }
    ],
    isPhase1Priority: true,
    isTestSeries1: false
  }
,

// =========================================================================
  // FIRST FLIGHT (PROSE) — TWO STORIES ABOUT FLYING (PART 1: HIS FIRST FLIGHT)
  // =========================================================================
  {
    id: "ff-ch3a-his-first-flight",
    title: "Two Stories About Flying — Part 1: His First Flight",
    book: "First Flight (Prose)",
    type: "prose",
    chapterNo: 3,
    author: "Liam O'Flaherty",
    genre: "Inspirational Allegory / Psychological Fiction",
    theme: "Overcoming deep-seated fear through the primal necessity of survival; discovering self-confidence and natural instincts.",
    funToddlerHook: {
      tagline: "The Scared Little Bird Who Had To Jump To Fly!",
      funnyStory: "Imagine sitting on a giant rocky balcony crying: 'Mommy, the ocean is too deep! If I jump, my wings will snap like twigs!' Meanwhile, your baby sister—whose wings are smaller than yours—is already doing joyful loop-de-loops! How did Mom fix it? She brought a yummy fish snack, held it JUST out of reach, and when the baby bird got so hungry he jumped to grab it—WHOOSH! His wings opened up automatically! He was flying!",
      ahaLesson: "You will never know what you are capable of doing until you take the leap. Fear disappears the moment action begins.",
      emoji: "🐣"
    },
    deepExplanation: "In 'His First Flight', Liam O'Flaherty masterfully depicts the psychology of fear, self-doubt, and the triumph of natural instinct. A young seagull is stranded alone on a cliff ledge over a terrifying 300-mile expanse of ocean. His two brothers and little sister have already flown away the previous day despite having shorter wings. The young bird is paralyzed by the conviction that his wings will never support his weight. His parents shrilly upbraid him, calling him a coward and threatening to let him starve unless he takes flight.\n\nFor twenty-four hours, the young seagull remains in solitary starvation. He watches his parents coaching his siblings in the aeronautics of flight—skimming the waves and diving for fish. He enviously witnesses his older brother catch his first herring and devour it on a rock while the parents cackle with proud approval. As the midday sun beats relentlessly on the scorched ledge, agonizing hunger maddens him. He pretends to fall asleep on one leg to elicit sympathy, but only his mother takes notice.\n\nHis mother employs brilliant psychological shock therapy. Tearing at a piece of fish at her feet, she scrapes each side of her beak against the rock—a sight that drives the ravenous chick nearly insane. She picks up the fish and flies toward the ledge. Just as the chick rushes forward with a joyous cry, she halts motionless in mid-air, holding the fish inches beyond his reach. Overpowered by visceral hunger, the young seagull lunges into the open void. A monstrous terror grips his heart for a single minute, but instantly his wings spread outward, the wind rushes against his breast feathers, and his wings slice through the air. In a joyous epiphany, he realizes he is no longer falling headlong. He cries 'Ga, ga, ga!' and soars upward. When his feet touch the green sea, he screams with renewed fright as his legs sink, but as soon as his belly touches the water, he floats effortlessly without sinking. His family circles around him, offering scraps of dog-fish, celebrating his maiden flight.",
    bulletSummary: [
      "The young seagull is stranded alone on the cliff ledge, paralyzed by fear of the vast sea beneath.",
      "His parents, brothers, and younger sister leave him behind, threatening starvation if he does not fly.",
      "He spends 24 hours alone, watching his older brother proudly catch and devour his first herring.",
      "Agonizing hunger maddens him; he watches his mother tearing fish and scraping her beak on the rock.",
      "The mother flies near with fish but deliberately hovers just beyond his beak's reach.",
      "Maddened by hunger, the young seagull dives into empty space; monstrous terror lasts only a minute.",
      "His wings instinctively deploy, wind rushes under his breast feathers, and he masters aerodynamic flight.",
      "He lands on the green sea; his belly touches the water and he floats triumphantly without sinking."
    ],
    characters: [
      {
        name: "The Young Seagull",
        role: "Timid protagonist discovering his wings",
        emoji: "🐣",
        traits: ["Insecure", "Hypersensitive", "Viscerally hungry", "Naturally resilient"],
        description: "Paralyzed by self-doubt until desperate hunger forces him to take the involuntary leap that unleashes his natural flying ability.",
        keyQuote: "He felt certain that his wings would never support him."
      },
      {
        name: "Mother Seagull",
        role: "Wise and firm avian matriarch",
        emoji: "🦅",
        traits: ["Perceptive", "Tough-loving", "Tactical", "Unyielding"],
        description: "Understands that coddling will lead to death; uses the bait of food to force her timid child into breaking the psychological barrier of fear.",
        keyQuote: "She was standing on a little high hump on the plateau, her white breast thrust forward."
      },
      {
        name: "Father & Siblings",
        role: "The active flock",
        emoji: "🕊️",
        traits: ["Competitive", "Skillful", "Supportive"],
        description: "His brothers and sister master skimming the waves and catching herring, demonstrating what the young seagull is missing."
      }
    ],
    hardWords: [
      { word: "Ledge", pronunciation: "LEJ", partOfSpeech: "noun", meaning: "A narrow horizontal shelf projecting from a cliff wall", contextSentence: "The young seagull was alone on his ledge.", synonyms: ["shelf", "sill", "ridge"] },
      { word: "Upbraiding", pronunciation: "up-BRAY-ding", partOfSpeech: "verb (participle)", meaning: "Scolding, severely reprimanding", contextSentence: "His parents flew around calling to him shrilly, upbraiding him.", synonyms: ["scolding", "reproaching", "chiding"] },
      { word: "Herring", pronunciation: "HAIR-ing", partOfSpeech: "noun", meaning: "A soft-finned valuable food fish found in coastal waters", contextSentence: "He had seen his older brother catch his first herring and devour it.", synonyms: ["pilchard", "sardine"] },
      { word: "Devour", pronunciation: "dih-VOW-er", partOfSpeech: "verb", meaning: "To eat food hungrily, greedily, or quickly", contextSentence: "His brother devoured the fish while standing on a rock.", synonyms: ["gobble", "gorge", "consume"] },
      { word: "Derisively", pronunciation: "dih-RYE-siv-lee", partOfSpeech: "adverb", meaning: "In a mocking, ridiculing, or scornful manner", contextSentence: "His mother uttered a joyous scream and flew derisively over him.", synonyms: ["mockingly", "scornfully", "tauntingly"] },
      { word: "Preening", pronunciation: "PREE-ning", partOfSpeech: "verb", meaning: "Cleaning and smoothing feathers with the beak", contextSentence: "His father was preening the feathers on his white back.", synonyms: ["grooming", "tidying", "primping"] },
      { word: "Whet", pronunciation: "WET", partOfSpeech: "verb", meaning: "To sharpen a tool or knife; to stimulate an appetite", contextSentence: "He loved to tear food that way, scraping his beak now and again to whet it.", synonyms: ["sharpen", "hone", "stimulate"] },
      { word: "Curvetting", pronunciation: "ker-VET-ing", partOfSpeech: "verb (participle)", meaning: "Leaping like a horse in an energetic, arching motion", contextSentence: "His siblings were curvetting and banking and soaring in the sky.", synonyms: ["leaping", "prancing", "capering"] }
    ],
    keyQuotes: [
      { quote: "He felt certain that his wings would never support him.", speaker: "Narrator", context: "The core psychological block keeping the young seagull trapped on the cliff." },
      { quote: "Maddened by hunger, he dived at the fish.", speaker: "Narrator", context: "The turning point when physiological desperation overcomes mortal fear." },
      { quote: "He was not falling headlong now. He was soaring gradually downwards and outwards.", speaker: "Narrator", context: "The moment of aerodynamic discovery and liberation." },
      { quote: "He dropped his legs to stand on the green sea. His legs sank into it. He screamed with fright... but his belly touched it and he sank no farther.", speaker: "Narrator", context: "Final mastery of aquatic buoyancy and resting on water." }
    ],
    examinerTraps: [
      {
        trapTitle: "Why did the mother halt motionless in mid-air?",
        commonMistake: "Writing that the mother was exhausted or hesitated out of fear.",
        correctCbseApproach: "Clarify that the mother's pause was deliberate psychological bait. She wanted the chick's hunger to compel an involuntary dive into empty space.",
        penaltyRisk: "Loss of 1 mark on author's narrative intent."
      },
      {
        trapTitle: "Did the young seagull learn flying through instruction or instinct?",
        commonMistake: "Writing that the parents held his wings and taught him step-by-step.",
        correctCbseApproach: "Emphasize that the parents demonstrated flying, but the chick's actual flight was an involuntary awakening of innate biological instinct triggered by hunger.",
        penaltyRisk: "Inaccurate thematic analysis in 6-mark question."
      }
    ],
    keywordsList: [
      "young seagull",
      "cliff ledge",
      "solitary starvation",
      "upbraiding and threats",
      "first herring devoured",
      "maddened by hunger",
      "mother's fish trick",
      "monstrous terror",
      "aerodynamic instinct",
      "floating on green sea"
    ],
    idiomsAndPhrases: [
      {
        phrase: "Take the plunge",
        meaning: "To take a daring, decisive, or risky step after hesitation",
        contextSentence: "Maddened by severe hunger, the young seagull finally took the plunge into the open air."
      },
      {
        phrase: "Heart stood still",
        meaning: "To be overcome by acute terror, shock, or overwhelming fear",
        contextSentence: "As he plummeted into the abyss, his heart stood still for a terrifying minute."
      },
      {
        phrase: "Tough love",
        meaning: "Promoting someone's welfare by enforcing discipline or refusing to coddle them",
        contextSentence: "The mother's refusal to feed the chick directly was an act of tough love that saved his life."
      }
    ],
    boardQAs: [
      {
        id: "ff3a-q1",
        question: "How did hunger act as the decisive catalyst that enabled the young seagull to overcome his paralyzing fear of flight?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The young seagull had been left in solitary starvation for twenty-four hours on the cliff ledge. When his mother approached carrying a piece of fish, she deliberately hovered just out of reach. Maddened by acute hunger, the chick forgot his mortal dread of the abyss and lunged forward. This involuntary dive into empty space forced his wings to spread naturally, transforming visceral desperation into aerodynamic flight.",
        keyKeywords: ["twenty-four hours starvation", "hovered out of reach", "maddened by hunger", "involuntary dive", "wings spread naturally"],
        examinerRubricTip: "Mention that hunger served as the physiological force superseding psychological paralysis."
      },
      {
        id: "ff3a-q2",
        question: "'They were beckoning to him, calling shrilly.' Why did the seagull's parents treat him with harsh threats rather than gentle comfort?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The parents recognized that gentle pampering would doom the young seagull to starvation on the barren ledge. By upbraiding him, flying away, and threatening to let him starve, they deliberately cut off all safety nets. This tough parental strategy was essential to push the hesitant bird beyond his comfort zone so he could discover his inherent biological capacity to fly and feed himself.",
        keyKeywords: ["tough parental strategy", "cut off safety nets", "beyond comfort zone", "inherent biological capacity", "doom of pampering"],
        examinerRubricTip: "Highlight the contrast between coddling and the necessity of tough love in nature."
      },
      {
        id: "ff3a-q3",
        question: "Fear is merely a mental barrier that dissolves once action begins. Justify this statement with reference to the young seagull's maiden flight in 'His First Flight'.",
        marks: 6,
        type: "LAQ",
        modelAnswer: "In 'His First Flight', Liam O'Flaherty illustrates that fear thrives on overthinking and hesitation, while decisive action instantly dissolves it.\n\nThe young seagull sat paralyzed on his ledge, convinced that his wings lacked the strength to sustain him over the deep sea. His younger siblings had flown effortlessly, yet he remained trapped by self-doubt. The turning point occurred when his mother exploited his starving condition by holding a piece of fish just beyond his grasp. Driven mad by hunger, he lunged into the void.\n\nFor a single monstrous minute, sheer terror paralyzed him, and his heart stood still. However, the moment physical action took over, his instinctual biology responded: his wings deployed automatically, wind rushed against his breast feathers, and he found himself banking, soaring, and skimming the waves. When he finally landed on the green water, his belly touched the surface and he floated safely.\n\nThe story conveys that psychological dread is often far greater than the actual reality of the challenge. Once an individual takes the plunge, innate capabilities awaken, turning anticipated disaster into triumphant flight.",
        keyKeywords: ["mental barrier", "overthinking and hesitation", "innate biological capability", "monstrous terror for one minute", "wings deployed automatically", "buoyancy on green water"],
        examinerRubricTip: "Structure answer into: 1. Psychological paralysis, 2. The catalyst of hunger, 3. The transformation during flight, 4. Universal life lesson."
      }
    ],
    isPhase1Priority: false,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT (PROSE) — TWO STORIES ABOUT FLYING (PART 2: THE BLACK AEROPLANE)
  // =========================================================================
  {
    id: "ff-ch3b-black-aeroplane",
    title: "Two Stories About Flying — Part 2: The Black Aeroplane",
    book: "First Flight (Prose)",
    type: "prose",
    chapterNo: 3,
    author: "Frederick Forsyth",
    genre: "Aviation Mystery / Psychological Thriller",
    theme: "Faith, perseverance, and the mysterious power of human courage and inner instinct during life-threatening crises.",
    funToddlerHook: {
      tagline: "The Ghost Plane with No Lights in the Midnight Storm!",
      funnyStory: "A pilot flying his cozy little vintage plane at 1:30 in the morning says: 'Yum! I cannot wait to get home to England and eat hot buttered toast and eggs for breakfast!' Suddenly—WHAM! Huge monster clouds as black as giant mountains swallow him! His compass spins like a crazy top, his radio goes BZZZ-dead, and his fuel tank is down to the last drop! Just then, a mysterious pitch-black plane with NO lights appears. The strange pilot waves: 'Follow me!' He guides him safely to the runway and vanishes! When he asks the tower lady, she laughs: 'Are you joking? Yours was the ONLY plane in the whole stormy sky tonight!' Who was the mysterious helper?",
      ahaLesson: "When technology fails and you are lost in the dark, your inner courage, sharp instincts, and faith will guide you through the storm.",
      emoji: "✈️"
    },
    deepExplanation: "In 'The Black Aeroplane', Frederick Forsyth presents a suspenseful mystery exploring the boundary between mortal peril and miraculous survival. An English aviator is piloting his old vintage Dakota DS 088 through a clear, starlit midnight sky from France back to England. At 1:30 AM, dreaming of a long family holiday and a warm English breakfast, he radios Paris Control and receives instructions to alter his bearing twelve degrees west.\n\nOne hundred and fifty kilometers outside Paris, the tranquil flight abruptly turns catastrophic. Enormous thunderclouds, resembling colossal black mountains, loom directly across his flight path. Because he is already running on his second and final fuel tank, he lacks sufficient reserves to detour around the perimeter of the storm north or south. Driven by the burning desire to be home for breakfast, he decides to take the mortal gamble and plunges straight into the tempest.\n\nInside the storm clouds, visibility drops to absolute zero; everything is pitch black. The Dakota leaps, twists, and shudders violently in the turbulent air. When he checks his instruments, the compass needle is spinning uselessly in circles—it is dead. Within moments, the radio and other navigation instruments fail completely. He is blind, disoriented, and lost with fuel sufficient for barely five to ten minutes of flying.\n\nAt the brink of despair, an enigmatic miracle manifests. Another aircraft—a sleek black aeroplane with no navigation lights—emerges alongside him. The pilot turns his face toward him, raises a gloved hand, and waves, gesturing clearly: 'Follow me.' Trusting this phantom guide like an obedient child, the narrator trails the black plane through the raging clouds for half an hour. Suddenly, the Dakota emerges from the clouds and sees two long straight lines of runway lights gleaming ahead. Overjoyed, he lands safely.\n\nWhen he rushes to the control center to express his heartfelt gratitude to the miraculous pilot who saved his life, the woman at the radar desk looks at him in utter bewilderment. Laughing in disbelief, she reveals that no other aircraft was airborne in the violent storm that night—his vintage Dakota was the solitary blip visible on the radar screen. The narrator is left in awe, contemplating the timeless enigma: was the black aeroplane a supernatural guardian angel, an act of divine intervention, or the supreme projection of his own subconscious survival instinct?",
    bulletSummary: [
      "Narrator flies vintage Dakota DS 088 over France toward England at 1:30 AM, dreaming of an English breakfast.",
      "Paris Control advises a 12-degree west bearing; 150 km past Paris, colossal storm clouds appear like black mountains.",
      "Low on fuel in his second tank, he gambles his life and flies straight into the black thunderclouds.",
      "Visibility becomes zero; the compass spins dead, all radio and flight instruments fail.",
      "A mysterious black aeroplane with no navigation lights appears; its pilot waves and gestures: 'Follow me.'",
      "Narrator follows the mysterious plane like an obedient child for 30 minutes through the turbulence.",
      "He safely spots two lines of runway lights and lands with only minutes of fuel remaining.",
      "Radar controller informs him that NO other plane flew tonight; the mysterious rescuer remains an unsolved enigma."
    ],
    characters: [
      {
        name: "The Dakota Pilot",
        role: "Narrator and homesick aviator",
        emoji: "👨‍✈️",
        traits: ["Nostalgic", "Adventurous", "Risk-taking", "Obedient in crisis", "Reflective"],
        description: "Yearns for a family holiday and English breakfast; takes an ill-advised risk entering the storm and experiences an unexplainable rescue.",
        keyQuote: "I'll take the risk, I thought, and flew that old Dakota straight into the storm."
      },
      {
        name: "The Mysterious Black Pilot",
        role: "The enigmatic aerial savior",
        emoji: "👤",
        traits: ["Calm", "Skillful", "Silent", "Phantom-like"],
        description: "Flies a plane with no lights in zero visibility; guides the lost aviator to safety and vanishes without a trace.",
        keyQuote: "He turned his aeroplane slowly to the north, in front of my Dakota, so that it would be easier for me to follow him."
      },
      {
        name: "Control Tower Woman",
        role: "Ground radar operator",
        emoji: "👩‍💼",
        traits: ["Professional", "Astounded", "Factual"],
        description: "Delivers the shocking climactic revelation that no other aircraft was registered on the radar screen."
      }
    ],
    hardWords: [
      { word: "Dakota DS 088", pronunciation: "duh-KOH-tuh", partOfSpeech: "noun", meaning: "A military and commercial transport aircraft model used in the mid-20th century", contextSentence: "I was flying my old Dakota aeroplane over France back to England.", synonyms: ["aircraft", "aeroplane", "transport plane"] },
      { word: "Compass", pronunciation: "KUM-pus", partOfSpeech: "noun", meaning: "An instrument for determining directions, typically by means of a freely turning magnetic needle", contextSentence: "The compass was turning round and round and round. It was dead.", synonyms: ["direction finder", "navigational aid"] },
      { word: "Twisting", pronunciation: "TWIS-ting", partOfSpeech: "verb (participle)", meaning: "Wrenching or turning violently out of shape or course", contextSentence: "The old aeroplane jumped and twisted in the air.", synonyms: ["spinning", "lurching", "gyrating"] },
      { word: "Runway", pronunciation: "RUN-way", partOfSpeech: "noun", meaning: "A level strip of smooth ground on an airfield on which aircraft take off and land", contextSentence: "I saw two straight lines of lights in front of me. It was a runway!", synonyms: ["airstrip", "landing strip", "tarmac"] },
      { word: "Obedient", pronunciation: "oh-BEE-dee-unt", partOfSpeech: "adjective", meaning: "Complying or willing to comply with orders or requests; submissive to authority", contextSentence: "I went behind the strange aeroplane like an obedient child.", synonyms: ["compliant", "dutiful", "biddable"] },
      { word: "Radar", pronunciation: "RAY-dar", partOfSpeech: "noun", meaning: "A system for detecting the presence, direction, distance, and speed of aircraft using radio waves", contextSentence: "Yours was the only one I could see on the radar.", synonyms: ["radio detection", "tracking screen"] }
    ],
    keyQuotes: [
      { quote: "I ought to go back to Paris, I thought, but I wanted to get home. I wanted that breakfast.", speaker: "Dakota Pilot", context: "The personal rationalization that leads to a near-fatal decision." },
      { quote: "He turned his aeroplane slowly to the north... 'Follow me,' he was saying.", speaker: "Narrator", context: "The arrival of the mysterious guide in the pitch-black clouds." },
      { quote: "There was no other aeroplane flying tonight. Yours was the only one I could see on the radar.", speaker: "Control Tower Woman", context: "The spine-chilling conclusion of the story." },
      { quote: "Who was the pilot on the strange black aeroplane, flying in the storm, without lights, without fuel?", speaker: "Narrator", context: "The closing unresolved question highlighting faith and the subconscious mind." }
    ],
    examinerTraps: [
      {
        trapTitle: "Was the black aeroplane real or an illusion?",
        commonMistake: "Asserting dogmatically that it was definitely a ghost or definitely an illusion.",
        correctCbseApproach: "Present both interpretations: 1. A psychological manifestation of the narrator's own subconscious survival skills and seasoned flying instincts; 2. An enigmatic, supernatural guardian angel or act of grace. The author deliberately leaves it open-ended.",
        penaltyRisk: "Loss of 1.5 marks on evaluative HOTS question."
      },
      {
        trapTitle: "Why did the narrator risk flying into the storm instead of turning back?",
        commonMistake: "Saying his fuel was already completely finished before the storm.",
        correctCbseApproach: "Clarify that he had enough fuel to turn back to Paris (150 km behind), but chose not to because of emotional longing for his family holiday and traditional English breakfast.",
        penaltyRisk: "Factual error resulting in 1-mark deduction in SAQ."
      }
    ],
    keywordsList: [
      "Dakota DS 088",
      "Paris Control 12 degrees west",
      "black storm mountains",
      "compass and radio dead",
      "mysterious black plane",
      "no lights on wings",
      "obedient child",
      "safe runway landing",
      "radar screen confirmation",
      "subconscious survival instinct"
    ],
    idiomsAndPhrases: [
      {
        phrase: "Out of the blue",
        meaning: "Completely unexpectedly, without any warning or anticipation",
        contextSentence: "Out of the blue, a strange black aeroplane appeared beside the lost Dakota."
      },
      {
        phrase: "At one's wits' end",
        meaning: "At the limit of one's mental resources; utterly bewildered and desperate",
        contextSentence: "When his compass died and fuel dropped to critical, the pilot was at his wits' end."
      },
      {
        phrase: "A narrow escape",
        meaning: "Barely avoiding a terrible catastrophe or mortal disaster",
        contextSentence: "Landing on the runway with empty fuel tanks was an incredible, narrow escape."
      }
    ],
    boardQAs: [
      {
        id: "ff3b-q1",
        question: "'I'll take the risk.' What was the risk the pilot took, and why did he take it?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The risk was flying his vintage Dakota DS 088 straight into colossal black thunderclouds 150 km past Paris without sufficient fuel to bypass the storm. He took this life-threatening gamble driven by intense homesickness—he desperately wanted to spend his holiday with his family and enjoy a warm, traditional English breakfast.",
        keyKeywords: ["flying straight into thunderclouds", "insufficient fuel reserves", "intense homesickness", "family holiday", "English breakfast"],
        examinerRubricTip: "Mention both elements: the physical risk (storm & fuel) and the emotional motive (breakfast & family)."
      },
      {
        id: "ff3b-q2",
        question: "Describe the eerie experience of the pilot inside the storm clouds before the arrival of the black aeroplane.",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Inside the clouds, visibility plunged into impenetrable blackness. The aeroplane tossed, jumped, and twisted violently in severe turbulence. When the narrator checked his instruments, the compass was spinning dead in circles, and the radio was completely unresponsive. Lost and isolated, he was left with fuel for barely five to ten minutes.",
        keyKeywords: ["impenetrable blackness", "tossed and twisted violently", "compass spinning dead", "radio unresponsive", "fuel for 5-10 minutes"],
        examinerRubricTip: "Detail the breakdown of navigational instruments and psychological terror."
      },
      {
        id: "ff3b-q3",
        question: "Who do you think helped the narrator reach safety? Discuss whether the black aeroplane was a supernatural miracle or the narrator's own subconscious instinct.",
        marks: 6,
        type: "LAQ",
        modelAnswer: "Frederick Forsyth deliberately leaves the identity of the mysterious rescuer open to interpretation, inviting both psychological and philosophical explanations.\n\nFrom a rational psychological perspective, the black aeroplane was a hallucination produced by the narrator's own subconscious mind. Facing imminent death, his seasoned aviation instincts, muscle memory, and survival adrenaline manifested as an external guide. His trained inner pilot directed him to maintain altitude, turn north, and track toward the nearest airstrip, even when conscious instruments had failed.\n\nAlternatively, from a philosophical or spiritual perspective, the black aeroplane can be seen as an act of divine providence or a guardian angel. The fact that the pilot flew an aircraft without lights in zero visibility, waved reassuringly, and vanished the moment safety was attained—leaving no trace on the radar—adds an undeniable supernatural aura.\n\nUltimately, whether viewed as inner human resilience or external divine grace, the story highlights that courage, faith, and composure in extreme crises can guide a person through the darkest tempests.",
        keyKeywords: ["subconscious mind", "seasoned aviation instincts", "survival adrenaline", "divine providence", "guardian angel", "solitary blip on radar"],
        examinerRubricTip: "Provide balanced dual perspective: subconscious survival instinct vs supernatural phenomenon."
      }
    ],
    isPhase1Priority: false,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT (PROSE) — GLIMPSES OF INDIA (PART 1: A BAKER FROM GOA)
  // =========================================================================
  {
    id: "ff-ch5a-baker-from-goa",
    title: "Glimpses of India — Part 1: A Baker from Goa",
    book: "First Flight (Prose)",
    type: "prose",
    chapterNo: 5,
    author: "Lucio Rodrigues",
    genre: "Nostalgic Cultural Memoir / Regional Travelogue",
    theme: "The preservation of Portuguese colonial heritage, the enduring warmth of village traditions, and the baker as an indispensable social institution.",
    funToddlerHook: {
      tagline: "Wake Up to the Bread Man's Musical Bamboo Jingle!",
      funnyStory: "In Goa, you do NOT wake up to an annoying screechy alarm clock! You wake up to 'Jhang-jhang! Thud-thud!'—the musical beat of the village baker's bamboo staff! Kids would jump out of bed without even washing their faces or brushing their teeth! Why? Because 'the tiger never brushed his teeth!' They dashed outside just to grab delicious, sweet, warm bread-bangles from his basket. The baker was everyone's best friend, and he looked so cheerful and chubby that people said he looked like a plump jackfruit!",
      ahaLesson: "True traditions and community warmth connect people far more deeply than modern conveniences ever could.",
      emoji: "🥖"
    },
    deepExplanation: "In 'A Baker from Goa', Lucio Rodrigues pens a charming and nostalgic tribute to the enduring Portuguese heritage of Goa, immortalized in the figure of the village baker, traditionally known as the 'pader'.\n\nThe elders of Goa often reminisced fondly about the good old Portuguese days and their legendary loaves of bread. While the original Portuguese rulers and eaters of loaves have departed, the creators of the loaves remain. The traditional mixers, molders, and bakers who carry on the profession still stoke the time-tested clay furnaces whose fires have never been extinguished. The third generation of these baking families continues the trade, announced by the musical 'thud and jingle' of the traditional bamboo staff.\n\nThe baker was an integral part of village childhood. He visited twice daily—first in the morning with a full basket, and again in the afternoon after emptying his load. For children, he was not merely a merchant, but a guide, friend, and companion. While elders bought loaves delivered to household maid-servants ('Paskine' or 'Bastine'), children rushed excitedly for the sweet bread-bangles known as 'kankon'. The children refused to brush their teeth or wash their mouths, playfully arguing: 'Why take the trouble of plucking the mango-leaf for a toothbrush? The tiger never brushed his teeth! Hot tea would wash and clean up everything so nicely!'\n\nIn Goan culture, the baker's presence was vital for every life milestone. Marriage gifts were deemed completely meaningless without the sweet bread known as 'bol'. No party or feast was complete without bread. A mother had to prepare savory sandwiches on her daughter's engagement, while Christmas and village festivals demanded 'cakes' and 'bolinhas' (coconut cookies). The baker's clay furnace was quite literally the beating heart of village social life.\n\nThe baker's attire evolved across eras. In the Portuguese period, bakers wore the 'kabai'—a peculiar single-piece long frock reaching down to the knees. In the author's youth, bakers wore shirts and trousers shorter than full-length pants but longer than half pants. Even today, anyone sporting knee-length three-quarter trousers invites the playful comment: 'He is dressed like a pader!'\n\nBaking was a lucrative and highly respected profession. The baker maintained accounts on the wall, scribbled in pencil, and collected his dues at the end of the month. A baker and his family never starved; their servants and household always looked happy and prosperous. Their open testimony was their 'plump physique', which resembled a round jackfruit—a physical sign of joyous abundance.",
    bulletSummary: [
      "Goan elders reminisce nostalgically about Portuguese rule and their famous, aromatic loaves of bread.",
      "The Portuguese left, but the mixers, molders, and time-tested clay furnaces continue burning.",
      "The village baker ('pader') announced his arrival twice daily with the musical jingle of his bamboo staff.",
      "Maid-servants collected family loaves, but children rushed eagerly for sweet bread-bangles ('kankon').",
      "Children skipped brushing teeth, cheekily claiming 'the tiger never brushed his teeth; hot tea cleans all'.",
      "Social essentials: sweet bread ('bol') for weddings, sandwiches for engagements, cakes and 'bolinhas' for Christmas.",
      "Bakers wore the peculiar 'kabai' frock, later replaced by knee-length three-quarter trousers.",
      "Baking was a prosperous trade; bakers had a plump, jackfruit-like physique as a symbol of abundance."
    ],
    characters: [
      {
        name: "The Pader (Village Baker)",
        role: "The iconic traditional artisan",
        emoji: "👨‍🍳",
        traits: ["Musical", "Prosperous", "Friendly", "Generous", "Plump"],
        description: "Carries forward centuries of Portuguese culinary tradition; essential for all village celebrations and a cherished friend to children.",
        keyQuote: "The baker made his musical entry on the scene with the 'jhang, jhang' sound of his specially made bamboo staff."
      },
      {
        name: "The Child Narrator",
        role: "Nostalgic chronicler of Goan heritage",
        emoji: "👦",
        traits: ["Observant", "Fond", "Carefree", "Culturally rooted"],
        description: "Recalls childhood mornings, peeping into the baker's basket and enjoying sweet bread-bangles without brushing his teeth."
      }
    ],
    hardWords: [
      { word: "Pader", pronunciation: "PAH-der", partOfSpeech: "noun", meaning: "The traditional Goan village baker", contextSentence: "Even today these bakers are known as pader in Goa.", synonyms: ["baker", "breadmaker"] },
      { word: "Reminiscing", pronunciation: "rem-uh-NIS-ing", partOfSpeech: "verb (participle)", meaning: "Indulging in enjoyable recollection of past events", contextSentence: "Our elders are often heard reminiscing nostalgically about those good old Portuguese days.", synonyms: ["recalling", "remembering", "recollecting"] },
      { word: "Kabai", pronunciation: "kuh-BYE", partOfSpeech: "noun", meaning: "A traditional single-piece long frock reaching down to the knees worn by Goan bakers", contextSentence: "The baker or bread-seller of those days had a peculiar dress known as the kabai.", synonyms: ["frock", "robe", "smock"] },
      { word: "Bol", pronunciation: "BOHL", partOfSpeech: "noun", meaning: "A sweet bread mandatory for Goan marriage gifts and celebrations", contextSentence: "Marriage gifts are meaningless without the sweet bread known as the bol.", synonyms: ["sweet bread", "wedding loaf"] },
      { word: "Bolinhas", pronunciation: "boh-LEEN-yuhs", partOfSpeech: "noun", meaning: "Traditional Goan coconut cookies prepared for Christmas and festivals", contextSentence: "Cakes and bolinhas are a must for Christmas as well as other festivals.", synonyms: ["coconut cookies", "festival biscuits"] },
      { word: "Plump", pronunciation: "PLUMP", partOfSpeech: "adjective", meaning: "Having a full, rounded, pleasantly fat shape", contextSentence: "Even today, any person with a jackfruit-like physical appearance is easily compared to a baker.", synonyms: ["chubby", "rotund", "stout"] }
    ],
    keyQuotes: [
      { quote: "Marriage gifts are meaningless without the sweet bread known as the bol, just as a party or a feast loses its charm without bread.", speaker: "Lucio Rodrigues", context: "Highlighting the indispensable social role of the baker." },
      { quote: "Why should we take the trouble of plucking the mango-leaf for the toothbrush? ... The tiger never brushed his teeth. Hot tea could wash and clean up everything nicely.", speaker: "Narrator", context: "Humorous childhood logic used to skip brushing teeth in the morning." },
      { quote: "Baking was indeed a profitable profession in the old days. The baker and his family never starved.", speaker: "Narrator", context: "Reflecting on the economic stability and prosperity of the baking community." },
      { quote: "Even today, anyone who wears a half-pant which reaches just below the knees invites the comment that he is dressed like a pader!", speaker: "Narrator", context: "The lasting cultural idiom that survived through Goan attire." }
    ],
    examinerTraps: [
      {
        trapTitle: "Who bought the loaves vs Who ate the bread-bangles?",
        commonMistake: "Writing that the children ate the daily loaves of bread.",
        correctCbseApproach: "Clarify that the daily loaves of bread were bought by the household maid-servants ('Paskine' or 'Bastine') for elders, while children specifically craved sweet bread-bangles ('kankon').",
        penaltyRisk: "1-mark loss in CBSE Board RTC extract question."
      },
      {
        trapTitle: "Evolution of the Baker's Dress: Kabai vs Half-pants",
        commonMistake: "Confusing the traditional Portuguese 'kabai' with the later knee-length trousers.",
        correctCbseApproach: "State clearly that the 'kabai' was an earlier single-piece long frock down to knees; during the author's youth, bakers wore shirts and knee-length half-pants longer than shorts but shorter than full trousers.",
        penaltyRisk: "Loss of 1 mark on historical details."
      }
    ],
    keywordsList: [
      "pader Goan baker",
      "Portuguese loaves legacy",
      "bamboo staff thud and jingle",
      "sweet bread-bangles kankon",
      "maid-servants Paskine Bastine",
      "wedding sweet bread bol",
      "Christmas bolinhas cookies",
      "peculiar frock kabai",
      "knee-length half pants",
      "plump jackfruit physique"
    ],
    idiomsAndPhrases: [
      {
        phrase: "Feast for the senses",
        meaning: "A delightful, rich sensory experience of aromas, sights, and tastes",
        contextSentence: "The fragrant aroma of fresh morning loaves was an exquisite feast for the senses."
      },
      {
        phrase: "Bread and butter",
        meaning: "A person's primary livelihood or foundational source of income",
        contextSentence: "Baking was not merely a trade; it was the proud bread and butter of generations."
      },
      {
        phrase: "Dressed like a pader",
        meaning: "A Goan popular idiom for someone wearing three-quarter pants below the knees",
        contextSentence: "Wearing trousers reaching just past his knees, Raj was teased for being dressed like a pader."
      }
    ],
    boardQAs: [
      {
        id: "ff5a-q1",
        question: "Why was the baker's furnace considered indispensable in a traditional Goan village?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The baker's furnace was essential because no social, religious, or domestic occasion could take place without bread. Marriage gifts were meaningless without the sweet bread called 'bol'; parties lost their charm without bread; mothers had to prepare sandwiches for their daughters' engagements; and Christmas and festivals required cakes and coconut cookies ('bolinhas').",
        keyKeywords: ["marriage gifts meaningless without bol", "sandwiches for engagements", "Christmas cakes and bolinhas", "indispensable social institution"],
        examinerRubricTip: "Mention all three specific bread types: bol, sandwiches, and bolinhas."
      },
      {
        id: "ff5a-q2",
        question: "How did the children react to the morning arrival of the baker in Goa?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "When the baker arrived with the musical thud and jingle of his bamboo staff, children woke up excitedly and ran to greet him. Ignoring morning hygiene like washing their faces or brushing their teeth, they pushed to peep into his basket, eager to choose their favorite sweet bread-bangles ('kankon') with a sugary crust.",
        keyKeywords: ["musical thud and jingle", "sweet bread-bangles kankon", "skipped brushing teeth", "tiger never brushed his teeth"],
        examinerRubricTip: "Emphasize the children's affection for kankon and their playful attitude toward brushing."
      },
      {
        id: "ff5a-q3",
        question: "Give a pen-picture of a Goan village baker. Why was baking considered a profitable profession?",
        marks: 6,
        type: "LAQ",
        modelAnswer: "In traditional Goan society, the baker ('pader') was a cherished and prosperous figure who preserved the culinary legacy of the Portuguese.\n\nHe made his grand entry twice a day, heralding his arrival with the rhythmic thud and jangle of his bamboo pole. Friendly and good-humored, he greeted the mistress of the house and allowed children to peep into his fragrant basket. Historically, bakers wore the 'kabai'—a distinctive single-piece long frock—which later transitioned into shirts and knee-length three-quarter trousers.\n\nBaking was an exceedingly lucrative trade. Daily bread was a staple food for elders and youngsters alike, while festive occasions demanded huge quantities of sweet breads like 'bol', cakes, and 'bolinhas'. The baker recorded accounts on the wall in pencil and collected bills monthly. A baker and his family never starved; their servants and family members always appeared happy, well-fed, and prosperous. Their contented, plump physique—humorously compared to a jackfruit—stood as open testimony to their affluent, comfortable livelihood.",
        keyKeywords: ["culinary legacy of Portuguese", "musical bamboo entry", "kabai to knee-length trousers", "staple food and festive treats", "accounts scribbled on wall", "plump jackfruit physique"],
        examinerRubricTip: "Cover: 1. Appearance & attire, 2. Daily routine & bamboo sound, 3. Financial prosperity & jackfruit analogy."
      }
    ],
    isPhase1Priority: false,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT (PROSE) — GLIMPSES OF INDIA (PART 2: COORG)
  // =========================================================================
  {
    id: "ff-ch5b-coorg",
    title: "Glimpses of India — Part 2: Coorg (Kodagu)",
    book: "First Flight (Prose)",
    type: "prose",
    chapterNo: 5,
    author: "Lokesh Abrol",
    genre: "Regional Travelogue / Geographic & Martial Portrait",
    theme: "The breathtaking natural splendor, fierce martial heritage, and distinctive cultural traditions of Coorg.",
    funToddlerHook: {
      tagline: "The Land of Coffee, Brave Warriors, and Mischievous Elephants!",
      funnyStory: "Coorg is so pretty that people say God dropped a little slice of heaven right into South India! It smells like rich coffee everywhere! The people who live there are super-brave warriors whose soldiers won the highest army medals. They wear cool long black coats with gold belts like ancient Arab princes. And the animals have a blast: giant river fish jump out of the water, squirrels throw fruit into the river just to hear the big SPLASH, and elephants lay down on their sides so their mahouts can scrub them like huge bubbly rocks!",
      ahaLesson: "Bravery and gentleness can live side by side. Respect nature, and take pride in your heritage.",
      emoji: "☕"
    },
    deepExplanation: "In 'Coorg', Lokesh Abrol captures the enchanting spirit of Kodagu (Coorg), the smallest district of Karnataka, located midway between Mysore and the coastal city of Mangalore. The author metaphorically describes it as 'a piece of heaven drifted from the kingdom of God'.\n\nCoorg is a lush paradise of rolling emerald hills, evergreen rainforests covering over thirty percent of the district, and sprawling coffee plantations sheltered beneath tall tree canopies. Stately colonial bungalows nestle under prime forest canopies. The ideal tourist season spans from September to March, when monsoon showers abate, the weather is delightful, and the air breathes the invigorating aroma of pure coffee.\n\nThe people of Coorg are fiercely independent, martial, and hospitable. Their origin is traced back to two fascinating traditions: Greek descent or Arab descent. According to the Greek tradition, a detachment of Alexander the Great's army moved south along the coast. When return became impractical, they settled permanently in Coorg, intermarrying with the native population. Their martial traditions, religious rites, and marriage customs remain distinctly independent from mainstream Hindu rites. The theory of Arab origin finds support in their traditional attire: the 'kuppia'—a magnificent long black coat with an intricately embroidered waist-belt, which closely resembles the 'kuffia' worn by Arabs and Kurds.\n\nThe Kodavus are celebrated for their unmatched valor and warm hospitality. The Coorg Regiment is one of the most decorated in the Indian Army, having earned numerous gallantry medals. General K.M. Cariappa, the very first Commander-in-Chief of the Indian Army, was a proud Coorgi. Furthermore, Kodavus are the only citizens in India legally permitted to carry firearms without a license—a testament to their centuries of trust and martial discipline.\n\nCoorg's ecology is vibrant and diverse. The sacred River Kaveri draws its pristine water from the hills and rainforests of Coorg. The river teems with 'Mahaseer'—a massive freshwater sport fish. Kingfishers dive for catch; Malabar squirrels and langurs cheekily drop half-eaten fruit from branches to watch the splash and ripple effect in clear waters; while wild elephants luxuriate in being scrubbed by their mahouts on the riverbanks. For adventure enthusiasts, Coorg offers river rafting, canoeing, rappelling, rock climbing, and scenic trekking paths.\n\nA climb to the Brahmagiri hills rewards trekkers with a breathtaking panoramic view of the misty landscape. Walking across the rope bridge leads to the serene sixty-four-acre island of Nisargadhama. Nearby at Bylakuppe lies India's largest Tibetan Buddhist settlement, where monks in vibrant red, ochre, and yellow robes add a profound aura of spiritual peace to this martial wonderland.",
    bulletSummary: [
      "Coorg (Kodagu) is Karnataka's smallest district, described as a piece of heaven drifted from God's kingdom.",
      "Covered by 30% evergreen rainforests, coffee estates, and colonial bungalows; ideal visit from Sept to March.",
      "People are fiercely independent; traced to Greek descent (Alexander's army) or Arab descent.",
      "Traditional attire is the 'kuppia' (black coat with embroidered belt), resembling the Arab 'kuffia'.",
      "Renowned for valor: Coorg Regiment is among the most decorated; General Cariappa was a Coorgi.",
      "Kodavus are the ONLY Indian citizens permitted to carry firearms without a license.",
      "River Kaveri hosts Mahaseer fish; kingfishers, langurs, squirrels, and elephants thrive in the waters.",
      "Brahmagiri hills offer panoramic views, rope bridge to Nisargadhama island, and Tibetan monks at Bylakuppe."
    ],
    characters: [
      {
        name: "The Kodavus (Coorgis)",
        role: "Fiercely martial and hospitable community",
        emoji: "⚔️",
        traits: ["Martial", "Courageous", "Hospitable", "Culturally distinct"],
        description: "Brave inhabitants of Greek or Arab lineage who wear the traditional kuppia coat and possess a decorated military heritage.",
        keyQuote: "The fiercely independent people of Coorg are possibly of Greek or Arabic descent."
      },
      {
        name: "General K.M. Cariappa",
        role: "First Commander-in-Chief of Indian Army",
        emoji: "🎖️",
        traits: ["Decorated", "Historic", "Disciplined", "Pioneering"],
        description: "A proud son of Coorg who led the armed forces of independent India as its first Indian Commander-in-Chief."
      }
    ],
    hardWords: [
      { word: "Martial", pronunciation: "MAHR-shul", partOfSpeech: "adjective", meaning: "Relating to war, fighting, or warrior qualities", contextSentence: "Coorg is inhabited by a proud race of martial men and beautiful women.", synonyms: ["warlike", "military", "valiant"] },
      { word: "Kuppia", pronunciation: "KOOP-ee-uh", partOfSpeech: "noun", meaning: "The traditional long black coat with an embroidered waist-belt worn by the Kodavus", contextSentence: "Kodavus wear the traditional black coat known as kuppia.", synonyms: ["traditional coat", "ethnic tunic"] },
      { word: "Kuffia", pronunciation: "KUHF-ee-uh", partOfSpeech: "noun", meaning: "The traditional headcloth/coat worn by Arabs and Kurds", contextSentence: "The kuppia resembles the kuffia worn by the Arabs and the Kurds.", synonyms: ["Arab attire", "keffiyeh"] },
      { word: "Mahaseer", pronunciation: "mah-HAH-seer", partOfSpeech: "noun", meaning: "A large freshwater game fish of the carp family found in Indian rivers", contextSentence: "Mahaseer—a large freshwater fish—abound in the waters of River Kaveri.", synonyms: ["game fish", "carp"] },
      { word: "Rappelling", pronunciation: "ruh-PEL-ing", partOfSpeech: "noun", meaning: "Descending a sheer rock face using a doubled rope coiled around the body", contextSentence: "Tourists enjoy river rafting, canoeing, and rappelling down rocky slopes.", synonyms: ["abseiling", "rope descent"] },
      { word: "Ochre", pronunciation: "OH-ker", partOfSpeech: "noun/adjective", meaning: "An earthy pigment varying from light yellow to deep orange or brown", contextSentence: "Monks in red, ochre and yellow robes can be seen at Bylakuppe.", synonyms: ["earthy yellow", "amber", "russet"] }
    ],
    keyQuotes: [
      { quote: "Coorg, or Kodagu, the smallest district of Karnataka, is home to evergreen rainforests, spices and coffee plantations.", speaker: "Lokesh Abrol", context: "Geographical introduction to the district." },
      { quote: "The Coorg Regiment is one of the most decorated in the Indian Army, and the first Chief of the Indian Army, General Cariappa, was a Coorgi.", speaker: "Narrator", context: "Testament to Coorg's decorated martial history." },
      { quote: "Kodavus are the only people in India permitted to carry firearms without a license.", speaker: "Narrator", context: "The exceptional legal privilege awarded to the martial people of Coorg." },
      { quote: "A walk across the rope bridge leads to the sixty-four-acre island of Nisargadhama.", speaker: "Narrator", context: "Describing the eco-tourism highlight of Coorg." }
    ],
    examinerTraps: [
      {
        trapTitle: "Why does the 'kuppia' suggest Arab descent?",
        commonMistake: "Writing that the kuppia was brought by Alexander the Great.",
        correctCbseApproach: "Clarify that Alexander's army represents the GREEK origin theory; the 'kuppia' (black coat with embroidered belt) resembles the 'kuffia' worn by Arabs and Kurds, supporting the ARAB descent theory.",
        penaltyRisk: "Confusion of Greek vs Arab descent theories leads to 1.5-mark loss."
      },
      {
        trapTitle: "The Legal Exception for Firearms in India",
        commonMistake: "Stating that all people of Karnataka can hold weapons.",
        correctCbseApproach: "Emphasize specifically that the Kodavus of Coorg are the ONLY citizens in India permitted to carry firearms without a license, granted due to their historical loyalty and martial discipline.",
        penaltyRisk: "Inaccurate factual answer in Board 3-mark SAQ."
      }
    ],
    keywordsList: [
      "Kodagu smallest district",
      "piece of heaven drifted",
      "evergreen rainforests 30%",
      "Greek descent Alexander army",
      "Arab descent kuppia coat",
      "Coorg Regiment decorated",
      "General Cariappa first chief",
      "firearms without license",
      "River Kaveri Mahaseer fish",
      "Brahmagiri hills Nisargadhama"
    ],
    idiomsAndPhrases: [
      {
        phrase: "Piece of heaven",
        meaning: "A breathtakingly beautiful, tranquil, and pristine geographic place",
        contextSentence: "With its emerald hills and misty mornings, Coorg is truly a piece of heaven."
      },
      {
        phrase: "Tales of valor",
        meaning: "Stories recounting supreme courage, bravery, and military battlefield glory",
        contextSentence: "Coorgi homes have an enduring tradition of hospitality and reciting tales of valor."
      },
      {
        phrase: "Off the beaten track",
        meaning: "Away from conventional, crowded tourist routes; exploring nature's hidden trails",
        contextSentence: "Numerous walking trails in Coorg offer exquisite treks off the beaten track."
      }
    ],
    boardQAs: [
      {
        id: "ff5b-q1",
        question: "Explain the two theories regarding the descent of the people of Coorg.",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The people of Coorg are believed to be of either Greek or Arabic descent. The Greek theory states that a contingent of Alexander's army moved south along the coast, found return impractical, and settled in Coorg, intermarrying with locals. Their independent martial traditions and marriage rites support this. The Arabic theory is supported by the traditional black coat with an embroidered waist-belt called 'kuppia', which closely resembles the 'kuffia' worn by Arabs and Kurds.",
        keyKeywords: ["Alexander's army", "intermarried with locals", "distinct martial and marriage rites", "kuppia resembles Arab kuffia"],
        examinerRubricTip: "Mention both Greek (Alexander) and Arab (kuppia/kuffia) theories clearly."
      },
      {
        id: "ff5b-q2",
        question: "What makes the wildlife and adventure sports of Coorg unique for visitors?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Coorg's River Kaveri teems with Mahaseer (a giant freshwater fish), kingfishers, langurs, Malabar squirrels, and wild elephants bathed by mahouts. For adventurers, the rugged terrain and rivers offer white-water rafting, canoeing, rappelling, rock climbing, mountain biking, and treks up the Brahmagiri hills.",
        keyKeywords: ["River Kaveri", "Mahaseer freshwater fish", "elephants scrubbed by mahouts", "river rafting and rappelling", "Brahmagiri hills"],
        examinerRubricTip: "Include examples of both aquatic wildlife and specific adventure sports."
      },
      {
        id: "ff5b-q3",
        question: "How do the people of Coorg exemplify martial bravery, hospitality, and a distinct cultural identity?",
        marks: 6,
        type: "LAQ",
        modelAnswer: "The Kodavus of Coorg occupy a unique and revered place in Indian heritage through their martial valor, deep-rooted hospitality, and cultural distinctiveness.\n\nKnown as a proud race of warrior men, the Coorgis take immense pride in their martial traditions. The Coorg Regiment is one of the most decorated in the Indian Army, holding countless medals for courage. Furthermore, General K.M. Cariappa, the first Commander-in-Chief of the independent Indian Army, was a proud Coorgi. Because of their unimpeachable record of loyalty and honor, Kodavus are the only people in India permitted to carry firearms without a license.\n\nTheir culture is equally marked by generous hospitality. Coorgi homes warmly recount numerous tales of valor of their fathers and sons. Culturally, their marriage ceremonies, religious rites, and distinctive black attire ('kuppia') distinguish them from mainstream Hindu rituals, linking them to Greek and Arab lineages.\n\nSet amid rolling coffee plantations, mist-covered hills, and the sacred waters of the Kaveri, the people of Coorg stand as an inspiring testament to brave heritage and independent spirit.",
        keyKeywords: ["proud race of warrior men", "Coorg Regiment most decorated", "General Cariappa first chief", "firearms without license", "tradition of hospitality", "kuppia attire"],
        examinerRubricTip: "Address three key facets: 1. Military valor and General Cariappa, 2. Firearms privilege & hospitality, 3. Distinct attire and cultural lineage."
      }
    ],
    isPhase1Priority: false,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT (PROSE) — GLIMPSES OF INDIA (PART 3: TEA FROM ASSAM)
  // =========================================================================
  {
    id: "ff-ch5c-tea-from-assam",
    title: "Glimpses of India — Part 3: Tea from Assam",
    book: "First Flight (Prose)",
    type: "prose",
    chapterNo: 5,
    author: "Arup Kumar Datta",
    genre: "Travel Memoir / Botanical Legend & Heritage",
    theme: "The romance of tea cultivation, legendary origins of tea, and the emerald expanse of Assam's estates.",
    funToddlerHook: {
      tagline: "The Magic Green Leaf Drink That Conquered the World!",
      funnyStory: "Did you know that over 800 million cups of tea are drunk across the globe every single day?! Two school friends took a train ride to Assam. Outside the window, soft green rice fields suddenly turned into an ocean of bright green tea bushes! One friend shared two crazy legends: First, a Chinese Emperor was boiling drinking water when wild tea twigs fell in, making the tastiest soup ever! Second, an ancient monk cut off his eyelids because he kept falling asleep while praying—and ten magic tea plants sprouted from them to banish sleep forever!",
      ahaLesson: "Curiosity and reading transform an ordinary journey into an extraordinary adventure of discovery.",
      emoji: "🍵"
    },
    deepExplanation: "In 'Tea from Assam', Arup Kumar Datta narrates the journey of two classmates, Rajvir and Pranjol, traveling by train from Delhi to Upper Assam, where Pranjol's father serves as the manager of the famous Dhekiabari Tea Estate.\n\nAs their train speeds through eastern India, the journey opens with a platform vendor calling out 'Chai-garam... garam-chai'. Almost everyone in their compartment orders steaming tea. Rajvir shares a mind-boggling global statistic: over eighty crore (800 million) cups of tea are consumed every single day worldwide. While Pranjol, who grew up in Assam, buries his nose in a detective novel, Rajvir is captivated by the breathtaking vista outside. Soft green paddy fields gradually give way to an endless expanse of manicured tea bushes stretching as far as the eye can see. Towering, sturdy shade-trees stand sentinel over orderly rows of dwarf tea bushes, amid which agile tea pluckers with bamboo baskets on their backs and plastic aprons move like energetic dolls, plucking tender, newly sprouted tea leaves.\n\nDuring the journey, Rajvir enriches the experience by sharing the two legendary origins of tea:\n1. The Chinese Legend: Around 2737 BC, a Chinese Emperor always boiled water before drinking it. One day, twigs from the burning Camellia branches under the pot accidentally fell into the boiling water, imparting a delicious, invigorating flavor. These were tea leaves. Significantly, the words 'tea', 'chai', and 'chini' originated in Chinese. Tea traveled to Europe only in the sixteenth century, where it was initially consumed far more as a medicinal cure than as a recreational social beverage.\n2. The Indian Buddhist Legend: An ancient Indian Buddhist ascetic, Bodhidharma, was meditating deeply. Annoyed because sleep continuously interrupted his spiritual contemplations, he took the radical step of severing his own eyelids. Ten tea plants miraculously sprouted from his fallen eyelids. When the leaves of these magical plants were steeped in hot water and drunk, they successfully banished all drowsiness and sleep.\n\nArriving at Mariani junction, the boys are received by Pranjol's parents and driven in a car toward Dhekiabari Tea Estate. Crossing a cattle bridge, they drive between neat rows of tea bushes. Rajvir astutely observes a passing tractor loaded with tea leaves and asks Mr. Barua: 'This is the second-flush or sprouting period, isn't it, Mr. Barua? It lasts from May to July and yields the best tea, doesn't it?' Impressed by the young Delhi boy's thorough research and preparation, Mr. Barua exclaims in pleasant surprise: 'You have done your homework before coming!'",
    bulletSummary: [
      "Rajvir (Delhi student) and Pranjol (Assam native) travel by train to Dhekiabari Tea Estate in Upper Assam.",
      "Vendor cries 'Chai-garam'; Rajvir shares that over 80 crore cups of tea are drunk daily worldwide.",
      "Scenic transformation: soft green paddy fields transition into a boundless sea of green tea bushes.",
      "Tea pluckers wear plastic aprons with bamboo baskets on their backs, plucking tender leaves like doll figures.",
      "Chinese legend: Leaves from Camellia twigs accidentally fell into a Chinese Emperor's boiling water.",
      "Indian legend: Ascetic Bodhidharma cut off eyelids to avoid sleep; 10 tea plants sprouted to banish drowsiness.",
      "Etymology: 'Tea', 'chai', and 'chini' are from Chinese; tea reached Europe in the 16th century as medicine.",
      "Rajvir impresses Mr. Barua by identifying the second-flush season (May to July) that produces the finest tea."
    ],
    characters: [
      {
        name: "Rajvir",
        role: "Inquisitive, well-prepared student",
        emoji: "👦",
        traits: ["Curious", "Well-read", "Observant", "Enthusiastic explorer"],
        description: "A Delhi schoolboy visiting Assam for the first time; studies legends, harvest seasons, and tea history before arriving.",
        keyQuote: "Over eighty crore cups of tea are drunk every day throughout the world!"
      },
      {
        name: "Pranjol",
        role: "Assam-born classmate",
        emoji: "🧑",
        traits: ["Casual", "Accustomed to tea gardens", "Avid reader"],
        description: "Son of a tea estate manager; takes the tea scenery for granted and prefers reading detective novels on the train."
      },
      {
        name: "Mr. Barua",
        role: "Manager of Dhekiabari Tea Estate",
        emoji: "👨‍🌾",
        traits: ["Experienced", "Observant", "Warm", "Encouraging"],
        description: "Pranjol's father who welcomes the boys and is pleasantly surprised by Rajvir's comprehensive agricultural knowledge."
      }
    ],
    hardWords: [
      { word: "Beverage", pronunciation: "BEV-er-ij", partOfSpeech: "noun", meaning: "A drink, especially one other than water", contextSentence: "Tea was drunk more as a medicine than as a beverage in sixteenth-century Europe.", synonyms: ["drink", "refreshment", "liquid"] },
      { word: "Billowing", pronunciation: "BIL-oh-ing", partOfSpeech: "verb (participle)", meaning: "Swelling outward or rising in waves or smoke", contextSentence: "An ugly building with smoke billowing out of tall chimneys appeared.", synonyms: ["swelling", "surging", "rolling"] },
      { word: "Second-flush", pronunciation: "SEK-und flush", partOfSpeech: "noun", meaning: "The second harvest/sprouting period of tea leaves from May to July", contextSentence: "This is the second-flush or sprouting period, isn't it, Mr. Barua?", synonyms: ["second harvest", "summer sprouting"] },
      { word: "Ascetic", pronunciation: "uh-SET-ik", partOfSpeech: "noun", meaning: "A person who practices severe self-discipline and abstains from worldly pleasures for spiritual growth", contextSentence: "Bodhidharma, an ancient Buddhist ascetic, cut off his eyelids.", synonyms: ["monk", "hermit", "spiritual seeker"] },
      { word: "Dwarfed", pronunciation: "DWORFT", partOfSpeech: "verb (passive)", meaning: "Caused to seem small or insignificant in comparison", contextSentence: "Orderly rows of bushes were dwarfed by giant shade-trees.", synonyms: ["diminished", "overshadowed", "miniaturized"] },
      { word: "Camellia", pronunciation: "kuh-MEE-lee-uh", partOfSpeech: "noun", meaning: "The evergreen shrub genus whose species (Camellia sinensis) yields tea leaves", contextSentence: "Twigs of Camellia sinensis fell into the boiling water.", synonyms: ["tea shrub", "evergreen bush"] }
    ],
    keyQuotes: [
      { quote: "Over eighty crore cups of tea are drunk every day throughout the world!", speaker: "Rajvir", context: "Revealing global tea consumption statistics." },
      { quote: "Tea came to Europe only in the sixteenth century and was drunk more as medicine than as beverage.", speaker: "Rajvir", context: "Historical European adoption of tea." },
      { quote: "It lasts from May to July and yields the best tea, doesn't it?", speaker: "Rajvir", context: "Demonstrating deep agricultural homework to Mr. Barua." },
      { quote: "You have done your homework before coming, Pranjol's father said in surprise.", speaker: "Mr. Barua", context: "Praising Rajvir's preparation and curiosity." }
    ],
    examinerTraps: [
      {
        trapTitle: "Chinese Legend vs Indian Legend of Tea",
        commonMistake: "Mixing up the Chinese Emperor with Bodhidharma.",
        correctCbseApproach: "State clearly: The CHINESE legend involves Emperor Shennong whose boiling water caught falling burning twigs; the INDIAN legend involves Buddhist ascetic Bodhidharma whose severed eyelids sprouted 10 tea plants to banish sleep.",
        penaltyRisk: "1.5 marks lost on descriptive legend questions."
      },
      {
        trapTitle: "Exact Second-Flush Sprouting Months",
        commonMistake: "Writing August to October or March to April.",
        correctCbseApproach: "Remember the exact NCERT months: May to July is the second-flush period which yields the finest tea.",
        penaltyRisk: "1-mark loss in Board objective question."
      }
    ],
    keywordsList: [
      "Dhekiabari Tea Estate",
      "eighty crore cups daily",
      "paddy fields to tea bushes",
      "tea pluckers plastic aprons",
      "Chinese Emperor boiling water",
      "Bodhidharma severed eyelids",
      "banish sleep and drowsiness",
      "tea chai chini Chinese origin",
      "European medicine 16th century",
      "second-flush period May to July"
    ],
    idiomsAndPhrases: [
      {
        phrase: "Sea of green",
        meaning: "A vast, rolling, boundless expanse of emerald vegetation",
        contextSentence: "From the train window, Rajvir marveled at a breathtaking sea of green tea bushes."
      },
      {
        phrase: "Do one's homework",
        meaning: "To thoroughly study, prepare, and gather background information before an event",
        contextSentence: "Mr. Barua praised Rajvir for doing his homework on Assam's tea harvesting cycle."
      },
      {
        phrase: "Sip of history",
        meaning: "Experiencing an ancient tradition through the simple act of consuming a beverage",
        contextSentence: "Every hot cup of tea carries a delicious, ancient sip of history."
      }
    ],
    boardQAs: [
      {
        id: "ff5c-q1",
        question: "Narrate the two popular legends regarding the discovery of tea as shared by Rajvir in the story.",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The Chinese legend recounts that a Chinese Emperor was boiling water when leaves from burning twigs under the pot fell in, creating a delicious flavor; these were tea leaves. The Indian legend tells of an ancient Buddhist ascetic, Bodhidharma, who severed his eyelids because he felt sleepy during meditation. Ten tea plants sprouted from his eyelids, whose leaves, when boiled in water, banished all sleep.",
        keyKeywords: ["Chinese Emperor boiling water", "twigs falling into pot", "Buddhist ascetic Bodhidharma", "severed eyelids", "ten tea plants banished sleep"],
        examinerRubricTip: "Mention both the Chinese and Indian legends accurately with their key figures."
      },
      {
        id: "ff5c-q2",
        question: "What magnificent sight did Rajvir witness from the train window as they entered Assam?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Rajvir saw the soft green paddy fields give way to a boundless sea of green tea bushes stretching as far as the eye could see. Orderly rows of trimmed dwarf bushes were sheltered by tall, sturdy shade-trees. Amidst them, tea pluckers wearing plastic aprons with bamboo baskets on their backs moved gracefully like doll-like figures plucking fresh tender leaves.",
        keyKeywords: ["boundless sea of green tea bushes", "dwarf bushes sheltered by shade-trees", "tea pluckers with bamboo baskets", "plastic aprons", "doll-like figures"],
        examinerRubricTip: "Mention the contrast between paddy fields, shade-trees, and the tea pluckers."
      },
      {
        id: "ff5c-q3",
        question: "How does Rajvir's attitude towards the journey contrast with Pranjol's? What quality of Rajvir is commended by Mr. Barua?",
        marks: 6,
        type: "LAQ",
        modelAnswer: "In 'Tea from Assam', Arup Kumar Datta presents a striking contrast between the perspectives of Rajvir and Pranjol during their railway journey.\n\nPranjol, having been born and raised in Assam amidst tea gardens, takes the breathtaking greenery for granted. Unmoved by the surrounding splendor, he spends the train journey absorbed in a detective novel. For him, tea estates are merely a commonplace background of daily life.\n\nIn contrast, Rajvir, a Delhi city boy visiting Assam for the first time, is filled with awe and passionate curiosity. He eagerly absorbs every detail of the lush landscape—the transformation from paddy fields to tea bushes, the billowing chimneys of tea factories, and the colorful tea pluckers. Moreover, Rajvir demonstrates remarkable intellectual preparation: he recites the history of global tea consumption, explains Chinese and Indian folklore, and identifies the linguistic origins of words like 'chai' and 'chini'.\n\nWhen they arrive at Dhekiabari, Rajvir astutely identifies the 'second-flush' sprouting period (May to July) that produces the finest tea. His thorough advance research and eagerness to learn deeply impress Mr. Barua, who remarks with admiration that Rajvir has 'done his homework before coming'. Rajvir exemplifies that true learning requires active curiosity and genuine engagement with the world.",
        keyKeywords: ["born and raised in Assam", "detective novel", "commonplace background", "Delhi city boy filled with awe", "intellectual preparation", "second-flush May to July", "done his homework"],
        examinerRubricTip: "Compare: 1. Pranjol's familiarity & detachment, 2. Rajvir's awe & preparation, 3. Mr. Barua's praise and lesson."
      }
    ],
    isPhase1Priority: false,
    isTestSeries1: false
  },
// FIRST FLIGHT (PROSE) — MIJBIL THE OTTER
  // =========================================================================
  {
    id: "ff-ch6-mijbil-the-otter",
    title: "Mijbil the Otter",
    book: "First Flight (Prose)",
    type: "prose",
    chapterNo: 6,
    author: "Gavin Maxwell",
    genre: "Autobiographical Travel & Pet Memoir",
    theme: "The profound bond between humans and unconventional animals; the joys and tribulations of cross-species companionship.",
    funToddlerHook: {
      tagline: "The Water-Crazy Otter who Traveled on an Airplane!",
      funnyStory: "When the author's pet dog died, he decided: 'No more dogs! I want a water-loving river otter!' He got Mijbil from Iraq. Mijbil thought static water was broken—he turned on bathroom taps with his paws and splashed water everywhere! On an airplane to London, Mij escaped from his box, zoomed under seats, made a lady scream 'A RAT!', and got covered in curry! In London, pedestrians asked: 'Is that a baby hippo? A beaver? A dinosaur?'",
      ahaLesson: "True love for an animal means accepting their wild, quirky habits with endless patience and laughter.",
      emoji: "🦦"
    },
    deepExplanation: "Gavin Maxwell recounts his life with Mijbil, an otter he adopted in Iraq after losing his dog Jonnie.\n\nIn Southern Iraq's Tigris marshes, otters were frequently tamed by Arabs. Maxwell was gifted a male otter cub, belonging to a previously uncatalogued race later named 'Lutrogale perspicillata maxwelli'. Initially aloof, Mijbil soon bonded deeply, demonstrating acrobatic playfulness. His obsession with water was boundless: static water offended him, so he learned to turn bathroom taps with his paws to create splashing fountains.\n\nTransporting Mijbil to England proved harrowing. At Basra, Mijbil lacerated his body trying to tear through the metal mesh of his travel box. On the plane, Mijbil escaped, dashing down the aisle and causing comic panic among passengers until the compassionate air hostess helped retrieve him.\n\nIn London, Maxwell walked Mijbil on a leash like a dog. Mijbil developed childish rituals, like galloping along a 30-yard school boundary wall. Because Londoners had never seen an otter, Maxwell endured endless bizarre guesses—from a walrus and a baby seal to a badger and a leopard cub.",
    bulletSummary: [
      "Maxwell adopts an otter from Tigris marshes in Iraq to replace his deceased dog Jonnie.",
      "The otter is an uncatalogued species christened 'Lutrogale perspicillata maxwelli'.",
      "Mijbil is obsessed with water: turns on bathroom taps and invents games with ping-pong balls on suitcases.",
      "Travel crisis: Mijbil bleeds inside a metal-lined crate at Basra; escapes down the airplane aisle in mid-flight.",
      "A kind air hostess helps recover Mijbil safely.",
      "In London, pedestrians make ridiculous guesses about Mijbil's species (seal, walrus, beaver, baby bear, hippo)."
    ],
    characters: [
      {
        name: "Gavin Maxwell",
        role: "Devoted pet owner & naturalist",
        emoji: "👨",
        traits: ["Patient", "Observant", "Compassionate", "Humorous"],
        description: "Endured bureaucratic nightmares, flight panics, and public ridicule to care for his beloved otter."
      },
      {
        name: "Mijbil",
        role: "The playful otter",
        emoji: "🦦",
        traits: ["Acrobatic", "Mischievous", "Water-obsessed", "Affectionate"],
        description: "Tamed marsh otter with remarkable mechanical problem-solving ability and endless play drive."
      }
    ],
    hardWords: [
      { word: "Apathy", pronunciation: "AP-uh-thee", partOfSpeech: "noun", meaning: "Lack of interest, enthusiasm, or concern", contextSentence: "For the first twenty-four hours Mijbil was neither hostile nor friendly; he was aloof and indifferent, showing utter apathy.", synonyms: ["indifference", "detachment", "unconcern"] },
      { word: "Lacerated", pronunciation: "LASS-uh-ray-ted", partOfSpeech: "adjective", meaning: "Deeply cut, torn, or wounded", contextSentence: "The edges of the air holes had lacerated his mouth and paws.", synonyms: ["slashed", "torn", "mangled"] }
    ],
    keyQuotes: [
      { quote: "An otter must have water to roll in, to plunge into, and to shoot up and down.", speaker: "Gavin Maxwell", context: "Describing an otter's primal instinct." },
      { quote: "'Here, mister, what is that supposed to be?'", speaker: "London Ditch-Digger", context: "The most amusing pedestrian query in London." }
    ],
    examinerTraps: [
      {
        trapTitle: "Why was Mijbil's species named 'maxwelli'?",
        commonMistake: "Saying Maxwell bred the otter in a zoo.",
        correctCbseApproach: "State that the species was previously unknown to science and zoologists named it Lutrogale perspicillata maxwelli after Gavin Maxwell, who brought it to scientific attention.",
        penaltyRisk: "Lose 1 mark on zoological naming facts."
      }
    ],
        keywordsList: [
      "Maxwell",
      "Camusfearna",
      "Tigris marshes Iraq",
      "Lutrogale perspicillata maxwelli",
      "air journey to London",
      "box ordeal",
      "ping-pong ball games",
      "Londoners' guesses",
      "animal companionship"
],
    idiomsAndPhrases: [
      {
            "phrase": "A wild goose chase",
            "meaning": "A frantic, chaotic pursuit that leads nowhere",
            "contextSentence": "Londoners indulged in a wild goose chase guessing what kind of animal Mijbil was."
      },
      {
            "phrase": "In full swing",
            "meaning": "Operating at maximum energy, enthusiasm, and speed",
            "contextSentence": "Mijbil's bathtub acrobatics were soon in full swing."
      }
],
boardQAs: [
      {
        id: "ff6-q1",
        question: "How did Gavin Maxwell prepare for Mijbil's air journey from Iraq to England, and what emergency occurred?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "British airlines refused to carry animals, so Maxwell booked a flight to Paris on another airline and an onward connection to London. He put Mijbil into a ventilated box an hour before leaving. When he returned, he discovered Mijbil had shredded the metal mesh lining in terror, lacerating his nose and paws. Rushing against flight time, Maxwell had to board with the bleeding animal.",
        keyKeywords: ["ventilated box", "shredded metal mesh", "lacerated paws", "rushing against time", "air hostess empathy"],
        examinerRubricTip: "Mention the airline restriction and the metal mesh crate trauma."
      }
    ],
    isPhase1Priority: false,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT (POETRY) — HOW TO TELL WILD ANIMALS
  // =========================================================================
  {
    id: "ff-p3-how-to-tell-wild-animals",
    title: "How to Tell Wild Animals",
    book: "First Flight (Poetry)",
    type: "poem",
    chapterNo: 3,
    author: "Carolyn Wells",
    genre: "Humorous Verse / Satirical Beast Fable",
    theme: "Light-hearted, paradoxical humor used to describe perilous jungle carnivores.",
    funToddlerHook: {
      tagline: "How to Identify Wild Beasts (Right before they eat you!)",
      funnyStory: "Want to tell which wild animal is chasing you? If a huge tawny beast roars so loud you die of fear—congrats, that's an Asian Lion! If a beast with black stripes on yellow skin eats you politely—that's a Bengal Tiger! If a spotted creature leaps on you and keeps leaping while you scream—yup, that's a Leopard! And if a crocodile weeps big tears while a hyena laughs at you—welcome to the funny, dangerous jungle!",
      ahaLesson: "Humor can make terrifying things entertaining, but never forget: dangerous wild predators must be respected from a safe distance!",
      emoji: "🦁"
    },
    deepExplanation: "Carolyn Wells uses deadpan, dark humor to teach children how to identify fierce wild beasts.\n\nThe humor lies in the absurdity of the advice: every identification method requires the victim to be eaten or killed! If a large, tawny beast in an eastern jungle roars at you as you are dying, you know it is an Asian Lion. If a noble beast with black stripes on yellow ground greets and devours you, it is a Bengal Tiger. If a beast covered in spots leaps upon you and roars louder the more you cry in pain, it is a Leopard.\n\nShe adds humorous folklore: a Bear hugs you affectionately (until you are crushed to death), a Hyena smiles merrily as it hunts, a Crocodile sheds false hypocritical tears as it swallows prey, and a Chameleon is completely invisible on a tree branch because it has no ears or wings. Wells balances rhythm, rhyme, and comedic paradox with perfection.",
    bulletSummary: [
      "Asian Lion: Roars terrifyingly in the eastern jungles as you are dying.",
      "Bengal Tiger: Noble beast with black stripes on yellow ground who eats you politely.",
      "Leopard: Peppered with black spots; leaps on you repeatedly ('lep and lep again').",
      "Bear: Hugs you tightly in his crushing embrace.",
      "Crocodile vs Hyena: Hyenas laugh cheerfully; Crocodiles weep fake tears.",
      "Chameleon: Tiny lizard-like creature with no ears or wings; merges invisibly onto tree bark."
    ],
    hardWords: [
      { word: "Tawny", pronunciation: "TAW-nee", partOfSpeech: "adjective", meaning: "A brownish-yellow or yellowish-brown color", contextSentence: "If there should to you advance a large and tawny beast.", synonyms: ["yellow-brown", "amber", "golden-brown"] },
      { word: "Discern", pronunciation: "dih-SURN", partOfSpeech: "verb", meaning: "To distinguish, recognize, or perceive clearly", contextSentence: "The Bengal Tiger to discern.", synonyms: ["recognize", "identify", "detect"] }
    ],
    keyQuotes: [
      { quote: "'Twill do no good to roar with pain, He'll only lep and lep again.", speaker: "Carolyn Wells", context: "Comic futility of begging for mercy from a leopard." }
    ],
    examinerTraps: [
      {
        trapTitle: "Identify the poetic license in 'lep and lep again'.",
        commonMistake: "Calling it a spelling error.",
        correctCbseApproach: "Explain that the poet deliberately misspells 'leap' as 'lep' to maintain the rhythm, meter, and comical sound with 'leopard'.",
        penaltyRisk: "Lose 1 mark on poetic license terminology."
      }
    ],
        stanzaBreakdown: [
      {
            "stanzaNumber": 1,
            "originalLines": [
                  "If ever you should go by chance",
                  "To jungles in the east;",
                  "And if there should to you advance",
                  "A large and tawny beast,",
                  "If he roars at you as you're dyin'",
                  "You'll know it is the Asian Lion."
            ],
            "simpleParaphrase": "If you ever travel to eastern Asian jungles and encounter a massive, brownish-yellow beast who roars so terrifyingly that you feel you are dying of fright, you can be certain it is an Asian Lion!",
            "poeticDevices": [
                  {
                        "device": "Rhyme Scheme",
                        "easyDefinition": "Pattern of end rhymes",
                        "lineExample": "chance(a), east(b), advance(a), beast(b), dyin'(c), lion(c) -> ababcc",
                        "explanation": "Regular six-line ballad stanza creates playful comedic pacing."
                  },
                  {
                        "device": "Poetic License",
                        "easyDefinition": "Bending spelling or grammar for rhyme",
                        "lineExample": "'dyin'' instead of 'dying'",
                        "explanation": "The poet omits the 'g' so 'dyin'' rhymes with 'Asian Lion'."
                  },
                  {
                        "device": "Inversion",
                        "easyDefinition": "Swapping sentence order for poetic effect",
                        "lineExample": "'if there should to you advance'",
                        "explanation": "Inverts standard English 'if a beast should advance toward you' to fit meter."
                  }
            ]
      },
      {
            "stanzaNumber": 2,
            "originalLines": [
                  "Or if some time when roaming round,",
                  "A noble wild beast greets you,",
                  "With black stripes on a yellow ground,",
                  "Just notice if he eats you.",
                  "This simple rule may help you learn",
                  "The Bengal Tiger to discern."
            ],
            "simpleParaphrase": "If while wandering you meet a majestic predator with black stripes across yellow skin who politely devours you, this simple test lets you identify the Bengal Tiger!",
            "poeticDevices": [
                  {
                        "device": "Alliteration",
                        "easyDefinition": "Repeating starting consonant sounds",
                        "lineExample": "'roaming round'",
                        "explanation": "Repetition of /r/ sound adds rhythmic musicality."
                  },
                  {
                        "device": "Irony / Comic Paradox",
                        "easyDefinition": "Humorous gap between statement and reality",
                        "lineExample": "'Just notice if he eats you.'",
                        "explanation": "The identification rule is comically useless since you are already dead once eaten!"
                  },
                  {
                        "device": "Allusion / Epithet",
                        "easyDefinition": "Descriptive nickname",
                        "lineExample": "'A noble wild beast'",
                        "explanation": "Humorously grants high aristocratic nobility to a ferocious predator."
                  }
            ]
      },
      {
            "stanzaNumber": 3,
            "originalLines": [
                  "If strolling forth, a beast you view,",
                  "Whose hide with spots is peppered,",
                  "As soon as he has lept on you,",
                  "You'll know it is the Leopard.",
                  "'Twill do no good to roar with pain,",
                  "He'll only lep and lep again."
            ],
            "simpleParaphrase": "If walking forward you spot a creature whose skin is sprinkled with dark spots, and he suddenly pounces on you, that is a Leopard! Screaming in agony won't help—he will only keep leaping on you!",
            "poeticDevices": [
                  {
                        "device": "Poetic License",
                        "easyDefinition": "Deliberately misspelling words for effect",
                        "lineExample": "'lept' and 'lep and lep again'",
                        "explanation": "Misspells 'leaped' as 'lept' and 'leap' as 'lep' to create comical rhyme with 'leopard'."
                  },
                  {
                        "device": "Alliteration",
                        "easyDefinition": "Repeating starting sounds",
                        "lineExample": "'lep and lep'",
                        "explanation": "Repetition of /l/ emphasizes relentless, playful pouncing."
                  },
                  {
                        "device": "Metaphor",
                        "easyDefinition": "Direct comparison",
                        "lineExample": "'hide with spots is peppered'",
                        "explanation": "Compares the dense distribution of black spots on leopard fur to black pepper sprinkled on food."
                  }
            ]
      },
      {
            "stanzaNumber": 4,
            "originalLines": [
                  "If when you're walking round your yard",
                  "You meet a creature there,",
                  "Who hugs you very, very hard,",
                  "Be sure it is a Bear.",
                  "If you have any doubts, I guess",
                  "He'll give you just one more caress."
            ],
            "simpleParaphrase": "If walking in your garden you meet a large beast that wraps you in a tight, crushing hug, that is a Bear! If you still doubt his identity, he will lovingly squeeze the remaining breath out of you!",
            "poeticDevices": [
                  {
                        "device": "Irony",
                        "easyDefinition": "Saying something opposite to literal meaning",
                        "lineExample": "'He'll give you just one more caress.'",
                        "explanation": "A 'caress' is a gentle touch, but here the bear's hug is a lethal crushing blow."
                  },
                  {
                        "device": "Alliteration",
                        "easyDefinition": "Repeating starting sounds",
                        "lineExample": "'hugs you very, very hard'",
                        "explanation": "Repetition of /h/ reinforces the heavy, forceful embrace."
                  }
            ]
      },
      {
            "stanzaNumber": 5,
            "originalLines": [
                  "Though to distinguish beasts of prey",
                  "A novice might nonplus,",
                  "The Crocodile you always may",
                  "Tell from the Hyena thus:",
                  "Hyenas come with merry smiles;",
                  "But if they weep they're Crocodiles."
            ],
            "simpleParaphrase": "A beginner might find it tricky to tell predators apart, but remember this: Hyenas always grin with cheerful smiles, whereas Crocodiles weep hypocritical false tears as they swallow you!",
            "poeticDevices": [
                  {
                        "device": "Antithesis / Contrast",
                        "easyDefinition": "Contrasting two opposites directly",
                        "lineExample": "'Hyenas come with merry smiles; But if they weep they're Crocodiles.'",
                        "explanation": "Contrasts the smiling facial mimicry of hyenas with the legendary false weeping of crocodiles."
                  },
                  {
                        "device": "Alliteration",
                        "easyDefinition": "Repeating starting sounds",
                        "lineExample": "'merry smiles'",
                        "explanation": "Smooth /m/ and /s/ sounds mimic cheerful deceptive expression."
                  }
            ]
      },
      {
            "stanzaNumber": 6,
            "originalLines": [
                  "The true Chameleon is small,",
                  "A lizard sort of thing;",
                  "He hasn't any ears at all,",
                  "And not a single wing.",
                  "If there is nothing on the tree,",
                  "'Tis the chameleon you see."
            ],
            "simpleParaphrase": "A real chameleon is a small reptile like a lizard without any ears or wings. If you look at a tree branch and see absolutely nothing, you are actually looking at a perfectly camouflaged chameleon!",
            "poeticDevices": [
                  {
                        "device": "Comic Paradox",
                        "easyDefinition": "A statement that seems contradictory but reveals a funny truth",
                        "lineExample": "'If there is nothing on the tree, 'Tis the chameleon you see.'",
                        "explanation": "You 'see' the creature precisely because you can see nothing due to its flawless camouflage."
                  },
                  {
                        "device": "Alliteration",
                        "easyDefinition": "Repeating starting sounds",
                        "lineExample": "'sort of thing'",
                        "explanation": "Light conversational cadence."
                  }
            ]
      }
],
    allPoeticDevicesGlossary: [
      {
            "device": "Poetic License",
            "easyDefinition": "Intentionally bending spelling or grammar for rhyme and meter.",
            "whereUsedInPoem": "Stanza 3 ('lep and lep again' instead of 'leap')",
            "explanation": "Wells misspells 'leap' as 'lep' to create a comical rhyme with 'leopard'."
      },
      {
            "device": "Irony / Comic Paradox",
            "easyDefinition": "Humorous contradiction between advice and reality.",
            "whereUsedInPoem": "Throughout the poem (All identification tests result in the observer's death!)",
            "explanation": "The advice on how to recognize beasts is useless because you are killed in the process."
      },
      {
            "device": "Alliteration",
            "easyDefinition": "Repetition of consonant sounds at the start of words.",
            "whereUsedInPoem": "Stanza 1 ('roam round') and Stanza 4 ('he hugs you very, very hard')",
            "explanation": "Reinforces the lively, bouncy ballad rhythm."
      },
      {
            "device": "Inversion",
            "easyDefinition": "Reversing standard grammatical word order.",
            "whereUsedInPoem": "Stanza 1 ('If there should to you advance')",
            "explanation": "Inverts standard English for poetic meter."
      }
],
    keywordsList: [
      "tawny beast",
      "noble wild beast",
      "peppered with spots",
      "lep and lep",
      "bear hug",
      "hyena smile",
      "crocodile tears",
      "chameleon",
      "satire",
      "poetic license"
],
    idiomsAndPhrases: [
      {
            "phrase": "Crocodile tears",
            "meaning": "Hypocritical, false tears shed to deceive or manipulate",
            "contextSentence": "Wells quips that you can identify a crocodile because it weeps false tears while eating you."
      },
      {
            "phrase": "Bear hug",
            "meaning": "A very tight, crushing embrace that in a wild bear's case is fatal",
            "contextSentence": "The bear will give you a hard hug that squeezes the breath out of you."
      }
],
boardQAs: [
      {
        id: "p3-q1",
        question: "How does Carolyn Wells use humor and irony to describe dangerous wild beasts?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Carolyn Wells employs comic paradox and situational irony. She offers identification criteria that are completely useless for self-preservation: by the time you verify the beast (being eaten by a tiger, crushed by a bear, or roved by a leopard), you are already dead! The playful rhyme schemes and colloquial word coinages ('lep') turn lethal jungle dangers into delightful satire.",
        keyKeywords: ["comic paradox", "situational irony", "useless for self-preservation", "playful rhyme", "poetic license"],
        examinerRubricTip: "Explain that the humor arises from the impossible condition of surviving the test."
      }
    ],
    isPhase1Priority: false,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT (POETRY) — THE TREES
  // =========================================================================
  {
    id: "ff-p4-the-trees",
    title: "The Trees",
    book: "First Flight (Poetry)",
    type: "poem",
    chapterNo: 4,
    author: "Adrienne Rich",
    genre: "Feminist Allegory & Nature Verse",
    theme: "Rebellion against domestic confinement; women breaking patriarchal shackles to reclaim freedom.",
    funToddlerHook: {
      tagline: "The Trees that Broke Through the Windows to Reach the Forest!",
      funnyStory: "Imagine house plants trapped inside tiny flower pots in a living room. One night, they say: 'Enough! We are trees, not toys!' Their roots wiggle out of floor tiles, their branches smash the glass windows, and like patients walking out of a hospital, they march out into the night forest where they belong! The wind rushes to hug them, and the moon shines like a crown over their leaves!",
      ahaLesson: "Nothing natural was meant to be kept locked in a cage—neither trees nor women. True freedom belongs outside in the wide world.",
      emoji: "🌳"
    },
    deepExplanation: "Adrienne Rich's 'The Trees' is an extended feminist allegory disguised as a nature poem.\n\nHistorically, trees were uprooted from nature and confined inside domestic rooms as ornamental house plants. In the poet's vision, these captive trees stage a nocturnal rebellion. All night, their roots strain to disengage from veranda cracks, leaves reach toward glass windows, and stiff boughs cram under the roof like half-dazed patients newly discharged from a hospital ward.\n\nThe trees smash through the window glass and march into the barren forest, which had been empty with no birds perching and no insects hiding. The speaker sits writing letters, observing the departure quietly. Outside, the night is fresh, the wind rushes to meet the liberated trees, and the full moon shatters into fragments like a broken mirror in the crowning oak branches. The poem celebrates women escaping traditional domestic domesticity to reclaim their rightful agency in society.",
    bulletSummary: [
      "Trees inside houses are breaking free from domestic confinement to repopulate the barren forest.",
      "Roots strain all night to free themselves from cracks on the veranda floor.",
      "Small twigs stiffen with exertion; boughs move like newly discharged hospital patients.",
      "The poet sits writing long letters, scarcely mentioning the departure of the forest.",
      "Glass breaks; trees stumble into the night as the wind rushes to welcome them.",
      "The full moon appears broken into luminous pieces in the crown of the tallest oak tree.",
      "Feminist subtext: Women shattering domestic confinement to enter the public sphere."
    ],
    hardWords: [
      { word: "Disengage", pronunciation: "dis-en-GAYJ", partOfSpeech: "verb", meaning: "To separate, release, or untangle oneself", contextSentence: "All night the roots work to disengage themselves from the cracks in the veranda floor.", synonyms: ["detach", "free", "release"] },
      { word: "Bough", pronunciation: "BOW", partOfSpeech: "noun", meaning: "A main branch of a tree", contextSentence: "Long-cramped boughs shuffling under the roof.", synonyms: ["branch", "limb"] }
    ],
    keyQuotes: [
      { quote: "The forest that was empty all these days will be full of trees by morning.", speaker: "Adrienne Rich", context: "Prophetic vision of natural and social restoration." },
      { quote: "Like newly discharged patients half-dazed moving to the clinic doors.", speaker: "Adrienne Rich", context: "Simile describing the exhausted yet determined movement of branches." }
    ],
    examinerTraps: [
      {
        trapTitle: "Explain the simile 'like newly discharged patients'.",
        commonMistake: "Thinking trees are literally sick with disease.",
        correctCbseApproach: "Explain that cramped branches moving toward the exit resemble dazed hospital patients leaving clinic doors—exhausted by long confinement yet eager for freedom.",
        penaltyRisk: "Lose 1 mark on poetic device analysis."
      }
    ],
        stanzaBreakdown: [
      {
            "stanzaNumber": 1,
            "originalLines": [
                  "The trees inside are moving out into the forest,",
                  "the forest that was empty all these days",
                  "where no bird could sit",
                  "no insect hide",
                  "no sun bury its feet in shadow",
                  "the forest that was empty all these nights",
                  "will be full of trees by morning."
            ],
            "simpleParaphrase": "The captive trees inside human homes are breaking free to reclaim the barren forest that had been desolate—where no birds perched, no bugs hid, and no tree shadows fell. By morning, the natural forest will be fully restored!",
            "poeticDevices": [
                  {
                        "device": "Personification",
                        "easyDefinition": "Giving human traits to nature",
                        "lineExample": "'no sun bury its feet in shadow'",
                        "explanation": "Sunlight is pictured as having 'feet' that bury into cool tree shade."
                  },
                  {
                        "device": "Anaphora",
                        "easyDefinition": "Repeating starting words",
                        "lineExample": "'no bird could sit / no insect hide / no sun bury...'",
                        "explanation": "Repetition of 'no' emphasizes the absolute emptiness of the forest without trees."
                  },
                  {
                        "device": "Feminist Allegory",
                        "easyDefinition": "Symbolic representation of women's liberation",
                        "lineExample": "'trees inside are moving out'",
                        "explanation": "The exodus of trees represents women breaking out of domestic confinement to enter society."
                  }
            ]
      },
      {
            "stanzaNumber": 2,
            "originalLines": [
                  "All night the roots work",
                  "to disengage themselves from the cracks",
                  "in the veranda floor.",
                  "The leaves strain toward the glass",
                  "small twigs stiff with exertion",
                  "long-cramped boughs shuffling under the roof",
                  "like newly discharged patients",
                  "half-dazed, moving",
                  "to the clinic doors."
            ],
            "simpleParaphrase": "All through the night, roots tirelessly labor to pry loose from floor cracks, leaves push against the window glass, and cramped branches shuffle under the ceiling like groggy hospital patients stepping out of a clinic.",
            "poeticDevices": [
                  {
                        "device": "Simile",
                        "easyDefinition": "Comparison using 'like' or 'as'",
                        "lineExample": "'like newly discharged patients half-dazed'",
                        "explanation": "Compares the stiff, exhausted branches to dazed patients emerging from a hospital clinic."
                  },
                  {
                        "device": "Personification",
                        "easyDefinition": "Endowing inanimate things with physical effort",
                        "lineExample": "'roots work to disengage... twigs stiff with exertion'",
                        "explanation": "Botanical roots and twigs perform deliberate, strained physical labor."
                  },
                  {
                        "device": "Enjambment",
                        "easyDefinition": "Lines running into the next without punctuation",
                        "lineExample": "'All night the roots work / to disengage themselves...'",
                        "explanation": "Mirrors the continuous, unbroken night-long effort."
                  }
            ]
      },
      {
            "stanzaNumber": 3,
            "originalLines": [
                  "I sit inside, doors open to the veranda",
                  "writing long letters",
                  "in which I scarcely mention the departure",
                  "of the forest from the house.",
                  "The night is fresh, the whole moon shines",
                  "in a sky still open",
                  "the smell of leaves and lichen",
                  "still reaches like a voice into the rooms."
            ],
            "simpleParaphrase": "The poet sits inside writing letters, barely remarking on the departure of the trees. Outside, the night air is crisp, the full moon glows in the wide open sky, and the earthy fragrance of leaves calls out like a living voice into the rooms.",
            "poeticDevices": [
                  {
                        "device": "Simile",
                        "easyDefinition": "Comparison using 'like'",
                        "lineExample": "'smell of leaves and lichen reaches like a voice'",
                        "explanation": "Compares the rich botanical scent to an urgent human voice pleading for freedom."
                  },
                  {
                        "device": "Visual & Olfactory Imagery",
                        "easyDefinition": "Words creating pictures and smells in the reader's mind",
                        "lineExample": "'whole moon shines' (visual), 'smell of leaves and lichen' (olfactory)",
                        "explanation": "Transports the reader into the crisp, sensory atmosphere of the liberating night."
                  }
            ]
      },
      {
            "stanzaNumber": 4,
            "originalLines": [
                  "My head is full of whispers",
                  "which tomorrow will be silent.",
                  "Listen. The glass is breaking.",
                  "The trees are stumbling forward",
                  "into the night. Winds rush to meet them.",
                  "The moon is broken like a mirror,",
                  "its pieces flash now in the crown",
                  "of the tallest oak."
            ],
            "simpleParaphrase": "The poet's mind fills with secretive whispers that will cease by morning. Suddenly, window glass shatters! The trees stumble into the night as eager winds rush to embrace them, and the full moon shatters like a mirror into flashing silver shards in the canopy of the tallest oak tree.",
            "poeticDevices": [
                  {
                        "device": "Simile",
                        "easyDefinition": "Comparison using 'like'",
                        "lineExample": "'The moon is broken like a mirror'",
                        "explanation": "The dense crown of the oak tree fractures the continuous light of the full moon into scattered reflective shards."
                  },
                  {
                        "device": "Personification",
                        "easyDefinition": "Giving human actions to elements",
                        "lineExample": "'Winds rush to meet them' and 'trees are stumbling forward'",
                        "explanation": "The wind is an eager friend welcoming the freed trees who walk forward like weary travelers."
                  },
                  {
                        "device": "Auditory Imagery",
                        "easyDefinition": "Words that evoke sounds",
                        "lineExample": "'The glass is breaking'",
                        "explanation": "Dramatic single-sentence command grabbing the reader's attention with the crash of shattering glass."
                  }
            ]
      }
],
    allPoeticDevicesGlossary: [
      {
            "device": "Extended Allegory",
            "easyDefinition": "A story or poem revealing a hidden political or moral meaning.",
            "whereUsedInPoem": "The entire movement of trees escaping houses into the forest",
            "explanation": "The trees breaking through glass are a direct allegory for women breaking patriarchal domestic confinement."
      },
      {
            "device": "Simile",
            "easyDefinition": "Comparing two different things using 'like' or 'as'.",
            "whereUsedInPoem": "Stanza 2 ('like newly discharged patients') and Stanza 4 ('moon broken like a mirror')",
            "explanation": "Compares branches to recovering patients, and the moon fractured through branches to a cracked mirror."
      },
      {
            "device": "Personification",
            "easyDefinition": "Giving human intentions and physical efforts to nature.",
            "whereUsedInPoem": "Stanza 1 ('roots work to disengage') and Stanza 4 ('Winds rush to meet them')",
            "explanation": "Roots and winds are endowed with human consciousness, labor, and affection."
      },
      {
            "device": "Visual & Auditory Imagery",
            "easyDefinition": "Words creating pictures and sounds in the mind.",
            "whereUsedInPoem": "'The glass is breaking' and 'moon broken like a mirror'",
            "explanation": "Evokes the dramatic visual flash and sharp sound of breaking windows."
      }
],
    keywordsList: [
      "roots work to disengage",
      "cracks in veranda",
      "stiff boughs",
      "discharged patients",
      "breaking glass",
      "whispers",
      "barren forest",
      "feminist rebellion",
      "patriarchal confinement",
      "liberation"
],
    idiomsAndPhrases: [
      {
            "phrase": "Disengage from cracks",
            "meaning": "To struggle free from restrictive confines",
            "contextSentence": "All night the tree roots labor to disengage themselves from the veranda floor."
      },
      {
            "phrase": "Half-dazed like discharged patients",
            "meaning": "Exhausted and disoriented yet eager to step outside after prolonged confinement",
            "contextSentence": "The cramped branches move toward clinic doors like newly discharged hospital patients."
      }
],
boardQAs: [
      {
        id: "p4-q1",
        question: "How does Adrienne Rich establish an allegory between the movement of trees and the feminist movement?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Adrienne Rich uses the trees confined inside interior rooms as a metaphor for women trapped within patriarchal domestic boundaries. Just as the roots strain against veranda floors and boughs shatter window glass to rejoin the natural forest, women are breaking through societal constraints, leaving domestic confinement, and reclaiming their agency, leadership, and public spaces in the world.",
        keyKeywords: ["extended allegory", "patriarchal domestic boundaries", "roots straining", "breaking glass", "reclaiming agency"],
        examinerRubricTip: "Must explicitly link the botanical imagery to the feminist socio-political struggle."
      }
    ],
    isPhase1Priority: false,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT (POETRY) — FOG
  // =========================================================================
  {
    id: "ff-p5-fog",
    title: "Fog",
    book: "First Flight (Poetry)",
    type: "poem",
    chapterNo: 5,
    author: "Carl Sandburg",
    genre: "Imagist Nature Lyric",
    theme: "The stealthy, silent, and transient nature of natural phenomena.",
    funToddlerHook: {
      tagline: "The Fog that Crept in on Little Cat Paws!",
      funnyStory: "Have you ever watched a stealthy kitten sneak into a room? It makes zero noise! It sits on its tiny haunches, stares with big calm eyes at everything, and then poof—it quietly slips away! That is exactly what the morning white fog does to an entire giant city harbor!",
      ahaLesson: "Nature doesn't have to shout to be powerful. The quietest things are often the most magical.",
      emoji: "🌫️"
    },
    deepExplanation: "Carl Sandburg's six-line masterpiece 'Fog' is one of the purest examples of American Imagist poetry.\n\nSandburg creates a seamless, extended metaphor comparing dense sea fog to a quiet, independent cat. The fog arrives stealthily 'on little cat feet', without warning, engine noise, or disturbance. It blankets the harbor, ships, docks, and urban city streets. It perches silently 'on silent haunches', observing the hustle and bustle below with calm, feline detachment. Then, just as unpredictably as it arrived, it dissolves and 'moves on'.\n\nThere is no rhyme scheme, rigid meter, or elaborate decoration. Sandburg captures the mysterious, atmospheric transience of nature through minimal, precise visual imagery.",
    bulletSummary: [
      "The fog arrives silently and unpredictably, mirroring a stealthy cat's paws.",
      "It envelopes the harbor waters and city buildings under a quiet blanket.",
      "It sits looking over the landscape on 'silent haunches' with feline detachment.",
      "Without making a sound, it dissipates and moves away.",
      "Key poetic style: Imagism, extended metaphor, concise free verse."
    ],
    hardWords: [
      { word: "Haunches", pronunciation: "HAWN-chiz", partOfSpeech: "noun", meaning: "The hips, thighs, or buttocks of an animal when sitting", contextSentence: "It sits looking over harbor and city on silent haunches.", synonyms: ["hindquarters", "hips"] }
    ],
    keyQuotes: [
      { quote: "The fog comes on little cat feet.", speaker: "Carl Sandburg", context: "Opening iconic line establishing the feline metaphor." }
    ],
    examinerTraps: [
      {
        trapTitle: "Identify the primary figure of speech in Sandburg's 'Fog'.",
        commonMistake: "Calling it a simile.",
        correctCbseApproach: "State that it is an extended metaphor (or personification): the fog is directly compared to a cat without using 'like' or 'as'.",
        penaltyRisk: "Lose 1 mark for confusing metaphor with simile."
      }
    ],
        stanzaBreakdown: [
      {
            "stanzaNumber": 1,
            "originalLines": [
                  "The fog comes",
                  "on little cat feet."
            ],
            "simpleParaphrase": "The dense morning fog rolls into the city noiselessly and stealthily, just like the soft, cushioned paws of a kitten.",
            "poeticDevices": [
                  {
                        "device": "Extended Metaphor",
                        "easyDefinition": "Comparing two unlike things throughout a poem",
                        "lineExample": "'The fog comes on little cat feet.'",
                        "explanation": "Compares the arrival of the fog directly to a cat without using 'like' or 'as'."
                  },
                  {
                        "device": "Personification",
                        "easyDefinition": "Giving animal attributes to natural phenomena",
                        "lineExample": "'cat feet'",
                        "explanation": "Gives living paws to a weather condition."
                  }
            ]
      },
      {
            "stanzaNumber": 2,
            "originalLines": [
                  "It sits looking",
                  "over harbor and city",
                  "on silent haunches",
                  "and then moves on."
            ],
            "simpleParaphrase": "It sits calmly gazing over the harbor docks and urban cityscape on its quiet hind legs, and then silently slips away.",
            "poeticDevices": [
                  {
                        "device": "Visual Imagery",
                        "easyDefinition": "Creating a mental picture",
                        "lineExample": "'looking over harbor and city on silent haunches'",
                        "explanation": "Paints a vivid picture of quiet, detached feline observation."
                  },
                  {
                        "device": "Enjambment",
                        "easyDefinition": "Unbroken lines flowing together",
                        "lineExample": "Lines 3 through 6 run into each other",
                        "explanation": "Creates the slow, fluid, seamless drift of the fog blanket."
                  }
            ]
      }
],
    allPoeticDevicesGlossary: [
      {
            "device": "Extended Metaphor",
            "easyDefinition": "A comparison between two unlike things that spans the entire poem without 'like' or 'as'.",
            "whereUsedInPoem": "Lines 1-6 (The fog is directly compared to a silent cat)",
            "explanation": "Sandburg captures the arrival, posture, and departure of the fog through the behavior of a domestic cat."
      },
      {
            "device": "Personification",
            "easyDefinition": "Giving human or living animal traits to natural phenomena.",
            "whereUsedInPoem": "Line 2 ('little cat feet') and Line 4 ('on silent haunches')",
            "explanation": "The inanimate fog is animated with animal paws ('feet') and sitting thighs ('haunches')."
      },
      {
            "device": "Enjambment",
            "easyDefinition": "Sentences running continuously into next lines without terminal punctuation.",
            "whereUsedInPoem": "Lines 3 to 6 ('It sits looking... / over harbor and city / on silent haunches / and then moves on.')",
            "explanation": "Creates a calm, unbroken visual panorama mirroring the slow drift of the mist."
      }
],
    keywordsList: [
      "little cat feet",
      "silent haunches",
      "harbor and city",
      "moves on",
      "imagism",
      "stealth",
      "transience",
      "feline detachment",
      "conciseness"
],
    idiomsAndPhrases: [
      {
            "phrase": "On little cat feet",
            "meaning": "Arriving stealthily, noiselessly, and gently without drawing attention",
            "contextSentence": "The dense morning fog rolls in on little cat feet over the sleeping harbor."
      },
      {
            "phrase": "On silent haunches",
            "meaning": "Sitting quietly on bent hindquarters in a calm, observing posture",
            "contextSentence": "Like an aloof cat, the fog perches on silent haunches overlooking the city."
      },
      {
            "phrase": "Moves on",
            "meaning": "Dissolving, disappearing, or continuing forward without linger or farewell",
            "contextSentence": "Without a word or sound, the transient fog simply moves on."
      }
],
boardQAs: [
      {
        id: "p5-q1-fog",
        question: "How does Carl Sandburg compare the fog to a cat? What qualities do they share?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Sandburg establishes a seamless comparison between the fog and a cat based on three shared attributes: stealth, posture, and transience. The fog arrives silently on 'little cat feet' without disturbance; it sits quietly 'on silent haunches' calmly observing harbor and city; and finally, it departs mysteriously without leaving a trace.",
        keyKeywords: ["stealthy arrival", "little cat feet", "silent haunches", "detached observation", "mysterious departure"],
        examinerRubricTip: "Mention all three stages: arrival, sitting posture, and departure."
      }
    ],
    isPhase1Priority: false,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT (POETRY) — THE TALE OF CUSTARD THE DRAGON
  // =========================================================================
  {
    id: "ff-p6-custard-the-dragon",
    title: "The Tale of Custard the Dragon",
    book: "First Flight (Poetry)",
    type: "poem",
    chapterNo: 6,
    author: "Ogden Nash",
    genre: "Mock-Heroic Comic Ballad",
    theme: "True inner courage versus superficial boasting; real heroism reveals itself in genuine crisis.",
    funToddlerHook: {
      tagline: "The Crybaby Dragon who Ate the Pirate in One Gulp!",
      funnyStory: "Little Belinda lived in a white house with a black kitten named Ink, a gray mouse named Blink, a yellow dog named Mustard, and a huge dragon named Custard. Ink and Blink bragged they could chase lions! Mustard bragged he was brave as a tiger! But poor Custard always cried for a nice safe cage. One day, a scary pirate with guns and cutlasses climbed through the window! Ink, Blink, and Mustard ran away screaming like scared babies! Guess who jumped up, snorted fire like an engine, and ATE the pirate whole? Custard the Dragon!",
      ahaLesson: "People who brag the loudest are usually the first to run away. True heroes don't boast—they act when danger arrives!",
      emoji: "🐉"
    },
    deepExplanation: "Ogden Nash's whimsical ballad parodies traditional heroic epics to expose the difference between bravado and real courage.\n\nBelinda lived in a white house with four pets: Ink (a black kitten), Blink (a tiny mouse), Mustard (a fierce yellow dog), and Custard (a dragon). The household constantly boasted of their fearless valor: Mustard was brave as a bear, and Ink and Blink chased lions down stairs. In contrast, Custard was timid, crying perpetually for a nice, safe cage, earning endless mockery from Belinda and the pets.\n\nThe dynamic reverses abruptly when a ruthless pirate armed with two pistols and a glittering cutlass breaks in. Paralyzed with terror, Mustard yelps and bolts, Blink flees into a mousehole, and Ink hides in the basement. Custard alone charges into battle: snorting like an engine, clashing his spiked tail like irons in a dungeon, he pounces on the pirate like a robin on a worm and devours him in one gulp.\n\nAfter the crisis passes, Belinda hugs Custard, yet within minutes, Mustard, Ink, and Blink invent excuses, claiming they would have been ten times braver if not flustered. Custard humbly agrees that everyone is braver than him, highlighting the quiet grace of authentic heroes.",
    bulletSummary: [
      "Belinda lives in a white house with Ink (cat), Blink (mouse), Mustard (dog), and Custard (dragon).",
      "Everyone brags about their immense courage while teasing Custard for wanting a safe cage.",
      "A pirate breaks into the house carrying pistols and a cutlass between his teeth.",
      "The boasting pets flee in absolute panic (dog runs, mouse hides, cat flees to cellar).",
      "Custard charges fearless, snorting fire, and devours the pirate whole.",
      "After the victory, the pets make excuses and resume their empty boasting; Custard humbly agrees."
    ],
    hardWords: [
      { word: "Cutlass", pronunciation: "KUT-luhs", partOfSpeech: "noun", meaning: "A short, heavy sword with a curved blade used by sailors and pirates", contextSentence: "He held in his teeth a cutlass bright.", synonyms: ["saber", "broadsword"] },
      { word: "Flustered", pronunciation: "FLUS-turd", partOfSpeech: "adjective", meaning: "Agitated, confused, or nervous", contextSentence: "We'd have been three times as brave, we hadn't been flustered.", synonyms: ["rattled", "discomposed", "flurried"] }
    ],
    keyQuotes: [
      { quote: "Belinda was as brave as a barrel full of bears... But Custard cried for a nice safe cage.", speaker: "Ogden Nash", context: "Humorous contrast between boasting pets and timid dragon." },
      { quote: "Custard cried, 'I quite agree That everybody is braver than me.'", speaker: "Custard", context: "Custard's supreme humility following his heroic rescue." }
    ],
    examinerTraps: [
      {
        trapTitle: "Define the genre of 'The Tale of Custard the Dragon'.",
        commonMistake: "Calling it a simple nursery fable.",
        correctCbseApproach: "Classify it as a 'mock-heroic ballad'—it uses traditional ballad stanza meter and heroic battle language to tell a comical, satirical story.",
        penaltyRisk: "Lose 1 mark on literary genre."
      }
    ],
        stanzaBreakdown: [
      {
            "stanzaNumber": 1,
            "originalLines": [
                  "Belinda lived in a little white house,",
                  "With a little black kitten and a little gray mouse,",
                  "And a little yellow dog and a little red wagon,",
                  "And a realio, trulio, little pet dragon."
            ],
            "simpleParaphrase": "Belinda lived in a cozy white house with four pets: a black kitten, a gray mouse, a yellow puppy, a toy red wagon, and a real, genuine little dragon named Custard.",
            "poeticDevices": [
                  {
                        "device": "Repetition",
                        "easyDefinition": "Repeating words for rhythmic emphasis",
                        "lineExample": "'little' repeated 5 times",
                        "explanation": "Creates a musical nursery ballad bounce."
                  },
                  {
                        "device": "Poetic License",
                        "easyDefinition": "Coining words for comical sound",
                        "lineExample": "'realio, trulio'",
                        "explanation": "Nash invents comical variations of 'really' and 'truly' to match meter."
                  }
            ]
      },
      {
            "stanzaNumber": 2,
            "originalLines": [
                  "Now the name of the little black kitten was Ink,",
                  "And the little gray mouse, she called him Blink,",
                  "And the little yellow dog was sharp as Mustard,",
                  "But the dragon was a coward, and she called him Custard."
            ],
            "simpleParaphrase": "The kitten was named Ink, the mouse Blink, the yellow dog was sharp as Mustard, but the dragon was deemed a timid coward and mockingly named Custard (soft as pudding).",
            "poeticDevices": [
                  {
                        "device": "Simile",
                        "easyDefinition": "Comparison using 'as'",
                        "lineExample": "'sharp as Mustard'",
                        "explanation": "Compares the dog's fiery temper to pungent mustard."
                  },
                  {
                        "device": "Rhyme Scheme",
                        "easyDefinition": "End rhyme pattern",
                        "lineExample": "aabb (Ink/Blink, Mustard/Custard)",
                        "explanation": "Standard lighthearted comic couplets."
                  }
            ]
      },
      {
            "stanzaNumber": 3,
            "originalLines": [
                  "Custard the dragon had big sharp teeth,",
                  "And spikes on top of him and scales underneath,",
                  "Mouth like a fireplace, chimney for a nose,",
                  "And realio, trulio daggers on his toes."
            ],
            "simpleParaphrase": "Custard had fearsome physical armor: dagger-like teeth, spikes on his back, armored belly scales, a mouth that breathed smoke like a fireplace, and lethal claws on his toes.",
            "poeticDevices": [
                  {
                        "device": "Simile & Metaphor",
                        "easyDefinition": "Direct and explicit comparisons",
                        "lineExample": "'Mouth like a fireplace, chimney for a nose'",
                        "explanation": "Compares his fiery breath to a fireplace and snorting nostrils to a chimney."
                  },
                  {
                        "device": "Metaphor",
                        "easyDefinition": "Direct comparison",
                        "lineExample": "'daggers on his toes'",
                        "explanation": "Compares sharp talons directly to razor daggers."
                  }
            ]
      },
      {
            "stanzaNumber": 4,
            "originalLines": [
                  "Suddenly, suddenly they heard a nasty sound,",
                  "And Mustard growled, and they all looked around.",
                  "Meowch! cried Ink, and ooh! cried Belinda,",
                  "For there was a pirate, climbing in the winda."
            ],
            "simpleParaphrase": "Out of nowhere, an alarming sound broke the silence. Mustard growled, Ink shrieked, and Belinda gasped as an armed pirate climbed through the window!",
            "poeticDevices": [
                  {
                        "device": "Onomatopoeia",
                        "easyDefinition": "Words imitating sounds",
                        "lineExample": "'Meowch!', 'ooh!', 'growled'",
                        "explanation": "Imitates the sudden screams of panic from the household."
                  },
                  {
                        "device": "Poetic License",
                        "easyDefinition": "Bending spelling for rhyme",
                        "lineExample": "'winda' instead of 'window'",
                        "explanation": "Misspells 'window' as 'winda' to rhyme with 'Belinda'."
                  }
            ]
      },
      {
            "stanzaNumber": 5,
            "originalLines": [
                  "Pistol in his left hand, pistol in his right,",
                  "And he held in his teeth a cutlass bright,",
                  "His beard was black, one leg was wood;",
                  "It was clear that the pirate meant no good."
            ],
            "simpleParaphrase": "The terrifying pirate held loaded pistols in both hands, gripped a sharp curved sword between his teeth, had a thick black beard and a wooden peg-leg, clearly arriving with murderous intent.",
            "poeticDevices": [
                  {
                        "device": "Visual Imagery",
                        "easyDefinition": "Words creating a vivid picture",
                        "lineExample": "'pistol in his left hand... cutlass bright... wooden leg'",
                        "explanation": "Paints a textbook pirate caricature straight out of swashbuckling adventures."
                  },
                  {
                        "device": "Alliteration",
                        "easyDefinition": "Repeating starting sounds",
                        "lineExample": "'beard was black'",
                        "explanation": "Repetition of /b/ creates a dark, ominous portrait."
                  }
            ]
      },
      {
            "stanzaNumber": 6,
            "originalLines": [
                  "Belinda paled, and she cried Help! Help!",
                  "But Mustard fled with a terrified yelp,",
                  "Ink trickled down to the bottom of the household,",
                  "And little mouse Blink strategically mouseholed."
            ],
            "simpleParaphrase": "Belinda turned white with fear and screamed for help! The boastful dog Mustard fled whimpering, Ink hid in the dark cellar, and the tiny mouse Blink scurried into a mousehole.",
            "poeticDevices": [
                  {
                        "device": "Poetic License / Comic Coinage",
                        "easyDefinition": "Inventing a word",
                        "lineExample": "'strategically mouseholed'",
                        "explanation": "Humorously turns the noun 'mousehole' into a military-style strategic verb."
                  },
                  {
                        "device": "Situational Irony",
                        "easyDefinition": "Actions opposite to previous claims",
                        "lineExample": "All three 'brave' pets flee in cowardly panic",
                        "explanation": "Exposes the total emptiness of their earlier boasts."
                  }
            ]
      },
      {
            "stanzaNumber": 7,
            "originalLines": [
                  "But up jumped Custard, snorting like an engine,",
                  "Clashed his tail like irons in a dungeon,",
                  "With a clatter and a clank and a jangling squirm,",
                  "He went at the pirate like a robin at a worm."
            ],
            "simpleParaphrase": "Only Custard sprang forward! Snorting hot fire like a steam locomotive and clashing his armored tail like iron chains in a dungeon, he pounced on the pirate just like a hungry robin strikes a garden worm!",
            "poeticDevices": [
                  {
                        "device": "Simile",
                        "easyDefinition": "Comparison using 'like'",
                        "lineExample": "'snorting like an engine' / 'like a robin at a worm'",
                        "explanation": "Compares Custard's battle charge to heavy industrial power and predatory speed."
                  },
                  {
                        "device": "Onomatopoeia",
                        "easyDefinition": "Sound words",
                        "lineExample": "'clatter and a clank and a jangling squirm'",
                        "explanation": "Recreates the violent metallic clatter of the dragon's armored scales."
                  }
            ]
      },
      {
            "stanzaNumber": 8,
            "originalLines": [
                  "The pirate gaped at Belinda's dragon,",
                  "And gulped some grog from his pocket flagon,",
                  "He fired two bullets, but they didn't hit,",
                  "And Custard gobbled him, every bit."
            ],
            "simpleParaphrase": "The stunned pirate stared open-mouthed at the ferocious dragon, gulped liquor from his flask, fired two futile shots that missed, and Custard swallowed him whole in one big gulp!",
            "poeticDevices": [
                  {
                        "device": "Alliteration",
                        "easyDefinition": "Repeating starting sounds",
                        "lineExample": "'gulped some grog'",
                        "explanation": "Repetition of /g/ captures the desperate swig of alcohol."
                  },
                  {
                        "device": "Climax / Resolution",
                        "easyDefinition": "The peak moment of dramatic action",
                        "lineExample": "'And Custard gobbled him, every bit.'",
                        "explanation": "Humorous, swift end to the pirate threat."
                  }
            ]
      }
],
    allPoeticDevicesGlossary: [
      {
            "device": "Simile",
            "easyDefinition": "Comparing two different things explicitly using 'like' or 'as'.",
            "whereUsedInPoem": "Stanza 10 ('snorting like an engine') and Stanza 11 ('went at the pirate like a robin at a worm')",
            "explanation": "Compares Custard's battle breaths to a steam engine and his swift attack to a robin snapping up a worm."
      },
      {
            "device": "Repetition",
            "easyDefinition": "Repeating words or phrases for comic or musical rhythm.",
            "whereUsedInPoem": "Stanza 1 ('little' repeated multiple times) and Stanza 14 ('braver than me')",
            "explanation": "Accentuates the nursery ballad charm and highlights Custard's enduring humility."
      },
      {
            "device": "Onomatopoeia",
            "easyDefinition": "Words that imitate sounds.",
            "whereUsedInPoem": "Stanza 8 ('weeck' for mouse laugh, 'yelp' for dog, 'snort' for dragon)",
            "explanation": "Brings the comic domestic chaos vividly to life with acoustic sound effects."
      },
      {
            "device": "Hyperbole",
            "easyDefinition": "Extreme, exaggerated statements not meant to be taken literally.",
            "whereUsedInPoem": "Stanza 3 ('Ink and Blink chased lions down the stairs')",
            "explanation": "Exaggerates the pets' imaginary bravado to make their subsequent cowardice all the more hilarious."
      }
],
    keywordsList: [
      "Custard",
      "Belinda",
      "Ink and Blink",
      "Mustard",
      "safe cage",
      "pirate",
      "cutlass",
      "snorted like an engine",
      "robin on a worm",
      "mock-heroic ballad",
      "true courage vs boasting"
],
    idiomsAndPhrases: [
      {
            "phrase": "Brave as a barrel full of bears",
            "meaning": "Extremely fearless, bold, and roaring with formidable courage",
            "contextSentence": "Belinda constantly bragged that she was brave as a barrel full of bears."
      },
      {
            "phrase": "Chase lions down the stairs",
            "meaning": "Claiming to perform impossible feats of bravery without flinching",
            "contextSentence": "Ink the kitten and Blink the mouse boasted they could chase lions down the stairs."
      },
      {
            "phrase": "Went off in a panic",
            "meaning": "Fleeing instantly in utter terror when real danger appears",
            "contextSentence": "When the armed pirate broke in, Mustard yelped and fled in a panic."
      }
],
boardQAs: [
      {
        id: "p6-q1-custard",
        question: "How does the poet satirize empty bravado through the actions of Belinda's pets during the pirate attack?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "Ogden Nash satirizes boasting by contrasting rhetoric with reality. Belinda and her pets claimed extraordinary bravery during peaceful times—chasing lions down stairs and roaring like bears. But when real danger struck in the form of an armed pirate, their bravado collapsed into cowardly panic: Mustard fled yelping, Blink dove into a hole, and Ink retreated to the basement. Only the mocked dragon showed genuine courage.",
        keyKeywords: ["satirizes empty bravado", "rhetoric vs reality", "cowardly panic", "genuine courage", "mocked dragon"],
        examinerRubricTip: "Contrasts the pets' boastful claims before the attack with their cowardly flight during it."
      }
    ],
    isPhase1Priority: false,
    isTestSeries1: false
  },

  // =========================================================================
  // FIRST FLIGHT (POETRY) — FOR ANNE GREGORY
  // =========================================================================
  {
    id: "ff-p7-for-anne-gregory",
    title: "For Anne Gregory",
    book: "First Flight (Poetry)",
    type: "poem",
    chapterNo: 7,
    author: "William Butler Yeats (W.B. Yeats)",
    genre: "Philosophical Lyric / Dialectical Verse",
    theme: "The superficiality of physical attraction versus unconditional spiritual love.",
    funToddlerHook: {
      tagline: "Do You Love Me For My Soul, or Just My Beautiful Golden Hair?",
      funnyStory: "A pretty young girl named Anne Gregory had gorgeous honey-yellow hair that made every boy fall crazy in love with her. But Anne said: 'I don't want boys loving me just because my hair looks pretty! I will dye my hair ugly brown, black, or carrot-orange so they love ME for who I am inside!' But an old wise priest smiled and said: 'Little child, only God can love a person for their inner soul alone; humans always get tricked by yellow hair!'",
      ahaLesson: "People often judge others by outside looks, but real unconditional love sees straight into your heart.",
      emoji: "👱‍♀️"
    },
    deepExplanation: "W.B. Yeats's conversational dialogue explores the conflict between physical desire and transcendent spiritual love.\n\nIn the first stanza, the speaker addresses young Anne Gregory, explaining that young suitors are driven to despair by the magnificent 'great honey-coloured ramparts' of hair falling over her ears. They love her for her physical beauty alone and are blind to her true inner character.\n\nIn the second stanza, Anne rebels against this superficiality. She asserts that she can easily dye her hair brown, black, or carrot-orange so that young men might love her for herself alone and not for her yellow hair.\n\nIn the third stanza, the speaker concludes with the insight of an old religious sage who found a sacred text: only God possesses the divine grace to love a human being for their inner soul alone, regardless of external physical appearance ('not your yellow hair'). Human love is intrinsically susceptible to physical charm, while divine love is unconditional.",
    bulletSummary: [
      "Young men fall into despair over Anne's gorgeous honey-colored hair falling over her ears.",
      "The speaker notes that suitors love her external beauty rather than her true inner self.",
      "Anne proposes dyeing her hair brown, black, or carrot-orange to test sincere emotional love.",
      "An old religious man found a sacred text proving only God loves a person for their soul alone.",
      "Human beings are bound to external aesthetics; only the Divine loves unconditionally."
    ],
    hardWords: [
      { word: "Ramparts", pronunciation: "RAM-parts", partOfSpeech: "noun", meaning: "Defensive wall of a castle; here, metaphorically used for thick hair falling over ears", contextSentence: "Those great honey-coloured ramparts at your ear.", synonyms: ["fortifications", "barriers", "curtains"] }
    ],
    keyQuotes: [
      { quote: "Love you for yourself alone And not your yellow hair.", speaker: "Speaker / Anne Gregory", context: "The central philosophical dilemma of the poem." },
      { quote: "Only God, my dear, Could love you for yourself alone And not your yellow hair.", speaker: "Speaker", context: "The climactic spiritual revelation of the text." }
    ],
    examinerTraps: [
      {
        trapTitle: "Explain the metaphor 'ramparts at your ear'.",
        commonMistake: "Thinking Anne wore military armor or ear protection.",
        correctCbseApproach: "Explain that 'ramparts' metaphorically compares Anne's thick, golden locks of hair framing her ears to the protective stone walls of a fortress, guarding her inner personality.",
        penaltyRisk: "Lose 1 mark on architectural metaphor interpretation."
      }
    ],
        stanzaBreakdown: [
      {
            "stanzaNumber": 1,
            "originalLines": [
                  "Never shall a young man,",
                  "Thrown into despair",
                  "By those great honey-coloured",
                  "Ramparts at your ear,",
                  "Love you for yourself alone",
                  "And not your yellow hair."
            ],
            "simpleParaphrase": "A young suitor driven to romantic despair by the magnificent golden walls of hair framing your ears will always love you for your physical beauty alone, and never for your inner soul.",
            "poeticDevices": [
                  {
                        "device": "Metaphor",
                        "easyDefinition": "Direct comparison",
                        "lineExample": "'great honey-coloured ramparts at your ear'",
                        "explanation": "Anne's thick golden hair is compared to the stone ramparts (defensive walls) of a castle."
                  },
                  {
                        "device": "Rhyme Scheme",
                        "easyDefinition": "End rhyme pattern",
                        "lineExample": "abcbdb",
                        "explanation": "Six-line ballad stanza standard in Yeats's conversational lyrics."
                  },
                  {
                        "device": "Alliteration",
                        "easyDefinition": "Repeating starting sounds",
                        "lineExample": "'Never shall... despair'",
                        "explanation": "Creates a melancholy, reflective tone."
                  }
            ]
      },
      {
            "stanzaNumber": 2,
            "originalLines": [
                  "But I can get a hair-dye",
                  "And set such colour there,",
                  "Brown, or black, or carrot,",
                  "That young men in despair",
                  "May love me for myself alone",
                  "And not my yellow hair."
            ],
            "simpleParaphrase": "Anne replies defiantly: 'I can easily dye my hair brown, black, or carrot-orange so that young men will look past my yellow hair and learn to love me purely for my inner personality!'",
            "poeticDevices": [
                  {
                        "device": "Alliteration",
                        "easyDefinition": "Repeating starting sounds",
                        "lineExample": "'set such'",
                        "explanation": "Repetition of soft /s/ sound."
                  },
                  {
                        "device": "Symbolism",
                        "easyDefinition": "Colors representing external changes",
                        "lineExample": "'Brown, or black, or carrot'",
                        "explanation": "Colors symbolize superficial alterations of appearance that do not alter the inner self."
                  },
                  {
                        "device": "Refrain / Repetition",
                        "easyDefinition": "Repeated line for emphasis",
                        "lineExample": "'love me for myself alone / And not my yellow hair'",
                        "explanation": "Reinforces Anne's passionate yearning for authentic love."
                  }
            ]
      },
      {
            "stanzaNumber": 3,
            "originalLines": [
                  "I heard an old religious man",
                  "But yesternight declare",
                  "That he had found a text to prove",
                  "That only God, my dear,",
                  "Could love you for yourself alone",
                  "And not your yellow hair."
            ],
            "simpleParaphrase": "The speaker gently concludes: 'Just yesterday, an old religious sage declared that he found an ancient sacred manuscript proving that only God has the divine capacity to love a human being for their soul alone, looking past external yellow hair.'",
            "poeticDevices": [
                  {
                        "device": "Alliteration",
                        "easyDefinition": "Repeating starting sounds",
                        "lineExample": "'love you for yourself alone'",
                        "explanation": "Repetition of /l/ sound."
                  },
                  {
                        "device": "Allusion",
                        "easyDefinition": "Reference to a text or spiritual figure",
                        "lineExample": "'found a text to prove / That only God...'",
                        "explanation": "Invokes theological scripture to argue that unconditional love is divine, not human."
                  },
                  {
                        "device": "Climactic Epiphany",
                        "easyDefinition": "The highest philosophical revelation",
                        "lineExample": "'That only God, my dear, Could love you for yourself alone'",
                        "explanation": "Resolves the debate with the profound truth of human fallibility versus divine grace."
                  }
            ]
      }
],
    allPoeticDevicesGlossary: [
      {
            "device": "Metaphor",
            "easyDefinition": "Comparing two different things directly without 'like' or 'as'.",
            "whereUsedInPoem": "Stanza 1, Line 2 ('honey-coloured ramparts at your ear')",
            "explanation": "Anne's voluminous golden hair is compared to the protective stone walls of a fortress."
      },
      {
            "device": "Alliteration",
            "easyDefinition": "Repeating consonant sounds at the start of words.",
            "whereUsedInPoem": "Stanza 1 ('set such') and Stanza 3 ('love you for yourself alone')",
            "explanation": "Enhances the gentle, contemplative rhythm of the dialogue."
      },
      {
            "device": "Anaphora",
            "easyDefinition": "Repeating words at the start of lines.",
            "whereUsedInPoem": "Lines 5-6 ('Love you for yourself alone / And not your yellow hair')",
            "explanation": "Underlines the central contrast between inner soul and outer appearance."
      }
],
    keywordsList: [
      "honey-coloured ramparts",
      "yellow hair",
      "love for yourself alone",
      "hair dye",
      "carrot or black",
      "old religious man",
      "declaration of sacred text",
      "unconditional love",
      "spiritual vs physical beauty"
],
    idiomsAndPhrases: [
      {
            "phrase": "Love you for yourself alone",
            "meaning": "To love someone purely for their inner soul and character without regard to outer looks",
            "contextSentence": "Anne Gregory longs for someone who will love her for herself alone, not her golden locks."
      },
      {
            "phrase": "Thrown into despair",
            "meaning": "Overwhelmed with intense sadness or romantic anguish",
            "contextSentence": "Young suitors are thrown into despair by Anne's unattainable physical charm."
      }
],
boardQAs: [
      {
        id: "p7-q1-anne",
        question: "What is the central philosophical debate in W.B. Yeats's 'For Anne Gregory'?",
        marks: 3,
        type: "SAQ",
        modelAnswer: "The central philosophical debate explores whether human beings can love someone purely for their inner spiritual essence, or whether romantic attraction is irrevocably tied to external physical beauty. While Anne Gregory longs to be loved for her soul alone—even offering to dye her hair brown or carrot-orange—the speaker reveals that only God has the divine capacity for unconditional spiritual love, whereas humans remain captivated by external aesthetics.",
        keyKeywords: ["inner spiritual essence", "external physical beauty", "unconditional love", "honey-coloured ramparts", "divine love vs human attraction"],
        examinerRubricTip: "Contrast the divine capacity for soul-love with human susceptibility to external beauty."
      }
    ],
    isPhase1Priority: false,
    isTestSeries1: false
  }
];
