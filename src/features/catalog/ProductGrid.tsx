import { useState } from "react";
import { products, categories } from "./catalogData";
import { ProductCard } from "./ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ProductGrid() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filteredProducts = activeCategory
        ? products.filter((p) => p.category === activeCategory)
        : products;

    return (
        <section className="py-20 bg-white min-h-[600px]">
            <div className="container mx-auto px-6">
                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={cn(
                            "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border",
                            activeCategory === null
                                ? "bg-slate-900 text-white border-slate-900 shadow-lg"
                                : "bg-white text-slate-500 border-slate-200 hover:border-cyan hover:text-cyan"
                        )}
                    >
                        Todos
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border",
                                activeCategory === category
                                    ? "bg-slate-900 text-white border-slate-900 shadow-lg"
                                    : "bg-white text-slate-500 border-slate-200 hover:border-cyan hover:text-cyan"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-slate-400 font-light">No se encontraron productos en esta categoría.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
