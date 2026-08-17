import { useParams, Link } from "react-router-dom"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SEO } from "@/components/SEO"
import { VideoEmbed } from "@/components/ui/VideoEmbed"
import { ServiceCTA } from "@/features/services"
import { MarkdownBody } from "@/features/blog/MarkdownBody"
import { getPostBySlug, getPostBody, toSchemaDateTime } from "@/features/blog/postsData"
import { ArrowLeft, CalendarDays, Clock } from "lucide-react"

const SITE = "https://caycer.ing"

/** Formatea una fecha ISO como "30 de julio de 2026". */
function formatDate(iso: string) {
    return new Date(`${iso}T12:00:00`).toLocaleDateString("es-MX", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })
}

export function BlogPost() {
    const { slug } = useParams<{ slug: string }>()
    const post = slug ? getPostBySlug(slug) : undefined

    if (!post) {
        return (
            <div className="flex flex-col min-h-screen bg-white">
                <SEO title="Artículo no encontrado" path={`/blog/${slug ?? ""}`} noindex />
                <Navbar />
                <main className="grow flex items-center justify-center py-32">
                    <div className="text-center px-6">
                        <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
                        <p className="text-slate-600 mb-8">
                            El artículo que busca no existe o cambió de dirección.
                        </p>
                        <Link to="/blog" className="font-semibold text-brand underline">
                            Ver todos los artículos
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    const url = `${SITE}/blog/${post.slug}`

    // @graph enlaza el artículo con la organización que ya declara la home,
    // en vez de declarar una entidad nueva que competiría con ella.
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": `${url}#article`,
                headline: post.title,
                description: post.description,
                datePublished: toSchemaDateTime(post.datePublished),
                dateModified: toSchemaDateTime(post.dateModified),
                inLanguage: "es-MX",
                mainEntityOfPage: { "@type": "WebPage", "@id": url },
                author: { "@type": "Organization", name: post.author, url: SITE },
                publisher: { "@id": `${SITE}/#organization` },
                ...(post.youtubeId && {
                    video: {
                        "@type": "VideoObject",
                        name: post.youtubeTitle ?? post.title,
                        description: post.description,
                        uploadDate: toSchemaDateTime(post.datePublished),
                        thumbnailUrl: `https://i.ytimg.com/vi/${post.youtubeId}/hqdefault.jpg`,
                        embedUrl: `https://www.youtube-nocookie.com/embed/${post.youtubeId}`,
                    },
                }),
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE}/` },
                    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
                    { "@type": "ListItem", position: 3, name: post.title, item: url },
                ],
            },
            // Secuencia de pasos del artículo, cuando la tiene. Google retiró
            // los resultados enriquecidos de HowTo en 2023, así que esto ya no
            // genera un fragmento visual: sirve para que los motores
            // generativos citen las etapas en el orden correcto.
            ...(post.howTo
                ? [
                      {
                          "@type": "HowTo",
                          "@id": `${url}#howto`,
                          name: post.howTo.name,
                          inLanguage: "es-MX",
                          step: post.howTo.steps.map((s, i) => ({
                              "@type": "HowToStep",
                              position: i + 1,
                              name: s.name,
                              text: s.text,
                              url: `${url}#paso-${i + 1}`,
                          })),
                      },
                  ]
                : []),
        ],
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title={post.title}
                description={post.description}
                path={`/blog/${post.slug}`}
                type="article"
                schema={schema}
            />
            <Navbar />
            <main className="grow">
                {/* Encabezado. Con heroImage la foto va detrás de un velo de
                    marca; sin ella queda el degradado sólido de siempre. El velo
                    llega al 85 % en su punto más claro, que es donde se midió el
                    contraste del texto en el peor caso. */}
                <header className="relative pt-36 pb-12 bg-linear-to-br from-brand-dark via-slate-900 to-brand text-white overflow-hidden">
                    {post.heroImage && (
                        <div className="absolute inset-0 z-0">
                            <img
                                src={post.heroImage}
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-linear-to-br from-brand-dark/95 via-brand-dark/90 to-brand/85" />
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
                        </div>
                    )}

                    <div className="container mx-auto px-6 max-w-3xl relative z-10">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-100 hover:text-white mb-8"
                        >
                            <ArrowLeft size={16} /> Volver al blog
                        </Link>
                        {/* cyan-300 y no el cian de marca: sobre la foto del
                            encabezado el cian original cae a 3.4:1 y a 14 px en
                            negritas el mínimo es 4.5:1. */}
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300 mb-4">
                            {post.pillar}
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold font-display text-white text-balance mb-6">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-blue-100">
                            <span className="inline-flex items-center gap-2">
                                <CalendarDays size={16} aria-hidden="true" />
                                <time dateTime={post.datePublished}>
                                    {formatDate(post.datePublished)}
                                </time>
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <Clock size={16} aria-hidden="true" />
                                {post.readingMinutes} min de lectura
                            </span>
                            <span>{post.author}</span>
                        </div>
                    </div>
                </header>

                {/* Cuerpo */}
                <article className="py-16">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <p className="mb-10 text-xl leading-relaxed text-slate-600 border-l-0">
                            {post.description}
                        </p>

                        {post.youtubeId && (
                            <VideoEmbed
                                youtubeId={post.youtubeId}
                                title={post.youtubeTitle ?? post.title}
                            />
                        )}

                        <MarkdownBody>{getPostBody(post.slug)}</MarkdownBody>

                        {post.related.length > 0 && (
                            <aside className="mt-16 pt-10 border-t border-slate-200">
                                <h2 className="text-lg font-bold text-slate-900 mb-5">
                                    Continúe por aquí
                                </h2>
                                {/* py-2 lleva el área táctil por encima de los 24 px
                                    que pide WCAG 2.5.8: a diferencia de los enlaces
                                    dentro del texto, estos son destinos por sí mismos
                                    y no aplica la excepción de enlaces en línea. */}
                                <ul className="space-y-1">
                                    {post.related.map((r) => (
                                        <li key={r.href}>
                                            <Link
                                                to={r.href}
                                                className="inline-block py-2 font-semibold text-brand underline decoration-cyan decoration-2 underline-offset-4 hover:text-cyan"
                                            >
                                                {r.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                        )}
                    </div>
                </article>

                <ServiceCTA
                    title="¿Necesita demostrar la conservación de sus recintos?"
                    subtitle="Nuestro equipo técnico puede ayudarle a definir el estudio que corresponde a su operación y a su análisis de riesgos."
                    buttonText="Solicitar asesoría"
                    whatsappMessage="Hola%20Caycer,%20me%20interesa%20información%20sobre%20mapeo%20térmico."
                />
            </main>
            <Footer />
        </div>
    )
}
