# Schema.org Structured Data Audit Report

**Site:** https://vidl-companies.pages.dev/
**Business:** Vidl Companies LLC -- Boutique real estate firm (brokerage, development, consulting, venture capital relations)
**Location:** Phoenix / Scottsdale, Arizona
**Audit Date:** 2026-03-22

---

## 1. Executive Summary

**Current state: Zero structured data markup exists across the entire site.**

No JSON-LD, Microdata, or RDFa was detected on any of the eight pages audited. This means Google, Bing, and AI/LLM systems have no machine-readable signals about what the business is, who works there, what services are offered, or how pages relate to each other.

**Impact:** The site is missing eligibility for Organization Knowledge Panel enrichment, sitelinks search box, breadcrumb rich results, and enhanced service/person understanding. AI citation systems (Google AI Overviews, Bing Copilot, ChatGPT browsing, Perplexity) also benefit from well-structured schema when summarizing and attributing business information.

**Priority:** Critical. All recommendations below should be implemented.

---

## 2. Pages Audited

| Page | URL | Existing Schema |
|------|-----|-----------------|
| Homepage | `/` (index.html) | None |
| About | `/about.html` | None |
| Team | `/team.html` | None |
| Developments | `/developments.html` | None |
| Contact | `/contact.html` | None |
| Brokerage Service | `/services/brokerage.html` | None |
| Consulting Service | `/services/consulting.html` | None |
| Development Service | `/services/development.html` | None |

---

## 3. Validation Results

Not applicable -- no existing markup to validate.

---

## 4. Additional Observations

- The `<title>` on team.html is just "Team" -- no brand name. This should be updated to something like "Our Team | Vidl Companies" for SEO purposes (separate from schema, but noted).
- The about.html and team.html pages are missing `<meta name="description">` content (team.html has no description meta at all).
- The mobile nav email links use `info@vestal.com` in the mailto href on several pages, but display `andrew@vidlecompanies.com` (note the typo "vidlecompanies" instead of "vidlcompanies"). These should be corrected to avoid confusion.

---

## 5. Missing Schema Opportunities & Recommended JSON-LD

### 5A. SITEWIDE -- Organization (place on every page, or at minimum the homepage)

This is the single most impactful schema block. It tells search engines and AI systems who Vidl Companies is, establishes the entity, and connects social profiles.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://vidl-companies.pages.dev/#organization",
  "name": "Vidl Companies",
  "legalName": "Vidl Companies LLC",
  "url": "https://vidl-companies.pages.dev/",
  "logo": "https://vidl-companies.pages.dev/images/VIDLCOMPANY.webp",
  "image": "https://vidl-companies.pages.dev/images/VIDLCOMPANY.webp",
  "description": "Vidl Companies is a boutique real estate firm specializing in experiential business through brokerage, bespoke development, strategic consulting, and venture capital relations across Phoenix and Scottsdale, Arizona.",
  "email": "andrew@vidlcompanies.com",
  "areaServed": [
    {
      "@type": "City",
      "name": "Phoenix",
      "containedInPlace": {
        "@type": "State",
        "name": "Arizona"
      }
    },
    {
      "@type": "City",
      "name": "Scottsdale",
      "containedInPlace": {
        "@type": "State",
        "name": "Arizona"
      }
    }
  ],
  "founder": {
    "@type": "Person",
    "@id": "https://vidl-companies.pages.dev/#andrew-laporte",
    "name": "Andrew LaPorte",
    "jobTitle": "Founder & CEO"
  },
  "sameAs": [
    "https://www.instagram.com/andrewlaporte/",
    "https://www.linkedin.com/in/andrew-laporte-951349a6/"
  ],
  "knowsAbout": [
    "Commercial Real Estate Brokerage",
    "Tenant Representation",
    "Boutique Real Estate Development",
    "Retail Brand Strategic Consulting",
    "Venture Capital Relations",
    "Experiential Retail"
  ]
}
</script>
```

---

### 5B. SITEWIDE -- WebSite (place on homepage only)

Enables potential sitelinks search box and establishes the site entity.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Vidl Companies",
  "url": "https://vidl-companies.pages.dev/",
  "publisher": {
    "@id": "https://vidl-companies.pages.dev/#organization"
  }
}
</script>
```

