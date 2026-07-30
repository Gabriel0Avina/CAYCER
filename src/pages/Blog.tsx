import { Link } from "react-router-dom"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SEO } from "@/components/SEO"
import { postsByDate } from "@/features/blog/postsData"
import { ArrowRight, CalendarDays, Clock, PlayCircle } from "lucide-react"
// WebP a 1600 px: el PNG original pesa 735 KB y esta versión 123 KB. Al ir
// detrás de un velo al 85-95 % el detalle fino no se percibe, y es una imagen
// que carga arriba de la página.
import heroImg from "@/assets/services/freezer-hero.webp"

const SITE = "https://caycer.ing"

function formatDate(iso: string) {
    return new Date(`${iso}T12:00:00`).toLocaleDateString("es-MX", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })
}

/** Blog schema: lista los artículos para que Google entienda el índice. */
const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE}/blog#blog`,
    name: "Blog técnico de CAYCER Ingeniería y Metrología",
    description:
        "Artículos técnicos sobre mapeo térmico, cadena de frío, calificación de equipos y normativa aplicable.",
    inLanguage: "es-MX",
    publisher: { "@id": `${SITE}/#organization` },
    blogPost: postsByDate.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        description: p.description,
        datePublished: p.datePublished,
        dateModified: p.dateModified,
        url: `${SITE}/blog/${p.slug}`,
    })),
}

export function Blog() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Blog técnico"
                description="Artículos sobre mapeo térmico, cadena de frío, calificación de equipos y normativa, escritos por un laboratorio acreditado ante la EMA."
                path="/blog"
                schema={blogSchema}
            />
            <Navbar />
            <main className="grow">
                <section className="relative pt-36 pb-20 overflow-hidden">
                    {/* Foto de fondo. El velo azul de marca la unifica con el resto
                        del sitio y, en su punto más claro (brand/85), deja el texto
                        blanco por encima de 6:1 aunque debajo hubiera blanco puro. */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImg}
                            alt=""
                            className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-linear-to-br from-brand-dark/95 via-brand-dark/90 to-brand/85" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
                    </div>

                    <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold font-display mb-5 text-white text-balance drop-shadow-lg">
                            Blog técnico
                        </h1>
                        <p className="text-lg text-blue-100 leading-relaxed">
                            Mapeo térmico, cadena de frío, calificación de equipos y normativa
                            aplicable, explicados por el equipo que ejecuta los estudios.
                        </p>
                    </div>

                    {/* Difuminado hacia el color de la sección siguiente */}
                    <div className="absolute bottom-0 left-0 h-24 w-full bg-linear-to-t from-slate-50 to-transparent z-10" />
                </section>

                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6 max-w-3xl">
                        {postsByDate.length === 0 ? (
                            <p className="text-center text-slate-500">
                                Muy pronto publicaremos los primeros artículos.
                            </p>
                        ) : (
                            <div className="space-y-6">
                                {postsByDate.map((post) => (
                                    <article
                                        key={post.slug}
                                        className="bg-white rounded-3xl border border-slate-200/70 shadow-sm transition-all duration-300 hover:border-cyan/30 hover:shadow-xl"
                                    >
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="block p-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan rounded-3xl"
                                        >
                                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                                <span className="inline-flex items-center rounded-full bg-brand/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                                                    {post.pillar}
                                                </span>
                                                {post.youtubeId && (
                                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                                                        <PlayCircle size={14} aria-hidden="true" />
                                                        Con video
                                                    </span>
                                                )}
                                            </div>

                                            <h2 className="text-2xl font-bold text-slate-900 font-display mb-3 text-balance">
                                                {post.title}
                                            </h2>
                                            <p className="text-slate-600 leading-relaxed mb-6">
                                                {post.description}
                                            </p>

                                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                                                <span className="inline-flex items-center gap-2">
                                                    <CalendarDays size={15} aria-hidden="true" />
                                                    <time dateTime={post.datePublished}>
                                                        {formatDate(post.datePublished)}
                                                    </time>
                                                </span>
                                                <span className="inline-flex items-center gap-2">
                                                    <Clock size={15} aria-hidden="true" />
                                                    {post.readingMinutes} min
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 font-semibold text-brand ml-auto">
                                                    Leer <ArrowRight size={15} aria-hidden="true" />
                                                </span>
                                            </div>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
