import { Target, Eye, ShieldCheck, Users, Lightbulb, Scale } from "lucide-react"
import { motion } from "framer-motion"

const values = [
    { name: "Honestidad", icon: ShieldCheck },
    { name: "Colaboración", icon: Users },
    { name: "Responsabilidad", icon: Target },
    { name: "Confianza", icon: ShieldCheck },
    { name: "Innovación", icon: Lightbulb },
    { name: "Imparcialidad", icon: Scale }
]

export function HomeAbout() {
    return (
        <section className="relative py-32 bg-slate-50 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 z-0"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-cyan/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-4xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
                    >
                        <div className="w-2 h-2 rounded-full bg-cyan animate-pulse"></div>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand">
                            Sobre Nosotros
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight font-display"
                    >
                        Impulsando la <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan">Excelencia Industrial</span> mediante la precisión
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-slate-600 leading-relaxed max-w-3xl"
                    >
                        Somos una empresa dedicada a la mejora de la calidad, ofrecemos soluciones con alta tecnología y conocimiento a través de calibración de instrumentos de medición, calificación de equipos e instalaciones, validación de procesos, sistemas críticos, sistemas computacionales, Cadena Fría, y Mantenimientos preventivos y correctivos.
                        Nuestro Sistema de Gestión está establecido con base a la{" "}
                        <span className="text-brand font-bold border-b-2 border-brand/20">NMX-EC-17025-IMNC-2018</span>.
                    </motion.p>
                </div>

                {/* Mission & Vision Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="group bg-white p-10 md:p-14 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand/5 transition-all duration-500 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                            <Target size={120} />
                        </div>
                        <div className="w-16 h-16 bg-cyan/10 rounded-2xl flex items-center justify-center text-cyan mb-8 group-hover:scale-110 transition-transform duration-500">
                            <Target size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-6 font-display">Misión</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Nuestra misión es transformar los desafíos técnicos de nuestros clientes en casos de éxito, garantizando el cumplimiento normativo y la seguridad sanitaria a través de servicios metrológicos de precisión absoluta.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="group bg-gradient-to-br from-brand to-brand-dark p-10 md:p-14 rounded-[2.5rem] text-white shadow-xl shadow-brand/20 hover:shadow-2xl hover:shadow-brand/30 transition-all duration-500 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-[0.1] group-hover:opacity-[0.15] transition-opacity">
                            <Eye size={120} />
                        </div>
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/10">
                            <Eye size={32} />
                        </div>
                        <h3 className="text-3xl font-bold mb-6 text-white font-display">Visión</h3>
                        <p className="text-blue-50 leading-relaxed text-lg">
                            Consolidarnos como el referente indiscutible en innovación y confiabilidad metrológica en México, forjando alianzas estratégicas que impulsen la competitividad global de nuestros socios comerciales.
                        </p>
                    </motion.div>
                </div>

                {/* Values Selection */}
                <div className="relative">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl font-bold text-slate-900 font-display">Nuestros Pilares</h3>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-brand to-cyan mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 hover:border-cyan shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-slate-50 group-hover:bg-cyan/10 rounded-xl flex items-center justify-center text-brand group-hover:text-cyan mb-4 transition-colors duration-300">
                                    <value.icon size={24} />
                                </div>
                                <span className="text-sm font-bold text-slate-700 tracking-wide">{value.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
