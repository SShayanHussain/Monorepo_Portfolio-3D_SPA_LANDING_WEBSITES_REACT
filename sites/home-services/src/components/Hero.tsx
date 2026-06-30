import { Button } from "@portfolio/ui";
import { siteContent } from "@/data/content";

const { hero, footer } = siteContent;

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center bg-cream">
      {/* Tactile Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop" 
          alt="Tactile wood and tools" 
          className="h-full w-full object-cover opacity-30 mix-blend-overlay grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-center px-6 md:px-8">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="inline-block bg-brand-500 text-surface text-xs font-bold uppercase tracking-widest px-4 py-2 mb-8 rounded-sm">
            {footer.license}
          </div>

          <h1 className="text-display font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-surface leading-[1.05]">
            {hero.headline}
          </h1>
          
          <div className="mt-8 mb-10 h-1.5 w-24 bg-brand-500" />
          
          <p className="text-xl md:text-2xl font-body text-surface-200 leading-relaxed font-light">
            {hero.subhead}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <Button 
              href={hero.primaryCta.href} 
              variant="primary" 
              className="bg-brand-500 hover:bg-brand-600 text-surface font-body font-bold tracking-wide px-10 py-5 transition-all shadow-md rounded-none uppercase text-sm border-b-4 border-brand-700 active:border-b-0 active:translate-y-1"
            >
              {hero.primaryCta.label}
            </Button>
            <Button 
              href={hero.secondaryCta.href} 
              variant="secondary" 
              className="bg-surface/10 hover:bg-surface/20 text-surface font-body font-bold tracking-wide px-10 py-5 transition-all rounded-none uppercase text-sm border border-surface/30"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>

          {/* Prominent Phone Number */}
          <div className="mt-12 flex items-center gap-4 text-surface">
            <div className="bg-brand-500 p-3 rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm text-surface-200 uppercase tracking-widest font-bold">Call us direct</p>
              <a href={`tel:${footer.phone.replace(/[^0-9]/g, '')}`} className="text-3xl font-display font-bold hover:text-brand-300 transition-colors">
                {footer.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
