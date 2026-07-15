export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqCategory {
    category: string;
    items: FaqItem[];
}

/**
 * Preguntas frecuentes reales del negocio. Respuestas de 40-60 palabras,
 * en un párrafo directo, para elegibilidad de featured snippets y citación
 * por motores de IA. El orden de las preguntas alimenta el FAQPage schema.
 *
 * Reglas de contenido: nunca la palabra "garantía" (usar "respaldo"); no se
 * atribuyen requisitos a COFEPRIS; el Suplemento FEUM se menciona sin numeral
 * inventado; siempre ambos teléfonos en el contacto.
 */
export const faqData: FaqCategory[] = [
    {
        category: "Servicios",
        items: [
            {
                question: "¿Qué es la calibración de instrumentos de medición?",
                answer: "La calibración es el conjunto de operaciones que compara las lecturas de un instrumento contra un patrón de referencia trazable, para determinar su exactitud y su incertidumbre. No modifica el instrumento: documenta cuánto se desvía de un valor verdadero, lo que permite confiar en sus mediciones dentro de un margen conocido.",
            },
            {
                question: "¿Qué es la calificación de equipos (DQ, IQ, OQ, PQ)?",
                answer: "La calificación es el proceso que asegura que un equipo o instalación es apropiado para su uso previsto y funciona según sus especificaciones. Consta de cuatro etapas: Calificación de Diseño (DQ), de Instalación (IQ), de Operación (OQ) y de Desempeño (PQ). Es común en equipos críticos de laboratorio y producción farmacéutica.",
            },
            {
                question: "¿Qué es la validación de procesos?",
                answer: "La validación es la evidencia documentada que demuestra que un proceso produce resultados consistentes y conformes a la calidad requerida. Se basa en análisis de riesgos y, típicamente, en tres corridas continuas que confirman la repetibilidad. Aplica a procesos de fabricación, esterilización, sistemas HVAC, aire comprimido y cadena de frío.",
            },
            {
                question: "¿Cuál es la diferencia entre calibración, calificación y validación?",
                answer: "La calibración mide la exactitud de un instrumento contra un patrón. La calificación demuestra que un equipo o instalación es apto para su uso (DQ, IQ, OQ, PQ). La validación demuestra que un proceso completo genera resultados consistentes. Son actividades complementarias: un proceso validado se apoya en equipos calificados con instrumentos calibrados.",
            },
            {
                question: "¿Qué es el mapeo térmico?",
                answer: "El mapeo térmico es la distribución de sensores dentro de un recinto —cámara, almacén, unidad de transporte o autoclave— para registrar cómo varía la temperatura (y en su caso la humedad) en el espacio y en el tiempo. Permite identificar los puntos críticos, calientes y fríos, antes de almacenar o transportar producto sensible.",
            },
        ],
    },
    {
        category: "Acreditaciones y normativa",
        items: [
            {
                question: "¿CAYCER está acreditado ante la EMA?",
                answer: "Sí. CAYCER cuenta con acreditaciones vigentes ante la Entidad Mexicana de Acreditación (EMA) bajo la norma NMX-EC-17025-IMNC-2018, en los alcances T-225 para temperatura, H-98 para humedad relativa y ME-57 para calificación de equipos e instalaciones. El alcance específico puede consultarse en el directorio público de acreditados de la EMA.",
            },
            {
                question: "¿Qué significa la trazabilidad al CENAM?",
                answer: "La trazabilidad al CENAM significa que nuestros patrones de medición están vinculados, mediante una cadena ininterrumpida de comparaciones, a los patrones nacionales del Centro Nacional de Metrología. Esto asegura que un resultado de calibración emitido por CAYCER sea comparable y reconocido a nivel nacional e internacional.",
            },
            {
                question: "¿Qué es la norma NMX-EC-17025-IMNC-2018?",
                answer: "Es la norma mexicana equivalente a la ISO/IEC 17025 que establece los requisitos de competencia técnica e imparcialidad para laboratorios de ensayo y calibración. Un laboratorio acreditado bajo esta norma ha demostrado, ante la EMA, que sus métodos, personal y equipos producen resultados técnicamente válidos.",
            },
            {
                question: "¿Qué diferencia hay entre un servicio acreditado y uno no acreditado?",
                answer: "Un servicio acreditado se realiza dentro de un alcance evaluado por la EMA y su informe puede portar el símbolo de acreditación, con respaldo formal de competencia técnica. Un servicio no acreditado se ejecuta con trazabilidad a patrones nacionales, pero fuera de ese alcance específico. CAYCER indica siempre con claridad cuál corresponde a cada trabajo.",
            },
        ],
    },
    {
        category: "Aspectos prácticos",
        items: [
            {
                question: "¿Cada cuánto debo calibrar mis instrumentos?",
                answer: "No existe un intervalo único: depende del uso, la criticidad de la medición, la recomendación del fabricante y el historial de deriva del instrumento. Como referencia habitual, muchos programas de calidad calibran instrumentos críticos cada 12 meses. CAYCER puede ayudarle a definir la frecuencia adecuada según su análisis de riesgos.",
            },
            {
                question: "¿Qué rangos de temperatura y humedad calibran?",
                answer: "Bajo acreditación EMA, calibramos temperatura de contacto de -33.7 °C a 150 °C (T-225) y humedad relativa de 20 % a 80 % H.R. (H-98). Estos alcances cubren termómetros, dataloggers, sondas, termohigrómetros y registradores usados en cadena de frío, almacenes y laboratorios.",
            },
            {
                question: "¿Realizan la calibración en sitio o en laboratorio?",
                answer: "Realizamos ambas modalidades según el instrumento y la necesidad. La calificación de equipos, el mapeo térmico de almacenes y unidades de transporte y la validación de procesos se ejecutan en las instalaciones del cliente, con cobertura nacional. Los instrumentos portátiles pueden calibrarse en laboratorio.",
            },
            {
                question: "¿Qué documentación entregan al finalizar el servicio?",
                answer: "Entregamos soporte documental exhaustivo: informes de calibración con resultados e incertidumbre, protocolos y reportes de calificación o validación, y la evidencia asociada a cada etapa. Esta documentación sirve como respaldo técnico ante auditorías y programas de aseguramiento de la calidad.",
            },
            {
                question: "¿Atienden fuera de Guadalajara?",
                answer: "Sí. CAYCER tiene cobertura nacional desde su base en San Pedro Tlaquepaque, Jalisco. Los servicios en sitio —calificación, mapeo térmico y validación— se coordinan en cualquier punto de la República Mexicana según la logística del proyecto.",
            },
        ],
    },
    {
        category: "Sectores y cotización",
        items: [
            {
                question: "¿Qué exige el Suplemento de la FEUM para la cadena de frío?",
                answer: "El Suplemento de la Farmacopea de los Estados Unidos Mexicanos establece buenas prácticas para conservar los productos dentro de sus condiciones de temperatura, frecuentemente de 2 °C a 8 °C, con evidencia de mapeo térmico y monitoreo continuo durante almacenamiento y transporte. CAYCER genera esa evidencia mediante servicios acreditados; el numeral aplicable se cita en cada proyecto.",
            },
            {
                question: "¿Qué sectores atiende CAYCER?",
                answer: "Atendemos principalmente a los sectores farmacéutico, alimenticio, químico y hospitalario, donde el control de temperatura, humedad y condiciones de proceso es crítico. También damos servicio a distribuidores y almacenes con cadena de frío, laboratorios y plantas industriales que requieren cumplimiento normativo y trazabilidad.",
            },
            {
                question: "¿Cómo solicito una cotización?",
                answer: "Puede contactarnos por teléfono al 33 3260 1657 o 33 3260 1658, por WhatsApp al 33 3507 1061, o mediante el formulario de la página de contacto. Indíquenos el tipo de servicio, los equipos o instalaciones involucrados y su ubicación, y le preparamos una cotización sin compromiso.",
            },
        ],
    },
];

/** Genera el JSON-LD de tipo FAQPage a partir de faqData. */
export function buildFaqSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.flatMap((cat) =>
            cat.items.map((item) => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer,
                },
            }))
        ),
    };
}
