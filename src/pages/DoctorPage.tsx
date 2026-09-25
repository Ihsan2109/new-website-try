import React from 'react';
import {
  Award,
  BookOpen,
  FileCheck,
  Stethoscope,
  Building,
  AlertCircle,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Instagram,
  Facebook,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { useClinic } from '../context/ClinicContext';

interface DoctorPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
}

export const DoctorPage: React.FC<DoctorPageProps> = ({ lang, onNavigate }) => {
  const { images, clinicInfo } = useClinic();
  return (
    <div className="space-y-14 pb-12">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5ede0] to-[#fcfaf7] border-b border-[#e5dcce] pt-12 pb-14 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8deca] text-[#2b4d3a] text-xs font-semibold uppercase tracking-wider">
            <span>
              {lang === 'en'
                ? 'Practitioner of Ayurveda, Unani and Siddha Medicine'
                : 'आयुर्वेद, यूनानी और सिद्ध चिकित्सा के अनुभवी चिकित्सक'}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1a3325] tracking-tight">
            {clinicInfo.doctorName[lang]}
          </h1>

          <p className="text-base sm:text-lg text-[#4a4237] leading-relaxed max-w-3xl">
            {lang === 'en'
              ? 'Dr. Mobin founded M.S Ayurvedic Centre to give people a place where difficult problems can be described plainly and treated without fuss.'
              : 'डॉ. मोबिन ने एम.एस आयुर्वेदिक सेंटर की शुरुआत इसलिए की ताकि लोगों को ऐसी जगह मिले जहाँ कठिन समस्याएँ खुलकर बताई जा सकें और बिना किसी झंझट के उनका इलाज हो सके।'}
          </p>
        </div>
      </section>

      {/* Main Split: Credentials vs How He Works */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Aside: Credentials & Registration */}
          <div className="lg:col-span-5 space-y-6">
            {/* Prominent Doctor Clinical Profile Card */}
            <div className="rounded-2xl bg-[#234331] text-[#f7f3eb] shadow-md overflow-hidden border border-[#3e6851] space-y-0">
              {/* Doctor Real Clinical Portrait Image */}
              <div className="relative aspect-[4/3] bg-[#16271c] overflow-hidden">
                <img
                  src={images.doctorPortrait}
                  alt={`Dr. Mobin - Chief Consultant at ${clinicInfo.name[lang]}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b3427] via-transparent to-black/30" />
                <div className="absolute top-3 right-3 bg-[#244533]/90 backdrop-blur-xs text-[#86efac] border border-[#86efac]/30 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Verified AYUSH Practitioner' : 'सत्यापित आयुष चिकित्सक'}</span>
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#a7d1bb] block">
                    {lang === 'en' ? 'Chief Physician & Consultant' : 'मुख्य आयुर्वेदाचार्य एवं हिजामा विशेषज्ञ'}
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-white drop-shadow-sm">
                    {clinicInfo.doctorName[lang]}
                  </h2>
                  <p className="text-xs text-[#d0e2d7] font-medium mt-0.5">
                    {clinicInfo.qualification[lang]}
                  </p>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-[#2d523d] text-[#bbf7d0] font-medium">
                    16+ {lang === 'en' ? 'Years Practice' : 'वर्षों का अनुभव'}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#2d523d] text-[#bbf7d0] font-medium">
                    {lang === 'en' ? 'Verified Practitioner' : 'सत्यापित चिकित्सक'}
                  </span>
                </div>

                <p className="text-xs text-[#d0e2d7] leading-relaxed">
                  {lang === 'en'
                    ? 'Devoted to restoring health through constitutional therapies, traditional regimen, and compassionate patient listening.'
                    : 'प्राकृतिक जड़ी-बूटियों, संयमित दिनचर्या और मरीज़ की बात को धैर्य से सुनकर जड़ से इलाज करने के प्रति समर्पित।'}
                </p>

                {/* Doctor Official Social Media Channels */}
                <div className="pt-3 border-t border-[#375a46] space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9bbca9] block">
                    {lang === 'en' ? 'Follow Dr. Mobin on Social Media:' : 'डॉ. मोबिन के आधिकारिक सोशल मीडिया पेज:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a
                      href="https://www.instagram.com/drmobin80?stkn=dzVzanU4ZGk5ZjEx"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-[#833ab4]/90 via-[#fd1d1d]/90 to-[#fcb045]/90 hover:opacity-95 text-white text-xs font-semibold shadow-xs transition-opacity"
                    >
                      <Instagram className="w-4 h-4 shrink-0" />
                      <span className="truncate">Instagram (@drmobin80)</span>
                    </a>

                    <a
                      href="https://www.facebook.com/share/188gTmips3/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1877f2] hover:bg-[#166fe5] text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      <Facebook className="w-4 h-4 shrink-0" />
                      <span className="truncate">Facebook Profile</span>
                    </a>
                  </div>
                </div>

                {/* Direct Consultation Link */}
                <div className="pt-1">
                  <a
                    href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
                      lang === 'en'
                        ? 'Hello Dr. Mobin, I would like to consult with you directly.'
                        : 'नमस्ते डॉ. मोबिन, मैं आपसे सीधा परामर्श करना चाहता हूँ।'
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#25d366] hover:bg-[#1ebd59] text-white font-semibold text-xs transition-all shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{lang === 'en' ? 'Direct Consultation on WhatsApp' : 'डॉ. मोबिन से व्हाट्सएप पर बात करें'}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Qualifications Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#e2d8c7] shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-[#244533]">
                <FileCheck className="w-5 h-5 text-[#2b513f]" />
                <h2 className="font-serif text-lg font-bold text-[#1e3427]">
                  {lang === 'en' ? 'Qualifications and credentials' : 'योग्यता और प्रमाणन'}
                </h2>
              </div>

              <p className="text-xs text-[#6e6354] leading-relaxed">
                {lang === 'en'
                  ? 'Patients are entitled to check the credentials of anyone treating them. These details are published here so you can verify with confidence.'
                  : 'हर मरीज़ को यह जानने का अधिकार है कि उसका इलाज कौन कर रहा है। यही जानकारी यहाँ दी गई है ताकि आप स्वयं जाँच सकें।'}
              </p>

              <div className="space-y-3 pt-2 text-xs border-t border-[#f0e8dc]">
                <div className="p-2.5 rounded-lg bg-[#faf7f0]">
                  <span className="text-[#847867] block font-medium">
                    {lang === 'en' ? 'Qualifications & Certifications:' : 'योग्यता एवं प्रमाणपत्र:'}
                  </span>
                  <span className="font-semibold text-[#1e3427] block text-sm">
                    {clinicInfo.qualification[lang]}
                  </span>
                  <span className="text-[11px] text-[#554c3f] mt-1 block">
                    {lang === 'en'
                      ? '• B.U.M.S. (Unani Medicine & Surgery) • C.M.S. (Ed.) • M.H.T. (Medical Hijama Therapy Specialist)'
                      : '• बी.यू.एम.एस. (यूनानी मेडिसिन) • सी.एम.एस. (एड.) • एम.एच.टी. (मेडिकल हिजामा कपिंग विशेषज्ञ)'}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#faf7f0]">
                  <span className="text-[#847867] block font-medium">
                    {lang === 'en' ? 'Awarded by:' : 'विश्वविद्यालय:'}
                  </span>
                  <span className="font-semibold text-[#1e3427]">
                    {clinicInfo.university[lang]}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#faf7f0]">
                  <span className="text-[#847867] block font-medium">
                    {lang === 'en' ? 'Registering council:' : 'पंजीकरण परिषद:'}
                  </span>
                  <span className="font-semibold text-[#1e3427]">
                    {clinicInfo.council[lang]}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#faf7f0]">
                  <span className="text-[#847867] block font-medium">
                    {lang === 'en' ? 'In practice since:' : 'चिकित्सा अनुभव:'}
                  </span>
                  <span className="font-semibold text-[#1e3427]">
                    {clinicInfo.practiceSince[lang]}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#faf7f0]">
                  <span className="text-[#847867] block font-medium">
                    {lang === 'en' ? 'Languages spoken:' : 'बोली जाने वाली भाषाएँ:'}
                  </span>
                  <span className="font-semibold text-[#1e3427]">
                    {clinicInfo.languages[lang]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Article: How He Works */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-[#e2d8c7] shadow-xs space-y-6">
              <div className="space-y-2 border-b border-[#eee5d6] pb-4">
                <span className="text-xs uppercase font-bold tracking-wider text-[#2e5742]">
                  {lang === 'en' ? 'Clinical Philosophy' : 'चिकित्सीय दृष्टिकोण'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1f372a]">
                  {lang === 'en' ? 'How he works' : 'उनका तरीक़ा'}
                </h2>
              </div>

              <div className="space-y-4 text-sm text-[#443d34] leading-relaxed">
                <p>
                  {lang === 'en'
                    ? 'A consultation starts with listening. Most people arriving at the clinic have already searched online, tried something from a shop, or been given advice by someone who meant well. Before anything is prescribed, Dr. Mobin wants the whole history: how long it has been going on, what has already been tried, what other medicines you take, and what you are actually worried about, which is often not the same as the symptom you came in with.'
                    : 'परामर्श की शुरुआत सुनने से होती है। क्लिनिक आने वाले अधिकतर लोग पहले इंटरनेट पर खोज चुके होते हैं, दुकान से कुछ दवा ले चुके होते हैं, या किसी शुभचिंतक की सलाह आज़मा चुके होते हैं। कोई भी दवा देने से पहले डॉ. मोबिन पूरी जानकारी लेते हैं — समस्या कब से है, अब तक क्या-क्या आज़माया गया, आप और कौन-सी दवाएँ ले रहे हैं, और असल में आपकी चिंता क्या है, जो अक्सर उस लक्षण से अलग होती है जिसे लेकर आप आए हैं।'}
                </p>

                <p>
                  {lang === 'en'
                    ? 'Treatment then draws on whichever of the three systems fits the case. Ayurveda, Unani and Siddha share a great deal but not everything, and a complaint that responds well to a Unani regimen may be better served elsewhere by a Siddha preparation or by simple changes to diet and routine. The choice is explained to you rather than presented as a mystery.'
                    : 'इसके बाद उपचार उन तीन पद्धतियों में से चुना जाता है जो उस मामले के लिए उपयुक्त हो। आयुर्वेद, यूनानी और सिद्ध में बहुत कुछ समान है, पर सब कुछ नहीं। जो शिकायत यूनानी परहेज़ से ठीक होती है, वही किसी और मामले में सिद्ध औषधि या केवल खान-पान और दिनचर्या में बदलाव से बेहतर होती है। यह चुनाव आपको समझाया जाता है, रहस्य बनाकर नहीं रखा जाता।'}
                </p>

                <p>
                  {lang === 'en'
                    ? 'Equally important is knowing where this kind of medicine ends. Some conditions need surgery, laboratory tests, or a specialist opinion, and saying so early saves a patient months. If your case needs that, you will be told at the first visit rather than after a long course of treatment.'
                    : 'इतना ही महत्वपूर्ण यह जानना भी है कि इस चिकित्सा की सीमा कहाँ है। कुछ स्थितियों में सर्जरी, जाँच या विशेषज्ञ की राय ज़रूरी होती है, और यह बात समय पर कह देने से मरीज़ के कई महीने बच जाते हैं। यदि आपके मामले में ऐसी ज़रूरत है, तो आपको पहली ही मुलाक़ात में बता दिया जाएगा, लंबे इलाज के बाद नहीं।'}
                </p>
              </div>

              {/* Patient Advisory Box */}
              <div className="p-4 rounded-xl bg-[#faf4e6] border border-[#e8dcb8] text-xs text-[#614b18] flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#b07809] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {lang === 'en'
                    ? 'Do not stop any medicine another doctor has prescribed without speaking to them first. Bring your current prescriptions and laboratory test reports to the consultation so that everything you are taking can be considered together safely.'
                    : 'किसी दूसरे डॉक्टर की दी हुई दवा उनसे पूछे बिना बंद न करें। परामर्श के समय अपनी मौजूदा पर्चियाँ और जाँच रिपोर्ट साथ लाएँ, ताकि आपकी सभी दवाओं को एक साथ देखा जा सके।'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Band: Three Systems, One Consultation */}
      <section className="bg-[#1f2621] text-[#f2ece2] py-14 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#97c7ad]">
              {lang === 'en' ? 'Integrative Traditional Science' : 'शास्त्रीय चिकित्सा समन्वय'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {lang === 'en'
                ? 'Three systems, one consultation'
                : 'तीन पद्धतियाँ, एक परामर्श'}
            </h2>
            <p className="text-sm text-[#b4a999] leading-relaxed">
              {lang === 'en'
                ? 'Each of these traditions has its own reasoning about why the body goes wrong. Here is what each one contributes in practice.'
                : 'इन तीनों परंपराओं के पास शरीर के बिगड़ने के अपने-अपने कारण और तर्क हैं। व्यवहार में हर पद्धति क्या देती है, वह नीचे दिया गया है।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="p-6 rounded-xl bg-[#28322c] border border-[#3a483f] space-y-3">
              <h3 className="font-serif text-lg font-bold text-white">
                {lang === 'en' ? 'Ayurveda' : 'आयुर्वेद'}
              </h3>
              <p className="text-xs text-[#c4b9aa] leading-relaxed">
                {lang === 'en'
                  ? 'Reads illness as a disturbance in the balance of vata, pitta and kapha, and treats through medicines, diet, and cleansing procedures suited to your constitution.'
                  : 'आयुर्वेद रोग को वात, पित्त और कफ के असंतुलन के रूप में देखता है, और आपकी प्रकृति के अनुसार औषधि, आहार तथा शोधन क्रियाओं से उपचार करता है।'}
              </p>
            </article>

            <article className="p-6 rounded-xl bg-[#28322c] border border-[#3a483f] space-y-3">
              <h3 className="font-serif text-lg font-bold text-white">
                {lang === 'en' ? 'Unani Tibb' : 'यूनानी तिब्ब'}
              </h3>
              <p className="text-xs text-[#c4b9aa] leading-relaxed">
                {lang === 'en'
                  ? 'Works from the theory of temperament and the four humours (Dam, Balgham, Safra, Sauda), with strong emphasis on regimen: sleep, food, air, movement and rest, alongside herbal and mineral preparations.'
                  : 'यूनानी चिकित्सा मिज़ाज और चार अख़लात के सिद्धांत पर काम करती है, जिसमें नींद, ख़ुराक, हवा, गतिविधि और आराम जैसे परहेज़ पर विशेष ज़ोर दिया जाता है, साथ ही जड़ी-बूटी और खनिज औषधियाँ दी जाती हैं।'}
              </p>
            </article>

            <article className="p-6 rounded-xl bg-[#28322c] border border-[#3a483f] space-y-3">
              <h3 className="font-serif text-lg font-bold text-white">
                {lang === 'en' ? 'Siddha' : 'सिद्ध'}
              </h3>
              <p className="text-xs text-[#c4b9aa] leading-relaxed">
                {lang === 'en'
                  ? 'The Tamil tradition, built on the same three-humour framework with its own distinctive materia medica, long applied to chronic complaints, skin disease and anorectal conditions.'
                  : 'तमिल परंपरा, जो उन्हीं तीन दोषों के ढाँचे पर आधारित है पर जिसकी अपनी विशिष्ट औषधि-सामग्री है। इसका उपयोग लंबे समय से पुराने रोगों, त्वचा रोगों और गुदा संबंधी समस्याओं में होता आया है।'}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* The Clinic Atmosphere & Facility Gallery */}
      <section className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="space-y-2 border-b border-[#e2d8c7] pb-4">
          <span className="text-xs uppercase font-bold tracking-wider text-[#2e5742]">
            {lang === 'en' ? 'Premises' : 'क्लिनिक व्यवस्था'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1f372a]">
            {lang === 'en' ? 'The Clinic' : 'क्लिनिक'}
          </h2>
          <p className="text-sm text-[#665e52]">
            {lang === 'en'
              ? 'Photographs of the consultation room, the dispensary and the entrance, so you know what you are walking into.'
              : 'परामर्श कक्ष, औषधालय और प्रवेश द्वार की तस्वीरें, ताकि आपको पहले से पता हो कि आप कहाँ आ रहे हैं।'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="rounded-xl overflow-hidden bg-white border border-[#ded3be] shadow-xs flex flex-col group hover:shadow-md transition-shadow">
            <div className="h-48 overflow-hidden relative bg-[#1c3325]">
              <img
                src={images.consultationRoom}
                alt={lang === 'en' ? 'Private Consultation Room' : 'निजी परामर्श कक्ष'}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3.5">
                <span className="text-white text-xs font-serif font-bold drop-shadow-sm">
                  {lang === 'en' ? 'Private Consultation Room' : 'निजी परामर्श कक्ष'}
                </span>
              </div>
            </div>
            <div className="p-3.5 space-y-1">
              <p className="text-xs text-[#595247] leading-relaxed">
                {lang === 'en'
                  ? 'A quiet, dignified space where examinations and pulse analysis (Nadi Pariksha) are conducted in complete privacy.'
                  : 'शांत और मर्यादित वातावरण जहाँ नाड़ी परीक्षा और शारीरिक जाँच पूरी गोपनीयता से की जाती है।'}
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden bg-white border border-[#ded3be] shadow-xs flex flex-col group hover:shadow-md transition-shadow">
            <div className="h-48 overflow-hidden relative bg-[#1c3325]">
              <img
                src={images.hijamaCupping}
                alt={lang === 'en' ? 'Certified Hijama & Cupping Suite' : 'प्रमाणित हिजामा एवं कपिंग कक्ष'}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3.5">
                <span className="text-white text-xs font-serif font-bold drop-shadow-sm">
                  {lang === 'en' ? 'Hijama Cupping Suite (M.H.T.)' : 'हिजामा कपिंग कक्ष (M.H.T.)'}
                </span>
              </div>
            </div>
            <div className="p-3.5 space-y-1">
              <p className="text-xs text-[#595247] leading-relaxed">
                {lang === 'en'
                  ? 'Dedicated hygienic procedure room equipped with single-use sterile cups and Unani regimenal apparatus.'
                  : '100% डिस्पोजेबल सीलबंद कप्स और स्टेराइल उपकरणों से सुसज्जित विशेष हिजामा चिकित्सा कक्ष।'}
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden bg-white border border-[#ded3be] shadow-xs flex flex-col group hover:shadow-md transition-shadow">
            <div className="h-48 overflow-hidden relative bg-[#1c3325]">
              <img
                src={images.herbalDispensary}
                alt={lang === 'en' ? 'In-House Classical Dispensary' : 'शास्त्रीय औषधालय'}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3.5">
                <span className="text-white text-xs font-serif font-bold drop-shadow-sm">
                  {lang === 'en' ? 'In-House Classical Dispensary' : 'शास्त्रीय औषधालय'}
                </span>
              </div>
            </div>
            <div className="p-3.5 space-y-1">
              <p className="text-xs text-[#595247] leading-relaxed">
                {lang === 'en'
                  ? 'Carefully prepared and authenticated herbal decoctions, powders, and medicated oils dispensed with precise dosage guidance.'
                  : 'सटीक अनुपात में निर्मित शुद्ध चूर्ण, क्वाथ, अर्क और औषधीय तैल जो प्रमाणिक स्रोतों से तैयार किए जाते हैं।'}
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden bg-white border border-[#ded3be] shadow-xs flex flex-col group hover:shadow-md transition-shadow">
            <div className="h-48 overflow-hidden relative bg-[#1c3325]">
              <img
                src={images.herbalPreparations}
                alt={lang === 'en' ? 'Authentic Botanical Formulations' : 'प्रामाणिक औषधियाँ व लेप'}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3.5">
                <span className="text-white text-xs font-serif font-bold drop-shadow-sm">
                  {lang === 'en' ? 'Herbal Oils, Lepam & Kwath' : 'औषधीय तैल, लेप व क्वाथ'}
                </span>
              </div>
            </div>
            <div className="p-3.5 space-y-1">
              <p className="text-xs text-[#595247] leading-relaxed">
                {lang === 'en'
                  ? 'Pure traditional raw herbs, freshly pounded powders, and classical Unani Arq prepared according to pharmacopeia standards.'
                  : 'आयुर्वेद व यूनानी ग्रंथों के अनुसार मानकीकृत शुद्ध जड़ी-बूटियाँ, ताज़ा कुटे चूर्ण और शास्त्रीय अर्क।'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#faf6ee] border border-[#e2d8c7] text-center space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#1e3427]">
            {lang === 'en' ? 'Come and ask' : 'आइए और पूछिए'}
          </h2>
          <p className="text-xs sm:text-sm text-[#5c5447] max-w-xl mx-auto leading-relaxed">
            {lang === 'en'
              ? 'If you are not sure whether your problem belongs here, that itself is a reasonable question to put to the clinic.'
              : 'यदि आप निश्चित नहीं हैं कि आपकी समस्या यहाँ के लिए उपयुक्त है या नहीं, तो यह भी क्लिनिक से पूछने लायक़ सवाल है।'}
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
                lang === 'en'
                  ? 'Hello Dr. Mobin, I would like to ask a question regarding consultation.'
                  : 'नमस्ते डॉ. मोबिन, मुझे परामर्श के संबंध में एक सवाल पूछना है।'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-xs hover:bg-[#1ebd59] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{lang === 'en' ? 'Message on WhatsApp' : 'व्हाट्सएप पर संदेश भेजें'}</span>
            </a>

            <button
              onClick={() => onNavigate('treatments')}
              className="inline-flex items-center gap-2 bg-transparent border border-[#2b513f] text-[#244533] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#244533] hover:text-white transition-colors"
            >
              <span>{lang === 'en' ? 'See treatment areas' : 'उपचार क्षेत्र देखें'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
