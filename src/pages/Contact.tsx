import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { SEO } from "@/components/SEO"

export function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        urgency: "normal",
        message: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert("Gracias por contactar a Caycer. Hemos recibido tu solicitud.")
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
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Nombre Completo</label>
                                    <input
                                        required
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
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand transition-all h-32 focus:outline-none"
                                    placeholder="Describa los equipos, normas aplicables o detalles específicos..."
                                    value={formState.message}
                                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                                />
                            </div>

                            <div className="pt-4">
                                <Button type="submit" variant="cta" className="w-full md:w-auto px-8 py-3 text-lg h-12 shadow-lg hover:shadow-cyan-500/30">
                                    Solicitar Cotización
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
