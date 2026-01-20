import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

import imgCalibration from "@/assets/services/calibration.png"
import imgQualification from "@/assets/services/qualification.png"
import imgValidation from "@/assets/services/validation.png"

const heroImages = [
    {
        src: imgCalibration,
        alt: "Calibración de instrumentos industriales",
        overlay: "from-slate-900/95 via-slate-900/85 to-slate-900/60"
    },
    {
        src: imgValidation,
        alt: "Validación de procesos farmacéuticos",
        overlay: "from-brand-dark/95 via-brand-dark/85 to-brand/60"
    },
    {
        src: imgQualification,
        alt: "Calificación de equipos críticos",
        overlay: "from-slate-950/95 via-slate-900/80 to-slate-800/50"
    }
]

export function Hero() {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Dynamic Background Slider */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${heroImages[currentImage].src})` }}
                    />
                    {/* Dynamic Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${heroImages[currentImage].overlay}`} />
                </motion.div>
            </AnimatePresence>

            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 py-32">
                <div className="max-w-5xl mx-auto text-center space-y-10">
                    {/* Minimal Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-cyan-300 bg-white/5 border border-white/10 rounded-full px-6 py-2 backdrop-blur-md">
                            Acreditado EMA: T-225 | H-98 | ME-57
                        </span>
                    </motion.div>

                    {/* Main Heading - Staggered Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="space-y-4"
                    >
                        <h1 className="text-white">
                            <motion.span
                                className="block text-2xl md:text-3xl lg:text-4xl font-display font-light text-cyan-200 tracking-[0.15em] mb-4 opacity-80"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                            >
                                CAYCER INGENIERÍA Y METROLOGÍA
                            </motion.span>
                            <motion.span
                                className="block text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.6 }}
                            >
                                Excelencia en <br /> Metrología Industrial
                            </motion.span>
                        </h1>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        className="text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-3xl mx-auto font-light"
                    >
                        Garantizamos la precisión de sus procesos con servicios de{" "}
                        <span className="text-cyan-300 font-medium">calibración</span>,{" "}
                        <span className="text-cyan-300 font-medium">calificación</span> y{" "}
                        <span className="text-cyan-300 font-medium">validación</span> bajo normativa nacional.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                        className="pt-6"
                    >
                        <a
                            href="https://wa.me/523335071061?text=Hola%20Caycer,%20me%20gustar%C3%ADa%20solicitar%20cotizaci%C3%B3n."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="cta"
                                size="lg"
                                className="h-16 px-12 text-lg font-bold rounded-full bg-cyan text-slate-900 hover:bg-cyan-400 shadow-[0_0_60px_-10px_rgba(0,181,226,0.8)] hover:shadow-[0_0_80px_-10px_rgba(0,181,226,1)] transition-all duration-500 hover:scale-105"
                            >
                                Solicitar Cotización
                            </Button>
                        </a>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 pt-8 text-sm text-slate-300"
                    >
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>+8 años de experiencia</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Cobertura nacional</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-cyan" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>NMX-EC-17025</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - Minimalist Dots */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            >
                <div className="flex flex-col gap-1.5">
                    <div className="w-0.5 h-4 bg-white/40 rounded-full animate-pulse"></div>
                    <div className="w-0.5 h-4 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-0.5 h-4 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </motion.div>

            {/* Bottom Gradient for Smooth Transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        </section>
    )
}
