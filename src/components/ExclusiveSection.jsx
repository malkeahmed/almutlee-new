import React from 'react';
import { MapPin, Clock, ChevronLeft } from 'lucide-react';
import { translations } from '../data/translations';

export default function ExclusiveSection({ articles, lang, onSelectArticle }) {
  const t = translations[lang];

  // 6 Rich Local News Articles for Provinces
  const localNewsArticles = [
    {
      id: "loc-01",
      categoryId: "local",
      province: { ar: "بغداد", ku: "بەغدا" },
      readTime: 3,
      publishedAt: "2026-08-25 14:20",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "أمانة بغداد تطلق حزمة مشاريع لفك الاختناقات المرورية وتطوير مجسرات العاصمة",
        ku: "ئامانەی بەغدا چەندین پڕۆژە بۆ کەمکردنەوەی قەرەباڵغی هاتوچۆ ڕادەگەیەنێت"
      },
      summary: {
        ar: "مباشرة الأعمال الإنشائية في 4 أنفاق ومجسرات حيوية لربط جانبي الكرخ والرصافة وتحسين انسيابية حركة السير.",
        ku: "دەستپێکردنی کارەکانی دروستکردنی پرد و ڕێڕەوی نوێ بۆ بەستنەوەی کەرخ و ڕەسافە."
      }
    },
    {
      id: "loc-02",
      categoryId: "local",
      province: { ar: "البصرة", ku: "بەسرە" },
      readTime: 4,
      publishedAt: "2026-08-25 12:45",
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "افتتاح المرحلة الأولى من محطة تحلية المياه الكبرى لتغذية الأقضية الجنوبية",
        ku: "کردنەوەی قۆناغی یەکەمی وێستگەی گەورەی شیرینکردنی ئاو لە بەسرە"
      },
      summary: {
        ar: "المشروع يوفر أكثر من 250 ألف متر مكعب يومياً من المياه الصالحة للشرب وينهي أزمة شح المياه في المحافظة.",
        ku: "پڕۆژەکە زیاتر لە ٢٥٠ هەزار مەتری سێجا ئاوی پاک بۆ هاووڵاتیان دابین دەکات."
      }
    },
    {
      id: "loc-03",
      categoryId: "local",
      province: { ar: "أربيل", ku: "هەولێر" },
      readTime: 3,
      publishedAt: "2026-08-25 11:15",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "توسيع شبكة الكهرباء الذكية وربط المشاريع السكنية الجديدة بالمنظومة الوطنية",
        ku: "فراوانکردنی تۆڕی زیرەکی کارەبا و بەستنەوەی پرۆژە نیشتەجێبوونە نوێیەکان"
      },
      summary: {
        ar: "تنفيذ تقنيات العدادات الإلكترونية لتقليل الهدر وضمان استقرار التجهيز الكهربائي لجميع القطاعات التجارية.",
        ku: "جێبەجێکردنی پێوەری زیرەک بۆ ڕێگریکردن لە بەفیڕۆچوونی کارەبا و باشترکردنی پێدان."
      }
    },
    {
      id: "loc-04",
      categoryId: "local",
      province: { ar: "النجف الأشرف", ku: "نەجەف" },
      readTime: 4,
      publishedAt: "2026-08-25 09:50",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "إطلاق المخطط العمراني الشامل لتوسعة المدينة القديمة واستيعاب الزائرين",
        ku: "ڕاگەیاندنی پلانی شارستانی بۆ فراوانکردنی شاری کۆن و پێشوازی لە زیارەتکاران"
      },
      summary: {
        ar: "تطوير الطرق الحولية والساحات الخدمية ورفع كفاءة البنى التحتية لاستيعاب ملايين الوافدين سنوياً.",
        ku: "پەرەپێدانی ڕێگاوبانەکان و بەرزکردنەوەی ئاستی خزمەتگوزارییە گشتییەکان بۆ پێشوازی میوانان."
      }
    },
    {
      id: "loc-05",
      categoryId: "local",
      province: { ar: "نينوى", ku: "نەینەوا" },
      readTime: 3,
      publishedAt: "2026-08-25 08:30",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "إنجاز 85% من أعمال إعادة تأهيل مطار الموصل الدولي تمهيداً لافتتاحه",
        ku: "تەواوبوونی ٨٥٪ی کارەکانی نۆژەنکردنەوەی فڕۆکەخانەی نێودەوڵەتی مووسڵ"
      },
      summary: {
        ar: "استكمال المدرج الرئيسي وصالات المسافرين وفق أحدث المعايير الدولية لتعزيز الحركة الاقتصادية والاستثمارية.",
        ku: "تەواوکردنی هێڵی فڕین و هۆڵەکانی گەشتیاران بۆ دەستپێکردنەوەی گەشتە نێودەوڵەتییەکان."
      }
    },
    {
      id: "loc-06",
      categoryId: "local",
      province: { ar: "كربلاء المقدسة", ku: "کەربەلا" },
      readTime: 5,
      publishedAt: "2026-08-25 07:15",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "افتتاح المجمع الاستشفائي التخصصي لطب وجراحة القلب بسعة 300 سرير",
        ku: "کردنەوەی نەخۆشخانەی پسپۆڕی نەشتەرگەری دڵ بە توانای ٣٠٠ قەروێڵە"
      },
      summary: {
        ar: "تجهيز المستشفى بأحدث الأجهزة الطبية والمختبرية لتقديم خدمات علاجية مجانية لأبناء المحافظات الوسطى والجنوبية.",
        ku: "دابینکردنی پێشکەوتووترین ئامێری پزیشکی بۆ پێشکەشکردنی خزمەتگوزاری بێبەرامبەر."
      }
    }
  ];

  return (
    <section id="section-local" style={{ padding: '2.75rem 0', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
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
            {/* Golden Map Pin Icon Badge */}
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
              <MapPin size={24} strokeWidth={2.4} />
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1.15, margin: 0 }}>
                {lang === 'ar' ? 'قسم الأخبار المحلية' : 'بەشی هەواڵە ناوخۆییەکان'}
              </h2>
            </div>
          </div>

          <span className="badge-gold" style={{ 
            fontSize: '0.82rem', 
            padding: '0.45rem 0.95rem',
            borderRadius: '4px',
            fontWeight: 800,
            background: 'rgba(255, 190, 0, 0.15)',
            color: 'var(--color-primary)',
            border: '1px solid var(--color-secondary)'
          }}>
            {lang === 'ar' ? 'محلي' : 'ناوخۆیی'}
          </span>
        </div>

        {/* 6 Local News Cards Grid (2 rows of 3 columns) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="grid-3">
          {localNewsArticles.map((item) => (
            <div 
              key={item.id} 
              className="news-card" 
              style={{ 
                borderRadius: '4px', 
                border: '1px solid #e2e8f0', 
                borderTop: '3px solid var(--color-secondary)',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onClick={() => onSelectArticle(item)}
            >
              <div className="card-img-wrapper" style={{ cursor: 'pointer', position: 'relative', height: '260px', paddingTop: 0 }}>
                <img 
                  src={item.image} 
                  alt={item.title[lang]} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                />
                <span className="badge-gold" style={{ 
                  position: 'absolute', 
                  top: '0.75rem', 
                  right: '0.75rem', 
                  zIndex: 3,
                  background: 'linear-gradient(135deg, #ffbe00 0%, #e0a700 100%)',
                  color: '#0c1833',
                  padding: '3px 10px',
                  borderRadius: '3px',
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }}>
                  {item.province[lang]}
                </span>
              </div>

              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1.45, marginBottom: '0.75rem' }}>
                  {item.title[lang]}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9', marginTop: 'auto' }}>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={13} /> {item.readTime} {t.readingTime}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-primary)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    {t.readMore} <ChevronLeft size={15} />
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
