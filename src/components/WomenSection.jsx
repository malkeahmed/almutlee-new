import React, { useState } from 'react';
import { Heart, Clock, ChevronLeft, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';

export default function WomenSection({ articles, lang, onSelectArticle }) {
  const t = translations[lang];

  // 6 Inspiring Diverse Women & Society Articles (Varied & Thematic Imagery)
  const womenNews = [
    {
      id: "wom-01",
      categoryId: "women",
      tag: { ar: "ريادة وتكنولوجيا", ku: "داهێنان و تەکنەلۆژیا" },
      publishedAt: "2026-08-25 14:30",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "حواء المطلع: رائدات الأعمال يبتكرن حلولاً بيئية وتقنية تقود سوق التكنولوجيا",
        ku: "ژنانی داهێنەر لە کەرتی تەکنەلۆژیا و ژینگە بازاڕی کار دەگۆڕن"
      },
      summary: {
        ar: "استعراض لقصص نجاح ملهمة لنساء قمن بتأسيس مشاريع ناشئة واعدة ذات أثر مجتمعي واقتصادي كبير في العراق والمنطقة.",
        ku: "پێداچوونەوە بە چیرۆکی سەرکەوتنی چەندین ژنی خاوەنکار کە پڕۆژەی گەورەیان دامەزراندووە."
      }
    },
    {
      id: "wom-02",
      categoryId: "women",
      tag: { ar: "صحة وتغذية", ku: "تەندروستی و خۆراک" },
      publishedAt: "2026-08-25 12:15",
      readTime: 3,
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "دليل التوازن الغذائي والصحي للمرأة العاملة لتعزيز النشاط اليومي",
        ku: "ڕێبەری خۆراکی تەندروست بۆ ژنانی کارمەند بۆ پاراستنی وزە و چالاکی"
      },
      summary: {
        ar: "نصائح طبية وتغذوية متقدمة من كبار الاختصاصيين للمحافظة على الصحة النفسية والجسدية وسط ضغوط العمل.",
        ku: "ئامۆژگاری پزیشکی گرنگ بۆ پاراستنی تەندروستی دەروونی و جەستەیی."
      }
    },
    {
      id: "wom-03",
      categoryId: "women",
      tag: { ar: "فنون وتصميم", ku: "هونەر و دیزاین" },
      publishedAt: "2026-08-25 10:40",
      readTime: 5,
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "معرض الفن المعاصر يحتفي بإبداعات التشكيليات العراقیات في بغداد",
        ku: "پێشانگای هونەری هاوچەرخ لە بەغدا پێشوازی لە تابلۆی شێوەکارە ژنەکان دەکات"
      },
      summary: {
        ar: "مشاركات واسعة وأعمال تشكيلية تحاكي التراث العراقي بأسلوب حداثي مبهر يعكس عمق الهوية الوطنية.",
        ku: "بەشداریکردنی بەرفراوانی هونەرمەندان لە پێشانگایەکی گەورەدا."
      }
    },
    {
      id: "wom-04",
      categoryId: "women",
      tag: { ar: "تربية وأسرة", ku: "پەروەردە و خێزان" },
      publishedAt: "2026-08-25 09:20",
      readTime: 3,
      image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "أساليب التربية الإيجابية الحديثة لبناء شخصية الطفل وتعزيز ثقته",
        ku: "شێوازە نوێکانی پەروەردەی ئەرێنی بۆ بەهێزکردنی کەسایەتی منداڵ"
      },
      summary: {
        ar: "استراتيجيات تربوية مبتكرة تسهم في تنمية المهارات العقلية والاجتماعية للأطفال في المراحل العمرية المبكرة.",
        ku: "ستراتیژی نوێی پەروەردەیی بۆ گەشەپێدانی تواناکانی منداڵ."
      }
    },
    {
      id: "wom-05",
      categoryId: "women",
      tag: { ar: "أزياء وموضة", ku: "مۆدە و جوانکاری" },
      publishedAt: "2026-08-25 08:10",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "لمسات التراث الشرقي في تصاميم الأزياء العالمية لموسم الخريف",
        ku: "تێکەڵکردنی مۆدێرن و کەلەپوور لە دیزاینی جلوبەرگی نوێدا"
      },
      summary: {
        ar: "إقبال لافت على الأزياء التي تجمع بين الحشمة والأناقة العصرية المستوحاة من التطريز اليدوي العريق.",
        ku: "دیزاینی نوێی جلوبەرگ بە شێوازێکی سەرنجڕاکێش و سەردەمیانە."
      }
    },
    {
      id: "wom-06",
      categoryId: "women",
      tag: { ar: "علوم وابتكار", ku: "زانست و داهێنان" },
      publishedAt: "2026-08-25 07:00",
      readTime: 4,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
      title: {
        ar: "تكريم باحثات عراقيات لنيلهن جوائز دولية في أبحاث الطاقة النظيفة",
        ku: "ڕێزلێنان لە توێژەرە ژنەکان بۆ بەدەستهێنانی خەڵاتی نێودەوڵەتی لە بواری وزەدا"
      },
      summary: {
        ar: "إشادة أكاديمية واسعة بالإسهامات العلمية الرائدة في مجالات الطاقة المتجددة وحماية البيئة والتنمية المستدامة.",
        ku: "دەستکەوتی زانستی گرنگ لە بواری وزەی پاک و ژینگەدا."
      }
    }
  ];

  return (
    <section id="section-women" className="section-pure-white" style={{ padding: '3.25rem 0' }}>
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
            {/* Golden Heart Icon Badge */}
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
              <Heart size={24} strokeWidth={2.4} fill="#0c1833" />
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1.15, margin: 0 }}>
                {lang === 'ar' ? 'قسم حواء والمجتمع' : 'بەشی ئافرەتان و کۆمەڵگە'}
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
            {lang === 'ar' ? 'عرض جميع أخبار حواء' : 'بینینی هەموو بابەتەکانی ئافرەتان'}
            <ChevronLeft size={17} strokeWidth={3} />
          </button>
        </div>

        {/* 6 Full-Bleed Interactive Magazine Cards Grid (Original 400px Size Preserved) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="grid-3">
          {womenNews.map((item) => (
            <div
              key={item.id}
              className="women-interactive-card"
              style={{
                position: 'relative',
                height: '400px',
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                background: '#0c1833'
              }}
              onClick={() => onSelectArticle(item)}
            >
              {/* Full-bleed Background Image with Hover Zoom */}
              <img
                src={item.image}
                alt={item.title[lang]}
                className="women-card-bg-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />

              {/* Dynamic Bottom Gradient Overlay */}
              <div
                className="women-card-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(12, 24, 51, 0.05) 0%, rgba(12, 24, 51, 0.55) 50%, rgba(12, 24, 51, 0.95) 100%)',
                  transition: 'background 0.35s ease'
                }}
              ></div>

              {/* Top Right Tag Badge (Golden Yellow) */}
              <span style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                zIndex: 3,
                background: '#ffbe00',
                color: '#0c1833',
                padding: '4px 11px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 900,
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                {item.tag[lang]}
              </span>

              {/* Bottom Content Area: Title always visible, Description slides up on hover */}
              <div
                className="women-card-content"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.5rem',
                  zIndex: 3,
                  color: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Title inside the image */}
                <h3 style={{
                  fontSize: '1.18rem',
                  fontWeight: 900,
                  color: '#ffffff',
                  lineHeight: 1.4,
                  marginBottom: '0.45rem',
                  textShadow: '0 2px 10px rgba(0,0,0,0.85)',
                  transition: 'color 0.2s ease'
                }}>
                  {item.title[lang]}
                </h3>

                {/* Description and Action: Hidden initially, smoothly expands and slides up on hover */}
                <div
                  className="women-card-reveal"
                  style={{
                    maxHeight: 0,
                    opacity: 0,
                    transform: 'translateY(18px)',
                    overflow: 'hidden',
                    transition: 'all 0.38s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.65rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                    marginTop: '0.5rem'
                  }}>
                    <span style={{ fontSize: '0.75rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={13} color="#ffbe00" /> {item.readTime} {t.readingTime}
                    </span>
                    <span style={{ fontSize: '0.82rem', color: '#ffbe00', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                      {t.readMore} <ChevronLeft size={16} color="#ffbe00" />
                    </span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
