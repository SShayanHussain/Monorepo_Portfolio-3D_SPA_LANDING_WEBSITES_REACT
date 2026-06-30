# PRD — Real estate agency

## Client profile (fictional)
"Meridian Properties" — boutique residential agency, mid-to-luxury listings, the kind of agency that sells lifestyle as much as square footage.

## Goal of this site
Generate qualified buyer/seller leads and showcase listings in a way that feels premium, not like a generic MLS feed. Primary conversion: contact form / "schedule a consultation". Secondary: browse featured listings.

## Sections (in order)
1. **Hero** — 3D scene (see below), agency name, value-prop headline ("Find the home that finds you" — direction, not final copy), CTA "Browse listings" + "Talk to an agent".
2. **Featured listings** — 3–6 property cards, image, price, beds/baths/sqft, address, hover reveals more detail or a "view details" expand.
3. **Why us / stats bar** — agency differentiators as a stat row (years experience, homes sold, avg days on market) — animated count-up on scroll-into-view.
4. **Process** — simple 3–4 step "how it works" for buyers/sellers, can be a horizontal scroll-stepper.
5. **Agent profiles** — photo, name, short bio, contact, for 1–4 agents.
6. **Testimonials** — 2–4 client quotes, carousel or static grid.
7. **Contact / consultation form** — name, contact info, buying or selling, message.
8. **Footer** — office address, map, licensing info (real estate sites often legally require broker license number — include a placeholder field for this).

## 3D concept
Hero scene: an abstracted architectural form — not a literal photorealistic house, but a minimal geometric structure suggesting a home (a simplified low-poly house silhouette, or an abstract composition of floating planes suggesting rooms/windows) that assembles itself on page load (pieces fly/fade into position, 800ms–1.2s, once) and then sits with subtle ambient rotation or a parallax tilt that responds to mouse position on desktop (disabled on touch). This "assembly" entrance is a strong, on-brand metaphor (building a home) and is cheaper to render than a detailed building model.

Mobile fallback: the assembled-state final frame as a static image or a simplified CSS-only version of the same composition (could even be recreated in pure CSS/SVG for mobile — worth considering as the default rather than a 3D fallback, since the geometric abstraction is simple enough to redo in 2D).

## Palette & type direction
Cool neutrals — stone, slate, a single confident accent (deep green or navy). Should read as trustworthy and established, not trendy-startup. Display font: clean geometric sans with some weight. Body: same family, lighter weight, or a complementary serif for an "established agency" feel if differentiation from other niches is wanted.

## Tone of voice for copy
Confident, concise, benefit-led. Real estate copy tends to overuse superlatives ("stunning", "luxurious") — avoid stacking them; let one specific detail do the work instead of three adjectives.

## Conversion priorities
1. "Schedule a consultation" CTA in hero and sticky nav
2. Listings must be scannable in under 5 seconds per card — price and key stats immediately visible, no hover-required information that's actually essential
3. Phone number and contact form both available, not just one (agents get leads via both channels)

## Performance notes specific to this site
Listing photography is high-volume — if this scales beyond the demo 3-6 listings, plan for a CMS-backed image pipeline (out of scope for the portfolio piece itself, but mention this limitation to a real client). For the portfolio version, treat listing images the same as the restaurant gallery: srcset, WebP, lazy below the fold.
