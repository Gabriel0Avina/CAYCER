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
    | "Calibración"
    | "Mapeo térmico"
    | "Cadena de frío"
    | "Calificación de equipos"
    | "Normativa FEUM"
    | "Podcast";

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
    /**
     * Solo en artículos de un episodio del podcast. Con esto el video pasa a
     * ser lo principal del artículo y los capítulos saltan al minuto.
     */
    episode?: {
        number: number;
        /** "40:48", como lo muestra YouTube. */
        duration: string;
        /** Título corto del episodio para tarjetas y la franja de la temporada. */
        shortTitle: string;
        /** Segundos de inicio de cada capítulo, igual que en YouTube. */
        chapters: { t: number; title: string }[];
        /**
         * Minuto del episodio donde se platica cada sección del artículo. Se
         * busca el texto en el h2 y se le agrega el botón "Escúchalo".
         */
        moments?: { heading: string; t: number }[];
        /** Minuto de cada cita textual, buscada por una frase que contiene. */
        quotes?: { match: string; t: number }[];
    };
    /** Tres ideas clave al inicio del artículo ("En 30 segundos"). */
    summary?: string[];
    /** Cierre propio del artículo; si falta, se usa el del pilar. */
    cta?: { title: string; text: string; whatsappMessage: string };
}

