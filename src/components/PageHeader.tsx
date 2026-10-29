import React from 'react';
import { motion } from 'motion/react';
import { Language, PageId } from '../types';
import { TRANSLATIONS } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  currentLang: Language;
  badge: string;
  title: string;
  subtitle: string;
  onNavigateHome: () => void;
  currentPageName: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  currentLang,
  badge,
  title,
  subtitle,
  onNavigateHome,
  currentPageName,
}) => {
  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];

  return (
    <div className={`w-full border-b transition-colors duration-200 py-16 sm:py-20 lg:py-24 ${
      isDark ? 'border-white/10 bg-[#0d0f12]' : 'border-stone-200 bg-stone-50'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation with generous bottom margin */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={`flex items-center gap-2.5 text-xs mb-8 ${
            isDark ? 'text-neutral-400' : 'text-stone-500'
          }`}
        >
          <button
            type="button"
            onClick={onNavigateHome}
            className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
              isDark ? 'hover:text-white' : 'hover:text-stone-900'
            }`}
          >
            <Home className="h-4 w-4" />
            <span>{t.nav.home}</span>
          </button>
          
          <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180 text-neutral-400" />
          
          <span className={`font-semibold ${isDark ? 'text-rose-400' : 'text-rose-700'}`}>
            {currentPageName}
          </span>
        </motion.div>

        {/* Header Content with airy layout and relaxed leading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl space-y-4"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400 block">
            {badge}
          </span>
          <h1 className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-[1.3] sm:leading-[1.25] ${
            isDark ? 'text-white' : 'text-stone-900'
          }`}>
            {title}
          </h1>
          <p className={`pt-2 text-base sm:text-lg leading-relaxed sm:leading-loose ${
            isDark ? 'text-[#c4c8d0]' : 'text-stone-600'
          }`}>
            {subtitle}
          </p>
        </motion.div>

      </div>
    </div>
  );
};
