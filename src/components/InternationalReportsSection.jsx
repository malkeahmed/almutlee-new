import React from 'react';
import {
  Globe2, Clock, Eye, ChevronLeft, ArrowUpRight,
  FileText, ShieldCheck, Compass, Sparkles, BookOpen, Layers
} from 'lucide-react';
import { translations } from '../data/translations';

export default function InternationalReportsSection({ articles, lang, onSelectArticle }) {
  const t = translations[lang] || translations.ar;

  // 4 Curated Deep-Dive Arab & International Strategic Reports
  const reportsList = [
    {
      id: "report-01",
      tag: { ar: "تحليل استراتيجي", ku: "شیکاری ستراتیژی" },
      region: { ar: "ممرات الشرق الأوسط", ku: "ڕۆژهەڵاتی ناوەڕاست" },
      bullet: { ar: "طريق التنمية وموانئ الفاو", ku: "ڕێگای گەشەپێدان و بەندەرەکان" },
      title: {
        ar: "إعادة رسم مسارات الملاحة والتجارة الإقليمية: خريطة الممرات اللوجستية وتأثيرها على موانئ المنطقة",
        ku: "داڕشتنەوەی ڕێڕەوەکانی بازرگانی و گەشتە دەریاییەکان: نەخشەی نوێی لۆجستی لە ناوچەکەدا"
      },
      summary: {
        ar: "دراسة معمقة ترصد التحولات الجيواقتصادية في سلاسل الإمداد العالمية وتنامي دور العراق كحلقة وصل محورية بين الخليج وأوروبا.",
        ku: "لێکۆڵینەوەیەکی ورد دەربارەی گرنگی ڕێگای گەشەپێدان و کاریگەری بەندەرەکان لە ئابووری جیهانیدا."
      },
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1000&auto=format&fit=crop",
      readTime: 6,
      views: "29.4K",
      publishedAt: "2026-08-25 15:00"
    },
    {
      id: "report-02",
      tag: { ar: "تقرير الطاقة الدولي", ku: "ڕاپۆرتی وزەی نێودەوڵەتی" },
      region: { ar: "الأسواق الأوروبية", ku: "ئەوروپا و جیهان" },
      bullet: { ar: "عقود الغاز والهيدروجين الأخضر", ku: "گرێبەستەکانی گازی سروشتی" },
      title: {
        ar: "تحولات أسواق الطاقة العالمية: معاهدات الغاز والتحول نحو الهيدروجين الأخضر قبل حلول الشتاء",
        ku: "گۆڕانکارییەکانی بازاڕی وزەی جیهانی: گرێبەستەکانی گازی سروشتی بەر لە وەرزی زستان"
      },
      summary: {
        ar: "قراءة تحليلية في استراتيجيات تنويع مصادر الطاقة، وتأثير الصفقات طويلة الأجل على استقرار الأسعار والصناعات الثقيلة.",
        ku: "خوێندنەوە بۆ هاوسەنگییە نوێیەکانی وزە و کاریگەری بڕیارە نێودەوڵەتییەکان لەسەر بازاڕ."
      },
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
      readTime: 8,
      views: "41.8K",
      publishedAt: "2026-08-25 13:20"
    },
    {
      id: "report-03",
      tag: { ar: "ملف إقليمي مشترك", ku: "دۆسیەی هاوبەشی ناوچەیی" },
      region: { ar: "العراق والخليج", ku: "عێراق و کەنداو" },
      bullet: { ar: "الربط الكهربائي والتكامل الصناعي", ku: "پەیوەندی وزە و پیشەسازی" },
      title: {
        ar: "آفاق الربط الكهربائي والاستثمارات المشتركة: شراكات استراتيجية لتعزيز النمو الصناعي والأمن الغذائي",
        ku: "ئاسۆی پەیوەندی وزە و وەبەرهێنانی هاوبەش: پڕۆژەی نوێ بۆ گەشەپێدانی پیشەسازی و ئاسایشی خۆراک"
      },
      summary: {
        ar: "تفاصيل المبادرات التنموية لضخ استثمارات كبرى في البنى التحتية للمحافظات والمدن الصناعية الذكية لتعزيز الاستدامة.",
        ku: "وردەکاری ڕێککەوتننامە نوێیەکان بۆ سەرپەرشتیکردنی پڕۆژە گەورەکانی ژێرخان و پیشەسازی."
      },
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop",
      readTime: 5,
      views: "35.2K",
      publishedAt: "2026-08-25 11:45"
    },
    {
      id: "report-04",
      tag: { ar: "رؤية جيوسياسية", ku: "ڕوانگەی جیۆپۆلەتیکی" },
      region: { ar: "النظام المالي العالمي", ku: "سیستەمی دارایی جیهانی" },
      bullet: { ar: "صعود التحالفات الاقتصادية", ku: "هاوپەیمانییە ئابوورییە نوێیەکان" },
      title: {
        ar: "سباق التوازنات الكبرى: التحالفات الاقتصادية الصاعدة وصياغة نظام مالي متعدد الأقطاب",
        ku: "پێشبڕکێی هاوسەنگییە گەورەکان: هاوپەیمانییە ئابوورییە نوێیەکان و سیستەمی فرە جەمسەری"
      },
      summary: {
        ar: "رصد لمسارات إعادة تشكيل المنظومة المالية الدولية وتوسيع نطاق التبادل التجاري بالعملات الوطنية بين الاقتصادات الناشئة.",
        ku: "شیکردنەوەی گفتوگۆ نێودەوڵەتییەکان دەربارەی ئابووری جیهانی و هاوپەیمانییە نوێیەکان."
      },
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
      readTime: 7,
      views: "53.6K",
      publishedAt: "2026-08-25 09:10"
    },
    {
      id: "report-05",
      tag: { ar: "ملف بيئي استراتيجي", ku: "دۆسیەی ژینگەیی" },
      region: { ar: "حوض الرافدين", ku: "حەوزی دیجلە و فورات" },
      bullet: { ar: "السدود وإدارة الموارد المائية", ku: "بەنداوی ئاو و بەڕێوەبردن" },
      title: {
        ar: "أمن المياه والتغير المناخي: خطط واستراتيجيات حوض دجلة والفرات لمواجهة تحديات الجفاف المستقبلي",
        ku: "ئاسایشی ئاو و گۆڕانی کەشوهەوا: پلانە ستراتیژییەکانی بەنداوی دیجلە و فورات بۆ ڕووبەڕووبوونەوەی وشکەساڵی"
      },
      summary: {
        ar: "دراسة شاملة للمشاريع الاستراتيجية لحصاد مياه الأمطار وتطبيق تقنيات الري الحديث لضمان الأمن المائي والغذائي للبلاد.",
        ku: "لێکۆڵینەوەیەکی تەواو لەسەر پڕۆژەی کۆکردنەوەی ئاوی باران و ئاودێری مۆدێرن."
      },
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1000&auto=format&fit=crop",
      readTime: 5,
      views: "38.2K",
      publishedAt: "2026-08-25 08:30"
    },
    {
      id: "report-06",
      tag: { ar: "نقل ولوجستيات", ku: "گواستنەوە و لۆجستی" },
      region: { ar: "الملاحة الجوية الدولية", ku: "فڕۆکەوانی مەدەنی" },
      bullet: { ar: "ممرات الترانزيت واختصار المسارات", ku: "ڕێڕەوی ترانزێت" },
      title: {
        ar: "تحديث الأجواء والملاحة الجوية: افتتاح ممرات طيران دولية جديدة تعزز حركة الترانزيت عبر بغداد",
        ku: "نوێکردنەوەی گەشتە ئاسمانییەکان: کردنەوەی ڕێڕەوی نوێی نێودەوڵەتی لە عێراق"
      },
      summary: {
        ar: "إجراءات تطوير الرادارات ومنظومات المراقبة الجوية لاستيعاب مئات الرحلات العابرة يومياً وتوفير ملايين الدولارات لشركات الطيران العالمية.",
        ku: "پەرەپێدانی سیستەمی ڕاداری نوێ بۆ کۆنترۆڵکردنی ئاسمانی بەغدا."
      },
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop",
      readTime: 6,
      views: "26.7K",
      publishedAt: "2026-08-25 07:15"
    },
    {
      id: "report-07",
      tag: { ar: "استثمار وصناعة", ku: "وەبەرهێنان و پیشەسازی" },
      region: { ar: "المدن الاقتصادية الجديدة", ku: "شارە ئابوورییە نوێیەکان" },
      bullet: { ar: "توطين التكنولوجيا وسلاسل التوريد", ku: "پیشەسازی ناوخۆیی" },
      title: {
        ar: "المدن الصناعية الذكية: استقطاب الشركات العالمية لتوطين الصناعات التحويلية والتكنولوجية",
        ku: "شارە پیشەسازییە زیرەکەکان: ڕاکێشانی کۆمپانیا جیهانییەکان بۆ بەرهەمهێنانی ناوخۆیی"
      },
      summary: {
        ar: "تقديم تسهيلات وإعفاءات جمركية للمستثمرين في المجمعات الصناعية المتطورة لزيادة الإنتاج المحلي وخلق فرص عمل واعدة للكوادر الشابة.",
        ku: "دابینکردنی ئاسانکاری دارایی بۆ وەبەرهێنەران لە ناوچە پیشەسازییەکاندا."
      },
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
      readTime: 7,
      views: "49.1K",
      publishedAt: "2026-08-25 06:00"
    },
    {
      id: "report-08",
      tag: { ar: "شؤون دبلوماسية", ku: "دیپلۆماسی" },
      region: { ar: "مؤتمرات بغداد الإقليمية", ku: "کۆڕبەندی ناوچەیی" },
      bullet: { ar: "بناء جسور الثقة والشراكات الدائمة", ku: "دروستکردنی هاوبەشی" },
      title: {
        ar: "الدبلوماسية الإقليمية الفاعلة: بغداد تعزز موقعها كمنصة رئيسية للحوار وتسوية النزاعات الإقليمية",
        ku: "دیپلۆماسیەتی ناوچەیی: بەغدا ڕۆڵی سەرەکی دەگێڕێت لە گفتوگۆ و چارەسەری ئاشتیانەدا"
      },
      summary: {
        ar: "قراءة في مبادرات الوساطة العراقية الناجحة التي ساهمت في تقريب وجهات النظر وبناء تفاهمات أمنية واقتصادية متينة بين دول الجوار.",
        ku: "شیکردنەوەی سەرکەوتنەکانی دیپلۆماسیەتی عێراق لە دروستکردنی ئاشتیدا."
      },
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
      readTime: 8,
      views: "62.5K",
      publishedAt: "2026-08-25 04:45"
    }
  ];

  return (
    <section id="section-intl-reports" className="section-off-white" style={{
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
            {/* Golden Globe/Report Icon Badge */}
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
              <Globe2 size={24} strokeWidth={2.4} />
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1.15, margin: 0 }}>
                {lang === 'ar' ? 'قسم التقارير العربية والدولية' : 'بەشی ڕاپۆرتە عەرەبی و نێودەوڵەتییەکان'}
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
            {lang === 'ar' ? 'عرض جميع التقارير' : 'بینینی هەموو ڕاپۆرتەکان'}
            <ChevronLeft size={17} strokeWidth={3} />
          </button>
        </div>

        {/* 2. Bespoke Luxury Reports Grid with Next-Gen Interactive Curtain */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.35rem'
        }} className="pro-reports-grid">
          {reportsList.map((item) => (
            <article
              key={item.id}
              onClick={() => onSelectArticle && onSelectArticle(item)}
              className="pro-report-card"
            >
              {/* Full Background Photography */}
              <div className="pro-report-image-holder">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="pro-report-image"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                <div className="pro-report-dark-vignette"></div>
              </div>

              {/* Top Luxury Floating Badges */}
              <div className="pro-report-top-bar">
                <span className="pro-report-category-badge">
                  {item.tag[lang]}
                </span>
                <span className="pro-report-time-badge">
                  <Clock size={11} color="#ffbe00" /> {item.readTime} {lang === 'ar' ? 'دقائق' : 'خولەک'}
                </span>
              </div>

              {/* Default Ambient Bottom Meta (Visible when not hovering) */}
              <div className="pro-report-default-info">
                <div className="pro-report-region-row">
                  <span className="pro-report-dot"></span>
                  <span className="pro-report-region-text">{item.region[lang]}</span>
                  <span className="pro-report-divider">•</span>
                  <span className="pro-report-date-text">{item.publishedAt.split(' ')[0]}</span>
                </div>
                <h3 className="pro-report-main-title">
                  {item.title[lang]}
                </h3>
              </div>

              {/* Interactive Sliding Frosted Glass Curtain (کشویی جادویی) */}
              <div className="pro-report-curtain">
                <div className="pro-curtain-glow-line"></div>

                <div className="pro-curtain-content">
                  {/* Category & Region Pill */}
                  <div className="pro-curtain-meta">
                    <span className="pro-curtain-tag">{item.tag[lang]}</span>
                    <span className="pro-curtain-region">{item.region[lang]}</span>
                  </div>

                  {/* Expanded Title */}
                  <h3 className="pro-curtain-title">
                    {item.title[lang]}
                  </h3>

                  {/* Strategic Bullet / Focus Point */}
                  <div className="pro-curtain-focus">
                    <Sparkles size={13} color="#ffbe00" />
                    <span>{item.bullet[lang]}</span>
                  </div>

                  {/* Summary Paragraph */}
                  <p className="pro-curtain-summary">
                    {item.summary[lang]}
                  </p>

                  {/* Premium Action CTA Button */}
                  <div className="pro-curtain-btn">
                    <span>{lang === 'ar' ? 'قراءة التقرير الاستراتيجي' : 'خوێندنەوەی تەواوی ڕاپۆرت'}</span>
                    <ChevronLeft size={16} strokeWidth={3} className="pro-btn-arrow" />
                  </div>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
