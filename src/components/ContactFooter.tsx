import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { Building2, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContactFooterProps {
  currentLang: Language;
  onNavigateToSection: (sectionId: string) => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  currentLang,
  onNavigateToSection,
}) => {
  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];
  
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;
    setIsSent(true);
    setTimeout(() => {
      setFormName('');
      setFormEmail('');
      setFormSubject('');
      setFormMessage('');
    }, 2000);
  };

  return (
    <footer id="contact-desk" className={`w-full transition-colors duration-200 ${
      isDark ? 'bg-[#0a0b0d] text-white' : 'bg-[#f4f3ef] text-stone-900'
    }`}>
      
      {/* Contact Section Upper Container with generous space */}
      <div className={`border-b py-24 lg:py-32 ${isDark ? 'border-white/10' : 'border-stone-200'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-rose-600 dark:text-rose-400">
              <Building2 className="h-4 w-4" />
              <span>GLOBAL CORPORATE RELATIONS & TRADE DESKS</span>
            </div>
            <h2 className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-[1.3] ${
              isDark ? 'text-white' : 'text-stone-900'
            }`}>
              {t.contactSection.title}
            </h2>
            <p className={`pt-2 text-base sm:text-lg leading-relaxed sm:leading-loose ${isDark ? 'text-[#c4c8d0]' : 'text-stone-600'}`}>
              {t.contactSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* 3 Main Commercial Offices (7 cols) with airy cards */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Tehran Central Office */}
              <div className={`rounded-2xl border p-8 space-y-4 transition-colors ${
                isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-xs'
              }`}>
                <div className={`flex items-center gap-3 text-base font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  <MapPin className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0" />
                  <span>{t.contactSection.tehranOffice}</span>
                </div>
                <p className={`text-sm leading-relaxed ps-8 ${isDark ? 'text-[#d1d5db]' : 'text-stone-600'}`}>
                  {t.contactSection.tehranAddress}
                </p>
                <div className={`flex flex-wrap items-center gap-8 text-xs sm:text-sm ps-8 pt-2 border-t ${
                  isDark ? 'border-white/5 text-[#9ca3af]' : 'border-stone-100 text-stone-500'
                }`}>
                  <span>Tel: +98 (21) 2204-8930 / 2204-8931</span>
                  <span>Email: tehran@salamatrashin.com</span>
                </div>
              </div>

              {/* Khorasan Mega Agro-Estate */}
              <div className={`rounded-2xl border p-8 space-y-4 transition-colors ${
                isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-xs'
              }`}>
                <div className={`flex items-center gap-3 text-base font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  <Building2 className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0" />
                  <span>{t.contactSection.complexOffice}</span>
                </div>
                <p className={`text-sm leading-relaxed ps-8 ${isDark ? 'text-[#d1d5db]' : 'text-stone-600'}`}>
                  {t.contactSection.complexAddress}
                </p>
                <div className={`flex flex-wrap items-center gap-8 text-xs sm:text-sm ps-8 pt-2 border-t ${
                  isDark ? 'border-white/5 text-[#9ca3af]' : 'border-stone-100 text-stone-500'
                }`}>
                  <span>Estate Desk: +98 (51) 4462-7700</span>
                  <span>Lab: lab@salamatrashin.com</span>
                </div>
              </div>

              {/* Dubai Regional Office */}
              <div className={`rounded-2xl border p-8 space-y-4 transition-colors ${
                isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-xs'
              }`}>
                <div className={`flex items-center gap-3 text-base font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  <MapPin className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0" />
                  <span>{t.contactSection.gulfOffice}</span>
                </div>
                <p className={`text-sm leading-relaxed ps-8 ${isDark ? 'text-[#d1d5db]' : 'text-stone-600'}`}>
                  {t.contactSection.gulfAddress}
                </p>
                <div className={`flex flex-wrap items-center gap-8 text-xs sm:text-sm ps-8 pt-2 border-t ${
                  isDark ? 'border-white/5 text-[#9ca3af]' : 'border-stone-100 text-stone-500'
                }`}>
                  <span>Dubai Desk: +971 (4) 582-9014</span>
                  <span>GCC Email: dubai@salamatrashin.com</span>
                </div>
              </div>

              {/* Working Hours Banner with relaxed padding */}
              <div className={`flex items-center gap-3.5 rounded-xl border p-5 text-xs sm:text-sm ${
                isDark ? 'border-white/5 bg-[#141619] text-[#9ca3af]' : 'border-stone-200 bg-white text-stone-600 shadow-xs'
              }`}>
                <Clock className="h-5 w-5 text-rose-600 dark:text-rose-400 shrink-0" />
                <div>
                  <span className={`font-semibold me-2 ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    {t.contactSection.hoursLabel}:
                  </span>
                  <span>{t.contactSection.hoursValue}</span>
                </div>
              </div>

            </div>

            {/* Direct Quick Message Form (5 cols) with spacious interior */}
            <div className={`lg:col-span-5 rounded-2xl border p-8 sm:p-10 space-y-6 transition-colors ${
              isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-xs'
            }`}>
              
              <div className="space-y-1.5">
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  {currentLang === 'fa' ? 'ارسال پیام به مدیریت بازرگانی' : currentLang === 'ar' ? 'إرسال رسالة مباشرة للمبيعات' : 'Direct Message to Export Bureau'}
                </h3>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-[#9ca3af]' : 'text-stone-500'}`}>
                  {currentLang === 'fa' ? 'پاسخگویی رسمی ظرف حداکثر ۲۴ ساعت کاری' : currentLang === 'ar' ? 'الرد الرسمي خلال ٢٤ ساعة عمل' : 'Official correspondence replied within 24h'}
                </p>
              </div>

              {isSent ? (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-6 text-center space-y-3">
                  <CheckCircle2 className="h-8 w-8 text-emerald-400 mx-auto" />
                  <span className="text-base font-bold text-white block">
                    {currentLang === 'fa' ? 'پیام شما دریافت گردید' : currentLang === 'ar' ? 'تم استلام رسالتكم بنجاح' : 'Message Received'}
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {currentLang === 'fa' ? 'کارشناسان بازرگانی به زودی با شما مکاتبه خواهند کرد.' : 'Our trade officer will follow up with your corporate email.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className={`text-xs sm:text-sm block ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                      {currentLang === 'fa' ? 'نام و نام خانوادگی' : currentLang === 'ar' ? 'الاسم الكامل' : 'Full Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className={`w-full rounded-xl border px-4 py-3 text-xs sm:text-sm transition-colors focus:border-rose-600 focus:outline-none ${
                        isDark ? 'border-white/10 bg-[#171a1e] text-white' : 'border-stone-300 bg-stone-50 text-stone-900'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={`text-xs sm:text-sm block ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                      {currentLang === 'fa' ? 'پست الکترونیکی سازمانی' : currentLang === 'ar' ? 'البريد الإلكتروني' : 'Corporate Email'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className={`w-full rounded-xl border px-4 py-3 text-xs sm:text-sm transition-colors focus:border-rose-600 focus:outline-none ${
                        isDark ? 'border-white/10 bg-[#171a1e] text-white' : 'border-stone-300 bg-stone-50 text-stone-900'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={`text-xs sm:text-sm block ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                      {currentLang === 'fa' ? 'موضوع همکاری' : currentLang === 'ar' ? 'موضوع التعاقد' : 'Inquiry Subject'}
                    </label>
                    <input
                      type="text"
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      placeholder="e.g. Ostrich Meat Export Contract / Cosmetics Raw Material"
                      className={`w-full rounded-xl border px-4 py-3 text-xs sm:text-sm transition-colors focus:border-rose-600 focus:outline-none ${
                        isDark ? 'border-white/10 bg-[#171a1e] text-white' : 'border-stone-300 bg-stone-50 text-stone-900'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={`text-xs sm:text-sm block ${isDark ? 'text-[#9ca3af]' : 'text-stone-600'}`}>
                      {currentLang === 'fa' ? 'شرح پیام و نیازمندی' : currentLang === 'ar' ? 'تفاصيل الرسالة' : 'Message Details'} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className={`w-full rounded-xl border px-4 py-3 text-xs sm:text-sm transition-colors focus:border-rose-600 focus:outline-none resize-none ${
                        isDark ? 'border-white/10 bg-[#171a1e] text-white' : 'border-stone-300 bg-stone-50 text-stone-900'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#9b111e] to-[#be123c] py-3.5 text-xs sm:text-sm font-bold text-white hover:brightness-110 transition-all cursor-pointer shadow-md"
                  >
                    <Send className="h-4 w-4" />
                    <span>{t.actions.submitInquiry}</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </div>

      {/* Quiet Footer Container with generous vertical padding */}
      <div className={`mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 ${
        isDark ? 'text-[#9ca3af]' : 'text-stone-600'
      }`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 text-xs sm:text-sm">
          
          {/* Brand & Copyright */}
          <div className="space-y-2">
            <span className={`font-bold tracking-wide text-base block ${isDark ? 'text-white' : 'text-stone-900'}`}>
              {t.brandName} · {t.brandTagline}
            </span>
            <p className={`max-w-xl leading-relaxed ${isDark ? 'text-neutral-500' : 'text-stone-500'}`}>
              {t.footer.disclaimer}
            </p>
          </div>

          {/* Navigation Links Mirror with comfortable gaps */}
          <div className="flex flex-wrap items-center gap-8 shrink-0 font-medium">
            <button
              type="button"
              onClick={() => onNavigateToSection('value-chain')}
              className={`transition-colors cursor-pointer ${isDark ? 'hover:text-rose-400' : 'hover:text-rose-700'}`}
            >
              {t.nav.valueChain}
            </button>
            <button
              type="button"
              onClick={() => onNavigateToSection('products')}
              className={`transition-colors cursor-pointer ${isDark ? 'hover:text-rose-400' : 'hover:text-rose-700'}`}
            >
              {t.nav.products}
            </button>
            <button
              type="button"
              onClick={() => onNavigateToSection('nutrition-lab')}
              className={`transition-colors cursor-pointer ${isDark ? 'hover:text-rose-400' : 'hover:text-rose-700'}`}
            >
              {t.nav.nutrition}
            </button>
            <button
              type="button"
              onClick={() => onNavigateToSection('rfq-calculator')}
              className={`transition-colors cursor-pointer ${isDark ? 'hover:text-rose-400' : 'hover:text-rose-700'}`}
            >
              {t.nav.rfq}
            </button>
          </div>

        </div>

        <div className={`mt-8 pt-8 border-t text-center text-xs ${
          isDark ? 'border-white/5 text-neutral-600' : 'border-stone-200 text-stone-400'
        }`}>
          {t.footer.copyright}
        </div>
      </div>

    </footer>
  );
};
