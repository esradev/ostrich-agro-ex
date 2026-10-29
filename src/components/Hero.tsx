import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, HERO_IMAGE } from '../data/content';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onExploreProducts: () => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onExploreProducts,
  onRequestQuote,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden border-b border-white/10 bg-[#0c0d0e]">
      
      {/* Background Photography with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Salamat Rashin Ostrich Agro-Industrial Complex"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center brightness-70 scale-[1.02] transition-transform duration-1000"
        />
        {/* Measured dark luxury gradient scrim with subtle deep ruby tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/80 to-[#0c0d0e]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-950/25 via-transparent to-transparent" />
      </div>

      {/* Hero Content Container with ample padding */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-between px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        
        {/* Top Text Content Area */}
        <div className="max-w-3xl pt-10 sm:pt-16 space-y-8">
          
          {/* Subtle Category Kicker in Ruby Red */}
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider text-rose-400">
            <span className="uppercase">{t.hero.badge}</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2014</span>
            <span aria-hidden="true">·</span>
            <span>Halal & HACCP</span>
          </div>

          {/* Marquee Headline */}
          <h1 
            className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.3] sm:leading-[1.25]"
            style={{ textWrap: 'balance' }}
          >
            {t.hero.title}
          </h1>

          {/* Subtitle / Value Proposition with relaxed reading line-height */}
          <p className="text-base text-[#e2e8f0] sm:text-lg leading-relaxed sm:leading-loose max-w-2xl font-normal pt-2">
            {t.hero.subtitle}
          </p>

          {/* Action CTAs with generous button sizing and ruby red primary */}
          <div className="pt-4 flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2.5 rounded-lg bg-gradient-to-r from-[#9b111e] via-[#be123c] to-[#9b111e] px-7 py-4 text-sm font-bold text-white transition-all hover:brightness-110 shadow-[0_4px_25px_rgba(155,17,30,0.4)] cursor-pointer"
            >
              <span>{t.actions.requestQuote}</span>
              <ArrowUpRight className="h-4 w-4 rtl:rotate-270 ltr:rotate-0" />
            </button>

            <button
              type="button"
              onClick={onExploreProducts}
              className="inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/5 backdrop-blur-md px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30 cursor-pointer"
            >
              <span>{t.actions.exploreProducts}</span>
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative KPI / Proof Strip with relaxed spacing */}
        <div className="mt-20 sm:mt-28 border-t border-white/10 pt-12 pb-6">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
            {t.hero.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="flex flex-col border-s border-white/15 ps-5 sm:ps-8 first:border-s-0 space-y-2"
              >
                <span className="font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
