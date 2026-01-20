export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    image: string;
    features?: string[];
    specs?: Record<string, string>;
}

export const products: Product[] = [
    // TERMOMETROS
    {
        id: "termometro-digital-lab",
        name: "Termómetro Digital",
        category: "Termómetros",
        description: "Termómetro digital de alta precisión para laboratorios y procesos críticos.",
        image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800",
        features: ["Lectura directa", "Pantalla Clara", "Alta Estabilidad"],
        specs: { "Rango": "-50 a 300 °C", "Uso": "Laboratorio / Industrial" }
    },
    {
        id: "datalogger-temperatura",
        name: "Data Logger de Temperatura",
        category: "Termómetros",
        description: "Registrador de datos continuo para monitoreo de áreas y transporte.",
        image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800",
        features: ["Memoria interna", "Conexión USB", "Software de reporte"],
        specs: { "Precisión": "±0.5 °C", "Batería": "Larga duración" }
    },

    // HUMEDAD RELATIVA
    {
        id: "termohigrometro-digital",
        name: "Termohigrómetro Digital",
        category: "Humedad Relativa",
        description: "Medición simultánea de temperatura y humedad relativa ambiental.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
        features: ["Dual display", "Función Min/Max", "Certificable H-98"],
        specs: { "Rango HR": "10% a 95%", "Rango Temp": "0 a 50 °C" }
    },
    {
        id: "deshumidificador-industrial",
        name: "Deshumidificador",
        category: "Humedad Relativa",
        description: "Control de humedad en recintos y almacenes industriales.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
        features: ["Alta capacidad", "Operación silenciosa", "Filtro lavable"],
        specs: { "Control": "Electrónico", "Capacidad": "Variable segun modelo" }
    },

    // PRESIÓN
    {
        id: "manometro-proceso",
        name: "Manómetro de Presión",
        category: "Presión",
        description: "Instrumento robusto para medición de presión en tuberías y recipientes.",
        image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=800",
        features: ["Carcasa de acero", "Conexión inferior/posterior", "Glicerina opcional"],
        specs: { "Rango": "0 a 10,000 PSI", "Material": "Acero Inoxidable" }
    },
    {
        id: "presion-diferencial-sala",
        name: "Sensor de Presión Diferencial",
        category: "Presión",
        description: "Ideal para monitoreo de diferenciales en salas limpias y ductos HVAC.",
        image: "https://images.unsplash.com/photo-1581092434413-ae6016cc9092?auto=format&fit=crop&q=80&w=800",
        features: ["Alta sensibilidad", "Salida 4-20mA", "Fácil instalación"],
        specs: { "Rango": "±50 Pa", "Aplicación": "Cuartos Limpios" }
    },

    // MASA
    {
        id: "balanza-analitica",
        name: "Balanza Analítica",
        category: "Masa",
        description: "Balanza de alta precisión para pesaje de muestras en laboratorio.",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
        features: ["Calibración interna", "Protector de aire", "Múltiples unidades"],
        specs: { "Lectura": "0.1 mg", "Capacidad": "220 g" }
    },
    {
        id: "pesas-patron",
        name: "Kit de Pesas Patrón",
        category: "Masa",
        description: "Pesas de referencia para verificación y ajuste de instrumentos para pesar.",
        image: "https://images.unsplash.com/photo-1590233465376-403c99f4999b?auto=format&fit=crop&q=80&w=800",
        features: ["Clase E2/F1/M1", "Caja protectora", "Acabado pulido"],
        specs: { "Material": "Acero inoxidable", "Normativa": "OIML R111" }
    }
];

export const categories = Array.from(new Set(products.map(p => p.category)));
