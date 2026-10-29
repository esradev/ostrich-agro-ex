import React from 'react';
import { ProductItem, Language } from '../types';
import { TRANSLATIONS } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { X, ShieldCheck, Package, ArrowUpRight } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  currentLang: Language;
  onClose: () => void;
  onSelectForRfq: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  currentLang,
  onClose,
  onSelectForRfq,
}) => {
  if (!product) return null;
  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Box with ample breathing space */}
      <div className={`relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl transition-colors ${
        isDark ? 'border-white/10 bg-[#121417] text-white' : 'border-stone-300 bg-white text-stone-900'
      }`}>
        
        {/* Header bar */}
        <div className={`sticky top-0 z-20 flex items-center justify-between border-b px-6 sm:px-8 py-5 backdrop-blur-md ${
          isDark ? 'border-white/10 bg-[#121417]/95' : 'border-stone-200 bg-white/95'
        }`}>
          <div className="flex items-center gap-2.5 text-xs font-bold text-rose-600 dark:text-rose-400">
            <ShieldCheck className="h-4 w-4" />
            <span>EXPORT SPECIFICATION DOSSIER</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors cursor-pointer ${
              isDark 
                ? 'border-white/10 text-[#9ca3af] hover:text-white hover:bg-white/5' 
                : 'border-stone-200 text-stone-500 hover:text-stone-900 hover:bg-stone-100'
            }`}
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Body with spacious layout */}
        <div className="p-8 sm:p-10 space-y-10">
          
          {/* Main Visual & Title Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Image (5 cols) */}
            <div className="md:col-span-5 overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900 aspect-4/3 relative">
              <img
                src={product.image}
                alt={product.title[currentLang]}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute top-3 start-3 bg-black/80 backdrop-blur-md border border-white/10 text-rose-300 text-[11px] font-mono px-2.5 py-1 rounded-md">
                Grade: {product.grades[0]}
              </div>
            </div>

            {/* Description & Key Data (7 cols) with generous line height */}
            <div className="md:col-span-7 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">
                  {product.category}
                </span>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  {product.title[currentLang]}
                </h3>
                <p className={`text-xs sm:text-sm font-medium ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                  {product.subtitle[currentLang]}
                </p>
              </div>

              <p className={`text-sm sm:text-base leading-relaxed sm:leading-loose ${isDark ? 'text-[#d1d5db]' : 'text-stone-700'}`}>
                {product.description[currentLang]}
              </p>

              {/* Pricing & Unit Metadata (Unboxed) */}
              <div className={`pt-4 flex items-center gap-8 text-xs sm:text-sm border-t ${
                isDark ? 'border-white/10 text-[#9ca3af]' : 'border-stone-200 text-stone-600'
              }`}>
                <div>
                  <span className="block text-[10px] text-neutral-400 uppercase">{t.productsSection.moq}</span>
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-stone-900'}`}>Commercial Tier</span>
                </div>
                <div>
                  <span className="block text-[10px] text-neutral-400 uppercase">
                    {currentLang === 'fa' ? 'واحد پایه تجاری' : currentLang === 'ar' ? 'وحدة القياس' : 'Standard Unit'}
                  </span>
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    {product.unit[currentLang]}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-4">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
              {currentLang === 'fa' ? 'جدول مشخصات آزمایشگاهی و فیزیولوژیک' : currentLang === 'ar' ? 'المواصفات المخبرية والفيزيولوجية' : 'Physiological & Laboratory Analysis'}
            </h4>
            
            <div className={`overflow-hidden rounded-xl border ${
              isDark ? 'border-white/5 bg-[#16181c]' : 'border-stone-200 bg-stone-50'
            }`}>
              <table className="w-full text-start text-xs sm:text-sm">
                <tbody>
                  {product.specifications[currentLang].map((spec, sIdx) => (
                    <tr 
                      key={sIdx}
                      className={`border-b last:border-b-0 transition-colors ${
                        isDark ? 'border-white/5 hover:bg-white/[0.02]' : 'border-stone-200 hover:bg-stone-100/50'
                      }`}
                    >
                      <td className={`py-3.5 px-5 font-medium w-1/3 ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                        {spec.label}
                      </td>
                      <td className={`py-3.5 px-5 font-semibold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Packaging & Logistics Box with airy padding */}
          <div className={`rounded-xl border p-6 space-y-3 ${
            isDark ? 'border-white/5 bg-[#16181c]' : 'border-stone-200 bg-stone-50'
          }`}>
            <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400">
              <Package className="h-4 w-4" />
              <span>{t.productsSection.packaging}</span>
            </div>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#d1d5db]' : 'text-stone-700'}`}>
              {product.packaging[currentLang]}
            </p>
          </div>

          {/* Available Grades & Certs */}
          <div className={`flex flex-wrap items-center justify-between gap-6 pt-4 border-t ${
            isDark ? 'border-white/10' : 'border-stone-200'
          }`}>
            <div className="flex flex-wrap gap-2.5">
              {product.certifications.map((c, cIdx) => (
                <span 
                  key={cIdx}
                  className={`text-xs font-mono border px-3 py-1.5 rounded-md ${
                    isDark ? 'border-white/10 bg-white/5 text-[#d1d5db]' : 'border-stone-300 bg-stone-100 text-stone-700'
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Action CTA */}
            <button
              type="button"
              onClick={() => {
                onClose();
                onSelectForRfq(product);
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#9b111e] to-[#be123c] px-6 py-3 text-xs sm:text-sm font-bold text-white transition-all hover:brightness-110 cursor-pointer shadow-md"
            >
              <span>{t.productsSection.addToQuote}</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
