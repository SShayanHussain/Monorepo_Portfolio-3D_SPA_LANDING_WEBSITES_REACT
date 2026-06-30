import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { testimonials } = siteContent;

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-surface-100 py-24 md:py-32 border-t border-surface-200">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          headline={testimonials.headline}
          align="center"
          className="text-cream"
        />
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.reviews.map((review, index) => (
            <div key={index} className="bg-surface p-10 shadow-sm border border-surface-200 rounded-sm">
              <div className="flex gap-1 mb-6 text-brand-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-cream-20 font-body text-lg italic leading-relaxed mb-8">
                "{review.text}"
              </p>
              <p className="text-cream font-display font-bold">{review.author}</p>
              <p className="text-surface-200 font-body text-xs uppercase tracking-widest mt-1">{review.project}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
