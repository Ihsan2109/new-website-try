import React, { useState } from 'react';
import {
  ShieldCheck,
  PhoneCall,
  Flame,
  Activity,
  Droplets,
  HelpCircle,
  Microscope,
  CheckCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  X,
  Sparkles,
} from 'lucide-react';
import { Language } from '../types';
import { useClinic } from '../context/ClinicContext';

interface SpermHealthGuideProps {
  lang: Language;
  onClose?: () => void;
}

interface SpermConditionCard {
  id: string;
  nameEn: string;
  nameHi: string;
  ayurvedicTerm: string;
  normalRange: string;
  severity: 'critical' | 'high' | 'medium';
  trigger: { en: string; hi: string };
  symptoms: { en: string[]; hi: string[] };
  pathology: { en: string; hi: string };
  treatmentApproach: { en: string; hi: string };
}

const SPERM_CONDITIONS: SpermConditionCard[] = [
  {
    id: 'azoospermia',
    nameEn: 'Azoospermia (Nil / Zero Sperm Count)',
    nameHi: 'एज़ूस्पर्मिया (शून्य शुक्राणु / Nil Sperm Count)',
    ayurvedicTerm: 'शुक्राणु शून्यता / क्षीण शुक्र (Ksheena Shukra)',
    normalRange: 'Normal: 15–200 Million / ml (Tested: NIL)',
    severity: 'critical',
    trigger: {
      en: 'Non-obstructive spermatogenic arrest, hormonal axis failure (LH/FSH), varicocele hyperthermia, or metabolic Shukra Dhatu malnutrition',
      hi: 'वृषण में शुक्राणु निर्माण का रुक जाना, हार्मोन असंतुलन, वेरिकोसील की गर्मी, या शुक्र धातु पोषण की गंभीर कमी',
    },
    symptoms: {
      en: [
        'Complete absence of spermatozoa in centrifuged semen pellet on repeat analysis',
        'Inability to conceive despite 12+ months of unprotected intercourse',
        'Normal semen volume and color, masking the underlying cellular absence',
        'May be accompanied by low libido, testicular heaviness, or subtle hormonal lethargy',
      ],
      hi: [
        'वीर्य परीक्षण (Semen Analysis) में शुक्राणु की संख्या पूरी तरह शून्य (NIL) आना',
        'विवाह के 1-2 वर्ष बाद भी संतान सुख में रुकावट आना',
        'वीर्य का रंग व मात्रा सामान्य दिखना जिससे समस्या का पता केवल लैब टेस्ट में ही चलता है',
        'यौन ऊर्जा में कमी, वृषण में भारीपन या अत्यधिक मानसिक तनाव',
      ],
    },
    pathology: {
      en: 'In Non-Obstructive Azoospermia, the germinal epithelium of the seminiferous tubules fails to complete meiosis due to oxidative stress and impaired micro-capillary perfusion. In Ayurveda, Shukra Dhatu is the final distilled essence of the 7 body tissues (Dhatus). When Ahara Rasa (nutrition) fails to mature across Mamsa, Meda, and Majja due to weak Agni or toxic Ama, Shukra production completely halts.',
      hi: 'वृषण की शुक्रवाहिनी नलिकाओं में रक्त संचार व ऑक्सीजन की कमी से शुक्राणु बनने का चक्र रुक जाता है। आयुर्वेद में शुक्र शरीर की सप्तम और श्रेष्ठतम धातु है। जब पाचन (अग्नि) कमजोर हो या रक्त-मज्जा में अशुद्धियां हों, तो शुक्र धातु का निर्माण रुक जाता है जिसे शास्त्रीय शुक्रजनन चिकित्सा से पुनः सक्रिय किया जा सकता है।',
    },
    treatmentApproach: {
      en: 'Targeted spermatogenic revitalization using classical Kaunch Beej (L-DOPA), purified Shuddha Shilajit, Ashwagandha, Swarna Vanga, and Trivang Bhasma, combined with sacral/lumbar Hijama to surge testicular micro-perfusion and evacuate congested pelvic venous heat.',
      hi: 'शास्त्रीय शुक्रजनन औषधियां जैसे कौंच बीज, शुद्ध शिलाजीत, अश्वगंधा, मूसली पाक एवं त्रिवंग भस्म द्वारा वृषण नलिकाओं को पोषण; साथ ही कमर-पेल्विक हिजामा द्वारा नसों का अवरोध खोलकर रक्त संचार बढ़ाना।',
    },
  },
  {
    id: 'oligospermia',
    nameEn: 'Oligospermia (Low Sperm Count < 15 Million/ml)',
    nameHi: 'ओलिगोस्पर्मिया (अल्प शुक्राणुता / Low Sperm Count)',
    ayurvedicTerm: 'अल्पशुक्र (Alpa Shukra)',
    normalRange: 'Normal: > 15–200 Million / ml (Found: 1–10 M/ml)',
    severity: 'high',
    trigger: {
      en: 'Oxidative cellular stress, prolonged sitting, laptop heat exposure, smoking, nutritional deficiencies (Zinc, Selenium, B12), and Pitta aggravation',
      hi: 'अत्यधिक गर्मी व लैपटॉप का प्रभाव, धूम्रपान, जिंक व विटामिन्स की कमी, और शरीर में बढ़ा हुआ पित्त दोष',
    },
    symptoms: {
      en: [
        'Sperm count consistently below WHO lower limit of 15 million per milliliter',
        'Sub-fertility and extended delay in successful conception',
        'Frequent fatigue, lower back ache, and reduced morning vitality',
      ],
      hi: [
        'वीर्य में शुक्राणुओं की कुल संख्या 15 मिलियन प्रति मिलीलीटर से काफी कम होना',
        'संतान प्राप्ति में लगातार असफलता',
        'पीठ के निचले हिस्से में दर्द, अत्यधिक थकान और शारीरिक कमजोरी',
      ],
    },
    pathology: {
      en: 'Testicular Leydig and Sertoli cells are starved of essential trace minerals and micro-nutrients. High scrotal temperature triggers accelerated apoptosis of nascent spermatozoa before maturity.',
      hi: 'शरीर में पित्त व ऊष्णता बढ़ने से वृषण का तापमान बढ़ता है जिससे विकसित होने से पहले ही शुक्राणु नष्ट होने लगते हैं।',
    },
    treatmentApproach: {
      en: 'Cooling Pitta-pacifying Vrishya rasayanas (Safed Musli, Shatavari, Gokshura, Praval Pishti) to restore scrotal temperature balance and multiply sperm density naturally.',
      hi: 'पित्त शामक व वृष्य औषधियां (सफेद मूसली, शतावरी, गोक्षुर, प्रवाल पिष्टी) द्वारा वृषण का तापमान संतुलित करना और प्राकृतिक रूप से संख्या बढ़ाना।',
    },
  },
  {
    id: 'asthenozoospermia',
    nameEn: 'Asthenozoospermia (Poor Sperm Motility)',
    nameHi: 'एस्थेनोज़ूस्पर्मिया (शुक्राणुओं की मंद गतिशीलता / Low Motility)',
    ayurvedicTerm: 'शुक्र गति मंदता (Vata-Pitta Shukra Dushti)',
    normalRange: 'Normal: > 40% Progressive Motility (PR + NP)',
    severity: 'high',
    trigger: {
      en: 'Mitochondrial ATP depletion in the sperm flagellum, localized infections, varicocele, and heavy metal or free-radical toxicity',
      hi: 'शुक्राणु की पूंछ (Flagellum) को ऊर्जा न मिलना, नसों में रुकावट (Varicocele) व टॉक्सिन्स',
    },
    symptoms: {
      en: [
        'Progressive motile sperm drops below 32% or total motility below 40%',
        'High percentage of sluggish, circling, or non-motile spermatozoa',
        'Sperm unable to swim through cervical mucus to reach the fallopian ovum',
      ],
      hi: [
        'तेजी से आगे बढ़ने वाले शुक्राणुओं (Actively Motile) का प्रतिशत बहुत कम होना',
        'ज्यादातर शुक्राणु सुस्त (Sluggish) या स्थिर (Non-motile) होना',
        'शुक्राणु का अंडे तक पहुंचने में असमर्थ होना',
      ],
    },
    pathology: {
      en: 'The mitochondrial sheath wrapping the sperm midpiece fails to generate sufficient ATP energy. Unani medicine classifies this as Barid (excessive coldness/stagnation) or Su-e-Mizaj of the seminal vesicles.',
      hi: 'शुक्राणु की पूंछ में माइटोकॉन्ड्रियल ऊर्जा की कमी होती है। यूनानी में इसे वीर्य का मिज़ाज बिगड़ने और अक्रियाशीलता के रूप में देखा जाता है।',
    },
    treatmentApproach: {
      en: 'Bio-energizing herbal extracts (Akarkara, Jaiphal, Salab Misri, Shilajit) that stimulate mitochondrial bio-energetics and propel vigorous forward linear swimming motility.',
      hi: 'अकरकरा, जावित्री, सालब मिश्री और शुद्ध शिलाजीत युक्त योग जो शुक्राणु की गतिशीलता और जीवन शक्ति को कई गुना बढ़ाते हैं।',
    },
  },
  {
    id: 'pyospermia',
    nameEn: 'Pyospermia (Leukocytospermia / Pus Cells in Semen)',
    nameHi: 'पायोस्पर्मिया (वीर्य में मवाद कोशिकाएं / Pus Cells in Semen)',
    ayurvedicTerm: 'पूयशुक्र (Pooya Shukra / Pittaja Dushti)',
    normalRange: 'Normal: < 1 Million WBC/ml or < 1 Pus cell/HPF',
    severity: 'medium',
    trigger: {
      en: 'Sub-clinical chronic prostatitis, seminal vesiculitis, epididymitis, or urinary tract microbial colonization',
      hi: 'प्रोस्टेट ग्रंथि या वीर्य ग्रंथियों में पुराना संक्रमण व आंतरिक सूजन',
    },
    symptoms: {
      en: [
        'Presence of 2–4 or more pus cells per high-power field (HPF) on microscopic examination',
        'Yellowish discoloration or thickened seminal fluid with prolonged liquefaction time (>30 min)',
        'Mild burning sensation during ejaculation or post-urination discomfort',
        'Massive oxidative stress degrading sperm DNA integrity and causing agglutination',
      ],
      hi: [
        'माइक्रोस्कोप जांच में 2 से 4 या अधिक मवाद कोशिकाएं (Pus Cells) दिखाई देना',
        'वीर्य का रंग पीला होना और पिघलने का समय (Liquefaction time) 30 मिनट से अधिक होना',
        'स्खलन या पेशाब के बाद हल्की जलन या पेल्विक क्षेत्र में खिंचाव',
        'मवाद के कारण शुक्राणुओं का आपस में चिपकना (Agglutination)',
      ],
    },
    pathology: {
      en: 'White blood cells (leukocytes) produce toxic reactive oxygen species (ROS). This ROS attacks the delicate polyunsaturated fatty acid membranes of spermatozoa, immobilizing them and creating functional infertility.',
      hi: 'मवाद कोशिकाएं विषैले तत्व छोड़ती हैं जो शुक्राणुओं की झिल्ली को नष्ट कर देती हैं और उनकी तैरने की क्षमता समाप्त कर देती हैं।',
    },
    treatmentApproach: {
      en: 'Natural anti-microbial and anti-inflammatory detoxifiers (Chandraprabha Vati, Gokshuradi Guggulu, Neem-Khadira Kwath) to sterilize the urogenital tract and bring pus cells back to NIL.',
      hi: 'चंद्रप्रभा वटी, गोक्षुरादि गुग्गुलु व गिलोय सत्व द्वारा प्रोस्टेट व मूत्र नलिकाओं का संक्रमण दूर कर मवाद को जड़ से समाप्त करना।',
    },
  },
  {
    id: 'teratozoospermia',
    nameEn: 'Teratozoospermia (Abnormal Sperm Morphology)',
    nameHi: 'टेराटोज़ूस्पर्मिया (शुक्राणु की विकृत बनावट / Abnormal Morphology)',
    ayurvedicTerm: 'विकृत शुक्र कीट (Vikrita Shukra Keeta)',
    normalRange: 'Normal: > 4% Normal Kruger Strict Morphology',
    severity: 'medium',
    trigger: {
      en: 'Testicular DNA fragmentation, environmental toxins, heavy smoking, chronic stress, and varicocele backflow',
      hi: 'डीएनए का टूटना, रसायन, प्रदूषण व नसों में रक्त का रुकाव',
    },
    symptoms: {
      en: [
        'Over 96% of spermatozoa have abnormal forms: pinheads, double heads, coiled tails, or absent acrosomes',
        'Recurrent early chemical pregnancies or failure of natural fertilization',
        'Defective genetic packaging preventing egg penetration',
      ],
      hi: [
        'अधिकांश शुक्राणुओं का सिर मुड़ा होना, दो पूंछ होना या सिर का चपटा होना',
        'गर्भधारण न ठहर पाना या बार-बार मिसकैरेज होना',
        'शुक्राणु का अंडे की बाहरी परत को भेदने में असमर्थ होना',
      ],
    },
    pathology: {
      en: 'Errors in spermiogenesis where the developing round spermatid fails to condense its nucleus and package the enzymatic acrosomal cap correctly.',
      hi: 'शुक्राणु निर्माण के दौरान नाभिक व पूंछ का सही विकास न होना, जिससे अस्वस्थ शुक्राणु बनते हैं।',
    },
    treatmentApproach: {
      en: 'DNA-protective Rasayanas rich in natural antioxidants (Amalaki Rasayana, Yashad Bhasma, Suvarna Malini Vasant) to ensure flawless cellular morphology.',
      hi: 'डीएनए सुरक्षा देने वाले आमलकी रसायन, यशद भस्म व स्वर्ण मालिनी वसंत द्वारा स्वस्थ व उत्तम बनावट वाले शुक्राणुओं का निर्माण।',
    },
  },
];

