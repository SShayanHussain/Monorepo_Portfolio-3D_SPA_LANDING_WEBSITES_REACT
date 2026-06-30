# PRD — SaaS / startup landing page

## Client profile (fictional)
"Pulse" — a B2B analytics SaaS product (adjust the fictional product if a different angle is preferred — project management, dev tooling, and fintech are equally common SaaS landing page archetypes and this PRD's structure applies to any of them). This is explicitly the showcase piece of the portfolio — the site most likely to make another startup founder think "I want my landing page to look like that."

## Goal of this site
Drive signups (free trial / demo request) and communicate product value fast, since SaaS visitors bounce quickly if they don't understand what the product does within seconds. Primary conversion: "Start free trial" / "Get a demo". Secondary: "See how it works".

## Sections (in order)
1. **Hero** — the most ambitious 3D moment in the portfolio (see below), product name, one-sentence value prop, CTA "Start free trial" + secondary "Watch demo" or "Get a demo".
2. **Social proof bar** — logo strip of customers/integrations (placeholder logos for the portfolio version), positioned high on the page since SaaS buyers look for this fast.
3. **Feature showcase** — 3-4 major features, each with its own scroll-triggered micro-interaction (could be a small 3D element per feature, or a sophisticated 2D animated illustration/screenshot reveal) — alternating image-left/text-right and image-right/text-left layout for visual rhythm.
4. **How it works** — 3-step simplified process, can be a horizontal scroll-stepper or numbered cards.
5. **Pricing** — 2-3 tier pricing table, monthly/annual toggle, "most popular" tier highlighted, clear feature comparison.
6. **Testimonials / case study snippet** — 2-3 customer quotes with name/title/company, ideally one short case-study-style stat ("Reduced X by 40%").
7. **FAQ** — accordion, 5-8 common objections/questions addressed.
8. **Final CTA section** — full-width, high-contrast, repeat the primary conversion action one more time before the footer.
9. **Footer** — standard SaaS footer: product links, company links, legal links, social.

## 3D concept
This is where the portfolio gets to be the most experimental, since SaaS audiences expect and reward polish/ambition. Recommended concept: an abstracted representation of "data made visible" — floating geometric data nodes/cards connected by thin glowing lines (a constellation/network metaphor), with the cluster gently rotating and individual nodes subtly pulsing, responding to mouse position with a parallax tilt on desktop. This is built efficiently using `InstancedMesh` for the nodes (don't create individual mesh objects per node) and simple `LineSegments` geometry for the connections, kept performant via the same particle-system techniques as the gym/fitness site even though the visual outcome looks completely different — same underlying technique (instancing), different material/color/motion personality.

Alternative/additional idea: a hero where the 3D scene morphs in response to scroll into an actual product screenshot/mockup frame (the abstract data-node cluster resolves into a clean browser-window mockup showing the actual product UI) — this is a more advanced effect (likely a crossfade/morph between the 3D scene and a 2D mockup overlay rather than true 3D geometry morphing, which is the pragmatic way to achieve this without excessive complexity) and is optional based on time budget; the static node-network concept alone is sufficient if time-constrained.

Mobile fallback: a simplified version of the same node network (reduced node count) rather than fully static — similar reasoning to the gym/fitness site, since this is a portfolio showcase piece and a flat mobile fallback undersells it. If frame testing on mid-tier mobile struggles, fall back to a pre-rendered short looping video of the desktop animation rather than static image, to preserve the "wow" factor mobile visitors would otherwise miss.

## Palette & type direction
Modern SaaS palette — typically a dark mode-first or dark hero section with a vivid single accent (electric blue, violet, or a gradient-adjacent but flat-color-rendered teal-to-blue) against deep charcoal/near-black. Generous whitespace in the lighter sections below the hero. Display font: a contemporary geometric or grotesque sans (the genre of font seen across most modern SaaS sites — clean, slightly tech-forward, good at both large display sizes and smaller UI text). Body: same family, consistent weight discipline (2-3 weights max per the design system rule).

## Tone of voice for copy
Clear, benefit-first, conversational but not cute. Lead every feature with the outcome it produces for the user, not the mechanism ("see every customer drop-off in real time" before "powered by event-stream analytics"). Avoid generic SaaS-speak filler ("seamlessly", "unlock", "empower", "leverage", "game-changing") — name the actual specific thing the product does.

## Conversion priorities
1. Value prop must be understandable within 3 seconds of landing — this is the hardest constraint in the whole portfolio and the headline copy needs multiple drafts to nail
2. Primary CTA repeated at minimum 3 times (hero, after features, final CTA section)
3. Pricing must be transparent if the product model supports it — "contact sales" only works for genuine enterprise products, default to showing real numbers for a self-serve SaaS archetype

## Performance notes specific to this site
This is the site most likely to be tempted into a heavier 3D bundle given the "most ambitious" framing above — the 300KB lazy-chunk budget from CLAUDE.md applies here exactly the same as everywhere else, ambition has to be achieved through clever technique (instancing, simple geometry, good lighting) rather than raw asset weight. If the screenshot-morph idea is attempted, test it in isolation first — crossfading a Canvas with a DOM overlay can introduce layout thrash if not handled carefully (use `opacity` transitions on a fixed-size container, not a layout-affecting property).
