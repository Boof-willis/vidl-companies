# Technical SEO Audit Report
## vidl-companies.pages.dev
**Date:** 2026-03-22
**Overall Technical Score: 42 / 100**

---

## Executive Summary

The Vidl Companies website has strong foundational HTML (semantic markup, viewport meta, unique titles on most pages) but suffers from several critical and high-priority SEO gaps: no robots.txt, no sitemap.xml, no canonical tags, no structured data, no security headers configuration, 130 images with empty alt text, and missing meta descriptions on 4 pages. The site is built as static HTML (good for crawlability) but lacks many technical SEO essentials needed for competitive indexing.

---

## 1. Crawlability

| Check | Status | Notes |
|-------|--------|-------|
| robots.txt | FAIL | No robots.txt file exists in the project |
| sitemap.xml | FAIL | No sitemap.xml file exists in the project |
| Meta robots / noindex | PASS | No noindex or nofollow tags found on any page |
| Internal linking | PASS | Consistent nav structure across all pages; footer sitemap links present |
| 404 page | PASS | Custom 404.html exists |

### Issues

**[CRITICAL] No robots.txt file**
- Search engines have no crawl directives
- AI crawlers (GPTBot, ClaudeBot, Google-Extended, etc.) are not managed
- Recommendation: Create `/robots.txt` with:
```
User-agent: *
Allow: /

Sitemap: https://vidl-companies.pages.dev/sitemap.xml
```
- Consider adding blocks for AI crawlers if desired:
```
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /
```

**[CRITICAL] No sitemap.xml**
- Search engines cannot discover all pages efficiently
- Recommendation: Create `/sitemap.xml` listing all 14 HTML pages with `<lastmod>` dates. Example:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://vidl-companies.pages.dev/</loc></url>
  <url><loc>https://vidl-companies.pages.dev/about.html</loc></url>
  <url><loc>https://vidl-companies.pages.dev/team.html</loc></url>
  <url><loc>https://vidl-companies.pages.dev/developments.html</loc></url>
  <url><loc>https://vidl-companies.pages.dev/contact.html</loc></url>
  <url><loc>https://vidl-companies.pages.dev/process.html</loc></url>
  <url><loc>https://vidl-companies.pages.dev/portfolio.html</loc></url>
  <url><loc>https://vidl-companies.pages.dev/services/brokerage.html</loc></url>
  <url><loc>https://vidl-companies.pages.dev/services/consulting.html</loc></url>
  <url><loc>https://vidl-companies.pages.dev/services/development.html</loc></url>
  <url><loc>https://vidl-companies.pages.dev/services/venture-capital.html</loc></url>
  <url><loc>https://vidl-companies.pages.dev/services/philanthropy.html</loc></url>
  <url><loc>https://vidl-companies.pages.dev/privacy-policy.html</loc></url>
  <url><loc>https://vidl-companies.pages.dev/terms-of-service.html</loc></url>
</urlset>
```

---

## 2. Indexability

| Check | Status | Notes |
|-------|--------|-------|
| Canonical tags | FAIL | No `<link rel="canonical">` on ANY page |
| Unique titles | WARN | "Team" page has a generic, non-descriptive title |
| Meta descriptions | WARN | Missing on 4 pages: team.html, 404.html, portfolio.html, privacy-policy.html, terms-of-service.html |
| og:url | FAIL | Missing on ALL pages |
| og:image / twitter:image | FAIL | Missing on ALL pages |
| Duplicate content risk | WARN | pages.dev domain may be indexed alongside a production domain |

### Issues

**[CRITICAL] No canonical tags on any page**
- Without canonical tags, search engines may index duplicate URLs (with/without trailing slash, with query params, etc.)
- If the site also runs on a custom domain, the pages.dev version creates duplicate content
- Recommendation: Add to every page's `<head>`:
```html
<link rel="canonical" href="https://vidl-companies.pages.dev/index.html">
```
(Use the appropriate URL for each page)

**[HIGH] Missing og:url on all pages**
- Social sharing will not resolve to the correct URL
- Add `<meta property="og:url" content="https://vidl-companies.pages.dev/">` to each page

**[HIGH] Missing og:image and twitter:image on all pages**
- Social shares will have no preview image
- Recommendation: Create a 1200x630 OG image and add:
```html
<meta property="og:image" content="https://vidl-companies.pages.dev/images/og-image.jpg">
<meta name="twitter:image" content="https://vidl-companies.pages.dev/images/og-image.jpg">
```

**[MEDIUM] Missing meta descriptions on 5 pages**
- `team.html` -- no meta description at all; title is just "Team"
- `404.html` -- no meta description
- `portfolio.html` -- no meta description
- `privacy-policy.html` -- no meta description
- `terms-of-service.html` -- no meta description

**[MEDIUM] Generic page title: team.html**
- Current: `<title>Team</title>`
- Recommended: `<title>Our Team | Vidl Companies -- Leadership & Real Estate Experts</title>`
- Also missing og:description and twitter:description

---

## 3. Security

| Check | Status | Notes |
|-------|--------|-------|
| HTTPS | PASS | Cloudflare Pages enforces HTTPS by default |
| _headers file | FAIL | No `_headers` file for security headers |
| HSTS | UNKNOWN | Cloudflare may add this; no custom config found |
| Content-Security-Policy | FAIL | Not configured |
| X-Frame-Options | FAIL | Not configured |
| X-Content-Type-Options | FAIL | Not configured |
| Referrer-Policy | FAIL | Not configured |
| Permissions-Policy | FAIL | Not configured |

### Issues

**[HIGH] No security headers configuration**
- Cloudflare Pages supports a `_headers` file in the project root
- Recommendation: Create `/_headers`:
```
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; media-src 'self'; connect-src 'self'
  Strict-Transport-Security: max-age=31536000; includeSubDomains
