import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Shield, Play, Pause } from 'lucide-react';
import { Language, PageId } from '../types';
import { useClinic } from '../context/ClinicContext';

interface HeroSliderProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onOpenBooking?: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ lang, onNavigate, onOpenBooking }) => {
  const { images, clinicInfo } = useClinic();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // 3 High-Impact Slides with customizable images
  const slides = [
    {
      id: 0,
      image: images.heroSlide1 || images.clinicExterior || images.heroBanner,
      alt: lang === 'en' ? 'M.S Ayurvedic & Hijama Centre exterior' : 'एम.एस आयुर्वेदिक केंद्र बाह्य दृश्य',
      tag: lang === 'en' ? 'Welcome to M.S Ayurvedic Centre' : 'एम.एस आयुर्वेदिक सेंटर में आपका स्वागत है',
      title: lang === 'en' ? 'Authentic Unani & Ayurvedic Clinic' : 'प्रामाणिक यूनानी एवं आयुर्वेदिक चिकित्सालय',
      subtitle:
        lang === 'en'
          ? 'Sector 62/63 Noida • Trusted holistic care since 2011'
          : 'सेक्टर 62/63 नोएडा • 2011 से विश्वसनीय प्राकृतिक उपचार',
    },
    {
      id: 1,
      image: images.heroSlide2 || images.doctorConsultation || images.doctorPortrait,
      alt: lang === 'en' ? 'Dr. Mobin personal consultation' : 'डॉ. मोबिन व्यक्तिगत परामर्श',
      tag: lang === 'en' ? 'Personal 1-on-1 Consultation' : 'निजी व गोपनीय परामर्श',
      title: clinicInfo.doctorName[lang],
      subtitle:
        lang === 'en'
          ? `${clinicInfo.qualification[lang]} • 16+ Years Experience in Sexual Health & Chronic Care`
          : `${clinicInfo.qualification[lang]} • पौरुष स्वास्थ्य व जीर्ण रोगों में 16+ वर्षों का अनुभव`,
    },
    {
      id: 2,
      image: images.heroSlide3 || images.realCuppingTherapy || images.hijamaCupping,
      alt: lang === 'en' ? 'Certified Hijama cupping therapy session' : 'प्रमाणित हिजामा कपिंग थेरेपी सत्र',
      tag: lang === 'en' ? 'Certified Sunnah Cupping (M.H.T)' : 'प्रमाणित सुन्नत हिजामा (M.H.T)',
      title: lang === 'en' ? 'Hijama Cupping & Pure Herbal Pharmacy' : 'हिजामा कपिंग एवं शुद्ध यूनानी औषधियां',
      subtitle:
        lang === 'en'
          ? '100% Sterile single-use cups • Pain relief, detox & vitality boost'
          : '100% स्टेरिलाइज्ड सिंगल-यूज़ कप • दर्द निवारण, रक्त शोधन व नवऊर्जा',
    },
  ];

  // Auto sliding every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-[#182d20] select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Viewport */}
      <div className="relative aspect-[4/3] sm:aspect-[16/11] md:aspect-[16/10] overflow-hidden bg-black">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 pointer-events-none scale-105'
              } transition-transform duration-1000`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />

              {/* Dynamic Contrast Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

              {/* Slide Caption Banner */}
              <div className="absolute top-4 left-4 right-16 sm:right-20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider border border-white/30 shadow-xs animate-fadeIn">
                  <Sparkles className="w-3 h-3 text-emerald-300" />
                  <span>{slide.tag}</span>
                </span>
              </div>
            </div>
          );
        })}

        {/* Slide Counter Badge (Top Right) */}
        <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white/90 text-xs font-mono font-medium border border-white/20">
          0{currentSlide + 1} / 0{slides.length}
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md border border-white/30 flex items-center justify-center transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 active:scale-90"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md border border-white/30 flex items-center justify-center transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 active:scale-90"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Bottom Floating Doctor & Caption Overlay */}
        <div className="absolute bottom-4 left-3 right-3 sm:left-4 sm:right-4 z-20">
          <div className="p-3 sm:p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#e3dacf] shadow-xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#2b513f] shrink-0 bg-[#1f372a] shadow-xs">
                <img
                  src={images.doctorPortrait}
                  alt="Dr. Mobin"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" title="Online / In-Clinic" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif font-bold text-sm text-[#183123] truncate">
                    {clinicInfo.doctorName[lang]}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#257a4a] shrink-0" />
                </div>
                <p className="text-[11px] text-[#6b6152] truncate leading-tight">
                  {clinicInfo.qualification[lang]} • 16+ {lang === 'en' ? 'Yrs Exp' : 'वर्ष अनुभव'}
                </p>
                <p className="text-[10px] text-emerald-800 font-semibold mt-0.5 flex items-center gap-1 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse inline-block" />
                  {lang === 'en' ? 'Consultations Active in Noida 62/63' : 'नोएडा सेक्टर 62/63 में परामर्श जारी'}
                </p>
              </div>
            </div>

            {/* Quick Action Button in Hero Bar */}
            {onOpenBooking ? (
              <button
                onClick={onOpenBooking}
                className="shrink-0 px-3 py-2 rounded-lg bg-[#274a37] hover:bg-[#1e392a] text-white text-xs font-semibold shadow-xs transition-all active:scale-95"
              >
                {lang === 'en' ? 'Book Now' : 'अपॉइंटमेंट'}
              </button>
            ) : (
              <button
                onClick={() => onNavigate('contact')}
                className="shrink-0 px-3 py-2 rounded-lg bg-[#274a37] hover:bg-[#1e392a] text-white text-xs font-semibold shadow-xs transition-all active:scale-95"
              >
                {lang === 'en' ? 'Book' : 'अपॉइंटमेंट'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Slide Indicators / Navigation Dots */}
      <div className="bg-[#15271c] px-4 py-2.5 flex items-center justify-between border-t border-white/10">
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-emerald-400' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3 text-[11px] text-emerald-200/80 font-medium">
          <span className="hidden sm:inline">
            {currentSlide === 0 && (lang === 'en' ? '1/3 Clinic Front' : '1/3 मुख्य केंद्र')}
            {currentSlide === 1 && (lang === 'en' ? '2/3 Doctor Consultation' : '2/3 परामर्श कक्ष')}
            {currentSlide === 2 && (lang === 'en' ? '3/3 Hijama Cupping' : '3/3 हिजामा थेरेपी')}
          </span>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 rounded hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            title={isPaused ? 'Resume auto-sliding' : 'Pause sliding'}
          >
            {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Decorative Subtle Accent Tag */}
      <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 bg-[#234331] text-[#b8f5d0] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md border border-[#3e6b52] z-30">
        <Shield className="w-3.5 h-3.5 text-[#86efac]" />
        <span>{lang === 'en' ? '100% Private & Ethical' : 'पूर्णतः गोपनीय एवं मर्यादित'}</span>
      </div>
    </div>
  );
};
