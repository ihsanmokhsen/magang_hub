# BPAD Magang Hub — Project Info

> Last updated: 17 June 2026
> Status: Live in production

---

## Overview

BPAD Magang Hub is a static web application (HTML/CSS/JS) serving as a digital onboarding platform for internship participants ("Sobat Magang") at BPAD Provinsi Nusa Tenggara Timur. The site provides institutional knowledge, internship rules, document references, a government terminology glossary, and an interactive quiz game.

---

## Production

| Detail | Value |
|--------|-------|
| **URL** | https://magang.bpadntt.cloud |
| **VPS** | Hostinger KVM 4, Ubuntu 22.04, Jakarta |
| **IP** | 212.85.26.65 |
| **Web Server** | Nginx (via aaPanel) |
| **SSL** | Let's Encrypt (managed via aaPanel) |
| **VPS Path** | `/www/wwwroot/magang` |
| **Nginx Config** | `/www/server/panel/vhost/nginx/magang.bpadntt.cloud.conf` |
| **Logs** | `/www/wwwlogs/magang.bpadntt.cloud.log` |
| **GitHub** | https://github.com/ihsanmokhsen/magang_hub |
| **Branch** | `main` |

---

## Tech Stack

- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript (no frameworks)
- **Font**: Inter (Google Fonts, weights 400/500/600/700/800)
- **PWA**: Service Worker (`sw.js`) + Web App Manifest (`manifest.json`)
- **SEO**: Meta tags, Open Graph, Twitter Cards, JSON-LD structured data, sitemap.xml, robots.txt
- **Accessibility**: WCAG-compliant skip links, ARIA roles, keyboard navigation, focus styles
- **Storage**: `localStorage` for quiz progress and document read tracking

---

## File Structure

```
magang_hub/
├── index.html              # Landing/welcome page with hero section + page loader
├── dashboard.html          # Main dashboard with 5 tabs
├── app.js                  # App logic: tabs, quiz, checklist, documents, localStorage
├── styles.css              # All styles (dark theme, responsive, animations)
├── sw.js                   # Service worker (network-first cache strategy)
├── manifest.json           # PWA manifest (installable web app)
├── robots.txt              # SEO: allow indexing, disallow dashboard
├── sitemap.xml             # SEO: XML sitemap
├── logo.png                # BPAD logo (used in hero, topbar, footer, loader)
├── fav.jpg                 # Favicon / PWA icon
├── magang.bpadntt.cloud.conf  # Nginx config (reference copy)
├── .gitignore              # Git ignore rules
└── README.md               # Project readme
```

---

## Pages & Tabs

### Landing Page (`index.html`)
- Hero section with BPAD branding
- "Mulai" button → loading transition → navigates to dashboard
- Page loader animation with logo float + domino spinner

### Dashboard (`dashboard.html`) — 5 Tabs

| Tab | Content |
|-----|---------|
| **Pengenalan** | BPAD profile, organizational structure (SOTK), 22 UPTD locations, leadership history, digital services (SIMARBPAD, PRO NTT, Samsat Online), PAD revenue sources |
| **Aturan** | Internship rules (7 sections), onboarding checklist (7 items with progress bar), FAQ (8 questions), practical tips for interns (5 sections) |
| **Dokumen** | Document grid with Google Drive links (RENSTRA, RPJMD, LKIP, SOTK), read-progress tracking with progress bar |
| **Glosarium** | 28 government term definitions across 4 categories: Pajak & Kendaraan, Keuangan Daerah, Kepegawaian & Organisasi, Dokumen & Perencanaan |
| **Game** | 26-question quiz on BPAD/government abbreviations and terms with score tracking |

---

## Data & Configuration (in `app.js`)

### Documents Array
4 documents with Google Drive links:
- RENSTRA, RPJMD, LKIP, SOTK

### Onboarding Checklist
7 items stored in `localStorage` key `bpad-checklist-progress-v1`:
1. Hadir sebelum 07.30
2. Lapor pembimbing
3. Pahami alur kerja
4. Baca dokumen awal
5. Simpan link laporan Tally
6. Pahami aturan
7. Kenal istilah dasar

### Quiz Data
26 multiple-choice questions covering:
- BPAD-specific terms (BPAD, UPTD, Bidang Pendapatan)
- Vehicle/tax terms (STNK, PKB, BBNKB, PBBKB, SAMSAT, BPKB)
- Government terms (OPD, DAU, DAK, APBD, ASN, CPNS, PPPK, SOTK, BUMD, SKPD)
- PAD and retribusi concepts

### localStorage Keys
| Key | Purpose |
|-----|---------|
| `bpad-doc-progress-v1` | Tracks which documents have been read |
| `bpad-checklist-progress-v1` | Tracks onboarding checklist completion |

---

## External Links

| Service | URL |
|---------|-----|
| Laporan Harian (Tally) | https://tally.so/r/682JGe |
| Google Drive docs | Linked in `app.js` documents array |

---

## CSS Design System

