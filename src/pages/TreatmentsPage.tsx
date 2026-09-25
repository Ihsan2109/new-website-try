import React from 'react';
import {
  HeartPulse,
  Activity,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { useClinic } from '../context/ClinicContext';

interface TreatmentsPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({ lang, onNavigate }) => {
  const { images, clinicInfo } = useClinic();
  return (
    <div className="space-y-16 pb-12">
      {/* Hero with Visual Banner */}
      <section className="bg-gradient-to-b from-[#f5ede0] via-[#f9f5ee] to-[#fcfaf7] border-b border-[#e5dcce] pt-10 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8deca] text-[#2b4d3a] text-xs font-semibold uppercase tracking-wider">
                <span>
                  {lang === 'en'
                    ? 'Clinical Areas & Traditional Therapies'
                    : 'उपचार क्षेत्र एवं पारंपरिक चिकित्सा'}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1a3325] tracking-tight">
                {lang === 'en' ? 'Treatment Areas & Therapies' : 'उपचार क्षेत्र एवं थेरेपी'}
              </h1>

              <p className="text-base sm:text-lg text-[#4a4237] leading-relaxed max-w-2xl">
                {lang === 'en'
                  ? 'Detailed information on Hijama (Blood & Dry Cupping) by certified M.H.T. Dr. Mobin, sexual wellbeing, piles management, and classical Ayurvedic, Unani and Siddha care.'
                  : 'प्रमाणित एम.एच.टी. डॉ. मोबिन द्वारा हिजामा (ब्लड एवं ड्राई कपिंग), यौन स्वास्थ्य, बवासीर एवं शास्त्रीय आयुर्वेद, यूनानी और सिद्ध उपचार का प्रामाणिक विवरण।'}
              </p>

              {/* Quick Jump Anchors */}
              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href="#hijama-therapy"
                  className="px-3 py-1.5 rounded-lg bg-[#284838] text-white text-xs font-medium hover:bg-[#1f372a] transition-colors"
                >
                  {lang === 'en' ? '★ Hijama & Cupping (M.H.T.)' : '★ हिजामा एवं कपिंग (एम.एच.टी.)'}
                </a>
                <a
                  href="#sexual-health"
                  className="px-3 py-1.5 rounded-lg bg-[#f0e8d8] text-[#2c261e] border border-[#ded2bd] text-xs font-medium hover:bg-[#e2d5bd] transition-colors"
                >
                  {lang === 'en' ? 'Sexual Health' : 'यौन स्वास्थ्य'}
                </a>
                <a
                  href="#piles"
                  className="px-3 py-1.5 rounded-lg bg-[#f0e8d8] text-[#2c261e] border border-[#ded2bd] text-xs font-medium hover:bg-[#e2d5bd] transition-colors"
                >
                  {lang === 'en' ? 'Piles & Anorectal' : 'बवासीर एवं गुदा रोग'}
                </a>
                <a
                  href="#chronic-illness"
                  className="px-3 py-1.5 rounded-lg bg-[#f0e8d8] text-[#2c261e] border border-[#ded2bd] text-xs font-medium hover:bg-[#e2d5bd] transition-colors"
                >
                  {lang === 'en' ? 'Chronic Diseases' : 'पुराने रोग'}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-3 border-white shadow-lg relative aspect-[16/10] bg-[#1a2d21] group">
                <img
                  src={images.heroBanner}
                  alt="Ayurvedic Treatment & Consultation Practice"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-white font-serif font-bold text-sm">
                    {lang === 'en' ? 'Ayurvedic Pulse & Clinical Evaluation' : 'नाड़ी परीक्षण एवं समग्र स्वास्थ्य मूल्यांकन'}
                  </span>
                  <p className="text-[11px] text-[#cfc2b0]">
                    {lang === 'en'
                      ? 'Root-cause diagnosis respecting classical principles.'
                      : 'दोष-वैषम्य का विश्लेषण और शास्त्रीय पद्धति से उपचार।'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION AT TOP: Hijama Therapy (Blood Cupping & Dry Cupping) by Dr. Mobin (M.H.T.) */}
      <section id="hijama-therapy" className="max-w-6xl mx-auto px-4 scroll-mt-24">
        <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-[#2b513f]/30 shadow-md space-y-8">
          {/* Header Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#ebdcca] pb-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dcfce7] text-[#166534] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#16a34a]" />
                <span>
                  {lang === 'en'
                    ? 'Certified M.H.T. (Medical Hijama Therapy) Specialist'
                    : 'प्रमाणित एम.एच.टी. (मेडिकल हिजामा थेरेपी) विशेषज्ञ'}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#1a3325]">
                {lang === 'en'
                  ? 'Hijama Therapy — Blood Cupping & Dry Cupping'
                  : 'हिजामा थेरेपी — ब्लड कपिंग एवं ड्राई कपिंग'}
              </h2>
              <p className="text-xs sm:text-sm text-[#5a5042] leading-relaxed">
                {lang === 'en'
                  ? 'Traditional Unani Regimenal Therapy (Ilaj-bit-Tadbeer) conducted under strict clinical sterilization by Dr. Mobin (B.U.M.S., M.H.T.) using 100% disposable single-use vacuum cups.'
                  : 'डॉ. मोबिन (बी.यू.एम.एस., एम.एच.टी.) द्वारा 100% सिंगल-यूज़ डिस्पोजेबल कप्स और पूर्ण चिकित्सकीय स्वच्छता के साथ शास्त्रीय यूनानी इलाज-बित-तदबीर (हिजामा कपिंग)।'}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2">
              <a
                href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
                  lang === 'en'
                    ? 'Hello Dr. Mobin, I want to inquire and book a Hijama (Cupping Therapy) session.'
                    : 'नमस्ते डॉ. मोबिन, मैं हिजामा (कपिंग थेरेपी) के बारे में जानकारी व समय लेना चाहता हूँ।'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1ebd59] text-white px-5 py-2.5 rounded-lg text-xs font-bold shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{lang === 'en' ? 'Book Hijama Session' : 'हिजामा सत्र बुक करें'}</span>
              </a>
              <button
                onClick={() => onNavigate('offers')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-[#2b513f] text-[#2b513f] hover:bg-[#2b513f] hover:text-white text-xs font-semibold transition-colors"
              >
                <span>{lang === 'en' ? 'View Hijama Package' : 'हिजामा पैकेज देखें'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Visual Showcase: 3 Authentic Clinical Images from User's Clinic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Image 1: Authentic Scalp & Cervical Sunnah Hijama */}
            <div className="rounded-xl overflow-hidden border border-[#ded2bd] bg-[#16271c] relative group shadow-sm">
              <div className="aspect-[4/3] relative">
                <img
                  src={images.hijamaCupping}
                  alt="Authentic Scalp Hijama Cupping at M.S Ayurvedic Centre"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <span className="text-white font-serif font-bold text-sm">
                    {lang === 'en' ? 'Original Scalp & Sunnah Hijama' : 'सिर एवं गर्दन पर सुन्नत हिजामा (मूल फ़ोटो)'}
                  </span>
                  <p className="text-[11px] text-[#e0d6c5] mt-0.5">
                    {lang === 'en'
                      ? 'Vacuum cupping on vertex and cervical vertebra for migraines, hair health & detox.'
                      : 'सिर के शीर्ष व ग्रीवा पर माइग्रेन, बाल झड़ने और तनावमुक्ति हेतु मूल हिजामा प्रक्रिया।'}
                  </p>
                </div>
              </div>
            </div>

            {/* Image 2: Authentic Shoulder & Arm Muscular Cupping */}
            <div className="rounded-xl overflow-hidden border border-[#ded2bd] bg-[#16271c] relative group shadow-sm">
              <div className="aspect-[4/3] relative">
                <img
                  src={images.dryCupping}
                  alt="Original Shoulder & Arm Cupping in clinic"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <span className="text-white font-serif font-bold text-sm">
                    {lang === 'en' ? 'Original Shoulder & Arm Cupping' : 'कंधे एवं बांह पर वास्तविक कपिंग (मूल फ़ोटो)'}
                  </span>
                  <p className="text-[11px] text-[#e0d6c5] mt-0.5">
                    {lang === 'en'
                      ? 'Targeted suction for deltoid stiffness, athletic fatigue & chronic joint pain.'
                      : 'कंधे की जकड़न, मांसपेशियों के दर्द और साइटिका के लिए वास्तविक वैक्यूम कपिंग।'}
                  </p>
                </div>
              </div>
            </div>

            {/* Image 3: Authentic Treatment Bed & Equipment */}
            <div className="rounded-xl overflow-hidden border border-[#ded2bd] bg-[#16271c] relative group shadow-sm">
              <div className="aspect-[4/3] relative">
                <img
                  src={images.consultationRoom}
                  alt="Authentic clinical treatment bed and sterile cupping cart"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <span className="text-white font-serif font-bold text-sm">
                    {lang === 'en' ? 'Clinical Bed & Sterile Setup' : 'उपचार बेड व स्टेराइल उपकरण (मूल फ़ोटो)'}
                  </span>
                  <p className="text-[11px] text-[#e0d6c5] mt-0.5">
                    {lang === 'en'
                      ? 'Private clinic room equipped with sealed single-use kits, examination couch & antiseptic trolley.'
                      : 'निजी उपचार कक्ष, 100% डिस्पोजेबल सीलबंद कपिंग किट और एंटीसेप्टिक ड्रेसिंग ट्रॉली।'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Dives: Blood Cupping vs Dry Cupping */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Blood Cupping (Wet Cupping / Hijama Bish-Shart) */}
            <div className="p-6 rounded-xl bg-[#faf6ee] border border-[#e5dcce] space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#fee2e2] text-[#991b1b] flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1f372a]">
                  {lang === 'en'
                    ? 'Blood Cupping (Wet Cupping / Hijama Bish-Shart)'
                    : 'वेट कपिंग (ब्लड कपिंग / हिजामा बिश-शर्त)'}
                </h3>
              </div>
              <p className="text-xs text-[#52493d] leading-relaxed">
                {lang === 'en'
                  ? 'Blood cupping is the classical deep-cleansing form of Hijama. Negative vacuum suction is applied to designated therapeutic points to draw stagnant, sluggish capillary blood and metabolic toxins toward the superficial skin layer. Micro-superficial epidermal scratches are made with a sterile disposable micro-lancet, allowing congested toxic blood to release safely.'
                  : 'ब्लड कपिंग हिजामा का मूल और शास्त्रीय रूप है। चयनित बिंदुओं पर वैक्यूम द्वारा ठहरा हुआ दूषित रक्त और मेटाबॉलिक विषाक्त पदार्थ त्वचा की ऊपरी सतह पर लाए जाते हैं। फिर एक नए स्टेराइल माइक्रो-लैंसेट से अत्यंत हल्के, दर्द-रहित खरोंच जैसे कट लगाकर यह दूषित रक्त निकाला जाता है।'}
              </p>
              <div className="space-y-1.5 pt-1 text-xs text-[#3d372e]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'en'
                      ? 'Removes cellular debris, high uric acid & stagnant inflammatory mediators'
                      : 'शरीर में जमे यूरिक एसिड, दूषित रक्त कणों और सूजन पैदा करने वाले तत्वों को बाहर निकालता है'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'en'
                      ? 'Stimulates fresh oxygenated blood production and lymphatic cleansing'
                      : 'ताज़ा शुद्ध रक्त के प्रवाह और रोग प्रतिरोधक क्षमता (लिम्फैटिक तंत्र) को जाग्रत करता है'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'en'
                      ? 'Relieves persistent migraines, chronic knee / back pain, and stubborn skin eruptions'
                      : 'पुराने माइग्रेन, जोड़ों के दर्द, कमर दर्द और त्वचा विकारों में तुरंत राहत देता है'}
                  </span>
                </div>
              </div>
            </div>

            {/* Dry Cupping (Hijama Jafaa) */}
            <div className="p-6 rounded-xl bg-[#faf6ee] border border-[#e5dcce] space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#dcfce7] text-[#166534] flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1f372a]">
                  {lang === 'en'
                    ? 'Dry Cupping (Hijama Jafaa) & Moving Cupping'
                    : 'ड्राई कपिंग (हिजामा जाफ़ा) एवं ग्लाइडिंग कपिंग'}
                </h3>
              </div>
              <p className="text-xs text-[#52493d] leading-relaxed">
                {lang === 'en'
                  ? 'Dry cupping involves pure vacuum suction without incisions or blood extraction. The cups are placed over tense muscle knots, acupuncture trigger points, or moved smoothly along the back with medicated herbal oils (moving / gliding cupping). This breaks deep fascial adhesions and releases chronic muscle stiffness.'
                  : 'ड्राई कपिंग में बिना किसी कट या खून निकाले केवल वैक्यूम खिंचाव दिया जाता है। कप्स को जकड़ी हुई मांसपेशियों और नसों के बिंदुओं पर लगाया जाता है या औषधीय तेल लगाकर पीठ पर फिसलाया जाता है (मूविंग कपिंग)। इससे मांसपेशियों की गांठें और अंदरूनी खिंचाव दूर होता है।'}
              </p>
              <div className="space-y-1.5 pt-1 text-xs text-[#3d372e]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'en'
                      ? 'Releases tight myofascial knots in neck, shoulders, and lower lumbar spine'
                      : 'गर्दन, कंधे और कमर की जकड़ी हुई मांसपेशियों (मायोफेशियल नॉट्स) को तुरंत खोलता है'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'en'
                      ? 'Calms irritated nerves for sciatica and numbness without medication'
                      : 'साइटिका, नसों के दबने और सुन्नपन में तंत्रिका तंत्र को शांति प्रदान करता है'}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0 mt-0.5" />
                  <span>
                    {lang === 'en'
                      ? 'Promotes deep somatic relaxation, better sleep & stress release'
                      : 'गहरी शारीरिक शांति, गहरी नींद और दिनभर की मानसिक थकान दूर करने में लाभकारी'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Indications Grid */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2b513f]">
              {lang === 'en' ? 'Conditions Effectively Treated by Hijama' : 'हिजामा द्वारा विशेष रूप से लाभांवित होने वाले रोग'}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
              {[
                {
                  en: 'Sciatica & Lower Back Pain',
                  hi: 'साइटिका व कमर दर्द',
                },
                {
                  en: 'Cervical & Neck Spasms',
                  hi: 'सर्वाइकल व गर्दन जकड़न',
                },
                {
                  en: 'Migraine & Chronic Headache',
                  hi: 'माइग्रेन व पुराना सिरदर्द',
                },
                {
                  en: 'Joint Pain & High Uric Acid',
                  hi: 'गठिया व यूरिक एसिड',
                },
                {
                  en: 'Acne, Boils & Skin Itch',
                  hi: 'कील-मुँहासे व त्वचा विकार',
                },
                {
                  en: 'Hair Fall, Alopecia & Scalp Thinning',
                  hi: 'बाल झड़ना, एलोपेसिया व गंजापन',
                },
                {
                  en: 'Fatigue & Pelvic Vitality',
                  hi: 'शारीरिक सुस्ती व पौरुष शक्ति',
                },
              ].map((cond, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#faf6ee] border border-[#e5dcce] text-xs font-semibold text-[#1e3427] flex items-center justify-center min-h-[60px]"
                >
                  {lang === 'en' ? cond.en : cond.hi}
                </div>
              ))}
            </div>

            {/* Hair Fall Before & After Callout */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#203125] to-[#16241b] border border-[#314a39] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[#2b513f] text-[#86efac] border border-[#3b6b53]">
                    {lang === 'en' ? 'Verified Regrowth Result' : 'सत्यापित क्लिनिकल परिणाम'}
                  </span>
                  <span className="text-xs text-[#9fc0ad]">
                    {lang === 'en' ? 'Scalp Cupping + Ayurvedic Keshya' : 'स्कैल्प कपिंग + केश्य आयुर्वेद'}
                  </span>
                </div>
                <h4 className="font-serif text-base font-bold text-white">
                  {lang === 'en'
                    ? 'Suffering from Crown Vertex Hair Thinning or Alopecia?'
                    : 'क्या आप सिर के गंजेपन या तीव्र बाल झड़ने से परेशान हैं?'}
                </h4>
                <p className="text-xs text-[#b8cfc2]">
                  {lang === 'en'
                    ? 'Explore our clinical Before & After interactive slider and medical guide to hair fall diseases.'
                    : 'हमारे समीक्षा पेज पर मरीज़ों की पहले और बाद की तस्वीरें (Before & After) एवं बाल झड़ने के रोगों का विवरण देखें।'}
                </p>
              </div>

              <button
                onClick={() => onNavigate('reviews')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#86efac] text-[#122117] font-bold text-xs hover:bg-[#6ee7a7] transition-colors shrink-0 shadow-sm"
              >
                <span>{lang === 'en' ? 'View Hair Before & After' : 'हेयर बिफोर-आफ़्टर देखें'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hygiene & Safety Standards Banner */}
          <div className="p-5 rounded-xl bg-[#234331] text-[#f7f3eb] space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#86efac]" />
              <h4 className="font-serif text-base font-bold text-white">
                {lang === 'en' ? 'Our Strict Clinical Hygiene & Safety Protocol' : 'हमारी कठोर स्वच्छता एवं सुरक्षा संहिता'}
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#d0e2d7]">
              <div>
                <strong className="text-white block mb-0.5">
                  {lang === 'en' ? '100% Disposable Cups:' : '100% डिस्पोजेबल कप्स:'}
                </strong>
                {lang === 'en'
                  ? 'Each vacuum cup is brand new, sealed in plastic, opened in front of you, and discarded immediately. We never reuse cups.'
                  : 'हर कप नया, सीलबंद होता है जो आपके सामने खोला जाता है और सत्र के बाद तुरंत नष्ट कर दिया जाता है। कप्स कभी दोबारा इस्तेमाल नहीं होते।'}
              </div>
              <div>
                <strong className="text-white block mb-0.5">
                  {lang === 'en' ? 'Certified M.H.T. Technique:' : 'प्रमाणित एम.एच.टी. विधि:'}
                </strong>
                {lang === 'en'
                  ? 'Dr. Mobin holds a formal M.H.T. degree. Incisions are micro-superficial on the epidermis, virtually painless, and leave no permanent marks.'
                  : 'डॉ. मोबिन के पास एम.एच.टी. (MHT) की डिग्री है। कट केवल ऊपरी त्वचा पर बिल्कुल हल्के होते हैं, जिनमें दर्द नहीं होता और कोई निशान नहीं रहता।'}
              </div>
              <div>
                <strong className="text-white block mb-0.5">
                  {lang === 'en' ? 'Organic Herbal Antiseptic Care:' : 'शुद्ध औषधीय एंटीसेप्टिक देखभाल:'}
                </strong>
                {lang === 'en'
                  ? 'Treated with pure cold-pressed Kalonji (black seed) oil, known in classical Unani medicine for accelerated healing and tissue regeneration.'
                  : 'उपचार के बाद शुद्ध कोल्ड-प्रेस्ड कलौंजी तेल लगाया जाता है, जो घाव को तुरंत भरता है और संक्रमण से पूर्ण सुरक्षा देता है।'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Sexual Health & Wellbeing */}
      <section id="sexual-health" className="max-w-6xl mx-auto px-4 scroll-mt-24">
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#e3dacf] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-[#2e5742]">
              {lang === 'en' ? 'Confidential Consultation' : 'पूर्णतः गोपनीय परामर्श'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1f372a]">
              {lang === 'en' ? 'Sexual health and wellbeing' : 'यौन स्वास्थ्य एवं कल्याण'}
            </h2>
            <p className="text-xs text-[#706657] leading-relaxed">
              {lang === 'en'
                ? 'For men and women. The consultation is private and the conversation is led strictly by you without rush or embarrassment.'
                : 'पुरुषों और महिलाओं दोनों के लिए। परामर्श निजी होता है और बातचीत आपकी सहजता के अनुसार बिना किसी झिझक के चलती है।'}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4 text-sm text-[#443d34] leading-relaxed">
            <p>
              {lang === 'en'
                ? 'Sexual health problems are among the most common reasons people avoid seeing a doctor at all. They are also among the most misinformed, because the market for quick answers is enormous and much of it is dishonest. The purpose of this part of the practice is to give you an unhurried, confidential assessment instead.'
                : 'यौन स्वास्थ्य से जुड़ी समस्याएँ उन कारणों में सबसे ऊपर हैं जिनकी वजह से लोग डॉक्टर के पास जाते ही नहीं। इन्हीं समस्याओं के बारे में ग़लत जानकारी भी सबसे ज़्यादा फैली है, क्योंकि जल्दी हल बेचने वाला बाज़ार बहुत बड़ा है और उसका बड़ा हिस्सा बेईमान है। इस विभाग का उद्देश्य आपको इसके बजाय आराम से, गोपनीय रूप से जाँच और सलाह देना है।'}
            </p>

            <p>
              {lang === 'en'
                ? 'Concerns brought to the clinic include difficulties with sexual function, changes in desire, worries about fertility, discomfort or pain, and the anxiety that usually travels with all of these. Physical causes and emotional ones are rarely separate, and both are taken seriously. Underlying conditions such as diabetes, thyroid disorder, high blood pressure or the side effects of existing medication are looked for, because these are frequently the real explanation.'
                : 'क्लिनिक में आने वाली समस्याओं में यौन क्रिया से जुड़ी कठिनाइयाँ, इच्छा में बदलाव, प्रजनन क्षमता की चिंता, असहजता या दर्द, और इनके साथ चलने वाली घबराहट शामिल हैं। शारीरिक और मानसिक कारण अक्सर अलग नहीं होते, और दोनों को गंभीरता से लिया जाता है। मधुमेह, थायरॉइड, उच्च रक्तचाप या पहले से चल रही दवाओं के दुष्प्रभाव जैसे कारणों की भी जाँच की जाती है, क्योंकि असली वजह अक्सर यही निकलती है।'}
            </p>

            <p>
              {lang === 'en'
                ? 'You will not be sold a package on your first visit, and you will not be told that one remedy fixes everything. Where a problem is better handled by a urologist, an endocrinologist or a counsellor, you will be told that instead.'
                : 'पहली मुलाक़ात में आपको कोई पैकेज नहीं बेचा जाएगा, और न ही यह कहा जाएगा कि कोई एक दवा हर चीज़ ठीक कर देती है। यदि आपकी समस्या का बेहतर समाधान यूरोलॉजिस्ट, एंडोक्राइनोलॉजिस्ट या काउंसलर के पास है, तो आपको वही सलाह दी जाएगी।'}
            </p>

            {/* Legal Notice */}
            <div className="p-4 rounded-xl bg-[#faf4e6] border border-[#e8dcb8] text-xs text-[#634e1d] space-y-1">
              <strong className="block font-semibold">
                {lang === 'en' ? 'Statutory Compliance Notice:' : 'वैधानिक अनुपालन सूचना:'}
              </strong>
              <p>
                {lang === 'en'
                  ? 'Specific conditions in this area are discussed during consultation rather than listed on this page. Indian advertising rules (The Drugs and Magic Remedies Act) place limits on what a clinic may publish about treatment for sexual conditions, and this site adheres strictly to ethical standards.'
                  : 'इस क्षेत्र की विशेष समस्याओं पर चर्चा परामर्श के दौरान की जाती है, इस पृष्ठ पर उनकी सूची नहीं दी गई है। भारत के विज्ञापन संबंधी नियम (आपत्तिजनक विज्ञापन अधिनियम) इस बात पर सीमा लगाते हैं कि कोई क्लिनिक क्या प्रचार कर सकता है, और यह क्लिनिक उन नियमों का अक्षरशः पालन करता है।'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Piles & Anorectal Conditions */}
      <section id="piles" className="max-w-6xl mx-auto px-4 scroll-mt-24">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#202722] text-[#f2ece2] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-[#97c7ad]">
              {lang === 'en' ? 'Specialized Care' : 'विशेषज्ञ चिकित्सा'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {lang === 'en' ? 'Piles and anorectal conditions' : 'बवासीर और गुदा रोग'}
            </h2>
            <p className="text-xs text-[#b8ada0] leading-relaxed">
              {lang === 'en'
                ? 'Assessment, conservative management, and clear guidance on when surgery is the necessary or better answer.'
                : 'जाँच, प्राकृतिक उपचार, और यह स्पष्ट सलाह कि कब सर्जरी ही बेहतर या आवश्यक विकल्प है।'}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-5 text-sm text-[#d4c8ba] leading-relaxed">
            <p>
              {lang === 'en'
                ? 'Anorectal complaints are painful, embarrassing, and easy to put off. They also tend to worsen quietly. Early assessment usually means simpler treatment, and a great deal depends on unglamorous things: what you eat, how much water you drink, how long you sit, and how long you spend in the toilet.'
                : 'गुदा संबंधी शिकायतें दर्दनाक होती हैं, उनके बारे में बात करने में संकोच होता है, और इसलिए लोग उन्हें टालते रहते हैं। ये चुपचाप बढ़ती भी जाती हैं। जल्दी जाँच करा लेने पर उपचार आमतौर पर आसान होता है, और बहुत कुछ साधारण बातों पर निर्भर करता है — आप क्या खाते हैं, कितना पानी पीते हैं, कितनी देर बैठते हैं, और शौचालय में कितना समय बिताते हैं।'}
            </p>

            {/* Conditions Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {[
                { en: 'Piles, internal and external (Bawasir / Hemorrhoids)', hi: 'बवासीर, आंतरिक और बाहरी (अर्श)' },
                { en: 'Anal fissure (Painful crack or cut in mucosa)', hi: 'फिशर (गुदा में दरार व असहनीय जलन)' },
                { en: 'Fistula in ano (Bhagandar / Pus discharge track)', hi: 'भगंदर (फिस्टुला / मवाद रिसाव)' },
                { en: 'Pilonidal sinus (Cleft infection)', hi: 'पाइलोनाइडल साइनस' },
                { en: 'Long-standing chronic constipation (Malabaddhata)', hi: 'पुरानी व जिद्दी कब्ज़' },
                { en: 'Itching and irritation around the anus (Pruritus ani)', hi: 'गुदा के आसपास खुजली और जलन' },
              ].map((c, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-[#2a342e] border border-[#3b4940] text-xs text-white"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#86efac] shrink-0" />
                  <span>{lang === 'en' ? c.en : c.hi}</span>
                </div>
              ))}
            </div>

            <p>
              {lang === 'en'
                ? 'Treatment may involve internal medicines, local applications (medicated oils and herbal lepam), sitz baths, and a diet and bowel routine worked out with you. Cases are followed up methodically rather than handed over and forgotten.'
                : 'उपचार में आंतरिक दवाएँ, स्थानीय लेप (औषधीय तैल), सिट्ज़ बाथ, तथा आपके साथ मिलकर तय किया गया आहार और शौच का नियम शामिल हो सकता है। मामलों की समय-समय पर समीक्षा की जाती है, उन्हें देकर भुला नहीं दिया जाता।'}
            </p>

            {/* Urgent Warning Note */}
            <div className="p-4 rounded-xl bg-[#361c1e] border border-[#6d2f34] text-xs text-[#ffd6d9] space-y-1">
              <strong className="text-white block font-semibold">
                {lang === 'en' ? 'Clinical Red-Flag Warning:' : 'चिकित्सीय ख़तरे की चेतावनी:'}
              </strong>
              <p>
                {lang === 'en'
                  ? 'Bleeding from the back passage always deserves thorough examination, and it should never be casually assumed to be piles. Any sudden change in bowel habit, unexplained weight loss, or persistent rectal bleeding in someone over forty needs to be investigated properly by colonoscopy. Where that is the case you will be referred to a hospital immediately, not treated here.'
                  : 'मलद्वार से रक्तस्राव की जाँच हमेशा आवश्यक है, इसे बवासीर मान लेना कभी उचित नहीं। शौच की आदत में अचानक बदलाव, बिना कारण वज़न घटना, या चालीस वर्ष से अधिक उम्र में रक्तस्राव होने पर पूरी जाँच (कोलोनोस्कोपी) ज़रूरी है। ऐसी स्थिति में आपको तुरंत अस्पताल भेजा जाएगा, यहाँ इलाज नहीं किया जाएगा।'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Long-Standing Chronic Illness */}
      <section id="chronic" className="max-w-6xl mx-auto px-4 scroll-mt-24">
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#e3dacf] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-[#2e5742]">
              {lang === 'en' ? 'Constitutional Medicine' : 'प्रकृति आधारित चिकित्सा'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1f372a]">
              {lang === 'en' ? 'Long-standing illness' : 'पुराने रोग'}
            </h2>
            <p className="text-xs text-[#706657] leading-relaxed">
              {lang === 'en'
                ? 'Support that runs alongside the treatment your other doctors have prescribed, not instead of it.'
                : 'ऐसा सहयोग जो आपके अन्य चिकित्सकों द्वारा दिए गए इलाज के साथ चलता है, उसकी जगह नहीं लेता।'}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-5 text-sm text-[#443d34] leading-relaxed">
            <p>
              {lang === 'en'
                ? 'Chronic conditions are rarely solved in a single visit by anyone. What traditional medicine can often contribute is steady day to day management: easing symptoms, improving digestion and sleep, and building a routine that a person can actually keep to. That is the honest description of the work.'
                : 'पुराने रोग किसी भी चिकित्सा पद्धति में एक ही मुलाक़ात में ठीक नहीं होते। पारंपरिक चिकित्सा जो दे सकती है वह है रोज़मर्रा का स्थिर प्रबंधन — लक्षणों में राहत, पाचन और नींद में सुधार, और ऐसी दिनचर्या जिसे व्यक्ति सचमुच निभा सके। यही इस काम का सच्चा विवरण है।'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                {
                  en: 'Acidity, indigestion, sour reflux & irritable bowel (IBS)',
                  hi: 'अम्लता (एसिडिटी), अपच, खट्टी डकारें और आंतों की गड़बड़ी',
                },
                {
                  en: 'Skin complaints such as eczema, psoriasis & stubborn itch',
                  hi: 'एक्ज़िमा, सोरायसिस और पुरानी त्वचा की खुजली',
                },
                {
                  en: 'Joint pain, morning stiffness & rheumatic discomfort',
                  hi: 'जोड़ों का दर्द, सुबह की जकड़न और गठिया का दर्द',
                },
                {
                  en: 'Chronic cough, sinus congestion & recurrent breathlessness',
                  hi: 'पुरानी खाँसी, साइनस की तकलीफ़ और साँस फूलना',
                },
                {
                  en: 'Weight, appetite imbalance & metabolic sluggishness',
                  hi: 'वज़न, भूख की अनियमितता और धीमा मेटाबॉलिज्म',
                },
                {
                  en: 'Poor sleep, mental exhaustion & stress-related complaints',
                  hi: 'नींद की कमी, मानसिक तनाव और दिनभर की थकान',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#faf6ee] border border-[#e8ded0] text-xs text-[#2c261e] font-medium"
                >
                  {lang === 'en' ? item.en : item.hi}
                </div>
              ))}
            </div>

            {/* Note on Prescription Continuance */}
            <div className="p-4 rounded-xl bg-[#faf4e6] border border-[#e8dcb8] text-xs text-[#634e1d] flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#b07809] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {lang === 'en'
                  ? 'If you are being treated for diabetes, high blood pressure, heart disease, thyroid disorder, epilepsy or any condition needing regular medication, keep taking what has been prescribed. Bring the prescription with you so it can be taken into account. Nothing offered here replaces essential prescribed life-saving drugs.'
                  : 'यदि आपका मधुमेह, उच्च रक्तचाप, हृदय रोग, थायरॉइड, मिर्गी या किसी ऐसी बीमारी का इलाज चल रहा है जिसमें नियमित दवा ज़रूरी है, तो निर्धारित दवाएँ लेना जारी रखें। पर्ची साथ लाएँ ताकि उसे ध्यान में रखा जा सके। यहाँ दी जाने वाली कोई भी चीज़ उसका विकल्प नहीं है।'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#284838] text-white text-center space-y-4 shadow-lg">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            {lang === 'en'
              ? 'Describe your problem in your own words'
              : 'अपनी समस्या अपने शब्दों में बताएँ'}
          </h2>
          <p className="text-xs sm:text-sm text-[#d1e6db] max-w-xl mx-auto leading-relaxed">
            {lang === 'en'
              ? "You do not need medical vocabulary and you do not need to have worked out what is wrong. That is the doctor's job."
              : 'आपको चिकित्सा की भाषा जानने की ज़रूरत नहीं है, और न ही यह पता होना चाहिए कि बीमारी क्या है। यह काम डॉक्टर का है।'}
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-white text-[#1e382b] px-6 py-3 rounded-lg font-semibold text-sm shadow-xs hover:bg-[#eae1d0] transition-colors"
            >
              <span>{lang === 'en' ? 'Request an appointment' : 'अपॉइंटमेंट के लिए अनुरोध करें'}</span>
            </button>
            <a
              href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
                lang === 'en'
                  ? 'Hello Dr. Mobin, I would like to explain my health concern.'
                  : 'नमस्ते डॉ. मोबिन, मैं अपनी स्वास्थ्य समस्या के बारे में बताना चाहता हूँ।'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-xs hover:bg-[#1ebd59] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{lang === 'en' ? 'Message on WhatsApp' : 'व्हाट्सएप पर संदेश भेजें'}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
