import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, PageId } from '../types';
import { TRANSLATIONS } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { Globe, ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  activePage: PageId;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  activePage,
  onLanguageChange,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const t = TRANSLATIONS[currentLang];

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'value-chain', label: t.nav.valueChain },
    { id: 'products', label: t.nav.products },
    { id: 'nutrition', label: t.nav.nutrition },
    { id: 'export', label: t.nav.exportNetwork },
    { id: 'certificates', label: t.nav.certificates },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (pageId: PageId) => {
    setMobileMenuOpen(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-colors duration-200 backdrop-blur-md ${
      isDark 
        ? 'border-white/10 bg-[#0c0d0e]/95 text-white' 
        : 'border-stone-200 bg-white/95 text-stone-900 shadow-xs'
    }`}>
      <div className="mx-auto flex h-16 sm:h-20 lg:h-22 max-w-7xl items-center justify-between gap-2 sm:gap-4 lg:gap-6 px-3 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single clean brand wordmark element */}
        <button 
          type="button"
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2 sm:gap-3.5 min-w-0 transition-opacity hover:opacity-90 text-start cursor-pointer shrink"
        >
          {/* Custom geometric crest icon in Ruby Red */}
          <div className={`flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg border transition-transform group-hover:scale-105 ${
            isDark
              ? 'border-rose-700/50 bg-[#1a0f12] text-rose-500 shadow-[0_0_20px_rgba(155,17,30,0.25)]'
              : 'border-rose-300 bg-rose-50 text-rose-700 shadow-xs'
          }`}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
              <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 4.2c1.8 0 3.25 1.45 3.25 3.25 0 1.2-.65 2.24-1.62 2.81l1.87 5.24h-1.8l-1.05-3h-1.3l-1.05 3H7.5l1.87-5.24C8.4 11.69 7.75 10.65 7.75 9.45 7.75 7.65 9.2 6.2 12 6.2z"/>
            </svg>
          </div>
          <div className="flex flex-col min-w-0">
            <span className={`text-base sm:text-lg lg:text-xl font-bold tracking-tight truncate transition-colors ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}>
              {t.brandName}
            </span>
            <span className={`text-[10px] sm:text-[11px] tracking-wide truncate max-w-[130px] sm:max-w-[200px] lg:max-w-none ${
              isDark ? 'text-rose-400/80' : 'text-rose-800/80 font-medium'
            }`}>
              {currentLang === 'fa' ? 'مجتمع کشت و صنعت و صادرات' : currentLang === 'ar' ? 'مجمع الصناعات التصديرية' : 'Agro-Industrial Group'}
            </span>
          </div>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className={`hidden xl:flex items-center gap-6 lg:gap-7 text-sm font-medium ${
          isDark ? 'text-[#c4c8d0]' : 'text-stone-600'
        }`}>
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1.5 relative cursor-pointer ${
                  isActive
                    ? isDark ? 'text-rose-400 font-bold' : 'text-rose-700 font-bold'
                    : isDark ? 'hover:text-rose-300' : 'hover:text-rose-700'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 start-0 end-0 h-0.5 bg-rose-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Language select dropdown + Theme toggle + Primary action button */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
          
          {/* Light / Dark Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border transition-all cursor-pointer ${
              isDark
                ? 'border-white/10 bg-[#16181b] text-rose-300 hover:bg-white/5 hover:border-rose-400/40'
                : 'border-stone-200 bg-stone-100 text-stone-700 hover:bg-stone-200/80 hover:text-stone-950'
            }`}
            title={currentLang === 'fa' ? (isDark ? 'تم روشن' : 'تم تاریک') : currentLang === 'ar' ? (isDark ? 'الوضع النهاري' : 'الوضع الليلي') : (isDark ? 'Light Mode' : 'Dark Mode')}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Language Switcher with Framer Motion interactive hover entrance & rotating Globe */}
          <motion.div 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center group"
          >
            {/* Subtle interactive hover aura / halo in Ruby Red */}
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-rose-600/30 to-rose-500/10 opacity-0 blur-xs transition-opacity duration-300 group-hover:opacity-100 pointer-events-none -z-10" />

            {/* Animated Globe Icon that subtly rotates and brightens on hover */}
            <div className="pointer-events-none absolute start-2 sm:start-2.5 z-10 flex items-center text-rose-600 dark:text-rose-400 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              <Globe className="h-3.5 w-3.5" />
            </div>

            <select
              value={currentLang}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              aria-label={t.actions.switchLang}
              className={`h-8 sm:h-9 appearance-none rounded-lg border ps-6 sm:ps-8 pe-6 sm:pe-7 text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-rose-600 ${
                isDark 
                  ? 'border-white/10 bg-[#16181b] text-white group-hover:border-rose-500/50 group-hover:bg-[#1b1e22]' 
                  : 'border-stone-200 bg-stone-100 text-stone-800 group-hover:border-rose-400 group-hover:bg-white shadow-xs'
              }`}
            >
              <option value="fa" className={isDark ? 'bg-[#181b20] text-white' : 'bg-white text-stone-900'}>
                فارسی (FA)
              </option>
              <option value="ar" className={isDark ? 'bg-[#181b20] text-white' : 'bg-white text-stone-900'}>
                العربية (AR)
              </option>
              <option value="en" className={isDark ? 'bg-[#181b20] text-white' : 'bg-white text-stone-900'}>
                English (EN)
              </option>
            </select>

            {/* Custom subtle chevron indicator that bounces slightly on hover */}
            <div className="pointer-events-none absolute end-2 sm:end-2.5 z-10 flex items-center text-neutral-400 dark:text-neutral-500 transition-all duration-200 group-hover:text-rose-500 group-hover:translate-y-0.5">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Micro tooltip on desktop hover */}
            <div className="pointer-events-none absolute -bottom-7 start-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap rounded-md bg-stone-900/90 dark:bg-stone-800 text-[10px] text-white px-2 py-0.5 shadow-md border border-white/10 hidden sm:block z-20">
              {t.actions.switchLang}
            </div>
          </motion.div>

          {/* Primary Action Button in Ruby Red - Shown on medium and larger viewports */}
          <button
            type="button"
            onClick={() => handleNavClick('rfq')}
            className={`hidden md:inline-flex items-center gap-1.5 sm:gap-2 rounded-lg border px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-bold transition-all hover:brightness-110 shadow-[0_3px_15px_rgba(155,17,30,0.3)] whitespace-nowrap shrink-0 cursor-pointer ${
              activePage === 'rfq'
                ? 'border-rose-300 bg-rose-700 text-white ring-2 ring-rose-500'
                : 'border-rose-600/60 bg-gradient-to-r from-[#9b111e] via-[#be123c] to-[#9b111e] text-white'
            }`}
          >
            <span>{t.actions.requestQuote}</span>
            <ArrowUpRight className="h-3.5 w-3.5 rtl:rotate-270 ltr:rotate-0" />
          </button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border xl:hidden cursor-pointer ${
              isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-stone-200 text-stone-800 hover:bg-stone-100'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with smooth Framer Motion animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className={`overflow-hidden border-b px-4 py-5 xl:hidden ${
              isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-lg'
            }`}
          >
            <nav className={`flex flex-col gap-2.5 text-sm sm:text-base font-medium ${
              isDark ? 'text-[#c4c8d0]' : 'text-stone-700'
            }`}>
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`py-2 text-start transition-colors flex items-center justify-between rounded-lg px-2 ${
                      isActive 
                        ? isDark ? 'bg-rose-950/40 text-rose-400 font-bold' : 'bg-rose-50 text-rose-700 font-bold' 
                        : isDark ? 'hover:text-rose-300 hover:bg-white/5' : 'hover:text-rose-700 hover:bg-stone-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="h-2 w-2 rounded-full bg-rose-600" />}
                  </button>
                );
              })}
              <div className={`pt-3 mt-1 border-t ${isDark ? 'border-white/10' : 'border-stone-200'}`}>
                <button
                  type="button"
                  onClick={() => handleNavClick('rfq')}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#9b111e] to-[#be123c] py-2.5 text-xs sm:text-sm font-bold text-white cursor-pointer shadow-md hover:brightness-110 transition-all"
                >
                  <span>{t.actions.requestQuote}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
