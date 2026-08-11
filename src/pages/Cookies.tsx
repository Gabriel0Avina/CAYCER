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
        body: "Este sitio utiliza cookies y tecnologías similares para dos fines: el funcionamiento de servicios integrados, como el mapa del pie de página y el envío del formulario de contacto, y la medición de audiencia y publicidad, mediante las herramientas que se describen en el punto siguiente. No se utilizan cookies para identificarte de forma personal ni para acceder a información de tu dispositivo distinta de la necesaria para estos fines."
    },
    {
        title: "3. Cookies de terceros y medición",
        body: "Google Analytics (Google LLC) registra de forma agregada cuántas personas visitan el sitio, desde qué canal llegan y qué páginas consultan, para entender qué contenido resulta útil. El píxel de Meta (Meta Platforms, Inc.) permite medir el resultado de las campañas publicitarias en Facebook e Instagram y mostrar anuncios a personas que ya visitaron este sitio. Google Maps puede establecer cookies para el funcionamiento del mapa interactivo. Puedes consultar sus políticas en policies.google.com/privacy y facebook.com/privacy/policy."
    },
    {
        title: "4. Qué información se registra",
        body: "Las herramientas de medición registran datos de navegación como las páginas visitadas, la duración de la visita, el canal de origen, el tipo de dispositivo y la ubicación aproximada por región. También se registra cuándo alguien inicia una conversación por WhatsApp o envía el formulario de contacto, junto con el tipo de servicio seleccionado. No se transmiten a estas herramientas tu nombre, correo, teléfono ni el contenido de tus mensajes: esos datos viajan únicamente al correo de CAYCER."
    },
    {
        title: "5. Cómo controlar las cookies",
        body: "Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento desde sus ajustes de privacidad, y la mayoría de los navegadores ofrece un modo de navegación privada. Adicionalmente, puedes instalar el complemento de inhabilitación de Google Analytics disponible en tools.google.com/dlpage/gaoptout, y ajustar tus preferencias de anuncios desde la configuración de tu cuenta de Facebook o Instagram. Bloquear estas cookies no afecta la navegación ni el acceso al contenido de este sitio."
    },
    {
        title: "6. Cambios en esta política",
        body: "Si el sitio incorpora nuevas herramientas que utilicen cookies, esta política se actualizará para reflejarlo. La versión vigente será siempre la publicada en esta página."
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
                    <p className="text-sm text-slate-500 mb-12">Última actualización: agosto de 2026</p>
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
