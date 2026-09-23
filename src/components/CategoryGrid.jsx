import React from 'react';
import { Layers, Clock, Eye, ChevronLeft, Bookmark } from 'lucide-react';
import { translations } from '../data/translations';

export default function CategoryGrid({ 
  articles, 
  currentCategory, 
  onSelectCategory, 
  lang, 
  onSelectArticle,
  onToggleBookmark,
  bookmarkedIds
}) {
  const t = translations[lang];

  // Category Tabs List (Excluding home, video, contact, about, team which have dedicated views)
  const categoryTabs = t.menuItems.filter(item => 
    !['home', 'contact', 'about', 'team'].includes(item.id)
  );

  const filteredArticles = currentCategory === 'home'
    ? articles
    : articles.filter(a => a.categoryId === currentCategory);

  return (
    <section style={{ padding: '2.5rem 0', background: '#f4f6fb' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ background: 'var(--color-primary)', color: 'var(--color-secondary)', padding: '0.5rem', borderRadius: '4px' }}>
              <Layers size={20} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--color-primary)' }}>
                {t.categoriesTitle}
              </h2>
              <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
                {lang === 'ar' ? 'استعرض التغطيات الإخبارية بحسب الأقسام والمواضيع' : 'بەپێی بەشەکان هەواڵەکان دەستنیشان بکە'}
              </p>
            </div>
          </div>
        </div>

        {/* Category Tabs Filter Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          overflowX: 'auto',
          paddingBottom: '0.75rem',
          marginBottom: '1.5rem',
          borderBottom: '2px solid #e2e8f0'
        }}>
          <button
            onClick={() => onSelectCategory('home')}
            style={{
              padding: '0.5rem 1.1rem',
              borderRadius: '4px',
              fontSize: '0.88rem',
              fontWeight: 700,
              whiteSpace: 'nowrap',
              background: currentCategory === 'home' ? 'var(--color-primary)' : '#ffffff',
              color: currentCategory === 'home' ? 'var(--color-secondary)' : '#475569',
              border: '1px solid #cbd5e1',
              boxShadow: currentCategory === 'home' ? 'var(--shadow-md)' : 'none',
              transition: 'var(--transition-fast)'
            }}
          >
            {lang === 'ar' ? 'جميع الأقسام' : 'سەرجەم بەشەکان'}
          </button>

          {categoryTabs.map((cat) => {
            const isActive = currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: '4px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  background: isActive ? 'var(--color-primary)' : '#ffffff',
                  color: isActive ? 'var(--color-secondary)' : '#475569',
                  border: isActive ? '1px solid var(--color-primary)' : '1px solid #cbd5e1',
                  transition: 'var(--transition-fast)'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* News Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="grid-4">
          {filteredArticles.map((item) => {
            const isBookmarked = bookmarkedIds.includes(item.id);
            return (
              <div 
                key={item.id}
                className="news-card"
                style={{ borderRadius: '4px' }}
              >
                <div 
                  className="card-img-wrapper"
                  onClick={() => onSelectArticle(item)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={item.image} alt={item.title[lang]} />
                  
                  {item.isExclusive && (
                    <span className="badge-gold" style={{ position: 'absolute', top: '0.65rem', right: '0.65rem', zIndex: 3 }}>
                      {t.exclusiveBadge}
                    </span>
                  )}

                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(item.id);
                    }}
                    style={{
                      position: 'absolute',
                      top: '0.65rem',
                      left: '0.65rem',
                      zIndex: 3,
                      background: 'rgba(10,20,44,0.6)',
                      padding: '0.4rem',
                      borderRadius: '4px',
                      color: isBookmarked ? 'var(--color-secondary)' : 'white'
                    }}
                  >
                    <Bookmark size={16} fill={isBookmarked ? 'var(--color-secondary)' : 'none'} />
                  </button>
                </div>

                <div style={{ padding: '1.15rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-secondary)', fontWeight: 700, background: '#102042', padding: '0.15rem 0.5rem', borderRadius: '2px' }}>
                      {item.categoryId.toUpperCase()}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                      {item.publishedAt.split(' ')[0]}
                    </span>
                  </div>

                  <h3 
                    onClick={() => onSelectArticle(item)}
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: 'var(--color-primary)',
                      lineHeight: 1.4,
                      marginBottom: '0.65rem',
                      cursor: 'pointer',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--color-secondary-hover)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--color-primary)'}
                  >
                    {item.title[lang]}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.65rem', borderTop: '1px solid #f1f5f9', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#94a3b8' }}>
                      <Clock size={12} />
                      <span>{item.readTime} {t.readingTime}</span>
                    </div>

                    <button 
                      onClick={() => onSelectArticle(item)}
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2rem'
                      }}
                    >
                      <span>{t.readMore}</span>
                      <ChevronLeft size={14} />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
