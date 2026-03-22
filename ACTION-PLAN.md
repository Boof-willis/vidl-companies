# Vidl Companies -- SEO Action Plan

**Current Score: 38/100**
**Target Score: 75/100** (achievable with Phase 1-3)

---

## Phase 1: Fix Broken Elements (Critical -- Do Immediately)

*Estimated time: 2-3 hours | Expected score impact: +8 points*

### 1.1 Fix Contact Information Errors
- [ ] Replace `mailto:info@vestal.com` with `mailto:andrew@vidlcompanies.com` in mobile nav on ALL pages
- [ ] Fix display email typo from "andrew@vidlecompanies.com" to "andrew@vidlcompanies.com" on ALL pages
- [ ] Replace "Vestal collaborates with forward-thinking brands..." with "Vidl collaborates..." on about.html
- [ ] Fix "experiencial" to "experiential" on developments.html
- [ ] Fix "All right reserved" to "All rights reserved" in footer on ALL pages

### 1.2 Fix Performance Blockers
- [ ] Change `loading="lazy"` to `loading="eager"` on hero logo in index.html (line ~377)
- [ ] Add `fetchpriority="high"` to hero logo image
- [ ] Reduce loader `setTimeout` from 1800 to 200 (or remove loader entirely) in `js/site.js` (line ~57)
- [ ] Change 5 service card images from `loading="eager"` to `loading="lazy"` on index.html
- [ ] Use `poster` attribute on hero `<video>` instead of CSS `background-image`

### 1.3 Create Essential SEO Files
- [ ] Create `robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://vidl-companies.pages.dev/sitemap.xml
  ```
- [ ] Create `sitemap.xml` with all 14 indexable pages (see seo-sitemap-report.md for full XML)
- [ ] Add `<link rel="canonical" href="...">` to every page's `<head>`

---

## Phase 2: On-Page SEO Foundations (High -- Week 1)

*Estimated time: 4-6 hours | Expected score impact: +12 points*

### 2.1 Fix Title Tags & Meta Descriptions
- [ ] team.html: Change `<title>Team</title>` to `<title>Our Team | Vidl Companies -- Real Estate Leadership</title>`
- [ ] team.html: Add meta description
- [ ] portfolio.html: Add brand name to title and add meta description
- [ ] privacy-policy.html: Add meta description
- [ ] terms-of-service.html: Add meta description

### 2.2 Fix Heading Hierarchy
- [ ] about.html: Add H1 (e.g., `<h1>About Vidl Companies</h1>`)
- [ ] developments.html: Add H1 (e.g., `<h1>Vidl Developments</h1>`)
- [ ] Homepage: Revise H1 to include "Vidl Companies" and a service descriptor
- [ ] Service pages: Promote H3 feature titles to H2 (fix heading level skip)
- [ ] Remove duplicate mission statement from homepage (section-2 repeats section content)

### 2.3 Add Social Meta Tags
- [ ] Create 1200x630 OG image for the site
- [ ] Add `og:url`, `og:image`, `twitter:image` to ALL pages

### 2.4 Fix Placeholder Content
- [ ] Remove or populate "Location 1" / "Location 2" in footer
- [ ] Add physical office address to contact page and footer
- [ ] Add phone number to contact page and footer

### 2.5 Security Headers
- [ ] Create `_headers` file for Cloudflare Pages:
  ```
  /*
    X-Frame-Options: SAMEORIGIN
    X-Content-Type-Options: nosniff
    Referrer-Policy: strict-origin-when-cross-origin
    Permissions-Policy: camera=(), microphone=(), geolocation=()
    Strict-Transport-Security: max-age=31536000; includeSubDomains
  ```

---

## Phase 3: Structured Data & Performance (High -- Weeks 1-2)

*Estimated time: 4-6 hours | Expected score impact: +15 points*

### 3.1 Add Schema Markup (JSON-LD)
- [ ] Homepage: Add RealEstateAgent (Organization) + WebSite + WebPage schemas
- [ ] About page: Add AboutPage schema with BreadcrumbList
- [ ] Team page: Add Person schema for all 3 team members
- [ ] Contact page: Add ContactPage schema with BreadcrumbList
- [ ] Service pages (x3): Add Service schema with OfferCatalog + BreadcrumbList
- [ ] Developments page: Add WebPage schema with BreadcrumbList

