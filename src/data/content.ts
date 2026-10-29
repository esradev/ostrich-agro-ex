import {
  ProductItem,
  ValueChainStep,
  ExportDestination,
  NutritionalComparison,
  Language,
} from "../types";

import HERO_IMAGE from "../assets/images/hero_salamat_rashin_1793150057261.jpg";
import MEAT_IMAGE from "../assets/images/ostrich_meat_export_1793150058192.jpg";
import OIL_IMAGE from "../assets/images/ostrich_oil_cosmetic_1793150058844.jpg";
import LEATHER_IMAGE from "../assets/images/ostrich_leather_luxury_1793150058729.jpg";

export { HERO_IMAGE, MEAT_IMAGE, OIL_IMAGE, LEATHER_IMAGE };

export const TRANSLATIONS = {
  fa: {
    brandName: "سلامت راشین",
    brandTagline: "مجتمع کشت و صنعت و صنایع تبدیلی شترمرغ",
    nav: {
      home: "صفحه اصلی",
      valueChain: "زنجیره ارزش تولید",
      products: "محصولات صادراتی",
      nutrition: "تحقیقات و سلامت",
      exportNetwork: "شبکه صادرات",
      rfq: "استعلام قیمت B2B",
      certificates: "استانداردها",
      contact: "ارتباط تجاری",
    },
    actions: {
      requestQuote: "استعلام قیمت صادراتی",
      exploreProducts: "مشاهده کاتالوگ محصولات",
      viewChain: "بررسی چرخه ارزش صنعتی",
      downloadCatalog: "دانلود بروشور و کاتالوگ فنی (PDF)",
      calculatePrice: "محاسبه پیش‌فاکتور لحظه‌ای",
      submitInquiry: "ارسال درخواست همکاری و پیش‌فاکتور",
      viewDetails: "مشاهده مشخصات فنی",
      close: "بستن",
      learnMore: "اطلاعات بیشتر",
      switchLang: "تغییر زبان",
    },
    hero: {
      badge: "بزرگترین مجتمع یکپارچه شترمرغ در خاورمیانه",
      title:
        "زنجیره پیشگام تولید، فرآوری و صادرات شترمرغ به بازارهای بین‌المللی",
      subtitle:
        "مجموعه کشت و صنعت «سلامت راشین» با بهره‌گیری از اقلیم طبیعی ممتاز، مدرن‌ترین دانش بیوتکنولوژی و زنجیره سرد بین‌المللی، محصولات ممتاز گوشت، روغن دارویی، چرم لوکس و پر شترمرغ را به حوزه خلیج فارس، اوراسیا و اروپا صادر می‌نماید.",
      stats: [
        { value: "۴۵,۰۰۰+", label: "هکتار وسعت مزارع و مراتع باز" },
        { value: "۱۲,۰۰۰+", label: "قطعه ظرفیت سالانه گله و هچری" },
        { value: "۱۸+", label: "کشور مقصد صادرات فعال" },
        { value: "۱۰۰٪", label: "انطباق با استانداردهای حلال و ISO 22000" },
      ],
    },
    valueChainSection: {
      title: "زنجیره ارزش از مزرعه تا بازارهای جهانی",
      subtitle:
        "یکپارچگی عمودی ۱۰۰ درصدی؛ از اصلاح نژاد ژنتیکی تا فرآوری و لجستیک سرد صادراتی",
      description:
        "سلامت راشین به عنوان یک مجموعه تمام‌عیار، هیچ بخشی از چرخه ارزش را برون‌سپاری نمی‌کند. این یکپارچگی تضمین‌کننده خلوص، انطباق کامل بهداشتی و سلامت پایدار محصولات در سراسر جهان است.",
    },
    productsSection: {
      title: "سبد محصولات ممتاز و صادراتی",
      subtitle:
        "تولید شده تحت نظارت سازمان دامپزشکی، با گواهینامه‌های بین‌المللی HACCP و Halal",
      all: "همه محصولات",
      meat: "گوشت سوپرلوکس",
      oil: "روغن دارویی و آرایشی",
      leather: "چرم و پوست طبیعی",
      feathers: "پر تخصصی و فشن",
      eggs: "تخم بارور و تزئینی",
      addToQuote: "افزودن به پیش‌فاکتور استعلام",
      moq: "حداقل سفارش (MOQ)",
      packaging: "بسته‌بندی صادراتی",
    },
    nutritionSection: {
      title: "مرکز تحقیقات سلامت و بیوتکنولوژی سلامت راشین",
      subtitle:
        "برتری اثبات‌شده علمی گوشت و روغن شترمرغ در مقایسه با استانداردهای جهانی تغذیه",
      meatComparisonTitle: "مقایسه تغذیه‌ای در ۱۰۰ گرم گوشت خام",
      meatComparisonSubtitle:
        "گوشت شترمرغ؛ قرمزترین گوشت کم‌چربی جهان، غنی از آهن و کمترین میزان کلسترول",
      calories: "کالری (kcal)",
      fat: "چربی (g)",
      cholesterol: "کلسترول (mg)",
      protein: "پروتئین (g)",
      iron: "آهن (mg)",
      oilAnalysisTitle: "پروفایل اسیدهای چرب روغن خالص سلامت راشین",
      oilAnalysisSubtitle:
        "حاوی بیش از ۷۰ درصد اسیدهای چرب غیراشباع (امگا ۳، ۶ و ۹) با قدرت نفوذ زیرجلدی بالا",
      omegaDescription:
        "روغن شترمرغ سلامت راشین از بافت چربی خالص صفاقی و زیرپوستی شترمرغ در مزارع خودمان، با روش اکستراکشن سرد در خلأ (Cold Vacuum Extraction) و بدون حلال‌های شیمیایی استخراج می‌شود. مناسب برای تسکین دردهای مفصلی، رفع التهاب پوستی و پایه‌های آرایشی لوکس.",
    },
    exportSection: {
      title: "پایانه صادرات و مقاصد بین‌المللی",
      subtitle:
        "شبکه ترانزیت هوایی و دریایی زنجیره سرد به مقاصد استراتژیک حوزه خلیج فارس، اوراسیا و ترکیه",
      ports: "بنادر بارگیری",
      transit: "مدت ترانزیت",
      dominant: "کالاهای غالب ارسالی",
      regulation: "استاندارد و پروتکل ورودی",
      airCargo:
        "ترانزیت هوایی سریع (Air Freight) با کانتینرهای دمایی ویژه - برای گوشت تازه گرم و جنین هچری",
      seaReefer:
        "کانتینرهای یخچالی دریایی (Reefer Containers -18°C) با ثبت پیوسته دما (Data Logger)",
    },
    rfqSection: {
      title: "سامانه محاسبات و استعلام پیش‌فاکتور B2B",
      subtitle:
        "استعلام رسمی قیمت بر اساس نوع کالا، تناژ، اینکوترمز و کشور مقصد با صدور پیش‌فاکتور آنی",
      selectProduct: "انتخاب رده کالا",
      selectGrade: "نوع برش یا گرید کیفی",
      volume: "میزان تقاضا / حجم سفارش",
      incoterms: "شرایط تحویل بین‌المللی (Incoterms 2020)",
      destination: "کشور مقصد تحویل",
      packagingType: "نوع بسته‌بندی درخواستی",
      companyName: "نام شرکت / خریدار تجاری",
      contactPerson: "نام نماینده بازرگانی",
      email: "پست الکترونیکی رسمی",
      phone: "شماره تماس مستقیم یا واتساپ",
      notes: "توضیحات و نیازمندی‌های اختصاصی قرارداد",
      estimatedQuote: "برآورد اولیه ارزش محموله",
      usd: "دلار آمریکا",
      submitBtn: "ثبت و ارسال استعلام رسمی به دپارتمان بازرگانی خارجی",
      instantSuccess:
        "استعلام شما با شماره پیگیری رسمی ثبت گردید. دپارتمان بازرگانی بین‌الملل حداکثر ظرف ۴ ساعت کاری با شما تماس خواهد گرفت.",
      downloadQuote: "دریافت نسخه پیش‌نویس استعلام تجاری",
    },
    certSection: {
      title: "مجوزها، استانداردها و گواهینامه‌های بین‌المللی",
      subtitle:
        "تطابق کامل با پروتکل‌های سختگیرانه سازمان بهداشت جهانی، دامپزشکی و مرکز استاندارد حلال",
    },
    contactSection: {
      title: "ارتباط مستقیم با دفاتر بازرگانی و کارخانجات",
      subtitle:
        "آماده پذیرش هیئت‌های تجاری بین‌المللی، عقد قراردادهای تأمین بلندمدت و اعطای نمایندگی فروش",
      tehranOffice: "دفتر مرکزی و بازرگانی بین‌الملل (تهران)",
      tehranAddress:
        "تهران، خیابان ولیعصر، بالاتر از پارک وی، مجتمع تجاری راشین، طبقه ۸، واحد ۸۰۲",
      complexOffice: "مجتمع عظیم کشت‌وصنعت و کارخانجات فرآوری",
      complexAddress:
        "استان خراسان، کیلومتر ۴۵ جاده سبزوار-نیشابور، دشت بزرگ راشین، مجتمع کشت و صنعت سلامت راشین",
      gulfOffice: "دفتر نمایندگی منطقه‌ای حوزه خلیج فارس (دبی)",
      gulfAddress: "امارات متحده عربی، دبی، بیزنس بی، برج البی، طبقه ۱۴",
      phoneLabel: "تلفن‌های تماس",
      emailLabel: "ایمیل‌های رسمی",
      hoursLabel: "ساعات کاری دپارتمان صادرات",
      hoursValue:
        "شنبه تا چهارشنبه: ۸:۰۰ الی ۱۷:۰۰ | پنجشنبه: ۸:۰۰ الی ۱۳:۰۰ (UTC+3:30)",
    },
    footer: {
      copyright:
        "© کلیه حقوق مادی و معنوی متعلق به مجتمع کشت و صنعت شترمرغ سلامت راشین می‌باشد.",
      disclaimer:
        "تأمین‌کننده مجاز نهاده‌ها، گوشت سلامت، مشتقات آرایشی و چرم درجه یک شترمرغ با نظارت عالیه مراجع بهداشتی و دامپزشکی بین‌المللی.",
    },
  },

  ar: {
    brandName: "سلامة راشين",
    brandTagline: "مجمع الصناعات الزراعية والتحويلية لتصدير النعام",
    nav: {
      home: "الرئيسية",
      valueChain: "سلسلة القيمة",
      products: "المنتجات التصديرية",
      nutrition: "التحاليل والصحة",
      exportNetwork: "شبكة التصدير",
      rfq: "عروض أسعار B2B",
      certificates: "الشهادات",
      contact: "الاتصال التجاري",
    },
    actions: {
      requestQuote: "طلب عرض أسعار التصدير",
      exploreProducts: "استعراض كتالوج المنتجات",
      viewChain: "استكشاف دورة الإنتاج المتكاملة",
      downloadCatalog: "تحميل الكتالوج والمواصفات (PDF)",
      calculatePrice: "احتساب الفاتورة الأولية الفورية",
      submitInquiry: "إرسال طلب التعاقد التجاري",
      viewDetails: "عرض المواصفات الفنية",
      close: "إغلاق",
      learnMore: "المزيد من التفاصيل",
      switchLang: "تغيير اللغة",
    },
    hero: {
      badge: "أكبر مجمع متكامل لتربية وصناعات النعام في الشرق الأوسط",
      title: "السلسلة الرائدة لتربية، وتجهيز، وتصدير النعام للأسواق العالمية",
      subtitle:
        "يتميز مجمع «سلامة راشين» الزراعي الصناعي بمناخه الطبيعي المتميز وتطبيقه لأحدث معايير التكنولوجيا الحيوية وسلسلة التبريد المعتمدة دولياً، حيث يصدر لحوم النعام الفاخرة، والزيوت العلاجية، والجلود الملكية، والريش لدول مجلس التعاون الخليجي وأوراسيا وأوروبا.",
      stats: [
        { value: "+٤٥,٠٠٠", label: "هكتار من المزارع والمراعي المفتوحة" },
        { value: "+١٢,٠٠٠", label: "طائر سعة القطيع السنوي والتفريخ" },
        { value: "+١٨", label: "دولة وجهة تصديرية نشطة" },
        { value: "٪١٠٠", label: "مطابقة لمعايير حلال و ISO 22000" },
      ],
    },
    valueChainSection: {
      title: "سلسلة القيمة المتكاملة من المزرعة إلى الأسواق العالمية",
      subtitle:
        "تكامل رأسي تام بنسبة 100٪؛ من التحسين الوراثي والتفريخ حتى الصناعات التحويلية والشحن المبرد",
      description:
        "لا تعتمد سلامة راشين على أطراف خارجية في أي مرحلة من مراحل الإنتاج. هذا التكامل الصارم هو الضمان الفعلي للنقاء المطلق والامتثال الصحي الصارم وفق المعايير الخليجية والأوروبية.",
    },
    productsSection: {
      title: "سلة المنتجات المتميزة للتصدير الدولي",
      subtitle:
        "منتجات حاصلة على شهادات الحلال الدولية واعتمادات السلامة الغذائية العالمية HACCP",
      all: "جميع المنتجات",
      meat: "لحوم النعام السوبر فاخرة",
      oil: "زيوت نقية علاجية وتجميلية",
      leather: "جلود النعام الطبيعية الفاخرة",
      feathers: "الريش الصناعي والأزياء",
      eggs: "بيض مخصب وقشور فنية",
      addToQuote: "إضافة لعرض الأسعار",
      moq: "الحد الأدنى للطلب (MOQ)",
      packaging: "التعبئة والتغليف التصديري",
    },
    nutritionSection: {
      title: "مركز الأبحاث الحيوية والتحاليل المخبرية لسلامة راشين",
      subtitle:
        "التفوق الغذائي والطبي المعتمد علمياً للحوم وزيوت النعام مقارنة بالمعايير العالمية",
      meatComparisonTitle: "مقارنة القيمة الغذائية لكل 100 غرام من اللحم الخام",
      meatComparisonSubtitle:
        "لحم النعام؛ اللحم الأحمر الأكثر صحة في العالم، أعلى نسبة حديد وأدنى نسبة كوليسترول ودهون",
      calories: "السعرات (kcal)",
      fat: "الدهون (g)",
      cholesterol: "الكوليسترول (mg)",
      protein: "البروتين (g)",
      iron: "الحديد (mg)",
      oilAnalysisTitle:
        "الملف الكيميائي للأحماض الدهنية لزيت سلامة راشين النقي",
      oilAnalysisSubtitle:
        "يحتوي على أكثر من 70٪ أحماض دهنية غير مشبعة (أوميغا 3، 6، 9) بقدرة نفاذ فائقة تحت الجلد",
      omegaDescription:
        "يستخرج زيت نعام سلامة راشين من أنقى دهون النعام المعزولة من مزارعنا الخاصة باستخدام تقنية العصر البارد بالتفريغ (Cold Vacuum) بدون أي مذيبات كيميائية أو حرارة مفسدة للأحماض. مثالي لعلاج التهاب المفاصل وترميم خلايا البشرة الفاخرة.",
    },
    exportSection: {
      title: "محطة الصادرات والمنافذ اللوجستية الدولية",
      subtitle:
        "شبكة شحن جوي وبحري بسلسلة تبريد ذكية إلى موانئ ومطارات دول الخليج وأوراسيا وأوروبا",
      ports: "موانئ الشحن",
      transit: "مدة الشحن والترانزيت",
      dominant: "أبرز السلع المصدرة",
      regulation: "البروتوكولات والمواصفات القياسية",
      airCargo:
        "شحن جوي فائق السرعة بحاويات مبردة مخصصة للحوم الطازجة والبيض المخصب",
      seaReefer:
        "حاويات بحرية مبردة (-18°C) مزودة بأنظمة تتبع رقمي ومراقبة لدرجات الحرارة طوال الرحلة",
    },
    rfqSection: {
      title: "بوابة حساب واستعلام عروض الأسعار التجارية B2B",
      subtitle:
        "احصل على عرض سعر تجاري معتمد فورياً وفق الكمية المطلوبة، شروط الإينكوترمز والوجهة",
      selectProduct: "اختر فئة المنتج",
      selectGrade: "نوع القطعية أو درجة الجودة",
      volume: "حجم الطلبية / الكمية المطلوبة",
      incoterms: "شروط الشحن الدولي (Incoterms 2020)",
      destination: "دولة الوصول والميناء المستهدف",
      packagingType: "طريقة التعبئة المطلوبة",
      companyName: "اسم الشركة / المشتري التجاري",
      contactPerson: "اسم المسؤول التجاري",
      email: "البريد الإلكتروني للعمل",
      phone: "رقم الهاتف المباشر أو الواتساب",
      notes: "المواصفات الخاصة والشروط التعاقدية",
      estimatedQuote: "القيمة التقديرية المبدئية للشحنة",
      usd: "دولار أمريكي",
      submitBtn: "اعتماد وإرسال الطلب لإدارة المبيعات والتصدير الدولي",
      instantSuccess:
        "تم تسجيل طلبك وتوليد رقم المرجع التجاري بنجاح. سيتواصل معك ممثل المبيعات الدولية في غضون ٤ ساعات عمل.",
      downloadQuote: "تحميل مسودة عرض الأسعار التجاري",
    },
    certSection: {
      title: "الاعتمادات والتراخيص وشهادات الجودة العالمية",
      subtitle:
        "مطابقة تامة للمواصفات القياسية الخليجية (GSO) والمنظمة العالمية لصحة الحيوان وهيئات الحلال الدولية",
    },
    contactSection: {
      title: "التواصل المباشر مع المكاتب التجارية والمصانع",
      subtitle:
        "نرحب بزيارة الوفود التجارية وإبرام عقود التوريد الاستراتيجية ووكالات التوزيع الإقليمية",
      tehranOffice: "المكتب الإداري والتجاري الرئيسي (طهران)",
      tehranAddress:
        "طهران، شارع ولي عصر، بالقرب من بارك واي، مجمع راشين التجاري، الطابق ٨، وحدة ٨٠٢",
      complexOffice: "المجمع الزراعي الصناعي ومصانع التجهيز الكبرى",
      complexAddress:
        "محافظة خراسان، طريق سبزوار-نيسابور كلم ٤٥، سهل راشين الكبير، مجمع سلامة راشين الزراعي الصناعي",
      gulfOffice: "مكتب التمثيل الإقليمي لدول الخليج العربي (دبي)",
      gulfAddress:
        "الإمارات العربية المتحدة، دبي، الخليج التجاري، برج الباي، الطابق ١٤",
      phoneLabel: "أرقام الاتصال المباشرة",
      emailLabel: "عناوين البريد الإلكتروني الرسمية",
      hoursLabel: "أوقات عمل قسم التصدير الدولي",
      hoursValue:
        "السبت إلى الأربعاء: ٨:٠٠ صباحاً إلى ٥:٠٠ مساءً | الخميس: ٨:٠٠ إلى ١:٠٠ ظهراً",
    },
    footer: {
      copyright:
        "© جميع الحقوق محفوظة لمجمع سلامة راشين للإنتاج والصناعات التحويلية وتصدير النعام.",
      disclaimer:
        "المصدر المعتمد لمنتجات النعام الصحية واللحوم الفاخرة والجلود والزيوت تحت إشراف المنظمات البيطرية والصحية الدولية.",
    },
  },

  en: {
    brandName: "Salamat Rashin",
    brandTagline: "Ostrich Agro-Industrial & Export Complex",
    nav: {
      home: "Home",
      valueChain: "Value Chain",
      products: "Products",
      nutrition: "R&D & Clinical",
      exportNetwork: "Export Corridors",
      rfq: "B2B Quotes",
      certificates: "Certifications",
      contact: "Trade Desks",
    },
    actions: {
      requestQuote: "Request Export Quote",
      exploreProducts: "Explore Product Catalog",
      viewChain: "Inspect Production Cycle",
      downloadCatalog: "Download Technical PDF Catalog",
      calculatePrice: "Calculate Instant Proforma",
      submitInquiry: "Submit B2B Supply Inquiry",
      viewDetails: "View Technical Specs",
      close: "Close",
      learnMore: "Learn More",
      switchLang: "Change Language",
    },
    hero: {
      badge: "Middle East’s Premier Vertically Integrated Ostrich Conglomerate",
      title:
        "Pioneering Ostrich Breeding, Processing & Global Export Excellence",
      subtitle:
        "Salamat Rashin Agro-Industrial Group merges pristine desert bioclimatic pastures with state-of-the-art biotechnology and cold-chain logistics to supply premium Halal meat, pharmaceutical-grade oils, exotic leather, and couture plumes to the GCC, Eurasia, and European luxury markets.",
      stats: [
        { value: "45,000+", label: "Hectares of Free-Range Pastures" },
        { value: "12,000+", label: "Annual Flock & Smart Hatchery Capacity" },
        { value: "18+", label: "Active Export Destination Markets" },
        { value: "100%", label: "Compliance with Halal & ISO 22000" },
      ],
    },
    valueChainSection: {
      title: "End-to-End Value Chain: From Ranch to Global Markets",
      subtitle:
        "100% vertical integration; from genetic pedigree selection to clinical lipid extraction and refrigerated sea/air transit",
      description:
        "Salamat Rashin does not outsource a single link of its production ecosystem. This absolute internal sovereignty ensures full traceability, biosecurity compliance, and uncompromised luxury grade across international borders.",
    },
    productsSection: {
      title: "Premium Export-Grade Product Portfolio",
      subtitle:
        "Veterinary health certified, vacuum skin packaged, complying with international HACCP and Halal standards",
      all: "All Categories",
      meat: "Prime Export Meat",
      oil: "Cosmetic & Pharma Oil",
      leather: "Exotic Natural Leather",
      feathers: "Industrial & Fashion Plumes",
      eggs: "Fertile & Artisan Eggs",
      addToQuote: "Add to RFQ Basket",
      moq: "Minimum Order Quantity (MOQ)",
      packaging: "Export Packaging",
    },
    nutritionSection: {
      title: "Biomedical & Nutritional Research Division",
      subtitle:
        "Empirically proven nutritional superiority of ostrich meat and lipids against global protein benchmarks",
      meatComparisonTitle: "Nutritional Profile per 100g Raw Lean Meat",
      meatComparisonSubtitle:
        "Ostrich: The world’s healthiest red meat—lowest cholesterol & fat, highest bioavailable iron",
      calories: "Calories (kcal)",
      fat: "Fat (g)",
      cholesterol: "Cholesterol (mg)",
      protein: "Protein (g)",
      iron: "Iron (mg)",
      oilAnalysisTitle: "Fatty Acid Profile of Pure Salamat Rashin Ostrich Oil",
      oilAnalysisSubtitle:
        "Over 70% unsaturated essential fatty acids (Omega 3, 6, and 9) with superior transdermal bioavailability",
      omegaDescription:
        "Extracted purely from peritoneal and subcutaneous adipose tissue harvested inside our closed-loop facilities using solvent-free cold vacuum centrifugation. Delivers deep penetration for musculoskeletal therapy, dermal recovery, and high-end cosmetic bases.",
    },
    exportSection: {
      title: "Export Terminals & Multimodal Logistics",
      subtitle:
        "Intelligent temperature-monitored refrigerated air & maritime corridors to the GCC, Eurasia, and European destinations",
      ports: "Origin / Dispatch Ports",
      transit: "Estimated Transit",
      dominant: "Primary Export Cargo",
      regulation: "Standard & Regulatory Framework",
      airCargo:
        "Expedited Temperature-Controlled Air Cargo with dry ice & dataloggers for chilled fresh cuts & fertile eggs",
      seaReefer:
        "Heavy Refrigerated Sea Containers (-18°C) equipped with real-time satellite telemetry and continuous thermal logging",
    },
    rfqSection: {
      title: "B2B Trade Quoting & Proforma Calculator",
      subtitle:
        "Generate accurate export estimates based on product grades, tonnage, Incoterms 2020, and designated port of delivery",
      selectProduct: "Product Category",
      selectGrade: "Cut / Specific Grade",
      volume: "Order Volume / Tonnage",
      incoterms: "International Commercial Terms (Incoterms 2020)",
      destination: "Destination Country / Port",
      packagingType: "Packaging Specification",
      companyName: "Company / Trading Entity",
      contactPerson: "Authorized Trade Officer",
      email: "Corporate Email",
      phone: "Direct Telephone / WhatsApp",
      notes: "Custom Contract Terms / Specifications",
      estimatedQuote: "Estimated FOB/CIF Valuation",
      usd: "USD",
      submitBtn: "Transmit Formal Inquiry to International Trade Desk",
      instantSuccess:
        "Your commercial inquiry has been registered with a formal tracking code. Our international trade desk will follow up within 4 business hours.",
      downloadQuote: "Download Commercial Proforma Draft",
    },
    certSection: {
      title: "Global Accreditations & Quality Certifications",
      subtitle:
        "Fully compliant with GCC Standardization Organization (GSO), Codex Alimentarius, and World Halal Council",
    },
    contactSection: {
      title: "Commercial Trade Desks & Agro-Industrial Complex",
      subtitle:
        "Welcoming sovereign food security buyers, international distributors, luxury fashion ateliers, and pharmaceutical partners",
      tehranOffice: "Commercial Headquarters & Trade Desk (Tehran)",
      tehranAddress:
        "Valiasr Ave, Near Parkway Interchange, Rashin Commercial Tower, 8th Floor, Suite 802, Tehran, Iran",
      complexOffice: "Mega Agro-Industrial Estate & Processing Complex",
      complexAddress:
        "Rashin Agro Complex, Km 45 Sabzevar-Neyshabur Highway, Khorasan Province",
      gulfOffice: "GCC Regional Representative Desk (Dubai)",
      gulfAddress:
        "The Bay Gate Tower, 14th Floor, Business Bay, Dubai, United Arab Emirates",
      phoneLabel: "Commercial Phone",
      emailLabel: "Official Correspondence",
      hoursLabel: "Export Desk Working Hours",
      hoursValue: "Sat–Wed: 08:00 – 17:00 | Thu: 08:00 – 13:00 (UTC+3:30)",
    },
    footer: {
      copyright:
        "© All rights reserved to Salamat Rashin Ostrich Agro-Industrial & Export Complex.",
      disclaimer:
        "Authorized global purveyor of certified Halal ostrich meat cuts, pharmaceutical lipids, and luxury exotic hides in adherence to World Organisation for Animal Health guidelines.",
    },
  },
};

