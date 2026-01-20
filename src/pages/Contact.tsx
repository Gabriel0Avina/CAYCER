import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { useState, useRef } from "react"
import { SEO } from "@/components/SEO"
import emailjs from '@emailjs/browser'

export function Contact() {
    const formRef = useRef<HTMLFormElement>(null)
    const [isSending, setIsSending] = useState(false)
    const [status, setStatus] = useState<{
        type: 'success' | 'error' | null,
        message: string | null
    }>({ type: null, message: null })

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        urgency: "normal",
        message: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formRef.current) return

        setIsSending(true)
        setStatus({ type: null, message: null })

        try {
            // Replace these with your actual Service ID, Template ID, and Public Key from EmailJS
            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
            )

            if (result.text === 'OK') {
                setStatus({
                    type: 'success',
                    message: "¡Gracias por contactar a Caycer! Hemos recibido tu solicitud y te contactaremos pronto."
                })
                setFormState({
                    name: "",
                    email: "",
                    company: "",
                    service: "",
                    urgency: "normal",
                    message: ""
                })
            }
        } catch (error) {
            console.error('EmailJS Error:', error)
            setStatus({
                type: 'error',
                message: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente."
            })
        } finally {
            setIsSending(false)
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <SEO
                title="Contacto y Asesoría"
                description="Contáctenos para recibir asesoría experta en metrología y validación. Solicite una cotización para sus equipos e instalaciones."
            />
            <Navbar />
            <main className="flex-grow pt-24 pb-12 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-cyan-700 uppercase bg-cyan-100 rounded-full">
                            Contacto Comercial
                        </div>
                        <h1 className="text-4xl font-bold font-display text-slate-900 mb-4">Inicia tu Proyecto de Calidad</h1>
                        <p className="text-slate-600 max-w-xl mx-auto">Completa el formulario para recibir una propuesta técnica a la medida de tus necesidades regulatorias.</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                        {status.type && (
                            <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${status.type === 'success'
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                                : 'bg-red-50 text-red-700 border border-red-100'
                                }`}>
                                {status.type === 'success' ? (
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )}
                                <p className="text-sm font-medium">{status.message}</p>
                            </div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Nombre Completo</label>
                                    <input
                                        required
                                        name="user_name"
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand transition-all focus:outline-none"
                                        placeholder="Ing. Juan Pérez"
                                        value={formState.name}
                                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Correo Corporativo</label>
                                    <input
                                        required
                                        type="email"
                                        name="user_email"
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand transition-all focus:outline-none"
                                        placeholder="juan.perez@empresa.com"
                                        value={formState.email}
                                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Empresa / Razón Social</label>
                                <input
                                    required
                                    name="empresa"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand transition-all focus:outline-none"
                                    placeholder="Farmacéutica S.A. de C.V."
                                    value={formState.company}
                                    onChange={e => setFormState({ ...formState, company: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Tipo de Servicio</label>
                                    <select
                                        required
                                        name="tipo_servicio"
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand transition-all bg-white focus:outline-none"
                                        value={formState.service}
                                        onChange={e => setFormState({ ...formState, service: e.target.value })}
                                    >
                                        <option value="">Seleccione una opción</option>
                                        <option value="calificacion">Calificación de Equipos (DQ, IQ, OQ, PQ)</option>
                                        <option value="calibracion">Metrología y Calibración</option>
                                        <option value="mapeo">Mapeo Térmico</option>
                                        <option value="validacion">Validación de Sistemas</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Nivel de Urgencia</label>
                                    <select
                                        name="urgencia"
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand transition-all bg-white focus:outline-none"
                                        value={formState.urgency}
                                        onChange={e => setFormState({ ...formState, urgency: e.target.value })}
                                    >
                                        <option value="normal">Normal (Planeación Regular)</option>
                                        <option value="alta">Alta (Auditoría Próxima)</option>
                                        <option value="critica">Crítica (Paro de Operaciones)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Detalles del Requerimiento</label>
                                <textarea
                                    name="message"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand transition-all h-32 focus:outline-none"
                                    placeholder="Describa los equipos, normas aplicables o detalles específicos..."
                                    value={formState.message}
                                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    variant="cta"
                                    disabled={isSending}
                                    className="w-full md:w-auto px-8 py-3 text-lg h-12 shadow-lg hover:shadow-cyan-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSending ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Enviando...
                                        </span>
                                    ) : "Solicitar Cotización"}
                                </Button>
                            </div>

                            <p className="text-xs text-slate-500 text-center mt-4">
                                Al enviar este formulario aceptas nuestro Aviso de Privacidad.
                            </p>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
