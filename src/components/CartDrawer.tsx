import React from 'react';
import { X, Plus, Minus, Trash2, MessageCircle, Package, ShieldCheck } from 'lucide-react';
import { CartItem, Language } from '../types';
import { useClinic } from '../context/ClinicContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  lang: Language;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  lang,
}) => {
  const { clinicInfo } = useClinic();
  if (!isOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalMrp = cart.reduce((sum, item) => sum + item.product.mrp * item.quantity, 0);
  const totalSavings = totalMrp - totalAmount;

  // Generate WhatsApp Order Message
  const composeWhatsAppOrder = () => {
    const header =
      lang === 'en'
        ? `*New Herbal Order Request — ${clinicInfo.name.en}*\n${clinicInfo.doctorName.en} (${clinicInfo.phoneDisplay})\n--------------------------------`
        : `*नया औषधीय ऑर्डर अनुरोध — ${clinicInfo.name.hi}*\n${clinicInfo.doctorName.hi} (${clinicInfo.phoneDisplay})\n--------------------------------`;

    const itemsText = cart
      .map(
        (item, i) =>
          `${i + 1}. ${item.product.name[lang]} (${item.product.packSize[lang]})\n   Qty: ${item.quantity} × ₹${item.product.price} = ₹${
            item.quantity * item.product.price
          }`
      )
      .join('\n\n');

    const footer =
      lang === 'en'
        ? `--------------------------------\n*Estimated Item Total:* ₹${totalAmount}\n*(Delivery charges to be confirmed by clinic)*\n\n*My Delivery Address:*\nName:\nAddress:\nPIN Code:\nPhone:\n\n*Note:* Please confirm availability & plain packaging.`
        : `--------------------------------\n*अनुमानित कुल राशि:* ₹${totalAmount}\n*(डिलीवरी शुल्क क्लिनिक द्वारा बताया जाएगा)*\n\n*मेरा डिलीवरी पता:*\nनाम:\nपता:\nपिन कोड:\nफ़ोन:\n\n*नोट:* कृपया उपलब्धता और सादी पैकेजिंग की पुष्टि करें।`;

    const fullMessage = `${header}\n\n${itemsText}\n\n${footer}`;
    return `https://wa.me/${clinicInfo.whatsapp}?text=${encodeURIComponent(fullMessage)}`;
  };


  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fcfaf7] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#e2d8c4] bg-[#f5ede0] flex items-center justify-between">
            <div>
              <h2 className="font-serif text-lg font-bold text-[#1f382b]">
                {lang === 'en' ? 'Your Order Cart' : 'आपका ऑर्डर कार्ट'}
              </h2>
              <p className="text-xs text-[#6e6457]">
                {cart.length === 0
                  ? lang === 'en'
                    ? '0 items added'
                    : 'कोई उत्पाद नहीं जोड़ा गया'
                  : lang === 'en'
                  ? `${cart.length} distinct item(s)`
                  : `${cart.length} प्रकार की औषधियाँ`}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#554d42] hover:bg-[#e4d7c0] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="p-4 rounded-full bg-[#eee5d3] text-[#786c5c]">
                  <Package className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-base font-semibold text-[#2c2620]">
                  {lang === 'en' ? 'Your cart is empty' : 'आपका कार्ट खाली है'}
                </h3>
                <p className="text-xs text-[#736858] max-w-xs leading-relaxed">
                  {lang === 'en'
                    ? 'Explore supportive preparations prescribed at M.S Ayurvedic Centre and add them here.'
                    : 'एम.एस आयुर्वेदिक सेंटर में उपलब्ध शास्त्रीय औषधियों को देखें और यहाँ जोड़ें।'}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3.5 rounded-lg bg-white border border-[#e5dcce] shadow-xs flex flex-col gap-2.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-medium text-sm text-[#1e3427] leading-snug">
                          {item.product.name[lang]}
                        </h4>
                        <p className="text-xs text-[#696155] mt-0.5">
                          {item.product.packSize[lang]}
                        </p>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[#968977] hover:text-[#b93826] p-1 transition-colors"
                        title={lang === 'en' ? 'Remove item' : 'हटाएँ'}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-[#f2ece2]">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-sm text-[#1f382b]">
                          ₹{item.product.price * item.quantity}
                        </span>
                        {item.product.mrp > item.product.price && (
                          <span className="text-xs text-[#8f8576] line-through">
                            ₹{item.product.mrp * item.quantity}
                          </span>
                        )}
                      </div>

                      {/* Quantity buttons */}
                      <div className="inline-flex items-center rounded-md border border-[#d6cbba] bg-[#faf7f2]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="p-1 px-2 text-[#4f483f] hover:bg-[#eae1d0] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-[#24201b] min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="p-1 px-2 text-[#4f483f] hover:bg-[#eae1d0] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={onClearCart}
                  className="text-xs text-[#8a7f70] hover:text-[#b93826] underline transition-colors pt-2 block text-right w-full"
                >
                  {lang === 'en' ? 'Clear entire cart' : 'पूरा कार्ट खाली करें'}
                </button>
              </div>
            )}
          </div>

          {/* Footer with totals & WhatsApp CTA */}
          {cart.length > 0 && (
            <div className="p-4 border-t border-[#e2d8c4] bg-[#f7f2e7] space-y-3">
              <div className="space-y-1.5 text-xs text-[#524b41]">
                <div className="flex justify-between">
                  <span>{lang === 'en' ? 'Subtotal (Items):' : 'कुल उत्पाद मूल्य:'}</span>
                  <span className="font-semibold text-sm text-[#1f382b]">₹{totalAmount}</span>
                </div>
                {totalSavings > 0 && (
                  <div className="flex justify-between text-[#286646]">
                    <span>{lang === 'en' ? 'Direct clinic discount:' : 'क्लिनिक विशेष छूट:'}</span>
                    <span>-₹{totalSavings}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#7d7364]">
                  <span>{lang === 'en' ? 'Delivery charges:' : 'डिलीवरी शुल्क:'}</span>
                  <span>{lang === 'en' ? 'Calculated on WhatsApp' : 'व्हाट्सएप पर तय होगा'}</span>
                </div>
              </div>

              {/* Assurances */}
              <div className="p-2.5 rounded-md bg-[#eae1cf] text-[11px] text-[#4f473c] space-y-1">
                <div className="flex items-center gap-1.5 font-medium text-[#244233]">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>{lang === 'en' ? 'Plain & Discreet Packaging' : 'सादी एवं गोपनीय पैकिंग'}</span>
                </div>
                <p className="text-[10px] text-[#695f50]">
                  {lang === 'en'
                    ? 'Orders are dispatched in non-transparent boxes with no clinic name or medical labels outside.'
                    : 'पार्सल सादे डिब्बों में भेजे जाते हैं, बाहर क्लिनिक का नाम या कोई बीमारी नहीं लिखी होती।'}
                </p>
              </div>

              {/* Main CTA */}
              <a
                href={composeWhatsAppOrder()}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white py-3 px-4 rounded-lg font-semibold text-sm shadow-md transition-transform active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{lang === 'en' ? 'Send Order on WhatsApp' : 'व्हाट्सएप पर ऑर्डर भेजें'}</span>
              </a>

              <p className="text-[10px] text-center text-[#7e7465]">
                {lang === 'en'
                  ? 'Dr. Mobin or staff will confirm availability, delivery address, and total before any payment.'
                  : 'भुगतान से पहले डॉ. मोबिन या स्टाफ द्वारा उपलब्धता और कुल राशि की पुष्टि की जाएगी।'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
