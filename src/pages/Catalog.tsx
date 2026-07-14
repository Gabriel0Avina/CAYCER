import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { CatalogHero } from "@/features/catalog/CatalogHero";
import { ProductGrid } from "@/features/catalog/ProductGrid";

const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Catálogo de Instrumentación - CAYCER",
    "description": "Catálogo de equipos de medición y calibración industrial. Termómetros, manómetros y multímetros con trazabilidad EMA.",
    "url": "https://caycer.ing/catalogo",
};

export function Catalog() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Catálogo de Instrumentación"
                description="Explore nuestro catálogo de equipos de precisión para calibración y validación industrial."
                path="/catalogo"
                schema={catalogSchema}
            />
            <Navbar />
            <main className="grow">
                <CatalogHero />
                <ProductGrid />
            </main>
            <Footer />
        </div>
    );
}
