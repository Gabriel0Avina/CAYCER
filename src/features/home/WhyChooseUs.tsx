import { motion } from "framer-motion"
import { Clock, Calendar, Zap, Headphones } from "lucide-react"

const reasons = [
    {
        title: "Cotizaciones Rápidas",
        description: "Respondemos el mismo día de su solicitud. Nuestro equipo técnico evalúa sus necesidades y presenta una cotización detallada en menos de 24 horas.",
        icon: Clock,
        color: "from-blue-600 to-cyan-500"
    },
    {
        title: "Programación Inmediata",
        description: "Agenda tu servicio sin demoras. Una vez aprobada la cotización, coordinamos la visita ajustándonos a tus horarios operativos.",
        icon: Calendar,
        color: "from-cyan-600 to-teal-500"
    },
    {
        title: "Entrega en 5 Días",
        description: "Certificados y reportes garantizados en tiempo récord. Documentación técnica completa con trazabilidad en máximo 5 días hábiles.",
        icon: Zap,
        color: "from-brand to-brand-light"
    },
    {
        title: "Asesoría Integral",
        description: "Acompañamiento técnico completo en cada etapa. Planeación, ejecución y seguimiento post-entrega para garantizar el cumplimiento normativo.",
        icon: Headphones,
        color: "from-teal-600 to-cyan-600"
    }
]

export function WhyChooseUs() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        ¡Razones Principales para elegirnos!
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Nos distinguimos por nuestro compromiso con la excelencia y la satisfacción del cliente
                    </p>
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-cyan/30 text-center"
                        >
                            {/* Icon - Centered */}
                            <div className="flex justify-center mb-6">
                                <div className={`w-20 h-20 bg-linear-to-br ${reason.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <reason.icon size={40} strokeWidth={2.5} />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {reason.title}
                            </h3>
                            <p className="text-slate-700 leading-relaxed font-medium">
                                {reason.description}
                            </p>

                            {/* Decorative Gradient */}
                            <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-linear-to-br ${reason.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
