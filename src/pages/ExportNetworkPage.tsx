import React from 'react';
import { motion } from 'motion/react';
import { Language, ExportDestination } from '../types';
import { TRANSLATIONS } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { PageHeader } from '../components/PageHeader';
import { ExportGlobalMap } from '../components/ExportGlobalMap';
import { ExportFaqAccordion } from '../components/ExportFaqAccordion';
import { Plane, ShieldCheck, FileText } from 'lucide-react';

interface ExportNetworkPageProps {
  currentLang: Language;
  onNavigateHome: () => void;
  onOpenRfqForDestination: (dest: ExportDestination) => void;
}

export const ExportNetworkPage: React.FC<ExportNetworkPageProps> = ({
  currentLang,
  onNavigateHome,
  onOpenRfqForDestination,
}) => {
  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHeader
        currentLang={currentLang}
        badge="INTERNATIONAL LOGISTICS & EXPORT CORRIDORS"
        title={t.exportSection.title}
        subtitle={t.exportSection.subtitle}
        onNavigateHome={onNavigateHome}
        currentPageName={t.nav.exportNetwork}
      />

      {/* Main Interactive Logistics Corridors Component */}
      <ExportGlobalMap
        currentLang={currentLang}
        onOpenRfqForDestination={onOpenRfqForDestination}
      />

      {/* Export Protocol & Customs Clearance Assurance with generous padding */}
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
              EXPORT COMPLIANCE STANDARD OPERATING PROCEDURE (SOP)
            </span>
            <h2 className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-[1.3] ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}>
              {currentLang === 'fa'
                ? 'تضمین تشریفات گمرکی، قرنطینه دامی و اسناد رسمی ترانزیت بین‌المللی'
                : currentLang === 'ar'
                ? 'ضمانات التخليص الجمركي والحجر البيطري ووثائق الشحن الدولي'
                : 'Expedited Customs Clearance, Sanitary Passports & Transit Guarantees'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className={`rounded-2xl border p-8 space-y-4 ${
                isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-xs'
              }`}
            >
              <ShieldCheck className="h-7 w-7 text-[#10b981]" />
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                {currentLang === 'fa' ? 'گواهی بین‌المللی دامپزشکی (Veterinary Health)' : currentLang === 'ar' ? 'الشهادة الصحية البيطرية الدولية' : 'Official Veterinary Sanitary Passports'}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                {currentLang === 'fa'
                  ? 'صدور آنی گواهی سلامت رسمی از سازمان دامپزشکی کل کشور ممهور به بارکد استعلام دیجیتال در گمرکات مبدأ و مقصد.'
                  : 'QR-coded digital quarantine credentials issued by national veterinary authorities for seamless border entry.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className={`rounded-2xl border p-8 space-y-4 ${
                isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-xs'
              }`}
            >
              <FileText className="h-7 w-7 text-rose-600 dark:text-rose-400" />
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                {currentLang === 'fa' ? 'اسناد حلال و منشأ اتاق بازرگانی' : currentLang === 'ar' ? 'شهادة الحلال وشهادة المنشأ الرسمية' : 'Halal World & Chamber Certificate of Origin'}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                {currentLang === 'fa'
                  ? 'تأییدیه شرعی مجمع جهانی حلال و فاکتور تجاری و گواهی مبدأ لگالایز شده توسط سفارتخانه‌ها و کنسولگری‌های کشور مقصد.'
                  : 'Embossed Halal authenticity certificates legalised by destination embassies and chamber of commerce.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.25 }}
              className={`rounded-2xl border p-8 space-y-4 ${
                isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-xs'
              }`}
            >
              <Plane className="h-7 w-7 text-rose-500" />
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                {currentLang === 'fa' ? 'سرویس چارتر و پایش ماهواره‌ای دما' : currentLang === 'ar' ? 'رحلات مبردة وتتبع فضائي لدرجات الحرارة' : 'Satellite Telemetry & Thermal Data Loggers'}
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                {currentLang === 'fa'
                  ? 'دیتالاگرهای ثبت پیوسته دمایی در هر کارتن و کانتینر جهت تضمین عدم نوسان زنجیره سرد از درب کارخانه تا انبار خریدار.'
                  : 'Continuous GPS-linked thermal data recording inserted into each pallet ensuring temperature chain sanctity.'}
              </p>
            </motion.div>
          </div>

        </div>
      </motion.section>

      {/* International Logistics & Trade Compliance Accordion FAQ */}
      <ExportFaqAccordion
        currentLang={currentLang}
        defaultCategory="logistics"
        badgeOverride={
          currentLang === 'fa' 
            ? 'پرسش‌های متداول زنجیره سرد، ترانزیت و ترخیص گمرکی' 
            : currentLang === 'ar' 
            ? 'الأسئلة الشائعة حول الشحن والجمارك وسلسلة التبريد' 
            : 'COLD-CHAIN, CUSTOMS & LOGISTICS FAQ'
        }
      />
    </div>
  );
};
