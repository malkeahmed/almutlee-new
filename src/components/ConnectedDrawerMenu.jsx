import React from 'react';
import { ChevronLeft, ChevronRight, Globe, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';

export default function ConnectedDrawerMenu({ 
  isOpen, 
  onToggle, 
  currentCategory, 
  onSelectCategory, 
  lang, 
  setLang, 
  onOpenModal 
}) {
  const t = translations[lang];

  const handleItemClick = (item) => {
    if (['contact', 'about', 'team'].includes(item.id)) {
      onOpenModal(item.id);
    } else {
      onSelectCategory(item.id);
    }
    onToggle(false);
  };

  return (
    <>
      {/* Keyframe Animations inline */}
      <style>{`
        @keyframes slideInMenuItem {
          0% {
            opacity: 0;
            transform: translate3d(24px, 0, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>

      {/* 1. Backdrop Blur Overlay */}
      <div
        className={`drawer-overlay ${isOpen ? 'active' : ''}`}
        onClick={() => onToggle(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(3, 7, 18, 0.84)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          zIndex: 1050,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />

      {/* 2. Ultra-Delicate Golden Handle Tab */}
      {!isOpen && (
        <button
          onClick={() => onToggle(true)}
          style={{
            position: 'fixed',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1055,
            background: 'linear-gradient(180deg, #102042 0%, #070d1c 100%)',
            color: 'var(--color-secondary)',
            padding: '0.85rem 0.35rem 0.85rem 0.45rem',
            borderRadius: '8px 0 0 8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            boxShadow: '-6px 0 20px rgba(255, 190, 0, 0.45), -2px 0 10px rgba(0,0,0,0.5)',
            border: '1.5px solid var(--color-secondary)',
            borderRight: 'none',
            cursor: 'pointer',
            transition: 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), boxShadow 0.3s ease',
            outline: 'none',
            width: '32px',
            willChange: 'transform'
          }}
          className="delicate-slim-tab"
          aria-label="Open menu drawer"
          title={lang === 'ar' ? 'القائمة الرئيسية' : 'لیست'}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-50%) translateX(-4px)';
            e.currentTarget.style.boxShadow = '-10px 0 25px rgba(255, 190, 0, 0.65)';
            e.currentTarget.style.borderColor = '#ffe082';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(-50%) translateX(0)';
            e.currentTarget.style.boxShadow = '-6px 0 20px rgba(255, 190, 0, 0.45)';
            e.currentTarget.style.borderColor = 'var(--color-secondary)';
          }}
        >
          {/* Pulsing Golden Glow Dot */}
          <span 
            style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: 'var(--color-secondary)',
              boxShadow: '0 0 6px var(--color-secondary)'
            }}
            className="animate-pulse"
          />

          {/* Glowing Arrow Icon */}
          <div style={{
            color: 'var(--color-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ChevronLeft size={20} strokeWidth={2.5} />
          </div>

          {/* Vertical Title Text */}
          <span style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '1px',
            color: '#e2e8f0'
          }}>
            {lang === 'ar' ? 'القائمة' : 'لیست'}
          </span>

          {/* Golden Badge 16 */}
          <span style={{
            background: 'var(--color-secondary)',
            color: '#102042',
            fontSize: '0.65rem',
            fontWeight: 900,
            padding: '0.08rem 0.25rem',
            borderRadius: '3px',
            lineHeight: 1
          }}>
            16
          </span>
        </button>
      )}

      {/* 3. Hardware-Accelerated Ultra-Smooth Luxury Drawer Panel */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '350px',
          maxWidth: '86vw',
          height: '100vh',
          background: 'linear-gradient(180deg, #091326 0%, #040914 100%)',
          color: 'white',
          zIndex: 1060,
          boxShadow: isOpen ? '-24px 0 70px rgba(0, 0, 0, 0.9), -4px 0 30px rgba(255, 190, 0, 0.25)' : 'none',
          transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(calc(100% + 50px), 0, 0)',
          visibility: isOpen ? 'visible' : 'hidden',
          willChange: 'transform, opacity',
          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, visibility 0.45s ease',
          pointerEvents: isOpen ? 'auto' : 'none',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          borderLeft: isOpen ? '1.5px solid rgba(255, 190, 0, 0.45)' : 'none'
        }}
      >
        
        {/* Delicate Drawer Header */}
        <div style={{
          padding: '1.15rem 1.35rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 190, 0, 0.25)',
          background: 'rgba(8, 16, 36, 0.96)'
        }}>
          
          {/* Logo & Agency Title (Clean No Box) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src={import.meta.env.BASE_URL + "logo.png"} alt="Logo" style={{ height: '36px', objectFit: 'contain', display: 'block' }} />
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.1 }}>{t.siteName}</h3>
              <p style={{ fontSize: '0.7rem', color: 'var(--color-secondary)', fontWeight: 700, marginTop: '2px' }}>
                {lang === 'ar' ? 'أقسام المطلع الـ 16' : 'بەشەکانی ئەلموتڵەع'}
              </p>
            </div>
          </div>

          {/* Sharp Square Close Button `>` with Minimal Border Radius */}
          <button
            onClick={() => onToggle(false)}
            style={{
              background: 'rgba(255, 190, 0, 0.12)',
              color: 'var(--color-secondary)',
              borderRadius: '3px',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: '1px solid var(--color-secondary)',
              boxShadow: '0 2px 10px rgba(255, 190, 0, 0.25)',
              transition: 'all 0.25s ease'
            }}
            title={lang === 'ar' ? 'إغلاق القائمة' : 'داخستن'}
            aria-label="Close menu"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>

        </div>

        {/* Dual Language Switcher Bar */}
        <div style={{ 
          padding: '0.75rem 1.35rem', 
          background: '#050a16', 
          borderBottom: '1px solid rgba(255,255,255,0.05)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <span style={{ fontSize: '0.82rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
            <Globe size={15} color="var(--color-secondary)" />
            {lang === 'ar' ? 'اللغة الحالية' : 'زمانی ئێستا'}
          </span>
          <div style={{ display: 'flex', gap: '0.35rem' }}>
            <button
              onClick={() => setLang('ar')}
              style={{
                padding: '0.22rem 0.7rem',
                fontSize: '0.76rem',
                fontWeight: 800,
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                background: lang === 'ar' ? 'var(--color-secondary)' : 'rgba(255,255,255,0.07)',
                color: lang === 'ar' ? '#102042' : '#cbd5e1',
                transition: 'all 0.2s ease'
              }}
            >
              عربي
            </button>
            <button
              onClick={() => setLang('ku')}
              style={{
                padding: '0.22rem 0.7rem',
                fontSize: '0.76rem',
                fontWeight: 800,
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                background: lang === 'ku' ? 'var(--color-secondary)' : 'rgba(255,255,255,0.07)',
                color: lang === 'ku' ? '#102042' : '#cbd5e1',
                transition: 'all 0.2s ease'
              }}
            >
              کوردی
            </button>
          </div>
        </div>

        {/* 16 Menu Categories List (With Staggered Fluid Cascade Entrance) */}
        <ul style={{ listStyle: 'none', padding: '0.35rem 0', flexGrow: 1 }}>
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
                  padding: '0.72rem 1.35rem',
                  color: isActive ? 'var(--color-secondary)' : '#e2e8f0',
                  background: isActive ? 'linear-gradient(90deg, rgba(255, 190, 0, 0.14) 0%, transparent 100%)' : 'transparent',
                  borderRight: isActive ? '1.5px solid var(--color-secondary)' : '1.5px solid transparent',
                  fontSize: '0.96rem',
                  fontWeight: isActive ? 900 : 600,
                  cursor: 'pointer',
                  transition: 'background 0.25s ease, color 0.25s ease, padding-right 0.25s ease',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
                  animation: isOpen ? `slideInMenuItem 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards` : 'none',
                  animationDelay: isOpen ? `${0.08 + idx * 0.02}s` : '0s',
                  opacity: isOpen ? 0 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'linear-gradient(90deg, rgba(255, 190, 0, 0.08) 0%, transparent 100%)';
                    e.currentTarget.style.color = '#ffe082';
                    e.currentTarget.style.paddingRight = '1.65rem';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#e2e8f0';
                    e.currentTarget.style.paddingRight = '1.35rem';
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  {/* Ultra-Delicate Gold Outline Badge */}
                  <span style={{ 
                    fontSize: '0.72rem', 
                    color: isActive ? '#102042' : 'var(--color-secondary)', 
                    background: isActive ? 'var(--color-secondary)' : 'rgba(255, 190, 0, 0.08)',
                    border: isActive ? '1px solid var(--color-secondary)' : '1px solid rgba(255, 190, 0, 0.3)',
                    padding: '0.12rem 0.45rem',
                    borderRadius: '6px',
                    fontWeight: 800 
                  }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span>{item.label}</span>
                </div>

                <ChevronLeft 
                  size={16} 
                  color={isActive ? 'var(--color-secondary)' : '#64748b'} 
                />
              </li>
            );
          })}
        </ul>

        {/* Drawer Footer */}
        <div style={{ 
          padding: '1.1rem 1.35rem', 
          borderTop: '1px solid rgba(255,255,255,0.06)', 
          background: '#030712', 
          textAlign: 'center' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginBottom: '0.3rem', color: 'var(--color-secondary)', fontSize: '0.82rem', fontWeight: 700 }}>
            <Sparkles size={14} />
            <span>{t.siteTagline}</span>
          </div>
          <p style={{ fontSize: '0.7rem', color: '#64748b' }}>© 2026 Almutlee News Agency</p>
        </div>

      </div>
    </>
  );
}