export const blogPosts: BlogPost[] = [
    {
        slug: "podcast-metrologia-episodio-2",
        title: "Podcast CAYCER, episodio 2: cómo leer un certificado de calibración y qué hacer con el error",
        description:
            "Episodio 2 del podcast de CAYCER: qué le pasa a un termómetro en el laboratorio, calibrar o calificar, cómo leer el certificado y qué hacer con el error.",
        datePublished: "2026-11-24",
        dateModified: "2026-11-24",
        author: "CAYCER Ingeniería y Metrología",
        pillar: "Podcast",
        readingMinutes: 9,
        heroImage: "/podcast-episodio-2-hero.webp",
        youtubeId: "ROu3CCUnpsc",
        // Título limpio para el sitio: el de YouTube usa separador por barra,
        // que no lee bien como pie de video ni en el VideoObject.
        youtubeTitle: "Podcast CAYCER #2: Tu equipo puede tener error",
        episode: {
            number: 2,
            duration: "40:48",
            shortTitle: "Tu equipo puede tener error",
            chapters: [
                { t: 0, title: "Apertura" },
                { t: 62, title: "Esto sí pasó" },
                { t: 231, title: "Un termómetro entra al laboratorio" },
                { t: 466, title: "El patrón" },
                { t: 700, title: "Calibrar o calificar" },
                { t: 1067, title: "El certificado" },
                { t: 1656, title: "Dos firmas" },
                { t: 1759, title: "Decidir con el certificado" },
                { t: 2111, title: "Lo que dice internet" },
                { t: 2437, title: "Cierre" },
            ],
            moments: [
                { heading: "Esto sí pasó", t: 62 },
                { heading: "¿Qué le pasa a un termómetro", t: 231 },
                { heading: "¿Qué es un patrón", t: 466 },
                { heading: "¿Un refrigerador se calibra", t: 700 },
                { heading: "¿Qué debe traer un certificado", t: 1067 },
                { heading: "¿Cómo decido con el certificado", t: 1759 },
                { heading: "Lo que dice internet", t: 2111 },
            ],
            // La frase abre el episodio (avance) antes de la apertura.
            quotes: [{ match: "cartitas", t: 0 }],
        },
        summary: [
            "Calibrar es conocer el error de su instrumento; ajustar es corregirlo. Siempre se calibra primero.",
            "El refrigerador se califica y su termómetro se calibra. Para un rango de 2 a 8 °C, lo ideal es calibrar en 0, 5 y 10 °C.",
            "Que el certificado reporte un error no significa que el instrumento no sirva: lo decide su criterio de aceptación.",
        ],
        cta: {
            title: "¿Tiene un certificado y no sabe si su instrumento cumple?",
            text: "Mándenos el informe y el rango en el que usa el instrumento. Le ayudamos a leerlo contra su criterio de aceptación.",
            whatsappMessage: "Hola Caycer, vi el episodio 2 del podcast y quiero revisar un certificado de calibración.",
        },
        related: [
            { label: "Certificado de calibración: qué es y qué contiene", href: "/blog/certificado-de-calibracion" },
            { label: "Podcast CAYCER, episodio 1: metrología y acreditación EMA", href: "/blog/podcast-metrologia-episodio-1" },
            { label: "Calibración de instrumentos de medición", href: "/servicios/calibracion" },
        ],
    },
    {
        slug: "transporte-refrigerado",
        title: "Transporte refrigerado: cómo se valida una ruta, una hielera y la última milla",
        description:
            "Qué se valida en el transporte refrigerado, por qué se mide el sistema y no solo el camión, y qué evidencia se genera en rutas, hieleras y última milla.",
        datePublished: "2026-11-04",
        dateModified: "2026-11-04",
        author: "CAYCER Ingeniería y Metrología",
        pillar: "Cadena de frío",
        readingMinutes: 7,
        // La foto de la unidad de reparto ya ilustra el transporte en el
        // artículo de cadena de frío; aquí es el tema central.
        heroImage: "/cadena-frio-transporte.webp",
        howTo: {
            name: "Cómo se valida el transporte refrigerado",
            steps: [
                {
                    name: "Diagnóstico",
                    text: "Se revisa la operación: rutas, tiempos de recorrido, unidades, hieleras, refrigerantes y embalaje, para definir qué estudio corresponde.",
                },
                {
                    name: "Protocolo",
                    text: "Se define cuántos sensores se usan, dónde van, cuánto dura el estudio y cuántos envíos se instrumentan. En trayectos largos, el envío se valida por triplicado.",
                },
                {
                    name: "Ejecución",
                    text: "Se instrumentan los envíos o la unidad con sensores calibrados, trazables al CENAM, y se registra la temperatura en la ruta real, con la unidad en operación.",
                },
                {
                    name: "Informe",
                    text: "Se documentan la ubicación de cada sensor, las temperaturas registradas, la incertidumbre de medición y la conclusión sobre si el sistema mantuvo el rango.",
                },
            ],
        },
        related: [
            { label: "Validación de procesos y sistemas", href: "/servicios/validacion" },
            { label: "Cadena de frío: dónde se rompe y cómo se demuestra", href: "/blog/cadena-de-frio" },
            { label: "Mapeo térmico: qué es y qué evidencia genera", href: "/blog/mapeo-termico" },
        ],
    },
    {
        slug: "podcast-metrologia-episodio-1",
        title: "Podcast CAYCER, episodio 1: metrología, calibración y acreditación EMA",
        description:
            "Primer episodio del podcast de CAYCER: qué es la metrología, por qué un termómetro nuevo también se calibra, la acreditación EMA y la calificación de equipos.",
        datePublished: "2026-10-19",
        dateModified: "2026-11-24",
        author: "CAYCER Ingeniería y Metrología",
        pillar: "Podcast",
        readingMinutes: 8,
        heroImage: "/podcast-episodio-1-hero.webp",
        youtubeId: "sCN39GzpKk0",
        // Título limpio para el sitio: el de YouTube lleva emoji y separador
        // por barra, que no leen bien como pie de video ni en el VideoObject.
        youtubeTitle: "Podcast CAYCER #1: Metrología, lo que nadie ve",
        episode: {
            number: 1,
            duration: "32:36",
            shortTitle: "Metrología: lo que nadie ve",
            chapters: [
                { t: 0, title: "Apertura" },
                { t: 70, title: "¿Qué es la metrología?" },
                { t: 317, title: "Calibración y trazabilidad" },
                { t: 453, title: "Nuevo no significa calibrado" },
                { t: 730, title: "La incertidumbre es una duda" },
                { t: 868, title: "Acreditados ante la EMA" },
                { t: 1108, title: "Cuando tocan la puerta" },
                { t: 1384, title: "Calificar un equipo" },
                { t: 1837, title: "El Suplemento de la FEUM" },
            ],
            moments: [
                { heading: "¿Qué es la metrología?", t: 70 },
                { heading: "¿Qué es calibrar y qué es la trazabilidad?", t: 317 },
                { heading: "¿Un instrumento nuevo ya viene calibrado?", t: 453 },
                { heading: "¿Qué es la incertidumbre de medición?", t: 730 },
                { heading: "¿Qué significa estar acreditado ante la EMA?", t: 868 },
                { heading: "¿Qué hacer cuando la autoridad sanitaria toca la puerta?", t: 1108 },
                { heading: "¿Qué significa calificar un equipo?", t: 1384 },
                { heading: "¿Qué es el Suplemento de la FEUM?", t: 1837 },
            ],
        },
        related: [
            { label: "Podcast CAYCER, episodio 2: cómo leer un certificado de calibración", href: "/blog/podcast-metrologia-episodio-2" },
            { label: "Certificado de calibración: qué es y qué contiene", href: "/blog/certificado-de-calibracion" },
            { label: "Calibración de instrumentos de medición", href: "/servicios/calibracion" },
        ],
    },
    {
        slug: "certificado-de-calibracion",
        title: "Certificado de calibración: qué es y qué contiene",
        description:
            "Qué es un certificado de calibración, qué debe traer sección por sección, en qué se diferencia de un informe y qué revisar al recibirlo.",
        datePublished: "2026-09-08",
        dateModified: "2026-09-08",
        author: "CAYCER Ingeniería y Metrología",
        pillar: "Calibración",
        readingMinutes: 10,
        heroImage: "/certificado-hero.webp",
        youtubeId: "8c1Si-pW6Gc",
        // Título limpio para el sitio: el de YouTube repite el nombre de la
        // empresa y usa separadores por barra, que no leen bien como pie de
        // video ni dentro del VideoObject.
        youtubeTitle: "Así elaboramos un certificado de calibración: proceso completo",
        related: [
            { label: "Calibración de instrumentos de medición", href: "/servicios/calibracion" },
            { label: "Calificación de equipos: las cuatro etapas", href: "/blog/calificacion-de-equipos" },
            { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
        ],
    },
    {
        slug: "calificacion-de-equipos",
        title: "Calificación de equipos: qué es y cómo son las cuatro etapas",
        description:
            "Qué significa calificar un equipo, en qué se diferencia de calibrar y validar, cómo funcionan las etapas DQ, IQ, OQ y PQ, y qué hay que preparar antes.",
        datePublished: "2026-08-12",
        dateModified: "2026-09-21",
        author: "CAYCER Ingeniería y Metrología",
        pillar: "Calificación de equipos",
        readingMinutes: 8,
        heroImage: "/calificacion-hero.webp",
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
                    text: "Se somete el equipo a sus condiciones de operación en todo el rango declarado, incluidos los extremos, para comprobar que responde según especificación y que sus alarmas y controles actúan cuando deben. Incluye la caracterización térmica con el equipo vacío.",
                },
                {
                    name: "Calificación de desempeño (PQ)",
                    text: "Se demuestra que el equipo sostiene las condiciones en uso real y con carga, durante un periodo representativo. Incluye la caracterización térmica con carga, que ubica el punto más frío y el más caliente en todo el volumen útil.",
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
        dateModified: "2026-11-04",
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
        heroImage: "/mapeo-termico-hero.webp",
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
