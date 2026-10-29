import React from 'react';
import { Language, PageId } from '../types';
import { TRANSLATIONS } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { PageHeader } from '../components/PageHeader';
import { ContactFooter } from '../components/ContactFooter';
import { Building2, MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  currentLang: Language;
  onNavigateHome: () => void;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  currentLang,
  onNavigateHome,
  onNavigate,
}) => {
  const { isDark } = useTheme();
  const t = TRANSLATIONS[currentLang];

  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHeader
        currentLang={currentLang}
        badge="GLOBAL TRADE RELATIONS & COMMERCIAL DESKS"
        title={t.contactSection.title}
        subtitle={t.contactSection.subtitle}
        onNavigateHome={onNavigateHome}
        currentPageName={t.nav.contact}
      />

      {/* Main Commercial Offices & Form (Using enhanced contact components) */}
      <div className="w-full">
        <ContactFooter
          currentLang={currentLang}
          onNavigateToSection={(section) => {
            if (section === 'value-chain') onNavigate('value-chain');
            else if (section === 'products') onNavigate('products');
            else if (section === 'nutrition-lab') onNavigate('nutrition');
            else if (section === 'rfq-calculator') onNavigate('rfq');
            else onNavigate('home');
          }}
        />
      </div>
    </div>
  );
};
