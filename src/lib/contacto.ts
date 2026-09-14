/**
 * Datos de contacto oficiales (NAP: nombre, dirección, teléfono). Fuente única:
 * alimenta el footer, el schema de la home, las preguntas frecuentes, los
 * términos y todos los botones de WhatsApp.
 *
 * Google cruza estos datos entre el sitio, el Perfil de Empresa y los
 * directorios para confirmar que se trata del mismo negocio; si un número o un
 * correo difiere entre páginas, la señal local se debilita. Por eso ningún
 * componente escribe un teléfono o una dirección a mano: todos leen de aquí.
 */

export interface Telefono {
    /** Formato de lectura, agrupado como se marca en Guadalajara. */
    display: string;
    /** E.164, para `tel:`, `wa.me` y el schema. */
    e164: string;
}

export const NOMBRE_NEGOCIO = "CAYCER Ingeniería y Metrología";

export const direccion = {
    calle: "Batalla de Puebla 3643",
    colonia: "Col. El Tapatío",
    municipio: "San Pedro Tlaquepaque",
    estado: "Jalisco",
    /** Abreviatura ISO 3166-2:MX, la que espera `addressRegion`. */
    estadoCodigo: "JAL",
    codigoPostal: "45588",
    pais: "México",
    paisCodigo: "MX",
} as const;

/** Dirección en una línea, para textos corridos. */
export const direccionCompleta = `${direccion.calle}, ${direccion.colonia}, ${direccion.municipio}, ${direccion.estado}, C.P. ${direccion.codigoPostal}, ${direccion.pais}`;

/** El primero es el principal: es el que declara el schema. */
export const telefonos: Telefono[] = [
    { display: "33 3260 1657", e164: "+523332601657" },
    { display: "33 3260 1658", e164: "+523332601658" },
];

export const whatsapp: Telefono = { display: "33 3507 1061", e164: "+523335071061" };

/** El primero es el principal: es el que declara el schema. */
export const correos = ["ventas@caycer.com.mx", "ventas2@caycer.com.mx"];

export const telefonoPrincipal = telefonos[0];
export const correoPrincipal = correos[0];

export function telHref(tel: Telefono): string {
    return `tel:${tel.e164}`;
}

/**
 * Enlace de WhatsApp con mensaje prellenado. Recibe el texto sin codificar.
 *
 * wa.me exige el número internacional sin "+": sin la lada 52, WhatsApp lee
 * los primeros dígitos como otro país (33 es Francia) y el chat no abre.
 */
export function whatsappUrl(mensaje: string): string {
    const numero = whatsapp.e164.replace("+", "");
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

/** Mensaje por defecto de los botones de cotización. */
export const MENSAJE_COTIZACION = "Hola Caycer, me gustaría solicitar cotización.";
