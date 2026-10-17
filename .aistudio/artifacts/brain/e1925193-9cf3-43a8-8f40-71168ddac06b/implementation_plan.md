# HostMarc — Limestone & Petrol Brand Rebuild & Unified Digital Services Platform

Transform HostMarc into the approved brand visual identity: a warm **Limestone (`#F3EFE6`)** canvas, deep **Petrol (`#153E43`)** typography and button styling, muted **Persimmon (`#C86445`)** architectural accents, and crisp **White (`#FFFFFF`)** structural cards, unifying client digital services with the dedicated Hostinger hosting hub and engineering tools.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following directions have been confirmed and are incorporated into the plan:
> - **Unified Agency with Dedicated Hosting Hub**: The site balances two clear customer paths: (1) Businesses looking to build, maintain, and scale websites via HostMarc's digital services, and (2) Users seeking unbiased, verified Hostinger hosting guidance and migrations.
> - **Retaining & Reskinning All 4 Interactive Tools**: The 6-step zero-downtime migration checklist, the 1–6 year TCO & renewal cost calculator, the verified coupon modal (`HOSTMARC` 78% off), and the global TTFB speed benchmark visualizer will be restyled to match the Limestone and Petrol palette.
> - **Exact Logo Vectorization**: The faceted geometric **H** emblem and lowercase **`hostmarc`** wordmark will be vectorized as a scalable, high-resolution SVG matching `Logo Hostmarc.png`.
> - **Hero Architectural Sculpture**: The tactile matte interlocking geometric arch and terracotta cylinder visual from `Brandguideline.png` will anchor the hero section.

---

## 1. Overview & Core Concept

* **What It Does**: A website design, development, maintenance, and hosting advisory platform for modern businesses. It provides high-craft digital services alongside honest, benchmark-backed server guidance.
* **Target Audience**: Business owners, eCommerce merchants, and developers needing either hands-on design/development services or verified hosting infrastructure advice.
* **Core Value**: Premium craftsmanship, transparent pricing, and zero marketing hype.

---

## 2. User Experience & Visual Design

### Visual Identity System (from `Brandguideline.png`)

* **Color Palette Tokens**:
  * **Primary Surface (Limestone)**: `#F3EFE6` — sets the calm, editorial atmosphere across pages.
  * **Primary Identity (Petrol)**: `#153E43` — authoritative, deep slate-teal used for headlines, body prose, the primary logo mark, and primary button fills.
  * **Accent (Persimmon)**: `#C86445` — warm terracotta accent used for chapter/service numbering (`01`, `02`, `03`), key metric callouts, and subtle focal highlights.
  * **Supporting Surface (White)**: `#FFFFFF` — used for content cards, inputs, and comparison containers with hairline `#E5DFD5` borders.
* **Typography**:
  * **Display & Headings**: `Manrope` (700/800 bold), tight tracking (`tracking-tight`), `text-wrap: balance`.
  * **Body Copy**: `Manrope` (400/500), 1.6 line height, 65–75ch comfortable measure.
  * **Data & Numerical Metrics**: `JetBrains Mono` with `tabular-nums`.
* **Top Bar (3-Zone Contract)**:
  * **Zone 1**: Vector logo `H hostmarc` in Petrol `#153E43`.
  * **Zone 2**: Clean text links (`Services`, `Hosting Hub`, `Work`, `Tools`, `About`, `Guides`).
  * **Zone 3**: Refined primary action (`Start your project` / `Let's talk`).

### Key User Flows

1. **Client Services Path**:
   * *Visitor lands on Hero* ("Make your mark online.") → clicks **"Start your project"** or scrolls to Services (`01 Web design & dev`, `02 Hosting & maintenance`, `03 SEO & marketing`).
   * Explores **Featured Work** (`Rivermere Studio`, `Evergreen Goods`, `Lumen Atelier`, and production case studies `Sunlitbd.com` & `Ural Travel`).
   * Submits project requirements via the structured consultation form with instant validation.
