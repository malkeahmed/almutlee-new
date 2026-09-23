import React from 'react';
import {
  Sparkles, Clock, Eye, ChevronLeft, Flame,
  FileCheck, ShieldAlert, Award, Compass, Zap
} from 'lucide-react';
import { translations } from '../data/translations';

export default function AlMutleeSpecialSection({ articles, lang, onSelectArticle }) {
  const t = translations[lang] || translations.ar;

  // 5 Curated Al-Mutlee Exclusives with varied photo sizes & dynamic bento layout
  const specialList = [
    {
      id: "special-01",
      badge: { ar: "انفراد استقصائي", ku: "شیکاری تایبەت" },
      tag: { ar: "ملف خاص", ku: "دۆسیەی تایبەت" },
      title: {
        ar: "خفايا ملف طريق التنمية: تفاصيل المسارات الاستراتيجية ومحطات الربط الإقليمي ومواعيد إنجاز المراحل الأولى",
        ku: "نهێنییەکانی دۆسیەی ڕێگای گەشەپێدان: وردەکاری ڕێڕەوە ستراتیژییەکان و وادەی تەواوبوونی قۆناغە سەرەکییەکان"
      },
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop",
      readTime: 7,
      views: "64.2K",
      publishedAt: "2026-08-25 16:30"
    },
    {
      id: "special-02",
      badge: { ar: "وثائق المطلع", ku: "بەڵگەنامەکان" },
      tag: { ar: "كواليس", ku: "پشت پەردە" },
      title: {
        ar: "وثائق حصرية تكشف خطة تحديث منظومات الطاقة وشبكات التوزيع في 6 محافظات عراقية",
        ku: "بەڵگەنامەی تایبەت پلانی نوێکردنەوەی تۆڕەکانی کارەبا لە شەش پارێزگای عێراق ئاشکرا دەکات"
      },
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
      readTime: 4,
      views: "41.5K",
      publishedAt: "2026-08-25 14:15"
    },
    {
      id: "special-03",
      badge: { ar: "حوار خاص", ku: "چاوپێکەوتنی تایبەت" },
      tag: { ar: "شخصية الأسبوع", ku: "کەسایەتی هەفتە" },
      title: {
        ar: "مسؤول اقتصادي بارز للمطلع: الاحتياطيات النقدية تسجل أعلى مستوياتها والسياسة المالية تتجه نحو استقرار مستدام",
        ku: "بەرپرسێکی باڵای ئابووری بۆ ئەلموتڵەع: یەدەگی دارایی بەرزترین ئاستی تۆمارکردووە"
      },
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
      readTime: 5,
      views: "37.8K",
      publishedAt: "2026-08-25 12:45"
    },
    {
      id: "special-04",
      badge: { ar: "تغطية ميدانية", ku: "ڕووماڵی مەیدانی" },
      tag: { ar: "الميدان", ku: "مەیدانی" },
      title: {
        ar: "المطلع ترصد ميدانياً نسب الإنجاز في ميناء الفاو الكبير وأرصفة الحاويات الخمسة العملاقة",
        ku: "ئەلموتڵەع لە مەیدانەوە ئاستی کارکردن لە بەندەری گەورەی فاو و کۆنتێنەرەکان دەخاتەڕوو"
      },
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      readTime: 6,
      views: "52.3K",
      publishedAt: "2026-08-25 11:00"
    },
    {
      id: "special-05",
      badge: { ar: "تقرير استثنائي", ku: "ڕاپۆرتی ناوازە" },
      tag: { ar: "رؤية مستقبلية", ku: "دیدگای داهاتوو" },
      title: {
        ar: "مستقبل المدن الرقمية والذكاء الاصطناعي في إدارة الخدمات الحكومية والتحول الإلكتروني الشامل",
        ku: "داهاتووی شارە دیجیتاڵییەکان و ژیریی دەستکرد لە بەڕێوەبردنی خزمەتگوزارییەکاندا"
      },
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      readTime: 5,
      views: "29.7K",
      publishedAt: "2026-08-25 09:30"
    }
  ];

  return (
    <section id="section-special-almutlee" className="section-pure-white" style={{
      padding: '3.25rem 0'
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
            {/* Golden Star/Sparkles Badge */}
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
              <Sparkles size={24} strokeWidth={2.4} />
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1.15, margin: 0 }}>
                {lang === 'ar' ? 'قسم خاص المطلع' : 'بەشی تایبەتی ئەلموتڵەع'}
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
            {lang === 'ar' ? 'عرض جميع ملفات خاص المطلع' : 'بینینی هەموو بابەتە تایبەتەکان'}
            <ChevronLeft size={17} strokeWidth={3} />
          </button>
        </div>

        {/* 2. Asymmetrical Editorial Bento Grid (Varied Photo Proportions) */}
        <div className="special-bento-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.45fr 1fr 1fr',
          gap: '1.35rem'
        }}>

          {/* Left / Master Dominant Card (Large Featured Card - 530px Height) */}
          <article
            onClick={() => onSelectArticle && onSelectArticle(specialList[0])}
            className="special-card special-master-card"
            style={{
              position: 'relative',
              height: '530px',
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#040812',
              border: '1px solid rgba(255, 190, 0, 0.25)',
              boxShadow: '0 8px 25px rgba(12, 24, 51, 0.1)',
              cursor: 'pointer'
            }}
          >
            <img
              src={specialList[0].image}
              alt={specialList[0].title[lang]}
              className="special-card-img"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop";
              }}
            />
            {/* Cinematic Gradient */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(4,8,18,0.1) 0%, rgba(4,8,18,0.4) 40%, rgba(4,8,18,0.95) 100%)'
            }}></div>

            {/* Top Badge */}
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
                padding: '4px 11px',
                borderRadius: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.4)'
              }}>
                <Flame size={13} fill="#0c1833" />
                {specialList[0].badge[lang]}
              </span>

              <span style={{
                background: 'rgba(4, 8, 18, 0.85)',
                color: '#ffffff',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '3px 8px',
                borderRadius: '4px',
                border: '1px solid rgba(255, 190, 0, 0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                backdropFilter: 'blur(6px)'
              }}>
                <Clock size={11} color="#ffbe00" /> {specialList[0].readTime} {lang === 'ar' ? 'دقائق' : 'خولەک'}
              </span>
            </div>

            {/* Overlaid Title & Meta directly inside photo at bottom */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '1.5rem 1.4rem',
              zIndex: 3
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.76rem',
                color: '#ffbe00',
                marginBottom: '0.5rem',
                fontWeight: 800
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffbe00', display: 'inline-block' }}></span>
                <span>{specialList[0].tag[lang]}</span>
                <span style={{ color: '#94a3b8', margin: '0 2px' }}>•</span>
                <span style={{ color: '#cbd5e1' }}>{specialList[0].publishedAt.split(' ')[0]}</span>
              </div>
              <h3
                className="special-title"
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 900,
                  color: '#ffffff',
                  lineHeight: 1.4,
                  margin: 0,
                  textShadow: '0 2px 10px rgba(0,0,0,0.9)'
                }}
              >
                {specialList[0].title[lang]}
              </h3>
            </div>
          </article>

          {/* Middle Column Stack (2 Medium Cards - 253px Each) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
            {[specialList[1], specialList[2]].map((item) => (
              <article
                key={item.id}
                onClick={() => onSelectArticle && onSelectArticle(item)}
                className="special-card"
                style={{
                  position: 'relative',
                  height: '253px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  background: '#040812',
                  border: '1px solid rgba(255, 190, 0, 0.25)',
                  boxShadow: '0 8px 25px rgba(12, 24, 51, 0.08)',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="special-card-img"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(4,8,18,0.1) 0%, rgba(4,8,18,0.35) 30%, rgba(4,8,18,0.95) 100%)'
                }}></div>

                {/* Top Badge */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  left: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 3
                }}>
                  <span style={{
                    background: '#ffbe00',
                    color: '#0c1833',
                    fontSize: '0.7rem',
                    fontWeight: 900,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
                  }}>
                    {item.badge[lang]}
                  </span>
                  <span style={{
                    background: 'rgba(4, 8, 18, 0.85)',
                    color: '#ffffff',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 190, 0, 0.35)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px'
                  }}>
                    <Clock size={10} color="#ffbe00" /> {item.readTime} {lang === 'ar' ? 'دقائق' : 'خولەک'}
                  </span>
                </div>

                {/* Title & Meta overlaid at bottom */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1rem 1.1rem',
                  zIndex: 3
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.72rem',
                    color: '#ffbe00',
                    marginBottom: '0.35rem',
                    fontWeight: 800
                  }}>
                    <span>● {item.tag[lang]}</span>
                    <span style={{ color: '#94a3b8', margin: '0 2px' }}>•</span>
                    <span style={{ color: '#cbd5e1' }}>{item.publishedAt.split(' ')[0]}</span>
                  </div>
                  <h3
                    className="special-title"
                    style={{
                      fontSize: '0.98rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      lineHeight: 1.4,
                      margin: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textShadow: '0 2px 8px rgba(0,0,0,0.9)'
                    }}
                  >
                    {item.title[lang]}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column Stack (2 Medium Cards - 253px Each) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
            {[specialList[3], specialList[4]].map((item) => (
              <article
                key={item.id}
                onClick={() => onSelectArticle && onSelectArticle(item)}
                className="special-card"
                style={{
                  position: 'relative',
                  height: '253px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  background: '#040812',
                  border: '1px solid rgba(255, 190, 0, 0.25)',
                  boxShadow: '0 8px 25px rgba(12, 24, 51, 0.08)',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="special-card-img"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(4,8,18,0.1) 0%, rgba(4,8,18,0.35) 30%, rgba(4,8,18,0.95) 100%)'
                }}></div>

                {/* Top Badge */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  left: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 3
                }}>
                  <span style={{
                    background: '#ffbe00',
                    color: '#0c1833',
                    fontSize: '0.7rem',
                    fontWeight: 900,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
                  }}>
                    {item.badge[lang]}
                  </span>
                  <span style={{
                    background: 'rgba(4, 8, 18, 0.85)',
                    color: '#ffffff',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 190, 0, 0.35)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px'
                  }}>
                    <Clock size={10} color="#ffbe00" /> {item.readTime} {lang === 'ar' ? 'دقائق' : 'خولەک'}
                  </span>
                </div>

                {/* Title & Meta overlaid at bottom */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1rem 1.1rem',
                  zIndex: 3
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.72rem',
                    color: '#ffbe00',
                    marginBottom: '0.35rem',
                    fontWeight: 800
                  }}>
                    <span>● {item.tag[lang]}</span>
                    <span style={{ color: '#94a3b8', margin: '0 2px' }}>•</span>
                    <span style={{ color: '#cbd5e1' }}>{item.publishedAt.split(' ')[0]}</span>
                  </div>
                  <h3
                    className="special-title"
                    style={{
                      fontSize: '0.98rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      lineHeight: 1.4,
                      margin: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textShadow: '0 2px 8px rgba(0,0,0,0.9)'
                    }}
                  >
                    {item.title[lang]}
                  </h3>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
