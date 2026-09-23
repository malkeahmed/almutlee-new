import React, { useState } from 'react';
import { Search, Globe, Smartphone, Sun, Moon, Menu } from 'lucide-react';
import { translations } from '../data/translations';

export default function Header({
  onOpenDrawer,
  lang,
  setLang,
  theme = 'dark',
  toggleTheme,
  bookmarksCount,
  onOpenBookmarks,
  onOpenSearch,
  onOpenAppDownload,
  fontSize,
  setFontSize,
  onGoHome
}) {
  const t = translations[lang];
  const [activeCategoryTab, setActiveCategoryTab] = useState('home');

  const categoryBarItems = [
    { id: 'home', sectionId: 'section-home', label: lang === 'ar' ? 'الرئيسية' : 'سەرەکی' },
    { id: 'politics', sectionId: 'section-politics', label: lang === 'ar' ? 'سياسة' : 'سیاسەت' },
    { id: 'security', sectionId: 'section-security', label: lang === 'ar' ? 'أمن' : 'ئاسایش' },
    { id: 'local', sectionId: 'section-local', label: lang === 'ar' ? 'محلي' : 'ناوخۆیی' },
    { id: 'sports', sectionId: 'section-sports', label: lang === 'ar' ? 'رياضة' : 'وەرزش' },
    { id: 'women', sectionId: 'section-women', label: lang === 'ar' ? 'حواء' : 'ئافرەتان' },
    { id: 'economy', sectionId: 'section-economy', label: lang === 'ar' ? 'اقتصاد' : 'ئابووری' },
    { id: 'opinions', sectionId: 'section-opinions', label: lang === 'ar' ? 'آراء' : 'ڕاکان' },
    { id: 'video', sectionId: 'section-video', label: lang === 'ar' ? 'فيديو' : 'ڤیدیۆ' },
    { id: 'variety', sectionId: 'section-variety', label: lang === 'ar' ? 'منوعات' : 'هەمەچەشن' },
    { id: 'intl-reports', sectionId: 'section-intl-reports', label: lang === 'ar' ? 'تقارير دولية' : 'ڕاپۆرتی نێودەوڵەتی' },
    { id: 'special-almutlee', sectionId: 'section-special-almutlee', label: lang === 'ar' ? 'خاص بـ المطلع' : 'تایبەت بە المطلع' },
    { id: 'culture-arts', sectionId: 'section-culture-arts', label: lang === 'ar' ? 'ثقافة وفنون' : 'کەلتوور و هونەر' },
    { id: 'arab_intl', sectionId: 'section-arab_intl', label: lang === 'ar' ? 'عربي ودولي' : 'عەرەبی و نێودەوڵەتی' },
    { id: 'science-tech', sectionId: 'section-science-tech', label: lang === 'ar' ? 'علوم وتكنولوجيا' : 'زانست و تەکنەلۆژیا' },
    { id: 'photo-reports', sectionId: 'section-photo-reports', label: lang === 'ar' ? 'تقارير مصورة' : 'ڕاپۆرتە وێنەییەکان' }
  ];

  // Smooth ScrollSpy: Automatically highlight current section tab while scrolling
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = categoryBarItems.length - 1; i >= 0; i--) {
        const item = categoryBarItems[i];
        const el = document.getElementById(item.sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveCategoryTab(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  const handleNavClick = (item) => {
    if (onGoHome) onGoHome();
    setActiveCategoryTab(item.id);
    setTimeout(() => {
      const targetId = item.sectionId || `section-${item.id}`;
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <header className="main-navbar" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: '#0c1833',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
      borderBottom: '3px solid var(--color-secondary)'
    }}>

      {/* 1. MAIN HEADER TIER: Brand Logo & Action Buttons */}
      <div className="container" style={{ padding: '0.75rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

          {/* Right: Clean Official Logo & Agency Title */}
          <div
            className="header-brand-wrap"
            onClick={() => {
              if (onGoHome) onGoHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src={import.meta.env.BASE_URL + "logo.png"}
              alt="المطلع"
              className="header-brand-logo"
            />
          </div>

          {/* Left: Clean Action Square Buttons */}
          <div className="header-actions-group" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>

            {/* 1. Dark / Light Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="header-action-btn header-theme-btn"
              title={theme === 'dark' ? (lang === 'ar' ? 'الوضع النهاري (فاتح)' : 'دۆخی ڕۆژ') : (lang === 'ar' ? 'الوضع الليلي (داكن)' : 'دۆخی شەو')}
              aria-label="Toggle Dark/Light mode"
            >
              {theme === 'dark' ? (
                <Sun size={19} color="var(--color-secondary)" />
              ) : (
                <Moon size={19} color="var(--color-secondary)" />
              )}
            </button>

            {/* 2. Language Toggle Button */}
            <button
              onClick={() => setLang(lang === 'ar' ? 'ku' : 'ar')}
              className="header-action-btn header-lang-btn"
              title={lang === 'ar' ? 'التحويل إلى الكردية' : 'گۆڕین بۆ عەرەبی'}
              aria-label="Toggle language"
            >
              <Globe size={14} color="var(--color-secondary)" style={{ marginBottom: '-2px' }} />
              <span style={{ fontSize: '0.66rem', fontWeight: 900, lineHeight: 1 }}>
                {lang === 'ar' ? 'عربي' : 'کوردی'}
              </span>
            </button>

            {/* 3. Search Button */}
            <button
              onClick={onOpenSearch}
              className="header-action-btn header-search-btn"
              title={lang === 'ar' ? 'بحث في الأخبار' : 'گەڕان'}
              aria-label="Search"
            >
              <Search size={18} color="var(--color-secondary)" />
            </button>

            {/* 4. App Download Button (Desktop only with title text) */}
            <button 
              onClick={onOpenAppDownload}
              className="header-app-download-btn header-actions-desktop"
              title={lang === 'ar' ? 'تحميل تطبيق المطلع (iOS & Android)' : 'داگرتنی ئەپڵیکەیشن (iOS & Android)'}
              aria-label="Download App"
            >
              <Smartphone size={17} color="var(--color-secondary)" />
              <span>{lang === 'ar' ? 'تطبيق المطلع' : 'ئەپڵیکەیشنی المطلع'}</span>
            </button>

            {/* 5. Menu Drawer Trigger Button */}
            <button 
              className="header-action-btn header-mobile-menu-btn"
              onClick={onOpenDrawer}
              title={lang === 'ar' ? 'القائمة الجانبية' : 'مێنیو'}
              aria-label="Open menu drawer"
            >
              <Menu size={20} color="#ffffff" />
            </button>

          </div>

        </div>
      </div>

      {/* 2. CLASSIC CATEGORY NAVIGATION TIER: Clean Plain Text Categories with Underline */}
      <div className="header-category-scroller-wrap" style={{
        background: '#071024',
        borderTop: '1px solid rgba(255, 255, 255, 0.07)',
        padding: '0'
      }}>
        <div className="container header-category-container" style={{ overflowX: 'auto', scrollbarWidth: 'none' }}>
          <div className="header-category-items-row" style={{ display: 'flex', alignItems: 'center', gap: '0', whiteSpace: 'nowrap' }}>
            {categoryBarItems.map((item, idx) => {
              const isActive = activeCategoryTab === item.id;
              return (
                <React.Fragment key={item.id}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className={isActive ? "header-nav-tab active" : "header-nav-tab"}
                  >
                    {item.label}
                  </button>

                  {idx < categoryBarItems.length - 1 && (
                    <span style={{ color: 'rgba(255, 255, 255, 0.12)', fontSize: '0.75rem', padding: '0 0.05rem', pointerEvents: 'none' }}>•</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

    </header>
  );
}
