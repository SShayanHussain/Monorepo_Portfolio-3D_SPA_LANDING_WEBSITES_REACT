import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { classes } = siteContent;

// High-impact SVG icons for fitness
const icons: Record<string, React.ReactNode> = {
  Flame: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>,
  Dumbbell: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6h2v12H3V6zm16 0h2v12h-2V6zm-8 4h4v4h-4v-4zm-4-2h4v8H7V8zm10 0h-4v8h4V8z" /></svg>,
  Activity: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  Heart: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  Zap: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
};

export default function Classes() {
  return (
    <Section id="classes" className="bg-surface-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={classes.eyebrow}
          headline={classes.headline}
          align="center"
          className="text-cream"
        />
        
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.items.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden bg-surface p-8 transition-all hover:bg-surface-100 border-l-4 border-surface-200 hover:border-brand-500"
            >
              <div className="mb-6 inline-flex text-brand-400 transition-colors group-hover:text-brand-500 group-hover:scale-110 duration-300">
                {icons[item.icon] || icons.Zap}
              </div>
              <h3 className="text-2xl font-display font-bold text-cream mb-3 uppercase tracking-wide">
                {item.name}
              </h3>
              <p className="text-cream-20 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
