import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { CLINIC_IMAGES } from '../data/images';
import { CLINIC_INFO } from '../data/content';
import { ClinicImagesConfig, AnnouncementConfig } from '../types';
import { db, doc, setDoc, onSnapshot, collection, deleteDoc, getDocs } from '../lib/firebase';
import { compressDataUrl } from '../lib/imageUtils';

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
    key: 'heroSlide1',
    titleEn: 'Hero Slide 1: Clinic Front & Center',
    titleHi: 'हीरो स्लाइड 1: क्लिनिक प्रवेश द्वार व मुख्य केंद्र',
    descriptionEn: 'First image shown in the animated 3-photo slider on the Home Page banner.',
    descriptionHi: 'होम पेज के 3-फ़ोटो स्लाइडर में सबसे पहले दिखाई देने वाली मुख्य तस्वीर।',
    recommendedAspect: '16:10 or 16:9 Landscape',
    usagePages: ['Home Slider (Slide 1)'],
  },
  {
    key: 'heroSlide2',
    titleEn: 'Hero Slide 2: Dr. Mobin Consultation Chamber',
    titleHi: 'हीरो स्लाइड 2: डॉ. मोबिन परामर्श कक्ष',
    descriptionEn: 'Second image shown in the animated Home Page slider showing personal doctor consultation.',
    descriptionHi: 'होम पेज स्लाइडर में दूसरी तस्वीर — डॉ. मोबिन का व्यक्तिगत परामर्श कक्ष।',
    recommendedAspect: '16:10 or 16:9 Landscape',
    usagePages: ['Home Slider (Slide 2)'],
  },
  {
    key: 'heroSlide3',
    titleEn: 'Hero Slide 3: Hijama Cupping & Herbal Medicines',
    titleHi: 'हीरो स्लाइड 3: हिजामा कपिंग थेरेपी व शुद्ध औषधियां',
    descriptionEn: 'Third image in the Home Page slider showing authentic clinical Hijama and herbal remedies.',
    descriptionHi: 'होम पेज स्लाइडर में तीसरी तस्वीर — प्रामाणिक हिजामा कपिंग थेरेपी व औषधीय योग।',
    recommendedAspect: '16:10 or 16:9 Landscape',
    usagePages: ['Home Slider (Slide 3)'],
  },
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
  cloudSyncStatus: 'synced' | 'saving' | 'offline' | 'error';
  syncToCloud: () => Promise<boolean>;
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

  const [cloudSyncStatus, setCloudSyncStatus] = useState<'synced' | 'saving' | 'offline' | 'error'>('synced');
  const isRemoteSyncRef = useRef(false);

  // Real-time synchronization from Firebase Firestore
  useEffect(() => {
    let unsubConfig: (() => void) | undefined;
    let unsubImages: (() => void) | undefined;

    try {
      // 1. Listen for Clinic Details & Announcements (tiny <5KB document)
      const configDocRef = doc(db, 'site_config', 'main');
      unsubConfig = onSnapshot(
        configDocRef,
        (snap) => {
          if (snap.exists()) {
            const data = snap.data();
            isRemoteSyncRef.current = true;
            if (data.clinicInfo && typeof data.clinicInfo === 'object') {
              setClinicInfo((prev) => ({
                ...prev,
                ...data.clinicInfo,
                name: { ...prev.name, ...(data.clinicInfo.name || {}) },
                doctorName: { ...prev.doctorName, ...(data.clinicInfo.doctorName || {}) },
                qualification: { ...prev.qualification, ...(data.clinicInfo.qualification || {}) },
                university: { ...prev.university, ...(data.clinicInfo.university || {}) },
                practiceSince: { ...prev.practiceSince, ...(data.clinicInfo.practiceSince || {}) },
                languages: { ...prev.languages, ...(data.clinicInfo.languages || {}) },
                address: { ...prev.address, ...(data.clinicInfo.address || {}) },
                landmark: { ...prev.landmark, ...(data.clinicInfo.landmark || {}) },
                parking: { ...prev.parking, ...(data.clinicInfo.parking || {}) },
                hours: { ...prev.hours, ...(data.clinicInfo.hours || {}) },
                social: { ...prev.social, ...(data.clinicInfo.social || {}) },
                developer: { ...prev.developer, ...(data.clinicInfo.developer || {}) },
              }));
            }
            if (data.announcement && typeof data.announcement === 'object') {
              setAnnouncement((prev) => ({
                ...prev,
                ...data.announcement,
                text: { ...prev.text, ...(data.announcement.text || {}) },
                badge: { ...prev.badge, ...(data.announcement.badge || {}) },
              }));
            }
            setCloudSyncStatus('synced');
            if (data.updatedAt) {
              setLastSavedAt(
                new Date(data.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
              );
            }
            setTimeout(() => {
              isRemoteSyncRef.current = false;
            }, 300);
          }
        },
        (err) => {
          console.warn('Firestore real-time config sync notification:', err);
          setCloudSyncStatus('offline');
        }
      );

      // 2. Listen for customized image overrides stored in site_images collection
      const imagesColRef = collection(db, 'site_images');
      unsubImages = onSnapshot(
        imagesColRef,
        (snap) => {
          isRemoteSyncRef.current = true;
          const imageOverrides: Partial<ClinicImagesConfig> = {};
          snap.forEach((docSnap) => {
            const data = docSnap.data();
            if (data && typeof data.url === 'string') {
              (imageOverrides as Record<string, string>)[docSnap.id] = data.url;
            }
          });
          if (Object.keys(imageOverrides).length > 0) {
            setImages((prev) => ({ ...prev, ...imageOverrides }));
          }
          setCloudSyncStatus('synced');
          setTimeout(() => {
            isRemoteSyncRef.current = false;
          }, 300);
        },
        (err) => {
          console.warn('Firestore site_images listener:', err);
        }
      );
    } catch (e) {
      console.warn('Could not establish Firestore listeners:', e);
      setCloudSyncStatus('offline');
    }

    return () => {
      if (unsubConfig) unsubConfig();
      if (unsubImages) unsubImages();
    };
  }, []);

  // Helper to persist clinic info & announcement to site_config/main (<5KB document, avoids 1MB limit)
  const pushClinicInfoToFirestore = async (
    targetInfo: ClinicInfoType,
    targetAnnouncement: AnnouncementConfig
  ) => {
    try {
      const configDocRef = doc(db, 'site_config', 'main');
      await setDoc(
        configDocRef,
        {
          clinicInfo: targetInfo,
          announcement: targetAnnouncement,
          updatedAt: new Date().toISOString(),
        },
        { merge: true }
      );
      setCloudSyncStatus('synced');
      return true;
    } catch (error) {
      console.error('Error syncing to Firestore:', error);
      setCloudSyncStatus('error');
      return false;
    }
  };

  // Helper to persist single image to site_images/{key}
  const saveImageToFirestore = async (key: string, rawUrl: string) => {
    try {
      setCloudSyncStatus('saving');
      const defaultUrl = (CLINIC_IMAGES as Record<string, string>)[key];
      if (rawUrl && rawUrl !== defaultUrl) {
        // Compress if base64 to ensure it remains < 150KB
        const compressedUrl = await compressDataUrl(rawUrl, 900, 900, 0.72);
        const imageDocRef = doc(db, 'site_images', key);
        await setDoc(imageDocRef, {
          url: compressedUrl,
          updatedAt: new Date().toISOString(),
        });
      } else {
        // Reverted to default, delete from cloud
        await deleteDoc(doc(db, 'site_images', key));
      }
      setCloudSyncStatus('synced');
    } catch (error) {
      console.error(`Error saving image ${key} to Firestore:`, error);
      setCloudSyncStatus('error');
    }
  };

  // Manual trigger to force-push all state to Firestore
  const syncToCloud = async (): Promise<boolean> => {
    try {
      setCloudSyncStatus('saving');
      // 1. Save clinic info & announcement to site_config/main
      const okInfo = await pushClinicInfoToFirestore(clinicInfo, announcement);

      // 2. Save any custom images to site_images/{key}
      for (const [key, rawUrl] of Object.entries(images)) {
        const url = typeof rawUrl === 'string' ? rawUrl : '';
        const defaultUrl = (CLINIC_IMAGES as Record<string, string>)[key];
        if (url && url !== defaultUrl) {
          const compressed = await compressDataUrl(url, 900, 900, 0.72);
          await setDoc(doc(db, 'site_images', key), {
            url: compressed,
            updatedAt: new Date().toISOString(),
          });
        }
      }

      setCloudSyncStatus(okInfo ? 'synced' : 'error');
      return okInfo;
    } catch (err) {
      console.error('Error during syncToCloud:', err);
      setCloudSyncStatus('error');
      return false;
    }
  };

  // Persist locally whenever clinicInfo or announcement change
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

      // If change was made locally in this tab, update cloud config
      if (!isRemoteSyncRef.current) {
        pushClinicInfoToFirestore(clinicInfo, announcement);
      }
    } catch (err) {
      console.error('Error saving admin settings to localStorage', err);
    }
  }, [clinicInfo, announcement]);

  const updateImage = (key: string, url: string) => {
    const trimmed = url.trim();
    setImages((prev) => ({
      ...prev,
      [key]: trimmed,
    }));
    saveImageToFirestore(key, trimmed);
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

  const resetImageToDefault = async (key: string) => {
    const defaultUrl = (CLINIC_IMAGES as Record<string, string>)[key];
    if (defaultUrl) {
      setImages((prev) => ({
        ...prev,
        [key]: defaultUrl,
      }));
      try {
        await deleteDoc(doc(db, 'site_images', key));
      } catch (e) {
        console.warn(`Could not delete image ${key} from Firestore:`, e);
      }
    }
  };

  const resetAllImagesToDefault = async () => {
    setImages({ ...CLINIC_IMAGES });
    try {
      const snap = await getDocs(collection(db, 'site_images'));
      const deletions = snap.docs.map((d) => deleteDoc(d.ref));
      await Promise.all(deletions);
    } catch (e) {
      console.warn('Could not reset all images in Firestore:', e);
    }
  };

  const resetAllToDefault = async () => {
    setImages({ ...CLINIC_IMAGES });
    setClinicInfo({ ...CLINIC_INFO });
    setAnnouncement({ ...DEFAULT_ANNOUNCEMENT });
    try {
      localStorage.removeItem(STORAGE_KEY);
      const snap = await getDocs(collection(db, 'site_images'));
      const deletions = snap.docs.map((d) => deleteDoc(d.ref));
      await Promise.all(deletions);
      await deleteDoc(doc(db, 'site_config', 'main'));
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
        cloudSyncStatus,
        syncToCloud,
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
