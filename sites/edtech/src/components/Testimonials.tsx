import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { testimonials } = siteContent;

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-brand-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          headline={testimonials.headline}
          align="center"
          className="text-cream"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.reviews.map((review, index) => (
            <div key={index} className="bg-surface p-10 rounded-3xl shadow-sm border border-surface-200">
              <div className="flex gap-2 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5 text-brand-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-cream-20 font-body text-lg leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 border-t border-surface-100 pt-6">
                <div className="w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center text-brand-700 font-bold font-display">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="text-cream font-display font-bold">{review.author}</p>
                  <p className="text-brand-600 font-body text-sm font-medium">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