export const SpermHealthGuide: React.FC<SpermHealthGuideProps> = ({ lang, onClose }) => {
  const { clinicInfo } = useClinic();
  const [expandedId, setExpandedId] = useState<string | null>('azoospermia');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-12">
      {/* Header Banner */}
      <div className="rounded-2xl bg-gradient-to-br from-[#1b2820] to-[#121c16] border border-[#2c4233] p-6 sm:p-8 text-white space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#274836] text-[#86efac] text-xs font-bold uppercase tracking-wider border border-[#3b664d]">
              {lang === 'en' ? 'Clinical Andrology & Reproductive Science' : 'नैदानिक पुरुष प्रजनन विज्ञान एवं आयुर्वेद'}
            </span>
            <span className="text-xs text-[#a3b8ab] font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#86efac]" />
              {lang === 'en' ? 'Verified by Dr. Mobin (B.U.M.S., M.H.T.)' : 'डॉ. मोबिन (बी.यू.एम.एस.) द्वारा प्रमाणित'}
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
            ? 'Understanding Semen Analysis, Azoospermia & Sperm Recovery'
            : 'वीर्य जांच (सीमेन एनालिसिस), शून्य शुक्राणु व प्राकृतिक सुधार का संपूर्ण विज्ञान'}
        </h2>

        <p className="text-sm sm:text-base text-[#c5d6cc] max-w-3xl leading-relaxed">
          {lang === 'en'
            ? 'A diagnosis of NIL sperm count (Azoospermia) or low motility often leads to premature despair or expensive surgical procedures. However, the testis possesses tremendous regenerative capacity when pelvic micro-circulation is restored and systemic Shukra Dhatu malnutrition is treated at the cellular level.'
            : 'वीर्य जांच में शुक्राणु शून्य (NIL / Azoospermia) या कम आने पर मरीज़ अत्यधिक निराश हो जाते हैं। परंतु आयुर्वेद और यूनानी चिकित्सा के अनुसार सही खान-पान, रक्त संचार में सुधार और शास्त्रीय शुक्रजनन औषधियों से बंद नलिकाओं को खोलकर शुक्राणुओं का नया निर्माण संभव है, जैसा कि हमारी क्लिनिकल रिपोर्ट्स में प्रमाणित है।'}
        </p>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-[#223328] border border-[#344d3d] space-y-1">
            <div className="flex items-center gap-2 text-[#86efac] font-bold text-xs">
              <Microscope className="w-4 h-4 text-[#86efac]" />
              <span>{lang === 'en' ? 'WHO Semen Standards' : 'डब्ल्यू.एच.ओ. मानक'}</span>
            </div>
            <p className="text-[11px] text-[#b0c4b8] leading-normal">
              {lang === 'en'
                ? 'Volume >1.5ml, Count >15M/ml, Motility >40%, Liquefaction <30 min, Pus <1/HPF.'
                : 'मात्रा >1.5 मिली, संख्या >15 मिलियन, गतिशीलता >40%, पिघलने का समय <30 मिनट।'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#223328] border border-[#344d3d] space-y-1">
            <div className="flex items-center gap-2 text-[#86efac] font-bold text-xs">
              <Flame className="w-4 h-4 text-[#f59e0b]" />
              <span>{lang === 'en' ? 'Shukra Dhatu Formation' : 'सप्त धातु व शुक्र पोषण'}</span>
            </div>
            <p className="text-[11px] text-[#b0c4b8] leading-normal">
              {lang === 'en'
                ? 'Shukra is the 7th deepest tissue. Weak metabolic Agni starves spermatogenesis from root.'
                : 'रस-रक्त-मांस-मेद-अस्थि-मज्जा के बाद ही शुद्ध शुक्र धातु का निर्माण होता है।'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#223328] border border-[#344d3d] space-y-1">
            <div className="flex items-center gap-2 text-[#86efac] font-bold text-xs">
              <Droplets className="w-4 h-4 text-[#60a5fa]" />
              <span>{lang === 'en' ? 'Pelvic Micro-Perfusion' : 'पेल्विक रक्त संचार'}</span>
            </div>
            <p className="text-[11px] text-[#b0c4b8] leading-normal">
              {lang === 'en'
                ? 'Sacral Hijama clears stagnant venous heat, rejuvenating testicular Leydig cells.'
                : 'हिजामा द्वारा कमर व पेल्विक नसों की गर्मी व अशुद्धियां निकालकर वृषण को नई ऊर्जा देना।'}
            </p>
          </div>
        </div>
      </div>

      {/* Accordion of 5 Major Semen Conditions */}
      <div className="space-y-4">
        <div className="space-y-1">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2e5742]">
            {lang === 'en' ? 'Clinical Pathology Guide' : 'नैदानिक विकृति विवरण'}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1a3325]">
            {lang === 'en'
              ? 'The 5 Major Semen Analysis Conditions We Treat'
              : 'वीर्य से संबंधित 5 प्रमुख रोग व उनका संपूर्ण आयुर्वेदिक समाधान'}
          </h3>
        </div>

        <div className="space-y-3">
          {SPERM_CONDITIONS.map((cond) => {
            const isExpanded = expandedId === cond.id;
            return (
              <div
                key={cond.id}
                className="rounded-xl border border-[#d6cbba] bg-white overflow-hidden shadow-xs transition-all"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleExpand(cond.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 hover:bg-[#faf6ee] transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#1f4a34] bg-[#eef7f2] px-2 py-0.5 rounded border border-[#cbe4d6]">
                        {cond.ayurvedicTerm}
                      </span>
                      <span
                        className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                          cond.severity === 'critical'
                            ? 'bg-rose-100 text-rose-800 border border-rose-200'
                            : cond.severity === 'high'
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        }`}
                      >
                        {cond.severity === 'critical'
                          ? lang === 'en'
                            ? 'Critical Zero Count'
                            : 'गंभीर शून्य संख्या'
                          : cond.severity === 'high'
                          ? lang === 'en'
                            ? 'High Impact'
                            : 'उच्च प्रभाव'
                          : lang === 'en'
                          ? 'Moderate'
                          : 'मध्यम'}
                      </span>
                      <span className="text-[11px] text-[#716657] font-mono">
                        {cond.normalRange}
                      </span>
                    </div>

                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#1e3427]">
                      {lang === 'en' ? cond.nameEn : cond.nameHi}
                    </h4>

                    <p className="text-xs text-[#635a4d] line-clamp-1 sm:line-clamp-none">
                      <strong className="text-[#3c362d]">
                        {lang === 'en' ? 'Trigger:' : 'मुख्य कारण:'}{' '}
                      </strong>
                      {cond.trigger[lang]}
                    </p>
                  </div>

                  <div className="p-1.5 rounded-full bg-[#efe8dc] text-[#332c23] shrink-0 mt-1 sm:mt-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="border-t border-[#e2d8c7] p-4 sm:p-6 bg-[#fdfbf7] space-y-5 text-xs sm:text-sm text-[#4a4237]">
                    {/* Symptoms List */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 font-bold text-[#8f2828] text-xs uppercase tracking-wider">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                        <span>
                          {lang === 'en'
                            ? 'Key Clinical Signs & Lab Findings'
                            : 'मुख्य लक्षण व पैथोलॉजी जांच रिपोर्ट'}
                        </span>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cond.symptoms[lang].map((sym, sIdx) => (
                          <li
                            key={sIdx}
                            className="flex items-start gap-2 p-2 rounded-lg bg-white border border-[#e8ded0] text-xs"
                          >
                            <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                            <span>{sym}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Underlying Pathology */}
                    <div className="p-3.5 rounded-xl bg-[#f4eee4] border border-[#ded3c3] space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-[#1f4a34] text-xs uppercase tracking-wider">
                        <Activity className="w-3.5 h-3.5 text-[#2b6a4a]" />
                        <span>
                          {lang === 'en'
                            ? 'Underlying Biological & Ayurvedic Mechanism'
                            : 'जैविक विकृति एवं आयुर्वेदिक दृष्टिकोण'}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-[#3a352d]">
                        {cond.pathology[lang]}
                      </p>
                    </div>

                    {/* Dr Mobin Treatment Approach */}
                    <div className="p-3.5 rounded-xl bg-[#ebf5ef] border border-[#bcdbc7] space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-[#195333] text-xs uppercase tracking-wider">
                        <CheckCircle className="w-3.5 h-3.5 text-[#1b7a48]" />
                        <span>
                          {lang === 'en'
                            ? 'Dr. Mobin Clinical Treatment Protocol'
                            : 'डॉ. मोबिन का विशेष उपचार प्रोटोकॉल'}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-[#23422f]">
                        {cond.treatmentApproach[lang]}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lab Verification Guidance & Doctor Booking CTA */}
      <div className="rounded-2xl bg-[#1d2b21] border border-[#2e4735] p-6 sm:p-8 text-white space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#86efac]">
            {lang === 'en' ? 'Verified Laboratory Results' : 'प्रमाणित क्लिनिकल परिणाम'}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
            {lang === 'en'
              ? 'How Dr. Mobin Achieves Spermatogenic Recovery'
              : 'शून्य शुक्राणु (Azoospermia) से सक्रिय शुक्राणु बनने की प्रक्रिया'}
          </h3>
          <p className="text-xs sm:text-sm text-[#b9cebf] max-w-3xl leading-relaxed">
            {lang === 'en'
              ? 'As documented in the PK Pathology Lab reports shown above, patient aged 26 progressed from TOTAL SPERM COUNT: NIL (zero motility) on 11 May 2025 to 03% active motile sperm count by 16 June 2025 under targeted classical herbal intervention.'
              : 'ऊपर दिखाए गए पीके पैथोलॉजी लैब के दस्तावेजों के अनुसार, 26 वर्षीय मरीज़ के शुक्राणु 11 मई 2025 को शून्य (NIL) थे। डॉ. मोबिन की विशेष देखरेख में 5 सप्ताह के उपचार के बाद 16 जून 2025 को सक्रिय गतिशील शुक्राणुओं की उत्पत्ति शुरू हुई।'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#25392c] border border-[#375340] space-y-1.5">
            <span className="text-xs font-bold text-[#86efac] block">
              {lang === 'en' ? '1. Clearing Stagnant Heat' : '1. पेल्विक अशुद्धि निवारण'}
            </span>
            <p className="text-xs text-[#a9c2b1] leading-relaxed">
              {lang === 'en'
                ? 'Sacral and lower back cupping drains toxic capillary pooling, reducing testicular thermal stress.'
                : 'हिजामा द्वारा कमर व पेल्विक नसों से दूषित रक्त निकाला जाता है जिससे अंडकोष का तापमान सामान्य होता है।'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#25392c] border border-[#375340] space-y-1.5">
            <span className="text-xs font-bold text-[#86efac] block">
              {lang === 'en' ? '2. Shukra Janana Herbs' : '2. प्राकृतिक शुक्रजनन रसायन'}
            </span>
            <p className="text-xs text-[#a9c2b1] leading-relaxed">
              {lang === 'en'
                ? 'Kaunch Beej, Shuddha Shilajit, Safed Musli, and Swarna Vanga supply raw precursors for germ cell division.'
                : 'कौंच बीज, शुद्ध शिलाजीत व त्रिवंग भस्म वृषण की नलिकाओं को सीधे शुक्राणु निर्माण का पोषण देते हैं।'}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#25392c] border border-[#375340] space-y-1.5">
            <span className="text-xs font-bold text-[#86efac] block">
              {lang === 'en' ? '3. Eliminating Pus Cells' : '3. मवाद व संक्रमण का खात्मा'}
            </span>
            <p className="text-xs text-[#a9c2b1] leading-relaxed">
              {lang === 'en'
                ? 'Cooling urinary detoxifiers clear leukocytospermia, protecting live sperm from oxidative destruction.'
                : 'मूत्र व प्रोस्टेट मार्ग की सूजन दूर करने से नए बने शुक्राणु सुरक्षित रहते हैं और तेजी से गति करते हैं।'}
            </p>
          </div>
        </div>

        {/* Doctor Consultation Action */}
        <div className="p-5 rounded-xl bg-[#24352a] border border-[#375240] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">
              {lang === 'en'
                ? 'Have a Low Sperm Count or Azoospermia Report?'
                : 'क्या आपकी वीर्य जांच रिपोर्ट में शुक्राणु कम या शून्य (NIL) आए हैं?'}
            </h4>
            <p className="text-xs text-[#b8ccc0]">
              {lang === 'en'
                ? 'Send your pathology report directly to Dr. Mobin on WhatsApp for personal evaluation and guidance.'
                : 'अपनी पुरानी या नई सीमेन रिपोर्ट सीधे डॉ. मोबिन को व्हाट्सएप पर भेजें और सही समाधान जानें।'}
            </p>
          </div>

          <a
            href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
              lang === 'en'
                ? 'Hello Dr. Mobin, I have a semen analysis report showing low/nil sperm count. I would like to consult with you.'
                : 'नमस्ते डॉ. मोबिन, मेरी सीमेन जांच रिपोर्ट में शुक्राणु कम/शून्य आए हैं। मुझे आपसे परामर्श लेना है।'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-5 py-2.5 rounded-lg text-xs font-bold shadow-md hover:bg-[#1ebd59] transition-colors shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Send Report on WhatsApp' : 'रिपोर्ट व्हाट्सएप पर भेजें'}</span>
          </a>
        </div>

        {/* Optional Footer Close Button */}
        {onClose && (
          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#223328] hover:bg-[#2d4234] text-[#b9cebf] hover:text-white border border-[#375240] text-xs font-semibold transition-colors"
            >
              <ChevronUp className="w-4 h-4 text-[#86efac]" />
              <span>{lang === 'en' ? 'Hide Sperm Health Guide' : 'वीर्य जांच गाइड बंद करें'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
