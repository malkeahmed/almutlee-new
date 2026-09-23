import React from 'react';
import { Menu, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';

export default function FloatingRightMenuTab({ onOpenDrawer, isOpen, lang }) {
  const t = translations[lang];

  if (isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1040,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <button
        onClick={onOpenDrawer}
        className="futuristic-floating-tab"
        style={{
          background: 'linear-gradient(135deg, #102042 0%, #091326 100%)',
          color: '#ffffff',
          padding: '1rem 0.65rem 1rem 0.85rem',
          borderRadius: '16px 0 0 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.65rem',
          boxShadow: '-8px 0 30px rgba(10, 20, 44, 0.6), -2px 0 15px rgba(255, 190, 0, 0.35)',
          border: '2px solid var(--color-secondary)',
          borderRight: 'none',
          cursor: 'pointer',
          transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
          position: 'relative',
          overflow: 'hidden'
        }}
        aria-label="Open side menu"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateX(-6px)';
          e.currentTarget.style.boxShadow = '-12px 0 40px rgba(255, 190, 0, 0.55), -4px 0 20px rgba(10, 20, 44, 0.8)';
          e.currentTarget.style.borderColor = '#ffe082';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateX(0)';
          e.currentTarget.style.boxShadow = '-8px 0 30px rgba(10, 20, 44, 0.6), -2px 0 15px rgba(255, 190, 0, 0.35)';
          e.currentTarget.style.borderColor = 'var(--color-secondary)';
        }}
      >
        {/* Glowing Radar Pulse Dot */}
        <span 
          style={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'var(--color-secondary)',
            boxShadow: '0 0 10px var(--color-secondary)'
          }}
          className="animate-pulse"
        />

        {/* Animated Hamburger Icon inside Gold Glass Circle */}
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ffbe00 0%, #d9a000 100%)',
          color: '#102042',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 3px 10px rgba(255, 190, 0, 0.4)'
        }}>
          <Menu size={20} strokeWidth={2.8} />
        </div>

        {/* Vertical Text Label */}
        <span style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          fontSize: '0.88rem',
          fontWeight: 900,
          color: '#ffffff',
          letterSpacing: '1px',
          whiteSpace: 'nowrap',
          textShadow: '0 2px 6px rgba(0,0,0,0.6)'
        }}>
          {lang === 'ar' ? 'القائمة' : 'لیست'}
        </span>

        {/* Total Section Badge */}
        <div style={{
          background: 'rgba(255, 190, 0, 0.2)',
          border: '1px solid var(--color-secondary)',
          color: 'var(--color-secondary)',
          fontSize: '0.72rem',
          fontWeight: 900,
          padding: '0.15rem 0.4rem',
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
        }}>
          16
        </div>

      </button>
    </div>
  );
}
