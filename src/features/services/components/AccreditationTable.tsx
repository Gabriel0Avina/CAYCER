import { ShieldCheck } from "lucide-react";

interface ScopeRow {
    magnitude: string;
    range: string;
    code: string;
}

/**
 * Tabla de alcances acreditados ante la EMA. Formato de tabla comparativa,
 * candidata a table snippet en buscadores y fácil de citar por motores de IA.
 * Datos tomados de las acreditaciones vigentes (T-225, H-98, ME-57).
 */
const scopes: ScopeRow[] = [
    { magnitude: "Temperatura de contacto", range: "-33.7 °C a 150 °C", code: "EMA T-225" },
    { magnitude: "Temperatura en gases", range: "-29 °C a 80 °C", code: "EMA T-225" },
    { magnitude: "Humedad relativa", range: "20 % a 80 % H.R.", code: "EMA H-98" },
    { magnitude: "Calificación de equipos e instalaciones", range: "Según recinto y aplicación", code: "EMA ME-57" },
];

export function AccreditationTable() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center text-brand">
                        <ShieldCheck size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Alcances acreditados ante la EMA</h2>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    CAYCER mantiene acreditaciones vigentes bajo la norma NMX-EC-17025-IMNC-2018.
                    Estos son los alcances por magnitud y código de acreditación:
                </p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-brand text-white">
                                <th className="p-4 font-semibold text-sm">Magnitud</th>
                                <th className="p-4 font-semibold text-sm">Alcance / Rango</th>
                                <th className="p-4 font-semibold text-sm">Acreditación</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scopes.map((row, i) => (
                                <tr key={row.magnitude} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                                    <td className="p-4 text-slate-800 font-medium border-t border-slate-200">{row.magnitude}</td>
                                    <td className="p-4 text-slate-600 border-t border-slate-200">{row.range}</td>
                                    <td className="p-4 border-t border-slate-200">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan/10 text-brand text-xs font-bold">
                                            <ShieldCheck size={13} /> {row.code}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-xs text-slate-400 mt-4">
                    El alcance detallado y vigente puede consultarse en el directorio público de acreditados de la EMA.
                </p>
            </div>
        </section>
    );
}
