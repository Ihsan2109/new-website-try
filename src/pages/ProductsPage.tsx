import React, { useState } from 'react';
import {
  ShoppingBag,
  Plus,
  Check,
  AlertTriangle,
  MessageCircle,
  Package,
  ShieldCheck,
  Tag,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Language, PageId, Product } from '../types';
import { PRODUCTS_DATA } from '../data/content';
import { useClinic } from '../context/ClinicContext';

interface ProductsPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onAddToCart: (product: Product) => void;
  onOpenCart: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  lang,
  onNavigate,
  onAddToCart,
  onOpenCart,
}) => {
  const { images, clinicInfo } = useClinic();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [addedNoticeId, setAddedNoticeId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: { en: 'All Preparations', hi: 'सभी औषधियाँ' } },
    { id: 'anorectal', label: { en: 'Anorectal & Piles', hi: 'बवासीर व गुदा रोग' } },
    { id: 'digestive', label: { en: 'Digestive & Bowel', hi: 'पाचन व आंत स्वास्थ्य' } },
    { id: 'vitality', label: { en: 'Vitality & Stamina', hi: 'ऊर्जा व पौरुष स्वास्थ्य' } },
    { id: 'general', label: { en: 'General Immunity', hi: 'रोग प्रतिरोधक क्षमता' } },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === selectedCategory);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedNoticeId(product.id);
    setTimeout(() => {
      setAddedNoticeId(null);
    }, 2000);
  };

  return (
    <div className="space-y-16 pb-12">
      {/* Hero with Visual Dispensary Banner */}
      <section className="bg-gradient-to-b from-[#f5ede0] via-[#f9f5ee] to-[#fcfaf7] border-b border-[#e5dcce] pt-10 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8deca] text-[#2b4d3a] text-xs font-semibold uppercase tracking-wider">
                <span>{lang === 'en' ? 'From the Clinic' : 'क्लिनिक से'}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1a3325] tracking-tight">
                {lang === 'en' ? 'Classical Preparations' : 'शास्त्रीय औषधियाँ एवं उत्पाद'}
              </h1>

              <p className="text-base sm:text-lg text-[#4a4237] leading-relaxed max-w-2xl">
                {lang === 'en'
                  ? 'Supportive preparations kept at the clinic. What suits one person may not suit another, so ask before ordering if you are unsure, and tell us about any medicine you are already taking.'
                  : 'क्लिनिक में रखी जाने वाली सहायक तैयारियाँ। जो एक व्यक्ति के लिए उपयुक्त है वह दूसरे के लिए न भी हो, इसलिए संदेह हो तो ऑर्डर करने से पहले पूछें, और पहले से चल रही किसी भी दवा के बारे में हमें बताएँ।'}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-3 border-white shadow-lg relative aspect-[16/10] bg-[#1a2d21] group">
                <img
                  src={images.herbalDispensary}
                  alt="In-house Ayurvedic & Unani Dispensary"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-white font-serif font-bold text-sm">
                    {lang === 'en' ? 'In-House Classical Pharmacy' : 'क्लिनिक का शास्त्रीय औषधालय'}
                  </span>
                  <p className="text-[11px] text-[#cfc2b0]">
                    {lang === 'en'
                      ? 'Pure herbs, medicated oils & authenticated extracts.'
                      : 'शुद्ध जड़ी-बूटियाँ, औषधीय तैल और प्रमाणित अर्क।'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Caution Note */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="p-4 sm:p-5 rounded-xl bg-[#fff9ee] border border-[#ecd5a5] text-xs text-[#6e4e13] flex items-start gap-3.5 leading-relaxed">
          <AlertTriangle className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block mb-0.5 text-sm text-[#4b3307]">
              {lang === 'en' ? 'Mandatory Medical Caution:' : 'आवश्यक चिकित्सकीय परामर्श:'}
            </strong>
            {lang === 'en'
              ? 'Nothing here is a substitute for being examined. Do not begin a preparation for a condition that has not been assessed, do not take it alongside prescribed medicine without telling the doctor, and do not use it during pregnancy or while breastfeeding without asking first.'
              : 'यहाँ कुछ भी व्यक्तिगत जाँच का विकल्प नहीं है। बिना जाँच कराए किसी समस्या के लिए कोई औषधि शुरू न करें, चल रही दवाओं के साथ डॉक्टर को बताए बिना न लें, और गर्भावस्था या स्तनपान के दौरान बिना पूछे उपयोग न करें।'}
          </div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5dcce] pb-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#244533] text-white shadow-xs'
                    : 'bg-[#ede5d4] text-[#4f473c] hover:bg-[#e0d6c0]'
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenCart}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#faf4e6] border border-[#ded3be] text-xs font-semibold text-[#1e3427] hover:bg-[#f0e7d3] transition-colors"
          >
            <ShoppingBag className="w-4 h-4 text-[#244533]" />
            <span>{lang === 'en' ? 'View Cart' : 'कार्ट देखें'}</span>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => {
            const productImg = prod.imageKey && images[prod.imageKey] ? images[prod.imageKey] : images.herbalPreparations;
            return (
              <div
                key={prod.id}
                className="rounded-2xl bg-white border border-[#ded3be] shadow-xs flex flex-col justify-between overflow-hidden hover:border-[#2b513f] hover:shadow-md transition-all group"
              >
                {/* Product Visual Header */}
                <div className="relative h-44 overflow-hidden bg-[#1f372a]">
                  <img
                    src={productImg}
                    alt={prod.name[lang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#244533]/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20 shadow-xs">
                      {prod.categoryLabel[lang]}
                    </span>
                    <span className="text-xs font-semibold text-white bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-md">
                      {prod.packSize[lang]}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-3 right-3">
                    <span className="text-white font-serif font-bold text-base drop-shadow-sm block line-clamp-1">
                      {prod.name[lang]}
                    </span>
                  </div>
                </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-xs text-[#544c41] leading-relaxed">
                    {prod.description[lang]}
                  </p>

                  {/* Key Indications */}
                  <div className="space-y-1.5 pt-2 border-t border-[#f2ece2]">
                    <span className="text-[11px] font-semibold text-[#305942] uppercase tracking-wider block">
                      {lang === 'en' ? 'Common Indications:' : 'प्रमुख उपयोग:'}
                    </span>
                    <ul className="text-xs text-[#453e34] space-y-1">
                      {prod.indications[lang].map((ind, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#2b513f] font-bold">•</span>
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dosage Note */}
                  <div className="text-[11px] text-[#706454] bg-[#faf6ee] p-2.5 rounded-md border border-[#eee4d4]">
                    <strong className="text-[#3a3328] block">
                      {lang === 'en' ? 'Directions:' : 'सेवन विधि:'}
                    </strong>
                    {prod.dosageNote[lang]}
                  </div>
                </div>

                {/* Price and Cart Buttons */}
                <div className="pt-4 border-t border-[#eee5d6] space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-xl font-bold text-[#1a3325]">
                        ₹{prod.price}
                      </span>
                      {prod.mrp > prod.price && (
                        <span className="text-xs text-[#8c8273] line-through">
                          MRP ₹{prod.mrp}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-semibold text-[#257348]">
                      {lang === 'en' ? 'In stock' : 'उपलब्ध'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAdd(prod)}
                      className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                        addedNoticeId === prod.id
                          ? 'bg-[#1b4332] text-white'
                          : 'bg-[#284838] hover:bg-[#1a3325] text-white shadow-xs'
                      }`}
                    >
                      {addedNoticeId === prod.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'Added!' : 'जोड़ा गया!'}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'Add to cart' : 'कार्ट में डालें'}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
                        lang === 'en'
                          ? `Hello Dr. Mobin, I would like to ask about "${prod.name.en}".`
                          : `नमस्ते डॉ. मोबिन, मैं "${prod.name.hi}" के बारे में पूछना चाहता हूँ।`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg text-xs font-medium border border-[#2b513f] text-[#244533] hover:bg-[#244533] hover:text-white transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'Ask' : 'पूछें'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </section>

      {/* How Ordering Works (Dark Band with 4 Assurances) */}
      <section className="bg-[#1f2621] text-[#f2ece2] py-14 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#97c7ad]">
              {lang === 'en' ? 'Discreet Delivery & In-Person Pickup' : 'गोपनीय पार्सल एवं क्लिनिक से प्राप्ति'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {lang === 'en' ? 'How ordering works' : 'ऑर्डर कैसे काम करता है'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-xl bg-[#28322c] border border-[#39483f] space-y-2">
              <h3 className="font-serif text-base font-bold text-white">
                {lang === 'en' ? 'Add, then send' : 'जोड़ें, फिर भेजें'}
              </h3>
              <p className="text-xs text-[#c4b9aa] leading-relaxed">
                {lang === 'en'
                  ? 'Put what you need in the cart and send the order on WhatsApp. The item list, quantities and total go across in one clear message.'
                  : 'जो चाहिए उसे कार्ट में डालें और व्हाट्सएप पर ऑर्डर भेजें। सूची, मात्रा और कुल राशि एक ही संदेश में चली जाती है।'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#28322c] border border-[#39483f] space-y-2">
              <h3 className="font-serif text-base font-bold text-white">
                {lang === 'en' ? 'Total confirmed first' : 'पहले कुल राशि तय होगी'}
              </h3>
              <p className="text-xs text-[#c4b9aa] leading-relaxed">
                {lang === 'en'
                  ? 'Stock and delivery charge are confirmed in reply before you pay anything. Prices on this page do not include delivery.'
                  : 'भुगतान से पहले उपलब्धता और डिलीवरी शुल्क जवाब में बता दिया जाता है। इस पृष्ठ की क़ीमतों में डिलीवरी शामिल नहीं है।'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#28322c] border border-[#39483f] space-y-2">
              <h3 className="font-serif text-base font-bold text-white">
                {lang === 'en' ? 'Plain packaging' : 'सादी व गोपनीय पैकिंग'}
              </h3>
              <p className="text-xs text-[#c4b9aa] leading-relaxed">
                {lang === 'en'
                  ? 'Orders are sent in plain non-descript packing with nothing on the outside that says what is inside or which clinic it came from.'
                  : 'ऑर्डर सादी पैकिंग में भेजे जाते हैं, बाहर कुछ भी ऐसा नहीं होता जो बताए कि अंदर क्या है या किस क्लिनिक से आया है।'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#28322c] border border-[#39483f] space-y-2">
              <h3 className="font-serif text-base font-bold text-white">
                {lang === 'en' ? 'Collect at the clinic' : 'क्लिनिक से स्वयं लें'}
              </h3>
              <p className="text-xs text-[#c4b9aa] leading-relaxed">
                {lang === 'en'
                  ? 'You can also collect an order in person during consultation hours (10 am – 8 pm) instead of having it delivered.'
                  : 'आप चाहें तो डिलीवरी के बजाय परामर्श के समय (सुबह 10:00 से रात 8:00) क्लिनिक से स्वयं भी ले सकते हैं।'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Not Sure What You Need CTA */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#faf6ee] border border-[#e2d8c7] text-center space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#1e3427]">
            {lang === 'en' ? 'Not sure what you need?' : 'समझ नहीं आ रहा कि क्या चाहिए?'}
          </h2>
          <p className="text-xs sm:text-sm text-[#5c5447] max-w-xl mx-auto leading-relaxed">
            {lang === 'en'
              ? 'Describe the problem and it will be answered directly, without pushing anything on you.'
              : 'समस्या बताइए, उसका सीधा जवाब दिया जाएगा, आप पर कुछ थोपा नहीं जाएगा।'}
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(
                lang === 'en'
                  ? 'Hello Dr. Mobin, I need advice on which preparation is right for my condition.'
                  : 'नमस्ते डॉ. मोबिन, मुझे अपनी समस्या के लिए सही दवा के बारे में सलाह चाहिए।'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-xs hover:bg-[#1ebd59] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{lang === 'en' ? 'Ask on WhatsApp' : 'व्हाट्सएप पर पूछें'}</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-[#244533] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#1a3325] transition-colors"
            >
              <span>{lang === 'en' ? 'Request an appointment' : 'अपॉइंटमेंट के लिए अनुरोध करें'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