```

---

## 4. URL Structure

| Check | Status | Notes |
|-------|--------|-------|
| Clean URLs | WARN | All URLs use `.html` extensions |
| Trailing slash consistency | PASS | No inconsistency detected in links |
| Internal link consistency | PASS | All internal links use relative paths consistently |
| Redirect configuration | FAIL | No `_redirects` file exists |
| Broken link candidates | WARN | Footer has placeholder `href="#"` links for "Location 1" and "Location 2" |

### Issues

**[MEDIUM] .html file extensions in all URLs**
- Modern best practice prefers clean URLs without extensions (e.g., `/about` instead of `/about.html`)
- Cloudflare Pages can serve `about.html` at `/about` if configured
- Not critical but affects URL aesthetics and shareability

**[LOW] Placeholder links in footer**
- `index.html` lines 846-865: Two links with `href="#"` labeled "Location 1" and "Location 2"
- These are inside a `hide` class div, so they may be intentionally hidden, but crawlers will still discover them

---

## 5. Mobile Optimization

| Check | Status | Notes |
|-------|--------|-------|
| Viewport meta tag | PASS | Present on all pages: `width=device-width, initial-scale=1` |
| Responsive CSS | PASS | Media queries at 991px and 479px breakpoints |
| Touch targets | WARN | Custom cursor disables native cursor on desktop; no issue on mobile |
| Font sizing | PASS | Relative units used throughout |
| Mobile nav | PASS | Hamburger menu with toggle implemented in site.js |

### Issues

**[LOW] Custom cursor hides native cursor on desktop**
- CSS rule `cursor: none !important` on all elements above 1025px
- Not a mobile SEO issue, but may cause accessibility concerns for users who rely on visible cursors
- The `!important` declaration makes this impossible to override without removing the rule

---

## 6. Core Web Vitals (Source-Level Indicators)

### LCP (Largest Contentful Paint) Concerns

| Check | Status | Notes |
|-------|--------|-------|
| Hero image/video loading | WARN | Hero video loads eagerly but has no preload hint |
| Render-blocking CSS | WARN | 3 CSS files + Google Fonts loaded synchronously in `<head>` |
| Large inline styles | WARN | Significant inline `<style>` blocks in every page (duplicated) |
| LCP candidate preloading | FAIL | No `<link rel="preload">` for LCP assets |

**[HIGH] No preloading of LCP candidates**
- The homepage hero is a background video (`videos/vidl-home-transcode.mp4`). No `<link rel="preload" as="video">` or poster preload exists.
- Service pages use hero background images with no preload hints.
- Recommendation: Add preload for the LCP element on each page:
```html
<link rel="preload" as="video" href="videos/vidl-home-transcode.mp4" type="video/mp4">
```
For image-based hero pages:
```html
<link rel="preload" as="image" href="../images/hero-image.webp">
```

**[HIGH] Render-blocking resources**
- 3 CSS files loaded synchronously: `normalize.css`, `webflow.css`, `vidl-website.webflow.css`
- Google Fonts loaded synchronously via `<link rel="stylesheet">`
- Recommendation: Add `media="print" onload="this.media='all'"` to non-critical CSS, or inline critical CSS and defer the rest.

**[MEDIUM] Large loader animation blocks rendering**
- A full-screen loader (`div.loader`) is displayed for 1.8 seconds (hardcoded `setTimeout` of 1800ms in site.js line 57-64)
- This artificially delays LCP by nearly 2 seconds on every page load
- Recommendation: Remove or significantly reduce the loader duration; consider removing it entirely for returning visitors using `sessionStorage`

### INP (Interaction to Next Paint) Concerns

| Check | Status | Notes |
|-------|--------|-------|
| JavaScript size | PASS | site.js is custom, lightweight, no jQuery |
| Event handlers | PASS | Uses passive scroll listeners |
| Third-party scripts | PASS | Only Lenis smooth-scroll library loaded |
| Input responsiveness | PASS | No heavy click handlers detected |

**[LOW] Lenis smooth scroll library**
- Loaded from CDN: `https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.23/bundled/lenis.min.js`
- Uses `requestAnimationFrame` loop constantly running, which could affect INP on lower-end devices
- Not likely a major issue but worth monitoring in field data

### CLS (Cumulative Layout Shift) Concerns

| Check | Status | Notes |
|-------|--------|-------|
| Image dimensions | FAIL | No width/height attributes on most images |
| Layout reservations | WARN | Images rely on CSS `object-fit: cover` without explicit dimensions |
| Font loading | WARN | Google Fonts with `display=swap` can cause FOUT (Flash of Unstyled Text) |
| Dynamic content | WARN | Scroll animations move elements from off-position to final position |

**[HIGH] No explicit width/height on images**
- 130 images across the site have `alt=""` (empty alt text)
- More critically, images lack `width` and `height` attributes -- only 11 instances of width/height attributes found across index.html, most of which are SVG viewbox attributes, not `<img>` dimensions
- This prevents browsers from reserving layout space before images load, directly causing CLS
- Recommendation: Add `width` and `height` attributes to all `<img>` tags

**[MEDIUM] Font swap CLS risk**
- Google Fonts loaded with `display=swap`, which causes layout shift when custom fonts replace fallback fonts
- Loading 19 Montserrat weights (100-900, italic+normal) is excessive and increases font download time
- Recommendation: Reduce to only the weights actually used (300, 400, 500, 600, 700 appear used) and consider `font-display: optional` to eliminate shift

---

## 7. Structured Data

| Check | Status | Notes |
|-------|--------|-------|
| JSON-LD | FAIL | No structured data on any page |
| Schema.org | FAIL | No schema markup detected |
| Organization | FAIL | Not present |
| LocalBusiness | FAIL | Not present |
| BreadcrumbList | FAIL | Not present |

### Issues

**[HIGH] No structured data on any page**
- A real estate company should have at minimum:
  - `Organization` schema on the homepage
  - `LocalBusiness` schema with address, phone, service area
  - `BreadcrumbList` for navigation hierarchy
  - `Service` schema on service pages
  - `ContactPage` schema on the contact page
- Recommendation: Add JSON-LD to each page. Example for homepage:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Vidl Companies",
  "description": "Boutique real estate firm specializing in experiential business through brokerage, development, consulting, and venture capital.",
  "url": "https://vidl-companies.pages.dev/",
  "areaServed": ["Phoenix", "Scottsdale", "Arizona"],
  "serviceType": ["Commercial Real Estate Brokerage", "Strategic Consulting", "Boutique Development", "Venture Capital Relations"]
}
</script>
```

