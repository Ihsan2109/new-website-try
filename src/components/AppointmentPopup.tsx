import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  MessageCircle,
  Phone,
  Clock,
  ShieldCheck,
  CheckCircle,
  Sparkles,
  User,
  HeartPulse,
} from 'lucide-react';
import { Language } from '../types';
import { useClinic } from '../context/ClinicContext';

interface AppointmentPopupProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const AppointmentPopup: React.FC<AppointmentPopupProps> = ({
  lang,
  isOpen,
  onClose,
  onOpen,
}) => {
  const { clinicInfo, images } = useClinic();

  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState('sexual-health');
  const [preferredSlot, setPreferredSlot] = useState('today-evening');
  const [submitted, setSubmitted] = useState(false);

  const treatments = [
    {
      id: 'sexual-health',
      en: 'Sexual Health & Vitality (Confidential)',
      hi: 'पौरुष स्वास्थ्य व शीघ्रपतन (गोपनीय)',
    },
    {
      id: 'hijama-cupping',
      en: 'Sunnah Hijama (Cupping Therapy)',
      hi: 'सुन्नत हिजामा (कपिंग थेरेपी)',
    },
    {
      id: 'hair-loss',
      en: 'Hair Loss, Baldness & Scalp Therapy',
      hi: 'बाल झड़ना, गंजापन व स्कैल्प थेरेपी',
    },
    {
      id: 'joint-pain',
      en: 'Joint Pain, Sciatica & Muscular Pain',
      hi: 'जोड़ों का दर्द, साइटिका व वात रोग',
    },
    {
      id: 'piles-fistula',
      en: 'Piles, Fissure & Chronic Digestion',
      hi: 'बवासीर, फिशर व पाचन विकार',
    },
    {
      id: 'general-consult',
      en: 'General Unani & Ayurvedic Consultation',
      hi: 'सामान्य यूनानी व आयुर्वेदिक परामर्श',
    },
  ];

  const timeSlots = [
    { id: 'today-evening', en: 'Today: 4:00 PM – 8:00 PM', hi: 'आज शाम: 4:00 – 8:00 बजे' },
    { id: 'tomorrow-morning', en: 'Tomorrow: 10:00 AM – 2:00 PM', hi: 'कल सुबह: 10:00 – 2:00 बजे' },
    { id: 'tomorrow-evening', en: 'Tomorrow: 4:00 PM – 8:00 PM', hi: 'कल शाम: 4:00 – 8:00 बजे' },
    { id: 'urgent-call', en: 'Urgent / Earliest Available', hi: 'शीघ्रातिशीघ्र उपलब्ध समय' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const treatmentObj = treatments.find((t) => t.id === selectedTreatment);
    const slotObj = timeSlots.find((s) => s.id === preferredSlot);

    const treatmentText = treatmentObj ? treatmentObj[lang] : selectedTreatment;
    const slotText = slotObj ? slotObj[lang] : preferredSlot;

    const message =
      lang === 'en'
        ? `Hello Dr. Mobin, I would like to book an appointment at M.S Ayurvedic Centre.\n\n👤 Patient: ${
            patientName || 'Private Patient'
          }\n📞 Contact: ${patientPhone || 'Direct'}\n🩺 Concern: ${treatmentText}\n🕒 Preferred Time: ${slotText}`
        : `नमस्ते डॉ. मोबिन, मैं एम.एस आयुर्वेदिक सेंटर में परामर्श के लिए समय बुक करना चाहता हूँ।\n\n👤 नाम: ${
            patientName || 'मरीज़'
          }\n📞 फोन: ${patientPhone || 'डायरेक्ट'}\n🩺 उपचार: ${treatmentText}\n🕒 पसंदीदा समय: ${slotText}`;

    setSubmitted(true);

    // Open WhatsApp after short feedback
    setTimeout(() => {
      const waUrl = `https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank', 'noreferrer');
      onClose();
      setSubmitted(false);
    }, 900);
  };

  const handleQuickWhatsApp = () => {
    const defaultMsg =
      lang === 'en'
        ? 'Hello Dr. Mobin, I visited your website and would like to book a private consultation at M.S Ayurvedic Centre.'
        : 'नमस्ते डॉ. मोबिन, मैंने आपकी वेबसाइट देखी और मैं एम.एस आयुर्वेदिक सेंटर में परामर्श के लिए समय बुक करना चाहता हूँ।';
    window.open(`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(defaultMsg)}`, '_blank', 'noreferrer');
    onClose();
  };

  return (
    <>
      {/* Floating Pill Trigger (Visible when modal is closed) */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#214332] to-[#2c5c44] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all border-2 border-emerald-400/50 group"
          aria-label="Book appointment popup"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
          <Calendar className="w-4 h-4 text-emerald-300 group-hover:rotate-12 transition-transform" />
          <span className="text-xs sm:text-sm font-bold tracking-wide">
            {lang === 'en' ? 'Book Consultation' : 'परामर्श बुक करें'}
          </span>
        </button>
      )}

      {/* Modal Backdrop & Container */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/65 backdrop-blur-sm animate-fadeIn">
          {/* Backdrop Click Dismiss */}
          <div className="fixed inset-0" onClick={onClose} />

          {/* Modal Content Card */}
          <div className="relative w-full max-w-lg bg-[#fcfaf7] rounded-2xl shadow-2xl border border-[#ded4c3] overflow-hidden z-10 animate-scaleUp my-auto">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#173223] via-[#214532] to-[#1c3829] text-white p-5 sm:p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-black/30 hover:bg-black/50 text-white/80 hover:text-white transition-colors"
                aria-label="Close appointment popup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold tracking-wide">
                  <Sparkles className="w-3 h-3 text-emerald-300" />
                  <span>{lang === 'en' ? 'Appointments Open Today' : 'आज परामर्श उपलब्ध है'}</span>
                </span>
                <span className="text-xs text-[#a3cbb5] hidden sm:inline">
                  • {lang === 'en' ? 'Direct Doctor Care' : 'सीधा डॉक्टर परामर्श'}
                </span>
              </div>

              <div className="flex items-center gap-3.5 mt-2">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-400 shrink-0 bg-[#0f2117] shadow-md">
                  <img
                    src={images.doctorPortrait}
                    alt="Dr. Mobin"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                    {lang === 'en' ? 'Book Private Consultation' : 'निजी परामर्श के लिए समय लें'}
                  </h3>
                  <p className="text-xs text-[#b8d6c6]">
                    {clinicInfo.doctorName[lang]} • {clinicInfo.qualification[lang]}
                  </p>
                  <p className="text-[11px] text-emerald-300 font-medium flex items-center gap-1 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'en' ? '100% Confidential & Ethical' : 'पूर्णतः गोपनीय एवं मर्यादित'}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons (One-Tap WhatsApp & Call) */}
            <div className="p-4 sm:p-5 border-b border-[#e8dfcf] bg-[#f7f2ea]">
              <p className="text-xs font-semibold text-[#665a48] uppercase tracking-wider mb-2.5">
                {lang === 'en' ? 'Fastest: Connect with Dr. Mobin Directly' : 'त्वरित माध्यम: डॉ. मोबिन से सीधे जुड़ें'}
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={handleQuickWhatsApp}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{lang === 'en' ? 'Instant WhatsApp' : 'व्हाट्सएप चैट'}</span>
                </button>

                <a
                  href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#244534] hover:bg-[#1a3326] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Call Clinic' : 'कॉल करें'}</span>
                </a>
              </div>
            </div>

            {/* Appointment Request Form */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
              <div className="text-xs text-[#716552] flex items-center justify-between">
                <span className="font-semibold text-[#274837]">
                  {lang === 'en' ? 'Or Fill Quick Request:' : 'या अपनी जानकारी भरें:'}
                </span>
                <span className="text-[11px] text-[#8c806f]">
                  <Clock className="w-3 h-3 inline mr-1 text-[#2d5740]" />
                  {lang === 'en' ? 'Takes 20 seconds' : 'केवल 20 सेकंड'}
                </span>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#54493b] mb-1">
                    {lang === 'en' ? 'Your Name (or alias)' : 'आपका नाम'}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8f8373] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder={lang === 'en' ? 'e.g. Rahul Sharma' : 'उदा. राहुल शर्मा'}
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#cfc4b2] bg-white text-[#2b2723] focus:outline-none focus:ring-2 focus:ring-[#2b513f]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#54493b] mb-1">
                    {lang === 'en' ? 'Mobile / WhatsApp No.' : 'मोबाइल / व्हाट्सएप नंबर'} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8f8373] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder={lang === 'en' ? 'e.g. 9876543210' : 'उदा. 9876543210'}
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#cfc4b2] bg-white text-[#2b2723] focus:outline-none focus:ring-2 focus:ring-[#2b513f]"
                    />
                  </div>
                </div>
              </div>

              {/* Treatment Category */}
              <div>
                <label className="block text-[11px] font-semibold text-[#54493b] mb-1">
                  {lang === 'en' ? 'Concern / Treatment Required' : 'समस्या / अपेक्षित उपचार'}
                </label>
                <div className="relative">
                  <HeartPulse className="w-4 h-4 text-[#8f8373] absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={selectedTreatment}
                    onChange={(e) => setSelectedTreatment(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#cfc4b2] bg-white text-[#2b2723] focus:outline-none focus:ring-2 focus:ring-[#2b513f]"
                  >
                    {treatments.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t[lang]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Slot */}
              <div>
                <label className="block text-[11px] font-semibold text-[#54493b] mb-1">
                  {lang === 'en' ? 'Preferred Consultation Time' : 'पसंदीदा परामर्श समय'}
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#8f8373] absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#cfc4b2] bg-white text-[#2b2723] focus:outline-none focus:ring-2 focus:ring-[#2b513f]"
                  >
                    {timeSlots.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s[lang]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#214734] to-[#2c5f46] hover:from-[#193829] hover:to-[#234e39] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-75"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-300" />
                    <span>{lang === 'en' ? 'Connecting to Dr. Mobin...' : 'डॉ. मोबिन से कनेक्ट हो रहा है...'}</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4 text-emerald-300" />
                    <span>
                      {lang === 'en' ? 'Confirm Appointment on WhatsApp' : 'व्हाट्सएप पर अपॉइंटमेंट पक्का करें'}
                    </span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-[#786c5c] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  {lang === 'en' ? 'No advance fee required' : 'कोई अग्रिम शुल्क नहीं'}
                </span>

                <button
                  type="button"
                  onClick={onClose}
                  className="text-[11px] text-[#827461] hover:text-[#284a37] underline"
                >
                  {lang === 'en' ? 'Remind me later' : 'बाद में याद दिलाएं'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
