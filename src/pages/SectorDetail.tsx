import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, ArrowRight } from "lucide-react";
import { sectorsData } from "@/features/sectors/sectorsData";

export function SectorDetail() {
    const { slug } = useParams<{ slug: string }>();
    const sector = slug ? sectorsData[slug] : null;

    if (!sector) {
        return (
            <div className="flex flex-col min-h-screen bg-white">
                <SEO title="Sector no encontrado" path={`/sectores/${slug ?? ""}`} noindex />
                <Navbar />
                <main className="grow flex items-center justify-center pt-24">
                    <div className="text-center px-6">
                        <h1 className="text-4xl font-bold mb-4">Sector no encontrado</h1>
                        <Link to="/" className="text-brand underline">Volver al inicio</Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const Icon = sector.icon;
    const sectorSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": `Metrología y validación para ${sector.name}`,
        "provider": { "@type": "Organization", "name": "CAYCER Ingeniería y Metrología", "url": "https://caycer.ing" },
        "areaServed": { "@type": "Country", "name": "México" },
        "description": sector.intro,
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title={sector.name}
                description={sector.tagline}
                path={`/sectores/${sector.slug}`}
                schema={sectorSchema}
            />
            <Navbar />
            <main className="grow">
                {/* Hero */}
                <section className="pt-36 pb-16 bg-linear-to-br from-brand-dark via-slate-900 to-brand text-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/20 mb-6">
                            <Icon size={32} className="text-cyan" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 text-white">{sector.name}</h1>
                        <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl">
                            {sector.intro}
                        </p>
                    </div>
                </section>

                {/* Necesidades */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">
                            ¿Qué necesita el {sector.name.toLowerCase().replace("sector ", "sector ")}?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {sector.needs.map((need) => (
                                <div key={need} className="flex items-start gap-3 p-5 bg-slate-50 rounded-xl border border-slate-200/60">
                                    <CheckCircle2 className="w-6 h-6 text-cyan shrink-0 mt-0.5" />
                                    <span className="text-slate-700 font-medium">{need}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Normas */}
                <section className="py-16 bg-slate-50 border-y border-slate-100">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="w-7 h-7 text-brand" />
                            <h2 className="text-2xl font-bold text-slate-900">Normas y referencias aplicables</h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {sector.standards.map((std) => (
                                <span key={std} className="px-4 py-2 bg-white rounded-full border border-slate-200 text-sm font-medium text-slate-700 shadow-sm">
                                    {std}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Servicios relevantes */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
                            Servicios de CAYCER para este sector
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {sector.services.map((svc) => (
                                <Link
                                    key={svc.name}
                                    to={svc.link}
                                    className="group block bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all border border-slate-100"
                                >
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">
                                        {svc.name}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{svc.detail}</p>
                                    <span className="text-sm font-semibold text-brand inline-flex items-center gap-1">
                                        Ver servicio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-brand text-center">
                    <div className="container mx-auto px-6 max-w-2xl">
                        <h2 className="text-3xl font-bold text-white mb-4 font-display">
                            Soluciones a la medida de su industria
                        </h2>
                        <p className="text-blue-100 mb-8 text-lg">
                            Cuéntenos su necesidad y le preparamos una propuesta técnica sin compromiso.
                        </p>
                        <Link to="/contacto">
                            <Button variant="cta" size="lg" className="font-bold rounded-full bg-white text-brand hover:bg-slate-50 h-14 px-8">
                                Solicitar asesoría <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