---

### 5C. HOMEPAGE -- WebPage + Service offerings summary

Place on index.html alongside the Organization and WebSite blocks above.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Vidl Companies | Boutique Real Estate & Strategic Consulting",
  "description": "Discover Vidl, a boutique real estate firm specializing in experiential business through brokerage, bespoke development, strategic consulting, and venture capital relations.",
  "url": "https://vidl-companies.pages.dev/",
  "isPartOf": {
    "@id": "https://vidl-companies.pages.dev/#website"
  },
  "about": {
    "@id": "https://vidl-companies.pages.dev/#organization"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vidl-companies.pages.dev/"
      }
    ]
  }
}
</script>
```

---

### 5D. ABOUT PAGE -- AboutPage schema

Place on about.html.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Vidl | Redefining Luxury Real Estate and Brand Partnerships",
  "description": "Discover how Vidl transforms spaces into extraordinary experiences through custom property selection, strategic partnerships, and legacy property consulting.",
  "url": "https://vidl-companies.pages.dev/about.html",
  "mainEntity": {
    "@id": "https://vidl-companies.pages.dev/#organization"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vidl-companies.pages.dev/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://vidl-companies.pages.dev/about.html"
      }
    ]
  }
}
</script>
```

---

### 5E. TEAM PAGE -- Person schema for each team member

Place on team.html.

```json
<script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Team | Vidl Companies",
    "url": "https://vidl-companies.pages.dev/team.html",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://vidl-companies.pages.dev/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Team",
          "item": "https://vidl-companies.pages.dev/team.html"
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://vidl-companies.pages.dev/#andrew-laporte",
    "name": "Andrew LaPorte",
    "jobTitle": "Founder & CEO",
    "description": "Andrew LaPorte is the Founder and CEO of Vidl Companies, a real estate advisory and development platform focused on experiential brands, strategic growth, and high-impact placements across premier markets. He has been involved in nearly $1 billion in transactional volume.",
    "image": "https://vidl-companies.pages.dev/images/Untitled-design-9.jpg",
    "url": "https://vidl-companies.pages.dev/team.html",
    "sameAs": [
      "https://www.linkedin.com/in/andrew-laporte-951349a6/"
    ],
    "worksFor": {
      "@id": "https://vidl-companies.pages.dev/#organization"
    },
    "knowsAbout": [
      "Commercial Real Estate",
      "Brokerage",
      "Real Estate Development",
      "Brand Advisory",
      "Experiential Retail"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jaini Doffing",
    "jobTitle": "Partner & Chief Strategy Officer",
    "description": "Jaini Doffing serves as a Partner and Chief Strategy Officer at Vidl Companies, where she plays a key role in shaping the firm's strategic direction, partnerships, and client alignment.",
    "image": "https://vidl-companies.pages.dev/images/jaini-doffing.webp",
    "url": "https://vidl-companies.pages.dev/team.html",
    "sameAs": [
      "https://www.linkedin.com/in/jaini-doffing-6b7511167/"
    ],
    "worksFor": {
      "@id": "https://vidl-companies.pages.dev/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ty Brewster",
    "jobTitle": "Designated Broker",
    "description": "Ty Brewster serves as the Designated Broker for Vidl Companies through FranReal, LLC, providing oversight, compliance, and regulatory guidance across all brokerage activities.",
    "url": "https://vidl-companies.pages.dev/team.html",
    "sameAs": [
      "https://www.linkedin.com/in/ty-brewster-cfe-99152b100/"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "FranReal, LLC"
    }
  }
]
</script>
```

---

### 5F. CONTACT PAGE -- ContactPage schema

