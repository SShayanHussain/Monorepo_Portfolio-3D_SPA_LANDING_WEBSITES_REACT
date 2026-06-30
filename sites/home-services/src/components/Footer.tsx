import { siteContent } from "@/data/content";

const { footer, brand } = siteContent;

export default function Footer() {
  return (
    <footer className="bg-cream text-surface py-20 border-t-8 border-brand-500">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-display font-bold mb-6">{brand}</h2>
            <p className="text-surface-200 font-body max-w-md mb-8 leading-relaxed">
              {footer.serviceArea}
            </p>
            <div className="inline-block bg-surface/10 px-4 py-2 border border-surface/20 rounded-sm">
              <p className="font-bold tracking-widest uppercase text-sm text-brand-400">
                {footer.license}
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold tracking-widest uppercase mb-6 text-brand-500 text-sm">Contact</h3>
            <ul className="space-y-4 font-body text-surface-200">
              <li>
                <a href={`tel:${footer.phone.replace(/[^0-9]/g, '')}`} className="text-2xl font-bold hover:text-white transition-colors">
                  {footer.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${footer.email}`} className="hover:text-white transition-colors underline decoration-brand-500 underline-offset-4">
                  {footer.email}
                </a>
              </li>
              <li className="pt-4">
                {footer.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold tracking-widest uppercase mb-6 text-brand-500 text-sm">Hours</h3>
            <ul className="space-y-4 font-body text-surface-200">
              {footer.hours.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
          
        </div>
        
        <div className="mt-20 pt-8 border-t border-surface/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-body text-surface-200/50">
          <p>© {new Date().getFullYear()} {brand}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
