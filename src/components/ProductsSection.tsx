import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductItem, Language } from '../types';
import { TRANSLATIONS, PRODUCTS_LIST } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { ArrowUpRight, FileText } from 'lucide-react';

interface ProductsSectionProps {
  currentLang: Language;
  onOpenProductDetail: (product: ProductItem) => void;
  onSelectForRfq: (product: ProductItem) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  currentLang,
  onOpenProductDetail,
  onSelectForRfq,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];

  const categories = [
    { id: 'all', label: t.productsSection.all },
    { id: 'meat', label: t.productsSection.meat },
    { id: 'oil', label: t.productsSection.oil },
    { id: 'leather', label: t.productsSection.leather },
    { id: 'feathers', label: t.productsSection.feathers },
    { id: 'eggs', label: t.productsSection.eggs },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_LIST
    : PRODUCTS_LIST.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className={`w-full border-b transition-colors duration-200 py-24 lg:py-32 ${
      isDark ? 'border-white/10 bg-[#0c0d0e]' : 'border-stone-200 bg-white'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header & Interactive Filter Bar with generous breathing room */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-12 border-b ${
          isDark ? 'border-white/10' : 'border-stone-200'
        }`}>
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-rose-600 dark:text-rose-400">
              <span>EXPORT-GRADE PORTFOLIO</span>
              <span aria-hidden="true">·</span>
              <span>Halal & HACCP Vetted</span>
            </div>
            <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-[1.3] ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}>
              {t.productsSection.title}
            </h2>
            <p className={`pt-1 text-base leading-relaxed ${
              isDark ? 'text-[#c4c8d0]' : 'text-stone-600'
            }`}>
              {t.productsSection.subtitle}
            </p>
          </div>

          {/* Interactive Filter Tabs in Ruby Red */}
          <div className={`flex flex-wrap items-center gap-2 p-1.5 border rounded-xl ${
            isDark ? 'bg-[#141619] border-white/10' : 'bg-stone-100 border-stone-200'
          }`}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-[#9b111e] to-[#be123c] text-white shadow-md font-bold'
                      : isDark
                        ? 'text-[#9ca3af] hover:text-white hover:bg-white/5'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-white/80'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid with relaxed gaps and motion entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.28, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex flex-col justify-between overflow-hidden rounded-2xl border transition-all ${
                  isDark 
                    ? 'border-white/10 bg-[#121417] hover:border-rose-600/50 hover:shadow-[0_12px_35px_rgba(155,17,30,0.2)]' 
                    : 'border-stone-200 bg-stone-50/70 hover:bg-white hover:border-rose-400 hover:shadow-lg'
                }`}
              >
                
                {/* Product Visual */}
                <div>
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-900">
                    <img
                      src={product.image}
                      alt={product.title[currentLang]}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-85 ${
                      isDark ? 'from-[#121417]' : 'from-black/60'
                    }`} />
                    
                    {/* Category subtle label */}
                    <div className="absolute top-4 start-4">
                      <span className="text-[11px] font-mono tracking-wider uppercase text-rose-300 bg-black/75 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Area with ample padding */}
                  <div className="p-7 sm:p-8 space-y-6">
                    
                    {/* Title & Subtitle */}
                    <div className="space-y-2">
                      <h3 className={`text-xl font-bold leading-snug transition-colors ${
                        isDark 
                          ? 'text-white group-hover:text-rose-400' 
                          : 'text-stone-900 group-hover:text-rose-700'
                      }`}>
                        {product.title[currentLang]}
                      </h3>
                      <p className={`text-xs sm:text-sm line-clamp-2 leading-relaxed ${
                        isDark ? 'text-[#a0a5ad]' : 'text-stone-600'
                      }`}>
                        {product.subtitle[currentLang]}
                      </p>
                    </div>

                    {/* Clean unboxed metadata preview */}
                    <div className={`space-y-3 border-t pt-5 ${
                      isDark ? 'border-white/10' : 'border-stone-200'
                    }`}>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className={isDark ? 'text-[#9ca3af]' : 'text-stone-500'}>
                          {currentLang === 'fa' ? 'گرید اصلی' : currentLang === 'ar' ? 'الدرجة الرئيسية' : 'Primary Grade'}
                        </span>
                        <span className={`font-semibold font-mono ${isDark ? 'text-white' : 'text-stone-900'}`}>
                          {product.grades[0]}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className={isDark ? 'text-[#9ca3af]' : 'text-stone-500'}>
                          {currentLang === 'fa' ? 'واحد عرضه' : currentLang === 'ar' ? 'وحدة الشحن' : 'Unit Basis'}
                        </span>
                        <span className={`font-semibold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                          {product.unit[currentLang]}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className={isDark ? 'text-[#9ca3af]' : 'text-stone-500'}>
                          {currentLang === 'fa' ? 'گواهی سلامت' : currentLang === 'ar' ? 'الشهادة' : 'Compliance'}
                        </span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">100% Halal / ISO 22000</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className={`p-7 pt-0 border-t flex items-center justify-between gap-4 ${
                  isDark ? 'border-white/5' : 'border-stone-200'
                }`}>
                  <button
                    type="button"
                    onClick={() => onOpenProductDetail(product)}
                    className={`flex-1 inline-flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-semibold border rounded-lg transition-colors cursor-pointer ${
                      isDark 
                        ? 'text-[#d1d5db] hover:text-white border-white/10 hover:bg-white/5' 
                        : 'text-stone-700 hover:text-stone-950 border-stone-300 hover:bg-stone-100'
                    }`}
                  >
                    <FileText className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                    <span>{t.actions.viewDetails}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectForRfq(product)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#9b111e] to-[#be123c] hover:brightness-110 rounded-lg transition-all cursor-pointer shadow-md"
                  >
                    <span>{t.productsSection.addToQuote}</span>
                    <ArrowUpRight className="h-4 w-4 rtl:rotate-270 ltr:rotate-0" />
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
