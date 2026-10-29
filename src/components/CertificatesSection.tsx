import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, CERTIFICATES } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

interface CertificatesSectionProps {
  currentLang: Language;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ currentLang }) => {
  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];

  return (
    <section className={`w-full border-b transition-colors duration-200 py-24 lg:py-32 ${
      isDark ? 'border-white/10 bg-[#0c0d0e]' : 'border-stone-200 bg-white'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header with generous space */}
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-rose-600 dark:text-rose-400">
            <Award className="h-4 w-4" />
            <span>INTERNATIONAL ACCREDITATIONS & AUDITING</span>
          </div>
          <h2 className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-[1.3] ${
            isDark ? 'text-white' : 'text-stone-900'
          }`}>
            {t.certSection.title}
          </h2>
          <p className={`pt-2 text-base sm:text-lg leading-relaxed sm:leading-loose ${
            isDark ? 'text-[#c4c8d0]' : 'text-stone-600'
          }`}>
            {t.certSection.subtitle}
          </p>
        </div>

        {/* Certificates Grid with generous card padding and gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.code}
              className={`rounded-2xl border p-8 space-y-6 transition-all ${
                isDark 
                  ? 'border-white/10 bg-[#121417] hover:border-rose-600/40 hover:shadow-lg' 
                  : 'border-stone-200 bg-stone-50 hover:border-rose-400 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                  isDark 
                    ? 'bg-[#1e1316] border-rose-800/40 text-rose-500 shadow-sm' 
                    : 'bg-rose-50 border-rose-200 text-rose-700 shadow-xs'
                }`}>
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span className={`font-mono text-xs uppercase ${isDark ? 'text-neutral-500' : 'text-stone-500'}`}>
                  {cert.code}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className={`text-base font-bold leading-snug ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  {cert.title[currentLang]}
                </h3>
                <span className="block text-xs sm:text-sm text-rose-600 dark:text-rose-400 font-medium">
                  {cert.authority[currentLang]}
                </span>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed pt-3 border-t ${
                isDark ? 'text-[#9ca3af] border-white/5' : 'text-stone-600 border-stone-200'
              }`}>
                {cert.scope[currentLang]}
              </p>

              <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-mono font-medium">
                <CheckCircle2 className="h-4 w-4" />
                <span>Audited & Validated 2026</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