2. **Hosting Guidance Path**:
   * Visitor clicks **"Explore hosting"** or navigates to the **Dedicated Hosting Hub**.
   * Compares Hostinger plans (Premium, Business, Cloud Startup) with the TCO calculator showing 1–6 year real renewal expenditures.
   * Tests global latency from Singapore, South Asia, US, and Europe.
   * Copies verified coupon `HOSTMARC` for 78% discount + 3 months free.
   * Follows the 6-step zero-downtime migration checklist with live progress tracking.

---

## 3. Key Product Decisions & Trade-Offs

* **Dual Path Separation**:
  * *Decision*: Clearly distinguish Hostinger affiliate recommendations from HostMarc's own development/maintenance retainers.
  * *Why*: Protects customer trust and complies with FTC and digital commerce guidelines. Purchasing hosting does not automatically bundle agency labor.
* **Vector Master Logo vs. Raster Mockup**:
  * *Decision*: Code the geometric faceted 'H' and custom geometric lowercase 'hostmarc' wordmark in clean, mathematical SVG code rather than relying on a static image file.
  * *Why*: Guarantees crisp rendering on Retina displays and responsive sizing down to favicon dimensions.
* **Limestone Canvas Integration for Complex Tools**:
  * *Decision*: Adapt the interactive calculators, comparison tables, and migration progress steps into the warm Limestone/White/Petrol card system with soft borders.
  * *Why*: Preserves the utility of the previous benchmark tools while eliminating dark cyberpunk styling in favor of the human, architectural brand aesthetic.

---

## 4. Technical Architecture & Component Mapping

```
┌────────────────────────────────────────────────────────────────────────┐
│                              APP SHELL                                 │
│      Theme: Limestone (#F3EFE6) Canvas · Petrol (#153E43) Text         │
├────────────────────────────────────────────────────────────────────────┤
│  Top Navigation (H hostmarc · Services · Hosting · Work · Contact CTA) │
├────────────────────────────────────────────────────────────────────────┤
│                               VIEWS                                    │
│  ┌───────────────────────────┐  ┌────────────────────────────────────┐ │
│  │     HOMEPAGE & SERVICES   │  │         HOSTING HUB PORTAL         │ │
│  │ - Hero with 3D Sculpture  │  │ - Hostinger 2026 In-Depth Review   │ │
│  │ - 01/02/03 Service Strips │  │ - Comparisons vs GoDaddy/Bluehost  │ │
│  │ - Featured Case Studies   │  │ - 4-Year Renewal & TCO Calculator  │ │
│  │ - Production Portfolio    │  │ - 6-Step Zero-Downtime Migration   │ │
│  │ - Direct Enquiry Drawer   │  │ - Verified Coupons & Modal         │ │
│  └───────────────────────────┘  └────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│  PERSISTENT AFFILIATE MODAL & STICKY BAR (HOSTMARC 78% OFF VOUCHER)    │
├────────────────────────────────────────────────────────────────────────┤
│  FOOTER (Dual Path Summary · Dhaka Testing Lab · FTC Transparency)     │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Implementation Roadmap

1. **Design System & Theme Tokens**:
   * Set up Tailwind color variables for Limestone (`#F3EFE6`), Petrol (`#153E43`), Persimmon (`#C86445`), and White (`#FFFFFF`).
   * Import `Manrope` display and body typography.
2. **Logo & Master Mark SVG Asset**:
   * Build the reusable `HostmarcLogo` component with the geometric faceted H emblem and lowercase wordmark.
3. **Hero Section & Tactile 3D Sculpture**:
   * Construct the hero layout matching `Brandguideline.png` with display typography, dual CTAs, and SVG/CSS architectural sculpture.
4. **Services & Featured Work Sections**:
   * Render the 01/02/03 service categories with Persimmon numbering.
   * Showcase curated case studies (`Rivermere Studio`, `Evergreen Goods`, `Lumen Atelier`, `Sunlitbd.com`, `Ural Travel`).
5. **Interactive Hosting Hub**:
   * Embed the TCO calculator, interactive migration checklist, comparison tables, and coupon modal using the new Limestone design.
6. **Contact & Consultation Form**:
   * Provide a clean validated form for both web design/development inquiries and free migration assistance.
7. **Verification**:
   * Compile and lint test to ensure zero errors and seamless mobile responsiveness.
