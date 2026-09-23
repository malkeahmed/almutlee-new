import React from 'react';
import { 
  BarChart3, PieChart, TrendingUp, Sparkles, 
  Clock, Eye, ChevronLeft, ArrowUpRight, Share2, DownloadCloud 
} from 'lucide-react';
import { translations } from '../data/translations';

export default function VisualStoriesSection({ articles, lang, onSelectArticle }) {
  const t = translations[lang] || translations.ar;

  // 4 Curated High-Impact Infographics & Data Stories
  const infographicList = [
    {
      id: "info-01",
      category: { ar: "إنفوجرافيك اقتصادي", ku: "ئینفۆگرافیکی ئابووری" },
      metric: { ar: "+45% نمو سنوي", ku: "+45% گەشەی ساڵانە" },
      statLabel: { ar: "حجم التبادل التجاري", ku: "قەبارەی ئاڵوگۆڕی بازرگانی" },
      title: {
        ar: "خريطة الممرات اللوجستية: مؤشرات حركة النقل وحجم التبادل التجاري عبر الموانئ والمنافذ الحدودية",
        ku: "نەخشەی ڕێڕەوە لۆجستییەکان: قەبارەی بازرگانی و گواستنەوە لە دەروازە سنورییەکاندا"
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      views: "48.9K",
      publishedAt: "2026-08-25 17:00"
    },
    {
      id: "info-02",
      category: { ar: "طاقة وبيئة", ku: "وزە و ژینگە" },
      metric: { ar: "3500+ MW", ku: "3500+ مێگاوات" },
      statLabel: { ar: "إنتاج الطاقة الشمسية", ku: "بەرهەمهێنانی وزەی خۆر" },
      title: {
        ar: "الطاقة النظيفة في العراق: بالأرقام.. محطات الطاقة الشمسية قيد الإنجاز وتوزيع القدرات الإنتاجية",
        ku: "وزەی خاوێن لە عێراقدا: بە ژمارە.. وێستگەکانی وزەی خۆر و دابەشبوونی توانا لە پارێزگاکاندا"
      },
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=800&auto=format&fit=crop",
      views: "36.2K",
      publishedAt: "2026-08-25 14:30"
    },
    {
      id: "info-03",
      category: { ar: "تحول رقمي", ku: "گۆڕانکاری دیجیتاڵی" },
      metric: { ar: "14.2M+", ku: "14.2M+ بەکارهێنەر" },
      statLabel: { ar: "حسابات الدفع الإلكتروني", ku: "هەژماری پارەدانی ئەلیکترۆنی" },
      title: {
        ar: "طفرة الشمول المالي: مسار نمو البطاقات المصرفية ونقاط البيع الإلكترونية POS في مختلف القطاعات",
        ku: "گەشەی سیستەمی دارایی: زیادبوونی بەکارهێنانی کارتی بانکی و سیستەمی پارەدانی مۆدێرن"
      },
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
      views: "52.7K",
      publishedAt: "2026-08-25 12:00"
    },
    {
      id: "info-04",
      category: { ar: "إعمار وبنية تحتية", ku: "ئاوەدانکردنەوە" },
      metric: { ar: "92% إنجاز", ku: "92% تەواوبوون" },
      statLabel: { ar: "مشاريع فك الاختناقات", ku: "پڕۆژەکانی کەمکردنەوەی قەرەباڵغی" },
      title: {
        ar: "جسور وأنفاق العاصمة: مخطط شامل لمراحل افتتاح المجسرات الجديدة والمحاور المرورية الحيوية",
        ku: "پرد و تونێلە نوێیەکانی پایتەخت: خشتەی قۆناغەکانی تەواوبوونی پڕۆژە خێراکان لە بەغدا"
      },
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
      views: "61.3K",
      publishedAt: "2026-08-25 09:45"
    }
  ];

  return (
    <section id="section-infographics" style={{ 
      padding: '3.25rem 0', 
      background: '#ffffff', 
      borderBottom: '1px solid #e2e8f0' 
    }}>
      <div className="container">
        
        {/* 1. Section Header (Gold & Navy Authority) */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          marginBottom: '2rem', 
          borderBottom: '3px solid var(--color-secondary)', 
          paddingBottom: '0.85rem' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            {/* Golden BarChart Icon Badge */}
            <div style={{ 
              background: '#ffbe00', 
              color: '#0c1833', 
              width: '42px', 
              height: '42px', 
              borderRadius: '6px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(255, 190, 0, 0.35)',
              flexShrink: 0 
            }}>
              <BarChart3 size={24} strokeWidth={2.4} />
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1.15, margin: 0 }}>
                {lang === 'ar' ? 'قسم الإنفوجرافيك والقصص الرقمية' : 'بەشی ئینفۆگرافیک و داتای دیجیتاڵی'}
              </h2>
            </div>
          </div>

          {/* Golden Section Button */}
          <button 
            style={{ 
              background: '#ffbe00', 
              color: '#0c1833', 
              fontSize: '0.85rem', 
              padding: '0.45rem 1.15rem', 
              borderRadius: '4px', 
              fontWeight: 900, 
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: '0.4rem',
              boxShadow: '0 2px 10px rgba(255, 190, 0, 0.35)',
              transition: 'all 0.2s ease'
            }}
            className="btn-view-all-videos"
          >
            {lang === 'ar' ? 'عرض جميع تصاميم الإنفوجرافيك' : 'بینینی هەموو ئینفۆگرافیکەکان'}
            <ChevronLeft size={17} strokeWidth={3} />
          </button>
        </div>

        {/* 2. Interactive Data Infographics Grid (4 Luxury Cards) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '1.35rem' 
        }} className="infographics-grid">
          {infographicList.map((item) => (
            <article
              key={item.id}
              onClick={() => onSelectArticle && onSelectArticle(item)}
              className="infographic-card"
              style={{
                background: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 16px rgba(12, 24, 51, 0.05)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
              }}
            >
              {/* Photo Area with Glowing Stat Overlay */}
              <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden', background: '#0c1833' }}>
                <img 
                  src={item.image} 
                  alt={item.title[lang]}
                  className="info-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                
                {/* Gradient Shade */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(12,24,51,0.2) 0%, rgba(12,24,51,0.85) 100%)'
                }}></div>

                {/* Top Category Badge */}
                <span style={{ 
                  position: 'absolute', 
                  top: '10px', 
                  right: '10px', 
                  background: '#ffbe00', 
                  color: '#0c1833', 
                  fontSize: '0.72rem', 
                  fontWeight: 900, 
                  padding: '3px 9px', 
                  borderRadius: '4px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                  zIndex: 2
                }}>
                  {item.category[lang]}
                </span>

                {/* Overlaid Glowing Highlight Metric Capsule */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  right: '10px',
                  background: 'rgba(12, 24, 51, 0.92)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 190, 0, 0.4)',
                  borderRadius: '6px',
                  padding: '6px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  zIndex: 2
                }}>
                  <div>
                    <div style={{ fontSize: '0.66rem', color: '#94a3b8', fontWeight: 700 }}>
                      {item.statLabel[lang]}
                    </div>
                    <div style={{ fontSize: '0.96rem', fontWeight: 900, color: '#ffbe00', lineHeight: 1.1 }}>
                      {item.metric[lang]}
                    </div>
                  </div>
                  <div style={{ 
                    width: '26px', 
                    height: '26px', 
                    borderRadius: '50%', 
                    background: 'rgba(255, 190, 0, 0.15)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#ffbe00' 
                  }}>
                    <TrendingUp size={14} />
                  </div>
                </div>
              </div>

              {/* Card Title and Metadata Body */}
              <div style={{ padding: '1.15rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: '#64748b', marginBottom: '0.45rem', fontWeight: 700 }}>
                  <span style={{ color: '#ffbe00' }}>●</span>
                  <span>{item.publishedAt.split(' ')[0]}</span>
                  <span style={{ margin: '0 2px' }}>•</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                    <Eye size={12} color="#94a3b8" /> {item.views}
                  </span>
                </div>

                <h3 
                  className="info-title"
                  style={{ 
                    fontSize: '1.02rem', 
                    fontWeight: 800, 
                    color: 'var(--color-primary)', 
                    lineHeight: 1.45, 
                    margin: 0,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {item.title[lang]}
                </h3>

                {/* Bottom View Infographic CTA */}
                <div style={{ 
                  borderTop: '1px solid #f1f5f9', 
                  paddingTop: '0.75rem', 
                  marginTop: '0.85rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between' 
                }}>
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#64748b' }}>
                    {lang === 'ar' ? 'إنفوجرافيك عالي الدقة' : 'ئینفۆگرافیکی ورد'}
                  </span>
                  
                  <span 
                    className="info-cta-btn"
                    style={{ 
                      fontSize: '0.78rem', 
                      fontWeight: 900, 
                      color: '#0c1833', 
                      background: '#ffbe00',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '4px',
                      boxShadow: '0 2px 6px rgba(255, 190, 0, 0.3)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {lang === 'ar' ? 'عرض البيانات' : 'بینین'}
                    <ChevronLeft size={14} strokeWidth={3} />
                  </span>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
