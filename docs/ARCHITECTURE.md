# Architecture & Sitemap: Caycer Digital Ecosystem

## 1. Technical Architecture (Robustness)

### Stakeholders & Goals
- **Objective**: Rebuild Caycer's digital ecosystem to improve information architecture and client conversion.
- **Target Audience**: Industrial sectors (Pharmaceutical, Food, Chemical, Hospital).
- **Key Metrics**: Lead generation, Page Speed (Core Web Vitals), SEO ranking for metrology keywords.

### Tech Stack
- **Framework**: React 18 (Vite)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS + shadcn/ui (for accessible, consistent UI components)
- **Routing**: React Router 6 (w/ Lazy Loading)
- **State Management**: Zustand (Global preferences) + React Context (Complex forms)
- **Animations**: Framer Motion (AnimatePresence for page transitions, hover effects)
- **Icons**: Lucide React / React Icons
- **Maps**: Google Maps Embed / Leaflet (Footer)

### Folder Structure (Feature-First)
```
src/
├── assets/             # Static assets (images, fonts)
├── components/         # Shared UI components
│   ├── ui/             # shadcn/ui primitive components (Button, Input, Card)
│   ├── layout/         # Navbar, Footer, StickyCTA
│   └── shared/         # Reusable feature-agnostic components (Logo, Maps)
├── features/           # Feature-specific logic & views
│   ├── home/           # Landing page components
│   ├── services/       # Service details (DQ, IQ, OQ, PQ)
│   ├── sectors/        # Sector-specific pages (Pharma, Food, etc.)
│   ├── certifications/ # EMA accreditation display
│   └── contact/        # Lead magnets, forms
├── hooks/              # Global custom hooks
├── lib/                # Utilities, constants, types
├── pages/              # Route entry points (lazy loaded)
├── store/              # Zustand stores
└── styles/             # Global Tailwind config & CSS
```

## 2. Sitemap & Navigation

### Primary Navigation
1.  **Inicio (Home)**
    *   Hero Section (Value Prop: Precision/Reliability)
    *   Certifications Bar (EMA emphasis)
    *   Services Preview (Hover cards)
    *   Sectors (Industry icons)
    *   Social Proof (Clients/Testimonials)
2.  **Servicios (Services)**
    *   /servicios/calibracion
    *   /servicios/calificacion (DQ, IQ, OQ, PQ)
    *   /servicios/mapeo-termico
    *   /servicios/mantenimiento
3.  **Sectores (Sectors)**
    *   /sectores/farmaceutico
    *   /sectores/alimenticio
    *   /sectores/quimico
    *   /sectores/hospitalario
4.  **Nosotros (About)**
    *   History & Mission
    *   Certifications Detail (NMX-EC-17025-IMNC-2018)
5.  **Contacto (Contact)**
    *   Interactive Form (Urgency/Type selector)
    *   Location Map

### Conversion Points (Layout Hooks)
- **Sticky CTA**: "Cotizar Ahora" or WhatsApp float always visible on mobile/desktop.
- **Navbar**: Smart transition (transparent -> solid brand blue #003366) on scroll.
- **Footer**: Legal links, Sitemap, Map, Contact Info.

## 3. Design System & UX

### Color Palette
- **Primary**: Industrial Blue `#003366` (Trust, Authority)
- **Secondary**: Cool Gray / Metallic Silver (Precision)
- **Accent**: Electric Cyan `#00B5E2` (CTAs, Highlights - High Contrast)
- **Background**: White / Off-White `#F8FAFC`

### Typography
- **Headings**: `Geist Sans` (Modern, Technical)
- **Body**: `Inter` (High Readability)

### Micro-interactions
- **Cards**: Elevation shadow + slight scale up on hover.
- **Page Transitions**: Smooth fade-in/slide-up using AnimatePresence.
- **Buttons**: Ripple effect or solid color fill on hover.

## 4. Content Strategy (SEO & Trust)

### Deep Content Pillars
- **Strict Terminology**: Use correct terms like "Trazabilidad", "Incertidumbre", "Acreditación EMA".
- **No Lorem Ipsum**: All placeholders must use industry-relevant text.
- **Meta Tags**: Dynamic title/description for every route.
- **Structured Data**: JSON-LD for LocalBusiness and Service.

### Accessibility (A11Y)
- Semantic HTML tags (`<main>`, `<article>`, `<nav>`).
- Focus states for keyboard navigation.
- Alt text for all technical diagrams and images.
