import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { PageHeader } from '../components/PageHeader';
import { HealthLabComparison } from '../components/HealthLabComparison';
import { HeartPulse, Stethoscope, Sparkles, Activity, ArrowUpRight } from 'lucide-react';

interface NutritionLabPageProps {
  currentLang: Language;
  onNavigateHome: () => void;
  onNavigateToRfq: () => void;
}

export const NutritionLabPage: React.FC<NutritionLabPageProps> = ({
  currentLang,
  onNavigateHome,
  onNavigateToRfq,
}) => {
  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];

  const applications = [
    {
      icon: HeartPulse,
      title: {
        fa: 'رژیم‌های تخصصی سلامت قلب و عروق',
        ar: 'الأنظمة الغذائية لصحة القلب',
        en: 'Cardiovascular Longevity Diets',
      },
      desc: {
        fa: 'با کلسترول کمتر از ۶۲mg در ۱۰۰ گرم (۳۲٪ کمتر از گوشت گوساله و حتی کمتر از سینه مرغ) و چربی زیر ۲٪، توسط انجمن قلب آمریکا به عنوان گوشت قرمز ایده‌آل برای بیماران قلبی تایید شده است.',
        ar: 'مع نسبة كوليسترول تقل عن 62 ملغ (أقل من لحم العجل بـ 32٪ وأقل من الدجاج)، يعد خياراً مثالياً لمرضى القلب وارتفاع ضغط الدم.',
        en: 'Delivering under 62mg cholesterol per 100g (32% less than lean beef and lower than chicken), it is endorsed by international cardiologists.',
      },
    },
    {
      icon: Stethoscope,
      title: {
        fa: 'تسکین آرتروز، دردهای روماتیسمی و مفاصل',
        ar: 'علاج آلام المفاصل والتهاب الروماتيزم',
        en: 'Rheumatoid Arthritis & Musculoskeletal Relief',
      },
      desc: {
        fa: 'اسید اولئیک غلیظ (امگا ۹) با نفوذ سریع از سد پوستی استراتوم کورنئوم، فاکتورهای ضدالتهابی طبیعی را مستقیماً به بافت‌های عمقی مفاصل و غضروف‌ها می‌رساند.',
        ar: 'بفضل قدرة حمض الأوليك على اختراق طبقات الجلد العميقة، يعمل زيت النعام كمضاد التهاب طبيعي فوري للغضاريف والمفاصل الملتهبة.',
        en: 'Concentrated Omega-9 transports bioactive lipid anti-inflammatories deep across the stratum corneum barrier to relieve joint inflammation.',
      },
    },
    {
      icon: Sparkles,
      title: {
        fa: 'ترمیم اگزما، پسوریازیس و فرمولاسیون لوکس آرایشی',
        ar: 'ترميم الإكزيما وقاعدة المستحضرات التجميلية',
        en: 'Eczema Barrier Repair & Luxury Skincare Base',
      },
      desc: {
        fa: 'فاقد هرگونه کومدوژنیک (Non-Comedogenic) با توانایی ترمیم سد لیپیدی آسیب‌دیده پوست بدون انسداد منافذ. به عنوان پایه کرم‌های لیفتینگ و جوان‌ساز در سوئیس و فرانسه مصرف دارد.',
        ar: 'غير مسد للمسام تماماً (Non-Comedogenic) ومثالي لترميم حاجز البشرة المتضرر دون أي أثر دهني، ويستخدم كقاعدة لسيرومات مكافحة التجاعيد.',
        en: 'Zero comedogenicity rating mimicking natural human sebum, used in premier Swiss and French cosmetic laboratories as an anti-aging lipid base.',
      },
    },
    {
      icon: Activity,
      title: {
        fa: 'تغذیه ورزشی حرفه‌ای و عضله‌سازی بدون چربی',
        ar: 'التغذية الرياضية وبناء العضلات الصافية',
        en: 'High-Performance Athletic Lean Mass',
      },
      desc: {
        fa: '۲۴.۲ گرم پروتئین با ارزش بیولوژیکی بالا (BV) در هر ۱۰۰ گرم و ۳.۸ میلی‌گرم آهن هموگلوبین که اکسیژن‌رسانی به عضلات ورزشکاران استقامتی را تا ۴۰٪ افزایش می‌دهد.',
        ar: '24.2غ من البروتين الصافي عالي القيمة الحيوية مع 3.8 ملغ من حديد الهيم لتعزيز تروية العضلات بالأكسجين ورفع اللياقة البدنية.',
        en: '24.2g of high-BV protein per 100g paired with 3.8mg of bioavailable heme iron, maximizing cellular oxygen transport during high-intensity training.',
      },
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHeader
        currentLang={currentLang}
        badge="CLINICAL & BIOCHEMICAL DIVISION"
        title={t.nutritionSection.title}
        subtitle={t.nutritionSection.subtitle}
        onNavigateHome={onNavigateHome}
        currentPageName={t.nav.nutrition}
      />

      {/* Main Interactive Nutritional & Lipid Comparison */}
      <HealthLabComparison currentLang={currentLang} />

      {/* Clinical Applications Grid with generous padding */}
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
              CLINICAL THERAPEUTIC HORIZONS
            </span>
            <h2 className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-[1.3] ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}>
              {currentLang === 'fa'
                ? 'کاربردهای پزشکی و درمانی فرآورده‌های سلامت راشین'
                : currentLang === 'ar'
                ? 'التطبيقات الطبية والعلاجية لمنتجات سلامة راشين'
                : 'Empirical Clinical & Cosmetic Applications'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {applications.map((app, idx) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`rounded-2xl border p-8 sm:p-10 space-y-5 transition-colors ${
                    isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                      {app.title[currentLang]}
                    </h3>
                  </div>

                  <p className={`text-sm sm:text-base leading-relaxed sm:leading-loose ${isDark ? 'text-[#d1d5db]' : 'text-stone-700'}`}>
                    {app.desc[currentLang]}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Action CTA */}
          <div className="pt-6 text-center">
            <button
              type="button"
              onClick={onNavigateToRfq}
              className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#9b111e] to-[#be123c] px-7 py-4 text-xs sm:text-sm font-bold text-white hover:brightness-110 transition-all cursor-pointer shadow-md"
            >
              <span>{currentLang === 'fa' ? 'استعلام قیمت محصولات دارویی و گوشت سلامت' : currentLang === 'ar' ? 'طلب عرض أسعار الزيوت واللحوم الصحية' : 'Request Medical/Nutritional Supply Quote'}</span>
              <ArrowUpRight className="h-4 w-4 rtl:rotate-270 ltr:rotate-0" />
            </button>
          </div>

        </div>
      </motion.section>
    </div>
  );
};
