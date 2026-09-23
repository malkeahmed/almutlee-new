import React, { useState, useEffect, useRef } from 'react';
import {
  Play, Pause, Bookmark, Eye, Clock, Volume2, Sparkles, TrendingUp,
  ChevronLeft, ChevronRight, Share2, Check, Radio, Flame, Zap,
  ShieldCheck, ArrowUpRight, Award, Compass, Newspaper, Layers
} from 'lucide-react';
import { translations } from '../data/translations';

export default function HeroSection({ heroArticle, topArticles, lang, onSelectArticle, onToggleBookmark, bookmarkedIds }) {
  // Top 4 featured master stories
  const featuredStories = [
    heroArticle,
    ...topArticles.filter(a => a.id !== heroArticle?.id && (a.isBreaking || a.isExclusive || a.views?.includes('K')))
  ].filter(Boolean).slice(0, 4);

  const canvasRef = useRef(null);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeSideTab, setActiveSideTab] = useState('highlights');
  const [liveTime, setLiveTime] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const currentHero = featuredStories[activeHeroIndex] || heroArticle;
  const t = translations[lang] || translations.ar;

  // Ultra-Smooth 60fps Canvas Animation Engine (Liquid Optical Fiber Flow)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1));
    let height = (canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      height = canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
    };
    window.addEventListener('resize', handleResize);

    // Masterpiece High-Tech Symmetrical Circuit Constellation Network
    const tracks = [
      // 1. Upper Skyline Horizon Bridge (Symmetrical crown)
      [
        { x: -0.05, y: 0.08 },
        { x: 0.25, y: 0.08 },
        { x: 0.32, y: 0.16 },
        { x: 0.68, y: 0.16 },
        { x: 0.75, y: 0.08 },
        { x: 1.05, y: 0.08 }
      ],
      // 2. Central Editorial Data Bus (Crossing center behind cards)
      [
        { x: 1.05, y: 0.46 },
        { x: 0.78, y: 0.46 },
        { x: 0.70, y: 0.56 },
        { x: 0.30, y: 0.56 },
        { x: 0.22, y: 0.46 },
        { x: -0.05, y: 0.46 }
      ],
      // 3. Lower Horizon Foundation Highway
      [
        { x: -0.05, y: 0.88 },
        { x: 0.20, y: 0.88 },
        { x: 0.28, y: 0.78 },
        { x: 0.72, y: 0.78 },
        { x: 0.80, y: 0.88 },
        { x: 1.05, y: 0.88 }
      ],
      // 4. Left Pillar (Chamfered geometric feeder)
      [
        { x: 0.14, y: -0.05 },
        { x: 0.14, y: 0.32 },
        { x: 0.20, y: 0.40 },
        { x: 0.20, y: 0.72 },
        { x: 0.14, y: 0.80 },
        { x: 0.14, y: 1.05 }
      ],
      // 5. Right Pillar (Chamfered geometric feeder)
      [
        { x: 0.86, y: -0.05 },
        { x: 0.86, y: 0.32 },
        { x: 0.80, y: 0.40 },
        { x: 0.80, y: 0.72 },
        { x: 0.86, y: 0.80 },
        { x: 0.86, y: 1.05 }
      ],
      // 6. Central Hexagonal Core Hub
      [
        { x: 0.50, y: 0.24 },
        { x: 0.58, y: 0.34 },
        { x: 0.58, y: 0.52 },
        { x: 0.50, y: 0.62 },
        { x: 0.42, y: 0.52 },
        { x: 0.42, y: 0.34 },
        { x: 0.50, y: 0.24 }
      ],
      // 7. Left Upper 45° Gateway
      [
        { x: 0.02, y: 0.24 },
        { x: 0.14, y: 0.32 },
        { x: 0.32, y: 0.16 }
      ],
      // 8. Right Upper 45° Gateway
      [
        { x: 0.98, y: 0.24 },
        { x: 0.86, y: 0.32 },
        { x: 0.68, y: 0.16 }
      ]
    ];

    // Compute segments and total length for each track
    const trackData = tracks.map(points => {
      let totalLength = 0;
      const segments = [];
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const len = Math.hypot(dx, dy);
        segments.push({ p1, p2, len, startDist: totalLength });
        totalLength += len;
      }
      return { points, segments, totalLength };
    });

    // Pulses / Photons traveling with varied speeds & luminous comets
    const pulses = [
      { trackIdx: 0, progress: 0.10, speed: 0.0018, length: 0.16 },
      { trackIdx: 0, progress: 0.65, speed: 0.0015, length: 0.14 },
      { trackIdx: 1, progress: 0.25, speed: 0.0020, length: 0.18 },
      { trackIdx: 1, progress: 0.80, speed: 0.0016, length: 0.15 },
      { trackIdx: 2, progress: 0.15, speed: 0.0019, length: 0.17 },
      { trackIdx: 2, progress: 0.70, speed: 0.0022, length: 0.13 },
      { trackIdx: 3, progress: 0.30, speed: 0.0017, length: 0.16 },
      { trackIdx: 4, progress: 0.50, speed: 0.0018, length: 0.16 },
      { trackIdx: 5, progress: 0.05, speed: 0.0014, length: 0.22 },
      { trackIdx: 5, progress: 0.55, speed: 0.0016, length: 0.20 },
      { trackIdx: 6, progress: 0.20, speed: 0.0022, length: 0.15 },
      { trackIdx: 7, progress: 0.60, speed: 0.0022, length: 0.15 }
    ];

    // Micro floating golden sparkles
    const sparkles = Array.from({ length: 22 }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: Math.random() * 1.5 + 0.8,
      speedX: (Math.random() - 0.5) * 0.0002,
      speedY: (Math.random() - 0.5) * 0.0002,
      phase: Math.random() * Math.PI * 2
    }));

    // Helper to get point at distance along track
    const getPointAtDist = (tData, dist) => {
      const clampedDist = Math.max(0, Math.min(tData.totalLength, dist));
      for (const seg of tData.segments) {
        if (clampedDist >= seg.startDist && clampedDist <= seg.startDist + seg.len) {
          const t = seg.len === 0 ? 0 : (clampedDist - seg.startDist) / seg.len;
          return {
            x: (seg.p1.x + (seg.p2.x - seg.p1.x) * t) * width,
            y: (seg.p1.y + (seg.p2.y - seg.p1.y) * t) * height
          };
        }
      }
      const last = tData.points[tData.points.length - 1];
      return { x: last.x * width, y: last.y * height };
    };

    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      // 1. Draw delicate architectural circuit tracks (Subtle, soft & elegant)
      ctx.lineWidth = Math.max(0.7, (window.devicePixelRatio || 1) * 0.65);
      ctx.strokeStyle = isDark ? 'rgba(255, 190, 0, 0.16)' : 'rgba(255, 190, 0, 0.08)';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      trackData.forEach((tData, idx) => {
        ctx.beginPath();
        if (idx === 6 || idx === 7) {
          ctx.setLineDash([3, 5]);
        } else {
          ctx.setLineDash([]);
        }
        tData.points.forEach((pt, i) => {
          const px = pt.x * width;
          const py = pt.y * height;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // 2. Draw junction nodes with delicate diamond cores & soft pulsing halo
      trackData.forEach((tData) => {
        tData.points.forEach((pt, i) => {
          if (i > 0 && i < tData.points.length - 1) {
            const px = pt.x * width;
            const py = pt.y * height;
            const pulseScale = Math.sin(time * 1.5 + px + py) * 0.5 + 0.5;

            // Outer glowing concentric ring (Soft opacity)
            ctx.beginPath();
            ctx.arc(px, py, 3.5 + pulseScale * 2, 0, Math.PI * 2);
            ctx.strokeStyle = isDark 
              ? `rgba(255, 190, 0, ${0.18 + pulseScale * 0.18})`
              : `rgba(255, 190, 0, ${0.10 + pulseScale * 0.12})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();

            // Inner diamond node core
            ctx.beginPath();
            ctx.moveTo(px, py - 2.2);
            ctx.lineTo(px + 2.2, py);
            ctx.lineTo(px, py + 2.2);
            ctx.lineTo(px - 2.2, py);
            ctx.closePath();
            ctx.fillStyle = isDark ? 'rgba(255, 190, 0, 0.75)' : 'rgba(255, 190, 0, 0.55)';
            if (isDark) {
              ctx.shadowColor = '#ffbe00';
              ctx.shadowBlur = 6;
            }
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        });
      });

      // 3. Draw ultra-smooth subtle flowing energy pulses
      pulses.forEach(pulse => {
        pulse.progress += pulse.speed;
        if (pulse.progress > 1.2) {
          pulse.progress = -0.2;
        }

        const tData = trackData[pulse.trackIdx];
        const headDist = pulse.progress * tData.totalLength;
        const tailDist = (pulse.progress - pulse.length) * tData.totalLength;

        const sampleCount = 16;
        const step = (headDist - tailDist) / sampleCount;

        for (let i = 0; i < sampleCount; i++) {
          const d1 = tailDist + i * step;
          const d2 = tailDist + (i + 1) * step;
          if (d2 <= 0 || d1 >= tData.totalLength) continue;

          const pA = getPointAtDist(tData, d1);
          const pB = getPointAtDist(tData, d2);

          const alpha = (i / sampleCount) * (isDark ? 0.55 : 0.38);
          ctx.beginPath();
          ctx.moveTo(pA.x, pA.y);
          ctx.lineTo(pB.x, pB.y);
          ctx.strokeStyle = `rgba(255, 190, 0, ${alpha})`;
          ctx.lineWidth = 1.2 + (i / sampleCount) * 0.8;
          ctx.stroke();
        }

        // Delicate glowing laser photon head
        if (headDist >= 0 && headDist <= tData.totalLength) {
          const headPt = getPointAtDist(tData, headDist);
          ctx.beginPath();
          ctx.arc(headPt.x, headPt.y, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.shadowColor = '#ffbe00';
          ctx.shadowBlur = isDark ? 8 : 4;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // 4. Subtle floating micro sparkles
      sparkles.forEach(sp => {
        sp.x += sp.speedX;
        sp.y += sp.speedY;
        if (sp.x < 0) sp.x = 1;
        if (sp.x > 1) sp.x = 0;
        if (sp.y < 0) sp.y = 1;
        if (sp.y > 1) sp.y = 0;

        const pulse = Math.sin(time * 1.5 + sp.phase) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(sp.x * width, sp.y * height, sp.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 190, 0, ${0.2 + pulse * 0.6})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Auto-rotate hero story every 5 seconds (pauses when user hovers over card)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % featuredStories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, featuredStories.length]);

  // Live Baghdad Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setLiveTime(`${hours}:${minutes}:${seconds}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!currentHero) return null;

  const isBookmarked = bookmarkedIds.includes(currentHero.id);

  const handleShare = (e) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  const handleNextHero = () => {
    setActiveHeroIndex((prev) => (prev + 1) % featuredStories.length);
    setIsPlayingAudio(false);
  };

  const handlePrevHero = () => {
    setActiveHeroIndex((prev) => (prev - 1 + featuredStories.length) % featuredStories.length);
    setIsPlayingAudio(false);
  };

  // Filter side list articles
  const getSideArticles = () => {
    if (activeSideTab === 'mostRead') {
      return [...topArticles].sort((a, b) => {
        const vA = parseFloat(a.views) || 0;
        const vB = parseFloat(b.views) || 0;
        return vB - vA;
      }).slice(0, 4);
    }
    if (activeSideTab === 'exclusive') {
      const exclusives = topArticles.filter(a => a.isExclusive || a.categoryId === 'exclusive');
      return exclusives.length >= 3 ? exclusives.slice(0, 4) : topArticles.slice(1, 5);
    }
    return topArticles.filter(a => a.id !== currentHero.id).slice(0, 4);
  };

  const sideArticles = getSideArticles();

  return (
    <section className="hero-wrapper">
      {/* Ultra-Smooth 60fps Living Golden Circuit & Fiber Canvas */}
      <canvas ref={canvasRef} className="golden-circuit-canvas" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* 1. TOP HEADER STATUS BAR (Delicate, Ultra-Refined & Executive on White Gold) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.4rem',
          paddingBottom: '0.9rem',
          borderBottom: '1px solid rgba(255, 190, 0, 0.25)',
          position: 'relative',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Right: Refined Section Title with Gold Line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '4px',
              height: '24px',
              borderRadius: '2px',
              background: 'linear-gradient(180deg, #ffbe00 0%, #d49b00 100%)',
              boxShadow: '0 0 10px rgba(255, 190, 0, 0.6)'
            }}></div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <h2 style={{
                fontSize: '1.45rem',
                fontWeight: 900,
                color: '#0f172a',
                letterSpacing: '-0.3px',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                {lang === 'ar' ? 'التغطية الخاصة والخبر الرئيس' : 'ڕووماڵی تایبەت و هەواڵی سەرەکی'}
              </h2>
            </div>
          </div>

          {/* Left: Clean Minimal Baghdad Clock Box (Square Corners) */}
          <div className="hero-baghdad-clock-pill">
            <Clock size={14} color="#ffbe00" />
            <span className="hero-baghdad-time">
              {liveTime || '14:30:00'}
            </span>
            <span className="hero-baghdad-label">
              {lang === 'ar' ? 'بتوقيت بغداد' : 'بەکاتی بەغدا'}
            </span>
          </div>
        </div>

        {/* 2. HERO MAIN GRID (8 Cols Split Magazine Hero + 4 Cols Side Deck) */}
        <div className="hero-grid-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>

          {/* MAIN HERO: SPLIT HORIZONTAL MAGAZINE LAYOUT (8 Columns) */}
          <div style={{ gridColumn: 'span 8', minWidth: 0 }} className="hero-main-col">
            <article
              className="hero-split-card"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >

              {/* Media Column (Left in LTR, Right in RTL) */}
              <div
                className="hero-split-media"
                onClick={() => onSelectArticle(currentHero)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={currentHero.image}
                  alt={currentHero.title[lang]}
                  loading="eager"
                  key={currentHero.id}
                />

                {/* Cinematic Vignette */}
                <div className="hero-split-overlay"></div>

                {/* Floating Badges on Image */}
                <div style={{
                  position: 'absolute',
                  top: '1.1rem',
                  right: '1.1rem',
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                  zIndex: 3
                }}>
                  {currentHero.isBreaking && (
                    <span className="badge-live" style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem', gap: '0.4rem', boxShadow: '0 4px 15px rgba(239, 68, 68, 0.4)' }}>
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'white' }}></span>
                      {t.breaking}
                    </span>
                  )}

                  {currentHero.isExclusive && (
                    <span className="badge-gold" style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem', gap: '0.4rem' }}>
                      <Sparkles size={13} />
                      {t.exclusiveBadge}
                    </span>
                  )}
                </div>

                {/* Bottom Story Carousel Navigation Bar on Image */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(8, 16, 36, 0.85)',
                  backdropFilter: 'blur(12px)',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  zIndex: 4
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontSize: '0.74rem', color: 'var(--color-secondary)', fontWeight: 800 }}>
                      قصة {activeHeroIndex + 1} من {featuredStories.length}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginRight: '0.4rem' }}>
                      {featuredStories.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); setActiveHeroIndex(idx); }}
                          style={{
                            width: activeHeroIndex === idx ? '18px' : '6px',
                            height: '6px',
                            borderRadius: '3px',
                            background: activeHeroIndex === idx ? 'var(--color-secondary)' : 'rgba(255, 255, 255, 0.3)',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.25s ease'
                          }}
                          title={`الخبر ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <button
                      onClick={(e) => { e.stopPropagation(); handlePrevHero(); }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: 'none',
                        color: 'white',
                        width: '28px',
                        height: '28px',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                      title="السابق"
                    >
                      <ChevronRight size={16} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleNextHero(); }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: 'none',
                        color: 'white',
                        width: '28px',
                        height: '28px',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                      title="التالي"
                    >
                      <ChevronLeft size={16} />
                    </button>
                  </div>
                </div>

              </div>

              {/* Editorial Content Column */}
              <div className="hero-split-content">

                {/* 1. Category Tag & Status Bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{
                    fontSize: '0.78rem',
                    color: 'var(--color-secondary)',
                    fontWeight: 900,
                    background: 'rgba(255, 190, 0, 0.12)',
                    border: '1px solid rgba(255, 190, 0, 0.35)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '4px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}>
                    <Zap size={13} />
                    <span>{lang === 'ar' ? 'الشأن السياسي والتنموي' : 'سیاسەت'}</span>
                  </span>

                  <span style={{ fontSize: '0.76rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Flame size={13} color="var(--color-secondary)" />
                    {lang === 'ar' ? 'تغطية أولى وحصرية' : 'ڕووماڵی یەکەم'}
                  </span>
                </div>

                {/* 2. Article Headline */}
                <h1
                  onClick={() => onSelectArticle(currentHero)}
                  style={{
                    fontSize: '1.65rem',
                    fontWeight: 900,
                    lineHeight: 1.38,
                    color: '#ffffff',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    margin: '0.2rem 0',
                    textShadow: '0 2px 8px rgba(0,0,0,0.5)'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--color-secondary)'}
                  onMouseLeave={(e) => e.target.style.color = '#ffffff'}
                >
                  {currentHero.title[lang]}
                </h1>

                {/* Action Suite Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>

                  {/* Read More Primary Button */}
                  <button
                    onClick={() => onSelectArticle(currentHero)}
                    style={{
                      flex: 1,
                      minWidth: '160px',
                      background: 'linear-gradient(135deg, #ffbe00 0%, #e0a700 100%)',
                      color: '#070e1c',
                      borderRadius: '4px',
                      padding: '0.62rem 1.25rem',
                      fontWeight: 900,
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.45rem',
                      boxShadow: '0 4px 15px rgba(255, 190, 0, 0.35)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{lang === 'ar' ? 'اقرأ التغطية الكاملة' : 'ڕووماڵی تەواو'}</span>
                    <ChevronLeft size={18} />
                  </button>

                  {/* Share Button */}
                  <button
                    onClick={handleShare}
                    style={{
                      background: copiedLink ? '#10b981' : 'rgba(255, 255, 255, 0.06)',
                      color: copiedLink ? '#ffffff' : '#e2e8f0',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '4px',
                      padding: '0.62rem 1.15rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {copiedLink ? <Check size={16} /> : <Share2 size={16} />}
                    <span>{copiedLink ? (lang === 'ar' ? 'تم النسخ!' : 'کۆپی کرا!') : t.share}</span>
                  </button>

                </div>

              </div>

            </article>
          </div>

          {/* 3. SIDE BROADCAST RADAR (4 COLUMNS) */}
          <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', minWidth: 0 }} className="hero-side-col">
            <div className="hero-side-container">

              {/* Header with Switcher Tabs */}
              <div style={{ marginBottom: '0.85rem', borderBottom: '1px solid rgba(255, 190, 0, 0.25)', paddingBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 900,
                    color: 'var(--color-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    margin: 0
                  }}>
                    <TrendingUp size={19} />
                    {lang === 'ar' ? 'رادار المتابعات الإخبارية' : 'ڕاداری هەواڵەکان'}
                  </h3>
                  <span style={{
                    fontSize: '0.72rem',
                    color: '#ffffff',
                    background: 'rgba(255, 190, 0, 0.22)',
                    border: '1px solid rgba(255, 190, 0, 0.45)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px',
                    fontWeight: 900
                  }}>
                    المطلع LIVE
                  </span>
                </div>

                {/* Sub Filter Tabs */}
                <div style={{ display: 'flex', gap: '0.35rem', background: 'rgba(5, 10, 24, 0.8)', padding: '0.25rem', borderRadius: '5px' }}>
                  <button
                    onClick={() => setActiveSideTab('highlights')}
                    style={{
                      flex: 1,
                      padding: '0.38rem 0.45rem',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      borderRadius: '3px',
                      color: activeSideTab === 'highlights' ? '#070e1c' : '#cbd5e1',
                      background: activeSideTab === 'highlights' ? 'var(--color-secondary)' : 'transparent',
                      transition: 'all 0.2s ease',
                      boxShadow: activeSideTab === 'highlights' ? '0 2px 8px rgba(255, 190, 0, 0.3)' : 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {lang === 'ar' ? 'المختارات' : 'هەڵبژێردراو'}
                  </button>
                  <button
                    onClick={() => setActiveSideTab('mostRead')}
                    style={{
                      flex: 1,
                      padding: '0.38rem 0.45rem',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      borderRadius: '3px',
                      color: activeSideTab === 'mostRead' ? '#070e1c' : '#cbd5e1',
                      background: activeSideTab === 'mostRead' ? 'var(--color-secondary)' : 'transparent',
                      transition: 'all 0.2s ease',
                      boxShadow: activeSideTab === 'mostRead' ? '0 2px 8px rgba(255, 190, 0, 0.3)' : 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {lang === 'ar' ? 'الأكثر قراءة' : 'پڕخوێنەرترین'}
                  </button>
                  <button
                    onClick={() => setActiveSideTab('exclusive')}
                    style={{
                      flex: 1,
                      padding: '0.38rem 0.45rem',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      borderRadius: '3px',
                      color: activeSideTab === 'exclusive' ? '#070e1c' : '#cbd5e1',
                      background: activeSideTab === 'exclusive' ? 'var(--color-secondary)' : 'transparent',
                      transition: 'all 0.2s ease',
                      boxShadow: activeSideTab === 'exclusive' ? '0 2px 8px rgba(255, 190, 0, 0.3)' : 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {lang === 'ar' ? 'حصريات' : 'تایبەتەکان'}
                  </button>
                </div>
              </div>

              {/* Story Items List with HD Thumbnails */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
                {sideArticles.map((art, idx) => (
                  <div
                    key={art.id || idx}
                    onClick={() => onSelectArticle(art)}
                    className="hero-side-item"
                  >
                    {/* Index Number */}
                    <span className="hero-side-num">
                      0{idx + 1}
                    </span>

                    {/* Image Thumbnail */}
                    <div className="hero-side-thumb">
                      <img
                        src={art.image || 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=300&auto=format&fit=crop'}
                        alt={art.title[lang]}
                        loading="lazy"
                      />
                      <div className="hero-side-thumb-overlay"></div>

                      {art.isExclusive && (
                        <span style={{
                          position: 'absolute',
                          bottom: '3px',
                          right: '3px',
                          background: 'var(--color-secondary)',
                          color: '#070e1c',
                          fontSize: '0.62rem',
                          fontWeight: 900,
                          padding: '1px 4px',
                          borderRadius: '2px',
                          lineHeight: 1.2
                        }}>
                          خاص
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', flexGrow: 1, minWidth: 0 }}>

                      {/* Meta */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                        <span style={{
                          fontSize: '0.72rem',
                          color: art.isExclusive ? 'var(--color-secondary)' : '#93c5fd',
                          fontWeight: 800,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}>
                          {art.isExclusive ? (
                            <>
                              <Sparkles size={11} />
                              {t.exclusiveBadge}
                            </>
                          ) : (
                            art.publishedAt?.split(' ')[1] || (lang === 'ar' ? 'تغطية مستمرة' : 'ڕووماڵ')
                          )}
                        </span>

                        <span style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Clock size={11} /> {art.readTime} {t.readingTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 style={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: '#f8fafc',
                        lineHeight: 1.4,
                        margin: 0,
                        transition: 'color 0.2s ease',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {art.title[lang]}
                      </h4>

                      {/* Views & Link */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.15rem' }}>
                        <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Eye size={11} /> {art.views} {t.views}
                        </span>

                        <span style={{ fontSize: '0.72rem', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', gap: '0.2rem', fontWeight: 800 }}>
                          <span>{lang === 'ar' ? 'تفاصيل' : 'وردەکاری'}</span>
                          <ArrowUpRight size={13} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quick Status Ribbon */}
              <div style={{
                marginTop: '1rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
                color: '#cbd5e1'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
                  <span>{lang === 'ar' ? 'تحديث تلقائي مستمر' : 'نوێکردنەوەی خۆکار'}</span>
                </div>
                <span style={{ color: 'var(--color-secondary)', fontWeight: 800 }}>
                  {lang === 'ar' ? '٣٤ مراسلاً ميدانياً' : '٣٤ پەیامنێر'}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
