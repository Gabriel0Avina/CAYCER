import { Settings, ShieldCheck, ClipboardCheck, Thermometer, Droplets, Wind, Factory, Warehouse, Monitor, Laptop } from "lucide-react";
import type { ComprehensiveService } from "../types";

export const comprehensiveServices: ComprehensiveService[] = [
    {
        category: "Calibración de Instrumentos",
        icon: Settings,
        description: "Servicios acreditados ante la EMA (T-225 y H-98) para Temperatura y Humedad.",
        color: "from-blue-600 to-cyan-500",
        services: [
            {
                name: "Temperatura",
                icon: Thermometer,
                details: [
                    "Acreditación EMA T-225",
                    "Alcance: -33.7 ⁰C a 150 ⁰C",
                    "Termómetros analógicos",
                    "Termopares",
                    "Dataloggers y Graficadores"
                ]
            },
            {
                name: "Humedad Relativa",
                icon: Droplets,
                details: [
                    "Acreditación EMA H-98",
                    "Alcance: 20% a 80% H.R.",
                    "Termohigrómetros e Higrómetros",
                    "Sensores y Dataloggers de humedad"
                ]
            }

        ]
    },
    {
        category: "Calificación (Acreditación ME-57)",
        icon: ShieldCheck,
        description: "Servicio acreditado por EMA para equipos, sistemas e instalaciones.",
        color: "from-brand to-brand-light",
        services: [
            {
                name: "Equipos y Sistemas",
                icon: Monitor,
                details: [
                    "Refrigeración y Congelación",
                    "Incubadoras y Cámaras climáticas",
                    "Hornos y Estufas",
                    "Campanas de flujo laminar"
                ]
            },
            {
                name: "Almacenes y Recintos",
                icon: Warehouse,
                details: [
                    "Mapeo ambiental (T y HR)",
                    "Mapeo térmico en habitaciones",
                    "Monitoreo de 7 días continuos"
                ]
            },
            {
                name: "Cuartos Limpios",
                icon: Wind,
                details: [
                    "Conteo de partículas",
                    "Velocidad y volumen de aire",
                    "Patrones de flujo y presión"
                ]
            }
        ]
    },
    {
        category: "Validación y Documentación",
        icon: ClipboardCheck,
        description: "Cumplimiento integral con GAMP 5, NOM-059 y gestión de riesgos de calidad.",
        color: "from-cyan-600 to-teal-500",
        services: [
            {
                name: "Sistemas Computarizados",
                icon: Laptop,
                details: [
                    "Validación CRM, ERP e Informáticos",
                    "Administradores de sistemas",
                    "Cumplimiento GAMP 5",
                    "Integridad de Datos"
                ]
            },
            {
                name: "Servicios Críticos y Logística",
                icon: Factory,
                details: [
                    "Sistema de aire comprimido",
                    "Procesos de esterilización (Autoclaves)",
                    "Red de frío (Unidades de reparto)",
                    "Embalaje y Distribución",
                    "Gestión de riesgos de calidad"
                ]
            }
        ]
    }
];
