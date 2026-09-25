import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  ShoppingBag,
  Menu,
  X,
  Shield,
  Settings,
  ArrowRight,
  Star,
  Home as HomeIcon,
  Stethoscope,
  Sparkles,
  Tag,
  Package,
  MapPin,
  Lock,
  Instagram,
  Facebook,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { useClinic } from '../context/ClinicContext';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  lang,
  onToggleLang,
  cartCount,
  onOpenCart,
}) => {
  const { clinicInfo, announcement } = useClinic();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setIsScrolled(scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems: {
    id: PageId;
    labelEn: string;
    labelHi: string;
    icon: React.ComponentType<{ className?: string }>;
    descEn: string;
    descHi: string;
  }[] = [
    {
      id: 'home',
      labelEn: 'Home',
      labelHi: 'होम',
      icon: HomeIcon,
      descEn: 'Clinic overview & highlights',
      descHi: 'मुख्य पृष्ठ एवं क्लिनिक परिचय',
    },
    {
      id: 'treatments',
      labelEn: 'Treatments & Hijama',
      labelHi: 'उपचार एवं हिजामा',
      icon: Sparkles,
      descEn: 'Single-use sterile cupping & therapies',
      descHi: 'स्टेरिलाइज्ड हिजामा एवं यूनानी थैरेपी',
    },
    {
      id: 'reviews',
      labelEn: 'Reviews & Ratings',
      labelHi: 'मरीज़ों की समीक्षाएँ',
      icon: Star,
      descEn: 'Verified patient testimonials (4.9★)',
      descHi: '4.9★ सत्यापित मरीज़ों के अनुभव',
    },
    {
      id: 'about',
      labelEn: 'About Dr. Mobin',
      labelHi: 'डॉ. मोबिन परिचय',
      icon: Stethoscope,
      descEn: 'B.U.M.S., M.H.T. (16+ yrs experience)',
      descHi: 'बी.यू.एम.एस., 16+ वर्षों का अनुभव',
    },
    {
      id: 'offers',
      labelEn: 'Offers & Camps',
      labelHi: 'विशेष ऑफ़र व शिविर',
      icon: Tag,
      descEn: 'Consultation & cupping packages',
      descHi: 'परामर्श एवं हिजामा पैकेज',
    },
    {
      id: 'products',
      labelEn: 'Ayurvedic Products',
      labelHi: 'हर्बल एवं यूनानी उत्पाद',
      icon: Package,
      descEn: 'Authentic medicines & supplements',
      descHi: 'शुद्ध जड़ी-बूटी औषधियां',
    },
    {
      id: 'contact',
      labelEn: 'Contact & Location',
      labelHi: 'संपर्क एवं पता',
      icon: MapPin,
      descEn: 'Clinic map, timing & directions',
      descHi: 'क्लिनिक का पता, समय व दिशा-निर्देश',
    },
  ];

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 
        NON-STICKY Main Header:
        Contains full clinic branding, doctor info, announcement, and controls.
        When the user scrolls down, this section naturally scrolls away and NEVER blocks the page.
      */}
      <header className="relative bg-[#fcfaf7] border-b border-[#e6decb] shadow-2xs z-30">
        {/* Top Announcement / Hijama Notice Banner */}
        {announcement.enabled && currentPage !== 'admin' && (
          <div className="bg-[#1e3c2b] text-white px-4 py-2 text-xs border-b border-[#2d563e]">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="shrink-0 px-2 py-0.5 rounded bg-[#dcfce7] text-[#166534] text-[10px] font-extrabold uppercase tracking-wider">
                  {announcement.badge[lang] || announcement.badge.en}
                </span>
                <p className="text-xs text-[#e1efe8] leading-tight line-clamp-1 sm:line-clamp-none">
                  {announcement.text[lang] || announcement.text.en}
                </p>
              </div>
              <button
                onClick={() => handleNav(announcement.linkPage || 'treatments')}
                className="shrink-0 text-xs text-[#86efac] hover:text-white font-semibold underline inline-flex items-center gap-1 self-end sm:self-auto"
              >
                <span>{lang === 'en' ? 'Explore Details' : 'विवरण देखें'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Confidentiality & direct contact bar */}
        <div className="bg-[#244233] text-[#e8f1ec] text-xs py-1.5 px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#b3d4c2] shrink-0" />
              <span className="truncate">
                {lang === 'en'
                  ? 'Strictly Private & Confidential Consultations • Ayurveda • Unani • Hijama (M.H.T.)'
                  : 'पूर्णतः गोपनीय एवं व्यक्तिगत परामर्श • आयुर्वेद • यूनानी • हिजामा (M.H.T.)'}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3 text-[#97c7ad]" />
                <span>{clinicInfo.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
                  lang === 'en'
                    ? 'Hello Dr. Mobin, I would like to consult with M.S Ayurvedic Centre.'
                    : 'नमस्ते डॉ. मोबिन, मैं एम.एस आयुर्वेदिक सेंटर से परामर्श लेना चाहता हूँ।'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[#86efac] hover:underline"
              >
                <MessageCircle className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-center gap-2 pl-2 border-l border-[#3a473f]">
                <a
                  href="https://www.instagram.com/drmobin80?stkn=dzVzanU4ZGk5ZjEx"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#f472b6] hover:text-white transition-colors"
                  title="Dr. Mobin on Instagram (@drmobin80)"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.facebook.com/share/188gTmips3/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#60a5fa] hover:text-white transition-colors"
                  title="Dr. Mobin on Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Branding & Navigation Bar */}
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between gap-4">
          {/* Brand Logo & Doctor Info */}
          <button
            onClick={() => handleNav('home')}
            className="text-left flex flex-col focus:outline-hidden group"
          >
            <span className="font-serif font-bold tracking-tight text-xl sm:text-2xl text-[#1e3427] group-hover:text-[#2b513f] transition-all">
              {clinicInfo.name[lang]}
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#6b6255] font-medium line-clamp-1">
              {clinicInfo.doctorName[lang]} • {clinicInfo.qualification[lang]}
            </span>
          </button>

          {/* Action Controls: Admin, Language, Cart, and 3-Line Menu Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Admin Quick Access Button */}
            <button
              onClick={() => handleNav('admin')}
              className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                currentPage === 'admin'
                  ? 'bg-[#166534] text-white border-[#15803d]'
                  : 'bg-[#efe9dc] hover:bg-[#e2d8c5] text-[#244233] border-[#d9ceb9]'
              }`}
              title={lang === 'en' ? 'Protected Admin: Edit Clinic Images' : 'सुरक्षित एडमिन: क्लिनिक इमेज बदलें'}
            >
              <Settings className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {lang === 'en' ? 'Admin' : 'एडमिन'}
              </span>
            </button>

            {/* Language Switcher */}
            <div className="inline-flex items-center p-0.5 rounded-lg bg-[#efe9dc] border border-[#d9ceb9] text-xs font-semibold">
              <button
                onClick={() => onToggleLang('en')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  lang === 'en'
                    ? 'bg-[#284838] text-white shadow-xs'
                    : 'text-[#544d44] hover:text-[#1e3427]'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => onToggleLang('hi')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  lang === 'hi'
                    ? 'bg-[#284838] text-white shadow-xs'
                    : 'text-[#544d44] hover:text-[#1e3427]'
                }`}
                title="हिन्दी में देखें"
              >
                हिन्दी
              </button>
            </div>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-lg text-[#284838] bg-[#efe9dc] hover:bg-[#e4dccb] border border-[#d9ceb9] transition-colors focus:outline-hidden"
              aria-label={lang === 'en' ? 'Open order cart' : 'कार्ट खोलें'}
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#b93826] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* 3-Line Menu Bar (Top Position) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="px-3 py-2 rounded-xl bg-[#284838] hover:bg-[#1e3427] text-white flex items-center gap-2 text-xs font-bold shadow-xs transition-all active:scale-95"
              aria-label="Open navigation menu"
              title={lang === 'en' ? 'Open navigation menu' : 'नेविगेशन मेनू खोलें'}
            >
              <div className="w-4 h-3.5 flex flex-col justify-between items-center py-0.5">
                <span className="w-4 h-0.5 bg-[#86efac] rounded-full"></span>
                <span className="w-4 h-0.5 bg-[#86efac] rounded-full"></span>
                <span className="w-4 h-0.5 bg-[#86efac] rounded-full"></span>
              </div>
              <span className="hidden sm:inline">
                {lang === 'en' ? 'Menu' : 'मेनू'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 
        FIXED 3-LINE BAR ON TOP WHEN SCROLLING:
        Appears ONLY when the user scrolls down on both mobile and laptop.
        Keeps the screen clean and unobtrusive — no big header blocking the content!
      */}
      {isScrolled && (
        <div className="fixed top-3 right-3 sm:top-4 sm:right-6 z-50 animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={() => setMenuOpen(true)}
            className="px-3.5 py-2.5 rounded-full bg-[#1b3427] hover:bg-[#254836] text-white shadow-xl border border-[#3b634c] flex items-center gap-2 cursor-pointer transition-all active:scale-95 focus:outline-hidden"
            aria-label="Open 3-line navigation menu"
            title={lang === 'en' ? 'Open Menu' : 'मेनू खोलें'}
          >
            {/* The 3-line bar icon */}
            <div className="w-4 h-3.5 flex flex-col justify-between items-center">
              <span className="w-4 h-0.5 bg-[#86efac] rounded-full"></span>
              <span className="w-4 h-0.5 bg-[#86efac] rounded-full"></span>
              <span className="w-4 h-0.5 bg-[#86efac] rounded-full"></span>
            </div>
            <span className="text-xs font-bold tracking-wide text-white pr-0.5">
              {lang === 'en' ? 'Menu' : 'मेनू'}
            </span>
          </button>
        </div>
      )}

      {/* 
        SLIDE-OVER / MODAL NAVIGATION DRAWER:
        Opens when clicking the 3-line bar.
        Displays Review, Home, Treatment, Doctor, Offers, Products, Contact, etc.
      */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
          {/* Dark Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-md bg-[#fcfaf7] h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10 border-l border-[#ded3be]">
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 bg-[#1e3c2b] text-white flex items-center justify-between border-b border-[#2d563e]">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#86efac] block">
                  {lang === 'en' ? 'M.S Ayurvedic Centre' : 'एम.एस आयुर्वेदिक सेंटर'}
                </span>
                <h2 className="font-serif text-lg font-bold text-white leading-tight">
                  {lang === 'en' ? 'Navigation & Pages' : 'वेबसाइट पृष्ठ'}
                </h2>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg bg-[#274a37] hover:bg-[#325d45] text-white transition-colors focus:outline-hidden"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links Grid (Review, Home, Treatment, Doctor, etc.) */}
            <div className="p-4 sm:p-5 space-y-2 flex-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#736858] pb-1">
                {lang === 'en' ? 'Select a Page to View' : 'पेज चुनें'}
              </p>

              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item.id)}
                      className={`w-full text-left p-3 rounded-xl flex items-center gap-3.5 transition-all ${
                        isActive
                          ? 'bg-[#284838] text-white shadow-sm font-semibold'
                          : 'bg-white hover:bg-[#efe7d8] text-[#2d2822] border border-[#ded3be]'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          isActive ? 'bg-[#1b3427] text-[#86efac]' : 'bg-[#f4eee3] text-[#2b513f]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold truncate">
                            {lang === 'en' ? item.labelEn : item.labelHi}
                          </span>
                          {item.id === 'reviews' && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-extrabold flex items-center gap-0.5">
                              ★ 4.9
                            </span>
                          )}
                        </div>
                        <p
                          className={`text-xs truncate ${
                            isActive ? 'text-[#c6decb]' : 'text-[#706453]'
                          }`}
                        >
                          {lang === 'en' ? item.descEn : item.descHi}
                        </p>
                      </div>

                      <ArrowRight className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#86efac]' : 'text-[#a39580]'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Protected Admin Access Link */}
              <div className="pt-3">
                <button
                  onClick={() => handleNav('admin')}
                  className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all border ${
                    currentPage === 'admin'
                      ? 'bg-[#166534] text-white border-[#22c55e]'
                      : 'bg-[#f3ede1] hover:bg-[#e7decb] text-[#244233] border-[#d8ccb7]'
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#274836] text-[#86efac] flex items-center justify-center shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold block">
                      {lang === 'en' ? 'Admin Portal' : 'एडमिन पोर्टल'}
                    </span>
                    <span className="text-[11px] text-[#635746]">
                      {lang === 'en' ? 'Manage & update clinic images' : 'क्लिनिक की तस्वीरें बदलें'}
                    </span>
                  </div>
                  <Settings className="w-4 h-4 text-[#2b513f]" />
                </button>
              </div>
            </div>

            {/* Drawer Footer: WhatsApp, Phone, Language */}
            <div className="p-4 sm:p-5 bg-[#f4ede1] border-t border-[#ded3be] space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs text-[#6e614f] font-medium">
                  {lang === 'en' ? 'Language / भाषा:' : 'भाषा / Language:'}
                </span>
                <div className="inline-flex items-center p-0.5 rounded-lg bg-white border border-[#c9bea9] text-xs font-semibold">
                  <button
                    onClick={() => onToggleLang('en')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      lang === 'en' ? 'bg-[#284838] text-white' : 'text-[#544d44]'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => onToggleLang('hi')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      lang === 'hi' ? 'bg-[#284838] text-white' : 'text-[#544d44]'
                    }`}
                  >
                    हिन्दी
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
                    lang === 'en'
                      ? 'Hello Dr. Mobin, I want to book an appointment at M.S Ayurvedic Centre.'
                      : 'नमस्ते डॉ. मोबिन, मुझे अपॉइंटमेंट बुक करना है।'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#25d366] hover:bg-[#20ba59] text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-1.5 bg-[#284838] hover:bg-[#1e3427] text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Call Doctor' : 'कॉल करें'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
