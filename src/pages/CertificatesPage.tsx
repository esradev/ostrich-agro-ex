import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { PageHeader } from '../components/PageHeader';
import { CertificatesSection } from '../components/CertificatesSection';
import { ShieldCheck, FileCheck2, ArrowUpRight } from 'lucide-react';

interface CertificatesPageProps {
  currentLang: Language;
  onNavigateHome: () => void;
  onNavigateToRfq: () => void;
}

export const CertificatesPage: React.FC<CertificatesPageProps> = ({
  currentLang,
  onNavigateHome,
  onNavigateToRfq,
}) => {
  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHeader
        currentLang={currentLang}
        badge="REGULATORY & QUALITY GOVERNANCE"
        title={t.certSection.title}
        subtitle={t.certSection.subtitle}
        onNavigateHome={onNavigateHome}
        currentPageName={t.nav.certificates}
      />

      {/* Main Certificates Grid */}
      <CertificatesSection currentLang={currentLang} />

      {/* Audit & Compliance Standards Detail with generous padding */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full py-24 lg:py-32 border-b transition-colors ${
          isDark ? 'border-white/10 bg-[#0e1012]' : 'border-stone-200 bg-stone-50'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest block">
              PERIODIC THIRD-PARTY SURVEILLANCE AUDITS
            </span>
            <h2 className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-[1.3] ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}>
              {currentLang === 'fa'
                ? 'ممیزی‌های دوره‌ای بین‌المللی و تعهد به ایمنی پایدار زنجیره تأمین'
                : currentLang === 'ar'
                ? 'التدقيق الدوري الدولي والالتزام بالسلامة الغذائية الشاملة'
                : 'Third-Party Laboratory Auditing & Continuous Compliance'}
            </h2>
            <p className={`pt-2 text-base sm:text-lg leading-relaxed sm:leading-loose ${
              isDark ? 'text-[#c4c8d0]' : 'text-stone-600'
            }`}>
              {currentLang === 'fa'
                ? 'کلیه مراحل تولید شترمرغ سلامت راشین تحت بازرسی ماهانه هیئت عالی ممیزی حلال، اداره کل دامپزشکی و ممیزان ایزو قرار دارد تا بالاترین رتبه اطمینان برای مصرف‌کنندگان در حوزه خلیج فارس، اوراسیا و اتحادیه اروپا فراهم گردد.'
                : currentLang === 'ar'
                ? 'تخضع جميع مراحل الإنتاج في سلامة راشين للرقابة المستمرة من قبل لجان التفتيش الشرعي وهيئات سلامة الغذاء الدولية لضمان أعلى معايير الجودة لشركائنا التجاريين.'
                : 'Every production stage is audited under strict surveillance cycles by accredited European and Halal inspection bodies ensuring uninterrupted security across Gulf and Eurasian supply networks.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className={`rounded-2xl border p-8 sm:p-10 space-y-5 ${
                isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-xs'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400">
                <FileCheck2 className="h-4 w-4" />
                <span>HALAL INTEGRITY ASSURANCE</span>
              </div>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                {currentLang === 'fa' ? 'ذبح شرعی ۱۰۰٪ دستی توسط ذابحین مسلمان' : currentLang === 'ar' ? 'ذبح شرعي يدوي 100٪ بأيدي مسلمين مؤهلين' : '100% Manual Halal Slaughter by Certified Muslim Specialists'}
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed sm:leading-loose ${isDark ? 'text-[#d1d5db]' : 'text-stone-700'}`}>
                {currentLang === 'fa'
                  ? 'بر خلاف مرغداری‌ها یا کشتارگاه‌های صنعتی ماشینی با تیغه‌های خودکار، ذبح تمام شترمرغ‌های سلامت راشین به صورت انفرادی، دستی، با ذکر نام خداوند متعال و رو به قبله توسط ذابحین مورد تایید مرکز استاندارد حلال انجام می‌پذیرد.'
                  : 'Zero mechanical blade slaughters. Every ostrich is dressed individually by hand according to authentic Islamic sharia stipulations under on-site cleric supervision.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className={`rounded-2xl border p-8 sm:p-10 space-y-5 ${
                isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-xs'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400">
                <ShieldCheck className="h-4 w-4" />
                <span>CITES ECOLOGICAL CONSERVATION</span>
              </div>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                {currentLang === 'fa' ? 'مجوز بین‌المللی کنوانسیون گونه‌ها (CITES)' : currentLang === 'ar' ? 'ترخيص اتفاقية سايتس لحماية التجارة البيئية' : 'CITES Captive-Bred Legal Registry'}
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed sm:leading-loose ${isDark ? 'text-[#d1d5db]' : 'text-stone-700'}`}>
                {currentLang === 'fa'
                  ? 'پوست، چرم و پرهای صادراتی سلامت راشین دارای مجوز رسمی منشأ پرورشی بسته (Captive-Bred) تحت ضمایم کنوانسیون CITES بوده و بدون هرگونه مانع گمرکی در تمامی بنادر اروپا و جهان ترخیص می‌گردد.'
                  : 'Fully documented origin certifying captive-bred pedigree status under CITES appendices for frictionless entry into European, US, and Asian customs ports.'}
              </p>
            </motion.div>
          </div>

          <div className="pt-6 text-center">
            <button
              type="button"
              onClick={onNavigateToRfq}
              className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#9b111e] to-[#be123c] px-7 py-4 text-xs sm:text-sm font-bold text-white hover:brightness-110 transition-all cursor-pointer shadow-md"
            >
              <span>{t.actions.requestQuote}</span>
              <ArrowUpRight className="h-4 w-4 rtl:rotate-270 ltr:rotate-0" />
            </button>
          </div>

        </div>
      </motion.section>
    </div>
  );
};
