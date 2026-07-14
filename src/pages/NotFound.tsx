import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { ArrowRight, Home as HomeIcon } from "lucide-react";

export function NotFound() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Página no encontrada"
                description="La página que buscas no existe. Explora nuestros servicios de calibración, calificación y validación."
                path="/404"
                noindex
            />
            <Navbar />
            <main className="grow flex items-center justify-center pt-24 pb-16 bg-slate-50">
                <div className="container mx-auto px-6 text-center max-w-2xl">
                    <p className="text-8xl font-bold text-brand/20 mb-4">404</p>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Página no encontrada
                    </h1>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        La página que buscas no existe o fue movida. Quizá te interese
                        conocer nuestros servicios o ponerte en contacto con nosotros.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/">
                            <Button variant="cta" size="lg" className="font-bold">
                                <HomeIcon className="mr-2 w-5 h-5" /> Ir al inicio
                            </Button>
                        </Link>
                        <Link to="/servicios">
                            <Button variant="outline" size="lg" className="font-bold">
                                Ver servicios <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
