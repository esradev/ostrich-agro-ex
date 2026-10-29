import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, VALUE_CHAIN_STEPS } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

interface ValueChainProps {
  currentLang: Language;
}

export const ValueChain: React.FC<ValueChainProps> = ({ currentLang }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];
  const activeStep = VALUE_CHAIN_STEPS[activeStepIndex];

  return (
    <section id="value-chain" className={`w-full border-b transition-colors duration-200 py-24 lg:py-32 ${
      isDark ? 'border-white/10 bg-[#0e1012]' : 'border-stone-200 bg-[#f8f9fa]'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header with generous margin and relaxed leading */}
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-rose-600 dark:text-rose-400">
            <span>{currentLang === 'fa' ? 'زیرساخت یکپارچه صنعتی' : currentLang === 'ar' ? 'البنية التحتية المتكاملة' : 'Integrated Agro-Industrial Ecosystem'}</span>
            <span aria-hidden="true">·</span>
            <span>Closed-Loop Biosecurity</span>
          </div>
          <h2 className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-[1.3] ${
            isDark ? 'text-white' : 'text-stone-900'
          }`}>
            {t.valueChainSection.title}
          </h2>
          <p className={`pt-2 text-base sm:text-lg leading-relaxed sm:leading-loose ${
            isDark ? 'text-[#c4c8d0]' : 'text-stone-600'
          }`}>
            {t.valueChainSection.subtitle}. {t.valueChainSection.description}
          </p>
        </div>

        {/* Step Selector Ribbon (Interactive segmented list) with spacious padding */}
        <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 border p-2 rounded-xl transition-colors ${
          isDark ? 'border-white/10 bg-[#141619]' : 'border-stone-200 bg-stone-100'
        }`}>
          {VALUE_CHAIN_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`group flex flex-col text-start p-4 rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? isDark
                      ? 'bg-[#1e1518] text-white border border-rose-600/60 shadow-md'
                      : 'bg-white text-stone-900 border border-rose-600/50 shadow-md'
                    : isDark
                      ? 'text-[#9ca3af] hover:text-white hover:bg-white/5'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`font-mono text-xs font-bold ${
                    isActive ? 'text-rose-600 dark:text-rose-400' : isDark ? 'text-neutral-500' : 'text-stone-400'
                  }`}>
                    {step.stepNumber}.
                  </span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-rose-600" />
                  )}
                </div>
                <span className="mt-2 text-xs sm:text-sm font-semibold line-clamp-1">
                  {step.title[currentLang]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Stage Card with spacious interior and breathing room */}
        <div className={`rounded-2xl border p-8 sm:p-12 lg:p-16 transition-colors ${
          isDark 
            ? 'border-white/10 bg-[#121417]' 
            : 'border-stone-200 bg-white shadow-sm'
        }`}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            
            {/* Left/Main Column: Title, Summary, and Protocol List (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">
                  STAGE {activeStep.stepNumber} / 06
                </span>
                <h3 className={`text-2xl font-extrabold sm:text-3xl ${
                  isDark ? 'text-white' : 'text-stone-900'
                }`}>
                  {activeStep.title[currentLang]}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-rose-600 dark:text-rose-400 pt-1">
                  {activeStep.tagline[currentLang]}
                </p>
              </div>

              <p className={`text-base sm:text-lg leading-relaxed sm:leading-loose ${
                isDark ? 'text-[#d1d5db]' : 'text-stone-700'
              }`}>
                {activeStep.summary[currentLang]}
              </p>

              {/* Protocol Checklist with generous gap */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <span className={`text-xs font-bold uppercase tracking-wider block ${
                  isDark ? 'text-[#9ca3af]' : 'text-stone-500'
                }`}>
                  {currentLang === 'fa' ? 'پروتکل‌های اجرایی و بیومتریک' : currentLang === 'ar' ? 'البروتوكولات التنفيذية والمعايير' : 'Operational & Bio-Metric Protocols'}
                </span>
                <div className="space-y-3.5">
                  {activeStep.details[currentLang].map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3.5">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
                      <span className={`text-sm sm:text-base leading-relaxed ${
                        isDark ? 'text-[#e5e7eb]' : 'text-stone-800'
                      }`}>
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Quantitative Metrics and Compliance Seals (5 cols) */}
            <div className={`lg:col-span-5 rounded-xl border p-8 space-y-8 ${
              isDark 
                ? 'border-white/5 bg-[#171a1e]' 
                : 'border-stone-200 bg-stone-50'
            }`}>
              
              <span className={`text-xs font-bold uppercase tracking-wider block ${
                isDark ? 'text-[#9ca3af]' : 'text-stone-500'
              }`}>
                {currentLang === 'fa' ? 'شاخص‌های کلیدی عملکرد (KPI)' : currentLang === 'ar' ? 'مؤشرات الأداء التشغيلي' : 'Key Performance Indicators'}
              </span>

              <div className="space-y-6">
                {activeStep.metrics.map((m, mIdx) => (
                  <div key={mIdx} className={`border-b pb-6 last:border-b-0 space-y-1 ${
                    isDark ? 'border-white/5' : 'border-stone-200'
                  }`}>
                    <span className={`font-mono text-3xl font-extrabold tabular-nums ${
                      isDark ? 'text-white' : 'text-stone-900'
                    }`}>
                      {m.value}
                    </span>
                    <p className={`text-xs sm:text-sm ${
                      isDark ? 'text-[#9ca3af]' : 'text-stone-600'
                    }`}>
                      {m.label[currentLang]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Compliance and Certifications inline */}
              <div className={`pt-4 border-t space-y-3 ${isDark ? 'border-white/5' : 'border-stone-200'}`}>
                <span className={`text-xs font-bold uppercase tracking-wider block ${
                  isDark ? 'text-[#9ca3af]' : 'text-stone-500'
                }`}>
                  {currentLang === 'fa' ? 'گواهی‌نامه‌های انطباق این مرحله' : currentLang === 'ar' ? 'شهادات المطابقة للمرحلة' : 'Stage Compliance Accreditations'}
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {activeStep.standards.map((std, sIdx) => (
                    <span 
                      key={sIdx}
                      className={`text-xs border px-3 py-1.5 rounded-md font-mono ${
                        isDark 
                          ? 'border-white/10 bg-white/5 text-[#d1d5db]' 
                          : 'border-stone-300 bg-white text-stone-700'
                      }`}
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className={`flex items-center justify-between pt-6 border-t ${
                isDark ? 'border-white/5' : 'border-stone-200'
              }`}>
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className={`flex items-center gap-2 text-xs sm:text-sm font-semibold disabled:opacity-30 cursor-pointer ${
                    isDark ? 'text-[#9ca3af] hover:text-white' : 'text-stone-600 hover:text-stone-950'
                  }`}
                >
                  <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
                  <span>{currentLang === 'fa' ? 'مرحله قبلی' : currentLang === 'ar' ? 'المرحلة السابقة' : 'Previous Stage'}</span>
                </button>

                <button
                  type="button"
                  disabled={activeStepIndex === VALUE_CHAIN_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(VALUE_CHAIN_STEPS.length - 1, prev + 1))}
                  className="flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-600 dark:text-rose-400 hover:text-rose-500 disabled:opacity-30 cursor-pointer"
                >
                  <span>{currentLang === 'fa' ? 'مرحله بعدی' : currentLang === 'ar' ? 'المرحلة التالية' : 'Next Stage'}</span>
                  <ChevronRight className="h-4 w-4 rtl:rotate-180" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
