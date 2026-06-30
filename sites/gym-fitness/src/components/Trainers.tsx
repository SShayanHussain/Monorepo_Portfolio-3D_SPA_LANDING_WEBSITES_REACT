import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { trainers } = siteContent;

export default function Trainers() {
  return (
    <Section id="trainers" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={trainers.eyebrow}
          headline={trainers.headline}
          align="center"
          className="text-cream"
        />
        
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.members.map((member, index) => (
            <div key={index} className="flex flex-col group">
              <div className="relative overflow-hidden mb-6 aspect-[3/4] bg-surface-100">
                <img
                  src={member.image.src}
                  alt={member.image.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-3xl font-display font-black text-cream uppercase tracking-wider mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-500 font-bold tracking-widest text-sm uppercase">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="text-cream-20 leading-relaxed font-medium px-2 border-l-2 border-surface-200 group-hover:border-brand-500 transition-colors">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
