import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { agents } = siteContent;

export default function Agents() {
  return (
    <Section id="agents" className="bg-surface-50 py-24 md:py-32 border-y border-surface-200">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={agents.eyebrow}
          headline={agents.headline}
          align="center"
          className="text-cream"
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {agents.members.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-md border-4 border-surface">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-display font-bold text-cream">{member.name}</h3>
              <p className="text-brand-600 font-body uppercase tracking-widest text-xs font-bold mt-2 mb-4">{member.title}</p>
              <p className="text-cream-20 font-body text-sm leading-relaxed mb-6 px-4">
                {member.bio}
              </p>
              <a href={`tel:${member.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center gap-2 text-cream hover:text-brand-700 font-bold font-body transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                {member.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
