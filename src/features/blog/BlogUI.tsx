import { useEffect, useMemo, useState } from "react"
import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import {
    BookOpen,
    ClipboardCheck,
    List,
    Map as MapIcon,
    Mic,
    Play,
    Snowflake,
    Thermometer,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { trackConversion } from "@/lib/analytics"
import { whatsappUrl } from "@/lib/contacto"
import type { BlogPost, Pillar } from "./postsData"
import { fechaCorta } from "./podcast"

/** Logotipo de Spotify (lucide no trae marcas de terceros nuevas). */
export function SpotifyIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
            <path
                fill="currentColor"
                d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.4a.6.6 0 0 1-.9.2c-2.4-1.5-5.4-1.8-8.9-1a.6.6 0 1 1-.3-1.2c3.8-.9 7.1-.5 9.8 1.1.3.2.4.6.3.9Zm1.2-2.7a.8.8 0 0 1-1.1.3c-2.7-1.7-6.9-2.2-10.1-1.2a.8.8 0 1 1-.5-1.5c3.7-1.1 8.3-.6 11.4 1.3.4.3.5.8.3 1.1Zm.1-2.8C14.7 9 9.4 8.8 6.3 9.7a.9.9 0 1 1-.5-1.8c3.5-1.1 9.4-.9 13 1.3a.9.9 0 0 1-.9 1.7Z"
            />
        </svg>
    )
}

/** Logotipo de YouTube. */
export function YouTubeIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
            <path
                fill="currentColor"
                d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3Z"
            />
        </svg>
    )
}

const iconoDelPilar: Record<Pillar, LucideIcon> = {
    Calibración: Thermometer,
    "Mapeo térmico": MapIcon,
    "Cadena de frío": Snowflake,
    "Calificación de equipos": ClipboardCheck,
    "Normativa FEUM": BookOpen,
    Podcast: Mic,
}

/** Portada de un artículo; sin foto, un mosaico de marca con el ícono del tema. */
export function PostThumb({ src, pillar, className }: { src?: string; pillar: Pillar; className?: string }) {
    const Icono = iconoDelPilar[pillar]
    return (
        <div className={cn("aspect-16/10 overflow-hidden rounded-[14px] bg-tinte", className)}>
            {src ? (
                <img
                    src={src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-brand-dark to-brand text-cyan">
                    <Icono className="h-1/3 w-1/3" strokeWidth={1.5} aria-hidden="true" />
                </div>
            )}
        </div>
    )
}

/** Fila del índice y de "Para profundizar": portada a la izquierda, texto a la derecha. */
export function PostRow({ post, compact = false }: { post: BlogPost; compact?: boolean }) {
    return (
        <Link
            to={`/blog/${post.slug}`}
            className={cn(
                "group grid items-center gap-4 py-5 md:gap-9 md:py-7",
                compact ? "grid-cols-[7.25rem_1fr] md:grid-cols-[11rem_1fr] md:gap-6" : "grid-cols-[7.25rem_1fr] md:grid-cols-[18.75rem_1fr]",
                "items-start md:items-center"
            )}
        >
            <PostThumb src={post.heroImage} pillar={post.pillar} />
            <div>
                <div className="mb-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12.5px] text-slate-500 md:mb-2.5 md:text-[13.5px]">
                    <span className="font-semibold text-brand">{post.pillar}</span>
                    <span className="h-[3px] w-[3px] rounded-full bg-slate-400" aria-hidden="true" />
                    <time dateTime={post.datePublished}>{fechaCorta(post.datePublished)}</time>
                    <span className="h-[3px] w-[3px] rounded-full bg-slate-400" aria-hidden="true" />
                    <span>{post.readingMinutes} min</span>
                    {post.youtubeId && !compact && (
                        <span className="hidden items-center gap-1 font-semibold text-cyan-ink md:inline-flex">
                            <span className="h-[3px] w-[3px] rounded-full bg-slate-400 mr-1.5" aria-hidden="true" />
                            <Play className="h-3 w-3" fill="currentColor" aria-hidden="true" />
                            Con video
                        </span>
                    )}
                </div>
                <h3
                    className={cn(
                        "m-0 font-display font-bold leading-[1.25] tracking-[-0.018em] text-tinta text-balance transition-colors group-hover:text-brand group-hover:underline group-hover:decoration-cyan group-hover:decoration-2 group-hover:underline-offset-[5px]",
                        compact ? "text-[16.5px] md:text-[19px]" : "text-[17px] md:mb-2.5 md:text-[23px]"
                    )}
                >
                    {post.title}
                </h3>
                {!compact && (
                    <p className="m-0 hidden max-w-[62ch] leading-relaxed text-slate-700 md:block">{post.description}</p>
                )}
            </div>
        </Link>
    )
}

/** Barra fina de avance de lectura, medida sobre el cuerpo del artículo. */
export function ReadingProgress({ target }: { target: React.RefObject<HTMLElement | null> }) {
    const [avance, setAvance] = useState(0)
    useEffect(() => {
        let marco = 0
        const medir = () => {
            marco = 0
            const el = target.current
            if (!el) return
            const r = el.getBoundingClientRect()
            const total = r.height - window.innerHeight * 0.6
            setAvance(Math.min(1, Math.max(0, -r.top / Math.max(total, 1))))
        }
        const alDesplazar = () => {
            if (!marco) marco = requestAnimationFrame(medir)
        }
        medir()
        window.addEventListener("scroll", alDesplazar, { passive: true })
        window.addEventListener("resize", alDesplazar)
        return () => {
            window.removeEventListener("scroll", alDesplazar)
            window.removeEventListener("resize", alDesplazar)
            if (marco) cancelAnimationFrame(marco)
        }
    }, [target])
    return (
        <div
            className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-cyan"
            style={{ transform: `scaleX(${avance})` }}
            aria-hidden="true"
        />
    )
}

/** Sección visible según el desplazamiento, para resaltar el índice. */
function useSeccionActiva(ids: string[]) {
    const [activa, setActiva] = useState<string | null>(null)
    useEffect(() => {
        const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => Boolean(e))
        if (!els.length) return
        const io = new IntersectionObserver(
            (entradas) => {
                for (const e of entradas) if (e.isIntersecting) setActiva(e.target.id)
            },
            { rootMargin: "-90px 0px -70% 0px" }
        )
        els.forEach((e) => io.observe(e))
        return () => io.disconnect()
    }, [ids])
    return activa
}

