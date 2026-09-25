import React, { useState, useRef } from 'react';
import {
  ShieldCheck,
  Info,
  Sparkles,
  CheckCircle2,
  SplitSquareVertical,
  ChevronDown,
  ChevronUp,
  BookOpen,
  FileText,
  Microscope,
} from 'lucide-react';
import { Language } from '../types';
import { useClinic } from '../context/ClinicContext';

export interface CaseStudy {
  id: string;
  category: 'hair' | 'sperm';
  title: { en: string; hi: string };
  condition: { en: string; hi: string };
  duration: { en: string; hi: string };
  consentRef: string;
  notes: { en: string; hi: string };
  beforeLabel: { en: string; hi: string };
  afterLabel: { en: string; hi: string };
  beforeImageKey?: string;
  afterImageKey?: string;
  beforeColor: string;
  afterColor: string;
  beforeDescription: { en: string; hi: string };
  afterDescription: { en: string; hi: string };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-hair-regrowth',
    category: 'hair',
    title: {
      en: 'Crown Vertex Hair Loss & Follicular Regrowth (Alopecia / खालित्य)',
      hi: 'शिरोभाग (क्राउन) का गंजापन व नए बालों का पुनरुत्पादन (इंद्रलुप्त)',
    },
    condition: {
      en: 'Androgenetic Alopecia & Severe Crown Thinning treated via Scalp Hijama (Cupping) & Ayurvedic Keshya Rasayana',
      hi: 'तीव्र बाल झड़ना व क्राउन का गंजापन — स्कैल्प हिजामा (रक्तमोक्षण) एवं केश्य आयुर्वेदिक औषधियों द्वारा सफल उपचार',
    },
    duration: {
      en: '12 Weeks Regimen (3 Hijama Sessions)',
      hi: '12 सप्ताह का उपचार (3 हिजामा सत्र)',
    },
    consentRef: 'Consent Form Ref: #MS-AC-2026-HAIR-09',
    notes: {
      en: 'Remarkable follicular reactivation on vertex scalp. Significant density restoration, dark terminal hair regrowth, and complete cessation of thinning after micro-circulation stimulation.',
      hi: 'सिर के ऊपरी हिस्से (क्राउन) पर सुप्त रोमछिद्रों का पुनर्सक्रियण। घने व प्राकृतिक काले बालों का नया विकास, बालों का टूटना बंद एवं स्कैल्प के टॉक्सिन्स से मुक्ति।',
    },
    beforeLabel: { en: 'Before Treatment (Day 1 - Severe Thinning)', hi: 'उपचार पूर्व (पहला दिन - तीव्र गंजापन)' },
    afterLabel: { en: 'After 12 Weeks (Dense Regrowth)', hi: '12 सप्ताह पश्चात (घने बाल)' },
    beforeImageKey: 'hairLossBefore',
    afterImageKey: 'hairGrowthAfter',
    beforeColor: 'from-amber-950/80 to-zinc-900/90',
    afterColor: 'from-emerald-950/80 to-stone-900/90',
    beforeDescription: {
      en: 'Severe crown thinning, visible bare scalp skin, miniaturized weak follicles, and progressive male pattern hair loss.',
      hi: 'शिरोभाग पर विरल बाल, स्कैल्प की त्वचा साफ दिखाई देना, बालों की जड़ें कमजोर और पतली।',
    },
    afterDescription: {
      en: 'Restored hair density, thick terminal follicles covering vertex, active new sprouts, and healthy scalp vitality.',
      hi: 'घने व प्राकृतिक काले बालों की वापसी, गंजापन गायब, रोमछिद्रों को रक्त संचार से नया जीवन।',
    },
  },
  {
    id: 'case-sperm-recovery',
    category: 'sperm',
    title: {
      en: 'Semen Analysis Report: Azoospermia to Active Spermatogenesis (शुक्राणु शून्यता से सुधार)',
      hi: 'वीर्य जांच रिपोर्ट: शून्य शुक्राणु (Azoospermia / NIL Count) से सक्रिय शुक्राणु उत्पत्ति',
    },
    condition: {
      en: 'Azoospermia (Nil Sperm Count) & Low Motility successfully treated with Classical Ayurvedic & Unani Shukra Janana Therapeutics',
      hi: 'एज़ूस्पर्मिया (शून्य शुक्राणु / Nil Sperm Count) — शास्त्रीय आयुर्वेदिक एवं यूनानी शुक्रजनन औषधियों द्वारा शुक्राणुओं की सक्रिय उत्पत्ति',
    },
    duration: {
      en: '5 Weeks Regimen (11 May 2025 to 16 June 2025)',
      hi: '5 सप्ताह का उपचार (11 मई 2025 से 16 जून 2025)',
    },
    consentRef: 'PK Pathology Lab (Amroha) | Ref By: Dr. Mobin | Patient Age: 26 Y / Male',
    notes: {
      en: 'Initial semen analysis on 11/05/2025 confirmed complete Azoospermia with TOTAL SPERM COUNT: NIL and zero motility. Following Dr. Mobin\'s targeted 5-week spermatogenic protocol (Shukra Dhatu nourishment, Shuddha Shilajit, Kaunch Beej, and pelvic micro-circulation restoration), repeat lab test on 16/06/2025 verified active sperm regeneration with 03% count and actively motile spermatozoa.',
      hi: '11/05/2025 की प्रारंभिक जांच में शुक्राणु संख्या पूरी तरह शून्य (NIL / Azoospermia) और गतिशीलता 0% थी। डॉ. मोबिन के 5 सप्ताह के आयुर्वेदिक-यूनानी शुक्रजनन उपचार के बाद 16/06/2025 को उसी लैब में शुक्राणुओं का बनना शुरू हुआ और 03% सक्रिय गतिशील शुक्राणु दर्ज किए गए।',
    },
    beforeLabel: { en: 'Before: 11 May 2025 (Count: NIL)', hi: 'उपचार पूर्व: 11 मई 2025 (शुक्राणु: शून्य / NIL)' },
    afterLabel: { en: 'After: 16 June 2025 (Active Motile Count)', hi: 'उपचार पश्चात: 16 जून 2025 (सक्रिय गतिशील)' },
    beforeImageKey: 'spermReportBefore',
    afterImageKey: 'spermReportAfter',
    beforeColor: 'from-slate-950/90 to-zinc-900/90',
    afterColor: 'from-emerald-950/90 to-teal-950/90',
    beforeDescription: {
      en: 'Microscopic Examination: TOTAL SPERM COUNT: NIL. Actively Motile: NIL. Sluggish Motile: NIL. Non-Motile: NIL. Pus cells: 2-4 / HPF.',
      hi: 'माइक्रोस्कोपिक जांच: कुल शुक्राणु संख्या: शून्य (NIL)। सक्रिय गतिशीलता: NIL। सुस्त गतिशीलता: NIL। मवाद कोशिकाएं: 2-4 / HPF।',
    },
    afterDescription: {
      en: 'Microscopic Examination: TOTAL SPERM COUNT: 03% emerging. Actively Motile: 01%. Non-Motile: 02%. Successful spermatogenesis ignition after Azoospermia.',
      hi: 'माइक्रोस्कोपिक जांच: कुल शुक्राणु संख्या: 03% नई उत्पत्ति। सक्रिय गतिशील: 01%। शून्य से सक्रिय शुक्राणु बनने की वास्तविक रिकवरी।',
    },
  },
];

