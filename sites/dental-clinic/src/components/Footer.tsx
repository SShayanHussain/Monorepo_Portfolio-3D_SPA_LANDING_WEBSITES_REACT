import { siteContent } from "@/data/content";

const { brand, footer } = siteContent;

export default function Footer() {
  return (
    <footer className="bg-surface-50 border-t border-brand-100">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-16 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-brand-200 pb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-display font-bold text-brand-800 mb-6">
              {brand}
            </h2>
            <div className="space-y-2 text-cream-20 font-medium">
              <p>123 Calm Way, Suite 400</p>
              <p>Seattle, WA 98101</p>
              <p className="mt-4"><a href="tel:5551234567" className="hover:text-brand-600 transition-colors">(555) 123-4567</a></p>
              <p><a href="mailto:hello@clearwaterdental.com" className="hover:text-brand-600 transition-colors">hello@clearwaterdental.com</a></p>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-bold tracking-wider uppercase text-brand-700 mb-6">
              Hours
            </h3>
            <ul className="space-y-2 text-cream-20">
              <li className="flex justify-between"><span>Mon - Thu</span> <span>8:00 AM - 5:00 PM</span></li>
              <li className="flex justify-between"><span>Friday</span> <span>8:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><span>Sat - Sun</span> <span>Closed</span></li>
            </ul>
            <p className="mt-6 text-sm text-brand-600 font-semibold">
              * Emergency after-hours line available for active patients.
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-1 rounded-2xl overflow-hidden h-48 md:h-full bg-brand-100">
            <img 
              src={footer.map.src} 
              alt={footer.map.alt}
              className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-700/60 font-semibold gap-4">
          <p>© {new Date().getFullYear()} {brand}. All rights reserved.</p>
          <div className="flex gap-6">
            {footer.social.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-brand-600 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
