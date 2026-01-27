interface ServiceDetailHeroProps {
    title: string;
    subtitle: string;
    image: string;
}

export function ServiceDetailHero({ title, subtitle, image }: ServiceDetailHeroProps) {
    return (
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-brand-dark/95 via-brand/85 to-brand/70"></div>
            </div>

            {/* Texture Overlay */}
            <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 text-center text-white">
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase bg-white/10 border border-white/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
                    Servicio Especializado
                </span>
                <h1 className="text-4xl text-white md:text-6xl font-bold font-display mb-4 drop-shadow-lg">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto font-light">
                    {subtitle}
                </p>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent z-10"></div>
        </section>
    );
}