export const VALUE_CHAIN_STEPS: ValueChainStep[] = [
  {
    stepNumber: "01",
    title: {
      fa: "ژنومیک برتر و هچری هوشمند",
      ar: "علم الوراثة والتفريخ الذكي",
      en: "Genetic Selection & Smart Hatchery",
    },
    tagline: {
      fa: "پایش میکروکلیماتیک جنین و راندمان بالای هچ",
      ar: "مراقبة مناخية دقيقة للأجنة ومعدل تفريخ مرتفع",
      en: "Microclimatic embryo monitoring & high-yield hatch",
    },
    summary: {
      fa: "گله‌های مولد اصیل گردن سیاه آفریقایی و دورگه‌های پربازده در شرایط ایزوله با آنکوباتورهای تمام‌رایانه‌ای با درصد باروری ۹۲٪.",
      ar: "أمهات نقية من سلالة النعام الأسود الأفريقي المهجن عالي الإنتاجية في بيئات معزولة مع حاضنات ذكية بمعدل إخصاب ٩٢٪.",
      en: "Pedigree African Black Neck breeding stock nurtured in bioclimatic zones with computerized incubation and 92% fertility rates.",
    },
    details: {
      fa: [
        "سیستم چرخش خودکار تخم‌ها در زاویه ۴۵ درجه با سنسورهای آلمانی",
        "کنترل پیوسته رطوبت نسبی در محدوده ۲۲٪ و دمای ۳۶.۵ درجه سانتیگراد",
        "شناسنامه الکترونیکی ژنتیکی برای هر گله مولد جهت جلوگیری از درون‌آمیزی",
      ],
      ar: [
        "نظام دوران بيض آلي بزاوية ٤٥ درجة مزود بمجسات ألمانية فائقة الدقة",
        "تحكم مستمر في الرطوبة النسبية عند ٢٢٪ والحرارة عند ٣٦.٥ مئوية",
        "شهادة جينات إلكترونية لكل فوج لمنع التزاوج الداخلي وضمان المناعة",
      ],
      en: [
        "Automated 45-degree egg rotation equipped with precision German sensors",
        "Continuous ambient humidity regulation at 22% and thermal lock at 36.5°C",
        "Full genomic pedigree registry preventing inbreeding and elevating bio-vigor",
      ],
    },
    metrics: [
      {
        label: {
          fa: "نرخ خروج جوجه سالم",
          ar: "معدل الفقس السليم",
          en: "Healthy Hatch Rate",
        },
        value: "۸۸.۴٪",
      },
      {
        label: {
          fa: "ظرفیت سالانه هچری",
          ar: "سعة التفريخ السنوية",
          en: "Annual Hatch Capacity",
        },
        value: "۱۵,۰۰۰ قطعه",
      },
    ],
    standards: [
      "Genetic Registry v4",
      "ISO 9001:2015",
      "Biosecurity Level III",
    ],
  },
  {
    stepNumber: "02",
    title: {
      fa: "مزارع پرورش آزاد و تغذیه ارگانیک",
      ar: "المراعي المفتوحة والتغذية العضوية",
      en: "Free-Range Pastures & Organic Diet",
    },
    tagline: {
      fa: "پرورش بدون آنتی‌بیوتیک در آفتاب مستقیم کویر",
      ar: "تربية بدون مضادات حيوية تحت أشعة الشمس المباشرة",
      en: "Zero antibiotics under pristine desert sunshine",
    },
    summary: {
      fa: "فضای باز وسیع با مساحت اختصاصی ۲۵۰ متر مربع برای هر پرنده، تغذیه از یونجه تازه دست‌چین، غلات غیرتراریخته و آب غنی‌شده معدنی.",
      ar: "مساحات مفتوحة رحبة تمنح ٢٥٠ متراً مربعاً لكل طائر، وتغذية بالبرسيم الطازج والحبوب غير المعدلة وراثياً والمياه العذبة.",
      en: "Expansive natural paddocks allocating 250m² per bird, nourished on prime non-GMO alfalfa, cereal grains, and pure artesian well water.",
    },
    details: {
      fa: [
        "عدم استفاده مطلق از هورمون‌های رشد و آنتی‌بیوتیک‌های سنتتیک",
        "دویدن طبیعی روزانه جهت تقویت بافت عضلانی فیله و غنای آهن میوگلوبین",
        "ضدعفونی ارگانیک دوره‌ای بستر با آهک زنده و نور طبیعی فرابنفش کویر",
      ],
      ar: [
        "حظر تام للمحفزات الهرمونية والمضادات الحيوية الكيميائية",
        "حركة رياضية حرة يومياً لتعزيز بنية لحم الفيليه وغناه بالحديد والميوجلوبين",
        "تعقيم عضوي دوري للمسارات باستخدام الكلس الحي والشمس الطبيعية",
      ],
      en: [
        "Total ban on artificial growth hormones and prophylactic synthetic antibiotics",
        "Extensive daily aerobic running yielding ultra-dense, myoglobin-rich muscle tissue",
        "Natural paddock sterilization using agricultural lime and desert ultraviolet sunlight",
      ],
    },
    metrics: [
      {
        label: {
          fa: "مساحت مراتع باز",
          ar: "مساحة المراعي المفتوحة",
          en: "Open Range Footprint",
        },
        value: "۴۵,۰۰۰ هکتار",
      },
      {
        label: {
          fa: "دوره رشد طبیعی",
          ar: "دورة النمو الطبيعي",
          en: "Natural Growth Cycle",
        },
        value: "۱۰ الی ۱۲ ماه",
      },
    ],
    standards: [
      "Non-GMO Certified",
      "Pasture-Raised Organic",
      "Animal Welfare Codex",
    ],
  },
  {
    stepNumber: "03",
    title: {
      fa: "کشتارگاه صنعتی و زنجیره سرد",
      ar: "المسلخ الصناعي وسلسلة التبريد الذكية",
      en: "Halal Abattoir & Cold Chain",
    },
    tagline: {
      fa: "ذبح شرعی اسلامی با شوک انجماد منهای ۴۰ درجه",
      ar: "ذبح إسلامي حلال وتجميد صاعق بدرجة ٤٠- مئوية",
      en: "Certified Islamic Halal slaughter & -40°C blast chill",
    },
    summary: {
      fa: "خط کشتار مکانیزه استیل ضدزنگ ۳۱۶ با نظارت مستقیم دامپزشکان مقیم و ناظران شرعی حلال، و انجماد سریع جهت حفظ تازگی سلولی پروتئین.",
      ar: "خط ذبح آلي بالكامل من الفولاذ المقاوم للصدأ ٣١٦ بإشراف أطباء بيطريين ومفتشين شرعيين، مع تجميد سريع لحفظ طزاجة الأنسجة.",
      en: "Surgical-grade 316 stainless steel processing line overseen by resident veterinary surgeons and Halal certifiers with blast freezing.",
    },
    details: {
      fa: [
        "خون‌گیری کامل و دقیق به منظور حذف هرگونه طعم نامطلوب و ماندگاری حداکثری",
        "دسته‌بندی لیزری قطعات گوشت بر اساس وزن، بافت عضلانی و درصد چربی",
        "بسته‌بندی در محیط تحت اتمسفر اصلاح‌شده (MAP) با گازهای بی‌اثر خوراکی",
      ],
      ar: [
        "نزف دموي تام ودقيق لمنع أي تغير في المذاق وضمان أطول مدة صلاحية",
        "فرز ليزري للقطوعات حسب الوزن، نقاء الألياف ونسبة الدهون الخالية",
        "تغليف في بيئة الغلاف الجوي المعدل (MAP) بغازات غذائية خاملة حافظة",
      ],
      en: [
        "Complete exsanguination guaranteeing pure culinary flavor profile and extended shelf life",
        "Automated laser portioning by cut density, fiber alignment, and zero-surface fat",
        "MAP (Modified Atmosphere Packaging) barrier trays locking in freshness without additives",
      ],
    },
    metrics: [
      {
        label: {
          fa: "دمای انجماد سریع",
          ar: "حرارة التجميد الصاعق",
          en: "Blast Freeze Shock",
        },
        value: "-۴۰°C",
      },
      {
        label: {
          fa: "ظرفیت روزانه کشتار",
          ar: "طاقة الذبح اليومية",
          en: "Daily Slaughter Yield",
        },
        value: "۱۲۰ رأس",
      },
    ],
    standards: [
      "Halal World Certificate",
      "HACCP Codex Alimentarius",
      "ISO 22000:2018",
    ],
  },
  {
    stepNumber: "04",
    title: {
      fa: "آزمایشگاه بیوشیمی و استخراج روغن",
      ar: "مختبر الكيمياء الحيوية واستخلاص الزيوت",
      en: "Lipid Extraction & R&D Laboratory",
    },
    tagline: {
      fa: "فرآوری مولکولی بدون حلال شیمیایی با گرید دارویی",
      ar: "معالجة جزيئية بدون مذيبات كيميائية بدرجة نقاء صيدلانية",
      en: "Solvent-free molecular purification at pharma-grade",
    },
    summary: {
      fa: "تصفیه سه‌مرحله‌ای چربی‌های غنی از امگا در فاز مایع و سانتریفیوژ تحت خلأ جهت تولید روغن دارویی و آرایشی با خلوص ۱۰۰٪.",
      ar: "تكرير ثلاثي لدهون النعام الغنية بالأوميغا بالطرد المركزي تحت التفريغ لإنتاج زيوت علاجية وتجميلية بنقاء 100٪.",
      en: "Three-stage sub-zero molecular winterization and vacuum centrifugation producing 100% pure pharmaceutical & cosmetic therapeutic oils.",
    },
    details: {
      fa: [
        "آنالیز کروماتوگرافی گازی (GC-MS) برای تضمین پروفایل اسیدهای چرب امگا ۳، ۶ و ۹",
        "حذف کامل بو و رنگ ناخواسته از طریق فیلتراسیون رسوبی کربن فعال خوراکی",
        "بسته‌بندی در ظروف شیشه‌ای کهربایی دارویی مقاوم در برابر اکسیداسیون نوری",
      ],
      ar: [
        "فحص كروماتوغرافيا الغاز (GC-MS) للتأكد من نسب أوميغا ٣، ٦، ٩ الدقيقة",
        "إزالة كاملة للرائحة والشوائب بواسطة فلاتر كربون نشط صيدلانية معقمة",
        "تعبئة في عبوات زجاجية عنبرية عازلة للأشعة فوق البنفسجية لمنع الأكسدة",
      ],
      en: [
        "GC-MS gas chromatography validating therapeutic fatty acid concentrations",
        "Total organoleptic deodorization using food-grade activated carbon membrane filtration",
        "Aseptic bottling into UV-shielding amber glass and export-certified drums",
      ],
    },
    metrics: [
      {
        label: {
          fa: "غلظت اسیدهای چرب غیراشباع",
          ar: "تركيز الأحماض الدهنية غير المشبعة",
          en: "Unsaturated Fatty Acids",
        },
        value: "۷۱.۸٪",
      },
      {
        label: {
          fa: "شاخص پراکسید",
          ar: "مؤشر البيروكسيد",
          en: "Peroxide Value",
        },
        value: "< ۰.۸ meq/kg",
      },
    ],
    standards: ["GMP Pharma Grade", "COA Certificate of Analysis", "ISO 17025"],
  },
  {
    stepNumber: "05",
    title: {
      fa: "دباغی چرم لوکس و فرآوری پر",
      ar: "دباغة الجلود الملكية وتجهيز الريش",
      en: "Exotic Leather Tannery & Feathers",
    },
    tagline: {
      fa: "دباغی گیاهی پوست با الگوی برجسته فولیکول شاه‌پَر",
      ar: "دباغة نباتية بنقشات بصيلات الريش التاجي الفاخرة",
      en: "Vegetable tanning highlighting distinctive quill follicles",
    },
    summary: {
      fa: "تولید پوست‌های سالامبور و وت‌بلو (Wet Blue) و چرم‌های رنگی اشباع‌شده مطابق با استانداردهای خانه‌های مد ایتالیا و امارات.",
      ar: "إنتاج الجلود الخام (Wet Blue) والجلود المدبوغة نباتياً بالألوان الملكية المطابقة لأرقى دور الأزياء الإيطالية والخليجية.",
      en: "Processing raw wet-blue hides and finished vegetable-tanned leather meeting the exacting criteria of Italian and Emirati fashion houses.",
    },
    details: {
      fa: [
        "سورتینگ دقیق پوست‌ها در گریدهای A+، A و B بر اساس تراکم و تقارن پُستول‌ها",
        "فرآوری پرهای ضد الکتریسیته ساکن برای صنایع خودروسازی و اتاق‌های رنگ",
        "جداسازی پرهای شاه‌پَر سفید خالص برای دکوراسیون و لباس‌های اوت کوتور",
      ],
      ar: [
        "فرز فائق الدقة للجلود في درجات A+ و A و B بناءً على كثافة البصيلات",
        "تجهيز ريش النعام المضاد للشحنات الساكنة لخطوط طلاء السيارات والمعدات الدقيقة",
        "تنقية الريش الأبيض الناصع الملكي لأزياء الهوت كوتور والمسارح العالمية",
      ],
      en: [
        "Precision hide grading (A+, A, B) based on quill follicle density and crown symmetry",
        "Processing antistatic specialty feathers for high-tech automotive robotic paint booths",
        "Hand-selection of snow-white prime plumes for international haute couture ateliers",
      ],
    },
    metrics: [
      {
        label: {
          fa: "استحکام کششی چرم",
          ar: "مقاومة الشد للجلد",
          en: "Tensile Strength",
        },
        value: "۳.۵ برابر چرم گاو",
      },
      {
        label: {
          fa: "بازدهی پوست ممتاز",
          ar: "نسبة الجلود الممتازة",
          en: "Grade A+ Yield",
        },
        value: "۸۲٪",
      },
    ],
    standards: [
      "LWG Leather Standards",
      "Eco-Tanning ISO 14001",
      "CITES Compliant",
    ],
  },
  {
    stepNumber: "06",
    title: {
      fa: "پایانه صادرات و لجستیک ترانزیت",
      ar: "محطة التصدير والشحن الدولي المبرد",
      en: "Export Terminal & Cold Chain Logistics",
    },
    tagline: {
      fa: "حمل هوایی و دریایی با گواهی بهداشت دامپزشکی بین‌الملل",
      ar: "شحن جوي وبحري مصحوب بشهادات صحية بيطرية موثقة",
      en: "Air freight & reefer containers with full sanitary vetting",
    },
    summary: {
      fa: "پایانه اختصاصی صادرات در مجاورت فرودگاه‌های بین‌المللی و بنادر استراتژیک، با صدور سریع اسناد گمرکی و قرنطینه دامی.",
      ar: "محطة تصدير لوجستية خاصة بالقرب من المطارات والموانئ الاستراتيجية، مع إنجاز فوري للتخليص الجمركي والحجر البيطري.",
      en: "Dedicated export dispatch terminal interfacing with international air hubs and sea ports with expedited veterinary sanitary clearance.",
    },
    details: {
      fa: [
        "ارسال محموله‌های گوشت تازه با پروازهای هفتگی به دبی، دوحه، مسقط و استانبول",
        "استفاده از دیتالاگرهای ماهواره‌ای آنلاین جهت ثبت لحظه‌ای دمای کانتینرها",
        "صدور گواهی مبدأ، گواهی آنالیز آزمایشگاهی و گواهی ذبح حلال همراه هر پالت",
      ],
      ar: [
        "رحلات شحن جوي مبرد أسبوعية مباشرة إلى دبي، الدوحة، مسقط وإسطنبول",
        "أجهزة تسجيل حرارة متصلة بالأقمار الصناعية تضمن ثبات البرودة في كل لحظة",
        "شهادات منشأ وتحاليل مخبرية معتمدة وشهادة ذبح حلال مع كل شحنة",
      ],
      en: [
        "Weekly dedicated air-cargo flights supplying fresh cuts directly to Dubai, Doha, and Muscat",
        "Satellite-linked continuous data loggers monitoring reefer temperatures in real-time",
        "Full sanitary veterinary passports, laboratory COAs, and Halal clearance with each consignment",
      ],
    },
    metrics: [
      {
        label: {
          fa: "حداکثر زمان تحویل هوایی",
          ar: "زمن التسليم الجوي بالخليج",
          en: "Gulf Air Delivery SLA",
        },
        value: "۲۴ الی ۴۸ ساعت",
      },
      {
        label: {
          fa: "صادرات سالانه گوشت و مشتقات",
          ar: "حجم التصدير السنوي",
          en: "Annual Export Volume",
        },
        value: "۳۸۰+ تن",
      },
    ],
    standards: [
      "IATA Cargo Standards",
      "Veterinary Sanitary Seal",
      "Dubai Customs Certified",
    ],
  },
];

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: "ostrich-meat-fillet",
    category: "meat",
    image: MEAT_IMAGE,
    title: {
      fa: "فیله و راسته شترمرغ سوپرلوکس صادراتی",
      ar: "فيليه ولحم خاصرة النعام السوبر فاخر للتصدير",
      en: "Prime Export Ostrich Fillet & Tenderloin Cuts",
    },
    subtitle: {
      fa: "برش‌های انتخابی بدون چربی با بافت مخملی، غنی از آهن و با کمترین کلسترول",
      ar: "قطوعات فاخرة خالية من الدهون ذات ملمس ناعم، غنية بالحديد ومنخفضة الكوليسترول",
      en: "Ultra-lean gourmet tenderloin & fillet with velvety marbling and high bioavailable iron",
    },
    description: {
      fa: "گوشت فیله شترمرغ سلامت راشین از بهترین دام‌های جوان ۱۰ تا ۱۲ ماهه تهیه شده و فاقد هرگونه چربی درون‌بافتی است. با طعمی لطیف و مشابه بهترین گوشت‌های گوساله واگیو، انتخابی ایده‌آل برای رستوران‌های میشلن، هتل‌های ۵ ستاره و خریداران رژیمی سلامت‌محور در سراسر حوزه خلیج فارس است.",
      ar: "لحم فيليه نعام سلامة راشين مأخوذ من أجود الطيور الفتية في سن ١٠ إلى ١٢ شهراً وخالٍ تماماً من الدهون الداخلية. بطعم فائق اللطافة يماثل أرقى أنواع لحوم العجول الفاخرة، وهو الخيار الأول للمطاعم العالمية والفنادق ومحبي التغذية الصحية بدول الخليج.",
      en: "Harvested from prime 10-12 month free-range ostriches with zero intramuscular marbling fat. Tender, delicate, and succulent akin to the finest aged prime beef, tailored for fine-dining hospitality and high-end retail across the GCC and Europe.",
    },
    specifications: {
      fa: [
        { label: "بافت و رنگ", value: "قرمز یاقوتی سیر، بدون رگه چربی مرئی" },
        { label: "میزان کلسترول", value: "کمتر از ۶۲ میلی‌گرم در ۱۰۰ گرم" },
        { label: "میزان چربی", value: "کمتر از ۱.۲ درصد" },
        { label: "پروتئین خالص", value: "۲۳.۵ گرم در ۱۰۰ گرم" },
        {
          label: "دمای نگهداری",
          value: "-۱۸ درجه سانتیگراد (منجمد) یا ۰ تا ۴ درجه (تازه)",
        },
        {
          label: "ماندگاری",
          value: "۲۴ ماه در حالت منجمد / ۲۱ روز در اتمسفر MAP",
        },
      ],
      ar: [
        {
          label: "اللون والملمس",
          value: "أحمر ياقوتي داكن، خالٍ تماماً من الأنسجة الدهنية",
        },
        { label: "نسبة الكوليسترول", value: "أقل من ٦٢ ملغ لكل ١٠٠ غرام" },
        { label: "نسبة الدهون", value: "أقل من ١.٢٪" },
        { label: "البروتين الصافي", value: "٢٣.٥ غرام لكل ١٠٠ غرام" },
        {
          label: "حرارة الحفظ",
          value: "١٨- مئوية (مجمد) أو ٠ إلى ٤ درجات (طازج)",
        },
        {
          label: "مدة الصلاحية",
          value: "٢٤ شهراً للمجمد / ٢١ يوماً لتغليف الغاز المعدل",
        },
      ],
      en: [
        {
          label: "Color & Texture",
          value: "Deep ruby red, zero visible fat seams",
        },
        { label: "Cholesterol Level", value: "< 62 mg per 100g" },
        { label: "Total Fat", value: "< 1.2%" },
        { label: "Pure Protein", value: "23.5 g per 100g" },
        {
          label: "Storage Temperature",
          value: "-18°C (Frozen) or 0°C to +4°C (Fresh MAP)",
        },
        {
          label: "Shelf Life",
          value: "24 months frozen / 21 days chilled MAP",
        },
      ],
    },
    packaging: {
      fa: "بسته‌بندی وکیوم اسکین ۵۰۰ گرمی و ۱ کیلوگرمی ریتیل، کارتن‌های صادراتی ۱۰ کیلویی مقاوم، پالت‌بندی تحت نظارت زنجیره سرد",
      ar: "تغليف سكين فاكيوم ٥٠٠غ و ١كغ للمستهلك، كراتين تصدير مقواة ١٠كغ، منصات مبردة",
      en: "500g & 1kg retail skin vacuum packs, 10kg export master cartons, temperature-logged palletization",
    },
    grades: [
      "Super Prime Tenderloin",
      "Striploin Grade A",
      "Top Rump Medallions",
      "Diced Goulash Cut",
    ],
    certifications: [
      "Halal World Authority",
      "ISO 22000:2018",
      "HACCP Sanitary Certificate",
    ],
    unit: {
      fa: "کیلوگرم / تن",
      ar: "كيلوغرام / طن",
      en: "Kilogram / Metric Ton",
    },
    basePriceUsd: 14.5,
  },
  {
    id: "ostrich-oil-pharma",
    category: "oil",
    image: OIL_IMAGE,
    title: {
      fa: "روغن خالص دارویی و آرایشی شترمرغ",
      ar: "زيت النعام النقي الطبي والتجميلي",
      en: "Pharmaceutical & Cosmetic Grade Pure Ostrich Oil",
    },
    subtitle: {
      fa: "تصفیه مولکولی در خلأ، غنی از امگا ۳، ۶ و ۹، جذب سلولی فوق‌العاده سریع بدون چربی سطحی",
      ar: "تكرير جزيئي بالتفريغ، غني بأوميغا ٣ و ٦ و ٩، امتصاص سريع للغاية دون أثر دهني",
      en: "Molecularly purified, triple cold-filtered lipid matrix rich in Omega 3-6-9 for deep transdermal therapy",
    },
    description: {
      fa: "روغن شترمرغ سلامت راشین از بالاترین درجه کیفی چربی‌های صفاقی استخراج می‌شود. به علت تشابه ابعاد اسیدهای چرب آن به سبوم طبیعی پوست انسان، نفوذ زیرپوستی فوق‌العاده‌ای دارد. این روغن در صنایع آرایشی اروپا به عنوان پایه کرم‌های جوان‌ساز، سرم‌های ضدچروک و در صنایع دارویی برای تسکین آرتروز و اگزما کاربرد گسترده دارد.",
      ar: "يستخلص زيت نعام سلامة راشين من أنقى الدهون المعزولة، وبفضل تطابق بنيته الجزيئية مع دهون البشرة الطبيعية، يمتلك قدرة فائقة على اختراق طبقات الجلد العميقة. يُعتمد كقاعدة رئيسية لكريمات مكافحة الشيخوخة ومستحضرات معالجة آلام المفاصل والصدفية.",
      en: "Engineered through low-temperature vacuum extraction preserving biological bio-actives. Its lipid profile closely mimics human dermal sebum, enabling rapid transdermal transport. Trusted by high-end cosmetic labs and therapeutic joint clinics in Dubai, Geneva, and Istanbul.",
    },
    specifications: {
      fa: [
        {
          label: "میزان خلوص",
          value: "۱۰۰٪ خالص ارگانیک، بدون پارابن و اسانس",
        },
        { label: "مجموع امگا ۳، ۶ و ۹", value: "۷۱.۸ درصد" },
        { label: "رنگ و بو", value: "طلایی کهربایی شفاف، بوگیری شده در خلأ" },
        { label: "عدد اسیدی", value: "کمتر از ۰.۴ mg KOH/g" },
        { label: "روش استخراج", value: "Cold Vacuum Centrifugation" },
        { label: "استاندارد", value: "Cosmetic Grade / Pharma Grade BP" },
      ],
      ar: [
        {
          label: "نسبة النقاء",
          value: "١٠٠٪ نقي عضوي، خالٍ من البارابين والعطور",
        },
        { label: "مجموع أوميغا ٣، ٦، ٩", value: "٧١.٨٪" },
        {
          label: "اللون والرائحة",
          value: "ذهبي عنبري نقي، منزوع الرائحة بالتفريغ",
        },
        { label: "الرقم الحمضي", value: "أقل من ٠.٤ ملغ KOH/غ" },
        { label: "طريقة الاستخلاص", value: "طرد مركزي بارد تحت التفريغ" },
        { label: "الدرجة", value: "درجة دوائية وتجميلية معتمدة" },
      ],
      en: [
        {
          label: "Purity Level",
          value: "100% pure organic, zero preservatives or additives",
        },
        {
          label: "Total Omega 3, 6, 9",
          value: "71.8% of total fatty acid composition",
        },
        {
          label: "Clarity & Scent",
          value: "Clear golden amber, fully deodorized in vacuum",
        },
        { label: "Acid Value", value: "< 0.4 mg KOH/g" },
        {
          label: "Extraction Technique",
          value: "Solvent-free Cold Vacuum Centrifugation",
        },
        {
          label: "Standard Rating",
          value: "Pharma / Cosmetic Grade BP Compliant",
        },
      ],
    },
    packaging: {
      fa: "بطری‌های لوکس کهربایی قطره‌چکانی ۵۰ml و ۱۰۰ml، گالن‌های صنعتی ۲۰ لیتری و بشکه‌های ۲۰۰ لیتری صادراتی با نیتروژن مایع",
      ar: "عبوات زجاجية فاخرة بالقطارة ٥٠مل و ١٠٠مل، وجوالين صناعية ٢٠ لتر، وبراميل ٢٠٠ لتر للتصدير بالنيتروجين",
      en: "50ml & 100ml luxury amber dropper bottles, 20L food-grade carboys, and 200L nitrogen-sealed export steel drums",
    },
    grades: ["Cosmetic Ultra-Refined", "Pharma BP Grade", "Raw Filtered Bulk"],
    certifications: [
      "GMP Certified Lab",
      "Certificate of Analysis (COA)",
      "Halal Cosmetic Seal",
    ],
    unit: {
      fa: "لیتر / کیلوگرم / بطری",
      ar: "لتر / كغم / عبوة",
      en: "Liter / Metric Drum / Bottle",
    },
    basePriceUsd: 28.0,
  },
  {
    id: "ostrich-leather-luxury",
    category: "leather",
    image: LEATHER_IMAGE,
    title: {
      fa: "چرم اگزوتیک و طبیعی شترمرغ",
      ar: "جلود النعام الطبيعية الفاخرة والنادرة",
      en: "Exotic Genuine Ostrich Hides & Leather",
    },
    subtitle: {
      fa: "طرح فولیکول شاه‌پَر برجسته، دباغی گیاهی ابریشمی با استحکام کششی بی‌نظیر برای صنایع لوکس",
      ar: "بصيلات بارزة متناسقة، دباغة نباتية حريرية فائقة المتانة لصناعات الرفاهية العالمية",
      en: "Symmetrical crown quill follicles with supple hand-feel, five times stronger than bovine leather",
    },
    description: {
      fa: "چرم شترمرغ به عنوان یکی از کمیاب‌ترین و باارزش‌ترین چرم‌های لوکس جهان شناخته می‌شود. سلامت راشین پوست‌های خام را در تانری‌های مدرن خود با مواد تانن گیاهی ایتالیایی فرآوری نموده و در رنگ‌های متنوع (کنیاکی، مشکی پیانویی، قهوه‌ای خاکی، زرشکی شاهانه) برای ساخت کیف، کفش، روکش خودروهای لوکس و ساعت‌سازی عرضه می‌دارد.",
      ar: "يعد جلد النعام من أندر وأفخم الجلود في العالم وأكثرها طلباً لدى دور الأزياء الراقية. توفر سلامة راشين جلوداً مدبوغة نباتياً وفق المواصفات الإيطالية بألوان متعددة ومقاومة عالية للماء والاهتراء لصناعة الأحذية والحقائب واليخوت.",
      en: "Revered alongside crocodile and alligator as the pinnacle of exotic luxury. Salamat Rashin processes raw hides with natural Italian tannins, preserving the distinct raised quill pattern while ensuring supple drape, extreme tensile resilience, and water resistance.",
    },
    specifications: {
      fa: [
        { label: "اندازه هر جلد", value: "۱۴ الی ۱۸ فوت مربع (Square Feet)" },
        { label: "ضخامت چرم", value: "۰.۹ الی ۱.۲ میلی‌متر" },
        {
          label: "گریدبندی",
          value: "گرید ۱ (بدون هرگونه اسکار یا خراشیدگی در بخش Crown)",
        },
        {
          label: "نوع دباغی",
          value: "دباغی گیاهی ارگانیک بدون کروم (Chrome-Free)",
        },
        { label: "استحکام کششی", value: "بیش از ۳ برابر چرم گاوی هم‌ضخامت" },
      ],
      ar: [
        {
          label: "مساحة الجلد الواحد",
          value: "١٤ إلى ١٨ قدماً مربعاً (sq ft)",
        },
        { label: "السماكة", value: "٠.٩ إلى ١.٢ مم" },
        {
          label: "تصنيف الجودة",
          value: "الدرجة الأولى (خالٍ تماماً من الخدوش في المنطقة التاجية)",
        },
        { label: "نوع الدباغة", value: "دباغة نباتية بيئية خالية من الكروم" },
        { label: "مقاومة التمزق", value: "أكثر من ٣ أضعاف جلد البقر المماثل" },
      ],
      en: [
        {
          label: "Average Hide Size",
          value: "14 to 18 square feet (1.3 - 1.7 m²)",
        },
        { label: "Caliper / Thickness", value: "0.9 to 1.2 mm" },
        {
          label: "Grading Protocol",
          value: "Grade 1 (Full intact crown follicle center, zero scarring)",
        },
        {
          label: "Tannage",
          value: "Full vegetable, chrome-free ecological tanning",
        },
        {
          label: "Tensile Strength",
          value: "Over 3.5x higher than equivalent bovine leather",
        },
      ],
    },
    packaging: {
      fa: "رول‌شده در کاغذهای مومی ضد رطوبت، بسته‌بندی در جعبه‌های چوبی صادراتی استاندارد پالتی",
      ar: "ملفوف بورق عازل للرطوبة ومغلف في صناديق خشبية تصديرية محكمة",
      en: "Rolled individually in archival anti-humidity glassine paper, packed in solid wooden air-freight crates",
    },
    grades: [
      "Grade A+ (Center Crown Flawless)",
      "Grade A (Commercial Prime)",
      "Wet Blue Raw Tanned Hides",
    ],
    certifications: [
      "CITES Registered",
      "Leather Working Group (LWG)",
      "Veterinary Skin Sanitization",
    ],
    unit: {
      fa: "جلد / فوت مربع",
      ar: "جلد / قدم مربع",
      en: "Hide / Square Foot",
    },
    basePriceUsd: 140.0,
  },
  {
    id: "ostrich-feathers-antistatic",
    category: "feathers",
    image: HERO_IMAGE,
    title: {
      fa: "پرهای صنعتی ضد الکتریسیته و تزیینی فشن",
      ar: "ريش النعام الصناعي المضاد للكهرباء الساكنة وريش الأزياء",
      en: "Industrial Antistatic Feathers & Couture Plumes",
    },
    subtitle: {
      fa: "پر زبر دستی با خاصیت جذب بار الکترواستاتیک برای اتاق‌های رنگ خودروسازی و شاپرهای سفید برای مد",
      ar: "ريش فائق الدقة بخصائص امتصاص الشحنات لخطوط السيارات وريش أبيض فاخر للمسارح والأزياء",
      en: "Electrostatic-absorbent duster plumes for robotics & automotive finishing, and snow-white couture plumes",
    },
    description: {
      fa: "پرهای شترمرغ ساختار باربری منحصر به فردی دارند که بار الکترواستاتیک سطوح را خنثی و ریزترین ذرات غبار را بدون خراش جذب می‌کنند. در خطوط تولید رنگ خودروسازان بزرگ جهان به عنوان استاندارد صنعتی شناخته می‌شوند. همچنین شاه‌پرهای سفید و تمیز سلامت راشین برای تئاتر، فشن و فستیوال‌های بین‌المللی ارسال می‌گردد.",
      ar: "يمتلك ريش النعام بنية مجهرية فريدة تمتص الشحنات الكهروستاتيكية وتلتقط أدق ذرات الغبار دون إحداث أي خدوش، مما يجعله المعيار الأول في روبوتات تنظيف أسطح سيارات كبار المصنعين حول العالم، إلى جانب الريش الفاخر لدور الأزياء العالمية.",
      en: "Possesses a microscopic barbule mesh with inherent magnetic-like electrostatic polarity that draws micro-dust particles from delicate car bodies and optical lenses. Also supplying hand-bleached virgin white plumes for world-class fashion houses and carnivals.",
    },
    specifications: {
      fa: [
        {
          label: "خاصیت فیزیکی",
          value: "خنثی‌کننده ۱۰۰٪ بار الکترواستاتیک بدون پاشش ذره",
        },
        { label: "طول شاه‌پَر", value: "۵۰ الی ۷۵ سانتی‌متر" },
        {
          label: "شستشو و استریل",
          value: "ضدعفونی حرارتی و اتوکلاو با بخار ۱۲۰ درجه",
        },
        {
          label: "رنگ‌بندی",
          value: "سفید طبیعی، مشکی متالیک و رنگ‌های سفارشی پنتون",
        },
      ],
      ar: [
        {
          label: "الخاصية الفيزيائية",
          value: "عزل تام للشحنات الكهروستاتيكية دون تساقط شعيرات",
        },
        { label: "طول الريش التاجي", value: "٥٠ إلى ٧٥ سم" },
        {
          label: "التعقيم",
          value: "تعقيم حراري بالبخار المضغوط عند ١٢٠ مئوية",
        },
        {
          label: "خيارات الألوان",
          value: "أبيض ناصع، أسود طبيعي، وألوان بانتون مخصصة",
        },
      ],
      en: [
        {
          label: "Electrostatic Trait",
          value:
            "100% electrostatic neutralization with zero filament shedding",
        },
        { label: "Plume Length", value: "50 to 75 cm prime wings" },
        {
          label: "Sterilization",
          value:
            "Steam autoclave sanitized at 120°C for international quarantine",
        },
        {
          label: "Colorways",
          value: "Natural Virgin White, Jet Black, Custom Pantone Dyes",
        },
      ],
    },
    packaging: {
      fa: "دسته‌بندی در کارتن‌های محافظ هواکش‌دار ضد فشار، باندهای ۵۰ و ۱۰۰ تایی",
      ar: "حزم مقواة ذات تهوية مضادة للضغط، مجموعات ٥٠ و ١٠٠ ريشة",
      en: "Vented pressure-resistant corrugated cartons in bundles of 50 and 100 stalks",
    },
    grades: [
      "Prime Wing Plumes (50-70cm)",
      "Automotive Industrial Spades",
      "Body Feathers Bulk",
    ],
    certifications: [
      "Phytosanitary Export Certificate",
      "Avian Influenza Free Clearance",
    ],
    unit: { fa: "کیلوگرم / شاخه", ar: "كغم / ريشة", en: "Kg / Plume Stalk" },
    basePriceUsd: 45.0,
  },
  {
    id: "ostrich-eggs-fertile-artisan",
    category: "eggs",
    image: HERO_IMAGE,
    title: {
      fa: "تخم‌های بارور نطفه‌دار و پوسته‌های تزئینی",
      ar: "بيض النعام المخصب للتفريخ وقشور الحفر الفنية",
      en: "Fertile Hatching Eggs & Carved Porcelain Shells",
    },
    subtitle: {
      fa: "تخم نطفه‌دار با درصد باروری تضمینی بالای ۸۸٪ و پوسته‌های چینی‌مانند ضخیم برای حکاکی و لوستر",
      ar: "بيض مخصب بنسبة إخصاب مؤكدة تفوق ٨٨٪ وقشور خزفية سميكة للنحت والفنون التشكيلية",
      en: "Guaranteed 88%+ fertility hatching eggs and thick porcelain-like blown eggshells for luxury artisans",
    },
    description: {
      fa: "سلامت راشین تخم‌های بارور را با تاریخ روز از گله‌های مولد با تغذیه ارگانیک و زیر نظر کارشناسان ژنتیک جمع‌آوری کرده و در دمای ثانویه ۱۶ درجه با رطوبت کنترل‌شده جهت صادرات به فارم‌های پرورشی ارسال می‌کند. همچنین پوسته‌های خالی با دوام فوق‌العاده برای هنرمندان حکاکی و طراحان دکوراسیون داخلی آماده‌سازی می‌شوند.",
      ar: "يتم انتقاء البيض المخصب بعناية يومية من قطعان الأمهات العضوية الخاضعة لمراقبة بيطرية مشددة، ونقله بدرجة حرارة محكمة تبلغ ١٦ مئوية إلى المزارع الإقليمية. كما توفر سلامة راشين قشوراً مفرغة شديدة الصلابة كالخزف للحفر اليدوي وصناعة الثريات.",
      en: "Freshly harvested daily from verified genetic breeding trios under veterinary supervision. Maintained at a steady 16°C storage plateau for safe regional transit to international ostrich ranches. Empty eggshells feature a 2mm porcelain glaze thickness ideal for laser carving.",
    },
    specifications: {
      fa: [
        { label: "میانگین وزن تخم", value: "۱.۴ الی ۱.۸ کیلوگرم" },
        {
          label: "نرخ باروری",
          value: "حداقل ۸۸ درصد تضمینی با سونوگرافی نوری",
        },
        {
          label: "سن تخم زمان بارگیری",
          value: "حداکثر ۴۸ ساعت پس از تخم‌گذاری",
        },
        { label: "ضخامت پوسته", value: "حدود ۲ میلی‌متر با پوشش لعابی متراکم" },
      ],
      ar: [
        { label: "متوسط وزن البيضة", value: "١.٤ إلى ١.٨ كغم" },
        { label: "نسبة الإخصاب", value: "أكثر من ٨٨٪ مضمونة بالفحص الضوئي" },
        { label: "عمر البيضة عند الشحن", value: "أقل من ٤٨ ساعة بعد الوضع" },
        { label: "سماكة القشرة", value: "حوالي ٢ مم ببنية خزفية صلبة" },
      ],
      en: [
        { label: "Average Egg Weight", value: "1.4 to 1.8 kilograms" },
        {
          label: "Candling Fertility Rate",
          value: "Minimum 88% verified by optical candling",
        },
        { label: "Dispatch Freshness", value: "< 48 hours post-oviposition" },
        {
          label: "Shell Thickness",
          value: "1.9 to 2.1 mm dense enamel matrix",
        },
      ],
    },
    packaging: {
      fa: "قالب‌های اسفنجی ضد شوک حرارتی در محفظه‌های ایزوترمیک ویژه بار هوایی",
      ar: "قوالب إسفنجية مضادة للصدمات في صناديق عازلة للحرارة للشحن الجوي",
      en: "Custom high-density shock-absorbing foam molds inside isothermal flight shippers",
    },
    grades: ["Certified Hatching Fertile", "Blown Washed Craft Shells"],
    certifications: ["OIE Avian Health Protocol", "Veterinary Certificate"],
    unit: { fa: "عدد / پالت", ar: "حبة / منصة", en: "Piece / Carton" },
    basePriceUsd: 35.0,
  },
];

