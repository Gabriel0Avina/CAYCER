import type { ServiceSection as ServiceSectionType } from "../types";
import { CheckCircle2 } from "lucide-react";

interface ServiceSectionCardProps {
    section: ServiceSectionType;
}

export function ServiceSectionCard({ section }: ServiceSectionCardProps) {
    const SectionIcon = section.icon;

    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            {SectionIcon && (
                <div className="w-14 h-14 bg-linear-to-br from-brand to-cyan rounded-xl flex items-center justify-center text-white mb-6 shadow-md">
                    <SectionIcon size={28} strokeWidth={1.5} />
                </div>
            )}

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {section.title}
            </h3>

            {section.description && (
                <p className="text-slate-600 mb-6 leading-relaxed grow">
                    {section.description}
                </p>
            )}

            {section.items && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {section.items.map((item: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-cyan/20 transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-cyan mt-0.5 shrink-0" />
                            <span className="text-sm font-medium text-slate-700 leading-tight">{item}</span>
                        </div>
                    ))}
                </div>
            )}

            {section.gridItems && (
                <div className="space-y-3 mt-auto pt-6 border-t border-slate-100">
                    {section.gridItems.map((gridItem, idx) => {
                        const Icon = gridItem.icon;
                        return (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                                {Icon && (
                                    <Icon size={18} className="text-brand shrink-0" />
                                )}
                                <div className="flex-1 min-w-0">
                                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                                        {gridItem.label}
                                    </div>
                                    <div className="text-sm font-medium text-slate-900 truncate">
                                        {gridItem.value}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
