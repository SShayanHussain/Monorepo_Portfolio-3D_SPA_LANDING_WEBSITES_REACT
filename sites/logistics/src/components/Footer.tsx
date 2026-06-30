import { siteContent } from "@/data/content";

const { footer, brand } = siteContent;

export default function Footer() {
  return (
    <footer className="bg-surface-100 py-16 border-t border-surface-200">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <h2 className="text-2xl font-display uppercase tracking-widest text-textMain">
            {brand}
          </h2>
          
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-body text-sm font-medium text-textMuted">
            {footer.links.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-brand transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
          
        </div>
        
        <div className="text-center text-xs font-body text-surface-200 uppercase tracking-widest pt-8 border-t border-surface-200/50">
          <p>© {new Date().getFullYear()} {brand} LOGISTICS. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
