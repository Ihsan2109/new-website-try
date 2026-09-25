import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, HeartPulse, Settings, Instagram, Facebook } from 'lucide-react';
import { Language, PageId } from '../types';
import { useClinic } from '../context/ClinicContext';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const { clinicInfo } = useClinic();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1f2421] text-[#e6ded2] pt-14 pb-24 md:pb-12 border-t-4 border-[#325a45]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#363e39]">
          {/* Col 1: Clinic identity & address */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="inline-block font-serif text-2xl font-bold tracking-tight text-[#f7f3eb]">
                {clinicInfo.name[lang]}
              </span>
              <p className="text-sm font-medium text-[#b5c7bd] mt-0.5">
                {clinicInfo.doctorName[lang]} • {clinicInfo.qualification[lang]}
              </p>
            </div>

            <p className="text-xs text-[#a69e92] leading-relaxed max-w-sm">
              {lang === 'en'
                ? 'Providing confidential, ethical clinical consultations in Ayurveda, Unani, Siddha, and certified Hijama Cupping Therapy (M.H.T.) for over 16 years.'
                : '16 से अधिक वर्षों से आयुर्वेद, यूनानी, सिद्ध और प्रमाणित हिजामा कपिंग थेरेपी (M.H.T.) में नैतिक व पूर्णतः गोपनीय व्यक्तिगत परामर्श।'}
            </p>

            <div className="space-y-2 text-xs text-[#cbc2b4]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#75aa8d] shrink-0 mt-0.5" />
                <span>{clinicInfo.address[lang]}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#75aa8d] shrink-0 mt-0.5" />
                <span>{clinicInfo.hours[lang]}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9bbca9]">
              {lang === 'en' ? 'Clinic Pages' : 'पृष्ठ'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#9fe2bf] transition-colors text-left"
                >
                  {lang === 'en' ? 'Home' : 'होम'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#9fe2bf] transition-colors text-left"
                >
                  {lang === 'en' ? 'About Dr. Mobin' : 'डॉ. मोबिन के बारे में'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('treatments')}
                  className="hover:text-[#9fe2bf] transition-colors text-left"
                >
                  {lang === 'en' ? 'Hijama & Treatments' : 'हिजामा एवं उपचार'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('offers')}
                  className="hover:text-[#9fe2bf] transition-colors text-left"
                >
                  {lang === 'en' ? 'Treatment Programmes' : 'उपचार कार्यक्रम'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('reviews')}
                  className="hover:text-[#9fe2bf] transition-colors text-left"
                >
                  {lang === 'en' ? 'Patient Reviews & Results' : 'मरीज़ों की समीक्षाएँ'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#9fe2bf] transition-colors text-left"
                >
                  {lang === 'en' ? 'Herbal Preparations (Shop)' : 'औषधियाँ (उत्पाद)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#9fe2bf] transition-colors text-left"
                >
                  {lang === 'en' ? 'Visit or Contact' : 'संपर्क व अपॉइंटमेंट'}
                </button>
              </li>
              <li className="pt-2 border-t border-[#313b35]">
                <button
                  onClick={() => handleNav('admin')}
                  className="text-[#86efac] hover:text-white font-medium transition-colors text-left inline-flex items-center gap-1.5"
                >
                  <Settings className="w-3 h-3" />
                  <span>{lang === 'en' ? '🔒 Admin: Edit Images' : '🔒 एडमिन: इमेज बदलें'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & Assurances */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9bbca9]">
              {lang === 'en' ? 'Direct Consultation' : 'सीधा संपर्क'}
            </h4>
            <div className="space-y-2.5">
              <a
                href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-sm font-semibold text-[#f7f3eb] hover:text-[#9fe2bf] transition-colors"
              >
                <div className="p-1.5 rounded-md bg-[#2b3530] text-[#75aa8d]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{clinicInfo.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
                  lang === 'en'
                    ? 'Hello Dr. Mobin, I have a question about consultation at M.S Ayurvedic Centre.'
                    : 'नमस्ते डॉ. मोबिन, मुझे परामर्श के संबंध में जानकारी चाहिए।'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#86efac] hover:underline"
              >
                <div className="p-1.5 rounded-md bg-[#234331] text-[#25d366]">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <span>{lang === 'en' ? 'Message privately on WhatsApp' : 'व्हाट्सएप पर गोपनीय संदेश भेजें'}</span>
              </a>

              {/* Dr. Mobin Social Profiles */}
              <div className="pt-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#9bbca9] block mb-1.5">
                  {lang === 'en' ? 'Follow Dr. Mobin:' : 'डॉ. मोबिन को फॉलो करें:'}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/drmobin80?stkn=dzVzanU4ZGk5ZjEx"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#2b3530] hover:bg-[#833ab4]/80 text-[#e6ded2] hover:text-white text-xs font-medium transition-all border border-[#3e4842]"
                    title="Dr. Mobin on Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#f472b6]" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://www.facebook.com/share/188gTmips3/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#2b3530] hover:bg-[#1877f2]/80 text-[#e6ded2] hover:text-white text-xs font-medium transition-all border border-[#3e4842]"
                    title="Dr. Mobin on Facebook"
                  >
                    <Facebook className="w-3.5 h-3.5 text-[#60a5fa]" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#313b35] space-y-2">
              <div className="flex items-center gap-2 text-[11px] text-[#b0a89d]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#75aa8d] shrink-0" />
                <span>
                  {lang === 'en'
                    ? 'Strict one-on-one privacy • Plain-cover parcel delivery'
                    : 'निजी व्यक्तिगत परामर्श • सादी और गोपनीय पार्सल पैकिंग'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#b0a89d]">
                <HeartPulse className="w-3.5 h-3.5 text-[#75aa8d] shrink-0" />
                <span>
                  {lang === 'en'
                    ? 'Compliant with AYUSH & Indian medical practice guidelines'
                    : 'आयुष एवं भारतीय चिकित्सा परिषद के नियमों के अनुरूप'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="pt-6 pb-2 text-[11px] text-[#938b7e] leading-relaxed space-y-3">
          <p className="bg-[#171b19] p-3.5 rounded-lg border border-[#2e3732]">
            <strong className="text-[#cbc2b4] block mb-1">
              {lang === 'en' ? 'Statutory Medical Notice:' : 'वैधानिक चिकित्सकीय सूचना:'}
            </strong>
            {lang === 'en'
              ? 'This website is for general information about the clinic, its consultation services and the products it supplies. It is not medical advice, does not diagnose any condition, and is not a substitute for examination by a qualified practitioner. Outcomes differ from person to person and no result is promised or guaranteed.'
              : 'यह वेबसाइट क्लिनिक, उसकी परामर्श सेवाओं और उपलब्ध उत्पादों की सामान्य जानकारी के लिए है। यह चिकित्सकीय सलाह नहीं है, किसी रोग का निदान नहीं करती, और योग्य चिकित्सक द्वारा जाँच का विकल्प नहीं है। परिणाम हर व्यक्ति में भिन्न हो सकते हैं और किसी परिणाम का वादा या गारंटी नहीं दी जाती।'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-[11px]">
            <p>
              &copy; {new Date().getFullYear()} {clinicInfo.name[lang]}. {lang === 'en' ? 'All rights reserved.' : 'सर्वाधिकार सुरक्षित।'}
            </p>
            <p className="text-[#7a7267]">
              {lang === 'en' ? 'Ayurveda • Unani Tibb • Siddha • Hijama (M.H.T.)' : 'आयुर्वेद • यूनानी तिब्ब • सिद्ध • हिजामा (M.H.T.)'}
            </p>
          </div>

          {/* Website Developer Credit */}
          <div className="pt-3 border-t border-[#2a332d] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#a8a094]">
            <div className="flex items-center gap-1.5">
              <span>{lang === 'en' ? 'Website created by' : 'वेबसाइट निर्माण:'}</span>
              <strong className="text-[#e2dbcd] font-semibold">Md Ihsan Bharti</strong>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#847b6f]">{lang === 'en' ? 'Contact:' : 'संपर्क:'}</span>
              <a
                href="tel:+918700442438"
                className="text-[#86efac] hover:text-white font-medium transition-colors inline-flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>+91 8700442438</span>
              </a>
              <span className="text-[#435248]">•</span>
              <a
                href="https://wa.me/918700442438?text=Hello%20Md%20Ihsan%20Bharti"
                target="_blank"
                rel="noreferrer"
                className="text-[#25d366] hover:text-[#86efac] font-medium transition-colors inline-flex items-center gap-1"
              >
                <MessageCircle className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

