import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

const sections = [
    {
        title: "1. ¿Qué son las cookies?",
        body: "Las cookies son pequeños archivos que un sitio web guarda en tu navegador para recordar información entre visitas, por ejemplo tus preferencias o datos de sesión."
    },
    {
        title: "2. Cookies que utiliza este sitio",
        body: "Este sitio es principalmente informativo y no utiliza cookies propias de rastreo publicitario. Pueden generarse cookies técnicas de terceros al cargar servicios integrados: el mapa de Google Maps incrustado en el pie de página y el servicio de envío del formulario de contacto. Estas cookies son gestionadas por sus respectivos proveedores conforme a sus propias políticas."
    },
    {
        title: "3. Cookies de terceros",
        body: "Google Maps (Google LLC) puede establecer cookies para el funcionamiento del mapa interactivo. Puedes consultar la política de privacidad de Google en policies.google.com/privacy."
    },
    {
        title: "4. Cómo controlar las cookies",
        body: "Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento desde sus ajustes de privacidad. Bloquear cookies de terceros no afecta la navegación del contenido informativo de este sitio; únicamente podría dejar de mostrarse el mapa incrustado."
    },
    {
        title: "5. Cambios en esta política",
        body: "Si el sitio incorpora nuevas herramientas que utilicen cookies (por ejemplo, analítica web), esta política se actualizará para reflejarlo. La versión vigente será siempre la publicada en esta página."
    }
];

export function Cookies() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Política de Cookies"
                description="Política de cookies del sitio web de CAYCER Ingeniería y Metrología."
                path="/cookies"
                noindex
            />
            <Navbar />
            <main className="grow pt-32 pb-20 bg-slate-50">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h1 className="text-4xl font-bold text-slate-900 mb-3">Política de Cookies</h1>
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
