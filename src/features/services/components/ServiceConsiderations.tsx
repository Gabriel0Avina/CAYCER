import { ClipboardCheck } from "lucide-react";

interface ServiceConsiderationsProps {
    considerations: string[];
}

export function ServiceConsiderations({ considerations }: ServiceConsiderationsProps) {
    return (
        <section className="py-16 bg-slate-50 border-y border-slate-100">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center text-brand">
                            <ClipboardCheck size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">¿Qué se debe tener en cuenta?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {considerations.map((point: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-200/50">
                                <div className="shrink-0 w-6 h-6 bg-cyan/10 rounded-full flex items-center justify-center text-cyan text-xs font-bold">
                                    {idx + 1}
                                </div>
                                <span className="text-slate-700 font-medium">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
