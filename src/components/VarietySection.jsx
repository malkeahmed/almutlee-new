import React from 'react';
import {
  Layers, Clock, Eye, Calendar,
  ChevronLeft, Cpu, Landmark, Globe, HeartPulse, Sparkles
} from 'lucide-react';
import { translations } from '../data/translations';

export default function VarietySection({ articles, lang, onSelectArticle }) {
  const t = translations[lang] || translations.ar;

  // 4 Curated Luxury Variety Items with Unified Gold & Navy Branding
  const varietyList = [
    {
      id: "var-01",
      categoryLabel: { ar: "علوم وتكنولوجيا", ku: "زانست و تەکنەلۆجیا" },
      icon: Cpu,
      title: {
        ar: "ثورة الذكاء الاصطناعي في الطب: خوارزميات جديدة تتنبأ بالأمراض قبل ظهورها بسنوات",
        ku: "شۆڕشی ژیریی دەستکرد لە پزیشکیدا: ئەلگۆریتمی نوێ ساڵانێک پێش دەرکەوتن نەخۆشییەکان پێشبینی دەکات"
      },
      summary: {
        ar: "باحثون يطورون نماذج حوسبة متقدمة تدمج بين الجينات والبيانات الحيوية لتشخيص فائق الدقة، مما يفتح آفاقاً لعلاج استباقي غير مسبوق.",
        ku: "توێژەران مۆدێلی ژیریی دەستکردی نوێ پەرەپێدەدەن بۆ دیاریکردنی زووەختی نەخۆشییەکان بە وردبینییەکی بێوێنە."
      },
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      readTime: 4,
      views: "18.4K",
      publishedAt: "2026-08-25 14:00",
      author: {
        name: { ar: "د. سامي الجبوري", ku: "د. سامی ئەلجبوری" },
        role: { ar: "محرر التكنولوجيا والابتكار", ku: "سەرنووسەری تەکنەلۆجیا" },
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
      }
    },
    {
      id: "var-02",
      categoryLabel: { ar: "آثار وحضارات", ku: "شوێنەوار و شارستانییەت" },
      icon: Landmark,
      title: {
        ar: "اكتشاف مدينة بابلية مفقودة تعود لثلاثة آلاف عام بعد انحسار مياه نهر دجلة",
        ku: "دۆزینەوەی شارێکی ونبووی بابلی کە مێژووەکەی دەگەڕێتەوە بۆ سێ هەزار ساڵ پێش ئێستا"
      },
      summary: {
        ar: "بعثة أثرية دولية تعثر على قصور ومعابد تحتوي على ألواح مسمارية نادرة تسرد تفاصيل المعاملات التجارية والطقوس الفلكية لبلاد الرافدين.",
        ku: "تیمێکی شوێنەواری نێودەوڵەتی کۆشک و پەرستگای دێرین لەگەڵ تابلۆی مێخی مێژوویی دەدۆزنەوە."
      },
      image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=800&auto=format&fit=crop",
      readTime: 5,
      views: "32.1K",
      publishedAt: "2026-08-25 12:30",
      author: {
        name: { ar: "أحمد السعدون", ku: "ئەحمەد سەعدوون" },
        role: { ar: "باحث في التراث العراقي", ku: "توێژەری کەلەپوور" },
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
      }
    },
    {
      id: "var-03",
      categoryLabel: { ar: "فلك وأسرار الكون", ku: "گەردوون و نهێنییەکان" },
      icon: Globe,
      title: {
        ar: "تلسكوب جيمس ويب يلتقط اللحظات الأولى لولادة منظومة شمسية جديدة في مجرة مجاورة",
        ku: "تەلەسکۆپی جەیمس وێب دیمەنی دەگمەنی لەدایکبوونی کۆمەڵەیەکی خۆری نوێ تۆمار دەکات"
      },
      summary: {
        ar: "صور طيفية مذهلة تظهر كواكب صخرية في طور التكوين داخل سديم غباري هائل، مقدمة دليلاً حياً على كيفية نشوء كوكب الأرض في بداية الزمان.",
        ku: "وێنەی سەرسوڕهێنەری دروستبوونی گەڕەستێرە نوێیەکان زانیاری بێوێنە دەربارەی گەردوون ئاشکرا دەکات."
      },
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      readTime: 3,
      views: "27.8K",
      publishedAt: "2026-08-25 10:15",
      author: {
        name: { ar: "نادية الشيخلي", ku: "نادیە ئەلشێخلی" },
        role: { ar: "متابعة الشؤون العلمية", ku: "شیکەرەوەی زانستی" },
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
      }
    },
    {
      id: "var-04",
      categoryLabel: { ar: "بيئة ونمط حياة", ku: "ژینگە و شێوازی ژیان" },
      icon: HeartPulse,
      title: {
        ar: "المدن العمودية الخضراء: كيف تعيد الهندسة المستدامة ابتكار جودة الهواء والحياة الحضرية؟",
        ku: "شارە بەرزە سەوزەکان: چۆن تەلارسازی ژینگەیی ژیان لە شارە گەورەکاندا دەگۆڕێت؟"
      },
      summary: {
        ar: "مشاريع معمارية مبتكرة لزراعة الغابات المعلقة على واجهات الأبراج الشاهقة تخفض درجات الحرارة داخل العواصم بنسبة تصل إلى 6 درجات مئوية.",
        ku: "پڕۆژەی نوێی تەلارسازی سەوز پلەی گەرمی شارەکان دادەبەزێنێت و هەوایەکی پاکتر دابین دەکات."
      },
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop",
      readTime: 4,
      views: "14.9K",
      publishedAt: "2026-08-25 08:45",
      author: {
        name: { ar: "عمر الفاروق", ku: "عومەر ئەلفاروق" },
        role: { ar: "محرر شؤون البيئة", ku: "سەرنووسەری ژینگە" },
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
      }
    },
    {
      id: "var-05",
      categoryLabel: { ar: "سينما وفنون", ku: "سینەما و هونەر" },
      icon: Landmark,
      title: {
        ar: "افتتاح مهرجان بغداد السينمائي الدولي بمشاركة نخبة من المخرجين وصناع السينما العرب والعالميين",
        ku: "دەستپێکردنی فێستیڤاڵی نێودەوڵەتی فیلمی بەغدا بە بەشداری دەرهێنەرانی ناسراوی جیهانی"
      },
      summary: {
        ar: "عروض مميزة لأفلام روائية ووثائقية تسلط الضوء على الهوية والتاريخ والتجارب الإنسانية الملهمة.",
        ku: "پێشکەشکردنی بەرهەمە نوێیەکانی سینەمای جیهانی لە بەغدا."
      },
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop",
      readTime: 3,
      views: "21.5K",
      publishedAt: "2026-08-25 07:30",
      author: {
        name: { ar: "سارة الزاملي", ku: "سارە ئەلزاملی" },
        role: { ar: "محررة الشؤون الثقافية", ku: "سەرنووسەری کولتوور" },
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
      }
    },
    {
      id: "var-06",
      categoryLabel: { ar: "أسرار الطبيعة", ku: "نهێنییەکانی سروشت" },
      icon: Globe,
      title: {
        ar: "اكتشاف كائنات بحرية نادرة ومضيئة ذاتياً في أعماق المحيط تتحدى الظروف المناخية القاسية",
        ku: "دۆزینەوەی زیندەوەری دەریایی دەگمەن و خۆڕووناكکەرەوە لە قووڵایی زەریاکاندا"
      },
      summary: {
        ar: "دراسة استكشافية توثق سلوكيات فريدة لكائنات بحرية تعيش بدون ضوء شمس وتعتمد على الطاقة الحرارية للأرض.",
        ku: "توێژینەوەی دەریایی نوێ دەربارەی زیندەوەرە سەرسوڕهێنەرەکان."
      },
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
      readTime: 5,
      views: "39.2K",
      publishedAt: "2026-08-25 06:15",
      author: {
        name: { ar: "أحمد السعدون", ku: "ئەحمەد سەعدوون" },
        role: { ar: "محرر التغطيات العلمية", ku: "سەرنووسەری زانست" },
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
      }
    },
    {
      id: "var-07",
      categoryLabel: { ar: "ابتكار وتقنية", ku: "داهێنان و تەکنەلۆجیا" },
      icon: Cpu,
      title: {
        ar: "أول حاسوب كمومي تجاري يبدأ معالجة البيانات المعقدة وتطوير خوارزميات التشفير المستقبلي",
        ku: "یەکەمین کۆمپیوتەری کوانتۆمی بازرگانی دەست بە شیکردنەوەی داتا ئاڵۆزەکان دەکات"
      },
      summary: {
        ar: "قفزة هندسية تاريخية تمكن من حل معادلات رياضية معقدة في ثوانٍ معدودة بعد أن كانت تستغرق عقوداً.",
        ku: "هەنگاوێکی مێژوویی لە بواری کۆمپیوتەری کوانتۆم و پاراستنی زانیاری."
      },
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      readTime: 4,
      views: "16.8K",
      publishedAt: "2026-08-25 05:00",
      author: {
        name: { ar: "د. سامي الجبوري", ku: "د. سامی ئەلجبوری" },
        role: { ar: "محرر التكنولوجيا", ku: "سەرنووسەری تەکنەلۆجیا" },
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
      }
    },
    {
      id: "var-08",
      categoryLabel: { ar: "تراث وآثار", ku: "کەلەپوور و شوێنەوار" },
      icon: Landmark,
      title: {
        ar: "إعادة ترميم إيوان كسرى والمدائن التاريخية باستخدام تقنيات المسح الضوئي ثلاثي الأبعاد والذكاء الاصطناعي",
        ku: "نۆژەنکردنەوەی تاقی کەسرا و شوێنەوارە دێرینەکان بە تەکنەلۆجیای سێ ڕەهەندی پێشکەوتوو"
      },
      summary: {
        ar: "مشروع وطني ودولي مشترك لحماية المعالم الأثرية العراقية العريقة من عوامل التعرية وصيانتها للأجيال القادمة.",
        ku: "پڕۆژەیەکی هاوبەش بۆ پاراستنی شوێنەوارە دێرینەکانی عێراق."
      },
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
      readTime: 6,
      views: "45.3K",
      publishedAt: "2026-08-25 04:20",
      author: {
        name: { ar: "مريم البابلي", ku: "مریەم ئەلبابلی" },
        role: { ar: "باحثة في الآثار", ku: "توێژەری شوێنەوار" },
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
      }
    }
  ];

  return (
    <section id="section-variety" className="section-pure-white" style={{
      padding: '3.25rem 0'
    }}>
      <div className="container">

        {/* 1. Section Header (Gold & Navy Authority) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.75rem',
          borderBottom: '3px solid var(--color-secondary)',
          paddingBottom: '0.85rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            {/* Golden Layers/Variety Icon Badge */}
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
              <Layers size={24} strokeWidth={2.4} />
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1.15, margin: 0 }}>
                {lang === 'ar' ? 'قسم المنوعات والثقافة والعلوم' : 'بەشی هەمەجۆر و زانست و کولتوور'}
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
            {lang === 'ar' ? 'عرض جميع منوعات' : 'بینینی هەموو بابەتەکان'}
            <ChevronLeft size={17} strokeWidth={3} />
          </button>
        </div>

        {/* 2. Variety Cards Grid (4 Unified, Highly Professional Cards) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.35rem'
        }} className="variety-cards-grid">
          {varietyList.map((item) => {
            const CatIcon = item.icon;
            return (
              <article
                key={item.id}
                onClick={() => onSelectArticle && onSelectArticle(item)}
                className="variety-luxury-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 16px rgba(12, 24, 51, 0.05)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
              >
                {/* Top Image Container (Unified Gold Badge & Overlay) */}
                <div style={{ position: 'relative', width: '100%', height: '295px', overflow: 'hidden', background: '#0c1833' }}>
                  <img
                    src={item.image}
                    alt={item.title[lang]}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    className="variety-card-img"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop";
                    }}
                  />

                  {/* Subtle Dark Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(12, 24, 51, 0.7) 100%)'
                  }}></div>

                  {/* Unified Golden Category Badge */}
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
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.35)',
                    zIndex: 2
                  }}>
                    <CatIcon size={12} strokeWidth={2.6} />
                    {item.categoryLabel[lang]}
                  </span>

                  {/* Unified Read Time Capsule */}
                  <span style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    background: 'rgba(4, 8, 18, 0.88)',
                    color: '#ffffff',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 190, 0, 0.35)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    zIndex: 2
                  }}>
                    <Clock size={11} color="#ffbe00" /> {item.readTime} {lang === 'ar' ? 'دقائق' : 'خولەک'}
                  </span>
                </div>

                {/* Content Container Below Image */}
                <div style={{
                  padding: '1rem 1.15rem 0.95rem 1.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between'
                }}>
                  <div>
                    {/* Meta Category and Date */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: '#64748b', marginBottom: '0.45rem', fontWeight: 700 }}>
                      <span style={{ color: '#ffbe00' }}>●</span>
                      <span>{item.publishedAt.split(' ')[0]}</span>
                      <span style={{ margin: '0 2px' }}>•</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                        <Eye size={12} color="#94a3b8" /> {item.views}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="variety-card-title"
                      style={{
                        fontSize: '1.05rem',
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
                  </div>

                  {/* Footer Read Article CTA Bar */}
                  <div style={{
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: '0.75rem',
                    marginTop: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                  }}>
                    {/* Unified Golden Read More CTA Button */}
                    <span
                      className="variety-read-cta-btn"
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 900,
                        color: '#0c1833',
                        background: '#ffbe00',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        boxShadow: '0 2px 6px rgba(255, 190, 0, 0.3)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {lang === 'ar' ? 'قراءة الخبر' : 'خوێندنەوە'}
                      <ChevronLeft size={14} strokeWidth={3} />
                    </span>
                  </div>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
