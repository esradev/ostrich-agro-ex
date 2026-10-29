import React from 'react';
import { motion } from 'motion/react';
import { Language, PageId, ProductItem } from '../types';
import { TRANSLATIONS, PRODUCTS_LIST, HERO_IMAGE, MEAT_IMAGE, OIL_IMAGE, LEATHER_IMAGE } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { Hero } from '../components/Hero';
import { ClientTestimonialsSlider } from '../components/ClientTestimonialsSlider';
import { ArrowUpRight, ArrowRight, ShieldCheck, Award, Globe, HeartPulse, Layers } from 'lucide-react';

interface HomePageProps {
  currentLang: Language;
  onNavigate: (page: PageId) => void;
  onSelectProductDetail: (product: ProductItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentLang,
  onNavigate,
  onSelectProductDetail,
}) => {
  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];

  const featuredProducts = PRODUCTS_LIST.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Marquee Section */}
      <Hero
        currentLang={currentLang}
        onExploreProducts={() => onNavigate('products')}
        onRequestQuote={() => onNavigate('rfq')}
      />

      {/* Section 1: Executive Corporate Overview with ample padding */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full border-b py-24 lg:py-32 transition-colors ${
          isDark ? 'border-white/10 bg-[#0e1012]' : 'border-stone-200 bg-stone-50'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest block">
                {currentLang === 'fa' ? 'پیشگام اقتصاد زیستی و امنیت غذایی' : currentLang === 'ar' ? 'الريادة في الاقتصاد الحيوي والأمن الغذائي' : 'Pioneering Bio-Economy & Food Security'}
              </span>
              <h2 className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-[1.3] ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}>
                {currentLang === 'fa' 
                  ? 'یکپارچگی کامل از اصلاح نژاد تا صادرات مستقیم به بازارهای جهانی' 
                  : currentLang === 'ar' 
                  ? 'تكامل رأسي شامل من التحسين الوراثي حتى التصدير الدولي المباشر'
                  : 'Total Vertical Integration: From Pedigree Breeding to Global Export Terminals'}
              </h2>
              <p className={`text-base sm:text-lg leading-relaxed sm:leading-loose ${isDark ? 'text-[#c4c8d0]' : 'text-stone-700'}`}>
                {currentLang === 'fa'
                  ? 'مجتمع کشت و صنعت سلامت راشین با تکیه بر اقلیم طبیعی نیمه‌خشک کویری، اراضی قرنطینه بهداشتی و ماشین‌آلات پیشرفته کشتارگاهی اروپایی، استانداردی نو در صنعت شترمرغ خاورمیانه بنیان نهاده است. ما با حذف هرگونه واسطه، سلامت بیولوژیک ۱۰۰٪ گوشت قرمز ارگانیک، روغن‌های دارویی با گرید BP و چرم‌های اشباع‌شده لوکس را تضمین می‌کنیم.'
                  : currentLang === 'ar'
                  ? 'يرسخ مجمع سلامة راشين الزراعي الصناعي معياراً جديداً في الشرق الأوسط بالاعتماد على المناخ الطبيعي والمراعي المفتوحة والتقنيات الأوروبية في الذبح والمعالجة. نحن نضمن سلامة بيولوجية 100٪ للحوم النعام العضوية والزيوت الطبية والجلود الفاخرة مباشرة للأسواق الخليجية والعالمية.'
                  : 'Salamat Rashin operates one of the Middle East’s largest sovereign ostrich farming and processing estates. Leveraging pristine semi-arid pastures, certified biosecure environments, and EU-compliant slaughtering infrastructure, we deliver untainted organic red meat, pharmaceutical lipids, and luxury hides directly to premier international trade partners.'}
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate('value-chain')}
                  className="inline-flex items-center gap-2.5 rounded-lg bg-gradient-to-r from-[#9b111e] to-[#be123c] px-6 py-3.5 text-xs sm:text-sm font-bold text-white hover:brightness-110 transition-all cursor-pointer shadow-md"
                >
                  <Layers className="h-4 w-4" />
                  <span>{t.actions.viewChain}</span>
                  <ArrowUpRight className="h-4 w-4 rtl:rotate-270 ltr:rotate-0" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('certificates')}
                  className={`inline-flex items-center gap-2.5 rounded-lg border px-6 py-3.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    isDark 
                      ? 'border-white/10 bg-white/5 text-white hover:bg-white/10' 
                      : 'border-stone-300 bg-white text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  <ShieldCheck className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                  <span>{t.nav.certificates}</span>
                </button>
              </div>
            </div>

            {/* Visual Teaser Cards (5 cols) with generous spacing */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-5">
              <div className="rounded-2xl overflow-hidden aspect-square border border-white/10 relative shadow-lg">
                <img src={MEAT_IMAGE} alt="Prime Meat" referrerPolicy="no-referrer" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 text-xs font-bold text-white">
                  Prime Halal Meat
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square border border-white/10 relative shadow-lg mt-8">
                <img src={OIL_IMAGE} alt="Cosmetic Oil" referrerPolicy="no-referrer" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 text-xs font-bold text-white">
                  Omega 3-6-9 Lipids
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square border border-white/10 relative shadow-lg -mt-8">
                <img src={LEATHER_IMAGE} alt="Luxury Leather" referrerPolicy="no-referrer" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 text-xs font-bold text-white">
                  Exotic Crown Leather
                </div>
              </div>
              <div className={`rounded-2xl border p-6 flex flex-col justify-between shadow-xs ${
                isDark ? 'border-white/10 bg-[#16181c]' : 'border-stone-200 bg-white'
              }`}>
                <Award className="h-9 w-9 text-rose-600 dark:text-rose-400" />
                <div className="space-y-1">
                  <span className="font-mono text-2xl font-bold text-emerald-600 dark:text-emerald-400 block">100%</span>
                  <span className={`text-xs ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                    Halal & ISO 22000 Certified
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* Section 2: Featured Products Showcase with spacious gaps */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full border-b py-24 lg:py-32 transition-colors ${
          isDark ? 'border-white/10 bg-[#0c0d0e]' : 'border-stone-200 bg-white'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/10">
            <div className="space-y-2">
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest block">
                FEATURED EXPORT COMMODITIES
              </span>
              <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
                isDark ? 'text-white' : 'text-stone-900'
              }`}>
                {t.productsSection.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-600 dark:text-rose-400 hover:text-rose-500 cursor-pointer"
            >
              <span>{currentLang === 'fa' ? 'مشاهده کاتالوگ جامع تمام محصولات' : currentLang === 'ar' ? 'عرض جميع المنتجات التصديرية' : 'View Full Export Catalog'}</span>
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex flex-col justify-between overflow-hidden rounded-2xl border transition-all ${
                  isDark 
                    ? 'border-white/10 bg-[#121417] hover:border-rose-600/50 hover:shadow-[0_12px_35px_rgba(155,17,30,0.2)]' 
                    : 'border-stone-200 bg-stone-50/70 hover:bg-white hover:border-rose-400 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-900">
                    <img
                      src={product.image}
                      alt={product.title[currentLang]}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 start-4">
                      <span className="text-[11px] font-mono uppercase bg-black/75 text-rose-300 px-2.5 py-1 rounded-md border border-white/10">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 space-y-3">
                    <h3 className={`text-xl font-bold leading-snug transition-colors ${
                      isDark ? 'text-white group-hover:text-rose-400' : 'text-stone-900 group-hover:text-rose-700'
                    }`}>
                      {product.title[currentLang]}
                    </h3>
                    <p className={`text-xs sm:text-sm line-clamp-2 leading-relaxed ${
                      isDark ? 'text-[#a0a5ad]' : 'text-stone-600'
                    }`}>
                      {product.subtitle[currentLang]}
                    </p>
                  </div>
                </div>

                <div className={`p-7 pt-0 border-t flex items-center justify-between gap-4 ${
                  isDark ? 'border-white/5' : 'border-stone-200'
                }`}>
                  <button
                    type="button"
                    onClick={() => onSelectProductDetail(product)}
                    className={`flex-1 py-3 text-xs sm:text-sm font-semibold rounded-lg border transition-colors cursor-pointer ${
                      isDark 
                        ? 'border-white/10 bg-white/5 text-white hover:bg-white/10' 
                        : 'border-stone-300 bg-white text-stone-800 hover:bg-stone-100'
                    }`}
                  >
                    {t.actions.viewDetails}
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('rfq')}
                    className="flex-1 py-3 text-xs sm:text-sm font-bold rounded-lg bg-gradient-to-r from-[#9b111e] to-[#be123c] text-white hover:brightness-110 transition-colors cursor-pointer shadow-md"
                  >
                    {t.productsSection.addToQuote}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>

      {/* Section 3: Clinical & R&D Teaser Strip with ample padding */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full border-b py-20 lg:py-28 transition-colors ${
          isDark ? 'border-white/10 bg-[#0e1012]' : 'border-stone-200 bg-stone-50'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`rounded-2xl border p-10 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 ${
            isDark ? 'border-rose-900/40 bg-[#161013]' : 'border-rose-200 bg-white shadow-sm'
          }`}>
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400">
                <HeartPulse className="h-4 w-4" />
                <span>CLINICAL NUTRITION ANALYSIS</span>
              </div>
              <h3 className={`text-2xl sm:text-3xl font-extrabold leading-snug ${isDark ? 'text-white' : 'text-stone-900'}`}>
                {currentLang === 'fa' 
                  ? 'گوشت شترمرغ؛ قرمزترین گوشت کم‌چربی جهان با ۳۲٪ کلسترول کمتر' 
                  : currentLang === 'ar' 
                  ? 'لحم النعام؛ اللحم الأحمر الأكثر صحة في العالم مع ٣٢٪ كوليسترول أقل'
                  : 'Ostrich: The World’s Healthiest Red Meat with 32% Less Cholesterol than Beef'}
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed sm:leading-loose ${isDark ? 'text-[#c4c8d0]' : 'text-stone-600'}`}>
                {currentLang === 'fa'
                  ? 'بررسی آزمایشگاهی مقایسه‌ای بین گوشت شترمرغ، گوساله، مرغ و بوقلمون همراه با نمودار آنالیز اسیدهای چرب امگا ۳، ۶ و ۹ روغن دارویی.'
                  : currentLang === 'ar'
                  ? 'اطلع على التحاليل المقارنة بين لحم النعام والدجاج والبقر مع كروماتوغرافيا الأحماض الدهنية لزيت النعام النقي.'
                  : 'Explore empirical nutritional comparisons and gas chromatography (GC-MS) fatty acid profiling conducted in our ISO-17025 accredited labs.'}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('nutrition')}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#9b111e] to-[#be123c] px-7 py-4 text-xs sm:text-sm font-bold text-white hover:brightness-110 transition-all cursor-pointer whitespace-nowrap shadow-md"
            >
              <span>{currentLang === 'fa' ? 'مشاهده داده‌های آزمایشگاهی' : currentLang === 'ar' ? 'استعراض البيانات المخبرية' : 'Explore Clinical Data'}</span>
              <ArrowUpRight className="h-4 w-4 rtl:rotate-270 ltr:rotate-0" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Dynamic International B2B Client Testimonials Slider */}
      <ClientTestimonialsSlider currentLang={currentLang} />

      {/* Section 4: Global Corridors & RFQ Banner */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full py-24 lg:py-32 transition-colors ${
          isDark ? 'bg-[#0c0d0e]' : 'bg-white'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Global Corridors Teaser Card */}
            <div className={`rounded-2xl border p-10 flex flex-col justify-between space-y-8 ${
              isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-stone-50'
            }`}>
              <div className="space-y-4">
                <Globe className="h-8 w-8 text-rose-600 dark:text-rose-400" />
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  {t.exportSection.title}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-[#c4c8d0]' : 'text-stone-600'}`}>
                  {t.exportSection.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('export')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-600 dark:text-rose-400 hover:text-rose-500 cursor-pointer self-start"
              >
                <span>{currentLang === 'fa' ? 'بررسی مسیرهای ترانزیت و بنادر' : currentLang === 'ar' ? 'عرض مسارات الشحن والموانئ' : 'Inspect Shipping Corridors'}</span>
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </button>
            </div>

            {/* B2B Price Calculator Teaser Card in Ruby Red */}
            <div className={`rounded-2xl border p-10 flex flex-col justify-between space-y-8 ${
              isDark ? 'border-rose-700/40 bg-[#150f12]' : 'border-rose-200 bg-rose-50/40'
            }`}>
              <div className="space-y-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#9b111e] to-[#be123c] text-white font-bold text-lg shadow-sm">
                  $
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  {t.rfqSection.title}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-[#c4c8d0]' : 'text-stone-600'}`}>
                  {t.rfqSection.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('rfq')}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#9b111e] to-[#be123c] px-6 py-3.5 text-xs sm:text-sm font-bold text-white hover:brightness-110 transition-all cursor-pointer self-start shadow-md"
              >
                <span>{t.actions.calculatePrice}</span>
                <ArrowUpRight className="h-4 w-4 rtl:rotate-270 ltr:rotate-0" />
              </button>
            </div>

          </div>
        </div>
      </motion.section>

    </div>
  );
};
