import React from 'react';
import { Feather, Quote, ChevronLeft, ArrowUpRight, Clock } from 'lucide-react';
import { translations } from '../data/translations';

export default function OpinionsSection({ articles, lang, onSelectArticle }) {
  const t = translations[lang];

  // 6 Elite Columnists & Editorial Opinion Articles
  const opinionArticles = [
    {
      id: "op-01",
      categoryId: "opinions",
      tag: { ar: "تحليل استراتيجي", ku: "شیکاری ستراتیژی" },
      publishedAt: "2026-08-25 16:00",
      readTime: 4,
      author: {
        name: { ar: "د. حيدر العبادي", ku: "د. حەیدەر ئەلعبادی" },
        role: { ar: "رئيس قسم التحليلات السياسية", ku: "سەرۆکی بەشی شیکاری سیاسی" },
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
      },
      title: {
        ar: "تحولات الخارطة السياسية في الشرق الأوسط وفرص الاستقرار المستدام",
        ku: "گۆڕانکارییەکانی نەخشەی سیاسی لە ڕۆژهەڵاتی ناوەڕاست و دەرفەتەکانی ئارامی"
      },
      quote: {
        ar: "إن بناء التفاهمات الإقليمية هو الركيزة الأساسية للوصول إلى استقرار يدعم الطموحات الشابة وينهي عقوداً من الصراع.",
        ku: "دروستکردنی لێکتێگەیشتنی ناوچەیی بنەمای سەرەکی ئارامی و پێشکەوتنی وڵاتە."
      }
    },
    {
      id: "op-02",
      categoryId: "opinions",
      tag: { ar: "علاقات دولية", ku: "پەیوەندییە نێودەوڵەتییەکان" },
      publishedAt: "2026-08-25 14:15",
      readTime: 5,
      author: {
        name: { ar: "أ. طارق الهاشمي", ku: "ئـ. تارق ئەلهەشیمی" },
        role: { ar: "كاتب وباحث في الشأن الإقليمي", ku: "نووسەر و لێکۆڵەری ناوچەیی" },
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
      },
      title: {
        ar: "الدبلوماسية الاقتصادية كأداة لإعادة بناء التوازنات الجيوسياسية",
        ku: "دیپلۆماسییەتی ئابووری وەک ئامرازێک بۆ بنیاتنانەوەی هاوسەنگییەکان"
      },
      quote: {
        ar: "المصالح المشتركة وشبكات النقل والطاقة أصبحت أقوى من التحالفات التقليدية في رسم ملامح المستقبل.",
        ku: "بەرژەوەندییە هاوبەشەکان و پڕۆژە ستراتیژییەکان داهاتووی ناوچەکە دیاری دەکەن."
      }
    },
    {
      id: "op-03",
      categoryId: "opinions",
      tag: { ar: "فكر ومجتمع", ku: "بیر و کۆمەڵگە" },
      publishedAt: "2026-08-25 12:00",
      readTime: 3,
      author: {
        name: { ar: "د. رنا الجابري", ku: "د. ڕەنا ئەلجابری" },
        role: { ar: "أستاذة العلوم السياسية", ku: "مامۆستای زانستە سیاسییەکان" },
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
      },
      title: {
        ar: "تمكين الكفاءات الوطنية الشابة: من المبادرات إلى التطبيق الفعلي",
        ku: "بەهێزکردنی توانای گەنجان: لە دەستپێشخەرییەوە بۆ جێبەجێکردن"
      },
      quote: {
        ar: "الاستثمار الحقيقي لا يقاس بحجم الإنفاق المالي، بل بالفرص الحقيقية الممنوحة للجيل الرقمي الجديد.",
        ku: "وەبەرهێنانی ڕاستەقینە لە ڕەخساندنی دەرفەتە بۆ نەوەی نوێ و لێهاتوو."
      }
    },
    {
      id: "op-04",
      categoryId: "opinions",
      tag: { ar: "رؤية اقتصادية", ku: "ڕوانگەی ئابووری" },
      publishedAt: "2026-08-25 10:30",
      readTime: 4,
      author: {
        name: { ar: "أ. مصطفى الشمري", ku: "ئـ. مستەفا شەمەری" },
        role: { ar: "محلل مالي وكاتب اقتصادي", ku: "شیکەرەوەی دارایی و ئابووری" },
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
      },
      title: {
        ar: "تنويع مصادر الدخل: خارطة طريق لمرحلة ما بعد الاعتماد على النفط",
        ku: "فرەچەشنکردنی سەرچاوەکانی داهات: نەخشەڕێگای قۆناغی دوای نەوت"
      },
      quote: {
        ar: "الانتقال نحو اقتصاد المعرفة والإنتاج الصناعي لم يعد خياراً ترفياً بل ضرورة أمن قومي واقتصادي ملحة.",
        ku: "گەشەپێدانی کەرتی پیشەسازی و کشتوکاڵ پێویستییەکی نیشتمانییە بۆ داهاتوو."
      }
    },
    {
      id: "op-05",
      categoryId: "opinions",
      tag: { ar: "حوار وثقافة", ku: "دیالۆگ و ڕۆشنبیری" },
      publishedAt: "2026-08-25 09:00",
      readTime: 4,
      author: {
        name: { ar: "د. زينب الموسوي", ku: "د. زەینەب ئەلموسەوی" },
        role: { ar: "أكاديمية وباحثة اجتماعية", ku: "توێژەری کۆمەڵایەتی" },
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
      },
      title: {
        ar: "الهوية الثقافية والتراث الوطني في عصر الانفتاح والعولمة الرقمية",
        ku: "ناسنامەی ڕۆشنبیری لە سەردەمی جیهانگیری و دیجیتاڵیدا"
      },
      quote: {
        ar: "الحفاظ على الموروث الإنساني العميق لبغداد وحضارة وادي الرافدين يشكل درعاً ثقافياً أمام التسطيح المعرفي.",
        ku: "پاراستنی کەلەپوور و مێژووی دێرین بنەمای پاراستنی ناسنامەی نەتەوەییە."
      }
    },
    {
      id: "op-06",
      categoryId: "opinions",
      tag: { ar: "سياسات عامة", ku: "سیاسەتە گشتییەکان" },
      publishedAt: "2026-08-25 07:45",
      readTime: 5,
      author: {
        name: { ar: "أ. كنعان الدليمي", ku: "ئـ. کەنعان ئەلدولەیمی" },
        role: { ar: "مستشار السياسات الأمنية", ku: "ڕاوێژکاری سیاسەتی ئاسایش" },
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
      },
      title: {
        ar: "استراتيجيات الاستقرار الأمني المستدام وبناء شراكات الثقة المجتمعية",
        ku: "ستراتیژی ئارامی بەردەوام و دروستکردنی متمانەی کۆمەڵایەتی"
      },
      quote: {
        ar: "الأمن الشامل يبدأ من تعزيز دولة القانون وشفافية المؤسسات وتوفير البيئة الآمنة للاستثمار والتطوير.",
        ku: "ئاسایشی سەقامگیر پەیوەستە بە سەروەری یاسا و شەفافیەتی دامەزراوەکان."
      }
    }
  ];

  return (
    <section id="section-opinions" className="section-pure-white" style={{
      padding: '3.25rem 0'
    }}>
      <div className="container">

        {/* 1. Section Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '2rem',
          borderBottom: '3px solid var(--color-secondary)',
          paddingBottom: '0.85rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            {/* Golden Feather / Pen Icon Badge */}
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
              <Feather size={24} strokeWidth={2.4} />
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1.15, margin: 0 }}>
                {lang === 'ar' ? 'آراء وأقلام المطلع' : 'ڕا و وتاری المطلع'}
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
            {lang === 'ar' ? 'عرض جميع مقالات الرأي' : 'بینینی هەموو ڕاکان'}
            <ChevronLeft size={17} strokeWidth={3} />
          </button>
        </div>

        {/* 2. Horizontal 50/50 Split Editorial Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.75rem'
        }} className="opinions-grid-2">
          {opinionArticles.map((item) => (
            <div
              key={item.id}
              className="opinion-split-card"
              style={{
                display: 'flex',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                boxShadow: '0 4px 16px rgba(12, 24, 51, 0.05)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                minHeight: '290px'
              }}
              onClick={() => onSelectArticle(item)}
            >
              {/* Right Half (50%): Full-Height Columnist Image */}
              <div
                className="opinion-split-img-wrapper"
                style={{
                  width: '46%',
                  position: 'relative',
                  overflow: 'hidden',
                  flexShrink: 0
                }}
              >
                <img
                  src={item.author.avatar}
                  alt={item.author.name[lang]}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />

                {/* Image Overlay Gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(12, 24, 51, 0.15) 0%, rgba(12, 24, 51, 0.75) 100%)'
                }}></div>

                {/* Floating Category Tag on Image */}
                <span style={{
                  position: 'absolute',
                  top: '0.85rem',
                  right: '0.85rem',
                  zIndex: 2,
                  background: '#ffbe00',
                  color: '#0c1833',
                  padding: '3px 10px',
                  borderRadius: '3px',
                  fontSize: '0.74rem',
                  fontWeight: 900,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                }}>
                  {item.tag[lang]}
                </span>

                {/* Author Name Tag at bottom of Image */}
                <div style={{
                  position: 'absolute',
                  bottom: '0.85rem',
                  right: '0.85rem',
                  left: '0.85rem',
                  zIndex: 2,
                  color: '#ffffff'
                }}>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 900,
                    margin: '0 0 2px 0',
                    textShadow: '0 2px 6px rgba(0,0,0,0.8)'
                  }}>
                    {item.author.name[lang]}
                  </h4>
                  <p style={{
                    fontSize: '0.72rem',
                    color: '#e2e8f0',
                    margin: 0,
                    textShadow: '0 1px 4px rgba(0,0,0,0.8)'
                  }}>
                    {item.author.role[lang]}
                  </p>
                </div>
              </div>

              {/* Left Half (50%): Editorial Text & Quote */}
              <div style={{
                width: '54%',
                padding: '1.25rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                background: '#ffffff'
              }}>
                {/* Background Golden Watermark Quote */}
                <Quote
                  size={55}
                  style={{
                    position: 'absolute',
                    top: '0.6rem',
                    left: '0.6rem',
                    color: 'rgba(255, 190, 0, 0.12)',
                    pointerEvents: 'none'
                  }}
                />

                <div>
                  {/* Article Title */}
                  <h3
                    className="opinion-split-title"
                    style={{
                      fontSize: '1.08rem',
                      fontWeight: 900,
                      color: 'var(--color-primary)',
                      lineHeight: 1.4,
                      marginBottom: '0.65rem',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {item.title[lang]}
                  </h3>

                  {/* Quote Excerpt */}
                  <p style={{
                    fontSize: '0.82rem',
                    color: '#475569',
                    lineHeight: 1.55,
                    fontStyle: 'italic',
                    margin: '0 0 1rem 0',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    "{item.quote[lang]}"
                  </p>
                </div>

                {/* Footer Action */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.65rem',
                  borderTop: '1px solid #f1f5f9'
                }}>
                  <span style={{ fontSize: '0.74rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={12} color="#ffbe00" /> {item.readTime} {t.readingTime}
                  </span>

                  <span
                    style={{
                      fontSize: '0.78rem',
                      color: '#0c1833',
                      fontWeight: 900,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      background: '#ffbe00',
                      padding: '4px 10px',
                      borderRadius: '3px',
                      boxShadow: '0 2px 6px rgba(255, 190, 0, 0.25)'
                    }}
                  >
                    {lang === 'ar' ? 'قراءة المقال' : 'خوێندنەوەی وتار'} <ArrowUpRight size={13} />
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
