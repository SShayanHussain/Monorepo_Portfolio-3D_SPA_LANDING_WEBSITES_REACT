import { siteContent } from "@/data/content";

const { brand, footer } = siteContent;

export default function Footer() {
  return (
    <footer className="bg-surface-50 pt-20 border-t border-surface-200">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 lg:gap-16 pb-16">
          <div className="col-span-1 md:col-span-4">
            <h2 className="text-2xl font-display text-cream tracking-tight mb-8">
              {brand}
            </h2>
            <div className="space-y-2 text-cream-20 font-body text-sm leading-relaxed">
              {footer.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <p className="pt-6"><a href={`tel:${footer.phone.replace(/[^0-9]/g, '')}`} className="text-brand-500 font-medium hover:text-brand-600 transition-colors">{footer.phone}</a></p>
              <p><a href={`mailto:${footer.email}`} className="hover:text-cream transition-colors">{footer.email}</a></p>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-8 bg-surface-100 h-64 md:h-full relative overflow-hidden grayscale contrast-125 border border-surface-200">
            <img 
              src={footer.map.src}
              alt={footer.map.alt}
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
      <div className="bg-cream py-10 text-center">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-xs text-surface-200/50 font-body uppercase tracking-widest mb-6 border-b border-surface-20/10 pb-6 inline-block">
            {footer.disclaimer.split('.')[0]}.
          </p>
          <p className="text-xs text-surface-200/60 font-body max-w-3xl mx-auto leading-relaxed">
            {footer.disclaimer.substring(footer.disclaimer.indexOf('.') + 1).trim()}
          </p>
          <p className="text-xs text-surface-200/40 font-body mt-8">
            © {new Date().getFullYear()} {brand}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
