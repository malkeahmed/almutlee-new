import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Mail } from 'lucide-react';

export default function FloatingSocialLeftBar({ lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const isAr = lang === 'ar';

  const socialLinks = [
    {
      id: 'telegram',
      name: isAr ? 'تلغرام' : 'تلیگرام',
      url: 'https://t.me/almutlee',
      color: '#229ED9',
      bgColor: 'rgba(34, 158, 217, 0.18)',
      borderColor: 'rgba(34, 158, 217, 0.45)',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.07-.78 4.18-1.82 6.97-3.02 8.37-3.61 3.98-1.66 4.79-1.95 5.33-1.96.12 0 .38.03.55.17.14.12.18.28.2.45-.02.07-.02.21-.04.38z"/>
        </svg>
      )
    },
    {
      id: 'whatsapp',
      name: isAr ? 'واتساب' : 'واتساپ',
      url: 'https://wa.me/',
      color: '#25D366',
      bgColor: 'rgba(37, 211, 102, 0.18)',
      borderColor: 'rgba(37, 211, 102, 0.45)',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.012 2c-5.508 0-9.989 4.478-9.99 9.984 0 1.763.459 3.483 1.332 5.001l-1.417 5.174 5.297-1.389c1.464.798 3.116 1.218 4.776 1.219h.004c5.507 0 9.986-4.479 9.986-9.986 0-2.668-1.039-5.176-2.924-7.062-1.887-1.886-4.394-2.925-7.064-2.925zm5.836 14.143c-.244.688-1.206 1.328-1.696 1.41-.441.074-1.011.132-2.897-.648-2.415-.998-3.957-3.468-4.079-3.63-.12-.162-.988-1.314-.988-2.507 0-1.192.624-1.778.845-2.019.221-.242.483-.303.644-.303.161 0 .322.001.463.008.149.007.35-.056.547.417.202.484.686 1.674.746 1.796.06.122.101.263.02.424-.081.161-.122.262-.242.404-.121.141-.254.315-.363.423-.121.121-.248.252-.107.494.141.242.628 1.036 1.348 1.678.926.825 1.706 1.08 1.948 1.201.242.121.383.101.524-.061.141-.161.605-.705.766-.947.161-.242.322-.202.543-.121.221.081 1.41.665 1.652.786.242.121.403.181.463.282.061.101.061.585-.183 1.273z"/>
        </svg>
      )
    },
    {
      id: 'facebook',
      name: isAr ? 'فيسبوك' : 'فەیسبووک',
      url: 'https://facebook.com/almutlee',
      color: '#1877F2',
      bgColor: 'rgba(24, 119, 242, 0.18)',
      borderColor: 'rgba(24, 119, 242, 0.45)',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      id: 'instagram',
      name: isAr ? 'إنستغرام' : 'ئینستاگرام',
      url: 'https://instagram.com/almutlee',
      color: '#E4405F',
      bgColor: 'rgba(228, 64, 95, 0.18)',
      borderColor: 'rgba(228, 64, 95, 0.45)',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      id: 'youtube',
      name: isAr ? 'يوتيوب' : 'یوتیوب',
      url: 'https://youtube.com/@almutlee',
      color: '#FF0000',
      bgColor: 'rgba(255, 0, 0, 0.18)',
      borderColor: 'rgba(255, 0, 0, 0.45)',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      id: 'x_twitter',
      name: isAr ? 'منصة 𝕏' : 'تۆڕی 𝕏',
      url: 'https://x.com/almutlee',
      color: '#ffffff',
      bgColor: 'rgba(255, 255, 255, 0.15)',
      borderColor: 'rgba(255, 255, 255, 0.4)',
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      id: 'email',
      name: isAr ? 'البريد الإلكتروني' : 'ئیمەیڵ',
      url: 'mailto:info@almutlee.com',
      color: 'var(--color-secondary)',
      bgColor: 'rgba(255, 190, 0, 0.18)',
      borderColor: 'var(--color-secondary)',
      svg: <Mail size={18} color="var(--color-secondary)" />
    }
  ];

  return (
    <>
      <style>{`
        @keyframes popInLeftSocialIcon {
          0% {
            opacity: 0;
            transform: translate3d(-24px, 0, 0) scale(0.85);
          }
          70% {
            transform: translate3d(4px, 0, 0) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
      `}</style>

      {/* Invisible backdrop to allow clicking outside to close */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1050,
            background: 'rgba(3, 7, 18, 0.35)',
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)',
            transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      )}

      {/* 1. Left Edge Handle Tab Button (Displays when closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="floating-social-bar"
          style={{
            position: 'fixed',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1055,
            background: 'linear-gradient(180deg, #102042 0%, #070d1c 100%)',
            color: 'var(--color-secondary)',
            padding: '0.85rem 0.45rem 0.85rem 0.35rem',
            borderRadius: '0 8px 8px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            boxShadow: '6px 0 20px rgba(255, 190, 0, 0.45), 2px 0 10px rgba(0,0,0,0.5)',
            border: '1.5px solid var(--color-secondary)',
            borderLeft: 'none',
            cursor: 'pointer',
            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), boxShadow 0.3s ease',
            outline: 'none',
            width: '32px',
            willChange: 'transform'
          }}
          aria-label="Open social icons strip"
          title={isAr ? 'شبكات التواصل' : 'پەیوەندی'}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-50%) translateX(4px)';
            e.currentTarget.style.boxShadow = '10px 0 25px rgba(255, 190, 0, 0.65)';
            e.currentTarget.style.borderColor = '#ffe082';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(-50%) translateX(0)';
            e.currentTarget.style.boxShadow = '6px 0 20px rgba(255, 190, 0, 0.45)';
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

          {/* Right Arrow Icon */}
          <div style={{
            color: 'var(--color-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <ChevronRight size={20} strokeWidth={2.5} />
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
            {isAr ? 'تواصل' : 'پەیوەندی'}
          </span>

          {/* Golden Badge 7 */}
          <span style={{
            background: 'var(--color-secondary)',
            color: '#102042',
            fontSize: '0.65rem',
            fontWeight: 900,
            padding: '0.08rem 0.25rem',
            borderRadius: '3px',
            lineHeight: 1
          }}>
            7
          </span>
        </button>
      )}

      {/* 2. Hardware-Accelerated Ultra-Smooth 60fps Icons Strip */}
      <aside
        style={{
          position: 'fixed',
          left: 0,
          top: '50%',
          transform: isOpen ? 'translate3d(0, -50%, 0)' : 'translate3d(-150%, -50%, 0)',
          visibility: isOpen ? 'visible' : 'hidden',
          willChange: 'transform, opacity',
          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, visibility 0.45s ease',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          zIndex: 1060,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'linear-gradient(180deg, rgba(16, 32, 66, 0.96) 0%, rgba(6, 12, 27, 0.98) 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: '0.65rem 0.4rem',
          borderRadius: '0 12px 12px 0',
          border: '1.5px solid var(--color-secondary)',
          borderLeft: 'none',
          boxShadow: isOpen ? '10px 0 35px rgba(0, 0, 0, 0.85), 2px 0 20px rgba(255, 190, 0, 0.3)' : 'none',
          gap: '0.5rem'
        }}
        aria-label="Social Media Icons Only Strip"
      >
        {/* Top Collapse Arrow Button `<` */}
        <button
          onClick={() => setIsOpen(false)}
          style={{
            width: '38px',
            height: '30px',
            borderRadius: '6px',
            background: 'rgba(255, 190, 0, 0.15)',
            color: 'var(--color-secondary)',
            border: '1px solid var(--color-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            marginBottom: '0.25rem',
            transition: 'all 0.22s ease'
          }}
          title={isAr ? 'إغلاق' : 'داخستن'}
          aria-label="Close social icons"
        >
          <ChevronLeft size={18} strokeWidth={2.5} />
        </button>

        {/* 7 Compact Social Icons with Staggered 60fps Spring Entrance */}
        {socialLinks.map((item, idx) => {
          const isHovered = hoveredId === item.id;
          return (
            <div key={item.id} style={{ position: 'relative' }}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: isHovered ? item.bgColor : 'rgba(255, 255, 255, 0.06)',
                  color: isHovered ? item.color : '#cbd5e1',
                  border: isHovered ? `1.5px solid ${item.borderColor}` : '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  boxShadow: isHovered ? `0 4px 15px ${item.bgColor}` : 'none',
                  transform: isHovered ? 'translateX(4px) scale(1.1)' : 'translateX(0) scale(1)',
                  transition: 'all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  animation: isOpen ? `popInLeftSocialIcon 0.48s cubic-bezier(0.16, 1, 0.3, 1) forwards` : 'none',
                  animationDelay: isOpen ? `${0.06 + idx * 0.025}s` : '0s'
                }}
                title={item.name}
              >
                {item.svg}
              </a>

              {/* Tooltip to the right on hover */}
              {isHovered && (
                <div
                  style={{
                    position: 'absolute',
                    left: '48px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: '#0a1428',
                    color: item.color,
                    border: `1px solid ${item.borderColor}`,
                    padding: '0.3rem 0.65rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.8)',
                    pointerEvents: 'none',
                    zIndex: 1070
                  }}
                >
                  {item.name}
                </div>
              )}
            </div>
          );
        })}

      </aside>
    </>
  );
}
