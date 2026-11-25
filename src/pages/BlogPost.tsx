import { useRef, useState } from "react"
import type { ReactNode } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowRight, Link as LinkIcon, Share2 } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SEO } from "@/components/SEO"
import { VideoEmbed } from "@/components/ui/VideoEmbed"
import { cn } from "@/lib/utils"
import { MarkdownBody } from "@/features/blog/MarkdownBody"
import { blogPosts, getPostBySlug, getPostBody, toSchemaDateTime } from "@/features/blog/postsData"
import type { BlogPost, Pillar } from "@/features/blog/postsData"
import { PODCAST, encabezadosDe, fechaLarga } from "@/features/blog/podcast"
import { MomentButton, PodcastPlayer, PodcastPlayerProvider } from "@/features/blog/PodcastPlayer"
import {
    ArticleToc,
    BlogClosing,
    PostRow,
    PostThumb,
    ReadingProgress,
    SpotifyIcon,
    YouTubeIcon,
} from "@/features/blog/BlogUI"

const SITE = "https://caycer.ing"

/** "40:48" -> 2448 */
function segundosDe(duracion: string) {
    const [m, s] = duracion.split(":").map(Number)
    return m * 60 + s
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
                        // Capítulos como Clip: Google los usa para los
                        // "momentos clave" del video en la búsqueda.
                        ...(post.episode && {
                            hasPart: post.episode.chapters.map((c, i, caps) => ({
                                "@type": "Clip",
                                name: c.title,
                                startOffset: c.t,
                                endOffset: caps[i + 1]?.t ?? segundosDe(post.episode!.duration),
                                url: `https://www.youtube.com/watch?v=${post.youtubeId}&t=${c.t}s`,
                            })),
                        }),
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
        <div className="flex min-h-screen flex-col bg-white font-display">
            <SEO
                title={post.title}
                description={post.description}
                path={`/blog/${post.slug}`}
                type="article"
                schema={schema}
            />
            <Navbar />
            <main className="grow">
                <ArticleView post={post} />
            </main>
            <Footer />
        </div>
    )
}

/** Cierre por tema cuando el artículo no trae uno propio. */
const cierrePorPilar: Record<Pillar, { title: string; text: string; whatsappMessage: string }> = {
    Calibración: {
        title: "¿Sus instrumentos están calibrados en el rango en que los usa?",
        text: "Mándenos la lista de instrumentos y el rango de trabajo. Le respondemos con los puntos recomendados y la cotización.",
        whatsappMessage: "Hola Caycer, quiero cotizar la calibración de mis instrumentos.",
    },
    "Mapeo térmico": {
        title: "¿Necesita demostrar la conservación de sus recintos?",
        text: "Nuestro equipo técnico le ayuda a definir el estudio que corresponde a su operación y a su análisis de riesgos.",
        whatsappMessage: "Hola Caycer, me interesa un mapeo térmico.",
    },
    "Cadena de frío": {
        title: "¿Necesita demostrar que su cadena de frío se mantiene?",
        text: "Le ayudamos a definir qué validar en su operación: equipos, rutas, hieleras y última milla.",
        whatsappMessage: "Hola Caycer, me interesa validar mi cadena de frío.",
    },
    "Calificación de equipos": {
        title: "¿Tiene equipos que calificar?",
        text: "Cuéntenos qué equipos tiene y qué almacenan. Le proponemos el alcance de la calificación y la cotización.",
        whatsappMessage: "Hola Caycer, me interesa la calificación de equipos.",
    },
    "Normativa FEUM": {
        title: "¿Necesita demostrar la conservación de sus recintos?",
        text: "Nuestro equipo técnico le ayuda a definir el estudio que corresponde a su operación y a su análisis de riesgos.",
        whatsappMessage: "Hola Caycer, tengo una duda sobre el Suplemento de la FEUM.",
    },
    Podcast: {
        title: "¿Le quedó una duda del episodio?",
        text: "Escríbanos por WhatsApp: le respondemos directo, y las mejores preguntas se platican al aire.",
        whatsappMessage: "Hola Caycer, vi el podcast y tengo una duda: ",
    },
}

