import React, { createContext, useContext, useState, useEffect } from 'react';
import { CLINIC_IMAGES } from '../data/images';
import { CLINIC_INFO } from '../data/content';
import { ClinicImagesConfig, AnnouncementConfig } from '../types';

export type ClinicInfoType = typeof CLINIC_INFO;

export interface ImageMeta {
  key: keyof ClinicImagesConfig & string;
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  recommendedAspect: string;
  usagePages: string[];
}

export const IMAGE_METADATA_LIST: ImageMeta[] = [
  {
    key: 'heroBanner',
    titleEn: 'Main Hero Consultation Banner (Clinic Storefront)',
    titleHi: 'मुख्य हीरो परामर्श बैनर (क्लिनिक बाह्य दृश्य)',
    descriptionEn: 'Displayed on the top of the Home Page and Treatments Page showing authentic M.S. Ayurvedic Centre premises.',
    descriptionHi: 'होम पेज और ट्रीटमेंट पेज के मुख्य बैनर में वास्तविक क्लिनिक का दृश्य।',
    recommendedAspect: '16:9 Wide Landscape',
    usagePages: ['Home', 'Treatments'],
  },
  {
    key: 'doctorPortrait',
    titleEn: 'Dr. Mobin Official Consultation Photo',
    titleHi: 'डॉ. मोबिन का परामर्श फ़ोटो',
    descriptionEn: 'Displayed beside Dr. Mobin’s profile, consultation chamber, and qualifications.',
    descriptionHi: 'डॉ. मोबिन के परिचय, परामर्श कक्ष और प्रमाण पत्र अनुभाग में दिखाई देता है।',
    recommendedAspect: '4:3 Clinical Documentary',
    usagePages: ['Home', 'About Doctor'],
  },
  {
    key: 'hijamaCupping',
    titleEn: 'Authentic Scalp Hijama (Sunnah Cupping Therapy)',
    titleHi: 'वास्तविक सिर हिजामा (सुन्नत कपिंग थेरेपी)',
    descriptionEn: 'Original clinical scalp wet cupping photo showing vacuum suction cups on vertex and neck.',
    descriptionHi: 'सिर और गर्दन पर कपिंग (हिजामा) की मूल क्लीनिकल फ़ोटो।',
    recommendedAspect: '3:4 or 4:3 Clinical Photo',
    usagePages: ['Treatments', 'About Doctor', 'Offers'],
  },
  {
    key: 'dryCupping',
    titleEn: 'Original Shoulder & Muscular Cupping Therapy',
    titleHi: 'कंधे एवं मांसपेशियों पर वास्तविक कपिंग थेरेपी',
    descriptionEn: 'Original clinical photo showing vacuum suction cups on shoulder, deltoid, and upper back.',
    descriptionHi: 'कंधे व बाजू पर वैक्यूम कपिंग की मूल क्लीनिकल फ़ोटो।',
    recommendedAspect: '3:4 or 4:3 Clean Clinical',
    usagePages: ['Treatments'],
  },
  {
    key: 'consultationRoom',
    titleEn: 'Authentic Clinical Procedure & Treatment Room',
    titleHi: 'क्लिनिक उपचार कक्ष व प्रक्रिया बेड',
    descriptionEn: 'Original photo of clinic examination couch with cupping trolley and clinical supplies.',
    descriptionHi: 'क्लिनिकल बेड, कपिंग ट्रॉली और आवश्यक चिकित्सा उपकरणों की मूल फ़ोटो।',
    recommendedAspect: '16:9 Interior Room',
    usagePages: ['Home', 'About Doctor', 'Contact'],
  },
  {
    key: 'herbalDispensary',
    titleEn: 'Original Bhasma & Rasayana Formulations',
    titleHi: 'वास्तविक भस्म व शास्त्रीय रसायन योग',
    descriptionEn: 'Original clinical medicines including Swarna Bhasma, Amber Bhasam, and herbal extract.',
    descriptionHi: 'स्वर्ण भस्म, अंबर भस्म, त्रिवंग भस्म एवं यूनानी अर्क की वास्तविक तस्वीर।',
    recommendedAspect: '3:4 Product Detail',
    usagePages: ['About Doctor', 'Products'],
  },
  {
    key: 'herbalPreparations',
    titleEn: 'Original Vitality Medicine & Medicated Oils',
    titleHi: 'प्रामाणिक पौरुष औषधि एवं औषधीय तैल',
    descriptionEn: 'Original Boosts Vigour & Vitality botanical course and medicated massage oils.',
    descriptionHi: 'अश्वगंधा, शतावरी, मूसली युक्त वाइटैलिटी औषधि एवं औषधीय तैल की फ़ोटो।',
    recommendedAspect: '3:4 Product Detail',
    usagePages: ['About Doctor', 'Products'],
  },
  {
    key: 'medicineMajun',
    titleEn: 'Majun-e-Shahi (Classical Electuary Open Jar)',
    titleHi: 'माजून-ए-शाही (मूल यूनानी अवलेह जार)',
    descriptionEn: 'Original photo of open glass jar with silver spoon showing genuine saffron-honey herbal electuary.',
    descriptionHi: 'असली यूनानी माजून-ए-शाही जार एवं चम्मच के साथ गाढ़े अवलेह की मूल फ़ोटो।',
    recommendedAspect: '1:1 or 4:3 Product Shot',
    usagePages: ['Products'],
  },
  {
    key: 'hairLossBefore',
    titleEn: 'Hair Loss / Thinning Before Treatment',
    titleHi: 'उपचार पूर्व बाल झड़ना / गंजापन फ़ोटो',
    descriptionEn: 'Displayed in the interactive Before & After slider on Reviews & Treatments pages.',
    descriptionHi: 'समीक्षाएँ एवं उपचार पेज पर इंटरैक्टिव बिफोर-आफ़्टर स्लाइडर में प्रदर्शित होता है।',
    recommendedAspect: '3:4 or 4:5 Scalp Clinical Photo',
    usagePages: ['Reviews', 'Treatments'],
  },
  {
    key: 'hairGrowthAfter',
    titleEn: 'Hair Regrowth After Holistic Therapy',
    titleHi: 'उपचार पश्चात बाल पुनरुत्पादन (आफ़्टर) फ़ोटो',
    descriptionEn: 'Displayed as the results comparison after Ayurvedic & Hijama scalp protocol.',
    descriptionHi: 'आयुर्वेदिक एवं हिजामा थेरेपी के बाद आए घने बालों का परिणाम फ़ोटो।',
    recommendedAspect: '3:4 or 4:5 Scalp Clinical Photo',
    usagePages: ['Reviews', 'Treatments'],
  },
  {
    key: 'spermReportBefore',
    titleEn: 'Semen Analysis Before Treatment (Azoospermia / Nil Count)',
    titleHi: 'उपचार पूर्व वीर्य परीक्षण रिपोर्ट (शून्य शुक्राणु / Azoospermia)',
    descriptionEn: 'Displayed in Before & After clinical documentation showing initial NIL sperm count.',
    descriptionHi: 'क्लीनिकल दस्तावेज़ में उपचार पूर्व शून्य शुक्राणु (NIL Sperm Count) रिपोर्ट।',
    recommendedAspect: '3:4 Document',
    usagePages: ['Reviews', 'Treatments'],
  },
  {
    key: 'spermReportAfter',
    titleEn: 'Semen Analysis After Treatment (Active Spermatogenesis)',
    titleHi: 'उपचार पश्चात वीर्य परीक्षण रिपोर्ट (सक्रिय शुक्राणु उत्पत्ति)',
    descriptionEn: 'Displayed in Before & After showing recovery of active motile sperm count.',
    descriptionHi: 'उपचार पश्चात शुक्राणु उत्पत्ति व सक्रिय गतिशीलता (Motility) की रिपोर्ट।',
    recommendedAspect: '3:4 Document',
    usagePages: ['Reviews', 'Treatments'],
  },
];

