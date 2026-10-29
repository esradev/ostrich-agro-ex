import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Language } from '../types';

interface ScrollNavigationToolsProps {
  currentLang: Language;
}

export const ScrollNavigationTools: React.FC<ScrollNavigationToolsProps> = ({ currentLang }) => {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  // Framer Motion viewport scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      setShowBackToTop(currentScrollY > 280);

      if (docHeight > 0) {
        const percent = Math.min(100, Math.round((currentScrollY / docHeight) * 100));
        setScrollPercent(percent);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const labels = {
    fa: {
      aria: 'بازگشت به ابتدای صفحه',
      title: 'بازگشت به بالا',
    },
    ar: {
      aria: 'العودة إلى أعلى الصفحة',
      title: 'إلى الأعلى',
    },
    en: {
      aria: 'Scroll to top of page',
      title: 'Back to top',
    },
  }[currentLang];

  return (
    <>
      {/* 1. Viewport Top Scroll Progress Bar */}
      <div 
        role="progressbar"
        aria-label="Page reading progress"
        aria-valuenow={scrollPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        className="fixed top-0 inset-x-0 z-[60] h-[3px] pointer-events-none bg-neutral-200/10 backdrop-blur-xs"
      >
        <motion.div
          style={{ scaleX }}
          className="h-full w-full origin-left rtl:origin-right bg-gradient-to-r from-[#9b111e] via-[#e11d48] to-[#be123c] shadow-[0_0_12px_rgba(225,29,72,0.85)]"
        />
      </div>

      {/* 2. Floating Go-to-Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 16 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 end-6 z-40"
          >
            <button
              type="button"
              onClick={scrollToTop}
              aria-label={labels.aria}
              title={`${labels.title} (${scrollPercent}%)`}
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-rose-600/40 bg-gradient-to-tr from-[#9b111e] to-[#be123c] text-white shadow-[0_6px_22px_rgba(155,17,30,0.45)] backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_28px_rgba(155,17,30,0.6)] focus:outline-none focus:ring-2 focus:ring-rose-400 active:scale-95"
            >
              {/* Circular SVG progress perimeter indicator */}
              <svg className="absolute inset-0 h-full w-full -rotate-90 p-0.5" viewBox="0 0 44 44">
                <circle
                  cx="22"
                  cy="22"
                  r="19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white/20"
                />
                <circle
                  cx="22"
                  cy="22"
                  r="19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeDasharray="119.38"
                  strokeDashoffset={119.38 - (119.38 * scrollPercent) / 100}
                  strokeLinecap="round"
                  className="text-white transition-all duration-150"
                />
              </svg>

              <ArrowUp className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
