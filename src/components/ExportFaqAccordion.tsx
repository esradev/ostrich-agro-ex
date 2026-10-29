import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  ShieldCheck, 
  Plane, 
  Package, 
  CreditCard, 
  FileText,
  MessageCircleQuestion,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';
import { useTheme } from '../context/ThemeContext';

export type FaqCategory = 'all' | 'products' | 'logistics' | 'compliance' | 'commercial';

interface FaqItem {
  id: string;
  category: 'products' | 'logistics' | 'compliance' | 'commercial';
  question: Record<Language, string>;
  answer: Record<Language, string>;
  highlightMetric?: {
    value: string;
    label: Record<Language, string>;
  };
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-moq',
    category: 'commercial',
    question: {
      fa: 'حداقل مقدار سفارش (MOQ) و شرایط محموله‌های صادراتی چگونه تعیین می‌شود؟',
      ar: 'ما هو الحد الأدنى للطلب (MOQ) وشروط الشحنات التصديرية؟',
      en: 'What is the Minimum Order Quantity (MOQ) and shipment terms for export orders?',
    },
    answer: {
      fa: 'برای ارسال محموله‌های تازه گوشت هوایی یا تخم‌های نطفه‌دار، حداقل سفارش ۵۰۰ کیلوگرم (معادل یک پالت ایرکارگو استاندارد ULD) است. برای سفارش‌های دریایی گوشت منجمد، حداقل مقدار یک کانتینر ۲۰ فوت ریفر یخچال‌دار (حدود ۵ تا ۶ تن) و برای روغن خالص شترمرغ، حداقل سفارش ۵۰ لیتر در گالن‌های بهداشتی است.',
      ar: 'للشحن الجوي السريع للحوم الطازجة أو بيض التفقيس، الحد الأدنى 500 كغم (حاوية باليت جوي ULD). للشحنات البحرية المجمدة، حاوية 20 قدم مبردة (حوالي 5 إلى 6 أطنان). ولزيت النعام النقي، الحد الأدنى 50 لتراً في عبوات صحية محكمة.',
      en: 'For fresh air-freighted cuts or hatching eggs, the MOQ is 500 kg (1 standardized air cargo ULD pallet). For sea containerized frozen consignments, the MOQ is 1x 20ft reefer container (~5 to 6 metric tons). For pure pharmaceutical oil, MOQ is 50 liters in UN-certified food-grade drums.',
    },
    highlightMetric: {
      value: '500 Kg',
      label: {
        fa: 'حداقل سفارش محموله هوایی تازه',
        ar: 'الحد الأدنى للشحن الجوي',
        en: 'Air-freight fresh MOQ pallet',
      },
    },
  },
  {
    id: 'faq-shelf-life',
    category: 'products',
    question: {
      fa: 'ماندگاری گوشت تازه و منجمد در شرایط زنجیره سرد صادراتی چقدر است؟',
      ar: 'ما هي مدة صلاحية لحم النعام الطازج والمجمد تحت سلسلة التبريد؟',
      en: 'What is the shelf life of fresh and frozen ostrich meat under cold-chain standards?',
    },
    answer: {
      fa: 'گوشت تازه سلامت راشین در بسته‌بندی اتمسفر اصلاح‌شده (MAP) یا وکیوم اسکین در دمای ۰ تا ۴ درجه سانتی‌گراد تا ۲۱ روز تازگی ارگانولپتیک خود را حفظ می‌کند. برای گوشت منجمد با فناوری انجماد سریع برودتی (-۴۰°C IQF Cryogenic)، ماندگاری بدون افت بافت و طعم تا ۲۴ ماه با تضمین عدم ایجاد کریستال سلولی گواهی شده است.',
      ar: 'يحتفظ اللحم الطازج بصلاحيته لمدة 21 يوماً في عبوات الغاز الخامل (MAP) عند درجة حرارة 0 إلى 4 درجات مئوية. أما اللحم المجمد بتقنية التجميد الصاعق (-40°C IQF)، فتصل صلاحيته إلى 24 شهراً مع احتفاظ كامل بالقيمة الغذائية والنكهة الأصلية.',
      en: 'Fresh chilled cuts packaged under Modified Atmosphere Packaging (MAP) or vacuum-skin maintain supreme organoleptic freshness for 21 days at 0-4°C. Cryogenically blast-frozen meat (-40°C IQF) carries a verified 24-month frozen shelf-life with zero cellular moisture loss or freezer burn.',
    },
    highlightMetric: {
      value: '21 Days / 24 Mo.',
      label: {
        fa: 'ماندگاری تازه (MAP) / منجمد کریوجنیک',
        ar: 'صلاحية الطازج المبرد / المجمد الصاعق',
        en: 'Chilled MAP / IQF frozen duration',
      },
    },
  },
  {
    id: 'faq-halal-sanitary',
    category: 'compliance',
    question: {
      fa: 'گواهی ذبح شرعی حلال و نظارت بهداشتی دامپزشکی چگونه اثبات می‌شود؟',
      ar: 'كيف يتم توثيق الذبح الحلال والشهادات الصحية والبيطرية الدولية؟',
      en: 'How are certified Halal slaughter authenticity and veterinary health validated?',
    },
    answer: {
      fa: 'تمامی پرندگان سلامت راشین به صورت انفرادی، ۱۰۰٪ دستی و با ذکر نام خداوند توسط ذابحین مسلمان مجرب کشتار می‌شوند. هر محموله همراه با گواهینامه معتبر مجمع جهانی حلال (Halal World)، گواهی سلامت قرنطینه دامی سازمان دامپزشکی کل کشور و برگه آنالیز میکروبیولوژی آزمایشگاهی تاییدشده ارسال می‌گردد.',
      ar: 'تخضع كافة الطيور لذبح شرعي يدوي 100٪ بأيدي ذابحين مسلمين مرخصين. ترفق مع كل شحنة شهادة حلال معتمدة من الهيئات الإسلامية الدولية، شهادة بيطرية رسمية صادرة من وزارة الزراعة، وبطاقة فحص مخبري لكافة المعايير البكتيرية والجرثومية.',
      en: 'Zero automated blades are utilized. Every bird is individually slaughtered by hand according to strict Islamic Sharia tenets by qualified Muslim specialists under resident supervisor oversight. Each container arrives with Halal World credentials, official National Veterinary Sanitary passports, and ISO-17025 lab microbiology reports.',
    },
    highlightMetric: {
      value: '100% Halal',
      label: {
        fa: 'ذبح شرعی دستی با نظارت مستقیم',
        ar: 'ذبح شرعي يدوي معتمد دولياً',
        en: 'Certified manual sharia slaughter',
      },
    },
  },
  {
    id: 'faq-cites-leather',
    category: 'compliance',
    question: {
      fa: 'آیا صادرات پوست و چرم شترمرغ نیازمند مجوز بین‌المللی کنوانسیون سایتس (CITES) است؟',
      ar: 'هل يتطلب تصدير جلود وريش النعام تراخيص اتفاقية سايتس (CITES) الدولية؟',
      en: 'Do raw or tanned ostrich leather and feather exports require CITES clearance?',
    },
    answer: {
      fa: 'بله، شترمرغ جزو گونه‌های تحت حفاظت کنوانسیون بین‌المللی CITES قرار دارد. مزارع سلامت راشین به عنوان مجموعه پرورش در اسارت (Captive-Bred) در دبیرخانه سایتس ژنو ثبت رسمی شده و برای کلیه محموله‌های چرم و پر، پاسپورت تجاری CITES ضمیمه می‌شود تا ترخیص در بنادر اروپا، آمریکا و آسیا بدون کوچک‌ترین معطلی قانونی صورت پذیرد.',
      ar: 'نعم، تخضع منتجات النعام لاتفاقية سايتس. مزارعنا مسجلة رسمياً كمنشأة تربية وإكثار بالأسر (Captive-Bred) لدى سكرتارية سايتس في جنيف، وتصدر كافة شحنات الجلود والريش مصحوبة بجوازات سايتس الرسمية لضمان الدخول الفوري لكافة الموانئ العالمية.',
      en: 'Yes, Struthio camelus is registered under CITES Appendices. Salamat Rashin is an accredited sovereign captive-breeding estate legally documented with the CITES Secretariat in Geneva. Every consignment of ostrich hides and plumages includes certified CITES export permits guaranteeing friction-free entry through EU, US, and Asian customs.',
    },
    highlightMetric: {
      value: 'CITES Reg.',
      label: {
        fa: 'ثبت رسمی در کنوانسیون ژنو سوئیس',
        ar: 'تسجيل معتمد لدى اتفاقية سايتس',
        en: 'Geneva CITES legal compliance',
      },
    },
  },
  {
    id: 'faq-cold-chain-tracking',
    category: 'logistics',
    question: {
      fa: 'پایش و حفظ دمای زنجیره سرد در طول مسیر ترانزیت هوایی و دریایی چگونه تضمین می‌شود؟',
      ar: 'كيف يتم ضمان ومراقبة درجات حرارة سلسلة التبريد أثناء النقل الجوي والبحري؟',
      en: 'How is cold-chain thermal integrity monitored and guaranteed during ocean and air transit?',
    },
    answer: {
      fa: 'در کلیه بسته‌ها و پالت‌های صادراتی، دیتالاگرهای دیجیتال ماهواره‌ای با ثبت لحظه‌ای دما و رطوبت (NFC / USB Data Loggers) قرار داده می‌شود. خریدار در زمان تحویل می‌تواند با اسکن دیتالاگر، گراف کامل دمایی مسیر از درب کشتارگاه تا انبار مقصد را مشاهده نماید. همچنین کانتینرهای ریفر به ژنراتورهای پشتیبان مجهز هستند.',
      ar: 'نستخدم مسجلات درجات حرارة رقمية (Data Loggers) في كل حاوية وباليت لقياس ومراقبة درجات الحرارة والرطوبة كل 10 دقائق. يستطيع المشتري فور وصول الشحنة مسح التقرير والتأكد من عدم حدوث أي انقطاع في سلسلة التبريد طوال مدة الرحلة.',
      en: 'Every pallet and container incorporates synchronized multi-sensor digital thermal loggers (NFC/USB). Upon arrival, buyers receive instant minute-by-minute cold-chain telemetry proof verifying continuous -18°C frozen or 0-4°C chilled maintenance from plant dispatch to destination port gate.',
    },
    highlightMetric: {
      value: '24/7 Telemetry',
      label: {
        fa: 'ثبت پیوسته دمایی در طول سفر',
        ar: 'تتبع حراري لحظي عبر الأقمار الصناعية',
        en: 'Continuous thermal tracking proof',
      },
    },
  },
  {
    id: 'faq-payment-incoterms',
    category: 'commercial',
    question: {
      fa: 'روش‌های پرداخت، شرایط ال‌سی (LC) و اینکوترمزهای مورد پذیرش کدامند؟',
      ar: 'ما هي شروط الدفع والاعتمادات المستندية (LC) والمصطلحات التجارية المقبولة؟',
      en: 'What payment terms, Letters of Credit (LC), and Incoterms are accepted?',
    },
    answer: {
      fa: 'ما با کلیه اینکوترمزهای بین‌المللی شامل CIF (بنادر خلیج فارس، ترکیه و اروپا)، FOB (بندرعباس و چابهار) و EXW همکاری می‌کنیم. تسویه حساب از طریق اعتبارات اسنادی دیداری (Irrevocable LC at Sight) یا حواله مستقیم بانکی در بانک‌های امارات متحده عربی (دبی)، عمان (مسقط) و روسیه با ارزهای درهم امارات (AED)، دلار، یورو و روبل انجام می‌پذیرد.',
      ar: 'نعمل وفق كافة شروط التجارة الدولية Incoterms 2020 بما في ذلك CIF و FOB و EXW. نقبل الدفع عبر الاعتمادات المستندية غير القابلة للإلغاء (LC at Sight) والتحويلات المصرفية المباشرة لحساباتنا في دبي ومسقط وموسكو بالدرهم الإماراتي، الدولار أو اليورو.',
      en: 'We operate under Incoterms 2020 rules: CIF (Jebel Ali, Sohar, Hamad, Mersin, St. Petersburg), FOB (Bandar Abbas / Chabahar), and EXW Agro-Estate. Payments are structured via Irrevocable Letters of Credit (LC at Sight) or direct bank transfers in AED, USD, EUR, or RUB via our treasury desks in Dubai and Muscat.',
    },
    highlightMetric: {
      value: 'LC at Sight',
      label: {
        fa: 'اعتبارات اسنادی معتبر در بانک‌های بین‌المللی',
        ar: 'اعتمادات مستندية مصرفية آمنة',
        en: 'Secure international trade finance',
      },
    },
  },
  {
    id: 'faq-private-label',
    category: 'products',
    question: {
      fa: 'آیا امکان سفارش با برند اختصاصی خریدار (Private Label / OEM) و بسته‌بندی سفارشی وجود دارد؟',
      ar: 'هل تتوفر خدمة التعبئة بالعلامة التجارية الخاصة بالمشتري (Private Label)؟',
      en: 'Is OEM / Private Labeling supported for supermarket chains and cosmetic brands?',
    },
    answer: {
      fa: 'بله. برای سفارش‌های دوره‌ای و قراردادهای سالانه بیش از ۲۰ تن گوشت یا ۱۰۰۰ لیتر روغن، واحد بسته‌بندی سلامت راشین مجهز به سیستم چاپ تریم اختصاصی، بارکد GS1 و طراحی برچسب با زبان رسمی کشور مقصد است. وزن‌کشی بسته‌ها، گرماژ وکیوم و نوع ظروف قابل شخصی‌سازی کامل طبق هویت بصری خریدار است.',
      ar: 'نعم، للعقود التوريدية السنوية والكميات التجارية، نوفر خدمة التغليف المخصص بالعلامة التجارية الخاصة بالمشتري، مع طباعة الباركود والبيانات الغذائية باللغات المطلوبة ومواصفات التقطيع المعتمدة في أسواقكم المحلية.',
      en: 'Yes. For annual supply contracts exceeding 20 metric tons of meat or 1,000 liters of cosmetic oil, our packaging plant accommodates bespoke customer retail branding, GS1 barcodes, nutrition fact tables in the destination country’s official languages, and customized tray portioning.',
    },
    highlightMetric: {
      value: 'Custom OEM',
      label: {
        fa: 'طراحی لیبل اختصاصی به زبان مقصد',
        ar: 'تغليف خاص بعلامتك التجارية ولغة بلدك',
        en: 'Bespoke retail packaging & barcodes',
      },
    },
  },
  {
    id: 'faq-oil-specifications',
    category: 'products',
    question: {
      fa: 'خلوص روغن شترمرغ دارویی و آرایشی چگونه ارزیابی می‌شود و تست‌های عدم حلال چیست؟',
      ar: 'كيف يتم التحقق من نقاوة زيت النعام الصيدلاني وخلوه من المذيبات الكيميائية؟',
      en: 'How is pharmaceutical ostrich oil purity verified and tested for solvent residues?',
    },
    answer: {
      fa: 'روغن سلامت راشین از چربی صفاقی خالص شترمرغ در مزارع خودمان، از طریق فرآیند اکستراکشن سرد در خلأ (Cold Vacuum Extraction) بدون دخالت هرگونه هگزان یا حلال شیمیایی استخراج می‌گردد. هر بچ دارای برگه آنالیز کروماتوگرافی گاز (GC-MS)، عدد اسیدی زیر ۰.۵ و بار میکروبی استریل مطابق استانداردهای فارماکوپه بین‌المللی است.',
      ar: 'يتم استخلاص زيت النعام لدينا بالطرد الميكانيكي على البارد تحت الفراغ (Cold Vacuum Extraction) دون أي مذيبات كيميائية أو حرارة مفرطة. نرفق لكل دفعة شهادة تحليل كروماتوغرافيا الغاز تبين تجاوز نسبة أوميغا 3 و6 و9 لـ 72٪ مع رقم حموضة أقل من 0.5.',
      en: 'Our pure oil is extracted exclusively via low-temperature mechanical Cold Vacuum Extraction from biosecure abdominal fat stores, completely avoiding hexane or synthetic solvents. Each batch is released with accredited GC-MS gas chromatography COAs verifying >70% Omega 3-6-9 lipid density and acid value < 0.5.',
    },
    highlightMetric: {
      value: '0% Solvents',
      label: {
        fa: 'فراوری مکانیکی سرد بدون هگزان',
        ar: 'استخلاص ميكانيكي بارد خالٍ من الكيماويات',
        en: 'Cold-vacuum solvent-free extraction',
      },
    },
  },
];