Place on contact.html.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Vidl Companies | Partner with Us in Real Estate Excellence",
  "description": "Connect with Vidl Companies to explore partnership and investment opportunities in premier real estate developments.",
  "url": "https://vidl-companies.pages.dev/contact.html",
  "mainEntity": {
    "@id": "https://vidl-companies.pages.dev/#organization"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vidl-companies.pages.dev/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://vidl-companies.pages.dev/contact.html"
      }
    ]
  }
}
</script>
```

---

### 5G. DEVELOPMENTS PAGE -- WebPage + BreadcrumbList

Place on developments.html.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Vidl Developments | Bespoke Experiential Real Estate Projects",
  "description": "Explore Vidl's bespoke development projects, crafted to deliver world-class experiential real estate. Partner with us to bring your vision to life through client-specific, build-to-suit solutions.",
  "url": "https://vidl-companies.pages.dev/developments.html",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vidl-companies.pages.dev/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Developments",
        "item": "https://vidl-companies.pages.dev/developments.html"
      }
    ]
  }
}
</script>
```

---

### 5H. SERVICE: BROKERAGE -- Service schema

Place on services/brokerage.html.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Full-Service Commercial Real Estate Brokerage",
  "description": "Strategic tenant representation and landlord advisory across Arizona's most competitive commercial real estate markets, including Phoenix, Scottsdale, and the East Valley.",
  "url": "https://vidl-companies.pages.dev/services/brokerage.html",
  "provider": {
    "@id": "https://vidl-companies.pages.dev/#organization"
  },
  "serviceType": "Commercial Real Estate Brokerage",
  "areaServed": {
    "@type": "State",
    "name": "Arizona"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Brokerage Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Strategic Tenant Representation",
          "description": "Representing national and regional brands seeking premier Arizona locations through site selection mapping foot traffic, co-tenancy dynamics, and demographic alignment."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Landlord & Developer Advisory",
          "description": "Advising developers and property owners on tenant mix strategy, lease structuring, and asset positioning across Scottsdale, Phoenix, and the East Valley."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Co-Investment & Portfolio Strategy",
          "description": "Co-investing alongside partners to align incentives and identify undervalued assets and emerging corridors across Arizona's commercial real estate landscape."
        }
      }
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vidl-companies.pages.dev/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Brokerage",
        "item": "https://vidl-companies.pages.dev/services/brokerage.html"
      }
    ]
  }
}
</script>
```

---

### 5I. SERVICE: CONSULTING -- Service schema

Place on services/consulting.html.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Retail Brand Strategic Consulting",
  "description": "Helping experiential and luxury brands scale strategically from market entry to national expansion, with data-driven site selection and competitive market analysis across Arizona and beyond.",
  "url": "https://vidl-companies.pages.dev/services/consulting.html",
  "provider": {
    "@id": "https://vidl-companies.pages.dev/#organization"
  },
  "serviceType": "Real Estate Strategic Consulting",
  "areaServed": {
    "@type": "State",
    "name": "Arizona"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Consulting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Market Entry & Expansion Strategy",
          "description": "Guiding brands through every phase of market entry from initial Arizona market feasibility studies to multi-location rollout strategies."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Positioning & Retail Identity",
          "description": "Ensuring physical presence reinforces brand identity and drives customer loyalty, from flagship buildouts to neighborhood concepts."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Operational Scaling & Partnership Development",
          "description": "Building operational frameworks, vendor relationships, and strategic partnerships needed to scale from a single Arizona location to a national footprint."
        }
      }
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vidl-companies.pages.dev/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Consulting",
        "item": "https://vidl-companies.pages.dev/services/consulting.html"
      }
    ]
  }
}
</script>
```

---

### 5J. SERVICE: DEVELOPMENT -- Service schema

