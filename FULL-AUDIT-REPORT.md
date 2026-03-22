# Vidl Companies -- Full SEO Audit Report

**Site:** https://vidl-companies.pages.dev/
**Date:** 2026-03-22
**Business Type:** Boutique Real Estate (Brokerage, Development, Consulting, Venture Capital)
**Market:** Phoenix / Scottsdale, Arizona
**Platform:** Webflow export on Cloudflare Pages

---

## SEO Health Score: 38/100

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 42/100 | 25% | 10.5 |
| Content Quality | 52/100 | 25% | 13.0 |
| On-Page SEO | 51/100 | 20% | 10.2 |
| Schema / Structured Data | 0/100 | 10% | 0.0 |
| Performance (CWV) | 30/100 | 10% | 3.0 |
| Images | 25/100 | 5% | 1.3 |
| AI Search Readiness | 35/100 | 5% | 1.8 |
| **TOTAL** | | **100%** | **38/100** |

---

## Executive Summary

Vidl Companies has a visually polished Webflow site with clean static HTML architecture (great for crawlability), but suffers from severe SEO deficiencies across almost every category. The site is essentially invisible to search engines in its current state.

### Top 5 Critical Issues

1. **Broken contact information on every page** -- mobile nav emails point to wrong company (`info@vestal.com`) and contain a typo (`vidlecompanies`). A leftover "Vestal" brand name appears on the about page.
2. **No robots.txt, sitemap.xml, or canonical tags** -- search engines have no crawl directives, no page map, and no duplicate content signals.
3. **Zero structured data** -- no JSON-LD, Microdata, or RDFa on any page. The business entity is invisible to knowledge graphs and AI systems.
4. **LCP estimated at 5-8 seconds (POOR)** -- a 2.3-second loading spinner, lazy-loaded hero image, and 18 unnecessary font weights combine to devastate page load.
5. **Critically thin content** -- developments page has ~40 words; service pages have ~300 words each (need 800+); no testimonials, case studies, or physical address anywhere.

### Top 5 Quick Wins

1. Fix the email typos and "Vestal" references (30 minutes)
2. Create `robots.txt` and `sitemap.xml` (30 minutes)
3. Add canonical tags to all pages (30 minutes)
4. Remove/shorten the 1.8-second loader delay (10 minutes)
5. Change hero logo from `loading="lazy"` to `loading="eager"` (5 minutes)

---

## Site Inventory

14 indexable pages discovered:

| Page | Title | Meta Desc | H1 | Schema |
|------|-------|-----------|----|--------|
| `/` (index.html) | Good (60 chars) | Good | Weak (tagline) | None |
| `/about.html` | Good (65 chars) | Good | **MISSING** | None |
| `/team.html` | **FAIL** ("Team") | **MISSING** | Good | None |
| `/developments.html` | Good (61 chars) | Good | **MISSING** | None |
| `/contact.html` | Good (66 chars) | Good | Acceptable | None |
| `/process.html` | Good (73 chars) | Good | Good | None |
| `/portfolio.html` | Weak (generic) | **MISSING** | Unknown | None |
| `/services/brokerage.html` | Good (40 chars) | Good | Good | None |
| `/services/consulting.html` | Good (51 chars) | Good | Good | None |
| `/services/development.html` | Good (38 chars) | Good | Good | None |
| `/services/venture-capital.html` | Good | Good | Unknown | None |
| `/services/philanthropy.html` | Good | Good | Unknown | None |
| `/privacy-policy.html` | Unknown | **MISSING** | Unknown | None |
| `/terms-of-service.html` | Unknown | **MISSING** | Unknown | None |

---

## 1. Technical SEO (42/100)

### Critical
- **No robots.txt** -- crawlers have no directives; AI crawlers (GPTBot, ClaudeBot) are unmanaged
- **No sitemap.xml** -- 14 pages with zero sitemap discoverability
- **No canonical tags** on any page -- major duplicate content risk (especially if a custom domain also points here)

### High
- **No og:url, og:image, or twitter:image** on any page -- broken social sharing
- **No `_headers` file** -- missing HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- **No structured data** -- no Organization, LocalBusiness, or Service schema
- **130 images with empty alt text** -- brand logos and portfolio photos need descriptive alt

### Medium
- 5 pages missing meta descriptions (team, 404, portfolio, privacy-policy, terms-of-service)
- `team.html` has generic title "Team" with no brand name
- All URLs use `.html` extensions (modern practice prefers clean URLs)
- No `_redirects` file
- Footer has placeholder `href="#"` links ("Location 1", "Location 2")

### Positive
- All content is static HTML (excellent crawlability, no JS rendering issues)
- Viewport meta tag on every page
- Responsive CSS with proper breakpoints
- Lightweight vanilla JS (no jQuery)
- Unique titles on most pages
- Custom 404 page exists

---

## 2. Content Quality (52/100)

### E-E-A-T Composite: 55/100

| Factor | Score |
|--------|-------|
| Experience | 14/20 |
| Expertise | 15/25 |
| Authoritativeness | 10/25 |
| Trustworthiness | 16/30 |

### Critical Bugs & Errors

1. **Wrong email:** `mailto:info@vestal.com` in mobile nav on EVERY page (wrong company)
2. **Email typo:** "andrew@vidlecompanies.com" displayed on EVERY page (extra "e")
3. **Brand leak:** "Vestal collaborates with forward-thinking brands..." on about page
4. **Placeholder text:** "Location 1" / "Location 2" with `href="#"` in footer on EVERY page
5. **Typo:** "experiencial" on developments page (should be "experiential")
6. **Grammar:** "All right reserved" in footer (should be "All rights reserved")

### Thin Content

