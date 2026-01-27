import { useParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import {
    serviceDetailData,
    ServiceDetailHero,
    ServiceConsiderations,
    ServiceSectionCard,
    ServiceCTA
} from "@/features/services";

export function ServiceDetail() {
    const { slug } = useParams<{ slug: string }>();
    const service = slug ? serviceDetailData[slug] : null;

    if (!service) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Servicio no encontrado</h1>
                        <p className="text-slate-600">El servicio que buscas no existe.</p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title={service.title}
                description={service.subtitle + " " + service.description.substring(0, 150) + "..."}
                type="article"
            />
            <Navbar />
            <main className="grow">
                <ServiceDetailHero
                    title={service.title}
                    subtitle={service.subtitle}
                    image={service.image}
                />

                {/* Overview Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Descripción General</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Considerations Section */}
                {service.considerations && (
                    <ServiceConsiderations considerations={service.considerations} />
                )}

                {/* Detailed Sections Grid */}
                <section className="py-20 bg-linear-to-br from-slate-50 via-white to-blue-50/20">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {service.detailedSections.map((section, index) => (
                                <ServiceSectionCard key={index} section={section} />
                            ))}
                        </div>
                    </div>
                </section>

                <ServiceCTA />
            </main>
            <Footer />
        </div>
    );
}
