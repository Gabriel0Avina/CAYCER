import { Button } from "@/components/ui/button";

interface ServiceCTAProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    whatsappMessage?: string;
}

export function ServiceCTA({
    title = "¿Necesita asesoría técnica especializada?",
    subtitle = "Nuestro equipo de expertos en calibración está listo para diseñar la estrategia de cumplimiento perfecta para su industria.",
    buttonText = "Contactar a un Especialista",
    whatsappMessage = "Hola%20Caycer,%20necesito%20información%20sobre%20servicios."
}: ServiceCTAProps) {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-slate-900 z-0">
                <div className="absolute inset-0 bg-linear-to-br from-brand-dark/90 via-slate-900 to-brand-dark/90"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-brand/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-cyan/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 text-white leading-tight">
                    {title.includes("especializada") ? (
                        <>
                            ¿Necesita asesoría técnica <span className="text-cyan">especializada</span>?
                        </>
                    ) : (
                        title
                    )}
                </h2>
                <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
                <a
                    href={`https://wa.me/523335071061?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                >
                    <Button
                        variant="cta"
                        size="lg"
                        className="h-16 px-12 text-lg font-bold rounded-full bg-linear-to-r from-brand to-cyan text-white hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300 border border-white/10"
                    >
                        {buttonText}
                    </Button>
                </a>

                <p className="mt-8 text-sm text-slate-400">
                    Respuesta garantizada en menos de 24 horas hábiles.
                </p>
            </div>
        </section>
    );
}
