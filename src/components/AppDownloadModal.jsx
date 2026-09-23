import React from 'react';
import { X, Smartphone, Download, CheckCircle, QrCode, Star, ShieldCheck, Zap } from 'lucide-react';

export default function AppDownloadModal({ isOpen, onClose, lang }) {
  if (!isOpen) return null;

  const isAr = lang === 'ar';

  const AppleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.67-.82 1.13-1.96.99-3.1-.97.04-2.17.65-2.86 1.46-.62.72-1.16 1.88-1.01 3 .09.01.21.02.32.02 1.05 0 2.19-.56 2.56-1.38z"/>
    </svg>
  );

  const AndroidIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.523 15.3414C17.06 15.3414 16.685 14.9664 16.685 14.5028C16.685 14.0393 17.06 13.6643 17.523 13.6643C17.9866 13.6643 18.3616 14.0393 18.3616 14.5028C18.3616 14.9664 17.9866 15.3414 17.523 15.3414ZM6.47702 15.3414C6.01347 15.3414 5.63847 14.9664 5.63847 14.5028C5.63847 14.0393 6.01347 13.6643 6.47702 13.6643C6.94057 13.6643 7.31557 14.0393 7.31557 14.5028C7.31557 14.9664 6.94057 15.3414 6.47702 15.3414ZM17.8967 9.8732L19.5298 7.04456C19.6841 6.77732 19.5925 6.43575 19.3253 6.28143C19.0581 6.12711 18.7165 6.2187 18.5622 6.48594L16.8923 9.37817C15.4299 8.71077 13.7745 8.33057 12 8.33057C10.2255 8.33057 8.57014 8.71077 7.10773 9.37817L5.43781 6.48594C5.28349 6.2187 4.94192 6.12711 4.67468 6.28143C4.40744 6.43575 4.31585 6.77732 4.47017 7.04456L6.10332 9.8732C2.6953 11.7371 0.354004 15.176 0.354004 19.2319H23.646C23.646 15.176 21.3047 11.7371 17.8967 9.8732Z"/>
    </svg>
  );

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(3, 7, 18, 0.88)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      zIndex: 1100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.25rem'
    }}>
      
      {/* Modal Container */}
      <div style={{
        background: 'linear-gradient(180deg, #0e1a35 0%, #060c1b 100%)',
        border: '1.5px solid rgba(255, 190, 0, 0.45)',
        borderRadius: '24px',
        maxWidth: '540px',
        width: '100%',
        padding: '2.5rem 2rem 2rem',
        color: 'white',
        boxShadow: '0 30px 70px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 190, 0, 0.22)',
        position: 'relative',
        overflow: 'hidden'
      }}>

        {/* Decorative Top Glow Ambient Accent */}
        <div style={{
          position: 'absolute',
          top: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '260px',
          height: '160px',
          background: 'radial-gradient(circle, rgba(255, 190, 0, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            left: isAr ? '1.2rem' : 'auto',
            right: isAr ? 'auto' : '1.2rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#cbd5e1',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* App Logo & Title Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative' }}>
          
          {/* Dual Brand Icon Showcase */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            marginBottom: '1.25rem'
          }}>
            {/* App Logo Box */}
            <div style={{
              width: '68px',
              height: '68px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #102042 0%, #081226 100%)',
              border: '2px solid var(--color-secondary)',
              padding: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 25px rgba(255, 190, 0, 0.35)'
            }}>
              <img src={import.meta.env.BASE_URL + "logo.png"} alt="Almutlee" style={{ height: '48px', objectFit: 'contain' }} />
            </div>

            {/* Platform Icons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.08)', padding: '0.2rem 0.65rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>
                <AppleIcon />
                <span>iOS (iPhone & iPad)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '0.2rem 0.65rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>
                <AndroidIcon />
                <span>Android (Samsung & Play)</span>
              </div>
            </div>
          </div>

          <h2 style={{ fontSize: '1.7rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.3px', marginBottom: '0.4rem' }}>
            {isAr ? 'حمل تطبيق المطلع الإخباري الرسمي' : 'داگرتنی ئەپڵیکەیشنی فەرمی ئەلموتڵەع'}
          </h2>
          
          <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5, maxWidth: '440px', margin: '0 auto' }}>
            {isAr 
              ? 'تغطية إخبارية عاجلة على مدار الساعة، بث مباشر، ومقالات حصرية متوفرة على كافة الأجهزة الذكية'
              : 'نوێترین هەواڵە بەپەلەکان و ڕاپۆرتە تایبەتەکان بۆ iOS و Android'}
          </p>

        </div>

        {/* Executive Platform Buttons (Apple Store & Google Play) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.75rem' }}>
          
          {/* Apple Store Official Badge Button */}
          <button
            onClick={() => alert(isAr ? 'جارٍ التوجيه إلى Apple App Store...' : 'داگرتن له App Store...')}
            style={{
              background: '#000000',
              border: '1.5px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '14px',
              padding: '0.95rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              transition: 'all 0.2s ease',
              textAlign: isAr ? 'right' : 'left'
            }}
          >
            <div style={{ color: '#ffffff' }}>
              <AppleIcon />
            </div>
            <div>
              <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {isAr ? 'تنزيل من متجر' : 'Download on'}
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.1 }}>
                App Store
              </div>
            </div>
          </button>

          {/* Google Play Official Badge Button */}
          <button
            onClick={() => alert(isAr ? 'جارٍ التوجيه إلى Google Play Store...' : 'داگرتن له Google Play...')}
            style={{
              background: '#04101e',
              border: '1.5px solid rgba(16, 185, 129, 0.45)',
              borderRadius: '14px',
              padding: '0.95rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              transition: 'all 0.2s ease',
              textAlign: isAr ? 'right' : 'left'
            }}
          >
            <div style={{ color: '#34d399' }}>
              <AndroidIcon />
            </div>
            <div>
              <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {isAr ? 'احصل عليه من' : 'GET IT ON'}
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.1 }}>
                Google Play
              </div>
            </div>
          </button>

        </div>

        {/* QR Code Instant Scanner Bar */}
        <div style={{
          background: 'rgba(255, 190, 0, 0.06)',
          border: '1px solid rgba(255, 190, 0, 0.25)',
          borderRadius: '14px',
          padding: '0.85rem 1.1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              background: 'var(--color-secondary)',
              padding: '0.4rem',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 10px rgba(255, 190, 0, 0.4)'
            }}>
              <QrCode size={30} color="#102042" />
            </div>
            <div>
              <h5 style={{ fontSize: '0.88rem', fontWeight: 900, color: '#ffffff' }}>
                {isAr ? 'امسح الرمز للتنزيل المباشر' : 'کۆدی QR سکان بکە بۆ داگرتنی خێرا'}
              </h5>
              <p style={{ fontSize: '0.72rem', color: 'var(--color-secondary)', fontWeight: 700, marginTop: '2px' }}>
                {isAr ? 'يتعرف تلقائياً على نظام هاتفك (iOS / Android)' : 'سیستەمی مۆبایلەکەت خۆکارانە دەستنیشان دەکات'}
              </p>
            </div>
          </div>
          
          <Zap size={22} color="var(--color-secondary)" />
        </div>

        {/* Security & Verification Badges */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          marginTop: '1.35rem',
          paddingTop: '0.85rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '0.78rem',
          color: '#94a3b8'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <ShieldCheck size={15} color="var(--color-secondary)" />
            {isAr ? 'آمن وموثق 100%' : 'سەلامەت و باوڕپێکراو'}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <CheckCircle size={15} color="#34d399" />
            {isAr ? 'مجاني بالكامل' : 'سەرجەمی بێبەرامبەرە'}
          </span>
        </div>

      </div>
    </div>
  );
}
