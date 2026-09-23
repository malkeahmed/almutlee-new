import React, { useState } from 'react';
import { 
  Play, Video, Eye, X, Clock, Calendar, 
  Tv, Film, ChevronRight, ChevronLeft, Sparkles 
} from 'lucide-react';
import { translations } from '../data/translations';

export default function MultimediaSection({ articles, lang }) {
  const t = translations[lang];

  // 7 Rich Video Reports (3 on Right, 1 Big Center, 3 on Left)
  const allVideos = [
    {
      id: "vid-01",
      title: {
        ar: "وثائقي المطلع: حكاية إعادة إعمار شارع الرشيد ومعالم بغداد التراثية",
        ku: "بەڵگەفیلمی المطلع: چیرۆکی نۆژەنکردنەوەی شەقامی ڕەشید و شوێنەوارەکانی بەغدا"
      },
      summary: {
        ar: "جولة ميدانية توثق عودة الحياة إلى أقدم شوارع العاصمة بعد عقود من الإهمال ومراحل ترميم الأبنية التاريخية العريقة.",
        ku: "گەشتێکی مەیدانی تایبەت بۆ تۆمارکردنی قۆناغەکانی نوێکردنەوەی مێژوویی شاری بەغدا."
      },
      duration: "08:45",
      views: "48.2K",
      publishedAt: "2026-08-25 15:30",
      tag: { ar: "وثائقي خاص", ku: "بەڵگەفیلم" },
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: "vid-02",
      title: {
        ar: "تغطية مباشرة: افتتاح أكبر مجمع لتوليد الطاقة الشمسية في جنوب العراق",
        ku: "ڕووماڵی ڕاستەوخۆ: کردنەوەی گەورەترین وێستگەی وزەی خۆر لە باشووری عێراق"
      },
      summary: {
        ar: "نقل حي لوقائع تدشين المشروع الاستراتيجي الذي يوفر مئات الميغاواط من الطاقة النظيفة للشبكة الوطنية.",
        ku: "گواستنەوەی ڕاستەوخۆی دەستپێکردنی پڕۆژەی وزەی پاک."
      },
      duration: "12:20",
      views: "34.7K",
      publishedAt: "2026-08-25 13:00",
      tag: { ar: "تغطية ميدانية", ku: "ڕووماڵی مەیدانی" },
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: "vid-03",
      title: {
        ar: "حوار خاص مع وزير النقل حول تفاصيل مشروع 'طريق التنمية' الدولي",
        ku: "چاوپێکەوتنی تایبەت لەگەڵ وەزیری گواستنەوە دەربارەی پڕۆژەی ڕێگای گەشەپێدان"
      },
      summary: {
        ar: "لقاء حصري يستعرض الجداول الزمنية للربط السككي وأهمية موانئ الفاو في التجارة الإقليمية والعالمية.",
        ku: "دیدارێکی تایبەت دەربارەی نەخشەڕێگای پڕۆژە نێودەوڵەتییەکان."
      },
      duration: "18:10",
      views: "62.1K",
      publishedAt: "2026-08-25 11:15",
      tag: { ar: "حوار خاص", ku: "دیداری تایبەت" },
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: "vid-04",
      title: {
        ar: "كواليس تحضيرات المنتخب الوطني في البصرة لنهائيات آسيا",
        ku: "پشت پەردەی ئامادەکارییەکانی هەڵبژاردەی نیشتمانی لە بەسرە"
      },
      summary: {
        ar: "لقطات حصرية وتصريحات للاعبين والجهاز الفني حول معنويات الفريق قبل خوض اللقاءات المصيرية.",
        ku: "دیمەنی تایبەت لە کەمپی مەشق و ڕاهێنانی یاریزانان."
      },
      duration: "06:15",
      views: "91.5K",
      publishedAt: "2026-08-25 09:40",
      tag: { ar: "رياضة وفيديو", ku: "وەرزش و ڤیدیۆ" },
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: "vid-05",
      title: {
        ar: "جولة حصرية في أروقة المتحف العراقي واكتشافات بابل الأثرية الجديدة",
        ku: "گەشتێکی تایبەت لە مۆزەخانەی عێراقی و دۆزینەوە شوێنەوارییە نوێیەکان"
      },
      summary: {
        ar: "عدسة المطلع توثق القطع الأثرية النادرة المستردة والمكتشفات التي تسلط الضوء على عمق حضارة ما بين النهرين.",
        ku: "تۆمارکردنی دۆزینەوە مێژوویی و شوێنەوارییە نوێیەکان."
      },
      duration: "11:00",
      views: "53.4K",
      publishedAt: "2026-08-25 07:15",
      tag: { ar: "تراث وآثار", ku: "کەلەپوور" },
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: "vid-06",
      title: {
        ar: "ملتقى الاستثمار في أربيل: شراكات واعدة لتمويل المشاريع الصناعية",
        ku: "کۆڕبەندی وەبەرهێنان لە هەولێر: پڕۆژەی نوێ بۆ گەشەپێدانی پیشەسازی"
      },
      summary: {
        ar: "حضور واسع لرجال الأعمال والمستثمرين لبحث سبل تنمية القطاعات الإنتاجية والصناعات المحلية.",
        ku: "بەشداریکردنی وەبەرهێنەران لە کۆڕبەندێکی گەورەدا."
      },
      duration: "07:45",
      views: "19.8K",
      publishedAt: "2026-08-25 06:30",
      tag: { ar: "اقتصاد وأعمال", ku: "ئابووری" },
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
      id: "vid-07",
      title: {
        ar: "تقرير خاص: خطط التحول الرقمي وتحديث البنية التحتية للمستشفيات",
        ku: "ڕاپۆرتی تایبەت: پلانی دیجیتاڵکردن و نوێکردنەوەی نەخۆشخانەکان"
      },
      summary: {
        ar: "إدخال أحدث الأجهزة الطبية وتطبيق السجلات الصحية الإلكترونية لتقديم رعاية صحية متطورة.",
        ku: "بەکارهێنانی سیستەمی نوێی پزیشکی بۆ خزمەتگوزاری هاووڵاتیان."
      },
      duration: "10:15",
      views: "31.2K",
      publishedAt: "2026-08-25 05:45",
      tag: { ar: "صحة وتطوير", ku: "تەندروستی" },
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
      videoEmbedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
    }
  ];

  // Active Selected Video Index (Default: 0 - Center Video)
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlayingModal, setIsPlayingModal] = useState(false);

  const activeVideo = allVideos[activeIdx];

  // Split into Right Side (3 items: 1-3) and Left Side (3 items: 4-6)
  const rightVideos = allVideos.slice(1, 4);
  const leftVideos = allVideos.slice(4, 7);

  return (
    <section id="section-video" className="section-off-white" style={{ 
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
            {/* Golden Film/Video Icon Badge */}
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
              <Video size={24} strokeWidth={2.4} />
            </div>

            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1.15, margin: 0 }}>
                {lang === 'ar' ? 'مكتبة الفيديو وتغطيات المطلع' : 'کتێبخانەی ڤیدیۆ و ڕووماڵی المطلع'}
              </h2>
            </div>
          </div>

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
            {lang === 'ar' ? 'عرض جميع الفيديوهات' : 'بینینی هەموو ڤیدیۆکان'} 
            <ChevronLeft size={17} strokeWidth={3} />
          </button>
        </div>

        {/* 2. Symmetric Tri-Layout: 3 Full Cards Right | 1 Big Master Center | 3 Full Cards Left */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.05fr 1.9fr 1.05fr', 
          gap: '1.35rem',
          alignItems: 'stretch'
        }} className="video-tri-grid">

          {/* RIGHT SIDE: 3 Full-Bleed Video Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="video-side-column">
            {rightVideos.map((item, idx) => {
              const actualIndex = idx + 1;
              const isSelected = activeIdx === actualIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIdx(actualIndex)}
                  className={`full-video-card ${isSelected ? 'active-video-card' : ''}`}
                  style={{
                    position: 'relative',
                    height: '225px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    background: '#040812',
                    border: isSelected ? '2px solid #ffbe00' : '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: isSelected ? '0 0 20px rgba(255, 190, 0, 0.35)' : '0 4px 15px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    flexGrow: 1
                  }}
                >
                  {/* Full Background Video Image */}
                  <img 
                    src={item.image} 
                    alt="" 
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                    className="side-video-img"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  
                  {/* Dark Shade Gradient for Title Readability */}
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(180deg, rgba(4, 8, 18, 0.1) 0%, rgba(4, 8, 18, 0.4) 40%, rgba(4, 8, 18, 0.95) 100%)' 
                  }}></div>

                  {/* Top Right Tag */}
                  <span style={{ 
                    position: 'absolute', 
                    top: '8px', 
                    right: '8px', 
                    background: '#ffbe00', 
                    color: '#0c1833', 
                    fontSize: '0.68rem', 
                    fontWeight: 900, 
                    padding: '2px 7px', 
                    borderRadius: '3px',
                    zIndex: 2,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                  }}>
                    {item.tag[lang]}
                  </span>

                  {/* Bottom Right Duration Badge */}
                  <span style={{ 
                    position: 'absolute', 
                    top: '8px', 
                    left: '8px', 
                    background: 'rgba(0,0,0,0.85)', 
                    color: '#ffffff', 
                    fontSize: '0.68rem', 
                    fontWeight: 800, 
                    padding: '2px 6px', 
                    borderRadius: '3px',
                    zIndex: 2
                  }}>
                    {item.duration}
                  </span>

                  {/* Center Glowing Play Button */}
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
                    <div style={{ 
                      width: '42px', 
                      height: '42px', 
                      borderRadius: '50%', 
                      background: isSelected ? '#ffbe00' : 'rgba(12, 24, 51, 0.85)', 
                      border: '1.5px solid #ffbe00',
                      color: isSelected ? '#0c1833' : '#ffbe00', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
                      transition: 'transform 0.2s'
                    }} className="side-play-icon">
                      <Play size={18} fill={isSelected ? '#0c1833' : '#ffbe00'} style={{ marginRight: '-1px' }} />
                    </div>
                  </div>

                  {/* Title Directly Inside the Bottom of the Video */}
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '10px',
                    right: '10px',
                    zIndex: 2
                  }}>
                    <h4 style={{
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      color: isSelected ? '#ffbe00' : '#ffffff',
                      lineHeight: 1.35,
                      margin: 0,
                      textShadow: '0 2px 8px rgba(0,0,0,0.95)',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {item.title[lang]}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CENTER: Grand Master Video Player */}
          <div 
            style={{
              position: 'relative',
              borderRadius: '6px',
              overflow: 'hidden',
              background: '#040812',
              border: '1.5px solid rgba(255, 190, 0, 0.45)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              minHeight: '705px',
              cursor: 'pointer'
            }}
            onClick={() => setIsPlayingModal(true)}
            className="master-video-card"
          >
            {/* Background High-Res Thumbnail */}
            <img 
              src={activeVideo.image} 
              alt="" 
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s ease'
              }}
              className="master-video-thumb"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop";
              }}
            />

            {/* Deep Studio Gradient Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(4, 8, 18, 0.15) 0%, rgba(4, 8, 18, 0.45) 45%, rgba(4, 8, 18, 0.98) 100%)'
            }}></div>

            {/* Top Right Live / Special Tag */}
            <span style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              zIndex: 3,
              background: '#ffbe00',
              color: '#0c1833',
              padding: '4px 14px',
              borderRadius: '4px',
              fontSize: '0.8rem',
              fontWeight: 900,
              boxShadow: '0 2px 10px rgba(0,0,0,0.4)'
            }}>
              {activeVideo.tag[lang]}
            </span>

            {/* Center Golden Play Button */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div 
                className="master-play-btn"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ffbe00 0%, #e0a300 100%)',
                  color: '#0c1833',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 40px rgba(255, 190, 0, 0.7), 0 4px 18px rgba(0,0,0,0.5)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <Play size={36} fill="#0c1833" style={{ marginRight: '-3px' }} />
              </div>
              <span style={{
                background: 'rgba(4, 8, 18, 0.85)',
                color: '#ffbe00',
                border: '1px solid rgba(255, 190, 0, 0.4)',
                padding: '4px 14px',
                borderRadius: '20px',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.5px'
              }}>
                {lang === 'ar' ? 'تشغيل التقرير' : 'پەخشکردن'} ({activeVideo.duration})
              </span>
            </div>

            {/* Bottom Content Area */}
            <div style={{
              position: 'relative',
              zIndex: 3,
              padding: '1.6rem 1.85rem'
            }}>
              <h3 style={{
                fontSize: '1.45rem',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.35,
                marginBottom: '0.5rem',
                textShadow: '0 2px 8px rgba(0,0,0,0.8)'
              }}>
                {activeVideo.title[lang]}
              </h3>

              <p style={{
                fontSize: '0.88rem',
                color: '#cbd5e1',
                lineHeight: 1.55,
                marginBottom: '0.9rem',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {activeVideo.summary[lang]}
              </p>

              {/* Master Meta Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                fontSize: '0.82rem',
                color: '#94a3b8',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                paddingTop: '0.75rem'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#ffbe00', fontWeight: 800 }}>
                  <Eye size={15} /> {activeVideo.views} {lang === 'ar' ? 'مشاهدة' : 'بینین'}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={14} color="#ffbe00" /> {activeVideo.duration}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={14} /> {activeVideo.publishedAt.split(' ')[0]}
                </span>
              </div>
            </div>

          </div>

          {/* LEFT SIDE: 3 Full-Bleed Video Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="video-side-column">
            {leftVideos.map((item, idx) => {
              const actualIndex = idx + 4;
              const isSelected = activeIdx === actualIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIdx(actualIndex)}
                  className={`full-video-card ${isSelected ? 'active-video-card' : ''}`}
                  style={{
                    position: 'relative',
                    height: '225px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    background: '#040812',
                    border: isSelected ? '2px solid #ffbe00' : '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: isSelected ? '0 0 20px rgba(255, 190, 0, 0.35)' : '0 4px 15px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    flexGrow: 1
                  }}
                >
                  {/* Full Background Video Image */}
                  <img 
                    src={item.image} 
                    alt="" 
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                    className="side-video-img"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  
                  {/* Dark Shade Gradient for Title Readability */}
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(180deg, rgba(4, 8, 18, 0.1) 0%, rgba(4, 8, 18, 0.4) 40%, rgba(4, 8, 18, 0.95) 100%)' 
                  }}></div>

                  {/* Top Right Tag */}
                  <span style={{ 
                    position: 'absolute', 
                    top: '8px', 
                    right: '8px', 
                    background: '#ffbe00', 
                    color: '#0c1833', 
                    fontSize: '0.68rem', 
                    fontWeight: 900, 
                    padding: '2px 7px', 
                    borderRadius: '3px',
                    zIndex: 2,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                  }}>
                    {item.tag[lang]}
                  </span>

                  {/* Bottom Right Duration Badge */}
                  <span style={{ 
                    position: 'absolute', 
                    top: '8px', 
                    left: '8px', 
                    background: 'rgba(0,0,0,0.85)', 
                    color: '#ffffff', 
                    fontSize: '0.68rem', 
                    fontWeight: 800, 
                    padding: '2px 6px', 
                    borderRadius: '3px',
                    zIndex: 2
                  }}>
                    {item.duration}
                  </span>

                  {/* Center Glowing Play Button */}
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
                    <div style={{ 
                      width: '42px', 
                      height: '42px', 
                      borderRadius: '50%', 
                      background: isSelected ? '#ffbe00' : 'rgba(12, 24, 51, 0.85)', 
                      border: '1.5px solid #ffbe00',
                      color: isSelected ? '#0c1833' : '#ffbe00', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
                      transition: 'transform 0.2s'
                    }} className="side-play-icon">
                      <Play size={18} fill={isSelected ? '#0c1833' : '#ffbe00'} style={{ marginRight: '-1px' }} />
                    </div>
                  </div>

                  {/* Title Directly Inside the Bottom of the Video */}
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '10px',
                    right: '10px',
                    zIndex: 2
                  }}>
                    <h4 style={{
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      color: isSelected ? '#ffbe00' : '#ffffff',
                      lineHeight: 1.35,
                      margin: 0,
                      textShadow: '0 2px 8px rgba(0,0,0,0.95)',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {item.title[lang]}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* 3. Fullscreen Cinema Lightbox Modal */}
      {isPlayingModal && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(4, 8, 18, 0.94)',
            backdropFilter: 'blur(12px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setIsPlayingModal(false)}
        >
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '960px',
              background: '#0c1833',
              borderRadius: '8px',
              border: '2px solid #ffbe00',
              overflow: 'hidden',
              boxShadow: '0 25px 70px rgba(0,0,0,0.8)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.9rem 1.25rem',
              background: '#070f20',
              borderBottom: '1px solid rgba(255, 190, 0, 0.3)'
            }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#ffbe00', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Video size={18} /> {activeVideo.title[lang]}
              </span>

              <button 
                onClick={() => setIsPlayingModal(false)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#ffffff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Video Frame */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe 
                src={activeVideo.videoEmbedUrl}
                title={activeVideo.title[lang]}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
