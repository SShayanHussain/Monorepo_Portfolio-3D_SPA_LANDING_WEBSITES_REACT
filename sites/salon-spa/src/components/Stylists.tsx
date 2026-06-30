import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { stylists } = siteContent;

export default function Stylists() {
  return (
    <Section id="stylists" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={stylists.eyebrow}
          headline={stylists.headline}
          align="center"
          className="text-cream"
        />
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          {stylists.members.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-64 h-64 md:w-full md:aspect-[3/4] md:h-auto overflow-hidden rounded-t-full mb-8">
                <img 
                  src={member.image.src} 
                  alt={member.image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-3xl font-display text-cream mb-2">{member.name}</h3>
              <p className="text-brand-500 font-body uppercase tracking-widest text-xs font-semibold mb-6">
                {member.title}
              </p>
              <p className="text-cream-20 font-body font-light leading-relaxed px-4">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
