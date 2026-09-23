import React from 'react';
import { Crosshair, AlertTriangle, ShieldAlert, ChevronLeft, MapPin } from 'lucide-react';
import { translations } from '../data/translations';

export default function ConflictZones({ articles, lang, onSelectArticle }) {
  const t = translations[lang];

  const conflictNews = articles.filter(a => a.categoryId === 'conflict' || a.categoryId === 'security');

  return (
    <section style={{ padding: '2.5rem 0', background: '#0b152b', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ 
              background: '#ef4444', 
              color: 'white',
              padding: '0.5rem',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Crosshair size={22} className="animate-pulse" />
            </div>
            <div>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#ffffff' }}>
                {t.conflictZonesTitle}
              </h2>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                {t.conflictZonesSubtitle}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', padding: '0.35rem 0.75rem', borderRadius: '4px', fontSize: '0.8rem', color: '#f87171' }}>
            <AlertTriangle size={14} />
            <span>{lang === 'ar' ? 'تحديث أمني جاري' : 'نوێکاریی ئاسایشی بەردەوام'}</span>
          </div>
        </div>

        {/* Conflict Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="grid-2">
          {conflictNews.map((item) => (
            <div 
              key={item.id}
              onClick={() => onSelectArticle(item)}
              style={{
                background: '#142347',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '1.25rem',
                display: 'flex',
                gap: '1rem',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-secondary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ width: '130px', height: '100px', flexShrink: 0, borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                <img src={item.image} alt={item.title[lang]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,20,44,0.3)' }}></div>
                <span style={{ position: 'absolute', bottom: '4px', right: '4px', background: '#ef4444', color: 'white', fontSize: '0.65rem', padding: '0.1rem 0.3rem', borderRadius: '2px', fontWeight: 'bold' }}>
                  <MapPin size={10} style={{ display: 'inline', marginLeft: '2px' }} />
                  {lang === 'ar' ? 'متابعة ميدانية' : 'مەیدانی'}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-secondary)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  <ShieldAlert size={13} />
                  <span>{item.publishedAt}</span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.35, marginBottom: '0.35rem' }}>
                  {item.title[lang]}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-secondary)', fontSize: '0.78rem', fontWeight: 700, marginTop: '0.35rem' }}>
                  <span>{t.readMore}</span>
                  <ChevronLeft size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
