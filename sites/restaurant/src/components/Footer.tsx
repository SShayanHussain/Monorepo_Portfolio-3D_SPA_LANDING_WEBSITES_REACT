import { siteContent } from "@/data/content";

const { footer } = siteContent;

export default function Footer() {
  return (
    <footer className="bg-surface-200 border-t border-brand-500/10">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
        
        {/* Map placeholder */}
        <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
          <img 
            src={footer.map.src} 
            alt={footer.map.alt} 
            className="h-full w-full object-cover grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all duration-700" 
            loading="lazy"
          />
        </div>

        {/* Footer content */}
        <div className="flex w-full flex-col justify-between p-12 md:w-1/2 md:p-24 gap-16">
          <div>
            <h2 className="font-display text-h3 text-cream mb-4">{siteContent.brand}</h2>
            <p className="text-cream/60 text-small max-w-xs leading-relaxed">
              Serving honest food and good wine.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-4 border-t border-cream/10 pt-8">
            <div className="flex gap-6">
              {footer.social.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-small font-medium uppercase tracking-widest text-cream/50 hover:text-brand-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-small text-cream/40">
              © {new Date().getFullYear()} {siteContent.brand}.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
