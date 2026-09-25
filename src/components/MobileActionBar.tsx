import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { useClinic } from '../context/ClinicContext';

interface MobileActionBarProps {
  lang: Language;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ lang }) => {
  const { clinicInfo } = useClinic();

  const defaultWhatsAppText =
    lang === 'en'
      ? 'Hello Dr. Mobin, I would like to consult or request an appointment at M.S Ayurvedic Centre.'
      : 'नमस्ते डॉ. मोबिन, मैं एम.एस आयुर्वेदिक सेंटर में परामर्श या अपॉइंटमेंट लेना चाहता हूँ।';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#fcfaf7]/95 backdrop-blur-md border-t border-[#d8cdb8] p-2.5 px-3 flex gap-2.5 shadow-2xl">
      <a
        href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(defaultWhatsAppText)}`}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] text-white py-3 rounded-lg font-medium text-sm shadow-xs active:scale-[0.98] transition-transform"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>{lang === 'en' ? 'WhatsApp' : 'व्हाट्सएप'}</span>
      </a>

      <a
        href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
        className="flex-1 flex items-center justify-center gap-2 bg-[#234331] text-[#f7f3eb] py-3 rounded-lg font-medium text-sm shadow-xs active:scale-[0.98] transition-transform border border-[#162e21]"
      >
        <Phone className="w-4 h-4" />
        <span>{lang === 'en' ? 'Call' : 'कॉल करें'}</span>
      </a>
    </div>
  );
};