| Page | Word Count | Minimum Needed | Status |
|------|-----------|----------------|--------|
| Developments | ~40 | 500 | **CRITICALLY THIN** |
| About | ~250 | 500+ | FAIL |
| Brokerage | ~300 | 800 | FAIL |
| Consulting | ~300 | 800 | FAIL |
| Development | ~300 | 800 | FAIL |
| Process | ~650 | 800 | FAIL |
| Homepage | ~550 | 500 | PASS (marginal) |

### Missing Trust Signals
- No physical office address anywhere on the site
- No phone number anywhere on the site
- No client testimonials or quotes
- No case studies with measurable outcomes
- No industry certifications (CCIM, SIOR, CPM)
- No external press mentions or awards
- No Google Business Profile
- Duplicate mission statement on homepage (same text appears twice)

### Heading Hierarchy Issues
- **About page:** No H1 tag
- **Developments page:** No H1 tag
- **Homepage H1:** Aspirational tagline, not descriptive ("CRAFT THE EXTRAORDINARY // experience the phenomenal")
- **Service pages:** H1 jumps to H3 (skipping H2), then H2 used only for CTA
- Many content sections use `div` with CSS classes instead of semantic heading elements

### Internal Linking Gaps
- Service pages not in main navigation (only accessible from homepage cards)
- Process page not in main navigation
- No cross-linking between service pages
- About and Team pages don't link to each other
- No breadcrumb navigation
- Portfolio page hidden but still linked from homepage

---

## 3. Schema / Structured Data (0/100)

**Zero structured data exists on any page.**

10 JSON-LD blocks recommended:
1. **RealEstateAgent** (Organization) -- homepage/sitewide
2. **WebSite** -- homepage
3. **WebPage** -- homepage
4. **AboutPage** -- about page
5. **ContactPage** -- contact page
6. **WebPage** -- developments, team pages
7. **Person** (x3) -- Andrew LaPorte, Jaini Doffing, Ty Brewster on team page
8. **Service** (x3) -- brokerage, consulting, development pages
9. **BreadcrumbList** -- all pages

Full JSON-LD code blocks are available in `seo-schema-report.md`.

---

## 4. Performance / Core Web Vitals (30/100)

| Metric | Estimated Status | Risk |
|--------|-----------------|------|
| **LCP** | POOR (5-8s on homepage) | HIGH |
| **INP** | GOOD (<100ms) | LOW |
| **CLS** | NEEDS IMPROVEMENT (0.1-0.25) | MEDIUM |

### LCP Issues (Critical)
1. **Loading spinner** delays content visibility by 2.3 seconds (1800ms timeout + 500ms fade) AFTER page load
2. **Hero logo** uses `loading="lazy"` -- should be `loading="eager"` with `fetchpriority="high"`
3. **Video poster** set via CSS `background-image` instead of `poster` attribute (not discoverable early)
4. **No preload hints** for LCP candidates (video poster, hero images)
5. **5 below-fold service card images** use `loading="eager"` (competing with hero for bandwidth)
6. **Developments hero** is PNG format (up to 3024px) -- should be WebP/AVIF
7. **Google Fonts loads 18 Montserrat weights** when only 4 are used (massive render-blocking overhead)
8. **3 render-blocking CSS files** loaded synchronously

### CLS Issues (High)
- Every `<img>` tag on the site lacks `width` and `height` attributes
- Font swap with `display=swap` causes FOUT layout shift
- Oversized srcsets (VIDL logo serves up to 4109px; logos serve up to 2560px)

### INP (Good)
- Vanilla JS, IntersectionObserver animations, no heavy frameworks
- Lenis smooth scroll is the heaviest library but well-optimized

---

## 5. Images (25/100)

- **130 images with empty `alt=""`** across the site (brand logos, portfolio images need descriptive alt)
- **No `width`/`height` attributes** on any images (causes CLS)
- **Mixed formats:** Most photos are WebP (good), but hero images and many logos are PNG (bad)
- **Oversized images:** VIDL logo serves 4109px, client logos up to 2560px
- **Broken srcsets:** Some images declare the same file for multiple breakpoints (no responsive benefit)

---

## 6. AI Search Readiness (35/100)

| Signal | Status |
|--------|--------|
| Quotable facts with numbers | Partial ("$1B in transactional volume" only) |
| Structured data | None |
| Clear content hierarchy | Partial (service/process pages OK; homepage/about poor) |
| FAQ format | None |
| Named entities | Present (people, places, brands) |
| Publication dates | None |
| Author attribution | None |
| External references | None |
| Original data/research | None |

---

## 7. Visual & Mobile Analysis

### Desktop
- Hero video renders well with full-width layout
- Service cards have clean hover effects
- Excessive whitespace between sections on homepage
- Custom cursor (`cursor: none !important`) hides native cursor -- accessibility concern

### Mobile
- Responsive layout stacks properly at all breakpoints
- Contact form has good touch targets
- Navigation hamburger menu works correctly
- Text is readable at mobile sizes
- Footer sitemap links are properly tappable

### Issues
- Homepage has large empty gaps between content sections (possible GSAP/animation artifacts)
- About page image doesn't appear on initial mobile load (lazy-loaded below fold)
- No visual breadcrumbs on any page

---

## Detailed Reports

Individual specialist reports with full code recommendations:
- `seo-technical-report.md` -- Crawlability, indexability, security, URL structure
- `seo-content-report.md` -- E-E-A-T, readability, thin content, heading hierarchy
- `seo-schema-report.md` -- Full JSON-LD code blocks for all 10 recommended schemas
- `seo-sitemap-report.md` -- Sitemap/robots.txt analysis with recommended XML
- `seo-performance-report.md` -- Core Web Vitals, resource optimization, font loading
- `screenshots/` -- Desktop and mobile captures of homepage, about, and contact pages
