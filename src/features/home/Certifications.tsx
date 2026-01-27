import emaLogo from "@/assets/ema-acreditacion.png"
import emaH98 from "@/assets/ema-h98.png"
import emaME57 from "@/assets/ema-me57.png"
import pdfHumedad from "@/assets/pdfs/Acreditación Humedad.pdf"
import pdfTemperatura from "@/assets/pdfs/Acreditación Temperatura.pdf"
import pdfMediciones from "@/assets/pdfs/Acreditación Mediciones Especiales.pdf"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export function Certifications() {
    const areas = [
        { name: "Temperatura", description: "Calibración de termómetros, dataloggers y más.", pdf: pdfTemperatura, icon: emaLogo },
        { name: "Humedad", description: "Medición precisa de humedad relativa y ambiental.", pdf: pdfHumedad, icon: emaH98 },
        { name: "Mediciones Especiales", description: "Calificación de equipos y áreas críticas.", pdf: pdfMediciones, icon: emaME57 },
    ]

    return (
        <section className="py-20 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">Acreditación EMA</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Contamos con acreditación por la Entidad Mexicana de Acreditación (EMA)
                    </p>
                </div>

                {/* Areas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {areas.map((area, index) => {
                        const CardContent = (
                            <div className={cn(
                                "p-8 h-full bg-slate-50 rounded-3xl border border-transparent transition-all duration-300 group relative flex flex-col items-center text-center",
                                area.pdf && "hover:border-cyan/30 hover:bg-white hover:shadow-2xl cursor-pointer"
                            )}>
                                <div className="w-full aspect-[3/2] flex items-center justify-center mb-8 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 group-hover:border-cyan/20 transition-all overflow-hidden">
                                    <img
                                        src={area.icon}
                                        alt={`Acreditación ${area.name}`}
                                        className="w-full h-full object-contain scale-125 group-hover:scale-135 transition-transform duration-500"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand transition-colors flex items-center justify-center gap-2">
                                    {area.name}
                                    {area.pdf && <ExternalLink size={18} className="text-cyan opacity-40 group-hover:opacity-100 transition-opacity" />}
                                </h4>
                                <p className="text-sm text-slate-500 leading-relaxed max-w-[240px]">{area.description}</p>

                                {area.pdf && (
                                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-cyan tracking-wider opacity-60 group-hover:opacity-100 transition-opacity uppercase">
                                        Descargar Acreditación
                                    </div>
                                )}
                            </div>
                        );

                        return area.pdf ? (
                            <a key={index} href={area.pdf} target="_blank" rel="noopener noreferrer" className="h-full">
                                {CardContent}
                            </a>
                        ) : (
                            <div key={index} className="h-full">{CardContent}</div>
                        );
                    })}
                </div>

                <div className="mt-20 pt-10 border-t border-slate-100 text-center">
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                        Nuestro Sistema de Gestión está establecido con base a la NMX-EC-17025-IMNC-2018
                    </p>
                </div>
            </div>
        </section>
    )
}