export const NUTRITION_COMPARISON_DATA: NutritionalComparison[] = [
  {
    name: {
      fa: "گوشت شترمرغ سلامت راشین",
      ar: "لحم نعام سلامة راشين",
      en: "Salamat Rashin Ostrich",
    },
    calories: 114,
    fat: 2.1,
    cholesterol: 58,
    protein: 24.2,
    iron: 3.8,
  },
  {
    name: {
      fa: "گوشت گوساله بدون چربی (Lean Beef)",
      ar: "لحم العجل البقري الصافي",
      en: "Lean Beef Sirloin",
    },
    calories: 182,
    fat: 9.3,
    cholesterol: 86,
    protein: 21.4,
    iron: 2.2,
  },
  {
    name: {
      fa: "سینه مرغ بدون پوست (Chicken Breast)",
      ar: "صدر الدجاج منزوع الجلد",
      en: "Skinless Chicken Breast",
    },
    calories: 140,
    fat: 3.1,
    cholesterol: 85,
    protein: 23.8,
    iron: 1.1,
  },
  {
    name: {
      fa: "سینه بوقلمون (Turkey Breast)",
      ar: "صدر الديك الرومي",
      en: "Turkey Breast",
    },
    calories: 135,
    fat: 2.9,
    cholesterol: 76,
    protein: 24.0,
    iron: 1.4,
  },
  {
    name: {
      fa: "گوشت گوسفندی (Lamb Chop)",
      ar: "لحم الضأن (الخروف)",
      en: "Lean Lamb Chop",
    },
    calories: 205,
    fat: 12.2,
    cholesterol: 93,
    protein: 20.6,
    iron: 1.9,
  },
];

