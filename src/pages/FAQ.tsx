import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { faqData, buildFaqSchema } from "@/features/faq/faqData";

export function FAQ() {
    const [open, setOpen] = useState<string | null>("0-0");

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Preguntas Frecuentes"
                description="Respuestas sobre calibración, calificación de equipos, validación de procesos, acreditaciones EMA y trazabilidad al CENAM. Todo lo que necesita saber sobre los servicios de CAYCER."
                path="/preguntas-frecuentes"
                schema={buildFaqSchema()}
            />
            <Navbar />
            <main className="grow">
                {/* Hero */}
                <section className="pt-36 pb-16 bg-linear-to-br from-brand-dark via-slate-900 to-brand text-white">
                    <div className="container mx-auto px-6 text-center max-w-3xl">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/20 mb-6">
                            <HelpCircle size={32} className="text-cyan" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-display mb-5 text-white">
                            Preguntas Frecuentes
                        </h1>
                        <p className="text-lg text-blue-100/90 leading-relaxed">
                            Resolvemos las dudas más comunes sobre calibración, calificación,
                            validación y nuestras acreditaciones ante la EMA.
                        </p>
                    </div>
                </section>

                {/* FAQ list */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-3xl">
                        {faqData.map((cat, catIdx) => (
                            <div key={cat.category} className="mb-12 last:mb-0">
                                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand mb-5">
                                    {cat.category}
                                </h2>
                                <div className="space-y-3">
                                    {cat.items.map((item, itemIdx) => {
                                        const id = `${catIdx}-${itemIdx}`;
                                        const isOpen = open === id;
                                        return (
                                            <div
                                                key={id}
                                                className="bg-white rounded-2xl border border-slate-200/70 shadow-sm overflow-hidden"
                                            >
                                                <button
                                                    onClick={() => setOpen(isOpen ? null : id)}
                                                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                                                    aria-expanded={isOpen}
                                                >
                                                    <h3 className="text-lg font-semibold text-slate-900">
                                                        {item.question}
                                                    </h3>
                                                    <ChevronDown
                                                        size={22}
                                                        className={`shrink-0 text-brand transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                                    />
                                                </button>
                                                <div
                                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                                >
                                                    <div className="overflow-hidden">
                                                        <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                                                            {item.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-brand text-center">
                    <div className="container mx-auto px-6 max-w-2xl">
                        <h2 className="text-3xl font-bold text-white mb-4 font-display">
                            ¿No encontró su respuesta?
                        </h2>
                        <p className="text-blue-100 mb-8 text-lg">
                            Nuestro equipo técnico resuelve cualquier duda específica sobre su proyecto.
                        </p>
                        <Link to="/contacto">
                            <Button variant="cta" size="lg" className="font-bold rounded-full bg-white text-brand hover:bg-slate-50 h-14 px-8">
                                Contactar a un especialista <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
