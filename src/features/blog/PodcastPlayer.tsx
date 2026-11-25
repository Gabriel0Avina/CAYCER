import { useCallback, useMemo, useRef, useState } from "react"
import type { ReactNode } from "react"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { mmss } from "./podcast"
import { PlayerContext, usePodcastPlayer } from "./playerContext"
import type { Chapter } from "./playerContext"

export function PodcastPlayerProvider({ chapters, children }: { chapters: Chapter[]; children: ReactNode }) {
    const [start, setStart] = useState(0)
    const [playing, setPlaying] = useState(false)
    const [nonce, setNonce] = useState(0)
    const playerRef = useRef<HTMLDivElement | null>(null)

    const seek = useCallback((t: number) => {
        // El clic en un capítulo ya es la intención de ver ese momento: se
        // reproduce directo, sin pedir un segundo clic en el play.
        setStart(t)
        setNonce((n) => n + 1)
        setPlaying(true)
        const el = playerRef.current
        if (!el) return
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" })
        // Destello para que se note a dónde llevó el clic.
        el.classList.remove("animate-player-pulse")
        void el.offsetWidth
        el.classList.add("animate-player-pulse")
    }, [])

    const play = useCallback(() => setPlaying(true), [])

    const value = useMemo(
        () => ({ start, playing, nonce, chapters, seek, play, playerRef }),
        [start, playing, nonce, chapters, seek, play]
    )
    return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

function chapterAt(chapters: Chapter[], t: number) {
    let actual = chapters[0]
    for (const c of chapters) if (c.t <= t) actual = c
    return actual
}

/**
 * Reproductor del episodio con el mismo patrón "facade" de VideoEmbed: solo
 * se pinta la portada y el iframe de YouTube se monta al dar play. Los
 * capítulos y los botones "Escúchalo" del artículo cambian el minuto de inicio.
 */
export function PodcastPlayer({ youtubeId, title, image }: { youtubeId: string; title: string; image?: string }) {
    const ctx = usePodcastPlayer()
    if (!ctx) return null
    const { start, playing, nonce, chapters, play, playerRef } = ctx
    const capitulo = start === 0 ? null : chapterAt(chapters, start)

    return (
        <div
            ref={playerRef}
            className="relative aspect-video w-full overflow-hidden rounded-[20px] bg-brand-dark shadow-[0_30px_70px_-24px_rgba(0,26,51,0.55)]"
        >
            {playing ? (
                <iframe
                    key={nonce}
                    src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&start=${start}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                />
            ) : (
                <button
                    type="button"
                    onClick={play}
                    aria-label={`Reproducir: ${title}${capitulo ? `, desde ${mmss(start)}` : ""}`}
                    className="group absolute inset-0 h-full w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                >
                    <img
                        src={image ?? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-0 bg-linear-to-t from-brand-dark/85 via-brand-dark/10 to-transparent" />
                    <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-[60%] items-center justify-center rounded-full bg-cyan text-brand-dark shadow-xl transition-transform duration-300 group-hover:scale-105 md:h-20 md:w-20">
                        <Play className="ml-1 h-7 w-7 md:h-8 md:w-8" fill="currentColor" aria-hidden="true" />
                    </span>
                    <span className="absolute bottom-0 left-0 flex items-center gap-2.5 p-5 text-sm font-semibold text-white md:p-7 md:text-[15px]">
                        <span className="rounded-md bg-white px-2 py-0.5 font-mono text-[13px] text-brand-dark tabular-nums">
                            {mmss(start)}
                        </span>
                        {capitulo ? capitulo.title : "Episodio completo"}
                    </span>
                </button>
            )}
        </div>
    )
}

/** Lista de capítulos: cada uno lleva el reproductor a su minuto. */
export function ChapterList() {
    const ctx = usePodcastPlayer()
    if (!ctx) return null
    const { chapters, start, seek } = ctx
    return (
        <ol className="mb-8 mt-2 overflow-hidden rounded-2xl border border-slate-200">
            {chapters.map((c) => {
                const actual = start === c.t && start !== 0
                return (
                    <li key={c.t} className="border-t border-slate-200 first:border-t-0">
                        <button
                            type="button"
                            onClick={() => seek(c.t)}
                            aria-current={actual ? "true" : undefined}
                            className={cn(
                                "group grid w-full grid-cols-[3.5rem_1fr_1rem] items-center gap-3 px-4 py-3 text-left text-[16.5px] text-slate-900 transition-colors hover:bg-slate-50 md:px-5",
                                actual && "bg-sky-50"
                            )}
                        >
                            <span className="font-mono text-sm text-cyan-ink tabular-nums">{mmss(c.t)}</span>
                            <span>{c.title}</span>
                            <Play
                                className={cn("h-3.5 w-3.5 text-slate-400 transition-colors group-hover:text-cyan-ink", actual && "text-brand")}
                                fill="currentColor"
                                aria-hidden="true"
                            />
                        </button>
                    </li>
                )
            })}
        </ol>
    )
}

/** Botón "Escúchalo · 07:46" que lleva el reproductor a un momento. */
export function MomentButton({ t, label = "Escúchalo" }: { t: number; label?: string }) {
    const ctx = usePodcastPlayer()
    if (!ctx) return null
    return (
        <button
            type="button"
            onClick={() => ctx.seek(t)}
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 py-1.5 pl-2.5 pr-3 text-[13.5px] font-semibold text-cyan-ink transition-colors hover:bg-brand hover:text-white"
        >
            <Play className="h-3 w-3" fill="currentColor" aria-hidden="true" />
            {label} · {mmss(t)}
        </button>
    )
}
