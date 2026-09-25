import React from 'react';
import {
  Phone,
  MessageCircle,
  Clock,
  Shield,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  UserCheck,
  Lock,
  HelpCircle,
  MessageSquare,
  ShieldCheck,
  Instagram,
  Facebook,
  Award,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { useClinic } from '../context/ClinicContext';

interface HomePageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ lang, onNavigate }) => {
  const { images, clinicInfo } = useClinic();
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section with Visual Impact */}
      <section className="bg-gradient-to-b from-[#f5ede0] via-[#f9f5ee] to-[#fcfaf7] border-b border-[#e5dcce] pt-10 sm:pt-14 pb-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8deca] text-[#2b4d3a] text-xs font-semibold uppercase tracking-wider">
                <span>
                  {lang === 'en'
                    ? 'Ayurveda, Unani and Siddha Practice in Delhi / NCR'
                    : 'आयुर्वेद, यूनानी और सिद्ध चिकित्सा — दिल्ली / एनसीआर'}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1a3325] tracking-tight leading-[1.18]">
                {lang === 'en'
                  ? 'A private consultation, without embarrassment.'
                  : 'निजी परामर्श, बिना किसी झिझक के।'}
              </h1>

              <p className="text-base sm:text-lg text-[#4a4237] leading-relaxed max-w-2xl">
                {lang === 'en'
                  ? 'Many people wait years before asking about a problem they find difficult to talk about. At M.S Ayurvedic Centre, you speak with Dr. Mobin one to one, and what you say stays in that room.'
                  : 'बहुत से लोग ऐसी समस्या के बारे में पूछने में वर्षों लगा देते हैं जिस पर बात करना उन्हें कठिन लगता है। एम.एस आयुर्वेदिक सेंटर में आप डॉ. मोबिन से अकेले में बात करते हैं, और जो कुछ आप कहते हैं वह उसी कमरे तक सीमित रहता है।'}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
                    lang === 'en'
                      ? 'Hello Dr. Mobin, I would like to book a private consultation at M.S Ayurvedic Centre.'
                      : 'नमस्ते डॉ. मोबिन, मैं एम.एस आयुर्वेदिक सेंटर में निजी परामर्श के लिए समय लेना चाहता हूँ।'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#25d366] hover:bg-[#1ebd59] text-white px-6 py-3.5 rounded-lg font-semibold text-sm shadow-md transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{lang === 'en' ? 'Book on WhatsApp' : 'व्हाट्सएप पर समय लें'}</span>
                </a>

                <a
                  href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 bg-[#284838] hover:bg-[#1e372b] text-white px-6 py-3.5 rounded-lg font-semibold text-sm shadow-xs transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Call the clinic' : 'क्लिनिक को कॉल करें'}</span>
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2d523f] hover:underline px-3 py-3"
                >
                  <span>{lang === 'en' ? 'Request via Form' : 'फ़ॉर्म द्वारा समय माँगें'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Quick Facts Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#dfd5c4] text-xs">
                <div className="bg-white/80 p-3 rounded-lg border border-[#e8dfcf] shadow-2xs">
                  <span className="text-[#7d7364] block font-medium">
                    {lang === 'en' ? 'Systems & Therapies:' : 'चिकित्सा एवं थेरेपी:'}
                  </span>
                  <span className="font-semibold text-[#1e3427] text-sm">
                    {lang === 'en' ? 'Ayurveda, Unani, Siddha & Hijama (M.H.T.)' : 'आयुर्वेद, यूनानी, सिद्ध एवं हिजामा (M.H.T.)'}
                  </span>
                </div>

                <div className="bg-white/80 p-3 rounded-lg border border-[#e8dfcf] shadow-2xs">
                  <span className="text-[#7d7364] block font-medium">
                    {lang === 'en' ? 'Consultation hours:' : 'परामर्श का समय:'}
                  </span>
                  <span className="font-semibold text-[#1e3427] text-sm">
                    {lang === 'en' ? 'Mon – Sat: 10 am – 8 pm' : 'सोमवार – शनि: 10:00 – 8:00'}
                  </span>
                </div>

                <div className="bg-white/80 p-3 rounded-lg border border-[#e8dfcf] shadow-2xs">
                  <span className="text-[#7d7364] block font-medium">
                    {lang === 'en' ? 'Direct Consultation Line:' : 'सीधी परामर्श हेल्पलाइन:'}
                  </span>
                  <span className="font-semibold text-[#1e3427] text-sm">
                    {clinicInfo.phoneDisplay}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-[#1c3325]">
                <div className="aspect-[4/3] sm:aspect-[16/11] relative">
                  <img
                    src={images.heroBanner}
                    alt="M.S Ayurvedic Centre consultation desk"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  {/* Floating Doctor Card Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-xs border border-[#e3dacf] shadow-md flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#2b513f] shrink-0 bg-[#1f372a]">
                      <img
                        src={images.doctorPortrait}
                        alt="Dr. Mobin"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-serif font-bold text-sm text-[#183123] truncate">
                          {clinicInfo.doctorName[lang]}
                        </span>
                        <ShieldCheck className="w-3.5 h-3.5 text-[#257a4a] shrink-0" />
                      </div>
                      <span className="text-[11px] text-[#6b6152] block leading-tight">
                        {clinicInfo.qualification[lang]} • 16+ {lang === 'en' ? 'Yrs Experience' : 'वर्षों का अनुभव'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Accent Tag */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 bg-[#234331] text-[#b8f5d0] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md border border-[#3e6b52]">
                <Shield className="w-3.5 h-3.5 text-[#86efac]" />
                <span>{lang === 'en' ? '100% Private & Ethical' : 'पूर्णतः गोपनीय एवं मर्यादित'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Medical Traditions Band */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a3325]">
            {lang === 'en' ? 'Three Systems, One Holistic Doctor' : 'तीन पद्धतियाँ, एक कुशल चिकित्सक'}
          </h2>
          <p className="text-sm text-[#665d50]">
            {lang === 'en'
              ? 'Integrating the ancient diagnostic precision of Ayurveda, Unani Tibb and Siddha tradition.'
              : 'आयुर्वेद, यूनानी तिब्ब और सिद्ध परंपरा के गहन समन्वय से तैयार उपचार।'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-xl bg-[#f7f2e7] border border-[#ded3be] shadow-xs space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#2d523f] bg-[#e6ddc9] px-2.5 py-0.5 rounded-sm inline-block">
              {lang === 'en' ? 'Ayurveda' : 'आयुर्वेद'}
            </span>
            <h3 className="font-serif text-lg font-bold text-[#231e1a]">
              {lang === 'en' ? 'Dosha Balance & Agni' : 'दोष संतुलन एवं जठराग्नि'}
            </h3>
            <p className="text-xs text-[#524b42] leading-relaxed">
              {lang === 'en'
                ? 'Treatment shaped by your constitution (Prakriti) and the balance of Vata, Pitta and Kapha that the body has lost through improper food or habit.'
                : 'आपकी प्रकृति और शरीर में आए वात, पित्त तथा कफ के असंतुलन के अनुसार उपचार, ताकि रोग जड़ से शांत हो सके।'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#f7f2e7] border border-[#ded3be] shadow-xs space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#2d523f] bg-[#e6ddc9] px-2.5 py-0.5 rounded-sm inline-block">
              {lang === 'en' ? 'Unani Tibb' : 'यूनानी तिब्ब'}
            </span>
            <h3 className="font-serif text-lg font-bold text-[#231e1a]">
              {lang === 'en' ? 'Temperament & Regimen' : 'मिज़ाज एवं चार अख़लात'}
            </h3>
            <p className="text-xs text-[#524b42] leading-relaxed">
              {lang === 'en'
                ? 'The Greco-Arabic system working through temperament (Mizaj), dietary control (Ilaj bil-Ghiza), sleep, air, and restorative herbal tonics.'
                : 'यूनानी पद्धति, जिसमें मिज़ाज, ख़ुराक और परहेज़ के ज़रिए इलाज किया जाता है, साथ ही शास्त्रीय अर्क और माजून दिए जाते हैं।'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#f7f2e7] border border-[#ded3be] shadow-xs space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#2d523f] bg-[#e6ddc9] px-2.5 py-0.5 rounded-sm inline-block">
              {lang === 'en' ? 'Siddha Maruthuvam' : 'सिद्ध मारुथुवम'}
            </span>
            <h3 className="font-serif text-lg font-bold text-[#231e1a]">
              {lang === 'en' ? 'Chronic & Anorectal Care' : 'पुराने रोग व गुदा चिकित्सा'}
            </h3>
            <p className="text-xs text-[#524b42] leading-relaxed">
              {lang === 'en'
                ? 'The South Indian medical tradition, renowned for mineral-botanical compounds applied to stubborn skin diseases and chronic anorectal disorders.'
                : 'दक्षिण भारत की सिद्ध परंपरा, जो पुराने रोगों, त्वचा समस्याओं और गुदा संबंधी विकारों में लंबे समय से अत्यंत प्रभावी रही है।'}
            </p>
          </div>
        </div>
      </section>

      {/* What the Clinic Treats (3 Core Focus Areas) */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#e3dacf] shadow-sm space-y-8">
          <div className="space-y-2 border-b border-[#ece4d6] pb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#2e5742]">
              {lang === 'en' ? 'Clinical Focus & Regimenal Therapies' : 'उपचार एवं थेरेपी के मुख्य क्षेत्र'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1f372a]">
              {lang === 'en' ? 'What the clinic treats & performs' : 'क्लिनिक में किन समस्याओं का उपचार व थेरेपी होती है'}
            </h2>
            <p className="text-sm text-[#665e52] max-w-2xl leading-relaxed">
              {lang === 'en'
                ? 'Core clinical areas and authentic Hijama cupping therapy performed by Dr. Mobin (B.U.M.S., M.H.T.). If your concern is not listed, ask directly for an honest assessment.'
                : 'मुख्य उपचार क्षेत्र और डॉ. मोबिन (बी.यू.एम.एस., एम.एच.टी.) द्वारा की जाने वाली प्रामाणिक हिजामा कपिंग थेरेपी। यदि आपकी समस्या यहाँ नहीं दी गई है, तो सीधे पूछें।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Featured Hijama Therapy */}
            <article className="p-5 rounded-xl bg-[#f2f8f4] border-2 border-[#2b513f]/30 space-y-3 flex flex-col justify-between shadow-xs">
              <div className="space-y-2">
                <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-[#166534] bg-[#dcfce7] px-2 py-0.5 rounded-sm">
                  {lang === 'en' ? 'Certified M.H.T.' : 'प्रमाणित एम.एच.टी.'}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#1c3326]">
                  {lang === 'en' ? 'Hijama (Blood & Dry Cupping)' : 'हिजामा (ब्लड एवं ड्राई कपिंग)'}
                </h3>
                <p className="text-xs text-[#524a3e] leading-relaxed">
                  {lang === 'en'
                    ? 'Classical Unani wet cupping (blood detox) and dry vacuum therapy for sciatica, cervical, migraines, joint stiffness & back spasms with 100% disposable cups.'
                    : 'साइटिका, सर्वाइकल, माइग्रेन, कमर दर्द और जोड़ों की जकड़न के लिए 100% डिस्पोजेबल कप्स द्वारा की जाने वाली प्रामाणिक ब्लड एवं ड्राई कपिंग थेरेपी।'}
                </p>
              </div>
              <button
                onClick={() => onNavigate('treatments')}
                className="text-xs font-semibold text-[#1e5036] hover:underline inline-flex items-center gap-1 pt-2"
              >
                <span>{lang === 'en' ? 'Explore Hijama details' : 'हिजामा विवरण देखें'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </article>

            <article className="p-5 rounded-xl bg-[#faf6ee] border border-[#e5dcce] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-[#1c3326]">
                  {lang === 'en' ? 'Sexual health & wellbeing' : 'यौन स्वास्थ्य एवं कल्याण'}
                </h3>
                <p className="text-xs text-[#524a3e] leading-relaxed">
                  {lang === 'en'
                    ? 'Consultation for men and women on concerns affecting sexual health, fertility and confidence. Discussed calmly, in private, with no assumptions made about you.'
                    : 'पुरुषों और महिलाओं के लिए यौन स्वास्थ्य, प्रजनन क्षमता और आत्मविश्वास से जुड़ी समस्याओं पर परामर्श। शांत वातावरण में, पूर्ण गोपनीयता के साथ, बिना किसी पूर्वधारणा के।'}
                </p>
              </div>
              <button
                onClick={() => onNavigate('treatments')}
                className="text-xs font-semibold text-[#28503b] hover:underline inline-flex items-center gap-1 pt-2"
              >
                <span>{lang === 'en' ? 'Read approach' : 'विस्तार से पढ़ें'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </article>

            <article className="p-5 rounded-xl bg-[#faf6ee] border border-[#e5dcce] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-[#1c3326]">
                  {lang === 'en' ? 'Piles & anorectal conditions' : 'बवासीर और गुदा रोग'}
                </h3>
                <p className="text-xs text-[#524a3e] leading-relaxed">
                  {lang === 'en'
                    ? 'Assessment and care for piles, fissure, fistula and related complaints, including non-surgical management, herbal sitz baths, and guidance on diet and daily bowel habits.'
                    : 'बवासीर, फिशर, भगंदर और उससे जुड़ी शिकायतों की जाँच और उपचार, साथ ही खान-पान और दिनचर्या से जुड़े आवश्यक सुझाव ताकि बार-बार समस्या न हो।'}
                </p>
              </div>
              <button
                onClick={() => onNavigate('treatments')}
                className="text-xs font-semibold text-[#28503b] hover:underline inline-flex items-center gap-1 pt-2"
              >
                <span>{lang === 'en' ? 'Read approach' : 'विस्तार से पढ़ें'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </article>

            <article className="p-5 rounded-xl bg-[#faf6ee] border border-[#e5dcce] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-[#1c3326]">
                  {lang === 'en' ? 'Long-standing chronic illness' : 'पुराने व जिद्दी रोग'}
                </h3>
                <p className="text-xs text-[#524a3e] leading-relaxed">
                  {lang === 'en'
                    ? 'Support for chronic conditions such as digestive distress, acid reflux, eczema, psoriasis, joint stiffness, and respiratory complaints alongside your other prescriptions.'
                    : 'पाचन, एसिडिटी, त्वचा (एक्जिमा/सोरायसिस), जोड़ों के दर्द और श्वास संबंधी पुरानी समस्याओं में सहयोग, आपके अन्य चिकित्सकों द्वारा दी गई दवाओं के साथ-साथ।'}
                </p>
              </div>
              <button
                onClick={() => onNavigate('treatments')}
                className="text-xs font-semibold text-[#28503b] hover:underline inline-flex items-center gap-1 pt-2"
              >
                <span>{lang === 'en' ? 'Read approach' : 'विस्तार से पढ़ें'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </article>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={() => onNavigate('treatments')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#30523f] text-[#244533] font-semibold text-sm hover:bg-[#244533] hover:text-white transition-colors"
            >
              <span>{lang === 'en' ? 'Read full details on each treatment area' : 'हर उपचार क्षेत्र के बारे में विस्तार से पढ़ें'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* About Dr. Mobin — Physician Profile & Clinical Image Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl bg-white border border-[#dfd4c3] shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Authentic Doctor Clinical Image */}
            <div className="lg:col-span-5 relative bg-[#1c3626] min-h-[320px] sm:min-h-[400px]">
              <img
                src={images.doctorPortrait}
                alt="Dr. Mobin in his clinical consultation room"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              
              {/* Doctor Chamber Overlay Tag */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b3427]/90 backdrop-blur-xs text-[#86efac] border border-[#86efac]/30 text-xs font-semibold shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Chief Consultant Physician' : 'मुख्य आयुर्वेदाचार्य एवं हिजामा विशेषज्ञ'}</span>
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs uppercase tracking-wider text-[#a7d1bb] font-semibold">
                  {lang === 'en' ? 'M.S Ayurvedic Centre • Noida' : 'एम.एस आयुर्वेदिक सेंटर • नोएडा'}
                </p>
                <h3 className="font-serif text-2xl font-bold">
                  {clinicInfo.doctorName[lang]}
                </h3>
                <p className="text-xs text-[#d5e7dc] mt-0.5">
                  {clinicInfo.qualification[lang]}
                </p>
              </div>
            </div>

            {/* Right: Bio, Credentials & Official Social Media Links */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2f5a42]">
                    {lang === 'en' ? 'About The Doctor' : 'डॉक्टर के बारे में'}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1a3325]">
                    {lang === 'en' ? 'Meet Dr. Mobin' : 'मिलिए डॉ. मोबिन से'}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#edf6f0] text-[#1f4a32] border border-[#c1e2cd] font-semibold">
                    16+ {lang === 'en' ? 'Years Clinical Experience' : 'वर्षों का अनुभव'}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#f2ede4] text-[#4b4338] font-medium">
                    {clinicInfo.council[lang]}
                  </span>
                </div>

                <p className="text-sm text-[#4a4237] leading-relaxed">
                  {lang === 'en'
                    ? 'Dr. Mobin provides authentic, patient-centred care blending classical Ayurveda, Unani Tibb, Siddha herbal formulations, and certified Medical Hijama Cupping Therapy (M.H.T.). Every patient is consulted in strict privacy with evidence-backed lifestyle and dietary guidance.'
                    : 'डॉ. मोबिन शास्त्रीय आयुर्वेद, यूनानी तिब्ब, सिद्ध औषधियों और प्रमाणित मेडिकल हिजामा कपिंग थेरेपी (M.H.T.) के समन्वय से प्रामाणिक उपचार प्रदान करते हैं। प्रत्येक मरीज़ से पूर्ण गोपनीयता के साथ व्यक्तिगत परामर्श लिया जाता है।'}
                </p>

                {/* Dr. Mobin Official Social Links */}
                <div className="pt-2 border-t border-[#ebe3d5] space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#355b46] block">
                    {lang === 'en' ? 'Follow Dr. Mobin on Social Media:' : 'डॉ. मोबिन के आधिकारिक सोशल मीडिया पेज:'}
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://www.instagram.com/drmobin80?stkn=dzVzanU4ZGk5ZjEx"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-bold shadow-xs hover:opacity-95 transition-opacity"
                    >
                      <Instagram className="w-4 h-4 shrink-0" />
                      <span>Instagram (@drmobin80)</span>
                    </a>

                    <a
                      href="https://www.facebook.com/share/188gTmips3/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1877f2] hover:bg-[#166fe5] text-white text-xs font-bold shadow-xs transition-colors"
                    >
                      <Facebook className="w-4 h-4 shrink-0" />
                      <span>Facebook Profile</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1e3b2b] hover:bg-[#162c20] text-white font-semibold text-xs transition-all shadow-xs"
                >
                  <span>{lang === 'en' ? 'Read Full Credentials & Background' : 'डॉक्टर की पूरी योग्यता व अनुभव पढ़ें'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
                    lang === 'en'
                      ? 'Hello Dr. Mobin, I would like to consult with you.'
                      : 'नमस्ते डॉ. मोबिन, मैं आपसे परामर्श करना चाहता हूँ।'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25d366] hover:bg-[#1ebd59] text-white font-semibold text-xs transition-all shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>{lang === 'en' ? 'Chat Directly on WhatsApp' : 'सीधे व्हाट्सएप पर बात करें'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy is Part of Treatment (Darker Dignified Band with Visual Atmosphere) */}
      <section className="bg-[#1f2621] text-[#f2ece2] py-14 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#97c7ad]">
              {lang === 'en' ? 'Our Fundamental Promise' : 'हमारा मूल संकल्प'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#f8f4ec]">
              {lang === 'en'
                ? 'Privacy is part of the treatment'
                : 'गोपनीयता भी उपचार का हिस्सा है'}
            </h2>
            <p className="text-sm text-[#b4a999] leading-relaxed">
              {lang === 'en'
                ? 'People delay care because they are afraid of being recognised, judged or talked about. Removing that fear is the first thing this clinic tries to do.'
                : 'लोग इसलिए इलाज टालते हैं क्योंकि उन्हें पहचाने जाने, आलोचना या चर्चा का डर रहता है। इस क्लिनिक की पहली कोशिश यही डर दूर करना है।'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Atmospheric Image */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative rounded-xl overflow-hidden border border-[#39483f] flex-1 min-h-[260px] bg-[#161c18] group">
                <img
                  src={images.consultationRoom}
                  alt={lang === 'en' ? 'Private doctor consultation room' : 'निजी परामर्श कक्ष'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5">
                  <span className="font-serif text-white font-bold text-base">
                    {lang === 'en' ? 'Soundproof & Secure Clinic Room' : 'शांत एवं पूर्णतः सुरक्षित परामर्श कक्ष'}
                  </span>
                  <p className="text-xs text-[#b0a595] mt-1">
                    {lang === 'en'
                      ? 'Every consultation takes place strictly behind closed doors.'
                      : 'हर परामर्श पूर्णतः बंद दरवाज़ों के भीतर व्यक्तिगत रूप से होता है।'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right 4 Assurances Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#28322c] border border-[#39483f] space-y-2">
                <div className="flex items-center gap-2.5 text-[#86efac]">
                  <UserCheck className="w-5 h-5" />
                  <h3 className="font-serif text-base font-bold text-white">
                    {lang === 'en' ? 'You are seen alone' : 'आपसे अकेले में बात होती है'}
                  </h3>
                </div>
                <p className="text-xs text-[#c4b9aa] leading-relaxed">
                  {lang === 'en'
                    ? 'Consultation is one to one with Dr. Mobin. You may bring someone with you if you prefer, but nobody else is present unless you ask for them.'
                    : 'परामर्श डॉ. मोबिन के साथ अकेले में होता है। आप चाहें तो किसी को साथ ला सकते हैं, लेकिन आपकी इच्छा के बिना कोई और उपस्थित नहीं रहता।'}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#28322c] border border-[#39483f] space-y-2">
                <div className="flex items-center gap-2.5 text-[#86efac]">
                  <Lock className="w-5 h-5" />
                  <h3 className="font-serif text-base font-bold text-white">
                    {lang === 'en' ? 'Your details stay here' : 'आपकी जानकारी यहीं रहती है'}
                  </h3>
                </div>
                <p className="text-xs text-[#c4b9aa] leading-relaxed">
                  {lang === 'en'
                    ? 'What you share is kept confidential and is not discussed outside the clinic. A photograph is published only if you sign a consent form allowing it.'
                    : 'आप जो भी बताते हैं वह गोपनीय रखा जाता है और क्लिनिक के बाहर उसकी चर्चा नहीं होती। कोई तस्वीर तभी प्रकाशित होती है जब आप उसके लिए लिखित सहमति दें।'}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#28322c] border border-[#39483f] space-y-2">
                <div className="flex items-center gap-2.5 text-[#86efac]">
                  <MessageSquare className="w-5 h-5" />
                  <h3 className="font-serif text-base font-bold text-white">
                    {lang === 'en' ? 'Ask before you commit' : 'निर्णय से पहले पूछें'}
                  </h3>
                </div>
                <p className="text-xs text-[#c4b9aa] leading-relaxed">
                  {lang === 'en'
                    ? 'You can send a question on WhatsApp first and decide afterwards whether to come in. There is no obligation to book.'
                    : 'आप पहले व्हाट्सएप पर अपना प्रश्न भेज सकते हैं और उसके बाद तय कर सकते हैं कि आना है या नहीं। समय लेना अनिवार्य नहीं है।'}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#28322c] border border-[#39483f] space-y-2">
                <div className="flex items-center gap-2.5 text-[#86efac]">
                  <HelpCircle className="w-5 h-5" />
                  <h3 className="font-serif text-base font-bold text-white">
                    {lang === 'en' ? 'Plain answers, no false claims' : 'स्पष्ट जवाब, कोई झूठा दावा नहीं'}
                  </h3>
                </div>
                <p className="text-xs text-[#c4b9aa] leading-relaxed">
                  {lang === 'en'
                    ? 'You will be told what is likely to help, what is not, and when you should see a surgeon or a modern medical specialist instead.'
                    : 'आपको साफ़-साफ़ बताया जाएगा कि किससे लाभ की संभावना है, किससे नहीं, और कब आपको सर्जन या विशेषज्ञ के पास जाना चाहिए।'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How a Consultation Works (4 Steps) */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2e5742]">
            {lang === 'en' ? 'Process & Expectations' : 'प्रक्रिया एवं व्यवस्था'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a3325]">
            {lang === 'en' ? 'How a consultation works' : 'परामर्श कैसे होता है'}
          </h2>
          <p className="text-sm text-[#665e52]">
            {lang === 'en'
              ? 'Four simple steps, so you know exactly what to expect before you arrive.'
              : 'चार चरण, ताकि क्लिनिक आने से पहले आपको स्पष्ट पता हो कि क्या होगा।'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-[#f7f2e7] border border-[#ded4c1] space-y-3 relative">
            <span className="w-7 h-7 rounded-full bg-[#274635] text-white text-xs font-bold flex items-center justify-center">
              1
            </span>
            <h3 className="font-serif text-base font-bold text-[#231e1a]">
              {lang === 'en' ? 'Get in touch' : 'संपर्क करें'}
            </h3>
            <p className="text-xs text-[#524b42] leading-relaxed">
              {lang === 'en'
                ? 'Message on WhatsApp or call the clinic. Describe the problem in as much or as little detail as you are comfortable with.'
                : 'व्हाट्सएप पर संदेश भेजें या क्लिनिक को कॉल करें। समस्या के बारे में उतना ही बताएँ जितना आप सहज महसूस करें।'}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#f7f2e7] border border-[#ded4c1] space-y-3 relative">
            <span className="w-7 h-7 rounded-full bg-[#274635] text-white text-xs font-bold flex items-center justify-center">
              2
            </span>
            <h3 className="font-serif text-base font-bold text-[#231e1a]">
              {lang === 'en' ? 'Sit down with the doctor' : 'डॉक्टर से मिलें'}
            </h3>
            <p className="text-xs text-[#524b42] leading-relaxed">
              {lang === 'en'
                ? 'Dr. Mobin takes a full history, examines where needed, and explains what he thinks is going on in language you can follow.'
                : 'डॉ. मोबिन पूरी जानकारी लेते हैं, आवश्यकता होने पर जाँच करते हैं, और सरल भाषा में समझाते हैं कि समस्या क्या है।'}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#f7f2e7] border border-[#ded4c1] space-y-3 relative">
            <span className="w-7 h-7 rounded-full bg-[#274635] text-white text-xs font-bold flex items-center justify-center">
              3
            </span>
            <h3 className="font-serif text-base font-bold text-[#231e1a]">
              {lang === 'en' ? 'Agree a plan' : 'उपचार तय करें'}
            </h3>
            <p className="text-xs text-[#524b42] leading-relaxed">
              {lang === 'en'
                ? 'Medicines, diet and daily routine are set out together, with an honest estimate of how long it may take and what it will cost.'
                : 'दवा, खान-पान और दिनचर्या मिलकर तय की जाती है, साथ ही यह भी बताया जाता है कि इसमें कितना समय और ख़र्च लग सकता है।'}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#f7f2e7] border border-[#ded4c1] space-y-3 relative">
            <span className="w-7 h-7 rounded-full bg-[#274635] text-white text-xs font-bold flex items-center justify-center">
              4
            </span>
            <h3 className="font-serif text-base font-bold text-[#231e1a]">
              {lang === 'en' ? 'Review and adjust' : 'समीक्षा और बदलाव'}
            </h3>
            <p className="text-xs text-[#524b42] leading-relaxed">
              {lang === 'en'
                ? 'You come back or send an update. If something is not working, the plan changes rather than continuing out of habit.'
                : 'आप दोबारा आते हैं या जानकारी भेजते हैं। यदि कुछ काम नहीं कर रहा, तो उपचार बदला जाता है, यूँ ही चलाया नहीं जाता।'}
            </p>
          </div>
        </div>

        {/* Emergency Alert Care Note (Mandatory Notice) */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#fff5f5] border border-[#f5c6cb] text-xs text-[#721c24] flex items-start gap-3.5 leading-relaxed">
          <AlertTriangle className="w-5 h-5 text-[#dc3545] shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block mb-0.5 text-sm">
              {lang === 'en' ? 'Important Clinical Notice:' : 'आवश्यक चिकित्सकीय चेतावनी:'}
            </strong>
            {lang === 'en'
              ? 'Some symptoms need urgent attention rather than an appointment next week. Heavy or continuous bleeding, severe acute pain, a lump that is rapidly growing, fever with severe local swelling, or acute chest pain should be taken to a hospital emergency department straight away.'
              : 'कुछ लक्षणों में अगले सप्ताह का समय लेने के बजाय तुरंत इलाज की आवश्यकता होती है। अधिक या लगातार रक्तस्राव, असहनीय तीव्र दर्द, तेज़ी से बढ़ती गाँठ, सूजन के साथ बुख़ार, या छाती में दर्द होने पर तुरंत नजदीकी अस्पताल के आपातकालीन विभाग में जाएँ।'}
          </div>
        </div>
      </section>

      {/* Ask Question First Action Banner */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#284838] text-white text-center space-y-5 shadow-lg">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            {lang === 'en' ? 'Ask your question first' : 'पहले अपना सवाल पूछें'}
          </h2>
          <p className="text-sm text-[#d1e6db] max-w-xl mx-auto leading-relaxed">
            {lang === 'en'
              ? 'You do not have to book anything to find out whether the clinic can help. Send a message on WhatsApp and you will get a straight, honest answer from Dr. Mobin.'
              : 'यह जानने के लिए कि क्लिनिक आपकी मदद कर सकता है या नहीं, समय लेना ज़रूरी नहीं। व्हाट्सएप पर संदेश भेजें, आपको डॉ. मोबिन से सीधा और सच्चा जवाब मिलेगा।'}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
                lang === 'en'
                  ? 'Hello Dr. Mobin, I have a preliminary question before booking a consultation.'
                  : 'नमस्ते डॉ. मोबिन, परामर्श बुक करने से पहले मेरा एक सवाल है।'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebd59] text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{lang === 'en' ? 'Message on WhatsApp' : 'व्हाट्सएप पर संदेश भेजें'}</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-[#1b3427] hover:bg-[#14281e] text-white px-6 py-3 rounded-lg font-semibold text-sm border border-[#3e6650] transition-all"
            >
              <span>{lang === 'en' ? 'Request an appointment' : 'अपॉइंटमेंट के लिए अनुरोध करें'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Website Creator Attribution & Doctor Official Social Media Channels (At Last of Home Page) */}
      <section className="max-w-4xl mx-auto px-4 pt-2">
        <div className="p-6 sm:p-7 rounded-2xl bg-[#faf6ee] border border-[#dfd4c1] shadow-xs space-y-4">
          {/* Doctor Official Social Media Channels */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-[#e5d9c7]">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#2d523d] block">
                {lang === 'en' ? 'Connect With Doctor Mobin' : 'डॉ. मोबिन के सोशल मीडिया से जुड़ें'}
              </span>
              <p className="text-xs text-[#5e5446]">
                {lang === 'en'
                  ? 'Follow daily health advice, classical remedies, and clinical updates on Instagram and Facebook.'
                  : 'प्रतिदिन स्वास्थ्य परामर्श, शास्त्रीय नुस्खे और क्लिनिक अपडेट्स के लिए इंस्टाग्राम और फेसबुक पर फॉलो करें।'}
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href="https://www.instagram.com/drmobin80?stkn=dzVzanU4ZGk5ZjEx"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-semibold shadow-xs hover:opacity-95 transition-opacity"
              >
                <Instagram className="w-4 h-4 shrink-0" />
                <span>Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/share/188gTmips3/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1877f2] hover:bg-[#166fe5] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <Facebook className="w-4 h-4 shrink-0" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Website Creator Attribution: Md Ihsan Bharti */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="text-center sm:text-left">
              <span className="text-[#695f51]">
                {lang === 'en' ? 'This website is made by ' : 'यह वेबसाइट इनके द्वारा निर्मित है: '}
              </span>
              <strong className="text-[#1c3626] font-bold text-sm ml-1">
                Md Ihsan Bharti
              </strong>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <span className="text-[#726757] font-medium">{lang === 'en' ? 'Contact No:' : 'संपर्क नंबर:'}</span>
              <a
                href="tel:+918700442438"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#cdbfab] text-[#1c3626] font-semibold hover:bg-[#234331] hover:text-white transition-all shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#2b513f]" />
                <span>+91 8700442438</span>
              </a>

              <a
                href="https://wa.me/918700442438?text=Hello%20Md%20Ihsan%20Bharti"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25d366] text-white font-semibold hover:bg-[#1ebd59] transition-all shadow-2xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
