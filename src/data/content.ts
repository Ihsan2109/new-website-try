import { Product, Offer, Review } from '../types';

export const CLINIC_INFO = {
  name: {
    en: 'M.S Ayurvedic Centre',
    hi: 'एम.एस आयुर्वेदिक सेंटर',
  },
  doctorName: {
    en: 'Dr. Mobin',
    hi: 'डॉ. मोबिन',
  },
  qualification: {
    en: 'B.U.M.S., C.M.S. (Ed.), M.H.T. (Medical Hijama Therapy Specialist)',
    hi: 'बी.यू.एम.एस., सी.एम.एस. (एड.), एम.एच.टी. (मेडिकल हिजामा थेरेपी विशेषज्ञ)',
  },
  university: {
    en: 'Jamia Hamdard / Certified M.H.T. Board of Regimenal Medicine',
    hi: 'जामिया हमदर्द / प्रमाणित एम.एच.टी. यूनानी एवं हिजामा चिकित्सा बोर्ड',
  },
  registrationNumber: {
    en: 'D-38491 / DEL-AYUSH',
    hi: 'डी-38491 / दिल्ली आयुष',
  },
  council: {
    en: 'Board of Ayurvedic and Unani Systems of Medicine & Hijama Society',
    hi: 'आयुर्वेदिक एवं यूनानी चिकित्सा प्रणाली बोर्ड एवं हिजामा सोसाइटी',
  },
  practiceSince: {
    en: 'Over 16 years of clinical practice',
    hi: '16 से अधिक वर्षों का नैदानिक अनुभव',
  },
  languages: {
    en: 'Hindi, Urdu, English',
    hi: 'हिन्दी, उर्दू, अंग्रेज़ी',
  },
  phone: '+91 98186 45928',
  phoneDisplay: '+91 98186 45928',
  whatsapp: '919818645928',
  mapsUrl: 'https://maps.app.goo.gl/BTb9bBwZTfp2PpBcA',
  address: {
    en: 'M.S Ayurvedic Centre by Dr. Mobin, Main Pusta Road, Sector 62 / 63, Noida, Gautam Buddha Nagar, Delhi NCR 201014',
    hi: 'एम.एस आयुर्वेदिक सेंटर द्वारा डॉ. मोबिन, मेन पुस्ता रोड, सेक्टर 62 / 63, नोएडा, गौतम बुद्ध नगर, दिल्ली एनसीआर 201014',
  },
  landmark: {
    en: 'Near Pusta Road, Easy access from Noida, Ghaziabad, Indirapuram & East Delhi',
    hi: 'पुस्ता रोड के निकट, नोएडा, गाज़ियाबाद, इंदिरापुरम व पूर्वी दिल्ली से सीधा संपर्क',
  },
  parking: {
    en: 'Dedicated parking available for cars and two-wheelers in front of the clinic.',
    hi: 'क्लिनिक के ठीक सामने दोपहिया एवं चार पहिया वाहनों के लिए सुरक्षित पार्किंग सुविधा।',
  },
  hours: {
    en: 'Monday to Saturday: 10:00 am – 8:00 pm (Sunday by prior appointment)',
    hi: 'सोमवार से शनिवार: सुबह 10:00 बजे से रात 8:00 बजे तक (रविवार केवल पूर्व अपॉइंटमेंट से)',
  },
  social: {
    instagram: 'https://www.instagram.com/drmobin80?stkn=dzVzanU4ZGk5ZjEx',
    instagramHandle: '@drmobin80',
    facebook: 'https://www.facebook.com/share/188gTmips3/',
    facebookTitle: 'Dr. Mobin Official',
  },
  developer: {
    name: 'Md Ihsan Bharti',
    phone: '+918700442438',
    phoneDisplay: '+91 8700442438',
    whatsapp: '918700442438',
  },
};

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'prod-1',
    name: {
      en: 'Arsh-Harani Taila & Lepam (Piles Care Formula)',
      hi: 'अर्श-हरणी तैल एवं लेप (बवासीर राहत)',
    },
    category: 'anorectal',
    categoryLabel: {
      en: 'Anorectal Care',
      hi: 'गुदा रोग देखभाल',
    },
    description: {
      en: 'Traditional medicated herbal oil prepared with Neem, Haridra, Jatyadi, and Nirgundi. Soothes burning sensations, reduces local swelling, and promotes fissure healing.',
      hi: 'नीम, हरिद्रा, जात्यादि और निर्गुण्डी से निर्मित पारंपरिक औषधीय तैल। जलन शांत करता है, सूजन घटाता है और गुदा दरार (फिशर) को भरने में सहायक है।',
    },
    price: 480,
    mrp: 600,
    packSize: {
      en: '100 ml + 30 g Lepam',
      hi: '100 मिली + 30 ग्राम लेप',
    },
    inStock: true,
    indications: {
      en: ['External & internal piles discomfort', 'Anal fissure burning', 'Local irritation'],
      hi: ['बाहरी व अंदरूनी बवासीर में आराम', 'फिशर की जलन', 'गुदा में चुभन व खुजली'],
    },
    dosageNote: {
      en: 'Apply locally after sitz bath twice daily or as advised by Dr. Mobin.',
      hi: 'दिन में दो बार सिट्ज़ बाथ के बाद या डॉ. मोबिन के निर्देशानुसार लगाएँ।',
    },
    imageKey: 'herbalPreparations',
  },
  {
    id: 'prod-2',
    name: {
      en: 'Shodhan Triphala & Isabgol Shuddhi Churna',
      hi: 'शोधन त्रिफला एवं इसबगोल शुद्धि चूर्ण',
    },
    category: 'digestive',
    categoryLabel: {
      en: 'Digestive & Bowel Health',
      hi: 'पाचन एवं आंत स्वास्थ्य',
    },
    description: {
      en: 'Micronized digestive blend of Haritaki, Bibhitaki, Amalaki, Senna leaves, and psyllium husk. Regulates bowel movements naturally without cramping or dependency.',
      hi: 'हरीतकी, बिभीतक, आमलकी, सनाय पत्र और इसबगोल की भूसी का सूक्ष्म चूर्ण। बिना मरोड़ या आदत पड़े प्राकृतिक रूप से पेट साफ़ करता है।',
    },
    price: 320,
    mrp: 400,
    packSize: {
      en: '200 g Container',
      hi: '200 ग्राम डिब्बा',
    },
    inStock: true,
    indications: {
      en: ['Chronic constipation', 'Hard dry stools', 'Gas and abdominal bloating'],
      hi: ['पुरानी कब्ज़', 'कठिन शौच', 'पेट में गैस व भारीपन'],
    },
    dosageNote: {
      en: '1-2 teaspoons with lukewarm water at bedtime.',
      hi: 'सोने से पहले 1-2 चम्मच गुनगुने पानी के साथ।',
    },
    imageKey: 'herbalDispensary',
  },
  {
    id: 'prod-3',
    name: {
      en: 'Majun-e-Shahi (Classical Unani Vitality Electuary)',
      hi: 'माजून-ए-शाही (शास्त्रीय यूनानी वाइटैलिटी लेह)',
    },
    category: 'vitality',
    categoryLabel: {
      en: 'Vitality & Stamina',
      hi: 'ऊर्जा एवं पौरुष स्वास्थ्य',
    },
    description: {
      en: 'Original thick classical Unani electuary crafted with saffron (Zafran), pure honey, Safed Musli, Ashwagandha, and Salab panja. Restores reproductive strength and lasting vigor.',
      hi: 'असली यूनानी माजून जो जाफ़रान, शुद्ध मधु, सफ़ेद मूसली, अश्वगंधा और सालम पंजा से निर्मित गाढ़ा अवलेह है। देर तक टिकने और पौरुष बल बढ़ाने में अत्यंत लाभकारी।',
    },
    price: 850,
    mrp: 1100,
    packSize: {
      en: '250 g Glass Jar',
      hi: '250 ग्राम जार',
    },
    inStock: true,
    indications: {
      en: ['Lack of stamina and physical vigor', 'Premature debility', 'Stress-induced fatigue'],
      hi: ['सहनशक्ति व पौरुष की कमी', 'शीघ्र पतन व शारीरिक शिथिलता', 'तनाव जनित थकान'],
    },
    dosageNote: {
      en: '5 to 10 g with warm milk once or twice a day after meals.',
      hi: 'भोजन के बाद दिन में 1-2 बार 5 से 10 ग्राम गुनगुने दूध के साथ।',
    },
    imageKey: 'medicineMajun',
  },
  {
    id: 'prod-4',
    name: {
      en: 'Arq-e-Kasni & Jawarish Kamuni (Liver & Gut Regimen)',
      hi: 'अर्क-ए-कासनी एवं जवारिश कमूनी (लिवर व आंत योग)',
    },
    category: 'digestive',
    categoryLabel: {
      en: 'Digestive & Bowel Health',
      hi: 'पाचन एवं आंत स्वास्थ्य',
    },
    description: {
      en: 'Distilled botanical water of Chicory (Kasni) alongside classical Caraway-mint digestive paste. Reduces Pitta/heat, eases hyperacidity, and supports liver function.',
      hi: 'कासनी का अर्क और जीरा-पुदीना युक्त शास्त्रीय पाचक लेह। पित्त और गर्मी को शांत करता है, एसिडिटी घटाता है और यकृत (लिवर) को शक्ति देता है।',
    },
    price: 360,
    mrp: 450,
    packSize: {
      en: '500 ml Arq + 150 g Jawarish',
      hi: '500 मिली अर्क + 150 ग्राम जवारिश',
    },
    inStock: true,
    indications: {
      en: ['Acid reflux & heartburn', 'Sluggish liver', 'Loss of appetite'],
      hi: ['खट्टी डकारें व सीने में जलन', 'मंद यकृत', 'भूख की कमी'],
    },
    dosageNote: {
      en: '25 ml Arq with 5 g Jawarish after primary meals.',
      hi: 'मुख्य भोजन के बाद 25 मिली अर्क के साथ 5 ग्राम जवारिश लें।',
    },
    imageKey: 'herbalDispensary',
  },
  {
    id: 'prod-5',
    name: {
      en: 'Kshara Herb Sitz Bath Salts',
      hi: 'क्षार औषधीय सिट्ज़ बाथ चूर्ण',
    },
    category: 'anorectal',
    categoryLabel: {
      en: 'Anorectal Care',
      hi: 'गुदा रोग देखभाल',
    },
    description: {
      en: 'Specially processed herbal salts including Tankana, Sphatika, and Panchavalkala bark decoction salts. Relieves anal spasm, cleanses perineal area, and eases throbbing pain.',
      hi: 'टंकण, स्फटिका और पंचवल्कल छाल से तैयार औषधीय लवण। गुदा की ऐंठन कम करता है, स्वच्छता बनाए रखता है और असहनीय दर्द में राहत देता है।',
    },
    price: 290,
    mrp: 350,
    packSize: {
      en: '300 g Pouch',
      hi: '300 ग्राम पाउच',
    },
    inStock: true,
    indications: {
      en: ['Post-defecation pain', 'Fistula discharge care', 'Swollen hemorrhoidal tissue'],
      hi: ['शौच के बाद का तेज़ दर्द', 'भगंदर रिसाव में सफाई', 'मस्सों की सूजन'],
    },
    dosageNote: {
      en: 'Add two spoonfuls to warm water tub; sit for 10-15 minutes.',
      hi: 'गुनगुने पानी के टब में दो चम्मच मिलाकर 10-15 मिनट बैठें।',
    },
    imageKey: 'herbalPreparations',
  },
  {
    id: 'prod-6',
    name: {
      en: 'Mahasudarshan & Giloy Kwath Ghanvati',
      hi: 'महासुदर्शन एवं गिलोय क्वाथ घनवटी',
    },
    category: 'general',
    categoryLabel: {
      en: 'General Immunity & Chronic Illness',
      hi: 'प्रतिरोधक क्षमता एवं पुराने रोग',
    },
    description: {
      en: 'Concentrated water extract tablets of 54 herbs led by Tinospora cordifolia (Giloy) and Swertia chirata. Cleanses lingering toxins (Ama), purifies blood, and aids chronic low-grade fatigue.',
      hi: 'गिलोय और चिरायता प्रधान 54 जड़ी-बूटियों का सांद्रित घनवटी योग। शरीर से संचित आम दोष को साफ़ करता है, रक्त शुद्ध करता है और पुराने रोगों में सहायक है।',
    },
    price: 340,
    mrp: 420,
    packSize: {
      en: '60 Tablets Bottle',
      hi: '60 वटी की शीशी',
    },
    inStock: true,
    indications: {
      en: ['Recurrent infections', 'Sluggish metabolism', 'Joint aches and stiffness'],
      hi: ['बार-बार होने वाला संक्रमण', 'धीमा मेटाबॉलिज्म', 'जोड़ों में जकड़न व दर्द'],
    },
    dosageNote: {
      en: '1 tablet twice daily after meals with warm water.',
      hi: 'दिन में दो बार भोजन के बाद गुनगुने पानी से 1 वटी लें।',
    },
    imageKey: 'herbalDispensary',
  },
  {
    id: 'prod-7',
    name: {
      en: 'Swarna Bhasma & Unani Amber Rasayana (High Potency)',
      hi: 'स्वर्ण भस्म एवं यूनानी अंबर रसायन (विशेष योग)',
    },
    category: 'vitality',
    categoryLabel: {
      en: 'Vitality & Stamina',
      hi: 'ऊर्जा एवं पौरुष स्वास्थ्य',
    },
    description: {
      en: 'Authentic classical mineral-herbal formulation combining certified Swarna Bhasma, Unani Processed Amber Bhasam, and Trivang Bhasma in concentrated herbal syrup. Deeply rejuvenates cellular vitality and counters chronic debility.',
      hi: '100% शुद्ध स्वर्ण भस्म, यूनानी पद्धति से शोधित अंबर भस्म और त्रिवंग भस्म का शास्त्रीय योग। कोशिकीय ऊर्जा को पुनर्जीवित करता है, शुक्र धातु को पुष्ट करता है और पुरानी कमज़ोरी मिटाता है।',
    },
    price: 1850,
    mrp: 2400,
    packSize: {
      en: '1g Amber Bhasam + 60g Rasayana',
      hi: '1 ग्राम अंबर भस्म + 60 ग्राम रसायन',
    },
    inStock: true,
    indications: {
      en: ['Chronic exhaustion & nerve weakness', 'Azoospermia & low vitality', 'Long-standing sexual weakness'],
      hi: ['पुरानी नसों की कमज़ोरी', 'शुक्राणु दुर्बलता व वीर्य दोष', 'पुरानी नामर्दी व पौरुष ह्रास'],
    },
    dosageNote: {
      en: 'Take with spoon with milk as prescribed by Dr. Mobin.',
      hi: 'दूध के साथ डॉक्टर मोबिन के परामर्श अनुसार लें।',
    },
    imageKey: 'medicineBhasma',
  },
  {
    id: 'prod-8',
    name: {
      en: 'Boosts Vigour & Vitality Capsules + Restorative Massage Oil',
      hi: 'बूस्ट्स पौरुष वाइटैलिटी कैप्सूल + रेस्टोरेटिव मसाज ऑयल',
    },
    category: 'vitality',
    categoryLabel: {
      en: 'Vitality & Stamina',
      hi: 'ऊर्जा एवं पौरुष स्वास्थ्य',
    },
    description: {
      en: 'Dual internal-external therapeutic regimen. Capsules contain Ashwagandha (Withania somnifera), Shatavari, Kaunch Beej (Mucuna pruriens), Safed Musali, and Kokilaksha in pure cow milk and ghee base. Paired with herbal massage oil with clove, cinnamon, and Ashwagandha oil extracts.',
      hi: 'दोहरी आंतरिक एवं बाह्य चिकित्सा प्रणाली। कैप्सूल में अश्वगंधा, शतावरी, कौंच बीज, सफ़ेद मूसली और कोकिलाक्ष गोघृत व दुग्ध भावित हैं। साथ में लौंग, दालचीनी व अश्वगंधा तैल युक्त विशेष मालिश तेल।',
    },
    price: 1450,
    mrp: 1900,
    packSize: {
      en: '60 Capsules + 50 ml Medicated Oil',
      hi: '60 कैप्सूल + 50 मिली औषधीय तैल',
    },
    inStock: true,
    indications: {
      en: ['Nerve weakness & loss of stiffness', 'Physical stamina support', 'Restorative muscular rejuvenation'],
      hi: ['नसों की शिथिलता व तनाव की कमी', 'शारीरिक स्फूर्ति व ताज़गी', 'मांसपेशियों का पुनर्जीवन'],
    },
    dosageNote: {
      en: '1 capsule morning & night with milk; apply 5-6 drops oil locally at bedtime.',
      hi: '1 कैप्सूल सुबह-शाम दूध से; रात में 5-6 बूँद तैल हल्के हाथों से लगाएँ।',
    },
    imageKey: 'medicineVitality',
  },
];

