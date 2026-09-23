<p align="center">
  <img src="./logo.png" alt="Almutlee Logo" width="140" />
</p>

<h1 align="center">المطلع | Almutlee News</h1>

<p align="center">
  <strong>وكالة أنباء المطلع الإخبارية — معتمدة لدى نقابة الصحفيين العراقيين بالرقم 1953</strong><br/>
  Modern, premium bilingual (Arabic / Kurdish) news platform — 17 editorial sections, RTL-first, luxury UI.
</p>

<p align="center">
  <a href="https://github.com/malkeahmed/almutlee-new"><img src="https://img.shields.io/badge/GitHub-almutlee--new-102042?style=for-the-badge&logo=github" alt="GitHub" /></a>
  <img src="https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5.1-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-FFBE00?style=for-the-badge" alt="License" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/lang-AR%20%7C%20KU-102042?style=flat-square" />
  <img src="https://img.shields.io/badge/dir-RTL-FFBE00?style=flat-square" />
  <img src="https://img.shields.io/badge/theme-Light%20%2F%20Dark-0b152b?style=flat-square" />
  <img src="https://img.shields.io/badge/UI-Luxury%20Navy%20%2B%20Gold-ffbe00?style=flat-square" />
  <img src="https://img.shields.io/badge/build-passing-brightgreen?style=flat-square" />
</p>

---

## 📸 Preview

> Add real screenshots / GIFs here after deploy

| Hero (Light) | Article Detail | Drawer + Ticker |
|---|---|---|
| <img src="https://via.placeholder.com/400x220/ffffff/102042?text=Hero+White+Gold" width="400" /> | <img src="https://via.placeholder.com/400x220/102042/ffbe00?text=Article+Detail" width="400" /> | <img src="https://via.placeholder.com/400x220/0b152b/ffbe00?text=Drawer+%2B+Ticker" width="400" /> |

**Live Demo:** *(add Vercel / Netlify URL after deploy)* → `https://almutlee.example.com`

---

## ✨ Features

### Editorial — 17 Premium Sections
| # | Section | Component | ID |
|---|---|---|---|
| 1 | الرئيسية – Hero + Top Stories | `HeroSection.jsx` | `home` |
| 2 | سياسة | `PoliticsSection.jsx` | `politics` |
| 3 | أمن | `SecuritySection.jsx` | `security` |
| 4 | محلي | `LocalNewsSection.jsx` | `local` |
| 5 | رياضة | `SportsSection.jsx` | `sports` |
| 6 | حواء | `WomenSection.jsx` | `women` |
| 7 | اقتصاد | `EconomySection.jsx` | `economy` |
| 8 | تحقيقات واستقصاء / حصرية | `ExclusiveSection.jsx` | `exclusive` |
| 9 | مقالات الرأي | `OpinionsSection.jsx` | `opinions` |
| 10 | الملتيميديا والفيديو | `MultimediaSection.jsx` | `video` |
| 11 | منوعات | `VarietySection.jsx` | `variety` |
| 12 | خاص المطلع (Bento Grid) | `AlMutleeSpecialSection.jsx` | `special` |
| 13 | الثقافة والفنون (Accordion) | `CultureArtsSection.jsx` | `culture` |
| 14 | عربي ودولي | `ArabIntlSection.jsx` | `arab_intl` |
| 15 | علوم وتكنولوجيا (2+3) | `ScienceTechSection.jsx` | `tech` |
| 16 | تقارير مصورة (Panoramic) | `PhotoReportsSection.jsx` | `photo` |
| 17 | تقارير دولية (Frosted Curtain) | `InternationalReportsSection.jsx` | `international` |

### UX / UI Highlights
- **Luxury Design System** — Navy `#102042` + Gold `#ffbe00`, 4px radius, shadows, 60/120fps animations
- **Hero White Gold** with animated golden circuit canvas, Baghdad live clock, split media+content card
- **RTL-first** (`dir="rtl"`), fully responsive (1640px container → mobile)
- **Bilingual** AR / KU toggle via `src/data/translations.js` (16 menu items translated)
- **Dark / Light theme** persisted in `localStorage` (`almutlee_theme`), CSS variables + `[data-theme="dark"]`
- **Sticky Header** + **Connected Drawer Menu** (right-edge tab) + **Floating Social Left Bar**
- **Breaking Ticker** — infinite marquee, pause on hover, live pulse badge
- **Article Detail Page** + **Bookmark Drawer** + **Search Modal** + **App Download Modal**
- **BackToTop with scroll progress**, font-size controls, share/bookmark/listen
- **Custom scrollbar, blur overlays, bento / accordion / panoramic grids**

---

## 🧱 Tech Stack

| Layer | Tech |
|---|---|
| **Framework** | React 18.2 (`react`, `react-dom`) |
| **Bundler** | Vite 5.1 + `@vitejs/plugin-react` |
| **Icons** | `lucide-react` 0.344 |
| **Styling** | Vanilla CSS Design System — `src/styles/index.css` (~3921 lines, variables, animations) |
| **Fonts** | Google Fonts — `Cairo` + `Vazirmatn` (Arabic/Kurdish) |
| **Data** | Static `src/data/newsData.js` + `translations.js` (ready to swap with API) |
| **Build** | `vite build` → `dist/` |

> No heavy UI framework — pure React + CSS for maximum performance and luxury control.

---

## 📁 Project Structure

