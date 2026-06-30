import { siteContent } from "@/data/content";

const { footer, brand, nav } = siteContent;

export default function Footer() {
  return (
    <footer className="border-t border-canvas-200 bg-canvas-100">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-h3 font-semibold text-ink">{brand}</p>
          <p className="mt-3 max-w-xs whitespace-pre-line text-body text-ink-muted">
            {footer.address}
          </p>
          <a
            href={`tel:${footer.phone.replace(/\D/g, "")}`}
            className="mt-3 inline-block text-body font-medium text-brand-600 transition-colors hover:text-brand-700"
          >
            {footer.phone}
          </a>
          <a
            href={`mailto:${footer.email}`}
            className="block text-body text-ink-muted transition-colors hover:text-brand-600"
          >
            {footer.email}
          </a>
        </div>

        <nav aria-label="Footer">
          <p className="text-small font-semibold uppercase tracking-wide text-ink">
            Explore
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-body text-ink-muted transition-colors hover:text-brand-600">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-small font-semibold uppercase tracking-wide text-ink">
            Find us
          </p>
          <a href="#contact" className="mt-4 block overflow-hidden rounded-lg border border-canvas-200">
            <img
              src={footer.map.src}
              alt={footer.map.alt}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover grayscale transition-[filter] duration-300 hover:grayscale-0"
            />
          </a>
          <ul className="mt-4 flex gap-4">
            {footer.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="text-small text-ink-muted transition-colors hover:text-brand-600">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-canvas-200">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-6 text-small text-ink-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {brand} Properties. All rights reserved.
          </p>
          {/* Broker license — legally required on real estate sites (placeholder). */}
          <p>{footer.license}</p>
        </div>
      </div>
    </footer>
  );
}
