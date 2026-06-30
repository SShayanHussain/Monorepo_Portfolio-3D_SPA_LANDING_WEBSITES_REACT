import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";
import { motion } from "framer-motion";

const { testimonials } = siteContent;

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-surface-50 py-24 md:py-32 border-y border-surface-200">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          headline={testimonials.headline}
          align="center"
          className="text-cream"
        />
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="bg-surface p-10 md:p-12 shadow-sm rounded-2xl border border-surface-100 flex flex-col"
            >
              {/* Quote icon */}
              <div className="text-brand-300 mb-6 opacity-50">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.41 14.5916C16.5925 14.0792 16.6667 13.5292 16.625 12.9833H14C12.8954 12.9833 12 12.0879 12 10.9833V5.98333C12 4.87876 12.8954 3.98333 14 3.98333H19C20.1046 3.98333 21 4.87876 21 5.98333V13.0879C21 13.5658 20.9167 14.0387 20.755 14.4858L17.755 22.8687C17.525 23.5113 16.7904 23.8346 16.1479 23.6046C15.6562 23.4287 15.3429 22.955 15.3617 22.4342L14.017 21ZM5.01667 21L7.40958 14.5916C7.59208 14.0792 7.66625 13.5292 7.62458 12.9833H5C3.89543 12.9833 3 12.0879 3 10.9833V5.98333C3 4.87876 3.89543 3.98333 5 3.98333H10C11.1046 3.98333 12 4.87876 12 5.98333V13.0879C12 13.5658 11.9167 14.0387 11.755 14.4858L8.755 22.8687C8.525 23.5113 7.79042 23.8346 7.14792 23.6046C6.65625 23.4287 6.34292 22.955 6.36167 22.4342L5.01667 21Z" />
                </svg>
              </div>
              
              <p className="text-cream-20 font-body text-lg font-light leading-relaxed mb-10 flex-grow">
                "{review.text}"
              </p>
              
              <div className="mt-auto">
                <p className="text-cream font-display text-xl font-medium mb-1">{review.author}</p>
                <p className="text-brand-600 font-body text-xs uppercase tracking-widest">{review.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
