import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import { Language } from '../types';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  // International Export Desk WhatsApp Number
  const phoneNumber = '971508421900';

  const content = {
    fa: {
      aria: 'گفتگوی مستقیم با واحد صادرات در واتساپ',
      buttonTitle: 'ارتباط مستقیم با واحد فروش و صادرات',
      status: 'آنلاین · پاسخگویی کمتر از ۵ دقیقه',
      headerTitle: 'واحد بازرگانی و فروش خارجی',
      headerSubtitle: 'مجتمع کشت و صنعت سلامت راشین',
      greeting: 'درود، به واحد صادرات و فروش سلامت راشین خوش آمدید. چگونه می‌توانیم در زمینه تأمین عمده گوشت، روغن، چرم و پر شترمرغ به شما کمک کنیم؟',
      startChatBtn: 'شروع گفتگو در واتساپ',
      guarantee: 'تضمین مشاوره تخصصی و ارائه پیش‌فاکتور رسمی',
      prefilledText: encodeURIComponent('سلام، من از وب‌سایت سلامت راشین پیام می‌دهم و علاقه‌مند به دریافت اطلاعات تجاری و استعلام قیمت محصولات صادراتی شترمرغ هستم.'),
    },
    ar: {
      aria: 'تواصل مباشر عبر واتساب مع قسم التصدير',
      buttonTitle: 'محادثة مباشرة مع فريق المبيعات والتصدير',
      status: 'متصل الآن · الرد في أقل من 5 دقائق',
      headerTitle: 'مكتب التصدير والتبادل التجاري',
      headerSubtitle: 'مجمع سلامة راشين الزراعي الصناعي',
      greeting: 'أهلاً بكم في مكتب مبيعات سلامة راشين. يسعدنا استقبال استفساراتكم حول توريد لحوم النعام، الزيوت الطبية والجلود الفاخرة للأسواق الإقليمية والدولية.',
      startChatBtn: 'بدء المحادثة عبر واتساب',
      guarantee: 'استجابة سريعة وتزويدكم بعروض الأسعار الرسمية',
      prefilledText: encodeURIComponent('مرحباً، أود الاستفسار عن تفاصيل التوريد وأسعار تصدير منتجات النعام من شركة سلامة راشين.'),
    },
    en: {
      aria: 'Direct WhatsApp communication with Export Sales Desk',
      buttonTitle: 'Chat with Global Export Desk on WhatsApp',
      status: 'Online · Replies within 5 minutes',
      headerTitle: 'International Export Sales Desk',
      headerSubtitle: 'Salamat Rashin Agro-Industrial Group',
      greeting: 'Hello and welcome to Salamat Rashin International Trade. How can our sales specialists assist you with bulk ostrich meat, pharmaceutical oil, or luxury leather orders?',
      startChatBtn: 'Start WhatsApp Chat',
      guarantee: 'Official proforma estimation & commercial SLA guaranteed',
      prefilledText: encodeURIComponent('Hello, I am contacting you from the Salamat Rashin website regarding international export inquiries and bulk pricing for ostrich commodities.'),
    },
  }[currentLang];

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${content.prefilledText}`;

  return (
    <div className="fixed bottom-6 start-6 z-40 flex flex-col items-start rtl:items-end">
      
      {/* Mini Interactive Chat Drawer Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-80 sm:w-92 overflow-hidden rounded-2xl border border-emerald-500/30 bg-[#111915]/95 text-white shadow-[0_12px_40px_rgba(18,140,126,0.35)] backdrop-blur-xl"
          >
            {/* Header bar */}
            <div className="bg-gradient-to-r from-[#0d4f40] via-[#128C7E] to-[#25D366] p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 border border-white/25">
                    {/* Official WhatsApp SVG Logo */}
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.75 14.86 12.21 15.92C12.8 16.17 13.25 16.32 13.61 16.44C14.19 16.62 14.73 16.6 15.15 16.53C15.63 16.46 16.61 15.93 16.82 15.35C17.02 14.78 17.02 14.28 16.96 14.18C16.9 14.07 16.74 14.01 16.5 13.89C16.26 13.77 15.08 13.19 14.86 13.11C14.64 13.03 14.48 12.99 14.31 13.23C14.15 13.48 13.69 14.01 13.55 14.18C13.41 14.34 13.27 14.36 13.03 14.24C12.79 14.12 12.02 13.87 11.11 13.05C10.4 12.42 9.92 11.64 9.8 11.43C9.68 11.23 9.79 11.12 9.91 11C10.02 10.89 10.15 10.72 10.27 10.58C10.39 10.44 10.43 10.34 10.51 10.18C10.59 10.01 10.55 9.87 10.49 9.75C10.43 9.63 9.97 8.49 9.77 8.03C9.58 7.57 9.38 7.64 9.23 7.63C9.09 7.62 8.93 7.62 8.76 7.62C8.6 7.62 8.53 7.33 8.53 7.33Z"/>
                    </svg>
                    {/* Live Green Pulsing Beacon */}
                    <span className="absolute bottom-0 end-0 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold leading-tight">{content.headerTitle}</h4>
                    <p className="text-[11px] text-emerald-100/90">{content.headerSubtitle}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1 text-white/80 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close WhatsApp chat popup"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Status Indicator */}
              <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-emerald-100">
                <Clock className="h-3 w-3 shrink-0" />
                <span>{content.status}</span>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-4 text-xs">
              {/* Message Bubble */}
              <div className="rounded-xl rounded-ss-xs bg-white/10 border border-white/10 p-3.5 text-stone-200 leading-relaxed shadow-xs">
                <p>{content.greeting}</p>
                <span className="block pt-2 text-[10px] text-emerald-300/80 font-mono text-end">
                  WhatsApp Direct · Instant Sync
                </span>
              </div>

              {/* Security & Direct SLA Note */}
              <div className="flex items-center gap-2 text-[11px] text-stone-400">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{content.guarantee}</span>
              </div>

              {/* Direct Link Anchor Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#128C7E] to-[#25D366] py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-950/40 transition-all hover:brightness-110 active:scale-98 cursor-pointer"
              >
                <span>{content.startChatBtn}</span>
                <ExternalLink className="h-4 w-4 rtl:rotate-180" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Main Button */}
      <div className="relative group">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={content.aria}
          title={content.buttonTitle}
          className="relative flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-[0_6px_25px_rgba(37,211,102,0.45)] backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-108 hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] focus:outline-none focus:ring-2 focus:ring-emerald-400 active:scale-95"
        >
          {/* Live pulsing ripple beacon */}
          <span className="absolute -top-1 -end-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 border-2 border-[#111915] bg-emerald-400" />
          </span>

          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.75 14.86 12.21 15.92C12.8 16.17 13.25 16.32 13.61 16.44C14.19 16.62 14.73 16.6 15.15 16.53C15.63 16.46 16.61 15.93 16.82 15.35C17.02 14.78 17.02 14.28 16.96 14.18C16.9 14.07 16.74 14.01 16.5 13.89C16.26 13.77 15.08 13.19 14.86 13.11C14.64 13.03 14.48 12.99 14.31 13.23C14.15 13.48 13.69 14.01 13.55 14.18C13.41 14.34 13.27 14.36 13.03 14.24C12.79 14.12 12.02 13.87 11.11 13.05C10.4 12.42 9.92 11.64 9.8 11.43C9.68 11.23 9.79 11.12 9.91 11C10.02 10.89 10.15 10.72 10.27 10.58C10.39 10.44 10.43 10.34 10.51 10.18C10.59 10.01 10.55 9.87 10.49 9.75C10.43 9.63 9.97 8.49 9.77 8.03C9.58 7.57 9.38 7.64 9.23 7.63C9.09 7.62 8.93 7.62 8.76 7.62C8.6 7.62 8.53 7.33 8.53 7.33Z"/>
            </svg>
          )}
        </button>

        {/* Small subtle hover label for desktop */}
        {!isOpen && (
          <span className="pointer-events-none absolute bottom-full mb-2 start-0 hidden sm:group-hover:block whitespace-nowrap rounded-lg bg-black/85 px-2.5 py-1 text-[11px] font-medium text-white shadow-md border border-white/10">
            {content.buttonTitle}
          </span>
        )}
      </div>

    </div>
  );
};