interface ExportFaqAccordionProps {
  currentLang: Language;
  defaultCategory?: FaqCategory;
  titleOverride?: string;
  subtitleOverride?: string;
  badgeOverride?: string;
}

export const ExportFaqAccordion: React.FC<ExportFaqAccordionProps> = ({
  currentLang,
  defaultCategory = 'all',
  titleOverride,
  subtitleOverride,
  badgeOverride,
}) => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory>(defaultCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-moq': true, // Open the first item by default for quick clarity
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const collapseAll = () => setOpenItems({});
  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    FAQ_DATA.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenItems(allOpen);
  };

  const categoryLabels: Record<FaqCategory, Record<Language, string>> = {
    all: {
      fa: 'همه پرسش‌ها',
      ar: 'كافة الاستفسارات',
      en: 'All Topics',
    },
    products: {
      fa: 'مشخصات کالا و ماندگاری',
      ar: 'مواصفات المنتجات والصلاحية',
      en: 'Products & Shelf Life',
    },
    logistics: {
      fa: 'لجستیک و زنجیره سرد',
      ar: 'الشحن وسلسلة التبريد',
      en: 'Logistics & Cold-Chain',
    },
    compliance: {
      fa: 'حلال، CITES و دامپزشکی',
      ar: 'الحلال وشهادات سايتس',
      en: 'Halal, CITES & Health',
    },
    commercial: {
      fa: 'شرایط مالی، ال‌سی و MOQ',
      ar: 'شروط الدفع والتعاقد',
      en: 'Payment, LC & MOQ',
    },
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = item.question[currentLang].toLowerCase();
      const a = item.answer[currentLang].toLowerCase();
      const term = searchQuery.toLowerCase().trim();

      return q.includes(term) || a.includes(term);
    });
  }, [selectedCategory, searchQuery, currentLang]);

  const defaultTexts = {
    fa: {
      badge: 'مرکز پاسخگویی به پرسش‌های تجاری و صادراتی',
      title: 'راهنمای جامع قراردادها، شرایط بهداشتی و لجستیک بین‌الملل',
      subtitle: 'پاسخ‌های شفاف و رسمی به سوالات متداول شرکت‌های خریدار، هتل‌های ۵ ستاره، هایپرمارکت‌ها و لابراتوارهای داروسازی',
      searchPlaceholder: 'جستجو در موضوعات (مثال: حلال، MOQ، کانتینر، اینکوترمز، انجماد...)',
      noResults: 'هیچ پرسشی با این عبارت یافت نشد. می‌توانید مستقیماً با میز فروش و صادرات در تماس باشید.',
      expandAll: 'باز کردن همه',
      collapseAll: 'بستن همه',
      unansweredPrompt: 'نیاز به هماهنگی اختصاصی برای محموله یا استاندارد خاصی دارید؟',
      contactDeskBtn: 'ارتباط مستقیم با واحد فنی و حقوقی صادرات',
    },
    ar: {
      badge: 'الأسئلة الشائعة حول التعاقد والتصدير الدولي',
      title: 'دليل المستورد التجاري: الشحن، الاشتراطات الصحية وطرق الدفع',
      subtitle: 'إجابات دقيقة ومفصلة لمدراء المشتريات، المستوردين، سلاسل الهايبرماركت ومصانع الأدوية ومستحضرات التجميل',
      searchPlaceholder: 'ابحث في الأسئلة (مثال: الشحن الجوي، سايتس، التبريد، خطاب الاعتماد...)',
      noResults: 'لم يتم العثور على نتائج مطابقة لبحثك. يرجى التواصل مباشرة مع فريق التصدير.',
      expandAll: 'توسيع الكل',
      collapseAll: 'طي الكل',
      unansweredPrompt: 'هل لديك استفسار تجاري خاص أو مواصفات شحن لم تجدها هنا؟',
      contactDeskBtn: 'تواصل مباشرة مع مكتب التجارة الخارجية',
    },
    en: {
      badge: 'B2B EXPORT ACCORDION KNOWLEDGE DESK',
      title: 'Comprehensive Guide to Trade Contracts, Biosecurity & Global Logistics',
      subtitle: 'Transparent, empirical answers addressing the core regulatory, cold-chain, and commercial inquiries of international buyers.',
      searchPlaceholder: 'Search topics (e.g. Halal, CITES, MOQ, reefer, Incoterms, MAP...)',
      noResults: 'No matching questions found. Feel free to contact our commercial export desk directly.',
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      unansweredPrompt: 'Have a tailored requirement or regulatory inquiry not covered above?',
      contactDeskBtn: 'Connect with International Commercial Desk',
    },
  }[currentLang];

  return (
    <section className={`w-full py-24 lg:py-32 border-b transition-colors duration-200 relative ${
      isDark ? 'border-white/10 bg-[#0c0d0e]' : 'border-stone-200 bg-white'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        
        {/* Section Header */}
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest">
            <HelpCircle className="h-4 w-4" />
            <span>{badgeOverride || defaultTexts.badge}</span>
          </div>
          <h2 className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-[1.3] ${
            isDark ? 'text-white' : 'text-stone-900'
          }`}>
            {titleOverride || defaultTexts.title}
          </h2>
          <p className={`pt-1 text-base sm:text-lg leading-relaxed sm:leading-loose ${
            isDark ? 'text-[#c4c8d0]' : 'text-stone-600'
          }`}>
            {subtitleOverride || defaultTexts.subtitle}
          </p>
        </div>

        {/* Interactive Controls Bar: Category Tabs & Real-time Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-4 border-b border-white/10">
          
          {/* Category Filter Pills */}
          <div className={`flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 border rounded-2xl ${
            isDark ? 'border-white/10 bg-[#141619]' : 'border-stone-200 bg-stone-100'
          }`}>
            {(Object.keys(categoryLabels) as FaqCategory[]).map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-[#9b111e] to-[#be123c] text-white shadow-md font-bold'
                      : isDark
                        ? 'text-[#9ca3af] hover:text-white hover:bg-white/5'
                        : 'text-stone-600 hover:text-stone-950 hover:bg-white/80'
                  }`}
                >
                  {categoryLabels[cat][currentLang]}
                </button>
              );
            })}
          </div>

          {/* Quick Search & Expand/Collapse Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-72">
              <div className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-stone-400">
                <Search className="h-4 w-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={defaultTexts.searchPlaceholder}
                className={`w-full rounded-xl border py-2.5 ps-9 pe-4 text-xs sm:text-sm transition-colors focus:border-rose-600 focus:outline-none ${
                  isDark 
                    ? 'border-white/10 bg-[#16181b] text-white placeholder-stone-500' 
                    : 'border-stone-300 bg-stone-50 text-stone-900 placeholder-stone-400'
                }`}
              />
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-stone-500 shrink-0">
              <button
                type="button"
                onClick={expandAll}
                className={`px-2.5 py-1.5 rounded-lg border cursor-pointer transition-colors ${
                  isDark ? 'border-white/10 hover:bg-white/5 text-stone-300' : 'border-stone-300 hover:bg-stone-100 text-stone-700'
                }`}
              >
                {defaultTexts.expandAll}
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className={`px-2.5 py-1.5 rounded-lg border cursor-pointer transition-colors ${
                  isDark ? 'border-white/10 hover:bg-white/5 text-stone-300' : 'border-stone-300 hover:bg-stone-100 text-stone-700'
                }`}
              >
                {defaultTexts.collapseAll}
              </button>
            </div>
          </div>

        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item, index) => {
                const isOpen = !!openItems[item.id];
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, delay: index * 0.03 }}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? isDark
                          ? 'border-rose-600/50 bg-[#151013] shadow-[0_4px_25px_rgba(155,17,30,0.15)]'
                          : 'border-rose-300 bg-rose-50/30 shadow-md'
                        : isDark
                          ? 'border-white/10 bg-[#121417] hover:border-white/20'
                          : 'border-stone-200 bg-stone-50/60 hover:border-stone-300 hover:bg-white'
                    }`}
                  >
                    {/* Accordion Trigger Header */}
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 p-6 sm:p-7 text-start cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4.5 min-w-0">
                        {/* Status Icon */}
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                          isOpen
                            ? 'border-rose-500/50 bg-rose-600 text-white shadow-xs'
                            : isDark
                              ? 'border-white/10 bg-white/5 text-rose-400'
                              : 'border-stone-200 bg-white text-rose-700'
                        }`}>
                          {item.category === 'compliance' && <ShieldCheck className="h-4.5 w-4.5" />}
                          {item.category === 'logistics' && <Plane className="h-4.5 w-4.5" />}
                          {item.category === 'products' && <Package className="h-4.5 w-4.5" />}
                          {item.category === 'commercial' && <CreditCard className="h-4.5 w-4.5" />}
                        </div>

                        <span className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                          isOpen
                            ? isDark ? 'text-white' : 'text-rose-900'
                            : isDark ? 'text-[#f1f2f4]' : 'text-stone-900'
                        }`}>
                          {item.question[currentLang]}
                        </span>
                      </div>

                      {/* Smooth Chevron Indicator with 180deg flip */}
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen 
                          ? 'rotate-180 border-rose-500/40 bg-rose-500/10 text-rose-500' 
                          : isDark
                            ? 'border-white/10 bg-white/5 text-stone-400'
                            : 'border-stone-200 bg-white text-stone-500'
                      }`}>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </button>

                    {/* Accordion Content Body with Framer Motion Collapsible Height */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className={`px-6 sm:px-7 pb-6 sm:pb-8 pt-2 border-t ${
                            isDark ? 'border-white/5 text-[#c4c8d0]' : 'border-stone-200/80 text-stone-700'
                          }`}>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                              
                              <p className={`text-sm sm:text-base leading-relaxed sm:leading-loose ${
                                item.highlightMetric ? 'md:col-span-8 lg:col-span-9' : 'md:col-span-12'
                              }`}>
                                {item.answer[currentLang]}
                              </p>

                              {/* Key verified metric pill if available */}
                              {item.highlightMetric && (
                                <div className="md:col-span-4 lg:col-span-3">
                                  <div className={`rounded-xl border p-4 text-center space-y-1 ${
                                    isDark ? 'border-white/10 bg-black/30' : 'border-rose-200 bg-white shadow-xs'
                                  }`}>
                                    <span className="font-mono text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400 block">
                                      {item.highlightMetric.value}
                                    </span>
                                    <span className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight block">
                                      {item.highlightMetric.label[currentLang]}
                                    </span>
                                  </div>
                                </div>
                              )}

                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                );
              })
            ) : (
              <div className={`rounded-2xl border p-12 text-center space-y-3 ${
                isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-stone-50'
              }`}>
                <MessageCircleQuestion className="h-10 w-10 text-rose-500 mx-auto" />
                <p className={`text-sm ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                  {defaultTexts.noResults}
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-rose-600 dark:text-rose-400 font-bold hover:underline cursor-pointer"
                >
                  {currentLang === 'fa' ? 'پاک کردن عبارت جستجو' : currentLang === 'ar' ? 'إعادة ضبط البحث' : 'Clear search'}
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Unanswered Direct Help Banner */}
        <div className={`rounded-2xl border p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors ${
          isDark ? 'border-rose-900/40 bg-[#160f12]' : 'border-rose-200 bg-rose-50/40'
        }`}>
          <div className="space-y-1 text-center sm:text-start">
            <h4 className={`text-base sm:text-lg font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
              {defaultTexts.unansweredPrompt}
            </h4>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
              {currentLang === 'fa' 
                ? 'کارشناسان بازرگانی ما ۲۴/۷ آماده پاسخگویی به استعلامات اختصاصی گمرکی و بهداشتی هستند.' 
                : currentLang === 'ar' 
                ? 'فريق التصدير جاهز للرد على استفسارات الجمارك والمواصفات الفنية على مدار الساعة.' 
                : 'Our commercial trade directors provide tailored regulatory & customs clearance consultations 24/7.'}
            </p>
          </div>

          <a
            href="https://wa.me/971508421900"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#9b111e] to-[#be123c] px-6 py-3.5 text-xs sm:text-sm font-bold text-white hover:brightness-110 transition-all cursor-pointer shadow-md whitespace-nowrap shrink-0"
          >
            <span>{defaultTexts.contactDeskBtn}</span>
            <ExternalLink className="h-4 w-4 rtl:rotate-180" />
          </a>
        </div>

      </div>
    </section>
  );
};
