import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Quote, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  ShieldCheck, 
  Building2, 
  Pause, 
  Play, 
  Award,
  Globe2
} from 'lucide-react';
import { Language } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ClientTestimonialsSliderProps {
  currentLang: Language;
}

interface Testimonial {
  id: string;
  clientName: string;
  role: Record<Language, string>;
  company: string;
  country: Record<Language, string>;
  flag: string;
  commodity: Record<Language, string>;
  contractType: Record<Language, string>;
  rating: number;
  quote: Record<Language, string>;
  metricHighlight: {
    value: string;
    label: Record<Language, string>;
  };
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Tariq Al-Mansoor',
    role: {
      fa: 'مدیر ارشد تأمین زنجیره سرد و هتل‌داری لوکس',
      ar: 'مدير مشتريات سلاسل الضيافة الفاخرة',
      en: 'Senior VP of Cold-Chain & Luxury Hospitality Procurement',
    },
    company: 'Al-Mansoor Gourmet Trading LLC',
    country: {
      fa: 'دبی، امارات متحده عربی',
      ar: 'دبي، الإمارات العربية المتحدة',
      en: 'Dubai, United Arab Emirates',
    },
    flag: '🇦🇪',
    commodity: {
      fa: 'فیله و راسته وکیوم منجمد هوایی',
      ar: 'فيليه النعام الطازج المشحون جوياً',
      en: 'Air-freighted Vacuum Ostrich Tenderloin',
    },
    contractType: {
      fa: 'قرارداد سالانه تأمین هتل‌های ۵ ستاره (۴۵ تن)',
      ar: 'عقد توريد سنوي لسلسلة فنادق 5 نجوم (45 طناً)',
      en: 'Annual 45-Ton Supply Contract (5-Star Hotels)',
    },
    rating: 5,
    quote: {
      fa: 'برای رستوران‌های فاخر دبی، یکنواختی در ضخامت تریم و حفظ خلوص رنگ قرمز بدون حتی یک قطره خونابه اولویت قطعی است. محموله‌های هفتگی سلامت راشین از طریق پروازهای کارگو با بسته‌بندی دمای صفر درجه به دست ما می‌رسد و تست‌های میکروبیولوژی گمرک جبل علی در کمتر از ۶ ساعت ترخیص می‌شوند.',
      ar: 'في قطاع الضيافة الراقية في دبي، ثبات جودة اللحم وعدم وجود أي زفارة ونقاء اللون الأحمر القاني أمر لا مساومة عليه. تصلنا شحنات سلامة راشين أسبوعياً عبر الشحن الجوي المبرد بأعلى درجات الالتزام بالمعايير الصحية والذبح الحلال المعتمد.',
      en: 'For Dubai’s ultra-luxury culinary scene, muscle tenderloin consistency and strict zero-purge vacuum sealing are non-negotiable. Salamat Rashin delivers our weekly consignments via direct cold air freight with flawless microbiological records, clearing customs clearance within hours.',
    },
    metricHighlight: {
      value: '< 4h',
      label: {
        fa: 'سرعت ترخیص گمرکی با مدارک استاندارد',
        ar: 'زمن التخليص بموجب الشهادات المعتمدة',
        en: 'DXB customs clearance turnaround',
      },
    },
  },
  {
    id: 't-2',
    clientName: 'Dr. Salim Al-Harthy',
    role: {
      fa: 'مدیر تضمین کیفیت و فرمولاسیون فراورده‌های بیولوژیک',
      ar: 'رئيس قسم ضبط الجودة والصناعات الصيدلانية',
      en: 'Director of Quality Assurance & Biological Formulations',
    },
    company: 'Gulf Phytocare Pharmaceutical Labs',
    country: {
      fa: 'مسقط، پادشاهی عمان',
      ar: 'مسقط، سلطنة عُمان',
      en: 'Muscat, Sultanate of Oman',
    },
    flag: '🇴🇲',
    commodity: {
      fa: 'روغن شترمرغ دارویی خالص گرید BP',
      ar: 'زيت النعام الطبي عالي النقاوة (درجة BP)',
      en: 'Pharmaceutical Pure Ostrich Lipids (BP Grade)',
    },
    contractType: {
      fa: 'تأمین مستمر مواد اولیه لوسیون‌های درمانی و ضددرد',
      ar: 'توريد دوري لمستحضرات علاج المفاصل والجلد',
      en: 'Bespoke Bio-Active Active Pharmaceutical Ingreident (API)',
    },
    rating: 5,
    quote: {
      fa: 'تیم بیوشیمی آزمایشگاه ما هر پارت روغن دریافتی از سلامت راشین را با دستگاه گازکروماتوگرافی (GC-MS) مورد سنجش قرار می‌دهد. خلوص بالای ۷۲ درصدی اسیدهای چرب امگا ۳، ۶ و ۹ و عدم وجود کوچک‌ترین باقیمانده حلال‌های شیمیایی، استاندارد اروپایی فارماکوپه را کاملاً محقق ساخته است.',
      ar: 'يقوم مختبرنا الصيدلاني بتحليل كروماتوغرافيا الغاز لكل دفعة زيت نعام من سلامة راشين. النقاء الاستثنائي الذي يتجاوز 72٪ من أوميغا 3 و6 و9 مع انعدام المذيبات الكيميائية تماماً جعلهم شريكنا المفضل في مستحضراتنا الدوائية.',
      en: 'Our chromatography labs rigorously validate each lipid consignment via GC-MS. Salamat Rashin consistently achieves over 72% bioavailable Omega 3-6-9 profiles with absolute zero solvent residues, comfortably fulfilling European Pharmacopoeia standards.',
    },
    metricHighlight: {
      value: '72.4%',
      label: {
        fa: 'خلوص اسیدهای چرب غیراشباع تأییدشده',
        ar: 'نسبة الأحماض الدهنية غير المشبعة الموثقة',
        en: 'Certified Omega 3-6-9 purity concentration',
      },
    },
  },
  {
    id: 't-3',
    clientName: 'Matteo Bellini',
    role: {
      fa: 'مدیر ارشد طراحی و تأمین متریال چرم‌های اگزوتیک',
      ar: 'مدير التوريد والجلود النادرة لعلامات الأزياء',
      en: 'Head of Exotic Leather Procurement & Master Tannery',
    },
    company: 'Montebello Pelli Pregiate S.r.l.',
    country: {
      fa: 'فلورانس، ایتالیا',
      ar: 'فلورنسا، إيطاليا',
      en: 'Florence / Milan, Italy',
    },
    flag: '🇮🇹',
    commodity: {
      fa: 'پوست و چرم کراون پترن گرید A با گواهی سایتس',
      ar: 'جلود النعام الطبيعية الفاخرة المعتمدة لدى سايتس',
      en: 'Grade-A Crown Ostrich Hides with CITES Passports',
    },
    contractType: {
      fa: 'قرارداد فصلی صادرات پوست اشباع‌شده لوکس',
      ar: 'عقد استيراد موسمي لجلود الإكسسوارات الفاخرة',
      en: 'Quarterly Export Consignments for Luxury Goods',
    },
    rating: 5,
    quote: {
      fa: 'برجستگی یکنواخت فولیکول‌های پر (Crown Pearl Pattern) و عدم وجود هرگونه جای زخم یا آسیب ناشی از سیم‌خاردار روی پوست‌ها نشان‌دهنده استانداردهای کم‌نظیر پرورش در مزارع باز سلامت راشین است. مدارک CITES نیز ورود بی‌دردسر این چرم‌ها به اتحادیه اروپا را تضمین کرده است.',
      ar: 'انتظام الحويصلات اللؤلؤية ونظافة الجلد التامة من أي خدوش تدل على الرعاية الفائقة والمراعي المفتوحة في مزارع راشين. كما أن شهادات سايتس المرفقة جعلت إجراءات الدخول للموانئ الأوروبية سلسة وخالية من أي تعقيد.',
      en: 'The quill follicle uniformity across the central crown diamond and pristine hide surfaces confirm superior pasture-grazing practices. Salamat Rashin’s impeccable CITES documentation ensures zero friction at European customs borders.',
    },
    metricHighlight: {
      value: '100%',
      label: {
        fa: 'انطباق با کنوانسیون CITES ژنو سوئیس',
        ar: 'مطابقة تامة لاتفاقية سايتس الدولية',
        en: 'Compliant CITES Geneva conservation clearance',
      },
    },
  },
  {
    id: 't-4',
    clientName: 'Fahad Al-Kuwari',
    role: {
      fa: 'مدیر کل زنجیره توزیع گوشت و پروتئین ویژه هایپرمارکت‌ها',
      ar: 'مدير قطاع اللحوم في شبكة الهايبرماركت الفاخرة',
      en: 'Director of Premium Meat Sourcing & Retail Distribution',
    },
    company: 'Al-Rayyan Premium Gourmet Network',
    country: {
      fa: 'دوحه، قطر',
      ar: 'الدوحة، دولة قطر',
      en: 'Doha, State of Qatar',
    },
    flag: '🇶🇦',
    commodity: {
      fa: 'بسته‌های MAP خرده‌فروشی گوشت و استیک شترمرغ',
      ar: 'عبوات لحم النعام المجهزة للبيع بالتجزئة (MAP)',
      en: 'Retail-Ready Modified Atmosphere Steaks & Cuts',
    },
    contractType: {
      fa: 'تأمین هفتگی قفسه‌های پروتئین سلامت‌محور',
      ar: 'عقد توريد أسبوعي للمنتجات الصحية والرياضية',
      en: 'Weekly Scheduled Air Consolidation (Doha Hamad)',
    },
    rating: 5,
    quote: {
      fa: 'مشتریان ما در دوحه به دنبال گوشت قرمز بدون چربی برای رژیم‌های قلبی و ورزشی هستند. گوشت سلامت راشین با ماندگاری ۲۱ روزه تحت گاز بی‌اثر و ذبح شرعی با نظارت رسمی حلال، پرفروش‌ترین برند پروتئینی ویژه فروشگاه‌های ما در سال جاری شده است.',
      ar: 'يبحث عملاؤنا في الدوحة عن لحوم حمراء صحية خالية من الكوليسترول. بفضل تغليف الغاز الخامل الذي يمنح صلاحية 21 يوماً طازجة والذبح الشرعي الموثوق، أصبحت منتجات راشين الأكثر طلباً في أقسام التغذية الصحية لدينا.',
      en: 'Our Qatari clientele continually seeks cardiologist-recommended lean red meats. Salamat Rashin’s 21-day fresh MAP trays and certified Halal authenticity have made them our highest-performing premium protein vendor this season.',
    },
    metricHighlight: {
      value: '21 Days',
      label: {
        fa: 'ماندگاری تازه یخچال با بسته‌بندی اتمسفر اصلاح‌شده',
        ar: 'صلاحية اللحم الطازج تحت التبريد المباشر',
        en: 'Fresh chilled shelf-life under 0-4°C MAP',
      },
    },
  },
];

