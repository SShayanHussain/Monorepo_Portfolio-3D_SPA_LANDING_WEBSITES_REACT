import { siteContent } from "@/data/content";

const { footer, brand } = siteContent;

export default function Footer() {
  return (
    <footer className="bg-surface-50 text-cream py-16 border-t border-surface-200">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-display font-bold mb-4">{brand}</h2>
            <div className="space-y-1 font-body text-cream-20 text-sm mb-6">
              {footer.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            {/* Legal requirement for real estate */}
            <p className="text-xs font-bold text-brand-700 tracking-widest uppercase">
              {footer.license}
            </p>
          </div>
          
          <div>
            <h3 className="font-bold tracking-widest uppercase mb-6 text-cream text-sm">Contact</h3>
            <ul className="space-y-3 font-body text-cream-20 text-sm">
              <li>
                <a href={`tel:${footer.phone.replace(/[^0-9]/g, '')}`} className="hover:text-brand-600 transition-colors">
                  {footer.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${footer.email}`} className="hover:text-brand-600 transition-colors">
                  {footer.email}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold tracking-widest uppercase mb-6 text-cream text-sm">Legal</h3>
            <ul className="space-y-3 font-body text-cream-20 text-sm">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Fair Housing Policy</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-16 pt-8 border-t border-surface-200 flex justify-between items-center text-xs font-body text-cream-20">
          <p>© {new Date().getFullYear()} {brand}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
