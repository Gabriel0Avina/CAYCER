import { useState } from "react"
import { Play } from "lucide-react"

/**
 * maxresdefault (1280x720, 16:9 real) es la mejor miniatura, pero YouTube no la
 * genera para todos los videos; hqdefault (480x360) existe siempre aunque venga
 * con bandas negras que el object-cover recorta. Se intenta la buena primero y
 * se cae a la segura; si ambas fallan, queda el fondo oscuro con el botón, que
 * sigue leyéndose como un reproductor.
 */
const thumbnails = (id: string) => [
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
]

interface VideoEmbedProps {
    /** ID de YouTube, no la URL completa (ej. "nUeB70vvIUQ"). */
    youtubeId: string
    /** Título visible y nombre accesible del botón de reproducción. */
    title: string
}

/**
 * Embed diferido de YouTube (patrón "facade").
 *
 * Un <iframe> de YouTube normal descarga cerca de 1 MB de JavaScript de Google
 * en cuanto carga la página, aunque nadie le dé play: castiga el LCP y mete
 * cookies de terceros de entrada. Aquí solo se pinta la miniatura, y el
 * reproductor real se monta al hacer clic.
 *
 * Se usa youtube-nocookie.com para que no se fije rastreo hasta que la persona
 * decide ver el video.
 */
export function VideoEmbed({ youtubeId, title }: VideoEmbedProps) {
    const [playing, setPlaying] = useState(false)
    const [thumbIndex, setThumbIndex] = useState(0)
    const thumbs = thumbnails(youtubeId)

    return (
        <figure className="my-10">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
                {playing ? (
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full border-0"
                    />
                ) : (
                    <button
                        type="button"
                        onClick={() => setPlaying(true)}
                        aria-label={`Reproducir el video: ${title}`}
                        className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                    >
                        {/* Sin loading="lazy": el video va cerca del inicio del
                            artículo y diferirlo solo retrasa lo que la persona
                            ya está viendo. */}
                        {thumbIndex < thumbs.length && (
                            <img
                                src={thumbs[thumbIndex]}
                                alt=""
                                onError={() => setThumbIndex((i) => i + 1)}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        )}
                        <span className="absolute inset-0 bg-slate-900/30 transition-colors group-hover:bg-slate-900/15" />
                        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand/95 shadow-xl transition-transform duration-300 group-hover:scale-110">
                            <Play size={26} className="ml-1 text-white" fill="currentColor" />
                        </span>
                    </button>
                )}
            </div>
            <figcaption className="mt-3 text-center text-sm text-slate-500">{title}</figcaption>
        </figure>
    )
}
