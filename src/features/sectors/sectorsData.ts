import { Pill, Apple, FlaskConical, HeartPulse, type LucideIcon } from "lucide-react";

export interface SectorService {
    name: string;
    detail: string;
    /** slug de la página de servicio relacionada, para enlace interno */
    link: string;
}

export interface SectorInfo {
    slug: string;
    name: string;
    icon: LucideIcon;
    /** Frase de una línea para tarjetas y meta description */
    tagline: string;
    /** Definición directa (40-60 palabras) — candidata a snippet, va al inicio */
    intro: string;
    /** "¿Qué necesita este sector?" */
    needs: string[];
    /** Normas y referencias aplicables */
    standards: string[];
    /** Servicios de CAYCER relevantes para el sector */
    services: SectorService[];
}

export const sectorsData: Record<string, SectorInfo> = {
    farmaceutico: {
        slug: "farmaceutico",
        name: "Sector Farmacéutico",
        icon: Pill,
        tagline: "Cadena de frío, áreas limpias y validación bajo normativa farmacéutica.",
        intro: "El sector farmacéutico exige control riguroso de temperatura, humedad y condiciones de proceso para asegurar la eficacia y seguridad de los medicamentos. CAYCER respalda ese cumplimiento con servicios acreditados de calibración, calificación de equipos y validación, generando la evidencia documental que requieren las buenas prácticas de fabricación y distribución.",
        needs: [
            "Cadena de frío de 2 °C a 8 °C en almacenamiento y transporte",
            "Mapeo térmico de cámaras, almacenes y unidades refrigeradas",
            "Calificación de equipos críticos (refrigeradores, ultracongeladores, autoclaves)",
            "Validación de procesos de esterilización y sistemas HVAC de áreas limpias",
            "Trazabilidad documental para auditorías regulatorias",
        ],
        standards: [
            "NMX-EC-17025-IMNC-2018 (competencia de laboratorios)",
            "Suplemento de la FEUM para dispositivos y buenas prácticas",
            "ISO 14644-1 (clasificación de áreas limpias)",
            "GAMP 5 (validación de sistemas computacionales)",
        ],
        services: [
            { name: "Calibración de temperatura y humedad", detail: "Termómetros, dataloggers y termohigrómetros con acreditación EMA T-225 y H-98.", link: "/servicios/calibracion" },
            { name: "Calificación de equipos de frío", detail: "Refrigeradores, congeladores y ultracongeladores con mapeo térmico dinámico (EMA ME-57).", link: "/servicios/calificacion" },
            { name: "Validación de procesos", detail: "Esterilización, HVAC, aire comprimido y cadena de frío con evidencia documentada.", link: "/servicios/validacion" },
        ],
    },
    alimenticio: {
        slug: "alimenticio",
        name: "Sector Alimenticio",
        icon: Apple,
        tagline: "Control térmico e inocuidad en la cadena de frío alimentaria.",
        intro: "En la industria alimentaria, mantener la temperatura correcta a lo largo de la cadena de frío es esencial para la inocuidad y la vida útil del producto. CAYCER calibra los instrumentos de medición, califica los equipos de refrigeración y valida el desempeño térmico de almacenes y unidades de transporte para respaldar la seguridad alimentaria.",
        needs: [
            "Control de temperatura en refrigeración y congelación",
            "Mapeo térmico de cámaras frías, almacenes y transporte",
            "Calibración de termómetros y registradores de temperatura",
            "Verificación de condiciones en unidades de reparto",
            "Evidencia para sistemas de inocuidad y auditorías de clientes",
        ],
        standards: [
            "NMX-EC-17025-IMNC-2018 (competencia de laboratorios)",
            "Principios de análisis de peligros y puntos críticos de control",
            "Especificaciones de temperatura por tipo de producto",
        ],
        services: [
            { name: "Calibración de termómetros", detail: "Instrumentos de contacto y ambientales con trazabilidad EMA T-225.", link: "/servicios/calibracion" },
            { name: "Mapeo térmico de almacenes", detail: "Determinación de puntos críticos en recintos y unidades de transporte.", link: "/servicios/calificacion" },
            { name: "Validación de cadena fría", detail: "Verificación del desempeño térmico en logística local y foránea.", link: "/servicios/validacion" },
        ],
    },
    quimico: {
        slug: "quimico",
        name: "Sector Químico",
        icon: FlaskConical,
        tagline: "Precisión metrológica y control de procesos en la industria química.",
        intro: "La industria química requiere mediciones precisas de temperatura, humedad y presión para operar procesos seguros y consistentes. CAYCER aporta calibración con trazabilidad al CENAM, calificación de equipos de proceso y validación de sistemas críticos, ayudando a mantener el control y la conformidad de la producción.",
        needs: [
            "Calibración precisa de instrumentos de temperatura y humedad",
            "Calificación de hornos, incubadoras y baños de proceso",
            "Validación de sistemas de aire comprimido y HVAC",
            "Control de condiciones ambientales en almacenamiento",
            "Documentación técnica para gestión de calidad",
        ],
        standards: [
            "NMX-EC-17025-IMNC-2018 (competencia de laboratorios)",
            "ISO 8573 (calidad de aire comprimido)",
            "ISO 14644-1 (áreas controladas)",
        ],
        services: [
            { name: "Calibración de instrumentos", detail: "Temperatura de -33.7 °C a 150 °C y humedad de 20 % a 80 % H.R. acreditadas.", link: "/servicios/calibracion" },
            { name: "Calificación de equipos de proceso", detail: "Hornos, incubadoras y baños con recirculación en rangos críticos.", link: "/servicios/calificacion" },
            { name: "Validación de sistemas", detail: "Aire comprimido según ISO 8573 y HVAC según ISO 14644-1.", link: "/servicios/validacion" },
        ],
    },
    hospitalario: {
        slug: "hospitalario",
        name: "Sector Hospitalario",
        icon: HeartPulse,
        tagline: "Calibración y calificación de equipos clínicos y de conservación.",
        intro: "En hospitales y unidades de salud, la exactitud de los equipos de conservación y esterilización impacta directamente en la seguridad del paciente. CAYCER califica autoclaves, refrigeradores de medicamentos y áreas controladas, y calibra los instrumentos que vigilan sus condiciones, con respaldo documental para acreditaciones y auditorías clínicas.",
        needs: [
            "Calificación de autoclaves y equipos de esterilización",
            "Conservación de medicamentos y biológicos en frío controlado",
            "Mapeo térmico de refrigeradores y cámaras de conservación",
            "Calibración de termómetros y termohigrómetros clínicos",
            "Evidencia para certificaciones y auditorías hospitalarias",
        ],
        standards: [
            "NMX-EC-17025-IMNC-2018 (competencia de laboratorios)",
            "Suplemento de la FEUM para conservación de medicamentos",
            "Criterios de validación de esterilización",
        ],
        services: [
            { name: "Calificación de esterilización", detail: "Autoclaves y hornos con perfil térmico y validación de letalidad.", link: "/servicios/validacion" },
            { name: "Calificación de equipos de frío", detail: "Refrigeradores de medicamentos y cámaras de conservación (EMA ME-57).", link: "/servicios/calificacion" },
            { name: "Calibración clínica", detail: "Termómetros y termohigrómetros con acreditación EMA T-225 y H-98.", link: "/servicios/calibracion" },
        ],
    },
};

export const sectorsList = Object.values(sectorsData);
