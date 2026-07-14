import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

const sections = [
    {
        title: "1. Identidad del prestador",
        body: "Este sitio web es operado por CAYCER Ingeniería y Metrología, con domicilio en Batalla de Puebla 3643, Col. El Tapatío, San Pedro Tlaquepaque, Jalisco, C.P. 45588, México. Contacto: ventas@caycer.com.mx · Tel. 33 3260 1657."
    },
    {
        title: "2. Objeto del sitio",
        body: "El sitio tiene fines informativos sobre los servicios de calibración de instrumentos, calificación de equipos e instalaciones y validación de procesos que ofrece CAYCER, así como su catálogo de instrumentación. La información publicada no constituye una oferta vinculante; los alcances, plazos y precios de cada servicio se establecen en la cotización y orden de servicio correspondientes."
    },
    {
        title: "3. Servicios acreditados",
        body: "CAYCER cuenta con acreditaciones vigentes ante la Entidad Mexicana de Acreditación (EMA) bajo la norma NMX-EC-17025-IMNC-2018 en los alcances T-225 (temperatura), H-98 (humedad relativa) y ME-57 (mediciones especiales). El alcance específico de cada acreditación puede consultarse en el catálogo de acreditados de la EMA. Los servicios fuera de estos alcances se prestan con trazabilidad a patrones nacionales sin carácter de servicio acreditado."
    },
    {
        title: "4. Uso del contenido",
        body: "Los textos, imágenes, logotipos y materiales de este sitio son propiedad de CAYCER o se usan con autorización de sus titulares. No está permitida su reproducción con fines comerciales sin consentimiento previo y por escrito."
    },
    {
        title: "5. Cotizaciones y contacto",
        body: "Los datos enviados a través del formulario de contacto se utilizan exclusivamente para atender la solicitud y elaborar cotizaciones. No se comparten con terceros ajenos a la operación del servicio."
    },
    {
        title: "6. Limitación de responsabilidad",
        body: "CAYCER procura mantener la información del sitio actualizada y correcta, pero no asume responsabilidad por decisiones tomadas únicamente con base en el contenido informativo del sitio. Las condiciones técnicas y normativas aplicables a cada servicio se documentan en los entregables formales de cada proyecto."
    },
    {
        title: "7. Modificaciones",
        body: "CAYCER puede actualizar estos términos en cualquier momento. La versión vigente será siempre la publicada en esta página."
    }
];

export function Terms() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Términos y Condiciones"
                description="Términos y condiciones de uso del sitio web de CAYCER Ingeniería y Metrología."
                path="/terminos"
                noindex
            />
            <Navbar />
            <main className="grow pt-32 pb-20 bg-slate-50">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h1 className="text-4xl font-bold text-slate-900 mb-3">Términos y Condiciones</h1>
                    <p className="text-sm text-slate-500 mb-12">Última actualización: julio de 2026</p>
                    <div className="space-y-10">
                        {sections.map((s) => (
                            <section key={s.title}>
                                <h2 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h2>
                                <p className="text-slate-600 leading-relaxed">{s.body}</p>
                            </section>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
