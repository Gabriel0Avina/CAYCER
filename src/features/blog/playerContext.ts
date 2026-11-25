import { createContext, useContext } from "react"

export interface Chapter {
    t: number
    title: string
}

export interface PlayerState {
    start: number
    playing: boolean
    /** Cambia en cada salto para remontar el iframe aunque el minuto se repita. */
    nonce: number
    chapters: Chapter[]
    seek: (t: number) => void
    play: () => void
    playerRef: React.RefObject<HTMLDivElement | null>
}

export const PlayerContext = createContext<PlayerState | null>(null)

/** Null fuera de un artículo de podcast: los botones "Escúchalo" no se pintan. */
export function usePodcastPlayer() {
    return useContext(PlayerContext)
}
