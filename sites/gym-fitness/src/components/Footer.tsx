import { siteContent } from "@/data/content";

const { brand, footer } = siteContent;

export default function Footer() {
  return (
    <footer className="bg-surface-50 border-t-4 border-brand-500">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-16 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-surface-200 pb-16">
          <div className="col-span-1 md:col-span-4">
            <h2 className="text-3xl font-display font-black text-cream tracking-tight uppercase mb-6">
              {brand}
            </h2>
            <div className="space-y-1 text-cream-20 font-medium">
              <p>900 Iron Works Blvd</p>
              <p>Warehouse District, WA 98104</p>
              <p className="mt-6"><a href="tel:5559876543" className="text-brand-400 hover:text-brand-500 font-bold transition-colors">(555) 987-6543</a></p>
              <p><a href="mailto:train@forgefitness.com" className="hover:text-cream transition-colors">train@forgefitness.com</a></p>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-sm font-bold tracking-widest uppercase text-cream mb-6">
              Facility Hours
            </h3>
            <ul className="space-y-3 text-cream-20">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>5:00 AM - 10:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>7:00 AM - 8:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>7:00 AM - 5:00 PM</span></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-5 h-64 md:h-full bg-surface-100 overflow-hidden relative group border border-surface-200">
            <img 
              src={footer.map.src} 
              alt={footer.map.alt}
              className="w-full h-full object-cover opacity-60 grayscale contrast-125 group-hover:opacity-80 transition-opacity"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-brand-500/10 mix-blend-overlay"></div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-cream-20 font-medium gap-4">
          <p>© {new Date().getFullYear()} {brand}. NO EXCUSES.</p>
          <div className="flex gap-6">
            {footer.social.map((link) => (
              <a key={link.label} href={link.href} className="uppercase font-bold tracking-wider hover:text-brand-400 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
