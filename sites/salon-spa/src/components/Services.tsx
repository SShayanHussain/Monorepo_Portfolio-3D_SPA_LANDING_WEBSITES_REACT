import { useState } from "react";
import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";

const { services } = siteContent;

export default function Services() {
  const [activeTab, setActiveTab] = useState(services.categories[0].id);

  const activeCategory = services.categories.find((c) => c.id === activeTab);

  return (
    <Section id="services" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <SectionHeading
          eyebrow={services.eyebrow}
          headline={services.headline}
          align="center"
          className="text-cream"
        />
        
        {/* Tabs */}
        <div className="mt-16 flex justify-center border-b border-surface-200">
          <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
            {services.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`pb-4 text-sm font-body font-medium uppercase tracking-widest transition-colors whitespace-nowrap relative ${
                  activeTab === category.id ? "text-brand-600" : "text-cream-20 hover:text-cream"
                }`}
              >
                {category.title}
                {activeTab === category.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-12 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
            >
              {activeCategory?.items.map((item, index) => (
                <div key={index} className="flex flex-col border-b border-surface-100 pb-6">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-xl font-display font-medium text-cream">{item.name}</h3>
                    <div className="text-lg font-body font-light text-brand-600">{item.price}</div>
                  </div>
                  <p className="text-sm font-body text-cream-20">{item.duration}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </Section>
  );
}
