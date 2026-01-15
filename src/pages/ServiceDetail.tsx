import { useParams } from "react-router-dom"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Activity, Thermometer, Gauge, Layout, Home, Droplets, FlaskConical, Settings, Factory, Snowflake, Wind, Truck, Warehouse, CloudSun, Waves, Flame } from "lucide-react"
import { SEO } from "@/components/SEO"

import imgQualification from "@/assets/services/qualification.png"
import imgCalibration from "@/assets/services/calibration.png"
import imgValidation from "@/assets/services/validation.png"

interface ServiceSection {
    title: string;
    description?: string;
    items?: string[];
    icon?: any;
    gridItems?: {
        label: string;
        value: string;
        icon?: any;
    }[];
}
//...
interface ServiceInfo {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    detailedSections: ServiceSection[];
}

const serviceData: Record<string, ServiceInfo> = {
    "calificacion": {
        title: "Calificación de sistemas, equipos e instalaciones",
        subtitle: "Aseguramiento técnico y cumplimiento normativo integral.",
        description: "La calificación es el proceso de aseguramiento de que un instrumento, equipo, sistema o instalación es apropiado para el uso propuesto y que su funcionamiento está de acuerdo a las especificaciones establecidas por el usuario y el proveedor.",
        image: imgQualification,
        detailedSections: [
            {
                title: "Congelación y Ultracongelación",
                description: "Validación de equipos de almacenamiento crítico a bajas temperaturas.",
                icon: Snowflake,
                items: [
                    "Congelación: -25°C a -10°C",
                    "Ultracongelación: -86°C a -50°C",
                    "Mapeo de distribución de temperatura",
                    "Pruebas de apertura de puerta y falla de energía"
                ]
            },
            {
                title: "Esterilización (Autoclaves)",
                description: "Calificación de ciclos de esterilización para laboratorios e industria.",
                icon: Flame,
                gridItems: [
                    { label: "Laboratorio", value: "121°C", icon: FlaskConical },
                    { label: "Industrial", value: "134°C", icon: Factory },
                    { label: "Temp. Rango", value: "110°C a 134°C", icon: Thermometer },
                    { label: "Presión", value: "100 a 200 kPa", icon: Gauge },
                    { label: "Tiempo", value: "3 a 30 min", icon: Activity }
                ]
            },
            {
                title: "Refrigeración",
                description: "Cadena de frío segura entre 2°C y 8°C.",
                icon: Thermometer,
                items: [
                    "Rango: 2°C a 8°C",
                    "Pruebas de apertura de puerta",
                    "Pruebas de hermeticidad",
                    "Mapeo térmico en carga y vacío"
                ]
            },
            {
                title: "Áreas Limpias y HVAC",
                description: "Certificación de aire según ISO 14644-1.",
                icon: Wind,
                items: [
                    "Clasificación ISO 1 a ISO 9",
                    "Conteo de partículas",
                    "Renovaciones de aire por hora",
                    "Diferenciales de presión"
                ]
            },
            {
                title: "Almacenes",
                description: "Mapeo térmico y de humedad para áreas de almacenamiento.",
                icon: Warehouse,
                gridItems: [
                    { label: "Acondicionado", value: "18°C a 25°C", icon: Home },
                    { label: "Ambiente", value: "<30°C / <65% HR", icon: Layout },
                    { label: "Monitoreo", value: "7 días continuos", icon: Activity }
                ]
            },
            {
                title: "Cámaras Climáticas e Incubadoras",
                description: "Estudios de estabilidad y uniformidad.",
                icon: CloudSun,
                items: [
                    "Cámara Climática: -200°C a 600°C / 10% a 90% HR",
                    "Incubadora: 5°C a 75°C",
                    "Estudios de estabilidad y uniformidad"
                ]
            },
            {
                title: "Medios Térmicos",
                description: "Baños líquidos, hornos y muflas.",
                icon: Waves,
                gridItems: [
                    { label: "Baño Líquido", value: "-80°C a 300°C", icon: Droplets },
                    { label: "Horno/Mufla", value: "50°C a 1800°C", icon: Thermometer },
                    { label: "Lecho Fluidizado", value: "50°C a 800°C", icon: Settings }
                ]
            },
            {
                title: "Unidades de Transporte",
                description: "Calificación de transporte para cadena de distribución.",
                icon: Truck,
                items: [
                    "Ambiente: <30°C ; <65% HR",
                    "Controlada: 18°C a 25°C",
                    "Refrigerada: 2°C a 8°C",
                    "Congelación: -25°C a -10°C"
                ]
            }
        ]
    },
    // ... kept other services same ...

    "metrologia": {
        title: "Calibración de instrumentos de medición",
        subtitle: "Certificamos la exactitud de sus instrumentos con trazabilidad comprobable.",
        description: "La calibración es un proceso que certifica si la medida obtenida por un instrumento es compatible con lo esperado y que es apto para su uso. Contamos con acreditación EMA y trazabilidad al CENAM para asegurar la máxima confiabilidad en sus mediciones.",
        image: imgCalibration,
        detailedSections: [
            {
                title: "Temperatura",
                description: "Servicio Acreditado ante la EMA. Garantizamos mediciones precisas para el control térmico de sus procesos.",
                icon: Thermometer,
                items: [
                    "Alcance: -34 a 150 °C", // Highlighting Scope
                    "Resolución: 0.001 °C", // Highlighting Resolution
                    "Calibración de termómetros de lectura directa, digital y análogo",
                    "Termómetro con sonda",
                    "Termómetro tipo termopar",
                    "Termómetro de líquido en vidrio"
                ],
                gridItems: [
                    { label: "Alcance", value: "-34 a 150 °C", icon: Thermometer },
                    { label: "Resolución", value: "0,001 °C", icon: Activity }
                ]
            },
            {
                title: "Humedad",
                description: "Servicio Acreditado ante la EMA. Soluciones para el monitoreo ambiental y de almacenamiento.",
                icon: Droplets,
                items: [
                    "Alcance: 20 a 80 % H.R.",
                    "Resolución: 0,01 % H.R.",
                    "Calibración de termohigrómetros de lectura directa",
                    "Termohigrómetros dataloggers",
                    "Higrómetro"
                ],
                gridItems: [
                    { label: "Alcance", value: "20 a 80 % H.R.", icon: Droplets },
                    { label: "Resolución", value: "0,01 % H.R.", icon: Activity }
                ]
            },
            {
                title: "Presión",
                description: "Servicio con trazabilidad al CENAM. Cobertura amplia para diversos instrumentos de presión.",
                icon: Gauge,
                items: [
                    "Alcance: 0 a 30 PSI",
                    "Alcance: 0 a 2 bar",
                    "Alcance: 0 a 206 kPa",
                    "Alcance: 0 a 830 inH2O",
                    "Calibración de manómetro",
                    "Vacuómetro y Manovacuómetro",
                    "Presión diferencial",
                    "Barómetro"
                ],
                gridItems: [
                    { label: "Alcance", value: "0 a 30 PSI / 2 bar", icon: Gauge },
                    { label: "Unidades", value: "kPa, inH2O, PSI, bar", icon: Settings }
                ]
            },
            {
                title: "Beneficios de Nuestro Servicio",
                icon: CheckCircle2,
                items: [
                    "Asegurar la calidad en los procesos analíticos",
                    "Reducir costos y aumentar productividad",
                    "Cumplir con requisitos de regulación sanitaria (COFEPRIS)",
                    "Mantener el funcionamiento adecuado",
                    "Incrementar la vida útil de los equipos"
                ]
            }
        ]
    },
    "validacion": {
        title: "Validación de procesos",
        subtitle: "Evidencia científica y robustez operativa del ciclo de vida.",
        description: "Evaluación integral del ciclo de vida del producto para demostrar funcionalidad, consistencia y robustez en la calidad del producto.",
        image: imgValidation,
        detailedSections: [
            {
                title: "¿Qué se debe tener en cuenta?",
                description: "Requisitos previos para una validación exitosa:",
                icon: Activity,
                items: [
                    "Soporte documental adecuado y sistema de documentación controlado",
                    "Áreas y Equipos Calificados y Calibrados (vigentes)",
                    "Responsables de actividad bien definidos en PNO's",
                    "Plan Maestro de Validación definido y autorizado",
                    "Capacitación de personal en GxP",
                    "Tiempos de proceso definidos y estabilizados"
                ]
            },
            {
                title: "Fabricación y Acondicionamiento",
                description: "Validación por tres corridas continuas para garantizar consistencia.",
                icon: Factory,
                items: [
                    "Evaluación de riesgos para definir número de lotes",
                    "Criterios de aceptación aplicables",
                    "Monitoreo de parámetros críticos de proceso",
                    "Evaluación estadística de datos"
                ]
            },
            {
                title: "Esterilización y Autoclaves",
                description: "Perfiles térmicos con 12 termopares en cámara vacía y con carga.",
                icon: Flame,
                items: [
                    "Definición de patrones de carga",
                    "Validación de parámetros: 110-134°C | 100-200 kPa",
                    "Pruebas por triplicado para validación de ciclos",
                    "Cumplimiento con normativa vigente y requerimientos de usuario"
                ]
            },
            {
                title: "Sistemas Computarizados",
                description: "Aseguramos la integridad de datos bajo GAMP 5 y CFR 21 Part 11.",
                icon: Settings,
                items: [
                    "Inventario de componentes de software y hardware",
                    "Definición de perfiles de usuario y seguridad",
                    "PNO's de respaldo, restauración y seguridad de la información",
                    "Pruebas de funcionalidad con cada perfil de usuario"
                ]
            },
            {
                title: "Sistemas HVAC y Aire Comprimido",
                description: "Clasificación de salas limpias según ISO 14644-1 y calidad de aire ISO 8573.",
                icon: Wind,
                items: [
                    "Conteo de partículas viables y no viables",
                    "Mediciones de flujo, renovaciones de aire y presión diferencial",
                    "Detección de puntos de rocío, hidrocarburos y contaminantes en aire",
                    "Cálculo de cambios de aire por hora y pruebas de fuga"
                ]
            },
            {
                title: "Cadena Fría y Logística",
                description: "Validación de trayectos críticos por triplicado (Locales y Foráneos).",
                icon: Truck,
                items: [
                    "Pruebas en trayectos reales (terrestre, aéreo, marítimo)",
                    "Validación de embalaje y materiales aislantes",
                    "Mantenimiento de rango (2 a 8 ºC) hasta el cliente final",
                    "Evaluación de hieleras y configuraciones de refrigerantes"
                ]
            }
        ]
    }
}

