import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import servicesHeroImg from "@/assets/services_hero.png";
import { comprehensiveServices } from "@/features/services";

export function Services() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Catálogo de Servicios Industriales"
                description="Explore nuestro portafolio completo de servicios: Calibración, Calificación de Equipos y Validación de Procesos bajo normas internacionales."
                path="/servicios"
            />
            <Navbar />
            <main className="grow">
                {/* Hero Header */}
                <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={servicesHeroImg}
                            alt="Laboratorio de Calibración Industrial"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/80 to-slate-900/60 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
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
                                Nuestro Portafolio <br />de Servicios
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto font-light drop-shadow-lg">
                                Soluciones técnicas respaldadas por más de 8 años de experiencia y tecnología de vanguardia.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white via-white/50 to-transparent z-10"></div>
                </section>

                {/* Comprehensive Services */}
                <section className="py-20 bg-linear-to-br from-white via-slate-50 to-blue-50/20">
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
                                    <div className={`w-20 h-20 bg-linear-to-br ${category.color} rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0`}>
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
                                            to={catIndex === 0 ? "/servicios/calibracion" : catIndex === 1 ? "/servicios/calificacion" : "/servicios/validacion"}
                                            className="inline-block"
                                        >
                                            <Button
                                                variant="outline"
                                                className={`border-2 bg-linear-to-r ${category.color} text-white border-transparent hover:shadow-lg transition-all font-semibold`}
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
                                                <div className={`w-12 h-12 bg-linear-to-br ${category.color} rounded-xl flex items-center justify-center text-white`}>
                                                    <service.icon size={24} />
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900">
                                                    {service.name}
                                                </h3>
                                            </div>
                                            <ul className="space-y-2.5">
                                                {service.details.map((detail, dIndex) => (
                                                    <li key={dIndex} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-brand to-cyan mt-1.5 shrink-0"></div>
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
                            Todos nuestros servicios incluyen <span className="text-cyan font-semibold">soporte documental exhaustivo</span>
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