interface BeforeAfterSliderProps {
  lang: Language;
  selectedCaseId?: string;
  onSelectCase?: (id: string) => void;
  showHairDetails?: boolean;
  onToggleHairDetails?: () => void;
  showSpermDetails?: boolean;
  onToggleSpermDetails?: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  lang,
  selectedCaseId,
  onSelectCase,
  showHairDetails = false,
  onToggleHairDetails,
  showSpermDetails = false,
  onToggleSpermDetails,
}) => {
  const { images } = useClinic();
  const [internalSelectedId, setInternalSelectedId] = useState<string>('case-hair-regrowth');
  const [sliderPos, setSliderPos] = useState(50); // percentage 0-100
  const [viewMode, setViewMode] = useState<'slider' | 'sideBySide'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const activeId = selectedCaseId || internalSelectedId;
  const activeCase = CASE_STUDIES.find((c) => c.id === activeId) || CASE_STUDIES[0];

  const handleCaseChange = (id: string) => {
    if (onSelectCase) {
      onSelectCase(id);
    } else {
      setInternalSelectedId(id);
    }
  };

  const beforeImageSrc = activeCase.beforeImageKey ? images[activeCase.beforeImageKey] : undefined;
  const afterImageSrc = activeCase.afterImageKey ? images[activeCase.afterImageKey] : undefined;

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const isHairCase = activeCase.category === 'hair';
  const isSpermCase = activeCase.category === 'sperm';

  return (
    <div className="space-y-6">
      {/* Case Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#3b4a40] pb-3">
        {CASE_STUDIES.map((study) => {
          const isSelected = study.id === activeCase.id;
          const isGuideOpen = study.category === 'hair' ? showHairDetails : showSpermDetails;
          return (
            <button
              key={study.id}
              onClick={() => handleCaseChange(study.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border text-left ${
                isSelected
                  ? 'bg-[#1b4332] text-white border-[#86efac] ring-2 ring-[#86efac]/25 shadow-sm'
                  : 'bg-[#222c26] text-[#b4c7bb] border-[#37473c] hover:bg-[#2b3830] hover:text-white'
              }`}
            >
              {study.category === 'hair' ? (
                <Sparkles className="w-3.5 h-3.5 text-[#86efac] shrink-0" />
              ) : (
                <Microscope className="w-3.5 h-3.5 text-[#60a5fa] shrink-0" />
              )}
              <span className="font-serif text-xs sm:text-sm">{study.title[lang]}</span>
              {isGuideOpen && isSelected && (
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#86efac] text-[#0f241a] font-bold">
                  {lang === 'en' ? 'Guide Open' : 'गाइड खुली है'}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Case Header & Interactive Mode Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-mono text-[#86efac] bg-[#162e21] px-2.5 py-1 rounded-md border border-[#2d5c41]">
              <ShieldCheck className="w-3 h-3" />
              <span>{activeCase.consentRef}</span>
            </span>
            <span className="text-xs text-[#95a89d] font-mono">
              {lang === 'en' ? 'Observation Period:' : 'उपचार अवधि:'} {activeCase.duration[lang]}
            </span>
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
            {activeCase.condition[lang]}
          </h3>
        </div>

        {/* View Mode Toggle (Slider vs Side by Side) */}
        <div className="inline-flex items-center p-0.5 rounded-lg bg-[#27302b] border border-[#3b4a40] text-xs font-medium self-start sm:self-auto shrink-0">
          <button
            onClick={() => setViewMode('slider')}
            className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
              viewMode === 'slider' ? 'bg-[#1b4332] text-white shadow-xs font-bold' : 'text-[#95a89d]'
            }`}
          >
            <span>{lang === 'en' ? 'Interactive Slider' : 'स्लाइडर तुलना'}</span>
          </button>
          <button
            onClick={() => setViewMode('sideBySide')}
            className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
              viewMode === 'sideBySide' ? 'bg-[#1b4332] text-white shadow-xs font-bold' : 'text-[#95a89d]'
            }`}
          >
            <SplitSquareVertical className="w-3 h-3" />
            <span>{lang === 'en' ? 'Side-by-Side' : 'आमने-सामने'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Visual Comparison Container */}
      <div className="space-y-3">
        {viewMode === 'slider' ? (
          /* View Mode: Interactive Slider */
          <div className="space-y-2">
            <div
              ref={containerRef}
              onMouseDown={handleMouseMove}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden bg-black select-none cursor-ew-resize border border-[#3b4a40] shadow-xl"
            >
              {/* After View (Full Background) */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {afterImageSrc ? (
                  <img
                    src={afterImageSrc}
                    alt={activeCase.afterLabel[lang]}
                    className="absolute inset-0 w-full h-full object-contain sm:object-cover object-center bg-black/95"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${activeCase.afterColor}`} />
                )}

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                <div className="relative z-10 p-4 flex justify-end">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14532d]/90 backdrop-blur-xs text-white text-xs font-bold tracking-wide shadow-md border border-[#4ade80]/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#86efac]" />
                    <span>{activeCase.afterLabel[lang]}</span>
                  </span>
                </div>

                <div className="relative z-10 p-4 sm:p-5 max-w-sm ml-auto text-right">
                  <p className="text-xs text-[#e1efe8] leading-relaxed drop-shadow-md">
                    {activeCase.afterDescription[lang]}
                  </p>
                </div>
              </div>

              {/* Before View (Clipped Layer) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-2xl"
                style={{ width: `${sliderPos}%` }}
              >
                <div
                  className="relative h-full flex flex-col justify-between"
                  style={{ width: containerRef.current?.clientWidth || '100%' }}
                >
                  {beforeImageSrc ? (
                    <img
                      src={beforeImageSrc}
                      alt={activeCase.beforeLabel[lang]}
                      className="absolute inset-0 w-full h-full object-contain sm:object-cover object-center bg-black/95"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${activeCase.beforeColor}`} />
                  )}

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  <div className="relative z-10 p-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#991b1b]/90 backdrop-blur-xs text-white text-xs font-bold tracking-wide shadow-md border border-[#f87171]/30">
                      <span>{activeCase.beforeLabel[lang]}</span>
                    </span>
                  </div>

                  <div className="relative z-10 p-4 sm:p-5 max-w-sm">
                    <p className="text-xs text-[#fed7aa] leading-relaxed drop-shadow-md">
                      {activeCase.beforeDescription[lang]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Slider Divider Line & Knob */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-[#19201c] font-bold text-sm flex items-center justify-center shadow-xl border-2 border-[#166534]">
                  ⇄
                </div>
              </div>
            </div>

            {/* Slider Guidance Bar */}
            <div className="flex items-center justify-between text-xs text-[#95a89d] px-1">
              <div className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#25d366]" />
                <span>
                  {lang === 'en'
                    ? 'Drag or click the white divider slider to compare Before vs After.'
                    : 'पहले और बाद की तुलना देखने के लिए बीच के स्लाइडर को बाएँ-दाएँ खींचें।'}
                </span>
              </div>
              <span className="text-[11px] text-[#86efac] font-mono font-semibold">
                {Math.round(sliderPos)}% {lang === 'en' ? 'view' : 'तुलना'}
              </span>
            </div>
          </div>
        ) : (
          /* View Mode: Side-by-Side Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Before Photo Box */}
            <div className="rounded-xl overflow-hidden border border-[#522b2b] bg-[#1a1414] flex flex-col">
              <div className="p-3 bg-[#3d1818] text-white flex items-center justify-between border-b border-[#522b2b]">
                <span className="text-xs font-bold text-[#fca5a5]">
                  {activeCase.beforeLabel[lang]}
                </span>
                <span className="text-[10px] text-[#fca5a5]/70 uppercase font-mono">Day 1</span>
              </div>
              <div className="relative aspect-4/3 sm:aspect-square bg-black">
                {beforeImageSrc ? (
                  <img
                    src={beforeImageSrc}
                    alt={activeCase.beforeLabel[lang]}
                    className="w-full h-full object-contain object-center bg-black"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${activeCase.beforeColor}`} />
                )}
              </div>
              <div className="p-3.5 text-xs text-[#fecaca] leading-relaxed bg-[#201616]">
                {activeCase.beforeDescription[lang]}
              </div>
            </div>

            {/* After Photo Box */}
            <div className="rounded-xl overflow-hidden border border-[#234e35] bg-[#121c16] flex flex-col">
              <div className="p-3 bg-[#1b4332] text-white flex items-center justify-between border-b border-[#234e35]">
                <span className="text-xs font-bold text-[#86efac] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {activeCase.afterLabel[lang]}
                </span>
                <span className="text-[10px] text-[#86efac]/80 uppercase font-mono font-semibold">
                  {activeCase.duration[lang]}
                </span>
              </div>
              <div className="relative aspect-4/3 sm:aspect-square bg-black">
                {afterImageSrc ? (
                  <img
                    src={afterImageSrc}
                    alt={activeCase.afterLabel[lang]}
                    className="w-full h-full object-contain object-center bg-black"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${activeCase.afterColor}`} />
                )}
              </div>
              <div className="p-3.5 text-xs text-[#d1fae5] leading-relaxed bg-[#16231b]">
                {activeCase.afterDescription[lang]}
              </div>
            </div>
          </div>
        )}

        {/* Clinical Observation Notes */}
        <div className="p-4 rounded-xl bg-[#212b25] border border-[#2e3b33] text-xs text-[#b8c9c0] space-y-1.5">
          <div className="flex items-center gap-1.5 text-[#86efac] font-bold text-xs">
            <Sparkles className="w-4 h-4" />
            <span>
              {lang === 'en' ? 'Clinical Outcome Summary:' : 'नैदानिक परिणाम सारांश:'}
            </span>
          </div>
          <p className="leading-relaxed text-[#dbe6df]">{activeCase.notes[lang]}</p>
        </div>

        {/* Dedicated Guide Toggle for Hair Case */}
        {isHairCase && onToggleHairDetails && (
          <div className="pt-2">
            <button
              onClick={onToggleHairDetails}
              className={`w-full p-3.5 rounded-xl border flex items-center justify-between gap-3 text-left transition-all ${
                showHairDetails
                  ? 'bg-[#14281e] border-[#86efac] text-[#86efac]'
                  : 'bg-[#223027] border-[#36493c] text-white hover:bg-[#2a3c31]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#86efac] shrink-0" />
                <div>
                  <span className="text-xs sm:text-sm font-bold block">
                    {showHairDetails
                      ? (lang === 'en' ? 'Hide Hair Fall Diseases & Pathology Details ▲' : 'बाल झड़ने के रोग व कारण विवरण छुपाएं ▲')
                      : (lang === 'en' ? 'Click to Read Hair Fall Diseases & Root Causes Guide ▼' : 'बाल झड़ने के 5 मुख्य रोग, कारण व उपचार की विस्तृत जानकारी पढ़ें ▼')}
                  </span>
                  <span className="text-[11px] text-[#9bb3a6]">
                    {showHairDetails
                      ? (lang === 'en' ? 'Click to collapse this guide' : 'गाइड बंद करने के लिए क्लिक करें')
                      : (lang === 'en' ? 'Alopecia, Telogen Effluvium, Seborrheic & Scalp Hijama Mechanism' : 'खालित्य, इंद्रलुप्त, रूसी, एवं स्कैल्प हिजामा के विज्ञान का विवरण')}
                  </span>
                </div>
              </div>
              <div className="p-1.5 rounded-lg bg-black/30 shrink-0">
                {showHairDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>
          </div>
        )}

        {/* Dedicated Guide Toggle for Sperm Health Case */}
        {isSpermCase && onToggleSpermDetails && (
          <div className="pt-2">
            <button
              onClick={onToggleSpermDetails}
              className={`w-full p-3.5 rounded-xl border flex items-center justify-between gap-3 text-left transition-all ${
                showSpermDetails
                  ? 'bg-[#14281e] border-[#60a5fa] text-[#93c5fd]'
                  : 'bg-[#223027] border-[#36493c] text-white hover:bg-[#2a3c31]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#60a5fa] shrink-0" />
                <div>
                  <span className="text-xs sm:text-sm font-bold block">
                    {showSpermDetails
                      ? (lang === 'en' ? 'Hide Semen Analysis & Azoospermia Guide ▲' : 'वीर्य जांच व एज़ूस्पर्मिया गाइड विवरण छुपाएं ▲')
                      : (lang === 'en' ? 'Click to Read Semen Analysis, Azoospermia & Sperm Recovery Guide ▼' : 'वीर्य जांच, शून्य शुक्राणु (Azoospermia) व प्राकृतिक सुधार गाइड पढ़ें ▼')}
                  </span>
                  <span className="text-[11px] text-[#9bb3a6]">
                    {showSpermDetails
                      ? (lang === 'en' ? 'Click to collapse this guide' : 'गाइड बंद करने के लिए क्लिक करें')
                      : (lang === 'en' ? 'WHO standards, Azoospermia, Oligospermia, Shukra Dhatu & Hijama Science' : 'डब्ल्यूएचओ मानक, एज़ूस्पर्मिया, अल्पशुक्राणुता, मवाद कोशिकाएं व शुक्रजनन चिकित्सा')}
                  </span>
                </div>
              </div>
              <div className="p-1.5 rounded-lg bg-black/30 shrink-0">
                {showSpermDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
