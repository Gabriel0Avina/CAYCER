import { MessageCircle } from "lucide-react"
import { trackConversion } from "@/lib/analytics"

export function FloatingWhatsApp() {
    const phoneNumber = "3335071061"
    const message = "Hola Caycer, me gustaría solicitar información sobre sus servicios."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    // z-30: por encima del contenido de las páginas (máx. z-20) pero por debajo del
    // menú móvil y del visor de imágenes del catálogo (z-50), que antes tapaba.
    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            // Se registra el origen del clic: el botón flotante y el de las
            // páginas de servicio miden intenciones distintas y conviene
            // distinguirlas al comparar qué contenido genera contactos.
            onClick={() => trackConversion("contacto_whatsapp", { origen: "boton_flotante" })}
            className="fixed bottom-8 right-8 z-30 group flex items-center justify-center"
            aria-label="Contactar por WhatsApp"
        >
            {/* Tooltip */}
            <div className="absolute right-full mr-4 px-4 py-2 bg-white text-slate-800 text-sm font-bold rounded-xl shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none translate-x-4 group-hover:translate-x-0 group-hover:duration-300">
                ¿En qué podemos ayudarte?
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white border-t border-r border-slate-100 rotate-45"></div>
            </div>

            {/* Main Button */}
            <div className="relative w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300">
                <MessageCircle size={32} fill="currentColor" className="relative z-10" />

                {/* Pulsing Effect */}
                <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25"></div>
            </div>
        </a>
    )
}
