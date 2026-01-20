import { useParams } from "react-router-dom"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Activity, Thermometer, Droplets, Wind, Truck, Warehouse, Factory, Laptop, ClipboardCheck, ShieldCheck, Settings, Snowflake, Gauge } from "lucide-react"
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
    considerations?: string[];
}

const serviceData: Record<string, ServiceInfo> = {
    "calificacion": {
        title: "Calificación de sistemas, equipos e instalaciones",
        subtitle: "Servicio acreditado por EMA (ME-57) para máxima confiabilidad.",
        description: "La calificación es el proceso de aseguramiento de que un instrumento, equipo, sistema o instalación es apropiado para el uso propuesto y que su funcionamiento está de acuerdo a las especificaciones. Este servicio consta de cuatro etapas esenciales: Calificación de Diseño (CD; DQ), Calificación de Instalación (CI; IQ), Calificación de Operación (CO; OQ) y Calificación de Desempeño (CE; PQ).",
        image: imgQualification,
        considerations: [
            "Recomendaciones del fabricante (manual y ficha técnica)",
            "Requisitos de la instalación Eléctrica",
            "Protección contra perturbaciones Eléctricas",
            "PNO's de operación, mantenimiento y limpieza",
            "Plano de ubicación de los equipos",
            "Verificación operativa y programa de mantenimiento",
            "Criterios de aceptación definidos"
        ],
        detailedSections: [
            {
                title: "Equipos de Frío y Ultra-frío",
                description: "Calificación técnica en rangos críticos de refrigeración y congelación.",
                icon: Snowflake,
                items: [
                    "Congelación (-25°C a -10°C)",
                    "Ultracongelación (-86°C a -50°C)",
                    "Refrigeración (2°C a 8°C)",
                    "Pruebas de apertura de puerta",
                    "Pruebas de hermeticidad",
                    "Mapeo térmico dinámico"
                ],
                gridItems: [
                    { label: "Acreditación", value: "EMA ME-57", icon: ShieldCheck },
                    { label: "Vigencia", value: "Desde 2025-02-26", icon: Activity }
                ]
            },
            {
                title: "Áreas Limpias y Flujo Laminar",
                description: "Clasificación de áreas desde Clase ISO 1 hasta Clase ISO 9 según ISO 14644-1.",
                icon: Wind,
                items: [
                    "Conteo de partículas viables",
                    "Velocidad y volumen de aire",
                    "Presión diferencial de salas",
                    "Determinación de patrón de flujo",
                    "Medición de temperatura y humedad",
                    "Campanas de flujo laminar"
                ]
            },
            {
                title: "Esterilización y Alta Temperatura",
                description: "Validación de autoclaves industriales y de laboratorio con parámetros precisos.",
                icon: Gauge,
                items: [
                    "Autoclave Industrial (134°C)",
                    "Autoclave Laboratorio (121°C)",
                    "Presión: 100 a 200 kPa",
                    "Tiempo: 3 a 30 minutos",
                    "Horno/Mufla (50°C a 1800°C)",
                    "Lecho fluidizado (50°C a 800°C)"
                ]
            },
            {
                title: "Almacenes y Mapeo Ambiental",
                description: "Servicio acreditado para el control de condiciones en recintos de almacenamiento.",
                icon: Warehouse,
                items: [
                    "Monitoreo recomendado (7 días)",
                    "Acondicionamiento (18°C a 25°C)",
                    "Temp. Ambiente (<30°C / <65% HR)",
                    "Mapeo ambiental (Temp. y HR)",
                    "Mapeo térmico en recintos",
                    "Determinación de puntos críticos"
                ]
            },
            {
                title: "Simulación de Condiciones",
                description: "Calificación de cámaras climáticas e incubadoras para estudios de estabilidad.",
                icon: Thermometer,
                items: [
                    "Cámara climática (-200 a 600°C)",
                    "Humedad relativa (10% a 90%)",
                    "Incubadora (5°C a 75°C)",
                    "Estudios de estabilidad de fármacos",
                    "Baño líquido (-80°C a 300°C)",
                    "Baños agitados y sales"
                ]
            },
            {
                title: "Logística y Unidades Móviles",
                description: "Garantizamos la integridad del producto durante su distribución y transporte.",
                icon: Truck,
                items: [
                    "Unidad Refrigerada (2°C a 8°C)",
                    "Unidad de congelación (-25 a -10°C)",
                    "Temperatura ambiente (<30°C)",
                    "Temperatura controlada (18-25°C)",
                    "Mapeo en ruta dinámica",
                    "Sensores de impacto y apertura"
                ]
            }
        ]
    },
    "metrologia": {
        title: "Calibración de instrumentos de medición",
        subtitle: "Certificamos la exactitud de sus instrumentos con trazabilidad comprobable.",
        description: "Contamos con acreditaciones EMA específicas para asegurar la máxima confiabilidad en sus mediciones bajo la norma NMX-EC-17025.",
        image: imgCalibration,
        detailedSections: [
            {
                title: "Temperatura (EMA T-225)",
                description: "Servicio acreditado vigente a partir de 2024-12-04.",
                icon: Thermometer,
                items: [
                    "Alcance: -33 ⁰C a 150 ⁰C",
                    "Calibración de Termómetros (Digital/Líquido)",
                    "Termopares, Termopares y RTD/PT100",
                    "Dataloggers y Sondas de temperatura",
                    "Graficadores y Controladores"
                ],
                gridItems: [
                    { label: "Alcance", value: "-33 a 150 ⁰C", icon: Thermometer },
                    { label: "Código", value: "EMA T-225", icon: ShieldCheck }
                ]
            },
            {
                title: "Humedad Relativa (EMA H-98)",
                description: "Servicio acreditado vigente a partir de 2024-12-04.",
                icon: Droplets,
                items: [
                    "Alcance: 20% a 80% H.R.",
                    "Termohigrómetros e Higrómetros",
                    "Sensores de humedad y Dataloggers",
                    "Registradores de humedad"
                ],
                gridItems: [
                    { label: "Alcance", value: "20% a 80% H.R.", icon: Droplets },
                    { label: "Código", value: "EMA H-98", icon: ShieldCheck }
                ]
            },
            {
                title: "Otras Magnitudes",
                description: "Calibración con trazabilidad nacional para diversos procesos.",
                icon: Settings,
                items: [
                    "Presión: Manómetros, sensores y diferencial",
                    "Masa: Balanzas, básculas y pesas patrón",
                    "Instalación de presión en salas limpias"
                ]
            }
        ]
    },
    "validacion": {
        title: "Validación de procesos y sistemas",
        subtitle: "Evaluación integral del ciclo de vida para garantizar consistencia.",
        description: "Implementamos estrategias científicas para demostrar que sus procesos y sistemas cumplen con la calidad requerida de forma robusta.",
        image: imgValidation,
        detailedSections: [
            {
                title: "Procesos de fabricación",
                description: "Recopilación de datos por tres corridas continuas para garantizar la consistencia del producto.",
                icon: Factory,
                items: [
                    "Validación basada en evaluación de riesgos",
                    "Definición de tipo de prueba/monitoreo",
                    "Criterios de aceptación normativos",
                    "Evaluación de datos y acciones",
                    "Tres corridas continuas de validación",
                    "Cumplimiento de atributos de calidad"
                ]
            },
            {
                title: "Esterilización",
                description: "Validación de ciclos para garantizar la eliminación de microorganismos según normativa.",
                icon: Activity,
                items: [
                    "Patrones de carga definidos",
                    "Perfil térmico (12 termopares)",
                    "Validación en cámara vacía y con carga",
                    "Tres corridas continuas",
                    "Control de temperatura, tiempo y presión",
                    "Cumplimiento de requerimientos de usuario"
                ]
            },
            {
                title: "Sistemas Computacionales",
                description: "Pruebas de integridad y seguridad bajo el cumplimiento GxP y GAMP 5.",
                icon: Laptop,
                items: [
                    "Componentes Software y Hardware",
                    "Definición de perfiles de usuario",
                    "Seguridad y respaldo de datos",
                    "Restauración y almacenamiento",
                    "Programas de capacitación y auditoría",
                    "Pruebas de funcionamiento por usuario"
                ]
            },
            {
                title: "Sistemas HVAC",
                description: "Aseguramiento de la calidad de aire y niveles de limpieza según ISO 14644-1.",
                icon: Wind,
                items: [
                    "Clase ISO y nivel de limpieza",
                    "Dimensiones de salas limpias",
                    "Caídas de presión diferencial",
                    "Conteo de partículas viables/no viables",
                    "Mediciones de flujo y volumen aire",
                    "Cambios de aire por hora"
                ]
            },
            {
                title: "Sistema de aire comprimido",
                description: "Calificación de generación, almacenamiento y distribución según ISO 8573.",
                icon: Gauge,
                items: [
                    "Diseño y puntos de uso",
                    "Clasificación de limpieza ISO 8573",
                    "Partículas viables y totales",
                    "Punto de rocío e hidrocarburos",
                    "Gases contaminantes y fugas",
                    "Medición de caídas de presión"
                ]
            },
            {
                title: "Cadena Fría",
                description: "Mantenimiento de rango 2-8 ºC en envíos locales y foráneos por triplicado.",
                icon: Truck,
                items: [
                    "Tiempo de recorrido (Local/Foráneo)",
                    "Calidad de hieleras y refrigerantes",
                    "Material de embalaje optimizado",
                    "Logística (Terrestre, Aérea, etc.)",
                    "Envío por triplicado (Trayecto largo)",
                    "Mantenimiento de 2 a 8 ºC garantizado"
                ]
            },
            {
                title: "Gestión de riesgos de calidad",
                description: "Control preventivo basado en el análisis de puntos críticos.",
                icon: ShieldCheck,
                items: [
                    "Análisis de riesgo detallado",
                    "Estrategias de mitigación",
                    "Monitoreo continuo de riesgos",
                    "Capacitación de personal operativo"
                ]
            }
        ],
        considerations: [
            "Soporte documental adecuado (procedimientos, formatos, protocolos)",
            "Áreas y Equipos Calificados y Calibrados (vigentes)",
            "Responsables de actividad bien definidos en PNO's",
            "Plan Maestro de Validación definido y autorizado",
            "Capacitación de personal",
            "Tiempos de proceso definidos"
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

                {/* General Considerations Section */}
                {service.considerations && (
                    <section className="py-16 bg-slate-50 border-y border-slate-100">
                        <div className="container mx-auto px-6">
                            <div className="max-w-4xl mx-auto">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center text-brand">
                                        <ClipboardCheck size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">¿Qué se debe tener en cuenta?</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.considerations.map((point: string, idx: number) => (
                                        <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-200/50">
                                            <div className="flex-shrink-0 w-6 h-6 bg-cyan/10 rounded-full flex items-center justify-center text-cyan text-xs font-bold">
                                                {idx + 1}
                                            </div>
                                            <span className="text-slate-700 font-medium">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Detailed Sections (Grid Layout) */}
                <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {service.detailedSections.map((section: ServiceSection, index: number) => {
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
                                                {section.items.map((item: string, idx: number) => (
                                                    <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-cyan/20 transition-colors">
                                                        <CheckCircle2 className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                                                        <span className="text-sm font-medium text-slate-700 leading-tight">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.gridItems && (
                                            <div className="space-y-3 mt-auto pt-6 border-t border-slate-100">
                                                {section.gridItems.map((gridItem: any, idx: number) => {
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
