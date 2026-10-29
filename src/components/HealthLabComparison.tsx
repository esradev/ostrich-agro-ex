import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, NUTRITION_COMPARISON_DATA, OIL_IMAGE } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { HeartPulse } from 'lucide-react';

interface HealthLabComparisonProps {
  currentLang: Language;
}

type MetricKey = 'calories' | 'fat' | 'cholesterol' | 'protein' | 'iron';

export const HealthLabComparison: React.FC<HealthLabComparisonProps> = ({ currentLang }) => {
  const [selectedMetric, setSelectedMetric] = useState<MetricKey>('cholesterol');
  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];

  const metrics: { key: MetricKey; label: string; unit: string; lowerIsBetter: boolean }[] = [
    { key: 'cholesterol', label: t.nutritionSection.cholesterol, unit: 'mg', lowerIsBetter: true },
    { key: 'fat', label: t.nutritionSection.fat, unit: 'g', lowerIsBetter: true },
    { key: 'iron', label: t.nutritionSection.iron, unit: 'mg', lowerIsBetter: false },
    { key: 'protein', label: t.nutritionSection.protein, unit: 'g', lowerIsBetter: false },
    { key: 'calories', label: t.nutritionSection.calories, unit: 'kcal', lowerIsBetter: true },
  ];

  const maxValues: Record<MetricKey, number> = {
    cholesterol: 100,
    fat: 15,
    iron: 4.5,
    protein: 30,
    calories: 220,
  };

  return (
    <section id="nutrition-lab" className={`w-full border-b transition-colors duration-200 py-24 lg:py-32 ${
      isDark ? 'border-white/10 bg-[#0e1012]' : 'border-stone-200 bg-[#f8f9fa]'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header with spacious layout */}
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-rose-600 dark:text-rose-400">
            <HeartPulse className="h-4 w-4" />
            <span>CLINICAL NUTRITION & BIOCHEMICAL RIGOR</span>
          </div>
          <h2 className={`text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-[1.3] ${
            isDark ? 'text-white' : 'text-stone-900'
          }`}>
            {t.nutritionSection.title}
          </h2>
          <p className={`pt-2 text-base sm:text-lg leading-relaxed sm:leading-loose ${
            isDark ? 'text-[#c4c8d0]' : 'text-stone-600'
          }`}>
            {t.nutritionSection.subtitle}
          </p>
        </div>

        {/* Part 1: Interactive Nutritional Comparison of Meat with ample padding */}
        <div className={`rounded-2xl border p-8 sm:p-12 lg:p-14 space-y-10 transition-colors ${
          isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-sm'
        }`}>
          
          <div className={`flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b ${
            isDark ? 'border-white/10' : 'border-stone-200'
          }`}>
            <div className="space-y-1.5">
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                {t.nutritionSection.meatComparisonTitle}
              </h3>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-[#9ca3af]' : 'text-stone-500'}`}>
                {t.nutritionSection.meatComparisonSubtitle}
              </p>
            </div>

            {/* Metric Switcher buttons in Ruby Red */}
            <div className={`flex flex-wrap items-center gap-2 p-1.5 border rounded-xl ${
              isDark ? 'bg-[#171a1e] border-white/10' : 'bg-stone-100 border-stone-200'
            }`}>
              {metrics.map((m) => {
                const isActive = selectedMetric === m.key;
                return (
                  <button
                    key={m.key}
                    type="button"
                    onClick={() => setSelectedMetric(m.key)}
                    className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-gradient-to-r from-[#9b111e] to-[#be123c] text-white shadow-md font-bold'
                        : isDark
                          ? 'text-[#9ca3af] hover:text-white hover:bg-white/5'
                          : 'text-stone-600 hover:text-stone-900 hover:bg-white/80'
                    }`}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bar Chart Representation with Tabular Numerals and generous gaps */}
          <div className="space-y-6 pt-2">
            {NUTRITION_COMPARISON_DATA.map((item, idx) => {
              const val = item[selectedMetric];
              const max = maxValues[selectedMetric];
              const pct = Math.min(100, Math.round((val / max) * 100));
              const isOstrich = idx === 0;

              return (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className={`font-semibold ${
                      isOstrich 
                        ? 'text-rose-600 dark:text-rose-400 font-bold text-sm sm:text-base' 
                        : isDark ? 'text-[#d1d5db]' : 'text-stone-700'
                    }`}>
                      {item.name[currentLang]} {isOstrich && '★ (Lean Ruby Red)'}
                    </span>
                    <span className={`font-mono tabular-nums font-bold ${
                      isDark ? 'text-white' : 'text-stone-900'
                    }`}>
                      {val} {metrics.find((m) => m.key === selectedMetric)?.unit}
                    </span>
                  </div>

                  <div className={`h-3.5 w-full overflow-hidden rounded-full p-0.5 border ${
                    isDark ? 'bg-white/5 border-white/5' : 'bg-stone-100 border-stone-200'
                  }`}>
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        isOstrich
                          ? 'bg-gradient-to-r from-[#9b111e] via-[#be123c] to-[#e11d48]'
                          : isDark ? 'bg-white/20' : 'bg-stone-400'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scientific Clinical Takeaway */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t ${
            isDark ? 'border-white/5' : 'border-stone-200'
          }`}>
            <div className={`rounded-xl border p-6 space-y-1.5 ${
              isDark ? 'border-white/5 bg-[#171a1e]' : 'border-stone-200 bg-stone-50'
            }`}>
              <span className={`text-xs block ${isDark ? 'text-[#9ca3af]' : 'text-stone-500'}`}>
                {currentLang === 'fa' ? 'سلامت قلب و عروق' : currentLang === 'ar' ? 'صحة القلب والشرايين' : 'Cardiovascular Safety'}
              </span>
              <span className="text-base font-bold text-[#10b981] block">
                {currentLang === 'fa' ? '۳۲٪ کلسترول کمتر از گوشت گوساله' : currentLang === 'ar' ? '٣٢٪ كوليسترول أقل من البقر' : '32% Less Cholesterol vs Beef'}
              </span>
            </div>
            <div className={`rounded-xl border p-6 space-y-1.5 ${
              isDark ? 'border-white/5 bg-[#171a1e]' : 'border-stone-200 bg-stone-50'
            }`}>
              <span className={`text-xs block ${isDark ? 'text-[#9ca3af]' : 'text-stone-500'}`}>
                {currentLang === 'fa' ? 'پیشگیری از کم‌خونی' : currentLang === 'ar' ? 'الوقاية من فقر الدم' : 'Bioavailable Heme Iron'}
              </span>
              <span className="text-base font-bold text-rose-600 dark:text-rose-400 block">
                {currentLang === 'fa' ? '۳.۵ برابر آهن بیشتر از مرغ' : currentLang === 'ar' ? '٣.٥ أضعاف الحديد مقارنة بالدجاج' : '3.5x Higher Iron vs Poultry'}
              </span>
            </div>
            <div className={`rounded-xl border p-6 space-y-1.5 ${
              isDark ? 'border-white/5 bg-[#171a1e]' : 'border-stone-200 bg-stone-50'
            }`}>
              <span className={`text-xs block ${isDark ? 'text-[#9ca3af]' : 'text-stone-500'}`}>
                {currentLang === 'fa' ? 'تغذیه ورزشی و رژیم کتو' : currentLang === 'ar' ? 'التغذية الرياضية والكيتو' : 'Athletic & Lean Mass'}
              </span>
              <span className={`text-base font-bold block ${isDark ? 'text-white' : 'text-stone-900'}`}>
                {currentLang === 'fa' ? 'کمتر از ۲ گرم چربی در ۱۰۰ گرم' : currentLang === 'ar' ? 'أقل من ٢غ دهون في ١٠٠غ' : '< 2.1g Total Fat per 100g'}
              </span>
            </div>
          </div>

        </div>

        {/* Part 2: Ostrich Oil Fatty Acid Profile with relaxed margins */}
        <div className={`rounded-2xl border p-8 sm:p-12 lg:p-14 transition-colors ${
          isDark ? 'border-white/10 bg-[#121417]' : 'border-stone-200 bg-white shadow-sm'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual (4 cols) */}
            <div className="lg:col-span-4 rounded-xl overflow-hidden border border-neutral-700 bg-neutral-900 aspect-square relative shadow-md">
              <img
                src={OIL_IMAGE}
                alt="Pure Ostrich Oil Lipid Profile"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-5 start-5 end-5 text-xs font-mono text-white">
                Cold Vacuum Centrifugation | 100% Solvent-Free
              </div>
            </div>

            {/* Scientific Breakdown (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider block">
                  GAS CHROMATOGRAPHY PROFILE (GC-MS)
                </span>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  {t.nutritionSection.oilAnalysisTitle}
                </h3>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-[#9ca3af]' : 'text-stone-500'}`}>
                  {t.nutritionSection.oilAnalysisSubtitle}
                </p>
              </div>

              <p className={`text-sm sm:text-base leading-relaxed sm:leading-loose ${isDark ? 'text-[#d1d5db]' : 'text-stone-700'}`}>
                {t.nutritionSection.omegaDescription}
              </p>

              {/* Fatty Acid Spectrum Breakdown with generous gap */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className={`rounded-xl border p-4 text-start space-y-1 ${
                  isDark ? 'border-white/5 bg-[#171a1e]' : 'border-stone-200 bg-stone-50'
                }`}>
                  <span className={`text-xs block ${isDark ? 'text-[#9ca3af]' : 'text-stone-500'}`}>Omega-9 (Oleic)</span>
                  <span className={`text-xl font-mono font-bold tabular-nums ${isDark ? 'text-white' : 'text-stone-900'}`}>43.5%</span>
                  <span className="text-[11px] text-neutral-400 block">Dermal repair</span>
                </div>
                <div className={`rounded-xl border p-4 text-start space-y-1 ${
                  isDark ? 'border-white/5 bg-[#171a1e]' : 'border-stone-200 bg-stone-50'
                }`}>
                  <span className={`text-xs block ${isDark ? 'text-[#9ca3af]' : 'text-stone-500'}`}>Omega-6 (Linoleic)</span>
                  <span className={`text-xl font-mono font-bold tabular-nums ${isDark ? 'text-white' : 'text-stone-900'}`}>18.2%</span>
                  <span className="text-[11px] text-neutral-400 block">Barrier lipid</span>
                </div>
                <div className={`rounded-xl border p-4 text-start space-y-1 ${
                  isDark ? 'border-white/5 bg-[#171a1e]' : 'border-stone-200 bg-stone-50'
                }`}>
                  <span className={`text-xs block ${isDark ? 'text-[#9ca3af]' : 'text-stone-500'}`}>Omega-3 (Linolenic)</span>
                  <span className="text-xl font-mono font-bold text-rose-500 dark:text-rose-400 tabular-nums">10.1%</span>
                  <span className="text-[11px] text-neutral-400 block">Anti-inflammatory</span>
                </div>
                <div className={`rounded-xl border p-4 text-start space-y-1 ${
                  isDark ? 'border-white/5 bg-[#171a1e]' : 'border-stone-200 bg-stone-50'
                }`}>
                  <span className={`text-xs block ${isDark ? 'text-[#9ca3af]' : 'text-stone-500'}`}>Palmitic / Stearic</span>
                  <span className={`text-xl font-mono font-bold tabular-nums ${isDark ? 'text-white' : 'text-stone-900'}`}>28.2%</span>
                  <span className="text-[11px] text-neutral-400 block">Natural wax matrix</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
