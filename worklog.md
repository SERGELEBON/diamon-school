# Worklog: Restructure Next.js Project from Client-Side Routing to File-Based Routing

**Date**: 2026-06-15
**Task**: Restructure the Diamond Secret Beauty School Next.js project from `useState`-based routing to proper App Router file-based routing for Vercel deployment compatibility.

## Problem
The entire site was in a single file (`src/app/page.tsx`, 1058 lines) using `useState<Page>('home')` to switch between pages. This caused 404 errors on Vercel for URLs like `/gallery`, `/contact`, `/formation/maquillage` because those routes didn't exist as actual files.

## Solution
Restructured the project to use Next.js 16 App Router file-based routing, extracting components into separate files and creating proper route pages.

## Changes Made

### New Route Files Created
- `src/app/gallery/page.tsx` — Gallery page route
- `src/app/contact/page.tsx` — Contact page route
- `src/app/formation/[slug]/page.tsx` — Dynamic formation detail page route (uses `useParams()` to get slug)

### New Component Files Created (13 components extracted from page.tsx)
- `src/components/Navbar.tsx` — Navigation bar using `usePathname()` for active link detection and `Link` from `next/link`
- `src/components/Footer.tsx` — Footer with `Link` components instead of `navigateTo()`
- `src/components/WhatsAppFloat.tsx` — Floating WhatsApp button
- `src/components/SectionTitle.tsx` — Reusable section title component
- `src/components/HeroSlider.tsx` — Hero slider with `Link` for CTAs
- `src/components/AboutSection.tsx` — About section
- `src/components/FounderSection.tsx` — Founder section
- `src/components/FormationsSection.tsx` — Formations section using `Link` instead of `navigateTo()`
- `src/components/PricingTuitionSection.tsx` — Pricing section with `Link` for enroll buttons
- `src/components/CTABanner.tsx` — CTA banner with `Link` for enroll
- `src/components/HowToRegisterSection.tsx` — Registration steps with `Link`
- `src/components/TestimonialsSection.tsx` — Testimonials section
- `src/components/PartnersSection.tsx` — Partners scrolling section
- `src/components/FAQSection.tsx` — FAQ accordion
- `src/components/GalleryPage.tsx` — Gallery page content
- `src/components/FormationPage.tsx` — Formation detail page content (accepts `slug` prop)
- `src/components/ContactPage.tsx` — Contact page content

### Modified Files
- `src/app/page.tsx` — Reduced from 1058 lines to ~30 lines. Now only contains the HomePage layout with Navbar, all home sections, and Footer.

### Key Changes
1. **Routing**: Replaced `useState<Page>` + `navigateTo()` with Next.js `Link` and file-based routing
2. **Active Link Detection**: Replaced `page === 'home'` checks with `usePathname()` from `next/navigation`
3. **Formation Detail**: Replaced `navigateTo('formation', slug)` with `Link href={`/formation/${slug}`}` and `useParams()` in the route page
4. **Navbar Scroll State**: Replaced `useState` + `useEffect` with `useSyncExternalStore` for scroll detection (lint-compliant)
5. **Layout Pattern**: Each route page includes Navbar + Footer + WhatsAppFloat independently (since home page needs transparent navbar over hero)

### Route Mapping
| Old navigateTo | New Route |
|---|---|
| `navigateTo('home')` | `Link href="/"` |
| `navigateTo('gallery')` | `Link href="/gallery"` |
| `navigateTo('contact')` | `Link href="/contact"` |
| `navigateTo('formation', slug)` | `Link href={`/formation/${slug}`}` |

### Data Files (Unchanged)
- `src/data/courses.ts`
- `src/data/testimonials.ts`
- `src/data/faq.ts`
- `src/data/gallery.ts`

## Verification
- All routes return HTTP 200: `/`, `/gallery`, `/contact`, `/formation/maquillage`, `/formation/onglerie`
- ESLint passes with 0 errors (1 warning about custom fonts in layout.tsx is pre-existing)
- All page content renders correctly
- Dev server running on port 3000
