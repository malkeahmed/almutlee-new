import React from 'react';
import { ShieldAlert, Clock, ChevronLeft } from 'lucide-react';
import { translations } from '../data/translations';

export default function SecuritySection({ articles, lang, onSelectArticle }) {
  const t = translations[lang];

  // 6 Rich Security & Defense News Articles (2 rows of 3 columns)
  const securityArticles = [
    {
      id: "sec-01",
      categoryId: "security",
      readTime: 3,
      publishedAt: "2026-08-25 13:10",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "الأجهزة الأمنية تعلن نجاح خطة الاستقرار وتفكيك شبكة تهريب دولية",
        ku: "هێزە ئاسایشییەکان سەرکەوتنی پلانی جێگیرکردنی ئاسایش و هەڵوەشاندنەوەی تۆڕێکی قاچاغچێتی ڕادەگەیەنن"
      },
      summary: {
        ar: "عملية استباقية نوعية تسفر عن ضبط شحنات غير قانونية وإحالة المتورطين إلى القضاء المختص لضمان الاستقرار.",
        ku: "ئۆپەراسیۆنێکی پێشوەختە بووە هۆی دەستبەسەرداگرتنی کەلوپەلی نایاسایی و ڕادەستکردنی تۆمەتباران بە دادگا."
      }
    },
    {
      id: "sec-02",
      categoryId: "security",
      readTime: 4,
      publishedAt: "2026-08-25 11:40",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "قيادة العمليات المشتركة تطلق المرحلة الثالثة من تأمين الحدود والمنافذ الحيوية",
        ku: "فەرماندەیی ئۆپەراسیۆنە هاوبەشەکان قۆناغی سێیەمی پاراستنی سنوورەکان دەستپێدەکات"
      },
      summary: {
        ar: "نشر منظومات مراقبة حرارية وطائرات مسيرة ذكية لتعزيز الحزام الأمني ومنع التسلل غير الشرعي عبر القواطع الحدودية.",
        ku: "جێگیرکردنی کامێرای حەراری و فڕۆکەی بێفڕۆکەوان بۆ پاراستنی هێڵی سنووری و ڕێگری لە دزەکردن."
      }
    },
    {
      id: "sec-03",
      categoryId: "security",
      readTime: 3,
      publishedAt: "2026-08-25 09:25",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "إحباط هجوم سيبراني معقد استهدف البنية التحتية لمنظومة الاتصالات الحكومية",
        ku: "شکستپێهێنانی هێرشێکی ئەلیکترۆنی ئاڵۆز کە ژێرخانی پەیوەندییە حکومییەکانی کردبووە ئامانج"
      },
      summary: {
        ar: "فرق الأمن الرقمي تتمكن من عزل الثغرات التقنية وإحباط محاولات الاختراق دون تسجيل أي تسريب للبيانات الرسمية.",
        ku: "تیمی ئاسایشی دیجیتاڵی توانیان بەربەست لەبەردەم هێرشە ئەلیکترۆنییەکە دابنێن و زانیارییەکان بپارێزن."
      }
    },
    {
      id: "sec-04",
      categoryId: "security",
      readTime: 4,
      publishedAt: "2026-08-25 08:30",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "مديرية مكافحة الجريمة المنظمة تضبط مستودعات تجارية غير مطابقة للمواصفات",
        ku: "بەڕێوەبەرایەتی بەرەنگاربوونەوەی تاوانی ڕێکخراو دەست بەسەر کۆگای سەرپێچیکاردا دەگرێت"
      },
      summary: {
        ar: "حملات تفتيشية واسعة النطاق لمراقبة الأسواق والحد من الاحتكار وحماية المستهلكين بالتنسيق مع الجهات القضائية.",
        ku: "هەڵمەتی پشکنینی بەرفراوان بۆ چاودێری بازاڕ و پاراستنی مافی بەکاربەران بە هەماهەنگی لەگەڵ دادگا."
      }
    },
    {
      id: "sec-05",
      categoryId: "security",
      readTime: 3,
      publishedAt: "2026-08-25 07:45",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "الدفاع المدني ينفذ تمرين إخلاء استراتيجي واختبار جاهزية منظومات السلامة",
        ku: "بەرگری شارستانی مانۆڕێکی ستراتیژی بۆ ئامادەباشی و سەلامەتی ئەنجام دەدات"
      },
      summary: {
        ar: "تدريبات ميدانية متقدمة لفرق الإنقاذ السريع لرفع كفاءة الاستجابة لحالات الطوارئ في المؤسسات العامة والمنشآت النفطية.",
        ku: "ڕاهێنانی مەیدانی پێشکەوتوو بۆ تیمی فریاگوزاری بەمەبەستی بەرزکردنەوەی توانای بەرەنگاربوونەوەی ڕووداوەکان."
      }
    },
    {
      id: "sec-06",
      categoryId: "security",
      readTime: 5,
      publishedAt: "2026-08-25 07:10",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "تفعيل منظومة المراقبة الذكية بالذكاء الاصطناعي لتأمين الطرق الدولية السريعة",
        ku: "کارپێکردنی سیستەمی زیرەکی دەستکرد بۆ چاودێری و پاراستنی ڕێگاوبانە نێودەوڵەتییەکان"
      },
      summary: {
        ar: "تركيب رادارات متطورة وكاميرات عالية الدقة لرصد المخالفات وضمان سلامة القوافل التجارية وحركة المسافرين.",
        ku: "دانانی ڕاداری پێشکەوتوو و کامێرای زیرەک بۆ چاودێری هاتوچۆ و پاراستنی گەشتیاران و بارهەڵگرەکان."
      }
    }
  ];

  return (
    <section id="section-security" className="section-off-white" style={{ padding: '3.25rem 0' }}>
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
              <ShieldAlert size={24} strokeWidth={2.4} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', margin: 0, lineHeight: 1 }}>
                {lang === 'ar' ? 'قسم الشؤون الأمنية' : 'بەشی هەواڵە ئاسایشییەکان'}
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
            {lang === 'ar' ? 'عرض جميع الأخبار الأمنية' : 'بینینی هەموو هەواڵە ئەمنییەکان'}
            <ChevronLeft size={17} strokeWidth={3} />
          </button>
        </div>

        {/* 6 Cards Grid Layout (2 rows of 3 cards) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="grid-3">
          {securityArticles.map((item) => (
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
                  {lang === 'ar' ? 'أمن' : 'ئاسایش'}
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
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-primary)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
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