---

## 8. JavaScript Rendering

| Check | Status | Notes |
|-------|--------|-------|
| SSR vs CSR | PASS | Static HTML -- all content is server-rendered |
| JS dependency for content | PASS | Content is in the HTML; JS handles animations only |
| JS files | PASS | Only 2 JS files: Lenis (CDN) + site.js |
| jQuery dependency | PASS | No jQuery -- custom vanilla JS used |

**Assessment: GOOD** -- The site is fully static HTML. All content is crawlable without JavaScript execution. JavaScript is used only for animations, smooth scrolling, and UI interactions. No content is client-side rendered.

---

## 9. IndexNow Protocol

| Check | Status | Notes |
|-------|--------|-------|
| IndexNow API key | FAIL | Not implemented |
| Bing Webmaster Tools | UNKNOWN | No verification meta tag found |
| Yandex verification | FAIL | Not present |
| Naver verification | FAIL | Not present |

**[LOW] IndexNow not configured**
- IndexNow allows instant URL submission to Bing, Yandex, and Naver
- For a Cloudflare Pages site, this could be triggered via Cloudflare Workers on deploy
- Recommendation: Generate an IndexNow key and add it as a text file at the root

---

## 10. Additional Findings

### Image Optimization

**[HIGH] 130 images with empty alt text across the site**
- Distribution: index.html (38), about.html (23), portfolio.html (17), developments.html (16), plus others
- Many of these are brand logos in the client carousel and background images
- Decorative images can use `alt=""` but meaningful images (logos, portfolio photos) NEED descriptive alt text
- Recommendation: Audit all images and add descriptive alt text to non-decorative images. Logo images especially should have the brand name as alt text.

### Excessive Font Weights