export const EXPORT_DESTINATIONS: ExportDestination[] = [
  {
    id: "uae",
    region: {
      fa: "حوزه خلیج فارس",
      ar: "مجلس التعاون الخليجي",
      en: "Gulf Cooperation Council",
    },
    country: {
      fa: "امارات متحده عربی (دبی و شارجه)",
      ar: "الإمارات العربية المتحدة (دبي والشارقة)",
      en: "United Arab Emirates (Dubai & Sharjah)",
    },
    ports: [
      "Dubai International Airport (DXB)",
      "Jebel Ali Port",
      "Sharjah Cargo",
    ],
    transitTime: {
      fa: "۲۴ ساعت هوایی / ۳ روز دریایی",
      ar: "٢٤ ساعة جواً / ٣ أيام بحراً",
      en: "24h Air / 3 Days Sea",
    },
    dominantProducts: {
      fa: "فیله تازه و منجمد، روغن آرایشی، چرم لوکس",
      ar: "فيليه طازج ومجمد، زيت تجميلي، جلود فاخرة",
      en: "Chilled/Frozen Fillet, Cosmetic Oil, Luxury Hides",
    },
    regulation: {
      fa: "استاندارد شهرداری دبی، تأییدیه حلال امارات، گواهی دامپزشکی",
      ar: "معايير بلدية دبي، اعتماد حلال الإمارات، شهادة بيطرية",
      en: "Dubai Municipality Food Safety, UAE Halal, Quarantine Cert",
    },
  },
  {
    id: "oman",
    region: {
      fa: "حوزه خلیج فارس",
      ar: "مجلس التعاون الخليجي",
      en: "Gulf Cooperation Council",
    },
    country: {
      fa: "سلطنت عمان (مسقط و صحار)",
      ar: "سلطنة عُمان (مسقط وصحار)",
      en: "Sultanate of Oman (Muscat & Sohar)",
    },
    ports: ["Muscat Airport (MCT)", "Port of Sohar", "Salalah Port"],
    transitTime: {
      fa: "۳۶ ساعت هوایی / ۴ روز دریایی",
      ar: "٣٦ ساعة جواً / ٤ أيام بحراً",
      en: "36h Air / 4 Days Sea",
    },
    dominantProducts: {
      fa: "گوشت قرمز بسته‌بندی، تخم بارور، روغن دارویی",
      ar: "لحوم مبردة، بيض مخصب، زيت علاجي",
      en: "MAP Chilled Meat, Fertile Eggs, Therapeutic Oil",
    },
    regulation: {
      fa: "استاندارد غذایی عمان (GSO)، گواهی سلامت دامپزشکی",
      ar: "المواصفات القياسية العمانية (GSO)، شهادة سلامة الغذاء",
      en: "Oman Ministry of Agriculture & Fisheries, GSO Standards",
    },
  },
  {
    id: "qatar",
    region: {
      fa: "حوزه خلیج فارس",
      ar: "مجلس التعاون الخليجي",
      en: "Gulf Cooperation Council",
    },
    country: {
      fa: "دولت قطر (دوحه)",
      ar: "دولة قطر (الدوحة)",
      en: "State of Qatar (Doha)",
    },
    ports: ["Hamad International Airport (DOH)", "Hamad Port"],
    transitTime: {
      fa: "۲۴ ساعت هوایی / ۵ روز دریایی",
      ar: "٢٤ ساعة جواً / ٥ أيام بحراً",
      en: "24h Air / 5 Days Sea",
    },
    dominantProducts: {
      fa: "گوشت سوپر پرایم استیک و فیله، پرهای فشن",
      ar: "قطوعات ستيك وفيليه سوبر فاخرة، ريش الأزياء",
      en: "Super Prime Steaks & Medallions, Couture Feathers",
    },
    regulation: {
      fa: "پروتکل وزارت بهداشت عمومی قطر (MOPH)، گواهی حلال",
      ar: "بروتوكول وزارة الصحة العامة القطرية، شهادة حلال",
      en: "Qatar MOPH Regulations, Halal Verification",
    },
  },
  {
    id: "kuwait-iraq",
    region: {
      fa: "خاورمیانه و خلیج فارس",
      ar: "الشرق الأوسط والخليج",
      en: "Middle East & Gulf",
    },
    country: {
      fa: "کویت و عراق (بصره و اربیل)",
      ar: "الكويت والعراق (البصرة وأربيل)",
      en: "Kuwait & Iraq (Basra & Erbil)",
    },
    ports: ["Kuwait International (KWI)", "Shuwaikh Port", "Basra Air / Sea"],
    transitTime: {
      fa: "۴۸ ساعت هوایی / ۳ روز زمینی-دریایی",
      ar: "٤٨ ساعة جواً / ٣ أيام بري-بحري",
      en: "48h Air / 3 Days Land-Sea",
    },
    dominantProducts: {
      fa: "گوشت منجمد، روغن دارویی تسکین مفاصل، جوجه و تخم",
      ar: "لحوم مجمدة، زيت مفاصل علاجي، بيض تفريخ",
      en: "Frozen Carcass Cuts, Joint Relief Oil, Hatching Stock",
    },
    regulation: {
      fa: "گمرک کویت، اداره استاندارد عراق، مجوز بهداشت دامی",
      ar: "جمارك الكويت، الجهاز المركزي للتقييس العراقي",
      en: "Kuwait Public Authority for Food & Nutrition, COSQC Iraq",
    },
  },
  {
    id: "eurasia",
    region: {
      fa: "اتحادیه اقتصادی اوراسیا",
      ar: "الاتحاد الاقتصادي الأوراسي",
      en: "Eurasian Economic Union (EAEU)",
    },
    country: {
      fa: "فدراسیون روسیه و قزاقستان",
      ar: "روسيا الاتحادية وكازاخستان",
      en: "Russian Federation & Kazakhstan",
    },
    ports: [
      "Moscow Sheremetyevo (SVO)",
      "Saint Petersburg Port",
      "Almaty Air Cargo",
    ],
    transitTime: {
      fa: "۴۸ ساعت هوایی / ۱۰ روز ترانزیت ترکیبی",
      ar: "٤٨ ساعة جواً / ١٠ أيام ترانزيت مدمج",
      en: "48h Air / 10 Days Intermodal",
    },
    dominantProducts: {
      fa: "گوشت منجمد فله صنعتی، روغن بالک دارویی، چرم خام",
      ar: "لحوم مجمدة صناعية، زيت علاجي بالجملة، جلود خام",
      en: "Industrial Frozen Meat, Pharma Bulk Oil, Wet Blue Leather",
    },
    regulation: {
      fa: "استاندارد گوست (GOST-R)، ثبت در سیستم وت‌ایز (VetIS/Mercury)",
      ar: "معايير غوست الروسية (GOST)، نظام ميركوري البيطري",
      en: "GOST-R, Rosselkhoznadzor Veterinary Mercury System",
    },
  },
  {
    id: "turkey-europe",
    region: {
      fa: "ترکیه و شرق اروپا",
      ar: "تركيا وأوروبا الشرقية",
      en: "Turkey & Eastern Europe",
    },
    country: {
      fa: "ترکیه (استانبول و مرسین)",
      ar: "تركيا (إسطنبول ومرسين)",
      en: "Turkey (Istanbul & Mersin)",
    },
    ports: ["Istanbul Airport (IST)", "Mersin International Port"],
    transitTime: {
      fa: "۳۶ ساعت هوایی / ۷ روز ترانزیت کانتینری",
      ar: "٣٦ ساعة جواً / ٧ أيام شحن بحري",
      en: "36h Air / 7 Days Container",
    },
    dominantProducts: {
      fa: "چرم اشباع شده و وت‌بلو، پرهای ضد استاتیک صنعتی، روغن",
      ar: "جلود مدبوغة، ريش صناعي للسيارات، زيت نقي",
      en: "Finished Crust Leather, Antistatic Plumes, Cosmetic Oil",
    },
    regulation: {
      fa: "گواهی انطباق CITES، استاندارد صنایع چرم ترکیه (TSE)",
      ar: "شهادة سايتس الدولية، مواصفات معهد المقاييس التركي",
      en: "CITES Permits, Turkish Standards Institution (TSE)",
    },
  },
];

