/**
 * Medición: píxel de Meta y Google Analytics 4.
 *
 * Ambos se cargan después de la hidratación, nunca durante el prerender, y
 * cada uno solo si su variable de entorno existe: sin ella el sitio se comporta
 * como si esa herramienta no estuviera instalada. Eso mantiene el desarrollo
 * limpio de datos falsos y permite desplegar antes de tener los identificadores.
 *
 * La carga vive aislada en initAnalytics() a propósito: si más adelante se añade
 * un banner de consentimiento, basta con llamarla cuando la persona acepte.
 */

/**
 * Normaliza un identificador que siempre lleva prefijo fijo.
 *
 * Existe porque al capturar las variables en el panel de despliegue es fácil
 * perder el prefijo, y el fallo resultante es silencioso: el script carga, no
 * hay error en consola, y simplemente no llega ningún dato. Como "G-" y "GTM-"
 * son invariables, reponerlos es seguro y no puede enmascarar un ID distinto.
 */
function conPrefijo(valor: string | undefined, prefijo: string) {
    const v = valor?.trim();
    if (!v) return undefined;
    return v.startsWith(prefijo) ? v : `${prefijo}${v}`;
}

const META_ID = (import.meta.env.VITE_META_PIXEL_ID as string | undefined)?.trim() || undefined;
const GA4_ID = conPrefijo(import.meta.env.VITE_GA4_ID as string | undefined, "G-");
const GTM_ID = conPrefijo(import.meta.env.VITE_GTM_ID as string | undefined, "GTM-");

interface Fbq {
    (...args: unknown[]): void;
    callMethod?: (...args: unknown[]) => void;
    queue?: unknown[][];
    push?: unknown;
    loaded?: boolean;
    version?: string;
}

declare global {
    interface Window {
        fbq?: Fbq;
        _fbq?: Fbq;
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
    }
}

let iniciado = false;

function cargarScript(src: string) {
    const s = document.createElement("script");
    s.async = true;
    s.src = src;
    document.head.appendChild(s);
}

/**
 * Snippet oficial de Meta, escrito de forma legible. Crea una cola en
 * window.fbq para que los eventos disparados antes de que termine la descarga
 * no se pierdan.
 */
function initMeta() {
    if (!META_ID || window.fbq) return;

    const cola: unknown[][] = [];
    const fbq: Fbq = function (...args: unknown[]) {
        if (fbq.callMethod) fbq.callMethod(...args);
        else cola.push(args);
    };
    fbq.queue = cola;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";

    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;

    cargarScript("https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", META_ID);
    fbq("track", "PageView");
}

/**
 * Google Tag Manager. No mide nada por sí mismo: es el contenedor desde el que
 * se configuran las etiquetas (GA4, píxel, etc.) sin tocar código. Los eventos
 * de conversión de este módulo se empujan al dataLayer, así que dentro de GTM
 * quedan disponibles como disparadores de tipo "evento personalizado".
 */
function initGTM() {
    if (!GTM_ID) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    cargarScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
}

function initGA4() {
    if (!GA4_ID || window.gtag) return;

    window.dataLayer = window.dataLayer || [];
    const gtag: (...args: unknown[]) => void = (...args) => {
        window.dataLayer!.push(args);
    };
    window.gtag = gtag;

    cargarScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`);
    gtag("js", new Date());
    // send_page_view en false: en una SPA la vista inicial y los cambios de
    // ruta se disparan a mano desde trackPageView, y dejar que gtag también la
    // envíe duplicaría la primera.
    gtag("config", GA4_ID, { send_page_view: false });
}

/** Arranca ambas herramientas y registra la primera vista. Idempotente. */
export function initAnalytics() {
    if (typeof window === "undefined" || iniciado) return; // prerender
    iniciado = true;
    // GTM primero: si dentro de él vive la etiqueta de GA4, conviene que el
    // contenedor esté cargando antes de que se empujen los primeros eventos.
    initGTM();
    initMeta();
    initGA4();
    trackPageView();
}

/** Vista de página. En Meta la inicial ya va en init; aquí solo cuenta GA4. */
export function trackPageView() {
    if (typeof window === "undefined") return;
    window.gtag?.("event", "page_view", {
        page_path: window.location.pathname,
        page_location: window.location.href,
        page_title: document.title,
    });
}

/** Cambio de ruta en la SPA: ambas herramientas necesitan enterarse. */
export function trackRouteChange() {
    if (typeof window === "undefined") return;
    window.fbq?.("track", "PageView");
    trackPageView();
}

/**
 * Conversiones. Se envían a las dos plataformas con el nombre que cada una
 * espera: Meta usa su catálogo de eventos estándar y GA4 el suyo, y usar los
 * nombres canónicos es lo que permite marcarlos como conversión sin
 * configuración adicional.
 */
type Conversion = "contacto_whatsapp" | "formulario_enviado";

const mapa: Record<Conversion, { meta: string; ga4: string }> = {
    contacto_whatsapp: { meta: "Contact", ga4: "contact" },
    formulario_enviado: { meta: "Lead", ga4: "generate_lead" },
};

export function trackConversion(tipo: Conversion, params: Record<string, unknown> = {}) {
    if (typeof window === "undefined") return;
    const { meta, ga4 } = mapa[tipo];
    window.fbq?.("track", meta, params);
    window.gtag?.("event", ga4, params);
    // Para GTM: el nombre en español es el que se usa como disparador de
    // "evento personalizado" dentro del contenedor.
    window.dataLayer?.push({ event: tipo, ...params });
}

/** Para no prometer datos que no se están midiendo. */
export const medicionActiva = {
    meta: Boolean(META_ID),
    ga4: Boolean(GA4_ID),
    gtm: Boolean(GTM_ID),
};
