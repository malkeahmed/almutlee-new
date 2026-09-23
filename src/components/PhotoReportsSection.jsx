import React from 'react';
import { Camera, Eye, Clock, ChevronLeft, Maximize2, Sparkles, MapPin } from 'lucide-react';
import { translations } from '../data/translations';

export default function PhotoReportsSection({ articles, lang, onSelectArticle }) {
  const t = translations[lang] || translations.ar;

  // Top 2 Grand Panoramic Photo Stories (380px Height - 60% : 40% Split)
  const topDuo = [
    {
      id: "photo-story-01",
      category: { ar: "📸 تغطية بصرية كبرى", ku: "📸 ڕووماڵی وێنەیی گەورە" },
      photoCount: 24,
      location: { ar: "بغداد - ضفاف دجلة", ku: "بەغدا - کەناراوەکانی دیجلە" },
      title: {
        ar: "بغداد في عيون المساء: جولة بصرية ساحرة بين أروقة شارع الرشيد وضفاف نهر دجلة الخالد",
        ku: "بەغدا لە چاوی ئێوارەدا: گەشتێکی وێنەیی لە شەقامی ڕەشید و کەناراوەکانی ڕووباری دیجلە"
      },
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop",
      views: "78.4K",
      publishedAt: "2026-08-25 17:30"
    },
    {
      id: "photo-story-02",
      category: { ar: "طبيعة الرافدين", ku: "سروشتی عێراق" },
      photoCount: 16,
      location: { ar: "الأهوار الجنوبية", ku: "زۆنگاوەکان" },
      title: {
        ar: "ذاكرة الأهوار: ملامح الحياة اليومية وقوارب المشحوف في قلب جنة الرافدين الطبيعية",
        ku: "یادەوەری زۆنگاوەکان: ژیانی ڕۆژانە و بەلەمەکان لە دڵی سروشتدا"
      },
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
      views: "52.1K",
      publishedAt: "2026-08-25 16:45"
    }
  ];

  // Bottom 3 Editorial Photo Stories (270px Height - 33.3% each)
  const bottomTrio = [
    {
      id: "photo-story-03",
      category: { ar: "العاصمة ليلًا", ku: "بەغدا بە شەو" },
      photoCount: 18,
      location: { ar: "مجسرات بغداد الحديثة", ku: "پردەکانی بەغدا" },
      title: {
        ar: "أضواء الإعمار: مشاريع الجسور والأنفاق الحديثة ترسم لوحة التحديث المعماري",
        ku: "ڕووناکییەکانی ئاوەدانکردنەوە: پردە نوێیەکان لە بەغدا"
      },
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      views: "64.7K",
      publishedAt: "2026-08-25 15:30"
    },
    {
      id: "photo-story-04",
      category: { ar: "مواسم الخير", ku: "وەرزی دروێنە" },
      photoCount: 12,
      location: { ar: "سهل نينوى", ku: "دەشتی نەینەوا" },
      title: {
        ar: "حصاد الذهب الأصفر: مواسم البركة وسنابل الخير في حقول نينوى الزراعية",
        ku: "دروێنەی گەنم: وەرزی بەرەکەت لە کێڵگەکانی نەینەوا"
      },
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
      views: "43.2K",
      publishedAt: "2026-08-25 14:15"
    },
    {
      id: "photo-story-05",
      category: { ar: "كنوز التاريخ", ku: "کەلەپوور و مێژوو" },
      photoCount: 20,
      location: { ar: "المتحف العراقي", ku: "مۆزەخانەی نیشتمانی" },
      title: {
        ar: "كنوز الحضارة والخط العربي: روائع المخطوطات والآثار البابلية النادرة",
        ku: "گەنجینەی شارستانیەت و خەتی عەرەبی لە مۆزەخانەی نیشتمانی"
      },
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      views: "57.9K",
      publishedAt: "2026-08-25 13:00"
    }
  ];

  return (
    <section id="section-photo-reports" className="section-pure-white" style={{
      padding: '3.75rem 0'
    }}>
      <div className="container">

        {/* 1. Luxurious Section Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '2rem',
          borderBottom: '3px solid var(--color-secondary)',
          paddingBottom: '0.85rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            {/* Golden Camera Badge */}
            <div style={{
              background: '#ffbe00',
              color: '#0c1833',
              width: '44px',
              height: '44px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(255, 190, 0, 0.4)',
              flexShrink: 0
            }}>
              <Camera size={25} strokeWidth={2.4} />
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1.15, margin: 0 }}>
                {lang === 'ar' ? 'تقارير مصورة' : 'ڕاپۆرتە وێنەییەکان'}
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
            {lang === 'ar' ? 'استعراض ألبوم الصور' : 'بینینی هەموو وێنەکان'}
            <ChevronLeft size={17} strokeWidth={3} />
          </button>
        </div>

        {/* 2. Top Row: 2 Grand Panoramic Photo Cards (380px Height - 58% : 42% Split) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '1.35rem',
          marginBottom: '1.35rem'
        }} className="photo-top-duo-grid">
          {topDuo.map((item) => (
            <article
              key={item.id}
              onClick={() => onSelectArticle && onSelectArticle(item)}
              className="photo-royal-card"
              style={{
                position: 'relative',
                height: '380px',
                borderRadius: '10px',
                overflow: 'hidden',
                cursor: 'pointer',
                background: '#040816',
                border: '1px solid rgba(255, 190, 0, 0.22)',
                boxShadow: '0 10px 28px rgba(12, 24, 51, 0.14)'
              }}
            >
              {/* Full-Bleed Photo */}
              <img
                src={item.image}
                alt={item.title[lang]}
                className="photo-royal-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Cinematic Vignette */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(4,8,22,0.1) 0%, rgba(4,8,22,0.4) 38%, rgba(2,5,16,0.98) 100%)'
              }}></div>

              {/* Top Glass Badges */}
              <div style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                left: '14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 3
              }}>
                <span style={{
                  background: '#ffbe00',
                  color: '#0c1833',
                  fontSize: '0.76rem',
                  fontWeight: 900,
                  padding: '4px 12px',
                  borderRadius: '4px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <Camera size={13} strokeWidth={2.5} />
                  {item.photoCount} {lang === 'ar' ? 'صورة فائقة الدقة' : 'وێنەی HD'}
                </span>

                <span style={{
                  background: 'rgba(4, 8, 22, 0.82)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffbe00',
                  border: '1px solid rgba(255, 190, 0, 0.35)',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: '4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <MapPin size={11} color="#ffbe00" />
                  {item.location[lang]}
                </span>
              </div>

              {/* Bottom Content Overlay (Photo + Title Only) */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.85rem 1.85rem 1.55rem 1.85rem',
                zIndex: 3
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.76rem',
                  color: '#ffbe00',
                  marginBottom: '0.5rem',
                  fontWeight: 800
                }}>
                  <span>● {item.publishedAt.split(' ')[0]}</span>
                  <span style={{ color: '#94a3b8' }}>•</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Eye size={12} /> {item.views}
                  </span>
                </div>

                <h3
                  className="photo-royal-title"
                  style={{
                    fontSize: '1.38rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    lineHeight: 1.36,
                    margin: 0,
                    textShadow: '0 2px 10px rgba(0,0,0,0.95)'
                  }}
                >
                  {item.title[lang]}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* 3. Bottom Row: 3 Wide Editorial Photo Stories (270px Height - 33.3% each) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.35rem'
        }} className="photo-bottom-trio-grid">
          {bottomTrio.map((item) => (
            <article
              key={item.id}
              onClick={() => onSelectArticle && onSelectArticle(item)}
              className="photo-royal-card"
              style={{
                position: 'relative',
                height: '270px',
                borderRadius: '10px',
                overflow: 'hidden',
                cursor: 'pointer',
                background: '#040816',
                border: '1px solid rgba(255, 190, 0, 0.18)',
                boxShadow: '0 6px 20px rgba(12, 24, 51, 0.1)'
              }}
            >
              {/* Full-Bleed Photo */}
              <img
                src={item.image}
                alt={item.title[lang]}
                className="photo-royal-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(4,8,22,0.08) 0%, rgba(4,8,22,0.4) 30%, rgba(2,5,16,0.97) 100%)'
              }}></div>

              {/* Top Badge */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                zIndex: 3
              }}>
                <span style={{
                  background: '#ffbe00',
                  color: '#0c1833',
                  fontSize: '0.72rem',
                  fontWeight: 900,
                  padding: '3px 9px',
                  borderRadius: '4px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Camera size={11} strokeWidth={2.5} />
                  {item.photoCount} {lang === 'ar' ? 'صورة' : 'وێنە'}
                </span>
              </div>

              {/* Bottom Overlay (Photo + Title Only) */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.35rem 1.35rem 1.2rem 1.35rem',
                zIndex: 3
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.72rem',
                  color: '#ffbe00',
                  marginBottom: '0.4rem',
                  fontWeight: 800
                }}>
                  <span>● {item.publishedAt.split(' ')[0]}</span>
                  <span style={{ color: '#94a3b8' }}>•</span>
                  <span><Eye size={11} style={{ display: 'inline', marginLeft: '2px' }} /> {item.views}</span>
                </div>

                <h4
                  className="photo-royal-title"
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1.4,
                    margin: 0,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textShadow: '0 2px 8px rgba(0,0,0,0.9)'
                  }}
                >
                  {item.title[lang]}
                </h4>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
