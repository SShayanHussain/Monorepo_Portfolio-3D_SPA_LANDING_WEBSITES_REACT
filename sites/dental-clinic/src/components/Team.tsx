import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { team } = siteContent;

export default function Team() {
  return (
    <Section id="team" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={team.eyebrow}
          headline={team.headline}
          align="center"
          className="text-brand-800"
        />
        
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.members.map((member, index) => (
            <div key={index} className="flex flex-col text-center">
              <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border-4 border-brand-100 mb-6 bg-brand-50">
                <img
                  src={member.image.src}
                  alt={member.image.alt}
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold font-display text-cream mb-1">
                {member.name}
              </h3>
              <p className="text-brand-600 font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-cream-20 leading-relaxed max-w-sm mx-auto">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