export const ClientTestimonialsSlider: React.FC<ClientTestimonialsSliderProps> = ({ currentLang }) => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const total = TESTIMONIALS_DATA.length;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Auto-play timer
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 7500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex, isPaused]);

  const currentItem = TESTIMONIALS_DATA[currentIndex];

  const sectionHeadings = {
    fa: {
      badge: 'اعتبار تجاری و نظرات شرکای بین‌المللی',
      title: 'روایت اعتماد بازرگانان و زنجیره‌های تأمین جهانی به سلامت راشین',
      subtitle: 'دیدگاه مدیران ارشد خرید، آزمایشگاه‌های دارویی و خانه مد اروپا درباره کیفیت گوشت، روغن و چرم صادراتی ما',
      verifiedPartner: 'قرارداد تجاری تاییدشده B2B',
      autoPlay: 'توقف / پخش اسلایدر',
    },
    ar: {
      badge: 'آراء وشهادات الشركاء الدوليين',
      title: 'ماذا يقول كبار المستوردين وسلاسل التوريد عن سلامة راشين؟',
      subtitle: 'انطباعات مدراء المشتريات ومختبرات الأدوية في الخليج وأوروبا حول دقة معاييرنا والتزامنا بالسلامة والجودة',
      verifiedPartner: 'عقد تجاري موثق دولياً B2B',
      autoPlay: 'إيقاف / تشغيل العرض التلقائي',
    },
    en: {
      badge: 'INTERNATIONAL CLIENT TESTIMONIALS',
      title: 'Trusted by Premier B2B Importers & Supply Chains Worldwide',
      subtitle: 'Hear from executive procurement directors, pharmaceutical laboratories, and luxury ateliers relying on our export-grade ostrich commodities.',
      verifiedPartner: 'Verified B2B Export Contract',
      autoPlay: 'Pause / Resume Slider',
    },
  }[currentLang];

  return (
    <section 
      className={`w-full py-24 lg:py-32 border-b transition-colors relative overflow-hidden ${
        isDark ? 'border-white/10 bg-[#0b0c0e]' : 'border-stone-200 bg-[#f9f8f5]'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Crest Ambient Tint */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-rose-900/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-14 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-white/10">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest">
              <Award className="h-4 w-4" />
              <span>{sectionHeadings.badge}</span>
            </div>
            <h2 className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-[1.3] ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}>
              {sectionHeadings.title}
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-[#c4c8d0]' : 'text-stone-600'}`}>
              {sectionHeadings.subtitle}
            </p>
          </div>

          {/* Slider Controls Top Bar on desktop */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors cursor-pointer ${
                isDark 
                  ? 'border-white/10 bg-white/5 text-stone-300 hover:text-white hover:bg-white/10' 
                  : 'border-stone-300 bg-white text-stone-700 hover:text-stone-950 hover:bg-stone-100 shadow-xs'
              }`}
              title={sectionHeadings.autoPlay}
              aria-label={sectionHeadings.autoPlay}
            >
              {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all cursor-pointer ${
                  isDark 
                    ? 'border-white/10 bg-[#16181b] text-white hover:border-rose-500/50 hover:bg-rose-950/30' 
                    : 'border-stone-300 bg-white text-stone-800 hover:border-rose-400 hover:bg-rose-50 shadow-xs'
                }`}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all cursor-pointer ${
                  isDark 
                    ? 'border-white/10 bg-[#16181b] text-white hover:border-rose-500/50 hover:bg-rose-950/30' 
                    : 'border-stone-300 bg-white text-stone-800 hover:border-rose-400 hover:bg-rose-50 shadow-xs'
                }`}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Framer Motion Slider Stage */}
        <div className="relative min-h-[460px] sm:min-h-[380px] lg:min-h-[340px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentItem.id}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-3xl border p-8 sm:p-12 lg:p-14 relative shadow-xl transition-colors ${
                isDark 
                  ? 'border-white/10 bg-[#121417]/90 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
                  : 'border-stone-200 bg-white text-stone-900 shadow-[0_15px_40px_rgba(0,0,0,0.06)]'
              }`}
            >
              {/* Giant Translucent Ruby Red Quote Watermark */}
              <Quote className="absolute top-6 end-8 h-24 w-24 sm:h-32 sm:w-32 text-rose-600/10 pointer-events-none rtl:rotate-180" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                
                {/* Quote Text & Client Info (8 cols) */}
                <div className="lg:col-span-8 space-y-6 sm:space-y-8">
                  
                  {/* Verified Contract Badge & Commodity Meta */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>{sectionHeadings.verifiedPartner}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 px-3 py-1 text-xs font-semibold text-rose-600 dark:text-rose-400">
                      <span>{currentItem.commodity[currentLang]}</span>
                    </span>

                    <div className="flex items-center gap-1 text-amber-500 ps-2">
                      {[...Array(currentItem.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Main Quote Text */}
                  <blockquote className={`text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed sm:leading-loose ${
                    isDark ? 'text-neutral-100' : 'text-stone-800'
                  }`}>
                    &ldquo;{currentItem.quote[currentLang]}&rdquo;
                  </blockquote>

                  {/* Author / Client Profile Footer */}
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#9b111e] to-[#be123c] text-white font-bold text-lg shadow-md">
                      {currentItem.flag}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-base sm:text-lg font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                          {currentItem.clientName}
                        </span>
                        <span className="text-xs text-stone-500 font-mono">({currentItem.country[currentLang]})</span>
                      </div>
                      <p className="text-xs sm:text-sm text-rose-600 dark:text-rose-400 font-medium">
                        {currentItem.role[currentLang]} &mdash; <span className={isDark ? 'text-stone-300' : 'text-stone-700'}>{currentItem.company}</span>
                      </p>
                      <p className={`text-[11px] ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                        {currentItem.contractType[currentLang]}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Metric Callout Card (4 cols) */}
                <div className="lg:col-span-4">
                  <div className={`rounded-2xl border p-6 sm:p-8 space-y-4 text-center ${
                    isDark ? 'border-rose-900/40 bg-[#170e12]' : 'border-rose-200 bg-rose-50/50'
                  }`}>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 block">
                      PERFORMANCE RECORD
                    </span>
                    <div className="font-mono text-4xl sm:text-5xl font-black text-rose-600 dark:text-rose-400 py-1">
                      {currentItem.metricHighlight.value}
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#c4c8d0]' : 'text-stone-600'}`}>
                      {currentItem.metricHighlight.label[currentLang]}
                    </p>
                    <div className="pt-2 border-t border-rose-500/20 flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
                      <Globe2 className="h-3.5 w-3.5 text-rose-500" />
                      <span>{currentItem.company}</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Pagination Dots & Slide Counter */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2.5">
            {TESTIMONIALS_DATA.map((tItem, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={tItem.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-10 bg-gradient-to-r from-[#9b111e] to-[#be123c]'
                      : isDark
                        ? 'w-2.5 bg-white/20 hover:bg-white/40'
                        : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>

          <span className="font-mono text-xs text-stone-400">
            0{currentIndex + 1} / 0{total}
          </span>
        </div>

      </div>
    </section>
  );
};
