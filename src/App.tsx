/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, PageId, ProductItem, ExportDestination } from './types';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Header';
import { ContactFooter } from './components/ContactFooter';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ScrollNavigationTools } from './components/ScrollNavigationTools';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { ValueChainPage } from './pages/ValueChainPage';
import { ProductsPage } from './pages/ProductsPage';
import { NutritionLabPage } from './pages/NutritionLabPage';
import { ExportNetworkPage } from './pages/ExportNetworkPage';
import { RfqPage } from './pages/RfqPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const [currentLang, setCurrentLang] = useState<Language>('fa');
  
  // Initialize page from URL hash or default to 'home'
  const [activePage, setActivePage] = useState<PageId>(() => {
    try {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home', 
        'value-chain', 
        'products', 
        'nutrition', 
        'export', 
        'rfq', 
        'certificates', 
        'contact'
      ];
      return validPages.includes(hash) ? hash : 'home';
    } catch {
      return 'home';
    }
  });

  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);
  const [rfqProduct, setRfqProduct] = useState<ProductItem | null>(null);
  const [rfqDestination, setRfqDestination] = useState<string | null>(null);
  const { isDark } = useTheme();

  // Synchronize document dir and lang attributes
  useEffect(() => {
    document.documentElement.lang = currentLang;
    if (currentLang === 'en') {
      document.documentElement.dir = 'ltr';
    } else {
      document.documentElement.dir = 'rtl';
    }
  }, [currentLang]);

  // Synchronize URL hash with activePage and handle browser back/forward
  useEffect(() => {
    window.location.hash = activePage;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home', 
        'value-chain', 
        'products', 
        'nutrition', 
        'export', 
        'rfq', 
        'certificates', 
        'contact'
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setActivePage(page);
  };

  const handleSelectProductForRfq = (product: ProductItem) => {
    setRfqProduct(product);
    setActivePage('rfq');
  };

  const handleOpenRfqForDestination = (dest: ExportDestination) => {
    setRfqDestination(dest.country[currentLang]);
    setActivePage('rfq');
  };

  const handleFooterNavigate = (section: string) => {
    if (section === 'value-chain') navigateTo('value-chain');
    else if (section === 'products') navigateTo('products');
    else if (section === 'nutrition-lab') navigateTo('nutrition');
    else if (section === 'rfq-calculator') navigateTo('rfq');
    else navigateTo('home');
  };

  return (
    <div className={`min-h-screen antialiased transition-colors duration-200 selection:bg-[#9b111e]/30 ${
      isDark ? 'bg-[#0c0d0e] text-[#f1f2f4] selection:text-white' : 'bg-[#faf9f5] text-stone-900 selection:text-rose-900'
    }`}>
      
      {/* Viewport Top Scroll Progress Indicator & Floating Back to Top Button */}
      <ScrollNavigationTools currentLang={currentLang} />

      {/* Floating WhatsApp Contact Button across all pages */}
      <FloatingWhatsApp currentLang={currentLang} />

      {/* 3-Zone Sticky Navigation Header with Select Language Switcher */}
      <Header
        currentLang={currentLang}
        activePage={activePage}
        onLanguageChange={setCurrentLang}
        onNavigate={navigateTo}
      />

      {/* Main Page Rendering Area with Framer Motion transitions */}
      <main className="min-h-[70vh] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {activePage === 'home' && (
              <HomePage
                currentLang={currentLang}
                onNavigate={navigateTo}
                onSelectProductDetail={setActiveModalProduct}
              />
            )}

            {activePage === 'value-chain' && (
              <ValueChainPage
                currentLang={currentLang}
                onNavigateHome={() => navigateTo('home')}
                onNavigateToRfq={() => navigateTo('rfq')}
              />
            )}

            {activePage === 'products' && (
              <ProductsPage
                currentLang={currentLang}
                onNavigateHome={() => navigateTo('home')}
                onOpenProductDetail={setActiveModalProduct}
                onSelectForRfq={handleSelectProductForRfq}
              />
            )}

            {activePage === 'nutrition' && (
              <NutritionLabPage
                currentLang={currentLang}
                onNavigateHome={() => navigateTo('home')}
                onNavigateToRfq={() => navigateTo('rfq')}
              />
            )}

            {activePage === 'export' && (
              <ExportNetworkPage
                currentLang={currentLang}
                onNavigateHome={() => navigateTo('home')}
                onOpenRfqForDestination={handleOpenRfqForDestination}
              />
            )}

            {activePage === 'rfq' && (
              <RfqPage
                currentLang={currentLang}
                onNavigateHome={() => navigateTo('home')}
                preselectedProduct={rfqProduct}
                preselectedDestination={rfqDestination}
              />
            )}

            {activePage === 'certificates' && (
              <CertificatesPage
                currentLang={currentLang}
                onNavigateHome={() => navigateTo('home')}
                onNavigateToRfq={() => navigateTo('rfq')}
              />
            )}

            {activePage === 'contact' && (
              <ContactPage
                currentLang={currentLang}
                onNavigateHome={() => navigateTo('home')}
                onNavigate={navigateTo}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer (only shown if not on dedicated contact page to avoid duplicate contact forms) */}
      {activePage !== 'contact' && (
        <ContactFooter
          currentLang={currentLang}
          onNavigateToSection={handleFooterNavigate}
        />
      )}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        currentLang={currentLang}
        onClose={() => setActiveModalProduct(null)}
        onSelectForRfq={handleSelectProductForRfq}
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
