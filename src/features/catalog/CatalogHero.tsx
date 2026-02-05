import { motion } from "framer-motion";

export function CatalogHero() {
    return (
        <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
            {/* Background with subtle animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-brand-dark/40" />
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="inline-block text-cyan text-xs font-bold tracking-[0.3em] uppercase mb-4 border-b border-cyan/30 pb-2">
                        Equipamientos de Temperatura y Humedad
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-display">
                        Catálogo de <br /> <span className="text-cyan">Instrumentación</span>
                    </h1>
                    <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-8">
                        Contamos con una amplia gama de termómetros y termohigrómetros de marcas líderes para sus procesos de medición.
                    </p>
                </motion.div>
            </div>

            {/* Decorative Bottom Wave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[100px]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,82.3,134.73,101.55,210.19,101.55,251,101.55,288.08,72.48,321.39,56.44Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
