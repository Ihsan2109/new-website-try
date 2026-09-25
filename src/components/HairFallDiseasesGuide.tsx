import React, { useState } from 'react';
import {
  AlertTriangle,
  Sparkles,
  Activity,
  CheckCircle,
  Droplets,
  HelpCircle,
  Microscope,
  PhoneCall,
  Flame,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  X,
} from 'lucide-react';
import { Language } from '../types';
import { useClinic } from '../context/ClinicContext';

interface HairFallDiseasesGuideProps {
  lang: Language;
  onClose?: () => void;
}

interface DiseaseCard {
  id: string;
  nameEn: string;
  nameHi: string;
  ayurvedicTerm: string;
  severity: 'high' | 'medium' | 'critical';
  trigger: { en: string; hi: string };
  symptoms: { en: string[]; hi: string[] };
  pathology: { en: string; hi: string };
  treatmentApproach: { en: string; hi: string };
}

const HAIR_DISEASES: DiseaseCard[] = [
  {
    id: 'androgenetic',
    nameEn: 'Androgenetic Alopecia (Male & Female Pattern Baldness)',
    nameHi: 'एंड्रोजेनेटिक एलोपेसिया (पुरुष एवं महिला पैटर्न गंजापन)',
    ayurvedicTerm: 'खालित्य (Khalitya)',
    severity: 'critical',
    trigger: {
      en: 'DHT (Dihydrotestosterone) sensitivity + genetic predisposition + restricted scalp micro-circulation',
      hi: 'डीएचटी हार्मोन संवेदनशीलता + आनुवंशिक प्रभाव + सिर की नसों में रक्त संचार की कमी',
    },
    symptoms: {
      en: [
        'Progressive thinning at the crown vertex and temporal hairline',
        'Hair shafts become progressively thinner, shorter, and colorless (miniaturization)',
        'Widening center hair parting line in women',
        'Excess sebum or oily build-up choking hair root canals',
      ],
      hi: [
        'सिर के मध्य भाग (क्राउन) और माथे के किनारों से बालों का तेजी से गिरना',
        'बालों की मोटाई धीरे-धीरे पतली, छोटी और कमजोर होना (मिनीएचुराइजेशन)',
        'महिलाओं में मांग का चौड़ा होते जाना',
        'स्कैल्प पर अत्यधिक तेल/सीबम का जमाव जो जड़ों का दम घोंटता है',
      ],
    },
    pathology: {
      en: '5-alpha reductase converts testosterone into DHT, binding to follicular receptors on the crown. Blood vessels constrict, depriving the dermal papilla of oxygen and nutrients until follicles go dormant.',
      hi: 'शरीर में डीएचटी हार्मोन सिर के ऊपरी हिस्से के रोमछिद्रों को सिकोड़ देता है। सूक्ष्म रक्त वाहिकाओं में रुकावट से जड़ों तक ऑक्सीजन व पोषण नहीं पहुँचता, जिससे बाल गिरते हैं।',
    },
    treatmentApproach: {
      en: 'Vertex Scalp Hijama (Wet Cupping) to de-congest micro-capillaries and surge fresh oxygenated blood, paired with classical Keshya Tailam & anti-DHT Ayurvedic botanical Rasayana.',
      hi: 'स्कैल्प हिजामा (रक्तमोक्षण) द्वारा जमी हुई रुकावटें दूर कर नया रक्त संचार, साथ में भृंगराज, आमलकी व ब्राह्मी युक्त शास्त्रीय केश्य तैल व लेप।',
    },
  },
  {
    id: 'alopecia-areata',
    nameEn: 'Alopecia Areata (Autoimmune Spot Baldness)',
    nameHi: 'एलोपेसिया एरीआटा (इंद्रलुप्त / चकत्तेदार गंजापन)',
    ayurvedicTerm: 'इंद्रलुप्त (Indralupta)',
    severity: 'critical',
    trigger: {
      en: 'Autoimmune dysregulation + chronic stress + acute Pitta-Rakta vitiation',
      hi: 'शरीर की रोग प्रतिरोधक क्षमता का असंतुलन + तीव्र तनाव + पित्त-रक्त दोष का प्रकुपित होना',
    },
    symptoms: {
      en: [
        'Sudden appearance of smooth, coin-shaped round or oval bald patches',
        'Affected skin is smooth, shiny, and devoid of visible hair follicles',
        'Exclamation mark hairs visible around patch margins',
        'Can affect scalp, beard (Alopecia Barbae), or eyebrows',
      ],
      hi: [
        'अचानक सिक्के के आकार के गोल या अंडाकार चिकने गंजे चकत्ते बनना',
        'प्रभावित त्वचा बिल्कुल चिकनी, चमकदार और छिद्र रहित दिखना',
        'चकत्ते के किनारों पर विस्मयादिबोधक (!) आकार के कमजोर टूटे बाल',
        'सिर के अलावा दाढ़ी या भौंहों में भी चकत्ते पड़ना',
      ],
    },
    pathology: {
      en: 'The immune system misidentifies growing anagen hair bulbs as foreign threats and attacks them. In Ayurveda, Vata-Pitta vitiation in Romakoopa (hair follicles) followed by Kapha-Rakta obstructs follicle openings.',
      hi: 'शरीर की रोग प्रतिरोधक कोशिकाएं अपने ही बालों की जड़ों पर हमला कर देती हैं। आयुर्वेद के अनुसार रोमछिद्रों में पित्त व वात के प्रकोप के बाद कफ-रक्त का अवरोध नई वृद्धि रोकता है।',
    },
    treatmentApproach: {
      en: 'Targeted local Hijama to clear inflammatory cellular debris, accompanied by Shiro-Lepam (Gunja, Triphala, and Mahatiktaka preparations) and internal immune-modulating Rasayana.',
      hi: 'चकत्तों के आसपास लक्षित हिजामा (कपिंग) से सूजन कम करना, गुंजा-त्रिफला लेप द्वारा बंद छिद्रों को खोलना तथा गिलोय व अश्वगंधा युक्त रसायन सेवन।',
    },
  },
  {
    id: 'telogen-effluvium',
    nameEn: 'Telogen Effluvium (Acute Stress & Post-Illness Shedding)',
    nameHi: 'टेलोजन एफ्लुवियम (तनाव व बीमारी बाद अचानक तीव्र बाल झड़ना)',
    ayurvedicTerm: 'अकाल केश पतन (Akaal Kesha Patana)',
    severity: 'high',
    trigger: {
      en: 'High fevers (Dengue, Typhoid, Malaria, COVID-19), iron/ferritin deficiency, rapid weight loss, or severe mental stress',
      hi: 'तेज़ बुखार (डेंगू, टायफाइड, मलेरिया), खून की कमी (आयरन/फेरिटिन), अत्यधिक तनाव या कुपोषण',
    },
    symptoms: {
      en: [
        'Diffuse shedding: losing 200–500+ strands daily during washing or brushing',
        'Hair comes out easily from roots with white club bulbs intact',
        'Sudden loss of hair volume across the entire head without isolated bald spots',
        'Scalp feels tender or sensitive (trichodynia)',
      ],
      hi: [
        'नहाते या कंघी करते समय रोज़ाना 200 से 500+ बालों का गुच्छों में गिरना',
        'बाल बिना किसी खिंचाव के जड़ों से सफेद गांठ के साथ आसानी से निकल आना',
        'बिना किसी खास चकत्ते के पूरे सिर के बालों का अचानक आधा या पतला हो जाना',
        'सिर की त्वचा में खिंचाव, हल्का दर्द या संवेदनशीलता का अनुभव',
      ],
    },
    pathology: {
      en: 'Systemic shock prematurely pushes 30–50% of growing anagen hairs into the resting telogen phase. Two to three months later, all these hairs shed simultaneously.',
      hi: 'गंभीर बीमारी या तनाव के कारण विकासशील अवस्था के बाल समय से पहले विश्राम अवस्था (टेलोजन) में चले जाते हैं और 2-3 महीने बाद एक साथ टूटने लगते हैं।',
    },
    treatmentApproach: {
      en: 'Restorative Asthi Dhatu nutrition (Saptamrit Lauh, Shankh Bhasma), cooling Pitta-pacifying head massage with Brahmi-Amla, and scalp circulation therapies.',
      hi: 'अस्थि धातु पोषक आयुर्वेदिक औषधियां (सप्तमृत लौह, प्रवाल, भृंगराज), ब्राह्मी-आमलकी शिरोधारा व तैल मालिश, एवं तनाव निवारक उपचार।',
    },
  },
  {
    id: 'seborrheic-dermatitis',
    nameEn: 'Seborrheic Dermatitis & Scalp Folliculitis (Severe Dandruff)',
    nameHi: 'सेबोरिक डर्मेटाइटिस एवं फोलिक्युलाइटिस (जिद्दी रूसी व संक्रमण)',
    ayurvedicTerm: 'दारुणक एवं शिरोरोग (Darunaka & Shiro-Roga)',
    severity: 'medium',
    trigger: {
      en: 'Malassezia fungal overgrowth, excessive sebum secretion, alkaline chemical shampoos',
      hi: 'मालासेजिया फंगस का फैलाव, स्कैल्प पर चिपचिपे तेल का अधिक रिसाव व रासायनिक शैंपू',
    },
    symptoms: {
      en: [
        'Persistent yellowish greasy flakes clinging to scalp and hair shafts',
        'Intense itching, burning sensation, and scalp redness (erythema)',
        'Pustules or small painful pimples at hair follicle bases',
        'Unpleasant scalp odor and rapid hair breakage due to weakened roots',
      ],
      hi: [
        'सिर पर पीली चिपचिपी रूसी की मोटी परतें जो नाखूनों से खुरचने पर निकलती हैं',
        'अत्यधिक खुजली, जलन और स्कैल्प पर लाली',
        'बालों की जड़ों में फुंसियां, मवाद के बारीक दाने व दर्द',
        'बालों से दुर्गंध आना और जड़ों के गलने से बालों का टूटना',
      ],
    },
    pathology: {
      en: 'Fungi feed on scalp sebum, producing inflammatory oleic acid that damages follicular epithelium and loosens root anchorage.',
      hi: 'फंगस स्कैल्प के तेल को खाकर विषैले अम्ल छोड़ता है, जिससे जड़ों में सूजन आ जाती है और बाल जड़ों से ढीले होकर गिरने लगते हैं।',
    },
    treatmentApproach: {
      en: 'Medicated antifungal Neem-Karanja-Triphala Kwath washes, Shodhan therapy, and scalp Hijama to eliminate localized infection and cellular exudates.',
      hi: 'नीम, करंज, त्रिफला व धतूरा क्वाथ से सिर की सफाई, रक्त शोधक काढ़े और स्कैल्प हिजामा द्वारा मृत टॉक्सिन्स को बाहर निकालना।',
    },
  },
  {
    id: 'traction-damage',
    nameEn: 'Traction Alopecia & Chemical/Heat Damage',
    nameHi: 'ट्रैक्शन एलोपेसिया व केमिकल/हीट डैमेज',
    ayurvedicTerm: 'अभिघातज केश हानि (Abhighataja)',
    severity: 'medium',
    trigger: {
      en: 'Tight hairstyles (turbans, braids, tight ponytails), chemical hair straightening, keratin treatments, synthetic ammonia dyes',
      hi: 'कसकर बांधी गई पगड़ी/चोटी, केमिकल स्ट्रेटनिंग, रिबॉन्डिंग, ब्लीच एवं अमोनिया युक्त डाई',
    },
    symptoms: {
      en: [
        'Receding front and side hairlines corresponding to tension areas',
        'Hair shaft split ends (trichoptilosis) and extreme brittleness',
        'Tender, inflamed scalp around hair borders',
        'Follicle scabs or bumps along tension points',
      ],
      hi: [
        'खिंचाव वाले स्थानों (माथे व कान के पास) से बालों का पीछे खिसकना',
        'दोमुंहे बाल, रूखापन और बीच से तिनके की तरह चटक कर टूटना',
        'खिंचाव वाली रेखा पर दर्द व लालिमा',
        'जड़ों के पास सूजन या दाने उभरना',
      ],
    },
    pathology: {
      en: 'Continuous mechanical pulling stresses the follicular root sheath, resulting in perifollicular erythema, hair follicle inflammation, and eventual permanent scarring if neglected.',
      hi: 'लगातार खिंचाव या केमिकल से बालों की जड़ें छिल जाती हैं, जिससे रोमछिद्र स्थाई रूप से बंद होने का खतरा रहता है।',
    },
    treatmentApproach: {
      en: 'Elimination of mechanical tension, cold-pressed virgin coconut and sesame conditioning lepam with Yashtimadhu and Neelini to repair the keratin sheath.',
      hi: 'तनावपूर्ण स्टाइलिंग बंद करना, यष्टिमधु (मुलेठी) व नीलिनी युक्त शुद्ध तैल से जड़ों का पोषण एवं स्कैल्प को शांत करना।',
    },
  },
];

