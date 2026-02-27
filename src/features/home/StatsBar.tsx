import { motion, animate, useMotionValue, useTransform } from "framer-motion"

const stats = [
    { value: 8, suffix: "+", label: "Años de Experiencia" },
    { value: 200, suffix: "+", label: "Clientes Satisfechos" },
    { value: 3, suffix: "", label: "Acreditaciones EMA" },
    { value: 24, suffix: "h", label: "Soporte Técnico" }
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.floor(latest))

    return (
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            onViewportEnter={() => {
                animate(count, value, {
                    duration: 2,
                    ease: "easeOut",
                })
            }}
            className="tabular-nums"
        >
            <motion.span>{rounded}</motion.span>
            {suffix}
        </motion.span>
    )
}

export function StatsBar() {
    return (
        <section className="py-20 bg-slate-25">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x divide-slate-200"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center px-8 text-center"
                        >
                            <div className="text-5xl lg:text-6xl font-bold text-brand mb-2">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
