import { siteContent } from "@/data/content";

const { footer, brand } = siteContent;

/**
 * Standard SaaS footer — product / company / legal columns + brand.
 * Structurally-correct placeholder form (Formspree-style) per memory.md #5.
 */
export default function Footer() {
  const columns = [
    { title: "Product", links: footer.product },
    { title: "Company", links: footer.company },
    { title: "Legal", links: footer.legal },
  ];

  return (
    <footer className="border-t border-white/5 bg-surface-50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand column. */}
          <div>
            <span className="text-h3 font-display font-bold text-gradient">
              {brand}
            </span>
            <p className="mt-3 text-small text-neutral-500">
              Real-time customer analytics.
              <br />
              See what happens, as it happens.
            </p>
          </div>

          {/* Link columns. */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-small font-semibold uppercase tracking-widest text-neutral-400">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-small text-neutral-500 transition-colors duration-150 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-neutral-600 md:flex-row">
          <span>&copy; {new Date().getFullYear()} {brand}. All rights reserved.</span>
          <span>
            Built as a portfolio piece &mdash; not a real product.
          </span>
        </div>
      </div>
    </footer>
  );
}
