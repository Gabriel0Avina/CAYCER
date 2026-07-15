import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldCheck, Target, Eye, Award, MapPin, Thermometer, Droplets, ArrowRight } from "lucide-react";

const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Nosotros | CAYCER Ingeniería y Metrología",
    "url": "https://caycer.ing/nosotros",
    "mainEntity": {
        "@type": "Organization",
        "name": "CAYCER Ingeniería y Metrología",
        "url": "https://caycer.ing",
        "logo": "https://caycer.ing/logo.png",
        "description": "Laboratorio de calibración, calificación de equipos y validación de procesos acreditado por la EMA bajo la norma NMX-EC-17025-IMNC-2018.",
        "foundingDate": "2018",
        "areaServed": { "@type": "Country", "name": "México" },
        "hasCredential": [
            "Acreditación EMA T-225 (temperatura)",
            "Acreditación EMA H-98 (humedad relativa)",
            "Acreditación EMA ME-57 (calificación de equipos e instalaciones)",
        ],
    },
};

const accreditations = [
    { code: "EMA T-225", label: "Temperatura", detail: "Calibración de -33.7 °C a 150 °C con trazabilidad al CENAM.", icon: Thermometer },
    { code: "EMA H-98", label: "Humedad relativa", detail: "Calibración de 20 % a 80 % H.R. para termohigrómetros y registradores.", icon: Droplets },
    { code: "EMA ME-57", label: "Calificación", detail: "Calificación de equipos e instalaciones en rangos críticos.", icon: ShieldCheck },
];

const values = [
    { title: "Trazabilidad", desc: "Cada medición se vincula a los patrones nacionales del CENAM, con incertidumbre documentada." },
    { title: "Imparcialidad", desc: "Operamos bajo los requisitos de competencia e independencia de la norma NMX-EC-17025." },
    { title: "Respaldo documental", desc: "Entregamos evidencia técnica exhaustiva, útil ante auditorías y programas de calidad." },
    { title: "Cobertura nacional", desc: "Servicios en sitio en cualquier punto de la República Mexicana desde Jalisco." },
];

export function About() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Nosotros"
                description="CAYCER Ingeniería y Metrología es un laboratorio acreditado por la EMA (T-225, H-98, ME-57) bajo la norma NMX-EC-17025-IMNC-2018, con más de 8 años de experiencia y cobertura nacional desde Jalisco."
                path="/nosotros"
                schema={aboutSchema}
            />
            <Navbar />
            <main className="grow">
                {/* Hero */}
                <section className="pt-36 pb-20 bg-linear-to-br from-brand-dark via-slate-900 to-brand text-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-cyan-300 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6">
                            Ingeniería y Metrología
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 text-white">
                            Precisión que respalda decisiones críticas
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl">
                            CAYCER es un laboratorio mexicano especializado en calibración de instrumentos,
                            calificación de equipos e instalaciones y validación de procesos. Con más de 8 años
                            de experiencia, ayudamos a las industrias farmacéutica, alimentaria, química y
                            hospitalaria a cumplir sus requisitos normativos con evidencia técnica confiable.
                        </p>
                    </div>
                </section>

                {/* Misión / Visión */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200/60">
                            <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-5">
                                <Target size={26} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">Misión</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Asegurar la confiabilidad de las mediciones y procesos críticos de nuestros clientes
                                mediante servicios acreditados de metrología, calificación y validación, respaldados
                                por trazabilidad y competencia técnica.
                            </p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200/60">
                            <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-5">
                                <Eye size={26} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">Visión</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Ser el laboratorio de referencia en el occidente de México para la industria regulada,
                                reconocido por la rigurosidad técnica, la amplitud de sus acreditaciones y el respaldo
                                documental que entrega a cada cliente.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Acreditaciones */}
                <section className="py-20 bg-slate-50 border-y border-slate-100">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 text-brand font-bold text-sm uppercase tracking-widest mb-3">
                                <Award size={18} /> Acreditaciones vigentes
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Respaldados por la EMA</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                Contamos con acreditaciones ante la Entidad Mexicana de Acreditación bajo la norma
                                NMX-EC-17025-IMNC-2018, que certifica nuestra competencia técnica e imparcialidad.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {accreditations.map((a) => (
                                <div key={a.code} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200/60 text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mx-auto mb-4">
                                        <a.icon size={28} />
                                    </div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-cyan/10 text-brand text-xs font-bold mb-3">{a.code}</span>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{a.label}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{a.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Valores */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Nuestros pilares</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {values.map((v, i) => (
                                <div key={v.title} className="flex gap-4 p-6 rounded-2xl border border-slate-200/60">
                                    <div className="shrink-0 w-9 h-9 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">{v.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ubicación / cobertura */}
                <section className="py-16 bg-slate-50 border-t border-slate-100">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand/10 text-brand mb-4">
                            <MapPin size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">Base en Jalisco, cobertura nacional</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Operamos desde San Pedro Tlaquepaque, Jalisco, y damos servicio en sitio en toda la
                            República Mexicana, adaptándonos a la logística de cada proyecto.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-brand text-center">
                    <div className="container mx-auto px-6 max-w-2xl">
                        <h2 className="text-3xl font-bold text-white mb-4 font-display">
                            Trabajemos juntos en su próximo proyecto
                        </h2>
                        <p className="text-blue-100 mb-8 text-lg">
                            Conozca cómo nuestras acreditaciones respaldan el cumplimiento de su operación.
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
