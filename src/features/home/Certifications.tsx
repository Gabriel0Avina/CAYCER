import emaLogo from "@/assets/ema-acreditacion.png"
import pdfHumedad from "@/assets/pdfs/Acreditación Humedad.pdf"
import pdfTemperatura from "@/assets/pdfs/Acreditación Temperatura.pdf"
import pdfMediciones from "@/assets/pdfs/Acreditación Mediciones Especiales.pdf"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export function Certifications() {
    const areas = [
        { name: "Temperatura", description: "Calibración de termómetros, dataloggers y más.", pdf: pdfTemperatura },
        { name: "Humedad", description: "Medición precisa de humedad relativa y ambiental.", pdf: pdfHumedad },
        { name: "Mediciones Especiales", description: "Calificación de equipos y áreas críticas.", pdf: pdfMediciones },
    ]

    return (
        <section className="py-16 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* EMA Logo & Info */}
                    <div className="lg:w-1/3 text-center lg:text-left space-y-4">
                        <div className="inline-block p-4 bg-white rounded-2xl shadow-sm border border-slate-100 animate-fade-in">
                            <img
                                src={emaLogo}
                                alt="EMA Acreditación T-225"
                                className="h-20 md:h-24 w-auto object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 font-display">Acreditación EMA</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Contamos con acreditación por la Entidad Mexicana de Acreditación (EMA) en áreas críticas para garantizar la máxima precisión.
                        </p>
                    </div>

                    {/* Areas Grid */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {areas.map((area, index) => {
                            const CardContent = (
                                <div className={cn(
                                    "p-6 h-full bg-slate-50 rounded-2xl border border-transparent transition-all duration-300 group relative",
                                    area.pdf && "hover:border-cyan/30 hover:bg-white hover:shadow-xl cursor-pointer"
                                )}>
                                    <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center text-cyan mb-4 group-hover:bg-cyan group-hover:text-white transition-colors">
                                        <span className="font-bold text-lg">{index + 1}</span>
                                    </div>
                                    <h4 className="font-bold text-slate-800 mb-2 group-hover:text-brand transition-colors flex items-center gap-2">
                                        {area.name}
                                        {area.pdf && <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                                    </h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">{area.description}</p>

                                    {area.pdf && (
                                        <div className="absolute top-4 right-4 text-[10px] font-bold text-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                                            VER PDF
                                        </div>
                                    )}
                                </div>
                            );

                            return area.pdf ? (
                                <a key={index} href={area.pdf} target="_blank" rel="noopener noreferrer">
                                    {CardContent}
                                </a>
                            ) : (
                                <div key={index}>{CardContent}</div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 text-center">
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
                        Nuestro Sistema de Gestión está establecido con base a la NMX-EC-17025-IMNC-2018
                    </p>
                </div>
            </div>
        </section>
    )
}
