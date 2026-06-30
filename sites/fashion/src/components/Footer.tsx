import { siteContent } from "@/data/content";

const { footer, brand } = siteContent;

export default function Footer() {
  return (
    <footer className="bg-surface text-cream py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          <div>
            <h2 className="text-3xl font-display font-medium tracking-wide">{brand}</h2>
          </div>
          
          <div>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-body text-xs tracking-widest uppercase text-brand-600">
              {footer.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-cream transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
        <div className="mt-16 text-center text-xs font-body tracking-wider text-brand-300 uppercase">
          <p>© {new Date().getFullYear()} {brand}.</p>
        </div>
      </div>
    </footer>
  );
}