**[MEDIUM] Loading 19 Montserrat weights**
- The Google Fonts URL loads weights 100-900 in both normal and italic
- Only a subset appears to be used (300, 400, 500, 600, 700)
- This significantly increases page weight and delays font rendering
- Recommendation: Trim to: `Montserrat:wght@300;400;500;600;700`

### Duplicated Inline CSS

**[MEDIUM] Large blocks of identical CSS duplicated across every page**
- The cursor, Lenis, and font-smoothing styles (~70 lines) are copy-pasted into every HTML file's `<style>` block
- Recommendation: Move shared styles to the external CSS file to reduce HTML payload and improve cacheability

### Hero Logo Image in Above-the-Fold Area Uses lazy loading

**[MEDIUM] Hero logo uses `loading="lazy"` on index.html**
- Line 377: The main VIDL COMPANY logo in the hero section uses `loading="lazy"`
- Above-the-fold images should use `loading="eager"` or omit the attribute entirely
- This directly delays LCP

---

## Priority Action Plan

### Critical (Fix Immediately)
1. Create `robots.txt` with crawl directives
2. Create `sitemap.xml` with all page URLs
3. Add `<link rel="canonical">` to every page

### High Priority
4. Add `og:url`, `og:image`, and `twitter:image` to all pages
5. Create `_headers` file with security headers (HSTS, CSP, X-Frame-Options, etc.)
6. Add structured data (Organization/LocalBusiness JSON-LD) to homepage at minimum
7. Add `width` and `height` attributes to all `<img>` tags to prevent CLS
8. Add descriptive alt text to all meaningful images (especially brand logos)
9. Preload LCP candidates (hero video/images)
10. Fix hero logo from `loading="lazy"` to `loading="eager"`

### Medium Priority
11. Add meta descriptions to team.html, portfolio.html, privacy-policy.html, terms-of-service.html
12. Improve team.html title to be more descriptive
13. Reduce Google Fonts to only used weights
14. Reduce or eliminate the 1.8-second loader delay
15. Move duplicated inline CSS to external stylesheet
16. Consider render-blocking CSS optimization (critical CSS inlining)

### Low Priority
17. Remove placeholder `href="#"` links or ensure they are properly hidden from crawlers
18. Consider IndexNow implementation for faster Bing/Yandex indexing
19. Consider clean URLs (remove .html extensions)
20. Monitor Lenis smooth-scroll impact on INP in field data

---

## Score Breakdown

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Crawlability | 30/100 | 15% | 4.5 |
| Indexability | 25/100 | 15% | 3.75 |
| Security | 40/100 | 10% | 4.0 |
| URL Structure | 65/100 | 10% | 6.5 |
| Mobile Optimization | 85/100 | 10% | 8.5 |
| Core Web Vitals | 35/100 | 20% | 7.0 |
| Structured Data | 0/100 | 10% | 0.0 |
| JS Rendering | 95/100 | 5% | 4.75 |
| IndexNow | 0/100 | 5% | 0.0 |
| **TOTAL** | | **100%** | **42/100** |

---

## Files Analyzed

- `/Users/spencerroberts/Desktop/VIDL-2/index.html`
- `/Users/spencerroberts/Desktop/VIDL-2/about.html`
- `/Users/spencerroberts/Desktop/VIDL-2/team.html`
- `/Users/spencerroberts/Desktop/VIDL-2/developments.html`
- `/Users/spencerroberts/Desktop/VIDL-2/contact.html`
- `/Users/spencerroberts/Desktop/VIDL-2/process.html`
- `/Users/spencerroberts/Desktop/VIDL-2/portfolio.html`
- `/Users/spencerroberts/Desktop/VIDL-2/services/brokerage.html`
- `/Users/spencerroberts/Desktop/VIDL-2/services/consulting.html`
- `/Users/spencerroberts/Desktop/VIDL-2/services/development.html`
- `/Users/spencerroberts/Desktop/VIDL-2/services/venture-capital.html`
- `/Users/spencerroberts/Desktop/VIDL-2/services/philanthropy.html`
- `/Users/spencerroberts/Desktop/VIDL-2/privacy-policy.html`
- `/Users/spencerroberts/Desktop/VIDL-2/terms-of-service.html`
- `/Users/spencerroberts/Desktop/VIDL-2/404.html`
- `/Users/spencerroberts/Desktop/VIDL-2/js/site.js`
- `/Users/spencerroberts/Desktop/VIDL-2/css/` (3 CSS files)

---

*Note: HTTP response headers could not be verified live due to shell restrictions. Security header findings are based on the absence of a `_headers` configuration file. Cloudflare Pages may provide some default headers (e.g., basic HSTS) not visible from source inspection alone. A live `curl -sI` check is recommended to verify actual response headers.*
