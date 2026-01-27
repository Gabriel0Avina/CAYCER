import { Activity, Thermometer, Droplets, Wind, Truck, Warehouse, Factory, Laptop, ShieldCheck, Snowflake, Gauge } from "lucide-react";
import type { ServiceInfo } from "../types";

import imgQualification from "@/assets/services/qualification.png";
import imgCalibration from "@/assets/services/calibration.png";
import imgValidation from "@/assets/services/validation.png";

export const serviceDetailData: Record<string, ServiceInfo> = {
    "calificacion": {
        title: "Calificación de sistemas, equipos e instalaciones",
        subtitle: "Servicio acreditado por EMA (ME-57) para máxima confiabilidad.",
        description: "La calificación es el proceso de aseguramiento de que un instrumento, equipo, sistema o instalación es apropiado para el uso propuesto y que su funcionamiento está de acuerdo a las especificaciones. Este servicio consta de cuatro etapas esenciales: Calificación de Diseño (CD; DQ), Calificación de Instalación (CI; IQ), Calificación de Operación (CO; OQ) y Calificación de Desempeño (CE; PQ).",
        image: imgQualification,
        considerations: [
            "Recomendaciones del fabricante (manual y ficha técnica)",
            "Requisitos de la instalación Eléctrica",
            "Protección contra perturbaciones Eléctricas",
            "PNO's de operación, mantenimiento y limpieza",
            "Plano de ubicación de los equipos",
            "Verificación operativa y programa de mantenimiento",
            "Criterios de aceptación definidos"
        ],
        detailedSections: [
            {
                title: "Equipos de Frío y Ultra-frío",
                description: "Calificación técnica en rangos críticos de refrigeración y congelación.",
                icon: Snowflake,
                items: [
                    "Congelación (-34°C a -10°C)",
                    "Ultracongelación (-80°C a -30°C)",
                    "Refrigeración (2°C a 8°C)",
                    "Mapeo térmico dinámico"
                ],
                gridItems: [
                    { label: "Acreditación", value: "EMA ME-57 - EMA T-225 - EMA H-98", icon: ShieldCheck },

                ]
            },
            {
                title: "Áreas Limpias y Flujo Laminar",
                description: "Clasificación de áreas desde Clase ISO 1 hasta Clase ISO 9 según ISO 14644-1.",
                icon: Wind,
                items: [
                    "Conteo de partículas totales (>=0.5 μm)  ",
                    "Velocidad  de aire (0.38 m/s a 20 m/s) ",
                    "intensidad luminica (100 lx a 4000 lx)",
                    "Medición de temperatura y humedad",
                    "Nivel de ruido (66 dB a 130 dB)"
                ],
                gridItems: [
                    { label: "Acreditación", value: "EMA ME-57 ", icon: ShieldCheck },

                ]
            },
            {
                title: "Esterilización y Alta Temperatura",
                description: "Validación de autoclaves industriales y de laboratorio con parámetros precisos.",
                icon: Gauge,
                items: [
                    "Autoclave  (100°C a 150°C )",
                    "refirgarador (-10°C a 15°C) ",
                    "Incubadoras y Hornos (20 a 150°C)",
                    "Lecho fluidizado (50°C a 800°C)"
                ],
                gridItems: [
                    { label: "Acreditación", value: "EMA ME-57 - EMA T-225 - EMA H-98", icon: ShieldCheck },

                ]
            },
            {
                title: "Almacenes y Mapeo Ambiental",
                description: "Servicio acreditado para el control de condiciones en recintos de almacenamiento.",
                icon: Warehouse,
                items: [
                    "Monitoreo recomendado (7 días)",
                    "Mapeo ambiental (Temp. y HR)",
                    "Mapeo térmico en recintos",
                    "Determinación de puntos críticos",
                    "temperatura (-34°C a 50°C)",
                    "humedad relativa (20%H.R. a 80%H.R.)",
                ]
                ,
                gridItems: [
                    { label: "Acreditación", value: "EMA ME-57 - EMA T-225 - EMA H-98", icon: ShieldCheck },

                ]
            },
            {
                title: "Simulación de Condiciones",
                description: "Calificación de cámaras climáticas e incubadoras para estudios de estabilidad.",
                icon: Thermometer,
                items: [

                    "Humedad relativa (20% a 80%)",
                    "Incubadora (20°C a 150°C)",
                    "Baño con recirculado (-30°C a 150°C)",
                    "Baño maria",
                    "Baño de lecho fluidizado "
                ],
                gridItems: [
                    { label: "Acreditación", value: "EMA ME-57 - EMA T-225 - EMA H-98", icon: ShieldCheck },

                ]
            },
            {
                title: "Logística y Unidades Móviles",
                description: "Garantizamos la integridad del producto durante su distribución y transporte.",
                icon: Truck,
                items: [
                    "Unidad Refrigerada (-10°C a 15°C)",
                    "Unidad de congelación (-34 a -10°C)",
                    "Temperatura controlada (-34 a 50°C)",
                    "Mapeo en ruta dinámica",
                ]
            }
        ]
    },
    "calibracion": {
        title: "Calibración de instrumentos de medición",
        subtitle: "Certificamos la exactitud de sus instrumentos con trazabilidad comprobable.",
        description: "Contamos con acreditaciones EMA específicas para asegurar la máxima confiabilidad en sus mediciones bajo la norma NMX-EC-17025.",
        image: imgCalibration,
        detailedSections: [
            {
                title: "Temperatura (EMA T-225)",
                description: "Servicio acreditado vigente a partir de 2024-12-04.",
                icon: Thermometer,
                items: [
                    "Temperatura de contacto (-33.7 ⁰C a 150 ⁰C)",
                    "Temperatura en gases (-29 ⁰C a 80 ⁰C)",
                    "Calibración de Termómetros (Digital/Líquido)",
                    "Dataloggers y Sondas de temperatura",
                    "Graficadores y Controladores"
                ],
                gridItems: [
                    { label: "Alcance", value: "-33.7 a 150 ⁰C", icon: Thermometer },
                    { label: "Código", value: "EMA T-225", icon: ShieldCheck }
                ]
            },
            {
                title: "Humedad Relativa (EMA H-98)",
                description: "Servicio acreditado vigente a partir de 2024-12-04.",
                icon: Droplets,
                items: [
                    "Alcance: 20% a 80% H.R.",
                    "Termohigrómetros e Higrómetros",
                    "Sensores de humedad y Dataloggers",
                    "Registradores de humedad"
                ],
                gridItems: [
                    { label: "Alcance", value: "20% a 80% H.R.", icon: Droplets },
                    { label: "Código", value: "EMA H-98", icon: ShieldCheck }
                ]
            }
        ]
    },
    "validacion": {
        title: "Validación de procesos y sistemas",
        subtitle: "Evidencia documentada para demostrar la consistencia y cumplimiento de sus procesos.",
        description: "Implementamos estrategias científicas para demostrar que sus procesos y sistemas cumplen con la calidad requerida.",
        image: imgValidation,
        detailedSections: [
            {
                title: "Procesos de fabricación",
                description: "Recopilación de datos por tres corridas continuas para garantizar la consistencia del producto.",
                icon: Factory,
                items: [
                    "Validación basada en evaluación de riesgos",
                    "Definición de tipo de prueba/monitoreo",
                    "Criterios de aceptación normativos",
                    "Evaluación de datos y acciones",
                    "Tres corridas continuas de validación",
                    "Cumplimiento de atributos de calidad"
                ]
            },
            {
                title: "Esterilización",
                description: "Validación de ciclos para garantizar la eliminación de microorganismos según normativa.",
                icon: Activity,
                items: [
                    "Patrones de carga definidos",
                    "Perfil térmico (12 termopares)",
                    "Validación en cámara vacía y con carga",
                    "Tres corridas continuas",
                    "Control de temperatura, tiempo y presión",
                    "Cumplimiento de requerimientos de usuario"
                ]
            },
            {
                title: "Sistemas Computacionales",
                description: "Pruebas de integridad y seguridad bajo el cumplimiento GxP y GAMP 5.",
                icon: Laptop,
                items: [
                    "Componentes Software y Hardware",
                    "Definición de perfiles de usuario",
                    "Seguridad y respaldo de datos",
                    "Restauración y almacenamiento",
                    "Programas de capacitación y auditoría",
                    "Pruebas de funcionamiento por usuario"
                ]
            },
            {
                title: "Sistemas HVAC",
                description: "Aseguramiento de la calidad de aire y niveles de limpieza según ISO 14644-1.",
                icon: Wind,
                items: [
                    "Clase ISO y nivel de limpieza",
                    "Dimensiones de salas limpias",
                    "Caídas de presión diferencial",
                    "Conteo de partículas viables/no viables",
                    "Mediciones de flujo y volumen aire",
                    "Cambios de aire por hora"
                ]
            },
            {
                title: "Sistema de aire comprimido",
                description: "Calificación de generación, almacenamiento y distribución según ISO 8573.",
                icon: Gauge,
                items: [
                    "Diseño y puntos de uso",
                    "Clasificación de limpieza ISO 8573",
                    "Partículas viables y totales",
                    "Punto de rocío e hidrocarburos",
                    "Gases contaminantes y fugas",
                    "Medición de caídas de presión"
                ]
            },
            {
                title: "Cadena Fría",
                description: "Mantenimiento de rango 2-8 ºC en envíos locales y foráneos por triplicado.",
                icon: Truck,
                items: [
                    "Tiempo de recorrido (Local/Foráneo)",
                    "Calidad de hieleras y refrigerantes",
                    "Material de embalaje optimizado",
                    "Logística (Terrestre, Aérea, etc.)",
                    "Envío por triplicado (Trayecto largo)",
                    "Mantenimiento de 2 a 8 ºC garantizado"
                ]
            },
            {
                title: "Gestión de riesgos de calidad",
                description: "Control preventivo basado en el análisis de puntos críticos.",
                icon: ShieldCheck,
                items: [
                    "Análisis de riesgo detallado",
                    "Estrategias de mitigación",
                    "Monitoreo continuo de riesgos",
                    "Capacitación de personal operativo"
                ]
            }
        ],
        considerations: [
            "Soporte documental adecuado (procedimientos, formatos, protocolos)",
            "Áreas y Equipos Calificados y Calibrados (vigentes)",
            "Responsables de actividad bien definidos en PNO's",
            "Plan Maestro de Validación definido y autorizado",
            "Capacitación de personal",
            "Tiempos de proceso definidos"
        ]
    }
};
