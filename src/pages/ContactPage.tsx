import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Car,
  Navigation,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Shield,
  Instagram,
  Facebook,
} from 'lucide-react';
import { Language, AppointmentFormData } from '../types';
import { useClinic } from '../context/ClinicContext';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const { images, clinicInfo } = useClinic();
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    age: '',
    concern: '',
    timing: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string; concern?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: { name?: string; phone?: string; concern?: string } = {};
    if (!formData.name.trim()) {
      errs.name = lang === 'en' ? 'Please enter your name.' : 'कृपया अपना नाम भरें।';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone =
        lang === 'en'
          ? 'Please enter a valid 10-digit mobile number.'
          : 'कृपया 10 अंकों का सही मोबाइल नंबर भरें।';
    }
    if (!formData.concern) {
      errs.concern = lang === 'en' ? 'Please choose an option.' : 'कृपया एक विकल्प चुनें।';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Compose formatted WhatsApp Message
    const header =
      lang === 'en'
        ? `*New Appointment Request — ${clinicInfo.name.en}*\n${clinicInfo.doctorName.en} (${clinicInfo.phoneDisplay})\n--------------------------------`
        : `*अपॉइंटमेंट अनुरोध — ${clinicInfo.name.hi}*\n${clinicInfo.doctorName.hi} (${clinicInfo.phoneDisplay})\n--------------------------------`;

    const details = [
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      formData.age ? `*Age:* ${formData.age}` : null,
      `*Concern / Treatment Area:* ${formData.concern}`,
      formData.timing ? `*Preferred Timing:* ${formData.timing}` : '*Preferred Timing:* Any time during clinic hours',
      formData.message ? `*Notes:* ${formData.message}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    const footer =
      lang === 'en'
        ? `--------------------------------\nPlease confirm a consultation slot at your earliest convenience.`
        : `--------------------------------\nकृपया सुविधानुसार परामर्श का समय सुनिश्चित करें।`;

    const fullMsg = `${header}\n${details}\n${footer}`;
    const waUrl = `https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(fullMsg)}`;

    setSubmitted(true);
    window.open(waUrl, '_blank');
  };

  return (
    <div className="space-y-16 pb-12">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5ede0] to-[#fcfaf7] border-b border-[#e5dcce] pt-12 pb-14 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8deca] text-[#2b4d3a] text-xs font-semibold uppercase tracking-wider">
            <span>
              {lang === 'en'
                ? 'No Referral Needed • Walk In or Book Ahead'
                : 'रेफ़रल की आवश्यकता नहीं • सीधे आएँ या समय लें'}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1a3325] tracking-tight">
            {lang === 'en' ? 'Visit or Contact' : 'संपर्क व अपॉइंटमेंट'}
          </h1>

          <p className="text-base sm:text-lg text-[#4a4237] leading-relaxed max-w-3xl">
            {lang === 'en'
              ? 'Booking ahead means less time in the waiting area, which most patients coming here prefer.'
              : 'पहले से समय ले लेने पर प्रतीक्षालय में कम रुकना पड़ता है, जो यहाँ आने वाले अधिकतर मरीज़ पसंद करते हैं।'}
          </p>

          {/* Quick Contact Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-[#e5dcce] space-y-1">
              <span className="text-[#877b6b] font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#244533]" />
                {lang === 'en' ? 'Clinic' : 'क्लिनिक'}
              </span>
              <span className="font-semibold text-[#1f372a] block text-[11px] leading-snug">
                {clinicInfo.address[lang]}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#e5dcce] space-y-1">
              <span className="text-[#877b6b] font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#244533]" />
                {lang === 'en' ? 'Hours' : 'समय'}
              </span>
              <span className="font-semibold text-[#1f372a] block text-[11px] leading-snug">
                {clinicInfo.hours[lang]}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#e5dcce] space-y-1">
              <span className="text-[#877b6b] font-medium flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#244533]" />
                {lang === 'en' ? 'Phone' : 'फ़ोन'}
              </span>
              <a
                href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
                className="font-semibold text-[#1f372a] block text-xs hover:underline"
              >
                {clinicInfo.phoneDisplay}
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#e5dcce] space-y-1">
              <span className="text-[#877b6b] font-medium flex items-center gap-1">
                <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                {lang === 'en' ? 'WhatsApp' : 'व्हाट्सएप'}
              </span>
              <a
                href={`https://wa.me/${clinicInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#1e824c] block text-xs hover:underline"
              >
                {lang === 'en' ? 'Send direct message' : 'सीधा संदेश भेजें'}
              </a>
            </div>
          </div>

          {/* Dr. Mobin Official Social Media Profiles */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
            <span className="text-[#64594c] font-medium">
              {lang === 'en' ? 'Dr. Mobin Official Profiles:' : 'डॉ. मोबिन के सोशल मीडिया:'}
            </span>
            <a
              href="https://www.instagram.com/drmobin80?stkn=dzVzanU4ZGk5ZjEx"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-semibold shadow-2xs hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram (@drmobin80)</span>
            </a>
            <a
              href="https://www.facebook.com/share/188gTmips3/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877f2] hover:bg-[#166fe5] text-white font-semibold shadow-2xs transition-colors"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>Facebook Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Explainer */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#ded3be] shadow-xs space-y-4">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-wider text-[#2e5742]">
                  {lang === 'en' ? 'Zero Data Storage' : 'पूर्ण गोपनीयता'}
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#1f372a]">
                  {lang === 'en' ? 'Request an appointment' : 'अपॉइंटमेंट के लिए अनुरोध करें'}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#544c41] leading-relaxed">
                {lang === 'en'
                  ? 'Fill this in and it opens as a ready-made message in WhatsApp. Nothing is sent until you press send there, and nothing is stored on this website.'
                  : 'इसे भरने पर यह व्हाट्सएप में तैयार संदेश के रूप में खुल जाएगा। जब तक आप वहाँ send नहीं दबाते, कुछ भी नहीं भेजा जाता, और इस वेबसाइट पर कोई जानकारी संग्रहित नहीं होती।'}
              </p>

              <div className="p-4 rounded-xl bg-[#faf4e6] border border-[#e8dcb8] text-xs text-[#614b18] space-y-1">
                <strong className="block font-semibold">
                  {lang === 'en' ? 'Prefer not to write anything down?' : 'कुछ लिखना नहीं चाहते?'}
                </strong>
                <p className="leading-relaxed">
                  {lang === 'en'
                    ? 'Call the clinic directly at +91 98186 45928 and ask for an appointment. You do not have to explain the medical reason on the phone if you prefer to discuss it in person.'
                    : 'क्लिनिक को +91 98186 45928 पर कॉल करके समय माँग लें। यदि आप मिलकर बात करना चाहें तो फ़ोन पर कारण बताना बिल्कुल ज़रूरी नहीं है।'}
                </p>
              </div>

              {/* Consultation Room Photo Preview */}
              <div className="rounded-xl overflow-hidden border border-[#ded3be] relative shadow-2xs group">
                <div className="aspect-[16/10] relative">
                  <img
                    src={images.consultationRoom}
                    alt="Dr. Mobin Consultation Desk"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3.5">
                    <span className="text-white font-serif font-bold text-xs">
                      {lang === 'en' ? 'Private 1-to-1 Chamber' : 'एकांत व शांत परामर्श कक्ष'}
                    </span>
                    <span className="text-[10px] text-[#e0d6c5]">
                      {lang === 'en' ? 'M.S Ayurvedic Centre, Delhi / NCR' : 'एम.एस आयुर्वेदिक सेंटर, दिल्ली / एनसीआर'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#ded3be] shadow-xs">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="form-name" className="block text-xs font-semibold text-[#29241e]">
                    {lang === 'en' ? 'Name *' : 'नाम *'}
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={
                      lang === 'en'
                        ? 'How you would like to be addressed'
                        : 'आपको किस नाम से बुलाया जाए'
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#cfc4b2] bg-[#faf7f2] text-sm text-[#1e3427] placeholder:text-[#998e7e] focus:outline-none focus:ring-2 focus:ring-[#284838]"
                  />
                  {errors.name && <p className="text-xs text-[#dc2626]">{errors.name}</p>}
                </div>

                {/* Phone & Age row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="form-phone" className="block text-xs font-semibold text-[#29241e]">
                      {lang === 'en' ? 'Phone number *' : 'फ़ोन नंबर *'}
                    </label>
                    <input
                      type="tel"
                      id="form-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={lang === 'en' ? '10-digit mobile number' : '10 अंकों का मोबाइल नंबर'}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#cfc4b2] bg-[#faf7f2] text-sm text-[#1e3427] placeholder:text-[#998e7e] focus:outline-none focus:ring-2 focus:ring-[#284838]"
                    />
                    {errors.phone ? (
                      <p className="text-xs text-[#dc2626]">{errors.phone}</p>
                    ) : (
                      <span className="text-[11px] text-[#7d7262]">
                        {lang === 'en'
                          ? 'Used only to confirm your appointment slot.'
                          : 'इसका उपयोग केवल आपका समय तय करने के लिए होगा।'}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="form-age" className="block text-xs font-semibold text-[#29241e]">
                      {lang === 'en' ? 'Age (Optional)' : 'आयु (वैकल्पिक)'}
                    </label>
                    <input
                      type="number"
                      id="form-age"
                      min="1"
                      max="120"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      placeholder={lang === 'en' ? 'e.g. 35' : 'जैसे 35'}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#cfc4b2] bg-[#faf7f2] text-sm text-[#1e3427] placeholder:text-[#998e7e] focus:outline-none focus:ring-2 focus:ring-[#284838]"
                    />
                  </div>
                </div>

                {/* Concern / Health Area */}
                <div className="space-y-1">
                  <label htmlFor="form-concern" className="block text-xs font-semibold text-[#29241e]">
                    {lang === 'en' ? 'What is it about *' : 'किस बारे में परामर्श चाहते हैं *'}
                  </label>
                  <select
                    id="form-concern"
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#cfc4b2] bg-[#faf7f2] text-sm text-[#1e3427] focus:outline-none focus:ring-2 focus:ring-[#284838]"
                  >
                    <option value="">{lang === 'en' ? 'Please choose' : 'कृपया चुनें'}</option>
                    <option value="Sexual health">
                      {lang === 'en' ? 'Sexual health' : 'यौन स्वास्थ्य'}
                    </option>
                    <option value="Piles or anorectal problem">
                      {lang === 'en' ? 'Piles or anorectal problem' : 'बवासीर या गुदा संबंधी समस्या'}
                    </option>
                    <option value="Long-standing illness">
                      {lang === 'en' ? 'Long-standing illness' : 'पुराना रोग (एसिडिटी, त्वचा, जोड़)'}
                    </option>
                    <option value="Something else">
                      {lang === 'en' ? 'Something else' : 'कुछ और'}
                    </option>
                    <option value="Prefer to explain in person">
                      {lang === 'en' ? 'Prefer to explain in person' : 'मिलकर बताना चाहेंगे'}
                    </option>
                  </select>
                  {errors.concern && <p className="text-xs text-[#dc2626]">{errors.concern}</p>}
                </div>

                {/* Preferred Timing */}
                <div className="space-y-1">
                  <label htmlFor="form-timing" className="block text-xs font-semibold text-[#29241e]">
                    {lang === 'en' ? 'Preferred time' : 'पसंदीदा समय'}
                  </label>
                  <select
                    id="form-timing"
                    value={formData.timing}
                    onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#cfc4b2] bg-[#faf7f2] text-sm text-[#1e3427] focus:outline-none focus:ring-2 focus:ring-[#284838]"
                  >
                    <option value="">
                      {lang === 'en'
                        ? 'Any time during clinic hours (10 am – 8 pm)'
                        : 'क्लिनिक के समय में कभी भी (सुबह 10 से रात 8)'}
                    </option>
                    <option value="Morning (10:00 am – 1:00 pm)">
                      {lang === 'en' ? 'Morning (10:00 am – 1:00 pm)' : 'सुबह (10:00 से 1:00)'}
                    </option>
                    <option value="Afternoon (2:00 pm – 5:00 pm)">
                      {lang === 'en' ? 'Afternoon (2:00 pm – 5:00 pm)' : 'दोपहर (2:00 से 5:00)'}
                    </option>
                    <option value="Evening (5:00 pm – 8:00 pm)">
                      {lang === 'en' ? 'Evening (5:00 pm – 8:00 pm)' : 'शाम (5:00 से 8:00)'}
                    </option>
                  </select>
                </div>

                {/* Additional Notes */}
                <div className="space-y-1">
                  <label htmlFor="form-message" className="block text-xs font-semibold text-[#29241e]">
                    {lang === 'en' ? 'Anything you want to add' : 'कुछ और बताना चाहें (वैकल्पिक)'}
                  </label>
                  <textarea
                    id="form-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === 'en'
                        ? 'Optional. Write as much or as little as you want.'
                        : 'वैकल्पिक। जितना चाहें उतना लिखें।'
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#cfc4b2] bg-[#faf7f2] text-sm text-[#1e3427] placeholder:text-[#998e7e] focus:outline-none focus:ring-2 focus:ring-[#284838]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1ebd59] text-white py-3.5 px-4 rounded-xl font-semibold text-sm shadow-md transition-transform active:scale-[0.99]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>
                    {lang === 'en'
                      ? 'Open My Request in WhatsApp'
                      : 'मेरा अनुरोध व्हाट्सएप में खोलें'}
                  </span>
                </button>

                {submitted && (
                  <p className="text-xs text-[#206f47] text-center font-medium pt-1">
                    {lang === 'en'
                      ? 'WhatsApp message prepared! Please press send in WhatsApp.'
                      : 'व्हाट्सएप संदेश तैयार हो गया है! कृपया व्हाट्सएप में Send दबाएँ।'}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Finding the Clinic & Map */}
      <section className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="p-8 rounded-2xl bg-white border border-[#ded3be] shadow-xs space-y-6">
          <div className="space-y-2 border-b border-[#eee4d4] pb-4">
            <span className="text-xs uppercase font-bold tracking-wider text-[#2e5742]">
              {lang === 'en' ? 'Directions' : 'क्लिनिक तक पहुँचना'}
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#1f372a]">
              {lang === 'en' ? 'Finding the clinic' : 'क्लिनिक तक पहुँचना'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <span className="text-xs text-[#7d7364] font-medium block">
                {lang === 'en' ? 'Full Address:' : 'पूरा पता:'}
              </span>
              <p className="text-sm font-semibold text-[#1e3427] leading-relaxed">
                {clinicInfo.address[lang]}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[#7d7364] font-medium block">
                {lang === 'en' ? 'Nearest Landmark:' : 'निकटतम लैंडमार्क:'}
              </span>
              <p className="text-sm text-[#443c33] leading-relaxed">
                {clinicInfo.landmark[lang]}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[#7d7364] font-medium block">
                {lang === 'en' ? 'Parking Details:' : 'पार्किंग सुविधा:'}
              </span>
              <p className="text-sm text-[#443c33] leading-relaxed">
                {clinicInfo.parking[lang]}
              </p>
            </div>
          </div>

          {/* Map Slot Representation */}
          <div className="rounded-xl overflow-hidden border border-[#d8ccb8] bg-[#f4ece1] p-6 text-center space-y-4">
            <div className="max-w-md mx-auto space-y-2">
              <Navigation className="w-8 h-8 text-[#284838] mx-auto" />
              <h4 className="font-serif text-base font-bold text-[#20362a]">
                {lang === 'en' ? 'Google Maps Navigation' : 'गूगल मैप्स नेविगेशन'}
              </h4>
              <p className="text-xs text-[#6e6354]">
                {lang === 'en'
                  ? 'Easily accessible via Metro and main road. Click below to open direct directions in Google Maps.'
                  : 'मेट्रो व मुख्य मार्ग द्वारा सुगम। गूगल मैप्स में सीधा रास्ता देखने के लिए नीचे क्लिक करें।'}
              </p>
            </div>

            <a
              href={clinicInfo.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('M.S Ayurvedic Centre Dr Mobin Delhi')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#284838] hover:bg-[#1a3325] text-white px-5 py-2.5 rounded-lg text-xs font-semibold shadow-xs transition-colors"
            >
              <span>{lang === 'en' ? 'Open in Google Maps' : 'गूगल मैप्स में खोलें'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
