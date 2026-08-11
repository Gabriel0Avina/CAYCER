import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { initAnalytics, trackRouteChange } from "@/lib/analytics"

/**
 * Arranca la medición y registra los cambios de ruta.
 *
 * En una SPA no hay recarga al navegar, así que sin esto solo se contaría la
 * primera página que abre cada visitante y el resto del recorrido sería
 * invisible: justo lo que se quiere medir.
 *
 * Va dentro del Router porque useLocation lo requiere, y no renderiza nada.
 */
export function Analytics() {
    const { pathname } = useLocation()
    const primeraCarga = useRef(true)

    useEffect(() => {
        // El efecto no corre durante el prerender, así que los scripts de
        // terceros nunca acaban dentro del HTML estático.
        if (primeraCarga.current) {
            primeraCarga.current = false
            initAnalytics() // ya envía la vista inicial
            return
        }
        trackRouteChange()
    }, [pathname])

    return null
}