const DEFAULT_ANNOUNCEMENT: AnnouncementConfig = {
  enabled: true,
  badge: {
    en: 'Hijama & Consultation Update',
    hi: 'हिजामा एवं परामर्श सूचना',
  },
  text: {
    en: 'Dr. Mobin (B.U.M.S., M.H.T.) is currently accepting in-person Hijama (Cupping Therapy) & Sexual Health appointments in Sector 62 / 63 Noida. Direct call & WhatsApp bookings open.',
    hi: 'डॉ. मोबिन (बी.यू.एम.एस., एम.एच.टी.) द्वारा सेक्टर 62 / 63 नोएडा क्लिनिक में हिजामा (कपिंग) व परामर्श उपलब्ध है। सीधे कॉल व व्हाट्सएप द्वारा समय प्राप्त करें।',
  },
  linkPage: 'treatments',
};

const STORAGE_KEY = 'ms_ayurvedic_clinic_admin_config_v2';

interface ClinicContextType {
  images: ClinicImagesConfig;
  clinicInfo: ClinicInfoType;
  announcement: AnnouncementConfig;
  updateImage: (key: string, url: string) => void;
  updateClinicInfo: (updates: Partial<ClinicInfoType>) => void;
  updateAnnouncement: (updates: Partial<AnnouncementConfig>) => void;
  resetImageToDefault: (key: string) => void;
  resetAllImagesToDefault: () => void;
  resetAllToDefault: () => void;
  exportSettingsJSON: () => string;
  importSettingsJSON: (jsonString: string) => { success: boolean; message: string };
  hasCustomChanges: boolean;
  lastSavedAt: string | null;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

export const ClinicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<ClinicImagesConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.images) {
          return { ...CLINIC_IMAGES, ...parsed.images };
        }
      }
    } catch (e) {
      console.error('Failed to parse clinic config from storage', e);
    }
    return { ...CLINIC_IMAGES };
  });

  const [clinicInfo, setClinicInfo] = useState<ClinicInfoType>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.clinicInfo) {
          return {
            ...CLINIC_INFO,
            ...parsed.clinicInfo,
            name: { ...CLINIC_INFO.name, ...parsed.clinicInfo.name },
            doctorName: { ...CLINIC_INFO.doctorName, ...parsed.clinicInfo.doctorName },
            qualification: { ...CLINIC_INFO.qualification, ...parsed.clinicInfo.qualification },
            university: { ...CLINIC_INFO.university, ...parsed.clinicInfo.university },
            registrationNumber: { ...CLINIC_INFO.registrationNumber, ...parsed.clinicInfo.registrationNumber },
            council: { ...CLINIC_INFO.council, ...parsed.clinicInfo.council },
            practiceSince: { ...CLINIC_INFO.practiceSince, ...parsed.clinicInfo.practiceSince },
            languages: { ...CLINIC_INFO.languages, ...parsed.clinicInfo.languages },
            address: { ...CLINIC_INFO.address, ...parsed.clinicInfo.address },
            landmark: { ...CLINIC_INFO.landmark, ...parsed.clinicInfo.landmark },
            parking: { ...CLINIC_INFO.parking, ...parsed.clinicInfo.parking },
            hours: { ...CLINIC_INFO.hours, ...parsed.clinicInfo.hours },
            social: { ...CLINIC_INFO.social, ...(parsed.clinicInfo.social || {}) },
            developer: { ...CLINIC_INFO.developer, ...(parsed.clinicInfo.developer || {}) },
          };
        }
      }
    } catch (e) {
      console.error('Failed to parse clinicInfo from storage', e);
    }
    return { ...CLINIC_INFO };
  });

  const [announcement, setAnnouncement] = useState<AnnouncementConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.announcement) {
          return {
            ...DEFAULT_ANNOUNCEMENT,
            ...parsed.announcement,
            text: { ...DEFAULT_ANNOUNCEMENT.text, ...parsed.announcement.text },
            badge: { ...DEFAULT_ANNOUNCEMENT.badge, ...parsed.announcement.badge },
          };
        }
      }
    } catch (e) {
      console.error('Failed to parse announcement from storage', e);
    }
    return { ...DEFAULT_ANNOUNCEMENT };
  });

  const [lastSavedAt, setLastSavedAt] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.savedAt || null;
      }
    } catch {
      // ignore
    }
    return null;
  });

  // Persist whenever images, clinicInfo, or announcement change
  useEffect(() => {
    try {
      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const payload = {
        images,
        clinicInfo,
        announcement,
        savedAt: now,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      setLastSavedAt(now);
    } catch (err) {
      console.error('Error saving admin settings to localStorage', err);
    }
  }, [images, clinicInfo, announcement]);

  const updateImage = (key: string, url: string) => {
    setImages((prev) => ({
      ...prev,
      [key]: url.trim(),
    }));
  };

  const updateClinicInfo = (updates: Partial<ClinicInfoType>) => {
    setClinicInfo((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const updateAnnouncement = (updates: Partial<AnnouncementConfig>) => {
    setAnnouncement((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const resetImageToDefault = (key: string) => {
    const defaultUrl = (CLINIC_IMAGES as Record<string, string>)[key];
    if (defaultUrl) {
      setImages((prev) => ({
        ...prev,
        [key]: defaultUrl,
      }));
    }
  };

  const resetAllImagesToDefault = () => {
    setImages({ ...CLINIC_IMAGES });
  };

  const resetAllToDefault = () => {
    setImages({ ...CLINIC_IMAGES });
    setClinicInfo({ ...CLINIC_INFO });
    setAnnouncement({ ...DEFAULT_ANNOUNCEMENT });
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const exportSettingsJSON = () => {
    const payload = {
      images,
      clinicInfo,
      announcement,
      exportedAt: new Date().toISOString(),
    };
    return JSON.stringify(payload, null, 2);
  };

  const importSettingsJSON = (jsonString: string): { success: boolean; message: string } => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.images && typeof parsed.images === 'object') {
        setImages((prev) => ({ ...prev, ...parsed.images }));
      }
      if (parsed.clinicInfo && typeof parsed.clinicInfo === 'object') {
        setClinicInfo((prev) => ({ ...prev, ...parsed.clinicInfo }));
      }
      if (parsed.announcement && typeof parsed.announcement === 'object') {
        setAnnouncement((prev) => ({ ...prev, ...parsed.announcement }));
      }
      return { success: true, message: 'Settings imported successfully!' };
    } catch (e: unknown) {
      const err = e instanceof Error ? e.message : 'Invalid JSON format';
      return { success: false, message: `Failed to import: ${err}` };
    }
  };

  // Determine if there are custom edits compared to base constants
  const hasCustomChanges =
    JSON.stringify(images) !== JSON.stringify(CLINIC_IMAGES) ||
    JSON.stringify(clinicInfo) !== JSON.stringify(CLINIC_INFO) ||
    JSON.stringify(announcement) !== JSON.stringify(DEFAULT_ANNOUNCEMENT);

  return (
    <ClinicContext.Provider
      value={{
        images,
        clinicInfo,
        announcement,
        updateImage,
        updateClinicInfo,
        updateAnnouncement,
        resetImageToDefault,
        resetAllImagesToDefault,
        resetAllToDefault,
        exportSettingsJSON,
        importSettingsJSON,
        hasCustomChanges,
        lastSavedAt,
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
};

export const useClinic = (): ClinicContextType => {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error('useClinic must be used within a ClinicProvider');
  }
  return context;
};
