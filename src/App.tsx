import React, { useState, useEffect } from 'react';
import { Language, PageId, Product, CartItem } from './types';
import { ClinicProvider } from './context/ClinicContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { CartDrawer } from './components/CartDrawer';
import { HomePage } from './pages/HomePage';
import { DoctorPage } from './pages/DoctorPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { OffersPage } from './pages/OffersPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

function ClinicAppContent() {
  // Check URL params for initial language (?lang=hi)
  const [lang, setLang] = useState<Language>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'hi' || urlLang === 'en') {
        return urlLang;
      }
      const saved = localStorage.getItem('ms_ayurveda_lang');
      if (saved === 'hi' || saved === 'en') {
        return saved;
      }
    } catch {
      // fallback
    }
    return 'en';
  });

  // Check URL hash for initial page (#about, #treatments, #admin, etc.)
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    try {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'treatments',
        'offers',
        'reviews',
        'products',
        'contact',
        'admin',
      ];
      if (validPages.includes(hash)) {
        return hash;
      }
    } catch {
      // fallback
    }
    return 'home';
  });

  // Cart state persisted to localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ms_ayurveda_cart');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return [];
  });

  const [cartOpen, setCartOpen] = useState(false);

  // Sync language to URL and localStorage
  const handleToggleLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('ms_ayurveda_lang', newLang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLang);
      window.history.replaceState({}, '', url.toString());
    } catch {
      // ignore
    }
  };

  // Sync page to URL hash
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    try {
      window.location.hash = page === 'home' ? '' : page;
    } catch {
      // ignore
    }
  };

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ms_ayurveda_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfaf7] text-[#2d2926] font-sans antialiased">
      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={handleToggleLang}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* Main Content View */}
      <main className="flex-1" id="main">
        {currentPage === 'home' && <HomePage lang={lang} onNavigate={handleNavigate} />}
        {currentPage === 'about' && <DoctorPage lang={lang} onNavigate={handleNavigate} />}
        {currentPage === 'treatments' && <TreatmentsPage lang={lang} onNavigate={handleNavigate} />}
        {currentPage === 'offers' && <OffersPage lang={lang} onNavigate={handleNavigate} />}
        {currentPage === 'reviews' && <ReviewsPage lang={lang} onNavigate={handleNavigate} />}
        {currentPage === 'products' && (
          <ProductsPage
            lang={lang}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenCart={() => setCartOpen(true)}
          />
        )}
        {currentPage === 'contact' && <ContactPage lang={lang} />}
        {currentPage === 'admin' && <AdminPage lang={lang} onNavigate={handleNavigate} />}
      </main>

      {/* Footer */}
      {currentPage !== 'admin' && <Footer onNavigate={handleNavigate} lang={lang} />}

      {/* Mobile Sticky Action Bar */}
      {currentPage !== 'admin' && <MobileActionBar lang={lang} />}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        lang={lang}
      />
    </div>
  );
}

export default function App() {
  return (
    <ClinicProvider>
      <ClinicAppContent />
    </ClinicProvider>
  );
}

