import React, { useState } from 'react';
import { Star, ShieldCheck, MessageCircle, AlertCircle, Trash2, ArrowRight } from 'lucide-react';
import { Language, PageId } from '../types';
import { REVIEWS_DATA } from '../data/content';
import { useClinic } from '../context/ClinicContext';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { HairFallDiseasesGuide } from '../components/HairFallDiseasesGuide';
import { SpermHealthGuide } from '../components/SpermHealthGuide';

interface ReviewsPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ lang, onNavigate }) => {
  const { clinicInfo } = useClinic();
  const [selectedCaseId, setSelectedCaseId] = useState<string>('case-hair-regrowth');
  const [showHairDetails, setShowHairDetails] = useState(false);
  const [showSpermDetails, setShowSpermDetails] = useState(false);

  const handleToggleHairDetails = () => {
    setShowHairDetails((prev) => {
      const next = !prev;
      if (next) {
        setTimeout(() => {
          document.getElementById('hair-fall-guide')?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
      return next;
    });
  };

  const handleToggleSpermDetails = () => {
    setShowSpermDetails((prev) => {
      const next = !prev;
      if (next) {
        setTimeout(() => {
          document.getElementById('sperm-health-guide')?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
      return next;
    });
  };
  return (
    <div className="space-y-16 pb-12">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5ede0] to-[#fcfaf7] border-b border-[#e5dcce] pt-12 pb-14 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8deca] text-[#2b4d3a] text-xs font-semibold uppercase tracking-wider">
            <span>{lang === 'en' ? "In Patients' Own Words" : 'मरीज़ों के अपने शब्दों में'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1a3325] tracking-tight">
            {lang === 'en' ? 'What Patients Say' : 'मरीज़ क्या कहते हैं'}
          </h1>

          <p className="text-base sm:text-lg text-[#4a4237] leading-relaxed max-w-3xl">
            {lang === 'en'
              ? 'Reviews are published with permission. Nobody is identified beyond what they agreed to, and anyone can ask for their review to be taken down at any time.'
              : 'समीक्षाएँ सहमति से प्रकाशित की जाती हैं। किसी की पहचान उससे अधिक उजागर नहीं की जाती जितनी उसने स्वीकृति दी हो, और कोई भी व्यक्ति कभी भी अपनी समीक्षा हटवा सकता है।'}
          </p>
        </div>
      </section>

      {/* Written Reviews Grid */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="space-y-2 border-b border-[#e2d8c7] pb-4">
          <span className="text-xs uppercase font-bold tracking-wider text-[#2e5742]">
            {lang === 'en' ? 'Patient Experiences' : 'लिखित समीक्षाएँ'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1f372a]">
            {lang === 'en' ? 'Written reviews' : 'लिखित समीक्षाएँ'}
          </h2>
          <p className="text-xs sm:text-sm text-[#665e52]">
            {lang === 'en'
              ? "These describe one person's experience of being treated here. They are not a prediction of what will happen for you."
              : 'ये किसी एक व्यक्ति के अनुभव का वर्णन हैं। यह इस बात का संकेत नहीं कि आपके साथ क्या होगा।'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#ded3be] shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-[#f59e0b]">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f59e0b]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#877c6c]">{rev.date[lang]}</span>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-sm bg-[#faf4e6] border border-[#e6dcbe] text-[11px] font-semibold text-[#5a461b]">
                  {rev.treatmentArea[lang]}
                </div>

                <p className="text-xs sm:text-sm text-[#3b342b] leading-relaxed italic">
                  "{rev.text[lang]}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#f0e7d8] flex items-center justify-between text-xs text-[#695f51]">
                <span className="font-semibold text-[#1e3427]">{rev.patientName[lang]}</span>
                {rev.verified && (
                  <span className="flex items-center gap-1 text-[#2b6647] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {lang === 'en' ? 'Verified Patient' : 'सत्यापित मरीज़'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Treatment Photographs & Interactive Slider (Band Dark) */}
      <section className="bg-[#1f2621] text-[#f2ece2] py-14 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#97c7ad]">
              {lang === 'en' ? 'Clinical Documentation' : 'उपचार परिणाम'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {lang === 'en' ? 'Treatment photographs' : 'उपचार की तस्वीरें'}
            </h2>
            <p className="text-sm text-[#b4a999] leading-relaxed">
              {lang === 'en'
                ? 'Drag the slider on each photograph to move between before and after. Every image here is published only because the patient signed a consent form allowing it.'
                : 'हर तस्वीर पर स्लाइडर खींचकर पहले और बाद की स्थिति देखें। यहाँ हर तस्वीर केवल इसलिए प्रकाशित है क्योंकि मरीज़ ने लिखित सहमति पत्र पर हस्ताक्षर किए हैं।'}
            </p>
          </div>

          {/* Interactive Before/After Component */}
          <BeforeAfterSlider
            lang={lang}
            selectedCaseId={selectedCaseId}
            onSelectCase={(id) => {
              setSelectedCaseId(id);
            }}
            showHairDetails={showHairDetails}
            onToggleHairDetails={handleToggleHairDetails}
            showSpermDetails={showSpermDetails}
            onToggleSpermDetails={handleToggleSpermDetails}
          />

          {/* Healing Differs Care Note */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#2e1d1f] border border-[#5c2b30] text-xs text-[#ffd6d9] space-y-1">
            <strong className="text-white block font-semibold">
              {lang === 'en' ? 'Medical Disclaimer:' : 'चिकित्सीय स्पष्टीकरण:'}
            </strong>
            <p className="leading-relaxed">
              {lang === 'en'
                ? 'Healing differs from person to person and depends on age, general health, how long the problem has existed and whether treatment is followed through. These photographs show what happened for one patient. They are not a promise of the same result for anyone else.'
                : 'ठीक होने की प्रक्रिया हर व्यक्ति में अलग होती है और यह उम्र, सामान्य स्वास्थ्य, समस्या कितनी पुरानी है, तथा उपचार कितनी नियमितता से लिया गया, इन सब पर निर्भर करती है। ये तस्वीरें एक मरीज़ के मामले को दिखाती हैं। यह किसी और के लिए वैसे ही परिणाम का वादा नहीं है।'}
            </p>
          </div>

          {/* Takedown Promise Box */}
          <div className="p-4 rounded-xl bg-[#28322c] border border-[#3b4a40] text-xs text-[#c4b9aa] flex items-start gap-3">
            <Trash2 className="w-4 h-4 text-[#86efac] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {lang === 'en'
                ? 'If you have been treated here and would like your review or photograph removed, send a message on WhatsApp and it will be taken down immediately without any questions.'
                : 'यदि आपका यहाँ इलाज हुआ है और आप अपनी समीक्षा या तस्वीर हटवाना चाहते हैं, तो व्हाट्सएप पर संदेश भेजें, उसे बिना कोई सवाल पूछे तुरंत हटा दिया जाएगा।'}
            </p>
          </div>
        </div>
      </section>

      {/* Hair Fall Diseases & Medical Trichology Guide Section - Shown when Crown Vertex Hair details are clicked/toggled */}
      {showHairDetails && (
        <section id="hair-fall-guide" className="max-w-6xl mx-auto px-4 scroll-mt-24">
          <HairFallDiseasesGuide lang={lang} onClose={() => setShowHairDetails(false)} />
        </section>
      )}

      {/* Semen Analysis & Sperm Health Guide Section - Shown when Sperm Report details are clicked/toggled */}
      {showSpermDetails && (
        <section id="sperm-health-guide" className="max-w-6xl mx-auto px-4 scroll-mt-24">
          <SpermHealthGuide lang={lang} onClose={() => setShowSpermDetails(false)} />
        </section>
      )}

      {/* CTA Band */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#faf6ee] border border-[#e2d8c7] text-center space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#1e3427]">
            {lang === 'en' ? 'Your case is its own case' : 'आपका मामला अपने आप में अलग है'}
          </h2>
          <p className="text-xs sm:text-sm text-[#5c5447] max-w-xl mx-auto leading-relaxed">
            {lang === 'en'
              ? 'The only way to know what is possible for you is to be examined. Book a consultation with Dr. Mobin and ask.'
              : 'आपके लिए क्या संभव है, यह जानने का एकमात्र तरीक़ा व्यक्तिगत जाँच कराना है। डॉ. मोबिन से परामर्श के लिए समय लें और पूछें।'}
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
                lang === 'en'
                  ? 'Hello Dr. Mobin, I would like to book an appointment.'
                  : 'नमस्ते डॉ. मोबिन, मैं अपॉइंटमेंट बुक करना चाहता हूँ।'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-xs hover:bg-[#1ebd59] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{lang === 'en' ? 'Message on WhatsApp' : 'व्हाट्सएप पर संदेश भेजें'}</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-[#244533] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#1a3325] transition-colors"
            >
              <span>{lang === 'en' ? 'Request an appointment' : 'अपॉइंटमेंट के लिए अनुरोध करें'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