const episodios = blogPosts
    .filter((p) => p.episode)
    .sort((a, b) => b.episode!.number - a.episode!.number)

function ArticleView({ post }: { post: BlogPost }) {
    const body = getPostBody(post.slug)
    const headings = encabezadosDe(body)
    const textoRef = useRef<HTMLElement | null>(null)
    const ep = post.episode
    const cierre = post.cta ?? cierrePorPilar[post.pillar]

    const contenido = (
        <>
            <ReadingProgress target={textoRef} />
            <header
                className={cn(
                    "relative overflow-hidden bg-brand-dark text-[#C9D6E4]",
                    ep ? "pt-32 pb-36 md:pt-36 md:pb-44" : "pt-32 pb-14 md:pt-36 md:pb-16"
                )}
            >
                {post.heroImage && (
                    <div className="absolute inset-0" aria-hidden="true">
                        <img src={post.heroImage} alt="" className="h-full w-full object-cover opacity-30 saturate-[.6]" />
                        <div className="absolute inset-0 bg-linear-to-br from-brand-dark/95 from-20% to-[#002B55]/90" />
                    </div>
                )}
                <div className="container relative mx-auto max-w-[980px] px-6">
                    <nav aria-label="Ruta" className="mb-7 flex items-center gap-2 text-sm text-[#9FB3C8]">
                        <Link to="/blog" className="text-[#C9D6E4] hover:text-white hover:underline">
                            Blog
                        </Link>
                        <span aria-hidden="true">/</span>
                        <Link
                            to={`/blog?tema=${encodeURIComponent(post.pillar)}`}
                            className="text-[#C9D6E4] hover:text-white hover:underline"
                        >
                            {post.pillar}
                        </Link>
                    </nav>
                    <h1 className="mb-6 font-display text-[2rem] font-bold leading-[1.06] tracking-[-0.033em] text-white text-balance md:text-[3.35rem]">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-x-[18px] gap-y-2 text-[15px]">
                        <span className="rounded-full bg-cyan/15 px-3 py-1 text-[13.5px] font-semibold text-[#7FDDF4]">
                            {ep ? `Episodio ${ep.number} · Temporada ${PODCAST.temporada}` : post.pillar}
                        </span>
                        <time dateTime={post.datePublished}>{fechaLarga(post.datePublished)}</time>
                        {ep && <span>{ep.duration} de video</span>}
                        <span>{post.readingMinutes} min de lectura</span>
                    </div>
                </div>
            </header>

            {ep && post.youtubeId && (
                <div className="container relative z-10 mx-auto -mt-24 max-w-[980px] px-6 md:-mt-32">
                    <PodcastPlayer
                        youtubeId={post.youtubeId}
                        title={post.youtubeTitle ?? post.title}
                        image={post.heroImage}
                    />
                    <EpisodeActions post={post} />
                </div>
            )}

            <ArticleToc headings={headings} variant="mobile" />

            <div className="container mx-auto grid max-w-[1080px] gap-0 px-6 pt-8 md:pt-14 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-[72px] lg:pt-16">
                <article ref={textoRef} className="min-w-0 max-w-[70ch]">
                    {post.summary ? (
                        <section aria-labelledby="resumen" className="mb-10 rounded-[18px] bg-tinte px-6 pb-3 pt-6 md:px-7">
                            <h2 id="resumen" className="mb-3.5 font-display text-[15px] font-semibold tracking-[0.01em] text-brand">
                                En 30 segundos
                            </h2>
                            <ul className="list-disc space-y-2.5 pl-5 marker:text-cyan">
                                {post.summary.map((s) => (
                                    <li key={s} className="text-[17px] leading-[1.55] text-slate-700">
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ) : (
                        <p className="mb-10 text-xl leading-relaxed text-slate-600">{post.description}</p>
                    )}

                    {!ep && post.youtubeId && (
                        <VideoEmbed youtubeId={post.youtubeId} title={post.youtubeTitle ?? post.title} />
                    )}

                    <MarkdownBody episode={ep}>{body}</MarkdownBody>
                </article>

                <ArticleToc
                    headings={headings}
                    variant="desktop"
                    aside={
                        ep ? (
                            <>
                                <p className="mb-3 leading-[1.45] text-slate-700">
                                    ¿Prefiere escucharlo? Cada sección tiene su momento en el episodio.
                                </p>
                                <MomentButton t={0} label="Ver desde el inicio" />
                            </>
                        ) : (
                            episodios[0] && (
                                <>
                                    <p className="mb-2 leading-[1.45] text-slate-700">También en el podcast:</p>
                                    <Link
                                        to={`/blog/${episodios[0].slug}`}
                                        className="font-semibold text-brand underline decoration-cyan decoration-2 underline-offset-4 hover:text-cyan-ink"
                                    >
                                        Episodio {episodios[0].episode!.number}: {episodios[0].episode!.shortTitle}
                                    </Link>
                                </>
                            )
                        )
                    }
                />
            </div>

            <ContinueWithPodcast post={post} />

            <div className="mt-20 md:mt-24">
                <BlogClosing title={cierre.title} text={cierre.text} whatsappMessage={cierre.whatsappMessage} />
            </div>
        </>
    )

    if (ep) {
        return <PodcastPlayerProvider key={post.slug} chapters={ep.chapters}>{contenido}</PodcastPlayerProvider>
    }
    return contenido
}

/** YouTube, Spotify, copiar enlace y compartir por WhatsApp, bajo el reproductor. */
function EpisodeActions({ post }: { post: BlogPost }) {
    const [copiado, setCopiado] = useState<"si" | "error" | null>(null)
    const url = `${SITE}/blog/${post.slug}`
    const boton =
        "inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[14.5px] font-semibold text-tinta transition-colors hover:border-brand"

    async function copiar() {
        try {
            await navigator.clipboard.writeText(url)
            setCopiado("si")
        } catch {
            setCopiado("error")
        }
        setTimeout(() => setCopiado(null), 1800)
    }

    return (
        <div className="mt-4 flex flex-wrap gap-2.5">
            <a href={`https://www.youtube.com/watch?v=${post.youtubeId}`} target="_blank" rel="noopener noreferrer" className={boton}>
                <YouTubeIcon className="h-[18px] w-[18px] text-[#E62117]" />
                Ver en YouTube
            </a>
            <a href={PODCAST.spotifyUrl} target="_blank" rel="noopener noreferrer" className={boton}>
                <SpotifyIcon className="h-[18px] w-[18px] text-[#1DB954]" />
                Escuchar en Spotify
            </a>
            <span className="hidden flex-1 sm:block" />
            <button type="button" onClick={copiar} className={boton} aria-live="polite">
                <LinkIcon className="h-[17px] w-[17px]" aria-hidden="true" />
                {copiado === "si" ? "Enlace copiado" : copiado === "error" ? "No se pudo copiar" : "Copiar enlace"}
            </button>
            <a
                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${url}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={boton}
            >
                <Share2 className="h-[17px] w-[17px] text-[#25A855]" aria-hidden="true" />
                Compartir
            </a>
        </div>
    )
}

/** Tarjeta de un episodio: artículo publicado o el próximo por salir. */
function EpisodeCard({ post, rotulo }: { post: BlogPost; rotulo: string }) {
    return (
        <Link
            to={`/blog/${post.slug}`}
            className="group grid grid-cols-[8rem_1fr] items-center gap-4 rounded-[18px] bg-tinte p-3.5 transition-colors hover:bg-tinte-2 md:grid-cols-[12.5rem_1fr] md:gap-5 md:p-4"
        >
            <PostThumb src={post.heroImage} pillar="Podcast" className="rounded-xl" />
            <span>
                <span className="font-mono text-[13px] text-cyan-ink">
                    EP {String(post.episode!.number).padStart(2, "0")} · {post.episode!.duration}
                </span>
                <span className="mb-2 mt-1 block font-display text-[17px] font-bold leading-[1.25] tracking-[-0.015em] text-tinta md:text-[19px]">
                    {post.episode!.shortTitle}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    {rotulo} <ArrowRight className="h-[15px] w-[15px]" aria-hidden="true" />
                </span>
            </span>
        </Link>
    )
}

function UpcomingCard() {
    const p = PODCAST.proximo
    if (!p) return null
    return (
        <a
            href={`${PODCAST.youtubeUrl}?sub_confirmation=1`}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-[8rem_1fr] items-center gap-4 rounded-[18px] bg-tinte p-3.5 transition-colors hover:bg-tinte-2 md:grid-cols-[12.5rem_1fr] md:gap-5 md:p-4"
        >
            <PostThumb pillar="Podcast" className="rounded-xl" />
            <span>
                <span className="font-mono text-[13px] text-cyan-ink">
                    EP {String(p.numero).padStart(2, "0")} · Próximamente
                </span>
                <span className="mb-2 mt-1 block font-display text-[17px] font-bold leading-[1.25] tracking-[-0.015em] text-tinta md:text-[19px]">
                    {p.titulo}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Suscribirse para no perderlo <ArrowRight className="h-[15px] w-[15px]" aria-hidden="true" />
                </span>
            </span>
        </a>
    )
}

/** Cierre editorial: más podcast primero, luego lecturas relacionadas. */
function ContinueWithPodcast({ post }: { post: BlogPost }) {
    const ep = post.episode
    const tarjetas: ReactNode[] = []
    if (ep) {
        const anterior = episodios.find((e) => e.episode!.number === ep.number - 1)
        const siguiente = episodios.find((e) => e.episode!.number === ep.number + 1)
        if (anterior) tarjetas.push(<EpisodeCard key="ant" post={anterior} rotulo="Ver el episodio anterior" />)
        if (siguiente) tarjetas.push(<EpisodeCard key="sig" post={siguiente} rotulo="Ver el siguiente episodio" />)
        else if (PODCAST.proximo?.numero === ep.number + 1) tarjetas.push(<UpcomingCard key="prox" />)
    } else {
        episodios.slice(0, 2).forEach((e) =>
            tarjetas.push(<EpisodeCard key={e.slug} post={e} rotulo="Ver el episodio" />)
        )
    }

    const relacionados = post.related
        .map((r) => (r.href.startsWith("/blog/") ? getPostBySlug(r.href.slice(6)) : undefined))
        .filter((p): p is BlogPost => Boolean(p) && !(ep && p!.episode))
    const otrosEnlaces = post.related.filter((r) => !r.href.startsWith("/blog/"))

    return (
        <section className="container mx-auto max-w-[1080px] px-6 pt-20" aria-labelledby="seguir">
            {tarjetas.length > 0 && (
                <>
                    <h2 id="seguir" className="mb-6 font-display text-[1.7rem] font-bold tracking-[-0.025em] text-tinta md:text-[1.9rem]">
                        {ep ? "Sigue con el podcast" : "Escuche el podcast"}
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2 md:gap-6">{tarjetas}</div>
                </>
            )}
            {(relacionados.length > 0 || otrosEnlaces.length > 0) && (
                <div className="mt-14">
                    <h2 className="mb-1.5 font-display text-xl font-bold tracking-[-0.015em] text-tinta">Para profundizar</h2>
                    {relacionados.length > 0 && (
                        <ul className="border-b border-slate-200">
                            {relacionados.map((p) => (
                                <li key={p.slug} className="border-t border-slate-200">
                                    <PostRow post={p} compact />
                                </li>
                            ))}
                        </ul>
                    )}
                    {otrosEnlaces.length > 0 && (
                        <ul className="mt-4 space-y-1">
                            {otrosEnlaces.map((r) => (
                                <li key={r.href}>
                                    {/* py-2: área táctil de 24 px o más (WCAG 2.5.8). */}
                                    <Link
                                        to={r.href}
                                        className="inline-flex items-center gap-1.5 py-2 font-semibold text-brand underline decoration-cyan decoration-2 underline-offset-4 hover:text-cyan-ink"
                                    >
                                        {r.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </section>
    )
}
