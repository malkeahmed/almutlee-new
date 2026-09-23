import React, { useState, useEffect } from 'react';
import {
  Trophy, Clock, ChevronLeft, ChevronRight, Play
} from 'lucide-react';
import { translations } from '../data/translations';

export default function SportsSection({ articles, lang, onSelectArticle }) {
  const t = translations[lang];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Featured Sports Slider Stories
  const sliderStories = [
    {
      id: "sp-slide-01",
      categoryId: "sports",
      tag: { ar: "دوري أبطال آسيا", ku: "خولی یانە پاڵەوانەکانی ئاسیا" },
      publishedAt: "2026-08-25 15:45",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1400&auto=format&fit=crop",
      title: {
        ar: "أسود الرافدين يواصلون التحضيرات المكثفة في البصرة لمواجهة الحسم الآسيوية",
        ku: "شێرەکانی ڕافیدەین ئامادەکارییە چڕەکانیان لە بەسرە بۆ ڕووبەڕووبوونەوەی یەکلاکەرەوە بەردەوام پێدەدەن"
      }
    },
    {
      id: "sp-slide-02",
      categoryId: "sports",
      tag: { ar: "دوري أبطال أوروبا", ku: "چامپیۆنزلیگ" },
      publishedAt: "2026-08-25 13:20",
      readTime: 5,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1400&auto=format&fit=crop",
      title: {
        ar: "قمة نارية تجمع كبار القارة في قرعة الدور ربع النهائي للتشامبيونزليغ",
        ku: "تیروپشکی قۆناغی چارەکی کۆتایی چامپیۆنزلیگ ڕووبەڕووبوونەوەی گەورە دیاری دەکات"
      }
    },
    {
      id: "sp-slide-03",
      categoryId: "sports",
      tag: { ar: "الدوري الإسباني", ku: "خولی ئیسپانی" },
      publishedAt: "2026-08-25 11:00",
      readTime: 3,
      image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1400&auto=format&fit=crop",
      title: {
        ar: "صراع الصدارة يشتعل قبل الكلاسيكو المرتقب مع اكتمال جاهزية النجوم",
        ku: "ململانێی پێشەنگی خولی ئیسپانی پێش یاری کلاسیکۆ گەرمتر دەبێت"
      }
    }
  ];

  // Grid News Cards Below Slider (6 cards in 2 rows of 3 columns)
  const sportsCards = [
    {
      id: "sp-card-01",
      categoryId: "sports",
      tag: { ar: "دوري نجوم العراق", ku: "خولی ئەستێرەکانی عێراق" },
      publishedAt: "2026-08-25 14:10",
      readTime: 3,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "اتحاد الكرة يعتمد تقنية الفار المحدثة لجميع مباريات الجولة القادمة",
        ku: "یەکێتی تۆپی پێ تەکنەلۆژیای نوێکراوەی ڤار بۆ یارییەکانی داهاتوو پەسەند دەکات"
      },
      summary: {
        ar: "تجهيز الملاعب بأحدث كاميرات التسلل شبه الآلي وتدريب الطواقم التحكيمية لضمان العدالة.",
        ku: "ئامادەکردنی یاریگاکان بە کامێرای پێشکەوتوو بۆ کەمکردنەوەی هەڵەی ناوبژیوانان."
      }
    },
    {
      id: "sp-card-02",
      categoryId: "sports",
      tag: { ar: "سوق الانتقالات", ku: "گواستنەوەی یاریزانان" },
      publishedAt: "2026-08-25 12:30",
      readTime: 3,
      image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "صفقة قياسية لنجم المنتخب العراقي نحو الدوري الإنجليزي الممتاز",
        ku: "گرێبەستێکی مێژوویی بۆ ئەستێرەی هەڵبژاردەی عێراق بەرەو پرێمەرلیگ"
      },
      summary: {
        ar: "المفاوضات تصل لمراحلها الأخيرة مع تقديم عرض رسمي يتجاوز التوقعات في الميركاتو الحالي.",
        ku: "گفتوگۆکان گەیشتوونەتە قۆناغی کۆتایی بۆ ئەنجامدانی گرێبەستێکی گەورە."
      }
    },
    {
      id: "sp-card-03",
      categoryId: "sports",
      tag: { ar: "كرة السلة", ku: "تۆپی سەبەتە" },
      publishedAt: "2026-08-25 10:15",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "افتتاح بطولة الأندية العربية لكرة السلة بمشاركة 16 فريقاً",
        ku: "دەستپێکردنی پاڵەوانێتی یانە عەرەبییەکان لە تۆپی سەبەتە بە بەشداری ١٦ تیپ"
      },
      summary: {
        ar: "منافسات قوية وحضور جماهيري لافت في حفل الافتتاح الذي شهد عروضاً رياضية وفنية متميزة.",
        ku: "ڕکابەری بەهێز و ئامادەبوونی جەماوەرێکی زۆر لە ئاهەنگی کردنەوەی پاڵەوانێتییەکەدا."
      }
    },
    {
      id: "sp-card-04",
      categoryId: "sports",
      tag: { ar: "الدوري الإنجليزي", ku: "پرێمەرلیگ" },
      publishedAt: "2026-08-25 09:00",
      readTime: 3,
      image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "قمة الجولة في البريميرليغ تنتهي بإثارة كروية وأهداف استثنائية",
        ku: "یاری لوتکەی پرێمەرلیگ بە جۆش و خرۆش و تۆمارکردنی گۆڵی ناوازە کۆتاییهات"
      },
      summary: {
        ar: "مباراة تكتيكية رفيعة المستوى تشهد تقلبات دراماتيكية في اللحظات الأخيرة من عمر اللقاء.",
        ku: "یارییەکی پڕ لە گۆڕانکاری کە هەوادارانی تۆپی پێی سەرسام کرد."
      }
    },
    {
      id: "sp-card-05",
      categoryId: "sports",
      tag: { ar: "الألعاب الأولمبية", ku: "ئۆڵۆمپیاد" },
      publishedAt: "2026-08-25 08:15",
      readTime: 2,
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "العراق يحصد ذهبيتين في بطولة آسيا لرفع الأثقال والمبارزة",
        ku: "عێراق دوو مەدالیای زێڕ لە پاڵەوانێتی ئاسیا بۆ بەرزکردنەوەی قورسایی بەدەستدەهێنێت"
      },
      summary: {
        ar: "إنجاز رياضي مشرف للأبطال العراقيين وسط إشادة واسعة بالمستوى الفني والبدني المتقدم.",
        ku: "دەستکەوتێکی گەورە بۆ وەرزشوانانی عێراق لە گۆڕەپانی نێودەوڵەتیدا."
      }
    },
    {
      id: "sp-card-06",
      categoryId: "sports",
      tag: { ar: "تنس المحترفين", ku: "تێنسی سەر زەوی" },
      publishedAt: "2026-08-25 07:30",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "نهائي بطولة الغران سلام يشهد ماراثوناً تاريخياً يتجاوز 4 ساعات",
        ku: "یاری کۆتایی پاڵەوانێتی گراند سلام ململانێیەکی مێژوویی زیاتر لە ٤ کاتژمێری بەخۆیەوە بینی"
      },
      summary: {
        ar: "مواجهة ملحمية تحبس الأنفاس تنتهي بتتويج بطل جديد يعتلي صدارة التصنيف العالمي للمحترفين.",
        ku: "ڕووبەڕووبوونەوەیەکی سەرسوڕهێنەر بە سەرکەوتن و بوونە پاڵەوانی نوێ کۆتایی پێهات."
      }
    }
  ];

  // Auto-play slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % sliderStories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderStories.length]);

  const activeStory = sliderStories[currentSlide];

  return (
    <section id="section-sports" className="section-off-white" style={{ padding: '3.25rem 0' }}>
      <div className="container">

        {/* 1. Section Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.75rem',
          borderBottom: '3px solid var(--color-secondary)',
          paddingBottom: '0.85rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            {/* Golden Trophy Icon Badge */}
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
              <Trophy size={24} strokeWidth={2.4} />
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1.15, margin: 0 }}>
                {lang === 'ar' ? 'قسم الرياضة العالمية والمحلية' : 'بەشی وەرزشی جیهانی و ناوخۆیی'}
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
            {lang === 'ar' ? 'عرض جميع الأخبار الرياضية' : 'بینینی هەموو هەواڵە وەرزشییەکان'}
            <ChevronLeft size={17} strokeWidth={3} />
          </button>
        </div>

        {/* 2. BIG GRAND SPORTS NEWS SLIDER (Top) */}
        <div style={{
          position: 'relative',
          borderRadius: '6px',
          overflow: 'hidden',
          marginBottom: '2rem',
          height: '650px',
          boxShadow: '0 6px 35px rgba(0,0,0,0.22)',
          background: '#0c1833'
        }}>
          {/* Preloaded Slide Layers with Smooth Cross-Fade */}
          {sliderStories.map((story, idx) => {
            const isActive = currentSlide === idx;
            return (
              <div
                key={story.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: isActive ? 1 : 0,
                  transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                  pointerEvents: isActive ? 'auto' : 'none',
                  zIndex: isActive ? 2 : 1,
                  cursor: 'pointer'
                }}
                onClick={() => onSelectArticle(story)}
              >
                {/* Background Image */}
                <img
                  src={story.image}
                  alt={story.title[lang]}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: isActive ? 'scale(1.02)' : 'scale(1)',
                    transition: 'transform 6s ease-out'
                  }}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1400&auto=format&fit=crop";
                  }}
                />

                {/* Dark Overlay Gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(12, 24, 51, 0.1) 0%, rgba(12, 24, 51, 0.92) 100%)'
                }}></div>

                {/* Tag Badge Top Right */}
                <span style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: '#ffbe00',
                  color: '#0c1833',
                  fontSize: '0.85rem',
                  fontWeight: 900,
                  padding: '6px 16px',
                  borderRadius: '4px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                  zIndex: 3
                }}>
                  {story.tag[lang]}
                </span>

                {/* Bottom Content Area */}
                <div style={{
                  position: 'absolute',
                  bottom: '2rem',
                  right: '2rem',
                  left: '2rem',
                  color: '#ffffff',
                  zIndex: 3
                }}>
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    lineHeight: 1.35,
                    marginBottom: '1rem',
                    textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                    maxWidth: '85%'
                  }}>
                    {story.title[lang]}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.86rem', color: '#94a3b8' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#ffbe00', fontWeight: 800 }}>
                      <Clock size={15} /> {story.readTime} {t.readingTime}
                    </span>
                    <span style={{ color: '#ffffff', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      {t.readMore} <ChevronLeft size={17} color="#ffbe00" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Slider Prev / Next Controls (Square with Soft Rounded Corners) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(prev => (prev - 1 + sliderStories.length) % sliderStories.length);
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '1.25rem',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '6px',
              background: 'rgba(12, 24, 51, 0.85)',
              border: '1.5px solid rgba(255, 190, 0, 0.5)',
              color: '#ffbe00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 4,
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
              transition: 'all 0.2s ease'
            }}
            aria-label="Previous Slide"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(prev => (prev + 1) % sliderStories.length);
            }}
            style={{
              position: 'absolute',
              top: '50%',
              right: '1.25rem',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '6px',
              background: 'rgba(12, 24, 51, 0.85)',
              border: '1.5px solid rgba(255, 190, 0, 0.5)',
              color: '#ffbe00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 4,
              boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
              transition: 'all 0.2s ease'
            }}
            aria-label="Next Slide"
          >
            <ChevronRight size={22} />
          </button>

          {/* Slider Dots Indicator */}
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1.5rem',
            display: 'flex',
            gap: '0.45rem',
            zIndex: 4
          }}>
            {sliderStories.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(idx);
                }}
                style={{
                  width: currentSlide === idx ? '26px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: currentSlide === idx ? '#ffbe00' : 'rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 3. SPORTS NEWS CARDS (6 Cards in 2 rows of 3 columns below slider) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="grid-3">
          {sportsCards.map((item) => (
            <div
              key={item.id}
              className="news-card"
              style={{
                borderRadius: '4px',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onClick={() => onSelectArticle(item)}
            >
              <div className="card-img-wrapper" style={{ cursor: 'pointer', position: 'relative', height: '255px', paddingTop: 0 }}>
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                />
                <span style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  zIndex: 3,
                  background: '#ffbe00',
                  color: '#0c1833',
                  padding: '3px 9px',
                  borderRadius: '3px',
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}>
                  {item.tag[lang]}
                </span>
              </div>

              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1.45, marginBottom: '0.75rem' }}>
                  {item.title[lang]}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9', marginTop: 'auto' }}>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={12} /> {item.readTime} {t.readingTime}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    {t.readMore} <ChevronLeft size={14} />
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
