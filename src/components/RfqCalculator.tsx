import React, { useState } from 'react';
import { Language, ProductItem } from '../types';
import { TRANSLATIONS, PRODUCTS_LIST } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { Calculator, CheckCircle2, Download, Send, ShieldCheck } from 'lucide-react';

interface RfqCalculatorProps {
  currentLang: Language;
  preselectedProduct?: ProductItem | null;
  preselectedDestination?: string | null;
}

export const RfqCalculator: React.FC<RfqCalculatorProps> = ({
  currentLang,
  preselectedProduct,
  preselectedDestination,
}) => {
  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];

  // State
  const [selectedProductId, setSelectedProductId] = useState<string>(
    preselectedProduct ? preselectedProduct.id : PRODUCTS_LIST[0].id
  );
  const [selectedGrade, setSelectedGrade] = useState<string>(
    preselectedProduct ? preselectedProduct.grades[0] : PRODUCTS_LIST[0].grades[0]
  );
  const [quantity, setQuantity] = useState<number>(1000);
  const [incoterm, setIncoterm] = useState<string>('CIF Jebel Ali (Dubai, UAE)');
  const [destination, setDestination] = useState<string>(
    preselectedDestination || 'United Arab Emirates'
  );
  
  // Contact details
  const [companyName, setCompanyName] = useState<string>('');
  const [contactPerson, setContactPerson] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Submission feedback state
  const [submittedRfqCode, setSubmittedRfqCode] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Sync when preselected product changes
  React.useEffect(() => {
    if (preselectedProduct) {
      setSelectedProductId(preselectedProduct.id);
      setSelectedGrade(preselectedProduct.grades[0]);
    }
  }, [preselectedProduct]);

  React.useEffect(() => {
    if (preselectedDestination) {
      setDestination(preselectedDestination);
    }
  }, [preselectedDestination]);

  const currentProduct = PRODUCTS_LIST.find((p) => p.id === selectedProductId) || PRODUCTS_LIST[0];

  // Calculations
  const basePrice = currentProduct.basePriceUsd;
  
  // Volume discount logic
  let discountRate = 0;
  if (quantity >= 5000) discountRate = 0.12;
  else if (quantity >= 2000) discountRate = 0.08;
  else if (quantity >= 1000) discountRate = 0.05;

  // Logistics surcharge based on Incoterm
  let incotermMultiplier = 1.0;
  if (incoterm.includes('CIF')) incotermMultiplier = 1.15;
  else if (incoterm.includes('FOB')) incotermMultiplier = 1.06;

  const unitPrice = Math.round(basePrice * (1 - discountRate) * incotermMultiplier * 10) / 10;
  const totalPrice = Math.round(unitPrice * quantity);

  // Freight mode container estimation
  const containerEstimate = quantity >= 15000 
    ? '1x 40ft High Cube Reefer Container (-18°C)'
    : quantity >= 5000
    ? '1x 20ft Reefer Maritime Container (-18°C)'
    : 'Temperature-Controlled Air Cargo ULD Pallet (2-4 Days)';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !email) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      const generatedCode = `RFQ-SR-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRfqCode(generatedCode);
      setIsSubmitting(false);
    }, 600);
  };

  const handlePrintDraft = () => {
    window.print();
  };

  return (
    <section id="rfq-calculator" className={`w-full border-b transition-colors duration-200 py-24 lg:py-32 ${
      isDark ? 'border-white/10 bg-[#0e1012]' : 'border-stone-200 bg-[#f8f9fa]'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header with generous margin and relaxed leading */}
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-rose-600 dark:text-rose-400">
            <Calculator className="h-4 w-4" />
            <span>INSTANT B2B PROFORMA GENERATOR</span>
          </div>
          <h2 className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-[1.3] ${
            isDark ? 'text-white' : 'text-stone-900'
          }`}>
            {t.rfqSection.title}
          </h2>
          <p className={`pt-2 text-base sm:text-lg leading-relaxed sm:leading-loose ${
            isDark ? 'text-[#c4c8d0]' : 'text-stone-600'
          }`}>
            {t.rfqSection.subtitle}
          </p>
        </div>

        {/* Calculator Main Layout with spacious gaps */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left/Config Area (7 cols) with generous breathing room */}
          <div className={`lg:col-span-7 rounded-2xl border p-8 sm:p-10 space-y-8 transition-colors ${
            isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-sm'
          }`}>
            
            <h3 className={`text-lg font-bold border-b pb-4 ${
              isDark ? 'text-white border-white/10' : 'text-stone-900 border-stone-200'
            }`}>
              {currentLang === 'fa' ? '۱. مشخصات کالای صادراتی و تناژ' : currentLang === 'ar' ? '١. مواصفات السلعة وحجم الشحنة' : '1. Product Specifications & Volume'}
            </h3>

            {/* Product Category Selector */}
            <div className="space-y-2.5">
              <label className={`text-xs sm:text-sm font-semibold block ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                {t.rfqSection.selectProduct}
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => {
                  const prod = PRODUCTS_LIST.find((p) => p.id === e.target.value);
                  setSelectedProductId(e.target.value);
                  if (prod) setSelectedGrade(prod.grades[0]);
                }}
                className={`w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:border-rose-600 focus:outline-none ${
                  isDark 
                    ? 'border-white/10 bg-[#181b20] text-white' 
                    : 'border-stone-300 bg-white text-stone-900'
                }`}
              >
                {PRODUCTS_LIST.map((prod) => (
                  <option key={prod.id} value={prod.id} className={isDark ? 'bg-[#181b20] text-white' : 'bg-white text-stone-900'}>
                    {prod.title[currentLang]} ({prod.category.toUpperCase()})
                  </option>
                ))}
              </select>
            </div>

            {/* Grade Selection */}
            <div className="space-y-2.5">
              <label className={`text-xs sm:text-sm font-semibold block ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                {t.rfqSection.selectGrade}
              </label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className={`w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:border-rose-600 focus:outline-none ${
                  isDark 
                    ? 'border-white/10 bg-[#181b20] text-white' 
                    : 'border-stone-300 bg-white text-stone-900'
                }`}
              >
                {currentProduct.grades.map((grade, gIdx) => (
                  <option key={gIdx} value={grade} className={isDark ? 'bg-[#181b20] text-white' : 'bg-white text-stone-900'}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>

            {/* Volume Quantity Input & Quick Tiers */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                  {t.rfqSection.volume} ({currentProduct.unit[currentLang]})
                </label>
                {discountRate > 0 && (
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    {Math.round(discountRate * 100)}% Volume Rebate Applied
                  </span>
                )}
              </div>
              <input
                type="number"
                min="50"
                max="100000"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                className={`w-full rounded-xl border px-4 py-3 text-sm font-mono transition-colors focus:border-rose-600 focus:outline-none ${
                  isDark 
                    ? 'border-white/10 bg-[#181b20] text-white' 
                    : 'border-stone-300 bg-white text-stone-900'
                }`}
              />

              {/* Quick tier presets with comfortable padding */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[500, 1000, 2500, 5000, 10000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setQuantity(preset)}
                    className={`text-xs px-3.5 py-1.5 rounded-lg border transition-colors cursor-pointer font-mono ${
                      quantity === preset
                        ? isDark
                          ? 'border-rose-600 bg-rose-950/40 text-rose-300 font-bold'
                          : 'border-rose-600 bg-rose-50 text-rose-700 font-bold'
                        : isDark
                          ? 'border-white/10 bg-white/5 text-[#9ca3af] hover:text-white'
                          : 'border-stone-300 bg-stone-100 text-stone-700 hover:text-stone-950'
                    }`}
                  >
                    {preset.toLocaleString()} {currentProduct.category === 'meat' ? 'Kg' : currentProduct.category === 'oil' ? 'L' : 'Units'}
                  </button>
                ))}
              </div>
            </div>

            {/* Incoterms & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2.5">
                <label className={`text-xs sm:text-sm font-semibold block ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                  {t.rfqSection.incoterms}
                </label>
                <select
                  value={incoterm}
                  onChange={(e) => setIncoterm(e.target.value)}
                  className={`w-full rounded-xl border px-4 py-3 text-xs sm:text-sm transition-colors focus:border-rose-600 focus:outline-none ${
                    isDark 
                      ? 'border-white/10 bg-[#181b20] text-white' 
                      : 'border-stone-300 bg-white text-stone-900'
                  }`}
                >
                  <option value="EXW Khorasan Mega Complex">EXW Khorasan Agro Estate</option>
                  <option value="FOB Bandar Abbas Port">FOB Bandar Abbas Port</option>
                  <option value="FOB Chabahar Free Port">FOB Chabahar Free Port</option>
                  <option value="CIF Jebel Ali (Dubai, UAE)">CIF Jebel Ali (Dubai, UAE)</option>
                  <option value="CIF Port of Sohar (Oman)">CIF Port of Sohar (Oman)</option>
                  <option value="CIF Hamad Port (Qatar)">CIF Hamad Port (Qatar)</option>
                  <option value="CIF Mersin Port (Turkey)">CIF Mersin Port (Turkey)</option>
                  <option value="CIF Saint Petersburg (Russia)">CIF Saint Petersburg (Russia)</option>
                </select>
              </div>

              <div className="space-y-2.5">
                <label className={`text-xs sm:text-sm font-semibold block ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                  {t.rfqSection.destination}
                </label>
                <input
                  type="text"
                  required
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Dubai, UAE / Doha, Qatar"
                  className={`w-full rounded-xl border px-4 py-3 text-xs sm:text-sm transition-colors focus:border-rose-600 focus:outline-none ${
                    isDark 
                      ? 'border-white/10 bg-[#181b20] text-white' 
                      : 'border-stone-300 bg-white text-stone-900'
                  }`}
                />
              </div>
            </div>

            {/* Buyer Contact Information */}
            <div className={`pt-6 border-t space-y-6 ${isDark ? 'border-white/10' : 'border-stone-200'}`}>
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                {currentLang === 'fa' ? '۲. اطلاعات خریدار و نماینده تجاری' : currentLang === 'ar' ? '٢. بيانات الشركة والممثل التجاري' : '2. Company & Commercial Contact'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className={`text-xs sm:text-sm block ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>{t.rfqSection.companyName} *</label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Al-Mansoor Food Trading LLC"
                    className={`w-full rounded-xl border px-4 py-2.5 text-xs sm:text-sm transition-colors focus:border-rose-600 focus:outline-none ${
                      isDark ? 'border-white/10 bg-[#181b20] text-white' : 'border-stone-300 bg-white text-stone-900'
                    }`}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className={`text-xs sm:text-sm block ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>{t.rfqSection.contactPerson} *</label>
                  <input
                    type="text"
                    required
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="e.g. Tariq Al-Sabah"
                    className={`w-full rounded-xl border px-4 py-2.5 text-xs sm:text-sm transition-colors focus:border-rose-600 focus:outline-none ${
                      isDark ? 'border-white/10 bg-[#181b20] text-white' : 'border-stone-300 bg-white text-stone-900'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className={`text-xs sm:text-sm block ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>{t.rfqSection.email} *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="trade@company.com"
                    className={`w-full rounded-xl border px-4 py-2.5 text-xs sm:text-sm transition-colors focus:border-rose-600 focus:outline-none ${
                      isDark ? 'border-white/10 bg-[#181b20] text-white' : 'border-stone-300 bg-white text-stone-900'
                    }`}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className={`text-xs sm:text-sm block ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>{t.rfqSection.phone} *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+971 50 000 0000"
                    className={`w-full rounded-xl border px-4 py-2.5 text-xs sm:text-sm transition-colors focus:border-rose-600 focus:outline-none ${
                      isDark ? 'border-white/10 bg-[#181b20] text-white' : 'border-stone-300 bg-white text-stone-900'
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className={`text-xs sm:text-sm block ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>{t.rfqSection.notes}</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={currentLang === 'fa' ? 'مثال: نیازمند تأییدیه گمرکی بهداشت دامی و کانتینر دمایی ویژه...' : 'Special sanitary or packaging requests...'}
                  className={`w-full rounded-xl border px-4 py-2.5 text-xs sm:text-sm transition-colors focus:border-rose-600 focus:outline-none resize-none ${
                    isDark ? 'border-white/10 bg-[#181b20] text-white' : 'border-stone-300 bg-white text-stone-900'
                  }`}
                />
              </div>
            </div>

          </div>

          {/* Right/Proforma Preview Slip (5 cols) with Ruby Red accents */}
          <div className={`lg:col-span-5 rounded-2xl border p-8 sm:p-10 space-y-8 transition-colors ${
            isDark 
              ? 'border-rose-700/40 bg-[#150f12] text-white shadow-[0_4px_30px_rgba(155,17,30,0.2)]' 
              : 'border-rose-300 bg-white text-stone-900 shadow-md'
          }`}>
            
            <div className={`flex items-center justify-between border-b pb-5 ${
              isDark ? 'border-white/10' : 'border-stone-200'
            }`}>
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-rose-500 uppercase block">
                  PROFORMA ESTIMATE DRAFT
                </span>
                <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  SALAMAT RASHIN AGRO GROUP
                </span>
              </div>
              <ShieldCheck className="h-7 w-7 text-rose-500" />
            </div>

            {/* Selected item summary */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div className={`flex justify-between border-b pb-3 ${isDark ? 'border-white/5' : 'border-stone-200'}`}>
                <span className={isDark ? 'text-[#9ca3af]' : 'text-stone-500'}>
                  {currentLang === 'fa' ? 'محصول' : currentLang === 'ar' ? 'المنتج' : 'Commodity'}
                </span>
                <span className={`font-semibold text-end max-w-[200px] truncate ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  {currentProduct.title[currentLang]}
                </span>
              </div>
              <div className={`flex justify-between border-b pb-3 ${isDark ? 'border-white/5' : 'border-stone-200'}`}>
                <span className={isDark ? 'text-[#9ca3af]' : 'text-stone-500'}>
                  {currentLang === 'fa' ? 'گرید انتخابی' : currentLang === 'ar' ? 'الدرجة' : 'Grade'}
                </span>
                <span className={`font-mono ${isDark ? 'text-white' : 'text-stone-900'}`}>{selectedGrade}</span>
              </div>
              <div className={`flex justify-between border-b pb-3 ${isDark ? 'border-white/5' : 'border-stone-200'}`}>
                <span className={isDark ? 'text-[#9ca3af]' : 'text-stone-500'}>
                  {currentLang === 'fa' ? 'حجم سفارش' : currentLang === 'ar' ? 'الكمية' : 'Volume'}
                </span>
                <span className={`font-mono font-bold text-base tabular-nums ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  {quantity.toLocaleString()} {currentProduct.unit[currentLang]}
                </span>
              </div>
              <div className={`flex justify-between border-b pb-3 ${isDark ? 'border-white/5' : 'border-stone-200'}`}>
                <span className={isDark ? 'text-[#9ca3af]' : 'text-stone-500'}>
                  {currentLang === 'fa' ? 'شرط تحویل' : currentLang === 'ar' ? 'شرط الشحن' : 'Incoterm'}
                </span>
                <span className="font-mono text-rose-600 dark:text-rose-400 font-semibold text-end truncate max-w-[190px]">
                  {incoterm}
                </span>
              </div>
              <div className={`flex justify-between border-b pb-3 ${isDark ? 'border-white/5' : 'border-stone-200'}`}>
                <span className={isDark ? 'text-[#9ca3af]' : 'text-stone-500'}>
                  {currentLang === 'fa' ? 'برآورد لجستیک' : currentLang === 'ar' ? 'تجهيز الشحن' : 'Estimated Freight Unit'}
                </span>
                <span className={`text-xs text-end ${isDark ? 'text-white' : 'text-stone-900'}`}>{containerEstimate}</span>
              </div>
            </div>

            {/* Valuation display */}
            <div className={`rounded-xl border p-6 text-center space-y-1 ${
              isDark ? 'border-white/5 bg-[#1b1417]' : 'border-rose-200 bg-rose-50/50'
            }`}>
              <span className={`text-xs block ${isDark ? 'text-[#9ca3af]' : 'text-stone-500'}`}>
                {t.rfqSection.estimatedQuote}
              </span>
              <div className="flex items-baseline justify-center gap-2 font-mono py-1">
                <span className="text-4xl sm:text-5xl font-extrabold text-rose-600 dark:text-rose-400 tabular-nums">
                  ${totalPrice.toLocaleString()}
                </span>
                <span className={`text-xs ${isDark ? 'text-[#9ca3af]' : 'text-stone-500'}`}>{t.rfqSection.usd}</span>
              </div>
              <span className={`text-xs block ${isDark ? 'text-[#9ca3af]' : 'text-stone-500'}`}>
                ~ ${unitPrice} / {currentProduct.category === 'meat' ? 'kg' : currentProduct.category === 'oil' ? 'liter' : 'unit'}
              </span>
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#9b111e] via-[#be123c] to-[#9b111e] py-4 text-sm font-bold text-white transition-all hover:brightness-110 shadow-[0_4px_20px_rgba(155,17,30,0.35)] cursor-pointer disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                <span>{isSubmitting ? 'Processing...' : t.rfqSection.submitBtn}</span>
              </button>

              <button
                type="button"
                onClick={handlePrintDraft}
                className={`w-full flex items-center justify-center gap-2 rounded-xl border py-3 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  isDark 
                    ? 'border-white/10 bg-white/5 text-[#d1d5db] hover:text-white hover:bg-white/10' 
                    : 'border-stone-300 bg-stone-100 text-stone-700 hover:text-stone-950 hover:bg-stone-200'
                }`}
              >
                <Download className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                <span>{t.rfqSection.downloadQuote}</span>
              </button>
            </div>

            <p className="text-[11px] text-neutral-400 text-center leading-relaxed">
              * Non-binding initial commercial estimate subject to final veterinary health clearance, cargo space reservation, and formal contract agreement.
            </p>

          </div>

        </form>

        {/* Confirmation Modal when RFQ is registered */}
        {submittedRfqCode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className={`relative w-full max-w-lg rounded-2xl border p-8 sm:p-10 shadow-2xl text-center space-y-6 ${
              isDark ? 'border-rose-600/50 bg-[#161013] text-white' : 'border-stone-300 bg-white text-stone-900'
            }`}>
              
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-400">
                <CheckCircle2 className="h-9 w-9" />
              </div>

              <div className="space-y-1">
                <span className="font-mono text-xs text-rose-500 uppercase tracking-wider block">
                  OFFICIAL COMMERCIAL INQUIRY REGISTERED
                </span>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  {currentLang === 'fa' ? 'استعلام رسمی شما با موفقیت ثبت شد' : currentLang === 'ar' ? 'تم تسجيل طلبك التجاري بنجاح' : 'B2B Inquiry Registered Successfully'}
                </h3>
              </div>

              <div className={`rounded-xl border p-5 text-start font-mono text-xs sm:text-sm space-y-2 ${
                isDark ? 'border-white/10 bg-[#1e1518]' : 'border-stone-200 bg-stone-50'
              }`}>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-[#9ca3af]' : 'text-stone-500'}>Tracking Ref Code:</span>
                  <span className="text-rose-400 font-bold">{submittedRfqCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-[#9ca3af]' : 'text-stone-500'}>Company:</span>
                  <span className={isDark ? 'text-white' : 'text-stone-900'}>{companyName || 'Corporate Partner'}</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-[#9ca3af]' : 'text-stone-500'}>Assigned Desk:</span>
                  <span className="text-rose-400">International Export Trade Office</span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-[#9ca3af]' : 'text-stone-500'}>Guaranteed Response SLA:</span>
                  <span className={isDark ? 'text-white' : 'text-stone-900'}>&le; 4 Business Hours</span>
                </div>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[#d1d5db]' : 'text-stone-600'}`}>
                {t.rfqSection.instantSuccess}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSubmittedRfqCode(null)}
                  className="w-full rounded-xl bg-gradient-to-r from-[#9b111e] to-[#be123c] py-3 text-sm font-bold text-white hover:brightness-110 transition-colors cursor-pointer shadow-md"
                >
                  {t.actions.close}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
