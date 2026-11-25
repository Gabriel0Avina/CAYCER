import { socialProfiles } from "@/lib/social"

/**
 * Datos del programa. El blog empuja al podcast: cada artículo termina
 * invitando a ver o escuchar un episodio, así que los enlaces del programa
 * viven en un solo lugar.
 */
export const PODCAST = {
    nombre: "Podcast CAYCER",
    lema: "Lo que nadie ve",
    spotifyUrl: "https://open.spotify.com/show/11wxG5vmB4Z5sQCNKCMsVh",
    youtubeUrl: socialProfiles.find((p) => p.name === "YouTube")!.url,
    temporada: 1,
    /**
     * Episodio grabado que aún no tiene artículo. Se muestra como
     * "Próximamente" en la franja de la temporada; al publicar su artículo,
     * se quita de aquí.
     */
    proximo: {
        numero: 3,
        titulo: "La vacuna no avisa: la cadena de frío desde adentro",
        duracion: "33:51",
    } as { numero: number; titulo: string; duracion: string } | null,
}

/** 125 -> "02:05". Los capítulos del podcast nunca pasan de una hora. */
export function mmss(segundos: number) {
    const m = Math.floor(segundos / 60)
    const s = segundos % 60
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}

/**
 * Ancla de un encabezado: "¿Qué es un patrón?" -> "que-es-un-patron".
 * La usan el índice del artículo y los h2 del Markdown, que deben coincidir.
 */
export function anclaDe(texto: string) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 60)
        .replace(/-+$/g, "")
}

/** Encabezados de segundo nivel del Markdown, en orden, para el índice. */
export function encabezadosDe(markdown: string) {
    return [...markdown.matchAll(/^## (.+)$/gm)].map((m) => {
        const texto = m[1].trim()
        return { id: anclaDe(texto), texto }
    })
}

/** Fecha corta para listas: "24 nov 2026". */
export function fechaCorta(iso: string) {
    return new Date(`${iso}T12:00:00`)
        .toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" })
        .replace(".", "")
}

/** Fecha larga para el encabezado: "24 de noviembre de 2026". */
export function fechaLarga(iso: string) {
    return new Date(`${iso}T12:00:00`).toLocaleDateString("es-MX", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })
}
