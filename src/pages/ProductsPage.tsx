import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, ProductItem } from '../types';
import { TRANSLATIONS } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { PageHeader } from '../components/PageHeader';
import { ProductsSection } from '../components/ProductsSection';
import { ExportFaqAccordion } from '../components/ExportFaqAccordion';
import { Download, FileText, CheckCircle2 } from 'lucide-react';

interface ProductsPageProps {
  currentLang: Language;
  onNavigateHome: () => void;
  onOpenProductDetail: (product: ProductItem) => void;
  onSelectForRfq: (product: ProductItem) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  currentLang,
  onNavigateHome,
  onOpenProductDetail,
  onSelectForRfq,
}) => {
  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const handleDownloadCatalog = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4500);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHeader
        currentLang={currentLang}
        badge="EXPORT COMMODITY PORTFOLIO"
        title={t.productsSection.title}
        subtitle={t.productsSection.subtitle}
        onNavigateHome={onNavigateHome}
        currentPageName={t.nav.products}
      />

      {/* Main Filterable Products Catalog */}
      <ProductsSection
        currentLang={currentLang}
        onOpenProductDetail={onOpenProductDetail}
        onSelectForRfq={onSelectForRfq}
      />

      {/* Product Standards & Export Specifications Accordion FAQ */}
      <ExportFaqAccordion
        currentLang={currentLang}
        defaultCategory="products"
        badgeOverride={
          currentLang === 'fa' 
            ? 'پرسش‌های متداول مشخصات کالا و استانداردها' 
            : currentLang === 'ar' 
            ? 'الأسئلة الشائعة حول مواصفات المنتجات والتعبئة' 
            : 'PRODUCT SPECIFICATIONS & QUALITY FAQ'
        }
      />

      {/* Technical PDF Catalog Download Banner with generous padding */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full py-20 lg:py-28 border-b transition-colors ${
          isDark ? 'border-white/10 bg-[#0e1012]' : 'border-stone-200 bg-stone-50'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`rounded-2xl border p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 ${
            isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-xs'
          }`}>
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400">
                <FileText className="h-7 w-7" />
              </div>
              <div className="space-y-1">
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  {currentLang === 'fa' 
                    ? 'کاتالوگ جامع مشخصات فنی و شرایط نگهداری (نسخه بین‌الملل ۲۰۲۶)' 
                    : currentLang === 'ar' 
                    ? 'الكتالوج الفني الكامل ومواصفات الشحن والتخزين (نسخة 2026)' 
                    : '2026 International Export Specification & Rate Sheet'}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                  Includes microbiological limits, fat trimming standards, pallet dimensions, and Incoterms guide.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={handleDownloadCatalog}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#9b111e] to-[#be123c] px-6 py-3.5 text-xs sm:text-sm font-bold text-white hover:brightness-110 transition-colors cursor-pointer whitespace-nowrap shadow-md"
              >
                <Download className="h-4 w-4" />
                <span>{t.actions.downloadCatalog}</span>
              </button>

              <AnimatePresence>
                {downloadSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>
                      {currentLang === 'fa' 
                        ? 'درخواست کاتالوگ ثبت و فایل ارسال گردید.' 
                        : currentLang === 'ar' 
                        ? 'تم بدء تحميل الكتالوج الفني بنجاح.' 
                        : 'Official export catalog downloaded successfully.'}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
