import React, { useRef } from 'react';
import { 
  Home, Flame, Landmark, Globe2, Shield, Sparkles, TrendingUp, 
  Trophy, Heart, Layers, Video, MessageSquare, Phone, Users, 
  Swords, ChevronLeft, ChevronRight, Compass
} from 'lucide-react';
import { translations } from '../data/translations';

export default function SubNavbarTabs({ currentCategory = 'home', onSelectCategory, lang = 'ar' }) {
  const t = translations[lang] || translations.ar;
  const scrollContainerRef = useRef(null);

  // Icon mapping for rich modern presentation
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'home': return <Home size={15} />;
      case 'local': return <Compass size={15} />;
      case 'politics': return <Landmark size={15} />;
      case 'arab_intl': return <Globe2 size={15} />;
      case 'security': return <Shield size={15} />;
      case 'exclusive': return <Sparkles size={15} />;
      case 'economy': return <TrendingUp size={15} />;
      case 'sports': return <Trophy size={15} />;
      case 'women': return <Heart size={15} />;
      case 'variety': return <Layers size={15} />;
      case 'opinions': return <MessageSquare size={15} />;
      case 'video': return <Video size={15} />;
      case 'conflict': return <Swords size={15} />;
      case 'team': return <Users size={15} />;
      case 'contact': return <Phone size={15} />;
      default: return <Flame size={15} />;
    }
  };

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <nav 
      aria-label="Sub Categories Navigation"
      style={{
        background: 'linear-gradient(180deg, #09142b 0%, #060c1a 100%)',
        borderBottom: '1px solid rgba(255, 190, 0, 0.25)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '0.6rem 0',
        position: 'sticky',
        top: '68px',
        zIndex: 90,
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.45)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
    >
      <div className="container" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        
        {/* Right Scroll Arrow (for RTL) */}
        <button
          onClick={() => handleScroll('right')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '30px',
            height: '30px',
            borderRadius: '4px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#cbd5e1',
            cursor: 'pointer',
            marginLeft: '0.4rem',
            flexShrink: 0,
            transition: 'all 0.2s ease'
          }}
          title="التمرير لليمين"
          aria-label="Scroll right"
        >
          <ChevronRight size={16} />
        </button>

        {/* Categories Horizontal Scroll Track */}
        <div 
          ref={scrollContainerRef}
          style={{ 
            overflowX: 'auto', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            flexGrow: 1,
            padding: '0.15rem 0.25rem'
          }}
        >

          {/* 1. All Categories / Home Button */}
          <button
            onClick={() => onSelectCategory('home')}
            style={{
              padding: '0.45rem 1.1rem',
              borderRadius: '4px',
              fontSize: '0.86rem',
              fontWeight: 900,
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: currentCategory === 'home' 
                ? 'linear-gradient(135deg, #ffbe00 0%, #e0a700 100%)' 
                : 'rgba(255, 255, 255, 0.05)',
              color: currentCategory === 'home' ? '#070e1c' : '#f1f5f9',
              border: currentCategory === 'home' 
                ? '1px solid #ffbe00' 
                : '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: currentCategory === 'home' ? '0 3px 12px rgba(255, 190, 0, 0.4)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              flexShrink: 0
            }}
          >
            <Home size={15} />
            <span>{lang === 'ar' ? 'الرئيسية وكل الأقسام' : 'سەرجەم بەشەکان'}</span>
          </button>

          {/* Category Items List */}
          {t.menuItems.slice(1).map((item) => {
            const isActive = currentCategory === item.id;
            const isExclusive = item.id === 'exclusive';

            return (
              <button
                key={item.id}
                onClick={() => onSelectCategory(item.id)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 900 : 700,
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: isActive 
                    ? 'linear-gradient(135deg, #ffbe00 0%, #e0a700 100%)' 
                    : isExclusive
                      ? 'rgba(255, 190, 0, 0.08)'
                      : 'rgba(255, 255, 255, 0.04)',
                  color: isActive 
                    ? '#070e1c' 
                    : isExclusive 
                      ? 'var(--color-secondary)' 
                      : '#cbd5e1',
                  border: isActive 
                    ? '1px solid #ffbe00' 
                    : isExclusive
                      ? '1px solid rgba(255, 190, 0, 0.35)'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: isActive ? '0 3px 14px rgba(255, 190, 0, 0.4)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(255, 190, 0, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(255, 190, 0, 0.4)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = isExclusive ? 'rgba(255, 190, 0, 0.08)' : 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.borderColor = isExclusive ? 'rgba(255, 190, 0, 0.35)' : 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = isExclusive ? 'var(--color-secondary)' : '#cbd5e1';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {getCategoryIcon(item.id)}
                <span>{item.label}</span>
              </button>
            );
          })}

        </div>

        {/* Left Scroll Arrow (for RTL) */}
        <button
          onClick={() => handleScroll('left')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '30px',
            height: '30px',
            borderRadius: '4px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#cbd5e1',
            cursor: 'pointer',
            marginRight: '0.4rem',
            flexShrink: 0,
            transition: 'all 0.2s ease'
          }}
          title="التمرير لليسار"
          aria-label="Scroll left"
        >
          <ChevronLeft size={16} />
        </button>

      </div>
    </nav>
  );
}
