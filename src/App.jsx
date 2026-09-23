import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ConnectedDrawerMenu from './components/ConnectedDrawerMenu';
import FloatingSocialLeftBar from './components/FloatingSocialLeftBar';
import BreakingTicker from './components/BreakingTicker';

import HeroSection from './components/HeroSection';
import LocalNewsSection from './components/LocalNewsSection';
import PoliticsSection from './components/PoliticsSection';
import SecuritySection from './components/SecuritySection';
import ExclusiveSection from './components/ExclusiveSection';
import EconomySection from './components/EconomySection';
import SportsSection from './components/SportsSection';
import WomenSection from './components/WomenSection';
import OpinionsSection from './components/OpinionsSection';
import MultimediaSection from './components/MultimediaSection';
import VarietySection from './components/VarietySection';
import InternationalReportsSection from './components/InternationalReportsSection';
import AlMutleeSpecialSection from './components/AlMutleeSpecialSection';
import CultureArtsSection from './components/CultureArtsSection';
import ArabIntlSection from './components/ArabIntlSection';
import ScienceTechSection from './components/ScienceTechSection';
import PhotoReportsSection from './components/PhotoReportsSection';

import ArticleDetailPage from './components/ArticleDetailPage';
import ArticleModal from './components/ArticleModal';
import AboutTeamContactModal from './components/AboutTeamContactModal';
import BookmarksDrawer from './components/BookmarksDrawer';
import SearchModal from './components/SearchModal';
import AppDownloadModal from './components/AppDownloadModal';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

import { newsData } from './data/newsData';

export default function App() {
  const [lang, setLang] = useState('ar');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('almutlee_theme') || 'light';
  });
  const [currentCategory, setCurrentCategory] = useState('home');
  const [bookmarkedIds, setBookmarkedIds] = useState(['news-01']);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAppDownloadOpen, setIsAppDownloadOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [fontSize, setFontSize] = useState(16);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('almutlee_theme', next);
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = 'rtl';
    document.documentElement.setAttribute('data-theme', theme);
    document.body.style.fontSize = `${fontSize}px`;
  }, [lang, fontSize, theme]);

  const toggleBookmark = (id) => {
    setBookmarkedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleCategorySelect = (catId) => {
    setCurrentCategory(catId);
    setSelectedArticle(null);
    setTimeout(() => {
      const el = document.getElementById(`section-${catId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const bookmarkedArticles = newsData.filter(a => bookmarkedIds.includes(a.id));
  const heroArticle = newsData.find(a => a.isHero) || newsData[0];
  const breakingNews = newsData.filter(a => a.isBreaking);

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingBottom: '42px' }}>

      {/* 1. Main Upper Executive Header with Logo & Quick Action Toolbar */}
      <Header
        onOpenDrawer={() => setIsDrawerOpen(prev => !prev)}
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        bookmarksCount={bookmarkedIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAppDownload={() => setIsAppDownloadOpen(true)}
        fontSize={fontSize}
        setFontSize={setFontSize}
        onGoHome={() => setSelectedArticle(null)}
      />

      {/* 2. Connected Expandable Menu Drawer (Attached right edge tab connected to drawer panel) */}
      <ConnectedDrawerMenu
        isOpen={isDrawerOpen}
        onToggle={setIsDrawerOpen}
        currentCategory={currentCategory}
        onSelectCategory={handleCategorySelect}
        lang={lang}
        setLang={setLang}
        onOpenModal={(modal) => setActiveModal(modal)}
        onOpenAppDownload={() => setIsAppDownloadOpen(true)}
      />

      {/* Floating Vertical Social Sticky Bar (Left Side) */}
      <FloatingSocialLeftBar lang={lang} />

      {/* 3. Main Body Content: Separate Full Page View OR 17 Homepage Sections */}
      {selectedArticle ? (
        <ArticleDetailPage
          article={selectedArticle}
          lang={lang}
          onBackToHome={() => setSelectedArticle(null)}
          onSelectArticle={(art) => setSelectedArticle(art)}
          allArticles={newsData}
          onToggleBookmark={toggleBookmark}
          isBookmarked={bookmarkedIds.includes(selectedArticle.id)}
        />
      ) : (
        <main style={{ flexGrow: 1 }}>

          {/* 1. الرئيسية */}
          <section id="section-home">
            <HeroSection
              heroArticle={heroArticle}
              topArticles={newsData}
              lang={lang}
              onSelectArticle={(art) => setSelectedArticle(art)}
              onToggleBookmark={toggleBookmark}
              bookmarkedIds={bookmarkedIds}
            />
          </section>

          {/* 2. سياسة */}
          <PoliticsSection
            articles={newsData}
            lang={lang}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />

          {/* 3. أمن */}
          <SecuritySection
            articles={newsData}
            lang={lang}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />

          {/* 5. محلي */}
          <LocalNewsSection
            articles={newsData}
            lang={lang}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />

          {/* 6. رياضة */}
          <SportsSection
            articles={newsData}
            lang={lang}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />

          {/* 7. حواء */}
          <WomenSection
            articles={newsData}
            lang={lang}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />

          {/* 8. اقتصاد */}
          <EconomySection
            articles={newsData}
            lang={lang}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />

          {/* 9. تحقيقات واستقصاء */}
          <ExclusiveSection
            articles={newsData}
            lang={lang}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />

          {/* 10. مقالات الرأي */}
          <OpinionsSection
            articles={newsData}
            lang={lang}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />

          {/* 11. الملتيميديا والفيديو */}
          <MultimediaSection
            articles={newsData}
            lang={lang}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />

          {/* 12. منوعات */}
          <VarietySection
            articles={newsData}
            lang={lang}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />

          {/* 13. قسم خاص المطلع */}
          <AlMutleeSpecialSection
            articles={newsData}
            lang={lang}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />

          {/* 14. قسم الثقافة والفنون */}
          <CultureArtsSection
            articles={newsData}
            lang={lang}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />

          {/* 15. قسم الأخبار العربية والدولية */}
          <ArabIntlSection
            articles={newsData}
            lang={lang}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />

          {/* 16. قسم علوم وتكنولوجيا */}
          <ScienceTechSection
            articles={newsData}
            lang={lang}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />

          {/* 17. قسم تقارير مصورة */}
          <PhotoReportsSection
            articles={newsData}
            lang={lang}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />

        </main>
      )}

      {/* 4. Footer Component */}
      <Footer
        lang={lang}
        onSelectCategory={handleCategorySelect}
        onOpenModal={(modal) => setActiveModal(modal)}
      />

      {/* 5. Fixed Bottom Live Ticker */}
      <BreakingTicker
        news={breakingNews}
        lang={lang}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      {/* 6. Dynamic Luxury Back To Top Button with Scroll Progress */}
      <BackToTopButton lang={lang} />

      {activeModal && (
        <AboutTeamContactModal
          modalType={activeModal}
          onClose={() => setActiveModal(null)}
          lang={lang}
        />
      )}

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarkedArticles={bookmarkedArticles}
        onSelectArticle={(art) => setSelectedArticle(art)}
        onRemoveBookmark={toggleBookmark}
        lang={lang}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        articles={newsData}
        lang={lang}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      <AppDownloadModal
        isOpen={isAppDownloadOpen}
        onClose={() => setIsAppDownloadOpen(false)}
        lang={lang}
      />

    </div>
  );
}
