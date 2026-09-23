import React from 'react';
import { Landmark, Clock, ChevronLeft } from 'lucide-react';
import { translations } from '../data/translations';

export default function PoliticsSection({ articles, lang, onSelectArticle }) {
  const t = translations[lang];

  // 6 Featured Political Cards (2 rows of 3 columns)
  const politicsArticles = [
    {
      id: "pol-01",
      categoryId: "politics",
      publishedAt: "2026-08-25 16:30",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "اجتماع طارئ للرئاسات الثلاث في بغداد لحسم التفاهمات المالية وإقرار الموازنة العامة",
        ku: "کۆبوونەوەی بەپەلەی سێ سەرۆکایەتییەکە لە بەغدا بۆ یەکلاییکردنەوەی لەێکگەیشتنە داراییەکان"
      },
      summary: {
        ar: "كشف مصدر حكومي رفيع المستوى لوكالة 'المطلع' عن التوصل إلى خطة عمل شاملة لتنشيط الاستثمارات الوطنية وتوزيع التخصصات المالية للشركات الناشئة والمشاريع البنيوية.",
        ku: "سەرچاوەیەکی باڵای حکومی بۆ ئاژانسی «المطلع» ئاشکرای کرد کە گەیشتوونەتە پلانێکی کارا بۆ گەشەپێدانی وەبەرهێنان و پڕۆژە خزمەتگوزارییەکان."
      }
    },
    {
      id: "pol-02",
      categoryId: "politics",
      publishedAt: "2026-08-25 15:45",
      readTime: 3,
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "اللجنة النيابية المشتركة تناقش تعديلات قانون الاستثمار ودعم المشاريع الاستراتيجية",
        ku: "لیژنەی پەرلەمانی هاوبەش هەموارکردنی یاسای وەبەرهێنان و پڕۆژە ستراتیژییەکان تاوتوێ دەکات"
      },
      summary: {
        ar: "حراك برلماني مكثف لتمرير حزمة تشريعات تنموية تهدف إلى تسهيل إجراءات المستثمرين وتوفير فرص عمل جديدة وتعزيز الشراكات الوطنية.",
        ku: "هەوڵی چڕی پەرلەمانی بۆ تێپەڕاندنی یاسای وەبەرهێنان و ڕەخساندنی هەلی کاری نوێ بۆ گەنجان و پەرەپێدانی ئابووری."
      }
    },
    {
      id: "pol-03",
      categoryId: "politics",
      publishedAt: "2026-08-25 14:10",
      readTime: 5,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "جولة مباحثات إقليمية جديدة في بغداد لتعزيز التعاون الدبلوماسي وأمن الممرات التجارية",
        ku: "خولێکی نوێی گفتوگۆی هەرێمی لە بەغدا بۆ بەهێزکردنی پەیوەندییە دیپلۆماسییەکان و ڕێڕەوی بازرگانی"
      },
      summary: {
        ar: "وفود دبلوماسية رفيعة تصل العاصمة لبحث ملفات الشراكة الاقتصادية وتأمين الملاحة الدولية في المنطقة ودعم التبادل التجاري.",
        ku: "شاندی دیپلۆماسی بەمەبەستی تاوتوێکردنی دۆسیەکانی هاوبەشی ئابووری دەگەنە بەغدا بۆ پاراستنی هێڵە بازرگانییەکان."
      }
    },
    {
      id: "pol-04",
      categoryId: "politics",
      publishedAt: "2026-08-25 13:20",
      readTime: 3,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "مجلس الوزراء يقر الحزمة الثانية من مشاريع فك الاختناقات وتطوير البنية التحتية",
        ku: "ئەنجومەنی وەزیران دووەم پاکێجی پڕۆژەکانی چارەسەری قەرەباڵغی و ژێرخان پەسەند دەکات"
      },
      summary: {
        ar: "الموافقة على تخصيصات مالية كبرى لإنشاء جسور وأنفاق استراتيجية وتحديث شبكات الطرق الحيوية لربط المحافظات وتخفيف الازدحام.",
        ku: "پەسەندکردنی بودجەی تایبەت بۆ دروستکردنی پرد و نۆژەنکردنەوەی ڕێگاوبانە سەرەکییەکان بۆ کەمکردنەوەی قەرەباڵغی."
      }
    },
    {
      id: "pol-05",
      categoryId: "politics",
      publishedAt: "2026-08-25 12:00",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "المفوضية العليا تعلن اكتمال الترتيبات الفنية واللوجستية للانتخابات القادمة",
        ku: "کۆمیسیۆنی باڵا تەواوبوونی ئامادەکارییە تەکنیکی و لۆجستییەکانی بۆ هەڵبژاردن ڕاگەیاند"
      },
      summary: {
        ar: "تحديث سجلات الناخبين وإدخال تقنيات التصويت البايومتري الحديثة لضمان أقصى درجات الشفافية والنزاهة وتسهيل مشاركة المواطنين.",
        ku: "نوێکردنەوەی تۆماری دەنگدەران و بەکارهێنانی سیستەمی بایۆمەتری پێشکەوتوو بۆ شەفافیەت و ئاسانکاری دەنگدان."
      }
    },
    {
      id: "pol-06",
      categoryId: "politics",
      publishedAt: "2026-08-25 11:15",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "اتفاقات شراكة صناعية وزراعية كبرى لتعزيز الإنتاج المحلي والأمن الغذائي المستدام",
        ku: "ڕێککەوتنی گەورەی پیشەسازی و کشتوکاڵی بۆ بەهێزکردنی بەرهەمی ناوخۆیی و ئاسایشی خۆراک"
      },
      summary: {
        ar: "توقيع مذكرات تفاهم ثنائية لإنشاء مناطق صناعية حرة وتقديم تسهيلات مصرفية للمزارعين والمصنعين لدعم الاقتصاد الوطني.",
        ku: "واژۆکردنی یاداشتنامەی لێکتێگەیشتن بۆ دامەزراندنی ناوچەی پیشەسازی و پێدانی قەرز بە جووتیاران بۆ گەشەی ئابووری."
      }
    }
  ];

  return (
    <section id="section-politics" className="section-pure-white" style={{ padding: '3.25rem 0' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.75rem',
          borderBottom: '3px solid var(--color-secondary)',
          paddingBottom: '0.85rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            {/* Simple, Sleek & Chic Golden Icon Badge */}
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
              <Landmark size={24} strokeWidth={2.4} />
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', margin: 0, lineHeight: 1 }}>
                {lang === 'ar' ? 'قسم الشؤون السياسية' : 'بەشی هەواڵە سیاسییەکان'}
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
            {lang === 'ar' ? 'عرض جميع الأخبار السياسية' : 'بینینی هەموو هەواڵە سیاسییەکان'}
            <ChevronLeft size={17} strokeWidth={3} />
          </button>
        </div>

        {/* 6 Cards Grid Layout (2 rows of 3 cards) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="grid-3">
          {politicsArticles.map((item) => (
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
                <span className="badge-navy" style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  zIndex: 3,
                  background: '#0c1833',
                  color: '#ffffff',
                  padding: '3px 9px',
                  borderRadius: '3px',
                  fontSize: '0.75rem',
                  fontWeight: 800
                }}>
                  {item.publishedAt.split(' ')[1]}
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
