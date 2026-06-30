import { siteContent } from "@/data/content";

const { footer, brand } = siteContent;

export default function Footer() {
  return (
    <footer className="bg-cream-10 text-surface py-16 border-t border-cream-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-display font-bold mb-4">{brand}</h2>
            <p className="text-surface-200 font-body text-sm">Elevating engineering careers.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 text-center md:text-left">
            <div>
              <ul className="space-y-3 font-body text-surface-200 text-sm">
                {footer.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-brand-400 transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <ul className="space-y-3 font-body text-surface-200 text-sm">
                <li><a href={`mailto:${footer.contact}`} className="hover:text-brand-400 transition-colors">{footer.contact}</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
        </div>
        
        <div className="mt-16 pt-8 border-t border-cream-20 flex justify-center items-center text-sm font-body text-surface-200/50">
          <p>© {new Date().getFullYear()} {brand}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
