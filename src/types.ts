export type Language = 'en' | 'hi';

export type PageId =
  | 'home'
  | 'about'
  | 'treatments'
  | 'offers'
  | 'reviews'
  | 'products'
  | 'contact'
  | 'admin';

export interface ClinicImagesConfig {
  heroBanner: string;
  heroSlide1?: string;
  heroSlide2?: string;
  heroSlide3?: string;
  doctorPortrait: string;
  hijamaCupping: string;
  dryCupping: string;
  herbalDispensary: string;
  herbalPreparations: string;
  consultationRoom: string;
  medicineMajun?: string;
  medicineBhasma?: string;
  medicineVitality?: string;
  clinicExterior?: string;
  clinicTreatmentRoom?: string;
  doctorMobinConsultation?: string;
  scalpCupping?: string;
  shoulderCupping?: string;
  [key: string]: string | undefined;
}

export interface AnnouncementConfig {
  enabled: boolean;
  text: { en: string; hi: string };
  badge: { en: string; hi: string };
  linkPage?: PageId;
}

export interface Product {
  id: string;
  name: { en: string; hi: string };
  category: 'digestive' | 'anorectal' | 'vitality' | 'general';
  categoryLabel: { en: string; hi: string };
  description: { en: string; hi: string };
  price: number;
  mrp: number;
  packSize: { en: string; hi: string };
  inStock: boolean;
  indications: { en: string[]; hi: string[] };
  dosageNote: { en: string; hi: string };
  imageKey?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Offer {
  id: string;
  title: { en: string; hi: string };
  summary: { en: string; hi: string };
  details: { en: string; hi: string };
  duration: { en: string; hi: string };
  price: string;
  featured?: boolean;
  included: { en: string[]; hi: string[] };
  validity: { en: string; hi: string };
}

export interface Review {
  id: string;
  patientName: { en: string; hi: string };
  rating: number;
  treatmentArea: { en: string; hi: string };
  text: { en: string; hi: string };
  date: { en: string; hi: string };
  verified: boolean;
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  age: string;
  concern: string;
  timing: string;
  message: string;
}
