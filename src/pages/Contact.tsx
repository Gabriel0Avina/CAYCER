import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { ContactHero, ContactForm } from "@/features/contact";

export function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="Contacto y Asesoría"
                description="Contáctenos para recibir asesoría experta en calibración y validación. Solicite una cotización para sus equipos e instalaciones."
                path="/contacto"
            />
            <Navbar />
            <main className="flex-grow pt-24 pb-12 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ContactHero />
                    <ContactForm />
                </div>
            </main>
            <Footer />
        </div>
    );
}
