import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTopButton({ lang = 'ar' }) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (currentScroll > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '62px',
        left: '28px',
        zIndex: 990,
        pointerEvents: isVisible ? 'auto' : 'none',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? (isHovered ? 'translateY(-5px) scale(1.05)' : 'translateY(0) scale(1)') : 'translateY(24px) scale(0.8)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Tooltip Bubble */}
      <span
        style={{
          position: 'absolute',
          top: '-32px',
          background: '#0c1833',
          color: '#ffbe00',
          fontSize: '0.72rem',
          fontWeight: 800,
          padding: '3px 8px',
          borderRadius: '4px',
          border: '1px solid rgba(255, 190, 0, 0.4)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(6px)',
          transition: 'all 0.2s ease'
        }}
      >
        {lang === 'ar' ? 'العودة للأعلى' : 'گەڕانەوە بۆ سەرەوە'}
      </span>

      {/* Main Square Floating Button (Low Border Radius) */}
      <button
        onClick={scrollToTop}
        aria-label={lang === 'ar' ? 'العودة لأعلى الصفحة' : 'گەڕانەوە بۆ سەرەوە'}
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '6px',
          background: isHovered ? '#ffbe00' : '#0c1833',
          color: isHovered ? '#0c1833' : '#ffbe00',
          border: '1.5px solid #ffbe00',
          boxShadow: isHovered 
            ? '0 12px 28px rgba(255, 190, 0, 0.45), 0 0 16px rgba(255, 190, 0, 0.4)' 
            : '0 8px 22px rgba(12, 24, 51, 0.35)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Dynamic Linear Progress Bar at bottom edge of square */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '3px',
            width: `${scrollProgress}%`,
            background: isHovered ? '#0c1833' : '#ffbe00',
            transition: 'width 0.15s ease'
          }}
        />

        {/* Central Arrow Icon */}
        <div
          style={{
            transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'transform 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ArrowUp size={22} strokeWidth={2.8} />
        </div>
      </button>

      {/* Mini Percentage Pill Indicator */}
      <span
        style={{
          fontSize: '0.64rem',
          fontWeight: 900,
          fontFamily: 'monospace',
          color: isHovered ? '#ffbe00' : '#cbd5e1',
          background: 'rgba(12, 24, 51, 0.9)',
          padding: '1px 6px',
          borderRadius: '4px',
          border: '1px solid rgba(255, 190, 0, 0.3)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
          transition: 'color 0.2s ease'
        }}
      >
        {Math.round(scrollProgress)}%
      </span>
    </div>
  );
}
