import { useState, useSyncExternalStore } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { ArrowRight, Mic, Play } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SEO } from "@/components/SEO"
import { cn } from "@/lib/utils"
import { trackConversion } from "@/lib/analytics"
import { whatsappUrl } from "@/lib/contacto"
import { postsByDate, toSchemaDateTime } from "@/features/blog/postsData"
import type { Pillar } from "@/features/blog/postsData"
import { PODCAST, fechaCorta } from "@/features/blog/podcast"
import { PostRow, PostThumb, SpotifyIcon, YouTubeIcon } from "@/features/blog/BlogUI"

const SITE = "https://caycer.ing"

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
        datePublished: toSchemaDateTime(p.datePublished),
        dateModified: toSchemaDateTime(p.dateModified),
        url: `${SITE}/blog/${p.slug}`,
    })),
}

/** Episodios publicados, del más nuevo al más viejo. */
const episodios = postsByDate
    .filter((p) => p.episode)
    .sort((a, b) => b.episode!.number - a.episode!.number)

/** Temas con al menos un artículo, en el orden del menú de filtros. */
const ordenTemas: Pillar[] = ["Podcast", "Calibración", "Cadena de frío", "Calificación de equipos", "Mapeo térmico", "Normativa FEUM"]
const temas = ordenTemas
    .map((t) => ({ tema: t, total: postsByDate.filter((p) => p.pillar === t).length }))
    .filter((t) => t.total > 0)

const sinSuscripcion = () => () => {}

const ep2 = (n: number) => String(n).padStart(2, "0")

