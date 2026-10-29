import React from 'react';
import { motion } from 'motion/react';
import { Language, ProductItem } from '../types';
import { TRANSLATIONS } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { PageHeader } from '../components/PageHeader';
import { RfqCalculator } from '../components/RfqCalculator';
import { HelpCircle } from 'lucide-react';

interface RfqPageProps {
  currentLang: Language;
  onNavigateHome: () => void;
  preselectedProduct?: ProductItem | null;
  preselectedDestination?: string | null;
}

export const RfqPage: React.FC<RfqPageProps> = ({
  currentLang,
  onNavigateHome,
  preselectedProduct,
  preselectedDestination,
}) => {
  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];

  const faqs = [
    {
      q: {
        fa: 'حداقل مقدار سفارش (MOQ) برای صادرات چقدر است؟',
        ar: 'ما هو الحد الأدنى للطلب (MOQ) للتصدير؟',
        en: 'What is the Minimum Order Quantity (MOQ) for international orders?',
      },
      a: {
        fa: 'برای حمل هوایی گوشت تازه یا تخم بارور، حداقل ۵۰۰ کیلوگرم یا ۱ پالت است. برای حمل دریایی منجمد، حداقل یک کانتینر ۲۰ فوت ریفر (حدود ۵ تن) است.',
        ar: 'للشحن الجوي السريع للحوم الطازجة أو البيض، الحد الأدنى 500 كغم. وللشحن البحري المجمد، حاوية 20 قدم مبردة (حوالي 5 أطنان).',
        en: 'For air-freighted fresh cuts or fertile hatching eggs, 500 kg (1 air cargo pallet). For sea containerized reefer shipments, 1x 20ft container (~5 metric tons).',
      },
    },
    {
      q: {
        fa: 'شرایط پرداخت و گشایش اسناد بانکی به چه صورت است؟',
        ar: 'ما هي شروط الدفع والاعتمادات المستندية المقبولة؟',
        en: 'What payment terms and trade finance instruments are accepted?',
      },
      a: {
        fa: 'پرداخت از طریق اعتبارات اسنادی دیداری (Irrevocable LC at Sight) یا حواله صرافی معتبر در درهم امارات، دلار، یورو و روبل روسیه در بانک‌های دبی، مسقط و مسکو قابل پذیرش است.',
        ar: 'نقبل الاعتمادات المستندية غير القابلة للإلغاء (LC at sight) والتحويلات المصرفية عبر دبي ومسقط بالدرهم الإماراتي، الدولار أو اليورو.',
        en: 'We accept Irrevocable Letters of Credit (LC at sight) or direct bank transfers via our corporate accounts in Dubai (AED/USD) and Muscat (OMR/USD).',
      },
    },
    {
      q: {
        fa: 'آیا امکان سفارش بسته‌بندی با لیبل اختصاصی (Private Label) خریدار وجود دارد؟',
        ar: 'هل يمكن التعبئة والتغليف بعلامة تجارية خاصة بالمشتري (Private Label)؟',
        en: 'Can you provide custom OEM / Private Label packaging for our retail chain?',
      },
      a: {
        fa: 'بله، برای سفارش‌های سالانه بیش از ۲۰ تن، امکان طراحی و چاپ تریم، بارکد و لیبل اختصاصی به زبان کشور مقصد روی بسته‌های وکیوم اسکین و کارتن‌ها مهیا می‌باشد.',
        ar: 'نعم، للطلبيات السنوية التي تتجاوز 20 طناً، نوفر خدمة التغليف بالعلامة التجارية الخاصة بالمشتري واللغة المعتمدة في بلده.',
        en: 'Yes, for annual supply contracts exceeding 20 metric tons, bespoke retail skin-packaging with your brand typography, barcodes, and local regulatory text is fully supported.',
      },
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHeader
        currentLang={currentLang}
        badge="B2B COMMERCIAL CONTRACT DESK"
        title={t.rfqSection.title}
        subtitle={t.rfqSection.subtitle}
        onNavigateHome={onNavigateHome}
        currentPageName={t.nav.rfq}
      />

      {/* Main Interactive RFQ Calculator */}
      <RfqCalculator
        currentLang={currentLang}
        preselectedProduct={preselectedProduct}
        preselectedDestination={preselectedDestination}
      />

      {/* Contract & Ordering FAQs with generous spacing */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full py-24 lg:py-32 border-b transition-colors ${
          isDark ? 'border-white/10 bg-[#0c0d0e]' : 'border-stone-200 bg-white'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest block">
              COMMERCIAL INQUIRY ASSISTANCE
            </span>
            <h2 className={`text-3xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-stone-900'}`}>
              {currentLang === 'fa' ? 'پرسش‌های متداول عقد قراردادهای صادراتی' : currentLang === 'ar' ? 'الأسئلة الشائعة حول التعاقد والتصدير' : 'B2B Export FAQ & Trade Terms'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-2xl border p-8 space-y-4 transition-colors ${
                  isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-stone-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-6 w-6 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  <h3 className={`text-base font-bold leading-snug ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    {faq.q[currentLang]}
                  </h3>
                </div>
                <p className={`text-xs sm:text-sm leading-relaxed ps-9 ${isDark ? 'text-[#c4c8d0]' : 'text-stone-600'}`}>
                  {faq.a[currentLang]}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>
    </div>
  );
};