export function ServiceDetail() {
    const { slug } = useParams<{ slug: string }>()
    const service = slug ? serviceData[slug] : null

    if (!service) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Servicio no encontrado</h1>
                        <p className="text-slate-600">El servicio que buscas no existe.</p>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title={service.title}
                description={service.subtitle + " " + service.description.substring(0, 150) + "..."}
                type="article"
            />
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section with Image */}
                <section className="relative h-[60vh] min-h-[400px]  flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full  h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand/85 to-brand/70"></div>
                    </div>

                    {/* Texture Overlay */}
                    <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>

                    {/* Content */}
                    <div className="container mx-auto px-6 relative z-10 text-center text-white">
                        <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase bg-white/10 border border-white/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
                            Servicio Especializado
                        </span>
                        <h1 className="text-4xl text-white md:text-6xl font-bold font-display mb-4 drop-shadow-lg">
                            {service.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto font-light">
                            {service.subtitle}
                        </p>
                    </div>

                    {/* Bottom Gradient */}
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
                </section>

                {/* Overview Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Descripción General</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Detailed Sections (Grid Layout) */}
                <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {service.detailedSections.map((section, index) => {
                                const SectionIcon = section.icon
                                return (
                                    <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                                        {SectionIcon && (
                                            <div className="w-14 h-14 bg-gradient-to-br from-brand to-cyan rounded-xl flex items-center justify-center text-white mb-6 shadow-md">
                                                <SectionIcon size={28} strokeWidth={1.5} />
                                            </div>
                                        )}

                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                            {section.title}
                                        </h3>

                                        {section.description && (
                                            <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                                                {section.description}
                                            </p>
                                        )}

                                        {section.items && (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                                {section.items.map((item, idx) => (
                                                    <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-cyan/20 transition-colors">
                                                        <CheckCircle2 className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                                                        <span className="text-sm font-medium text-slate-700 leading-tight">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.gridItems && (
                                            <div className="space-y-3 mt-auto pt-6 border-t border-slate-100">
                                                {section.gridItems.map((gridItem, idx) => {
                                                    const Icon = gridItem.icon
                                                    return (
                                                        <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                                                            {Icon && (
                                                                <Icon size={18} className="text-brand flex-shrink-0" />
                                                            )}
                                                            <div className="flex-1 min-w-0">
                                                                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                                                                    {gridItem.label}
                                                                </div>
                                                                <div className="text-sm font-medium text-slate-900 truncate">
                                                                    {gridItem.value}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900 z-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-slate-900 to-brand-dark/90"></div>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-brand/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-cyan/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 text-white leading-tight">
                            ¿Necesita asesoría técnica <span className="text-cyan">especializada</span>?
                        </h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Nuestro equipo de expertos en metrología está listo para diseñar la estrategia de cumplimiento perfecta para su industria.
                        </p>
                        <a
                            href="https://wa.me/523335071061?text=Hola%20Caycer,%20necesito%20información%20sobre%20servicios."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <Button
                                variant="cta"
                                size="lg"
                                className="h-16 px-12 text-lg font-bold rounded-full bg-gradient-to-r from-brand to-cyan text-white hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300 border border-white/10"
                            >
                                Contactar a un Especialista
                            </Button>
                        </a>

                        <p className="mt-8 text-sm text-slate-400">
                            Respuesta garantizada en menos de 24 horas hábiles.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
