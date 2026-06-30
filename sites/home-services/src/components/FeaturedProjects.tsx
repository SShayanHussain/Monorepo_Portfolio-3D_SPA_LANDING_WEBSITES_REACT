import { Section, SectionHeading } from "@portfolio/ui";
import { siteContent } from "@/data/content";
import BeforeAfterSlider from "./BeforeAfterSlider";

const { featuredProjects } = siteContent;

export default function FeaturedProjects() {
  return (
    <Section id="projects" className="bg-surface-50 py-24 md:py-32 border-y border-surface-200">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow={featuredProjects.eyebrow}
          headline={featuredProjects.headline}
          align="center"
          className="text-cream"
        />
        <p className="text-center text-cream-20 font-body mb-16">{featuredProjects.description}</p>
        
        <div className="flex flex-col gap-24 mt-16">
          {featuredProjects.projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-display font-bold text-cream">{project.title}</h3>
                  <p className="text-brand-600 font-body uppercase tracking-widest text-sm font-semibold mt-2">{project.location}</p>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-xl border border-surface-200">
                <BeforeAfterSlider 
                  beforeImage={project.before} 
                  afterImage={project.after} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
