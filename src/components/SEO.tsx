import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    schema?: object;
}

export function SEO({
    title,
    description = "CAYCER - Servicios profesionales de Metrología, Calificación de Equipos y Validación de Procesos. Expertos en cumplimiento normativo y precisión industrial.",
    keywords = "metrología, calibración, validación, calificación de equipos, ema, cenam, farmacéutica, ingeniería, construcción, caycer",
    image = "/og-image.png",
    url = "https://caycer.com.mx",
    type = "website",
    schema
}: SEOProps) {
    const siteName = "CAYCER";
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Metrología y Validación`;

    return (
        <Helmet>
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
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
