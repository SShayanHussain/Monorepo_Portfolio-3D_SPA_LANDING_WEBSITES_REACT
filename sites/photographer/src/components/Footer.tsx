import { siteContent } from "@/data/content";

const { footer, brand } = siteContent;

export default function Footer() {
  return (
    <footer className="py-12 bg-brand text-surface font-body text-xs tracking-widest uppercase text-center">
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-8">
        <a href={footer.instagram} className="hover:text-surface-200 transition-colors">Instagram</a>
        <a href={`mailto:${footer.email}`} className="hover:text-surface-200 transition-colors">Email</a>
      </div>
      <p className="text-brand-300 normal-case tracking-normal mb-2">{footer.location}</p>
      <p className="text-brand-400 tracking-normal">&copy; {new Date().getFullYear()} {brand}</p>
    </footer>
  );
}
