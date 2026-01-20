import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const stats = [
    { value: 8, suffix: "+", label: "Años de Experiencia" },
    { value: 200, suffix: "+", label: "Clientes Satisfechos" },
    { value: 100, suffix: "%", label: "Cumplimiento Normativo" },
    { value: 24, suffix: "h", label: "Soporte Técnico" }
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            let start = 0
            const end = value
            const duration = 2000
            const increment = end / (duration / 16)

            const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                    setCount(end)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(start))
                }
            }, 16)

            return () => clearInterval(timer)
        }
    }, [isInView, value])

    return (
        <span ref={ref} className="tabular-nums">
            {count}{suffix}
        </span>
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
                            className="flex flex-col items-center lg:items-start lg:px-8 text-center lg:text-left"
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
