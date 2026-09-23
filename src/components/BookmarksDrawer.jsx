import React from 'react';
import { X, Bookmark, Trash2, ChevronLeft } from 'lucide-react';
import { translations } from '../data/translations';

export default function BookmarksDrawer({ isOpen, onClose, bookmarkedArticles, onSelectArticle, onRemoveBookmark, lang }) {
  const t = translations[lang];

  return (
    <>
      <div 
        className={`drawer-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />

      <div 
        className={`right-drawer ${isOpen ? 'open' : ''}`}
        style={{ width: '350px', background: '#ffffff', color: '#0f172a' }}
      >
        <div style={{ padding: '1.25rem', background: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Bookmark size={20} color="var(--color-secondary)" fill="var(--color-secondary)" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{t.savedBookmarks}</h3>
          </div>
          <button onClick={onClose} style={{ color: 'white' }}>
            <X size={22} />
          </button>
        </div>

        <div style={{ padding: '1rem', overflowY: 'auto', flexGrow: 1 }}>
          {bookmarkedArticles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#94a3b8' }}>
              <Bookmark size={48} style={{ opacity: 0.3, margin: '0 auto 1rem auto' }} />
              <p style={{ fontSize: '0.9rem' }}>
                {lang === 'ar' ? 'لا توجد مقالات محفوظة حالياً' : 'هیچ بڵاوکراوەیەک پاشەکەوت نەکراوە'}
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {bookmarkedArticles.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: '1px solid #e2e8f0',
                    background: '#f8fafc',
                    position: 'relative'
                  }}
                >
                  <img src={item.image} alt={item.title[lang]} style={{ width: '80px', height: '65px', objectFit: 'cover', borderRadius: '4px' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
                    <h4 
                      onClick={() => { onSelectArticle(item); onClose(); }}
                      style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-primary)', cursor: 'pointer', lineHeight: 1.3 }}
                    >
                      {item.title[lang]}
                    </h4>
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.35rem' }}>
                      <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{item.publishedAt.split(' ')[0]}</span>
                      <button 
                        onClick={() => onRemoveBookmark(item.id)}
                        style={{ color: '#ef4444', padding: '0.2rem' }}
                        title="ازالة"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
