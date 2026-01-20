import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Settings, ShieldCheck, ClipboardCheck } from "lucide-react"

import imgQualification from "@/assets/services/qualification.png"
import imgCalibration from "@/assets/services/calibration.png"
import imgValidation from "@/assets/services/validation.png"

const services = [
    {
        title: "Calificación EMA (Acreditación ME-57)",
        description: "Servicio acreditado para equipos, sistemas e instalaciones con vigencia a partir de 2025-02-26.",
        bullets: ["Cámaras climáticas y Muflas", "Equipos de refrigeración", "Campanas de flujo laminar", "Mapeo térmico de almacenes"],
        image: imgQualification,
        icon: ShieldCheck,
        link: "/servicios/calificacion"
    },
    {
        title: "Calibración Acreditada (T-225 / H-98)",
        description: "Garantizamos la exactitud en temperatura (-33°C a 150°C) y humedad relativa (20% a 80%).",
        bullets: ["Termómetros y Dataloggers", "Higrómetros y Sensores", "Manómetros y Presión", "Balanzas y Pesas Patrón"],
        image: imgCalibration,
        icon: Settings,
        link: "/servicios/metrologia"
    },
    {
        title: "Validación y GAMP 5",
        description: "Aseguramos el cumplimiento de sistemas computarizados, aire comprimido y cadena fría.",
        bullets: ["Sistemas ERP, CRM e Informáticos", "Aire comprimido y Esterilización", "Red de frío y Unidades de reparto", "Gestión de Riesgos de Calidad"],
        image: imgValidation,
        icon: ClipboardCheck,
        link: "/servicios/validacion"
    }
]

export function ServicesPreview() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-cyan uppercase bg-cyan/10 rounded-full">
                        Expertos en Cumplimiento
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-slate-900 leading-tight">
                        Soluciones con <span className="text-brand">Alta Tecnología</span> y Conocimiento
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Servicios técnicos especializados diseñados para superar las auditorías más exigentes de regulación sanitaria.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500 overflow-hidden"
                        >
                            {/* Image Header */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand/80 to-transparent opacity-60"></div>
                                <div className="absolute bottom-4 left-6">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white">
                                        <service.icon size={24} />
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-brand transition-colors leading-tight">
                                    {service.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <div className="space-y-2 mb-8 flex-grow">
                                    {service.bullets.map((bullet, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-500">
                                            <div className="w-1 h-1 rounded-full bg-cyan"></div>
                                            {bullet}
                                        </div>
                                    ))}
                                </div>

                                <Link to={service.link} className="mt-4">
                                    <Button className="w-full h-12 bg-gradient-to-r from-brand to-cyan text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:shadow-brand/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2">
                                        Más información
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link to="/servicios">
                        <Button variant="outline" size="lg" className="border-brand text-brand hover:bg-brand hover:text-white px-10 h-14 text-base font-bold rounded-full">
                            Ver Catálogo Completo
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
