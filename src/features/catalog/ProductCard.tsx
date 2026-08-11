import { motion } from "framer-motion";
import type { Product } from "./catalogData";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { trackConversion } from "@/lib/analytics";

interface ProductCardProps {
    product: Product;
    onImageClick: (image: string) => void;
}

export function ProductCard({ product, onImageClick }: ProductCardProps) {
    const whatsappUrl = `https://wa.me/523335071061?text=Hola%20Caycer,%20me%20gustar%C3%ADa%20solicitar%20cotizaci%C3%B3n%20para%20el%20producto:%20${encodeURIComponent(product.name)}`;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
        >
            {/* Image Container */}
            <div
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => onImageClick(product.image)}
            >
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
                        {product.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan transition-colors duration-300">
                    {product.name}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2 font-light leading-relaxed">
                    {product.description}
                </p>

                {/* Features Preview */}
                {product.features && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {product.features.slice(0, 2).map((feature, idx) => (
                            <span key={idx} className="text-[10px] bg-slate-50 text-slate-500 px-2.5 py-1 rounded-md border border-slate-100 italic">
                                {feature}
                            </span>
                        ))}
                    </div>
                )}

                {/* Specs Table Snippet */}
                {product.specs && (
                    <div className="mt-auto pt-6 border-t border-slate-50 space-y-2">
                        {Object.entries(product.specs).slice(0, 6).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-[11px]">
                                <span className="text-slate-400 uppercase tracking-tight">{key}</span>
                                <span className="text-slate-700 font-medium">{value}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* CTA */}
                <div className="mt-6 flex items-center gap-2">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        // Se registra el producto: cruzar catálogo contra
                        // cotizaciones dice qué instrumentos mueven demanda.
                        onClick={() =>
                            trackConversion("contacto_whatsapp", {
                                origen: "catalogo_producto",
                                producto: product.name,
                            })
                        }
                        className="flex-grow"
                    >
                        <Button
                            variant="outline"
                            className="w-full h-12 rounded-xl border-slate-200 hover:border-cyan hover:bg-cyan/5 text-slate-900 group/btn transition-all duration-300"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Cotizar <MessageCircle size={16} className="text-cyan group-hover/btn:scale-110 transition-transform" />
                            </span>
                        </Button>
                    </a>
                    <button className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors text-slate-400 hover:text-cyan">
                        <ArrowUpRight size={20} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
