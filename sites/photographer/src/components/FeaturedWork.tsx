import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/content";

const { portfolio } = siteContent;

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof portfolio.images[0] | null>(null);

  // Filter in place
  const filteredImages = portfolio.images.filter(img => 
    activeCategory === "All" || img.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 bg-surface">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Category Navigation */}
        <div className="flex flex-wrap gap-8 justify-center mb-16">
          {portfolio.categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-xs uppercase tracking-widest transition-colors ${
                activeCategory === cat ? "text-brand" : "text-brand-300 hover:text-brand-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry/Staggered Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layoutId={`container-${img.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden cursor-zoom-in group break-inside-avoid"
                onClick={() => setSelectedImage(img)}
              >
                {/* 
                  Enforce aspect ratio placeholder so there's no layout shift 
                  before the image fully downloads.
                */}
                <div className={`w-full ${img.aspect} bg-surface-200`}>
                  <motion.img 
                    layoutId={`image-${img.id}`}
                    src={img.src} 
                    alt={img.alt} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox / Zoom Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-surface/95 backdrop-blur-sm p-4 sm:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              layoutId={`container-${selectedImage.id}`}
              className="relative max-w-full max-h-full"
            >
              <motion.img
                layoutId={`image-${selectedImage.id}`}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-auto h-auto max-w-full max-h-[90vh] object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