```
almutlee-new/
├── public/                     # static assets
├── src/
│   ├── App.jsx                 # root state: lang, theme, bookmarks, article routing
│   ├── main.jsx                # ReactDOM entry
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ConnectedDrawerMenu.jsx
│   │   ├── FloatingSocialLeftBar.jsx
│   │   ├── BreakingTicker.jsx
│   │   ├── HeroSection.jsx
│   │   ├── PoliticsSection.jsx / SecuritySection.jsx / LocalNewsSection.jsx ...
│   │   ├── EconomySection.jsx / WomenSection.jsx / SportsSection.jsx ...
│   │   ├── ExclusiveSection.jsx / OpinionsSection.jsx / MultimediaSection.jsx ...
│   │   ├── VarietySection.jsx / AlMutleeSpecialSection.jsx / CultureArtsSection.jsx
│   │   ├── ArabIntlSection.jsx / ScienceTechSection.jsx / PhotoReportsSection.jsx
│   │   ├── InternationalReportsSection.jsx
│   │   ├── ArticleDetailPage.jsx / ArticleModal.jsx
│   │   ├── BookmarksDrawer.jsx / SearchModal.jsx / AppDownloadModal.jsx
│   │   ├── AboutTeamContactModal.jsx
│   │   ├── Footer.jsx / BackToTopButton.jsx
│   │   └── ...
│   ├── data/
│   │   ├── newsData.js         # 8 sample articles + teamMembers
│   │   └── translations.js     # ar / ku dictionaries
│   └── styles/
│       └── index.css           # design system + dark mode + all section styles
├── index.html                  # RTL, theme-color, fonts, #root
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9 (or yarn / pnpm)

### 1. Clone
```bash
git clone https://github.com/malkeahmed/almutlee-new.git
cd almutlee-new
```

### 2. Install
```bash
npm install
```

### 3. Develop
```bash
npm run dev
# → http://localhost:3000  (auto-open)
```

### 4. Build
```bash
npm run build
npm run preview  # preview dist/ at http://localhost:4173
```

---

## ⚙️ Configuration

### Vite
```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: { port: 3000, open: true }
})
```

### Theme
```js
// persisted
localStorage.getItem('almutlee_theme') // 'light' | 'dark'
document.documentElement.setAttribute('data-theme', theme)
```

### i18n
```js
import { translations } from './data/translations'
const t = translations[lang] // lang: 'ar' | 'ku'
```

### Adding a new article
Edit `src/data/newsData.js`:
```js
{
  id: "news-09",
  categoryId: "sports",
  isBreaking: false,
  isHero: false,
  title: { ar: "...", ku: "..." },
  summary: { ar: "...", ku: "..." },
  content: { ar: "...", ku: "..." },
  image: "https://...",
  author: { name: { ar: "...", ku: "..." }, avatar: "...", role: { ar: "...", ku: "..." } },
  views: "12K", readTime: 3, publishedAt: "2026-09-23 12:00"
}
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary | `#102042` / `#0b152b` (dark) / `#1a2f5a` (light) |
| Secondary | `#ffbe00` / `#e0a700` (hover) / `#fff8e6` (tint) |
| BG Body | `#f4f6fb` (light) / `#050b17` (dark) |
| Card | `#ffffff` / `#0c1833` (dark) |
| Border | `#e2e8f0` / `#1a2d54` (dark) |
| Radius | `--border-radius-card: 4px` |
| Font | `Cairo`, `Vazirmatn` |
| Shadow | `0 10px 25px rgba(16,32,66,.14)` + gold glow |

Alternating sections: `.section-pure-white` ↔ `.section-off-white` — distinct in dark mode too.

---

## 🌐 Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# drag & drop dist/ or connect GitHub repo
```

### GitHub Pages
```bash
npm run build
# set vite.config.js base: '/almutlee-new/' if needed
```

---

## 🔌 Roadmap → API Integration

Currently uses static `newsData.js`. To connect a CMS / REST API:

1. Replace `newsData` import with `fetch('/api/news')` in `App.jsx:34`
2. Add loading / error states
3. Keep same shape (`id`, `categoryId`, `title.ar/ku`, etc.) for zero UI changes
4. Optional: add pagination / infinite scroll per section

Ideas: Strapi, Directus, WordPress headless, or custom Node/Express.

---

## 🤝 Contributing

```bash
git checkout -b feat/my-feature
git commit -m "feat: add ..."
git push origin feat/my-feature
# open PR against main
```

- Use conventional commits (`feat:`, `fix:`, `style:`, `refactor:`)
- Keep RTL + dark mode intact when adding sections
- Test at 320px, 768px, 1024px, 1640px

---

## 📄 License

MIT — free for personal & commercial use.  
Copyright © 2026 **Almutlee News (المطلع)**.

---

## 📬 Contact

- **Publisher:** Almutlee News Agency — Baghdad, Iraq
- **License:** Iraqi Journalists Syndicate #1953
- **GitHub:** [@malkeahmed](https://github.com/malkeahmed)
- **Repo:** [github.com/malkeahmed/almutlee-new](https://github.com/malkeahmed/almutlee-new)
- **Issues:** [Report a bug / Request feature](https://github.com/malkeahmed/almutlee-new/issues)

---

<p align="center">
  <strong>المطلع — عينك على الحقيقة</strong><br/>
  <em>Crafted with passion in Baghdad · Navy & Gold · RTL Luxury</em>
</p>