/** Índice del artículo: columna fija en escritorio, barra desplegable en móvil. */
export function ArticleToc({
    headings,
    variant,
    aside,
}: {
    headings: { id: string; texto: string }[]
    variant: "desktop" | "mobile"
    aside?: ReactNode
}) {
    // Clave de texto para que los ids cambien solo cuando cambia el artículo.
    const clave = headings.map((h) => h.id).join("|")
    const ids = useMemo(() => clave.split("|"), [clave])
    const activa = useSeccionActiva(ids)
    const [abierto, setAbierto] = useState(false)
    if (headings.length < 3) return null

    if (variant === "mobile") {
        const actual = headings.find((h) => h.id === activa)
        return (
            <details
                open={abierto}
                onToggle={(e) => setAbierto((e.target as HTMLDetailsElement).open)}
                className="sticky top-16 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md lg:hidden"
            >
                <summary className="flex cursor-pointer list-none items-center gap-2.5 px-6 py-3 text-sm text-tinta [&::-webkit-details-marker]:hidden">
                    <List className="h-4.5 w-4.5 flex-none text-brand" aria-hidden="true" />
                    <span className="whitespace-nowrap font-semibold">En este artículo</span>
                    {actual && (
                        <span className="min-w-0 truncate text-[13px] text-slate-500">· {actual.texto}</span>
                    )}
                </summary>
                <ol className="max-h-[60vh] overflow-auto px-6 pb-3">
                    {headings.map((h) => (
                        <li key={h.id}>
                            <a
                                href={`#${h.id}`}
                                onClick={() => setAbierto(false)}
                                className={cn(
                                    "block border-t border-slate-200 py-2.5 text-[15px] text-slate-700",
                                    activa === h.id && "font-semibold text-brand"
                                )}
                            >
                                {h.texto}
                            </a>
                        </li>
                    ))}
                </ol>
            </details>
        )
    }

    return (
        <aside className="sticky top-28 hidden self-start text-[14.5px] lg:block" aria-label="Contenido del artículo">
            <p className="mb-3 text-[13px] font-semibold text-slate-500">En este artículo</p>
            <ol className="border-l border-slate-200">
                {headings.map((h) => (
                    <li key={h.id}>
                        <a
                            href={`#${h.id}`}
                            className={cn(
                                "-ml-px block border-l py-1.5 pl-4 leading-[1.35] transition-colors",
                                activa === h.id
                                    ? "border-brand font-semibold text-brand"
                                    : "border-transparent text-slate-500 hover:text-tinta"
                            )}
                        >
                            {h.texto}
                        </a>
                    </li>
                ))}
            </ol>
            {aside && <div className="mt-7 border-t border-slate-200 pt-5">{aside}</div>}
        </aside>
    )
}

/** Cierre del artículo: una franja con una sola acción, por WhatsApp. */
export function BlogClosing({
    title,
    text,
    whatsappMessage,
    buttonText = "Escribir por WhatsApp",
}: {
    title: string
    text: string
    whatsappMessage: string
    buttonText?: string
}) {
    return (
        <section className="bg-linear-to-br from-brand-dark to-[#002B55] py-16 text-[#C9D6E4] md:py-20">
            <div className="container mx-auto grid max-w-[1080px] items-center gap-8 px-6 md:grid-cols-[1fr_auto]">
                <div>
                    <h2 className="mb-3 font-display text-[1.7rem] font-bold leading-[1.12] tracking-[-0.028em] text-white text-balance md:text-[2.25rem]">
                        {title}
                    </h2>
                    <p className="m-0 max-w-[54ch] text-[17px] leading-relaxed">{text}</p>
                </div>
                <a
                    href={whatsappUrl(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                        trackConversion("contacto_whatsapp", {
                            origen: "cierre_blog",
                            pagina: typeof window !== "undefined" ? window.location.pathname : "",
                        })
                    }
                    className="inline-flex items-center justify-center gap-2.5 justify-self-start rounded-xl bg-cyan px-5 py-3.5 font-semibold text-brand-dark transition-colors hover:bg-[#26C3EA]"
                >
                    {buttonText}
                </a>
            </div>
        </section>
    )
}
