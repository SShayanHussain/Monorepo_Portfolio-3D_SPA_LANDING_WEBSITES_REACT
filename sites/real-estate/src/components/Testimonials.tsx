import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { testimonials } = siteContent;

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          headline={testimonials.headline}
          align="left"
          className="text-cream"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.reviews.map((review, index) => (
            <div key={index} className="bg-surface-50 p-10 border border-surface-200">
              <div className="text-brand-500 mb-6 font-display text-6xl leading-none">"</div>
              <p className="text-cream-20 font-body text-lg leading-relaxed mb-8">
                {review.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-200 rounded-full"></div>
                <div>
                  <p className="text-cream font-display font-bold">{review.author}</p>
                  <p className="text-brand-600 font-body text-xs uppercase tracking-widest font-bold mt-1">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
