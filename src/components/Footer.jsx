import React, { useState } from 'react';
import { 
  Send, CheckCircle, Facebook, Twitter, Youtube, Instagram, 
  Linkedin, Radio, Smartphone, MapPin, Mail, Phone, ShieldCheck, 
  ChevronLeft, Award, Sparkles, Clock, Globe2
} from 'lucide-react';
import { translations } from '../data/translations';

export default function Footer({ lang, onSelectCategory, onOpenModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const t = translations[lang] || translations.ar;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const handleSectionScroll = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 16 Official News Sections
  const newsSections = [
    { id: 'section-home', label: lang === 'ar' ? 'الرئيسية' : 'سەرەکی' },
    { id: 'section-politics', label: lang === 'ar' ? 'سياسة' : 'سیاسەت' },
    { id: 'section-security', label: lang === 'ar' ? 'أمن' : 'ئاسایش' },
    { id: 'section-local', label: lang === 'ar' ? 'محلي' : 'ناوخۆیی' },
    { id: 'section-sports', label: lang === 'ar' ? 'رياضة' : 'وەرزش' },
    { id: 'section-women', label: lang === 'ar' ? 'حواء' : 'ئافرەتان' },
    { id: 'section-economy', label: lang === 'ar' ? 'اقتصاد' : 'ئابووری' },
    { id: 'section-opinions', label: lang === 'ar' ? 'آراء' : 'ڕاکان' },
    { id: 'section-video', label: lang === 'ar' ? 'فيديو' : 'ڤیدیۆ' },
    { id: 'section-variety', label: lang === 'ar' ? 'منوعات' : 'هەمەچەشن' },
    { id: 'section-intl-reports', label: lang === 'ar' ? 'تقارير دولية' : 'ڕاپۆرتی نێودەوڵەتی' },
    { id: 'section-special-almutlee', label: lang === 'ar' ? 'خاص بـ المطلع' : 'تایبەت بە المطلع' },
    { id: 'section-culture-arts', label: lang === 'ar' ? 'ثقافة وفنون' : 'کەلتوور و هونەر' },
    { id: 'section-arab_intl', label: lang === 'ar' ? 'عربي ودولي' : 'عەرەبی و نێودەوڵەتی' },
    { id: 'section-science-tech', label: lang === 'ar' ? 'علوم وتكنولوجيا' : 'زانست و تەکنەلۆژیا' },
    { id: 'section-photo-reports', label: lang === 'ar' ? 'تقارير مصورة' : 'ڕاپۆرتە وێنەییەکان' }
  ];

  return (
    <footer style={{ 
      background: 'linear-gradient(180deg, #060c1c 0%, #030610 100%)', 
      color: '#cbd5e1', 
      borderTop: '4px solid var(--color-secondary)', 
      position: 'relative'
    }}>
      <div className="container" style={{ padding: '3.5rem 1.75rem 2rem 1.75rem' }}>
        
        {/* MAIN 3-COLUMN EDITORIAL DIRECTORY */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1.8fr 1fr',
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }} className="footer-columns-grid">
          
          {/* Column 1: Brand Authority & Accreditation */}
          <div>
            <div 
              style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem', cursor: 'pointer' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src="/logo.png" alt="المطلع" style={{ height: '56px', objectFit: 'contain' }} />
              <div>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#ffffff', margin: 0, lineHeight: 1 }}>المطلع</h3>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-secondary)', fontWeight: 800, letterSpacing: '0.5px' }}>
                  ALMUTLEE NEWS AGENCY
                </span>
              </div>
            </div>

            {/* Syndicate Accreditation Box */}
            <div style={{
              background: 'rgba(255, 190, 0, 0.08)',
              border: '1px solid rgba(255, 190, 0, 0.25)',
              borderRadius: '6px',
              padding: '0.65rem 0.9rem',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Award size={18} color="#ffbe00" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.76rem', color: '#e2e8f0', fontWeight: 700, lineHeight: 1.4 }}>
                {t.siteTagline}
              </span>
            </div>

            <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              {lang === 'ar' 
                ? 'المطلع؛ سرعة في نقل الخبر ومصداقية عالية في تغطية الحدث؛ نبحث فيما وراء الخبر؛ ونحلل تداعيات الأحداث؛ ونراقب التطورات. المطلع: رصد .. متابعة .. تحليل' 
                : 'المطلع؛ خێرایی لە گەیاندنی هەواڵ و متمانەی بەرز لە ڕووماڵکردنی ڕووداوەکاندا؛ چاودێری پەرەسەندنەکان دەکەین. المطلع: چاودێری .. بەدواداچوون .. شیکاری'}
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <a href="#" className="footer-social-btn" aria-label="Facebook"><Facebook size={17} /></a>
              <a href="#" className="footer-social-btn" aria-label="Twitter"><Twitter size={17} /></a>
              <a href="#" className="footer-social-btn" aria-label="YouTube"><Youtube size={17} /></a>
              <a href="#" className="footer-social-btn" aria-label="Instagram"><Instagram size={17} /></a>
              <a href="#" className="footer-social-btn" aria-label="LinkedIn"><Linkedin size={17} /></a>
            </div>
          </div>

          {/* Column 2: All 16 News Sections (4-Column Compact Grid) */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '1.5rem',
              borderRight: '3px solid var(--color-secondary)',
              paddingRight: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>{t.categoriesTitle}</span>
              <span style={{ fontSize: '0.72rem', color: 'var(--color-secondary)', fontWeight: 800 }}>({newsSections.length} قسماً)</span>
            </h4>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.75rem 0.5rem',
              fontSize: '0.86rem'
            }} className="footer-sections-quad">
              {newsSections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleSectionScroll(sec.id)}
                  className="footer-nav-link"
                >
                  <span style={{ color: 'var(--color-secondary)', fontSize: '0.75rem' }}>▪</span>
                  <span>{sec.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Institutional & Contact Bureau */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: 900,
              color: '#ffffff',
              marginBottom: '1.5rem',
              borderRight: '3px solid var(--color-secondary)',
              paddingRight: '0.75rem'
            }}>
              {lang === 'ar' ? 'المؤسسة والاتصال' : 'پەیوەندی و خزمەتگوزاری'}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.84rem', marginBottom: '1.4rem' }}>
              <button onClick={() => onOpenModal && onOpenModal('about')} className="footer-nav-link">
                <ChevronLeft size={13} color="var(--color-secondary)" />
                <span>{lang === 'ar' ? 'من نحن (نبذة عن المطلع)' : 'دەربارەی ئێمە'}</span>
              </button>
              <button onClick={() => onOpenModal && onOpenModal('team')} className="footer-nav-link">
                <ChevronLeft size={13} color="var(--color-secondary)" />
                <span>{lang === 'ar' ? 'هيئة التحرير وفريق العمل' : 'تیمی نووسەران'}</span>
              </button>
              <button onClick={() => onOpenModal && onOpenModal('contact')} className="footer-nav-link">
                <ChevronLeft size={13} color="var(--color-secondary)" />
                <span>{lang === 'ar' ? 'اتصل بنا والإعلانات' : 'پەیوەندی و ڕیکلام'}</span>
              </button>
              <button onClick={() => onOpenModal && onOpenModal('app_download')} className="footer-nav-link">
                <ChevronLeft size={13} color="var(--color-secondary)" />
                <span>{lang === 'ar' ? 'تحميل تطبيق المطلع' : 'داگرتنی ئەپڵیکەیشن'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* 3. LUXURY COPYRIGHT BAR */}
        <div style={{
          paddingTop: '1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: '0.88rem',
          color: '#cbd5e1',
          direction: 'ltr',
          fontFamily: 'sans-serif'
        }}>
          <p style={{ margin: 0, letterSpacing: '0.2px' }}>
            Copyrights | Powerd By <span style={{ color: '#ffbe00', fontWeight: 800 }}>دجلة</span> 2026 <span style={{ color: '#ffbe00', fontWeight: 800 }}>المُطّلع</span> . All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