Place on services/development.html.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Boutique Commercial Real Estate Development",
  "description": "Creating experiential commercial environments across Arizona that drive lasting value for investors, tenants, and communities, participating as both General Partner and Limited Partner.",
  "url": "https://vidl-companies.pages.dev/services/development.html",
  "provider": {
    "@id": "https://vidl-companies.pages.dev/#organization"
  },
  "serviceType": "Commercial Real Estate Development",
  "areaServed": {
    "@type": "State",
    "name": "Arizona"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Strategic Site Acquisition",
          "description": "Identifying development opportunities across Greater Phoenix before they reach the broader market, targeting infill locations and repositioning candidates."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Experiential Tenant Curation",
          "description": "Anchoring every development with a carefully curated tenant mix designed to create a cohesive experiential environment."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Design-Forward Execution",
          "description": "Collaborating with top Arizona architects and designers to create environments with clean lines, intentional materiality, and spaces that tell a story."
        }
      }
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vidl-companies.pages.dev/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Development",
        "item": "https://vidl-companies.pages.dev/services/development.html"
      }
    ]
  }
}
</script>
```

---

## 6. Implementation Priority

| Priority | Schema Type | Page(s) | Impact |
|----------|-------------|---------|--------|
| **P0 -- Critical** | RealEstateAgent (Organization) | Homepage (sitewide if possible) | Entity establishment, Knowledge Panel eligibility, AI citation |
| **P0 -- Critical** | WebSite | Homepage | Sitelinks search box, site entity |
| **P1 -- High** | BreadcrumbList | All pages | Breadcrumb rich results in SERPs |
| **P1 -- High** | Person | Team page | People Knowledge Panel, AI citation for founder |
| **P1 -- High** | Service (x3) | Each service page | Service understanding, AI citation, potential rich results |
| **P2 -- Medium** | WebPage / AboutPage / ContactPage | Respective pages | Page-type understanding, improved crawl signals |

---

## 7. Implementation Notes

1. **Placement:** All `<script type="application/ld+json">` blocks should be placed inside the `<head>` element of each page, before the closing `</head>` tag.

2. **Organization @id pattern:** The blocks above use `@id` references (e.g., `"@id": "https://vidl-companies.pages.dev/#organization"`) so that all pages can reference the same entity without duplicating the full Organization block. Place the full RealEstateAgent block on the homepage and use `{"@id": ".../#organization"}` references on other pages.

3. **URL consistency:** If the production domain changes from `vidl-companies.pages.dev` to a custom domain, update every URL in the schema blocks. All URLs must be absolute.

4. **Validation:** After implementation, validate each page at:
   - https://validator.schema.org/
   - https://search.google.com/test/rich-results
   - https://search.google.com/structured-data/testing-tool

5. **Schema types NOT recommended for this site:**
   - **FAQPage** -- Google restricted FAQ rich results to government/health sites (Aug 2023). Not recommended for commercial real estate.
   - **HowTo** -- Google removed HowTo rich results (Sep 2023). Do not implement.
   - **SpecialAnnouncement** -- Deprecated July 2025. Do not implement.
   - **LocalBusiness with address** -- Vidl does not appear to have a public-facing office address on the site. If a physical address is added to the site in the future, the RealEstateAgent block should be updated with `address`, `geo`, `telephone`, and `openingHours` properties to unlock local pack eligibility.

6. **Bug to fix:** Multiple pages have `mailto:info@vestal.com` in the mobile nav href while displaying `andrew@vidlecompanies.com` (itself a typo -- should be `andrew@vidlcompanies.com`). Correct these before schema deployment so schema `email` values match what is actually on the page.

---

## 8. Summary of Findings

- **Existing schema blocks found:** 0
- **Validation errors in existing markup:** N/A
- **Total recommended schema blocks:** 10 (across 8 pages)
- **Estimated implementation time:** 1-2 hours (copy-paste JSON-LD into `<head>` of each file)
- **Expected SEO impact:** High -- establishes machine-readable entity identity, enables breadcrumb rich results, improves AI/LLM citation accuracy, and positions the site for Knowledge Panel consideration.
