import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, Search, ChevronLeft, Clock, Sparkles, TrendingUp, 
  Flame, User, Layers, ArrowLeft, BookOpen, Newspaper
} from 'lucide-react';
import { translations } from '../data/translations';

export default function SearchModal({ isOpen, onClose, articles = [], lang = 'ar', onSelectArticle }) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const t = translations[lang] || translations['ar'];

  // Handle ESC Key to Close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset query on close
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setActiveCategory('all');
    }
  }, [isOpen]);

  // Trending Hot Topics
  const trendingTopics = [
    { label: { ar: 'البرلمان والقرارات', ku: 'پەرلەمان و بڕیارەکان' }, query: 'البرلمان' },
    { label: { ar: 'أسعار النفط والدولار', ku: 'نرخی نەوت و دۆلار' }, query: 'النفط' },
    { label: { ar: 'العمليات الأمنية', ku: 'ئۆپەراسیۆنە ئەمنییەکان' }, query: 'أمن' },
    { label: { ar: 'المنتخب الوطني', ku: 'هەڵبژاردەی نیشتمانی' }, query: 'المنتخب' },
    { label: { ar: 'مشاريع الاستثمار', ku: 'پڕۆژەی وەبەرهێنان' }, query: 'استثمار' }
  ];

  // Category Tabs
  const categoryTabs = [
    { id: 'all', label: { ar: 'كافة الأقسام', ku: 'هەموو بەشەکان' } },
    { id: 'politics', label: { ar: 'سياسة', ku: 'سیاسەت' } },
    { id: 'security', label: { ar: 'أمن', ku: 'ئاسایش' } },
    { id: 'economy', label: { ar: 'اقتصاد', ku: 'ئابووری' } },
    { id: 'local', label: { ar: 'محلي', ku: 'ناوخۆیی' } },
    { id: 'sports', label: { ar: 'رياضة', ku: 'وەرزش' } },
    { id: 'opinions', label: { ar: 'آراء', ku: 'وتارەکان' } }
  ];

  // Filtered Results
  const results = useMemo(() => {
    let list = articles;

    if (activeCategory !== 'all') {
      list = list.filter(a => a.categoryId === activeCategory);
    }

    if (query.trim() !== '') {
      const q = query.toLowerCase().trim();
      list = list.filter(a => {
        const titleMatch = a.title && a.title[lang] && a.title[lang].toLowerCase().includes(q);
        const summaryMatch = a.summary && a.summary[lang] && a.summary[lang].toLowerCase().includes(q);
        const authorMatch = a.author && a.author.name && a.author.name[lang] && a.author.name[lang].toLowerCase().includes(q);
        const tagMatch = a.tag && a.tag[lang] && a.tag[lang].toLowerCase().includes(q);
        return titleMatch || summaryMatch || authorMatch || tagMatch;
      });
    }

    return list;
  }, [articles, query, activeCategory, lang]);

  // Featured Spotlight Stories (When Query is empty)
  const spotlightStories = useMemo(() => {
    return articles.slice(0, 5);
  }, [articles]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay search-modal-overlay" 
      onClick={onClose}
    >
      {/* Master Search Container Box */}
      <div 
        className="search-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Horizon Line */}
        <div className="search-modal-gold-bar" />

        {/* 1. Header Bar */}
        <div className="search-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div className="search-modal-icon-badge">
              <Search size={20} strokeWidth={2.5} />
            </div>

            <div>
              <h3 className="search-modal-title">
                {lang === 'ar' ? 'البحث' : 'گەڕان'}
              </h3>
              <p className="search-modal-subtitle">
                {lang === 'ar' ? 'أرشيف وتغطيات وكالة المُطّلع الإخبارية' : 'ئەرشیف و هەواڵەکانی ئاژانسی المطلع'}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span className="search-modal-esc-badge">
              ESC
            </span>

            <button
              onClick={onClose}
              className="search-modal-close-btn"
              title={lang === 'ar' ? 'إغلاق' : 'داخستن'}
            >
              <X size={18} strokeWidth={2.4} />
            </button>
          </div>
        </div>

        {/* 2. Interactive Search Bar Area */}
        <div className="search-modal-input-area">
          {/* Main Search Input Box */}
          <div style={{ position: 'relative', marginBottom: '0.9rem' }}>
            <input 
              type="text"
              autoFocus
              className="search-modal-input"
              placeholder={lang === 'ar' ? 'اكتب عنوان الخبر، اسم الكاتب، أو الموضوع هنا...' : 'ناوی بابەت، هەواڵ، یان نووسەر بنووسە...'}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {/* Right Search Icon */}
            <div className="search-modal-input-icon">
              <Search size={22} strokeWidth={2.4} />
            </div>

            {/* Left Clear Button */}
            {query.trim() !== '' && (
              <button
                onClick={() => setQuery('')}
                className="search-modal-clear-btn"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Quick Trending Topics */}
          <div className="search-modal-trending-row">
            <span className="search-modal-trending-label">
              <Flame size={14} color="#f97316" />
              {lang === 'ar' ? 'الأكثر بحثاً:' : 'زۆرترین گەڕان:'}
            </span>

            {trendingTopics.map((topic, idx) => (
              <button
                key={idx}
                onClick={() => setQuery(topic.query)}
                className={`search-modal-pill ${query === topic.query ? 'active' : ''}`}
              >
                {topic.label[lang]}
              </button>
            ))}
          </div>

          {/* Category Tabs */}
          <div className="search-modal-categories-row">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`search-modal-cat-tab ${activeCategory === tab.id ? 'active' : ''}`}
              >
                {tab.label[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Results / Stories Body */}
        <div className="search-modal-results-body">
          {/* Header Stats */}
          <div className="search-modal-stats-header">
            <span className="search-modal-stats-title">
              {query.trim() !== '' ? (
                <>
                  <Sparkles size={15} color="#ffbe00" />
                  <span>{lang === 'ar' ? `نتائج البحث عن: "${query}"` : `ئەنجامەکان بۆ: "${query}"`}</span>
                </>
              ) : (
                <>
                  <Newspaper size={15} color="#ffbe00" />
                  <span>{lang === 'ar' ? 'أبرز وأحدث التغطيات الإخبارية' : 'دیارترین ڕووماڵە هەواڵییەکان'}</span>
                </>
              )}
            </span>

            <span className="search-modal-count-badge">
              {query.trim() !== '' ? `${results.length} ${lang === 'ar' ? 'خبر' : 'هەواڵ'}` : `${spotlightStories.length} ${lang === 'ar' ? 'مختار' : 'هەڵبژێردراو'}`}
            </span>
          </div>

          {/* Items List */}
          {query.trim() !== '' && results.length === 0 ? (
            <div className="search-modal-empty-state">
              <div className="search-modal-empty-icon">
                <Search size={24} />
              </div>
              <h4 className="search-modal-empty-title">
                {lang === 'ar' ? 'لم يتم العثور على أي نتائج مطابقة' : 'هیچ ئەنجامێک نەدۆزرایەوە'}
              </h4>
              <p className="search-modal-empty-desc">
                {lang === 'ar' 
                  ? 'جرب البحث بكلمات عامة أو اختر أحد الأقسام من الأعلى.' 
                  : 'تکایە بە وشەی گشتی بگەڕێ.'}
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {(query.trim() !== '' ? results : spotlightStories).map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectArticle(item);
                    onClose();
                  }}
                  className="search-result-card"
                >
                  {/* Thumbnail */}
                  <div className="search-result-thumb">
                    <img 
                      src={item.image} 
                      alt={item.title[lang]} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    {item.tag && (
                      <span className="search-result-tag">
                        {item.tag[lang]}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ flexGrow: 1, minWidth: 0 }}>
                    <h4 className="search-result-title">
                      {item.title[lang]}
                    </h4>

                    <p className="search-result-summary">
                      {item.summary[lang]}
                    </p>

                    <div className="search-result-meta">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        {item.author && (
                          <span className="search-result-author">
                            <User size={12} color="#ffbe00" />
                            {item.author.name[lang]}
                          </span>
                        )}
                        <span>•</span>
                        <span className="search-result-time">
                          <Clock size={12} />
                          {item.publishedAt ? item.publishedAt.split(' ')[1] : '14:30'} بتوقيت بغداد
                        </span>
                      </div>

                      <span className="search-result-action">
                        {t.readMore}
                        <ChevronLeft size={14} color="#ffbe00" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 4. Footer Bar */}
        <div className="search-modal-footer">
          <span>
            <strong>وكالة المُطّلع</strong> — رصد .. متابعة .. تحليل
          </span>
          <span>
            اضغط <kbd className="search-modal-kbd">ESC</kbd> للخروج
          </span>
        </div>

      </div>
    </div>
  );
}
