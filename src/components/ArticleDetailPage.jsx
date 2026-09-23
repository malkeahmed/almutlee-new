import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ChevronLeft, Sparkles, Clock, Send, 
  Share2, Bookmark, Bell, CheckCircle2, Home, Newspaper,
  User, Eye, ShieldCheck, Flame, ChevronRight
} from 'lucide-react';
import { translations } from '../data/translations';

export default function ArticleDetailPage({ 
  article, 
  lang = 'ar', 
  onBackToHome, 
  onSelectArticle, 
  allArticles = [],
  onToggleBookmark,
  isBookmarked
}) {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const t = translations[lang] || translations['ar'];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
      setEmailInput('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const articleTitle = article && article.title ? (article.title[lang] || article.title['ar'] || '') : '';
  const articleSummary = article && article.summary ? (article.summary[lang] || article.summary['ar'] || '') : '';
  const articleImage = article && article.image ? article.image : import.meta.env.BASE_URL + 'logo.png';
  const categoryTag = article && article.tag ? article.tag[lang] : (lang === 'ar' ? 'تغطية خاصة' : 'ڕووماڵی تایبەت');
  const authorName = article && article.author ? article.author.name[lang] : (lang === 'ar' ? 'وكالة المُطّلع' : 'ئاژانسی المطلع');

  const relatedArticles = allArticles.filter(a => a.id !== (article?.id)).slice(0, 4);

  return (
    <div className="article-detail-page">
      
      {/* 1. Breadcrumb & Fast Navigation Bar */}
      <div className="article-detail-breadcrumb-bar">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          
          <div className="article-detail-breadcrumbs">
            <button 
              onClick={onBackToHome}
              className="article-detail-home-link"
            >
              <Home size={15} color="#ffbe00" />
              <span>{lang === 'ar' ? 'الرئيسية' : 'سەرەکی'}</span>
            </button>

            <span>/</span>
            <span>{categoryTag}</span>
            <span>/</span>
            <span style={{ color: '#ffbe00', fontWeight: 800 }}>
              {lang === 'ar' ? 'قريباً' : 'بەمزووانە'}
            </span>
          </div>

          <button
            onClick={onBackToHome}
            className="article-detail-back-nav-btn"
          >
            <ChevronRight size={16} />
            <span>{lang === 'ar' ? 'العودة للصفحة الرئيسية' : 'گەڕانەوە بۆ پەڕەی سەرەکی'}</span>
          </button>

        </div>
      </div>

      {/* 2. Main Hero Showcase Container */}
      <div className="container" style={{ marginTop: '2rem' }}>
        <div className="article-detail-main-card">
          
          {/* Top Gold Horizon Ribbon */}
          <div style={{ height: '5px', background: 'linear-gradient(90deg, #ffbe00 0%, #0c1833 50%, #ffbe00 100%)' }} />

          <div style={{ padding: '2.5rem 2rem' }}>

            {/* A. Centered Coming Soon Announcement Banner */}
            <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
              
              <div className="article-detail-badge">
                <Sparkles size={16} color="#ffbe00" />
                <span>{lang === 'ar' ? 'محتوى حصري • قيد النشر والإعداد' : 'ناوەرۆکی تایبەت • لە ئامادەکردندایە'}</span>
              </div>

              <h1 className="article-detail-heading">
                {lang === 'ar' ? 'قـريـبـاً' : 'بـەمـزووانـە'}
              </h1>

              <p className="article-detail-desc">
                {lang === 'ar' 
                  ? 'عزيزي القارئ، تعمل هيئة التحرير في وكالة المُطّلع حالياً على استكمال التحقيقات والتغطية الصحفية الشاملة لهذا الخبر وسيتم نشره قريباً.' 
                  : 'خوێنەری بەڕێز، دەستەی نووسەرانی ئاژانسی المطلع لە ئێستادا کار لەسەر ئامادەکردنی تەواوی ئەم بابەتە دەکەن و بەمزووانە بڵاودەکرێتەوە.'}
              </p>

            </div>

            {/* B. Article Focal Card with Large Banner */}
            <div className="article-detail-focal-card">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}>
                
                {/* Media Image */}
                <div style={{ gridColumn: 'span 5', minHeight: '240px', position: 'relative' }} className="hero-main-col">
                  <img 
                    src={articleImage} 
                    alt={articleTitle}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span className="article-detail-focal-tag">
                    {categoryTag}
                  </span>
                </div>

                {/* Information */}
                <div style={{ gridColumn: 'span 7', padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div className="article-detail-focal-meta">
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 800 }}>
                        <User size={13} color="#ffbe00" />
                        {authorName}
                      </span>
                      <span>•</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={13} />
                        {article?.publishedAt || '15:30'} بتوقيت بغداد
                      </span>
                    </div>

                    <h2 className="article-detail-article-title">
                      {articleTitle || (lang === 'ar' ? 'عنوان المادة الصحفية قيد الإعداد' : 'سەردێڕی هەواڵ لە ئامادەکردندایە')}
                    </h2>

                    <p className="article-detail-article-summary">
                      {articleSummary || (lang === 'ar' ? 'يتناول هذا التقرير تفاصيل موسعة وحصرية تنشر للمرة الأولى عبر منصة وكالة المطلع.' : 'ئەم ڕاپۆرتە وردەکاری تایبەت لەخۆدەگرێت.')}
                    </p>
                  </div>

                  {/* Share & Actions Toolbar */}
                  <div className="article-detail-focal-actions">
                    <button
                      onClick={handleCopyLink}
                      className="article-detail-share-btn"
                    >
                      <Share2 size={14} color="#ffbe00" />
                      <span>{copiedLink ? (lang === 'ar' ? 'تم نسخ الرابط!' : 'بەستەر کۆپیکرا!') : (lang === 'ar' ? 'مشاركة' : 'هاوبەشکردن')}</span>
                    </button>

                    <a
                      href="https://t.me/almutlee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="article-detail-telegram-btn"
                    >
                      <Send size={14} />
                      <span>تليغرام المطلع</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>

            {/* C. Official Telegram & Notification Box (No Timer) */}
            <div className="article-detail-notify-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#ffbe00', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                <Bell size={18} />
                <span>{lang === 'ar' ? 'تنبيه النشر والأخبار العاجلة' : 'ئاگاداری بڵاوکردنەوەی هەواڵە بەپەلەکان'}</span>
              </div>

              <p className="article-detail-notify-desc">
                {lang === 'ar' 
                  ? 'اشترك ليصلك إشعار فوري عند صدور هذا التقرير والتغطيات الاستقصائية الحصرية.' 
                  : 'ئیمەیڵەکەت بنووسە بۆ وەرگرتنی نوێترین زانیاری.'}
              </p>

              {/* Email Notification Form */}
              <form onSubmit={handleSubscribe} className="article-detail-notify-form">
                <input 
                  type="email" 
                  className="article-detail-notify-input"
                  placeholder={lang === 'ar' ? 'أدخل بريدك الإلكتروني للتنبيه...' : 'ئیمەیڵەکەت بنووسە...'}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="article-detail-notify-submit"
                >
                  {lang === 'ar' ? 'أعلمني' : 'ئاگادارم بکە'}
                </button>
              </form>

              {isSubscribed && (
                <div style={{ marginTop: '0.85rem', color: '#4ade80', fontSize: '0.84rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                  <CheckCircle2 size={16} />
                  <span>{lang === 'ar' ? 'تم تسجيل بريدك بنجاح! سنقوم بتنبيهك فور النشر.' : 'بە سەرکەوتوویی تۆمارکرا!'}</span>
                </div>
              )}
            </div>

            {/* D. Back to Home Action Button */}
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={onBackToHome}
                className="article-detail-home-action-btn"
              >
                <ChevronLeft size={20} />
                <span>{lang === 'ar' ? 'العودة لتصفح الأخبار الرئيسية' : 'گەڕانەوە بۆ لاپەڕەی سەرەکی'}</span>
              </button>
            </div>

          </div>
        </div>

        {/* 3. Related Latest Stories Grid */}
        <div style={{ marginTop: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ width: '4px', height: '22px', background: '#ffbe00', borderRadius: '2px' }} />
            <h3 className="article-detail-related-heading">
              {lang === 'ar' ? 'تغطيات أخرى متوفرة للمتابعة' : 'ڕووماڵەکانی دیکە'}
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {relatedArticles.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectArticle(item)}
                className="article-detail-related-card"
              >
                <div style={{ height: '140px', overflow: 'hidden' }}>
                  <img src={item.image} alt={item.title[lang]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#ffbe00', background: '#0c1833', padding: '2px 6px', borderRadius: '3px' }}>
                    {item.tag ? item.tag[lang] : categoryTag}
                  </span>
                  <h4 className="article-detail-related-card-title">
                    {item.title[lang]}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
