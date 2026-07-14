import { Helmet } from 'react-helmet-async';

const SITE_URL = "https://caycer.ing";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    /** Ruta de la página actual, ej. "/servicios/calibracion". Genera el canonical único por página. */
    path?: string;
    type?: string;
    schema?: object;
}

export function SEO({
    title,
    description = "CAYCER - Servicios profesionales de Calibración, Calificación de Equipos y Validación de Procesos. Expertos en cumplimiento normativo y precisión industrial.",
    keywords = "calibración, validación, calificación de equipos, ema, cenam, farmacéutica, ingeniería, construcción, caycer",
    image = "/og-image.png",
    path = "/",
    type = "website",
    schema
}: SEOProps) {
    const siteName = "CAYCER";
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Calibración y Validación`;
    const url = `${SITE_URL}${path}`;
    const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    return (
        // defer={false} aplica los tags de forma síncrona; el defer por defecto
        // espera un requestAnimationFrame que nunca llega en pestañas ocultas
        // (crawlers headless, tabs en segundo plano) y los meta tags no se emiten.
        <Helmet defer={false}>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:locale" content="es_MX" />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={fullImage} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
