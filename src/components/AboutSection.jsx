import React from 'react';
import { Info, Target, Award } from 'lucide-react';
import { translations } from '../data/translations';

export default function AboutSection({ lang }) {
  const t = translations[lang];

  return (
    <section id="section-about" style={{ padding: '3rem 0', background: '#0b152c', color: 'white', borderBottom: '1px solid rgba(255,190,0,0.2)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', borderBottom: '2px solid var(--color-secondary)', paddingBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ background: 'var(--color-secondary)', color: '#102042', padding: '0.45rem', borderRadius: '4px', display: 'flex' }}>
              <Info size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>
                {t.aboutUs.title}
              </h2>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-secondary)' }}>
                {t.siteTagline}
              </p>
            </div>
          </div>
          <span className="badge-gold" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
            من نحن
          </span>
        </div>

        {/* Content Box */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem', alignItems: 'center' }}>
          <div style={{ gridColumn: 'span 7' }} className="grid-col-mobile">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-secondary)', marginBottom: '1rem' }}>
              {lang === 'ar' ? 'الصحافة المستقلة والخبر الموثوق' : 'ڕۆژنامەگەری سەربەخۆ و هەواڵی متمانەپێکراو'}
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#cbd5e1', marginBottom: '1.5rem' }}>
              {t.aboutUs.description}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="grid-2">
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '4px', borderRight: '4px solid var(--color-secondary)' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Target size={16} /> الرسالة
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.5 }}>{t.aboutUs.mission}</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '4px', borderRight: '4px solid white' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'white', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Award size={16} /> الرؤية
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.5 }}>{t.aboutUs.vision}</p>
              </div>
            </div>
          </div>

          <div style={{ gridColumn: 'span 5', textAlign: 'center' }} className="grid-col-mobile">
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '4px', border: '1px solid rgba(255,190,0,0.3)' }}>
              <img src="/logo.png" alt="Logo" style={{ height: '90px', margin: '0 auto 1.25rem auto', filter: 'drop-shadow(0 4px 12px rgba(255, 190, 0, 0.4))' }} />
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'white' }}>المطلع</h3>
              <p style={{ color: 'var(--color-secondary)', fontWeight: 700, fontSize: '0.9rem', marginTop: '0.2rem' }}>Almutlee News Agency</p>
              <span style={{ display: 'inline-block', marginTop: '1rem', padding: '0.35rem 0.85rem', background: 'rgba(255,190,0,0.15)', color: 'var(--color-secondary)', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700 }}>
                تأسست عام 2026 - بغداد
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
