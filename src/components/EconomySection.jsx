import React from 'react';
import {
  TrendingUp, Clock, ChevronLeft, ArrowUpRight,
  DollarSign, BarChart3, Coins, Flame, Sparkles, Building2
} from 'lucide-react';
import { translations } from '../data/translations';

export default function EconomySection({ articles, lang, onSelectArticle }) {
  const t = translations[lang];

  // 6 Rich Economy & Market Articles (2 rows of 3 columns)
  const economyArticles = [
    {
      id: "eco-01",
      categoryId: "economy",
      tag: { ar: "القطاع المصرفي", ku: "کەرتی بانکی" },
      metric: { ar: "نمو +12%", ku: "گەشە +12%" },
      publishedAt: "2026-08-25 15:00",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "البنك المركزي يطلق مبادرة التمويل الأخضر وتحديث منصات المدفوعات الإلكترونية",
        ku: "بانکی ناوەندی دەستپێشخەری دارایی سەوز و نوێکردنەوەی سیستەمی پارەدانی ئەلیکترۆنی ڕادەگەیەنێت"
      },
      summary: {
        ar: "تسهيلات ائتمانية وحوافز استثمارية للشركات المساهمة في مشاريع الطاقة النظيفة والتنمية المستدامة بالمحافظات.",
        ku: "ئاسانکاری دارایی بۆ کۆمپانیاکانی کەرتی وزەی پاک و گەشەپێدانی ئابووری."
      }
    },
    {
      id: "eco-02",
      categoryId: "economy",
      tag: { ar: "أسواق النفط والطاقة", ku: "بازاڕی نەوت و وزە" },
      metric: { ar: "استقرار 84$", ku: "جێگیر 84$" },
      publishedAt: "2026-08-25 13:30",
      readTime: 5,
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "ارتفاع الإيرادات النفطية الشهرية مع استقرار معدلات التصدير عبر الموانئ الجنوبية",
        ku: "بەرزبوونەوەی داهاتی نەوت لەگەڵ جێگیربوونی هەناردەکردن لە ڕێگەی بەندەرەکانەوە"
      },
      summary: {
        ar: "وزارة النفط تؤكد الالتزام بقرارات أوبك بلس وتحقيق عوائد مالية تدعم موازنة المشاريع التنموية الكبرى.",
        ku: "وەزارەتی نەوت پابەندبوونی خۆی بە بڕیارەکانی ئۆپێک پڵەس و بەدەستهێنانی داهاتی پێویست دووپات دەکاتەوە."
      }
    },
    {
      id: "eco-03",
      categoryId: "economy",
      tag: { ar: "الاستثمار والتنمية", ku: "وەبەرهێنان و گەشەپێدان" },
      metric: { ar: "20 مشروعاً", ku: "٢٠ پڕۆژە" },
      publishedAt: "2026-08-25 11:45",
      readTime: 3,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "الهيئة الوطنية للاستثمار تمنح إجازات لـ 20 مشروعاً صناعياً استراتيجياً",
        ku: "دەستەی نیشتمانی وەبەرهێنان مۆڵەت بە ٢٠ پڕۆژەی پیشەسازی ستراتیژی دەدات"
      },
      summary: {
        ar: "حزمة مشاريع تهدف إلى تشجيع الإنتاج الوطني وتوفير آلاف فرص العمل للكوادر الهندسية والتقنية الشابة.",
        ku: "پڕۆژەکان ئامانجیان بەهێزکردنی بەرهەمی ناوخۆیی و ڕەخساندنی هەلی کارە بۆ گەنجان."
      }
    },
    {
      id: "eco-04",
      categoryId: "economy",
      tag: { ar: "التجارة الدولية", ku: "بازرگانی نێودەوڵەتی" },
      metric: { ar: "شريان تجاري", ku: "هێڵی بازرگانی" },
      publishedAt: "2026-08-25 10:10",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "طريق التنمية: اكتمال الدراسات الفنية للربط السككي والموانئ الجافة",
        ku: "ڕێگای گەشەپێدان: تەواوبوونی لێکۆڵینەوەی هێڵی ئاسن و بەندەرە وشکانییەکان"
      },
      summary: {
        ar: "تقدم كبير في مسارات التنسيق الدولي لربط الخليج العربي بأوروبا عبر الأراضي العراقية كشريان تجاري عالمي.",
        ku: "پێشکەوتنی بەرچاو لە بەستنەوەی کەنداوی عەرەبی بە ئەوروپا لە ڕێگەی عێراقەوە."
      }
    },
    {
      id: "eco-05",
      categoryId: "economy",
      tag: { ar: "الذهب والمعادن", ku: "زێڕ و کانزاکان" },
      metric: { ar: "مكاسب قياسية", ku: "دەستکەوتی نوێ" },
      publishedAt: "2026-08-25 08:50",
      readTime: 3,
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "أسعار الذهب تواصل المكاسب في الأسواق المحلية وسط إقبال على الاستثمار الآمن",
        ku: "بەرزبوونەوەی نرخی زێڕ لە بازاڕە ناوخۆییەکاندا لەگەڵ ڕووی هاووڵاتیان لە کڕینی زێڕ"
      },
      summary: {
        ar: "تحليل حركة العرض والطلب وتوقعات الخبراء الماليين لاتجاهات أسعار المعدن الأصفر خلال الربع المالي القادم.",
        ku: "شیکاری بازاڕ و پێشبینی شارەزایان بۆ ئاڕاستەی نرخی زێڕ لە مانگەکانی داهاتوودا."
      }
    },
    {
      id: "eco-06",
      categoryId: "economy",
      tag: { ar: "الريادة والأعمال", ku: "کارسازی و بازرگانی" },
      metric: { ar: "ملتقى بغداد", ku: "کۆڕبەندی بەغدا" },
      publishedAt: "2026-08-25 07:30",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "ملتقى بغداد الاقتصادي يستعرض فرص تمويل المشاريع الصغيرة والابتكار الرقمي",
        ku: "کۆڕبەندی ئابووری بەغدا دەرفەتی پاڵپشتی دارایی بۆ پڕۆژە بچووکەکان دەخاتەڕوو"
      },
      summary: {
        ar: "حضور واسع لرواد الأعمال وممثلي الصناديق الاستثمارية لمناقشة تسريع نمو الشركات الناشئة ورواد الأعمال.",
        ku: "ئامادەبوونی خاوەنکاران و سندووقەکانی وەبەرهێنان بۆ گەشەپێدانی پڕۆژە نوێیەکان."
      }
    }
  ];

  return (
    <section id="section-economy" className="section-off-white" style={{
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
            {/* Golden Trending Up Icon Badge */}
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
              <TrendingUp size={24} strokeWidth={2.4} />
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1.15, margin: 0 }}>
                {lang === 'ar' ? 'قسم الاقتصاد' : 'بەشی ئابووری'}
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
            {lang === 'ar' ? 'عرض جميع الأخبار الاقتصادية' : 'بینینی هەموو هەواڵە ئابوورییەکان'}
            <ChevronLeft size={17} strokeWidth={3} />
          </button>
        </div>

        {/* 2. Economy Cards Grid (Matching Site Standard) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="grid-3">
          {economyArticles.map((item) => (
            <div
              key={item.id}
              className="news-card"
              onClick={() => onSelectArticle(item)}
            >
              {/* Card Image Wrapper */}
              <div className="card-img-wrapper" style={{ cursor: 'pointer', position: 'relative', height: '240px', paddingTop: 0 }}>
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                />

                {/* Tag Badge (Top Right) */}
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

                {/* Metric Badge (Top Left) */}
                <span style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '0.75rem',
                  zIndex: 3,
                  background: 'rgba(8, 17, 36, 0.85)',
                  border: '1px solid rgba(255, 190, 0, 0.4)',
                  color: '#ffbe00',
                  padding: '2px 8px',
                  borderRadius: '3px',
                  fontSize: '0.72rem',
                  fontWeight: 800
                }}>
                  {item.metric[lang]}
                </span>
              </div>

              {/* Card Content */}
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1.45, marginBottom: '0.75rem', transition: 'color 0.2s ease' }}>
                  {item.title[lang]}
                </h3>

                {/* Footer */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9', marginTop: 'auto' }}>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={12} color="#ffbe00" /> {item.readTime} {t.readingTime}
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
