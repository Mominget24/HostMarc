# Implementation Plan: Brand Guideline Desktop Hero & Sitewide Typography Alignment

Align the HostMarc desktop hero section, typography, and visual assets with the official brand guideline specifications (`Brandguideline.png`), implementing Plus Jakarta Sans sitewide, exact typographic measurements, an SEO-friendly value proposition, a bespoke 3D interlocking sculpture asset, and the 3-column capabilities strip.

---

## 1. User Intent & Clarification Summary

Based on your clarification responses:
* **Typography**: Apply **Plus Jakarta Sans** (weights 400, 500, 600, 700, 800) sitewide for both display headings and body copy to match the geometric grotesk in the brand guideline.
* **Hero Headline**: *"Websites, hosting, and growth for ambitious businesses"* with tight tracking (`tracking-tight`) and balanced desktop measurements.
* **Hero SEO Subtext**: Add a clear, high-density SEO description articulating HostMarc's dual role (independent hosting benchmarks and digital web engineering).
* **3D Thematic Artwork**: Generate a dedicated high-fidelity 3D matte geometric sculpture featuring interlocking petrol (`#153E43`) and persimmon (`#C86445`) forms on a neutral limestone ground.
* **Layout Flow Below Hero**: Retain the 3-column capabilities strip and featured client work cards matching the brand presentation.

---

## 2. Architecture, Layout & Visual Strategy

### A. Typographic Hierarchy & Scale (Plus Jakarta Sans)
* **Font Family**: Google Fonts `Plus Jakarta Sans` imported in `index.html` and configured as `font-sans` in Tailwind.
* **Display Headline**: Sized with fluid math `clamp(2.75rem, 4.5vw, 4.25rem)` ($44\text{–}68\text{px}$), line-height $1.08$, letter-spacing `-0.035em`, font-weight $700$/$800$ in deep Petrol `#153E43`.
* **SEO Subtext**: Sized at $1.125\text{rem}$ ($18\text{px}$), leading $1.65$, in subdued neutral `#4A6064` (WCAG AA contrast $> 5.8:1$).
* **Kicker / Eyebrow**: Quiet unboxed text `HOSTMARC STUDIO · INDEPENDENT BENCHMARKS & DIGITAL ENGINEERING` using zero-pill discipline (no rounded candy badges).

### B. Color & Spatial Math (Limestone & Petrol Identity)
* **Canvas Ground**: Warm Limestone `#F3EFE6` with ambient petrol contrast.
* **Primary Petrol**: `#153E43` for high-emphasis typography, headers, and primary buttons.
* **Persimmon Accent**: `#C86445` for active highlights and secondary focal points.
* **Grid Math**: 12-column desktop grid with a 7-column content span on the left and a 5-column showcase container on the right for the 3D sculpture.

---

## 3. Step-by-Step Execution Plan

### Step 1: Configure Sitewide Plus Jakarta Sans
* Update `index.html` to import `Plus Jakarta Sans` font styles from Google Fonts (`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');`).
* Update `@theme` block or CSS font-family in `src/index.css` so `font-sans` defaults to `'Plus Jakarta Sans', sans-serif`.

### Step 2: Generate 3D Thematic Sculpture Asset
* Call `generate_image` with prompt tailored to the brand guideline:
  * Minimalist interlocking 3D geometric abstract sculpture, featuring a deep petrol green torus ring interlocking with a matte persimmon terracotta arch and sphere, smooth matte clay texture, studio lighting with soft diffused ambient shadows, isolated on clean limestone `#F3EFE6` background, 1:1 or 4:3 aspect ratio.
* Store generated image path for direct integration into the hero component.

### Step 3: Implement Brand Guideline Desktop Hero (`HomePage.tsx`)
* Replace current hero with the verified brand guideline composition:
  * **Kicker**: `HOSTMARC STUDIO · WEBSITES · HOSTING · GROWTH`
  * **Main Headline**: *"Websites, hosting, and growth for ambitious businesses."*
  * **SEO-Rich Description**: *"HostMarc combines enterprise-grade web engineering with raw hosting telemetry. We stress-test live nodes across Singapore and Frankfurt to deliver sub-second WordPress architectures and data-backed hosting guidance."*
  * **Dual CTAs**: 
    1. Primary button: *"Explore Web Services"* (`#153E43`, hover `#1C4E54`)
    2. Secondary button: *"Inspect Hosting Hub"* with real-time lab indicator
  * **Right 3D Visual Frame**: Thematic sculpture container with subtle inner border, soft ambient drop shadow, and floating performance badge (`125ms Global TTFB`).

### Step 4: Refine 3-Column Services Strip & Featured Work
* Structure the 3-column capabilities strip below the hero:
  1. `01. Hosting & Infrastructure` (Affiliate guidance, node testing, zero-downtime migrations)
  2. `02. Web Architecture & SEO` (Custom WordPress, headless Jamstack, Core Web Vitals tuning)
  3. `03. Performance Marketing` (Conversion rate optimization, lead capture, high-intent funnels)
* Re-align the featured work case studies (Sunlitbd.com & Ural-Travel) directly below the capabilities strip.

### Step 5: Verification & Compilation
* Run `compile_applet` and `lint_applet` to ensure error-free builds and responsiveness across 375px mobile, 768px tablet, and 1440px desktop viewports.
