import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/features/home/Hero"
import { Certifications } from "@/features/home/Certifications"
import { ServicesPreview } from "@/features/home/ServicesPreview"
import { HomeAbout } from "@/features/home/HomeAbout"
import { StatsBar } from "@/features/home/StatsBar"
import { WhyChooseUs } from "@/features/home/WhyChooseUs"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { SEO } from "@/components/SEO"

const homeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "CAYCER Ingeniería y Metrología",
    "alternateName": "CAYCER",
    "description": "Laboratorio de calibración, calificación de equipos y validación de procesos acreditado por EMA (T-225, H-98, ME-57) bajo la norma NMX-EC-17025-IMNC-2018.",
    "image": "https://caycer.ing/logo.png",
    "logo": "https://caycer.ing/logo.png",
    "@id": "https://caycer.ing/#organization",
    "url": "https://caycer.ing",
    "telephone": "+523332601657",
    "email": "ventas@caycer.com.mx",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Batalla de Puebla 3643, Col. El Tapatío",
        "addressLocality": "San Pedro Tlaquepaque",
        "addressRegion": "JAL",
        "postalCode": "45588",
        "addressCountry": "MX"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 20.6101,
        "longitude": -103.3101
    },
    "areaServed": {
        "@type": "Country",
        "name": "México"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
    },
    "sameAs": [
        "https://www.instagram.com/_caycer/"
    ]
};

export function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Especialistas en Calibración y Validación"
                description="Servicios de calibración de instrumentos, calificación de equipos y validación de procesos industriales con trazabilidad EMA y CENAM."
                path="/"
                schema={homeSchema}
            />
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <Certifications />
                <StatsBar />
                <ServicesPreview />
                <HomeAbout />
                <WhyChooseUs />

                {/* Contact/CTA Section */}
                <section className="py-32 relative overflow-hidden bg-brand">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-5xl font-bold mb-6 font-display text-white">
                            ¿Listo para elevar sus estándares?
                        </h2>
                        <p className="mb-12 text-blue-100 max-w-2xl mx-auto text-xl leading-relaxed">
                            Contacte a nuestro equipo de expertos para recibir asesoría personalizada y cotización sin compromiso.
                        </p>
                        <Link to="/contacto">
                            <Button variant="cta" size="lg" className="h-16 px-10 text-lg shadow-custom-lg font-bold rounded-full bg-white text-brand hover:bg-slate-50">
                                Solicitar Asesoría <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