export const HairFallDiseasesGuide: React.FC<HairFallDiseasesGuideProps> = ({ lang, onClose }) => {
  const { clinicInfo } = useClinic();
  const [expandedId, setExpandedId] = useState<string | null>('androgenetic');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-12">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-br from-[#1c2920] to-[#121c16] border border-[#2d4233] p-6 sm:p-8 text-white space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#274836] text-[#86efac] text-xs font-bold uppercase tracking-wider border border-[#3b664d]">
              {lang === 'en' ? 'Clinical Trichology & Ayurveda Guide' : 'नैदानिक केश चिकित्सा एवं आयुर्वेद मार्गदर्शन'}
            </span>
            <span className="text-xs text-[#a3b8ab] font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#86efac]" />
              {lang === 'en' ? 'Authored by Dr. Mobin (B.U.M.S.)' : 'डॉ. मोबिन (बी.यू.एम.एस.) द्वारा प्रमाणित'}
            </span>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#273a2e] hover:bg-[#344d3d] text-[#e0efe6] hover:text-white border border-[#3d5a45] text-xs font-semibold transition-colors"
            >
              <X className="w-3.5 h-3.5 text-[#86efac]" />
              <span>{lang === 'en' ? 'Close Guide' : 'गाइड बंद करें'}</span>
            </button>
          )}
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#f1f7f3] tracking-tight">
          {lang === 'en'
            ? 'Understanding Hair Fall Diseases & Root Causes'
            : 'बाल झड़ने के प्रमुख रोग, कारण एवं संपूर्ण आयुर्वेदिक उपचार'}
        </h2>

        <p className="text-sm sm:text-base text-[#c5d6cc] max-w-3xl leading-relaxed">
          {lang === 'en'
            ? 'Losing 50 to 100 strands a day during normal hair renewal is natural. But progressive thinning, widening bald patches, or handfuls of falling hair are clinical diseases requiring targeted medical diagnosis — not generic cosmetic shampoos.'
            : 'बालों का सामान्य चक्र में 50-100 बाल रोज़ गिरना स्वाभाविक है। परंतु यदि सिर पर गंजापन दिखने लगे, मांग चौड़ी होने लगे या गुच्छों में बाल झड़ने लगें, तो यह एक चिकित्सीय रोग है जिसका सही मूल कारण पहचान कर उपचार आवश्यक है।'}
        </p>

        {/* 3 Ayurvedic Pillars Pill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-[#223328] border border-[#344d3d] space-y-1">
            <div className="flex items-center gap-2 text-[#86efac] font-bold text-xs">
              <Flame className="w-4 h-4 text-[#f59e0b]" />
              <span>{lang === 'en' ? 'Pitta & Rakta Dushti' : 'पित्त व रक्त दोष'}</span>
            </div>
            <p className="text-[11px] text-[#b0c4b8] leading-normal">
              {lang === 'en'
                ? 'Internal metabolic heat and blood toxicity burn follicular vitality from within.'
                : 'शरीर की आंतरिक गर्मी व रक्त की अशुद्धि बालों की जड़ों को कमजोर कर जला देती है।'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#223328] border border-[#344d3d] space-y-1">
            <div className="flex items-center gap-2 text-[#86efac] font-bold text-xs">
              <Activity className="w-4 h-4 text-[#38bdf8]" />
              <span>{lang === 'en' ? 'Micro-Congestion' : 'धमनियों में रुकावट (स्रोतोरोध)'}</span>
            </div>
            <p className="text-[11px] text-[#b0c4b8] leading-normal">
              {lang === 'en'
                ? 'Clogged scalp micro-capillaries starve the dermal papilla of oxygen & nutrition.'
                : 'स्कैल्प की सूक्ष्म नसों में रुकावट से जड़ों तक ताज़ा रक्त व ऑक्सीजन नहीं पहुँचता।'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#223328] border border-[#344d3d] space-y-1">
            <div className="flex items-center gap-2 text-[#86efac] font-bold text-xs">
              <Sparkles className="w-4 h-4 text-[#a78bfa]" />
              <span>{lang === 'en' ? 'Asthi Dhatu Deficiency' : 'अस्थि धातु पोषण की कमी'}</span>
            </div>
            <p className="text-[11px] text-[#b0c4b8] leading-normal">
              {lang === 'en'
                ? 'In Ayurveda, Kesha (hair) is the by-product of bone tissue metabolism.'
                : 'आयुर्वेद में केश अस्थि धातु का उपधातु है; हड्डियों के पोषण से ही बाल मजबूत बनते हैं।'}
            </p>
          </div>
        </div>
      </div>

      {/* Disease Cards Accordion */}
      <div className="space-y-4">
        <div className="border-b border-[#ded3be] pb-3 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#264e39]">
              {lang === 'en' ? 'Pathology Breakdown' : 'रोग एवं लक्षण तालिका'}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1a3325]">
              {lang === 'en'
                ? 'The 5 Major Hair Fall Conditions We Treat'
                : 'बाल झड़ने के 5 मुख्य प्रकार जिनका हम इलाज करते हैं'}
            </h3>
          </div>
          <span className="text-xs text-[#6e6354] hidden sm:inline">
            {lang === 'en' ? 'Click card to expand details' : 'विवरण देखने के लिए क्लिक करें'}
          </span>
        </div>

        <div className="space-y-3">
          {HAIR_DISEASES.map((disease) => {
            const isExpanded = expandedId === disease.id;
            return (
              <div
                key={disease.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isExpanded
                    ? 'bg-white border-[#2b513f] shadow-md ring-1 ring-[#2b513f]/20'
                    : 'bg-[#fcfaf6] border-[#ded3be] hover:border-[#b8a88f]'
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleExpand(disease.id)}
                  className="w-full p-4 sm:p-5 flex items-start sm:items-center justify-between gap-3 text-left transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#f3ede1] text-[#4b3c29] border border-[#dfd2be]">
                        {disease.ayurvedicTerm}
                      </span>
                      {disease.severity === 'critical' && (
                        <span className="text-[10px] uppercase font-bold tracking-wide px-2 py-0.5 rounded bg-red-100 text-red-800 border border-red-200">
                          {lang === 'en' ? 'High Follicular Risk' : 'रोमछिद्र नष्ट होने का जोखिम'}
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#1a3325]">
                      {lang === 'en' ? disease.nameEn : disease.nameHi}
                    </h4>

                    <p className="text-xs text-[#6e6354] line-clamp-1">
                      <strong className="text-[#3b3226]">{lang === 'en' ? 'Root Trigger: ' : 'मूल कारण: '}</strong>
                      {disease.trigger[lang]}
                    </p>
                  </div>

                  <div className="p-2 rounded-full bg-[#f4ebe0] text-[#1a3325] shrink-0 mt-1 sm:mt-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="p-4 sm:p-6 pt-0 border-t border-[#f0e7d8] bg-white space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                      {/* Symptoms */}
                      <div className="space-y-2">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-[#991b1b] flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'Key Clinical Signs & Symptoms' : 'पहचान व मुख्य लक्षण'}</span>
                        </h5>
                        <ul className="space-y-2">
                          {disease.symptoms[lang].map((symp, sIdx) => (
                            <li key={sIdx} className="text-xs text-[#3f382f] flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c] shrink-0 mt-1.5" />
                              <span className="leading-relaxed">{symp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Biological Pathology */}
                      <div className="space-y-2">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-[#1e3a8a] flex items-center gap-1.5">
                          <Microscope className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'Underlying Biological Mechanism' : 'शरीर में रोग की प्रक्रिया'}</span>
                        </h5>
                        <p className="text-xs text-[#3f382f] leading-relaxed bg-[#f8fafc] p-3.5 rounded-xl border border-[#e2e8f0]">
                          {disease.pathology[lang]}
                        </p>
                      </div>
                    </div>

                    {/* Dr. Mobin's Treatment Approach */}
                    <div className="p-4 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] space-y-1.5">
                      <div className="flex items-center gap-2 text-[#166534] font-bold text-xs">
                        <CheckCircle className="w-4 h-4" />
                        <span>
                          {lang === 'en'
                            ? "Dr. Mobin's Clinical Protocol for this Condition:"
                            : 'इस समस्या हेतु डॉ. मोबिन का विशेष उपचार प्रोटोकॉल:'}
                        </span>
                      </div>
                      <p className="text-xs text-[#14532d] leading-relaxed">
                        {disease.treatmentApproach[lang]}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* How Scalp Hijama (Cupping) Treats Hair Loss */}
      <div className="rounded-2xl bg-[#19241d] border border-[#2e4334] p-6 sm:p-8 text-[#e9f2ec] space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#86efac]">
            {lang === 'en' ? 'The Breakthrough Therapy' : 'क्रांतिकारी उपचार विधि'}
          </span>
          <h3 className="font-serif text-xl sm:text-3xl font-bold text-white">
            {lang === 'en'
              ? 'Why Scalp Hijama (Cupping Therapy) Regrows Lost Hair'
              : 'सिर का हिजामा (कपिंग थेरेपी) बालों को दोबारा उगाने में क्यों असरदार है?'}
          </h3>
          <p className="text-xs sm:text-sm text-[#b0c4b8] max-w-2xl leading-relaxed">
            {lang === 'en'
              ? 'Most hair loss treatments fail because dormant roots lack sufficient capillary blood flow to absorb nutrients. Scalp Hijama (Al-Hijamah) solves this at the micro-vascular level.'
              : 'अधिकांश तेल व दवाइयां इसलिए काम नहीं करतीं क्योंकि सिर की बंद नसों के कारण पोषण जड़ों तक पहुँच ही नहीं पाता। हिजामा सूक्ष्म नसों को खोलकर जड़ों को नया जीवन देता है।'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#202e25] border border-[#32493a] space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#274836] text-[#86efac] font-bold text-sm flex items-center justify-center">
              1
            </div>
            <h4 className="font-bold text-white text-sm">
              {lang === 'en' ? 'Clears Stagnant Toxins' : 'जमे हुए टॉक्सिन्स बाहर निकालना'}
            </h4>
            <p className="text-xs text-[#a7bdb0] leading-relaxed">
              {lang === 'en'
                ? 'Extracts accumulated metabolic debris, cellular waste, and toxic oxidants choking follicles on the crown.'
                : 'शिरोभाग के बंद रोमछिद्रों से दूषित रक्त, मृत कोशिकाएं और विषैले तत्व खींचकर बाहर निकालता है।'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#202e25] border border-[#32493a] space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#274836] text-[#86efac] font-bold text-sm flex items-center justify-center">
              2
            </div>
            <h4 className="font-bold text-white text-sm">
              {lang === 'en' ? 'Surges Oxygenated Blood' : 'ताज़ा ऑक्सीजन व रक्त संचार'}
            </h4>
            <p className="text-xs text-[#a7bdb0] leading-relaxed">
              {lang === 'en'
                ? 'Negative suction vacuum triggers sudden vasodilation, flooding the dermal papilla with fresh arterial blood.'
                : 'वैक्यूम सक्शन से सिर की सुप्त सूक्ष्म रक्त नलिकाएं तुरंत खुल जाती हैं और ताज़ा रक्त जड़ों तक बहने लगता है।'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#202e25] border border-[#32493a] space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#274836] text-[#86efac] font-bold text-sm flex items-center justify-center">
              3
            </div>
            <h4 className="font-bold text-white text-sm">
              {lang === 'en' ? 'Triggers Growth Factors' : 'ग्रोथ फैक्टर्स का सक्रियण (VEGF)'}
            </h4>
            <p className="text-xs text-[#a7bdb0] leading-relaxed">
              {lang === 'en'
                ? 'Micro-stimulation releases natural bodily VEGF (Vascular Endothelial Growth Factor) to sprout new blood vessels.'
                : 'स्वाभाविक रूप से शरीर के ग्रोथ फैक्टर्स सक्रिय होते हैं जो बालों के उगने वाले छिद्रों को दोबारा ज़िंदा करते हैं।'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#202e25] border border-[#32493a] space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#274836] text-[#86efac] font-bold text-sm flex items-center justify-center">
              4
            </div>
            <h4 className="font-bold text-white text-sm">
              {lang === 'en' ? 'Multiplies Herb Absorption' : 'औषधियों का 10 गुना अवशोषण'}
            </h4>
            <p className="text-xs text-[#a7bdb0] leading-relaxed">
              {lang === 'en'
                ? 'Post-Hijama application of Bhringraj, Neelini, and Amla oils penetrates 10x deeper directly into follicular bulbs.'
                : 'हिजामा के बाद लगाए जाने वाले भृंगराज व ब्राह्मी औषधीय तैल जड़ों में 10 गुना गहराई तक समा जाते हैं।'}
            </p>
          </div>
        </div>

        {/* Doctor Consultation Prompt */}
        <div className="p-5 rounded-xl bg-[#24352a] border border-[#375240] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">
              {lang === 'en'
                ? 'Notice Early Signs of Thinning or Bald Patches?'
                : 'क्या आपके बाल भी तेजी से झड़ रहे हैं या मांग चौड़ी हो रही है?'}
            </h4>
            <p className="text-xs text-[#b8ccc0]">
              {lang === 'en'
                ? 'Early intervention preserves active roots before follicles permanently atrophy. Consult Dr. Mobin in Sector 62 / 63 Noida.'
                : 'शुरुआती अवस्था में इलाज कराने से जड़ों को हमेशा के लिए मरने से बचाया जा सकता है। सीधे क्लिनिक आकर जांच कराएं।'}
            </p>
          </div>

          <a
            href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
              lang === 'en'
                ? 'Hello Dr. Mobin, I am suffering from hair fall and scalp thinning. I want to book a scalp examination and consultation.'
                : 'नमस्ते डॉ. मोबिन, मेरे बाल बहुत गिर रहे हैं और सिर में गंजापन दिख रहा है। मैं स्कैल्प जांच व परामर्श लेना चाहता हूँ।'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-5 py-2.5 rounded-lg text-xs font-bold shadow-md hover:bg-[#1ebd59] transition-colors shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Book Scalp Examination' : 'स्कैल्प जांच बुक करें'}</span>
          </a>
        </div>

        {/* Optional Close Button in Footer */}
        {onClose && (
          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#223328] hover:bg-[#2d4234] text-[#b9cebf] hover:text-white border border-[#375240] text-xs font-semibold transition-colors"
            >
              <ChevronUp className="w-4 h-4 text-[#86efac]" />
              <span>{lang === 'en' ? 'Hide Hair Fall Disease Guide' : 'बाल झड़ने की गाइड बंद करें'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