export function Blog() {
    const [params, setParams] = useSearchParams()
    // El HTML prerenderizado muestra todos los artículos; el filtro de la URL
    // (?tema=Podcast) se aplica ya en el navegador, después de hidratar, para
    // que el primer render del cliente coincida con el del servidor.
    const hidratado = useSyncExternalStore(sinSuscripcion, () => true, () => false)
    const deUrl = params.get("tema")
    const [elegido, setElegido] = useState<Pillar | "*" | null>(null)
    const filtro: Pillar | "*" =
        elegido ?? (hidratado && temas.some((x) => x.tema === deUrl) ? (deUrl as Pillar) : "*")

    function elegir(t: Pillar | "*") {
        setElegido(t)
        setParams(t === "*" ? {} : { tema: t }, { replace: true, preventScrollReset: true })
    }

    const visibles = filtro === "*" ? postsByDate : postsByDate.filter((p) => p.pillar === filtro)
    const destacado = episodios[0]

    return (
        <div className="flex min-h-screen flex-col bg-white font-display">
            <SEO
                title="Blog técnico"
                description="Artículos sobre mapeo térmico, cadena de frío, calificación de equipos y normativa, escritos por un laboratorio acreditado ante la EMA."
                path="/blog"
                schema={blogSchema}
            />
            <Navbar />
            <main className="grow">
                {/* Portada: el podcast manda. El episodio más reciente ocupa el
                    lugar principal y la temporada completa queda a la vista. */}
                <section className="overflow-hidden bg-linear-to-b from-brand-dark to-[#002B55] pt-28 text-[#C9D6E4] md:pt-36">
                    <div className="container mx-auto max-w-[1180px] px-6">
                        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
                            <div>
                                <h1 className="mb-5 font-display text-[2.4rem] font-bold leading-[1.04] tracking-[-0.035em] text-white text-balance md:text-[3.75rem]">
                                    Lo que nadie ve de la metrología
                                </h1>
                                <p className="mb-8 max-w-[34ch] text-[18px] leading-[1.55] md:text-[19px]">
                                    Artículos y episodios del podcast de CAYCER, contados por el equipo que calibra,
                                    califica y valida todos los días.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href={PODCAST.youtubeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2.5 rounded-xl bg-cyan px-[18px] py-3 font-semibold text-brand-dark transition-colors hover:bg-[#26C3EA]"
                                    >
                                        <YouTubeIcon className="h-5 w-5" />
                                        Ver en YouTube
                                    </a>
                                    <a
                                        href={PODCAST.spotifyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2.5 rounded-xl border border-white/30 px-[18px] py-3 font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
                                    >
                                        <SpotifyIcon className="h-5 w-5" />
                                        Escuchar en Spotify
                                    </a>
                                </div>
                            </div>

                            {destacado && (
                                <Link
                                    to={`/blog/${destacado.slug}`}
                                    className="group relative block overflow-hidden rounded-[22px] bg-[#002B55] text-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]"
                                >
                                    <div className="relative">
                                        <PostThumb src={destacado.heroImage} pillar="Podcast" className="aspect-video rounded-none" />
                                        <span className="absolute inset-0 hidden bg-linear-to-t from-brand-dark/95 via-brand-dark/50 via-40% to-transparent to-70% sm:block" />
                                        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cyan text-brand-dark shadow-xl transition-transform duration-300 group-hover:scale-105 sm:h-[78px] sm:w-[78px] sm:-translate-y-[72%]">
                                            <Play className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <span className="block px-5 pb-5 pt-4 sm:absolute sm:inset-x-0 sm:bottom-0 sm:px-[26px] sm:pb-6">
                                        <span className="mb-2 flex flex-wrap items-center gap-2.5 text-[13px] font-semibold text-[#C9D6E4]">
                                            <span className="rounded-full bg-white px-2.5 py-0.5 text-xs text-brand-dark">
                                                Episodio {destacado.episode!.number}
                                            </span>
                                            {destacado.episode!.duration}
                                        </span>
                                        <span className="mb-2 block font-display text-[1.3rem] font-bold leading-[1.2] tracking-[-0.02em] text-balance md:text-[1.6rem]">
                                            {destacado.episode!.shortTitle}
                                        </span>
                                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                                            Ver el episodio y leer el resumen <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                        </span>
                                    </span>
                                </Link>
                            )}
                        </div>

                        <ol
                            aria-label={`Temporada ${PODCAST.temporada}`}
                            className="mt-12 grid border-t border-white/10 md:mt-14 md:grid-cols-3"
                        >
                            {PODCAST.proximo && (
                                <li className="flex items-baseline gap-4 border-b border-white/10 py-4 md:border-b-0 md:py-6 md:pr-6">
                                    <span className="flex-none font-mono text-[13px] text-cyan">EP {ep2(PODCAST.proximo.numero)}</span>
                                    <span className="font-semibold leading-[1.3] text-white">
                                        {PODCAST.proximo.titulo}
                                        <span className="mt-1 block text-[13px] font-normal text-[#9FB3C8]">
                                            Próximamente · {PODCAST.proximo.duracion}
                                        </span>
                                    </span>
                                </li>
                            )}
                            {episodios.map((e, i) => (
                                <li key={e.slug} className="border-b border-white/10 md:border-b-0">
                                    <Link
                                        to={`/blog/${e.slug}`}
                                        className="group flex items-baseline gap-4 py-4 md:py-6 md:pr-6"
                                    >
                                        <span className="flex-none font-mono text-[13px] text-cyan">EP {ep2(e.episode!.number)}</span>
                                        <span className="font-semibold leading-[1.3] text-white group-hover:underline group-hover:decoration-cyan group-hover:underline-offset-4">
                                            {e.episode!.shortTitle}
                                            {i === 0 && (
                                                <span className="ml-2 inline-block rounded-full bg-cyan px-[7px] py-0.5 align-[2px] text-[11px] font-bold text-brand-dark no-underline">
                                                    Nuevo
                                                </span>
                                            )}
                                            <span className="mt-1 block text-[13px] font-normal text-[#9FB3C8]">
                                                {fechaCorta(e.datePublished)} · {e.episode!.duration}
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section className="pb-10 pt-16 md:pt-22">
                    <div className="container mx-auto max-w-[1180px] px-6">
                        <div className="mb-6 flex flex-wrap items-end justify-between gap-5 md:mb-7">
                            <h2 className="m-0 font-display text-[1.75rem] font-bold tracking-[-0.025em] text-tinta md:text-[2rem]">
                                Todos los artículos
                            </h2>
                            <div
                                role="group"
                                aria-label="Filtrar por tema"
                                className="-mx-6 flex w-[calc(100%+3rem)] gap-2 overflow-x-auto px-6 py-0.5 [scrollbar-width:none] md:mx-0 md:w-auto md:flex-wrap md:overflow-visible md:px-0"
                            >
                                {[{ tema: "*" as const, total: postsByDate.length }, ...temas].map(({ tema, total }) => {
                                    const activo = filtro === tema
                                    return (
                                        <button
                                            key={tema}
                                            type="button"
                                            aria-pressed={activo}
                                            onClick={() => elegir(tema)}
                                            className={cn(
                                                "whitespace-nowrap rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
                                                activo
                                                    ? "border-brand bg-brand text-white"
                                                    : "border-slate-200 bg-white text-tinta hover:border-brand"
                                            )}
                                        >
                                            {tema === "*" ? "Todos" : tema}{" "}
                                            <span className={cn("tabular-nums", activo ? "text-[#B9CCE0]" : "text-slate-500")}>
                                                {total}
                                            </span>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        <ul className="border-b border-slate-200">
                            {visibles.map((post) => (
                                <li key={post.slug} className="border-t border-slate-200">
                                    <PostRow post={post} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="pb-24 pt-10">
                    <div className="container mx-auto max-w-[1180px] px-6">
                        <div className="grid items-center gap-7 rounded-3xl bg-tinte-2 p-7 md:grid-cols-[1fr_auto] md:p-11">
                            <div>
                                <h2 className="mb-2.5 font-display text-[1.5rem] font-bold leading-[1.15] tracking-[-0.025em] text-tinta text-balance md:text-[2rem]">
                                    ¿Qué tema quiere que expliquemos en el próximo episodio?
                                </h2>
                                <p className="m-0 max-w-[56ch] text-[17px] leading-relaxed text-slate-700">
                                    Mándenos su duda sobre calibración, mapeo térmico o cadena de frío. Las mejores
                                    preguntas se responden al aire.
                                </p>
                            </div>
                            <a
                                href={whatsappUrl("Hola Caycer, tengo un tema para el podcast: ")}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackConversion("contacto_whatsapp", { origen: "blog_tema_podcast", pagina: "/blog" })}
                                className="inline-flex items-center gap-2.5 justify-self-start rounded-xl bg-brand px-5 py-3.5 font-semibold text-white transition-colors hover:bg-brand-light"
                            >
                                <Mic className="h-5 w-5" aria-hidden="true" />
                                Proponer un tema
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