*(Full JSON-LD code blocks in seo-schema-report.md -- copy/paste ready)*

### 3.2 Optimize Fonts
- [ ] Reduce Google Fonts to: `Montserrat:wght@400;500;600;700&family=Inter+Tight:wght@300;400;500;600;700`
- [ ] Consider self-hosting fonts as WOFF2 (eliminates 2 third-party DNS lookups)
- [ ] Preload primary font file

### 3.3 Optimize Images
- [ ] Add `width` and `height` attributes to ALL `<img>` tags
- [ ] Convert PNG hero images to WebP (especially developments hero at 3024px)
- [ ] Add descriptive alt text to all brand logos and meaningful images
- [ ] Cap logo images at 800px max width in srcsets
- [ ] Self-host Lenis library (eliminate 1 more third-party origin)

### 3.4 Navigation & Internal Linking
- [ ] Add service pages to main navigation (consider "Services" dropdown)
- [ ] Add process page to main navigation
- [ ] Add cross-links between service pages
- [ ] Add breadcrumb navigation to all inner pages

---

## Phase 4: Content Expansion (Medium -- Weeks 2-6)

*Estimated time: 20-30 hours | Expected score impact: +10 points*

### 4.1 Expand Thin Content
- [ ] **Developments page:** Expand from ~40 to 500+ words (project descriptions, timelines, square footage, URBNPHX partnership details)
- [ ] **Service pages (x3):** Expand from ~300 to 800+ words each (specific deal examples, FAQs, Arizona market context)
- [ ] **About page:** Expand from ~250 to 500+ words (founding year, milestones, transaction metrics, geographic footprint)
- [ ] **Process page:** Expand from ~650 to 800+ words (deeper methodology detail)

### 4.2 Add Trust Signals
- [ ] Add 3-5 client testimonials with named individuals and companies
- [ ] Create 2-3 case studies with measurable outcomes
- [ ] Add industry certifications/memberships (CCIM, SIOR, NAIOP Arizona, ICSC)
- [ ] Link to press mentions, media coverage, or speaking engagements
- [ ] Set up Google Business Profile

---

## Phase 5: AI Search Readiness & Advanced SEO (Low -- Weeks 6-10)

*Estimated time: 10-15 hours | Expected score impact: +5 points*

### 5.1 AI Citation Optimization
- [ ] Write a clean, definitive company description sentence for AI extraction
- [ ] Add FAQ sections to service pages
- [ ] Add publication dates and "last updated" timestamps to content pages
- [ ] Add author attribution to content

### 5.2 Advanced Technical
- [ ] Implement IndexNow for Bing/Yandex instant indexing
- [ ] Consider clean URLs (remove .html extensions)
- [ ] Inline critical CSS and async-load remaining stylesheets
- [ ] Add `font-display: optional` or font metric overrides to reduce CLS
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor CrUX data once traffic warrants

### 5.3 Content Marketing Foundation
- [ ] Create blog/resources section for Arizona commercial real estate insights
- [ ] Publish original market reports or data
- [ ] Add author bios and bylines to content

---

## Priority Definitions

| Priority | Meaning | Timeline |
|----------|---------|----------|
| **Critical** | Blocks indexing, damages credibility, or causes penalties | Fix immediately |
| **High** | Significantly impacts rankings or user experience | Fix within 1 week |
| **Medium** | Optimization opportunity with measurable impact | Fix within 1 month |
| **Low** | Nice to have, incremental improvement | Backlog |

---

## Score Projection

| After Phase | Estimated Score | Key Gains |
|-------------|----------------|-----------|
| Current | 38/100 | -- |
| Phase 1 | 46/100 | Fixed bugs, crawlability basics, LCP improvement |
| Phase 2 | 58/100 | On-page SEO, social meta, security headers |
| Phase 3 | 73/100 | Schema markup, image/font optimization, navigation |
| Phase 4 | 83/100 | Content depth, trust signals |
| Phase 5 | 88/100 | AI readiness, advanced technical |
