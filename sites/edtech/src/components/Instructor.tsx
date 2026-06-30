import { Section } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { instructor } = siteContent;

export default function Instructor() {
  return (
    <Section id="instructor" className="bg-cream text-surface py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative z-10 border-4 border-brand-500/20">
              <img 
                src={instructor.image} 
                alt={instructor.name} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-500 rounded-full blur-3xl opacity-20 z-0"></div>
          </div>
          
          <div>
            <p className="text-brand-400 font-bold uppercase tracking-widest text-sm mb-4">{instructor.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{instructor.headline}</h2>
            
            <div className="mt-8 pt-8 border-t border-surface-100/10">
              <h3 className="text-2xl font-display font-bold text-surface">{instructor.name}</h3>
              <p className="text-brand-400 font-body mb-6">{instructor.role}</p>
              
              <p className="text-surface-200 font-body text-lg leading-relaxed">
                {instructor.bio}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </Section>
  );
}
