import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ImageModalProps {
    imageSrc: string | null;
    altText: string;
    onClose: () => void;
}

export function ImageModal({ imageSrc, altText, onClose }: ImageModalProps) {
    return (
        <AnimatePresence>
            {imageSrc && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
                        >
                            <X size={24} />
                        </button>
                        <img
                            src={imageSrc}
                            alt={altText}
                            className="w-auto h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
