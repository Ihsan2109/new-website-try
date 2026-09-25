import React from 'react';
import {
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  MessageCircle,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { OFFERS_DATA } from '../data/content';
import { useClinic } from '../context/ClinicContext';

interface OffersPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({ lang, onNavigate }) => {
  const { clinicInfo } = useClinic();
  return (
    <div className="space-y-16 pb-12">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5ede0] to-[#fcfaf7] border-b border-[#e5dcce] pt-12 pb-14 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8deca] text-[#2b4d3a] text-xs font-semibold uppercase tracking-wider">
            <span>{lang === 'en' ? 'Currently Running' : 'वर्तमान में उपलब्ध'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1a3325] tracking-tight">
            {lang === 'en' ? 'Treatment Offers & Programmes' : 'उपचार कार्यक्रम एवं कोर्स'}
          </h1>

          <p className="text-base sm:text-lg text-[#4a4237] leading-relaxed max-w-3xl">
            {lang === 'en'
              ? 'New treatment programmes, seasonal courses and consultation arrangements as they are introduced at the clinic. Whether any of them suits you is decided after you are examined, not before.'
              : 'क्लिनिक में शुरू किए गए नए उपचार कार्यक्रम, मौसमी कोर्स और परामर्श व्यवस्थाएँ। इनमें से कोई आपके लिए उपयुक्त है या नहीं, यह व्यक्तिगत जाँच के बाद तय होता है, पहले नहीं।'}
          </p>
        </div>
      </section>

      {/* Offers List */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="space-y-2 border-b border-[#e2d8c7] pb-4">
          <span className="text-xs uppercase font-bold tracking-wider text-[#2e5742]">
            {lang === 'en' ? 'Structured Clinical Courses' : 'संरचित उपचार योजनाएँ'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1f372a]">
            {lang === 'en' ? 'What is available now' : 'अभी क्या उपलब्ध है'}
          </h2>
        </div>

        <div className="space-y-6">
          {OFFERS_DATA.map((offer) => (
            <div
              key={offer.id}
              className={`p-6 sm:p-8 rounded-2xl bg-white border transition-all ${
                offer.featured
                  ? 'border-[#2e5742] ring-1 ring-[#2e5742] shadow-md'
                  : 'border-[#ded4c1] shadow-xs'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-[#eee4d4]">
                <div className="space-y-1">
                  {offer.featured && (
                    <span className="inline-block px-2.5 py-0.5 rounded-sm bg-[#244533] text-white text-[11px] font-bold uppercase tracking-wider mb-1">
                      {lang === 'en' ? 'Featured Programme' : 'विशेष कार्यक्रम'}
                    </span>
                  )}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1e3427]">
                    {offer.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5a5245] leading-relaxed max-w-2xl">
                    {offer.summary[lang]}
                  </p>
                </div>

                <div className="shrink-0 md:text-right space-y-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#faf4e6] border border-[#e2d7c0] text-xs font-semibold text-[#665020]">
                    <Clock className="w-3.5 h-3.5 text-[#b07809]" />
                    {offer.duration[lang]}
                  </span>
                  <div className="text-base sm:text-lg font-bold text-[#1f382b] pt-1">
                    {offer.price}
                  </div>
                </div>
              </div>

              <div className="py-4 space-y-3">
                <p className="text-xs sm:text-sm text-[#473f34] leading-relaxed">
                  {offer.details[lang]}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#335641] block">
                    {lang === 'en' ? 'Course includes:' : 'इस कार्यक्रम में शामिल है:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {offer.included[lang].map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#362f27]">
                        <CheckCircle className="w-4 h-4 text-[#285b40] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#eee4d4] flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-[#786c5c] italic">{offer.validity[lang]}</span>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
                      lang === 'en'
                        ? `Hello Dr. Mobin, I would like to ask about the "${offer.title.en}".`
                        : `नमस्ते डॉ. मोबिन, मैं "${offer.title.hi}" के संबंध में जानकारी चाहता हूँ।`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1ebd59] text-white px-5 py-2.5 rounded-lg text-xs font-semibold shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{lang === 'en' ? 'Enquire on WhatsApp' : 'व्हाट्सएप पर पूछें'}</span>
                  </a>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-semibold text-[#244533] hover:underline px-2 py-2"
                  >
                    {lang === 'en' ? 'Book Assessment' : 'जाँच के लिए समय लें'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before You Decide (4 Assurances) */}
      <section className="bg-[#1f2621] text-[#f2ece2] py-14 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#97c7ad]">
              {lang === 'en' ? 'Ethical Healthcare Standards' : 'नैतिक चिकित्सा नियम'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {lang === 'en' ? 'Before you decide' : 'तय करने से पहले'}
            </h2>
            <p className="text-sm text-[#b4a999] leading-relaxed">
              {lang === 'en'
                ? 'An offer describes what a course of treatment includes and what it costs. It does not describe what it will do for you, because that depends on how your body responds.'
                : 'कोई कार्यक्रम यह बताता है कि उपचार में क्या शामिल है और उसका खर्च कितना है। वह यह नहीं बताता कि आपको उससे क्या लाभ होगा, क्योंकि यह आपके शरीर की प्रतिक्रिया पर निर्भर करता है।'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-xl bg-[#28322c] border border-[#39483f] space-y-2">
              <h3 className="font-serif text-base font-bold text-white">
                {lang === 'en' ? 'Assessment comes first' : 'पहले व्यक्तिगत जाँच'}
              </h3>
              <p className="text-xs text-[#c4b9aa] leading-relaxed">
                {lang === 'en'
                  ? 'No course is started without examination. If a programme is not right for your case, you will be told so plainly and it will not be sold to you.'
                  : 'बिना जाँच के कोई कोर्स शुरू नहीं किया जाता। यदि कोई कार्यक्रम आपके मामले के लिए उपयुक्त नहीं है, तो आपको साफ़ बता दिया जाएगा और वह आपको नहीं बेचा जाएगा।'}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#28322c] border border-[#39483f] space-y-2">
              <h3 className="font-serif text-base font-bold text-white">
                {lang === 'en' ? 'The cost is stated up front' : 'खर्च पहले स्पष्ट बताया जाता है'}
              </h3>
              <p className="text-xs text-[#c4b9aa] leading-relaxed">
                {lang === 'en'
                  ? 'What a course covers, how long it runs and what it costs are explained before it begins, so nothing is added later that you did not agree to.'
                  : 'कोर्स में क्या शामिल है, कितने समय चलेगा और खर्च कितना होगा, यह शुरू होने से पहले बता दिया जाता है, ताकि बाद में कुछ ऐसा न जुड़े जिस पर आप सहमत न हों।'}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#28322c] border border-[#39483f] space-y-2">
              <h3 className="font-serif text-base font-bold text-white">
                {lang === 'en' ? 'You can stop anytime' : 'आप बीच में रोक सकते हैं'}
              </h3>
              <p className="text-xs text-[#c4b9aa] leading-relaxed">
                {lang === 'en'
                  ? 'If you want to discontinue partway, say so. You are not held to a course you no longer want to continue.'
                  : 'यदि आप बीच में रोकना चाहें तो बता दें। जिस कोर्स को आप जारी नहीं रखना चाहते, उसके लिए आपको बाध्य नहीं किया जाता।'}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#28322c] border border-[#39483f] space-y-2">
              <h3 className="font-serif text-base font-bold text-white">
                {lang === 'en' ? 'Ask anything first on WhatsApp' : 'पहले कुछ भी पूछें'}
              </h3>
              <p className="text-xs text-[#c4b9aa] leading-relaxed">
                {lang === 'en'
                  ? 'Questions about a programme can be asked on WhatsApp before you come in, without booking anything.'
                  : 'किसी कार्यक्रम के बारे में सवाल आने से पहले व्हाट्सएप पर पूछे जा सकते हैं, बिना कुछ बुक किए।'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Alert & WhatsApp CTA */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="p-4 sm:p-5 rounded-xl bg-[#fff5f5] border border-[#f5c6cb] text-xs text-[#721c24] flex items-start gap-3.5 leading-relaxed">
          <AlertTriangle className="w-5 h-5 text-[#dc3545] shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block mb-0.5 text-sm">
              {lang === 'en' ? 'Urgent Medical Advisory:' : 'आपातकालीन चेतावनी:'}
            </strong>
            {lang === 'en'
              ? 'A treatment programme is not an emergency service. Heavy bleeding, severe pain, fever with swelling, or sudden difficulty passing urine or stool need to be seen the same day, at a hospital emergency department if the clinic is closed.'
              : 'उपचार कार्यक्रम आपातकालीन सेवा नहीं है। अधिक रक्तस्राव, असहनीय दर्द, सूजन के साथ बुखार, या पेशाब अथवा मल त्याग में अचानक रुकावट होने पर उसी दिन जाँच ज़रूरी है, और यदि क्लिनिक बंद हो तो तुरंत अस्पताल जाएँ।'}
          </div>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl bg-[#faf6ee] border border-[#e2d8c7] text-center space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#1e3427]">
            {lang === 'en' ? 'Ask about a programme' : 'किसी कार्यक्रम के बारे में पूछें'}
          </h2>
          <p className="text-xs sm:text-sm text-[#5c5447] max-w-xl mx-auto leading-relaxed">
            {lang === 'en'
              ? 'Send the name of the programme you are interested in and your question will be answered before you commit to anything.'
              : 'जिस कार्यक्रम में आपकी रुचि है उसका नाम भेजें, कुछ भी तय करने से पहले आपके सवाल का जवाब दिया जाएगा।'}
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
                lang === 'en'
                  ? 'Hello Dr. Mobin, I would like to know more about your treatment courses.'
                  : 'नमस्ते डॉ. मोबिन, मैं आपके उपचार कार्यक्रमों के बारे में जानना चाहता हूँ।'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-xs hover:bg-[#1ebd59] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{lang === 'en' ? 'Ask on WhatsApp' : 'व्हाट्सएप पर पूछें'}</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-[#244533] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#1a3325] transition-colors"
            >
              <span>{lang === 'en' ? 'Request an appointment' : 'अपॉइंटमेंट के लिए अनुरोध करें'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
