import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { PageHeader } from '../components/PageHeader';
import { ValueChain } from '../components/ValueChain';
import { ShieldCheck, Factory, ThermometerSnowflake, Microscope } from 'lucide-react';

interface ValueChainPageProps {
  currentLang: Language;
  onNavigateHome: () => void;
  onNavigateToRfq: () => void;
}

export const ValueChainPage: React.FC<ValueChainPageProps> = ({
  currentLang,
  onNavigateHome,
  onNavigateToRfq,
}) => {
  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="w-full">
      {/* Dedicated Page Header with Breadcrumbs */}
      <PageHeader
        currentLang={currentLang}
        badge={currentLang === 'fa' ? 'چرخه بسته و تولید پایدار' : currentLang === 'ar' ? 'سلسلة الإنتاج المتكاملة' : 'CLOSED-LOOP AGRO-INDUSTRIAL ECOSYSTEM'}
        title={t.valueChainSection.title}
        subtitle={t.valueChainSection.subtitle}
        onNavigateHome={onNavigateHome}
        currentPageName={t.nav.valueChain}
      />

      {/* Main Interactive 6-Stage Value Chain */}
      <ValueChain currentLang={currentLang} />

      {/* Deep-Dive: Biosecurity & Industrial Infrastructure with generous spacing */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full py-24 lg:py-32 border-b transition-colors ${
          isDark ? 'border-white/10 bg-[#0c0d0e]' : 'border-stone-200 bg-white'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest block">
              BIOSECURITY BARRIER PROTOCOLS
            </span>
            <h2 className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-[1.3] ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}>
              {currentLang === 'fa'
                ? 'پروتکل‌های بهداشتی قرنطینه دامی سطح ۳ و استاندارد خطوط صنعتی'
                : currentLang === 'ar'
                ? 'معايير الأمان الحيوي من المستوى الثالث وخطوط الإنتاج المعتمدة'
                : 'Level-3 Veterinary Quarantine & Industrial Bio-Containment'}
            </h2>
            <p className={`pt-2 text-base sm:text-lg leading-relaxed sm:leading-loose ${
              isDark ? 'text-[#c4c8d0]' : 'text-stone-600'
            }`}>
              {currentLang === 'fa'
                ? 'مزارع سلامت راشین در منطقه‌ای طبیعی با فاصله بیش از ۶۰ کیلومتر از هرگونه دامداری صنعتی دیگر احداث گردیده است. ورود هرگونه خوراک، پرسنل و وسایل نقلیه از تونل‌های مکانیزه ضدعفونی اشعه UV و مه‌پاش‌های ازن عبور می‌کند.'
                : currentLang === 'ar'
                ? 'تقع مزارع سلامة راشين في منطقة طبيعية معزولة تبعد أكثر من 60 كم عن أي تجمعات حيوانية أخرى. تخضع كافة المركبات والمواد والأفراد لغرف تعقيم بالأشعة فوق البنفسجية ورذاذ الأوزون قبل الدخول.'
                : 'Situated in a geoclimatic isolation perimeter located 60km away from external livestock density. Every vehicle, feed consignment, and operator must pass through computerized ozone fogging and UV sanitizing disinfection sluices.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className={`rounded-2xl border p-8 space-y-4 ${
                isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-stone-50'
              }`}
            >
              <ThermometerSnowflake className="h-7 w-7 text-[#10b981]" />
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                {currentLang === 'fa' ? 'زنجیره انجماد سریع -۴۰°C' : currentLang === 'ar' ? 'تجميد صاعق -٤٠°C' : '-40°C Cryogenic Blast Freeze'}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                {currentLang === 'fa'
                  ? 'انجماد مولکولی سریع در کمتر از ۹۰ دقیقه، که از تخریب دیواره‌های سلولی جلوگیری کرده و عطر، طعم و بافت میوگلوبین گوشت را تا ۲۴ ماه بدون تغییر حفظ می‌کند.'
                  : 'Fast cryogenic cell lock within 90 minutes preserving tender muscle integrity without crystal formation.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className={`rounded-2xl border p-8 space-y-4 ${
                isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-stone-50'
              }`}
            >
              <Microscope className="h-7 w-7 text-rose-600 dark:text-rose-400" />
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                {currentLang === 'fa' ? 'آزمایشگاه بیوشیمی درون‌مجتمع' : currentLang === 'ar' ? 'مختبر الكيمياء الحيوية الداخلي' : 'On-Site Bio-Chemical Testing'}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                {currentLang === 'fa'
                  ? 'بررسی هر پارت خروجی برای عدم وجود فلزات سنگین، باقیمانده دارویی، بار میکروبی سالمونلا و اشریشیا کلی با صدور برگه COA بین‌المللی.'
                  : 'Continuous batch validation for zero heavy metals, zero hormone residues, and microbial sterility.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.25 }}
              className={`rounded-2xl border p-8 space-y-4 ${
                isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-stone-50'
              }`}
            >
              <Factory className="h-7 w-7 text-rose-500" />
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                {currentLang === 'fa' ? 'بسته‌بندی MAP تحت گاز بی‌اثر' : currentLang === 'ar' ? 'تغليف MAP بالغاز الخامل' : 'Modified Atmosphere Packaging'}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                {currentLang === 'fa'
                  ? 'تخلیه اکسیژن و تزریق گازهای بی‌اثر خوراکی (نیتروژن و دی‌اکسید کربن خوراکی) برای تازگی تا ۲۱ روز در دمای یخچال ۰ تا ۴ درجه.'
                  : 'Food-grade MAP vacuum trays extending prime fresh shelf life to 21 days under strict cold chain.'}
              </p>
            </motion.div>
          </div>

          {/* Direct CTA */}
          <div className="pt-6 text-center">
            <button
              type="button"
              onClick={onNavigateToRfq}
              className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#9b111e] to-[#be123c] px-7 py-4 text-xs sm:text-sm font-bold text-white hover:brightness-110 transition-all cursor-pointer shadow-md"
            >
              <span>{t.actions.requestQuote}</span>
              <ShieldCheck className="h-4 w-4" />
            </button>
          </div>

        </div>
      </motion.section>
    </div>
  );
};
