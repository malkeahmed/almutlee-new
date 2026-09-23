import React, { useRef, useEffect, useState } from 'react';
import { Flame } from 'lucide-react';
import { translations } from '../data/translations';

export default function BreakingTicker({ news, lang, onSelectArticle }) {
  const t = translations[lang];
  const scrollContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  if (!news || news.length === 0) return null;

  // Duplicate news feed 4 times to ensure seamless infinite scrolling
  const duplicatedNews = [...news, ...news, ...news, ...news];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth / 2;
    let pos = maxScroll;
    const speed = 1.2; // Smooth 60fps pixels per frame

    const step = () => {
      if (!isPaused && container) {
        pos -= speed;
        if (pos <= 0) {
          pos = maxScroll;
        }
        container.scrollLeft = pos;
      }
      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, news]);

  return (
    <div 
      className="ticker-wrapper" 
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: '#0a1428',
        borderTop: '2px solid var(--color-secondary)',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.4)',
        userSelect: 'none'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', height: '42px', overflow: 'hidden' }}>
        
        {/* Fixed Gold Title Label */}
        <div style={{
          background: 'var(--color-secondary)',
          color: '#102042',
          height: '100%',
          padding: '0 1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontWeight: 900,
          fontSize: '0.88rem',
          whiteSpace: 'nowrap',
          zIndex: 10,
          boxShadow: '4px 0 12px rgba(0,0,0,0.3)',
          flexShrink: 0
        }}>
          <Flame size={16} />
          <span>{t.latestNews}</span>
        </div>

        {/* Bulletproof 60fps Scroll Container */}
        <div 
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          dir="ltr"
          style={{ 
            flexGrow: 1, 
            overflowX: 'hidden', 
            whiteSpace: 'nowrap', 
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            cursor: 'pointer'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            {duplicatedNews.map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`}
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.6rem',
                  padding: '0 1.5rem',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  direction: lang === 'ar' ? 'rtl' : 'ltr'
                }}
                onClick={() => onSelectArticle(item)}
              >
                <span style={{ color: 'var(--color-secondary)', fontWeight: 800 }}>•</span>
                <span className="ticker-text" style={{ color: '#f8fafc' }}>{item.title[lang]}</span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', background: 'rgba(255,255,255,0.08)', padding: '0.1rem 0.4rem', borderRadius: '3px' }}>
                  {item.publishedAt.split(' ')[1] || item.publishedAt}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
