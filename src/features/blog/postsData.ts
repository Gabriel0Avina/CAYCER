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
    /**
     * Foto de fondo del encabezado, servida desde /public. Opcional: sin ella
     * el encabezado usa solo el degradado de marca.
     */
    heroImage?: string;
    /** ID de YouTube (no la URL completa). Si está, se embebe el video. */
    youtubeId?: string;
    /** Título del video, obligatorio para el VideoObject schema. */
    youtubeTitle?: string;
    /**
     * Proceso paso a paso descrito en el artículo, para el HowTo schema.
     *
     * Nota: Google retiró los resultados enriquecidos de HowTo en 2023, así que
     * esto ya no produce un fragmento visual en la búsqueda. Sigue valiendo
     * porque los motores generativos leen la secuencia estructurada y citan el
     * orden correcto de las etapas.
     */
    howTo?: {
        name: string;
        steps: { name: string; text: string }[];
    };
    /** Rutas internas relacionadas, para el bloque de enlaces del pie. */
    related: { label: string; href: string }[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "calificacion-de-equipos",
        title: "Calificación de equipos: qué es y cómo son las cuatro etapas",
        description:
            "Qué significa calificar un equipo, en qué se diferencia de calibrar y validar, cómo funcionan las etapas DQ, IQ, OQ y PQ, y qué hay que preparar antes.",
        datePublished: "2026-08-12",
        dateModified: "2026-08-12",
        author: "CAYCER Ingeniería y Metrología",
        pillar: "Calificación de equipos",
        readingMinutes: 8,
        howTo: {
            name: "Las cuatro etapas de la calificación de equipos",
            steps: [
                {
                    name: "Calificación de diseño (DQ)",
                    text: "Se verifica, antes de comprar o instalar, que las especificaciones del equipo corresponden al uso previsto: rangos de trabajo, requisitos de la instalación eléctrica y condiciones del sitio.",
                },
                {
                    name: "Calificación de instalación (IQ)",
                    text: "Se comprueba que el equipo llegó completo y quedó instalado según lo previsto: modelo y número de serie, ubicación conforme al plano, servicios conectados y documentación del fabricante entregada.",
                },
                {
                    name: "Calificación de operación (OQ)",
                    text: "Se somete el equipo a sus condiciones de operación en todo el rango declarado, incluidos los extremos, para comprobar que responde según especificación y que sus alarmas y controles actúan cuando deben.",
                },
                {
                    name: "Calificación de desempeño (PQ)",
                    text: "Se demuestra que el equipo sostiene las condiciones en uso real y con carga, durante un periodo representativo. Aquí es donde el mapeo térmico aporta la evidencia distribuida.",
                },
            ],
        },
        related: [
            { label: "Calificación de equipos e instalaciones", href: "/servicios/calificacion" },
            { label: "Mapeo térmico: qué es y qué evidencia genera", href: "/blog/mapeo-termico" },
            { label: "Cadena de frío: dónde se rompe y cómo se demuestra", href: "/blog/cadena-de-frio" },
        ],
    },
    {
        slug: "cadena-de-frio",
        title: "Cadena de frío: dónde se rompe y cómo se demuestra que se mantuvo",
        description:
            "Qué es la cadena de frío, en qué eslabones falla, qué rangos aplican a cada equipo y qué evidencia pide una auditoría para dar por buena la conservación.",
        datePublished: "2026-08-03",
        dateModified: "2026-08-03",
        author: "CAYCER Ingeniería y Metrología",
        pillar: "Cadena de frío",
        readingMinutes: 8,
        heroImage: "/cadena-frio-hero.webp",
        related: [
            { label: "Validación de procesos y sistemas", href: "/servicios/validacion" },
            { label: "Mapeo térmico: qué es y qué evidencia genera", href: "/blog/mapeo-termico" },
            { label: "Sector farmacéutico", href: "/sectores/farmaceutico" },
        ],
    },
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
            { label: "Cadena de frío: dónde se rompe y cómo se demuestra", href: "/blog/cadena-de-frio" },
            { label: "Sector farmacéutico", href: "/sectores/farmaceutico" },
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

/**
 * Convierte "2026-07-30" en "2026-07-30T09:00:00-06:00".
 *
 * El schema guarda solo la fecha porque es lo que se muestra y lo que necesita
 * el sitemap, pero Google exige ISO 8601 con hora y zona horaria en el
 * `uploadDate` de VideoObject y lo marca como advertencia si falta. El desfase
 * es -06:00 fijo: Jalisco no aplica horario de verano desde 2022.
 */
export function toSchemaDateTime(date: string): string {
    return `${date}T09:00:00-06:00`;
}
