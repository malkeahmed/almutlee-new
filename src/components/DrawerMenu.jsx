import React from 'react';
import { X, Globe, Sparkles, ChevronLeft, Layers } from 'lucide-react';
import { translations } from '../data/translations';

export default function DrawerMenu({ isOpen, onClose, currentCategory, onSelectCategory, lang, setLang, onOpenModal }) {
  const t = translations[lang];

  const handleItemClick = (item) => {
    if (['contact', 'about', 'team'].includes(item.id)) {
      onOpenModal(item.id);
    } else {
      onSelectCategory(item.id);
    }
    onClose();
  };

  return (
    <>
      {/* 1. Backdrop Overlay with Real-time Blur */}
      <div
        className={`drawer-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(7, 14, 28, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          zIndex: 1050,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />

      {/* 2. Glassmorphic Right Off-Canvas Drawer Panel */}
      <div 
        className={`right-drawer ${isOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '350px',
          maxWidth: '85vw',
          height: '100vh',
          background: 'rgba(10, 20, 44, 0.96)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          color: 'white',
          zIndex: 1060,
          boxShadow: '-12px 0 45px rgba(0, 0, 0, 0.7), -2px 0 15px rgba(255, 190, 0, 0.25)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          borderLeft: '2px solid var(--color-secondary)'
        }}
      >
        
        {/* Drawer Header */}
        <div style={{
          padding: '1.35rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '2px solid var(--color-secondary)',
          background: 'rgba(16, 32, 66, 0.95)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <img src="/logo.png" alt="Logo" style={{ height: '42px', objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(255,190,0,0.5))' }} />
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.1 }}>{t.siteName}</h3>
              <p style={{ fontSize: '0.72rem', color: 'var(--color-secondary)', fontWeight: 700, marginTop: '2px' }}>
                {lang === 'ar' ? 'أقسام المطلع الـ 16' : 'بەشەکانی ئەلموتڵەع'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              color: '#ffffff',
              background: 'rgba(255,190,0,0.15)',
              border: '1px solid var(--color-secondary)',
              borderRadius: '8px',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            aria-label="Close menu"
          >
            <X size={20} color="var(--color-secondary)" />
          </button>
        </div>

        {/* Language Switcher Bar */}
        <div style={{ 
          padding: '0.85rem 1.5rem', 
          background: 'rgba(0,0,0,0.35)', 
          borderBottom: '1px solid rgba(255,255,255,0.06)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <span style={{ fontSize: '0.85rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
            <Globe size={16} color="var(--color-secondary)" />
            {lang === 'ar' ? 'اختيار اللغة' : 'هەڵبژاردنی زمان'}
          </span>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <button
              onClick={() => setLang('ar')}
              style={{
                padding: '0.25rem 0.75rem',
                fontSize: '0.78rem',
                fontWeight: 800,
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                background: lang === 'ar' ? 'var(--color-secondary)' : 'rgba(255,255,255,0.1)',
                color: lang === 'ar' ? '#102042' : 'white',
                transition: 'all 0.2s ease'
              }}
            >
              عربي
            </button>
            <button
              onClick={() => setLang('ku')}
              style={{
                padding: '0.25rem 0.75rem',
                fontSize: '0.78rem',
                fontWeight: 800,
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                background: lang === 'ku' ? 'var(--color-secondary)' : 'rgba(255,255,255,0.1)',
                color: lang === 'ku' ? '#102042' : 'white',
                transition: 'all 0.2s ease'
              }}
            >
              کوردی
            </button>
          </div>
        </div>

        {/* 16 Menu Items with Gold Index Numbering & Chevron Arrow `<` */}
        <ul style={{ listStyle: 'none', padding: '0.75rem 0', flexGrow: 1 }}>
          {t.menuItems.map((item, idx) => {
            const isActive = currentCategory === item.id;
            return (
              <li
                key={item.id}
                onClick={() => handleItemClick(item)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1.5rem',
                  color: isActive ? 'var(--color-secondary)' : '#f1f5f9',
                  background: isActive ? 'linear-gradient(90deg, rgba(255, 190, 0, 0.18) 0%, transparent 100%)' : 'transparent',
                  borderRight: isActive ? '4px solid var(--color-secondary)' : '4px solid transparent',
                  fontSize: '1rem',
                  fontWeight: isActive ? 900 : 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.04)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'linear-gradient(90deg, rgba(255, 190, 0, 0.1) 0%, transparent 100%)';
                    e.currentTarget.style.color = 'var(--color-secondary)';
                    e.currentTarget.style.paddingRight = '1.85rem';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#f1f5f9';
                    e.currentTarget.style.paddingRight = '1.5rem';
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    color: isActive ? '#102042' : 'var(--color-secondary)', 
                    background: isActive ? 'var(--color-secondary)' : 'rgba(255,190,0,0.12)',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '4px',
                    fontWeight: 800 
                  }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span>{item.label}</span>
                </div>

                <ChevronLeft 
                  size={18} 
                  color={isActive ? 'var(--color-secondary)' : '#64748b'} 
                />
              </li>
            );
          })}
        </ul>

        {/* Drawer Footer */}
        <div style={{ 
          padding: '1.25rem 1.5rem', 
          borderTop: '1px solid rgba(255,255,255,0.08)', 
          background: '#060d1a', 
          textAlign: 'center' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem', color: 'var(--color-secondary)', fontSize: '0.85rem', fontWeight: 700 }}>
            <Sparkles size={14} />
            <span>{t.siteTagline}</span>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#64748b' }}>© 2026 Almutlee News Agency</p>
        </div>

      </div>
    </>
  );
}
