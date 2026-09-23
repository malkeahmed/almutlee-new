import React from 'react';
import { 
  X, Sparkles, Clock, Bell, Send, ArrowRight, 
  Smartphone, Share2, ShieldCheck, ChevronLeft, Globe
} from 'lucide-react';
import { translations } from '../data/translations';

export default function ArticleModal({ article, lang = 'ar', onClose, onOpenAppDownload }) {
  const t = translations[lang] || translations['ar'];

  if (!article) return null;

  const articleTitle = typeof article === 'object' && article.title 
    ? (article.title[lang] || article.title['ar'] || '') 
    : (typeof article === 'string' ? article : '');

  const articleImage = typeof article === 'object' && article.image ? article.image : import.meta.env.BASE_URL + 'logo.png';
  const categoryTag = typeof article === 'object' && article.tag ? article.tag[lang] : (lang === 'ar' ? 'تغطية خاصة' : 'ڕووماڵی تایبەت');

  return (
    <div 
      className="modal-overlay coming-soon-modal-overlay" 
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(11, 22, 44, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.22s ease'
      }}
    >
      <div 
        className="coming-soon-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '680px',
          background: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 190, 0, 0.4)',
          overflow: 'hidden',
          animation: 'modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        {/* Top Gold Horizon Accent Line */}
        <div style={{ height: '5px', background: 'linear-gradient(90deg, #ffbe00 0%, #0c1833 50%, #ffbe00 100%)' }} />

        {/* Close Button Top Left */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            left: '1.25rem',
            background: '#f1f5f9',
            border: '1px solid #e2e8f0',
            color: '#475569',
            cursor: 'pointer',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ffbe00';
            e.currentTarget.style.color = '#0c1833';
            e.currentTarget.style.borderColor = '#ffbe00';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#f1f5f9';
            e.currentTarget.style.color = '#475569';
            e.currentTarget.style.borderColor = '#e2e8f0';
          }}
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* Main Content Area */}
        <div style={{ padding: '2.5rem 2rem 2rem 2rem', textAlign: 'center' }}>

          {/* 1. Glowing Luxury Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, rgba(255, 190, 0, 0.15) 0%, rgba(255, 190, 0, 0.05) 100%)',
            border: '1px solid #ffbe00',
            color: '#0c1833',
            padding: '0.45rem 1.25rem',
            borderRadius: '50px',
            fontSize: '0.86rem',
            fontWeight: 900,
            marginBottom: '1.25rem',
            boxShadow: '0 4px 15px rgba(255, 190, 0, 0.25)'
          }}>
            <Sparkles size={16} color="#ffbe00" />
            <span>{lang === 'ar' ? 'قريباً جداً • قيد الإعداد والنشر' : 'بەمزووانە • لە ئامادەکردندایە'}</span>
          </div>

          {/* 2. Main Grand Heading */}
          <h2 style={{
            fontSize: '2.4rem',
            fontWeight: 900,
            color: '#0c1833',
            lineHeight: 1.2,
            margin: '0 0 0.85rem 0',
            letterSpacing: '-0.5px'
          }}>
            {lang === 'ar' ? 'قـريـبـاً' : 'بـەمـزووانـە'}
          </h2>

          {/* 3. Official Explanation Paragraph */}
          <p style={{
            fontSize: '1.05rem',
            color: '#475569',
            lineHeight: 1.65,
            maxWidth: '520px',
            margin: '0 auto 1.75rem auto',
            fontWeight: 600
          }}>
            {lang === 'ar' 
              ? 'عزيزي القارئ والمتابع الكريم، يتم حالياً استكمال وإعداد هذه المادة والتغطية الصحفية الحصرية ضمن التحديثات الشاملة لمنصة وكالة المُطّلع الإخبارية.' 
              : 'خوێنەری بەڕێز، لە ئێستادا کار لەسەر ئامادەکردن و بڵاوکردنەوەی ئەم بابەت و ڕووماڵە دەکرێت لە ئاژانسی هەواڵی المطلع.'}
          </p>

          {/* 4. Clicked Target Preview Mini Card (If available) */}
          {articleTitle && (
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '0.9rem 1.15rem',
              maxWidth: '540px',
              margin: '0 auto 1.75rem auto',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              textAlign: 'right'
            }}>
              {articleImage && (
                <div style={{
                  width: '65px',
                  height: '52px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '1px solid #cbd5e1'
                }}>
                  <img 
                    src={articleImage} 
                    alt="Preview" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
              )}
              <div style={{ flexGrow: 1, minWidth: 0 }}>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  color: '#0c1833',
                  background: '#ffbe00',
                  padding: '1px 6px',
                  borderRadius: '3px',
                  display: 'inline-block',
                  marginBottom: '4px'
                }}>
                  {categoryTag}
                </span>
                <h4 style={{
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  color: '#0c1833',
                  margin: 0,
                  lineHeight: 1.35,
                  display: '-webkit-box',
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {articleTitle}
                </h4>
              </div>
            </div>
          )}

          {/* 5. Interactive Action Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.85rem',
            flexWrap: 'wrap'
          }}>
            {/* Back Button */}
            <button
              onClick={onClose}
              style={{
                background: 'linear-gradient(135deg, #0c1833 0%, #102042 100%)',
                color: '#ffffff',
                border: '1px solid #0c1833',
                padding: '0.75rem 1.65rem',
                borderRadius: '8px',
                fontSize: '0.92rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 16px rgba(12, 24, 51, 0.25)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ffbe00';
                e.currentTarget.style.color = '#0c1833';
                e.currentTarget.style.borderColor = '#ffbe00';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #0c1833 0%, #102042 100%)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#0c1833';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ChevronLeft size={18} />
              <span>{lang === 'ar' ? 'العودة لتصفح الأخبار' : 'گەڕانەوە بۆ هەواڵەکان'}</span>
            </button>

            {/* Telegram Channel Button */}
            <a
              href="https://t.me/almutlee"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#f8fafc',
                color: '#0c1833',
                border: '1px solid #cbd5e1',
                padding: '0.75rem 1.35rem',
                borderRadius: '8px',
                fontSize: '0.92rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ffbe00';
                e.currentTarget.style.background = '#fffdf0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#cbd5e1';
                e.currentTarget.style.background = '#f8fafc';
              }}
            >
              <Send size={16} color="#0284c7" />
              <span>{lang === 'ar' ? 'تابعنا على تليغرام' : 'لە تێلیگرام فۆڵۆمان بکە'}</span>
            </a>
          </div>

        </div>

        {/* 6. Footer Ribbon */}
        <div style={{
          padding: '0.85rem 1.75rem',
          background: '#f8fafc',
          borderTop: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.78rem',
          color: '#64748b'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <ShieldCheck size={15} color="#ffbe00" />
            <strong style={{ color: '#0c1833' }}>وكالة المُطّلع</strong> — رصد .. متابعة .. تحليل
          </span>

          <span>
            {lang === 'ar' ? 'حقوق النشر محفوظة © 2026' : 'مافی بڵاوکردنەوە پارێزراوە © 2026'}
          </span>
        </div>

      </div>
    </div>
  );
}