export const CERTIFICATES = [
  {
    code: "HALAL-GLOBAL-992",
    title: {
      fa: "گواهی حلال بین‌المللی صادراتی",
      ar: "شهادة الحلال الدولية المعتمدة",
      en: "World Halal Trust Council Certification",
    },
    authority: {
      fa: "مرکز تحقیقات و استاندارد حلال جهانی",
      ar: "مركز بحوث الحلال العالمي",
      en: "Global Halal Research & Quality Assurance",
    },
    scope: {
      fa: "شامل فرآیند پرورش، ذبح شرعی اسلامی و بسته‌بندی گوشت",
      ar: "يشمل التربية، والذبح الشرعي والتعبئة",
      en: "Full custody: free-range breeding, halal abattoir, cold packing",
    },
  },
  {
    code: "ISO-22000-FSMS",
    title: {
      fa: "سیستم مدیریت ایمنی مواد غذایی ISO 22000:2018",
      ar: "نظام إدارة سلامة الغذاء ISO 22000:2018",
      en: "Food Safety Management System ISO 22000:2018",
    },
    authority: {
      fa: "مؤسسه بین‌المللی ممیزی کیفیت TUV NORD",
      ar: "هيئة التدقيق الدولية TUV NORD",
      en: "TUV NORD International Certification",
    },
    scope: {
      fa: "مدیریت خطوط کشتارگاه، بسته‌بندی تحت اتمسفر اصلاح‌شده و زنجیره سرد",
      ar: "إدارة خطوط المسلخ، والتغليف المعدل وسلسلة التبريد",
      en: "Processing abattoir, MAP packaging and cryogenic monitoring",
    },
  },
  {
    code: "HACCP-CODEX-74",
    title: {
      fa: "گواهی تحلیل خطر و کنترل نقاط بحرانی (HACCP)",
      ar: "شهادة تحليل المخاطر وضبط النقاط الحرجة HACCP",
      en: "Hazard Analysis & Critical Control Points (HACCP)",
    },
    authority: {
      fa: "کمیسیون بین‌المللی کدکس آلیمنتاریوس",
      ar: "هيئة الدستور الغذائي الدولي (كودكس)",
      en: "Codex Alimentarius International",
    },
    scope: {
      fa: "پایش مستمر آلودگی‌های بیولوژیک و حفظ سلامت بافت‌های گوشت و چربی",
      ar: "الرصد المستمر للملوثات وحفظ سلامة الأنسجة والدهون",
      en: "Biological hazard exclusion, hygiene audit & zero contamination",
    },
  },
  {
    code: "CITES-FAUNA-APP2",
    title: {
      fa: "مجوز تجارت بین‌المللی گونه‌ها (CITES)",
      ar: "ترخيص اتفاقية التجارة الدولية للأنواع الفطرية CITES",
      en: "CITES Convention on International Trade Permit",
    },
    authority: {
      fa: "سازمان ملل متحد / محیط زیست بین‌الملل",
      ar: "برنامج الأمم المتحدة للبيئة",
      en: "UN Environment Programme / CITES Secretariat",
    },
    scope: {
      fa: "مجوز قانونی صادرات چرم، پر و پوست پرورشی به کشورهای عضو کنوانسیون",
      ar: "ترخيص تصدير الجلود والريش من مزارع معتمدة",
      en: "Legal authorization for captive-bred ostrich leather and plumage exports",
    },
  },
];
