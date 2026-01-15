import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Settings, ShieldCheck, ClipboardCheck, Thermometer, Droplets, Gauge, Wind, Microscope, Factory, FlaskConical, Snowflake, CheckCircle } from "lucide-react"
import servicesHeroImg from "@/assets/services_hero.png"
import { SEO } from "@/components/SEO"

const comprehensiveServices = [
    {
        category: "Calibración de Instrumentos de Medición",
        icon: Settings,
        description: "Servicios de calibración con trazabilidad al CENAM y acreditación EMA (T-225), bajo la norma NMX-EC-17025-IMNC-2018.",
        color: "from-blue-600 to-cyan-500",
        services: [
            {
                name: "Temperatura",
                icon: Thermometer,
                details: [
                    "Servicio Acreditado ante la EMA",
                    "Alcance: -34 a 150 °C",
                    "Resolución: 0.001 °C",
                    "Termómetros (Directa, Digital, Análogo)",
                    "Sondas, Termopares y Vidrio"
                ]
            },
            {
                name: "Humedad Relativa",
                icon: Droplets,
                details: [
                    "Servicio Acreditado ante la EMA",
                    "Alcance: 20 a 80 % H.R.",
                    "Resolución: 0.01 % H.R.",
                    "Termohigrómetros de lectura directa",
                    "Dataloggers e Higrómetros"
                ]
            },
            {
                name: "Presión",
                icon: Gauge,
                details: [
                    "Trazabilidad al CENAM",
                    "Alcance: 0-30 PSI | 0-2 bar | 0-206 kPa",
                    "Manómetros y Vacuómetros",
                    "Presión Diferencial y Barómetros"
                ]
            },
            {
                name: "Mediciones Especiales",
                icon: Microscope,
                details: [
                    "Balanzas analíticas",
                    "Micropipetas y volumetría",
                    "Cronómetros y temporizadores",
                    "Instrumentos dimensionales"
                ]
            }
        ]
    },
    {
        category: "Calificación de Equipos e Instalaciones",
        icon: ShieldCheck,
        description: "Evidencia documentada del cumplimiento de especificaciones técnicas y regulatorias.",
        color: "from-brand to-brand-light",
        services: [
            {
                name: "Calificación de Diseño (DQ)",
                icon: CheckCircle,
                details: [
                    "Revisión de especificaciones de usuario (URS)",
                    "Análisis de riesgos de calidad (QRM)",
                    "Verificación de cumplimiento normativo",
                    "Evaluación de proveedores"
                ]
            },
            {
                name: "Calificación de Instalación (IQ)",
                icon: CheckCircle,
                details: [
                    "Verificación de instalación conforme a diseño",
                    "Inspección de servicios auxiliares",
                    "Revisión de documentación técnica",
                    "Pruebas de integración inicial"
                ]
            },
            {
                name: "Calificación de Operación (OQ)",
                icon: CheckCircle,
                details: [
                    "Pruebas funcionales del equipo",
                    "Verificación de alarmas y controles",
                    "Mapeo de temperatura/humedad",
                    "Pruebas en condiciones límite"
                ]
            },
            {
                name: "Calificación de Desempeño (PQ)",
                icon: CheckCircle,
                details: [
                    "Verificación en condiciones reales de proceso",
                    "Validación de ciclos de operación",
                    "Estudios de reproducibilidad",
                    "Capacitación de personal"
                ]
            }
        ]
    },
    {
        category: "Validación de Procesos y Sistemas",
        icon: ClipboardCheck,
        description: "Evaluación científica que demuestra que un proceso produce resultados consistentes y predecibles.",
        color: "from-cyan-600 to-teal-500",
        services: [
            {
                name: "Procesos de Esterilización",
                icon: FlaskConical,
                details: [
                    "Autoclave (vapor saturado)",
                    "Calor seco (horno)",
                    "Óxido de etileno (ETO)",
                    "Radiación gamma",
                    "Estudios de carga biológica"
                ]
            },
            {
                name: "Sistemas HVAC y Áreas Clasificadas",
                icon: Wind,
                details: [
                    "Cumplimiento ISO 14644 (Salas limpias)",
                    "Conteo de partículas",
                    "Pruebas de integridad de filtros HEPA",
                    "Estudios de flujo de aire",
                    "Presión diferencial y recuperación"
                ]
            },
            {
                name: "Procesos de Fabricación",
                icon: Factory,
                details: [
                    "Validación prospectiva",
                    "Validación concurrente",
                    "Revalidación periódica",
                    "Estudios de peor caso",
                    "Validación de limpieza"
                ]
            },
            {
                name: "Cadena de Frío",
                icon: Snowflake,
                details: [
                    "Calificación de cuartos fríos",
                    "Refrigeradores y congeladores",
                    "Unidades de transporte",
                    "Estudios de apertura de puertas",
                    "Mapeo térmico 3D"
                ]
            },
            {
                name: "Sistemas Computarizados",
                icon: CheckCircle,
                details: [
                    "Cumplimiento GAMP 5",
                    "21 CFR Part 11 (FDA)",
                    "Validación de software",
                    "Gestión de riesgos (ICH Q9)",
                    "Trazabilidad de requisitos"
                ]
            }
        ]
    }
]