export const OFFERS_DATA: Offer[] = [
  {
    id: 'offer-1',
    title: {
      en: '30-Day Comprehensive Anorectal & Piles Recovery Course',
      hi: '30-दिवसीय सम्पूर्ण बवासीर एवं गुदा स्वास्थ्य कार्यक्रम',
    },
    summary: {
      en: 'Complete non-surgical protocol combining internal anti-inflammatory preparations, local medicated oils, herbal sitz salts, and personalized dietary mapping.',
      hi: 'आंतरिक सूजनरोधी औषधियाँ, औषधीय तैल, सिट्ज़ बाथ लवण और व्यक्तिगत आहार तालिका का सम्पूर्ण गैर-सर्जिकल प्रोटोकॉल।',
    },
    details: {
      en: 'Designed specifically for internal/external piles, recurrent fissures, and post-bowel distress. Includes initial in-person assessment, full 30-day medicinal preparations, and regular clinical reviews.',
      hi: 'अंदरूनी/बाहरी बवासीर, बार-बार होने वाले फिशर और शौच के दर्द के लिए विशेष रूप से तैयार। इसमें प्रारंभिक जाँच, 30 दिन की सभी औषधियाँ और नियमित समीक्षा शामिल है।',
    },
    duration: {
      en: '30 Days Course',
      hi: '30 दिन का कोर्स',
    },
    price: '₹5,000 (inclusive of consultation & 30-day medicines)',
    featured: true,
    included: {
      en: [
        'Detailed one-on-one examination with Dr. Mobin',
        '30-day internal herbal anti-inflammatory formula',
        'Arsh-Harani Taila medicated local applicator bottle',
        'Customized fiber & hydration regimen suited to your digestive fire',
        'Follow-up evaluation on Day 15 and Day 30',
      ],
      hi: [
        'डॉ. मोबिन के साथ गहन व्यक्तिगत जाँच',
        '30 दिनों की आंतरिक सूजनरोधी आयुर्वेदिक औषधि',
        'अर्श-हरणी तैल औषधीय लेप व एप्लीकेटर',
        'आपकी जठराग्नि के अनुकूल विशिष्ट फाइबर व जल दिनचर्या',
        '15वें और 30वें दिन फॉलो-अप समीक्षा',
      ],
    },
    validity: {
      en: 'Currently accepting patients',
      hi: 'वर्तमान में पंजीकरण जारी है',
    },
  },
  {
    id: 'offer-2',
    title: {
      en: 'Constitutional Gut & Metabolic Detox Regimen (Deepam-Pachanam)',
      hi: 'प्रकृति अनुसार पाचन एवं आम दोष शोधन कार्यक्रम',
    },
    summary: {
      en: 'A 4-week structured Unani & Ayurvedic therapeutic programme for chronic acidity, IBS, sluggish liver, and chronic constipation.',
      hi: 'पुरानी एसिडिटी, आईबीएस, यकृत की सुस्ती और कब्ज़ के लिए 4 सप्ताह का संरचित यूनानी एवं आयुर्वेदिक कार्यक्रम।',
    },
    details: {
      en: 'Instead of suppressing gastric acid with temporary antacids, this regimen works on bile regulation, strengthening the gut mucosal lining, and correcting underlying doshic imbalance.',
      hi: 'एंटासिड से केवल अस्थायी राहत के बजाय, यह कार्यक्रम पित्त नियमन, आंतों की आंतरिक परत की मजबूती और अंतर्निहित दोषों को संतुलित करने पर केंद्रित है।',
    },
    duration: {
      en: '28 Days Course',
      hi: '28 दिन का कोर्स',
    },
    price: '₹4,000 (inclusive of consultation & medicines)',
    featured: false,
    included: {
      en: [
        'Prakriti (constitution) & Mizaj assessment',
        '4-week supply of classical Arq & Kwath preparations',
        'Stool habit restructuring and meal timing blueprint',
        'Mid-course adjustment consultation',
      ],
      hi: [
        'प्रकृति व मिज़ाज की विस्तृत जाँच',
        '4 सप्ताह के लिए शास्त्रीय अर्क व क्वाथ औषधियाँ',
        'शौच आदत सुधार व भोजन समय-सारणी',
        'मध्यावधि परामर्श व आवश्यकतानुसार औषधि समायोजन',
      ],
    },
    validity: {
      en: 'Ongoing programme',
      hi: 'नियमित रूप से उपलब्ध',
    },
  },
  {
    id: 'offer-3',
    title: {
      en: 'Confidential Vitality & Men’s / Women’s Wellbeing Assessment',
      hi: 'गोपनीय पौरुष एवं स्वास्थ्य परामर्श व रसायन कोर्स',
    },
    summary: {
      en: 'Private, dignified consultation addressing performance anxiety, premature exhaustion, hormonal fatigue, and loss of stamina without false promises or magic cures.',
      hi: 'तनाव, शीघ्र थकान, हार्मोनल असंतुलन और ऊर्जा की कमी के लिए पूर्ण गोपनीयता और गरिमा के साथ वास्तविक चिकित्सकीय परामर्श।',
    },
    details: {
      en: 'Thorough evaluation of sleep, blood sugar, stress levels, and lifestyle factors. You receive genuine traditional Rasayana / Majun preparations and honest clinical counsel on what lifestyle alterations will actually work.',
      hi: 'नींद, तनाव, रक्त शर्करा और दिनचर्या के कारणों की जाँच। शास्त्रीय रसायन/माजून औषधियाँ और बिना किसी बढ़ा-चढ़ा कर किए गए वादे के साथ व्यावहारिक मार्गदर्शन।',
    },
    duration: {
      en: '30 Days Course',
      hi: '30 दिन का कोर्स',
    },
    price: '₹7,000 - ₹9,000 (complete assessment & pure herbal preparations)',
    featured: false,
    included: {
      en: [
        '45-minute confidential one-to-one consultation',
        'Screening for diabetic/hypertensive nerve factors',
        '1-month pure Ashwagandha, Shilajit & herbal mineral course',
        'Dietary and stress-reduction routine',
      ],
      hi: [
        '45 मिनट का पूर्णतः गोपनीय व्यक्तिगत परामर्श',
        'मधुमेह व रक्तचाप से जुड़े कारणों की प्राथमिक जाँच',
        '1 माह का शुद्ध अश्वगंधा, शिलाजीत व जड़ी-बूटी रसायन कोर्स',
        'तनावमुक्ति व आहार संबंधी दिनचर्या',
      ],
    },
    validity: {
      en: 'Consultation by appointment',
      hi: 'अपॉइंटमेंट द्वारा उपलब्ध',
    },
  },
  {
    id: 'offer-4',
    title: {
      en: 'Clinical Hijama (Wet & Dry Cupping) Detox & Pain Relief Session',
      hi: 'क्लिनिकल हिजामा (वेट एवं ड्राई कपिंग) दर्द निवारण एवं शोधन सत्र',
    },
    summary: {
      en: 'Authentic therapeutic Hijama performed by Dr. Mobin (M.H.T. Certified) using 100% single-use sterile cups, medical-grade suction, and pure herbal antiseptic care.',
      hi: 'डॉ. मोबिन (एम.एच.टी. प्रमाणित) द्वारा 100% सिंगल-यूज़ डिस्पोजेबल कप्स व पूर्ण स्वच्छता के साथ शास्त्रीय हिजामा (कपिंग थेरेपी) सत्र।',
    },
    details: {
      en: 'Targeted for chronic lower back pain, sciatica, migraine, cervical stiffness, sluggish circulation, and deep toxin clearance. Includes dry cupping warmup, gentle wet blood cupping on vital acupoints, and dressing with pure cold-pressed Kalonji (black seed) oil.',
      hi: 'कमर दर्द, साइटिका, माइग्रेन, सर्वाइकल जकड़न और रक्त शुद्धि के लिए विशेष रूप से उपयोगी। इसमें ड्राई कपिंग, चयनित बिंदुओं पर दर्द-रहित वेट कपिंग और शुद्ध कलौंजी तेल ड्रेसिंग शामिल है।',
    },
    duration: {
      en: '45 - 60 Minutes Clinical Session',
      hi: '45 - 60 मिनट का क्लिनिकल सत्र',
    },
    price: '₹1,800 - ₹2,500 (per session with sterile disposable kit)',
    featured: true,
    included: {
      en: [
        'Pre-therapy pulse evaluation & point mapping by Dr. Mobin (M.H.T.)',
        'New sealed sterile single-use disposable vacuum cups',
        'Gentle dry cupping stimulation + targeted wet blood cupping',
        'Antiseptic cleansing with warm herbal decoction & black seed oil',
        'Post-cupping hydration & recovery dietary guideline',
      ],
      hi: [
        'डॉ. मोबिन (एम.एच.टी.) द्वारा नाड़ी परीक्षण व विशेष बिंदुओं का निर्धारण',
        'सीलबंद 100% नए सिंगल-यूज़ डिस्पोजेबल कप्स किट',
        'ड्राई कपिंग व लक्षित बिंदुओं पर सुरक्षित वेट ब्लड कपिंग',
        'हर्बल काढ़े व शुद्ध कलौंजी तेल से एंटीसेप्टिक ड्रेसिंग',
        'सत्र के बाद खान-पान व देखभाल संबंधी आवश्यक निर्देश',
      ],
    },
    validity: {
      en: 'Prior appointment mandatory | Contact for latest price & offers',
      hi: 'पूर्व अपॉइंटमेंट अनिवार्य | ताज़ा दरों व ऑफ़र के लिए संपर्क करें',
    },
  },
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-sperm-0',
    patientName: {
      en: 'Patient (Age 26, Mandi Dhanaura / Amroha)',
      hi: 'मरीज़ (उम्र 26 वर्ष, मंडी धनौरा / अमरोहा)',
    },
    rating: 5,
    treatmentArea: {
      en: 'Azoospermia (Nil Sperm Count) to Active Motile Recovery',
      hi: 'शून्य शुक्राणु (Azoospermia / Nil Count) से सक्रिय शुक्राणु उत्पत्ति',
    },
    text: {
      en: 'My semen test in May 2025 at PK Pathology Lab showed TOTAL SPERM COUNT: NIL and zero motility. My family and I were devastated by the diagnosis of Azoospermia. I consulted Dr. Mobin, who prescribed a dedicated 5-week course of classical Ayurvedic Shukra Janana herbs, Shuddha Shilajit, Kaunch Beej, and Unani restorative tonics to ignite spermatogenesis. When I re-tested at the same lab in June 2025, active motile sperm count was recorded, successfully breaking through the zero barrier! You can verify both lab reports in the treatment photographs slider.',
      hi: 'मई 2025 में पीके पैथोलॉजी लैब में मेरी जांच में शुक्राणु संख्या बिल्कुल शून्य (NIL / Azoospermia) आई थी। हम सब बहुत निराश हो गए थे। इसके बाद मैंने डॉ. मोबिन से इलाज शुरू किया। उन्होंने मुझे 5 सप्ताह का शुद्ध आयुर्वेदिक शुक्रजनन, कौंच बीज, शिलाजीत और यूनानी नुस्खा दिया। जून 2025 में उसी लैब में दोबारा जांच कराने पर शुक्राणुओं का बनना शुरू हो चुका था और गतिशील शुक्राणु रिपोर्ट में दर्ज हुए। नीचे दिए गए स्लाइडर में मेरी दोनों ओरिजिनल लैब रिपोर्ट्स देखी जा सकती हैं।',
    },
    date: {
      en: 'June 2025',
      hi: 'जून 2025',
    },
    verified: true,
  },
  {
    id: 'rev-hair-0',
    patientName: {
      en: 'Vikas Sharma (Age 34)',
      hi: 'विकास शर्मा (उम्र 34 वर्ष)',
    },
    rating: 5,
    treatmentArea: {
      en: 'Crown Vertex Hair Thinning & Scalp Hijama Regrowth Protocol',
      hi: 'शिरोभाग (क्राउन) का गंजापन एवं स्कैल्प हिजामा हेयर रिग्रोथ',
    },
    text: {
      en: 'My hair started thinning rapidly at the top crown vertex and my scalp was becoming visibly bare. I tried expensive hair serums and minoxidil with temporary or no results. Dr. Mobin performed scalp Hijama (wet cupping) on specific vertex points to flush congested micro-toxins and surge blood circulation, combined with a classical Ayurvedic Keshya oil regimen. By week 6 the hair fall completely stopped, and by 3 months thick dark hairs covered the bald crown patch. See my before-and-after photo in the documentation section below!',
      hi: 'मेरे सिर के ऊपरी हिस्से (क्राउन) से बाल बहुत तेजी से झड़ रहे थे और खोपड़ी साफ दिखने लगी थी। महंगे सीरम आजमाने के बाद भी फायदा नहीं हुआ। डॉ. मोबिन ने सिर के खास पॉइंट्स पर हिजामा (कपिंग) करके रक्त संचार बढ़ाया और शुद्ध आयुर्वेदिक केश्य तेल दिया। 6 हफ़्तों में बाल गिरना पूरी तरह बंद हुआ और 3 महीने में सिर के खाली हिस्से पर घने काले बाल उग आए। नीचे दिए गए बिफोर-आफ़्टर स्लाइडर में मेरा परिणाम साफ देखा जा सकता है!',
    },
    date: {
      en: 'February 2026',
      hi: 'फरवरी 2026',
    },
    verified: true,
  },
  {
    id: 'rev-0',
    patientName: {
      en: 'Tanveer Ahmed (Age 42)',
      hi: 'तनवीर अहमद (उम्र 42 वर्ष)',
    },
    rating: 5,
    treatmentArea: {
      en: 'Hijama (Blood Cupping) for Chronic Sciatica & Backache',
      hi: 'हिजामा (ब्लड कपिंग) — साइटिका व पुरानी कमर दर्द',
    },
    text: {
      en: 'I had severe lower back pain radiating down my left leg for over a year due to continuous desk work. Painkillers gave only temporary relief and damaged my stomach. A colleague recommended Dr. Mobin for Hijama therapy. Dr. Mobin has a genuine M.H.T. degree and took meticulous care with disposable cups and sterile technique. The blood cupping was practically painless, and right after the session the stiffness vanished. After two sessions my sciatica pain has not returned.',
      hi: 'लगातार बैठकर काम करने से मुझे कमर के निचले हिस्से में तेज दर्द रहता था जो पैर तक जाता था। दर्द की गोलियों से पेट खराब होने लगा था। मुझे डॉ. मोबिन के पास हिजामा करवाने की सलाह मिली। उनके पास एम.एच.टी. (MHT) की प्रमाणित डिग्री है और उन्होंने नए सीलबंद कप्स से पूरी स्वच्छता के साथ हिजामा किया। बिल्कुल दर्द नहीं हुआ और सत्र के तुरंत बाद पीठ का भारीपन खत्म हो गया। दो सत्रों के बाद अब दर्द पूरी तरह से ठीक है।',
    },
    date: {
      en: 'March 2026',
      hi: 'मार्च 2026',
    },
    verified: true,
  },
  {
    id: 'rev-1',
    patientName: {
      en: 'M. S. Khan (Age 46)',
      hi: 'एम. एस. ख़ान (उम्र 46 वर्ष)',
    },
    rating: 5,
    treatmentArea: {
      en: 'Piles & Anal Fissure',
      hi: 'बवासीर एवं फिशर',
    },
    text: {
      en: 'I suffered from bleeding and unbearable pain for almost 8 months. Two doctors suggested instant surgery, but I was terrified. Dr. Mobin examined me calmly, explained that it was a fissure aggravated by severe constipation, and started me on a medicated sitz bath and oil regimen. Within 12 days the bleeding stopped completely, and by 4 weeks I was back to normal life without surgery.',
      hi: 'मुझे लगभग 8 महीने से शौच के समय असहनीय दर्द और खून आने की शिकायत थी। मुझे तुरंत ऑपरेशन की सलाह दी गई थी जिससे मैं बहुत डरा हुआ था। डॉ. मोबिन ने बहुत धैर्य से जाँच की और समझाया कि यह कब्ज़ के कारण हुआ फिशर है। उन्होंने सिट्ज़ बाथ और औषधीय तैल दिया। 12 दिनों में खून आना बंद हुआ और 4 सप्ताह में मैं बिना किसी ऑपरेशन के स्वस्थ हो गया।',
    },
    date: {
      en: 'January 2026',
      hi: 'जनवरी 2026',
    },
    verified: true,
  },
  {
    id: 'rev-2',
    patientName: {
      en: 'Rameshwar P. (Age 38)',
      hi: 'रामेश्वर पी. (उम्र 38 वर्ष)',
    },
    rating: 5,
    treatmentArea: {
      en: 'Chronic Acidity & IBS',
      hi: 'पुरानी एसिडिटी व आईबीएस',
    },
    text: {
      en: 'I was addicted to taking antacid tablets every single morning for five years. My stomach always felt heavy and uneasy. Dr. Mobin gave me Unani Arq and herbal churna, and instructed me to stop cold drinks and change dinner timings. It took three weeks, but my natural digestion woke up. I have not touched a single antacid capsule in 3 months now.',
      hi: 'मैं पाँच साल से रोज़ सुबह खाली पेट गैस का कैप्सूल खाने का आदी था। पेट हमेशा भारी रहता था। डॉ. मोबिन ने यूनानी अर्क और पाचक चूर्ण दिया और रात के खाने का समय बदलने को कहा। तीन हफ़्ते लगे, पर अब पेट बिल्कुल हल्का रहता है। पिछले 3 महीनों से मैंने एक भी अंग्रेज़ी गैस की गोली नहीं खाई है।',
    },
    date: {
      en: 'December 2025',
      hi: 'दिसंबर 2025',
    },
    verified: true,
  },
  {
    id: 'rev-3',
    patientName: {
      en: 'Patient wishes to remain anonymous (Age 31)',
      hi: 'मरीज़ ने नाम गोपनीय रखने का अनुरोध किया (उम्र 31 वर्ष)',
    },
    rating: 5,
    treatmentArea: {
      en: 'Sexual Health & Anxiety',
      hi: 'यौन स्वास्थ्य एवं मानसिक तनाव',
    },
    text: {
      en: 'The best thing about Dr. Mobin is that he does not judge you or make you feel guilty. He speaks like an elder brother and a true doctor. He pointed out that my irregular sleep and anxiety from work was creating 80% of the trouble. His herbal medicines gave steady improvement without any palpitations or side effects.',
      hi: 'डॉ. मोबिन की सबसे अच्छी बात यह है कि वे किसी बात पर आपको जज नहीं करते। वे एक बड़े भाई और सच्चे चिकित्सक की तरह सुनते हैं। उन्होंने समझाया कि देर रात तक जागना और काम का तनाव ही मेरी 80% समस्या की जड़ है। उनकी जड़ी-बूटियों से बिना किसी घबराहट या दुष्प्रभाव के बहुत लाभ हुआ।',
    },
    date: {
      en: 'February 2026',
      hi: 'फ़रवरी 2026',
    },
    verified: true,
  },
  {
    id: 'rev-4',
    patientName: {
      en: 'Gurpreet Singh (Age 52)',
      hi: 'गुरप्रीत सिंह (उम्र 52 वर्ष)',
    },
    rating: 5,
    treatmentArea: {
      en: 'Joint Stiffness & Chronic Skin Itch',
      hi: 'जोड़ों का दर्द व पुरानी खुजली',
    },
    text: {
      en: 'Very honest approach. In the first sitting itself, he said clearly: "I will not promise magic in 3 days. Take this for 1 month and observe your digestion and joint mobility." That honesty gave me trust. The swelling in my knees and skin redness reduced drastically.',
      hi: 'बेहद ईमानदार डॉक्टर हैं। पहली ही मुलाक़ात में उन्होंने साफ़ कहा: "मैं 3 दिन में चमत्कार का झूठा वादा नहीं करूँगा। एक महीने दवा लें और सुधार देखें।" इसी ईमानदारी ने मुझे भरोसा दिया। घुटनों की सूजन और त्वचा की लालिमा में बहुत सुधार हुआ।',
    },
    date: {
      en: 'November 2025',
      hi: 'नवंबर 2025',
    },
    verified: true,
  },
];
