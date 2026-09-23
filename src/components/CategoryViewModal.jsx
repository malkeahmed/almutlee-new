import React from 'react';
import { X, Clock, Eye, ChevronLeft, Bookmark } from 'lucide-react';
import { translations } from '../data/translations';

export default function CategoryViewModal({ categoryId, onClose, articles, lang, onSelectArticle, onToggleBookmark, bookmarkedIds }) {
  const t = translations[lang];

  if (!categoryId) return null;

  const categoryLabel = t.menuItems.find(m => m.id === categoryId)?.label || categoryId;
  const filteredArticles = articles.filter(a => a.categoryId === categoryId);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '900px', borderRadius: '4px', border: '2px solid var(--color-secondary)' }}
      >
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          background: 'var(--color-primary)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '2px solid var(--color-secondary)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge-gold" style={{ fontSize: '0.9rem', padding: '0.35rem 0.75rem' }}>
              {categoryLabel}
            </span>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>
              {lang === 'ar' ? `أخبار قسم: ${categoryLabel}` : `هەواڵەکانی بەشی: ${categoryLabel}`}
            </h3>
          </div>
          <button onClick={onClose} style={{ color: 'white' }}>
            <X size={24} />
          </button>
        </div>

        {/* Modal Body Grid */}
        <div style={{ padding: '1.75rem', maxHeight: '75vh', overflowY: 'auto' }}>
          {filteredArticles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#94a3b8' }}>
              <p style={{ fontSize: '1rem' }}>
                {lang === 'ar' ? 'لا توجد أخبار حالياً في هذا القسم' : 'هیچ هەواڵێک لەم بەشەدا نییە'}
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="grid-2">
              {filteredArticles.map((item) => {
                const isBookmarked = bookmarkedIds.includes(item.id);
                return (
                  <div 
                    key={item.id} 
                    className="news-card"
                    style={{ borderRadius: '4px', border: '1px solid #e2e8f0' }}
                    onClick={() => { onSelectArticle(item); onClose(); }}
                  >
                    <div className="card-img-wrapper" style={{ cursor: 'pointer' }}>
                      <img src={item.image} alt={item.title[lang]} />
                      {item.isExclusive && (
                        <span className="badge-gold" style={{ position: 'absolute', top: '0.65rem', right: '0.65rem', zIndex: 3 }}>
                          {t.exclusiveBadge}
                        </span>
                      )}
                    </div>

                    <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1.4, marginBottom: '0.6rem' }}>
                        {item.title[lang]}
                      </h3>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.65rem', borderTop: '1px solid #f1f5f9', marginTop: 'auto' }}>
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Clock size={12} /> {item.readTime} {t.readingTime}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          {t.readMore} <ChevronLeft size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
