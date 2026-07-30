/**
 * Índice del blog. Fuente única de verdad para SEO, schema, navegación y
 * sitemap: prerender.mjs lee estos slugs para generar las páginas estáticas y
 * el sitemap.xml, así que agregar un artículo aquí lo publica en todos lados.
 *
 * El cuerpo de cada artículo vive en ./posts/<slug>.md — los metadatos se
 * mantienen en TypeScript para no depender de parsear frontmatter y para que
 * el schema quede tipado.
 */

/** Pilares de contenido. Ordenan el índice y agrupan los artículos. */
export type Pillar =
    | "Mapeo térmico"
    | "Cadena de frío"
    | "Calificación de equipos"
    | "Normativa FEUM";

export interface BlogPost {
    slug: string;
    title: string;
    /** Meta description y bajada del índice. 120-160 caracteres. */
    description: string;
    /** ISO 8601. Alimenta datePublished del schema Article. */
    datePublished: string;
    /** ISO 8601. Alimenta dateModified y el lastmod del sitemap. */
    dateModified: string;
    author: string;
    pillar: Pillar;
    /** Minutos de lectura, calculados a mano al escribir. */
    readingMinutes: number;
    /** ID de YouTube (no la URL completa). Si está, se embebe el video. */
    youtubeId?: string;
    /** Título del video, obligatorio para el VideoObject schema. */
    youtubeTitle?: string;
    /** Rutas internas relacionadas, para el bloque de enlaces del pie. */
    related: { label: string; href: string }[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "mapeo-termico",
        title: "Mapeo térmico: qué es, cuándo se necesita y qué evidencia genera",
        description:
            "Qué es un mapeo térmico, en qué recintos aplica, qué mide y por qué la cadena de frío farmacéutica lo exige como evidencia documentada.",
        datePublished: "2026-07-30",
        dateModified: "2026-07-30",
        author: "CAYCER Ingeniería y Metrología",
        pillar: "Mapeo térmico",
        readingMinutes: 7,
        youtubeId: "nUeB70vvIUQ",
        // Título propio del sitio, no el de YouTube: aquel atribuye los
        // requisitos a COFEPRIS y la regla de contenido del proyecto es citar
        // el Suplemento FEUM, nunca COFEPRIS.
        youtubeTitle: "Mapeo térmico en almacenes farmacéuticos",
        related: [
            { label: "Calificación de equipos e instalaciones", href: "/servicios/calificacion" },
            { label: "Sector farmacéutico", href: "/sectores/farmaceutico" },
            { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
        ],
    },
];

/** Artículos ordenados del más reciente al más antiguo. */
export const postsByDate = [...blogPosts].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished)
);

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((p) => p.slug === slug);
}

/**
 * Cuerpos en Markdown. `eager` los incluye en el bundle, que es lo que permite
 * que el prerender los renderice sin lecturas de disco en tiempo de ejecución.
 */
const bodies = import.meta.glob("./posts/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
}) as Record<string, string>;

export function getPostBody(slug: string): string {
    return bodies[`./posts/${slug}.md`] ?? "";
}
