# Caycer Digital Ecosystem

Modern web platform for Caycer (Centro de Asesoría y Calibración y Certificación), built with **React 18**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Industrial Design System**: Custom color palette (Industrial Blue & Electric Cyan) and typography (Geist/Inter).
- **Core Web Vitals Optimized**: Lazy loading, semantic HTML, and fast transitions.
- **Deep Content**: Specialized pages for Metrology, DQ/IQ/OQ/PQ protocols.
- **Lead Generation**: Intelligent contact forms with urgency selectors.

## Project Structure

```bash
src/
├── components/         # Shared UI & Layout components
│   ├── ui/             # shadcn/ui primitives (Button, Card, etc.)
│   └── layout/         # Navbar, Footer
├── features/           # Feature-specific components
│   └── home/           # Hero, ServicesPreview, Certifications
├── pages/              # Route views (Home, Contact, ServiceDetail)
└── lib/                # Utilities (cn, formatting)
```

## Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## Deployment

### Vercel / Netlify
This project is ready for static deployment.
1.  Connect your repository.
2.  Set Build Command: `npm run build`
3.  Set Output Directory: `dist`

### Backend Integration
The Contact form is currently a frontend implementation. To make it functional:
1.  Use a service like **Formspree** or **EmailJS**.
2.  Update `src/pages/Contact.tsx` to handle the `onSubmit` event sending data to the API endpoint.

## Certifications & Assets
Ensure you replace the placeholder icons/images in `src/features/home/Certifications.tsx` with high-resolution assets of EMA, COFEPRIS, and ISO certifications.
