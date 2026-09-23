import React, { useState } from 'react';
import {
  Palette, BookOpen, Film, Music, Sparkles,
  Clock, Eye, ChevronLeft, ArrowUpRight, Award, Feather
} from 'lucide-react';
import { translations } from '../data/translations';

export default function CultureArtsSection({ articles, lang, onSelectArticle }) {
  const t = translations[lang] || translations.ar;
  const [activeIndex, setActiveIndex] = useState(0);

  // 4 Curated Masterpieces of Culture & Fine Arts
  const artGalleries = [
    {
      id: "art-gal-01",
      icon: Palette,
      category: { ar: "🎨 فن تشكيلي ومعارض", ku: "🎨 شێوەکاری و پێشانگا" },
      shortTag: { ar: "فن تشكيلي", ku: "شێوەکاری" },
      title: {
        ar: "استعادة روح جواد سليم: معارض الفن التشكيلي المعاصر تضيء قاعات بغداد بمشاركات عربية ودولية",
        ku: "زیندووکردنەوەی ڕۆحی جەواد سەلیم: پێشانگای شێوەکاری هاوچەرخ هۆڵەکانی بەغدا دەڕازێنێتەوە"
      },
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop",
      readTime: 4,
      publishedAt: "2026-08-25"
    },
    {
      id: "art-gal-02",
      icon: DramaIcon,
      category: { ar: "🎭 المسرح الوطني والدراما", ku: "🎭 شانۆ و دراما" },
      shortTag: { ar: "المسرح الوطني", ku: "شانۆ" },
      title: {
        ar: "مهرجان المسرح التجريبي: عروض ملحمية تمزج بين الموروث السومري وأحدث تقنيات السينوغرافيا المعاصرة",
        ku: "فێستیڤاڵی شانۆی تاقیكاری: بەرهەمە مێژووییەکان کەلەپووری کۆن و هونەری مۆدێرن تێکەڵ دەکەن"
      },
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1200&auto=format&fit=crop",
      readTime: 5,
      publishedAt: "2026-08-25"
    },
    {
      id: "art-gal-03",
      icon: Film,
      category: { ar: "🎬 الفن السابع والسينما", ku: "🎬 سینەما و بەڵگەفیلم" },
      shortTag: { ar: "السينما الدولية", ku: "سینەما" },
      title: {
        ar: "جوائز مهرجان السينما الدولي: أفلام وثائقية وروائية تتألق وتسرد قصص الهوية والإنسان الملهمة",
        ku: "خەڵاتەکانی فێستیڤاڵی نێودەوڵەتی فیلمی بەغدا: بەرهەمە نوێیەکان چیرۆکی مرۆڤایەتی دەگێڕنەوە"
      },
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
      readTime: 6,
      publishedAt: "2026-08-25"
    },
    {
      id: "art-gal-04",
      icon: Music,
      category: { ar: "📜 أدب ومقام عراقي", ku: "📜 ئەدەب و مەقامی عێراقی" },
      shortTag: { ar: "أدب وموسيقى", ku: "مۆسیقا" },
      title: {
        ar: "أمسيات شارع المتنبي والمقام العراقي: حوارية النغم والشعر الفصيح في الملتقى الثقافي البغدادي",
        ku: "شەوانی شەقامی موتەنەبی و مەقامی عێراقی: پەیوەندی هونەر و شیعر لە کۆڕبەندی هەفتانەدا"
      },
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
      readTime: 5,
      publishedAt: "2026-08-25"
    }
  ];

  // Helper custom theater icon
  function DramaIcon({ size = 16, color = "currentColor" }) {
    return <Sparkles size={size} color={color} />;
  }

  return (
    <section id="section-culture-arts" className="section-off-white" style={{
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
            {/* Golden Art Palette Badge */}
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
              <Palette size={24} strokeWidth={2.4} />
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1.15, margin: 0 }}>
                {lang === 'ar' ? 'قسم الثقافة والفنون والأدب' : 'بەشی کولتوور و هونەر و ئەدەب'}
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
            {lang === 'ar' ? 'عرض جميع أعمال الثقافة والفنون' : 'بینینی هەموو بابەتە هونەرییەکان'}
            <ChevronLeft size={17} strokeWidth={3} />
          </button>
        </div>

        {/* 2. Super Clean, Ultra-Smooth Minimalist Art Accordion */}
        <div className="art-accordion-container" style={{
          display: 'flex',
          gap: '1.15rem',
          height: '480px',
          width: '100%',
          position: 'relative'
        }}>
          {artGalleries.map((item, index) => {
            const isExpanded = activeIndex === index;
            const ItemIcon = item.icon;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => onSelectArticle && onSelectArticle(item)}
                className={`art-accordion-panel ${isExpanded ? 'panel-expanded' : 'panel-collapsed'}`}
                style={{
                  flex: isExpanded ? 4.5 : 1,
                  position: 'relative',
                  height: '100%',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: '#040814',
                  border: isExpanded ? '2px solid #ffbe00' : '1px solid rgba(255, 190, 0, 0.15)',
                  boxShadow: isExpanded
                    ? '0 20px 50px rgba(12, 24, 51, 0.3), 0 0 25px rgba(255, 190, 0, 0.25)'
                    : '0 4px 16px rgba(12, 24, 51, 0.08)',
                  transition: 'flex 0.85s cubic-bezier(0.25, 1, 0.35, 1), transform 0.6s cubic-bezier(0.25, 1, 0.35, 1), border-color 0.4s ease, box-shadow 0.4s ease',
                  willChange: 'flex',
                  transform: 'translate3d(0, 0, 0)',
                  contain: 'paint'
                }}
              >
                {/* Full Background Photo */}
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: isExpanded ? 'scale(1.05) translateZ(0)' : 'scale(1.0) translateZ(0)',
                    filter: isExpanded ? 'brightness(0.72)' : 'brightness(0.4)',
                    transition: 'transform 0.95s cubic-bezier(0.25, 1, 0.35, 1), filter 0.7s ease'
                  }}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop";
                  }}
                />

                {/* Dark Vignette Gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: isExpanded
                    ? 'linear-gradient(180deg, rgba(4,8,20,0.08) 0%, rgba(4,8,20,0.4) 40%, rgba(2,5,15,0.96) 100%)'
                    : 'linear-gradient(180deg, rgba(4,8,20,0.2) 0%, rgba(4,8,20,0.9) 100%)',
                  transition: 'background 0.5s ease'
                }}></div>

                {/* Top Badge */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  zIndex: 4
                }}>
                  <span style={{
                    background: '#ffbe00',
                    color: '#0c1833',
                    fontSize: '0.74rem',
                    fontWeight: 900,
                    padding: '3px 10px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    whiteSpace: 'nowrap'
                  }}>
                    <ItemIcon size={12} />
                    {isExpanded ? item.category[lang] : item.shortTag[lang]}
                  </span>
                </div>

                {/* Bottom Overlaid Title (Only the title, clean and bold!) */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: isExpanded ? '1.75rem 1.65rem' : '1.25rem 0.85rem',
                  zIndex: 4,
                  transition: 'all 0.5s ease'
                }}>
                  {isExpanded && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.76rem',
                      color: '#ffbe00',
                      marginBottom: '0.5rem',
                      fontWeight: 800
                    }}>
                      <span>● {item.publishedAt}</span>
                      <span style={{ color: '#94a3b8' }}>•</span>
                      <span>{item.readTime} {lang === 'ar' ? 'دقائق قراءة' : 'خولەک'}</span>
                    </div>
                  )}

                  <h3 style={{
                    fontSize: isExpanded ? '1.4rem' : '0.95rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    lineHeight: 1.38,
                    margin: 0,
                    display: '-webkit-box',
                    WebkitLineClamp: isExpanded ? 3 : 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textShadow: '0 2px 10px rgba(0,0,0,0.95)',
                    transition: 'font-size 0.5s ease'
                  }}>
                    {item.title[lang]}
                  </h3>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
