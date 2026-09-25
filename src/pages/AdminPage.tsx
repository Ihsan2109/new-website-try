import React, { useState, useRef, useEffect } from 'react';
import {
  Image as ImageIcon,
  Link as LinkIcon,
  Upload,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Eye,
  ArrowLeft,
  Copy,
  Lock,
  Unlock,
  ShieldCheck,
  Check,
  LogOut,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { useClinic, IMAGE_METADATA_LIST } from '../context/ClinicContext';

const ADMIN_PASSWORD = 'ihsan2109';
const AUTH_STORAGE_KEY = 'ms_clinic_admin_auth_v1';

interface AdminPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ lang, onNavigate }) => {
  const {
    images,
    updateImage,
    resetImageToDefault,
    resetAllImagesToDefault,
    lastSavedAt,
  } = useClinic();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Image Editor State
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [testedUrls, setTestedUrls] = useState<Record<string, 'loading' | 'valid' | 'invalid'>>({});
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError(false);
      try {
        sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
      } catch (err) {
        console.error('Session storage not available', err);
      }
      showNotification(
        lang === 'en'
          ? 'Authenticated successfully! You can now update clinic images.'
          : 'प्रमाणीकरण सफल! अब आप क्लिनिक की तस्वीरें बदल सकते हैं।'
      );
    } else {
      setPasswordError(true);
      showNotification(
        lang === 'en' ? 'Incorrect password. Please enter the valid security key.' : 'गलत पासवर्ड। कृपया सही सुरक्षा पासवर्ड दर्ज करें।',
        'error'
      );
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasswordInput('');
    try {
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
    } catch (err) {
      console.error(err);
    }
    showNotification(lang === 'en' ? 'Logged out of Admin.' : 'एडमिन से लॉग आउट किया गया।');
  };

  // Convert uploaded image file into a Data URL (which acts as a persistent web link)
  const handleFileUpload = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showNotification(
        lang === 'en' ? 'Please select a valid image file.' : 'कृपया केवल वैध इमेज फ़ाइल चुनें।',
        'error'
      );
      return;
    }

    if (file.size > 3.5 * 1024 * 1024) {
      showNotification(
        lang === 'en'
          ? 'Image is larger than 3.5MB. Please compress it or use an external web URL.'
          : 'इमेज 3.5MB से बड़ी है। कृपया इसे कंप्रेस करें या वेब लिंक का उपयोग करें।',
        'error'
      );
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      updateImage(key, dataUrl);
      setTestedUrls((prev) => ({ ...prev, [key]: 'valid' }));
      showNotification(
        lang === 'en'
          ? `Image uploaded & converted to web link for ${key}!`
          : `इमेज अपलोड होकर लिंक में बदल गई (${key})!`
      );
    };
    reader.onerror = () => {
      showNotification(lang === 'en' ? 'Error reading image file' : 'फ़ाइल पढ़ने में त्रुटि', 'error');
    };
    reader.readAsDataURL(file);
  };

  const handleTestImageUrl = (key: string, url: string) => {
    if (!url) return;
    setTestedUrls((prev) => ({ ...prev, [key]: 'loading' }));
    const img = new window.Image();
    img.onload = () => {
      setTestedUrls((prev) => ({ ...prev, [key]: 'valid' }));
      showNotification(lang === 'en' ? 'Image URL loaded successfully!' : 'इमेज वेब लिंक सफलतापूर्वक लोड हुआ!');
    };
    img.onerror = () => {
      setTestedUrls((prev) => ({ ...prev, [key]: 'invalid' }));
      showNotification(
        lang === 'en'
          ? 'Could not load image from this URL. Please verify the link format.'
          : 'इस लिंक से इमेज लोड नहीं हो सकी। लिंक की जाँच करें।',
        'error'
      );
    };
    img.src = url;
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
    showNotification(lang === 'en' ? 'Copied to clipboard!' : 'क्लिपबोर्ड पर कॉपी किया गया!');
  };

  // If not authenticated, render Password Security Gateway
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#f7f4ed] flex items-center justify-center p-4 sm:p-6 text-[#2d2822]">
        <div className="w-full max-w-md bg-white rounded-2xl border border-[#ded3be] shadow-xl p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-3">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#1e3a2c] text-[#86efac] flex items-center justify-center shadow-md">
              <Lock className="w-7 h-7" />
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#166534] bg-[#dcfce7] px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                {lang === 'en' ? 'Restricted Access' : 'सुरक्षित एडमिन'}
              </span>
              <h1 className="font-serif text-2xl font-bold text-[#1a3325]">
                {lang === 'en' ? 'Admin Verification' : 'एडमिन प्रमाणीकरण'}
              </h1>
              <p className="text-xs text-[#6e6354] mt-1 leading-relaxed">
                {lang === 'en'
                  ? 'Enter the security password to edit and manage clinic imagery and photography.'
                  : 'क्लिनिक की फ़ोटो एवं इमेज बदलने के लिए कृपया सुरक्षा पासवर्ड दर्ज करें।'}
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#2d271f]">
                {lang === 'en' ? 'Security Password:' : 'सुरक्षा पासवर्ड:'}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    if (passwordError) setPasswordError(false);
                  }}
                  autoFocus
                  placeholder={lang === 'en' ? 'Enter password...' : 'पासवर्ड दर्ज करें...'}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-[#faf8f4] text-[#1c3325] focus:outline-hidden focus:ring-2 transition-all ${
                    passwordError
                      ? 'border-red-500 focus:ring-red-500/30'
                      : 'border-[#c4b7a1] focus:ring-[#2b513f]/40'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#706453] hover:text-[#1c3325] font-medium"
                >
                  {showPassword ? (lang === 'en' ? 'Hide' : 'छिपाएं') : (lang === 'en' ? 'Show' : 'देखें')}
                </button>
              </div>

              {passwordError && (
                <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{lang === 'en' ? 'Incorrect password. Access denied.' : 'गलत पासवर्ड। प्रवेश अस्वीकृत।'}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#234331] hover:bg-[#1a3325] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              <Unlock className="w-4 h-4" />
              <span>{lang === 'en' ? 'Unlock Image Editor' : 'इमेज एडिटर अनलॉक करें'}</span>
            </button>
          </form>

          <div className="pt-2 border-t border-[#eee5d8] flex items-center justify-between">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1.5 text-xs text-[#5a4e3f] hover:text-[#1e3427] font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Back to Clinic Website' : 'क्लिनिक वेबसाइट पर वापस जाएं'}</span>
            </button>

            <span className="text-[11px] text-[#8c7e6c] flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#22c55e]" />
              <span>{lang === 'en' ? 'Protected Session' : 'सुरक्षित सत्र'}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated: Render ONLY the Images Edit Option
  return (
    <div className="min-h-screen bg-[#f7f4ed] pb-24 text-[#2d2822]">
      {/* Top Navigation Bar */}
      <div className="bg-[#1c3628] text-white border-b border-[#2d4d3c] sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="p-2 rounded-lg bg-[#274635] hover:bg-[#325844] text-[#cfdec4] transition-colors inline-flex items-center gap-1.5 text-xs font-semibold"
              title="Return to public site"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{lang === 'en' ? 'Back to Site' : 'वेबसाइट पर वापस'}</span>
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-[#dcfce7] text-[#166534] text-[11px] font-bold uppercase tracking-wider">
                  {lang === 'en' ? 'Images Admin' : 'इमेज एडमिन'}
                </span>
                {lastSavedAt && (
                  <span className="text-[11px] text-[#a4c2b0] flex items-center gap-1">
                    <Check className="w-3 h-3 text-[#86efac]" />
                    <span>{lang === 'en' ? `Auto-saved at ${lastSavedAt}` : `सहेजा गया: ${lastSavedAt}`}</span>
                  </span>
                )}
              </div>
              <h1 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                {lang === 'en'
                  ? 'Clinic Images & Photography Editor'
                  : 'क्लिनिक इमेज एवं फ़ोटो संपादक'}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#2f5540] hover:bg-[#3c6b52] text-xs font-semibold text-white transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Live Preview' : 'लाइव प्रिव्यू'}</span>
            </button>

            <button
              onClick={() => {
                if (
                  window.confirm(
                    lang === 'en'
                      ? 'Reset all images to the original default clinic photos?'
                      : 'क्या आप सभी तस्वीरों को मूल डिफ़ॉल्ट पर वापस लाना चाहते हैं?'
                  )
                ) {
                  resetAllImagesToDefault();
                  showNotification(
                    lang === 'en' ? 'All images reset to original defaults!' : 'सभी तस्वीरें मूल स्थिति में रीसेट हो गईं!'
                  );
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-200 border border-red-800/50 text-xs font-medium transition-colors"
              title="Reset all images to default"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{lang === 'en' ? 'Reset All Images' : 'सभी फ़ोटो रीसेट'}</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#14281e] hover:bg-[#0d1c15] text-[#d8cdb8] hover:text-white border border-[#2d4d3c] text-xs font-semibold transition-colors"
              title="Sign out of admin session"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Lock / Sign Out' : 'सुरक्षित लॉक / बाहर निकलें'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Notification Toast */}
      {notification && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg border text-xs font-semibold animate-in fade-in slide-in-from-bottom-2 ${
            notification.type === 'success'
              ? 'bg-[#166534] text-white border-[#22c55e]'
              : 'bg-[#991b1b] text-white border-[#ef4444]'
          }`}
        >
          {notification.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-[#86efac]" />
          ) : (
            <AlertCircle className="w-4 h-4 text-[#fca5a5]" />
          )}
          <span>{notification.message}</span>
        </div>
      )}

      {/* Main Admin Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 space-y-8">
        {/* Instructions Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#ded3be] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-serif text-base font-bold text-[#1a3325] flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-[#2b513f]" />
              <span>
                {lang === 'en'
                  ? 'Clinic Photography & Visual Assets'
                  : 'क्लिनिक फ़ोटो एवं इमेज प्रबंधन'}
              </span>
            </h2>
            <p className="text-xs text-[#63594b] leading-relaxed max-w-3xl">
              {lang === 'en'
                ? 'Update any clinic image by pasting an external image web URL (Google Maps photos, Cloudinary, Imgur, direct links) or by clicking "Upload Photo From Device" to automatically convert a picture on your computer/phone into a link. Changes reflect instantly on the live website.'
                : 'आप किसी भी फ़ोटो का वेब लिंक (URL) डालकर या "डिवाइस से फ़ोटो अपलोड करें" पर क्लिक करके तस्वीर बदल सकते हैं। किए गए सभी बदलाव तुरंत लाइव वेबसाइट पर दिखने लगते हैं।'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#284838] hover:bg-[#1f372a] text-white text-xs font-bold shadow-xs transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'View Live Website' : 'लाइव वेबसाइट देखें'}</span>
          </button>
        </div>

        {/* Grid of Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {IMAGE_METADATA_LIST.map((meta) => {
            const currentUrl = images[meta.key] || '';
            const testStatus = testedUrls[meta.key];
            const isDataUrl = currentUrl.startsWith('data:');

            return (
              <div
                key={meta.key}
                className="p-5 rounded-2xl bg-white border border-[#ded3be] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#2b513f]/40 transition-colors"
              >
                {/* Header Info */}
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-base font-bold text-[#1f372a]">
                      {lang === 'en' ? meta.titleEn : meta.titleHi}
                    </h3>
                    <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-[#f0e8dc] text-[#554a3a] font-medium">
                      {meta.recommendedAspect}
                    </span>
                  </div>
                  <p className="text-xs text-[#6e6354] leading-relaxed">
                    {lang === 'en' ? meta.descriptionEn : meta.descriptionHi}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {meta.usagePages.map((p, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#f5efe4] text-[#334d3c] border border-[#e5dccf] font-medium"
                      >
                        Used on: {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Preview Box */}
                <div className="relative rounded-xl overflow-hidden border-2 border-[#e8dfcf] bg-[#16271c] group aspect-[16/10]">
                  <img
                    src={currentUrl}
                    alt={meta.titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).classList.add('opacity-40');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-between p-3 pointer-events-none">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] bg-black/60 backdrop-blur-xs text-white px-2 py-0.5 rounded font-mono">
                        {meta.key}
                      </span>
                      {isDataUrl ? (
                        <span className="text-[10px] bg-[#16a34a] text-white px-2 py-0.5 rounded font-medium shadow-xs">
                          Uploaded from Device
                        </span>
                      ) : (
                        <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded font-medium shadow-xs">
                          Web Link (URL)
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-white text-[11px]">
                      <span>{meta.titleEn}</span>
                      <span className="text-[10px] text-[#ded2be]">Live Preview</span>
                    </div>
                  </div>
                </div>

                {/* Controls & Inputs */}
                <div className="space-y-3 pt-2">
                  {/* Web Link Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#352f26] flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <LinkIcon className="w-3.5 h-3.5 text-[#2b513f]" />
                        {lang === 'en' ? 'Image Web Link (URL):' : 'इमेज वेब लिंक (URL):'}
                      </span>
                      {currentUrl && (
                        <button
                          type="button"
                          onClick={() => handleCopy(currentUrl, meta.key)}
                          className="text-[10px] text-[#2b513f] hover:underline font-medium inline-flex items-center gap-1"
                        >
                          <Copy className="w-2.5 h-2.5" />
                          <span>{copiedKey === meta.key ? 'Copied!' : 'Copy Link'}</span>
                        </button>
                      )}
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={isDataUrl ? 'data:image/... (Uploaded from local file)' : currentUrl}
                        onChange={(e) => {
                          updateImage(meta.key, e.target.value);
                        }}
                        placeholder="https://example.com/clinic-photo.jpg"
                        className="flex-1 px-3 py-2 text-xs rounded-lg border border-[#c4b7a1] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#2b513f] text-[#2d2822] font-mono"
                      />
                      {!isDataUrl && currentUrl && (
                        <button
                          type="button"
                          onClick={() => handleTestImageUrl(meta.key, currentUrl)}
                          className="px-3 py-2 bg-[#f0e8dc] hover:bg-[#e4dac9] text-[#2b513f] text-xs font-semibold rounded-lg transition-colors shrink-0"
                          title="Test if link loads"
                        >
                          {testStatus === 'loading'
                            ? 'Testing...'
                            : testStatus === 'valid'
                            ? '✓ Valid'
                            : testStatus === 'invalid'
                            ? '✕ Error'
                            : 'Test Link'}
                        </button>
                      )}
                    </div>
                    <p className="text-[10px] text-[#736756]">
                      {lang === 'en'
                        ? 'Paste direct photo URL from Google Maps, Cloudinary, Imgur, or hospital host.'
                        : 'गूगल मैप्स, क्लाउड अथवा किसी भी सर्वर का सीधा इमेज लिंक यहाँ पेस्ट करें।'}
                    </p>
                  </div>

                  {/* Upload from Device */}
                  <div className="pt-2 border-t border-[#eee5d8] flex items-center justify-between gap-3">
                    <input
                      ref={(el) => (fileInputRefs.current[meta.key] = el)}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(meta.key, e)}
                    />

                    <button
                      type="button"
                      onClick={() => fileInputRefs.current[meta.key]?.click()}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#284838] hover:bg-[#1f372a] text-white text-xs font-semibold shadow-2xs transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'Upload Photo From Device' : 'डिवाइस से फ़ोटो अपलोड करें'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        resetImageToDefault(meta.key);
                        showNotification(lang === 'en' ? 'Reset to default image' : 'मूल फ़ोटो पर रीसेट हुआ');
                      }}
                      className="text-xs text-[#786c5c] hover:text-[#991b1b] hover:underline inline-flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>{lang === 'en' ? 'Reset to default' : 'डिफ़ॉल्ट पर लाएं'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
