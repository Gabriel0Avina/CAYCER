import emaT225 from "@/assets/ema-acreditacion.png"
import emaH98 from "@/assets/ema-h98.png"
import emaME57 from "@/assets/ema-me57.png"
import { Download } from "lucide-react"

/**
 * Credenciales oficiales por magnitud.
 *
 * EMA y la Dirección General de Normas (Secretaría de Economía) son dos
 * credenciales distintas sobre las MISMAS tres magnitudes, y comparten número
 * (T-225, H-98, ME-57): la EMA acredita la competencia técnica del laboratorio,
 * la DGN aprueba emitir resultados con validez ante Normas Oficiales Mexicanas.
 *
 * Por eso se agrupan en una sola sección con una tarjeta por magnitud y sus dos
 * documentos dentro: separarlas repetía la misma taxonomía dos veces seguidas y
 * obligaba a leer "Temperatura / Humedad / Mediciones Especiales" dos veces.
 *
 * Los PDFs viven en /public con nombre fijo (sin hash de Vite) para que su URL
 * sea estable entre builds.
 */
const magnitudes = [
    {
        area: "Temperatura",
        mark: emaT225,
        markAlt: "Marca de acreditación EMA, laboratorio de calibración acreditado T-225",
        description: "Calibración de termómetros, dataloggers, cámaras y equipos de proceso térmico.",
        docs: {
            acreditacion: "/acreditacion-temperatura.pdf",
            aprobacion: "/aprobacion-temperatura.pdf",
        },
    },
    {
        area: "Humedad",
        mark: emaH98,
        markAlt: "Marca de acreditación EMA, laboratorio de calibración acreditado H-98",
        description: "Medición de humedad relativa y condiciones ambientales controladas.",
        docs: {
            acreditacion: "/acreditacion-humedad.pdf",
            aprobacion: "/aprobacion-humedad.pdf",
        },
    },
    {
        area: "Mediciones Especiales",
        mark: emaME57,
        markAlt: "Marca de acreditación EMA, laboratorio de calibración acreditado ME-57",
        description: "Calificación de equipos, áreas críticas y sistemas de aire clasificado.",
        docs: {
            acreditacion: "/acreditacion-mediciones-especiales.pdf",
            aprobacion: "/aprobacion-mediciones-especiales.pdf",
        },
    },
]

interface DocLinkProps {
    href: string
    label: string
    /** Contexto para lectores de pantalla: sin esto, los seis enlaces suenan igual. */
    area: string
}

function DocLink({ href, label, area }: DocLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} de ${area} (PDF, abre en una pestaña nueva)`}
            className="flex items-center justify-between gap-3 py-3 px-4 -mx-1 rounded-xl text-sm font-semibold text-slate-700 transition-colors hover:bg-brand/5 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
        >
            <span>{label}</span>
            {/* slate-500, no slate-400: a 12px el gris más claro cae a 2.5:1 sobre
                slate-50 y no alcanza el mínimo de 4.5:1 de WCAG AA. */}
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                PDF
                <Download size={16} className="text-cyan" aria-hidden="true" />
            </span>
        </a>
    )
}

export function Credentials() {
    return (
        <section className="py-24 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-display text-balance">
                        Acreditación EMA y Aprobación Federal
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Cada magnitud que calibramos está acreditada por la Entidad Mexicana de
                        Acreditación y aprobada por la Dirección General de Normas de la Secretaría
                        de Economía. Consulte los documentos oficiales de cada una.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {magnitudes.map((m) => (
                        <div
                            key={m.area}
                            className="flex flex-col p-8 h-full bg-slate-50 rounded-3xl border border-transparent transition-all duration-300 hover:border-cyan/30 hover:bg-white hover:shadow-2xl"
                        >
                            <div className="w-full aspect-[3/2] flex items-center justify-center mb-8 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 overflow-hidden">
                                <img
                                    src={m.mark}
                                    alt={m.markAlt}
                                    loading="lazy"
                                    className="w-full h-full object-contain scale-125"
                                />
                            </div>

                            <h4 className="text-xl font-bold text-slate-800 mb-3 text-center">
                                {m.area}
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed text-center mb-8">
                                {m.description}
                            </p>

                            {/* mt-auto alinea los documentos al pie aunque las descripciones
                                tengan distinto alto, para que las tres tarjetas coincidan. */}
                            <div className="mt-auto pt-6 border-t border-slate-200 space-y-1">
                                <DocLink
                                    href={m.docs.acreditacion}
                                    label="Acreditación EMA"
                                    area={m.area}
                                />
                                <DocLink
                                    href={m.docs.aprobacion}
                                    label="Aprobación DGN"
                                    area={m.area}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 pt-10 border-t border-slate-100 text-center max-w-3xl mx-auto">
                    <p className="text-sm text-slate-500 leading-relaxed">
                        Nuestro Sistema de Gestión está establecido con base en la
                        NMX-EC-17025-IMNC-2018. Aprobaciones emitidas el 23 de julio de 2026 por la
                        Dirección General de Normas.
                    </p>
                </div>
            </div>
        </section>
    )
}
