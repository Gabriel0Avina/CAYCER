import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Link } from "react-router-dom"
import type { BlogPost } from "./postsData"
import { anclaDe } from "./podcast"
import { ChapterList, MomentButton } from "./PodcastPlayer"
import { usePodcastPlayer } from "./playerContext"

/** Nodo HAST mínimo: solo lo que se lee para decidir cómo pintar un bloque. */
interface Nodo {
    type: string
    value?: string
    tagName?: string
    properties?: Record<string, unknown>
    children?: Nodo[]
}

function textoDe(n?: Nodo): string {
    if (!n) return ""
    if (n.type === "text") return n.value ?? ""
    return (n.children ?? []).map(textoDe).join("")
}

/** Lista de capítulos escrita como enlaces de YouTube con "&t=NNs". */
function esListaDeCapitulos(n?: Nodo) {
    const items = (n?.children ?? []).filter((c) => c.tagName === "li")
    return (
        items.length > 2 &&
        items.every((li) => {
            const a = (li.children ?? []).find((c) => c.type === "element")
            const href = String(a?.properties?.href ?? "")
            return a?.tagName === "a" && href.includes("youtube.com/watch") && /[?&]t=\d+s/.test(href)
        })
    )
}

/**
 * Renderiza el cuerpo Markdown de un artículo con los estilos del sitio.
 *
 * El proyecto no usa @tailwindcss/typography, así que cada elemento se mapea a
 * mano. Ventaja: control total del contraste y del ritmo vertical, y ninguna
 * dependencia extra de estilos.
 *
 * En los artículos de podcast (`episode`), la lista de capítulos se vuelve
 * interactiva, cada sección con su minuto lleva un botón "Escúchalo" y las
 * citas pueden saltar al momento en que se dijeron.
 */
export function MarkdownBody({ children, episode }: { children: string; episode?: BlogPost["episode"] }) {
    const player = usePodcastPlayer()
    const interactivo = Boolean(player && episode)

    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                h2: ({ children, node }) => {
                    const texto = textoDe(node as Nodo)
                    const momento = interactivo
                        ? episode?.moments?.find((m) => texto.includes(m.heading))
                        : undefined
                    return (
                        <>
                            <h2
                                id={anclaDe(texto)}
                                className="mt-16 mb-3 scroll-mt-28 font-display text-[1.6rem] font-bold leading-[1.18] tracking-[-0.022em] text-tinta text-balance md:text-[1.9rem]"
                            >
                                {children}
                            </h2>
                            {momento && (
                                <div className="mb-4">
                                    <MomentButton t={momento.t} />
                                </div>
                            )}
                        </>
                    )
                },
                h3: ({ children }) => (
                    <h3 className="mt-10 mb-4 font-display text-xl font-bold text-tinta">{children}</h3>
                ),
                // react-markdown envuelve una imagen suelta en <p>, y un <figure>
                // dentro de <p> es HTML inválido: el navegador cierra el párrafo
                // por su cuenta y el layout se rompe. Cuando el párrafo contiene
                // solo la imagen, se omite la etiqueta.
                p: ({ children, node }) => {
                    const soloImagen =
                        node?.children?.length === 1 &&
                        node.children[0].type === "element" &&
                        node.children[0].tagName === "img"
                    if (soloImagen) return <>{children}</>
                    return <p className="mb-6 text-[17.5px] leading-[1.72] text-slate-700 md:text-[18.5px]">{children}</p>
                },
                // El "title" del Markdown —![alt](ruta "title")— se usa como pie
                // de foto visible, no como tooltip.
                img: ({ src, alt, title }) => (
                    <figure className="my-10">
                        <img
                            src={typeof src === "string" ? src : ""}
                            alt={alt ?? ""}
                            loading="lazy"
                            decoding="async"
                            className="w-full rounded-2xl shadow-lg"
                        />
                        {title && (
                            <figcaption className="mt-3 text-sm leading-relaxed text-slate-500">
                                {title}
                            </figcaption>
                        )}
                    </figure>
                ),
                ul: ({ children, node }) => {
                    if (interactivo && esListaDeCapitulos(node as Nodo)) return <ChapterList />
                    return <ul className="mb-6 space-y-3 list-disc pl-6 marker:text-cyan">{children}</ul>
                },
                ol: ({ children }) => (
                    <ol className="mb-6 space-y-3 list-decimal pl-6 marker:text-cyan-ink marker:font-bold">
                        {children}
                    </ol>
                ),
                li: ({ children }) => (
                    <li className="pl-1 text-[17.5px] leading-[1.65] text-slate-700 md:text-[18.5px]">{children}</li>
                ),
                strong: ({ children }) => <strong className="font-semibold text-tinta">{children}</strong>,
                // Las citas del Markdown vienen como: "frase" — Nombre. Se
                // pintan como cita destacada con su autor, y en un episodio
                // pueden llevar al minuto en que se dijeron.
                blockquote: ({ children, node }) => {
                    const texto = textoDe(node as Nodo).trim()
                    const partes = texto.match(/^"(.+)"\s+—\s+(.+)$/s)
                    if (!partes) {
                        return (
                            <blockquote className="my-8 rounded-2xl bg-tinte p-6 text-lg leading-relaxed text-slate-700">
                                {children}
                            </blockquote>
                        )
                    }
                    const momento = interactivo
                        ? episode?.quotes?.find((q) => texto.includes(q.match))
                        : undefined
                    return (
                        <figure className="my-12">
                            <blockquote>
                                <p className="mb-4 font-display text-[1.45rem] font-semibold leading-[1.32] tracking-[-0.018em] text-tinta text-balance md:text-[1.75rem]">
                                    <span className="text-cyan" aria-hidden="true">“</span>
                                    {partes[1]}
                                    <span className="text-cyan" aria-hidden="true">”</span>
                                </p>
                            </blockquote>
                            <figcaption className="flex flex-wrap items-center gap-3 text-[15px]">
                                <span className="font-semibold text-slate-700">{partes[2]}</span>
                                {momento && <MomentButton t={momento.t} label="Escuchar este momento" />}
                            </figcaption>
                        </figure>
                    )
                },
                // Las tablas anchas deben desplazarse dentro de su contenedor,
                // nunca empujar el ancho de la página en móvil.
                table: ({ children }) => (
                    <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                        <table className="w-full border-collapse text-left">{children}</table>
                    </div>
                ),
                thead: ({ children }) => <thead className="bg-brand text-white">{children}</thead>,
                th: ({ children }) => (
                    <th className="p-4 text-sm font-semibold whitespace-nowrap">{children}</th>
                ),
                td: ({ children }) => (
                    <td className="border-t border-slate-200 p-4 text-slate-700">{children}</td>
                ),
                a: ({ href, children }) => {
                    const url = href ?? "#"
                    const clase =
                        "font-semibold text-brand underline decoration-cyan decoration-2 underline-offset-4 hover:text-cyan-ink"
                    // Los enlaces internos pasan por el router: navegación sin
                    // recarga completa y sin perder el estado de la SPA.
                    if (url.startsWith("/")) {
                        return (
                            <Link to={url} className={clase}>
                                {children}
                            </Link>
                        )
                    }
                    return (
                        <a href={url} target="_blank" rel="noopener noreferrer" className={clase}>
                            {children}
                        </a>
                    )
                },
            }}
        >
            {children}
        </ReactMarkdown>
    )
}
