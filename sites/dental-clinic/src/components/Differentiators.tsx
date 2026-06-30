import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { philosophy } = siteContent;

export default function Differentiators() {
  return (
    <Section id="philosophy" className="bg-brand-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          
          <div>
            <SectionHeading
              eyebrow={philosophy.eyebrow}
              headline={philosophy.headline}
              className="text-brand-800"
            />
            <p className="mt-6 text-lg text-brand-700/80 leading-relaxed max-w-lg">
              {philosophy.description}
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {philosophy.points.map((point, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-200 text-brand-800 font-bold font-display shadow-sm">
                  0{index + 1}
                </div>
                <div>
                  <h4 className="text-xl font-bold font-display text-brand-900 mb-2">
                    {point.title}
                  </h4>
                  <p className="text-brand-800/70 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </Section>
  );
}
