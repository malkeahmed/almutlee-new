import React from 'react';
import { Cpu, Zap, Sparkles, Rocket, Clock, Eye, ChevronLeft, ArrowUpRight, Brain, Dna, BatteryCharging, ShieldAlert } from 'lucide-react';
import { translations } from '../data/translations';

export default function ScienceTechSection({ articles, lang, onSelectArticle }) {
  const t = translations[lang] || translations.ar;

  // Top 2 Grand Panoramic Hero Features (380px Height)
  const topHeroes = [
    {
      id: "tech-hero-01",
      category: { ar: "🤖 الذكاء الاصطناعي والكمومي", ku: "🤖 ژیری دەستکرد و کوانتۆم" },
      icon: Zap,
      title: {
        ar: "الحواسيب الكمومية والذكاء التوليدي: ثورة تقنية كبرى تعيد صياغة أمن البيانات والتشفير العالمي",
        ku: "کۆمپیوتەرە کوانتۆمییەکان و ژیری دەستکرد: شۆڕشێکی گەورە لە ئاسایشی زانیاری و داتادا"
      },
      summary: {
        ar: "معالجة خوارزميات فائقة التعقيد وحل المعضلات الرياضية والطبية خلال أجزاء من الثانية تفتح آفاقاً جديدة للمستقبل.",
        ku: "چارەسەرکردنی هاوکێشە ئاڵۆزەکان و کێشە پزیشکییەکان لە کەمتر لە چرکەیەکدا."
      },
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      views: "58.4K",
      readTime: 5,
      publishedAt: "2026-08-25 17:00"
    },
    {
      id: "tech-hero-02",
      category: { ar: "🌌 أسرار الفضاء والكون السحيق", ku: "🌌 گەردوونناسی و فەزا" },
      icon: Rocket,
      title: {
        ar: "تلسكوب جيمس ويب يوثق ولادة أقدم المجرات على حافة الكون المرئي ويكشف خفايا المادة المظلمة",
        ku: "تەلەسکۆپی جەیمس وێب بە وردی وێنەی دروستبوونی کۆنترین گالاکسییەکانی گەردوون تۆمار دەکات"
      },
      summary: {
        ar: "صور طيفية فائقة الدقة ترصد اللحظات الأولى لنشأة النجوم والمجرات بعد الانفجار العظيم بـ300 مليون عام.",
        ku: "وێنە نوێیەکان ساتەکانی سەرەتای دروستبوونی ئەستێرە و گالاکسییەکان لە گەردووندا نیشان دەدەن."
      },
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
      views: "46.2K",
      readTime: 4,
      publishedAt: "2026-08-25 16:15"
    }
  ];

  // Bottom 3 Tech Innovation Cards (290px Height)
  const bottomTrio = [
    {
      id: "tech-trio-01",
      category: { ar: "🧠 الواجهات العصبية", ku: "🧠 تەکنەلۆژیای مێشک" },
      title: {
        ar: "أطراف اصطناعية ذكية تعمل بالإشارات العصبية المباشرة تحاكي حركة اليد الطبيعية بدقة متناهية",
        ku: "دروستکردنی دەستی دەستکردی زیرەک کە بە هێڵی دەماری مرۆڤ کار دەکات"
      },
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
      views: "39.1K",
      readTime: 4,
      publishedAt: "2026-08-25 15:00"
    },
    {
      id: "tech-trio-02",
      category: { ar: "🔋 الاندماج النووي النظيف", ku: "🔋 وزەی پاک" },
      title: {
        ar: "مفاعلات الاندماج النووي تحقق كفاءة طاقية تاريخية تمهد لعهد الكهرباء النظيفة غير المحدودة",
        ku: "کارلێککەرە ئەتۆمییەکان بەرهەمهێنانی وزەی پاکی مێژوویی بێسنوور تۆمار دەکەن"
      },
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
      views: "34.7K",
      readTime: 5,
      publishedAt: "2026-08-25 14:20"
    },
    {
      id: "tech-trio-03",
      category: { ar: "🚗 النقل الذكي المستقل", ku: "🚗 ئۆتۆمبێلی زیرەک" },
      title: {
        ar: "المركبات ذاتية القيادة وشبكات التنقل المعلقة تبدأ تشغيلها الفعلي في كبرى العواصم",
        ku: "ئۆتۆمبێلی بێ شۆفێر و تۆڕە گواستنەوە زیرەکەکان دەست بە کار دەکەن"
      },
      image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?q=80&w=800&auto=format&fit=crop",
      views: "31.8K",
      readTime: 4,
      publishedAt: "2026-08-25 13:40"
    }
  ];

  return (
    <section id="section-science-tech" className="section-off-white" style={{
      padding: '3.5rem 0'
    }}>
      <div className="container">

        {/* 1. Section Header (Gold CPU Badge & Navy Authority) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '2rem',
          borderBottom: '3px solid var(--color-secondary)',
          paddingBottom: '0.85rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            {/* Golden Tech CPU Badge */}
            <div style={{
              background: '#ffbe00',
              color: '#0c1833',
              width: '42px',
              height: '42px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(255, 190, 0, 0.4)',
              flexShrink: 0
            }}>
              <Cpu size={24} strokeWidth={2.4} />
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1.15, margin: 0 }}>
                {lang === 'ar' ? 'علوم وتكنولوجيا' : 'زانست و تەکنەلۆژیا'}
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
            {lang === 'ar' ? 'استكشاف عالم التكنولوجيا' : 'گەڕان لە جیهانی تەکنەلۆژیا'}
            <ChevronLeft size={17} strokeWidth={3} />
          </button>
        </div>

        {/* 2. Top Row: 2 Grand Dual Heroes (50% : 50%, 380px Height) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.35rem',
          marginBottom: '1.35rem'
        }} className="tech-dual-heroes-grid">
          {topHeroes.map((item) => {
            const ItemIcon = item.icon;
            return (
              <article
                key={item.id}
                onClick={() => onSelectArticle && onSelectArticle(item)}
                className="tech-fullbleed-card"
                style={{
                  position: 'relative',
                  height: '380px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: '#040816',
                  border: '1px solid rgba(255, 190, 0, 0.2)',
                  boxShadow: '0 8px 24px rgba(12, 24, 51, 0.12)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Full Photo */}
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="tech-fullbleed-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(4,8,22,0.1) 0%, rgba(4,8,22,0.45) 35%, rgba(2,5,16,0.97) 100%)'
                }}></div>

                {/* Top Badge */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  zIndex: 3
                }}>
                  <span style={{
                    background: '#ffbe00',
                    color: '#0c1833',
                    fontSize: '0.74rem',
                    fontWeight: 900,
                    padding: '4px 11px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.35)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <ItemIcon size={12} />
                    {item.category[lang]}
                  </span>
                </div>

                {/* Bottom Overlay Content */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.65rem 1.65rem 1.45rem 1.65rem',
                  zIndex: 3
                }}>
                  {/* Meta */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.75rem',
                    color: '#ffbe00',
                    marginBottom: '0.45rem',
                    fontWeight: 800
                  }}>
                    <span>● {item.publishedAt.split(' ')[0]}</span>
                    <span style={{ color: '#94a3b8' }}>•</span>
                    <span><Clock size={11} style={{ display: 'inline', marginLeft: '3px' }} /> {item.readTime} {lang === 'ar' ? 'دقائق قراءة' : 'خولەک'}</span>
                    <span style={{ color: '#94a3b8' }}>•</span>
                    <span><Eye size={11} style={{ display: 'inline', marginLeft: '3px' }} /> {item.views}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="tech-fullbleed-title"
                    style={{
                      fontSize: '1.28rem',
                      fontWeight: 900,
                      color: '#ffffff',
                      lineHeight: 1.36,
                      margin: 0,
                      textShadow: '0 2px 8px rgba(0,0,0,0.9)',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {item.title[lang]}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>

        {/* 3. Bottom Row: 3 Wide Innovation Cards (290px Height) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.35rem'
        }} className="tech-trio-bottom-grid">
          {bottomTrio.map((item) => (
            <article
              key={item.id}
              onClick={() => onSelectArticle && onSelectArticle(item)}
              className="tech-fullbleed-card"
              style={{
                position: 'relative',
                height: '290px',
                borderRadius: '10px',
                overflow: 'hidden',
                cursor: 'pointer',
                background: '#040816',
                border: '1px solid rgba(255, 190, 0, 0.18)',
                boxShadow: '0 6px 20px rgba(12, 24, 51, 0.08)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Full Photo */}
              <img
                src={item.image}
                alt={item.title[lang]}
                className="tech-fullbleed-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />

              {/* Dark Vignette Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(4,8,22,0.08) 0%, rgba(4,8,22,0.4) 30%, rgba(2,5,16,0.96) 100%)'
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
                  boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                }}>
                  {item.category[lang]}
                </span>
              </div>

              {/* Bottom Overlay Content */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.35rem 1.35rem 1.2rem 1.35rem',
                zIndex: 3
              }}>
                {/* Meta */}
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
                  <span><Clock size={11} style={{ display: 'inline', marginLeft: '3px' }} /> {item.readTime} {lang === 'ar' ? 'دقائق' : 'خولەک'}</span>
                  <span style={{ color: '#94a3b8' }}>•</span>
                  <span><Eye size={11} style={{ display: 'inline', marginLeft: '3px' }} /> {item.views}</span>
                </div>

                {/* Title */}
                <h4
                  className="tech-fullbleed-title"
                  style={{
                    fontSize: '1.06rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1.4,
                    margin: 0,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textShadow: '0 2px 8px rgba(0,0,0,0.9)',
                    transition: 'color 0.2s ease'
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
