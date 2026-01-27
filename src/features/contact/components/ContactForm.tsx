import { Button } from "@/components/ui/button";
import { useContactForm } from "../hooks/useContactForm";

export function ContactForm() {
    const { formRef, formState, status, isSending, updateField, handleSubmit } = useContactForm();

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
            {status.type && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${status.type === 'success'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                    : 'bg-red-50 text-red-700 border border-red-100'
                    }`}>
                    {status.type === 'success' ? (
                        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                            onChange={e => updateField('name', e.target.value)}
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
                            onChange={e => updateField('email', e.target.value)}
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
                        onChange={e => updateField('company', e.target.value)}
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
                            onChange={e => updateField('service', e.target.value)}
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="calificacion">Calificación de Equipos (DQ, IQ, OQ, PQ)</option>
                            <option value="calibracion">Calibración de Instrumentos</option>
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
                            onChange={e => updateField('urgency', e.target.value)}
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
                        onChange={e => updateField('message', e.target.value)}
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
    );
}
