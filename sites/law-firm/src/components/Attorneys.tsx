import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { attorneys } = siteContent;

export default function Attorneys() {
  return (
    <Section id="attorneys" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={attorneys.eyebrow}
          headline={attorneys.headline}
          className="text-cream"
        />
        
        <div className="mt-20 space-y-24">
          {attorneys.members.map((member, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-start ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-1/3 aspect-[3/4] relative overflow-hidden bg-surface-200">
                <img 
                  src={member.image.src} 
                  alt={member.image.alt}
                  className="w-full h-full object-cover grayscale contrast-125"
                  loading="lazy"
                />
              </div>
              
              <div className="w-full lg:w-2/3 flex flex-col justify-center py-6">
                <h3 className="text-4xl font-display text-cream mb-2">
                  {member.name}
                </h3>
                <p className="text-brand-500 font-body uppercase tracking-widest text-sm font-semibold mb-8">
                  {member.title}
                </p>
                
                <div className="mb-8 space-y-3 pb-8 border-b border-surface-200">
                  <p className="text-cream-20 font-body">
                    <strong className="text-cream font-medium">Bar Admissions:</strong> {member.admissions}
                  </p>
                  <p className="text-cream-20 font-body">
                    <strong className="text-cream font-medium">Education:</strong> {member.education}
                  </p>
                </div>
                
                <p className="text-lg leading-relaxed text-cream-20 font-light max-w-3xl">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
