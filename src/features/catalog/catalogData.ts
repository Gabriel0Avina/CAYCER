// TERMÓMETROS
import term1 from "@/assets/termometros/Marca Avaly  Modelo VA-EDT-1-54.webp";
import term2 from "@/assets/termometros/Marca Elitech Modelo RC-5.webp";
import term3 from "@/assets/termometros/Marca Extech Modelo TH-10.webp";
import term4 from "@/assets/termometros/Marca Extech Modelo TM-20.png";
import term5 from "@/assets/termometros/Marca Taylor Modelo 9940N.jpg";

// TERMOHIGROMETROS
import higro1 from "@/assets/termohigrometros/Marca Avaly Modelo VA-EDT-1-55.jpg";
import higro2 from "@/assets/termohigrometros/Marca Elitech Modelo GSP-6.webp";
import higro3 from "@/assets/termohigrometros/Marca Elitech Modelo RCW-600.jpg";
import higro4 from "@/assets/termohigrometros/Marca Elitech Modelo RCW-800.webp";
import higro5 from "@/assets/termohigrometros/Marca Extech Modelo 445702.jpg";
import higro6 from "@/assets/termohigrometros/Marca Extech Modelo 445703.jpg";
import higro7 from "@/assets/termohigrometros/Marca Extech Modelo RHT-20.jpg";
import higro8 from "@/assets/termohigrometros/Marca Extech Modelo RTH-10.jpg";
import higro9 from "@/assets/termohigrometros/Marca Taylor Modelo  1732.jpg";

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
    // TERMÓMETROS
    {
        id: "avaly-va-edt-1-54",
        name: "Avaly VA-EDT-1-54",
        category: "Termómetros",
        description: "Termómetro digital tipo pluma de respuesta rápida, ideal para servicios de monitoreo puntual.",
        image: term1,
        features: ["Resistente al agua", "Diseño compacto", "Lectura rápida"],
        specs: { "Marca": "Avaly", "Temp. Ext": "-50°C a 70°C", "Temp. Int": "-5°C a 50°C" }
    },
    {
        id: "elitech-rc-5",
        name: "Elitech RC-5",
        category: "Termómetros",
        description: "Data logger USB de temperatura, perfecto para el registro continuo en cadena de frío.",
        image: term2,
        features: ["Memoria de 32,000 puntos", "Plug & Play", "Software de reportes"],
        specs: { "Marca": "Elitech", "Rango Temp": "-30°C a 70°C" }
    },
    {
        id: "extech-th-10",
        name: "Extech TH-10",
        category: "Termómetros",
        description: "Registrador de datos de temperatura compacto con interfaz USB integrada.",
        image: term3,
        features: ["Diseño robusto", "Larga duración de batería", "Indicador LED"],
        specs: { "Marca": "Extech", "Modelo": "TH-10", "Rango Temp": "-40°C a 70°C" }
    },
    {
        id: "extech-tm-20",
        name: "Extech TM-20",
        category: "Termómetros",
        description: "Termómetro con sonda externa, ideal para aplicaciones industriales y de laboratorio.",
        image: term4,
        features: ["Sonda de penetración", "Pantalla de fácil lectura", "Montaje en pared"],
        specs: { "Marca": "Extech", "Modelo": "TM-20", "Rango Temp": "-40°C a 70°C" }
    },
    {
        id: "taylor-9940n",
        name: "Taylor 9940N",
        category: "Termómetros",
        description: "Termómetro digital con pantalla retroiluminada y sonda plegable.",
        image: term5,
        features: ["Auto-apagado", "Hold function", "Higiénico"],
        specs: { "Marca": "Taylor", "Modelo": "9940N", "Rango Temp": "-40°C a 150°C" }
    },

    // TERMOHIGROMETROS
    {
        id: "avaly-va-edt-1-55",
        name: "Avaly VA-EDT-1-55",
        category: "Termohigrómetros",
        description: "Termohigrómetro digital de pared para monitoreo ambiental básico de temperatura y humedad.",
        image: higro1,
        features: ["Pantalla dual", "Función Min/Max", "Soporte integrado"],
        specs: { "Marca": "Avaly", "Modelo": "VA-EDT-1-55", "Temp. Ext": "-50°C a 70°C", "Temp. Int": "0°C a 50°C", "Humedad": "5% a 85% HR" }
    },
    {
        id: "elitech-gsp-6",
        name: "Elitech GSP-6",
        category: "Termohigrómetros",
        description: "Data logger avanzado de temperatura y humedad con pantalla LCD y sensores externos.",
        image: higro2,
        features: ["Sensores duales", "Alarma visual", "Alta capacidad de memoria"],
        specs: { "Marca": "Elitech", "Modelo": "GSP-6", "Rango Temp": "-40°C a 85°C", "Humedad": "10% a 99% HR" }
    },
    {
        id: "elitech-rcw-600",
        name: "Elitech RCW-600",
        category: "Termohigrómetros",
        description: "Sistema de monitoreo de temperatura via WiFi para supervisión remota en tiempo real.",
        image: higro3,
        features: ["Conectividad WiFi", "Acceso vía App/Cloud", "Alertas SMS/Email"],
        specs: { "Marca": "Elitech", "Modelo": "RCW-600", "Rango Temp": "-40°C a 80°C" }
    },
    {
        id: "elitech-rcw-800",
        name: "Elitech RCW-800",
        category: "Termohigrómetros",
        description: "Registrador de datos inalámbrico premium para almacenes y áreas logísticas críticas.",
        image: higro4,
        features: ["Pantalla gráfica", "Exportación directa", "Multi-zona"],
        specs: { "Marca": "Elitech", "Modelo": "RCW-800", "Rango Temp": "-40°C a 80°C", "Humedad": "0% a 100% HR" }
    },
    {
        id: "extech-445702",
        name: "Extech 445702",
        category: "Termohigrómetros",
        description: "Termohigrómetro con dígitos grandes para monitoreo visible a distancia en almacenes.",
        image: higro5,
        features: ["Dígitos de 1 pulgada", "Calibrable", "Memoria Min/Max"],
        specs: { "Marca": "Extech", "Modelo": "445702", "Rango Temp": "-10°C a 60°C", "Humedad": "10% a 85% HR" }
    },
    {
        id: "extech-445703",
        name: "Extech 445703",
        category: "Termohigrómetros",
        description: "Termohigrometro de montaje en pared, digitos de 1, humedad: 10 a 99 %, temperatura: -10 a 60 ºc.",
        image: higro6,
        features: ["Sonda externa flexible", "Display grande", "Alta precisión"],
        specs: { "Marca": "Extech", "Modelo": "445703", "Rango Temp": "-10°C a 60°C", "Humedad": "10% a 99% HR" }
    },
    {
        id: "extech-rht-20",
        name: "Extech RHT-20",
        category: "Termohigrómetros",
        description: "Data logger de humedad y temperatura con capacidad de registro masivo de datos.",
        image: higro7,
        features: ["Intervalos programables", "USB directo", "Software incluido"],
        specs: { "Marca": "Extech", "Modelo": "RHT-20", "Rango Temp": "-40°C a 70°C", "Humedad": "0% a 100% HR" }
    },
    {
        id: "extech-rth-10",
        name: "Extech RTH-10",
        category: "Termohigrómetros",
        description: "Registrador de datos ambiental compacto para oficina y laboratorios.",
        image: higro8,
        features: ["Compacto", "Fácil de usar", "Indicador de estado"],
        specs: { "Marca": "Extech", "Modelo": "RTH-10", "Rango Temp": "-40°C a 70°C", "Humedad": "0% a 100% HR" }
    },
    {
        id: "taylor-1732",
        name: "Taylor 1732",
        category: "Termohigrómetros",
        description: "Termohigrómetro digital de precisión con sensor remoto inalámbrico.",
        image: higro9,
        features: ["Sensor inalámbrico", "Alertas de zona", "Diseño elegante"],
        specs: { "Marca": "Taylor", "Modelo": "1732", "Rango Temp": "-10°C a 50°C", "Humedad": "20% a 90% HR" }
    }
];

export const categories = Array.from(new Set(products.map(p => p.category)));
