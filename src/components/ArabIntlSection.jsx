import React from 'react';
import { Globe, Clock, ChevronLeft, Eye, TrendingUp, Sparkles, MapPin, Radio } from 'lucide-react';
import { translations } from '../data/translations';

export default function ArabIntlSection({ articles, lang, onSelectArticle }) {
  const t = translations[lang] || translations.ar;

  // Curated Arab & International Geopolitical Reports
  const mainFeature = {
    id: "arab-intl-main",
    categoryId: "arab_intl",
    category: { ar: "🔴 تغطية دولية عاجلة", ku: "🔴 ڕووماڵی نێودەوڵەتی" },
    location: { ar: "📍 مجلس الأمن الدولي - نيويورك", ku: "📍 ئەنجومەنی ئاسایش - نیویۆرک" },
    title: {
      ar: "مجلس الأمن يتبنى قراراً استراتيجياً لدعم الاستقرار الإقليمي وتعزيز شراكات التنمية في الشرق الأوسط",
      ku: "ئەنجومەنی ئاسایش بڕیارێکی ستراتیژی بۆ پشتگیریکردنی سەقامگیری ناوچەکە و گەشەپێدان پەسەند دەکات"
    },
    summary: {
      ar: "إجماع دولي واسع على تفعيل آليات خفض التصعيد ودعم الممرات الاقتصادية الكبرى، مع إشادة بالدور الدبلوماسي المحوري في تقريب وجهات النظر الإقليمية.",
      ku: "کۆدەنگییەکی نێودەوڵەتی بۆ کاراکردنی میکانیزمەکانی هێورکردنەوە و پشتگیریکردنی ڕێڕەوە ئابوورییەکان بەدەستهات."
    },
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop",
    views: "48.3K",
    readTime: 5,
    publishedAt: "2026-08-25 16:45"
  };

  const sideStack = [
    {
      id: "arab-intl-side-1",
      categoryId: "arab_intl",
      category: { ar: "🌍 القمة العربية", ku: "🌍 لوتکەی عەرەبی" },
      location: { ar: "📍 الرياض", ku: "📍 ڕیاز" },
      title: {
        ar: "مباحثات عربية رفيعة المستوى لتعزيز الأمن المائي والغذائي وتدشين شبكات الربط الكهربائي المشترك",
        ku: "گفتوگۆی باڵای وڵاتانی عەرەبی بۆ بەهێزکردنی ئاسایشی ئاو و خۆراک و بەستنەوەی تۆڕەکانی کارەبا"
      },
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
      views: "31.2K",
      readTime: 4,
      publishedAt: "2026-08-25 15:20"
    },
    {
      id: "arab-intl-side-2",
      categoryId: "arab_intl",
      category: { ar: "⚡ ملف الطاقة والممرات", ku: "⚡ دۆسیەی وزە" },
      location: { ar: "📍 الدوحة", ku: "📍 دەوحە" },
      title: {
        ar: "اتفاقيات كبرى لتوريد الغاز المسال والاستثمار في مشاريع الطاقة النظيفة بين العواصم الإقليمية وأوروبا",
        ku: "ڕێککەوتنی گەورە بۆ دابینکردنی گازی سروشتی و وەبەرهێنان لە وزەی پاک لە نێوان ناوچەکە و ئەوروپا"
      },
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      views: "27.9K",
      readTime: 4,
      publishedAt: "2026-08-25 14:00"
    }
  ];

  const bottomGrid = [
    {
      id: "arab-intl-grid-1",
      categoryId: "arab_intl",
      category: { ar: "🇺🇸 واشنطن والشرق الأوسط", ku: "🇺🇸 واشنتن و ڕۆژهەڵاتی ناوەڕاست" },
      title: {
        ar: "البيت الأبيض يؤكد التزامه بدعم مسارات التهدئة والشراكات الاستثمارية الواعدة في المنطقة",
        ku: "کۆشکی سپی پابەندبوونی خۆی بۆ پشتگیریکردنی هێورکردنەوە و وەبەرهێنانی نوێ دووپات دەکاتەوە"
      },
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop",
      views: "22.4K",
      readTime: 3,
      publishedAt: "2026-08-25 13:15"
    },
    {
      id: "arab-intl-grid-2",
      categoryId: "arab_intl",
      category: { ar: "🇪🇺 الاتحاد الأوروبي", ku: "🇪🇺 یەکێتی ئەوروپا" },
      title: {
        ar: "بروكسل تعلن عن حزمة شراكات استراتيجية لدعم التكنولوجيا الخضراء والتحول الرقمي الإقليمي",
        ku: "برۆکسل پاکێجێکی ستراتیژی بۆ پشتگیریکردنی تەکنەلۆژیای سەوز و گۆڕانی دیجیتاڵی رادەگەیەنێت"
      },
      image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=800&auto=format&fit=crop",
      views: "19.8K",
      readTime: 4,
      publishedAt: "2026-08-25 12:45"
    },
    {
      id: "arab-intl-grid-3",
      categoryId: "arab_intl",
      category: { ar: "🇸🇦 مجلس التعاون الخليجي", ku: "🇸🇦 ئەنجومەنی هاریکاری کەنداو" },
      title: {
        ar: "صناديق الاستثمار السيادية الخليجية تضخ استثمارات قياسية في قطاعات البنية التحتية والذكاء الاصطناعي",
        ku: "سندووقە سیادییەکانی کەنداو وەبەرهێنانی گەورە لە ژێرخان و ژیری دەستکرد ئەنجام دەدەن"
      },
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      views: "25.1K",
      readTime: 5,
      publishedAt: "2026-08-25 11:30"
    },
    {
      id: "arab-intl-grid-4",
      categoryId: "arab_intl",
      category: { ar: "🇨🇳 آسيا وطريق الحرير", ku: "🇨🇳 ئاسیا و ڕێگای ئاوریشم" },
      title: {
        ar: "بكين تكشف عن مسارات جديدة لتوسيع التبادل التجاري وتعزيز الربط اللوجستي مع الموانئ العربية",
        ku: "پەکین ڕێڕەوی نوێ بۆ فراوانکردنی ئاڵوگۆڕی بازرگانی و پەیوەندی لۆجستی لەگەڵ بەندەرەکان ئاشکرا دەکات"
      },
      image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?q=80&w=800&auto=format&fit=crop",
      views: "21.6K",
      readTime: 4,
      publishedAt: "2026-08-25 10:15"
    }
  ];

  return (
    <section id="section-arab_intl" className="section-pure-white" style={{
      padding: '3.25rem 0'
    }}>
      <div className="container">

        {/* 1. Section Header (Gold Badge & Navy Authority) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '2rem',
          borderBottom: '3px solid var(--color-secondary)',
          paddingBottom: '0.85rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            {/* Golden Globe Badge */}
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
              <Globe size={24} strokeWidth={2.4} />
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1.15, margin: 0 }}>
                {lang === 'ar' ? 'العربية والدولية' : 'عەرەبی و نێودەوڵەتی'}
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
            {lang === 'ar' ? 'عرض جميع الأخبار الدولية' : 'بینینی هەموو هەواڵە نێودەوڵەتییەکان'}
            <ChevronLeft size={17} strokeWidth={3} />
          </button>
        </div>

        {/* 2. Top Geopolitical Spotlight Grid (Main Feature 1.4fr + Side Stack 1fr) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.35fr 1fr',
          gap: '1.35rem',
          marginBottom: '1.5rem'
        }} className="arab-intl-top-grid">

          {/* Main Global Breaking Feature Card */}
          <article
            onClick={() => onSelectArticle && onSelectArticle(mainFeature)}
            className="arab-main-feature-card"
            style={{
              position: 'relative',
              height: '390px',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer',
              background: '#0c1833',
              boxShadow: '0 8px 24px rgba(12, 24, 51, 0.12)',
              border: '1px solid #e2e8f0',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <img
              src={mainFeature.image}
              alt={mainFeature.title[lang]}
              className="arab-main-img"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
            {/* Cinematic Gradient */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(12,24,51,0.2) 0%, rgba(12,24,51,0.5) 40%, rgba(4,8,20,0.96) 100%)'
            }}></div>

            {/* Top Floating Tags */}
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
                background: '#dc2626',
                color: '#ffffff',
                fontSize: '0.74rem',
                fontWeight: 900,
                padding: '4px 10px',
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(220, 38, 38, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                {mainFeature.category[lang]}
              </span>

              <span style={{
                background: 'rgba(12, 24, 51, 0.85)',
                backdropFilter: 'blur(8px)',
                color: '#ffbe00',
                border: '1px solid rgba(255, 190, 0, 0.35)',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '3px 9px',
                borderRadius: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px'
              }}>
                {mainFeature.location[lang]}
              </span>
            </div>

            {/* Bottom Content Area */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '1.65rem 1.65rem 1.4rem 1.65rem',
              zIndex: 3
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.75rem',
                color: '#ffbe00',
                marginBottom: '0.45rem',
                fontWeight: 800
              }}>
                <span>● {mainFeature.publishedAt.split(' ')[0]}</span>
                <span style={{ color: '#94a3b8' }}>•</span>
                <span><Clock size={11} style={{ display: 'inline', marginLeft: '3px' }} /> {mainFeature.readTime} {lang === 'ar' ? 'دقائق' : 'خولەک'}</span>
                <span style={{ color: '#94a3b8' }}>•</span>
                <span><Eye size={11} style={{ display: 'inline', marginLeft: '3px' }} /> {mainFeature.views}</span>
              </div>

              <h3
                className="arab-main-title"
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 900,
                  color: '#ffffff',
                  lineHeight: 1.35,
                  margin: 0,
                  textShadow: '0 2px 8px rgba(0,0,0,0.85)',
                  transition: 'color 0.2s ease'
                }}
              >
                {mainFeature.title[lang]}
              </h3>
            </div>
          </article>

          {/* Left Side Stack (2 Cards, ~188px each) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            {sideStack.map((item) => (
              <article
                key={item.id}
                onClick={() => onSelectArticle && onSelectArticle(item)}
                className="arab-side-card"
                style={{
                  display: 'flex',
                  height: '188px',
                  background: '#ffffff',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 16px rgba(12, 24, 51, 0.05)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Image Thumbnail */}
                <div style={{ width: '42%', height: '100%', position: 'relative', overflow: 'hidden', background: '#0c1833', flexShrink: 0 }}>
                  <img
                    src={item.image}
                    alt={item.title[lang]}
                    className="arab-side-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: '#ffbe00',
                    color: '#0c1833',
                    fontSize: '0.68rem',
                    fontWeight: 900,
                    padding: '2px 7px',
                    borderRadius: '3px'
                  }}>
                    {item.category[lang]}
                  </span>
                </div>

                {/* Body */}
                <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#64748b', marginBottom: '0.4rem', fontWeight: 700 }}>
                      <span style={{ color: '#ffbe00' }}>●</span>
                      <span>{item.publishedAt.split(' ')[0]}</span>
                      <span style={{ margin: '0 2px' }}>•</span>
                      <span>{item.location[lang]}</span>
                    </div>

                    <h4
                      className="arab-side-title"
                      style={{
                        fontSize: '0.96rem',
                        fontWeight: 800,
                        color: 'var(--color-primary)',
                        lineHeight: 1.4,
                        margin: 0,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        transition: 'color 0.2s ease'
                      }}
                    >
                      {item.title[lang]}
                    </h4>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
                    <span style={{ fontSize: '0.72rem', color: '#94a3b8', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                      <Eye size={12} /> {item.views}
                    </span>
                    <span style={{ fontSize: '0.76rem', color: '#ffbe00', fontWeight: 900, display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
                      {lang === 'ar' ? 'التفاصيل' : 'وردەکاری'} <ChevronLeft size={13} strokeWidth={3} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>

        {/* 3. Bottom 4-Card International Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.35rem'
        }} className="arab-intl-quad-grid">
          {bottomGrid.map((item) => (
            <article
              key={item.id}
              onClick={() => onSelectArticle && onSelectArticle(item)}
              className="arab-quad-card"
              style={{
                background: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 16px rgba(12, 24, 51, 0.05)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Photo Area (220px Height) */}
              <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden', background: '#0c1833' }}>
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="arab-quad-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: '#ffbe00',
                  color: '#0c1833',
                  fontSize: '0.72rem',
                  fontWeight: 900,
                  padding: '3px 8px',
                  borderRadius: '4px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                }}>
                  {item.category[lang]}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: '1.1rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#64748b', marginBottom: '0.45rem', fontWeight: 700 }}>
                    <span style={{ color: '#ffbe00' }}>●</span>
                    <span>{item.publishedAt.split(' ')[0]}</span>
                    <span style={{ margin: '0 2px' }}>•</span>
                    <span><Clock size={11} style={{ display: 'inline', marginLeft: '3px' }} /> {item.readTime} {lang === 'ar' ? 'دقائق' : 'خولەک'}</span>
                  </div>

                  <h4
                    className="arab-quad-title"
                    style={{
                      fontSize: '0.98rem',
                      fontWeight: 800,
                      color: 'var(--color-primary)',
                      lineHeight: 1.42,
                      margin: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {item.title[lang]}
                  </h4>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '0.65rem', marginTop: '0.75rem' }}>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                    <Eye size={12} /> {item.views}
                  </span>
                  <span
                    className="arab-quad-btn"
                    style={{ fontSize: '0.76rem', color: 'var(--color-primary)', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '2px', transition: 'color 0.2s ease' }}
                  >
                    {lang === 'ar' ? 'قراءة الخبر' : 'خوێندنەوە'} <ChevronLeft size={13} />
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