### Color Palette (Dark Theme)
| Variable | Value | Usage |
|----------|-------|-------|
| `--bg-0` | `#0b0f14` | Base background |
| `--bg-1` | `#0e1117` | Secondary background |
| `--panel` | `#161b22` | Panel/card background |
| `--primary` | `#2dd4bf` | Teal accent (buttons, highlights) |
| `--secondary` | `#38bdf8` | Sky blue (eyebrow text, borders) |
| `--text` | `#e5e7eb` | Primary text |
| `--muted` | `#9ca3af` | Muted/secondary text |
| `--ok` | `#22c55e` | Correct/success state |
| `--warn` | `#ef4444` | Error/wrong state |

### Key CSS Features
- CSS custom properties (variables) for theming
- Responsive grid layouts (auto-fit, minmax)
- Backdrop blur + glassmorphism panels
- Gradient backgrounds with radial overlays
- CSS grid pattern overlay on body
- Sticky topbar and tab navigation
- Smooth animations: `drift`, `rise`, `fadeSlide`, `dominos`, `floatLogo`
- Mobile breakpoints: 920px (tablet), 620px (phone)

---

## Deployment Workflow

### Update Existing Content
```bash
# 1. Local: make changes
# 2. Commit and push
git add .
git commit -m "description of change"
git push origin main

# 3. VPS: pull latest
ssh root@212.85.26.65
cd /www/wwwroot/magang
git pull origin main
```

### Adding New Quiz Questions
Edit the `quizData` array in `app.js`. Each question object:
```javascript
{
  question: 'Question text?',
  options: ['Correct answer', 'Wrong option B', 'Wrong option C'],
  answer: 0,  // index of correct answer (0-based)
}
```

### Adding New Documents
Edit the `documents` array in `app.js`. Each document object:
```javascript
{
  title: 'Document Title',
  description: 'Brief description.',
  link: 'https://drive.google.com/...',
}
```

### Adding New Glossary Terms
Add a new `<div class="glossary-item">` inside the appropriate `<div class="glossary-grid">` in the Glosarium tab of `dashboard.html`:
```html
<div class="glossary-item"><strong>TERM</strong><p>Definition text.</p></div>
```

### Adding New Checklist Items
Edit the `onboardingChecklistItems` array in `app.js`:
```javascript
{ id: 'unique-id', label: 'Checklist item text.' }
```

### Updating Service Worker Cache
After updating any file, bump the `CACHE_NAME` version in `sw.js`:
```javascript
const CACHE_NAME = 'bpad-magang-hub-v2';  // increment version
```
Also add new files to the `ASSETS_TO_CACHE` array if applicable.

### Updating PWA Manifest
Edit `manifest.json` for app name, colors, icons, etc.

---

## Nginx Configuration Notes

The Nginx config at `/www/server/panel/vhost/nginx/magang.bpadntt.cloud.conf` includes:
- **Security headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-XSS-Protection
- **Gzip**: Enabled for text/CSS/JS/JSON/SVG
- **Caching**: CSS/JS = 7 days, images = 30 days, service worker = no-cache
- **Blocked**: Hidden files (dotfiles), `.git`, `.env`, `.md` files
- **Fallback**: `try_files $uri $uri/ /index.html`
- **SSL**: Managed by aaPanel (Let's Encrypt + Force HTTPS)

### Important: aaPanel Nginx Gotcha
aaPanel may auto-inject `error_page 404 /404.html;` into site configs. For this static site it's harmless, but if you ever add custom error pages, check the config.

After any nginx config changes:
```bash
/www/server/nginx/sbin/nginx -t    # test
/www/server/nginx/sbin/nginx -s reload  # apply
```

---

## SEO Configuration

| File | Purpose |
|------|---------|
| `index.html` `<head>` | Meta description, OG tags, Twitter cards, JSON-LD, canonical URL |
| `dashboard.html` `<head>` | `noindex, nofollow` (internal page, not for search engines) |
| `robots.txt` | Allow all crawlers, disallow dashboard, point to sitemap |
| `sitemap.xml` | Single URL entry for the landing page |

### Domain References
All absolute URLs reference `https://magang.bpadntt.cloud`. If the domain changes, update:
1. `<link rel="canonical">` in `index.html`
2. All `og:url`, `og:image`, `twitter:image` meta tags in `index.html`
3. `robots.txt` sitemap URL
4. `sitemap.xml` URL
5. JSON-LD `url` field in `index.html`

---

## Known Limitations / Future Ideas

- [ ] Add dark/light theme toggle
- [ ] Add search functionality in Glosarium
- [ ] Add more document links as they become available
- [ ] Add admin mode for content editing (would require backend)
- [ ] Add analytics (Google Analytics or Plausible)
- [ ] Add print-friendly styles for Aturan tab
- [ ] Generate proper PWA icons (192x192, 512x512) instead of reusing fav.jpg
- [ ] Add multi-language support (English)
- [ ] Add progress persistence across devices (would require backend/auth)
