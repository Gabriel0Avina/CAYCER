import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Link } from "react-router-dom"

/**
 * Renderiza el cuerpo Markdown de un artículo con los estilos del sitio.
 *
 * El proyecto no usa @tailwindcss/typography, así que cada elemento se mapea a
 * mano. Ventaja: control total del contraste y del ritmo vertical, y ninguna
 * dependencia extra de estilos.
 */
export function MarkdownBody({ children }: { children: string }) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                h2: ({ children }) => (
                    <h2 className="mt-14 mb-5 text-2xl md:text-3xl font-bold text-slate-900 font-display text-balance">
                        {children}
                    </h2>
                ),
                h3: ({ children }) => (
                    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-900 font-display">
                        {children}
                    </h3>
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
                    return <p className="mb-6 text-lg leading-relaxed text-slate-700">{children}</p>
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
                ul: ({ children }) => (
                    <ul className="mb-6 space-y-3 list-disc pl-6 marker:text-cyan">{children}</ul>
                ),
                ol: ({ children }) => (
                    <ol className="mb-6 space-y-3 list-decimal pl-6 marker:text-cyan marker:font-bold">
                        {children}
                    </ol>
                ),
                li: ({ children }) => (
                    <li className="text-lg leading-relaxed text-slate-700 pl-1">{children}</li>
                ),
                strong: ({ children }) => (
                    <strong className="font-bold text-slate-900">{children}</strong>
                ),
                blockquote: ({ children }) => (
                    <blockquote className="my-8 rounded-2xl bg-slate-50 p-6 text-lg leading-relaxed text-slate-700">
                        {children}
                    </blockquote>
                ),
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
                    // Los enlaces internos pasan por el router: navegación sin
                    // recarga completa y sin perder el estado de la SPA.
                    if (url.startsWith("/")) {
                        return (
                            <Link
                                to={url}
                                className="font-semibold text-brand underline decoration-cyan decoration-2 underline-offset-4 hover:text-cyan"
                            >
                                {children}
                            </Link>
                        )
                    }
                    return (
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-brand underline decoration-cyan decoration-2 underline-offset-4 hover:text-cyan"
                        >
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