export function Services() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Catálogo de Servicios Industriales"
                description="Explore nuestro portafolio completo de servicios: Metrología, Calificación de Equipos y Validación de Procesos bajo normas internacionales."
            />
            <Navbar />
            <main className="flex-grow">
                {/* Hero Header */}
                <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={servicesHeroImg}
                            alt="Laboratorio de Metrología Industrial"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/60 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                    </div>

                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto text-center text-white"
                        >
                            <span className=" mt-12 inline-block text-xs font-bold tracking-[0.25em] uppercase bg-white/10 border border-white/20 rounded-full px-6 py-2 mb-8 backdrop-blur-md shadow-lg">
                                Catálogo Completo
                            </span>
                            <h1 className="text-5xl text-white md:text-7xl font-bold font-display mb-8 drop-shadow-2xl leading-tight">
                                Nuestro Portafolio <br /> de Servicios
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto font-light drop-shadow-lg">
                                Soluciones técnicas de alta precisión respaldadas por más de 15 años de experiencia y tecnología de vanguardia.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/50 to-transparent z-10"></div>
                </section>

                {/* Comprehensive Services */}
                <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50/20">
                    <div className="container mx-auto px-6">
                        {comprehensiveServices.map((category, catIndex) => (
                            <motion.div
                                key={catIndex}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.2, duration: 0.6 }}
                                className="mb-24 last:mb-0"
                            >
                                {/* Category Header */}
                                <div className="flex items-start gap-6 mb-8">
                                    <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                                        <category.icon size={40} strokeWidth={2} />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                                            {category.category}
                                        </h2>
                                        <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                            {category.description}
                                        </p>
                                        <Link
                                            to={catIndex === 0 ? "/servicios/metrologia" : catIndex === 1 ? "/servicios/calificacion" : "/servicios/validacion"}
                                            className="inline-block"
                                        >
                                            <Button
                                                variant="outline"
                                                className={`border-2 bg-gradient-to-r ${category.color} text-white border-transparent hover:shadow-lg transition-all font-semibold`}
                                            >
                                                Ver detalles completos
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                {/* Services Grid */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.services.map((service, sIndex) => (
                                        <motion.div
                                            key={sIndex}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: sIndex * 0.1, duration: 0.5 }}
                                            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-slate-100"
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white`}>
                                                    <service.icon size={24} />
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900">
                                                    {service.name}
                                                </h3>
                                            </div>
                                            <ul className="space-y-2.5">
                                                {service.details.map((detail, dIndex) => (
                                                    <li key={dIndex} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand to-cyan mt-1.5 flex-shrink-0"></div>
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Trust Footer */}
                <section className="py-16 bg-slate-900 text-white">
                    <div className="container mx-auto px-6 text-center">
                        <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Todos nuestros servicios incluyen <span className="text-cyan font-semibold">soporte documental exhaustivo</span>, <span className="text-cyan font-semibold">trazabilidad certificada</span> y <span className="text-cyan font-semibold">cumplimiento</span> con las normativas <span className="font-bold">NMX-EC-17025</span>, <span className="font-bold">NOM-059-SSA1</span> y <span className="font-bold">GAMP 5</span>.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
